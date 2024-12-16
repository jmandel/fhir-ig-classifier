File: repos/HL7_SLASH_nhsn-dqm/input/fsh/capabilitystatements/capabilitystatement-data-aggregator.fsh

Instance: NHSNCapabilityStatementDataAggregator
InstanceOf: CapabilityStatement
Title: "NHSN Data Aggregator CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementDataAggregator)
* name = "NHSNCapabilityStatementDataAggregator"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system that aggregates data from multiple Data Source actors before measure evaluation and then plays the role of a Data Source once aggregation is complete. An example would be a state public health agency aggregating data from all facilities in the state before using those data to produce a MeasureReport containing bed capacity data for the entire state. When FHIR enabled, a Data Aggregator acts as a [US Core Server](http://hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-server.html) when playing the role of a Data Source after aggregation. During aggregation, the Data Aggregator acts similar to the SANER options for aggregation, but implements its own CapabilityStatement due to the incompatibilities between DEQM and SANER."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports[+] = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|6.1.0" 
* imports[+] = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0" 
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
* rest[+]
  * mode = #client


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/capabilitystatements/capabilitystatement-data-source.fsh

Instance: NHSNCapabilityStatementDataSource
InstanceOf: CapabilityStatement
Title: "NHSN Data Source CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementDataSource)
* name = "NHSNCapabilityStatementDataSource"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system containing data (typically patient data, but could be situational awareness data) that will be evaluated against one or more measures. This may be a FHIR server, an EHR with a FHIR endpoint (facade), an internal data store when the Data Source and dQM Evaluation Engine actors are played by the same system such as an EHR that does it’s own measure evaluation, or it may be a system containing other data such as situational awareness data that is reporting via CSV or other format. When FHIR enabled, the Data Source acts as a [US Core Server](https://hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-server.html)"
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0" //"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0" UsCoreServerCapabilityStatement
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/capabilitystatements/capabilitystatement-evaluation-engine.fsh

Instance: NHSNCapabilityStatementEvaluationEngine
InstanceOf: CapabilityStatement
Title: "NHSN Data Evaluation Engine CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementEvaluationEngine)
* name = "NHSNCapabilityStatementEvaluationEngine"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system  that retrieves data from the Data Source and evaluates those data against one or more measures retrieved from the Measure Source. The resulting MeasureReport bundle and related resources are then sent to the MeasureReport recipient The dQM Evaluation Engine acts as a [US Core Client](https://www.hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-client.html), a [DEQM Reporter Client](https://www.hl7.org/fhir/us/davinci-deqm/STU4/CapabilityStatement-reporter-client.html), and implements the $evaluation-measure operation"
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports[+] = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client" 
* imports[+] = "http://hl7.org/fhir/us/davinci-deqm/CapabilityStatement/reporter-client" 
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
  * resource[+]
    * type = #Measure
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL

    * operation[+]
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHALL
      * name = "evaluate-measure"
      * definition = "http://hl7.org/fhir/us/davinci-deqm/OperationDefinition/deqm.evaluate-measure"
  

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/capabilitystatements/capabilitystatement-measure-source.fsh

Instance: NHSNCapabilityStatementMeasureSource
InstanceOf: CapabilityStatement
Title: "NHSN Measure Source CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementMeasureSource)
* name = "NHSNCapabilityStatementMeasureSource"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system at NHSN that stores FHIR resources such as Measure, Library, ValueSet, etc. that are used for dQM Reporting. The dQM Evaluation Engine queries the Measure Source for the latest Measure content before querying the Patient Data Source and performing measure evaluation. The Measure Source acts as a [DEQM Publishable Measure Repository](https://hl7.org/fhir/us/cqfmeasures/STU4/measure-repository-service.html)."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/cqfmeasures/CapabilityStatement/publishable-measure-repository|3.0.0" //http://hl7.org/fhir/us/cqfmeasures/CapabilityStatement/publishable-measure-repository  CQFMPublishableMeasureRepository|3.0.0)
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
  * security.description = "Implementations **SHOULD** consider the guidance included [NHSN Security & Privacy Considerations](security.html)."

// TODO, The CQFM meathod of getting the measure/ibrary bundle it through the Library/$cqfm.package operation
  * resource[+]
    * type = #Library
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHOULD
    * supportedProfile = Canonical(CQFMLibrary)
    * supportedProfile.extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD


  * resource[+]
    * type = #Measure
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHOULD
    * supportedProfile = Canonical(CQFMMeasure)
    * supportedProfile.extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD

//Add Bundle. How are these searched for?

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/capabilitystatements/capabilitystatement-measurereport-recipient.fsh

Instance: NHSNCapabilityStatementMeasureReportRecipient
InstanceOf: CapabilityStatement
Title: "NHSN MeasureReport Recipient CapabilityStatement"
Usage: #definition
* url = Canonical(NHSNCapabilityStatementMeasureReportRecipient)
* name = "NHSNCapabilityStatementMeasureReportRecipient"
* status = #active
* experimental = false
* date = "2024-07-30"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This statement defines the expected capabilities of a system at NHSN that receives MeasureReport bundles from the dQM Evaluation Engine and validates the result against the profiles in this implementation guide, and potentially other measure-specific profiles that are distributed with the measures themselves (this kind of validation is referred to as “pre-qualification” at NHSN). The MeasureReport Recipient acts as a [DEQM Receiver Server](https://www.hl7.org/fhir/us/davinci-deqm/STU4/CapabilityStatement-receiver-server.html), provides write access to Bundle resources containing MeasureReport and other related resources, and implements the $validate operation."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/davinci-deqm/CapabilityStatement/receiver-server|4.0.0" //http://hl7.org/fhir/us/cqfmeasures/CapabilityStatement/publishable-measure-repository  CQFMPublishableMeasureRepository|3.0.0)
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* rest[+]
  * mode = #server
  * security.description = "Implementations **SHOULD** consider the guidance included [[https://build.fhir.org/ig/HL7/nhsn-dqm/security.html|NHSN Security & Privacy Considerations]]."

  * resource[+]
    * type = #Bundle
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(NHSNMeasureReportBundle)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * interaction[+]
      * code = #create
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
//TODO. How are these searched for?

  * resource[+]
    * type = #MeasureReport
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(DEQMSubjectListMeasureReport)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(DEQMIndividualMeasureReportProfile)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #SHALL
    * supportedProfile[+] = Canonical(DEQMSummaryMeasureReportProfile)
    * supportedProfile[=].extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * valueCode = #MAY
    * interaction[+]
      * code = #create
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #read
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD
    * interaction[+]
      * code = #search-type
      * extension[+]
        * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
        * valueCode = #SHOULD



---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/codesystems/HealthareCapacityCodeSystem.fsh

CodeSystem: HealthareCapacityCodeSystem
Id: healthcare-capacity-codes
Title: "Healthcare Capacity Reporting Code System"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = true
* ^description = "This CodeSystem defines coded concepts for Healthcare Capacity reporting to NHSN. This CodeSystem is experimental, and is expected to be replaced by LOINC codes once they have been assigned."
* ^caseSensitive = false
* #HOSP "Hospital"
* #IRF "Inpatient Rehabilitation"
* #IPF "Inpatient Psychiatric"
* #CHLD "Children's or Pediatric"
* #OTH "Other facility-within-facility or subunit"
* #BedCapacityReporting "Hospital bed capaicty report"
* #AllBedsOccupied "Census across all beds, including all specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery beds)."
* #AllBedsUnoccupied "Count of unoccupied staffed and unblocked beds across all beds, including specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery)."
* #AdultTotalOccupied "Census across all adult beds (Adult ICU, Adult PCU, Adult MT/MS and Adult OBS), excluding CMS-certified rehabilitation, CMS-certified psychiatric, and obstetrics beds."
* #AdultTotalUnoccupied "Count of unoccupied staffed and unblocked beds across all adult beds (Adult ICU, Adult PCU, Adult MT/MS and Adult OBS), excluding CMS-certified rehabilitation, CMS-certified psychiatric, and obstetrics beds."
* #AdultICUOccupied "Census across all adult intensive care or critical care beds. Adult Critical Care Units provide care and treatment for the highest acuity patients. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #AdultICUUnoccupied "Count of unoccupied staffed and unblocked beds across all adult intensive care or critical care beds. Adult Critical Care Units provide care and treatment for the highest acuity patients. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #AdultICU_LOCOccupied "Census of all patients meeting the admission criteria for critical care (i.e. require ICU level of care) across all adult intensive care or critical care beds. Excludes patients in these beds that do not meet ICU criteria."
* #AdultNonICUOccupied "Census across all adult PCU, MT/MS and OBS beds."
* #AdultNonICUUnoccupied "Count of unoccupied staffed and unblocked beds across all adult PCU, MT, MS and OBS beds."
* #AdultPCUOccupied "Important note for PCU beds: if adult PCU bed census is unable to be separately collected, please make sure the adult PCU census is included in the adult MT/MS census, adult non-ICU census, and adult total bed census. Census across all adult progressive care, intermediate care or step-down beds. Units that provide care for adult moderate severity of illness and comorbid patients."
* #AdultPCUUnoccupied "Important note for PCU beds: if adult PCU unoccupied bed count is unable to be separately collected, please make sure the adult PCU unoccupied bed count is included in the adult MT/MS unoccupied bed count, adult non-ICU unoccupied bed count, and adult total unoccupied bed count. Count of unoccupied staffed and unblocked beds across all adult progressive care, intermediate care or step-down beds. Units that provide care for adult moderate severity of illness and comorbid patients."
* #AdultMTMSOccupied "Census across all adult telemetry and general medicine/surgery/acute care beds. Telemetry units provide continuous electrocardiographic (ECG) monitoring of the adult patient’s heart rhythm using specialized technology and equipment. General medicine units, surgery units or units with combination of both medical and surgical adult patients. Also known as general care or acute care units."
* #AdultMTMSUnoccupied "Count of unoccupied staffed and unblocked beds across all adult telemetry and general medicine/surgery/acute care beds. Telemetry units provide continuous electrocardiographic (ECG) monitoring of the adult patient’s heart rhythm using specialized technology and equipment. General medicine units, surgery units or units with combination of both medical and surgical adult patients. Also known as general care or acute care units."
* #AdultObsOccupied "Census across all adult observation beds. Adult patient status is observation (outpatient status) and may be housed on an observation unit."
* #AdultObsUnoccupied "Count of unoccupied staffed and unblocked beds across all adult observation beds. Adult patient status is observation (outpatient status) and may be housed on an observation unit."
* #PedsTotalOccupied "Census across all pediatric beds (Peds ICU, Peds PCU, Peds MT/MS and Peds OBS), excluding specialty nursery and NICU [all levels] specialty beds."
* #PedsTotalUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric beds (Peds ICU, Peds PCU, Peds MT/MS and Peds OBS), excluding  specialty nursery and NICU [all levels] specialty beds."
* #PedsICUOccupied "Census across all pediatric intensive care or critical care beds. Pediatric Intensive Care Unit (PICU) also known as Pediatric Critical Care Unit. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #PedsICUUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric intensive care or critical care beds. Pediatric Intensive Care Unit (PICU) also known as Pediatric Critical Care Unit. Interventions may include ventilators, hemodynamic monitoring, IV drug therapies and a variety of procedures."
* #PedsICU_LOCOccupied "Census of all patients meeting the admission criteria for critical care (i.e. require ICU level of care) across all pediatric intensive care or critical care beds. Excludes patients in these beds that do not meet ICU criteria."
* #PedsNonICUOccupied "Census across all pediatric PCU, MT/MS and OBS beds."
* #PedsNonICUUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric PCU, MT, MS and OBS beds."
* #PedsPCUOccupied "Important note for PCU beds: if pediatric PCU bed census is unable to be separately collected, please make sure the pediatric PCU census is included in the both the pediatric MT/MS census, pediatric non-ICU census, and pediatric total bed census. Census across all pediatric progressive care, intermediate care or step-down beds. Units that provide care for pediatric moderate severity of illness and comorbid patients."
* #PedsPCUUnoccupied "Important note for PCU beds: if pediatric PCU unoccupied bed count is unable to be separately collected, please make sure the pediatric PCU unoccupied bed count is included in the pediatric MT/MS unoccupied bed count, pediatric non-ICU unoccupied bed count, and pediatric total unoccupied bed count. Count of unoccupied staffed and unblocked beds across all pediatric progressive care, intermediate care or step-down beds. Units that provide care for pediatric moderate severity of illness and comorbid patients."
* #PedsMTMSOccupied "Census across all pediatric telemetry and general medicine/surgery/acute care beds. Pediatric telemetry units provide continuous electrocardiographic (ECG) monitoring of the patient’s heart rhythm using specialized technology and equipment. Pediatric general medicine units, surgery units or units with combination of both medical and surgical patients. Also known as general care or acute care units. Provides care for the least acute patients. Patient assessment and monitoring can range from 4-8 hours, floors have higher patient to nurse ratio than PCU/ICU."
* #PedsMTMSUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric telemetry and general medicine/surgery/acute care beds. Pediatric telemetry units provide continuous electrocardiographic (ECG) monitoring of the patient’s heart rhythm using specialized technology and equipment. Pediatric general medicine units, surgery units or units with combination of both medical and surgical patients. Also known as general care or acute care units. Provides care for the least acute patients. Patient assessment and monitoring can range from 4-8 hours, floors have higher patient to nurse ratio than PCU/ICU."
* #PedsObsOccupied "Census across all pediatric observation beds. Pediatric patient status is observation (outpatient status) and may be housed on observation unit."
* #PedsObsUnoccupied "Count of unoccupied staffed and unblocked beds across all pediatric observation beds. Pediatric patient status is observation (outpatient status) and may be housed on observation unit."
* #SpecialtyTotalOccupied "Census across all specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery beds)."
* #SpecialtyTotalUnoccupied "Count of unoccupied staffed and unblocked beds across all specialty beds (i.e., CMS-certified rehabilitation, CMS-certified psychiatric, obstetrics, NICU [all levels], and nursery beds)."
* #SpecialtyNonCribOccupied "Census across non-crib specialty beds (i.e. obstetrics, CMS-certified psychiatric, and CMS-certified rehabilitation specialty beds), excluding NICU (all levels) and nursery specialty beds."
* #SpecialtyNonCribUnoccupied "Count of unoccupied staffed and unblocked beds across non-crib specialty beds (i.e. obstetrics, CMS-certified psychiatric, and CMS-certified rehabilitation specialty beds), excluding NICU (all levels) and nursery specialty beds."
* #OBOccupied "Census across all obstetric beds. Obstetrical or post-partum units provide care to low and high-risk pregnant women."
* #OBUnoccupied "Count of unoccupied staffed and unblocked beds across all obstetric beds. Obstetrical or postpartum units provide care to low and high-risk pregnant women."
* #NICUOccupied "Census across all NICU beds (includes all levels: level 1, level 2, level 3, level 3 Plus, and level 4). Neonatal Intensive Care Units - specializes in the care of ill or premature newborn infants."
* #NICUUnoccupied "Count of unoccupied staffed and unblocked beds across all NICU beds (includes all levels: level 1, level 2, level 3, level 3 Plus, and level 4). Neonatal Intensive Care Units - specializes in the care of ill or premature newborn infants."
* #NICU4Occupied "Census across all level 4 NICU beds. Level 4: units include the capabilities of level 3 Plus with additional capabilities and considerable experience in the care of the most complex and critically ill newborn infants and should have pediatric medical and pediatric surgical specialty consultants continuously available 24 hours a day."
* #NICU4Unoccupied "Count of unoccupied staffed and unblocked beds across all level 4 NICU beds. Level 4: units include the capabilities of level 3 Plus with additional capabilities and considerable experience in the care of the most complex and critically ill newborn infants and should have pediatric medical and pediatric surgical specialty consultants continuously available 24 hours a day."
* #NICU3Unoccupied "Count of unoccupied staffed and unblocked beds across all level 3 Plus NICU beds. Level 3 Plus: includes level 3 care with general pediatric surgery."
* #NICU3PlusOccupied "Census across all level 3 Plus NICU beds. Level 3 Plus: includes level 3 care with general pediatric surgery."
* #NICU3PlusUnoccupied "Count of unoccupied staffed and unblocked beds across all level 3 NICU beds. Level 3: should be reserved for infants who are born at <32 weeks’ gestation, weigh <1500g at birth, or have medical or surgical conditions, regardless of gestational age."
* #NICU3Occupied "Census across all level 3 NICU beds. Level 3: should be reserved for infants who are born at <32 weeks’ gestation, weigh <1500g at birth, or have medical or surgical conditions, regardless of gestational age."
* #NICU2Occupied "Census across all level 2 NICU beds. Level 2: should be reserved for stable or moderately ill newborn infants who are born at ≥32 weeks’ gestation or who weigh ≥1500g at birth with problems that are expected to resolve rapidly and who would not be anticipated to need subspecialty-level services on an urgent basis."
* #NICU2Unoccupied "Count of unoccupied staffed and unblocked beds across all level 2 NICU beds. Level 2: should be reserved for stable or moderately ill newborn infants who are born at ≥32 weeks’ gestation or who weigh ≥1500g at birth with problems that are expected to resolve rapidly and who would not be anticipated to need subspecialty-level services on an urgent basis."
* #NurseryOccupied "Census across all nursery beds. Also called a newborn or a well-baby nursery. Goal is to examine, treat and monitor the health of the newborn. Well-baby nursery includes any room housing newborns who do not need continuing care or special care of intensive care newborn services. The nursery houses healthy babies that do not have any complications."
* #NurseryUnoccupied "Count of unoccupied staffed and unblocked beds across all nursery beds. Also called a newborn or a well-baby nursery. Goal is to examine, treat and monitor the health of the newborn. Well-baby nursery includes any room housing newborns who do not need continuing care or special care of intensive care newborn services.The nursery houses healthy babies that do not have any complications."
* #NICU1Occupied "Important note for level 1 NICU beds: this field should only be used if you have newborn or well-baby nursery beds with additional level of care that does not meet the criteria of level 2 NICU beds. Census across all level 1 NICU beds. Level 1: facilities provide a basic level of care to neonates who are low risk. They have the capability to perform neonatal resuscitation at every delivery and to evaluate and provide routine postnatal care for healthy newborn infants."
* #NICU1Unoccupied "Important note for level 1 NICU beds: this field should only be used if you have newborn or well-baby nursery beds with additional level of care that does not meet the criteria of level 2 NICU beds.Count of unoccupied staffed and unblocked beds across all level 1 NICU beds. Level 1: facilities provide a basic level of care to neonates who are low risk. They have the capability to perform neonatal resuscitation at every delivery and to evaluate and provide routine postnatal care for healthy newborn infants."
* #AdultPsychOccupied "Census across all CMS-certified adult psychiatric beds. Psychiatric units specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #AdultPsychUnoccupied "Count of unoccupied staffed and unblocked beds across all CMS-certified adult psychiatric beds. Psychiatric units specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #PedsPsychOccupied "Census across all CMS-certified pediatric psychiatric beds. Specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #PedsPsychUnoccupied "Count of unoccupied staffed and unblocked beds across all CMS-certified pediatric psychiatric beds. Specialize in the treatment of serious mental disorders. Care includes monitoring and providing appropriate interventions for behavioral or psychosocial issues."
* #RehabOccupied "Census across all CMS-certified rehabilitation beds. Inpatient rehabilitation units provide services to people who have had an acute illness, injury, or accident resulting in significant functional decline. Intensive physical medicine therapies and treatment regimens are delivered by a multidisciplinary team of nurses, PT, OT and specially trained physicians."
* #RehabUnoccupied "Count of unoccupied staffed and unblocked beds across all CMS-certified rehabilitation beds. Inpatient rehabilitation units provide services to people who have had an acute illness, injury, or accident resulting in significant functional decline. Intensive physical medicine therapies and treatment regimens are delivered by a multidisciplinary team of nurses, PT, OT and specially trained physicians."
* #SurgeActiveTotalOccupied "Census across all activated surge beds. Active surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as ICU, PCU, MT/MS or OBS beds."
* #SurgeActiveTotalUnoccupied "Count of unoccupied activated surge beds across all levels of care. Active surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as ICU, PCU, MT/MS or OBS beds."
* #SurgeInactiveTotalOccupied "Count of occupied inactive surge beds across all levels of care. Inactive surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as ICU, PCU, MT/MS or OBS beds but are not currently in use or active."
* #SurgeInactiveTotalUnoccupied "Count of unoccupied inactive surge beds across all levels of care. Inactive surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as ICU, PCU, MT/MS or OBS beds but are not currently in use or active."
* #SurgeActiveICUOccupied "Census across all activated intensive care or critical care surge beds. Active ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use for intensive or critical care patients."
* #SurgeActiveICUUnoccupied "Count of unoccupied activated intensive or critical care surge beds. Active ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use for intensive or critical care patients."
//* #SurgeInactiveICUOccupied "Count of occupied inactive intensive or critical care surge beds. Inactive ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use for intensive or critical care patients but are not currently in use or active."
* #SurgeInactiveICUUnoccupied "Count of unoccupied inactive intensive or critical care surge beds. Inactive ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use for intensive or critical care patients but are not currently in use or active."
* #SurgeActiveNonICUOccupied "Census across all activated PCU, MT, MS and OBS surge beds. Active Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as PCU, MT/MS or OBS beds."
* #SurgeActiveNonICUUnoccupied "Count of unoccupied activated PCU, MT, MS and OBS surge beds. Active Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations and are currently in use or available for use as PCU, MT/MS or OBS beds."
* #SurgeInactiveNonICUOccupied "Count of occupied inactive PCU, MT, MS and OBS surge beds. Inactive Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as PCU, MT/MS or OBS beds but are not currently in use or active."
* #SurgeInactiveNonICUUnoccupied "Count of unoccupied inactive PCU, MT, MS and OBS surge beds. Inactive Non-ICU surge beds are any non-licensed beds that can be utilized in an emergency for surge locations for use as PCU, MT/MS or OBS beds but are not currently in use or active."
* #BurnOccupied "Census across all burn unit beds."
* #BurnUnoccupied "Count of unoccupied burn unit beds."
* #NegativePressureOccupied "Census across all negative pressure beds."
* #NegativePressureUnoccupied "Count of unoccupied negative pressure beds."
* #AdultEDCensus "Census of all adult patients in the emergency department"
* #AdultEDAdmittedCensus "Census of all adult patients in the emergency department that have an admit to inpatient or observation order"
* #PedsEDCensus "Census of all pediatric patients in the emergency department"
* #PedsEDAdmittedCensus "Census of all pediatric patients in the emergency department that have an admit to inpatient or observation order"
* #TotalEDCensus "Census of all patients in the emergency department"
* #TotalEDAdmittedCensus "Census of all patients in the emergency department that have an admit to inpatient or observation order"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Bundle/jurisdiction-bed-capacity-report-example-bundle.fsh

Alias: $bed-capacity-code-system = http://hl7.org/fhir/us/nhsn-dqm/CodeSystem/healthcare-capacity-codes

Instance: jurisdiction-bed-capacity-report-example
InstanceOf: NHSNMeasureReportBundle
Title: "Jurisdiction Capacity Full Report Bundle Example"
Description: "Example Bundle of jurisidictional report for capacity reporting"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:1eaddf4c-2ec0-4dc4-b26f-9586d7a777e1"
* type = #collection
* timestamp = "2023-08-28T07:01:07.563Z"
* entry[+].fullUrl = "http://example.com/fhir/Organization/organization-example-submitting-organization"
* entry[=].resource = organization-example-submitting-organization
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/bed-capacity-measurereport-example-hosp"
* entry[=].resource = bed-capacity-measurereport-example-hosp
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/bed-capacity-measurereport-example-ipf"
* entry[=].resource = bed-capacity-measurereport-example-ipf
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/bed-capacity-measurereport-example-chld"
* entry[=].resource = bed-capacity-measurereport-example-chld


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Bundle/submission-full-example1.fsh

Instance: submission-full-example1
InstanceOf: NHSNMeasureReportBundle
Title: "Full Submission Bundle Example 1"
Description: "Measure Bundle - Full Submission Bundle Example 1"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:1eaddf4c-2ec0-4dc4-b26f-9586d7a777e9"
* type = #collection
* timestamp = "2022-11-15T21:04:29.481+00:00"
* entry[+].fullUrl = "http://example.com/fhir/Organization/organization-example-submitting-organization"
* entry[=].resource = organization-example-submitting-organization
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-submitting-device"
* entry[=].resource = device-example-submitting-device
* entry[+].fullUrl = "http://example.com/fhir/List/list-example-patients-of-interest"
* entry[=].resource = list-example-patients-of-interest
* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-ach-subjectlist1"
* entry[=].resource = measurereport-example-ach-subjectlist1
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-sameresultdiffday"
* entry[=].resource = patient-example-sameresultdiffday


* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-individual-ach-ach-pass1"
* entry[=].resource = measurereport-example-individual-ach-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-ach-ach-pass1"
* entry[=].resource = patient-example-ach-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass1"
* entry[=].resource = encounter-example-ach-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Coverage/coverage-example-ach-pass1"
* entry[=].resource = coverage-example-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass1"
* entry[=].resource = condition-example-diagnosis-ach-pass1
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-ach-ach-pass1-central-line"
* entry[=].resource = device-example-ach-ach-pass1-central-line
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass1-vancomycin"
* entry[=].resource = medicationadministration-example-ach-pass1-vancomycin
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass1-vancomycin"
* entry[=].resource = medicationrequest-example-ach-pass1-vancomycin
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-blood"
* entry[=].resource = observation-example-ach-pass1-blood
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-csf"
* entry[=].resource = observation-example-ach-pass1-csf
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-gestational-age"
* entry[=].resource = observation-example-ach-pass1-gestational-age
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass1-vitals-weight"
* entry[=].resource = observation-example-ach-pass1-vitals-weight
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass1-central-line"
* entry[=].resource = procedure-example-ach-ach-pass1-central-line
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass1-lumbar"
* entry[=].resource = procedure-example-ach-ach-pass1-lumbar
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass1-blood"
* entry[=].resource = servicerequest-example-ach-ach-pass1-blood
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass1-csf"
* entry[=].resource = servicerequest-example-ach-ach-pass1-csf
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass1-blood"
* entry[=].resource = specimen-example-ach-ach-pass1-blood
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass1-csf"
* entry[=].resource = specimen-example-ach-ach-pass1-csf


* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-individual-ach-ach-pass2"
* entry[=].resource = measurereport-example-individual-ach-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-ach-ach-pass2"
* entry[=].resource = patient-example-ach-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass2-emergency"
* entry[=].resource = encounter-example-ach-ach-pass2-emergency
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass2-inpatient"
* entry[=].resource = encounter-example-ach-ach-pass2-inpatient
* entry[+].fullUrl = "http://example.com/fhir/Coverage/coverage-example-ach-pass2"
* entry[=].resource = coverage-example-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass2-problem"
* entry[=].resource = condition-example-diagnosis-ach-pass2-problem
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass2"
* entry[=].resource = condition-example-diagnosis-ach-pass2
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-ach-ach-pass2-compress-hose"
* entry[=].resource = device-example-ach-ach-pass2-compress-hose
* entry[+].fullUrl = "http://example.com/fhir/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-radiology"
* entry[=].resource = diagnosticreport-example-ach-ach-pass2-radiology
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-dex4"
* entry[=].resource = medicationadministration-example-ach-pass2-dex4
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-heparin-1"
* entry[=].resource = medicationadministration-example-ach-pass2-heparin-1
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-heparin-2"
* entry[=].resource = medicationadministration-example-ach-pass2-heparin-2
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-1"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-1
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-2"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-2
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-3"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-3
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro-4"
* entry[=].resource = medicationadministration-example-ach-pass2-insulin-lispro-4
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-dex4-tablet"
* entry[=].resource = medicationrequest-example-ach-pass2-dex4-tablet
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-heparin"
* entry[=].resource = medicationrequest-example-ach-pass2-heparin
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-insulin-lispro"
* entry[=].resource = medicationrequest-example-ach-pass2-insulin-lispro
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass2-metformin"
* entry[=].resource = medicationrequest-example-ach-pass2-metformin
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-aptt"
* entry[=].resource = observation-example-ach-pass2-aptt
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-poc-1"
* entry[=].resource = observation-example-ach-pass2-poc-1
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-poc-2"
* entry[=].resource = observation-example-ach-pass2-poc-2
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-hemo-a1c"
* entry[=].resource = observation-example-ach-pass2-hemo-a1c
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-hemo"
* entry[=].resource = observation-example-ach-pass2-hemo
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass2-vitals-weight"
* entry[=].resource = observation-example-ach-pass2-vitals-weight
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass2-ivcf"
* entry[=].resource = procedure-example-ach-ach-pass2-ivcf
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-aptt"
* entry[=].resource = servicerequest-example-ach-ach-pass2-aptt
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-glucose"
* entry[=].resource = servicerequest-example-ach-ach-pass2-glucose
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-hemo-a1c"
* entry[=].resource = servicerequest-example-ach-ach-pass2-hemo-a1c
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass2-hemo"
* entry[=].resource = servicerequest-example-ach-ach-pass2-hemo
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass2-blood-1"
* entry[=].resource = specimen-example-ach-ach-pass2-blood-1
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass2-blood-2"
* entry[=].resource = specimen-example-ach-ach-pass2-blood-2


* entry[+].fullUrl = "http://example.com/fhir/MeasureReport/measurereport-example-individual-ach-ach-pass3"
* entry[=].resource = measurereport-example-individual-ach-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Patient/patient-example-ach-ach-pass3"
* entry[=].resource = patient-example-ach-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass3-acute"
* entry[=].resource = encounter-example-ach-ach-pass3-acute
* entry[+].fullUrl = "http://example.com/fhir/Encounter/encounter-example-ach-ach-pass3-short-stay"
* entry[=].resource = encounter-example-ach-ach-pass3-short-stay
* entry[+].fullUrl = "http://example.com/fhir/Coverage/coverage-example-ach-pass3"
* entry[=].resource = coverage-example-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass3-problem"
* entry[=].resource = condition-example-diagnosis-ach-pass3-problem
* entry[+].fullUrl = "http://example.com/fhir/Condition/condition-example-diagnosis-ach-pass3"
* entry[=].resource = condition-example-diagnosis-ach-pass3
* entry[+].fullUrl = "http://example.com/fhir/Device/device-example-ach-ach-pass3-ivcs-pump"
* entry[=].resource = device-example-ach-ach-pass3-ivcs-pump
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-enoxaparin"
* entry[=].resource = medicationadministration-example-ach-pass3-enoxaparin
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-metronidazole-1"
* entry[=].resource = medicationadministration-example-ach-pass3-metronidazole-1
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-metronidazole-2"
* entry[=].resource = medicationadministration-example-ach-pass3-metronidazole-2
* entry[+].fullUrl = "http://example.com/fhir/MedicationAdministration/medicationadministration-example-ach-pass3-metronidazole-3"
* entry[=].resource = medicationadministration-example-ach-pass3-metronidazole-3
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass3-cipro"
* entry[=].resource = medicationrequest-example-ach-pass3-cipro
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass3-enoxaparin"
* entry[=].resource = medicationrequest-example-ach-pass3-enoxaparin
* entry[+].fullUrl = "http://example.com/fhir/MedicationRequest/medicationrequest-example-ach-pass3-metronidazole"
* entry[=].resource = medicationrequest-example-ach-pass3-metronidazole
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass3-cdiff"
* entry[=].resource = observation-example-ach-pass3-cdiff
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass3-vitals-height"
* entry[=].resource = observation-example-ach-pass3-vitals-height
* entry[+].fullUrl = "http://example.com/fhir/Observation/observation-example-ach-pass3-vitals-weight"
* entry[=].resource = observation-example-ach-pass3-vitals-weight
* entry[+].fullUrl = "http://example.com/fhir/Procedure/procedure-example-ach-ach-pass3-transfusion"
* entry[=].resource = procedure-example-ach-ach-pass3-transfusion
* entry[+].fullUrl = "http://example.com/fhir/ServiceRequest/servicerequest-example-ach-ach-pass3-cdiff"
* entry[=].resource = servicerequest-example-ach-ach-pass3-cdiff
* entry[+].fullUrl = "http://example.com/fhir/Specimen/specimen-example-ach-ach-pass3-stool"
* entry[=].resource = specimen-example-ach-ach-pass3-stool

// The following entries were missing from the Bundle, not sure which MR they apply to


* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-vancomycin-15"
* entry[=].resource = medication-example-vancomycin-15
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-dex4-tablet"
* entry[=].resource = medication-example-dex4-tablet
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-heparin"
* entry[=].resource = medication-example-heparin
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-insulin-lispro"
* entry[=].resource = medication-example-insulin-lispro
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-metformin-1000"
* entry[=].resource = medication-example-metformin-1000
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-metronidazole"
* entry[=].resource = medication-example-metronidazole
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-cipro-500"
* entry[=].resource = medication-example-cipro-500
* entry[+].fullUrl = "http://example.com/fhir/Medication/medication-example-enoxaparin"
* entry[=].resource = medication-example-enoxaparin
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-nicu-level-iii"
* entry[=].resource = location-example-ach-nicu-level-iii
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-emergency"
* entry[=].resource = location-example-ach-emergency
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-inpatient"
* entry[=].resource = location-example-ach-inpatient
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-crit"
* entry[=].resource = location-example-ach-crit
* entry[+].fullUrl = "http://example.com/fhir/Location/location-example-ach-medsurg"
* entry[=].resource = location-example-ach-medsurg
* entry[+].fullUrl = "http://example.com/fhir/List/list-example-ach-individual-measurereport-list"
* entry[=].resource = list-example-ach-individual-measurereport-list
* entry[+].fullUrl = "http://example.com/fhir/Practitioner/practitioner-example"
* entry[=].resource = practitioner-example





---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Condition/condition-example-diagnosis-ach-pass1.fsh

Instance: condition-example-diagnosis-ach-pass1
InstanceOf: USCoreConditionEncounterDiagnosisProfile
Title: "Condition - Example Diagnosis ACH Pass1"
Description: "Condition - Example Diagnosis ACH Pass1 - Encounter Diagnosis: Bacteremia"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[us-core].text = "Encounter Diagnosis"
* code.coding[0] = $sct#5758002 "Bacteremia (finding)"
* code.coding[+] = $icd-10-cm#R78.81 "Bacteremia"
* code.text = "Bacteremia"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Condition/condition-example-diagnosis-ach-pass2-problem.fsh

Instance: condition-example-diagnosis-ach-pass2-problem
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Title: "Condition - Example Diagnosis ACH Pass2 Problem"
Description: "Condition - Example Diagnosis ACH Pass2 - Problem List: Type 2 diabetes mellitus without complications"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* category[us-core].text = "Problem List Item"
* code.coding[0] = $sct#111552007 "Diabetes mellitus without complication (disorder)"
* code.coding[+] = $icd-10-cm#E11.9 "Type 2 diabetes mellitus without complications"
* code.text = "Diabetes mellitus without complication"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Condition/condition-example-diagnosis-ach-pass2.fsh

Instance: condition-example-diagnosis-ach-pass2
InstanceOf: USCoreConditionEncounterDiagnosisProfile
Title: "Condition - Example Diagnosis ACH Pass2"
Description: "Condition - Example Diagnosis ACH Pass2 - Encounter Diagnosis: Thrombophlebitis of deep femoral vein"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[us-core].text = "Encounter Diagnosis"
* code = $sct#1748006 "Thrombophlebitis of deep femoral vein (disorder)"
* code.text = "Thrombophlebitis"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Condition/condition-example-diagnosis-ach-pass3-problem.fsh

Instance: condition-example-diagnosis-ach-pass3-problem
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Title: "Condition - Example Diagnosis ACH Pass3 Problem"
Description: "Condition - Example Diagnosis ACH Pass3 - Problem List: Acute sinusitis"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#resolved "Resolved"
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* category[us-core].text = "Problem List Item"
* code.coding[0] = $sct#15805002 "Acute sinusitis (disorder)"
* code.coding[+] = $icd-10-cm#J01.90 "Acute sinusitis, unspecified"
* code.text = "Acute sinusitis"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
* onsetDateTime = "2024-01-21T07:32:00-05:00"
* abatementDateTime = "2024-02-02T16:43:00-05:00"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Condition/condition-example-diagnosis-ach-pass3.fsh

Instance: condition-example-diagnosis-ach-pass3
InstanceOf: USCoreConditionEncounterDiagnosisProfile
Title: "Condition - Example Diagnosis ACH Pass3"
Description: "Condition - Example Diagnosis ACH Pass3 - Encounter Diagnosis: Enterocolitis due to Clostridium difficile"
Usage: #example
* verificationStatus.coding.version = "4.0.0"
* verificationStatus.coding = $condition-ver-status#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* clinicalStatus = $condition-clinical#active "Active"
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[us-core].text = "Encounter Diagnosis"
* code.coding[+] = $icd-10-cm#A04.7 "Enterocolitis due to Clostridium difficile"
* code.text = "Enterocolitis due to Clostridium difficile"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Coverage/coverage-example-ach-pass1.fsh

Instance: coverage-example-ach-pass1
InstanceOf: QICoreCoverage
Title: "Coverage - Example ACH Pass1"
Description: "Coverage - Example ACH Pass1 - Medicaid: Child Beneficiary"
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "084536836"
* status = #active
* type = $v3-ActCode#SUBSUPP "subsidized supplemental health program"
* policyHolder.display = "Mom Parent"
* subscriberId = "98435938934"
* beneficiary = Reference(patient-example-ach-ach-pass1)
* relationship = $subscriber-relationship#child "Child"
* relationship.text = "Child"
* period.start = "2020-08-01"
* payor.display = "Medicaid"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Coverage/coverage-example-ach-pass2.fsh

Instance: coverage-example-ach-pass2
InstanceOf: QICoreCoverage
Title: "Coverage - Example ACH Pass2"
Description: "Coverage - Example ACH Pass2 - Commercial HMO"
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "93565936"
* status = #active
* type = $v3-ActCode#HMO "health maintenance organization policy"
* subscriberId = "89345743"
* beneficiary = Reference(patient-example-ach-ach-pass2)
* relationship = $subscriber-relationship#self "Self"
* payor.display = "PayerComm"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Coverage/coverage-example-ach-pass3.fsh

Instance: coverage-example-ach-pass3
InstanceOf: QICoreCoverage
Title: "Coverage - Example ACH Pass3"
Description: "Coverage - Example ACH Pass3 - Commercial PPO"
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "0945345"
* status = #active
* type = $v3-ActCode#PPO "preferred provider organization policy"
* subscriberId = "7843574536"
* beneficiary = Reference(patient-example-ach-ach-pass3)
* relationship = $subscriber-relationship#self "Self"
* payor.display = "Nation First Health Care"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Device/device-example-ach-ach-pass1-central-line.fsh

Instance: device-example-ach-ach-pass1-central-line
InstanceOf: QICoreDevice
Title: "Device - Example ACH Pass1 Central Line"
Description: "Device - Example ACH Pass1 - Central venous catheter"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "1000510341"

* type.coding[+] = $sct#52124006 "Central venous catheter, device (physical object)"
* type.text = "Central venous catheter, device"
* patient = Reference(patient-example-ach-ach-pass1)
* patient.display = "Pass1 ACH"




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Device/device-example-ach-ach-pass2-compress-hose.fsh

Instance: device-example-ach-ach-pass2-compress-hose
InstanceOf: QICoreDevice
Title: "Device - Example ACH Pass2 Compress Hose"
Description: "Device - Example ACH Pass2 - Graduated compression elastic hosiery"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "100051034"

* type.coding[+] = $sct#348681001 "Graduated compression elastic hosiery (physical object)"
* type.text = "Graduated compression elastic hosiery"
* patient = Reference(patient-example-ach-ach-pass2)
* patient.display = "Pass2 ACH"




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Device/device-example-ach-ach-pass3-ivcs-pump.fsh

Instance: device-example-ach-ach-pass3-ivcs-pump
InstanceOf: QICoreDevice
Title: "Device - Example ACH Pass3 Ivcs Pump"
Description: "Device - Example ACH Pass3 - Intermittent venous compression system pump"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "100051035"

* type.coding[+] = $sct#469317002 "Intermittent venous compression system pump (physical object)"
* type.text = "Intermittent venous compression system pump"
* patient = Reference(patient-example-ach-ach-pass3)
* patient.display = "Pass3 ACH"




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Device/device-example-submitting-device.fsh

Instance: device-example-submitting-device
InstanceOf: NHSNSubmittingDevice
Title: "Device - Example Submitting Device 1"
Description: "Device - Submitting Device Example 1"
Usage: #example
* deviceName.name = "NHSN Link"
* deviceName.type = #model-name
* version[0].component.value = "api"
* version[=].value = "0.9.0"
* version[+].component.value = "api"
* version[=].value = "20230713.1"
* version[+].component.value = "api"
* version[=].value = "3f9662a8"
* version[+].component.value = "cqf-ruler"
* version[=].value = "0.13.0"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-cardiopulmonary.fsh

Instance: diagnosticreport-example-ach-ach-pass2-cardiopulmonary
InstanceOf: QICoreDiagnosticReportNote
Title: "DiagnosticReport - Example ACH Pass2 Cardiopulmonary"
Description: "DiagnosticReport - Example ACH Pass2 - Cardiovascular stress testing"
Usage: #example
* status = #final
* category = $loinc#LP29708-2 "Cardiology"
* category.text = "Cardiology"
* code = $sct#76746007 "Cardiovascular stress testing"
* code.text = "Cardiovascular stress testing"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* conclusionCode = $sct#710031008 "Inducible ischemia manifest on stress test post myocardial infarction (finding)"
* effectiveDateTime = "2024-03-01T23:14:00-05:00"
* issued = "2024-03-02T08:52:00-05:00"

 


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-lab-cbc.fsh

Instance: diagnosticreport-example-ach-ach-pass2-lab-cbc
InstanceOf: QICoreDiagnosticReportLab
Title: "DiagnosticReport - Example ACH Pass2 Lab CBC"
Description: "DiagnosticReport - Example ACH Pass2 - CBC panel - Blood by Automated count"
Usage: #example
* status = #final
* category[LaboratorySlice] = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category[LaboratorySlice].text = "Laboratory"
* code = $loinc#58410-2 "CBC panel - Blood by Automated count"
* code.text = "CBC Panel"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-01-31T23:01:00-05:00"
* issued = "2024-01-31T23:02:00-05:00"
* result[+] = Reference(observation-example-ach-pass2-hemo-a1c)
* result[+] = Reference(observation-example-ach-pass2-poc-1)






---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/DiagnosticReport/diagnosticreport-example-ach-ach-pass2-radiology.fsh

Instance: diagnosticreport-example-ach-ach-pass2-radiology
InstanceOf: QICoreDiagnosticReportNote
Title: "DiagnosticReport - Example ACH Pass2 Radiology"
Description: "DiagnosticReport - Example ACH Pass2 - Ultrasonography of right lower limb"
Usage: #example
* status = #final
* category = $loinc#LP29684-5 "Radiology"
* category.text = "Radiology"
* code = $sct#14331000087103 "Doppler ultrasonography of vascular structure of right lower limb (procedure)"
* code.text = "ultrasonography of right lower limb"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* conclusionCode = $sct#128053003 "Deep venous thrombosis (disorder)"
* effectiveDateTime = "2024-02-01T23:14:00-05:00"
* issued = "2024-02-02T08:52:00-05:00"




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Encounter/encounter-example-ach-ach-pass1.fsh

Instance: encounter-example-ach-ach-pass1
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass1 - Inpatient"
Description: "Encounter - Example ACH Pass1 - Hospital Admission"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104251"
* status = #in-progress
* class = $v3-ActCode#ACUTE "inpatient acute"
* type = $sct#32485007 "Hospital admission (procedure)"
* type.text = "Hospital Admission"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* period.start = "2024-02-01T16:02:00-05:00"
* period.end = "2024-02-04T19:00:00-05:00"
* reasonCode = $icd-10-cm#R50.9 "Fever, unspecified"
* reasonCode.text = "Fever"
* diagnosis.condition = Reference(condition-example-diagnosis-ach-pass1)
* diagnosis.condition.display = "Thrombophlebitis"
* hospitalization.admitSource = $admit-source#born "Born in hospital"
* hospitalization.admitSource.text = "Born in hospital"
* hospitalization.dischargeDisposition = $discharge-disposition#oth "Other"
* hospitalization.dischargeDisposition.text = "Other"
* location[0].location.display = "ACH Neonatal critical care"
* location[=].location = Reference(location-example-ach-nicu-level-iii)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-01T16:02:00-05:00"
* location[=].period.end = "2024-02-02T16:02:00-05:00"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Encounter/encounter-example-ach-ach-pass2-emergency.fsh

Instance: encounter-example-ach-ach-pass2-emergency
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass2 - Emergency"
Description: "Encounter - Example ACH Pass2 - Emergency department visit"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104252a"
* status = #triaged
* class = $v3-ActCode#EMER "emergency"
* type = $sct#4525004 "Emergency department patient visit"
* type.text = "Emergency department patient visit"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-01-31T02:35:00-05:00"
* period.end = "2024-01-31T22:02:00-05:00"
* reasonCode = $icd-10-cm#M79.661 "Pain in right lower leg"
* reasonCode.text = "Leg pain, lower right"
* diagnosis.condition = Reference(condition-example-diagnosis-ach-pass2)
* diagnosis.condition.display = "Thrombophlebitis"
/* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#other "Other"
* hospitalization.admitSource.text = "Walk-in"
/* hospitalization.dischargeDisposition = $discharge-disposition#snf "Skilled nursing facility"
* hospitalization.dischargeDisposition.text = "Skilled nursing facility"
*/

* location[0].location.display = "ACH Emergency Department"
* location[=].location = Reference(location-example-ach-emergency)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-01-31T02:35:00-05:00"
* location[=].period.end = "2024-02-01T01:02:00-05:00"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Encounter/encounter-example-ach-ach-pass2-inpatient.fsh

Instance: encounter-example-ach-ach-pass2-inpatient
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass2 - Inpatient"
Description: "Encounter - Example ACH Pass2 - Hospital admission"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104252b"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $sct#32485007 "Hospital admission (procedure)"
* type.text = "Hospital Admission"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-01-31T22:02:00-05:00"
* period.end = "2024-02-02T16:22:00-05:00"
//* reasonCode = $icd-10-cm#R50.9 "Fever, unspecified"
//* reasonCode.text = "Fever"
/* diagnosis.condition.display = "Hyperglycemia"
* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#emd "From accident/emergency department"
* hospitalization.admitSource.text = "Emergency Department"
* hospitalization.dischargeDisposition = $discharge-disposition#exp "expired"
* hospitalization.dischargeDisposition.text = "Expired"


* location[0].location.display = "ACH Inpatient Hospital Ward"
* location[=].location = Reference(location-example-ach-inpatient)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-01T01:02:00-05:00"
* location[=].period.end = "2024-02-02T16:22:00-05:00"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Encounter/encounter-example-ach-ach-pass3-acute.fsh

Instance: encounter-example-ach-ach-pass3-acute
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass3 - Acute"
Description: "Encounter - Example ACH Pass3 - Acute critical care visit"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104253a"
* status = #finished
* class = $v3-ActCode#ACUTE "inpatient acute"
* type = $sct#453701000124103 "In-person encounter"
* type.text = "Critical care visit"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-02-02T16:43:00-05:00"
* period.end = "2024-02-03T19:58:00-05:00"
//* reasonCode = $icd-10-cm#R19.7 "Diarrhea, unspecified"
//* reasonCode.text = "Diarrhea"
/* diagnosis.condition.display = "Hyperglycemia"
* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#other "Other"
* hospitalization.admitSource.text = "From Short Stay"
* hospitalization.dischargeDisposition = $discharge-disposition#home "Home"
* hospitalization.dischargeDisposition.text = "Home"


* location[0].location.display = "ACH Medical Critical Care"
* location[=].location = Reference(location-example-ach-crit)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-02T16:43:00-05:00"
* location[=].period.end = "2024-03-02T19:58:00-05:00"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Encounter/encounter-example-ach-ach-pass3-short-stay.fsh

Instance: encounter-example-ach-ach-pass3-short-stay
InstanceOf: QICoreEncounter
Title: "Encounter - Example ACH Pass3 - Short Stay"
Description: "Encounter - Example ACH Pass3 - Hospital admission short stay"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.698.8"
* identifier.value = "10005104253a"
* status = #in-progress
* class = $v3-ActCode#SS "short stay"
* type = $sct#8715000 "Hospital admission, elective (procedure)"
* type.text = "Hospital Admission, Elective Procedure"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
/*
* participant[0].type = $v3-ParticipationType#ADM "admitter"
* participant[=].type.text = "admitter"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#DIS "discharger"
* participant[=].type.text = "discharger"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
* participant[+].type = $v3-ParticipationType#ATND "attender"
* participant[=].type.text = "attender"
* participant[=].period.start = "2022-08-17T16:59:38Z"
* participant[=].period.end = "2022-08-22T19:09:00Z"
* participant[=].individual.type = "Practitioner"
* participant[=].individual.display = "Faculty Physician Um_Cln, MD"
*/
* period.start = "2024-02-01T14:12:00-05:00"
* period.end = "2024-02-02T16:43:00-05:00"
* reasonCode = $icd-10-cm#R19.7 "Diarrhea, unspecified"
* reasonCode.text = "Diarrhea"
* diagnosis.condition = Reference(condition-example-diagnosis-ach-pass3)
* diagnosis.condition.display = "Enterocolitis due to Clostridium difficile"
/* account.identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.3.726"
* account.identifier.value = "100066850"
* account.display = "HYPO,EDADD"
*/
* hospitalization.admitSource = $admit-source#outp "From outpatient department"
* hospitalization.admitSource.text = "Outpatient"
/* hospitalization.dischargeDisposition = $discharge-disposition#snf "Skilled nursing facility"
* hospitalization.dischargeDisposition.text = "Skilled nursing facility"
*/

* location[0].location.display = "ACH Medical-Surgical Ward"
* location[=].location = Reference(location-example-ach-medsurg)
* location[=].physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"
* location[=].period.start = "2024-02-01T14:12:00-05:00"
* location[=].period.end = "2024-02-02T16:43:00-05:00"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Library/Library_NHSNdQMAcuteCareHospitalInitialPopulation.fsh

Instance: NHSNdQMAcuteCareHospitalInitialPopulationLibrary
InstanceOf: Library
Title: "Acute Care Hospital Initial Population Library"
Description: "Example Library of Acute Care Hospital (ACH) Initial Population Measure"
Usage: #example

* contained = ach-options
* extension.url = "http://hl7.org/fhir/StructureDefinition/cqf-cqlOptions"
* extension.valueReference = Reference(ach-options)
//* url = "http://www.cdc.gov/nhsn/fhirportal/dqm/ig/Library/NHSNdQMAcuteCareHospitalInitialPopulation"
* version = "1.0.0"
* status = #active 
* name = "NHSNdQMAcuteCareHospitalInitialPopulation"
* type = $library-type#logic-library
* relatedArtifact[0].type = #depends-on
* relatedArtifact[=].display = "FHIR model information"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIR-ModelInfo|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library FHIRHelpers"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIRHelpers|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library Global"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Library/MATGlobalCommonFunctions"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library SDE"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Library/SupplementalDataElements"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system ActCode"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/v3-ActCode"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system Observation Category"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/observation-category"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system LOINC"
* relatedArtifact[=].resource = "http://loinc.org"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system V2-0074"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/v2-0074"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Inpatient, Emergency, and Observation Locations"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.265"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Emergency Department Visit"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Encounter Inpatient"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Observation Services"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set NHSN Inpatient Encounter Class Codes"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.274"
* parameter[0].name = #"Measurement Period"
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Period
* parameter[+].name = #Patient
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Patient
* parameter[+].name = #"Qualifying Encounters During Measurement Period"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #Encounters
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Encounters with Patient Hospital Locations"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #DiagnosticReports
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #Observations
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"IP Encounters Overlap Measurement Period"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Get Locations from IP Encounters in Measurement Period"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Location
* parameter[+].name = #"SDE Condition"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Condition
* parameter[+].name = #"SDE Device"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Device
* parameter[+].name = #"SDE DiagnosticReport Lab"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE DiagnosticReport Note"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE DiagnosticReport Others"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE Encounter"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"SDE Location"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Location
* parameter[+].name = #"SDE Medication Administration"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #MedicationAdministration
* parameter[+].name = #"SDE Medication Request"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #MedicationRequest
* parameter[+].name = #"SDE Medication"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Medication
* parameter[+].name = #"SDE Observation Lab Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Observation Vital Signs Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Observation Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Coverage"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Coverage
* parameter[+].name = #"SDE Procedure"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Procedure
* parameter[+].name = #"SDE Specimen"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Specimen
* parameter[+].name = #"SDE Service Request"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #ServiceRequest
* parameter[+].name = #"SDE Minimal Patient"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Patient
* dataRequirement[0].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "active"
* dataRequirement[=].mustSupport[+] = "name"
* dataRequirement[=].mustSupport[+] = "telecom"
* dataRequirement[=].mustSupport[+] = "gender"
* dataRequirement[=].mustSupport[+] = "birthDate"
* dataRequirement[=].mustSupport[+] = "deceased"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "maritalStatus"
* dataRequirement[=].mustSupport[+] = "multipleBirth"
* dataRequirement[=].mustSupport[+] = "photo"
* dataRequirement[=].mustSupport[+] = "contact"
* dataRequirement[=].mustSupport[+] = "communication"
* dataRequirement[=].mustSupport[+] = "generalPractitioner"
* dataRequirement[=].mustSupport[+] = "managingOrganization"
* dataRequirement[=].mustSupport[+] = "link"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "class"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "class"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.274"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "operationalStatus"
* dataRequirement[=].mustSupport[+] = "name"
* dataRequirement[=].mustSupport[+] = "alias"
* dataRequirement[=].mustSupport[+] = "description"
* dataRequirement[=].mustSupport[+] = "mode"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "telecom"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "physicalType"
* dataRequirement[=].mustSupport[+] = "position"
* dataRequirement[=].mustSupport[+] = "managingOrganization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "hoursOfOperation"
* dataRequirement[=].mustSupport[+] = "availabilityExceptions"
* dataRequirement[=].mustSupport[+] = "endpoint"
* dataRequirement[+].type = #DiagnosticReport
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/DiagnosticReport"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "effective"
* dataRequirement[=].mustSupport[+] = "issued"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "resultsInterpreter"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "result"
* dataRequirement[=].mustSupport[+] = "conclusion"
* dataRequirement[=].mustSupport[+] = "conclusionCode"
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "focus"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "effective"
* dataRequirement[=].mustSupport[+] = "issued"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "value"
* dataRequirement[=].mustSupport[+] = "dataAbsentReason"
* dataRequirement[=].mustSupport[+] = "interpretation"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "method"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "device"
* dataRequirement[=].mustSupport[+] = "referenceRange"
* dataRequirement[=].mustSupport[+] = "hasMember"
* dataRequirement[=].mustSupport[+] = "derivedFrom"
* dataRequirement[=].mustSupport[+] = "component"
* dataRequirement[+].type = #Condition
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Condition"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "clinicalStatus"
* dataRequirement[=].mustSupport[+] = "verificationStatus"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "severity"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "onset"
* dataRequirement[=].mustSupport[+] = "abatement"
* dataRequirement[=].mustSupport[+] = "recordedDate"
* dataRequirement[=].mustSupport[+] = "stage"
* dataRequirement[=].mustSupport[+] = "evidence"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[+].type = #Device
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Device"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "definition"
* dataRequirement[=].mustSupport[+] = "udiCarrier"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "distinctIdentifier"
* dataRequirement[=].mustSupport[+] = "manufacturer"
* dataRequirement[=].mustSupport[+] = "manufactureDate"
* dataRequirement[=].mustSupport[+] = "expirationDate"
* dataRequirement[=].mustSupport[+] = "lotNumber"
* dataRequirement[=].mustSupport[+] = "serialNumber"
* dataRequirement[=].mustSupport[+] = "deviceName"
* dataRequirement[=].mustSupport[+] = "modelNumber"
* dataRequirement[=].mustSupport[+] = "partNumber"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "specialization"
* dataRequirement[=].mustSupport[+] = "version"
* dataRequirement[=].mustSupport[+] = "property"
* dataRequirement[=].mustSupport[+] = "patient"
* dataRequirement[=].mustSupport[+] = "owner"
* dataRequirement[=].mustSupport[+] = "contact"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "url"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "safety"
* dataRequirement[=].mustSupport[+] = "parent"
* dataRequirement[+].type = #MedicationAdministration
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicationAdministration"
* dataRequirement[=].mustSupport[0] = "effective"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiates"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "medication"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "context"
* dataRequirement[=].mustSupport[+] = "supportingInformation"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "request"
* dataRequirement[=].mustSupport[+] = "device"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "dosage"
* dataRequirement[=].mustSupport[+] = "eventHistory"
* dataRequirement[+].type = #MedicationRequest
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicationRequest"
* dataRequirement[=].mustSupport[0] = "authoredOn"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "intent"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "doNotPerform"
* dataRequirement[=].mustSupport[+] = "reported"
* dataRequirement[=].mustSupport[+] = "medication"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "requester"
* dataRequirement[=].mustSupport[+] = "recorder"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "courseOfTherapyType"
* dataRequirement[=].mustSupport[+] = "dosageInstruction"
* dataRequirement[+].type = #Medication
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Medication"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "manufacturer"
* dataRequirement[=].mustSupport[+] = "form"
* dataRequirement[=].mustSupport[+] = "amount"
* dataRequirement[=].mustSupport[+] = "ingredient"
* dataRequirement[=].mustSupport[+] = "batch"
* dataRequirement[+].type = #Coverage
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Coverage"
* dataRequirement[=].mustSupport[0] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "policyHolder"
* dataRequirement[=].mustSupport[+] = "subscriber"
* dataRequirement[=].mustSupport[+] = "subscriberId"
* dataRequirement[=].mustSupport[+] = "beneficiary"
* dataRequirement[=].mustSupport[+] = "dependent"
* dataRequirement[=].mustSupport[+] = "relationship"
* dataRequirement[=].mustSupport[+] = "payor"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "order"
* dataRequirement[=].mustSupport[+] = "network"
* dataRequirement[=].mustSupport[+] = "subrogation"
* dataRequirement[=].mustSupport[+] = "contract"
* dataRequirement[+].type = #Procedure
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Procedure"
* dataRequirement[=].mustSupport[0] = "performed"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "recorder"
* dataRequirement[=].mustSupport[+] = "asserter"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "outcome"
* dataRequirement[=].mustSupport[+] = "report"
* dataRequirement[=].mustSupport[+] = "complication"
* dataRequirement[=].mustSupport[+] = "complicationDetail"
* dataRequirement[=].mustSupport[+] = "followUp"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "focalDevice"
* dataRequirement[=].mustSupport[+] = "usedReference"
* dataRequirement[=].mustSupport[+] = "usedCode"
* dataRequirement[+].type = #Specimen
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Specimen"
* dataRequirement[=].mustSupport[0] = "collection"
* dataRequirement[=].mustSupport[+] = "collection.collected"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "accessionIdentifier"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "receivedTime"
* dataRequirement[=].mustSupport[+] = "parent"
* dataRequirement[=].mustSupport[+] = "request"
* dataRequirement[=].mustSupport[+] = "processing"
* dataRequirement[=].mustSupport[+] = "container"
* dataRequirement[=].mustSupport[+] = "condition"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[+].type = #ServiceRequest
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/ServiceRequest"
* dataRequirement[=].mustSupport[0] = "authoredOn"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "replaces"
* dataRequirement[=].mustSupport[+] = "requisition"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "intent"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "doNotPerform"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "orderDetail"
* dataRequirement[=].mustSupport[+] = "quantity"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "occurrence"
* dataRequirement[=].mustSupport[+] = "asNeeded"
* dataRequirement[=].mustSupport[+] = "requester"
* dataRequirement[=].mustSupport[+] = "performerType"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "locationCode"
* dataRequirement[=].mustSupport[+] = "locationReference"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "insurance"
* dataRequirement[=].mustSupport[+] = "supportingInfo"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "patientInstruction"
* dataRequirement[=].mustSupport[+] = "relevantHistory"
* content.contentType = #text/cql
* content.data = "bGlicmFyeSBOSFNOZFFNQWN1dGVDYXJlSG9zcGl0YWxJbml0aWFsUG9wdWxhdGlvbiB2ZXJzaW9uICcwLjAuMDE0JwoKdXNpbmcgRkhJUiB2ZXJzaW9uICc0LjAuMScKCmluY2x1ZGUgRkhJUkhlbHBlcnMgdmVyc2lvbiAnNC4wLjEnIGNhbGxlZCBGSElSSGVscGVycwppbmNsdWRlIE1BVEdsb2JhbENvbW1vbkZ1bmN0aW9uc0ZISVI0IHZlcnNpb24gJzYuMS4wMDAnIGNhbGxlZCBHbG9iYWwKaW5jbHVkZSBTdXBwbGVtZW50YWxEYXRhRWxlbWVudHNGSElSNCB2ZXJzaW9uICcyLjAuMDAwJyBjYWxsZWQgU0RFCmluY2x1ZGUgU2hhcmVkUmVzb3VyY2VDcmVhdGlvbiB2ZXJzaW9uICcwLjEuMDA1JyBjYWxsZWQgU2hhcmVkUmVzb3VyY2UKCmNvZGVzeXN0ZW0gIkFjdENvZGUiOiAnaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlJwpjb2Rlc3lzdGVtICJPYnNlcnZhdGlvbiBDYXRlZ29yeSI6ICdodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29ic2VydmF0aW9uLWNhdGVnb3J5Jwpjb2Rlc3lzdGVtICJMT0lOQyI6ICdodHRwOi8vbG9pbmMub3JnJyAKY29kZXN5c3RlbSAiVjItMDA3NCI6ICdodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YyLTAwNzQnCgp2YWx1ZXNldCAiSW5wYXRpZW50LCBFbWVyZ2VuY3ksIGFuZCBPYnNlcnZhdGlvbiBMb2NhdGlvbnMiOiAnaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMDQ2LjI2NScKdmFsdWVzZXQgIkVtZXJnZW5jeSBEZXBhcnRtZW50IFZpc2l0IjogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzg4My4zLjExNy4xLjcuMS4yOTInCnZhbHVlc2V0ICJFbmNvdW50ZXIgSW5wYXRpZW50IjogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzg4My4zLjY2Ni41LjMwNycKdmFsdWVzZXQgIk9ic2VydmF0aW9uIFNlcnZpY2VzIjogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzc2Mi4xLjQuMTExMS4xNDMnCnZhbHVlc2V0ICJOSFNOIElucGF0aWVudCBFbmNvdW50ZXIgQ2xhc3MgQ29kZXMiOiAnaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMDQ2LjI3NCcKCi8vY29kZSBmb3IgT2JzZXJ2YXRpb24gQ2F0ZWdvcnkKY29kZSAibGFib3JhdG9yeSI6ICdsYWJvcmF0b3J5JyBmcm9tICJPYnNlcnZhdGlvbiBDYXRlZ29yeSIgZGlzcGxheSAnTGFib3JhdG9yeScKY29kZSAic29jaWFsLWhpc3RvcnkiOiAnc29jaWFsLWhpc3RvcnknIGZyb20gIk9ic2VydmF0aW9uIENhdGVnb3J5IiBkaXNwbGF5ICdTb2NpYWwgSGlzdG9yeScKY29kZSAidml0YWwtc2lnbnMiOiAndml0YWwtc2lnbnMnIGZyb20gIk9ic2VydmF0aW9uIENhdGVnb3J5IiBkaXNwbGF5ICdWaXRhbCBTaWducycKY29kZSAiaW1hZ2luZyI6ICdpbWFnaW5nJyBmcm9tICJPYnNlcnZhdGlvbiBDYXRlZ29yeSIgZGlzcGxheSAnSW1hZ2luZycKY29kZSAicHJvY2VkdXJlIjogJ3Byb2NlZHVyZScgZnJvbSAiT2JzZXJ2YXRpb24gQ2F0ZWdvcnkiIGRpc3BsYXkgJ1Byb2NlZHVyZScKY29kZSAic3VydmV5IjogJ3N1cnZleScgZnJvbSAiT2JzZXJ2YXRpb24gQ2F0ZWdvcnkiIGRpc3BsYXkgJ1N1cnZleScKCi8vY29kZSBmb3IgRGlhZ25vc3RpYyBSZXBvcnQgQ2F0ZWdvcnkKY29kZSAiTEFCIjogJ0xBQicgZnJvbSAiVjItMDA3NCIgZGlzcGxheSAnTGFib3JhdG9yeScKY29kZSAiUmFkaW9sb2d5IjogJ0xQMjk2ODQtNScgZnJvbSAiTE9JTkMiIGRpc3BsYXkgJ1JhZGlvbG9neScKY29kZSAiUGF0aG9sb2d5IjogJ0xQNzgzOS02JyBmcm9tICJMT0lOQyIgZGlzcGxheSAnUGF0aG9sb2d5Jwpjb2RlICJDYXJkaW9sb2d5IjogJ0xQMjk3MDgtMicgZnJvbSAiTE9JTkMiIGRpc3BsYXkgJ0NhcmRpb2xvZ3knCgpwYXJhbWV0ZXIgIk1lYXN1cmVtZW50IFBlcmlvZCIgCiAgICBkZWZhdWx0IEludGVydmFsW0AyMDI0LTAxLTAxVDAwOjAwOjAwLjAsIEAyMDI0LTAxLTMxVDAwOjAwOjAwLjApCgpjb250ZXh0IFBhdGllbnQgCgpkZWZpbmUgIlF1YWxpZnlpbmcgRW5jb3VudGVycyBEdXJpbmcgTWVhc3VyZW1lbnQgUGVyaW9kIjoKICggW0VuY291bnRlcjogIkVuY291bnRlciBJbnBhdGllbnQiXQogIHVuaW9uIFtFbmNvdW50ZXI6ICJFbWVyZ2VuY3kgRGVwYXJ0bWVudCBWaXNpdCJdCiAgdW5pb24gW0VuY291bnRlcjogIk9ic2VydmF0aW9uIFNlcnZpY2VzIl0KICB1bmlvbiBbRW5jb3VudGVyOiBjbGFzcyBpbiAiTkhTTiBJbnBhdGllbnQgRW5jb3VudGVyIENsYXNzIENvZGVzIl0pIFF1YWxpZnlpbmdFbmNvdW50ZXJzCiAgd2hlcmUgUXVhbGlmeWluZ0VuY291bnRlcnMuc3RhdHVzIGluIHsnaW4tcHJvZ3Jlc3MnLCAnZmluaXNoZWQnLCAndHJpYWdlZCcsICdvbmxlYXZlJywgJ2VudGVyZWQtaW4tZXJyb3InfQogICAgYW5kIFF1YWxpZnlpbmdFbmNvdW50ZXJzLnBlcmlvZCBvdmVybGFwcyAiTWVhc3VyZW1lbnQgUGVyaW9kIiAKCmRlZmluZSAiRW5jb3VudGVycyB3aXRoIFBhdGllbnQgSG9zcGl0YWwgTG9jYXRpb25zIjoKICAiRW5jb3VudGVycyIgRW5jb3VudGVycwogIHdoZXJlIGV4aXN0cygKICAgIEVuY291bnRlcnMubG9jYXRpb24gRW5jb3VudGVyTG9jYXRpb24KICAgIHdoZXJlIEdsb2JhbC5HZXRMb2NhdGlvbihFbmNvdW50ZXJMb2NhdGlvbi5sb2NhdGlvbikudHlwZSBpbiAiSW5wYXRpZW50LCBFbWVyZ2VuY3ksIGFuZCBPYnNlcnZhdGlvbiBMb2NhdGlvbnMiCiAgICAgIGFuZCBFbmNvdW50ZXJMb2NhdGlvbi5wZXJpb2Qgb3ZlcmxhcHMgRW5jb3VudGVycy5wZXJpb2QKICApCiAgYW5kIEVuY291bnRlcnMuc3RhdHVzIGluIHsnaW4tcHJvZ3Jlc3MnLCAnZmluaXNoZWQnLCAndHJpYWdlZCcsICdvbmxlYXZlJywgJ2VudGVyZWQtaW4tZXJyb3InfQogIGFuZCBFbmNvdW50ZXJzLnBlcmlvZCBvdmVybGFwcyAiTWVhc3VyZW1lbnQgUGVyaW9kIgoKZGVmaW5lICJJbml0aWFsIFBvcHVsYXRpb24iOgogICJRdWFsaWZ5aW5nIEVuY291bnRlcnMgRHVyaW5nIE1lYXN1cmVtZW50IFBlcmlvZCIKICB1bmlvbiAiRW5jb3VudGVycyB3aXRoIFBhdGllbnQgSG9zcGl0YWwgTG9jYXRpb25zIgoKZGVmaW5lICJFbmNvdW50ZXJzIjoKICBbRW5jb3VudGVyXQoKZGVmaW5lICJEaWFnbm9zdGljUmVwb3J0cyI6CiAgW0RpYWdub3N0aWNSZXBvcnRdCgpkZWZpbmUgIk9ic2VydmF0aW9ucyI6CiAgW09ic2VydmF0aW9uXQoKLy9Eb3VibGUgY2hlY2tpbmcgZm9yIElQJ3MgcGVyaW9kIGR1cmluZyBNUCBhcyBJUCBpcyBjcmVhdGVkIG91dCBvZiBxdWFsaWZ5aW5nIGVuY291bnRlcnMsIHdoaWNoIGNoZWNrcyBmb3IgaXQsIAovL2FuZCBlbmNvdW50ZXIncyBsb2NhdGlvbnMsIHdoaWNoIGRvZXNuJ3QKZGVmaW5lICJJUCBFbmNvdW50ZXJzIE92ZXJsYXAgTWVhc3VyZW1lbnQgUGVyaW9kIjoKICAiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogIHdoZXJlIElQLnBlcmlvZCBvdmVybGFwcyAiTWVhc3VyZW1lbnQgUGVyaW9kIgoKZGVmaW5lICJHZXQgTG9jYXRpb25zIGZyb20gSVAgRW5jb3VudGVycyBpbiBNZWFzdXJlbWVudCBQZXJpb2QiOgogIGZsYXR0ZW4oIklQIEVuY291bnRlcnMgT3ZlcmxhcCBNZWFzdXJlbWVudCBQZXJpb2QiIEVuY291bnRlcnMKICBsZXQgbG9jYXRpb25FbGVtZW50czogRW5jb3VudGVycy5sb2NhdGlvbgogIHJldHVybgogICAgbG9jYXRpb25FbGVtZW50cyBMRQogICAgbGV0IGxvY2F0aW9uUmVmZXJlbmNlOiBMRS5sb2NhdGlvbgogICAgcmV0dXJuIEdsb2JhbC5HZXRMb2NhdGlvbihsb2NhdGlvblJlZmVyZW5jZSkpCgovLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy9TdXBwbGVtZW50YWwgRGF0YSBFbGVtZW50Ci8vV2hlbiBGSElSLmNhbm9uaWNhbCB2YWx1ZSBpcyBwcmVzZW50LCBVUyBDb3JlIDMuMS4xIHByb2ZpbGVzIGFyZSB1c2VkCi8vV2hlbiBGSElSLmNhbm9uaWNhbCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgRkhJUiBCYXNlIHByb2ZpbGVzIGFyZSB1c2VkCi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQpkZWZpbmUgIlNERSBDb25kaXRpb24iOgogIFtDb25kaXRpb25dIENvbmRpdGlvbnMgCiAgd2hlcmUgZXhpc3RzKCJJbml0aWFsIFBvcHVsYXRpb24iKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5Db25kaXRpb25SZXNvdXJjZShDb25kaXRpb25zLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtY29uZGl0aW9uJ319KQoKZGVmaW5lICJTREUgRGV2aWNlIjoKICBbRGV2aWNlXSBEZXZpY2VzIAogIHdoZXJlIGV4aXN0cygiSW5pdGlhbCBQb3B1bGF0aW9uIikKICByZXR1cm4gRGV2aWNlUmVzb3VyY2UoRGV2aWNlcywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLWRldmljZSd9fSkKCmRlZmluZSAiU0RFIERpYWdub3N0aWNSZXBvcnQgTGFiIjoKICAiRGlhZ25vc3RpY1JlcG9ydHMiIERpYWdub3N0aWNSZXBvcnRzCiAgd2hlcmUgKGV4aXN0cyhEaWFnbm9zdGljUmVwb3J0cy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJMQUIiKQogICAgYW5kIGV4aXN0cygKICAgICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgICAgd2hlcmUgR2xvYmFsLiJOb3JtYWxpemUgSW50ZXJ2YWwiKERpYWdub3N0aWNSZXBvcnRzLmVmZmVjdGl2ZSkgb3ZlcmxhcHMgSVAucGVyaW9kKSkKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuRGlhZ25vc3RpY1JlcG9ydExhYlJlc291cmNlKERpYWdub3N0aWNSZXBvcnRzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtZGlhZ25vc3RpY3JlcG9ydC1sYWInfX0pCiAKZGVmaW5lICJTREUgRGlhZ25vc3RpY1JlcG9ydCBOb3RlIjoKICAiRGlhZ25vc3RpY1JlcG9ydHMiIERpYWdub3N0aWNSZXBvcnRzCiAgd2hlcmUgKChleGlzdHMoRGlhZ25vc3RpY1JlcG9ydHMuY2F0ZWdvcnkgQ2F0ZWdvcnkgd2hlcmUgQ2F0ZWdvcnkgfiAiUmFkaW9sb2d5IikpCiAgICBvciBleGlzdHMoKERpYWdub3N0aWNSZXBvcnRzLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gIlBhdGhvbG9neSIpKQogICAgb3IgZXhpc3RzKChEaWFnbm9zdGljUmVwb3J0cy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJDYXJkaW9sb2d5IikpKQogICAgYW5kIGV4aXN0cygKICAgICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgICAgd2hlcmUgR2xvYmFsLiJOb3JtYWxpemUgSW50ZXJ2YWwiKERpYWdub3N0aWNSZXBvcnRzLmVmZmVjdGl2ZSkgb3ZlcmxhcHMgSVAucGVyaW9kKQogIHJldHVybiBEaWFnbm9zdGljUmVwb3J0UmVzb3VyY2UoRGlhZ25vc3RpY1JlcG9ydHMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1kaWFnbm9zdGljcmVwb3J0LW5vdGUnfX0pCgpkZWZpbmUgIlNERSBEaWFnbm9zdGljUmVwb3J0IE90aGVycyI6CiAgW0RpYWdub3N0aWNSZXBvcnRdIERpYWdub3N0aWNSZXBvcnRzCiAgd2hlcmUgbm90ICgoZXhpc3RzKERpYWdub3N0aWNSZXBvcnRzLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gIlJhZGlvbG9neSIpKQogICAgb3IgZXhpc3RzKChEaWFnbm9zdGljUmVwb3J0cy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJQYXRob2xvZ3kiKSkKICAgIG9yIGV4aXN0cygoRGlhZ25vc3RpY1JlcG9ydHMuY2F0ZWdvcnkgQ2F0ZWdvcnkgd2hlcmUgQ2F0ZWdvcnkgfiAiQ2FyZGlvbG9neSIpKQogICAgb3IgZXhpc3RzKERpYWdub3N0aWNSZXBvcnRzLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gIkxBQiIpKQogICAgYW5kIGV4aXN0cygiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogICAgICB3aGVyZSBHbG9iYWwuIk5vcm1hbGl6ZSBJbnRlcnZhbCIoRGlhZ25vc3RpY1JlcG9ydHMuZWZmZWN0aXZlKSBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIERpYWdub3N0aWNSZXBvcnRSZXNvdXJjZShEaWFnbm9zdGljUmVwb3J0cywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLWRpYWdub3N0aWNyZXBvcnQnfX0pCgpkZWZpbmUgIlNERSBFbmNvdW50ZXIiOiAKICAiRW5jb3VudGVycyIgRW5jb3VudGVycwogIHdoZXJlIGV4aXN0cygKICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICB3aGVyZSBFbmNvdW50ZXJzLnBlcmlvZCBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIEVuY291bnRlclJlc291cmNlKEVuY291bnRlcnMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1lbmNvdW50ZXInfX0pCgpkZWZpbmUgIlNERSBMb2NhdGlvbiI6CiAgIkdldCBMb2NhdGlvbnMgZnJvbSBJUCBFbmNvdW50ZXJzIGluIE1lYXN1cmVtZW50IFBlcmlvZCIgTG9jYXRpb25zCiAgd2hlcmUgZXhpc3RzKCJJbml0aWFsIFBvcHVsYXRpb24iKQogIGFuZCBMb2NhdGlvbnMgaXMgbm90IG51bGwKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuTG9jYXRpb25SZXNvdXJjZShMb2NhdGlvbnMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1sb2NhdGlvbid9fSkKIApkZWZpbmUgIlNERSBNZWRpY2F0aW9uIEFkbWluaXN0cmF0aW9uIjoKICBbTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uXSBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb25zIAogIHdoZXJlIGV4aXN0cygKICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICB3aGVyZSBHbG9iYWwuIk5vcm1hbGl6ZSBJbnRlcnZhbCIoTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9ucy5lZmZlY3RpdmUpIG92ZXJsYXBzIElQLnBlcmlvZCkKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uUmVzb3VyY2UoTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9ucywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW1lZGljYXRpb25hZG1pbmlzdHJhdGlvbid9fSkKIApkZWZpbmUgIlNERSBNZWRpY2F0aW9uIFJlcXVlc3QiOgogIFtNZWRpY2F0aW9uUmVxdWVzdF0gTWVkaWNhdGlvblJlcXVlc3RzIAogIHdoZXJlIGV4aXN0cygKICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICB3aGVyZSBNZWRpY2F0aW9uUmVxdWVzdHMuYXV0aG9yZWRPbiBkdXJpbmcgSVAucGVyaW9kKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5NZWRpY2F0aW9uUmVxdWVzdFJlc291cmNlKE1lZGljYXRpb25SZXF1ZXN0cywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW1lZGljYXRpb25yZXF1ZXN0J319KQoKZGVmaW5lICJTREUgTWVkaWNhdGlvbiI6CiAgKCJTREUgTWVkaWNhdGlvbiBSZXF1ZXN0IgogIHVuaW9uICJTREUgTWVkaWNhdGlvbiBBZG1pbmlzdHJhdGlvbiIpIE1lZFJlcU9yQWRtaW4KICB3aGVyZSBNZWRSZXFPckFkbWluLm1lZGljYXRpb24gaXMgRkhJUi5SZWZlcmVuY2UKICBhbmQgZXhpc3RzKCJJbml0aWFsIFBvcHVsYXRpb24iKSAvL05vIGxvbmdlciBuZWVkIHRvIGNoZWNrIGZvciB0aW1pbmcgaGVyZSBiZWNhdXNlIGl0J3MgY2hlY2tlZCBpbiBTREUgTWVkaWNhdGlvbiBSZXF1ZXN0L0FkbWluaXN0cmlhdGlvbgogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5NZWRpY2F0aW9uUmVzb3VyY2UoR2V0TWVkaWNhdGlvbkZyb20oTWVkUmVxT3JBZG1pbi5tZWRpY2F0aW9uKSwKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW1lZGljYXRpb24nfX0pCgpkZWZpbmUgIlNERSBPYnNlcnZhdGlvbiBMYWIgQ2F0ZWdvcnkiOgogICJPYnNlcnZhdGlvbnMiIE9ic2VydmF0aW9ucyAKICB3aGVyZSAoZXhpc3RzKE9ic2VydmF0aW9ucy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJsYWJvcmF0b3J5IikpCiAgICBhbmQgZXhpc3RzKAogICAgICAiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogICAgICB3aGVyZSBHbG9iYWwuIk5vcm1hbGl6ZSBJbnRlcnZhbCIoT2JzZXJ2YXRpb25zLmVmZmVjdGl2ZSkgb3ZlcmxhcHMgSVAucGVyaW9kKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5PYnNlcnZhdGlvbkxhYlJlc291cmNlKE9ic2VydmF0aW9ucywKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vYWNoLW9ic2VydmF0aW9uLWxhYid9fSkKCi8vVml0YWwgU2lnbnMgT2JzZXJ2YXRpb24gaGFzIGl0cyBvd24gcHJvZmlsZSBpbiBGSElSIEJhc2UKZGVmaW5lICJTREUgT2JzZXJ2YXRpb24gVml0YWwgU2lnbnMgQ2F0ZWdvcnkiOgogICJPYnNlcnZhdGlvbnMiIE9ic2VydmF0aW9ucyAKICB3aGVyZSAoZXhpc3RzKE9ic2VydmF0aW9ucy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJ2aXRhbC1zaWducyIpKQogICAgYW5kIGV4aXN0cygKICAgICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgICAgd2hlcmUgR2xvYmFsLiJOb3JtYWxpemUgSW50ZXJ2YWwiKE9ic2VydmF0aW9ucy5lZmZlY3RpdmUpIG92ZXJsYXBzIElQLnBlcmlvZCkKICByZXR1cm4gT2JzZXJ2YXRpb25WaXRhbFNpZ25zUmVzb3VyY2UoT2JzZXJ2YXRpb25zLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtb2JzZXJ2YXRpb24tdml0YWxzJ319KQoKLy9EZWZhdWx0aW5nIHRvIGJhc2UgRkhJUiBwcm9maWxlIGFzIHRoZXJlIGFyZSBubyBpbmRpdmlkdWFsIHByb2ZpbGVzIGluIFVTIENvcmUgMy4xLjEgdGhhdCBjb3ZlciB0aGVzZSBPYnNlcnZhdGlvbiBjYXRlZ29yaWVzCmRlZmluZSAiU0RFIE9ic2VydmF0aW9uIENhdGVnb3J5IjoKICAiT2JzZXJ2YXRpb25zIiBPYnNlcnZhdGlvbnMgCiAgd2hlcmUgKChleGlzdHMoT2JzZXJ2YXRpb25zLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gInNvY2lhbC1oaXN0b3J5IikpCiAgICBvciAoZXhpc3RzKE9ic2VydmF0aW9ucy5jYXRlZ29yeSBDYXRlZ29yeSB3aGVyZSBDYXRlZ29yeSB+ICJzdXJ2ZXkiKSkKICAgIG9yIChleGlzdHMoT2JzZXJ2YXRpb25zLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gImltYWdpbmciKSkKICAgIG9yIChleGlzdHMoT2JzZXJ2YXRpb25zLmNhdGVnb3J5IENhdGVnb3J5IHdoZXJlIENhdGVnb3J5IH4gInByb2NlZHVyZSIpKSkKICAgIGFuZCBleGlzdHMoCiAgICAgICJJbml0aWFsIFBvcHVsYXRpb24iIElQCiAgICAgIHdoZXJlIEdsb2JhbC4iTm9ybWFsaXplIEludGVydmFsIihPYnNlcnZhdGlvbnMuZWZmZWN0aXZlKSBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIE9ic2VydmF0aW9uUmVzb3VyY2UoT2JzZXJ2YXRpb25zLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtb2JzZXJ2YXRpb24nfX0pCgpkZWZpbmUgIlNERSBDb3ZlcmFnZSI6IAoJW0NvdmVyYWdlXSBDb3ZlcmFnZXMKICB3aGVyZSBleGlzdHMoCiAgICAiSW5pdGlhbCBQb3B1bGF0aW9uIiBJUAogICAgd2hlcmUgQ292ZXJhZ2VzLnBlcmlvZCBvdmVybGFwcyBJUC5wZXJpb2QpCiAgcmV0dXJuIFNoYXJlZFJlc291cmNlLkNvdmVyYWdlUmVzb3VyY2UoQ292ZXJhZ2VzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtY292ZXJhZ2UnfX0pCgpkZWZpbmUgIlNERSBQcm9jZWR1cmUiOgogIFtQcm9jZWR1cmVdIFByb2NlZHVyZXMgCiAgd2hlcmUgZXhpc3RzKAogICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgIHdoZXJlIEdsb2JhbC4iTm9ybWFsaXplIEludGVydmFsIihQcm9jZWR1cmVzLnBlcmZvcm1lZCkgb3ZlcmxhcHMgSVAucGVyaW9kKQogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5Qcm9jZWR1cmVSZXNvdXJjZShQcm9jZWR1cmVzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtcHJvY2VkdXJlJ319KQoKZGVmaW5lICJTREUgU3BlY2ltZW4iOgogIFtTcGVjaW1lbl0gU3BlY2ltZW5zCiAgd2hlcmUgZXhpc3RzKAogICAgIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgIHdoZXJlIEdsb2JhbC4iTm9ybWFsaXplIEludGVydmFsIihTcGVjaW1lbnMuY29sbGVjdGlvbi5jb2xsZWN0ZWQpIG92ZXJsYXBzIElQLnBlcmlvZAogICkKICByZXR1cm4gU2hhcmVkUmVzb3VyY2UuU3BlY2ltZW5SZXNvdXJjZShTcGVjaW1lbnMsCiAge0ZISVIuY2Fub25pY2Fse3ZhbHVlOiAnaHR0cDovL2hsNy5vcmcvZmhpci91cy9uaHNuLWRxbS9TdHJ1Y3R1cmVEZWZpbml0aW9uL2FjaC1zcGVjaW1lbid9fSkKCmRlZmluZSAiU0RFIFNlcnZpY2UgUmVxdWVzdCI6CiAgW1NlcnZpY2VSZXF1ZXN0XSBTZXJ2aWNlUmVxdWVzdHMKICB3aGVyZSBleGlzdHMoIkluaXRpYWwgUG9wdWxhdGlvbiIgSVAKICAgIHdoZXJlIFNlcnZpY2VSZXF1ZXN0cy5hdXRob3JlZE9uIGR1cmluZyBJUC5wZXJpb2QpCiAgcmV0dXJuIFNoYXJlZFJlc291cmNlLlNlcnZpY2VSZXF1ZXN0UmVzb3VyY2UoU2VydmljZVJlcXVlc3RzLAogIHtGSElSLmNhbm9uaWNhbHt2YWx1ZTogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvbmhzbi1kcW0vU3RydWN0dXJlRGVmaW5pdGlvbi9hY2gtc2VydmljZXJlcXVlc3QnfX0pCgpkZWZpbmUgIlNERSBNaW5pbWFsIFBhdGllbnQiOgogIFBhdGllbnQgcAogIHJldHVybiBTaGFyZWRSZXNvdXJjZS5QYXRpZW50UmVzb3VyY2UocCwKICB7RkhJUi5jYW5vbmljYWx7dmFsdWU6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL25oc24tZHFtL1N0cnVjdHVyZURlZmluaXRpb24vY3Jvc3MtbWVhc3VyZS1wYXRpZW50J319KQoKLy8KLy9GdW5jdGlvbnMKLy8KZGVmaW5lIGZ1bmN0aW9uICJHZXRNZWRpY2F0aW9uRnJvbSIoY2hvaWNlIENob2ljZTxGSElSLkNvZGVhYmxlQ29uY2VwdCwgRkhJUi5SZWZlcmVuY2U+KToKICBjYXNlCiAgICB3aGVuIGNob2ljZSBpcyBGSElSLlJlZmVyZW5jZSB0aGVuCiAgICAgIEdldE1lZGljYXRpb24oY2hvaWNlIGFzIEZISVIuUmVmZXJlbmNlKQogICAgZWxzZQogICAgICBudWxsCiAgZW5kCgpkZWZpbmUgZnVuY3Rpb24gIkdldE1lZGljYXRpb24iKHJlZmVyZW5jZSBSZWZlcmVuY2UgKToKICBzaW5nbGV0b24gZnJvbSAoCiAgICBbTWVkaWNhdGlvbl0gTWVkaWNhdGlvbnMKICAgIHdoZXJlIE1lZGljYXRpb25zLmlkID0gR2xvYmFsLkdldElkKHJlZmVyZW5jZS5yZWZlcmVuY2UpCiAgKQoKLy8KLy9NZWFzdXJlIFNwZWNpZmljIFJlc291cmNlIENyZWF0aW9uIEZ1bmN0aW9ucwovLwpkZWZpbmUgZnVuY3Rpb24gRGV2aWNlVWRpQ2Fycmllcih1ZGlDYXJyaWVyIExpc3Q8RkhJUi5EZXZpY2UuVWRpQ2Fycmllcj4pOgogIHVkaUNhcnJpZXIgdQogIHJldHVybiBGSElSLkRldmljZS5VZGlDYXJyaWVyewogICAgZGV2aWNlSWRlbnRpZmllcjogdS5kZXZpY2VJZGVudGlmaWVyLAogICAgaXNzdWVyOiB1Lmlzc3VlciwKICAgIGp1cmlzZGljdGlvbjogdS5qdXJpc2RpY3Rpb24sCiAgICBjYXJyaWVyQUlEQzogdS5jYXJyaWVyQUlEQywKICAgIGNhcnJpZXJIUkY6IHUuY2FycmllckhSRiwKICAgIGVudHJ5VHlwZTogdS5lbnRyeVR5cGUKICB9CgpkZWZpbmUgZnVuY3Rpb24gRGV2aWNlRGV2aWNlTmFtZShkZXZpY2VOYW1lIExpc3Q8RkhJUi5EZXZpY2UuRGV2aWNlTmFtZT4pOgogIGRldmljZU5hbWUgZAogIHJldHVybiBGSElSLkRldmljZS5EZXZpY2VOYW1lewogICAgbmFtZTogZC5uYW1lLAogICAgdHlwZTogZC50eXBlCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIERldmljZVNwZWNpYWxpemF0aW9uKHNwZWNpYWxpemF0aW9uIExpc3Q8RkhJUi5EZXZpY2UuU3BlY2lhbGl6YXRpb24+KToKICBzcGVjaWFsaXphdGlvbiBzCiAgcmV0dXJuIEZISVIuRGV2aWNlLlNwZWNpYWxpemF0aW9uewogICAgc3lzdGVtVHlwZTogcy5zeXN0ZW1UeXBlLAogICAgdmVyc2lvbjogcy52ZXJzaW9uCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIERldmljZVZlcnNpb24odmVyc2lvbiBMaXN0PEZISVIuRGV2aWNlLlZlcnNpb24+KToKICB2ZXJzaW9uIHYKICByZXR1cm4gRkhJUi5EZXZpY2UuVmVyc2lvbnsKICAgIHR5cGU6IHYudHlwZSwKICAgIGNvbXBvbmVudDogdi5jb21wb25lbnQsCiAgICB2YWx1ZTogdi52YWx1ZQogIH0KCmRlZmluZSBmdW5jdGlvbiBEZXZpY2VQcm9wZXJ0eShkZXZpY2VQcm9wZXJ0eSBMaXN0PEZISVIuRGV2aWNlLlByb3BlcnR5Pik6CiAgZGV2aWNlUHJvcGVydHkgZAogIHJldHVybiBGSElSLkRldmljZS5Qcm9wZXJ0eXsKICAgIGlkOiBkLmlkLAogICAgdHlwZTogZC50eXBlLAogICAgdmFsdWVRdWFudGl0eTogZC52YWx1ZVF1YW50aXR5LAogICAgdmFsdWVDb2RlOiBkLnZhbHVlQ29kZQogIH0KCmRlZmluZSBmdW5jdGlvbiBEZXZpY2VSZXNvdXJjZShkZXZpY2UgRGV2aWNlLCBwcm9maWxlVVJMcyBMaXN0PEZISVIuY2Fub25pY2FsPik6CiAgZGV2aWNlIGQKICByZXR1cm4gRGV2aWNlewogICAgaWQ6IEZISVIuaWR7dmFsdWU6ICdMQ1ItJyArIGQuaWR9LAogICAgbWV0YTogU2hhcmVkUmVzb3VyY2UuTWV0YUVsZW1lbnQoZCwgcHJvZmlsZVVSTHMpLAogICAgZXh0ZW5zaW9uOiBkLmV4dGVuc2lvbiwKICAgIGRlZmluaXRpb246IGQuZGVmaW5pdGlvbiwKICAgIHVkaUNhcnJpZXI6IERldmljZVVkaUNhcnJpZXIoZC51ZGlDYXJyaWVyKSwKICAgIHN0YXR1czogZC5zdGF0dXMsCiAgICBzdGF0dXNSZWFzb246IGQuc3RhdHVzUmVhc29uLAogICAgZGlzdGluY3RJZGVudGlmaWVyOiBkLmRpc3RpbmN0SWRlbnRpZmllciwKICAgIG1hbnVmYWN0dXJlcjogZC5tYW51ZmFjdHVyZXIsCiAgICBtYW51ZmFjdHVyZURhdGU6IGQubWFudWZhY3R1cmVEYXRlLAogICAgZXhwaXJhdGlvbkRhdGU6IGQuZXhwaXJhdGlvbkRhdGUsCiAgICBsb3ROdW1iZXI6IGQubG90TnVtYmVyLAogICAgc2VyaWFsTnVtYmVyOiBkLnNlcmlhbE51bWJlciwKICAgIGRldmljZU5hbWU6IERldmljZURldmljZU5hbWUoZC5kZXZpY2VOYW1lKSwKICAgIG1vZGVsTnVtYmVyOiBkLm1vZGVsTnVtYmVyLAogICAgcGFydE51bWJlcjogZC5wYXJ0TnVtYmVyLAogICAgdHlwZTogZC50eXBlLAogICAgc3BlY2lhbGl6YXRpb246IERldmljZVNwZWNpYWxpemF0aW9uKGQuc3BlY2lhbGl6YXRpb24pLAogICAgdmVyc2lvbjogRGV2aWNlVmVyc2lvbihkLnZlcnNpb24pLAogICAgcHJvcGVydHk6IERldmljZVByb3BlcnR5KGQucHJvcGVydHkpLAogICAgcGF0aWVudDogZC5wYXRpZW50LAogICAgb3duZXI6IGQub3duZXIsCiAgICBjb250YWN0OiBkLmNvbnRhY3QsCiAgICBsb2NhdGlvbjogZC5sb2NhdGlvbiwKICAgIHVybDogZC51cmwsCiAgICBub3RlOiBkLm5vdGUsCiAgICBzYWZldHk6IGQuc2FmZXR5LAogICAgcGFyZW50OiBkLnBhcmVudAogIH0KCmRlZmluZSBmdW5jdGlvbiBEaWFnbm9zdGljUmVwb3J0UmVzb3VyY2UoZGlhZ25vc3RpY1JlcG9ydCBEaWFnbm9zdGljUmVwb3J0LCBwcm9maWxlVVJMcyBMaXN0PEZISVIuY2Fub25pY2FsPik6CiAgZGlhZ25vc3RpY1JlcG9ydCBkCiAgcmV0dXJuIERpYWdub3N0aWNSZXBvcnR7CiAgICBpZDogRkhJUi5pZHt2YWx1ZTogJ0xDUi0nICsgZC5pZH0sCiAgICBtZXRhOiBTaGFyZWRSZXNvdXJjZS5NZXRhRWxlbWVudChkLCBwcm9maWxlVVJMcyksCiAgICBleHRlbnNpb246IGQuZXh0ZW5zaW9uLAogICAgYmFzZWRPbjogZC5iYXNlZE9uLAogICAgc3RhdHVzOiBkLnN0YXR1cywKICAgIGNhdGVnb3J5OiBkLmNhdGVnb3J5LAogICAgY29kZTogZC5jb2RlLAogICAgc3ViamVjdDogZC5zdWJqZWN0LAogICAgZW5jb3VudGVyOiBkLmVuY291bnRlciwKICAgIGVmZmVjdGl2ZTogZC5lZmZlY3RpdmUsCiAgICBpc3N1ZWQ6IGQuaXNzdWVkLAogICAgcGVyZm9ybWVyOiBkLnBlcmZvcm1lciwKICAgIHJlc3VsdHNJbnRlcnByZXRlcjogZC5yZXN1bHRzSW50ZXJwcmV0ZXIsCiAgICBzcGVjaW1lbjogZC5zcGVjaW1lbiwKICAgIHJlc3VsdDogZC5yZXN1bHQsCiAgICBjb25jbHVzaW9uOiBkLmNvbmNsdXNpb24sCiAgICBjb25jbHVzaW9uQ29kZTogZC5jb25jbHVzaW9uQ29kZQogIH0KCmRlZmluZSBmdW5jdGlvbiBFbmNvdW50ZXJSZXNvdXJjZShlbmNvdW50ZXIgRW5jb3VudGVyLCBwcm9maWxlVVJMcyBMaXN0PEZISVIuY2Fub25pY2FsPik6CiAgZW5jb3VudGVyIGUKICByZXR1cm4gRW5jb3VudGVyewogICAgaWQ6IEZISVIuaWR7dmFsdWU6ICdMQ1ItJyArIGUuaWR9LAogICAgbWV0YTogU2hhcmVkUmVzb3VyY2UuTWV0YUVsZW1lbnQoZSwgcHJvZmlsZVVSTHMpLAogICAgZXh0ZW5zaW9uOiBlLmV4dGVuc2lvbiwKICAgIGlkZW50aWZpZXI6IFNoYXJlZFJlc291cmNlLkVuY291bnRlcklkZW50aWZpZXIoZS5pZGVudGlmaWVyKSwKICAgIHN0YXR1czogZS5zdGF0dXMsCiAgICBzdGF0dXNIaXN0b3J5OiBTaGFyZWRSZXNvdXJjZS5FbmNvdW50ZXJTdGF0dXNIaXN0b3J5KGUuc3RhdHVzSGlzdG9yeSksCiAgICBjbGFzczogZS5jbGFzcywKICAgIGNsYXNzSGlzdG9yeTogU2hhcmVkUmVzb3VyY2UuRW5jb3VudGVyQ2xhc3NIaXN0b3J5KGUuY2xhc3NIaXN0b3J5KSwKICAgIHR5cGU6IGUudHlwZSwKICAgIHNlcnZpY2VUeXBlOiBlLnNlcnZpY2VUeXBlLAogICAgcHJpb3JpdHk6IGUucHJpb3JpdHksCiAgICBzdWJqZWN0OiBlLnN1YmplY3QsCiAgICBwZXJpb2Q6IGUucGVyaW9kLAogICAgbGVuZ3RoOiBlLmxlbmd0aCwKICAgIHJlYXNvbkNvZGU6IGUucmVhc29uQ29kZSwKICAgIHJlYXNvblJlZmVyZW5jZTogZS5yZWFzb25SZWZlcmVuY2UsCiAgICBkaWFnbm9zaXM6IFNoYXJlZFJlc291cmNlLkVuY291bnRlckRpYWdub3NpcyhlLmRpYWdub3NpcyksCiAgICBhY2NvdW50OiBlLmFjY291bnQsCiAgICBob3NwaXRhbGl6YXRpb246IFNoYXJlZFJlc291cmNlLkVuY291bnRlckhvc3BpdGFsaXphdGlvbihlLmhvc3BpdGFsaXphdGlvbiksCiAgICBsb2NhdGlvbjogU2hhcmVkUmVzb3VyY2UuRW5jb3VudGVyTG9jYXRpb24oZS5sb2NhdGlvbiksCiAgICBwYXJ0T2Y6IGUucGFydE9mCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIE9ic2VydmF0aW9uUmVzb3VyY2Uob2JzZXJ2YXRpb24gT2JzZXJ2YXRpb24sIHByb2ZpbGVVUkxzIExpc3Q8RkhJUi5jYW5vbmljYWw+KToKICBvYnNlcnZhdGlvbiBvCiAgcmV0dXJuIE9ic2VydmF0aW9uewogICAgaWQ6IEZISVIuaWQge3ZhbHVlOiAnTENSLScgKyBvLmlkfSwKICAgIG1ldGE6IFNoYXJlZFJlc291cmNlLk1ldGFFbGVtZW50KG8sIHByb2ZpbGVVUkxzKSwKICAgIGV4dGVuc2lvbjogby5leHRlbnNpb24sCiAgICBwYXJ0T2Y6IG8ucGFydE9mLAogICAgc3RhdHVzOiBvLnN0YXR1cywKICAgIGNhdGVnb3J5OiBvLmNhdGVnb3J5LAogICAgY29kZTogby5jb2RlLAogICAgc3ViamVjdDogby5zdWJqZWN0LAogICAgZm9jdXM6IG8uZm9jdXMsCiAgICBlbmNvdW50ZXI6IG8uZW5jb3VudGVyLAogICAgZWZmZWN0aXZlOiBvLmVmZmVjdGl2ZSwKICAgIGlzc3VlZDogby5pc3N1ZWQsCiAgICBwZXJmb3JtZXI6IG8ucGVyZm9ybWVyLAogICAgdmFsdWU6IG8udmFsdWUsCiAgICBkYXRhQWJzZW50UmVhc29uOiBvLmRhdGFBYnNlbnRSZWFzb24sCiAgICBpbnRlcnByZXRhdGlvbjogby5pbnRlcnByZXRhdGlvbiwKICAgIG5vdGU6IG8ubm90ZSwKICAgIGJvZHlTaXRlOiBvLmJvZHlTaXRlLAogICAgbWV0aG9kOiBvLm1ldGhvZCwKICAgIHNwZWNpbWVuOiBvLnNwZWNpbWVuLAogICAgZGV2aWNlOiBvLmRldmljZSwKICAgIHJlZmVyZW5jZVJhbmdlOiBTaGFyZWRSZXNvdXJjZS5PYnNlcnZhdGlvblJlZmVyZW5jZVJhbmdlKG8ucmVmZXJlbmNlUmFuZ2UpLAogICAgaGFzTWVtYmVyOiBvLmhhc01lbWJlciwKICAgIGRlcml2ZWRGcm9tOiBvLmRlcml2ZWRGcm9tLAogICAgY29tcG9uZW50OiBTaGFyZWRSZXNvdXJjZS5PYnNlcnZhdGlvbkNvbXBvbmVudChvLmNvbXBvbmVudCkKICB9CgpkZWZpbmUgZnVuY3Rpb24gT2JzZXJ2YXRpb25WaXRhbFNpZ25zQ29kaW5nKGNvZGluZyBMaXN0PENvZGluZz4pOgogIGNvZGluZyBjCiAgcmV0dXJuIENvZGluZ3sKICAgIHN5c3RlbTogYy5zeXN0ZW0sCiAgICB2ZXJzaW9uOiBjLnZlcnNpb24sCiAgICBjb2RlOiBjLmNvZGUsCiAgICBkaXNwbGF5OiBjLmRpc3BsYXksCiAgICB1c2VyU2VsZWN0ZWQ6IGMudXNlclNlbGVjdGVkCiAgfQoKZGVmaW5lIGZ1bmN0aW9uIE9ic2VydmF0aW9uVml0YWxTaWduc0NhdGVnb3J5KGNhdGVnb3J5IExpc3Q8Q29kZWFibGVDb25jZXB0Pik6CiAgY2F0ZWdvcnkgYwogIHJldHVybiBDb2RlYWJsZUNvbmNlcHR7CiAgICBjb2Rpbmc6IE9ic2VydmF0aW9uVml0YWxTaWduc0NvZGluZyhjLmNvZGluZyksCiAgICB0ZXh0OiBjLnRleHQKICB9CgpkZWZpbmUgZnVuY3Rpb24gT2JzZXJ2YXRpb25WaXRhbFNpZ25zQ29tcG9uZW50KGNvbXBvbmVudCBMaXN0PEZISVIuT2JzZXJ2YXRpb24uQ29tcG9uZW50Pik6CiAgY29tcG9uZW50IGMKICByZXR1cm4gRkhJUi5PYnNlcnZhdGlvbi5Db21wb25lbnR7CiAgICBjb2RlOiBjLmNvZGUsCiAgICB2YWx1ZTogYy52YWx1ZSwKICAgIGRhdGFBYnNlbnRSZWFzb246IGMuZGF0YUFic2VudFJlYXNvbiwKICAgIGludGVycHJldGF0aW9uOiBjLmludGVycHJldGF0aW9uLAogICAgcmVmZXJlbmNlUmFuZ2U6IFNoYXJlZFJlc291cmNlLk9ic2VydmF0aW9uUmVmZXJlbmNlUmFuZ2UoYy5yZWZlcmVuY2VSYW5nZSkKICB9CgpkZWZpbmUgZnVuY3Rpb24gT2JzZXJ2YXRpb25WaXRhbFNpZ25zUmVzb3VyY2Uob2JzZXJ2YXRpb24gT2JzZXJ2YXRpb24sIHByb2ZpbGVVUkxzIExpc3Q8RkhJUi5jYW5vbmljYWw+KToKICBvYnNlcnZhdGlvbiBvCiAgcmV0dXJuIE9ic2VydmF0aW9uewogICAgaWQ6IEZISVIuaWQge3ZhbHVlOiAnTENSLScgKyBvLmlkfSwKICAgIG1ldGE6IFNoYXJlZFJlc291cmNlLk1ldGFFbGVtZW50KG8sIHByb2ZpbGVVUkxzKSwKICAgIGV4dGVuc2lvbjogby5leHRlbnNpb24sCiAgICBwYXJ0T2Y6IG8ucGFydE9mLAogICAgc3RhdHVzOiBvLnN0YXR1cywKICAgIGNhdGVnb3J5OiBPYnNlcnZhdGlvblZpdGFsU2lnbnNDYXRlZ29yeShvLmNhdGVnb3J5KSwKICAgIGNvZGU6IG8uY29kZSwKICAgIHN1YmplY3Q6IG8uc3ViamVjdCwKICAgIGZvY3VzOiBvLmZvY3VzLAogICAgZW5jb3VudGVyOiBvLmVuY291bnRlciwKICAgIGVmZmVjdGl2ZTogby5lZmZlY3RpdmUsCiAgICBpc3N1ZWQ6IG8uaXNzdWVkLAogICAgcGVyZm9ybWVyOiBvLnBlcmZvcm1lciwKICAgIHZhbHVlOiBvLnZhbHVlLAogICAgZGF0YUFic2VudFJlYXNvbjogby5kYXRhQWJzZW50UmVhc29uLAogICAgaW50ZXJwcmV0YXRpb246IG8uaW50ZXJwcmV0YXRpb24sCiAgICBub3RlOiBvLm5vdGUsCiAgICBib2R5U2l0ZTogby5ib2R5U2l0ZSwKICAgIG1ldGhvZDogby5tZXRob2QsCiAgICBzcGVjaW1lbjogby5zcGVjaW1lbiwKICAgIGRldmljZTogby5kZXZpY2UsCiAgICByZWZlcmVuY2VSYW5nZTogU2hhcmVkUmVzb3VyY2UuT2JzZXJ2YXRpb25SZWZlcmVuY2VSYW5nZShvLnJlZmVyZW5jZVJhbmdlKSwKICAgIGhhc01lbWJlcjogby5oYXNNZW1iZXIsCiAgICBkZXJpdmVkRnJvbTogby5kZXJpdmVkRnJvbSwKICAgIGNvbXBvbmVudDogT2JzZXJ2YXRpb25WaXRhbFNpZ25zQ29tcG9uZW50KG8uY29tcG9uZW50KQogIH0="


Instance: ach-options
InstanceOf: Parameters
Usage: #inline
* parameter[0].name = "translatorVersion"
* parameter[=].valueString = "3.5.1"
* parameter[+].name = "option"
* parameter[=].valueString = "EnableDateRangeOptimization"
* parameter[+].name = "option"
* parameter[=].valueString = "EnableAnnotations"
* parameter[+].name = "option"
* parameter[=].valueString = "EnableLocators"
* parameter[+].name = "option"
* parameter[=].valueString = "DisableListDemotion"
* parameter[+].name = "option"
* parameter[=].valueString = "DisableListPromotion"
* parameter[+].name = "analyzeDataRequirements"
* parameter[=].valueBoolean = false
* parameter[+].name = "collapseDataRequirements"
* parameter[=].valueBoolean = true
* parameter[+].name = "compatibilityLevel"
* parameter[=].valueString = "1.5"
* parameter[+].name = "enableCqlOnly"
* parameter[=].valueBoolean = false
* parameter[+].name = "errorLevel"
* parameter[=].valueString = "Info"
* parameter[+].name = "signatureLevel"
* parameter[=].valueString = "None"
* parameter[+].name = "validateUnits"
* parameter[=].valueBoolean = true
* parameter[+].name = "verifyOnly"
* parameter[=].valueBoolean = false

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/List/list-example-ach-patients-of-interest.fsh

Instance: list-example-ach-patients-of-interest
InstanceOf: PatientsOfInterestList
Title: "List - Example ACH Patients Of Interest"
Description: "List - Example ACH Patients Of Interest"
Usage: #example
* identifier.system = "http://example.com/Identifier"
* identifier.value = "NHSNdQMAcuteCareHospitalInitialPopulation"
* status = #current
* mode = #changes
* date = "2021-07-28T00:00:00Z"
* entry[0].item = Reference(patient-example-sameresultdiffday)
* entry[+].item = Reference(patient-example-ach-ach-pass1)
* entry[+].item = Reference(patient-example-ach-ach-pass2)
* entry[+].item = Reference(patient-example-ach-ach-pass3)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/List/list-example-patients-of-interest.fsh

Instance: list-example-patients-of-interest
InstanceOf: PatientsOfInterestList
Title: "List - Example Patients of Interest List 1"
Description: "List - Patients of Interest Example 1"
Usage: #example
* identifier.system = "http://example.com/Identifier"
* identifier.value = "NHSNdQMAcuteCareHospitalInitialPopulation"
* status = #current
* mode = #changes
* date = "2021-07-28T00:00:00Z"
* entry[0].item = Reference(patient-example-sameresultdiffday)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Location/location-example-ach-crit.fsh

Instance: location-example-ach-crit
InstanceOf: QICoreLocation
Title: "Location - Example ACH - Crit"
Description: "Location - Example ACH - Medical Critical Care"
Usage: #example
* identifier.system = "http://www.example.org/location"
* identifier.value = "2936"
* status = #active
* name = "ACH Medical Critical Care"
* description = "ACH Medical Critical Care"
* type = $hsloc.html#1027-2 "Medical Critical Care"
* type.text = "Medical Critical Care"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Location/location-example-ach-emergency.fsh

Instance: location-example-ach-emergency
InstanceOf: QICoreLocation
Title: "Location - Example ACH - Emergency"
Description: "Location - Example ACH - Emergency Department"
Usage: #example
* identifier.system = "http://www.example.org/location"
* identifier.value = "2934"
* status = #active
* name = "ACH Emergency Department"
* description = "ACH Emergency Department"
* type = $hsloc.html#1108-0 "Emergency Department"
* type.text = "Emergency Department"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Location/location-example-ach-inpatient.fsh

Instance: location-example-ach-inpatient
InstanceOf: QICoreLocation
Title: "Location - Example ACH - Inpatient"
Description: "Location - Example ACH - Inpatient Hospital Ward"
Usage: #example
* identifier.system = "http://www.example.org/location"
* identifier.value = "2935"
* status = #active
* name = "ACH Inpatient Hospital Ward"
* description = "ACH Inpatient Hospital Ward"
* type = $hsloc.html#1060-3 "Medical Ward"
* type.text = "Medical ward"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Location/location-example-ach-medsurg.fsh

Instance: location-example-ach-medsurg
InstanceOf: QICoreLocation
Title: "Location - Example ACH - Medsurg"
Description: "Location - Example ACH - Medical-Surgical Ward"
Usage: #example
* identifier.system = "http://www.example.org/location"
* identifier.value = "2935"
* status = #active
* name = "ACH Medical-Surgical Ward"
* description = "ACH Medical-Surgical Ward"
* type = $hsloc.html#1061-1 "Medical-Surgical Ward"
* type.text = "Medical-Surgical Ward"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Location/location-example-ach-nicu-level-iii.fsh

Instance: location-example-ach-nicu-level-iii
InstanceOf: QICoreLocation
Title: "Location - Example ACH - Nicu"
Description: "Location - Example ACH - Neonatal Critical Care (Level III)"
Usage: #example
* identifier.system = "http://www.example.org/location"
* identifier.value = "2933"
* name = "ACH Neonatal critical care"
* description = "ACH Neonatal critical care"
* type = $hsloc.html#1040-5 "Neonatal Critical Care (Level III)"
* physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa "Ward"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Measure/Measure_NHSNdQMAcuteCareHospitalInitialPopulation.fsh

Instance: NHSNdQMAcuteCareHospitalInitialPopulation
Title: "Acute Care Hospital Initial Population Measure"
Description: "The Acute Care Hospital (ACH) Initial Population includes all encounters for patients of any age in an ED, observation, or inpatient location or all encounters for patients of any age with an ED, observation, inpatient, or short stay status during the measurement period."
InstanceOf: CRMIShareableMeasure
Usage: #example
* contained = effective-data-requirements
* extension[0].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-populationBasis"
* extension[=].valueCode = #Encounter
* extension[+].id = "effective-data-requirements"
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-effectiveDataRequirements"
* extension[=].valueReference = Reference(effective-data-requirements)
* url = "http://hl7.org/fhir/us/nhsn-dqm/Measure/NHSNdQMAcuteCareHospitalInitialPopulation"
* version = "1.0.0-cibuild"
* name = "NHSNdQMAcuteCareHospitalInitialPopulation"
* title = "NHSN dQM Acute Care Hospital Initial Population"
* status = #draft
* experimental = false
* date = "2024-02-29T17:44:38-05:00"
* publisher = "Lantana Consulting Group"
* description = "The Acute Care Hospital Initial Population includes all encounters for patients of any age in an ED, observation, or inpatient location or all encounters for patients of any age with an ED, observation, inpatient, or short stay status during the measurement period."
* copyright = "Limited proprietary coding is contained in the Measure specifications for user convenience. Users of proprietary code sets should obtain all necessary licenses from the owners of the code sets."
* relatedArtifact.type = #documentation
* relatedArtifact.display = "https://www.cdc.gov/nhsn/index.html [placeholder for link to protocol on CDC website]"
* relatedArtifact.url = "https://www.cdc.gov/nhsn/index.html"
* relatedArtifact.document.url = "https://www.cdc.gov/nhsn/index.html"
* library = Canonical(NHSNdQMAcuteCareHospitalInitialPopulationLibrary)
* disclaimer = "This performance measure is not a clinical guideline, does not establish a standard of medical care and has not been tested for all potential applications.        THE MEASURES AND SPECIFICATIONS ARE PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND.        This measure and specifications are subject to further revisions."
* scoring = $measure-scoring#cohort "Cohort"
* type = $measure-type#outcome "Outcome"
* rationale = "The NHSN Acute Care Hospital dQM allows for facilities to report line level patient data electronically to NHSN for the following modules that are reported monthly: Glycemic Control, Hypoglycemia; Healthcare facility-onset, antibiotic-Treated Clostridioides difficile (C. difficile) Infection (HT-CDI); Hospital-Onset Bacteremia & Fungemia (HOB); Venous Thromboembolism (VTE); Late Onset Sepsis / Meningitis. *Please see [Acute Care / Critical Access Hospitals (ACH) | NHSN | CDC](https://www.cdc.gov/nhsn/acute-care-hospital/index.html) for the individual measure protocols."
* group.population[+].id = "initial-population"
* group.population[=].code = $measure-population#initial-population "Initial Population"
* group.population[=].description = "All encounters for patients of any age in an ED, observation, or inpatient location or all encounters for patients of any age with an ED, observation, inpatient, or short stay status during the measurement period."
* group.population[=].criteria.language = #text/cql-identifier
* group.population[=].criteria.expression = "Initial Population"
* supplementalData[0].id = "sde-condition"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Condition"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Condition"
* supplementalData[+].id = "sde-device"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Device"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Device"
* supplementalData[+].id = "sde-diagnosticreport-lab"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE DiagnosticReport Lab"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE DiagnosticReport Lab"
* supplementalData[+].id = "sde-diagnosticreport-note"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE DiagnosticReport Note"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE DiagnosticReport Note"
* supplementalData[+].id = "sde-diagnosticreport-others"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE DiagnosticReport Others"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE DiagnosticReport Others"
* supplementalData[+].id = "sde-encounter"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Encounter"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Encounter"
* supplementalData[+].id = "sde-location"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Location"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Location"
* supplementalData[+].id = "sde-medication-administration"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Medication Administration"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Medication Administration"
* supplementalData[+].id = "sde-medication-request"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Medication Request"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Medication Request"
* supplementalData[+].id = "sde-medication"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Medication"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Medication"
* supplementalData[+].id = "sde-observation-lab-category"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Observation Lab Category"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Observation Lab Category"
* supplementalData[+].id = "sde-observation-vital-signs-category"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Observation Vital Signs Category"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Observation Vital Signs Category"
* supplementalData[+].id = "sde-observation-category"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Observation Category"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Observation Category"
* supplementalData[+].id = "sde-coverage"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Coverage"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Coverage"
* supplementalData[+].id = "sde-procedure"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Procedure"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Procedure"
* supplementalData[+].id = "sde-specimen"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Specimen"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Specimen"
* supplementalData[+].id = "sde-service-request"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Service Request"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Service Request"
* supplementalData[+].id = "sde-minimal-patient"
* supplementalData[=].usage = $measure-data-usage#supplemental-data
* supplementalData[=].description = "SDE Minimal Patient"
* supplementalData[=].criteria.language = #text/cql-identifier
* supplementalData[=].criteria.expression = "SDE Minimal Patient"

Instance: effective-data-requirements
InstanceOf: Library
Title: "Effective - Data Requirements"
Description: "Effective - Data Requirements"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $v3-ActCode#EMER "emergency"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $v3-ActCode#ACUTE "inpatient acute"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $v3-ActCode#IMP "inpatient encounter"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $v3-ActCode#NONAC "inpatient non-acute"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $v3-ActCode#SS "short stay"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $observation-category#laboratory "Laboratory"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $observation-category#vital-signs "Vital Signs"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $loinc#LP29684-5 "Radiology"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $loinc#LP7839-6 "Pathology"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $loinc#LP29708-2 "Cardiology"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $v2-0074#LAB "Laboratory"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $observation-category#social-history "Social History"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $observation-category#survey "Survey"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $observation-category#imaging "Imaging"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $observation-category#procedure "Procedure"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Encounters"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Encounters\":\n  [Encounter]"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 0
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Qualifying Encounters During Measurement Period"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Qualifying Encounters During Measurement Period\":\n ( [Encounter: \"Encounter Inpatient\"]\n  union [Encounter: \"Emergency Department Visit\"]\n  union [Encounter: \"Observation Services\"]\n  union [Encounter: class in {\"emergency\", \"inpatient acute\", \"inpatient encounter\", \"inpatient non-acute\", \"short stay\"}]) QualifyingEncounters\n  where QualifyingEncounters.status in {'in-progress', 'finished', 'triaged', 'onleave', 'entered-in-error'}\n    and QualifyingEncounters.period overlaps \"Measurement Period\""
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 1
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Encounters with Patient Hospital Locations"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//potentially an issue as this may pull ALL EXISTING ENCOUNTERS (no period to look against)\ndefine \"Encounters with Patient Hospital Locations\":\n  \"Encounters\" Encounters\n  where exists(\n    Encounters.location EncounterLocation\n    where Global.GetLocation(EncounterLocation.location).type in \"Inpatient, Emergency, and Observation Locations\"\n      and EncounterLocation.period overlaps Encounters.period\n  )\n  and Encounters.status in {'in-progress', 'finished', 'triaged', 'onleave', 'entered-in-error'}"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 2
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "// and Encounters.period overlaps \"Measurement Period\" (?)\n\ndefine \"Initial Population\":\n  \"Qualifying Encounters During Measurement Period\"\n  union \"Encounters with Patient Hospital Locations\""
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 3
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Encounter"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Encounter\": \n  \"Encounters\" Encounters\n  where exists(\n    \"Initial Population\" IP\n    where Encounters.period overlaps IP.period)\n  return SharedResource.EncounterResource(Encounters,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-encounter'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 4
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Medication Request"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Medication Request\":\n  [MedicationRequest] MedicationRequests \n  where exists(\n    \"Initial Population\" IP\n    where MedicationRequests.authoredOn during IP.period)\n  return SharedResource.MedicationRequestResource(MedicationRequests,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-medicationrequest'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 5
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Coverage"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Coverage\": \n\t[Coverage] Coverages\n  where exists(\n    \"Initial Population\" IP\n    where Coverages.period overlaps IP.period)\n  return SharedResource.CoverageResource(Coverages,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-coverage'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 6
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Procedure"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Procedure\":\n  [Procedure] Procedures \n  where exists(\n    \"Initial Population\" IP\n    where Global.\"Normalize Interval\"(Procedures.performed) overlaps IP.period)\n  return SharedResource.ProcedureResource(Procedures,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-procedure'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 7
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Device"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Device\":\n  [Device] Devices \n  where exists(\"Initial Population\")\n  return DeviceResource(Devices,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-device'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 8
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Observations"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Observations\":\n  [Observation]"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 9
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Observation Lab Category"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Observation Lab Category\":\n  \"Observations\" Observations \n  where (exists(Observations.category Category where Category ~ \"laboratory\"))\n    and exists(\n      \"Initial Population\" IP\n      where Global.\"Normalize Interval\"(Observations.effective) overlaps IP.period)\n  return SharedResource.ObservationLabResource(Observations,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-observation-lab'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 10
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Observation Vital Signs Category"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//Vital Signs Observation has its own profile in FHIR Base\ndefine \"SDE Observation Vital Signs Category\":\n  \"Observations\" Observations \n  where (exists(Observations.category Category where Category ~ \"vital-signs\"))\n    and exists(\n      \"Initial Population\" IP\n      where Global.\"Normalize Interval\"(Observations.effective) overlaps IP.period)\n  return ObservationVitalSignsResource(Observations,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-observation-vitals'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 11
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE DiagnosticReport Others"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE DiagnosticReport Others\":\n  [DiagnosticReport] DiagnosticReports\n  where not ((exists(DiagnosticReports.category Category where Category ~ \"Radiology\"))\n    or exists((DiagnosticReports.category Category where Category ~ \"Pathology\"))\n    or exists((DiagnosticReports.category Category where Category ~ \"Cardiology\"))\n    or exists(DiagnosticReports.category Category where Category ~ \"LAB\"))\n    and exists(\"Initial Population\" IP\n      where Global.\"Normalize Interval\"(DiagnosticReports.effective) overlaps IP.period)\n  return DiagnosticReportResource(DiagnosticReports,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-diagnosticreport'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 12
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Medication Administration"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Medication Administration\":\n  [MedicationAdministration] MedicationAdministrations \n  where exists(\n    \"Initial Population\" IP\n    where Global.\"Normalize Interval\"(MedicationAdministrations.effective) overlaps IP.period)\n  return SharedResource.MedicationAdministrationResource(MedicationAdministrations,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-medicationadministration'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 13
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Observation Category"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//Defaulting to base FHIR profile as there are no individual profiles in US Core 3.1.1 that cover these Observation categories\ndefine \"SDE Observation Category\":\n  \"Observations\" Observations \n  where ((exists(Observations.category Category where Category ~ \"social-history\"))\n    or (exists(Observations.category Category where Category ~ \"survey\"))\n    or (exists(Observations.category Category where Category ~ \"imaging\"))\n    or (exists(Observations.category Category where Category ~ \"procedure\")))\n    and exists(\n      \"Initial Population\" IP\n      where Global.\"Normalize Interval\"(Observations.effective) overlaps IP.period)\n  return ObservationResource(Observations,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-observation'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 14
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Condition"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//============================================================================\n//Supplemental Data Element\n//When FHIR.canonical value is present, US Core 3.1.1 profiles are used\n//When FHIR.canonical value is not present, FHIR Base profiles are used\n//============================================================================\ndefine \"SDE Condition\":\n  [Condition] Conditions \n  where exists(\"Initial Population\")\n  return SharedResource.ConditionResource(Conditions,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 15
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DiagnosticReports"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"DiagnosticReports\":\n  [DiagnosticReport]"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 16
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE DiagnosticReport Lab"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE DiagnosticReport Lab\":\n  \"DiagnosticReports\" DiagnosticReports\n  where (exists(DiagnosticReports.category Category where Category ~ \"LAB\")\n    and exists(\n      \"Initial Population\" IP\n      where Global.\"Normalize Interval\"(DiagnosticReports.effective) overlaps IP.period))\n  return SharedResource.DiagnosticReportLabResource(DiagnosticReports,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-diagnosticreport-lab'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 17
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "IP Encounters Overlap Measurement Period"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//Double checking for IP's period during MP as IP is created out of qualifying encounters, which checks for it, \n//and encounter's locations, which doesn't\ndefine \"IP Encounters Overlap Measurement Period\":\n  \"Initial Population\" IP\n  where IP.period overlaps \"Measurement Period\""
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 18
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Get Locations from IP Encounters in Measurement Period"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Get Locations from IP Encounters in Measurement Period\":\n  flatten(\"IP Encounters Overlap Measurement Period\" Encounters\n  let locationElements: Encounters.location\n  return\n    locationElements LE\n    let locationReference: LE.location\n    return Global.GetLocation(locationReference))"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 19
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Location"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Location\":\n  \"Get Locations from IP Encounters in Measurement Period\" Locations\n  where exists(\"Initial Population\")\n  and Locations is not null\n  return SharedResource.LocationResource(Locations,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-location'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 20
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Service Request"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Service Request\":\n  [ServiceRequest] ServiceRequests\n  where exists(\"Initial Population\" IP\n    where ServiceRequests.authoredOn during IP.period)\n  return SharedResource.ServiceRequestResource(ServiceRequests,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-servicerequest'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 21
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE DiagnosticReport Note"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE DiagnosticReport Note\":\n  \"DiagnosticReports\" DiagnosticReports\n  where ((exists(DiagnosticReports.category Category where Category ~ \"Radiology\"))\n    or exists((DiagnosticReports.category Category where Category ~ \"Pathology\"))\n    or exists((DiagnosticReports.category Category where Category ~ \"Cardiology\")))\n    and exists(\n      \"Initial Population\" IP\n      where Global.\"Normalize Interval\"(DiagnosticReports.effective) overlaps IP.period)\n  return DiagnosticReportResource(DiagnosticReports,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-diagnosticreport-note'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 22
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Minimal Patient"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Minimal Patient\":\n  Patient p\n  return SharedResource.PatientResource(p,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/cross-measure-patient'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 23
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Medication"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Medication\":\n  (\"SDE Medication Request\"\n  union \"SDE Medication Administration\") MedReqOrAdmin\n  where MedReqOrAdmin.medication is FHIR.Reference\n  and exists(\"Initial Population\") //No longer need to check for timing here because it's checked in SDE Medication Request/Administriation\n  return SharedResource.MedicationResource(GetMedicationFrom(MedReqOrAdmin.medication),\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-medication'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 24
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SDE Specimen"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"SDE Specimen\":\n  [Specimen] Specimens\n  where exists(\n    \"Initial Population\" IP\n    where Global.\"Normalize Interval\"(Specimens.collection.collected) overlaps IP.period\n  )\n  return SharedResource.SpecimenResource(Specimens,\n  {FHIR.canonical{value: 'http://hl7.org/fhir/us/nhsn-dqm/StructureDefinition/ach-specimen'}})"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 25
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToString"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToString(value EncounterStatus): value.value"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 26
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToInterval"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToInterval(period FHIR.Period):\n    if period is null then\n        null\n    else\n        if period.\"start\" is null then\n            Interval(period.\"start\".value, period.\"end\".value]\n        else\n            Interval[period.\"start\".value, period.\"end\".value]"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 27
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "MATGlobalCommonFunctionsFHIR4"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetLocation"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "// Returns the location for the given location reference\n\n/*Returns the Location resource specified by the given reference*/\ndefine function \"GetLocation\"(reference Reference ):\n  singleton from (\n\t[Location] Locations\n\twhere Locations.id = GetId(reference.reference)\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 28
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "MATGlobalCommonFunctionsFHIR4"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetId"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "/*Returns the tail of the given uri (i.e. everything after the last slash in the URI).*/\ndefine function \"GetId\"(uri String ):\n  Last(Split(uri, '/'))"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 29
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToConcept"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToConcept(concept FHIR.CodeableConcept):\n    if concept is null then\n        null\n    else\n        System.Concept {\n            codes: concept.coding C return ToCode(C),\n            display: concept.text.value\n        }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 30
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterResource(encounter Encounter, profileURLs List<FHIR.canonical>):\n  encounter e\n  return Encounter{\n    id: FHIR.id{value: 'LCR-' + e.id},\n    meta: MetaElement(e, profileURLs),\n    extension: e.extension,\n    identifier: EncounterIdentifier(e.identifier),\n    status: e.status,\n    statusHistory: EncounterStatusHistory(e.statusHistory),\n    class: e.class,\n    classHistory: EncounterClassHistory(e.classHistory),\n    type: e.type,\n    serviceType: e.serviceType,\n    priority: e.priority,\n    subject: e.subject,\n    participant: EncounterParticipant(e.participant),\n    period: e.period,\n    length: e.length,\n    reasonCode: e.reasonCode,\n    reasonReference: e.reasonReference,\n    diagnosis: EncounterDiagnosis(e.diagnosis),\n    account: e.account,\n    hospitalization: EncounterHospitalization(e.hospitalization),\n    location: EncounterLocation(e.location),\n    partOf: e.partOf\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 31
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MetaElement"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function \"MetaElement\"(resource Resource, profileURLs List<FHIR.canonical>):\n  resource r\n  return FHIR.Meta{\n    extension: r.meta.extension,\n    versionId: r.meta.versionId,\n    lastUpdated: r.meta.lastUpdated,\n    profile: profileURLs,\n    security: r.meta.security,\n    tag: r.meta.tag\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 32
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterIdentifier"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterIdentifier(identifier List<FHIR.Identifier>):\n  identifier i\n  return FHIR.Identifier{\n    use: i.use,\n    type: i.type,\n    system: i.system,\n    value: i.value,\n    period: i.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 33
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterStatusHistory"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterStatusHistory(statusHistory List<FHIR.Encounter.StatusHistory>):\n  statusHistory sH\n  return FHIR.Encounter.StatusHistory{\n    status: sH.status,\n    period: sH.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 34
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterClassHistory"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterClassHistory(classHistory List<FHIR.Encounter.ClassHistory>):\n  classHistory cH\n  return FHIR.Encounter.ClassHistory{\n    class: cH.class,\n    period: cH.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 35
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterParticipant"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterParticipant(participant List<FHIR.Encounter.Participant>):\n  participant p\n  return FHIR.Encounter.Participant{\n    type: p.type,\n    period: p.period,\n    individual: p.individual\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 36
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterDiagnosis"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterDiagnosis(diagnosis List<FHIR.Encounter.Diagnosis>):\n  diagnosis d\n  return FHIR.Encounter.Diagnosis{\n    condition: d.condition,\n    use: d.use,\n    rank: d.rank\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 37
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterHospitalization"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterHospitalization(hospitalization FHIR.Encounter.Hospitalization):\n  hospitalization h\n  return FHIR.Encounter.Hospitalization{\n    preAdmissionIdentifier: h.preAdmissionIdentifier,\n    origin: h.origin,\n    admitSource: h.admitSource,\n    reAdmission: h.reAdmission,\n    dietPreference: h.dietPreference,\n    specialCourtesy: h.specialCourtesy,\n    specialArrangement: h.specialArrangement,\n    destination: h.destination,\n    dischargeDisposition: h.dischargeDisposition\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 38
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterLocation"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function EncounterLocation(location List<FHIR.Encounter.Location>):\n  location l\n  return FHIR.Encounter.Location{\n    location: l.location,\n    status: l.status,\n    physicalType: l.physicalType,\n    period: l.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 39
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToDateTime"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToDateTime(value dateTime): value.value"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 40
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationRequestResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationRequestResource(medicationRequest MedicationRequest, profileURLs List<FHIR.canonical>):\n  medicationRequest m\n  return MedicationRequest{\n    id: FHIR.id {value: 'LCR-' + m.id},\n    meta: MetaElement(medicationRequest, profileURLs),\n    extension: m.extension,\n    status: m.status,\n    statusReason: m.statusReason,\n    intent: m.intent,\n    category: m.category,\n    priority: m.priority,\n    doNotPerform: m.doNotPerform,\n    reported: m.reported,\n    medication: m.medication,\n    subject: m.subject,\n    encounter: m.encounter,\n    authoredOn: m.authoredOn,\n    requester: m.requester,\n    recorder: m.recorder,\n    reasonCode: m.reasonCode,\n    reasonReference: m.reasonReference,\n    instantiatesCanonical: m.instantiatesCanonical,\n    instantiatesUri: m.instantiatesUri,\n    courseOfTherapyType: m.courseOfTherapyType,\n    dosageInstruction: MedicationRequestDosageInstruction(m.dosageInstruction)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 41
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationRequestDosageInstruction"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationRequestDosageInstruction(dosageInstruction List<FHIR.Dosage>):\n  dosageInstruction dI\n  return FHIR.Dosage{\n    text: dI.text,\n    patientInstruction: dI.patientInstruction,\n    timing: dI.timing,\n    asNeeded: dI.asNeeded,\n    site: dI.site,\n    route: dI.route,\n    method: dI.method,\n    doseAndRate: MedicationRequestDoseAndRate(dI.doseAndRate)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 42
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationRequestDoseAndRate"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationRequestDoseAndRate(doseAndRate List<FHIR.Dosage.DoseAndRate>):\n  doseAndRate dR\n  return FHIR.Dosage.DoseAndRate{\n    type: dR.type,\n    dose: dR.dose,\n    rate: dR.rate\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 43
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "CoverageResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function CoverageResource(coverage Coverage, profileURLs List<FHIR.canonical>):\n  coverage c\n  return Coverage{\n    id: FHIR.id{value: 'LCR-' + c.id},\n    meta: MetaElement(c, profileURLs),\n    extension: c.extension,\n    status: c.status,\n    type: c.type,\n    policyHolder: c.policyHolder,\n    subscriber: c.subscriber,\n    subscriberId: c.subscriberId,\n    beneficiary: c.beneficiary,\n    dependent: c.dependent,\n    relationship: c.relationship,\n    period: c.period,\n    payor: c.payor,\n    class: CoverageClass(c.class),\n    order: c.order,\n    network: c.network,\n    subrogation: c.subrogation,\n    contract: c.contract\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 44
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "CoverageClass"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function CoverageClass(class List<FHIR.Coverage.Class>):\n  class c\n  return FHIR.Coverage.Class{\n    value: c.value,\n    name: c.name\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 45
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ProcedureResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ProcedureResource(procedure Procedure, profileURLs List<FHIR.canonical>):\n  procedure p\n  return Procedure{\n    id: FHIR.id {value: 'LCR-' + p.id},\n    meta: MetaElement(p, profileURLs),\n    extension: p.extension,\n    instantiatesCanonical: p.instantiatesCanonical,\n    instantiatesUri: p.instantiatesUri,\n    basedOn: p.basedOn,\n    partOf: p.partOf,\n    status: p.status,\n    statusReason: p.statusReason,\n    category: p.category,\n    code: p.code,\n    subject: p.subject,\n    encounter: p.encounter,\n    performed: p.performed,\n    recorder: p.recorder,\n    asserter: p.asserter,\n    performer: ProcedurePerformer(p.performer),\n    location: p.location,\n    reasonCode: p.reasonCode,\n    reasonReference: p.reasonReference,\n    bodySite: p.bodySite,\n    outcome: p.outcome,\n    report: p.report,\n    complication: p.complication,\n    complicationDetail: p.complicationDetail,\n    followUp: p.followUp,\n    note: p.note,\n    focalDevice: ProcedureFocalDevice(p.focalDevice),\n    usedReference: p.usedReference,\n    usedCode: p.usedCode\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 46
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ProcedurePerformer"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ProcedurePerformer(performer List<FHIR.Procedure.Performer>):\n  performer p\n  return FHIR.Procedure.Performer{\n    function: p.function,\n    actor: p.actor,\n    onBehalfOf: p.onBehalfOf\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 47
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ProcedureFocalDevice"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ProcedureFocalDevice(device List<FHIR.Procedure.FocalDevice>):\n  device d\n  return FHIR.Procedure.FocalDevice{\n    action: d.action,\n    manipulated: d.manipulated\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 48
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DeviceResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DeviceResource(device Device, profileURLs List<FHIR.canonical>):\n  device d\n  return Device{\n    id: FHIR.id{value: 'LCR-' + d.id},\n    meta: SharedResource.MetaElement(d, profileURLs),\n    extension: d.extension,\n    definition: d.definition,\n    udiCarrier: DeviceUdiCarrier(d.udiCarrier),\n    status: d.status,\n    statusReason: d.statusReason,\n    distinctIdentifier: d.distinctIdentifier,\n    manufacturer: d.manufacturer,\n    manufactureDate: d.manufactureDate,\n    expirationDate: d.expirationDate,\n    lotNumber: d.lotNumber,\n    serialNumber: d.serialNumber,\n    deviceName: DeviceDeviceName(d.deviceName),\n    modelNumber: d.modelNumber,\n    partNumber: d.partNumber,\n    type: d.type,\n    specialization: DeviceSpecialization(d.specialization),\n    version: DeviceVersion(d.version),\n    property: DeviceProperty(d.property),\n    patient: d.patient,\n    owner: d.owner,\n    contact: d.contact,\n    location: d.location,\n    url: d.url,\n    note: d.note,\n    safety: d.safety,\n    parent: d.parent\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 49
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DeviceUdiCarrier"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//\n//Measure Specific Resource Creation Functions\n//\ndefine function DeviceUdiCarrier(udiCarrier List<FHIR.Device.UdiCarrier>):\n  udiCarrier u\n  return FHIR.Device.UdiCarrier{\n    deviceIdentifier: u.deviceIdentifier,\n    issuer: u.issuer,\n    jurisdiction: u.jurisdiction,\n    carrierAIDC: u.carrierAIDC,\n    carrierHRF: u.carrierHRF,\n    entryType: u.entryType\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 50
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DeviceDeviceName"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DeviceDeviceName(deviceName List<FHIR.Device.DeviceName>):\n  deviceName d\n  return FHIR.Device.DeviceName{\n    name: d.name,\n    type: d.type\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 51
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DeviceSpecialization"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DeviceSpecialization(specialization List<FHIR.Device.Specialization>):\n  specialization s\n  return FHIR.Device.Specialization{\n    systemType: s.systemType,\n    version: s.version\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 52
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DeviceVersion"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DeviceVersion(version List<FHIR.Device.Version>):\n  version v\n  return FHIR.Device.Version{\n    type: v.type,\n    component: v.component,\n    value: v.value\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 53
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DeviceProperty"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DeviceProperty(deviceProperty List<FHIR.Device.Property>):\n  deviceProperty d\n  return FHIR.Device.Property{\n    id: d.id,\n    type: d.type,\n    valueQuantity: d.valueQuantity,\n    valueCode: d.valueCode\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 54
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationLabResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationLabResource(observation Observation, profileURLs List<FHIR.canonical>):\n  observation o\n  return Observation{\n    id: FHIR.id {value: 'LCR-' + o.id},\n    meta: MetaElement(o, profileURLs),\n    extension: o.extension,\n    basedOn: o.basedOn,\n    partOf: o.partOf,\n    status: o.status,\n    category: ObservationLabCategory(o.category),\n    code: o.code,\n    subject: o.subject,\n    focus: o.focus,\n    encounter: o.encounter,\n    effective: o.effective,\n    issued: o.issued,\n    performer: o.performer,\n    value: o.value,\n    dataAbsentReason: o.dataAbsentReason,\n    interpretation: o.interpretation,\n    note: o.note,\n    bodySite: o.bodySite,\n    method: o.method,\n    specimen: o.specimen,\n    device: o.device,\n    referenceRange: ObservationReferenceRange(o.referenceRange),\n    hasMember: o.hasMember,\n    derivedFrom: o.derivedFrom,\n    component: ObservationComponent(o.component)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 55
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationLabCategory"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationLabCategory(category List<CodeableConcept>):\n  category c\n  return CodeableConcept{\n    coding: ObservationLabCoding(c.coding),\n    text: c.text\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 56
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationLabCoding"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationLabCoding(coding List<Coding>):\n  coding c\n  return Coding{\n    id: c.id,\n    extension: c.extension,\n    system: c.system,\n    version: c.version,\n    code: c.code,\n    display: c.display,\n    userSelected: c.userSelected\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 57
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationReferenceRange"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationReferenceRange(referenceRange List<FHIR.Observation.ReferenceRange>):\n  referenceRange rR\n  return FHIR.Observation.ReferenceRange{\n    low: rR.low,\n    high: rR.high,\n    type: rR.type,\n    appliesTo: rR.appliesTo,\n    age: rR.age,\n    text: rR.text\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 58
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationComponent"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationComponent(component List<FHIR.Observation.Component>):\n  component c\n  return FHIR.Observation.Component{\n    code: c.code,\n    value: c.value,\n    dataAbsentReason: c.dataAbsentReason,\n    interpretation: c.interpretation,\n    referenceRange: c.referenceRange\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 59
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationVitalSignsResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationVitalSignsResource(observation Observation, profileURLs List<FHIR.canonical>):\n  observation o\n  return Observation{\n    id: FHIR.id {value: 'LCR-' + o.id},\n    meta: SharedResource.MetaElement(o, profileURLs),\n    extension: o.extension,\n    partOf: o.partOf,\n    status: o.status,\n    category: ObservationVitalSignsCategory(o.category),\n    code: o.code,\n    subject: o.subject,\n    focus: o.focus,\n    encounter: o.encounter,\n    effective: o.effective,\n    issued: o.issued,\n    performer: o.performer,\n    value: o.value,\n    dataAbsentReason: o.dataAbsentReason,\n    interpretation: o.interpretation,\n    note: o.note,\n    bodySite: o.bodySite,\n    method: o.method,\n    specimen: o.specimen,\n    device: o.device,\n    referenceRange: SharedResource.ObservationReferenceRange(o.referenceRange),\n    hasMember: o.hasMember,\n    derivedFrom: o.derivedFrom,\n    component: ObservationVitalSignsComponent(o.component)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 60
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationVitalSignsCategory"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationVitalSignsCategory(category List<CodeableConcept>):\n  category c\n  return CodeableConcept{\n    coding: ObservationVitalSignsCoding(c.coding),\n    text: c.text\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 61
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationVitalSignsCoding"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationVitalSignsCoding(coding List<Coding>):\n  coding c\n  return Coding{\n    system: c.system,\n    version: c.version,\n    code: c.code,\n    display: c.display,\n    userSelected: c.userSelected\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 62
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationVitalSignsComponent"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationVitalSignsComponent(component List<FHIR.Observation.Component>):\n  component c\n  return FHIR.Observation.Component{\n    code: c.code,\n    value: c.value,\n    dataAbsentReason: c.dataAbsentReason,\n    interpretation: c.interpretation,\n    referenceRange: SharedResource.ObservationReferenceRange(c.referenceRange)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 63
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DiagnosticReportResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DiagnosticReportResource(diagnosticReport DiagnosticReport, profileURLs List<FHIR.canonical>):\n  diagnosticReport d\n  return DiagnosticReport{\n    id: FHIR.id{value: 'LCR-' + d.id},\n    meta: SharedResource.MetaElement(d, profileURLs),\n    extension: d.extension,\n    basedOn: d.basedOn,\n    status: d.status,\n    category: d.category,\n    code: d.code,\n    subject: d.subject,\n    encounter: d.encounter,\n    effective: d.effective,\n    issued: d.issued,\n    performer: d.performer,\n    resultsInterpreter: d.resultsInterpreter,\n    specimen: d.specimen,\n    result: d.result,\n    conclusion: d.conclusion,\n    conclusionCode: d.conclusionCode\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 64
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationAdministrationResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationAdministrationResource(medicationAdministration MedicationAdministration, profileURLs List<FHIR.canonical>):\n  medicationAdministration m\n  return MedicationAdministration{\n    id: FHIR.id {value: 'LCR-' + m.id},\n    meta: MetaElement(m, profileURLs),\n    extension: m.extension,\n    instantiates: m.instantiates,\n    partOf: m.partOf,\n    status: m.status,\n    statusReason: m.statusReason,\n    category: m.category,\n    medication: m.medication,\n    subject: m.subject,\n    context: m.context,\n    supportingInformation: m.supportingInformation,\n    effective: m.effective,\n    performer: MedicationAdministrationPerformer(m.performer),\n    reasonCode: m.reasonCode,\n    reasonReference: m.reasonReference,\n    request: m.request,\n    device: m.device,\n    note: m.note,\n    dosage: MedicationAdministrationDosage(m.dosage),\n    eventHistory: m.eventHistory\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 65
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationAdministrationPerformer"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationAdministrationPerformer(performer List<FHIR.MedicationAdministration.Performer>):\n  performer p\n  return FHIR.MedicationAdministration.Performer{\n    function: p.function,\n    actor: p.actor\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 66
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationAdministrationDosage"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationAdministrationDosage(dosage FHIR.MedicationAdministration.Dosage):\n  dosage d\n  return FHIR.MedicationAdministration.Dosage{\n    text: d.text,\n    site: d.site,\n    route: d.route,\n    method: d.method,\n    dose: d.dose,\n    rate: d.rate\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 67
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ObservationResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ObservationResource(observation Observation, profileURLs List<FHIR.canonical>):\n  observation o\n  return Observation{\n    id: FHIR.id {value: 'LCR-' + o.id},\n    meta: SharedResource.MetaElement(o, profileURLs),\n    extension: o.extension,\n    partOf: o.partOf,\n    status: o.status,\n    category: o.category,\n    code: o.code,\n    subject: o.subject,\n    focus: o.focus,\n    encounter: o.encounter,\n    effective: o.effective,\n    issued: o.issued,\n    performer: o.performer,\n    value: o.value,\n    dataAbsentReason: o.dataAbsentReason,\n    interpretation: o.interpretation,\n    note: o.note,\n    bodySite: o.bodySite,\n    method: o.method,\n    specimen: o.specimen,\n    device: o.device,\n    referenceRange: SharedResource.ObservationReferenceRange(o.referenceRange),\n    hasMember: o.hasMember,\n    derivedFrom: o.derivedFrom,\n    component: SharedResource.ObservationComponent(o.component)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 68
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ConditionResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ConditionResource(condition Condition, profileURLs List<FHIR.canonical>):\n  condition c\n  return Condition{\n    id: FHIR.id {value: 'LCR-' + c.id},\n    meta: MetaElement(c, profileURLs),\n    extension: c.extension,\n    clinicalStatus: c.clinicalStatus,\n    verificationStatus: c.verificationStatus,\n    category: c.category,\n    severity: c.severity,\n    code: c.code,\n    bodySite: c.bodySite,\n    subject: c.subject,\n    encounter: c.encounter,\n    onset: c.onset,\n    abatement: c.abatement,\n    recordedDate: c.recordedDate,\n    stage: ConditionStage(c.stage),\n    evidence: ConditionEvidence(c.evidence),\n    note: c.note\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 69
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ConditionStage"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ConditionStage(stage List<FHIR.Condition.Stage>):\n  stage s\n  return FHIR.Condition.Stage{\n    summary: s.summary,\n    assessment: s.assessment,\n    type: s.type\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 70
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ConditionEvidence"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ConditionEvidence(evidence List<FHIR.Condition.Evidence>):\n  evidence e\n  return FHIR.Condition.Evidence{\n    code: e.code,\n    detail: e.detail\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 71
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DiagnosticReportLabResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DiagnosticReportLabResource(diagnosticReport DiagnosticReport, profileURLs List<FHIR.canonical>):\n  diagnosticReport d\n  return DiagnosticReport{\n    id: FHIR.id{value: 'LCR-' + d.id},\n    meta: MetaElement(d, profileURLs),\n    extension: d.extension,\n    basedOn: d.basedOn,\n    status: d.status,\n    category: DiagnosticReportCategory(d.category),\n    code: d.code,\n    subject: d.subject,\n    encounter: d.encounter,\n    effective: d.effective,\n    issued: d.issued,\n    performer: d.performer,\n    resultsInterpreter: d.resultsInterpreter,\n    specimen: d.specimen,\n    result: d.result,\n    conclusion: d.conclusion,\n    conclusionCode: d.conclusionCode\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 72
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DiagnosticReportCategory"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DiagnosticReportCategory(category List<CodeableConcept>):\n  category c\n  return CodeableConcept{\n    coding: DiagnosticReportCoding(c.coding)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 73
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "DiagnosticReportCoding"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function DiagnosticReportCoding(coding List<Coding>):\n  coding c\n  return Coding{\n    system: c.system,\n    version: c.version,\n    code: c.code,\n    display: c.display,\n    userSelected: c.userSelected\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 74
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function LocationResource(location Location, profileURLs List<FHIR.canonical>):\n  location l\n  return Location{\n    id: FHIR.id {value: 'LCR-' + l.id},\n    meta: MetaElement(l, profileURLs),\n    extension: l.extension,\n    status: l.status,\n    operationalStatus: l.operationalStatus,\n    name: l.name,\n    alias: l.alias,\n    description: l.description,\n    mode: l.mode,\n    type: l.type,\n    telecom: l.telecom,\n    address: LocationAddress(l.address),\n    physicalType: l.physicalType,\n    position: LocationPosition(l.position),\n    managingOrganization: l.managingOrganization,\n    partOf: l.partOf,\n    hoursOfOperation: LocationHoursOfOperation(l.hoursOfOperation),\n    availabilityExceptions: l.availabilityExceptions,\n    endpoint: l.endpoint\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 75
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationAddress"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function LocationAddress(address FHIR.Address):\n  address a\n  return FHIR.Address{\n    use: a.use,\n    type: a.type,\n    text: a.text,\n    line: a.line,\n    city: a.city,\n    district: a.district,\n    state: a.state,\n    postalCode: a.postalCode,\n    country: a.country,\n    period: a.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 76
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationPosition"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function LocationPosition(position FHIR.Location.Position):\n  position p\n  return FHIR.Location.Position{\n    longitude: p.longitude,\n    latitude: p.latitude,\n    altitude: p.altitude\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 77
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationHoursOfOperation"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function LocationHoursOfOperation(hoursOfOperation List<FHIR.Location.HoursOfOperation>):\n  hoursOfOperation hOO\n  return FHIR.Location.HoursOfOperation{\n    daysOfWeek: hOO.daysOfWeek,\n    allDay: hOO.allDay,\n    openingTime: hOO.openingTime,\n    closingTime: hOO.closingTime\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 78
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ServiceRequestResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ServiceRequestResource(serviceRequest ServiceRequest, profileURLs List<FHIR.canonical>):\n  serviceRequest sR\n  return ServiceRequest{\n    id: FHIR.id {value: 'LCR-' + sR.id},\n    meta: MetaElement(sR, profileURLs),\n    extension: sR.extension,\n    instantiatesCanonical: sR.instantiatesCanonical,\n    instantiatesUri: sR.instantiatesUri,\n    basedOn: sR.basedOn,\n    replaces: sR.replaces,\n    requisition: sR.requisition,\n    status: sR.status,\n    intent: sR.intent,\n    category: sR.category,\n    priority: sR.priority,\n    doNotPerform: sR.doNotPerform,\n    code: sR.code,\n    orderDetail: sR.orderDetail,\n    quantity: sR.quantity,\n    subject: sR.subject,\n    encounter: sR.encounter,\n    occurrence: sR.occurrence,\n    asNeeded: sR.asNeeded,\n    authoredOn: sR.authoredOn,\n    requester: sR.requester,\n    performerType: sR.performerType,\n    performer: sR.performer,\n    locationCode: sR.locationCode,\n    locationReference: sR.locationReference,\n    reasonCode: sR.reasonCode,\n    reasonReference: sR.reasonReference,\n    insurance: sR.insurance,\n    supportingInfo: sR.supportingInfo,\n    specimen: sR.specimen,\n    bodySite: sR.bodySite,\n    note: sR.note,\n    patientInstruction: sR.patientInstruction,\n    relevantHistory: sR.relevantHistory\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 79
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientResource(patient Patient, profileURLs List<FHIR.canonical>):\n  patient p\n  return Patient{\n    id: FHIR.id{value: 'LCR-' + p.id},\n    meta: MetaElement(p, profileURLs),\n    extension: GetPatientExtensions(p) union GetIdExtensions(p),\n    identifier: PatientIdentifier(p.identifier),\n    active: p.active,\n    name: PatientName(p.name),\n    telecom: PatientTelecom(p.telecom),\n    gender: p.gender,\n    birthDate: p.birthDate,\n    deceased: p.deceased,\n    address: PatientAddress(p.address),\n    maritalStatus: p.maritalStatus,\n    multipleBirth: p.multipleBirth,\n    photo: p.photo,\n    contact: PatientContact(p.contact),\n    communication: PatientCommunication(p.communication),\n    generalPractitioner: p.generalPractitioner,\n    managingOrganization: p.managingOrganization,\n    link: PatientLink(p.link)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 80
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetPatientExtensions"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function \"GetPatientExtensions\"(domainResource DomainResource):\n  domainResource.extension E\n  where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'\n    or E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'\n    or E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'\n    or E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity'\n    or E.url = 'http://hl7.org/fhir/StructureDefinition/patient-genderIdentity'\n return E"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 81
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetIdExtensions"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function \"GetIdExtensions\"(domainResource DomainResource):\n  domainResource.extension E\n    return E"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 82
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientIdentifier"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientIdentifier(identifier List<FHIR.Identifier>):\n  identifier i\n  return FHIR.Identifier{\n    id: i.id,\n    extension: i.extension,\n    use: i.use,\n    type: i.type,\n    system: i.system,\n    value: i.value,\n    period: i.period,\n    assigner: i.assigner\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 83
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientName"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientName(name List<FHIR.HumanName>):\n  name n\n  return FHIR.HumanName{\n    id: n.id,\n    extension: n.extension,\n    use: n.use,\n    text: n.text,\n    family: n.family,\n    given: n.given,\n    prefix: n.prefix,\n    suffix: n.suffix,\n    period: n.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 84
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientTelecom"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientTelecom(telecom List<FHIR.ContactPoint>):\n  telecom t\n  return FHIR.ContactPoint{\n    system: t.system,\n    value: t.value,\n    use: t.use,\n    rank: t.rank,\n    period: t.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 85
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientAddress"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientAddress(address List<FHIR.Address>):\n  address a\n  return FHIR.Address{\n    id: a.id,\n    extension: a.extension,\n    use: a.use,\n    type: a.type,\n    text: a.text,\n    line: a.line,\n    city: a.city,\n    district: a.district,\n    state: a.state,\n    postalCode: a.postalCode,\n    country: a.country,\n    period: a.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 86
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientContact"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientContact(contact List<FHIR.Patient.Contact>):\n  contact c\n  return FHIR.Patient.Contact{\n    id: c.id,\n    extension: c.extension,\n    relationship: c.relationship,\n    name: c.name,\n    telecom: c.telecom,\n    address: c.address,\n    gender: c.gender,\n    organization: c.organization,\n    period: c.period\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 87
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientCommunication"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientCommunication(communication List<FHIR.Patient.Communication>):\n  communication c\n  return FHIR.Patient.Communication{\n    id: c.id,\n    extension: c.extension,\n    language: c.language,\n    preferred: c.preferred\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 88
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "PatientLink"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function PatientLink(link List<FHIR.Patient.Link>):\n  link l\n  return FHIR.Patient.Link{\n    id: l.id,\n    extension: l.extension,\n    modifierExtension: l.modifierExtension,\n    other: l.other,\n    type: l.type\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 89
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationResource(medication Medication, profileURLs List<FHIR.canonical>):\n  medication m\n  return Medication{\n    id: FHIR.id {value: 'LCR-' + m.id},\n    meta: MetaElement(m, profileURLs),\n    extension: m.extension,\n    code: m.code,\n    status: m.status,\n    manufacturer: m.manufacturer,\n    form: m.form,\n    amount: m.amount,\n    ingredient: MedicationIngredient(m.ingredient),\n    batch: MedicationBatch(m.batch)\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 90
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationIngredient"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationIngredient(ingredient List<FHIR.Medication.Ingredient>):\n  ingredient i\n  return FHIR.Medication.Ingredient{\n    item: i.item,\n    strength: i.strength\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 91
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "MedicationBatch"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function MedicationBatch(batch FHIR.Medication.Batch):\n  batch b\n  return FHIR.Medication.Batch{\n    lotNumber: b.lotNumber,\n    expirationDate: b.expirationDate\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 92
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetMedicationFrom"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "//\n//Functions\n//\ndefine function \"GetMedicationFrom\"(choice Choice<FHIR.CodeableConcept, FHIR.Reference>):\n  case\n    when choice is FHIR.Reference then\n      GetMedication(choice as FHIR.Reference)\n    else\n      null\n  end"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 93
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "NHSNdQMAcuteCareHospitalInitialPopulation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetMedication"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function \"GetMedication\"(reference Reference ):\n  singleton from (\n    [Medication] Medications\n    where Medications.id = Global.GetId(reference.reference)\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 94
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SpecimenResource"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function SpecimenResource(specimen Specimen, profileURLs List<FHIR.canonical>):\n  specimen s\n  return Specimen{\n    id: FHIR.id {value: 'LCR-' + s.id},\n    meta: MetaElement(s, profileURLs),\n    extension: s.extension,\n    identifier: s.identifier,\n    accessionIdentifier: s.accessionIdentifier,\n    status: s.status,\n    type: s.type,\n    subject: s.subject,\n    receivedTime: s.receivedTime,\n    parent: s.parent,\n    request: s.request,\n    collection: SpecimenCollection(s.collection),\n    processing: SpecimenProcessing(s.processing),\n    container: SpecimenContainer(s.container),\n    condition: s.condition,\n    note: s.note\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 95
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SpecimenCollection"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function SpecimenCollection(collection FHIR.Specimen.Collection):\n  collection c\n  return FHIR.Specimen.Collection{\n    collector: c.collector,\n    collected: c.collected,\n    //duration: c.duration, Does not parse for some reason? Need to bring up with SmileCDR\n    quantity: c.quantity,\n    method: c.method,\n    bodySite: c.bodySite,\n    fastingStatus: c.fastingStatus\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 96
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SpecimenProcessing"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function SpecimenProcessing(processing List<FHIR.Specimen.Processing>):\n  processing p\n  return FHIR.Specimen.Processing{\n    description: p.description,\n    procedure: p.procedure,\n    additive: p.additive,\n    time: p.time\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 97
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "SharedResourceCreation"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "SpecimenContainer"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function SpecimenContainer(container List<FHIR.Specimen.Container>):\n  container c\n  return FHIR.Specimen.Container{\n    description: c.description,\n    type: c.type,\n    capacity: c.capacity,\n    specimenQuantity: c.specimenQuantity,\n    additive: c.additive\n  }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 98
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* name = "EffectiveDataRequirements"
* status = #active
* type = $library-type#module-definition
* relatedArtifact[0].type = #depends-on
* relatedArtifact[=].display = "Library FHIRHelpers"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIRHelpers|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library Global"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Library/MATGlobalCommonFunctions"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system ActCode"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/v3-ActCode"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system Observation Category"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/observation-category"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system LOINC"
* relatedArtifact[=].resource = "http://loinc.org"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system V2-0074"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/v2-0074"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Encounter Inpatient"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Emergency Department Visit"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Observation Services"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Inpatient, Emergency, and Observation Locations"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.265"
* parameter[0].name = #"Measurement Period"
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Period
* parameter[+].name = #"SDE Encounter"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"SDE Medication Request"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #MedicationRequest
* parameter[+].name = #"SDE Coverage"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Coverage
* parameter[+].name = #"SDE Procedure"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Procedure
* parameter[+].name = #"SDE Device"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Device
* parameter[+].name = #"SDE Observation Lab Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Observation Vital Signs Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE DiagnosticReport Others"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE Medication Administration"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #MedicationAdministration
* parameter[+].name = #"SDE Observation Category"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"SDE Condition"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Condition
* parameter[+].name = #"Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"SDE DiagnosticReport Lab"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE Location"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Location
* parameter[+].name = #"SDE Service Request"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #ServiceRequest
* parameter[+].name = #"SDE DiagnosticReport Note"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #DiagnosticReport
* parameter[+].name = #"SDE Minimal Patient"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Patient
* parameter[+].name = #"SDE Medication"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Medication
* parameter[+].name = #"SDE Specimen"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Specimen
* dataRequirement[0].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "participant"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "participant"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "participant"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.143"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "class"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "participant"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].codeFilter.path = "class"
* dataRequirement[=].codeFilter.code[0] = $v3-ActCode#EMER "emergency"
* dataRequirement[=].codeFilter.code[+] = $v3-ActCode#ACUTE "inpatient acute"
* dataRequirement[=].codeFilter.code[+] = $v3-ActCode#IMP "inpatient encounter"
* dataRequirement[=].codeFilter.code[+] = $v3-ActCode#NONAC "inpatient non-acute"
* dataRequirement[=].codeFilter.code[+] = $v3-ActCode#SS "short stay"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "status"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "statusHistory"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "classHistory"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "serviceType"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "participant"
* dataRequirement[=].mustSupport[+] = "length"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "diagnosis"
* dataRequirement[=].mustSupport[+] = "account"
* dataRequirement[=].mustSupport[+] = "hospitalization"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "operationalStatus"
* dataRequirement[=].mustSupport[+] = "name"
* dataRequirement[=].mustSupport[+] = "alias"
* dataRequirement[=].mustSupport[+] = "description"
* dataRequirement[=].mustSupport[+] = "mode"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "telecom"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "physicalType"
* dataRequirement[=].mustSupport[+] = "position"
* dataRequirement[=].mustSupport[+] = "managingOrganization"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "hoursOfOperation"
* dataRequirement[=].mustSupport[+] = "availabilityExceptions"
* dataRequirement[=].mustSupport[+] = "endpoint"
* dataRequirement[+].type = #MedicationRequest
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicationRequest"
* dataRequirement[=].mustSupport[0] = "authoredOn"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "intent"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "doNotPerform"
* dataRequirement[=].mustSupport[+] = "reported"
* dataRequirement[=].mustSupport[+] = "medication"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "requester"
* dataRequirement[=].mustSupport[+] = "recorder"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "courseOfTherapyType"
* dataRequirement[=].mustSupport[+] = "dosageInstruction"
* dataRequirement[+].type = #Coverage
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Coverage"
* dataRequirement[=].mustSupport[0] = "period"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "policyHolder"
* dataRequirement[=].mustSupport[+] = "subscriber"
* dataRequirement[=].mustSupport[+] = "subscriberId"
* dataRequirement[=].mustSupport[+] = "beneficiary"
* dataRequirement[=].mustSupport[+] = "dependent"
* dataRequirement[=].mustSupport[+] = "relationship"
* dataRequirement[=].mustSupport[+] = "payor"
* dataRequirement[=].mustSupport[+] = "class"
* dataRequirement[=].mustSupport[+] = "order"
* dataRequirement[=].mustSupport[+] = "network"
* dataRequirement[=].mustSupport[+] = "subrogation"
* dataRequirement[=].mustSupport[+] = "contract"
* dataRequirement[+].type = #Procedure
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Procedure"
* dataRequirement[=].mustSupport[0] = "performed"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "recorder"
* dataRequirement[=].mustSupport[+] = "asserter"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "outcome"
* dataRequirement[=].mustSupport[+] = "report"
* dataRequirement[=].mustSupport[+] = "complication"
* dataRequirement[=].mustSupport[+] = "complicationDetail"
* dataRequirement[=].mustSupport[+] = "followUp"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "focalDevice"
* dataRequirement[=].mustSupport[+] = "usedReference"
* dataRequirement[=].mustSupport[+] = "usedCode"
* dataRequirement[+].type = #Device
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Device"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "definition"
* dataRequirement[=].mustSupport[+] = "udiCarrier"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "distinctIdentifier"
* dataRequirement[=].mustSupport[+] = "manufacturer"
* dataRequirement[=].mustSupport[+] = "manufactureDate"
* dataRequirement[=].mustSupport[+] = "expirationDate"
* dataRequirement[=].mustSupport[+] = "lotNumber"
* dataRequirement[=].mustSupport[+] = "serialNumber"
* dataRequirement[=].mustSupport[+] = "deviceName"
* dataRequirement[=].mustSupport[+] = "modelNumber"
* dataRequirement[=].mustSupport[+] = "partNumber"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "specialization"
* dataRequirement[=].mustSupport[+] = "version"
* dataRequirement[=].mustSupport[+] = "property"
* dataRequirement[=].mustSupport[+] = "patient"
* dataRequirement[=].mustSupport[+] = "owner"
* dataRequirement[=].mustSupport[+] = "contact"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "url"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "safety"
* dataRequirement[=].mustSupport[+] = "parent"
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "focus"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "effective"
* dataRequirement[=].mustSupport[+] = "issued"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "value"
* dataRequirement[=].mustSupport[+] = "dataAbsentReason"
* dataRequirement[=].mustSupport[+] = "interpretation"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "method"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "device"
* dataRequirement[=].mustSupport[+] = "referenceRange"
* dataRequirement[=].mustSupport[+] = "hasMember"
* dataRequirement[=].mustSupport[+] = "derivedFrom"
* dataRequirement[=].mustSupport[+] = "component"
* dataRequirement[+].type = #DiagnosticReport
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/DiagnosticReport"
* dataRequirement[=].mustSupport[0] = "category"
* dataRequirement[=].mustSupport[+] = "effective"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "issued"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "resultsInterpreter"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "result"
* dataRequirement[=].mustSupport[+] = "conclusion"
* dataRequirement[=].mustSupport[+] = "conclusionCode"
* dataRequirement[+].type = #MedicationAdministration
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicationAdministration"
* dataRequirement[=].mustSupport[0] = "effective"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiates"
* dataRequirement[=].mustSupport[+] = "partOf"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "statusReason"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "medication"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "context"
* dataRequirement[=].mustSupport[+] = "supportingInformation"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "request"
* dataRequirement[=].mustSupport[+] = "device"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "dosage"
* dataRequirement[=].mustSupport[+] = "eventHistory"
* dataRequirement[+].type = #Condition
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Condition"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "clinicalStatus"
* dataRequirement[=].mustSupport[+] = "verificationStatus"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "severity"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "onset"
* dataRequirement[=].mustSupport[+] = "abatement"
* dataRequirement[=].mustSupport[+] = "recordedDate"
* dataRequirement[=].mustSupport[+] = "stage"
* dataRequirement[=].mustSupport[+] = "evidence"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[+].type = #ServiceRequest
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/ServiceRequest"
* dataRequirement[=].mustSupport[0] = "authoredOn"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "instantiatesCanonical"
* dataRequirement[=].mustSupport[+] = "instantiatesUri"
* dataRequirement[=].mustSupport[+] = "basedOn"
* dataRequirement[=].mustSupport[+] = "replaces"
* dataRequirement[=].mustSupport[+] = "requisition"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "intent"
* dataRequirement[=].mustSupport[+] = "category"
* dataRequirement[=].mustSupport[+] = "priority"
* dataRequirement[=].mustSupport[+] = "doNotPerform"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "orderDetail"
* dataRequirement[=].mustSupport[+] = "quantity"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "encounter"
* dataRequirement[=].mustSupport[+] = "occurrence"
* dataRequirement[=].mustSupport[+] = "asNeeded"
* dataRequirement[=].mustSupport[+] = "requester"
* dataRequirement[=].mustSupport[+] = "performerType"
* dataRequirement[=].mustSupport[+] = "performer"
* dataRequirement[=].mustSupport[+] = "locationCode"
* dataRequirement[=].mustSupport[+] = "locationReference"
* dataRequirement[=].mustSupport[+] = "reasonCode"
* dataRequirement[=].mustSupport[+] = "reasonReference"
* dataRequirement[=].mustSupport[+] = "insurance"
* dataRequirement[=].mustSupport[+] = "supportingInfo"
* dataRequirement[=].mustSupport[+] = "specimen"
* dataRequirement[=].mustSupport[+] = "bodySite"
* dataRequirement[=].mustSupport[+] = "note"
* dataRequirement[=].mustSupport[+] = "patientInstruction"
* dataRequirement[=].mustSupport[+] = "relevantHistory"
* dataRequirement[+].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "active"
* dataRequirement[=].mustSupport[+] = "name"
* dataRequirement[=].mustSupport[+] = "telecom"
* dataRequirement[=].mustSupport[+] = "gender"
* dataRequirement[=].mustSupport[+] = "birthDate"
* dataRequirement[=].mustSupport[+] = "deceased"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "maritalStatus"
* dataRequirement[=].mustSupport[+] = "multipleBirth"
* dataRequirement[=].mustSupport[+] = "photo"
* dataRequirement[=].mustSupport[+] = "contact"
* dataRequirement[=].mustSupport[+] = "communication"
* dataRequirement[=].mustSupport[+] = "generalPractitioner"
* dataRequirement[=].mustSupport[+] = "managingOrganization"
* dataRequirement[=].mustSupport[+] = "link"
* dataRequirement[+].type = #Medication
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Medication"
* dataRequirement[=].mustSupport[0] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "code"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "manufacturer"
* dataRequirement[=].mustSupport[+] = "form"
* dataRequirement[=].mustSupport[+] = "amount"
* dataRequirement[=].mustSupport[+] = "ingredient"
* dataRequirement[=].mustSupport[+] = "batch"
* dataRequirement[+].type = #Specimen
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Specimen"
* dataRequirement[=].mustSupport[0] = "collection"
* dataRequirement[=].mustSupport[+] = "collection.collected"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[=].mustSupport[+] = "extension"
* dataRequirement[=].mustSupport[+] = "identifier"
* dataRequirement[=].mustSupport[+] = "accessionIdentifier"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].mustSupport[+] = "subject"
* dataRequirement[=].mustSupport[+] = "receivedTime"
* dataRequirement[=].mustSupport[+] = "parent"
* dataRequirement[=].mustSupport[+] = "request"
* dataRequirement[=].mustSupport[+] = "processing"
* dataRequirement[=].mustSupport[+] = "container"
* dataRequirement[=].mustSupport[+] = "condition"
* dataRequirement[=].mustSupport[+] = "note"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Measure/Measure-BedCapacityMeasure.fsh

Alias: $measure-scoring = http://terminology.hl7.org/CodeSystem/measure-scoring
Alias: $healthcare-capacity-codes = http://hl7.org/fhir/us/nhsn-dqm/CodeSystem/healthcare-capacity-codes
Alias: $measure-population = http://terminology.hl7.org/CodeSystem/measure-population
Alias: $location-physical-type = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $library-type = http://terminology.hl7.org/CodeSystem/library-type

Instance: BedCapacityMeasure
InstanceOf: Measure
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/computable-measure-cqfm"
* contained = bed-capacity-effective-data-requirements
* extension[0].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-softwaresystem"
* extension[=].valueReference = Reference(Device/cqf-tooling)
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-populationBasis"
* extension[=].valueCode = #boolean
* extension[+].id = "bed-capacity-effective-data-requirements"
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-effectiveDataRequirements"
* extension[=].valueReference = Reference(bed-capacity-effective-data-requirements)
// * extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * extension[=].valueCode = #pher
* url = "http://hl7.org/fhir/us/nhsn-dqm/Measure/BedCapacityMeasure"
* version = "1.0.0"
* name = "BedCapacityMeasure"
* title = "NHSN dQM Bed Capacity"
* status = #draft
* experimental = true
* date = "2024-06-25T17:37:47-04:00"
* publisher = "HL7 International / Public Health"
* contact.name = "HL7 International / Public Health"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "NHSN bed capacity example measure"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* library = "http://hl7.org/fhir/us/nhsn-dqm/Library/BedCapacityMeasureLibrary"
* scoring = $measure-scoring#cohort "Cohort"
* group[0].code = $healthcare-capacity-codes#AllBedsOccupied
* group[=].population.id = "d2e4301"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "All Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AllBedsUnoccupied
* group[=].population.id = "d2e4378"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "All Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultTotalOccupied
* group[=].population.id = "d2e4455"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultTotalUnoccupied
* group[=].population.id = "d2e4533"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultICUOccupied
* group[=].population.id = "d2e4610"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult ICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultICUUnoccupied
* group[=].population.id = "d2e4687"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult ICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultICU_LOCOccupied
* group[=].population.id = "d2e4764"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult ICULOC Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultNonICUOccupied
* group[=].population.id = "d2e4918"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult NonICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultNonICUUnoccupied
* group[=].population.id = "d2e4996"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult NonICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultPCUOccupied
* group[=].population.id = "d2e5073"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult PCU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultPCUUnoccupied
* group[=].population.id = "d2e5150"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult PCU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultMTMSOccupied
* group[=].population.id = "d2e5227"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult MTMS Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultMTMSUnoccupied
* group[=].population.id = "d2e5304"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult MTMS Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultObsOccupied
* group[=].population.id = "d2e5381"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult Obs Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultObsUnoccupied
* group[=].population.id = "d2e5459"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult Obs Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsTotalOccupied
* group[=].population.id = "d2e5536"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds Total Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsTotalUnoccupied
* group[=].population.id = "d2e5613"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds Total Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsICUOccupied
* group[=].population.id = "d2e5690"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds ICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsICUUnoccupied
* group[=].population.id = "d2e5767"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds ICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsICU_LOCOccupied
* group[=].population.id = "d2e5844"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds ICULOC Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsNonICUOccupied
* group[=].population.id = "d2e5999"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds NonICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsNonICUUnoccupied
* group[=].population.id = "d2e6076"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds NonICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsPCUOccupied
* group[=].population.id = "d2e6153"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds PCU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsPCUUnoccupied
* group[=].population.id = "d2e6230"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds PCU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsMTMSOccupied
* group[=].population.id = "d2e6307"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds MTMS Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsMTMSUnoccupied
* group[=].population.id = "d2e6385"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds MTMS Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsObsOccupied
* group[=].population.id = "d2e6462"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds Obs Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsObsUnoccupied
* group[=].population.id = "d2e6539"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds Obs Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SpecialtyTotalOccupied
* group[=].population.id = "d2e6616"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Specialty Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SpecialtyTotalUnoccupied
* group[=].population.id = "d2e6693"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Specialty Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SpecialtyNonCribOccupied
* group[=].population.id = "d2e6770"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Specialty NonCrib Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SpecialtyNonCribUnoccupied
* group[=].population.id = "d2e6848"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Specialty NonCrib Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#OBOccupied
* group[=].population.id = "d2e6925"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "OB Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#OBUnoccupied
* group[=].population.id = "d2e7002"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "OB Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICUOccupied
* group[=].population.id = "d2e7079"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICUUnoccupied
* group[=].population.id = "d2e7156"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU4Occupied
* group[=].population.id = "d2e7233"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU4 Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU4Unoccupied
* group[=].population.id = "d2e7311"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU4 Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU3PlusOccupied
* group[=].population.id = "d2e7388"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU3Plus Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU3PlusUnoccupied
* group[=].population.id = "d2e7465"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU3Plus Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU3Occupied
* group[=].population.id = "d2e7542"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU3 Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU3Unoccupied
* group[=].population.id = "d2e7619"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU3 Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU2Occupied
* group[=].population.id = "d2e7696"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU2 Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU2Unoccupied
* group[=].population.id = "d2e7774"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU2 Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU1Occupied
* group[=].population.id = "d2e7851"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU1 Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NICU1Unoccupied
* group[=].population.id = "d2e7928"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "NICU1 Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NurseryOccupied
* group[=].population.id = "d2e8005"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Nursery Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NurseryUnoccupied
* group[=].population.id = "d2e8082"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Nursery Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultPsychOccupied
* group[=].population.id = "d2e8159"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult Psych Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultPsychUnoccupied
* group[=].population.id = "d2e8237"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult Psych Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsPsychOccupied
* group[=].population.id = "d2e8314"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds Psych Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsPsychUnoccupied
* group[=].population.id = "d2e8391"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds Psych Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#RehabOccupied
* group[=].population.id = "d2e8468"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Rehab Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#RehabUnoccupied
* group[=].population.id = "d2e8545"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Rehab Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeActiveTotalOccupied
* group[=].population.id = "d2e8622"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Active Total Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeActiveTotalUnoccupied
* group[=].population.id = "d2e8700"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Active Total Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeInactiveTotalOccupied
* group[=].population.id = "d2e8777"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Inactive Total Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeInactiveTotalUnoccupied
* group[=].population.id = "d2e8854"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Inactive Total Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeActiveICUOccupied
* group[=].population.id = "d2e8931"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Active ICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeActiveICUUnoccupied
* group[=].population.id = "d2e9008"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Active ICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeInactiveICUUnoccupied
* group[=].population.id = "d2e9163"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Inactive ICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeActiveNonICUOccupied
* group[=].population.id = "d2e9240"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Active NonICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeActiveNonICUUnoccupied
* group[=].population.id = "d2e9317"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Active NonICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeInactiveNonICUOccupied
* group[=].population.id = "d2e9394"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Inactive NonICU Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#SurgeInactiveNonICUUnoccupied
* group[=].population.id = "d2e9471"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Surge Inactive NonICU Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#BurnOccupied
* group[=].population.id = "d2e9548"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Burn Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#BurnUnoccupied
* group[=].population.id = "d2e9626"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Burn Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NegativePressureOccupied
* group[=].population.id = "d2e9703"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Negative Pressure Beds Occupied Initial Population"
* group[+].code = $healthcare-capacity-codes#NegativePressureUnoccupied
* group[=].population.id = "d2e9780"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Negative Pressure Beds Unoccupied Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultEDCensus
* group[=].population.id = "d2e9857"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult ED Census Initial Population"
* group[+].code = $healthcare-capacity-codes#AdultEDAdmittedCensus
* group[=].population.id = "d2e9934"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Adult ED Admitted Census Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsEDCensus
* group[=].population.id = "d2e10011"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds ED Census Initial Population"
* group[+].code = $healthcare-capacity-codes#PedsEDAdmittedCensus
* group[=].population.id = "d2e10089"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Peds ED Admitted Census Initial Population"
* group[+].code = $healthcare-capacity-codes#TotalEDCensus
* group[=].population.id = "d2e10166"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Total ED Census Initial Population"
* group[+].code = $healthcare-capacity-codes#TotalEDAdmittedCensus
* group[=].population.id = "d2e10243"
* group[=].population.code = $measure-population#initial-population "Initial Population"
* group[=].population.criteria.language = #text/cql-identifier
* group[=].population.criteria.expression = "Total ED Admitted Census Initial Population"

Instance: bed-capacity-effective-data-requirements
InstanceOf: Library
Usage: #inline
* extension[0].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $location-physical-type#bd "Bed"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $healthcare-capacity-codes#CHLD "Children's or Pediatric"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $healthcare-capacity-codes#IPF "Inpatient Psychiatric"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $healthcare-capacity-codes#OTH "Other facility-within-facility or subunit"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $healthcare-capacity-codes#HOSP "Hospital"
* extension[+].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-directReferenceCode"
* extension[=].valueCoding = $healthcare-capacity-codes#IRF "Inpatient Rehabilitation"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "IsBedLocation"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"IsBedLocation\":\n  Location.physicalType ~ \"Bed\""
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 0
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Encounters"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Encounters\":\n  [Encounter]"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 1
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "EncounterCheck"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define EncounterCheck:\n  exists(\"Encounters\" Encounters\n  where exists(LocationMatch(Encounters.location))\n    and Encounters.period overlaps \"Measurement Period\")"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 2
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationIsCHLD"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"LocationIsCHLD\":\n  exists(\n    Location.type types\n    where types ~ \"CHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 3
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds Total Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds Total Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 4
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NoEncounterCheck"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define NoEncounterCheck:\n  exists(\"Encounters\" Encounters\n  where not exists(LocationMatch(Encounters.location))\n    and Encounters.period overlaps \"Measurement Period\")"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 5
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "All Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"All Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 6
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds ED Census Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds ED Census Initial Population\":\n  IsBedLocation\n  and exists(\n    [Encounter: \"Emergency Department Visit\"] EDVisit\n    where exists(LocationMatch(EDVisit.location))\n      and EDVisit.period overlaps \"Measurement Period\"\n    )\n  and exists(\n    Location.type types\n    where \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 7
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationIsIPF"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"LocationIsIPF\":\n  exists(\n    Location.type types\n    where types ~ \"IPF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 8
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationIsOTH"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"LocationIsOTH\":\n  exists(\n    Location.type types\n    where types ~ \"OTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 9
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult PCU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult PCU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIPF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 10
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationIsHOSP"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"LocationIsHOSP\":\n  exists(\n    Location.type types\n    where types ~ \"HOSP\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 11
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds ICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds ICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 12
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Negative Pressure Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Negative Pressure Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 13
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult PCU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult PCU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIPF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 14
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds PCU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds PCU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 15
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationIsIRF"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"LocationIsIRF\":\n  exists(\n    Location.type types\n    where types ~ \"IRF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 16
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "OB Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"OB Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 17
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Inactive NonICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Inactive NonICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 18
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU3 Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU3 Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 19
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds ICULOC Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds ICULOC Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 20
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Inactive Total Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Inactive Total Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 21
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds NonICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds NonICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIPF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 22
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds MTMS Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds MTMS Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 23
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds NonICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds NonICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIPF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 24
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds Psych Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds Psych Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIPF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 25
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Inactive Total Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Inactive Total Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 26
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Specialty Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Specialty Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 27
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Active ICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Active ICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 28
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult NonICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult NonICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 29
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Specialty NonCrib Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Specialty NonCrib Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 30
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds Psych Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds Psych Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIPF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 31
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds ICULOC Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds ICULOC Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 32
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Rehab Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Rehab Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIRF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 33
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult MTMS Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult MTMS Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 34
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU3 Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU3 Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 35
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsIPF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 36
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Burn Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Burn Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 37
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds ICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds ICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 38
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU1 Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU1 Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 39
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Negative Pressure Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Negative Pressure Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 40
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult ICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult ICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 41
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU4 Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU4 Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 42
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult ICULOC Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult ICULOC Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIPF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 43
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult Obs Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult Obs Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 44
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult NonICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult NonICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 45
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds Obs Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds Obs Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 46
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 47
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 48
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Nursery Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Nursery Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 49
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult Psych Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult Psych Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIPF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 50
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult ED Admitted Census Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult ED Admitted Census Initial Population\":\n  IsBedLocation\n  and exists(\n    [Encounter: \"Emergency Department Visit\"] EDVisit\n    where exists(LocationMatch(EDVisit.location))\n      and EDVisit.period overlaps \"Measurement Period\"\n      and EDVisit.status in {'arrived', 'triaged', 'in-progress'}\n    )\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 51
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU3Plus Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU3Plus Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 52
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Active NonICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Active NonICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 53
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Rehab Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Rehab Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIRF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 54
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Active Total Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Active Total Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 55
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Specialty NonCrib Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Specialty NonCrib Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 56
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult ED Census Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult ED Census Initial Population\":\n  IsBedLocation\n  and exists(\n    [Encounter: \"Emergency Department Visit\"] EDVisit\n    where exists(LocationMatch(EDVisit.location))\n      and EDVisit.period overlaps \"Measurement Period\"\n    )\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 57
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "OB Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"OB Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 58
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds PCU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds PCU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 59
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds MTMS Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds MTMS Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 60
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Total ED Census Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Total ED Census Initial Population\":\n  IsBedLocation\n  and exists(\n    [Encounter: \"Emergency Department Visit\"] EDVisit\n    where exists(LocationMatch(EDVisit.location))\n      and EDVisit.period overlaps \"Measurement Period\"\n    )\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 61
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Burn Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Burn Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 62
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult ICULOC Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult ICULOC Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIPF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 63
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where LocationIsHOSP\n      and \"LocationIsIRF\"\n      and \"LocationIsIPF\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 64
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Inactive ICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Inactive ICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 65
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Specialty Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Specialty Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 66
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU3Plus Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU3Plus Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 67
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU1 Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU1 Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 68
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult Psych Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult Psych Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIPF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 69
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult Obs Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult Obs Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 70
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Active Total Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Active Total Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 71
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Active NonICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Active NonICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 72
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Inactive NonICU Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Inactive NonICU Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 73
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult ICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult ICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 74
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Adult MTMS Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Adult MTMS Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 75
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds Total Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds Total Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 76
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Total ED Admitted Census Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Total ED Admitted Census Initial Population\":\n  IsBedLocation\n  and exists(\n    [Encounter: \"Emergency Department Visit\"] EDVisit\n    where exists(LocationMatch(EDVisit.location))\n      and EDVisit.period overlaps \"Measurement Period\"\n      and EDVisit.status in {'arrived', 'triaged', 'in-progress'}\n    )\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 77
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Nursery Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Nursery Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 78
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU4 Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU4 Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 79
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "All Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"All Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 80
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds Obs Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds Obs Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 81
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Active ICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Active ICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 82
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Surge Inactive ICU Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Surge Inactive ICU Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsOTH\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 83
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU2 Beds Unoccupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU2 Beds Unoccupied Initial Population\":\n  IsBedLocation\n  and NoEncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 84
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "NICU2 Beds Occupied Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"NICU2 Beds Occupied Initial Population\":\n  IsBedLocation\n  and EncounterCheck\n  and exists(\n    Location.type types\n    where \"LocationIsHOSP\"\n      and \"LocationIsIRF\"\n      and \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 85
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "Peds ED Admitted Census Initial Population"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define \"Peds ED Admitted Census Initial Population\":\n  IsBedLocation\n  and exists(\n    [Encounter: \"Emergency Department Visit\"] EDVisit\n    where exists(LocationMatch(EDVisit.location))\n      and EDVisit.period overlaps \"Measurement Period\"\n      and EDVisit.status in {'arrived', 'triaged', 'in-progress'}\n    )\n  and exists(\n    Location.type types\n    where \"LocationIsCHLD\"\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 86
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToConcept"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToConcept(concept FHIR.CodeableConcept):\n    if concept is null then\n        null\n    else\n        System.Concept {\n            codes: concept.coding C return ToCode(C),\n            display: concept.text.value\n        }"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 87
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "LocationMatch"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function LocationMatch(locations List<FHIR.Encounter.Location>):\n  locations l\n  where GetLocation(l.location).id = Location.id"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 88
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetLocation"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function \"GetLocation\"(reference Reference ):\n  singleton from (\n    [Location] L where L.id = GetId(reference.reference)\n  )"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 89
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToString"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToString(value string): value.value"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 90
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "BedCapacityMeasure"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "GetId"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function \"GetId\"(uri String ):\n  Last(Split(uri, '/'))"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 91
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToInterval"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToInterval(period FHIR.Period):\n    if period is null then\n        null\n    else\n        if period.\"start\" is null then\n            Interval(period.\"start\".value, period.\"end\".value]\n        else\n            Interval[period.\"start\".value, period.\"end\".value]"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 92
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* extension[+].extension[0].url = "libraryName"
* extension[=].extension[=].valueString = "FHIRHelpers"
* extension[=].extension[+].url = "name"
* extension[=].extension[=].valueString = "ToString"
* extension[=].extension[+].url = "statement"
* extension[=].extension[=].valueString = "define function ToString(value EncounterStatus): value.value"
* extension[=].extension[+].url = "displaySequence"
* extension[=].extension[=].valueInteger = 93
* extension[=].url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-logicDefinition"
* name = "EffectiveDataRequirements"
* status = #active
* type = $library-type#module-definition
* relatedArtifact[0].type = #depends-on
* relatedArtifact[=].display = "Library FHIRHelpers"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIRHelpers"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system LocationPhysicalType"
* relatedArtifact[=].resource = "http://terminology.hl7.org/CodeSystem/location-physical-type"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system HealthcareCapacity"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/nhsn-dqm/CodeSystem/healthcare-capacity-codes"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Emergency Department Visit"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* parameter[0].name = #"Measurement Period"
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Period
* parameter[+].name = #"Peds Total Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"All Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds ED Census Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult PCU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds ICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Negative Pressure Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult PCU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds PCU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"OB Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Inactive NonICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU3 Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds ICULOC Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Inactive Total Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds NonICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds MTMS Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds NonICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds Psych Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Inactive Total Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Specialty Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Active ICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult NonICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Specialty NonCrib Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds Psych Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds ICULOC Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Rehab Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult MTMS Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU3 Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Burn Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds ICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU1 Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Negative Pressure Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult ICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU4 Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult ICULOC Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult Obs Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult NonICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds Obs Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Nursery Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult Psych Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult ED Admitted Census Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU3Plus Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Active NonICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Rehab Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Active Total Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Specialty NonCrib Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult ED Census Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"OB Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds PCU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds MTMS Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Total ED Census Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Burn Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult ICULOC Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Inactive ICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Specialty Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU3Plus Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU1 Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult Psych Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult Obs Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Active Total Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Active NonICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Inactive NonICU Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult ICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Adult MTMS Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds Total Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Total ED Admitted Census Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Nursery Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU4 Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"All Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds Obs Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Active ICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Surge Inactive ICU Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU2 Beds Unoccupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"NICU2 Beds Occupied Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Peds ED Admitted Census Initial Population"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* dataRequirement[0].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport = "id"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "type"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[=].mustSupport[+] = "period"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.valueSet = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MeasureReport/jurisdiction-bed-capacity-measurereport-example.fsh

Alias: $bed-capacity-code-system = http://hl7.org/fhir/us/nhsn-dqm/CodeSystem/healthcare-capacity-codes

// TODO, try SANER Measure Profile for the Measure Profile these are using - https://build.fhir.org/ig/HL7/fhir-saner/StructureDefinition-PublicHealthMeasure.html

Instance: hosp-location-example-bed-capacity
InstanceOf: QICoreLocation
Title: "Location - Entire Hospital"
Description: "Hospital-wide"
Usage: #inline
* identifier.system = "http://www.example.org/location"
* identifier.value = "123"
* status = #active
* name = "XYZ Hospital"
* type = $bed-capacity-code-system#HOSP "Hospital"

Instance: ipf-location-example-bed-capacity
InstanceOf: QICoreLocation
Title: "Location - Inpatient Psychiatric"
Description: "Inpatient Psych (IPF)"
Usage: #inline
* identifier.system = "http://www.example.org/location"
* identifier.value = "456"
* status = #active
* name = "Inpatient Psych at XYZ Hospital"
* type = $bed-capacity-code-system#IPF "Inpatient Psychiatric"

Instance: chld-location-example-bed-capacity
InstanceOf: QICoreLocation
Title: "Location - Children's or Pediatrics Dept."
Description: "Pediatric (CHLD)"
Usage: #inline
* identifier.system = "http://www.example.org/location"
* identifier.value = "789"
* status = #active
* name = "Children's/Pediatrics at XYZ Hospital"
* type = $bed-capacity-code-system#CHLD "Children's or Pediatric"


Instance: bed-capacity-measurereport-example-hosp
InstanceOf: DEQMIndividualMeasureReportProfile
Title: "MeasureReport - Hospital Bed Capacity Individual Measure Report"
Description: "Example MeasureReport - Hospital Bed Capacity Individual Measure Report"
Usage: #example

// * contained.resourceType = "Location"
// * contained.id = "hosp-location-example-bed-capacity"
// * contained.identifier.system = "http://www.example.org/location"
// * contained.identifier.value = "123"
// * contained.name = "XYZ Hospital"
// * contained.type = $bed-capacity-code-system#HOSP "Hospital"
* extension[location].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-dataLocation"
* extension[location].valueReference = Reference(hosp-location-example-bed-capacity)
// TODO, determine if this is actually necessary. DEQM Invariant deqm-3 seems to be incorrectly written
* extension[1].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = $measure-scoring#cohort "Cohort"
* contained[0] = hosp-location-example-bed-capacity
* status = #complete
* type = #individual
* measure = "http://hl7.org/fhir/us/nhsn-dqm/Measure/BedCapacityMeasure"
//* measure = Canonical(BedCapacityMeasure)
// Uncomment the line below when DEQM is updated to allow non-patient subjects in individual reports
// * subject = Reference(hosp-location-example-bed-capacity)
* subject.identifier.system = "http://www.example.org/location"
* subject.identifier.value = "123"
* date = "2023-08-28T07:01:07.563Z"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2023-08-28T07:01:07.563Z"
* period.end = "2023-08-28T19:01:07.561Z"
//* group.code = $bed-capacity-code-system#BedCapacityReporting
* group[0].code = $bed-capacity-code-system#AllBedsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 177
* group[+].code = $bed-capacity-code-system#AllBedsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 5
* group[+].code = $bed-capacity-code-system#AdultTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 177
* group[+].code = $bed-capacity-code-system#AdultTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 5
* group[+].code = $bed-capacity-code-system#AdultICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 32
* group[+].code = $bed-capacity-code-system#AdultICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#AdultICU_LOCOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 32
* group[+].code = $bed-capacity-code-system#AdultNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 3
* group[+].code = $bed-capacity-code-system#AdultNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultPCUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#AdultPCUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 145
* group[+].code = $bed-capacity-code-system#AdultMTMSOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 3
* group[+].code = $bed-capacity-code-system#AdultMTMSUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#AdultObsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultObsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsICU_LOCOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsPCUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 110
* group[+].code = $bed-capacity-code-system#PedsPCUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsMTMSOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 145
* group[+].code = $bed-capacity-code-system#PedsMTMSUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsObsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsObsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 11
* group[+].code = $bed-capacity-code-system#SpecialtyTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#SpecialtyTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#SpecialtyNonCribOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#SpecialtyNonCribUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#OBOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#OBUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#NICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU4Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU4Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU3PlusOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#NICU3PlusUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#NICU3Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU3Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU2Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU2Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU1Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU1Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NurseryOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NurseryUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#AdultPsychOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#AdultPsychUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsPsychOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsPsychUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#RehabOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#RehabUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#BurnOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#BurnUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NegativePressureOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#NegativePressureUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1
* group[+].code = $bed-capacity-code-system#AdultEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#AdultEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#PedsEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1
* group[+].code = $bed-capacity-code-system#TotalEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 412
* group[+].code = $bed-capacity-code-system#TotalEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1921

Instance: bed-capacity-measurereport-example-ipf
InstanceOf: DEQMIndividualMeasureReportProfile
Title: "MeasureReport - Inpatient Psychiatric Facility Bed Capacity Individual Measure Report"
Description: "Example MeasureReport - Inpatient Psychiatric Facility Bed Capacity Individual Measure Report"
Usage: #example

* extension[location].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-dataLocation"
* extension[location].valueReference = Reference(ipf-location-example-bed-capacity)
* extension[1].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = $measure-scoring#cohort "Cohort"
* contained[0] = ipf-location-example-bed-capacity
* status = #complete
* type = #individual
* measure = "http://hl7.org/fhir/us/nhsn-dqm/Measure/BedCapacityMeasure"
// Uncomment the line below when DEQM is updated to allow non-patient subjects in individual reports
// * subject = Reference(hosp-location-example-bed-capacity)
* subject.identifier.system = "http://www.example.org/location"
* subject.identifier.value = "123"
* date = "2023-08-28T07:01:07.563Z"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2023-08-28T07:01:07.563Z"
* period.end = "2023-08-28T19:01:07.562Z"
* group[0].code = $bed-capacity-code-system#AllBedsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#AllBedsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#AdultTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#AdultICU_LOCOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 32
* group[+].code = $bed-capacity-code-system#AdultNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultPCUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultPCUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultMTMSOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultMTMSUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultObsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultObsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsICU_LOCOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsPCUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 110
* group[+].code = $bed-capacity-code-system#PedsPCUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsMTMSOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 145
* group[+].code = $bed-capacity-code-system#PedsMTMSUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsObsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsObsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 11
* group[+].code = $bed-capacity-code-system#SpecialtyTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#SpecialtyTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#SpecialtyNonCribOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#SpecialtyNonCribUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#OBOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#OBUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#NICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU4Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU4Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU3PlusOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#NICU3PlusUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#NICU3Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU3Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU2Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU2Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU1Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU1Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NurseryOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NurseryUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#AdultPsychOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#AdultPsychUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#PedsPsychOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsPsychUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#RehabOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#RehabUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#BurnOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#BurnUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NegativePressureOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1
* group[+].code = $bed-capacity-code-system#NegativePressureUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1
* group[+].code = $bed-capacity-code-system#AdultEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 29
* group[+].code = $bed-capacity-code-system#AdultEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#PedsEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1
* group[+].code = $bed-capacity-code-system#TotalEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 29
* group[+].code = $bed-capacity-code-system#TotalEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0

Instance: bed-capacity-measurereport-example-chld
InstanceOf: DEQMIndividualMeasureReportProfile
Title: "MeasureReport - Children's Hospital Bed Capacity Individual Measure Report"
Description: "Example MeasureReport - Children's Hospital Bed Capacity Individual Measure Report"
Usage: #example

* extension[location].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-dataLocation"
* extension[location].valueReference = Reference(chld-location-example-bed-capacity)
* extension[1].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = $measure-scoring#cohort "Cohort"
* contained[0] = chld-location-example-bed-capacity
* status = #complete
* type = #individual
* measure = "http://hl7.org/fhir/us/nhsn-dqm/Measure/BedCapacityMeasure"
// Uncomment the line below when DEQM is updated to allow non-patient subjects in individual reports
// * subject = Reference(hosp-location-example-bed-capacity)
* subject.identifier.system = "http://www.example.org/location"
* subject.identifier.value = "123"
* date = "2023-08-28T07:01:07.563Z"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2023-08-28T07:01:07.563Z"
* period.end = "2023-08-28T19:01:07.562Z"
* group[0].code = $bed-capacity-code-system#AllBedsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 104
* group[+].code = $bed-capacity-code-system#AllBedsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 86
* group[+].code = $bed-capacity-code-system#AdultTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#AdultICU_LOCOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 32
* group[+].code = $bed-capacity-code-system#AdultNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultPCUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultPCUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultMTMSOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultMTMSUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultObsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#AdultObsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 56
* group[+].code = $bed-capacity-code-system#PedsTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 53
* group[+].code = $bed-capacity-code-system#PedsICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 12
* group[+].code = $bed-capacity-code-system#PedsICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 12
* group[+].code = $bed-capacity-code-system#PedsICU_LOCOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 12
* group[+].code = $bed-capacity-code-system#PedsNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 44
* group[+].code = $bed-capacity-code-system#PedsNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 41
* group[+].code = $bed-capacity-code-system#PedsPCUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsPCUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsMTMSOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsMTMSUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 41
* group[+].code = $bed-capacity-code-system#PedsObsOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#PedsObsUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 11
* group[+].code = $bed-capacity-code-system#SpecialtyTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#SpecialtyTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#SpecialtyNonCribOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#SpecialtyNonCribUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#OBOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#OBUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* group[=].population[=].count.extension.valueCode = #not-applicable
* group[+].code = $bed-capacity-code-system#NICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU4Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU4Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU3PlusOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#NICU3PlusUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 2
* group[+].code = $bed-capacity-code-system#NICU3Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU3Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU2Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU2Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU1Occupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NICU1Unoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NurseryOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NurseryUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#AdultPsychOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 91
* group[+].code = $bed-capacity-code-system#AdultPsychUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 16
* group[+].code = $bed-capacity-code-system#PedsPsychOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsPsychUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#RehabOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#RehabUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveTotalOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveTotalUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeActiveNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveNonICUOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#SurgeInactiveNonICUUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#BurnOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 18
* group[+].code = $bed-capacity-code-system#BurnUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#NegativePressureOccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 9
* group[+].code = $bed-capacity-code-system#NegativePressureUnoccupied
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 1
* group[+].code = $bed-capacity-code-system#AdultEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 29
* group[+].code = $bed-capacity-code-system#AdultEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#PedsEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 5
* group[+].code = $bed-capacity-code-system#PedsEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#TotalEDCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0
* group[+].code = $bed-capacity-code-system#TotalEDAdmittedCensus
* group[=].population[0].code = $measure-population#initial-population "Initial Population"
* group[=].population[=].count = 0

/*
Examples where the measure items are placed in a single group with multiple populations

*/

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MeasureReport/measurereport-example-ach-subjectlist1.fsh

Instance: measurereport-example-ach-subjectlist1
InstanceOf: DEQMSubjectListMeasureReport
Title: "MeasureReport - Example ACH Subject List 1"
Description: "Measure Report - Example ACH Subject List Example 1"
Usage: #example
// TODO, determine if this is actually necessary. DEQM Invariant deqm-3 seems to be incorrectly written
* extension.url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension.valueCodeableConcept = $measure-scoring#cohort "Cohort"
* status = #complete
* type = #subject-list
* measure = Canonical(NHSNdQMAcuteCareHospitalInitialPopulation)
* date = "2024-02-05T21:04:29.481+00:00"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2022-08-01T00:00:00+00:00"
* period.end = "2022-08-31T23:59:59+00:00"
* group.population.code = $measure-population#initial-population "Initial Population"
* group.population.count = 3
* group.population.subjectResults = Reference(list-example-ach-individual-measurereport-list)
// * group.measureScore.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
// * group.measureScore.extension.valueCode = #unknown


Instance: list-example-ach-individual-measurereport-list
InstanceOf: DEQMIndividualMeasureReportList
Title: "List - Example ACH Individual Measure Report List"
Description: "List - Example ACH Individual Measure Report List Example"
Usage: #example
//* id = "list-example-individual-measurereport-list"
* status = #current
* mode = #snapshot
* entry[+].item = Reference(measurereport-example-individual-ach-ach-pass1)
* entry[+].item = Reference(measurereport-example-individual-ach-ach-pass2)
* entry[+].item = Reference(measurereport-example-individual-ach-ach-pass3)

//* entry[+].item
//  * identifier.system = "http://example.org/fhir/measurereport/id"
//  * identifier.value = "123456789-pass1"
//* entry[+].item
//  * identifier.system = "http://example.org/fhir/measurereport/id"
//  * identifier.value = "123456789-pass2"
//* entry[+].item
//  * identifier.system = "http://example.org/fhir/measurereport/id"
//  * identifier.value = "123456789-pass3"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MeasureReport/measurereport-example-individual-ach-ach-pass1.fsh

Instance: measurereport-example-individual-ach-ach-pass1
InstanceOf: DEQMIndividualMeasureReportProfile
Title: "MeasureReport - Example Individual ACH Pass1 - LOS/MEN"
Description: "MeasureReport - Example Individual ACH Pass1 - Late Onset Sepsis and Meningitis (LOS/MEN)"
Usage: #example
// TODO, determine if this is actually necessary. DEQM Invariant deqm-3 seems to be incorrectly written
* extension.url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension.valueCodeableConcept = $measure-scoring#cohort "Cohort"
* identifier[+].system = "http://example.org/fhir/measurereport/id"
* identifier[=].value = "123456789-pass1"
* status = #complete
* type = #individual
* measure = Canonical(NHSNdQMAcuteCareHospitalInitialPopulation)
* subject = Reference(patient-example-ach-ach-pass1)
* date = "2024-02-05T21:04:29.481+00:00"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2024-01-05T00:00:00.000+00:00"
* period.end = "2024-02-04T00:00:00.000+00:00"
* improvementNotation = $measure-improvement-notation#increase
* group.population.code = $measure-population#initial-population "Initial Population"
* group.population.count = 1
* evaluatedResource[0] = Reference(patient-example-ach-ach-pass1)
* evaluatedResource[0] = Reference(encounter-example-ach-ach-pass1)
* evaluatedResource[0] = Reference(coverage-example-ach-pass1)
* evaluatedResource[0] = Reference(condition-example-diagnosis-ach-pass1)
* evaluatedResource[0] = Reference(device-example-ach-ach-pass1-central-line)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass1-vancomycin)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass1-vancomycin)
* evaluatedResource[0] = Reference(observation-example-ach-pass1-blood)
* evaluatedResource[0] = Reference(observation-example-ach-pass1-csf)
* evaluatedResource[0] = Reference(observation-example-ach-pass1-gestational-age)
* evaluatedResource[0] = Reference(observation-example-ach-pass1-vitals-weight)
* evaluatedResource[0] = Reference(procedure-example-ach-ach-pass1-central-line)
* evaluatedResource[0] = Reference(procedure-example-ach-ach-pass1-lumbar)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass1-blood)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass1-csf)
* evaluatedResource[0] = Reference(specimen-example-ach-ach-pass1-blood)
* evaluatedResource[0] = Reference(specimen-example-ach-ach-pass1-csf)


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MeasureReport/measurereport-example-individual-ach-ach-pass2.fsh

Instance: measurereport-example-individual-ach-ach-pass2
InstanceOf: MeasureReport
Title: "MeasureReport - Example Individual ACH Pass2 - Hypo"
Description: "MeasureReport - Example Individual ACH Pass2 - Hypoglycemia"
Usage: #example
// TODO, determine if this is actually necessary. DEQM Invariant deqm-3 seems to be incorrectly written
* extension.url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension.valueCodeableConcept = $measure-scoring#cohort "Cohort"
* meta.profile = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/indv-measurereport-deqm"
* identifier[+].system = "http://example.org/fhir/measurereport/id"
* identifier[=].value = "123456789-pass2"
* status = #complete
* type = #individual
* measure = Canonical(NHSNdQMAcuteCareHospitalInitialPopulation)
* subject = Reference(patient-example-ach-ach-pass1)
* date = "2024-02-05T21:04:29.481+00:00"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2024-01-05T00:00:00.000+00:00"
* period.end = "2024-02-04T00:00:00.000+00:00"
* improvementNotation = $measure-improvement-notation#increase
* group.population.code = $measure-population#initial-population "Initial Population"
* group.population.count = 1
* evaluatedResource[0] = Reference(patient-example-ach-ach-pass2)
* evaluatedResource[0] = Reference(encounter-example-ach-ach-pass2-emergency)
* evaluatedResource[0] = Reference(encounter-example-ach-ach-pass2-inpatient)
* evaluatedResource[0] = Reference(coverage-example-ach-pass2)
* evaluatedResource[0] = Reference(condition-example-diagnosis-ach-pass2-problem)
* evaluatedResource[0] = Reference(condition-example-diagnosis-ach-pass2)
* evaluatedResource[0] = Reference(device-example-ach-ach-pass2-compress-hose)
* evaluatedResource[0] = Reference(diagnosticreport-example-ach-ach-pass2-radiology)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-dex4)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-heparin-1)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-heparin-2)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-insulin-lispro-1)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-insulin-lispro-2)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-insulin-lispro-3)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass2-insulin-lispro-4)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass2-dex4-tablet)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass2-heparin)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass2-insulin-lispro)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass2-metformin)
* evaluatedResource[0] = Reference(observation-example-ach-pass2-aptt)
* evaluatedResource[0] = Reference(observation-example-ach-pass2-poc-1)
* evaluatedResource[0] = Reference(observation-example-ach-pass2-poc-2)
* evaluatedResource[0] = Reference(observation-example-ach-pass2-hemo-a1c)
* evaluatedResource[0] = Reference(observation-example-ach-pass2-hemo)
* evaluatedResource[0] = Reference(observation-example-ach-pass2-vitals-weight)
* evaluatedResource[0] = Reference(procedure-example-ach-ach-pass2-ivcf)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass2-aptt)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass2-glucose)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass2-hemo-a1c)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass2-hemo)
* evaluatedResource[0] = Reference(specimen-example-ach-ach-pass2-blood-1)
* evaluatedResource[0] = Reference(specimen-example-ach-ach-pass2-blood-2)



---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MeasureReport/measurereport-example-individual-ach-ach-pass3.fsh

Instance: measurereport-example-individual-ach-ach-pass3
InstanceOf: MeasureReport
Title: "MeasureReport - Example Individual ACH Pass3 - C. diff"
Description: "MeasureReport - Example Individual ACH Pass3 - Healthcare facility-onset, antibiotic-treated Clostridioides difficile infection / Hospital-onset bacteremia and fungemia (CDI/HOB)"
Usage: #example
// TODO, determine if this is actually necessary. DEQM Invariant deqm-3 seems to be incorrectly written
* extension.url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension.valueCodeableConcept = $measure-scoring#cohort "Cohort"
* meta.profile = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/indv-measurereport-deqm"
* identifier[+].system = "http://example.org/fhir/measurereport/id"
* identifier[=].value = "123456789-pass3"
* status = #complete
* type = #individual
* measure = Canonical(NHSNdQMAcuteCareHospitalInitialPopulation)
* subject = Reference(patient-example-ach-ach-pass1)
* date = "2024-02-05T21:04:29.481+00:00"
* reporter = Reference(organization-example-submitting-organization)
* period.start = "2024-01-05T00:00:00.000+00:00"
* period.end = "2024-02-04T00:00:00.000+00:00"
* improvementNotation = $measure-improvement-notation#increase
* group.population.code = $measure-population#initial-population "Initial Population"
* group.population.count = 1
* evaluatedResource[0] = Reference(condition-example-diagnosis-ach-pass3-problem)
* evaluatedResource[0] = Reference(condition-example-diagnosis-ach-pass3)
* evaluatedResource[0] = Reference(coverage-example-ach-pass3)
* evaluatedResource[0] = Reference(device-example-ach-ach-pass3-ivcs-pump)
* evaluatedResource[0] = Reference(encounter-example-ach-ach-pass3-acute)
* evaluatedResource[0] = Reference(encounter-example-ach-ach-pass3-short-stay)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass3-enoxaparin)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass3-metronidazole-1)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass3-metronidazole-2)
* evaluatedResource[0] = Reference(medicationadministration-example-ach-pass3-metronidazole-3)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass3-cipro)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass3-enoxaparin)
* evaluatedResource[0] = Reference(medicationrequest-example-ach-pass3-metronidazole)
* evaluatedResource[0] = Reference(observation-example-ach-pass3-cdiff)
* evaluatedResource[0] = Reference(observation-example-ach-pass3-vitals-height)
* evaluatedResource[0] = Reference(observation-example-ach-pass3-vitals-weight)
* evaluatedResource[0] = Reference(patient-example-ach-ach-pass3)
* evaluatedResource[0] = Reference(procedure-example-ach-ach-pass3-transfusion)
* evaluatedResource[0] = Reference(servicerequest-example-ach-ach-pass3-cdiff)
* evaluatedResource[0] = Reference(specimen-example-ach-ach-pass3-stool)




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-cipro-500.fsh

