File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/example-patient.fsh

/*
    Example instances of the patient profile representing a some typical
    person informations sets. The example data is based on test persons 
    available in the Inera PU Test environment.
*/
Instance: PatientExample1
InstanceOf: SEBasePatient
Description: "Patient example"
* meta.security[0] = $ACTCODE#DEMO
* meta.security[1] = SecurityLabelCS#sekretessmarkering
* id = "PatientExample1"
* identifier[personnummer].value = "195009072553"
* name[0].use = #official
* name[0].family = "Goode Johansson"
* name[0].given[0] = "John"
* name[0].given[1] = "Bob"
* name[0].given[0].extension[nameQualifier].valueCode = #CL
* name[0].extension[middleName].valueString = "Johansson"
* name[0].extension[ownFamily].valueString = "Goode"
* name[0].text = "John Bob Goode Johansson"
* gender = #male
* maritalStatus = SEBaseMaritalStatusCS#RP "Registrerad partner"
* birthDate = "1950-09-07"
* address.line = "2120 S Michigan Ave"
* address.city = "Chicago"
* address.postalCode = "60616"
* address.country = "US"
* address.extension[officialAddressType].valueCodeableConcept = $SCT#63401000052101 "utlandsadress"

/* 
    Example patient Maria Ljungberg
    identified by SKV personnummer 196101182803
    folkbokförd län 14 med relationer mm
*/
Instance: PatientExample196101182803
InstanceOf: SEBasePatient
Description: "Example patient identified by personnummer 196101182803."
Usage: #example
* id = "PatientExample196101182803"
* identifier[personnummer].value = "196101182803"
* name[0].use = #official
* name[0].family = "Ljungberg"
* name[0].given[0] = "Maria"
* name[0].given[1] = "Birgitta"
* name[0].given[0].extension[nameQualifier].valueCode = #CL
* name[0].text = "Maria Ljungberg"
* gender = #female
* birthDate = "1961-01-18"
* address
  * line = "Vänervägen 7"
  * city = "VÄSTRA FRÖLUNDA"
  * postalCode = "42140"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63381000052101 "folkbokföringsadress"
* maritalStatus = $HL7MS#M "Married"

/* 
    Example patient Albertina VGR Hammar
    identified by SKV personnummer 189002029800
    has extension information middlename
    folkbokförd län 14 med relationer mm
*/
Instance: PatientExample189002029800
InstanceOf: SEBasePatient
Description: "Example patient identified by personnummer 189002029800."
Usage: #example
* id = "PatientExample189002029800"
* identifier[personnummer].value = "189002029800"
* name[0].use = #official
* name[0].family = "VGR Hammar"
* name[0].given[0] = "Albertina"
* name[0].extension[middleName].valueString = "VGR"
* name[0].extension[ownFamily].valueString = "Hammar"
* name[0].text = "Albertina VGR Hammar"
* gender = #female
* birthDate = "1890-02-02"
* address
  * line = "Haga Östergata"
  * city = "GÖTEBORG"
  * postalCode = "41301"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63381000052101 "folkbokföringsadress"
* maritalStatus = $HL7MS#M "Married"

/* 
    Example patient Katja Hennig
    identified by SKV personnummer 200302022389
    folkbokförd län 14, 
    born abroad, immigrant, foreign citizenship 
*/
Instance: PatientExample200302022389
InstanceOf: SEBasePatient
Description: "Example patient identified by personnummer 200302022389."
Usage: #example
* id = "PatientExample200302022389"
* identifier[personnummer].value = "200302022389"
* name[0].use = #official
* name[0].family = "Hennig"
* name[0].given[0] = "Katja"
* name[0].text = "Katja Hennig"
* gender = #female
* birthDate = "2003-02-02"
* address
  * line = "Södra vägen 5"
  * city = "Trollhättan"
  * postalCode = "46144"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63381000052101 "folkbokföringsadress"
* maritalStatus = $HL7MS#U "Unmarried"

