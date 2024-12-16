File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/AssociatedSituationvalueset.fsh

ValueSet: BodyWeightAssociatedSituationvalueset
Id: BodyWeightAssociatedSituationVS
Title: "Associated Situation value set"
Description: "SELECT SNOMED CT code system values and temporary code system values that describe situations to be considered when interpreting measuerd values."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#118643004 "Cast device (physical object)"
* SCT#257308009 "Oxygenator (physical object)"
* SCT#53350007 "Prosthesis (physical object)"
* SCT#248160001 "Undressed (finding)"
* SolorTemporaryCodeSystem#961000205106 "Wearing street clothes, no shoes (finding)"
* SolorTemporaryCodeSystem#971000205103 "Wearing street clothes with shoes (finding)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BloodPressureCuffSizevalueset.fsh

ValueSet: BloodPressureCuffSizevalueset
Id: bpCuffSizeVS
Title: "Blood Pressure Cuff Size value set"
Description: "SELECT SNOMED CT code system values that describe the size of blood pressure cuff in use."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#720736009 "Blood pressure cuff, pediatric size (physical object)"
* SCT#720737000 "Blood pressure cuff, adult size (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BloodPressureMeasurementBodyLocationPrecoodinated.fsh

ValueSet: BloodPressureMeasurementBodyLocationPrecoodinated
Id: bpmeasbodylocationprecoord
Title: "Blood Pressure Measurement Body Location Precoordinated value set"
Description: "SELECT SNOMED CT code system values that describe the location on the body where the blood pressure was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#49256001 "Structure of dorsal digital artery of foot (body structure)"
* SCT#368469003 "Structure of proper volar digital arteries (body structure)"
* SCT#17137000 "Structure of brachial artery (body structure)"
* SCT#723961002 "Structure of left brachial artery (body structure)"
* SCT#723962009 "Structure of right brachial artery (body structure)"
* SCT#7657000 "Structure of femoral artery (body structure)"
* SCT#113270003 "Structure of left femoral artery (body structure)"
* SCT#69833005 "Structure of right femoral artery (body structure)"
* SCT#45631007 "Structure of radial artery (body structure)"
* SCT#368504007 "Structure of left radial artery (body structure)"
* SCT#368503001 "Structure of right radial artery (body structure)"
* SCT#13363002 "Structure of posterior tibial artery (body structure)"
* SCT#214912001 "Structure of left posterior tibial artery (body structure)"
* SCT#214811007 "Structure of right posterior tibial artery (body structure)"
* SCT#54247002 "Ascending aorta structure (body structure)"
* SCT#281130003 "Descending aorta structure (body structure)"
* SCT#57034009 "Aortic arch structure (body structure)"
* SCT#7832008 "Abdominal aorta structure (body structure)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BloodPressureMeasurementDevicevalueset.fsh

ValueSet: BloodPressureMeasurementDevicevalueset
Id: bpMeasDeviceVS
Title: "Blood Pressure Measurement Device value set"
Description: "SELECT SNOMED CT code system values that describe the isntrument used to measure the blood pressure."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#309641003 "Aneroid sphygmomanometer (physical object)"
* SCT#43770009 "Doppler device (physical object)"
* SCT#469801002 "Invasive blood pressure monitor (physical object)"
* SCT#309642005 "Mercury sphygmomanometer (physical object)"
* SCT#258057004 "Non-invasive blood pressure monitor (physical object)"
* SCT#466093008 "Automatic-inflation electronic sphygmomanometer, non-portable (physical object)"
* SCT#466086009 "Automatic-inflation electronic sphygmomanometer, portable, arm/wrist (physical object)"
* SCT#466139008 "Automatic-inflation electronic sphygmomanometer, portable, finger (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BloodPressureMeasurementMethodvalueset.fsh

ValueSet: BloodPressureMeasurementMethodvalueset
Id: bpMeasMethodVS
Title: "Blood Pressure Measurement Method value set"
Description: "SELECT SNOMED CT code system values that describe how a blood pressure was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#77938009 "Arterial pressure monitoring, invasive method (regime/therapy)"
* SCT#17146006 "Arterial pressure monitoring, non-invasive method (regime/therapy)"
* SCT#37931006 "Auscultation (procedure)"
* SCT#765172009 "Doppler ultrasound (procedure)"
* SCT#13385008 "Mediate auscultation (procedure)"
* SCT#113011001 "Palpation (procedure)"
* SCT#31813000 "Vascular oscillometry (procedure)"
* SolorTemporaryCodeSystem#911000205109 "Measurement of blood pressure using intravascular transducer (procedure)"
* SolorTemporaryCodeSystem#641000205104 "Auscultation - automatic (procedure)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BodyPositionvalueset.fsh

ValueSet: BodyPositionvalueset
Id: bodyPositionVS
Title: "Body Position value set"
Description: "SELECT SNOMED CT code system values the position in which the individual was in during a measurement."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#30212006 "Fowler's position (finding)"
* SCT#26527006 "Inverse Trendelenburg position (finding)"
* SCT#102536004 "Left lateral decubitus position (finding)"
* SCT#414585002 "Left lateral tilt (finding)"
* SCT#10904000 "Orthostatic body position (finding)"
* SCT#1240000 "Prone body position (finding)"
* SCT#102538003 "Recumbent body position (finding)"
* SCT#423413008 "Reverse trendelenburg positioning (finding)"
* SCT#102535000 "Right lateral decubitus position (finding)"
* SCT#415346000 "Right lateral tilt (finding)"
* SCT#33586001 "Sitting position (finding)"
* SCT#40199007 "Supine body position (finding)"
* SCT#34106002 "Trendelenburg position (finding)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BodyTempAssociatedSituationvalueset.fsh

ValueSet: BodyTempAssociatedSituationvalueset
Id: BodyTempAssociatedSituationVS
Title: "Body Temperature Associated Situation value set"
Description: "SELECT SNOMED CT code system values and temporary code system values that describe situations surrounding a body temperature measurement."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#128978002 "Post exercise state (finding)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BodyTemperatureMeasurementBodyLocationvalueset.fsh

ValueSet: BodyTemperatureMeasurementBodyLocationvalueset
Id: bodyTempMeasBodyLocationPrecoordVS
Title: "Body Temperature Measurement Body Location value set"
Description: "SELECT SNOMED CT code system values that describe where on the body the temperature was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#117590005 "Ear structure (body structure)"
* SCT#7569003 "Finger structure (body structure)"
* SCT#52795006 "Forehead structure (body structure)"
* SCT#279549004 "Nasal cavity structure (body structure)"
* SCT#71836000 "Nasopharyngeal structure (body structure)"
* SCT#74262004 "Oral cavity structure (body structure)"
* SCT#34402009 "Rectum structure (body structure)"
* SCT#422543003 "Structure of axillary fossa (body structure)"
* SCT#29707007 "Toe structure (body structure)"
* SCT#42859004 "Tympanic membrane structure (body structure)"
* SCT#89837001 "Urinary bladder structure (body structure)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/BodyTemperatureMeasurementDevicevalueset.fsh

ValueSet: BodyTemperatureMeasurementDevicevalueset
Id: bodyTempMeasurementDeviceVS
Title: "Body Temperature Measurement Device value set"
Description: "SELECT SNOMED CT code system values and temporary code system values that describe the instrument used to measure the body temperature."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#467862000 "Capillary patient thermometer, mercury (physical object)"
* SCT#706158001 "Electronic patient thermometer (physical object)"
* SCT#448735006 "Forehead thermometer (physical object)"
* SCT#700643004 "Infrared patient thermometer, ear (physical object)"
* SCT#700644005 "Infrared patient thermometer, skin (physical object)"
* SCT#462983001 "Liquid-crystal patient thermometer (physical object)"
* SCT#118376009 "Thermocouple (physical object)"
* SCT#464210001 "Thermographic camera (physical object)"
* SCT#448349000 "Tympanic thermometer (physical object)"
* SolorTemporaryCodeSystem#1461000205102 "Digital thermometer (physical object)"
* SolorTemporaryCodeSystem#2331000205106 "Non-contact infrared thermometer (physical object)"
* SolorTemporaryCodeSystem#24031000205108 "Thermoluminescent diode thermometer (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/DefinedLimitsvalueset.fsh

ValueSet: DefinedLimitsvalueset
Id: definedLimitsVS
Title: "Defined Limits value set"
Description: "Select SNOMED CT codes that dsecribe that a measured value does not fall outside those defined by a specific protocol."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#449501000124109 "Within defined limits (finding)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/ExertionPhaseVS.fsh

ValueSet: ExertionPhaseVS
Id: exertionPhaseVS
Title: "Exertion Phase value set"
Description: "SELECT SNOMED CT code system values that contains terms for exercise associated with a measurement."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#255214003 "After exercise (qualifier value)"
* SCT#307166007 "Before exercise (qualifier value)"
* SCT#309604004 "During exercise (qualifier value)"
* SCT#263678003 "At rest (qualifier value)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/HeartRateMeasurementBodyLocationPrecoordinatedvalueset.fsh

ValueSet: HeartRateMeasurementBodyLocationPrecoordinatedvalueset
Id: heartRateMeasBodyLocationPrecoordVS
Title: "Heart Rate Measurement Body Location Precoordinated value set"
Description: "SELECT SNOMED CT code system values that describe where on the body the heart rate was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#32062004 "Common carotid artery structure (body structure)"
* SCT#113263003 "Left common carotid artery structure (body structure)"
* SCT#65355003 "Right common carotid artery structure (body structure)"
* SCT#13383001 "Structure of apex of heart (body structure)"
* SCT#17137000 "Structure of brachial artery (body structure)"
* SCT#86547008 "Structure of dorsalis pedis artery (body structure)"
* SCT#7657000 "Structure of femoral artery (body structure)"
* SCT#723961002 "Structure of left brachial artery (body structure)"
* SCT#792817008 "Structure of left dorsalis pedis artery (body structure)"
* SCT#113270003 "Structure of left femoral artery (body structure)"
* SCT#25885001 "Structure of left popliteal artery (body structure)"
* SCT#214912001 "Structure of left posterior tibial artery (body structure)"
* SCT#50408007 "Structure of left pulmonary artery"
* SCT#368504007 "Structure of left radial artery (body structure)"
* SCT#24781000205105 "Structure of left superficial temporal artery (body structure)"
* SCT#368506009 "Structure of left ulnar artery (body structure)"
* SCT#43899006 "Structure of popliteal artery (body structure)"
* SCT#13363002 "Structure of posterior tibial artery (body structure)"
* SCT#45631007 "Structure of radial artery (body structure)"
* SCT#723962009 "Structure of right brachial artery (body structure)"
* SCT#792816004 "Structure of right dorsalis pedis artery (body structure)"
* SCT#69833005 "Structure of right femoral artery (body structure)"
* SCT#57832007 "Structure of right popliteal artery (body structure)"
* SCT#368503001 "Structure of right radial artery (body structure)"
* SCT#214811007 "Structure of right posterior tibial artery (body structure)"
* SCT#78480002 "Structure of right pulmonary artery (body structure)"
* SCT#24791000205107 "Structure of right superficial temporal artery (body structure)"
* SCT#368505008 "Structure of right ulnar artery (body structure)"
* SCT#15672000 "Structure of superficial temporal artery (body structure)"
* SCT#44984001 "Structure of ulnar artery (body structure)"
* SolorTemporaryCodeSystem#24781000205105 "Structure of left superficial temporal artery (body structure)"
* SolorTemporaryCodeSystem#24791000205107 "Structure of right superficial temporal artery (body structure)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/HeartRateMeasurementDevicevalueset.fsh

ValueSet: HeartRateMeasurementDevicevalueset
Id: heartRateMeasDeviceVS
Title: "Heart Rate Measurement Device value set"
Description: "SELECT SNOMED CT code system values that describe the instrument used to measure the heart rate."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#467178001 "Bedside heart rate monitor (physical object)"
* SCT#43770009 "Doppler device (physical object)"
* SCT#86184003 "Electrocardiographic monitor and recorder (physical object)"
* SCT#469801002 "Invasive blood pressure monitor (physical object)"
* SCT#258057004 "Non-invasive blood pressure monitor (physical object)"
* SCT#448703006 "Pulse oximeter (physical object)"
* SCT#466093008 "Automatic-inflation electronic sphygmomanometer, non-portable (physical object)"
* SCT#466086009 "Automatic-inflation electronic sphygmomanometer, portable, arm/wrist (physical object)"
* SCT#466139008 "Automatic-inflation electronic sphygmomanometer, portable, finger (physical object)"
* SCT#711337005 "Implantable pulmonary artery pressure monitoring system (physical object)"
* SCT#774007007 "Wearable neonatal heart rate meter (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/HeartRateMeasurementMethodvalueset.fsh

ValueSet: HeartRateMeasurementMethodvalueset
Id: heartRateMeasMethodVS
Title: "Heart Rate Measurement Method value set"
Description: "SELECT SNOMED CT code system values that describe how the heart rate was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#37931006 "Auscultation (procedure)"
* SCT#268447006 "Doppler studies (procedure)"
* SCT#29303009 "Electrocardiographic procedure (procedure)"
* SCT#13385008 "Mediate auscultation (procedure)"
* SCT#264598005 "Oximetry (procedure)"
* SCT#113011001 "Palpation (procedure)"
* SCT#277917001 "Thoracic impedance cardiography (procedure)"
* SCT#239516002 "Monitoring procedure (regime/therapy)"
* SolorTemporaryCodeSystem#641000205104 "Auscultation - automatic (procedure)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/HeightBodyPositionvalueset.fsh

ValueSet: HeightBodyPositionvalueset
Id: heightBodyPositionVS
Title: "Height Body Position value set"
Description: "SELECT SNOMED CT code system values that describe the position the individual was in during the height measurement."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#30212006 "Fowler's position (finding)"
* SCT#26527006 "Inverse Trendelenburg position (finding)"
* SCT#102536004 "Left lateral decubitus position (finding)"
* SCT#414585002 "Left lateral tilt (finding)"
* SCT#10904000 "Orthostatic body position (finding)"
* SCT#1240000 "Prone body position (finding)"
* SCT#102538003 "Recumbent body position (finding)"
* SCT#102535000 "Right lateral decubitus position (finding)"
* SCT#33586001 "Sitting position (finding)"
* SCT#40199007 "Supine body position (finding)"
* SCT#34106002 "Trendelenburg position (finding)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/HeightLengthMeasurementDevicevalueset.fsh

ValueSet: HeightLengthMeasurementDevicevalueset
Id: heightLengthMeasDeviceVS
Title: "Height Length Measurement Device value set"
Description: "SELECT SNOMED CT code system values that describe the instrument used to measure the body height/length."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#102304005 "Measuring ruler, device (physical object)"
* SCT#51791000 "Measuring tape, device (physical object)"
* SolorTemporaryCodeSystem#24311000205101 "Stadiometer (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/HeightLengthMeasurementMethodvalueset.fsh

ValueSet: HeightLengthMeasurementMethodvalueset
Id: heightLengthMeasMethodVS
Title: "Height Length Measurement Method value set"
Description: "SELECT SNOMED CT code system values that describe how the height/length was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#414135002 "Estimated (qualifier value)"
* SCT#258104002 "Measured (qualifier value)"
* SCT#733985002 "Reported (qualifier value)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/LengthUOMVS.fsh