Instance: medication-example-cipro-500
InstanceOf: QICoreMedication
Title: "Medication - Example Cipro 500"
Description: "Medication - Example - Ciprofloxacin 500 MG"
Usage: #example

* code.coding[+] = $rxnorm#328287 "ciprofloxacin 500 MG"
* code.text = "Ciprofloxacin 500 MG"
* status = #active
* form = $sct#385060002 "Prolonged-release oral tablet (dose form)"
* form.text = "Extended-release tablet"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-dex4-tablet.fsh

Instance: medication-example-dex4-tablet
InstanceOf: QICoreMedication
Title: "Medication - Example Dex4 Tablet"
Description: "Medication - Example - Metformin hydrochloride 1000 MG"
Usage: #example

* code.coding[+] = $rxnorm#860995 "metformin hydrochloride 1000 MG"
* code.text = "metformin hydrochloride 1000 MG"
* status = #active
// * form = $sct#66076007 "Chewable tablet"
// * form.text = "Chewable tablet"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-enoxaparin.fsh

Instance: medication-example-enoxaparin
InstanceOf: QICoreMedication
Title: "Medication - Example Enoxaparin"
Description: "Medication - Example - Enoxaparin sodium, 0.4 ML,  100 MG/ML Prefilled Syringe"
Usage: #example

