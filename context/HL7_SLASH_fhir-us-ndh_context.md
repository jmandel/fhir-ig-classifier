File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-CBS.fsh

Instance: Organization-Social-Towson-Food
InstanceOf: NdhNdApiOrganization
Description: "A food dispensary entity"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:45:21.526+00:00"
//* meta.source = "#054uQQFhinTrMfW0"
* meta.profile = Canonical(NdhNdApiOrganization)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[NPI].use = #official
* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI].value = "1407215734"
* identifier[NPI].assigner.display = "Centers for Medicare and Medicaid Services"
* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "Organization-Social-Towson-Food"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* active = true
* type = OrgTypeCS#prvgrp "Provider Group"
* type.text = "A food dispensary entity"
* name = "Hope INC"
* telecom[0].system = #phone
* telecom[=].value = "410.237.8591"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1542"
* telecom[=].use = #work
* address.extension[geolocation].extension[latitude].valueDecimal = 39.33634
* address.extension[geolocation].extension[longitude].valueDecimal = -76.53353
* address.use = #work
* address.type = #both
* address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
* address.line = "4803 VALLEY VIEW AVE"
* address.city = "BALTIMORE"
* address.state = "MD"
* address.postalCode = "21206"
* address.country = "USA"
* contact.purpose = $ContactEntityType#ADMIN "Administrative"
* contact.name.use = #official
* contact.name.text = "HERROL BLAKE"
* contact.name.family = "Blake"
* contact.name.given = "Herrol"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon "Monday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #tue "Tuesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #wed "Wednesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #thu "Thursday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #fri "Friday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sat "Saturday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sun "Sunday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime][0].valueTime = "07:00:00"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime][0].valueTime = "18:00:00"
* contact.telecom.system = #phone
* contact.telecom.value = "410.237.8591"
* contact.telecom.use = #work
* contact.address.use = #work
* contact.address.type = #both
* contact.address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
* contact.address.line = "4803 VALLEY VIEW AVE"
* contact.address.city = "BALTIMORE"
* contact.address.state = "MD"
* contact.address.postalCode = "21206"
* contact.address.country = "USA"


Instance: Organization-Social-Hope-CBO
InstanceOf: NdhNdApiOrganization
Description: "A food dispensary entity"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:45:21.526+00:00"
//* meta.source = "#054uQQFhinTrMfW0"
* meta.profile = Canonical(NdhNdApiOrganization)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
//* identifier[NPI].use = #official
//* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
//* identifier[NPI].value = "1234521488"
//* identifier[NPI].assigner.display = "Centers for Medicare and Medicaid Services"
//* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "Organization-Social-Hope-CBO"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* active = true
* type = OrgTypeCS#prvgrp "Provider Group"
* type.text = "A food dispensary entity"
* name = "Hope INC"
* telecom[0].system = #phone
* telecom[=].value = "410.237.8591"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1542"
* telecom[=].use = #work
* address.extension[geolocation].extension[latitude].valueDecimal = 39.33634
* address.extension[geolocation].extension[longitude].valueDecimal = -76.53353
* address.use = #work
* address.type = #both
* address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
* address.line = "4803 VALLEY VIEW AVE"
* address.city = "BALTIMORE"
* address.state = "MD"
* address.postalCode = "21206"
* address.country = "USA"
* contact.purpose = $ContactEntityType#ADMIN "Administrative"
* contact.name.use = #official
* contact.name.text = "HERROL BLAKE"
* contact.name.family = "Blake"
* contact.name.given = "Herrol"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon "Monday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #tue "Tuesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #wed "Wednesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #thu "Thursday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #fri "Friday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sat "Saturday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sun "Sunday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime][0].valueTime = "07:00:00"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime][0].valueTime = "18:00:00"
* contact.telecom.system = #phone
* contact.telecom.value = "410.237.8591"
* contact.telecom.use = #work
* contact.address.use = #work
* contact.address.type = #both
* contact.address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
* contact.address.line = "4803 VALLEY VIEW AVE"
* contact.address.city = "BALTIMORE"
* contact.address.state = "MD"
* contact.address.postalCode = "21206"
* contact.address.country = "USA"

Instance: HealthcareService-Social-Hope-CBO
InstanceOf: NdhNdApiHealthcareService
Description: "HOPE INC Healthcare Service"
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2023-06-29T22:45:21.526+00:00"
//* meta.source = "#054uQQFhinTrMfW0"
* meta.profile = Canonical(NdhNdApiHealthcareService)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* extension[social-service-requirement].extension[birthsex].valueCode = $V3AdministrativeGender#F "Female"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "HealthcareService-Social-Hope-CBO"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[social-service-requirement].extension[age-range].valueRange.low = 18 'a' "years"
* extension[social-service-requirement].extension[age-range].valueRange.high = 65 'a' "years"
* active = true
* providedBy = Reference(Organization/Organization-Social-Hope-CBO) "HOPE INC"
* category = HealthcareServiceCategoryCS#food "Food"
* category.text = "group"
* location = Reference(Location/Location-Social-Hope-CBO) "HOPE INC"
* name = "HOPE INC"
* telecom[0].system = #phone
* telecom[=].value = "410.237.8591"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1542"
* telecom[=].use = #work
* appointmentRequired = false
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.daysOfWeek[+] = #sat
* availableTime.daysOfWeek[+] = #sun
* availableTime.allDay = false
* availableTime.availableStartTime = "06:00:00"
* availableTime.availableEndTime = "18:00:00"
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NdhAcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $DeliveryMethodCS#physical "Physical"


Instance: HealthcareService-Social-Towson-Food
InstanceOf: NdhNdApiHealthcareService
Description: "Towson Healthcare Service"
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2022-12-20T19:28:24.671+00:00"
//* meta.source = "#5W4kw8uMs4mA7G1S"
* meta.profile = Canonical(NdhNdApiHealthcareService)
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "HealthcareService-Social-Towson-Food"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NdhAcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $DeliveryMethodCS#physical "Physical"
* extension[social-service-requirement].extension[age-group].valueCodeableConcept = AgeGroupCS#children "Children"
* active = true
* providedBy = Reference(Organization/Organization-Social-Towson-Food) "Towson Food INC"
* category = HealthcareServiceCategoryCS#food "Food"
* category.text = "Food"
* type[0] = $ServiceTypeCS#345 "Food Vouchers"
* type[+] = $ServiceTypeCS#548 "Food Relief/Food/Meals"
* type[+] = $ServiceTypeCS#344 "Food"
* location = Reference(Location/Location-Social-Towson-Food) "Towson Food INC"
* name = "Towson Food INC"
* telecom[0].system = #phone
* telecom[=].value = "410.237.8592"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1543"
* telecom[=].use = #work
* appointmentRequired = false
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.daysOfWeek[+] = #sat
* availableTime.daysOfWeek[+] = #sun
* availableTime.allDay = false
* availableTime.availableStartTime = "08:00:00"
* availableTime.availableEndTime = "18:00:00"
* extension[social-service-requirement].extension[age-group].valueCodeableConcept = AgeGroupCS#adults "Adults"

Instance: Location-Social-Towson-Food
InstanceOf: NdhNdApiLocation
Description: "Towson Food INC"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:44:22.239+00:00"
//* meta.source = "#yfN9tWGDGnomhl8A"
* meta.profile = Canonical(NdhNdApiLocation)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[0].use = #secondary
* identifier[=].system = "https://hope-dispensary-of-greater-bridgeport.com"
* identifier[=].value = "main campus"
* identifier[=].assigner = Reference(Organization/Organization-Social-Towson-Food) "TOWSON FOOD DISPENSARY"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "Location-Social-Towson-Food"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* status = #active
* name = "TOWSON FOOD DISPENSARY OF GREATER BALTIMORE COUNTY"
* description = "Main campus of TOWSON FOOD DISPENSARY OF GREATER BALTIMORE COUNTY"
* type = $V3RoleCode#CSC "community service center"
* type.text = "Community Service Center"
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[=].system = #phone
* telecom[=].value = "410.237.8592"
* telecom[=].use = #work
* telecom[+].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[=].system = #fax
* telecom[=].value = "1-443-786-1543"
* telecom[=].use = #work
* address.use = #work
* address.type = #both
* address.text = "521 E Joppa Rd, Towson, MD 21286"
* address.line = "521 E Joppa Rd"
* address.city = "TOWSON"
* address.state = "MD"
* address.postalCode = "21286"
* address.country = "USA"
* position.longitude = -76.5754
* position.latitude = 39.39259
* managingOrganization = Reference(Organization/Organization-Social-Towson-Food) "TOWSON FOOD DISPENSARY"
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.daysOfWeek[+] = #sat
* hoursOfOperation.daysOfWeek[+] = #sun
* hoursOfOperation.allDay = true
* availabilityExceptions = "visiting hours from 6:00 am - 6:00 pm"



Instance: Location-Social-Hope-CBO
InstanceOf: NdhNdApiLocation
Description: "HOPE FOOD DISPENSARY"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:44:22.239+00:00"
//* meta.source = "#yfN9tWGDGnomhl8A"
//* meta.profile = "http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Location"
* meta.profile = Canonical(NdhNdApiLocation)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[0].use = #secondary
* identifier[=].system = "https://hope-dispensary-of-greater-bridgeport.com"
* identifier[=].value = "main campus"
* identifier[=].assigner = Reference(Organization/Organization-Social-Hope-CBO) "HOPE FOOD DISPENSARY"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "Location-Social-Hope-CBO"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* status = #active
* name = "HOPE FOOD DISPENSARY OF GREATER BALTIMORE"
* description = "Main campus of HOPE FOOD DISPENSARY OF GREATER BALTIMORE"
* type = $V3RoleCode#CSC "community service center"
* type.text = "Community Service Center"
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[=].system = #phone
* telecom[=].value = "410.237.8591"
* telecom[=].use = #work
* telecom[+].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[=].system = #fax
* telecom[=].value = "1-443-786-1542"
* telecom[=].use = #work
* address.use = #work
* address.type = #both
* address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
* address.line = "4803 VALLEY VIEW AVE"
* address.city = "BALTIMORE"
* address.state = "MD"
* address.postalCode = "21206"
* address.country = "USA"
* position.longitude = -76.53353
* position.latitude = 39.33634
* managingOrganization = Reference(Organization/Organization-Social-Hope-CBO) "HOPE FOOD DISPENSARY"
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.daysOfWeek[+] = #sat
* hoursOfOperation.daysOfWeek[+] = #sun
* hoursOfOperation.allDay = true
* availabilityExceptions = "visiting hours from 6:00 am - 6:00 pm"



---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-Gen.fsh

Instance: OrganizationGen1
InstanceOf: NdhNdApiOrganization
Description: "NdhNdApiOrganization OrganizationGen1"
Usage: #example
* meta.profile = Canonical(NdhNdApiOrganization)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrganizationGen1"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "OrganizationGen1"
* type = OrgTypeCS#fac "Facility"
* type.text = "A physical healthcare facility."

Instance: OrganizationGen2
InstanceOf: NdhNdApiOrganization
Description: "NdhNdApiOrganization OrganizationGen2"
Usage: #example
* meta.profile = Canonical(NdhNdApiOrganization)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrganizationGen2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "OrganizationGen2"
* type = OrgTypeCS#fac "Facility"
* type.text = "A physical healthcare facility."



Instance: NetworkGen1
InstanceOf: NdhNdApiNetwork
Description: "NdhNdApiNetwork NetworkGen1"
Usage: #example
* meta.profile = Canonical(NdhNdApiNetwork)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "NetworkGen1"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "NetworkGen1"
* type = OrgTypeCS#ntwk "Network"
* type.text = "A healthcare provider insurance network"
* partOf = Reference(OrganizationGen1)

Instance: NetworkGen2
InstanceOf: NdhNdApiNetwork
Description: "NdhNdApiNetwork NetworkGen2"
Usage: #example
* meta.profile = Canonical(NdhNdApiNetwork)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "NetworkGen2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "NetworkGen2"
* type = OrgTypeCS#ntwk "Network"
* type.text = "A healthcare provider insurance network"
* partOf = Reference(OrganizationGen2)

Instance: LocationGen1
InstanceOf: NdhNdApiLocation
Description: "NdhNdApiLocation LocationGen1"
Usage: #example
* meta.profile = Canonical(NdhNdApiLocation)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* status = #active
* extension[newpatients][+].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#newpt "Accepting"
* extension[newpatients][=].extension[fromNetwork].valueReference = Reference(NetworkGen1)
* extension[newpatients][+].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#nopt "Not Accepting"
* extension[newpatients][=].extension[fromNetwork].valueReference = Reference(NetworkGen2)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "LocationGen1"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "LocationGen1"


Instance: LocationGen2
InstanceOf: NdhNdApiLocation
Description: "NdhNdApiLocation LocationGen2"
Usage: #example
* meta.profile = Canonical(NdhNdApiLocation)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* status = #active
* extension[newpatients][+].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#newpt "Accepting"
* extension[newpatients][=].extension[fromNetwork].valueReference = Reference(NetworkGen1)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "LocationGen2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "LocationGen2"

---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-Payer2Payer.fsh

/*
Instance: careevolution
InstanceOf: NdhPnLdApiOrganization
Description: "This is a test payer organization for the MTLS example. It is a duplicate of the careevolution organization,"
Usage: #example
* meta.profile = Canonical(NdhPnLdApiOrganization)
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "careevolution"
* active = true
* type = OrgTypeCS#payer "Payer"
* name = "CareEvolution"
* address.line[0] = "100 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-2345"
// endpoint = Reference(careevolution)
*/


//network and insuranceplan may not have need to use endpoints
Instance: diamondonyxhealth2
InstanceOf: NdhPnLdApiOrganization
Description: "This is a test organization for the MTLS example"
Usage: #example
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* meta.profile = Canonical(NdhPnLdApiOrganization)
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "diamondonyxhealth2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "https://diamond.2.onyxhealth.io"
* identifier[=].value = "diamondonyxhealth2"
* type = OrgTypeCS#payer "Payer"
//* partOf = Reference(careevolution)
* name = "DiamondOnyxHealth"
* telecom.system = #url
* telecom.value = "https://diamond.2.onyxhealth.io"
* address.line[0] = "100 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-2345"
* endpoint = Reference(Endpoint/diamond-mtls-endpoint2)

//payer organization has endpoints to support payer2payer communication
//the use case is 1. new payer to request member data from old payer. 2. two payers to keep synchoronized with each other for benetifit coordination for example
//a member participates in both medicare and medicaid.  the two payers need to keep synchronized with each other to coordinate benefits
//Three Certificates are used for payer2payer endpoints
//1. public certificate (leaf certificate) is the identity certificate for endpoint it tells who you are
//2. signed artifact (intermediate cert) is the certificate that signs the public certificate. which could be used to trace back to the root certificate
//3. mutual TLS certificate the certificate issued by the mutual TLS trust framework CA. it is used to verify the identity of the endpoint to participate in the mutual 
//TLS trust network. In order to get the mutual TLS certificate, the endpoint needs to have identity certificate.
Instance: diamond-mtls-endpoint2
InstanceOf: NdhPnLdApiEndpoint
Description: "This is a test endpoint for the MTLS example"
Usage: #example
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* meta.profile = Canonical(NdhPnLdApiEndpoint)
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "diamond-mtls-endpoint2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "https://diamond.2.onyxhealth.io"
* identifier[=].value = "diamond-mtls-endpoint2"
* extension[testing-certification].extension[method].valueCodeableConcept = EndpointTestingMethodCS#attestation
* status = #active
* name = "DiamondOnyxHealth"
* extension[endpoint-usecase][0].extension[endpointUsecasetype].valueCodeableConcept = NdhFhirEndpointUseCaseCS#payerToPayer "Payer to Payer"
* extension[trust-framework][0].extension[trustFrameworkType].valueCodeableConcept = TrustFrameworkTypeCS#PayerToPayer "Payer to Payer Trust Network"
* extension[trust-framework][=].extension[signedArtifact].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[trust-framework][=].extension[publicCertificate].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[secure-exchange-artifacts][0].extension[secureExchangeArtifactsType].valueCodeableConcept = NdhSecureExchangeArtifactsCS#x509-mtls-certificate
* extension[secure-exchange-artifacts][=].extension[certificate].valueBase64Binary = "MIIHLDCCBRSgAwIBAgIBAjANBgkqhkiG9w0BAQsFADCBlDELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE1hcnlsYW5kMRIwEAYDVQQHDAlCQUxUSU1PUkUxFjAUBgNVBAoMDU9ueXhIZWFsdGguaW8xEDAOBgNVBAsMB0RhVmluY2kxEjAQBgNVBAMMCWNhLXNlcnZlcjEgMB4GCSqGSIb3DQEJARYRc3VwcG9ydEBzYWZoaXIuaW8wHhcNMjIwNzA2MjEzNzUzWhcNMjcwMTExMjEzNzUzWjB9MQswCQYDVQQGEwJVUzERMA8GA1UECAwITWFyeWxhbmQxFjAUBgNVBAoMDU9ueXhIZWFsdGguaW8xEDAOBgNVBAsMB0RhVmluY2kxDzANBgNVBAMMBnNlcnZlcjEgMB4GCSqGSIb3DQEJARYRc3VwcG9ydEBzYWZoaXIuaW8wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCaT1TWD4SbpW2jIYMJ5+XKOX5fAvFkBvh5oBiYw39op7GwcxuWXRCEaW2RZs0g1AWECLxoNpInYRwTA9yfWgkGACOk7vyndJk0rFupeNPsz4G+4/cKo8RCDiMXFls0C0JdluKuCNZpPPDCOOGRo/uKbNNSlD0h6WnuXon5dxC456J53HyJN3eiNpES3DYA4t2FRw7H4OcgAj+NUL8ObL+fXT3S1SspdAwwLwwxP5imsBDRbQll6QfohpiYWOb7qq2wgDg4zLNhdgHYjzo1B/BBw8VVC3xc1eGmHSit0wwwxqhW0tTQq5eDjGXjcuH+RccgzskCV4DV/kyy650IQ2fJer1HjV95PptHWGddfub607rmuJaxJt6K3qNNKVMoJ5Oa0VrL/grToa1craMyVmmLny99r5hBrIkpocNRHEjpXyC2saRJaw+/SrY0yTz+4HH3LMEXskQrMZy5t6ea5ttBh8nu0RnjriLRwRt7N7x4aifQbQsFcnAHR5hejE5ddfaop+dwxrSbSbAY8AzxsIUS8o/P4yRzBnIWJ9pHsie2f8G1HL+gV/S7ydXDY557RS2pIGhRG7mrG53NlcyeDfqBdgBiMbgwB3EKedQHRmvBNLYxLWjzFhqxJGh8eebLKdIz8pLBbDd/EfZrGsdWLHXJzQVhgw0kvEyi4Nz6vMsj1wIDAQABo4IBnTCCAZkwCQYDVR0TBAIwADARBglghkgBhvhCAQEEBAMCBkAwMwYJYIZIAYb4QgENBCYWJE9wZW5TU0wgR2VuZXJhdGVkIFNlcnZlciBDZXJ0aWZpY2F0ZTAdBgNVHQ4EFgQU9k21J6NamOapnKsvDOdaMgx2yckwgdQGA1UdIwSBzDCByYAUheDIC8s3tQVysz1yc27KXoWOJ5ChgZqkgZcwgZQxCzAJBgNVBAYTAlVTMREwDwYDVQQIDAhNYXJ5bGFuZDESMBAGA1UEBwwJQkFMVElNT1JFMRYwFAYDVQQKDA1Pbnl4SGVhbHRoLmlvMRAwDgYDVQQLDAdEYVZpbmNpMRIwEAYDVQQDDAljYS1zZXJ2ZXIxIDAeBgkqhkiG9w0BCQEWEXN1cHBvcnRAc2FmaGlyLmlvghR+2HAsO5YuwZbFABlmBbNOsnjbozAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwKQYDVR0RBCIwIIcEwKgAcocECgACD4ISc2VydmVyLmV4YW1wbGUuY29tMA0GCSqGSIb3DQEBCwUAA4ICAQBqgzWlyKc7efnuu3o5RQlFhlFHsrqER9lHY5De7593fY4lccnmSEQ64zXUNHMm+27RTxsHcNVegisNxXXhXQq6/qWnmxGCVLv82AECRP9gT+uCf7ERejFwmpVZNdXDCjUbesreVhlxuPKNV/NTSGnkqlgB4qYFjChV/a6n9OKtjeQwFskW0g2nNqax8wmWd5WHwwP5lbtE95PUdfnbVpyZTZYT/Ik1/jSpOzh9Njmy0gCX3OyX7kD2z2dAI/GaDvFB4UeSaZh8bHTSd7bKEvdoKNFVSgixW32Vg0qzcoEbOS6hkalJJoZ5riHj9WuKJz/bkKxluNoWGzWG5om3/JJ+RWcCKR5xDG0/+PLulXQlVj4hNxqxj4JHjBvvsvqbLoLrmWoP8nzVPli2mP8jsfHV2r9/EgNYc524FUUNywIp8tlzgu0PqjJslkgalyg/SjJGXolecBqnEbsO+Z0HIjZAXXh7VihHB4XMrYaJe5r7Go9rfEQ1R6haR8GxqMDnSf47YArr7eEb7WaR6fLvsHGxF7nuNEBCf6H1xTgZZ2VpPF8YaR+EZ9bt0xsGNcrkBf1BqWtjd3M9ZMjfP5Yid5eTBLl1RNuYlUW+021qDir5Vfh7bSHJtn+ld8m4ctdgEbn+o5t/EGgJUqMkQGN079cKRqzvauPLsGaFv+28rA2KDQ=="
* extension[secure-exchange-artifacts][=].extension[expirationDate].valueDateTime = "2024-08-10T15:00:00.000Z"
* connectionType = $ConnectionTypeCS#hl7-fhir-rest
* payloadType = $DataAbsentReasonCS#not-applicable
* payloadMimeType[+] = $BCP13#application/fhir+json
* payloadMimeType[+] = $BCP13#application/fhir+xml
* address = "https://p2p.diamondonyx.example.com/mtlsendpoint"
* managingOrganization = Reference(diamondonyxhealth2)


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-Rel-Location.fsh


Instance: HansSoloRole
InstanceOf: NdhPractitionerRole
Description: "Solo practitioner practice in his own clinic"
Usage: #example
* meta.profile = Canonical(NdhPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* code = $NdhPractitionerRoleCS#ph
* code = PractitionerRoleCS#ph
* healthcareService = Reference(HansSoloService)
* extension[network].valueReference = Reference(BlueCrossBlueShield-CT-PPO)
* location[+] = Reference(HansSoloClinic)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
//* organization = Reference(BurrClinic)
* practitioner = Reference(HansSolo)
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.hanssolo.com"
* telecom[=].rank = 1
* endpoint[0] = Reference(HansSoloDirectTrustEndpointReferrals)
* endpoint[+] = Reference(HansSoloPatientAccessEndpoint)

Instance: HansSoloService
InstanceOf: NdhHealthcareService
Description: "Hans Solo Services"
Usage: #example
* meta.profile = Canonical(NdhHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $DeliveryMethodCS#physical
* category = $NdhHealthcareServiceCategoryCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* location[0] = Reference(HansSoloClinic) 
* extension[fundingSource].extension[fundingOrganization].valueReference = Reference(HamiltonClinic)
* extension[fundingSource].extension[fundingSource].valueString = "Private"
* telecom[0].extension[language-speak][+].valueCode = #en-US

Instance: HansSoloClinic
InstanceOf: NdhLocation
Description: "Location of Hans Solo's clinic"
Usage: #example
* meta.profile = Canonical(NdhLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#PC
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NdhAcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[=].extension[contactpoint-availabletime][=].extension[daysOfWeek][+].valueCode  = #tue
* telecom[=].extension[contactpoint-availabletime][=].extension[daysOfWeek][+].valueCode  = #wed
* telecom[=].extension[contactpoint-availabletime][=].extension[daysOfWeek][+].valueCode  = #thu
* telecom[=].extension[contactpoint-availabletime][=].extension[daysOfWeek][+].valueCode  = #fri 
* telecom[=].extension[contactpoint-availabletime][=].extension[availableStartTime].valueTime = 08:00:00
* telecom[=].extension[contactpoint-availabletime][=].extension[availableEndTime].valueTime = 17:00:00
* telecom[=].extension[via-intermediary][0].valueReference = Reference(HansSoloRole)
* telecom[+].system = #url
* telecom[=].value = "https://www.hanssolo.com"
* telecom[=].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[=].daysOfWeek[+] = #tue
* hoursOfOperation[=].daysOfWeek[+] = #wed
* hoursOfOperation[=].daysOfWeek[+] = #thu
* hoursOfOperation[=].daysOfWeek[+]  = #fri 
* hoursOfOperation[=].openingTime = 08:00:00
* hoursOfOperation[=].closingTime = 17:00:00


Instance: HansSoloRole2
InstanceOf: NdhPractitionerRole
Description: "Solo practitioner has privileges at a hospital"
Usage: #example
* meta.profile = Canonical(NdhPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = PractitionerRoleCS#ph
* healthcareService = Reference(BurrClinicServices)
* extension[network].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(BurrClinic)
* practitioner = Reference(HansSolo)
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.hanssolo.com"
* telecom[=].rank = 1

Instance: BlueCrossBlueShield-CT
InstanceOf: NdhInsurancePlan
Description: "Blue Cross Blue Shield of Connecticut"
Usage: #example
* meta.profile = Canonical(NdhInsurancePlan)
* meta.lastUpdated = "2023-06-30T13:26:22.0314215+00:00"
* identifier[+].system = "http://www.blue-cross-blueshied-ct-insurance.org"
* identifier[=].value = "BlueCrossBlueShield-CT-12345"
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "BlueCrossBlueShield-CT"
* status = #active
* type = $InsuranceProductTypeCS#commppo "Commercial PPO"
* name = "Blue Cross Blue Shied CT Insurance"
* ownedBy = Reference(BlueCrossBlueShield-CT-PPO)
* administeredBy = Reference(BlueCrossBlueShield-CT-ORG)
* network = Reference(BlueCrossBlueShield-CT-PPO)
// plan.identifier.value = "Plan-123"
//* plan.type.coding.code = #highdeductable
//* plan.coverageArea = Reference(Location/coverageArea)
//* plan.network = Reference(BlueCrossBlueShield-CT-PPO)
//* plan.generalCost.type.coding.code = #copay
//* plan.generalCost.value = 30
//* plan.generalCost.comment = "$30 copay for office visit"


Instance: BlueCrossBlueShield-CT-PPO
InstanceOf: NdhNetwork
Description: "Blue Cross Blue Shield of Connecticut PPO Network"
Usage: #example
* meta.profile = Canonical(NdhNetwork)
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(BlueCrossBlueShield-CT-ORG)
* type = OrgTypeCS#ntwk "Network"
* name = "BlueCrossBlueShield CT PPO"
* identifier[0].system = "http://blue-cross-blue-shield-ct.org/network"
* identifier[=].value = "BlueCrossBlueShield-CT-PPO-12345"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "BlueCrossBlueShield-CT-PPO"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"

Instance: BlueCrossBlueShield-CT-ORG
InstanceOf: NdhOrganization
Description: "Organization Manage Blue Cross Blue Shield of Connecticut PPO Network"
Usage: #example
* meta.profile = Canonical(NdhOrganization) 
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "BlueCrossBlueShield CT Organization"
* type = OrgTypeCS#payer "Payer"
* extension[qualification][0].extension[code].valueCodeableConcept =   $NUCCProviderTaxonomy#305R00000X "Preferred Provider Organization"
* identifier[TID].system = "http://hl7.org.fhir/sid/us-ssn"
* identifier[TID].value = "123-45-7890"
* identifier[TID].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "BlueCrossBlueShield-CT-ORG"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* telecom[0].system = #phone
* telecom[=].value = "(123)-222-4444"
* telecom[=].rank = 2
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #tue
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #wed
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #thu
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #fri 
* telecom[=].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[=].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[+].system = #url
* telecom[=].value = "https://www.blue-cross-blue-shield-ct-org.com"
* telecom[=].rank = 1
* address.line[0] = "899 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-2345"
* extension[org-description].valueString = "Blue Cross Blue Shield CT is a leading provider of health and other insurance products."


Instance: HansSoloDirectTrustEndpointReferrals
InstanceOf: NdhEndpoint
Description: "Hans Solo Endpoint for DirectTrust"
Usage: #example
* meta.profile = Canonical(NdhEndpoint)
* meta.lastUpdated = "2023-07-01T13:26:22.0314215+00:00"
* language = #en-US
* status = #active
* name = "Hans Solo Endpoint for DirectTrust"
* connectionType = $ConnectionTypeCS#direct-project
* payloadType = $DataAbsentReasonCS#not-applicable
* extension[endpoint-nonfhir-usecase].extension[endpointUsecasetype].valueCodeableConcept = NdhDirectTrustEndpointUsecaseCS#referrals
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[ig-publication].valueUri = "https://directtrust.org/standards/ix4hs-example/referralsIG.pdf"
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[ig-name].valueString = "DirectTrust social care referrals IG"
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[ig-version].valueString = "1.0 Trial Implementation"
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[supported-ig-actor][0].extension[ig-actor-name].valueString = "Referral Recipient"
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[supported-ig-actor][0].extension[ig-actor].valueCodeableConcept = IgActorCS#recipient
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[supported-ig-actor][0].extension[payload-and-mimetype][0].extension[payload].valueCodeableConcept = NdhDirectTrustPayloadTypeCS#urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[supported-ig-actor][0].extension[payload-and-mimetype][0].extension[mimeType][0].valueCode = $BCP13#application/cda+xml
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[supported-ig-actor][0].extension[payload-and-mimetype][0].extension[mimeType][+].valueCode = $BCP13#application/fhir+xml
* extension[endpoint-nonfhir-usecase].extension[ig-supported].extension[supported-ig-actor][0].extension[payload-and-mimetype][0].extension[mimeType][+].valueCode = $BCP13#application/fhir+json
* address = "hanssolodirectendpoint@hanssolo.org"


Instance: HansSoloPatientAccessEndpoint
InstanceOf: NdhEndpoint
Description: "Hans Solo Endpoint for Patient Access"
Usage: #example
* meta.profile = Canonical(NdhEndpoint)
* meta.lastUpdated = "2023-07-01T13:26:22.0314215+00:00"
* language = #en-US
* status = #active
* name = "Hans Solo Endpoint for Patient Access"
* connectionType = $ConnectionTypeCS#hl7-fhir-rest
* payloadType = $DataAbsentReasonCS#not-applicable
* payloadMimeType[+] = $BCP13#application/fhir+json
* payloadMimeType[+] = $BCP13#application/fhir+xml
* extension[endpoint-usecase][0].extension[endpointUsecasetype].valueCodeableConcept = NdhFhirEndpointUseCaseCS#patientAccess
* address = "hanssolo-patient-access-endpoint@hanssolo.org"

---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-Rel-PractitionerRole.fsh

/*
Instance: PatientAccessEndpoint
InstanceOf: NdhNdApiEndpoint
Description: "Patient Access Endpoint"
Usage: #example
* meta.profile = Canonical(NdhNdApiEndpoint) 
* meta.lastUpdated = "2023-07-20T15:00:00.0000000+00:00"
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* language = #en-US
* status = #active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "PatientAccessEndpoint"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active 
* name = "Endpoint for Patient Access"
* connectionType = http://terminology.hl7.org/CodeSystem/endpoint-connection-type#hl7-fhir-rest
* payloadType = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointPayloadTypeCS#NA
* payloadMimeType[+] = urn:ietf:bcp:13#application/fhir+json
* payloadMimeType[+] = urn:ietf:bcp:13#application/fhir+xml
* address = "https://PatientAccessEndpoint.com"
* extension[endpoint-usecase][0].extension[endpointUsecasetype].valueCodeableConcept = NdhFhirEndpointUseCaseCS#patientAccess
* extension[dynamic-registration][0].extension[trustProfile].valueCodeableConcept = TrustProfileCS#smart
* extension[trust-framework][0].extension[trustFrameworkType].valueCodeableConcept = TrustFrameworkTypeCS#Exchange
* extension[connection-type-version].valueCodeableConcept = http://hl7.org/fhir/FHIR-version#4.0.1

Instance: SteveHardy
InstanceOf: NdhNdApiPractitioner
Description: "Steve Hardy MD"
Usage: #example
* meta.profile = Canonical(NdhNdApiPractitioner)
* meta.lastUpdated = "2023-07-21T10:30:45.5555555+00:00"
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* language = #en-US
* active = true
* identifier[NPI].value = "1003310905"
* identifier[NPI].system = $NPICS
* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "SteveHardy"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active 
* name.text = "Steve Hardy, MD"
* name.family = "Steve"
* name.given[+] = "Hardy"
* qualification[+].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* qualification[=].code.text = "Board Certified Internal Medicine"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#CT
*/


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-Relationship.fsh


Instance: Network1
InstanceOf: NdhNdApiNetwork
Description: "Network1"
Usage: #example
* meta.profile = Canonical(NdhNdApiNetwork)
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* extension[organization-period].valuePeriod.start = "2023-01-01T00:00:00.0000000+00:00"
//* extension[organization-period].valuePeriod.end = "2023-12-31T23:59:59.0000000+00:00"
* partOf = Reference(OrgManageNetwork)
* type = OrgTypeCS#ntwk "Network"
* name = "Network1"
* identifier[0].system = "http://acme.org/network"
* identifier[=].value = "AcmeNetwork1"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "Network1"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"


Instance: MedicareAdvantage
InstanceOf: NdhNdApiInsurancePlan
Description: "Medicare Advantage Plan"
Usage: #example
* meta.profile = Canonical(NdhNdApiInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* language = #en-US
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "MedicareAdvantage"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "Medicare Advantage Plan"
* type = $InsuranceProductTypeCS#mediadv "Medicare Advantage"
//* plan.type = InsurancePlanTypeCS#mediadv "Medicare Advantage"
* ownedBy = Reference (OrgManageNetwork)
* administeredBy = Reference (OrgManageNetwork)
* network[0] = Reference(Network1)
//* coverageArea = Reference(StateOfCTLocation)
//* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: Network2
InstanceOf: NdhNdApiNetwork
Description: "Network2"
Usage: #example
* meta.profile = Canonical(NdhNdApiNetwork)
* meta.lastUpdated = "2024-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* extension[organization-period].valuePeriod.start = "2024-01-01T00:00:00.0000000+00:00"
//* extension[organization-period].valuePeriod.end = "2024-12-31T23:59:59.0000000+00:00"
* partOf = Reference(OrgManageNetwork)
* type = OrgTypeCS#ntwk "Network"
* name = "Network2"
* identifier[0].system = "http://acme.org/network"
* identifier[=].value = "AcmeNetwork2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "Network2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"


Instance: MedicareAdvantageHMO
InstanceOf: NdhNdApiInsurancePlan
Description: "Medicare Advantage HMO"
Usage: #example
* meta.profile = Canonical(NdhNdApiInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* language = #en-US
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "MedicareAdvantageHMO"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "Medicare Advantage Plan"
* type = $InsuranceProductTypeCS#mediadvhmo "Medicare Advantage HMO"
//* plan.type = InsurancePlanTypeCS#mediadv "Medicare Advantage"
* ownedBy = Reference (OrgManageNetwork)
* administeredBy = Reference (OrgManageNetwork)
* network[0] = Reference(Network2)
//* coverageArea = Reference(StateOfCTLocation)
//* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: OrgManageNetwork
InstanceOf: NdhNdApiOrganization
Description: "Organization Manage Payer Network"
Usage: #example
* meta.profile = Canonical(NdhNdApiOrganization) 
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Organization Manage Payer Network (OMPN)"
* type = OrgTypeCS#payer "Payer"
* extension[qualification][0].extension[code].valueCodeableConcept =   $NUCCProviderTaxonomy#305R00000X "Preferred Provider Organization"
* identifier[TID].system = "http://hl7.org.fhir/sid/us-ssn"
* identifier[TID].value = "123-45-6789"
* identifier[TID].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrgManageNetwork"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* telecom[0].system = #phone
* telecom[=].value = "(123)-222-3333"
* telecom[=].rank = 2
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #tue
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #wed
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #thu
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #fri 
* telecom[=].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[=].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[+].system = #url
* telecom[=].value = "https://www.org-manage-network.com"
* telecom[=].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"
* extension[org-description].valueString = "OMPN of CT is a leading provider of health and other insurance products."

Instance: PractitionerOneWithNetwork1AndNetwork2
InstanceOf: NdhNdApiPractitioner
Description: "Practitioner1 with Network1 and Network2"
Usage: #example
* meta.profile = Canonical(NdhNdApiPractitioner)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI].value = "1003357849"
//* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "PractitionerOneWithNetwork1AndNetwork2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
//* identifier.extension[identifier-status].valueCode = $CredentialStatusCS#active
* name.text = "PractitionerOne Network1And2024, MD"
* name.family = "PractitionerOne"
* name.given[+] = "Network1AndNetwork2"
* qualification[0].code = $V2table0360CS#MD
* qualification[=].issuer.display = "State of Illinois"
* qualification[=].code.text = "MD"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[+].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* qualification[=].code.text = "Board Certified Internal Medicine"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[+].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* qualification[=].code.text = "Board Certified Cardiovascular Disease"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL  
* communication[+].coding = $BCP47#en

Instance: PractitionerTwoWithNetwork1LeftAfterSixMonths
InstanceOf: NdhNdApiPractitioner
Description: "Practitioner2 with Network 2023 for first six months"
Usage: #example
* meta.profile = Canonical(NdhNdApiPractitioner)
* meta.lastUpdated = "2022-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI].value = "1003487224"
* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "PractitionerTwoWithNetwork1LeftAfterSixMonths"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name.text = "PractitionerTwo Network1, MD"
* name.family = "PractitionerTwo"
* name.given[+] = "Network1"
* qualification[0].code = $V2table0360CS#MD "Doctor of Medicine"
* qualification[=].code.text = "MD"
* qualification[=].issuer.display = "State of Illinois"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[+].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[=].code.text = "Board Certified Internal Medicine"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[+].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[=].code.text = "Board Certified Cardiovascular Disease"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* qualification[=].extension[practitioner-qualification].extension[status].valueCode = $NdhQualificationStatusCS#active 
* qualification[=].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL  
* communication[+].coding = $BCP47#en


Instance: PractitionerOneNetwork1Role
InstanceOf: NdhNdApiPractitionerRole
Description: "PractitionerOne Network 2023 PractitionerRole"
Usage: #example
* meta.profile = Canonical(NdhNdApiPractitionerRole)
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* extension[network].valueReference = Reference(Network1)
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "PractitionerOneNetwork1Role"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
//* period.start = "2023-01-01T00:00:00.0000000+00:00"
* period.end = "2023-12-31T23:59:59.0000000+00:00"
* practitioner = Reference(PractitionerOneWithNetwork1AndNetwork2)
* telecom[+].system = #url
* telecom[=].value = "https://www.PractitionerOneNetwork1Role.com"
* telecom[=].rank = 1

Instance: PractitionerOneNetwork2Role
InstanceOf: NdhNdApiPractitionerRole
Description: "PractitionerOne Network 2024 PractitionerRole"
Usage: #example
* meta.profile = Canonical(NdhNdApiPractitionerRole)
* meta.lastUpdated = "2024-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* extension[network].valueReference = Reference(Network2)
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "PractitionerOneNetwork2Role"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* period.start = "2023-06-01T00:00:00.0000000+00:00"
//* period.end = "2024-12-31T23:59:59.0000000+00:00"
* practitioner = Reference(PractitionerOneWithNetwork1AndNetwork2)
* telecom[+].system = #url
* telecom[=].value = "https://www.PractitionerOneNetwork2Role.com"
* telecom[=].rank = 1

Instance: PractitionerTwoNetwork1LeftAfterSixMonthRole
InstanceOf: NdhNdApiPractitionerRole
Description: "PractitionerTwo Network 2023 First Six Months PractitionerRole"
Usage: #example
* meta.profile = Canonical(NdhNdApiPractitionerRole)
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* extension[network].valueReference = Reference(Network1)
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "PractitionerTwoNetwork1LeftAfterSixMonthRole"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
//* period.start = "2023-01-01T00:00:00.0000000+00:00"
* period.end = "2023-06-30T23:59:59.0000000+00:00"
* practitioner = Reference(PractitionerTwoWithNetwork1LeftAfterSixMonths)
* telecom[+].system = #url
* telecom[=].value = "https://www.PractitionerTwoNetwork1LeftAfterSixMonthRole.com"
* telecom[=].rank = 1



Instance: OrgOneWithNetwork1AndNetwork2
InstanceOf: NdhNdApiOrganization
Description: "Organization participating in Network1 and Network2"
Usage: #example
* meta.profile = Canonical(NdhNdApiOrganization) 
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "OrgOneWithNetwork1AndNetwork2"
* type = OrgTypeCS#fac "Facility"
* extension[qualification][0].extension[code].valueCodeableConcept =   $NUCCProviderTaxonomy#282N00000X "General Acute Care Hospital"
//* identifier[NPI].system = "http://hl7.org.fhir/sid/us-npi"
* identifier[NPI].value = "1336635499"
* identifier[NPI].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrgOneWithNetwork1AndNetwork2"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* telecom[0].system = #phone
* telecom[=].value = "(123)-333-3333"
* telecom[=].rank = 2
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #tue
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #wed
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #thu
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #fri 
* telecom[=].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[=].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[+].system = #url
* telecom[=].value = "https://www.org-one-with-network1-and-network2.com"
* telecom[=].rank = 1
* address.line[0] = "490 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"
* extension[org-description].valueString = "General Acute Care Hospital participating in Network1 and Network2"


Instance: OrgOneNetwork1Affiliation
InstanceOf: NdhNdApiOrganizationAffiliation
Description: "Organization Affiliation for OrgOne in Network1"
Usage: #example
* meta.profile =  Canonical(NdhNdApiOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrgOneNetwork1Affiliation"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* active = true
//* period.start = "2023-01-01T00:00:00.0000000+00:00"
* period.end = "2023-12-31T23:59:59.0000000+00:00"
* network = Reference(Network1)
* organization = Reference(OrgOneWithNetwork1AndNetwork2)
* code[0] = OrganizationAffiliationRoleCS#hospital "Hospital"
//* participatingOrganization = Reference (OrgOneWithNetwork1AndNetwork2)
//* healthcareService = Reference(PharmChainRetailService)
//* location[0] = Reference(PharmLoc1)
//* location[1] = Reference(PharmLoc2)
//* code[0] = $NdhOrganizationAffiliationRoleCS#pharmacy "Pharmacy"
//* code[+] = $NdhOrganizationAffiliationRoleForHieCS#HieInitiator "HIE Initiator"
//* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#incomplete

Instance: OrgOneNetwork2Affiliation
InstanceOf: NdhNdApiOrganizationAffiliation
Description: "Organization Affiliation for OrgOne in Network2"
Usage: #example
* meta.profile =  Canonical(NdhNdApiOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrgOneNetwork2Affiliation"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* active = true
* period.start = "2023-06-01T00:00:00.0000000+00:00"
//* period.end = "2023-06-30T23:59:59.0000000+00:00"
* network = Reference(Network2)
* organization = Reference(OrgOneWithNetwork1AndNetwork2)
* code[0] = OrganizationAffiliationRoleCS#hospital "Hospital"
//* participatingOrganization = Reference (OrgOneWithNetwork1AndNetwork2)
//* healthcareService = Reference(PharmChainRetailService)
//* location[0] = Reference(PharmLoc1)
//* location[1] = Reference(PharmLoc2)
//* code[0] = $NdhOrganizationAffiliationRoleCS#pharmacy "Pharmacy"
//* code[+] = $NdhOrganizationAffiliationRoleForHieCS#HieInitiator "HIE Initiator"
//* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#incomplete


Instance: HealthcareServiceHomelessAssistance
InstanceOf: NdhNdApiHealthcareService
Description: "Healthcare Service for Homeless Assistance"
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2022-12-20T19:28:24.671+00:00"
//* meta.source = "#5W4kw8uMs4mA7G1S"
* meta.profile = Canonical(NdhNdApiHealthcareService)
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "HealthcareServiceHomelessAssistance"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[network][0].valueReference = Reference(SocialServiceHousingNetwork)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NdhAcceptingPatientsCS#newpt
//* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $DeliveryMethodCS#physical "Physical"
* extension[social-service-requirement].extension[employment-status].valueCodeableConcept = $V20066EmploymentStatusCS#3 "Unemployed"
* active = true
* providedBy = Reference(Organization/OrganizationWelcomeHome) "Welcome Home"
* category = HealthcareServiceCategoryCS#housing "Housing"
* category.text = "Housing"
* type[0] = $ServiceTypeCS#127 "Homelessness Support"
* location = Reference(Location/LocationWelcomeHome) "Welcome Home"
* name = "Welcome Home"
* telecom[0].system = #phone
* telecom[=].value = "410.237.8592"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1543"
* telecom[=].use = #work
* appointmentRequired = false
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.daysOfWeek[+] = #sat
* availableTime.daysOfWeek[+] = #sun
* availableTime.allDay = false
* availableTime.availableStartTime = "08:00:00"
* availableTime.availableEndTime = "18:00:00"

Instance: LocationWelcomeHome
InstanceOf: NdhNdApiLocation
Description: "Location for Welcome Home"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:44:22.239+00:00"
//* meta.source = "#yfN9tWGDGnomhl8A"
* meta.profile = Canonical(NdhNdApiLocation)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
//* identifier[0].use = #secondary
//* identifier[=].system = "https://hope-dispensary-of-greater-bridgeport.com"
//* identifier[=].value = "main campus"
//* identifier[=].assigner = Reference(Organization/Organization-Social-Towson-Food) "TOWSON FOOD DISPENSARY"
//* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "LocationWelcomeHome"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* status = #active
* name = "Welcome Home"
* description = "Welcome Home is a location for homeless assistance."
* type = $V3RoleCode#CSC "community service center"
* type.text = "Community Service Center"
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[=].system = #phone
* telecom[=].value = "517-332-4663"
* telecom[=].use = #work
* telecom[+].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[=].system = #fax
* telecom[=].value = "1-443-786-1543"
* telecom[=].use = #work
* address.use = #work
* address.type = #both
* address.text = "500 W Maple Street, Lansing, MI 48906"
* address.line = "500 W Maple Street"
* address.city = "Lansing"
* address.state = "MI"
* address.postalCode = "48906"
* address.country = "USA"
* position.longitude = -84.56037
* position.latitude = 42.746978
* managingOrganization = Reference(OrganizationWelcomeHome) "Welcome Home"
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
//* hoursOfOperation.daysOfWeek[+] = #sat
//* hoursOfOperation.daysOfWeek[+] = #sun
* hoursOfOperation.allDay = true
* availabilityExceptions = "visiting hours from 9:00 am- 5:00 pm"


Instance: OrganizationWelcomeHome
InstanceOf: NdhNdApiOrganization
Description: "Organization for Welcome Home (Homeless Assistance)"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:45:21.526+00:00"
//* meta.source = "#054uQQFhinTrMfW0"
* meta.profile = Canonical(NdhNdApiOrganization)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[TID].use = #official
//* identifier[TID].system = "http://hl7.org/fhir/sid/us-ssn"
* identifier[TID].value = "38-3099281"
//* identifier[TID].assigner.display = "Centers for Medicare and Medicaid Services"
* identifier[TID].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrganizationWelcomeHome"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* active = true
* type = OrgTypeCS#comm "Community"
* type.text = "A community based organization for social services"
* name = "Welcome Home"
* telecom[0].system = #phone
* telecom[=].value = "517-332-4663"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1542"
* telecom[=].use = #work
* address.extension[geolocation].extension[latitude].valueDecimal = 42.746978
* address.extension[geolocation].extension[longitude].valueDecimal = -84.56037
* address.use = #work
* address.type = #both
* address.text = "500 W Maple Street, Lansing, MI 48906"
* address.line = "500 W Maple Street"
* address.city = "Lansing"
* address.state = "MI"
* address.postalCode = "48906"
* address.country = "USA"
//* contact.purpose = $ContactEntityType#ADMIN "Administrative"
//* contact.name.use = #official
//* contact.name.text = "HERROL BLAKE"
//* contact.name.family = "Blake"
//* contact.name.given = "Herrol"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon "Monday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #tue "Tuesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #wed "Wednesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #thu "Thursday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #fri "Friday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sat "Saturday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sun "Sunday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime][0].valueTime = "07:00:00"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime][0].valueTime = "18:00:00"
* contact.telecom.system = #phone
* contact.telecom.value = "410.237.8591"
* contact.telecom.use = #work
* contact.address.use = #work
* contact.address.type = #both
* contact.address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
* contact.address.line = "4803 VALLEY VIEW AVE"
* contact.address.city = "BALTIMORE"
* contact.address.state = "MD"
* contact.address.postalCode = "21206"
* contact.address.country = "USA"


Instance: SocialServiceHousingNetwork
InstanceOf: NdhNdApiNetwork
Description: "Hub for Social Service Housing"
Usage: #example
* meta.profile = Canonical(NdhNdApiNetwork)
* meta.lastUpdated = "2023-06-25T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* extension[organization-period].valuePeriod.start = "2023-01-01T00:00:00.0000000+00:00"
//* extension[organization-period].valuePeriod.end = "2023-12-31T23:59:59.0000000+00:00"
* partOf = Reference(OrgHousingAssistanceHubManagement)
* type = OrgTypeCS#ntwk "Network"
* name = "Social Service Housing Hub"
* identifier[0].system = "http://housingAssistanceHubManagement.org"
* identifier[=].value = "SocialServiceHousingNetwork"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "SocialServiceHousingNetwork"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"



Instance: OrgHousingAssistanceHubManagement
InstanceOf: NdhNdApiOrganization
Description: "Organization that manages the Housing Assistance Hub"
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2022-12-20T22:45:21.526+00:00"
//* meta.source = "#054uQQFhinTrMfW0"
* meta.profile = Canonical(NdhNdApiOrganization)
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
//* identifier[TID].use = #official
//* identifier[TID].system = "http://hl7.org/fhir/sid/us-ssn"
//* identifier[TID].value = "38-3099333"
//* identifier[TID].assigner.display = "Centers for Medicare and Medicaid Services"
//* identifier[TID].extension[identifier-status].valueCode = $CredentialStatusCS#active
* identifier[+].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "OrgHousingAssistanceHubManagement"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* active = true
* type = OrgTypeCS#gov "Government"
* type.text = "A government agency for social services"
* name = "Housing Assistance Hub Management"
* telecom[0].system = #phone
* telecom[=].value = "517-332-1234"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "1-443-786-1234"
* telecom[=].use = #work
//* address.extension[geolocation].extension[latitude].valueDecimal = 42.746978
//* address.extension[geolocation].extension[longitude].valueDecimal = -84.56037
//* address.use = #work
//* address.type = #both
//* address.text = "500 W Maple Street, Lansing, MI 48906"
//* address.line = "500 W Maple Street"
//* address.city = "Lansing"
//* address.state = "MI"
//* address.postalCode = "48906"
//* address.country = "USA"
//* contact.purpose = $ContactEntityType#ADMIN "Administrative"
//* contact.name.use = #official
//* contact.name.text = "HERROL BLAKE"
//* contact.name.family = "Blake"
//* contact.name.given = "Herrol"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon "Monday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #tue "Tuesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #wed "Wednesday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #thu "Thursday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #fri "Friday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sat "Saturday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode = #sun "Sunday"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime][0].valueTime = "07:00:00"
* contact[0].telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime][0].valueTime = "18:00:00"
* contact.telecom.system = #phone
* contact.telecom.value = "410.237.8591"
* contact.telecom.use = #work
//* contact.address.use = #work
//* contact.address.type = #both
//* contact.address.text = "4803 VALLEY VIEW AVE, BALTIMORE, MD 21206"
//* contact.address.line = "4803 VALLEY VIEW AVE"
//* contact.address.city = "BALTIMORE"
//* contact.address.state = "MD"
//* contact.address.postalCode = "21206"
//* contact.address.country = "USA"


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-Restriction.fsh

Instance: HealthcareServiceWomenShelterRestrictionElements
InstanceOf: NdhRestriction
Description: "Restriction for Women shelter healthcare service to restrict access to location and telecom"
Usage: #inline
* meta.profile = Canonical(NdhRestriction)
* status = #active
* scope = ConsentScopeNdhCS#directory-privacy
* scope.text = "Directory Privacy"
* category[0] = ConsentCategoryNdhCS#DRC
* category[0].text = "Directory Restriction"
* policyRule =  ConsentPolicyRulesCS#ndh-restriction
* policy.uri = "http://example.org/federal/policy#womans-shelter"
* provision.type = #deny
* provision.actor.role = $V3ParticipationType#IRCP "information recipient"
* provision.actor.reference.display = "Blue Team @ The W shelter (CareTeam)"
* extension[restrictFhirPath][0].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-restrictFhirPath"
* extension[restrictFhirPath][=].valueExpression.language = #text/fhirpath
* extension[restrictFhirPath][=].valueExpression.expression = "HealthcareService.location"
* extension[restrictFhirPath][+].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-restrictFhirPath"
* extension[restrictFhirPath][=].valueExpression.language = #text/fhirpath
* extension[restrictFhirPath][=].valueExpression.expression = "HealthcareService.telecom"
 

Instance: HealthcareServiceWomenShelter
InstanceOf: NdhNdApiHealthcareService
Description: "Women's shelter healthcare service"
Usage: #example
* meta.lastUpdated = "2023-06-04T13:26:22.0314215+00:00"
* meta.profile = Canonical(NdhNdApiHealthcareService)
* contained = HealthcareServiceWomenShelterRestrictionElements
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "HealthcareServiceWomenShelter"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* category = HealthcareServiceCategoryCS#other "Other"
* type = $ServiceTypeCS#233 "Abuse"
* type.text = "Women's shelter"
* location = Reference(LocationWomenShelter) "The W Womens Shelter"
* name = "Womens shelter"
* comment = "This is an example of a Women's shelter to demonstrate how to restrict multiple contents"
* telecom[0].system = #url
* telecom[=].value = "https://exmaple.org/The-W-shelter"
* telecom[=].system = #phone
* telecom[=].value = "555 wshelter"
* extension[usage-restriction].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-usage-restriction"
* extension[usage-restriction].valueReference = Reference(HealthcareServiceWomenShelterRestrictionElements)


Instance: LocationWomenShelterRestriction
InstanceOf: NdhRestriction
Description: "Restriction for Women shelter Location"
Usage: #inline
* meta.profile = Canonical(NdhRestriction)
* status = #active
* scope = ConsentScopeNdhCS#directory-privacy
* scope.text = "Directory Privacy"
* category[0] = ConsentCategoryNdhCS#DRC
* category[0].text = "Directory Restriction"
* policyRule =  ConsentPolicyRulesCS#ndh-restriction
* policy.uri = "http://example.org/federal/policy#womans-shelter"
* provision.type = #deny
* provision.actor.role = $V3ParticipationType#IRCP "information recipient"
* provision.actor.reference.display = "Blue Team @ The W shelter (CareTeam)"
* extension[restrictFhirPath][0].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-restrictFhirPath"
* extension[restrictFhirPath][=].valueExpression.language = #text/fhirpath
* extension[restrictFhirPath][=].valueExpression.expression = "Location.address"
* extension[restrictFhirPath][+].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-restrictFhirPath"
* extension[restrictFhirPath][=].valueExpression.language = #text/fhirpath
* extension[restrictFhirPath][=].valueExpression.expression = "Location.telecom"


Instance: LocationWomenShelter
InstanceOf: NdhNdApiLocation
Description: "Women's shelter Location"
Usage: #example
* meta.lastUpdated = "2023-06-04T13:26:22.0314215+00:00"
* meta.profile = Canonical(NdhNdApiLocation)
* contained = LocationWomenShelterRestriction
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "LocationWomenShelter"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* status = #active
* name = "The W Womens Shelter"
* telecom[0].system = #url
* telecom[=].value = "https://exmaple.org/The-W-shelter"
* telecom[=].system = #phone
* telecom[=].value = "555 administration"
* address.line = "3300 Washtenaw Avenue, Suite 227"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "48104"
* address.country = "USA"
* extension[usage-restriction].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-usage-restriction"
* extension[usage-restriction].valueReference = Reference(LocationWomenShelterRestriction)

Instance: WomenShelterRestrictionAll
InstanceOf: NdhRestriction
Description: "Restriction for Women shelter healthcare service entire resource"
Usage: #inline
* meta.profile = Canonical(NdhRestriction)
* status = #active
* scope = ConsentScopeNdhCS#directory-privacy
* scope.text = "Directory Privacy"
* category[0] = ConsentCategoryNdhCS#DRC
* category[0].text = "Directory Restriction"
* policyRule =  ConsentPolicyRulesCS#ndh-restriction
* policy.uri = "http://example.org/federal/policy#womans-shelter"
* provision.type = #deny
* provision.actor.role = $V3ParticipationType#IRCP "information recipient"
* provision.actor.reference.display = "Blue Team @ The W shelter (CareTeam)"


Instance: HealthcareServiceWomenShelterAll
InstanceOf: NdhNdApiHealthcareService
Description: "Women's shelter healthcare service"
Usage: #example
* meta.lastUpdated = "2023-06-04T13:26:22.0314215+00:00"
* meta.profile = Canonical(NdhNdApiHealthcareService)
* contained = WomenShelterRestrictionAll
* active = true
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "HealthcareServiceWomenShelterAll"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* category = HealthcareServiceCategoryCS#other "Other"
* type = $ServiceTypeCS#233 "Abuse"
* type.text = "Women's shelter"
* location = Reference(LocationWomenShelterAll) "The W Womens Shelter"
* name = "Womens shelter"
* comment = "This is an example of a Women's shelter to demonstrate how to restrict entire resource"
* telecom[0].system = #url
* telecom[=].value = "https://exmaple.org/The-W-shelter"
* telecom[=].system = #phone
* telecom[=].value = "666 wshelter"
* extension[usage-restriction].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-usage-restriction"
* extension[usage-restriction].valueReference = Reference(WomenShelterRestrictionAll)


Instance: LocationWomenShelterAll
InstanceOf: NdhNdApiLocation
Description: "Women's shelter Location"
Usage: #example
* meta.lastUpdated = "2023-06-04T13:26:22.0314215+00:00"
* meta.profile = Canonical(NdhNdApiLocation)
* contained = WomenShelterRestrictionAll
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[0].system = "http://www.ndh.org/identifiers"
* identifier[=].value = "LocationWomenShelter"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* status = #active
* name = "The W Womens Shelter"
* telecom[0].system = #url
* telecom[=].value = "https://exmaple.org/The-W-shelter"
* telecom[=].system = #phone
* telecom[=].value = "666 administration"
* address.line = "3300 Washtenaw Avenue, Suite 227"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "48104"
* address.country = "USA"
* extension[usage-restriction].url = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-usage-restriction"
* extension[usage-restriction].valueReference = Reference(WomenShelterRestrictionAll)



---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/usecaseExamples/Example-StateMedicaid.fsh

Instance: OrganizationStateMedicaidAgencyAlabama
InstanceOf: NdhNdApiOrganization
Description: "State Medicaid Agency Alabama"
Usage: #example
* meta.profile = Canonical(NdhNdApiOrganization)
* meta.lastUpdated = "2024-07-14T13:26:22.0314215+00:00"
* language = #en-US
* extension[verification-status].valueCodeableConcept = NdhVerificationStatusCS#complete "Complete"
* identifier[+].system = "http://www.ndh.org/identifiers/Organization"
* identifier[=].value = "StateMedicaidAgencyAlabama"
* identifier[=].extension[identifier-status].valueCode = $CredentialStatusCS#active
* name = "StateMedicaidAgencyAlabama"
* type = OrgTypeCS#gov "Government"
* type.text = "A government agency for social services"
* telecom[+].system = #email
* telecom[=].value = "gary.parker@medicaid.alabama.gov"
* telecom[+].system = #phone
* telecom[=].value = "334-242-5011"
//* endpoint[+] = Reference(EndpointAlambamaForClaimsData-CarinBB)
//* endpoint[+] = Reference(EndpointAlambamaForMemberHealthData-PDex)
//* endpoint[+] = Reference(EndpointAlambamaForPharmacyData-Pharmacy)


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/All-Aliases.fsh



//US Core
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $USCareTeam = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam

//Alias:  $US-core-provider-role-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
//Alias:  $US-core-provider-specialty-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty


//Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetype
//Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/StructureDefinition/digitalcertificate
//Alias: $digitalcertificateuse = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificateuse
//Alias: $digitalcertificatestandard = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatestandard
//Alias: $digitalcertificatetrustframework = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetrustframework


Alias:   $GeolocationExtension = http://hl7.org/fhir/StructureDefinition/geolocation  //defined in 4.3B
Alias:   $R4GeoJSONExtension = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias:   $LocationStatus = http://hl7.org/fhir/location-status 

Alias:   $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes //defined in 4.3B

Alias:   $HL7PractitionerRoleCS = http://terminology.hl7.org/CodeSystem/practitioner-role
Alias:   $HL7OrganizationRoleCS = http://hl7.org/fhir/organization-role

Alias:  $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy
Alias:  $NUCCProviderTaxonomyCS = http://terminology.hl7.org/CodeSystem/v3-nuccProviderCodes

Alias:   $ServiceTypeCS = http://terminology.hl7.org/CodeSystem/service-type 

Alias:  $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360 
Alias:  $V3ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason

Alias: $FHIRVersionCS = http://hl7.org/fhir/FHIR-version
Alias: $FHIRVersionVS = http://hl7.org/fhir/ValueSet/FHIR-version

Alias: $OrganizationPeriodExt = http://hl7.org/fhir/StructureDefinition/organization-period


Alias: $DaysOfWeekVS  = http://hl7.org/fhir/ValueSet/days-of-week
Alias: $paymentTypeVS = http://terminology.hl7.org/ValueSet/v2-0570

Alias: $VerificationTypeCS = http://terminology.hl7.org/CodeSystem/validation-type
//Alias: $verificationresult-primary-source-type = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
//Alias: $verificationresult-communication-method_1 = http://hl7.org/fhir/ValueSet/verificationresult-communication-method
Alias: $verificationresult-validation-type = http://hl7.org/fhir/ValueSet/verificationresult-validation-type
Alias: $VerificationFailureActionCS = http://terminology.hl7.org/CodeSystem/failure-action
Alias: $ValidationProcessCS = http://terminology.hl7.org/CodeSystem/validation-process
Alias: $VerificationResultNeedCS = http://terminology.hl7.org/CodeSystem/need
Alias: $VerificationResultStatusCS = http://hl7.org/fhir/CodeSystem/status


//from Plan net ????
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS



//???Alias: $MinValueSet =  http://hl7.org/fhir/us/ndh/ValueSet/EndpointConnectionTypeVS

//NDH Alias
Alias: $NdhCareTeam = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-CareTeam
Alias: $NdhEndpoint = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Endpoint
Alias: $NdhHealthcareService = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-HealthcareService
Alias: $NdhInsurancePlan = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-InsurancePlan
Alias: $NdhLocation = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Location
Alias: $NdhNetwork = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Network
Alias: $NdhOrganization = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Organization
Alias: $NdhOrganizationAffiliation = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-OrganizationAffiliation
Alias: $NdhPractitioner = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-Practitioner
Alias: $NdhPractitionerRole = http://hl7.org/fhir/us/ndh/StructureDefinition/ndh-PractitionerRole


Alias: $NdhAcceptingPatientsCS = http://hl7.org/fhir/us/ndh/CodeSystem/AcceptingPatientsCS
Alias: $NdhAccessibilityCS = http://hl7.org/fhir/us/ndh/CodeSystem/AccessibilityCS
Alias: $NdhEndpointConnectionTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointConnectionTypeCS
Alias: $NdhEndpointPayloadTypeCS   = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointPayloadTypeCS  
Alias: $NdhHealthcareServiceCategoryCS = http://hl7.org/fhir/us/ndh/CodeSystem/HealthcareServiceCategoryCS
//Alias: $NdhInsuranceProductTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/InsuranceProductTypeCS
Alias: $NdhInsurancePlanTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/InsurancePlanTypeCS
Alias: $NdhOrgTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrgTypeCS
Alias: $NdhOrgAliasTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrgAliasTypeCS
Alias: $NdhOrganizationAffiliationRoleCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrganizationAffiliationRoleCS
Alias: $NdhOrganizationAffiliationRoleForHieCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrganizationAffiliationRoleForHieCS
Alias: $NdhPractitionerRoleCS = http://hl7.org/fhir/us/ndh/CodeSystem/PractitionerRoleCS
Alias: $NdhQualificationStatusCS = http://hl7.org/fhir/us/ndh/CodeSystem/QualificationStatusCS
//Alias: $NdhValidationTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/ValidationTypeCS
Alias: $NdhVirtualModalitiesCS = http://hl7.org/fhir/us/ndh/CodeSystem/VirtualModalitiesCS
Alias: $NdhTrustFrameworkTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/TrustFrameworkTypeCS
Alias: $NdhPayerCharacteristicsCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhPayerCharacteristicsCS
Alias: $NdhSecureExchangeArtifactsCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhSecureExchangeArtifactsCS
Alias: $NdhAssociatedServersTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhAssociatedServersTypeCS

//Other Alias
Alias:   $USPSStateCS = https://www.usps.com/
Alias:   $USPSState = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias:   $BCP47 = urn:ietf:bcp:47
Alias:   $BCP13 = urn:ietf:bcp:13
Alias:   $V3MimeCS = https://terminology.hl7.org/CodeSystem-v3-mime
Alias:   $NPICS = http://hl7.org/fhir/sid/us-npi
Alias:   $V3RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias:   $ConnectionTypeCS = http://terminology.hl7.org/CodeSystem/endpoint-connection-type
Alias:   $loinc = http://loinc.org
Alias:   $paymentTypeVS = http://terminology.hl7.org/ValueSet/v2-0570
Alias:   $paymentTypeCS = http://terminology.hl7.org/CodeSystem/v2-0570
Alias:   $ConsentScopeCS = http://terminology.hl7.org/CodeSystem/consentscope
Alias:   $ConsentStateCS = http://hl7.org/fhir/consent-state-codes
Alias:   $ConsentPolicyCS = http://terminology.hl7.org/CodeSystem/consentpolicycodes
Alias:   $EndpointPayloadTypeVS = http://hl7.org/fhir/ValueSet/endpoint-payload-type
Alias:   $MiMeTypeVS = http://hl7.org/fhir/ValueSet/mimetypes
Alias:   $V3HL7FormatCodesVS = http://terminology.hl7.org/ValueSet/v3-HL7FormatCodes
Alias:   $HL7V3ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias:   $HL7ConsentCategoryVS = http://hl7.org/fhir/ValueSet/consent-category
Alias:   $IHEFormatCodeCS = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode
Alias:   $HL7DocumentFormatCodesCS = http://terminology.hl7.org/CodeSystem/v3-HL7DocumentFormatCodes
Alias:   $CareTeamCategoryVS = http://hl7.org/fhir/ValueSet/care-team-category
Alias:   $ServiceProvisionConditionsVS = http://hl7.org/fhir/ValueSet/service-provision-conditions
Alias:   $ConditionCode = http://hl7.org/fhir/ValueSet/condition-code //based on SNOMED CT
Alias:   $ProcedureCode = http://hl7.org/fhir/ValueSet/procedure-code //based on SNOMED CT
//Alias:   $ProgramVS = http://hl7.org/fhir/ValueSet/program
Alias:   $ServiceReferralMethodVS = http://hl7.org/fhir/ValueSet/service-referral-method
Alias:   $ConsentActionVS = http://hl7.org/fhir/ValueSet/consent-action
Alias:   $VerificationresultPrimarySourceTypeVS = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
Alias:   $LanguagesVS = http://hl7.org/fhir/ValueSet/languages
Alias:   $VerificationresultPrimarySourceTypeCS = http://terminology.hl7.org/CodeSystem/primary-source-type
Alias:   $ValidationstatusCS = http://terminology.hl7.org/CodeSystem/validation-status
Alias:   $V3ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType


Alias:   $practitionerQualificationTopic = http://ndh.org/topic/practitioner-qualification-create-modified-or-delete
Alias:   $webHookEndpoint = http://ndh.org/endpoint/webhook

Alias:   $ContactEntityType = http://terminology.hl7.org/CodeSystem/contactentity-type

Alias:   $IheMCSDEndpointTypesCS = https://profiles.ihe.net/ITI/mCSD/CodeSystem/MCSDEndpointTypes
Alias:   $ProgramCS = http://terminology.hl7.org/CodeSystem/program
Alias:   $ProgramVS = http://hl7.org/fhir/ValueSet/program
Alias:   $VerificationCommunicationMethodCS = http://terminology.hl7.org/CodeSystem/verificationresult-communication-method
Alias:   $VerificationresultCommunicationMethodVS = http://terminology.hl7.org/ValueSet/verificationresult-communication-method

Alias: $HealthcareProviderTaxonmyVS = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066
Alias: $V3ActCredentialedCareCodeVS = http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareCode
Alias: $HL7VS-degreeLicenseCertificate = http://terminology.hl7.org/ValueSet/v2-0360

Alias: $V3AdministrativeGender = http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $V20066EmploymentStatusCS = http://terminology.hl7.org/CodeSystem/v2-0066

Alias: $DataAbsentReasonCS = http://terminology.hl7.org/CodeSystem/data-absent-reason

Alias: $ILRSpeakingScaleCS = http://terminology.hl7.org/CodeSystem/ILRSpeakingSkillScale
Alias: $ILRReadingScaleVS = http://terminology.hl7.org/ValueSet/ILRSpeakingSkillScale
Alias: $CredentialStatusCS = http://terminology.hl7.org/CodeSystem/professional-credential-status
Alias: $IdentifierStatusVS = http://terminology.hl7.org/ValueSet/professional-credential-status
Alias: $DeliveryMethodVS = http://terminology.hl7.org/ValueSet/service-delivery-method
Alias: $DeliveryMethodCS = http://terminology.hl7.org/CodeSystem/service-delivery-method
Alias: $InsuranceCoverageTypeCS = http://terminology.hl7.org/CodeSystem/insurance-coverage-type
Alias: $InsuranceCoverageTypeVS = http://terminology.hl7.org/ValueSet/insurance-coverage-type
Alias: $InsurancePlanTypeCS = http://terminology.hl7.org/CodeSystem/insuranceplan-plan-type
Alias: $InsurancePlanTypeVS = http://terminology.hl7.org/ValueSet/insuranceplan-plan-type
Alias: $InsuranceProductTypeCS = http://terminology.hl7.org/CodeSystem/insurance-product-type
Alias: $InsuranceProductTypeVS = http://terminology.hl7.org/ValueSet/insurance-product-type


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/All-CapabilityStatement-Rules.fsh

// @Name:CapabilityStatement Rules
// @Description: Rules to populate a CapabilityStatement

Alias: $conf = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation

RuleSet:       CapabilityCommon
* jurisdiction        = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* status              = #active
* date                = "2022-11-01"
* publisher           = "HL7 International - Patient Administration Work Group"
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value  = "http://hl7.org/Special/committees/pafm"
* kind                = #requirements
* fhirVersion         = #4.0.1
* format[+]           = #xml
* format[+]           = #json
* meta.profile = "http://hl7.org/fhir/StructureDefinition/CapabilityStatement"


RuleSet: SupportedProfile(profile, conf)
* supportedProfile[+] = Canonical({profile})
  * extension[$conf].valueCode = {conf}

RuleSet: Interaction(code, conf, doc)
* interaction[+]
  * extension[$conf].valueCode = {conf}
  * code  = {code}
  * documentation = {doc}

RuleSet: SearchParam(name, def, type, conf, doc)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "http://hl7.org/fhir/SearchParameter/{def}"
  * type = {type}
  * documentation = {doc}

RuleSet: SearchParamNdh(name, def, type, conf, doc)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "http://hl7.org/fhir/us/ndh/SearchParameter/{def}"
  * type = {type}
  * documentation = {doc}

RuleSet: SearchInclude(include, conf)
* searchInclude[+] = {include}
  * extension[$conf].valueCode = {conf}

RuleSet: SearchRevInclude(revinclude, conf)
* searchRevInclude[+] = {revinclude}
  * extension[$conf].valueCode = {conf}

RuleSet: Operation(name, def, conf)
* operation[+]
  * extension[$conf].valueCode = {conf}
  * name = "{name}"
  * definition = "{def}"

/*

RuleSet: SupportResource (resource, expectation)
* rest.resource[+].type = #{resource}
* rest.resource[=].extension[0].url = $exp
* rest.resource[=].extension[0].valueCode = {expectation}

RuleSet: SupportProfile (profile, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].supportedProfile[+] = "{profile}"
* rest.resource[=].supportedProfile[=].extension[0].url = $exp
* rest.resource[=].supportedProfile[=].extension[0].valueCode = {expectation}


RuleSet: SupportInteraction (interaction, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].interaction[+].code = {interaction}
* rest.resource[=].interaction[=].extension[0].url = $exp
* rest.resource[=].interaction[=].extension[0].valueCode = {expectation}
*/





---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-CS.fsh

CodeSystem: AcceptingPatientsCS
Title: "Accepting Patients Codes Code System"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* #nopt	"Not Accepting" "Not accepting patients"
* #newpt "Accepting" "Accepting patients"
* #existptonly "Accepting existing patients" "Accepting existing patients"
* #existptfam "Accepting existing patients and their families" "Accepting existing patients and members of their families"
* ^caseSensitive = true

CodeSystem: AccessibilityCS
Title: "Accessibility Code System"
Description: "General categories of accommodations available."
* ^experimental = false
* #cultcomp	"Cultural competence"	"Provides services that meet the social, cultural, and linguistic needs of persons."
* #handiaccess	"handicap accessible"	"Provides access to persons with disabilities."
* #adacomp	"ADA compliant"	"Provides access which complies with the Americans with Disabilities Act and/or amendments."
* #pubtrans	"public transit options"	"Provides access using public transportation modes."
* #anssrvc	"answering service"	"Provides capability to communicate when intended recipient is not immediately available."
* #cognitive	"cognitive"	"Provides services for cognitively impaired persons."
* #mobility	"mobility"	"Provides services for mobility impaired persons."
* ^caseSensitive = true

/*
CodeSystem: CredentialStatusCS
Title: "Credential Status Code System"
Description: "This code system contains codes for indicating the status of a credential, such as an identifier or qualification."
* ^experimental = false
* #active	"active"	"The credential may be considered valid for use."
* #inactive "inactive"	"The credential may not be considered valid for use."
* #issued-in-error	"issued in error"	"The credential was mistakenly assigned and should not be considered valid for use."
* #revoked	"revoked"	"The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending	"pending"	"The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown	"unknown"	"The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true
*/

CodeSystem: ConsentScopeNdhCS
Title: "NDH ConsentScopeCodes Code System"
Description:  "This code system includes the Consent scope codes for National Healthcare Directory"
* ^experimental = false
* #directory-privacy "Directory Privacy Consent" "Global Use Agreement to access, use or disclose (share) information."
* ^caseSensitive = true

CodeSystem: ConsentPolicyRulesCS
Title: "National Healthcare Directory ConsentPolicyRules Code System"
Description:  "This code system includes Policy Rule codes."
* ^experimental = false
* #ndh-restriction "NDH Restriction" "NDH Agreement to access, use or disclose(share) information"
* #distributed-directory-restriction "Distributed Directory Restriction" "Distributed Directory Agreement to collect, access, use or disclose (share) information"
* ^caseSensitive = true

CodeSystem: ConsentCategoryNdhCS
Title: "National Healthcare Directory Consent Category Code System"
Description:  "This code system includes Directory Consent Category codes."
* ^experimental = false
* #DRC "Directory Restriction" "Directory Global Use Agreement to access, use or disclose (share) information"
* ^caseSensitive = true



CodeSystem: DigitalcertificateUseCS
Title: "Digitalcertificate Use Code System"
Description: "This code System includes the choice of use digital certification"
* ^experimental = false
* #signing "Signing" "A certificate issued for the purpose of digitally signing information to confirm the author and guarantee that the content has not been altered or corrupted since it was signed by use of a cryptographic hash."
* #encrypt "Encryption" "A certificate containing a public key that can encrypt or decrypt electronic messages, files, documents, or data transmissions, or establish or exchange a session key for these same purposes."
* #auth "Authentication" "A certificate which can be used to obtain assurance of the accuracy of the claimed identity of an entity."
* ^caseSensitive = true

/*
CodeSystem: DeliveryMethodCS
Title: "Delivery Methods Code System"
Description: "Categories of healthcare service delivery methods."
* ^experimental = false
* #virtual	"Virtual" "Delivery not requiring provider and patient to be physically co-located, such as tele-medicine"
* #physical	"Physical" "Traditional delivery requiring provider and patient to be physically co-located."
* ^caseSensitive = true
*/

/*
CodeSystem: EmploymentStatusCS
Title: "Employment Status Code System"
Description: "This code system includes codes for indicating the status of a person's employment."
* ^experimental = false
* ^caseSensitive = true
* #employed	"employed"	"The person is currently employed."
* #unemployed	"unemployed"	"The person is currently unemployed."
*/

CodeSystem: AgeGroupCS
Title: "Age Range Code System"
Description: "This code system includes codes for indicating the age range of a person."
* ^experimental = false
* ^caseSensitive = true
* #infants  "Infants"	"Infants Age range 0-2 years"
* #children "Children"	"Children Age range 3-12 years"
* #teens "Teens"	"Teens Age range 13-19 years"
* #adults "Adults"	"Adults Age range 20-65 years"
* #seniors "Seniors"	"Seniors Age range 65+ years"

CodeSystem: InsuranceStatusCS
Title: "Insurance Status Code System"
Description: "This code system includes codes for indicating the status of a person's insurance coverage."
* ^experimental = false
* ^caseSensitive = true
* #insured	"insured"	"The person is currently insured."
* #uninsured	"uninsured"	"The person is currently uninsured."
* #underinsured	"underinsured"	"The person is currently underinsured."


//web-server sercurity (username token, x.509 certificate, saml assertion, kerberos ticket)
CodeSystem: EndpointAccessControlMechanismCS
Title: "Endpoint Access Control Mechanism Code System"
Description: "Endpoint Access Control Mechanism"
* ^experimental = false
* ^caseSensitive = true
* #public  "Public" "Public access without any specific access control."
* #opaque-access-token "Opaque Access Token" "Uses an opaque token for access control, which is a token whose structure is not visible or meaningful to the client."
* #jwt-access-token "JWT Access Token" "Uses a JSON Web Token (JWT) for access control, which is a compact, URL-safe means of representing claims to be transferred between two parties."
* #mutual-tls "Mutual TLS" "Uses mutual Transport Layer Security (TLS) where both client and server authenticate each other using certificates."
* #wss-saml-token "WSS SAML Token" "Uses a Security Assertion Markup Language (SAML) token within the Web Services Security (WSS) framework for access control."
* #wss-username-token "WSS User Name Token" "Uses a username token within the WSS framework for access control."
* #wss-kerberos-token "WSS Kerberos Token" "Uses a Kerberos token within the WSS framework for access control."
* #wss-x509-token "WSS X509 Token" "Uses an X.509 certificate token within the WSS framework for access control."
* #wss-custom-token "WSS Custom Token" "Uses a custom token within the WSS framework for access control."

/*
CodeSystem: EndpointX509PublicKeyUsageFlagCS
Title: "`Endpoint X509 Public Key Usage Flag Code System"
Description: "Endpoint X509 Public Key Usage Flag"
* ^experimental = false
* ^caseSensitive = true
* #digital-signature "Digital Signature" "indicates that the public key in the certificate can be used for digital signatures"
* #non-repudiation "Non Repudiation" "indicates that the public key in the certificate can be used for non-repudiation, which is the ability to prove that a message was sent by a particular sender"
* #key-encipherment "Key Encipherment" "indicates that the public key in the certificate can be used for key encipherment, which is the process of encrypting other keys"
* #data-encipherment "Data Encipherment" "indicates that the public key in the certificate can be used for data encipherment, which is the process of encrypting data"
* #key-agreement "Key Agreement" "indicates that the public key in the certificate can be used for key agreement, which is the process of agreeing on a shared secret key between two parties"
* #certificate-signing "Certificate Signing" "indicates that the public key in the certificate can be used for signing other certificates"
*/

/*
// FHIR-39478 to remove EndpointTypeCS +++++
CodeSystem: EndpointTypeCS
Title: "Endpoint Type Code System"
Description: "Endpoint Type"
* ^experimental = false
* #FHIR	"FHIR Server"
* #OpEndpoint "Operation Endpoint"
* #CDS "CDS Hooks"
* ^caseSensitive = true
*/

/*
CodeSystem: EndpointHieSpecificConnectionTypeCS
Title: "Endpoint IHE Specific Connection Type Code System"
Description: "Endpoint IHE Specific Connection Type"
* ^experimental = false
* #XCPD-InitGateway-PatientDiscovery-AsyncResponse "XCPD-InitGateway-PatientDiscovery-AsyncResponse" "XCPD InitiatingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous Response"
* #XCPD-RespGateway-PatientDiscovery "XCPD-RespGateway-PatientDiscovery" "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Synchronous"
* #XCPD-RespGateway-PatientDiscovery-Async "XCPD-RespGateway-PatientDiscovery-Async" "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous"
* #XCA-InitGateway-Query "XCA-InitGateway-Query" "XCA InitiatingGateway ITI-18 Registry Stored Query Synchronous"
* #XCA-InitGateway-Retrieve "XCA-InitGateway-Retrieve" "XCA InitiatingGateway ITI-43 Retrieve Document Set Synchronous"
* #XCA-InitGateway-Query-Async "XCA-InitGateway-Query-Async" "XCA InitiatingGateway ITI-18 Registry Stored Query Asynchronous"
* #XCA-InitGateway-Retrieve-Async "XCA-InitGateway-Retrieve-Async" "XCA InitiatingGateway ITI-43 Retrieve Document Set Asynchronous"
* #XCA-InitGateway-Query-AsyncResponse "XCA-InitGateway-Query-AsyncResponse" "XCA InitiatingGateway ITI-38 Cross Gateway Query Asynchronous Response"
* #XCA-InitGateway-Retrieve-AsyncResponse "XCA-InitGateway-Retrieve-AsyncResponse" "XCA InitiatingGateway ITI-39 Cross Gateway Retrieve Asynchronous Response"
* #XCA-RespGateway-Query "XCA-RespGateway-Query" "XCA RespondingGateway ITI-38 Cross Gateway Query Synchronous"
* #XCA-RespGateway-Retrieve "XCA-RespGateway-Retrieve" "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Synchronous"
* #XCA-RespGateway-Query-Async "XCA-RespGateway-Query-Async" "XCA RespondingGateway ITI-38 Cross Gateway Query Asynchronous"
* #XCA-RespGateway-Retrieve-Async "XCA-RespGateway-Retrieve-Async" "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Asynchronous"
* #XDS-Registry-Feed "XDS-Registry-Feed" "XDS Registry ITI-8 Patient Identity Feed Synchronous"
* #XDS-Registry-Feed-v3 "XDS-Registry-Feed-v3" "XDS Registry ITI-44 Patient Identity Feed HL7v3 Synchronous"
* #XDS-Registry-Register "XDS-Registry-Register" "XDS Registry ITI-42 Register Document Set-b Synchronous"
* #XDS-Registry-Query "XDS-Registry-Query" "XDS Registry ITI-18 Registry Stored Query Synchronous"
* #XDS-Registry-RegOnDemand "XDS-Registry-RegOnDemand" "XDS Registry ITI-61 Register On-Demand Document Entry Synchronous"
* #XDS-Registry-Register-Async "XDS-Registry-Register-Async" "XDS Registry ITI-42 Register Document Set-b Asynchronous"
* #XDS-Registry-Query-Async "XDS-Registry-Query-Async" "XDS Registry ITI-18 Registry Stored Query Asynchronous"
* #XDS-Registry-RegOnDemand-Async "XDS-Registry-RegOnDemand-Async" "XDS Registry ITI-61 Register On-Demand Document Entry Asynchronous"
* #XDS-Repository-ProvideReg "XDS-Repository-ProvideReg" "XDS Repository ITI-41 Provide&Register Document Set-b Synchronous"
* #XDS-Repository-Retrieve "XDS-Repository-Retrieve" "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Synchronous"
* #XDS-Repository-ProvideReg-Async "XDS-Repository-ProvideReg-Async" "XDS Repository ITI-41 Provide&Register Document Set-b Asynchronous"
* #XDS-Repository-Retrieve-Async "XDS-Repository-Retrieve-Async" "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Asynchronous"
* #XDS-Repository-Register-AsyncResponse "XDS-Repository-Register-AsyncResponse" "XDS Repository/IntegratedSourceRepository ITI-42 Register Document Set-b Asynchronous Response"
* #XDS-OnDemandSource-Retrieve "XDS-OnDemandSource-Retrieve" "XDS OnDemandSource ITI-43 Retrieve Document Set Synchronous"
* #XDS-OnDemandSource-Retrieve-Async "XDS-OnDemandSource-Retrieve-Async" "XDS OnDemandSource ITI-43 Retrieve Document Set Asynchronous"
* #XDS-OnDemandSource-RegOnDemand-AsyncResponse "XDS-OnDemandSource-RegOnDemand-AsyncResponse" "XDS OnDemandSource ITI-61 Register On-Demand Document Entry Asynchronous Response"
* #XDS-Source-ProvideReg-AsyncResponse "XDS-Source-ProvideReg-AsyncResponse" "XDS Document Source ITI-41 Provide&Register Document Set-b Asynchronous Response"
* #XDS-Consumer-Query-AsyncResponse "XDS-Consumer-Query-AsyncResponse" "XDS Document Consumer ITI-18 Registry Stored Query Asynchronous Response"
* #XDS-Consumer-Retrieve-AsyncResponse "XDS-Consumer-Retrieve-AsyncResponse" "XDS Document Consumer ITI-43 Retrieve Document Set Asynchronous Response"
* #PDQ-Supplier-Query "PDQ-Supplier-Query" "PDQ Patient Demographics Supplier ITI-21 Patient Demographics Query Synchronous"
* #PDQ-Supplier-VisitQuery "PDQ-Supplier-VisitQuery" "PDQ Patient Demographics Supplier ITI-22 Patient Demographics and Visit Query Synchronous"
* #PIX-Xmanager-Feed "PIX-Xmanager-Feed" "PIX Patient Identity Cross-Reference Manager ITI-8 Patient Identity Feed Synchronous"
* #PIX-Xmanager-Feed-v3 "PIX-Xmanager-Feed-v3" "PIX Patient Identity Cross-Reference Manager ITI-30 Patient Identity Management Synchronous"
* #PIX-Xmanager-Query "PIX-Xmanager-Query" "PIX Patient Identity Cross-Reference Manager ITI-9 PIX Query Synchronous"
* #PIX-Consumer "PIX-Consumer" "PIX Patient Identifier Cross-reference Consumer ITI-10 PIX Update Notification Synchronous"
* #XDR-Recipient-ProvideReg "XDR-Recipient-ProvideReg" "XDR Document Recipient ITI-41 Provide and Register Document Set-B Synchronous"
* #MHD-Recipient-ProvideReg "MHD-Recipient-ProvideReg" "MHD Document Recipient ITI-65 Provide Document Bundle"
* ^caseSensitive = true
*/

CodeSystem:  EndpointConnectionTypeCS
  Title: "Endpoint Connection Types (additional) Code System"
  Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
* ^experimental = false
* #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
* #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
* #ihe-xcpd "IHE XCPD" "IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery"
* #ihe-xca "IHE XCA" "IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access"
* #ihe-xdr "IHE XDR" "IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange"
* #ihe-xds "IHE XDS" "IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing"
* #ihe-iid "IHE IID" "IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display"
* #ihe-pdq "IHE PDQ" "IHE Patient Demographics Query (PDQ) - http://wiki.ihe.net/index.php/Patient_Demographics_Query"
* #ihe-pix "IHE PIX" "IHE Patient Identity Feed (PIX) - http://wiki.ihe.net/index.php/Patient_Identity_Feed"
* #ihe-mhd "IHE MHD" "IHE Mobile Healthcare (MHD) - http://wiki.ihe.net/index.php/Mobile_Healthcare"
* ^caseSensitive = true

//since our Ig fhir base is 4.0.1, http://hl7.org/fhir/FHIR-version will not contain the version beyond 4.0.1
//Therefore we have to define this value set to indicate the endpont beyond 4.0.1
/*
CodeSystem: EndpointConnectionTypeVersionCS
Title: "Endpoint Connection Type Version Code System"
Description: "Endpoint Connection Type Version"
* ^experimental = false
* #4.3.0 "4.3.0" "FHIR Release 4B"
* ^caseSensitive = true
*/

CodeSystem: EndpointTestingMethodCS
Title: "Endpoint Testing Method Code System"
Description: "Endpoint Testing Method"
* ^experimental = false
* ^caseSensitive = true
* #self-test "Self Test" "Self Test"
* #procter "Procter" "Procter"
* #attestation "Attestation" "Attestation"

/*
CodeSystem: EndpointFhirMimeTypeCS
Title: "Endpoint FHIR MimeType Code System"
Description: "Endpoint FHIR MimeType"
* ^experimental = false
* ^caseSensitive = true
* #application/fhir+json "fhr+json"
* #application/fhir+xml "fhir+xml"
* #application/fhir+turtle "fhir+turtle"
*/

/*
CodeSystem: EndpointCommonMimeTypeCS
Title: "Endpoint Common MimeType Code System"
Description: "Endpoint Common MimeType"
* ^experimental = false
* ^caseSensitive = true
* #audio/aac  ".aac"  "AAC audio"
* #application/x-abiword  ".abw"  "AbiWord document"
* #application/x-freearc  ".arc"  "Archive document (multiple files embedded)"
* #image/avif  ".avif"  "AVIF image"
* #video/x-msvideo  ".avi"  "AVI: Audio Video Interleave"
* #application/vnd.amazon.ebook  ".azw"  "Amazon Kindle eBook format"
* #application/octet-stream  ".bin"  "Any kind of binary data"
* #image/bmp  ".bmp"  "Windows OS/2 Bitmap Graphics"
* #application/x-bzip  ".bz"  "BZip archive"
* #application/x-bzip2  ".bz2"  "BZip2 archive"
* #application/x-cdf  ".cda"  "CD audio"
* #application/x-csh  ".csh"  "C-Shell script"
* #text/css  ".css"  "Cascading Style Sheets (CSS)"
* #text/csv  ".csv"  "Comma-separated values (CSV)"
* #application/msword  ".doc"  "Microsoft Word"
* #application/vnd.openxmlformats-officedocument.wordprocessingml.document  ".docx"  "Microsoft Word (OpenXML)"
* #application/vnd.ms-fontobject  ".eot"  "MS Embedded OpenType fonts"
* #application/epub+zip  ".epub"  "Electronic publication (EPUB)"
* #application/gzip  ".gz"  "GZip Compressed Archive"
* #image/gif  ".gif"  "Graphics Interchange Format (GIF)"
* #text/html  ".htm, .html"  "HyperText Markup Language (HTML)"
* #image/vnd.microsoft.icon  ".ico"  "Icon format"
* #text/calendar  ".ics"  "iCalendar format"
* #application/java-archive  ".jar"  "Java Archive (JAR)"
* #image/jpeg  ".jpeg, .jpg"  "JPEG images"
* #text/javascript  ".js, .mjs"  "JavaScript"
* #application/json  ".json"  "JSON format"
* #application/ld+json  ".jsonld"  "JSON-LD format"
* #audio/midi  ".mid"  "Musical Instrument Digital Interface (MIDI)"
* #audio/x-midi  ".midi"  "Musical Instrument Digital Interface (MIDI)"
* #audio/mpeg  ".mp3"  "MP3 audio"
* #video/mp4  ".mp4"  "MP4 video"
* #video/mpeg  ".mpeg"  "MPEG Video"
* #application/vnd.apple.installer+xml  ".mpkg"  "Apple Installer Package"
* #application/vnd.oasis.opendocument.presentation  ".odp"  "OpenDocument presentation document"
* #application/vnd.oasis.opendocument.spreadsheet  ".ods"  "OpenDocument spreadsheet document"
* #application/vnd.oasis.opendocument.text  ".odt"  "OpenDocument text document"
* #audio/ogg  ".oga"  "OGG audio"
* #video/ogg  ".ogv"  "OGG video"
* #application/ogg  ".ogx"  "OGG"
* #audio/opus  ".opus"  "Opus audio"
* #font/otf  ".otf"  "OpenType font"
* #image/png  ".png"  "Portable Network Graphics"
* #application/pdf  ".pdf"  "Adobe Portable Document Format (PDF)"
* #application/x-httpd-php  ".php"  "Hypertext Preprocessor (Personal Home Page)"
* #application/vnd.ms-powerpoint  ".ppt"  "Microsoft PowerPoint"
* #application/vnd.openxmlformats-officedocument.presentationml.presentation  ".pptx"  "Microsoft PowerPoint (OpenXML)"
* #application/vnd.rar  ".rar"  "RAR archive"
* #application/rtf  ".rtf"  "Rich Text Format (RTF)"
* #application/x-sh  ".sh"  "Bourne shell script"
* #image/svg+xml  ".svg"  "Scalable Vector Graphics (SVG)"
* #application/x-tar  ".tar"  "Tape Archive (TAR)"
* #image/tiff  ".tif, .tiff"  "Tagged Image File Format (TIFF)"
* #video/mp2t  ".ts"  "MPEG transport stream"
* #font/ttf  ".ttf"  "TrueType Font"
* #text/plain  ".txt"  "Text, (generally ASCII or ISO 8859-n)"
* #application/vnd.visio  ".vsd"  "Microsoft Visio"
* #audio/wav  ".wav"  "Waveform Audio Format"
* #audio/webm  ".weba"  "WEBM audio"
* #video/webm  ".webm"  "WEBM video"
* #image/webp  ".webp"  "WEBP image"
* #font/woff  ".woff"  "Web Open Font Format (WOFF)"
* #font/woff2  ".woff2"  "Web Open Font Format (WOFF)"
* #application/xhtml+xml  ".xhtml"  "XHTML"
* #application/vnd.ms-excel  ".xls"  "Microsoft Excel"
* #application/vnd.openxmlformats-officedocument.spreadsheetml.sheet  ".xlsx"  "Microsoft Excel (OpenXML)"
* #application/xml  ".xml"  "XML"
* #text/xml  ".xml"  "XML"
* #application/atom+xml  ".xml"  "XML"
* #application/vnd.mozilla.xul+xml  ".xul"  "XUL"
* #application/zip  ".zip"  "ZIP archive"
* #video/3gpp  ".3gp"  "3GPP audio/video container"
* #audio/3gpp  ".3gp"  "3GPP audio/video container if it does not contain video"
* #video/3gpp2  ".3g2"  "3GPP2 audio/video container"
* #audio/3gpp2  ".3g2"  "3GPP2 audio/video container  if it doesn't contain video"
* #application/x-7z-compressed  ".7z"  "7-zip archive"
* #text/hl7v2 "hl7v2"  "HL7 v2.x message"
* #text/rtf "rtf"  "Rich Text Format (RTF)"
* #application/cda+xml "cda"  "Clinical Document Architecture (CDA) XML"
* #application/fhir+json "fhir"  "FHIR JSON"
* #application/fhir+xml "fhir"  "FHIR XML"
*/


 
/*
CodeSystem:  EndpointPayloadTypeCS
  Title: "Endpoint Payload Types Code System"
  Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* #NA "Not Applicable" "Not Applicable"
* ^caseSensitive = true
*/
 
CodeSystem: HealthcareServiceCategoryCS
 Title: "Healthcare Service Category Code System"
 Description: "Broad categories of healthcare services being performed or delivered"
* ^experimental = false
* #behav "Behavioral Health" "Services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; 
and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #dent "Dental" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the mouth."
* #dme "DME/Medical Supplies" "Health care consumables or equipments supplied to patients"
* #emerg "Emergency care" "Health care services rendered within a designated emergency care facility, for point-in-time evaluation and/or treatment any medical condition 
such that a prudent layperson possessing an average knowledge of medicine and health, believes that immediate unscheduled medical care is required."
* #group "Medical Group" "Health care services rendered by a group of people, e.g. a group of Physicians."
* #home "Home Health"	"Health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, 
and other professionals on a regularly scheduled visit."
* #hosp "Hospital" "Health care services rendered within a hospital or other inpatient setting providng patient treatment with specialzed medical and nursing staff and 
medical equipment."
* #lab "Laboratory" "Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, 
treatment and prevention of disease."
* #other "Other" "Other"
* #outpat "Clinic or Outpatient Facility" "Health care services rendered in an outpatient facility, e.g. medical procedures, surgeries, etc."
* #prov "Medical Provider"  "Health care services rendered by a person, e.g. Physician."
* #pharm "Pharmacy" "Services related to the storage, compounding, dispensing and sale of drugs."
* #trans "Transportation" "Services related to the transportation of patients to and from a healthcare facility, or programs related to transportation insecurity."
* #urg "Urgent Care" "Unscheduled health care services which provide for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #vis "Vision" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* #education "Education" "Services or programs related to education, including health literacy, health education, and health promotion (stress management, smoking cessation, etc.)"
* #employment "Employment" "Services or programs related to employment assistance"
* #financial "Financial" "Services or programs related to financial insecurity, material hardship, or medical cost burden"
* #food "Food" "Services or programs related to food insecurity or inadequate nutrition"
* #housing "Housing" "Services or programs related to housing instability, inadequate housing, or homelessness"
* #personal-safety "Personal Safety" "Services or programs related to personal safety, including intimate partner violence, elder abuse, sexual violence, and child abuse and neglect"
* #social-connection "Social Connection" "Services or programs related to social isolation or social connection"
* ^caseSensitive = true

/*
CodeSystem: HealthcareServiceRatingTypeCS
Title: "Healthcare Service Rating Type Code System"
Description: "Types of ratings for a healthcare service"
* ^experimental = false
* ^caseSensitive = true
//* #quality-of-care "Quality of Care" "Quality ratings consider factors like the success rate of surgeries, patient outcomes, error rates, adherence to best practices, and compliance with safety standards."
//* #patient-satisfaction "Patient Satisfaction" "Patient satisfaction ratings  assessed through patient surveys. Patients may be asked to rate their overall satisfaction with the care they received, as well as specific aspects like the friendliness of staff, the cleanliness of facilities, the wait time, and the communication skills of healthcare professionals."
//* #value-of-money "Value of Money" "Value ratings compares the cost of services to their quality. It can be quite complex, as it often involves considering both the immediate cost of care and the long-term financial impact of health outcomes."
//* #accessibility "Accessibility" "Accessibility ratings consider factors like the availability of appointments, the ease of scheduling urgent appointments, the availability of after-hours care, and the availability of electronic communication with healthcare professionals."
//* #efficiency "Efficiency" "Efficiency ratings  evaluates how effectively a healthcare provider uses resources to deliver care. It might consider factors like the average length of hospital stays, the use of testing and procedures, and the readmission rate."
//* #clinical-outcomes "Clinical Outcomes" "Clinical outcomes ratings  assess the health outcomes of patients who received care from a particular healthcare provider. They might consider factors like the mortality rate, the rate of complications, and the rate of hospital readmission."
//* #patient-safety "Patient Safety" "Patient safety ratings  assess the safety of care provided by a healthcare provider. They might consider factors like the rate of hospital-acquired infections, the rate of surgical complications, and the rate of medication errors."
//* #experience-of-care "Experience of Care" "Experience of care ratings  assess the experience of patients who received care from a particular healthcare provider. They might consider factors like the friendliness of staff, the cleanliness of facilities, the wait time, and the communication skills of healthcare professionals."
//* #equity "Equity" "Equity ratings evaluates whether healthcare services are provided fairly to all patients, regardless of their race, ethnicity, gender, socioeconomic status, or other demographic factors."
* #hospital-compare "Hospital Compare" "This is a consumer-oriented website created by the Centers for Medicare & Medicaid Services (CMS). It provides data on how well hospitals provide recommended care to their patients. This can be used to compare the quality of care at over 4,000 Medicare-certified hospitals."
* #hedis "HEDIS" "The Healthcare Effectiveness Data and Information Set (HEDIS) is a tool used by more than 90 percent of America's health plans to measure performance on important dimensions of care and service. This tool is maintained by National Committee for Quality Assurance (NCQA)."
* #hcahps "HCAHPS" "The HCAHPS (Hospital Consumer Assessment of Healthcare Providers and Systems) Survey, also known as Hospital CAHPS, is a standardized survey instrument and data collection methodology for measuring patients' perspectives on hospital care. This tool is maintained by Centers for Medicare & Medicaid Services (CMS)."
* #healthgrades "Healthgrades" "Healthgrades is a website that provides information about physicians, hospitals and health care providers. Healthgrades collects data and other information regarding hospitals, physicians, long-term care facilities and other providers of healthcare services from a variety of sources."
* #joint-commission-quality-check "Joint Commission Quality Check" "A consumer-oriented website created by the Centers for Medicare & Medicaid Services (CMS). It provides data on how well hospitals provide recommended care to their patients. This can be used to compare the quality of care at over 4,000 Medicare-certified hospitals."
* #leapfrog "Leapfrog" "The Leapfrog Hospital Survey is the gold standard for comparing hospitals' performance on the national standards of safety, quality, and efficiency that are most relevant to consumers and purchasers of care. This tool is maintained by The Leapfrog Group."
* #usnews "US News" "U.S. News & World Report is an American media company that publishes news, opinion, consumer advice, rankings, and analysis. Founded as a newsweekly magazine in 1933, U.S. News transitioned to primarily web-based publishing in 2010. This tool is maintained by U.S. News & World Report."
* #vitals "Vitals" "Vitals is an online resource for patients to find doctors and medical facilities. It provides information about the doctor's education, training, board certification, and malpractice and disciplinary history. This tool is maintained by Vitals."
* #yelp "Yelp" "Yelp is an American public company headquartered in San Francisco, California. The company develops, hosts, and markets the Yelp.com website and the Yelp mobile app, which publish crowd-sourced reviews about businesses. This tool is maintained by Yelp."
*/

/*
CodeSystem: HealthcareServiceReferralMethodCS
Title: "Healthcare Service Referral Method Code System"
Description: "Methods of referral"
* ^experimental = false
* ^caseSensitive = true
* #ccda "CCDA" "CCDA with endpoints"
* #elec "Secure Messaging" "Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, 
refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages."
* #electronic-referral "Electronic Referral" "Referrals may be accepted via Electronic Referral endpoints"
* #electronic-scheduling "Electronic Scheduling" "Referrals may be accepted via Electronic Scheduling endpoints"
* #fax "Fax" "Referrals may be accepted by fax."
* #phone "Phone" "Referrals may be accepted over the phone from a practitioner."
* #mail "Mail" "Referrals may be accepted via regular postage or hand delivered."
* #semail "Secure Email" "Referrals may be accepted via a secure email. To send please encrypt with the services public key."
*/

CodeSystem: IgActorCS
Title: "IG Actor Code System"
Description: "IG Actor"
* ^experimental = false
* #client	"client"  "client"
* #server	"server"  "server"
* #sender "sender" "sender"
* #recipient "recipient" "recipient"
* #requester "requester" "requester"
* ^caseSensitive = true

/*
CodeSystem: IgTypeCS
Title: "IG Type Code System"
Description: "IG Type"
* ^experimental = false
* #FHIR	"FHIR"
* #direct "Direct"
* ^caseSensitive = true
*/

CodeSystem: NdhEndpointEnvironmentCS
Title: "NDH Endpoint Environment Code System"
Description: "NDH Endpoint Environment"
* ^experimental = false
* ^caseSensitive = true
* #prod "Production" "Production environment and is expected to contain real data and should be protected appropriately"
* #staging "Staging" "Staging environment typically used while preparing for a release to production"
* #dev "Development" "Development environment used while building systems"
* #test "Test" "Test environment, it is not intended for production usage."
* #train "Training" "Training environment, it is not intended for production usage and typically contains data specifically prepared for training usage."

//for now, it will be added to https://terminology.hl7.org/4.0.0/ValueSet-v3-HL7FormatCodes.html
CodeSystem: NdhDirectTrustPayloadTypeCS
Title: "NDH Direct Trust Payload Type Code System"
Description: "NDH Direct Trust Payload Type"
* ^experimental = false
* ^caseSensitive = true
* #urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.0 "urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.0" "urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.0"
* #urn:dt-org:dsm:adt-en:SMTP+XDM:1.0 "urn:dt-org:dsm:adt-en:SMTP+XDM:1.0" "urn:dt-org:dsm:adt-en:SMTP+XDM:1.0"
* #urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0 "urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0" "urn:dt-org:dsm:ix4hs-ref:SMTP+CDA+FHIR:1.0"

CodeSystem: NdhFhirEndpointUseCaseCS
Title: "NDH FHIR Endpoint Use Case Code System"
Description: "NDH FHIR Endpoint Use Case"
* ^experimental = false
* ^caseSensitive = true
* #cdex "CDex" "Clinical Data Exchange"
* #patientAccess "Patient Access" "Patient Access"
* #pasOperation "PAS Operation" "PAS Operation"
* #payerAttachment "Payer Attachment" "Payer Attachment"
* #payerToPayer "Payer to Payer" "Payer to Payer"
* #providerApi "Provider API" "Provider API" //FHIR-41273

//for now it will be added
CodeSystem: NdhDirectTrustEndpointUsecaseCS
Title: "NDH Direct Trust Endpoint Usecase Code System"
Description: "NDH Direct Trust Endpoint Usecase"
* ^experimental = false
* ^caseSensitive = true
*  #payer-payer-data-exchange  "information exchange between payers" "information exchange between payers"
*  #payer-provider-data-exchange  "information exchange between payers and providers" "information exchange between payers and providers"
*  #payer-patient-data-exchange  "information exchange between payers and patients" "information exchange between payers and patients"
*  #provider-provider-data-exchange  "information exchange between providers" "information exchange between providers"
*  #provider-payer-data-exchange  "information exchange between providers and payers" "information exchange between providers and payers"
*  #provider-to-patient-data-exchange  "information exchange between providers and patients" "information exchange between providers and patients"
*  #patient-payer-data-exchange  "information exchange between patients and payers" "information exchange between patients and payers"
*  #patient-provider-data-exchange  "information exchange between patients and providers" "information exchange between patients and providers"
*  #patient-public-health-data-exchange  "information exchange between patients and public health" "information exchange between patients and public health"
*  #patient-research-data-exchange  "information exchange between patients and research" "information exchange between patients and research"
*  #public-health-patient-data-exchange  "information exchange between public health and patients" "information exchange between public health and patients"
*  #research-patient-data-exchange  "information exchange between research and patients" "information exchange between research and patients"
*  #patient-access  "information exchange for patients" "information exchange for patients"
*  #care-case-manager  "information exchange with a care or case managers" "information exchange with a care or case managers"
*  #care-coordination  "information exchange for care coordination across the entire patient care team" "information exchange for care coordination across the entire patient care team"
*  #advanced-eob  "information exchange for advanced eobs" "information exchange for advanced eobs"
*  #coverage-requirements-discovery-crd  "information exchange for discovering coverage requirements" "information exchange for discovering coverage requirements"
*  #documentation-templates-rules-dtr  "information exchange for documentation templates and rules" "information exchange for documentation templates and rules"
*  #prior-authorization  "information exchange for prior authorization" "information exchange for prior authorization"
*  #formulary  "information exchange for drug formulary" "information exchange for drug formulary"
*  #prescriptions  "information exchange for prescriptions" "information exchange for prescriptions"
*  #item-service-price-transparency  "information exchange for item or service price transparency" "information exchange for item or service price transparency"
*  #patient-cost-transparency-gfe  "information exchange for making patient costs transparent" "information exchange for making patient costs transparent"
*  #quality-measure-reporting  "information exchange for quality measure reporting" "information exchange for quality measure reporting"
*  #adverse-event-reporting  "information exchange for adverse event reporting" "information exchange for adverse event reporting"
*  #notifications  "information exchange for notifications" "information exchange for notifications"
*  #adt-notifications  "information exchange for ADT notifications" "information exchange for ADT notifications"
*  #scheduling  "information exchange for scheduling" "information exchange for scheduling"
*  #release-of-information  "information exchange for release of information" "information exchange for release of information"
*  #medical-records  "information exchange for medical records" "information exchange for medical records"
*  #administrative  "information exchange for administrative activities" "information exchange for administrative activities"
*  #support  "information exchange for technical or customer support activities" "information exchange for technical or customer support activities"
*  #billing  "information exchange for billing" "information exchange for billing"
*  #referrals  "information exchange for referrals" "information exchange for referrals"
*  #transfer-transition-of-care  "information exchange for transfers and transitions of care" "information exchange for transfers and transitions of care"
*  #provider-directory  "information exchange for directory maintenance and quality" "information exchange for directory maintenance and quality"
*  #care-plans-review-or-approval  "information exchange to support care plan review and approval" "information exchange to support care plan review and approval"
*  #public-health-reporting  "information exchange for public health reporting" "information exchange for public health reporting"
*  #payers-and-payments  "information exchange for billing" "information exchange for billing"
*  #break-the-glass  "information exchange that requires break the glass" "information exchange that requires break the glass"
*  #individual-practitioner  "information exchange with an individual provider" "information exchange with an individual provider"
*  #individual-patient-member-consumer  "information exchange with an individual patient-member-client-consumer" "information exchange with an individual patient-member-client-consumer"
*  #location  "information exchange with a treating facility" "information exchange with a treating facility"
*  #group  "information exchange with a provider group" "information exchange with a provider group"
*  #department  "information exchange with a provider department" "information exchange with a provider department"
*  #no-reply  "endpoint does not accept information for exchange" "endpoint does not accept information for exchange"
*  #any-all  "endpoint that accepts any and all types of information exchange possible for its endpoint type" "endpoint that accepts any and all types of information exchange possible for its endpoint type"




/*
CodeSystem: InsuranceProductTypeCS
Title: "Insurance Product Type Code System"
Description:  "A distinct package of health insurance coverage benefits that are offered using a particular product network type."
* ^experimental = false
* #commppo "Commercial PPO"  "Health insurance provided through a Preferred Provider Organization (PPO)."
* #commhdhp "Commercial HDHP" "Health insurance provided through a High Deductible Health Plan (HDHP)."
* #commpos "Commercial POS" "Health insurance provided through a Point-of-Service (POS) Plan."
* #commhmo "Commercial HMO" "Health insurance provided through a Health Maintenance Organization (HMO)."
* #commepo "Commercial EPO" "Health insurance provided through a Exclusive Provider Organization(EPO)."
* #medi "Medicaid" "Health insurance provided to eligible adults and children under the Federal Medicaid program"
* #medihmo "Medicaid HMO" "Health insurance provided to eligible adults and children under the Federal Medicaid program through a Health Maintenance Organization (HMO)."
* #mediadv "Medicare Advantage" "Health insurance provided by a private company that contracts with Medicare to provide all Medicare Part A and Part B benefits."
* #mediadvhmo "Medicare Advantage HMO" "Health insurance offered by a private company that contracts with Medicare to provide all Medicare Part A and Part B benefits through a Health Maintenance Organization (HMO)."
* #media "Medicare Part A" "Health insurance provided under the Federal Medicare program covering inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care."
* #medib "Medicare Part B" "Health insurance provided under the Federal Medicfare program covering certain doctors' services, outpatient care, medical supplies, and preventive services."
* #medid "Medicare Part D" "Health insurance provided under the Federal Medicare program covering prescription drugs."
* #mediab "Medicare A/B" "Health insurance provided under the Federal Medicare program covering inpatient hospital stays, care in a skilled nursing facility, hospice care, some home health care, certain doctors' services, outpatient care, medical supplies, and preventive services."
* #qhp "Qualified Health Plan" "Health insurance provided through and certified by the Health Insurance Marketplace that provides essential health benefits (EHBs), follows established limits on cost sharing, and meets other requirements outlined within the application process."
* #ihs "Indian Health Service" "Health care program provided to United States American Indians and Alaska Natives."
* #fep "Federal Employee Program" "Health insurance provided to employees of the Federal government."
* #tri "TRICARE" "Health care program provided to uniformed service members, retirees, and their families around the world."
* #va "Veterans Affairs Plan"  "Health care program provided to eligible veterans."
* #dent "Dental Plan" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity."
* #denthmo "Dental HMO" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity provided through a Health Maintenance Organization (HMO)."
* #vis "Vision Plan" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* #vishmo "Vision HMO" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes provided through a Health Maintenance Organization (HMO)."
* ^caseSensitive = true
*/

/*
CodeSystem: InsurancePlanTypeCS
Title: "Insurance Plan Type Code System"
Description:  "Categories of cost-sharing used by plans"
* ^experimental = false
* #platinum "Platinum-QHP" "Plan with highest monthly premium and lowest costs when you need care	A Qualified Health Plan with the highest monthly premiums and smallest out-of-pocket costs for the member in comparison to other metal-category plans"
* #gold "Gold-QHP" "Plan with high monthly premium and low costs when you need care	A Qualified Health Plan with the higher monthly premiums and smaller out-of-pocket costs for the member in comparison to other metal-category plans"
* #silver "Silver-QHP" "Plan with moderate monthly premium and moderate costs when you need care	A Qualified Health Plan with the lower monthly premiums and larger out-of-pocket costs for the member in comparison to other metal-category plans"
* #bronze "Bronze-QHP" "Plan with lowest monthly premium and highest costs when you need care	A Qualified Health Plan with the lowest monthly premiums and largest out-of-pocket costs for the member in comparison to other metal-category plans"
* #catastrophic "Catastrophic-QHP" "A plan with low monthly premiums and very high deductibles and are available only to those under 30 or with certain special exemptions."
* #lowdeductible "Low Deductible" "A plan that requires the insured to pay out of pocket a smaller proportion of incurred health care costs than a traditional insurance plan."
* #highdeductible "High Deductible" "A plan that requires the insured to pay out of pocket a larger proportion of incurred health care costs than a traditional insurance plan."
* #catastrophicplan "Catastrophic Plan" "A plan that requires the insured to pay out of pocket a much larger proportion of incurred health care costs than a traditional insurance plan."
* ^caseSensitive = true
*/

/*
CodeSystem:  LanguageProficiencyCS
Title: "Language Proficiency Code System"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language."
* ^experimental = false
* #00	"No proficiency"	"Unable to function in the spoken language."
//* #06	"Memorized proficiency"	"Able to satisfy immediate needs using rehearsed utterances. Shows little real autonomy of expression, flexibility or spontaneity."
* #10	"Elementary proficiency"	"Able to satisfy minimum courtesy requirements and maintain very simple face-to-face conversations on familiar topics. A native speaker must often use slowed speech, repetition, paraphrase, or a combination of these to be understood by this individual."
//* #16	"Elementary proficiency, plus"	"Can initiate and maintain predictable face-to-face conversations and satisfy limited social demands."
* #20	"Limited working proficiency"	"Able to satisfy routine social demands and limited work requirements."
//* #26	"Limited working proficiency, plus"	"Able to satisfy most work requirements with language usage that is often, but not always, acceptable and effective."
* #30	"General professional proficiency"	"Able to speak the language with sufficient structural accuracy and vocabulary to participate effectively in most formal and informal conversations in practical, social and professional topics."
//* #36	"General professional proficiency, plus"	"Is often able to use the language to satisfy professional needs in a wide range of sophisticated and demanding tasks."
* #40	"Advanced professional proficiency"	"Able to use the language fluently and accurately on all levels normally pertinent to professional needs."
//* #46	"Advanced professional proficiency, plus"	"Speaking proficiency is regularly superior in all respects, usually equivalent to that of a well educated, highly articulate native speaker."
* #50	"Functional native proficiency"	"Speaking proficiency is functionally equivalent to that of a highly articulate well-educated native speaker and reflects the cultural standards of the country where the language is natively spoken."
* ^caseSensitive = true
*/

CodeSystem:  OrgTypeCS
  Title: "Organization Type Code System"
  Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* ^caseSensitive = true
* #fac "Facility" "A physical healthcare facility."
* #prvgrp "Provider Group" "A healthcare provider entity"
* #payer "Payer" "A healthcare payer."
* #atyprv "Atypical Provider" "Providers that do not provide healthcare"
* #bus "Non-Healthcare Business" "An organization that does not meet the definitions of a Healthcare or Atypical Provider, and is not a payer or healthcare facility"
* #ntwk "Network" "A healthcare provider insurance network"
* #gov "Government" "A government agency for social services"
* #comm "Community" "A community based organization for social services"
* #edu "Education" "An educational institution or organization"
* #reli "Religious" "A religious organization for social services"



CodeSystem: OrgAliasTypeCS
Title: "Organization Alias Type Code System"
Description: "The state indicating if an Organization has an alias."
* ^experimental = false
* #legalalternative "Legal Alternative" "A pseudonym used by an organization to perform their business under a name that differs from the registered, legal name of the business, also known as a trade name, business name, or 'doing business as' (d.b.a.)."
* #historical "Historical" "Any previously used legal or trade names used by an organization since the creation of the business. Could include names used by independent organizations before a merger or other reorganization."
* #common "Common" "common name, i.e. SNAF, Rehab, etc."
* ^caseSensitive = true 

CodeSystem: OrganizationAffiliationRoleCS
Title: "Organization Affiliation Role"
Description: "Codes For Organization Affiliation Role"
* ^experimental = false
* #behavioral	"Outpatient Behavioral Health Provider" "Provider of services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #bt "Member Of" "Has a relationship of participation with.  This does NOT represent a member of an insurance plan, but other types of membership such as membership of a hospital in an HIE"    // Added 7/15/2020
* #dme	"DME/Medical Supplier"	"Supplier of health care consumables or equipments supplied to patients."
* #group	"Medical Group"	"A group of people, e.g. a group of Physicians, who render health care services."
* #home	"Home Health Provider"	"Provider of health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, and other professionals on a regularly scheduled visit."
* #hospital	"Hospital"	"An inpatient facility, other than long-term care, providng patient treatment with specialzed medical and nursing staff and medical equipment."
* #laboratory	"Laboratory"	"Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, treatment and prevention of disease."
* #other	"Other"		"A provider of heatlh care services not otherwise listed in this value set."
* #outpatient	"Clinic or Outpatient Facility"	 "An outpatient facility providing patient services, e.g. medical procedures, surgeries, etc."
* #pharmacy	"Pharmacy"	"An entity which provider services related to the storage, compounding, dispensing and sale of drugs."
* #transport	"Transporation Provider"	"A provider which transports patients to or from a medical facility, e.g., ambulance."
* #urgent	"Urgent Care Center"	"A center in which unscheduled health care services are provided for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #hospice "Hospice" "Hospice"
* #nurseCustodial "Nursing and Custodial Care Facility" "Nursing and Custodial Care Facility"
* #residential "Residential Treatment Facility" "Residential Treatment Facility"
* #respite "Respite Care Facility" "Respite Care Facility"
* #retail	"Retail Health Center"	"Retail Health Center"
* ^caseSensitive = true

CodeSystem: OrganizationAffiliationRoleForHieCS
Title: "NDH Organization Affiliation Role for HIE"
Description: "Codes For Organization Affiliation Role for HIE"
* ^experimental = false
* #HieInitiator "HIE Initiator" "This code indicates that the organization referenced in .participatingOrganization is a member of the network led by the organization 
mentioned in .organization. It has both the permission and the intention to request data from other members of the network. In this context, OrganizationAffiliation.endpoint 
refers to the endpoint utilized by .participatingOrganization to make requests to the Initiating Gateway, acting under the authority of .organization."
* #HieResponder "HIE Responder" "This code indicates that the organization linked in .participatingOrganization is a member of the network overseen by the organization 
in .organization. It possesses an Endpoint capable of receiving requests from other network members that maintain an HIEInitiator relationship with the network's governing 
organization. In this context, OrganizationAffiliation.endpoint includes endpoints utilized by other network members to transmit requests to .participatingOrganization. 
This Endpoint may also serve Initiating and Responding gateways operated by .organization."
* #PartnerConnectivity "Partner Connectivity" "This code indicates that .participatingOrganization should be able to directly contact .organization via .Endpoint. 
It does not assert the availability of connectivity for any organizations other than those two directly linked through the OrganizationAffiliation Resource. 
It's important to note that many document-sharing networks might opt to distribute the information required to establish these connections out of band, 
rather than through the directory."
* #DocShareFederateInt "Document Sharing Federated Internal" "This code indicates that documents from .participatingOrganization are accessible to organizations within 
the network through communication with the network's Initiating Gateway, which is operated by .organization. In this context, 'within the network' refers to organizations 
that maintain an HIEInitiator relationship with .organization. This code is analogous to the DocShare-federate code in mCSD (Mobile Care Services Directory), 
but its scope is confined to organizations internal to the network."
* #DocShareFederateExt "Document Sharing Federated External" "This code indicates that documents from .participatingOrganization are accessible to organizations outside the network 
through communication with the network's Responding Gateway, operated by .organization. Here, 'outside the network' refers to organizations that do not have a child relationship 
with .organization, yet possess upper-level network or peer connectivity with that organization. This code is analogous to the DocShare-federate code in 
mCSD (Mobile Care Services Directory), but its scope is restricted to organizations external to the network."
* ^caseSensitive = true
  

CodeSystem: PractitionerRoleCS
Title: "Practitioner Role Codes Code System"
Description: "A capability that an individual, group, or organization is acknowledged to have in a payer network."
* ^experimental = false
// These are Payer Roles from Gail
* #ap "Admitting Privileges" "Practitioner has admitting privileges at hospital (organization)"
* #apn "Advanced Practice Nursing Providers" "Advanced Practice Nursing Providers"
* #at "Athletic Trainer" "Athletic Trainer"
* #att "Attending Provider" "Attending Provider"
* #au "Audiologist" "Audiologist"
* #bh "Behavioral Health & Social Service Providers" "Behavioral Health & Social Service Providers"
* #ba "Board Certified Behavior Analyst" "Board Certified Behavior Analyst"
* #bt "Member Of" "Has a relationship of participation with.  This does NOT represent a member of an insurance plan, but other types of membership such as membership of physician in the AMA"    // Added 7/15/2020
* #cnw "Certified Nurse Midwife" "Certified Nurse Midwife"
* #crnp "Certified Registered Nurse Practitioner" "Certified Registered Nurse Practitioner"
* #ch "Chiropractor" "Chiropractor"
* #cs "Christian Science Practitioner" "Christian Science Practitioner"
* #co "Counselor" "Counselor"
* #dp "Dental Provider" "Dental Provider"
* #de "Dentist" "Dentist"
* #drr "Developmental, Rehabilitative and Restorative Service Providers" "Developmental, Rehabilitative and Restorative Service Providers"
* #dn "Dietary and Nutritional Service Provider" "Dietary and Nutritional Service Provider"
* #om "Doctor of Oriental Medicine" "Doctor of Oriental Medicine"
* #em "Emergency Medical Service Provider" "Emergency Medical Service Provider"
* #ho "Homeopath" "Homeopath"
* #lpn "Licensed Practical Nurse" "Licensed Practical Nurse"
* #ml "Medical Learner" "Medical Learner e.g., student, intern, resident, fellow, etc."
* #mt "Marriage/Family Therapist" "Marriage/Family Therapist"
* #ma "Massage Therapist" "Massage Therapist"
* #nh "Naprapath" "Naprapath"
* #na "Naturopath" "Naturopath"
* #nu "Nursing Service Related Providers" "Nursing Service Related Providers"
* #ot "Occupational Therapist" "Occupational Therapist"
* #op "Optician" "Optician"
* #oo "Optometrist" "Optometrist"
* #os "Other Service Provider" "Other Service Provider"
* #rx "Pharmacy Service Providers" "Pharmacy Service Providers"
* #pt "Physical Therapist" "Physical Therapist"
* #ph "Physician" "Physician"
* #pa "Physician Assistant" "Physician Assistant"
* #po "Podiatrist" "Podiatrist"
* #py "Psychologist" "Psychologist"
* #rn "Registered Nurse" "Registered Nurse"
* #rt "Respiratory Therapist" "Respiratory Therapist"
* #sw "Social Worker" "Social Worker"
* #sp "Speech Language Pathologist" "Speech Language Pathologist"
* #sh "Speech, Language and Hearing Service Providers" "Speech, Language and Hearing Service Providers"
* #te "Technologists, Technicians and Other Technical Service Providers" "Technologists, Technicians and Other Technical Service Providers"
* #doctor "Doctor" "Doctor"
* #nurse "Nurse" "Nurse"
* #pharmacist "Pharmacist" "Pharmacist"
* #researcher "Researcher" "Researcher"
* #teacher "Teacher" "Teacher"
* #ict "Information and Communication Technology" "Information and Communication Technology"
* ^caseSensitive = true


CodeSystem: QualificationStatusCS
Title: "Qualification Status Code System"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* #active "active" "The credential may be considered valid for use."
* #inactive "inactive" "The credential may not be considered valid for use."
* #issiner "issued in error" "The credential was mistakenly assigned and should not be considered valid for use."
* #revoked "revoked" "The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending "pending" "The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown "unknown" "The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true



/*
CodeSystem: ValidationTypeCS
Title: "Validation Type Code System"
Description: "This code system contains codes for documenting the attributes of the FHIR resource Validation to reflect the business process of validating information in a Healthcare Directory.."
* ^experimental = false
* #noneneeded "None needed" "No validation needed/planned for this resource or element."
* #initial "Initial"    "Validation is only needed after initial attestation. For elements that typically do not change such as 'medical school attended and graduation date'."
* #periodic	"Periodic"	"Validation is needed after initial attestation and on a periodic basis. E.g. elements that expire or may change such as licensure."
* #attested	"Attested"	"Indicates the element or resource has only been attested."
* #validated "Validated"	"Indicates the element or resource has been successfully validated."
* #inprocess "Inprocess"	"Indicates the element or resource is currently being validated."
* #reqreval	"Required revalidation"	"Indicates the element or resource has passed an expiration date and requires revalidation."
* #valfailed "Valiation failed"	"Indicates validation was attepted on an element or resource and that validation failed."
* #nothing	"Nothing"	"No external validation is required."
* #single	"Single"	"Indicates the element or resource is validated against a single source."
* #multiple	"Multiple"	"Indicates the element or resource may require validation against multiple sources, e.g. a practitioner participating in an insurance network."
* #editcheck "Edit check"	"Indicates the element or resource is validated for format, range, presence, or other similar properties."
* #valueset	"Valueset"	"Indicates the element or resource is validated against a value set."
* #extsource "External source"	"Indicates the element or resource is validated against an external source."
* #standalone "Stand alone"	"Indicates the element or resource is validated by itself and is unrelated to other elements or resources."
* #incontext "In context"	"Indicates the element or resource is validated by the existence or value of another related element or resource."
* #fatal "Fatal"	"A failure that is likely relevant to local workflow environments, considered sufficient to suspend the resource/element and one or more action has been taken."
* #warning	"Warning"	"A failure that may be relevant to some local workflow environments, but in and of itself is not consider sufficient to suspend the resource/element. E.g. validating membership in an organization."
* #recordonly	"Record only"	"A failure that may be relevant to some local workflow environments and will be documented but not result in notification or publication of the error."
* #noaction	"No action"	"A failure that is unlikely to be relevant to any local workflow environment."
* #manual	"Manual"	"The resource or element is validated manually."
* #portal	"Portal"	"The resource or element is validated via a portal into a source of valid data."
* #push	"Push"	"Data is sent (i.e. pushed) from a source of valid data to the Healthcare Directory."
* #pull	"Pull"	"Data is retrieved (i.e. pulled) from a source of valid data into the Healthcare Directory"
* #successful	"Successful"	"The validation process is complete and a determination made that the the attested data is true and accurate."
* #failed	"Failed"	"The validation process is complete and a determination made that the the attested data is not true or accurate."
* #undetermined	"Undetermined"	"The validation process is complete and a determination could not be made that the the attested data is, or is not, true and accurate."
* #pushyes	"Yes"	"The primary source validation can be achieved via a push of data from the source of that information."
* #pushno	"No"	"The primary source validation cannot be achieved via a push of data from the source of that information."
* #pushundetermined	"Undetermined"	"It is if undetermined if primary source validation can be achieved via a push of data from the source of that information."
* #specific	"Specific requested changes"	"The sender will send specific changes to the healthcare directory as determined by agreement."
* #any	"Any changes"	"The sender will send all changes to the healthcare directory."
* #sourcedef	"As defined by the source/sender"	"The sender will only send changes they have determined to be significant."
* #owner	"Owner"	"Indicates the element or resource was attested to by the individual who owned the data."
* #authrep	"Authorized representative"	"Indicates the element or resource was attested to by an individual who was designated to attest by the owner of the data."
* #authint	"Authorized intermediary"	"Indicates the element or resource was attested to by a system (intermediary) that was designated to attest by the owner of the data."
* #non-auth-src	"Non-authorized source"	"Indicates the element or resource was attested to by an individual or system that was not designated to attest by the owner of the data."
* #licenseboard	"License Board"	"License Board"
* #primaryed	"Primary Education"	"Primary Education"
* #continuinged	"Continuing Education"	"Continuing Education"
* #postalservice	"Postal Service"	"Postal Service"
* #relowner	"Relationship owner"	"Relationship owner"
* #regauth	"Registration Authority"	"Registration Authority"
* #legalsource	"Legal source"	"Legal source"
* #issuingsource	"Issuing source"	"Issuing source"
* #attester	"Attester"	"Attester"
* ^caseSensitive = true
*/

CodeSystem: VirtualModalitiesCS
Title: "Virtual Modalities Code System"
Description: "Categories of virtual service delivery modalities."
* ^experimental = false
* #phone	"phone" "Voice Telephone"
* #video	"video chat" "Video Chat"
* #tdd	"TDD" "Telecommunications Device for the Deaf"
* #sms	"SMS" "SMS Text Messaging"
* #app  "App" "Mobile Application"
* #web  "Website" "Website accessed through browser"
* ^caseSensitive = true

CodeSystem: NdhSecureExchangeArtifactsCS
Title: "NDH Secure Exchange Artifacts Code System"
Description: "NDH Secure Exchange Artifacts"
* ^experimental = false
* ^caseSensitive = true
* #x509-ssl-tls-certificates "X509 SSL/TLS certificates" "SSL/TLS certificates"
* #x509-mtls-certificate "X509 MTLS certificate" "MTLS certificate"
* #x509-identity-certificate "X509 identity certificate" "X509 identity certificate"
* #x509-signing-certificate "X509 signing certificate" "X509 signing certificate"
* #x509-encryption-certificate "X509 encryption certificate" "X509 encryption certificate"
//* #x-509-certificates "X.509 certificates" "X.509 certificates"
//* #open-pgp-certificates "OpenPGP certificates" "OpenPGP certificates"
//* #kerberos-certificates "Kerberos certificates" "Kerberos certificates"
//* #saml-certificates "SAML certificates" "SAML certificates"
//* #self-signed-certificates "Self-signed certificates" "Self-signed certificates"
//* #authorization-server-certificate "Authorization server certificate" "Authorization server certificate"
//* #token-endpoint-certificate "Token endpoint certificate" "Token endpoint certificate"
//* #jwks-endpoint-certificate "JWKS endpoint certificate" "JWKS endpoint certificate"
//* #userinfo-endpoint-certificate "Userinfo endpoint certificate" "Userinfo endpoint certificate"
//* #revocation-endpoint-certificate "Revocation endpoint certificate" "Revocation endpoint certificate"
//* #introspection-endpoint-certificate "Introspection endpoint certificate" "Introspection endpoint certificate"
//* #registration-endpoint-certificate "Registration endpoint certificate" "Registration endpoint certificate"
//* #management-endpoint-certificate "Management endpoint certificate" "Management endpoint certificate"


CodeSystem: NdhAssociatedServersTypeCS
Title: "NDH Associated Servers Type Code System"
Description: "NDH Associated Servers Type"
* ^experimental = false
//* #fhir "FHIR" "FHIR"
* #proxy-server "Proxy Server" "Proxy Server"
* #testing-proxy-server "Testing Proxy Server" "Testing Proxy Server"
//* #paticipant-gateway-server "Participant Gateway Server"   "Participant Gateway Server"
//* #service-prvider-server "Service Provider Server" "Service Provider Server"
* #indentity-provider-server "Identity Provider Server" "Identity Provider Server"
* #record-locator-service-server "Record Locator Service Server"  "Record Locator Service Server"
//* #consent-managment-service-server "Consent Management Service Server" "Consent Management Service Server" 
//* #audit-logging-server "Audit Logging Server"   "Audit Logging Server"
//* #payer-gateway-server "Payer Gateway Server" "Payer Gateway Server"
//* #data-requestor-server "Data Requestor Server"  "Data Requestor Server"
//* #data-provider-server "Data Provider Server" "Data Provider Server"
* #master-patient-index-server "Master Patient Index (MPI) Server" "Master Patient Index (MPI) Server"
* #authorization-authentication-server "Authorization/Authentication Server" "Authorization/Authentication Server"
//* #authorizartion-registration-server "Authorization/Registration Server" "Authorization/Registration Server"
//* #query-broker-server "Query Broker Server" "Query Broker Server"
//* #data-source-server "Data Source Server" "Data Source Server"
//* #hie-gateway-server "HIE Gateway Server"  "HIE Gateway Server"
//* #provider-directory-server "Provider Directory Server" "Provider Directory Server"
//* #patient-identity-matching-server "Patient Identity Matching Server" "Patient Identity Matching Server"
//* #query-health-service-server "Query Health Service Server" "Query Health Service Server"
//* #certificate-authority-server "Certificate Authority Server" "Certificate Authority Server"
//* #trust-anchor-bundle-server "Trust Anchor Bundle Server" "Trust Anchor Bundle Server"
//* #direct-service-server "Direct Service Server" "Direct Service Server"
* ^caseSensitive = true

CodeSystem: TrustProfileCS
Title: "Trust Profile Code System"
Description: "Trust Profile"
* ^experimental = false
* ^caseSensitive = true
* #udap "UDAP" "UDAP"
* #smart "SMART" "SMART"


CodeSystem: TrustFrameworkTypeCS
Title: "Trust FrameworkType Code System"
Description: "Trust Framework Type"
* ^experimental = false
* #DirectTrust "Direct Trust"
* #CareQuality "Carequality"
* #Commonwell "Commonwell"
* #TEFCA "TEFCA"
* #PayerToPayer	"Payer to Payer Trust Network"
* #Exchange	"Exchange Required by Federal Regulations"
* #PCDH "Patient Centered Data Home"
* ^caseSensitive = true

/*
CodeSystem: NdhVerificationCommunicationMethodCS
Title: "NDH Verification Communication Method Code System"
Description: "NDH Verification Communication Method"
* ^experimental = false
* ^caseSensitive = true
* #manual "Manual" "Manual"
* #portal "Portal" "Portal"
* #pull "Pull" "Pull"
* #push "Push" "Push"
*/

CodeSystem: NdhVerificationProcessCS
Title: "NDH Verification Process Code System"
Description: "NDH Verification Process"
* ^experimental = false
* ^caseSensitive = true
* #primary "Primary source" "Primary source"
* #multi "Multiple source" "Multiple source"
* #manual "Manual" "Manual"
* #in-context "In-context" "element or resource is verified by existence or value of another related element or resource"
* #attester "Attester" "Attester"
* #editcheck "Edit check" "element or resource is verified for format, range, presence, or other similar properties"
* #valueset "Value set" "element or resource is verified against a value set"
* #extsource "External source" "element or resource is verified against an external source"
* #standalone "Standalone" "element or resource is verified by itself and is releated to other elements or resources"

CodeSystem: NdhVerificationStatusCS
Title: "NDH Resource Instance Verification Status Code System"
Description: "NDH Resource Instance Verification Status"
* ^experimental = false
* ^caseSensitive = true
* #complete "Complete" "Complete"
* #incomplete "Incomplete" "Incomplete"
* #not-required "Not Required" "Not Required"


CodeSystem: NdhPayerCharacteristicsCS
Title: "NDH Payer Characteristics Code System"
Description: "NDH Payer Characteristics"
* ^experimental = false
* ^caseSensitive = true
* #medical   "Medical"   "Medical insurance coverage."
* #dental   "Dental"   "Dental insurance coverage."
* #menthlth   "Mental Health"   "Mental health insurance coverage."
* #substanceabuse   "Substance Abuse"   "Substance abuse services insurance coverage."
* #vision   "Vision"   "Vision insurance coverage."
* #drug   "Drug"   "Prescription drug coverage."
* #stc   "Short Term Care"   "Short term care."
* #ltc   "Long Term Care"   "Long term care."
* #hospice   "Hospice"   "Hospice insurance coverage."
* #homehealth   "Home Health"   "Home health services insurance coverage."
* #dmepos   "DMEPOS"   "Durable Medical Equipment, Prosthetics/Orthotics and Supplies."
* #imagingadv   "Advanced Imaging (CT/PET Scans, MRIs)"   "Advances imaging techniques services (CT/PET Scans, MRIs) coverage."
* #rehab   "Rehabilitation"   "Rehabilitation."
* #pcpov   "Primary Care Visit to Treat an Injury or Illness"   "Benefit plan covers services rendered by a primary care physician during an office visit with the purpose to treat injury or illness, except for preventive care services."
* #specialistov   "Specialist Office Visit"   "Covered healthcare service rendered to a patient by a specialty provider."
* #mlpov   "Other Practitioner Office Visit (Nurse, Physician Assistant) - Mid Level Professional"   "Benefit plan covers covered health related services rendered by a practioner other than MD or DO and referred to as other practitioner."
* #outpatient   "Outpatient Facility Fee (e.g., Ambulatory Surgery Center)"   "Benefit plan covers health related services rendered to patient at an outpatient facility, outside of a facility that requires a patient admission."
* #outpatstx   "Outpatient Surgery Physician/Surgical Services"   "Benefit plan covers surgical services rendered to patient outside of a facility admission, referred to as outpatient."
* #hospserv   "Hospice Services"   "Benefit plan covers hospice services."
* #routinedental   "Routine Dental Services (Adult)"   "Benefit plan covers routine dental services."
* #infertilitytx   "Infertility Treatment"   "Benefit plan covers eligible infertility treatment services."
* #ltnhc   "Long-Term/Custodial Nursing Home Care"   "Long-Term/Custodial Nursing Home Care."
* #privatenurse   "Private-Duty Nursing"   "Private-Duty Nursing."
* #routineeye   "Routine Eye Exam (Adult)"   "Routine Eye Exam (Adult)."
* #ucservice   "Urgent Care Centers or Facilities"   "Urgent Care Centers or Facilities."
* #erservice   "Emergency Room Services"   "Emergency Room Services."
* #ambulance   "Emergency Room Services"   "Emergency Room Services."
* #inpatienthospital   "Inpatient Hospital Services (e.g., Hospital Stay)"   "A person who is hospitalized for at least one night to receive treatment or participate in a study."
* #inpatientprovider   "Inpatient Physician and Surgical Services"   "A healthcare provider who is delivering healthcare services in a hospital environment."
* #bariatricsurg   "Bariatric Surgery"   "Bariatric surgery service Skilled nursing service (qualifier value)."
* #cosmeticsurg   "Cosmetic Surgery"   "Cosmetic surgery service Skilled nursing service (qualifier value)."
* #skillednursing   "Skilled Nursing Facility"   "Skilled nursing service (qualifier value)."
* #ppnatalcare   "Prenatal and Postnatal Care"   "Prenatal and Postnatal services."
* #maternitycare   "Delivery and All Inpatient Services for Maternity Care"   "All maternity care services."
* #menthlthoutp   "Mental/Behavioral Health Outpatient Services"   "Mental health service delivered in an outpatient setting."
* #menthlthinp   "Mental/Behavioral Health Inpatient Services"   "Mental health service delivered in an hospital or inpatient facility setting."
* #sadoutp   "Substance Abuse Disorder Outpatient Services"   "Substance abuse related services delivered in a outpatient setting."
* #sadinp   "Substance Abuse Disorder Inpatient Services"   "Substance abuse related services delivered in a inpatient setting."
* #drggenric   "Generic Drugs"   "Generic drugs eligible benefits."
* #drgbrand   "Preferred Brand Drugs"   "Preferred brand drugs eligible benefits."
* #drgnonpreferred   "Non-Preferred Brand Drugs"   "Non-Preferred drugs brands eligible benefits."
* #drgspecialty   "Specialty Drugs"   "Benefit plan covers specialty drugs."
* #rehaboutp   "Outpatient Rehabilitation Services"   "Benefit plan covers outpatient rehabilitation services."
* #servicehablitation   "Habilitation Services"   "Habilitation Services."
* #chiro   "Chiropractic Care"   "Benefit plan covers chiropractor eligible benefits."
* #dme   "Durable Medical Equipment"   "Benefit plan covers Durable medical equipment eligible benefits."
* #hearingaids   "Hearing Aids"   "Benefit plan covers hearing aids."
* #imgctpetmri   "Imaging (CT/PET Scans, MRIs)"   "Benefit plan covers advances imaging techniques services (CT/PET Scans, MRIs) eligible services."
* #prev   "Preventive Care/Screening/Immunization"   "Routine healthcare services to prevent health related problems eligible benefits."
* #rtnpod   "Routine Foot Care"   "Routine Foot Care."
* #acupuncture   "Acupuncture"   "Benefit plan covers acupuncture treatment."
* #weightloss   "Weight Loss Programs"   "Benefit plan covers weight loss services eligible benefits."
* #rtneyechld   "Routine Eye Exam for Children"   "Routine eye exam for children eligible benefits."
* #glasseschld   "Eye Glasses for Children"   "Eye glasses children eligible benefits."
* #rtndntlchld   "Dental Check-Up for Children"   "Dental Check-Up for Children."
* #speachthpy   "Rehabilitative Speech Therapy"   "Benefit plan covers rehabilitative speech therapy eligible benefits."
* #rehaboccandpt   "Rehabilitative Occupational and Rehabilitative Physical Therapy"   "Benefit plan covers rehabilitative occupational and rehabilitative physical eligible benefits."
* #wellbaby   "Well Baby Visits and Care"   "Regularly scheduled, preventive care services, including immunizations, provided to children up to an age as specified by a health insurance company or mandated by a government agency."
* #laboutp   "Laboratory Outpatient and Professional Services"   "Benefit plan covers laboratory testing and related professional services received as outpatient."
* #imagingdx   "X-rays and Diagnostic Imaging"   "Benefit plan covers diagnostic imaging procedures that produce images of internal structures of the human body and uses radiation to diagnose and treat diseases."
* #dntlbaschld   "Basic Dental Care - Child"   "Benefit plan covers diagnostic basic dental care."
* #orthochld   "Orthodontia - Child"   "Benefit plan covers orthodontia for children."
* #dntlmajchld   "Major Dental Care - Child"   "Benefit plan covers major dental care for children."
* #dntlbasadlt   "Basic Dental Care - Adult"   "Benefit plan covers basic dental care for adults."
* #orthodadlt   "Orthodontia - Adult"   "Benefits plan covers services provided that are required for orthodontic purposes for an adult."
* #dntlmajadlt   "Major Dental Care - Adult"   "Benefit plan covers major dental care for adult."
* #abortion   "Abortion for Which Public Funding is Prohibited"   "Benefit plan covers services for abortion for which public funding is prohibited."
* #transplant   "Transplant"   "Benefit plan covers transplant related services."
* #accdntl   "Accidental Dental"   "Benefit plan covers dental care services related to an accident."
* #dialysis   "Dialysis"   "The plan benefit covers services used to treat end stage renal disease."
* #testallrgy   "Allergy Testing"   "The plan benefits covers services for diagnostic procedures ordered or performed to evaluate whether a sensitivity to a substance is present. This test may be associated with specimen collection and/or substance administration challenge activities."
* #chemotherapy   "Chemotherapy"   "The plan benefits cover services the use of drugs and approved chemicals to treat disease."
* #radiation   "Radiation"   "The plan benefits cover services the use radiation to treat disease."
* #edudiab   "Diabetes Education"   "The plan benefits cover services related to instruction or training that encourages behaviors most likely to optimize health potentials through information about diabetes; facilitates the prevention of diabetes."
* #prosthetic   "Prosthetic Devices"   "Plan benefit covers services related to prosthesis devices."
* #infusiontx   "Infusion Therapy"   "Plan benefit covers services related to infusion therapy."
* #tmjtx   "Treatment for Temporomandibular Joint Disorders"   "Plan benefit covers services related to treatment of Temporomandibular Joint disorder."
* #nutrition   "Nutritional Counseling"   "Nutritional Counseling."
* #reconsurg   "Reconstructive Surgery"   "Plan benefit covers services related to reconstructive surgery."
* #days   "Days"   "Measure of service covered by the plan benefit expressed in a definite number of days."
* #visit   "Visits"   "Measure of service covered by the plan benefit expressed in a definite number of visits."
* #procedure   "Procedures"   "Measure of service covered by the plan benefit expressed in a set of actions covered."
* #admission   "Admissions"   "Measure of services covered by the benefit plan expressed in relation to patient's acceptance for medical and nursing care in a hospital or other health care institution."
* #visithrs   "Hours per visit"   "Measure expresses how many hours per visit are covered by the insurance benefit plan."
* #weekhrs   "Hours per week"   "Measure expresses how many hours per week are covered by the insurance benefit plan."
* #mthhrs   "Hours per month"   "Measure expressed how many hours per month are covered by the insurance benefit plan."
* #yrhrs   "Hours per year"   "Measure expreses how many hours per year are covered by the insurance benfit plan."
* #daysperwk   "Days per week"   "Measure of service covered by the plan benefit expressed in a how many days are covered in a week."
* #dayspermth   "Days per month"   "Measure of service covered by the plan benefit expressed in a how many days are covered in a month."
* #daysperyr   "Days per year"   "Measure of service covered by the plan benefit expressed in a how many days are covered in a year."
* #mthsperyr   "Months per year"   "Measure of service covered by the plan benefit expressed in a how many month are covered in a year."
* #visitsperday   "Visits per day"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per day."
* #visitsperweek   "Visits per week"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per week."
* #visitspermth   "Visits per month"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per month."
* #visitsperyr   "Visits per year"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered per year."
* #lifetimevisits   "Lifetime visits"   "Measure of service covered by the plan benefit expressed in a definite number of visits covered through lifetime."
* #txperweek   "Treatments per week"   "Measure of service covered by the plan benefit expressed in a definite number of treatment actions covered in a week."
* #txpermnth   "Treatments per month"   "Measure of service covered by the plan benefit expressed in a definite number of treatment actions covered in a month."
* #txlifetime   "Lifetime treatments"   "Measure of service covered by the plan benefit expressed in a definite number of treatment actions covered in a lifetime."
* #admitslifetime   "Lifetime admissions"   "Measure of service covered by the plan benefit expressed in a definite number admission actions covered through lifetime."
* #procperwk   "Procedures per week"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per week."
* #procpermnth   "Procedures per month"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per month."
* #procperyr   "Procedures per year"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per year."
* #proclifetime   "Lifetime procedures"   "Measure of service covered by the plan benefit expressed in a definite number procedure covered per lifetime."
* #daysperadmission   "Days per admission"   "Measure of service covered by the plan benefit expressed in a definite number of days covered for each individual admission."
* #procperepi   "Procedures per episode"   "Measure of service covered by the plan benefit expressed in a definite number of procedures covered for each individual treatment episode."
* #cat   "Catastrophic"   "'Catastrophic' health insurance plans have low monthly premiums and very high deductibles. They may cover worst-case scenarios, like getting seriously sick or injured. Patient pays most routine medical expenses."
* #bronze   "Bronze"   "'Bronze' type plan defines the estimated split costs of the plan, where patient is responsible for 40% of their healthcare cost while 60% is covered by the plan."
* #bronzeexp   "Expanded Bronze"   "The 'extended bronze' plan is an addition to the bronze metal level which establishes the de minimis variation range for the actuarial value (AV) level of coverage to allow variation in the AV to -4/+2 percentage points."
* #silver   "Silver"   "'Silver' type plan defines the estimated split costs of the plan, where patient is responsible for 30% of their healthcare cost while 70% is covered by the plan."
* #gold   "Gold"   "'Gold' type plan defines the estimated split costs of the plan, where patient is responsible for 20% of their healthcare cost while 80% is covered by the plan."
* #platinum   "Platinum"   "'Platinum' type plan defines the estimated split costs of the plan, where patient is responsible for 10% of their healthcare cost while 90% is covered by the plan."
* #lowded   "Low deductible"   "A health insurance plan with higher premiums and lower out of pocket cost than a traditional health plan."
* #highded   "High deductible"   "A health insurance plan with lower premiums and higher out of pocket cost than a traditional health plan."

//FHIR-35965 service-category and service-type code systems are erroneously defined as 'example'
/*
CodeSystem: HealthcareServiceTypeCS
Title: "HealthcareServiceTypeCS"
Description: "The type of healthcare service"
* ^experimental = false
* ^caseSensitive = true
* #1  "Adoption/Permanent Care Info/Support"   "Adoption/Permanent Care Information and Support"
* #3	"Aged Care Information/Referral"   "Aged Care Information and Referral"
* #8	"Home Care/Housekeeping Assistance"	"Home care/housekeeping assistance"
* #9	"Home Maintenance and Repair"	"Home maintenance and repair"
* #10	"Personal Alarms/Alerts"  "Personal alarms/alerts"
* #11	"Personal Care for Older Persons"	"Personal care for older persons"
* #21	"Hydrotherapy" "Hydrotherapy"
* #26 "Meditation" "Meditation"
* #31 "Relaxation Therapy" "Relaxation Therapy"
* #33 "Western Herbal Medicine" "Western Herbal Medicine"
* #34 "Family Day care" "Family Day care"
* #36 "Kindergarten Inclusion Support" "Kindergarten Inclusion Support"
* #42 "Parenting/Family Support/Education" "Parenting/Family Support/Education"
* #51 "Blood Donation" "Blood Donation"
* #55 "Health Advocacy/Liaison Service" "Health Advocacy/Liaison Service" 
* #67 "Sexual Health" "Sexual Health"
* #68 "Speech Pathology/Therapy" "Speech Pathology/Therapy"
* #69 "Bereavement Counselling" "Bereavement Counselling"
* #70 "Crisis Counselling" "Crisis Counselling"
* #71 "Family Counselling/Therapy" "Family Counselling/Therapy"
* #72 "Family Violence Counselling" "Family Violence Counselling"
* #75 "Genetic Counselling" "Genetic Counselling"
* #76 "Health Counselling" "Health Counselling"
* #78 "Problem Gambling Counselling" "Problem Gambling Counselling"
* #79 "Relationship Counselling" "Relationship Counselling" 
* #80 "Sexual Assault Counselling" "Sexual Assault Counselling"
* #81 "Trauma Counselling" "Trauma Counselling"
* #82 "Victims of Crime Counselling" "Victims of Crime Counselling"
* #96 "Disability Advocacy" "Disability Advocacy"
* #97 "Disability Aids & Equipment" "Disability Aids & Equipment"
* #99 "Disability Day Programs/Activities" "Disability Day Programs/Activities"
* #102 "Disability Supported Accommodation" "Disability Supported Accommodation"
* #103 "Early Childhood Intervention" "Early Childhood Intervention"
* #105 "Drug and/or Alcohol Counselling" "Drug and/or Alcohol Counselling"
* #106 "Drug/Alcohol Information/Referral" "Drug/Alcohol Information/Referral"
* #107 "Needle & Syringe Exchange" "Needle & Syringe Exchange"
* #108 "Non-resid. Alcohol/Drug Treatment" "Non-resid. Alcohol/Drug Treatment"
* #111 "Residential Alcohol/Drug Treatment" "Residential Alcohol/Drug Treatment"
* #118 "Employment Placement and/or Support" "Employment Placement and/or Support"
* #119 "Vocational Rehabilitation" "Vocational Rehabilitation"
* #126 "Crisis/Emergency Accommodation" "Crisis/Emergency Accommodation"
* #127 "Homelessness Support" "Homelessness Support"
* #128 "Housing Information/Referral" "Housing Information/Referral"
* #130 "Interpreting/Multilingual Service" "Interpreting/Multilingual Service"
* #134 "Mental Health Advocacy" "Mental Health Advocacy"
* #146 "Physical Activity Programs" "Physical Activity Programs"
* #147 "Physical Fitness Testing" "Physical Fitness Testing"
* #224 "Support Groups" "Support Groups"
* #230 "Patient Transport" "Patient Transport"
* #233 "Abuse" "Abuse"
* #238 "Adult Day Programs" "Adult Day Programs"
* #245 "Aids" 
* #275 "Cancer Support" "Cancer Support"
* #284 "Child Care" "Child Care"
* #296 "Companion Visiting" "Companion Visiting"
* #301 "Contraception Inform" "Contraception Information"
* #308 "Crisis Assessment And Treatment" "Crisis Assessment And Treatment"
* #309 "Crisis Assistance" "Crisis Assistance"
* #310 "Crisis Refuge" "Crisis Refuge"
* #316 "Depression" "Depression"
* #317 "Detoxification" "Detoxification"
* #323 "Divorce" "Divorce"
* #328 "Eating Disorder" "Eating Disorder"
* #331 "Employment And Train" "Employment And Training"
* #344 "Food" "Food"
* #345 "Food Vouchers" "Food Vouchers"
* #352 "Grief Counselling" "Grief Counselling"
* #366 "Household Items" "Household Items"
* #400 "Pain" "Pain"
* #409 "Postnatal" "Postnatal"
* #411 "Pregnancy Tests" "Pregnancy Tests"
* #427 "Rent Assistance" "Rent Assistance"
* #429 "Residential Respite" "Residential Respite"
* #440 "Sexual Issues" "Sexual Issues"
* #446 "Speech Therapist" "Speech Therapist"
* #459 "Tenancy Advice" "Tenancy Advice"
* #468 "Vocational Guidance" "Vocational Guidance"
* #470 "Welfare Assistance" "Welfare Assistance"
* #488 "Diabetes Educator" "Diabetes Educator"
* #494 "Youth Services" "Youth Services"
* #495 "Youth Health" "Youth Health"
* #501 "Cancer Services" "Cancer Services"
* #513 "Cancer Support Groups" "Cancer Support Groups"
* #530 "Disability Care Transport" "Disability Care Transport"
* #531 "Aged Care Transport" "Aged Care Transport"
* #532 "Diabetes Education Service" "Diabetes Education services"
* #534 "Young Adult Diabetes" "Young Adult Diabetes"
* #535 "Pulmonary Rehabilita" "Pulmonary Rehabilitation"
* #537 "Medication Reviews" "Medication Reviews"
* #539 "Telephone Help Line" "Telephone Help Line"
* #546 "Veterans Services" "Veterans Services"
* #548 "Food Relief/Food/Meals" "Food Relief/Food/Meals"
* #552 "Drug and/or Alcohol Support Groups" "Drug and/or Alcohol Support Groups"
* #554 "Chronic Disease Management" "Chronic Disease Management"
* #559 "Women Health" "Women Health"
* #560 "Men Health" "Men Health"
* #565 "Youth Drop In/Assistance/Support" "Youth Drop In/Assistance/Support"
* #569 "Migrant Health Clinic" "Migrant Health Clinic"
* #570 "Refugee Health Clinic" "Refugee Health Clinic"
* #571 "Aboriginal Health Clinic" "Aboriginal Health Clinic"
* #614 "Development-Life Skills" "Development-Life Skills"
* #628 "Vehicle modifications" "Vehicle modifications"
*/

/*
CodeSystem: HealthcareServiceProgramCS
Title: "Healthcare Program"
Description: "Healthcare Program"
* ^experimental = false
* ^caseSensitive = true
* #1 "Acquired Brain Injury (ABI) Program" "Acquired Brain Injury (ABI) Program"
* #2 "ABI Slow To Recover (ABI STR) Program" "ABI Slow To Recover (ABI STR) Program"
* #3 "Access Programs" "Access Programs"
* #4 "Adult and Further Education (ACFE) Program" "Adult and Further Education (ACFE) Program"
* #5 "Adult Day Activity and Support Services (ADASS) Program" "Adult Day Activity and Support Services (ADASS) Program"
* #6 "Adult Day Care Program" "Adult Day Care Program"
* #7 "ATSS (Adult Training Support Service)" "ATSS (Adult Training Support Service)"
* #8 "Community Aged Care Packages (CACP)" "Community Aged Care Packages (CACP)"
* #9 "Care Coordination & Supplementary Services (CCSS)" "Care Coordination & Supplementary Services (CCSS)"
* #10 "Cognitive Dementia Memory Service (CDAMS)" "Cognitive Dementia Memory Service (CDAMS)"
* #11 "ChildFIRST" "ChildFIRST"
* #12 "Children Contact Services" "Children Contact Services"
* #13 "Community Visitors Scheme" "Community Visitors Scheme"
* #14 "CPP (Community Partners Program)" "CPP (Community Partners Program)"
* #15 "Closing the Gap (CTG)" "Closing the Gap (CTG)"
* #16 "Coordinated Veterans' Care (CVC) Program" "Coordinated Veterans' Care (CVC) Program"
* #17 "Day Program" "Day Program"
* #18 "Drop In Program" "Drop In Program"
* #19 "Early Years Program" "Early Years Program"
* #20 "Employee Assistance Program" "Employee Assistance Program"
* #21 "Home And Community Care (HACC)" "Home And Community Care (HACC)"
* #22 "Hospital Admission Risk Program (HARP)" "Hospital Admission Risk Program (HARP)"
* #23 "Hospital in the Home (HITH) Program" "Hospital in the Home (HITH) Program"
* #24 "ICTP (Intensive Community Treatment Program)" "ICTP (Intensive Community Treatment Program)"
* #25 "IFSS (Intensive Family Support Program)" "IFSS (Intensive Family Support Program)"
* #26 "JPET (Job Placement, Education and Training)" "JPET (Job Placement, Education and Training)"
* #27 "Koori Juvenile Justice Program" "Koori Juvenile Justice Program"
* #28 "Language Literacy and Numeracy Program" "Language Literacy and Numeracy Program"
* #29 "Life Skills Program" "Life Skills Program"
* #30 "LMP (Lifestyle Modification Program)" "LMP (Lifestyle Modification Program)"
* #31 "MedsCheck Program" "MedsCheck Program"
* #32 "Methadone/Buprenorphine Program" "Methadone/Buprenorphine Program"
* #33 "National Disabilities Insurance Scheme (NDIS)" "National Disabilities Insurance Scheme (NDIS)"
* #34 "National Diabetes Services Scheme (NDSS)" "National Diabetes Services Scheme (NDSS)"
* #35 "Needle/Syringe Program" "Needle/Syringe Program"
* #36 "nPEP Program" "nPEP Program"
* #37 "Personal Support Program" "Personal Support Program"
* #38 "Partners in Recovery (PIR) Program" "Partners in Recovery (PIR) Program"
* #39 "Pre-employment Program" "Pre-employment Program"
* #40 "Reconnect Program" "Reconnect Program"
* #41 "Sexual Abuse Counselling and Prevention Program (SACPP)" "Sexual Abuse Counselling and Prevention Program (SACPP)"
* #42 "Social Support Programs" "Social Support Programs"
* #43 "Supported Residential Service (SRS)" "Supported Residential Service (SRS)"
* #44 "Tasmanian Aboriginal Centre (TAC)" "Tasmanian Aboriginal Centre (TAC)"
* #45 "Victim Assistance Program" "Victim Assistance Program"
*/





---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-Extensions.fsh


Extension: Accessibility
Id: base-ext-accessibility
Title: "NDH Accessibility"
Description: "An extension to describe accessibility options offered by a practitioner or at a location."
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* value[x] 1..1 MS
* value[x] only CodeableConcept 
* value[x] from AccessibilityVS (extensible)

Extension: AssociatedServers
Id: base-ext-associatedServers
Title: "NDH Associated Servers"
Description: "This extension is designed to store information about servers that may be associated with the current endpoint. It defines a set of servers that 
could be linked to this endpoint. If a server is associated, the server's type and URL will be included. For example, if your system features two types of endpoints: 
a standard endpoint and a proxy endpoint associated with the server. For example, the proxy endpoint can be configured to interface with AEGIS software, 
allowing the software to record transactions and ensure compliance with pertinent standards or regulations. Implementing such a configuration in a production
environment would offer the flexibility to switch between standard and proxy modes (associated server) as necessary. Consequently, it is essential to have both
standard and proxy endpoints readily available for seamless transitions as required."
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   associatedServersType  1..1 MS and
   serverURL 0..1 MS 
* extension[associatedServersType].value[x] only CodeableConcept
* extension[associatedServersType] ^short = "Associated Server Type"
* extension[associatedServersType].value[x] 1..1
* extension[associatedServersType].value[x] from NdhAssociatedServersTypeVS (extensible)  
* extension[serverURL].value[x] only string
* extension[serverURL] ^short = "Binary"
* extension[serverURL].value[x] 1..1

/*
Extension: CareteamAlias
Id: base-ext-careteam-alias
Title: "NDH Careteam Alias"
Description: "Alternate names by which the team is known"
* ^context.expression = "CareTeam"
* ^context.type = #element
* ^date = "2017-11-16T15:42:31.192-05:00"
* . ^short = "Alias"
* . ^definition = "Alternate names by which the team is also known"
* valueString 1.. MS
* valueString only string
* valueString ^sliceName = "valueString"
* valueString ^label = "alias"
* valueString ^short = "Alias"
* valueString ^definition = "Alternate names by which the team is also known"
*/

Extension: CommunicationProficiency
Id: base-ext-communication-proficiency
Title: "NDH Communication Proficiency"
Description: "An extension to express a practitioner’s spoken proficiency with the language indicated in practitioner.communication."
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 1..1 
* value[x] only CodeableConcept 
* value[x] from $ILRReadingScaleVS (extensible)

Extension: EndpointConnectionTypeVersion
Id: base-ext-endpoint-connection-type-version
Title: "NDH Endpoint Connection Type Version"
Description: "An extension for endpoint connection type version"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1 MS
* value[x] only CodeableConcept
* value[x] from $FHIRVersionVS (extensible)
//* value[x] from EndpointConnectionTypeVersionVS (extensible)

Extension: EndpointTestingCertification   
Id: base-ext-endpoint-testing-certification
Title: "NDH Endpoint Testing Certification"
Description: "An extension for endpoint testing certification"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   testBy 0..1 and
   element 0..* and
   when 0..1 and
   testName 0..* and
   method 0..* and 
   certificate 0..1 and
   expirationDate 0..1 and 
   lastUpdated 0..1
* extension[testBy].value[x] only Reference(NdhOrganization)
* extension[testBy] ^short = "Organization conducting or providing the testing"
* extension[element].value[x] only Expression
* extension[element] ^short = "FHIRPath expression to the element being tested/verified"
* extension[when].value[x] only dateTime
* extension[when] ^short = "Date and time the test was performed"
* extension[testName].value[x] only string
* extension[testName] ^short = "Name of the test"
* extension[method].value[x] only CodeableConcept
* extension[method] ^short = "Method used to perform the test"
* extension[method].value[x] from EndpointTestingMethodVS (extensible)
* extension[certificate].value[x] only base64Binary
* extension[certificate] ^short = "X509 V3 identity Certificate issued and signed by Testing/Certification entity"
* extension[expirationDate].value[x] only date
* extension[expirationDate] ^short = "Expiration date of the certificate"
* extension[lastUpdated].value[x] only dateTime
* extension[lastUpdated] ^short = "Timestamp of the last update for the Endpoint instance during certificate testing"

Extension: ContactPointAvailableTime
Id: base-ext-contactpoint-availabletime
Title: "NDH Contactpoint Availabletime"
Description: "An extension representing the days and times a contact point is available"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..0
* extension contains
   daysOfWeek 0..* MS and 
   allDay 0..1 MS and
   availableStartTime 0..1 MS and
   availableEndTime 0..1 MS
* extension[daysOfWeek].value[x] only code 
* extension[daysOfWeek].valueCode from $DaysOfWeekVS
* extension[allDay].value[x] only boolean 
* extension[availableStartTime].value[x] only time 
* extension[availableEndTime].value[x] only time  


Extension: DeliveryMethod
Id: base-ext-delivery-method
Title: "NDH Delivery Method"
Description: "An extension describing the service delivery method. If service delivery is virtual, one or more delivery modalities should be specified."
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] 0..0
* extension contains
   deliveryMethodtype 1..1 and
   virtualModalities 0..* MS 
* extension[deliveryMethodtype].value[x] only CodeableConcept 
* extension[deliveryMethodtype].value[x] from $DeliveryMethodVS (required)
* extension[deliveryMethodtype] ^short = "Physical or Virtual Service Delivery"
* extension[deliveryMethodtype].value[x] 1..1
* extension[virtualModalities].value[x] only CodeableConcept 
* extension[virtualModalities].value[x] from VirtualModalitiesVS (extensible)
* extension[virtualModalities].value[x] 1..1
* extension[virtualModalities] ^short = "Modalities of Virtual Delivery"



Extension: Digitalcertificate
Id: base-ext-digitalcertificate
Title: "NDH Digitalcertificate"
Description: "A digital certificate, used to identify a user or group of users, or for encrypted communications"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..0
* extension contains
   use 0..1 and
   certificate 1..1 and
   expirationDate 1..1
* extension[use] ^short = "Use"
* extension[use].value[x] 1..1
* extension[use].value[x] only Coding
* extension[use].value[x] from DigitalcertificateUseVS (example)
* extension[certificate] ^short = "Certificate"
* extension[certificate].value[x] only string or uri
* extension[certificate].value[x] 1..1
* extension[expirationDate] ^short = "Expiration Date"
* extension[expirationDate].value[x] 1..1
* extension[expirationDate].value[x] only date


Extension: DynamicRegistration
Id: base-ext-dynamicRegistration
Title: "NDH Dynamic Registration"
Description: "Dynamic registration within a trust framework refers to a process where clients can register with a server or service provider 
dynamically and securely at runtime, rather than being pre-registered manually. This approach is often used in environments where scalability, flexibility, 
and security are crucial.  Currently, dynamic registration is used in SMART and UDAP."
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   trustProfile 0..1 and
   version  0..1 MS
   //binary 1..1 MS 
* extension[trustProfile].value[x] only CodeableConcept
* extension[trustProfile].value[x] from TrustProfileVS (extensible)
* extension[version].value[x] only string
* extension[version] ^short = "Trust Profile Version"
* extension[version].value[x] 0..1

/*
Extension: Ehr
Id: base-ext-ehr
Title: "NDH EHR"
Description: "Information about the EHR system/module used at a location"
* value[x] 0..0
* extension contains
   developer 0..1 MS and
   product 0..1 MS and
   version 0..1 MS and
   certificationEdition 0..1 MS and
   patientAccess 0..* MS and
   certificationID 0..1 MS
* extension[developer].value[x] 1..1
* extension[developer].value[x] only string 
* extension[developer] ^definition = "Developer"
* extension[developer] ^short = "Developer"
* extension[product].value[x] 1..1
* extension[product].value[x] only string
* extension[product] ^definition = "Product"
* extension[product] ^short = "Product"
* extension[version].value[x] 1..1
* extension[version].value[x] only string
* extension[version] ^definition = "Version"
* extension[version] ^short = "Version"
* extension[certificationEdition].value[x] 1..1
* extension[certificationEdition].value[x] only Coding
* extension[certificationEdition] ^definition = "Certification edition"
* extension[certificationEdition] ^short = "Certification edition"
* extension[patientAccess].value[x] 1..1
* extension[patientAccess].value[x] only CodeableConcept
* extension[patientAccess] ^definition = "Patient access"
* extension[patientAccess] ^short = "Patient access"
* extension[certificationID].value[x] 1..1
* extension[certificationID].value[x] only string
* extension[certificationID] ^definition = "Certification ID"
* extension[certificationID] ^short = "Certification ID"
*/

Extension: EndpointRank
Id: base-ext-endpoint-rank
Title: "NDH Endpoint Rank"
Description: "Order established by a Role, Organization… for Endpoints capable of transferring the same content"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 1..1
* value[x] only positiveInt
//* valuePositiveInt 1..1


Extension: EndpointReference
Id: base-ext-endpoint-reference
Title: "NDH Endpoint Reference"
Description: "The technical details of an endpoint that can be used for electronic services"
//do this way creat slice inside of extension
//* value[x] only Reference
//* valueReference 1..1
//* valueReference only Reference(NdhEndpoint)
//do this way no slice created inside of extension
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* value[x] only Reference(NdhEndpoint) 
* value[x] 1..1 

Extension: EndpointenvironmentType
Id: base-ext-endpoint-environment-type
Title: "NDH Endpoint EnvironmentType"
Description: "Endpoint Environment Type"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from NdhEndpointEnvironmentVS (extensible)

Extension: EndpointIheSpecificConnectionType
Id: base-ext-endpoint-ihe-specific-connection-type
Title: "NDH Endpoint IHE Specific Connection Type"
Description: "Endpoint IHE Specific Connection Type"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1
* value[x] only CodeableConcept
//* value[x] from EndpointHieSpecificConnectionTypeVS (preferred)
* value[x] from EndpointIheSpecificConnectionTypeVS (preferred)

Extension: EndpointUsecase
Id: base-ext-endpoint-usecase
Title: "NDH Endpoint Usecase"
Description: "EndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   endpointUsecasetype 1..1 MS and
   standard 0..1 MS 
* extension[endpointUsecasetype] ^short = "An indication of the type of services supported by the endpoint"
* extension[endpointUsecasetype].value[x] only  CodeableConcept 
* extension[endpointUsecasetype].value[x]  1..1
* extension[endpointUsecasetype].value[x] from NdhFhirEndpointUseCaseVS (extensible)
* extension[standard] ^short = "A URI to a published standard describing the services supported by the endpoint (e.g. an HL7 implementation guide)"
* extension[standard].value[x] only uri 
* extension[standard].value[x] 1..1


Extension: FhirIg
Id: base-ext-fhir-ig
Title: "NDH FHIR IG"
Description: "FHIR IG"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   ig-publication 0..1 and
   ig-name 0..1 and
   ig-version 0..1
* extension[ig-publication].value[x] only uri
* extension[ig-publication] ^short = "IG Publication"
* extension[ig-name] ^short = "IG Name"
* extension[ig-name].value[x] only string
* extension[ig-name].value[x] 1..1
* extension[ig-version].value[x] only string
* extension[ig-version] ^short = "IG Version"
* extension[ig-version].value[x] 1..1

Extension: CombinedPayloadAndMimeType
Id: base-ext-combined-payload-and-mimetype
Title: "NDH Combined Payload And MimeType"
Description: "Combined Payload And MimeType"
//* ^context.type = #element
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-supported-ig-actor"
* value[x] 0..0
* extension contains
   payload 0..1 and
   mimeType 0..*
* extension[payload].value[x] only CodeableConcept
* extension[payload].value[x] from NdhDirectTrustPayloadTypeVS (extensible)
* extension[payload].value[x] 1..1
* extension[payload] ^short = "payload type"
* extension[mimeType].value[x] only code
* extension[mimeType].value[x] 1..1
* extension[mimeType] ^short = "mimeType for the payload type"
* extension[mimeType].value[x] from EndpointCommonMimeTypeVS (extensible)

Extension: SupportedIGActor
Id: base-ext-supported-ig-actor
Title: "NDH Supported IG Actor"
Description: "Supported IG Actor"
//* ^context[+].type = #element
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ig-supported"
* value[x] 0..0
* extension contains
   ig-actor-name 0..1 and
   ig-actor 0..1 and
   CombinedPayloadAndMimeType named payload-and-mimetype 0..*
* extension[ig-actor-name].value[x] only string
* extension[ig-actor-name].value[x] 1..1
* extension[ig-actor-name] ^short = "IG Actor Name"
* extension[ig-actor].value[x] only CodeableConcept
* extension[ig-actor].value[x] from IgActorVS (extensible)
* extension[ig-actor].value[x] 1..1
* extension[ig-actor] ^short = "IG Actor"
* extension[payload-and-mimetype] ^short = "Payload and MimeType"


Extension: IgSupported
Id: base-ext-ig-supported
Title: "NDH Supported IG"
Description: "Supported IG"
//* ^context.type = #element
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-non-fhir-usecase"
* value[x] 0..0
* extension contains
   ig-publication 0..1 and
   ig-name 0..1 and
   ig-version 0..1 and
   SupportedIGActor named supported-ig-actor 0..*
* extension[ig-publication].value[x] only uri
* extension[ig-publication] ^short = "IG Publication"
* extension[ig-name] ^short = "IG Name"
* extension[ig-name].value[x] only string
* extension[ig-name].value[x] 1..1
* extension[ig-version].value[x] only string
* extension[ig-version] ^short = "IG Version"
* extension[ig-version].value[x] 1..1

Extension: EndpointNonFhirUsecase
Id: base-ext-endpoint-non-fhir-usecase
Title: "NDH Endpoint Non FHIR Usecase"
Description: "NonEndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   endpointUsecasetype 0..1 and
   IgSupported named ig-supported 0..*
* extension[endpointUsecasetype] ^short = "An indication of the type of services supported by the endpoint"
* extension[endpointUsecasetype].value[x] only  CodeableConcept 
* extension[endpointUsecasetype].value[x]  0..1
* extension[endpointUsecasetype].value[x] from NdhDirectTrustEndpointUsecaseVS (extensible)
* extension[ig-supported] ^short = "IG supported"

Extension: FundingSource
Id: base-ext-fundingSource
Title: "NDH Funding Source"
Description: "The sources of funding for a service or organization"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* extension contains
    fundingSourceId 0..1 MS and
    fundingOrganization 0..* and
    fundingSource 1..1 MS
* extension[fundingSourceId].value[x] only string
* extension[fundingSource].value[x] only string
* extension[fundingOrganization].value[x] only Reference(NdhOrganization)

Extension: HealthcareServiceReference
Id: base-ext-healthcareservice-reference
Title: "NDH Healthcareservice Reference"
Description: "Reference to healthcareservice resource"
* ^context.type = #element
* ^context.expression = "CareTeam"
* value[x] only Reference(NdhHealthcareService) 
* value[x] 1..1 MS 

Extension: IdentifierStatus
Id: base-ext-identifier-status
Title: "NDH Identifier Status"
Description: "Describes the status of an identifier"
* ^context.expression = "Identifier"
* ^context.type = #element
* ^date = "2017-11-20T11:33:43.51-05:00"
* value[x] 1..1 MS
* value[x] only code
* value[x] from $IdentifierStatusVS (required)
* value[x] ^short = "active|inactive|issued-in-error|expired|revoked|pending|provisional|unknown"

Extension: InsurancePlanReference
Id: base-ext-insuranceplan-reference
Title: "NDH InsurancePlan Reference"
Description: "Reference to insuranceplan resource"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] only Reference(NdhInsurancePlan)
* value[x] 1..1 MS

Extension: LocationReference
Id: base-ext-location-reference
Title: "NDH Location Reference"
Description: "A reference to a Location resource (NDH-Location) defining the coverage area of a health insurance provider network"
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] only Reference (NdhLocation)
* value[x] 1..1 MS 

Extension: NewPatientsCharacteristics
Id: base-ext-newpatients-characteristics
Title: "NDH New Patients Characteristics"
Description: "Characteristics of accepted patients"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients"
* value[x] 1..1
* value[x] only string
* value[x] ^short = "Characteristics of accepted patients"

Extension: NewPatients
Id: base-ext-newpatients
Title: "NDH New Patients"
Description: "New Patients indicates whether new patients are being accepted in general, or from a specific network.   
              This extension is included in the PractitionerRole, HealthcareService, and Location profiles.  
              This provides needed flexibility for specifying whether a provider accepts new patients by location and network."
* obeys new-patients-characteristics
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..0
* extension contains
   acceptingPatients  1..1 MS and
   fromNetwork 0..1 MS  and
   NewPatientsCharacteristics named characteristics 0..* MS 
* extension[acceptingPatients].value[x] only CodeableConcept
* extension[acceptingPatients] ^short = "Accepting Patients"
* extension[acceptingPatients].value[x] 1..1
* extension[acceptingPatients].value[x] from AcceptingPatientsVS (required)
* extension[fromNetwork].value[x] only Reference(NdhNetwork)
* extension[fromNetwork].value[x] 1..1
* extension[fromNetwork] ^short = "From Network"
//* extension[characteristics].value[x] only string
//* extension[characteristics].value[x] 1..1
* extension[characteristics] ^short = "Characteristics of accepted patients"

Extension: NetworkReference
Id: base-ext-network-reference
Title: "NDH Network Reference"
Description: "A reference to the healthcare provider insurance networks (NdhNetwork) the practitioner participates in through their role"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] only Reference(NdhNetwork) 
* value[x] 1..1 MS 

Extension: OrgAliasType
Id: base-ext-org-alias-type
Title: "NDH Organization Alias Type"
Description: "Type of organization alias (legal alternative, historical)"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..1
* value[x] ^short = "Alias Type"
* value[x] only CodeableConcept
* value[x] 1..1 MS
* value[x] from OrgAliasTypeVS (example)

Extension: OrgAliasPeriod
Id: base-ext-org-alias-period
Title: "NDH Organization Alias Period"
Description: "The period of time the organization alias was actively used"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..1 
* value[x] ^short = "Alias Period"
* value[x] only Period
* value[x] 1..1 MS

Extension: OrgDescription
Id: base-ext-org-description
Title: "NDH Org Description"
Description: "An extension to provide a human-readable description of an organization"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] 1..1 MS
* value[x] only string

Extension: PaymentAccepted
Id: base-ext-paymentAccepted
Title: "NDH Payment Accepted"
Description: "Methods of payment that can be used for a healthcare service"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] 0..1 
* value[x] only CodeableConcept 
* value[x] from $paymentTypeVS (required)

Extension: VerificationStatus
Id: base-ext-verification-status
Title: "NDH Verification Status"
Description: "Indicates a resource instance verification status"
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "InsurancePlan"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from NdhVerificationStatusVS (extensible)


Extension: PractitionerQualification
Id: base-ext-practitioner-qualification
Title: "NDH Practitioner Qualification"
Description: "An extension to add status and whereValid elements to a practitioner’s qualifications."
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 0..0
* extension contains
   status 1..1 MS and
   whereValid 0..* MS 
* extension[status] ^short = "Status"
* extension[status].value[x] only  code 
* extension[status].value[x] 1..1
* extension[status].value[x] from QualificationStatusVS (required)
* extension[status].value[x] =  $QualificationStatusCS#active (exactly)
* extension[whereValid] ^short = "Where the qualification is valid"
//* extension[whereValid].value[x] only CodeableConcept or Reference(NdhLocation)
* extension[whereValid].value[x] only CodeableConcept
* extension[whereValid].value[x] from $USPSState (required)
//* extension[whereValid].value[x] 1..1

Extension: Qualification
Id: base-ext-qualification
Title: "NDH Qualification"
Description: "An extension to add qualifications for an organization (e.g. accreditation) or practitionerRole 
(e.g. registered to prescribe controlled substances)."
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] 0..0
* extension contains
   identifier 0..* MS and
   code 1..1 MS and
   issuer 0..1 MS and
   status 1..1 MS and
   period 0..1 MS and
   whereValid 0..* MS
* extension[identifier] ^short = "Identifier"
* extension[identifier].value[x] 1..1
* extension[identifier].value[x] only Identifier
* extension[code] ^short = "Code"
* extension[code].value[x] 1..1
* extension[code].value[x] only CodeableConcept
* extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[issuer] ^short = "Issuer"
* extension[issuer].value[x] 1..1
* extension[issuer].value[x] only Reference(NdhOrganization or NdhNdApiOrganization)
* extension[issuer] ^short = "Reference to NdhOrganization, NdhNdApiOrganization"
* extension[status] ^short = "Status"
* extension[status].value[x] 1..1
* extension[status].value[x] only  code 
* extension[status].value[x] from QualificationStatusVS (required)
* extension[status].value[x] =  $QualificationStatusCS#active (exactly)
* extension[period] ^short = "Period"
* extension[period].value[x] 1..1
* extension[period].value[x] only Period
* extension[whereValid] ^short = "Where the qualification is valid"
* extension[whereValid].value[x] 1..1
* extension[whereValid].value[x] only CodeableConcept or Reference(NdhLocation)
* extension[whereValid].value[x] from $USPSState (required)

Extension: RatingDetails
Id: base-ext-rating-details
Title: "NDH Rating Details"
Description: "Rating Details"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-rating"
* extension contains
   ratingSystem  0..1 and
   ratingType 0..1 and
   ratingValue 0..1
* extension[ratingSystem].value[x] only url
* extension[ratingSystem] ^short = "URL to a specific rating system"
* extension[ratingSystem].value[x] 0..1
* extension[ratingType].value[x] only url
* extension[ratingType] ^short = "URL to a specific rating type"
* extension[ratingType].value[x] 0..1
* extension[ratingValue].value[x] only string or Quantity
* extension[ratingValue] ^short = "Rating Value either Text or Number"
* extension[ratingValue].value[x] 0..1

Extension: Rating
Id: base-ext-rating
Title: "NDH Rating"
Description: "Rating"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* extension contains
   ratingType  0..1 and
   ratingValue 0..1 and
   RatingDetails named rating-details 0..*
* extension[ratingType] ^short = "Rating type"
* extension[ratingType].value[x] only CodeableConcept
* extension[ratingType].value[x] ^short = "Rating type value set will be defined by the implementer"
* extension[ratingValue].value[x] 1..1
* extension[ratingValue].value[x] only string or Quantity
* extension[ratingValue] ^short = "Rating Value either Text or Number"

Extension: RequiredDocument
Id: base-ext-requiredDocument
Title: "NDH Required Document"
Description: "Documents that are required in order to access or use services (eg. Gov't issued ID, passport)"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* extension contains
   requiredDocumentId 1..* and 
   document  1..*  
* extension[requiredDocumentId].value[x] only string
* extension[document].value[x] only string

Extension: EndpointAccessControlMechanism
Id: base-ext-endpointAccessControlMechanism
Title: "NDH Endpoint Access Control Mechanism"
Description: "Endpoint access control mechanisms protect and manage access to healthcare endpoints, ensuring secure data exchange between systems. 
They standardize methods to secure endpoints, ensuring interoperability and security.  
In certain use cases requiring system scalability and flexibility, different profiles may be utilized based on the chosen access control mechanism. For example, 
the Unified Data Access Profile (UDAP) uses JWT access tokens."
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from EndpointAccessControlMechanismVS (extensible)

Extension: LanguageSpeak
Id: base-ext-language-speak
Title: "NDH Language Speak"
Description: "Language Speak"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* value[x] 1..1
* value[x] only code
* value[x] from $LanguagesVS (extensible)

Extension: Logo
Id: base-ext-logo
Title: "NDH Logo"
Description: "Logo"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* value[x] 1..1
* value[x] only Attachment

/*
Extension: MalpracticePayment
Id: base-ext-malpractice-payment
Title: "NDH Malpractice Payment"
Description: "Malpractice Payment"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-malpractice-coverage-payment"
* extension contains
   amount  0..1 and
   date 0..1 and
   payee 0..1 and
   recipient 0..1
* extension[amount].value[x] only Money
* extension[date].value[x] only dateTime
* extension[payee].value[x] only Reference(NdhOrganization)
* extension[recipient].value[x] only Reference(NdhPractitioner or NdhPractitionerRole or NdhOrganization or NdhOrganizationAffiliation) 

Extension: MalpracticeCoveragePayment
Id: base-ext-malpractice-coverage-payment
Title: "NDH Malpractice Coverage Payment"
Description: "Malpractice Coverage Payment"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* extension contains
   MalpracticePayment named payment 0..*
* extension[payment] ^short = "Malpractice Payment"

Extension: DisciplinaryAction
Id: base-ext-disciplinary-action
Title: "NDH Disciplinary Action"
Description: "Disciplinary Action"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* extension contains
   actionOn  0..1 and
   actionType  0..1 and
   actionPeriod 0..1 and
   actionStatus 0..1
* extension[actionOn].value[x] only CodeableConcept
* extension[actionOn] ^short = "Action On a particular liecnse or certification"
* extension[actionType].value[x] only CodeableConcept
* extension[actionType] ^short = "Action Type: sanction, excluded"
* extension[actionPeriod].value[x] only Period
* extension[actionPeriod] ^short = "Action start and end date"
* extension[actionStatus].value[x] only CodeableConcept
* extension[actionStatus] ^short = "Action Status: 1830 - recommentation to sanction, 1840 - withdrawal of recomendation to sanction"

*/


Extension: SecureExchangeArtifacts
Id: base-ext-secureExchangeArtifacts
Title: "NDH Secure Exchange Artifacts"
Description: "This extension is designed to store information about the type of public certificate, the public certificate itself, and the expiration date of the 
certificate. Public certificates, issued by Certificate Authorities, are intended for sharing and inspection by others as part of the trust and verification process 
in digital communications. Each certificate includes an expiration date, which is a crucial piece of information easily accessible to anyone examining the certificate. 
The expiration date plays a significant role in validating the certificate's current validity and in maintaining security within digital communications. 
This extension should be used when the standard for exchange requires the discovery of the public key."
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* extension contains
   secureExchangeArtifactsType  1..1 MS and
   certificate 0..1 MS and
   expirationDate 0..1
* extension[secureExchangeArtifactsType].value[x] only CodeableConcept
* extension[secureExchangeArtifactsType] ^short = "Secure Artifact Type"
* extension[secureExchangeArtifactsType].value[x] 1..1 
* extension[secureExchangeArtifactsType].value[x] from NdhSecureExchangeArtifactsVS (extensible)
* extension[certificate].value[x] only base64Binary
* extension[certificate].value[x] 1..1
* extension[certificate] ^short = "Certificate"
* extension[expirationDate].value[x] only dateTime
* extension[expirationDate].value[x] 1..1
* extension[expirationDate] ^short = "Expiration Date"

Extension: RestrictFhirPath
Id: base-ext-restrictFhirPath
Title: "NDH usage restriction fhir path"
Description: "NDH usage restriction to resource element level"
* ^context[+].type = #element
* ^context[=].expression = "Consent"
* value[x] 1..1
* value[x] only Expression
* value[x].language = #text/fhirpath


Extension: TrustFramework
Id: base-ext-trustFramework
Title: "NDH Trust Framework"
Description: "A trust framework typically requires the use of signed artifacts and public certificates to ensure security, integrity, and trust in digital communications 
and transactions. For trust frameworks that use private PKI there is no need to use this extension unless the goals is to provide access to endpoints via the endpoint 
reference on any of the relevant resources (e.g., careteam, healthcareService)."
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* extension contains
   trustFrameworkType  1..1 MS and
   qualifier 0..1 MS and
   signedArtifact 0..1 and
   publicCertificate 0..1 
* extension[trustFrameworkType].value[x] only CodeableConcept
* extension[trustFrameworkType] ^short = "Trust Framework Type"
* extension[trustFrameworkType].value[x] from TrustFrameworkTypeVS (extensible)
* extension[qualifier].value[x] only string
* extension[qualifier] ^short = "A qualifier associates with an endpoint to provide additional context or information about that endpoint in a trust framework community. 
Qualifiers are used to help other members of the community understand the capabilities, compliance status, or other relevant characteristics of an endpoint."
* extension[qualifier].value[x] 1..1
* extension[signedArtifact].value[x] only base64Binary
* extension[signedArtifact] ^short = "By utilizing a signed artifact, you can identify which Certificate Authority has issued the certificate for the entity that 
signed the artifact. Verifying the issuing Certificate Authority is crucial because it adds an additional layer of trust and security, ensuring that the entity involved 
in the data exchange is legitimate and that their digital identity has been properly validated."
* extension[signedArtifact].value[x] 1..1
* extension[publicCertificate].value[x] only base64Binary
* extension[publicCertificate] ^short = "Public certificates help in affirming that an entity is indeed who they claim to be. These certificates are used to establish 
secure connections via the Mutual TLS (Transport Layer Security) protocol. Public certificates issued by Certificate Authorities are fundamental in establishing a 
secure and trustworthy digital environment. They enable secure communication, ensure data integrity, and facilitate authentication and trust across a wide range of 
online interactions."
* extension[publicCertificate].value[x] 1..1

Extension: UsageRestriction
Id: base-ext-usage-restriction
Title: "NDH Usage Restriction"
Description: """The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources, as well as by access control 
mechanisms to ensure content isn't exposed that shouldn't be. This mechanism only goes to the resource level, this reference to a usage-restriction (consent) extends 
this further into the resource, and can be applied to any element, and may apply to all properties beneath the element (e.g. If applied to an identifier on a practitioner, 
then all the properties of the identifier should not be exposed unless it is understood) This will be expected to be used as a modifier extension."""
* ^date = "2017-10-20T10:59:36.931+11:00"
* . ^short = "Restriction"
* . ^definition = "Identifies and conveys information about restrictions on the use or release of exchanged information, e.g. information that can only be shared 
under particular condition, such as a signed data use agreement between parties"
* ^context[+].type = #element
* ^context[=].expression = "CareTeam"
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "InsurancePlan"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] only Reference(NdhRestriction)
* value[x] 1..1
* value[x] ^type.aggregation = #contained
* value[x] ^short = "Reference"
//* value[x].identifier ..0
* value[x] ^definition = "Reference to the restriction resource (consent)"
* value[x] ^comment = "This is anticipated to usually be a reference to a contained resource (this eases distribution, and permits the same consent applying 
to multiple properties in the same resource)"


Extension: ViaIntermediary
Id: base-ext-via-intermediary
Title: "NDH Via Intermediary"
Description: "A reference to an alternative point of contact (NdhPractitionerRole, NdhOrganization, NdhOrganizationAffiliation, or NdhLocation) for this organization"
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
//* ^context.expression = "descendants()"
* value[x] only Reference(NdhPractitionerRole or NdhOrganizationAffiliation or NdhLocation or NdhOrganization) 
* value[x] 1..1 MS

Extension: NdhAgeRange
Id: base-ext-ndh-age-range
Title: "NDH Age Range"
Description: "Age Range"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement"
* value[x] 1..1
* value[x] only Range
* value[x] ^short = "Age Range"

Extension: NdhAgeGroup
Id: base-ext-ndh-age-group
Title: "NDH Age Group"
Description: "Age Group"
* ^context[+].type = #extension
* ^context[=].expression = "http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] ^short = "Age Group"
* value[x] from AgeGroupVS (extensible)

Extension: ServiceOrProgramRequirement
Id: base-ext-service-or-program-requirement
Title: "NDH HealthcareService or Program Requirement"
Description: "Service or Program requirement indicates whether the program is available to anyone, or only to those meeting certain criteria." 
* obeys agerange-or-agegroup 
//* ^context[+].type = #fhir
//* ^context[=].expression = "descendants()"
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] 0..0
* extension contains
   NdhAgeRange named age-range 0..1 and
   NdhAgeGroup named age-group 0..1 and
   birthsex 0..1 and
   gender-identity 0..1 and
   employment-status 0..1 and
   insurance-status 0..1 and
   va-status 0..1 and
   preferred-language 0..1
//* extension[age-range].value[x] only Range
* extension[age-range] ^short = "Age Range"
//* extension[age-range].value[x] 1..1
//* extension[age-group].value[x] only CodeableConcept
* extension[age-group] ^short = "Age Group"
//* extension[age-group].value[x] 1..1
//* extension[age-group].value[x] from AgeGroupVS (extensible)
* extension[birthsex].value[x] only code
* extension[birthsex] ^short = "Birth Sex"
* extension[birthsex].value[x] 1..1
* extension[birthsex].valueCode from http://hl7.org/fhir/us/core/ValueSet/birthsex
* extension[gender-identity].value[x] only CodeableConcept
* extension[gender-identity] ^short = "Gender Identity"
* extension[gender-identity].value[x] 1..1
* extension[gender-identity].valueCodeableConcept from http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.32 (extensible)
* extension[employment-status].value[x] only CodeableConcept
* extension[employment-status] ^short = "Employment Status"
* extension[employment-status].value[x] 1..1
* extension[employment-status].value[x] from EmploymentStatusVS (extensible)
* extension[insurance-status].value[x] only CodeableConcept
* extension[insurance-status] ^short = "Insurance Status"
* extension[insurance-status].value[x] 1..1
* extension[insurance-status].value[x] from InsuranceStatusVS (extensible)
* extension[va-status].value[x] only boolean
* extension[va-status] ^short = "Veteran Status"
* extension[va-status].value[x] 1..1
* extension[preferred-language].value[x] only CodeableConcept
* extension[preferred-language].value[x] from $LanguagesVS (extensible)




---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-Invariant.fsh


Invariant:  network-or-NatlDirwork 
Description: "If an insuranceplan does not define a network, then each plan must define one"
//Expression: "network.exists() or plan.network.exists.allTrue()"
Expression: "network.exists() or coverage.network.exists() or plan.network.exists()"
Severity:   #error

Invariant:  agerange-or-agegroup
Description: "a service or program only allow to have either age-range or age-group but not both"
//Expression: "extension('age-range').empty() or extension('age-group').empty() or (extension('age-range').empty() and extension('age-group').empty())"
Expression: "extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-range').empty() or extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-group').empty() or (extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-range').empty() and extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-group').empty())"
Severity:   #error

Invariant:  new-patients-characteristics 
Description: "If no new patients are accepted, no characteristics are allowed"
//Expression: "extension('acceptingPatients').value.coding.exists(code = 'nopt') implies extension('characteristics').empty()"
Expression: "extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').value.coding.exists(code = 'nopt') implies extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients-characteristics').empty()"
Severity:   #error

Invariant:  organization-or-participatingOrganization 
Description: "NdhOrganizationAffiliation.organization or  NdhOrganizationAffiliation.participatingOrganization"
Expression: "organization.exists() or participatingOrganization.exists()"
Severity:   #error

Invariant: plan-type-is-distinct
Description: "Each InsurancePlan.plan should have a distinct plan.type."
Expression: "plan.type.coding.code.isDistinct()"
Severity:   #error


Invariant:  practitioner-or-organization-or-healthcareservice-or-location 
Description: "If NdhPractitionerRole.practitioner is absent  ( NdhPractitionerRole.organization, NdhPractitionerRole.healthcareservice, NdhPractitionerRole.location) 
must be present"
Expression: "practitioner.exists() or (organization.exists() or healthcareService.exists() or location.exists())"
Severity:   #error

/*
Invariant:  endpoint-fhir-payloadtype
Description: "For non-fhir endpoint, non-fhir-payloadtype extension should be used"
Expression: "connectionType.coding.exists(code = 'hl7-fhir-rest' or code = 'hl7-fhir-msg') implies extension('non-fhir-payloadtype').empty()"
Severity:   #error

Invariant: endpoint-fhir-payloadmimetype 
Description: "For fhir endpoint, payloadMimetype fhir/json, fhir/xml, or fhir/turtl should be used"
Expression: "connectionType.coding.exists(code = 'hl7-fhir-rest' or code = 'hl7-fhir-msg') implies payloadMintype(code='application/fhir+json' or code='appliation/fhir+xml' or code='application/fhir+turtle')"
Severity: #error
*/

---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-Profiles.fsh

//The reason could not use uscore is uscore .subject 1..1
Profile: NdhCareTeam
Parent: CareTeam
Id: ndh-CareTeam
Title: "NDH Base CareTeam Profile"
Description: "Defines the basic constraints and extensions on the CareTeam resource for use in a National Directory of Healthcare Providers & Service (NDH)"
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* ^status = #active
//* contained only NdhRestriction
//* contained ^short = "NdhRestriction resource instances indicate whether disclosure of any data associated with a care team is restricted."
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.rules = #open
* extension ^mustSupport = false
* extension contains
    //CareteamAlias named careteam-alias 0..*  and
    careteam-alias named careteam-alias 0..*  and
    LocationReference named location 0..*  and
    HealthcareServiceReference named healthcareservice 0..* and
    EndpointReference named endpoint 0..* and
    UsageRestriction named usage-restriction 0..* and 
    VerificationStatus named verification-status 0..1
* extension[careteam-alias] ^short = "Alternate names by which the care team is also known"
//* extension[careteam-alias] ^definition = "Alternate names by which the team is also known"
* extension[location] ^short = "The location(s) at which the care team operates or delivers services"
//* extension[location] ^definition = "An extension to indicate the location(s) at which the care team operates"
* extension[healthcareservice] ^short = "Services provided by the care team"
//* extension[healthcareservice] ^definition = "An extension to describe the healthcare services provided by the care team"
* extension[endpoint] ^short = "Endpoints for the care team"
//* extension[endpoint] ^definition = "An extensions indicating endpoints for the care team"
//* extension[endpoint].valueReference only Reference(NdhEndpoint)
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[verification-status] ^short = "Indicate care team resource instance verifcation status."
* identifier MS
* identifier.extension ^slicing.discriminator.path = "url"
* identifier.extension ^slicing.discriminator.type = #value
* identifier.extension ^slicing.rules = #open
* identifier.extension ^mustSupport = false
* identifier.extension contains IdentifierStatus named identifier-status 0..1 
* identifier.extension[identifier-status] ^short = "Status"
* identifier.extension[identifier-status] ^definition = "Describes the status of an identifier"
//* identifier.use 
//* identifier.type 
//* identifier.system 
//* identifier.value 
//* identifier.period 
* identifier.assigner only Reference(NdhOrganization)
//* identifier.assigner 
* status 1.. 
* category 1..* MS
* category from NDHCareTeamCategoryVS (extensible) 
* name MS
* subject 0..0 
* encounter 0..0
//* period 
//* participant 
* participant.role from IndividualAndGroupSpecialtiesVS (extensible)
* participant.member only Reference(NdhCareTeam or NdhPractitionerRole or NdhOrganization)
//* participant.member 
* participant.member ^definition = "The role associated with the specific person or organization who is participating/expected to participate in the care team."
* participant.onBehalfOf ..0 
//* participant.period 
* reasonCode ..0 
* reasonReference ..0 
* managingOrganization ..1 
* managingOrganization only Reference(NdhOrganization)
//* telecom 
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system 
//* telecom.value 
//* note 
* note.author[x] only string or Reference(NdhPractitioner or NdhOrganization)
//* note.author[x] 
//* note.time 
//* note.text 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhEndpoint
Parent:         Endpoint
Id:             ndh-Endpoint
Title:          "NDH Base Endpoint Profile"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International" 
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains 
    EndpointUsecase named endpoint-usecase 0..* and
    EndpointNonFhirUsecase named endpoint-nonfhir-usecase 0..* and
    FhirIg named fhir-ig 0..* and
    SecureExchangeArtifacts named secure-exchange-artifacts 0..*  and
    TrustFramework named trust-framework 0..*  and 
    DynamicRegistration named dynamic-registration 0..*  and
    AssociatedServers named associated-servers 0..* and
    EndpointAccessControlMechanism named access-control-mechanism 0..1 and
    EndpointConnectionTypeVersion named connection-type-version 0..* and
    EndpointRank named endpoint-rank 0..1 and
    EndpointIheSpecificConnectionType named ihe-specific-connection-type 0..* and
    UsageRestriction named usage-restriction 0..* and 
    VerificationStatus named verification-status 0..1 and
    EndpointTestingCertification named testing-certification 0..* and
    EndpointenvironmentType named environmentType 0..*
* extension[endpoint-usecase] ^short = "Endpoint Usecase"
* extension[endpoint-nonfhir-usecase] ^short = "Non FHIR Endpoint Usecase"
* extension[fhir-ig] ^short = "IGs supported"
* extension[secure-exchange-artifacts] ^short = "Secure Exchange Artifacts store information about the type of public certificate, the certificate itself, 
and its expiration date. Issued by Certificate Authorities, public certificates are meant for sharing and verification in digital communications. Each certificate 
includes an expiration date, essential for validating its current validity and maintaining security. This extension is used when the exchange standard requires the discovery of the public key."
* extension[trust-framework] ^short = "A trust framework is a structured set of rules, policies, protocols, and standards that define how trust is established, managed, 
and maintained between different entities (such as organizations, systems, or users) involved in the exchange of healthcare information. It provides the guidelines and 
technical specifications that ensure secure, interoperable, and reliable data exchange."
* extension[dynamic-registration] ^short = "Dynamic registration within a trust framework refers to a process where clients can register with a server or service provider 
dynamically and securely at runtime, rather than being pre-registered manually. This approach is often used in environments where scalability, flexibility, and security 
are crucial. Currently, dynamic registration is used in SMART and UDAP."
* extension[associated-servers] ^short = "Store information about servers that may be associated with the current endpoint. It defines a set of servers that could be linked 
to this endpoint. If a server is associated, its type and URL will be included"
* extension[access-control-mechanism] ^short = "Access control mechanisms are designed to protect and manage access to healthcare endpoints, ensuring that data exchange 
between systems adheres to specific security protocols when needed."
* extension[connection-type-version] ^short = "Connection Type Version"
* extension[endpoint-rank] ^short = "Preferred order for connecting to the endpoint"
* extension[ihe-specific-connection-type] ^short = "IHE Specific Connection Type"
* extension[verification-status] ^short = "Verification Status"
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[testing-certification] ^short = "Endpoint Testing Certification"
* extension[environmentType] ^short = "The type of environment exposed at this endpoint"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.assigner only Reference(NdhOrganization)
* status MS 
* status = #active (exactly)  
* connectionType MS  
* connectionType from EndpointConnectionTypeVS (extensible)
* name MS
* managingOrganization only Reference(NdhOrganization)
* managingOrganization MS
//* contact MS
//* contact.value MS 
//* contact.system MS
* contact.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..* and
    ViaIntermediary named via-intermediary 0..1
* contact.extension[via-intermediary] ^short = "Via Intermediary"
* payloadType 1..1
//* payloadType MS 
* payloadType from EndpointPayloadTypeVS (extensible) 
* payloadMimeType from EndpointFhirMimeTypeVS (required)
* payloadMimeType MS
//* address MS

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhHealthcareService
Parent:         HealthcareService
Id:             ndh-HealthcareService
Title:          "NDH Base HealthcareService Profile"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. 
The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, 
hospital and ambulatory care, home care, long-term care, and other health-related and community services."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* extension contains
    Rating named rating 0..*  and
    NewPatients named newpatients 0..* and
    DeliveryMethod named deliverymethod 0..* and
    PaymentAccepted named paymentaccepted  0..* and
    RequiredDocument named requiredDocument 0..* and
    FundingSource named fundingSource 0..* and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1 and
    NetworkReference named network 0..* and
    ServiceOrProgramRequirement named social-service-requirement 0..* and
    Logo named logo 0..1
* extension[Rating] ^short = "Evaluations or reviews for the service."
* extension[newpatients] ^short = "Is the service currently accepting new patients?"
* extension[deliverymethod] ^short = "Method of providing the service."
* extension[paymentaccepted] ^short = "Forms of payment accepted."
* extension[requiredDocument] ^short = "Documents required for the service."
* extension[fundingSource] ^short = "Funding source for the service."
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[verification-status] ^short = "Verification Status"
* extension[network] ^short = "Network associated with social service."
* extension[social-service-requirement] ^short = "Social Service Requirement"
* extension[logo] ^short = "Service Logo"
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.extension[identifier-status] ^short = "Identifier Status"
* identifier.assigner only Reference(NdhOrganization)
* active 1..1 MS
* active = true 
* providedBy only Reference(NdhOrganization) 
* providedBy MS
* category 1..* MS 
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.description = "NDH HealthcareService Category"
* category ^slicing.ordered = false
* category contains HSC 0..1 MS
* category[HSC] ^short = "NDH HealthcareService Category"
* category[HSC] only CodeableConcept
* category[HSC] from HealthcareServiceCategoryVS (required)
* type MS
* type from HealthcareServiceTypeVS (extensible)
* specialty MS
//* specialty from SpecialtiesVS (extensible)
* specialty from $HealthcareProviderTaxonmyVS (extensible)
* location only Reference(NdhLocation)
* location MS
* name MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..1 and
       LanguageSpeak named language-speak 0..*
* telecom.extension[ContactPointAvailableTime] ^short = "Availability Hours for the Contact Point"
* telecom.extension[language-speak] ^short = "Language Speak"
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* coverageArea only Reference(NdhLocation)
* coverageArea MS
* serviceProvisionCode from $ServiceProvisionConditionsVS (extensible)
* eligibility.code from HealthcareServiceEligibilityCodeVS (extensible) 
* program from $ProgramVS (extensible)
* program.extension contains
    ServiceOrProgramRequirement named program-requirement 0..*
* program.extension[program-requirement] ^short = "Program Requirement"
//_* referralMethod from HealthcareServiceReferralMethodVS (extensible)
* endpoint only Reference(NdhEndpoint)
* endpoint MS

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhInsurancePlan
Parent:         InsurancePlan
Id:             ndh-InsurancePlan
Title:          "NDH Base InsurancePlan Profile"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products 
typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. 
A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits).
InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), 
and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc."
* obeys network-or-NatlDirwork 
* obeys plan-type-is-distinct
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1
* extension[usage-restriction] ^short = "Usage Restriction"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.assigner only Reference(NdhOrganization)
//* identifier.type MS
//* identifier.value MS
//* identifier.assigner MS
* status 1..1 MS
* status = #active  (exactly) 
* type 1..1  MS
* type from $InsuranceProductTypeVS (extensible)
* type ^short = "Product Type"
* name MS 
//* alias MS
//* period MS
//* ownedBy 1..1 MS
* ownedBy only Reference(NdhOrganization)
//* administeredBy 1..1 MS
* administeredBy only Reference(NdhOrganization)
* coverageArea only Reference(NdhLocation)
* coverageArea MS
//* contact MS
//* contact.name MS
//* contact.name.text MS
//* contact.telecom MS
* contact.telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* contact.telecom.system MS
//* contact.telecom.value MS
//* contact.telecom.use
//* contact.telecom.rank
//* contact.telecom.period
* endpoint only Reference(NdhEndpoint)
//* endpoint  MS
* network only Reference(NdhNetwork)
* network  MS
* coverage.type from $InsuranceCoverageTypeVS (extensible)
* coverage.network MS
* coverage.network only Reference(NdhNetwork)
* coverage.benefit.type from NdhBenefitTypeVS (extensible)
//* coverage.benefit.type 1..1 MS
* plan ^short = "Cost sharing details for the plan"
* plan.type from $InsurancePlanTypeVS (extensible)
//* plan.type  MS
* plan.type ^short = "Categorization of the cost sharing for the plan"
* plan.coverageArea only Reference(NdhLocation)
* plan.identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* plan.identifier.assigner only Reference(NdhOrganization)
//* plan.coverageArea MS
* plan.network only Reference(NdhNetwork)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhLocation
Parent:         $USCoreLocation
Id:             ndh-Location
Title:          "NDH Base Location Profile"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    $R4GeoJSONExtension named location-boundary-geojson 0..1 and
    Accessibility named accessibility 0..* and
    //Ehr named ehr 0..* and
    NewPatients named newpatients 0..* and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1
* extension[location-boundary-geojson] ^short = "Associated Region (GeoJSON)"
* extension[newpatients] ^short = "New Patients"
* extension[accessibility] ^short = "Accessibility"
//* extension[usage-restriction] ^short = "Usage Restriction"
//* extension[usage-restriction] only Reference(NdhRestriction)
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.use MS
//* identifier.type MS
//* identifier.system MS
//* identifier.value MS
//* identifier.period MS
//* identifier.assigner 0..1 MS
* identifier.assigner only Reference(NdhOrganization)
* status 1..1 MS
* status = $LocationStatus#active  (exactly) 
//* mode 0..0 
* name 1..1 MS
//* alias MS
//* description MS
* type MS
* telecom MS
* telecom.extension contains
        ContactPointAvailableTime named contactpoint-availabletime 0..* and
        ViaIntermediary named via-intermediary 0..1 and
        LanguageSpeak named language-speak 0..*
* telecom.extension[language-speak] ^short = "Language Speak"
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system MS
//* telecom.value MS
* address MS
* address.line 0..4 MS
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
//* physicalType MS
//* position MS
* managingOrganization 0..1 MS
* managingOrganization only Reference(NdhOrganization)
* partOf 0..1 MS
* partOf only Reference(NdhLocation)
//* hoursOfOperation MS
//* hoursOfOperation.daysOfWeek MS
//* hoursOfOperation.allDay MS
//* hoursOfOperation.openingTime MS
//* hoursOfOperation.closingTime MS
//* availabilityExceptions MS
* endpoint MS
* endpoint only Reference(NdhEndpoint)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhNetwork
Parent:         $USCoreOrganization
Id:             ndh-Network
Title:          "NDH Base Network Profile"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals 
that deliver a set of services across a geography through health insurance products/plans. In the NDH IG, individuals and organizations are represented as participants 
in a National Directory Exchange Network through the practitionerRole and National Directory Exchange-organizationAffiliation resources, respectively."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    LocationReference named location 0..* and
    $OrganizationPeriodExt named organization-period 0..1 and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1
* extension[location] ^short = "Network coverage area"
* extension[organization-period] ^short = "Valid time period for this Network"
* extension[usage-restriction] ^short = "Usage Restriction"
//* contained 0..1
//* contained only Consent
* contained only NdhRestriction
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.type MS
//* identifier.system MS
//* identifier.value MS
//* identifier.assigner MS
* identifier.assigner only Reference(NdhOrganization)
* identifier[NPI] 0..0
* identifier[CLIA] 0..0
//* identifier[NPI].assigner only Reference(NdhOrganization)
//* identifier[CLIA].assigner only Reference(NdhOrganization)
* active 1..1 MS
* active = true (exactly)
* type from NetworkTypeVS (required)
* type 1..1 MS
* name 1..1 MS
//* address
* address.line 0..4 MS
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
* partOf 1..1 MS
* partOf only Reference(NdhOrganization)
* partOf ^short = "The organization that manages this network"
//* contact MS
//* contact.name MS
//* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..1
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* contact.telecom.value  MS
//* contact.telecom.system  MS
* endpoint only Reference(NdhEndpoint)
* endpoint MS 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhOrganization
Parent:         $USCoreOrganization
Id:             ndh-Organization
Title:          "NDH Base Organization Profile"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, 
community group, or healthcare practice. Guidance: When the contact is a department name, rather than a human (e.g., patient help line), include a blank family 
and given name, and provide the department name in contact.name.text"
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    Rating named rating 0..*  and
    PaymentAccepted named paymentaccepted  0..* and
    FundingSource named fundingSource 0..* and
    OrgDescription named org-description  0..1 and
    Digitalcertificate named digitalcertificate 0..* and
    Qualification named qualification 0..* and
    UsageRestriction named usage-restriction 0..* and
    //UsageRestrictionElementContext named usage-restriction-element-context 0..* and
    InsurancePlanReference named insuranceplan 0..* and
    VerificationStatus named verification-status 0..1 and
    Logo named logo 0..1
* extension[org-description] ^short = "Organization Description"
* extension[digitalcertificate] ^short = "Digital Certificate"
* extension[qualification] ^short = "Qualification"
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[insuranceplan] ^short = "Insurance plan(s) offered to the organization's employees"
* identifier contains 
    TID 0..1
* identifier[TID] ^short = "Tax Identifier"
* identifier[TID] ^patternIdentifier.system = "http://hl7.org.fhir/sid/us-ssn"
//* identifier[TID].assigner only Reference(NdhOrganization)
//* identifier[TID] ^mustSupport = false
//* identifier[TID] ^mapping[0].identifier = "servd"
//* identifier[TID] ^mapping[=].map = "n/a"
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.type
* identifier.value MS
* identifier.system MS
//* identifier.assigner 0..1 MS
* identifier.assigner only Reference(NdhOrganization)
//* identifier[NPI].assigner only Reference(NdhOrganization)
//* identifier[CLIA].assigner only Reference(NdhOrganization)
* active 1..1 MS
* active = true
* type 1..* MS
* type from OrgTypeVS (extensible)
* name 1..1 MS
* alias MS
* alias.extension contains
    OrgAliasType named org-alias-type 0..1 and
    OrgAliasPeriod named org-alias-period 0..1
* alias.extension[OrgAliasType] ^short = "Organization Alias Type"
* alias.extension[OrgAliasPeriod] ^short = "Organization Alias Period"
* telecom MS
* telecom.extension contains
        ContactPointAvailableTime named contactpoint-availabletime 0..*  and
        ViaIntermediary named via-intermediary 0..1 and
        LanguageSpeak named language-speak 0..*
* telecom.extension[language-speak] ^short = "Language Speak"
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
//* telecom.rank
* address 0..* MS
* address.extension contains $GeolocationExtension named geolocation 0..1
//* address.type
* address.line 0..4 MS
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
* partOf
* partOf only Reference(NdhOrganization)
* contact
* contact.telecom
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..1
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* contact.telecom.value
//* contact.telecom.system
//* contact.telecom.use
* endpoint only Reference(NdhEndpoint)
* endpoint MS



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhOrganizationAffiliation
Parent:         OrganizationAffiliation
Id:             ndh-OrganizationAffiliation
Title:          "NDH Base OrganizationAffiliation Profile"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, 
the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* obeys organization-or-participatingOrganization
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    Qualification named qualification 0..* and
    UsageRestriction named usage-restriction 0..* and
    VerificationStatus named verification-status 0..1 and
    Logo named logo 0..1
* extension[qualification] ^short = "Qualification"
* extension[UsageRestriction] ^short = "Usage Restriction"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.type MS
//* identifier.value MS
//* identifier.assigner MS
* identifier.assigner only Reference(NdhOrganization)
* active 1..1
* active = true 
* period MS
* organization  MS
* organization only Reference (NdhOrganization)
* participatingOrganization  MS
* participatingOrganization only Reference (NdhOrganization)
//* network  MS
* network only Reference (NdhNetwork)
//* code MS
* code from OrganizationAffiliationRoleVS  (extensible)
//* specialty MS
//* specialty from SpecialtiesVS (extensible)
* specialty from $HealthcareProviderTaxonmyVS (extensible)
* location  MS
* location only Reference (NdhLocation)
//* healthcareService MS
* healthcareService only Reference (NdhHealthcareService)
//* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system MS
//* telecom.value MS
//* telecom.rank MS
* endpoint MS
* endpoint only Reference (NdhEndpoint)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhPractitioner
Parent:         $USCorePractitioner
Id:             ndh-Practitioner
Title:          "NDH Base Practitioner Profile"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."
* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
    USCoreRaceExtension named us-core-race 0..1 and
    USCoreEthnicityExtension named us-core-ethnicity 0..1 and
    //USCoreGenderIdentityExtension named us-core-genderIdentity 0..* and
    PGenderIdentity named individual-genderIdentity 0..* and
    PPronouns named individual-pronouns 0..* and
    RecordedSexOrGender named individual-recordedSexOrGender 0..* and
    UsageRestriction named usage-restriction 0..* and
    EndpointReference named endpoint 0..* and
    Accessibility named accessibility 0..* and
    Digitalcertificate named digitalcertificate 0..* and
    Rating named rating 0..* and
    VerificationStatus named verification-status 0..1
* extension[usage-restriction] ^short = "Usage Restriction"
//* extension[usage-restriction] ^type.aggregation = "contained"
* extension[endpoint] ^short = "Endpoint Reference"
* extension[accessibility] ^short = "Accessibility"
* extension[digitalcertificate] ^short = "Digital Certificate"
* extension[rating] ^short = "Rating"
* identifier MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
//* identifier.type MS
* identifier.system MS
* identifier.value MS
//* identifier.assigner MS
* identifier.assigner only Reference(NdhOrganization)
//* identifier[NPI].assigner only Reference(NdhOrganization)
* active 1..1
* active = true 
* name 1..* MS
* name.text MS
* name.family 1..1 MS
//* name.given
//* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* address MS
* address.extension contains 
    $GeolocationExtension named geolocation 0..1 MS
* qualification  MS
* qualification.extension contains 
    PractitionerQualification named practitioner-qualification 0..1
//* qualification.identifier MS 
* qualification.identifier.extension contains
    IdentifierStatus named identifier-status 0..1 
* qualification.identifier.assigner only Reference(NdhOrganization)
* qualification.code 1..1
* qualification.code from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* qualification.period
* qualification.issuer MS
* qualification.issuer only Reference(NdhOrganization)
//* communication MS
* communication.extension contains
   //PatProficiency named communication-proficiency 0..1
   CommunicationProficiency named communication-proficiency 0..1


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:        NdhPractitionerRole
//Parent:         PractitionerRole //organization is based on US Core, do not use us core cause warning
Parent:         $USCorePractitionerRole //US Core require to have contact infor or endpoint
Id:             ndh-PractitionerRole
Title:          "NDH Base PractitionerRole"
Description:    "PractitionerRole typically describes details about a provider. When the provider is a practitioner, there may be a relationship to an organization. 
A provider renders services at a location. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization. 
PractitionerRole involves either the actual or potential (hence the optionality on Practitioner) of an individual to play this role on behalf of or under the auspices of 
an organization. The absence of a Practitioner resource does not imply that the Organization itself is playing the role of a Practitioner, instead it implies that role 
has been established by the Organization and MAY apply that to a specific Practitioner."

* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* obeys practitioner-or-organization-or-healthcareservice-or-location 
//* contained only NdhRestriction
//* contained ^short = "Usage restriction may apply to the elements of this resource."
* extension contains
   Rating named rating 0..* and 
   NewPatients named newpatients 0..* and
   NetworkReference named network 0..1 and
   UsageRestriction named usage-restriction 0..* and
   Digitalcertificate named digitalcertificate 0..* and
   //PractitionerQualification named practitioner-qualification 0..* and
   Qualification named qualification 0..* and
   VerificationStatus named verification-status 0..1
* extension[newpatients] ^short = "New Patients"
* extension[network] ^short = "NetworkReference"
* extension[usage-restriction] ^short = "Usage Restriction"
* extension[digitalcertificate] ^short = "Digital Certificate"
//* extension[practitioner-qualification] ^short = "Practitioner Qualification"
* extension[qualification] ^short = "Qualification"
* identifier MS
//* identifier.type MS
//* identifier.system MS
//* identifier.value MS
* identifier.extension contains
    IdentifierStatus named identifier-status 0..1
* identifier.assigner only Reference(NdhOrganization)
* active 1..1
* active = true
//* period MS
//* practitioner MS
* practitioner only Reference(NdhPractitioner)
//* organization MS
* organization only Reference(NdhOrganization)
* organization ^short = "Organization where the role is available"
* organization ^definition = "The organization where this role is available"
* organization ^comment = "Some relationships (represented as PractitionerRoles) that may exist between practitioners and organizations include:
 - A practitioner may act as a pediatrician when associated with an organization that runs a family clinic.  PractitionerRole.organization would represent the family clinic.
 - The same practitioner may act as a physician when providing physicals for an athletics department at a school.  PractitionerRole.organization would represent the school.
 - A practitioner may perform coumadin anticoagulation services for a clinic run by a health system.   PractitionerRole.organization would represent the coumadin clinic.
 - A practitioner may act as an inpatient pharmacist reviewing and dispensing medications.  PractitionerRole.organization would represent the hospital pharmacy.
 - A practitioner may perform medication management and adherence services for an internal medicine clinic.  PractitionerRole.organization would represent the internal medicine clinic.
 - A practitioner is part of a payer's network such as a preferred provider organization (PPO), or health maintenance organizations (HMO)).  
PractitionerRole.organization would represent the payer's network.
Each of the examples above, would be represented as different PractitionerRole instances, each with a different values for PractitionerRole.organization."
//* code MS
//* code from PractitionerRoleVS (extensible)
//* specialty MS
* code 0..*
* code ^slicing.discriminator.type = #pattern
* code ^slicing.discriminator.path = "$this"
* code ^slicing.rules = #open
* code ^slicing.description = "NDH PractitionerRole Code"
* code ^slicing.ordered = false
* code contains NDHPractitionerRoleCode 0..*
* code[NDHPractitionerRoleCode] ^short = "NDH PractitionerRole Code"
* code[NDHPractitionerRoleCode] only CodeableConcept
* code[NDHPractitionerRoleCode] from PractitionerRoleVS (required)
//* code from PractitionerRoleVS (extensible)
//* specialty MS
* specialty from IndividualAndGroupSpecialtiesVS (extensible)
//* specialty from $HealthcareProviderTaxonmyVS (extensible)
//* location MS
* location only Reference(NdhLocation)
* healthcareService MS
* healthcareService only Reference(NdhHealthcareService)
//* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..1
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
//* telecom.system 1..1 MS
//* telecom.value 1..1 MS
//* telecom.rank MS
//* availableTime MS
//* availableTime.daysOfWeek MS
//* availableTime.allDay MS
//* availableTime.availableStartTime MS
//* availableTime.availableEndTime MS
//* notAvailable MS
//* notAvailable.description MS
//* notAvailable.during MS
//* endpoint MS
* endpoint only Reference(NdhEndpoint) 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//identifier will have an IG build error on snapshot table. it is know issue for fhir 4.0.1 is fixed in 4.3.0
// The purpose of use: Privacy Consent Directive: Agreement, Restriction, Prohibtion to collect, access, use or disclose
// (share) information
// Usage of the Provenance resource may be the best way to manage the tracking of the changes to Consent. 
// The Contract resource can be updated and attached to the Consent.
// Consent resource provides two different mechanisms for recording computable rules:
// 1. the provision structure which provides a simple structure for capturing most common privacy rules
// 2. policyBasis attribute which provides a more flexible mechanism to reference a policy coded in a policy language of choice.
// The restriction resource should be inline with the resource instance. You could access it alone. So the identifier has no meaning. 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile: NdhRestriction
Parent: Consent
Id: ndh-Restriction
Title: "NDH Base Restriction"
Description: "his profile sets minimum expectations for searching for and fetching information associated with a restriction. 
It identifies which elements, extensions, vocabularies and value sets SHALL be restricted in the Consent resource when using this profile."
//* meta.lastUpdated 1..1
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* extension contains base-ext-restrictFhirPath named restrictFhirPath 0..*
* ^status = #active
* ^date = "2023-01-22T01:01:31.325+11:00"
//* . ^short = "A policy may permit or deny recipients or roles to perform actions for specific purposes and periods of time"
//* . ^alias = "Restriction"
* identifier ..0 
* status MS
* status ^short = "Indicates the current state of this restriction"
* status ^comment = "This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the restriction as not currently valid."
* scope MS
* scope from ConsentScopeNdhVS (extensible) 
//* scope ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
//* scope ^binding.extension.valueString = "ConsentScope"
* category MS
//* category ^label = "Type"
* category ^short = "describes the type of restriction (e.g. the data may be further disclosed by the downstream workflow environment 
per the terms of a Data Use Agreement)"
//* category ^definition = "Type of restriction (conditional release (per DUA); requires flowdown agreement (for redisclosure); internal use only; 
//release defined by access rights (as specified by the national source))"
* category from ConsentCategoryNdhVS (extensible)
* patient ..0
* dateTime MS
* dateTime ^label = "last updated"
* dateTime ^short = "indicates when the restriction was last updated"
//* dateTime ^definition = "When this Restriction was issued / created / indexed."
* performer ..0
* organization ..0
* source[x] ..0
* policy MS
* policy.authority ..0
* policy.uri MS
* policy.uri ^short = "Specific policy covered by this restriction"
* policyRule  MS
* policyRule from ConsentPolicyRulesVS (extensible)
* verification ..0
* verification.verified MS
* verification.verifiedWith MS
* verification.verificationDate MS
* provision MS
* provision ^short = "defines access rights for restricted content"
//* provision.type = #permit (exactly)
* provision.type MS
* provision.period ..0
* provision.actor 1.. MS
* provision.actor.role MS
* provision.actor.reference MS
* provision.actor.reference ^short = "definedUserOrGroup"
* provision.actor.reference only Reference(NdhCareTeam or NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* provision.action ..1 MS
* provision.action ^short = "reasonType"
* provision.action ^definition = "Describes how the reference is related to the restriction (contributes to; reason for; existance of; specific value)"
* provision.action from $ConsentActionVS (extensible)
* provision.securityLabel MS
* provision.securityLabel ^short = "userType"
* provision.purpose MS
* provision.purpose ^short = "reasonName"
* provision.purpose ^definition = "Name assigned to the restriction condition"
* provision.class ..0
* provision.code ..0
* provision.dataPeriod ..0
* provision.data ..0 MS
* provision.data.meaning MS
* provision.data.reference MS
* provision.provision ..0


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile: NdhVerification
Parent: VerificationResult
Id: ndh-Verification
Title: "NDH Base Verification"
Description: "Describes Verification requirements, source(s), status and dates for one or more elements"
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* ^date = "2023-01-22T12:42:47.483-05:00"
* ^status = #active
* . ^short = "Verification"
* . ^definition = "Describes Verification requirements, source(s), status and dates for one or more elements"
* target 1..* MS
* target ^short = "The resource instance was verified or attested"
* targetLocation MS
* targetLocation ^short = "The fhirpath location(s) within the resource instance that was verified or attested"
* need 1..1 MS
* status MS
* statusDate 1..1 MS
* validationType 1..1 MS
* validationType from $verificationresult-validation-type
* validationType ^short = "Whether the target was verified against primary source(s), mutually attested between resource(s), or nothing"
//* validationType ^definition = "What the target is validated against (nothing|single source|multiple sources)"
* validationProcess 1..* MS
* validationProcess from NdhVerificationProcessVS (extensible)
* validationProcess ^short = "The process(es) by which the target was verified"
//* validationProcess ^definition = "The process(es) by which the target is validated"
* frequency MS
* frequency ^short = "Frequency of verification"
* lastPerformed MS
* lastPerformed ^short = "The date/time verification was last completed (including failed verifications)"
* nextScheduled MS
* nextScheduled ^short = "The date when target is next verified, if appropriate"
* failureAction 1..1 MS
* primarySource MS
* primarySource.who MS
* primarySource.who only Reference(NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* primarySource.type 1..* MS
* primarySource.type from $VerificationresultPrimarySourceTypeVS (extensible)
//* primarySource.type ^short = "Type of primary source"
* primarySource.type ^definition = "Type of primary source"
* primarySource.communicationMethod 0..* MS
//* primarySource.communicationMethod from NdhVerificationCommunicationMethodVS (extensible)
* primarySource.communicationMethod from $VerificationresultCommunicationMethodVS (extensible)
* primarySource.validationStatus MS
* primarySource.validationDate MS
* primarySource.canPushUpdates MS
* primarySource.pushTypeAvailable MS
* attestation 1..1 MS
* attestation.who 1..1 MS
* attestation.who only Reference(NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* attestation.onBehalfOf MS
* attestation.onBehalfOf only Reference(NdhOrganization or NdhPractitioner or NdhPractitionerRole)
* attestation.communicationMethod 1..1 MS
* attestation.communicationMethod only CodeableConcept
//* attestation.communicationMethod from NdhVerificationCommunicationMethodVS (extensible)
* attestation.communicationMethod from $VerificationresultCommunicationMethodVS (extensible)
* attestation.date 1..1 MS
* attestation.sourceIdentityCertificate MS
* attestation.proxyIdentityCertificate MS
* attestation.proxySignature MS
* attestation.sourceSignature MS
* validator MS
* validator.organization MS
* validator.organization only Reference(NdhOrganization)
* validator.identityCertificate MS
* validator.attestationSignature MS







---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-SearchPrameters.fsh

Instance: endpoint-usecase-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint usecase-type"
* status = #active
* code = #usecase-type
* name = "EndpointUsecaseTypeSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific usecase-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-usecase-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-usecase').extension.where(url='endpointUsecasetype').value.ofType(CodeableConcept)"
//* xpath = "f:Endpoint/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-usecase']/f:extension[@url='endpointUsecasetype']/f:valueCodeableConcept/f:coding/f:code/@value"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-nonfhir-usecase-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint nonfhir-usecase-type"
* status = #active
* code = #nonfhir-usecase-type
* name = "EndpointNonfhirUsecaseTypeSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific nonfhir-usecase-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-nonfhir-usecase-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-non-fhir-usecase').extension.where(url='endpointUsecasetype').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-trust-framework-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint trust-framework-type"
* status = #active
* code = #trust-framework-type
* name = "EndpointTrustFrameworkTypeSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific trust-framework-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-trust-framework-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-trustFramework').extension.where(url='trustFrameworkType').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-dynamic-registration-trust-profile
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint dynamic-registration-trust-profile"
* status = #active
* code = #dynamic-registration-trust-profile
* name = "EndpointDynamicRegistrationTrustProfileSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific dynamic-registration-trust-profile"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-dynamic-registration-trust-profile"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-dynamicRegistration').extension.where(url='trustProfile').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-access-control-mechanism
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint access-control-mechanism"
* status = #active
* code = #access-control-mechanism
* name = "EndpointAccessControlMechanismSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific access-control-mechanism"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-access-control-mechanism"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpointAccessControlMechanism').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-connection-type-version
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint connection-type-version"
* status = #active
* code = #connection-type-version
* name = "EndpointConnectionTypeVersionSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific connection-type-version"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-connection-type-version"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-connection-type-version').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-ihe-connection-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint ihe-connection-type"
* status = #active
* code = #ihe-connection-type
* name = "EndpointIheConnectionTypeSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific ihe-connection-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-ihe-connection-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-ihe-specific-connection-type').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: endpoint-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "Endpoint verification-status"
* status = #active
* code = #verification-status
* name = "EndpointVerificationStatusSearchParameter"
* description = "Select Endpoints that support the type of services indicated by a specific verification-status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/endpoint-verification-status"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true
* modifier[+] = #text


//--------------------------------------
// CareTeam
//--------------------------------------

Instance: careteam-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "CareTeam endpoint"
* status = #active
* code = #endpoint
* name = "CareTeamEndpointSearchParameter"
* description = "Select CareTeams with the specified endpoint"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/careteam-endpoint"
* base[0] = #CareTeam
* type = #reference
* expression = "CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-reference').value.ofType(Reference)"
* xpathUsage = #normal
* target[+] = #Endpoint
* multipleOr = true
* multipleAnd = true
* chain[+] = "identifier"
* chain[+] = "connection-type"
* chain[+] = "connection-type-version"
* chain[+] = "organization"

Instance: careteam-location
InstanceOf: SearchParameter
Usage: #definition
Title: "CareTeam location"
* status = #active
* code = #location
* name = "CareTeamLocationSearchParameter"
* description = "Select CareTeams operating at the specified location"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/careteam-location"
* base[0] = #CareTeam
* type = #reference
* expression = "CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-location-reference').value.ofType(Reference)"
//* xpath = "f:CareTeam/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-location-reference']/f:extension/f:valueReference/f:reference/@value"
* xpathUsage = #normal
* target[+] = #Location
* multipleOr = true
* multipleAnd = true
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "address"
* chain[+] = "organization"
* chain[+] = "type"

Instance: careteam-name
InstanceOf: SearchParameter
Usage: #definition
Title: "CareTeam Name"
* status = #active
* code = #name
* name = "CareTeamNameSearchParameter"
* description = "Select CareTeams with the specified name or alias"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/careteam-name"
* base[0] = #CareTeam
* type = #string
//* expression = "CareTeam.name|CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-careteam-alias').value as String"
* expression = "CareTeam.name|CareTeam.extension('http://hl7.org/fhir/StructureDefinition/careteam-alias').value.ofType(string)"
//* expression = "CareTeam.name|CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-careteam-alias').value.ofType(string)"
//* xpath = "f:CareTeam/f:name | f:CareTeam/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-careteam-alias']/f:extension/f:valueString/@value"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #exact
* modifier[+] = #contains

Instance: careteam-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "CareTeam organization"
* status = #active
* code = #organization
* name = "CareTeamOrganizationSearchParameter"
* description = "Select CareTeams managed by the specified organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/careteam-organization"
* base[0] = #CareTeam
* type = #reference
* expression = "CareTeam.managingOrganization"
//* xpath = "f:CareTeam/f:managingOrganization"
* xpathUsage = #normal
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "partof"
* chain[+] = "type"

Instance: careteam-service
InstanceOf: SearchParameter
Usage: #definition
Title: "CareTeam service"
* status = #active
* code = #service
* name = "CareTeamServiceSearchParameter"
* description = "Select CareTeams providing the specified service"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/careteam-service"
* base[0] = #CareTeam
* type = #reference
* expression = "CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-healthcareservice-reference').value.ofType(Reference)"
//* xpath = "f:CareTeam/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-healthcareservice-reference']/f:extension/f:valueReference/f:reference/@value"
* xpathUsage = #normal
* target[+] = #HealthcareService
* multipleOr = true
* multipleAnd = true
* chain[+] = "identifier"
* chain[+] = "service-category"
* chain[+] = "organization"
* chain[+] = "location"

Instance: careteam-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "CareTeam verification-status"
* status = #active
* code = #verification-status
* name = "CareTeamVerificationStatusSearchParameter"
* description = "Select CareTeams with the specified verification-status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/careteam-verification-status"
* base[0] = #CareTeam
* type = #token
//* expression = "CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value as CodeableConcept"
* expression = "CareTeam.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true
* modifier[+] = #text


//----------------------------------------------
// HealthcareService
//----------------------------------------------

Instance: healthcareservice-eligibility
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService eligibility"
* status = #active
* code = #eligibility
* name = "HealthcareServiceEligibilitySearchParameter"
* description = "Select HealthcareService with the specified eligibility"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-eligibility"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.eligibility.code"
//* xpath = "f:HealthcareService/f:eligibility/f:code"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-new-patient
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService new patient"
* status = #active
* code = #new-patient
* name = "HealthcareServiceNewPatientSearchParameter"
* description = "Select HealthcareService with the specified new patient"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-new-patient"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url='acceptingPatients').value.ofType(CodeableConcept)"
//* xpath =  "f:HealthcareService/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients']/f:extension[@url='acceptingPatients']/f:valueCodeableConcept/f:coding/f:code/@value"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true

Instance: healthcareservice-new-patient-from-network
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService new patient from network"
* status = #active
* code = #new-patient-from-network
* name = "HealthcareServiceNewPatientFromNetworkSearchParameter"
* description = "Select HealthcareService with the specified new patient from network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-new-patient-from-network"
* base[0] = #HealthcareService
* type = #reference
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url='fromNetwork').value.ofType(Reference)"
//* xpath =  "f:HealthcareService/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients']/f:extension[@url='fromNetwork']/f:valueReference/f:reference/@value"
* xpathUsage = #normal
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "partof"
//* chain[+] = "organization-identifier"
//* chain[+] = "organization-name"
//* chain[+] = "organization-partof"


Instance: healthcareservice-new-patient-and-from-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Healthcareservice new-patient-and-from-network"
* status = #active
* code = #new-patient-and-from-network
* name = "HealthcareServiceNewPatientAndFromNetworkSearchParameter"
* description = "Select Healthcareservice of the specified new-patient and from-network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-new-patient-and-from-network"
* base[0] = #HealthcareService
* type = #composite
* expression = "HealthcareService.extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients')"
* component[0].definition = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-new-patient"
* component[=].expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='acceptingPatients').value.ofType(CodeableConcept)"
* component[+].definition = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-new-patient-from-network"
* component[=].expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url='fromNetwork').value.ofType(Reference)"

Instance: healthcareservice-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService verification status"
* status = #active
* code = #verification-status
* name = "HealthcareServiceVerificationStatusSearchParameter"
* description = "Select HealthcareService with the specified verification status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-verification-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
//* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-social-service-age-group
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement age group"
* status = #active
* code = #social-service-age-group
* name = "HealthcareServiceSocialServiceAgeGroupSearchParameter"
* description = "Select HealthcareService with the specified social service requirement age group"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-age-group"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-group').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-social-service-birthsex
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement birthsex"
* status = #active
* code = #social-service-birthsex
* name = "HealthcareServiceSocialServiceBirthsexSearchParameter"
* description = "Select HealthcareService with the specified social service requirement birthsex"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-birthsex"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='birthsex').value.ofType(code)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
//* modifier[+] = #text


Instance: healthcareservice-social-service-gender-identity
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement gender identity"
* status = #active
* code = #social-service-gender-identity
* name = "HealthcareServiceSocialServiceGenderIdentitySearchParameter"
* description = "Select HealthcareService with the specified social service requirement gender identity"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-gender-identity"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='gender-identity').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-social-service-employment-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement employment status"
* status = #active
* code = #social-service-employment-status
* name = "HealthcareServiceSocialServiceEmploymentStatusSearchParameter"
* description = "Select HealthcareService with the specified social service requirement employment status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-employment-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='employment-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-social-service-insurance-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement insurance status"
* status = #active
* code = #social-service-insurance-status
* name = "HealthcareServiceSocialServiceInsuranceStatusSearchParameter"
* description = "Select HealthcareService with the specified social service requirement insurance status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-insurance-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='insurance-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-social-service-va-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement va status"
* status = #active
* code = #social-service-va-status
* name = "HealthcareServiceSocialServiceVaStatusSearchParameter"
* description = "Select HealthcareService with the specified social service requirement va status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-va-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='va-status').value.ofType(boolean)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
//* modifier[+] = #text


Instance: healthcareservice-social-service-preferred-language
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService social service requirement preferred language"
* status = #active
* code = #social-service-preferred-language
* name = "HealthcareServiceSocialServicePreferredLanguageSearchParameter"
* description = "Select HealthcareService with the specified social service requirement preferred language"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-social-service-preferred-language"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='preferred-language').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-program-requirement-age-group
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement age group"
* status = #active
* code = #program-requirement-age-group
* name = "HealthcareServiceProgramRequirementAgeGroupSearchParameter"
* description = "Select HealthcareService with the specified program requirement age group"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-age-group"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-ndh-age-group').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-program-requirement-birthsex
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement birthsex"
* status = #active
* code = #program-requirement-birthsex
* name = "HealthcareServiceProgramRequirementBirthsexSearchParameter"
* description = "Select HealthcareService with the specified program requirement birthsex"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-birthsex"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='birthsex').value.ofType(code)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
//* modifier[+] = #text


Instance: healthcareservice-program-requirement-gender-identity
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement gender identity"
* status = #active
* code = #program-requirement-gender-identity
* name = "HealthcareServiceProgramRequirementGenderIdentitySearchParameter"
* description = "Select HealthcareService with the specified program requirement gender identity"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-gender-identity"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='gender-identity').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-program-requirement-employment-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement employment status"
* status = #active
* code = #program-requirement-employment-status
* name = "HealthcareServiceProgramRequirementEmploymentStatusSearchParameter"
* description = "Select HealthcareService with the specified program requirement employment status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-employment-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='employment-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-program-requirement-insurance-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement insurance status"
* status = #active
* code = #program-requirement-insurance-status
* name = "HealthcareServiceProgramRequirementInsuranceStatusSearchParameter"
* description = "Select HealthcareService with the specificed program requirement insurance status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-insurance-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='insurance-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text


Instance: healthcareservice-program-requirement-va-status
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement va status"
* status = #active
* code = #program-requirement-va-status
* name = "HealthcareServiceProgramRequirementVaStatusSearchParameter"
* description = "Select HealthcareService with the specified program requirement va status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-va-status"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='va-status').value.ofType(boolean)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
//* modifier[+] = #text


Instance: healthcareservice-program-requirement-preferred-language
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService program requirement preferred language"
* status = #active
* code = #program-requirement-preferred-language
* name = "HealthcareServiceProgramRequirementPreferredLanguageSearchParameter"
* description = "Select HealthcareService with the specified program requirement preferred language"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-program-requirement-preferred-language"
* base[0] = #HealthcareService
* type = #token
* expression = "HealthcareService.program.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-service-or-program-requirement').extension.where(url='preferred-language').value.ofType(CodeableConcept)"
* xpathUsage = #normal  
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text

Instance: healthcareservice-network
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService network"
* status = #active
* code = #network
* name = "HealthcareServiceNetworkSearchParameter"
* description = "Select HealthcareService with the specified network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-network"
* base[0] = #HealthcareService
* type = #reference
* expression = "HealthcareService.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-network-reference').value.ofType(Reference)"
* xpathUsage = #normal
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true

Instance: healthcareservice-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService organization"
* status = #active
* code = #organization
* name = "HealthcareServiceOrganizationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-organization"
* description = "Select HealthcareService with the specified organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-organization"
* base[0] = #HealthcareService
* type = #reference
* expression = "HealthcareService.providedBy"
* xpathUsage = #normal
* target[+] = #Organization
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "partof"
* chain[+] = "type"

Instance: healthcareservice-location
InstanceOf: SearchParameter
Usage: #definition
Title: "HealthcareService location"
* status = #active
* code = #location
* name = "HealthcareServiceLocationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-location"
* description = "Select HealthcareService with the specified location"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/healthcareservice-location"
* base[0] = #HealthcareService
* type = #reference
* expression = "HealthcareService.location"
* xpathUsage = #normal
* target[+] = #Location
* multipleAnd = true
* multipleOr = true
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "organization"
* chain[+] = "type"

//---------------------------------------
// InsurancePlan
//---------------------------------------
Instance: insuranceplan-coverage-area
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan coverage-area"
* status = #active
* code = #coverage-area
* name = "InsuranceCoverageAreaSearchParameter"
* description = "Select products that are offered in the specified location"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-coverage-area"
* base[0] = #InsurancePlan
* type = #reference
* target[+] = #Location
* expression = "InsurancePlan.coverageArea"
//* xpath = "f:InsurancePlan/f:coverageArea"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* chain[+] = "identifier"
* chain[+] = "contains"


Instance: insuranceplan-coverage-benefit-type
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan coverage-benefit-type"
* status = #active
* code = #coverage-benefit-type
* name = "InsuranceplanCoverageBenefitTypeSearchParameter"
* description = "Select products that are offered in the specified coverage-benefit-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-coverage-benefit-type"
* base[0] = #InsurancePlan
* type = #token
* expression = "InsurancePlan.coverage.benefit.type"
//* xpath = "f:InsurancePlan/f:coverage/f:benefit/f:type"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text

Instance: insuranceplan-coverage-type
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan coverage-type"
* status = #active
* code = #coverage-type
* name = "InsuranceplanCoverageTypeSearchParameter"
* description = "Select products that are offered in the specified coverage-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-coverage-type"
* base[0] = #InsurancePlan
* type = #token
* expression = "InsurancePlan.coverage.type"
//* xpath = "f:InsurancePlan/f:coverage/f:type"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text

Instance: insuranceplan-coverage-network
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan coverage-network"
* status = #active
* code = #coverage-network
* name = "InsuranceplanCoverageNetworkSearchParameter"
* description = "Select products offering covered benefits through the specified coverage network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-coverage-network"
* base[0] = #InsurancePlan
* type = #reference
* expression = "InsurancePlan.coverage.network"
//* xpath = "f:InsurancePlan/f:coverage/f:network"
* xpathUsage = #normal
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "partof"


Instance: insuranceplan-network
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan network"
* status = #active
* code = #network
* name = "InsuranceplanPlanNetworkSearchParameter"
* description = "Select products that are offered in the specified network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-network"
* base[0] = #InsurancePlan
* type = #reference
* expression = "InsurancePlan.network"
//* xpath = "f:InsurancePlan/f:network"
* xpathUsage = #normal
* target = #Organization
* multipleOr = true
* multipleAnd = true
* chain[0] = #identifier
* chain[+] = #name
* chain[+] = #partof

Instance: insuranceplan-plan-network
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan plan-network"
* status = #active
* code = #plan-network
* name = "InsuranceplanPlanNetworkSearchParameter"
* description = "Select products that are offered in the specified plan-network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-plan-network"
* base[0] = #InsurancePlan
* type = #reference
* expression = "InsurancePlan.plan.network"
//* xpath = "f:InsurancePlan/f:plan/f:network"
* xpathUsage = #normal
* target = #Organization
* multipleOr = true
* multipleAnd = true
* chain[0] = #identifier
* chain[+] = #name
* chain[+] = #partof

Instance: insuranceplan-plan-type
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan plan-type"
* status = #active
* code = #plan-type
* name = "InsuranceplanPlanTypeSearchParameter"
* description = "Select products that are offered in the specified plan-type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-plan-type"
* base[0] = #InsurancePlan
* type = #token
* expression = "InsurancePlan.plan.type"
//* xpath = "f:InsurancePlan/f:plan/f:type"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text

Instance: insuranceplan-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "InsurancePlan verification-status"
* status = #active
* code = #verification-status
* name = "InsuranceplanVerificationStatusSearchParameter"
* description = "Select InsurancePlan by verification status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/insuranceplan-verification-status"
* base[0] = #InsurancePlan
* type = #token
* expression = "InsurancePlan.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true
* modifier[0] = #text


//-------------------------------------------
// Location
//-------------------------------------------    

Instance: location-accessibility
InstanceOf: SearchParameter
Usage: #definition
Title: "Location accessibility"
* status = #active
* code = #accessibility
* name = "LocationAccessibilitySearchParameter"
* description = "Select Locations of the specified accessibility"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/location-accessibility"
* base[0] = #Location
* type = #token
* expression = "Location.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-accessibility').extension.value.ofType(CodeableConcept)"
//* xpath =  "f:Location/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-accessibility']/f:extention/f:valueCodeableConcept/f:coding/f:code/@value"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true
* modifier[+] = #text

Instance: location-contains
InstanceOf: SearchParameter
Usage: #definition
Title: "Location contains"
* status = #active
* code = #contains
* name = "LocationContainsSearchParameter"
* description = "Select Locations of the specified contains (co-ordinates)"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/location-contains"
* base[0] = #Location
* type = #special
* expression = "Location.extension.where(url='http://hl7.org/fhir/StructureDefinition/location-boundary-geojson').extension.value.ofType(Attachment)"
//* xpath = "f:Location/f:extension[@url='http://hl7.org/fhir/StructureDefinition/location-boundary-geojson']/f:boundary-geojson"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true

Instance: location-new-patient
InstanceOf: SearchParameter
Usage: #definition
Title: "Location new-patient"
* status = #active
* code = #new-patient
* name = "LocationNewPatientSearchParameter"
* description = "Select Locations of the specified new-patient"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/location-new-patient"
* base[0] = #Location
* type = #token
* expression = "Location.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='acceptingPatients').value.ofType(CodeableConcept)"
//* xpath = "f:Location/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients']/f:extension[@url ='acceptingPatients']/f:valueCodeableConcept/f:coding/f:code/@value"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true

Instance: location-new-patient-from-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Location new-patient-from-network"
* status = #active
* code = #new-patient-from-network
* name = "LocationNewPatientFromNetworkSearchParameter"
* description = "Select Locations of the specified new-patient-from-network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/location-new-patient-from-network"
* base[0] = #Location
* type = #reference
* target[0] = #Organization
* expression = "Location.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url='fromNetwork').value.ofType(Reference)"
//* xpath = "f:Location/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients']/f:extension[@url='fromNetwork']/f:valueReference/f:reference/@value"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true
* chain[0] = #identifier
* chain[+] = #name
* chain[+] = #partof

Instance: location-new-patient-and-from-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Location new-patient-and-from-network"
* status = #active
* code = #new-patient-and-from-network
* name = "LocationNewPatientAndFromNetworkSearchParameter"
* description = "Select Locations of the specified new-patient and from-network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/location-new-patient-and-from-network"
* base[0] = #Location
* type = #composite
* expression = "Location.extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients')"
* component[0].definition = "http://hl7.org/fhir/us/ndh/SearchParameter/location-new-patient"
* component[=].expression = "Location.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='acceptingPatients').value.ofType(CodeableConcept)"
* component[+].definition = "http://hl7.org/fhir/us/ndh/SearchParameter/location-new-patient-from-network"
* component[=].expression = "Location.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url='fromNetwork').value.ofType(Reference)"

Instance: location-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "Location verification-status"
* status = #active
* code = #verification-status
* name = "LocationVerificationStatusSearchParameter"
* description = "Select Locations of the specified verification-status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/location-verification-status"
* base[0] = #Location
* type = #token
* expression = "Location.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
//* multipleAnd = true
* multipleOr = true
* modifier[+] = #text




//--------------------------------
// Organization
//--------------------------------
Instance: network-coverage-area
InstanceOf: SearchParameter
Usage: #definition
Title: "Network coverage-area"
* status = #active
* code = #coverage-area
* name = "NetworkCoverageAreaSearchParameter"
* description = "Select health insurance provider networks available in a region described by the specified location. This search parameter is for the NDH Network Profile 
Resource only."
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/network-coverage-area"
* base[0] = #Organization
* type = #reference
* expression = "Organization.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-location-reference').value.ofType(Reference)"
//* xpath = "f:Organization/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-location-reference']/f:extension/f:valueReference/f:reference/@value"
* xpathUsage = #normal
* target[+] = #Location
* multipleOr = true
* multipleAnd = true
* chain[+] = "location-identifier"
* chain[+] = "location-contains"

Instance: organization-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "Organization or Network verification-status"
* status = #active
* code = #verification-status
* name = "OrganizationVerificationStatusSearchParameter"
* description = "Select Organization or Network with the specified verification status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/organization-verification-status"
* base[0] = #Organization
* type = #token
* expression = "Organization.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true
* modifier[+] = #text


//--------------------------------------
// OrganizationAffiliation
//--------------------------------------

Instance: organizationaffiliation-via-intermediary
InstanceOf: SearchParameter
Usage: #definition
Title: "OrganizationAffiliation via-intermediary"
* status = #active
* code = #via-intermediary
* name = "OrganizationAffiliationViaIntermediarySearchParameter"
* description = "Select OrganizationAffiliation of the specified via-intermediary"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/organizationaffiliation-via-intermediary"
* base[0] = #OrganizationAffiliation
* type = #reference
* expression = "OrganizationAffiliation.telecom.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-via-intermediary').value.ofType(Reference)"
* xpathUsage = #normal
* target[+] = #Location
* target[+] = #Organization
* target[+] = #OrganizationAffiliation
* target[+] = #PractitionerRole
* multipleOr = true
* multipleAnd = true

Instance: organizationaffiliation-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "OrganizationAffiliation verification-status"
* status = #active
* code = #verification-status
* name = "OrganizationAffiliationVerificationStatusSearchParameter"
* description = "Select OrganizationAffiliation with the specified verification-status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/organizationaffiliation-verification-status"
* base[0] = #OrganizationAffiliation
* type = #token
* expression = "OrganizationAffiliation.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
//* multipleAnd = true
* multipleOr = true
* modifier[+] = #text

Instance: organizationaffiliation-location
InstanceOf: SearchParameter
Usage: #definition
Title: "OrganizationAffiliation location"
* status = #active
* code = #location
* name = "OrganizationAffiliationLocationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-location"
* description = "Select OrganizationAffiliation with the specified location"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/organizationaffiliation-location"
* base[0] = #OrganizationAffiliation
* type = #reference
* expression = "OrganizationAffiliation.location"
* xpathUsage = #normal
* target[+] = #Location
* multipleOr = true
* multipleAnd = true
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "organization"
* chain[+] = "type"

Instance: organizationaffiliation-primary-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "OrganizationAffiliation primary organization"
* status = #active
* code = #primary-organization
* name = "OrganizationAffiliationPrimaryOrganizationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-primary-organization"
* description = "Select OrganizationAffiliation with the specified primary organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/organizationaffiliation-primary-organization"
* base[0] = #OrganizationAffiliation
* type = #reference
* expression = "OrganizationAffiliation.organization"
* xpathUsage = #normal
* target[+] = #Organization
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "partof"
* chain[+] = "type"

Instance: organizationaffiliation-participating-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "OrganizationAffiliation participating organization"
* status = #active
* code = #participating-organization
* name = "OrganizationAffiliationParticipatingOrganizationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-participating-organization"
* description = "Select OrganizationAffiliation with the specified participating organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/organizationaffiliation-participating-organization"
* base[0] = #OrganizationAffiliation
* type = #reference
* expression = "OrganizationAffiliation.participatingOrganization"
* xpathUsage = #normal
* target[+] = #Organization
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "partof"
* chain[+] = "type"


//--------------------------------------
// Practitioner
//--------------------------------------

Instance: practitioner-qualification-code
InstanceOf: SearchParameter
Usage: #definition
Title: "Practitioner qualification-code"
* status = #active
* code = #qualification-code
* name = "PractitionerQualificationCodeSearchParameter"
* description = "Select Practitioner with a type of qualification matching the specific code"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitioner-qualification-code"
* base[0] = #Practitioner
* type = #token
* expression = "Practitioner.qualification.code"
//* xpath = "f:Practitioner/f:qualification/f:code"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: practitioner-qualification-issuer
InstanceOf: SearchParameter
Usage: #definition
Title: "Practitioner qualification-issuer"
* status = #active
* code = #qualification-issuer
* name = "PractitionerQualificationIssuerSearchParameter"
* description = "Select Practitioners with a qualification issued by the specified organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitioner-qualification-issuer"
* base[0] = #Practitioner
* type = #reference
* target[+] = #Organization
* expression = "Practitioner.qualification.issuer"
//* xpath = "f:Practitioner/f:qualification/f:issuer"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
//* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"

Instance: practitioner-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "Practitioner verification-status"
* status = #active
* code = #verification-status
* name = "PractitionerVerificationStatusSearchParameter"
* description = "Select Practitioner with the specified verification-status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitioner-verification-status"
* base[0] = #Practitioner
* type = #token
* expression = "Practitioner.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
//* multipleAnd = true
* multipleOr = true
* modifier[+] = #text

Instance: practitioner-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Practitioner endpoint"
* status = #active
* code = #endpoint
* name = "PractitionerEndpointSearchParameter"
* description = "Select Practitioner with the specified endpoint"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitioner-endpoint"
* base[0] = #Practitioner
* type = #reference
* target[+] = #Endpoint
* expression = "Practitioner.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-reference').value.ofType(Reference)"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true
* chain[+] = "identifier"
* chain[+] = "connection-type"
* chain[+] = "organization"


//----------------------------------------
// PractitionerRole
//----------------------------------------
Instance: practitionerrole-network
InstanceOf: SearchParameter
Usage: #definition
Title: "PractitionerRole network"
* status = #active
* code = #network
* name = "PractitionerroleNetworkSearchParameter"
* description = "Select roles where the practitioner is a member of the specified health insurance provider network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-network"
* base[0] = #PractitionerRole
* type = #reference
* target[+] = #Organization
//* expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-network-reference').value as Reference"
* expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-network-reference').value.ofType(Reference)"
//* xpath = "f:PractitionerRole/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-network-reference']/f:extension/f:valueReference/f:reference/@value"
* xpathUsage = #normal
//* multipleOr = true
//* multipleAnd = true
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "partof"

Instance: practitionerrole-new-patient
InstanceOf: SearchParameter
Usage: #definition
Title: "PractitionerRole new-patient"
* status = #active
* code = #new-patient
* name = "PractitionerroleNewPatientSearchParameter"
* description = "Select roles where the practitioner new-patient"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-new-patient"
* base[0] = #PractitionerRole
* type = #token
* expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='acceptingPatients').value.ofType(CodeableConcept)"
//* xpath = "f:PractitionerRole/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients']/f:extension[@url='acceptingPatients']/f:extension/f:valueCodeableConcept/f:coding/f:code/@value"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true

Instance: practitionerrole-new-patient-from-network
InstanceOf: SearchParameter
Usage: #definition
Title: "PractitionerRole new-patient-from-network"
* status = #active
* code = #new-patient-from-network
* name = "PractitionerroleNewPatientFromNetworkSearchParameter"
* description = "Select roles where the practitioner new-patient-from-network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-new-patient-from-network"
* base[0] = #PractitionerRole
* type = #reference
* target[+] = #Organization
* expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='fromNetwork').value.ofType(Reference)"
//* xpath = "f:PractitionerRole/f:extension[@url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients']/f:extension[@url='fromNetwork']/f:extension/f:valueReference/f:reference/@value"
* xpathUsage = #normal
* multipleAnd = true
* multipleOr = true
* chain[+] = #identifier
* chain[+] = #name
* chain[+] = #partof


Instance: practitionerrole-new-patient-and-from-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Practitionerrole new-patient-and-from-network"
* status = #active
* code = #new-patient-and-from-network
* name = "PractitionerroleNewPatientAndFromNetworkSearchParameter"
* description = "Select roles where the practitioner with the specified new-patient and from-network"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-new-patient-and-from-network"
* base[0] = #PractitionerRole
* type = #composite
* expression = "PractitionerRole.extension('http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients')"
* component[0].definition = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-new-patient"
* component[=].expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='acceptingPatients').value.ofType(CodeableConcept)"
* component[+].definition = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-new-patient-from-network"
* component[=].expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-newpatients').extension.where(url ='fromNetwork').value.ofType(Reference)"

Instance: practitionerrole-verification-status
InstanceOf: SearchParameter
Usage: #definition
Title: "PractitionerRole verification-status"
* status = #active
* code = #verification-status
* name = "PractitionerroleVerificationStatusSearchParameter"
* description = "Select roles where the practitioner verification-status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-verification-status"
* base[0] = #PractitionerRole
* type = #token
* expression = "PractitionerRole.extension.where(url='http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-verification-status').value.ofType(CodeableConcept)"
* xpathUsage = #normal
//* multipleAnd = true
* multipleOr = true
* modifier[+] = #text

Instance: practitionerrole-location
InstanceOf: SearchParameter
Usage: #definition
Title: "PractitionerRole location"
* status = #active
* code = #location
* name = "PractitionerroleLocationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/PractitionerRole-location"
* description = "Select roles where the practitioner location"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-location"
* base[0] = #PractitionerRole
* type = #reference
* expression = "PractitionerRole.location"
* xpathUsage = #normal
* target[+] = #Location
* multipleOr = true
* multipleAnd = true
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "organization"
* chain[+] = "type"

Instance: practitionerrole-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "PractitionerRole organization"
* status = #active
* code = #organization
* name = "PractitionerroleOrganizationSearchParameter"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization"
* description = "Select roles where the practitioner organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/practitionerrole-organization"
* base[0] = #PractitionerRole
* type = #reference
* expression = "PractitionerRole.organization"
* xpathUsage = #normal
* target[+] = #Organization
* modifier[+] = #above
* modifier[+] = #below
* chain[+] = "identifier"
* chain[+] = "name"
* chain[+] = "address"
* chain[+] = "partof"
* chain[+] = "type"


//-----------------------------------
// VerificationResult
//-----------------------------------
Instance: verificationresult-attestation-communication-method
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult attestation-communication-method"
* status = #active
* code = #attestation-communication-method
* name = "VerificationResultAttestationCommunicationMethodSearchParameter"
* description = "Select validation information for data that was attested to by communication-method"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-attestation-communication-method"
* base[0] = #VerificationResult
* type = #token
* expression = "VerificationResult.attestation.communicationMethod"
//* xpath =  "f:VerificationResult/f:attestation/f:communicationMethod"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: verificationresult-attestation-onbehalfof
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult attestation-onbehalfof"
* status = #active
* code = #attestation-onbehalfof
* name = "VerificationResultAttestationOnbehalfofSearchParameter"
* description = "Select validation information for data that was attested to by onbehalfof"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-attestation-onbehalfof"
* base[0] = #VerificationResult
* type = #reference
* expression = "VerificationResult.attestation.onBehalfOf"
//* xpath =  "f:VerificationResult/f:attestation/f:onbehalfof"
* xpathUsage = #normal
* target[+] = #Practitioner
* target[+] = #PractitionerRole
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true
* modifier[+] = #type
* chain[+] = "identifier"
* chain[+] = "address"
* chain[+] = "name"
* chain[+] = "partof"
* chain[+] = "location"
* chain[+] = "organization"
* chain[+] = "practitioner"

Instance: verificationresult-attestation-who
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult attestation-who"
* status = #active
* code = #attestation-who
* name = "VerificationResultAttestationWhoSearchParameter"
* description = "Select validation information for data that was attested to by the specified individual or organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-attestation-who"
* base[0] = #VerificationResult
* type = #reference
* expression = "VerificationResult.attestation.who"
//* xpath = "f:VerificationResult/f:attestation/f:who"
* xpathUsage = #normal
* target[+] = #Practitioner
* target[+] = #PractitionerRole
* target[+] = #Organization
* multipleOr = true
//commented out multipleAnd = true
//* multipleAnd = true
* modifier[+] = #type
* chain[+] = "identifier"
* chain[+] = "address"
* chain[+] = "name"
* chain[+] = "partof"
* chain[+] = "location"
* chain[+] = "organization"
* chain[+] = "practitioner"


Instance: verificationresult-primarysource-validation-date
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult primarysource-validation-date"
* status = #active
* code = #primarysource-validation-date
* name = "VerificationResultPrimarysourceValidationDateSearchParameter"
* description = "Select verification information for data that was verified against the specified primary source validationDate"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-primarysource-validation-date"
* base[0] = #VerificationResult
* type = #date
* expression = "VerificationResult.primarySource.validationDate"
//* xpath = "f:VerificationResult/f:primarysource/f:validationDate"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* comparator[0] = #eq
* comparator[+] = #gt
* comparator[+] = #lt 
* comparator[+] = #ge 
* comparator[+] = #le 
* comparator[+] = #sa 
* comparator[+] = #eb

Instance: verificationresult-primarysource-validation-status
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult primarysource-validation-status"
* status = #active
* code = #primarysource-validation-status
* name = "VerificationResultPrimarysourceValidationStatusSearchParameter"
* description = "Select verification information for data that was verified against the specified primary source validationStatus"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-primarysource-validation-status"
* base[0] = #VerificationResult
* type = #token
* expression = "VerificationResult.primarySource.validationStatus"
//* xpath = "f:VerificationResult/f:primarysource/f:validationStatus"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: verificationresult-primarysource-type
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult primarysource-type"
* status = #active
* code = #primarysource-type
* name = "VerificationResultPrimarysourceTypeSearchParameter"
* description = "Select verification information for data that was verified against the specified primary source type"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-primarysource-type"
* base[0] = #VerificationResult
* type = #token
* expression = "VerificationResult.primarySource.type"
//* xpath = "f:VerificationResult/f:primarysource/f:type"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[+] = #text

Instance: verificationresult-primarysource-who
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult primarysource-who"
* status = #active
* code = #primarysource-who
* name = "VerificationResultPrimarysourceWhoSearchParameter"
* description = "Select verification information for data that was verified against the specified primary source who"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-primarysource-who"
* base[0] = #VerificationResult
* type = #reference
* expression = "VerificationResult.primarySource.who"
//* xpath = "f:VerificationResult/f:primarysource/f:who"
* xpathUsage = #normal
* target[+] = #Practitioner
* target[+] = #PractitionerRole
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true
* modifier[+] = #type
* chain[+] = "identifier"
* chain[+] = "address"
* chain[+] = "name"
* chain[+] = "partof"
* chain[+] = "location"
* chain[+] = "organization"
* chain[+] = "practitioner"


Instance: verificationresult-status-date
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult status-date"
* status = #active
* code = #status-date
* name = "VerificationResultStatusDateSearchParameter"
* description = "Select verification information for data that was verified against the specified statusDate"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-status-date"
* base[0] = #VerificationResult
* type = #date
* expression = "VerificationResult.statusDate"
//* xpath =  "f:VerificationResult/f:statusDate"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true
* comparator[0] = #eq
* comparator[+] = #gt
* comparator[+] = #lt 
* comparator[+] = #ge 
* comparator[+] = #le 
* comparator[+] = #sa 
* comparator[+] = #eb

Instance: verificationresult-status
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult status"
* status = #active
* code = #status
* name = "VerificationResultStatusSearchParameter"
* description = "Select verification information for data that was verified against the specified status"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-status"
* base[0] = #VerificationResult
* type = #token
* expression = "VerificationResult.status"
//* xpath = "f:VerificationResult/f:status"
* xpathUsage = #normal
* multipleOr = true
//* multipleAnd = true

Instance: verificationresult-target
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult target"
* status = #active
* code = #target
* name = "VerificationResultTargetSearchParameter"
* description = "Select verification information for data that was verified against the specified target"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-target"
* base[0] = #VerificationResult
* type = #reference
* expression = "VerificationResult.target"
//* xpath = "f:VerificationResult/f:target"
* xpathUsage = #normal
* target[+] = #Resource
* multipleOr = true
* multipleAnd = true
* modifier[+] = #type


Instance: verificationresult-validator-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "VerificationResult validator-organization"
* status = #active
* code = #validator-organization
* name = "VerificationResultValidatorOrganizationSearchParameter"
* description = "Select verification information for data that was verified against the specified validator-organization"
* url = "http://hl7.org/fhir/us/ndh/SearchParameter/verificationresult-validator-organization"
* base[0] = #VerificationResult
* type = #reference
* expression = "VerificationResult.validator.organization"
//* xpath =  "f:VerificationResult/f:validator/f:organization"
* xpathUsage = #normal
* target[+] = #Organization
* multipleOr = true
* multipleAnd = true
* chain[+] = #identifier
* chain[+] = #name





---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-VS-IndividualAndGroupSpecialties.fsh

ValueSet: IndividualAndGroupSpecialtiesVS
Title: "Individual and Group Specialties"
Description:  "Individual and Group Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* $NUCCProviderTaxonomy#101200000X "Drama Therapist"  // added 4/21/21
* $NUCCProviderTaxonomy#101Y00000X "Counselor" 
* $NUCCProviderTaxonomy#101YA0400X "Addiction (Substance Use Disorder) Counselor" 
* $NUCCProviderTaxonomy#101YM0800X "Mental Health Counselor" 
* $NUCCProviderTaxonomy#101YP1600X "Pastoral Counselor" 
* $NUCCProviderTaxonomy#101YP2500X "Professional Counselor" 
* $NUCCProviderTaxonomy#101YS0200X "School Counselor" 
* $NUCCProviderTaxonomy#102L00000X "Psychoanalyst" 
* $NUCCProviderTaxonomy#102X00000X "Poetry Therapist" 
* $NUCCProviderTaxonomy#103G00000X "Clinical Neuropsychologist" 
* $NUCCProviderTaxonomy#103K00000X "Behavioral Analyst" 
* $NUCCProviderTaxonomy#103T00000X "Psychologist" 
* $NUCCProviderTaxonomy#103TA0400X "Addiction (Substance Use Disorder) Psychologist" 
* $NUCCProviderTaxonomy#103TA0700X "Adult Development & Aging Psychologist" 
* $NUCCProviderTaxonomy#103TB0200X "Cognitive & Behavioral Psychologist" 
* $NUCCProviderTaxonomy#103TC0700X "Clinical Psychologist" 
* $NUCCProviderTaxonomy#103TC1900X "Counseling Psychologist" 
* $NUCCProviderTaxonomy#103TC2200X "Clinical Child & Adolescent Psychologist" 
* $NUCCProviderTaxonomy#103TE1100X "Exercise & Sports Psychologist" 
* $NUCCProviderTaxonomy#103TF0000X "Family Psychologist" 
* $NUCCProviderTaxonomy#103TF0200X "Forensic Psychologist" 
* $NUCCProviderTaxonomy#103TH0004X "Health Psychologist" 
* $NUCCProviderTaxonomy#103TH0100X "Health Service Psychologist" 
* $NUCCProviderTaxonomy#103TM1800X "Intellectual & Developmental Disabilities Psychologist" 
* $NUCCProviderTaxonomy#103TP0016X "Prescribing (Medical) Psychologist" 
* $NUCCProviderTaxonomy#103TP0814X "Psychoanalysis Psychologist" 
* $NUCCProviderTaxonomy#103TP2701X "Group Psychotherapy Psychologist" 
* $NUCCProviderTaxonomy#103TR0400X "Rehabilitation Psychologist" 
* $NUCCProviderTaxonomy#103TS0200X "School Psychologist" 
* $NUCCProviderTaxonomy#104100000X "Social Worker" 
* $NUCCProviderTaxonomy#1041C0700X "Clinical Social Worker" 
* $NUCCProviderTaxonomy#1041S0200X "School Social Worker" 
* $NUCCProviderTaxonomy#106E00000X "Assistant Behavior Analyst" 
* $NUCCProviderTaxonomy#106H00000X "Marriage & Family Therapist" 
* $NUCCProviderTaxonomy#106S00000X "Behavior Technician" 
* $NUCCProviderTaxonomy#111N00000X "Chiropractor" 
* $NUCCProviderTaxonomy#111NI0013X "Independent Medical Examiner Chiropractor" 
* $NUCCProviderTaxonomy#111NI0900X "Internist Chiropractor" 
* $NUCCProviderTaxonomy#111NN0400X "Neurology Chiropractor" 
* $NUCCProviderTaxonomy#111NN1001X "Nutrition Chiropractor" 
* $NUCCProviderTaxonomy#111NP0017X "Pediatric Chiropractor" 
* $NUCCProviderTaxonomy#111NR0200X "Radiology Chiropractor" 
* $NUCCProviderTaxonomy#111NR0400X "Rehabilitation Chiropractor" 
* $NUCCProviderTaxonomy#111NS0005X "Sports Physician Chiropractor" 
* $NUCCProviderTaxonomy#111NT0100X "Thermography Chiropractor" 
* $NUCCProviderTaxonomy#111NX0100X "Occupational Health Chiropractor" 
* $NUCCProviderTaxonomy#111NX0800X "Orthopedic Chiropractor" 
* $NUCCProviderTaxonomy#122300000X "Dentist" 
* $NUCCProviderTaxonomy#1223D0001X "Public Health Dentist" 
* $NUCCProviderTaxonomy#1223D0004X "Dentist Anesthesiologist" 
* $NUCCProviderTaxonomy#1223E0200X "Endodontist" 
* $NUCCProviderTaxonomy#1223G0001X "General Practice Dentistry" 
* $NUCCProviderTaxonomy#1223P0106X "Oral and Maxillofacial Pathology Dentist" 
* $NUCCProviderTaxonomy#1223P0221X "Pediatric Dentist" 
* $NUCCProviderTaxonomy#1223P0300X "Periodontist" 
* $NUCCProviderTaxonomy#1223P0700X "Prosthodontist" 
* $NUCCProviderTaxonomy#1223S0112X "Oral and Maxillofacial Surgery (Dentist)" 
* $NUCCProviderTaxonomy#1223X0008X "Oral and Maxillofacial Radiology Dentist" 
* $NUCCProviderTaxonomy#1223X0400X "Orthodontics and Dentofacial Orthopedic Dentist" 
* $NUCCProviderTaxonomy#1223X2210X "Orofacial Pain Dentist" 
* $NUCCProviderTaxonomy#122400000X "Denturist" 
* $NUCCProviderTaxonomy#124Q00000X "Dental Hygienist" 
* $NUCCProviderTaxonomy#125J00000X "Dental Therapist" 
* $NUCCProviderTaxonomy#125K00000X "Advanced Practice Dental Therapist" 
* $NUCCProviderTaxonomy#125Q00000X "Oral Medicinist" 
* $NUCCProviderTaxonomy#126800000X "Dental Assistant" 
* $NUCCProviderTaxonomy#126900000X "Dental Laboratory Technician" 
* $NUCCProviderTaxonomy#132700000X "Dietary Manager" 
* $NUCCProviderTaxonomy#133N00000X "Nutritionist" 
* $NUCCProviderTaxonomy#133NN1002X "Nutrition Education Nutritionist" 
* $NUCCProviderTaxonomy#133V00000X "Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1004X "Pediatric Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1005X "Renal Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1006X "Metabolic Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1101X "Gerontological Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1201X "Obesity and Weight Management Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1301X "Oncology Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1401X "Pediatric Critical Care Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1501X "Sports Dietetics Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#136A00000X "Registered Dietetic Technician" 
* $NUCCProviderTaxonomy#146D00000X "Personal Emergency Response Attendant" 
* $NUCCProviderTaxonomy#146L00000X "Paramedic" 
* $NUCCProviderTaxonomy#146M00000X "Intermediate Emergency Medical Technician" 
* $NUCCProviderTaxonomy#146N00000X "Basic Emergency Medical Technician" 
* $NUCCProviderTaxonomy#152W00000X "Optometrist" 
* $NUCCProviderTaxonomy#152WC0802X "Corneal and Contact Management Optometrist" 
* $NUCCProviderTaxonomy#152WL0500X "Low Vision Rehabilitation Optometrist" 
* $NUCCProviderTaxonomy#152WP0200X "Pediatric Optometrist" 
* $NUCCProviderTaxonomy#152WS0006X "Sports Vision Optometrist" 
* $NUCCProviderTaxonomy#152WV0400X "Vision Therapy Optometrist" 
* $NUCCProviderTaxonomy#152WX0102X "Occupational Vision Optometrist" 
* $NUCCProviderTaxonomy#156F00000X "Technician/Technologist" 
* $NUCCProviderTaxonomy#156FC0800X "Contact Lens Technician/Technologist" 
* $NUCCProviderTaxonomy#156FC0801X "Contact Lens Fitter" 
* $NUCCProviderTaxonomy#156FX1100X "Ophthalmic Technician/Technologist" 
* $NUCCProviderTaxonomy#156FX1101X "Ophthalmic Assistant" 
* $NUCCProviderTaxonomy#156FX1201X "Optometric Assistant Technician" 
* $NUCCProviderTaxonomy#156FX1202X "Optometric Technician" 
* $NUCCProviderTaxonomy#156FX1700X "Ocularist" 
* $NUCCProviderTaxonomy#156FX1800X "Optician" 
* $NUCCProviderTaxonomy#156FX1900X "Orthoptist" 
* $NUCCProviderTaxonomy#163W00000X "Registered Nurse" 
* $NUCCProviderTaxonomy#163WA0400X "Addiction (Substance Use Disorder) Registered Nurse" 
* $NUCCProviderTaxonomy#163WA2000X "Administrator Registered Nurse" 
* $NUCCProviderTaxonomy#163WC0200X "Critical Care Medicine Registered Nurse" 
* $NUCCProviderTaxonomy#163WC0400X "Case Management Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1400X "College Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1500X "Community Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1600X "Continuing Education/Staff Development Registered Nurse" 
* $NUCCProviderTaxonomy#163WC2100X "Continence Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WC3500X "Cardiac Rehabilitation Registered Nurse" 
* $NUCCProviderTaxonomy#163WD0400X "Diabetes Educator Registered Nurse" 
* $NUCCProviderTaxonomy#163WD1100X "Peritoneal Dialysis Registered Nurse" 
* $NUCCProviderTaxonomy#163WE0003X "Emergency Registered Nurse" 
* $NUCCProviderTaxonomy#163WE0900X "Enterostomal Therapy Registered Nurse" 
* $NUCCProviderTaxonomy#163WF0300X "Flight Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0000X "General Practice Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0100X "Gastroenterology Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0600X "Gerontology Registered Nurse" 
* $NUCCProviderTaxonomy#163WH0200X "Home Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WH0500X "Hemodialysis Registered Nurse" 
* $NUCCProviderTaxonomy#163WH1000X "Hospice Registered Nurse" 
* $NUCCProviderTaxonomy#163WI0500X "Infusion Therapy Registered Nurse" 
* $NUCCProviderTaxonomy#163WI0600X "Infection Control Registered Nurse" 
* $NUCCProviderTaxonomy#163WL0100X "Lactation Consultant (Registered Nurse)" 
* $NUCCProviderTaxonomy#163WM0102X "Maternal Newborn Registered Nurse" 
* $NUCCProviderTaxonomy#163WM0705X "Medical-Surgical Registered Nurse" 
* $NUCCProviderTaxonomy#163WM1400X "Nurse Massage Therapist (NMT)" 
* $NUCCProviderTaxonomy#163WN0002X "Neonatal Intensive Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0003X "Low-Risk Neonatal Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0300X "Nephrology Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0800X "Neuroscience Registered Nurse" 
* $NUCCProviderTaxonomy#163WN1003X "Nutrition Support Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0000X "Pain Management Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0200X "Pediatric Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0218X "Pediatric Oncology Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0807X "Child & Adolescent Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0808X "Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0809X "Adult Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP1700X "Perinatal Registered Nurse" 
* $NUCCProviderTaxonomy#163WP2201X "Ambulatory Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WR0006X "Registered Nurse First Assistant" 
* $NUCCProviderTaxonomy#163WR0400X "Rehabilitation Registered Nurse" 
* $NUCCProviderTaxonomy#163WR1000X "Reproductive Endocrinology/Infertility Registered Nurse" 
* $NUCCProviderTaxonomy#163WS0121X "Plastic Surgery Registered Nurse" 
* $NUCCProviderTaxonomy#163WS0200X "School Registered Nurse" 
* $NUCCProviderTaxonomy#163WU0100X "Urology Registered Nurse" 
* $NUCCProviderTaxonomy#163WW0000X "Wound Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WW0101X "Ambulatory Women's Health Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0002X "High-Risk Obstetric Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0003X "Inpatient Obstetric Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0106X "Occupational Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0200X "Oncology Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0601X "Otorhinolaryngology & Head-Neck Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0800X "Orthopedic Registered Nurse" 
* $NUCCProviderTaxonomy#163WX1100X "Ophthalmic Registered Nurse" 
* $NUCCProviderTaxonomy#163WX1500X "Ostomy Care Registered Nurse" 
* $NUCCProviderTaxonomy#164W00000X "Licensed Practical Nurse" 
* $NUCCProviderTaxonomy#164X00000X "Licensed Vocational Nurse" 
* $NUCCProviderTaxonomy#167G00000X "Licensed Psychiatric Technician" 
* $NUCCProviderTaxonomy#170100000X "Ph.D. Medical Genetics" 
* $NUCCProviderTaxonomy#170300000X "Genetic Counselor (M.S.)" 
* $NUCCProviderTaxonomy#171000000X "Military Health Care Provider" 
* $NUCCProviderTaxonomy#1710I1002X "Independent Duty Corpsman" 
* $NUCCProviderTaxonomy#1710I1003X "Independent Duty Medical Technicians" 
* $NUCCProviderTaxonomy#171100000X "Acupuncturist" 
* $NUCCProviderTaxonomy#171400000X "Health & Wellness Coach"   //added 04/21/21
* $NUCCProviderTaxonomy#171M00000X "Case Manager/Care Coordinator" 
* $NUCCProviderTaxonomy#171R00000X "Interpreter" 
* $NUCCProviderTaxonomy#171W00000X "Contractor" 
* $NUCCProviderTaxonomy#171WH0202X "Home Modifications Contractor" 
* $NUCCProviderTaxonomy#171WV0202X "Vehicle Modifications Contractor" 
* $NUCCProviderTaxonomy#172A00000X "Driver" 
* $NUCCProviderTaxonomy#172M00000X "Mechanotherapist" 
* $NUCCProviderTaxonomy#172P00000X "Naprapath" 
* $NUCCProviderTaxonomy#172V00000X "Community Health Worker" 
* $NUCCProviderTaxonomy#173000000X "Legal Medicine" 
* $NUCCProviderTaxonomy#173C00000X "Reflexologist" 
* $NUCCProviderTaxonomy#173F00000X "Sleep Specialist (PhD)" 
* $NUCCProviderTaxonomy#174400000X "Specialist" 
* $NUCCProviderTaxonomy#1744G0900X "Graphics Designer" 
* $NUCCProviderTaxonomy#1744P3200X "Prosthetics Case Management" 
* $NUCCProviderTaxonomy#1744R1102X "Research Study Specialist" 
* $NUCCProviderTaxonomy#1744R1103X "Research Study Abstracter/Coder" 
* $NUCCProviderTaxonomy#174H00000X "Health Educator" 
* $NUCCProviderTaxonomy#174M00000X "Veterinarian" 
* $NUCCProviderTaxonomy#174MM1900X "Medical Research Veterinarian" 
* $NUCCProviderTaxonomy#174N00000X "Lactation Consultant (Non-RN)" 
* $NUCCProviderTaxonomy#174V00000X "Clinical Ethicist" 
* $NUCCProviderTaxonomy#175F00000X "Naturopath" 
* $NUCCProviderTaxonomy#175L00000X "Homeopath" 
* $NUCCProviderTaxonomy#175M00000X "Lay Midwife" 
* $NUCCProviderTaxonomy#175T00000X "Peer Specialist" 
* $NUCCProviderTaxonomy#176B00000X "Midwife" 
* $NUCCProviderTaxonomy#176P00000X "Funeral Director" 
* $NUCCProviderTaxonomy#183500000X "Pharmacist" 
* $NUCCProviderTaxonomy#1835C0205X "Critical Care Pharmacist" 
* $NUCCProviderTaxonomy#1835G0303X "Geriatric Pharmacist" 
* $NUCCProviderTaxonomy#1835N0905X "Nuclear Pharmacist" 
* $NUCCProviderTaxonomy#1835N1003X "Nutrition Support Pharmacist" 
* $NUCCProviderTaxonomy#1835P0018X "Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist" 
* $NUCCProviderTaxonomy#1835P0200X "Pediatric Pharmacist" 
* $NUCCProviderTaxonomy#1835P1200X "Pharmacotherapy Pharmacist" 
* $NUCCProviderTaxonomy#1835P1300X "Psychiatric Pharmacist" 
* $NUCCProviderTaxonomy#1835P2201X "Ambulatory Care Pharmacist" 
* $NUCCProviderTaxonomy#1835X0200X "Oncology Pharmacist" 
* $NUCCProviderTaxonomy#183700000X "Pharmacy Technician" 
* $NUCCProviderTaxonomy#193200000X "Multi-Specialty Group" 
* $NUCCProviderTaxonomy#202C00000X "Independent Medical Examiner Physician" 
* $NUCCProviderTaxonomy#202K00000X "Phlebology Physician" 
* $NUCCProviderTaxonomy#204C00000X "Sports Medicine (Neuromusculoskeletal Medicine) Physician" 
* $NUCCProviderTaxonomy#204D00000X "Neuromusculoskeletal Medicine & OMM Physician" 
* $NUCCProviderTaxonomy#204E00000X "Oral & Maxillofacial Surgery (D.M.D.) Physician" 
* $NUCCProviderTaxonomy#204F00000X "Transplant Surgery Physician" 
* $NUCCProviderTaxonomy#204R00000X "Electrodiagnostic Medicine Physician" 
* $NUCCProviderTaxonomy#207K00000X "Allergy & Immunology Physician" 
* $NUCCProviderTaxonomy#207KA0200X "Allergy Physician" 
* $NUCCProviderTaxonomy#207KI0005X "Clinical & Laboratory Immunology (Allergy & Immunology) Physician" 
* $NUCCProviderTaxonomy#207L00000X "Anesthesiology Physician" 
* $NUCCProviderTaxonomy#207LA0401X "Addiction Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LC0200X "Critical Care Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LH0002X "Hospice and Palliative Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LP2900X "Pain Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LP3000X "Pediatric Anesthesiology Physician" 
* $NUCCProviderTaxonomy#207N00000X "Dermatology Physician" 
* $NUCCProviderTaxonomy#207ND0101X "MOHS-Micrographic Surgery Physician" 
* $NUCCProviderTaxonomy#207ND0900X "Dermatopathology Physician" 
* $NUCCProviderTaxonomy#207NI0002X "Clinical & Laboratory Dermatological Immunology Physician" 
* $NUCCProviderTaxonomy#207NP0225X "Pediatric Dermatology Physician" 
* $NUCCProviderTaxonomy#207NS0135X "Procedural Dermatology Physician" 
* $NUCCProviderTaxonomy#207P00000X "Emergency Medicine Physician" 
* $NUCCProviderTaxonomy#207PE0004X "Emergency Medical Services (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PE0005X "Undersea and Hyperbaric Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PH0002X "Hospice and Palliative Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PP0204X "Pediatric Emergency Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PS0010X "Sports Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PT0002X "Medical Toxicology (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207Q00000X "Family Medicine" 
* $NUCCProviderTaxonomy#207QA0000X "Adolescent Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QA0401X "Addiction Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QA0505X "Adult Medicine Physician" 
* $NUCCProviderTaxonomy#207QB0002X "Obesity Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QG0300X "Geriatric Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QH0002X "Hospice and Palliative Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QS0010X "Sports Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QS1201X "Sleep Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician" 
* $NUCCProviderTaxonomy#207RA0000X "Adolescent Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RA0001X "Advanced Heart Failure and Transplant Cardiology Physician" 
* $NUCCProviderTaxonomy#207RA0002X "Adult Congenital Heart Disease Physician" 
* $NUCCProviderTaxonomy#207RA0201X "Allergy & Immunology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RA0401X "Addiction Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RB0002X "Obesity Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician" 
* $NUCCProviderTaxonomy#207RC0001X "Clinical Cardiac Electrophysiology Physician" 
* $NUCCProviderTaxonomy#207RC0200X "Critical Care Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RE0101X "Endocrinology, Diabetes & Metabolism Physician" 
* $NUCCProviderTaxonomy#207RG0100X "Gastroenterology Physician" 
* $NUCCProviderTaxonomy#207RG0300X "Geriatric Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0000X "Hematology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0002X "Hospice and Palliative Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0003X "Hematology & Oncology Physician" 
* $NUCCProviderTaxonomy#207RH0005X "Hypertension Specialist Physician" 
* $NUCCProviderTaxonomy#207RI0001X "Clinical & Laboratory Immunology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RI0008X "Hepatology Physician" 
* $NUCCProviderTaxonomy#207RI0011X "Interventional Cardiology Physician" 
* $NUCCProviderTaxonomy#207RI0200X "Infectious Disease Physician" 
* $NUCCProviderTaxonomy#207RM1200X "Magnetic Resonance Imaging (MRI) Internal Medicine Physician" 
* $NUCCProviderTaxonomy#207RN0300X "Nephrology Physician" 
* $NUCCProviderTaxonomy#207RP1001X "Pulmonary Disease Physician" 
* $NUCCProviderTaxonomy#207RR0500X "Rheumatology Physician" 
* $NUCCProviderTaxonomy#207RS0010X "Sports Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RS0012X "Sleep Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RT0003X "Transplant Hepatology Physician" 
* $NUCCProviderTaxonomy#207RX0202X "Medical Oncology Physician" 
* $NUCCProviderTaxonomy#207SC0300X "Clinical Cytogenetics Physician" 
* $NUCCProviderTaxonomy#207SG0201X "Clinical Genetics (M.D.) Physician" 
* $NUCCProviderTaxonomy#207SG0202X "Clinical Biochemical Genetics Physician" 
* $NUCCProviderTaxonomy#207SG0203X "Clinical Molecular Genetics Physician" 
* $NUCCProviderTaxonomy#207SG0205X "Ph.D. Medical Genetics Physician" 
* $NUCCProviderTaxonomy#207SM0001X "Molecular Genetic Pathology (Medical Genetics) Physician" 
* $NUCCProviderTaxonomy#207T00000X "Neurological Surgery Physician" 
* $NUCCProviderTaxonomy#207U00000X "Nuclear Medicine Physician" 
* $NUCCProviderTaxonomy#207UN0901X "Nuclear Cardiology Physician" 
* $NUCCProviderTaxonomy#207UN0902X "Nuclear Imaging & Therapy Physician" 
* $NUCCProviderTaxonomy#207UN0903X "In Vivo & In Vitro Nuclear Medicine Physician"  
* $NUCCProviderTaxonomy#207V00000X "Obstetrics & Gynecology Physician" 
* $NUCCProviderTaxonomy#207VB0002X "Obesity Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VC0200X "Critical Care Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VE0102X "Reproductive Endocrinology Physician" 
* $NUCCProviderTaxonomy#207VF0040X "Female Pelvic Medicine and Reconstructive Surgery (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VG0400X "Gynecology Physician" 
* $NUCCProviderTaxonomy#207VH0002X "Hospice and Palliative Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VM0101X "Maternal & Fetal Medicine Physician" 
* $NUCCProviderTaxonomy#207VX0000X "Obstetrics Physician" 
* $NUCCProviderTaxonomy#207VX0201X "Gynecologic Oncology Physician" 
* $NUCCProviderTaxonomy#207W00000X "Ophthalmology Physician" 
* $NUCCProviderTaxonomy#207WX0009X "Glaucoma Specialist (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0107X "Retina Specialist (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0108X "Uveitis and Ocular Inflammatory Disease (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0109X "Neuro-ophthalmology Physician" 
* $NUCCProviderTaxonomy#207WX0110X "Pediatric Ophthalmology and Strabismus Specialist Physician" 
* $NUCCProviderTaxonomy#207WX0120X "Cornea and External Diseases Specialist Physician" 
* $NUCCProviderTaxonomy#207WX0200X "Ophthalmic Plastic and Reconstructive Surgery Physician" 
* $NUCCProviderTaxonomy#207X00000X "Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XP3100X "Pediatric Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0106X "Orthopaedic Hand Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0114X "Adult Reconstructive Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0117X "Orthopaedic Surgery of the Spine Physician" 
* $NUCCProviderTaxonomy#207XX0004X "Orthopaedic Foot and Ankle Surgery Physician" 
* $NUCCProviderTaxonomy#207XX0005X "Sports Medicine (Orthopaedic Surgery) Physician" 
* $NUCCProviderTaxonomy#207XX0801X "Orthopaedic Trauma Physician" 
* $NUCCProviderTaxonomy#207Y00000X "Otolaryngology Physician" 
* $NUCCProviderTaxonomy#207YP0228X "Pediatric Otolaryngology Physician" 
* $NUCCProviderTaxonomy#207YS0012X "Sleep Medicine (Otolaryngology) Physician" 
* $NUCCProviderTaxonomy#207YS0123X "Facial Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#207YX0007X "Plastic Surgery within the Head & Neck (Otolaryngology) Physician" 
* $NUCCProviderTaxonomy#207YX0602X "Otolaryngic Allergy Physician" 
* $NUCCProviderTaxonomy#207YX0901X "Otology & Neurotology Physician" 
* $NUCCProviderTaxonomy#207YX0905X "Otolaryngology/Facial Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#207ZB0001X "Blood Banking & Transfusion Medicine Physician" 
* $NUCCProviderTaxonomy#207ZC0006X "Clinical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZC0008X "Clinical Informatics (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZC0500X "Cytopathology Physician" 
* $NUCCProviderTaxonomy#207ZD0900X "Dermatopathology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZF0201X "Forensic Pathology Physician" 
* $NUCCProviderTaxonomy#207ZH0000X "Hematology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZI0100X "Immunopathology Physician" 
* $NUCCProviderTaxonomy#207ZM0300X "Medical Microbiology Physician" 
* $NUCCProviderTaxonomy#207ZN0500X "Neuropathology Physician" 
* $NUCCProviderTaxonomy#207ZP0007X "Molecular Genetic Pathology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZP0101X "Anatomic Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0102X "Anatomic Pathology & Clinical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0104X "Chemical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0105X "Clinical Pathology/Laboratory Medicine Physician" 
* $NUCCProviderTaxonomy#207ZP0213X "Pediatric Pathology Physician" 
* $NUCCProviderTaxonomy#208000000X "Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080A0000X "Pediatric Adolescent Medicine Physician" 
* $NUCCProviderTaxonomy#2080B0002X "Pediatric Obesity Medicine Physician" 
* $NUCCProviderTaxonomy#2080C0008X "Child Abuse Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080H0002X "Pediatric Hospice and Palliative Medicine Physician" 
* $NUCCProviderTaxonomy#2080I0007X "Pediatric Clinical & Laboratory Immunology Physician" 
* $NUCCProviderTaxonomy#2080N0001X "Neonatal-Perinatal Medicine Physician" 
* $NUCCProviderTaxonomy#2080P0006X "Developmental – Behavioral Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080P0008X "Pediatric Neurodevelopmental Disabilities Physician" 
* $NUCCProviderTaxonomy#2080P0201X "Pediatric Allergy/Immunology Physician" 
* $NUCCProviderTaxonomy#2080P0202X "Pediatric Cardiology Physician" 
* $NUCCProviderTaxonomy#2080P0203X "Pediatric Critical Care Medicine Physician" 
* $NUCCProviderTaxonomy#2080P0204X "Pediatric Emergency Medicine (Pediatrics) Physician" 
* $NUCCProviderTaxonomy#2080P0205X "Pediatric Endocrinology Physician" 
* $NUCCProviderTaxonomy#2080P0206X "Pediatric Gastroenterology Physician" 
* $NUCCProviderTaxonomy#2080P0207X "Pediatric Hematology & Oncology Physician" 
* $NUCCProviderTaxonomy#2080P0208X "Pediatric Infectious Diseases Physician" 
* $NUCCProviderTaxonomy#2080P0210X "Pediatric Nephrology Physician" 
* $NUCCProviderTaxonomy#2080P0214X "Pediatric Pulmonology Physician" 
* $NUCCProviderTaxonomy#2080P0216X "Pediatric Rheumatology Physician" 
* $NUCCProviderTaxonomy#2080S0010X "Pediatric Sports Medicine Physician" 
* $NUCCProviderTaxonomy#2080S0012X "Pediatric Sleep Medicine Physician" 
* $NUCCProviderTaxonomy#2080T0002X "Pediatric Medical Toxicology Physician" 
* $NUCCProviderTaxonomy#2080T0004X "Pediatric Transplant Hepatology Physician" 
* $NUCCProviderTaxonomy#208100000X "Physical Medicine & Rehabilitation Physician" 
* $NUCCProviderTaxonomy#2081H0002X "Hospice and Palliative Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081N0008X "Neuromuscular Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081P0004X "Spinal Cord Injury Medicine Physician" 
* $NUCCProviderTaxonomy#2081P0010X "Pediatric Rehabilitation Medicine Physician" 
* $NUCCProviderTaxonomy#2081P0301X "Brain Injury Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081P2900X "Pain Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081S0010X "Sports Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#208200000X "Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#2082S0099X "Plastic Surgery Within the Head and Neck (Plastic Surgery) Physician" 
* $NUCCProviderTaxonomy#2082S0105X "Surgery of the Hand (Plastic Surgery) Physician" 
* $NUCCProviderTaxonomy#2083A0100X "Aerospace Medicine Physician" 
* $NUCCProviderTaxonomy#2083A0300X "Addiction Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083B0002X "Obesity Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083C0008X "Clinical Informatics Physician" 
* $NUCCProviderTaxonomy#2083P0011X "Undersea and Hyperbaric Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083P0500X "Preventive Medicine/Occupational Environmental Medicine Physician" 
* $NUCCProviderTaxonomy#2083P0901X "Public Health & General Preventive Medicine Physician" 
* $NUCCProviderTaxonomy#2083S0010X "Sports Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083T0002X "Medical Toxicology (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083X0100X "Occupational Medicine Physician" 
* $NUCCProviderTaxonomy#2084A0401X "Addiction Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084A2900X "Neurocritical Care Physician" 
* $NUCCProviderTaxonomy#2084B0002X "Obesity Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084B0040X "Behavioral Neurology & Neuropsychiatry Physician" 
* $NUCCProviderTaxonomy#2084D0003X "Diagnostic Neuroimaging (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084F0202X "Forensic Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084H0002X "Hospice and Palliative Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084N0008X "Neuromuscular Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084N0400X "Neurology Physician" 
* $NUCCProviderTaxonomy#2084N0402X "Neurology with Special Qualifications in Child Neurology Physician" 
* $NUCCProviderTaxonomy#2084N0600X "Clinical Neurophysiology Physician" 
* $NUCCProviderTaxonomy#2084P0005X "Neurodevelopmental Disabilities Physician" 
* $NUCCProviderTaxonomy#2084P0015X "Psychosomatic Medicine Physician" 
* $NUCCProviderTaxonomy#2084P0301X "Brain Injury Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084P0800X "Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0802X "Addiction Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0804X "Child & Adolescent Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0805X "Geriatric Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P2900X "Pain Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084S0010X "Sports Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084S0012X "Sleep Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084V0102X "Vascular Neurology Physician" 
* $NUCCProviderTaxonomy#2085B0100X "Body Imaging Physician" 
* $NUCCProviderTaxonomy#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician" 
* $NUCCProviderTaxonomy#2085H0002X "Hospice and Palliative Medicine (Radiology) Physician" 
* $NUCCProviderTaxonomy#2085N0700X "Neuroradiology Physician" 
* $NUCCProviderTaxonomy#2085N0904X "Nuclear Radiology Physician" 
* $NUCCProviderTaxonomy#2085P0229X "Pediatric Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0001X "Radiation Oncology Physician" 
* $NUCCProviderTaxonomy#2085R0202X "Diagnostic Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0203X "Therapeutic Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0204X "Vascular & Interventional Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0205X "Radiological Physics Physician" 
* $NUCCProviderTaxonomy#2085U0001X "Diagnostic Ultrasound Physician" 
* $NUCCProviderTaxonomy#208600000X "Surgery Physician" 
* $NUCCProviderTaxonomy#2086H0002X "Hospice and Palliative Medicine (Surgery) Physician" 
* $NUCCProviderTaxonomy#2086S0102X "Surgical Critical Care Physician" 
* $NUCCProviderTaxonomy#2086S0105X "Surgery of the Hand (Surgery) Physician" 
* $NUCCProviderTaxonomy#2086S0120X "Pediatric Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0122X "Plastic and Reconstructive Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0127X "Trauma Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0129X "Vascular Surgery Physician" 
* $NUCCProviderTaxonomy#2086X0206X "Surgical Oncology Physician" 
* $NUCCProviderTaxonomy#208800000X "Urology Physician" 
* $NUCCProviderTaxonomy#2088F0040X "Female Pelvic Medicine and Reconstructive Surgery (Urology) Physician" 
* $NUCCProviderTaxonomy#2088P0231X "Pediatric Urology Physician" 
* $NUCCProviderTaxonomy#208C00000X "Colon & Rectal Surgery Physician" 
* $NUCCProviderTaxonomy#208D00000X "General Practice Physician" 
* $NUCCProviderTaxonomy#208G00000X "Thoracic Surgery (Cardiothoracic Vascular Surgery) Physician" 
* $NUCCProviderTaxonomy#208M00000X "Hospitalist Physician" 
* $NUCCProviderTaxonomy#208U00000X "Clinical Pharmacology Physician" 
* $NUCCProviderTaxonomy#208VP0000X "Pain Medicine Physician" 
* $NUCCProviderTaxonomy#208VP0014X "Interventional Pain Medicine Physician" 
* $NUCCProviderTaxonomy#209800000X "Legal Medicine (M.D./D.O.) Physician" 
* $NUCCProviderTaxonomy#211D00000X "Podiatric Assistant" 
* $NUCCProviderTaxonomy#213E00000X "Podiatrist" 
* $NUCCProviderTaxonomy#213EP0504X "Public Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213EP1101X "Primary Podiatric Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213ER0200X "Radiology Podiatrist" 
* $NUCCProviderTaxonomy#213ES0000X "Sports Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213ES0103X "Foot & Ankle Surgery Podiatrist" 
* $NUCCProviderTaxonomy#213ES0131X "Foot Surgery Podiatrist" 
* $NUCCProviderTaxonomy#221700000X "Art Therapist" 
* $NUCCProviderTaxonomy#222Q00000X "Developmental Therapist" 
* $NUCCProviderTaxonomy#222Z00000X "Orthotist" 
* $NUCCProviderTaxonomy#224900000X "Mastectomy Fitter" 
* $NUCCProviderTaxonomy#224L00000X "Pedorthist" 
* $NUCCProviderTaxonomy#224P00000X "Prosthetist" 
* $NUCCProviderTaxonomy#224Y00000X "Clinical Exercise Physiologist" 
* $NUCCProviderTaxonomy#224Z00000X "Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZE0001X "Environmental Modification Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZF0002X "Feeding, Eating & Swallowing Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZL0004X "Low Vision Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZR0403X "Driving and Community Mobility Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#225000000X "Orthotic Fitter" 
* $NUCCProviderTaxonomy#225100000X "Physical Therapist" 
* $NUCCProviderTaxonomy#2251C2600X "Cardiopulmonary Physical Therapist" 
* $NUCCProviderTaxonomy#2251E1200X "Ergonomics Physical Therapist" 
* $NUCCProviderTaxonomy#2251E1300X "Clinical Electrophysiology Physical Therapist" 
* $NUCCProviderTaxonomy#2251G0304X "Geriatric Physical Therapist" 
* $NUCCProviderTaxonomy#2251H1200X "Hand Physical Therapist" 
* $NUCCProviderTaxonomy#2251H1300X "Human Factors Physical Therapist" 
* $NUCCProviderTaxonomy#2251N0400X "Neurology Physical Therapist" 
* $NUCCProviderTaxonomy#2251P0200X "Pediatric Physical Therapist" 
* $NUCCProviderTaxonomy#2251S0007X "Sports Physical Therapist" 
* $NUCCProviderTaxonomy#2251X0800X "Orthopedic Physical Therapist" 
* $NUCCProviderTaxonomy#225200000X "Physical Therapy Assistant" 
* $NUCCProviderTaxonomy#225400000X "Rehabilitation Practitioner" 
* $NUCCProviderTaxonomy#225500000X "Respiratory/Developmental/Rehabilitative Specialist/Technologist" 
* $NUCCProviderTaxonomy#2255A2300X "Athletic Trainer" 
* $NUCCProviderTaxonomy#2255R0406X "Blind Rehabilitation Specialist/Technologist" 
* $NUCCProviderTaxonomy#225600000X "Dance Therapist" 
* $NUCCProviderTaxonomy#225700000X "Massage Therapist" 
* $NUCCProviderTaxonomy#225800000X "Recreation Therapist" 
* $NUCCProviderTaxonomy#225A00000X "Music Therapist" 
* $NUCCProviderTaxonomy#225B00000X "Pulmonary Function Technologist" 
* $NUCCProviderTaxonomy#225C00000X "Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CA2400X "Assistive Technology Practitioner Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CA2500X "Assistive Technology Supplier Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CX0006X "Orientation and Mobility Training Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225X00000X "Occupational Therapist" 
* $NUCCProviderTaxonomy#225XE0001X "Environmental Modification Occupational Therapist" 
* $NUCCProviderTaxonomy#225XE1200X "Ergonomics Occupational Therapist" 
* $NUCCProviderTaxonomy#225XF0002X "Feeding, Eating & Swallowing Occupational Therapist" 
* $NUCCProviderTaxonomy#225XG0600X "Gerontology Occupational Therapist" 
* $NUCCProviderTaxonomy#225XH1200X "Hand Occupational Therapist" 
* $NUCCProviderTaxonomy#225XH1300X "Human Factors Occupational Therapist" 
* $NUCCProviderTaxonomy#225XL0004X "Low Vision Occupational Therapist" 
* $NUCCProviderTaxonomy#225XM0800X "Mental Health Occupational Therapist" 
* $NUCCProviderTaxonomy#225XN1300X "Neurorehabilitation Occupational Therapist" 
* $NUCCProviderTaxonomy#225XP0019X "Physical Rehabilitation Occupational Therapist" 
* $NUCCProviderTaxonomy#225XP0200X "Pediatric Occupational Therapist" 
* $NUCCProviderTaxonomy#225XR0403X "Driving and Community Mobility Occupational Therapist" 
* $NUCCProviderTaxonomy#226000000X "Recreational Therapist Assistant" 
* $NUCCProviderTaxonomy#226300000X "Kinesiotherapist" 
* $NUCCProviderTaxonomy#227800000X "Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278C0205X "Critical Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278E0002X "Emergency Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278E1000X "Educational Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278G0305X "Geriatric Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278G1100X "General Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278H0200X "Home Health Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1004X "Pulmonary Diagnostics Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1005X "Pulmonary Rehabilitation Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1006X "Pulmonary Function Technologist Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P3800X "Palliative/Hospice Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P3900X "Neonatal/Pediatric Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P4000X "Patient Transport Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278S1500X "SNF/Subacute Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#227900000X "Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279C0205X "Critical Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279E0002X "Emergency Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279E1000X "Educational Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279G0305X "Geriatric Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279G1100X "General Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279H0200X "Home Health Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1004X "Pulmonary Diagnostics Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1005X "Pulmonary Rehabilitation Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1006X "Pulmonary Function Technologist Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P3800X "Palliative/Hospice Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P3900X "Neonatal/Pediatric Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P4000X "Patient Transport Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279S1500X "SNF/Subacute Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#229N00000X "Anaplastologist" 
* $NUCCProviderTaxonomy#231H00000X "Audiologist" 
* $NUCCProviderTaxonomy#231HA2400X "Assistive Technology Practitioner Audiologist" 
* $NUCCProviderTaxonomy#231HA2500X "Assistive Technology Supplier Audiologist" 
* $NUCCProviderTaxonomy#235500000X "Speech/Language/Hearing Specialist/Technologist" 
* $NUCCProviderTaxonomy#2355A2700X "Audiology Assistant" 
* $NUCCProviderTaxonomy#2355S0801X "Speech-Language Assistant" 
* $NUCCProviderTaxonomy#235Z00000X "Speech-Language Pathologist" 
* $NUCCProviderTaxonomy#237600000X "Audiologist-Hearing Aid Fitter" 
* $NUCCProviderTaxonomy#237700000X "Hearing Instrument Specialist" 
* $NUCCProviderTaxonomy#242T00000X "Perfusionist" 
* $NUCCProviderTaxonomy#243U00000X "Radiology Practitioner Assistant" 
* $NUCCProviderTaxonomy#246Q00000X "Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QB0000X "Blood Banking Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QC1000X "Chemistry Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QC2700X "Cytotechnology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QH0000X "Hematology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QH0401X "Hemapheresis Practitioner" 
* $NUCCProviderTaxonomy#246QH0600X "Histology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QI0000X "Immunology Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QL0900X "Laboratory Management Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QL0901X "Diplomate Laboratory Management Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QM0706X "Medical Technologist" 
* $NUCCProviderTaxonomy#246QM0900X "Microbiology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246R00000X "Pathology Technician" 
* $NUCCProviderTaxonomy#246RH0600X "Histology Technician" 
* $NUCCProviderTaxonomy#246RM2200X "Medical Laboratory Technician" 
* $NUCCProviderTaxonomy#246RP1900X "Phlebotomy Technician" 
* $NUCCProviderTaxonomy#246W00000X "Cardiology Technician" 
* $NUCCProviderTaxonomy#246X00000X "Cardiovascular Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XC2901X "Cardiovascular Invasive Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XC2903X "Vascular Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XS1301X "Sonography Specialist/Technologist" 
* $NUCCProviderTaxonomy#246Y00000X "Health Information Specialist/Technologist" 
* $NUCCProviderTaxonomy#246YC3301X "Hospital Based Coding Specialist" 
* $NUCCProviderTaxonomy#246YC3302X "Physician Office Based Coding Specialist" 
* $NUCCProviderTaxonomy#246YR1600X "Registered Record Administrator" 
* $NUCCProviderTaxonomy#246Z00000X "Other Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZA2600X "Medical Art Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZB0301X "Biomedical Engineer" 
* $NUCCProviderTaxonomy#246ZB0302X "Biomedical Photographer" 
* $NUCCProviderTaxonomy#246ZB0500X "Biochemist" 
* $NUCCProviderTaxonomy#246ZB0600X "Biostatiscian" 
* $NUCCProviderTaxonomy#246ZC0007X "Surgical Assistant" 
* $NUCCProviderTaxonomy#246ZE0500X "EEG Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZE0600X "Electroneurodiagnostic Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZG0701X "Graphics Methods Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZG1000X "Medical Geneticist (PhD) Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZI1000X "Medical Illustrator" 
* $NUCCProviderTaxonomy#246ZN0300X "Nephrology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZS0410X "Surgical Technologist" 
* $NUCCProviderTaxonomy#246ZX2200X "Orthopedic Assistant" 
* $NUCCProviderTaxonomy#247000000X "Health Information Technician" 
* $NUCCProviderTaxonomy#2470A2800X "Assistant Health Information Record Technician" 
* $NUCCProviderTaxonomy#247100000X "Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471B0102X "Bone Densitometry Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C1101X "Cardiovascular-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C1106X "Cardiac-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C3401X "Computed Tomography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C3402X "Radiography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471M1202X "Magnetic Resonance Imaging Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471M2300X "Mammography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471N0900X "Nuclear Medicine Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471Q0001X "Quality Management Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471R0002X "Radiation Therapy Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471S1302X "Sonography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471V0105X "Vascular Sonography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471V0106X "Vascular-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#247200000X "Other Technician" 
* $NUCCProviderTaxonomy#2472B0301X "Biomedical Engineering Technician" 
* $NUCCProviderTaxonomy#2472D0500X "Darkroom Technician" 
* $NUCCProviderTaxonomy#2472E0500X "EEG Technician" 
* $NUCCProviderTaxonomy#2472R0900X "Renal Dialysis Technician" 
* $NUCCProviderTaxonomy#2472V0600X "Veterinary Technician" 
* $NUCCProviderTaxonomy#247ZC0005X "Clinical Laboratory Director (Non-physician)" 
* $NUCCProviderTaxonomy#363A00000X "Physician Assistant" 
* $NUCCProviderTaxonomy#363AM0700X "Medical Physician Assistant" 
* $NUCCProviderTaxonomy#363AS0400X "Surgical Physician Assistant" 
* $NUCCProviderTaxonomy#363L00000X "Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LA2100X "Acute Care Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LA2200X "Adult Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LC0200X "Critical Care Medicine Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LC1500X "Community Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LF0000X "Family Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LG0600X "Gerontology Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LN0000X "Neonatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LN0005X "Critical Care Neonatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0200X "Pediatric Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0222X "Critical Care Pediatric Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0808X "Psychiatric/Mental Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP1700X "Perinatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP2300X "Primary Care Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LS0200X "School Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LW0102X "Women's Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LX0001X "Obstetrics & Gynecology Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LX0106X "Occupational Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#364S00000X "Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SA2100X "Acute Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SA2200X "Adult Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC0200X "Critical Care Medicine Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC1501X "Community Health/Public Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC2300X "Chronic Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SE0003X "Emergency Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SE1400X "Ethics Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SF0001X "Family Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SG0600X "Gerontology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SH0200X "Home Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SH1100X "Holistic Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SI0800X "Informatics Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SL0600X "Long-Term Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SM0705X "Medical-Surgical Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SN0000X "Neonatal Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SN0800X "Neuroscience Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0200X "Pediatric Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0807X "Child & Adolescent Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0808X "Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0809X "Adult Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0810X "Child & Family Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0811X "Chronically Ill Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0812X "Community Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0813X "Geropsychiatric Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP1700X "Perinatal Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP2800X "Perioperative Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SR0400X "Rehabilitation Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SS0200X "School Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364ST0500X "Transplantation Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SW0102X "Women's Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0106X "Occupational Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0200X "Oncology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0204X "Pediatric Oncology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#367500000X "Certified Registered Nurse Anesthetist" 
* $NUCCProviderTaxonomy#367A00000X "Advanced Practice Midwife" 
* $NUCCProviderTaxonomy#367H00000X "Anesthesiologist Assistant" 
* $NUCCProviderTaxonomy#372500000X "Chore Provider" 
* $NUCCProviderTaxonomy#372600000X "Adult Companion" 
* $NUCCProviderTaxonomy#373H00000X "Day Training/Habilitation Specialist" 
* $NUCCProviderTaxonomy#374700000X "Technician" 
* $NUCCProviderTaxonomy#3747A0650X "Attendant Care Provider" 
* $NUCCProviderTaxonomy#3747P1801X "Personal Care Attendant" 
* $NUCCProviderTaxonomy#374J00000X "Doula" 
* $NUCCProviderTaxonomy#374K00000X "Religious Nonmedical Practitioner" 
* $NUCCProviderTaxonomy#374T00000X "Religious Nonmedical Nursing Personnel" 
* $NUCCProviderTaxonomy#374U00000X "Home Health Aide" 
* $NUCCProviderTaxonomy#376G00000X "Nursing Home Administrator" 
* $NUCCProviderTaxonomy#376J00000X "Homemaker" 
* $NUCCProviderTaxonomy#376K00000X "Nurse's Aide" 
* $NUCCProviderTaxonomy#405300000X "Prevention Professional" 


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-VS-NonIndividualSpecialties.fsh

ValueSet: NonIndividualSpecialtiesVS
Title: "Non-Individual Specialties"
Description:  "Non-Individual Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* $NUCCProviderTaxonomy#251300000X "Local Education Agency (LEA)"
* $NUCCProviderTaxonomy#251B00000X "Case Management Agency"
* $NUCCProviderTaxonomy#251C00000X "Developmentally Disabled Services Day Training Agency"
* $NUCCProviderTaxonomy#251E00000X "Home Health Agency"
* $NUCCProviderTaxonomy#251F00000X "Home Infusion Agency"
* $NUCCProviderTaxonomy#251G00000X "Community Based Hospice Care Agency"
* $NUCCProviderTaxonomy#251J00000X "Nursing Care Agency"
* $NUCCProviderTaxonomy#251K00000X "Public Health or Welfare Agency"
* $NUCCProviderTaxonomy#251S00000X "Community/Behavioral Health Agency"
* $NUCCProviderTaxonomy#251T00000X "PACE Provider Organization"
* $NUCCProviderTaxonomy#251V00000X "Voluntary or Charitable Agency"
* $NUCCProviderTaxonomy#251X00000X "Supports Brokerage Agency"
* $NUCCProviderTaxonomy#252Y00000X "Early Intervention Provider Agency"
* $NUCCProviderTaxonomy#253J00000X "Foster Care Agency"
* $NUCCProviderTaxonomy#253Z00000X "In Home Supportive Care Agency"
* $NUCCProviderTaxonomy#261Q00000X "Clinic/Center"
* $NUCCProviderTaxonomy#261QA0005X "Ambulatory Family Planning Facility"
* $NUCCProviderTaxonomy#261QA0006X "Ambulatory Fertility Facility"
* $NUCCProviderTaxonomy#261QA0600X "Adult Day Care Clinic/Center"
* $NUCCProviderTaxonomy#261QA0900X "Amputee Clinic/Center"
* $NUCCProviderTaxonomy#261QA1903X "Ambulatory Surgical Clinic/Center"
* $NUCCProviderTaxonomy#261QA3000X "Augmentative Communication Clinic/Center"
* $NUCCProviderTaxonomy#261QB0400X "Birthing Clinic/Center"
* $NUCCProviderTaxonomy#261QC0050X "Critical Access Hospital Clinic/Center"
* $NUCCProviderTaxonomy#261QC1500X "Community Health Clinic/Center"
* $NUCCProviderTaxonomy#261QC1800X "Corporate Health Clinic/Center"
* $NUCCProviderTaxonomy#261QD0000X "Dental Clinic/Center"
* $NUCCProviderTaxonomy#261QD1600X "Developmental Disabilities Clinic/Center"
* $NUCCProviderTaxonomy#261QE0002X "Emergency Care Clinic/Center"
* $NUCCProviderTaxonomy#261QE0700X "End-Stage Renal Disease (ESRD) Treatment Clinic/Center"
* $NUCCProviderTaxonomy#261QE0800X "Endoscopy Clinic/Center"
* $NUCCProviderTaxonomy#261QF0050X "Non-Surgical Family Planning Clinic/Center"
* $NUCCProviderTaxonomy#261QF0400X "Federally Qualified Health Center (FQHC)"
* $NUCCProviderTaxonomy#261QG0250X "Genetics Clinic/Center"
* $NUCCProviderTaxonomy#261QH0100X "Health Service Clinic/Center"
* $NUCCProviderTaxonomy#261QH0700X "Hearing and Speech Clinic/Center"
* $NUCCProviderTaxonomy#261QI0500X "Infusion Therapy Clinic/Center"
* $NUCCProviderTaxonomy#261QL0400X "Lithotripsy Clinic/Center"
* $NUCCProviderTaxonomy#261QM0801X "Mental Health Clinic/Center (Including Community Mental Health Center)"
* $NUCCProviderTaxonomy#261QM0850X "Adult Mental Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM0855X "Adolescent and Children Mental Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM1000X "Migrant Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM1100X "Military/U.S. Coast Guard Outpatient Clinic/Center"
* $NUCCProviderTaxonomy#261QM1101X "Military and U.S. Coast Guard Ambulatory Procedure Clinic/Center"
* $NUCCProviderTaxonomy#261QM1102X "Military Outpatient Operational (Transportable) Component Clinic/Center"
* $NUCCProviderTaxonomy#261QM1103X "Military Ambulatory Procedure Visits Operational (Transportable) Clinic/Center"
* $NUCCProviderTaxonomy#261QM1200X "Magnetic Resonance Imaging (MRI) Clinic/Center"
* $NUCCProviderTaxonomy#261QM1300X "Multi-Specialty Clinic/Center"
* $NUCCProviderTaxonomy#261QM2500X "Medical Specialty Clinic/Center"
* $NUCCProviderTaxonomy#261QM2800X "Methadone Clinic"
* $NUCCProviderTaxonomy#261QM3000X "Medically Fragile Infants and Children Day Care"
* $NUCCProviderTaxonomy#261QP0904X "Federal Public Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP0905X "State or Local Public Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP1100X "Podiatric Clinic/Center"
* $NUCCProviderTaxonomy#261QP2000X "Physical Therapy Clinic/Center"
* $NUCCProviderTaxonomy#261QP2300X "Primary Care Clinic/Center"
* $NUCCProviderTaxonomy#261QP2400X "Prison Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP3300X "Pain Clinic/Center"
* $NUCCProviderTaxonomy#261QR0200X "Radiology Clinic/Center"
* $NUCCProviderTaxonomy#261QR0206X "Mammography Clinic/Center"
* $NUCCProviderTaxonomy#261QR0207X "Mobile Mammography Clinic/Center"
* $NUCCProviderTaxonomy#261QR0208X "Mobile Radiology Clinic/Center"
* $NUCCProviderTaxonomy#261QR0400X "Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0401X "Comprehensive Outpatient Rehabilitation Facility (CORF)"
* $NUCCProviderTaxonomy#261QR0404X "Cardiac Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0405X "Substance Use Disorder Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0800X "Recovery Care Clinic/Center"
* $NUCCProviderTaxonomy#261QR1100X "Research Clinic/Center"
* $NUCCProviderTaxonomy#261QR1300X "Rural Health Clinic/Center"
* $NUCCProviderTaxonomy#261QS0112X "Oral and Maxillofacial Surgery Clinic/Center"
* $NUCCProviderTaxonomy#261QS0132X "Ophthalmologic Surgery Clinic/Center"
* $NUCCProviderTaxonomy#261QS1000X "Student Health Clinic/Center"
* $NUCCProviderTaxonomy#261QS1200X "Sleep Disorder Diagnostic Clinic/Center"
* $NUCCProviderTaxonomy#261QU0200X "Urgent Care Clinic/Center"
* $NUCCProviderTaxonomy#261QV0200X "VA Clinic/Center"
* $NUCCProviderTaxonomy#261QX0100X "Occupational Medicine Clinic/Center"
* $NUCCProviderTaxonomy#261QX0200X "Oncology Clinic/Center"
* $NUCCProviderTaxonomy#261QX0203X "Radiation Oncology Clinic/Center"
* $NUCCProviderTaxonomy#273100000X "Epilepsy Hospital Unit"
* $NUCCProviderTaxonomy#273R00000X "Psychiatric Hospital Unit"
* $NUCCProviderTaxonomy#273Y00000X "Rehabilitation Hospital Unit"
* $NUCCProviderTaxonomy#275N00000X "Medicare Defined Swing Bed Hospital Unit"
* $NUCCProviderTaxonomy#276400000X "Substance Use Disorder Rehabilitation Hospital Unit"
* $NUCCProviderTaxonomy#281P00000X "Chronic Disease Hospital"
* $NUCCProviderTaxonomy#281PC2000X "Children' s Chronic Disease Hospital"
* $NUCCProviderTaxonomy#282E00000X "Long Term Care Hospital"
* $NUCCProviderTaxonomy#282J00000X "Religious Nonmedical Health Care Institution"
* $NUCCProviderTaxonomy#282N00000X "General Acute Care Hospital"
* $NUCCProviderTaxonomy#282NC0060X "Critical Access Hospital"
* $NUCCProviderTaxonomy#282NC2000X "Children's Hospital"
* $NUCCProviderTaxonomy#282NR1301X "Rural Acute Care Hospital"
* $NUCCProviderTaxonomy#282NW0100X "Women's Hospital"
* $NUCCProviderTaxonomy#283Q00000X "Psychiatric Hospital"
* $NUCCProviderTaxonomy#283X00000X "Rehabilitation Hospital"
* $NUCCProviderTaxonomy#283XC2000X "Children's Rehabilitation Hospital"
* $NUCCProviderTaxonomy#284300000X "Special Hospital"
* $NUCCProviderTaxonomy#286500000X "Military Hospital"
* $NUCCProviderTaxonomy#2865M2000X "Military General Acute Care Hospital"
* $NUCCProviderTaxonomy#2865X1600X "Operational (Transportable) Military General Acute Care Hospital"
* $NUCCProviderTaxonomy#291900000X "Military Clinical Medical Laboratory"
* $NUCCProviderTaxonomy#291U00000X "Clinical Medical Laboratory"
* $NUCCProviderTaxonomy#292200000X "Dental Laboratory"
* $NUCCProviderTaxonomy#293D00000X "Physiological Laboratory"
* $NUCCProviderTaxonomy#302F00000X "Exclusive Provider Organization"
* $NUCCProviderTaxonomy#302R00000X "Health Maintenance Organization"
* $NUCCProviderTaxonomy#305R00000X "Preferred Provider Organization"
* $NUCCProviderTaxonomy#305S00000X "Point of Service"
* $NUCCProviderTaxonomy#310400000X "Assisted Living Facility"
* $NUCCProviderTaxonomy#3104A0625X "Assisted Living Facility (Mental Illness)"
* $NUCCProviderTaxonomy#3104A0630X "Assisted Living Facility (Behavioral Disturbances)"
* $NUCCProviderTaxonomy#310500000X "Mental Illness Intermediate Care Facility"
* $NUCCProviderTaxonomy#311500000X "Alzheimer Center (Dementia Center)"
* $NUCCProviderTaxonomy#311Z00000X "Custodial Care Facility"
* $NUCCProviderTaxonomy#311ZA0620X "Adult Care Home Facility"
* $NUCCProviderTaxonomy#313M00000X "Nursing Facility/Intermediate Care Facility"
* $NUCCProviderTaxonomy#314000000X "Skilled Nursing Facility"
* $NUCCProviderTaxonomy#3140N1450X "Pediatric Skilled Nursing Facility"
* $NUCCProviderTaxonomy#315D00000X "Inpatient Hospice"
* $NUCCProviderTaxonomy#315P00000X "Intellectual Disabilities Intermediate Care Facility"
* $NUCCProviderTaxonomy#174200000X "Meals Provider"
* $NUCCProviderTaxonomy#177F00000X "Lodging Provider"
* $NUCCProviderTaxonomy#320600000X "Intellectual and/or Developmental Disabilities Residential Treatment Facility"
* $NUCCProviderTaxonomy#320700000X "Physical Disabilities Residential Treatment Facility"
* $NUCCProviderTaxonomy#320800000X "Mental Illness Community Based Residential Treatment Facility"
* $NUCCProviderTaxonomy#320900000X "Intellectual and/or Developmental Disabilities Community Based Residential Treatment Facility"
* $NUCCProviderTaxonomy#322D00000X "Emotionally Disturbed Childrens' Residential Treatment Facility"
* $NUCCProviderTaxonomy#323P00000X "Psychiatric Residential Treatment Facility"
* $NUCCProviderTaxonomy#324500000X "Substance Abuse Rehabilitation Facility"
* $NUCCProviderTaxonomy#3245S0500X "Children's Substance Abuse Rehabilitation Facility"
* $NUCCProviderTaxonomy#385H00000X "Respite Care"
* $NUCCProviderTaxonomy#385HR2050X "Respite Care Camp"
* $NUCCProviderTaxonomy#385HR2055X "Child Mental Illness Respite Care"
* $NUCCProviderTaxonomy#385HR2060X "Child Intellectual and/or Developmental Disabilities Respite Care"
* $NUCCProviderTaxonomy#385HR2065X "Child Physical Disabilities Respite Care"
* $NUCCProviderTaxonomy#331L00000X "Blood Bank"
* $NUCCProviderTaxonomy#332000000X "Military/U.S. Coast Guard Pharmacy"
* $NUCCProviderTaxonomy#332100000X "Department of Veterans Affairs (VA) Pharmacy"
* $NUCCProviderTaxonomy#332800000X "Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy"
* $NUCCProviderTaxonomy#332900000X "Non-Pharmacy Dispensing Site"
* $NUCCProviderTaxonomy#332B00000X "Durable Medical Equipment & Medical Supplies"
* $NUCCProviderTaxonomy#332BC3200X "Customized Equipment (DME)"
* $NUCCProviderTaxonomy#332BD1200X "Dialysis Equipment & Supplies (DME)"
* $NUCCProviderTaxonomy#332BN1400X "Nursing Facility Supplies (DME)"
* $NUCCProviderTaxonomy#332BP3500X "Parenteral & Enteral Nutrition Supplies (DME)"
* $NUCCProviderTaxonomy#332BX2000X "Oxygen Equipment & Supplies (DME)"
* $NUCCProviderTaxonomy#332G00000X "Eye Bank"
* $NUCCProviderTaxonomy#332H00000X "Eyewear Supplier"
* $NUCCProviderTaxonomy#332S00000X "Hearing Aid Equipment"
* $NUCCProviderTaxonomy#332U00000X "Home Delivered Meals"
* $NUCCProviderTaxonomy#333300000X "Emergency Response System Companies"
* $NUCCProviderTaxonomy#333600000X "Pharmacy"
* $NUCCProviderTaxonomy#3336C0002X "Clinic Pharmacy"
* $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* $NUCCProviderTaxonomy#3336H0001X "Home Infusion Therapy Pharmacy"
* $NUCCProviderTaxonomy#3336I0012X "Institutional Pharmacy"
* $NUCCProviderTaxonomy#3336L0003X "Long Term Care Pharmacy"
* $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"
* $NUCCProviderTaxonomy#3336M0003X "Managed Care Organization Pharmacy"
* $NUCCProviderTaxonomy#3336N0007X "Nuclear Pharmacy"
* $NUCCProviderTaxonomy#3336S0011X "Specialty Pharmacy"
* $NUCCProviderTaxonomy#335E00000X "Prosthetic/Orthotic Supplier"
* $NUCCProviderTaxonomy#335G00000X "Medical Foods Supplier"
* $NUCCProviderTaxonomy#335U00000X "Organ Procurement Organization"
* $NUCCProviderTaxonomy#335V00000X "Portable X-ray and/or Other Portable Diagnostic Imaging Supplier"
* $NUCCProviderTaxonomy#341600000X "Ambulance"
* $NUCCProviderTaxonomy#3416A0800X "Air Ambulance"
* $NUCCProviderTaxonomy#3416L0300X "Land Ambulance"
* $NUCCProviderTaxonomy#3416S0300X "Water Ambulance"
* $NUCCProviderTaxonomy#341800000X "Military/U.S. Coast Guard Transport,"
* $NUCCProviderTaxonomy#3418M1110X "Military or U.S. Coast Guard Ground Transport Ambulance"
* $NUCCProviderTaxonomy#3418M1120X "Military or U.S. Coast Guard Air Transport Ambulance"
* $NUCCProviderTaxonomy#3418M1130X "Military or U.S. Coast Guard Water Transport Ambulance"
* $NUCCProviderTaxonomy#342000000X "Transportation Network Company"   // added effective 04/21/21
* $NUCCProviderTaxonomy#343800000X "Secured Medical Transport (VAN)"
* $NUCCProviderTaxonomy#343900000X "Non-emergency Medical Transport (VAN)"
* $NUCCProviderTaxonomy#344600000X "Taxi"
* $NUCCProviderTaxonomy#344800000X "Air Carrier"
* $NUCCProviderTaxonomy#347B00000X "Bus"
* $NUCCProviderTaxonomy#347C00000X "Private Vehicle"
* $NUCCProviderTaxonomy#347D00000X "Train"
* $NUCCProviderTaxonomy#347E00000X "Transportation Broker"


---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Base-VS.fsh

ValueSet: AcceptingPatientsVS
Title: "Accepting Patients Codes Value Set"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* codes from system AcceptingPatientsCS

ValueSet: AccessibilityVS
Title: "Accessibility Value Set"
Description: "Codes for documenting general categories of accommodations available"
* ^experimental = false
* codes from system AccessibilityCS

ValueSet: NDHCareTeamCategoryVS
Title: "NDH Care Team Category Value Set"
Description: "Codes for NDH Care Team Category"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* $loinc#LA27975-4 "Event-focused care team"
* $loinc#LA27976-2 "Encounter-focused care team"
* $loinc#LA27977-0 "Episode-focused care team"
* $loinc#LA27978-8 "Condition-focused care team"
* $loinc#LA28865-6 "Longitudinal care-coordination focused care team"
* $loinc#LA28866-4 "Home & Community Based Services (HCBS)-focused care team"
* $loinc#LA27980-4 "Clinical research-focused care team"
* $loinc#LA28867-2 "Public health-focused care team"

ValueSet: ConsentPolicyRulesVS
Title: "Consent Policy Rules Value Set"
Description: "Code for Consent Policy Rules"
* ^experimental = false
* codes from system ConsentPolicyRulesCS

ValueSet: ConsentScopeNdhVS
Title: "NDH Consent Scope Value Set"
Description: "Code for NDH Consent Scope Value Set"
* ^experimental = false
//* codes from system $ConsentScopeCS
* codes from system ConsentScopeNdhCS

ValueSet: ConsentCategoryNdhVS
Title: "NDH Consent Category Value Set"
Description: "Code for NDH Consent Category Value Set"
* ^experimental = false
//* codes from system $HL7ConsentCategoryVS
* codes from system ConsentCategoryNdhCS

ValueSet: DigitalcertificateUseVS
Title: "Digital Certificate Use Value Set"
Description: "Codes for the Digital Certificate Use"
* ^experimental = false
* codes from system DigitalcertificateUseCS

/*
ValueSet: DeliveryMethodVS
Title: "Delivery Methods Value Set"
Description: "Codes for documenting delivery methods"
* ^experimental = false
* codes from system DeliveryMethodCS
*/

ValueSet: EmploymentStatusVS
Title: "Employment Status Value Set"
Description: "Codes for documenting employment status"
* ^experimental = false
//* codes from system EmploymentStatusCS
* $V20066EmploymentStatusCS#1 "Full time employed"
* $V20066EmploymentStatusCS#2 "Part time employed"
* $V20066EmploymentStatusCS#3 "Unemployed"
* $V20066EmploymentStatusCS#4 "Self-employed,"
* $V20066EmploymentStatusCS#5 "Retired"


ValueSet: InsuranceStatusVS
Title: "Insurance Status Value Set"
Description: "Codes for documenting insurance status"
* ^experimental = false
* codes from system InsuranceStatusCS

ValueSet: AgeGroupVS
Title: "Age Range Value Set"
Description: "Codes for documenting age range"
* ^experimental = false
* codes from system AgeGroupCS


ValueSet: NdhEndpointEnvironmentVS
Title: "NDH Endpoint Environment Value Set"
Description: "Codes for NDH Endpoint Environment"
* ^experimental = false
* codes from system NdhEndpointEnvironmentCS



ValueSet: EndpointAccessControlMechanismVS
Title: "Endpoint Access Control Mechanism Value Set"
Description: "Codes for documenting access control mechanism"
* ^experimental = false
* codes from system EndpointAccessControlMechanismCS

/*
ValueSet: EndpointX509PublicKeyUsageFlagVS
Title: "Endpoint X509 Public Key Usage Flag Value Set"
Description: "Codes for documenting X509 Public Key Usage Flag"
* ^experimental = false
* codes from system EndpointX509PublicKeyUsageFlagCS
*/

ValueSet: EndpointTestingMethodVS
Title: "Endpoint Testing Method Value Set"
Description: "Codes for documenting testing method" 
* ^experimental = false
* codes from system EndpointTestingMethodCS

ValueSet: EndpointConnectionTypeVS
Title: "Endpoint Connection Types Value Set"
Description:  "Endpoint Connection Types"
* ^experimental = false
* codes from system $ConnectionTypeCS
* codes from system EndpointConnectionTypeCS 
//* codes from system EndpointHieSpecificConnectionTypeCS

/*
ValueSet: EndpointHieSpecificConnectionTypeVS
Title: "Endpoint IHE Specific Connection Types Value Set"
Description:  "Endpoint IHE Specific Connection Types"
* ^experimental = false
* codes from system EndpointHieSpecificConnectionTypeCS
*/

ValueSet: EndpointIheSpecificConnectionTypeVS
Title: "Endpoint IHE Specific Connection Types Value Set"
Description:  "Endpoint IHE Specific Connection Types"
* ^experimental = false
* codes from system $IheMCSDEndpointTypesCS

/*
ValueSet: EndpointConnectionTypeVersionVS
Title: "Endpoint Connection Type Version Value Set"
Description: "Endpoint Connection Type Version"
* ^experimental = false
* $FHIRVersionCS#0.0.80 "DSTU 1 Official version"
* $FHIRVersionCS#0.0.81 "DSTU 1 Official version Technical Errata #1"
* $FHIRVersionCS#0.0.82 "DSTU 1 Official version Technical Errata #2"
* $FHIRVersionCS#1.0.1  "DSTU 2 (Official version)"
* $FHIRVersionCS#1.0.2  "DSTU 2 (Official version with 1 technical errata)"
* $FHIRVersionCS#3.0.0  "FHIR Release 3 (STU)"
* $FHIRVersionCS#3.0.1  "FHIR Release 3 (STU) with 1 technical errata"
* $FHIRVersionCS#4.0.0  "FHIR Release 4 (Normative + STU)"
* $FHIRVersionCS#4.0.1  "FHIR Release 4 Technical Correction"
//* $FHIRVersionCS#4.3.0  "FHIR Release 4B (Normative + STU)."
* codes from system EndpointConnectionTypeVersionCS
//* EndpointConnectionTypeVersionCS#4.3.0 "FHIR Release 4B"
*/

ValueSet: EndpointPayloadTypeVS
Title: "Endpoint Payload Type Value Set"
Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* $DataAbsentReasonCS#not-applicable  "Not Applicable"

ValueSet: EndpointFhirMimeTypeVS
Title: "Endpoint FHIR Mimetype Value Set"
Description: "Endpoint FHIR mimetype"
* ^experimental = false
* $BCP13#application/fhir+xml "FHIR XML"
* $BCP13#application/fhir+json "FHIR JSON"
* $BCP13#application/fhir+turtle "FHIR Turtle"
//* $V3MimeCS#application/fhir+xml "FHIR XML"
//* $V3MimeCS#application/fhir+json "FHIR JSON"
//* $V3MimeCS#application/fhir+turtle "FHIR Turtle"

ValueSet: EndpointCommonMimeTypeVS
Title: "Endpoint common mimetype Value Set"
Description: "Endpoint common mimetype"
* ^experimental = false
* $BCP13#audio/aac "AAC audio"
* $BCP13#application/x-abiword "AbiWord document"
* $BCP13#application/x-freearc "Archive document (multiple files embedded)"
* $BCP13#image/avif "AVIF image"
* $BCP13#video/x-msvideo "AVI: Audio Video Interleave"
* $BCP13#application/vnd.amazon.ebook "Amazon Kindle eBook format"
* $BCP13#application/octet-stream "Any kind of binary data"
* $BCP13#image/bmp "Windows OS/2 Bitmap Graphics"
* $BCP13#application/x-bzip "BZip archive"
* $BCP13#application/x-bzip2 "BZip2 archive"
* $BCP13#application/x-cdf "CD audio"
* $BCP13#application/x-csh "C-Shell script"
* $BCP13#text/css "Cascading Style Sheets (CSS)"
* $BCP13#text/csv "Comma-separated values (CSV)"
* $BCP13#application/msword "Microsoft Word"
* $BCP13#application/vnd.openxmlformats-officedocument.wordprocessingml.document "Microsoft Word (OpenXML)"
* $BCP13#application/vnd.ms-fontobject "MS Embedded OpenType fonts"
* $BCP13#application/epub+zip "Electronic publication (EPUB)"
* $BCP13#application/gzip "GZip Compressed Archive"
* $BCP13#image/gif "Graphics Interchange Format (GIF)"
* $BCP13#text/html "HyperText Markup Language (HTML)"
* $BCP13#image/vnd.microsoft.icon "Icon format"
* $BCP13#text/calendar "iCalendar format"
* $BCP13#application/java-archive "Java Archive (JAR)"
* $BCP13#image/jpeg "JPEG images"
* $BCP13#text/javascript "JavaScript"
* $BCP13#application/json "JSON format"
* $BCP13#application/ld+json "JSON-LD format"
* $BCP13#audio/midi "Musical Instrument Digital Interface (MIDI)"
* $BCP13#audio/x-midi "Musical Instrument Digital Interface (MIDI)"
* $BCP13#audio/mpeg "MP3 audio"
* $BCP13#video/mp4 "MP4 video"
* $BCP13#video/mpeg "MPEG Video"
* $BCP13#application/vnd.apple.installer+xml "Apple Installer Package"
* $BCP13#application/vnd.oasis.opendocument.presentation "OpenDocument presentation document"
* $BCP13#application/vnd.oasis.opendocument.spreadsheet "OpenDocument spreadsheet document"
* $BCP13#application/vnd.oasis.opendocument.text "OpenDocument text document"
* $BCP13#audio/ogg "OGG audio"
* $BCP13#video/ogg "OGG video"
* $BCP13#application/ogg "OGG"
* $BCP13#audio/opus "Opus audio"
* $BCP13#font/otf "OpenType font"
* $BCP13#image/png "Portable Network Graphics"
* $BCP13#application/pdf "Adobe Portable Document Format (PDF)"
* $BCP13#application/x-httpd-php "Hypertext Preprocessor (Personal Home Page)"
* $BCP13#application/vnd.ms-powerpoint "Microsoft PowerPoint"
* $BCP13#application/vnd.openxmlformats-officedocument.presentationml.presentation "Microsoft PowerPoint (OpenXML)"
* $BCP13#application/vnd.rar "RAR archive"
* $BCP13#application/rtf "Rich Text Format (RTF)"
* $BCP13#application/x-sh "Bourne shell script"
* $BCP13#image/svg+xml "Scalable Vector Graphics (SVG)"
* $BCP13#application/x-tar "Tape Archive (TAR)"
* $BCP13#image/tiff "Tagged Image File Format (TIFF)"
* $BCP13#video/mp2t "MPEG transport stream"
* $BCP13#font/ttf "TrueType Font"
* $BCP13#text/plain "Text, (generally ASCII or ISO 8859-n)"
* $BCP13#application/vnd.visio "Microsoft Visio"
* $BCP13#audio/wav "Waveform Audio Format"
* $BCP13#audio/webm "WEBM audio"
* $BCP13#video/webm "WEBM video"
* $BCP13#image/webp "WEBP image"
* $BCP13#font/woff "Web Open Font Format (WOFF)"
* $BCP13#font/woff2 "Web Open Font Format (WOFF)"
* $BCP13#application/xhtml+xml "XHTML"
* $BCP13#application/vnd.ms-excel "Microsoft Excel"
* $BCP13#application/vnd.openxmlformats-officedocument.spreadsheetml.sheet "Microsoft Excel (OpenXML)"
* $BCP13#application/xml "XML"
* $BCP13#text/xml "XML"
* $BCP13#application/atom+xml "XML"
* $BCP13#application/vnd.mozilla.xul+xml "XUL"
* $BCP13#application/zip "ZIP archive"
* $BCP13#video/3gpp "3GPP audio/video container"
* $BCP13#audio/3gpp "3GPP audio/video container if it does not contain video"
* $BCP13#video/3gpp2 "3GPP2 audio/video container"
* $BCP13#audio/3gpp2 "3GPP2 audio/video container  if it doesn't contain video"
* $BCP13#application/x-7z-compressed "7-zip archive"
* $BCP13#text/hl7v2 "HL7 v2 message"
* $BCP13#text/rtf "Rich Text Format (RTF)"
* $BCP13#application/cda+xml "CDA XML"
* $BCP13#application/fhir+json "FHIR JSON"
* $BCP13#application/fhir+xml "FHIR XML"

/*
ValueSet: EndpointTypeVS
Title: "Endpoint Type Value Set"
Description: "Codes to identify Endpoint Type"
* ^experimental = false
* codes from system EndpointTypeCS
*/

/*
// Need to be redefined lead by Lisa Nelson (MaxMD)
ValueSet: EndpointUsecaseVS
Title: "Endpoint Usecases Value Set"
Description:  "Codes for documenting business use case by a general grouping by business area."
* ^experimental = false
* $V3ActReason#TREAT  "treatment"
* $V3ActReason#HPAYMT "healthcare payment"
* $V3ActReason#COC "coordination of care"
* $V3ActReason#COVERAGE "eligibility verification and determination"
* $V3ActReason#HOPERAT "healthcare operations"
* $V3ActReason#PUBHLTH "public health"
* $V3ActReason#HRESCH "healthcare research"
* $V3ActReason#ETREAT "emergency treatment"
* $V3ActReason#PATRQT "patient requested" 
*/

ValueSet: NdhFhirEndpointUseCaseVS
Title: "NDH FHIR Endpoint Usecase Value Set"
Description:  "Codes for documenting business use case by a general grouping by business area."
* ^experimental = false
* codes from system NdhFhirEndpointUseCaseCS


//for now
ValueSet: NdhDirectTrustEndpointUsecaseVS
Title: "NDH Direct Trust Endpoint Usecase Value Set"
Description:  "Codes for documenting business use case by a general grouping by business area."
* ^experimental = false
* codes from system NdhDirectTrustEndpointUsecaseCS

ValueSet: TrustProfileVS
Title: "Trust Profile Value Set"
Description:  "Codes for documenting trust profile"
* ^experimental = false
* codes from system TrustProfileCS

/*
ValueSet: NdhVerificationCommunicationMethodVS
Title: "NDH Verification Communication Method Value Set"
Description:  "Codes for documenting communication method used for verification"
* ^experimental = false
* codes from system $VerificationCommunicationMethodCS
*/

ValueSet: NdhVerificationProcessVS
Title: "NDH Verification Process Value Set"
Description:  "Codes for documenting verification process"
* ^experimental = false
* codes from system NdhVerificationProcessCS

ValueSet: NdhVerificationStatusVS
Title: "NDH Verification Status Value Set"
Description:  "Codes for verification status"
* ^experimental = false
* codes from system NdhVerificationStatusCS


ValueSet: HealthcareServiceCategoryVS
Title: "Healthcare Service Category Value Set"
Description: "Broad categories of healthcare services being performed or delivered."
* ^experimental = false
* codes from system HealthcareServiceCategoryCS

/*
ValueSet: HealthcareServiceRatingTypeVS
Title: "Healthcare Service Rating Type Value Set"
Description: "Codes for Healthcare Service Rating Type"
* ^experimental = false
* codes from system HealthcareServiceRatingTypeCS
*/

ValueSet: HealthcareServiceEligibilityCodeVS
Title: "Healthcare Service Eligibility Code Value Set"
Description: "Codes for Healthcare Service Eligibility Code"
* ^experimental = false
* codes from valueset $ConditionCode
* codes from valueset $ProcedureCode

/*
ValueSet: HealthcareServiceReferralMethodVS
Title: "Healthcare Service Referral Method Value Set"
Description: "Codes for Healthcare Service Referral Method"
* ^experimental = false
* codes from system HealthcareServiceReferralMethodCS
*/

/*
ValueSet: HealthcareServiceProgramVS
Title: "Healthcare Service Program Value Set"
Description: "Codes for Healthcare Service Program"
* ^experimental = false
//* codes from system HealthcareServiceProgramCS
* codes from system $ProgramCS
*/

ValueSet: HealthcareServiceTypeVS
Title: "HealthcareService Type Value Set"
Description: "HealthCareService type Value Set"
* ^experimental = false
//* codes from system HealthcareServiceTypeCS
* $ServiceTypeCS#1 "Adoption/Permanent Care Info/Support" 
* $ServiceTypeCS#3 "Aged Care Information/Referral" 
* $ServiceTypeCS#8 "Home Care/Housekeeping Assistance" 
* $ServiceTypeCS#9 "Home Maintenance and Repair" 
* $ServiceTypeCS#10 "Personal Alarms/Alerts" 
* $ServiceTypeCS#11 "Personal Care for Older Persons" 
* $ServiceTypeCS#21 "Hydrotherapy" 
* $ServiceTypeCS#26 "Meditation" 
* $ServiceTypeCS#31 "Relaxation Therapy" 
* $ServiceTypeCS#33 "Western Herbal Medicine" 
* $ServiceTypeCS#34 "Family Day care" 
* $ServiceTypeCS#36 "Kindergarten Inclusion Support" 
* $ServiceTypeCS#42 "Parenting/Family Support/Education" 
* $ServiceTypeCS#51 "Blood Donation" 
* $ServiceTypeCS#55 "Health Advocacy/Liaison Service" 
* $ServiceTypeCS#67 "Sexual Health" 
* $ServiceTypeCS#68 "Speech Pathology/Therapy" 
* $ServiceTypeCS#69 "Bereavement Counselling" 
* $ServiceTypeCS#70 "Crisis Counselling" 
* $ServiceTypeCS#71 "Family Counselling/Therapy" 
* $ServiceTypeCS#72 "Family Violence Counselling" 
* $ServiceTypeCS#75 "Genetic Counselling" 
* $ServiceTypeCS#76 "Health Counselling" 
* $ServiceTypeCS#78 "Problem Gambling Counselling" 
* $ServiceTypeCS#79 "Relationship Counselling" 
* $ServiceTypeCS#80 "Sexual Assault Counselling" 
* $ServiceTypeCS#81 "Trauma Counselling" 
* $ServiceTypeCS#82 "Victims of Crime Counselling" 
* $ServiceTypeCS#96 "Disability Advocacy" 
* $ServiceTypeCS#97 "Disability Aids & Equipment" 
* $ServiceTypeCS#99 "Disability Day Programs/Activities" 
* $ServiceTypeCS#102 "Disability Supported Accommodation" 
* $ServiceTypeCS#103 "Early Childhood Intervention" 
* $ServiceTypeCS#105 "Drug and/or Alcohol Counselling" 
* $ServiceTypeCS#106 "Drug/Alcohol Information/Referral" 
* $ServiceTypeCS#107 "Needle & Syringe Exchange" 
* $ServiceTypeCS#108 "Non-resid. Alcohol/Drug Treatment" 
* $ServiceTypeCS#111 "Residential Alcohol/Drug Treatment" 
* $ServiceTypeCS#118 "Employment Placement and/or Support" 
* $ServiceTypeCS#119 "Vocational Rehabilitation" 
* $ServiceTypeCS#126 "Crisis/Emergency Accommodation" 
* $ServiceTypeCS#127 "Homelessness Support" 
* $ServiceTypeCS#128 "Housing Information/Referral" 
* $ServiceTypeCS#130 "Interpreting/Multilingual Service" 
* $ServiceTypeCS#134 "Mental Health Advocacy" 
* $ServiceTypeCS#146 "Physical Activity Programs" 
* $ServiceTypeCS#147 "Physical Fitness Testing" 
* $ServiceTypeCS#224 "Support Groups" 
* $ServiceTypeCS#230 "Patient Transport" 
* $ServiceTypeCS#233 "Abuse" 
* $ServiceTypeCS#238 "Adult Day Programs" 
* $ServiceTypeCS#245 "Aids" 
* $ServiceTypeCS#275 "Cancer Support" 
* $ServiceTypeCS#284 "Child Care" 
* $ServiceTypeCS#296 "Companion Visiting" 
* $ServiceTypeCS#301 "Contraception Inform" 
* $ServiceTypeCS#308 "Crisis Assessment An" 
* $ServiceTypeCS#309 "Crisis Assistance" 
* $ServiceTypeCS#310 "Crisis Refuge" 
* $ServiceTypeCS#316 "Depression" 
* $ServiceTypeCS#317 "Detoxification" 
* $ServiceTypeCS#323 "Divorce" 
* $ServiceTypeCS#328 "Eating Disorder" 
* $ServiceTypeCS#331 "Employment And Train" 
* $ServiceTypeCS#344 "Food" 
* $ServiceTypeCS#345 "Food Vouchers" 
* $ServiceTypeCS#352 "Grief Counselling" 
* $ServiceTypeCS#366 "Household Items" 
* $ServiceTypeCS#400 "Pain" 
* $ServiceTypeCS#409 "Postnatal" 
* $ServiceTypeCS#411 "Pregnancy Tests" 
* $ServiceTypeCS#427 "Rent Assistance" 
* $ServiceTypeCS#429 "Residential Respite" 
* $ServiceTypeCS#440 "Sexual Issues" 
* $ServiceTypeCS#446 "Speech Therapist" 
* $ServiceTypeCS#459 "Tenancy Advice" 
* $ServiceTypeCS#468 "Vocational Guidance" 
* $ServiceTypeCS#470 "Welfare Assistance" 
* $ServiceTypeCS#488 "Diabetes Educator" 
* $ServiceTypeCS#494 "Youth Services" 
* $ServiceTypeCS#495 "Youth Health" 
* $ServiceTypeCS#501 "Cancer Services" 
* $ServiceTypeCS#513 "Cancer Support Groups" 
* $ServiceTypeCS#530 "Disability Care Transport" 
* $ServiceTypeCS#531 "Aged Care Transport" 
* $ServiceTypeCS#532 "Diabetes Education s" 
* $ServiceTypeCS#534 "Young Adult Diabetes" 
* $ServiceTypeCS#535 "Pulmonary Rehabilita" 
* $ServiceTypeCS#537 "Medication Reviews" 
* $ServiceTypeCS#539 "Telephone Help Line" 
* $ServiceTypeCS#546 "Veterans Services" 
* $ServiceTypeCS#548 "Food Relief/Food/Meals" 
* $ServiceTypeCS#552 "Drug and/or Alcohol Support Groups" 
* $ServiceTypeCS#554 "Chronic Disease Management" 
* $ServiceTypeCS#559 "Women's Health" 
* $ServiceTypeCS#560 "Men's Health" 
* $ServiceTypeCS#565 "Youth Drop In/Assistance/Support" 
* $ServiceTypeCS#569 "Migrant Health Clinic" 
* $ServiceTypeCS#570 "Refugee Health Clinic" 
* $ServiceTypeCS#571 "Aboriginal Health Clinic" 
* $ServiceTypeCS#614 "Development-Life Skills" 
* $ServiceTypeCS#628 "Vehicle modifications" 

/*
ValueSet: IdentifierStatusVS
Title: "Identifier Status Value Set"
Description: "Codes for Identifier Status"
* ^experimental = false
* codes from system $CredentialStatusCS
*/

ValueSet: IgActorVS
Title: "IG Actor Value Set"
Description: "Codes to identify IG Actor"
* ^experimental = false
* codes from system IgActorCS

/*
ValueSet: IgTypeVS
Title: "IG Type Value Set"
Description: "Codes to identify IG Type"
* ^experimental = false
* codes from system IgTypeCS
*/

ValueSet: IndividualSpecialtyAndDegreeLicenseCertificateVS
Title: "Individual Specialties, Degrees, Licenses, and Certificates Value Set"
Description: "Individual Specialties, Degrees, Licenses, and Certificates"
* ^experimental = false
* codes from system $V2table0360CS
* codes from valueset IndividualAndGroupSpecialtiesVS

/*
ValueSet: InsuranceProductTypeVS
Title: "Insurance Product Type Value Set"
Description: "A distinct package of health insurance coverage benefits that are offered using a particular product network type"
* ^experimental = false
* codes from system InsuranceProductTypeCS
*/

/*
ValueSet: InsurancePlanTypeVS
Title: "Insurance Plan Type Value Set"
Description: "Categories of cost-sharing used by plans"
* ^experimental = false
* codes from system InsurancePlanTypeCS
*/

/*
ValueSet: LanguageProficiencyVS
Title: "Language Proficiency Value Set"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language"
* ^experimental = false
* codes from system $ILRSpeakingScaleCS
*/


/*
ValueSet: MinEndpointConnectionTypeVS
Title: "Minimum Endpoint Connection Types Value Set"
Description:  "Minimum Endpoint Connection Types"
* ^experimental = false
* $ConnectionTypeCS#hl7-fhir-rest "HL7 FHIR"
* $ConnectionTypeCS#hl7-fhir-msg "HL7 FHIR Messaging"
* EndpointConnectionTypeCS#hl7-fhir-opn "HL7 FHIR Operation"
* $ConnectionTypeCS#direct-project	"Direct Project"
* EndpointConnectionTypeCS#rest-non-fhir "REST (not FHIR)"
*/

ValueSet: NetworkTypeVS
Title: "Network Type Value Set"
Description:  "Single value describing networks."
* ^experimental = false
* OrgTypeCS#ntwk   // only Network profile uses this type 

ValueSet: OrgTypeVS
Title: "Organization Type Value Set"
Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* codes from system OrgTypeCS
* exclude OrgTypeCS#ntwk   // only Network profile uses this type 

ValueSet: OrgAliasTypeVS
Title: "Organization Alias Type Value Sete"
Description:  "Categories of an organization's Alias based on criteria in provider directories."
* ^experimental = false
* codes from system OrgAliasTypeCS


ValueSet: OrganizationAffiliationRoleVS
Title: "OrganizationAffiliation Roles"
Description: "Value Set for Organization Affiliation Roles"
* ^experimental = false
* codes from system $HL7OrganizationRoleCS 
* exclude  $HL7OrganizationRoleCS#member  // replaced by OrganizationAffiliationRoleCS#memberof
* codes from system OrganizationAffiliationRoleCS
* codes from system OrganizationAffiliationRoleForHieCS

/*
ValueSet: OrganizationAffiliationRoleForHieVS
Title: "OrganizationAffiliation Roles for HIE or HIO"
Description: "Value Set for Organization Affiliation Roles for HIE or HIO"
* ^experimental = false
* codes from system OrganizationAffiliationRoleForHieCS
*/

ValueSet: NdhDirectTrustPayloadTypeVS
Title: "NDH Direct Trust Payload Type Value Set"
Description: "Payload types for NDH Direct Trust"
* ^experimental = false
* codes from system NdhDirectTrustPayloadTypeCS
* codes from system $IHEFormatCodeCS
* codes from system $HL7DocumentFormatCodesCS



ValueSet: PractitionerRoleVS
Title: "PractitionerRole Code Value Set"
Description: "Codes for the capabilities that an individual, group, or organization is acknowledged to have in a payer network, including general codes from the HL7 PractitionerRole Code System"
* ^experimental = false
* codes from system PractitionerRoleCS
//* codes from system $HL7PractitionerRoleCS //include the code into the PractitionerRoleCS since it cause error for use $HL7PractitionerRoleCS


ValueSet: QualificationStatusVS
Title: "Qualification Status Value Set"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* codes from system QualificationStatusCS

ValueSet: SpecialtiesVS
Title: "Specialties Value Set"
Description:  "Specialties value set based on National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set"
* ^experimental = false
* codes from valueset IndividualAndGroupSpecialtiesVS
* codes from valueset NonIndividualSpecialtiesVS

ValueSet: SpecialtyAndDegreeLicenseCertificateVS
Title: "Specialties, Degrees, Licenses, and Certificates Value Set"
Description:  "Specialties and Degree License and Certificates"
* ^experimental = false
//* codes from valueset SpecialtiesVS 
//* codes from system $NUCCProviderTaxonomyCS
* codes from valueset $HealthcareProviderTaxonmyVS
//* codes from system $V2table0360CS
* codes from valueset $HL7VS-degreeLicenseCertificate
* codes from valueset $V3ActCredentialedCareCodeVS


ValueSet: TrustFrameworkTypeVS
Title: "Trust Framework Type Value Set"
Description: "Trust Framework Type"
* ^experimental = false
* codes from system TrustFrameworkTypeCS

ValueSet: NdhSecureExchangeArtifactsVS
Title: "Secure Exchange Artifacts Value Set"
Description: "Secure Exchange Artifacts"
* ^experimental = false
* codes from system NdhSecureExchangeArtifactsCS

ValueSet: NdhAssociatedServersTypeVS
Title: "Associated Servers Type Value Set"
Description: "Associated Servers Type"
* ^experimental = false
* codes from system NdhAssociatedServersTypeCS

/*
ValueSet: ValidationProcessVS
Title: "Validation Type Value Set"
Description: "Codes to identify Validation Type"
* ^experimental = false
* ValidationTypeCS#editcheck  "edit check"
* ValidationTypeCS#valueset	"Valueset"
* ValidationTypeCS#extsource	"External source"
* ValidationTypeCS#standalone	"Stand alone"
* ValidationTypeCS#incontext	"In context"
* ValidationTypeCS#attester	"Attester"
*/

ValueSet: VirtualModalitiesVS
Title: "Virtual Modalities Value Set"
Description: "Codes for virtual service delivery modalities"
* ^experimental = false
* codes from system VirtualModalitiesCS

ValueSet: NdhBenefitTypeVS
Title: "NDH Benefit Type Value Set"
Description:  "Codes for NDH Insurance Benefit Type."
* ^experimental = false
* $NdhPayerCharacteristicsCS#pcpov   "Primary Care Visit to Treat an Injury or Illness"
* $NdhPayerCharacteristicsCS#specialistov   "Specialist Office Visit"
* $NdhPayerCharacteristicsCS#mlpov   "Other Practitioner Office Visit (Nurse, Physician Assistant) - Mid Level Professional"
* $NdhPayerCharacteristicsCS#outpatient   "Outpatient Facility Fee (e.g., Ambulatory Surgery Center)"
* $NdhPayerCharacteristicsCS#outpatstx   "Outpatient Surgery Physician/Surgical Services"
* $NdhPayerCharacteristicsCS#hospserv   "Hospice Services"
* $NdhPayerCharacteristicsCS#routinedental   "Routine Dental Services (Adult)"
* $NdhPayerCharacteristicsCS#infertilitytx   "Infertility Treatment"
* $NdhPayerCharacteristicsCS#ltnhc   "Long-Term/Custodial Nursing Home Care"
* $NdhPayerCharacteristicsCS#privatenurse   "Private-Duty Nursing"
* $NdhPayerCharacteristicsCS#routineeye   "Routine Eye Exam (Adult)"
* $NdhPayerCharacteristicsCS#ucservice   "Urgent Care Centers or Facilities"
* $NdhPayerCharacteristicsCS#homehealth   "Home Health"
* $NdhPayerCharacteristicsCS#erservice   "Emergency Room Services"
* $NdhPayerCharacteristicsCS#ambulance   "Emergency Room Services"
* $NdhPayerCharacteristicsCS#inpatienthospital   "Inpatient Hospital Services (e.g., Hospital Stay)"
* $NdhPayerCharacteristicsCS#inpatientprovider   "Inpatient Physician and Surgical Services"
* $NdhPayerCharacteristicsCS#bariatricsurg   "Bariatric Surgery"
* $NdhPayerCharacteristicsCS#cosmeticsurg   "Cosmetic Surgery"
* $NdhPayerCharacteristicsCS#skillednursing   "Skilled Nursing Facility"
* $NdhPayerCharacteristicsCS#ppnatalcare   "Prenatal and Postnatal Care"
* $NdhPayerCharacteristicsCS#maternitycare   "Delivery and All Inpatient Services for Maternity Care"
* $NdhPayerCharacteristicsCS#menthlthoutp   "Mental/Behavioral Health Outpatient Services"
* $NdhPayerCharacteristicsCS#menthlthinp   "Mental/Behavioral Health Inpatient Services"
* $NdhPayerCharacteristicsCS#sadoutp   "Substance Abuse Disorder Outpatient Services"
* $NdhPayerCharacteristicsCS#sadinp   "Substance Abuse Disorder Inpatient Services"
* $NdhPayerCharacteristicsCS#drggenric   "Generic Drugs"
* $NdhPayerCharacteristicsCS#drgbrand   "Preferred Brand Drugs"
* $NdhPayerCharacteristicsCS#drgnonpreferred   "Non-Preferred Brand Drugs"
* $NdhPayerCharacteristicsCS#drgspecialty   "Specialty Drugs"
* $NdhPayerCharacteristicsCS#rehaboutp   "Outpatient Rehabilitation Services"
* $NdhPayerCharacteristicsCS#servicehablitation   "Habilitation Services"
* $NdhPayerCharacteristicsCS#chiro   "Chiropractic Care"
* $NdhPayerCharacteristicsCS#dme   "Durable Medical Equipment"
* $NdhPayerCharacteristicsCS#hearingaids   "Hearing Aids"
* $NdhPayerCharacteristicsCS#imgctpetmri   "Imaging (CT/PET Scans, MRIs)"
* $NdhPayerCharacteristicsCS#prev   "Preventive Care/Screening/Immunization"
* $NdhPayerCharacteristicsCS#rtnpod   "Routine Foot Care"
* $NdhPayerCharacteristicsCS#acupuncture   "Acupuncture"
* $NdhPayerCharacteristicsCS#weightloss   "Weight Loss Programs"
* $NdhPayerCharacteristicsCS#rtneyechld   "Routine Eye Exam for Children"
* $NdhPayerCharacteristicsCS#glasseschld   "Eye Glasses for Children"
* $NdhPayerCharacteristicsCS#rtndntlchld   "Dental Check-Up for Children"
* $NdhPayerCharacteristicsCS#speachthpy   "Rehabilitative Speech Therapy"
* $NdhPayerCharacteristicsCS#rehaboccandpt   "Rehabilitative Occupational and Rehabilitative Physical Therapy"
* $NdhPayerCharacteristicsCS#wellbaby   "Well Baby Visits and Care"
* $NdhPayerCharacteristicsCS#laboutp   "Laboratory Outpatient and Professional Services"
* $NdhPayerCharacteristicsCS#imagingdx   "X-rays and Diagnostic Imaging"
* $NdhPayerCharacteristicsCS#dntlbaschld   "Basic Dental Care - Child"
* $NdhPayerCharacteristicsCS#orthochld   "Orthodontia - Child"
* $NdhPayerCharacteristicsCS#dntlmajchld   "Major Dental Care - Child"
* $NdhPayerCharacteristicsCS#dntlbasadlt   "Basic Dental Care - Adult"
* $NdhPayerCharacteristicsCS#orthodadlt   "Orthodontia - Adult"
* $NdhPayerCharacteristicsCS#dntlmajadlt   "Major Dental Care - Adult"
* $NdhPayerCharacteristicsCS#abortion   "Abortion for Which Public Funding is Prohibited"
* $NdhPayerCharacteristicsCS#transplant   "Transplant"
* $NdhPayerCharacteristicsCS#accdntl   "Accidental Dental"
* $NdhPayerCharacteristicsCS#dialysis   "Dialysis"
* $NdhPayerCharacteristicsCS#testallrgy   "Allergy Testing"
* $NdhPayerCharacteristicsCS#chemotherapy   "Chemotherapy"
* $NdhPayerCharacteristicsCS#radiation   "Radiation"
* $NdhPayerCharacteristicsCS#edudiab   "Diabetes Education"
* $NdhPayerCharacteristicsCS#prosthetic   "Prosthetic Devices"
* $NdhPayerCharacteristicsCS#infusiontx   "Infusion Therapy"
* $NdhPayerCharacteristicsCS#tmjtx   "Treatment for Temporomandibular Joint Disorders"
* $NdhPayerCharacteristicsCS#nutrition   "Nutritional Counseling"
* $NdhPayerCharacteristicsCS#reconsurg   "Reconstructive Surgery"

/*
ValueSet: NdhCoverageTypeVS
Title: "NDH Insurance Coverage Type Value Set"
Description:  "Codes for NDH Insurance Coverage Type."
* ^experimental = false
* $NdhPayerCharacteristicsCS#medical   "Medical"
* $NdhPayerCharacteristicsCS#dental   "Dental"
* $NdhPayerCharacteristicsCS#menthlth   "Mental Health"
* $NdhPayerCharacteristicsCS#substanceabuse   "Substance Abuse"
* $NdhPayerCharacteristicsCS#vision   "Vision"
* $NdhPayerCharacteristicsCS#drug   "Drug"
* $NdhPayerCharacteristicsCS#stc   "Short Term Care"
* $NdhPayerCharacteristicsCS#ltc   "Long Term Care"
* $NdhPayerCharacteristicsCS#hospice   "Hospice"
* $NdhPayerCharacteristicsCS#homehealth   "Home Health"
* $NdhPayerCharacteristicsCS#dmepos   "DMEPOS"
* $NdhPayerCharacteristicsCS#imagingadv   "Advanced Imaging (CT/PET Scans, MRIs)"
* $NdhPayerCharacteristicsCS#prev   "Preventive Care/Screening/Immunization"
* $NdhPayerCharacteristicsCS#rehab   "Rehabilitation"
*/

---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Bundle-locations.fsh

Instance: location-bundle
InstanceOf: Bundle
Description: "All location resources"
* type = #transaction
* entry[+].resource = HospLoc1
* entry[=].fullUrl = "http://ndh.org/fhir/Location/HospLoc1"
* entry[=].request.method = #PUT 
* entry[=].request.url = "Location/HospLoc1"


/*
Instance: womens-shelter
InstanceOf: Bundle
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2017-03-17T01:28:32.06+00:00"
* type = #collection
* entry[0].fullUrl = "http://example.org/HealthcareService/hcs-ws"
* entry[=].resource = hcs-ws
* entry[+].fullUrl = "http://example.org/Location/loc-ws"
* entry[=].resource = loc-ws
*/

/*
Instance: womens-shelter
InstanceOf: Bundle
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2017-03-17T01:28:32.06+00:00"
* type = #collection
* entry[0].fullUrl = "http://example.org/HealthcareService/hcs-ws"
* entry[=].resource = hcs-ws
* entry[+].fullUrl = "http://example.org/Location/loc-ws"
* entry[=].resource = loc-ws
*/



---

File: repos/HL7_SLASH_fhir-us-ndh/input/fsh/Capability-Attestation-Server.fsh


Instance: capabilityNdhAttestationServer
InstanceOf: CapabilityStatement
Usage: #definition
Title: "NDH Attestation Server Capability Statement"
* description = "This Section describes the expected capabilities of the NDH Attestation Server which is responsible 
for receiving information from attestors. The complete list of FHIR profiles, RESTful operations, 
and search parameters supported by NDH Attestation Servers are defined."
* id = "ndh-attestation-server"
* url = "http://hl7.org/fhir/us/ndh/CapabilityStatement/ndh-attestation-server"
* name = "NdhAttestationCapabilityStatement"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"></div>"
* text.status = #generated
* insert CapabilityCommon
* rest[+]
  * mode = #server
  * documentation = "NDH Attestation Server"

  //* insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
  //* insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")

  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Endpoint
    * insert SupportedProfile(NdhNdApiEndpoint, #SHALL)
    //* insert SupportedProfile(NdhEndpoint, #SHALL)
    * documentation = "Endporint Resource, supportedProfile, interaction, search parameter"

    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#vread, #SHALL, "Read the state of a specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local
    
    //-include and -revinclude contains the reference in the resource, it does not have to be a defined search parameter
    * insert SearchInclude("Endpoint:organization", #SHALL)
    * insert SearchRevInclude("CareTeam:endpoint", #SHALL)
   
   //-revinclude Conformance should follow the resourceself conformance and related resource conformance to the lowest level
    * insert SearchRevInclude("HealthcareService:endpoint", #SHALL)
    * insert SearchRevInclude("InsurancePlan:endpoint", #SHALL)
    * insert SearchRevInclude("Location:endpoint", #SHALL)
    * insert SearchRevInclude("Location:endpoint", #SHALL)
    * insert SearchRevInclude("Organization:endpoint", #SHALL)
    * insert SearchRevInclude("OrganizationAffiliation:endpoint", #SHALL)
    * insert SearchRevInclude("Practitioner:endpoint", #SHALL)
    * insert SearchRevInclude("PractitionerRole:endpoint", #SHALL)

    * insert SearchParamNdh("usecase-type", endpoint-usecase-type, #token, #SHALL,"Endpoint usecase type")
    * insert SearchParamNdh("nonfhir-usecase-type", endpoint-nonfhir-usecase-type, #token, #SHALL,"Endpoint nonfhir usecase type")
    * insert SearchParamNdh("trust-framework-type", endpoint-trust-framework-type, #token, #SHALL,"Endpoint trust framework type")
    * insert SearchParamNdh("dynamic-registration-trust-profile", endpoint-dynamic-registration-trust-profile, #token, #SHALL,"Endpoint dynamic registration trust profile")
    * insert SearchParamNdh("access-control-mechanism", endpoint-access-control-mechanism, #token, #SHALL,"Endpoint access control mechanism")
    * insert SearchParamNdh("connection-type-version", endpoint-connection-type-version, #token, #SHALL,"Endpoint connection type version")
    * insert SearchParamNdh("ihe-connection-type", endpoint-ihe-connection-type, #token, #SHALL,"Endpoint ihe connection type")
    * insert SearchParamNdh("verification-status", endpoint-verification-status, #token, #SHALL,"Endpoint verification status")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("connection-type", Endpoint-connection-type, #token, #SHALL,"Connection type")
    * insert SearchParam("identifier", Endpoint-identifier, #token, #SHALL,"Endpoint identifier")
    * insert SearchParam("organization", Endpoint-organization, #reference, #SHALL,"Organization that manages the Endpoint")
    * insert SearchParam("status", Endpoint-status, #token, #SHALL,"Endpoint status")

//======================================================
// CareTeam
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #CareTeam
    * insert SupportedProfile(NdhNdApiCareTeam, #SHALL)
    * documentation = "CareTeam Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#vread, #SHALL, "Read the state of a specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    * insert SearchInclude("CareTeam:location", #SHALL)
    * insert SearchInclude("CareTeam:organization", #SHALL)
    * insert SearchInclude("CareTeam:service", #SHALL)

    * insert SearchParamNdh("endpoint", careteam-endpoint, #reference, #SHALL,"Endpoint of the CareTeam")
    * insert SearchParamNdh("location", careteam-location, #reference, #SHALL,"Location of the CareTeam")
    * insert SearchParamNdh("organization", careteam-organization, #reference, #SHALL,"Organization of the CareTeam")
    * insert SearchParamNdh("service", careteam-service, #reference, #SHALL,"Service of the CareTeam")
    * insert SearchParamNdh("name", careteam-name, #string, #SHALL,"Alias of the CareTeam")
    * insert SearchParamNdh("careteam-verification-status", careteam-verification-status, #token, #SHALL,"Verification status of the CareTeam")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CareTeam-category, #token, #SHALL,"Type of team")
    //* insert SearchParam("identifier", CareTeam-identifier, #token, #SHALL,"External Ids for this team")
    * insert SearchParam("participant", CareTeam-participant, #reference, #SHALL,"Who is involved")
    * insert SearchParam("status", CareTeam-status, #token, #SHALL,"Status of the CareTeam")


//======================================================
// HealthcareService
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #HealthcareService
    * insert SupportedProfile(NdhNdApiHealthcareService, #SHALL)
    * documentation = "HealthcareService Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#vread, #SHALL, "Read the state of a specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    * insert SearchInclude("HealthcareService:coverage-area", #SHALL)
    * insert SearchInclude("HealthcareService:endpoint", #SHALL)
    * insert SearchInclude("HealthcareService:location", #SHALL)
    * insert SearchInclude("HealthcareService:new-patient-from-network", #SHALL)
    * insert SearchInclude("HealthcareService:organization", #SHALL)

    * insert SearchRevInclude("CareTeam:service", #SHALL)
    * insert SearchRevInclude("OrganizationAffiliation:service", #SHALL)
    * insert SearchRevInclude("PractitionerRole:service", #SHALL)

    * insert SearchParamNdh("new-patient-from-network", healthcareservice-new-patient-from-network, #reference, #SHALL,"New patient from network")
    * insert SearchParamNdh("eligibility", healthcareservice-eligibility, #token, #SHALL,"Eligibility")
    * insert SearchParamNdh("new-patient", healthcareservice-new-patient, #token, #SHALL,"New patient")
    * insert SearchParamNdh("verification-status", healthcareservice-verification-status, #token, #SHALL,"Verification status")
    * insert SearchParamNdh("network", healthcareservice-network, #reference, #SHALL,"Network")
    * insert SearchParamNdh("program-requirement-age-group", healthcareservice-program-requirement-age-group, #token, #SHALL,"Program requirement age group")
    * insert SearchParamNdh("program-requirement-birthsex", healthcareservice-program-requirement-birthsex, #token, #SHALL,"Program requirement birthsex")
    * insert SearchParamNdh("program-requirement-gender-identity", healthcareservice-program-requirement-gender-identity, #token, #SHALL, "Program requirement gender identity")
    * insert SearchParamNdh("program-requirement-employment-status", healthcareservice-program-requirement-employment-status, #token, #SHALL,"Program requirement employment status")
    * insert SearchParamNdh("program-requirement-insurance-status", healthcareservice-program-requirement-insurance-status, #token, #SHALL,"Program requirement insurance status")
    * insert SearchParamNdh("program-requirement-va-status", healthcareservice-program-requirement-va-status, #token, #SHALL,"Program requirement va status")
    * insert SearchParamNdh("program-requirement-preferred-language", healthcareservice-program-requirement-preferred-language, #token, #SHALL,"Program requirement preferred language")
    * insert SearchParamNdh("social-service-age-group", healthcareservice-social-service-age-group, #token, #SHALL,"Social service requirement age group")
    * insert SearchParamNdh("social-service-birthsex", healthcareservice-social-service-birthsex, #token, #SHALL,"Social service requirement birthsex")
    * insert SearchParamNdh("social-service-gender-identity", healthcareservice-social-service-gender-identity, #token, #SHALL, "Social service requirement gender identity")
    * insert SearchParamNdh("social-service-employment-status", healthcareservice-social-service-employment-status, #token, #SHALL,"Social service requirement employment status")
    * insert SearchParamNdh("social-service-insurance-status", healthcareservice-social-service-insurance-status, #token, #SHALL,"Social service requirement insurance status")
    * insert SearchParamNdh("social-service-va-status", healthcareservice-social-service-va-status, #token, #SHALL,"Social service requirement va status")
    * insert SearchParamNdh("social-service-preferred-language", healthcareservice-social-service-preferred-language, #token, #SHALL,"Social service requirement preferred language")
    * insert SearchParamNdh("location", healthcareservice-location, #reference, #SHALL,"The location of the Healthcare Service")
    * insert SearchParamNdh("organization", healthcareservice-organization, #reference, #SHALL,"The organization that provides this Healthcare Service")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("active", HealthcareService-active, #token, #SHALL,"Whether this HealthcareService record is in active use")
    * insert SearchParam("coverage-area", HealthcareService-coverage-area, #reference, #SHALL,"Location service is inteded for/available to")
    * insert SearchParam("endpoint", HealthcareService-endpoint, #reference, #SHALL,"Technical endpoints providing access to services operated for the location")
    * insert SearchParam("identifier", HealthcareService-identifier, #token, #SHALL,"External identifiers for this item")
    //* insert SearchParam("location", HealthcareService-location, #reference, #SHALL,"The location of the Healthcare Service")
    * insert SearchParam("name", HealthcareService-name, #string, #SHALL,"A portion of the Healthcare service name")
    //* insert SearchParam("organization", HealthcareService-organization, #reference, #SHALL,"The organization that provides this Healthcare Service")
    * insert SearchParam("program", HealthcareService-program, #token, #SHALL,"One of the Program Names that categorize the service")
    * insert SearchParam("service-category", HealthcareService-service-category, #token, #SHALL,"Service Category of the Healthcare Service")
    * insert SearchParam("service-type", HealthcareService-service-type, #token, #SHALL,"The type of service provided by this healthcare service")
    * insert SearchParam("specialty", HealthcareService-specialty, #token, #SHALL,"Specialties handled by the HealthcareService")

//======================================================
// InsurancePlan
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #InsurancePlan
    * insert SupportedProfile(NdhNdApiInsurancePlan, #SHALL)
    * documentation = "InsurancePlan Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#vread, #SHALL, "Read the state of a specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    * insert SearchInclude("InsurancePlan:administered-by",#SHALL)
    * insert SearchInclude("InsurancePlan:endpoint",#SHALL)
    * insert SearchInclude("InsurancePlan:owned-by",#SHALL)
    * insert SearchInclude("InsurancePlan:coverage-area",#SHALL)
    * insert SearchInclude("InsurancePlan:coverage-network",#SHALL)
    //* insert SearchInclude("InsurancePlan:plan-coverage-area", #SHALL)
    * insert SearchInclude("InsurancePlan:plan-network", #SHALL)
    * insert SearchInclude("InsurancePlan:network", #SHALL)
  
    * insert SearchParamNdh("coverage-area", insuranceplan-coverage-area, #reference, #SHALL, "InsurancePlan coverage area")
    * insert SearchParamNdh("coverage-benefit-type", insuranceplan-coverage-benefit-type, #token, #SHALL, "InsurancePlan coverage benefit type" )
    * insert SearchParamNdh("coverage-type", insuranceplan-coverage-type, #token, #SHALL, "InsurancePlan coverage type")
    * insert SearchParamNdh("coverage-network", insuranceplan-coverage-network, #reference, #SHALL, "InsurancePlan coverage network")
    * insert SearchParamNdh("network", insuranceplan-network, #reference, #SHALL, "InsurancePlan network")
    * insert SearchParamNdh("plan-network", insuranceplan-plan-network, #reference, #SHALL, "InsurancePlan plan network")
    * insert SearchParamNdh("plan-type", insuranceplan-plan-type, #token, #SHALL, "InsurancePlan plan type")
    * insert SearchParamNdh("verification-status", insuranceplan-verification-status, #token, #SHALL, "Verification status")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("address", InsurancePlan-address, #string, #SHALL, "InsurancePlan contact address")
    * insert SearchParam("address-city", InsurancePlan-address-city, #string, #SHALL, "InsurancePlan contact address-city")
    * insert SearchParam("address-country", InsurancePlan-address-country, #string, #SHALL, "InsurancePlan contact address-country")
    * insert SearchParam("address-postalcode", InsurancePlan-address-postalcode, #string, #SHALL, "InsurancePlan contact address-postalcode")
    * insert SearchParam("address-state", InsurancePlan-address-state, #string, #SHALL, "InsurancePlan contact address-state")
    * insert SearchParam("administered-by", InsurancePlan-administered-by, #reference, #SHALL, "InsurancePlan administered by")
    * insert SearchParam("endpoint", InsurancePlan-endpoint, #reference, #SHALL, "InsurancePlan endpoint")
    * insert SearchParam("identifier", InsurancePlan-identifier, #token, #SHALL, "InsurancePlan identifier")
    * insert SearchParam("name", InsurancePlan-name, #string, #SHALL, "InsurancePlan name")
    * insert SearchParam("owned-by", InsurancePlan-owned-by, #reference, #SHALL, "InsurancePlan owned by")
    * insert SearchParam("status", InsurancePlan-status, #token, #SHALL, "InsurancePlan status")
    * insert SearchParam("type", InsurancePlan-type, #token, #SHALL, "InsurancePlan type")

//======================================================
// Location
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Location
    * insert SupportedProfile(NdhNdApiLocation, #SHALL)
    * documentation = "Location Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#vread, #SHALL, "Read the state of a specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    * insert SearchInclude("Location:endpoint",#SHALL)
    * insert SearchInclude("Location:new-patient-from-network",#SHALL)
    * insert SearchInclude("Location:organization",#SHALL)
    * insert SearchInclude("Location:partof",#SHALL)

    * insert SearchRevInclude("CareTeam:location",#SHALL)
    * insert SearchRevInclude("HealthcareService:coverage-area",#SHALL)
    * insert SearchRevInclude("HealthcareService:location",#SHALL)
    * insert SearchRevInclude("InsurancePlan:coverage-area", #SHALL)
    * insert SearchRevInclude("OrganizationAffiliation:location",#SHALL)
    * insert SearchRevInclude("PractitionerRole:location",#SHALL)

    * insert SearchParamNdh("accessibility", location-accessibility, #token, #SHALL, "Location accessibility")
    * insert SearchParamNdh("contains", location-contains, #special, #SHALL, "Location contains")
    * insert SearchParamNdh("new-patient-from-network", location-new-patient-from-network, #reference, #SHALL, "Location new patient from network")
    * insert SearchParamNdh("new-patient", location-new-patient, #token, #SHALL, "Location new patient")
    * insert SearchParamNdh("verification-status", location-verification-status, #token, #SHALL, "Verification status")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("address", Location-address, #string, #SHALL, "Location address")
    * insert SearchParam("address-city", Location-address-city, #string, #SHALL, "Location address-city")
    * insert SearchParam("address-country", Location-address-country, #string, #SHALL, "Location address-country")
    * insert SearchParam("address-postalcode", Location-address-postalcode, #string, #SHALL, "Location address-postalcode")
    * insert SearchParam("address-state", Location-address-state, #string, #SHALL, "Location address-state")
    * insert SearchParam("address-use", Location-address-use, #token, #SHALL, "Location address-use")

    
    * insert SearchParam("endpoint", Location-endpoint, #reference, #SHALL, "Location endpoint")
    * insert SearchParam("identifier", Location-identifier, #token, #SHALL, "Location identifier")
    * insert SearchParam("name", Location-name, #string, #SHALL, "Location name")
    * insert SearchParam("near", Location-near, #special, #SHALL, "Location position")
    * insert SearchParam("partof", Location-partof, #reference, #SHALL, "Location partof")
    
    * insert SearchParam("organization", Location-organization, #reference, #SHALL, "Location organization")
    * insert SearchParam("type", Location-type, #token, #SHALL, "Location type")

//======================================================
// Organization
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Organization
    * insert SupportedProfile(NdhNdApiOrganization, #SHALL)
    * insert SupportedProfile(NdhNdApiNetwork, #SHALL)
    * documentation = "Organization Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#vread, #SHALL, "Read the state of a specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local
    
    * insert SearchInclude("Organization:endpoint",#SHALL)
    //* insert SearchInclude("Organization:identifier-assigner",#SHALL)
    * insert SearchInclude("Organization:partof",#SHALL)
    //* insert SearchInclude("Organization:via-intermediary",#SHALL)

    * insert SearchRevInclude("CareTeam:organization", #SHALL)

    * insert SearchRevInclude("Endpoint:organization", #SHALL)
    //* insert SearchRevInclude("Endpoint:identifier-assigner", #SHALL)

    * insert SearchRevInclude("HealthcareService:organization", #SHALL)
    * insert SearchRevInclude("HealthcareService:new-patient-from-network", #SHALL)
    * insert SearchRevInclude("HealthcareService:network", #SHALL)
    //* insert SearchRevInclude("HealthcareService:via-intermediary", #SHALL)

    * insert SearchRevInclude("InsurancePlan:administered-by", #SHALL)
    * insert SearchRevInclude("InsurancePlan:owned-by", #SHALL)
    * insert SearchRevInclude("InsurancePlan:coverage-network",#SHALL)
    * insert SearchRevInclude("InsurancePlan:plan-network",#SHALL)
    * insert SearchRevInclude("InsurancePlan:network", #SHALL)

    * insert SearchRevInclude("Location:organization", #SHALL)
    * insert SearchRevInclude("Location:new-patient-from-network", #SHALL)
   //* insert SearchRevInclude("Location:via-intermediary", #SHALL)

    * insert SearchRevInclude("OrganizationAffiliation:network", #SHALL)
    * insert SearchRevInclude("OrganizationAffiliation:participating-organization", #SHALL)
    * insert SearchRevInclude("OrganizationAffiliation:primary-organization", #SHALL)
    //* insert SearchRevInclude("OrganizationAffiliation:via-intermediary", #SHALL)

    //* insert SearchRevInclude("Practitioner:identifier-assigner", #SHALL)
    * insert SearchRevInclude("Practitioner:qualification-issuer", #SHALL)
    //* insert SearchRevInclude("Practitioner:via-intermediary", #SHALL)
    
    * insert SearchRevInclude("PractitionerRole:organization", #SHALL)
    * insert SearchRevInclude("PractitionerRole:network", #SHALL)
    * insert SearchRevInclude("PractitionerRole:new-patient-from-network", #SHALL)
    //* insert SearchRevInclude("VerificationResult:validator-organization", #SHALL)
    //* insert SearchRevInclude( "VerificationResult:attestation-who", #SHALL)

    //* insert SearchParamNdh("identifier-assigner", organization-identifier-assigner, #reference, #SHALL, "Organization identifier assigner")
    //* insert SearchParamNdh("via-intermediary", organization-via-intermediary, #reference, #SHALL, "Organization via intermediary")
    * insert SearchParamNdh("coverage-area", network-coverage-area, #reference, #SHALL, "network organization type is needed for searching network coverage area")
    * insert SearchParamNdh("verification-status", organization-verification-status, #token, #SHALL, "Verification status")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("active", Organization-active, #token, #SHALL, "Organization active")
    * insert SearchParam("address", Organization-address, #string, #SHALL, "Organization address")
    * insert SearchParam("address-city", Organization-address-city, #string, #SHALL, "Organization address-city")
    * insert SearchParam("address-country", Organization-address-country, #string, #SHALL, "Organization address-country")
    * insert SearchParam("address-postalcode", Organization-address-postalcode, #string, #SHALL, "Organization address-postalcode")
    * insert SearchParam("address-state", Organization-address-state, #string, #SHALL, "Organization address-state")
    * insert SearchParam("address-use", Organization-address-use, #token, #SHALL, "Organization address-use")
    * insert SearchParam("endpoint", Organization-endpoint, #reference, #SHALL, "Organization endpoint")
    * insert SearchParam("identifier", Organization-identifier, #token, #SHALL, "Organization identifier")
    * insert SearchParam("name", Organization-name, #string, #SHALL, "Organization name")
    * insert SearchParam("partof", Organization-partof, #reference, #SHALL, "Organization partof")
    * insert SearchParam("type", Organization-type, #token, #SHALL, "Organization type")
  

//======================================================
// OrganizationAffiliation
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #OrganizationAffiliation
    * insert SupportedProfile(NdhNdApiOrganizationAffiliation, #SHALL)
    * documentation = "OrganizationAffiliation Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#vread, #SHALL, "Read the state of specific version of the resource")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    * insert SearchInclude("OrganizationAffiliation:network", #SHALL)
    * insert SearchInclude("OrganizationAffiliation:participating-organization", #SHALL)
    * insert SearchInclude("OrganizationAffiliation:primary-organization", #SHALL)
    //* insert SearchInclude("OrganizationAffiliation:via-intermediary", #SHALL)

    //* insert SearchRevInclude("Endpoint:via-intermediary", #SHALL)
    //* insert SearchRevInclude("HealthcareService:via-intermediary", #SHALL)
    //* insert SearchRevInclude("Location:via-intermediary", #SHALL)
    //* insert SearchRevInclude("Organization:via-intermediary", #SHALL)
    //* insert SearchRevInclude("Organization:via-intermediary", #SHALL)
    //* insert SearchRevInclude("OrganizationAffiliation:via-intermediary",#SHALL)
    //* insert SearchRevInclude("Practitioner:via-intermediary", #SHALL)
    //* insert SearchRevInclude("PractitionerRole:via-intermediary", #SHALL)

    //* insert SearchParamNdh("via-intermediary", organizationaffiliation-via-intermediary, #reference, #SHALL, "OrganizationAffiliation via intermediary")
    * insert SearchParamNdh("location", organizationaffiliation-location, #reference, #SHALL, "OrganizationAffiliation location")
    * insert SearchParamNdh("participating-organization", organizationaffiliation-participating-organization, #reference, #SHALL, "OrganizationAffiliation participating-organization")
    * insert SearchParamNdh("primary-organization", organizationaffiliation-primary-organization, #reference, #SHALL, "OrganizationAffiliation primary-organization")
    * insert SearchParamNdh("verification-status", organizationaffiliation-verification-status, #token, #SHALL, "Verification status")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("endpoint",OrganizationAffiliation-endpoint, #reference, #SHALL, "OrganizationAffiliation endpoint")
    * insert SearchParam("identifier", OrganizationAffiliation-identifier, #token, #SHALL, "OrganizationAffiliation identifier")
    //* insert SearchParam("location", OrganizationAffiliation-location, #reference, #SHALL, "OrganizationAffiliation location")
    * insert SearchParam("network", OrganizationAffiliation-network, #reference, #SHALL, "OrganizationAffiliation network")
    //* insert SearchParam("participating-organization", OrganizationAffiliation-participating-organization, #reference, #SHALL, "OrganizationAffiliation participating-organization")
    //* insert SearchParam("primary-organization", OrganizationAffiliation-primary-organization, #reference, #SHALL, "OrganizationAffiliation primary-organization")
    * insert SearchParam("role", OrganizationAffiliation-role, #token, #SHALL, "OrganizationAffiliation role")
    * insert SearchParam("service", OrganizationAffiliation-service, #reference, #SHALL, "OrganizationAffiliation service")
    * insert SearchParam("specialty", OrganizationAffiliation-specialty, #token, #SHALL, "OrganizationAffiliation specialty")

//======================================================
// Practitioner
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Practitioner
    * insert SupportedProfile(NdhNdApiPractitioner, #SHALL)
    * documentation = "Practitioner Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#vread, #SHALL, "Read the state of specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    * insert SearchInclude("Practitioner:endpoint", #SHALL)
    * insert SearchInclude("Practitioner:identifier-assigner", #SHALL)
    * insert SearchInclude("Practitioner:qualification-issuer", #SHALL)
    //* insert SearchInclude("Practitioner:via-intermediary", #SHALL)
    //* insert SearchInclude("Practitioner:verification-attestation-who", #SHALL)

    * insert SearchRevInclude("PractitionerRole:practitioner", #SHALL)

    * insert SearchParamNdh("endpoint", practitioner-endpoint, #reference, #SHALL, "Practitioner endpoint")
    //* insert SearchParamNdh("identifier-assigner", practitioner-identifier-assigner, #reference, #SHALL, "Practitioner identifier assigner")
    * insert SearchParamNdh("qualification-issuer", practitioner-qualification-issuer, #reference, #SHALL, "Practitioner qualification issuer")
    * insert SearchParamNdh("qualification-code", practitioner-qualification-code, #token, #SHALL, "Practitioner qualification code")
    * insert SearchParamNdh("verification-status", practitioner-verification-status, #token, #SHALL, "Verification status")
    //* insert SearchParamNdh("qualification-period", practitioner-qualification-period, #date, #SHALL, "Practitioner qualification period")
    //* insert SearchParamNdh("qualification-wherevalid-code", practitioner-qualification-wherevalid-code, #token, #SHALL, "Practitioner qualification wherevalid code")
    //* insert SearchParamNdh("via-intermediary", practitioner-via-intermediary, #reference, #SHALL, "Practitioner via intermediary")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("active", Practitioner-active, #token, #SHALL, "Whether this practitioner's record is in active use")
    //* insert SearchParam("address", individual-address, #string, #SHALL, "An address in any kind of address/part")
    //* insert SearchParam("address-city", individual-address-city, #string, #SHALL, "A city specified in an address")
    //* insert SearchParam("address-country", individual-address-country, #string, #SHALL, "A country specified in an address")
    //* insert SearchParam("address-postalcode", individual-address-postalcode, #string, #SHALL, "A postalCode specified in an address")
    //* insert SearchParam("address-state", individual-address-state, #string, #SHALL, "A state specified in an address")
    //* insert SearchParam("address-use", individual-address-use, #token, #SHALL, "A use code specified in an address")
    * insert SearchParam("name", Practitioner-name, #string, #SHALL, "A portion of either family or given name of the practitioner")
    //* insert SearchParam("family", individual-family, #string, #SHALL, "A portion of the family name")
    //* insert SearchParam("given", individual-given, #string, #SHALL, "A portion of the given name")
    * insert SearchParam("gender", individual-gender, #token, #SHALL, "Practitioner gender")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHALL, "A practitioner's Identifier")

//======================================================
// PractitionerRole
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #PractitionerRole
    * insert SupportedProfile(NdhNdApiPractitionerRole, #SHALL)
    * documentation = "PractitionerRole Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#vread, #SHALL, "Read the state of specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local

    //* insert SearchInclude("PractitionerRole:endpoint", #SHALL)
    * insert SearchInclude("PractitionerRole:location", #SHALL)
    * insert SearchInclude("PractitionerRole:network", #SHALL)
    * insert SearchInclude("PractitionerRole:new-patient-from-network", #SHALL)
    * insert SearchInclude("PractitionerRole:organization", #SHALL)
    * insert SearchInclude("PractitionerRole:practitioner", #SHALL)
    * insert SearchInclude("PractitionerRole:service", #SHALL)
    //* insert SearchInclude("PractitionerRole:via-intermediary", #SHALL)

    //* insert SearchRevInclude("Endpoint:via-intermediary", #SHALL)
    //* insert SearchRevInclude("HealthcareService:via-intermediary", #SHALL)
    //* insert SearchRevInclude("Location:via-intermediary", #SHALL)
    //* insert SearchRevInclude("Organization:via-intermediary", #SHALL)
    //* insert SearchRevInclude("OrganizationAffiliation:via-intermediary", #SHALL)
    //* insert SearchRevInclude("Practitioner:via-intermediary", #SHALL)
    //* insert SearchRevInclude("PractitionerRole:via-intermediary", #SHALL)

    * insert SearchParamNdh("network", practitionerrole-network, #reference, #SHALL, "PractitionerRole network")
    * insert SearchParamNdh("new-patient", practitionerrole-new-patient, #token, #SHALL, "PractitionerRole new-patient")
    * insert SearchParamNdh("new-patient-from-network", practitionerrole-new-patient-from-network, #reference, #SHALL, "PractitionerRole new-patient from network")
    * insert SearchParamNdh("location", practitionerrole-location, #reference, #SHALL, "One of the locations at which this practitioner provides care")
    * insert SearchParamNdh("organization", practitionerrole-organization, #reference, #SHALL, "The identity of the organization the practitioner represents / acts on behalf of")
    * insert SearchParamNdh("verification-status", practitionerrole-verification-status, #token, #SHALL, "Verification status")
    //* insert SearchParamNdh("via-intermediary", practitionerrole-via-intermediary, #reference, #SHALL, "PractitionerRole via intermediary")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("active", PractitionerRole-active, #token, #SHALL, "Whether this practitioner's record is in active use")
    //* insert SearchParam("date", PractitionerRole-date, #date, #SHALL, "The period during which the practitioner is authorized to perform in these role")
    //* insert SearchParam("email", PractitionerRole-email, #token, #SHALL, "A value in an email contact")
    * insert SearchParam("endpoint", PractitionerRole-endpoint, #reference, #SHALL, "Technical endpoints providing access to services operated for the practitioner with this role")
    * insert SearchParam("identifier", PractitionerRole-identifier, #token, #SHALL, "A practitioner's Identifier")
    //* insert SearchParam("location", PractitionerRole-location, #reference, #SHALL, "One of the locations at which this practitioner provides care")
    //* insert SearchParam("organization", PractitionerRole-organization, #reference, #SHALL, "The identity of the organization the practitioner represents / acts on behalf of")
    //* insert SearchParam("phone", PractitionerRole-phone, #token, #SHALL, "A value in a phone contact")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHALL, "Practitioner that is able to provide the defined services for the organization")
    * insert SearchParam("role", PractitionerRole-role, #token, #SHALL, "The practitioner can perform this role at for the organization")
    * insert SearchParam("service", PractitionerRole-service, #reference, #SHALL, "The list of healthcare services that this worker provides for this role's Organization/Location")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHALL, "The practitioner has this specialty at an organization")


//======================================================
// Restrication
//======================================================
//  * resource[+]
//    * extension[$conf].valueCode = #MAY
//    * type = #Consent
//    * insert SupportedProfile(NdhRestriction, #MAY)
//    * documentation = "Restriction Resource, supportedProfile, interaction, search parameter"
//    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
//    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
//    * insert Interaction(#read, #MAY, "Read the current state of the resource")
//    * insert Interaction(#search-type, #MAY, "Search all resources of the specified type based on some filter criteria.")
//    * insert Interaction(#vread, #MAY, "Read the state of specific version of the resource")
//    * insert Interaction(#history-instance, #MAY, "Retrieve the history of the resource")
//    * insert Interaction(#history-type, #MAY, "Retrieve the history of the resource type")
//    * versioning = #versioned
//    * referencePolicy[+] = #literal
//    * referencePolicy[+] = #local

//======================================================
// Verification
//======================================================
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #VerificationResult
    * insert SupportedProfile(NdhVerification, #SHALL)
    * documentation = "Verification Resource, supportedProfile, interaction, search parameter"
    * insert Interaction(#create, #SHALL, "Create a new resource with a server assigned id")
    * insert Interaction(#update, #SHALL, "Update an existing resource by its id or create it if it is new")
    * insert Interaction(#read, #SHALL, "Read the current state of the resource")
    * insert Interaction(#search-type, #SHALL, "Search all resources of the specified type based on some filter criteria.")
    * insert Interaction(#vread, #SHALL, "Read the state of specific version of the resource")
    * insert Interaction(#history-instance, #SHALL, "Retrieve the history of the resource")
    * insert Interaction(#history-type, #SHALL, "Retrieve the history of the resource type")
    * versioning = #versioned
    * referencePolicy[+] = #literal
    * referencePolicy[+] = #local
 
    * insert SearchInclude("VerificationResult:target", #SHALL)
    * insert SearchInclude("VerificationResult:attestation-who", #SHALL)
    //* insert SearchInclude("VerificationResult:attestation-onbehalfof", #SHALL)
    //* insert SearchInclude("VerificationResult:validator-organization", #SHALL)

    //* insert SearchParamNdh("attestation-communication-method", verificationresult-attestation-communication-method, #token, #SHALL, "VerificationResult attestation communication-method")
    //* insert SearchParamNdh("attestation-onbehalfof", verificationresult-attestation-onbehalfof, #reference, #SHALL, "VerificationResult attestation onbehalfof")
    * insert SearchParamNdh("attestation-who", verificationresult-attestation-who, #reference, #SHALL, "VerificationResult attestation who")
    //* insert SearchParamNdh("primarysource-validation-date", verificationresult-primarysource-validation-date, #date, #SHALL, "VerificationResult primarysource validation-date")
    * insert SearchParamNdh("primarysource-validation-status", verificationresult-primarysource-validation-status, #token, #SHALL, "VerificationResult primarysource validation-status")
    * insert SearchParamNdh("primarysource-type", verificationresult-primarysource-type, #token, #SHALL, "VerificationResult primarysource type")
    //* insert SearchParamNdh("primarysource-who", verificationresult-primarysource-who, #reference, #SHALL, "VerificationResult primarysource who")
    //* insert SearchParamNdh("status-date", verificationresult-status-date, #date, #SHALL, "VerificationResult status-date")
    * insert SearchParamNdh("status", verificationresult-status, #token, #SHALL, "VerificationResult status")
    * insert SearchParamNdh("target", verificationresult-target, #reference, #SHALL, "VerificationResult target")
    //* insert SearchParamNdh("verificationresult-validator-organization", verificationresult-validator-organization, #reference, #SHALL, "VerificationResult validator organization")

    //* insert SearchParam("_query", Resource-query, #token, #SHALL, "Query search parameter which supports a more sophisticated grammar for searching.")
    * insert SearchParam("_filter", Resource-filter, #special, #SHALL, "supports a more sophisticated grammar for searching")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Logical id allows to retrive more than one in a single call")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHALL, "Allows filtering for only records that have changed since last query.")


---

File: repos/HL7_SLASH_fhir-us-ndh/input/pagecontent/actors-workflow.md

actors-workflow

### Actor definitions
### Overall workflow

---

