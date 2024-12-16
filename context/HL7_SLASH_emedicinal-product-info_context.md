File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/administrableproductdefinition.fsh

Instance: adminproductDrugX75
InstanceOf: AdministrableProductDefinitionUvEpi
Title: "Administrable Product for DrugX 75 mg tablets"
Description: "DrugX 75 mg tablet"
Usage: #example

* id = "373b9bf3-1fae-47a1-a7cd-230106def069"

* identifier.system = $phpid
* identifier.value = "DrugXphpidplaceholder" 

* status = #active

//reference to MedicinalProductDefinition: EU/1/97/049/001 DrugX 75 mg tablet
* formOf = Reference(DrugX75mgblisterx28)

* administrableDoseForm = $administrable-dose-form#100000073664 "Tablet"
* unitOfPresentation = $unit-of-presentation#200000002152 "Tablet"


 // Reference to ManufacturedItemDefinition: Manufactured Item
* producedFrom = Reference(manitemDrugX75)

* routeOfAdministration.code = $sct#26643006 "Oral route"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/bundle-drugx-epiType1.fsh

Instance: bundlepackageleaflet75type1
InstanceOf: BundleUvEpi
Usage: #example
Title: "ePI Bundle Type 1 - DrugX Package Insert"
Description: "Example of a type 1 ePI Bundle - Package Insert"

* identifier.system = "https://www.gravitatehealth.eu/sid/doc"
* identifier.value = "EU/1/01/001/001"

* meta
  * versionId = "1"
  * lastUpdated = "2018-06-23T08:38:00+02:00"

* type = #document
* timestamp = "2018-06-23T08:38:00+02:00"

// Composition
* entry[+].fullUrl = "urn:uuid:5467a2fd-2463-4ec7-a6bb-b7322000f867"
* entry[=].resource = compositionDrugX75type1

// Organization
* entry[+].fullUrl = "urn:uuid:d71bf884-90eb-47f9-81b7-fa81ecec7e75"
* entry[=].resource = acmeinc

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/bundle-drugx-epiType2.fsh

Instance: bundlepackageleaflet75type2
InstanceOf: BundleUvEpi
Usage: #example
Title: "ePI Bundle Type 2 - DrugX Package Insert"
Description: "Example of a type 2 ePI Bundle - Package Insert"

* identifier.system = "https://www.gravitatehealth.eu/sid/doc"
* identifier.value = "EU/2/02/002/002"

* meta
  * versionId = "1"
  * lastUpdated = "2018-06-23T08:38:00+02:00"

* type = #document
* timestamp = "2018-06-23T08:38:00+02:00"

// Composition
* entry[0].fullUrl = "urn:uuid:fe63fd6a-afe8-4b61-a203-0cf4a69ffb60"
* entry[0].resource = compositionDrugX75

// Organization
* entry[+].fullUrl = "urn:uuid:d71bf884-90eb-47f9-81b7-fa81ecec7e75"
* entry[=].resource = acmeinc

// authorization
* entry[+].fullUrl = "urn:uuid:297e405a-b6f9-4273-bc01-ae031efe47f8"
* entry[=].resource = authorizationDrugX75

// medicinal product
* entry[+].fullUrl = "urn:uuid:800a51a2-d81d-49a4-a4eb-f2417d301837"
* entry[=].resource = DrugX75mgblisterx28

// packaged product
* entry[+].fullUrl = "urn:uuid:eb8392a6-2cec-4ff3-9d9e-7c5f4ae3786d"
* entry[=].resource = packagebottlex28

// administrable product
* entry[+].fullUrl = "urn:uuid:373b9bf3-1fae-47a1-a7cd-230106def069"
* entry[=].resource = adminproductDrugX75

// manufactured item
* entry[+].fullUrl = "urn:uuid:3214f286-b8ec-4ef5-bc8d-0aec39d97468"
* entry[=].resource = manitemDrugX75

// ingredients 7
* entry[+].fullUrl = "urn:uuid:745c01bc-936e-45ca-9880-57e97608f43e"
* entry[=].resource = acetaminophen75

// 8
* entry[+].fullUrl = "urn:uuid:09c13040-8fd5-4818-972d-f01d4ee169b6"
* entry[=].resource = Silicondioxide

// 9
* entry[+].fullUrl = "urn:uuid:a4b7b60c-998f-4f93-89c7-860396af0fe3"
* entry[=].resource = carnaubawax

//10
* entry[+].fullUrl = "urn:uuid:fbf58407-83d3-42db-be3d-506b2006d431"
* entry[=].resource = Croscarmellosesodium

// 11
* entry[+].fullUrl = "urn:uuid:1c10b441-6bd3-40b8-b14b-514e7c2f79d0"
* entry[=].resource = Hypromellose

// 12
* entry[+].fullUrl = "urn:uuid:7a3c0b14-2473-4541-9e45-a24d24cceddf"
* entry[=].resource = lactosemonohydrate

// 13
* entry[+].fullUrl = "urn:uuid:ceba5cd1-321f-4bc3-b203-92d97fcf472e"
* entry[=].resource = Macrogol3000

// 14
* entry[+].fullUrl = "urn:uuid:eee155e8-e442-491d-9a82-7af3cefac57f"
* entry[=].resource = Magnesiumstearate

// 15
* entry[+].fullUrl = "urn:uuid:1cdfb0bc-55f0-43ff-b750-8f3a0d9970bd"
* entry[=].resource = Microcrystallinecellulose

// 16
* entry[+].fullUrl = "urn:uuid:a88891dc-7e9e-4d84-b462-95e53de3b6a6"
* entry[=].resource = titaniumdioxide

// Substance
* entry[+].fullUrl = "urn:uuid:da33bd51-a726-4232-aaa0-4168b9bfe249"
* entry[=].resource = substanceacetaminophen


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/bundle-drugx-epiType3.fsh

Instance: bundlepackageleaflet75type3
InstanceOf: BundleUvEpi
Usage: #example
Title: "ePI Bundle Type 3 - DrugX Package Insert"
Description: "Example of a type 3 ePI Bundle - Package Insert"

* identifier.system = "https://www.gravitatehealth.eu/sid/doc"
* identifier.value = "EU/3/03/003/003"

* meta
  * versionId = "1"
  * lastUpdated = "2018-06-23T08:38:00+02:00"

* type = #document
* timestamp = "2018-06-23T08:38:00+02:00"

// Composition
* entry[0].fullUrl = "urn:uuid:fe63fd6a-afe8-4b61-a203-0cf4a69ffb60"
* entry[0].resource = compositionDrugX75

// Organization
* entry[+].fullUrl = "urn:uuid:d71bf884-90eb-47f9-81b7-fa81ecec7e75"
* entry[=].resource = acmeinc

// authorization
* entry[+].fullUrl = "urn:uuid:297e405a-b6f9-4273-bc01-ae031efe47f8"
* entry[=].resource = authorizationDrugX75

// medicinal product
* entry[+].fullUrl = "urn:uuid:800a51a2-d81d-49a4-a4eb-f2417d301837"
* entry[=].resource = DrugX75mgblisterx28

// packaged product
* entry[+].fullUrl = "urn:uuid:eb8392a6-2cec-4ff3-9d9e-7c5f4ae3786d"
* entry[=].resource = packagebottlex28

// administrable product
* entry[+].fullUrl = "urn:uuid:373b9bf3-1fae-47a1-a7cd-230106def069"
* entry[=].resource = adminproductDrugX75

// manufactured item
* entry[+].fullUrl = "urn:uuid:3214f286-b8ec-4ef5-bc8d-0aec39d97468"
* entry[=].resource = manitemDrugX75

// ingredients 7
* entry[+].fullUrl = "urn:uuid:745c01bc-936e-45ca-9880-57e97608f43e"
* entry[=].resource = acetaminophen75

// 8
* entry[+].fullUrl = "urn:uuid:09c13040-8fd5-4818-972d-f01d4ee169b6"
* entry[=].resource = Silicondioxide

// 9
* entry[+].fullUrl = "urn:uuid:a4b7b60c-998f-4f93-89c7-860396af0fe3"
* entry[=].resource = carnaubawax

//10
* entry[+].fullUrl = "urn:uuid:fbf58407-83d3-42db-be3d-506b2006d431"
* entry[=].resource = Croscarmellosesodium

// 11
* entry[+].fullUrl = "urn:uuid:1c10b441-6bd3-40b8-b14b-514e7c2f79d0"
* entry[=].resource = Hypromellose

// 12
* entry[+].fullUrl = "urn:uuid:7a3c0b14-2473-4541-9e45-a24d24cceddf"
* entry[=].resource = lactosemonohydrate

// 13
* entry[+].fullUrl = "urn:uuid:ceba5cd1-321f-4bc3-b203-92d97fcf472e"
* entry[=].resource = Macrogol3000

// 14
* entry[+].fullUrl = "urn:uuid:eee155e8-e442-491d-9a82-7af3cefac57f"
* entry[=].resource = Magnesiumstearate

// 15
* entry[+].fullUrl = "urn:uuid:1cdfb0bc-55f0-43ff-b750-8f3a0d9970bd"
* entry[=].resource = Microcrystallinecellulose

// 16
* entry[+].fullUrl = "urn:uuid:a88891dc-7e9e-4d84-b462-95e53de3b6a6"
* entry[=].resource = titaniumdioxide

// 17
// Clinical Use Definition - Indication
//* entry[+].fullUrl = "urn:uuid:4e922ec1-a398-4a78-8381-3729422b7602"
//* entry[=].resource = indication

// 18
// Clinical Use Definition - Contraindication
* entry[+].fullUrl = "urn:uuid:83f4a22f-9e5e-4941-9fdb-339a0f1f2055"
* entry[=].resource = contraindication

// Clinical Use Definition - Indication
* entry[+].fullUrl = "urn:uuid:bac1d528-6430-4310-bde6-b8b3471ce35a"
* entry[=].resource = indication

// Clinical Use Definition - Interaction
* entry[+].fullUrl = "urn:uuid:e60575aa-e7b3-4461-a456-d310514f4041"
* entry[=].resource = interaction //methotrexate

// Clinical Use Definition - Undesirable Effect
* entry[+].fullUrl = "urn:uuid:4312f8ec-43b6-4b25-9fca-d61a1188bfea"
* entry[=].resource = UndesirableEffect

// Clinical Use Definition - Warning
* entry[+].fullUrl = "urn:uuid:ac21a804-cafa-41ff-b644-a14c8003edeb"
* entry[=].resource = warning //hypotension

// Substance
* entry[+].fullUrl = "urn:uuid:da33bd51-a726-4232-aaa0-4168b9bfe249"
* entry[=].resource = substanceacetaminophen


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ClinicalUseDefinition-contraindication.fsh

Instance: contraindication
InstanceOf: ClinicalUseDefinitionContraindicationUvEpi
Title: "Clinical Use - Contraindication"
Description: "Contraindication example - Gastrointestinal disorders"
Usage: #example

* id = "83f4a22f-9e5e-4941-9fdb-339a0f1f2055"

* identifier.system = "http://example.org/sid"
* identifier.value = "contra-example-1"


* type = #contraindication

 // Reference to MedicinalProductDefinition: DrugX 75 mg tablet blister x28
* subject = Reference(DrugX75mgblisterx28)

* contraindication
  * diseaseSymptomProcedure.concept = $meddra#10017947 "Gastrointestinal disorders"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ClinicalUseDefinition-indication.fsh

Instance: indication
InstanceOf: ClinicalUseDefinitionIndicationUvEpi
Title: "Clinical Use - Indication"
Description: "Indication example - psoriasis"
Usage: #example

* id = "bac1d528-6430-4310-bde6-b8b3471ce35a"

* identifier.system = "http://example.org/sid"
* identifier.value = "indication-example-1"


* type = #indication

 // Reference to MedicinalProductDefinition: DrugX 75 mg tablet blister x28
* subject = Reference(DrugX75mgblisterx28)

*  indication
  * diseaseSymptomProcedure.concept = $meddra#10037156 "Psoriasis"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ClinicalUseDefinition-interaction.fsh

Instance: interaction
InstanceOf: ClinicalUseDefinitionInteractionUvEpi
Title: "Clinical Use - Interaction"
Description: "Interaction example - methotrexate"
Usage: #example

* id = "e60575aa-e7b3-4461-a456-d310514f4041"

* identifier.system = $ginas
* identifier.value = "YL5FZ2Y5U1" //methotrexate
* identifier.use = #official

* type = #interaction

 // Reference to MedicinalProductDefinition: DrugX 75 mg tablet blister x28
* subject = Reference(DrugX75mgblisterx28)

* interaction.interactant.itemCodeableConcept = $ginas#YL5FZ2Y5U1 "METHOTREXATE"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ClinicalUseDefinition-undesirableffect.fsh

Instance: UndesirableEffect
InstanceOf: ClinicalUseDefinitionUndesirableEffectUvEpi
Title: "Clinical Use - Undesirable Effect"
Description: "Undesirable Effect example - Psoriasis"
Usage: #example

* id = "4312f8ec-43b6-4b25-9fca-d61a1188bfea"

* identifier.system = $ginas
* identifier.value = "YL5FZ2Y5U1" //methotrexate
* identifier.use = #official

* type = #undesirable-effect

 // Reference to MedicinalProductDefinition: DrugX 75 mg tablet blister x28
* subject = Reference(DrugX75mgblisterx28)

*  undesirableEffect
  * symptomConditionEffect.concept = http://snomed.info/sct#2767007 "Dysergia"
  * frequencyOfOccurrence = http://hl7.org/fhir/undesirable-effect-frequency#Rare "Rare"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ClinicalUseDefinition-warning.fsh

Instance: warning
InstanceOf: ClinicalUseDefinitionWarningUvEpi
Title: "Clinical Use - Warning"
Description: "Warning - hypotension"
Usage: #example

* id = "ac21a804-cafa-41ff-b644-a14c8003edeb"

* identifier.system = "http://example.org/sid"
* identifier.value = "warning-example-1"


* type = #warning