ValueSet: LengthUOMVS
Id: LengthUOMVS
Title: "Length Units of Measure value set"
Description: "SELECT UCUM code system values that give the units of measure for the value of a measured length."
* unitsofmeasure#cm "Centimeter"
* unitsofmeasure#[in_i] "Inch"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/LowOnlyNumericResultInterpretationNom.fsh

ValueSet: LowOnlyNumericResultInterpretationNom
Id: LowOnlyNumericResultIntVS
Title: "Low Only Numeric Result Interpretation value set"
Description: "A valueset of interpretation codes that contains only lower than normal terms."
* v3-ObservationInterpretation#A "Abnormal"
* v3-ObservationInterpretation#L "Lower Than Normal"
* v3-ObservationInterpretation#LL "Panic Low"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/MeasurementProtocolVS.fsh

ValueSet: MeasurementProtocolVS
Id: MeasurementProtocolVS
Title: "Measurement Protocol value set"
Description: "Temporary cody system values that describe teh set of rules used for a given measurement procedure."
* MeasurementProtocolTemporaryCodeSystem#AOBP "Automated office blood pressure protocol"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/MeasurementSettingVS.fsh

ValueSet: MeasurementSettingVS
Id: MeasSettingVS
Title: "Measurement Setting value set"
Description: "SELECT SNOMED CT code system values that contains terms that indicate the surroundings the individual was in during the measurement (i.e. home, clinic, hospital, etc.)."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#285201006 "Hospital environment (environment)"
* SCT#264362003 "Home (environment)"
* SCT#257585005 "Clinic (environment)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/NumericResultInterpretationNom.fsh

ValueSet: NumericResultInterpretationNom
Id: NumericResultIntVS
Title: "Numeric Result Interpretation value set"
Description: "The HL7 V3:ObservationInterpretation code set (OID: 2.16.840.1.113883.5.83) that describes interpretations associated with a measured value."
* v3-ObservationInterpretation#A "Abnormal"
* v3-ObservationInterpretation#H "Higher Than Normal"
* v3-ObservationInterpretation#L "Lower Than Normal"
* v3-ObservationInterpretation#HH "Panic High"
* v3-ObservationInterpretation#LL "Panic Low"
* v3-ObservationInterpretation#N "Normal"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/NumericResultInterpretationNonPanic.fsh

ValueSet: NumericResultInterpretationNonPanic
Id: NumericResultIntNonPanicVS
Title: "Numeric Result Interpretation without panic values, value set"
Description: "The HL7 V3:ObservationInterpretation code set (OID: 2.16.840.1.113883.5.83) that describes interpretations associated with a measured value, constrained to terms that are not those associated with 'panic' terms."
* v3-ObservationInterpretation#A "Abnormal"
* v3-ObservationInterpretation#H "Higher Than Normal"
* v3-ObservationInterpretation#L "Lower Than Normal"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/OxygenSaturationBodyLocationvalueset.fsh

ValueSet: OxygenSaturationBodyLocationvalueset
Id: sPO2BodyLocationVS
Title: "Oxygen Saturation Body Location value set"
Description: "Select SNOMED CT codes. An set of codes for the location at which oxygen saturation was assessed."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#48800003 "Ear lobule structure (body structure)"
* SCT#7569003 "Finger structure (body structure)"
* SCT#52795006 "Forehead structure (body structure)"
* SCT#29707007 "Toe structure (body structure)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/RespiratoryRateMeasurementDevicevalueset.fsh

ValueSet: RespiratoryRateMeasurementDevicevalueset
Id: respiratoryRateMeasDeviceVS
Title: "Respiratory Rate Measurement Device value set"
Description: "SELECT SNOMED CT code system values that describe instruments used to measure respiratory rates."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#717730001 "Impedance pneumography recording/analysis system (physical object)"
* SCT#334990001 "Peak flow meter (physical object)"
* SCT#462575001 "Patient monitoring system module, electrocardiographic/respiratory (physical object)"
* SCT#463005003 "Patient monitoring system module, respiratory (physical object)"
* SolorTemporaryCodeSystem#23921000205109 "Respiration strain gauge (physical object)"
* SolorTemporaryCodeSystem#23861000205107 "Capnograph sensor device (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/RespiratoryRateMeasurementMethodvalueset.fsh

ValueSet: RespiratoryRateMeasurementMethodvalueset
Id: respiratoryRateMeasMethodVS
Title: "Respiratory Rate Measurement Method value set"
Description: "SELECT SNOMED CT code system values that describe how the respiratory rate was measured."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#37931006 "Auscultation (procedure)"
* SCT#32750006 "Inspection (procedure)"
* SCT#239516002 "Monitoring procedure (regime/therapy)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/SensorDescriptionvalueset.fsh

ValueSet: SensorDescriptionvalueset
Id: sensorDescriptionVS
Title: "Sensor Description value set"
Description: "SELECT SNOMED CT code system values that describe the kind of sensore used to measure an oxygen saturation via pulse oximetry."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#706202002 "Pulse oximeter probe (physical object"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/SleepStatusvalueset.fsh

ValueSet: SleepStatusvalueset
Id: sleepStatusVS
Title: "Sleep Status value set"
Description: "SELECT SNOMED CT code system values that contains terms used to indicate the state of wakefulness during measurement."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#248220008 "Asleep (finding)"
* SCT#248218005 "Awake (finding)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/TemperatureUOMVS.fsh

ValueSet: TemperatureUOMVS
Id: TemperatureUOMVS
Title: "Temperature Units of Measure value set"
Description: "SELECT UCUM code system values that describe the units of measure associated with a temperature value."
* unitsofmeasure#Cel "degree Celcius"
* unitsofmeasure#[degF] "degree Fahrenheit"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/WeightMeasurementDevice.fsh

ValueSet: WeightMeasurementDevice
Id: weightMeasurementDeviceVS
Title: "Weight Measurement Device value set"
Description: "SELECT SNOMED CT code system values that descibe the instrument used to measure the body weight."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#466289007 "Bed scale (physical object)"
* SCT#444063009 "Broselow Luten color coding system for pediatric weight estimation (assessment scale)"
* SCT#720689000 "Chair scale (physical object)"
* SCT#469204003 "Floor scale, electronic (physical object)"
* SCT#469787007 "Floor scale, mechanical (physical object)"
* SCT#58514003 "Infant scale (physical object)"
* SCT#462242008 "Patient sling scale (physical object)"
* SCT#466532009 "Wheelchair scale (physical object)"
* SolorTemporaryCodeSystem#24181000205106 "Patient lift scale (physical object)"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/valuesets/WeightUOMVS.fsh

ValueSet: WeightUOMVS
Id: WeightUOMVS
Title: "Weight Units of Measure value set"
Description: "SELECT UCUM code system values that desceibe the units of measure associated with the measured weight value."
* unitsofmeasure#g "gram"
* unitsofmeasure#kg "kilogram"
* unitsofmeasure#[lb_av] "pound"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/aliases.fsh

Alias:   SolorTemporaryCodeSystem = http://hl7.org/fhir/us/vitals/CodeSystem/SolorTemporaryCodeSystem
Alias:   unitsofmeasure = http://unitsofmeasure.org
Alias:   v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias:   APCTemporaryCodeSystem = http://hl7.org/fhir/us/vitals/CodeSystem/APCTemporaryCodeSystem
Alias:   USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias:   USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   USCoreBirthSex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias:   USCoreRace = http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
Alias:   USCoreEthnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity
Alias:   VitalSigns = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias:   CoreHeartRate = http://hl7.org/fhir/StructureDefinition/heartrate
Alias:   CoreHeight = http://hl7.org/fhir/StructureDefinition/bodyheight
Alias:   ExtBodyPosition = http://hl7.org/fhir/StructureDefinition/observation-bodyPosition
Alias:   ExtDeviceCode = http://hl7.org/fhir/StructureDefinition/observation-deviceCode
Alias:   USCorePulsOx = http://hl7.org/fhir/us/core/StructureDefinition/us-core-pulse-oximetry
Alias:   BP = http://hl7.org/fhir/StructureDefinition/bp
Alias:   BMI = http://hl7.org/fhir/StructureDefinition/bmi
Alias:   BodyTemp = http://hl7.org/fhir/StructureDefinition/bodytemp
Alias:   CoreBodyWeight = http://hl7.org/fhir/StructureDefinition/bodyweight
Alias:   HeadCirc = http://hl7.org/fhir/StructureDefinition/headcircum
Alias:   O2Sat = http://hl7.org/fhir/StructureDefinition/oxygensat
Alias:   RespRate = http://hl7.org/fhir/StructureDefinition/resprate
Alias:   VitalsPan = http://hl7.org/fhir/StructureDefinition/vitalspanel 
Alias:   ObsCat = http://terminology.hl7.org/CodeSystem/observation-category

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/AverageBloodPressure.fsh

Profile: AverageBloodPressure
Parent: Observation
Id: average-blood-pressure
Title: "Average Blood Pressure"
Description: "A calculated average of two or more blood pressure readings in a specified time period or according to a specified algorithm or protocol.  The average blood pressure has a systolic and a diastolic component."
* extension contains
    ExtBodyPosition named BodyPosition 0..1 MS and
    ExerciseAssociationExt named exerciseAssociation 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS and
    MeasurementProtocol named MeasurementProtocol 0..1 MS
* extension[BodyPosition] ^short = "Body Position"
* extension[exerciseAssociation] ^short = "Exercise Association"
* extension[MeasurementSetting] ^short = "Measurement setting"
* extension[MeasurementProtocol] ^short = "Rules and algorithm for Average Blood Pressure calculation."
* status MS
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = ObsCat#vital-signs
* code = LNC#96607-7
* code ^short = "Blood pressure panel; mean systolic and mean diastolic pressures"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] 0..0
* bodySite MS
* bodySite from BloodPressureMeasurementBodyLocationPrecoodinated (extensible)
* bodySite ^binding.description = "A set of codes that describe where on/in the body an observation or procedure took place"
* method MS
* method from BloodPressureMeasurementMethodvalueset (extensible)
* method ^binding.description = "A set of codes that describe the method used to measure a blood pressure"
* specimen 0..0
* device 0..1 MS
* device only Reference(BloodPressureDevice)
* device ^short = "Blood Pressure Device"
* component MS
* component ^slicing.discriminator.type = #pattern
* component ^slicing.discriminator.path = "code"
* component ^slicing.ordered = false
* component ^slicing.rules = #open
* component ^short = "Blood pressure components"
* component contains
    SystolicBP 1..1 and
    DiastolicBP 0..1
