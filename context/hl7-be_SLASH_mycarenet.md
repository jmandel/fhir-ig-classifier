File: repos/hl7-be_SLASH_mycarenet/sushi-config.yaml

canonical: https://www.ehealth.fgov.be/standards/fhir/mycarenet
fhirVersion: 4.0.1
FSHOnly: false
applyExtensionMetadataToRoot: false
id: hl7.fhir.be.mycarenet
name: Belgian MyCareNet Profiles
title: Belgian MyCareNet Profiles
status: draft
version: 2.1.0
copyrightYear: 2022+
releaseLabel: STU
jurisdiction: urn:iso:std:iso:3166#BE "Belgium"
# The publisher can be a single item or a list, each with a name and
# optional url and/or email. The first publisher's name will be used
# as IG.publisher.  The contact details and/or additional publishers
# will be translated into IG.contact values.
publisher:
  name: eHealth Platform
  url: http://www.ehealth.fgov.be/
  email: support@be-ehealth-standards.atlassian.net
dependencies:
  hl7.fhir.be.core: current
  hl7.fhir.be.core-clinical: current
  hl7.fhir.be.nihdi-terminology: current
  

# The pages property corresponds to IG.definition.page. SUSHI can
# auto-generate the page list, but if the author includes pages in
# this file, it is assumed that the author will fully manage the
# pages section and SUSHI will not generate any page entries.
# The page file name is used as the key. If title is not provided,
# then the title will be generated from the file name.  If a
# generation value is not provided, it will be inferred from the
# file name extension.  Any subproperties that are valid filenames
# with supported extensions (e.g., .md/.xml) will be treated as
# sub-pages.
pages:
  index.xml:
    title: Home
  guidance.md:
  changes.xml:
  downloads.xml:
  
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * meta
# * implicitRules
# * language
# * text
# * contained
# * extension
# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId

# The menu property will be used to generate the input/menu.xml file.
# The menu is represented as a simple structure where the YAML key
# is the menu item name and the value is the URL. The IG publisher
# currently only supports one level deep on sub-menus.
# To provide a custom menu.xml file, do not include this property and
# include a `menu.xml` file in input/includes.
menu:
  Home: index.html
  Guidance: guidance.html
  Artifacts:
    Profiles: artifacts.html#2
    Extensions: artifacts.html#3
    Value Sets: artifacts.html#4
  Downloads: downloads.html
  Changes: changes.html
  History: "https://www.ehealth.fgov.be/standards/fhir/mycarenet/history.html"


parameters:
  shownav: 'true'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'  


resources:
  Bundle/ex01:
    name: ex01 
    description: FHIR Physiotherapy within Hospital eAgreementAskRequest 
  Bundle/ex02: 
    name: ex02 
    description: FHIR Physiotherapy eAgreementAskRequest with patient identified by mutuality registration number 
  Bundle/ex03: 
    name: ex03 
    description: FHIR Physiotherapy eAgreementAskRequest with patient identified by national registration number 
  Bundle/ex04: 
    name: ex04 
    description: FHIR Physiotherapy eAgreementAskResponse with an agreement response 
  Bundle/ex05: 
    name: ex05 
    description: FHIR Physiotherapy eAgreementAskResponse with an intreatment response 
  Bundle/ex06: 
    name: ex06 
    description: FHIR Physiotherapy eAgreementAskResponse with a refusal response 
  Bundle/ex07: 
    name: ex07 
    description: FHIR Physiotherapy eAgreementRejectResponse 
  Bundle/ex08: 
    name: ex08 
    description: FHIR Physiotherapy eAgreementCancelRequest 
  Bundle/ex09: 
    name: ex09 
    description: FHIR Physiotherapy eAgreementCancelResponse 
  Bundle/ex10: 
    name: ex10 
    description: FHIR Physiotherapy eAgreementExtentRequest 
  Bundle/ex11: 
    name: ex11 
    description: FHIR Physiotherapy eAgreementArgueRequest 
  Bundle/ex12: 
    name: ex12 
    description: FHIR Physiotherapy eAgreementConsultRequest 
  Bundle/ex13: 
    name: ex13 
    description: FHIR Physiotherapy eAgreementConsultResponse 
  Bundle/ex14: 
    name: ex14 
    description: FHIR Physiotherapy eAgreementCompleteRequest 
  Bundle/ex15: 
    name: ex15 
    description: FHIR Physiotherapy eAgreementCompleteResponse 
  Bundle/ex16: 
    name: ex16 
    description: FHIR Speechtherapy eAgreementAskRequest for assessment 
  Bundle/ex17: 
    name: ex17 
    description: FHIR Speechtherapy eAgreementAskRequest for treatment 
  Bundle/ex18: 
    name: ex18 
    description: FHIR Speechtherapy eAgreementAskResponse for assessment with an intreatment response 
  Bundle/ex19: 
    name: ex19 
    description: FHIR Speechtherapy eAgreementAskResponse for treatment with an intreatment response 
  Bundle/ex20: 
    name: ex20 
    description: FHIR Speechtherapy eAgreementAskResponse for treatment with an agreement response 
  Bundle/ex21: 
    name: ex21 
    description: FHIR Speechtherapy eAgreementAskResponse for assessment with a refusal response 
  Bundle/ex22: 
    name: ex22 
    description: FHIR Speechtherapy eAgreementCancelRequest 
  Bundle/ex23: 
    name: ex23 
    description: FHIR Speechtherapy eAgreementCancelResponse 
  Bundle/ex24: 
    name: ex24 
    description: FHIR Speechtherapy eAgreementCompleteRequest 
  Bundle/ex25: 
    name: ex25 
    description: FHIR Speechtherapy eAgreementCompleteResponse 
  Bundle/ex26: 
    name: ex26 
    description: FHIR Speechtherapy eAgreementConsultRequest 
  Bundle/ex27: 
    name: ex27 
    description: FHIR Speechtherapy eAgreementConsultResponse 
  #Bundle/ex28: 
  #  name: ex28 
  #  description: FHIR Speechtherapy eAgreementExtentRequest for assessment 
  Bundle/ex29: 
    name: ex29 
    description: FHIR Speechtherapy eAgreementExtentRequest for treatment 
  Bundle/ex30: 
    name: ex30 
    description: FHIR Speechtherapy eAgreementExtentResponse for treatment with an agreement response 
  Bundle/ex31: 
    name: ex31 
    description: FHIR Speechtherapy eAgreementRejectResponse
  Bundle/ex32:
    name: ex32
    description: FHIR Speechtherapy eAgreementAskResponse for treatment with a partial agreement response

---

// File: input/pagecontent/guidance.md

### Guidance

<p>This guide uses the artefacts and guidance as they are defined in <a href="https://www.ehealth.fgov.be/standards/fhir" target="_blank">the official federal IG as published by eHealth Platform</a>. Please take note when you are validating you also need that IG for the base federal profiles.</p>

### Downloadable contents
<p><a href="https://share.intermut.be/home/MyCareNet/chapterIV/extranet/Webservices%20eAgreement/Forms/AllItems.aspx" target="_blank">Please consult the Sharepoint environment</a> for supporting technical information and guidelines.</p>

### Package Usage using the FHIR Validator
<p>The FHIR Validator is a Java jar that is provided as part of the specification, and that is used during the publication process to validate all the published examples.</p>
<p><a href="https://www.hl7.org/fhir/validation.html#jar" target="_blank">Follow this link for the full description on the usage of this validator</a></p>
<p>As example: This is the command line to validate FHIR resources located in the folder "c:\temp\MCNExamples" and the output HTML file will be available in "c:\temp\validation.html". </p>
<p>Note: As no version is indicated, the validation will be done with the latest published MyCareNet Package.</p>
<p><code>java -jar validator_cli.jar [examples] -ig hl7.fhir.be.mycarenet -html-output c:\temp\validation.html</code></p>


---

// File: input/pagecontent/spec.md

### Specifications
These are the project specifications:

---

// File: input/fsh/aliases.fsh

Alias: $restful-interaction = http://hl7.org/fhir/restful-interaction
Alias: $message-events = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/message-events
Alias: $cd-hcparty = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty
Alias: $sct = http://snomed.info/sct
Alias: $claim-type = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $agreement-types = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/agreement-types
Alias: $processpriority = http://terminology.hl7.org/CodeSystem/processpriority
Alias: $claiminformationcategory = http://terminology.hl7.org/CodeSystem/claiminformationcategory
Alias: $annex-types = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/annex-types
Alias: $nihdi-physiotherapy-pathologysituationcode = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/nihdi-physiotherapy-pathologysituationcode
Alias: $decision-values = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/decision-values
Alias: $refusal-values = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/refusal-values
Alias: $agreement-errors = https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/agreement-errors
Alias: $eattestid = https://www.mycarenet.be/eattest

---

// File: input/fsh/codesystems/BeCSHolderCode1.fsh

CodeSystem: BeCSHolderCode1
Id: be-cs-holder-code-1
Title: "Insurability code CT1"
Description: """see http://www.securimed.eu/fr/tiers-payant/codes-dassurabilite"""
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* #100
* #101
* #110
* #111
* #120
* #121
* #130
* #131
* #140
* #141
* #150
* #151
* #410
* #411
* #420
* #421
* #430
* #431
* #440
* #441
* #450
* #451
* #470
* #480

---

// File: input/fsh/codesystems/BeCSHolderCode2.fsh

CodeSystem: BeCSHolderCode2
Id: be-cs-holder-code-2
Title: "Insurability code CT2"
Description: """see http://www.securimed.eu/fr/tiers-payant/codes-dassurabilite"""
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* #000
* #100
* #101
* #110
* #111
* #114
* #120
* #121
* #130
* #131
* #140
* #141
* #144
* #150
* #151
* #460
* #461
* #464
* #481
* #701
* #900
* #901
* #911

---

// File: input/fsh/codesystems/BeCSPartialAgreementValues.fsh

CodeSystem: BeCSPartialAgreementValues
Id: be-cs-partial-agreement-values
Title: "BeCSPartialAgreementValues"
Description: """Partial agreement values"""
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #fragment
* #PARTIAL_AGREE_SRV_LOGO_001


---

// File: input/fsh/codesystems/MyCareNetAgreementErrors.fsh

CodeSystem: MyCareNetAgreementErrors
Id: agreement-errors
Title: "CodeSystem agreement errors"
Description: """Errors in the agreement flows of MyCareNet. These values were delivered by the 
NIC(Nationaal Intermutualistisch College)/CIN(Collège Intermutualiste National.) Not all codes are defined here, a full list can be found on mycarenet.be."""
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/agreement-errors"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #MISSING_BUNDLE_ID
* #MISSING_CLAIM_SERVICEREQUEST_SUPPORTINGINFO

---

// File: input/fsh/codesystems/MyCareNetAgreementTypes.fsh

CodeSystem: MyCareNetAgreementTypes
Id: agreement-types
Title: "CodeSystem agreement types"
Description: "Agreement types for MyCareNet flows. Not all codes are defined here, a full list can be found on mycarenet.be"
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/agreement-types"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #physiotherapy-fa "physiotherapy-fa"
* #physiotherapy-fb "physiotherapy-fb"
* #physiotherapy-eb "physiotherapy-eb"
* #physiotherapy-e "physiotherapy-e"
* #physiotherapy-common-1 "physiotherapy-common-1"
* #physiotherapy-common-2-and-more "physiotherapy-common-2-and-more"
* #physiotherapy "physiotherapy"
* #physiotherapy-maternity "physiotherapy-maternity"
* #physiotherapy-palliative "physiotherapy-palliative"
* #physiotherapy-day-hospitalization "physiotherapy-day-hospitalization"
* #physiotherapy-consultative-review "physiotherapy-consultative-review"
* #speechtherapy-assessment "speechtherapy-assessment"
* #speechtherapy-treatment "speechtherapy-treatment"
* #speechtherapy "speechtherapy"

---

// File: input/fsh/codesystems/MyCareNetAnnexTypes.fsh

CodeSystem: MyCareNetAnnexTypes
Id: annex-types
Title: "CodeSystem annex types"
Description: "Annex types for MyCareNet flows. Not all codes are defined here, a full list can be found on mycarenet.be"
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/annex-types"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #functional-report "functional-report"
* #medical-report "medical-report"
* #physiotherapist-report "physiotherapist-report"
* #cra-justification "cra-justification"
* #scoliosis-protocol "scoliosis-protocol"
* #rheumatology-report "rheumatology-report"
* #radiology-protocol "radiology-protocol"
* #mevs-results "mevs-results"
* #perimetry-lymphoscintigraphy-results "perimetry-lymphoscintigraphy-results"
* #other "other"

---

// File: input/fsh/codesystems/MyCareNetDecisionValues.fsh

CodeSystem: MyCareNetDecisionValues
Id: decision-values
Title: "CodeSystem decision values"
Description: """Decision values in the agreement flows of MyCareNet. These values were delivered by the 
NIC(Nationaal Intermutualistisch College)/CIN(Collège Intermutualiste National.) The codes are not defined here, a full list can be found on mycarenet.be."""
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/decision-values"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #agreement "agreement"
* #intreatment "intreatment"
* #refusal "refusal"
* #wfi-physiotherapist "wfi-physiotherapist"
* #wfi-prescriptor "wfi-prescriptor"
* #tariff "tariff"
* #wfi-serviceprovider "wfi-serviceprovider"
* #partialAgreement "partialAgreement"


---

// File: input/fsh/codesystems/MyCareNetMessageEvents.fsh

CodeSystem: MyCareNetMessageEvents
Id: message-events
Title: "CodeSystem message events"
Description: "Message events for MyCareNet flows.Not all codes are defined here, a full list can be found on mycarenet.be"
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/message-events"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #claim-ask "claim-ask"
* #claim-cancel "claim-cancel"
* #claim-completeAgreement "claim-completeAgreement"
* #claim-extend "claim-extend"
* #claim-argue "claim-argue"
* #claimresponse-decide "claimresponse-decide"
* #claimresponse-cancel "claimresponse-cancel"
* #claimresponse-request-for-argue "claimresponse-request-for-argue"
* #claimresponse-close "claimresponse-close"
* #claimresponse-completeAgreement "claimresponse-completeAgreement"
* #reject "reject"
* #eattest-create  "eattest-create"
* #eattestresponse-create  "eattestresponse-create"
* #eattest-cancel  "eattest-cancel"
* #eattestresponse-cancel "eattestresponse-cancel"
* #etariff-consult "etariff-consult"
* #etariffresponse-consult "etariffresponse-consult"

---

// File: input/fsh/codesystems/MyCareNetRefusalValues.fsh

CodeSystem: MyCareNetRefusalValues
Id: refusal-values
Title: "CodeSystem refusal values"
Description: """Refusal values in the agreement flows of MyCareNet. These values were delivered by the 
NIC(Nationaal Intermutualistisch College)/CIN(Collège Intermutualiste National.)"""
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/refusal-values"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #REF_AGREE_ALL_001 "REF_AGREE_ALL_001"
* #REF_AGREE_ALL_002 "REF_AGREE_ALL_002"
* #REF_AGREE_ALL_003 "REF_AGREE_ALL_003"
* #REF_AGREE_ALL_004 "REF_AGREE_ALL_004"
* #REF_AGREE_SRV_PHYSIO_001 "REF_AGREE_SRV_PHYSIO_001"
* #REF_AGREE_SRV_PHYSIO_002 "REF_AGREE_SRV_PHYSIO_002"

---

// File: input/fsh/codesystems/MyCareNetWaitingForInformationValues.fsh

CodeSystem: MyCareNetWaitingForInformationValues
Id: waitingforinformation-values
Title: "CodeSystem waiting for information values"
Description: """Waiting for information values in the agreement flows of MyCareNet. These values were delivered by the 
NIC(Nationaal Intermutualistisch College)/CIN(Collège Intermutualiste National.)"""
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/waitingforinformation-values"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #WFI_AGREE_ALL_001 "WFI_AGREE_ALL_001"
* #WFI_AGREE_ALL_002 "WFI_AGREE_ALL_002"
* #WFI_AGREE_SRV_PHYSIO_001 "WFI_AGREE_SRV_PHYSIO_001"
* #WFI_AGREE_SRV_PHYSIO_002 "WFI_AGREE_SRV_PHYSIO_002"
* #WFI_AGREE_SRV_PHYSIO_003 "WFI_AGREE_SRV_PHYSIO_003"

---

// File: input/fsh/codesystems/NIHDIPhysiotherapyPathologySituationCode.fsh

