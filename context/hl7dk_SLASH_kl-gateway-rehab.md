File: repos/hl7dk_SLASH_kl-gateway-rehab/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: kl.dk.fhir.rehab
canonical: http://fhir.kl.dk/rehab
name: KLGatewayRehab
description: Danish municipalities implementation guide for §140 rehabilitation reporting
status: active
version: 2.2.0
fhirVersion: 4.0.1
copyrightYear: 2023+
releaseLabel: Release #ci-build
publisher:
  name: Kommunernes Landsforening
  url: http://kl.dk

dependencies:
  hl7.fhir.dk.core: 3.2.0
  kl.dk.fhir.term: 2.2.0
  
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Artifacts: artifacts.html
  Example: example.html



---

// File: input/pagecontent/index.md

# KLGatewayRehabilitation
This implementation guide describes the delivery of §140 rehabilitation data to KL Gateway. The data originates from the documentation made by physiotherapist in the Danish municipalities.The reporting aims for compliance with the Danish core profiles and the current work on a shared information model (FKI) for data in the Danish municipalities.  

The profiles for the reporting are restricted to allow only the information that is required to report to the KL Gateway.

## Overview
The data is reported as a collection of instances. A report may contain instances that conforms to the profiles defined in this implementation guide. See figure below.

<img alt="OverviewModel" src="./ReportStructure.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

Whereas the report may seem unconstrained, each profile define constraints on attributes, datatypes and cardinalities. See descriptions below.

## Citizen
Information about the citizen that is the subjects of the report.

##### Attributes
* A civil registration number (CPR-nr)
* A deseased attribute signifying whether the patient is alive or dead
* An organisation identifier that identifies the municipality holding and reporting the data

##### Validation
* One and only one civil registration number exists, and is a syntactically valid CPR-nr
* One and only one deseased attribute
* One and only one managing organization exitis, and is a syntactically valid SOR code (only code length is currently validated in the profile, but the authorization validates the actual SOR code)

## Organization
The organization profile is used to represent organizations such as general practitioners and hospitals sending service requests. Be aware that the managing organization (the municipality keeping the record) is represented in the citizen profile.

##### Attributes
* An organisation identifier

##### Validation
* One and only one organisation identifier exists, and is a syntactically valid SOR code or FK-org code

## ServiceRequest
This model is used to represent when a municipality recieves a referal for §140 rehabilitation (Danish: GGOP).

##### Attributes
* A reference to the organization that requests the intervention
* The intervention being requested
* The reason for the referal expressed as a reference to FocusCondition
* A reference to the citizen
* The time of the referal
* A reference to the referal that this one replaces
* A category signifying the type of GGOP
* A discharge date
* a status reason to express the reason that the service requested is on hold
* a date where the first encounter was planned, whether it occurs or not
* Two FHIR status attributes (status and intent)

##### Validation
* A reference to the organization is mandatory.
* The code for the intervention being requested should always be present and fixed to 'Kommunal genoptræning efter sygehusophold'
* One or more references to FocusCondition may be present. It is only nessesary to report these, if they can be drawn directly from the MedCom message.
* One and only one reference to the citizen should be present.
* The time of the referal is mandatory
* A reference to a replaced referal may be present.
* There might be one or two categories, one is mandatory
* The dischage date is mandatory
* The status reason is optional, but 'must support'
* The date where the first encounter was planned is optional, but 'must-support'
* Both FHIR statuses are mandatory. Each of them should be drawn from the appropriate standard FHIR-ValueSet 

## FocusCondition
This model holds a diagnosis-code, as it is reported to the municipality as part of the referal from a hospital.

##### Attributes
* A diagnosis code
* A diagnosis text
* A reference to the citizen
* Two FHIR status attributes

##### Validation
* One diagnosis code may exists and should be drawn from SKS
* One diagnosis text may exist
* One and only one reference to the citizen exists
* One FHIR status is mandatory and should be drawn from the appropriate standard FHIR-ValueSet. The other is not mandatory, but it is needed for reporting entered-in-error.

## PlannedIntervention
This model holds information about §140 rehabilitation interventions planned for a citizen.

##### Attributes
* A FSIII intervention code
* A delivery type code that express whether the intervention is delivered in a group or individually
* The time where the intervention was granted
* The time where the intervention was stopped
* A reference to the citizen
* A reference to the ServiceRequest, that started the intervention
* The reason for the intervention expressed as a reference to Condition
* A reference to the organization that delivers the intervention
* A reference to the care plan that this planned intervention is part of
* Three FHIR status attributes (status, intent, activity.detail.status)

##### Validation
* One and only one FSIII intervention code may be present and it should be drawn from valid §140 FSIII interventions as expressed by the ValueSet
* One and only one delivery type code, which should be drawn from the appropriate ValueSet 
* One and only one time for when the intervention was granted
* The time where the intervention was stopped may be present
* One and only one reference to the citizen exists
* A reference to the ServiceRequest is optional
* A reference to one or more Conditions may exist, but are not required
* One and only one reference to the organization that delivers the intervention exists
* All FHIR statuses are mandatory. Each of them should be drawn from the appropriate standard FHIR-ValueSet.
* The reference to the care plan is mandatory if the intervention is repeating such as 'Fysisk træning'.

## CarePlan
The CarePlan is used whenever a §140 training is planned for a citizen in Danish municipalities. Care plan is a way to describe when a number of planned interventions are delivered together with a common schedule.

##### Attributes
* A category code, which can be either 'Opfølgningsforløb efter §140' or 
'Interventionsforløb efter §140'
* The time where the CarePlan was granted
* The time where the CarePlan was stopped
* A reference to the ServiceRequest, that started the CarePlan
* A reference to the Citizen
* An explaination for cancelling the CarePlan before its completion
* A reference to the organization that delivers the intervention
* Three FHIR status attributes (status, intent, activity.detail.status)

##### Validation
* One and only one category code may be present and it should be drawn from the associated ValueSet.
* One and only one time for when the care plan was granted  is mandatory
* The time where the care plan was stopped may be present
* A reference to the ServiceRequest that started the CarePlan is optional
* One and only one reference to the Citizen exists
* One and only one explaination for cancelling the care plan before its completion shall exist if and only if the status is 'cancelled' or 'stopped'. Else it is prohibited.
* One and only one reference to the organization that delivers the intervention exists
* All FHIR statuses are mandatory. Each of them should be drawn from the appropriate standard FHIR-ValueSet

## Encounter
Information about whenever a citizen meets the §140 rehabilitation staff in a Danish municipality context.

##### Attributes
* Encounter class. The attribute holds a code which describe the place of delivery e.g. home visit or ambulatory.
* The encounter start-time
* The encounter end-time
* A reference to the Citizen
* A reference to the CarePlan or PlannedIntervention that this encounter is a delivery of
* A FHIR status attribute

##### Validation
* One ond only one encounter class exists, and should be drawn from the standard FHIR-ValueSet
* One and only one encounter start-time exists
* One and only one end-time may exist
* One and only one reference to the Citizen exists
* A reference to the CarePlan or PlannedIntervention may exist
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## Condition
This model contains information about FSIII conditions. They should be reported as long as a condition is true and active, for a living citizen that recieves §140 rehabilitation in Danish municipalities.

##### Attributes
* A FSIII condition code
* The time where the condition was reported
* A reference to the Citizen
* A condition-focus attribute
* Two FHIR statuses (clinicalStatus and verificationStatus)

##### Validation
* One and only one FSIII condition code may be present and it should be drawn from valid §140 FSIII conditions as expressed by the ValueSet.
* One and only one reporting-time exists
* One and only one reference to the Citizen exists
* The condition-focus attribute may be set to 'problem-list-item', or not be present. See the detailed documentation.
* clinicalStatus is mandatory. VerificationStatus is recommended but only required for when reporting 'entered-in-error'. Each of them should be drawn from the appropriate standard FHIR-ValueSet

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}

---

// File: input/pagecontent/StructureDefinition-klgateway-140-care-plan-intro.md

### Scope and usage
The CarePlan for §140 is used whenever a rehabilitation care pathway is planned for a citizen in Danish municipalities. Care pathway or plan is a way to describe when a number of planned interventions are delivered together with a common schedule.

The two types of plan in §140 are 'Opfølgningsforløb efter §140' and 'Interventionsforløb efter §140' and one of these two codes should be documented in CarePlan.category.

It is important to distiguish correctly between the dates and times stated in the model. CarePlan.period.start is when the CarePlan was authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occured and the status is 'completed', then it is the actual end-date. Notice that end-date is not mandatory to report. All dates may be repported with or without time of day.

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. CarePlan.intent is always 'plan' in this implementation guide. CarePlan status should at least distiguish between 'unknown' and 'entered-in-error', but the actual status of the care plan may also be reported. Note that the meaning of 'active' is "ready to be acted upon", so it does not signify that the first activity has occured.

CarePlan.activity.detail.status is also mandatory, and all the statuses in the FHIR ValueSet may be used. It is recommended not to use 'entered-in-error' - if the CarePlan is entered-in-error use CarePlan.status. To get the needed data-quality, the detail-status should at least distinguish between 'unknown' and 'cancelled'. Although it is better to use the appropriate FHIR-statuses, 'unknown' is permitted from the time where the care plan occurs in the record until its completion. 'Cancelled' (or 'stopped') are mandatory, if an care plan is cancelled. It is mandatory to report cancelled care plans, so that the reason for the cancellation can inform the dataset. This is done using CarePlan.activity.detail.statusReason, and a set of codes that represents different reasons for the cancellation. The codes are as follows:

* 'Hændelse medfører ophør'
* 'Ikke yderligere behov (borger-vurderet)'
* 'Ikke yderligere behov (fagperson-vurderet)'
* 'Borger har ikke henvendt sig eller er udeblevet'
* 'Aktivt fravalg'
    * 'Aktivt fravalg pga. anden sygdom'
    * 'Aktivt fravalg pga. økonomi ifm. transport'
    * 'Aktivt fravalg pga. logisik ifm. transport' 
    * 'Aktivt fravalg pga. anden træning'

It is premitted to use the code 'Aktivt fravalg' for reporting, but the more detailed codes, though not mandatory, provides for a more nuanced dataset.

CarePlan.subject references the citizen. CarePlan.activity.detail.performer is the organisation that carries out the care plan (leverandør).

The CarePlan.extension[basedOnServiceRequest] points to the ServiceRequest (GGOP) which was the starting point for the care plan. It may happen that an care plan has two ServiceRequests as a starting point. Imagine that a citizen has gotten a hip replacement, has been dicharges from the hospital and has started rehabilitation. Then the citizen falls and gets re-admitted to the hospital. At discharge, a new ServiceRequest is send, but because the damage was small, the municipality care plan preceeds as planned. In this case, change CarePlan.extension[basedOnServiceRequest] from the later, to the newer ServiceRequest. If the patient is admitted for a longer time, so that the care plan changes i.e. the citizen starts over in group based training, cancel the ealier care plan, and start a new one pertaining to the new ServiceRequest. If two different ServiceRequests results in two different care plans (e.g. hip replacement rehabilitation and shoulder rehabilitation), all serviceRequests and care plans exists in parallel, but should reference each other correctly (e.g shoulder GGOP to shoulder training and hip GGOP to mobility training).

Different reasons for changing a CarePlan may exist, and here we provide guidance for how it should be reported:
* Errors should be corrected by reporting the same CarePlan again with the entered-in-error status. And reporting the correct one with a new Id.
* If cancelled, set the CarePlan.activity.detail.status and CarePlan.activity.detail.statusreason and report the Careplan again with the same Id as used earlier.
* If the timing is changing, it is most likely because a status has shown a new or an extra need of the citizen. Report this in a new CarePlan with a new start-date, rather than correcting the timing in the existing plan. This goes for PlannedInterventions that references the CarePlan as well.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indsatsforløbKategori|Udtrykker hvilken kategori indsatsforløbet har.|CarePlan.category|
|indsatsforløbBevillingstid|Tidspunktet for hvornår indsatsforløbet er bevilget|CarePlan.period.start|
|indsatforløbAfslutningstid|Tidspunktet for hvornår indsatsforløbet er afsluttet, eller planlægges afsluttet|CarePlan.period.end|
|indsatsforløbsstatus|Indikerer om indsatsforløbet er klar til at blive handlet på, om dokumentationen repræsentere en fremtidig intention eller er historisk.|CarePlan.status|
|indsatsforløbhensigt|Indikerer niveauet af autorisation og hvor langt i planlægningen indsatsen er|CarePlan.intent|
|indsatsforløbsAktivitetsstatus|Indikerer om indsatsforløbet er igangsat, eller om den ikke er startet, er aflyst, eller er færdiggjort|CarePlan.activity.detail.status|
|indsatsforløbForklaringAfStatus|Forklaring af hvorfor et indsatsforløb er aflyst, fx fordi der ikke længere er behov|CarePlan.activity.detail.statusReason|
|indsatsforløbleverandør|Organisation, der har ansvaret for at udføre indsatsforløbet|CarePlan.activity.detail.performer|
|indsatsforløbsubjekt|Den borger som den indsatsforløbet retter sig mod|CarePlan.subject|
|indsatsforløbAnledning|Den anledning/GGOP som er grunden til at indsatsforløbet igangsættes|extension:basedOnServiceRequest|

