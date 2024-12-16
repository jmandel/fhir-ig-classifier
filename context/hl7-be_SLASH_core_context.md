File: repos/hl7-be_SLASH_core/input/fsh/codesystems/BeCSCareLocation.fsh

CodeSystem: BeCSCareLocation
Id: be-cs-care-location
Title: "BeCSCareLocation"
Description: "Care Location Code System"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* #hospital "Hospital"
* #hospital ^designation[0].language = #fr-BE
* #hospital ^designation[=].value = "A l’hôpital"
* #hospital ^designation[+].language = #nl-BE
* #hospital ^designation[=].value = "Ziekenhuis"
* #patient-home "Patient home"
* #patient-home ^designation[0].language = #fr-BE
* #patient-home ^designation[=].value = "A domicile"
* #patient-home ^designation[+].language = #nl-BE
* #patient-home ^designation[=].value = "Thuis"
* #nursing-home "Nursing home"
* #nursing-home ^designation[0].language = #fr-BE
* #nursing-home ^designation[=].value = "En maison de repos"
* #nursing-home ^designation[+].language = #nl-BE
* #nursing-home ^designation[=].value = "Rusthuis"
* #recovery-home "Recovery home"
* #recovery-home ^designation[0].language = #fr-BE
* #recovery-home ^designation[=].value = "En maison de revalidation"
* #recovery-home ^designation[+].language = #nl-BE
* #recovery-home ^designation[=].value = "In huis van revalidatie"
* #workplace "Workplace"
* #workplace ^designation[0].language = #fr-BE
* #workplace ^designation[=].value = "Au cabinet"
* #workplace ^designation[+].language = #nl-BE
* #workplace ^designation[=].value = "In het kantoor"
* #medical-center "Medical center"
* #medical-center ^designation[0].language = #fr-BE
* #medical-center ^designation[=].value = "En maison médicale"
* #medical-center ^designation[+].language = #nl-BE
* #medical-center ^designation[=].value = "Medisch huis"
* #clinic "Clinic"
* #clinic ^designation[0].language = #fr-BE
* #clinic ^designation[=].value = "A la clinique"
* #clinic ^designation[+].language = #nl-BE
* #clinic ^designation[=].value = "Kliniek"
* #pediatric-ic "Pediatric ic"
* #pediatric-ic ^designation[0].language = #fr-BE
* #pediatric-ic ^designation[=].value = "En unité de soins intensive pédiatrique"
* #pediatric-ic ^designation[+].language = #nl-BE
* #pediatric-ic ^designation[=].value = "Pediatrische intensive care"
* #neonatal-ic "Neonatal ic"
* #neonatal-ic ^designation[0].language = #fr-BE
* #neonatal-ic ^designation[=].value = "En unité de soins intensive pédiatrique néonatal"
* #neonatal-ic ^designation[+].language = #nl-BE
* #neonatal-ic ^designation[=].value = "Neonatale pediatrische intensive care"
* #prenatal-consult "Prenatal consult"
* #prenatal-consult ^designation[0].language = #fr-BE
* #prenatal-consult ^designation[=].value = "Consultation prénatale"
* #prenatal-consult ^designation[+].language = #nl-BE
* #prenatal-consult ^designation[=].value = "prenataal consult"
* #m-accueil "m-accueil"
* #m-accueil ^designation[0].language = #fr-BE
* #m-accueil ^designation[=].value = "Milieu d’accueil"
* #m-accueil ^designation[+].language = #nl-BE
* #m-accueil ^designation[=].value = "kinderopvang"
* #child-consult "Child consult"
* #child-consult ^designation[0].language = #fr-BE
* #child-consult ^designation[=].value = "Consultation pour enfant"
* #child-consult ^designation[+].language = #nl-BE
* #child-consult ^designation[=].value = "kind consult"
* #one "ONE"
* #one ^designation[0].language = #fr-BE
* #one ^designation[=].value = "ONE"
* #one ^designation[+].language = #nl-BE
* #one ^designation[=].value = "ONE"
* #kind-gezin "Kind en gezin"
* #kind-gezin ^designation[0].language = #fr-BE
* #kind-gezin ^designation[=].value = "Kind&Gezin"
* #kind-gezin ^designation[+].language = #nl-BE
* #kind-gezin ^designation[=].value = "Kind&Gezin"
* #ambulance "Ambulance"
* #ambulance ^designation[0].language = #fr-BE
* #ambulance ^designation[=].value = "Ambulance"
* #ambulance ^designation[+].language = #nl-BE
* #ambulance ^designation[=].value = "Ambulance"
* #school "School"
* #school ^designation[0].language = #fr-BE
* #school ^designation[=].value = "A l’école"
* #school ^designation[+].language = #nl-BE
* #school ^designation[=].value = "School"
* #school-health-serv "School health services"
* #school-health-serv ^designation[0].language = #fr-BE
* #school-health-serv ^designation[=].value = "services de santé scolaire"
* #school-health-serv ^designation[+].language = #nl-BE
* #school-health-serv ^designation[=].value = "gezondheidsdiensten op school"
* #pharmacy "Pharmacy"
* #pharmacy ^designation[0].language = #fr-BE
* #pharmacy ^designation[=].value = "Pharmacie"
* #pharmacy ^designation[+].language = #nl-BE
* #pharmacy ^designation[=].value = "Apotheek"
* #med-monde "Med monde"
* #med-monde ^designation[0].language = #fr-BE
* #med-monde ^designation[=].value = "Médecin du monde"
* #med-monde ^designation[+].language = #nl-BE
* #med-monde ^designation[=].value = "dokters van de wereld"
* #ngo "Non-Governmental Organization"
* #ngo ^designation[0].language = #fr-BE
* #ngo ^designation[=].value = "ONG"
* #ngo ^designation[+].language = #nl-BE
* #ngo ^designation[=].value = "NGO"
* #family-planning "Family planning"
* #family-planning ^designation[0].language = #fr-BE
* #family-planning ^designation[=].value = "Centre planning familial"
* #family-planning ^designation[+].language = #nl-BE
* #family-planning ^designation[=].value = "Centrum gezinsplanning"
* #abroad "Abroad"
* #abroad ^designation[0].language = #fr-BE
* #abroad ^designation[=].value = "A l’étranger"
* #abroad ^designation[+].language = #nl-BE
* #abroad ^designation[=].value = "Buitenland"
* #other "other"
* #other ^designation[0].language = #fr-BE
* #other ^designation[=].value = "Autre"
* #other ^designation[+].language = #nl-BE
* #other ^designation[=].value = "Andere"

---

File: repos/hl7-be_SLASH_core/input/fsh/codesystems/Cdfedcountry.fsh

CodeSystem: Cdfedcountry
Id: cd-fed-country
Title: "BeCdFedCountry"
Description: "FedICT country codes."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2020-09-25T13:06:43+02:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* ^content = #fragment
* ^caseSensitive = true
* ^experimental = false
* #BE "Belgium"

---

File: repos/hl7-be_SLASH_core/input/fsh/codesystems/CivilState.fsh

CodeSystem: CivilState
Id: cd-civilstate
Title: "BeCdCivilState"
Description: "Civil state in Belgium."
* ^version = "1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "eHealth Platform"
* ^caseSensitive = false
* ^content = #complete
* #10 "Unmarried"
* #10 ^designation[0].language = #en
* #10 ^designation[=].value = "Unmarried"
* #10 ^designation[+].language = #nl-BE
* #10 ^designation[=].value = "Ongehuwd"
* #10 ^designation[+].language = #fr-BE
* #10 ^designation[=].value = "Célibataire"
* #20 "Married"
* #20 ^designation[0].language = #en
* #20 ^designation[=].value = "Married"
* #20 ^designation[+].language = #nl-BE
* #20 ^designation[=].value = "Gehuwd"
* #20 ^designation[+].language = #fr-BE
* #20 ^designation[=].value = "Marié"
* #25 "Annuled"
* #25 ^designation[0].language = #en
* #25 ^designation[=].value = "Annuled"
* #25 ^designation[+].language = #nl-BE
* #25 ^designation[=].value = "Nietigverklaring van het huwelijk"
* #25 ^designation[+].language = #fr-BE
* #25 ^designation[=].value = "Annulation de marriage"
* #26 "Putative marriage"
* #26 ^designation[0].language = #en
* #26 ^designation[=].value = "Putative marriage"
* #26 ^designation[+].language = #nl-BE
* #26 ^designation[=].value = "Putatief huwelijk"
* #26 ^designation[+].language = #fr-BE
* #26 ^designation[=].value = "Mariage putatif"
* #30 "Widowed"
* #30 ^designation[0].language = #en
* #30 ^designation[=].value = "Widowed"
* #30 ^designation[+].language = #nl-BE
* #30 ^designation[=].value = "Weduwnaar/weduwe"
* #30 ^designation[+].language = #fr-BE
* #30 ^designation[=].value = "Veuf/veuve"
* #40 "Divorced"
* #40 ^designation[0].language = #en
* #40 ^designation[=].value = "Divorced"
* #40 ^designation[+].language = #nl-BE
* #40 ^designation[=].value = "Echtgescheiden"
* #40 ^designation[+].language = #fr-BE
* #40 ^designation[=].value = "Divorced"
* #41 "Divorced since 1/10/1994"
* #41 ^designation[0].language = #en
* #41 ^designation[=].value = "Divorced since 1/10/1994"
* #41 ^designation[+].language = #nl-BE
* #41 ^designation[=].value = "Echtgescheiden vanaf 1/10/1994"
* #41 ^designation[+].language = #fr-BE
* #41 ^designation[=].value = "Divorcé à partir du 1/10/1994"
* #50 "Legal separation"
* #50 ^designation[0].language = #en
* #50 ^designation[=].value = "Legal separation"
* #50 ^designation[+].language = #nl-BE
* #50 ^designation[=].value = "Gescheiden van tafel en bed"
* #50 ^designation[+].language = #fr-BE
* #50 ^designation[=].value = "Séparé de corps et de biens"
* #51 "Legal separation since 1/10/1994"
* #51 ^designation[0].language = #en
* #51 ^designation[=].value = "Legal separation since 1/10/1994"
* #51 ^designation[+].language = #nl-BE
* #51 ^designation[=].value = "Gescheiden van tafel en bed sinds 1/10/1994"
* #51 ^designation[+].language = #fr-BE
* #51 ^designation[=].value = "Séparé de corps et de biens à partir du 1/10/1994"
* #60 "Repudiation"
* #60 ^designation[0].language = #en
* #60 ^designation[=].value = "Repudiation"
* #60 ^designation[+].language = #nl-BE
* #60 ^designation[=].value = "Verstoting"
* #60 ^designation[+].language = #fr-BE
* #60 ^designation[=].value = "Répudiation"
* #80 "Partnership"
* #80 ^designation[0].language = #en
* #80 ^designation[=].value = "Partnership"
* #80 ^designation[+].language = #nl-BE
* #80 ^designation[=].value = "Partnerschap"
* #80 ^designation[+].language = #fr-BE
* #80 ^designation[=].value = "Partenariat"
* #81 "End of partnership"
* #81 ^designation[0].language = #en
* #81 ^designation[=].value = "End of partnership"
* #81 ^designation[+].language = #nl-BE
* #81 ^designation[=].value = "Partnerschap beeindigd"
* #81 ^designation[+].language = #fr-BE
* #81 ^designation[=].value = "Fin de partenariat"

---

File: repos/hl7-be_SLASH_core/input/fsh/codesystems/ContactPerson.fsh

CodeSystem: ContactPerson
Id: cd-contact-person
Title: "BeCdContactPerson"
Description: "Contact person in Belgium."
* ^version = "1.2"
* ^status = #active
* ^experimental = false
* ^publisher = "eHealth Platform"
* ^caseSensitive = false
* ^content = #complete
* #father "father"
* #father ^designation.language = #en
* #father ^designation.value = "father"
* #mother "mother"
* #mother ^designation.language = #en
* #mother ^designation.value = "mother"
* #child "child"
* #child ^designation.language = #en
* #child ^designation.value = "child"
* #spouse "spouse"
* #spouse ^designation.language = #en
* #spouse ^designation.value = "spouse"
* #husband "husband"
* #husband ^designation.language = #en
* #husband ^designation.value = "husband"
* #partner "partner"
* #partner ^designation.language = #en
* #partner ^designation.value = "partner"
* #brother "brother"
* #brother ^designation.language = #en
* #brother ^designation.value = "brother"
* #sister "sister"
* #sister ^designation.language = #en
* #sister ^designation.value = "sister"
* #brotherinlaw "brotherinlaw"
* #brotherinlaw ^designation.language = #en
* #brotherinlaw ^designation.value = "brother-in-law"
* #tutor "tutor"
* #tutor ^designation.language = #en
* #tutor ^designation.value = "tutor"
* #notary "notary"
* #notary ^designation.language = #en
* #notary ^designation.value = "notary"
* #lawyer "lawyer"
* #lawyer ^designation.language = #en
* #lawyer ^designation.value = "lawyer"
* #employer "employer"
* #employer ^designation.language = #en
* #employer ^designation.value = "employer"
* #grandparent "grandparent"
* #grandparent ^designation.language = #en
* #grandparent ^designation.value = "grandparent"
* #son "son"
* #son ^designation.language = #en
* #son ^designation.value = "son"
* #daughter "daughter"
* #daughter ^designation.language = #en
* #daughter ^designation.value = "daughter"
* #grandchild "grandchild"
* #grandchild ^designation.language = #en
* #grandchild ^designation.value = "grandchild"
* #neighbour "neighbour"
* #neighbour ^designation.language = #en
* #neighbour ^designation.value = "neighbour"
* #stepson "stepson"
* #stepson ^designation.language = #en
* #stepson ^designation.value = "stepson"
* #stepdaughter "stepdaughter"
* #stepdaughter ^designation.language = #en
* #stepdaughter ^designation.value = "stepdaughter"
* #stepfather "stepfather"
* #stepfather ^designation.language = #en
* #stepfather ^designation.value = "stepfather"
* #stepmother "stepmother"
* #stepmother ^designation.language = #en
* #stepmother ^designation.value = "stepmother"
* #sisterinlaw "sisterinlaw"
* #sisterinlaw ^designation.language = #en
* #sisterinlaw ^designation.value = "sisterinlaw"

---

File: repos/hl7-be_SLASH_core/input/fsh/codesystems/HCParty.fsh