* code.coding[+] = $rxnorm#854235 "0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe"
* code.text = "Enoxaparin sodium, 0.4 ML,  100 MG/ML Prefilled Syringe"
* status = #active


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-heparin.fsh

Instance: medication-example-heparin
InstanceOf: QICoreMedication
Title: "Medication - Example Heparin"
Description: "Medication - Example - Heparin sodium, 0.5 ML, porcine 10000 UNT/ML Prefilled Syringe"
Usage: #example

* code.coding[+] = $rxnorm#2121591 "0.5 ML heparin sodium, porcine 10000 UNT/ML Prefilled Syringe"
* code.text = "0.5 ML heparin sodium, porcine 10000 UNT/ML Prefilled Syringe"
* status = #active
* form = $sct#779438003 "Product containing only heparin in parenteral dose form (medicinal product form)"
* form.text = "Intravenous solution"




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-insulin-lispro.fsh

Instance: medication-example-insulin-lispro
InstanceOf: QICoreMedication
Title: "Medication - Example Insulin Lispro"
Description: "Medication - Example - Insulin lispro"
Usage: #example

* code.coding[+] = $rxnorm#1157460 "insulin lispro / insulin lispro protamine, human Injectable Product"
* code.text = "insulin lispro"
* status = #active



---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-metformin-1000.fsh