---

// File: input/pagecontent/StructureDefinition-klgateway-140-citizen-intro.md

### Scope and usage
klgateway-140-citizen is used to identify the subject of a rehabilitation reporting by the personal id number (CPR-nummer) and the managing organization that acts as the custodian of the reported data. The personal id number must be an official Danish CPR-nummer without hyphen, and the SOR code must be an official SOR code.

The managing organization is given by its SOR code. For most municipalities this will be the code for the municipality, but if a municipality delivers services covered by FSIII in different departments using different record systems (thus having mulitple custodians) the SOR codes of the department that acts as custodian is used.

Patient.deceasedBoolean is a statement of whether the citizen is alive or dead.


### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgerCprNummer|Officielt cpr-nummer på borgeren|Patient.identifier.value|
|borgerErDød|boolesk værdi der er sand hvis borgeren er død|Patient.deceasedBoolean|
|borgerJournalførendeOrganisation|Organisation som ejer journalen med oplysninger|Patient.managingOrganization.identifier.value|
|harAktivJournal|Om borger er aktiv i kommunale journal, bruges til fejlregistrering| Patient.active|



---

// File: input/pagecontent/StructureDefinition-klgateway-140-condition-intro.md

### Scope and usage
A klgateway-140-condition is reported as long as a condition is true and active, for a living citizen that recieves §140 rehabilitation interventions in Danish municipalities.

Conditions are always defined by Condition.code, which originates from FSIII. Only conditions related to Training SUL §140 (FSIII) are allowed.

Condition.recordedDate is the date where the condition was first recorded, NOT the date where the problem was first known to be present.

Condition.clinicalStatus should be populated with the value "active" if the citizen has the condition, and inactive if the citizen no longer has the condition. Condition.verificationStatus should be used as specified in the FHIR standard. In most use cases, Condition.verificationStatus should be "confirmed". clinicalStatus is mandatory, and it is a good idea to always provide the verificationStatus. If not populated, the verificationStatus is assumed to be “confirmed”.

Condition.category is, in this implementation, used as a way to determine whether the condition is in focus in a professional context. In focus means that this condition is solely or partially the reason why interventions are performed in the professional context. If a condition is "in focus" Condition.category is populated with the value "problem-list-item". An empty Condition.category means that the focus have not been considered (if it is the first version of a condition).

Ending a condition have two meanings. The first is that the citizen no longer has the condition e.g. a mobility problem is no longer there. In this case, Condition.clinicalStatus=inactive. The second meaning of "ended" is that the condition falls out of focus in a professional context e.g. if the citizen moves, or another professional group takes over the care for the citizen. In this case, the Condition.category looses its "problem-list-item" flag. The idea is to state that from a citizen viewpoint the condition has not changed, but in this professional context it is no longer in focus.

To sum up, A condition should be reported to Kl-gateway in the first report after it first occurs in the record. The condition should be reported again if it changes. In this implementation, it changes under two circumstances:
*  The citizen does not have the problem any more. In this case, set Condition.clinicalStatus to inactive and report this condition to KL-Gateway in the next report.
* The citizen still has the problem, but the rehabilitation unit isn't doing anything more about it because the case is closed. In this case, remove the category with the problem-list-item flag from the model, and report this condition to KL-Gateway in the next report.

Condition.subject holds a reference to the citizen.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|tilstandskode|Udtrykker hvilken klasse tilstanden tilhører.|Condition.code.coding|
|tilstandsoprettelsestid|Tidsangivelse for hvornår tilstanden først blev oprettet i journalen|Condition.recordedDate|
|tilstandsstatus|Klasse der udtrykker en status for om tilstanden er til stede eller ej.|Condition.clinicalStatus og Condition.verificationStatus|
|tilstandsfokus|Klasse der udtrykker, om en faggruppe har tilstanden i fokus for sine indsatser|Condition.category.coding|
|tilstandssubjekt|Den borger som har tilstanden|Condition.subject|



---

// File: input/pagecontent/StructureDefinition-klgateway-140-delivery-report-intro.md

### Scope and usage
This model is used to represent the reporting of rehabilitation deliverd by the municipalities according to §140 in the health act.

The report is a FHIR Bundle that allows different ressources to be grouped and handled as a unit. The ressources that are grouped in this bundle is one, and only one klgateway-140-citizen, together with the content that have changed since the last reporting. The content can be of all the types that are present as profiles in this implementation guide.

The citizen is included in the report in Bundle.entry[citizen]. The entry should include a Bundle.entry.link, which have two fixed values. The citizen resssource should be included in the bundle, together with its url. 

The content is included in the report in Bundle.entry[content]. Each entry includes a Bundle.entry.link, with two fixed values. Each entry also includes a ressource and its url.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indberetningsrapportBorger|Indberetningsrapportens borger|Bundle.entry[citizen]|
|indberetningsrappprtIndhold|Hver af indberetningsrapportens indholds-ressourcer|entry[content]|

---

// File: input/pagecontent/StructureDefinition-klgateway-140-encounter-intro.md

### Scope and usage
klgateway-140-encounter is used whenever a citizen meets the rehabilitation staff in a Danish municipality context.

In the context of the rehabilitation repporting, all Encounter.status values may be used, but not all are mandatory. The mandatory part is:
* To report all carried out encounters. For encounters carried out, use Encounter.status 'finished'.
* To report errors using status 'entered-in-error'

Enconters that are planned, but not carried out are possible to report but not mandatory.

Encounter.class is mandatory in FHIR. In Danish municipalities the values are used as follows.
* Visits in citizens homes have the code 'HH' Home health, the code is also used for services that are not strictly health related e.g. help with cleaning. This code is also used, even if the activities stretch outside the citizens residence e.g. a physiotherapist that want to see a citizen walk outside, or a social worker helping with shopping activities.
* Sessions where the citizens visit municipality facilities e.g. for training or health prevention have the code 'AMB' Ambulatory.
* Encounters delivered as a screen visit should be registered as 'Skærmbesøg'.
* Encounters delivered using a phone should be registered as 'Telefonisk'

Encounter.extension[basedOnCarePlan] should be populated with a reference to the care plan or planned intervention that describes the activities that are planned for the encounter. 

The time of the encounter is documented in Encounter.period.start and Encounter.periode.end, and both attributes are mandatory. Only planned time is mandatory to report. There is no expectation that the staff update the time if they finish a little earlier or a little later.

Encounter.subject relates to the citizen that the encounter is about.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgerkontaktstatus|Klasse der indikerer om kontakten er igangværende, eller om dokumentationen repræsentere en fremtidig intention eller er historisk|Encounter.status|
|borgerkontaktklasse|Klasse, der udtrykker en generel kategori for kontakten, som rækker ud over den kommunale kontekst.|Encounter.class|
|borgerkontaktstart|Kontaktens start, eller planlagte start|Encounter.period.start|
|borgerkontaktslut|Kontaktens sluttidspunkt, eller planlagte sluttidspunkt|Encounter.period.end|
|borgerkontaktsubjekt|Den borger kontakten vedrører|Encounter.subject|
|borgerkontaktanledning|Den henvisning/henvendelse, der er grunden til at denne kontakt udføres|Encounter.basedOn|
|borgerkontaktBaseretPå|Den care plan, der er grunden til at denne kontakt udføres|Encounter.extension:basedOnCarePlan|

---

// File: input/pagecontent/StructureDefinition-klgateway-140-focus-condition-intro.md

### Scope and usage
The  kl-gateway-140-focus-condition holds a diagnosiscode, as it is reported to the municipality in the request for rehabilitation from the hospital (GGOP) using SKS (ICD10). Be aware, that each code (either primary or secondary) as defined by MedCom should have its own instance of kl-gateway-140-focus-condition.

The mapping the the GGOP is specified as follows. If ICD10_aktionsdiagnosekodetype or ICD10_bidiagnosekodetype is of type 'ICD10Kode' or 'SKSdiagnosekode' then Condition.code.coding.code = ICD10_aktionsdiagnosekode/ICD10_bidiagnosekode and Condition.code.coding.display = ICD10_aktionsdiagnose/ICD10_bidiagnose.

It is usually recommended in FHIR that ad-ons to a code (tillægskoder) are reported together as 'whole meanings' because the codes would loose their meaning if represented in two different focus-condition instanses. However, MedComs GGOP does not allow the distinction between seconday diagnosis and add-on codes. As a result each code gets its own instance.

It is not very common yet that SKS codes are send to the municipality, as a result a text can be used to represent the condition as well. If the GGOP attribute Diagnose_fritekst is populated repport it as Condition send it as a separate Condition instance 

Condition.clinicalStatus should be populated with the value 'active' if the citizen has the condition, and 'inactive' if the citizen no longer has the condition. Condition.verificationStatus should be able to ditiguish between 'confirmed' and 'entered-in-error'. It is a good idea to always provide the verificationStatus. If not populated, the verificationStatus is assumed to be “confirmed”.

The citizen is referred in Condition.subject

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|fokusTilstandskode|Udtrykker hvilken klasse tilstanden tilhører (diagnosekoden).|Condition.code.coding|
|fokusTilstandKodetekst|Udtrykker tilstanden som en tekst|Condition.code.text|
|fokusTilstandssubjekt|Den borger som har tilstanden|Condition.subject|
|tilstandsstatus|Klasse der udtrykker en status for om tilstanden er til stede eller ej.|Condition.clinicalStatus og Condition.verificationStatus|


---

// File: input/pagecontent/StructureDefinition-klgateway-140-organization-intro.md

### Scope and usage
The organization inherits its basic structure from dk-core. When it is used in KL gateway, only identifiers are reported. The identifier can be either a SOR-id or an FK-org code.
Be aware that in the context of KL gateway, the managing organization (the municipality keeping the record) is represented in the [citizen profile]( StructureDefinition-klgateway-140-citizen.html), NOT using this organization profile. The organization profile is used to represent other organizations such as service providers and hospitals sending rehabilitation plans(da: GGOP).


### Conversions between Danish information model and FHIR-profile
Organization svarer til en type af Aktør i den fælleskommunale rammearkitektur.
nedenstående tabel definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|organisationsid|Id på organisationen der enten er en SOR kode eller et FK-Org id|Organization.identifier|
|harAktivJournal|Om organisationen er aktiv i kommunale journal, bruges til fejlregistrering| Organization.active|


---

// File: input/pagecontent/StructureDefinition-klgateway-140-planned-intervention-intro.md

### Scope and usage
The PlannedIntervention for §140 is used whenever a rehabilitation intervention is planned for a citizen in Danish municipalities.

CarePlan.activity.detail.code.coding holds the intervention code, which has to come from FSIII. Some interventions can be delivered in a group or individually. The code should be chosen accordingly.

It is important to distiguish correctly between the dates and times stated in the model. CarePlan.period.start is when the PlannedIntervention was authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occured and the status is 'completed', then it is the actual end-date. Notice that end-date is not madatory to report. All dates may be repported with or without time of day.

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. CarePlan.intent is always 'plan' in this implementation guide. CarePlan status should be either 'unknown', 'entered-in-error', or the status of the intervention at the time of reporting. Note that the meaning of 'active' is "ready to be acted upon", so it does not signify that the first activity has occured.

CarePlan.activity.detail.status is also mandatory, and all the statuses in the FHIR ValueSet may be used, however 'unknown' is permitted from the time where the intervention occurs in the record until its completion. It is recommended not to use 'entered-in-error' - if the CarePlan is entered-in-error use CarePlan.status.
The codes detailing 'Aktivt fravalg' are not mandatory to report.

The CarePlan.extension[basedOnServiceRequest] points to the ServiceRequest (GGOP) which was the starting point for the intervention. It may happen that an intervention has two ServiceRequests as a starting point. Imagine that a citizen has gotten a hip replacement, has been dicharges from the hospital and has started rehabilitation. Then the citizen falls and gets re-admitted to the hospital. At discharge, a new ServiceRequest is send, but because the damage was small, the municipality intervention preceeds as planned. In this case, change CarePlan.activity.reference from the later, to the newer ServiceRequest. If the patient is admitted for a longer time, so that the intervention changes i.e. the citizen starts over in group based training, cancel the ealier intervention, and start a new one pertaining to the new ServiceRequest. If two different ServiceRequests results in two different interventions (e.g. hip replacement rehabilitation and shoulder rehabilitation), all serviceRequests and interventions exists in parallel, but should reference each other correctly (e.g shoulder GGOP to shoulder training and hip GGOP to mobility training).