CodeSystem: HCParty
Id: cd-hcparty
Title: "BeCdHcParty"
Description: "healthcare party in Belgium."
* ^caseSensitive = true
* ^experimental = false
* ^status = #active
* ^content = #complete
* ^version = "1.1.0"
* ^date = "2020-09-25T13:06:43+02:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* #application "software application"
* #application ^designation[0].language = #fr-BE
* #application ^designation[=].value = "application logicielle"
* #application ^designation[+].language = #nl-BE
* #application ^designation[=].value = "softwaretoepassing"
* #application ^designation[+].language = #en
* #application ^designation[=].value = "software application"
* #application ^designation[+].language = #de
* #application ^designation[=].value = "Softwareapplikation"
* #certificateholder "certificate holder"
* #certificateholder ^designation[0].language = #fr-BE
* #certificateholder ^designation[=].value = "titulaire du certificat"
* #certificateholder ^designation[+].language = #nl-BE
* #certificateholder ^designation[=].value = "houder van certificaat"
* #certificateholder ^designation[+].language = #en
* #certificateholder ^designation[=].value = "certificate holder"
* #certificateholder ^designation[+].language = #de
* #certificateholder ^designation[=].value = "Zertifikatsinhaber"
* #deptabdpelvrehabandperinatalphysiotherapy "pelviperineal and perinatal physiotherapy"
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[0].language = #fr-BE
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[=].value = "rééducation abdomino-pelvienne - kinésithérapie périnatale"
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[+].language = #nl-BE
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[=].value = "bekkenbodemreëducatie en perinatale kinesitherapie"
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[+].language = #en
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[=].value = "pelviperineal and perinatal physiotherapy"
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[+].language = #de
* #deptabdpelvrehabandperinatalphysiotherapy ^designation[=].value = "Beckenbodentherapie und Perinatale Physiotherapie"
* #deptacutemedicine "acute medecine"
* #deptacutemedicine ^designation[0].language = #fr-BE
* #deptacutemedicine ^designation[=].value = "médecine aiguë"
* #deptacutemedicine ^designation[+].language = #nl-BE
* #deptacutemedicine ^designation[=].value = "acute geneeskunde"
* #deptacutemedicine ^designation[+].language = #en
* #deptacutemedicine ^designation[=].value = "acute medecine"
* #deptacutemedicine ^designation[+].language = #de
* #deptacutemedicine ^designation[=].value = "Akutmedizin"
* #deptadultpsychiatry "adult psychiatry"
* #deptadultpsychiatry ^designation[0].language = #fr-BE
* #deptadultpsychiatry ^designation[=].value = "psychiatrie adulte"
* #deptadultpsychiatry ^designation[+].language = #nl-BE
* #deptadultpsychiatry ^designation[=].value = "volwassenpsychiatrie"
* #deptadultpsychiatry ^designation[+].language = #en
* #deptadultpsychiatry ^designation[=].value = "adult psychiatry"
* #deptadultpsychiatry ^designation[+].language = #de
* #deptadultpsychiatry ^designation[=].value = "Erwachsenenpsychiatrie"
* #deptaestheticsurgery "plastic, reconstructive and esthetic surgery"
* #deptaestheticsurgery ^designation[0].language = #fr-BE
* #deptaestheticsurgery ^designation[=].value = "chirurgie plastique, reconstructive et esthétique"
* #deptaestheticsurgery ^designation[+].language = #nl-BE
* #deptaestheticsurgery ^designation[=].value = "plastische, reconstructieve en esthetische heelkunde"
* #deptaestheticsurgery ^designation[+].language = #en
* #deptaestheticsurgery ^designation[=].value = "plastic, reconstructive and esthetic surgery"
* #deptaestheticsurgery ^designation[+].language = #de
* #deptaestheticsurgery ^designation[=].value = "Plastische, rekonstruktive und ästhetische Chirurgie"
* #deptalgology "algology"
* #deptalgology ^designation[0].language = #fr-BE
* #deptalgology ^designation[=].value = "algologie"
* #deptalgology ^designation[+].language = #nl-BE
* #deptalgology ^designation[=].value = "algologie"
* #deptalgology ^designation[+].language = #en
* #deptalgology ^designation[=].value = "algology"
* #deptalgology ^designation[+].language = #de
* #deptalgology ^designation[=].value = "Algologie"
* #deptanatomopathology "anatomopathology"
* #deptanatomopathology ^designation[0].language = #fr-BE
* #deptanatomopathology ^designation[=].value = "anatomopathologie"
* #deptanatomopathology ^designation[+].language = #nl-BE
* #deptanatomopathology ^designation[=].value = "pathologische anatomie"
* #deptanatomopathology ^designation[+].language = #en
* #deptanatomopathology ^designation[=].value = "anatomopathology"
* #deptanatomopathology ^designation[+].language = #de
* #deptanatomopathology ^designation[=].value = "pathologische Anatomie"
* #deptanesthesiaandresuscitation "anesthesia and reanimation"
* #deptanesthesiaandresuscitation ^designation[0].language = #fr-BE
* #deptanesthesiaandresuscitation ^designation[=].value = "anesthésie-réanimation"
* #deptanesthesiaandresuscitation ^designation[+].language = #nl-BE
* #deptanesthesiaandresuscitation ^designation[=].value = "anesthesie-reanimatie"
* #deptanesthesiaandresuscitation ^designation[+].language = #en
* #deptanesthesiaandresuscitation ^designation[=].value = "anesthesia and reanimation"
* #deptanesthesiaandresuscitation ^designation[+].language = #de
* #deptanesthesiaandresuscitation ^designation[=].value = "Anästhesie und Reanimation"
* #deptanesthesiology "anesthesiology"
* #deptanesthesiology ^designation[0].language = #fr-BE
* #deptanesthesiology ^designation[=].value = "anesthésiologie"
* #deptanesthesiology ^designation[+].language = #nl-BE
* #deptanesthesiology ^designation[=].value = "anesthesiologie"
* #deptanesthesiology ^designation[+].language = #en
* #deptanesthesiology ^designation[=].value = "anesthesiology"
* #deptanesthesiology ^designation[+].language = #de
* #deptanesthesiology ^designation[=].value = "Anästhesiologe"
* #deptaudiology "audiology"
* #deptaudiology ^designation[0].language = #fr-BE
* #deptaudiology ^designation[=].value = "audiologie"
* #deptaudiology ^designation[+].language = #nl-BE
* #deptaudiology ^designation[=].value = "audiologie"
* #deptaudiology ^designation[+].language = #en
* #deptaudiology ^designation[=].value = "audiology"
* #deptaudiology ^designation[+].language = #de
* #deptaudiology ^designation[=].value = "Audiologie"
* #deptbacteriology "bacteriology"
* #deptbacteriology ^designation[0].language = #fr-BE
* #deptbacteriology ^designation[=].value = "bactériologie"
* #deptbacteriology ^designation[+].language = #nl-BE
* #deptbacteriology ^designation[=].value = "bacteriologie"
* #deptbacteriology ^designation[+].language = #en
* #deptbacteriology ^designation[=].value = "bacteriology"
* #deptbacteriology ^designation[+].language = #de
* #deptbacteriology ^designation[=].value = "Bakteriologie"
* #deptcardiacsurgery "cardiac surgery"
* #deptcardiacsurgery ^designation[0].language = #fr-BE
* #deptcardiacsurgery ^designation[=].value = "chirurgie cardiaque"
* #deptcardiacsurgery ^designation[+].language = #nl-BE
* #deptcardiacsurgery ^designation[=].value = "hartchirurgie"
* #deptcardiacsurgery ^designation[+].language = #en
* #deptcardiacsurgery ^designation[=].value = "cardiac surgery"
* #deptcardiacsurgery ^designation[+].language = #de
* #deptcardiacsurgery ^designation[=].value = "Herzchirurgie"
* #deptcardiology "cardiology"
* #deptcardiology ^designation[0].language = #fr-BE
* #deptcardiology ^designation[=].value = "cardiologie"
* #deptcardiology ^designation[+].language = #nl-BE
* #deptcardiology ^designation[=].value = "cardiologie"
* #deptcardiology ^designation[+].language = #en
* #deptcardiology ^designation[=].value = "cardiology"
* #deptcardiology ^designation[+].language = #de
* #deptcardiology ^designation[=].value = "Kardiologie"
* #deptcardiovascularphysiotherapy "cardiovascular physiotherapy"
* #deptcardiovascularphysiotherapy ^designation[0].language = #fr-BE
* #deptcardiovascularphysiotherapy ^designation[=].value = "kinésithérapie cardiovasculaire"
* #deptcardiovascularphysiotherapy ^designation[+].language = #nl-BE
* #deptcardiovascularphysiotherapy ^designation[=].value = "cardiovasculaire kinesitherapie"
* #deptcardiovascularphysiotherapy ^designation[+].language = #en
* #deptcardiovascularphysiotherapy ^designation[=].value = "cardiovascular physiotherapy"
* #deptcardiovascularphysiotherapy ^designation[+].language = #de
* #deptcardiovascularphysiotherapy ^designation[=].value = "kardiovaskuläre Physiotherapie"
* #deptchildandadolescentpsychiatry "child and adolescent psychiatry"
* #deptchildandadolescentpsychiatry ^designation[0].language = #fr-BE
* #deptchildandadolescentpsychiatry ^designation[=].value = "psychiatrie de l'enfant et de l'adolescent"
* #deptchildandadolescentpsychiatry ^designation[+].language = #nl-BE
* #deptchildandadolescentpsychiatry ^designation[=].value = "kinder- en jeugdpsychiatrie"
* #deptchildandadolescentpsychiatry ^designation[+].language = #en
* #deptchildandadolescentpsychiatry ^designation[=].value = "child and adolescent psychiatry"
* #deptchildandadolescentpsychiatry ^designation[+].language = #de
* #deptchildandadolescentpsychiatry ^designation[=].value = "Kinder- und Jugendpsychiatrie"
* #deptclinicalbiology "clinical biology"
* #deptclinicalbiology ^designation[0].language = #fr-BE
* #deptclinicalbiology ^designation[=].value = "biologie clinique"
* #deptclinicalbiology ^designation[+].language = #nl-BE
* #deptclinicalbiology ^designation[=].value = "klinische biologie"
* #deptclinicalbiology ^designation[+].language = #en
* #deptclinicalbiology ^designation[=].value = "clinical biology"
* #deptclinicalbiology ^designation[+].language = #de
* #deptclinicalbiology ^designation[=].value = "klinische Biologie"
* #deptclinicalgenetics "clinical genetics"
* #deptclinicalgenetics ^designation[0].language = #fr-BE
* #deptclinicalgenetics ^designation[=].value = "génétique clinique"
* #deptclinicalgenetics ^designation[+].language = #nl-BE
* #deptclinicalgenetics ^designation[=].value = "klinische genetica"
* #deptclinicalgenetics ^designation[+].language = #en
* #deptclinicalgenetics ^designation[=].value = "clinical genetics"
* #deptclinicalgenetics ^designation[+].language = #de
* #deptclinicalgenetics ^designation[=].value = "klinische Genetik"
* #deptclinicalhematology "clinical hematology"
* #deptclinicalhematology ^designation[0].language = #fr-BE
* #deptclinicalhematology ^designation[=].value = "hématologie clinique"
* #deptclinicalhematology ^designation[+].language = #nl-BE
* #deptclinicalhematology ^designation[=].value = "klinische hematologie"
* #deptclinicalhematology ^designation[+].language = #en
* #deptclinicalhematology ^designation[=].value = "clinical hematology"
* #deptclinicalhematology ^designation[+].language = #de
* #deptclinicalhematology ^designation[=].value = "klinische Hämatologie"
* #deptclinicalinfectiology "clinical infectiology"
* #deptclinicalinfectiology ^designation[0].language = #fr-BE
* #deptclinicalinfectiology ^designation[=].value = "infectiologie clinique"
* #deptclinicalinfectiology ^designation[+].language = #nl-BE
* #deptclinicalinfectiology ^designation[=].value = "klinische infectiologie"
* #deptclinicalinfectiology ^designation[+].language = #en
* #deptclinicalinfectiology ^designation[=].value = "clinical infectiology"
* #deptclinicalinfectiology ^designation[+].language = #de
* #deptclinicalinfectiology ^designation[=].value = "klinische Infektiologie"
* #deptclinicalorthopedagogy "clinical orthopedagogy"
* #deptclinicalorthopedagogy ^designation[0].language = #fr-BE
* #deptclinicalorthopedagogy ^designation[=].value = "orthopédagogie clinique"
* #deptclinicalorthopedagogy ^designation[+].language = #nl-BE
* #deptclinicalorthopedagogy ^designation[=].value = "klinische orthopedagogie"
* #deptclinicalorthopedagogy ^designation[+].language = #en
* #deptclinicalorthopedagogy ^designation[=].value = "clinical orthopedagogy"
* #deptclinicalorthopedagogy ^designation[+].language = #de
* #deptclinicalorthopedagogy ^designation[=].value = "klinische Orthopädagogik"
* #deptclinicalpsychology "clinical psychology"
* #deptclinicalpsychology ^designation[0].language = #fr-BE
* #deptclinicalpsychology ^designation[=].value = "psychologie clinique"
* #deptclinicalpsychology ^designation[+].language = #nl-BE
* #deptclinicalpsychology ^designation[=].value = "klinische psychologie"
* #deptclinicalpsychology ^designation[+].language = #en
* #deptclinicalpsychology ^designation[=].value = "clinical psychology"
* #deptclinicalpsychology ^designation[+].language = #de
* #deptclinicalpsychology ^designation[=].value = "klinische Psychologie"
* #deptdentistry "dentistry"
* #deptdentistry ^designation[0].language = #fr-BE
* #deptdentistry ^designation[=].value = "dentisterie"
* #deptdentistry ^designation[+].language = #nl-BE
* #deptdentistry ^designation[=].value = "tandheelkunde"
* #deptdentistry ^designation[+].language = #en
* #deptdentistry ^designation[=].value = "dentistry"
* #deptdentistry ^designation[+].language = #de
* #deptdentistry ^designation[=].value = "Zahnheilkunde"
* #deptdermatology "dermatology"
* #deptdermatology ^designation[0].language = #fr-BE
* #deptdermatology ^designation[=].value = "dermatologie"
* #deptdermatology ^designation[+].language = #nl-BE
* #deptdermatology ^designation[=].value = "dermatologie"
* #deptdermatology ^designation[+].language = #en
* #deptdermatology ^designation[=].value = "dermatology"
* #deptdermatology ^designation[+].language = #de
* #deptdermatology ^designation[=].value = "Dermatologie"
* #deptdermatovenereology "dermatovenereology"
* #deptdermatovenereology ^designation[0].language = #fr-BE
* #deptdermatovenereology ^designation[=].value = "dermato-vénérologie"
* #deptdermatovenereology ^designation[+].language = #nl-BE
* #deptdermatovenereology ^designation[=].value = "dermato-venereologie"
* #deptdermatovenereology ^designation[+].language = #en
* #deptdermatovenereology ^designation[=].value = "dermatovenereology"
* #deptdermatovenereology ^designation[+].language = #de
* #deptdermatovenereology ^designation[=].value = "Dermatologie und Venerologie"
* #deptdiabeticeducation "diabetic education"
* #deptdiabeticeducation ^designation[0].language = #fr-BE
* #deptdiabeticeducation ^designation[=].value = "éducation diabétique"
* #deptdiabeticeducation ^designation[+].language = #nl-BE
* #deptdiabeticeducation ^designation[=].value = "diabeteseducatie"
* #deptdiabeticeducation ^designation[+].language = #en
* #deptdiabeticeducation ^designation[=].value = "diabetic education"
* #deptdiabeticeducation ^designation[+].language = #de
* #deptdiabeticeducation ^designation[=].value = "Diabetes-Erziehung"
* #deptdiabetology "diabetology"
* #deptdiabetology ^designation[0].language = #fr-BE
* #deptdiabetology ^designation[=].value = "diabétologie"
* #deptdiabetology ^designation[+].language = #nl-BE
* #deptdiabetology ^designation[=].value = "diabetologie"
* #deptdiabetology ^designation[+].language = #en
* #deptdiabetology ^designation[=].value = "diabetology"
* #deptdiabetology ^designation[+].language = #de
* #deptdiabetology ^designation[=].value = "Diabetologie"
* #deptdietetics "dietetics"
* #deptdietetics ^designation[0].language = #fr-BE
* #deptdietetics ^designation[=].value = "diététique"
* #deptdietetics ^designation[+].language = #nl-BE
* #deptdietetics ^designation[=].value = "dieetleer"
* #deptdietetics ^designation[+].language = #en
* #deptdietetics ^designation[=].value = "dietetics"
* #deptdietetics ^designation[+].language = #de
* #deptdietetics ^designation[=].value = "Ernährungslehre"
* #deptemergency "emergency"
* #deptemergency ^designation[0].language = #fr-BE
* #deptemergency ^designation[=].value = "services d'urgence"
* #deptemergency ^designation[+].language = #nl-BE
* #deptemergency ^designation[=].value = "spoeddiensten"
* #deptemergency ^designation[+].language = #en
* #deptemergency ^designation[=].value = "emergency"
* #deptemergency ^designation[+].language = #de
* #deptemergency ^designation[=].value = "Notfalldienst"
* #deptendocrinodiabetology "endocrinodiabetology"
* #deptendocrinodiabetology ^designation[0].language = #fr-BE
* #deptendocrinodiabetology ^designation[=].value = "endocrino-diabétologie"
* #deptendocrinodiabetology ^designation[+].language = #nl-BE
* #deptendocrinodiabetology ^designation[=].value = "endocrino-diabetologie"
* #deptendocrinodiabetology ^designation[+].language = #en
* #deptendocrinodiabetology ^designation[=].value = "endocrinodiabetology"
* #deptendocrinodiabetology ^designation[+].language = #de
* #deptendocrinodiabetology ^designation[=].value = "Endokrinologie und Diabetologie"
* #deptendocrinology "endocrinology"
* #deptendocrinology ^designation[0].language = #fr-BE
* #deptendocrinology ^designation[=].value = "endocrinologie"
* #deptendocrinology ^designation[+].language = #nl-BE
* #deptendocrinology ^designation[=].value = "endocrinologie/hormonenleer"
* #deptendocrinology ^designation[+].language = #en
* #deptendocrinology ^designation[=].value = "endocrinology"
* #deptendocrinology ^designation[+].language = #de
* #deptendocrinology ^designation[=].value = "Endokrinologie"
* #deptforensicpsychiatry "forensic psychiatry"
* #deptforensicpsychiatry ^designation[0].language = #fr-BE
* #deptforensicpsychiatry ^designation[=].value = "psychiatrie médico-légale"
* #deptforensicpsychiatry ^designation[+].language = #nl-BE
* #deptforensicpsychiatry ^designation[=].value = "forensische psychiatrie"
* #deptforensicpsychiatry ^designation[+].language = #en
* #deptforensicpsychiatry ^designation[=].value = "forensic psychiatry"
* #deptforensicpsychiatry ^designation[+].language = #de
* #deptforensicpsychiatry ^designation[=].value = "forensische Psychiatrie"
* #deptfunctionaldisabledrehabilitation "functional and professional rehabilitation"
* #deptfunctionaldisabledrehabilitation ^designation[0].language = #fr-BE
* #deptfunctionaldisabledrehabilitation ^designation[=].value = "réadaptation fonctionnelle et professionnelle des handicapés"
* #deptfunctionaldisabledrehabilitation ^designation[+].language = #nl-BE
* #deptfunctionaldisabledrehabilitation ^designation[=].value = "functionele, sociale en professionele revalidatie"
* #deptfunctionaldisabledrehabilitation ^designation[+].language = #en
* #deptfunctionaldisabledrehabilitation ^designation[=].value = "functional and professional rehabilitation"
* #deptfunctionaldisabledrehabilitation ^designation[+].language = #de
* #deptfunctionaldisabledrehabilitation ^designation[=].value = "funktionelle und berufliche Rehabilitation"
* #deptgastroenterology "gastroenterology"
* #deptgastroenterology ^designation[0].language = #fr-BE
* #deptgastroenterology ^designation[=].value = "gastroentérologie"
* #deptgastroenterology ^designation[+].language = #nl-BE
* #deptgastroenterology ^designation[=].value = "gastro-enterologie"
* #deptgastroenterology ^designation[+].language = #en
* #deptgastroenterology ^designation[=].value = "gastroenterology"
* #deptgastroenterology ^designation[+].language = #de
* #deptgastroenterology ^designation[=].value = "Gastroenterologie"
* #deptgeneralpractice "general practice"
* #deptgeneralpractice ^designation[0].language = #fr-BE
* #deptgeneralpractice ^designation[=].value = "médecine générale"
* #deptgeneralpractice ^designation[+].language = #nl-BE
* #deptgeneralpractice ^designation[=].value = "algemene geneeskunde"
* #deptgeneralpractice ^designation[+].language = #en
* #deptgeneralpractice ^designation[=].value = "general practice"
* #deptgeneralpractice ^designation[+].language = #de
* #deptgeneralpractice ^designation[=].value = "Allgemeinmedizin"
* #deptgenetics "genetics"
* #deptgenetics ^designation[0].language = #fr-BE
* #deptgenetics ^designation[=].value = "génétique"
* #deptgenetics ^designation[+].language = #nl-BE
* #deptgenetics ^designation[=].value = "genetica"
* #deptgenetics ^designation[+].language = #en
* #deptgenetics ^designation[=].value = "genetics"
* #deptgenetics ^designation[+].language = #de
* #deptgenetics ^designation[=].value = "Genetik"
* #deptgeriatry "geriatry"
* #deptgeriatry ^designation[0].language = #fr-BE
* #deptgeriatry ^designation[=].value = "gériatrie"
* #deptgeriatry ^designation[+].language = #nl-BE
* #deptgeriatry ^designation[=].value = "geriatrie"
* #deptgeriatry ^designation[+].language = #en
* #deptgeriatry ^designation[=].value = "geriatry"
* #deptgeriatry ^designation[+].language = #de
* #deptgeriatry ^designation[=].value = "Geriatrie"
* #deptgynecology "gynecology"
* #deptgynecology ^designation[0].language = #fr-BE
* #deptgynecology ^designation[=].value = "gynécologie"
* #deptgynecology ^designation[+].language = #nl-BE
* #deptgynecology ^designation[=].value = "gynaecologie"
* #deptgynecology ^designation[+].language = #en
* #deptgynecology ^designation[=].value = "gynecology"
* #deptgynecology ^designation[+].language = #de
* #deptgynecology ^designation[=].value = "Gynäkologie"
* #deptgynecologyobstetrics "gynecology and obstetrics"
* #deptgynecologyobstetrics ^designation[0].language = #fr-BE
* #deptgynecologyobstetrics ^designation[=].value = "gynécologie-obstétrique"
* #deptgynecologyobstetrics ^designation[+].language = #nl-BE
* #deptgynecologyobstetrics ^designation[=].value = "gynaecologie-verloskunde"
* #deptgynecologyobstetrics ^designation[+].language = #en
* #deptgynecologyobstetrics ^designation[=].value = "gynecology and obstetrics"
* #deptgynecologyobstetrics ^designation[+].language = #de
* #deptgynecologyobstetrics ^designation[=].value = "Gynäkologie und Geburtshilfe"
* #depthandsurgery "hand surgery"
* #depthandsurgery ^designation[0].language = #fr-BE
* #depthandsurgery ^designation[=].value = "chirurgie de la main"
* #depthandsurgery ^designation[+].language = #nl-BE
* #depthandsurgery ^designation[=].value = "handchirurgie"
* #depthandsurgery ^designation[+].language = #en
* #depthandsurgery ^designation[=].value = "hand surgery"
* #depthandsurgery ^designation[+].language = #de
* #depthandsurgery ^designation[=].value = "Handchirurgie"
* #depthealthdatamanagement "health data management"
* #depthealthdatamanagement ^designation[0].language = #fr-BE
* #depthealthdatamanagement ^designation[=].value = "gestion des données de santé"
* #depthealthdatamanagement ^designation[+].language = #nl-BE
* #depthealthdatamanagement ^designation[=].value = "beheer van gezondheidsgegevens"
* #depthealthdatamanagement ^designation[+].language = #en
* #depthealthdatamanagement ^designation[=].value = "health data management"
* #depthealthdatamanagement ^designation[+].language = #de
* #depthealthdatamanagement ^designation[=].value = "Verwaltung von Gesundheitsdaten"
* #depthearingaidfitting "hearing aid fitting"
* #depthearingaidfitting ^designation[0].language = #fr-BE
* #depthearingaidfitting ^designation[=].value = "adaptation des aides auditives et implants auditifs"
* #depthearingaidfitting ^designation[+].language = #nl-BE
* #depthearingaidfitting ^designation[=].value = "aanpassing van hoortoestellen en hoorimplantaten"
* #depthearingaidfitting ^designation[+].language = #en
* #depthearingaidfitting ^designation[=].value = "hearing aid fitting"
* #depthearingaidfitting ^designation[+].language = #de
* #depthearingaidfitting ^designation[=].value = "Anpassung von Hörgeräten und Hörimplantaten"
* #depthematology "hematology"
* #depthematology ^designation[0].language = #fr-BE
* #depthematology ^designation[=].value = "hématologie"
* #depthematology ^designation[+].language = #nl-BE
* #depthematology ^designation[=].value = "hematologie"
* #depthematology ^designation[+].language = #en
* #depthematology ^designation[=].value = "hematology"
* #depthematology ^designation[+].language = #de
* #depthematology ^designation[=].value = "Hämatologie"
* #depthospitalpharmacy "hospitalpharmacy"
* #depthospitalpharmacy ^designation[0].language = #fr-BE
* #depthospitalpharmacy ^designation[=].value = "pharmacie hospitalière"
* #depthospitalpharmacy ^designation[+].language = #nl-BE
* #depthospitalpharmacy ^designation[=].value = "ziekenhuisapotheek"
* #depthospitalpharmacy ^designation[+].language = #en
* #depthospitalpharmacy ^designation[=].value = "hospitalpharmacy"
* #depthospitalpharmacy ^designation[+].language = #de
* #depthospitalpharmacy ^designation[=].value = "Krankenhausapotheke"
* #deptinfectiousdisease "infectious disease"
* #deptinfectiousdisease ^designation[0].language = #fr-BE
* #deptinfectiousdisease ^designation[=].value = "maladie infectieuse"
* #deptinfectiousdisease ^designation[+].language = #nl-BE
* #deptinfectiousdisease ^designation[=].value = "infectieziekte"
* #deptinfectiousdisease ^designation[+].language = #en
* #deptinfectiousdisease ^designation[=].value = "infectious disease"
* #deptinfectiousdisease ^designation[+].language = #de
* #deptinfectiousdisease ^designation[=].value = "Infektionskrankheit"
* #deptinsurancemedicine "insurance medicine and medical assessment"
* #deptinsurancemedicine ^designation[0].language = #fr-BE
* #deptinsurancemedicine ^designation[=].value = "médecine d'assurance et expertise médicale"
* #deptinsurancemedicine ^designation[+].language = #nl-BE
* #deptinsurancemedicine ^designation[=].value = "verzekeringsgeneeskunde en medische expertise"
* #deptinsurancemedicine ^designation[+].language = #en
* #deptinsurancemedicine ^designation[=].value = "insurance medicine and medical assessment"
* #deptinsurancemedicine ^designation[+].language = #de
* #deptinsurancemedicine ^designation[=].value = "Versicherungsmedizin und medizinisches Gutachten"
* #deptintensivecare "intensive care"
* #deptintensivecare ^designation[0].language = #fr-BE
* #deptintensivecare ^designation[=].value = "soins intensifs"
* #deptintensivecare ^designation[+].language = #nl-BE
* #deptintensivecare ^designation[=].value = "intensieve zorg"
* #deptintensivecare ^designation[+].language = #en
* #deptintensivecare ^designation[=].value = "intensive care"
* #deptintensivecare ^designation[+].language = #de
* #deptintensivecare ^designation[=].value = "Intensivmedizin"
* #deptintensiveemergencycare "intensive emergency care"
* #deptintensiveemergencycare ^designation[0].language = #fr-BE
* #deptintensiveemergencycare ^designation[=].value = "soins intensifs et d'urgence"
* #deptintensiveemergencycare ^designation[+].language = #nl-BE
* #deptintensiveemergencycare ^designation[=].value = "intensieve zorg en spoedgevallenzorg"
* #deptintensiveemergencycare ^designation[+].language = #en
* #deptintensiveemergencycare ^designation[=].value = "intensive emergency care"
* #deptintensiveemergencycare ^designation[+].language = #de
* #deptintensiveemergencycare ^designation[=].value = "intensive Notfallbetreuung"
* #deptinternalmedicine "internal medicine"
* #deptinternalmedicine ^designation[0].language = #fr-BE
* #deptinternalmedicine ^designation[=].value = "médecine interne"
* #deptinternalmedicine ^designation[+].language = #nl-BE
* #deptinternalmedicine ^designation[=].value = "inwendige geneeskunde"
* #deptinternalmedicine ^designation[+].language = #en
* #deptinternalmedicine ^designation[=].value = "internal medicine"
* #deptinternalmedicine ^designation[+].language = #de
* #deptinternalmedicine ^designation[=].value = "innere Medizin"
* #deptinvitronuclear "in vitro nuclear medicine"
* #deptinvitronuclear ^designation[0].language = #fr-BE
* #deptinvitronuclear ^designation[=].value = "médecine nucléaire in vitro"
* #deptinvitronuclear ^designation[+].language = #nl-BE
* #deptinvitronuclear ^designation[=].value = "nucleaire geneeskunde in vitro"
* #deptinvitronuclear ^designation[+].language = #en
* #deptinvitronuclear ^designation[=].value = "in vitro nuclear medicine"
* #deptinvitronuclear ^designation[+].language = #de
* #deptinvitronuclear ^designation[=].value = "In-Vitro-Nuklearmedizin"
* #deptkinesitherapy "physiotherapy"
* #deptkinesitherapy ^designation[0].language = #fr-BE
* #deptkinesitherapy ^designation[=].value = "kinésithérapie"
* #deptkinesitherapy ^designation[+].language = #nl-BE
* #deptkinesitherapy ^designation[=].value = "kinesitherapie"
* #deptkinesitherapy ^designation[+].language = #en
* #deptkinesitherapy ^designation[=].value = "physiotherapy"
* #deptkinesitherapy ^designation[+].language = #de
* #deptkinesitherapy ^designation[=].value = "Bewegungstherapie"
* #deptlaboratory "laboratory service or department within an organisation"
* #deptlaboratory ^designation[0].language = #fr-BE
* #deptlaboratory ^designation[=].value = "service / département laboratoire au sein d'une organisation"
* #deptlaboratory ^designation[+].language = #nl-BE
* #deptlaboratory ^designation[=].value = "laboratoriumdienst of -afdeling binnen een organisatie"
* #deptlaboratory ^designation[+].language = #en
* #deptlaboratory ^designation[=].value = "laboratory service or department within an organisation"
* #deptlaboratory ^designation[+].language = #de
* #deptlaboratory ^designation[=].value = "Laborabteilung innerhalb einer Organisation"
* #deptlegalmedecine "legal medecine"
* #deptlegalmedecine ^designation[0].language = #fr-BE
* #deptlegalmedecine ^designation[=].value = "médecine légale"
* #deptlegalmedecine ^designation[+].language = #nl-BE
* #deptlegalmedecine ^designation[=].value = "gerechtelijke geneeskunde"
* #deptlegalmedecine ^designation[+].language = #en
* #deptlegalmedecine ^designation[=].value = "legal medecine"
* #deptlegalmedecine ^designation[+].language = #de
* #deptlegalmedecine ^designation[=].value = "Gerichtsmedizin"
* #deptlogopedy "logopedy"
* #deptlogopedy ^designation[0].language = #fr-BE
* #deptlogopedy ^designation[=].value = "logopédie"
* #deptlogopedy ^designation[+].language = #nl-BE
* #deptlogopedy ^designation[=].value = "logopedist"
* #deptlogopedy ^designation[+].language = #en
* #deptlogopedy ^designation[=].value = "logopedy"
* #deptlogopedy ^designation[+].language = #de
* #deptlogopedy ^designation[=].value = "Logopädie"
* #deptmajorburns "major burns center"
* #deptmajorburns ^designation[0].language = #fr-BE
* #deptmajorburns ^designation[=].value = "centre des grands brûlés"
* #deptmajorburns ^designation[+].language = #nl-BE
* #deptmajorburns ^designation[=].value = "brandwondencentrum"
* #deptmajorburns ^designation[+].language = #en
* #deptmajorburns ^designation[=].value = "major burns center"
* #deptmajorburns ^designation[+].language = #de
* #deptmajorburns ^designation[=].value = "Zentrum für Schwerbrandverletzte"
* #deptmanualtherapy "manual therapy"
* #deptmanualtherapy ^designation[0].language = #fr-BE
* #deptmanualtherapy ^designation[=].value = "thérapie manuelle"
* #deptmanualtherapy ^designation[+].language = #nl-BE
* #deptmanualtherapy ^designation[=].value = "manuele therapie"
* #deptmanualtherapy ^designation[+].language = #en
* #deptmanualtherapy ^designation[=].value = "manual therapy"
* #deptmanualtherapy ^designation[+].language = #de
* #deptmanualtherapy ^designation[=].value = "manuelle Therapie"
* #deptmaxillofacialsurgery "maxillofacial surgery"
* #deptmaxillofacialsurgery ^designation[0].language = #fr-BE
* #deptmaxillofacialsurgery ^designation[=].value = "chirurgie maxillofaciale"
* #deptmaxillofacialsurgery ^designation[+].language = #nl-BE
* #deptmaxillofacialsurgery ^designation[=].value = "mond-, kaak- en aangezichtschirurgie"
* #deptmaxillofacialsurgery ^designation[+].language = #en
* #deptmaxillofacialsurgery ^designation[=].value = "maxillofacial surgery"
* #deptmaxillofacialsurgery ^designation[+].language = #de
* #deptmaxillofacialsurgery ^designation[=].value = "Mund-Kiefer-Gesichtschirurgie"
* #deptmedicalmicrobiology "medical microbiology"
* #deptmedicalmicrobiology ^designation[0].language = #fr-BE
* #deptmedicalmicrobiology ^designation[=].value = "microbiologie médicale"
* #deptmedicalmicrobiology ^designation[+].language = #nl-BE
* #deptmedicalmicrobiology ^designation[=].value = "medische microbiologie"
* #deptmedicalmicrobiology ^designation[+].language = #en
* #deptmedicalmicrobiology ^designation[=].value = "medical microbiology"
* #deptmedicalmicrobiology ^designation[+].language = #de
* #deptmedicalmicrobiology ^designation[=].value = "medizinische Mikrobiologie"
* #deptmedicine "internal medecine"
* #deptmedicine ^designation[0].language = #fr-BE
* #deptmedicine ^designation[=].value = "médicine interne"
* #deptmedicine ^designation[+].language = #nl-BE
* #deptmedicine ^designation[=].value = "interne geneeskunde"
* #deptmedicine ^designation[+].language = #en
* #deptmedicine ^designation[=].value = "internal medecine"
* #deptmedicine ^designation[+].language = #de
* #deptmedicine ^designation[=].value = "Innere Medizin"
* #deptmolecularbiology "molecular biology"
* #deptmolecularbiology ^designation[0].language = #fr-BE
* #deptmolecularbiology ^designation[=].value = "biologie moléculaire"
* #deptmolecularbiology ^designation[+].language = #nl-BE
* #deptmolecularbiology ^designation[=].value = "moleculaire biologie"
* #deptmolecularbiology ^designation[+].language = #en
* #deptmolecularbiology ^designation[=].value = "molecular biology"
* #deptmolecularbiology ^designation[+].language = #de
* #deptmolecularbiology ^designation[=].value = "Molekularbiologie"
* #deptneonatalogy "neonatalogy"
* #deptneonatalogy ^designation[0].language = #fr-BE
* #deptneonatalogy ^designation[=].value = "néonatologie"
* #deptneonatalogy ^designation[+].language = #nl-BE
* #deptneonatalogy ^designation[=].value = "neonatologie"
* #deptneonatalogy ^designation[+].language = #en
* #deptneonatalogy ^designation[=].value = "neonatalogy"
* #deptneonatalogy ^designation[+].language = #de
* #deptneonatalogy ^designation[=].value = "Neonatologie"
* #deptnephrology "nephrology"
* #deptnephrology ^designation[0].language = #fr-BE
* #deptnephrology ^designation[=].value = "néphrologie"
* #deptnephrology ^designation[+].language = #nl-BE
* #deptnephrology ^designation[=].value = "nefrologie"
* #deptnephrology ^designation[+].language = #en
* #deptnephrology ^designation[=].value = "nephrology"
* #deptnephrology ^designation[+].language = #de
* #deptnephrology ^designation[=].value = "Nephrologie"
* #deptneurologicalphysiotherapy "neurological physiotherapy"
* #deptneurologicalphysiotherapy ^designation[0].language = #fr-BE
* #deptneurologicalphysiotherapy ^designation[=].value = "kinésithérapie neurologique"
* #deptneurologicalphysiotherapy ^designation[+].language = #nl-BE
* #deptneurologicalphysiotherapy ^designation[=].value = "neurologische kinesitherapie"
* #deptneurologicalphysiotherapy ^designation[+].language = #en
* #deptneurologicalphysiotherapy ^designation[=].value = "neurological physiotherapy"
* #deptneurologicalphysiotherapy ^designation[+].language = #de
* #deptneurologicalphysiotherapy ^designation[=].value = "neurologische Physiotherapie"
* #deptneurology "neurology"
* #deptneurology ^designation[0].language = #fr-BE
* #deptneurology ^designation[=].value = "neurologie"
* #deptneurology ^designation[+].language = #nl-BE
* #deptneurology ^designation[=].value = "neurologie"
* #deptneurology ^designation[+].language = #en
* #deptneurology ^designation[=].value = "neurology"
* #deptneurology ^designation[+].language = #de
* #deptneurology ^designation[=].value = "Neurologie"
* #deptneuropsychiatry "neuropsychiatry"
* #deptneuropsychiatry ^designation[0].language = #fr-BE
* #deptneuropsychiatry ^designation[=].value = "neuropsychiatrie"
* #deptneuropsychiatry ^designation[+].language = #nl-BE
* #deptneuropsychiatry ^designation[=].value = "neuropsychiatrie"
* #deptneuropsychiatry ^designation[+].language = #en
* #deptneuropsychiatry ^designation[=].value = "neuropsychiatry"
* #deptneuropsychiatry ^designation[+].language = #de
* #deptneuropsychiatry ^designation[=].value = "Neuropsychiatrie"
* #deptneurosurgery "neurosurgery"
* #deptneurosurgery ^designation[0].language = #fr-BE
* #deptneurosurgery ^designation[=].value = "neurochirurgie"
* #deptneurosurgery ^designation[+].language = #nl-BE
* #deptneurosurgery ^designation[=].value = "neurochirurgie"
* #deptneurosurgery ^designation[+].language = #en
* #deptneurosurgery ^designation[=].value = "neurosurgery"
* #deptneurosurgery ^designation[+].language = #de
* #deptneurosurgery ^designation[=].value = "Neurochirurgie"
* #deptnonsurgicalaestheticmedicine "non-surgical aesthetic medicine"
* #deptnonsurgicalaestheticmedicine ^designation[0].language = #fr-BE
* #deptnonsurgicalaestheticmedicine ^designation[=].value = "médecine esthétique non chirurgicale"
* #deptnonsurgicalaestheticmedicine ^designation[+].language = #nl-BE
* #deptnonsurgicalaestheticmedicine ^designation[=].value = "niet-heelkundige esthetische geneeskunde"
* #deptnonsurgicalaestheticmedicine ^designation[+].language = #en
* #deptnonsurgicalaestheticmedicine ^designation[=].value = "non-surgical aesthetic medicine"
* #deptnonsurgicalaestheticmedicine ^designation[+].language = #de
* #deptnonsurgicalaestheticmedicine ^designation[=].value = "nicht-chirurgische ästhetische Medizin"
* #deptnte "nose-throat-ear"
* #deptnte ^designation[0].language = #fr-BE
* #deptnte ^designation[=].value = "oto-rhino-laryngologie"
* #deptnte ^designation[+].language = #nl-BE
* #deptnte ^designation[=].value = "neus-keel-oor (nko)"
* #deptnte ^designation[+].language = #en
* #deptnte ^designation[=].value = "nose-throat-ear"
* #deptnte ^designation[+].language = #de
* #deptnte ^designation[=].value = "Hals-Nasen-Ohren-Heilkunde"
* #deptnuclear "nuclear medecine"
* #deptnuclear ^designation[0].language = #fr-BE
* #deptnuclear ^designation[=].value = "médecine nucléaire"
* #deptnuclear ^designation[+].language = #nl-BE
* #deptnuclear ^designation[=].value = "nucleaire geneeskunde"
* #deptnuclear ^designation[+].language = #en
* #deptnuclear ^designation[=].value = "nuclear medecine"
* #deptnuclear ^designation[+].language = #de
* #deptnuclear ^designation[=].value = "Nuklearmedizin"
* #deptnursing "nursing"
* #deptnursing ^designation[0].language = #fr-BE
* #deptnursing ^designation[=].value = "soins infirmiers"
* #deptnursing ^designation[+].language = #nl-BE
* #deptnursing ^designation[=].value = "verpleegkunde"
* #deptnursing ^designation[+].language = #en
* #deptnursing ^designation[=].value = "nursing"
* #deptnursing ^designation[+].language = #de
* #deptnursing ^designation[=].value = "Krankenpflege"
* #deptnutritiondietetics "nutrition dietetics"
* #deptnutritiondietetics ^designation[0].language = #fr-BE
* #deptnutritiondietetics ^designation[=].value = "diététique nutritionnelle"
* #deptnutritiondietetics ^designation[+].language = #nl-BE
* #deptnutritiondietetics ^designation[=].value = "voedingsleer"
* #deptnutritiondietetics ^designation[+].language = #en
* #deptnutritiondietetics ^designation[=].value = "nutrition dietetics"
* #deptnutritiondietetics ^designation[+].language = #de
* #deptnutritiondietetics ^designation[=].value = "Ernährungslehre"
* #deptobstetrics "obstetrics"
* #deptobstetrics ^designation[0].language = #fr-BE
* #deptobstetrics ^designation[=].value = "obstétrique"
* #deptobstetrics ^designation[+].language = #nl-BE
* #deptobstetrics ^designation[=].value = "verloskunde"
* #deptobstetrics ^designation[+].language = #en
* #deptobstetrics ^designation[=].value = "obstetrics"
* #deptobstetrics ^designation[+].language = #de
* #deptobstetrics ^designation[=].value = "Geburtshilfe"
* #deptoccupationalmedicine "occupational medicine"
* #deptoccupationalmedicine ^designation[0].language = #fr-BE
* #deptoccupationalmedicine ^designation[=].value = "médecine du travail"
* #deptoccupationalmedicine ^designation[+].language = #nl-BE
* #deptoccupationalmedicine ^designation[=].value = "arbeidsgeneeskunde"
* #deptoccupationalmedicine ^designation[+].language = #en
* #deptoccupationalmedicine ^designation[=].value = "occupational medicine"
* #deptoccupationalmedicine ^designation[+].language = #de
* #deptoccupationalmedicine ^designation[=].value = "Arbeitsmedizin"
* #deptoccupationaltherapy "occupational therapy"
* #deptoccupationaltherapy ^designation[0].language = #fr-BE
* #deptoccupationaltherapy ^designation[=].value = "ergothérapie"
* #deptoccupationaltherapy ^designation[+].language = #nl-BE
* #deptoccupationaltherapy ^designation[=].value = "ergotherapie"
* #deptoccupationaltherapy ^designation[+].language = #en
* #deptoccupationaltherapy ^designation[=].value = "occupational therapy"
* #deptoccupationaltherapy ^designation[+].language = #de
* #deptoccupationaltherapy ^designation[=].value = "Ergotherapie"
* #deptoncology "oncology"
* #deptoncology ^designation[0].language = #fr-BE
* #deptoncology ^designation[=].value = "oncologie"
* #deptoncology ^designation[+].language = #nl-BE
* #deptoncology ^designation[=].value = "oncologie"
* #deptoncology ^designation[+].language = #en
* #deptoncology ^designation[=].value = "oncology"
* #deptoncology ^designation[+].language = #de
* #deptoncology ^designation[=].value = "Onkologie"
* #deptophtalmology "ophtalmology"
* #deptophtalmology ^designation[0].language = #fr-BE
* #deptophtalmology ^designation[=].value = "ophtalmologie"
* #deptophtalmology ^designation[+].language = #nl-BE
* #deptophtalmology ^designation[=].value = "oftalmologie"
* #deptophtalmology ^designation[+].language = #en
* #deptophtalmology ^designation[=].value = "ophtalmology"
* #deptophtalmology ^designation[+].language = #de
* #deptophtalmology ^designation[=].value = "Augenheilkunde"
* #deptorthodontics "orthodontics"
* #deptorthodontics ^designation[0].language = #fr-BE
* #deptorthodontics ^designation[=].value = "orthodontie"
* #deptorthodontics ^designation[+].language = #nl-BE
* #deptorthodontics ^designation[=].value = "orthodontie"
* #deptorthodontics ^designation[+].language = #en
* #deptorthodontics ^designation[=].value = "orthodontics"
* #deptorthodontics ^designation[+].language = #de
* #deptorthodontics ^designation[=].value = "Kieferorthopädie"
* #deptorthopedy "orthopedy"
* #deptorthopedy ^designation[0].language = #fr-BE
* #deptorthopedy ^designation[=].value = "orthopédie"
* #deptorthopedy ^designation[+].language = #nl-BE
* #deptorthopedy ^designation[=].value = "orthopedie"
* #deptorthopedy ^designation[+].language = #en
* #deptorthopedy ^designation[=].value = "orthopedy"
* #deptorthopedy ^designation[+].language = #de
* #deptorthopedy ^designation[=].value = "Orthopädie"
* #deptorthopticsoptometry "orthoptics optometry"
* #deptorthopticsoptometry ^designation[0].language = #fr-BE
* #deptorthopticsoptometry ^designation[=].value = "orthoptie-optométrie"
* #deptorthopticsoptometry ^designation[+].language = #nl-BE
* #deptorthopticsoptometry ^designation[=].value = "orthoptie-optometrie"
* #deptorthopticsoptometry ^designation[+].language = #en
* #deptorthopticsoptometry ^designation[=].value = "orthoptics optometry"
* #deptorthopticsoptometry ^designation[+].language = #de
* #deptorthopticsoptometry ^designation[=].value = "Orthoptik-Optometrie"
* #deptpalliativecare "palliative care"
* #deptpalliativecare ^designation[0].language = #fr-BE
* #deptpalliativecare ^designation[=].value = "soins palliatifs"
* #deptpalliativecare ^designation[+].language = #nl-BE
* #deptpalliativecare ^designation[=].value = "palliatieve zorg"
* #deptpalliativecare ^designation[+].language = #en
* #deptpalliativecare ^designation[=].value = "palliative care"
* #deptpalliativecare ^designation[+].language = #de
* #deptpalliativecare ^designation[=].value = "Palliativversorgung"
* #deptpediatrichematologyoncology "pediatric hematology and oncology"
* #deptpediatrichematologyoncology ^designation[0].language = #fr-BE
* #deptpediatrichematologyoncology ^designation[=].value = "hématologie et oncologie pédiatrique"
* #deptpediatrichematologyoncology ^designation[+].language = #nl-BE
* #deptpediatrichematologyoncology ^designation[=].value = "pediatrische hematologie en oncologie"
* #deptpediatrichematologyoncology ^designation[+].language = #en
* #deptpediatrichematologyoncology ^designation[=].value = "pediatric hematology and oncology"
* #deptpediatrichematologyoncology ^designation[+].language = #de
* #deptpediatrichematologyoncology ^designation[=].value = "Kinderhämatologie und -Onkologie"
* #deptpediatricintensivecare "pediatric intensive care"
* #deptpediatricintensivecare ^designation[0].language = #fr-BE
* #deptpediatricintensivecare ^designation[=].value = "soins intensifs pédiatriques"
* #deptpediatricintensivecare ^designation[+].language = #nl-BE
* #deptpediatricintensivecare ^designation[=].value = "intensieve zorg voor kinderen"
* #deptpediatricintensivecare ^designation[+].language = #en
* #deptpediatricintensivecare ^designation[=].value = "pediatric intensive care"
* #deptpediatricintensivecare ^designation[+].language = #de
* #deptpediatricintensivecare ^designation[=].value = "Intensivpflege für Kinder"
* #deptpediatricneurology "pediatric neurology"
* #deptpediatricneurology ^designation[0].language = #fr-BE
* #deptpediatricneurology ^designation[=].value = "neurologie pédiatrique"
* #deptpediatricneurology ^designation[+].language = #nl-BE
* #deptpediatricneurology ^designation[=].value = "pediatrische neurologie"
* #deptpediatricneurology ^designation[+].language = #en
* #deptpediatricneurology ^designation[=].value = "pediatric neurology"
* #deptpediatricneurology ^designation[+].language = #de
* #deptpediatricneurology ^designation[=].value = "Kinderneurolgie"
* #deptpediatricphysiotherapy "pediatric physiotherapy"
* #deptpediatricphysiotherapy ^designation[0].language = #fr-BE
* #deptpediatricphysiotherapy ^designation[=].value = "kinésithérapie pédiatrique"
* #deptpediatricphysiotherapy ^designation[+].language = #nl-BE
* #deptpediatricphysiotherapy ^designation[=].value = "pediatrische kinesitherapie"
* #deptpediatricphysiotherapy ^designation[+].language = #en
* #deptpediatricphysiotherapy ^designation[=].value = "pediatric physiotherapy"
* #deptpediatricphysiotherapy ^designation[+].language = #de
* #deptpediatricphysiotherapy ^designation[=].value = "Kinderphysiotherapie"
* #deptpediatricsurgery "pediatric surgery"
* #deptpediatricsurgery ^designation[0].language = #fr-BE
* #deptpediatricsurgery ^designation[=].value = "chirurgie pédiatrique"
* #deptpediatricsurgery ^designation[+].language = #nl-BE
* #deptpediatricsurgery ^designation[=].value = "kinderchirurgie"
* #deptpediatricsurgery ^designation[+].language = #en
* #deptpediatricsurgery ^designation[=].value = "pediatric surgery"
* #deptpediatricsurgery ^designation[+].language = #de
* #deptpediatricsurgery ^designation[=].value = "Kinderchirurgie"
* #deptpediatry "pediatry"
* #deptpediatry ^designation[0].language = #fr-BE
* #deptpediatry ^designation[=].value = "pédiatrie"
* #deptpediatry ^designation[+].language = #nl-BE
* #deptpediatry ^designation[=].value = "pediatrie"
* #deptpediatry ^designation[+].language = #en
* #deptpediatry ^designation[=].value = "pediatry"
* #deptpediatry ^designation[+].language = #de
* #deptpediatry ^designation[=].value = "Pädiatrie"
* #deptperiodontology "periodontology"
* #deptperiodontology ^designation[0].language = #fr-BE
* #deptperiodontology ^designation[=].value = "parodontologie"
* #deptperiodontology ^designation[+].language = #nl-BE
* #deptperiodontology ^designation[=].value = "parodontologie"
* #deptperiodontology ^designation[+].language = #en
* #deptperiodontology ^designation[=].value = "periodontology"
* #deptperiodontology ^designation[+].language = #de
* #deptperiodontology ^designation[=].value = "Parodontologie"
* #deptperioperativecare "perioperative care"
* #deptperioperativecare ^designation[0].language = #fr-BE
* #deptperioperativecare ^designation[=].value = "soins péri-opératoires"
* #deptperioperativecare ^designation[+].language = #nl-BE
* #deptperioperativecare ^designation[=].value = "peri-operatieve zorg"
* #deptperioperativecare ^designation[+].language = #en
* #deptperioperativecare ^designation[=].value = "perioperative care"
* #deptperioperativecare ^designation[+].language = #de
* #deptperioperativecare ^designation[=].value = "perioperative Versorgung"
* #deptpharmacy "pharmacy service or department within an organisation"
* #deptpharmacy ^designation[0].language = #fr-BE
* #deptpharmacy ^designation[=].value = "service / département pharmacie au sein d'une organisation"
* #deptpharmacy ^designation[+].language = #nl-BE
* #deptpharmacy ^designation[=].value = "apotheekdienst of -afdeling binnen een organisatie"
* #deptpharmacy ^designation[+].language = #en
* #deptpharmacy ^designation[=].value = "pharmacy service or department within an organisation"
* #deptpharmacy ^designation[+].language = #de
* #deptpharmacy ^designation[=].value = "Apothekendienst oder -Abteilung innerhalb einer Organisation"
* #deptphysicalmedecine "physical medecine"
* #deptphysicalmedecine ^designation[0].language = #fr-BE
* #deptphysicalmedecine ^designation[=].value = "médecine physique"
* #deptphysicalmedecine ^designation[+].language = #nl-BE
* #deptphysicalmedecine ^designation[=].value = "fysische geneeskunde"
* #deptphysicalmedecine ^designation[+].language = #en
* #deptphysicalmedecine ^designation[=].value = "physical medecine"
* #deptphysicalmedecine ^designation[+].language = #de
* #deptphysicalmedecine ^designation[=].value = "physikalische Medizin"
* #deptphysiotherapy "physiotherapy"
* #deptphysiotherapy ^designation[0].language = #fr-BE
* #deptphysiotherapy ^designation[=].value = "physiothérapie"
* #deptphysiotherapy ^designation[+].language = #nl-BE
* #deptphysiotherapy ^designation[=].value = "fysiotherapie"
* #deptphysiotherapy ^designation[+].language = #en
* #deptphysiotherapy ^designation[=].value = "physiotherapy"
* #deptphysiotherapy ^designation[+].language = #de
* #deptphysiotherapy ^designation[=].value = "Physiotherapie"
* #deptplasticandreparatorysurgery "plastic and reparatory surgery"
* #deptplasticandreparatorysurgery ^designation[0].language = #fr-BE
* #deptplasticandreparatorysurgery ^designation[=].value = "chirurgie esthétique et réparatrice"
* #deptplasticandreparatorysurgery ^designation[+].language = #nl-BE
* #deptplasticandreparatorysurgery ^designation[=].value = "plastische en reconstructieve chirurgie"
* #deptplasticandreparatorysurgery ^designation[+].language = #en
* #deptplasticandreparatorysurgery ^designation[=].value = "plastic and reparatory surgery"
* #deptplasticandreparatorysurgery ^designation[+].language = #de
* #deptplasticandreparatorysurgery ^designation[=].value = "plastisch-rekonstruktive Chirurgie"
* #deptpneumology "pneumology"
* #deptpneumology ^designation[0].language = #fr-BE
* #deptpneumology ^designation[=].value = "pneumologie"
* #deptpneumology ^designation[+].language = #nl-BE
* #deptpneumology ^designation[=].value = "pneumologie"
* #deptpneumology ^designation[+].language = #en
* #deptpneumology ^designation[=].value = "pneumology"
* #deptpneumology ^designation[+].language = #de
* #deptpneumology ^designation[=].value = "Lungenheilkunde"
* #deptpodiatry "podiatry"
* #deptpodiatry ^designation[0].language = #fr-BE
* #deptpodiatry ^designation[=].value = "podiatrie"
* #deptpodiatry ^designation[+].language = #nl-BE
* #deptpodiatry ^designation[=].value = "podiatrie"
* #deptpodiatry ^designation[+].language = #en
* #deptpodiatry ^designation[=].value = "podiatry"
* #deptpodiatry ^designation[+].language = #de
* #deptpodiatry ^designation[=].value = "Podiatrie"
* #deptpodology "podology"
* #deptpodology ^designation[0].language = #fr-BE
* #deptpodology ^designation[=].value = "podologie"
* #deptpodology ^designation[+].language = #nl-BE
* #deptpodology ^designation[=].value = "podologie"
* #deptpodology ^designation[+].language = #en
* #deptpodology ^designation[=].value = "podology"
* #deptpodology ^designation[+].language = #de
* #deptpodology ^designation[=].value = "Podologie"
* #deptpsychiatry "psychiatry"
* #deptpsychiatry ^designation[0].language = #fr-BE
* #deptpsychiatry ^designation[=].value = "psychiatrie"
* #deptpsychiatry ^designation[+].language = #nl-BE
* #deptpsychiatry ^designation[=].value = "psychiatrie"
* #deptpsychiatry ^designation[+].language = #en
* #deptpsychiatry ^designation[=].value = "psychiatry"
* #deptpsychiatry ^designation[+].language = #de
* #deptpsychiatry ^designation[=].value = "Psychiatrie"
* #deptpsychogeriatry "psychogeriatry"
* #deptpsychogeriatry ^designation[0].language = #fr-BE
* #deptpsychogeriatry ^designation[=].value = "psychogériatrie"
* #deptpsychogeriatry ^designation[+].language = #nl-BE
* #deptpsychogeriatry ^designation[=].value = "psychogeriatrie"
* #deptpsychogeriatry ^designation[+].language = #en
* #deptpsychogeriatry ^designation[=].value = "psychogeriatry"
* #deptpsychogeriatry ^designation[+].language = #de
* #deptpsychogeriatry ^designation[=].value = "Psychogeriatrie"
* #deptpsychology "psychology"
* #deptpsychology ^designation[0].language = #fr-BE
* #deptpsychology ^designation[=].value = "psychologie"
* #deptpsychology ^designation[+].language = #nl-BE
* #deptpsychology ^designation[=].value = "psychologie"
* #deptpsychology ^designation[+].language = #en
* #deptpsychology ^designation[=].value = "psychology"
* #deptpsychology ^designation[+].language = #de
* #deptpsychology ^designation[=].value = "Psychologie"
* #deptradiology "radiology"
* #deptradiology ^designation[0].language = #fr-BE
* #deptradiology ^designation[=].value = "radiologie"
* #deptradiology ^designation[+].language = #nl-BE
* #deptradiology ^designation[=].value = "radiologie"
* #deptradiology ^designation[+].language = #en
* #deptradiology ^designation[=].value = "radiology"
* #deptradiology ^designation[+].language = #de
* #deptradiology ^designation[=].value = "Radiologie"
* #deptradiotherapy "radiotherapy"
* #deptradiotherapy ^designation[0].language = #fr-BE
* #deptradiotherapy ^designation[=].value = "radiothérapie"
* #deptradiotherapy ^designation[+].language = #nl-BE
* #deptradiotherapy ^designation[=].value = "radiotherapie"
* #deptradiotherapy ^designation[+].language = #en
* #deptradiotherapy ^designation[=].value = "radiotherapy"
* #deptradiotherapy ^designation[+].language = #de
* #deptradiotherapy ^designation[=].value = "Strahlentherapie"
* #deptradiotherapyoncology "radiation oncology"
* #deptradiotherapyoncology ^designation[0].language = #fr-BE
* #deptradiotherapyoncology ^designation[=].value = "oncologie radiologique"
* #deptradiotherapyoncology ^designation[+].language = #nl-BE
* #deptradiotherapyoncology ^designation[=].value = "bestralingsoncologie"
* #deptradiotherapyoncology ^designation[+].language = #en
* #deptradiotherapyoncology ^designation[=].value = "radiation oncology"
* #deptradiotherapyoncology ^designation[+].language = #de
* #deptradiotherapyoncology ^designation[=].value = "Strahlenonkologie"
* #deptrespiratoryphysiotherapy "respiratory physiotherapy"
* #deptrespiratoryphysiotherapy ^designation[0].language = #fr-BE
* #deptrespiratoryphysiotherapy ^designation[=].value = "kinésithérapie respiratoire"
* #deptrespiratoryphysiotherapy ^designation[+].language = #nl-BE
* #deptrespiratoryphysiotherapy ^designation[=].value = "respiratoire kinesitherapie"
* #deptrespiratoryphysiotherapy ^designation[+].language = #en
* #deptrespiratoryphysiotherapy ^designation[=].value = "respiratory physiotherapy"
* #deptrespiratoryphysiotherapy ^designation[+].language = #de
* #deptrespiratoryphysiotherapy ^designation[=].value = "Atemphysiotherapie"
* #deptrevalidation "revalidation"
* #deptrevalidation ^designation[0].language = #fr-BE
* #deptrevalidation ^designation[=].value = "rééducation"
* #deptrevalidation ^designation[+].language = #nl-BE
* #deptrevalidation ^designation[=].value = "revalidatie"
* #deptrevalidation ^designation[+].language = #en
* #deptrevalidation ^designation[=].value = "revalidation"
* #deptrevalidation ^designation[+].language = #de
* #deptrevalidation ^designation[=].value = "Rehabilitation"
* #deptrheumatology "rheumatology"
* #deptrheumatology ^designation[0].language = #fr-BE
* #deptrheumatology ^designation[=].value = "rhumatologie"
* #deptrheumatology ^designation[+].language = #nl-BE
* #deptrheumatology ^designation[=].value = "reumatologie"
* #deptrheumatology ^designation[+].language = #en
* #deptrheumatology ^designation[=].value = "rheumatology"
* #deptrheumatology ^designation[+].language = #de
* #deptrheumatology ^designation[=].value = "Rheumatologie"
* #deptrhumatology  "rheumatology"
* #deptrhumatology  ^designation[0].language = #fr-BE
* #deptrhumatology  ^designation[=].value = "rhumatologie"
* #deptrhumatology  ^designation[+].language = #nl-BE
* #deptrhumatology  ^designation[=].value = "reumatologie"
* #deptrhumatology  ^designation[+].language = #en
* #deptrhumatology  ^designation[=].value = "rheumatology"
* #deptrhumatology  ^designation[+].language = #de
* #deptrhumatology  ^designation[=].value = "Rheumatologie"
* #deptsenology "senology"
* #deptsenology ^designation[0].language = #fr-BE
* #deptsenology ^designation[=].value = "sénologie"
* #deptsenology ^designation[+].language = #nl-BE
* #deptsenology ^designation[=].value = "senologie"
* #deptsenology ^designation[+].language = #en
* #deptsenology ^designation[=].value = "senology"
* #deptsenology ^designation[+].language = #de
* #deptsenology ^designation[=].value = "Senologie"
* #deptsocialservice "social service"
* #deptsocialservice ^designation[0].language = #fr-BE
* #deptsocialservice ^designation[=].value = "service social"
* #deptsocialservice ^designation[+].language = #nl-BE
* #deptsocialservice ^designation[=].value = "sociale dienst"
* #deptsocialservice ^designation[+].language = #en
* #deptsocialservice ^designation[=].value = "social service"
* #deptsocialservice ^designation[+].language = #de
* #deptsocialservice ^designation[=].value = "Sozialdienst"
* #deptspeechtherapy "speech therapy"
* #deptspeechtherapy ^designation[0].language = #fr-BE
* #deptspeechtherapy ^designation[=].value = "logopédie"
* #deptspeechtherapy ^designation[+].language = #nl-BE
* #deptspeechtherapy ^designation[=].value = "logopedie"
* #deptspeechtherapy ^designation[+].language = #en
* #deptspeechtherapy ^designation[=].value = "speech therapy"
* #deptspeechtherapy ^designation[+].language = #de
* #deptspeechtherapy ^designation[=].value = "Sprachtherapie"
* #deptsportsmedecine "sports medecine"
* #deptsportsmedecine ^designation[0].language = #fr-BE
* #deptsportsmedecine ^designation[=].value = "médecine des sports"
* #deptsportsmedecine ^designation[+].language = #nl-BE
* #deptsportsmedecine ^designation[=].value = "sportgeneeskunde"
* #deptsportsmedecine ^designation[+].language = #en
* #deptsportsmedecine ^designation[=].value = "sports medecine"
* #deptsportsmedecine ^designation[+].language = #de
* #deptsportsmedecine ^designation[=].value = "Sportmedizin"
* #deptstomatology "stomatology"
* #deptstomatology ^designation[0].language = #fr-BE
* #deptstomatology ^designation[=].value = "stomatologie"
* #deptstomatology ^designation[+].language = #nl-BE
* #deptstomatology ^designation[=].value = "stomatologie"
* #deptstomatology ^designation[+].language = #en
* #deptstomatology ^designation[=].value = "stomatology"
* #deptstomatology ^designation[+].language = #de
* #deptstomatology ^designation[=].value = "Stomatologie"
* #deptsurgery "surgery"
* #deptsurgery ^designation[0].language = #fr-BE
* #deptsurgery ^designation[=].value = "chirurgie"
* #deptsurgery ^designation[+].language = #nl-BE
* #deptsurgery ^designation[=].value = "chirurgie"
* #deptsurgery ^designation[+].language = #en
* #deptsurgery ^designation[=].value = "surgery"
* #deptsurgery ^designation[+].language = #de
* #deptsurgery ^designation[=].value = "Chirurgie"
* #deptthoracicsurgery "thoracic surgery"
* #deptthoracicsurgery ^designation[0].language = #fr-BE
* #deptthoracicsurgery ^designation[=].value = "chirurgie thoracique"
* #deptthoracicsurgery ^designation[+].language = #nl-BE
* #deptthoracicsurgery ^designation[=].value = "thoraxchirurgie"
* #deptthoracicsurgery ^designation[+].language = #en
* #deptthoracicsurgery ^designation[=].value = "thoracic surgery"
* #deptthoracicsurgery ^designation[+].language = #de
* #deptthoracicsurgery ^designation[=].value = "Thoraxchirurgie"
* #depttoxicology "toxicology"
* #depttoxicology ^designation[0].language = #fr-BE
* #depttoxicology ^designation[=].value = "toxicologie"
* #depttoxicology ^designation[+].language = #nl-BE
* #depttoxicology ^designation[=].value = "toxicologie"
* #depttoxicology ^designation[+].language = #en
* #depttoxicology ^designation[=].value = "toxicology"
* #depttoxicology ^designation[+].language = #de
* #depttoxicology ^designation[=].value = "Toxikologie"
* #depttropicalmedecine "tropical medecine"
* #depttropicalmedecine ^designation[0].language = #fr-BE
* #depttropicalmedecine ^designation[=].value = "médecine tropicale"
* #depttropicalmedecine ^designation[+].language = #nl-BE
* #depttropicalmedecine ^designation[=].value = "tropische geneeskunde"
* #depttropicalmedecine ^designation[+].language = #en
* #depttropicalmedecine ^designation[=].value = "tropical medecine"
* #depttropicalmedecine ^designation[+].language = #de
* #depttropicalmedecine ^designation[=].value = "Tropenmedizin"
* #depturology "urology"
* #depturology ^designation[0].language = #fr-BE
* #depturology ^designation[=].value = "urologie"
* #depturology ^designation[+].language = #nl-BE
* #depturology ^designation[=].value = "urologie"
* #depturology ^designation[+].language = #en
* #depturology ^designation[=].value = "urology"
* #depturology ^designation[+].language = #de
* #depturology ^designation[=].value = "Urologie"
* #deptvascularsurgery "vascular surgery"
* #deptvascularsurgery ^designation[0].language = #fr-BE
* #deptvascularsurgery ^designation[=].value = "chirurgie vasculaire"
* #deptvascularsurgery ^designation[+].language = #nl-BE
* #deptvascularsurgery ^designation[=].value = "vasculaire chirurgie"
* #deptvascularsurgery ^designation[+].language = #en
* #deptvascularsurgery ^designation[=].value = "vascular surgery"
* #deptvascularsurgery ^designation[+].language = #de
* #deptvascularsurgery ^designation[=].value = "vaskuläre Chirurgie"
* #deptvisceraldigestiveabdominalsurgery "visceral digestive abdominal surgery"
* #deptvisceraldigestiveabdominalsurgery ^designation[0].language = #fr-BE
* #deptvisceraldigestiveabdominalsurgery ^designation[=].value = "chirurgie abdominale, digestive et viscérale"
* #deptvisceraldigestiveabdominalsurgery ^designation[+].language = #nl-BE
* #deptvisceraldigestiveabdominalsurgery ^designation[=].value = "digestieve/viscerale chirurgie/buikchirurgie"
* #deptvisceraldigestiveabdominalsurgery ^designation[+].language = #en
* #deptvisceraldigestiveabdominalsurgery ^designation[=].value = "visceral digestive abdominal surgery"
* #deptvisceraldigestiveabdominalsurgery ^designation[+].language = #de
* #deptvisceraldigestiveabdominalsurgery ^designation[=].value = "Viszeralchirurgie/abdominale Chirurgie/Bauchchirurgie"
* #groupofnurses "group of nurses"
* #groupofnurses ^designation[0].language = #fr-BE
* #groupofnurses ^designation[=].value = "regroupement d'infirmiers"
* #groupofnurses ^designation[+].language = #nl-BE
* #groupofnurses ^designation[=].value = "groepering van verplegers"
* #groupofnurses ^designation[+].language = #en
* #groupofnurses ^designation[=].value = "group of nurses"
* #groupofnurses ^designation[+].language = #de
* #groupofnurses ^designation[=].value = "Krankenpflegeverein"
* #groupofphysiciansdifferentaddress "group of physicians different address"
* #groupofphysiciansdifferentaddress ^designation[0].language = #fr-BE
* #groupofphysiciansdifferentaddress ^designation[=].value = "regroupement de médecins adresse différente"
* #groupofphysiciansdifferentaddress ^designation[+].language = #nl-BE
* #groupofphysiciansdifferentaddress ^designation[=].value = "groepering van artsen verschillend adres"
* #groupofphysiciansdifferentaddress ^designation[+].language = #en
* #groupofphysiciansdifferentaddress ^designation[=].value = "group of physicians different address"
* #groupofphysiciansdifferentaddress ^designation[+].language = #de
* #groupofphysiciansdifferentaddress ^designation[=].value = "Gruppierung von Ärzten andere Adresse"
* #groupofphysicianssameaddress "group of physicians same address"
* #groupofphysicianssameaddress ^designation[0].language = #fr-BE
* #groupofphysicianssameaddress ^designation[=].value = "regroupement de médecins même adresse"
* #groupofphysicianssameaddress ^designation[+].language = #nl-BE
* #groupofphysicianssameaddress ^designation[=].value = "groepering van artsen zelfde adres"
* #groupofphysicianssameaddress ^designation[+].language = #en
* #groupofphysicianssameaddress ^designation[=].value = "group of physicians same address"
* #groupofphysicianssameaddress ^designation[+].language = #de
* #groupofphysicianssameaddress ^designation[=].value = "Gruppierung von Ärzten gleiche Adresse"
* #guardpost "duty post"
* #guardpost ^designation[0].language = #fr-BE
* #guardpost ^designation[=].value = "poste de garde"
* #guardpost ^designation[+].language = #nl-BE
* #guardpost ^designation[=].value = "wachtpost"
* #guardpost ^designation[+].language = #en
* #guardpost ^designation[=].value = "duty post"
* #guardpost ^designation[+].language = #de
* #guardpost ^designation[=].value = "Wachposten"
* #hub "hub"
* #hub ^designation[0].language = #fr-BE
* #hub ^designation[=].value = "hub"
* #hub ^designation[+].language = #nl-BE
* #hub ^designation[=].value = "hub"
* #hub ^designation[+].language = #en
* #hub ^designation[=].value = "hub"
* #hub ^designation[+].language = #de
* #hub ^designation[=].value = "Hub"
* #orghospital "hospital"
* #orghospital ^designation[0].language = #fr-BE
* #orghospital ^designation[=].value = "hôpital"
* #orghospital ^designation[+].language = #nl-BE
* #orghospital ^designation[=].value = "ziekenhuis"
* #orghospital ^designation[+].language = #en
* #orghospital ^designation[=].value = "hospital"
* #orghospital ^designation[+].language = #de
* #orghospital ^designation[=].value = "Krankenhaus"
* #orginsurance "insurance"
* #orginsurance ^designation[0].language = #fr-BE
* #orginsurance ^designation[=].value = "assurance"
* #orginsurance ^designation[+].language = #nl-BE
* #orginsurance ^designation[=].value = "verzekering"
* #orginsurance ^designation[+].language = #en
* #orginsurance ^designation[=].value = "insurance"
* #orginsurance ^designation[+].language = #de
* #orginsurance ^designation[=].value = "Versicherung"
* #orglaboratory "independent laboratory"
* #orglaboratory ^designation[0].language = #fr-BE
* #orglaboratory ^designation[=].value = "laboratoire indépendant"
* #orglaboratory ^designation[+].language = #nl-BE
* #orglaboratory ^designation[=].value = "onafhankelijk laboratorium"
* #orglaboratory ^designation[+].language = #en
* #orglaboratory ^designation[=].value = "independent laboratory"
* #orglaboratory ^designation[+].language = #de
* #orglaboratory ^designation[=].value = "Unabhängiges Laboratorium"
* #orgpharmacy "independent pharmacy"
* #orgpharmacy ^designation[0].language = #fr-BE
* #orgpharmacy ^designation[=].value = "pharmacie indépendante"
* #orgpharmacy ^designation[+].language = #nl-BE
* #orgpharmacy ^designation[=].value = "onafhankelijke apotheek"
* #orgpharmacy ^designation[+].language = #en
* #orgpharmacy ^designation[=].value = "independent pharmacy"
* #orgpharmacy ^designation[+].language = #de
* #orgpharmacy ^designation[=].value = "Unabhängige Apotheke"
* #orgpolyclinic "polyclinic"
* #orgpolyclinic ^designation[0].language = #fr-BE
* #orgpolyclinic ^designation[=].value = "polyclinique"
* #orgpolyclinic ^designation[+].language = #nl-BE
* #orgpolyclinic ^designation[=].value = "polikliniek"
* #orgpolyclinic ^designation[+].language = #en
* #orgpolyclinic ^designation[=].value = "polyclinic"
* #orgpolyclinic ^designation[+].language = #de
* #orgpolyclinic ^designation[=].value = "Poliklinik"
* #orgpractice "practice"
* #orgpractice ^designation[0].language = #fr-BE
* #orgpractice ^designation[=].value = "cabinet"
* #orgpractice ^designation[+].language = #nl-BE
* #orgpractice ^designation[=].value = "praktijk"
* #orgpractice ^designation[+].language = #en
* #orgpractice ^designation[=].value = "practice"
* #orgpractice ^designation[+].language = #de
* #orgpractice ^designation[=].value = "Praxis"
* #orgprevention "prevention service"
* #orgprevention ^designation[0].language = #fr-BE
* #orgprevention ^designation[=].value = "service de prévention"
* #orgprevention ^designation[+].language = #nl-BE
* #orgprevention ^designation[=].value = "preventiedienst"
* #orgprevention ^designation[+].language = #en
* #orgprevention ^designation[=].value = "prevention service"
* #orgprevention ^designation[+].language = #de
* #orgprevention ^designation[=].value = "Präventionsdienst"
* #orgprimaryhealthcarecenter "primary health care center"
* #orgprimaryhealthcarecenter ^designation[0].language = #fr-BE
* #orgprimaryhealthcarecenter ^designation[=].value = "maison médicale"
* #orgprimaryhealthcarecenter ^designation[+].language = #nl-BE
* #orgprimaryhealthcarecenter ^designation[=].value = "medisch huis"
* #orgprimaryhealthcarecenter ^designation[+].language = #en
* #orgprimaryhealthcarecenter ^designation[=].value = "primary health care center"
* #orgprimaryhealthcarecenter ^designation[+].language = #de
* #orgprimaryhealthcarecenter ^designation[=].value = "Gesundheitspflege der ersten Linie"
* #orgpsychiatriccarehome "psychiatric care home"
* #orgpsychiatriccarehome ^designation[0].language = #fr-BE
* #orgpsychiatriccarehome ^designation[=].value = "maison de soins psychiatriques"
* #orgpsychiatriccarehome ^designation[+].language = #nl-BE
* #orgpsychiatriccarehome ^designation[=].value = "psychiatrische verzorgingstehuis"
* #orgpsychiatriccarehome ^designation[+].language = #en
* #orgpsychiatriccarehome ^designation[=].value = "psychiatric care home"
* #orgpsychiatriccarehome ^designation[+].language = #de
* #orgpsychiatriccarehome ^designation[=].value = "Psychiatrisches Pflegeheim"
* #orgpublichealth "public health organisation"
* #orgpublichealth ^designation[0].language = #fr-BE
* #orgpublichealth ^designation[=].value = "service public de santé"
* #orgpublichealth ^designation[+].language = #nl-BE
* #orgpublichealth ^designation[=].value = "openbare gezondheidsdienst"
* #orgpublichealth ^designation[+].language = #en
* #orgpublichealth ^designation[=].value = "public health organisation"
* #orgpublichealth ^designation[+].language = #de
* #orgpublichealth ^designation[=].value = "Gesundheitsbehörde"
* #orgretirementhome "retirement home"
* #orgretirementhome ^designation[0].language = #fr-BE
* #orgretirementhome ^designation[=].value = "maison de repos"
* #orgretirementhome ^designation[+].language = #nl-BE
* #orgretirementhome ^designation[=].value = "woonzorgcentrum"
* #orgretirementhome ^designation[+].language = #en
* #orgretirementhome ^designation[=].value = "retirement home"
* #orgretirementhome ^designation[+].language = #de
* #orgretirementhome ^designation[=].value = "Seniorenwohnheim"
* #orgrevalidationcenter "revalidation center"
* #orgrevalidationcenter ^designation[0].language = #fr-BE
* #orgrevalidationcenter ^designation[=].value = "centre de revalidation"
* #orgrevalidationcenter ^designation[+].language = #nl-BE
* #orgrevalidationcenter ^designation[=].value = "revalidatiecentrum"
* #orgrevalidationcenter ^designation[+].language = #en
* #orgrevalidationcenter ^designation[=].value = "revalidation center"
* #orgrevalidationcenter ^designation[+].language = #de
* #orgrevalidationcenter ^designation[=].value = "Rehabilitationszentrum"
* #orgshelteredliving "sheltered living"
* #orgshelteredliving ^designation[0].language = #fr-BE
* #orgshelteredliving ^designation[=].value = "initiative d'habitation protégée"
* #orgshelteredliving ^designation[+].language = #nl-BE
* #orgshelteredliving ^designation[=].value = "initiatief voor beschut wonen"
* #orgshelteredliving ^designation[+].language = #en
* #orgshelteredliving ^designation[=].value = "sheltered living"
* #orgshelteredliving ^designation[+].language = #de
* #orgshelteredliving ^designation[=].value = "betreutes Wohnen"
* #patient "patient"
* #patient ^designation[0].language = #fr-BE
* #patient ^designation[=].value = "patient"
* #patient ^designation[+].language = #nl-BE
* #patient ^designation[=].value = "patiënt"
* #patient ^designation[+].language = #en
* #patient ^designation[=].value = "patient"
* #patient ^designation[+].language = #de
* #patient ^designation[=].value = "Patient"
* #persabdpelvrehabandperinatalphysiotherapist "abdomino-pelvic and perinatal physiotherapist"
* #persabdpelvrehabandperinatalphysiotherapist ^designation[0].language = #fr-BE
* #persabdpelvrehabandperinatalphysiotherapist ^designation[=].value = "kinésithérapeute périnatal et rééducation abdomino-pelvienne"
* #persabdpelvrehabandperinatalphysiotherapist ^designation[+].language = #nl-BE
* #persabdpelvrehabandperinatalphysiotherapist ^designation[=].value = "buik-bekkenrevalidatie en perinatale kinesitherapeut"
* #persabdpelvrehabandperinatalphysiotherapist ^designation[+].language = #en
* #persabdpelvrehabandperinatalphysiotherapist ^designation[=].value = "abdomino-pelvic and perinatal physiotherapist"
* #persabdpelvrehabandperinatalphysiotherapist ^designation[+].language = #de
* #persabdpelvrehabandperinatalphysiotherapist ^designation[=].value = "Bauch-, Becken- und Perinatal-Physiotherapeut"
* #persadministrative "administrative staff"
* #persadministrative ^designation[0].language = #fr-BE
* #persadministrative ^designation[=].value = "personnel administratif"
* #persadministrative ^designation[+].language = #nl-BE
* #persadministrative ^designation[=].value = "administratieve medewerker"
* #persadministrative ^designation[+].language = #en
* #persadministrative ^designation[=].value = "administrative staff"
* #persadministrative ^designation[+].language = #de
* #persadministrative ^designation[=].value = "Büroangestellte(r)"
* #persadultpsychiatrist "adult psychiatrist"
* #persadultpsychiatrist ^designation[0].language = #fr-BE
* #persadultpsychiatrist ^designation[=].value = "psychiatre pour adultes"
* #persadultpsychiatrist ^designation[+].language = #nl-BE
* #persadultpsychiatrist ^designation[=].value = "volwassenpsychiater"
* #persadultpsychiatrist ^designation[+].language = #en
* #persadultpsychiatrist ^designation[=].value = "adult psychiatrist"
* #persadultpsychiatrist ^designation[+].language = #de
* #persadultpsychiatrist ^designation[=].value = "Erwachsenenpsychiater"
* #persaestheticsurger "aesthetic surgeon"
* #persaestheticsurger ^designation[0].language = #fr-BE
* #persaestheticsurger ^designation[=].value = "chirurgien plastique reconstructive et esthétique"
* #persaestheticsurger ^designation[+].language = #nl-BE
* #persaestheticsurger ^designation[=].value = "plastisch, reconstructief en esthetisch chirurg"
* #persaestheticsurger ^designation[+].language = #en
* #persaestheticsurger ^designation[=].value = "aesthetic surgeon"
* #persaestheticsurger ^designation[+].language = #de
* #persaestheticsurger ^designation[=].value = "plastischer, rekonstruktiver und ästhetischer Chirurg"
* #persambulancedriver "ambulance driver for non-emergency patient transport"
* #persambulancedriver ^designation[0].language = #fr-BE
* #persambulancedriver ^designation[=].value = "ambulancier de transport non urgent de patients"
* #persambulancedriver ^designation[+].language = #nl-BE
* #persambulancedriver ^designation[=].value = "ambulancier niet dringend patiëntenvervoer"
* #persambulancedriver ^designation[+].language = #en
* #persambulancedriver ^designation[=].value = "ambulance driver for non-emergency patient transport"
* #persambulancedriver ^designation[+].language = #de
* #persambulancedriver ^designation[=].value = "Sanitäter-Krankenwagenfahrer im nicht-dringenden Krankentransport"
* #persambulancefirstaid "ambulance first aid"
* #persambulancefirstaid ^designation[0].language = #fr-BE
* #persambulancefirstaid ^designation[=].value = "ambulance premier secours"
* #persambulancefirstaid ^designation[+].language = #nl-BE
* #persambulancefirstaid ^designation[=].value = "ambulance eerste hulp"
* #persambulancefirstaid ^designation[+].language = #en
* #persambulancefirstaid ^designation[=].value = "ambulance first aid"
* #persambulancefirstaid ^designation[+].language = #de
* #persambulancefirstaid ^designation[=].value = "Krankenwagen erste Hilfe"
* #persanathomopathologist "anathomopathologist"
* #persanathomopathologist ^designation[0].language = #fr-BE
* #persanathomopathologist ^designation[=].value = "anatomo-pathologiste"
* #persanathomopathologist ^designation[+].language = #nl-BE
* #persanathomopathologist ^designation[=].value = "anatoom-patholoog"
* #persanathomopathologist ^designation[+].language = #en
* #persanathomopathologist ^designation[=].value = "anathomopathologist"
* #persanathomopathologist ^designation[+].language = #de
* #persanathomopathologist ^designation[=].value = "Anatomopathologe"
* #persanesthesistandresuscitation "anesthesist reanimator"
* #persanesthesistandresuscitation ^designation[0].language = #fr-BE
* #persanesthesistandresuscitation ^designation[=].value = "anesthésiste-réanimateur"
* #persanesthesistandresuscitation ^designation[+].language = #nl-BE
* #persanesthesistandresuscitation ^designation[=].value = "anesthesist-reanimeerder"
* #persanesthesistandresuscitation ^designation[+].language = #en
* #persanesthesistandresuscitation ^designation[=].value = "anesthesist reanimator"
* #persanesthesistandresuscitation ^designation[+].language = #de
* #persanesthesistandresuscitation ^designation[=].value = "Anästhesist-Reanimator"
* #persappliedpsychbachelor "bachelor in applied psychology"
* #persappliedpsychbachelor ^designation[0].language = #fr-BE
* #persappliedpsychbachelor ^designation[=].value = "bachelier en psychologie appliquée"
* #persappliedpsychbachelor ^designation[+].language = #nl-BE
* #persappliedpsychbachelor ^designation[=].value = "bachelor in de toegepaste psychologie"
* #persappliedpsychbachelor ^designation[+].language = #en
* #persappliedpsychbachelor ^designation[=].value = "bachelor in applied psychology"
* #persappliedpsychbachelor ^designation[+].language = #de
* #persappliedpsychbachelor ^designation[=].value = "Bachelor Angewandte Psychologie"
* #persaudician "audician"
* #persaudician ^designation[0].language = #fr-BE
* #persaudician ^designation[=].value = "audicien"
* #persaudician ^designation[+].language = #nl-BE
* #persaudician ^designation[=].value = "audicien"
* #persaudician ^designation[+].language = #en
* #persaudician ^designation[=].value = "audician"
* #persaudician ^designation[+].language = #de
* #persaudician ^designation[=].value = "Hörgeräteakustiker"
* #persaudiologist "audiologist"
* #persaudiologist ^designation[0].language = #fr-BE
* #persaudiologist ^designation[=].value = "audiologue"
* #persaudiologist ^designation[+].language = #nl-BE
* #persaudiologist ^designation[=].value = "audioloog"
* #persaudiologist ^designation[+].language = #en
* #persaudiologist ^designation[=].value = "audiologist"
* #persaudiologist ^designation[+].language = #de
* #persaudiologist ^designation[=].value = "Audiologe"
* #persbiologist "medical laboratory technician"
* #persbiologist ^designation[0].language = #fr-BE
* #persbiologist ^designation[=].value = "technicien de laboratoire médical"
* #persbiologist ^designation[+].language = #nl-BE
* #persbiologist ^designation[=].value = "medisch laboratoriumtechnoloog"
* #persbiologist ^designation[+].language = #en
* #persbiologist ^designation[=].value = "medical laboratory technician"
* #persbiologist ^designation[+].language = #de
* #persbiologist ^designation[=].value = "Medizinischer Labortechniker"
* #perscardiologist "cardiologist"
* #perscardiologist ^designation[0].language = #fr-BE
* #perscardiologist ^designation[=].value = "cardiologue"
* #perscardiologist ^designation[+].language = #nl-BE
* #perscardiologist ^designation[=].value = "cardioloog"
* #perscardiologist ^designation[+].language = #en
* #perscardiologist ^designation[=].value = "cardiologist"
* #perscardiologist ^designation[+].language = #de
* #perscardiologist ^designation[=].value = "Kardiologe"
* #perscardiovascularphysiotherapist "cardiovascular physiotherapist"
* #perscardiovascularphysiotherapist ^designation[0].language = #fr-BE
* #perscardiovascularphysiotherapist ^designation[=].value = "kinésithérapeute cardiovasculaire"
* #perscardiovascularphysiotherapist ^designation[+].language = #nl-BE
* #perscardiovascularphysiotherapist ^designation[=].value = "cardiovasculaire kinesitherapeut"
* #perscardiovascularphysiotherapist ^designation[+].language = #en
* #perscardiovascularphysiotherapist ^designation[=].value = "cardiovascular physiotherapist"
* #perscardiovascularphysiotherapist ^designation[+].language = #de
* #perscardiovascularphysiotherapist ^designation[=].value = "kardiovaskulärer Physiotherapeut"
* #perscaregiver  "caregiver"
* #perscaregiver  ^designation[0].language = #fr-BE
* #perscaregiver  ^designation[=].value = "soignant informel"
* #perscaregiver  ^designation[+].language = #nl-BE
* #perscaregiver  ^designation[=].value = "mantelzorger"
* #perscaregiver  ^designation[+].language = #en
* #perscaregiver  ^designation[=].value = "caregiver"
* #perscaregiver  ^designation[+].language = #de
* #perscaregiver  ^designation[=].value = "Pflegeperson"
* #perschildandadolescentpsychiatrist "child and adolescent psychiatrist"
* #perschildandadolescentpsychiatrist ^designation[0].language = #fr-BE
* #perschildandadolescentpsychiatrist ^designation[=].value = "psychiatre pour enfants et adolescents"
* #perschildandadolescentpsychiatrist ^designation[+].language = #nl-BE
* #perschildandadolescentpsychiatrist ^designation[=].value = "kinder- en jeugdpsychiater"
* #perschildandadolescentpsychiatrist ^designation[+].language = #en
* #perschildandadolescentpsychiatrist ^designation[=].value = "child and adolescent psychiatrist"
* #perschildandadolescentpsychiatrist ^designation[+].language = #de
* #perschildandadolescentpsychiatrist ^designation[=].value = "Kinder- und Jugendpsychiater"
* #persclinialhematologist "clinical hematologist"
* #persclinialhematologist ^designation[0].language = #fr-BE
* #persclinialhematologist ^designation[=].value = "hématologue clinique"
* #persclinialhematologist ^designation[+].language = #nl-BE
* #persclinialhematologist ^designation[=].value = "klinische hematoloog"
* #persclinialhematologist ^designation[+].language = #en
* #persclinialhematologist ^designation[=].value = "clinical hematologist"
* #persclinialhematologist ^designation[+].language = #de
* #persclinialhematologist ^designation[=].value = "klinischer Hämatologe"
* #persclinicalbiologist "clinical biologist"
* #persclinicalbiologist ^designation[0].language = #fr-BE
* #persclinicalbiologist ^designation[=].value = "biologiste clinique"
* #persclinicalbiologist ^designation[+].language = #nl-BE
* #persclinicalbiologist ^designation[=].value = "klinisch bioloog"
* #persclinicalbiologist ^designation[+].language = #en
* #persclinicalbiologist ^designation[=].value = "clinical biologist"
* #persclinicalbiologist ^designation[+].language = #de
* #persclinicalbiologist ^designation[=].value = "klinischer Biologe"
* #persclinicalinfectiologist "clinical infectiologist"
* #persclinicalinfectiologist ^designation[0].language = #fr-BE
* #persclinicalinfectiologist ^designation[=].value = "infectiologue clinicien"
* #persclinicalinfectiologist ^designation[+].language = #nl-BE
* #persclinicalinfectiologist ^designation[=].value = "klinische infectioloog"
* #persclinicalinfectiologist ^designation[+].language = #en
* #persclinicalinfectiologist ^designation[=].value = "clinical infectiologist"
* #persclinicalinfectiologist ^designation[+].language = #de
* #persclinicalinfectiologist ^designation[=].value = "klinischer Infektiologe"
* #persclinicalorthopedagogist "clinical orthopedagogist"
* #persclinicalorthopedagogist ^designation[0].language = #fr-BE
* #persclinicalorthopedagogist ^designation[=].value = "orthopédagogue clinique"
* #persclinicalorthopedagogist ^designation[+].language = #nl-BE
* #persclinicalorthopedagogist ^designation[=].value = "klinisch orthopedagoog"
* #persclinicalorthopedagogist ^designation[+].language = #en
* #persclinicalorthopedagogist ^designation[=].value = "clinical orthopedagogist"
* #persclinicalorthopedagogist ^designation[+].language = #de
* #persclinicalorthopedagogist ^designation[=].value = "klinischer Orthopädagoge"
* #persclinicalpsychologist "clinical psychologist"
* #persclinicalpsychologist ^designation[0].language = #fr-BE
* #persclinicalpsychologist ^designation[=].value = "psychologue clinicien"
* #persclinicalpsychologist ^designation[+].language = #nl-BE
* #persclinicalpsychologist ^designation[=].value = "klinisch psycholoog"
* #persclinicalpsychologist ^designation[+].language = #en
* #persclinicalpsychologist ^designation[=].value = "clinical psychologist"
* #persclinicalpsychologist ^designation[+].language = #de
* #persclinicalpsychologist ^designation[=].value = "klinischer Psychologe"
* #persdentalhygienist "dental hygienist"
* #persdentalhygienist ^designation[0].language = #fr-BE
* #persdentalhygienist ^designation[=].value = "hygiéniste bucco-dentaire"
* #persdentalhygienist ^designation[+].language = #nl-BE
* #persdentalhygienist ^designation[=].value = "mondhygiënist"
* #persdentalhygienist ^designation[+].language = #en
* #persdentalhygienist ^designation[=].value = "dental hygienist"
* #persdentalhygienist ^designation[+].language = #de
* #persdentalhygienist ^designation[=].value = "Dentalhygieniker"
* #persdentist "dentist"
* #persdentist ^designation[0].language = #fr-BE
* #persdentist ^designation[=].value = "dentiste"
* #persdentist ^designation[+].language = #nl-BE
* #persdentist ^designation[=].value = "tandarts"
* #persdentist ^designation[+].language = #en
* #persdentist ^designation[=].value = "dentist"
* #persdentist ^designation[+].language = #de
* #persdentist ^designation[=].value = "Zahnarzt"
* #persdermatovenereologist "dermato venereologist"
* #persdermatovenereologist ^designation[0].language = #fr-BE
* #persdermatovenereologist ^designation[=].value = "dermato-vénéréologue"
* #persdermatovenereologist ^designation[+].language = #nl-BE
* #persdermatovenereologist ^designation[=].value = "dermato-venereoloog"
* #persdermatovenereologist ^designation[+].language = #en
* #persdermatovenereologist ^designation[=].value = "dermato venereologist"
* #persdermatovenereologist ^designation[+].language = #de
* #persdermatovenereologist ^designation[=].value = "Dermato-Venerologe"
* #persdiabeticeducator "diabetis educator"
* #persdiabeticeducator ^designation[0].language = #fr-BE
* #persdiabeticeducator ^designation[=].value = "éducateur diabétique"
* #persdiabeticeducator ^designation[+].language = #nl-BE
* #persdiabeticeducator ^designation[=].value = "diabeteseducator"
* #persdiabeticeducator ^designation[+].language = #en
* #persdiabeticeducator ^designation[=].value = "diabetis educator"
* #persdiabeticeducator ^designation[+].language = #de
* #persdiabeticeducator ^designation[=].value = "Diabetesberater"
* #persdiabetologist "diabetologist"
* #persdiabetologist ^designation[0].language = #fr-BE
* #persdiabetologist ^designation[=].value = "diabétologue"
* #persdiabetologist ^designation[+].language = #nl-BE
* #persdiabetologist ^designation[=].value = "diabetoloog"
* #persdiabetologist ^designation[+].language = #en
* #persdiabetologist ^designation[=].value = "diabetologist"
* #persdiabetologist ^designation[+].language = #de
* #persdiabetologist ^designation[=].value = "Diabetologe"
* #persdietician "dietician"
* #persdietician ^designation[0].language = #fr-BE
* #persdietician ^designation[=].value = "diététicien"
* #persdietician ^designation[+].language = #nl-BE
* #persdietician ^designation[=].value = "diëtist"
* #persdietician ^designation[+].language = #en
* #persdietician ^designation[=].value = "dietician"
* #persdietician ^designation[+].language = #de
* #persdietician ^designation[=].value = "Diätist"
* #perseducator "educator"
* #perseducator ^designation[0].language = #fr-BE
* #perseducator ^designation[=].value = "éducateur"
* #perseducator ^designation[+].language = #nl-BE
* #perseducator ^designation[=].value = "opvoeder"
* #perseducator ^designation[+].language = #en
* #perseducator ^designation[=].value = "educator"
* #perseducator ^designation[+].language = #de
* #perseducator ^designation[=].value = "Erzieher"
* #persemergencyphycisian "emergency physician"
* #persemergencyphycisian ^designation[0].language = #fr-BE
* #persemergencyphycisian ^designation[=].value = "médecin urgentiste"
* #persemergencyphycisian ^designation[+].language = #nl-BE
* #persemergencyphycisian ^designation[=].value = "spoedarts"
* #persemergencyphycisian ^designation[+].language = #en
* #persemergencyphycisian ^designation[=].value = "emergency physician"
* #persemergencyphycisian ^designation[+].language = #de
* #persemergencyphycisian ^designation[=].value = "Notarzt"
* #persendocrinodiabetologist "endocrino-diabetologist"
* #persendocrinodiabetologist ^designation[0].language = #fr-BE
* #persendocrinodiabetologist ^designation[=].value = "endocrino-diabétologue"
* #persendocrinodiabetologist ^designation[+].language = #nl-BE
* #persendocrinodiabetologist ^designation[=].value = "endocrinoloog diabetoloog"
* #persendocrinodiabetologist ^designation[+].language = #en
* #persendocrinodiabetologist ^designation[=].value = "endocrino-diabetologist"
* #persendocrinodiabetologist ^designation[+].language = #de
* #persendocrinodiabetologist ^designation[=].value = "Endokrinologe/Diabetologe"
* #persfamilysciencebachelor "bachelor in family sciences"
* #persfamilysciencebachelor ^designation[0].language = #fr-BE
* #persfamilysciencebachelor ^designation[=].value = "bachelier en sciences de la famille"
* #persfamilysciencebachelor ^designation[+].language = #nl-BE
* #persfamilysciencebachelor ^designation[=].value = "bachelor in de gezinswetenschappen"
* #persfamilysciencebachelor ^designation[+].language = #en
* #persfamilysciencebachelor ^designation[=].value = "bachelor in family sciences"
* #persfamilysciencebachelor ^designation[+].language = #de
* #persfamilysciencebachelor ^designation[=].value = "Bachelor in Familienwissenschaften"
* #persforensicpsychiatrust "forensic psychiatrist"
* #persforensicpsychiatrust ^designation[0].language = #fr-BE
* #persforensicpsychiatrust ^designation[=].value = "psychiatre médico-légal"
* #persforensicpsychiatrust ^designation[+].language = #nl-BE
* #persforensicpsychiatrust ^designation[=].value = "forensisch psychiater"
* #persforensicpsychiatrust ^designation[+].language = #en
* #persforensicpsychiatrust ^designation[=].value = "forensic psychiatrist"
* #persforensicpsychiatrust ^designation[+].language = #de
* #persforensicpsychiatrust ^designation[=].value = "Gerichtspsychiater"
* #persgastroenterologist "gastroenterologist"
* #persgastroenterologist ^designation[0].language = #fr-BE
* #persgastroenterologist ^designation[=].value = "gastro-entérologue"
* #persgastroenterologist ^designation[+].language = #nl-BE
* #persgastroenterologist ^designation[=].value = "gastro-enteroloog"
* #persgastroenterologist ^designation[+].language = #en
* #persgastroenterologist ^designation[=].value = "gastroenterologist"
* #persgastroenterologist ^designation[+].language = #de
* #persgastroenterologist ^designation[=].value = "Gastroenterologe"
* #persgeneralphysician "general practitioner"
* #persgeneralphysician ^designation[0].language = #fr-BE
* #persgeneralphysician ^designation[=].value = "médecin général"
* #persgeneralphysician ^designation[+].language = #nl-BE
* #persgeneralphysician ^designation[=].value = "huisarts"
* #persgeneralphysician ^designation[+].language = #en
* #persgeneralphysician ^designation[=].value = "general practitioner"
* #persgeneralphysician ^designation[+].language = #de
* #persgeneralphysician ^designation[=].value = "Hausarzt"
* #persgeriatrist "geriatrist"
* #persgeriatrist ^designation[0].language = #fr-BE
* #persgeriatrist ^designation[=].value = "gériatre"
* #persgeriatrist ^designation[+].language = #nl-BE
* #persgeriatrist ^designation[=].value = "geriater"
* #persgeriatrist ^designation[+].language = #en
* #persgeriatrist ^designation[=].value = "geriatrist"
* #persgeriatrist ^designation[+].language = #de
* #persgeriatrist ^designation[=].value = "Geriater"
* #persgerontologymaster "master in gerontological sciences"
* #persgerontologymaster ^designation[0].language = #fr-BE
* #persgerontologymaster ^designation[=].value = "master en gérontologie"
* #persgerontologymaster ^designation[+].language = #nl-BE
* #persgerontologymaster ^designation[=].value = "master in de gerontologie"
* #persgerontologymaster ^designation[+].language = #en
* #persgerontologymaster ^designation[=].value = "master in gerontological sciences"
* #persgerontologymaster ^designation[+].language = #de
* #persgerontologymaster ^designation[=].value = "Master in Gerontologie"
* #persgynecologistobstetrics "gynecologist obstetrics"
* #persgynecologistobstetrics ^designation[0].language = #fr-BE
* #persgynecologistobstetrics ^designation[=].value = "gynécologue-obstétricien"
* #persgynecologistobstetrics ^designation[+].language = #nl-BE
* #persgynecologistobstetrics ^designation[=].value = "verloskundige-gynaecoloog"
* #persgynecologistobstetrics ^designation[+].language = #en
* #persgynecologistobstetrics ^designation[=].value = "gynecologist obstetrics"
* #persgynecologistobstetrics ^designation[+].language = #de
* #persgynecologistobstetrics ^designation[=].value = "Gynäkologe Geburtshilfe"
* #pershealthdatamanagemer "health data manager"
* #pershealthdatamanagemer ^designation[0].language = #fr-BE
* #pershealthdatamanagemer ^designation[=].value = "gestionnaire des données de santé"
* #pershealthdatamanagemer ^designation[+].language = #nl-BE
* #pershealthdatamanagemer ^designation[=].value = "beheerder van gezondheidsgegevens"
* #pershealthdatamanagemer ^designation[+].language = #en
* #pershealthdatamanagemer ^designation[=].value = "health data manager"
* #pershealthdatamanagemer ^designation[+].language = #de
* #pershealthdatamanagemer ^designation[=].value = "Gesundheitsdaten-Manager"
* #pershospitalpharmacist "hospital pharmacist"
* #pershospitalpharmacist ^designation[0].language = #fr-BE
* #pershospitalpharmacist ^designation[=].value = "pharmacien hospitalier"
* #pershospitalpharmacist ^designation[+].language = #nl-BE
* #pershospitalpharmacist ^designation[=].value = "ziekenhuisapotheker"
* #pershospitalpharmacist ^designation[+].language = #en
* #pershospitalpharmacist ^designation[=].value = "hospital pharmacist"
* #pershospitalpharmacist ^designation[+].language = #de
* #pershospitalpharmacist ^designation[=].value = "Krankenhausapotheker"
* #persinsurancephysician "insurance doctor and  medical expert"
* #persinsurancephysician ^designation[0].language = #fr-BE
* #persinsurancephysician ^designation[=].value = "médecin d'assurance et expert médical"
* #persinsurancephysician ^designation[+].language = #nl-BE
* #persinsurancephysician ^designation[=].value = "verzekeringsarts en medisch expert"
* #persinsurancephysician ^designation[+].language = #en
* #persinsurancephysician ^designation[=].value = "insurance doctor and  medical expert"
* #persinsurancephysician ^designation[+].language = #de
* #persinsurancephysician ^designation[=].value = "Versicherungsarzt und medizinischer Gutachter"
* #persinternalphysician "internist"
* #persinternalphysician ^designation[0].language = #fr-BE
* #persinternalphysician ^designation[=].value = "médecin interniste"
* #persinternalphysician ^designation[+].language = #nl-BE
* #persinternalphysician ^designation[=].value = "internist"
* #persinternalphysician ^designation[+].language = #en
* #persinternalphysician ^designation[=].value = "internist"
* #persinternalphysician ^designation[+].language = #de
* #persinternalphysician ^designation[=].value = "Internist"
* #perslabtechnologist "medical lab technologist"
* #perslabtechnologist ^designation[0].language = #fr-BE
* #perslabtechnologist ^designation[=].value = "technologue de laboratoire médical"
* #perslabtechnologist ^designation[+].language = #nl-BE
* #perslabtechnologist ^designation[=].value = "medisch laboratoriumtechnoloog"
* #perslabtechnologist ^designation[+].language = #en
* #perslabtechnologist ^designation[=].value = "medical lab technologist"
* #perslabtechnologist ^designation[+].language = #de
* #perslabtechnologist ^designation[=].value = "medizinischer Labortechnologe"
* #perslegalphysician "legal physician"
* #perslegalphysician ^designation[0].language = #fr-BE
* #perslegalphysician ^designation[=].value = "médecin légiste"
* #perslegalphysician ^designation[+].language = #nl-BE
* #perslegalphysician ^designation[=].value = "gerechtsarts"
* #perslegalphysician ^designation[+].language = #en
* #perslegalphysician ^designation[=].value = "legal physician"
* #perslegalphysician ^designation[+].language = #de
* #perslegalphysician ^designation[=].value = "Gerichtsarzt"
* #perslogopedist "logopedist"
* #perslogopedist ^designation[0].language = #fr-BE
* #perslogopedist ^designation[=].value = "logopède"
* #perslogopedist ^designation[+].language = #nl-BE
* #perslogopedist ^designation[=].value = "logopedist"
* #perslogopedist ^designation[+].language = #en
* #perslogopedist ^designation[=].value = "logopedist"
* #perslogopedist ^designation[+].language = #de
* #perslogopedist ^designation[=].value = "Logopäde"
* #persmanualtherapist "manual therapist"
* #persmanualtherapist ^designation[0].language = #fr-BE
* #persmanualtherapist ^designation[=].value = "kinesithérapeute manuel"
* #persmanualtherapist ^designation[+].language = #nl-BE
* #persmanualtherapist ^designation[=].value = "manueel therapeut"
* #persmanualtherapist ^designation[+].language = #en
* #persmanualtherapist ^designation[=].value = "manual therapist"
* #persmanualtherapist ^designation[+].language = #de
* #persmanualtherapist ^designation[=].value = "Manualtherapeut"
* #persmedicalimaging "medical imaging technologist"
* #persmedicalimaging ^designation[0].language = #fr-BE
* #persmedicalimaging ^designation[=].value = "technologue en imagerie médicale"
* #persmedicalimaging ^designation[+].language = #nl-BE
* #persmedicalimaging ^designation[=].value = "technoloog medische beeldvorming"
* #persmedicalimaging ^designation[+].language = #en
* #persmedicalimaging ^designation[=].value = "medical imaging technologist"
* #persmedicalimaging ^designation[+].language = #de
* #persmedicalimaging ^designation[=].value = "Technologe im bildgebenden Diagnoseverfahren"
* #persmedicalmicrobiologist "medical microbiologist"
* #persmedicalmicrobiologist ^designation[0].language = #fr-BE
* #persmedicalmicrobiologist ^designation[=].value = "microbiologiste médical"
* #persmedicalmicrobiologist ^designation[+].language = #nl-BE
* #persmedicalmicrobiologist ^designation[=].value = "medisch microbioloog"
* #persmedicalmicrobiologist ^designation[+].language = #en
* #persmedicalmicrobiologist ^designation[=].value = "medical microbiologist"
* #persmedicalmicrobiologist ^designation[+].language = #de
* #persmedicalmicrobiologist ^designation[=].value = "medizinischer Mikrobiologe"
* #persmidwife "midwife"
* #persmidwife ^designation[0].language = #fr-BE
* #persmidwife ^designation[=].value = "sage-femme"
* #persmidwife ^designation[+].language = #nl-BE
* #persmidwife ^designation[=].value = "vroedvrouw"
* #persmidwife ^designation[+].language = #en
* #persmidwife ^designation[=].value = "midwife"
* #persmidwife ^designation[+].language = #de
* #persmidwife ^designation[=].value = "Hebamme"
* #persneonatologist "neonatologist"
* #persneonatologist ^designation[0].language = #fr-BE
* #persneonatologist ^designation[=].value = "néonatologue"
* #persneonatologist ^designation[+].language = #nl-BE
* #persneonatologist ^designation[=].value = "neonatoloog"
* #persneonatologist ^designation[+].language = #en
* #persneonatologist ^designation[=].value = "neonatologist"
* #persneonatologist ^designation[+].language = #de
* #persneonatologist ^designation[=].value = "Neonatologe"
* #persnephrologist "nephrologist"
* #persnephrologist ^designation[0].language = #fr-BE
* #persnephrologist ^designation[=].value = "néphrologue"
* #persnephrologist ^designation[+].language = #nl-BE
* #persnephrologist ^designation[=].value = "nefroloog"
* #persnephrologist ^designation[+].language = #en
* #persnephrologist ^designation[=].value = "nephrologist"
* #persnephrologist ^designation[+].language = #de
* #persnephrologist ^designation[=].value = "Nephrologe"
* #persneurologicalphysiotherapist "neurological physiotherapist"
* #persneurologicalphysiotherapist ^designation[0].language = #fr-BE
* #persneurologicalphysiotherapist ^designation[=].value = "kinésithérapeute neurologique"
* #persneurologicalphysiotherapist ^designation[+].language = #nl-BE
* #persneurologicalphysiotherapist ^designation[=].value = "neurologisch kinesitherapeut"
* #persneurologicalphysiotherapist ^designation[+].language = #en
* #persneurologicalphysiotherapist ^designation[=].value = "neurological physiotherapist"
* #persneurologicalphysiotherapist ^designation[+].language = #de
* #persneurologicalphysiotherapist ^designation[=].value = "neurologischer Physiotherapeut"
* #persneurologist "neurologist"
* #persneurologist ^designation[0].language = #fr-BE
* #persneurologist ^designation[=].value = "neurologue"
* #persneurologist ^designation[+].language = #nl-BE
* #persneurologist ^designation[=].value = "neuroloog"
* #persneurologist ^designation[+].language = #en
* #persneurologist ^designation[=].value = "neurologist"
* #persneurologist ^designation[+].language = #de
* #persneurologist ^designation[=].value = "Neurologe"
* #persneuropsychiatrist "neuropsychiatrist"
* #persneuropsychiatrist ^designation[0].language = #fr-BE
* #persneuropsychiatrist ^designation[=].value = "neuropsychiatre"
* #persneuropsychiatrist ^designation[+].language = #nl-BE
* #persneuropsychiatrist ^designation[=].value = "neuropsychiater"
* #persneuropsychiatrist ^designation[+].language = #en
* #persneuropsychiatrist ^designation[=].value = "neuropsychiatrist"
* #persneuropsychiatrist ^designation[+].language = #de
* #persneuropsychiatrist ^designation[=].value = "Neuropsychiater"
* #persneurosurger "neurosurgeon"
* #persneurosurger ^designation[0].language = #fr-BE
* #persneurosurger ^designation[=].value = "neurochirurgien"
* #persneurosurger ^designation[+].language = #nl-BE
* #persneurosurger ^designation[=].value = "neurochirurg"
* #persneurosurger ^designation[+].language = #en
* #persneurosurger ^designation[=].value = "neurosurgeon"
* #persneurosurger ^designation[+].language = #de
* #persneurosurger ^designation[=].value = "Neurochirurg"
* #persnonsurgicalaestheticphysician "non surgical aesthetic physician"
* #persnonsurgicalaestheticphysician ^designation[0].language = #fr-BE
* #persnonsurgicalaestheticphysician ^designation[=].value = "médecin esthétique non chirurgical"
* #persnonsurgicalaestheticphysician ^designation[+].language = #nl-BE
* #persnonsurgicalaestheticphysician ^designation[=].value = "niet-chirurgisch esthetisch arts"
* #persnonsurgicalaestheticphysician ^designation[+].language = #en
* #persnonsurgicalaestheticphysician ^designation[=].value = "non surgical aesthetic physician"
* #persnonsurgicalaestheticphysician ^designation[+].language = #de
* #persnonsurgicalaestheticphysician ^designation[=].value = "nicht-chirurgischer ästhetischer Arzt"
* #persnurse "nurse"
* #persnurse ^designation[0].language = #fr-BE
* #persnurse ^designation[=].value = "infirmier"
* #persnurse ^designation[+].language = #nl-BE
* #persnurse ^designation[=].value = "verpleegkundige"
* #persnurse ^designation[+].language = #en
* #persnurse ^designation[=].value = "nurse"
* #persnurse ^designation[+].language = #de
* #persnurse ^designation[=].value = "Krankenpfleger/in"
* #persoccupationalphysician "occupational physician"
* #persoccupationalphysician ^designation[0].language = #fr-BE
* #persoccupationalphysician ^designation[=].value = "médecin du travail"
* #persoccupationalphysician ^designation[+].language = #nl-BE
* #persoccupationalphysician ^designation[=].value = "bedrijfsarts"
* #persoccupationalphysician ^designation[+].language = #en
* #persoccupationalphysician ^designation[=].value = "occupational physician"
* #persoccupationalphysician ^designation[+].language = #de
* #persoccupationalphysician ^designation[=].value = "Arbeitsmediziner"
* #persoccupationaltherapist "occupational therapist"
* #persoccupationaltherapist ^designation[0].language = #fr-BE
* #persoccupationaltherapist ^designation[=].value = "ergothérapeute"
* #persoccupationaltherapist ^designation[+].language = #nl-BE
* #persoccupationaltherapist ^designation[=].value = "ergotherapeut"
* #persoccupationaltherapist ^designation[+].language = #en
* #persoccupationaltherapist ^designation[=].value = "occupational therapist"
* #persoccupationaltherapist ^designation[+].language = #de
* #persoccupationaltherapist ^designation[=].value = "Ergotherapeute"
* #personcologist "oncologist"
* #personcologist ^designation[0].language = #fr-BE
* #personcologist ^designation[=].value = "oncologue"
* #personcologist ^designation[+].language = #nl-BE
* #personcologist ^designation[=].value = "oncoloog"
* #personcologist ^designation[+].language = #en
* #personcologist ^designation[=].value = "oncologist"
* #personcologist ^designation[+].language = #de
* #personcologist ^designation[=].value = "Onkologe"
* #persophthalmologist "ophthalmologist"
* #persophthalmologist ^designation[0].language = #fr-BE
* #persophthalmologist ^designation[=].value = "ophtalmologue"
* #persophthalmologist ^designation[+].language = #nl-BE
* #persophthalmologist ^designation[=].value = "oogarts"
* #persophthalmologist ^designation[+].language = #en
* #persophthalmologist ^designation[=].value = "ophthalmologist"
* #persophthalmologist ^designation[+].language = #de
* #persophthalmologist ^designation[=].value = "Augenarzt"
* #persoptician "optician"
* #persoptician ^designation[0].language = #fr-BE
* #persoptician ^designation[=].value = "opticien"
* #persoptician ^designation[+].language = #nl-BE
* #persoptician ^designation[=].value = "opticien"
* #persoptician ^designation[+].language = #en
* #persoptician ^designation[=].value = "optician"
* #persoptician ^designation[+].language = #de
* #persoptician ^designation[=].value = "Optiker"
* #persoraldentalhygienist "oral dental hygienist"
* #persoraldentalhygienist ^designation[0].language = #fr-BE
* #persoraldentalhygienist ^designation[=].value = "hygiéniste bucco-dentaire"
* #persoraldentalhygienist ^designation[+].language = #nl-BE
* #persoraldentalhygienist ^designation[=].value = "mondhygiënist"
* #persoraldentalhygienist ^designation[+].language = #en
* #persoraldentalhygienist ^designation[=].value = "oral dental hygienist"
* #persoraldentalhygienist ^designation[+].language = #de
* #persoraldentalhygienist ^designation[=].value = "Dentalhygieniker"
* #persoralmaxillofacialsurger "oral and maxillofacial surgeon"
* #persoralmaxillofacialsurger ^designation[0].language = #fr-BE
* #persoralmaxillofacialsurger ^designation[=].value = "chirurgien oral et maxillo-facial"
* #persoralmaxillofacialsurger ^designation[+].language = #nl-BE
* #persoralmaxillofacialsurger ^designation[=].value = "mond-, kaak- en aangezichtschirurg"
* #persoralmaxillofacialsurger ^designation[+].language = #en
* #persoralmaxillofacialsurger ^designation[=].value = "oral and maxillofacial surgeon"
* #persoralmaxillofacialsurger ^designation[+].language = #de
* #persoralmaxillofacialsurger ^designation[=].value = "Mund-, Kiefer-Gesichtschirurg"
* #persorthodontist "orthodontist"
* #persorthodontist ^designation[0].language = #fr-BE
* #persorthodontist ^designation[=].value = "orthodontiste"
* #persorthodontist ^designation[+].language = #nl-BE
* #persorthodontist ^designation[=].value = "orthodontist"
* #persorthodontist ^designation[+].language = #en
* #persorthodontist ^designation[=].value = "orthodontist"
* #persorthodontist ^designation[+].language = #de
* #persorthodontist ^designation[=].value = "Kieferorthopäde"
* #persorthopedagogistmaster "master in orthopedagogy"
* #persorthopedagogistmaster ^designation[0].language = #fr-BE
* #persorthopedagogistmaster ^designation[=].value = "master en orthopédagogie"
* #persorthopedagogistmaster ^designation[+].language = #nl-BE
* #persorthopedagogistmaster ^designation[=].value = "master in de orthopedagogie"
* #persorthopedagogistmaster ^designation[+].language = #en
* #persorthopedagogistmaster ^designation[=].value = "master in orthopedagogy"
* #persorthopedagogistmaster ^designation[+].language = #de
* #persorthopedagogistmaster ^designation[=].value = "Master in Orthopädagogik"
* #persorthopedist "orthopedist"
* #persorthopedist ^designation[0].language = #fr-BE
* #persorthopedist ^designation[=].value = "orthopédiste"
* #persorthopedist ^designation[+].language = #nl-BE
* #persorthopedist ^designation[=].value = "orthopedist"
* #persorthopedist ^designation[+].language = #en
* #persorthopedist ^designation[=].value = "orthopedist"
* #persorthopedist ^designation[+].language = #de
* #persorthopedist ^designation[=].value = "Orthopädist"
* #persorthoptist "orthoptist"
* #persorthoptist ^designation[0].language = #fr-BE
* #persorthoptist ^designation[=].value = "orthoptiste"
* #persorthoptist ^designation[+].language = #nl-BE
* #persorthoptist ^designation[=].value = "orthoptist"
* #persorthoptist ^designation[+].language = #en
* #persorthoptist ^designation[=].value = "orthoptist"
* #persorthoptist ^designation[+].language = #de
* #persorthoptist ^designation[=].value = "Orthoptist"
* #persorthotist "orthotist"
* #persorthotist ^designation[0].language = #fr-BE
* #persorthotist ^designation[=].value = "orthésiste/prothésiste"
* #persorthotist ^designation[+].language = #nl-BE
* #persorthotist ^designation[=].value = "orthopedische technieker"
* #persorthotist ^designation[+].language = #en
* #persorthotist ^designation[=].value = "orthotist"
* #persorthotist ^designation[+].language = #de
* #persorthotist ^designation[=].value = "Orthopädietechniker"
* #persotolaryngologist "otolaryngologist"
* #persotolaryngologist ^designation[0].language = #fr-BE
* #persotolaryngologist ^designation[=].value = "oto-rhino-laryngologue"
* #persotolaryngologist ^designation[+].language = #nl-BE
* #persotolaryngologist ^designation[=].value = "neus-keel- en oorarts"
* #persotolaryngologist ^designation[+].language = #en
* #persotolaryngologist ^designation[=].value = "otolaryngologist"
* #persotolaryngologist ^designation[+].language = #de
* #persotolaryngologist ^designation[=].value = "Hals-Nasen-Ohren-Arzt"
* #persparamedical "paramedical staff"
* #persparamedical ^designation[0].language = #fr-BE
* #persparamedical ^designation[=].value = "personnel paramédical"
* #persparamedical ^designation[+].language = #nl-BE
* #persparamedical ^designation[=].value = "paramedisch personeel"
* #persparamedical ^designation[+].language = #en
* #persparamedical ^designation[=].value = "paramedical staff"
* #persparamedical ^designation[+].language = #de
* #persparamedical ^designation[=].value = "Medizinisches Hilfspersonal"
* #perspatientdriver "patient driver (not urgent)"
* #perspatientdriver ^designation[0].language = #fr-BE
* #perspatientdriver ^designation[=].value = "transporteur de patient (non urgent)"
* #perspatientdriver ^designation[+].language = #nl-BE
* #perspatientdriver ^designation[=].value = "ziekenvervoerder (niet urgent)"
* #perspatientdriver ^designation[+].language = #en
* #perspatientdriver ^designation[=].value = "patient driver (not urgent)"
* #perspatientdriver ^designation[+].language = #de
* #perspatientdriver ^designation[=].value = "Patientenfahrer (nicht dringend)"
* #perspedagogybachelor "bachelor in pedagogy"
* #perspedagogybachelor ^designation[0].language = #fr-BE
* #perspedagogybachelor ^designation[=].value = "bachelier en pédagogie"
* #perspedagogybachelor ^designation[+].language = #nl-BE
* #perspedagogybachelor ^designation[=].value = "bachelor in de opvoedkunde"
* #perspedagogybachelor ^designation[+].language = #en
* #perspedagogybachelor ^designation[=].value = "bachelor in pedagogy"
* #perspedagogybachelor ^designation[+].language = #de
* #perspedagogybachelor ^designation[=].value = "Bachelor in Pädagogik"
* #perspediatrichematologistoncologist "pediatric hematologist oncologist"
* #perspediatrichematologistoncologist ^designation[0].language = #fr-BE
* #perspediatrichematologistoncologist ^designation[=].value = "hématologue et oncologue pédiatrique"
* #perspediatrichematologistoncologist ^designation[+].language = #nl-BE
* #perspediatrichematologistoncologist ^designation[=].value = "pediatrisch hematoloog en oncoloog"
* #perspediatrichematologistoncologist ^designation[+].language = #en
* #perspediatrichematologistoncologist ^designation[=].value = "pediatric hematologist oncologist"
* #perspediatrichematologistoncologist ^designation[+].language = #de
* #perspediatrichematologistoncologist ^designation[=].value = "pädiatrischer Hämatologe Onkologe"
* #perspediatrician "pediatrician"
* #perspediatrician ^designation[0].language = #fr-BE
* #perspediatrician ^designation[=].value = "pédiatre"
* #perspediatrician ^designation[+].language = #nl-BE
* #perspediatrician ^designation[=].value = "kinderarts"
* #perspediatrician ^designation[+].language = #en
* #perspediatrician ^designation[=].value = "pediatrician"
* #perspediatrician ^designation[+].language = #de
* #perspediatrician ^designation[=].value = "Kinderarzt"
* #perspediatricneurologist "pediatric neurologist"
* #perspediatricneurologist ^designation[0].language = #fr-BE
* #perspediatricneurologist ^designation[=].value = "neurologue pédiatrique"
* #perspediatricneurologist ^designation[+].language = #nl-BE
* #perspediatricneurologist ^designation[=].value = "kinderneuroloog"
* #perspediatricneurologist ^designation[+].language = #en
* #perspediatricneurologist ^designation[=].value = "pediatric neurologist"
* #perspediatricneurologist ^designation[+].language = #de
* #perspediatricneurologist ^designation[=].value = "Kinderneurologe"
* #perspediatricphysiotherapist "pediatric physiotherapist"
* #perspediatricphysiotherapist ^designation[0].language = #fr-BE
* #perspediatricphysiotherapist ^designation[=].value = "kinésithérapeute pédiatrique"
* #perspediatricphysiotherapist ^designation[+].language = #nl-BE
* #perspediatricphysiotherapist ^designation[=].value = "pediatrisch kinesitherapeut"
* #perspediatricphysiotherapist ^designation[+].language = #en
* #perspediatricphysiotherapist ^designation[=].value = "pediatric physiotherapist"
* #perspediatricphysiotherapist ^designation[+].language = #de
* #perspediatricphysiotherapist ^designation[=].value = "Kinderphysiotherapeut"
* #persperiodontologist "periodontologist"
* #persperiodontologist ^designation[0].language = #fr-BE
* #persperiodontologist ^designation[=].value = "parodontologue"
* #persperiodontologist ^designation[+].language = #nl-BE
* #persperiodontologist ^designation[=].value = "parodontoloog"
* #persperiodontologist ^designation[+].language = #en
* #persperiodontologist ^designation[=].value = "periodontologist"
* #persperiodontologist ^designation[+].language = #de
* #persperiodontologist ^designation[=].value = "Parodontologe"
* #perspharmacist "pharmacist"
* #perspharmacist ^designation[0].language = #fr-BE
* #perspharmacist ^designation[=].value = "pharmacien"
* #perspharmacist ^designation[+].language = #nl-BE
* #perspharmacist ^designation[=].value = "apotheker"
* #perspharmacist ^designation[+].language = #en
* #perspharmacist ^designation[=].value = "pharmacist"
* #perspharmacist ^designation[+].language = #de
* #perspharmacist ^designation[=].value = "Apotheker"
* #perspharmacistclinicalbiologist "pharmacist-clinical biologist"
* #perspharmacistclinicalbiologist ^designation[0].language = #fr-BE
* #perspharmacistclinicalbiologist ^designation[=].value = "pharmacien-biologiste clinicien"
* #perspharmacistclinicalbiologist ^designation[+].language = #nl-BE
* #perspharmacistclinicalbiologist ^designation[=].value = "apotheker-klinisch bioloog"
* #perspharmacistclinicalbiologist ^designation[+].language = #en
* #perspharmacistclinicalbiologist ^designation[=].value = "pharmacist-clinical biologist"
* #perspharmacistclinicalbiologist ^designation[+].language = #de
* #perspharmacistclinicalbiologist ^designation[=].value = "Apotheker-klinischer Biologe"
* #perspharmacyassistant "pharmacy assistant"
* #perspharmacyassistant ^designation[0].language = #fr-BE
* #perspharmacyassistant ^designation[=].value = "assistant en pharmacie"
* #perspharmacyassistant ^designation[+].language = #nl-BE
* #perspharmacyassistant ^designation[=].value = "apothekersassistent"
* #perspharmacyassistant ^designation[+].language = #en
* #perspharmacyassistant ^designation[=].value = "pharmacy assistant"
* #perspharmacyassistant ^designation[+].language = #de
* #perspharmacyassistant ^designation[=].value = "pharmazeutischer Assistent"
* #persphysicalphysician "physical and rehabilitation doctor"
* #persphysicalphysician ^designation[0].language = #fr-BE
* #persphysicalphysician ^designation[=].value = "médecin physique et réadaptation"
* #persphysicalphysician ^designation[+].language = #nl-BE
* #persphysicalphysician ^designation[=].value = "fysiotherapeut en revalidatiearts"
* #persphysicalphysician ^designation[+].language = #en
* #persphysicalphysician ^designation[=].value = "physical and rehabilitation doctor"
* #persphysicalphysician ^designation[+].language = #de
* #persphysicalphysician ^designation[=].value = "physikaler und Rehabilitationsmediziner"
* #persphysician "physician"
* #persphysician ^designation[0].language = #fr-BE
* #persphysician ^designation[=].value = "médecin"
* #persphysician ^designation[+].language = #nl-BE
* #persphysician ^designation[=].value = "arts"
* #persphysician ^designation[+].language = #en
* #persphysician ^designation[=].value = "physician"
* #persphysician ^designation[+].language = #de
* #persphysician ^designation[=].value = "Arzt"
* #persphysiotherapist "physiotherapist"
* #persphysiotherapist ^designation[0].language = #fr-BE
* #persphysiotherapist ^designation[=].value = "kinésithérapeute"
* #persphysiotherapist ^designation[+].language = #nl-BE
* #persphysiotherapist ^designation[=].value = "kinesitherapeut"
* #persphysiotherapist ^designation[+].language = #en
* #persphysiotherapist ^designation[=].value = "physiotherapist"
* #persphysiotherapist ^designation[+].language = #de
* #persphysiotherapist ^designation[=].value = "Physiotherapeut"
* #perspneumologist "pneumologist"
* #perspneumologist ^designation[0].language = #fr-BE
* #perspneumologist ^designation[=].value = "pneumologue"
* #perspneumologist ^designation[+].language = #nl-BE
* #perspneumologist ^designation[=].value = "pneumoloog"
* #perspneumologist ^designation[+].language = #en
* #perspneumologist ^designation[=].value = "pneumologist"
* #perspneumologist ^designation[+].language = #de
* #perspneumologist ^designation[=].value = "Lungenarzt"
* #perspodologist "podologist"
* #perspodologist ^designation[0].language = #fr-BE
* #perspodologist ^designation[=].value = "podologue"
* #perspodologist ^designation[+].language = #nl-BE
* #perspodologist ^designation[=].value = "podologist"
* #perspodologist ^designation[+].language = #en
* #perspodologist ^designation[=].value = "podologist"
* #perspodologist ^designation[+].language = #de
* #perspodologist ^designation[=].value = "Podologe"
* #perspracticalnurse "practical nurse"
* #perspracticalnurse ^designation[0].language = #fr-BE
* #perspracticalnurse ^designation[=].value = "aide-soignante"
* #perspracticalnurse ^designation[+].language = #nl-BE
* #perspracticalnurse ^designation[=].value = "verzorgende"
* #perspracticalnurse ^designation[+].language = #en
* #perspracticalnurse ^designation[=].value = "practical nurse"
* #perspracticalnurse ^designation[+].language = #de
* #perspracticalnurse ^designation[=].value = "Pfleger"
* #persprothesist "prothesist"
* #persprothesist ^designation[0].language = #fr-BE
* #persprothesist ^designation[=].value = "prothésiste"
* #persprothesist ^designation[+].language = #nl-BE
* #persprothesist ^designation[=].value = "prothesist"
* #persprothesist ^designation[+].language = #en
* #persprothesist ^designation[=].value = "prothesist"
* #persprothesist ^designation[+].language = #de
* #persprothesist ^designation[=].value = "Prothesist"
* #perspsychatrist "psychatrist"
* #perspsychatrist ^designation[0].language = #fr-BE
* #perspsychatrist ^designation[=].value = "psychiatre"
* #perspsychatrist ^designation[+].language = #nl-BE
* #perspsychatrist ^designation[=].value = "psychiater"
* #perspsychatrist ^designation[+].language = #en
* #perspsychatrist ^designation[=].value = "psychatrist"
* #perspsychatrist ^designation[+].language = #de
* #perspsychatrist ^designation[=].value = "Psychiater"
* #perspsychologist "psychologist"
* #perspsychologist ^designation[0].language = #fr-BE
* #perspsychologist ^designation[=].value = "psychologue"
* #perspsychologist ^designation[+].language = #nl-BE
* #perspsychologist ^designation[=].value = "psycholoog"
* #perspsychologist ^designation[+].language = #en
* #perspsychologist ^designation[=].value = "psychologist"
* #perspsychologist ^designation[+].language = #de
* #perspsychologist ^designation[=].value = "Psychologe"
* #perspsychomotortherapymaster "master in psychomotor therapy"
* #perspsychomotortherapymaster ^designation[0].language = #fr-BE
* #perspsychomotortherapymaster ^designation[=].value = "master en thérapie psychomotrice"
* #perspsychomotortherapymaster ^designation[+].language = #nl-BE
* #perspsychomotortherapymaster ^designation[=].value = "master in de psychomotorische therapie"
* #perspsychomotortherapymaster ^designation[+].language = #en
* #perspsychomotortherapymaster ^designation[=].value = "master in psychomotor therapy"
* #perspsychomotortherapymaster ^designation[+].language = #de
* #perspsychomotortherapymaster ^designation[=].value = "Master in Psychomotorik"
* #persreadaptationbachelor "bachelor in physiotherapy and rehabilitation"
* #persreadaptationbachelor ^designation[0].language = #fr-BE
* #persreadaptationbachelor ^designation[=].value = "bachelier en kinésithérapie et réadaptation"
* #persreadaptationbachelor ^designation[+].language = #nl-BE
* #persreadaptationbachelor ^designation[=].value = "bachelor in de readaptatiewetenschappen"
* #persreadaptationbachelor ^designation[+].language = #en
* #persreadaptationbachelor ^designation[=].value = "bachelor in physiotherapy and rehabilitation"
* #persreadaptationbachelor ^designation[+].language = #de
* #persreadaptationbachelor ^designation[=].value = "Bachelor in Psysiotherapie und Rehabilitation"
* #persrespiratoryphysiotherapist "respiratory physiotherapist"
* #persrespiratoryphysiotherapist ^designation[0].language = #fr-BE
* #persrespiratoryphysiotherapist ^designation[=].value = "kinésithérapeute respiratoire"
* #persrespiratoryphysiotherapist ^designation[+].language = #nl-BE
* #persrespiratoryphysiotherapist ^designation[=].value = "respiratoire kinesitherapeut"
* #persrespiratoryphysiotherapist ^designation[+].language = #en
* #persrespiratoryphysiotherapist ^designation[=].value = "respiratory physiotherapist"
* #persrespiratoryphysiotherapist ^designation[+].language = #de
* #persrespiratoryphysiotherapist ^designation[=].value = "Atemphysiotherapeut"
* #persrheumatologist "rheumatologist"
* #persrheumatologist ^designation[0].language = #fr-BE
* #persrheumatologist ^designation[=].value = "rhumatologue"
* #persrheumatologist ^designation[+].language = #nl-BE
* #persrheumatologist ^designation[=].value = "reumatoloog"
* #persrheumatologist ^designation[+].language = #en
* #persrheumatologist ^designation[=].value = "rheumatologist"
* #persrheumatologist ^designation[+].language = #de
* #persrheumatologist ^designation[=].value = "Rheumatologe"
* #perssocialworker "social worker"
* #perssocialworker ^designation[0].language = #fr-BE
* #perssocialworker ^designation[=].value = "travailleur social"
* #perssocialworker ^designation[+].language = #nl-BE
* #perssocialworker ^designation[=].value = "maatschappelijk werker"
* #perssocialworker ^designation[+].language = #en
* #perssocialworker ^designation[=].value = "social worker"
* #perssocialworker ^designation[+].language = #de
* #perssocialworker ^designation[=].value = "Sozialarbeiter"
* #persstomatologist "stomatologist"
* #persstomatologist ^designation[0].language = #fr-BE
* #persstomatologist ^designation[=].value = "stomatologue"
* #persstomatologist ^designation[+].language = #nl-BE
* #persstomatologist ^designation[=].value = "stomatoloog"
* #persstomatologist ^designation[+].language = #en
* #persstomatologist ^designation[=].value = "stomatologist"
* #persstomatologist ^designation[+].language = #de
* #persstomatologist ^designation[=].value = "Stomatologe"
* #perssurger "surgeon"
* #perssurger ^designation[0].language = #fr-BE
* #perssurger ^designation[=].value = "chirurgien"
* #perssurger ^designation[+].language = #nl-BE
* #perssurger ^designation[=].value = "chirurg"
* #perssurger ^designation[+].language = #en
* #perssurger ^designation[=].value = "surgeon"
* #perssurger ^designation[+].language = #de
* #perssurger ^designation[=].value = "Chirurg"
* #perstechnician "medical imaging technician"
* #perstechnician ^designation[0].language = #fr-BE
* #perstechnician ^designation[=].value = "technicien d'imagerie médicale"
* #perstechnician ^designation[+].language = #nl-BE
* #perstechnician ^designation[=].value = "technicus medische beeldvorming"
* #perstechnician ^designation[+].language = #en
* #perstechnician ^designation[=].value = "medical imaging technician"
* #perstechnician ^designation[+].language = #de
* #perstechnician ^designation[=].value = "Techniker für medizinische Bildgebung"
* #perstrussmaker "bandagist"
* #perstrussmaker ^designation[0].language = #fr-BE
* #perstrussmaker ^designation[=].value = "bandagiste"
* #perstrussmaker ^designation[+].language = #nl-BE
* #perstrussmaker ^designation[=].value = "bandagist"
* #perstrussmaker ^designation[+].language = #en
* #perstrussmaker ^designation[=].value = "bandagist"
* #perstrussmaker ^designation[+].language = #de
* #perstrussmaker ^designation[=].value = "Bandagist"
* #persurologist "urologist"
* #persurologist ^designation[0].language = #fr-BE
* #persurologist ^designation[=].value = "urologue"
* #persurologist ^designation[+].language = #nl-BE
* #persurologist ^designation[=].value = "uroloog"
* #persurologist ^designation[+].language = #en
* #persurologist ^designation[=].value = "urologist"
* #persurologist ^designation[+].language = #de
* #persurologist ^designation[=].value = "Urologe"
* #persoptometrist "optometrist"
* #persoptometrist ^designation[0].language = #fr-BE
* #persoptometrist ^designation[=].value = "optométriste"
* #persoptometrist ^designation[+].language = #nl-BE
* #persoptometrist ^designation[=].value = "optometrist"
* #persoptometrist ^designation[+].language = #en
* #persoptometrist ^designation[=].value = "optometrist"
* #persoptometrist ^designation[+].language = #de
* #persoptometrist ^designation[=].value = "Optometrist"
* #persmobilityimprover "mobility improver (orthopedic technologist)"
* #persmobilityimprover ^designation[0].language = #fr-BE
* #persmobilityimprover ^designation[=].value = "améliorateur de mobilité (technologue en orthopédie)"
* #persmobilityimprover ^designation[+].language = #nl-BE
* #persmobilityimprover ^designation[=].value = "mobiliteitsverbeteraar (orthopedisch technoloog)"
* #persmobilityimprover ^designation[+].language = #en
* #persmobilityimprover ^designation[=].value = "mobility improver (orthopedic technologist)"
* #persmobilityimprover ^designation[+].language = #de
* #persmobilityimprover ^designation[=].value = "Mobilitätsverbesserer (Orthopädietechniker)"
* #persbandagistorthosiologist "bandagist orthosiologist (orthopedic technologist)"
* #persbandagistorthosiologist ^designation[0].language = #fr-BE
* #persbandagistorthosiologist ^designation[=].value = "orthosiologue bandagiste (technologue en orthopédie)"
* #persbandagistorthosiologist ^designation[+].language = #nl-BE
* #persbandagistorthosiologist ^designation[=].value = "bandagist orthosioloog (orthopedisch technoloog)"
* #persbandagistorthosiologist ^designation[+].language = #en
* #persbandagistorthosiologist ^designation[=].value = "bandagist orthosiologist (orthopedic technologist)"
* #persbandagistorthosiologist ^designation[+].language = #de
* #persbandagistorthosiologist ^designation[=].value = "Bandagist Orthosiologe (Orthopädietechniker)"
* #persprosthesiologist "prosthesiologist (orthopedic technologist)"
* #persprosthesiologist ^designation[0].language = #fr-BE
* #persprosthesiologist ^designation[=].value = "prothésiste (technologue en orthopédie)"
* #persprosthesiologist ^designation[+].language = #nl-BE
* #persprosthesiologist ^designation[=].value = "prothesemaker (orthopedisch technoloog)"
* #persprosthesiologist ^designation[+].language = #en
* #persprosthesiologist ^designation[=].value = "prosthesiologist (orthopedic technologist)"
* #persprosthesiologist ^designation[+].language = #de
* #persprosthesiologist ^designation[=].value = "Orthopädietechniker (Orthopädietechniker)"
* #persshoetechnologist "shoe technologist (orthopedic technologist)"
* #persshoetechnologist ^designation[0].language = #fr-BE
* #persshoetechnologist ^designation[=].value = "technicien de chaussures (technologue en orthopédie)"
* #persshoetechnologist ^designation[+].language = #nl-BE
* #persshoetechnologist ^designation[=].value = "schoentechnicus (orthopedisch technoloog)"
* #persshoetechnologist ^designation[+].language = #en
* #persshoetechnologist ^designation[=].value = "shoe technologist (orthopedic technologist)"
* #persshoetechnologist ^designation[+].language = #de
* #persshoetechnologist ^designation[=].value = "Schuhtechniker (Orthopädietechniker)"
* #orgpharmacyinvoicingoffice "pharmacy invoicing office"
* #orgpharmacyinvoicingoffice ^designation[0].language = #en
* #orgpharmacyinvoicingoffice ^designation[=].value = "pharmacy invoicing office"
* #orgpharmacyinvoicingoffice ^designation[+].language = #nl-BE
* #orgpharmacyinvoicingoffice ^designation[=].value = "facturatie kantoor apotheek"
* #orgpharmacyinvoicingoffice ^designation[+].language = #fr-BE
* #orgpharmacyinvoicingoffice ^designation[=].value = "office de tarification"
* #orgpharmacyinvoicingoffice ^designation[+].language = #de
* #orgpharmacyinvoicingoffice ^designation[=].value = "Rechnungstelle für Apotheken"

