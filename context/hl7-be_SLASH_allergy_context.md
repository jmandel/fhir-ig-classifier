File: repos/hl7-be_SLASH_allergy/input/fsh/extensions/BeExtAllergyType.fsh

Extension: BeExtAllergyType
Id: be-ext-allergy-type
Title: "BeExtAllergyType"
Description: "extension to be replaced by http://hl7.org/fhir/5.0/StructureDefinition/extension-AllergyIntolerance.type. If possible, the semantic contents of this field SHALL be identical to AllergyIntolerance.type. If not possible AllergyIntolerance SHALL be null."
* value[x] only CodeableConcept
* valueCodeableConcept MS
* valueCodeableConcept from BeVSAllergyIntoleranceType (extensible)
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^context.type = #element
* ^context.expression = "AllergyIntolerance"

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/allergyintolerance1.fsh

Instance: allergyintolerance1
InstanceOf: BeAllergyIntolerance
Usage: #example
* extension[type].valueCodeableConcept = $sct#609328004
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* clinicalStatus = $allergyintolerance-clinical#active "Active"
* verificationStatus = $allergyintolerance-verification#unconfirmed
* category = #food
* criticality = #high
* code = $sct#762952008 "Peanut (substance)"
* code.text = "Allergic to peanut"
* patient = Reference(Patient/example)
* onsetDateTime = "2004"
* recordedDate = "2014-10-09T14:58:00+11:00"
* recorder = Reference(Practitioner/practitioner)
* asserter = Reference(Patient/example)
* lastOccurrence = "2012-06"
* note.text = "Some extra information can be given here."
* reaction.manifestation = $sct#39579001 "Anaphylactic reaction"
* reaction.onset = "2012-06-12"
* reaction.severity = #severe

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/allergyintolerance2.fsh

Instance: allergyintolerance2
InstanceOf: BeAllergyIntolerance
Usage: #example
* extension[type].valueCodeableConcept = $sct#609328004
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* clinicalStatus = $allergyintolerance-clinical#active "Active"
* verificationStatus = $allergyintolerance-verification#confirmed
//* type = #allergy
* category = #environment
* criticality = #high
* code = $sct#256259004 "Pollen"
* code.text = "Allergic to pollen"
* patient = Reference(Patient/example)
* onsetDateTime = "2004"
* recordedDate = "2014-10-09T14:58:00+11:00"
* recorder = Reference(Practitioner/practitioner)
* asserter = Reference(Patient/example)
* lastOccurrence = "2012-06"
* note.text = "Some extra information can be given here."
* reaction[0].substance = $sct#256262001 "Silver Birch pollen"
* reaction[=].manifestation = $sct#49727002 "Cough"
* reaction[=].onset = "2012-06-12"
* reaction[=].severity = #severe
* reaction[+].substance = $sct#710732007 "Douglas fir pollen"
* reaction[=].manifestation = $sct#49727002 "Cough"
* reaction[=].onset = "2012-06-12"
* reaction[=].severity = #mild

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/allergyintolerance3.fsh

Instance: allergyintolerance3
InstanceOf: BeAllergyIntolerance
Usage: #example
* extension[type].valueCodeableConcept = $sct#609328004
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* clinicalStatus = $allergyintolerance-clinical#active "Active"
* verificationStatus = $allergyintolerance-verification#confirmed
//* type = #allergy
* category = #environment
* criticality = #high
* code = $sct#256259004 "Pollen"
* code.text = "Allergic to pollen"
* patient = Reference(Patient/example)
* onsetDateTime = "2004"
* recordedDate = "2014-10-09T14:58:00+11:00"
* recorder = Reference(Practitioner/practitioner)
* asserter = Reference(RelatedPerson/relatedperson)
* lastOccurrence = "2012-06"
* note.text = "Some extra information can be given here."
* reaction[0].substance = $sct#256262001 "Silver Birch pollen"
* reaction[=].manifestation = $sct#49727002 "Cough"
* reaction[=].onset = "2012-06-12"
* reaction[=].severity = #severe
* reaction[+].substance = $sct#710732007 "Douglas fir pollen"
* reaction[=].manifestation = $sct#49727002 "Cough"
* reaction[=].onset = "2012-06-12"
* reaction[=].severity = #mild

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/be-causativeagent.fsh