CarePlan.subject references the citizen. CarePlan.activity.detail.performer is the organisation that carries out the intervention (leverandør).

CarePlan.activity.detail.reasonReference holds the link between conditions and interventions. It is optional to report.

CarePlan.basedOn referes to the care-pathway or plan, that this intervention is part of. It is mandatory to report for plannend interventions with a treatment focus. See which intervention codes appply in the invariant klgateway-140-intervention-1. It is optional for Interventions of type 'Opfølgning'.

activity.detail.extension[deliveryType] is used to state, how interventions are delivered. Valid values are 'individual', 'group based', 'delivered using a robot' 'delivered using digital solution'. Note that more than one code may apply to one intervention e.g. training may be delivered partially by an app 'delivered using digital solution' and partially by one-to-one interaction 'individual'.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indsatsskode|Udtrykker hvilken klasse indsatsen tilhører.|CarePlan.activity.detail.code.coding|
|indsatsbevillingstid|Tidspunktet for hvornår indsatsen er bevilget|CarePlan.period.start|
|indsatsafslutningstid|Tidspunktet for hvornår indsatsen er afsluttet, eller planlægges afsluttet|CarePlan.period.end|
|indsatsstatus|Indikerer om indsatsplanen er klar til at blive handlet på, om dokumentationen repræsentere en fremtidig intention eller er historisk.|CarePlan.status|
|indsatshensigt|Indikerer niveauet af autorisation og hvor langt i planlægningen indsatsen er|CarePlan.intent|
|indsatsAktivitetsstatus|Indikerer om indsatsen er igangsat, eller om den ikke er startet, er aflyst, eller er færdiggjort|CarePlan.activity.detail.status|
|indsatsAnledning|Den henvendelse/henvisning, der er anledning til, at denne indsats igangsættes|extension:basedOnServiceRequest|
|indsatsleverandør|Organisation, der har ansvaret for at udføre den planlagte indsats|CarePlan.activity.detail.performer|
|indsatssubjekt|Den borger som den planlagte indsats retter sig mod|CarePlan.subject|
|indsatsbegrundelse|Tilstand som indsatsen rettes mod|CarePlan.activity.detail.reasonReference|
|indsatsDelAfPlan|Det indsatsforløb, som denne indsats er en del af|CarePlan.basedOn|
|indsatsLeveringstype|Type der beskriver hvordan indsatsen leveres|activity.detail.extension:deliveryType|

---

// File: input/pagecontent/StructureDefinition-klgateway-140-servicerequest-intro.md

### Scope and usage
This model is used to represent when a municipality recieves a request for rehabilitation according to §140 in the health act (DK: §140 træning ifølge sundhedsloven).

The ServiceRequest, should have the sending organisation as the requester i.e the hospital that sends the request (GGOP), and intent should always be "plan". The status attribute should be used according to the FHIR-guidance. The requester is mandatory for §140. The citizen is referred in ServiceRequest.subject.

ServiceRequest.authoredOn holds the date form when the GGOP was recieved in the municipality, if this is available. Else, the time that the GGOP was send from the hosptal may be used.

extension[dischargeDate] holds the date from when the patient was discharged from the hospital. If nothing else is available, the attribute 'Aktuel_kontakt_slutdato' from MedCom's GGOP can be used. However, it should always be possible to correct the date if the discharge date is changed.

The date, where the patient is offered to recieve his/her first encounter is reported in occurrencePeriod.start. This is the official beginning of the delivery of the service, even if the encounter is eventually cancelled. occurrencePeriod.start is labled with 'must support'.

category is used to state what type of GGOP has been send to the municipality i.e. 'almen', 'specialiseret', 'rehabilitering'. If the GGOP is of type 'almen', an additional code may be added to distinguish between 'basal' and 'avanceret'. Note that the latter may change over time, and is allowed to be corrected.

It may happen that the hospital sends a new GGOP when the treatment changes from 'specialiseret' to 'almen', even though this is not the recommended practice. In this case, just use this GGOP in a new instance of ServiceRequest, and associate with CarePlans, Iterventions etc as needed. If the hospital does not send a new GGOP (recommended pratics), just change the type from 'specialiseret' to 'almen' in an update to the already reported ServiceRequest, and associate the CarePlans, Iterventions etc'.

ServiceRequest.status and ServiceRequest.intent are mandatory. ServiceRequest.intent always have the value 'plan'. ServiceRequest.status uses the required FHIR ValueSet as appropriate. Use 'on-hold' to signify a GGOP that the municipality does not act on, or does not act on yet. Use in combination with extension[statusReason] to explain why the GGOP is not acted on.

It may happen that a new GGOP is recieved, while another one is already active for the citizen. If you want to keep track on which activities are related to each GGOP, choose the appropriate use case:
* If the new GGOP calls for the same interventions (with just minor modifications). Then the new GGOP replaces the old one. This is documented by reporting both the old and the new ServiceRequest. The new serviceRequest referes the old one using the attribute serviceRequest.replaces. The old ServiceRequest sets ServiceRequest.status to 'revoked'  Example: A citizen has gotten a hip replacement, has been dicharges from the hospital and has started rehabilitation. Then the citizen falls and gets re-admitted to the hospital. At discharge, a new ServiceRequest is send, but because the damage was small, the municipality intervention preceeds as planned.
* It could also happen that the new GGOP means that the citizen interventions should be modified. E.g. the therapist start over with the examination (terapeutfaglig undersøgelse) and/or plan another intervention. In this case, revoke the old ServiceRequest, and use the new one as a reference in all interventions and encounters. Example: If the patient is admitted for a longer time, so that the intervention changes i.e. a new examination is made and the citizen starts over in group based training.
* In the last case, both GGOPS are relevant at the same time, and each calls for different interventions. In this case, both ServiceRequests remains active, and each have different interventions and encounters associated with it. Example: A citizen has gotten a hip replacement, has been dicharges from the hospital and has started rehabilitation. The citizen is then examined for shoulder and neck pain in the hospital, and a new GGOP is send to the municipality, to also help with neck/shoulder interventions.

SeviceRequest.reasonReference is only used, if a code or codes were recieved in a MedCom message as a referal diagnosis (i GGOP). The reasonReference describes this through a reference to FocusCondition, which again uses SKS diagnosis codes to describe the problem/diagnosis, that led the hospital to request §140 rehabilitation. 

ServiceRequest.code.coding is used to state, what kind of interventions the requester wants for the citizen. The value is always 'Kommunal genoptræning efter sygehusophold'.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|anledningAnsvarlig|Den som har ansvar for henvendelsen/henvisningen|ServiceRequest.requester|
|anledningsstatus|Klasse der udtrykker status for henvendelsen|ServiceRequest.status|
|anledningsHensigt|Klasse der udtrykker hensigten med henvendelsen|ServiceRequest.intent|
|anledningsIndsats|Klasse der udtrykker, hvilken type kommunal indsats/ydelse der anmodes om.|ServiceRequest.code.coding|
|anledningsSubjekt|Den borger som henvisningen/henvendelsen vedrører|ServiceRequest.subject|
|anledningstid|Det tidspunkt hvor henvisning/henvendelsen er forfattet af den ansvarlige|ServiceRequest.authoredOn|
|anledningsbegrundelse|Den borgertilstand, der ligger til grund for henvendelsen/henvisningen.|SeviceRequest.reasonReference|
|anledningErstatter|Den tidligere anledning som denne erstatter|SeviceRequest.replaces|
|anledningTypeAfGGOP|Type af GGOP|SeviceRequest.category|
|anledningUdskrivningsdato|borgers udskrivningsdato fra hospitalet|SeviceRequest.extension:dischargeDate|
|anledningÅrsagManglendeAktivitet|Begrundelse for status, der bruges, når der ikke er aktivitet indenfor 7 dages garantien|SeviceRequest.extension:statusReason|
|anledningTilbudtFørsteKontakt|Den dato, hvor borger er tilbudt første kontakt. Datoen regnes for igangsættelsesdato selv om kontakten måtte blive aflyst|SeviceRequest.occurrencePeriod.start|


---

// File: input/pagecontent/example.md


This page describes subsequent delivery reports for the citizen Ruddi Test Berggren.
For each delivery report the story is told (in Danish), and a reporting example is given.

### First Event May 23rd, 2022

#### Story
Ruddis forløb er startet ved at der er sendt en GGOP fra Holbæk sygehus’ ortopædkirurgiske afdeling, med en anmodning om, at Holbæk kommune skal forestå §140 genoptræning.
Den modtages og behandles d. 23. maj 2022 af Holbæk kommunes genoptræningscenter SOR: 1037801000016003. GGOP'en angiver aktionsdiagnosen til ’Pertrokantær femurfraktur', typen af GGOP er angivet til 'almen' og forventet udskrivningsdato til 24. maj 2022.
I kommunens modtage-enhed vurderes GGOP'en, og det planlægges at igangsætte Ruddis forløb d. 28. maj, som derved ligger indenfor 7-dages ventetidsgarantien. Typen af genoptræning specificeres af kommunen som 'basal'.
I første omgang planlægges en terapeutfaglig udredning.

#### Reporting
A delivery report is generated containing the Citizen, two Organization  (The sender of the GGOP and the one delivering the intervention), a FocusCondition, a ServiceRequest and a PlannedIntervention.

The report for this is found here: [DeliveryReport-Ruddi-1](Bundle-e87d5e68-e5f3-476f-988f-4efda86b0645.html)

### Second Event May 28th, 2022

#### Story
Der gennemføres en terapeutfaglig udredning – hvor der beskrives udfordringer på tilstandene 'Mobilitet og bevæge sig' og 'forflytte sig'.
På denne baggrund planlægges et træningsforløb med indsatsen 'fysisk træning'. Da den terapeutfaglig udredning hermed er gennemført, afsluttes indsatsen 'Terapeutfaglig udredning'.

#### Reporting
A delivery report is generated containing the Citizen, two Organizations  (The sender of the GGOP and the one delivering the intervention), a FocusCondition, and a ServiceRequest. These are not updated from last time, but they are reported because the new content references these instances.

The delivery report also contains the updated PlannedIntervention (Terapeutfaglig udredning).

The new content in the delivery report is an Enconter (Terapeutfaglig udredning), two Conditions, a CarePlan (træningsforløb) and a PlannedIntervetion (fysisk træning).

The report for this is found here: [DeliveryReport-Ruddi-2](Bundle-4b9443a2-7231-4387-8e3d-614bf193df49.html)

### Events three to six May 31st to June 21st, 2022

#### Story
Ruddi gennemfører første træning d. 31. maj. Herefter fremmøder Ruddi til 4 gange træning af 60 min. Dette medfører en indberetning til FKGateway af tid forbrugt på kontakterne.

De fire rapporter vil være næsten ens, og derfor er det udelukkende rapporten fra 21. juni, der vises her. Læg mærke til at rapporten ikke indeholder tidligere indberettede kontakter - det er fordi de hverken ændrer sig eller refereres.

#### Reporting
A delivery report is generated containing the Citizen, two Organizations  (The sender of the GGOP and the one delivering the intervention), a FocusCondition, a ServiceRequest and a CarePlan (træningsforløb). These are not updated from last time, but they are reported because the new content references these instances.

The new content in the delivery report is an Enconter (delivery of træningsforløb).

The report for this is found here: [DeliveryReport-Ruddi-6](Bundle-4a391f69-a909-4a79-92bd-1b0f812dc52a.html)

### Seventh event June 22nd

#### Story
En terapeut planlægger et træningsforløb med indsatserne 'fysisk træning' og 'funktionstræning', og ved en fejl gør hun det i Ruddis journal, i stedet for Peters journal. Fejlen sker fordi Ruddi var den sidste borger hun havde, og hun glemte at lukke hans journal ned. Da fejlen ikke er opdaget endnu, indrapporters de som et nyt indsatsforløb i Ruddis journal.

#### Reporting
A delivery report is generated containing the Citizen, one Organizations  (the one delivering the intervention). These are not updated from last time, but they are reported because the new content references these instances.

The new content in the delivery report is an a CarePlan (træningsforløb) and two PlannedInterventions.

The report for this is found here: [DeliveryReport-Ruddi-7](Bundle-9960b8dc-5ebf-4166-83d7-b042bcc6aca5.html)

### Eighth event June 23rd

#### Story
Ruddi oplever markant bedring og ønsker at afslutte træning, da han har mulighed for at fortsætte i det lokale træningscenter. Terapeuten afslutter Ruddis tilstande, træningsforløb og indsatser og det noteres i journalen, at Ruddi ønsker at afslutte den kommunale genoptræningen grundet anden træning.

I forbindelse med at terapeuten er inde i journalen opdager hun at Peters indsatser er lagt ind ved en fejl. De slettes/fejl-registreres i journalen.