---

File: repos/hl7-be_SLASH_core/input/fsh/extensions/BeExtCode.fsh

Extension: BeExtCodeableConcept
Id: be-ext-codeableconcept
Title: "BeExtCodeableConcept"
Description: "Extension with a CodableConcept"
* ^context.type = #element
* ^context.expression = "Element"
* . ^short = "Code"
* . ^definition = "Codifies the content of an Element"
* value[x] only CodeableConcept




---

File: repos/hl7-be_SLASH_core/input/fsh/extensions/BeExtCodeableReference.fsh

Extension: BeExtCodeableReference
Id: be-ext-codeable-reference
Title: "BeExtCodeableReference"
Description: "Extension able to hold a reference and a concept (Temporary solution until https://jira.hl7.org/browse/FHIR-44661 is solved and see Zulip: https://chat.fhir.org/#narrow/stream/179280-fhir.2Finfrastructure-wg/topic/Backporting.20CodeableReference )"
* ^context.type = #element
* ^context.expression = "Element"
* extension contains
    reference 0..1 and
    concept 0..1
* extension[reference].value[x] only Reference
* extension[concept].value[x] only CodeableConcept


---

File: repos/hl7-be_SLASH_core/input/fsh/extensions/BeExtGenderAtBirth.fsh

Extension: BeExtGenderAtBirth
Id: be-ext-gender-at-birth
Title: "BeExtGenderAtBirth"
Description: "Gender at the time of birth. The gender at birth has lasting consequences on clinical and medical level."
* ^context.type = #element
* ^context.expression = "Patient"
* . ^short = "Gender at the time of birth"
* . ^definition = "Gender at the time of birth"
* value[x] only CodeableConcept
* valueCodeableConcept from BeVSGenderAtBirth