ValueSet: BeCausativeAgent
Id: be-causativeagent
Title: "BeCausativeAgent"
Description: "Causative Agents for Allergy (non medication)"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^url = "https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-causativeagent"
* ^version = "1.0.0"
* ^experimental = false
* ^status = #active
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (SNOMED International), and distributed by agreement between SNOMED International and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^compose.include[+].version = "http://snomed.info/sct/11000172109"
* ^compose.include[=].system = "http://snomed.info/sct"
* ^compose.include[=].filter[0].property = #"concept"
* ^compose.include[=].filter[=].op = #"in"
* ^compose.include[=].filter[=].value = "50851000172106"
* ^compose.include[+].version = "http://snomed.info/sct/11000172109"
* ^compose.include[=].system = "http://snomed.info/sct"
* ^compose.include[=].filter[0].property = #"concept"
* ^compose.include[=].filter[=].op = #"in"
* ^compose.include[=].filter[=].value = "50841000172109"  


---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/be-exposureroute.fsh

Instance: be-exposureroute
InstanceOf: ValueSet
Usage: #definition
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* url = "https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-exposureroute"
* version = "1.0.0"
* name = "BeExposureRoute"
* title = "BeExposureRoute"
* experimental = false
* status = #active
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.ehealth.fgov.be/standards/kmehr/en"
* description = "Codes to illustrate differentiating types of exposure route. This valueset supports the Belgian federal FHIR profiling effort."
* compose.include.system = "http://snomed.info/sct"
* compose.include.concept[0].code = #447694001
* compose.include.concept[=].designation.language = #en
* compose.include.concept[=].designation.value = "Respiratory tract route"
* compose.include.concept[+].code = #6064005
* compose.include.concept[=].designation.language = #en
* compose.include.concept[=].designation.value = "Topical route"
* compose.include.concept[+].code = #26643006
* compose.include.concept[=].designation.language = #en
* compose.include.concept[=].designation.value = "Oral route"

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/be-noallergy.fsh

Instance: be-noallergy
InstanceOf: ValueSet
Usage: #definition
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* url = "https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-noallergy"
* version = "1.0.0"
* name = "BeNoAllergy"
* title = "BeNoAllergy"
* experimental = false
* status = #active
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.ehealth.fgov.be/standards/kmehr/en"
* description = "Codes as communicated by the FOD Terminology Center differentiating types of no allergies. This valueset supports the Belgian federal FHIR profiling effort."
* compose.include.system = "http://snomed.info/sct"
* compose.include.concept[0].code = #716186003
* compose.include.concept[=].display = "No known allergy (situation)"
* compose.include.concept[=].designation[0].use = $sct#900000000000003001 "Fully specified name"
* compose.include.concept[=].designation[=].value = "No known allergy (situation)"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "No known allergy"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "geen gekende allergie"
* compose.include.concept[=].designation[+].language = #fr-BE
* compose.include.concept[=].designation[=].value = "pas d'allergie connue"


---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/be-ns-allergy.fsh

Instance: be-ns-allergy
InstanceOf: NamingSystem
Title: "BeNSAllergy"
Description: "Unique Identifier for Allergies in the Belgian Health Landscape"
Usage: #definition
* name = "BeNSAllergy"
* status = #active
* kind = #identifier
* jurisdiction = $jurisdiction#BE "Belgium"
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/fhir/allergy/NamingSystem/be-ns-allergy"
* uniqueId.preferred = true
* date = 2022-06-28

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/be-riskmanifestation.fsh