#### Reporting
A delivery report is generated containing the Citizen, two Organizations  (The sender of the GGOP and the one delivering the intervention), a FocusCondition, and a ServiceRequest. These are not updated from last time, but they are reported because the updated content references these instances.

The updated content in the delivery report is Ruddis CarePlan, PlannedIntervention, and two Conditions. They are all ended. In addition, the error with Peters data results in an update of his CarePlan and two PlannedInterventions, with status changed to entered-in-error.  

The report for this is found here: [DeliveryReport-Ruddi-8](Bundle-c2f75bbf-2027-41bf-b597-de5e242f2b3d.html)





---

// File: input/fsh/140carePlan.fsh

Profile: KLGateway140CarePlan
Parent: CarePlan
Id: klgateway-140-care-plan
Title: "KLGateway140care-plan"
Description: "Care plans for §140 rehabilitation in Danish Municipalities."

//Requirements
* status ^definition = "Shall be either unknown, entered-in-error, or the status of the intervention at the time of reporting"
* intent = #plan
* category 1..1
* category from CarePlanCategories140 (required)
* activity.detail.status ^definition = "Shall be either unknown, or cancelled, or the activity status of the intervention at the time of reporting"
* activity.detail.statusReason from CancellationTypes //hvilken type, når interventionen stopper, for at lave en ny, fordi der er sendt en ny GGOP

* subject only Reference(klgateway-140-citizen) //borger
* subject ^type.aggregation = #bundled
* period 1..1
* period.start 1..1 //Bevillingsdato
//period.end er mulig men ikke obligatorisk
* activity 1..1
//* activity.outcomeReference only Reference(klgateway-140-encounter) //kontakter
//* activity.outcomeReference ^type.aggregation = #bundled
* activity.reference 0..0
* activity.detail 1.. 
* activity.detail.code 0..0 
* activity.detail.reasonCode ..0
* activity.detail.performer 1..1 //indsatsudfører
* activity.detail.performer only Reference(klgateway-140-organization)
* activity.detail.performer ^type.aggregation = #bundled
* extension contains
   BasedOnServiceRequestExtension named basedOnServiceRequest 0..1

//* extension[basedOnServiceRequest].valueReference only Reference(klgateway-140-servicerequest) //GGOP'en
* extension[basedOnServiceRequest].valueReference ^type.aggregation = #bundled


//0..0 kardinaliteter
* activity.detail.scheduled[x] 0..0
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* basedOn ..0
* replaces ..0
* partOf ..0
* activity.detail.reasonReference 0..0
* title ..0
* description ..0
* encounter ..0
* created ..0
* author ..0
* contributor ..0
* careTeam 0..0
* addresses ..0
* supportingInfo ..0
* goal ..0
* activity.outcomeCodeableConcept ..0
* activity.progress ..0
* activity.detail.kind ..0
* activity.detail.instantiatesCanonical ..0
* activity.detail.instantiatesUri ..0
* activity.detail.reasonReference 0..0
* activity.detail.goal ..0
* activity.detail.doNotPerform ..0
// * activity.detail.scheduledString ..0
// * activity.detail.scheduledPeriod ..0
// * activity.detail.scheduledTiming.code 0..0
// * activity.detail.scheduledTiming.event 0..0
// * activity.detail.scheduledTiming.repeat.boundsPeriod.end 0..0
// * activity.detail.scheduledTiming.repeat.frequency 0..0
// * activity.detail.scheduledTiming.repeat.durationMax 0..0
// * activity.detail.scheduledTiming.repeat.boundsDuration 0..0
// * activity.detail.scheduledTiming.repeat.boundsRange 0..0
// * activity.detail.scheduledTiming.repeat.countMax 0..0
// * activity.detail.scheduledTiming.repeat.dayOfWeek 0..0
* activity.detail.location ..0
* activity.detail.product[x] ..0
* activity.detail.dailyAmount ..0
* activity.detail.quantity ..0
* activity.detail.description ..0
* activity.outcomeReference 0..0
* note ..0

//Danish descriptions
* category ^short = "[DK] indsatsforløbKategori"
* period.start ^short = "[DK] indsatsforløbBevillingstid"
* period.end ^short = "[DK] indsatforløbAfslutningstid"
* status ^short = "[DK] indsatsforløbsstatus"
* intent ^short = "[DK] indsatshensigt"
* subject ^short = "[DK] indsatssubjekt"
* extension[basedOnServiceRequest] ^short = "[DK] indsatsforløbAnledning"
* activity.detail.status ^short = "[DK] indsatsforløbsAktivitetsstatus"
* activity.detail.statusReason ^short = "[DK] indsatsforløbForklaringAfStatus"
* activity.detail.performer ^short = "[DK] indsatsleverandør"
* obeys klgateway-140-care-plan-1

Invariant: klgateway-140-care-plan-1
Description: "status reason is mandatory if status is cancelled or stopped. Otherwise it is prohibited"
Severity: #error
Expression: "activity.detail.all(statusReason.exists() = (status = 'cancelled' or status = 'stopped'))"

Instance: RuddiTraeningsforloeb
InstanceOf: klgateway-140-care-plan
Title: "RuddiTræningsforløb"
Description: "Ruddi's træningsforløb"
Usage: #example
* category = $KLCommonCodes#f15b2663-94d9-4d0c-a5de-d8bd8e1e4ebb
* period.start = 2022-05-30
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(RuddiTestBerggren)
* extension[basedOnServiceRequest].valueReference = Reference(RuddiGGOPInformation)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(UdfoererAfRuddisRehab)


---

// File: input/fsh/140citizen.fsh

Profile: KLGateway140Citizen
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-patient
Id: klgateway-140-citizen
Title: "KLGateway140Citizen"
Description: "Administrative information about a citizen receiving care or care related services."
* identifier 1..1
* identifier[x-ecpr] 0..0
* identifier[d-ecpr] 0..0
* identifier[cpr] 1..1
* active ..1
* name[official] 0..0
* name ..0
* telecom ..0
* gender ..0
* birthDate ..0
//* deceased[x] ..1
* deceasedDateTime 0..0
* deceasedBoolean 1..1
* address ..0
* maritalStatus ..0
* multipleBirth[x] ..0
* photo ..0
* contact ..0
* communication ..0
* generalPractitioner[referencedSORUnit] 0..0
* generalPractitioner ..0
* managingOrganization 1..1
* managingOrganization.reference ..0
* managingOrganization.type ..0
* managingOrganization.identifier 1..1
* managingOrganization.identifier only dk-core-sor-identifier
* managingOrganization.display ..0
* link ..0

//Danish descriptions
* identifier ^short = "[DK] borgerCprNummer"
* deceasedBoolean ^short = "[DK] borgerErDød"
* managingOrganization ^short = "[DK] borgerJournalførendeOrganisation"
* active ^short = "[DK] harAktivJournal"

Instance: RuddiTestBerggren
InstanceOf: klgateway-140-citizen
Description: "Test personen Ruddi, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation."
Usage: #example
* identifier.use = #official
* identifier.value = "1502779995"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* deceasedBoolean = false
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

---

// File: input/fsh/140CodeSystem.fsh

// CodeSystem: Tempcodes
// Id: Tempcodes
// Title: "Tempcodes"
// Description: "Tempcodes to be implemented in KL-term"
// * ^experimental = false
// * ^caseSensitive = true
// * #ef491570-7884-4acd-bcf7-43d6b2c64762 "Borger har ikke henvendt sig eller er udeblevet"
// * #ffd81f78-352e-4589-a195-5350dd1df2a4 "almen" "Midlertidig kopi af MedComs kode for genoptræning på alment niveau, som specificeret af den gode genoptræningsplan, https://svn.medcom.dk/svn/releases/Standarder/National%20Sygehus-Kommunesamarbejde/GGOP/Dokumentation/GGOP.pdf"
// * #0c8e2bfc-1350-45d1-90da-c07e2645d073 "specialiseret" "Midlertidig kopi af MedComs kode for genoptræning på specialieret niveau, som specificeret af den gode genoptræningsplan, https://svn.medcom.dk/svn/releases/Standarder/National%20Sygehus-Kommunesamarbejde/GGOP/Dokumentation/GGOP.pdf"
// * #83c89857-8fb8-4163-97b1-eb1a56345c29 "rehabilitering" "Midlertidig kopi af MedComs kode for rehabilitering på specialiseret niveau, som specificeret af den gode genoptræningsplan, https://svn.medcom.dk/svn/releases/Standarder/National%20Sygehus-Kommunesamarbejde/GGOP/Dokumentation/GGOP.pdf"
// * #8b962281-2ab6-4b10-9c91-4bac592d6d49 "basal" "Almen genoptræning på basalt niveau"
// * #b679c454-2da2-46dd-9425-0e52d4aa2bf3 "avanceret" "Almen genoptræning på avanceret niveau"
// * #f64b8f5e-8ced-4a8b-ab73-8994fb524915 "Anden kommmune" "Overgivet til anden kommune, på borgers anmodning"
// * #a8632e22-bf0c-4f5a-92a7-70977ba104d5 "Udskudt" "Udskudt opstart påkrævet som specificeret i GGOP"
// * #3796fa11-305f-47d6-b164-45b05489afb2 "FritValg" "Overgået til FritValg"
// * #8ac7be88-5d16-4dbd-a61a-ab02673f4b34 "Fejl" "Fejlafsendt GGOP"
// * #46a6bc1f-bfe8-4390-a71f-44ad4a384b9d "FritValg afslået" "borger tilbudt fritValg, men vil hellere vente"

ValueSet: ServiceRequestStatusReasons140
Id: ServiceRequestStatusReasons140
Title: "ServiceRequestStatusReasons"
Description: "Status Reason codes as used in §140 rehabilitation"
* ^experimental = false
* $KLCommonCodes#f64b8f5e-8ced-4a8b-ab73-8994fb524915 //"Anden kommmune" "Overgivet til anden kommune, på borgers anmodning"
* $KLCommonCodes#a8632e22-bf0c-4f5a-92a7-70977ba104d5 //"Udskudt" "Udskudt opstart påkrævet som specificeret i GGOP"
* $KLCommonCodes#3796fa11-305f-47d6-b164-45b05489afb2 //"FritValg" "Overgået til FritValg"
* $KLCommonCodes#8ac7be88-5d16-4dbd-a61a-ab02673f4b34 //"Fejl" "Fejlafsendt GGOP"
* $KLCommonCodes#46a6bc1f-bfe8-4390-a71f-44ad4a384b9d //"FritValg afslået" "borger til

ValueSet: ServiceRequestTypes140
Id: ServiceRequestTypes140
Title: "ServiceRequestTypes"
Description: "The type of ServicRequest (GGOP), as defined by MedCom, supplemented by the two municipality specific types"
* ^experimental = false
* $KLCommonCodes#ffd81f78-352e-4589-a195-5350dd1df2a4 //almen
* $KLCommonCodes#8b962281-2ab6-4b10-9c91-4bac592d6d49 //"basal" "Almen genoptræning på basalt niveau"
* $KLCommonCodes#b679c454-2da2-46dd-9425-0e52d4aa2bf3 //"avanceret" "Almen genoptræning på avanceret niveau"
* $KLCommonCodes#0c8e2bfc-1350-45d1-90da-c07e2645d073 //specialiseret
* $KLCommonCodes#83c89857-8fb8-4163-97b1-eb1a56345c29 //rehabilitering

ValueSet: DeliveryTypes140
Id: DeliveryTypes140
Title: "DeliveryTypes"
Description: "The delivery context types allowed in §140 rehabilitation"
* ^experimental = false
* include codes from system $KLCommonCodes where concept descendent-of #3f79cee2-b148-4f2c-9cbd-387820e74685


ValueSet: CancellationTypes
Id: CancellationTypes
Title: "CancellationTypes"
Description: "Cancellation valueset, to be implemented in KL-term or MedCom-term"
* ^experimental = false
* $KLCommonCodes#4bbf6d6a-a1c6-41c2-b8c1-7352b7378adf //"Ikke yderligere behov (borger-vurderet)"
* $KLCommonCodes#a63b6aa6-7d56-4e67-a5b3-d73f6d262af5 //"Ikke yderligere behov (fagperson-vurderet)"
* $KLCommonCodes#3a5a72b7-addf-4857-b80c-04e4246e3072 //"Aktivt fravalg"
* $KLCommonCodes#0cd5734d-b663-47c6-a3da-6b14a937d144 //"Aktivt fravalg pga. anden sygdom"
* $KLCommonCodes#f8436c2e-af1c-44fe-939d-473b518dd01d //"Aktivt fravalg pga. økonomi ifm. transport"
* $KLCommonCodes#8371b769-4bfb-4ac8-b130-d91c54784a56 //"Aktivt fravalg pga. logistik ifm. transport"
* $KLCommonCodes#a3f2bd01-078b-486e-81be-797d192ad7bd //"Aktivt fravalg pga. anden træning"
* $KLCommonCodes#82e99421-31da-4915-96ed-168ccfa1d20c //"Hændelse medfører ophør"
* $KLCommonCodes#ef491570-7884-4acd-bcf7-43d6b2c64762 //"Borger har ikke henvendt sig eller er udeblevet"