---

File: repos/hl7-be_SLASH_core/input/fsh/extensions/BeExtRecorder.fsh

Extension: BeExtRecorder
Id: be-ext-recorder
Title: "BeExtRecorder"
Description: "The recorder of the information - note that this may not always be the same as the asserter - when a patient reports to a nurse and the nurse enters the data, the asserter is the patient, but the recorder is the nurse"
* ^version = "1.0.0"
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* value[x] only CodeableConcept or Reference
* value[x] ^short = "The responsability for a recording can only be taken by a natural person. The use of BeOrganisation is therefore discouraged. Use the organisation in BePractionerRole instead."
* valueReference 0..1
* valueReference only Reference(BePatient or BePractitioner or BeOrganization or BePractitionerRole)
* ^context.type = #element
* ^context.expression = "DomainResource"

---

File: repos/hl7-be_SLASH_core/input/fsh/extensions/BeExtSimpleNote.fsh

Extension: BeExtSimpleNote
Id: be-ext-simple-note
Title: "BeExtSimpleNote"
Description: "Simple note extension if the element doesn't have a note"
* value[x] only Annotation
* valueAnnotation 0..1
* ^context.type = #element
* ^context.expression = "DomainResource"  

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/be-contactperson.fsh

Instance: be-contactperson
InstanceOf: ValueSet
Title: "BeContactPerson"
Usage: #definition
* experimental = false
* url = "https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-contactperson"
* version = "1.0.0"
* name = "BeContactPerson"
* status = #active
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.ehealth.fgov.be/standards/kmehr/en"
* description = "Maximum valuest to define category of a contact person, using the HL7 values and the Belgian CD-CONTACT-PERSON values."
* compose.include[0].system = "http://terminology.hl7.org/CodeSystem/v2-0131"
* compose.include[=].filter.property = #concept
* compose.include[=].filter.op = #is-not-a
* compose.include[=].filter.value = "O"
* compose.include[+].system = "https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-contact-person"
* compose.include[=].concept[0].code = #father
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "father"
* compose.include[=].concept[+].code = #mother
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "mother"
* compose.include[=].concept[+].code = #child
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "child"
* compose.include[=].concept[+].code = #spouse
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "spouse"
* compose.include[=].concept[+].code = #husband
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "husband"
* compose.include[=].concept[+].code = #partner
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "partner"
* compose.include[=].concept[+].code = #brother
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "brother"
* compose.include[=].concept[+].code = #sister
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "sister"
* compose.include[=].concept[+].code = #brotherinlaw
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "brother-in-law"
* compose.include[=].concept[+].code = #tutor
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "tutor"
* compose.include[=].concept[+].code = #notary
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "notary"
* compose.include[=].concept[+].code = #lawyer
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "lawyer"
* compose.include[=].concept[+].code = #employer
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "employer"
* compose.include[=].concept[+].code = #grandparent
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "grandparent"
* compose.include[=].concept[+].code = #son
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "son"
* compose.include[=].concept[+].code = #daughter
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "daughter"
* compose.include[=].concept[+].code = #grandchild
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "grandchild"
* compose.include[=].concept[+].code = #neighbour
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "neighbour"
* compose.include[=].concept[+].code = #stepson
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "stepson"
* compose.include[=].concept[+].code = #stepdaughter
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "stepdaughter"
* compose.include[=].concept[+].code = #stepfather
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "stepfather"
* compose.include[=].concept[+].code = #stepmother
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "stepmother"
* compose.include[=].concept[+].code = #sisterinlaw
* compose.include[=].concept[=].designation.language = #en
* compose.include[=].concept[=].designation.value = "sisterinlaw"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/coded-annotation.fsh