/* 
    Example patient Andreas Ebers
    identified by SKV personnummer 199002222397
    folkbokförd län 14, 
    unregistered as emigrated, foreign address (utlandsadress) 
*/
Instance: PatientExample199002222397
InstanceOf: SEBasePatient
Description: "Example patient identified by personnummer 199002222397."
Usage: #example
* id = "PatientExample199002222397"
* identifier[personnummer].value = "199002222397"
* name[0].use = #official
* name[0].family = "Ebers"
* name[0].given[0] = "Andreas"
* name[0].text = "Andreas Ebers"
* gender = #male
* birthDate = "1990-02-22"
* address
  * line[0] = "Rosenheimer"
  * line[1] = "Van Kampenstraat"
  * line[2] = "7558 Hengelo"
  * country = "Nederländerna"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63401000052101 "utlandsadress"
* maritalStatus = $HL7MS#U "Unmarried"

/* 
    Example patient PROTECTED demographic information (sekretessmarkering)
    identified by SKV personnummer 200001252386
     
*/
Instance: PatientExample200001252386
InstanceOf: SEBasePatient
Description: "Example patient identified by personnummer 200001252386."
Usage: #example
* meta.security[0] = $ACTCODE#DEMO
* meta.security[1] = SecurityLabelCS#sekretessmarkering
* id = "PatientExample200001252386"
* identifier[personnummer].value = "200001252386"
* name[0].use = #official
* name[0].family = "Skyddad uppgift"
* name[0].extension[middleName].valueString = "Skyddad uppgift"
* name[0].given[0] = "Skyddad uppgift"
* name[0].text = "Skyddad uppgift"
* gender = #female
* birthDate = "2000-01-25"
* address
  * line[0] = "Förmedlingsuppdrag"
  * line[1] = "Box 2820"
  * city = "GÖTEBORG"
  * postalCode = "40320"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63391000052104 "särskild postadress"

/* 
    Example patient PROTECTED demographic information (skyddadFolkbokforing)
    identified by SKV personnummer 200001252386
     
*/
Instance: PatientExample189602029812
InstanceOf: SEBasePatient
Description: "Example patient identified by personnummer 189602029812."
Usage: #example
* meta.security[0] = $ACTCODE#DEMO
* meta.security[1] = SecurityLabelCS#skyddadFolkbokforing
* id = "PatientExample189602029812"
* identifier[personnummer].value = "189602029812"
* name[0].use = #official
* name[0].family = "Skyddad uppgift"
* name[0].extension[middleName].valueString = "Skyddad uppgift"
* name[0].given[0] = "Skyddad uppgift"
* name[0].text = "Skyddad uppgift"
* gender = #male
* birthDate = "2000-01-25"
* address
  * line[0] = "Förmedlingsuppdrag"
  * line[1] = "Box 2820"
  * city = "GÖTEBORG"
  * postalCode = "40320"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63391000052104 "särskild postadress"

/* 
    Example patient Nationellt Reservnummer
    identified by Nationellt reservnummer 98240301AA06
*/
Instance: PatientExample98240301AA06
InstanceOf: SEBasePatient
Description: "Example patient identified by nationellt reservnummer 98240301AA06."
Usage: #example
* id = "PatientExample98240301AA06"
* identifier[nationelltReservnummer].value = "98240301AA06"
* name[0].use = #official
* name[0].family = "Mellannamn Efternamn"
* name[0].given[0] = "Förnamn"
* name[0].text = "Förnamn Mellannamn Efternamn"
* name[0].extension[middleName].valueString = "Mellannamn"
* name[0].extension[ownFamily].valueString = "Efternamn"
* gender = #female
* birthDate = "2024-03-01"
* address[0]
  * line[0] = "C/O"
  * line[1] = "Adressrad 1 (Mer än 35 tecken)"
  * line[2] = "Adressrad 2 (Fler än 35 tecken)"
  * city = "Orten"
  * postalCode = "54300"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63411000052104 "uppgiven adress"
* address[1]
  * line[0] = "Adressrad 1"
  * line[1] = "Adressrad 2"
  * line[2] = "Adressrad 3"
  * country = "DZ"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63401000052101 "utlandsadress"