Instance: medication-example-metformin-1000
InstanceOf: QICoreMedication
Title: "Medication - Example Metformin 1000"
Description: "Medication - Example - Metformin hydrochloride 1000 MG"
Usage: #example

* code.coding[+] = $rxnorm#860995 "metFORMIN hydrochloride 1000 MG"
* code.text = "Metformin hydrochloride 1000 MG"
* status = #active
* form = $sct#385060002 "Prolonged-release oral tablet (dose form)"
* form.text = "Extended-release tablet"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-metronidazole.fsh

Instance: medication-example-metronidazole
InstanceOf: QICoreMedication
Title: "Medication - Example Metronidazole"
Description: "Medication - Example - Metronidazole 500 MG"
Usage: #example

* code.coding[+] = $rxnorm#317428 "metroNIDAZOLE 500 MG"
* code.text = "Metronidazole 500 MG"
* status = #active
* form = $sct#421026006 "Oral tablet"
* form.text = "Oral tablet"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Medication/medication-example-vancomycin-15.fsh

Instance: medication-example-vancomycin-15
InstanceOf: QICoreMedication
Title: "Medication - Example Vancomycin 15"
Description: "Medication - Example - Vancomycin Injectable Solution"
Usage: #example

* code.coding[+] = $rxnorm#375983 "vancomycin Injectable Solution"
* code.text = "Vancomycin Injectable Solution"
* status = #active
* form = $sct#385219001 "Solution for injection"
* form.text = "Injection solution"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationAdministration/medicationadministration-example-ach-pass1-vancomycin.fsh