ValueSet: CarePlanCategories140
Id: CarePlanCategories140
Title: "CarePlanCategories"
Description: "The care plan categories usefull for §140"
* ^experimental = false
* $KLCommonCodes#4863001e-14c7-4be8-a2da-e4f21a4b6ac4 //"Opfølgningsforløb efter §140"
* $KLCommonCodes#f15b2663-94d9-4d0c-a5de-d8bd8e1e4ebb //"Interventionsforløb efter §140"


ValueSet: ServiceTypes140
Id: ServiceTypes140
Title: "ServiceTypes"
Description: "The service types allowed in §140" 
* ^experimental = false
* $KLCommonCodes#7fc66c15-0cb3-4c89-9e18-f3a01e6a6592	//Træning

ValueSet: Conditions140
Id: Conditions140
Title: "§140 tilstande"
Description: "Danish municipality theraphy condition codes"
* ^experimental = false
* $FSIII#2bd07f7c-e6bb-424b-ab8f-f7c1de2afe80 // Lave mad
* $FSIII#b53bca74-fd3f-4127-89ae-1a39d7836b93 // Lave husligt arbejde
* $FSIII#bd088375-65fc-4e1d-9a8b-78dc918e6581 // Indkøb
* $FSIII#86e1982c-f459-4658-9071-e4bf3453a687 // Forflytte sig
* $FSIII#dd41df82-3c13-4523-b9c5-e83676425299 // Mobilitet og bevægelse
* $FSIII#243ae4ae-4e36-4192-88cb-399711ac3766 // Personlig pleje
* $FSIII#290baa56-5d8c-40a6-b40c-1de05649f0d1 // Spise og drikke
* $FSIII#6a2c3341-c13e-4638-961d-72ba0fe29a80 // Sundhedskompetence	
* $FSIII#064f983b-5ec5-40a3-bc90-c3fcec6b6ef5 // Kommunikation		
* $FSIII#1d9759c6-6526-4d07-994a-5dee3fa65177 // Energi og handlekraft		
* $FSIII#56860429-eabe-4d48-b8ad-d7f7b28f6df5 // Hukommelse		
* $FSIII#b16668ff-9c02-491e-b082-7b699d93f5bc // Kognitive funktioner		
* $FSIII#263a2c2f-7ae2-4264-8808-7e8216b1a118 // Sår og cicatriser		
* $FSIII#26b05040-94f3-4c8c-9ede-c7223bddf518 // Respiration og cirkulation		
* $FSIII#3c685f14-5d48-4b1c-a451-9da780e2b41c // Sanser og smerter		
* $FSIII#bbc99471-a9f3-41f1-a95b-6842abfb551a // Kontinens	
* $FSIII#c6f49b84-58af-43df-bb3e-0d6a67fa0aba // Bevægeapparat

ValueSet: EncounterClassCodes
Title: "KontaktKlasseKoder"
Description: "Codes to describe the mode of delivery of an encounter"
* ^experimental = false
* include codes from valueset http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
* $KLCommonCodes#1b55a4b0-1156-4f58-b2df-b5c6014d9048 //"Telefonisk" KLCommonCareSocialCodes
* $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d //"Skærmbesøg" KLCommonCareSocialCodes

---

// File: input/fsh/140condition.fsh

Profile: KLGateway140Condition
Parent: Condition
Id: klgateway-140-condition
Title: "KLGateway140Condition"
Description: "Detailed information about condition relating to §140 care pathways"
* identifier ..0
* clinicalStatus.coding 1..1
* clinicalStatus.coding.version ..0
* clinicalStatus.coding.display ..0
* clinicalStatus.coding.userSelected ..0
* clinicalStatus.text ..0
* verificationStatus MS
* verificationStatus ^definition = "Shall be present if entered-in-error. Assumed to be confirmed if absent."
* verificationStatus.coding 1..1
* verificationStatus.coding.version ..0
* verificationStatus.coding.display ..0
* verificationStatus.coding.userSelected ..0
* verificationStatus.text ..0
* category ..1 MS
* category ^definition = "Category must be problem-list-item for active and left out for inactive conditions"
* category.coding 1..1
* category.coding.code = #problem-list-item
* category.coding.version ..0
* category.coding.display ..0
* category.coding.userSelected ..0
* category.text ..0
* severity 0..0
* code 1..1
* code from Conditions140 (required)
* code.coding 1..1
* bodySite ..0
* subject only Reference(klgateway-140-citizen)
* subject ^type.aggregation = #bundled
* abatement[x] ..0
* encounter ..0
* onset[x] ..0
* recordedDate 1..1
* recorder ..0
* asserter ..0
* stage ..0
* evidence ..0
* note ..0

//Danish descriptions
* code.coding ^short = "[DK] §140 tilstandskode"
* clinicalStatus ^short = "[DK] tilstandsstatus"
* verificationStatus ^short = "[DK] tilstandsstatus"
* recordedDate ^short = "[DK] tilstandsoprettelsestid" 
* subject ^short = "[DK] tilstandssubjekt" 
* category.coding ^short = "[DK] tilstandsfokus"

//Example
Instance: RuddiTilstand
InstanceOf: klgateway-140-condition
Title: "RuddiTilstand"
Description: "Ruddis Tilstand vedrørende mobilitet og bevægelse"
Usage: #example
* code.coding =  $FSIII#dd41df82-3c13-4523-b9c5-e83676425299 "Mobilitet og bevægelse"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-06-02
* subject = Reference(RuddiTestBerggren)
* category.coding = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item

---

// File: input/fsh/140deliveryReport.fsh

Profile: KLGateway140DeliveryReport
Parent: Bundle
Id: klgateway-140-delivery-report
Title: "KLGateway140DeliveryReport"
Description: "Delivery report to deliver data for each citizen."
* meta.profile 1..1
* meta.profile = "http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-delivery-report"
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link 0..0
* entry.link 0..0
* entry.resource 1..1
* entry.resource only
    Condition or
    CarePlan or
    klgateway-140-encounter or
    klgateway-140-organization or
    klgateway-140-citizen or
    klgateway-140-servicerequest
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains citizen 1..1
* entry[citizen].resource only
    klgateway-140-citizen
* entry.resource ^short = "Citizen and content constrained to known profiles"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0
* entry[citizen] ^short = "[DK] indberetningsrapportBorger"
* entry ^short = "[DK] indberetningsrapportIndhold"
* obeys gateway-140-report-1
* obeys gateway-140-report-2


Invariant: gateway-140-report-1
Description: "All condition resources shall conform to either klgateway-140-condition profile, or klgateway-140--focus-condition profile"
Severity: #error
Expression: "entry.select(resource as Condition).all(
    $this.conformsTo('http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-condition')
 or $this.conformsTo('http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-focus-condition'))"

Invariant: gateway-140-report-2
Description: "All intervention resources shall conform to either klgateway-140-care-plan profile, or klgateway-140-planned-intervention profile"
Severity: #error
Expression: "entry.select(resource as CarePlan).all(
    $this.conformsTo('http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-care-plan')
 or $this.conformsTo('http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-planned-intervention'))"

Instance: RuddiIndberetningsrapport
InstanceOf: klgateway-140-delivery-report
Description: "Indberetning for Ruddi"
Usage: #example
* type = #collection
* timestamp = 2020-08-14T00:00:00Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/RuddiTestBerggren"
* entry[=].resource = RuddiTestBerggren

* entry[+].fullUrl = "https://test.fhir.dk/Organization/AfsenderAfRuddisGGOP"
* entry[=].resource = AfsenderAfRuddisGGOP

* entry[+].fullUrl = "https://test.fhir.dk/Organization/UdfoererAfRuddisRehab"
* entry[=].resource = UdfoererAfRuddisRehab

* entry[+].fullUrl = "https://test.fhir.dk/Condition/RuddiAktionsdiagnoseGGOP"
* entry[=].resource = RuddiAktionsdiagnoseGGOP

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/RuddiGGOPInformation"
* entry[=].resource = RuddiGGOPInformation

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/RuddiTerapeutfagligUndersoegelse"
* entry[=].resource = RuddiTerapeutfagligUndersoegelse

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/RuddiKontaktUndersoegelse"
* entry[=].resource = RuddiKontaktUndersoegelse

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/RuddiTraeningsforloeb"
* entry[=].resource = RuddiTraeningsforloeb

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/RuddiTraening"
* entry[=].resource = RuddiTraening

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/RuddiFunctionalTraening"
* entry[=].resource = RuddiFunctionalTraening

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/RuddiKontakt1Traening"
* entry[=].resource = RuddiKontakt1Traening

* entry[+].fullUrl = "https://test.fhir.dk/Condition/RuddiTilstand"
* entry[=].resource = RuddiTilstand

---

// File: input/fsh/140encounter.fsh

Profile: KLGateway140Encounter
Parent: Encounter
Id: klgateway-140-encounter
Title: "KLGateway140Encounter"
Description: "Encounter for first planned visits and all executed activities in a §140 care pathway"
* identifier ..0
* statusHistory ..0
* class.version ..0
* class.userSelected ..0
* classHistory ..0
* class from EncounterClassCodes (required)
//* type from ExtendedEncounterTypes (required)
* type.coding 0..0
* type.coding.version ..0
* type.coding.display 0..0
* type.coding.userSelected ..0
* type.text ..0
* serviceType ..0
* priority ..0
* subject 1..1
* subject only Reference(klgateway-140-citizen)
* subject ^type.aggregation = #bundled
* episodeOfCare ..0

* extension contains
   BasedOnCarePlanExtension named basedOnCarePlan 0..1
* extension[basedOnCarePlan].valueReference ^type.aggregation = #bundled
* participant ..0
* appointment ..0
* period 1..1
* period.start 1..1
* period.end 1..1
* length ..0
* reasonCode ..0
* reasonReference ..0
* diagnosis ..0
* account ..0
* hospitalization ..0
* location ..0
* serviceProvider ..0
* partOf ..0
* basedOn 0..0

//Danish descriptions
* status ^short = "[DK] kontaktstatus"
* class ^short = "[DK] kontaktklasse"
* period.start ^short = "[DK] kontaktstart"
* period.end ^short = "[DK] kontaktslut"
* subject ^short = "[DK] kontaktsubjekt"
* extension[basedOnCarePlan] ^short = "[DK] kontaktBaseretPå"

Instance: RuddiKontaktUndersoegelse
InstanceOf: klgateway-140-encounter
Title: "RuddiKontaktUndersøgelse"
Description: "Ruddis kontakt, hvor der er udført en terapeutfaglig undersøgelse"
Usage: #example
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-06-02T12:10:00.000Z
* period.end = 2022-06-02T12:40:00.000Z
* subject = Reference(RuddiTestBerggren)
* extension[basedOnCarePlan].valueReference = Reference(RuddiTerapeutfagligUndersoegelse)

Instance: RuddiKontakt1Traening
InstanceOf: klgateway-140-encounter
Title: "RuddiKontakt1Traening"
Description: "Ruddis kontakt, hvor han har første træningsgang, leveret som skærmbesøg"
Usage: #example
* status = http://hl7.org/fhir/encounter-status#finished
* class = $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d "Skærmbesøg"
* period.start = 2022-05-31T10:00:00.000Z
* period.end = 2022-05-31T10:30:00.000Z
* subject = Reference(RuddiTestBerggren)
* extension[basedOnCarePlan].valueReference = Reference(RuddiTraeningsforloeb)

---

// File: input/fsh/140Extensions.fsh

Extension: PreconditionDate
Title: "PreconditionDate"
Description: "Extension for a date that needs to occur before the service requested can be performed"
* value[x] only date
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "ServiceRequest"

Extension: DeliveryType
Title: "DeliveryType"
Description: "Extension for a code that specifies some context of how a treatment-activity is delivered to a patient"
* value[x] only CodeableConcept
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "CarePlan.activity.detail"

Extension: BasedOnServiceRequestExtension
Title:     "basedOnServiceRequestExtension"
Description: "Extension for pointing to the servicerequest, that started an intervention"
* value[x] 1..1
* value[x] only Reference(klgateway-140-servicerequest)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "CarePlan"

Extension: BasedOnCarePlanExtension
Title:     "basedOnCarePlanExtension"
Description: "Extension for pointing to the careplan describing why this encounter is taking place, will be part of R5 without needing the extension"
* value[x] 1..1
* value[x] only Reference(klgateway-140-care-plan or klgateway-140-planned-intervention)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Encounter"

---

// File: input/fsh/140focusCondition.fsh

Profile: KLGateway140FocusCondition
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-condition
Id: klgateway-140-focus-condition
Title: "KLGateway140FocusCondition"
Description: "Conditions which may be used to express the problem of a citizen in Danish municipalities. Mostly used for cross sector use cases."