/* 
    Example patient Nationellt Reservnummer
    identified by Nationellt reservnummer 98240301AA06
*/
Instance: PatientExample20210325K069 
InstanceOf: SEBasePatient
Description: "Example patient identified by nationellt reservnummer 20210325K069."
Usage: #example
* id = "PatientExample20210325K069"
* identifier[nationelltReservnummer].value = "20210325K069"
* name[0].use = #official
* name[0].family = "Mellannamn Efternamn"
* name[0].given[0] = "Förnamn"
* name[0].text = "Förnamn Mellannamn Efternamn"
* name[0].extension[middleName].valueString = "Mellannamn"
* name[0].extension[ownFamily].valueString = "Efternamn"
* gender = #female
* birthDate = "2021-03-25"
* address[0]
  * line[0] = "Careof"
  * line[1] = "Tillfällig adressrad"
  * city = "Orten"
  * postalCode = "54300"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63411000052104 "uppgiven adress"
* address[1]
  * line[0] = "Adressrad 1"
  * line[1] = "Adressrad 2"
  * line[2] = "Adressrad 3"
  * country = "DZ"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63401000052101 "utlandsadress"

/* 
    Example patient identified by SKV samordningsnummer 196109732393   
*/
Instance: PatientExample196109732393
InstanceOf: SEBasePatient
Description: "Example patient identified by samordningsnummer 196109732393."
Usage: #example
* id = "PatientExample196109732393"
* identifier[samordningsnummer].value = "196109732393"
* name[0].use = #official
* name[0].family = "Smith"
* name[0].given[0] = "Tom"
* name[0].text = "Tom Smith"
* gender = #male
* birthDate = "1961-09-13"
* address
  * line[0] = "SANDÅSGATAN 2"
  * city = "STOCKHOLM"
  * postalCode = "11327"
  * extension[officialAddressType].valueCodeableConcept = $SCT#63391000052104 "särskild postadress"


---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/LMA-nummer.fsh

Profile: SEBaseLMANummer
Parent: http://hl7.org/fhir/StructureDefinition/Identifier
Title: "Profile for LMA number"
Description: "This profile is to be used specifically for expressing an LMA number as an identifier"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* system = "http://electronichealth.se/identifier/LMA-nummer"

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/name.fsh

Alias:   NameQualifier =  http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2

Extension: SEBaseMiddleNameExtension
Title: "SE extension för mellannamn"
Description: "The extension is used in the base profile for Swedish Patient to express the middle name that a person born before 2017 can have"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* ^context[0].type = #element
* ^context[0].expression = "HumanName"
* value[x] only string
* value[x] 1..1

Extension: SEBaseOwnFamilyExtension
Title: "SE extension för explicit efternamn"
Description: "The extension is used in the base profile for Swedish Patient to explicity express which part of the name is used as the family name."
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* ^context[0].type = #element
* ^context[0].expression = "HumanName"
* value[x] only string
* value[x] 1..1

Profile: SEBaseHumanName
Parent: http://hl7.org/fhir/StructureDefinition/HumanName
Description: "This profile provides the use of Swedish middlename and own family name as extensions and is used in the base Patient profile"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* extension contains SEBaseMiddleNameExtension named middleName 0..1
* extension contains SEBaseOwnFamilyExtension named ownFamily 0..1
* given.extension contains http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier named nameQualifier 0..1
* given.extension[nameQualifier].valueCode from SEBaseNamePartQualifierVS (required)

ValueSet: SEBaseNamePartQualifierVS
Title: "SE ValueSet for preferred name"
Description: "This is the ValueSet for a code used on the name that is the preferred name. I.e, the name that is the official name the person would like to be called by according to the national person registry"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* NameQualifier#CL "Call me"

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/organization.fsh


ValueSet: SEBaseHSAVerksamhetVS
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* include codes from system urn:oid:1.2.752.129.2.2.1.3