Instance: medicationadministration-example-ach-pass1-vancomycin
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass1 Vancomycin"
Description: "MedicationAdministration - Example ACH Pass1 - Vancomycin Injectable Solution 50MG"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888111"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient"
* medicationReference = Reference(medication-example-vancomycin-15)
* medicationReference.display = "vancomycin Injectable Solution 50MG"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* context = Reference(encounter-example-ach-ach-pass1)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T14:34:00-05:00"
* request = Reference(medicationrequest-example-ach-pass1-vancomycin)
* dosage.text = "15mg/kg"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose = 15 'mg/kg' "mg/kg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationAdministration/medicationadministration-example-ach-pass2-dex4.fsh

Instance: medicationadministration-example-ach-pass2-dex4
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Dex4"
Description: "MedicationAdministration - Example ACH Pass2 - Dex4 4 gm chewable tablet X1"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888893"
* status = #completed
* category = $medicationrequest-category#outpatient "Outpatient"
* category.text = "Outpatient"
* medicationReference = Reference(medication-example-dex4-tablet)
* medicationReference.display = "Dex4 4 gm chewable tablet X1"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-emergency)
* context.display = "Emergency Encounter"
* effectiveDateTime = "2024-01-31T04:54:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-dex4-tablet)
//* recorder.display = "Patient Identified"
* dosage.text = "4 gm chewable tablet X1"
* dosage.route = $sct#26643006 "Oral Use"
* dosage.route.text = "Oral"
* dosage.dose = 4 'g' "g"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationAdministration/medicationadministration-example-ach-pass2-heparin.fsh