// Reference to MedicinalProductDefinition: DrugX 75 mg tablet blister x28
* subject = Reference(DrugX75mgblisterx28)

* warning
  * description = "Symptomatic hypotension, especially after the first dose, may occur in patients."



---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/composition75-en.fsh

Instance: compositionDrugX75
InstanceOf: CompositionUvEpi
Title: "Package Leaflet with a medicinal product"
Description: "Example of a Package Leaflet with a reference to a medicinal product as its subject"
Usage: #example

* id = "fe63fd6a-afe8-4b61-a203-0cf4a69ffb60"

* identifier.system = "https://spor.ema.europa.eu"
* identifier.value = "0d69fdcb-33cf-407f-8209-a6529856ab4f"

* status = #final

* type = $example-cs#100000155538 "Package Leaflet"

* subject = Reference(DrugX75mgblisterx28) //reference to the medicinal product

* date = "2022-02-16T13:28:17Z"

* author = Reference(acmeinc) // Reference to Organization: Marketing Authorization Holder

* title = "Example of Type 3 ePI - DrugX (acetaminophen) 75 mg tablets"

* language = #en

* section[+].
  * title = "B. Package Leaflet"
  * code = $example-cs#200000029894 "PACKAGE LEAFLET"

        
// to be checked sections not present
* section[=].section[+]
  * title = "Package leaflet: Information for the user"
  // * code = $spor-rms#100000155538
  * code.text = "Package leaflet: Information for the user"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>DrugX 75 mg tablets</p>
            <p>acetaminophen</p>
            <b>Read all of this leaflet carefully before you start taking this medicine because it contains important information for you.</b>
            <ul>
                <li>Keep this leaflet. You may need to read it again.</li>
                <li>If you have any further questions, ask your doctor or pharmacist.</li>
                <li>This medicine has been prescribed for you only. Do not pass it on to others. It may harm them, even if their signs of illness are the same as yours.</li>
                <li>If you get any side effects, talk to your doctor or pharmacist. This includes any possible side effects not listed in this leaflet. See section 4.</li>
            </ul>
        </div>"""
        
* section[=].section[+]
  * title = "What is in this leaflet"
  // * code = $spor-rms#100000155538
  * code.text = "What is in this leaflet"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <ul>
                <li>What DrugX is and what it is used for</li>
                <li>What you need to know before you take DrugX</li>
                <li>How to take DrugX</li>
                <li>Possible side effects</li>
                <li>How to store DrugX</li>
                <li>Contents of the pack and other information</li>
            </ul>
        </div>""" 
        
* section[=].section[+]
  * title = "1. What DrugX is and what it is used for"
  * code = $example-cs#200000029895 "1. What X is and what it is used for"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>"""
        
* section[=].section[+]
  * title = "2. What you need to know before you take DrugX"
  * code = $example-cs#200000029896 "2. What you need to know before you <take> <use> X"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>            
        </div>"""
        
* section[=].section[+]
  * title = "3. How to take DrugX"
  * code = $example-cs#200000029905 "3. How to <take> <use> X"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>"""
        
* section[=].section[+]
  * title = "4. Possible side effects"
  * code = $example-cs#200000029910 "4. Possible side effects"
  * code.text = "4. Possible side effects"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>"""
        
* section[=].section[+]
  * title = "5. How to store DrugX"
  * code = $example-cs#200000029913 "5. How to store X"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>"""
        
* section[=].section[+]
  * title = "6. Contents of the pack and other information"
  * code = $example-cs#200000029914 "6. Contents of the pack and other information"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    
        </div>"""

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/composition75-entype1.fsh

Instance: compositionDrugX75type1
InstanceOf: CompositionUvEpi
Title: "Package Leaflet without a medicinal product"
Description: "Example of a Package Leaflet with no references to a medicinal product (i.e., no subject)"
Usage: #example

* id = "5467a2fd-2463-4ec7-a6bb-b7322000f867"

* identifier.system = "https://spor.ema.europa.eu"
* identifier.value = "224b31c5-8e48-45c5-b616-29e902642578"

* status = #final

* type = $example-cs#100000155538 "Package Leaflet"

* subject.identifier
  * system  =  $example-prod
  * value = "medicinalproduct75"

* date = "2022-02-16T13:28:17Z"

* author = Reference(acmeinc) // Reference to Organization: Marketing Authorization Holder

* title = "Example of Type 1 ePI - DrugX (acetaminophen) 75 mg tablets"

* language = #en

* section[+].
  * title = "B. Package Leaflet"
  * code = $example-cs#200000029894 "PACKAGE LEAFLET"
        
* section[=].section[+]
  * title = "Package leaflet: Information for the user"
  // * code = $spor-rms#100000155538
  * code.text = "Package leaflet: Information for the user"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>DrugX 75 mg tablets</p>
            <p>acetaminophen</p>
            <b>Read all of this leaflet carefully before you start taking this medicine because it contains important information for you.</b>
            <ul>
                <li>Keep this leaflet. You may need to read it again.</li>
                <li>If you have any further questions, ask your doctor or pharmacist.</li>
                <li>This medicine has been prescribed for you only. Do not pass it on to others. It may harm them, even if their signs of illness are the same as yours.</li>
                <li>If you get any side effects, talk to your doctor or pharmacist. This includes any possible side effects not listed in this leaflet. See section 4.</li>
            </ul>
        </div>"""
        
* section[=].section[+]
  * title = "What is in this leaflet"
  // * code = $spor-rms#100000155538
  * code.text = "What is in this leaflet"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <ul>
                <li>What DrugX is and what it is used for</li>
                <li>What you need to know before you take DrugX</li>
                <li>How to take DrugX</li>
                <li>Possible side effects</li>
                <li>How to store DrugX</li>
                <li>Contents of the pack and other information</li>
            </ul>
        </div>""" 
        
* section[=].section[+]
  * title = "1. What DrugX is and what it is used for"
  * code = $example-cs#200000029895 "1. What X is and what it is used for"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>"""
        
* section[=].section[+]
  * title = "2. What you need to know before you take DrugX"
  * code = $example-cs#200000029896 "2. What you need to know before you <take> <use> X"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>            
        </div>"""
        
* section[=].section[+]
  * title = "3. How to take DrugX"
  * code = $example-cs#200000029905 "3. How to <take> <use> X"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>"""
        
* section[=].section[+]
  * title = "4. Possible side effects"
  * code = $example-cs#200000029910 "4. Possible side effects"
  * code.text = "4. Possible side effects"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>"""
        
* section[=].section[+]
  * title = "5. How to store DrugX"
  * code = $example-cs#200000029913 "5. How to store X"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>"""
        
* section[=].section[+]
  * title = "6. Contents of the pack and other information"
  * code = $example-cs#200000029914 "6. Contents of the pack and other information"
  * text.status = #additional
  * text.div = """<div xmlns='http://www.w3.org/1999/xhtml'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    
        </div>"""

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-acetaminophen75.fsh

Instance: acetaminophen75
InstanceOf: IngredientUvEpi
Title: "Ingredient - acetaminophen"
Description: "Active ingredient using acetaminophen"
Usage: #example

* id = "745c01bc-936e-45ca-9880-57e97608f43e"

* identifier.system = $ginas
* identifier.value = "362O9ITL9D"
* identifier.use = #official

* status = #active

* role = $ingredient-role#100000072072 "Active"

* substance.code.concept.coding = $ginas#362O9ITL9D "acetaminophen"
* substance.strength.presentationQuantity.value = 75
* substance.strength.presentationQuantity.unit = "mg"

* substance.strength.basis = http://terminology.hl7.org/CodeSystem/v3-RoleClass#ACTIB
* substance.strength.basis.text = "active ingredient - basis of strength"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-carnaubawax.fsh

Instance: carnaubawax
InstanceOf: IngredientUvEpi
Title: "Ingredient - Carnauba wax"
Description: "Excipient ingredient using Carnauba wax"
Usage: #example

* id = "a4b7b60c-998f-4f93-89c7-860396af0fe3"

* identifier.system = $ginas
* identifier.value = "R12CBM0EIZ"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#R12CBM0EIZ "Carnauba wax"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-croscarmellosesodium.fsh

Instance: Croscarmellosesodium
InstanceOf: IngredientUvEpi
Title: "Ingredient - Croscarmellose sodium"
Description: "Excipient ingredient using Croscarmellose sodium"
Usage: #example

* id = "fbf58407-83d3-42db-be3d-506b2006d431"

* identifier.system = $ginas
* identifier.value = "M28OL1HH48"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#M28OL1HH48 "Croscarmellose sodium"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-hypromellose.fsh

Instance: Hypromellose
InstanceOf: IngredientUvEpi
Title: "Ingredient - Hypromellose"
Description: "Excipient ingredient using Hypromellose"
Usage: #example

* id = "1c10b441-6bd3-40b8-b14b-514e7c2f79d0"

* identifier.system = $ginas
* identifier.value = "3NXW29V3WO"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#3NXW29V3WO "Hypromellose"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-lactosemonohydrate.fsh

Instance: lactosemonohydrate
InstanceOf: IngredientUvEpi
Title: "Ingredient - Lactose Monohydrate"
Description: "Excipient ingredient using Lactose Monohydrate"
Usage: #example

* id = "7a3c0b14-2473-4541-9e45-a24d24cceddf"

* identifier.system = $ginas
* identifier.value = "EWQ57Q8I5X"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#EWQ57Q8I5X "Lactose Monohydrate"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-macrogol.fsh

Instance: Macrogol3000
InstanceOf: IngredientUvEpi
Title: "Ingredient - Macrogol 3000"
Description: "Excipient ingredient using Macrogol 3000"
Usage: #example

* id = "ceba5cd1-321f-4bc3-b203-92d97fcf472e"

* identifier.system = $ginas
* identifier.value = "SA1B764746"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#SA1B764746 "Macrogol 3000"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-magnesiumstearate.fsh

Instance: Magnesiumstearate
InstanceOf: IngredientUvEpi
Title: "Ingredient - Magnesium stearate"
Description: "Excipient ingredient using Magnesium stearate"
Usage: #example

* id = "eee155e8-e442-491d-9a82-7af3cefac57f"

* identifier.system = $ginas
* identifier.value = "70097M6I30"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#70097M6I30 "Magnesium stearate"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-microcrystallinecellulose.fsh

Instance: Microcrystallinecellulose
InstanceOf: IngredientUvEpi
Title: "Ingredient - Microcrystalline cellulose"
Description: "Excipient ingredient using Microcrystalline cellulose"
Usage: #example

* id = "1cdfb0bc-55f0-43ff-b750-8f3a0d9970bd"

* identifier.system = $ginas
* identifier.value = "OP1R32D61U"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#OP1R32D61U "Microcrystalline cellulose"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-silicondioxide.fsh

Instance: Silicondioxide
InstanceOf: IngredientUvEpi
Title: "Ingredient - Silicon dioxide"
Description: "Excipient ingredient using Silicon dioxide"
Usage: #example

* id = "09c13040-8fd5-4818-972d-f01d4ee169b6"

* identifier.system = $ginas
* identifier.value = "ETJ7Z6XBU4"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#ETJ7Z6XBU4 "Silicon dioxide"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/ingredient-titaniumdioxide.fsh

Instance: titaniumdioxide
InstanceOf: IngredientUvEpi
Title: "Ingredient - Titanium Dioxide"
Description: "Excipient ingredient using Titanium Dioxide"
Usage: #example

* id = "a88891dc-7e9e-4d84-b462-95e53de3b6a6"

* identifier.system = $ginas
* identifier.value = "15FIX9V2JP"
* identifier.use = #official

* role = $ingredient-role#100000072082 "Excipient"


* status = #active

* substance.code.concept.coding = $ginas#15FIX9V2JP "Titanium Dioxide"

// Reference to manufactured item
* for = Reference(manitemDrugX75)

// Reference to Organization:  Reference to MAH
* manufacturer.manufacturer = Reference(acmeinc)

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/manufactureditemdefinition.fsh

Instance: manitemDrugX75
InstanceOf: ManufacturedItemDefinitionUvEpi
Title: "Manufactured Item - 75 mg tablet"
Description: "DrugX 75 mg tablet"
Usage: #example

* id = "3214f286-b8ec-4ef5-bc8d-0aec39d97468"

* identifier.system = "https://spor.ema.europa.eu/pmswi/#/"
* identifier.value = "EU/1/96/007/035"
* identifier.use = #official

* status = #active

* manufacturedDoseForm = $manufactured-dose-form#100000073664 "Tablet"
* unitOfPresentation = $unit-of-presentation#200000002152 "Tablet"


 // Reference to Organization: Manufacturer
* manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/medicinalproductdefinition.fsh

Instance: DrugX75mgblisterx28
InstanceOf: MedicinalProductDefinitionUvEpi
Title: "Medicinal Product DrugX 75 tablet in a blister of x28 tablets"
Description: "Medicinal Product for DrugX 75 mg tablet blister x28"
Usage: #example

* id = "800a51a2-d81d-49a4-a4eb-f2417d301837"

* identifier.system = $example-prod
* identifier.value = "medicinalproduct75"

* status = $publication-status#active "Active"
* statusDate = "2018-06-23T08:38:00+02:00"
* type = $medicinal-product-type#MedicinalProduct  "Medicinal Product"
* domain = $medicinal-product-domain#Human "Human use"
* legalStatusOfSupply = $legal-status-of-supply#100000072084 "Medicinal product subject to medical prescription"

* name.productName = "DrugX 75 mg tablet blister x28"
* name
  * productName = "DrugX"
  * usage
    * country = urn:iso:std:iso:3166#FR
    * jurisdiction = urn:iso:std:iso:3166#FR
    * language = urn:ietf:bcp:47#en
  * part
    * part = "DrugX"
    * type = $example-cs#220000000002 "Invented name part"
    * type.text = "Invented name part"
    * part = "acetaminophen"
    * type = $example-cs#220000000003 "Scientific name part"
    * part = "75 mg"
    * type = $example-cs#220000000004 "Strength part"
    * part = "tablet"
    * type = $example-cs#220000000005 "Administrable dose form part"


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/organization-mah.fsh