Profile: SEBaseOrganization
Parent: http://hl7.org/fhir/StructureDefinition/Organization
Title: "SE base profile for organization"
Description: "This is the base Organization profile to be used when profiling on Organization in a Swedish context"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice for swedish organization ID"
* identifier contains hsaid 0..1
* identifier[hsaid].system = "urn:oid:1.2.752.29.4.19" (exactly)
* identifier[hsaid].type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN (exactly)
* identifier contains organizationIdentifier 0..1
* identifier[organizationIdentifier].system = "urn:oid:2.5.4.97" (exactly)
* identifier[organizationIdentifier].type = http://terminology.hl7.org/CodeSystem/v2-0203#XX (exactly)
* type from SEBaseHSAVerksamhetVS (extensible)

Instance: OrganizationExample1
InstanceOf: SEBaseOrganization
Description: "Organization example"
* id = "Organization1"
* identifier[hsaid].value = "SE2321000131-P000000123457"

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/patient.fsh

Alias:   $SCT = http://snomed.info/sct|http://snomed.info/sct/45991000052106
Alias:   $HL7MS = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus

CodeSystem: SEBaseMaritalStatusCS
Id: se-base-marital-status
Title: "SE CodeSystem for marital status"
Description: "This is the CodeSystem for marital status in accordance with the Swedish authorities (Skatteverket Navet)"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* insert SEStandardRuleSet
* #G "Gift" 
* #OG "Ogift"
* #S "Skild"
* #Ä "Änka/änkling"
* #RP "Registrerad partner"
* #SP "Skild partner"
* #EP "Efterlevande partner"


ValueSet: SEBaseMaritalStatusVS
Title: "SE ValueSet for marital status"
Description: "This is a value set of marital status types that include both the HL7 official codesystem and the ones specific from the Swedish authorities."
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* $HL7MS#M "Married"
* $HL7MS#D "Divorced"
* $HL7MS#W "Widowed"
* $HL7MS#U "Unmarried"
* SEBaseMaritalStatusCS#RP "Registrerad partner"
* SEBaseMaritalStatusCS#SP "Skild partner"
* SEBaseMaritalStatusCS#EP "Efterlevande partner"

ValueSet: SEBaseAddressPersonVS
Title: "SE ValueSet for official address types"
Description: "This is the ValueSet for address type in accordance with the Swedish authorities"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* ^version = "0.1"
* $SCT#63391000052104 "särskild postadress"
* $SCT#63381000052101 "folkbokföringsadress"
* $SCT#63401000052101 "utlandsadress"
* $SCT#63411000052104 "uppgiven adress"
// * SCT#64281000052109 "tillfällig postadress"
// från 500201000057102 | urval adresstyp |
// * codes from system http://snomed.info/sct|http://snomed.info/sct/45991000052106 where concept in SCT#64691000052109

Extension: SEBaseAddressPersonExtension
Title: "SE extension for official address types"
Description: "This extension defines the official ValueSet to be used when expressing address type in accordance with the Swedish authorities"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* ^context[0].type = #element
* ^context[0].expression = "Address"
* value[x] only CodeableConcept
* valueCodeableConcept from SEBaseAddressPersonVS (required)
// alt. * valueCodeableConcept from http://snomed.info/sct/45991000052106/ValueSet?fhir_vs=refset/64691000052109 (required)

Profile: SEBasePatient
Parent: http://hl7.org/fhir/StructureDefinition/Patient
Title: "SE base profil for patient"
Description: "This is the base Patient profile to be used when profiling on Patient in a Swedish context"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* ^experimental = false
* ^version = "0.1"
* meta.security.code from SecurityLabelVS (extensible)
* address.extension contains SEBaseAddressPersonExtension named officialAddressType 0..1
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice for Swedish patient identifier types"
* identifier contains 
    personnummer 0..1 and 
    samordningsnummer 0..1 and 
    nationelltReservnummer 0..1