CodeSystem: NIHDIPhysiotherapyPathologySituationCode
Id: nihdi-physiotherapy-pathologysituationcode
Title: "CodeSystem NIHDIPhysiotherapyPathology"
Description: "Legal pathology situation codes as defined by NIHDI to be used in the pathology registration flows of MyCareNet. These values are managed by NIHDI. The codes are not defined here. Consult the cookbooks on mycarenet.be for concrete usage instructions."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/nihdi-physiotherapy-pathologysituationcode"
* ^version = "1.0.0"
* ^status = #active
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true
* #fa-1 "fa-1"
* #fa-1 ^designation[0].language = #nl-BE
* #fa-1 ^designation[=].value = "a) Volgende posttraumatische of postoperatieve aandoeningen:situaties waarin één of meerdere verstrekkingen uit artikel 14 k) (orthopedie), I (heelkundige verstrekkingen) en III\r\n(diagnostische en therapeutische arthroscopieën) zijn aangerekend en waarin de verstrekking of de som van die\r\nverstrekkingen overeenkomst met een waarde van N 200 of meer;"
* #fa-1 ^designation[+].language = #fr-BE
* #fa-1 ^designation[=].value = "a) Affections posttraumatiques ou postopératoires:situations dans lesquelles une ou plusieurs prestations de l'article 14, k) (orthopédie), I (prestations chirurgicales) et III (arthroscopies diagnostiques et thérapeutiques), sont attestées et pour lesquelles la prestation ou la somme de ces\r\nprestations correspond à une valeur de N200 ou plus;"
* #fa-2 "fa-2"
* #fa-2 ^designation[0].language = #nl-BE
* #fa-2 ^designation[=].value = "a) Volgende posttraumatische of postoperatieve aandoeningen:situaties waarin een verstrekking uit artikel 14 b) (neurochirurgie) zijn aangerekend en waarin deze verstrekking\r\novereenkomt met een waarde van K 225 of meer;"
* #fa-2 ^designation[+].language = #fr-BE
* #fa-2 ^designation[=].value = "a) Affections posttraumatiques ou postopératoires:situations dans lesquelles une prestation de l'article 14, b) (neurochirurgie) est attestée et pour laquelle la prestation correspond à une valeur de K225 ou plus"
* #fa-2-b "fa-2-b"
* #fa-2-b ^designation[0].language = #nl-BE
* #fa-2-b ^designation[=].value = "a) Volgende posttraumatische of postoperatieve aandoeningen:in geval van handletsels, situaties waarin één of meerdere verstrekkingen uit artikel 14, k) (orthopedie) I\r\n(heelkundige verstrekkingen) met een totale waarde van Nx en een verstrekking van artikel 14, b) (neurochirurgie)\r\nmet een waarde van Ky tegelijk zijn verricht terwijl het resultaat van de volgende berekening [Nx/N200 +\r\nKy/K225] hoger is dan of gelijk is aan 1;"
* #fa-2-b ^designation[+].language = #fr-BE
* #fa-2-b ^designation[=].value = "a) Affections posttraumatiques ou postopératoires:en cas de lésions de la main, situations dans lesquelles une ou plusieurs prestations de l’article 14, k) (orthopédie) I (prestations chirurgicales) d’une valeur totale de Nx et une prestation de l’article 14, b) (neurochirurgie) d’une valeur de Ky  sont effectuées conjointement lorsque le résultat du calcul suivant [Nx/N200 + Ky/225] est supérieur ou égal à 1 ;"
* #fa-3 "fa-3"
* #fa-3 ^designation[0].language = #nl-BE
* #fa-3 ^designation[=].value = "a) Volgende posttraumatische of postoperatieve aandoeningen:situaties waarbij een van de verstrekkingen 227695-227706, 227710-227721, 227813-227824, 227835-227846,\r\n226936-226940, 227592-227603, 227614-227625, 227651-227662, 227673-227684, 227776-2277801 of 227791-\r\n227802 is geattesteerd uit artikel 14, e) van de nomenclatuur."
* #fa-3 ^designation[+].language = #fr-BE
* #fa-3 ^designation[=].value = "a) Affections posttraumatiques ou postopératoires:situations dans lesquelles une des prestations 227695–227706, 227710–227721, 227813-227824, 227835– 227846, 226936-226940, 227592–227603, 227614–227625, 227651-227662, 227673-227684, 227776-227780 ou 227791-\r\n227802 de l'article 14, e) de la nomenclature est attestée."
* #fa-4 "fa-4"
* #fa-4 ^designation[0].language = #nl-BE
* #fa-4 ^designation[=].value = "b) Situaties waarbij de verstrekkingen 211046, 212225 of 214045, (artikel 13, § 1 van de nomenclatuur (reanimatie)) werden\r\naangerekend."
* #fa-4 ^designation[+].language = #fr-BE
* #fa-4 ^designation[=].value = "b) Situations dans lesquelles les prestations 211046, 212225 ou 214045 (article 13, § 1er de la nomenclature (réanimation)) a été attestée"
* #fa-5 "fa-5"
* #fa-5 ^designation[0].language = #nl-BE
* #fa-5 ^designation[=].value = "c) Situaties waarbij de rechthebbenden opgenomen zijn geweest in een erkende functie intensieve verzorging (code 490), in\r\neen erkende functie plaatselijke neonatale verzorging (functie N*\r\n) (code 190) of in een erkende dienst voor intensieve\r\nneonatalogie (NIC) (code 270)."
* #fa-5 ^designation[+].language = #fr-BE
* #fa-5 ^designation[=].value = "c) Bénéficiaires après une admission en fonction de soins intensifs (code 490), dans une fonction de soins néonatals locaux (fonction N°) (code 190) ou un service de néonatalgie intensive (NIC) (code 270)"
* #fa-6 "fa-6"
* #fa-6 ^designation[0].language = #nl-BE
* #fa-6 ^designation[=].value = "d) Ademhalingsinsufficiëntie bij kinderen onder 16 jaar met tracheo-, laryngo- of bronchomalacie of recidiverende lage\r\nluchtwegeninfecties"
* #fa-6 ^designation[+].language = #fr-BE
* #fa-6 ^designation[=].value = "c) Insuffisance respiratoire pour les enfants de moins de 16 ans souffrant de trachéo-, laryngo- ou bronchomalacie ou d'infections récidivantes des voies respiratoires inférieures."
* #fa-7 "fa-7"
* #fa-7 ^designation[0].language = #nl-BE
* #fa-7 ^designation[=].value = "e) Motorisch deficit en invalidering als gevolg van:mononeuropathie (bijvoorbeeld dropvoet, drophand);"
* #fa-7 ^designation[+].language = #fr-BE
* #fa-7 ^designation[=].value = "e) Déficit moteur et invalidité à la suited'une mononeuropathie (par exemple pied tombant ou main tombante);"
* #fa-8 "fa-8"
* #fa-8 ^designation[0].language = #nl-BE
* #fa-8 ^designation[=].value = "e) Motorisch deficit en invalidering als gevolg van:motorische of gemengde polyneuropathie;"
* #fa-8 ^designation[+].language = #fr-BE
* #fa-8 ^designation[=].value = "e) Déficit moteur et invalidité à la suited'une polyneuropathie motrice ou mixte;"
* #fa-9 "fa-9"
* #fa-9 ^designation[0].language = #nl-BE
* #fa-9 ^designation[=].value = "e) Motorisch deficit en invalidering als gevolg van:myopathie geïnduceerd door medicatie of door acuut of chronisch contact met toxische stoffen."
* #fa-9 ^designation[+].language = #fr-BE
* #fa-9 ^designation[=].value = "e) Déficit moteur et invalidité à la suited'une myopathie induite par médication ou par contact aigu ou chronique avec des substances toxiques."
* #fa-10 "fa-10"
* #fa-10 ^designation[0].language = #nl-BE
* #fa-10 ^designation[=].value = "f) Situaties in het domein van de orthopedie – traumatologie 10.\r\n - wervelbreuk die gedurende minstens drie weken met een gipsverband, een korset of een orthese werd\r\ngeïmmobiliseerd;\r\n\r\n - bekkenbreuk die gedurende minstens drie weken een immobilisatie of partieel of volledig steunverbod\r\nvereist;\r\n\r\n - breuken aan de knieschijf, het tibiaplateau, de humeruskop, de elleboog of intra-articulaire breuken ter\r\nhoogte van de ledematen, die gedurende minstens drie weken werd geïmmobiliseerd;\r\n\r\n - luxatie van de elleboog, de heup, de heupprothese, het schoudergewricht of de schouderprothese;\r\n - ernstige knievertuikingen met gehele of partiële ruptuur van één of meerdere ligamenten."
* #fa-10 ^designation[+].language = #fr-BE
* #fa-10 ^designation[=].value = "f) Situations dans le domaine de l'orthopédie – traumatologie \r\n - fracture vertébrale qui a nécessité une immobilisation par plâtre, corset ou orthèse d'au moins trois semaines;\r\n - fracture du bassin qui nécessite une immobilisation ou une décharge totale ou partielle d'au moins trois semaines;\r\n - fracture de la rotule, du plateau tibial, de la tête humérale, du coude ou fracture intra-articulaire à la hauteur des\r\n membres, qui ont nécessité une immobilisation d'au moins trois semaines;\r\n - luxation du coude, de la hanche, de la prothèse de hanche ou de l'articulation de l'épaule ou de la prothèse de\r\nl'épaule;\r\n - entorse grave du genou avec rupture totale ou partielle d'un ou de plusieurs ligaments."
* #fa-11 "fa-11"
* #fa-11 ^designation[0].language = #nl-BE
* #fa-11 ^designation[=].value = "g) Adhesieve capsulitis (frozen shoulder)"
* #fa-11 ^designation[+].language = #fr-BE
* #fa-11 ^designation[=].value = "g) Capsulite rétractile (frozen shoulder)"
* #fa-12 "fa-12"
* #fa-12 ^designation[0].language = #nl-BE
* #fa-12 ^designation[=].value = "h) Situaties die uro-, gynaeco-, colo- of proctologische revalidatie vereisenbewezen neuropathie, zowel bij mannen als bij vrouwen"
* #fa-12 ^designation[+].language = #fr-BE
* #fa-12 ^designation[=].value = "h) Situations nécessitant une rééducation uro-, gynéco-, colo- ou proctologiqueNeuropathie avérée, tant chez les femmes que chez les hommes"
* #fa-13 "fa-13"
* #fa-13 ^designation[0].language = #nl-BE
* #fa-13 ^designation[=].value = "h) Situaties die uro-, gynaeco-, colo- of proctologische revalidatie vereisenpostoperatieve revalidatie van sfyncterdisfunctie na: 13. (01) radicale prostatectomie of adenomectie. (02) totale cystectomie met vervangblaas ingeplant op de urethra bij patiënten die lijden aan urinaire incontinentie en/of verminderd aandranggevoel (03) verwijdering van een deel van het spijsverteringskanaal met behoud van de anale sfyncter. (04) fverzakking van blaas, rectum of baarmoeder na een chirurgische ingreep."
* #fa-13 ^designation[+].language = #fr-BE
* #fa-13 ^designation[=].value = "h) Situations nécessitant une rééducation uro-, gynéco-, colo- ou proctologiqueRééducation postopératoire du dysfonctionnement sphinctérien après:\r\n(01) Prostatectomie radicale ou adénomectomie\r\n(02) Cystectomie totale avec entéro-cystoplastie chez des patients présentant une incontinence urinaire et/ou un déficit de sensibilité de réplétion vésicale.\r\n(03) Amputation d'une partie du système digestif avec maintien du sphincter anal\r\n(04) Prolapsus vésical, rectal ou utérin après intervention chirurgicale."
* #fa-14 "fa-14"
* #fa-14 ^designation[0].language = #nl-BE
* #fa-14 ^designation[=].value = "h) Situaties die uro-, gynaeco-, colo- of proctologische revalidatie vereisenfunctionele aandoeningen bij kinderen tot de 16e\r\n varjaardag ten gevolge van één van de volgende disfuncties of\r\nmisvormingen\r\n(01) urinaire aandoeningen die op korte en middellange termijn een bedreiging vormen voor de\r\nhogere urinewegen:\r\n\r\n - dyssynergie tussen blaas en sfincter\r\n - recidiverende urinewegeninfecties\r\n - postoperatief syndroom van urethrakleppen\r\n - vesicale immaturiteit\r\n (02) encopresis bij het kind"
* #fa-14 ^designation[+].language = #fr-BE
* #fa-14 ^designation[=].value = "h) Situations nécessitant une rééducation uro-, gynéco-, colo- ou proctologiquePathologies fonctionnelles pour les enfants jusqu'au 16ème anniversaire dues à des dysfonctionnements 14.\r\n ou des malformations:\r\n(1) infections urinaires pouvant constituer une menace pour le haut appareil urinaire à court et moyen termes:\r\n - dyssynergie vésico-sphinctérienne\r\n - infections urinaires à répétition\r\n - syndrome des valves urétrales post-opératoire\r\n - immaturité vésicale\r\n (2) encoprésie chez l’enfant"
* #fa-15 "fa-15"
* #fa-15 ^designation[0].language = #nl-BE
* #fa-15 ^designation[=].value = "i) Reflex Sympathische dystrofie (RSD) van het type I (algoneurodystrofie of Südeckatrofie) of van het type II (causalgie)"
* #fa-15 ^designation[+].language = #fr-BE
* #fa-15 ^designation[=].value = "i) Syndrome Douloureux Régional Complexe (SDRC) de type I (algoneurodystrophie ou maladie de Südeck)  ou de type II (causalgie)"
* #fa-16 "fa-16"
* #fa-16 ^designation[0].language = #nl-BE
* #fa-16 ^designation[=].value = "j) Polytraumatismen, met invaliderende functionele gevolgen ter hoogte van twee verschillende ledematen of ter hoogte van\r\neen lidmaat en de romp, waarvan ten minste 2 traumatismen voldoen aan de criteria van de pathologische situaties\r\nomschreven in § 14, 5°, A, a), 1) of 2) (posttraumatische of postoperatieve aandoeningen) en/of in § 14, 5°, A, f) (situaties\r\nin het domein van de orthopedie – traumatologie)"
* #fa-16 ^designation[+].language = #fr-BE
* #fa-16 ^designation[=].value = "j) Polytraumatismes, avec des répercussions fonctionnelles invalidantes au niveau de deux membre différents ou au niveau\r\nd’un membre et du tronc, dont au moins 2 traumatismes répondent aux critères des situations pathologiques définies au § 14,\r\n5°, A, a),\r\n1) ou 2) (affections posttraumatiques ou postopératoires) et/ou au § 14, 5°, A, f) (situations dans le domaine de\r\nl’orthopédie - traumatologie)"
* #fa-17 "fa-17"
* #fa-17 ^designation[0].language = #nl-BE
* #fa-17 ^designation[=].value = "k) De volgende situaties in het domein van de stomatologie: \r\n- na een intra-articulaire temporomandibulaire heelkundige ingreep;\r\n - tijdens en/of na radiotherapie betreffende de maxillo-faciale zone;\r\n - na een intra-articulaire of sub-condylaire mandibulaire breuk;"
* #fa-17 ^designation[+].language = #fr-BE
* #fa-17 ^designation[=].value = "k) Situations dans le domaine de la stomatologie énumérées ci-dessous :\r\n - après une intervention chirurgicale temporomandibulaire intra-articulaire;\r\n - pendant et/ou après une radiothérapie concernant la région maxillo-faciale\r\n - après une fracture mandibulaire intra-articulaire ou sub-condylaire"
* #fb-51 "fb-51"
* #fb-51 ^designation[0].language = #nl-BE
* #fb-51 ^designation[=].value = "a) Situaties die een gangrevalidatie noodzakelijk maken voor rechthebbenden vanaf hun 65ste\r\nverjaardag, die al eens gevallen zijn met het risico op herhaling, te objectiveren door de behandelend\r\ngeneesheer en kinesitherapeut aan de hand van:\r\n1) de “Timed up & go” test, met een score hoger dan 20 seconden;\r\nen\r\n2) een positief resultaat op ten minste één van twee volgende testen, die allebei moeten worden verricht:\r\n(01) de “Tinetti” test, met een score kleiner dan 20/28;\r\n(02) de “Timed chair stands” test, met een score hoger dan 14 seconden."
* #fb-51 ^designation[+].language = #fr-BE
* #fb-51 ^designation[=].value = "a) Situations qui nécessitent une rééducation fonctionnelle de la marche pour les bénéficiaires à partir de leur 65ème anniversaire ayant déjà été victime d’une chute et présentant un risque de récidive, à objectiver par le médecin traitant et le kinésithérapeute\r\nau moyen :\r\n1) du test « Timed up & go », avec un score supérieur à 20 secondes;\r\net\r\n2) du résultat positif à au moins un des deux tests suivants, ceux-ci devant tous deux être effectués :\r\n(01) – le test « Tinetti », avec un score inférieur à 20/28;\r\n(02) – le test « Timed chair stands », avec un score supérieur à 14 secondes"
* #fb-59 "fb-59"
* #fb-59 ^designation[0].language = #nl-BE
* #fb-59 ^designation[=].value = "b) Psychomotorische ontwikkelingsstoornissen\r\nBij kinderen onder 16 jaar, na advies en behandelingsvoorstel door een van ondervermelde\r\ngeneesheren-specialisten en met een significant zwakkere score op een gestandaardiseerde test;\r\nGeneesheer-specialist voor:\r\n- (neuro)pediatrie\r\n- (neuro)pediatrie en F en P (*)\r\n- neuropsychiatrie en F en P (*)\r\n- neurologie\r\n- neurologie en F en P (*)\r\n- psychiatrie\r\n- psychiatrie en F en P (*)\r\n(*) F en P = specialist voor functionele en professionele revalidatie voor gehandicapten\r\nBij kinderen onder 19 maanden kan bovenvermeld advies, behandelingsvoorstel en significant\r\nzwakkere score vervangen worden door de vaststelling van klinisch duidelijke\r\nontwikkelingsstoornissen op basis van een evaluatie in een gespecialiseerde multidisciplinaire\r\nequipe, waar ten minste een (neuro)pediater deel van uitmaakt."
* #fb-59 ^designation[+].language = #fr-BE
* #fb-59 ^designation[=].value = "b) Troubles du développement psychomoteur\r\nChez les enfants de moins de 16 ans, après avis et proposition de traitement d’un des médecins spécialistes mentionnés\r\nci-dessous, et avec un score significativement plus faible sur un test standardisé ;\r\nMédecin spécialiste en :\r\n- (neuro)pédiatrie\r\n- (neuro)pédiatrie et F et P (*)\r\n- neuropsychiatrie et F et P (*)\r\n- neurologie\r\n- neurologie et F et P (*)\r\n- psychiatrie\r\n- psychiatrie et F et P (*)\r\n\r\n(*) F et P = spécialiste en réadaptation fonctionnelle et professionnelle des handicapés\r\nChez les enfants de moins de 19 mois, l’avis, la proposition de traitement et le score significativement plus faible mentionnés\r\nci-dessus peuvent être remplacés par la constatation de troubles manifestes clinique du développement sur base d’une\r\névaluation effectuée par une équipe multidisciplinaire spécialisée, qui compte au moins un (neuro)pédiatre"
* #fb-54 "fb-54"
* #fb-54 ^designation[0].language = #nl-BE
* #fb-54 ^designation[=].value = "c) Ademhalingsinsufficiëntie bij rechthebbenden die opgevolgd worden in het kader van de\r\ntyperevalidatie-overeenkomst inzake langdurige zuurstoftherapie thuis of bij thuisbeademing."
* #fb-54 ^designation[+].language = #fr-BE
* #fb-54 ^designation[=].value = "c) Insuffisance respiratoire chez les bénéficiaires qui sont suivis dans le cadre de la convention-type de rééducation fonctionnelle relative à l'oxygénothérapie de longue durée à domicile ou en cas de respiration artificielle à domicile."
* #fb-55 "fb-55"
* #fb-55 ^designation[0].language = #nl-BE
* #fb-55 ^designation[=].value = "d) Chronische motorische of gemengde polyneuropathie."
* #fb-55 ^designation[+].language = #fr-BE
* #fb-55 ^designation[=].value = "d) Polyneuropathie chronique motrice ou mixte."
* #fb-56 "fb-56"
* #fb-56 ^designation[0].language = #nl-BE
* #fb-56 ^designation[=].value = "e) Chronisch vermoeidheidssyndroom\r\ndie voldoen aan de voorwaarden beschreven in de nomenclatuur"
* #fb-56 ^designation[+].language = #fr-BE
* #fb-56 ^designation[=].value = "e) Syndrome de fatigue chronique répondant aux conditions prévues dans la nomenclature."
* #fb-57 "fb-57"
* #fb-57 ^designation[0].language = #nl-BE
* #fb-57 ^designation[=].value = "f) Fibromyalgiesyndroom\r\nDe diagnose moet bevestigd zijn door een geneesheer, specialist voor reumatologie of in de\r\nfysische geneeskunde en de revalidatie, op grond van een klinisch onderzoek dat de\r\ndiagnostische criteria van de ACR (American College of Rheumatology) omvat. Deze\r\nbevestiging, getekend door de geneesheer-specialist, moet voorkomen in het individueel\r\nkinesitherapiedossier en weergeven dat de gebruikte diagnostische criteria wel degelijk die van\r\nde ACR zijn.\r\nVoor het einde van elk kalenderjaar dat volgt op het jaar van de eerste verstrekking van de\r\nbehandeling, moet de voornoemde geneesheer-specialist de evolutie van de symptomen\r\nopnieuw evalueren, teneinde te bevestigen dat het noodzakelijk is dat de behandeling wordt\r\nvoortgezet in het kader van §14. Deze bevestiging, getekend door de geneesheer-specialist,\r\nmoet voorkomen in het individueel kinesitherapiedossier."
* #fb-57 ^designation[+].language = #fr-BE
* #fb-57 ^designation[=].value = "f) Syndrome fibromyalgique \r\nLe diagnostic doit être confirmé par un médecin spécialiste en rhumatologie ou en médecine physique et réadaptation sur base\r\nd’un examen clinique comprenant les critères de diagnostic de l’ACR (American College of Rheumatology). Cette confirmation\r\nsignée par le médecin spécialiste doit figurer dans le dossier individuel kinésithérapeutique et préciser que les critères de\r\ndiagnotic utilisés sont bien ceux de l’ACR\r\nAvant la fin de chaque année civile qui suit l’année au cours de laquelle la 1ère prestation du traitement a eu lieu, le médecin\r\nspécialiste susmentionné réévaluera l’évolution de la symptomatologie du patient afin de confirmer la nécessité de poursuivre le\r\ntraitement dans le cadre du § 14. Cette confirmation signée par le médecin spécialiste doit figurer dans le dossier individuel\r\nkinésithérapeutique"
* #fb-58 "fb-58"
* #fb-58 ^designation[0].language = #nl-BE
* #fb-58 ^designation[=].value = "g) Primaire cervicale dystonie\r\naangetoond met een diagnostische verslag opgesteld door een geneesheer-specialist voor\r\nneurologie"
* #fb-58 ^designation[+].language = #fr-BE
* #fb-58 ^designation[=].value = "g) Dystonie cervicale primaire démontrée par un rapport diagnostique établi par un médecin-spécialiste en neurologie"
* #fb-60 "fb-60"
* #fb-60 ^designation[0].language = #nl-BE
* #fb-60 ^designation[=].value = "h) Lymfoedeem\r\ndie voldoen aan de voorwaarden beschreven in de nomenclatuur"
* #fb-60 ^designation[+].language = #fr-BE
* #fb-60 ^designation[=].value = "h) lymphoedème \r\nrépondant aux conditions prévues dans la nomenclature"
* #e-na "e-na"
* #e-na ^designation[0].language = #nl-BE
* #e-na ^designation[=].value = "Onbepaalde pathologische situatie (oud papier akkoord)"
* #e-na ^designation[+].language = #fr-BE
* #e-na ^designation[=].value = "Situation pathologique non définie (ancien accord papier)"
* #e-a "e-a"
* #e-a ^designation[0].language = #nl-BE
* #e-a ^designation[=].value = "a) Uitgebreide perifere verlamming: monoplegie, syndroom van Guillain Barré;"
* #e-a ^designation[+].language = #fr-BE
* #e-a ^designation[=].value = "a) Paralysie périphérique étendue : monoplégie, syndrome de Guillain Barré."
* #e-b "e-b"
* #e-b ^designation[0].language = #nl-BE
* #e-b ^designation[=].value = "b) Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek zoals bij voorbeeld multiple sclerose, de ziekte van Parkinson en de amyotrofische laterale sclerose…;"
* #e-b ^designation[+].language = #fr-BE
* #e-b ^designation[=].value = "b) Affections neurologiques centrales de caractère évolutif avec déficit moteur étendu.\r\nExemples : sclérose en plaques, maladie de Parkinson, sclérose latérale amyotrophique, etc."
* #e-c "e-c"
* #e-c ^designation[0].language = #nl-BE
* #e-c ^designation[=].value = "c) Uitbegreide motorische sequellen van encefale of medullaire oorsprong (bijvoorbeeld: hersenverlamming “Cerebral Palsy”, hemiplegie, spina bifida, cerebellair syndroom,…);"
* #e-c ^designation[+].language = #fr-BE
* #e-c ^designation[=].value = "c) Séquelles motrices étendues d'origine encéphalique ou médullaire.\r\nExemples : infirmité motrice cérébrale \"Cerebral Palsy\", hémiplégie, spina bifida, syndrome cérébelleux, etc."
* #e-d "e-d"
* #e-d ^designation[0].language = #nl-BE
* #e-d ^designation[=].value = "d) Sequellen van zware brandwonden ter hoogte van de ledematen en/of de hals tijdens de evolutieve fase;"
* #e-d ^designation[+].language = #fr-BE
* #e-d ^designation[=].value = "d) Suites de brûlures graves au niveau des membres et/ou du cou pendant la phase évolutive."
* #e-e-1 "e-e-1"
* #e-e-1 ^designation[0].language = #nl-BE
* #e-e-1 ^designation[=].value = "e) functioneel verliesbelangrijk functioneel verlies van een lidmaat ten gevolge van een agenesie van een lidmaat of van een dysmelie die de anatomie van zijn verschillende segmenten aantast"
* #e-e-1 ^designation[+].language = #fr-BE
* #e-e-1 ^designation[=].value = "e) Perte fonctionnelle :Perte fonctionnelle importante d’un membre suite à une agénésie du membre ou à une dysmélie affectant l’anatomie de ses différents segments"
* #e-e-2 "e-e-2"
* #e-e-2 ^designation[0].language = #nl-BE
* #e-e-2 ^designation[=].value = "e) functioneel verliesglobaal functioneel verlies van een lidmaat door amputatie, tijdens de aanpassingsperiode;"
* #e-e-2 ^designation[+].language = #fr-BE
* #e-e-2 ^designation[=].value = "e) Perte fonctionnelle :Perte fonctionnelle globale d'un membre suite à une amputation, pendant la période d'adaptation"
* #e-e-3 "e-e-3"
* #e-e-3 ^designation[0].language = #nl-BE
* #e-e-3 ^designation[=].value = "e) functioneel verliesGlobaal posttraumatische functioneel verlies van een lidmaat, tijdens de evolutieve periode;"
* #e-e-3 ^designation[+].language = #fr-BE
* #e-e-3 ^designation[=].value = "e) Perte fonctionnelle :Perte fonctionnelle globale post-traumatique d'un membre, pendant la période évolutive"
* #e-f "e-f"
* #e-f ^designation[0].language = #nl-BE
* #e-f ^designation[=].value = "f) Spits- en klompvoet, bij een kind jonger dan 2 jaar;"
* #e-f ^designation[+].language = #fr-BE
* #e-f ^designation[=].value = "f) Pied bot varus équin chez l'enfant de moins de 2 ans."
* #e-g-1 "e-g-1"
* #e-g-1 ^designation[0].language = #nl-BE
* #e-g-1 ^designation[=].value = "g) Ernstige gewrichtsdysfunctie ten gevolge van:hemofilie;"
* #e-g-1 ^designation[+].language = #fr-BE
* #e-g-1 ^designation[=].value = "g) Dysfonction articulaire grave résultant :d’une hémophilie"
* #e-g-2 "e-g-2"
* #e-g-2 ^designation[0].language = #nl-BE
* #e-g-2 ^designation[=].value = "g) Ernstige gewrichtsdysfunctie ten gevolge van:erfelijke bindweefselaandoeningen (osteogenesis imperfecta van het type III en IV, Ehlers-Danlos-syndroom, chondrodysplasieën, Marfan-syndroom);"
* #e-g-2 ^designation[+].language = #fr-BE
* #e-g-2 ^designation[=].value = "g) Dysfonction articulaire grave résultant :de maladies héréditaires du tissu conjonctif (ostéogenèse imparfaite de type III et IV, syndrome d'Ehlers-Danlos, chondrodysplasies, syndrome de Marfan)"
* #e-g-3 "e-g-3"
* #e-g-3 ^designation[0].language = #nl-BE
* #e-g-3 ^designation[=].value = "g) Ernstige gewrichtsdysfunctie ten gevolge van:evolutieve scoliose met een kromming van minstens 15° (of hoek van Cobb) bij rechthebbenden onder de 18 jaar;"
* #e-g-3 ^designation[+].language = #fr-BE
* #e-g-3 ^designation[=].value = "g) Dysfonction articulaire grave résultant :d’une scoliose évolutive de 15° au moins d'angle de courbure (ou angle de Cobb) chez des bénéficiaires en dessous de 18 ans"
* #e-g-4 "e-g-4"
* #e-g-4 ^designation[0].language = #nl-BE
* #e-g-4 ^designation[=].value = "g) Ernstige gewrichtsdysfunctie ten gevolge van: arthrogrypose;"
* #e-g-4 ^designation[+].language = #fr-BE
* #e-g-4 ^designation[=].value = "g) Dysfonction articulaire grave résultant :d’une arthrogrypose"
* #e-h-1 "e-h-1"
* #e-h-1 ^designation[0].language = #nl-BE
* #e-h-1 ^designation[=].value = "h) Chronische auto-immune inflammatoire polyarthritis:Reumatoïde artritis"
* #e-h-1 ^designation[+].language = #fr-BE
* #e-h-1 ^designation[=].value = "h) Polyarthrites chroniques inflammatoires d’origine immunitaire :Arthrite rhumatoïde"
* #e-h-2 "e-h-2"
* #e-h-2 ^designation[0].language = #nl-BE
* #e-h-2 ^designation[=].value = "h) Chronische auto-immune inflammatoire polyarthritis:Spondyloarthropathie"
* #e-h-2 ^designation[+].language = #fr-BE
* #e-h-2 ^designation[=].value = "h) Polyarthrites chroniques inflammatoires d’origine immunitaire :Spondyloarthropathies"
* #e-h-3 "e-h-3"
* #e-h-3 ^designation[0].language = #nl-BE
* #e-h-3 ^designation[=].value = "h) Chronische auto-immune inflammatoire polyarthritis:Juveniele chronische artritis"
* #e-h-3 ^designation[+].language = #fr-BE
* #e-h-3 ^designation[=].value = "h) Polyarthrites chroniques inflammatoires d’origine immunitaire :Arthrite rhumatoïde juvénile"
* #e-h-4 "e-h-4"
* #e-h-4 ^designation[0].language = #nl-BE
* #e-h-4 ^designation[=].value = "h) Chronische auto-immune inflammatoire polyarthritis:  Systemische lupus"
* #e-h-4 ^designation[+].language = #fr-BE
* #e-h-4 ^designation[=].value = "h) Polyarthrites chroniques inflammatoires d’origine immunitaire :Lupus erythémateux"
* #e-h-5 "e-h-5"
* #e-h-5 ^designation[0].language = #nl-BE
* #e-h-5 ^designation[=].value = "h) Chronische auto-immune inflammatoire polyarthritis: Sclerodermie"
* #e-h-5 ^designation[+].language = #fr-BE
* #e-h-5 ^designation[=].value = "h) Polyarthrites chroniques inflammatoires d’origine immunitaire :Sclérodermie"
* #e-h-6 "e-h-6"
* #e-h-6 ^designation[0].language = #nl-BE
* #e-h-6 ^designation[=].value = "h) Chronische auto-immune inflammatoire polyarthritis:Primair syndroom van Sjögren, volgens de definities aanvaard door de Koninklijke Belgische      Vereniging voor Reumatologie"
* #e-h-6 ^designation[+].language = #fr-BE
* #e-h-6 ^designation[=].value = "h) Polyarthrites chroniques inflammatoires d’origine immunitaire :Syndrome de Sjögren primaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)"
* #e-i-1 "e-i-1"
* #e-i-1 ^designation[0].language = #nl-BE
* #e-i-1 ^designation[=].value = "i) Myopathieën:    de progressieve erfelijke musculaire dystrofieën;"
* #e-i-1 ^designation[+].language = #fr-BE
* #e-i-1 ^designation[=].value = "i) Myopathies :Dystrophies musculaires progressives héréditaires"
* #e-i-2 "e-i-2"
* #e-i-2 ^designation[0].language = #nl-BE
* #e-i-2 ^designation[=].value = "i) Myopathieën:     de myotonia congenita van Thomsen;"
* #e-i-2 ^designation[+].language = #fr-BE
* #e-i-2 ^designation[=].value = "i) Myopathies :Myotonie congénitale de Thomsen"
* #e-i-3 "e-i-3"
* #e-i-3 ^designation[0].language = #nl-BE
* #e-i-3 ^designation[=].value = "i) Myopathieën:     de auto-immune polymuosotis;"
* #e-i-3 ^designation[+].language = #fr-BE
* #e-i-3 ^designation[=].value = "i) Myopathies :Polymyosite auto-immune"
* #e-j-1 "e-j-1"
* #e-j-1 ^designation[0].language = #nl-BE
* #e-j-1 ^designation[=].value = "j) longaandoeningen:Mucoviscidose of geobjectiveerde primaire bronchiale ciliaire dyskinesie;"
* #e-j-1 ^designation[+].language = #fr-BE
* #e-j-1 ^designation[=].value = "j) Affections pulmonaires :Mucoviscidose ou dyskinésie ciliaire bronchiale primaire objectivées"
* #e-j-2 "e-j-2"
* #e-j-2 ^designation[0].language = #nl-BE
* #e-j-2 ^designation[=].value = "j) longaandoeningen:Geobjectiveerde hyperproductieve bronchiectasieën"
* #e-j-2 ^designation[+].language = #fr-BE
* #e-j-2 ^designation[=].value = "j) Affections pulmonaires :Bronchiectasies hyperproductives objectivées"
* #e-j-3 "e-j-3"
* #e-j-3 ^designation[0].language = #nl-BE
* #e-j-3 ^designation[=].value = "j) longaandoeningen:Irreversibele chronische obstructieve of restrictieve longaandoeningen met maximum expiratoire seconde         capaciteit waarden van minder dan of gelijk aan 60%,   opgemeten in een tussenperiode van minstend één maand;  bij een kind jonger dan 7 jaar kan de irreversibele ademhalingsinsufficiëntie worden vastgesteld op basis van   een gemotiveerd verslag van de behandelende arts;"
* #e-j-3 ^designation[+].language = #fr-BE
* #e-j-3 ^designation[=].value = "j) Affections pulmonaires :Affections pulmonaires chroniques irréversibles obstructives ou restrictives avec des valeurs de volume expiratoire maximum-seconde inférieures ou égales à 60 % mesurées à un intervalle d'au moins 1 mois. Chez un enfant de moins de 7 ans, l'insuffisance respiratoire irréversible pourra être établie sur base d'un rapport motivé du spécialiste traitant"
* #e-j-4 "e-j-4"
* #e-j-4 ^designation[0].language = #nl-BE
* #e-j-4 ^designation[=].value = "j) longaandoeningen:Recidiverende pulmonaire infecties bij bewezen ernstige immunodepressie;"
* #e-j-4 ^designation[+].language = #fr-BE
* #e-j-4 ^designation[=].value = "j) Affections pulmonaires :Infections pulmonaires récidivantes en cas d'immunodépression grave établie"
* #e-j-5 "e-j-5"
* #e-j-5 ^designation[0].language = #nl-BE
* #e-j-5 ^designation[=].value = "j) longaandoeningen:    Broncho-pulmonaire dysplasie met zuurstofafhankelijkheid    gedurende meer dan 28 dagen. De met redenen omklede aanvraag van de behandelende kinderarts moet met name het verslag over de opneming in een dienst N omvatten;"
* #e-j-5 ^designation[+].language = #fr-BE
* #e-j-5 ^designation[=].value = "j) Affections pulmonaires :Dysplasie broncho-pulmonaire avec oxygénodépendance de plus de 28 jours. La demande motivée du pédiatre traitant comportera notamment le rapport d'hospitalisation en service N."
* #e-k "e-k"
* #e-k ^designation[0].language = #nl-BE
* #e-k ^designation[=].value = "k) Lymfoedeem: \r\n\r\nBij een eenzijdige aantasting ter hoogte van een lidmaat (bovenste of onderste) door een postradiotherapeutisch of postchirurgisch lymfoedeem dat beantwoordt aan de volgende criteria:\r\nofwel moet een perimetrie die is uitgevoerd op het hele lidmaat, of een volumetrisch onderzoek van de hand of de voet een verschil van +10 % aantonen ten opzichte van het contralaterale lidmaat. Die metingen moeten worden uitgevoerd volgens de protocollen die zijn vastgelegd door het Verzekeringscomité, op voorstel van het College van geneesheren-directeurs\r\nofwel moet een lymfoscintigrafisch onderzoek in 3 stappen de ernst van de diagnose bevestigen als aan een belangrijk criterium is voldaan volgens de lymfoscintigrafische classificatie van de oedemen van de ledematen met het oog op de kinesitherapeutische tenlasteneming ervan. Die classificatie wordt vastgelegd door het Verzekeringscomité, op voorstel van het College van geneesheren-directeurs\r\nVoor alle andere soorten van lymfoedeem moet een lymfoscintigrafisch onderzoek in 3 stappen de diagnose bevestigen als aan een belangrijk criterium is voldaan volgens de lymfoscintigrafische classificatie van de oedemen met het oog op de kinesitherapeutische tenlasteneming ervan.\r\n\r\nNochtans is een lymfoscintigrafisch onderzoek niet vereist in 3 gevallen:\r\nals het een cervico-faciaal oedeem betreft:\r\nals het een patiënt jonger dan 14 jaar betreft waarvoor het uitvoeren van een lymfoscintigrafisch onderzoek in drie stappen niet aangewezen is\r\nin geval van gemotiveerde fysieke onmogelijkheid om een lymfoscintigrafisch onderzoek in drie stappen uit te voeren.\r\nIn die 3 gevallen moet de geneesheer-specialist een gemotiveerd verslag dat de diagnose en de verzorgingsnood rechtvaardigt, aan de adviserend-geneesheer bezorgen. Deze zal, indien hij dat nuttig acht, dat dossier voor advies aan het College van Geneesheren-directeurs bezorgen."
* #e-k ^designation[+].language = #fr-BE
* #e-k ^designation[=].value = "k) Lymphoedème :\r\nEn cas d’atteinte unilatérale au niveau d’un membre (supérieur ou inférieur) pour un lymphoedème post-radiothérapeutique ou post-chirurgical répondant aux critères suivants :\r\nsoit une périmétrie effectuée sur l’ensemble du membre ou une volumétrie de la main ou du pied montre une différence par rapport au membre controlatéral de +10 %. Ces mesures doivent être effectuées selon les protocoles fixés par le Comité de l’assurance soins de santé, sur proposition du Collège des médecins-directeurs\r\nsoit une lymphoscintigraphie en 3 temps atteste de la gravité du diagnostic avec présence d’un critère majeur selon la classification lymphoscintigraphique des œdèmes des membres visant à leur prise en charge kinésithérapeutique. Cette classification est fixée par le Comité de l’assurance soins de santé, sur proposition du Collège des médecins-directeurs\r\nPour tous les autres types de lymphoedème, une lymphoscintigraphie en trois temps doit attester du diagnostic avec présence d’un critère majeur selon la classification lymphoscintigraphique des œdèmes visant à leur prise en charge kinésithérapeutique.\r\n\r\nNéanmoins, une lymphoscintigraphie n’est pas exigée dans 3 cas :\r\nil s’agit d’un lymphoedème cervico-facial\r\nil s’agit d’un patient de moins de 14 ans pour lequel la réalisation d’une lymphoscintigraphie en 3 temps n’est pas indiquée\r\nimpossibilité physique motivée de réaliser une lymphoscintigraphie en 3 temps.\r\nDans ces 3 cas, le médecin spécialiste doit envoyer au médecin-conseil un rapport motivé justifiant le diagnostic et la nécessité des soins. S’il le juge utile, le médecin-conseil envoie ce dossier pour avis au Collège des médecins-directeurs."
* #e-l "e-l"
* #e-l ^designation[0].language = #nl-BE
* #e-l ^designation[=].value = "l) structurele anomalie van het locomotorisch stelsel, dat ernstige functionele stoornissen veroorzaakt, ten gevolge van een zeldzame aandoening, met andere woorden een aandoening waarvan de prevalentie kleiner is dan 5 op 10.000 inwoners. Deze aandoening is ofwel van inflammatoire of metabole aard ofwel is zij het gevolg van een groei- of ontwikkelingsstoornis.”"
* #e-l ^designation[+].language = #fr-BE
* #e-l ^designation[=].value = "l) Anomalie structurelle du système locomoteur, occasionnant de graves troubles fonctionnels, sur base d’une affection rare, autrement dit dont la prévalence est inférieure à 5 pour 10.000 habitants. Cette affection est soit de nature inflammatoire ou métabolique, soit résultant d’un trouble de la croissance ou du développement."
* #eb-1-1 "eb-1-1"
* #eb-1-1 ^designation[0].language = #nl-BE
* #eb-1-1 ^designation[=].value = "Uitgebreide perifere verlamming:monoplegie"
* #eb-1-1 ^designation[+].language = #fr-BE
* #eb-1-1 ^designation[=].value = "Paralysie périphérique étendue Monoplégie"
* #eb-1-2 "eb-1-2"
* #eb-1-2 ^designation[0].language = #nl-BE
* #eb-1-2 ^designation[=].value = "Uitgebreide perifere verlamming:syndroom van Guillain Barré"
* #eb-1-2 ^designation[+].language = #fr-BE
* #eb-1-2 ^designation[=].value = "Paralysie périphérique étendue Syndrome de Guillain Barré"
* #eb-1-3 "eb-1-3"
* #eb-1-3 ^designation[0].language = #nl-BE
* #eb-1-3 ^designation[=].value = "Uitgebreide perifere verlamming:erfelijke polyneuropathie (vb ziekte van Charcot-Marie-Tooth))"
* #eb-1-3 ^designation[+].language = #fr-BE
* #eb-1-3 ^designation[=].value = "Paralysie périphérique étendue polyneuropathie héréditaire (ex. Maladie de Charcot-Marie-Tooth)"
* #eb-2-1 "eb-2-1"
* #eb-2-1 ^designation[0].language = #nl-BE
* #eb-2-1 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:multiple sclerose"
* #eb-2-1 ^designation[+].language = #fr-BE
* #eb-2-1 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étendusclérose en plaques"
* #eb-2-2 "eb-2-2"
* #eb-2-2 ^designation[0].language = #nl-BE
* #eb-2-2 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:de ziekte van Parkinson"
* #eb-2-2 ^designation[+].language = #fr-BE
* #eb-2-2 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étendumaladie de Parkinson"
* #eb-2-3 "eb-2-3"
* #eb-2-3 ^designation[0].language = #nl-BE
* #eb-2-3 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:Multipele Systeem Atrofie (in alle vormen)"
* #eb-2-3 ^designation[+].language = #fr-BE
* #eb-2-3 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étenduatrophies multisystématisées (toutes les formes)"
* #eb-2-4 "eb-2-4"
* #eb-2-4 ^designation[0].language = #nl-BE
* #eb-2-4 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:Progressive Supranuclear Palsy, Corticobasal Degeneration"
* #eb-2-4 ^designation[+].language = #fr-BE
* #eb-2-4 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étenduparalysie supranucléaire progressive, la dégénérescence corticobasale"
* #eb-2-5 "eb-2-5"
* #eb-2-5 ^designation[0].language = #nl-BE
* #eb-2-5 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:syndromen die geklasseerd worden onder de Parkinson-Plus syndromen"
* #eb-2-5 ^designation[+].language = #fr-BE
* #eb-2-5 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étenduautres syndromes classés sous les syndrômes dits « Parkinson-Plus »"
* #eb-2-6 "eb-2-6"
* #eb-2-6 ^designation[0].language = #nl-BE
* #eb-2-6 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:de ziekte van Huntington"
* #eb-2-6 ^designation[+].language = #fr-BE
* #eb-2-6 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étendumaladie de Huntington"
* #eb-2-7 "eb-2-7"
* #eb-2-7 ^designation[0].language = #nl-BE
* #eb-2-7 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:amyotrofische laterale sclerose"
* #eb-2-7 ^designation[+].language = #fr-BE
* #eb-2-7 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étendusclérose latérale amyotrophique"
* #eb-2-8 "eb-2-8"
* #eb-2-8 ^designation[0].language = #nl-BE
* #eb-2-8 ^designation[=].value = "Evolutieve aandoeningen van het centrale zenuwstelsel met een uitgebreid motorisch gebrek:spinocerebellaire ataxie"
* #eb-2-8 ^designation[+].language = #fr-BE
* #eb-2-8 ^designation[=].value = "Affections neurologiques centrales de caractère évolutif avec déficit moteur étenduataxie spinocérébellaire"
* #eb-3-1 "eb-3-1"
* #eb-3-1 ^designation[0].language = #nl-BE
* #eb-3-1 ^designation[=].value = "Uitgebreide motorische sequellen van encefale of medullaire oorsprong:hersenverlamming \"Cerebral Palsy\""
* #eb-3-1 ^designation[+].language = #fr-BE
* #eb-3-1 ^designation[=].value = "Séquelles motrices étendues d'origine encéphalique ou médullaire :infirmité motrice cérébrale \"Cerebral Palsy\""
* #eb-3-2 "eb-3-2"
* #eb-3-2 ^designation[0].language = #nl-BE
* #eb-3-2 ^designation[=].value = "Uitgebreide motorische sequellen van encefale of medullaire oorsprong:cerebrovasculair accident"
* #eb-3-2 ^designation[+].language = #fr-BE
* #eb-3-2 ^designation[=].value = "Séquelles motrices étendues d'origine encéphalique ou médullaire :accident vasculaire cérébral"
* #eb-3-3 "eb-3-3"
* #eb-3-3 ^designation[0].language = #nl-BE
* #eb-3-3 ^designation[=].value = "Uitgebreide motorische sequellen van encefale of medullaire oorsprong:paraplegie (-parese), quadriplegie (-parese) onafhankelijk van de etiologie"
* #eb-3-3 ^designation[+].language = #fr-BE
* #eb-3-3 ^designation[=].value = "Séquelles motrices étendues d'origine encéphalique ou médullaire :paraplégie (-parésie), quadriplégie (-parésie) quelque soit l’étiologie"
* #eb-3-4 "eb-3-4"
* #eb-3-4 ^designation[0].language = #nl-BE
* #eb-3-4 ^designation[=].value = "Uitgebreide motorische sequellen van encefale of medullaire oorsprong:spina bifida"
* #eb-3-4 ^designation[+].language = #fr-BE
* #eb-3-4 ^designation[=].value = "Séquelles motrices étendues d'origine encéphalique ou médullaire :spina bifida"
* #eb-3-5 "eb-3-5"
* #eb-3-5 ^designation[0].language = #nl-BE
* #eb-3-5 ^designation[=].value = "Uitgebreide motorische sequellen van encefale of medullaire oorsprong:cerebellair syndroom"
* #eb-3-5 ^designation[+].language = #fr-BE
* #eb-3-5 ^designation[=].value = "Séquelles motrices étendues d'origine encéphalique ou médullaire :syndrome cérébelleux"
* #eb-3-6 "eb-3-6"
* #eb-3-6 ^designation[0].language = #nl-BE
* #eb-3-6 ^designation[=].value = "Uitgebreide motorische sequellen van encefale of medullaire oorsprong:infectieuze of auto-immune encefalitis"
* #eb-3-6 ^designation[+].language = #fr-BE
* #eb-3-6 ^designation[=].value = "Séquelles motrices étendues d'origine encéphalique ou médullaire :encéphalite infectieuse ou auto-immune"
* #eb-4 "eb-4"
* #eb-4 ^designation[0].language = #nl-BE
* #eb-4 ^designation[=].value = "Belangrijk functioneel verlies van een lidmaat ten gevolge van een agenesie van het lidmaat of van een dysmelie die de anatomie van zijn verschillende segmenten aantast"
* #eb-4 ^designation[+].language = #fr-BE
* #eb-4 ^designation[=].value = "Perte fonctionnelle importante d’un membre suite à une agénésie du membre ou à une dysmélie affectant l’anatomie de ses différents segments"
* #eb-5-1 "eb-5-1"
* #eb-5-1 ^designation[0].language = #nl-BE
* #eb-5-1 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:hemofilie"
* #eb-5-1 ^designation[+].language = #fr-BE
* #eb-5-1 ^designation[=].value = "Dysfonction articulaire grave résultant :hémophilie"
* #eb-5-2-1 "eb-5-2-1"
* #eb-5-2-1 ^designation[0].language = #nl-BE
* #eb-5-2-1 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:erfelijke bindweefselaandoeningen/osteogenesis imperfecta van het type III en IV"
* #eb-5-2-1 ^designation[+].language = #fr-BE
* #eb-5-2-1 ^designation[=].value = "Dysfonction articulaire grave résultant :maladies héréditaires du tissu conjonctif/ostéogenèse imparfaite de type III et IV"
* #eb-5-2-2 "eb-5-2-2"
* #eb-5-2-2 ^designation[0].language = #nl-BE
* #eb-5-2-2 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:erfelijke bindweefselaandoeningen/Ehlers-Danlos-syndroom"
* #eb-5-2-2 ^designation[+].language = #fr-BE
* #eb-5-2-2 ^designation[=].value = "Dysfonction articulaire grave résultant :maladies héréditaires du tissu conjonctif/syndrome d'Ehlers-Danlos"
* #eb-5-2-3 "eb-5-2-3"
* #eb-5-2-3 ^designation[0].language = #nl-BE
* #eb-5-2-3 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:erfelijke bindweefselaandoeningen/chondrodysplasieën"
* #eb-5-2-3 ^designation[+].language = #fr-BE
* #eb-5-2-3 ^designation[=].value = "Dysfonction articulaire grave résultant :maladies héréditaires du tissu conjonctif/chondrodysplasies"
* #eb-5-2-4 "eb-5-2-4"
* #eb-5-2-4 ^designation[0].language = #nl-BE
* #eb-5-2-4 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:erfelijke bindweefselaandoeningen/Marfan-syndroom"
* #eb-5-2-4 ^designation[+].language = #fr-BE
* #eb-5-2-4 ^designation[=].value = "Dysfonction articulaire grave résultant :maladies héréditaires du tissu conjonctif/syndrome deMarfan"
* #eb-5-2-5 "eb-5-2-5"
* #eb-5-2-5 ^designation[0].language = #nl-BE
* #eb-5-2-5 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:erfelijke bindweefselaandoeningen/Anders"
* #eb-5-2-5 ^designation[+].language = #fr-BE
* #eb-5-2-5 ^designation[=].value = "Dysfonction articulaire grave résultant :maladies héréditaires du tissu conjonctif/Autre"
* #eb-5-3 "eb-5-3"
* #eb-5-3 ^designation[0].language = #nl-BE
* #eb-5-3 ^designation[=].value = "Ernstige gewrichtsdysfunctie ten gevolge van:multipel congenitale arthrogrypose"
* #eb-5-3 ^designation[+].language = #fr-BE
* #eb-5-3 ^designation[=].value = "Dysfonction articulaire grave résultant :arthrogrypose congénitale multiple"
* #eb-6-1 "eb-6-1"
* #eb-6-1 ^designation[0].language = #nl-BE
* #eb-6-1 ^designation[=].value = "Ernstige stoornissen van de gewrichtsfunctie(s), die het gevolg zijn van een chronische autoimmune inflammatoire polyarthritis (volgens de definities aanvaard door de Koninklijke Belgische Vereniging voor Reumatologie):reumatoïde artritis"
* #eb-6-1 ^designation[+].language = #fr-BE
* #eb-6-1 ^designation[=].value = "Troubles graves de la ou des fonctions articulaire(s), qui sont le résultat d’une polyarthrite chronique inflammatoire d’origine immunitaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)arthrite rhumatoïde"
* #eb-6-2 "eb-6-2"
* #eb-6-2 ^designation[0].language = #nl-BE
* #eb-6-2 ^designation[=].value = "Ernstige stoornissen van de gewrichtsfunctie(s), die het gevolg zijn van een chronische autoimmune inflammatoire polyarthritis (volgens de definities aanvaard door de Koninklijke Belgische Vereniging voor Reumatologie):spondyloartropathie"
* #eb-6-2 ^designation[+].language = #fr-BE
* #eb-6-2 ^designation[=].value = "Troubles graves de la ou des fonctions articulaire(s), qui sont le résultat d’une polyarthrite chronique inflammatoire d’origine immunitaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)spondyloarthropathies"
* #eb-6-3 "eb-6-3"
* #eb-6-3 ^designation[0].language = #nl-BE
* #eb-6-3 ^designation[=].value = "Ernstige stoornissen van de gewrichtsfunctie(s), die het gevolg zijn van een chronische autoimmune inflammatoire polyarthritis (volgens de definities aanvaard door de Koninklijke Belgische Vereniging voor Reumatologie):juveniele chronische artritis"
* #eb-6-3 ^designation[+].language = #fr-BE
* #eb-6-3 ^designation[=].value = "Troubles graves de la ou des fonctions articulaire(s), qui sont le résultat d’une polyarthrite chronique inflammatoire d’origine immunitaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)arthrite rhumatoïde juvénile"
* #eb-6-4 "eb-6-4"
* #eb-6-4 ^designation[0].language = #nl-BE
* #eb-6-4 ^designation[=].value = "Ernstige stoornissen van de gewrichtsfunctie(s), die het gevolg zijn van een chronische autoimmune inflammatoire polyarthritis (volgens de definities aanvaard door de Koninklijke Belgische Vereniging voor Reumatologie):systemische lupus"
* #eb-6-4 ^designation[+].language = #fr-BE
* #eb-6-4 ^designation[=].value = "Troubles graves de la ou des fonctions articulaire(s), qui sont le résultat d’une polyarthrite chronique inflammatoire d’origine immunitaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)lupus erythémateux"
* #eb-6-5 "eb-6-5"
* #eb-6-5 ^designation[0].language = #nl-BE
* #eb-6-5 ^designation[=].value = "Ernstige stoornissen van de gewrichtsfunctie(s), die het gevolg zijn van een chronische autoimmune inflammatoire polyarthritis (volgens de definities aanvaard door de Koninklijke Belgische Vereniging voor Reumatologie):sclerodermie"
* #eb-6-5 ^designation[+].language = #fr-BE
* #eb-6-5 ^designation[=].value = "Troubles graves de la ou des fonctions articulaire(s), qui sont le résultat d’une polyarthrite chronique inflammatoire d’origine immunitaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)sclérodermie"
* #eb-6-6 "eb-6-6"
* #eb-6-6 ^designation[0].language = #nl-BE
* #eb-6-6 ^designation[=].value = "Ernstige stoornissen van de gewrichtsfunctie(s), die het gevolg zijn van een chronische autoimmune inflammatoire polyarthritis (volgens de definities aanvaard door de Koninklijke Belgische Vereniging voor Reumatologie):primair syndroom van Sjögren"
* #eb-6-6 ^designation[+].language = #fr-BE
* #eb-6-6 ^designation[=].value = "Troubles graves de la ou des fonctions articulaire(s), qui sont le résultat d’une polyarthrite chronique inflammatoire d’origine immunitaire (selon les définitions acceptées par la Société Royale Belge de Rhumatologie)syndrome de Sjögren primaire"
* #eb-7-1 "eb-7-1"
* #eb-7-1 ^designation[0].language = #nl-BE
* #eb-7-1 ^designation[=].value = "Myopathieën:erfelijke evolutieve myopathieën (waaronder de spierziekte van Duchenne,…)"
* #eb-7-1 ^designation[+].language = #fr-BE
* #eb-7-1 ^designation[=].value = "Myopathies : myopathies héréditaires évolutives (dont la dystrophie musculaire de Duchenne…)"
* #eb-7-2 "eb-7-2"
* #eb-7-2 ^designation[0].language = #nl-BE
* #eb-7-2 ^designation[=].value = "Myopathieën:myotone dystrofie (onder andere de ziekte van Steinert,…)"
* #eb-7-2 ^designation[+].language = #fr-BE
* #eb-7-2 ^designation[=].value = "Myopathies : dystrophies myotoniques (dont la maladie de Steinert,…)"
* #eb-7-3 "eb-7-3"
* #eb-7-3 ^designation[0].language = #nl-BE
* #eb-7-3 ^designation[=].value = "Myopathieën:myotonia congenita (onder andere de ziekte van Thomsen,…)"
* #eb-7-3 ^designation[+].language = #fr-BE
* #eb-7-3 ^designation[=].value = "Myopathies : myotonie congénitale (dont la maladie de Thomsen,…)"
* #eb-7-4 "eb-7-4"
* #eb-7-4 ^designation[0].language = #nl-BE
* #eb-7-4 ^designation[=].value = "Myopathieën:auto-immune polymyositis"
* #eb-7-4 ^designation[+].language = #fr-BE
* #eb-7-4 ^designation[=].value = "Myopathies : Polymyosite auto-immune"
* #eb-8 "eb-8"
* #eb-8 ^designation[0].language = #nl-BE
* #eb-8 ^designation[=].value = "Mucoviscidose of geobjectiveerde primaire bronchiale ciliaire dyskinesie"
* #eb-8 ^designation[+].language = #fr-BE
* #eb-8 ^designation[=].value = "Mucoviscidose ou dyskinésie ciliaire bronchiale primaire objectivées"
* #eb-9 "eb-9"
* #eb-9 ^designation[0].language = #nl-BE
* #eb-9 ^designation[=].value = "Geobjectiveerde hyperproductieve bronchiectasieën"
* #eb-9 ^designation[+].language = #fr-BE
* #eb-9 ^designation[=].value = "Bronchiectasies hyperproductives objectivées"
* #eb-10 "eb-10"
* #eb-10 ^designation[0].language = #nl-BE
* #eb-10 ^designation[=].value = "Irreversibele chronische obstructieve of restrictieve longaandoeningen met maximum expiratoire secondecapaciteit waarden van minder dan of gelijk aan 60 pct., opgemeten in een tussenperiode van minstens één maand; bij een kind jonger dan 7 jaar kan de irreversibele ademhalingsinsufficiëntie worden vastgesteld op basis van een gemotiveerd verslag van de behandelende specialist"
* #eb-10 ^designation[+].language = #fr-BE
* #eb-10 ^designation[=].value = "Affections pulmonaires chroniques irréversibles obstructives ou restrictives avec des valeurs de volume expiratoire maximum-seconde inférieures ou égales à 60 % mesurées à un intervalle d'au moins 1 mois ; chez un enfant de moins de 7 ans, l'insuffisance respiratoire irréversible pourra être établie sur base d'un rapport motivé du spécialiste traitant"
* #eb-11 "eb-11"
* #eb-11 ^designation[0].language = #nl-BE
* #eb-11 ^designation[=].value = "Recidiverende pulmonaire infecties bij bewezen ernstige immunodepressie"
* #eb-11 ^designation[+].language = #fr-BE
* #eb-11 ^designation[=].value = "Infections pulmonaires récidivantes en cas d'immunodépression grave établie"
* #eb-12 "eb-12"
* #eb-12 ^designation[0].language = #nl-BE
* #eb-12 ^designation[=].value = "Broncho-pulmonaire dysplasie met zuurstofafhankelijkheid gedurende meer dan 28 dagen"
* #eb-12 ^designation[+].language = #fr-BE
* #eb-12 ^designation[=].value = "Dysplasie broncho-pulmonaire avec oxygénodépendance de plus de 28 jours"
* #eb-13 "eb-13"
* #eb-13 ^designation[0].language = #nl-BE
* #eb-13 ^designation[=].value = "Epidermolysis bullosa in de dystrofische of junctionele vorm"
* #eb-13 ^designation[+].language = #fr-BE
* #eb-13 ^designation[=].value = "Épidermolyse bulleuse dans la forme dystrophique ou jonctionnelle"
* #m-1 "m-1"
* #m-1 ^designation[0].language = #nl-BE
* #m-1 ^designation[=].value = "Pre en/of post-partum zorgen"
* #m-1 ^designation[+].language = #fr-BE
* #m-1 ^designation[=].value = "Soins pré et/ou post partum"
* #p-1 "p-1"
* #p-1 ^designation[0].language = #nl-BE
* #p-1 ^designation[=].value = "Paliatieve zorgen"
* #p-1 ^designation[+].language = #fr-BE
* #p-1 ^designation[=].value = "Soins palliatifs"
* #dh-1 "dh-1"
* #dh-1 ^designation[0].language = #nl-BE
* #dh-1 ^designation[=].value = "Daghospitalisatie"
* #dh-1 ^designation[+].language = #fr-BE
* #dh-1 ^designation[=].value = "Hospitalisation de jour"
* #cr-1 "cr-1"
* #cr-1 ^designation[0].language = #nl-BE
* #cr-1 ^designation[=].value = "Consultatief onderzoek"
* #cr-1 ^designation[+].language = #fr-BE
* #cr-1 ^designation[=].value = "Examen consultatif"
* #co-0-0-0-0 "co-0-0-0-0"
* #co-0-0-0-0 ^designation[0].language = #nl-BE
* #co-0-0-0-0 ^designation[=].value = "n/a n/a Onbepaalde pathologische situatie (papieren akkoord) -"
* #co-0-0-0-0 ^designation[+].language = #fr-BE
* #co-0-0-0-0 ^designation[=].value = "n/a n/a Situation pathologique non définie (accord papier) -"
* #co-1-1-1-0 "co-1-1-1-0"
* #co-1-1-1-0 ^designation[0].language = #nl-BE
* #co-1-1-1-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Artrose -"
* #co-1-1-1-0 ^designation[+].language = #fr-BE
* #co-1-1-1-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Arthrose -"
* #co-1-1-2-0 "co-1-1-2-0"
* #co-1-1-2-0 ^designation[0].language = #nl-BE
* #co-1-1-2-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Discopathie, Discushernia -"
* #co-1-1-2-0 ^designation[+].language = #fr-BE
* #co-1-1-2-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Discopathie, Hernie discale -"
* #co-1-1-3-0 "co-1-1-3-0"
* #co-1-1-3-0 ^designation[0].language = #nl-BE
* #co-1-1-3-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Spinaal kanaalstenose -"
* #co-1-1-3-0 ^designation[+].language = #fr-BE
* #co-1-1-3-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Sténose du canal rachidien -"
* #co-1-1-4-0 "co-1-1-4-0"
* #co-1-1-4-0 ^designation[0].language = #nl-BE
* #co-1-1-4-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Cervico-brachialgie -"
* #co-1-1-4-0 ^designation[+].language = #fr-BE
* #co-1-1-4-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Cervico-brachialgie -"
* #co-1-1-5-0 "co-1-1-5-0"
* #co-1-1-5-0 ^designation[0].language = #nl-BE
* #co-1-1-5-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Occipitalgie, Occipitalisneuralgie, Spanningshoofdpijn, Migraine -"
* #co-1-1-5-0 ^designation[+].language = #fr-BE
* #co-1-1-5-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Occipitalgie, Névralgie occipitale, Céphalée de tension, Migraine -"
* #co-1-1-6-0 "co-1-1-6-0"
* #co-1-1-6-0 ^designation[0].language = #nl-BE
* #co-1-1-6-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Torticollis -"
* #co-1-1-6-0 ^designation[+].language = #fr-BE
* #co-1-1-6-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Torticolis -"
* #co-1-1-7-0 "co-1-1-7-0"
* #co-1-1-7-0 ^designation[0].language = #nl-BE
* #co-1-1-7-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Trapeziussyndroom -"
* #co-1-1-7-0 ^designation[+].language = #fr-BE
* #co-1-1-7-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Syndrome du trapèze -"
* #co-1-1-8-0 "co-1-1-8-0"
* #co-1-1-8-0 ^designation[0].language = #nl-BE
* #co-1-1-8-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Whiplash -"
* #co-1-1-8-0 ^designation[+].language = #fr-BE
* #co-1-1-8-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Coup de fouet -"
* #co-1-1-90-0 "co-1-1-90-0"
* #co-1-1-90-0 ^designation[0].language = #nl-BE
* #co-1-1-90-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Fraktuur  -"
* #co-1-1-90-0 ^designation[+].language = #fr-BE
* #co-1-1-90-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Fracture -"
* #co-1-1-99-0 "co-1-1-99-0"
* #co-1-1-99-0 ^designation[0].language = #nl-BE
* #co-1-1-99-0 ^designation[=].value = "Wervelzuil Nek- Cervicaal  Andere (ook uit F-E-11bis) -"
* #co-1-1-99-0 ^designation[+].language = #fr-BE
* #co-1-1-99-0 ^designation[=].value = "Colonne vertébrale Nuque - Cervical Autre (également de F-E-11bis) -"
* #co-1-2-1-0 "co-1-2-1-0"
* #co-1-2-1-0 ^designation[0].language = #nl-BE
* #co-1-2-1-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Artrose -"
* #co-1-2-1-0 ^designation[+].language = #fr-BE
* #co-1-2-1-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Arthrose -"
* #co-1-2-2-0 "co-1-2-2-0"
* #co-1-2-2-0 ^designation[0].language = #nl-BE
* #co-1-2-2-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Discopathie, Discushernia -"
* #co-1-2-2-0 ^designation[+].language = #fr-BE
* #co-1-2-2-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Discopathie, Hernie discale -"
* #co-1-2-3-0 "co-1-2-3-0"
* #co-1-2-3-0 ^designation[0].language = #nl-BE
* #co-1-2-3-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Spinaal kanaal stenose -"
* #co-1-2-3-0 ^designation[+].language = #fr-BE
* #co-1-2-3-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Sténose du canal rachidien -"
* #co-1-2-4-0 "co-1-2-4-0"
* #co-1-2-4-0 ^designation[0].language = #nl-BE
* #co-1-2-4-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Dorsalgie -"
* #co-1-2-4-0 ^designation[+].language = #fr-BE
* #co-1-2-4-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Dorsalgie -"
* #co-1-2-5-0 "co-1-2-5-0"
* #co-1-2-5-0 ^designation[0].language = #nl-BE
* #co-1-2-5-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Dorsaal radiculair syndroom, Radiculopathie -"
* #co-1-2-5-0 ^designation[+].language = #fr-BE
* #co-1-2-5-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Syndrome radiculaire dorsal, Radiculopathie -"
* #co-1-2-6-0 "co-1-2-6-0"
* #co-1-2-6-0 ^designation[0].language = #nl-BE
* #co-1-2-6-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) (Kyfo)scoliose -"
* #co-1-2-6-0 ^designation[+].language = #fr-BE
* #co-1-2-6-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) (Kyfo)scoliose -"
* #co-1-2-90-0 "co-1-2-90-0"
* #co-1-2-90-0 ^designation[0].language = #nl-BE
* #co-1-2-90-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Fraktuur  -"
* #co-1-2-90-0 ^designation[+].language = #fr-BE
* #co-1-2-90-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Fracture -"
* #co-1-2-99-0 "co-1-2-99-0"
* #co-1-2-99-0 ^designation[0].language = #nl-BE
* #co-1-2-99-0 ^designation[=].value = "Wervelzuil Rug (Thoracaal) Andere (ook uit F-E-11bis) -"
* #co-1-2-99-0 ^designation[+].language = #fr-BE
* #co-1-2-99-0 ^designation[=].value = "Colonne vertébrale Dos (Thoracique) Autre (également de F-E-11bis) -"
* #co-1-3-1-0 "co-1-3-1-0"
* #co-1-3-1-0 ^designation[0].language = #nl-BE
* #co-1-3-1-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Artrose -"
* #co-1-3-1-0 ^designation[+].language = #fr-BE
* #co-1-3-1-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Arthrose -"
* #co-1-3-2-0 "co-1-3-2-0"
* #co-1-3-2-0 ^designation[0].language = #nl-BE
* #co-1-3-2-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Discopathie, Discushernia -"
* #co-1-3-2-0 ^designation[+].language = #fr-BE
* #co-1-3-2-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Discopathie, Hernie discale -"
* #co-1-3-3-0 "co-1-3-3-0"
* #co-1-3-3-0 ^designation[0].language = #nl-BE
* #co-1-3-3-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Spinaal kanaal stenose -"
* #co-1-3-3-0 ^designation[+].language = #fr-BE
* #co-1-3-3-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Sténose du canal rachidien -"
* #co-1-3-4-0 "co-1-3-4-0"
* #co-1-3-4-0 ^designation[0].language = #nl-BE
* #co-1-3-4-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Lage rugpijn, Lumbalgie -"
* #co-1-3-4-0 ^designation[+].language = #fr-BE
* #co-1-3-4-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Lombalgie -"
* #co-1-3-5-0 "co-1-3-5-0"
* #co-1-3-5-0 ^designation[0].language = #nl-BE
* #co-1-3-5-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Lumbo-ischialgie -"
* #co-1-3-5-0 ^designation[+].language = #fr-BE
* #co-1-3-5-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Lombo sciatique -"
* #co-1-3-6-0 "co-1-3-6-0"
* #co-1-3-6-0 ^designation[0].language = #nl-BE
* #co-1-3-6-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Lumbosacraal radiculair syndroom, Radiculopathie -"
* #co-1-3-6-0 ^designation[+].language = #fr-BE
* #co-1-3-6-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Syndrome radiculaire lombo-sacré, Radiculopathie -"
* #co-1-3-7-0 "co-1-3-7-0"
* #co-1-3-7-0 ^designation[0].language = #nl-BE
* #co-1-3-7-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Sacro-iliac disorder -"
* #co-1-3-7-0 ^designation[+].language = #fr-BE
* #co-1-3-7-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Trouble sacro-iliaque -"
* #co-1-3-8-0 "co-1-3-8-0"
* #co-1-3-8-0 ^designation[0].language = #nl-BE
* #co-1-3-8-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Spondylolisthesis, Spondylolyse -"
* #co-1-3-8-0 ^designation[+].language = #fr-BE
* #co-1-3-8-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Spondylolisthésis, Spondylolyse -"
* #co-1-3-90-0 "co-1-3-90-0"
* #co-1-3-90-0 ^designation[0].language = #nl-BE
* #co-1-3-90-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Fraktuur  -"
* #co-1-3-90-0 ^designation[+].language = #fr-BE
* #co-1-3-90-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Fracture -"
* #co-1-3-99-0 "co-1-3-99-0"
* #co-1-3-99-0 ^designation[0].language = #nl-BE
* #co-1-3-99-0 ^designation[=].value = "Wervelzuil Rug (Lumbaal - Sacraal) Andere (ook uit F-E-11bis) -"
* #co-1-3-99-0 ^designation[+].language = #fr-BE
* #co-1-3-99-0 ^designation[=].value = "Colonne vertébrale Dos (Lombo-sacral) Autre (également de F-E-11bis) -"
* #co-2-1-1-1 "co-2-1-1-1"
* #co-2-1-1-1 ^designation[0].language = #nl-BE
* #co-2-1-1-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Artrose Links"
* #co-2-1-1-1 ^designation[+].language = #fr-BE
* #co-2-1-1-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Arthrose Gauche"
* #co-2-1-1-2 "co-2-1-1-2"
* #co-2-1-1-2 ^designation[0].language = #nl-BE
* #co-2-1-1-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Artrose Rechts"
* #co-2-1-1-2 ^designation[+].language = #fr-BE
* #co-2-1-1-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Arthrose Droit"
* #co-2-1-1-3 "co-2-1-1-3"
* #co-2-1-1-3 ^designation[0].language = #nl-BE
* #co-2-1-1-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Artrose Beiden"
* #co-2-1-1-3 ^designation[+].language = #fr-BE
* #co-2-1-1-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Arthrose Gauche et Droit"
* #co-2-1-2-1 "co-2-1-2-1"
* #co-2-1-2-1 ^designation[0].language = #nl-BE
* #co-2-1-2-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Links"
* #co-2-1-2-1 ^designation[+].language = #fr-BE
* #co-2-1-2-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche"
* #co-2-1-2-2 "co-2-1-2-2"
* #co-2-1-2-2 ^designation[0].language = #nl-BE
* #co-2-1-2-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Rechts"
* #co-2-1-2-2 ^designation[+].language = #fr-BE
* #co-2-1-2-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Droit"
* #co-2-1-2-3 "co-2-1-2-3"
* #co-2-1-2-3 ^designation[0].language = #nl-BE
* #co-2-1-2-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Beiden"
* #co-2-1-2-3 ^designation[+].language = #fr-BE
* #co-2-1-2-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche et Droit"
* #co-2-1-3-1 "co-2-1-3-1"
* #co-2-1-3-1 ^designation[0].language = #nl-BE
* #co-2-1-3-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm (Rotator)cuff lijden  Links"
* #co-2-1-3-1 ^designation[+].language = #fr-BE
* #co-2-1-3-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Lésion de la coiffe (des rotateurs) Gauche"
* #co-2-1-3-2 "co-2-1-3-2"
* #co-2-1-3-2 ^designation[0].language = #nl-BE
* #co-2-1-3-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm (Rotator)cuff lijden  Rechts"
* #co-2-1-3-2 ^designation[+].language = #fr-BE
* #co-2-1-3-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Lésion de la coiffe (des rotateurs) Droit"
* #co-2-1-3-3 "co-2-1-3-3"
* #co-2-1-3-3 ^designation[0].language = #nl-BE
* #co-2-1-3-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm (Rotator)cuff lijden  Beiden"
* #co-2-1-3-3 ^designation[+].language = #fr-BE
* #co-2-1-3-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Lésion de la coiffe (des rotateurs) Gauche et Droit"
* #co-2-1-4-1 "co-2-1-4-1"
* #co-2-1-4-1 ^designation[0].language = #nl-BE
* #co-2-1-4-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Inpingement Links"
* #co-2-1-4-1 ^designation[+].language = #fr-BE
* #co-2-1-4-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Pincement Gauche"
* #co-2-1-4-2 "co-2-1-4-2"
* #co-2-1-4-2 ^designation[0].language = #nl-BE
* #co-2-1-4-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Inpingement Rechts"
* #co-2-1-4-2 ^designation[+].language = #fr-BE
* #co-2-1-4-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Pincement Droit"
* #co-2-1-4-3 "co-2-1-4-3"
* #co-2-1-4-3 ^designation[0].language = #nl-BE
* #co-2-1-4-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Inpingement Beiden"
* #co-2-1-4-3 ^designation[+].language = #fr-BE
* #co-2-1-4-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Pincement Gauche et Droit"
* #co-2-1-5-1 "co-2-1-5-1"
* #co-2-1-5-1 ^designation[0].language = #nl-BE
* #co-2-1-5-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Luxatie Links"
* #co-2-1-5-1 ^designation[+].language = #fr-BE
* #co-2-1-5-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Luxation Gauche"
* #co-2-1-5-2 "co-2-1-5-2"
* #co-2-1-5-2 ^designation[0].language = #nl-BE
* #co-2-1-5-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Luxatie Rechts"
* #co-2-1-5-2 ^designation[+].language = #fr-BE
* #co-2-1-5-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Luxation Droit"
* #co-2-1-5-3 "co-2-1-5-3"
* #co-2-1-5-3 ^designation[0].language = #nl-BE
* #co-2-1-5-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Luxatie Beiden"
* #co-2-1-5-3 ^designation[+].language = #fr-BE
* #co-2-1-5-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Luxation Gauche et Droit"
* #co-2-1-6-1 "co-2-1-6-1"
* #co-2-1-6-1 ^designation[0].language = #nl-BE
* #co-2-1-6-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Thoracic Outlet Syndroom Links"
* #co-2-1-6-1 ^designation[+].language = #fr-BE
* #co-2-1-6-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Syndrome du défilé thoraco-brachial (Thoracic Outlet Syndrome) Gauche"
* #co-2-1-6-2 "co-2-1-6-2"
* #co-2-1-6-2 ^designation[0].language = #nl-BE
* #co-2-1-6-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Thoracic Outlet Syndroom Rechts"
* #co-2-1-6-2 ^designation[+].language = #fr-BE
* #co-2-1-6-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Syndrome du défilé thoraco-brachial (Thoracic Outlet Syndrome) Droit"
* #co-2-1-6-3 "co-2-1-6-3"
* #co-2-1-6-3 ^designation[0].language = #nl-BE
* #co-2-1-6-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Thoracic Outlet Syndroom Beiden"
* #co-2-1-6-3 ^designation[+].language = #fr-BE
* #co-2-1-6-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Syndrome du défilé thoraco-brachial (Thoracic Outlet Syndrome) Gauche et Droit"
* #co-2-1-90-1 "co-2-1-90-1"
* #co-2-1-90-1 ^designation[0].language = #nl-BE
* #co-2-1-90-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Fraktuur  Links"
* #co-2-1-90-1 ^designation[+].language = #fr-BE
* #co-2-1-90-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Fracture Gauche"
* #co-2-1-90-2 "co-2-1-90-2"
* #co-2-1-90-2 ^designation[0].language = #nl-BE
* #co-2-1-90-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Fraktuur  Rechts"
* #co-2-1-90-2 ^designation[+].language = #fr-BE
* #co-2-1-90-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Fracture Droit"
* #co-2-1-90-3 "co-2-1-90-3"
* #co-2-1-90-3 ^designation[0].language = #nl-BE
* #co-2-1-90-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Fraktuur  Beiden"
* #co-2-1-90-3 ^designation[+].language = #fr-BE
* #co-2-1-90-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Fracture Gauche et Droit"
* #co-2-1-99-1 "co-2-1-99-1"
* #co-2-1-99-1 ^designation[0].language = #nl-BE
* #co-2-1-99-1 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Andere (ook uit F-E-11bis) Links"
* #co-2-1-99-1 ^designation[+].language = #fr-BE
* #co-2-1-99-1 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Autre (également de F-E-11bis) Gauche"
* #co-2-1-99-2 "co-2-1-99-2"
* #co-2-1-99-2 ^designation[0].language = #nl-BE
* #co-2-1-99-2 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Andere (ook uit F-E-11bis) Rechts"
* #co-2-1-99-2 ^designation[+].language = #fr-BE
* #co-2-1-99-2 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Autre (également de F-E-11bis) Droit"
* #co-2-1-99-3 "co-2-1-99-3"
* #co-2-1-99-3 ^designation[0].language = #nl-BE
* #co-2-1-99-3 ^designation[=].value = "Bovenste extremiteit Schouder - Bovenarm Andere (ook uit F-E-11bis) Beiden"
* #co-2-1-99-3 ^designation[+].language = #fr-BE
* #co-2-1-99-3 ^designation[=].value = "Membre supérieur Epaule - Haut du bras Autre (également de F-E-11bis) Gauche et Droit"
* #co-2-2-1-1 "co-2-2-1-1"
* #co-2-2-1-1 ^designation[0].language = #nl-BE
* #co-2-2-1-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Artrose Links"
* #co-2-2-1-1 ^designation[+].language = #fr-BE
* #co-2-2-1-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Arthrose Gauche"
* #co-2-2-1-2 "co-2-2-1-2"
* #co-2-2-1-2 ^designation[0].language = #nl-BE
* #co-2-2-1-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Artrose Rechts"
* #co-2-2-1-2 ^designation[+].language = #fr-BE
* #co-2-2-1-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Arthrose Droit"
* #co-2-2-1-3 "co-2-2-1-3"
* #co-2-2-1-3 ^designation[0].language = #nl-BE
* #co-2-2-1-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Artrose Beiden"
* #co-2-2-1-3 ^designation[+].language = #fr-BE
* #co-2-2-1-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Arthrose Gauche et Droit"
* #co-2-2-2-1 "co-2-2-2-1"
* #co-2-2-2-1 ^designation[0].language = #nl-BE
* #co-2-2-2-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Links"
* #co-2-2-2-1 ^designation[+].language = #fr-BE
* #co-2-2-2-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche"
* #co-2-2-2-2 "co-2-2-2-2"
* #co-2-2-2-2 ^designation[0].language = #nl-BE
* #co-2-2-2-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Rechts"
* #co-2-2-2-2 ^designation[+].language = #fr-BE
* #co-2-2-2-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Droit"
* #co-2-2-2-3 "co-2-2-2-3"
* #co-2-2-2-3 ^designation[0].language = #nl-BE
* #co-2-2-2-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Beiden"
* #co-2-2-2-3 ^designation[+].language = #fr-BE
* #co-2-2-2-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche et Droit"
* #co-2-2-3-1 "co-2-2-3-1"
* #co-2-2-3-1 ^designation[0].language = #nl-BE
* #co-2-2-3-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Epicondylitis medialis, Tenniselleboog Links"
* #co-2-2-3-1 ^designation[+].language = #fr-BE
* #co-2-2-3-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Epicondylite médiale, Tennis elbow Gauche"
* #co-2-2-3-2 "co-2-2-3-2"
* #co-2-2-3-2 ^designation[0].language = #nl-BE
* #co-2-2-3-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Epicondylitis medialis, Tenniselleboog Rechts"
* #co-2-2-3-2 ^designation[+].language = #fr-BE
* #co-2-2-3-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Epicondylite médiale, Tennis elbow Droit"
* #co-2-2-3-3 "co-2-2-3-3"
* #co-2-2-3-3 ^designation[0].language = #nl-BE
* #co-2-2-3-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Epicondylitis medialis, Tenniselleboog Beiden"
* #co-2-2-3-3 ^designation[+].language = #fr-BE
* #co-2-2-3-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Epicondylite médiale, Tennis elbow Gauche et Droit"
* #co-2-2-4-1 "co-2-2-4-1"
* #co-2-2-4-1 ^designation[0].language = #nl-BE
* #co-2-2-4-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Epicondylitis ulnaris, Golferselleboog Links"
* #co-2-2-4-1 ^designation[+].language = #fr-BE
* #co-2-2-4-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Epicondylite ulnaire, Coude du golfeur Gauche"
* #co-2-2-4-2 "co-2-2-4-2"
* #co-2-2-4-2 ^designation[0].language = #nl-BE
* #co-2-2-4-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Epicondylitis ulnaris, Golferselleboog Rechts"
* #co-2-2-4-2 ^designation[+].language = #fr-BE
* #co-2-2-4-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Epicondylite ulnaire, Coude du golfeur Droit"
* #co-2-2-4-3 "co-2-2-4-3"
* #co-2-2-4-3 ^designation[0].language = #nl-BE
* #co-2-2-4-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Epicondylitis ulnaris, Golferselleboog Beiden"
* #co-2-2-4-3 ^designation[+].language = #fr-BE
* #co-2-2-4-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Epicondylite ulnaire, Coude du golfeur Gauche et Droit"
* #co-2-2-5-1 "co-2-2-5-1"
* #co-2-2-5-1 ^designation[0].language = #nl-BE
* #co-2-2-5-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Repetitive strain injury (RSI) Links"
* #co-2-2-5-1 ^designation[+].language = #fr-BE
* #co-2-2-5-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Microtraumatismes répétés (RSI) Gauche"
* #co-2-2-5-2 "co-2-2-5-2"
* #co-2-2-5-2 ^designation[0].language = #nl-BE
* #co-2-2-5-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Repetitive strain injury (RSI) Rechts"
* #co-2-2-5-2 ^designation[+].language = #fr-BE
* #co-2-2-5-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Microtraumatismes répétés (RSI) Droit"
* #co-2-2-5-3 "co-2-2-5-3"
* #co-2-2-5-3 ^designation[0].language = #nl-BE
* #co-2-2-5-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Repetitive strain injury (RSI) Beiden"
* #co-2-2-5-3 ^designation[+].language = #fr-BE
* #co-2-2-5-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Microtraumatismes répétés (RSI) Gauche et Droit"
* #co-2-2-90-1 "co-2-2-90-1"
* #co-2-2-90-1 ^designation[0].language = #nl-BE
* #co-2-2-90-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Fraktuur  Links"
* #co-2-2-90-1 ^designation[+].language = #fr-BE
* #co-2-2-90-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Fracture Gauche"
* #co-2-2-90-2 "co-2-2-90-2"
* #co-2-2-90-2 ^designation[0].language = #nl-BE
* #co-2-2-90-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Fraktuur  Rechts"
* #co-2-2-90-2 ^designation[+].language = #fr-BE
* #co-2-2-90-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Fracture Droit"
* #co-2-2-90-3 "co-2-2-90-3"
* #co-2-2-90-3 ^designation[0].language = #nl-BE
* #co-2-2-90-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Fraktuur  Beiden"
* #co-2-2-90-3 ^designation[+].language = #fr-BE
* #co-2-2-90-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Fracture Gauche et Droit"
* #co-2-2-99-1 "co-2-2-99-1"
* #co-2-2-99-1 ^designation[0].language = #nl-BE
* #co-2-2-99-1 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Andere (ook uit F-E-11bis) Links"
* #co-2-2-99-1 ^designation[+].language = #fr-BE
* #co-2-2-99-1 ^designation[=].value = "Membre supérieur Coude - Avant-bras Autre (également de F-E-11bis) Gauche"
* #co-2-2-99-2 "co-2-2-99-2"
* #co-2-2-99-2 ^designation[0].language = #nl-BE
* #co-2-2-99-2 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Andere (ook uit F-E-11bis) Rechts"
* #co-2-2-99-2 ^designation[+].language = #fr-BE
* #co-2-2-99-2 ^designation[=].value = "Membre supérieur Coude - Avant-bras Autre (également de F-E-11bis) Droit"
* #co-2-2-99-3 "co-2-2-99-3"
* #co-2-2-99-3 ^designation[0].language = #nl-BE
* #co-2-2-99-3 ^designation[=].value = "Bovenste extremiteit Elleboog - Onderarm Andere (ook uit F-E-11bis) Beiden"
* #co-2-2-99-3 ^designation[+].language = #fr-BE
* #co-2-2-99-3 ^designation[=].value = "Membre supérieur Coude - Avant-bras Autre (également de F-E-11bis) Gauche et Droit"
* #co-2-3-1-1 "co-2-3-1-1"
* #co-2-3-1-1 ^designation[0].language = #nl-BE
* #co-2-3-1-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand Artrose Links"
* #co-2-3-1-1 ^designation[+].language = #fr-BE
* #co-2-3-1-1 ^designation[=].value = "Membre supérieur Poignet - Main Arthrose Gauche"
* #co-2-3-1-2 "co-2-3-1-2"
* #co-2-3-1-2 ^designation[0].language = #nl-BE
* #co-2-3-1-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand Artrose Rechts"
* #co-2-3-1-2 ^designation[+].language = #fr-BE
* #co-2-3-1-2 ^designation[=].value = "Membre supérieur Poignet - Main Arthrose Droit"
* #co-2-3-1-3 "co-2-3-1-3"
* #co-2-3-1-3 ^designation[0].language = #nl-BE
* #co-2-3-1-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand Artrose Beiden"
* #co-2-3-1-3 ^designation[+].language = #fr-BE
* #co-2-3-1-3 ^designation[=].value = "Membre supérieur Poignet - Main Arthrose Gauche et Droit"
* #co-2-3-2-1 "co-2-3-2-1"
* #co-2-3-2-1 ^designation[0].language = #nl-BE
* #co-2-3-2-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Links"
* #co-2-3-2-1 ^designation[+].language = #fr-BE
* #co-2-3-2-1 ^designation[=].value = "Membre supérieur Poignet - Main Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche"
* #co-2-3-2-2 "co-2-3-2-2"
* #co-2-3-2-2 ^designation[0].language = #nl-BE
* #co-2-3-2-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Rechts"
* #co-2-3-2-2 ^designation[+].language = #fr-BE
* #co-2-3-2-2 ^designation[=].value = "Membre supérieur Poignet - Main Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Droit"
* #co-2-3-2-3 "co-2-3-2-3"
* #co-2-3-2-3 ^designation[0].language = #nl-BE
* #co-2-3-2-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Beiden"
* #co-2-3-2-3 ^designation[+].language = #fr-BE
* #co-2-3-2-3 ^designation[=].value = "Membre supérieur Poignet - Main Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche et Droit"
* #co-2-3-3-1 "co-2-3-3-1"
* #co-2-3-3-1 ^designation[0].language = #nl-BE
* #co-2-3-3-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand Carpal-tunnelsyndroom Links"
* #co-2-3-3-1 ^designation[+].language = #fr-BE
* #co-2-3-3-1 ^designation[=].value = "Membre supérieur Poignet - Main Syndrome du canal carpien Gauche"
* #co-2-3-3-2 "co-2-3-3-2"
* #co-2-3-3-2 ^designation[0].language = #nl-BE
* #co-2-3-3-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand Carpal-tunnelsyndroom Rechts"
* #co-2-3-3-2 ^designation[+].language = #fr-BE
* #co-2-3-3-2 ^designation[=].value = "Membre supérieur Poignet - Main Syndrome du canal carpien Droit"
* #co-2-3-3-3 "co-2-3-3-3"
* #co-2-3-3-3 ^designation[0].language = #nl-BE
* #co-2-3-3-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand Carpal-tunnelsyndroom Beiden"
* #co-2-3-3-3 ^designation[+].language = #fr-BE
* #co-2-3-3-3 ^designation[=].value = "Membre supérieur Poignet - Main Syndrome du canal carpien Gauche et Droit"
* #co-2-3-4-1 "co-2-3-4-1"
* #co-2-3-4-1 ^designation[0].language = #nl-BE
* #co-2-3-4-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand De Quervain's, Dupuytren Links"
* #co-2-3-4-1 ^designation[+].language = #fr-BE
* #co-2-3-4-1 ^designation[=].value = "Membre supérieur Poignet - Main De Quervain, Dupuytren Gauche"
* #co-2-3-4-2 "co-2-3-4-2"
* #co-2-3-4-2 ^designation[0].language = #nl-BE
* #co-2-3-4-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand De Quervain's, Dupuytren Rechts"
* #co-2-3-4-2 ^designation[+].language = #fr-BE
* #co-2-3-4-2 ^designation[=].value = "Membre supérieur Poignet - Main De Quervain, Dupuytren Droit"
* #co-2-3-4-3 "co-2-3-4-3"
* #co-2-3-4-3 ^designation[0].language = #nl-BE
* #co-2-3-4-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand De Quervain's, Dupuytren Beiden"
* #co-2-3-4-3 ^designation[+].language = #fr-BE
* #co-2-3-4-3 ^designation[=].value = "Membre supérieur Poignet - Main De Quervain, Dupuytren Gauche et Droit"
* #co-2-3-5-1 "co-2-3-5-1"
* #co-2-3-5-1 ^designation[0].language = #nl-BE
* #co-2-3-5-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand Repetitive strain injury (RSI) Links"
* #co-2-3-5-1 ^designation[+].language = #fr-BE
* #co-2-3-5-1 ^designation[=].value = "Membre supérieur Poignet - Main Microtraumatismes répétés (RSI) Gauche"
* #co-2-3-5-2 "co-2-3-5-2"
* #co-2-3-5-2 ^designation[0].language = #nl-BE
* #co-2-3-5-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand Repetitive strain injury (RSI) Rechts"
* #co-2-3-5-2 ^designation[+].language = #fr-BE
* #co-2-3-5-2 ^designation[=].value = "Membre supérieur Poignet - Main Microtraumatismes répétés (RSI) Droit"
* #co-2-3-5-3 "co-2-3-5-3"
* #co-2-3-5-3 ^designation[0].language = #nl-BE
* #co-2-3-5-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand Repetitive strain injury (RSI) Beiden"
* #co-2-3-5-3 ^designation[+].language = #fr-BE
* #co-2-3-5-3 ^designation[=].value = "Membre supérieur Poignet - Main Microtraumatismes répétés (RSI) Gauche et Droit"
* #co-2-3-90-1 "co-2-3-90-1"
* #co-2-3-90-1 ^designation[0].language = #nl-BE
* #co-2-3-90-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand Fraktuur  Links"
* #co-2-3-90-1 ^designation[+].language = #fr-BE
* #co-2-3-90-1 ^designation[=].value = "Membre supérieur Poignet - Main Fracture Gauche"
* #co-2-3-90-2 "co-2-3-90-2"
* #co-2-3-90-2 ^designation[0].language = #nl-BE
* #co-2-3-90-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand Fraktuur  Rechts"
* #co-2-3-90-2 ^designation[+].language = #fr-BE
* #co-2-3-90-2 ^designation[=].value = "Membre supérieur Poignet - Main Fracture Droit"
* #co-2-3-90-3 "co-2-3-90-3"
* #co-2-3-90-3 ^designation[0].language = #nl-BE
* #co-2-3-90-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand Fraktuur  Beiden"
* #co-2-3-90-3 ^designation[+].language = #fr-BE
* #co-2-3-90-3 ^designation[=].value = "Membre supérieur Poignet - Main Fracture Gauche et Droit"
* #co-2-3-99-1 "co-2-3-99-1"
* #co-2-3-99-1 ^designation[0].language = #nl-BE
* #co-2-3-99-1 ^designation[=].value = "Bovenste extremiteit Pols - Hand Andere (ook uit F-E-11bis) Links"
* #co-2-3-99-1 ^designation[+].language = #fr-BE
* #co-2-3-99-1 ^designation[=].value = "Membre supérieur Poignet - Main Autre (également de F-E-11bis) Gauche"
* #co-2-3-99-2 "co-2-3-99-2"
* #co-2-3-99-2 ^designation[0].language = #nl-BE
* #co-2-3-99-2 ^designation[=].value = "Bovenste extremiteit Pols - Hand Andere (ook uit F-E-11bis) Rechts"
* #co-2-3-99-2 ^designation[+].language = #fr-BE
* #co-2-3-99-2 ^designation[=].value = "Membre supérieur Poignet - Main Autre (également de F-E-11bis) Droit"
* #co-2-3-99-3 "co-2-3-99-3"
* #co-2-3-99-3 ^designation[0].language = #nl-BE
* #co-2-3-99-3 ^designation[=].value = "Bovenste extremiteit Pols - Hand Andere (ook uit F-E-11bis) Beiden"
* #co-2-3-99-3 ^designation[+].language = #fr-BE
* #co-2-3-99-3 ^designation[=].value = "Membre supérieur Poignet - Main Autre (également de F-E-11bis) Gauche et Droit"
* #co-3-1-1-1 "co-3-1-1-1"
* #co-3-1-1-1 ^designation[0].language = #nl-BE
* #co-3-1-1-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Artrose Links"
* #co-3-1-1-1 ^designation[+].language = #fr-BE
* #co-3-1-1-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Arthrose Gauche"
* #co-3-1-1-2 "co-3-1-1-2"
* #co-3-1-1-2 ^designation[0].language = #nl-BE
* #co-3-1-1-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Artrose Rechts"
* #co-3-1-1-2 ^designation[+].language = #fr-BE
* #co-3-1-1-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Arthrose Droit"
* #co-3-1-1-3 "co-3-1-1-3"
* #co-3-1-1-3 ^designation[0].language = #nl-BE
* #co-3-1-1-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Artrose Beiden"
* #co-3-1-1-3 ^designation[+].language = #fr-BE
* #co-3-1-1-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Arthrose Gauche et Droit"
* #co-3-1-2-1 "co-3-1-2-1"
* #co-3-1-2-1 ^designation[0].language = #nl-BE
* #co-3-1-2-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Links"
* #co-3-1-2-1 ^designation[+].language = #fr-BE
* #co-3-1-2-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche"
* #co-3-1-2-2 "co-3-1-2-2"
* #co-3-1-2-2 ^designation[0].language = #nl-BE
* #co-3-1-2-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Rechts"
* #co-3-1-2-2 ^designation[+].language = #fr-BE
* #co-3-1-2-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Droit"
* #co-3-1-2-3 "co-3-1-2-3"
* #co-3-1-2-3 ^designation[0].language = #nl-BE
* #co-3-1-2-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Beiden"
* #co-3-1-2-3 ^designation[+].language = #fr-BE
* #co-3-1-2-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche et Droit"
* #co-3-1-3-1 "co-3-1-3-1"
* #co-3-1-3-1 ^designation[0].language = #nl-BE
* #co-3-1-3-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen FAI (femoro-acetabulair impingement), CAM, PINCER Links"
* #co-3-1-3-1 ^designation[+].language = #fr-BE
* #co-3-1-3-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse FAI (conflit fémoro-acétabulaire), CAM, PINCER Gauche"
* #co-3-1-3-2 "co-3-1-3-2"
* #co-3-1-3-2 ^designation[0].language = #nl-BE
* #co-3-1-3-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen FAI (femoro-acetabulair impingement), CAM, PINCER Rechts"
* #co-3-1-3-2 ^designation[+].language = #fr-BE
* #co-3-1-3-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse FAI (conflit fémoro-acétabulaire), CAM, PINCER Droit"
* #co-3-1-3-3 "co-3-1-3-3"
* #co-3-1-3-3 ^designation[0].language = #nl-BE
* #co-3-1-3-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen FAI (femoro-acetabulair impingement), CAM, PINCER Beiden"
* #co-3-1-3-3 ^designation[+].language = #fr-BE
* #co-3-1-3-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse FAI (conflit fémoro-acétabulaire), CAM, PINCER Gauche et Droit"
* #co-3-1-4-1 "co-3-1-4-1"
* #co-3-1-4-1 ^designation[0].language = #nl-BE
* #co-3-1-4-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Heupluxatie Links"
* #co-3-1-4-1 ^designation[+].language = #fr-BE
* #co-3-1-4-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Luxation de la hanche Gauche"
* #co-3-1-4-2 "co-3-1-4-2"
* #co-3-1-4-2 ^designation[0].language = #nl-BE
* #co-3-1-4-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Heupluxatie Rechts"
* #co-3-1-4-2 ^designation[+].language = #fr-BE
* #co-3-1-4-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Luxation de la hanche Droit"
* #co-3-1-4-3 "co-3-1-4-3"
* #co-3-1-4-3 ^designation[0].language = #nl-BE
* #co-3-1-4-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Heupluxatie Beiden"
* #co-3-1-4-3 ^designation[+].language = #fr-BE
* #co-3-1-4-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Luxation de la hanche Gauche et Droit"
* #co-3-1-5-1 "co-3-1-5-1"
* #co-3-1-5-1 ^designation[0].language = #nl-BE
* #co-3-1-5-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Liespijn, Snapping Hip, Pubalgie Links"
* #co-3-1-5-1 ^designation[+].language = #fr-BE
* #co-3-1-5-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Douleur à l'aine, Claquage de la hanche, Pubalgie Gauche"
* #co-3-1-5-2 "co-3-1-5-2"
* #co-3-1-5-2 ^designation[0].language = #nl-BE
* #co-3-1-5-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Liespijn, Snapping Hip, Pubalgie Rechts"
* #co-3-1-5-2 ^designation[+].language = #fr-BE
* #co-3-1-5-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Douleur à l'aine, Claquage de la hanche, Pubalgie Droit"
* #co-3-1-5-3 "co-3-1-5-3"
* #co-3-1-5-3 ^designation[0].language = #nl-BE
* #co-3-1-5-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Liespijn, Snapping Hip, Pubalgie Beiden"
* #co-3-1-5-3 ^designation[+].language = #fr-BE
* #co-3-1-5-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Douleur à l'aine, Claquage de la hanche, Pubalgie Gauche et Droit"
* #co-3-1-6-1 "co-3-1-6-1"
* #co-3-1-6-1 ^designation[0].language = #nl-BE
* #co-3-1-6-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Heupdysplasie Links"
* #co-3-1-6-1 ^designation[+].language = #fr-BE
* #co-3-1-6-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Dysplasie de la hanche Gauche"
* #co-3-1-6-2 "co-3-1-6-2"
* #co-3-1-6-2 ^designation[0].language = #nl-BE
* #co-3-1-6-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Heupdysplasie Rechts"
* #co-3-1-6-2 ^designation[+].language = #fr-BE
* #co-3-1-6-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Dysplasie de la hanche Droit"
* #co-3-1-6-3 "co-3-1-6-3"
* #co-3-1-6-3 ^designation[0].language = #nl-BE
* #co-3-1-6-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Heupdysplasie Beiden"
* #co-3-1-6-3 ^designation[+].language = #fr-BE
* #co-3-1-6-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Dysplasie de la hanche Gauche et Droit"
* #co-3-1-90-1 "co-3-1-90-1"
* #co-3-1-90-1 ^designation[0].language = #nl-BE
* #co-3-1-90-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Fraktuur  Links"
* #co-3-1-90-1 ^designation[+].language = #fr-BE
* #co-3-1-90-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Fracture Gauche"
* #co-3-1-90-2 "co-3-1-90-2"
* #co-3-1-90-2 ^designation[0].language = #nl-BE
* #co-3-1-90-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Fraktuur  Rechts"
* #co-3-1-90-2 ^designation[+].language = #fr-BE
* #co-3-1-90-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Fracture Droit"
* #co-3-1-90-3 "co-3-1-90-3"
* #co-3-1-90-3 ^designation[0].language = #nl-BE
* #co-3-1-90-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Fraktuur  Beiden"
* #co-3-1-90-3 ^designation[+].language = #fr-BE
* #co-3-1-90-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Fracture Gauche et Droit"
* #co-3-1-99-1 "co-3-1-99-1"
* #co-3-1-99-1 ^designation[0].language = #nl-BE
* #co-3-1-99-1 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Andere (ook uit F-E-11bis) Links"
* #co-3-1-99-1 ^designation[+].language = #fr-BE
* #co-3-1-99-1 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Autre (également de F-E-11bis) Gauche"
* #co-3-1-99-2 "co-3-1-99-2"
* #co-3-1-99-2 ^designation[0].language = #nl-BE
* #co-3-1-99-2 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Andere (ook uit F-E-11bis) Rechts"
* #co-3-1-99-2 ^designation[+].language = #fr-BE
* #co-3-1-99-2 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Autre (également de F-E-11bis) Droit"
* #co-3-1-99-3 "co-3-1-99-3"
* #co-3-1-99-3 ^designation[0].language = #nl-BE
* #co-3-1-99-3 ^designation[=].value = "Onderste extremiteit Bekken - Heup - Bovenbeen Andere (ook uit F-E-11bis) Beiden"
* #co-3-1-99-3 ^designation[+].language = #fr-BE
* #co-3-1-99-3 ^designation[=].value = "Membre inférieur Bassin - Hanche - Cuisse Autre (également de F-E-11bis) Gauche et Droit"
* #co-3-2-1-1 "co-3-2-1-1"
* #co-3-2-1-1 ^designation[0].language = #nl-BE
* #co-3-2-1-1 ^designation[=].value = "Onderste extremiteit Knie Artrose Links"
* #co-3-2-1-1 ^designation[+].language = #fr-BE
* #co-3-2-1-1 ^designation[=].value = "Membre inférieur Genou Arthrose Gauche"
* #co-3-2-1-2 "co-3-2-1-2"
* #co-3-2-1-2 ^designation[0].language = #nl-BE
* #co-3-2-1-2 ^designation[=].value = "Onderste extremiteit Knie Artrose Rechts"
* #co-3-2-1-2 ^designation[+].language = #fr-BE
* #co-3-2-1-2 ^designation[=].value = "Membre inférieur Genou Arthrose Droit"
* #co-3-2-1-3 "co-3-2-1-3"
* #co-3-2-1-3 ^designation[0].language = #nl-BE
* #co-3-2-1-3 ^designation[=].value = "Onderste extremiteit Knie Artrose Beiden"
* #co-3-2-1-3 ^designation[+].language = #fr-BE
* #co-3-2-1-3 ^designation[=].value = "Membre inférieur Genou Arthrose Gauche et Droit"
* #co-3-2-2-1 "co-3-2-2-1"
* #co-3-2-2-1 ^designation[0].language = #nl-BE
* #co-3-2-2-1 ^designation[=].value = "Onderste extremiteit Knie Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Links"
* #co-3-2-2-1 ^designation[+].language = #fr-BE
* #co-3-2-2-1 ^designation[=].value = "Membre inférieur Genou Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche"
* #co-3-2-2-2 "co-3-2-2-2"
* #co-3-2-2-2 ^designation[0].language = #nl-BE
* #co-3-2-2-2 ^designation[=].value = "Onderste extremiteit Knie Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Rechts"
* #co-3-2-2-2 ^designation[+].language = #fr-BE
* #co-3-2-2-2 ^designation[=].value = "Membre inférieur Genou Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Droit"
* #co-3-2-2-3 "co-3-2-2-3"
* #co-3-2-2-3 ^designation[0].language = #nl-BE
* #co-3-2-2-3 ^designation[=].value = "Onderste extremiteit Knie Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Beiden"
* #co-3-2-2-3 ^designation[+].language = #fr-BE
* #co-3-2-2-3 ^designation[=].value = "Membre inférieur Genou Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche et Droit"
* #co-3-2-3-1 "co-3-2-3-1"
* #co-3-2-3-1 ^designation[0].language = #nl-BE
* #co-3-2-3-1 ^designation[=].value = "Onderste extremiteit Knie Dislocatie van patellofemoraal gewricht, Patellaluxatie Links"
* #co-3-2-3-1 ^designation[+].language = #fr-BE
* #co-3-2-3-1 ^designation[=].value = "Membre inférieur Genou Luxation de l'articulation fémoro-patellaire, luxation rotulienne Gauche"
* #co-3-2-3-2 "co-3-2-3-2"
* #co-3-2-3-2 ^designation[0].language = #nl-BE
* #co-3-2-3-2 ^designation[=].value = "Onderste extremiteit Knie Dislocatie van patellofemoraal gewricht, Patellaluxatie Rechts"
* #co-3-2-3-2 ^designation[+].language = #fr-BE
* #co-3-2-3-2 ^designation[=].value = "Membre inférieur Genou Luxation de l'articulation fémoro-patellaire, luxation rotulienne Droit"
* #co-3-2-3-3 "co-3-2-3-3"
* #co-3-2-3-3 ^designation[0].language = #nl-BE
* #co-3-2-3-3 ^designation[=].value = "Onderste extremiteit Knie Dislocatie van patellofemoraal gewricht, Patellaluxatie Beiden"
* #co-3-2-3-3 ^designation[+].language = #fr-BE
* #co-3-2-3-3 ^designation[=].value = "Membre inférieur Genou Luxation de l'articulation fémoro-patellaire, luxation rotulienne Gauche et Droit"
* #co-3-2-4-1 "co-3-2-4-1"
* #co-3-2-4-1 ^designation[0].language = #nl-BE
* #co-3-2-4-1 ^designation[=].value = "Onderste extremiteit Knie Instabiliteit Links"
* #co-3-2-4-1 ^designation[+].language = #fr-BE
* #co-3-2-4-1 ^designation[=].value = "Membre inférieur Genou Instabilité Gauche"
* #co-3-2-4-2 "co-3-2-4-2"
* #co-3-2-4-2 ^designation[0].language = #nl-BE
* #co-3-2-4-2 ^designation[=].value = "Onderste extremiteit Knie Instabiliteit Rechts"
* #co-3-2-4-2 ^designation[+].language = #fr-BE
* #co-3-2-4-2 ^designation[=].value = "Membre inférieur Genou Instabilité Droit"
* #co-3-2-4-3 "co-3-2-4-3"
* #co-3-2-4-3 ^designation[0].language = #nl-BE
* #co-3-2-4-3 ^designation[=].value = "Onderste extremiteit Knie Instabiliteit Beiden"
* #co-3-2-4-3 ^designation[+].language = #fr-BE
* #co-3-2-4-3 ^designation[=].value = "Membre inférieur Genou Instabilité Gauche et Droit"
* #co-3-2-5-1 "co-3-2-5-1"
* #co-3-2-5-1 ^designation[0].language = #nl-BE
* #co-3-2-5-1 ^designation[=].value = "Onderste extremiteit Knie Ligamentair letsel, Peesletsel Links"
* #co-3-2-5-1 ^designation[+].language = #fr-BE
* #co-3-2-5-1 ^designation[=].value = "Membre inférieur Genou Lésion ligamentaire, Lésion tendineuse Gauche"
* #co-3-2-5-2 "co-3-2-5-2"
* #co-3-2-5-2 ^designation[0].language = #nl-BE
* #co-3-2-5-2 ^designation[=].value = "Onderste extremiteit Knie Ligamentair letsel, Peesletsel Rechts"
* #co-3-2-5-2 ^designation[+].language = #fr-BE
* #co-3-2-5-2 ^designation[=].value = "Membre inférieur Genou Lésion ligamentaire, Lésion tendineuse Droit"
* #co-3-2-5-3 "co-3-2-5-3"
* #co-3-2-5-3 ^designation[0].language = #nl-BE
* #co-3-2-5-3 ^designation[=].value = "Onderste extremiteit Knie Ligamentair letsel, Peesletsel Beiden"
* #co-3-2-5-3 ^designation[+].language = #fr-BE
* #co-3-2-5-3 ^designation[=].value = "Membre inférieur Genou Lésion ligamentaire, Lésion tendineuse Gauche et Droit"
* #co-3-2-6-1 "co-3-2-6-1"
* #co-3-2-6-1 ^designation[0].language = #nl-BE
* #co-3-2-6-1 ^designation[=].value = "Onderste extremiteit Knie Meniscusletsel Links"
* #co-3-2-6-1 ^designation[+].language = #fr-BE
* #co-3-2-6-1 ^designation[=].value = "Membre inférieur Genou Lésion du ménisque Gauche"
* #co-3-2-6-2 "co-3-2-6-2"
* #co-3-2-6-2 ^designation[0].language = #nl-BE
* #co-3-2-6-2 ^designation[=].value = "Onderste extremiteit Knie Meniscusletsel Rechts"
* #co-3-2-6-2 ^designation[+].language = #fr-BE
* #co-3-2-6-2 ^designation[=].value = "Membre inférieur Genou Lésion du ménisque Droit"
* #co-3-2-6-3 "co-3-2-6-3"
* #co-3-2-6-3 ^designation[0].language = #nl-BE
* #co-3-2-6-3 ^designation[=].value = "Onderste extremiteit Knie Meniscusletsel Beiden"
* #co-3-2-6-3 ^designation[+].language = #fr-BE
* #co-3-2-6-3 ^designation[=].value = "Membre inférieur Genou Lésion du ménisque Gauche et Droit"
* #co-3-2-7-1 "co-3-2-7-1"
* #co-3-2-7-1 ^designation[0].language = #nl-BE
* #co-3-2-7-1 ^designation[=].value = "Onderste extremiteit Knie Patellofemoraal letsel, Chondromalacie Links"
* #co-3-2-7-1 ^designation[+].language = #fr-BE
* #co-3-2-7-1 ^designation[=].value = "Membre inférieur Genou Lésion fémoro-patellaire, Chondromalacie Gauche"
* #co-3-2-7-2 "co-3-2-7-2"
* #co-3-2-7-2 ^designation[0].language = #nl-BE
* #co-3-2-7-2 ^designation[=].value = "Onderste extremiteit Knie Patellofemoraal letsel, Chondromalacie Rechts"
* #co-3-2-7-2 ^designation[+].language = #fr-BE
* #co-3-2-7-2 ^designation[=].value = "Membre inférieur Genou Lésion fémoro-patellaire, Chondromalacie Droit"
* #co-3-2-7-3 "co-3-2-7-3"
* #co-3-2-7-3 ^designation[0].language = #nl-BE
* #co-3-2-7-3 ^designation[=].value = "Onderste extremiteit Knie Patellofemoraal letsel, Chondromalacie Beiden"
* #co-3-2-7-3 ^designation[+].language = #fr-BE
* #co-3-2-7-3 ^designation[=].value = "Membre inférieur Genou Lésion fémoro-patellaire, Chondromalacie Gauche et Droit"
* #co-3-2-90-1 "co-3-2-90-1"
* #co-3-2-90-1 ^designation[0].language = #nl-BE
* #co-3-2-90-1 ^designation[=].value = "Onderste extremiteit Knie Fraktuur  Links"
* #co-3-2-90-1 ^designation[+].language = #fr-BE
* #co-3-2-90-1 ^designation[=].value = "Membre inférieur Genou Fracture Gauche"
* #co-3-2-90-2 "co-3-2-90-2"
* #co-3-2-90-2 ^designation[0].language = #nl-BE
* #co-3-2-90-2 ^designation[=].value = "Onderste extremiteit Knie Fraktuur  Rechts"
* #co-3-2-90-2 ^designation[+].language = #fr-BE
* #co-3-2-90-2 ^designation[=].value = "Membre inférieur Genou Fracture Droit"
* #co-3-2-90-3 "co-3-2-90-3"
* #co-3-2-90-3 ^designation[0].language = #nl-BE
* #co-3-2-90-3 ^designation[=].value = "Onderste extremiteit Knie Fraktuur  Beiden"
* #co-3-2-90-3 ^designation[+].language = #fr-BE
* #co-3-2-90-3 ^designation[=].value = "Membre inférieur Genou Fracture Gauche et Droit"
* #co-3-2-99-1 "co-3-2-99-1"
* #co-3-2-99-1 ^designation[0].language = #nl-BE
* #co-3-2-99-1 ^designation[=].value = "Onderste extremiteit Knie Andere (ook uit F-E-11bis) Links"
* #co-3-2-99-1 ^designation[+].language = #fr-BE
* #co-3-2-99-1 ^designation[=].value = "Membre inférieur Genou Autre (également de F-E-11bis) Gauche"
* #co-3-2-99-2 "co-3-2-99-2"
* #co-3-2-99-2 ^designation[0].language = #nl-BE
* #co-3-2-99-2 ^designation[=].value = "Onderste extremiteit Knie Andere (ook uit F-E-11bis) Rechts"
* #co-3-2-99-2 ^designation[+].language = #fr-BE
* #co-3-2-99-2 ^designation[=].value = "Membre inférieur Genou Autre (également de F-E-11bis) Droit"
* #co-3-2-99-3 "co-3-2-99-3"
* #co-3-2-99-3 ^designation[0].language = #nl-BE
* #co-3-2-99-3 ^designation[=].value = "Onderste extremiteit Knie Andere (ook uit F-E-11bis) Beiden"
* #co-3-2-99-3 ^designation[+].language = #fr-BE
* #co-3-2-99-3 ^designation[=].value = "Membre inférieur Genou Autre (également de F-E-11bis) Gauche et Droit"
* #co-3-3-1-1 "co-3-3-1-1"
* #co-3-3-1-1 ^designation[0].language = #nl-BE
* #co-3-3-1-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Artrose Links"
* #co-3-3-1-1 ^designation[+].language = #fr-BE
* #co-3-3-1-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Arthrose Gauche"
* #co-3-3-1-2 "co-3-3-1-2"
* #co-3-3-1-2 ^designation[0].language = #nl-BE
* #co-3-3-1-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Artrose Rechts"
* #co-3-3-1-2 ^designation[+].language = #fr-BE
* #co-3-3-1-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Arthrose Droit"
* #co-3-3-1-3 "co-3-3-1-3"
* #co-3-3-1-3 ^designation[0].language = #nl-BE
* #co-3-3-1-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Artrose Beiden"
* #co-3-3-1-3 ^designation[+].language = #fr-BE
* #co-3-3-1-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Arthrose Gauche et Droit"
* #co-3-3-2-1 "co-3-3-2-1"
* #co-3-3-2-1 ^designation[0].language = #nl-BE
* #co-3-3-2-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Links"
* #co-3-3-2-1 ^designation[+].language = #fr-BE
* #co-3-3-2-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche"
* #co-3-3-2-2 "co-3-3-2-2"
* #co-3-3-2-2 ^designation[0].language = #nl-BE
* #co-3-3-2-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Rechts"
* #co-3-3-2-2 ^designation[+].language = #fr-BE
* #co-3-3-2-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Droit"
* #co-3-3-2-3 "co-3-3-2-3"
* #co-3-3-2-3 ^designation[0].language = #nl-BE
* #co-3-3-2-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Letsel van spieren, pezen en/of zenuwen, Bursitis, Tendinitis, Strain, Contusie Beiden"
* #co-3-3-2-3 ^designation[+].language = #fr-BE
* #co-3-3-2-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Lésion des muscles, des tendons et/ou des nerfs, Bursite, Tendinite, Foulure, Contusion Gauche et Droit"
* #co-3-3-3-1 "co-3-3-3-1"
* #co-3-3-3-1 ^designation[0].language = #nl-BE
* #co-3-3-3-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Distorsie, Verstuiking, Laxiteit, Inversietrauma, Ruptuur ligament Links"
* #co-3-3-3-1 ^designation[+].language = #fr-BE
* #co-3-3-3-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Distorsion, Entorse, Laxité, Traumatisme d'inversion, Rupture ligamentaire Gauche"
* #co-3-3-3-2 "co-3-3-3-2"
* #co-3-3-3-2 ^designation[0].language = #nl-BE
* #co-3-3-3-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Distorsie, Verstuiking, Laxiteit, Inversietrauma, Ruptuur ligament Rechts"
* #co-3-3-3-2 ^designation[+].language = #fr-BE
* #co-3-3-3-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Distorsion, Entorse, Laxité, Traumatisme d'inversion, Rupture ligamentaire Droit"
* #co-3-3-3-3 "co-3-3-3-3"
* #co-3-3-3-3 ^designation[0].language = #nl-BE
* #co-3-3-3-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Distorsie, Verstuiking, Laxiteit, Inversietrauma, Ruptuur ligament Beiden"
* #co-3-3-3-3 ^designation[+].language = #fr-BE
* #co-3-3-3-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Distorsion, Entorse, Laxité, Traumatisme d'inversion, Rupture ligamentaire Gauche et Droit"
* #co-3-3-4-1 "co-3-3-4-1"
* #co-3-3-4-1 ^designation[0].language = #nl-BE
* #co-3-3-4-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Plantaire fasciitis Links"
* #co-3-3-4-1 ^designation[+].language = #fr-BE
* #co-3-3-4-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Fasciite plantaire Gauche"
* #co-3-3-4-2 "co-3-3-4-2"
* #co-3-3-4-2 ^designation[0].language = #nl-BE
* #co-3-3-4-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Plantaire fasciitis Rechts"
* #co-3-3-4-2 ^designation[+].language = #fr-BE
* #co-3-3-4-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Fasciite plantaire Droit"
* #co-3-3-4-3 "co-3-3-4-3"
* #co-3-3-4-3 ^designation[0].language = #nl-BE
* #co-3-3-4-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Plantaire fasciitis Beiden"
* #co-3-3-4-3 ^designation[+].language = #fr-BE
* #co-3-3-4-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Fasciite plantaire Gauche et Droit"
* #co-3-3-5-1 "co-3-3-5-1"
* #co-3-3-5-1 ^designation[0].language = #nl-BE
* #co-3-3-5-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Pes planus, Pes valgus, Hallux valgus, Hielspoor, Klompvoet Links"
* #co-3-3-5-1 ^designation[+].language = #fr-BE
* #co-3-3-5-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Pes planus, Pes valgus, Hallux valgus, Épine calcanéenne, Pied bot Gauche"
* #co-3-3-5-2 "co-3-3-5-2"
* #co-3-3-5-2 ^designation[0].language = #nl-BE
* #co-3-3-5-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Pes planus, Pes valgus, Hallux valgus, Hielspoor, Klompvoet Rechts"
* #co-3-3-5-2 ^designation[+].language = #fr-BE
* #co-3-3-5-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Pes planus, Pes valgus, Hallux valgus, Épine calcanéenne, Pied bot Droit"
* #co-3-3-5-3 "co-3-3-5-3"
* #co-3-3-5-3 ^designation[0].language = #nl-BE
* #co-3-3-5-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Pes planus, Pes valgus, Hallux valgus, Hielspoor, Klompvoet Beiden"
* #co-3-3-5-3 ^designation[+].language = #fr-BE
* #co-3-3-5-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Pes planus, Pes valgus, Hallux valgus, Épine calcanéenne, Pied bot Gauche et Droit"
* #co-3-3-6-1 "co-3-3-6-1"
* #co-3-3-6-1 ^designation[0].language = #nl-BE
* #co-3-3-6-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Shin splints Links"
* #co-3-3-6-1 ^designation[+].language = #fr-BE
* #co-3-3-6-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Périostite tibiale Gauche"
* #co-3-3-6-2 "co-3-3-6-2"
* #co-3-3-6-2 ^designation[0].language = #nl-BE
* #co-3-3-6-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Shin splints Rechts"
* #co-3-3-6-2 ^designation[+].language = #fr-BE
* #co-3-3-6-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Périostite tibiale Droit"
* #co-3-3-6-3 "co-3-3-6-3"
* #co-3-3-6-3 ^designation[0].language = #nl-BE
* #co-3-3-6-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Shin splints Beiden"
* #co-3-3-6-3 ^designation[+].language = #fr-BE
* #co-3-3-6-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Périostite tibiale Gauche et Droit"
* #co-3-3-90-1 "co-3-3-90-1"
* #co-3-3-90-1 ^designation[0].language = #nl-BE
* #co-3-3-90-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Fraktuur  Links"
* #co-3-3-90-1 ^designation[+].language = #fr-BE
* #co-3-3-90-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Fracture Gauche"
* #co-3-3-90-2 "co-3-3-90-2"
* #co-3-3-90-2 ^designation[0].language = #nl-BE
* #co-3-3-90-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Fraktuur  Rechts"
* #co-3-3-90-2 ^designation[+].language = #fr-BE
* #co-3-3-90-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Fracture Droit"
* #co-3-3-90-3 "co-3-3-90-3"
* #co-3-3-90-3 ^designation[0].language = #nl-BE
* #co-3-3-90-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Fraktuur  Beiden"
* #co-3-3-90-3 ^designation[+].language = #fr-BE
* #co-3-3-90-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Fracture Gauche et Droit"
* #co-3-3-99-1 "co-3-3-99-1"
* #co-3-3-99-1 ^designation[0].language = #nl-BE
* #co-3-3-99-1 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Andere (ook uit F-E-11bis) Links"
* #co-3-3-99-1 ^designation[+].language = #fr-BE
* #co-3-3-99-1 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Autre (également de F-E-11bis) Gauche"
* #co-3-3-99-2 "co-3-3-99-2"
* #co-3-3-99-2 ^designation[0].language = #nl-BE
* #co-3-3-99-2 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Andere (ook uit F-E-11bis) Rechts"
* #co-3-3-99-2 ^designation[+].language = #fr-BE
* #co-3-3-99-2 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Autre (également de F-E-11bis) Droit"
* #co-3-3-99-3 "co-3-3-99-3"
* #co-3-3-99-3 ^designation[0].language = #nl-BE
* #co-3-3-99-3 ^designation[=].value = "Onderste extremiteit Onderbeen - Enkel - Voet Andere (ook uit F-E-11bis) Beiden"
* #co-3-3-99-3 ^designation[+].language = #fr-BE
* #co-3-3-99-3 ^designation[=].value = "Membre inférieur Bas de jambe - Cheville - Pied Autre (également de F-E-11bis) Gauche et Droit"
* #co-4-1-90-0 "co-4-1-90-0"
* #co-4-1-90-0 ^designation[0].language = #nl-BE
* #co-4-1-90-0 ^designation[=].value = "Thorax - Fraktuur  -"
* #co-4-1-90-0 ^designation[+].language = #fr-BE
* #co-4-1-90-0 ^designation[=].value = "Thorax - Fracture -"
* #co-4-1-99-0 "co-4-1-99-0"
* #co-4-1-99-0 ^designation[0].language = #nl-BE
* #co-4-1-99-0 ^designation[=].value = "Thorax - Andere (ook uit F-E-11bis) -"
* #co-4-1-99-0 ^designation[+].language = #fr-BE
* #co-4-1-99-0 ^designation[=].value = "Thorax - Autre (également de F-E-11bis) -"
* #co-5-1-1-0 "co-5-1-1-0"
* #co-5-1-1-0 ^designation[0].language = #nl-BE
* #co-5-1-1-0 ^designation[=].value = "Longaandoeningen - Ademhalingsinsufficiëntie -"
* #co-5-1-1-0 ^designation[+].language = #fr-BE
* #co-5-1-1-0 ^designation[=].value = "Troubles pulmonaires - Insuffisance respiratoire -"
* #co-5-1-2-0 "co-5-1-2-0"
* #co-5-1-2-0 ^designation[0].language = #nl-BE
* #co-5-1-2-0 ^designation[=].value = "Longaandoeningen - COPD, Bronchitis, Bronchiolitis, Pneumonie, … -"
* #co-5-1-2-0 ^designation[+].language = #fr-BE
* #co-5-1-2-0 ^designation[=].value = "Troubles pulmonaires - BPCO, Bronchite, Bronchiolite, Pneumonie, ... -"
* #co-5-1-3-0 "co-5-1-3-0"
* #co-5-1-3-0 ^designation[0].language = #nl-BE
* #co-5-1-3-0 ^designation[=].value = "Longaandoeningen - Astma -"
* #co-5-1-3-0 ^designation[+].language = #fr-BE
* #co-5-1-3-0 ^designation[=].value = "Troubles pulmonaires - Asthme -"
* #co-5-1-4-0 "co-5-1-4-0"
* #co-5-1-4-0 ^designation[0].language = #nl-BE
* #co-5-1-4-0 ^designation[=].value = "Longaandoeningen - Hyperventilatie  -"
* #co-5-1-4-0 ^designation[+].language = #fr-BE
* #co-5-1-4-0 ^designation[=].value = "Troubles pulmonaires - Hyperventilation -"
* #co-5-1-99-0 "co-5-1-99-0"
* #co-5-1-99-0 ^designation[0].language = #nl-BE
* #co-5-1-99-0 ^designation[=].value = "Longaandoeningen - Andere (ook uit F-E-11bis) -"
* #co-5-1-99-0 ^designation[+].language = #fr-BE
* #co-5-1-99-0 ^designation[=].value = "Troubles pulmonaires - Autre (également de F-E-11bis) -"
* #co-6-1-1-0 "co-6-1-1-0"
* #co-6-1-1-0 ^designation[0].language = #nl-BE
* #co-6-1-1-0 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - Post-hartinfarct  -"
* #co-6-1-1-0 ^designation[+].language = #fr-BE
* #co-6-1-1-0 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Post infarctus du myocarde -"
* #co-6-1-2-1 "co-6-1-2-1"
* #co-6-1-2-1 ^designation[0].language = #nl-BE
* #co-6-1-2-1 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - (Lymf)oedeem  Links"
* #co-6-1-2-1 ^designation[+].language = #fr-BE
* #co-6-1-2-1 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Oedème (lymphatique) Gauche"
* #co-6-1-2-2 "co-6-1-2-2"
* #co-6-1-2-2 ^designation[0].language = #nl-BE
* #co-6-1-2-2 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - (Lymf)oedeem  Rechts"
* #co-6-1-2-2 ^designation[+].language = #fr-BE
* #co-6-1-2-2 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Oedème (lymphatique) Droit"
* #co-6-1-2-3 "co-6-1-2-3"
* #co-6-1-2-3 ^designation[0].language = #nl-BE
* #co-6-1-2-3 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - (Lymf)oedeem  Beiden"
* #co-6-1-2-3 ^designation[+].language = #fr-BE
* #co-6-1-2-3 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Oedème (lymphatique) Gauche et Droit"
* #co-6-1-3-0 "co-6-1-3-0"
* #co-6-1-3-0 ^designation[0].language = #nl-BE
* #co-6-1-3-0 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - Transient cerebral ischaemic attack (TIA) -"
* #co-6-1-3-0 ^designation[+].language = #fr-BE
* #co-6-1-3-0 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Accident ischémique cérébral transitoire (TIA) -"
* #co-6-1-4-0 "co-6-1-4-0"
* #co-6-1-4-0 ^designation[0].language = #nl-BE
* #co-6-1-4-0 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - Claudicatio intermittens -"
* #co-6-1-4-0 ^designation[+].language = #fr-BE
* #co-6-1-4-0 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Claudication intermittente -"
* #co-6-1-99-0 "co-6-1-99-0"
* #co-6-1-99-0 ^designation[0].language = #nl-BE
* #co-6-1-99-0 ^designation[=].value = "Hart-, vaat- en lymfeaandoeningen - Andere (ook uit F-E-11bis) -"
* #co-6-1-99-0 ^designation[+].language = #fr-BE
* #co-6-1-99-0 ^designation[=].value = "Troubles cardiovasculaires et lymphatiques - Autre (également de F-E-11bis) -"
* #co-7-1-1-0 "co-7-1-1-0"
* #co-7-1-1-0 ^designation[0].language = #nl-BE
* #co-7-1-1-0 ^designation[=].value = "Neurologische aandoeningen - Polyneuritis, Polyneuropathie -"
* #co-7-1-1-0 ^designation[+].language = #fr-BE
* #co-7-1-1-0 ^designation[=].value = "Troubles neurologiques - Polynévrite, Polyneuropathie -"
* #co-7-1-2-0 "co-7-1-2-0"
* #co-7-1-2-0 ^designation[0].language = #nl-BE
* #co-7-1-2-0 ^designation[=].value = "Neurologische aandoeningen - Intercostaal neuralgie, Zona, Herpes Zoster -"
* #co-7-1-2-0 ^designation[+].language = #fr-BE
* #co-7-1-2-0 ^designation[=].value = "Troubles neurologiques - Névralgie intercostale, Zona, Herpes Zoster -"
* #co-7-1-99-0 "co-7-1-99-0"
* #co-7-1-99-0 ^designation[0].language = #nl-BE
* #co-7-1-99-0 ^designation[=].value = "Neurologische aandoeningen - Andere (ook uit F-E-11bis) -"
* #co-7-1-99-0 ^designation[+].language = #fr-BE
* #co-7-1-99-0 ^designation[=].value = "Troubles neurologiques - Autre (également de F-E-11bis) -"
* #co-8-1-1-0 "co-8-1-1-0"
* #co-8-1-1-0 ^designation[0].language = #nl-BE
* #co-8-1-1-0 ^designation[=].value = "ORL en aangezicht - Temporo-mandibulair syndroom -"
* #co-8-1-1-0 ^designation[+].language = #fr-BE
* #co-8-1-1-0 ^designation[=].value = "ORL et visage - Syndrome temporo-mandibulaire -"
* #co-8-1-2-0 "co-8-1-2-0"
* #co-8-1-2-0 ^designation[0].language = #nl-BE
* #co-8-1-2-0 ^designation[=].value = "ORL en aangezicht - Bruxisme -"
* #co-8-1-2-0 ^designation[+].language = #fr-BE
* #co-8-1-2-0 ^designation[=].value = "ORL et visage - Bruxisme -"
* #co-8-1-3-1 "co-8-1-3-1"
* #co-8-1-3-1 ^designation[0].language = #nl-BE
* #co-8-1-3-1 ^designation[=].value = "ORL en aangezicht - Uitval aangezichtszenuw Links"
* #co-8-1-3-1 ^designation[+].language = #fr-BE
* #co-8-1-3-1 ^designation[=].value = "ORL et visage - Défaillance du nerf facial Gauche"
* #co-8-1-3-2 "co-8-1-3-2"
* #co-8-1-3-2 ^designation[0].language = #nl-BE
* #co-8-1-3-2 ^designation[=].value = "ORL en aangezicht - Uitval aangezichtszenuw Rechts"
* #co-8-1-3-2 ^designation[+].language = #fr-BE
* #co-8-1-3-2 ^designation[=].value = "ORL et visage - Défaillance du nerf facial Droit"
* #co-8-1-3-3 "co-8-1-3-3"
* #co-8-1-3-3 ^designation[0].language = #nl-BE
* #co-8-1-3-3 ^designation[=].value = "ORL en aangezicht - Uitval aangezichtszenuw Beiden"
* #co-8-1-3-3 ^designation[+].language = #fr-BE
* #co-8-1-3-3 ^designation[=].value = "ORL et visage - Défaillance du nerf facial Gauche et Droit"
* #co-8-1-4-0 "co-8-1-4-0"
* #co-8-1-4-0 ^designation[0].language = #nl-BE
* #co-8-1-4-0 ^designation[=].value = "ORL en aangezicht - Duizeligheid (Vertigo), Syndroom van Meniere -"
* #co-8-1-4-0 ^designation[+].language = #fr-BE
* #co-8-1-4-0 ^designation[=].value = "ORL et visage - Vertiges, Syndrome de Ménière -"
* #co-8-1-90-0 "co-8-1-90-0"
* #co-8-1-90-0 ^designation[0].language = #nl-BE
* #co-8-1-90-0 ^designation[=].value = "ORL en aangezicht - Fraktuur  -"
* #co-8-1-90-0 ^designation[+].language = #fr-BE
* #co-8-1-90-0 ^designation[=].value = "ORL et visage - Fracture -"
* #co-8-1-99-0 "co-8-1-99-0"
* #co-8-1-99-0 ^designation[0].language = #nl-BE
* #co-8-1-99-0 ^designation[=].value = "ORL en aangezicht - Andere (ook uit F-E-11bis) -"
* #co-8-1-99-0 ^designation[+].language = #fr-BE
* #co-8-1-99-0 ^designation[=].value = "ORL et visage - Autre (également de F-E-11bis) -"
* #co-9-1-1-0 "co-9-1-1-0"
* #co-9-1-1-0 ^designation[0].language = #nl-BE
* #co-9-1-1-0 ^designation[=].value = "Abdomen, inwendige aandoeningen en/of zwangerschap gerelateerd - Bekkeninstabiliteit, Symfysiolyse -"
* #co-9-1-1-0 ^designation[+].language = #fr-BE
* #co-9-1-1-0 ^designation[=].value = "Abdomen, troubles internes et/ou liés à la grossesse - Instabilité pelvienne, Symphysiolyse -"
* #co-9-1-2-0 "co-9-1-2-0"
* #co-9-1-2-0 ^designation[0].language = #nl-BE
* #co-9-1-2-0 ^designation[=].value = "Abdomen, inwendige aandoeningen en/of zwangerschap gerelateerd - Bekkenbodem reëducatie, Uro-Procto-Gynaeco, Incontinentie -"
* #co-9-1-2-0 ^designation[+].language = #fr-BE
* #co-9-1-2-0 ^designation[=].value = "Abdomen, troubles internes et/ou liés à la grossesse - Rééducation du plancher pelvien, Uro-Procto-Gynaeco, Incontinence -"
* #co-9-1-3-0 "co-9-1-3-0"
* #co-9-1-3-0 ^designation[0].language = #nl-BE
* #co-9-1-3-0 ^designation[=].value = "Abdomen, inwendige aandoeningen en/of zwangerschap gerelateerd - Buikspierscheur -"
* #co-9-1-3-0 ^designation[+].language = #fr-BE
* #co-9-1-3-0 ^designation[=].value = "Abdomen, troubles internes et/ou liés à la grossesse - Déchirure des muscles abdominaux -"
* #co-9-1-4-0 "co-9-1-4-0"
* #co-9-1-4-0 ^designation[0].language = #nl-BE
* #co-9-1-4-0 ^designation[=].value = "Abdomen, inwendige aandoeningen en/of zwangerschap gerelateerd - Aandoeningen in verband met zwangerschap (exclusief perinatale) -"
* #co-9-1-4-0 ^designation[+].language = #fr-BE
* #co-9-1-4-0 ^designation[=].value = "Abdomen, troubles internes et/ou liés à la grossesse - Affections liées à la grossesse (hors périnatalité) -"
* #co-9-1-99-0 "co-9-1-99-0"
* #co-9-1-99-0 ^designation[0].language = #nl-BE
* #co-9-1-99-0 ^designation[=].value = "Abdomen, inwendige aandoeningen en/of zwangerschap gerelateerd - Andere (ook uit F-E-11bis) -"
* #co-9-1-99-0 ^designation[+].language = #fr-BE
* #co-9-1-99-0 ^designation[=].value = "Abdomen, troubles internes et/ou liés à la grossesse - Autre (également de F-E-11bis) -"
* #co-10-1-1-0 "co-10-1-1-0"
* #co-10-1-1-0 ^designation[0].language = #nl-BE
* #co-10-1-1-0 ^designation[=].value = "Pediatrische aandoeningen - Motorische ontwikkelingsvertraging -"
* #co-10-1-1-0 ^designation[+].language = #fr-BE
* #co-10-1-1-0 ^designation[=].value = "Troubles pédiatriques - Retard de développement moteur -"
* #co-10-1-2-0 "co-10-1-2-0"
* #co-10-1-2-0 ^designation[0].language = #nl-BE
* #co-10-1-2-0 ^designation[=].value = "Pediatrische aandoeningen - Asymmetrische ontwikkeling -"
* #co-10-1-2-0 ^designation[+].language = #fr-BE
* #co-10-1-2-0 ^designation[=].value = "Troubles pédiatriques - Développement asymétrique -"
* #co-10-1-3-0 "co-10-1-3-0"
* #co-10-1-3-0 ^designation[0].language = #nl-BE
* #co-10-1-3-0 ^designation[=].value = "Pediatrische aandoeningen - Motorische onhandigheid -"
* #co-10-1-3-0 ^designation[+].language = #fr-BE
* #co-10-1-3-0 ^designation[=].value = "Troubles pédiatriques - Maladresse motrice -"
* #co-10-1-99-0 "co-10-1-99-0"
* #co-10-1-99-0 ^designation[0].language = #nl-BE
* #co-10-1-99-0 ^designation[=].value = "Pediatrische aandoeningen - Andere (ook uit F-E-11bis) -"
* #co-10-1-99-0 ^designation[+].language = #fr-BE
* #co-10-1-99-0 ^designation[=].value = "Troubles pédiatriques - Autre (également de F-E-11bis) -"
* #co-11-1-1-0 "co-11-1-1-0"
* #co-11-1-1-0 ^designation[0].language = #nl-BE
* #co-11-1-1-0 ^designation[=].value = "Andere - Gangrevalidatie bij afwijking van gang en/of beweeglijkheid -"
* #co-11-1-1-0 ^designation[+].language = #fr-BE
* #co-11-1-1-0 ^designation[=].value = "Autre - Rééducation de la marche en cas de déviation de la marche et/ou de la mobilité -"
* #co-11-1-2-0 "co-11-1-2-0"
* #co-11-1-2-0 ^designation[0].language = #nl-BE
* #co-11-1-2-0 ^designation[=].value = "Andere - Pré-operatieve kiné -"
* #co-11-1-2-0 ^designation[+].language = #fr-BE
* #co-11-1-2-0 ^designation[=].value = "Autre - Kiné pré-opératoire -"
* #co-11-1-3-0 "co-11-1-3-0"
* #co-11-1-3-0 ^designation[0].language = #nl-BE
* #co-11-1-3-0 ^designation[=].value = "Andere - Risicofactoren in de levensstijl (diabetes, obesitas, …) -"
* #co-11-1-3-0 ^designation[+].language = #fr-BE
* #co-11-1-3-0 ^designation[=].value = "Autre - Facteurs de risque liés au mode de vie (diabète, obésité, …) -"
* #co-11-1-4-0 "co-11-1-4-0"
* #co-11-1-4-0 ^designation[0].language = #nl-BE
* #co-11-1-4-0 ^designation[=].value = "Andere - Fibromyalgie, CVS, ME, SOLK, … -"
* #co-11-1-4-0 ^designation[+].language = #fr-BE
* #co-11-1-4-0 ^designation[=].value = "Autre - Fibromyalgie, SFC, ME, MUS, ... -"
* #co-11-1-5-0 "co-11-1-5-0"
* #co-11-1-5-0 ^designation[0].language = #nl-BE
* #co-11-1-5-0 ^designation[=].value = "Andere - Brandwonden, Littekens, … -"
* #co-11-1-5-0 ^designation[+].language = #fr-BE
* #co-11-1-5-0 ^designation[=].value = "Autre -  Brûlures, Cicatrices, … -"
* #co-11-1-6-0 "co-11-1-6-0"
* #co-11-1-6-0 ^designation[0].language = #nl-BE
* #co-11-1-6-0 ^designation[=].value = "Andere - Reconditionering na (algemene) spierzwakte -"
* #co-11-1-6-0 ^designation[+].language = #fr-BE
* #co-11-1-6-0 ^designation[=].value = "Autre - Reconditionnement après une faiblesse musculaire (générale) -"
* #co-11-1-7-0 "co-11-1-7-0"
* #co-11-1-7-0 ^designation[0].language = #nl-BE
* #co-11-1-7-0 ^designation[=].value = "Andere - Post-Covid -"
* #co-11-1-7-0 ^designation[+].language = #fr-BE
* #co-11-1-7-0 ^designation[=].value = "Autre - Post-Covid -"
* #co-11-1-99-0 "co-11-1-99-0"
* #co-11-1-99-0 ^designation[0].language = #nl-BE
* #co-11-1-99-0 ^designation[=].value = "Andere - Andere (ook uit F-E-11bis) -"
* #co-11-1-99-0 ^designation[+].language = #fr-BE
* #co-11-1-99-0 ^designation[=].value = "Autre - Autre (également de F-E-11bis) -"