Instance: be-riskmanifestation
InstanceOf: ValueSet
Usage: #definition
* url = "https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-riskmanifestation"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* extension.valueInteger = 1
* version = "1.0.0"
* name = "BeRiskManifestation"
* title = "BeRiskManifestation"
* experimental = false
* status = #active
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.ehealth.fgov.be/standards/kmehr/en"
* description = "Codes as communicated by NIHDI and the FPS Terminology Center differentiating types of risk manifestation. This valueset supports the Belgian federal FHIR profiling effort."
* compose.include.system = "http://snomed.info/sct"
* compose.include.concept[0].code = #39579001
* compose.include.concept[=].display = "Anaphylaxis"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Anaphylaxie"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Anafylaxie"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Anaphylaxis"
* compose.include.concept[+].code = #735173007
* compose.include.concept[=].display = "Anaphylactic shock"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Choc anaphylactique"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Anafylactische shock"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Anaphylactic shock"
* compose.include.concept[+].code = #41291007
* compose.include.concept[=].display = "Angio-oedema"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Angiœdème / œdème de Quincke"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Angio-oedeem"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Angio-oedema"
* compose.include.concept[+].code = #410430005
* compose.include.concept[=].display = "Cardiorespiratory arrest"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Arrêt cardiorespiratoire"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Cardiorespiratoire stilstand"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Cardiorespiratory arrest"
* compose.include.concept[+].code = #698247007
* compose.include.concept[=].display = "Cardiac arrhythmia"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Arythmie cardiaque"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Hartritmestoornis / Aritmie"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Cardiac arrhythmia"
* compose.include.concept[+].code = #195967001
* compose.include.concept[=].display = "Asthma"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Asthme"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Astma"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Asthma"
* compose.include.concept[+].code = #4386001
* compose.include.concept[=].display = "Bronchospasm"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Bronchospasme"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Bronchospasme"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Bronchospasm"
* compose.include.concept[+].code = #9826008
* compose.include.concept[=].display = "Conjunctivitis"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Conjonctivite"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Conjunctivitis"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Conjunctivitis"
* compose.include.concept[+].code = #91175000
* compose.include.concept[=].display = "Seizure"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Convulsion"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Convulsie / Stuip"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Seizure"
* compose.include.concept[+].code = #40275004
* compose.include.concept[=].display = "Contact dermatitis"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Dermatite de contact"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Contactdermatitis"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Contact dermatitis"
* compose.include.concept[+].code = #62315008
* compose.include.concept[=].display = "Diarrhoea"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Diarrhée"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Diarree"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Diarrhoea"
* compose.include.concept[+].code = #267036007
* compose.include.concept[=].display = "Dyspnea"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Dyspnée"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Kortademigheid / Dyspneu"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Dyspnea"
* compose.include.concept[+].code = #43116000
* compose.include.concept[=].display = "Eczema"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Eczéma"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Eczeem"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Eczema"
* compose.include.concept[+].code = #271759003
* compose.include.concept[=].display = "Bullous eruption"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Eruption bulleuse"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Bulleuse huideruptie"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Bullous eruption"
* compose.include.concept[+].code = #247472004
* compose.include.concept[=].display = "Weal"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Éruption urticaire"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Urticaire rash"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Weal"
* compose.include.concept[+].code = #271807003
* compose.include.concept[=].display = "Rash / Eruption"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Éruption cutanée"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Exantheem / huideruptie"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Rash / Eruption"
* compose.include.concept[+].code = #271757001
* compose.include.concept[=].display = "Papular eruption"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Eruption papuleuse"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Papuleuze eruptie"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Papular eruption"
* compose.include.concept[+].code = #297942002
* compose.include.concept[=].display = "Drug-induced erythema multiforme"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Érythème polymorphe d'origine médicamenteuse"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Erythema multiforme door geneesmiddel"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Drug-induced erythema multiforme"
* compose.include.concept[+].code = #76067001
* compose.include.concept[=].display = "Sneezing"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Eternuement"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Niezen"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Sneezing"
* compose.include.concept[+].code = #386661006
* compose.include.concept[=].display = "Fever"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Fièvre"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Koorts"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Fever"
* compose.include.concept[+].code = #45007003
* compose.include.concept[=].display = "Low blood pressure  / hypotension"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Hypotension"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Hypotensie"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Low blood pressure  / hypotension"
* compose.include.concept[+].code = #422587007
* compose.include.concept[=].display = "Nausea"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Nausée"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Misselijkheid"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Nausea"
* compose.include.concept[+].code = #768962006
* compose.include.concept[=].display = "TEN - toxic epidermal necrolysis / lyell syndrome"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Syndrome de Lyell"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Syndroom van Lyell"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "TEN - toxic epidermal necrolysis / lyell syndrome"
* compose.include.concept[+].code = #51599000
* compose.include.concept[=].display = "Oedema of larynx"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Œdème du larynx"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Oedeem van larynx"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Oedema of larynx"
* compose.include.concept[+].code = #23924001
* compose.include.concept[=].display = "Tight chest"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Oppression thoracique"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Drukkend gevoel op de borst"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Tight chest"
* compose.include.concept[+].code = #418363000
* compose.include.concept[=].display = "Itching of skin"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Prurit de la peau"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Jeuk van huid"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Itching of skin"
* compose.include.concept[+].code = #70076002
* compose.include.concept[=].display = "Rhinitis"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Rhinite"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Rinitis"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Rhinitis"
* compose.include.concept[+].code = #162290004
* compose.include.concept[=].display = "Dry eyes"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Sécheresse oculaire"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Droge ogen"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Dry eyes"
* compose.include.concept[+].code = #73442001
* compose.include.concept[=].display = "Stevens-Johnson syndrome"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Syndrome de Stevens-Johnson"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Syndroom van Stevens-Johnson"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Stevens-Johnson syndrome"
* compose.include.concept[+].code = #49727002
* compose.include.concept[=].display = "Cough"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Toux"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Bevindingen over hoesten"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Cough"
* compose.include.concept[+].code = #126485001
* compose.include.concept[=].display = "Urticaria"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Urticaire"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Urticaria"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Urticaria"
* compose.include.concept[+].code = #31996006
* compose.include.concept[=].display = "Vasculitis"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Vascularite"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Vasculitis"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Vasculitis"
* compose.include.concept[+].code = #1985008
* compose.include.concept[=].display = "Vomitus"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Vomissement"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Braaksel"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Vomitus"
* compose.include.concept[+].code = #404684003
* compose.include.concept[=].display = "Clinical Finding"
* compose.include.concept[=].designation[0].language = #fr-BE
* compose.include.concept[=].designation[=].value = "Constatation Clinique"
* compose.include.concept[=].designation[+].language = #nl-BE
* compose.include.concept[=].designation[=].value = "Klinische bevinding"
* compose.include.concept[=].designation[+].language = #en
* compose.include.concept[=].designation[=].value = "Clinical Finding"

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/patient_example.fsh