* identifier[personnummer].system = "http://electronichealth.se/identifier/personnummer" (exactly)
* identifier[samordningsnummer].system = "http://electronichealth.se/identifier/samordningsnummer" (exactly)
* identifier[nationelltReservnummer].system = "http://electronichealth.se/identifier/nationelltReservnummer" (exactly)
//* name.extension contains 
//    SEBasisMiddleNameExtension named middleName 0..1 and
//    SEBasisOwnFamilyExtension named ownFamily 0..1
* name only SEBaseHumanName
* name 0..1
* maritalStatus from SEBaseMaritalStatusVS (extensible)



---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/practitioner.fsh

/*CodeSystem: SEBasePrescriberCodeTypeCS
* insert SEStandardRuleSet
* #prescriber-code "Prescriber code"
* #group-prescriber-code "Group prescriber code"

ValueSet: SEBasePrescriberCodeTypeVS
* insert SEStandardRuleSet
* include codes from system SEBasePrescriberCodeTypeCS
*/
ValueSet: SEBaseHOSPLegitimationsYrkeVS
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* include codes from system urn:oid:1.2.752.116.3.1.3

ValueSet: SEBaseSOSNYKVS
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* include codes from system urn:oid:1.2.752.116.1.3.6

ValueSet: SEBaseSKRYrkeVS
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* include codes from system http://snomed.info/sct|http://snomed.info/sct/45991000052106 where concept in $SCT#67031000052107 // | urval legitimerade yrken |
* include codes from system http://snomed.info/sct|http://snomed.info/sct/45991000052106 where concept in $SCT#68591000052102 // | urval ej legitimerade yrken |

ValueSet: SEBaseSKRYrkeSpecialtyVS
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* include codes from system http://snomed.info/sct|http://snomed.info/sct/45991000052106 where concept in $SCT#67051000052103 // | urval specialistyrken sjuksköterska |
* include codes from system http://snomed.info/sct|http://snomed.info/sct/45991000052106 where concept in $SCT#67081000052106 // | urval specialistyrken läkare |
* include codes from system http://snomed.info/sct|http://snomed.info/sct/45991000052106 where concept in $SCT#67071000052109 // | urval specialistyrken tandläkare |

ValueSet: SEBaseHSABefattningVS
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* include codes from system urn:oid:1.2.759.129.2.2.1.4



Profile: SEBasePractitioner
Parent: http://hl7.org/fhir/StructureDefinition/Practitioner
Title: "SE base profile for practitioner"
Description: "This is the base Practitioner profile to be used when profiling on Practitioner in a Swedish context"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice for swedish practitioner ID"
* identifier contains hsaid 0..1
* identifier[hsaid].system = "urn:oid:1.2.752.29.4.19" (exactly)
* identifier[hsaid].type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN (exactly)

* name only SEBaseHumanName
* name 0..1

* address.extension contains SEBaseAddressPersonExtension named officialAddressType 0..1

* qualification.identifier ^slicing.discriminator.type = #value
* qualification.identifier ^slicing.discriminator.path = "system"
* qualification.identifier ^slicing.rules = #open
* qualification.identifier contains prescriber 0..1 and legitimation 0..1
* qualification.identifier[prescriber].system = "urn:oid:1.2.752.116.3.1.2" (exactly)
* qualification.identifier[legitimation].system = "urn:oid:1.2.752.116.3.1.1" (exactly)

* qualification.code.coding ^slicing.discriminator.type = #value
* qualification.code.coding ^slicing.discriminator.path = "system"
* qualification.code.coding ^slicing.rules = #open
* qualification.code.coding contains hosp 0..1 and
    sosnyk 0..1 and
    skr-yrke 0..1 and
    hsa-befattning 0..1
* qualification.code.coding[hosp].code from SEBaseHOSPLegitimationsYrkeVS (required)
* qualification.code.coding[sosnyk].code from SEBaseSOSNYKVS (required)
* qualification.code.coding[skr-yrke].code from SEBaseSKRYrkeVS (extensible)
* qualification.code.coding[hsa-befattning] from SEBaseHSABefattningVS (required)