---

// File: input/fsh/extensions/BeExtItemPatientFee.fsh

Extension: BeExtItemPatientFee
Id: be-ext-mycarenet-item-patientfee
Title: "BeExtItemPatientFee"
Description: "Sum to be paid by the patient per item"
* value[x] 1..1 MS
* value[x] only Money
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"


---

// File: input/fsh/extensions/BeExtItemReimbursement.fsh

Extension: BeExtItemReimbursement
Id: be-ext-mycarenet-item-reimbursement
Title: "BeExtItemReimbursement"
Description: "Reimbursement for the patient per item"
* value[x] 1..1 MS
* value[x] only Money
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"

---

// File: input/fsh/extensions/BeExtSystem.fsh

Extension: BeExtSystem
Id: be-ext-system
Title: "BeExtSystem"
Description: "System indicating the type of the value"
* value[x] 1..1 MS
* value[x] only uri
* ^context[+].type = #element
* ^context[=].expression = "Coverage.class.value"

---

// File: input/fsh/instances/BeCMISOToothSnomedCt.fsh

Instance: BeCMISOToothSnomedCT
InstanceOf: ConceptMap
Description: "ISO tooth numbers to SNOMED CT"
Title: "BeCMISOToothSnomedCT"
Usage: #definition
* name = "BeCMISOToothSnomedCT"
* experimental = false
* description =  "ISO tooth numbers to SNOMED CT"
* title = "BeCMISOToothSnomedCT"
* status = #active
* sourceUri = "https://www.iso.org/standard/68292.html"
* targetCanonical = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/ValueSet/be-vs-toothnumber-bodysite"
* group[+].source = "https://www.iso.org/standard/68292.html"
* group[=].target = $sct
* group[=].element[0].code = #11
* group[=].element[=].display = "11"
* group[=].element[=].target.code = #422653006
* group[=].element[=].target.display = "Structure of permanent maxillary right central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #12
* group[=].element[=].display = "12"
* group[=].element[=].target.code = #424877001
* group[=].element[=].target.display = "Structure of permanent maxillary right lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #13
* group[=].element[=].display = "13"
* group[=].element[=].target.code = #860767006
* group[=].element[=].target.display = "Structure of permanent maxillary right canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #14
* group[=].element[=].display = "14"
* group[=].element[=].target.code = #57826002
* group[=].element[=].target.display = "Structure of permanent maxillary right first premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #15
* group[=].element[=].display = "15"
* group[=].element[=].target.code = #36492000
* group[=].element[=].target.display = "Structure of permanent maxillary right second premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #16
* group[=].element[=].display = "16"
* group[=].element[=].target.code = #865995000
* group[=].element[=].target.display = "Structure of permanent maxillary right first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #17
* group[=].element[=].display = "17"
* group[=].element[=].target.code = #863902006
* group[=].element[=].target.display = "Structure of permanent maxillary right second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #18
* group[=].element[=].display = "18"
* group[=].element[=].target.code = #68085002
* group[=].element[=].target.display = "Structure of permanent maxillary right third molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #21
* group[=].element[=].display = "21"
* group[=].element[=].target.code = #424399000
* group[=].element[=].target.display = "Structure of permanent maxillary left central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #22
* group[=].element[=].display = "22"
* group[=].element[=].target.code = #423185002
* group[=].element[=].target.display = "Structure of permanent maxillary left lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #23
* group[=].element[=].display = "23"
* group[=].element[=].target.code = #860780009
* group[=].element[=].target.display = "Structure of permanent maxillary left canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #24
* group[=].element[=].display = "24"
* group[=].element[=].target.code = #61897005
* group[=].element[=].target.display = "Structure of permanent maxillary left first premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #25
* group[=].element[=].display = "25"
* group[=].element[=].target.code = #23226009
* group[=].element[=].target.display = "Structure of permanent maxillary left second premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #26
* group[=].element[=].display = "26"
* group[=].element[=].target.code = #865988009
* group[=].element[=].target.display = "Structure of permanent maxillary left first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #27
* group[=].element[=].display = "27"
* group[=].element[=].target.code = #863901004
* group[=].element[=].target.display = "Structure of permanent maxillary left second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #28
* group[=].element[=].display = "28"
* group[=].element[=].target.code = #87704003
* group[=].element[=].target.display = "Structure of permanent maxillary left third molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #31
* group[=].element[=].display = "31"
* group[=].element[=].target.code = #425106001
* group[=].element[=].target.display = "Structure of permanent mandibular left central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #32
* group[=].element[=].display = "32"
* group[=].element[=].target.code = #423331005
* group[=].element[=].target.display = "Structure of permanent mandibular left lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #33
* group[=].element[=].display = "33"
* group[=].element[=].target.code = #860782001
* group[=].element[=].target.display = "Structure of permanent mandibular left canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #34
* group[=].element[=].display = "34"
* group[=].element[=].target.code = #2400006
* group[=].element[=].target.display = "Structure of permanent mandibular left first premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #35
* group[=].element[=].display = "35"
* group[=].element[=].target.code = #24573005
* group[=].element[=].target.display = "Structure of permanent mandibular left second premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #36
* group[=].element[=].display = "36"
* group[=].element[=].target.code = #866006002
* group[=].element[=].target.display = "Structure of permanent mandibular left first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #37
* group[=].element[=].display = "37"
* group[=].element[=].target.code = #863898000
* group[=].element[=].target.display = "Structure of permanent mandibular left second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #38
* group[=].element[=].display = "38"
* group[=].element[=].target.code = #74344005
* group[=].element[=].target.display = "Structure of permanent mandibular left third molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #41
* group[=].element[=].display = "41"
* group[=].element[=].target.code = #424575004
* group[=].element[=].target.display = "Structure of permanent mandibular right central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #42
* group[=].element[=].display = "42"
* group[=].element[=].target.code = #423937004
* group[=].element[=].target.display = "Structure of permanent mandibular right lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #43
* group[=].element[=].display = "43"
* group[=].element[=].target.code = #860785004
* group[=].element[=].target.display = "Structure of permanent mandibular right canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #44
* group[=].element[=].display = "44"
* group[=].element[=].target.code = #80140008
* group[=].element[=].target.display = "Structure of permanent mandibular right first premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #45
* group[=].element[=].display = "45"
* group[=].element[=].target.code = #8873007
* group[=].element[=].target.display = "Structure of permanent mandibular right second premolar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #46
* group[=].element[=].display = "46"
* group[=].element[=].target.code = #866005003
* group[=].element[=].target.display = "Structure of permanent mandibular right first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #47
* group[=].element[=].display = "47"
* group[=].element[=].target.code = #863899008
* group[=].element[=].target.display = "Structure of permanent mandibular right second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #48
* group[=].element[=].display = "48"
* group[=].element[=].target.code = #38994002
* group[=].element[=].target.display = "Structure of permanent mandibular right third molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[+].source = "https://www.iso.org/standard/68292.html"
* group[=].target = $sct
* group[=].element[+].code = #51
* group[=].element[=].display = "51"
* group[=].element[=].target.code = #88824007
* group[=].element[=].target.display = "Structure of deciduous maxillary right central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #52
* group[=].element[=].display = "52"
* group[=].element[=].target.code = #65624003
* group[=].element[=].target.display = "Structure of deciduous maxillary right lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #53
* group[=].element[=].display = "53"
* group[=].element[=].target.code = #30618001
* group[=].element[=].target.display = "Structure of deciduous maxillary right canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #54
* group[=].element[=].display = "54"
* group[=].element[=].target.code = #17505006
* group[=].element[=].target.display = "Structure of deciduous maxillary right first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #55
* group[=].element[=].display = "55"
* group[=].element[=].target.code = #27855007
* group[=].element[=].target.display = "Structure of deciduous maxillary right second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #61
* group[=].element[=].display = "61"
* group[=].element[=].target.code = #51678005
* group[=].element[=].target.display = "Structure of deciduous maxillary left central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #62
* group[=].element[=].display = "62"
* group[=].element[=].target.code = #43622005
* group[=].element[=].target.display = "Structure of deciduous maxillary left lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #63
* group[=].element[=].display = "63"
* group[=].element[=].target.code = #73937000
* group[=].element[=].target.display = "Structure of deciduous maxillary left canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #64
* group[=].element[=].display = "64"
* group[=].element[=].target.code = #45234009
* group[=].element[=].target.display = "Structure of deciduous maxillary left first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #65
* group[=].element[=].display = "65"
* group[=].element[=].target.code = #51943008
* group[=].element[=].target.display = "Structure of deciduous maxillary left second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #71
* group[=].element[=].display = "71"
* group[=].element[=].target.code = #89552004
* group[=].element[=].target.display = "Structure of deciduous mandibular left central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #72
* group[=].element[=].display = "72"
* group[=].element[=].target.code = #14770005
* group[=].element[=].target.display = "Structure of deciduous mandibular left lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #73
* group[=].element[=].display = "73"
* group[=].element[=].target.code = #43281008
* group[=].element[=].target.display = "Structure of deciduous mandibular left canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #74
* group[=].element[=].display = "74"
* group[=].element[=].target.code = #38896004
* group[=].element[=].target.display = "Structure of deciduous mandibular left first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #75
* group[=].element[=].display = "75"
* group[=].element[=].target.code = #49330006
* group[=].element[=].target.display = "Structure of deciduous mandibular left second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #81
* group[=].element[=].display = "81"
* group[=].element[=].target.code = #67834006
* group[=].element[=].target.display = "Structure of deciduous mandibular right central incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #82
* group[=].element[=].display = "82"
* group[=].element[=].target.code = #22445006
* group[=].element[=].target.display = "Structure of deciduous mandibular right lateral incisor tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #83
* group[=].element[=].display = "83"
* group[=].element[=].target.code = #6062009
* group[=].element[=].target.display = "Structure of deciduous mandibular right canine tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #84
* group[=].element[=].display = "84"
* group[=].element[=].target.code = #58646007
* group[=].element[=].target.display = "Structure of deciduous mandibular right first molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #85
* group[=].element[=].display = "85"
* group[=].element[=].target.code = #61868007
* group[=].element[=].target.display = "Structure of deciduous mandibular right second molar tooth (body structure)"
* group[=].element[=].target.equivalence = #equivalent