Instance: example
InstanceOf: BePatient
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
* identifier[0].use = #official
* identifier[=].type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier[=].value = "79121137740"
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
* generalPractitioner = Reference(Practitioner/practitioner)

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/practitioner_example.fsh

Instance: practitioner
InstanceOf: BePractitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* identifier[0].use = #official
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier[=].value = "79121137740"
* identifier[+].use = #official
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier[=].value = "18749704477"
* name.use = #official
* name.family = "Pulaski"
* name.given = "Katherine"
* name.suffix = "MD"
* telecom[0].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #email
* telecom[=].value = "katherine.pulaski@enterprisehospital.be"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work
* address.use = #home
* address.text = "Jupiterlaan 5, 1853 Grimbergen"
* address.line = "Jupiterlaan 5"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Jupiterlaan"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "5"
* address.city = "Grimbergen"
* address.postalCode = "1853"
* address.country = "BE"
* gender = #female
* birthDate = "1979-12-11"

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/relatedperson.fsh

Instance: relatedperson
InstanceOf: RelatedPerson
* patient = Reference(Patient/example)
* relationship = $sct#444301002

---

File: repos/hl7-be_SLASH_allergy/input/fsh/instances/terminology-expansion.fsh

Instance: terminology-expansion
InstanceOf: Parameters
Usage: #example
* parameter[+].name = "includeDesignations"
* parameter[=].valueBoolean = true