Profile: SEBasePractitionerRole
Parent: http://hl7.org/fhir/StructureDefinition/PractitionerRole
Title: "SE base profil for practitioner role"
Description: "This is the base Practitioner Role profile to be used when profiling on Practitioner Role in a Swedish context"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice for swedish practitioner role ID (Medarbetaruppdrag)"
* identifier contains hsaid 0..1
* identifier[hsaid].system = "urn:oid:1.2.752.29.4.19" (exactly)
* identifier[hsaid].type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN (exactly)
* code ^slicing.discriminator.type = #value
* code ^slicing.discriminator.path = "system"
* code ^slicing.rules = #open
* code contains sosnyk 0..1 and
    skr-yrke 0..1 and
    hsa-befattning 0..1
* code[sosnyk] from SEBaseSOSNYKVS
* code[skr-yrke] from SEBaseSKRYrkeVS
* code[hsa-befattning] from SEBaseHSABefattningVS
* specialty ^slicing.discriminator.type = #value
* specialty ^slicing.discriminator.path = "system"
* specialty ^slicing.rules = #open
* specialty contains sosnyk 0..1 and
    skr-yrke 0..1
* specialty[skr-yrke] from SEBaseSKRYrkeSpecialtyVS


Instance: PractitionerExample1
InstanceOf: SEBasePractitioner
Description: "Practitioner example"
* id = "PractitionerExample1"
* name[0].use = #official
* name[0].family = "Goode Johansson"
* name[0].given[0] = "John"
* name[0].given[1] = "Bob"
* name[0].extension[middleName].valueString = "Johansson"
* name[0].extension[ownFamily].valueString = "Goode"
* name[0].text = "John Bob Goode Johansson"
* name[0].given[1].extension[nameQualifier].valueCode = #CL
* identifier[hsaid].value = "SE2321000131-P000000123456"
* qualification.identifier[prescriber].value = "12345678"
* qualification.code = $SCT#309453006 "barnmorska"

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/se-standard-ruleset.fsh

RuleSet: SEStandardRuleSet
* ^status = #draft
* ^experimental = true

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/fsh/sekretess.fsh

Alias: $ACTCODE = http://terminology.hl7.org/CodeSystem/v3-ActCode
// Alias: $SECLABEL = http://electronichealth.se/CodeSystem/SecurityLabel

CodeSystem: SecurityLabelCS
Id: SecurityLabel
Title: "SE CodeSystem security labels"
Description: "This is the CodeSystem for security labels in accordance with the swedish authorities"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* #sekretessmarkering "Sekretessmarkering"
"Protected demographic information according to 22 kap. 1 § OSL (Offentlighets- och sekretesslagen)"
* #skyddadFolkbokforing "Skyddad folkbokföring"
"Protected demographic information according to Skatteverket"
//* #protected-information ^designation.language = #sv
//* #protected-information ^designation.value = "sekretessmarkering"

ValueSet: SecurityLabelVS
Title: "SE ValueSet security labels"
Description: "This is the ValueSet for security labels in accordance with the swedish authorities"
* ^status = #active
* ^experimental = false
* insert SEStandardRuleSet
* $ACTCODE#DEMO
* SecurityLabelCS#sekretessmarkering
* SecurityLabelCS#skyddadFolkbokforing



---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/extensions.md

{% include list-extensions.xhtml %}

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/faq.md

Some questions and some answers

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/history.md



---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/index.md

# HL7 FHIR version R4 base profiles for Sweden
This FHIR implementation guide is published by HL7 Sweden and expresses the base profiles and extensions of FHIR resourses that are widely used in Sweden. The implementations guide is a description of the lowerst common denominator in adjustesments that needs to be made on the FHIR standard for applying it in a Swedish context. The profiles in this IG can be used without an further altering, but in most cases it is probably neccesary (and recommended) to make further adjustments in accordance with your applicable use case.
The extenstions on the other hand will often be useful without further alteration.