---

// File: input/fsh/instances/BeNSClaimRelatedClaim.fsh

Instance: be-ns-claim-related-claim
InstanceOf: NamingSystem
Description: "Claim Related Claim"
Usage: #definition
* name = "BeNSClaimRelatedClaim"
* status = #active
* kind = #identifier
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/NamingSystem/be-ns-claim-related-claim"
* uniqueId[=].preferred = true
* date = "2023-02-28"

---

// File: input/fsh/instances/BeSPClaimResponsePreAuthRef.fsh

Instance: be-sp-claimresponse-preAuthRef
InstanceOf: SearchParameter
Title: "BeSPClaimResponsePreAuthRef"
Usage: #definition
* url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/SearchParameter/be-sp-claimresponse-preAuthRef"
* status = #active
* description = "This SearchParameter enables query of ClaimResponses by preAuthRef."
* name = "preAuthRef"
* code = #preAuthRef
* base[0] = #ClaimResponse
* type = #string
* expression = "preAuthRef"
* xpath = "f:preAuthRef"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = false

---

// File: input/fsh/instances/BeSPClaimResponseSubType.fsh

Instance: be-sp-claimresponse-subType
InstanceOf: SearchParameter
Title: "BeSPClaimResponseSubType"
Usage: #definition
* url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/SearchParameter/be-sp-claimresponse-subType"
* status = #active
* description = "This SearchParameter enables query of ClaimResponses by subType."
* name = "subType"
* code = #subType
* base[0] = #ClaimResponse
* type = #token
* expression = "subType"
* xpath = "f:subType"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = false