---

File: repos/hl7-be_SLASH_allergy/input/fsh/logicals/BeModelAllergyIntolerance.fsh

Logical: BeModelAllergyIntolerance
Id: be-model-allergyintolerance
Parent: Element
Title: "Allergy Intolerance Logical Model"
Description:    "Allergy / Intolerance information model"

* patient 1..1 Reference "The person that has the allergy" "The person that has the allergy"
* code 1..1 CodeableConcept "The substance that the person is allergic to" "The substance - from a lst of substances - that the person is allergic to. It is possible to use free text but for the products indicated, a code must be used"
* code from https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-allergyintolerancecode (extensible)
* category 0..* code "The category of the risk (food, medication, environment, biological,...). This information will not be encoded by the Recorder but can automatically be added using the SNOMED-CT code from causative agent" "The category of the risk (food, medication, environment, biological,...). This information will not be encoded by the Recorder but can automatically be added using the SNOMED-CT code from causative agent"
* type 0..1 code "The Type - whether it is an allergy or intolerance" "the type of risk (allergy, intolerance...). When it is not possible to distinguish between a real allergy, a non-allergic hypersensitivity or an intolerance you can use the 'Intolerance' type, but code the VerificationStatus as 'Unconfirmed'"
* type from BeVSAllergyIntoleranceType
* status 0..1 BackboneElement "The status of the allergy" "The status of the allergy"
  * clinicalStatus 1..1 CodeableConcept "The status of the allergy - if it is active or resolved" "The status of the allergy - if it is active or resolved"
  * clinicalStatus from http://hl7.org/fhir/ValueSet/allergyintolerance-clinical
  * verificationStatus 1..1 CodeableConcept "The verification status of the allergy - if it is confirmed or suspected or refuted" "The verification status of the allergy - if it is confirmed or suspected or refuted"
  * verificationStatus from	http://hl7.org/fhir/ValueSet/allergyintolerance-verification

* recordedDate 1..1 dateTime "when the allergy/intolerance was recorded"
* recorder 1..1 Reference "Who recorded the allergy" 
* asserter 0..1 Reference "Who asserted the allergy" "Is the person at the source of the information (eg the patient, the general practitioner, a family member, the healthcare professional who registers the information himself, ...). He is represented as much as possible by a unique identification number, namely the national register number (INSZ) or the BIS number. However, when it comes to a parent or family member, only the role (e.g. father, mother, neighbor, caregiver, friend, etc.) is coded to meet the requirements of the GDPR."
* note 0..1 string "Additional text note about the allergy or intolerance" "Additional text note about the allergy or intolerance"
* reactions 0..* BackboneElement "known past reactions to the allergen" "known past reactions to the allergen"
  * manifestation 1..1 CodeableConcept "How the reaction manifested itself"  "How the reaction manifested itself, e.g. rash, breathing difficulty..."
//  * certitude 0..1 CodeableConcept "How certain we are that the cause of the reaction was the allergen indicated" "How certain we are that the cause of the reaction was the allergen indicated"
//  * exposure 0..1 CodeableConcept "The exposure route to the substance" "The exposure route to the substance"
//  * exposure from https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-exposureroute
  * onset 0..1 dateTime "Manifestation date" "For each manifestation it is possible to specify an actual date or approximate date (age, period, interval, ...) of each suspected manifestation of the risk"
  * note 0..1 string "Additional text note about the allergic reaction" "Additional text note about the allergic reaction"