* code.coding[FSIIIConditionCode] 0..0
* code.coding[SCTConditionCode] 0..0
* code.coding[FFBConditionCode] 0..0
* code.coding[ICPC2code] 0..0


//Specifying datatype of subject
* subject only Reference(klgateway-140-citizen)

//Setting other attributes to 0..0
* identifier 0..0
* clinicalStatus 1..1
* verificationStatus 0..1
* category 0..0
* severity 0..0
* code.coding.userSelected 0..0
* code.coding.version 0..0
* bodySite 0..0
* encounter 0..0
* onset[x] 0..0
* abatement[x] 0..0
* recordedDate 0..0
* recorder 0..0
* asserter 0..0
* note 0..0
* evidence 0..0
* stage 0..0
* extension[conditionLastAssertedDate] 0..0
* extension[notFollowedAnymore] 0..0
* extension[dueTo] 0..0

//Adding shorts, to make danish descriptions available

* clinicalStatus ^short = "[DK] fokusTilstandStatus"
* code.coding ^short = "[DK] fokusTilstandskode"
* code.text ^short = "[DK] fokusTilstandKodetekst"
* subject ^short = "[DK] fokusTilstandsubjekt"


Instance: RuddiAktionsdiagnoseGGOP
InstanceOf: klgateway-140-focus-condition
Title: "RuddiAktionsdiagnoseGGOP"
Description: "Ruddis aktionsdiagnose fra GGOP, hvor man kan se, at han har haft en pertrokantær femurfraktur"
Usage: #example
* code.coding[SKS-D] = urn:oid:1.2.208.176.2.4.12#DS721 "Pertrokantær femurfraktur"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* subject = Reference(RuddiTestBerggren)



---

// File: input/fsh/140incrementalDelivery.fsh

Profile: KLGateway140IncrementalDelivery
Parent: Bundle
Id: klgateway-140-incremental-delivery
Title: "CareIncrementalDelivery"
Description: "Delivery for all delivery reports made since last update (unordered)."
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link ..0
* entry.resource 1..1
* entry.resource only
    KLGateway140DeliveryReport
* entry.resource ^short = "Content constrained to known delivery reports"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0

Instance: TestIncrementalDelivery
InstanceOf: KLGateway140IncrementalDelivery
Description: "Example of an incremental delivery with one delivery report"
* type = #collection
* timestamp = 2020-08-14T00:00:00Z
* entry[+].fullUrl = "https://test.fhir.dk/Bundle/RuddiIndberetningsrapport"
* entry[=].resource = RuddiIndberetningsrapport

---

// File: input/fsh/140organisation.fsh

Profile: KLGateway140Organization
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-organization
Id: klgateway-140-organization
Title: "KLGateway140Organization"
Description: "Organization as expressed in KLGateway for rehabilitation."
* identifier 1..1
* identifier[EAN-ID] 0..0
* identifier[KOMBIT-ORG-ID] 0..1
  * ^short = "[DK] FK-ORG-id"
* identifier[SOR-ID] 0..1
  * ^short = "[DK] SOR-id"
* identifier[Ydernummer] 0..0
* identifier[CVR-ID] 0..0
* identifier[Kommunekode] 0..0
* identifier[Regionskode] 0..0
* active 0..1
* type 0..0
* alias 0..0
* telecom 0..0
* address 0..0
* partOf 0..0
* endpoint 0..0
* contact 0..0

* identifier ^short = "[DK] organisationsid"
* active ^short = "[DK] harAktivJournal"

Instance: AfsenderAfRuddisGGOP
InstanceOf: klgateway-140-organization
Title: "AfsenderAfRuddisGGOP"
Description: "Ortopædkirurgisk afdeling Holbæk sygehus, der er afsender af Ruddis GGOP"
Usage: #example
* identifier.use = #official
* identifier.value = "227871000016001"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: UdfoererAfRuddisRehab
InstanceOf: klgateway-140-organization
Usage: #example
Title: "UdførerAfRuddisGenoptræning"
Description: "Genoptræningscenteret Holbæk kommune, der er udfører af Ruddis genoptræning"
* identifier.use = #official
* identifier.value = "1037801000016003"
* identifier.system = "urn:oid:1.2.208.176.1.1"


---

// File: input/fsh/140plannedIntervention.fsh

Profile: KLGateway140PlannedIntervention
Parent: CarePlan
Id: klgateway-140-planned-intervention
Title: "KLGateway140PlannedIntervention"
Description: "Planned interventions for §140 rehabilitation in Danish Municipalities."

//Requirements
* status ^definition = "Shall be either unknown, entered-in-error, or the status of the intervention at the time of reporting"
* intent = #plan
* activity.detail.status ^definition = "Shall be either unknown, or cancelled, or the activity status of the intervention at the time of reporting"
* basedOn ..1
* basedOn only Reference(klgateway-140-care-plan)
* basedOn ^type.aggregation = #bundled
* subject only Reference(klgateway-140-citizen) //borger
* subject ^type.aggregation = #bundled
* period 1..1
* period.start 1..1 //Bevillingsdato
//period.end er mulig men ikke obligatorisk
* activity 1..1
* activity.outcomeReference only Reference(klgateway-140-encounter) //kontakter
* activity.outcomeReference ^type.aggregation = #bundled
* activity.reference 0..0
* activity.detail 1.. 
* activity.detail.code 1..1 //Indsatskoder niveau 2 og 3
* activity.detail.code.coding ^slicing.discriminator.type = #value
* activity.detail.code.coding ^slicing.discriminator.path = "system"
* activity.detail.code.coding ^slicing.rules = #closed
* activity.detail.code.coding contains level2 0..1 and level3 0..1 MS
* activity.detail.code.coding[level2].system = $FSIII
* activity.detail.code.coding[level2] from KLTrainingInterventionsFSIII
//kl-term update delete two lines above
* activity.detail.code.coding[level3].system = "http://gateway.kl.dk/1.0/CodeSystem/LocallyDefinedInterventions"
* activity.detail.code.coding[level3].code 1..1
* activity.detail.code.coding[level3].display 1..1
* activity.detail.code.coding[level3] ^definition = "Shall contain locally defined code if it is a locally defined level 3 intervention"
* activity.detail.extension contains DeliveryType named deliveryType 1..*
* activity.detail.extension[deliveryType].valueCodeableConcept.coding from DeliveryTypes140 (required)
* activity.detail.reasonCode ..0
* activity.detail.scheduled[x] 0..0
* activity.detail.performer 0..1 //indsatsudfører
* activity.detail.performer only Reference(klgateway-140-organization)
* activity.detail.performer ^type.aggregation = #bundled
* extension contains
   BasedOnServiceRequestExtension named basedOnServiceRequest 0..1

* extension[basedOnServiceRequest].valueReference ^type.aggregation = #bundled

// relation mellem tilstand og indsats
* activity.detail.reasonReference only Reference(klgateway-140-condition)
* activity.detail.reasonReference MS
* activity.detail.reasonReference ^definition = "Reason for this intervention. Must contain all conditions known to be addressed by this intervention"
* activity.detail.reasonReference ^type.aggregation = #bundled

//0..0 kardinaliteter
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* replaces ..0
* partOf ..0
* category ..0
* title ..0
* description ..0
* encounter ..0
* created ..0
* author ..0
* contributor ..0
* careTeam 0..0
* addresses ..0
* supportingInfo ..0
* goal ..0
* activity.outcomeCodeableConcept ..0
* activity.progress ..0
* activity.detail.kind ..0
* activity.detail.instantiatesCanonical ..0
* activity.detail.instantiatesUri ..0
* activity.detail.reasonReference 0..*
* activity.detail.goal ..0
* activity.detail.doNotPerform ..0
// * activity.detail.scheduledString ..0
// * activity.detail.scheduledPeriod ..0
// * activity.detail.scheduledTiming.code 0..0
// * activity.detail.scheduledTiming.event 0..0
// * activity.detail.scheduledTiming.repeat.boundsPeriod.end 0..0
// * activity.detail.scheduledTiming.repeat.frequency 0..0
// * activity.detail.scheduledTiming.repeat.durationMax 0..0
// * activity.detail.scheduledTiming.repeat.boundsDuration 0..0
// * activity.detail.scheduledTiming.repeat.boundsRange 0..0
// * activity.detail.scheduledTiming.repeat.countMax 0..0
// * activity.detail.scheduledTiming.repeat.dayOfWeek 0..0
* activity.detail.statusReason 0..0
* activity.detail.location ..0
* activity.detail.product[x] ..0
* activity.detail.dailyAmount ..0
* activity.detail.quantity ..0
* activity.detail.description ..0
* activity.outcomeReference 0..0
* note ..0

//Danish descriptions
* activity.detail.code.coding ^short = "[DK] indsatsskode"
* period.start ^short = "[DK] indsatsbevillingstid"
* period.end ^short = "[DK] indsatsafslutningstid"
* status ^short = "[DK] indsatsstatus"
* intent ^short = "[DK] indsatshensigt"
* subject ^short = "[DK] indsatssubjekt"
* extension[basedOnServiceRequest] ^short = "[DK] indsatsAnledning"
* activity.detail.reasonReference ^short = "[DK] indsatsbegrundelse"
* activity.detail.status ^short = "[DK] indsatsAktivitetsstatus"
* activity.detail.performer ^short = "[DK] indsatsleverandør"
* basedOn ^short = "[DK] indsatsDelAfPlan"
* activity.detail.extension[deliveryType] ^short = "[DK] indsatsLeveringstype"

* obeys klgateway-140-intervention-1
* obeys klgateway-140-intervention-2


Invariant: klgateway-140-intervention-1
Description: "has a reference to careplan if the intervention is a certain type of training"
Severity: #error
Expression: "activity.detail.code.coding.code = '7f825e3e-1a5c-4249-bf41-9f7171fb6b8a'
    or activity.detail.code.coding.code = '2abe20c7-c0b4-41c1-b397-52acf36499ef'
    or activity.detail.code.coding.code = '58293f63-00d7-4730-8dbc-c784d40f9e23'
    or activity.detail.code.coding.code = '2c661159-1bb3-4af2-bdf1-f3a9927a99e2'
    or activity.detail.code.coding.code = '8d714c98-f23a-4722-8a2f-85c162fe4840'
    or activity.detail.code.coding.code = '66fb32c9-ecc3-484b-be49-f20094be237c'
    or activity.detail.code.coding.code = 'f8ac963c-6ec5-4ec5-bd90-a22fea4e2d16' implies basedOn.exists()"

Invariant: klgateway-140-intervention-2
Description: "does not have a reference to careplan if the intervention is a certain type of intervention"
Severity: #error
Expression: "activity.detail.code.coding.code = '1130ad70-6553-490d-87f8-5e8941687a0c'
    or activity.detail.code.coding.code = 'ba3e17bd-d4aa-4848-acad-25adc8285c19' implies basedOn.empty()"


Instance: RuddiTerapeutfagligUndersoegelse
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiTerapeutfagligUndersøgelse"
Description: "Ruddi's terapeutfaglige undersøgelse"
Usage: #example
* activity.detail.code.coding[level2] = $FSIII#1130ad70-6553-490d-87f8-5e8941687a0c
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-05-23
* period.end = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(RuddiTestBerggren)
* extension[basedOnServiceRequest].valueReference = Reference(RuddiGGOPInformation) 
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(UdfoererAfRuddisRehab)

Instance: RuddiTraening
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiTræning"
Description: "Ruddi's træningsindsats"
Usage: #example
* activity.detail.code.coding[level2] = $FSIII#2abe20c7-c0b4-41c1-b397-52acf36499ef "Fysisk træning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-05-30
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(RuddiTestBerggren)
* extension[basedOnServiceRequest].valueReference = Reference(RuddiGGOPInformation)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(RuddiTraeningsforloeb)

Instance: RuddiFunctionalTraening
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiFundktionsTræning"
Description: "Ruddi's funktions-træningsindsats"
Usage: #example
* activity.detail.code.coding[level2] = $FSIII#58293f63-00d7-4730-8dbc-c784d40f9e23 "Funktionstræning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-05-30
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(RuddiTestBerggren)
* extension[basedOnServiceRequest].valueReference = Reference(RuddiGGOPInformation)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(RuddiTraeningsforloeb)

---

// File: input/fsh/140serviceRequest.fsh