<!---
Denna implementationsguide publiceras av HL7 Sverige och samlar de grundläggande profileringar och utökningar av FHIR resurser som har bred användning i Sverige. I guiden beskrivs minsta gemensamma nämnare i förändingar som behöver göras på FHIR standarden för tillämpning i ett svenskt sammanhang. Profilerna kan användas utan vidare förändingar men det är antagligen nödvändigt (och rekommenderat) att anpassa dessa genom ytterligare profilering för att bättre passa tänkt användning.
Utökningarna (extensions) kan däremot ofta vara lämpliga att nyttja utan vidare förädling.
-->
# The working group
The development of this implementation guide is carried out by a work group under the management of HL7 Sweden <http://hl7.se>. The group is composed of representatives from regions, state authorities, system vendors and other experts within the FHIR standard, informatics, architecture and terminology.

<!---
Framtagandet av dessa basprofiler och utökningar genomförs av en arbetsgrupp under HL7 Sverige <http://hl7.se>. Gruppen består av representanter från regioner, myndigheter, systemleverantörer samt andra experter inom FHIR, informatik, arkitektur, terminologi etc.
-->

# Contact information
To reach the working group for the Swedish base profiles: 
[Arvid Thunholm](mailto:arvid.thunholm@gmail.com) - Chairman HL7 WG base profiles

<!---
För att komma i kontakt med gruppen som arbetar med FHIR basprofiler:
[Arvid Thunholm](mailto:arvid.thunholm@gmail.com) - Ordförande HL7 basprofiler
-->

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/profiles.md



#### Profiles

The following Profiles have been defined for this implementation guide.

{% include list-profiles.xhtml %}

<br />

#### Extensions:

These extensions have been defined for this implementation guide.

{% include list-extensions.xhtml %}

<br />

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/StructureDefinition-SEBaseAddressPersonExtension-intro.md

### How to express differend kinds of addresses
The different kinds of adresses that are used in the swedish context can be expressed with a combination of Address.use, Address.type and this extension. There are five kinds of addresses that should be expressed according to the table below. The parenthesis (PNR) and (SNR) mean that different values should be used for patients identified with Swedish personnummer (PNR) and Swedish samordningsnummer (SNR). 

<br />

| Type of address      | Address.use          | Address.type            | Extension value    |
|:--------------------:|:--------------------:|:-----------------------:|:------------------:|
| Folkbokföringsadress | *                    | *                       | SCT#63381000052101 |
| Särskild adress      | N/A (PNR) home (SNR) | postal (PNR) both (SNR) | SCT#63391000052104 |
| Utlandsadress        | home                 | *                       | SCT#63401000052101 |
| Tillfällig adress    | temp                 | *                       | N/A                |
| Uppgiven adress      | home                 | *                       | SCT#63411000052104 |

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/StructureDefinition-SEBaseOrganization-intro.md