---

File: repos/hl7-be_SLASH_allergy/input/fsh/profiles/BeAllergyIntolerance.fsh

Profile: BeAllergyIntolerance
Parent: AllergyIntolerance
Id: be-allergyintolerance
Description: "Belgian federal profile for an allergy and/or an intolerance. Initially based on the functional description of the NIHDI."
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^version = "1.0.0"
* ^status = #active
* extension contains 
    BeExtAllergyType named type 0..1 MS
* clinicalStatus MS
* clinicalStatus ^definition = "The clinical status of the allergy or intolerance.\r\n\r\nWhen available, a provider SHOULD include it. When given, a consumer SHALL record this in its consuming system.\r\n\r\nUse 'resolved' only in case of pediatric allergies, in case of complete recovery, use 'inactive' in case of longlasting tolerance after a desensitisation treatment"
* verificationStatus MS
* verificationStatus ^definition = "Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).\r\n\r\nWhen available, a provider SHOULD include it. When given, a consumer SHALL record this in its consuming system."
* type 0..0
//* type ^definition = "Identification of the underlying physiological mechanism for the reaction risk.\r\n\r\nWhen available, a provider SHOULD include it. When given, a consumer SHALL record this in its consuming system."
* category MS
* category ^definition = "Category of the identified substance.\r\n\r\nWhen available, a provider SHOULD include it in the istance. When given, a consumer SHALL record this in its consuming system."
* code 1.. MS
* code from BeAllergyIntoleranceCode (extensible)
* code ^definition = "Code for an allergy or intolerance statement.  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., \"Latex\"), an allergy or intolerance condition (e.g., \"Latex allergy\"), or a general or categorical negated statement (e.g.,  \"No known allergy\").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.\r\n\r\nA provider SHALL include it in the instance and a consumer SHALL record this in its consuming system.  Medication related allergies or intolerances will be registered using the CNK, ATC or CTI-extended namingsystem."
* code ^binding.description = "Causative agent codes as defined by NIHDI"
* code ^comment = "Code for an allergy or intolerance statement.  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., \"Latex\"), an allergy or intolerance condition (e.g., \"Latex allergy\"), or a general or categorical negated statement (e.g.,  \"No known allergy\").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.\r\n\r\nA provider SHALL include it in the instance and a consumer SHALL record this in its consuming system.  Medication related allergies or intolerances will be registered using the CNK, ATC or CTI-extended namingsystem."
* code ^short = "Use ATC, CNK or CTI-extended in case of medication allergy"
* patient only Reference(BePatient)
* patient MS
* patient ^definition = "The patient who has the allergy or intolerance.\r\n\r\nA provider SHALL include it in the istance and a consumer SHALL record this in its consuming system."
* recordedDate 1..1 MS
* recordedDate ^definition = "The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.\r\n\r\nA provider SHALL include it in the istance and a consumer SHALL record this in its consuming system."
* recorder 1..1 MS
* recorder only Reference(BePractitioner or BePractitionerRole or BePatient)
* recorder ^definition = "Individual who takes responsibility for the content of the record. BePatient is added to allow a patient to record his/her own allergies. Organisations can be a recorder, using a PractitionerRole, but the you SHALL add a BePractioner who is responsable for the organisation.\r\n\r\nA provider SHALL include it in the instance and a consumer SHALL record this in its consuming system."
* recorder ^comment = "References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository.\r\n\r\nSpecial remarks for KMEHR users:\r\nThis is the 'author' concept in a KMEHR message as the FHIR recorder is the party taking responsibility."
* asserter MS
* asserter ^definition = "The source of the information about the allergy that is recorded.\r\n\r\nWhen available, a provider SHOULD include it in the instance. When given, a consumer SHALL record this in its consuming system."
* asserter ^comment = "The recorder takes responsibility for the content, but can reference the source from where they got it.\r\n\r\nSpecial remarks for KMEHR users:\r\nAs the FHIR asserter is not the party taking responsibility, this is not equal to the 'author' concept in KMEHR."
* note MS
* note ^comment = "For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.\r\n\r\nWhen available, a provider SHOULD include it. When given, a consumer SHALL record this in its consuming system."
* reaction MS
* reaction ^definition = "Details about each adverse reaction event linked to exposure to the identified substance.\r\n\r\nWhen available, a provider SHOULD include it in the istance. When given, a consumer SHALL record this in its consuming system."
* reaction.substance ^mustSupport = false
* reaction.manifestation 1..1 MS
* reaction.manifestation from $be-riskmanifestation (extensible)
* reaction.manifestation ^definition = "Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.\r\n\r\nWhen available, a provider SHOULD include it. When given, a consumer SHALL record this in its consuming system. If needed codes can be used outside the given valueset, SNOMED-CT is preferred."
* reaction.onset MS
* reaction.exposureRoute from $be-exposureroute (extensible)
* reaction.exposureRoute ^definition = "Identification of the route by which the subject was exposed to the substance.  If needed codes can be used outside the given valueset, SNOMED-CT is preferred."
* reaction.note ^definition = "Additional text about the adverse reaction event not captured in other fields.\r\n\r\nA note on this level SHOULD be avoided when not absolutely necessary. Preferably use the .note one level higher."
* reaction.note ^mustSupport = false
* identifier MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier contains allergy 0..1
* identifier[allergy] ^short = "Reference ID of the allergy"
* identifier[allergy].system 1..
* identifier[allergy].system = "https://www.ehealth.fgov.be/standards/fhir/allergy/NamingSystem/be-ns-allergy" (exactly)
* identifier[allergy].value 1..
/*
* obeys be-inv-asserter-person-rel-type

Invariant: be-inv-asserter-person-rel-type
Description: "Checks that the person relationship type of the RelatedPerson in asserter is from BeVSPatientRelationshipType"
Expression: "asserter.empty() or (asserter.resolve() is RelatedPerson implies asserter.resolve().relationship.memberOf('https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-vs-patient-relationship-type'))"
Severity: #warning
*/