Instance: coded-annotation
InstanceOf: Observation
* code = $sct#404684003
* status = #final
* note.text = "coded annotation"
* note.extension[be-ext-codeableconcept].valueCodeableConcept = $sct#272393004

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/documentreferencebinary.fsh

Instance: documentreferencebinary
InstanceOf: BeDocumentReference
Usage: #example
* status = #current
* category = http://loinc.org#34108-1 "Outpatient Note"
* category.text = "Outpatient Note"
* subject = Reference(patient1)
* author = Reference(practitionerrole1)
* content.attachment.contentType = #application/pdf
* content.attachment.data = "JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4="


---

File: repos/hl7-be_SLASH_core/input/fsh/instances/documentreferenceurl.fsh

Instance: documentreferenceurl
InstanceOf: BeDocumentReference
Usage: #example
* status = #current
* category = http://loinc.org#34108-1 "Outpatient Note"
* category.text = "Outpatient Note"
* subject = Reference(patient1)
* author = Reference(practitionerrole1)
* content.attachment.contentType = #application/pdf
* content.attachment.url = "https://dss.mo.gov/mhd/cs/psych/pdf/progressnote_indv_sample.pdf"
* context.related[+] = Reference(documentreferencebinary)


---

File: repos/hl7-be_SLASH_core/input/fsh/instances/mammographicUnit.fsh