---

// File: input/fsh/invariants/BeInvCT1CT2.fsh

Invariant: BeInvCT1CT2
Description: "Coverage.class SHALL contain at least a CT1 and a CT2 value"
Severity: #error
Expression: "Coverage.class.value.extension('https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-ext-system').where(value is Uri).where(value = 'https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/be-cs-holder-code-1').empty().not() 
and Coverage.class.value.extension('https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-ext-system').where(value is Uri).where(value = 'https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/be-cs-holder-code-2').empty().not() 
and Coverage.class.value.where(extension('https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-ext-system').value = 'https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/be-cs-holder-code-1').memberOf('https://www.ehealth.fgov.be/standards/fhir/mycarenet/ValueSet/be-vs-holder-code-1') 
and Coverage.class.value.where(extension('https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-ext-system').value = 'https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/be-cs-holder-code-2').memberOf('https://www.ehealth.fgov.be/standards/fhir/mycarenet/ValueSet/be-vs-holder-code-2')"

---

// File: input/fsh/invariants/mcn-2.fsh

Invariant: mcn-2
Description: "If identifier is not present: supportingInfo and contained SHALL be present."
Severity: #error
Expression: "identifier.empty() implies (supportingInfo.exists() and contained.exists())"

---

// File: input/fsh/logicals/BeModelEAgreement.fsh