Invariant: be-inv-type-verification-status
Description: "Checks that if the type is empty, the verificationStatus is unconfirmed"
Expression: "type.exists().not() implies verificationStatus.coding.code='unconfirmed'"
Severity: #error


---

File: repos/hl7-be_SLASH_allergy/input/fsh/valuesets/BeAllergyIntoleranceCode.fsh

ValueSet: BeAllergyIntoleranceCode
Id: be-allergyintolerancecode
Title: "BeAllergyIntoleranceCode"
Description: "Allergy / intolerance codes as communicated by NIHDI and the FOD Terminology Center. This valueset supports the Belgian federal FHIR profiling effort."
* ^version = "1.0.0"
* ^status = #active
* ^publisher = "eHealth Platform"
* ^contact.name = "eHealth Platform"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "https://www.ehealth.fgov.be/standards/kmehr/en"
* ^experimental = false
* include codes from valueset $be-causativeagent
* include codes from valueset $be-noallergy

---

File: repos/hl7-be_SLASH_allergy/input/fsh/valuesets/BeAllergyIntoleranceType.fsh

ValueSet: BeVSAllergyIntoleranceType
Title: "BeVSAllergyIntoleranceType"
Id: be-vs-allergyintolerance-type
Description: "Codes as communicated by NIHDI and the FOD Terminology Center differentiating types of allergy intolerance."
* ^experimental = false
* ^compose.include.system = "http://snomed.info/sct"
* ^compose.include.version = "http://snomed.info/sct/11000172109"
* ^compose.include.concept[+].code = #609328004
* ^compose.include.concept[+].code = #609396006
* ^compose.include.concept[+].code = #782197009
* ^compose.include.concept[+].code = #609433001