### Use of organization.type
There are multiple code systems describing organization types in Sweden. <br />
- The National Board of Health and Welfare are maintaining a code system called "Verksamhetsområden" that is used for reporting quality data to national quality registries: [Verksamhetskoder](https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/dokument-webb/klassifikationer-och-koder/sjukhuskoder-kodlista-verksamhetsomraden-2006.pdf) <br />
- The Health and Social Care Inspectorate (IVO) also have a code system describing health care organizations that is used when reporting irregularities or register complaints. <br />
- The only code system that has been found with a clear namespace that can be identified and that is widely used in an interoperablilty context is the [HSA Verksamhetskoder](https://inera.atlassian.net/wiki/spaces/OIKH/pages/346560593/HSA+kodverk). Therefore the only code system used in the organization base profile is the HSA Verksamhetskoder. If necessary, other code systems can be used when suitable.

### Use of identifiers
There are currently different ways of representing the master source of the HSA identifier. HSA identifiers are used to identify a number of different kinds of objects, such as people, organisations and assigments. Each of these object types have their own OID, but that OID does not uniquely scope the identifier part, but the entire object. The OID chosen in the Swedish base profiles is the one referring to the identifiers as a whole, no matter what object class they represent. Unfortunately, this will lead to cases where the OID used here will differ from the OID used in other formal specifications.
<br />
This can be very important to keep in mind for implementors that get their HSA-ids from different sources and use them in different interactions.

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/StructureDefinition-SEBasePractitioner-intro.md

### Use of qualification
In the qualification element for this profile we present different slicing options for identifiers and for code. These are optional for an implementer and are not dependent on each other.
#### Identifier slices
- Prescriber
<br />
Unique code/identifier for a person working within the health care sector in Sweden that authorises the person to prescribe medication. The registry of prescriber identifications are provided and maintained by the Swedish National Board of Health and Welfare.
- Legitimation
<br />
Identifier of a health care practitioner´s verified and secured licenced title. The registry (HOSP) is provided and maintained by the Swedish National Board of Health and Welfare. This is an identifer only and should be accompanied by a code that clarifies which title the practitioner is licenced for - see slice *hosp* below. The use of this identifier is limited since the main identifier for the practitioner is often used instead. [Registret över legitimerad hälso- och sjukvårdspersonal (HOSP)](https://www.socialstyrelsen.se/statistik-och-data/register/halso-och-sjukvardspersonal/)

#### Code slices
- hosp
<br />
Code describing a health care practitioner´s verified and secured licenced title. The registry (HOSP) is provided and maintained by the Swedish National Board of Health and Welfare. [Registret över legitimerad hälso- och sjukvårdspersonal (HOSP)](https://www.socialstyrelsen.se/statistik-och-data/register/halso-och-sjukvardspersonal/)
- sosnyk
<br />
Code system describing health care practitioner occupational categories used in Swedish healthcare. The registry is provided and maintained by the Swedish National Board of Health and Welfare. [Socialstyrelsens nationella yrkeskodverk (SOSNYK)](https://www.socialstyrelsen.se/statistik-och-data/klassifikationer-och-koder/andra-kodverk/sosnyk/)
- skr-yrke
<br />
Snomed selection of codes that can represent licenced and unlicenced titles used within Swedish healthcare. These selections are used in some national specifications for interoperability.
- hsa-befattning
<br />
Code system for occupational categories used in the Swedish master catalouge over healthcare organisation and personel. The code system is provided and maintained by Inera AB. [HSA Innehåll Befattning](https://inera.atlassian.net/wiki/download/attachments/397444985/hsa_innehall_befattning.pdf)


---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/ValueSet-SEBaseHSABefattningVS-intro.md

### Master code system
The codes referenced in this valueset are from [HSA Befattning](https://inera.atlassian.net/wiki/download/attachments/397444985/hsa_innehall_befattning.pdf)


---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/ValueSet-SEBaseHSAVerksamhetVS-intro.md

### Master code system
The codes referenced in this valueset are from [HSA Verksamhetskod](https://inera.atlassian.net/wiki/spaces/OIKH/pages/346560593/HSA+kodverk)


---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/ValueSet-SEBaseMaritalStatusVS-notes.md

### Comparison between different code systems for marital status 
This value set is a combinations of values from the international FHIR code system and the code system from the Swedish authority Skatteverket. A mapping to the Snomed codes expressed in the Swedish reference model Nationell Informationsstruktur (NI).
<br />

| FHIR internationella |       Skatteverket      |                NI               |
|:--------------------:|:-----------------------:|:-------------------------------:|
|      A Annulled      |                         |                                 |
|      D Divorced      |         S Skild         |       20295000 \| skild \|      |
|    I Interlocutory   |                         |                                 |
|  L Legally Separated |                         |                                 |
|       M Married      |          G Gift         |       87915002 \| gift \|       |
|     P Polygamous     |                         |                                 |
|    S Never Married   |                         |                                 |
|  T Domestic partner  |                         |                                 |
|      U unmarried     |         OG Ogift        | 59961000052103 \| ogift \| (SE) |
|       W Widowed      |      Ä Änka/änkling     |   33553000 \| änka/änkling \|   |
|                      | EP Efterlevande partner |                                 |
|                      |  RP Registrerad partner |                                 |
|                      |     SP Skild partner    |                                 |
|      UNK unknown     |                         |                                 |

---

File: repos/HL7Sweden_SLASH_basprofiler-r4/input/pagecontent/valuesets.md

{% include list-valuesets.xhtml %}

---