Instance: medicationadministration-example-ach-pass2-heparin-1
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Heparin 1"
Description: "MedicationAdministration - Example ACH Pass2 - heparin sodium, 0.5 ML, porcine 10000 UNT/ML Prefilled Syringe - First Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888895"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-heparin)
* medicationReference.display = "0.5 ML heparin sodium, porcine 10000 UNT/ML Prefilled Syringe"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-inpatient)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-01T12:22:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-heparin)
//* recorder.display = "Patient Identified"
* dosage.text = "0.5 mL"
* dosage.site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose = 5000 'uL' "uL"


Instance: medicationadministration-example-ach-pass2-heparin-2
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Heparin 2"
Description: "MedicationAdministration - Example ACH Pass2 - heparin sodium, 0.5 ML, porcine 10000 UNT/ML Prefilled Syringe - Second Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888895"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-heparin)
* medicationReference.display = "0.5 ML heparin sodium, porcine 10000 UNT/ML Prefilled Syringe"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-inpatient)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T13:26:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-heparin)
//* recorder.display = "Patient Identified"
* dosage.text = "0.5 mL"
* dosage.site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose = 5000 'uL' "uL"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationAdministration/medicationadministration-example-ach-pass2-insulin-lispro.fsh

Instance: medicationadministration-example-ach-pass2-insulin-lispro-1
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Insulin Lispro 1"
Description: "MedicationAdministration - Example ACH Pass2 - Insulin Lispro - First Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888942"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-insulin-lispro)
* medicationReference.display = "Insulin Lispro"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-inpatient)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-01T12:00:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-insulin-lispro)
//* recorder.display = "Patient Identified"
* dosage.text = "Give 5 units before breakfast"
* dosage.site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose.value = 5