---

File: repos/hl7-be_SLASH_allergy/input/fsh/aliases.fsh

Alias: $be-causativeagent = https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-causativeagent
Alias: $be-noallergy = https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-noallergy
Alias: $sct = http://snomed.info/sct
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $allergyintolerance-verification = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $jurisdiction = urn:iso:std:iso:3166
Alias: $cd-fed-country = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-fed-country
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $cd-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-civilstate
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $cd-contact-person = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-contact-person
Alias: $be-riskmanifestation = https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-riskmanifestation
Alias: $be-exposureroute = https://www.ehealth.fgov.be/standards/fhir/allergy/ValueSet/be-exposureroute


---

File: repos/hl7-be_SLASH_allergy/input/pagecontent/guidance.md

### Identifier

  

For exchange purposes the allergy record SHALL be provided with an UUID based identifier from the [BeNSAllergy](NamingSystem-be-ns-allergy.html) namespace.

### Causes of the Allergy or Intolerance

The allergy or intolerance causes are divided in two categories
* medication related (see [www.samportal.be](https://www.samportal.be))
* not medication related

The first group SHALL be indicated by using one of the following namespaces from the medication project:
* CNK code [https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem-be-ns-cnk-codes](https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem-be-ns-cnk-codes.html)
* ATC code [http://whocc.no/atc](http://whocc.no/atc)
* CTI extended code [https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem-be-ns-cti-extended-code](https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem-be-ns-cti-extended-code.html)



The second group SHALL be indicated by using a value from the [BeAllergyIntoleranceCode](./ValueSet-be-allergyintolerancecode.html)

### Allergy and intolerance types


The type of allergy or intolerance is expressed in the extension [BeExtAllergyType](./StructureDefinition-be-ext-allergy-type.html) and not in AllergyIntolerance.type. The AllergyIntolerance.type only allows two values, allergy or intolerance. Currently we recognize non allergic hypersensitivity. To avoid the use of duplicate or misaligned information, there shall be no value in AllergyIntolerance.type, so it is forbidden.  
The Value Set for Allergy / Intolerance type is extensible, like in other value sets where SNOMED CT is used. This means that if an allergy type can be expressed using the provided SNOMED CT values, then these codes shall be used. Other codes may be used but only if the allergy type is not matching those provided.


### Recorder 

The recorder SHALL always be identified by at least a SSIN (SSIN bis) number. Additionally, in a contained resource, you can provide extra information, such as name or NIHDI number. BePatient is added to allow a patient to record his/her own allergies. For GDPR reasons, when this information is used for clinical studies, or other secondary purposes, the SSIN will not be made available.

If you want to use an Organization as a recorder, you can do that using a PractitionerRole, and add the Organization to PractitionerRole.organization. However, you SHALL add a Practitioner to the PractitionerRole. This will be the person that ultimately bears the medical responsibility for this record on behalf of the Organization.

### Dates

#### AllergyIntolerance.onset

The .onset field is used when there are no reactions known, or when the date of the reactions is uncertain (e.g. in childhood, some years ago,...).

#### AllergyIntolerance.reactions.onset

If a reaction (and manifestation) is known, and it can be dated sufficiently accurately, then a (partial) date on the reaction level is used.

### Role of the Registrar

The verification status of the allergy or intolerance depends on the role of the person that registers the allergy or intolerance, and the information that is available at the time of the registration.

|Description|Role|VerificationStatus|
|-----------|----|------------------|
|Patient self-service|Patient|Unconfirmed|
|Doctor in posession of a positive test result|Doctor|Confirmed|
|Doctor in posession of a negative test result|Doctor|Refuted|
|Patient tells a caregiver (KB/AR 78) that he/she suffers from an allergy |Caregiver (KB/AR 78)|Unconfirmed|



---

File: repos/hl7-be_SLASH_allergy/input/pagecontent/spec.md

### Specifications
These are the project specifications:

---