Instance: mammographicUnit
InstanceOf: BeLocation
Usage: #example
Title: "Mammographic Unit"
Description: "Location of a mammographic unit"
* name = "Mammografic unit example name"
* address.city = "Merelbeke"
* address.postalCode = "9820"
* address.country = "BE"
* address.line = "Verlorenbroodstraat 122"
* address.text = "Verlorenbroodstraat 122, 9820 Merelbeke"
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Verlorenbroodstraat"
* address.line.extension[+].url =  "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString =  "122"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/org-msd-belgium.fsh

Instance: org-msd-belgium
InstanceOf: BeOrganization
Usage: #inline
* identifier.value = "111111111111"
* active = true
* name = "MSD Belgium"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/organization1.fsh

Instance: organization1
InstanceOf: BeOrganization
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* identifier[0].use = #official
* identifier[=].type = $v2-0203#PRN "Provider Number"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe"
* identifier[=].value = "0425222333"
* identifier[+].use = #official
* identifier[=].type = $v2-0203#MD "Medical License number"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier[=].value = "99999999999"
* active = true
* type = $cd-hcparty#orghospital
* name = "Enterprise Hospital Ziekenhuis"
* telecom.system = #phone
* telecom.value = "+322675199"
* telecom.use = #work
* address[0].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #nl
* address[=].use = #work
* address[=].type = #both
* address[=].text = "Vulcansstraat 120, 1000 Brussel"
* address[=].line = "Vulcansstraat 120"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Vulcansstraat"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "120"
* address[=].city = "Brussel"
* address[=].postalCode = "1000"
* address[=].country = "BE"
* address[+].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #fr
* address[=].use = #work
* address[=].type = #both
* address[=].text = "120, Rue des Vulcans, 1000 Bruxelles"
* address[=].line = "120, Rue des Vulcans"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Rue des Vulcans"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "120"
* address[=].city = "Bruxelles"
* address[=].postalCode = "1000"
* address[=].country = "BE"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/patient1.fsh