Instance: acmeinc
InstanceOf: OrganizationUvEpi
Title: "Organization - Acme Inc."
Description: "Marketing Authorization Holder"
Usage: #example

* id = "d71bf884-90eb-47f9-81b7-fa81ecec7e75"

* identifier.system = $example-org
* identifier.value = "ORG1"
* identifier.use = #official

* active = true

* type = $example-cs#220000000034 "Marketing authorisation holder"
* name = "acme inc"

* contact
  * address
    * text = "54, Yonge Street, Paris, France"
    * use = #work
    * type = #physical
    * line = "54, Yonge Street"
    * city = "Paris"
    * country = "FR"


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/packagedproductdefinition.fsh

Instance: packagebottlex28
InstanceOf: PackagedProductDefinitionUvEpi
Title: "Packaging - Blister"
Description: "Blister x28 tablets"
Usage: #example

* id = "eb8392a6-2cec-4ff3-9d9e-7c5f4ae3786d"

* identifier.system = $example-prod
* identifier.value = "EU/1/97/049/001"
* identifier.use = #official

* name = "DrugX 75 mg tablet blister x28 tablets"

* type = $medicinal-product-type#MedicinalProduct	"Medicinal Product"

* status = $publication-status#active "Active"
* statusDate = "2018-06-23T08:38:00+02:00"

* containedItemQuantity.value = 75
* containedItemQuantity.unit = "mg"

* packaging
  * identifier.system = $example-prod
  * identifier.value = "123456"
  * type = $medicinal-product-package-type#100000073496 "Blister"

  

  * quantity = 28
  * material = $package-material#200000003222 "PolyVinyl Chloride"

//reference to MedicinalProductDefinition: EU/1/97/049/001 DrugX 75 mg tablet
* packageFor = Reference(DrugX75mgblisterx28)

 // Reference to Organization: MAH
* manufacturer = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/regulatedauthorization75.fsh

Instance: authorizationDrugX75
InstanceOf: RegulatedAuthorizationUvEpi
Title: "Regulated Authorization for the 75 mg tablet"
Description: "Regulated Authorization for the 75 mg tablet"
Usage: #example

* id = "297e405a-b6f9-4273-bc01-ae031efe47f8"

* identifier.system = $example-prod
* identifier.value = "authorization75mg"
* identifier.use = #official

 // Reference to MedicinalProductDefinition: DrugX 75 mg tablet
* subject = Reference(DrugX75mgblisterx28)

* type = http://hl7.org/fhir/regulated-authorization-type#MarketingAuth "Marketing Authorization"


* region = urn:iso:std:iso:3166#FR
* region.text = "European Union"

* status = $publication-status#active "Active"

* statusDate = "2015-02-07T13:28:17Z"

 // Reference to Organization: Marketing Authorization Holder
* holder = Reference(acmeinc)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/examples/drugx/substanceacetaminophen.fsh

Instance: substanceacetaminophen
InstanceOf: SubstanceDefinitionUvEpi
Title: "Substance - acetaminophen"
Description: "Substance details for the active ingredient - acetaminophen"
Usage: #example

* id = "da33bd51-a726-4232-aaa0-4168b9bfe249"

* identifier.system = "https://gsrs.ncats.nih.gov/ginas/app/beta"
* identifier.value = "362O9ITL9D"
* identifier.use = #official

* version = "1"

* status = $publication-status#active


/* * status = $ginas#1
* status.text = "Validated (UNII)" */

* description = "White to off-white, biconvex, and oval-shaped with the number 1234 engraved on the other side."

 // Reference to Organization: MAH
* manufacturer = Reference(acmeinc)

* molecularWeight.type.text = "exact"
* molecularWeight.amount.value = 151.6

* structure.molecularFormula = "C8H9NO2"

* name.name = "4'-HYDROXYACETANILIDE ACEPHEN ACETAMIDE, N-(4-HYDROXYPHENYL)-"
* name
  * name = "acetaminophen"
  * type = http://hl7.org/fhir/substance-name-type#Scientific
  * type.text = "Scientific"


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/instances/capabilitystatements.fsh