Instance: medicationadministration-example-ach-pass2-insulin-lispro-2
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Insulin Lispro 2"
Description: "MedicationAdministration - Example ACH Pass2 - Insulin Lispro - Second Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888943"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-insulin-lispro)
* medicationReference.display = "Insulin Lispro"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-inpatient)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-01T19:00:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-insulin-lispro)
//* recorder.display = "Patient Identified"
* dosage.text = "Give 5 units before dinner"
* dosage.site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose.value = 4


Instance: medicationadministration-example-ach-pass2-insulin-lispro-3
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Insulin Lispro 3"
Description: "MedicationAdministration - Example ACH Pass2 - Insulin Lispro - Third Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888944"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-insulin-lispro)
* medicationReference.display = "Insulin Lispro"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-inpatient)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T07:00:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-insulin-lispro)
//* recorder.display = "Patient Identified"
* dosage.text = "Give 5 units before breakfast"
* dosage.site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose.value = 5


Instance: medicationadministration-example-ach-pass2-insulin-lispro-4
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass2 Insulin Lispro 4"
Description: "MedicationAdministration - Example ACH Pass2 Insulin Lispro 4"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888945"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-insulin-lispro)
* medicationReference.display = "Insulin Lispro"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass2-inpatient)
* context.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T15:00:00-05:00"
* request = Reference(medicationrequest-example-ach-pass2-insulin-lispro)
//* recorder.display = "Patient Identified"
* dosage.text = "Give 5 units before dinner"
* dosage.site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosage.route = $sct#47625008 "Intravenous route"
* dosage.route.text = "IV"
* dosage.dose.value = 4




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationAdministration/medicationadministration-example-ach-pass3-enoxaparin.fsh