Instance: patient1
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
* generalPractitioner = Reference(practitioner1)

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/patient2.fsh

Instance: patient2
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
* generalPractitioner.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* generalPractitioner.identifier.value = "11530231003"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/practitioner1.fsh

Instance: practitioner1
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

File: repos/hl7-be_SLASH_core/input/fsh/instances/practitioner2.fsh

Instance: practitioner2
InstanceOf: BePractitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* identifier[0].use = #official
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier[=].value = "79121137740"
* identifier[+].use = #official
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier[=].value = "18749704"
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

File: repos/hl7-be_SLASH_core/input/fsh/instances/practitionerrole1.fsh

Instance: practitionerrole1
InstanceOf: BePractitionerRole
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "23"
* active = true
* period.start = "2019-08-01T00:00:00.000Z"
* period.end = "2019-12-01T00:00:00.000Z"
* practitioner = Reference(Practitioner/practitioner1) "Dr Katherine Pulaski"
* code = $cd-hcparty#persphysician "physician"
* specialty = $sct#419772000 "Family practice"
* availableTime[0].daysOfWeek[0] = #mon
* availableTime[=].daysOfWeek[+] = #tue
* availableTime[=].daysOfWeek[+] = #wed
* availableTime[=].availableStartTime = "09:00:00"
* availableTime[=].availableEndTime = "16:30:00"
* availableTime[+].daysOfWeek[0] = #thu
* availableTime[=].daysOfWeek[+] = #fri
* availableTime[=].availableStartTime = "09:00:00"
* availableTime[=].availableEndTime = "12:00:00"
* notAvailable.description = "Katherine will be on extended leave during August 2020"
* notAvailable.during.start = "2020-08-01T00:00:00.000Z"
* notAvailable.during.end = "2020-08-20T00:00:00.000Z"
* availabilityExceptions = "Katherine is generally unavailable on public holidays and during the Christmas/New Year break"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/provenance1.fsh

Instance: provenance1
InstanceOf: BeProvenance
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2019-06-27T08:39:24+02:00"
* target = Reference(practitioner1)
* recorded = "2019-06-27T08:39:24+02:00"
* reason = $v3-ActReason#HOPERAT "Healthcare Operations"
* activity = $v3-DataOperation#CREATE
* agent.type = $provenance-participant-type#author
* agent.who = Reference(organization1) "Enterprise Hospital Ziekenhuis"

---

File: repos/hl7-be_SLASH_core/input/fsh/instances/relatedperson.fsh

Instance: relatedperson
InstanceOf: RelatedPerson
* patient = Reference(patient1)
* relationship = $sct#444191003

---

File: repos/hl7-be_SLASH_core/input/fsh/invariants/BeInvCBE.fsh

Invariant:   be-inv-CBE
Description: "CBE contains 10 digits without interpunction, the first one is 0 or 1"
Expression:  "Identifier.where(system = 'https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe').where(value.extension.empty() or value.extension.where(url = 'https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-pseudonymization').empty()).value.select($this.matches('[0-1]\\\\d{9}')).allTrue()"
Severity:    #error

---

File: repos/hl7-be_SLASH_core/input/fsh/invariants/BeInvNIHDI.fsh

Invariant:   be-inv-NIHDI
Description: "NIHDI contains 11 or 8 (deprecated) digits without interpunction"
Expression:  "Identifier.where(system = 'https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi' or system = 'https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-organization' or system = 'https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional').where(value.extension.empty() or value.extension.where(url = 'https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-pseudonymization').empty()).value.select($this.matches('\\\\d{11}|\\\\d{8}')).allTrue()"
Severity:    #error

---

File: repos/hl7-be_SLASH_core/input/fsh/invariants/BeInvSSIN.fsh

Invariant:   be-inv-SSIN
Description: "SINN contains 11 digits without interpunction"
Expression:  "Identifier.where(system = 'https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin').where(value.extension.empty() or value.extension.where(url = 'https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-pseudonymization').empty()).value.select($this.matches('\\\\d{11}')).allTrue()"
Severity:    #error

---

File: repos/hl7-be_SLASH_core/input/fsh/logicals/BeModelConsent.fsh

Logical: BeModelConsent

---

File: repos/hl7-be_SLASH_core/input/fsh/logicals/BeModelGroup.fsh

Logical: BeModelGroup

---

File: repos/hl7-be_SLASH_core/input/fsh/logicals/BeModelPatient.fsh