* component[SystolicBP] ^short = "Systolic blood pressure mean"
* component[SystolicBP].code = LNC#96608-5
* component[SystolicBP].code MS
* component[SystolicBP].code ^short = "Systolic blood pressure mean"
* component[SystolicBP].value[x] only Quantity
* component[SystolicBP].valueQuantity MS
* component[SystolicBP].valueQuantity.value 1..1 MS
* component[SystolicBP].valueQuantity.unit 1..1 MS
* component[SystolicBP].valueQuantity.system 1..1 MS
* component[SystolicBP].valueQuantity.system only uri
* component[SystolicBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[SystolicBP].valueQuantity.code 1..1 MS
* component[SystolicBP].valueQuantity.code only code
* component[SystolicBP].valueQuantity.code = #mm[Hg] (exactly)
* component[DiastolicBP] ^short = "Diastolic blood pressure mean"
* component[DiastolicBP].code = LNC#96609-3
* component[DiastolicBP].code MS
* component[DiastolicBP].code ^short = "Diastolic blood pressure mean"
* component[DiastolicBP].value[x] only Quantity
* component[DiastolicBP].valueQuantity MS
* component[DiastolicBP].valueQuantity.value 1..1 MS
* component[DiastolicBP].valueQuantity.unit 1..1 MS
* component[DiastolicBP].valueQuantity.system 1..1 MS
* component[DiastolicBP].valueQuantity.system only uri
* component[DiastolicBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[DiastolicBP].valueQuantity.code 1..1 MS
* component[DiastolicBP].valueQuantity.code only code
* component[DiastolicBP].valueQuantity.code = UCUM#mm[Hg] (exactly)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/BloodPressureDevice.fsh

Profile: BloodPressureDevice
Parent: Device
Id: bp-device
Title: "Blood Pressure Device"
Description: "A profile of the Device resource used specifically for blood pressure devices and includes an extension for blood pressure cuff size."
* extension contains 
    BloodPressureCuffSizeExt named cuffSize 0..*
* extension[cuffSize] ^short = "Cuff Size"
* type from BloodPressureMeasurementDevicevalueset (extensible)

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/BloodPressurePanel.fsh

Profile: BloodPressurePanel
Parent: Observation
Id: blood-pressure-panel
Title: "Blood Pressure Panel"
Description: "Blood Pressure Panel; a grouping of systolic, diastolic, and mean arterial blood pressure components."
* extension contains
    ExtBodyPosition named bodyPosition 0..1 MS and
    SleepStatus named sleepStatus 0..1 MS and
    ExerciseAssociationExt named exerciseAssociation 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS
* extension[bodyPosition] ^short = "Body Position"
* extension[bodyPosition].valueCodeableConcept from BodyPositionvalueset (extensible)
* extension[sleepStatus] ^short = "Sleep Status"
* extension[exerciseAssociation] ^short = "Exercise Association"
* extension[MeasurementSetting] ^short = "Measurement setting"
* status MS
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = ObsCat#vital-signs
* code = LNC#85354-9
* code ^short = "Blood pressure panel with all children optional"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] 0..0
* interpretation 0..1
* interpretation only CodeableConcept
* interpretation from NumericResultInterpretationNom (extensible)
* bodySite MS
* bodySite from BloodPressureMeasurementBodyLocationPrecoodinated (extensible)
* bodySite ^binding.description = "A set of codes that describe where on/in the body an observation or procedure took place"
* method MS
* method from BloodPressureMeasurementMethodvalueset (extensible)
* method ^binding.description = "A set of codes that describe the method used to measure a blood pressure"
* specimen 0..0
* device 0..1 MS
* device only Reference(BloodPressureDevice)
* device ^short = "Blood Pressure Device"
* component MS
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.ordered = false
* component ^slicing.rules = #open
* component ^short = "Blood pressure components"
* component contains
    SystolicBP 1..1 and
    DiastolicBP 0..1 and
    MeanArterialBP 0..1 MS
* component[SystolicBP] ^short = "Systolic Blood Pressure"
* component[SystolicBP].code = LNC#8480-6
* component[SystolicBP].code MS
* component[SystolicBP].code ^short = "Systolic blood pressure"
* component[SystolicBP].value[x] only Quantity
* component[SystolicBP].valueQuantity MS
* component[SystolicBP].valueQuantity.value 1..1 MS
* component[SystolicBP].valueQuantity.unit 1..1 MS
* component[SystolicBP].valueQuantity.system 1..1 MS
* component[SystolicBP].valueQuantity.system only uri
* component[SystolicBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[SystolicBP].valueQuantity.code 1..1 MS
* component[SystolicBP].valueQuantity.code only code
* component[SystolicBP].valueQuantity.code = UCUM#mm[Hg] (exactly)
* component[DiastolicBP] ^short = "Diastolic Blood Pressure"
* component[DiastolicBP].code = LNC#8462-4
* component[DiastolicBP].code MS
* component[DiastolicBP].code ^short = "Diastolic blood pressure"
* component[DiastolicBP].value[x] only Quantity
* component[DiastolicBP].valueQuantity MS
* component[DiastolicBP].valueQuantity.value 1..1 MS
* component[DiastolicBP].valueQuantity.unit 1..1 MS
* component[DiastolicBP].valueQuantity.system 1..1 MS
* component[DiastolicBP].valueQuantity.system only uri
* component[DiastolicBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[DiastolicBP].valueQuantity.code 1..1 MS
* component[DiastolicBP].valueQuantity.code only code
* component[DiastolicBP].valueQuantity.code = UCUM#mm[Hg] (exactly)
* component[MeanArterialBP] ^short = "Mean Arterial Blood Pressure"
* component[MeanArterialBP].code = LNC#8478-0
* component[MeanArterialBP].code MS
* component[MeanArterialBP].code ^short = "Mean blood pressure"
* component[MeanArterialBP].value[x] only Quantity
* component[MeanArterialBP].valueQuantity MS
* component[MeanArterialBP].valueQuantity.value 1..1 MS
* component[MeanArterialBP].valueQuantity.unit 1..1 MS
* component[MeanArterialBP].valueQuantity.system 1..1 MS
* component[MeanArterialBP].valueQuantity.system only uri
* component[MeanArterialBP].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[MeanArterialBP].valueQuantity.code 1..1 MS
* component[MeanArterialBP].valueQuantity.code only code
* component[MeanArterialBP].valueQuantity.code = UCUM#mm[Hg] (exactly)



---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/BodyLength.fsh

Profile: BodyLength
Parent: VitalSigns
Id: body-length
Title: "Body Length"
Description: "The measurement in centimeters or inches from the top of the head to bottom of the heel, taken while lying down."
* extension contains
    ExtDeviceCode named measurementDevice 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS
* extension[measurementDevice].value[x] only CodeableConcept
* extension[measurementDevice].valueCodeableConcept from HeightLengthMeasurementDevicevalueset (extensible)
* extension[measurementDevice] ^short = "Measurement Device Type"
* extension[MeasurementSetting] ^short = "Measurement setting"
* status MS
* code = LNC#8306-3
* code ^short = "Body height --lying"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code from LengthUOMVS (extensible)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNonPanic (extensible)
* method from HeightLengthMeasurementMethodvalueset (extensible)

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/BodyMassIndex.fsh

Profile: BodyMassIndex
Parent: BMI 
Id: body-mass-index
Title: "Body Mass Index"
Description: "A numerical index based on an individual's weight in kilograms divided by the square of their height in meters."
* extension contains 
    MeasurementSettingExt named MeasurementSetting 0..1 MS
* extension[MeasurementSetting] ^short = "Measurement setting"
* status MS
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code = UCUM#kg/m2 (exactly)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNonPanic (extensible)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/BodyTemperature.fsh

Profile: BodyTemperature
Parent: BodyTemp
Id: body-temperature
Title: "Body Temperature"
Description: "The measured heat of an individual's body."
* extension contains
    ExtDeviceCode named measurmentDevice 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS and
    AssociatedSituationExt named associatedSituation 0..1 MS
* extension[measurmentDevice].value[x] only CodeableConcept
* extension[measurmentDevice].valueCodeableConcept from BodyTemperatureMeasurementDevicevalueset (extensible)
* extension[measurmentDevice] ^short = "Measurement Device Type"
* extension[MeasurementSetting] ^short = "Measurement setting"
* extension[associatedSituation].value[x] only CodeableConcept
* extension[associatedSituation].valueCodeableConcept from BodyTempAssociatedSituationvalueset (example)
* extension[associatedSituation] ^short = "Associated situation"
* status MS
* code ^short = "Body temperature"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code from TemperatureUOMVS (required)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNom (extensible)
* bodySite MS
* bodySite from BodyTemperatureMeasurementBodyLocationvalueset (extensible)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/BodyWeight.fsh

Profile: BodyWeight
Parent: CoreBodyWeight
Id: body-weight
Title: "Body Weight"
Description: "The measured mass of an individual's body."
* extension contains
    ExtDeviceCode named measurmentDevice 0..1 MS and
    AssociatedSituationExt named associatedSituation 0..1 MS and
    MeasurementSettingExt named measurementSetting 0..1 MS
* extension[measurmentDevice].value[x] only CodeableConcept
* extension[measurmentDevice].valueCodeableConcept from WeightMeasurementDevice (extensible)
* extension[measurmentDevice] ^short = "Measurement Device Type"
* extension[associatedSituation].value[x] only CodeableConcept
* extension[associatedSituation].valueCodeableConcept  from BodyWeightAssociatedSituationvalueset (extensible)
* extension[associatedSituation] ^short = "Associated Situation"
* extension[measurementSetting] ^short = "Measurement setting"
* status MS
* code ^short = "Body weight"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code from WeightUOMVS (required)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNonPanic (extensible)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/CodeSystemAliases.fsh

// Code Systems
Alias:   LNC = http://loinc.org
Alias:   LNCAL = http://loinc.org/vs/
Alias:   SCT = http://snomed.info/sct
Alias:   UCUM = http://unitsofmeasure.org
Alias:   MTH = http://ncimeta.nci.nih.gov
Alias:   ICD10CM = http://hl7.org/fhir/sid/icd-10-cm 
Alias:   RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias:   CPT = http://www.ama-assn.org/go/cpt
Alias:   ICD10PCS = http://www.nlm.nih.gov/research/umls/icd10pcs
Alias:   AJCC = http://cancerstaging.org
Alias:   GTR = http://www.ncbi.nlm.nih.gov/gtr
Alias:   CLINVAR = http://www.ncbi.nlm.nih.gov/clinvar
Alias:   IDTYPE = http://terminology.hl7.org/CodeSystem/v2-0203
Alias:   HGNC = http://www.genenames.org/geneId
Alias:   HGVS = http://varnomen.hgvs.org
Alias:   SPTY = http://terminology.hl7.org/CodeSystem/v2-0487
Alias:   ClinStatus = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias:   VerStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias:   MedStatus = http://hl7.org/fhir/CodeSystem/medication-statement-status
Alias:   ObsStatus = http://hl7.org/fhir/ValueSet/observation-status
Alias:   MedCat = http://terminology.hl7.org/CodeSystem/medication-statement-category
Alias:   ObsCat = http://terminology.hl7.org/CodeSystem/observation-category
Alias:   ObsInt = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias:   DiagnosticService = http://terminology.hl7.org/CodeSystem/v2-0074
Alias:   OmbRaceCat = urn:oid:2.16.840.1.113883.6.238
Alias:   ISO = urn:iso:std:iso:3166
Alias:   ISOS = urn:iso:std:iso:3166:-2
Alias:   YesNo = https://terminology.hl7.org/ValueSet/v2-0136
Alias:   NUCC = http://nucc.org/provider-taxonomy
Alias:   LabObs = COVID19LabValuesCS
Alias:   CVX = http://hl7.org/fhir/sid/cvx
Alias:   STATUS = http://hl7.org/fhir/ValueSet/observation-status
Alias:   CondCat = http://terminology.hl7.org/CodeSystem/condition-category
Alias:   DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias:   EX = http://example.org


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/codeSystems.fsh

CodeSystem: MeasurementProtocolTemporaryCodeSystem
Id: MeasurementProtocolTemporaryCodeSystem
Title: "Measurement Protocol Temporary Code System"
Description: "This is a temporary code system for terms that are not yet defined in either SNOMED CT nor Solor.  This will be deprecated when the terms are defined in either of those systems."
* ^caseSensitive = false
* #AOBP "Automated office blood pressure protocol" "A blood pressure measurement method using an automated oscillometeric sphygmomanometer with the patient resting and alone in a quite place."

CodeSystem: OrganizationHSPCOrganizationType
Id: organization-hspc-organizationtype
Title: "HSPC Organization Type Code System"
Description: "The set of codes that describe a kind of organization."
* ^caseSensitive = false
* #526758010 "Clinic" "A place where outpatients are provided medical treatments or advices."
* #526758011 "Cancer Center" "A center where patients with cancer are cared and treated."
* #526758012 "Dental Office" "A place where dental services are provided."
* #526758013 "Diagnostic Imaging Center" "A center where patients are provided imaging services."
* #526758014 "Dialysis Center" "A center where patients with kidney diseases are provided dialysis services."
* #526758015 "Educational Institute" "A place where people of different ages gain an education."
* #526758016 "Federal Agency" "A government organization set up for a specific purpose such as the management of resources, financial oversight of industries or national security issues."
* #526758017 "Home Health" "An organization which provides assistant health care for people at their homes."
* #526758018 "Hospital" "An institution where the sick or injuried people are provided medical and surgical treatments and nursing cares."
* #526758019 "Hospital Network" "A network or group of hospitals that work together to coordinate and deliver a broad spectrum of services to their community."
* #526758020 "Insurance Company" "A financial institution that sells insurance."
* #526758021 "Medical Laboratory" "A laboratory where tests are done on clinical specimens in order to get information about the health of a patient as pertaining to the diagnosis, treatment, and prevention of disease."
* #526758022 "Nursing Care Facility" "A facility providing skilled, intermediate or custodial nursing care."
* #526758023 "Pharmacy" "A store or a place in the hospital where drugs and medicines are dispensed and sold."
* #526758024 "Surgical Center" "A center where outpatients are provided surgical services."

CodeSystem: SolorTemporaryCodeSystem
Id: SolorTemporaryCodeSystem
Title: "SNOMED CT Solor Extension Temporary Code System"
Description: "A set of codes that are defined in the Solor extension to the SNOMED CT code system. To be used until they are adopted by SNOMED CT."
* ^caseSensitive = false
* #1461000205102 "Digital thermometer (physical object)" "A device used to measure temperature with digital readout."
* #2331000205106 "Non-contact infrared thermometer (physical object)" "A device used to measure temperature via infrared technology that does not come into contact with the skin."
* #24031000205108 "Thermoluminescent diode thermometer (physical object)" "A device used to measure temperature that uses a thermoluminescent diode."
* #641000205104 "Computer aided auscultation (procedure)" "A procedure that uses a computer aided device to measure blood pressure."
* #911000205109 "Measurement of blood pressure using intravascular transducer (procedure)" "A device that measures blood pressure intravascularly via a trandsducer."
* #961000205106 "Wearing street clothes, no shoes (finding)" "The subject is wearing clothing but not shoes."
* #971000205103 "Wearing street clothes with shoes (finding)" "The subject is wearing clothing and shoes."
* #24311000205101 "Stadiometer (physical object)" "A device used to measure a subject's height."
* #23861000205107 "Capnograph sensor device (physical object)" "A device that captures expelled air, either via nasal prongs or CPAP and is used to measure the number of breaths taken per minute."
* #23921000205109 "Respiration strain gauge (physical object)" "A device wrapped around a subject chest that measures the number of times a subject's chest expands with each inhalation.  This counts the breaths per minute."
* #24181000205106 "Patient lift scale (physical object)" "A device used to lift a patient out of or into bed and also has a scale to measure the subject's weight."
* #24781000205105 "Structure of left superficial temporal artery (body structure)" "A body structure of the superficial tempral artery on the left side of the body.  Currently part of the Solor SNOMED CT extension."
* #24791000205107 "Structure of right superficial temporal artery (body structure)" "A body structure of the superficial tempral artery on the right side of the body.  Currently part of the Solor SNOMED CT extension."

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/examples.fsh

Instance: patient-example
InstanceOf: Patient
Description: "Patient example"
Usage: #example
* meta.security = EX#HTEST "test health data"
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2028-9 "Asian"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Mixed"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Hispanic or Latino"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #F
* identifier.use = #usual
* identifier.type = EX#MR "Medical record number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name.family = "Shaw"
* name.given[0] = "Amy"
* name.given[+] = "V."
* telecom[0].system = #phone
* telecom[=].value = "555-555-5555"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "amy.shaw@example.com"
* gender = #female
* birthDate = "1954-02-20"
* address.line = "49 Meadow St"
* address.city = "Mounds"
* address.state = "OK"
* address.postalCode = "74047"
* address.country = "US"

Instance: practitioner-example
InstanceOf: Practitioner
Description: "Practitioner example"
Usage: #example
* meta.security = EX#HTEST "test health data"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339108"
* name.family = "Bone"
* name.given = "Ronald"
* name.prefix = "Dr"
* address.use = #home
* address.line = "1003 Healthcare Drive"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"

Instance: AverageBloodPressure-example
InstanceOf: average-blood-pressure
Description: "Average Blood Pressure example"
Usage: #example
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/MeasurementSettingExt"
* extension.valueCodeableConcept = SCT#264362003 "Home (environment)"
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/MeasurementProtocolExt"
* extension.valueCodeableConcept = MeasurementProtocolTemporaryCodeSystem#AOBP "Automated office blood pressure protocol"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* code = LNC#96607-7 "Blood pressure panel mean systolic and mean diastolic"
* subject.display = "OldMan 1234"
* effectivePeriod.start = "2019-10-16T12:12:29-09:00"
* effectivePeriod.end = "2019-10-16T12:42:29-09:00"
* issued = "2019-10-16T12:12:29-10:00"
* performer.display = "OldMan 1234"
* bodySite = SCT#723961002 "Structure of left brachial artery (body structure)"
* device = Reference(BPDevice2-example)
* component[SystolicBP].code = LNC#96608-5 "Systolic blood pressure mean"
* component[SystolicBP].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LNC#96609-3 "Diastolic blood pressure mean"
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: BPDevice1-example
InstanceOf: BloodPressureDevice
Description: "Blood Pressure Device example 1"
Usage: #example
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/bp-cuff-size-ext"
* extension.valueCodeableConcept = SCT#720736009 "Blood pressure cuff, pediatric size (physical object)"
* type = SCT#466086009 "Automatic-inflation electronic sphygmomanometer, portable, arm/wrist (physical object)"

Instance: BPDevice2-example
InstanceOf: BloodPressureDevice
Description: "Blood Pressure Device example number 2"
Usage: #example
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/bp-cuff-size-ext"
* extension.valueCodeableConcept = SCT#720737000 "Blood pressure cuff, adult size (physical object)"
* type = SCT#466086009 "Automatic-inflation electronic sphygmomanometer, portable, arm/wrist (physical object)"

Instance: BloodPressurePanel-example
InstanceOf: BloodPressurePanel
Description: "Blood Pressure Panel example"
Usage: #example
* extension[bodyPosition].url = "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition"
* extension[bodyPosition].valueCodeableConcept = SCT#33586001 "Sitting Position"
* extension[sleepStatus].url = "http://hl7.org/fhir/us/vitals/StructureDefinition/SleepStatusExt"
* extension[sleepStatus].valueCodeableConcept = SCT#248218005 "Awake"
* extension[exerciseAssociation].url = "http://hl7.org/fhir/us/vitals/StructureDefinition/ExerciseAssociationExt"
* extension[exerciseAssociation].valueCodeableConcept = SCT#263678003 "At rest"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#85354-9 "Blood pressure panel with all children optional"
* subject.display = "Small Child1234"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* issued = "2019-10-16T12:12:29-10:00"
* performer.display = "A. Pediatrician6"
* bodySite = SCT#723961002 "Structure of left brachial artery (body structure)"
* device = Reference(BPDevice1-example)
* component[SystolicBP].code.coding.code = LNC#8480-6 "Systolic blood pressure"
* component[SystolicBP].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code.coding.code = LNC#8462-4 "Diastolic blood pressure"
* component[DiastolicBP].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: bodyLength-example
InstanceOf: BodyLength
Description: "Body Length example"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-deviceCode"
* extension.valueCodeableConcept = SCT#51791000 "Measuring tape"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#8306-3 "Body height --lying"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 45 'cm' "cm"

Instance: bmi-example
InstanceOf: BodyMassIndex
Description: "Body Mass Index example"
Usage: #example
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#39156-5 "Body mass index (BMI) [Ratio]"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 19.3 'kg/m2' "kg/m2"

Instance: bodyTemperature-example
InstanceOf: BodyTemperature
Description: "Body Temperature example"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-deviceCode"
* extension.valueCodeableConcept = SCT#448349000 "Tympanic thermometer (physical object)"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#8310-5 
* code.text = "Body temperature"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 37 'Cel' "Cel"
* bodySite = SCT#117590005 "Ear structure"

Instance: bodyWeight-example
InstanceOf: BodyWeight
Description: "Body Weight example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/observation-deviceCode"
* extension[=].valueCodeableConcept = SCT#469204003 "Floor scale, electronic"
* extension[+].url = "http://hl7.org/fhir/us/vitals/StructureDefinition/AssociatedSituationExt"
* extension[=].valueCodeableConcept = SCT#248160001 "Undressed"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#29463-7 
* code.text = "Body weight"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 25 'kg' "kg"

Instance: headCircumference-example
InstanceOf: HeadOccipitalFrontalCircumference
Description: "Head Circumference example"
Usage: #example
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#8287-5 "Head Occipital-frontal circumference by Tape measure"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 35 'cm' "cm"

Instance: heartRate-example
InstanceOf: HeartRate
Description: "Heart Rate example"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-deviceCode"
* extension.valueCodeableConcept = SCT#43770009 "Doppler device"
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/ExerciseAssociationExt"
* extension.valueCodeableConcept = SCT#309604004 "During exercise"
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition"
* extension.valueCodeableConcept = SCT#102538003 "Recumbent body position"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#8867-4 
* code.text = "Heart rate"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity.value = 120
* valueQuantity.unit = #'/min' "{Beats}/min"
* bodySite = SCT#368505008 "Structure of right ulnar artery"
* method = SCT#268447006 "Doppler studies (procedure)"

Instance: height-example
InstanceOf: Height
Description: "Height example"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition"
* extension.valueCodeableConcept = SCT#33586001 "Sitting position"
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-deviceCode"
* extension.valueCodeableConcept = SCT#51791000 "Measuring tape"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#8302-2 "Body height"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 102 'cm' "cm"

Instance: oxygenSaturation-example
InstanceOf: OxygenSaturationArterialBlood
Description: "Oxygen Saturation in Arterial blood"
Usage: #example
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#2708-6 
* code.text = "Oxygen saturation in Arterial blood, method not specified"
* subject.display = "AdultFemale1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 98 '%' "%"

Instance: oxygenSaturationPulseOx-example
InstanceOf: OxygenSaturationArterialBloodPulseOx
Description: "Oxygen Saturation via Pulse Oximetry example"
Usage: #example
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/SensorDescriptionExt"
* extension.valueCodeableConcept = SCT#706202002 "Pulse oximeter probe (physical object)"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
//* code.coding = #2708-6 "Oxygen saturation in Arterial blood"
* code.coding = #59408-5 "Oxygen saturation in Arterial blood by Pulse oximetry"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity = 98 '%' "%"
* bodySite = SCT#7569003 "Finger structure"

Instance: respiratoryRate-example
InstanceOf: ResiratoryRate
Description: "Respiratory Rate example"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-deviceCode"
* extension.valueCodeableConcept = SCT#17120007 "Biofeedback, strain gauge"
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition"
* extension.valueCodeableConcept = SCT#40199007 "Supine body position"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#9279-1 "Respiratory rate"
* subject.display = "Small Child1234"
* encounter.display = "GP Visit"
* effectiveDateTime = "2019-10-16T12:12:29-09:00"
* valueQuantity.value = 79
* valueQuantity.unit = #'/min' "{breaths}/min"
* method = SCT#32750006 "Inspection (procedure)"

Instance: TwentyFourHourBloodPressure-example
InstanceOf: TwentyFourHourBloodPressure
Description: "24 hour blood pressure example"
Usage: #example
* extension.url = "http://hl7.org/fhir/us/vitals/StructureDefinition/MeasurementSettingExt"
* extension.valueCodeableConcept = SCT#264362003 "Home (environment)"
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#97844-5 "Blood Pressure panel 24 hour mean"
* subject.display = "OldMan 1234"
* effectivePeriod.start = "2020-10-16T12:30:00+10:00"
* effectivePeriod.end = "2020-10-17T12:30:00+10:00"
* issued = "2020-10-17T12:35:00+10:00"
* performer.display = "OldMan 1234"
* bodySite = SCT#723961002 "Structure of left brachial artery (body structure)"
* device = Reference(BPDevice2-example)
* component[0].code = LNC#8490-5 "Systolic blood pressure 24 hour mean"
* component[=].valueQuantity = 120 'mm[Hg]' "mm[Hg]"
* component[+].code = LNC#8472-3 "Diastolic blood pressure 24 hour mean"
* component[=].valueQuantity = 80 'mm[Hg]' "mm[Hg]"

Instance: VitalSignsPanel-example
InstanceOf: VitalSignsPanel
Description: "Vital Signs Panel example"
Usage: #example
* status = #final
* category = ObsCat#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = LNC#85353-1 "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
* subject.display = "OldMan 1234"
* effectivePeriod.start = "2020-10-16T12:30:00+10:00"
* effectivePeriod.end = "2020-10-17T12:30:00+10:00"
* issued = "2020-10-17T12:35:00+10:00"
* performer.display = "OldMan 1234"
* hasMember[0] = Reference(oxygenSaturationPulseOx-example)
* hasMember[+] = Reference(bodyWeight-example)
* hasMember[+] = Reference(headCircumference-example)
* hasMember[+] = Reference(height-example)
* hasMember[+] = Reference(bodyLength-example)
* hasMember[+] = Reference(bodyTemperature-example)
* hasMember[+] = Reference(BloodPressurePanel-example)
* hasMember[+] = Reference(heartRate-example)
* hasMember[+] = Reference(respiratoryRate-example)
* hasMember[+] = Reference(bmi-example)

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/extensions.fsh

Extension: AssociatedSituationExt
Id: AssociatedSituationExt
Title: "Associated Situation"
Description: "Situations that may affect the measurement or assessment."
* valueCodeableConcept only CodeableConcept

Extension: BloodPressureCuffSizeExt
Id: bp-cuff-size-ext
Title: "Blood Pressure Cuff Size"
Description: "The size of pressure cuff used to measure blood pressure."
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from BloodPressureCuffSizevalueset (extensible)

Extension: ExerciseAssociationExt
Id: ExerciseAssociationExt
Title: "Exercise Association"
Description: "The exercise state associated with the measurement."
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from ExertionPhaseVS (extensible)

Extension: MeasurementProtocol
Id: MeasurementProtocolExt
Title: "Measurement Protocol"
Description: "The system or defined process used in a measurement."
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from MeasurementProtocolVS (extensible)

Extension: MeasurementSettingExt
Id: MeasurementSettingExt
Title: "Measurement Setting"
Description: "The location or setting the subject was in when the measurement was obtained. For example, home, clinic, hospital. etc."
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from MeasurementSettingVS (extensible)

Extension: SensorDescription
Id: SensorDescriptionExt
Title: "Sensor Description"
Description: "The kind of sensor used to measure the oxygen saturation."
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from SensorDescriptionvalueset (extensible)

Extension: SleepStatus
Id: SleepStatusExt
Title: "Sleep Status"
Description: "The state of wakefulness during the measurement."
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from SleepStatusvalueset (extensible)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/HeadOccipitalFrontalCircumference.fsh

Profile: HeadOccipitalFrontalCircumference
Parent: VitalSigns
Id: head-occipital-frontal-circumference
Title: "Head Occipital-Frontal Circumference by Tape Measure"
Description: "The measured length around and individual's head via a tape measure using the frontal-occipital plane."
* status MS
* code = LNC#8287-5
* code ^short = "Head Occipital-frontal circumference by Tape measure"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code from LengthUOMVS (required)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNonPanic (extensible)
* method 0..0


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/HeartRate.fsh

Profile: HeartRate
Parent: CoreHeartRate
Id: heart-rate
Title: "Heart Rate"
Description: "The number of heart beats in a minute."
* extension contains
    ExtDeviceCode named measurementDevice 0..1 MS and
    ExerciseAssociationExt named exerciseAssociation 0..1 MS and
    ExtBodyPosition named bodyPosition 0..1 MS and
    MeasurementSettingExt named measurementSetting 0..1 MS and
    SleepStatus named sleepStatus 0..1 MS and
    AssociatedSituationExt named associatedSituation 0..1 MS
* extension[measurementDevice].value[x] only CodeableConcept
* extension[measurementDevice].valueCodeableConcept from HeartRateMeasurementDevicevalueset (extensible)
* extension[measurementDevice] ^short = "Measurement Device Type"
* extension[exerciseAssociation] ^short = "Exercise Association"
* extension[bodyPosition] ^short = "Body Position"
* extension[bodyPosition].valueCodeableConcept from BodyPositionvalueset (extensible)
* extension[measurementSetting] ^short = "Measurement setting"
* extension[sleepStatus] ^short = "Sleep Status"
* extension[associatedSituation] ^short = "Associated Situation"
* status MS
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = ObsCat#vital-signs
* code ^short = "Heart rate"
* code = LNC#8867-4
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code = #/min (exactly)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNom (extensible)
* bodySite MS
* bodySite from HeartRateMeasurementBodyLocationPrecoordinatedvalueset (extensible)
* method MS
* method from HeartRateMeasurementMethodvalueset (extensible)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/Height.fsh

Profile: Height
Parent: CoreHeight
Id: height
Title: "Body Height"
Description: "The measurement in centimeters or feet and inches from the top of the head to the heel, usually while standing."
* extension contains
    ExtBodyPosition named bodyPosition 0..1 MS and
    ExtDeviceCode named measurementDevice 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS
* extension[bodyPosition] ^short = "Body Position"
* extension[bodyPosition].valueCodeableConcept from HeightBodyPositionvalueset (extensible)
* extension[measurementDevice].value[x] only CodeableConcept
* extension[measurementDevice].valueCodeableConcept from HeightLengthMeasurementDevicevalueset (extensible)
* extension[measurementDevice] ^short = "Measurement Device Type"
* extension[MeasurementSetting] ^short = "Measurement setting"
* status MS
* code ^short = "Body height"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code from LengthUOMVS (required)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNonPanic (extensible)
* method MS
* method from HeightLengthMeasurementMethodvalueset (extensible)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/mappings.fsh

Mapping: LOINC-for-BloodPressureCuffSizeExt
Id: LOINC
Title: "Blood pressure device Cuff size"
Source: BloodPressureCuffSizeExt
Target: "http://loinc.org/8358-4"

Mapping: LOINC-for-SensorDescription
Id: LOINC
Title: "Oxygen saturation sensor type"
Source: SensorDescription
Target: "http://loinc.org/73803-9"

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/OxygenSaturationArterialBlood.fsh

Profile: OxygenSaturationArterialBlood
Parent: Observation
Id: oxygen-saturation-arterial-blood
Title: "Oxygen Saturation in Arterial blood, method not specified"
Description: "A measurement of the percentage to which oxygen is bound to hemoglobin in arterial blood."
* status MS
* code ^short = "Oxygen saturation in Arterial blood"
* subject 1..1 MS
* subject only Reference(Patient)
* interpretation 0..1 MS
* interpretation only CodeableConcept
* interpretation from LowOnlyNumericResultInterpretationNom (extensible)
* value[x] only Quantity

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/OxygenSaturationArterialBloodPulseOx.fsh

Profile: OxygenSaturationArterialBloodPulseOx
Parent: Observation
Id: oxygen-saturation-arterial-blood-pulseOx
Title: "Oxygen Saturation in Arterial Blood by Pulse Oximetry"
Description: "A measurement of the percentage to which oxygen is bound to hemoglobin in arterial blood via pulse oximetry."
* extension contains
    SensorDescription named sensorDescription 0..* MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS and
    ExerciseAssociationExt named exerciseAssociation 0..1 MS
* extension[sensorDescription] ^short = "Sensor Description"
* extension[MeasurementSetting] ^short = "Measurement setting"
* extension[exerciseAssociation] ^short = "Exercise Association"
* subject 1..1 MS
* subject only Reference(Patient)
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code = UCUM#% (exactly)
* dataAbsentReason MS
* interpretation 0..1 MS
* interpretation only CodeableConcept
* interpretation from LowOnlyNumericResultInterpretationNom (extensible)
* bodySite MS
* bodySite from OxygenSaturationBodyLocationvalueset (extensible)



---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/ResiratoryRate.fsh

Profile: ResiratoryRate
Parent: RespRate
Id: respiratory-rate
Title: "Respiratory Rate"
Description: "The measured number of breaths taken in a minute."
* extension contains
    ExtDeviceCode named measurementDevice 0..1 MS and
    ExtBodyPosition named BodyPosition 0..1 MS and
    ExerciseAssociationExt named exerciseAssociation 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS and
    SleepStatusExt named sleepStatus 0..1 MS
* extension[measurementDevice].value[x] only CodeableConcept
* extension[measurementDevice].valueCodeableConcept from RespiratoryRateMeasurementDevicevalueset (extensible)
* extension[measurementDevice] ^short = "Measurement Device Type"
* extension[BodyPosition] ^short = "Body Position"
* extension[BodyPosition].valueCodeableConcept from BodyPositionvalueset (extensible)
* extension[exerciseAssociation] ^short = "Exercise Association"
* extension[MeasurementSetting] ^short = "Measurement setting"
* extension[sleepStatus] ^short = "Sleep Status"
* status MS
* code ^short = "Respiratory rate"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] only Quantity
* valueQuantity MS
* valueQuantity.value 1..1 MS
* valueQuantity.unit 1..1 MS
* valueQuantity.system 1..1 MS
* valueQuantity.system only uri
* valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* valueQuantity.code 1..1 MS
* valueQuantity.code only code
* valueQuantity.code = #/min (exactly)
* dataAbsentReason MS
* interpretation from NumericResultInterpretationNom (extensible)
* method MS
* method from RespiratoryRateMeasurementMethodvalueset (extensible)

---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/TwentyFourHourBloodPressure.fsh

Profile: TwentyFourHourBloodPressure
Parent: VitalSigns
Id: twenty-four-hour-blood-pressure
Title: "Twenty Four Hour Blood Pressure"
Description: "An average blood pressure (systolic and diastolic) over a twenty four hour period."
* extension contains
    ExtBodyPosition named BodyPosition 0..1 MS and
    MeasurementSettingExt named MeasurementSetting 0..1 MS
* extension[BodyPosition] ^short = "Body Position"
* extension[BodyPosition].valueCodeableConcept from BodyPositionvalueset (extensible)
* extension[MeasurementSetting] ^short = "Measurement setting"
* status MS
* code = LNC#97844-5
* code ^short = "Blood pressure panel 24 hour mean"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* effective[x] only Period
* effective[x] ^short = "The dates and times over which the 24 hour period falls."
* value[x] 0..0
* bodySite MS
* bodySite from BloodPressureMeasurementBodyLocationPrecoodinated (extensible)
* bodySite ^binding.description = "A set of codes that describe where on/in the body an observation or procedure took place"
* method MS
* method from BloodPressureMeasurementMethodvalueset (extensible)
* method ^binding.description = "A set of codes that describe the method used to measure a blood pressure"
* specimen 0..0
* device 0..1 MS
* device only Reference(BloodPressureDevice)
* device ^short = "Blood Pressure Device"
* component MS
* component ^slicing.discriminator.type = #pattern
* component ^slicing.discriminator.path = "code"
* component ^slicing.ordered = false
* component ^slicing.rules = #open
* component ^short = "Blood pressure components"
* component contains
    SystolicBP24HMean 1..1 and
    DiastolicBP24HMean 0..1
* component[SystolicBP24HMean] ^short = "Systolic blood pressure 24 hour mean"
* component[SystolicBP24HMean].code = LNC#8490-5
* component[SystolicBP24HMean].code MS
* component[SystolicBP24HMean].code ^short = "Systolic blood pressure 24 hour mean"
* component[SystolicBP24HMean].value[x] only Quantity
* component[SystolicBP24HMean].valueQuantity MS
* component[SystolicBP24HMean].valueQuantity.value 1..1 MS
* component[SystolicBP24HMean].valueQuantity.unit 1..1 MS
* component[SystolicBP24HMean].valueQuantity.system 1..1 MS
* component[SystolicBP24HMean].valueQuantity.system only uri
* component[SystolicBP24HMean].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[SystolicBP24HMean].valueQuantity.code 1..1 MS
* component[SystolicBP24HMean].valueQuantity.code only code
* component[SystolicBP24HMean].valueQuantity.code = #mm[Hg] (exactly)
* component[DiastolicBP24HMean] ^short = "Diastolic blood pressure 24 hour mean"
* component[DiastolicBP24HMean].code = LNC#8472-3
* component[DiastolicBP24HMean].code MS
* component[DiastolicBP24HMean].code ^short = "Diastolic blood pressure 24 hour mean"
* component[DiastolicBP24HMean].value[x] only Quantity
* component[DiastolicBP24HMean].valueQuantity MS
* component[DiastolicBP24HMean].valueQuantity.value 1..1 MS
* component[DiastolicBP24HMean].valueQuantity.unit 1..1 MS
* component[DiastolicBP24HMean].valueQuantity.system 1..1 MS
* component[DiastolicBP24HMean].valueQuantity.system only uri
* component[DiastolicBP24HMean].valueQuantity.system = "http://unitsofmeasure.org" (exactly)
* component[DiastolicBP24HMean].valueQuantity.code 1..1 MS
* component[DiastolicBP24HMean].valueQuantity.code only code
* component[DiastolicBP24HMean].valueQuantity.code = #mm[Hg] (exactly)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/fsh/VitalSignsPanel.fsh

Profile: VitalSignsPanel
Parent: Observation
Id: vital-signs-panel
Title: "Vital Signs Panel"
Description: "A vital signs panel as defined by Logica Health.  It includes Oxygen Saturation via Pulse Oximetry, Oxygen Saturation in Arterial blood, body height, body length, body weight, body temperature, blood pressure panel, heart rate, respiratory rate, head-occcipital/frontal circumference, oxygen saturation via pulse oximetry, and body mass index."
* status MS
* code = LNC#85353-1
* code MS
* code ^short = "Vital signs, weight, height, head circumference, oxygen saturation, and BMI panel"
* subject 1..1 MS
* subject only Reference(Patient)
* effective[x] 1..1 MS
* value[x] 0..0
* dataAbsentReason 0..0
* interpretation from DefinedLimitsvalueset (extensible)
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* referenceRange 0..0
* component 0..0
* hasMember ^slicing.discriminator.type = #profile
* hasMember ^slicing.discriminator.path = "resolve()"
* hasMember ^slicing.rules = #closed
* hasMember ^slicing.ordered = false
* hasMember contains
    OxygenSaturationArterialBloodPulseOx 0..1 and
    BodyWeight 0..1 and
    HeadOccipitalFrontalCircumference 0..1 and
    Height 0..1 and
    BodyLength 0..1 and
    BodyTemperature 0..1 and
    BloodPressurePanel 0..1 and
    HeartRate 0..1 and
    RespiratoryRate 0..1 and
    BodyMassIndex 0..1
* hasMember[OxygenSaturationArterialBloodPulseOx] only Reference(OxygenSaturationArterialBloodPulseOx)
* hasMember[BodyWeight] only Reference(BodyWeight)
* hasMember[HeadOccipitalFrontalCircumference] only Reference(HeadOccipitalFrontalCircumference)
* hasMember[Height] only Reference(Height)
* hasMember[BodyLength] only Reference(BodyLength)
* hasMember[BodyTemperature] only Reference(BodyTemperature)
* hasMember[BloodPressurePanel] only Reference(BloodPressurePanel)
* hasMember[HeartRate] only Reference(HeartRate)
* hasMember[RespiratoryRate] only Reference(ResiratoryRate)
* hasMember[BodyMassIndex] only Reference(BodyMassIndex)

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/all-examples.md

---
## jekyll header
name: all-examples
title: Examples
layout: default
---
<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

* [Average Blood Pressure](Observation-AverageBloodPressure-example.html)
* [Blood Pressure Panel](Observation-BloodPressurePanel-example.html)
* [Body Mass Index](Observation-bmi-example.html)
* [Body Length](Observation-bodyLength-example.html)
* [Body Temperature](Observation-bodyTemperature-example.html)
* [Body Weight](Observation-bodyWeight-example.html)
* [Head Circumference](Observation-headCircumference-example.html)
* [Heart Rate](Observation-heartRate-example.html)
* [Height](Observation-height-example.html)
* [Oxygen Saturation](Observation-oxygenSaturation-example.html)
* [Oxygen Saturation via Pulse Ox](Observation-oxygenSaturationPulseOx-example.html)
* [Respiratory Rate](Observation-respiratoryRate-example.html)
* [Twenty-Four Hour Blood Pressure](Observation-TwentyFourHourBloodPressure-example.html)

### Download

Available for download [here](downloads.html)
<!-- ================================================ -->


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/downloads.md

---
title: Downloads
layout: default
active: downloads
---

### Package File

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc. defined as part of this version of the Implementation Guide. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on validating [FHIR profiles and resources]({{site.data.fhir.path}}validation.html):

- [Package](package.tgz)

<p>&nbsp;</p>

### Downloadable Copy of Entire Specification

A downloadable version is available so this Implementation Guide can be hosted locally:

- [Downloadable Copy](full-ig.zip)

<p>&nbsp;</p>

### Example Packages

All the examples that are used in this Implementation Guide available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)

<p>&nbsp;</p>

### Schematrons

Schematrons are also available for download and listed below:

{% include schematron-list-generator.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/example-list-generator.md

{% for p in site.html_pages %}
{% unless p.name contains 'ttl' or p.name contains 'json' or  p.name contains 'xml' or  p.name contains 'definitions' or p.name contains 'mappings'%}
    {% assign title = p.name | remove: ".html" | remove: ".md" | split: '-' %}
    {% for e in site.example_types %}
      {% if title contains e %}
- [{% for word in title %}{{ word | capitalize }} {% endfor %}]({{ p.path }})
      {% endif %}
    {% endfor %}
  {% endunless %}
{% endfor %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/index.md

### Introduction

Vital signs are physical observations that are an indication of the body's life-sustaining functions.  They are taken to assess general physical health, give clues to possible disease states, or to show progress toward recovery.  There is a need for a single structure and standard vocabulary bindings for each vital sign to allow for ubiquitous access and re-use of vital signs observations. Particularly with the use of wearables by patients where they want to or need to share information from those devices. To meet this need there must be a consistent vocabulary and a common syntax to achieve semantic interoperability. The purpose of the FHIR Vital Signs profiles in this implementation guide is to provide a mechanism to record, search, and retrieve the vital signs associated with a patient that include the vital signs (heart rate, respiratory rate, body temperature, and blood pressure), and additional measurements such as body height/length, weight, head circumference, oxygen saturation, and BMI, and the qualifying observations needed for each measurement such as body position, laterality, cuff size and location, device type, etc. When a FHIR implementation supports any of the vital signs listed in the table below, the implementation SHALL conform to the profiles in this IG for vital signs observations.

The profiles in this implementation guide (IG) are derived from and extend the vital signs profiles from the [FHIR Specification](http://hl7.org/fhir/R4/observation-vitalsigns.html) which are used by [US Core](http://hl7.org/fhir/us/core/index.html).  Exceptions to this are Head Occipital-frontal circumference by Tape measure, Average Blood Pressure, and 24-Hour Blood Pressure.  This IG uses Head Occipital-frontal circumference by Tape measure because that is the observation defined in the LOINC panel *Vital signs, weight, height, head circumference, oxygen saturation and BMI panel* [85353-1](http://r.details.loinc.org/LOINC/85353-1.html?sections=Comprehensive).  Average Blood Pressure and 24-Hour Blood Pressure are included for implementations that may need them as additional blood pressure observations.

The Office of the National Coordinator (ONC) sponsored [Data Access Framework (DAF)](https://www.healthit.gov/topic/scientific-initiatives/pcor/data-access-framework-daf) project, originally developed, balloted, and published in FHIR DSTU2 and the [Argonaut](http://argonautwiki.hl7.org/index.php?title=Main_Page) pilot implementation
project and were used as references in the creation of the profiles in this IG.

The profiles were extended by the [Clinical Information Modeling Initiative](https://confluence.hl7.org/display/CIMI/Clinical+Information+Modeling+Initiative) in Jan. 2020 to include associated qualifying observations and required terminology bindings. The work was informed by Intermountain Healthcare’s clinical element models, the Federal Health Information Model, and the American Medical Association’s home blood pressure monitoring use cases.

### Scope

#### Realm

Currently this IG falls within the US realm.

#### Must Support

All elements flagged as *"must support"* within profiles in this implementation guide must abide the following rules:

* The system must be able to store and retrieve the element.
* The system must display the element to the user.
* The system must allow the user to capture the element.
* The element must appear in an output report if present.

#### Mandatory Data Elements and Terminology

The following data elements are mandatory (i.e. data SHALL be present). Profile-specific guidance and valid examples are provided on the specific profile pages.

##### Each Observation must have

1. a status (Observation.status)
2. a category code of 'vital-signs' (Observation.category)
3. an observation code (Observation.code) that defines what is being measured.
    * LOINC was the system chosen for the observation code because this aligns with the most countries, but it can be treated as simply a fixed core set of common codes to communicate basic vital signs. Implementers that need to use a different code system should map to LOINC accordingly.
4. a patient (Observation.subject)
5. a time (Observation.effective, a dateTime with at least Year, Month, Day, Hour, and minutes. Seconds may be zero filled.  A time zone must be provided.) or time period (start dateTime and end dateTime) indicating when the measurement was taken or over which period it was taken.

##### Rules for the observation value

1. Each vital sign measurement shall have a numeric result value and standard Unified Code for Units of Measure (UCUM) code.
    * Observations with numeric values **must not have** a Data Absent Reason. Observations *without* a numeric value **must have** a valid Data Absent Reason.

#### Data Provenance

It is recommended that the guidelines set forth by the [US Core implementation guide](https://build.fhir.org/ig/HL7/US-Core-R4/basic-provenance.html) for data provenance be followed for implementation of this IG.

### Formal View of Profile Content

Link to the formal definition views for the vital signs listed in this table.

• The table below represents an expansion of the US Core/FHIR Core [Vital Signs](http://build.fhir.org/observation-vitalsigns.html) requirements, their required codes, and UCUM units of measure codes used for representing vital signs observations. Any system supporting any of these vital signs concepts must represent them using *at least* these codes.

• The first column of this table links to the formal views of the individual profile for each vital sign.

• If a more specific code or another code system is recorded or required, implementers must support both the values (LOINC) listed and the translated code - e.g. method specific LOINC codes, SNOMED CT concepts, system specific (local) codes.

• In addition, the implementer may choose to provide alternate codes in addition to the standard codes defined here. The examples illustrate using other codes as translations.

<div>
  <table class="grid">
    <thead>
      <tr>
		<th width="13%">Profile Name</th>
        <th width="7%">LOINC Code</th>
        <th width="60%">LOINC Name and Comments</th>
        <th width="10%">UCUM Unit Code</th>
		<th width="10%">Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
		<td><a href="StructureDefinition-vital-signs-panel.html" target="_blank">Vital Signs Panel&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/85353-1.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;85353-1&nbsp;&nbsp;</a></td>
        <td>Vital signs, weight, height, head circumference, oxygen saturation and BMI panel - It represent a panel of vital signs listed in this table. All members of the   panel are optional and note that querying for the panel may miss individual results that are not part of the actual panel. When used, Observation.valueQuantity is not present; instead, related links (with   type=has-member) reference the vital signs observations (e.g. respiratory rate, heart rate, BP, etc.). This code replaces the deprecated code 8716-3 - Vital signs which is used in the Argonaut Data Query Implementation Guide.</td>
        <td>-</td>
		<td><a href="Observation-VitalSignsPanel-example.html" target=" blank">Vital Signs Panel Example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-blood-pressure-panel.html" target="_blank">Blood Pressure Panel&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/85354-9.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;85354-9&nbsp;&nbsp;</a></td>
        <td>Blood pressure panel with all children optional - This is a component observation. It has no value in Observation.valueQuantity and contains at least one component, Systolic blood pressure.</td>
        <td>-</td>
		<td><a href="Observation-BloodPressurePanel-example.html" target="_blank">Blood Pressure Panel Example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-average-blood-pressure.html" target="_blank">Average Blood Pressure&nbsp;&nbsp;</a></td>
        <td><a href="https://loinc.org/96607-7/" target="_blank">&nbsp;&nbsp;96607-7&nbsp;&nbsp;</a></td>
        <td>Blood pressure panel unspecified time mean.  This observations will have components of Systolic (LOINC code 96608-5) and Diastolic (LOINC code 96609-3) average blood pressures over an unspecified period of time.</td>
        <td>-</td>
		<td><a href="Observation-AverageBloodPressure-example.html" target="_blank">Average Blood Pressure Example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
        <td><a href="StructureDefinition-twenty-four-hour-blood-pressure.html" target="_blank">24 hour blood pressure&nbsp;&nbsp;</a></td>
        <td><a href="https://loinc.org/97844-5/" target="_blank">&nbsp;&nbsp;97844-5&nbsp;&nbsp;</a></td>
        <td>Blood pressure panel 24 hour mean.  This observation has components of Systolic (LOINC code 8490-5) and Diastolic (LOINC code 8472-3) average blood pressures over a 24 hour period.</td>
        <td>-</td>
        <td><a href="Observation-TwentyFourHourBloodPressure-example.html" target="_blank">24 hour blood pressure Example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-respiratory-rate.html" target="_blank">Respiratory Rate&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/9279-1.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;9279-1&nbsp;&nbsp;</a></td>
        <td>Respiratory rate</td>
        <td>/min</td>
		<td><a href="Observation-respiratoryRate-example.html" target="_blank">Respiratory Rate example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-heart-rate.html" target="_blank">Heart Rate&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/8867-4.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;8867-4&nbsp;&nbsp;</a></td>
        <td>Heart rate</td>
        <td>/min </td>
		<td><a href="Observation-heartRate-example.html" target="_blank">Heart Rate example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-oxygen-saturation-arterial-blood-pulseOx.html" target="_blank">Oxygen Saturation by Pulse Oximetry&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/59408-5.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;59408-5&nbsp;&nbsp;</a></td>
        <td>Oxygen saturation in Arterial blood by Pulse oximetry</td>
        <td>%</td>
		<td><a href="Observation-oxygenSaturationPulseOx-example.html" target="_blank">Oxygen Saturation example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-oxygen-saturation-arterial-blood.html" target="_blank">Oxygen Saturation&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/2708-6.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;2708-6&nbsp;&nbsp;</a></td>
        <td>Oxygen saturation in Arterial blood</td>
        <td>%</td>
		<td><a href="Observation-oxygenSaturation-example.html" target="_blank">Oxygen Saturation example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-body-temperature.html" target="_blank">Body Temperature&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/8310-5.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;8310-5&nbsp;&nbsp;</a></td>
        <td>Body temperature</td>
        <td>Cel, [degF]</td>
		<td><a href="Observation-bodyTemperature-example.html" target="_blank">Body Temperature example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-height.html" target="_blank">Body Height&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/8302-2.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;8302-2&nbsp;&nbsp;</a></td>
        <td>Body height</td>
        <td>cm, [in_i]</td>
		<td><a href="Observation-height-example.html" target="_blank">Body Height example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-body-length.html" target="_blank">Body Length&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/8306-3.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;8306-3&nbsp;&nbsp;</a></td>
        <td>Body height -- lying</td>
        <td>cm, [in_i]</td>
		<td><a href="Observation-bodyLength-example.html" target="_blank">Body Length example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-head-occipital-frontal-circumference.html" target="_blank">Head Circumference&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/8287-5.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;8287-5&nbsp;&nbsp;</a></td>
        <td>Head Occipital-frontal circumference by Tape measure</td>
        <td>cm, [in_i]</td>
		<td><a href="Observation-headCircumference-example.html" target="_blank">Head Circumference example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-body-weight.html" target="_blank">Body Weight&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/29463-7.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;29463-7&nbsp;&nbsp;</a></td>
        <td>Body weight</td>
        <td>g, kg,[lb_av]</td>
		<td><a href="Observation-bodyWeight-example.html" target="_blank">Body Weight example&nbsp;&nbsp;</a></td>
      </tr>
      <tr>
		<td><a href="StructureDefinition-body-mass-index.html" target="_blank">Body Mass Index&nbsp;&nbsp;</a></td>
        <td><a href="http://r.details.loinc.org/LOINC/39156-5.html?sections=Comprehensive" target="_blank">&nbsp;&nbsp;39156-5&nbsp;&nbsp;</a></td>
        <td>Body mass index (BMI) [Ratio]</td>
        <td>kg/m2</td>
		<td><a href="Observation-bmi-example.html" target="_blank">Body Mass Index example&nbsp;&nbsp;</a></td>
      </tr>
    </tbody>
  </table>
</div>

### Acknowledgements

**This Implementation Guide was made possible by the thoughtful contributions of the following people:**

*The [American Medical Association (AMA)](https://www.ama-assn.org)*

*The [HL7 CIMI Work Group](https://confluence.hl7.org/display/CIMI/Clinical+Information+Modeling+Initiative)*

*The [HL7 Orders and Observations Work Group](https://confluence.hl7.org/display/OO/Orders+and+Observations)*

* *Monique Van Berkum, AMA*
* *Corey Smith, AMA*
* *Nathan Davis, Graphite Health*
* *Susan Matney, PhD*
* *Patrick Langford, Graphite Health*

### Publisher

This implementation guide was edited and published by the HL7 Clinical Information Modeling Initiative.  Contact information is provided on [this Confluence page](https://confluence.hl7.org/display/CIMI/Clinical+Information+Modeling+Initiative).

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/link-list.md

[core specification]: {{site.data.fhir.path}}extensibility.html
[Downloads]: downloads.html "Downloads Page"
[FHIR AuditEvent (R4)]: {{page.r4}}auditevent.html
[FHIR Conformance Rules]: {{site.data.fhir.path}}conformance-rules.html
[FHIR Data Types]: {{site.data.fhir.path}}datatypes.html
[FHIR Provenance (R4)]: {{page.r4}}provenance.html
[FHIR Resource]: {{site.data.fhir.path}}resource.html
[FHIR RESTful API]: {{site.data.fhir.path}}http.html
[FHIR Search]: {{site.data.fhir.path}}search.html
[FHIR Terminology]: {{site.data.fhir.path}}terminologies.html
[FHIR Version R4]: {{site.data.fhir.path}}index.html "FHIR Version R4 Specification Home Page"
[Guidance - General Guidance]: generalguidance.html
[Home]: index.html "Home Page"
[HTTP]: {{site.data.fhir.path}}http.html
[logical view]: {{site.data.fhir.path}}formats.html#table
[profiles]: {{site.data.fhir.path}}profiling.html
[Profiles]: profiles.html "Profiles and Extensions Page"
[StructureDefinitions]: {{site.data.fhir.path}}structuredefinition.html
[Terminology]: terminology.html "Terminology Page"
[US Core Basic Provenance Guidance (R4)]: {{page.us_r4}}basic-provenance.html
[US Core Patient (R4)]: {{page.us_r4}}StructureDefinition-us-core-patient.html
[US Core Practitioner (R4)]: {{page.us_r4}}StructureDefinition-us-core-practitioner.html
[US Core Encounter (R4)]: {{page.us_r4}}StructureDefinition-us-core-encounter.html
[US Core Provenance (R4)]: {{page.us_r4}}StructureDefinition-us-core-provenance.html


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/menu.md


<ul class="nav navbar-nav">
  <li>
    <a href="index.html">Home</a>
  </li>

<!--   <li class="dropdown">
    <a href="generalguidance.html">General Guidance</a>
  </li> -->

  <li>
    <a href="profiles.html">Profiles &amp; Extensions</a>
  </li>
  <!-- Uncomment when search parameters or operations are defined
  <li>
    <a href="searchparameters.html">Search Params &amp; Operations</a>
  </li>
  -->
  <li>
    <a href="all-examples.html">Examples</a>
  </li>
  <li>
    <a href="terminology.html">Terminology</a>
  </li>
  <li>
    <a href="downloads.html">Downloads</a>
  </li>
</ul>


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/operations.md

---
title: OperationDefinitions defined for this Guide
layout: default
active: operations
r4: http://build.fhir.org/
r3: http://hl7.org/fhir/STU3/
---

### Operations Listed By Use Case
{:.no_toc}

#### Common to All Skin Wound Assessment Implementation Use Cases
{:.no_toc}

|Name|Link to R4 Operation|
|---|---|

### Operations Defined in this Implementation Guide
{:.no_toc}

{% include link-list.md %}

<br />


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/profiles.md

---
title: Profiles and Extensions
layout: default
active: profiles
---
### Profiles

The following Profiles and have been defined for this implementation guide.

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="25%">Profile</th>
			  <th width="75%">Definition</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="StructureDefinition-vital-signs-panel.html">Vital Signs Panel</a></td>
			  <td>A vital signs panel as defined by Logica Health.  It includes Oxygen Saturation via Pulse Oximetry, Oxygen Saturation in Arterial blood, body height, body length, body weight, body temperature, blood pressure panel, heart rate, respiratory rate, head-occipital/frontal circumference, oxygen saturation via pulse oximetry, and body mass index.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-blood-pressure-panel.html">Blood Pressure Panel</a></td>
			  <td>Blood Pressure Panel; a grouping of systolic, diastolic, and mean arterial blood pressure components.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-average-blood-pressure.html">Average Blood Pressure</a></td>
			  <td>A calculated average of two or more blood pressure readings in a specified time period or according to a specified algorithm or protocol.  The average blood pressure has a systolic and a diastolic component.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-twenty-four-hour-blood-pressure.html">Twenty Four Hour Blood Pressure</a></td>
			  <td>An average blood pressure (systolic and diastolic) over a twenty four hour period.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-bp-device.html">Blood Pressure Device</a></td>
			  <td>A profile of the Device resource used specifically for blood pressure devices and includes an extension for blood pressure cuff size.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-height.html">Body Height</a></td>
			  <td>The measurement in centimeters or feet and inches from the top of the head to the heel, usually while standing.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-body-length.html">Body Length</a></td>
			  <td>The measurement in centimeters or inches from the top of the head to bottom of the heel, taken while lying down.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-body-mass-index.html">Body Mass Index</a></td>
			  <td>A numerical index based on an individual's weight in kilograms divided by the square of their height in meters.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-body-temperature.html">Body Temperature</a></td>
			  <td>The measured heat of an individual's body.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-body-weight.html">Body Weight</a></td>
			  <td>The measured mass of an individual's body.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-head-occipital-frontal-circumference.html">Head Occipital Frontal Circumference</a></td>
			  <td>The measured length around and individual's head via a tape measure using the frontal-occipital plane.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-heart-rate.html">Heart Rate</a></td>
			  <td>The number of heart beats in a minute.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-oxygen-saturation-arterial-blood-pulseOx.html">Oxygen Saturation in Arterial Blood by Pulse Oximetry</a></td>
			  <td>A measurement of the percentage to which oxygen is bound to hemoglobin in arterial blood via pulse oximetry.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-oxygen-saturation-arterial-blood.html">Oxygen Saturation in Arterial blood, method not specified</a></td>
			  <td>A measurement of the percentage to which oxygen is bound to hemoglobin in arterial blood.</td>
			</tr>
			<tr>
			  <td><a href="StructureDefinition-respiratory-rate.html">Respiratory Rate</a></td>
			  <td>The measured number of breaths taken in a minute.</td>
			</tr>
		</tbody>
	</table>
</div>


### Extensions

The following extensions have been defined as part of the Vital Signs implementation Guide. A [registry of standard extensions]({{site.data.fhir.path}}extensibility-registry.html) can be found in the FHIR specification and additional extensions may be registered on the HL7 FHIR registry at http://hl7.org/fhir/registry.

#### A note about value bindings in the extensions

Some of the extensions defined below do not have value set bindings included.  This is because the extension may be used in more than one profile and the values needed are specific to the context of the containing profile.  For example, the Associated Situation extension is used in both the Body Temperature profile as well as the Body Weight profile.  The values for Associated Situation will differ between these two contexts.  For Body Temperature the values are things like "post exercise" but for Body Weight they're things like "With prosthetic" or "undressed".

<div>
<p>This guide references the following extensions.</p>
<p>
<a href="StructureDefinition-AssociatedSituationExt.html">Associated Situation</a><br/>
<a href="StructureDefinition-bp-cuff-size-ext.html">Blood Pressure Cuff Size</a><br/>
<a href="StructureDefinition-ExerciseAssociationExt.html">Exercise Association</a><br/>
<a href="StructureDefinition-MeasurementProtocolExt.html">Measurement Protocol</a><br/>
<a href="StructureDefinition-MeasurementSettingExt.html">Measurement Setting</a><br/>
<a href="http://hl7.org/fhir/StructureDefinition/observation-bodyPosition">Observation - Body Position</a><br/>
<a href="http://hl7.org/fhir/StructureDefinition/observation-deviceCode">Observation - Device Type</a><br/>
<a href="StructureDefinition-SensorDescriptionExt.html">Sensor Description</a><br/>
<a href="StructureDefinition-SleepStatusExt.html">Sleep Status</a><br/>
</p>
</div>

{% include link-list.md %}

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/schematron-list-generator.md

{% for p in site.static_files %}
  {% if p.name contains '.sch' %}
  {% assign title = p.name | remove: '.sch' | split: '-' %}
- [{% for word in title  %}{{ word | capitalize }} {% endfor %}]({{ p.path | remove: '/' }})
  {% endif %}
{% endfor %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/searchparameters.md

---
title: Operations and Search Parameters
layout: default
active: searchparameters
---

The following operations and search parameters have been defined for the Skin Wound Assessment Implementation Guide.  For more information on the [FHIR RESTful operations ]({{site.data.fhir.path}}operations.html), [FHIR RESTful search api]({{site.data.fhir.path}}search.html) and the standard [Search Param Registry]({{site.data.fhir.path}}searchparameter-registry.html) see the FHIR specification.

## Operations

No Operations have been defined for this implementation guide.

<br />

## Search Parameters

No Search Parameters have been defined for this implementation guide.

<br />


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/security.md

---
title: Security Considerations
layout: default
active: security
topofpage: true
r4: http://hl7.org/fhir/R4/
us_r4: http://hl7.org/fhir/us/core/
---

This implementation guide presumes rigorous conformance with Security Role-Based Access Controls. EHR System data accuracy and records authenticity are completely dependent on a system's ability to support User ID accuracy assurance.  Deviations from User ID accuracy obviate data accuracy and records authenticity. Similarly, Security-driven stipulations regarding uniform time references and audit logs are dependencies. However, Security audit log requirements alone are insufficient to further support data accuracy and records authenticity. The development, testing, and validation of extensions to those functions is thus one of the objectives of this IG.

<br />

## FHIR Security and Privacy

FHIR Security and Privacy considerations are outlined in several modules which describe how to protect a patient's privacy. FHIR provides security guidance that should be adhered to by implementers and provide a framework for any security and privacy rules in the following areas.

- [Security & Privacy Module]({{site.data.fhir.path}}secpriv-module.html)
- [Security Principles]({{site.data.fhir.path}}security.html)
- [Clinical Safety]({{site.data.fhir.path}}safety.html)

<br />

## Additional Rules

In addition to the FHIR security guidance, this implementation guide imposes the following additional rules:

- Systems **SHALL** establish a risk analysis and management regime that conforms with HIPAA security regulatory requirements. In addition US Federal systems **SHOULD** conform with the risk management and mitigation requirements defined in NIST 800 series documents. This **SHOULD** include security category assignment in accordance with NIST 800-60 vol. 2 Appendix D.14. The coordination of risk management and the related security and privacy controls - policies, administrative practices, and technical controls - **SHOULD** be defined in the Business Associate Agreement when available.
- Systems **SHALL** reference a single time source to establish a common time base for security auditing, as well as clinical data records, among computing systems. The selected time service **SHOULD** be documented in the Business Associate Agreement when available.
- Systems **SHALL** keep audit logs of the various transactions.
- Systems **SHALL** use TLS version 1.2 or higher for all transmissions not taking place over a secure network connection. (Using TLS even within a secured network environment is still encouraged to provide defense in depth.) US Federal systems **SHOULD** conform with FIPS PUB 140-2.
-  Systems **SHALL** conform to [FHIR Communications Security]({{site.data.fhir.path}}security.html#http) requirements.
-  For Authentication and Authorization, Systems **SHOULD**, are encouraged to, support the [SMART App Launch Framework](http://www.hl7.org/fhir/smart-app-launch/history.cfml) for client <-> server interactions. NOTE: The SMART on FHIR specifications include the required OAuth 2.0 scopes for enabling security decisions.
-  Systems **SHALL** implement consent requirements per their state, local, and institutional policies. The Business Associate Agreements **SHOULD** document systems mutual consent requirements.
-  Systems **SHOULD** provide Provenance statements using the [US Core Provenance (R4)] resource and associated requirements.
-  Systems **SHOULD** implement the [FHIR Digital Signatures]({{site.data.fhir.path}}security.html#digital%20signatures) and provide feedback on its appropriateness for Skin Wound Assessment transactions.
-  Systems **SHOULD** protect the confidentiality of data at rest via encryption and associated access controls. The policies and methods used are outside the scope of this specification.

<br />

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-AlgorithmForBloodPressureAverageExt-intro.md

### Algorithm for Blood Pressure Average extension

An extension for capturing the method(s) used in calculating the average blood pressure from a set of blood pressure measurements.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-AlgorithmTypeExt-intro.md

### Algorithm Type extension


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-AssociatedSituationExt-intro.md

### Associated Situation

The purpose of this extension is to have a means of capturing important, contextual situations about a measurement.  For example, a body weight taken while the subject is wearing a cast or while using/wearing a portable oxygenator.  In these examples the value of Associated Situation would be "cast" or "oxygenator".


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-average-blood-pressure-intro.md

### Scope

This blood pressure profile is used to capture the calculated average blood pressure from a set of individual measurements.

#### About the extensions

The expectation for the extensions in this profile is that if populated, they qualify each of the individual measurements used to calculate the average blood pressure.  For example, if the body position give in an intance of the this profile is "sitting" then the body position for either the systolic or diastolic blood pressures is "sitting".

Body Position - This is used to capture an individual's body position while taking a blood pressure.

Exercise Association - This is used to capture an individual's excercise status while taking blood pressure.

Measurement Setting - This is used to capture the location (not body site) where the measurement(s) took place; At home, hospital, clinic, etc.

Measurement Protocol - This is used to capture a set of rules used for the calculation of the blood pressure average; the number of measurments to be obtained, the time interval between measurements, the overall period for the measurements, and any instructions such as "take while sitting, after five minutes", etc..  This can be institution specific, provider specific, clinical society specific (i.e. AMA), etc.

#### *Example*

[AverageBloodPressure-example](Observation-AverageBloodPressure-example.html)

#### *Value Sets*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-bodyPositionVS.html">Body Position value set</a></td>
			  <td>This value set contains concepts used to result the patient's body position, referencing the SNOMED Code 397155001 Body position (observable entity) and the LOINC term "Body position with respect to gravity" 8361-8.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpMeasDeviceVS.html">Blood Pressure Device Type value set</a></td>
			  <td>This value set contains concepts used to result the type of device used to measure a body blood pressure, referencing the SNOMED Code 23591000205102 “Blood pressure device type (observable entity)" and the LOINC term “Type of Blood pressure device” 41901-0.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpmeasbodylocationprecoord.html">Blood Pressure Measurement Site value set</a></td>
			  <td>This value set contains a constrained list body location values used to result the body location where a blood pressure was measured, referencing the SNOMED Code 2281000205100 “Blood pressure measurement site (observable entity)” and the LOINC term "Blood pressure measurement site", 41904-4.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpMeasMethodVS.html">Blood Pressure Method value set</a></td>
			  <td>This value set contains concepts used to result the method used for a blood pressure measurement, referencing the SNOMED Code 2291000205103 “Blood pressure method (observable entity)” and the LOINC term "Blood pressure method" 8357-6.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-exertionPhaseVS.html">Exertion Phase value set</a></td>
			  <td>The purpose of the value set is to document exercise associated with a measurement. Resulting LOINC code 74008-4 "Exercise intensity".</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-sleepStatusVS.html">Sleep Status value set</a></td>
			  <td>This value set contains values used to indicate the state of wakefulness during measurement.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-MeasSettingVS.html">Measurement Setting value set</a></td>
			  <td>This value set is used to result the Measurement Setting extension.</td>
			</tr>
		</tbody>
	</table>
</div>

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-blood-pressure-panel-intro.md

### Scope

The Blood Pressure Panel profile contains three observations, systolic, diastolic, and mean arterial blood pressure. These are slices of the component element (Observation.component) and the value (Observation.value) has been constrained out (cardinality set to 0).  Systolic and Diastolic blood pressures are commonly stored together as a “blood pressure”. There are times when a mean arterial pressure needs to be stored also, so it was included.  The only required observation of the three is Systolic BP.  By doing so the panel may be used to record any combination of Systolic + Diastolic, Systolic only, or all three.  This negates the need to create individual FHIR profiles for any of the three.

#### About the extensions

In addition, This profile contains the following qualifying observations (extensions) with associated SNOMED CT value sets:

Body Position - This is used to capture an individual's body position while taking a blood pressure.  Usually "sitting".

Exercise Association - This is used to capture an individual's exercise status while taking blood pressure.  Usually "at rest".

Measurement Setting - This is used to capture the location (not body site) where the measurement(s) took place; At home, hospital, clinic, etc.

Sleep Status - This is used to capture whether or not the measurement was taken while the subject was asleep or awake.

#### Observation.device

This profile references a Blood Pressure Device profile of the Device resource in Observation.device.  The Blood Pressure Device profile is designed to be used specifically for blood pressure observations and includes an extension for Blood Pressure Cuff Size.

#### About Mean Arterial Pressure

Mean Arterial Pressure is a calculated observation based on the Systolic and Diastolic blood pressure measurements and is defined as the average pressure in an individual's arteries during one cardiac cycle.  It is *not* an average of several measurements.

Its formula is (SystolicBP + 2(DiastolicBP)) divided by 3; *(SBP + 2(DBP))/3*.   There are times when this needs to be known so it is included as an optional component in this panel.

#### *Example*

The following examples are provided to illustrate conformant resource content to this profile.

- [Blood Pressure Example](Observation-BloodPressurePanel-example.html)

#### *Use Cases*

<div>
	<h4>1.	Blood pressure taken while in a lying position</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Blood Pressure Panel with all children optional</td>
			  <td>85354-9</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.component.code</td>
			  <td>Systolic Blood Pressure</td>
			  <td>8480-6</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.component.code</td>
			  <td>Diastolic BloodPressure Meas</td>
			  <td>8462-4</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4">Body Position extension bindings and values</td>
			</tr>
			<tr>
			  <td>Observation.extension(bodyPositionExt) mapping</td>
			  <td>Body position with respect to gravity</td>
			  <td>8361-8</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.extension(bodyPositionExt).value</td>
			  <td>Supine body position (finding) </td>
			  <td>40199007</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h4>2.  Blood Pressure taken with an adult size cuff via left brachial artery</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Blood Pressure Panel with all children optional</td>
			  <td>85354-9</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.component.code</td>
			  <td>Systolic blood pressure</td>
			  <td>8480-6</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4">Cuff size value</td>
			</tr>
			<tr>
			  <td>Observation.device.extension(BloodPressureCuffSize).value</td>
			  <td>Blood pressure cuff, adult size (physical object)</td>
			  <td>720737000</td>
			  <td>SNOMED CT</td>
			</tr>
			<tr>
			  <td colspan="4">Body Site bindings and value</td>
			</tr>
			<tr>
			  <td>Observation.bodySite</td>
			  <td>Body location qualifier</td>
			  <td>39112-8</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>bodySite.value</td>
			  <td>Structure of left brachial artery (body structure)</td>
			  <td>723961002</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>


#### ***Value sets***

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-bodyPositionVS.html">Body Position value set</a></td>
			  <td>This value set contains concepts used to result the patient's body position, referencing the SNOMED Code 397155001 Body position (observable entity) and the LOINC term "Body position with respect to gravity" 8361-8. This is used in the BodyPositionExt extension.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpMeasDeviceVS.html">Blood Pressure Device Type value set</a></td>
			  <td>This value set contains concepts used to result the type of device used to measure a body blood pressure, referencing the SNOMED Code 23591000205102 “Blood pressure device type (observable entity)" and the LOINC term “Type of Blood pressure device” 41901-0.  This is used in the observation-deviceCode extension.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpmeasbodylocationprecoord.html">Blood Pressure Measurement Site value set</a></td>
			  <td>This value set contains a constrained list body location values used to result the body location where a blood pressure was measured, referencing the SNOMED Code 2281000205100 “Blood pressure measurement site (observable entity)” and the LOINC term "Blood pressure measurement site", 41904-4.  This is used in the bodySite backbone element.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpMeasMethodVS.html">Blood Pressure Method value set</a></td>
			  <td>This value set contains concepts used to result the method used for a blood pressure measurement, referencing the SNOMED Code 2291000205103 “Blood pressure method (observable entity)” and the LOINC term "Blood pressure method" 8357-6.  This is used in the method backbone element.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-exertionPhaseVS.html">Exertion Phase value Set</a></td>
			  <td>The purpose of the value set is to document exercise associated with a measurement. Resulting LOINC code 74008-4 "Exercise intensity".  This is used in the ExerciseAssociationExt extension.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-sleepStatusVS.html">Sleep Status value set</a></td>
			  <td>This value set contains values used to indicate the state of wakefulness during measurement.  This is used in the SleepStatusExt extension.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-MeasSettingVS.html">Measurement Setting value set</a></td>
			  <td>This value set is used to result the Measurement Setting extension.</td>
			</tr>
		</tbody>
	</table>
</div>


### Mandatory and Must Support Data Elements

#### Each resource must have

- Observation.category (fixed to Vital Signs category)
- Observation.code (fixed to LOINC code 85354-9)
- Observation.subject
- Observation.effective
- Observation.component (Systolic Blood Pressure, LOINC 8480-6)
- Observation.status

#### Each resource must support

- Body Position extension
- Exercise Association extension
- Observation.device (reference to Blood Pressure Device profile)
- Sleep Status extension
- Measurement Setting extension
- all components, including component.code and component.valueQuantity (value, unit, system, and code) 

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-body-length-intro.md

### Scope

The Body Length profile contains one observation, “Body height –lying”. This is a precoordinated observation that includes the body position “Lying”. This was requested by users to use when measuring an infant’s length. In addition, the Body Height Lying profile contains one qualifying observations with an associated SNOMED CT value sets: Body Height Measurement Devices Refset.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Body Length Example](Observation-bodyLength-example.html)

#### *Use Cases*

<div>
	<h4>1.	Height lying measured using tape measure.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Body Height - lying</td>
			  <td>8306-3</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Body height measurement device extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(measurementDeviceExt) mapping</td>
			  <td>Type of Height device</td>
			  <td>41910-1</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.extension(measurementDeviceExt).value</td>
			  <td>Measuring tape</td>
			  <td>51791000</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value sets:*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-heightLengthMeasDeviceVS.html">Body Height Measurement Device value set</a></td>
			  <td>This value set is used to result LOINC code 41910-1 "Type of Height device"</td>
			</tr> 
			<tr>
				<td><a href="ValueSet-heightBodyPositionVS.html">Body Height Body Position value set</a></td>
				<td>This value set is used to result the Body Position extension.</td>
			</tr>
			<tr>
				<td><a href="ValueSet-MeasSettingVS.html">Measurement Setting value set</a></td>
				<td>This value set is used to result the Measurement Setting extension.</td>
			</tr>
		</tbody>
	</table>
</div>

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-body-mass-index-intro.md

### Scope

Body Mass Index, the measurement of body fat based on an individual's height and weight and given as a ratio of kilograms per square meter.

This profile does not formally require or constrain that Observation.component be used for height and weight.  It is acceptable to use either Observation.component to record these measurements or to use Observation.derivedFrom to point to explicitly recorded weight and height.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Body Mass Index Example](Observation-bmi-example.html)

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-body-temperature-intro.md

### Scope

The Body Temperature profile contains one observation, temperature. In addition, this profile contains the following qualifying observations with associated SNOMED CT value sets: observation-deviceCode and MeasurementSetting.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Body Temperature Example](Observation-bodyTemperature-example.html)

#### *Use Cases*

<div>
	<h4>1.	Rectal temperature.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Temperature</td>
			  <td>8310-5</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.bodySite.value</td>
			  <td>Rectum structure (body structure)</td>
			  <td>34402009</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value sets:*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-bodyTempMeasurementDeviceVS.html">Body Temperature Measurement Device value set</a></td>
			  <td>Body temperature is taken, and the user records measurement method or instrument used to evaluate the temperature. It combines method and device values because they often overlap in EHR documentation systems.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bodyTempMeasBodyLocationPrecoordVS.html">Body Temperature Measurement Body Location value set</a></td>
			  <td>SELECT SNOMED CT code system values that describe where on the body the temperature was measured.</td>
			</tr> 
		</tbody>
	</table>
</div>

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-body-weight-intro.md

### Scope

The Body Weight profile contains one observation, body weight. In addition, the profile contains the following qualifying observations with associated SNOMED CT value sets: observation-deviceCode, AssociatedSituation, MeasurementSetting.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Body Weight Example](Observation-bodyWeight-example.html)

#### *Use Case*

<div>
	<h4>1.	Weight measured with patient fully clothed and wearing shoes.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Body Weight</td>
			  <td>29463-7</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4">Observation.extension(AssociatedSituation)</td>
			</tr>
			<tr>
			  <td>Observation.extension(AssociatedSituation).value</td>
			  <td>Wearing street clothes with shoes (finding)</td>
			  <td>971000205103</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value sets*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-weightMeasurementDeviceVS.html">Weight Measurement Device value set</a></td>
			  <td>This value set contains concepts used to result the type of instrument used to measure a body weight, referencing the LOINC term 8356-8 Type of Weighing device.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-BodyWeightAssociatedSituationVS.html">Body Weight Associated Situation value set</a></td>
			  <td>This value set contains concepts used to result the amount of clothing worn during the measure, referencing the SNOMED Code 248159006 "State of dress (observable entity)" and the LOINC term "Clothing worn during measure” 8352-7.</td>
			</tr>
		</tbody>
	</table>
</div>

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-bp-cuff-size-ext-intro.md

### Blood Pressure Cuff Size Extension

The purpose of this extension is to have a means of capturing the size of blood pressure cuff used in obtaining a blood pressure measurement.  It is used within the BPDevice structure definition, which is a profile of Device.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-bp-device-intro.md

### Blood Pressure Device profile

This profile is used specifically for blood pressure measurements.  It incorporates an extension for blood pressure device cuff size.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

[Blood Pressure Device Example 1](Device-BPDevice1-example.html)

[Blood Pressure Device Example 2](Device-BPDevice2-example.html)


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-ExerciseAssociationExt-intro.md

### Exercise Association Extension

The purpose of this extension is to capture the exertion phase during which a measurement was obtained, e.g. before exercise, during exercise, after exercise, at rest.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-head-occipital-frontal-circumference-intro.md

### Scope

The measurement of the distance around an individual's head using the occipital-frontal plane.

#### Use Case

<div>
	<h4>1.	Head circumference measured with tape measure.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Head Occipital-frontal circumference by Tape measure</td>
			  <td>8287-5</td>
			  <td>LOINC</td>
			</tr>
		</tbody>
	</table>
</div>

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Head Occipital-Frontal Circumference Example](Observation-headCircumference-example.html)

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-heart-rate-intro.md

﻿### Scope

The Heart Rate profile contains one observation, heart rate. In addition, this profile contains the following qualifying observations with associated SNOMED CT value sets: Body Position, observation-deviceCode, Exercise Association, SleepStatus, and MeasurementSetting.

*Note*

Many times Heart Rate is measured at the same time as a blood pressure, using a blood pressure device.  Although this profile does not constrain the Observation.device element to the [Blood Pressure Device profile](StructureDefinition-bp-device.html) as we did for the blood pressure profiles, it may be used to record the blood pressure device used to obtain the heart rate.  This constraint was not made due to the fact that there are many devices primarily used for other measurements (e.g. blood pressure, oxygen saturation via pulse oximetry) that could also measure a heart rate.  Constraining Observation.device to Blood Pressure Device would falsely limit it.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Heart Rate Example](Observation-heartRate-example.html)

#### *Use Cases*

<div>
	<h4>1.	Heart rate measured using radial artery palpation.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Heart Rate</td>
			  <td>8867-4</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.method.value</td>
			  <td>Palpation</td>
			  <td>113011001</td>
			  <td>SNOMED CT</td>
			</tr>
			<tr>
			  <td>Observation.bodySite.value</td>
			  <td>Structure of radial artery (body structure)</td>
			  <td>45631007</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
	<br>
	<h4>2.  Heart rate measurement during anesthesia</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Heart Rate</td>
			  <td>8867-4</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Associated Situation extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(AssociatedSituation).value</td>
			  <td>During procedure</td>
			  <td>307154001</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value sets*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-bodyPositionVS.html">Body Position value set</a></td>
			  <td>This value set contains concepts used to result the patient's body position, referencing the SNOMED Code 397155001 Body position (observable entity) and the LOINC term "Body position with respect to gravity" 8361-8.</td>
			</tr> 
			<tr>
			  <td><a href="ValueSet-heartRateMeasDeviceVS.html">Heart Rate Device Type value set</a></td>
			  <td>This value set contains concepts used to result the type of device used to measure a heart rate, referencing the LOINC term "Type of Heart rate device" 8887-2.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-heartRateMeasBodyLocationPrecoordVS.html">Heart Rate Measurement Body Location Precoordinated value set</a></td>
			  <td>This value set contains a constrained list body location values used to result the body location where a heart rate was measured, referencing the LOINC term "Heart rate measurement site", 41904-4.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-heartRateMeasMethodVS.html">Heart Rate Measurement Method value set</a></td>
			  <td>This value set contains concepts used to result the method used for a blood pressure measurement, referencing the LOINC term "Heart rate method” 8886-4.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-exertionPhaseVS.html">Exertion Phase value set</a></td>
			  <td>The purpose of the value set is to document exercise associated with a measurement. Resulting LOINC code 74008-4 "Exercise intensity".</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-sleepStatusVS.html">Sleep Status value set</a></td>
			  <td>This value set contains values used to indicate the state of wakefulness during measurement</td>
			</tr>
		</tbody>
	</table>
</div>


{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-Height-intro.md

### Scope and Usage

The Body Height profile contains one observation, body height. In addition, the profile contains the following qualifying observations with associated SNOMED CT value sets: Body Position, observation-deviceCode, ClothingWornDuringMeasure, and MeasurementSetting.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Body Height Example](Observation-height-example.html)

#### *Use Case*

<div>
	<h4>1.	Height measured using tape measure.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Body Height</td>
			  <td>8302-2</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Body height measurement device extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(measurementDeviceExt).value</td>
			  <td>Measuring tape</td>
			  <td>5179100</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value sets*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-heightLengthMeasDeviceVS.html">Body Height Measurement Device value set</a></td>
			  <td>This value set is used to result LOINC code 41910-1 "Type of Height device"</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bodyPositionVS.html">Body Position value set</a></td>
			  <td>This value set contains concepts used to result the patient's body position, referencing the SNOMED Code 397155001 Body position (observable entity) and the LOINC term "Body position with respect to gravity" 8361-8.</td>
			</tr>
		</tbody>
	</table>
</div>


{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-MeasurementProtocolExt-intro.md

### Measurement Protocol extension

This extension is to capture a set of rules used for calculating an average blood pressure.  This could consist of explicit times, body positions, resting states (exercise association), or number of measurements to take, etc..  Since these protocols will vary between institutions, providers, or clinical societies, the value set is subject to change.  Currently there is only one value in it but more are expected.

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-MeasurementSettingExt-intro.md

### Measurement Setting extension 

The purpose of this extension is to record a generalized location or setting at which a measurement was obtained, i.e. hospital, clinic, home, etc.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-oxygen-saturation-arterial-blood-intro.md

### Scope

The Oxygen Saturation in Arterial blood profile contains the measurement of relative oxygen in arterial blood given in percent.  There are no additional qualifying elements (extensions) for this profile.

### *Examples*

The following examples are provided to illustrate conformant resource content to this profile.

- [Oxygen Saturation in Arterial blood Example](Observation-oxygenSaturation-example.html)

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-oxygen-saturation-arterial-blood-pulseOx-intro.md

### Scope

The Oxygen saturation in Arterial blood via Pulse oximetry profile contains one observation for the relative amount of oxygen in arterial blood as measured by a pulse oximeter,, given in percent.  In addition, the profile contains the following qualifying observations with associated SNOMED CT value sets: Sensordescription, MeasurementSetting, and ExerciseAssociation.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Oxygen Saturation in Arterial blood Example](Observation-oxygenSaturationPulseOx-example.html)

#### *Use Cases*

<div>
	<h4>1.	Oxygen saturation measured with pulse oximeter probe.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Oxygen saturation in Arterial blood</td>
			  <td>59408-5</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Sensor Description extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(sensorDescriptionExt).value</td>
			  <td>Pulse oximeter (physical object)</td>
			  <td>448703006</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value sets*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-sensorDescriptionVS.html">Sensor Description value set</a></td>
			  <td>This reference set contains the instrument used when an oxygen saturation is measured in arterial blood by pulse oximetry, referencing the LOINC term "Oxygen Saturation Sensor Type" 73803-9</td>
			</tr> 
			<tr>
			  <td><a href="ValueSet-sPO2BodyLocationVS.html">Oxygen Saturation Body Location value set</a></td>
			  <td>This reference set contains a constrained list body location values used to record the site where an oximeter was placed, and capillary oxygen saturation measured.</td>
			</tr>
			<tr>
				<td><a href="ValueSet-exertionPhaseVS.html">Exertion Phase value set</a></td>
				<td>This value set is used to result the Exercise Association extension.</td>
			</tr>
		</tbody>
	</table>
</div>

{% include link-list.md %}

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-respiratory-rate-intro.md

﻿### Scope

The Respiratory Rate profile contains one observation, respiratory rate. In addition, this profile contains the following qualifying observations with associated SNOMED CT value sets: observation-deviceCode, BodyPosition, ExerciseAssociation, and MeasurementSetting.

#### Examples

The following examples are provided to illustrate conformant resource content to this profile.

- [Respiratory Rate Example](Observation-respiratoryRate-example.html)

#### *Use Cases*

<div>
	<h4>1.	Respiratory rate taken with patient sleeping in a supine position.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Respiratory Rate</td>
			  <td>9279-1</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Body Position extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(bodyPositionExt) mapping</td>
			  <td>Body position with respect to gravity</td>
			  <td>8361-8</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td rowspan="2">Observation.extension(bodyPositionExt) value sets</td>
			  <td>Body position value set (foundation metadata concept)</td>
			  <td>81000205109</td>
			  <td>SNOMED CT Solor extension</td>
			</tr>
			<tr>
			  <td>Body Position value set</td>
			  <td>2.16.840.1.113762.1.4.1181.38</td>
			  <td>VSAC</td>
			</tr>
			<tr>
			  <td>Observation.extension(bodyPositionExt).value</td>
			  <td>Supine body position (finding)</td>
			  <td>40199007</td>
			  <td>SNOMED CT</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Sleep Status extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(sleepStatusExt) mapping</td>
			  <td>Sleep Status</td>
			  <td><i>need to request LOINC code</i></td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.extension(sleepStatusExt) value sets</td>
			  <td>Sleep Status Refset</td>
			  <td>24011000205104</td>
			  <td>SNOMED CT Solor extension</td>
			</tr>
			<tr>
			  <td>Observation.extension(sleepStatusExt).value</td>
			  <td>Asleep (finding)</td>
			  <td>248220008</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
	<br>
	<h4>2.  Respiratory Rate taken during exercise.</h4>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">FHIR path and element binding</th>
			  <th width="40%">Text Description</th>
			  <th width="20%">Code</th>
			  <th width="20%">Terminology</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td>Observation.code</td>
			  <td>Respiratory Rate</td>
			  <td>9279-1</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td colspan="4"><i>Exercise Association extension bindings</i></td>
			</tr>
			<tr>
			  <td>Observation.extension(exerciseAssociationExt) mapping</td>
			  <td>Exercise Association</td>
			  <td>8361-8</td>
			  <td>LOINC</td>
			</tr>
			<tr>
			  <td>Observation.extension(exerciseAssociationExt).value</td>
			  <td>During exercise (qualifier value)</td>
			  <td>309604004</td>
			  <td>SNOMED CT</td>
			</tr>
		</tbody>
	</table>
</div>

#### *Value Sets*

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			  <td><a href="ValueSet-bodyPositionVS.html">Body Position value set</a></td>
			  <td>This value set contains concepts used to result the patient's body position, referencing the SNOMED Code 397155001 Body position (observable entity) and the LOINC term "Body position with respect to gravity" 8361-8.</td>
			</tr> 
			<tr>
			  <td><a href="ValueSet-respiratoryRateMeasDeviceVS.html">Respiratory Rate Measurement Device value set</a></td>
			  <td>This value set contains concepts used to result the type of device used to measure a heart rate, referencing the LOINC term "Type of Breath rate device" 9277-5.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-respiratoryRateMeasMethodVS.html">Respiratory Rate Measurement Method</a></td>
			  <td>This value set contains concepts used to result the method used for a respiratory   rate measurement, referencing the LOINC term "Breath rate method” 9275-9.</td>
			</tr>
			<tr>
				<td><a href="ValueSet-exertionPhaseVS.html">Exertion Phase value set</a></td>
				<td>This values set is used to result the Exercise Association extension.</td>
			</tr>
			<tr>
				<td><a href="ValueSet-MeasSettingVS.html">Measurement Setting value set</a></td>
				<td>This value set is used to result the Measurement Setting extension.</td>
			</tr>
			<tr>
				<td><a href="ValueSet-NumericResultIntVS.html">Abnormal Interpretation Numeric Nominal value set</a></td>
				<td>This value set is used to result the interpretation backbone element.</td>
			</tr>
		</tbody>
	</table>
</div>

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-SensorDescriptionExt-intro.md

### Sensor Description Extension

The purpose of this extension is to capture the type of sensor used in the measurement of a oxygen saturation via pulse oximetry.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-SleepStatusExt-intro.md

### Sleep Status Extension

The purpose of this extension is to capture if the measurement was made while the subject was asleep or awake.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-twenty-four-hour-blood-pressure-intro.md

### Scope

This blood pressure profile is used to capture an average blood pressure (systolic and diastolic) over a period of twenty four hours.

There are LOINC codes for the systolic and diastolic components.

#### About the extensions

Body Position - This is used to capture an individual's body position while taking a blood pressure.  Ususally "sitting".

Exercise Association - This is used to capture an individual's excercise status while taking blood pressure.  Usually "at rest".

observation-deviceCode - This is an intentional separation from the Observation.device backbone element.  Used for when only a device type needs to be recorded without the use of another resource.  Because the values of this extension span both device type and cuff size, the cardinality of this element has been set to 0..2.

Measurement Setting - This is used to capture the location (not body site) where the measurement(s) took place; At home, hospital, clinic, etc.

#### Example

[Twenty Four Hour Blood Pressure](Observation-TwentyFourHourBloodPressure-example.html)

#### Value Sets

<div>
	<table class="grid">
		<thead>
			<tr>
			  <th width="20%">Value Set</th>
			  <th width="40%">Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><a href="ValueSet-bodyPositionVS.html">Body Position value set</a></td>
				<td>This value set is used to result the Body Position extension.</td>
			</tr>
			<tr>
				<td><a href="ValueSet-exertionPhaseVS.html">Exertion Phase value set</a></td>
				<td>This value set is used to result the Exercise Association extension.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpMeasDeviceVS.html">Blood Pressure Device Type value set</a></td>
			  <td>This value set contains concepts used to result the type of device used to measure a body blood pressure, referencing the SNOMED Code 23591000205102 “Blood pressure device type (observable entity)" and the LOINC term “Type of Blood pressure device” 41901-0.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpmeasbodylocationprecoord.html">Blood Pressure Measurement Site value set</a></td>
			  <td>This value set contains a constrained list body location values used to result the body location where a blood pressure was measured, referencing the SNOMED Code 2281000205100 “Blood pressure measurement site (observable entity)” and the LOINC term "Blood pressure measurement site", 41904-4.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-bpMeasMethodVS.html">Blood Pressure Method value set</a></td>
			  <td>This value set contains concepts used to result the method used for a blood pressure measurement, referencing the SNOMED Code 2291000205103 “Blood pressure method (observable entity)” and the LOINC term "Blood pressure method" 8357-6.</td>
			</tr>
			<tr>
			  <td><a href="ValueSet-MeasSettingVS.html">Measurement Setting value set</a></td>
			  <td>This value set is used to result the Mesurement Setting extension.</td>
			</tr>
		</tbody>
	</table>
</div>

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/StructureDefinition-vital-signs-panel-intro.md

### Scope

The Vital Signs Panel is a collection of vital signs measurements as defined in the LOINC panel 85353-1, Vital signs, weight, height, head circumference, oxygen saturation and BMI panel.  Some of the measurements in this panel may not be considered as true vital signs but are included due to their inclusion in the LOINC panel.

#### About the Observation.interpretation binding

The Observation.interpretation - The use of interpretation at the panel level was requested by the subject matter experts that contributed to the project.  Currently the only value that could apply to all of the measurements in the panel (and subsequently the only value in the value set binding) is "Within defined limits".  We will add to the value set for this element as we receive and validate more suggestions.  *This element and the value of "Within defined limits" should not be used if any of the components has a differing interpretation.*

{% include link-list.md %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/Template-examples.md

<!-- Uncomment and update with links to example resource(s) -->
<!--
<h3>Examples</h3>

<p>
The following examples are provided to illustrate conformant resource content to this profile.
</p>

- [Resource.id](ResourceType-Resource.id.html)
- [skinwoundbed-example](Observation-skinwoundbed-example.html)
-->

---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/terminology.md

---
title: Terminology
layout: default
active: terminology
---

This page lists all the code systems and value sets defined as part of the Vital Signs Implementation Guide. For more information on using codes in resources, see the [FHIR specification]({{site.data.fhir.path}}terminologies.html).

### Code Systems

**Code systems published in this IG** - Includes externally defined code systems.  There are three temporary codes systems used in this implementation guide.  These will be replaced when their terms are created in a standard terminology.

{% include list-simple-name-codesystems.xhtml %}

### Value Sets

{% include list-simple-name-valuesets.xhtml %}

{% include link-list.md %}

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-systems.html) for a complete discussion on code systems and a list of codes system names used in FHIR.


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/toc-generator.md

{% for p in site.data.pages %}
{% assign pagepath = p[0] %}
{% unless pagepath contains 'ttl' or pagepath contains 'json' or  pagepath contains 'xml' or  pagepath contains 'definitions' or pagepath contains 'mappings' %}
{% assign pagelabel = site.data.pages[pagepath].label | remove: ".0" %}
{% assign pagetitle = site.data.pages[pagepath].title %}
{% assign depth = pagelabel | split: '.' %}
{{ pagelabel | plus: 1 }}&nbsp;-&nbsp;[{{ pagetitle | remove: ".html" }}]({{ pagepath }})
{% endunless %}
{% endfor %}


---

File: repos/HL7_SLASH_cimi-vital-signs/input/pagecontent/toc.md

---
title: Table of Contents
layout: default
active: toc
---

<em> Put your TOC here. like example below  (this is not automatically generated)...</em>

~~~
...todo....
~~~


---