Instance: medicationadministration-example-ach-pass3-enoxaparin
InstanceOf: QICoreMedicationAdministrationNotDone
Title: "MedicationAdministration - Example ACH Pass3 Enoxaparin"
Description: "MedicationAdministration - Example ACH Pass3 - Enoxaparin sodium, 0.4 ML, 100 MG/ML Prefilled Syringe"
Usage: #example

* extension[0].url = "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-recorded"
* extension[=].valueDateTime = "2024-02-02T21:04:00-05:00"
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888833"
* status = #not-done
* statusReason = $sct#182903008 "Drug declined by patient - reason unknown (situation)"
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
// * medicationReference = Reference(medication-example-enoxaparin)
// * medicationReference.display = "0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe"
* medicationCodeableConcept.coding[+] = $rxnorm#854235 "0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe"
* medicationCodeableConcept.text = "Enoxaparin sodium, 0.4 ML,  100 MG/ML Prefilled Syringe"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass3-acute)
* context.display = "Critical care visit"
* effectiveDateTime = "2024-02-02T21:04:00-05:00"
* request = Reference(medicationrequest-example-ach-pass3-enoxaparin)
//* recorder.display = "Patient Identified"
* dosage.text = "0.4ml subcutaneous once daily in abdomen"
* dosage.site = $sct#42972002 "Subcutaneous tissue structure of anterior abdominal wall (body structure)"
* dosage.route = $sct#26643006 "Oral Use"
* dosage.route.text = "Oral"
* dosage.dose = 4000 'uL' "uL"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationAdministration/medicationAdministration-example-ach-pass3-metronidazole.fsh

Instance: medicationadministration-example-ach-pass3-metronidazole-1
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass3 Metronidazole 1"
Description: "MedicationAdministration - Example ACH Pass3 - Metronidazole 500 MG - First Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888321"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-metronidazole)
* medicationReference.display = "Metronidazole 500 MG"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass3-short-stay)
* context.display = "Short Stay"
* effectiveDateTime = "2024-02-01T21:02:00-05:00"
* request = Reference(medicationrequest-example-ach-pass3-metronidazole)
//* recorder.display = "Patient Identified"
* dosage.text = "5mg tablet by mouth twice daily"
* dosage.route = $sct#26643006 "Oral Use"
* dosage.route.text = "Oral"
* dosage.dose = 5 'mg' "mg"



Instance: medicationadministration-example-ach-pass3-metronidazole-2
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass3 Metronidazole 2"
Description: "MedicationAdministration - Example ACH Pass3 - Metronidazole 500 MG - Second Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888322"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-metronidazole)
* medicationReference.display = "Metronidazole 500 MG"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass3-short-stay)
* context.display = "Short Stay"
* effectiveDateTime = "2024-02-02T21:09:00-05:00"
* request = Reference(medicationrequest-example-ach-pass3-metronidazole)
//* recorder.display = "Patient Identified"
* dosage.text = "5mg tablet by mouth twice daily"
* dosage.route = $sct#26643006 "Oral Use"
* dosage.route.text = "Oral"
* dosage.dose = 5 'mg' "mg"



Instance: medicationadministration-example-ach-pass3-metronidazole-3
InstanceOf: QICoreMedicationAdministration
Title: "MedicationAdministration - Example ACH Pass3 Metronidazole 3"
Description: "MedicationAdministration - Example ACH Pass3 - Metronidazole 500 MG - Third Encounter Administration"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "1018888323"
* status = #completed
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-metronidazole)
* medicationReference.display = "Metronidazole 500 MG"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* context = Reference(encounter-example-ach-ach-pass3-short-stay)
* context.display = "Short Stay"
* effectiveDateTime = "2024-02-03T09:09:00-05:00"
* request = Reference(medicationrequest-example-ach-pass3-metronidazole)
//* recorder.display = "Patient Identified"
* dosage.text = "5mg tablet by mouth twice daily"
* dosage.route = $sct#26643006 "Oral Use"
* dosage.route.text = "Oral"
* dosage.dose = 5 'mg' "mg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass1-vancomycin.fsh

Instance: medicationrequest-example-ach-pass1-vancomycin
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass1 Vancomycin"
Description: "MedicationRequest - Example ACH Pass1 - Vancomycin Injectable Solution 50MG"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888811"
* status = #completed
* intent = #order
// * reportedBoolean = false
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient"
* medicationReference = Reference(medication-example-vancomycin-15)
* medicationReference.display = "vancomycin Injectable Solution 50MG"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* encounter = Reference(encounter-example-ach-ach-pass1)
* encounter.display = "Hospital Admission"
* authoredOn = "2024-02-02T13:43:00-05:00"
* requester = Reference(patient-example-ach-ach-pass1)
//* recorder.display = "Patient Identified"
* dosageInstruction.text = "15mg/kg every 12 hours"
//* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 12
* dosageInstruction.timing.repeat.periodUnit = #h
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#47625008 "Intravenous route"
* dosageInstruction.route.text = "IV"
* dosageInstruction.doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
* dosageInstruction.doseAndRate[=].type.text = "calculated"
* dosageInstruction.doseAndRate[=].doseQuantity = 15 'mg/kg' "mg/kg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass2-dex4-tablet.fsh

Instance: medicationrequest-example-ach-pass2-dex4-tablet
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass2 Dex4 Tablet"
Description: "MedicationRequest - Example ACH Pass2 - Dex4 4 gm chewable tablet X1"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888892"
* status = #active
* intent = #plan
// * reportedBoolean = true
* category = $medicationrequest-category#outpatient "Outpatient"
* category.text = "Outpatient"
* medicationReference = Reference(medication-example-dex4-tablet)
* medicationReference.display = "Dex4 4 gm chewable tablet X1"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-emergency)
* encounter.display = "Emergency Encounter"
* authoredOn = "2024-01-31T04:46:00-05:00"
* requester = Reference(patient-example-ach-ach-pass2)
//* recorder.display = "Patient Identified"
* dosageInstruction.text = "4 gm chewable tablet X1"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#26643006 "Oral Use"
* dosageInstruction.route.text = "Oral"
* dosageInstruction.doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
* dosageInstruction.doseAndRate[=].type.text = "calculated"
* dosageInstruction.doseAndRate[=].doseQuantity = 4 'g' "g"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass2-heparin.fsh

Instance: medicationrequest-example-ach-pass2-heparin
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass2 Heparin"
Description: "MedicationRequest - Example ACH Pass2 - heparin sodium, 0.5 ML, porcine 10000 UNT/ML Prefilled Syringe"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888895"
* status = #completed
* intent = #order
// * reportedBoolean = false
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-heparin)
* medicationReference.display = "0.5 ML heparin sodium, porcine 10000 UNT/ML Prefilled Syringe"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* authoredOn = "2024-02-01T12:00:00-05:00"
* requester = Reference(patient-example-ach-ach-pass2)
//* recorder.display = "Patient Identified"
* dosageInstruction[+].text = "0.5 mL"
* dosageInstruction[=].site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosageInstruction[=].timing.repeat.frequency = 2
* dosageInstruction[=].timing.repeat.period = 1
* dosageInstruction[=].timing.repeat.periodUnit = #d
* dosageInstruction[=].asNeededBoolean = false
* dosageInstruction[=].route = $sct#47625008 "Intravenous route"
* dosageInstruction[=].route.text = "IV"
//* dosageInstruction[=].doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
//* dosageInstruction[=].doseAndRate[=].type.text = "calculated"
* dosageInstruction[=].doseAndRate[+].doseQuantity = 5000 'uL' "uL"



---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass2-insulin-lispro.fsh

Instance: medicationrequest-example-ach-pass2-insulin-lispro
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass2 Insulin Lispro"
Description: "MedicationRequest - Example ACH Pass2 - Insulin Lispro"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888894"
* status = #completed
* intent = #order
// * reportedBoolean = false
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-insulin-lispro)
* medicationReference.display = "Insulin Lispro"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* authoredOn = "2024-02-01T12:00:00-05:00"
* requester = Reference(patient-example-ach-ach-pass2)
//* recorder.display = "Patient Identified"
* dosageInstruction[+].text = "Give 5 units before breakfast"
* dosageInstruction[=].site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosageInstruction[=].timing.repeat.frequency = 1
* dosageInstruction[=].timing.repeat.period = 1
* dosageInstruction[=].timing.repeat.periodUnit = #d
* dosageInstruction[=].timing.code = http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation#"AM"
* dosageInstruction[=].asNeededBoolean = false
* dosageInstruction[=].route = $sct#47625008 "Intravenous route"
* dosageInstruction[=].route.text = "IV"
//* dosageInstruction[=].doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
//* dosageInstruction[=].doseAndRate[=].type.text = "calculated"
* dosageInstruction[=].doseAndRate[+].doseQuantity.value = 5

* dosageInstruction[+].text = "Give 4 units before dinner"
* dosageInstruction[=].site = $sct#1255295007 "Structure of blood vessel of left upper arm (body structure)"
* dosageInstruction[=].timing.repeat.frequency = 1
* dosageInstruction[=].timing.repeat.period = 1
* dosageInstruction[=].timing.repeat.periodUnit = #d
* dosageInstruction[=].timing.code = http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation#"BED"
* dosageInstruction[=].asNeededBoolean = false
* dosageInstruction[=].route = $sct#47625008 "Intravenous route"
* dosageInstruction[=].route.text = "IV"
//* dosageInstruction[=].doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
//* dosageInstruction[=].doseAndRate[=].type.text = "calculated"
* dosageInstruction[=].doseAndRate[+].doseQuantity.value = 4



---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass2-metformin.fsh

Instance: medicationrequest-example-ach-pass2-metformin
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass2 Metformin"
Description: "MedicationRequest - Example ACH Pass2 - Metformin hydrochloride 1000 MG"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888892"
* status = #active
* intent = #plan
// * reportedBoolean = true
* category = $medicationrequest-category#community "Community"
* category.text = "Home Medication"
* medicationReference = Reference(medication-example-metformin-1000)
* medicationReference.display = "Metformin hydrochloride 1000 MG"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-emergency)
* encounter.display = "Emergency Encounter"
* authoredOn = "2024-01-31T04:22:00-05:00"
* requester = Reference(patient-example-ach-ach-pass2)
* recorder.display = "Patient Identified"
* dosageInstruction.text = "1000 mg tablet by mouth twice daily"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#26643006 "Oral Use"
* dosageInstruction.route.text = "Oral"
* dosageInstruction.doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
* dosageInstruction.doseAndRate[=].type.text = "calculated"
* dosageInstruction.doseAndRate[=].doseQuantity = 1000 'mg' "mg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass3-cipro.fsh

Instance: medicationrequest-example-ach-pass3-cipro
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass3 Cipro"
Description: "MedicationRequest - Example ACH Pass3 - Ciprofloxacin 500 MG"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888892"
* status = #active
* intent = #plan
// * reportedBoolean = true
* category = $medicationrequest-category#community "Community"
* category.text = "Home Medication"
* medicationReference = Reference(medication-example-cipro-500)
* medicationReference.display = "Ciprofloxacin 500 MG"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass3-short-stay)
* encounter.display = "Short Stay"
* authoredOn = "2024-02-01T19:15:00-05:00"
* requester = Reference(patient-example-ach-ach-pass3)
* recorder.display = "Patient Identified"
* dosageInstruction.text = "500mg tablet by mouth twice daily"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#26643006 "Oral Use"
* dosageInstruction.route.text = "Oral"
* dosageInstruction.doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
* dosageInstruction.doseAndRate[=].type.text = "calculated"
* dosageInstruction.doseAndRate[=].doseQuantity = 500 'mg' "mg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass3-enoxaparin.fsh

Instance: medicationrequest-example-ach-pass3-enoxaparin
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass3 Enoxaparin"
Description: "MedicationRequest - Example ACH Pass3 - enoxaparin sodium, 0.4 ML,  100 MG/ML Prefilled Syringe"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888833"
* status = #active
* intent = #order
// * reportedBoolean = false
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-enoxaparin)
* medicationReference.display = "0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass3-acute)
* encounter.display = "Critical care visit"
* authoredOn = "2024-02-02T12:21:00-05:00"
* requester = Reference(patient-example-ach-ach-pass3)
//* recorder.display = "Patient Identified"
* dosageInstruction.text = "0.4ml subcutaneous once daily in abdomen"
* dosageInstruction[=].site = $sct#42972002 "Subcutaneous tissue structure of anterior abdominal wall (body structure)"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#26643006 "Oral Use"
* dosageInstruction.route.text = "Oral"
* dosageInstruction.doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
* dosageInstruction.doseAndRate[=].type.text = "calculated"
* dosageInstruction.doseAndRate[=].doseQuantity = 4000 'uL' "uL"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/MedicationRequest/medicationrequest-example-ach-pass3-metronidazole.fsh

Instance: medicationrequest-example-ach-pass3-metronidazole
InstanceOf: QICoreMedicationRequest
Title: "MedicationRequest - Example ACH Pass3 Metronidazole"
Description: "MedicationRequest - Example ACH Pass3 - Metronidazole 500 MG"
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:2.16.840.1.113883.19.5.1.798"
* identifier.value = "101888832"
* status = #active
* intent = #order
// * reportedBoolean = false
* category = $medicationrequest-category#inpatient "Inpatient"
* category.text = "Inpatient Medication"
* medicationReference = Reference(medication-example-metronidazole)
* medicationReference.display = "Metronidazole 500 MG"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass3-short-stay)
* encounter.display = "Short Stay"
* authoredOn = "2024-02-01T20:33:00-05:00"
* requester = Reference(patient-example-ach-ach-pass3)
//* recorder.display = "Patient Identified"
* dosageInstruction.text = "5mg tablet by mouth twice daily"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#26643006 "Oral Use"
* dosageInstruction.route.text = "Oral"
* dosageInstruction.doseAndRate[0].type = $dose-rate-type#calculated "Calculated"
* dosageInstruction.doseAndRate[=].type.text = "calculated"
* dosageInstruction.doseAndRate[=].doseQuantity = 5 'mg' "mg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass1-blood.fsh

Instance: observation-example-ach-pass1-blood
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass1 Blood"
Description: "Observation - Example ACH Pass1 - Lab: Bacteria identified in Blood by Culture"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass1-blood)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#600-7 "Bacteria identified in Blood by Culture"
* code.text = "Bacteria identified in Blood by Culture"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* encounter = Reference(encounter-example-ach-ach-pass1)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T18:12:00-05:00"
* issued = "2024-02-03T11:42:00-05:00"
* performer = Reference(practitioner-example)
* valueCodeableConcept = $sct#113962001 "Staphylococcus capitis ss capitis (organism)"
* valueCodeableConcept.text = "Staphylococcus capitis"
* specimen = Reference(specimen-example-ach-ach-pass1-blood)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass1-csf.fsh

Instance: observation-example-ach-pass1-csf
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass1 Csf"
Description: "Observation - Example ACH Pass1 - Lab: Serratia marcescens DNA in Specimen by NAA with probe detection"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass1-csf)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#61402-4 "Serratia marcescens DNA [Presence] in Specimen by NAA with probe detection"
* code.text = "Serratia marcescens DNA"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* encounter = Reference(encounter-example-ach-ach-pass1)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T18:13:00-05:00"
* issued = "2024-02-03T11:47:00-05:00"
* performer = Reference(practitioner-example)
* valueCodeableConcept = $sct#260373001 "Detected (qualifier value)"
* specimen = Reference(specimen-example-ach-ach-pass1-csf)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass1-gestational-age.fsh

Instance: observation-example-ach-pass1-gestational-age
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass1 Gestational Age"
Description: "Observation - Example ACH Pass1 - Lab: Gestational age at birth"
Usage: #example
//https://build.fhir.org/ig/HL7/fhir-qi-core/Observation-example-gestation.json.html
* status = #final
* category[us-core] = $observation-category#laboratory "Laboratory"
* code = $loinc#76516-4 "Gestational age--at birth"
* code.text = "Gestational age at birth"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* encounter = Reference(encounter-example-ach-ach-pass1)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-01T16:02:00-05:00"
* issued = "2024-02-01T16:02:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 164 'd' "day"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass1-vitals-weight.fsh

Instance: observation-example-ach-pass1-vitals-weight
InstanceOf: USCoreVitalSignsProfile
Title: "Observation - Example ACH Pass1 Vitals Weight"
Description: "Observation - Example ACH Pass1 - Vitals Signs: Birth weight Measured"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#8339-4 "Birth weight Measured"
* code.text = "Birth Weight"
* subject = Reference(patient-example-ach-ach-pass1)
* subject.display = "Pass1 ACH"
* encounter = Reference(encounter-example-ach-ach-pass1)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-01T16:02:00-05:00"
* issued = "2024-02-01T16:02:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 0.58 'kg' "kg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass2-aptt.fsh

Instance: observation-example-ach-pass2-aptt
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass2 aPTT"
Description: "Observation - Example ACH Pass2 Lab: aPTT in Blood by Coagulation assay"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass2-aptt)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#3173-2  "aPTT in Blood by Coagulation assay"
* code.text = "aPTT"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T11:24:00-05:00"
* issued = "2024-02-02T11:29:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 8 's' "s"
* specimen = Reference(specimen-example-ach-ach-pass2-blood-1)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass2-glucose.fsh

Instance: observation-example-ach-pass2-poc-1
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass2 Poc 1"
Description: "Observation - Example ACH Pass2 Lab: Glucose in Capillary blood by Glucometer - First Encounter Observation"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass2-glucose)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#41653-7 "Glucose [Mass/volume] in Capillary blood by Glucometer"
* code.text = "Glucose"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-01-31T23:01:00-05:00"
* issued = "2024-01-31T23:02:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 53 'g/dL' "d/gL"


Instance: observation-example-ach-pass2-poc-2
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass2 Poc 2"
Description: "Observation - Example ACH Pass2 Lab: Glucose in Capillary blood by Glucometer - Second Encounter Observation"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass2-glucose)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#41653-7 "Glucose [Mass/volume] in Capillary blood by Glucometer"
* code.text = "Glucose"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T10:14:00-05:00"
* issued = "2024-02-02T10:15:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 105 'g/dL' "d/gL"




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass2-hemo-a1c.fsh

Instance: observation-example-ach-pass2-hemo-a1c
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass2 Hemo A1C"
Description: "Observation - Example ACH Pass2 Hemo - Lab: Glucose in Capillary blood by Glucometer"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass2-hemo-a1c)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#41653-7 "Glucose [Mass/volume] in Capillary blood by Glucometer"
* code.text = "Glucose"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-01-31T23:01:00-05:00"
* issued = "2024-01-31T23:52:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 7.5 '%' "%"
* specimen = Reference(specimen-example-ach-ach-pass2-blood-1)




---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass2-hemo.fsh

Instance: observation-example-ach-pass2-hemo
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass2 Hemo"
Description: "Observation - Example ACH Pass2 - Lab: Bacteria identified in Blood by Culture"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass2-hemo)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#600-7 "Bacteria identified in Blood by Culture"
* code.text = "Bacteria identified in Blood by Culture"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-inpatient)
* encounter.display = "Hospital Admission"
* effectiveDateTime = "2024-02-02T11:24:00-05:00"
* issued = "2024-02-02T11:29:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 8 'g/dL' "d/gL"
* specimen = Reference(specimen-example-ach-ach-pass2-blood-2)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass2-vitals-weight.fsh

Instance: observation-example-ach-pass2-vitals-weight
InstanceOf: USCoreVitalSignsProfile
Title: "Observation - Example ACH Pass2 Vitals Weight"
Description: "Observation - Example ACH Pass2 Vitals Signs: Body weight"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#29463-7 "Body weight"
* code.text = "Weight"
* subject = Reference(patient-example-ach-ach-pass2)
* subject.display = "Pass2 ACH"
* encounter = Reference(encounter-example-ach-ach-pass2-emergency)
* encounter.display = "Emergency Encounter"
* effectiveDateTime = "2024-01-31T01:42:00-05:00"
* issued = "2024-01-31T01:42:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 113.4 'kg' "kg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass3-cdiff.fsh

Instance: observation-example-ach-pass3-cdiff
InstanceOf: QICoreLaboratoryResultObservation
Title: "Observation - Example ACH Pass3 C. diff"
Description: "Observation - Example ACH Pass3 - Lab: Clostridioides difficile (C. diff)"
Usage: #example
* status = #final
* basedOn = Reference(servicerequest-example-ach-ach-pass3-cdiff)
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $sct#5933001 "Clostridioides difficile (organism)"
* code.text = "C. Diff."
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
* encounter = Reference(encounter-example-ach-ach-pass3-short-stay)
* encounter.display = "Hospital Admission, Short Stay"
* effectiveDateTime = "2024-02-01T19:02:00-05:00"
* issued = "2024-02-02T15:30:00-05:00"
* performer = Reference(practitioner-example)
* valueCodeableConcept = $sct#10828004 "Positive (qualifier value)"
* specimen = Reference(specimen-example-ach-ach-pass3-stool)

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass3-vitals-height.fsh

Instance: observation-example-ach-pass3-vitals-height
InstanceOf: USCoreVitalSignsProfile
Title: "Observation - Example ACH Pass3 Vitals Height"
Description: "Observation - Example ACH Pass3 Vitals Signs: Body height"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#8302-2 "Body height"
* code.text = "Height"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
* encounter = Reference(encounter-example-ach-ach-pass3-short-stay)
* encounter.display = "Short Stay"
* effectiveDateTime = "2024-02-01T19:21:00-05:00"
* issued = "2024-02-01T19:21:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 176.8 'cm' "cm"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Observation/observation-example-ach-pass3-vitals-weight.fsh

Instance: observation-example-ach-pass3-vitals-weight
InstanceOf: USCoreVitalSignsProfile
Title: "Observation - Example ACH Pass3 Vitals Weight"
Description: "Observation - Example ACH Pass3 Vitals Signs: Body weight"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#29463-7 "Body weight"
* code.text = "Weight"
* subject = Reference(patient-example-ach-ach-pass3)
* subject.display = "Pass3 ACH"
* encounter = Reference(encounter-example-ach-ach-pass3-short-stay)
* encounter.display = "Short Stay"
* effectiveDateTime = "2024-02-01T19:21:00-05:00"
* issued = "2024-02-01T19:21:00-05:00"
* performer = Reference(practitioner-example)
* valueQuantity = 54.4 'kg' "kg"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Organization/organization-example-submitting-organization.fsh

Instance: organization-example-submitting-organization
InstanceOf: NHSNSubmittingOrganization
Title: "Organization - Example Submitting Organization"
Description: "Organization - Submitting Organization Example"
Usage: #example
* identifier[nhsn_org_id].system = "https://www.cdc.gov/nhsn/OrgID"
* identifier[nhsn_org_id].value = "ExampleNHSNSubmitterOrgID"
* active = true
* type = $organization-type#prov "Healthcare Provider"
* name = "Example NHSN Submitter"
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* address.extension.valueCode = #unknown
* telecom.system = #phone
* telecom.value = "5555555551"
* telecom.rank = 1

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Patient/patient-example-ach-ach-pass1.fsh

Instance: patient-example-ach-ach-pass1
InstanceOf: QICorePatient
Title: "Patient - Example ACH Pass1 - LOS/MEN"
Description: "Patient - Example ACH Pass1 - Late Onset Sepsis and Meningitis (LOS/MEN)"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Black or African American"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Hispanic or Latino"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #M
// Not supported by US Core 3.1.1, Can be added for later versions
//* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity"
//* extension[=].valueCodeableConcept = $sct#446151000124109 "Identifies as male gender (finding)"

* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical record number"
* identifier.type.text = "MRN"
* identifier.system = "urn:oid:1.2.5.8.2.7"
* identifier.value = "1601191901010308"
* active = true
* name[0].use = #official
* name[=].text = "Pass1 ACH"
* name[=].family = "ACH"
* name[=].given = "Pass1"
* telecom.system = #phone
* telecom.value = "999-999-9999"
* telecom.use = #home
* gender = #female
* birthDate = "2024-02-01"
* deceasedBoolean = false
* address[0].use = #home
* address[=].type = #both
* address[=].line = "456 Alphabet Street"
* address[=].city = "Lansing"
* address[=].district = "Ingham County"
* address[=].state = "MI"
* address[=].postalCode = "48864"
* address[=].country = "US"

* contact[0].relationship = http://terminology.hl7.org/CodeSystem/v2-0131#N "Next-of-Kin"

* contact[=].name[0].text = "Mom Parent"
* contact[=].name[=].family = "Parent"
* contact[=].name[=].given = "Mom"
* contact[=].address[0].line = "456 Alphabet Street"
* contact[=].address[=].city = "Lansing"
* contact[=].address[=].state = "MI"
* contact[=].address[=].postalCode = "48864"


* communication[0].language = urn:ietf:bcp:47#en-US "English (United States)"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Patient/patient-example-ach-ach-pass2.fsh

Instance: patient-example-ach-ach-pass2
InstanceOf: QICorePatient
Title: "Patient - Example ACH Pass2 - Hypo"
Description: "Patient - Example ACH Pass2 - Hypoglycemia"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "White"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Non Hispanic or Latino"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #F
// Not supported by US Core 3.1.1, Can be added for later versions
//* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity"
//* extension[=].valueCodeableConcept = $sct#446141000124107 "Identifies as female gender (finding)"

* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical record number"
* identifier.type.text = "MRN"
* identifier.system = "urn:oid:1.2.5.8.2.7"
* identifier.value = "1601191902010308"
* active = true
* name[0].use = #official
* name[=].text = "Pass2 ACH"
* name[=].family = "ACH"
* name[=].given = "Pass2"
* telecom.system = #phone
* telecom.value = "999-999-9999"
* telecom.use = #home
* gender = #female
* birthDate = "1965-12-22"
* deceasedDateTime = "2024-02-02T16:22:00-05:00"

* address[0].line = "123 Sesame Street Lansing"
* address[=].city = "Lansing"
* address[=].district = "Ingham County"
* address[=].state = "MI"
* address[=].postalCode = "48864"
* address[=].country = "US"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Patient/patient-example-ach-ach-pass3.fsh

Instance: patient-example-ach-ach-pass3
InstanceOf: QICorePatient
Title: "Patient - Example ACH Pass3 - CDI/HOB"
Description: "Patient - Example ACH Pass3 - Healthcare facility-onset, antibiotic-treated Clostridioides difficile infection / Hospital-onset bacteremia and fungemia (CDI/HOB)"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2028-9 "Asian"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "White"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Non Hispanic or Latino"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #M
// Not supported by US Core 3.1.1, Can be added for later versions
//* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity"
//* extension[=].valueCodeableConcept = $sct#446151000124109 "Identifies as male gender (finding)"

* meta.security[0] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R "Restricted"

* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical record number"
* identifier.type.text = "MRN"
* identifier.system = "urn:oid:1.2.5.8.2.7"
* identifier.value = "1601191903010308"
* active = true
* name[0].use = #official
* name[=].text = "Pass3 ACH"
* name[=].family = "ACH"
* name[=].given = "Pass3"
* telecom.system = #email
* telecom.value = "ACHtestcase@testcase.com"
* telecom.use = #home
* gender = #female
* birthDate = "2007-10-08"

* address[0].line = "5678 Sesame Lansing"
* address[=].city = "Lansing"
* address[=].state = "MI"
* address[=].postalCode = "48864"
* address[=].country = "US"

* communication[0].language = urn:ietf:bcp:47#zh "Chinese"


---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/examples/Practitioner/practitioner-example.fsh

Instance: practitioner-example
InstanceOf: QICorePractitioner
Title: "Practitioner Example"
Description: "An example practitioner"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* name[+].family = "Practitioner"
* name[=].given = "Example"

---

File: repos/HL7_SLASH_nhsn-dqm/input/fsh/profiles/NHSNMeasureBundle.fsh

Profile: NHSNMeasureBundle
Parent: Bundle
Id: nhsn-measure-bundle
Title: "NHSN Measure Bundle"
Description: "This profile defines a Bundle provided by the MeasureServer containing a Measure resource and all related resources (ValueSet, Library, etc.)."
* obeys bundle-no-modifier-extensions and bundle-contain-all-measurereport-references
* entry ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resource"
  * ^slicing.rules = #open
* entry contains
    measure 1..1 
* entry[measure] ^short = "The Measure resource"
  * resource 1..
  * resource only CRMIShareableMeasure
  * ^short = "Bundle entry for the Measure resource"

---