Logical: BeModelEAgreement
Parent: Element
Id: be-model-eagreement
* serviceProvider  0..1 Identifier "NIHDI number of the service provider making the request"
* patient  1..1 Identifier "Patient identification"
* eAgreementType 1..1 CodeableConcept "Identification of the type of agreement (ex: Fb). A general type \"physiotherapist\" is applicable for the consultation"
* decisionId 0..1 Identifier "Identifier of the decision communicated by the insurer organization (included in the consultation flow)"
* desiredStartDate  0..1 dateTime "Desired agreement start date, corresponding to the processing start date (dd/mm/yyyy)"
* pathologyOnsetDate  0..1 dateTime "Estimated date of onset of pathology (dd/mm/yyyy)"
* assessmentCompletionDates 0..5 dateTime "Date(s) of completion of the assessment (1 to 5 for an ask and 1 for an extend) to be communicated in case of a treatment request"
* pathologicalSituation 0..1 CodeableConcept "Coding of the pathological situation referring to existing notification/request forms (e.g.: Fb-51)"
* notes 0..1 Annotation "Free text for any additional information"
* prescription 0..1 BackboneElement "Data of the prescription concerned by the request"
* prescription.identification 0..1 Identifier "UHMEP identifier of the referral prescription"
* prescription.prescriber 1..1	Identifier "NIHDI number of the prescriber"
* prescription.authoredOn 1..1	dateTime "Prescription date"
* prescription.quantity 1..1	positiveInt "Number of sessions prescribed"
* prescription.scan	0..1 Binary "Electronic copy of the prescription"
* related 0..1 BackboneElement "Prescription of a previous pathology"
* related.identification 0..1 Identifier "UHMEP identifier of the referral prescription"
* related.prescriber 1..1 Identifier "NIHDI number of the prescriber"
* related.authoredOn 1..1	dateTime "Prescription date"
* related.quantity 1..1 positiveInt "Number of sessions prescribed"
* related.scan 0..1 Binary "Electronic copy of the prescription"
* attachment 0..* BackboneElement "Other possible appendix"
* attachment.kind 1..1 CodeableConcept "Type of content (medical report, …)"
* attachment.title 0..1	string "Free text allowing a more precise description of the subject of the appendix (recommended)"
* attachment.scan 1..1	Binary "Electronic copy"