Profile:        KLGateway140ServiceRequest
Parent:         ServiceRequest
Id:             klgateway-140-servicerequest
Title:          "KLGateway140ServiceRequest"
Description:    "Referal used to represent information about the training-referal (GGOP) from a hospital to a Danish municipalities"
//Requirement pertaining to §140
* requester 1..1
* requester only Reference(klgateway-140-organization) //organization used for people from the outside, KLCommonPractitioner for internal requests
* requester ^type.aggregation = #bundled
* code 1..1
* code.coding from ServiceTypes140
* category 1..2
* category.coding from ServiceRequestTypes140
* subject only Reference(klgateway-140-citizen)
* subject ^type.aggregation = #bundled
* authoredOn 1..1
* reasonReference only Reference(klgateway-140-focus-condition) //May be there (140)
* reasonReference ^type.aggregation = #bundled
* replaces 0..1
* replaces only Reference(klgateway-140-servicerequest)
* replaces ^type.aggregation = #bundled
* intent = http://hl7.org/fhir/request-status#plan
* extension contains PreconditionDate named dischargeDate 1..1 MS and
                    $ExtRequestStatusReason named statusReason 0..1 MS
* extension[statusReason].valueCodeableConcept.coding from ServiceRequestStatusReasons140 (required)
* occurrence[x] 0..1
* occurrenceDateTime 0..0
* occurrenceTiming 0..0
* occurrencePeriod 0..1
* occurrencePeriod.start 0..1 MS
* occurrencePeriod.end 0..0

//Setting 0..0 cardinalities
* orderDetail 0..0
* identifier 0..0
* instantiatesCanonical 0..0
* instantiatesUri 0..0
* basedOn 0..0
* requisition 0..0
* priority 0..0
* doNotPerform 0..0
* quantity[x] 0..0
* encounter 0..0
* asNeeded[x] 0..0
* performerType 0..0
* performer 0..0
* locationCode 0..0
* locationReference 0..0
* reasonCode 0..0
* insurance 0..0
* supportingInfo 0..0
* specimen 0..0
* bodySite 0..0
* note 0..0
* patientInstruction 0..0
* relevantHistory 0..0

//Adding shorts for Danish descriptions
* requester ^short = "[DK] anledningAnsvarlig"
* status ^short = "[DK] anledningsStatus"
* intent ^short = "[DK] anledningsHensigt"
* code.coding ^short = "[DK] anledningsIndsats"
* reasonReference ^short = "[DK] anledningsbegrundelse"
* subject ^short = "[DK] anledningsSubjekt"
* authoredOn ^short = "[DK] anledningstid"
* replaces ^short = "[DK] anledningErstatter"
* category ^short = "[DK] anledningTypeAfGGOP"
* extension[dischargeDate] ^short = "[DK] anledningUdskrivningsdato"
* extension[statusReason] ^short = "[DK] anledningÅrsagManglendeAktivitet"
* occurrencePeriod.start ^short = "[DK] anledningTilbudtFørsteKontakt"

* obeys gateway-140-service-request-1

Instance: RuddiGGOPInformation
InstanceOf: klgateway-140-servicerequest
Title: "RuddiGGOPInformation"
Description: "Information fra Ruddis GGOP, der er baggrunden for at igangsætte indsatsen i kommunen"
Usage: #example
* requester = Reference(AfsenderAfRuddisGGOP)
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-status#plan
* code.coding = $KLCommonCodes#7fc66c15-0cb3-4c89-9e18-f3a01e6a6592
* category[0].coding = $KLCommonCodes#ffd81f78-352e-4589-a195-5350dd1df2a4 "almen"
* category[1].coding = $KLCommonCodes#8b962281-2ab6-4b10-9c91-4bac592d6d49 "basal"
* extension[dischargeDate].valueDate = 2022-05-24
* reasonReference = Reference(RuddiAktionsdiagnoseGGOP)
* subject = Reference(RuddiTestBerggren)
* authoredOn = 2022-05-23
* occurrencePeriod.start = 2022-05-28

Invariant: gateway-140-service-request-1
Description: "one of the order detail codes, should always be almen, specialiseret eller rehabilitering"
Severity: #error
Expression: "category.select(coding.code = 'ffd81f78-352e-4589-a195-5350dd1df2a4' or
             coding.code = '0c8e2bfc-1350-45d1-90da-c07e2645d073' or
             coding.code = '83c89857-8fb8-4163-97b1-eb1a56345c29').anyTrue()"

---

// File: input/fsh/aliases.fsh

Alias: $ConditionClinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $ConditionCategory = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $VerificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $KLCommonCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes
Alias: $FSIII = urn:oid:1.2.208.176.2.21
Alias: $ExtRequestStatusReason = http://hl7.org/fhir/StructureDefinition/request-statusReason

---

// File: input/fsh/ruddi.fsh

// Første indberetning
Instance: e87d5e68-e5f3-476f-988f-4efda86b0645
InstanceOf: klgateway-140-delivery-report
Description: "DeliveryReport-Ruddi-1"
Usage: #example
* meta.profile = "http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-delivery-report"
* type = #collection
* timestamp = 2022-05-23T19:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/95ce3be6-dba6-48ab-b5d1-8a25929414dc"
* entry[=].resource = 95ce3be6-dba6-48ab-b5d1-8a25929414dc

* entry[+].fullUrl = "https://test.fhir.dk/Organization/55a0e014-0e97-4c26-8ef2-29d528bfcc46"
* entry[=].resource = 55a0e014-0e97-4c26-8ef2-29d528bfcc46

* entry[+].fullUrl = "https://test.fhir.dk/Organization/7fdd6dc0-3f9f-4914-b34a-7c6495ba0880"
* entry[=].resource = 7fdd6dc0-3f9f-4914-b34a-7c6495ba0880

* entry[+].fullUrl = "https://test.fhir.dk/Condition/51d652a8-0ece-4d1d-8071-7baceb9701b2"
* entry[=].resource = 51d652a8-0ece-4d1d-8071-7baceb9701b2

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22"
* entry[=].resource = 152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a"
* entry[=].resource = 0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a



Instance: 95ce3be6-dba6-48ab-b5d1-8a25929414dc
InstanceOf: klgateway-140-citizen
Description: "Test personen Ruddi Test Berggren, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation."
Usage: #inline
* identifier.use = #official
* identifier.value = "1502779995"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* deceasedBoolean = false
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: 55a0e014-0e97-4c26-8ef2-29d528bfcc46
InstanceOf: klgateway-140-organization
Title: "AfsenderAfRuddisGGOP"
Description: "Ortopædkirurgisk afdeling Holbæk sygehus, der er afsender af Ruddis GGOP"
Usage: #inline
* identifier.use = #official
* identifier.value = "227871000016001"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: 7fdd6dc0-3f9f-4914-b34a-7c6495ba0880
InstanceOf: klgateway-140-organization
Usage: #example
Title: "UdførerAfRuddisGenoptræning"
Description: "Genoptræningscenteret Holbæk kommune, der er udfører af Ruddis genoptræning"
* identifier.use = #official
* identifier.value = "1037801000016003"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: 51d652a8-0ece-4d1d-8071-7baceb9701b2
InstanceOf: klgateway-140-focus-condition
Title: "RuddiAktionsdiagnoseGGOP"
Description: "Ruddis aktionsdiagnose fra GGOP, hvor man kan se, at han har haft en pertrokantær femurfraktur"
Usage: #inline
* code.coding[SKS-D] = urn:oid:1.2.208.176.2.4.12#DS721 "Pertrokantær femurfraktur"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)

Instance: 152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22
InstanceOf: klgateway-140-servicerequest
Title: "RuddiGGOPInformation"
Description: "Information fra Ruddis GGOP, der er baggrunden for at igangsætte indsatsen i kommunen"
Usage: #inline
* requester = Reference(55a0e014-0e97-4c26-8ef2-29d528bfcc46)
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-status#plan
* code.coding = $KLCommonCodes#7fc66c15-0cb3-4c89-9e18-f3a01e6a6592
* category[0].coding = $KLCommonCodes#ffd81f78-352e-4589-a195-5350dd1df2a4 "almen"
* category[1].coding = $KLCommonCodes#8b962281-2ab6-4b10-9c91-4bac592d6d49 "basal"
* extension[dischargeDate].valueDate = 2022-05-24
* reasonReference = Reference(51d652a8-0ece-4d1d-8071-7baceb9701b2)
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* authoredOn = 2022-05-23
* occurrencePeriod.start = 2022-05-28

Instance: 0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiTerapeutfagligUndersøgelse"
Description: "Ruddi's terapeutfaglige undersøgelse"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#1130ad70-6553-490d-87f8-5e8941687a0c "Terapeutfaglig udredning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-05-23
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* extension[basedOnServiceRequest].valueReference = Reference(152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22) 
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#scheduled
* activity.detail.performer = Reference(7fdd6dc0-3f9f-4914-b34a-7c6495ba0880)

//2nd

Instance: 4b9443a2-7231-4387-8e3d-614bf193df49
InstanceOf: klgateway-140-delivery-report
Description: "DeliveryReport-Ruddi-2"
Usage: #example
* meta.profile = "http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-delivery-report"
* type = #collection
* timestamp = 2022-05-28T19:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/95ce3be6-dba6-48ab-b5d1-8a25929414dc" //som tidligere
* entry[=].resource = 95ce3be6-dba6-48ab-b5d1-8a25929414dc

* entry[+].fullUrl = "https://test.fhir.dk/Organization/55a0e014-0e97-4c26-8ef2-29d528bfcc46" //som tidligere
* entry[=].resource = 55a0e014-0e97-4c26-8ef2-29d528bfcc46

* entry[+].fullUrl = "https://test.fhir.dk/Organization/7fdd6dc0-3f9f-4914-b34a-7c6495ba0880" //som tidligere
* entry[=].resource = 7fdd6dc0-3f9f-4914-b34a-7c6495ba0880

* entry[+].fullUrl = "https://test.fhir.dk/Condition/51d652a8-0ece-4d1d-8071-7baceb9701b2" //som tidligere
* entry[=].resource = 51d652a8-0ece-4d1d-8071-7baceb9701b2

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22" //som tidligere
* entry[=].resource = 152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a" //opdateret fordi den afsluttes
* entry[=].resource = 0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a-v2

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/c4558767-7524-4aa6-8280-bf042d5d3e85" //undersøgelseskontakten
* entry[=].resource = c4558767-7524-4aa6-8280-bf042d5d3e85

* entry[+].fullUrl = "https://test.fhir.dk/Condition/a6ed3134-f27a-41bb-976c-b627af1c85bb" //Tilstand mobilitet og bevægelse
* entry[=].resource = a6ed3134-f27a-41bb-976c-b627af1c85bb

* entry[+].fullUrl = "https://test.fhir.dk/Condition/0b9adc44-6ab6-4060-8adc-a723e7da6608" //Tilstand forflytning
* entry[=].resource = 0b9adc44-6ab6-4060-8adc-a723e7da6608

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1c74e3e8-e038-4182-a545-d86a9f064d44" //RuddiTræningsforløb
* entry[=].resource = 1c74e3e8-e038-4182-a545-d86a9f064d44

* entry[+].fullUrl = "https://test.fhir.dk/Careplan/663797c4-1024-4971-978c-c02c5caf8861" //Ruddi fysisk træning
* entry[=].resource = 663797c4-1024-4971-978c-c02c5caf8861


Instance: 0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a-v2
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiTerapeutfagligUndersøgelse"
Description: "Ruddi's terapeutfaglige undersøgelse afsluttes"
Usage: #inline
* id = "0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a"
* activity.detail.code.coding[level2] = $FSIII#1130ad70-6553-490d-87f8-5e8941687a0c "Terapeutfaglig udredning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-05-23
* period.end = 2022-05-28
* status = http://hl7.org/fhir/request-status#completed
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* extension[basedOnServiceRequest].valueReference = Reference(152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22) 
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(7fdd6dc0-3f9f-4914-b34a-7c6495ba0880)

Instance: c4558767-7524-4aa6-8280-bf042d5d3e85
InstanceOf: klgateway-140-encounter
Title: "RuddiKontaktUndersøgelse"
Description: "Ruddis kontakt, hvor der er udført en terapeutfaglig undersøgelse"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-05-28T12:10:00.000Z
* period.end = 2022-05-28T12:40:00.000Z
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* extension[basedOnCarePlan].valueReference = Reference(0735f195-a0fc-4f1f-b7be-5b3f6b8fee4a-v2)

Instance: a6ed3134-f27a-41bb-976c-b627af1c85bb
InstanceOf: klgateway-140-condition
Title: "RuddiTilstandBevægelse"
Description: "Ruddis Tilstand vedrørende mobilitet og bevægelse"
Usage: #inline
* code.coding =  $FSIII#dd41df82-3c13-4523-b9c5-e83676425299 "Mobilitet og bevægelse"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-05-28
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* category.coding = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item

Instance: 0b9adc44-6ab6-4060-8adc-a723e7da6608
InstanceOf: klgateway-140-condition
Title: "RuddiTilstandForflytteSig"
Description: "Ruddis Tilstand vedrørende at forflytte sig"
Usage: #inline
* code.coding =  $FSIII#86e1982c-f459-4658-9071-e4bf3453a687 "Forflytte sig"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-05-28
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* category.coding = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item