Logical: BeModelPatient
Description: "Data about a patient, according to the [National Register of Persons (Ministry of the Interior)](https://www.ibz.rrn.fgov.be/fileadmin/user_upload/nl/rr/bestand-rr/bestand-RR.pdf), and possibly other sources to be mentioned when used."
* ^extension[http://hl7.org/fhir/tools/StructureDefinition/logical-target].valueBoolean = true
* names 0..* BackboneElement "Names"
* names.usage 0..1 CodeableConcept "Usage context of the name (e.g. NR 11, if the name is used as a pseudonym)"
* names.familyname 0..1 string "Surname (NR 10)"
* names.firstnames 0..1 string "Given names (NR 10)"
* names.title 0..1 string "Title of nobility (NR 12)"
* names.period 0..1 Period "Period of validity of the name (e.g. NR 13 Change of name, first names and title of nobility)"
* birth 0..1 BackboneElement "Birth data"
* birth.address 0..1 Address "Place of birth (NR 100 or NR 101)"
* birth.date 0..1 dateTime "Date of birth (NR 100 or NR 101)"
* gender 0..1 BackboneElement "Gender"
* gender.administrative 0..1 CodeableConcept "Gender (integrated in the identification no.: 000)"
* gender.atbirth 0..1 CodeableConcept "Gender at birth, accounts for gender changes and errors (NR 2 and NR 4)"
* gender.social 0..1 CodeableConcept "Gender the person identifies with"
* nationality 0..* CodeableConcept "Current nationality (and dual nationality) (NR 31, NR 32)"
* residence 0..* Address "Main and other residences (NR 1, 3, 5, 18, 19, 20,22, 23, 24, 26, 27). NR 252 will be covered by other privacy rules."
* death 0..1 BackboneElement "Date and state of death (place of death is not clinically relevant, and we only care about factual death, not absence (NR 151) or administrative/judicial death (NR 150))"
* death.date 0..1 dateTime "Date of death"
* death.deceased 0..1 boolean "The person is deceased"
* maritalstatus 0..1 CodeableConcept "Marital Status"

---

File: repos/hl7-be_SLASH_core/input/fsh/logicals/BeModelPatientDocument.fsh

Logical: BeModelPatientDocument
Description: "Data about a patient related document"
* ^extension[http://hl7.org/fhir/tools/StructureDefinition/logical-target].valueBoolean = true
* patient 1..1 Identifier "The subject of the document"
* author 1..1 Identifier "The author of the document, either Practitioner or Organization"
* category 0..* CodeableConcept "A number of classifiers for the document, each code refines the previous one"
* document 1..1 BackboneElement "Document information"
* document.content 0..1 Binary "The content of the document as such"
* document.mimetype 1..1 string "The technical type of the document"
* document.url 0..1 uri "If the document is not in the content, the reference to the document"
* context 0..* Element "Any related resources or elements that provide context for the document, such as institution, encounter,..."

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-cbe.fsh

Instance: be-cbe
InstanceOf: NamingSystem
Title: "BeCBENamingSystem"
Usage: #definition
* name = "BeCBENamingSystem"
* status = #active
* kind = #identifier
* date = "2019-06-05"
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #email
* contact.telecom.value = "support@be-ehealth-standards.atlassian.net"
* contact.telecom.use = #work
* description = "BCE/KBO"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe"
* uniqueId[=].preferred = true
* uniqueId[+].type = #oid
* uniqueId[=].value = "2.16.840.1.113883.3.6777.5.5"
* uniqueId[=].preferred = false

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-ehp.fsh

Instance: be-ehp
InstanceOf: NamingSystem
Title: "BeEhealthPartnerIDNamingSystem"
Usage: #definition
* name = "BeEhealthPartnerIDNamingSystem"
* status = #active
* kind = #identifier
* date = "2019-06-05"
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #email
* contact.telecom.value = "support@be-ehealth-standards.atlassian.net"
* contact.telecom.use = #work
* description = "EHP"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ehp"
* uniqueId[=].preferred = true
* uniqueId[+].type = #oid
* uniqueId[=].value = "2.16.840.1.113883.3.6777.5.6"
* uniqueId[=].preferred = false

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-insurancenumber.fsh

Instance: be-insurancenumber
InstanceOf: NamingSystem
Title: "BeInsuranceNumberNamingSystem"
Usage: #definition
* name = "BeInsuranceNumberNamingSystem"
* status = #active
* kind = #identifier
* date = "2020-06-01"
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #email
* contact.telecom.value = "support@be-ehealth-standards.atlassian.net"
* contact.telecom.use = #work
//* short = "insurance number"
* description = "the identification number of a mutual insurance association (mutualité) as “a not-for-profit association, which, with foresight, assistance and solidarity aims to promote the physical, mental and social well-being of its members” (The Belgian law of 6 August 1990)"
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/insurancenumber"
* uniqueId.preferred = true

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-insurancymembership.fsh

Instance: be-insurancymembership
InstanceOf: NamingSystem
Title: "BeInsurancymembershipNamingSystem"
Usage: #definition
* name = "BeInsurancymembershipNamingSystem"

* status = #active
* kind = #identifier
* date = "2020-06-01"
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #email
* contact.telecom.value = "support@be-ehealth-standards.atlassian.net"
* contact.telecom.use = #work
* description = "Membership number of a patient with an insurance organization"
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/insurancymembership"
* uniqueId.preferred = true

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-nihdi.fsh

Instance: be-nihdi
InstanceOf: NamingSystem
Title: "BeNIHDINamingSystem"
Usage: #definition
* name = "BeNIHDINamingSystem"
* status = #active
* kind = #identifier
* date = "2019-06-07"
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #email
* contact.telecom.value = "support@be-ehealth-standards.atlassian.net"
* contact.telecom.use = #work
* description = "RIZIV/INAMI"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* uniqueId[=].preferred = true
* uniqueId[+].type = #oid
* uniqueId[=].value = "2.16.840.1.113883.3.6777.5.2"
* uniqueId[=].preferred = false

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-ns-nihdi-organization.fsh

Instance: be-ns-nihdi-organization
InstanceOf: NamingSystem
Title: "BeNIHDIOrganizationNamingSystem"
Usage: #definition
* name = "BeNSNIHDIOrganization"
* status = #active
* kind = #identifier
* date = "2020-07-24"
* publisher = "eHealth Platform"
* contact[0].name = "eHealth Platform"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "https://www.ehealth.fgov.be"
* contact[+].name = "Message structure"
* contact[=].telecom.system = #email
* contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* description = "Naming System - Nihdi - Organization"
* jurisdiction.coding[0] = $m49.htm#056
* jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-organization"
* uniqueId.preferred = true

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-ns-nihdi-professional.fsh

Instance: be-ns-nihdi-professional
InstanceOf: NamingSystem
Title: "BeNIHDIProfessionalNamingSystem"
Usage: #definition
* name = "BeNSNIHDIProfessional"
* status = #active
* kind = #identifier
* date = "2020-07-24"
* publisher = "eHealth Platform"
* contact[0].name = "eHealth Platform"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "https://www.ehealth.fgov.be"
* contact[+].name = "Message structure"
* contact[=].telecom.system = #email
* contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* description = "Naming System - Nihdi - Professional"
* jurisdiction.coding[0] = $m49.htm#056
* jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* uniqueId.preferred = true

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/be-ssin.fsh

Instance: be-ssin
InstanceOf: NamingSystem
Title: "BeSSINNamingSystem"
Usage: #definition
* name = "BeSSINNamingSystem"
* status = #active
* kind = #identifier
* date = "2019-06-05"
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #email
* contact.telecom.value = "support@be-ehealth-standards.atlassian.net"
* contact.telecom.use = #work
* description = "NISS/INSZ"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* uniqueId[=].preferred = true
* uniqueId[+].type = #oid
* uniqueId[=].value = "2.16.840.1.113883.3.6777.5.1"
* uniqueId[=].preferred = false

---

File: repos/hl7-be_SLASH_core/input/fsh/namingsystems/BeNSNihdiNomenclature.fsh

Instance: be-ns-nihdi-nomenclature
InstanceOf: NamingSystem
Description: "NIHDI nomenclature (RIZIV-INAMI)"
Title: "BeNIHDINomenclatureNamingSystem"
Usage: #definition
* name = "BeNSNihdiNomenclature"
* status = #active
* kind = #identifier
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/be-ns-nihdi-nomenclature"
* uniqueId[=].preferred = true
* date = "2023-02-28"

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeAddress.fsh

Profile: BeAddress
Parent: Address
Id: be-address
Title: "BeAddress"
Description: "Belgain federal profile on address, to provide the possibility in the 'line' element to provide a seperate streetname, housenumber and postal box. It is always RECOMMENDED to give these elements seperately."
* ^version = "1.0.0"
* . ^comment = "Note: address is intended to describe postal addresses for administrative purposes, not to describe absolute geographical coordinates.  Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).\r\n\r\nSpecial remarks for KMEHR users:\r\n\r\nNote when .use and .type are used they SHALL use the FHIR defined valuesets as per their required binding level in the FHIR specification. In a KMEHR address, the use was defined by CD-ADDRESS but those values can be found in the FHIR valueset.\r\nKMEHR values 'careadress', 'other' and 'vacation' are not directly present in the FHIR address-use table but can be mapped to the value 'temp' in FHIR. In those cases, it is RECOMMENDED to also add a .period.\r\nIn KMEHR, an address might be expressed using free text or a totally structured approach where the streetname and housenumber are put in separate fields. FHIR prefers a more pragmatic approach where the ‘text’ element is used to print on labels. Also, streetname and number are not separate fields as in KMEHR but in a structural approach are given as one or moren ‘line’ elements. It is however RECOMMENDED to use the Streetname, Housenumber and Postbox extensions to express them seperately.\r\nNote the FHIR address also allows to optionally define whether the address is a physical, postal or ‘both’ address using the .type field."
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension ^definition = "The Human Language of the item. Can be used to express the same address in multiple languages (e.g. in a Brussels setting)"
* extension contains $language named language 0..1
* extension[language] ^min = 0
* line ^definition = "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information. It is always RECOMMENDED to give these elements seperately using the defined extensions."
* line.extension ^slicing.discriminator.type = #value
* line.extension ^slicing.discriminator.path = "url"
* line.extension ^slicing.rules = #open
* line.extension ^definition = "RECOMMENDED to use these extensions to define address elements."
* line.extension contains
    $iso21090-ADXP-streetName named Streetname 0..* and
    $iso21090-ADXP-houseNumber named Housenumber 0..* and
    $iso21090-ADXP-postBox named Postbox 0..*
* line.extension[Streetname].value[x] only string
* line.extension[Housenumber].value[x] only string
* line.extension[Postbox].value[x] only string
* country ^definition = "Country - a nation as commonly understood or generally accepted.\r\nConcerning the codification of the country, the FHIR specification defines its country field as a string and suggests using a ISO 3166 2 or 3 letter codes.\r\nAs that 2-letter format is also the standard in a KMEHR address, it is hence RECOMMENDED to codify the country in the same way as in KMEHR."

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeCodedAnnotation.fsh

Profile: BeCodedAnnotation
Parent: Annotation
Id: be-coded-annotation
Title: "BeCodedAnnotation"
Description: "Annotation DataType with added CodeableConcept extension element"
* extension contains BeExtCodeableConcept named code 0..1
* text ^short = "The annotation - plain text without markdown is strongly recommended"

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeCommunication.fsh

Profile: BeCommunication
Parent: Communication
Id: be-communication
Title: "BeCommunication"
Description: "Belgian federal profile on Communication"
* subject 1..1 MS
* subject only Reference(BePatient or Group) 
* sender 1..1 MS
* sender only Reference( Device or BeOrganization or BePatient or BePractitioner or BePractitionerRole or RelatedPerson or HealthcareService ) 


---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeConsent.fsh

Profile: BeConsent 
Parent: Consent
Id: be-Consent
* patient only Reference(BePatient)
* performer only Reference(BeOrganization or BePatient or BePractitioner or RelatedPerson or BePractitionerRole)
* provision.actor.reference only Reference(Device or Group or CareTeam or BeOrganization or BePatient or BePractitioner or RelatedPerson or BePractitionerRole)
* verification.verifiedWith only 	Reference(BePatient or RelatedPerson)

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeDocumentReference.fsh

Profile: BeDocumentReference
Parent: DocumentReference
Id: be-documentreference
Title: "BeDocumentReference"
Description: "Belgian federal profile on DocumentReference (see also remark in [Guidance](./guidance.html#bedocumentreference) )"
* subject 1..1 MS
* subject only Reference(BePatient)
* author only Reference(BeOrganization or BePractitioner or BePractitionerRole or BePatient or Device or RelatedPerson)
* author 1..1 MS
* context.related MS
* content MS
* content.attachment MS
* content.attachment.contentType 1..1 MS
* content.attachment.data MS
* content.attachment.url MS
* category MS


---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeGroup.fsh

Profile: BeGroup
Parent: Group
* managingEntity only Reference( BeOrganization or RelatedPerson or BePractitioner or BePractitionerRole )
* member.entity only Reference( BePatient or BePractitioner or BePractitionerRole or Device or Medication or Substance or BeGroup)	

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeLocation.fsh

Profile: BeLocation
Parent: Location
Id: be-location
Title: "BeLocation"
Description: "Location with BE address"
* ^status = #draft
* address only BeAddress



---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeOrganization.fsh

Profile: BeOrganization
Parent: Organization
Id: be-organization
Title: "BeOrganization"
Description: "Belgian federal profile for an organization. Initially based on the functional description of the NIHDI."
* ^version = "1.0.0"
* ^status = #active
* identifier MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^definition = "Identifier for the organization that is used to identify the organization across multiple disparate systems. \r\nTypically, a NIHDI value and/or a CBE or EHP value are given. Other systems are allowed. Flows in organizations will most likely want to also include a local identifier, using its own system. A type can be added if needed. When it is given, a consumer SHALL NOT ignore it."
* identifier contains
    NIHDI 0..* and
    CBE 0..* and
    //SSIN 0..* and
    EHP 0..*
* identifier[NIHDI].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi" (exactly)
* identifier[NIHDI].value 1..
* identifier[CBE].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe" (exactly)
* identifier[CBE].value 1..
//* identifier[SSIN].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin" (exactly)
//* identifier[SSIN].value 1..
* identifier[EHP].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ehp" (exactly)
* identifier[EHP].value 1..
* identifier obeys be-inv-NIHDI and be-inv-SSIN and be-inv-CBE
* active ^definition = "Whether the organization's record is still in active use.\r\nIt is RECOMMENDED to keep the value ‘true’ as long as the organization is known to be active."
* type ^slicing.discriminator.type = #value
* type ^slicing.discriminator.path = "coding.system"
* type ^slicing.rules = #open
* type ^definition = "The kind(s) of organization that this is.\r\n\r\nProposed use of CD-HCPARTY to type the organisation using dept... or org... codes. Other systems remain allowed.\r\nIn typical use, RECOMMENDED to type the organization.\r\nIn the future, specific other systems might also be proposed from a federal level to better type an organization."
* type contains CD-HCPARTY 0..*
* type[CD-HCPARTY].coding.system = "https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty" (exactly)
* type[CD-HCPARTY].coding.code 1..1
* telecom ^definition = "A contact detail for the organization.\r\n\r\nIt is RECOMMENDED to at least add one phone or email address."
* address only BeAddress
* address ^definition = "An address for the organization.\r\n\r\nIt is RECOMMENDED to include this when available"

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BePatient.fsh

Profile: BePatient
Parent: Patient
Id: be-patient
Title: "BePatient"
Description: "Belgian federal profile for a patient. Initially based on the functional description of the NIHDI. Special remarks for KMEHR users: following elements in KMEHR are not available in this FHIR resource. If needed, an extension can be defined in a future iteration of these specifications: the 'deathlocation' (location is not available but the death of the patient is expressed by either date or Boolean cfr. infra.), the 'insurancystatus' (covered in a seperate FHIR resource: Coverage), 'insurancymembership' (covered in a seperate FHIR resource: Coverage) and 'profession' (covered in a possible future FHIR resource: OccupationalData.)"
* ^version = "1.0.1"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    $patient-nationality named nationality 0..* and
    $patient-birthPlace named birthPlace 0..1 and
    http://hl7.org/fhir/StructureDefinition/patient-genderIdentity named socialGender 0..1 and
    BeExtGenderAtBirth named genderAtBirth 0..1 
* extension[nationality] ^definition = "The nationality of the patient.\r\n\r\nThis extension SHALL be used when needed to express the nationality of the patient."
//* extension[nationality].extension contains
//    code 0..1 and
//    period 0..1
* extension[nationality].extension[code].value[x] only CodeableConcept
* extension[nationality].extension[period].value[x] only Period
* extension[birthPlace] ^definition = "The birth place for a patient.\r\n\r\nThis extension SHALL be used when needed to express the place of birth of the patient."
* extension[birthPlace].value[x] only Address
* identifier MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^definition = "An identifier for this patient.\r\n\r\nTypically, when SSIN is available it is used. Organizations will most likely want to also include a local identifier, using its own system. A type can be added if needed. When an identifier is given, a consumer SHALL NOT ignore it."
* identifier contains SSIN 0..*
* identifier[SSIN] ^definition = "An identifier for this patient according to SSIN (NISS-INSZ.)\r\n\r\nWhen needed to express a SSIN, it SHALL be done according to these guidelines. Other ways to identify a patient using coding systems remain also possible."
* identifier[SSIN].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin" (exactly)
* identifier[SSIN].value 1..1
* identifier obeys be-inv-SSIN
* name MS
* name ^definition = "A name associated with the individual. \n\nIt is RECOMMENDED to give at least one familyname and at least one given name when possible and define an 'official' use. When names are given, a consumer SHALL NOT ignore it."
* telecom ^definition = "A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.\n\nIt is RECOMMENDED to at least add one phone or email address with clear indication using the .use element whether it is home use, private use,..."
* gender ^comment = "This is primarily the administrative gender. The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a \"hard\" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.\n\nSpecial remarks for KMEHR users: \n\nPlease note gender in KMEHR is typically expressed using CD-SEX. The two values that do not map directly to the HL7 dataset are 'undefined' (use 'other') and 'changed' (use the actual gender)"
* birthDate ^definition = "The date of birth for the individual.\n\nIt is RECOMMENDED to give the birthdate when available."
* birthDate.extension ^slicing.discriminator.type = #value
* birthDate.extension ^slicing.discriminator.path = "url"
* birthDate.extension ^slicing.rules = #open
* birthDate.extension contains $patient-birthTime named birthTime 0..1
* birthDate.extension[birthTime].value[x] only dateTime
* deceased[x] ^definition = "Indicates if the individual is deceased or not.\n\nIt is RECOMMENDED to include deceased information when applicable"
* address only BeAddress
* address ^definition = "An address for the individual. \n\nIt is RECOMMENDED to include an address when available. When needed to express the availablity of a Patient at home (e.g. only Wednesdays), another solution will be defined."
* maritalStatus from $be-civilstate (required)
* maritalStatus ^definition = "This field contains a patient's most recent marital (civil) status.\n\nIt is RECOMMENDED to include this when available. In a Belgian context, the concept ‘civil state’ , Dutch ‘burgerlijke stand’, French ‘état civil’ is more typically used and this might imply a more neutral concept to the reader. In HL7 semantics however this concept is described as ‘marital status’ and it SHALL be understood as the same concept."
* multipleBirth[x] ^definition = "Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer). Care SHOULD be given when exchanging Patient instances in a purely administrative flow."
* contact ^definition = "A contact party (e.g. guardian, partner, friend) for the patient.\n\nIt is RECOMMENDED to include this when available and considered relevant for the patientcare. (e.g. a parent of a young patient)"
* contact ^comment = "Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.\n\nSpecial remarks for KMEHR users:\n\nA contact person for the patient is not part of the 'patient' element itself in KMEHR. As such, the base resource of this is considered sufficient here. The KMEHR standard defines a contact as a separate element using a value from the KMEHR CD-ITEM table and an appropriate value from CD-CONTACT-PERSON to describe the relation to the patient in the KMEHR message. When needed, using FHIR, the contactperson is included in the FHIR resource Patient. Use cases implementing this contact SHALL be aware not all information of CD-CONTACT-PERSON is covered by the base valueset. The codesystem ‘https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/CD-CONTACT-PERSON’ SHALL be used to refer to any codes previously used in a KMEHR context that cannot be covered by the base HL7 valueset."
* contact.relationship from $be-contactperson (extensible)
* communication ^definition = "A language which may be used to communicate with the patient about his or her health.\n\nIt is RECOMMENDED to include this when available."
* communication ^comment = "If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.\n\nSpecial remarks for KMEHR users:\n\nThe 'usuallanguage' element in a KMEHR message only refers to the use of W3C language codes. As such, the language codes as proposed in the FHIR standard should not present any interoperability issue. Note the KMEHR element implies it is the language usally used by the patient. As such, when this element from KMEHR would be mapped to a FHIR resource, the communication.preferred Boolean SHOULD be used."
* generalPractitioner only Reference(BeOrganization or BePractitioner or BePractitionerRole)
* generalPractitioner ^definition = "Patient's nominated care provider.\n\nTake note this does not automatically imply any legal form of therapeutic link or consent relationship with this GP. It is RECOMMENDED to include this when available if the flow is in any way medical. Please note this is an element of the Reference datatype. This means when it is available it will contain either a relative or absolute URL where this GP can be found. Alternatively, there is only an internal reference and the GP is included as a ‘contained resource’ (cfr. the HL7 FHIR specifications in what cases this applies)."
* generalPractitioner ^comment = "This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.\nMultiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a \"fly-in/fly-out\" worker that has the onsite GP also included with his home GP to remain aware of medical issues.\n\nJurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.\n\nSpecial remarks for KMEHR users:\n\nThe general practioner is in many KMEHR use cases known by being the author or sender of the message. This is however a functionally different concept from the generalPractioner as it is defined in the FHIR resource. (Consult the published definition on the HL7 webpage) It is also possible in KMEHR to add a general practioner via an item and using the correct value from CD-ITEM. That way is functionally closer to the general practioner referenced here. Note in the FHIR base definition of this element that the scope of this element might be wider then just the general practicioner."
* managingOrganization only Reference(BeOrganization)
* managingOrganization ^definition = "Organization that is the custodian of the patient record.\n\nThis SHOULD be included when available.Please note this is an element of the Reference datatype. This means when it is available it will contain either a relative or absolute URL where this Organization can be found. Alternatively, there is only an internal reference and the Organization is included as a ‘contained resource’ (cfr. the HL7 FHIR specifications in what cases this applies)."
* managingOrganization ^comment = "There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).\n\nSpecial remarks for KMEHR users:\n\nThe reference to the managing organization is the organization that is the custodian of the patient record. As there is no explicit ‘author of this record’ – like in a KMEHR message – this element functionally refers to the organization in charge. (Which might also be a GP practice of an individual.)"

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BePractitioner.fsh

Profile: BePractitioner
Parent: Practitioner
Id: be-practitioner
Title: "BePractitioner"
Description: "Belgian federal profile for a practitioner. Initially based on the functional description of the NIHDI."
* ^version = "1.0.0"
* ^status = #active
* identifier MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^definition = "An identifier that applies to this person in this role.\r\nTypically, a NIHDI value and/or a SSIN value are given. Other systems remain allowed. Flows in organizations will most likely want to also include a local identifier, using its own system. A type can be added if needed. When it is given, a consumer SHALL NOT ignore it."
* identifier contains
    NIHDI 0..* and
    SSIN 0..* and
    CBE 0..*
* identifier[NIHDI].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi" (exactly)
* identifier[NIHDI].value 1..
* identifier[SSIN].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin" (exactly)
* identifier[SSIN].value 1..
* identifier[CBE].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe" (exactly)
* identifier[CBE].value 1..
* identifier obeys be-inv-NIHDI and be-inv-SSIN and be-inv-CBE
* active ^definition = "Whether this practitioner's record is in active use. \r\n\r\nIt is RECOMMENDED to keep the value ‘true’ as long as the practitioner is still being treated by the provider of the data."
* name 1..
* name ^definition = "The name(s) associated with the practitioner.\r\n\r\nTypically RECOMMENDED to include one familyname and at least one given name and to define this use as ‘official’."
* telecom ^definition = "A contact detail for the practitioner, e.g. a telephone number or an email address.\r\n\r\nIt is RECOMMENDED to at least add one phone or email address."
* address only BeAddress
* gender ^comment = "Note that FHIR strings SHALL NOT exceed 1MB in size\r\n\r\nSpecial remarks for KMEHR users:\r\nGender is an OPTIONAL element in the practitioner resource. Refer to the be-patient specifications for some attention point for KMEHR users."
* communication ^definition = "A language the practitioner can use in patient communication.\r\n\r\nIt is RECOMMENDED to include this when available"
* communication ^comment = "The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.\r\n\r\nSpecial remarks for KMEHR users:\r\nThe 'usuallanguage' element in a KMEHR message only refers to the use of W3C language codes. As such, the language codes as proposed in the FHIR standard should not present any interoperability issue.\r\nNote the KMEHR element implies it is the language usally used by the practitioner. As such, when this element from KMEHR would be mapped to a FHIR resource, the communication.preferred Boolean SHOULD be used."

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BePractitionerRole.fsh

Profile: BePractitionerRole
Parent: PractitionerRole
Id: be-practitionerrole
Title: "BePractitionerRole"
Description: "Belgian federal profile for a practitioner role. Initially based on the functional description of the NIHDI."
* ^version = "1.0.0"
* ^status = #active
* practitioner only Reference(BePractitioner)
* organization only Reference(BeOrganization)
* code MS
* code ^slicing.discriminator.type = #value
* code ^slicing.discriminator.path = "coding.system"
* code ^slicing.rules = #open
* code ^definition = "Roles which this practitioner is authorized to perform for the organization.\r\n\r\nFor compatibility reasons, CD-HCPARTY is described here to express the role of the practitioner. Other coding systems remain allowed.\r\nTowards the future, the use of SNOMED-CT codes is also RECOMMENDED here. In the future, other ways to codfy might however be also proposed.\r\n\r\nWhen available, a provider SHOULD include it. When given, a consumer SHALL record this in its consuming system."
* code contains
    CD-HCPARTY 0..* and
    SNOMED-CT 0..*
* code[CD-HCPARTY] ^definition = "Roles which this practitioner is authorized to perform for the organization."
* code[CD-HCPARTY].coding.system = "https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty" (exactly)
* code[CD-HCPARTY].coding.code 1..
* code[SNOMED-CT].coding.system = "http://snomed.info/sct" (exactly)
* code[SNOMED-CT].coding.code 1..
* specialty ^slicing.discriminator.type = #value
* specialty ^slicing.discriminator.path = "coding.system"
* specialty ^slicing.rules = #open
* specialty ^comment = "Not all terminology uses fit this general pattern. In some cases, models should not use CodeableConcept and use Coding directly and provide their own structure for managing text, codings, translations and the relationship between elements and pre- and post-coordination.\r\n\r\nSpecial remarks for KMEHR users:\r\nAs the base preferred valueset is already coded in SNOMED-CT which is the reference Belgian coding also, the RECOMMENDED use is to use the SNOMED-CT code here and use a CD-HCPARTY code (or future equivalent) in the ‘.code’ element described supra."
* specialty contains SNOMED-CT 0..*
* specialty[SNOMED-CT].coding from PracticeSettingCodeValueSet (preferred)
* specialty[SNOMED-CT].coding ^binding.description = "base resource valueset"
* specialty[SNOMED-CT].coding.system = "http://snomed.info/sct" (exactly)
* specialty[SNOMED-CT].coding.code 1..
* specialty[SNOMED-CT].coding.code ^definition = "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).\r\n\r\nIf needed codes can be used from a different system, SNOMED-CT is preferred."

---

File: repos/hl7-be_SLASH_core/input/fsh/profiles/BeProvenance.fsh

Profile: BeProvenance
Parent: Provenance
Id: be-provenance
Title: "BeProvenance"
Description: """Belgian federal profile for a provenance. Note this profile does not introduce any changes from the base profile but has been created to mark its importance, 
specifically when FHIR is used in a non-document approach. General use case remarks: 'Provenance of a resource is a record that describes entities and processes involved in producing and delivering or 
otherwise influencing that resource.' (cfr. the HL7 base specifications) According to the FHIR specifications, the provenance resource SHALL only be provided when no other resource already plays this role: 
for a Patient it SHOULD be its managing organization, provenance of an Observation SHOULD be its performer, provenance of an AllergyIntolerance SHOULD be its recorder. 
'Many other FHIR resources contain some elements that represent information about how the resource was obtained, and therefore they overlap with the functionality of the Provenance.' 
Special remarks for KMEHR users: The FHIR Provenance resource in general refers to an entity that had something to do with the creation or updating of something else. In a KMEHR context, 
this is somewhat different – as it is ‘XML document’ based, each KMEHR message has an 'author' element that is responsible."""
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-02-12T12:13:57+01:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"

---

File: repos/hl7-be_SLASH_core/input/fsh/valuesets/be-civilstate.fsh

Instance: be-civilstate
InstanceOf: ValueSet
Title: "BeCivilState"
Description: "Civil State"
Usage: #definition
* experimental = false
* url = "https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-civilstate"
* version = "1.0.0"
* name = "BeCivilstate"
* status = #active
* publisher = "eHealth Platform"
* contact.name = "eHealth Platform"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.ehealth.fgov.be/standards/kmehr/en"
* description = "Codes supported by eHealth Platform differentiating types of civil state. This valueset supports the Belgian federal FHIR profiling effort. Whenever possible add a code from http://terminology.hl7.org/CodeSystem/v3-MaritalStatus for international interoperability but also use https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/CD-CIVILSTATE for the Belgian specific code."
* compose.include[0].system = "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
* compose.include[=].concept[0].code = #A
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Annuled"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Nietigverklaring van huwelijk"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Annulation de marriage"
* compose.include[=].concept[+].code = #D
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Divorced"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Echtgescheiden"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Divorced"
* compose.include[=].concept[+].code = #M
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Married"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Gehuwd"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Marié"
* compose.include[=].concept[+].code = #U
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Unmarried"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Ongehuwd"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Célibataire"
* compose.include[=].concept[+].code = #W
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Widowed"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Weduwnaar/weduwe"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Veuf/veuve"
* compose.include[+].system = "https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-civilstate"
* compose.include[=].concept[0].code = #10
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Unmarried"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Ongehuwd"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Célibataire"
* compose.include[=].concept[+].code = #26
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Putative marriage"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Putatief huwelijk"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Mariage putatif"
* compose.include[=].concept[+].code = #40
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Divorced"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Echtgescheiden"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Divorced"
* compose.include[=].concept[+].code = #41
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Divorced since 1/10/1994"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Echtgescheiden vanaf 1/10/1994"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Divorcé à partir du 1/10/1994"
* compose.include[=].concept[+].code = #50
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Legal separation"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Gescheiden van tafel en bed"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Séparé de corps et de biens"
* compose.include[=].concept[+].code = #51
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Legal separation since 1/10/1994"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Gescheiden van tafel en bed sinds 1/10/1994"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Séparé de corps et de biens à partir du 1/10/1994"
* compose.include[=].concept[+].code = #60
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Repudiation"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Verstoting"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Répudiation"
* compose.include[=].concept[+].code = #80
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "Partnership"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Partnerschap"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Partenariat"
* compose.include[=].concept[+].code = #81
* compose.include[=].concept[=].designation[0].language = #en
* compose.include[=].concept[=].designation[=].value = "End of partnership"
* compose.include[=].concept[=].designation[+].language = #nl-BE
* compose.include[=].concept[=].designation[=].value = "Partnerschap beeindigd"
* compose.include[=].concept[=].designation[+].language = #fr-BE
* compose.include[=].concept[=].designation[=].value = "Fin de partenariat"
* compose.include[+].system = "http://terminology.hl7.org/CodeSystem/v3-NullFlavor"
* compose.include[=].concept.code = #UNK
* compose.include[=].concept.designation[0].language = #en
* compose.include[=].concept.designation[=].value = "Unknown"
* compose.include[=].concept.designation[+].language = #nl-BE
* compose.include[=].concept.designation[=].value = "Onbepaald"
* compose.include[=].concept.designation[+].language = #fr-BE
* compose.include[=].concept.designation[=].value = "Indéterminé"

---

File: repos/hl7-be_SLASH_core/input/fsh/valuesets/BeVSCareLocation.fsh

ValueSet: BeVSCareLocation
Id: be-vs-care-location
Title: "BeVSCareLocation"
Description: "Care Location Value Set"
* ^experimental = false
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* include codes from system BeCSCareLocation

---

File: repos/hl7-be_SLASH_core/input/fsh/valuesets/BeVSCdHcParty.fsh

ValueSet: BeVSCdHcParty
Id: be-vs-cd-hcparty
Title: "BeVSCdHcParty"
Description: "List of health care parties in Belgium"
* ^experimental = false
* include codes from system HCParty 

---

File: repos/hl7-be_SLASH_core/input/fsh/valuesets/BeVSGenderAtBirth.fsh

ValueSet: BeVSGenderAtBirth
Id: be-vs-gender-at-birth
Title: "List of possible genders at birth in Belgium"
Description: "BeVSGenderAtBirth"
* ^experimental = false
//values must be finetuned
* include codes from system http://hl7.org/fhir/administrative-gender 

---

File: repos/hl7-be_SLASH_core/input/fsh/valuesets/BeVSPatientRelationshipType.fsh

ValueSet: BeVSPatientRelationshipType
Id: be-vs-patient-relationship-type
Title: "BeVSPatientRelationshipType"
Description: "Describes the patient relationship type (the relation between the patient and the person implied)"
* ^version = "1.0.0"
* ^status = #draft
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""
* include $sct#444191003
* include $sct#444304005
* include $sct#444295003
* include $sct#444148008
* include $sct#444055008
* include $sct#444294004
* include $sct#767308003
* include $sct#444193000
* include $sct#444301002
* include $sct#444053001
* include $sct#444241008
* include $sct#444303004
* include $sct#444302009
* include $sct#444194006
* include $sct#444243006
* include $sct#444242001
* include $sct#444293005
* include $sct#444244000
* include $sct#444292000
* include $sct#444054007
* include $sct#444192005
* include $sct#739683002
* include $sct#699111006
* include $sct#444052006
* include $sct#410604004


---

File: repos/hl7-be_SLASH_core/input/fsh/aliases.fsh

Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $sct = http://snomed.info/sct
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $cd-hcparty = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty
Alias: $v3-DataOperation = http://terminology.hl7.org/CodeSystem/v3-DataOperation
Alias: $provenance-participant-type = http://terminology.hl7.org/CodeSystem/provenance-participant-type
Alias: $loinc = http://loinc.org
Alias: $cvx = http://hl7.org/fhir/sid/cvx
Alias: $immunization-recommendation-status = http://terminology.hl7.org/CodeSystem/immunization-recommendation-status
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $my-own-custom-codes = http://my-own-custom-codes
Alias: $cd-fed-country = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-fed-country
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $cd-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-civilstate
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $cd-contact-person = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-contact-person
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $be-cs-patientwill-category = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-patientwill-category
Alias: $be-cs-patientwill-code = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-patientwill-code
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias: $language = http://hl7.org/fhir/StructureDefinition/language
Alias: $iso21090-ADXP-streetName = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-houseNumber = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $iso21090-ADXP-postBox = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox
Alias: $patient-nationality = http://hl7.org/fhir/StructureDefinition/patient-nationality
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-birthTime = http://hl7.org/fhir/StructureDefinition/patient-birthTime
Alias: $be-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-civilstate
Alias: $be-contactperson = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-contactperson
Alias: $be-vs-score = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-vs-score

---

File: repos/hl7-be_SLASH_core/input/pagecontent/conventions.md

<!-- conventions.md {% comment %}
*****************************************************************************************
*                            WARNING: DO NOT EDIT THIS FILE                             *
*                                                                                       *
* This file is generated by SUSHI. Any edits you make to this file will be overwritten. *
*                                                                                       *
* To change the contents of this file, edit the original source file at:                *
* ig-data\input\pagecontent\3_conventions.md                                            *
*****************************************************************************************
{% endcomment %} -->
Throughout this document, the following conventions apply:



### Use of MUST, SHOULD, MAY



The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt):

> 1. **MUST**, or the terms "**REQUIRED**" or "**SHALL**", mean that the definition is an absolute requirement of the specification.
>    
> 2. **MUST NOT**, or the phrase "**SHALL NOT**", mean that the definition is an absolute prohibition of the specification.
>    
> 3. **SHOULD**, or the adjective "**RECOMMENDED**", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.
>    
> 4. **SHOULD NOT**, or the phrase "**NOT RECOMMENDED**" mean that there may exist valid reasons in particular circumstances when the particular behaviour is acceptable or even useful, but the full implications should be understood and the case carefully weighed before implementing any behaviour described with this label. 
>    
> 5. **MAY**, or the adjective "**OPTIONAL**", mean that an item is truly optional.  One vendor may choose to include the item because a particular marketplace requires it or because the vendor feels that it enhances the product while another vendor may omit the same item. An implementation which does not include a particular option MUST be prepared to interoperate with another implementation which does include the option, though perhaps with reduced functionality. In the same vein an implementation which does include a particular option
>    MUST be prepared to interoperate with another implementation which does not include the option (except, of course, for the feature the option provides.)







### Must Support



Unless otherwise stated, the following criteria apply to elements marked as "Must Support" in this Implementation Guide:

##### For technical profiles

**Systems supporting the profile MUST NOT ignore the field.**

* Systems receiving or consuming a resource instance:

  * MUST be able to process the field's content when it is present
  * MUST process the content according to the rules defined for the profile
  * MUST NOT fail when the value is not present.

* Systems sending or creating a resource instance 

  * SHOULD populate the element when the information is available
  * MUST populate the element according to the rules defined for the profile

  



##### For Logical Models

* **Functional Analysis MUST consider the data element as defined** 

  * "Must Support" elements that are used in an implementation MUST inherit the behaviour and constraints defined for the data element
  * "Must Support" elements not needed in a particular implementation MAY be excluded from implementation but such exclusion MUST be described

* **Derived implementations SHOULD inherit the field's "Must Support" flag**

  







------

<!-- This is commented out. -->







---

File: repos/hl7-be_SLASH_core/input/pagecontent/spec.md

### Specifications
These are the project specifications:


---