Instance: simple-vulcan-epi-server
InstanceOf: CapabilityStatement
Title: "Simple Vulcan ePI Server Capability Statement"
Usage: #definition
* name = "RestServer"
* status = #active
* date = "2024-04-07T09:39:51.216+00:00"
* publisher = "Gravitate Health"
* kind = #instance
* fhirVersion = #5.0.0
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* format[+] = #html/json
* format[+] = #html/xml
* rest.mode = #server
* rest.resource[0].type = #Bundle
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/batch-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/batch-response-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/document-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/history-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/search-set-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-response-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/emedicinal-product-info/StructureDefinition/Bundle-uv-epi"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Bundle:composition"
* rest.resource[=].searchInclude[+] = "Bundle:example-constraint"
* rest.resource[=].searchInclude[+] = "Bundle:message"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Persistent identifier for the bundle"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "composition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-composition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"document\" - this is a composition, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "example-constraint"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-example-constraint"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search Composition Bundle"
* rest.resource[=].searchParam[+].name = "timestamp"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-timestamp"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When the bundle was assembled"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #List
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/List"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchInclude[+] = "List:item"
* rest.resource[=].searchInclude[+] = "List:source"
* rest.resource[=].searchInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): Account number\r\n* [AdverseEvent](adverseevent.html): Business identifier for the event\r\n* [AllergyIntolerance](allergyintolerance.html): External ids for this item\r\n* [Appointment](appointment.html): An Identifier of the Appointment\r\n* [AppointmentResponse](appointmentresponse.html): An Identifier in this appointment response\r\n* [Basic](basic.html): Business identifier\r\n* [BodyStructure](bodystructure.html): Bodystructure identifier\r\n* [CarePlan](careplan.html): External Ids for this plan\r\n* [CareTeam](careteam.html): External Ids for this team\r\n* [ChargeItem](chargeitem.html): Business Identifier for item\r\n* [Claim](claim.html): The primary identifier of the financial resource\r\n* [ClaimResponse](claimresponse.html): The identity of the ClaimResponse\r\n* [ClinicalImpression](clinicalimpression.html): Business identifier\r\n* [Communication](communication.html): Unique identifier\r\n* [CommunicationRequest](communicationrequest.html): Unique identifier\r\n* [Composition](composition.html): Version-independent identifier for the Composition\r\n* [Condition](condition.html): A unique identifier of the condition record\r\n* [Consent](consent.html): Identifier for this record (external references)\r\n* [Contract](contract.html): The identity of the contract\r\n* [Coverage](coverage.html): The primary identifier of the insured and the coverage\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The business identifier of the Eligibility\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The business identifier\r\n* [DetectedIssue](detectedissue.html): Unique id for the detected issue\r\n* [DeviceRequest](devicerequest.html): Business identifier for request/order\r\n* [DeviceUsage](deviceusage.html): Search by identifier\r\n* [DiagnosticReport](diagnosticreport.html): An identifier for the report\r\n* [DocumentReference](documentreference.html): Identifier of the attachment binary\r\n* [Encounter](encounter.html): Identifier(s) by which this encounter is known\r\n* [EnrollmentRequest](enrollmentrequest.html): The business identifier of the Enrollment\r\n* [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The business identifier of the Explanation of Benefit\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier\r\n* [Flag](flag.html): Business identifier\r\n* [Goal](goal.html): External Ids for this goal\r\n* [GuidanceResponse](guidanceresponse.html): The identifier of the guidance response\r\n* [ImagingSelection](imagingselection.html): Identifiers for the imaging selection\r\n* [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID\r\n* [Immunization](immunization.html): Business identifier\r\n* [ImmunizationEvaluation](immunizationevaluation.html): ID of the evaluation\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Business identifier\r\n* [Invoice](invoice.html): Business Identifier for item\r\n* [List](list.html): Business identifier\r\n* [MeasureReport](measurereport.html): External identifier of the measure report to be returned\r\n* [Medication](medication.html): Returns medications with this external identifier\r\n* [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier\r\n* [MedicationStatement](medicationstatement.html): Return statements with this external identifier\r\n* [MolecularSequence](molecularsequence.html): The unique identity for a particular sequence\r\n* [NutritionIntake](nutritionintake.html): Return statements with this external identifier\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier\r\n* [Observation](observation.html): The unique id for a particular observation\r\n* [Person](person.html): A person Identifier\r\n* [Procedure](procedure.html): A unique identifier for a procedure\r\n* [QuestionnaireResponse](questionnaireresponse.html): The unique identifier for the questionnaire response\r\n* [RelatedPerson](relatedperson.html): An Identifier of the RelatedPerson\r\n* [RequestOrchestration](requestorchestration.html): External identifiers for the request orchestration\r\n* [ResearchSubject](researchsubject.html): Business Identifier for research subject in a study\r\n* [RiskAssessment](riskassessment.html): Unique identifier for the assessment\r\n* [ServiceRequest](servicerequest.html): Identifiers assigned to this order\r\n* [Specimen](specimen.html): The unique identifier associated with the specimen\r\n* [SupplyDelivery](supplydelivery.html): External identifier\r\n* [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest\r\n* [Task](task.html): Search for a task instance by its business identifier\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier\r\n"
* rest.resource[=].searchParam[+].name = "item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Actual entry"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): Event or incident that occurred or was averted\r\n* [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance\r\n* [AuditEvent](auditevent.html): More specific code for the event\r\n* [Basic](basic.html): Kind of Resource\r\n* [ChargeItem](chargeitem.html): A code that identifies the charge, like a billing code\r\n* [Condition](condition.html): Code for the condition\r\n* [DetectedIssue](detectedissue.html): Issue Type, e.g. drug-drug, duplicate therapy, etc.\r\n* [DeviceRequest](devicerequest.html): Code for what is being requested/ordered\r\n* [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a condition code\r\n* [ImagingSelection](imagingselection.html): The imaging selection status\r\n* [List](list.html): What the purpose of this list is\r\n* [Medication](medication.html): Returns medications for a specific code\r\n* [MedicationAdministration](medicationadministration.html): Return administrations of this medication code\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code\r\n* [MedicationStatement](medicationstatement.html): Return statements of this medication code\r\n* [NutritionIntake](nutritionintake.html): Returns statements of this code of NutritionIntake\r\n* [Observation](observation.html): The code of the observation type\r\n* [Procedure](procedure.html): A code to identify a  procedure\r\n* [RequestOrchestration](requestorchestration.html): The code of the request orchestration\r\n* [Task](task.html): Search by task code\r\n"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "source"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-source"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what defined the list contents (aka Author)"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Descriptive name for the list"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "current | retired | entered-in-error"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.interaction[0].code = #transaction
* rest.interaction[+].code = #history-system

Instance: advanced-vulcan-epi-server
InstanceOf: CapabilityStatement
Title: "Advanced Vulcan ePI Server Capability Statement"
Usage: #definition
* name = "RestServer"
* status = #active
* date = "2024-03-07T10:51:50Z"
* publisher = "Gravitate Health"
* kind = #instance
* fhirVersion = #5.0.0
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* format[+] = #html/json
* format[+] = #html/xml
* patchFormat[0] = #application/fhir+json
* patchFormat[+] = #application/fhir+xml
* patchFormat[+] = #application/json-patch+json
* patchFormat[+] = #application/xml-patch+xml
* rest.mode = #server
* rest.resource[0].type = #AdministrableProductDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "AdministrableProductDefinition:device"
* rest.resource[=].searchInclude[+] = "AdministrableProductDefinition:form-of"
* rest.resource[=].searchInclude[+] = "AdministrableProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:for"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An identifier for the administrable product"
* rest.resource[=].searchParam[+].name = "ingredient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-ingredient"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ingredients of this administrable medicinal product"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "manufactured-item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-manufactured-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The manufactured item(s) that this administrable product is produced from. Either a single item, or several that are mixed before administration (e.g. a power item and a solution item). Note that these are not raw ingredients"
* rest.resource[=].searchParam[+].name = "route"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-route"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Coded expression for the route"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "dose-form"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-dose-form"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The administrable dose form, i.e. the dose form of the final product after necessary reconstitution or processing"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "device"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-device"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A device that is integral to the medicinal product, in effect being considered as an \"ingredient\" of the medicinal product. This is not intended for devices that are just co-packaged"
* rest.resource[=].searchParam[+].name = "form-of"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-form-of"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The medicinal product that this is an administrable form of. This is not a reference to the item(s) that make up this administrable form - it is the whole product"
* rest.resource[=].searchParam[+].name = "target-species"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-target-species"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Coded expression for the species"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of this administrable product. Enables tracking the life-cycle of the content."
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #Binary
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Binary"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Binary-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #Bundle
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/batch-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/batch-response-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/document-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/history-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/search-set-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/subscription-notification-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-response-bundle"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Bundle:composition"
* rest.resource[=].searchInclude[+] = "Bundle:example-constraint"
* rest.resource[=].searchInclude[+] = "Bundle:message"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Persistent identifier for the bundle"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "message"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-message"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"message\" - this is a message header, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "composition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-composition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"document\" - this is a composition, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "example-constraint"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-example-constraint"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search Composition Bundle"
* rest.resource[=].searchParam[+].name = "timestamp"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-timestamp"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When the bundle was assembled"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #ClinicalUseDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:contraindication-reference"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:effect-reference"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:indication-reference"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:product"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:subject"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "contraindication-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-contraindication-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as contraindicating against this item, as a reference"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Business identifier for this issue"
* rest.resource[=].searchParam[+].name = "indication-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-indication-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as an indicaton for this item, as a reference"
* rest.resource[=].searchParam[+].name = "product"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-product"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The medicinal product for which this is a clinical usage issue"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The resource for which this is a clinical usage issue"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "indication | contraindication | interaction | undesirable-effect | warning"
* rest.resource[=].searchParam[+].name = "effect-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-effect-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The situation in which the undesirable effect may manifest, as a reference"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "effect"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-effect"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The situation in which the undesirable effect may manifest, as a code"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "interaction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-interaction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "indication"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-indication"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as an indicaton for this item, as a code"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "contraindication"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-contraindication"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as contraindicating against this item, as a code"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Whether this is a current issue or one that has been retired etc."
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #CodeSystem
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/publishablecodesystem"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchInclude[+] = "CodeSystem:supplements"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:supplements"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A code defined in the code system"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "derived-from"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-derived-from"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): A resource that the CodeSystem is derived from\r\n* [ConceptMap](conceptmap.html): A resource that the ConceptMap is derived from\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): A resource that the NamingSystem is derived from\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): A resource that the ValueSet is derived from\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "language"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A language in which a designation is provided"
* rest.resource[=].searchParam[+].name = "predecessor"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-predecessor"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): The predecessor of the CodeSystem\r\n* [ConceptMap](conceptmap.html): The predecessor of the ConceptMap\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): The predecessor of the NamingSystem\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): The predecessor of the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "effective"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-effective"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The time during which the activity definition is intended to be in use\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The time during which the charge item definition is intended to be in use\r\n* [Citation](citation.html): The time during which the citation is intended to be in use\r\n* [CodeSystem](codesystem.html): The time during which the CodeSystem is intended to be in use\r\n* [ConceptMap](conceptmap.html): The time during which the ConceptMap is intended to be in use\r\n* [EventDefinition](eventdefinition.html): The time during which the event definition is intended to be in use\r\n* [Library](library.html): The time during which the library is intended to be in use\r\n* [Measure](measure.html): The time during which the measure is intended to be in use\r\n* [NamingSystem](namingsystem.html): The time during which the NamingSystem is intended to be in use\r\n* [PlanDefinition](plandefinition.html): The time during which the plan definition is intended to be in use\r\n* [Questionnaire](questionnaire.html): The time during which the questionnaire is intended to be in use\r\n* [ValueSet](valueset.html): The time during which the ValueSet is intended to be in use\r\n"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "content-mode"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-content-mode"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "not-present | example | fragment | complete | supplement"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "supplements"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-supplements"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Find code system supplements for the referenced code system"
* rest.resource[=].searchParam[+].name = "system"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-system"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "The system for any codes defined by this code system (same as 'url')"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "topic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-topic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Topics associated with the module\r\n* [CodeSystem](codesystem.html): Topics associated with the CodeSystem\r\n* [ConceptMap](conceptmap.html): Topics associated with the ConceptMap\r\n* [EventDefinition](eventdefinition.html): Topics associated with the module\r\n* [EvidenceVariable](evidencevariable.html): Topics associated with the EvidenceVariable\r\n* [Library](library.html): Topics associated with the module\r\n* [Measure](measure.html): Topics associated with the measure\r\n* [NamingSystem](namingsystem.html): Topics associated with the NamingSystem\r\n* [PlanDefinition](plandefinition.html): Topics associated with the module\r\n* [ValueSet](valueset.html): Topics associated with the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "upload-external-code-system"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/CodeSystem-t-upload-external-code-system"
* rest.resource[=].operation[+].name = "apply-codesystem-delta-remove"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/CodeSystem-t-apply-codesystem-delta-remove"
* rest.resource[=].operation[+].name = "apply-codesystem-delta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/CodeSystem-t-apply-codesystem-delta-add"
* rest.resource[+].type = #Composition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Composition"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/catalog"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/clinicaldocument"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/example-composition"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/example-section-library"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Composition:attester"
* rest.resource[=].searchInclude[+] = "Composition:author"
* rest.resource[=].searchInclude[+] = "Composition:encounter"
* rest.resource[=].searchInclude[+] = "Composition:entry"
* rest.resource[=].searchInclude[+] = "Composition:event-reference"
* rest.resource[=].searchInclude[+] = "Composition:patient"
* rest.resource[=].searchInclude[+] = "Composition:related"
* rest.resource[=].searchInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[0] = "Bundle:composition"
* rest.resource[=].searchRevInclude[+] = "Bundle:example-constraint"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): When the event occurred\r\n* [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded\r\n* [Appointment](appointment.html): Appointment date/time.\r\n* [AuditEvent](auditevent.html): Time when the event was recorded\r\n* [CarePlan](careplan.html): Time period plan covers\r\n* [CareTeam](careteam.html): A date within the coverage time period.\r\n* [ClinicalImpression](clinicalimpression.html): When the assessment was documented\r\n* [Composition](composition.html): Composition editing time\r\n* [Consent](consent.html): When consent was agreed to\r\n* [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report\r\n* [DocumentReference](documentreference.html): When this document reference was created\r\n* [Encounter](encounter.html): A date within the actualPeriod the Encounter lasted\r\n* [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period\r\n* [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated\r\n* [Flag](flag.html): Time period when flag is active\r\n* [Immunization](immunization.html): Vaccination  (non)-Administration Date\r\n* [ImmunizationEvaluation](immunizationevaluation.html): Date the evaluation was generated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Date recommendation(s) created\r\n* [Invoice](invoice.html): Invoice date / posting date\r\n* [List](list.html): When the list was prepared\r\n* [MeasureReport](measurereport.html): The date of the measure report\r\n* [NutritionIntake](nutritionintake.html): Date when patient was taking (or not taking) the medication\r\n* [Observation](observation.html): Clinically relevant time/time-period for observation\r\n* [Procedure](procedure.html): When the procedure occurred or is occurring\r\n* [ResearchSubject](researchsubject.html): Start and end of participation\r\n* [RiskAssessment](riskassessment.html): When was assessment made?\r\n* [SupplyRequest](supplyrequest.html): When the request was made\r\n"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what the composition is about"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "section"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-section"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Classification of section (recommended)"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Human Readable name/title"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): E.g. patient, expense, depreciation\r\n* [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)\r\n* [Composition](composition.html): Kind of composition (LOINC if possible)\r\n* [Coverage](coverage.html): The kind of coverage (health plan, auto, Workers Compensation)\r\n* [DocumentReference](documentreference.html): Kind of document (LOINC if possible)\r\n* [Encounter](encounter.html): Specific type of encounter\r\n* [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management\r\n* [Invoice](invoice.html): Type of Invoice\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses of a specific type\r\n* [MolecularSequence](molecularsequence.html): Amino Acid Sequence/ DNA Sequence / RNA Sequence\r\n* [Specimen](specimen.html): The specimen type\r\n"
* rest.resource[=].searchParam[+].name = "section-text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-section-text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the section narrative of the resource"
* rest.resource[=].searchParam[+].name = "related"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-related"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Target of the relationship"
* rest.resource[=].searchParam[+].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): The entity that caused the expenses\r\n* [AdverseEvent](adverseevent.html): Subject impacted by event\r\n* [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for\r\n* [Appointment](appointment.html): One of the individuals of the appointment is this patient\r\n* [AppointmentResponse](appointmentresponse.html): This Response is for this Patient\r\n* [AuditEvent](auditevent.html): Where the activity involved patient data\r\n* [Basic](basic.html): Identifies the focus of this resource\r\n* [BodyStructure](bodystructure.html): Who this is about\r\n* [CarePlan](careplan.html): Who the care plan is for\r\n* [CareTeam](careteam.html): Who care team is for\r\n* [ChargeItem](chargeitem.html): Individual service was done for/to\r\n* [Claim](claim.html): Patient receiving the products or services\r\n* [ClaimResponse](claimresponse.html): The subject of care\r\n* [ClinicalImpression](clinicalimpression.html): Patient assessed\r\n* [Communication](communication.html): Focus of message\r\n* [CommunicationRequest](communicationrequest.html): Focus of message\r\n* [Composition](composition.html): Who and/or what the composition is about\r\n* [Condition](condition.html): Who has the condition?\r\n* [Consent](consent.html): Who the consent applies to\r\n* [Contract](contract.html): The identity of the subject of the contract (if a patient)\r\n* [Coverage](coverage.html): Retrieve coverages for a patient\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The reference to the patient\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The reference to the patient\r\n* [DetectedIssue](detectedissue.html): Associated patient\r\n* [DeviceRequest](devicerequest.html): Individual the service is ordered for\r\n* [DeviceUsage](deviceusage.html): Search by patient who used / uses the device\r\n* [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient\r\n* [DocumentReference](documentreference.html): Who/what is the subject of the document\r\n* [Encounter](encounter.html): The patient present at the encounter\r\n* [EnrollmentRequest](enrollmentrequest.html): The party to be enrolled\r\n* [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The reference to the patient\r\n* [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for\r\n* [Flag](flag.html): The identity of a subject to list flags for\r\n* [Goal](goal.html): Who this goal is intended for\r\n* [GuidanceResponse](guidanceresponse.html): The identity of a patient to search for guidance response results\r\n* [ImagingSelection](imagingselection.html): Who the study is about\r\n* [ImagingStudy](imagingstudy.html): Who the study is about\r\n* [Immunization](immunization.html): The patient for the vaccination record\r\n* [ImmunizationEvaluation](immunizationevaluation.html): The patient being evaluated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Who this profile is for\r\n* [Invoice](invoice.html): Recipient(s) of goods and services\r\n* [List](list.html): If all resources have the same subject\r\n* [MeasureReport](measurereport.html): The identity of a patient to search for individual measure report results for\r\n* [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for\r\n* [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for\r\n* [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.\r\n* [MolecularSequence](molecularsequence.html): The subject that the sequence is about\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific patient.\r\n* [NutritionOrder](nutritionorder.html): The identity of the individual or set of individuals who requires the diet, formula or nutritional supplement\r\n* [Observation](observation.html): The subject that the observation is about (if patient)\r\n* [Person](person.html): The Person links to this Patient\r\n* [Procedure](procedure.html): Search by subject - a patient\r\n* [Provenance](provenance.html): Where the activity involved patient data\r\n* [QuestionnaireResponse](questionnaireresponse.html): The patient that is the subject of the questionnaire response\r\n* [RelatedPerson](relatedperson.html): The patient this related person is related to\r\n* [RequestOrchestration](requestorchestration.html): The identity of a patient to search for request orchestrations\r\n* [ResearchSubject](researchsubject.html): Who or what is part of study\r\n* [RiskAssessment](riskassessment.html): Who/what does assessment apply to?\r\n* [ServiceRequest](servicerequest.html): Search by subject - a patient\r\n* [Specimen](specimen.html): The patient the specimen comes from\r\n* [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied\r\n* [SupplyRequest](supplyrequest.html): The patient or subject for whom the supply is destined\r\n* [Task](task.html): Search by patient\r\n* [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for\r\n"
* rest.resource[=].searchParam[+].name = "section-code-text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-section-code-text"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Search on the section narrative of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): Account number\r\n* [AdverseEvent](adverseevent.html): Business identifier for the event\r\n* [AllergyIntolerance](allergyintolerance.html): External ids for this item\r\n* [Appointment](appointment.html): An Identifier of the Appointment\r\n* [AppointmentResponse](appointmentresponse.html): An Identifier in this appointment response\r\n* [Basic](basic.html): Business identifier\r\n* [BodyStructure](bodystructure.html): Bodystructure identifier\r\n* [CarePlan](careplan.html): External Ids for this plan\r\n* [CareTeam](careteam.html): External Ids for this team\r\n* [ChargeItem](chargeitem.html): Business Identifier for item\r\n* [Claim](claim.html): The primary identifier of the financial resource\r\n* [ClaimResponse](claimresponse.html): The identity of the ClaimResponse\r\n* [ClinicalImpression](clinicalimpression.html): Business identifier\r\n* [Communication](communication.html): Unique identifier\r\n* [CommunicationRequest](communicationrequest.html): Unique identifier\r\n* [Composition](composition.html): Version-independent identifier for the Composition\r\n* [Condition](condition.html): A unique identifier of the condition record\r\n* [Consent](consent.html): Identifier for this record (external references)\r\n* [Contract](contract.html): The identity of the contract\r\n* [Coverage](coverage.html): The primary identifier of the insured and the coverage\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The business identifier of the Eligibility\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The business identifier\r\n* [DetectedIssue](detectedissue.html): Unique id for the detected issue\r\n* [DeviceRequest](devicerequest.html): Business identifier for request/order\r\n* [DeviceUsage](deviceusage.html): Search by identifier\r\n* [DiagnosticReport](diagnosticreport.html): An identifier for the report\r\n* [DocumentReference](documentreference.html): Identifier of the attachment binary\r\n* [Encounter](encounter.html): Identifier(s) by which this encounter is known\r\n* [EnrollmentRequest](enrollmentrequest.html): The business identifier of the Enrollment\r\n* [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The business identifier of the Explanation of Benefit\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier\r\n* [Flag](flag.html): Business identifier\r\n* [Goal](goal.html): External Ids for this goal\r\n* [GuidanceResponse](guidanceresponse.html): The identifier of the guidance response\r\n* [ImagingSelection](imagingselection.html): Identifiers for the imaging selection\r\n* [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID\r\n* [Immunization](immunization.html): Business identifier\r\n* [ImmunizationEvaluation](immunizationevaluation.html): ID of the evaluation\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Business identifier\r\n* [Invoice](invoice.html): Business Identifier for item\r\n* [List](list.html): Business identifier\r\n* [MeasureReport](measurereport.html): External identifier of the measure report to be returned\r\n* [Medication](medication.html): Returns medications with this external identifier\r\n* [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier\r\n* [MedicationStatement](medicationstatement.html): Return statements with this external identifier\r\n* [MolecularSequence](molecularsequence.html): The unique identity for a particular sequence\r\n* [NutritionIntake](nutritionintake.html): Return statements with this external identifier\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier\r\n* [Observation](observation.html): The unique id for a particular observation\r\n* [Person](person.html): A person Identifier\r\n* [Procedure](procedure.html): A unique identifier for a procedure\r\n* [QuestionnaireResponse](questionnaireresponse.html): The unique identifier for the questionnaire response\r\n* [RelatedPerson](relatedperson.html): An Identifier of the RelatedPerson\r\n* [RequestOrchestration](requestorchestration.html): External identifiers for the request orchestration\r\n* [ResearchSubject](researchsubject.html): Business Identifier for research subject in a study\r\n* [RiskAssessment](riskassessment.html): Unique identifier for the assessment\r\n* [ServiceRequest](servicerequest.html): Identifiers assigned to this order\r\n* [Specimen](specimen.html): The unique identifier associated with the specimen\r\n* [SupplyDelivery](supplydelivery.html): External identifier\r\n* [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest\r\n* [Task](task.html): Search for a task instance by its business identifier\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier\r\n"
* rest.resource[=].searchParam[+].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "The period covered by the documentation"
* rest.resource[=].searchParam[+].name = "event-code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-event-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Main clinical acts documented as codes"
* rest.resource[=].searchParam[+].name = "author"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-author"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what authored the composition"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "encounter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-encounter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AuditEvent](auditevent.html): Encounter related to the activity recorded in the AuditEvent\r\n* [CarePlan](careplan.html): The Encounter during which this CarePlan was created\r\n* [ChargeItem](chargeitem.html): Encounter associated with event\r\n* [Claim](claim.html): Encounters associated with a billed line item\r\n* [ClinicalImpression](clinicalimpression.html): The Encounter during which this ClinicalImpression was created\r\n* [Communication](communication.html): The Encounter during which this Communication was created\r\n* [CommunicationRequest](communicationrequest.html): The Encounter during which this CommunicationRequest was created\r\n* [Composition](composition.html): Context of the Composition\r\n* [Condition](condition.html): The Encounter during which this Condition was created\r\n* [DeviceRequest](devicerequest.html): Encounter during which request was created\r\n* [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made\r\n* [EncounterHistory](encounterhistory.html): The Encounter associated with this set of history values\r\n* [ExplanationOfBenefit](explanationofbenefit.html): Encounters associated with a billed line item\r\n* [Flag](flag.html): Alert relevant during encounter\r\n* [ImagingStudy](imagingstudy.html): The context of the study\r\n* [List](list.html): Context in which list created\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with a specific encounter\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific encounter\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific encounter\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier\r\n* [Observation](observation.html): Encounter related to the observation\r\n* [Procedure](procedure.html): The Encounter during which this Procedure was created\r\n* [Provenance](provenance.html): Encounter related to the Provenance\r\n* [QuestionnaireResponse](questionnaireresponse.html): Encounter associated with the questionnaire response\r\n* [RequestOrchestration](requestorchestration.html): The encounter the request orchestration applies to\r\n* [RiskAssessment](riskassessment.html): Where was assessment performed?\r\n* [ServiceRequest](servicerequest.html): An encounter in which this request is made\r\n* [Task](task.html): Search by encounter\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier\r\n"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The business version of the activity definition"
* rest.resource[=].searchParam[+].name = "attester"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-attester"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who attested the composition"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "The uri that identifies the activity definition"
* rest.resource[=].searchParam[+].name = "event-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-event-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Main clinical acts documented as references"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "entry"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-entry"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A reference to data that supports this section"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Categorization of Composition"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "preliminary | final | amended | entered-in-error"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[=].operation[+].name = "document"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Composition-i-document"
* rest.resource[+].type = #ImplementationGuide
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ImplementationGuide"
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "ImplementationGuide:depends-on"
* rest.resource[=].searchInclude[+] = "ImplementationGuide:global"
* rest.resource[=].searchInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:depends-on"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "resource"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Location of the resource"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "experimental"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "For testing purposes, not real usage"
* rest.resource[=].searchParam[+].name = "global"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-global"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Profile that all resources must conform to"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "depends-on"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-depends-on"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Identity of the IG that this depends on"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "uninstall"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ImplementationGuide-t-uninstall"
* rest.resource[=].operation[+].name = "install"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ImplementationGuide-t-install"
* rest.resource[+].type = #Ingredient
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Ingredient"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Ingredient:for"
* rest.resource[=].searchInclude[+] = "Ingredient:manufacturer"
* rest.resource[=].searchInclude[+] = "Ingredient:substance"
* rest.resource[=].searchInclude[+] = "Ingredient:substance-definition"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An identifier or code by which the ingredient can be referenced"
* rest.resource[=].searchParam[+].name = "role"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-role"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A classification of the ingredient identifying its purpose within the product, e.g. active, inactive"
* rest.resource[=].searchParam[+].name = "substance"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-substance"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Reference to a resource (by instance)"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "for"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-for"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The product which this ingredient is a constituent part of"
* rest.resource[=].searchParam[+].name = "substance-code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-substance-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Reference to a concept (by class)"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "strength-concentration-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-strength-concentration-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Ingredient concentration strength as quantity"
* rest.resource[=].searchParam[+].name = "manufacturer"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-manufacturer"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The organization that manufactures this ingredient"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "substance-definition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-substance-definition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Reference to a resource (by instance)"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "function"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-function"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: Antioxidant, Alkalizing Agent"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "strength-presentation-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-strength-presentation-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Ingredient presentation strength as quantity"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of this ingredient. Enables tracking the life-cycle of the content"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #List
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/List"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "List:encounter"
* rest.resource[=].searchInclude[+] = "List:item"
* rest.resource[=].searchInclude[+] = "List:patient"
* rest.resource[=].searchInclude[+] = "List:source"
* rest.resource[=].searchInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): When the event occurred\r\n* [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded\r\n* [Appointment](appointment.html): Appointment date/time.\r\n* [AuditEvent](auditevent.html): Time when the event was recorded\r\n* [CarePlan](careplan.html): Time period plan covers\r\n* [CareTeam](careteam.html): A date within the coverage time period.\r\n* [ClinicalImpression](clinicalimpression.html): When the assessment was documented\r\n* [Composition](composition.html): Composition editing time\r\n* [Consent](consent.html): When consent was agreed to\r\n* [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report\r\n* [DocumentReference](documentreference.html): When this document reference was created\r\n* [Encounter](encounter.html): A date within the actualPeriod the Encounter lasted\r\n* [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period\r\n* [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated\r\n* [Flag](flag.html): Time period when flag is active\r\n* [Immunization](immunization.html): Vaccination  (non)-Administration Date\r\n* [ImmunizationEvaluation](immunizationevaluation.html): Date the evaluation was generated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Date recommendation(s) created\r\n* [Invoice](invoice.html): Invoice date / posting date\r\n* [List](list.html): When the list was prepared\r\n* [MeasureReport](measurereport.html): The date of the measure report\r\n* [NutritionIntake](nutritionintake.html): Date when patient was taking (or not taking) the medication\r\n* [Observation](observation.html): Clinically relevant time/time-period for observation\r\n* [Procedure](procedure.html): When the procedure occurred or is occurring\r\n* [ResearchSubject](researchsubject.html): Start and end of participation\r\n* [RiskAssessment](riskassessment.html): When was assessment made?\r\n* [SupplyRequest](supplyrequest.html): When the request was made\r\n"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): Account number\r\n* [AdverseEvent](adverseevent.html): Business identifier for the event\r\n* [AllergyIntolerance](allergyintolerance.html): External ids for this item\r\n* [Appointment](appointment.html): An Identifier of the Appointment\r\n* [AppointmentResponse](appointmentresponse.html): An Identifier in this appointment response\r\n* [Basic](basic.html): Business identifier\r\n* [BodyStructure](bodystructure.html): Bodystructure identifier\r\n* [CarePlan](careplan.html): External Ids for this plan\r\n* [CareTeam](careteam.html): External Ids for this team\r\n* [ChargeItem](chargeitem.html): Business Identifier for item\r\n* [Claim](claim.html): The primary identifier of the financial resource\r\n* [ClaimResponse](claimresponse.html): The identity of the ClaimResponse\r\n* [ClinicalImpression](clinicalimpression.html): Business identifier\r\n* [Communication](communication.html): Unique identifier\r\n* [CommunicationRequest](communicationrequest.html): Unique identifier\r\n* [Composition](composition.html): Version-independent identifier for the Composition\r\n* [Condition](condition.html): A unique identifier of the condition record\r\n* [Consent](consent.html): Identifier for this record (external references)\r\n* [Contract](contract.html): The identity of the contract\r\n* [Coverage](coverage.html): The primary identifier of the insured and the coverage\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The business identifier of the Eligibility\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The business identifier\r\n* [DetectedIssue](detectedissue.html): Unique id for the detected issue\r\n* [DeviceRequest](devicerequest.html): Business identifier for request/order\r\n* [DeviceUsage](deviceusage.html): Search by identifier\r\n* [DiagnosticReport](diagnosticreport.html): An identifier for the report\r\n* [DocumentReference](documentreference.html): Identifier of the attachment binary\r\n* [Encounter](encounter.html): Identifier(s) by which this encounter is known\r\n* [EnrollmentRequest](enrollmentrequest.html): The business identifier of the Enrollment\r\n* [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The business identifier of the Explanation of Benefit\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier\r\n* [Flag](flag.html): Business identifier\r\n* [Goal](goal.html): External Ids for this goal\r\n* [GuidanceResponse](guidanceresponse.html): The identifier of the guidance response\r\n* [ImagingSelection](imagingselection.html): Identifiers for the imaging selection\r\n* [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID\r\n* [Immunization](immunization.html): Business identifier\r\n* [ImmunizationEvaluation](immunizationevaluation.html): ID of the evaluation\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Business identifier\r\n* [Invoice](invoice.html): Business Identifier for item\r\n* [List](list.html): Business identifier\r\n* [MeasureReport](measurereport.html): External identifier of the measure report to be returned\r\n* [Medication](medication.html): Returns medications with this external identifier\r\n* [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier\r\n* [MedicationStatement](medicationstatement.html): Return statements with this external identifier\r\n* [MolecularSequence](molecularsequence.html): The unique identity for a particular sequence\r\n* [NutritionIntake](nutritionintake.html): Return statements with this external identifier\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier\r\n* [Observation](observation.html): The unique id for a particular observation\r\n* [Person](person.html): A person Identifier\r\n* [Procedure](procedure.html): A unique identifier for a procedure\r\n* [QuestionnaireResponse](questionnaireresponse.html): The unique identifier for the questionnaire response\r\n* [RelatedPerson](relatedperson.html): An Identifier of the RelatedPerson\r\n* [RequestOrchestration](requestorchestration.html): External identifiers for the request orchestration\r\n* [ResearchSubject](researchsubject.html): Business Identifier for research subject in a study\r\n* [RiskAssessment](riskassessment.html): Unique identifier for the assessment\r\n* [ServiceRequest](servicerequest.html): Identifiers assigned to this order\r\n* [Specimen](specimen.html): The unique identifier associated with the specimen\r\n* [SupplyDelivery](supplydelivery.html): External identifier\r\n* [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest\r\n* [Task](task.html): Search for a task instance by its business identifier\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier\r\n"
* rest.resource[=].searchParam[+].name = "empty-reason"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-empty-reason"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Why list is empty"
* rest.resource[=].searchParam[+].name = "item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Actual entry"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): Event or incident that occurred or was averted\r\n* [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance\r\n* [AuditEvent](auditevent.html): More specific code for the event\r\n* [Basic](basic.html): Kind of Resource\r\n* [ChargeItem](chargeitem.html): A code that identifies the charge, like a billing code\r\n* [Condition](condition.html): Code for the condition\r\n* [DetectedIssue](detectedissue.html): Issue Type, e.g. drug-drug, duplicate therapy, etc.\r\n* [DeviceRequest](devicerequest.html): Code for what is being requested/ordered\r\n* [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a condition code\r\n* [ImagingSelection](imagingselection.html): The imaging selection status\r\n* [List](list.html): What the purpose of this list is\r\n* [Medication](medication.html): Returns medications for a specific code\r\n* [MedicationAdministration](medicationadministration.html): Return administrations of this medication code\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code\r\n* [MedicationStatement](medicationstatement.html): Return statements of this medication code\r\n* [NutritionIntake](nutritionintake.html): Returns statements of this code of NutritionIntake\r\n* [Observation](observation.html): The code of the observation type\r\n* [Procedure](procedure.html): A code to identify a  procedure\r\n* [RequestOrchestration](requestorchestration.html): The code of the request orchestration\r\n* [Task](task.html): Search by task code\r\n"
* rest.resource[=].searchParam[+].name = "notes"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-notes"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The annotation  - text content (as markdown)"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "If all resources have the same subject"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "encounter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-encounter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AuditEvent](auditevent.html): Encounter related to the activity recorded in the AuditEvent\r\n* [CarePlan](careplan.html): The Encounter during which this CarePlan was created\r\n* [ChargeItem](chargeitem.html): Encounter associated with event\r\n* [Claim](claim.html): Encounters associated with a billed line item\r\n* [ClinicalImpression](clinicalimpression.html): The Encounter during which this ClinicalImpression was created\r\n* [Communication](communication.html): The Encounter during which this Communication was created\r\n* [CommunicationRequest](communicationrequest.html): The Encounter during which this CommunicationRequest was created\r\n* [Composition](composition.html): Context of the Composition\r\n* [Condition](condition.html): The Encounter during which this Condition was created\r\n* [DeviceRequest](devicerequest.html): Encounter during which request was created\r\n* [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made\r\n* [EncounterHistory](encounterhistory.html): The Encounter associated with this set of history values\r\n* [ExplanationOfBenefit](explanationofbenefit.html): Encounters associated with a billed line item\r\n* [Flag](flag.html): Alert relevant during encounter\r\n* [ImagingStudy](imagingstudy.html): The context of the study\r\n* [List](list.html): Context in which list created\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with a specific encounter\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific encounter\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific encounter\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier\r\n* [Observation](observation.html): Encounter related to the observation\r\n* [Procedure](procedure.html): The Encounter during which this Procedure was created\r\n* [Provenance](provenance.html): Encounter related to the Provenance\r\n* [QuestionnaireResponse](questionnaireresponse.html): Encounter associated with the questionnaire response\r\n* [RequestOrchestration](requestorchestration.html): The encounter the request orchestration applies to\r\n* [RiskAssessment](riskassessment.html): Where was assessment performed?\r\n* [ServiceRequest](servicerequest.html): An encounter in which this request is made\r\n* [Task](task.html): Search by encounter\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier\r\n"
* rest.resource[=].searchParam[+].name = "source"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-source"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what defined the list contents (aka Author)"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Descriptive name for the list"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): The entity that caused the expenses\r\n* [AdverseEvent](adverseevent.html): Subject impacted by event\r\n* [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for\r\n* [Appointment](appointment.html): One of the individuals of the appointment is this patient\r\n* [AppointmentResponse](appointmentresponse.html): This Response is for this Patient\r\n* [AuditEvent](auditevent.html): Where the activity involved patient data\r\n* [Basic](basic.html): Identifies the focus of this resource\r\n* [BodyStructure](bodystructure.html): Who this is about\r\n* [CarePlan](careplan.html): Who the care plan is for\r\n* [CareTeam](careteam.html): Who care team is for\r\n* [ChargeItem](chargeitem.html): Individual service was done for/to\r\n* [Claim](claim.html): Patient receiving the products or services\r\n* [ClaimResponse](claimresponse.html): The subject of care\r\n* [ClinicalImpression](clinicalimpression.html): Patient assessed\r\n* [Communication](communication.html): Focus of message\r\n* [CommunicationRequest](communicationrequest.html): Focus of message\r\n* [Composition](composition.html): Who and/or what the composition is about\r\n* [Condition](condition.html): Who has the condition?\r\n* [Consent](consent.html): Who the consent applies to\r\n* [Contract](contract.html): The identity of the subject of the contract (if a patient)\r\n* [Coverage](coverage.html): Retrieve coverages for a patient\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The reference to the patient\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The reference to the patient\r\n* [DetectedIssue](detectedissue.html): Associated patient\r\n* [DeviceRequest](devicerequest.html): Individual the service is ordered for\r\n* [DeviceUsage](deviceusage.html): Search by patient who used / uses the device\r\n* [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient\r\n* [DocumentReference](documentreference.html): Who/what is the subject of the document\r\n* [Encounter](encounter.html): The patient present at the encounter\r\n* [EnrollmentRequest](enrollmentrequest.html): The party to be enrolled\r\n* [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The reference to the patient\r\n* [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for\r\n* [Flag](flag.html): The identity of a subject to list flags for\r\n* [Goal](goal.html): Who this goal is intended for\r\n* [GuidanceResponse](guidanceresponse.html): The identity of a patient to search for guidance response results\r\n* [ImagingSelection](imagingselection.html): Who the study is about\r\n* [ImagingStudy](imagingstudy.html): Who the study is about\r\n* [Immunization](immunization.html): The patient for the vaccination record\r\n* [ImmunizationEvaluation](immunizationevaluation.html): The patient being evaluated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Who this profile is for\r\n* [Invoice](invoice.html): Recipient(s) of goods and services\r\n* [List](list.html): If all resources have the same subject\r\n* [MeasureReport](measurereport.html): The identity of a patient to search for individual measure report results for\r\n* [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for\r\n* [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for\r\n* [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.\r\n* [MolecularSequence](molecularsequence.html): The subject that the sequence is about\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific patient.\r\n* [NutritionOrder](nutritionorder.html): The identity of the individual or set of individuals who requires the diet, formula or nutritional supplement\r\n* [Observation](observation.html): The subject that the observation is about (if patient)\r\n* [Person](person.html): The Person links to this Patient\r\n* [Procedure](procedure.html): Search by subject - a patient\r\n* [Provenance](provenance.html): Where the activity involved patient data\r\n* [QuestionnaireResponse](questionnaireresponse.html): The patient that is the subject of the questionnaire response\r\n* [RelatedPerson](relatedperson.html): The patient this related person is related to\r\n* [RequestOrchestration](requestorchestration.html): The identity of a patient to search for request orchestrations\r\n* [ResearchSubject](researchsubject.html): Who or what is part of study\r\n* [RiskAssessment](riskassessment.html): Who/what does assessment apply to?\r\n* [ServiceRequest](servicerequest.html): Search by subject - a patient\r\n* [Specimen](specimen.html): The patient the specimen comes from\r\n* [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied\r\n* [SupplyRequest](supplyrequest.html): The patient or subject for whom the supply is destined\r\n* [Task](task.html): Search by patient\r\n* [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for\r\n"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "current | retired | entered-in-error"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #ManufacturedItemDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "AdministrableProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:for"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:biological"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:contained-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:device"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:medication"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:nutrition"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:package"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Unique identifier"
* rest.resource[=].searchParam[+].name = "ingredient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-ingredient"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An ingredient of this item"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-name"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A descriptive name applied to this item"
* rest.resource[=].searchParam[+].name = "dose-form"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-dose-form"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Dose form as manufactured and before any transformation into the pharmaceutical product"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of this item. Enables tracking the life-cycle of the content."
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #MedicinalProductDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "MedicinalProductDefinition:contact"
* rest.resource[=].searchInclude[+] = "MedicinalProductDefinition:master-file"
* rest.resource[=].searchRevInclude[0] = "AdministrableProductDefinition:form-of"
* rest.resource[=].searchRevInclude[+] = "ClinicalUseDefinition:product"
* rest.resource[=].searchRevInclude[+] = "ClinicalUseDefinition:subject"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:for"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:package-for"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Business identifier for this product. Could be an MPID"
* rest.resource[=].searchParam[+].name = "ingredient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-ingredient"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An ingredient of this product"
* rest.resource[=].searchParam[+].name = "master-file"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-master-file"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A master file for to the medicinal product (e.g. Pharmacovigilance System Master File)"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "name-language"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-name-language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Language code for this name"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Regulatory type, e.g. Investigational or Authorized"
* rest.resource[=].searchParam[+].name = "characteristic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-characteristic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows the key product features to be recorded, such as \"sugar free\", \"modified release\", \"parallel import\""
* rest.resource[=].searchParam[+].name = "characteristic-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-characteristic-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A category for the characteristic"
* rest.resource[=].searchParam[+].name = "product-classification"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-product-classification"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows the product to be classified by various systems"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "contact"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-contact"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A product specific contact, person (in a role), or an organization"
* rest.resource[=].searchParam[+].name = "domain"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-domain"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "If this medicine applies to human or veterinary uses"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The full product name"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #OperationDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/OperationDefinition"
* rest.resource[=].interaction.code = #read
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "OperationDefinition:base"
* rest.resource[=].searchInclude[+] = "OperationDefinition:input-profile"
* rest.resource[=].searchInclude[+] = "OperationDefinition:output-profile"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "OperationDefinition:base"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Name used to invoke the operation"
* rest.resource[=].searchParam[+].name = "instance"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-instance"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Invoke on an instance?"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Invoke at the type level?"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "output-profile"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-output-profile"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Validation information for out parameters"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "kind"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-kind"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "operation | query"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "input-profile"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-input-profile"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Validation information for in parameters"
* rest.resource[=].searchParam[+].name = "system"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-system"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Invoke at the system level?"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "base"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-base"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Marks this as a profile of the base"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[+].type = #Organization
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Organization"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Organization:endpoint"
* rest.resource[=].searchInclude[+] = "Organization:partof"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:attester"
* rest.resource[=].searchRevInclude[+] = "Composition:author"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:manufacturer"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:source"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "MedicinalProductDefinition:contact"
* rest.resource[=].searchRevInclude[+] = "Organization:partof"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:holder"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "Subscription:owner"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Any identifier for the organization (not the accreditation issuer's identifier)"
* rest.resource[=].searchParam[+].name = "partof"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-partof"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "An organization of which this organization forms a part"
* rest.resource[=].searchParam[+].name = "address"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
* rest.resource[=].searchParam[+].name = "address-state"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-state"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A state specified in an address"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "active"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-active"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Is the Organization record active"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A code for the type of organization"
* rest.resource[=].searchParam[+].name = "address-postalcode"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-postalcode"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A postal code specified in an address"
* rest.resource[=].searchParam[+].name = "address-country"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-country"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A country specified in an address"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "endpoint"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-endpoint"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Technical endpoints providing access to services operated for the organization"
* rest.resource[=].searchParam[+].name = "phonetic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-phonetic"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A portion of the organization's name using some kind of phonetic matching algorithm"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "address-use"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-use"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A use code specified in an address"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A portion of the organization's name or alias"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "address-city"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-city"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A city specified in an address"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #PackagedProductDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:biological"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:contained-item"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:device"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:manufactured-item"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:medication"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:nutrition"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:package"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:package-for"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:biological"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:contained-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:device"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:medication"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:nutrition"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:package"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Unique identifier"
* rest.resource[=].searchParam[+].name = "package"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-package"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A complete packaged product within this packaged product"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "medication"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-medication"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A manufactured item of medication within this packaged product"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "manufactured-item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-manufactured-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A manufactured item of medication within this packaged product"
* rest.resource[=].searchParam[+].name = "nutrition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-nutrition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A nutrition product within this packaged product"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-name"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc."
* rest.resource[=].searchParam[+].name = "biological"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-biological"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A biologically derived product within this packaged product"
* rest.resource[=].searchParam[+].name = "package-for"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-package-for"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The product that this is a pack for"
* rest.resource[=].searchParam[+].name = "contained-item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-contained-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Any of the contained items within this packaged product"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "device"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-device"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A device within this packaged product"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #RegulatedAuthorization
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "RegulatedAuthorization:holder"
* rest.resource[=].searchInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Business identifier for the authorization, typically assigned by the authorizing body"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The type of regulated product, treatment, facility or activity that is being authorized"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "case-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-case-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The defining type of case"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "holder"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-holder"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The organization that holds the granted authorization"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "region"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-region"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "case"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-case"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The case or procedure number"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #SearchParameter
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/SearchParameter"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "SearchParameter:component"
* rest.resource[=].searchInclude[+] = "SearchParameter:derived-from"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "SearchParameter:component"
* rest.resource[=].searchRevInclude[+] = "SearchParameter:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Code used in URL"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "derived-from"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-derived-from"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Original definition for the search parameter"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "number | date | string | token | reference | composite | quantity | uri | special"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "target"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-target"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Types of resource (if a resource reference)"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "component"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-component"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Defines how the part works"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "base"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-base"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The resource type(s) this search parameter applies to"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #SubstanceDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:substance"
* rest.resource[=].searchRevInclude[+] = "Ingredient:substance-definition"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Identifier by which this substance is known"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The specific code"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "classification"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-classification"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "High or low level categorization, e.g. polymer vs. nucleic acid or linear vs. branch chain"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "domain"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-domain"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "If the substance applies to only human or veterinary use"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The actual name"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #ValueSet
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ValueSet"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/computablevalueset"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/executablevalueset"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/publishablevalueset"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "This special parameter searches for codes in the value set. See additional notes on the ValueSet resource"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "derived-from"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-derived-from"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): A resource that the CodeSystem is derived from\r\n* [ConceptMap](conceptmap.html): A resource that the ConceptMap is derived from\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): A resource that the NamingSystem is derived from\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): A resource that the ValueSet is derived from\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "predecessor"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-predecessor"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): The predecessor of the CodeSystem\r\n* [ConceptMap](conceptmap.html): The predecessor of the ConceptMap\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): The predecessor of the NamingSystem\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): The predecessor of the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-reference"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "A code system included or excluded in the value set or an imported value set"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "effective"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-effective"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The time during which the activity definition is intended to be in use\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The time during which the charge item definition is intended to be in use\r\n* [Citation](citation.html): The time during which the citation is intended to be in use\r\n* [CodeSystem](codesystem.html): The time during which the CodeSystem is intended to be in use\r\n* [ConceptMap](conceptmap.html): The time during which the ConceptMap is intended to be in use\r\n* [EventDefinition](eventdefinition.html): The time during which the event definition is intended to be in use\r\n* [Library](library.html): The time during which the library is intended to be in use\r\n* [Measure](measure.html): The time during which the measure is intended to be in use\r\n* [NamingSystem](namingsystem.html): The time during which the NamingSystem is intended to be in use\r\n* [PlanDefinition](plandefinition.html): The time during which the plan definition is intended to be in use\r\n* [Questionnaire](questionnaire.html): The time during which the questionnaire is intended to be in use\r\n* [ValueSet](valueset.html): The time during which the ValueSet is intended to be in use\r\n"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "expansion"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-expansion"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Identifies the value set expansion (business identifier)"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "topic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-topic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Topics associated with the module\r\n* [CodeSystem](codesystem.html): Topics associated with the CodeSystem\r\n* [ConceptMap](conceptmap.html): Topics associated with the ConceptMap\r\n* [EventDefinition](eventdefinition.html): Topics associated with the module\r\n* [EvidenceVariable](evidencevariable.html): Topics associated with the EvidenceVariable\r\n* [Library](library.html): Topics associated with the module\r\n* [Measure](measure.html): Topics associated with the measure\r\n* [NamingSystem](namingsystem.html): Topics associated with the NamingSystem\r\n* [PlanDefinition](plandefinition.html): Topics associated with the module\r\n* [ValueSet](valueset.html): Topics associated with the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "validate-code"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ValueSet-it-validate-code"
* rest.resource[=].operation[+].name = "invalidate-expansion"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ValueSet-i-invalidate-expansion"
* rest.resource[=].operation[+].name = "expand"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ValueSet-it-expand"
* rest.interaction[0].code = #transaction
* rest.interaction[+].code = #history-system

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/invariants/bdl-ips-1.fsh

Invariant: bdl-epi-1
Description: "An ePI document must have no additional Composition (including Composition subclass) resources besides the first."
Severity: #error
Expression: "entry.tail().where(resource is Composition).empty()"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/AdministrableProductDefinitionUvEpi.fsh

Profile: AdministrableProductDefinitionUvEpi
Parent: AdministrableProductDefinition
Id: AdministrableProductDefinition-uv-epi
Title: "AdministrableProductDefinition (ePI)"
Description: "AdministrableProductDefinition (ePI)"

* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..*
  * system 1..1
  * value 1..1

* status ^short = "draft | active | retired |unknown"

* formOf only Reference(MedicinalProductDefinitionUvEpi)

* administrableDoseForm from VsAdministrableDoseForm (example)

* unitOfPresentation from VsUnitofPresentation (example)

* producedFrom only Reference(ManufacturedItemDefinitionUvEpi)

* routeOfAdministration 
  * code from VsRouteOfAdministration (example)

* insert PropertyRulesSet

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/BundleUvEpi.fsh

Profile: BundleUvEpi
Parent: Bundle
Id: Bundle-uv-epi
Title: "Bundle - ePI"
Description: "Medicinal product information is a pivotal source of regulated and scientifically validated information that assists healthcare professionals in prescribing and dispensing the medicine and informs consumers about its safe and effective use. This profile represents the constraints applied to the Bundle resource used in the Electronic Product Information (ePI) FHIR Implementation Guide."
* ^purpose = "This profile represents the constraints applied to the Bundle resource used to create an Electronic Product Information (ePI) document."
 
* insert SetFmmandStatusRule ( 2, trial-use )
* obeys bdl-epi-1
* . ^short = "Electronic Product Information Bundle Document"
* . ^definition = "Electronic Product Information Bundle Document. A container for the collection of resources that make up the ePI document."

* identifier 1.. 
  * ^short = "Persistent identifier for the bundle"
  * ^definition = "Persistent identifier that remains the same for all versions of this ePI. The identifier remains the same regardless of any changes to the Bundle and regardless of any changes made to the Resources within the Bundle. This purpose of this identifier is to ensure all versions of an ePI can be collected as a set under a common parent identifier."

* type = #document (exactly)

* timestamp 1.. 
  * ^short = "Persistent original date of approval"
  * ^definition = "Original date in which this ePI document received its first authorization. As with the identifier, this date persists across versions. "

* meta
  * versionId 0..1
  * lastUpdated 0..1

* entry 1.. // 
* entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[=].path = "$this.resource"
/* * entry ^slicing.discriminator[+].type = #profile
* entry ^slicing.discriminator[=].path = "$this.resource" */

* entry ^slicing.rules = #open
* entry ^short = "Entry resource in the ePI bundle"
* entry ^definition = "An entry resource included in the ePI document bundle resource."
* entry ^comment = "Must contain the ePI Composition as the first entry (only a single Composition resource instance may be included).  Additional constraints are specified in the ePI Composition profile."
* entry
  * resource 1..
  * search ..0
  * response ..0
  * request ..0
  * fullUrl 1..

* insert BundleEntry (composition, 1..1, CompositionUvEpi, ePI Composition, ePI Composition )
* insert BundleEntry (organization, 0.., OrganizationUvEpi, Organization, Organization)
* insert BundleEntry (authorization, 0.., RegulatedAuthorizationUvEpi, Regulated Authorization, Regulated Authorization )
* insert BundleEntry (medicinalProduct, 0.., MedicinalProductDefinitionUvEpi, Medicinal Product, Medicinal Product Definition )
* insert BundleEntry (packagedProduct, 0.., PackagedProductDefinitionUvEpi, Packaged Product, Packaged Product Definition )
* insert BundleEntry (administrableProduct, 0.., AdministrableProductDefinitionUvEpi, Administrable Product, Administrable Product Definition )
* insert BundleEntry (manufacturedItem, 0.., ManufacturedItemDefinitionUvEpi, Manufactured Item, Manufactured Item Definition )
* insert BundleEntry (ingredient, 0.., IngredientUvEpi, Ingredient, Ingredient )
* insert BundleEntry (clinicalUse, 0.., ClinicalUseDefinition, Interactions\, Warnings\, Indications\,Contraindications, ePI ClinicalUseDefinition used for Interactions\, Warnings\,Indication\, Contraindication)
* insert BundleEntry (substanceDefinition, 0.., SubstanceDefinitionUvEpi, Substance Definition, Substance Definition )
* insert BundleEntry (binary, 0.., Binary, Binary, Binary )


* signature 
  * ^short = "Digital Signature."
  * ^definition = "Market authorization holder can digitally sign the ePI document."






---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ClinicalUseDefinitionCommonRules.fsh


RuleSet: ClinicalUseDefinitionCommonRules

* identifier ^short = "Business identifier for this clinical use."
* status ^short = "Defines whether this clinical use is draft, active or retired"
* subject 1..* 
* subject only Reference(MedicinalProductDefinitionUvEpi)


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ClinicalUseDefinitionContraindicationUvEpi.fsh

Profile: ClinicalUseDefinitionContraindicationUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-contraindication-uv-epi
Title: "ClinicalUseDefinition Contraindication (ePI)"
Description: "ClinicalUseDefinition Contraindication (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #contraindication

// * contraindication 0..0
* indication 0..0
* interaction 0..0
* warning 0..0
* undesirableEffect 0..0
*  contraindication 1..
  * diseaseSymptomProcedure from VsMeddra (preferred)



---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ClinicalUseDefinitionIndicationUvEpi.fsh

Profile: ClinicalUseDefinitionIndicationUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-indication-uv-epi
Title: "ClinicalUseDefinition Indication (ePI)"
Description: "ClinicalUseDefinition Indication (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #indication

* contraindication 0..0
// * indication 0..0
* interaction 0..0
* warning 0..0
* undesirableEffect 0..0
*  indication 1..
  * diseaseSymptomProcedure from VsMeddra (preferred)



---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ClinicalUseDefinitionInteractionUvEpi.fsh

Profile: ClinicalUseDefinitionInteractionUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-interaction-uv-epi
Title: "ClinicalUseDefinition Interaction (ePI)"
Description: "ClinicalUseDefinition Interaction (ePI)"

* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #interaction

* contraindication 0..0
* indication 0..0
// * interaction 0..0
* warning 0..0
* undesirableEffect 0..0
* interaction.interactant.itemCodeableConcept
* interaction.interactant.itemCodeableConcept from http://hl7.org/fhir/ValueSet/interactant (example)
//in the value set extensible is the code defined for "Conformance Binding"
  * insert AdditionalBinding (#extensible "Conformance Binding", VsSubstance, The specific substance that interacts., The specific substance that interacts.)

* interaction.type ^short = "The type of the interaction e.g. drug-drug, drug-food, drug-lab."

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ClinicalUseDefinitionUndesirableEffectUvEpi.fsh

Profile: ClinicalUseDefinitionUndesirableEffectUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-undesirableEffect-uv-epi
Title: "ClinicalUseDefinition Undesirable Effect (ePI)"
Description: "ClinicalUseDefinition Undesirable Effect (ePI)"

* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #undesirable-effect

* contraindication 0..0
* indication 0..0
* interaction 0..0
* warning 0..0
// * undesirableEffect 0..0
*  undesirableEffect 1..
  * symptomConditionEffect ^short = "The situation in which the undesirable effect may manifest."
  * classification  ^short = "High level classification of the effect."
  * frequencyOfOccurrence ^short = "How often the effect is seen."
 
 


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ClinicalUseDefinitionWarningUvEpi.fsh

Profile: ClinicalUseDefinitionWarningUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-warning-uv-epi
Title: "ClinicalUseDefinition Warning (ePI)"
Description: "ClinicalUseDefinition Warning (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #warning

* contraindication 0..0
* indication 0..0
* interaction 0..0
// * warning 0..0
* undesirableEffect 0..0
*  warning 1..1
  * description	^short = "A textual definition of this warning, with formatting."

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/CompositionUvEpi.fsh

Profile: CompositionUvEpi
Parent: Composition
Id: Composition-uv-epi
Title: "Composition (ePI)"
Description: "The Composition captures the section headings, sub-section headings, and narrative text (For example, paragraphs, bulleted lists, tables) in an ePI."
* ^status = #active
* ^purpose = "This profile represents the constraints applied to the Composition resource used in an Electronic Product Information (ePI) document."
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..
  * ^short = "Unique identifier only for this version of the Composition"
  * ^definition = "Unlike the Bundle identifier which persists, the Composition identifier does not persist across versions. Each new version of the Composition receives a new identifier."

* version ^short = "An explicitly assigned identifer of a variation of the content in the ePI"

* status ^short = "preliminary|final|amended|entered-in-error|deprecated"

* type // from VsEpiType (preferred)
* type ^short = "Type of ePI document template"
* type ^definition = "Specifies the type of ePI template. For example, Package Insert, Patient Information, Summary of Product Characteristics, Human Prescription, Drug Label."

* category ^short = "Categorization of ePI"

* language 1..1
* language ^short = "The language of the ePI's narrative text"

* subject 0..*
* subject only Reference (MedicinalProductDefinitionUvEpi)
* subject ^short = "The authorized medicinal product(s) that this ePI's composition is about"

* date 1..
* date ^short = "Date of last revision for this version of the authorized ePI."

* author ^short = "The Organization responsible for the ePI"
* author ^definition = "Link to the Organization resource that describes the organization responsible for the ePI (For example, Markting Authorization Holder)."
* author only Reference(OrganizationUvEpi)

* title 1..
* title ^short = "Title of the ePI Document"
* title ^definition = "A brief summary name describing the ePI. The title should include: Proprietary Name(s) (Non-proprietary Name(s)) Dose Form, Route of Administration."

* relatesTo ^short = "Cross-reference to anotherother ePI compositions or ePI document()s)"
* relatesTo ^definition = "A crossreference from this ePI's composition to another related Composition or ePI document."

* section 1..
  * ^short = "Level 1 section heading for the whole ePI"
  * ^definition = "This is the root or level 1 section heading in the ePI. All other section headings are sub-sections, or children, of this section heading"
  * title
    * ^short = "Section heading defined by the market authorization holder"
    * ^definition = "This section heading is the counterpart to the coded section heading from the health authority's ePI template. For example, the health authority ePI template may have '1. What X is and what it is used for' as the coded section heading. The market authorization holder modifies this such that 'X' is replaced with the brand name of the drug."
  * code 0..1 
  * code from VsSectionCode (example)
    * ^short = "Section heading defined by the health authority. Cannot be changed by the market authorization holder"
  * text ^short = "Narrative text for this section (e.g., paragraphs, bulleted lists, tables)."
  * emptyReason ^short = "Reason the section is empty."
  * section 
    *  ^short = "Nested sub-section headings for level 2, 3, 4 or 5."
    *  ^definition = "Nested Sections sub-section headings for level 2, 3, 4 or 5."
    * title ^short = "Section heading defined by the market authorization holder"
    * code 0..1 
    * code from VsSectionCode (example)
      * ^short = "Coded section heading defined by the health authority."
    * text ^short = "Narrative text for this section."
    * emptyReason ^short = "Reason the section is empty."


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/IngredientUvEpi.fsh

Profile: IngredientUvEpi
Parent: Ingredient
Id: Ingredient-uv-epi
Title: "Ingredient (ePI)"
Description: "Ingredient (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier ^short = "An identifier or code by which the ingredient can be referenced."

* status ^short =	"draft|active|retired|unknown"

* for only Reference( MedicinalProductDefinitionUvEpi or AdministrableProductDefinitionUvEpi or ManufacturedItemDefinitionUvEpi)

* role from VsIngredientRole (example)

* allergenicIndicator ^short = "If the ingredient is a known or suspected allergen." // = false

* manufacturer.manufacturer only Reference(OrganizationUvEpi)

* substance
  * code from VsSubstance (example)
  * strength 
    * ^short = "The quantity of substance, per presentation, or per volume or mass, and type of quantity."
  * strength.textPresentation ^short = "Text of either the whole presentation strength or a part of it"
  * strength.textConcentration ^short = "Text of either the whole concentration strength or a part of it"
  * strength.basis ^short = "A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt)"
  * strength.referenceStrength ^short = "Strength expressed in terms of a reference substance"
    * substance ^short = "Relevant reference substance."
    * strength[x] ^short = "Strength of the reference substance."


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/ManufacturedItemDefinitionUvEpi.fsh

Profile: ManufacturedItemDefinitionUvEpi
Parent: ManufacturedItemDefinition
Id: ManufacturedItemDefinition-uv-epi
Title: "ManufacturedItemDefinition (ePI)"
Description: "ManufacturedItemDefinition (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 0..

* status ^short = "draft|active|retired|unknown"

* manufacturedDoseForm from VsManufacturedDoseForm (example)

* unitOfPresentation from VsUnitofPresentation (example)

* manufacturer only Reference(OrganizationUvEpi)
* insert PropertyRulesSet


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/MedicinalProductDefinitionUvEpi.fsh

Profile: MedicinalProductDefinitionUvEpi
Parent: MedicinalProductDefinition
Id: MedicinalProductDefinition-uv-epi
Title: "MedicinalProductDefinition (ePI)"
Description: "Description of the packaged authorized medicinal product(s) associated to this ePI document."
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..

* type ^short = "Regulatory type, e.g. Investigational or Authorized."

* domain ^short = "If this medicine applies to human or veterinary uses."
* domain from $VS-medicinal-product-domain (example)

* version ^short = "A business identifier relating to a specific version of the product."

* status ^short = "The status within the lifecycle of this product record."
* statusDate ^short = "The date at which this status became applicable." 

* description ^short = "General description of the medicinal product referred by the ePI"

* combinedPharmaceuticalDoseForm from VsDoseForm (example)

* route from VsRouteOfAdministration (example)

* indication ^short = "Narrative text of the authorized indication(s) for this product."

* legalStatusOfSupply ^short = "The legal status of supply of the medicinal product as classified by the regulator."

* additionalMonitoringIndicator ^short = "Whether the Medicinal Product is subject to additional monitoring for regulatory reasons."

* specialMeasures ^short = "Whether the Medicinal Product is subject to special measures for regulatory reasons."

* pediatricUseIndicator ^short = "If authorised for pediatric use"

* classification from VsAtcClassification (example)
  * ^short = "Allows the product to be classified by various systems (e.g. ATC)"

* marketingStatus 0..
  * country  from VsCountry (preferred)
  * dateRange ^short = "The date when the Medicinal Product is placed on the market by the Marketing Authorization Holder"
  * status ^short = "Status of the marketing of the medicinal product."

* packagedMedicinalProduct ^short = "Package type for the product." 

* contact 0..*
  * type ^short = "Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information."
  * contact ^short = "A specific contact, person (in a role), or an organization for this product"

* name 1..*
  * productName ^short = "The full product name expressed as Proprietary Name (Non-Proprietary Name) strength dose form"
  * type ^short = "Type of product name, such as rINN, Proprietary, Non-Proprietary"
  * part 0..*
    * part ^short = "A fragment of a product name."
    * type ^short = "Type for this part of the name (e.g. strength part)"
  * usage 0..* 
    * country ^short = "Country where this name applies"
    * jurisdiction ^short = "Jurisdiction where this name applies"
    * language ^short = "Language for this name"


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/OrganizationUvEpi.fsh

Profile: OrganizationUvEpi
Parent: Organization
Id: Organization-uv-epi
Title: "Organization (ePI)"
Description: "Organization (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..

* active ^short = "Whether this organization's record is in active use"

* type
  * ^short = "Type of organization"
  * ^definition = "Organization type clarifies what purpose or busines operation this organization performs in relation to the ePI and the associated authorized medicinal products mentioned."

* name ^short = "Organization's legal name"
* alias ^short = "A list of alternate names for this organization"

* description ^short = "Additional details about the Organization"

* contact
  * telecom ^slicing.discriminator[0].type = #value
  * telecom ^slicing.discriminator[=].path = "system"
  * telecom ^slicing.rules = #open
  * telecom contains
        phone 0.. and
	     email 0.. and
	     url 0..
  * telecom[phone] 0..
    * ^short = "Phone"
    * ^definition = "Corporate phone contact information for the local representative of the marketing authorization holder. International dialling code followed by the area code and telephone number."
    * system = #phone

  * telecom[email] 0..
    * ^short = "email"
    * ^definition = "Corporate email contact information for the local representative of the marketing authorization holder."
    * system = #email

  * telecom[url] 0..
    * ^short = "Web Site"
    * ^definition = "Website of the local health authority and market authorization holder website "
    * system = #url

  * address 0..
    * use ^short = "home | work | temp | old | billing" // = #work
    * use = #work
    * text ^short = "Text representation of the address."
    * type ^short = "postal|physical|both"
    * line 1..
    * postalCode ^short = "Postal code for area"
    * city 1..
    * country  from VsCountry (preferred)
    * country 1..


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/PackagedProductDefinitionUvEpi.fsh

Profile: PackagedProductDefinitionUvEpi
Parent: PackagedProductDefinition
Id: PackagedProductDefinition-uv-epi
Title: "PackagedProductDefinition (ePI)"
Description: "PackagedProductDefinition (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 
  * system
  * system 1..
  * value 1..

* name 0..1

* type 0..1
  * ^short = "A high level category e.g., medicinal product pack, sample pack, shipping container."

* packageFor only Reference(MedicinalProductDefinitionUvEpi)

* status 0..1
  * ^short = "The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status"

* statusDate 0..1
  * ^example.label = "General"
  * ^example.valueDateTime = "2015-02-07T13:28:17Z"
  * ^example.label = "Example of a status date"

* containedItemQuantity 0..* 

* description ^short = "Narrative description of the overall pack; e.g., description of a sample pack"

* legalStatusOfSupply ^short = "The legal status of supply of the packaged item as classified by the regulator."
  * code 
    * ^short = "The actual status of supply. In what situation this package type may be supplied for use"
  * jurisdiction from VsCountry (preferred)

* marketingStatus 0..*
  * ^short = "Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated."
  * jurisdiction from VsCountry (preferred)
  * status 1..1
  * dateRange.start 0..1
  * dateRange.end 0..1
  * restoreDate 0..1

* copackagedIndicator ^short = "If the drug product is supplied with another item such as a diluent"

* manufacturer only Reference(OrganizationUvEpi)

* packaging
  * identifier 0..
    * system 1..
    * value 1..
  * type 0..1
  * quantity 0..1
  * material 0..1
  * shelfLifeStorage 
    * ^short = "Shelf Life and storage information."
    * type 0..1
    * periodDuration
      * value 0..1
      * unit 0..1
      * system 0..1
      * code 0..1
    * period[periodstring].period[x]
    * specialPrecautionsForStorage 0..*
  * manufacturer only Reference (OrganizationUvEpi)
  * containedItem
    * item only Reference (ManufacturedItemDefinitionUvEpi or DeviceDefinition) 
  * packaging 0..*





---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/PropertyRulesSet.fsh

RuleSet:  PropertyRulesSet
* property 0..*
* property ^slicing.discriminator[0].type = #value
* property ^slicing.discriminator[=].path = "type"
* property ^slicing.rules = #open
* property ^slicing.ordered = false
* property contains
    // codeableconcept
    color 0..* and
    flavor 0..*  and
    score  0..* and
    shape  0..* and
    surfaceform 0..* and
    //quantity
    size  0..* and
    //data
    image  0..* and
    //string
    imprint 0..* 

* property[color].value[x]     only CodeableConcept
* property[flavor].value[x]     only CodeableConcept
* property[score].value[x]     only CodeableConcept
* property[shape].value[x]     only CodeableConcept
* property[surfaceform].value[x]     only CodeableConcept
* property[size].value[x]     only Quantity
* property[image].value[x]     only Attachment
* property[imprint].value[x]     only CodeableConcept or Attachment

* property[imprint].valueCodeableConcept.coding 0..0 
* property[imprint].valueCodeableConcept.text 1..1
* property[imprint].type = $medicationknowledge-characteristic#imprintcd 

* property[color].type  = $medicationknowledge-characteristic#color
* property[color].value[x] from VsPropertyColor (example)

* property[flavor].type = EpiIg#flavor
* property[flavor].value[x] from VsPropertyFlavor (example)

* property[score].type   = $medicationknowledge-characteristic#scoring
// * property[score].value[x] from VsPropertyScore (example)

* property[shape].type   = $medicationknowledge-characteristic#shape
* property[shape].value[x] from VsPropertyShape (example)

* property[surfaceform].type   = EpiIg#surfaceform
// * property[surfaceform].value[x] from VsPropertySurfaceForm (preferred)

* property[size].type    = $medicationknowledge-characteristic#size

* property[image].type   = $medicationknowledge-characteristic#image
* property[image].value[x].data ^short = "base64 version of the product image"


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/RegulatedAuthorizationUvEpi.fsh

Profile: RegulatedAuthorizationUvEpi
Parent: RegulatedAuthorization
Id: RegulatedAuthorization-uv-epi
Title: "RegulatedAuthorization (ePI)"
Description: "RegulatedAuthorization (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  // * system from VsRegulatedAuthorizationTypeIdSystems (extensible)
  * system 1..
  * value 1..
  * ^short = "Identifier assigned by the health authority to a single medicinal product"
  
 // Reference to MedicinalProductDefinition: EU/1/96/007/035 Humalog Mix50 Insulin KwikPen, 3ml pre-fill
* subject 1..
* subject only Reference(MedicinalProductDefinitionUvEpi or PackagedProductDefinitionUvEpi)

* type 1..
  * ^short = "Overall type of this authorization, for example drug marketing approval, orphan drug designation."

* description ^short = "Brief description of the authorization"

* region from VsCountry (preferred)

* status 1..
  * ^short = "The current status of this authorization"
* statusDate ^short = "The date at which the current status was assigned."

// * indication only Reference (ClinicalUseDefinitionIndicationUvEpi)
* indication.reference 1..
* indication only Reference (ClinicalUseDefinitionIndicationUvEpi)
* indication ^short = "Reference to the Clinical Use Definition"

 // Reference to Organization: Marketing Authorization Holder
* holder 1..
* holder only Reference(OrganizationUvEpi)

* regulator only Reference(OrganizationUvEpi)

* case 
  * identifier ^short = "Identifier by which this case can be referenced."
  * type ^short = "The defining type of case."
  * status ^short = "The status associated with the case."
  * date[x] ^short = "Relevant date for this case."


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/profiles/SubstanceDefinitionUvEpi.fsh

Profile: SubstanceDefinitionUvEpi
Parent: SubstanceDefinition
Id: SubstanceDefinition-uv-epi
Title: "SubstanceDefinition (ePI)"
Description: "SubstanceDefinition (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..

* status ^short =	"draft|active|retired|unknown"

* domain from $VS-medicinal-product-domain (example)

* description ^short = "Textual description of the substance."
* manufacturer only Reference ( OrganizationUvEpi )

* molecularWeight 
  * amount ^short = "The molecular weight."
    * value ^short = "numerical value."
    * unit ^short = "Unit of measure."
    * code ^short = "coded form of the unit of measure."

* structure 
  * molecularFormula ^short = "Molecular formula (e.g. using the Hill system)."

* code 
  * ^short = "Codes associated with the substance." // Clarify when use codes and when identifiers
  * code from VsSubstance (example)

* name 0..*
  * ^short = "International Non-Proprietary Name (INN) of the substance; or United States Adopted Name (USAN) if applicable."
  * type ^short = "Name type e.g. 'scientific, 'brand'"

---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/rulesSets/rulesSets.fsh

RuleSet: AdditionalBinding ( purpose, valueSetAlias, documentation, description)
// RuleSet: additionalBinding ( #conformance, VsSubstance, The specific substance that interacts., The specific substance that interacts.)
//* ^binding.extension[+].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* ^binding.additional.purpose = {purpose}
* ^binding.additional.valueSet = Canonical({valueSetAlias})
* ^binding.additional.documentation = """{documentation}"""
* ^binding.description = "{description} see additional bindings in JSON OR XML"

RuleSet: BundleEntry (sliceName, card, profile, short, def )

* entry contains {sliceName} {card}
* entry[{sliceName}].resource 1..
* entry[{sliceName}].resource only {profile}
* entry[{sliceName}] ^short = "{short}"
* entry[{sliceName}] ^definition = """{def}"""

RuleSet: SetFmmandStatusRule ( fmm, status )
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = {fmm}
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #{status}


---

File: repos/HL7_SLASH_emedicinal-product-info/input/fsh/aliases.fsh

//============== ALIAS ===============

// =========== Systems =======
// HL7 systems
Alias: $administrable-dose-form = http://hl7.org/fhir/administrable-dose-form
Alias: $manufactured-dose-form = http://hl7.org/fhir/manufactured-dose-form
Alias: $unit-of-presentation = http://hl7.org/fhir/unit-of-presentation
Alias: $ingredient-role = http://hl7.org/fhir/ingredient-role
Alias: $combined-dose-form = http://hl7.org/fhir/combined-dose-form
Alias: $medicinal-product-type = http://hl7.org/fhir/medicinal-product-type
Alias: $medicinal-product-domain = http://hl7.org/fhir/medicinal-product-domain
Alias: $legal-status-of-supply = http://hl7.org/fhir/legal-status-of-supply
Alias: $medicinal-product-package-type = http://hl7.org/fhir/medicinal-product-package-type
Alias: $package-material = http://hl7.org/fhir/package-material
Alias: $medicinal-product-name-part-type = http://hl7.org/fhir/medicinal-product-name-part-type
Alias: $medicationknowledge-characteristic = 
http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic
Alias: $roleclass = http://terminology.hl7.org/CodeSystem/v3-RoleClass
Alias: $publication-status = http://hl7.org/fhir/publication-status

// External systems
Alias: $meddra = http://terminology.hl7.org/CodeSystem/mdr
Alias: $iso3166 = urn:iso:std:iso:3166
Alias: $ncithesaurus =  http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl // see https://terminology.hl7.org/CodeSystem-v3-nciThesaurus.html
Alias: $uri = urn:ietf:rfc:3986
Alias: $oid = urn:ietf:rfc:1155
Alias: $loinc = http://loinc.org
Alias: $edqm = http://standardterms.edqm.eu
Alias: $sct = http://snomed.info/sct
Alias: $atc = http://www.whocc.no/atc
Alias: $ginas = http://fdasis.nlm.nih.gov
Alias: $ucum = http://unitsofmeasure.org
Alias: $phpid = https://www.who-umc.org/phpid


// Example systems
Alias: $example-cs = http://example.org // used only for missing concepts in examples
Alias: $example-man = http://example.org/marketingAuthorizationNumber 
Alias: $example-org = http://example.org/sid/org
Alias: $example-prod = http://example.org/sid/product

// ============= VALUE SETS  ============

Alias: $VS-medicinal-product-domain =
	http://hl7.org/fhir/ValueSet/medicinal-product-domain

// SPOR Code systems (lists)
	
//Alias: $spor-precautionsForStorage-cs  = https://spor.ema.europa.eu/lists/100000073344
//Alias: $spor-medicinalProducttype-cs  = https://spor.ema.europa.eu/lists/200000025915
//Alias: $example-organisationRoleType-cs = https://spor.ema.europa.eu/lists/220000000031
//Alias: $spor-combinedPharmaceuticalDoseForm-cs = https://spor.ema.europa.eu/lists/200000000006 
// Alias: $spor-route-cs = https://spor.ema.europa.eu/lists/100000073345 // Routes and Methods of Administration
//Alias: $spor-legalStatusForSupply-cs = https://spor.ema.europa.eu/lists/100000072051	// Legal Status for the Supply
//Alias: $spor-additionalMonitoringIndicator-cs = http://example.org // TO BE FIXED
//Alias: $spor-marketingStatus-cs = https://spor.ema.europa.eu/lists/100000072052
//Alias: $example-productNamePartType-cs = https://spor.ema.europa.eu/lists/220000000000 // Medicinal Product Name Part Type
//Alias: $spor-regulatoryEntitlementType-cs = https://spor.ema.europa.eu/lists/220000000060
// Alias: $spor-regulatoryEntitlementStatus-cs = https://spor.ema.europa.eu/lists/100000072049

---

File: repos/HL7_SLASH_emedicinal-product-info/input/images-source/overview.plantuml

@startuml overview


node "Data sources" {
  bundle - [International Patient Summary - IPS]
  documents - [EMA ePI Consultation]
}

node "Gravitate Health" {
  [G-lens] --> documents
  [G-lens] --> bundle
}


@enduml

---

File: repos/HL7_SLASH_emedicinal-product-info/input/pagecontent/artifacts.md




---

