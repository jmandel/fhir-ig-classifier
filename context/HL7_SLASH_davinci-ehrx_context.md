File: repos/HL7_SLASH_davinci-ehrx/input/fsh/codesystems/HRexTempCodes.fsh

CodeSystem: HRexTempCodes
Id: hrex-temp
Title: "HRex Temporary Code System"
Description: "Codes temporarily defined as part of the HRex implementation guide.  These will eventually migrate into an officially maintained terminology (likely HL7's UTG code systems)."
* ^status = #active
* ^hierarchyMeaning = #is-a
* ^caseSensitive = true
* ^content = #complete
* ^experimental = false
* ^property[0].code = #abstract
* ^property[0].uri = "http://hl7.org/fhir/concept-properties#notSelectable"
* ^property[0].type = #boolean
* #data-request "data request task" "A type of Task asking the owner to deliver the data corresponding to the characteristics defined by the Task.inputs to the Task.beneficiary"
* #data-query "data query input" "Indicates the parameters of a FHIR RESTful search to be executed whose results are requested.  The content will be the query URL following the 'base'.  E.g. `Observation?...`"
* #data-code "data code input" "A code for a document or otherwise describing the characteristics of the information requested"
* #data-value "data values output" "The result of a data request"
* #UMB "Unique Product-independent Payer Person Identifier" "A unique identifier assigned to an individual that is consistent regardless of the individual irrespective of their role (subscriber, dependent, etc.) or which product(s) they have with that payer."
* #_endpoints "Endpoint codes" "An abstract collector for endpoint codes"
  * ^property[0].code = #abstract
  * ^property[0].valueBoolean = true
  * #payer-identifier                "Payer Identifier" "A unique identifier for the payer responsible for the coverage(s) associated with the endpoints listed in this file"
  * #davinci_crd_hook_endpoint       "CRD Hook Endpoint" "Endpoint to invoke hook services for any decision support services covered by CRD"
  * #davinci_cdex_attachsubmit_endpoint "CDex Submit Attachment Endpoint" "The 'base' for the endpoint used to invoke the $submit-attachment operation for Unsolicited attachments"
  * #davinci_dtr_qpackage_endpoint   "DTR Questionnaire Package Endpoint" "The 'base' for the endpoint to invoke the $questionnaire-package operation for the coverages relevant for this Patient"
  * #davinci_pas_submission_endpoint "PAS Submission Endpoint" "The 'base' for the endpoints used to invoke the $submit or $inquire operations for the coverages relevant to this Patient"
  * #davinci_pdex_patient_endpoint   "PDex Patient Data Endpoint" "The 'base' for the endpoints used to query for data for patient access"
  * #davinci_pdex_provider_endpoint  "PDex Provider Data Endpoint" "The 'base' for the endpoints used to query for data for healthcare provider access"
  * #davinci_pdex_payer_endpoint     "PDex Payer Data Endpoint" "The 'base' for the endpoints used to query for data for healthcare payer access"
  * #carin_bluebutton_endpoint       "CARIN Bluebutton Endpoint" "The 'base' for the endpoints used to query for Blue Button conformant data."


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/conceptmaps/ConceptMap-NUCC-CareTeamMemberFunction.fsh