---

// File: input/fsh/logicals/BeModelEAgreementResponse.fsh

Logical: BeModelEAgreementResponse
Parent: Element
Id: be-model-eagreement-response
* patient 0..1  Identifier "Patient identification"
* rejectionReason 0..* CodeableConcept "Reason for rejection"
* serviceProvider 0..1  Identifier "NIHDI number of the service provider/institution responsible for the request"
* eAgreementType 0..1 CodeableConcept "Identification of the type of agreement (ex: Fb)"
* decisionId 0..1  Identifier "Identifier of the decision communicated by the insurer organization"
* pathologicalSituation 0..1 CodeableConcept "Codification of the pathological situation referring to existing notification/request forms (eg: Fb-51)"
* decisionType 0..1 CodeableConcept "Current decision of the request (ex: 'in process')"
* decisionDate 0..1 dateTime "Latest decision date (including if in process or request for info)"
* insurer 0..1 Identifier "Insurer organization responsible for the message (3 positions)"
* agreementStartDate 0..1 dateTime "Agreement start date (dd/mm/yyyy)"
* agreementEndDate 0..1 dateTime "Agreement end date (dd/mm/yyyy)"
* refusalReason 0..* CodeableConcept "Reason for refusal (code with optional additional description)"
* additionalInfoReason 0..* CodeableConcept "Reason for the request of additional information"