Instance: 1c74e3e8-e038-4182-a545-d86a9f064d44
InstanceOf: klgateway-140-care-plan
Title: "RuddiTræningsforløb"
Description: "Ruddi's træningsforløb"
Usage: #inline
* category = $KLCommonCodes#f15b2663-94d9-4d0c-a5de-d8bd8e1e4ebb
* period.start = 2022-05-28
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* extension[basedOnServiceRequest].valueReference = Reference(152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(7fdd6dc0-3f9f-4914-b34a-7c6495ba0880)

Instance: 663797c4-1024-4971-978c-c02c5caf8861
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiTræning"
Description: "Ruddi's træningsindsats"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#2abe20c7-c0b4-41c1-b397-52acf36499ef "Fysisk træning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-05-28
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(1c74e3e8-e038-4182-a545-d86a9f064d44)

//3rd to sixth

Instance: 4a391f69-a909-4a79-92bd-1b0f812dc52a
InstanceOf: klgateway-140-delivery-report
Description: "DeliveryReport-Ruddi-6"
Usage: #example
* meta.profile = "http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-delivery-report"
* type = #collection
* timestamp = 2022-06-21T19:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/95ce3be6-dba6-48ab-b5d1-8a25929414dc" //som tidligere
* entry[=].resource = 95ce3be6-dba6-48ab-b5d1-8a25929414dc

* entry[+].fullUrl = "https://test.fhir.dk/Organization/55a0e014-0e97-4c26-8ef2-29d528bfcc46" //som tidligere
* entry[=].resource = 55a0e014-0e97-4c26-8ef2-29d528bfcc46

* entry[+].fullUrl = "https://test.fhir.dk/Organization/7fdd6dc0-3f9f-4914-b34a-7c6495ba0880" //som tidligere
* entry[=].resource = 7fdd6dc0-3f9f-4914-b34a-7c6495ba0880

* entry[+].fullUrl = "https://test.fhir.dk/Condition/51d652a8-0ece-4d1d-8071-7baceb9701b2" //som tidligere
* entry[=].resource = 51d652a8-0ece-4d1d-8071-7baceb9701b2

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22" //som tidligere
* entry[=].resource = 152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1c74e3e8-e038-4182-a545-d86a9f064d44" //RuddiTræningsforløb, som tidligere
* entry[=].resource = 1c74e3e8-e038-4182-a545-d86a9f064d44

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/955eda13-0ee6-4de0-91d6-598ed92cef5e" //Kontakt på træningsforløb
* entry[=].resource = 955eda13-0ee6-4de0-91d6-598ed92cef5e

Instance: 955eda13-0ee6-4de0-91d6-598ed92cef5e
InstanceOf: klgateway-140-encounter
Title: "RuddiKontakt1Traening"
Description: "Ruddis kontakt, hvor han har fjerde træningsgang"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-06-21T10:20:00.000Z
* period.end = 2022-06-21T11:20:00.000Z
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* extension[basedOnCarePlan].valueReference = Reference(1c74e3e8-e038-4182-a545-d86a9f064d44)


//7th

Instance: 9960b8dc-5ebf-4166-83d7-b042bcc6aca5
InstanceOf: klgateway-140-delivery-report
Description: "DeliveryReport-Ruddi-7"
Usage: #example
* meta.profile = "http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-delivery-report"
* type = #collection
* timestamp = 2022-06-21T19:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/95ce3be6-dba6-48ab-b5d1-8a25929414dc" //som tidligere
* entry[=].resource = 95ce3be6-dba6-48ab-b5d1-8a25929414dc

* entry[+].fullUrl = "https://test.fhir.dk/Organization/7fdd6dc0-3f9f-4914-b34a-7c6495ba0880" //som tidligere
* entry[=].resource = 7fdd6dc0-3f9f-4914-b34a-7c6495ba0880

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/c8be2dc6-caa3-4c7e-81e8-0347896fb4d3" //PeterTræningsforløb
* entry[=].resource = c8be2dc6-caa3-4c7e-81e8-0347896fb4d3

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/8f0db8cd-af6e-4221-9aca-01da21706779" //PeterTræningsindsats
* entry[=].resource = 8f0db8cd-af6e-4221-9aca-01da21706779

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3" //PeterTræningsindsats
* entry[=].resource = abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3


Instance: c8be2dc6-caa3-4c7e-81e8-0347896fb4d3
InstanceOf: klgateway-140-care-plan
Title: "PetersTræningsforløbFejl"
Description: "Peters's træningsforløb som er en fejl"
Usage: #inline
* category = $KLCommonCodes#f15b2663-94d9-4d0c-a5de-d8bd8e1e4ebb
* period.start = 2022-06-22
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(7fdd6dc0-3f9f-4914-b34a-7c6495ba0880)

Instance: 8f0db8cd-af6e-4221-9aca-01da21706779
InstanceOf: klgateway-140-planned-intervention
Title: "PetersFysisikeTræningFejl"
Description: "Peters fysiske træning, som er en fejl"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#2abe20c7-c0b4-41c1-b397-52acf36499ef "Fysisk træning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-06-22
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(c8be2dc6-caa3-4c7e-81e8-0347896fb4d3)

Instance: abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3
InstanceOf: klgateway-140-planned-intervention
Title: "PetersFysisikeTræningFejl"
Description: "Peters fysiske træning, som er en fejl"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#58293f63-00d7-4730-8dbc-c784d40f9e23 "Funktionstræning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-06-22
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(c8be2dc6-caa3-4c7e-81e8-0347896fb4d3)

Instance: c2f75bbf-2027-41bf-b597-de5e242f2b3d
InstanceOf: klgateway-140-delivery-report
Description: "DeliveryReport-Ruddi-8"
Usage: #example
* meta.profile = "http://fhir.kl.dk/rehab/StructureDefinition/klgateway-140-delivery-report"
* type = #collection
* timestamp = 2022-06-23T19:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/95ce3be6-dba6-48ab-b5d1-8a25929414dc" //som tidligere
* entry[=].resource = 95ce3be6-dba6-48ab-b5d1-8a25929414dc

* entry[+].fullUrl = "https://test.fhir.dk/Organization/55a0e014-0e97-4c26-8ef2-29d528bfcc46" //som tidligere
* entry[=].resource = 55a0e014-0e97-4c26-8ef2-29d528bfcc46

* entry[+].fullUrl = "https://test.fhir.dk/Organization/7fdd6dc0-3f9f-4914-b34a-7c6495ba0880" //som tidligere
* entry[=].resource = 7fdd6dc0-3f9f-4914-b34a-7c6495ba0880

* entry[+].fullUrl = "https://test.fhir.dk/Condition/51d652a8-0ece-4d1d-8071-7baceb9701b2" //som tidligere
* entry[=].resource = 51d652a8-0ece-4d1d-8071-7baceb9701b2

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22" //som tidligere
* entry[=].resource = 152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22

* entry[+].fullUrl = "https://test.fhir.dk/Condition/a6ed3134-f27a-41bb-976c-b627af1c85bb" //Tilstand mobilitet og bevægelse, opdateret
* entry[=].resource = a6ed3134-f27a-41bb-976c-b627af1c85bb-v2

* entry[+].fullUrl = "https://test.fhir.dk/Condition/0b9adc44-6ab6-4060-8adc-a723e7da6608" //Tilstand forflytning, opdateret
* entry[=].resource = 0b9adc44-6ab6-4060-8adc-a723e7da6608-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1c74e3e8-e038-4182-a545-d86a9f064d44" //RuddiTræningsforløb, opdateret
* entry[=].resource = 1c74e3e8-e038-4182-a545-d86a9f064d44-v2

* entry[+].fullUrl = "https://test.fhir.dk/Careplan/663797c4-1024-4971-978c-c02c5caf8861" //Ruddi fysisk træning, opdateret
* entry[=].resource = 663797c4-1024-4971-978c-c02c5caf8861-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/c8be2dc6-caa3-4c7e-81e8-0347896fb4d3" //Peters Træningsforløb, opdateret
* entry[=].resource = c8be2dc6-caa3-4c7e-81e8-0347896fb4d3-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/8f0db8cd-af6e-4221-9aca-01da21706779" //Peters Træningsindsats, opdateret
* entry[=].resource = 8f0db8cd-af6e-4221-9aca-01da21706779-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3" //Peters Træningsindsats, opdateret
* entry[=].resource = abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3-v2

Instance: a6ed3134-f27a-41bb-976c-b627af1c85bb-v2
InstanceOf: klgateway-140-condition
Title: "RuddiTilstandBevægelse"
Description: "Ruddis Tilstand vedrørende mobilitet og bevægelse"
Usage: #inline
* id = "a6ed3134-f27a-41bb-976c-b627af1c85bb"
* code.coding =  $FSIII#dd41df82-3c13-4523-b9c5-e83676425299 "Mobilitet og bevægelse"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-05-28
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)

Instance: 0b9adc44-6ab6-4060-8adc-a723e7da6608-v2
InstanceOf: klgateway-140-condition
Title: "RuddiTilstandForflytning"
Description: "Ruddis Tilstand vedrørende at forflytte sig"
Usage: #inline
* id = "0b9adc44-6ab6-4060-8adc-a723e7da6608"
* code.coding =  $FSIII#86e1982c-f459-4658-9071-e4bf3453a687 "Forflytte sig"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-05-28
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)

Instance: 1c74e3e8-e038-4182-a545-d86a9f064d44-v2
InstanceOf: klgateway-140-care-plan
Title: "RuddiTræningsforløb"
Description: "Ruddi's træningsforløb"
Usage: #inline
* id = "1c74e3e8-e038-4182-a545-d86a9f064d44"
* category = $KLCommonCodes#f15b2663-94d9-4d0c-a5de-d8bd8e1e4ebb
* period.start = 2022-05-28
* period.end = 2022-06-23
* status = http://hl7.org/fhir/request-status#revoked
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* extension[basedOnServiceRequest].valueReference = Reference(152a1f8f-db33-4fa4-b5ea-c6f4e5cebd22)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#cancelled
* activity.detail.performer = Reference(7fdd6dc0-3f9f-4914-b34a-7c6495ba0880)
* activity.detail.statusReason = $KLCommonCodes#a3f2bd01-078b-486e-81be-797d192ad7bd "Aktivt fravalg pga. anden træning"

Instance: 663797c4-1024-4971-978c-c02c5caf8861-v2
InstanceOf: klgateway-140-planned-intervention
Title: "RuddiTræning"
Description: "Ruddi's træningsindsats"
Usage: #inline
* id = "663797c4-1024-4971-978c-c02c5caf8861"
* activity.detail.code.coding[level2] = $FSIII#2abe20c7-c0b4-41c1-b397-52acf36499ef "Fysisk træning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-05-28
* period.end = 2022-06-23
* status = http://hl7.org/fhir/request-status#revoked
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#cancelled
* basedOn = Reference(1c74e3e8-e038-4182-a545-d86a9f064d44)

Instance: c8be2dc6-caa3-4c7e-81e8-0347896fb4d3-v2
InstanceOf: klgateway-140-care-plan
Title: "Peters TræningsforløbFejl"
Description: "Peters træningsforløb som er en fejl"
Usage: #inline
* id = "c8be2dc6-caa3-4c7e-81e8-0347896fb4d3"
* category = $KLCommonCodes#f15b2663-94d9-4d0c-a5de-d8bd8e1e4ebb
* period.start = 2022-06-22
* status = http://hl7.org/fhir/request-status#entered-in-error
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(7fdd6dc0-3f9f-4914-b34a-7c6495ba0880)

Instance: 8f0db8cd-af6e-4221-9aca-01da21706779-v2
InstanceOf: klgateway-140-planned-intervention
Title: "Peters FysisikeTræningFejl"
Description: "Peters fysiske træning, som er en fejl"
Usage: #inline
* id = "8f0db8cd-af6e-4221-9aca-01da21706779"
* activity.detail.code.coding[level2] = $FSIII#2abe20c7-c0b4-41c1-b397-52acf36499ef "Fysisk træning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-06-22
* status = http://hl7.org/fhir/request-status#entered-in-error
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(c8be2dc6-caa3-4c7e-81e8-0347896fb4d3)

Instance: abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3-v2
InstanceOf: klgateway-140-planned-intervention
Title: "Peters FysiskeTræningFejl"
Description: "Peters fysiske træning, som er en fejl"
Usage: #inline
* id = "abf3df7f-8b61-4c01-89dd-ac6ca9c58ae3"
* activity.detail.code.coding[level2] = $FSIII#58293f63-00d7-4730-8dbc-c784d40f9e23 "Funktionstræning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-06-22
* status = http://hl7.org/fhir/request-status#entered-in-error
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(95ce3be6-dba6-48ab-b5d1-8a25929414dc)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* basedOn = Reference(c8be2dc6-caa3-4c7e-81e8-0347896fb4d3)

---