Instance: NUCC-CareTeamMemberFunction
InstanceOf: ConceptMap
Title: "NUCC to SNOMED Care Team Member Function Map"
Description: "A mapping between the US Core 3.1.1 and 6.1.0 PractitionerRole.code value sets"
Usage: #definition
* name = "NUCCCareTeamMemberFunctionMap"
* status = #active
* experimental = false
//* sourceCanonical = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
* sourceCanonical = "http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role"
* targetCanonical = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.30"
* group[+]
  * source = $provider-taxonomy
  * target = $sct
  * insert mapnarrow(#101Y00000X, [[Counselor]], #224595007, [[Professional counselor (occupation)]], [[Not all counsellors are professional consellors]])
  * insert mapeq(#102L00000X, [[Psychoanalyst]], #224600003, [[Psychoanalyst (occupation)]])
  * insert mapwide(#102X00000X, [[Poetry Therapist]], #309410006, [[Arts Therapist]])
  * insert mapeq(#103G00000X, [[Clinical Neuropsychologist]], #611621000124105, [[Clinical neuropsychologist (occupation)]])
  * insert mapnarrow(#103K00000X, [[Behavior Analyst]], #224583007, [[Behavior therapist (occupation)]], [[Therapist is more specific than analyst]])
  * insert mapeq(#103T00000X, [[Psychologist]], #59944000, [[Psychologist (occupation)]])
  * insert maprelated(#104100000X, [[Social Worker]], #224598009, [[Trained social worker counselor (occupation)]], [[Social worker is not quite the same as social worker councellor]])
  * insert maprelated(#106E00000X, [[Assistant Behavior Analyst]], #224584001, [[Behavior therapy assistant (occupation)]], [[Assistant and analyst aren't quite the same]])
  * insert maprelated(#106H00000X, [[Marriage & Family Therapist]], #224596008, [[Marriage guidance counselor (occupation)]], [[Therapist and counsellor aren't quite the same]])
  * insert nomap(#106S00000X, [[Behavior Technician]])
  * insert mapeq(#111N00000X, [[Chiropractor]], #3842006, [[Chiropractor (occupation)]])
  * insert mapeq(#122300000X, [[Dentist]], #106289002, [[Dentist (occupation)]])
  * insert mapwide(#122400000X, [[Denturist]], #59317003, [[Dental prosthesis maker and repairer (occupation)]])
  * insert mapeq(#124Q00000X, [[Dental Hygienist]], #26042002, [[Dental hygienist (occupation)]])
  * insert mapwide(#125J00000X, [[Dental Therapist]], #159035003, [[Dental auxiliary (occupation)]])
  * insert mapwide(#125K00000X, [[Advanced Practice Dental Therapist]], #159035003, [[Dental auxiliary (occupation)]])
  * insert mapwide(#125Q00000X, [[Oral Medicinist]], #21365001, [[Specialized Dentist]])
  * insert mapeq(#126800000X, [[Dental Assistant]], #4162009, [[Dental assistant (occupation)]])
  * insert mapwide(#126900000X, [[Dental Laboratory Technician]], #160008000, [[Dental technician (occupation)]])
  * insert nomap(#132700000X, [[Dietary Manager]])
  * insert mapeq(#133N00000X, [[Nutritionist]], #768827000, [[Nutritionist (occupation)]])
  * insert mapeq(#133V00000X, [[Dietitian, Registered]], #159033005, [[Dietitian (occupation)]])
  * insert nomap(#136A00000X, [[Dietetic Technician]])
  * insert nomap(#146D00000X, [[Personal Emergency Response Attendant]])
  * insert mapeq(#146L00000X, [[Emergency Medical Technician, Paramedic]], #397897005, [[Paramedic (occupation)]])
  * insert mapwide(#146M00000X, [[Emergency Medical Technician, Intermediate]], #397897005, [[Paramedic (occupation)]])
  * insert mapwide(#146N00000X, [[Emergency Medical Technician, Basic]], #397897005, [[Paramedic (occupation)]])
  * insert mapeq(#152W00000X, [[Optometrist]], #28229004, [[Optometrist (occupation)]])
  * insert nomap(#156F00000X, [[Technician/Technologist]])
  * insert mapeq(#163W00000X, [[Registered Nurse]], #224535009, [[Registered nurse (occupation)]])
  * insert mapeq(#164W00000X, [[Licensed Practical Nurse]], #442251000124100, [[Licensed practical nurse (occupation)]])
  * insert mapeq(#164X00000X, [[Licensed Vocational Nurse]], #442251000124100, [[Licensed practical nurse (occupation)]])
  * insert nomap(#167G00000X, [[Licensed Psychiatric Technician]])
  * insert mapwide(#170100000X, [[Medical Genetics, Ph.D. Medical Genetics]], #159141008, [[Geneticist (occupation)]])
  * insert mapeq(#170300000X, [[Genetic Counselor, MS]], #310189009, [[Genetic counselor (occupation)]])
  * insert nomap(#171000000X, [[Military Health Care Provider]])
  * insert mapeq(#171100000X, [[Acupuncturist]], #450044741000087104, [[Acupuncturist (occupation)]])
  * insert mapeq(#171M00000X, [[Case Manager/Care Coordinator]], #768832004, [[Case manager (occupation)]])
  * insert mapeq(#171R00000X, [[Interpreter]], #40570005, [[Interpreter (occupation)]])
  * insert nomap(#171W00000X, [[Contractor]])
  * insert nomap(#172A00000X, [[Driver]])
  * insert nomap(#172M00000X, [[Mechanotherapist]])
  * insert nomap(#172P00000X, [[Naprapath]])
  * insert mapnarrow(#172V00000X, [[Community Health Worker]], #23278007, [[Community health physician (occupation)]], [[Not all workers are physicians]])
  * insert mapwide(#173000000X, [[Legal Medicine]], #721940004, [[Legal medicine specialist (occupation)]])
  * insert nomap(#173C00000X, [[Reflexologist]])
  * insert mapwide(#173F00000X, [[Sleep Specialist, PhD]], #720503005, [[Sleep medicine specialist (occupation)]])
  * insert nomap(#174200000X, [[Meals]])
  * insert nomap(#174400000X, [[Specialist]])
  * insert mapeq(#174H00000X, [[Health Educator]], #409974004, [[Health educator (occupation)]])
  * insert nomap(#174M00000X, [[Veterinarian]])
  * insert mapwide(#174N00000X, [[Lactation Consultant, Non-RN]], #225726006, [[Lactation consultant (occupation)]])
  * insert nomap(#174V00000X, [[Clinical Ethicist]])
  * insert mapeq(#175F00000X, [[Naturopath]], #1255370008, [[Specialist in naturopathy (occupation)]])
  * insert mapeq(#175L00000X, [[Homeopath]], #1255371007, [[Specialist in homeopathy (occupation)]])
  * insert mapeq(#175M00000X, [[Midwife, Lay]], #445531000124104, [[Lay midwife (occupation)]])
  * insert nomap(#175T00000X, [[Peer Specialist]])
  * insert mapnarrow(#176B00000X, [[Midwife]], #309453006, [[Registered midwife (occupation)]], [[Not all midwives are registered]])
  * insert nomap(#176P00000X, [[Funeral Director]])
  * insert nomap(#177F00000X, [[Lodging]])
  * insert mapeq(#183500000X, [[Pharmacist]], #46255001, [[Pharmacist (occupation)]])
  * insert mapeq(#183700000X, [[Pharmacy Technician]], #159040006, [[Pharmacy technician (occupation)]])
  * insert nomap(#193200000X, [[Multi-Specialty]])
  * insert nomap(#193400000X, [[Single Specialty]])
  * insert mapwide(#202C00000X, [[Independent Medical Examiner]], #440051000124108, [[Medical examiner (occupation)]])
  * insert mapwide(#202K00000X, [[Phlebology]], #69280009, [[Specialized physician (occupation)]])
  * insert mapwide(#204C00000X, [[Neuromusculoskeletal Medicine]], #69280009, [[Specialized physician (occupation)]])
  * insert mapwide(#204D00000X, [[Neuromusculoskeletal Medicine & OMM]], #69280009, [[Specialized physician (occupation)]])
  * insert mapnarrow(#204E00000X, [[Oral & Maxillofacial Surgery]],(#49993003, [[Oral surgeon (occupation)]], [[Oral doesn't include maxillofacial]])
  * insert mapeq(#204F00000X, [[Transplant Surgery]], #309385005, [[Transplant surgeon (occupation)]])
  * insert mapwide(#204R00000X, [[Electrodiagnostic Medicine]], #69280009, [[Specialized physician (occupation)]])
  * insert mapeq(#207K00000X, [[Allergy & Immunology]], #721943002, [[Clinical immunology and allergy specialist (occupation)]])
  * insert mapeq(#207L00000X, [[Anesthesiology]], #88189002, [[Anesthesiologist (occupation)]])
  * insert mapeq(#207N00000X, [[Dermatology]], #18803008, [[Dermatologist (occupation)]])
  * insert mapnarrow(#207P00000X, [[Emergency Medicine]], #309294001, [[Emergency department physician (occupation)]], [[Not all emergency medicine personnel are physicians]])
  * insert mapeq(#207Q00000X, [[Family Medicine]], #62247001, [[Family medicine specialist (occupation)]])
  * insert mapeq(#207R00000X, [[Internal Medicine]], #39677007, [[Internal medicine specialist (occupation)]])
  * insert mapeq(#207T00000X, [[Neurological Surgery]], #45544007, [[Neurosurgeon (occupation)]])
  * insert mapeq(#207U00000X, [[Nuclear Medicine]], #80933006, [[Nuclear medicine specialist (occupation)]])
  * insert mapeq(#207V00000X, [[Obstetrics & Gynecology]], #309367003, [[Obstetrician and gynecologist (occupation)]])
  * insert mapeq(#207W00000X, [[Ophthalmology]], #422234006, [[Ophthalmologist (occupation)]])
  * insert mapeq(#207X00000X, [[Orthopaedic Surgery]], #22731001, [[Orthopedic surgeon (occupation)]])
  * insert mapnarrow(#207Y00000X, [[Otolaryngology]], #309372007, [[Ear, nose and throat surgeon (occupation)]], [[Surgery is only part of Otalaryngology]])
  * insert mapeq(#208000000X, [[Pediatrics]], #82296001, [[Pediatrician (occupation)]])
  * insert mapwide(#208100000X, [[Physical Medicine & Rehabilitation]], #309360001, [[Rehabilitation physician (occupation)]])
  * insert mapeq(#208200000X, [[Plastic Surgery]], #8724009, [[Plastic surgeon (occupation)]])
  * insert mapeq(#208600000X, [[Surgery]], #304292004, [[Surgeon (occupation)]])
  * insert mapeq(#208800000X, [[Urology]], #24590004, [[Urologist (occupation)]])
  * insert mapeq(#208C00000X, [[Colon & Rectal Surgery]], #309379003, [[Colorectal surgeon (occupation)]])
  * insert mapeq(#208D00000X, [[General Practice]], #59058001, [[General physician (occupation)]])
  * insert mapeq(#208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]], #309369000, [[Cardiothoracic surgeon (occupation)]])
  * insert mapeq(#208M00000X, [[Hospitalist]], #768837005, [[Hospitalist (occupation)]])
  * insert mapeq(#208U00000X, [[Clinical Pharmacology]], #310173006, [[Clinical pharmacologist (occupation)]])
  * insert mapwide(#209800000X, [[Legal Medicine]], #721940004, [[Legal medicine specialist (occupation)]])
  * insert mapeq(#211D00000X, [[Assistant, Podiatric]], #309435000, [[Podiatry assistant (occupation)]])
  * insert mapeq(#213E00000X, [[Podiatrist]], #159034004, [[Podiatrist (occupation)]])
  * insert mapeq(#221700000X, [[Art Therapist]], #309410006, [[Arts therapist (occupation)]])
  * insert nomap(#222Q00000X, [[Developmental Therapist]])
  * insert mapeq(#222Z00000X, [[Orthotist]], #309428008, [[Orthotist (occupation)]])
  * insert nomap(#224900000X, [[Mastectomy Fitter]])
  * insert nomap(#224L00000X, [[Pedorthist]])
  * insert mapeq(#224P00000X, [[Prosthetist]], #1276561000168102, [[Prosthetist (occupation)]])
  * insert mapwide(#224Y00000X, [[Clinical Exercise Physiologist]], #309349005, [[Clinical physiologist (occupation)]])
  * insert mapwide(#224Z00000X, [[Occupational Therapy Assistant]], #224587008, [[Occupational therapy helper (occupation)]])
  * insert nomap(#225000000X, [[Orthotic Fitter]])
  * insert mapeq(#225100000X, [[Physical Therapist]], #36682004, [[Physiotherapist (occupation)]])
  * insert mapwide(#225200000X, [[Physical Therapy Assistant]], #309404006, [[Physiotherapy helper (occupation)]])
  * insert nomap(#225400000X, [[Rehabilitation Practitioner]])
  * insert nomap(#225500000X, [[Specialist/Technologist]])
  * insert mapeq(#225600000X, [[Dance Therapist]], #309411005, [[Dance therapist (occupation)]])
  * insert mapeq(#225700000X, [[Massage Therapist]], #1172950003, [[Massage therapist (occupation)]])
  * insert nomap(#225800000X, [[Recreation Therapist]])
  * insert mapeq(#225A00000X, [[Music Therapist]], #309412003, [[Music therapist (occupation)]])
  * insert nomap(#225B00000X, [[Pulmonary Function Technologist]])
  * insert mapwide(#225C00000X, [[Rehabilitation Counselor]], #224595007, [[Professional counselor (occupation)]])
  * insert mapeq(#225X00000X, [[Occupational Therapist]], #80546007, [[Occupational therapist (occupation)]])
  * insert nomap(#226000000X, [[Recreational Therapist Assistant]])
  * insert nomap(#226300000X, [[Kinesiotherapist]])
  * insert mapwide(#227800000X, [[Respiratory Therapist, Certified]], #442867008, [[Respiratory therapist (occupation)]])
  * insert mapwide(#227900000X, [[Respiratory Therapist, Registered]], #442867008, [[Respiratory therapist (occupation)]])
  * insert nomap(#229N00000X, [[Anaplastologist]])
  * insert mapeq(#231H00000X, [[Audiologist]], #309418004, [[Audiologist (occupation)]])
  * insert nomap(#235500000X, [[Specialist/Technologist]])
  * insert mapeq(#235Z00000X, [[Speech-Language Pathologist]], #159026005, [[Speech/language therapist (occupation)]])
  * insert mapnarrow(#237600000X, [[Audiologist-Hearing Aid Fitter]], #309421002, [[Hearing aid dispenser (occupation)]], [[Fitters do more than dispensing]])
  * insert mapwide(#237700000X, [[Hearing Instrument Specialist]], #159026005, [[Speech/language therapist (occupation)]])
  * insert mapeq(#242T00000X, [[Perfusionist]], #721942007, [[Cardiovascular perfusionist (occupation)]])
  * insert nomap(#243U00000X, [[Radiology Practitioner Assistant]])
  * insert nomap(#246Q00000X, [[Specialist/Technologist, Pathology]])
  * insert nomap(#246R00000X, [[Technician, Pathology]])
  * insert nomap(#246W00000X, [[Technician, Cardiology]])
  * insert nomap(#246X00000X, [[Specialist/Technologist Cardiovascular]])
  * insert nomap(#246Y00000X, [[Specialist/Technologist]])
  * insert nomap(#246Z00000X, [[Specialist/Technologist]])
  * insert nomap(#247000000X, [[Technician]])
  * insert mapnarrow(#247100000X, [[Radiologic Technologist]], #41904004, [[Medical X-ray technician (occupation)]], [[Radiologists deal with more than X-ray]])
  * insert nomap(#247200000X, [[Technician]])
  * insert nomap(#251300000X, [[Local Education Agency (LEA)]])
  * insert mapeq(#251B00000X, [[Case Management]], #768832004, [[Case manager (occupation)]])
  * insert nomap(#251C00000X, [[Day Training]])
  * insert mapnarrow(#251E00000X, [[Home Health]], #768730001, [[Home health aide (occupation)]], [[Aide is only one type of home health]])
  * insert mapnarrow(#251F00000X, [[Home Infusion]], #453081000124105, [[Infusion pharmacist (person)]], [[Pharmacist is only one type of home infusion role]])
  * insert nomap(#251G00000X, [[Hospice Care]])
  * insert nomap(#251J00000X, [[Nursing Care]])
  * insert mapnarrow(#251K00000X, [[Public Health or Welfare]], #26369006, [[Public health nurse (occupation)]], [[Nurse is only one type of public health role]])
  * insert mapnarrow(#251S00000X, [[Community/Behavioral Health]], #23278007, [[Community health physician (occupation)]], [[Physician is only one type of community role]])
  * insert nomap(#251T00000X, [[Program of All-Inclusive Care for the Elderly (PACE) Provider Organization]])
  * insert nomap(#251V00000X, [[Voluntary or Charitable]])
  * insert nomap(#251X00000X, [[Supports Brokerage]])
  * insert nomap(#252Y00000X, [[Early Intervention Provider Agency]])
  * insert nomap(#253J00000X, [[Foster Care Agency]])
  * insert mapnarrow(#253Z00000X, [[In Home Supportive Care]], #768731002, [[Home helper (occupation)]], [[Home helper is only one type of supportive care]])
  * insert nomap(#261Q00000X, [[Clinic/Center]])
  * insert nomap(#273100000X, [[Epilepsy Unit]])
  * insert nomap(#273R00000X, [[Psychiatric Unit]])
  * insert nomap(#273Y00000X, [[Rehabilitation Unit]])
  * insert nomap(#275N00000X, [[Medicare Defined Swing Bed Unit]])
  * insert nomap(#276400000X, [[Rehabilitation]])
  * insert nomap(#281P00000X, [[Chronic Disease Hospital]])
  * insert nomap(#282E00000X, [[Long Term Care Hospital]])
  * insert nomap(#282J00000X, [[Religious Nonmedical Health Care Institution]])
  * insert nomap(#282N00000X, [[General Acute Care Hospital]])
  * insert nomap(#283Q00000X, [[Psychiatric Hospital]])
  * insert nomap(#283X00000X, [[Rehabilitation Hospital]])
  * insert nomap(#284300000X, [[Special Hospital]])
  * insert nomap(#286500000X, [[Military Hospital]])
  * insert nomap(#287300000X, [[Christian Science Sanitorium]])
  * insert nomap(#291900000X, [[Military Clinical Medical Laboratory]])
  * insert nomap(#291U00000X, [[Clinical Medical Laboratory]])
  * insert nomap(#292200000X, [[Dental Laboratory]])
  * insert nomap(#293D00000X, [[Physiological Laboratory]])
  * insert nomap(#302F00000X, [[Exclusive Provider Organization]])
  * insert nomap(#302R00000X, [[Health Maintenance Organization]])
  * insert nomap(#305R00000X, [[Preferred Provider Organization]])
  * insert nomap(#305S00000X, [[Point of Service]])
  * insert nomap(#310400000X, [[Assisted Living Facility]])
  * insert nomap(#310500000X, [[Intermediate Care Facility]])
  * insert nomap(#311500000X, [[Alzheimer Center (Dementia Center)]])
  * insert nomap(#311Z00000X, [[Custodial Care Facility]])
  * insert nomap(#313M00000X, [[Nursing Facility/Intermediate Care Facility]])
  * insert nomap(#314000000X, [[Skilled Nursing Facility]])
  * insert nomap(#315D00000X, [[Hospice]])
  * insert nomap(#315P00000X, [[Intermediate Care Facility]])
  * insert nomap(#317400000X, [[Christian Science Facility]])
  * insert nomap(#320600000X, [[Residential Treatment Facility]])
  * insert nomap(#320700000X, [[Residential Treatment Facility, Physical Disabilities]])
  * insert nomap(#320800000X, [[Community Based Residential Treatment Facility]])
  * insert nomap(#320900000X, [[Community Based Residential Treatment Facility]])
  * insert nomap(#322D00000X, [[Residential Treatment Facility]])
  * insert nomap(#323P00000X, [[Psychiatric Residential Treatment Facility]])
  * insert nomap(#324500000X, [[Substance Abuse Rehabilitation Facility]])
  * insert nomap(#331L00000X, [[Blood Bank]])
  * insert nomap(#332000000X, [[Military/U.S. Coast Guard Pharmacy]])
  * insert nomap(#332100000X, [[Department of Veterans Affairs (VA) Pharmacy]])
  * insert nomap(#332800000X, [[Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy]])
  * insert nomap(#332900000X, [[Non-Pharmacy Dispensing Site]])
  * insert nomap(#332B00000X, [[Durable Medical Equipment & Medical Supplies]])
  * insert nomap(#332G00000X, [[Eye Bank]])
  * insert nomap(#332H00000X, [[Eyewear Supplier]])
  * insert mapnarrow(#332S00000X, [[Hearing Aid Equipment]], #309421002, [[Hearing aid dispenser (occupation)]], [[Dispenser is only one type]])
  * insert nomap(#332U00000X, [[Home Delivered Meals]])
  * insert nomap(#333300000X, [[Emergency Response System Companies]])
  * insert nomap(#333600000X, [[Pharmacy]])
  * insert nomap(#335E00000X, [[Prosthetic/Orthotic Supplier]])
  * insert nomap(#335G00000X, [[Medical Foods Supplier]])
  * insert nomap(#335U00000X, [[Organ Procurement Organization]])
  * insert nomap(#335V00000X, [[Portable X-ray and/or Other Portable Diagnostic Imaging Supplier]])
  * insert nomap(#341600000X, [[Ambulance]])
  * insert nomap(#341800000X, [[Military/U.S. Coast Guard Transport]])
  * insert nomap(#343800000X, [[Secured Medical Transport (VAN)]])
  * insert nomap(#343900000X, [[Non-emergency Medical Transport (VAN)]])
  * insert nomap(#344600000X, [[Taxi]])
  * insert nomap(#344800000X, [[Air Carrier]])
  * insert nomap(#347B00000X, [[Bus]])
  * insert nomap(#347C00000X, [[Private Vehicle]])
  * insert nomap(#347D00000X, [[Train]])
  * insert nomap(#347E00000X, [[Transportation Broker]])
  * insert mapeq(#363A00000X, [[Physician Assistant]], #449161006, [[Physician assistant (occupation)]])
  * insert mapeq(#363L00000X, [[Nurse Practitioner]], #224571005, [[Nurse practitioner (occupation)]])
  * insert mapeq(#364S00000X, [[Clinical Nurse Specialist]], #224570006, [[Clinical nurse specialist (occupation)]])
  * insert mapeq(#367500000X, [[Nurse Anesthetist, Certified Registered]], #405278004, [[Certified registered nurse anesthetist (occupation)]])
  * insert mapeq(#367A00000X, [[Advanced Practice Midwife]], #445521000124102, [[Advanced practice midwife (occupation)]])
  * insert nomap(#367H00000X, [[Anesthesiologist Assistant]])
  * insert nomap(#372500000X, [[Chore Provider]])
  * insert nomap(#372600000X, [[Adult Companion]])
  * insert nomap(#373H00000X, [[Day Training/Habilitation Specialist]])
  * insert nomap(#374700000X, [[Technician]])
  * insert mapeq(#374J00000X, [[Doula]], #768825008, [[Doula (occupation)]])
  * insert nomap(#374K00000X, [[Religious Nonmedical Practitioner]])
  * insert nomap(#374T00000X, [[Religious Nonmedical Nursing Personnel]])
  * insert mapeq(#374U00000X, [[Home Health Aide]], #768730001, [[Home health aide (occupation)]])
  * insert nomap(#376G00000X, [[Nursing Home Administrator]])
  * insert nomap(#376J00000X, [[Homemaker]])
  * insert mapeq(#376K00000X, [[Nurse's Aide]], #73265009, [[Nursing aid (occupation)]])
  * insert nomap(#385H00000X, [[Respite Care]])
  * insert mapnarrow(#390200000X, [[Student in an Organized Health Care Education/Training Program]], #398130009, [[Medical student (occupation)]], [[Medical student is a subtype of possible training]])
  * insert nomap(#405300000X, [[Prevention Professiona]])

Instance: CareTeamMember-NUCCFunction
InstanceOf: ConceptMap
Title: "SNOMED Care Team Member Function to NUCC Map"
Description: "A mapping between the US Core 3.1.1 and 6.1.0 PractitionerRole.code value sets"
Usage: #definition
* name = "CareTeamMemberFunctionNUCCMap"
* status = #active
* experimental = false
* sourceCanonical = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.30"
* targetCanonical = "http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role"
* group[+]
  * source = $provider-taxonomy
  * target = $sct
  * insert mapeq(#106289002, [[Dentist (occupation)]], #122300000X, [[Dentist]])
  * insert mapeq(#106292003, [[Professional nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert nomap(#106293008, [[Nursing personnel (occupation)]])
  * insert maprelated(#106294002, [[Midwifery personnel (occupation)]], #176B00000X, [[Midwife]], [[Midwifery personnel is a sibling of (not parent of) midwife]])
  * insert maprelated(#106294002, [[Midwifery personnel (occupation)]], #175M00000X, [[Midwife, Lay]], [[Midwifery personnel is a sibling of (not parent of) midwife]])
  * insert maprelated(#106294002, [[Midwifery personnel (occupation)]], #367A00000X, [[Advanced Practice Midwife]], [[Midwifery personnel is a sibling of (not parent of) midwife]])
  * insert mapnarrow(#106296000, [[Physiotherapist/occupational therapist (occupation)]], #225X00000X, [[Occupational Therapist]], [[Physiotherapists are not occupational therapists]])
  * insert nomap(#106310008, [[Worker in religion (occupation)]])
  * insert nomap(#106311007, [[Minister of religion/related member of religious order (occupation)]])
  * insert nomap(#106330007, [[Philologist, translator/interpreter (occupation)]])
  * insert nomap(#11015003, [[Minister of religion (occupation)]])
  * insert nomap(#116154003, [[Patient (person)]])
  * insert nomap(#11661002, [[Neuropathologist (occupation)]])
  * insert mapeq(#1172950003, [[Massage therapist (occupation)]], #225700000X, [[Massage Therapist]])
  * insert nomap(#1186716007, [[Intellectual disability psychiatrist (occupation)]])
  * insert mapwide(#1186914001, [[Intellectual disability nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#1186914001, [[Intellectual disability nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#1186914001, [[Intellectual disability nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#11911009, [[Nephrologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#119246008, [[Imam (occupation)]])
  * insert mapeq(#11935004, [[Obstetrician (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert maprelated(#1251537007, [[Sport medicine specialist (occupation)]], #204C00000X, [[Neuromusculoskeletal Medicine, Sports Medicine]], [[Sports Medicine is a practice, not a practitioner type]])
  * insert maprelated(#1251537007, [[Sport medicine specialist (occupation)]], #207R00000X, [[Internal Medicine]], [[Sports Medicine can be a sub-specialty of internal medicine]])
  * insert maprelated(#1251537007, [[Sport medicine specialist (occupation)]], #207Q00000X , [[Family Medicine]], [[Sports Medicine can be a sub-specialty of family medicine]])
  * insert mapeq(#1251542004, [[Medical coder (occupation)]], #246Y00000X, [[Specialist/Technologist, Health Information]])
  * insert nomap(#1251548000, [[Neuroradiologist (occupation)]])
  * insert mapwide(#1254982001, [[Medical surgical nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#1254982001, [[Medical surgical nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#1254983006, [[Chronic care nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#1254984000, [[Rehabilitation nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapeq(#1255370008, [[Specialist in naturopathy (occupation)]], #175F00000X, [[Naturopath]])
  * insert mapeq(#1255371007, [[Specialist in homeopathy (occupation)]], #175L00000X, [[Homeopath]])
  * insert nomap(#1255372000, [[Phytotherapist (occupation)]])
  * insert mapnarrow(#1255373005, [[Specialist in traditional Chinese medicine (occupation)]], #171100000X, [[Acupuncturist]], [[Traditional Chinese medicine involves more than just accupuncture]])
  * insert mapwide(#1255374004, [[Clinical nutritionist (occupation)]], #133N00000X, [[Nutritionist]])
  * insert mapwide(#1255514008, [[Regulatory affairs pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#1255515009, [[Pharmacogenomics pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert nomap(#1255517001, [[Intern in healthcare (occupation)]])
  * insert mapwide(#1255518006, [[Organizational and social psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert maprelated(#1255519003, [[Cardiopulmonary technician (occupation)]], #225B00000X, [[Pulmonary Function Technologist]], [[Technician and technologist aren't the same thing]])
  * insert nomap(#1255719001, [[Neurophysiology technician (occupation)]])
  * insert mapwide(#1256114007, [[Nuclear medicine technologist (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert nomap(#1259214004, [[Immunohemotherapy specialist (occupation)]])
  * insert maprelated(#1259964002, [[Oral medicine specialist (occupation)]], #125Q00000X, [[Oral Medicinist]], [[An oral medicine specialist isn't necessarily a dentist]])
  * insert mapwide(#1268923002, [[Obstetric nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#1268923002, [[Obstetric nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#1271000175101, [[Primary obstetrician (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert mapeq(#1276561000168102, [[Prosthetist (occupation)]], #224P00000X, [[Prosthetist]])
  * insert mapnarrow(#1276571000168108, [[Orthotist and prosthetist (occupation)]], #222Z00000X, [[Orthotist]], [[Not all orthotists are also prosthetists]])
  * insert mapnarrow(#1276571000168108, [[Orthotist and prosthetist (occupation)]], #224P00000X, [[Prosthetist]], [[Not all prosthetists are also orthotists]])
  * insert nomap(#133932002, [[Caregiver (person)]])
  * insert mapwide(#13580004, [[School dental assistant (occupation)]], #126800000X, [[Dental Assistant]])
  * insert mapwide(#1421009, [[Specialized surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert nomap(#14613005, [[Ordained rabbi (occupation)]])
  * insert nomap(#14698002, [[Medical microbiologist (occupation)]])
  * insert nomap(#158939004, [[Child care officer (occupation)]])
  * insert nomap(#158942005, [[Residential child care worker (occupation)]])
  * insert nomap(#158943000, [[Residential youth care worker (occupation)]])
  * insert nomap(#158965000, [[Medical practitioner (occupation)]])
  * insert nomap(#158966004, [[Medical administrator - national (occupation)]])
  * insert mapwide(#158967008, [[Consultant physician (occupation)]], #208D00000X, [[General Practice]])
  * insert mapwide(#158968003, [[Consultant surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#158969006, [[Consultant gynecology/obstetrics (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert nomap(#158971006, [[Hospital registrar (occupation)]])
  * insert nomap(#158972004, [[House officer (occupation)]])
  * insert nomap(#158973009, [[Occupational physician (occupation)]])
  * insert nomap(#158974003, [[Clinical medical officer (occupation)]])
  * insert mapwide(#158975002, [[Medical practitioner - teaching (occupation)]], #208D00000X, [[General Practice]])
  * insert nomap(#158977005, [[Dental administrator (occupation)]])
  * insert mapwide(#158978000, [[Dental consultant (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#158979008, [[Dental general practitioner (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#158980006, [[Dental practitioner - teaching (occupation)]], #122300000X, [[Dentist]])
  * insert nomap(#158983008, [[Nurse administrator - national (occupation)]])
  * insert nomap(#158984002, [[Nursing officer - region (occupation)]])
  * insert nomap(#158985001, [[Nursing officer - district (occupation)]])
  * insert nomap(#158986000, [[Nursing administrator - professional body (occupation)]])
  * insert nomap(#158987009, [[Nursing officer - division (occupation)]])
  * insert nomap(#158988004, [[Nurse education director (occupation)]])
  * insert mapwide(#158989007, [[Occupational health nursing officer (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#158989007, [[Occupational health nursing officer (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#158989007, [[Occupational health nursing officer (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert nomap(#158990003, [[Nursing officer (occupation)]])
  * insert mapeq(#158992006, [[Midwifery sister (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#158993001, [[Nursing sister (theater) (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#158993001, [[Nursing sister (theater) (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#158994007, [[Staff nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#158995008, [[Staff midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert nomap(#158996009, [[State enrolled nurse (occupation)]])
  * insert nomap(#158997000, [[District nurse (occupation)]])
  * insert mapwide(#158998005, [[Private nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#158999002, [[Community midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapwide(#159001001, [[Clinic nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#159002008, [[Practice nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#159003003, [[School nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#159003003, [[School nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#159003003, [[School nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#159004009, [[Nurse teacher (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert nomap(#159005005, [[Student nurse (occupation)]])
  * insert nomap(#159006006, [[Dental nurse (occupation)]])
  * insert mapwide(#159007002, [[Community pediatric nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#159007002, [[Community pediatric nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#159007002, [[Community pediatric nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#159010009, [[Hospital pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#159011008, [[Retail pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#159012001, [[Industrial pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapeq(#159014000, [[Trainee pharmacist (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert mapeq(#159016003, [[Medical radiographer (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert mapwide(#159017007, [[Diagnostic radiographer (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert mapwide(#159018002, [[Therapeutic radiographer (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert nomap(#159019005, [[Trainee radiographer (occupation)]])
  * insert nomap(#159021000, [[Ophthalmic optician (occupation)]])
  * insert nomap(#159022007, [[Trainee optician (occupation)]])
  * insert nomap(#159025009, [[Remedial gymnast (occupation)]])
  * insert mapeq(#159026005, [[Speech/language therapist (occupation)]], #235Z00000X, [[Speech-Language Pathologist]])
  * insert mapwide(#159027001, [[Orthoptist (occupation)]], #156F00000X, [[Technician/Technologist]])
  * insert nomap(#159028006, [[Trainee remedial therapist (occupation)]])
  * insert mapeq(#159033005, [[Dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapeq(#159034004, [[Podiatrist (occupation)]], #213E00000X, [[Podiatrist]])
  * insert mapnarrow(#159035003, [[Dental auxiliary (occupation)]], #125J00000X, [[Dental Therapist]], [[Not all auxiliary staff are therapists]])
  * insert nomap(#159036002, [[Electrocardiogram technician (occupation)]])
  * insert mapwide(#159037006, [[Electroencephalogram technician (occupation)]], #247200000X, [[Technician, Other]])
  * insert mapeq(#159038001, [[Artificial limb fitter (occupation)]], #224P00000X, [[Prosthetist]])
  * insert nomap(#159039009, [[Audiology technician (occupation)]])
  * insert mapeq(#159040006, [[Pharmacy technician (occupation)]], #183700000X, [[Pharmacy Technician]])
  * insert nomap(#159041005, [[Trainee medical technician (occupation)]])
  * insert mapnarrow(#159141008, [[Geneticist (occupation)]], #170100000X, [[Medical Genetics, Ph.D. Medical Genetics]], [[Not all geneticists are Ph.D.s]])
  * insert nomap(#159148002, [[Research chemist (occupation)]])
  * insert nomap(#159174008, [[Civil engineer - research (occupation)]])
  * insert nomap(#159972006, [[Surgical corset fitter (occupation)]])
  * insert mapnarrow(#160008000, [[Dental technician (occupation)]], #126900000X, [[Dental Laboratory Technician]], [[A labratory technician is more specific than a dental technician]])
  * insert mapwide(#17561000, [[Cardiologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#184152007, [[Care assistant (occupation)]])
  * insert nomap(#184154008, [[Care manager (occupation)]])
  * insert mapeq(#18803008, [[Dermatologist (occupation)]], #207N00000X, [[Dermatology]])
  * insert nomap(#18850004, [[Laboratory hematologist (occupation)]])
  * insert mapwide(#19244007, [[Gerodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#20145008, [[Removable prosthodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#21365001, [[Specialized dentist (occupation)]], #122300000X, [[Dentist]])
  * insert nomap(#21450003, [[Neuropsychiatrist (occupation)]])
  * insert nomap(#224529009, [[Clinical assistant (occupation)]])
  * insert nomap(#224530004, [[Senior registrar (occupation)]])
  * insert nomap(#224531000, [[Registrar (occupation)]])
  * insert nomap(#224532007, [[Senior house officer (occupation)]])
  * insert nomap(#224533002, [[Medical officer (occupation)]])
  * insert mapnarrow(#224534008, [[Health visitor, nurse/midwife (occupation)]], #176B00000X, [[Midwife]], [[Midwife is only one type of health visitor]])
  * insert mapnarrow(#224534008, [[Health visitor, nurse/midwife (occupation)]], #175M00000X, [[Midwife, Lay]], [[Midwife is only one type of health visitor]])
  * insert mapnarrow(#224534008, [[Health visitor, nurse/midwife (occupation)]], #176B00000X, [[Midwife]], [[Midwife is only one type of health visitor]])
  * insert mapnarrow(#224534008, [[Health visitor, nurse/midwife (occupation)]], #163W00000X, [[Registered Nurse]], [[Nurse is only one type of health visitor]])
  * insert mapnarrow(#224534008, [[Health visitor, nurse/midwife (occupation)]], #363L00000X, [[Nurse Practitioner]], [[Nurse is only one type of health visitor]])
  * insert mapnarrow(#224534008, [[Health visitor, nurse/midwife (occupation)]], #364S00000X, [[Clinical Nurse Specialist]], [[Nurse is only one type of health visitor]])
  * insert mapeq(#224535009, [[Registered nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert maprelated(#224536005, [[Midwifery tutor (occupation)]], #176B00000X, [[Midwife]], [[Not all midwifes are involved in tutalage]])
  * insert maprelated(#224536005, [[Midwifery tutor (occupation)]], #175M00000X, [[Midwife, Lay]], [[Not all midwifes are involved in tutalage]])
  * insert maprelated(#224536005, [[Midwifery tutor (occupation)]], #367A00000X, [[Advanced PracticeMidwife]], [[Not all midwifes are involved in tutalage]])
  * insert mapwide(#224537001, [[Accident and Emergency nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224537001, [[Accident and Emergency nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224538006, [[Triage nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224538006, [[Triage nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224538006, [[Triage nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224540001, [[Community nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224540001, [[Community nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224541002, [[Nursing continence advisor (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224542009, [[Coronary care nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224543004, [[Diabetic nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224544005, [[Family planning nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224545006, [[Care of the elderly nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224545006, [[Care of the elderly nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224545006, [[Care of the elderly nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224546007, [[Infection control nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224547003, [[Intensive therapy nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224547003, [[Intensive therapy nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224547003, [[Intensive therapy nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224548008, [[Learning disabilities nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224549000, [[Neonatal nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224549000, [[Neonatal nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224549000, [[Neonatal nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224550000, [[Neurology nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224550000, [[Neurology nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224551001, [[Industrial nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224552008, [[Oncology nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224552008, [[Oncology nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224554009, [[Marie Curie nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224554009, [[Marie Curie nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224554009, [[Marie Curie nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224555005, [[Pain control nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224556006, [[Palliative care nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224557002, [[Chemotherapy nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224557002, [[Chemotherapy nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224558007, [[Radiotherapy nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224558007, [[Radiotherapy nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224559004, [[Recovery nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224559004, [[Recovery nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224560009, [[Stoma care nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224562001, [[Pediatric nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224562001, [[Pediatric nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224562001, [[Pediatric nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224563006, [[Mental health nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224563006, [[Mental health nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224563006, [[Mental health nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224564000, [[Community mental health nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224564000, [[Community mental health nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224564000, [[Community mental health nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#224565004, [[Renal nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224566003, [[Hemodialysis nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224567007, [[Tissue viability nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert nomap(#224569005, [[Nurse grade (occupation)]])
  * insert mapeq(#224570006, [[Clinical nurse specialist (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapeq(#224571005, [[Nurse practitioner (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224572003, [[Nursing sister (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224573008, [[Charge nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224574002, [[Ward manager (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224575001, [[Nursing team leader (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapnarrow(#224576000, [[Nursing assistant (occupation)]], #376K00000X, [[Nurse's Aide]], [[Aides are a specific type of assistant]])
  * insert nomap(#224577009, [[Healthcare assistant (occupation)]])
  * insert mapwide(#224578004, [[Nursery nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224578004, [[Nursery nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224578004, [[Nursery nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert nomap(#224579007, [[Healthcare service manager (occupation)]])
  * insert nomap(#224580005, [[Occupational health service manager (occupation)]])
  * insert mapwide(#224581009, [[Community nurse manager (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#224581009, [[Community nurse manager (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#224581009, [[Community nurse manager (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapeq(#224583007, [[Behavior therapist (occupation)]], #103K00000X, [[Behavior Analyst]])
  * insert mapeq(#224584001, [[Behavior therapy assistant (occupation)]], #106E00000X, [[Assistant Behavior Analyst]])
  * insert nomap(#224585000, [[Drama therapist (occupation)]])
  * insert mapwide(#224586004, [[Domiciliary occupational therapist (occupation)]], #225X00000X, [[Occupational Therapist]])
  * insert mapnarrow(#224587008, [[Occupational therapy helper (occupation)]], #224Z00000X, [[Occupational Therapy Assistant]], [[Assistant is a specific classification of helper]])
  * insert nomap(#224588003, [[Psychotherapist (occupation)]])
  * insert mapwide(#224589006, [[Community-based physiotherapist (occupation)]], #225100000X, [[Physical Therapist]])
  * insert mapwide(#224590002, [[Play therapist (occupation)]], #225800000X, [[Recreation Therapist]])
  * insert mapwide(#224591003, [[Play specialist (occupation)]], #225800000X, [[Recreation Therapist]])
  * insert mapwide(#224592005, [[Play leader (occupation)]], #225800000X, [[Recreation Therapist]])
  * insert mapwide(#224593000, [[Community-based speech/language therapist (occupation)]], #235Z00000X, [[Speech-Language Pathologist]])
  * insert mapwide(#224594006, [[Speech/language assistant (occupation)]], #235500000X, [[Specialist/Technologist]])
  * insert mapwide(#224595007, [[Professional counselor (occupation)]], #101Y00000X, [[Counselor]])
  * insert maprelated(#224596008, [[Marriage guidance counselor (occupation)]], #106H00000X, [[Marriage & Family Therapist]], [[The certification requirements for the roles aren't identical]])
  * insert nomap(#224597004, [[Trained nurse counselor (occupation)]])
  * insert mapnarrow(#224598009, [[Trained social worker counselor (occupation)]], #104100000X, [[Social Worker]], [[Different licensures, though related work]])
  * insert mapwide(#224599001, [[Trained personnel counselor (occupation)]], #101Y00000X, [[Counselor]])
  * insert mapeq(#224600003, [[Psychoanalyst (occupation)]], #102L00000X, [[Psychoanalyst]])
  * insert mapwide(#224601004, [[Assistant psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert mapwide(#224602006, [[Community-based podiatrist (occupation)]], #213E00000X, [[Podiatrist]])
  * insert nomap(#224603001, [[Foot care worker (occupation)]])
  * insert nomap(#224604007, [[Audiometrician (occupation)]])
  * insert nomap(#224606009, [[Technical healthcare occupation (occupation)]])
  * insert nomap(#224607000, [[Occupational therapy technical instructor (occupation)]])
  * insert nomap(#224608005, [[Administrative healthcare staff (occupation)]])
  * insert nomap(#224609002, [[Complementary health worker (occupation)]])
  * insert nomap(#224610007, [[Supporting services personnel (occupation)]])
  * insert nomap(#224614003, [[Research associate (occupation)]])
  * insert mapwide(#224615002, [[Research nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapeq(#224620002, [[Human aid to communication (occupation)]], #171R00000X, [[Interpreter]])
  * insert nomap(#224621003, [[Palantypist (occupation)]])
  * insert nomap(#224622005, [[Note taker (occupation)]])
  * insert nomap(#224623000, [[Cuer (occupation)]])
  * insert mapwide(#224624006, [[Lipspeaker (occupation)]], #171R00000X, [[Interpreter]])
  * insert mapwide(#224625007, [[Interpreter for British sign language (occupation)]], #171R00000X, [[Interpreter]])
  * insert mapwide(#224626008, [[Interpreter for Signs supporting English (occupation)]], #171R00000X, [[Interpreter]])
  * insert nomap(#224936003, [[General practitioner locum (occupation)]])
  * insert nomap(#22515006, [[Medical assistant (occupation)]])
  * insert nomap(#225725005, [[Chaplain (occupation)]])
  * insert mapnarrow(#225726006, [[Lactation consultant (occupation)]], #174N00000X, [[Lactation Consultant, Non-RN]], [[Some consultants will be RNs]])
  * insert nomap(#225727002, [[Midwife counselor (occupation)]])
  * insert mapeq(#22731001, [[Orthopedic surgeon (occupation)]], #207X00000X, [[Orthopaedic Surgery]])
  * insert nomap(#229774002, [[Caregiver (occupation)]])
  * insert mapeq(#22983004, [[Thoracic surgeon (occupation)]], #208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]])
  * insert nomap(#23278007, [[Community health physician (occupation)]])
  * insert mapeq(#24430003, [[Physical medicine specialist (occupation)]], #208100000X, [[Physical Medicine & Rehabilitation]])
  * insert mapeq(#24590004, [[Urologist (occupation)]], #208800000X, [[Urology]])
  * insert mapwide(#25941000087102, [[Adult gerontology primary care nurse practitioner (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#25961008, [[Electroencephalography specialist (occupation)]], #246Z00000X, [[Specialist/Technologist, Other]])
  * insert mapwide(#26031000087100, [[Pediatric nurse practitioner (occupation)]],  #363L00000X, [[Nurse Practitioner]])
  * insert mapeq(#26042002, [[Dental hygienist (occupation)]], #124Q00000X, [[Dental Hygienist]])
  * insert mapwide(#26071000087103, [[Primary health care nurse practitioner (occupation)]],  #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#26091000087104, [[Public health nurse practitioner (occupation)]],  #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#26369006, [[Public health nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#265937000, [[Nursing occupation (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert maprelated(#265939002, [[Medical/dental technicians (occupation)]], #126900000X, [[Dental Laboratory Technician]], [[Different licensure/training]])
  * insert mapeq(#28229004, [[Optometrist (occupation)]], #152W00000X, [[Optometrist]])
  * insert mapwide(#283875005, [[Parkinson's disease nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#28411006, [[Neonatologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert nomap(#28544002, [[Medical biochemist (occupation)]])
  * insert nomap(#302211009, [[Specialist registrar (occupation)]])
  * insert nomap(#303124005, [[Member of mental health review tribunal (occupation)]])
  * insert nomap(#303129000, [[Hospital manager (occupation)]])
  * insert nomap(#303133007, [[Responsible medical officer (occupation)]])
  * insert nomap(#303134001, [[Independent doctor (occupation)]])
  * insert mapwide(#304291006, [[Bereavement counselor (occupation)]], #101Y00000X, [[Counselor]])
  * insert mapeq(#304292004, [[Surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert nomap(#307988006, [[Medical technician (occupation)]])
  * insert nomap(#308002005, [[Remedial therapist (occupation)]])
  * insert mapwide(#309294001, [[Emergency department physician (occupation)]], #207P00000X, [[Emergency Medicine]])
  * insert mapwide(#309295000, [[Clinical oncologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapwide(#309296004, [[Family planning doctor (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert nomap(#309322005, [[Associate general practitioner (occupation)]])
  * insert nomap(#309323000, [[Partner of general practitioner (occupation)]])
  * insert mapnarrow(#309324006, [[General practitioner assistant (occupation)]], #363A00000X, [[Physician Assistant]], [[Physician Assistant implies specific training]])
  * insert nomap(#309326008, [[Deputizing general practitioner (occupation)]])
  * insert nomap(#309327004, [[General practitioner registrar (occupation)]])
  * insert mapwide(#309328009, [[Ambulatory pediatrician (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309329001, [[Community pediatrician (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309330006, [[Pediatric cardiologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309331005, [[Pediatric endocrinologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309332003, [[Pediatric gastroenterologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309333008, [[Pediatric nephrologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309334002, [[Pediatric neurologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309335001, [[Pediatric rheumatologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#309336000, [[Pediatric oncologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert maprelated(#309337009, [[Pain management specialist (occupation)]], #207L00000X, [[Anesthesiology]], [[Pain management doesn't always apply anesthesiology and anesthesiology is more than pain management]])
  * insert mapwide(#309338004, [[Intensive care specialist (occupation)]], #174400000X, [[Specialist]])
  * insert mapwide(#309339007, [[Adult intensive care specialist (occupation)]], #174400000X, [[Specialist]])
  * insert mapwide(#309340009, [[Pediatric intensive care specialist (occupation)]], #208000000X, [[Pediatrics]])
  * insert nomap(#309341008, [[Blood transfusion doctor (occupation)]])
  * insert nomap(#309342001, [[Histopathologist (occupation)]])
  * insert mapeq(#309343006, [[Physician (occupation)]], #208D00000X, [[General Practice]])
  * insert mapwide(#309345004, [[Chest physician (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapnarrow(#309346003, [[Thoracic physician (occupation)]], #208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]], [[Not all physicians are necessarily surgeons]])
  * insert mapwide(#309347007, [[Clinical hematologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#309348002, [[Clinical neurophysiologist (occupation)]])
  * insert mapnarrow(#309349005, [[Clinical physiologist (occupation)]], #224Y00000X, [[Clinical Exercise Physiologist]], [[Not all physiologists are exercise physiologists]])
  * insert nomap(#309350005, [[Diabetologist (occupation)]])
  * insert nomap(#309351009, [[Andrologist (occupation)]])
  * insert nomap(#309352002, [[Neuroendocrinologist (occupation)]])
  * insert mapwide(#309353007, [[Reproductive endocrinologist (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert nomap(#309354001, [[Thyroidologist (occupation)]])
  * insert nomap(#309355000, [[Clinical geneticist (occupation)]])
  * insert nomap(#309356004, [[Clinical cytogeneticist (occupation)]])
  * insert nomap(#309357008, [[Clinical molecular geneticist (occupation)]])
  * insert mapwide(#309358003, [[Genitourinary medicine physician (occupation)]], #208800000X, [[Urology]])
  * insert mapwide(#309358003, [[Genitourinary medicine physician (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert mapwide(#309359006, [[Palliative care physician (occupation)]], #207Q00000X, [[Family Medicine]])
  * insert mapeq(#309360001, [[Rehabilitation physician (occupation)]], #208100000X, [[Physical Medicine & Rehabilitation]])
  * insert nomap(#309361002, [[Child and adolescent psychiatrist (occupation)]])
  * insert nomap(#309362009, [[Forensic psychiatrist (occupation)]])
  * insert nomap(#309363004, [[Liaison psychiatrist (occupation)]])
  * insert nomap(#309364005, [[Psychogeriatrician (occupation)]])
  * insert nomap(#309366007, [[Rehabilitation psychiatrist (occupation)]])
  * insert mapeq(#309367003, [[Obstetrician and gynecologist (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert mapwide(#309368008, [[Breast surgeon (occupation)]], #208200000X, [[Plastic Surgery]])
  * insert mapeq(#309369000, [[Cardiothoracic surgeon (occupation)]], #208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]])
  * insert mapwide(#309371000, [[Cardiac surgeon (occupation)]], #208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]])
  * insert mapwide(#309372007, [[Ear, nose and throat surgeon (occupation)]], #207Y00000X, [[Otolaryngology]])
  * insert mapwide(#309373002, [[Endocrine surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309374008, [[Thyroid surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309375009, [[Pituitary surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309376005, [[Gastrointestinal surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309377001, [[General gastrointestinal surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309378006, [[Upper gastrointestinal surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapeq(#309379003, [[Colorectal surgeon (occupation)]], #208C00000X, [[Colon & Rectal Surgery]])
  * insert mapwide(#309380000, [[Hand surgeon (occupation)]], #208200000X, [[Plastic Surgery]])
  * insert mapwide(#309381001, [[Hepatobiliary surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309382008, [[Ophthalmic surgeon (occupation)]], #207W00000X, [[Ophthalmology]])
  * insert mapwide(#309383003, [[Pediatric surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309384009, [[Pancreatic surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapeq(#309385005, [[Transplant surgeon (occupation)]], #204F00000X, [[Transplant Surgery]])
  * insert mapwide(#309386006, [[Trauma surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert mapwide(#309388007, [[Vascular surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert nomap(#309389004, [[Medical practitioner grade (occupation)]])
  * insert nomap(#309390008, [[Hospital consultant (occupation)]])
  * insert nomap(#309391007, [[Visiting specialist registrar (occupation)]])
  * insert nomap(#309392000, [[Research registrar (occupation)]])
  * insert mapeq(#309393005, [[General practitioner grade (occupation)]], #208D00000X, [[General Practice]])
  * insert mapwide(#309394004, [[General practitioner principal (occupation)]], #208D00000X, [[General Practice]])
  * insert mapnarrow(#309395003, [[Hospital specialist (occupation)]], #208M00000X, [[Hospitalist]], [[Not all specialists are physicians and not all Hosp]])
  * insert nomap(#309396002, [[Associate specialist (occupation)]])
  * insert nomap(#309397006, [[Research fellow (occupation)]])
  * insert nomap(#309398001, [[Profession allied to medicine (occupation)]])
  * insert mapwide(#309399009, [[Hospital-based dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapwide(#309400002, [[Domiciliary physiotherapist (occupation)]], #225100000X, [[Physical Therapist]])
  * insert mapeq(#309401003, [[General practitioner-based physiotherapist (occupation)]], #225100000X, [[Physical Therapist]])
  * insert mapwide(#309402005, [[Hospital-based physiotherapist (occupation)]], #225100000X, [[Physical Therapist]])
  * insert mapwide(#309403000, [[Private physiotherapist (occupation)]], #225100000X, [[Physical Therapist]])
  * insert mapnarrow(#309404006, [[Physiotherapy helper (occupation)]], #225200000X, [[Physical Therapy Assistant]], [[Assistant is a specialized type of helper]])
  * insert mapwide(#309409001, [[Hospital-based speech and language therapist (occupation)]], #235Z00000X, [[Speech-Language Pathologist]])
  * insert mapeq(#309410006, [[Arts therapist (occupation)]], #221700000X, [[Art Therapist]])
  * insert mapeq(#309411005, [[Dance therapist (occupation)]], #225600000X, [[Dance Therapist]])
  * insert mapeq(#309412003, [[Music therapist (occupation)]], #225A00000X, [[Music Therapist]])
  * insert mapwide(#309413008, [[Renal dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapwide(#309414002, [[Liver dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapwide(#309415001, [[Oncology dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapwide(#309416000, [[Pediatric dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapwide(#309417009, [[Diabetes dietitian (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapeq(#309418004, [[Audiologist (occupation)]], #231H00000X, [[Audiologist]])
  * insert maprelated(#309419007, [[Hearing therapist (occupation)]], #231H00000X, [[Audiologist]], [[Not all audiologists are therapists]])
  * insert mapeq(#309420001, [[Audiological scientist (occupation)]], #231H00000X, [[Audiologist]])
  * insert mapwide(#309421002, [[Hearing aid dispenser (occupation)]], #237600000X, [[Audiologist-Hearing Aid Fitter]])
  * insert mapwide(#309422009, [[Community-based occupational therapist (occupation)]], #225X00000X, [[Occupational Therapist]])
  * insert mapwide(#309423004, [[Hospital-based occupational therapist (occupation)]], #225X00000X, [[Occupational Therapist]])
  * insert mapwide(#309427003, [[Social services occupational therapist (occupation)]], #225X00000X, [[Occupational Therapist]])
  * insert mapeq(#309428008, [[Orthotist (occupation)]], #222Z00000X, [[Orthotist]])
  * insert nomap(#309429000, [[Surgical fitter (occupation)]])
  * insert mapwide(#309434001, [[Hospital-based podiatrist (occupation)]], #213E00000X, [[Podiatrist]])
  * insert mapeq(#309435000, [[Podiatry assistant (occupation)]], #211D00000X, [[Assistant, Podiatric]])
  * insert mapwide(#309436004, [[Lymphedema nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#309437008, [[Community learning disabilities nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#309437008, [[Community learning disabilities nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#309437008, [[Community learning disabilities nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert nomap(#309439006, [[Clinical nurse teacher (occupation)]])
  * insert nomap(#309440008, [[Community practice nurse teacher (occupation)]])
  * insert nomap(#309441007, [[Nurse tutor (occupation)]])
  * insert nomap(#309442000, [[Nurse teacher practitioner (occupation)]])
  * insert nomap(#309443005, [[Nurse lecturer practitioner (occupation)]])
  * insert mapwide(#309444004, [[Outreach nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapnarrow(#309445003, [[Anesthetic nurse (occupation)]], #367500000X, [[Nurse Anesthetist, Certified Registered]], [[Not all Anesthetic nurses will be certified & registered]])
  * insert mapwide(#309446002, [[Nurse manager (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#309450009, [[Nurse administrator (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapnarrow(#309452001, [[Midwifery grade (occupation)]], #176B00000X, [[Midwife]], [[Not all midwives are graded midwives]])
  * insert mapnarrow(#309452001, [[Midwifery grade (occupation)]], #175M00000X, [[Midwife, Lay]], [[Not all midwives are graded midwives]])
  * insert mapnarrow(#309452001, [[Midwifery grade (occupation)]], #367A00000X, [[Advanced Practice Midwife]], [[Not all midwives are graded midwives]])
  * insert mapnarrow(#309453006, [[Registered midwife (occupation)]], #176B00000X, [[Midwife]], [[Midwives might or might not be registered]])
  * insert mapnarrow(#309453006, [[Registered midwife (occupation)]], #175M00000X, [[Midwife, Lay]], [[Midwives might or might not be registered]])
  * insert mapnarrow(#309453006, [[Registered midwife (occupation)]], #367A00000X, [[Advanced Practice Midwife]], [[Midwives might or might not be registered]])
  * insert nomap(#309454000, [[Student midwife (occupation)]])
  * insert nomap(#309455004, [[Parentcraft sister (occupation)]])
  * insert nomap(#309457007, [[Vicar (occupation)]])
  * insert nomap(#309459005, [[Healthcare professional grade (occupation)]])
  * insert mapwide(#309460000, [[Restorative dentist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#310170009, [[Pediatric audiologist (occupation)]], #231H00000X, [[Audiologist]])
  * insert nomap(#310171008, [[Immunopathologist (occupation)]])
  * insert nomap(#310172001, [[Audiological physician (occupation)]])
  * insert mapeq(#310173006, [[Clinical pharmacologist (occupation)]], #208U00000X, [[Clinical Pharmacology]])
  * insert nomap(#310174000, [[Private doctor (occupation)]])
  * insert mapwide(#310175004, [[Agency nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310176003, [[Behavioral therapist nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310176003, [[Behavioral therapist nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#310176003, [[Behavioral therapist nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#310177007, [[Cardiac rehabilitation nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310178002, [[Genitourinary nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310179005, [[Rheumatology nurse specialist (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310180008, [[Continence nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310181007, [[Contact tracing nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapeq(#310182000, [[General nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310184004, [[Liaison nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310185003, [[Diabetic liaison nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310186002, [[Nurse psychotherapist (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310187006, [[Company nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#310188001, [[Hospital midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapwide(#310188001, [[Hospital midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#310188001, [[Hospital midwife (occupation)]], #367A00000X, [[Advanced PracticeMidwife]])
  * insert mapeq(#310189009, [[Genetic counselor (occupation)]], #170300000X, [[Genetic Counselor, MS]])
  * insert mapwide(#310190000, [[Mental health counselor (occupation)]], #101Y00000X, [[Counselor]])
  * insert mapwide(#310191001, [[Clinical psychologist (occupation)]], #103G00000X, [[Clinical Neuropsychologist]])
  * insert mapwide(#310192008, [[Educational psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert nomap(#310193003, [[Coroner (occupation)]])
  * insert nomap(#310194009, [[Appliance officer (occupation)]])
  * insert mapwide(#310512001, [[Medical oncologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#311441001, [[School medical officer (occupation)]])
  * insert mapwide(#312485001, [[Integrated midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapwide(#312485001, [[Integrated midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#312485001, [[Integrated midwife (occupation)]], #367A00000X, [[Advanced Practice Midwife]])
  * insert mapeq(#3430008, [[Radiation therapist (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert mapeq(#36682004, [[Physiotherapist (occupation)]], #225100000X, [[Physical Therapist]])
  * insert mapwide(#37154003, [[Periodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#372102007, [[Registered nurse first assist (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert nomap(#373864002, [[Outpatient (person)]])
  * insert mapwide(#37504001, [[Orthodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapeq(#3842006, [[Chiropractor (occupation)]], #111N00000X, [[Chiropractor]])
  * insert mapeq(#387619007, [[Optician (occupation)]], #156FX1800X, [[Optician]])
  * insert nomap(#394572006, [[Medical secretary (occupation)]])
  * insert mapwide(#394618009, [[Hospital nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapeq(#39677007, [[Internal medicine specialist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapeq(#397897005, [[Paramedic (occupation)]], #146L00000X, [[Emergency Medical Technician, Paramedic]])
  * insert mapwide(#397903001, [[Staff grade obstetrician (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert nomap(#397908005, [[Staff grade practitioner (occupation)]])
  * insert mapwide(#3981000175106, [[Nurse complex case manager (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert nomap(#398130009, [[Medical student (occupation)]])
  * insert nomap(#398238009, [[Acting obstetric registrar (occupation)]])
  * insert mapwide(#40127002, [[Dietitian (general) (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapwide(#40204001, [[Hematologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#404940000, [[Physiotherapist technical instructor (occupation)]])
  * insert nomap(#405277009, [[Resident physician (occupation)]])
  * insert mapeq(#405278004, [[Certified registered nurse anesthetist (occupation)]], #367500000X, [[Nurse Anesthetist, Certified Registered]])
  * insert nomap(#405279007, [[Attending physician (occupation)]])
  * insert nomap(#405623001, [[Assigned practitioner (occupation)]])
  * insert nomap(#405684005, [[Professional initiating surgical case (occupation)]])
  * insert nomap(#405685006, [[Professional providing staff relief during surgical procedure (occupation)]])
  * insert mapeq(#40570005, [[Interpreter (occupation)]], #171R00000X, [[Interpreter]])
  * insert nomap(#407542009, [[Informal caregiver (person)]])
  * insert nomap(#407543004, [[Primary caregiver (person)]])
  * insert nomap(#408290003, [[Diabetes key contact (occupation)]])
  * insert mapwide(#408798009, [[Consultant pediatrician (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#408799001, [[Consultant neonatologist (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapeq(#409974004, [[Health educator (occupation)]], #174H00000X, [[Health Educator]])
  * insert mapwide(#409975003, [[Certified health education specialist (occupation)]], #174H00000X, [[Health Educator]])
  * insert mapwide(#413854007, [[Circulating nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#415075003, [[Perioperative nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#415075003, [[Perioperative nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#415506007, [[Scrub nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#415506007, [[Scrub nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert nomap(#416034003, [[Primary screener (person)]])
  * insert nomap(#416035002, [[Secondary screener (person)]])
  * insert nomap(#416160000, [[Fellow of American Academy of Osteopathy (occupation)]])
  * insert mapeq(#4162009, [[Dental assistant (occupation)]], #126800000X, [[Dental Assistant]])
  * insert mapwide(#41672002, [[Respiratory disease specialist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#416800000, [[Inpatient (person)]])
  * insert nomap(#41904004, [[Medical X-ray technician (occupation)]])
  * insert nomap(#420158005, [[Performer of method (person)]])
  * insert mapwide(#420409002, [[Oculoplastic surgeon (occupation)]], #207W00000X, [[Ophthalmology]])
  * insert mapwide(#420678001, [[Retinal surgeon (occupation)]], #207W00000X, [[Ophthalmology]])
  * insert nomap(#421841007, [[Admitting physician (occupation)]])
  * insert mapeq(#422140007, [[Medical ophthalmologist (occupation)]], #207W00000X, [[Ophthalmology]])
  * insert mapeq(#422234006, [[Ophthalmologist (occupation)]], #207W00000X, [[Ophthalmology]])
  * insert nomap(#428024001, [[Clinical trial participant (person)]])
  * insert nomap(#429577009, [[Patient advocate (person)]])
  * insert nomap(#43018001, [[Babysitter (occupation)]])
  * insert nomap(#432100008, [[Health coach (occupation)]])
  * insert mapwide(#43702002, [[Occupational health nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#43702002, [[Occupational health nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#43702002, [[Occupational health nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapnarrow(#440051000124108, [[Medical examiner (occupation)]], #202C00000X, [[Independent Medical Examiner]], [[Independent Medical Examiner presumes clinician, which Medical examiner does not]])
  * insert mapeq(#442251000124100, [[Licensed practical nurse (occupation)]], #164W00000X, [[Licensed Practical Nurse]]) 
  * insert mapnarrow(#442867008, [[Respiratory therapist (occupation)]], #227800000X, [[Respiratory Therapist, Certified]], [[Not all RTs are certified]])
  * insert mapwide(#443090005, [[Podiatric surgeon (occupation)]], #213E00000X, [[Podiatrist]])
  * insert nomap(#444912007, [[Hypnotherapist (occupation)]])
  * insert mapwide(#445313000, [[Asthma nurse specialist (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapwide(#445451001, [[Nurse case manager (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapnarrow(#445521000124102, [[Advanced practice midwife (occupation)]], #367A00000X, [[Advanced Practice Midwife]], [[The NUCC code implies certified nurse, while the SNOMED code does not]])
  * insert mapeq(#445531000124104, [[Lay midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#446050000, [[Primary care physician (occupation)]], #207Q00000X, [[Family Medicine]])
  * insert mapnarrow(#44652006, [[Pharmaceutical assistant (occupation)]], #183700000X, [[Pharmacy Technician]], [[Not all assistants are technicians]])
  * insert mapwide(#446701002, [[Addiction medicine specialist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapeq(#449161006, [[Physician assistant (occupation)]], #363A00000X, [[Physician Assistant]])
  * insert mapeq(#450044741000087104, [[Acupuncturist (occupation)]], #171100000X, [[Acupuncturist]])
  * insert mapwide(#453061000124100, [[Pharmacist specialist (person)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#453071000124107, [[Primary care pharmacist (person)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#453081000124105, [[Infusion pharmacist (person)]], #183500000X, [[Pharmacist]])
  * insert nomap(#453091000124108, [[Receiving provider (person)]])
  * insert mapwide(#453101000124102, [[Consultant pharmacist (person)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#453111000124104, [[Dispensing pharmacist (person)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#453121000124107, [[Emergency department healthcare professional (occupation)]], #207P00000X, [[Emergency Medicine]])
  * insert mapwide(#453231000124104, [[Primary care provider (occupation)]], #207Q00000X, [[Family Medicine]])
  * insert mapwide(#45440000, [[Rheumatologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapeq(#45544007, [[Neurosurgeon (occupation)]], #207T00000X, [[Neurological Surgery]])
  * insert nomap(#457141000124107, [[Locum tenens attending physician (occupation)]])
  * insert nomap(#457151000124109, [[Locum tenens admitting physician (occupation)]])
  * insert nomap(#45956004, [[Sanitarian (occupation)]])
  * insert mapeq(#46255001, [[Pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#471302004, [[Government midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapwide(#471302004, [[Government midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#471302004, [[Government midwife (occupation)]], #367A00000X, [[Advanced Practice Midwife]])
  * insert nomap(#48639005, [[Ordained minister (occupation)]])
  * insert nomap(#48740002, [[Philologist (occupation)]])
  * insert mapwide(#49203003, [[Dispensing optician (occupation)]], #156FX1800X, [[Optician]])
  * insert mapwide(#49993003, [[Oral surgeon (occupation)]], #204E00000X, [[Oral & Maxillofacial Surgery]])
  * insert mapwide(#49993003, [[Oral surgeon (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#50149000, [[Endodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#5191000124109, [[Private midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapwide(#5191000124109, [[Private midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#5191000124109, [[Private midwife (occupation)]], #367A00000X, [[Advanced Practice Midwife]])
  * insert mapwide(#5275007, [[Auxiliary nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert nomap(#53564008, [[Ordained clergy (occupation)]])
  * insert nomap(#54503009, [[Faith healer (occupation)]])
  * insert nomap(#56397003, [[Neurologist (occupation)]])
  * insert nomap(#56466003, [[Public health physician (occupation)]])
  * insert nomap(#56542007, [[Medical record administrator (occupation)]])
  * insert mapeq(#56545009, [[Cardiovascular surgeon (occupation)]], #208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]])
  * insert mapwide(#57654006, [[Fixed prosthodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapeq(#59058001, [[General physician (occupation)]], #208D00000X, [[General Practice]])
  * insert mapwide(#59169001, [[Orthopedic technician (occupation)]], #246Z00000X, [[Specialist/Technologist, Other]])
  * insert mapwide(#59317003, [[Dental prosthesis maker and repairer (occupation)]], #122400000X, [[Denturist]])
  * insert mapeq(#59944000, [[Psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert mapwide(#60008001, [[Public health nutritionist (occupation)]], #133N00000X, [[Nutritionist]])
  * insert mapwide(#611581000124105, [[Cognitive neuropsychologist (occupation)]], #103G00000X, [[Clinical Neuropsychologist]])
  * insert mapwide(#611601000124100, [[Neonatal nurse practitioner (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#611611000124102, [[Counseling psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert mapeq(#611621000124105, [[Clinical neuropsychologist (occupation)]], #103G00000X, [[Clinical Neuropsychologist]])
  * insert mapwide(#611701000124107, [[Sleep psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert nomap(#61207006, [[Medical pathologist (occupation)]])
  * insert nomap(#61246008, [[Laboratory medicine specialist (occupation)]])
  * insert mapwide(#61345009, [[Otorhinolaryngologist (occupation)]], #207Y00000X, [[Otolaryngology]])
  * insert mapwide(#61894003, [[Endocrinologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapeq(#62247001, [[Family medicine specialist (occupation)]], #207Q00000X, [[Family Medicine]])
  * insert mapeq(#63098009, [[Clinical immunologist (occupation)]], #207K00000X, [[Allergy & Immunology]])
  * insert nomap(#64220005, [[Religious worker (member of religious order) (occupation)]])
  * insert mapwide(#651501000124106, [[Pediatric emergency medicine physician (occupation)]], #207P00000X, [[Emergency Medicine]])
  * insert nomap(#65803006, [[Missionary (occupation)]])
  * insert mapwide(#66476003, [[Oral pathologist (occupation)]], #122300000X, [[Dentist]])
  * insert nomap(#66862007, [[Radiologist (occupation)]])
  * insert mapwide(#671101000124102, [[Family nurse practitioner (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#67811000052107, [[Pediatric hematology and oncology physician (occupation)]], #208000000X, [[Pediatrics]])
  * insert mapwide(#6816002, [[Specialized nurse (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#6816002, [[Specialized nurse (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#6816002, [[Specialized nurse (occupation)]], #364S00000X, [[Clinical Nurse Specialist]])
  * insert mapeq(#68191000052106, [[Neuropsychologist (occupation)]], #103G00000X, [[Clinical Neuropsychologist]])
  * insert nomap(#6868009, [[Hospital administrator (occupation)]])
  * insert mapwide(#68867008, [[Public health dentist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#68950000, [[Prosthodontist (occupation)]], #122300000X, [[Dentist]])
  * insert nomap(#69280009, [[Specialized physician (occupation)]])
  * insert mapwide(#71838004, [[Gastroenterologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapwide(#720503005, [[Sleep medicine specialist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#721936008, [[Occupation medicine specialist (occupation)]])
  * insert nomap(#721937004, [[Preventive medicine specialist (occupation)]])
  * insert mapwide(#721938009, [[Tropical medicine specialist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapnarrow(#721939001, [[Vascular medicine specialist (occupation)]], #208G00000X, [[Thoracic Surgery (Cardiothoracic Vascular Surgery)]], [[Surgery is only one aspect of vascular medicine]])
  * insert mapwide(#721940004, [[Legal medicine specialist (occupation)]], #209800000X, [[Legal Medicine]])
  * insert mapwide(#721941000, [[Health psychologist (occupation)]], #103T00000X, [[Psychologist]])
  * insert mapeq(#721942007, [[Cardiovascular perfusionist (occupation)]], #242T00000X, [[Perfusionist]])
  * insert mapeq(#721943002, [[Clinical immunology and allergy specialist (occupation)]], #207K00000X, [[Allergy & Immunology]])
  * insert mapeq(#73265009, [[Nursing aid (occupation)]], #376K00000X, [[Nurse's Aide]])
  * insert mapwide(#734293001, [[Clinical pharmacist (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapwide(#734294007, [[Pharmacist prescriber (occupation)]], #183500000X, [[Pharmacist]])
  * insert mapeq(#75271001, [[Professional midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapeq(#75271001, [[Professional midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapeq(#75271001, [[Professional midwife (occupation)]], #367A00000X, [[Advanced Practice Midwife]])
  * insert mapwide(#76166008, [[Practical aid (pharmacy) (occupation)]], #183500000X, [[Pharmacist]])
  * insert nomap(#76231001, [[Osteopath (occupation)]])
  * insert nomap(#763292005, [[Radiation oncologist (occupation)]])
  * insert mapeq(#768730001, [[Home health aide (occupation)]], #374U00000X, [[Home Health Aide]])
  * insert nomap(#768731002, [[Home helper (occupation)]])
  * insert mapwide(#768732009, [[School health educator (occupation)]], #174H00000X, [[Health Educator]])
  * insert nomap(#768733004, [[Spiritual advisor (occupation)]])
  * insert nomap(#768734005, [[Research study coordinator (occupation)]])
  * insert mapwide(#768815003, [[Investigative specialist (occupation)]], #174400000X, [[Specialist]])
  * insert nomap(#768816002, [[Associate investigator (occupation)]])
  * insert nomap(#768817006, [[Co-principal investigator (occupation)]])
  * insert nomap(#768818001, [[Principal investigator (occupation)]])
  * insert nomap(#768819009, [[Medically responsible investigator (occupation)]])
  * insert mapeq(#768820003, [[Care coordinator (occupation)]], #171M00000X, [[Case Manager/Care Coordinator]])
  * insert mapeq(#768821004, [[Care team coordinator (occupation)]], #171M00000X, [[Case Manager/Care Coordinator]])
  * insert maprelated(#768822006, [[Rehabilitation coordinator (occupation)]], #225C00000X, [[Rehabilitation Counselor]], [[Coordinators are simlar to but not identical to counselors]])
  * insert mapeq(#768825008, [[Doula (occupation)]], #374J00000X, [[Doula]])
  * insert mapwide(#768826009, [[Crisis counselor (occupation)]], #101Y00000X, [[Counselor]])
  * insert mapeq(#768827000, [[Nutritionist (occupation)]], #133N00000X, [[Nutritionist]])
  * insert mapwide(#768828005, [[Epidemiologist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert mapwide(#768829002, [[Community dietician (occupation)]], #133V00000X, [[Dietitian, Registered]])
  * insert mapeq(#768832004, [[Case manager (occupation)]], #171M00000X, [[Case Manager/Care Coordinator]])
  * insert nomap(#768833009, [[Discharging physician (occupation)]])
  * insert nomap(#768834003, [[Disease manager (occupation)]])
  * insert nomap(#768836001, [[Patient navigator (occupation)]])
  * insert mapeq(#768837005, [[Hospitalist (occupation)]], #208M00000X, [[Hospitalist]])
  * insert nomap(#768839008, [[Consultant (occupation)]])
  * insert mapwide(#76899008, [[Infectious disease specialist (occupation)]], #207R00000X, [[Internal Medicine]])
  * insert nomap(#769038007, [[Researcher (occupation)]])
  * insert mapeq(#78703002, [[General surgeon (occupation)]], #208600000X, [[Surgery]])
  * insert nomap(#78729002, [[Diagnostic radiologist (occupation)]])
  * insert mapwide(#789543004, [[Sonographer (occupation)]], #247100000X, [[Radiologic Technologist]])
  * insert mapwide(#79898004, [[Auxiliary midwife (occupation)]], #176B00000X, [[Midwife]])
  * insert mapwide(#79898004, [[Auxiliary midwife (occupation)]], #175M00000X, [[Midwife, Lay]])
  * insert mapwide(#79898004, [[Auxiliary midwife (occupation)]], #176B00000X, [[Advanced Practice Midwife]])
  * insert nomap(#79918004, [[Ordained priest (occupation)]])
  * insert mapeq(#80409005, [[Translator (occupation)]], #171R00000X, [[Interpreter]])
  * insert mapeq(#80546007, [[Occupational therapist (occupation)]], #225X00000X, [[Occupational Therapist]])
  * insert nomap(#80584001, [[Psychiatrist (occupation)]])
  * insert mapeq(#80933006, [[Nuclear medicine specialist (occupation)]], #207U00000X, [[Nuclear Medicine]])
  * insert nomap(#81464008, [[Clinical pathologist (occupation)]])
  * insert mapeq(#82296001, [[Pediatrician (occupation)]], #208000000X, [[Pediatrics]])
  * insert nomap(#83273008, [[Anatomic pathologist (occupation)]])
  * insert mapwide(#83685006, [[Gynecologist (occupation)]], #207V00000X, [[Obstetrics & Gynecology]])
  * insert nomap(#840583002, [[Allied health assistant (occupation)]])
  * insert nomap(#840584008, [[Allied health student (occupation)]])
  * insert nomap(#85733003, [[General pathologist (occupation)]])
  * insert mapeq(#8724009, [[Plastic surgeon (occupation)]], #208200000X, [[Plastic Surgery]])
  * insert nomap(#878785002, [[Clinical respiratory physiologist (occupation)]])
  * insert mapwide(#878786001, [[Operating room technician (occupation)]], #246Z00000X, [[Specialist/Technologist, Other]])
  * insert maprelated(#878787005, [[Anesthesia technician (occupation)]], #367H00000X, [[Anesthesiologist Assistant]], [[Assistant isn't quite the same as technician]])
  * insert mapeq(#88189002, [[Anesthesiologist (occupation)]], #207L00000X, [[Anesthesiology]])
  * insert mapwide(#897187007, [[Sexual assault nurse examiner (occupation)]], #163W00000X, [[Registered Nurse]])
  * insert mapwide(#897187007, [[Sexual assault nurse examiner (occupation)]], #363L00000X, [[Nurse Practitioner]])
  * insert mapwide(#897187007, [[Sexual assault nurse examiner (occupation)]], #364S00000X, [[Clinical Specialist Nurse]])
  * insert mapwide(#90201008, [[Pedodontist (occupation)]], #122300000X, [[Dentist]])
  * insert mapwide(#90655003, [[Geriatrics specialist (occupation)]], #207Q00000X, [[Family Medicine]])
  * insert mapwide(#9371000175105, [[Adolescent medicine specialist (occupation)]], #207Q00000X, [[Family Medicine]])


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/extensions/CoverageWellknownEndpoint.fsh

Extension: CoverageDavinciWellknownLocation
Id: extension-CoverageDavinciWellknownLocation
Title: "Coverage Da Vinci Wellknown Endpoint"
Description: "The location of the Da Vinci endpoint .well-known file associated with this Coverage instance.  This file will define a variety of endpoints and other information pertinant to data sharing related to the coverage."
* ^context[0].type = #element
* ^context[=].expression = "Coverage"
* value[x] only uri

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Coverage-full.fsh

Instance: Coverage-full
InstanceOf: HRexCoverage
Title: "HRex Coverage full example"
Description: "An example showing a fully populated HRex Coverage instance"
Usage: #example
* id = "full"
* extension[CoverageDavinciWellknownLocation].valueUri = "http://somepayer.org/.well-known/davinci-configuration"
* identifier
  * type = $v2-0203#MB
  * system = "http://example.org/new-payer/identifiers/coverage"
  * value = "234567"
* status = #active
* type = $sop#2 "MEDICAID"
* period
  * start = "2021-01-01"
  * end = "2021-12-31"
* subscriberId = "97531"
* relationship = $subRelationship#self
* beneficiary = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* payor = Reference(Organization/full)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Coverage-min.fsh

Instance: Coverage-min
InstanceOf: HRexCoverage
Title: "HRex Coverage minimal example"
Description: "An example showing a minimally populated HRex Coverage instance"
Usage: #example
* id = "min"
* status = #active
* subscriberId = "97531"
* relationship = $dar#unknown
* beneficiary = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* payor = Reference(Organization/min)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/document-complete.fsh

Instance: document-complete
InstanceOf: HRexTaskDataRequest
Title: "HRex Task Data Request - completed document example"
Description: "An example showing a 'code' data request task once it has results - as references to the relevant documents"
Usage: #example
* status = #completed
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* reasonCode.text = "Support prior authorization decision-making"
* reasonReference = Reference(http://example.org/new-payer/fhir/Claim/123)
* input
  * type = $hrex-temp#data-code
  * valueCodeableConcept = $loinc#34108-1
* output[0]
  * type = $hrex-temp#data-value
  * valueReference = Reference(http://example.org/new-payer/fhir/DocumentReference/727A23K5133)
* output[+]
  * type = $hrex-temp#data-value
  * valueReference = Reference(http://example.org/new-payer/fhir/DocumentReference/287Q73J237)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/hrex-coverage-identifier.fsh

Instance: hrex-coverage-identifier
InstanceOf: SearchParameter
Title: "Coverage identifier Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/SearchParameter/hrex-coverage-identifier"
* name = "HRexCoverageIdentifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Coverage-identifier"
* status = #active
* experimental = false
* description = "The primary identifier of the insured and the coverage\n\n**NOTE**: This HRex SearchParameter definition extends the usage context of the [capabilitystatement-expectation](http://hl7.org/fhir/R4/extension-capabilitystatement-expectation.html) extension to formally express implementer expectations for these elements:\n\n* multipleAnd\n\n* multipleOr\n\n* modifier\n\n* comparator\n\n* chain"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #identifier
* base = #Coverage
* type = #token
* expression = "Coverage.identifier"
* xpath = "f:Coverage/f:identifier"
* xpathUsage = #normal
* multipleOr = true
  * extension[$cs-expectation].valueCode = #SHOULD
* modifier[0] = #missing
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #text
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #not
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #ofType
  * extension[$cs-expectation].valueCode = #SHOULD

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/hrex-coverage-patient.fsh

Instance: hrex-coverage-patient
InstanceOf: SearchParameter
Title: "Coverage patient Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/SearchParameter/hrex-coverage-patient"
* name = "HRexCoveragePatient"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Coverage-patient"
* status = #active
* experimental = false
* description = "Retrieve coverages for a patient\n\n**NOTE**: This HRex SearchParameter definition extends the usage context of the [capabilitystatement-expectation](http://hl7.org/fhir/R4/extension-capabilitystatement-expectation.html) extension to formally express implementer expectations for these elements:\n\n* multipleAnd\n\n* multipleOr\n\n* modifier\n\n* comparator\n\n* chain"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #patient
* base = #Coverage
* type = #reference
* expression = "Coverage.beneficiary"
* xpath = "f:Coverage/f:beneficiary"
* xpathUsage = #normal
* target = #Patient
* multipleOr = true
  * extension[$cs-expectation].valueCode = #MAY
* multipleAnd = true
  * extension[$cs-expectation].valueCode = #MAY
* modifier[0] = #missing
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #text
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #not
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #type
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #identifier
  * extension[$cs-expectation].valueCode = #SHOULD
* chain[0] = "name"
  * extension[$cs-expectation].valueCode = #SHALL
* chain[+] = "gender"
  * extension[$cs-expectation].valueCode = #SHALL
* chain[+] = "birthdate"
  * extension[$cs-expectation].valueCode = #SHALL 

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/hrex-coverage-payor.fsh

Instance: hrex-coverage-payor
InstanceOf: SearchParameter
Title: "Coverage payer Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/SearchParameter/hrex-coverage-payor"
* name = "HRexCoveragePayor"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Coverage-payor"
* status = #active
* experimental = false
* description = "The identity of the insurer or party paying for services\n\n**NOTE**: This HRex SearchParameter definition extends the usage context of the [capabilitystatement-expectation](http://hl7.org/fhir/R4/extension-capabilitystatement-expectation.html) extension to formally express implementer expectations for these elements:\n\n* multipleAnd\n\n* multipleOr\n\n* modifier\n\n* comparator\n\n* chain"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #payor
* base = #Coverage
* type = #reference
* expression = "Coverage.payor"
* xpath = "f:Coverage/f:payor"
* xpathUsage = #normal
* target = #Organization
* multipleOr = true
  * extension[$cs-expectation].valueCode = #MAY
* modifier[0] = #text
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #not
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #type
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #identifier
  * extension[$cs-expectation].valueCode = #SHOULD
* chain = "identifier"
  * extension[$cs-expectation].valueCode = #SHALL

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/hrex-coverage-subscriber.fsh

Instance: hrex-coverage-subscriber
InstanceOf: SearchParameter
Title: "Coverage subscriber Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/SearchParameter/hrex-coverage-subscriber"
* name = "HRexCoverageSubscriber"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Coverage-subscriber"
* status = #active
* experimental = false
* description = "Reference to the subscriber\n\n**NOTE**: This HRex SearchParameter definition extends the usage context of the [capabilitystatement-expectation](http://hl7.org/fhir/R4/extension-capabilitystatement-expectation.html) extension to formally express implementer expectations for these elements:\n\n* multipleAnd\n\n* multipleOr\n\n* modifier\n\n* comparator\n\n* chain"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #subscriber
* base = #Coverage
* type = #reference
* expression = "Coverage.subscriber"
* xpath = "f:Coverage/f:subscriber"
* xpathUsage = #normal
* target[0] = #Patient
* target[+] = #RelatedPerson
* multipleOr = true
  * extension[$cs-expectation].valueCode = #MAY
* modifier[0] = #text
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #not
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #type
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #identifier
  * extension[$cs-expectation].valueCode = #SHOULD

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/hrex-coverage-subscriberId.fsh

Instance: hrex-coverage-subscriberId
InstanceOf: SearchParameter
Title: "Coverage subscriberId Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/SearchParameter/hrex-coverage-subscriberId"
* name = "HRexCoverageSubscriberId"
* status = #active
* experimental = false
* description = "ID assigned to the subscriber\n\n**NOTE**: This HRex SearchParameter definition extends the usage context of the [capabilitystatement-expectation](http://hl7.org/fhir/R4/extension-capabilitystatement-expectation.html) extension to formally express implementer expectations for these elements:\n\n* multipleAnd\n\n* multipleOr\n\n* modifier\n\n* comparator\n\n* chain"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #subscriber-id
* base = #Coverage
* type = #token
* expression = "Coverage.subscriberId"
* xpath = "f:Coverage/f:subscriberId"
* xpathUsage = #normal
* multipleOr = true
  * extension[$cs-expectation].valueCode = #SHOULD
* modifier[0] = #missing
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #not
  * extension[$cs-expectation].valueCode = #MAY

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/hrex-provenance-target.fsh

Instance: hrex-provenance-target
InstanceOf: SearchParameter
Title: "Provenance target Search Parameter"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/SearchParameter/hrex-provenance-target"
* name = "HRexProvenanceTarget"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Provenance-target"
* status = #active
* experimental = false
* description = "Target Reference(s) (usually version specific)\n\n**NOTE**: This HRex SearchParameter definition extends the usage context of the [capabilitystatement-expectation](http://hl7.org/fhir/R4/extension-capabilitystatement-expectation.html) extension to formally express implementer expectations for these elements:\n\n* multipleAnd\n\n* multipleOr\n\n* modifier\n\n* comparator\n\n* chain"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #target
* base = #Provenance
* type = #reference
* expression = "Provenance.target"
* xpath = "f:Provenance/f:target"
* xpathUsage = #normal
* target[0] = #Account
* target[+] = #ActivityDefinition
* target[+] = #AdverseEvent
* target[+] = #AllergyIntolerance
* target[+] = #Appointment
* target[+] = #AppointmentResponse
* target[+] = #AuditEvent
* target[+] = #Basic
* target[+] = #Binary
* target[+] = #BiologicallyDerivedProduct
* target[+] = #BodyStructure
* target[+] = #Bundle
* target[+] = #CapabilityStatement
* target[+] = #CarePlan
* target[+] = #CareTeam
* target[+] = #CatalogEntry
* target[+] = #ChargeItem
* target[+] = #ChargeItemDefinition
* target[+] = #Claim
* target[+] = #ClaimResponse
* target[+] = #ClinicalImpression
* target[+] = #CodeSystem
* target[+] = #Communication
* target[+] = #CommunicationRequest
* target[+] = #CompartmentDefinition
* target[+] = #Composition
* target[+] = #ConceptMap
* target[+] = #Condition
* target[+] = #Consent
* target[+] = #Contract
* target[+] = #Coverage
* target[+] = #CoverageEligibilityRequest
* target[+] = #CoverageEligibilityResponse
* target[+] = #DetectedIssue
* target[+] = #Device
* target[+] = #DeviceDefinition
* target[+] = #DeviceMetric
* target[+] = #DeviceRequest
* target[+] = #DeviceUseStatement
* target[+] = #DiagnosticReport
* target[+] = #DocumentManifest
* target[+] = #DocumentReference
* target[+] = #EffectEvidenceSynthesis
* target[+] = #Encounter
* target[+] = #Endpoint
* target[+] = #EnrollmentRequest
* target[+] = #EnrollmentResponse
* target[+] = #EpisodeOfCare
* target[+] = #EventDefinition
* target[+] = #Evidence
* target[+] = #EvidenceVariable
* target[+] = #ExampleScenario
* target[+] = #ExplanationOfBenefit
* target[+] = #FamilyMemberHistory
* target[+] = #Flag
* target[+] = #Goal
* target[+] = #GraphDefinition
* target[+] = #Group
* target[+] = #GuidanceResponse
* target[+] = #HealthcareService
* target[+] = #ImagingStudy
* target[+] = #Immunization
* target[+] = #ImmunizationEvaluation
* target[+] = #ImmunizationRecommendation
* target[+] = #ImplementationGuide
* target[+] = #InsurancePlan
* target[+] = #Invoice
* target[+] = #Library
* target[+] = #Linkage
* target[+] = #List
* target[+] = #Location
* target[+] = #Measure
* target[+] = #MeasureReport
* target[+] = #Media
* target[+] = #Medication
* target[+] = #MedicationAdministration
* target[+] = #MedicationDispense
* target[+] = #MedicationKnowledge
* target[+] = #MedicationRequest
* target[+] = #MedicationStatement
* target[+] = #MedicinalProduct
* target[+] = #MedicinalProductAuthorization
* target[+] = #MedicinalProductContraindication
* target[+] = #MedicinalProductIndication
* target[+] = #MedicinalProductIngredient
* target[+] = #MedicinalProductInteraction
* target[+] = #MedicinalProductManufactured
* target[+] = #MedicinalProductPackaged
* target[+] = #MedicinalProductPharmaceutical
* target[+] = #MedicinalProductUndesirableEffect
* target[+] = #MessageDefinition
* target[+] = #MessageHeader
* target[+] = #MolecularSequence
* target[+] = #NamingSystem
* target[+] = #NutritionOrder
* target[+] = #Observation
* target[+] = #ObservationDefinition
* target[+] = #OperationDefinition
* target[+] = #OperationOutcome
* target[+] = #Organization
* target[+] = #OrganizationAffiliation
* target[+] = #Patient
* target[+] = #PaymentNotice
* target[+] = #PaymentReconciliation
* target[+] = #Person
* target[+] = #PlanDefinition
* target[+] = #Practitioner
* target[+] = #PractitionerRole
* target[+] = #Procedure
* target[+] = #Provenance
* target[+] = #Questionnaire
* target[+] = #QuestionnaireResponse
* target[+] = #RelatedPerson
* target[+] = #RequestGroup
* target[+] = #ResearchDefinition
* target[+] = #ResearchElementDefinition
* target[+] = #ResearchStudy
* target[+] = #ResearchSubject
* target[+] = #RiskAssessment
* target[+] = #RiskEvidenceSynthesis
* target[+] = #Schedule
* target[+] = #SearchParameter
* target[+] = #ServiceRequest
* target[+] = #Slot
* target[+] = #Specimen
* target[+] = #SpecimenDefinition
* target[+] = #StructureDefinition
* target[+] = #StructureMap
* target[+] = #Subscription
* target[+] = #Substance
* target[+] = #SubstanceNucleicAcid
* target[+] = #SubstancePolymer
* target[+] = #SubstanceProtein
* target[+] = #SubstanceReferenceInformation
* target[+] = #SubstanceSourceMaterial
* target[+] = #SubstanceSpecification
* target[+] = #SupplyDelivery
* target[+] = #SupplyRequest
* target[+] = #Task
* target[+] = #TerminologyCapabilities
* target[+] = #TestReport
* target[+] = #TestScript
* target[+] = #ValueSet
* target[+] = #VerificationResult
* target[+] = #VisionPrescription
* multipleOr = true
  * extension[$cs-expectation].valueCode = #MAY
* multipleAnd = true
  * extension[$cs-expectation].valueCode = #MAY
* modifier[0] = #missing
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #text
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #not
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #type
  * extension[$cs-expectation].valueCode = #MAY
* modifier[+] = #identifier
  * extension[$cs-expectation].valueCode = #SHOULD

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/member-match-in-provider.fsh

Instance: member-match-in-provider
InstanceOf: HRexMemberMatchRequestParameters
Title: "$member-match provider example request"
Description: "A Parameters instance showing what the input to the $member-match operation would look like when initiated by a provider system"
Usage: #example
* parameter[memberPatient].resource
  * resourceType = "Patient"
  * id = "1"
/*  * identifier
    * type = $v2-0203#MB
    * system = "http://example.org/target-payer/identifiers/member"
    * value = "55678"
    * assigner.display = "Old Payer"*/
  * name
    * use = #official
    * family = "Person"
    * given[0] = "Patricia"
    * given[+] = "Ann"
  * gender = #female
  * birthDate = "1974-12-25"
* parameter[CoverageToMatch].resource
  * resourceType = "Coverage"
  * id = "9876B1"
  * identifier
    * type = $v2-0203#MB
    * system = "http://example.org/old-payer"
    * value = "DH10001235"
  * status = #draft
  * relationship = $dar#unknown
  * beneficiary.reference = "Patient/1"
  * period
    * start = "2011-05-23"
    * end = "2012-05-23"
  * payor
    * identifier
      * system = "http://hl7.org/fhir/sid/us-npi"
      * value = "9876543210"
    * display = "Old Health Plan"
  * class[group].value = "CB135"
  * class[plan].value = "B37FC"
  * class[+]
    * type = $coverage-class#subplan
    * value = "P7"
  * class[+]
    * type = $coverage-class#class
    * value = "SILVER"
* parameter[Consent].resource
  * resourceType = "Consent"
  * status = #active
  * scope = $consentscope#patient-privacy
//  * category = $v3-ActCode#IDSCL
  * patient.reference = "http://example.org/example"
  * performer.reference = "http://example.org/example"
  * sourceReference.reference = "http://example.org/DocumentReference/someconsent"
  * policy.uri = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#regular"
  * provision
    * type = #permit
    * period
      * start = "2022-01-01"
      * end = "2022-01-31"
    * actor[source]
      * role = $provenance-participant-type#performer
      * reference
        * identifier
          * system = "http://hl7.org/fhir/sid/us-npi"
          * value = "9876543210"
        * display = "Old Health Plan"
    * actor[recipient]
      * role = $v3-ParticipationType#IRCP
      * reference
        * identifier
          * system = "http://hl7.org/fhir/sid/us-npi"
          * value = "0000000001"
        * display = "Provider organization"
    * action = $consentaction#disclose

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/member-match-in.fsh

Instance: member-match-in
InstanceOf: HRexMemberMatchRequestParameters
Title: "$member-match payer example request"
Description: "A Parameters instance showing what the input to the $member-match operation would look like when initiated by a payer system"
Usage: #example
* parameter[memberPatient].resource
  * resourceType = "Patient"
  * id = "1"
/*  * identifier
    * type = $v2-0203#MB
    * system = "http://example.org/old-payer/identifiers/member"
    * value = "55678"
    * assigner.display = "Old Payer"*/
  * name
    * use = #official
    * family = "Person"
    * given[0] = "Patricia"
    * given[+] = "Ann"
  * gender = #female
  * birthDate = "1974-12-25"
* parameter[CoverageToMatch].resource
  * resourceType = "Coverage"
  * id = "9876B1"
  * identifier
    * type = $v2-0203#MB
    * system = "http://example.org/old-payer"
    * value = "DH10001235"
  * status = #draft
  * relationship = $dar#unknown
  * beneficiary.reference = "Patient/1"
  * period
    * start = "2011-05-23"
    * end = "2012-05-23"
  * payor
    * identifier
      * system = "http://hl7.org/fhir/sid/us-npi"
      * value = "9876543210"
    * display = "Old Health Plan"
  * class[0]
    * type = $coverage-class#group
    * value = "CB135"
  * class[+]
    * type = $coverage-class#plan
    * value = "B37FC"
  * class[+]
    * type = $coverage-class#subplan
    * value = "P7"
  * class[+]
    * type = $coverage-class#class
    * value = "SILVER"
* parameter[CoverageToLink].resource
  * resourceType = "Coverage"
  * id = "AA87654"
  * identifier
    * type = $v2-0203#MB
    * system = "http://example.org/new-payer/identifiers/coverage"
    * value = "234567"
  * status = #active
  * relationship = $dar#unknown
  * beneficiary.reference = "https://example.org/Patient/example"
  * payor
    * identifier
      * system = "http://hl7.org/fhir/sid/us-npi"
      * value = "0123456789"
    * display = "New Health Plan"
* parameter[Consent].resource
  * resourceType = "Consent"
  * status = #active
  * scope = $consentscope#patient-privacy
//  * category = $v3-ActCode#IDSCL
  * patient.reference = "http://example.org/Patient/example"
  * performer.reference = "http://example.org/Patient/example"
  * sourceReference.reference = "http://example.org/DocumentReference/someconsent"
  * policy.uri = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#regular"
  * provision
    * type = #permit
    * period
      * start = "2022-01-01"
      * end = "2022-01-31"
    * actor[source]
      * role = $provenance-participant-type#performer
      * reference
        * identifier
          * system = "http://hl7.org/fhir/sid/us-npi"
          * value = "9876543210"
        * display = "Old Health Plan"
    * actor[recipient]
      * role = $v3-ParticipationType#IRCP
      * reference
        * identifier
          * system = "http://hl7.org/fhir/sid/us-npi"
          * value = "0123456789"
        * display = "New Health Plan"
    * action = $consentaction#disclose

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/member-match-out.fsh

Instance: member-match-out
InstanceOf: HRexMemberMatchResponseParameters
Title: "$member-match example response"
Description: "A Parameters instance showing what the result of a $member-match operation would look like when initiated by a payer system"
Usage: #example
* parameter[MemberIdentifier].valueIdentifier
  * system = "http://example.org/target-payer/identifiers/member"
  * value = "55678"
  * assigner.display = "Old Payer"
* parameter[MemberId].valueReference = Reference(http://example.org/new-payer/fhir/Patient/pat1)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/member-match.fsh

Instance: member-match
InstanceOf: OperationDefinition
Title: "HRex Member Match Operation"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-hrex/OperationDefinition/member-match"
* name = "MemberMatch"
* title = "HRex Member Match Operation"
* status = #active
* kind = #operation
* description = "The **$member-match** operation that can be invoked by either a payer or an EHR or other system, allows one health plan to retrieve a unique identifier for a member from another health plan using a member's demographic and coverage information.  This identifier can then be used to perform subsequent queries and operations. Members implementing a deterministic match will require a match on member id or subscriber id at a minimum (i.e. A pure demographic match will not be supported by such implementations.)."
* affectsState = true
* code = #member-match
* resource = #Patient
* system = false
* type = true
* instance = false
* inputProfile = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-parameters-member-match-in"
* outputProfile = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-parameters-member-match-out"
* parameter[0]
  * insert parameter(#MemberPatient, #in, 1, "1", #Resource, "Parameter submitted by the new plan **SHALL** contain US Core Patient containing member demographics.")
  * referencedFrom[0]
    * source = "CoverageToMatch"
    * sourceId = "beneficiary"
  * referencedFrom[+]
    * source = "CoverageToLink"
    * sourceId = "beneficiary"
* parameter[+]
  * insert parameter(#Consent, #in, 0, "1", #Resource, "Consent held by the system seeking the match that grants permission to access the patient information information on the system for whom a patient is sought.  Downstream IGs could tighten this to 'required' if necessary.")
* parameter[+]
  * insert parameter(#CoverageToMatch, #in, 1, "1", #Resource, "Parameter that identifies the coverage to be matched by the receiving payer.  It contains the coverage details of health plan coverage provided by the member\, typically from their health plan coverage card.")
* parameter[+]
  * insert parameter(#CoverageToLink, #in, 0, "1", #Resource, "Parameter that identifies the coverage information of the member as they are known by the requesting payer.  This information allows the matching payer to link their member coverage information to that of the requesting payer to ease subsequent exchanges\, including evaluating authorization to share information in subsequent queries.  This parameter is optional as this operation might be invoked by non-payer systems.  However\, it is considered 'mustSupport'.  If the client invoking the operation is a payer\, they **SHALL** include their coverage information for the member when invoking the operation.")
* parameter[+]
  * insert parameter(#MemberIdentifier, #out, 1, "1", #Identifier, "This is the member identifier information for the patient as known by the server that is the target of the operation.")
* parameter[+]
  * insert parameter(#MemberId, #out, 0, "1", #Reference, "This is the RESTful identity for the patient as known by the server that is the target of the operation.")

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Organization-full.fsh

Instance: Organization-full
InstanceOf: HRexOrganization
Title: "HRex Organization full example"
Description: "An example showing a fully populated HRex Organization provider instance"
Usage: #example
* id = "full"
* identifier[0]
  * system = "http://example.org/identifiers/somesystem"
  * value = "11223344"
* identifier[+]
  * system = "urn:oid:2.16.840.1.113883.4.7"
  * value = "11D1234567"
* identifier[+]
  * system = "urn:oid:2.16.840.1.113883.4.4"
  * value = "55566667"
* identifier[+]
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "1234567893"
* identifier[+]
  * system = "http://terminology.hl7.org/NamingSystem/CMSCertificationNumber"
  * value = "918273645"
* active = true
* name = "New Health Plan"
* telecom[0]
  * system = #phone
  * value = "1-800-123-4567"
* telecom[+]
  * system = #phone
  * value = "1-234-567-8901"
* telecom[+]
  * system = #email
  * value = "info@newhealthplan.org"
* address[0].line = "#1A 123 Some street, Some town, Canada"
* address[+]
  * line = "1003 Healthcare Drive"
  * city = "Amherst"
  * state = "MA"
  * postalCode = "01002"
  * country = "USA"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Organization-min.fsh

Instance: Organization-min
InstanceOf: HRexOrganization
Title: "HRex Organization minimal example"
Description: "An example showing a minimally populated HRex Organization provider instance"
Usage: #example
* id = "min"
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "1234567893"
* active = true
* name = "New Health Plan"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/PractitionerRole-full.fsh

Instance: PractitionerRole-full
InstanceOf: HRexPractitionerRole
Title: "HRex PractitionerRole full example"
Description: "An example showing a fully populated HRex PractitionerRole instance"
Usage: #example
* id = "full"
* practitioner = Reference(http://example.org/new-payer/fhir/Practitioner/pract1)
* organization = Reference(Organization/full)
* code[0]
  * coding[0] = $provider-taxonomy#111N00000X
  * coding[+] = $sct#3842006
* code[+]
  * coding[0] = $provider-taxonomy#122300000X
  * coding[+] = $sct#106289002
* specialty[0] = $provider-taxonomy#103TE1100X
* specialty[+] = $provider-taxonomy#103TF0000X
* location[0] = Reference(http://example.org/some-clinic/Location/1874)
* location[+] = Reference(http://example.org/some-clinic/Location/9233)
* telecom[0]
  * system = #phone
  * value = "1-222-333-4444"
* telecom[+]
  * system = #email
  * value = "ronald.bone@newpayer.com"
* telecom[+]
  * system = #pager
  * value = "1(111)-1111111 - after 5pm"
* endpoint[0] = Reference(http://example.org/some-clinic/EndPoint/1)
* endpoint[+] = Reference(http://example.org/some-clinic/EndPoint/2)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/PractitionerRole-min.fsh

Instance: PractitionerRole-min
InstanceOf: HRexPractitionerRole
Title: "HRex PractitionerRole min example"
Description: "An example showing a minimally populated HRex PractitionerRole instance"
Usage: #example
* id = "min"
* practitioner = Reference(http://example.org/new-payer/fhir/Practitioner/pract1)
* organization = Reference(Organization/min)
* telecom
  * system = #email
  * value = "ronald.bone@newpayer.com"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Provenance-full.fsh

Instance: Provenance-full
InstanceOf: HRexProvenance
Title: "HRex Provenance full example"
Description: "An example showing a fully populated HRex Provenance instance"
Usage: #example
* id = "full"
* target = Reference(Coverage/full)
//  * reference.value = "Coverage/full"
* occurredDateTime = "2020-07-28"
* recorded = "2020-07-30T20:07:15-06:00"
* agent[0]
  * type = $us-core-provenance-participant-type#transmitter
  * who = Reference(Organization/full)
* agent[+]
  * type = $provenance-participant-type#author
  * who = Reference(http://example.org/new-payer/fhir/Practitioner/pract1)
  * onBehalfOf = Reference(Organization/full)
* signature[0]
  * type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.1
  * when = "2020-07-30T20:07:16.3831-06:00"
  * who = Reference(http://example.org/new-payer/Organization/57)
  * data = "12345678"
* signature[+]
  * type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.5
  * when = "2020-07-30T20:07:16.3847-06:00"
  * who = Reference(http://example.org/new-payer/Organization/57)
  * data = "98765432"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Provenance-min.fsh

Instance: Provenance-min
InstanceOf: HRexProvenance
Title: "HRex Provenance min example"
Description: "An example showing a minimally populated HRex Provenance instance"
Usage: #example
* id = "min"
* target = Reference(Coverage/full)
* recorded = "2020-07-30T20:07:15-06:00"
* agent
  * type = $provenance-participant-type#author
  * who = Reference(http://example.org/new-payer/fhir/Practitioner/pract1)
  * onBehalfOf = Reference(Organization/full)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/query-complete.fsh

Instance: query-complete
InstanceOf: HRexTaskDataRequest
Title: "HRex Task Data Request - completed query example"
Description: "An example showing a 'query' data request task once it has results - as a contained searchset Bundle"
Usage: #example
* contained = results
* basedOn = Reference(http://example.org/new-payer/CommunicationRequest/57)
* status = #completed
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* reasonCode.text = "Support prior authorization decision-making"
* reasonReference = Reference(http://example.org/new-payer/fhir/Claim/123)
* input
  * type = $hrex-temp#data-query
  * valueString = "Condition?patient=Patient/pat1&clinical-status=active&code:below=http%3A%2F%2Fsnomed.info%2Fsct%7C73211009"
* output
  * type = $hrex-temp#data-value
  * valueReference = Reference(results)

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/query-initial.fsh

Instance: query-initial
InstanceOf: HRexTaskDataRequest
Title: "HRex Task Data Request - initial query example"
Description: "An example showing the initial view of a 'query' data request"
Usage: #example
* basedOn = Reference(http://example.org/new-payer/CommunicationRequest/57)
* status = #requested
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* reasonCode.text = "Support prior authorization decision-making"
* reasonReference = Reference(http://example.org/new-payer/fhir/Claim/123)
* input
  * type = $hrex-temp#data-query
  * valueString = "Condition?patient=Patient/pat1&clinical-status=active&code=http%3A%2F%2Fsnomed.info%2Fsct%7C73211009"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/query-status.fsh

Instance: query-status
InstanceOf: HRexTaskDataRequest
Title: "HRex Task Data Request - status query example"
Description: "An example showing a 'query' data request task after it has been accepted and is showing a 'progress' status"
Usage: #example
* basedOn = Reference(http://example.org/new-payer/CommunicationRequest/57)
* status = #in-progress
* businessStatus.text = "Results will be reviewed for release on Monday"
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* reasonCode.text = "Support prior authorization decision-making"
* reasonReference = Reference(http://example.org/new-payer/fhir/Claim/123)
* input
  * type = $hrex-temp#data-query
  * valueString = "Condition?patient=Patient/pat1&clinical-status=active&code=http%3A%2F%2Fsnomed.info%2Fsct%7C73211009"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/subscription-notification-with-data.fsh

Instance: subscription-notification-with-data
InstanceOf: Bundle
Title: "HRex Task Subscription Notification - completed query example"
Description: "An example showing the subscription notification for a 'query' data request task that includes data"
Usage: #example
* type = #history
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* entry[0]
  * fullUrl = "urn:uuid:93be0c3d-1ba9-49bf-8a9b-9614604cda3c"
  * resource = 93be0c3d-1ba9-49bf-8a9b-9614604cda3c
  * request
    * method = #GET
    * url = "https://example.org/fhir/r4/Subscription/task/$status"
  * response.status = "200"
* entry[+]
  * fullUrl = "https://example.org/fhir/r4/Task/e3b9e31e-6252-40a5-9b7b-dfa6ca44f875"
  * resource = e3b9e31e-6252-40a5-9b7b-dfa6ca44f875
  * request
    * method = #PUT
    * url = "Task"
  * response.status = "200"

Instance: e3b9e31e-6252-40a5-9b7b-dfa6ca44f875
InstanceOf: Task
Usage: #inline
* contained[0] = results
* basedOn = Reference(http://example.org/new-payer/CommunicationRequest/57)
* status = #completed
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* reasonCode.text = "Support prior authorization decision-making"
* reasonReference = Reference(http://example.org/new-payer/fhir/Claim/123)
* input
  * type = $hrex-temp#data-query
  * valueString = "Condition?patient=Patient/pat1&clinical-status=active&code:below=http%3A%2F%2Fsnomed.info%2Fsct%7C73211009"
* output
  * type = $hrex-temp#data-value
  * valueReference = Reference(results)

Instance: 93be0c3d-1ba9-49bf-8a9b-9614604cda3c
InstanceOf: Parameters
Usage: #inline
* parameter[0]
  * name = "subscription-url"
  * valueUri = "https://example.org/fhir/r4/Subscription/task"
* parameter[+]
  * name = "status"
  * valueCode = #active
* parameter[+]
  * name = "type"
  * valueCode = #event-notification
* parameter[+]
  * name = "subscription-event-count"
  * valueUnsignedInt = 2
* parameter[+]
  * name = "bundle-event-count"
  * valueUnsignedInt = 1
* parameter[+]
  * name = "subscription-topic-url"
  * valueUri = "http://hl7.org/SubscriptionTopic/task"

Instance: results
InstanceOf: Bundle
Usage: #inline
* type = #searchset
* total = 1
* link
  * relation = "self"
  * url = "http://example.org/new-payer/fhir/Condition?patient=Patient/pat1&clinical-status=active&code:below=http%3A%2F%2Fsnomed.info%2Fsct%7C73211009"
* entry
  * fullUrl = "http://local.fhir.org:960/r4/Condition/example"
  * resource
    * resourceType = "Condition"
    * id = "example"
    * meta
      * versionId = "1"
      * lastUpdated = "2018-11-12T03:34:46.552Z"
    * text
      * status = #generated
      * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Severe burn of left ear (Date: 24-June 2012)</div>"
    * clinicalStatus = $condition-clinical#active
    * verificationStatus = $condition-ver-status#confirmed
    * category
      * coding[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
      * coding[+] = $sct#359642000 "Type 2 diabetes mellitus in nonobese"
    * subject.reference = "http://example.org/new-payer/fhir/Patient/pat1"
    * onsetDateTime = "2012-06-24"
  * search.mode = #match


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/subscription-notification-with-document.fsh

Instance: subscription-notification-with-document
InstanceOf: Bundle
Title: "HRex Task Subscription Notification - completed document example"
Description: "An example showing the subscription notification for a 'document' data request task that includes data"
Usage: #example
* type = #history
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* entry[0]
  * fullUrl = "urn:uuid:f830abeb-7ff3-4494-bfd6-0d9a88d3319c"
  * resource = f830abeb-7ff3-4494-bfd6-0d9a88d3319c
  * request
    * method = #GET
    * url = "https://example.org/fhir/r4/Subscription/task/$status"
  * response.status = "200"
* entry[+]
  * fullUrl = "https://example.org/fhir/r4/Task/c94fb961-310c-41f1-a54f-fc5f2dba49ee"
  * resource = c94fb961-310c-41f1-a54f-fc5f2dba49ee
  * request
    * method = #PUT
    * url = "Task"
  * response.status = "200"
* entry[+]
  * fullUrl = "https://example.org/fhir/r4/DocumentReference/287Q73J237"
  * resource = 287Q73J237
  * request
    * method = #GET
    * url = "DocumentReference"
  * response.status = "200"

Instance: f830abeb-7ff3-4494-bfd6-0d9a88d3319c
InstanceOf: Parameters
Usage: #inline
* parameter[0]
  * name = "subscription-url"
  * valueUri = "https://example.org/fhir/r4/Subscription/task"
* parameter[+]
  * name = "status"
  * valueCode = #active
* parameter[+]
  * name = "type"
  * valueCode = #event-notification
* parameter[+]
  * name = "subscription-event-count"
  * valueUnsignedInt = 2
* parameter[+]
  * name = "bundle-event-count"
  * valueUnsignedInt = 1
* parameter[+]
  * name = "subscription-topic-url"
  * valueUri = "http://hl7.org/SubscriptionTopic/task"

Instance: c94fb961-310c-41f1-a54f-fc5f2dba49ee
InstanceOf: Task
Usage: #inline
* status = #completed
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/ehr/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* reasonCode.text = "Support prior authorization decision-making"
* reasonReference = Reference(http://example.org/new-payer/fhir/Claim/123)
* input
  * type = $hrex-temp#data-code
  * valueCodeableConcept = $loinc#34108-1
* output
  * type = $hrex-temp#data-value
  * valueReference = Reference(http://example.org/ehr/fhir/DocumentReference/287Q73J237)

Instance: 287Q73J237
InstanceOf: DocumentReference
Usage: #inline
* status = #current
* type = $loinc#34117-2 "History and physical note"
* category = $loinc#47039-3 "Hospital Admission history and physical note"
* subject = Reference(http://example.org/ehr/fhir/Patient/pat1)
* date = "2013-07-01T23:11:33+10:00"
* author = Reference(http://example.org/ehr/fhir/Practitioner/pract1)
* description = "Physical"
* content
  * attachment
    * contentType = #text/plain
    * language = #en-US
    * url = "http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32"
    * title = "Physical"
    * creation = "2005-12-24"
  * format = $formatcode#urn:ihe:pcc:apr:handp:2008

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/Task-min.fsh

Instance: Task-min
InstanceOf: HRexTaskDataRequest
Title: "HRex Task minimal example"
Description: "An example showing a minimally populated HRex Task Data Request instance"
Usage: #example
* id = "min"
* status = #requested
* intent = #order
* code = $hrex-temp#data-request
* for = Reference(http://example.org/new-payer/fhir/Patient/pat1)
* authoredOn = "2020-07-30T20:07:15-06:00"
* requester = Reference(http://example.org/new-payer/fhir/Organization/hl7pay)
* owner = Reference(http://example.org/provider/fhir/Organization/hl7prov)
* input
  * type = $hrex-temp#data-query
  * valueString = "Condition?patient=Patient/pat1&clinical-status=active&code=http%3A%2F%2Fsnomed.info%2Fsct%7C73211009"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/instances/task-poll-response.fsh

Instance: task-poll-response
InstanceOf: Bundle
Title: "HRex Task polling response"
Description: "An example showing a polling response monitoring a completed 'document' task"
Usage: #example
* type = #searchset
* total = 1
* link
  * relation = "self"
  * url = "http://example.org/ehr/fhir/Task?_id=c94fb961-310c-41f1-a54f-fc5f2dba49ee&_include=Task:output"
* entry[0]
  * fullUrl = "https://example.org/fhir/r4/Task/c94fb961-310c-41f1-a54f-fc5f2dba49ee"
  * resource = c94fb961-310c-41f1-a54f-fc5f2dba49ee
  * search.mode = #match
* entry[+]
  * fullUrl = "https://example.org/fhir/r4/DocumentReference/c94fb961-310c-41f1-a54f-gd5325dgds7"
  * resource = c94fb961-310c-41f1-a54f-gd5325dgds7
  * search.mode = #include

Instance: c94fb961-310c-41f1-a54f-gd5325dgds7
InstanceOf: DocumentReference
Usage: #inline
* status = #current
* type = $loinc#34117-2 "History and physical note"
* category = $loinc#47039-3 "Hospital Admission history and physical note"
* subject = Reference(http://example.org/ehr/fhir/Patient/pat1)
* date = "2013-07-01T23:11:33+10:00"
* author = Reference(http://example.org/ehr/fhir/Practitioner/pract1)
* description = "Physical"
* content
  * attachment
    * contentType = #text/plain
    * language = #en-US
    * url = "http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32"
    * title = "Physical"
    * creation = "2005-12-24"
  * format = $formatcode#urn:ihe:pcc:apr:handp:2008

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexConsent.fsh

Profile: HRexConsent
Parent: Consent
Id: hrex-consent
Title: "HRex Consent Profile"
Description: "The HRex Consent Profile defines the constraints for representing a member's consent to the sharing of their healthcare information to other organizations."
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* ^experimental = false
* . ^definition = "This Consent profile conveys high-level computable information about a member's consent for information sharing, along with information that allows a party depending on the consent to follow up with the consent holder to access the 'original' consent, be it in paper form, audio recording or electronic for audit purposes."
* status = #active (exactly)
* status MS
* scope = $consentscope#patient-privacy
* scope MS
* category ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
* category contains disclosure 1..1 MS
* category[disclosure] = $v3-ActCode#IDSCL
* patient 1.. MS
* patient only Reference(USCorePatientProfile|7.0.0)
* performer 1..1 MS
* performer only Reference(USCorePatientProfile|7.0.0 or RelatedPerson or USCorePractitionerProfile|7.0.0 or HRexPractitionerRole or HRexOrganization)
* source[x] 1.. MS
* source[x] only Reference(DocumentReference)
  * ^comment = "...Allows referencing the 'source of truth' for the Consent. This might be a detailed electronic consent, an audio recording of a verbal consent, or an identifier that can be used to follow up for audit."
* policy ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "uri"
  * ^slicing.rules = #open
* policy contains hrex 1..1 MS
* policy[hrex].uri 1.. MS
* policy[hrex].uri from HRexConsentPolicy (required)
* provision 1.. MS
  * type 1.. MS
  * type = #permit (exactly)
  * period 1.. MS
    * start 1.. MS
    * end 1.. MS
  * actor ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "role"
    * ^slicing.rules = #open
  * actor contains
      source 1..* MS and
      recipient 1..* MS
  * actor[source] ^short = "Authorized to disclose"
    * ^comment = "Multiple repetitions are allowed.  At least one repetition **SHALL** refer to the target payer's organization.  If the consent is bidirectional, then the source system's organization would also be listed."
    * role = $provenance-participant-type#performer
    * role MS
      * ^comment = "This code isn't in the value set, but there's no code that represents the function of 'discloser' or 'performer', so need to go outside the value set.  Multiple "
    * reference only Reference(HRexOrganization)
    * reference MS
  * actor[recipient] ^short = "Authorized to receive information"
    * ^comment = "Multiple repetitions are allowed.  At least one repetition **SHALL** refer to the requesting system's organization.  If the consent is bidirectional, then the target payer's organization would also be listed."
    * role = $v3-ParticipationType#IRCP
    * role MS
      * ^comment = "...The code chosen doesn't strictly have the desired semantics, but of the ones in the value set it is closest and has the needed level of generality."
    * reference only Reference(HRexOrganization)
    * reference MS
  * action 1..1
  * action = $consentaction#disclose
  * securityLabel ..0
    * ^requirements = "Further constraining disclosure based on securityLabel is prohibited.  Consent rules are expressed solely in policy."
  * purpose ..0
    * ^requirements = "Further constraining disclosure based on purpose of use is prohibited.  Consent rules are expressed solely in policy."
  * class ..0
    * ^requirements = "Further constraining disclosure based on information class is prohibited.  Consent rules are expressed solely in policy."
  * code ..0
    * ^requirements = "Further constraining disclosure based on information type of use is prohibited.  Consent rules are expressed solely in policy."
  * dataPeriod ..0
    * ^requirements = "Further constraining disclosure based on data period is prohibited.  Consent rules are expressed solely in policy."
  * data ..0
    * ^requirements = "Further constraining disclosure based on data constraints is prohibited.  Consent rules are expressed solely in policy."
  * provision ..0
    * ^requirements = "Further constraining disclosure based on nested provisions is prohibited.  Consent rules are expressed solely in policy."

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexCoverage.fsh

Profile: HRexCoverage
Parent: Coverage
Id: hrex-coverage
Title: "HRex Member Match Coverage Profile"
Description: "The HRex Coverage Profile defines the constraints for representing a member's healthcare insurance information to the Payer for member match purposes. Coverage instances complying with this profile, sometimes together with the Patient which this profile references via `beneficiary`, allows a payer to identify a member in their system.  It aligns with the equivalent US Core profile, but diverges in that it does not require Patient.identifier for the beneficiary."
* ^status = #active
* ^experimental = false
* obeys us-core-15
* . ^definition = "This is the Coverage profile which is used to provide insurance information for scheduling an appointment and/or registering a patient."
  * ^mustSupport = false
* identifier MS
  * ^short = "Member ID and other identifiers"
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* identifier contains memberid 0..1 MS
* identifier[memberid]
  * ^short = "Member ID"
  * ^condition = us-core-15
  * type = $v2-0203#MB
    * ^short = "Member Number identifier type"
  * value 1..1 MS
* status MS
  * ^comment = "The `Coverage.status` alone does not indicate whether an individual's coverage is terminated or that the individual is not covered. The `Coverage.period` needs to be considered as well."  
* type MS
  * ^comment = "Identifies if the coverage is PPO, HMO, POS, etc."
* type from http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.3591 (extensible)
  * ^binding.description = "US Public Health Data Consortium Source of Payment Codes"
// Todo: constrain & extend type
* policyHolder MS
* policyHolder only Reference(USCorePatientProfile|7.0.0 or HRexOrganization or USCoreRelatedPersonProfile|7.0.0)
  * ^comment = "When the Coverage pertains to organizations such as Children and Family Services, `policyHolder` should reference Organization (or another suitable entity) representing them. It acts as the holder of the policy and is responsible for the management and oversight of the coverage."
// Added policyholder
* subscriberId MS
  * ^short = "Subscriber ID"
  * ^comment = "The identifier assigned by the Payer on the subscriber's ID card"
  * ^condition = us-core-15
* beneficiary only Reference(HRexPatientDemographics)
// Substituted from US core
* beneficiary MS
  * ^comment = "When the Coverage pertains to Children and Family Services, `beneficiary` should reference individual members under the policy (such as children or family members) that are entitled to claim benefits."
  * ^requirements = "This would usually be the US Core Patient Resource for which the service was performed, however US Core requires an identifier, and that won't necessarily be available/relevant when coverage is being between payers"
* dependent only string
* dependent MS
* relationship 1.. MS
* relationship from HRexCoverageRelationship
* period MS
  * ^comment = "Date that the contract became effective and date that the contract was terminated or coverage changed."
* payor 1..1 MS
* payor only Reference(HRexOrganization)
  * ^comment = "... When sending payer, it might either be a reference to a record stored on a mutually accessible registry, or the Reference.display and Reference.identifier elements can be used to convey the payer's name and identifer."
  * ^requirements = "... In Da Vinci, we're only concerned with insurance coverage.  Because self-pay is not relevant, this is limited to organizations only"
* class ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
// Class overall isn't MS
* class contains group 0..1 MS
* class contains plan 0..1 MS
* class[group]
  * ^short = "Group"
  * type 1..1 MS
  * type only CodeableConcept
  * type = $coverage-class#group
  * value 1..1 MS
    * ^short = "Group Number"
    * ^comment = "Employer Account Number"
* class[plan]
  * ^short = "Plan"
  * type 1..1 MS
  * type only CodeableConcept
  * type = $coverage-class#plan
  * value 1..1 MS
    * ^short = "Plan Number"
    * ^comment = "Business concept used by a health plan to describe its benefit offerings"
  * name MS
    * ^short = "Plan Name"
    * ^comment = "Name of the health plan benefit offering assigned to the Plan Identifier"

Invariant: us-core-15
Description: "Member Id in Coverage.identifier or Coverage.subscriberId SHALL be present"
Severity: #error
Expression: "identifier.type.coding.where(system='http://terminology.hl7.org/CodeSystem/v2-0203' and code='MB').exists() or subscriberId.exists()"


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexIdentifier-Namespaced.fsh

Profile: HRexIdentifierNamespaced
Parent: Identifier
Id: hrex-identifier-namespaced
Title: "HRex Namespaced Identifier"
Description: "An Identifier requiring both system and value"
* ^status = #active
* system 1.. MS
* value 1.. MS

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexMemberMatchRequestParameters.fsh

Profile: HRexMemberMatchRequestParameters
Parent: Parameters
Id: hrex-parameters-member-match-in
Title: "HRex Parameters - Member Match Request Profile"
Description: """The Parameters profile for Da Vinci Find Member using Patient and Coverage Resources Request. The resource must contain: 
  * MemberPatient - HRex Patient containing member demographics 
  * CoverageToMatch - details of prior health plan coverage provided by the member, typically from their health plan coverage card 
  * CoverageToLink - details of new or prospective health plan coverage, provided by the health plan based upon the member's enrollment"""
* parameter ..4 MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #closed
* parameter contains
    memberPatient 1..1 MS and
    CoverageToMatch 1..1 MS and
    CoverageToLink 0..1 MS and
    Consent 0..1
* parameter[memberPatient]
  * name = "MemberPatient" (exactly)
  * name MS
  * resource 1.. MS
  * resource only HRexPatientDemographics
* parameter[CoverageToMatch]
  * name = "CoverageToMatch" (exactly)
  * name MS
  * resource 1.. MS
  * resource only HRexCoverage
* parameter[CoverageToLink]
  * name = "CoverageToLink" (exactly)
  * name MS
  * resource 1.. MS
  * resource only HRexCoverage
* parameter[Consent]
  * name = "Consent" (exactly)
  * name MS
  * resource 1.. MS
  * resource only HRexConsent

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexMemberMatchResponseParameters.fsh

Profile: HRexMemberMatchResponseParameters
Parent: Parameters
Id: hrex-parameters-member-match-out
Title: "HRex Parameters - Member Match Response Profile"
Description: """The Parameters profile for Da Vinci Find Member using Identifier datatype Response.  The old health plan **SHALL** return the following data if records for member are found: 
 * The unique member identifier (denoted through identifier parameter) submitted by the new health plan."""
* parameter ..3 MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "name"
  * ^slicing.rules = #closed
* parameter contains MemberIdentifier 1..1 MS
* parameter contains MemberId 0..1
* parameter[MemberIdentifier]
  * name = "MemberIdentifier" (exactly)
  * name MS
  * valueIdentifier 1.. MS
  * valueIdentifier only Identifier
    * type 1.. MS
    * type = $hrex-temp#UMB
    * value 1.. MS
* parameter[MemberId]
  * ^short = "RESTful reference"
  * name = "MemberId" (exactly)
  * name MS
  * valueReference 1.. MS
  * valueReference only Reference(HRexPatientDemographics)
    * ^type.profile = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-reference-rest"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexOrganization.fsh

Profile: HRexOrganization
Parent: USCoreOrganizationProfile|7.0.0
Id: hrex-organization
Title: "HRex Organization Profile"
Description: "Additional Da Vinci constraints on organization - to represent either provider organizations or payers"
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|3.1.1"
* ^status = #active
* . ^mustSupport = false
  * ^isModifier = false
* identifier 1..
  * ^comment = "It is preferred to use an NPI and if an NPI is available, it **SHALL** be included.  However, tax id other identifier schemes can be used if an NPI is not available"
* identifier contains
    tin 0..1 MS
* identifier[tin] ^patternIdentifier.system = "urn:oid:2.16.840.1.113883.4.4"


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexPatientDemographics.fsh

Profile: HRexPatientDemographics
Parent: Patient
Id: hrex-patient-demographics
Title: "HRex Member Match Patient"
Description: "Defines constraints on the patient resource for transmission of minimal demographic information needed for $member-match."
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^experimental = false
* ^status = #draft
* obeys hrex-pat-1
* . ^definition = "HRex Patient Demographics Profile is tailored to support the majority of use cases requiring either gender or birthSex extension. For particular use cases that does not require either elements, creating a new profile derived from the base Patient resource is recommended (ensuring it’s adjusted to specific needs and constraints)."
  * ^mustSupport = false
* extension contains $us-core-birthsex named us-core-birthSex 0..1 MS
* identifier ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
* identifier contains umb 0..1 MS
* identifier[umb] ^short = "Unique Member Identifier. This is required to be present for the 'new' coverage and be absent for the 'old' coverage."
  * ^comment = "This is the unique member identifier of the server on which a 'match' is sought"
  * ^patternIdentifier.type = $hrex-temp#UMB
* name 1..* MS
* name only HumanName
  * family 1..1 MS
  * family only string
  * given 1..* MS
  * given only string
* gender 0..1 MS
* gender only code
* gender from AdministrativeGender (required)
* birthDate 1..1 MS
* birthDate only date
* address 0..* MS
  * line 0..* MS
  * city 0..1 MS
  * state 0..1 MS
  * postalCode 0..1 MS
  * period 0..1 MS

Invariant: hrex-pat-1
Description: "Patient gender or birthSex extension SHALL be present"
Severity: #error
Expression: "gender.exists() or extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex').exists()"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexPractitionerRole.fsh

Profile: HRexPractitionerRole
Parent: USCorePractitionerRoleProfile|7.0.0
Id: hrex-practitionerrole
Title: "HRex PractitionerRole Profile"
Description: "Constraints on the US Core PractitionerRole requiring the use of Da Vinci Organization and Practitioner"
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0"
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|3.1.1"
* ^status = #active
* code
  * ^comment = "...  A concept map for converting between the US Core 3.1.1 and 6.1.0 value sets can be found [here](ConceptMap-NUCC-CareTeamMemberFunction.html)"
  * insert AdditionalBinding(#extensible, "http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role|3.1")
//* obeys hrex-pr-1
  * ^binding.extension.url = $additional-binding
  * ^binding.extension.extension[0].url = "purpose"
  * ^binding.extension.extension[=].valueCode = #extensible
  * ^binding.extension.extension[+].url = "valueSet"
  * ^binding.extension.extension[=].valueCanonical = "http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role|3.1.0"
* practitioner 1..
* practitioner only Reference(USCorePractitionerProfile)
* organization 1..
* organization only Reference(HRexOrganization)

//Invariant: hrex-pr-1
//Description: "If present, practitioner role should also be from US Core 3.1.1 value set"
//Severity: #warning
//Expression: "code.exists() implies code.memberOf('http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role|3.1.0')"



---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexProvenance.fsh

Profile: HRexProvenance
Parent: USCoreProvenance|7.0.0
Id: hrex-provenance
Title: "HRex Provenance Profile"
Description: "Additional constraints on US Core Provenance to ensure it meets payer needs, including indicating when the event occurred and retaining signatures if present"
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance|6.1.0"
* ^status = #active
* target.reference 1..
* occurred[x] MS
  * ^min = 0
* signature MS

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexReference.fsh

Profile: HRexReferenceRest
Parent: Reference
Id: hrex-reference-rest
Title: "HRex REST Reference Profile"
Description: "This HRex Reference Profile is intended to be used by Da Vinci IGs where there is a need for the reference to be resolvable via REST (and potentially chained through)."
* reference 1..1

Profile: HRexReferenceId
Parent: Reference
Id: hrex-reference-id
Title: "HRex Identifier Reference Profile"
Description: "This HRex Reference Profile is intended to be used by Da Vinci IGs where there is no expectation for a RESTful reference, but there is a need for a business identifier (and possibly a display name)."
* identifier 1..1 
* display 0..1 MS


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/profiles/HRexTaskDataRequest.fsh

Profile: HRexTaskDataRequest
Parent: Task
Id: hrex-task-data-request
Title: "HRex Task Data Request Profile"
Description: "This Task profile is used to solicit information from a system when direct query is not possible and human intervention might be required"
* ^status = #active
* ^experimental = false
* obeys tdr-1 and tdr-2 and tdr-3
* . ^definition = "This Task profile is used to solicit information from a system when direct query is not possible and human intervention might be required"
* basedOn MS
  * ^short = "Authorization for data request"
  * ^requirements = "Indicates the order (ServiceRequest, CommunicationRequest, etc.) that authorizes the data request"
* status MS
* status from HRexTaskStatus (required)
* statusReason MS
  * ^requirements = "Indicates why task failed or was rejected."
  * text 1.. MS
* businessStatus MS
  * ^short = "E.g. 'waiting on internal review'"
  * ^comment = "Conveys the internal business progress of the request and provides more nuance than the overall status.  There is no expectation this will be coded, but negotiation of agreed codes can be used between partners"
  * ^requirements = "Indicates progress in retrieving the data"
  * text 1.. MS
* intent = #order (exactly)
* intent MS
* code 1.. MS
* code = $hrex-temp#data-request
* focus 0..0
  * ^short = "What task is acting on"
* for 1.. MS
* for only Reference(USCorePatientProfile|7.0.0)
  * ^short = "Member being queried"
  * ^comment = "Queries must always be in the scope of a single member"
* authoredOn 1.. MS
* requester 1.. MS
* requester only Reference(HRexOrganization or USCorePractitionerProfile)
  * ^short = "Who is asking for data"
* owner 1.. MS
* owner only Reference(HRexOrganization or USCorePractitionerProfile)
  * ^short = "Who is being asked for data"
* reasonCode MS
  * ^comment = "Only text is expected, though codes can be used for partners with agreed value sets"
  * ^requirements = "Indicates why the information request is occurring"
  * text 1.. MS
* reasonReference only Reference(Claim or HRexCoverage)
* reasonReference MS
  * ^comment = "Likely targets would be HRex Coverage, PCDE Claim (for prior authorization) or a bare Claim resource for referencing an actual Claim."
  * ^requirements = "Indicates why the information request is occurring"
* input 1.. MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains
    query 0..1 MS and
    code 0..1 MS
* input[query] ^short = "Requested query"
  * ^definition = "Indicates the specific FHIR RESTful query to be executed"
  * ^comment = "This will contain the text that goes after the '?' when executing the query."
  * type = $hrex-temp#data-query
  * type MS
  * value[x] only string
  * value[x] MS
    * ^short = "query value"
* input[code] ^short = "Requested data code"
  * ^definition = "A code indicating the type of data/document to be returned"
  * ^comment = "This might be a document code or other code describing the requested information.  If no appropriate standard code exists, local codes can be used between partners, or a human-readable textual description of the desired data can be provided.  Downstream profiles may tighten expectations for this element."
  * type = $hrex-temp#data-code
  * type MS
  * value[x] only CodeableConcept
  * value[x] MS
    * ^short = "query value"
* output MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains data 0..* MS
* output[data] ^short = "Requested data"
  * ^definition = "The data content requested.  Multiple repetitions are permitted in the event that a single request returns multiple instances and packaging in a Bundle is not necessary/approrpriate.  Also, in most cases Provenance instances should accompany returned data so that the requester can best integrate and allocate trust/confidence to the provided data."
  * type = $hrex-temp#data-value
  * type MS
  * value[x] only Reference
  * value[x] MS
    * ^short = "data reference"
    * ^comment = "The referenced data might be contained within the Task (if it doesn't have/shouldn't have independent persistence), but can also refer to data stored elsewhere - either on the owner's system or some other system.  Note that all returned data **SHOULD** comply with appropriate US-Core and/or Da Vinci profiles."

Invariant: tdr-1
Description: "Must have exactly one input that is data-query or data-code"
Severity: #error
Expression: "input.type.where(coding.where(system='http://hl7.org/fhir/us/davinci-hrex/CodeSystem/hrex-temp' and (code='data-code' or code='data-query')).exists()).count()=1"

Invariant: tdr-2
Description: "Task statusReason SHALL be populated if status is 'rejected' or 'failed'"
Severity: #error
Expression: "(status = 'rejected' or status = 'failed') implies statusReason.exists()"

Invariant: tdr-3
Description: "Task output SHALL be populated if status is 'completed'"
Severity: #error
Expression: "(status = 'completed') implies output.exists()"

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/valuesets/HRexConsentPolicy.fsh

ValueSet: HRexConsentPolicy
Id: hrex-consent-policy
Title: "HRex Consent Policy ValueSet"
Description: "The set of policy URIs for use in HRex data disclosure consent assertions"
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* ^experimental = false
* urn:ietf:rfc:3986#http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#regular
* urn:ietf:rfc:3986#http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#sensitive

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/valuesets/HRexCoverageRelationship.fsh

ValueSet: HRexCoverageRelationship
Id: hrex-coverage-relationship
Title: "HRex Coverage Relationship ValueSet"
Description: "Adds 'unknown' to the list of standard coverage relationship types"
* ^extension[$standard-status].valueCode = #draft
* ^extension[$fmm].valueInteger = 0
* ^status = #draft
* ^experimental = false
* include codes from valueset http://hl7.org/fhir/ValueSet/subscriber-relationship
* include $dar#unknown

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/valuesets/HRexEndPointName.fsh

ValueSet: HRexEndPointName
Id: hrex-endpoint-name
Title: "HRex Endpoint Name"
Description: "The set of endpoint names (and possibly other properties) that can be defined in a Da Vinci .well-known file"
* ^status = #active
* ^experimental = false
* include codes from system HRexTempCodes where concept is-a #_endpoints


---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/valuesets/HRexTaskStatus.fsh

ValueSet: HRexTaskStatus
Id: hrex-task-status
Title: "HRex Task Status ValueSet"
Description: "The set of task codes allowed for use in HRex data request tasks"
* ^status = #active
* ^experimental = false
* TaskStatus#requested
* TaskStatus#accepted
* TaskStatus#rejected
* TaskStatus#in-progress
* TaskStatus#failed
* TaskStatus#completed
* TaskStatus#on-hold

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/aliases.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $provenance-participant-type = http://terminology.hl7.org/CodeSystem/provenance-participant-type
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $consentaction = http://terminology.hl7.org/CodeSystem/consentaction
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $dar = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $sct = http://snomed.info/sct
Alias: $hrex-temp = http://hl7.org/fhir/us/davinci-hrex/CodeSystem/hrex-temp
Alias: $fhir-types = http://hl7.org/fhir/fhir-types
Alias: $loinc = http://loinc.org
Alias: $formatcode = urn:oid:1.3.6.1.4.1.19376.1.2.3
//Alias: $formatcode = http://ihe.net/fhir/ihe.formatcode.fhir/ValueSet/formatcode
Alias: $subRelationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: $sop = https://nahdo.org/sopt
Alias: $claim-type = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $1365 = http://codesystem.x12.org/005010/1365
Alias: $Place_of_Service_Code_Set = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
Alias: $306 = http://codesystem.x12.org/005010/306
Alias: $adjudication = http://terminology.hl7.org/CodeSystem/adjudication
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy
Alias: $us-core-provenance-participant-type = http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type
Alias: $us-core-birthsex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias: $birthsex = http://hl7.org/fhir/us/core/ValueSet/birthsex
Alias: $standard-status = http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
Alias: $fmm = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: $cs-expectation = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
Alias: $additional-binding = http://hl7.org/fhir/tools/StructureDefinition/additional-binding
Alias: $compliesWithProfile = http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile

---

File: repos/HL7_SLASH_davinci-ehrx/input/fsh/shared.fsh

RuleSet: parameter(name, use, min, max, type, documentation) 
* name = {name}
* use = {use}
* min = {min}
* max = {max}
* type = {type}
* documentation = {documentation}

RuleSet: parameterComplex(name, use, min, max, documentation) 
* name = {name}
* use = {use}
* min = {min}
* max = {max}
* documentation = {documentation}

RuleSet: map(sourceCode, sourceDisplay, equivalence, targetCode, targetDisplay)
* element[+]
  * code = {sourceCode}
  * display = "{sourceDisplay}"
  * target
    * code = {targetCode}
    * display = "{targetDisplay}"
    * equivalence = {equivalence}

RuleSet: mapeq(sourceCode, sourceDisplay, targetCode, targetDisplay)
* insert map({sourceCode}, [[{sourceDisplay}]], #equivalent, {targetCode}, [[{targetDisplay}]])

RuleSet: mapnarrow(sourceCode, sourceDisplay, targetCode, targetDisplay, comment)
* insert map({sourceCode}, [[{sourceDisplay}]], #narrower, {targetCode}, [[{targetDisplay}]])
* element[=].target.comment = "{comment}"

RuleSet: maprelated(sourceCode, sourceDisplay, targetCode, targetDisplay, comment)
* insert map({sourceCode}, [[{sourceDisplay}]], #relatedto, {targetCode}, [[{targetDisplay}]])
* element[=].target.comment = "{comment}"

RuleSet: mapwide(sourceCode, sourceDisplay, targetCode, targetDisplay)
* insert map({sourceCode}, [[{sourceDisplay}]], #wider, {targetCode}, [[{targetDisplay}]])

RuleSet: nomap(sourceCode, sourceDisplay)
* element[+]
  * code = {sourceCode}
  * display = "{sourceDisplay}"
  * target.equivalence = #unmatched

RuleSet: AdditionalBinding(purpose, canonical)
* ^binding.extension[$additional-binding][+].extension[purpose].valueCode = {purpose}
* ^binding.extension[$additional-binding][=].extension[valueSet].valueCanonical = {canonical}


---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Binary-Wellknown-intro.md

This is an example showing what the contents of a .well-known file might look like when following the guidance provided in the [Endpoint Discovery](endpoint-discovery.html) part of this IG.

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Coverage-full-intro.md

This example includes all the mandatory and mustSupport elements from the [HRex Coverage](StructureDefinition-hrex-coverage.html) profile, including multiple repetitions of elements that are permitted to repeat.  This represents the set of elements that conformant systems must be capable of handling.

Notes:

* It would be uncommon to have multiple identifiers for a single coverage, but it is possible.  
* The payer is handled as an external reference.  It could point to a contained resource if the data is maintained as part of the Coverage instance or just have a 'display' element in situations where all that is known is the payer name.


---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Coverage-min-intro.md

This example includes the minimum set of the mandatory elements from the [HRex Coverage](StructureDefinition-hrex-coverage.html) profile.

Notes:

* The payer is handled as an external reference.  It could point to a contained resource if the data is maintained as part of the Coverage instance or just have a 'display' element in situations where all that is known is the payer name.


---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/OperationDefinition-member-match-intro.md

To access information about a member on a payer's system, the requesting system needs to know the unique identifier of that member on the payer's system.  However, in many cases, neither the client system nor the patient will have this information.  The $member-match operation supports identifying the target payer's member and coverage information for a specified member so the client can use that information for subsequent queries and operations.

In addition, the $member-match operation allows establishing consent from the patient (or other responsible party) that enables information to flow between the initiating system and the responding system.

This operation might be used by EHRs, other payers, or any other type of system that needs to interact with a payer and who needs to resolve the identity of the member in question on the target payer's system.

The operation works by passing in up to four parameters:

* The requesting system's demographic information on the member (as a Patient resource)
* If initiated by a payer holding coverage for the member, the requesting payer's Coverage information (to allow linking by the receiving payer)
* The target payer's Coverage information (as gleaned from the member's card)
* The consent of the member (or responsible party) for the member's information held by the target payer to be shared with the requesting system

The response returns:
* The target payer's identifier information on the member - their unique member identifier (UMB) sent as an Identifer within a Parameters instance.
* Optionally, a RESTful reference to the Patient that corresponds to the member on the payer's FHIR API

An identifier is required, while the RESTful id is optional as most payers do not (yet) expose RESTful ids for their member or coverage records.  This identifier can be used in subsequent interactions with the target payer system.

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/OperationDefinition-member-match-notes.md


The response from a failed $member-match is a "422 Unprocessable Entity Status Code".

After a successful $member-match the requesting system **SHALL** then use the UMB provided by the target payer in the `Patient.identifier` field in any subsequent transactions with the same system.  If the requesting system was a payer with coverage for the member, the receiving system **SHOULD** create a linkage between their own member information and the Coverage provided by the requesting system.  This linkage can be used to support subsequent queries by establishing a known 'reason' for accessing a member's information.

NOTE: For privacy reasons, the 'CoverageToLink' **SHOULD NOT** include any data elements not marked as mustSupport in the Coverage profile.


#### Resolving parameter references
The input parameters include both Coverage and Consent resources with a reference to a Patient resource.  Those references **SHALL** be 'local' references (i.e. starting with "Patient/" rather than "http"), **SHALL** be resolved to the parameter with the name "MemberPatient", and **SHALL** refer to the same id.

#### Member matching Logic
This specification does not define the member matching logic that is used by a Payer that processes a $member-match operation.  However, because matching member identity is a key step in the release of potentially sensitive patient information, the algorithms used neet to be robust.  Servers **SHALL** monitor for and take measures to prevent brute force attacks where the same or similar set of demographics are repeatedly searched with differing card information in an attempt to achieve a match when the card information is unknown.

Matching behavior is:

* A maximum of a SINGLE unique match **SHALL** be returned.
* No match **SHALL** return a 422 status code.
* Multiple matches **SHALL** return a 422 status code.
* If consent is provided, inability to comply with consent requirements **SHALL** return a 422 status code

Any 422 response codes **SHOULD** be accompanied by an [OperationOutcome]({{site.data.fhir.path}}operationoutcome.html) that indicates the specific nature of the failure.

An important objective of this specification is to ensure that a health plan operating a $member-match operation has sufficient data provided to enable a match operation to be performed.  Therefore, the specification requires a health plan to provide demographic information (name, date of birth, gender) and identification details that would be present on a member's health plan insurance card with a request.

#### Consent
While logically a somewhat separate operation, the sharing of consent is piggy-backed into the matching of member information because, at least at present, Da Vinci workflows requring member matching inevitably also require the sharing of consent and performing both in a single step minimizes design complexity.  In the future, it is possible that these functions could be separated.

The member match operation allows establishing that a consent exists.  It does not, however, provide a mechanism for indicating that a consent has been revoked.  At present, we have not found a use-case that requires sharing of revocation information.  If the consent gets revoked on the data comsumer's side, then that system simply stops requesting information.  If the consent is revoked on the data source's side, then it simply stops sending information in response to a request.  Thus, it is sufficient that revocation occurs only within one system and there is no need to transmit it to the other.

The recipient of a member match **SHOULD** store the parameters of the consent (Validity Period, Scope etc.) to enable the authorization server to evaluate the consent before issuing a token for data access during subsequent requests.  This information might be stored as a Consent instance in a FHIR store, ubut use of a FHIR store is not required.

#### Examples
An example request (as POSTed when invoking the operation) can be found [here](Parameters-member-match-in.html) and an example response (as received in the HTTP response body after the operation processes) can be found [here](Parameters-member-match-out.html).

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Organization-full-intro.md

This example includes all the mandatory and mustSupport elements from the [HRex Organization](StructureDefinition-hrex-organization.html) profile, including multiple repetitions of elements that are permitted to repeat.  This represents the set of elements that conformant systems must be capable of handling.

Notes:

* It would be unusual for *all* the mustSupport identifier types to be present, but it is possible.  And other identifiers might be present as well.
* Additional elements might be sent to differentiate amongst addresses and telecom information, but it is sufficient to simply send the collection of what is known in an undifferentiated fashion
* All the address part types are optional.  It is not good practice for all parts of an address to be sent in 'line', but it is possible that might happen from some legacy systems.  All systems must be *capable* of sharing all the distinct address parts.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Organization-min-intro.md

This example includes the minimum set of the mandatory elements from the [HRex Organization](StructureDefinition-hrex-organization.html) profile.

Notes:

* It is required that an identifier be present, but it does not have to be one of the mustSupport slices (i.e. it can be something other than an NPI, CCN, TIN or CLIA number.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Parameters-member-match-in-intro.md

This sample shows the three parameter values passed into the [$member-match](OperationDefinition-member-match.html) operation.  At minimum, the Patient must have an identifier, name, and gender.  The identifier will be the member number as known by the requesting organization.  Both the old and new coverage identify the Patient as the beneficiary via a local reference.  In both coverages, the organization information is conveyed as a 'contained' resource - indicating that it is maintained as part of the coverage.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Parameters-member-match-out-intro.md

This sample shows the member identifier response parameter value received from the [$member-match](OperationDefinition-member-match.html) operation.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Practitioner-full-intro.md

This example includes all the mandatory and mustSupport elements from the [HRex Practitioner](StructureDefinition-hrex-practitioner.html) profile, including multiple repetitions of elements that are permitted to repeat.  This represents the set of elements that conformant systems must be capable of handling.

Notes:

* It would be unusual for *all* the mustSupport identifier types to be present, but it is possible.  And other identifiers might be present as well.
* Only the provider's family name must be supported - though other parts can certainly be present.
* Only text is shown for qualifications because that is all that must be supported.  However, if codes are known, they **SHOULD** be sent.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Practitioner-min-intro.md

This example includes the minimum set of the mandatory elements from the [HRex Practitioner](StructureDefinition-hrex-practitioner.html) profile.

Notes:

* It is required that an identifier be present, but it does not have to be one of the mustSupport slices (i.e. it can be something other than an NPI, CCN, TIN or CLIA number.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/PractitionerRole-full-intro.md

This example includes all the mandatory and mustSupport elements from the [HRex PractitionerRole](StructureDefinition-hrex-practitionerrole.html) profile, including multiple repetitions of elements that are permitted to repeat.  This represents the set of elements that conformant systems must be capable of handling.

Notes:

* It would be unusual for *all* the mustSupport identifier types to be present, but it is possible.  And other identifiers might be present as well.
* The code and specialty values do not include 'display' or 'text' elements because those are not mustSupport.  However, populating them is good practice and encouraged.
* Additional elements might be sent to differentiate amongst telecom information, but it is sufficient to simply send the collection of what is known in an undifferentiated fashion



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/PractitionerRole-min-intro.md

This example includes the minimum set of the mandatory elements from the [HRex PractitionerRole](StructureDefinition-hrex-practitionerrole.html) profile.

Notes:

* Both references shown here are 'external'.  However, if the information is not maintained independently, it is possible they could be contained references instead



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Provenance-full-intro.md

This example includes all the mandatory and mustSupport elements from the [HRex Provenance](StructureDefinition-hrex-provenance.html) profile, including multiple repetitions of elements that are permitted to repeat.  This represents the set of elements that conformant systems must be capable of handling.

Notes:

* The target reference would typically be version-specific, but because of publishing limitations, it is not possible to have defined version ids that can be referenced within examples
* Additional agents could be specified that do not fall into the mustSupport range
* The signature values provided are not valid (if they were valid, they would be *much* longer...



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Provenance-min-intro.md

This example includes the minimum set of the mandatory elements from the [HRex Provenance](StructureDefinition-hrex-provenance.html) profile.

Notes:

* The target reference would typically be version-specific, but because of publishing limitations, it is not possible to have defined version ids that can be referenced within examples
* The agent type does not have to be one of the mustSupport ones



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-consent-intro.md

Consent allows sharing the fact that a patient has authorized the sharing of data between two participants.  Sharing the existence of consent is often a pre-requisite to being able to share information.  This profile is intended only for use by the [$member-match](OperationDefinition-member-match.html) operation and is scoped to the types of consent relevant there (consent to share all information or only non-sensitive data).  However, it can potentially also be used by other Da Vinci implementation guides if those consent types are appropriate and sufficient.

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-consent-notes.md

HRex recognizes two consent policies:

* <a name="regular"/><code>http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#regular</code> - Access is granted to all patient information that is not considered to be ‘sensitive’ according to U.S. state or federal regulation.
* <a name="sensitive"/><code>http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#sensitive</code> - Access is granted to all patient information, including that considered to be ‘sensitive’ according to U.S. state or federal regulation.

Systems are not required to support both types of consent, but if using consent, are expected to recognize and use at least one of the two.

`Consent.patient` and `Consent.performer` are captured separately to track who actually provides the consent.  Typically both will be the same, but in some cases, consent might be issued by a relative, an institution or even a provider.

Both the 'performer' and 'recipient' actors for disclosure repeat.  The performer **SHALL** include the target payer for the [$member-match](OperationDefinition-member-match.html) and the recipient **SHALL** include the initiator of the $member-match.  However, additional performers and recipients might be listed, including a 'mutual' consent where initiator and target payer are both listed as performers and recipients, thus authorizing each to share information with the other.

#### Examples
An example of the use of this profile can be seen in the $member-match input parameters [here](Parameters-member-match-in.html) and [here](Parameters-member-match-in-provider.html).

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-coverage-intro.md

In most cases, Da Vinci will use the [US Core Coverage profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-coverage.html) when communicating Coverage.

This profile is intended for use ONLY during the [$member-match](OperationDefinition-member-match.html) operation.  It differs from the US Core profile in that the referenced 'Patient' resource does not need to have an identifier (as when calling $member-match, no identifier will be known).


---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-coverage-notes.md

If the member identifier (conveyed in `Coverage.identifier`) is known, it must be sent as this uniquely identifies a covered individual.  If not, then the `Coverage.subscriberId` can be used together with demographic information found by resolving `Coverage.beneficiary` to identify the member.  (There can be multiple members associated with a single subscriber - e.g. family members of an individual who is covered under a work-based policy.)

Additional notes and guidance around how to map real-world insurance card information into the Coverage resource can be found in the [CARIN Digital Insurance Card IG](https://hl7.org/fhir/us/insurance-card/Physical_Insurance_Card_Data_Elements.html).  As a rule, all elements available **SHOULD** be populated, even if not all might be strictly necessary to identify the member because rules can vary from insurer to insurer about which pieces of information are necessary to uniquely identify a member.


---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-organization-intro.md

In Da Vinci, organization is typically used to represent either a payer or provider organization.  Da Vinci extends to US Core profile to support some additional identifier types and, based on that increased flexibility, to mandate that an identifier must be present.  (In Da Vinci, there is little utility in referencing an organization that cannot be computably identified.)



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-organization-notes.md

<blockquote class="stu-note">
<p>
The Identifier.system here used for Tax Identification Number is not yet officially registered with HL7.  We have adopted the one used by QI-core and a number of implementers.  However, there is a possibility it will change.  Implementers should consider this potential for change and author their systems to accomodate a change if necessary.  (i.e. be prepared to match on more than one system value and potentially export multiple identifier repetitions, each with a different system, if it becomes necessary.)
</p>
</blockquote>

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-patient-coverage-intro.md

This profile is intended exclusively for use as part of the [$member-match](OperationDefinition-member-match.html) operation.  It conveys information necessary to help resolve a particular member in a target payer.  It diverges from US Core in that it does not point to the US Core patient profile.  US Core Patient requires that identifier be present.  However, when invoking $member-match, no patient identifier will be known.  (The whole point is to discover the Patient identifier.)


---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-patient-demographics-intro.md

This profile is intended exclusively for use as part of the [HRex Coverage](StructureDefinition-hrex-coverage.html) profile, which in turn is intended exclusively for use with the [$member-match](OperationDefinition-member-match.html) operation.  This profile diverges from US Core in that it does not require the inclusion of a patient identifier.

The profile is used in two contexts:
* In the initial request to the operation no identifier will be present.  
* In the response to the operation, the payer's "unique member identifier" for the member will be present.  This is an identifier that spans all coverages the payer manages for the patient and can be used to request information about the member independent of their coverage.  (This is **not** the same as a 'member number' which is typically specific to a particular coverage.)

In most places in Da Vinci, the [US Core Patient profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-patient.html) will be used.  (Implementations adhering to the 7.0.0 profile will automatically also be conformant with the 6.1.0 and 3.1.1 versions.)

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-practitioner-intro.md

Da Vinci refines Practitioner in two ways:

* It requires support for Practitioner qualifications, though only as text.  (There is no consistent coding of qualifications in the payer space.)  Qualifications can be important for evaluating the eligibility of ordered or performed services for insurance coverage.
* It adds support for Medicare certification number as an alternate identifier type as not all payer and provider environments are able to use NPIs for all relevant providers.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-practitionerrole-intro.md

Because Da Vinci has refined the US Core organization and practitioner profiles, we also need to refine the PractitionerRole profile - because PractitionerRole binds practitioner and organization together.  The only change is to require the use of the Da Vinci-specific profiles as additional constraints on the US Core ones.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-provenance-intro.md

Provenance is essential when sharing information in the payer space because any given record might have passed through multiple hands before it arrives at a payer.  Provenance provides traceability as to where the data originated and helps in the evaluation of the information as well as rationalizing duplicate data acquired through multiple sources.  Da Vinci makes a couple of improvements to the US Core Provenance profile that will hopefully be migrated into that profile in the future:

* Capturing the time of the creation/update, not just the time the Provenance instance was created
* Ensuring that the Provenance target in fact resolves to a specific resource reference, not allowing only display or an identifier

In addition, in Da Vinci, signatures on Provenances must be retained if present.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-provenance-notes.md

The following guidance applies to the use of Providence across Da Vinci IGs.  IGs can impose additional expectations with respect to the use of Provenance either across their whole use-case or in the context of specific events.

### Searching

There is no expectation for support for querying Provenance except using `_revinclude` using the 'target' parameter (to return Provenance instances associated with a returned resource).

### Aligning Provenance and Resource elements

Provenance should align with information present in the record.  Where a Provenance deals with the creation of an instance, the author, performer and (if present) informer should align with the equivalent elements on the record.  Similarly, `Provenance.occurred` should align with the creation date for the record.

### Populating `Provenance.agent`

The following table lists the various agent codes and what resource types are appropriate.  These recommendations **SHOULD** be followed
------------------------
| transmitter | This could be Patient, RelatedPerson, Practitioner or PractitionerRole or Organization.  A second transmitter could capture the specific Device used |
| enterer     | Patient, RelatedPerson, Practitioner or PractitionerRole |
| performer   | could be anything |
| author      | could be anything |
| verifier    | generally only Practitioner or PractitionerRole |
| legal       | Only Practitioner or PractitionerRole |
| attester    | Patient, RelatedPerson, Practitioner or PractitionerRole |
| informant   | Patient, RelatedPerson, Practitioner or PractitionerRole |
| custodian   | usually Organization, could also be Device, Practitioner or PractitionerRole |
| assembler   | usually a Device, could be Practitioner or PractitionerRole |
------------------------------------------

### Handling agents with multiple roles

In general, the most important role to capture is "author".  If they are the only role present, the presumption is that they are also the enterer, performer, verifier, legal, attester, informant, etc.  Specifying other roles is only necessary if they *differ* from the author.  Not all systems will necessarily track all participants.  Roles other than author only need to be shared if the system captures them and feels they might be relevant to downstream use of the information.

### Populating `onBehalfOf`

`Provenance.agent.onBehalfOf` is only relevant in certain circumstances:

* `onBehalfOf` **SHOULD NOT** be populated if RelatedPerson is acting on behalf of the Patient.  (Because that is the assumption and there is already a link to the Patient on that resource)
* `onBehalfOf` **SHOULD NOT** be populated with an Organization if the agent is Practitioner - use PractitionerRole instead (even if it is a contained PractitionerRole)
* `onBehalfOf` **SHOULD NOT** be populated with an Organization if the agent is PractitionerRole unless PractitionerRole is pointing to an organization and the `onBehalfOf` is different (i.e. Dr. Smith for Clinic A did something on behalf of clinic B)
* It is unusual for `onBehalfOf` to be populated if the agent is Patient or RelatedPerson
* `onBehalfOf` **SHOULD NOT** be populated with an Organization if it is the same as `Device.owner`



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-task-data-request-intro.md

Several Da Vinci guides have a requirement to asynchronously request data that could involve a human collecting, organizing, and/or reviewing data, as described in [Requesting exchange using Task](http://build.fhir.org/exchanging-request.html#task).  This profile shows how Da Vinci uses Task to perform that process, including defining 'standard' codes for the Task and its associated inputs and outputs.

The Task supports two approaches to data sharing:

* One involves leveraging the FHIR 'search' mechanism, but with the ability for humans to intervene to either refine the filter or to review/prune the result set.
* The second involves either specifying a code or text that describes the data to be retrieved

The content resulting from the request might be conveyed by reference or contained within the Task - and can be any sort of FHIR resource at all (and, using DocumentReference or Binary, can include non-FHIR content as well).

When a task is complete but yields no information (empty search results), an empty search-set Bundle will be returned. However, if searching is performed by document code, the result will be a 'failed' status with a statusReason.text indicating that no matching documents existed.

Other Da Vinci IGs can further derive from this profile to further refine the request mechanism and/or to constrain the location or permitted content of the returned data.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-hrex-task-data-request-notes.md

A single profile is defined, although what elements are appropriate will vary depending on the stage of the Task's life cycle.  On initiation, the `status` would be 'requested' and there would not generally be a `businessStatus` or `statusReason` and certainly would not be any output.  As execution progresses, the `Task.status` would be adjusted to reflect acceptance or rejection - and `statusReason` would typically be populated in the latter case.  Once the Task gets underway, `businessStatus` might be filled in to help indicate progress/expected timelines.  Finally, once the data becomes available, the `status` is changed to 'completed' and the outputs are linked.  (In some cases, preliminary outputs might be linked prior to the Task becoming 'completed', though that would be unusual in the Da Vinci situation.)



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/StructureDefinition-HRexWellknownDefinition-intro.md

This logical model defines the allowed content of a JSON file that adheres to the expectations for a .well-known file as defined in the [Endpoint Discovery](endpoint-discovery.html) part of this IG.

---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/SubscriptionTopic-Task-intro.md

<!-- subscriptiontopic-Task-intro.md
intro to inform reader of the Basic view -->

This guide formally defines the HRex Subscription Topic as a [SubscriptionTopic](https://hl7.org/fhir/R5/subscriptiontopic.html) resource defined in FHIR 4B and later versions. Be aware that this resource is not supported by FHIR R4 systems. Subscription Topics in R4 can be defined using a Basic profile resource with extensions.  The [raw xml](SubscriptionTopic-Task.xml) and the [raw json](SubscriptionTopic-Task.json) views for this SubscriptionTopic show the equivalent FHIR R4 Basic profile.

Note that supporting SubscriptionTopic nor the equivalent Basic resource versions described in the R5 Backport Implementation Guides is NOT required by this guide to support subscriptions.
{:.bg-warning}



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Task-document-complete-intro.md

This alternate [HRex Task Data Request](StructureDefinition-hrex-task-data-request.html) profile example is similar to the [completed query](Task-query-complete.html) example.  However, in this case, the output is a reference to the documents.  (Two relevant documents mean two repetitions of the 'output'.)  In addition, this example does not include a `basedOn` element - as no authorization was needed.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Task-query-complete-intro.md

This is the final stage of the [HRex Task Data Request](StructureDefinition-hrex-task-data-request.html) (the next step after the (status example)[Task-query-status.html]).  The status changes to 'complete' and the output is filled in.  In this case, the output is contained within the Task because the requested searchset is not going to be persisted in the source EHR for retrieval by others.  This will be most common for 'query' Tasks.  However, it is not *required* that the searchset Bundle be contained.  See the [document example](Task-document-complete.html) for an example of a non-contained output.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Task-query-initial-intro.md

This is the initial stage of a [HRex Task Data Request](StructureDefinition-hrex-task-data-request.html) seeking execution of a query (with possible human review/vetting prior to delivery of the results).  This example includes a `basedOn` element indicating the order authorizing this request.  This example has both a coded and reference reason.  Tasks can have both, either or neither.  The query appears as an input and specifies the resource to be queried as well as the parameters.  The `for`, `requester`, and `owner` should all be references, never 'contained' resources.

The next (optional) stage after this example is the [status example](Task-query-status.html).



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Task-query-min-intro.md

This example includes the minimum set of the mandatory elements from the [HRex Task Data Request](StructureDefinition-hrex-task-data-request.html) profile.



---

File: repos/HL7_SLASH_davinci-ehrx/input/intro-notes/Task-query-status-intro.md

This is the next (optional) stage for a [HRex Task Data Request](StructureDefinition-hrex-task-data-request.html) after the [initial query](Task-query-initial.html) example.  In this case, the `status` is 'in-progress', however it could also have been 'accepted' or 'rejected'.  (In the latter case, the `statusReason` would need to be set.)  Additional information about the degree of progress and/or the timeline for expected progress is conveyed in `businessStatus`.  There could be multiple updates of the Task at this stage as it passes through various sub-statuses on its way to completion.

The next (final) stage after this example is the [complete example](Task-query-complete.html).



---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/credits.md

### Da Vinci
{% include davinci.md %}

### The Da Vinci HRex project
HRex is a foundational project intended to support shared artifacts and content that are relevant to multiple other Da Vinci IGs.  Work began on the project in 2021 and the initial release of the guide was published in 2022.  Project participants have included major EHR vendors, payers, and provider organizations.  Because HRex is a collection of reuseable artifacts, it is not implemented or tested directly.  Instead, it is tested as part of the other IGs that leverage its content.

Further details about the project, including minutes of meetings can be found on the [project Confluence page](https://confluence.hl7.org/pages/viewpage.action?pageId=40741996).  Meetings to develop the specification content have typically been held in conjunction with the Clinical Data Exchange (CDex) project and HRex minutes can be found on the [CDex Confluence page](https://confluence.hl7.org/pages/viewpage.action?pageId=40738757).


### Credits
This IG was developed under the auspices of the [Clinical Interoperability Council (CIC)](http://www.hl7.org/Special/committees/cic) work group.  Current work group co-chairs are:

* **Bruce Bray** - University of Utah Health Care
* **Laura Heermann Langford** - Graphite Health
* **Russell Leftwich** - InterSystems
* **James McClay** - University of Missouri
* **James Tcheng** - Duke Clinical & Translational Science Institute

Da Vinci project coordination is managed by:

* **Robert Dieterle** - Enablecare
* **Viet Nguyen** - Stratametrics
* **Jocelyn Keegan** - Point of Care Partners
* **Crystal Kallem** - Point of Care Partners

The lead developer for this IG is **Lloyd McKenzie** - Dogwood Health, with assistance from **Rosemary Hoffsted**, also of Dogwood.

Initial development of this IG was performed by **Lisa Nelson** - Max MD, with assistance from **Rick Geimer** - Lantana Consulting

The **MITRE** and **Lantana** teams have provided invaluable assistance with connectathons and reference implementations.

Special thanks to the numerous Da Vinci members who have participated on conference calls and reviews over the last four years, as well as those who participated in the previous ballots and other reviews of this IG.

If you are interested in participating in the HRex project: information about our calls, minutes of past discussions, and other information can be found [here](https://confluence.hl7.org/pages/viewpage.action?pageId=40741996) on our HL7 Confluence page.

---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/downloads.md

### Links

This implementation guide is web-based and is intended to be browsed online.  However, for the convenience of implementers, both this implementation guide, various sub-packages 
of it and some of the source specifications are available for download.  The following links allow you to download various parts of this implementation guide and other referenced 
implementation guides for local use.

Content from this IG:
* This [full IG](full-ig.zip)
* The resource definitions as [JSON](definitions.json.zip) and [XML](definitions.xml.zip) from this IG for programmatic use
* All examples as [JSON](examples.json.zip) and [XML](examples.xml.zip) from this IG for programmatic use
* The [validator package](package.tgz) for use with the [FHIR validator](tools.html)

Key content from the FHIR core specification:
* The full [FHIR R4 core]({{site.data.fhir.path}}fhir-spec.zip) specifications
* [JSON]({{site.data.fhir.path}}fhir.schema.json.zip) and [XML]({{site.data.fhir.path}}fhir-all-xsd.zip) schemas for validation
* [The FHIR validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) and [instructions](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)
* [Other downloads]({{site.data.fhir.path}}downloads.html)

Content from US Core:

* The [3.1.1 validator package]({{site.data.fhir.ver.uscore3}}/package.tgz) for use with the [FHIR validator](tools.html)
* The [6.1.0 validator package]({{site.data.fhir.ver.uscore6}}/package.tgz) for use with the [FHIR validator](tools.html)
* The [7.0.0 validator package]({{site.data.fhir.ver.uscore7}}/package.tgz) for use with the [FHIR validator](tools.html)

{% include cross-version-analysis-inline.xhtml %}


---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/endpoint-discovery.md

This portion of the specification addresses two issues:

1. There are many endpoints that EHRs (and other payers) need to know in order to support the various Da Vinci interoperability specifications.  For example, the location for CDS Hooks services for CRD, the location to call the $questionnaire-package operation for DTR, the location of repositories to query for PDex, etc.

Each of these locations might vary depending on the specific insurance product relevant to the access.  Some endpoints might be managed by the insurer directly, while others could be outsourced.  Different divisions within the same insurer might have responsibility for different products or functions.  Also, who is responsible for a given endpoint could change from time-to-time as functions are outsourced, insourced, or otherwise adjusted.

It is an unrealistic burden on payers and EHRs to try to keep up with all endpoints for all relevant insurers and products.  

2. When transmitting patient coverage, there's a need to identify the payer associated with the coverage.  However, there is no central authority that manages assigning identifiers to payer organizations - or even agreement on what the appropriate scope of such an identier should be.

This section describes process that allows payers and providers to determine - for a specific patient's coverage at a particular time - what the appropriate endpoints and payer identifier to use are.


The first step in the discovery process is to call the X12 270 "Health Care Eligibility Benefit Inquiry" transaction.  EHRs already have this step as an early part of their regular business process, so it does not impose any additional interoperability or configuration workload.

The 271 response allows the PER segment in several places.  The occurrence in the 2000A Information Source Name Loop is used in this process as we require that endpoints for the same patient for the same payer use the same endpoints irrespective of Coverage.  (Payers may route internally if necessary.)  Specifically, when the payer responds to an Eligibility Inquiry indicating that the patient has coverage, the payer **SHALL** include exactly one 2000A loop repetition such that:
* The NM1-01 is populated with PR.
* There is exactly one PER repetition that has a URL communication number that fits the pattern below.  (i.e. in exactly one of the PER04, PER06, or PER08 where the preceding Communication Qualifier Number is set to 'UR'):

    * [base]`/.well-known/davinci-configuration`

The [base] is a server-defined endpoint determined by the payer.
* If a payer wishes, they may generate time-point-specific configuration endpoints by including a random UUID as part of the base URL.  Such time-limited endpoints must remain available for at least one hour after generation.

Regardless of how it is retrieved, the .well-known endpoint **SHALL** be accessible with a simple TLS (not mutual TLS) connection and resolve to a JSON document.  The JSON document will include entries for varying configuration settings.  It may include various information, but is expected to expose entries for the Da Vinci and Carin-related endpoint types that are supported for any of the patient's coverages.  The specific content expectations are documented in [this logical model](StructureDefinition-HRexWellknownDefinition.html) and an example of the content of such a file can be seen [here](Binary-Wellknown.html).  The file definition includes an ability to convey a payer's identifier (the one relevant for the patient's coverage(s)), as well as all endpoints the payer has for that patient's coverage(s).

The bulk of the possible endpoints whose locations can be defined are shown in [this value set](ValueSet-hrex-endpoint-name.html).  In some cases, Da Vinci or other HL7 IGs may need to adopt additional configuration setting prior to the publication of a new official release of this IG.  IGs may be published that reference additional configuration settings provided that those new endpoint location codes have been approved by a Jira ticket and published in the CI-build of the most recent HRex IG.

Because not all systems who might be interested in the .well-known endpoints will typically perform (or be able to perform) eligibility checks, the .well-known file location can be stored in the Coverage resource using the [Wellknown Location extension](StructureDefinition-extension-CoverageDavinciWellknownLocation.html).  From there, it can be exposed to downstream systems (SMART apps, etc.)

Endpoints will generally be stable, but it is at least theoretically possible for an endpoint to change between when a provider performs the initial eligibility check and when they hit that endpoint.  In situations where an endpoint turns out to not be functional, client systems **MAY** choose to re-query the .well-known endpoint and/or to re-run the eligibility check to see if the end point has changed.


---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/fhir.md

This implementation guide uses terminology, notations and design principles that are specific to FHIR.  Before reading this implementation guide, it is important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications.  Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html) (or [Clinical introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html) and additional [IG reading guidance](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html)

* [Base resource]({{site.data.fhir.path}}resource.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard and builds on the [US Core 3.1 (FHIR R4)]({{site.data.fhir.ver.uscore3}}), [US Core 6.1 (FHIR R4)]({{site.data.fhir.ver.uscore6}}), and [US Core 7.0 (FHIR R4)]({{site.data.fhir.ver.uscore7}}) implementation guides.  Implementers therefore need to familiarize themselves with the profiles in that guide as well as with the FHIR resources used within the implementation guide(s) they will be implementing.  The general implementation notes and guidance on the resource pages of these guides will apply to Da Vinci implementations as they would in any other.  A complete list of the FHIR resources in the core specification can be found [here]({{site.data.fhir.path}}resourcelist.html)

The resources profiled or otherwise used in this specification include:

<table class="grid">
  <thead>
    <tr>
      <th>Resource</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="{{site.data.fhir.path}}binary.html">Binary</a></td>
      <td>Used when exposing examples of the .well-known file for <a href="endpoint-discovery.html">payer endpoint discovery</a></td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}bundle.html">Bundle</a></td>
      <td>Used in polling responses and subscription notifications when monitoring <a href="task.html">Tasks</a></td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}codesystem.html">CodeSystem</a></td>
      <td>Used to define additional codes required for various HRex use-cases</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}consent.html">Consent</a></td>
      <td>Used as part of the <a href="OperationDefinition-member-match.html">member match</a> process</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}conceptmap.html">ConceptMap</a></td>
      <td>Provides mappings between codes from value sets for different US Core versions</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}coverage.html">Coverage</a></td>
      <td>Used as part of the <a href="OperationDefinition-member-match.html">member match</a> process</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}operationdefinition.html">OperationDefinition</a></td>
      <td>Used when defining the <a href="OperationDefinition-member-match.html">member match</a> process</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}organization.html">Organization</a></td>
      <td>Used in examples of the US-core version-independent and Da Vinci-specific <a href="StructureDefinition-hrex-organization.html">Organization profile</a></td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}parameters.html">Parameters</a></td>
      <td>Used to convey requests and responses for the <a href="OperationDefinition-member-match.html">member match</a> process</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}practitionerrole.html">PractitionerRole</a></td>
      <td>Used in examples of the US-core version-independent and Da Vinci-specific <a href="StructureDefinition-hrex-practitionerrole.html">PractitionerRole profile</a></td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}provenance.html">Provenance</a></td>
      <td>Used in examples of the US-core version-independent and Da Vinci-specific <a href="StructureDefinition-hrex-provenance.html">Provenance profile</a></td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}searchparameter.html">SearchParameter</a></td>
      <td>Used in defining additional search parameters used in various Da VInci IGs</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}structuredefinition.html">StructureDefinition</a></td>
      <td>Used when defining profiles, logical models, and extensions in this guide</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}task.html">Task</a></td>
      <td>Used when soliciting information, asking for forms to be filled out, etc.</td>
    </tr>
    <tr>
      <td><a href="{{site.data.fhir.path}}valueset.html">ValueSet</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

Implementers should review the general descriptions and usage notes for these resources for additional implementation guidance

---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/history.md

### STU 1.1.0

* [FHIR-48672](https://jira.hl7.org/browse/FHIR-48672) - Added support for US Core 7.0 as well as 6.1
* [FHIR-48414](https://jira.hl7.org/browse/FHIR-48414) - Clarified that EHRs weren't required to move forward US Core 6.1/7.0 adoption to comply with the guide
* [FHIR-48440](https://jira.hl7.org/browse/FHIR-48440) - Added extension to allow conveying davinci wellknown file in Coverage, and added support for payer identifier in file
* [FHIR-46678](https://jira.hl7.org/browse/FHIR-46678) - Added a CDex endpoint to the endpoint discovery list
* [FHIR-47996](https://jira.hl7.org/browse/FHIR-47996) - Removed the details of the SMART app dynamic registration section and pointed to the FAST security guide instead
* [FHIR-48302](https://jira.hl7.org/browse/FHIR-48302) - Dropped the Practitioner profile

A variety of technical correction and non-substantive improvements to wording and artifacts.


### STU 1.1.0-ballot

The following is a list of the substantive changes since the last official release

General:

* [FHIR-46472](https://jira.hl7.org/browse/FHIR-46472) - Updated profiles to comply with both US Core 3.1.1 (USCDI v1) and US Core 6.1.0 (USCDI v2)
* [FHIR-46473](https://jira.hl7.org/browse/FHIR-46473) - Migrated the 'exchanging FHIR' content to the FHIR core specification
* [FHIR-44696](https://jira.hl7.org/browse/FHIR-44696) - Defined a mechanism to support discovery of payer Da Vinci endpoints
* [FHIR-46208](https://jira.hl7.org/browse/FHIR-46208) - Added guidance on how implementers should handle validation in multi-version and multi-profile environments
* [FHIR-37533](https://jira.hl7.org/browse/FHIR-37533) - Defined profiles for use on Reference to allow setting expectations for use of RESTful vs. logical references
* [FHIR-34523](https://jira.hl7.org/browse/FHIR-34523) - Drop expectations for support of UDAP at the HRex level
* [FHIR-34039](https://jira.hl7.org/browse/FHIR-34039) - Added additional guidance around mutual TLS

Member Match:

* [FHIR-44933](https://jira.hl7.org/browse/FHIR-44933) - Corrections where the specification wasn't clear that the patient identifier needs to have a type of UMB and clarified the definition
* [FHIR-42710](https://jira.hl7.org/browse/FHIR-42710) - Made consent optional in $member-match
* [FHIR-42810](https://jira.hl7.org/browse/FHIR-42810) - Extended the member-match operation to support returning an optional FHIR reference to the payer's Patient instance
* [FHIR-38701](https://jira.hl7.org/browse/FHIR-38701) - Ensured member match refers to HRex patient demographics, not US-Core patient
* [FHIR-38691](https://jira.hl7.org/browse/FHIR-38691) - Added guidance on how to manage a match when consent expectations can't be met

Consent:

* [FHIR-42737](https://jira.hl7.org/browse/FHIR-42737) - Tightened policy element to be 1..1 instead of 1..*
* [FHIR-36013](https://jira.hl7.org/browse/FHIR-36013) - Added expectation to capture who gave consent, not just what patient it was for
* [FHIR-35912](https://jira.hl7.org/browse/FHIR-35912) - Ensure consent captures who is authorized to disclose

Other resources:

* [FHIR-40782](https://jira.hl7.org/browse/FHIR-40782) - Relaxed coverage constraints to align with US Core
* [FHIR-37809](https://jira.hl7.org/browse/FHIR-37809) - Dropped ccn identifier expectation from Practitioner and dropped it as mustSupport for Organization

A variety of minor wording clarifications, correction of typos and other non-substantive changes

Also, see the [comparison](comparison-v1.0.0/index.html) between this release and release 1.0.0

### STU 1.0.0

Initial 'official' release

---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/index.md

  ### IntroductionThe [Da Vinci](https://confluence.hl7.org/display/DVP) Health Record Exchange (HRex) implementation guide (IG) is a foundational guide for all other Da Vinci guides.  It defines FHIR profiles, operations and guidance that are relevant to more than one, and sometimes all, Da Vinci use-case IGs.  In the future, it could define additional types of artifacts such as extensions or value sets.  All HRex artifacts are intended to be use-case independent, though they are specifically tied to the HRex scope.  They might be referenced in RESTful exchanges, passed in CDS Hooks, or manipulated by SMART apps.  Because the artifacts defined here are use-case independent, this IG does not include a use-case or patient stories section.  Use-cases can instead be found in the various Da Vinci guides that leverage the artifacts defined here for specific business purposes.As a supporting IG, HRex is expected to continue to evolve as additional shared content needs are identified as part of the Da Vinci work.  Da Vinci use case IGs will derive from this IG and reference specific pages and sections that are relevant to their use-case and mandate the use of the profiles and artifacts defined here, or that are inherited from US Core.  Da Vinci IGs may also refine or further constrain content defined here when the use case requirements are tighter than the general 'shared' requirement.The scope of Da Vinci is US payer and provider data exchange with each other and other covered entities under HIPAA (including their business associates).  It includes data exchange with the patient/member.  The exchanges are typically ones that are 'of interest' in value-based care.  Some of the Da Vinci content may be relevant outside this defined scope (e.g. non-US implementations). However, [requests for change](http://hl7.org/fhir-issues) should be focused on HRex’s official scope.### Content and OrganizationThe main menu in this IG is categorized into several primary topics with several sub-topics:* **Background** provides supporting information relevant for implementers of this IG or Da Vinci guides in general.  These sections may be referenced from other Da Vinci IGs, but do not contain any rules that impact IG conformance.  (Nothing in these sections will ever become 'normative' or define functionality that implementer systems must or must not do.)  These sections *will* provide context to implementers to help them understand other parts of the IG and make better and more efficient decisions with respect to FHIR implementation.  * [Da Vinci Overview](http://hl7.org/about/davinci) provides an overview of the Da Vinci project and provides guidance on how to get involved in the project and where to find the use-case specific IGs.  * [Guiding Principles](davinci-guiding-principles.html) describes key principles that underly all Da Vinci interoperability.  * [FHIR Introduction](fhir.html) highlights the key sections of the FHIR core specification that Da Vinci implementers should be familiar with.  * [Approaches to Exchanging FHIR Data](exchanging.html) provides a detailed overview of all the mechanisms that FHIR supports for exchanging information.  Implementers do not need to read this, but Da Vinci use case IGs may refer to this information.  * [Managing Instance Validation](validation.html) gives general guidance about managing validation of Da Vinci instances across different IGs and different versions of an IG.  * [Participants and Credits](credits.html) provides thanks to key contributors to the creation of this guide.* **Specification** content includes pages that define artifacts or include formal conformance rules that apply to this IG and that may be included by reference in other Da Vinci IGs.  * [Conformance Expectations](conformance.html) describes conformance language used within the spec and expectations around mustSupport and missing data  * [Privacy, Safety, and Security](security.html) provides general expectations to ensure security and privacy of Da Vinci exchanges  * [Task-based Queries](task.html) describes the mechanisms for using Task to ask for information  * [Dynamic Registration for SMART Apps](smart-app-reg.html) documents requirements for cross-registration of SMART on FHIR apps  * [Member Match](OperationDefinition-member-match.html) describes the process to resolve a member as known by the target payer system  * **FHIR Artifacts** includes links to artifacts (profiles, operations, etc.) defined both in this specification as well as in the imported US Core implementation guides.  This index also includes a list of all of the examples - there are at least two examples for every profile, sometimes more to demonstrate the range of possible content supported.  (Examples relevant to a given profile are also linked to from the profile page.)* **Base Specs** includes links to the FHIR core specification as well as the US Core specs that underlie this IG.* **Support** includes various links for support and guidance, as well as download links for this IG and guidance on tools and support for Da Vinci implementers.The main menu at the top of all IG pages will allow you to jump to any of the main pages in the IG.  The breadcrumbs bar (right below the menu bar) will let you navigate 'up' to ancestor pages of whatever page you are looking at.  The [Table of Contents (TOC)](toc.html) will show you all pages in the IG and the [Artifacts list](artifacts.html) will list all of the artifacts (profiles, extensions, operations, value sets, etc.) defined in this specification.  As well, this IG makes heavy use of hyperlinks which will allow navigation to relevant sections of this specification and parent specifications.NOTE: Past versions of this IG included a cross-reference of what HRex and US Core profiles were used in which Da Vinci IGs.  Experience has proven that this list is very difficult to keep current given the release frequency of HRex as compared to other Da Vinci IGs.  We have removed this summary and instead encourage readers to leverage the [FHIR Statistics](https://www.fhir.org/guides/stats2/hl7-profiles-usages-other.html) page.  Search for the canonical of the profile you're interested in seeing the use of, and this index will indicate which artifacts leverage that profile (either pointing to it or deriving from it).### DependenciesAt present, HRex is based on [FHIR R4]({{site.data.fhir.path}}).  In addition, this guide also relies on a number of parent implementation guides:{% include dependency-table-nontech.xhtml %}This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.As seen in the above table, HRex is dependent on the [US Core 3.1 (FHIR R4)]({{site.data.fhir.ver.uscore3}}), [US Core 6.1 (FHIR R4)]({{site.data.fhir.ver.uscore6}}) and [US Core 7.0 (FHIR R4)]({{site.data.fhir.ver.uscore7}}) implementation guides.  The first is supported for those systems limited to [United States Core Data for Interoperability (USCDI) v1](https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi) capabilities, the second is for upcoming regulatory requirements mandating support for [USCDI v3](https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi#uscdi-v3), and the last is to enable support for proposed regulations mandating support for [USCDI v4](https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi#uscdi-v4).  Wherever possible, Da Vinci profiles strive to comply with all three releases, simplifying implementation for those who will need to support varying regulatory expectations over time.In some situations, the payer community requires additional constraints or needs to profile resources that are not yet supported by US Core.  In these cases, this IG does not derive from the US Core profiles, though it does align with them as much as possible.  It is possible that certain HRex profiles and/or descriptive content may migrate to a future release of US Core, and in some cases, to the base FHIR standard.  In certain instances, Da Vinci IGs will also declare conformance with the [QI Core](http://hl7.org/fhir/us/qicore), which supplements US Core with additional profiles and constraints for use in quality measurements.  This IG is not derived from QI core, but HRex profiles will be generally compliant with the QI Core specification.In addition to the direct dependencies listed above, some Da Vinci specifications will make use of content from the following FHIR-related specifications and implementation guides:* [Bulk Data](https://hl7.org/fhir/uv/bulkdata)* [C-CDA on FHIR](http://www.hl7.org/fhir/us/ccda)* [CDS Hooks](https://cds-hooks.org)* [CQL](https://cql.hl7.org)* [FHIRPath](http://hl7.org/fhirpath)* [SMART on FHIR](http://www.hl7.org/fhir/smart-app-launch)### Intellectual Property ConsiderationsThis implementation guide and the underlying FHIR specification are licensed as public domain under the [FHIR license](http://hl7.org/fhir/R4/license.html#license). The license page also describes rules for the use of the FHIR name and logo.{% include ip-statements.xhtml %}</div>

---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/searchparameters.md

Like US-Core, this IG constrains 'standard' HL7 search parameters to explicitly declare conformance expectations.  This IG also defines additional search parameters in cases where the FHIR core specification is missing search parameters needed for Da Vinci use-cases.  All search parameters defined in [us-core 3.1]({{site.data.fhir.ver.uscore3}}/searchparameters.html), [us-core 6.1]({{site.data.fhir.ver.uscore6}}/search-parameters-and-operations.html#search-parameters), or [us-core 7.0]({{site.data.fhir.ver.uscore7}}/search-parameters-and-operations.html#search-parameters) are available in this IG (and IGs that inherit from this one), and the conformance expectations carry forward.  Similarly, this IG does not make assertions about what search parameters must be supported, only what behavior must be supported for a given search parameter when/if it *is* supported.  Other Da Vinci IGs assert support expectations for search parameters defined here and some also refine and/or supplement the conformance expectations listed here.

The following search parameters are defined in this IG:

### Coverage
* [Coverage identifier](SearchParameter-hrex-coverage-identifier.html)
* [Coverage patient](SearchParameter-hrex-coverage-patient.html)
* [Coverage payor](SearchParameter-hrex-coverage-payor.html)
* [Coverage subscriber](SearchParameter-hrex-coverage-subscriber.html)
* [Coverage subscriberId](SearchParameter-hrex-coverage-subscriberId.html) (This one is not in FHIR core, though it has been proposed)

### Provenance
* [Provenance target](SearchParameter-hrex-provenance-target.html)

---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/smart-app-reg.md

Member-authorized access to Payer FHIR APIs for other Payers and Third-Party Applications creates a situation where Payers **MAY** need to cross-register applications with many other payers. This multiplicity of cross-registrations creates a situation where one or more entities providing a verification service for a "Community of Trust" provides significant economies of scale that benefits both organizations registering applications and data holders (such as payers) needing to register those applications.

The FHIR community has recognized the need to solve the challenge of a more streamlined dynamic registration process. A specification has been developed: [Unified Data Access Profiles - Dynamic Client Registration](http://www.udap.org/udap-dynamic-client-registration.html).  The HL7 FHIR at Scale Taskforce (FAST) accelerator has developed additional guidance on the use of this specification, and in particular on managing registration in a trust community that can be found [here](https://build.fhir.org/ig/HL7/fhir-udap-security-ig/registration.html).  This specification **MAY** be followed by Payers wanting to streamline their application registration process.

---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/task.md

Da Vinci makes use of the [Task mechanism](http://build.fhir.org/exchanging-request.html#task) to asynchronously solicit information from a target system in a few implementation guides.  This
implementation guide defines a specific <a href="StructureDefinition-hrex-task-data-request.html">profile</a> for use in HRex-based IGs that use this information.

The following are examples of Tasks, showing different phases of the workflow for a Task soliciting execution of a specific query.

* [Initial request](Task-query-initial.html) - What the Task looks like on initial post
* [Interim status-check](Task-query-status.html) - What a Task might look like if checked on prior to completion
* [Completed query Task](Task-query-complete.html) - What a Task might look like on completion with a query result
* [Completed document Task](Task-document-complete.html) - What a Task might look like on completion with a document result

### Checking Task Status
Once a Task has been created on the data source, the data consumer needs to monitor for the results.  This can be done on two different mechanisms: Polling and Subscription

More specific Da Vinci IGs will set expectations for which mechanism(s) implementations are expected to support.

#### Polling
In this mode, the data consumer occasionally queries the system maintaining the relevant Task(s) to see if there is anything 'new'.  
To poll, the client will perform a [search]({{site.data.fhir.path}}search.html) for Tasks that are filtered to those owned by the searching organization.
The search would also filter to only include those Tasks that had been created or changed since the server last looked.
E.g.

```[base]/Task?owner=Organization/123&_lastupdated=gt2021-05-03T17:23:18.1732-04:00```

The time-stamp specified would be the search result returned from the last search.  

The frequency of polling needs to be often enough to allow for timely response to changes, while not imposing too high a requirement on system performance.
For Da Vinci, systems that use polling **SHALL** check for new/updated information at least once per business day and **SHOULD** check for information at least once per hour during
normal hours of operation.  Systems **SHOULD NOT** query more often than every 15 minutes unless there is an urgent change they are monitoring for.

The response would look like [this](Bundle-task-poll-response.html).

#### Subscription
In the subscription mechanism, instead of the data source system regularly querying the server to see if there are changes to existing Tasks, the client creates a
Subscription instance on the server that indicates that it wants to be notified about changes to Tasks and, in the Subscription, provides filters that describe what
subset of Tasks it is interested in.  The server will then push notifications when there are new or updated Tasks and the data source can then query for the specific Tasks that have changed.

This functionality is based on the [R4 Subscription backport](http://hl7.org/fhir/uv/subscriptions-backport) implementation guide.  This implementation guide 
allows pre-adoption of the FHIR R5 topic-based subscription approach in R4 implementations and is the subscription approach that most U.S. EHR vendors have agreed to 
support.  Implementers of this Da Vinci IG who choose to support Subscription **SHALL** comply with the Subscription Backport IG for the purpose of monitoring Tasks.

For the purposes of this IG, there will be no need for 'topic discovery' as there is only one topic of interest - [Task Subscription Topic](SubscriptionTopic-Task.html), 
though downstream IGs can refine or provide additional guidance around the use of this topic.
While this topic is not unique to Da Vinci, because no standard topics have yet been defined for US Core, this IG will define the needed
topic here.  In the future, these topics could be subsumed into general-purpose topics defined by US Core and/or the FHIR core specification.

Systems supporting subscription **SHALL** support the rest-hook channel mechanism, though they might choose to support other channel approaches.  Servers **SHALL** support both
JSON and XML and clients **SHALL** support at least one of these.  Client and server **SHALL** support id-only, though they can  also support other content approaches.  The
id-only approach means that the id of the Task that was updated will be provided.  The client will then perform a read or a query to
retrieve the specified record(s) specified in the subscription notification. E.g.

```[base]/Task?_id=1234,5678```

If search is used, the client **MAY** use _include=Task:output to retrieve the referenced results as well.  E.g.
```[base]/Task?_id=1234m5678&_include=Task:output```





---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/tools.md

FHIR provides many supports to aid in its implementation.  This page describes some of them.

### Community

The most important resource for implementing FHIR is the FHIR community, and the best place to engage the FHIR community is on [chat.fhir.org](http://chat.fhir.org).  That website is a multi-threaded discussion forum covering a wide range of implementer topics.  There are numerous streams specific to various Da Vinci projects, as well as streams on technologies and specifications such as Bulk Data, CDS Hooks, etc.  A search in the appropriate stream will often find an answer to your question and, if not, post a new question and you will likely get a speedy answer.

### Reference implementations

FHIR has been implemented in a variety of languages.  For most of these languages, free open-source reference implementations are available.  This standard software handles parsing and serializing all the formats, exposing FHIR instances as language-friendly object representations, handles making RESTful calls, and otherwise dealing with the low-level implementation of the standard.  By using reference implementations, implementers can focus on business logic and other application-specific software, relying on well-tested shared libraries to handle the FHIR-specific behavior.

A list of FHIR reference implementations can be found [here]({{site.data.fhir.path}}downloads.html#refimpl).

### Validator

One of the benefits of using FHIR is that the rules that define how instances must look that are rendered in the specification are expressed in computable form - which means that software can evaluate instances to verify whether they comply with profiles defined in a published implementation guide.  This software can do more than typical XML and JSON schema validation - they can check complex invariants, verify terminology, resolve references, and check most of the rules documented in the specification.  As a result, human review and testing can be limited to those few things that the validator cannot test.

The current version of the FHIR Validator can be found [here](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar).  (It changes regularly to fix bugs and add enhancements, so plan to update regularly.)

Guidance on using it is found [here](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator).



---

File: repos/HL7_SLASH_davinci-ehrx/input/pagecontent/validation.md

FHIR's APIs are designed in a manner somewhat different from the manner payers are typically used to having APIs function.  Specifically, the default behavior in FHIR is to NOT declare in instances either the version of FHIR in use, nor the profiles (or profile versions) with which the instance is asserting conformance.  This section explains the rationale for this design approach and provides guidance on how implementers should function in an environment where instances don't typically declare what they conform with.

### FHIR Version
The long-term objective of FHIR is for implementers to be able to consume instances irrespective of what version of FHIR the instance happened to be constructed against.  Once a resource is normative, breaking changes will no longer be possible and new modifier elements will not be able to be introduced.  As a result, it will be safe for implementations to merely ignore any data elements they were not expecting.

This approach mirrors how other industry specifications such as DICOM function and eliminates an issue the community has often found with v2 interfaces where, irrespective of the different versions of HL7 v2 being interoperable, because the version appears in instances, there are often exorbitant costs with upgrading interfaces to declare conformance with a new version - even if the only practical change is the version declaration.

Notwithstanding these considerations, most of the resources in use by Da Vinci are not yet normative, meaning that breaking changes are still possible and determination of the version an instance is constructed with is still necessary.  The FHIR core spec [provides]({{site.data.fhir.path}}versioning.html) several approaches for determining the version of an instance.  For almost all Da Vinci implementations, the approach that will be used is looking at the ``CapabilityStatement.fhirVersion`` of the server being communicated with - and if the server supports multiple versions, by asserting the version in the Content-Type and Accept headers of the RESTful API calls.

While Da Vinci interactions cannot yet be in a FHIR version-agnostic space, when using normative resources such as Patient and Observation, implementers should begin implementing (and testing) approaches that allow them to safely tolerate and ignore new elements that might appear in future versions to ensure optimal interoperability.

### Profile Version
FHIR allows all resources to declare the profile(s) they comply with by populating the [meta.profile]({{site.data.fhir.path}}resource.html#Meta) element on the resource.  Because this element uses the [canonical]({{site.data.fhir.path}}references.html#canonical) data type, it is also possible to refer to specific versions of profiles and thus be very precise about exactly what a particular instance is believed to comply with.

However, guidance from the HL7 FHIR Management Group (FMG) is implementation guides should typically NOT require that instances explicitly declare their profiles or their versions.  That doesn't mean that profile declarations won't necessarily appear on instances, only that implementers shouldn't expect to necessarily see the ones they care about.

The reason for this is that FHIR interfaces - particularly RESTful interfaces - are intended to be purpose-agnostic.  When a server exposes a Patient resource, they are exposing that resource to all possible systems who are interested in that data for any possible purpose they might want that data - including purposes that had not been conceived at the time the interface was developed.  Clients will need to deal with servers that restrict access to resource instances and/or [redact]({{site.data.fhir.path}}valueset-security-labels.html#http---terminology.hl7.org-CodeSystem-v3-ObservationValue-REDACTED) data from those instances to adhere to the server's data access policies.  However, the data exposed generally does not change based on what the receiving system intends to use the data for.  It's up to the client system to use the data appropriately for whatever purpose is needed.

This also means that exposed instances will typically strive to meet the requirements for all potential consumers and will frequently contain elements, repetitions, and extensions that might not be of interest to all consumers.  Again, the expectation is for clients to extract the data they care about from the instance and ignore the rest.

This also means that there will be many profiles (and many versions of those profiles) the instance will comply with - quite possibly including profiles the author of the system had no awareness of at the time the interface was built.  Requiring declaration of all such profiles would be a maintenance nightmare and would impose significant costs on the server.

### Validation strategy
It is up to receivers how much validation they choose to perform on inbound instances.  They are responsible for ensuring consumed data is 'safe' to use for their intended purposes and they are required to emit data that is conformant even if they choose to consume data that might not be fully conformant.

Because Da Vinci instances will not declare outright what profiles and versions they are believed to be conformant against, it is up to consuming systems to determine for themselves whether the data meets their requirements.  There are two approaches to doing this:

#### Profile-based validation
In this approach, inbound instances are checked against FHIR profiles to determine if they meet requirements.  If a system only supports a single version of a single profile, the process is easy - validate all inbound data against that one profile and reject the data if it fails validation.  However, in many cases there could be multiple potential applicable profiles and/or multiple supported versions.  In this case, the instance should be checked against the potential profiles and potential versions.  For versions, typically the instance would first be checked against the newest version, then against consecutively older versions.

Full profile validation can be expensive, so often it can be more efficient to just check key differentiating elements - elements whose presence or value will allow the system to quickly discriminate whether an instance could possibly comply with a profile or version, thus limiting the set of profiles the instance needs to be fully validated against.

#### Business-rule validation
In this approach, the system doesn't worry about the FHIR profiles and instead simply checks whether the data elements it needs for its business purpose are present and have values it considers valid.  (It must always check for unrecognized modifier elements.)  Provided the needed data is present, it processes the instance irrespective of validity against any specific profile version.


---