---

// File: input/fsh/profiles/BeMyCareNetCoverage.fsh

Profile: BeMyCareNetCoverage
Parent: Coverage
Id: be-mycarenet-coverage
Title: "MyCareNet Coverage BE profile"
Description: "Coverage profile for use in the different MyCareNet flows"
* id 1..1 MS
* status 1..1 MS
* type 1..1 MS
* type.coding 1..1 MS
* type.coding.system 1..1 MS
* type.coding.code 1..1 MS
* beneficiary 1..1 MS
* beneficiary only Reference(BePatient)
* payor 1..1 MS
* payor only Reference(BeOrganization)
* class.value 1..1 MS
* class.value.extension contains BeExtSystem named system 0..1 MS
* class 2..* MS
* class.type 1..1 MS
* class.type.coding 1..1 MS
* class.type.coding.system 1..1 MS
* class.type.coding.code 1..1 MS
* obeys BeInvCT1CT2




---

// File: input/fsh/profiles/BeMyCareNetEagreementClaim.fsh

Profile: BeMyCareNetEagreementClaim
Parent: Claim
Id: be-eagreementclaim
Title: "MyCareNet eAgreement Claim BE profile"
Description: "Claim profile for use in the different eAgreement flow from MyCareNet."
* ^status = #active
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementclaim"
* ^version = "1.0.0"
* billablePeriod MS
* created MS
* enterer 1.. MS
* enterer only Reference(BePractitionerRole)
* enterer.reference 1..
* id 1.. MS
* insurance ..1 MS
* insurance.coverage.display 1..
* insurance.focal = true (exactly)
* insurance.sequence = 1 (exactly)
* item MS
* item.productOrService.coding 1..1
* item.productOrService.coding from BeProductOrServiceNihdiEAgreement (extensible)
* item.productOrService.coding.code 1..
* item.productOrService.coding.system 1..
* item.serviced[x] only date
* meta 1.. MS
* meta.profile ^mustSupport = false
* meta.profile 1..1
* obeys be-rule-eagreementclaim-1 and be-rule-eagreementclaim-2 and be-rule-eagreementclaim-3
* patient MS
* patient only Reference(BePatient)
* priority MS
* priority.coding 1..1
* priority.coding.code = #stat (exactly)
* priority.coding.code 1..
* priority.coding.system = "http://terminology.hl7.org/CodeSystem/processpriority" (exactly)
* priority.coding.system 1..
* provider MS
* provider only Reference(BeOrganization or BePractitionerRole)
* provider.reference 1..
* referral MS
* referral.reference 1..
* status = #active (exactly)
* status MS
* subType 1.. MS
* subType.coding ^mustSupport = false
* subType.coding 1..1
* subType.coding.code ^mustSupport = false
* subType.coding.code 1..
* subType.coding.system ^mustSupport = false
* subType.coding.system = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/agreement-types"
* subType.coding.system 1..
* supportingInfo MS
* supportingInfo.category MS
* supportingInfo.category.coding ^mustSupport = false
* supportingInfo.category.coding 1..1
* supportingInfo.category.coding.code ^mustSupport = false
* supportingInfo.category.coding.code 1..
* supportingInfo.category.coding.system ^mustSupport = false
* supportingInfo.category.coding.system 1..
* supportingInfo.code.coding 1..1
* supportingInfo.code.coding.code 1..
* supportingInfo.code.coding.system 1..
* type MS
* type.coding ^mustSupport = false
* type.coding 1..1
* type.coding.code ^mustSupport = false
* type.coding.code = #professional (exactly)
* type.coding.code 1..
* type.coding.system ^mustSupport = false
* type.coding.system = "http://terminology.hl7.org/CodeSystem/claim-type" (exactly)
* type.coding.system 1..
* use = #preauthorization (exactly)
* use MS

Invariant: be-rule-eagreementclaim-1
Description: "Billable period start and end SHALL be YYYY-MM-DD"
Expression: "(Claim.billablePeriod.start.exists() implies Claim.billablePeriod.start.toString().length()=10) and (Claim.billablePeriod.end.exists() implies Claim.billablePeriod.end.toString().length()=10)"
Severity: #error

Invariant: be-rule-eagreementclaim-2
Description: "Created SHALL be YYYY-MM-DDThh:mm:ss+zz:zz"
Expression: "Claim.created.toString().length()=25"
Severity: #error

Invariant: be-rule-eagreementclaim-3
Description: "Procedure.date SHALL be YYYY-MM-DD"
Expression: "Claim.procedure.date.exists() implies Claim.procedure.date.select(toString().length()=10).allTrue()"
Severity: #error

---

// File: input/fsh/profiles/BeMyCareNetEagreementClaimResponse.fsh

Profile: BeMyCareNetEagreementClaimResponse
Parent: ClaimResponse
Id: be-eagreementclaimresponse
Title: "MyCareNet eAgreement Claim Response BE profile"
Description: "Claimresponse profile for use in the different eAgreement flows from MyCareNet."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementclaimresponse"
* ^version = "1.0.0"
* ^status = #active
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* status MS
* type MS
* type.coding 1..1
* type.coding.system 1..
* type.coding.code 1..
* subType 1.. MS
* subType.coding 1..1
* subType.coding.system 1..
* subType.coding.system = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/agreement-types"
* subType.coding.code 1..
* use MS
* patient only Reference(BePatient)
* patient MS
* created MS
* insurer only Reference(BeOrganization)
* insurer MS
* requestor 1.. MS
* requestor only Reference(BeOrganization or BePractitioner or BePractitionerRole)
* requestor.reference 1..
* outcome MS
* preAuthRef 1.. MS
* preAuthPeriod MS
* preAuthPeriod.start 1..
* item.adjudication ..1 MS
* item.adjudication.category.coding 1..1
* item.adjudication.category.coding.system 1..
* item.adjudication.category.coding.system = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/decision-values"
* item.adjudication.category.coding.code 1..
* item.adjudication.reason.coding 1..1
* item.adjudication.reason.coding from BeEAgreementAdjudicationReason (extensible)
* item.adjudication.reason.coding.system 1..
* item.adjudication.reason.coding.code 1..
* addItem MS
* addItem.itemSequence 1..1 MS
* addItem.productOrService from BeProductOrServiceNihdiEAgreement (extensible)
* addItem.productOrService.coding 1..1
* addItem.productOrService.coding.system 1..
* addItem.productOrService.coding.code 1..
* addItem.adjudication ..* MS
* obeys be-rule-eagreementclaimresponse-1 and be-rule-eagreementclaimresponse-2

Invariant: be-rule-eagreementclaimresponse-1
Description: "preAuthPeriod start and end SHALL be YYYY-MM-DD"
Expression: "(ClaimResponse.preAuthPeriod.exists() implies ClaimResponse.preAuthPeriod.start.toString().length()=10) and (ClaimResponse.preAuthPeriod.end.exists() implies ClaimResponse.preAuthPeriod.end.toString().length()=10)"
Severity: #error

Invariant: be-rule-eagreementclaimresponse-2
Description: "Created SHALL be YYYY-MM-DDThh:mm:ss+zz:zz"
Expression: "ClaimResponse.created.toString().length()=25"
Severity: #error

---

// File: input/fsh/profiles/BeMyCareNetEagreementconsult.fsh

Profile: BeMyCareNetEagreementconsult
Parent: Bundle
Id: be-eagreementconsult
Title: "MyCareNet eAgreement Consult Bundle BE profile"
Description: "Profile for the consulting of eAgreement in the MyCareNet flows."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementconsult"
* ^version = "1.0.0"
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* type MS
* timestamp 1.. MS
* entry 4..
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.description = "Slice based on the entry.resource type"
* entry ^slicing.rules = #open
* entry contains
    messageHeader 1..1 MS and
    practitioner 0..1 MS and
    practitionerRole 0..1 MS and
    organization 0..1 MS and
    patient 1..1 MS and
    parameters 1..1 MS
* entry[messageHeader].fullUrl 1..
* entry[messageHeader].resource 1..
* entry[messageHeader].resource only BeMyCareNetMessageHeader
* entry[practitioner].fullUrl 1..
* entry[practitioner].resource 1..
* entry[practitioner].resource only BePractitioner
* entry[practitionerRole].fullUrl 1..
* entry[practitionerRole].resource 1..
* entry[practitionerRole].resource only BePractitionerRole
* entry[organization].fullUrl 1..
* entry[organization].resource 1..
* entry[organization].resource only BeOrganization
* entry[patient].fullUrl 1..
* entry[patient].resource 1..
* entry[patient].resource only BePatient
* entry[parameters].fullUrl 1..
* entry[parameters].resource 1..
* entry[parameters].resource only Parameters

---

// File: input/fsh/profiles/BeMyCareNetEagreementConsultReply.fsh

Profile: BeMyCareNetEagreementConsultReply
Parent: Bundle
Id: be-eagreementconsultreply
Title: "MyCareNet eAgreement Consult Reply Bundle BE profile"
Description: "Profile for the reply to consulting eAgreement request in the MyCareNet flows."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementconsultreply"
* ^version = "1.0.0"
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* type MS
* timestamp 1.. MS
* entry 1..
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.description = "Slice based on the entry.resource type"
* entry ^slicing.rules = #open
* entry contains
    messageHeader 1..1 MS and
    practitioner 0..1 MS and
    practitionerRole 0..1 MS and
    organization 1..2 MS and
    patient 0..1 MS and
    searchsetBundle 0..1 MS and
    operationOutcome 0..1 MS
* entry[messageHeader].fullUrl 1..
* entry[messageHeader].resource 1..
* entry[messageHeader].resource only BeMyCareNetMessageHeader
* entry[practitioner].fullUrl 1..
* entry[practitioner].resource 1..
* entry[practitioner].resource only BePractitioner
* entry[practitionerRole].fullUrl 1..
* entry[practitionerRole].resource 1..
* entry[practitionerRole].resource only BePractitionerRole
* entry[organization].fullUrl 1..
* entry[organization].resource 1..
* entry[organization].resource only BeOrganization
* entry[patient].fullUrl 1..
* entry[patient].resource 1..
* entry[patient].resource only BePatient
* entry[searchsetBundle].fullUrl 1..
* entry[searchsetBundle].resource 1..
* entry[searchsetBundle].resource only Bundle
* entry[operationOutcome].fullUrl 1..
* entry[operationOutcome].resource 1..
* entry[operationOutcome].resource only BeMyCareNetOperationOutcome
* entry[operationOutcome].resource.issue.details.coding from BeVSEagreementErrors (extensible)

---

// File: input/fsh/profiles/BeMyCareNetEAgreementDemand.fsh

Profile: BeMyCareNetEAgreementDemand
Parent: Bundle
Id: be-eagreementdemand
Title: "MyCareNet eAgreement Demand Bundle BE profile"
Description: "The profile for the demand for an agreement."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementdemand"
* ^version = "1.0.0"
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* type MS
* timestamp 1.. MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.description = "Slice based on the entry.resource type"
* entry ^slicing.rules = #open
* entry contains
    messageHeader 1..1 MS and
    practitioner 1..* MS and
    claim 1..1 MS and
    practitionerRole 1..* MS and
    organization 0..* MS and
    patient 1..1 MS and
    serviceRequest 0..* MS
* entry[messageHeader].fullUrl 1..
* entry[messageHeader].resource 1..
* entry[messageHeader].resource only BeMyCareNetMessageHeader
* entry[practitioner].fullUrl 1..
* entry[practitioner].resource 1..
* entry[practitioner].resource only BePractitioner
* entry[claim].fullUrl 1..
* entry[claim].resource 1..
* entry[claim].resource only BeMyCareNetEagreementClaim
* entry[practitionerRole].fullUrl 1..
* entry[practitionerRole].resource 1..
* entry[practitionerRole].resource only BePractitionerRole
* entry[organization].fullUrl 1..
* entry[organization].resource 1..
* entry[organization].resource only BeOrganization
* entry[patient].fullUrl 1..
* entry[patient].resource 1..
* entry[patient].resource only BePatient
* entry[serviceRequest].fullUrl 1..
* entry[serviceRequest].resource 1..
* entry[serviceRequest].resource only BeMyCareNetEagreementServiceRequest

---

// File: input/fsh/profiles/BeMyCareNetEagreementDemandReply.fsh

Profile: BeMyCareNetEagreementDemandReply
Parent: Bundle
Id: be-eagreementdemandreply
Title: "MyCareNet eAgreement Demand Reply Bundle BE profile"
Description: "The profile for the reply on a demand for an agreement in the MyCareNet flows."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementdemandreply"
* ^version = "1.0.0"
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* type MS
* timestamp 1.. MS
* entry 1..
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.description = "Slice based on the entry.resource type"
* entry ^slicing.rules = #open
* entry contains
    messageHeader 1..1 MS and
    practitioner 0..1 MS and
    practitionerRole 0..1 MS and
    claimResponse 0..1 MS and
    operationOutcome 0..1 MS and
    organization 1..2 MS and
    patient 0..1 MS
* entry[messageHeader].fullUrl 1..
* entry[messageHeader].resource 1..
* entry[messageHeader].resource only BeMyCareNetMessageHeader
* entry[practitioner].fullUrl 1..
* entry[practitioner].resource 1..
* entry[practitioner].resource only BePractitioner
* entry[practitionerRole].fullUrl 1..
* entry[practitionerRole].resource 1..
* entry[practitionerRole].resource only BePractitionerRole
* entry[claimResponse].fullUrl 1..
* entry[claimResponse].resource 1..
* entry[claimResponse].resource only BeMyCareNetEagreementClaimResponse
* entry[operationOutcome].fullUrl 1..
* entry[operationOutcome].resource 1..
* entry[operationOutcome].resource only BeMyCareNetOperationOutcome
* entry[operationOutcome].resource.issue.details.coding from BeVSEagreementErrors (extensible)
* entry[organization].fullUrl 1..
* entry[organization].resource 1..
* entry[organization].resource only BeOrganization
* entry[patient].fullUrl 1..
* entry[patient].resource 1..
* entry[patient].resource only BePatient

---

// File: input/fsh/profiles/BeMyCareNetEagreementServiceRequest.fsh

Profile: BeMyCareNetEagreementServiceRequest
Parent: ServiceRequest
Id: be-eagreementservicerequest
Title: "MyCareNet eAgreement ServiceRequest BE profile"
Description: "The ServiceRequest profile for use in the different eAgreement flows from MyCareNet."
* ^status = #active
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementservicerequest"
* ^version = "1.0.0"
* authoredOn 1..1 MS
* category 1..1 MS
* category.coding 1..1
* category.coding.code 1..
* category.coding.system = "http://snomed.info/sct" (exactly)
* category.coding.system 1..
* code 1..1 MS
* code.coding 1..1
* code.coding.code 1..
* code.coding.system = "http://snomed.info/sct" (exactly)
* code.coding.system 1..
* contained ..1 MS
* contained only BeMyCareNetEagreementServiceRequestBinary
* id 1.. MS
* intent = #order (exactly)
* intent MS
* obeys mcn-2
* quantity[x] MS
* quantity[x] only Quantity
* requester 1..1 MS
* requester only Reference(BePractitionerRole or BePractitioner)
* status = #active (exactly)
* status MS
* subject MS
* subject only Reference(BePatient)
* supportingInfo ..1 MS
* supportingInfo.reference 1.. MS

---

// File: input/fsh/profiles/BeMyCareNetEagreementServiceRequestBinary.fsh

Profile: BeMyCareNetEagreementServiceRequestBinary
Parent: Binary
Id: be-eagreementservicerequest-binary
Title: "MyCareNet eAgreement Service Request Binary BE profile"
Description: "A supporting profile on Binary for use in the ServiceRequest eAgreement profile from MyCareNet."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementservicerequest-binary"
* ^version = "1.0.0"
* id 1.. MS
* contentType = #application/pdf (exactly)
* contentType MS
* data 1.. MS

---

// File: input/fsh/profiles/BeMyCareNetMessageHeader.fsh

Profile: BeMyCareNetMessageHeader
Parent: MessageHeader
Id: be-messageheader
Title: "MyCareNet MessageHeader BE profile"
Description: "This is the generic MessageHeader profile for use in the different eAgreement flows from MyCareNet."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-messageheader"
* ^version = "1.0.0"
* ^status = #active
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* meta.profile ^mustSupport = false
* event[x] MS
* eventCoding only Coding
* eventCoding ^sliceName = "eventCoding"
* eventCoding.system 1..
* eventCoding.code 1..
* destination 1..1 MS
* sender 1.. MS
* sender.reference 1..
* enterer ..0
* author ..0
* source MS
* responsible ..0
* reason ..0
* response MS
* focus 1..1 MS
* focus.reference 
* focus.identifier
* definition ..0

---

// File: input/fsh/profiles/BeMyCareNetOperationOutcome.fsh

Profile: BeMyCareNetOperationOutcome
Parent: OperationOutcome
Id: be-operationoutcome
Title: "MyCareNet operation outcome BE profile"
Description: "OperationOutcome profile for the specific error codes of MyCareNet."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-operationoutcome"
* ^version = "1.0.0"
* id 1.. MS
* meta 1.. MS
* meta.profile 1..1
* issue MS
* issue.severity MS
* issue.code MS
* issue.details 1.. MS
* issue.details.coding 0..1
* issue.details.coding.system 1..
* issue.details.coding.code 1..
* issue.expression 1..1 MS

---

// File: input/fsh/profiles/MyBeMyCareNetEagreementClaimKine.fsh

Profile: MyBeMyCareNetEagreementClaimKine
Parent: BeMyCareNetEagreementClaim
Id: be-eagreementclaim-kine
Title: "MyCareNet eAgreement Claim Kine BE profile"
Description: """Claim profile for use in the different eAgreement flow from MyCareNet for kine.
This profile is a diff on the general be-eagreementclaim."""
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/StructureDefinition/be-eagreementclaim-kine"
* item.productOrService.coding.system = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/CodeSystem/nihdi-physiotherapy-pathologysituationcode" (exactly)


---

// File: input/fsh/profiles/MyBeMyCareNetEagreementClaimLogo.fsh

Profile: MyBeMyCareNetEagreementClaimLogo
Parent: BeMyCareNetEagreementClaim
Id: be-eagreementclaim-logo
Title: "MyCareNet eAgreement Claim Logo BE profile"
Description: """Claim profile for use in the different eAgreement flow from MyCareNet for speech therapy.
This profile is a diff on the general be-eagreementclaim."""
* item.productOrService.coding from BeVSSpeechTherapyPathologySituationCode
* procedure.procedureCodeableConcept = $sct#386053000 
* procedure.date 1..1 MS

---

// File: input/fsh/valuesets/BeEAgreementAdjudicationReason.fsh

ValueSet: BeEAgreementAdjudicationReason
Id: eagreementadjudicationreason
Title: "ValueSet adjudication reason"
Description: "Codes for use to describe eAgreement adjudication reasons in the MyCareNet eAgreement flows."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/ValueSet/eagreementadjudicationreason"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* include codes from system MyCareNetRefusalValues
* include codes from system MyCareNetWaitingForInformationValues
* include codes from system BeCSPartialAgreementValues

---

// File: input/fsh/valuesets/BeMessageEAgreement.fsh

ValueSet: BeMessageEAgreement
Id: eagreementmessage
Title: "ValueSet message"
Description: "Codes for use to describe eAgreement messages in the MyCareNet eAgreement flows."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/ValueSet/eagreementmessage"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* include codes from system MyCareNetMessageEvents
* include codes from system $restful-interaction

---

// File: input/fsh/valuesets/BeProductOrServiceNihdiEAgreement.fsh

ValueSet: BeProductOrServiceNihdiEAgreement
Id: eagreementproductorservice
Title: "ValueSet product or service"
Description: "NIHDI codes for use to describe eAgreement products or services in the MyCareNet eAgreement flows."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/mycarenet/ValueSet/eagreementproductorservice"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* include codes from system NIHDIPhysiotherapyPathologySituationCode
* include codes from system BeCSSpeechTherapyPathologySituationCode

---

// File: input/fsh/valuesets/BeVSBasicLaterality.fsh

ValueSet: BeVSBasicLaterality
Id: be-vs-basic-laterality
Title: "Basic Laterality"
Description: "Basic Laterality as requested by CIN-NIC, subset of be-vs-body-laterality"

* ^experimental = false
//* ^caseSensitive = false
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""

* $sct#7771000
* $sct#24028007




---

// File: input/fsh/valuesets/BeVSDecisionValues.fsh

ValueSet: BeVSDecisionValues
Id: be-vs-decision-values
Title: "Mycarenet Decision Values"
Description: """Values indicating the type of decision. These values were delivered by the 
NIC(Nationaal Intermutualistisch College)/CIN(Collège Intermutualiste National.)"""
* ^experimental = false
* include codes from system MyCareNetDecisionValues



---

// File: input/fsh/valuesets/BeVSEAgreementErrors.fsh

ValueSet: BeVSEagreementErrors
Id: be-vs-eagreementerrors
Title: "EAgreement errors"
Description: "Errors in the EAgreement flow"
* ^experimental = false
* include codes from system MyCareNetAgreementErrors



---

// File: input/fsh/valuesets/BeVSHolderCode1.fsh

ValueSet: BeVSHolderCode1
Id: be-vs-holder-code-1
Title: "BeVSHolderCode1"
Description: """see http://www.securimed.eu/fr/tiers-payant/codes-dassurabilite"""
* ^experimental = false
* include codes from system BeCSHolderCode1



---

// File: input/fsh/valuesets/BeVSHolderCode2.fsh

ValueSet: BeVSHolderCode2
Id: be-vs-holder-code-2
Title: "BeVSHolderCode2"
Description: """see http://www.securimed.eu/fr/tiers-payant/codes-dassurabilite"""
* ^experimental = false
* include codes from system BeCSHolderCode2



---

// File: input/fsh/valuesets/BeVsTootNumberBodySite.fsh

ValueSet: BeVSToothNumberBodySite
Id: be-vs-toothnumber-bodysite
Title: "Tooth Number Body Site"
Description: "Tooth Number Body Site"

* ^experimental = false
//* ^caseSensitive = false
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""
* $sct#422653006
* $sct#424877001
* $sct#860767006
* $sct#57826002
* $sct#36492000
* $sct#865995000
* $sct#863902006
* $sct#68085002
* $sct#424399000
* $sct#423185002
* $sct#860780009
* $sct#61897005
* $sct#23226009
* $sct#865988009
* $sct#863901004
* $sct#87704003
* $sct#425106001
* $sct#423331005
* $sct#860782001
* $sct#2400006
* $sct#24573005
* $sct#866006002
* $sct#863898000
* $sct#74344005
* $sct#424575004
* $sct#423937004
* $sct#860785004
* $sct#80140008
* $sct#8873007
* $sct#866005003
* $sct#863899008
* $sct#38994002
* $sct#88824007
* $sct#65624003
* $sct#30618001
* $sct#17505006
* $sct#27855007
* $sct#51678005
* $sct#43622005
* $sct#73937000
* $sct#45234009
* $sct#51943008
* $sct#89552004
* $sct#14770005
* $sct#43281008
* $sct#38896004
* $sct#49330006
* $sct#67834006
* $sct#22445006
* $sct#6062009
* $sct#58646007
* $sct#61868007



---

// File: input/data/features.yml

#---


---

