File: repos/hl7dk_SLASH_kl-gateway-prevention/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: kl.dk.fhir.prevention
canonical: http://fhir.kl.dk/prevention
name: KLGatewayPrevention
description: Danish municipalities implementation guide for reporting §119 disease prevention and health promotion
status: active
version: 2.1.0
fhirVersion: 4.0.1
copyrightYear: 2023+
releaseLabel: Release #ci-build
publisher:
  name: Kommunernes Landsforening
  url: http://kl.dk
dependencies:
  hl7.fhir.dk.core: 3.2.0
  #  uri: https://hl7.dk/fhir/core
  #  version: 2.3.0
  kl.dk.fhir.term: 2.1.0
# kl-term update
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Artifacts: artifacts.html
  Example: example.html


---

// File: input/pagecontent/index.md

# KLGatewayPrevention
This implementation guide describes the delivery of §119 prevention/health promotion data to KL Gateway. The data originates from the documentation made by health center employees in the Danish municipalities.The reporting aims for compliance with the Danish core profiles and the current work on a shared information model (FKI) for data in the Danish municipalities.  

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
This model is used to represent when a municipality recieves a referal or request for prevention/health promotion according to §119 in the health act.

##### Attributes
* A reference to the organization that requests the intervention
* The intervention being requested
* The reason for the referal expressed as a reference to FocusCondition
* A reference to the citizen
* The time of the referal/request
* A reference to the referal/request that this one replaces
* Two FHIR status attributes (status and intent)

##### Validation
* A reference to the organization may exist. It is not required for requests recieved by phone, only when the organization code may be drawn directly from a MedCom message.
* The code for the intervention being requested should always be present and fixed to 'Sundhedsfremme og forebyggelse'
* One or more references to FocusCondition may be present. It is only nessesary to report these, if they can be drawn directly from the MedCom message.
* One and only one reference to the citizen may be present.
* The time of the referal/request is mandatory
* A reference to a replaced referal/request may be present.
* Both FHIR statuses are mandatory. Each of them should be drawn from the appropriate standard FHIR-ValueSet 

## FocusCondition
This model holds a diagnosiscode, as it is reported to the municipality as part of the request for prevention/health promotion from a hospital or general practitioner.

##### Attributes
* A diagnosis code
* A diagnosis text
* A reference to the citizen
* Two FHIR status attributes

##### Validation
* One diagnosis code may exists and should be drawn from SKS or ICPC2
* One diagnosis text may exist
* One and only one reference to the citizen exists
* One FHIR status is mandatory and should be drawn from the appropriate standard FHIR-ValueSet. The other not mandatory, but it is needed for reporting entered-in-error.

## PlannedIntervention
This model holds information about prevention/health promotion interventions planned for a citizen.

##### Attributes
* A FSIII intervention code
* A delivery type code that express whether the intervention is delivered in a group or individually
* The time where the intervention was granted
* The time where the intervention was stopped
* A reference to the Citizen
* A reference to the ServiceRequest, that started the intervention
* The reason for the intervention expressed as a reference to Condition
* A reference to the organization that delivers the intervention
* Three FHIR status attributes (status, intent, activity.detail.status)
* A reference to the care plan that this planned intervention is part of

##### Validation
* One and only one FSIII intervention code may be present and it should be drawn from valid §119 FSIII interventions as expressed by the ValueSet
* One and only one delivery type code, which should be drawn from the appropriate ValueSet 
* One and only one time for when the intervention was granted
* The time where the intervention was stopped may be present
* One and only one reference to the Citizen exists
* A reference to the ServiceRequest may be present
* A reference to one or more Conditions may exist, but are not required
* One and only one reference to the organization that delivers the intervention exists
* All FHIR statuses are mandatory. Each of them should be drawn from the appropriate standard FHIR-ValueSet.
* The reference to the care plan is mandatory if the intervention is repeating such as 'Madlavning i praksis'.

## CarePlan
The CarePlan is used whenever a prevention/health promotion care pathway is planned for a citizen in Danish municipalities. Care plan is a way to describe when a number of planned interventions are delivered together with a common schedule.

##### Attributes
* A reference to the ServiceRequest, that started the CarePlan
* A category code, which can be either 'Opfølgningsforløb efter §119' or 
'Interventionsforløb efter §119'
* The time where the CarePlan was granted
* The time where the CarePlan was stopped
* A reference to the Citizen
* An explaination for cancelling the CarePlan before its completion
* A reference to the organization that delivers the intervention
* Three FHIR status attributes (status, intent, activity.detail.status)

##### Validation
* One and only one category code may be present and it should be drawn from the associated ValueSet.
* One and only one time for when the care plan was granted
* The time where the care plan was stopped may be present
* One and only one reference to the Citizen exists
* One and only one explaination for cancelling the care plan before its completion shall exist if and only if the status is 'cancelled' or 'stopped'. Else it is prohibited.
* A reference to the ServiceRequest that started the CarePlan is optional
* One and only one reference to the organization that delivers the intervention exists
* All FHIR statuses are mandatory. Each of them should be drawn from the appropriate standard FHIR-ValueSet

## Encounter
Information about whenever a citizen meets the prevention/health promotion staff in a Danish municipality context.

##### Attributes
* Encounter class. The attriute holds a code which describe the place of delivery e.g. home visit or ambulatory.
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
This model contains information about FSIII conditions. They should be reported as long as a condition is true and active, for a living citizen that recieves §119 prevention/health promotion interventions in Danish municipalities.

##### Attributes
* A FSIII condition code
* The time where the condition was reported
* A reference to the Citizen
* A condition-focus attribute
* Two FHIR statuses (clinicalStatus and verificationStatus)

##### Validation
* One and only one FSIII condition code may be present and it should be drawn from valid §119 FSIII conditions as expressed by the ValueSet.
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

// File: input/pagecontent/StructureDefinition-klgateway-119-care-plan-intro.md

### Scope and usage
The CarePlan for §119 is used whenever a prevention/health promotion care pathway is planned for a citizen in Danish municipalities. Care pathway or plan is a way to describe when a number of planned interventions are delivered together with a common schedule.

The two types of plan in §119 are 'Intervention efter §119' and 'Opfølgningsforløb efter §119' and one of these two codes should be documented in CarePlan.category.

It is important to distiguish correctly between the dates and times stated in the model. CarePlan.period.start is when the CarePlan was authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occured and the status is 'completed', then it is the actual end-date. Notice that end-date is not mandatory to report. All dates may be repported with or without time of day.

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. CarePlan.intent is always 'plan' in this implementation guide. CarePlan status should at least distiguish between 'unknown' and 'entered-in-error', but the actual status of the care plan may also be reported. Note that the meaning of 'active' is "ready to be acted upon", so it does not signify that the first activity has occured.

CarePlan.activity.detail.status is also mandatory, and all the statuses in the FHIR ValueSet may be used. It is recommended not to use 'entered-in-error' - if the CarePlan is entered-in-error use CarePlan.status. To get the needed data-quality, the detail-status should at least distinguish between 'unknown' and 'cancelled'. Although it is better to use the appropriate FHIR-statuses, 'unknown' is permitted from the time where the care plan occurs in the record until its completion. 'Cancelled' (or 'stopped') are mandatory, if an care plan is cancelled. It is mandatory to report cancelled care plans, so that the reason for the cancellation can inform the dataset. This is done using CarePlan.activity.detail.statusReason, and a set of codes that represents different reasons for the cancellation. The codes are as follows:

* 'Hændelse medfører ophør'
* 'Borger har ikke henvendt sig eller er udeblevet'
* 'Ikke yderligere behov (borger-vurderet)'
* 'Ikke yderligere behov (fagperson-vurderet)' 
* 'Aktivt fravalg'
    * 'Aktivt fravalg pga. anden sygdom'
    * 'Aktivt fravalg pga. økonomi ifm. transport'
    * 'Aktivt fravalg pga. logisik ifm. transport' 
    * 'Aktivt fravalg pga. anden træning'

It is premitted to use the code 'Aktivt fravalg' for reporting, but the more detailed codes, though not mandatory, provides for a more nuanced dataset.

CarePlan.subject references the citizen. CarePlan.activity.detail.performer is the organisation that carries out the care plan (leverandør).

Different reasons for changing a CarePlan may exist, and here we provide guidance for how it should be reproted:
* Errors should be corrected by reporting the same CarePlan again with the entered-in-error status. And reporting the correct one with a new Id.
* If cancelled, set the CarePlan.activity.detail.status and CarePlan.activity.detail.statusreason and report the Careplan again with the same Id as used earlier.
* If the timing is changing, it is most likely because a status has shown an new or extra added need of the citizen. Report this in a new CarePlan with a new start-date, rather than correcting the timing in the existing plan. This goes for PlannedInterventions that references the CarePlan as well. 

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


---

// File: input/pagecontent/StructureDefinition-klgateway-119-citizen-intro.md

### Scope and usage
klgateway-119-citizen is used to identify the subject of a prevention/health promotion reporting by the personal id number (CPR-nummer) and the managing organization that acts as the custodian of the reported data. The personal id number must be an official Danish CPR-nummer without hyphen, and the SOR code must be an official SOR code.

The managing organization is given by its SOR code. For most municipalities this will be the code for the municipality, but if a municipality delivers services covered by FSIII in different departments using different record systems (thus having mulitple custodians) the SOR codes of the department that acts as custodian is used.

Patient.deceasedBoolean is a statement of whether the citizen is alive or dead.

Patient.active is optional and assumed true, if not given. Patient.active = false is used to report  entered-in-error. However, this option should only be used, if the patient is fully unknown to the municipality system, and should never have been in the system at all.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgerCprNummer|Officielt cpr-nummer på borgeren|Patient.identifier.value|
|borgerErDød|boolesk værdi der er sand hvis borgeren er død|Patient.deceasedBoolean|
|borgerJournalførendeOrganisation|Organisation som ejer journalen med oplysninger|Patient.managingOrganization.identifier.value|
|borgerHarAktivJournal|Angiver om borger har en aktiv journal i den journalførende organisation eller ej|Patient.active|


---

// File: input/pagecontent/StructureDefinition-klgateway-119-condition-intro.md

### Scope and usage
A klgateway-119-condition is reported as long as a condition is true and active, for a living citizen that recieves §119 prevention/health promotion interventions in Danish municipalities.

Conditions are always defined by Condition.code, which originates from FSIII. Only conditions related to Prevention SUL §119 (FSIII) are allowed.

Condition.recordedDate is the date where the condition was first recorded, NOT the date where the problem was first known to be present.

Condition.clinicalStatus should be populated with the value 'active' if the citizen has the condition, and inactive if the citizen no longer has the condition. Condition.verificationStatus should be able to ditiguish between 'confirmed' and 'entered-in-error'. clinicalStatus is mandatory, and it is a good idea to always provide the verificationStatus. If not populated, the verificationStatus is assumed to be “confirmed”.

Condition.category is, in this implementation, used as a way to determine whether the condition is in focus in a professional context. In focus means that this condition is solely or partially the reason why interventions are performed in the professional context. If a condition is "in focus" Condition.category is populated with the value "problem-list-item". An empty Condition.category means that the focus have not been considered (if it is the first version of a condition).

Ending a condition have two meanings. The first is that the citizen no longer has the condition e.g. a weight-problem is no longer there. In this case, Condition.clinicalStatus=inactive. The second meaning of "ended" is that the condition falls out of focus in a professional context e.g. if the citizen moves, or another professional group takes over the care for the citizen. In this case, the Condition.category looses its "problem-list-item" flag. The idea is to state that from a citizen viewpoint the condition has not changed, but in this professional context it is no longer in focus.

To sum up, A condition should be reported to Kl-gateway in the first report after it first occurs in the record. The condition should be reported again if it changes. In this implementation, it changes under two circumstances:
*  The citizen does not have the problem any more. In this case, set Condition.clinicalStatus to inactive and report this condition to KL-Gateway in the next report.
* The citizen still has the problem, but the prevention/health promotion unit isn't doing anything more about it because the case is closed. In this case, remove the category with the problem-list-item flag from the model, and report this condition to KL-Gateway in the next report.

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

// File: input/pagecontent/StructureDefinition-klgateway-119-delivery-report-intro.md

## Scope and usage
This model is used to represent the reporting of prevention/health promotion deliverd by the municipalities according to §140 in the health act.

The report is a FHIR Bundle that allows different ressources to be grouped and handled as a unit. The ressources that are grouped in this bundle is one, and only one klgateway-119-citizen, together with the content that have changed since the last reporting. The content can be of all the types that are present as profiles in this implementation guide.

One and only one citizen is included in the report in Bundle.entry[citizen]. The citizen resssource should be included in the bundle, together with its url. 

The content is included in the report in all other entries. Each of these entries also includes a ressource and its url.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indberetningsrapportBorger|Indberetningsrapportens borger|Bundle.entry[citizen]|
|indberetningsrappprtIndhold|Hver af indberetningsrapportens indholds-ressourcer|entry[content]|

---

// File: input/pagecontent/StructureDefinition-klgateway-119-encounter-intro.md

### Scope and usage
klgateway-119-encounter is used whenever a citizen meets the prevention/health promotion staff in a Danish municipality context.

In the context of the prevention/health promotion reporting, all Encounter.status values may be used, but not all are mandatory. The mandatory part is:
* To report all carried out encounters. For encounters carried out, use Encounter.status 'finished'.
* To report errors using status 'entered-in-error'

Encounter.class is mandatory in FHIR. In Danish municipalities, the values are used as follows:
* Visits in citizens homes have the code 'HH' home health, the code is also used for services that are not strictly health related e.g. help with cleaning. This code is also used, even if the activities stretch outside the citizens residence e.g. a physiotherapist that want to see a citizen walk outside, or a social worker helping with shopping activities.
* Sessions where the citizens visit municipality facilities e.g. for training og cooking class have the code "AMB" ambulatory.
* For telehealth/telecare encounters, where the patient is contacted by telephone, by teleconference or e-mail, the code is 'VR' virtual.

Encounters can also be related to the CarePlan or PlannedIntervention on which they are a delivery. Use Encounter.extension[basedOnCarePlan].

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
|borgerkontaktBaseretPå|Det indsatsforløb eller indsats, der er grunden til at denne kontakt udføres|Encounter.extension:basedOnCarePlan|

---

// File: input/pagecontent/StructureDefinition-klgateway-119-focus-condition-intro.md

### Scope and usage
The  kl-gateway-119-focus-condition holds a diagnosiscode, as it is reported to the municipality in the request (XREF15) for prevention/health promotion from a Hospital or General practitioner using SKS (ICD10), ICPC2 or text.

Each of the codes Henvisningsdiagnosen_i_kode and tillaegsdiagnose_01_i_kode from XREF15 should typically each result in its own instance of kl-gateway-119-focus-condition. The one exception is described in the following: 

In FHIR each 'whole meaning' should have its own instance of kl-gateway-119-focus-condition. A 'whole meaning' may be a single diagnosis code OR a diagnosis code with add-on-codes (tillægskoder) e.g. DK257+MN02BA01 means that a hospital patient has a chronic ulcer caused by the intake of acetylsalicylacid. They are a 'whole meaning' because the codes would loose their meaning if represented in two different focus-condition instanses. The code should be represented in Condition.code. Be aware that the only add-on codes that should be represented this way is where Henvisnings_tillaegsdiagnosekodes_type attribute of XREF15 equals 'tillaegsdiagnose'.

It is not very common yet that SKS or ICPC2 codes are send to the municipality, as a result a text can be used to represent the condition as well, in this case the attribute Henvisningsdiagnosekodens_t
ype/Henvisnings_tillaegs_diagnosens_art equals 'uspecificeretkode' or no value is given. In this case, populate Condition.code.text with the content of Henvisningsdiagnosens_betydning_eller_fri_tekst/Henvisnings_tillaegsdiagnose_i_tekst.

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

// File: input/pagecontent/StructureDefinition-klgateway-119-organization-intro.md

### Scope and usage
The organization inherits its basic structure from dk-core. When it is used in KL gateway, identifiers are reported. The identifier can be either a SOR-id or an FK-org code.

Organization.active is optional and assumed true, if not given. Organization.active = false is used to report  entered-in-error. However, this option should only be used, if the Organization is fully unknown to the municipality system, and should never have been in the system at all.

Be aware that in the context of KL gateway, the managing organization (the municipality keeping the record) is represented in the [citizen profile]( StructureDefinition-klgateway-119-citizen.html), NOT using this organization profile. The organization profile is used to represent other organizations such as general practitioners and hospitals sending service requests.

### Conversions between Danish information model and FHIR-profile
Organization svarer til en type af Aktør i den fælleskommunale rammearkitektur.
nedenstående tabel definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|organisationsid|Id på organisationen der enten er en SOR kode eller et FK-Org id|Organization.identifier|
|organisationHarAktivJournal|Angiver om organisationen har en aktiv journal i den journalførende organisation eller ej|Organization.active|

---

// File: input/pagecontent/StructureDefinition-klgateway-119-planned-intervention-intro.md

### Scope and usage
The PlannedIntervention for §119 is used whenever a prevention/health promotion intervention is planned for a citizen in Danish municipalities.

CarePlan.activity.detail.code.coding holds the intervention code, which has to come from FSIII. Some interventions can be delivered in a group or individually. The code should be chosen accordingly.

It is important to distiguish correctly between the dates and times stated in the model. CarePlan.period.start is when the PlannedIntervention was authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occured and the status is 'completed', then it is the actual end-date. Notice that end-date is not madatory to report. All dates may be repported with or without time of day.

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. CarePlan.intent is always 'plan' in this implementation guide. CarePlan status should be either 'unknown', 'entered-in-error', or the status of the intervention at the time of reporting. Note that the meaning of 'active' is "ready to be acted upon", so it does not signify that the first activity has occured.

CarePlan.activity.detail.status is also mandatory, and all the statuses in the FHIR ValueSet may be used, however 'unknown' is permitted from the time where the intervention occurs in the record until its completion. It is recommended not to use 'entered-in-error' - if the CarePlan is entered-in-error use CarePlan.status.

The CarePlan.extension[basedOnServiceRequest] points to the ServiceRequest which was the starting point for the intervention. It is not mandatory, but can be used to link the starting point (MedCom henvisning) to the resulting investigation activity e.g. 'Afklarende samtale' or 'Statussamtale'.

CarePlan.subject references the citizen. CarePlan.activity.detail.performer is the organisation that carries out the intervention (leverandør).

CarePlan.activity.detail.reasonReference holds the link between conditions and interventions. It is optional to report.

CarePlan.basedOn referes to the care-pathway or plan, that this intervention is part of. It is mandatory to report for plannend interventions with a treatment focus. See which intervention codes apply in the invariant klgateway-119-intervention-1.

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
|indsatsAnledning|Den henvendelse/henvisning, der er anledning til, at denne indsats igangsættes|CarePlan.extension:basedOnServiceRequest|
|indsatsleverandør|Organisation, der har ansvaret for at udføre den planlagte indsats|CarePlan.activity.detail.performer|
|indsatssubjekt|Den borger som den planlagte indsats retter sig mod|CarePlan.subject|
|indsatsbegrundelse|Tilstand som indsatsen rettes mod|CarePlan.activity.detail.reasonReference|
|indsatsDelAfPlan|Det indsatsforløb, som denne indsats er en del af|CarePlan.basedOn|


---

// File: input/pagecontent/StructureDefinition-klgateway-119-servicerequest-intro.md

### Scope and usage
This model is used to represent when a municipality recieves a referal or request for prevention/health promotion according to §119 in the health act.

The ServiceRequest, may have the sending organisation as the requester i.e the hospital or general practitioner that sends the request/referal. The requester is only required if the organisation or person that requests the service does so using a MedCom message, and the SOR-code can be drawn automatically from there. Requests recieved via phone e.g. from GP's, citizens or next-of-kin should be reported without requester.
 
Intent should always be "plan". The status attribute should be used according to the FHIR-guidance. The citizen is referred in ServiceRequest.subject.

ServiceRequest.authoredOn holds the time, where the request was recieved in the municipality, if this is available. Else, the time that the request was send from the hosptal may be used. The date may be repported with or without time of day.

ServiceRequest.status and ServiceRequest.intent are mandatory. ServiceRequest.intent always have the value 'plan'. ServiceRequest.status uses the required FHIR ValueSet as appropriate.

It may happen that a new request is recieved, while another one is already active for the citizen. In this case, choose the appropriate use case:
* If the new request calls for the same interventions (with just minor modifications). Then the new request replaces the old one. This is documented by reporting both the old and the new ServiceRequest. The new serviceRequest referes the old one using the attribute serviceRequest.replaces. The old ServiceRequest sets ServiceRequest.status to 'revoked'.
* It could also happen that the new request means that the citizen interventions should be modified. E.g. the therapist start over with the clarification (afklarende samtale) and/or plan another intervention. In this case, revoke the old ServiceRequest, and use the new one as a reference in all interventions and encounters.
* In the last case, both requests are relevant at the same time, and each calls for different interventions. In this case, both ServiceRequests remains active, and each have different interventions and encounters associated with it.

SeviceRequest.reasonReference is only used if a code or codes were recieved in a MedCom message as a diagnosis. The reasonReference describes this through a reference to FocusCondition, which again uses SKS or ICPC2 diagnosis codes to describe the problem/diagnosis, that led the hospital or General practitioner to request §119 prevention/health promotion. 

ServiceRequest.code.coding is used to state, what kind of interventions the requester wants for the citizen. The value is always 'Sundhedsfremme og forebyggelse'.

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

---

// File: input/pagecontent/example.md


This page describes subsequent delivery reports for the citizen Bruno Test Elmer.
For each delivery report the story is told (in Danish), and a reporting example is given.

### First Event June 2nd, 2022

#### Story
Bruno med CPR: 1502779995, har indberetter Holbæk kommune (SOR: 451000016003). Bruno har både diabetes type 2 og KOL.

Bruno er af egen læge henvist til afklarende samtale ved Holbæk kommunes forebyggelsestilbud til borgere med kronisk sygdom pga. sin type-2 diabetes. Lægen vurderer at han har brug for fokus på ernæring. Henvisningen modtages af Holbæk kommune d. 2. juni 2022, og samme dag planlægges Brunos afklarende samtale.

#### Reporting
The delivery report contains a Citizen (Bruno), ServiceRequest (vedr. henvisningen), two Organization (egen læge og udføreren af afklarende samtale),  FocusCondition (Type-2 diabetes), PlannedIntervention (afklarende samtale).

The report for this is found here: [DeliveryReport-Bruno-1](Bundle-e87d5e68-e5f3-476f-988f-4efda86b0645.html)

### Second Event June 10th, 2022
Til Brunos afklarende samtale fortæller han både om sin KOL og diabetes, og de mange udfordringer det giver i hverdagen. I samråd med den sundhedsprofessionelle bliver de enige om at fokusere på de problemer der er ift. tilstanden 'ernæring' og igangsætte indsatsen 'madlavning i praksis'

#### Reporting
A delivery report is generated containing the Citizen and an Organization (the one delivering the intervention). These are not updated from last time, but they are reported because the new content references these instances.

The delivery report also contains the updated PlannedIntervention (Afklarende samtale).

The new content in the delivery report is an Enconter (Afklarende samtale), a Condition (ernæring), a CarePlan (§119 forbyggelsesforløb) and a PlannedIntervetion (Madlavning i praksis).

The report for this is found here: [DeliveryReport-Bruno-2](Bundle-8c3f35d7-7437-4fcf-90d2-49e04701d0ec.html)

### Third to fifth event June 15th to June29th
Bruno har første gang på holdet 'Madlavning i praksis' d. 15. juni, og møder i alt tre gange af to timer. Dette medfører en indberetning til Gateway af tid forbrugt på kontakterne.

De tre rapporter vil være næsten ens, og derfor er det udelukkende rapporten fra 29. juni, der vises her. Læg mærke til at rapporten ikke indeholder tidligere indberettede kontakter - det er fordi de hverken ændrer sig eller refereres.

#### Reporting
The delivery report contains a Citizen, an Organization (the one delivering the intervention) and a CarePlan (§119 forebyggelsesforløbet). These are not updated from last time, but they are reported because the new content references these instances.

The new content in the delivery report is an Encounter (kontakt på indsatsforløbet der omhandler madlavning i praksis)

The report for this is found here: [DeliveryReport-Bruno-5](Bundle-5135080e-fbaf-4575-afe6-f037d4541e06.html)

### Sixth event July 4th
#### Story
Bruno bliver indlagt d. 1.-3. juli pga. en forværring i sin KOL. D. 4. juli sender Sygehuslægen en henvisning til kommunen angående iværksættelse af et 119 forløb, gerne med fokus på sygdomsmestring. Fordi Bruno allerede er i §119 forløb planlægges der en behovssamtale (ikke en afklarende samtale).

(d. 6. juli er der igen en kontakt på 'Madlavning i praksis'. Rapporten dog ikke er medtaget her, fordi den ligner foregående)

#### Reporting
The delivery report contains a Citizen, and an Organization (the one delivering the intervention). These are not updated from last time, but they are reported because the new content references these instances.

The new content in the delivery report is an Organization (Medicinsk observationsafdeling, Holbæk sygehus), FocusCondition (KOL), ServiceRequest (henvisning til 119-forløb) og PlannedIntervention (behovssamtale).

The report for this is found here: [DeliveryReport-Bruno-6](Bundle-974cabc7-d2e0-4db0-bfa4-6cd5af7103de.html)

### Seventh event July 9th

#### Story
Bruno er til behovssamtale. Bruno og den sundhedsprofessionelle bliver enige om, at Bruno bør styrke sin tilstand 'Sundhedskompetence' ved at indgå i et hold med fokus på KOL dvs. indsatsen 'Sygdomshåndtering'. Denne indsats skal køre parallelt med at Bruno gør sit forløb vedr. 'Madlavning i praksis' færdig, som han er blevet meget glad for.

(herefter rapporteres en række kontakter på de to forløb, og Madlavning i praksis og ernærings-tilstanden afsluttes. Dette er ikke er med i eksemplet)

#### Reporting
The delivery report contains a Citizen, and an Organization (the one delivering the intervention). These are not updated from last time, but they are reported because the new content references these instances.

Updated content is the PlannedIntervention (Behovssamtale), it is changed because it is completed.

The new content in the delivery report is an Encounter (behovssamtale kontakt), Condition (Sundhedskompetence), CarePlan (nyt 119 indsatsforløb), PlannedIntervention (Sygdomshåndtering).

The report for this is found here: [DeliveryReport-Bruno-7](Bundle-88889c22-b86d-4ceb-81d8-38a158f12bf4.html)


#### Eighth event September 30th 2022

#### Story
Ved sin afslutningssamtale får Bruno afsluttet sin tilstand 'Sundhedskompetence' og indsats 'Sygdomshåndtering', som er gået rigtig godt. Holbæk kommune har fokus på systematisk opfølgning. Det betyder, at der oprettes et opfølgningsforløb til Bruno i forbindelse med afslutningen.

#### Reporting
The delivery report contains a Citizen, and an Organization (the one delivering the intervention). These are not updated from last time, but they are reported because the new content references these instances.

The updated content in this delivery report is a CarePlan (§119 indsatsforløbet) and a PlannedIntervention (Madlavning i praksis) which are completed. In addition a Condition (Sundhedskopmpetencer) is ended.

The new content is a PlannedIntervention (afsluttende samtale) and its Encounter (afsluttende samtale kontakten), a CarePlan (Opfølgningsforløb) and its PlannedIntervention (opfølgning). 

The report for this is found here: [DeliveryReport-Bruno-8](Bundle-738ec570-6bb6-4690-9a88-1dbed46d65ed.html)




---

// File: input/fsh/119carePlan.fsh

Profile: KLGateway119CarePlan
Parent: CarePlan
Id: klgateway-119-care-plan
Title: "KLGateway119CarePlan"
Description: "Care plans for §119 health promotion and disease prevention in Danish Municipalities."

//Requirements
* status ^definition = "Shall be either unknown, entered-in-error, or the status of the intervention at the time of reporting"
* intent = #plan
* category 1..1
* category from CarePlanCategories119 (required)
* activity.detail.status ^definition = "Shall be either unknown, or cancelled, or the activity status of the intervention at the time of reporting"
* activity.detail.statusReason from CancellationTypes
* subject only Reference(klgateway-119-citizen) //borger
* subject ^type.aggregation = #bundled
* period 1..1
* period.start 1..1 //Bevillingsdato
//period.end er mulig men ikke obligatorisk
* activity 1..1
* activity.reference 0..0
* activity.detail 1.. 
* activity.detail.code 0..0 
* activity.detail.reasonCode ..0
* activity.detail.performer 1..1 //indsatsudfører
* activity.detail.performer only Reference(klgateway-119-organization)
* activity.detail.performer ^type.aggregation = #bundled


//0..0 kardinaliteter
* activity.detail.scheduled[x] ..0
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
* activity.detail.statusReason ^short = "[DK] indsatsforløbForklaringAfStatus"
* activity.detail.performer ^short = "[DK] indsatsforløbleverandør"
* subject ^short = "[DK] indsatssubjekt"
* status ^short = "[DK] indsatsforløbsstatus"
* intent ^short = "[DK] indsatsforløbhensigt"
* activity.detail.status ^short = "[DK] indsatsforløbsAktivitetsstatus"
* obeys klgateway-119-care-plan-1
//* obeys klgateway-119-care-plan-2

//Fhir path that makes cancallation type mandatory if status is cancelled or stopped.
Invariant: klgateway-119-care-plan-1
Description: "status reason is mandatory if status is cancelled or stopped. Otherwise it is prohibited"
Severity: #error
Expression: "activity.detail.all(statusReason.exists() = (status = 'cancelled' or status = 'stopped'))"

Instance: BrunoforloebKost
InstanceOf: klgateway-119-care-plan
Title: "BrunoforløbKost"
Description: "Brunos forløb vedr. kostvejledning"
Usage: #example
* category = $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)

Instance: BrunoforloebKostValidationerror
InstanceOf: klgateway-119-care-plan
Title: "BrunoforloebKost_validationerror"
Description: "BrunoforloebKost_validationerror"
Usage: #example
* category = $KLCommonCodes#9791e55a-656f-47eb-8fd5-c4a06b0a4662 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)

Instance: BrunoforloebKostAfbrudt
InstanceOf: klgateway-119-care-plan
Title: "BrunoforløbKost_afbrudt"
Description: "Brunos forløb vedr. kostvejledning, der er afbrudt fordi Bruno aktivt har fravalgt det pga. anden træning"
Usage: #example
* category = $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#unknown
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#cancelled
* activity.detail.statusReason = $KLCommonCodes#a3f2bd01-078b-486e-81be-797d192ad7bd //afbrudt pga anden træning
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)

Instance: BrunoforloebKostAfbrudtValidationerror
InstanceOf: klgateway-119-care-plan
Title: "BrunoforloebKost_afbrudt_validationerror"
Description: "BrunoforloebKost_afbrudt_validationerror"
Usage: #example
* category = $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#unknown
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#cancelled
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)

---

// File: input/fsh/119citizen.fsh

Profile: KLGateway119Citizen
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-patient
Id: klgateway-119-citizen
Title: "KLGateway119Citizen"
Description: "Administrative information about a citizen receiving care or care related services."
* identifier 1..1
* identifier[x-ecpr] 0..0
* identifier[d-ecpr] 0..0
* identifier[cpr] 1..1
* deceasedDateTime 0..0
* deceasedBoolean 1..1
* active ..1
* name[official] 0..0
* name ..0
* telecom ..0
* gender ..0
* birthDate ..0
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

Instance: BrunoTestElmer
InstanceOf: klgateway-119-citizen
Description: "Test personen Elmer, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation."
Usage: #example
* identifier.use = #official
* identifier.value = "2509479989"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* deceasedBoolean = false

---

// File: input/fsh/119CodeSystem.fsh

// CodeSystem: Tempcodes
// Id: Tempcodes
// Title: "Tempcodes"
// Description: "Tempcodes to be implemented in KL-term"
// * #7273c0b7-1a0d-4c4a-a202-c014b1ddd4a0 "Første kontakt i forløb"
// * ^experimental = false
// * ^caseSensitive = true
// * #ef491570-7884-4acd-bcf7-43d6b2c64762 "Borger har ikke henvendt sig eller er udeblevet"


ValueSet: CancellationTypes
Id: CancellationTypes
Title: "CancellationTypes"
Description: "Cancellation valueset, to be implemented in KL-term and FKI"
* ^experimental = false
* $KLCommonCodes#4bbf6d6a-a1c6-41c2-b8c1-7352b7378adf //"Ikke yderligere behov (borger-vurderet)"
* $KLCommonCodes#a63b6aa6-7d56-4e67-a5b3-d73f6d262af5 //"Ikke yderligere behov (fagperson-vurderet)"
* $KLCommonCodes#3a5a72b7-addf-4857-b80c-04e4246e3072 //"Aktivt fravalg"
* $KLCommonCodes#0cd5734d-b663-47c6-a3da-6b14a937d144 //"Aktivt fravalg pga. anden sygdom"
* $KLCommonCodes#f8436c2e-af1c-44fe-939d-473b518dd01d //"Aktivt fravalg pga. økonomi ifm. transport"
* $KLCommonCodes#8371b769-4bfb-4ac8-b130-d91c54784a56 //"Aktivt fravalg pga. logistik ifm. transport"
* $KLCommonCodes#a3f2bd01-078b-486e-81be-797d192ad7bd //"Aktivt fravalg pga. anden træning"
* $KLCommonCodes#82e99421-31da-4915-96ed-168ccfa1d20c //"Hændelse medfører ophør"
* $KLCommonCodes#ef491570-7884-4acd-bcf7-43d6b2c64762 // "Borger har ikke henvendt sig eller er udeblevet"


ValueSet: ServiceTypes119
Id: ServiceTypes119
Title: "ServiceTypes"
Description: "The service types allowed in §119" 
* ^experimental = false
* $KLCommonCodes#a71921ea-fe83-441d-933b-cc21d0b3c8c3 //Sundhedsfremme og forebyggelse

ValueSet: KLInterventionCodes119
Id: KLInterventionCodes119
Title: "KLInterventionCodes119"
Description: "Intervention codes allowed in this implementation guide."
* ^experimental = false
* $FSIII#01a500f6-c221-4fd0-b518-cd361218b60d // Madlavning i praksis	
* $FSIII#03a3ebdb-9e2d-4be1-b32b-42f0bd2a3362 // Afsluttende samtale
* $FSIII#61692d91-69b8-4830-9453-3d58454e49d3 // Færdighedstræning
* $FSIII#6d24992e-e0a2-43e7-bc27-0234622a8655 // Nikotin- og tobaksafvænning	
* $FSIII#6eddbaf7-2a73-49d4-91e7-6138d419f58c // Afklarende samtale
* $FSIII#924e9828-84cf-4689-9551-0ebb6dc71b98 // Samtale om alkohol
* $FSIII#ab87c0b5-40be-4e0a-b749-d9f833bfed2d // Fysisk træning
* $FSIII#abe847e0-1ce0-44dc-a675-ce05b66f47e6 // Vejledning og introduktion til fysiske aktiviteter
* $FSIII#c9a99304-1788-43b7-b7be-e187b092ae9c // Kostvejledning
* $FSIII#cf7a55c2-7061-47ed-b7c5-e29620fe93bf // Diætbehandling
* $FSIII#d1e016b5-150a-4ac4-97ba-d3e19e28471e // Opfølgning
* $FSIII#e71b7d85-5c78-49c2-8624-8499d162317b // Sygdomshåndtering	
* $FSIII#ee5606ac-1bed-487e-aa3c-72dcc30ec037 // Behovssamtale	
* $FSIII#f30cab6d-2a42-4358-99d7-811127fb6e05 // Mental håndtering

ValueSet: KLConditionCodes119
Id: KLConditionCodes119
Title: "KLConditionCodes119"
Description: "Condition codes allowed in this implementation guide."
* ^experimental = false
* include codes from system $FSIII where concept descendent-of #d03da587-94dc-46e6-ba71-eb1e43ec7df6 //Kroppen
* include codes from system $FSIII where concept descendent-of #7b3b3587-4ddd-4b93-a81b-455bfc601492 //Hverdagsliv
* include codes from system $FSIII where concept descendent-of #b349c7ec-86c5-4c52-aaf2-9034d98b0e3b //Sundhedsadfærd
* $FSIII#0520a107-2bb0-47b8-8856-c53e27607e51 //Kognitiv funktion
* $FSIII#43ad3091-f684-4d6f-8885-20ecd1cf2255 //Kropspfattelse
* $FSIII#ba083ca7-fe46-41d0-acd5-85851ac8137f //Trivsel
* $FSIII#cb55874a-93d9-45c7-a25a-8ff677c24385 //Søvn og hvile

ValueSet: CarePlanCategories119
Id: CarePlanCategories119
Title: "CarePlanCategories"
Description: "The care plan categories used for §119"
* ^experimental = false
* $KLCommonCodes#9791e55a-656f-47eb-8fd5-c4a06b0a4662 //"Opfølgningsforløb efter §119"
* $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //"Interventionsforløb efter §119"
//kl-term update - set codesystem to $KLCommonCodes

ValueSet: DeliveryTypes119
Id: DeliveryTypes119
Title: "DeliveryTypes"
Description: "The delivery context types allowed in §119 prevention. Whether intervention is group based or delivered individually"
* ^experimental = false
* include codes from system $KLCommonCodes where concept descendent-of #3f79cee2-b148-4f2c-9cbd-387820e74685

ValueSet: EncounterClassCodes
Title: "KontaktKlasseKoder"
Description: "Codes to describe the mode of delivery of an encounter"
* ^experimental = false
* include codes from valueset http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
* $KLCommonCodes#1b55a4b0-1156-4f58-b2df-b5c6014d9048 //"Telefonisk" KLCommonCareSocialCodes
* $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d //"Skærmbesøg" KLCommonCareSocialCodes

---

// File: input/fsh/119condition.fsh

Profile: KLGateway119Condition
Parent: Condition
Id: klgateway-119-condition
Title: "KLGateway119Condition"
Description: "Detailed information about condition relating to §119 care pathways"
* identifier ..0
* clinicalStatus 1..1
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
* code from KLConditionCodes119 (required)
* code.coding 1..1
* bodySite ..0
* subject only Reference(klgateway-119-citizen)
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
* code.coding ^short = "[DK] §119 tilstandskode"
* clinicalStatus ^short = "[DK] tilstandsstatus"
* verificationStatus ^short = "[DK] tilstandsstatus"
* recordedDate ^short = "[DK] tilstandsoprettelsestid" 
* subject ^short = "[DK] tilstandssubjekt" 
* category.coding ^short = "[DK] tilstandsfokus"

//Example
Instance: BrunoTilstand
InstanceOf: klgateway-119-condition
Title: "BrunoTilstand"
Description: "Brunos Tilstand vedrørende vægt"
Usage: #example
* code.coding =  $FSIII#febbd20d-f5ff-41e7-bf12-dfa0700678e0 "Vægt"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-06-02
* subject = Reference(BrunoTestElmer)
* category.coding = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item

---

// File: input/fsh/119deliveryReport.fsh

Profile: KLGateway119DeliveryReport
Parent: Bundle
Id: klgateway-119-delivery-report
Title: "KLGateway119DeliveryReport"
Description: "Delivery report to deliver data for each citizen."
* meta.profile 1..1
* meta.profile = "http://fhir.kl.dk/prevention/StructureDefinition/klgateway-119-delivery-report"
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link 0..0
* entry.link 0..0
* entry.resource 1..1
* entry.resource only
    klgateway-119-condition or
    klgateway-119-focus-condition or
    klgateway-119-care-plan or
    klgateway-119-planned-intervention or
    klgateway-119-encounter or
    klgateway-119-organization or
    klgateway-119-citizen or
    klgateway-119-servicerequest
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains citizen 1..1
* entry[citizen].resource only
    klgateway-119-citizen
* entry.resource ^short = "Citizen and content constrained to known profiles"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0
* entry[citizen] ^short = "[DK] indberetningsrapportBorger"
* entry ^short = "[DK] indberetningsrapportIndhold"
// * obeys gateway-119-report-1
// * obeys gateway-119-report-2


// Invariant: gateway-119-report-1
// Description: "All condition resources shall conform to either klgateway-119-condition profile, or klgateway-119--focus-condition profile"
// Severity: #error
// Expression: "entry.select(resource as Condition).all(
//     $this.conformsTo('http://fhir.kl.dk/prevention/StructureDefinition/klgateway-119-condition')
//  or $this.conformsTo('http://fhir.kl.dk/prevention/StructureDefinition/klgateway-119-focus-condition'))"

// Invariant: gateway-119-report-2
// Description: "All CarePlan resources shall conform to either klgateway-119-careplan profile, or klgateway-119-planned-intervention profile"
// Severity: #error
// Expression: "entry.select(resource as CarePlan).all(
//     $this.conformsTo('http://fhir.kl.dk/prevention/StructureDefinition/klgateway-119-care-plan')
//  or $this.conformsTo('http://fhir.kl.dk/prevention/StructureDefinition/klgateway-119-planned-intervention'))"

// Invariant: gateway-119-report-3
// Description: "Planned interventions with a treatment focus, should have its basedOn attribute populated with a carePlan with category-code 'interventionsforløb §119'."
// Severity: #error
// Expression: "entry.select((resource as CarePlan).where(
//     activity.detail.code.coding.code = 'e78c43e3-c512-44b4-ad30-2de43481d9b3'
//     or activity.detail.code.coding.code = 'f490d484-fa43-400b-b678-e718c6927708'
//     or activity.detail.code.coding.code = 'abade2c3-0922-4ec1-b85a-263c85d056fa'
//     or activity.detail.code.coding.code = '122fe9a2-9bff-4c9c-87df-af1e096ad7a6'
//     or activity.detail.code.coding.code = '9143b4b7-7211-45ed-8892-9afb1f2d20b7'
//     or activity.detail.code.coding.code = 'e31355bd-b1a6-4fab-a339-8cec309cad81'
//     or activity.detail.code.coding.code = 'fea40bf1-731f-4d7e-a1d0-38555a553cb7'
//     or activity.detail.code.coding.code = '37d2b78b-4988-4225-afa0-a9642402df38'
//     or activity.detail.code.coding.code = 'eac36593-ad34-4abe-9de0-c408fe7eb3e5'
//     or activity.detail.code.coding.code = '051978fc-599e-4e30-9746-d6d0547a0361'
//     or activity.detail.code.coding.code = 'fe0588d3-d12b-455f-b84c-1fee3c85bfd8'
//     or activity.detail.code.coding.code = 'd83d524f-a01b-4fa0-9324-3bb56c1e79fe'
//     or activity.detail.code.coding.code = 'a616e57f-c780-442e-8c29-b22a72fbe88c'
//     or activity.detail.code.coding.code = 'a05f0199-6b1f-419f-800c-f6348f93751e'
//     or activity.detail.code.coding.code = '1b325914-3a06-437d-9f7e-cd0edbbda32e'
//     or activity.detail.code.coding.code = '30836f9d-c84a-4e48-8d5c-21862747466a')).basedOn.resolve().category.coding.code = '5c160c02-e858-4c1f-925a-71ed64844749'"



Instance: BrunoIndberetningsrapport
InstanceOf: klgateway-119-delivery-report
Description: "Indberetning for Bruno"
Usage: #example
* type = #collection
* timestamp = 2020-08-14T00:00:00Z
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Patient/BrunoTestElmer"
* entry[=].resource = BrunoTestElmer
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Organization/UdfoererAfBrunosForebyggelse"
* entry[=].resource = UdfoererAfBrunosForebyggelse
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Organization/AfsenderAfBrunosHenvisning"
* entry[=].resource = AfsenderAfBrunosHenvisning
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Condition/BrunoAktionsdiagnoseRequest"
* entry[=].resource = BrunoAktionsdiagnoseRequest
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/ServiceRequest/BrunoRequestInformation"
* entry[=].resource = BrunoRequestInformation
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/CarePlan/BrunoAfklarendeSamtale"
* entry[=].resource = BrunoAfklarendeSamtale
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Encounter/BrunoKontaktAfklarende"
* entry[=].resource = BrunoKontaktAfklarende
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/CarePlan/BrunoforloebKost"
* entry[=].resource = BrunoforloebKost
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/CarePlan/BrunoKostvejledning"
* entry[=].resource = BrunoKostvejledning
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Encounter/BrunoKontakt1Kost"
* entry[=].resource = BrunoKontakt1Kost
* entry[+].fullUrl = "https://care-gateway.test001.ehealth.sundhed.dk/fhir/Condition/BrunoTilstand"
* entry[=].resource = BrunoTilstand

---

// File: input/fsh/119encounter.fsh

Profile: KLGateway119Encounter
Parent: Encounter
Id: klgateway-119-encounter
Title: "KLGateway119Encounter"
Description: "Encounter for first planned visits and all executed activities in a §119 care pathway"
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
* subject only Reference(klgateway-119-citizen)
* subject ^type.aggregation = #bundled
* episodeOfCare ..0
* basedOn ..0
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

//Danish descriptions
* status ^short = "[DK] kontaktstatus"
* class ^short = "[DK] kontaktklasse"
* period.start ^short = "[DK] kontaktstart"
* period.end ^short = "[DK] kontaktslut"
* subject ^short = "[DK] kontaktsubjekt"
* extension[basedOnCarePlan] ^short = "[DK] kontaktBaseretPå"


Extension: BasedOnCarePlanExtension
Title:     "basedOnCarePlanExtension"
Description: "Extension for pointing to the careplan describing why this encounter is taking place, will be part of R5 without needing the extension"
* value[x] 1..1
* value[x] only Reference(klgateway-119-care-plan or klgateway-119-planned-intervention)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Encounter"

Instance: BrunoKontaktAfklarende
InstanceOf: klgateway-119-encounter
Title: "BrunoKontaktAfklarende"
Description: "Brunos kontakt, hvor der er udført en afklarende samtale"
Usage: #example
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-06-02T12:10:00.000Z
* subject = Reference(BrunoTestElmer)
* extension[basedOnCarePlan].valueReference = Reference(BrunoAfklarendeSamtale)
* period.end = 2022-06-02T12:40:00.000Z

Instance: BrunoKontakt1Kost
InstanceOf: klgateway-119-encounter
Title: "BrunoKontakt1Kost"
Description: "Brunos kontakt, hvor han har første kostvejledning som skærmbesøg"
Usage: #example
* status = http://hl7.org/fhir/encounter-status#finished
* class = $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d "Skærmbesøg"
* period.start = 2022-06-09T10:00:00.000Z
* period.end = 2022-06-09T10:30:00.000Z
* subject = Reference(BrunoTestElmer)
* extension[basedOnCarePlan].valueReference = Reference(BrunoforloebKost)

---

// File: input/fsh/119focusCondition.fsh

Profile: KLGateway119FocusCondition
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-condition
Id: klgateway-119-focus-condition
Title: "KLGateway119FocusCondition"
Description: "Conditions which may be used to express the problem of a citizen in Danish municipalities. Mostly used for cross sector use cases."


* code.coding[FSIIIConditionCode] 0..0
* code.coding[SCTConditionCode] 0..0
* code.coding[FFBConditionCode] 0..0


//Specifying datatype of subject
* subject only Reference(klgateway-119-citizen)

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

* code.coding ^short = "[DK] fokusTilstandskode"
* code.text ^short = "[DK] fokusTilstandKodetekst"
* subject ^short = "[DK] fokusTilstandsubjekt"
* clinicalStatus ^short = "[DK] tilstandsstatus"


Instance: BrunoAktionsdiagnoseRequest
InstanceOf: klgateway-119-focus-condition
Title: "BrunoAktionsdiagnoseRequest"
Description: "Brunos aktionsdiagnose fra hans henvisning, hvor man kan se, at han tidligere har haft et myokardieinfarkt (Q-tak, anteriort)"
Usage: #example
* code.coding[SKS-D] = urn:oid:1.2.208.176.2.4.12#DI252B "Tidligere myokardieinfarkt (Q-tak, anteriort)"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* subject = Reference(BrunoTestElmer)



---

// File: input/fsh/119organisation.fsh

Profile: KLGateway119Organization
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-organization
Id: klgateway-119-organization
Title: "KLGateway119Organization"
Description: "Organization as expressed in KLGateway for prevention/health promotion."
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

Instance: AfsenderAfBrunosHenvisning
InstanceOf: klgateway-119-organization
Title: "AfsenderAfBrunosHenvisning"
Description: "Kardiologisk afdeling Holbæk sygehus, der er afsender af Brunos Henvisning"
Usage: #example
* identifier.use = #official
* identifier.value = "391951000016006"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: UdfoererAfBrunosForebyggelse
InstanceOf: klgateway-119-organization
Title: "UdførerAfBrunosIndsats"
Description: "Sundhedsfremme og forebyggelse Holbæk kommune, der er udfører af Brunos indsats"
Usage: #example
* identifier.use = #official
* identifier.value = "1037791000016002"
* identifier.system = "urn:oid:1.2.208.176.1.1"


---

// File: input/fsh/119plannedIntervention.fsh

Profile: KLGateway119PlannedIntervention
Parent: CarePlan
Id: klgateway-119-planned-intervention
Title: "KLGateway119PlannedIntervention"
Description: "Planned interventions for §119 prevention/health promotion in Danish Municipalities."

//Requirements
* status ^definition = "Shall be either unknown, entered-in-error, or the status of the intervention at the time of reporting"
* intent = #plan
* activity.detail.status ^definition = "Shall be either unknown, or cancelled, or the activity status of the intervention at the time of reporting"
//* activity.detail.statusReason from CancellationTypes //hvilken type, når interventionen stopper, for at lave en ny, fordi der er sendt en ny GGOP
* basedOn ..1
* basedOn only Reference(klgateway-119-care-plan)
* basedOn ^type.aggregation = #bundled
* subject only Reference(klgateway-119-citizen) //borger
* subject ^type.aggregation = #bundled
* period 1..1
* period.start 1..1 //Bevillingsdato
//period.end er mulig men ikke obligatorisk
* activity 1..1
* activity.outcomeReference only Reference(klgateway-119-encounter) //kontakter
* activity.outcomeReference ^type.aggregation = #bundled
* activity.reference 0..0
* activity.detail 1.. 
* activity.detail.code 1..1 //Indsatskoder niveau 2 og 3
* activity.detail.code.coding ^slicing.discriminator.type = #value
* activity.detail.code.coding ^slicing.discriminator.path = "system"
* activity.detail.code.coding ^slicing.rules = #closed
* activity.detail.code.coding contains level2 0..1 and level3 0..1 MS
* activity.detail.code.coding[level2].system = $FSIII
* activity.detail.code.coding[level2] from KLInterventionCodes119 //kl-term update Set to
//kl-term update delete two lines above
* activity.detail.code.coding[level3].system = "http://gateway.kl.dk/1.0/CodeSystem/LocallyDefinedInterventions"
* activity.detail.code.coding[level3].code 1..1
* activity.detail.code.coding[level3].display 1..1
* activity.detail.code.coding[level3] ^definition = "Shall contain locally defined code if it is a locally defined level 3 intervention"
* activity.detail.extension contains DeliveryType named deliveryType 1..1
* activity.detail.extension[deliveryType].valueCodeableConcept.coding from DeliveryTypes119 (required)
* activity.detail.reasonCode ..0
* activity.detail.scheduled[x] 0..0
* activity.detail.performer 1..1 //indsatsudfører
* activity.detail.performer only Reference(klgateway-119-organization)
* activity.detail.performer ^type.aggregation = #bundled
* extension contains
   BasedOnServiceRequestExtension named basedOnServiceRequest 0..1
* extension[basedOnServiceRequest].valueReference ^type.aggregation = #bundled

// relation mellem tilstand og indsats
* activity.detail.reasonReference only Reference(klgateway-119-condition)
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
* extension[basedOnServiceRequest] ^short = "[DK] indsatsAnledning"
* activity.detail.performer ^short = "[DK] indsatsleverandør"
* subject ^short = "[DK] indsatssubjekt"
* activity.detail.reasonReference ^short = "[DK] indsatsbegrundelse"
* basedOn ^short = "[DK] indsatsDelAfPlan"
* status ^short = "[DK] indsatsstatus"
* intent ^short = "[DK] indsatshensigt"
* activity.detail.status ^short = "[DK] indsatsAktivitetsstatus"
* obeys klgateway-119-intervention-1
* obeys klgateway-119-intervention-2

Invariant: klgateway-119-intervention-1
Description: "Planned interventions with a treatment focus, should have its basedOn attribute populated with a carePlan."
Severity: #error
Expression: "activity.detail.code.coding.code = 'f30cab6d-2a42-4358-99d7-811127fb6e05'
    or activity.detail.code.coding.code = 'e71b7d85-5c78-49c2-8624-8499d162317b'
    or activity.detail.code.coding.code = '01a500f6-c221-4fd0-b518-cd361218b60d'
    or activity.detail.code.coding.code = 'c203c6b5-3be0-40a8-8204-e93751deabf5'
    or activity.detail.code.coding.code = 'c9a99304-1788-43b7-b7be-e187b092ae9c'
    or activity.detail.code.coding.code = 'ab87c0b5-40be-4e0a-b749-d9f833bfed2d'
    or activity.detail.code.coding.code = '61692d91-69b8-4830-9453-3d58454e49d3'
    or activity.detail.code.coding.code = 'abe847e0-1ce0-44dc-a675-ce05b66f47e6'
    or activity.detail.code.coding.code = 'd1e016b5-150a-4ac4-97ba-d3e19e28471e'
    or activity.detail.code.coding.code = 'cf7a55c2-7061-47ed-b7c5-e29620fe93bf'
    or activity.detail.code.coding.code = '924e9828-84cf-4689-9551-0ebb6dc71b98' implies basedOn.exists()"


Invariant: klgateway-119-intervention-2
Description: "does not have a reference to careplan if the intervention is a certain type of intervention"
Severity: #error
Expression: "activity.detail.code.coding.code = '03a3ebdb-9e2d-4be1-b32b-42f0bd2a3362'
    or activity.detail.code.coding.code = 'ee5606ac-1bed-487e-aa3c-72dcc30ec037'
    or activity.detail.code.coding.code = '6eddbaf7-2a73-49d4-91e7-6138d419f58c' implies basedOn.empty()"

Extension: BasedOnServiceRequestExtension
Title:     "basedOnServiceRequestExtension"
Description: "Extension for pointing to the servicerequest, that started an intervention"
* value[x] 1..1
* value[x] only Reference(klgateway-119-servicerequest)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "CarePlan"

Extension: DeliveryType
Title: "DeliveryType"
Description: "Extension for a code that specifies some context of how a treatment-activity is delivered to a patient"
* value[x] only CodeableConcept
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "CarePlan.activity.detail"


Instance: BrunoAfklarendeSamtale
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoAfklarendeSamtale"
Description: "Bruno's afklarende Samtale"
Usage: #example
* activity.detail.code.coding[level2] = $FSIII#6eddbaf7-2a73-49d4-91e7-6138d419f58c //Afklarende samtale
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-05-31
* period.end = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* extension[basedOnServiceRequest].valueReference = Reference(BrunoRequestInformation)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)

Instance: BrunoKostvejledning
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoKostvejledning"
Description: "Bruno's Kostvejledning"
Usage: #example
* activity.detail.code.coding[level2] = $FSIII#c9a99304-1788-43b7-b7be-e187b092ae9c "Kostvejledning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"

* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* extension[basedOnServiceRequest].valueReference = Reference(BrunoRequestInformation)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)
* basedOn = Reference(BrunoforloebKost)

Instance: BrunoKostvejledningValidationError
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoKostvejledningValidationError"
Description: "BrunoKostvejledningValidationError"
Usage: #example
* activity.detail.code.coding[level2] = $FSIII#c9a99304-1788-43b7-b7be-e187b092ae9c "Kostvejledning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(BrunoTestElmer)
* extension[basedOnServiceRequest].valueReference = Reference(BrunoRequestInformation)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(UdfoererAfBrunosForebyggelse)


---

// File: input/fsh/119serviceRequest.fsh

Profile:        KLGateway119ServiceRequest
Parent:         ServiceRequest
Id:             klgateway-119-servicerequest
Title:          "KLGateway119ServiceRequest"
Description:    "Referal or request for prevention/health promotion to a Danish municipalities"
//Requirement pertaining to §119
* requester 0..1
* requester only Reference(klgateway-119-organization) //organization used for people from the outside, KLCommonPractitioner for internal requests
* requester ^type.aggregation = #bundled
* code.coding from ServiceTypes119
* subject only Reference(klgateway-119-citizen)
* subject ^type.aggregation = #bundled
* authoredOn 1..1
* reasonReference only Reference(klgateway-119-focus-condition) //May be there (119)
* reasonReference ^type.aggregation = #bundled
* replaces 0..1
* replaces only Reference(klgateway-119-servicerequest)
* replaces ^type.aggregation = #bundled
* intent = http://hl7.org/fhir/request-status#plan

//Setting 0..0 cardinalities
* identifier 0..0
* instantiatesCanonical 0..0
* instantiatesUri 0..0
* basedOn 0..0
* requisition 0..0
* category 0..0
* priority 0..0
* doNotPerform 0..0
* orderDetail 0..0
* quantity[x] 0..0
* encounter 0..0
* occurrence[x] 0..0
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
* orderDetail 0..0

//Adding shorts for Danish descriptions
* requester ^short = "[DK] anledningAnsvarlig"
* status ^short = "[DK] anledningsStatus"
* intent ^short = "[DK] anledningsHensigt"
* code.coding ^short = "[DK] anledningsIndsats"
* reasonReference ^short = "[DK] anledningsbegrundelse"
* subject ^short = "[DK] anledningsSubjekt"
* authoredOn ^short = "[DK] anledningstid"
* replaces ^short = "[DK] anledningErstatter"

Instance: BrunoRequestInformation
InstanceOf: klgateway-119-servicerequest
Title: "BrunoRequestInformation"
Description: "Information fra Brunos henvisning, der er baggrunden for at igangsætte indsatsen i kommunen"
Usage: #example
* requester = Reference(AfsenderAfBrunosHenvisning)
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-status#plan
* code.coding = $KLCommonCodes#a71921ea-fe83-441d-933b-cc21d0b3c8c3
* reasonReference = Reference(BrunoAktionsdiagnoseRequest)
* subject = Reference(BrunoTestElmer)
* authoredOn = 2022-05-29

Instance: BrunoTidligereRequestInformation
InstanceOf: klgateway-119-servicerequest
Title: "BrunoTidligereRequestInformation"
Description: "Information vedr. henvendelses, der er baggrunden for at igangsætte indsats i kommunen. Eksempel på, når der ikke er en MedCom besked der igangsætter indsatsen"
Usage: #example
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-status#plan
* code.coding = $KLCommonCodes#a71921ea-fe83-441d-933b-cc21d0b3c8c3
* subject = Reference(BrunoTestElmer)
* authoredOn = 2019-04-17

---

// File: input/fsh/aliases.fsh

Alias: $ConditionClinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $ConditionCategory = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $VerificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $FSIII = urn:oid:1.2.208.176.2.21
Alias: $KLConditionCodes119 = http://fhir.kl.dk/term/ValueSet/KLConditionCodesPrevention
Alias: $KLCommonCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes


---

// File: input/fsh/bruno.fsh

// Første indberetning
Instance: e87d5e68-e5f3-476f-988f-4efda86b0645
InstanceOf: klgateway-119-delivery-report
Description: "DeliveryReport-Bruno-1"
Usage: #example
* type = #collection
* timestamp = 2022-06-02T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e6ce3367-d224-4817-8852-302ae75f7d41"
* entry[=].resource = e6ce3367-d224-4817-8852-302ae75f7d41

* entry[+].fullUrl = "https://test.fhir.dk/Organization/19f30aa7-db71-4dd2-87a1-d82ca2e9b737"
* entry[=].resource = 19f30aa7-db71-4dd2-87a1-d82ca2e9b737

* entry[+].fullUrl = "https://test.fhir.dk/Condition/fe9664a3-e21c-40c9-a4cc-61bf647cf161"
* entry[=].resource = fe9664a3-e21c-40c9-a4cc-61bf647cf161

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/3050d118-89a5-4bf4-85b9-a094e3277de4"
* entry[=].resource = 3050d118-89a5-4bf4-85b9-a094e3277de4

* entry[+].fullUrl = "https://test.fhir.dk/Organization/9d4a1ea8-d7c6-4776-9e93-911ed10d4d36"
* entry[=].resource = 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/7c45824a-9b19-4674-b4a7-c75c674bbb2e"
* entry[=].resource = 7c45824a-9b19-4674-b4a7-c75c674bbb2e


Instance: e6ce3367-d224-4817-8852-302ae75f7d41
InstanceOf: klgateway-119-citizen
Description: "Test personen Bruno Elmer, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation."
Usage: #inline
* identifier.use = #official
* identifier.value = "2509479989"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* deceasedBoolean = false

Instance: 19f30aa7-db71-4dd2-87a1-d82ca2e9b737
InstanceOf: klgateway-119-organization
Title: "AfsenderAfBrunosHenvisning"
Description: "Brunos egen læge, der er afsender af Brunos Henvisning"
Usage: #inline
* identifier.use = #official
* identifier.value = "1071391000016009"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: fe9664a3-e21c-40c9-a4cc-61bf647cf161
InstanceOf: klgateway-119-focus-condition
Title: "BrunoDiabetes"
Description: "Brunos aktionsdiagnose fra hans henvisning, hvor man kan se at han har Type 2-diabetes"
Usage: #inline
* code.coding[SKS-D] = urn:oid:1.2.208.176.2.4.12#DE11 "Type 2-diabetes"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)

Instance: 3050d118-89a5-4bf4-85b9-a094e3277de4
InstanceOf: klgateway-119-servicerequest
Title: "BrunoRequestInformation"
Description: "Information fra Brunos henvisning, der er baggrunden for at igangsætte indsatsen i kommunen"
Usage: #inline
* requester = Reference(19f30aa7-db71-4dd2-87a1-d82ca2e9b737)
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-status#plan
* code.coding = $KLCommonCodes#a71921ea-fe83-441d-933b-cc21d0b3c8c3
* reasonReference = Reference(fe9664a3-e21c-40c9-a4cc-61bf647cf161)
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* authoredOn = 2022-06-02

Instance: 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36
InstanceOf: klgateway-119-organization
Title: "UdførerAfBrunosIndsats"
Description: "Sundhedsfremme og forebyggelse Holbæk kommune, der er udfører af Brunos indsats"
Usage: #inline
* identifier.use = #official
* identifier.value = "1037791000016002"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: 7c45824a-9b19-4674-b4a7-c75c674bbb2e
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoAfklarendeSamtale"
Description: "Bruno's afklarende Samtale"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#6eddbaf7-2a73-49d4-91e7-6138d419f58c //Afklarende samtale
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-06-02
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)



//2nd
Instance: 8c3f35d7-7437-4fcf-90d2-49e04701d0ec
InstanceOf: klgateway-119-delivery-report
Description: "DeliveryReport-Bruno-2"
Usage: #example
* type = #collection
* timestamp = 2022-06-10T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e6ce3367-d224-4817-8852-302ae75f7d41" //Bruno som tidligere
* entry[=].resource = e6ce3367-d224-4817-8852-302ae75f7d41

* entry[+].fullUrl = "https://test.fhir.dk/Organization/9d4a1ea8-d7c6-4776-9e93-911ed10d4d36" //udfører som tidligere
* entry[=].resource = 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/7c45824a-9b19-4674-b4a7-c75c674bbb2e" //Afklarende samtale afsluttet
* entry[=].resource = 7c45824a-9b19-4674-b4a7-c75c674bbb2e-v2

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/284d264b-daa1-44d5-a8c9-52ef90235eaa" //Afklarende samtales kontakt
* entry[=].resource = 284d264b-daa1-44d5-a8c9-52ef90235eaa

* entry[+].fullUrl = "https://test.fhir.dk/Condition/c2a47519-ae53-46c3-b9f2-5257f4c5b79e" //Brunos tilstand ernæring
* entry[=].resource = c2a47519-ae53-46c3-b9f2-5257f4c5b79e

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1b068b69-afa0-46f8-bb20-a5220c65a079" //Brunos 119 indsatsforløb
* entry[=].resource = 1b068b69-afa0-46f8-bb20-a5220c65a079

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/de7fe001-04f4-4e9a-8b4e-3849a3c6a521" //Brunos indsats: Madlavning i praksis
* entry[=].resource = de7fe001-04f4-4e9a-8b4e-3849a3c6a521


Instance: 7c45824a-9b19-4674-b4a7-c75c674bbb2e-v2
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoAfklarendeSamtale-v2"
Description: "Bruno's afklarende samtale afsluttes"
Usage: #inline
* id = "7c45824a-9b19-4674-b4a7-c75c674bbb2e"
* activity.detail.code.coding[level2] = $FSIII#6eddbaf7-2a73-49d4-91e7-6138d419f58c //Afklarende samtale
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-06-02
* period.end = 2022-06-10
* status = http://hl7.org/fhir/request-status#completed
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

Instance: 284d264b-daa1-44d5-a8c9-52ef90235eaa
InstanceOf: klgateway-119-encounter
Title: "BrunoKontaktAfklarende"
Description: "Brunos kontakt, hvor der er udført en afklarende samtale"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-06-10T12:10:00.000Z
* period.end = 2022-06-10T12:40:00.000Z
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* extension[basedOnCarePlan].valueReference = Reference(7c45824a-9b19-4674-b4a7-c75c674bbb2e-v2)


Instance: c2a47519-ae53-46c3-b9f2-5257f4c5b79e
InstanceOf: klgateway-119-condition
Title: "BrunoTilstandErnæring"
Description: "Brunos Tilstand vedrørende ernæring"
Usage: #inline
* code.coding =  $FSIII#c0ee1cf6-47a9-4523-8fda-a80a13e28e30 "Ernæring"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-06-10
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* category.coding = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item

Instance: 1b068b69-afa0-46f8-bb20-a5220c65a079
InstanceOf: klgateway-119-care-plan
Title: "BrunoforløbMadlavning"
Description: "Brunos forløb vedr. madlavning i praksis"
Usage: #inline
* category = $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-06-10
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

Instance: de7fe001-04f4-4e9a-8b4e-3849a3c6a521
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoMadlavningIPraksis"
Description: "Brunos indsats vedr. madlavning i praksis"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#01a500f6-c221-4fd0-b518-cd361218b60d "Madlavning i praksis"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-06-10
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)
* basedOn = Reference(1b068b69-afa0-46f8-bb20-a5220c65a079)

//fifth

Instance: 5135080e-fbaf-4575-afe6-f037d4541e06
InstanceOf: klgateway-119-delivery-report
Description: "DeliveryReport-Bruno-5"
Usage: #example
* type = #collection
* timestamp = 2022-06-29T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e6ce3367-d224-4817-8852-302ae75f7d41" //Bruno som tidligere
* entry[=].resource = e6ce3367-d224-4817-8852-302ae75f7d41

* entry[+].fullUrl = "https://test.fhir.dk/Organization/9d4a1ea8-d7c6-4776-9e93-911ed10d4d36" //udfører som tidligere
* entry[=].resource = 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1b068b69-afa0-46f8-bb20-a5220c65a079" //Brunos 119 indsatsforløb, som tidligere
* entry[=].resource = 1b068b69-afa0-46f8-bb20-a5220c65a079

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/0e553e46-8482-4aa3-9207-2a37d6c71406" // Kontakt på indsatsforløb
* entry[=].resource = 0e553e46-8482-4aa3-9207-2a37d6c71406


Instance: 0e553e46-8482-4aa3-9207-2a37d6c71406
InstanceOf: klgateway-119-encounter
Title: "BrunoKontakt3Madlavning"
Description: "Brunos kontakt, hvor han har tredje madlavning i praksis"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-06-29T17:00:00.000Z
* period.end = 2022-06-29T19:00:00.000Z
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* extension[basedOnCarePlan].valueReference = Reference(1b068b69-afa0-46f8-bb20-a5220c65a079)

//Sixth

Instance: 974cabc7-d2e0-4db0-bfa4-6cd5af7103de
InstanceOf: klgateway-119-delivery-report
Description: "DeliveryReport-Bruno-6"
Usage: #example
* type = #collection
* timestamp = 2022-07-04T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e6ce3367-d224-4817-8852-302ae75f7d41"
* entry[=].resource = e6ce3367-d224-4817-8852-302ae75f7d41

* entry[+].fullUrl = "https://test.fhir.dk/Organization/398c214e-2ae6-4c69-8daa-351769c2dbe5" //holbæk suýgehus
* entry[=].resource = 398c214e-2ae6-4c69-8daa-351769c2dbe5

* entry[+].fullUrl = "https://test.fhir.dk/Condition/21ade6b2-d9a1-4564-bd91-b841bbae7ccc" //KOL
* entry[=].resource = 21ade6b2-d9a1-4564-bd91-b841bbae7ccc

* entry[+].fullUrl = "https://test.fhir.dk/ServiceRequest/4fb11af4-d0e3-4a28-8a6b-375c35629a58" //anmodning om sygdomsmestring fra kommunen
* entry[=].resource = 4fb11af4-d0e3-4a28-8a6b-375c35629a58

* entry[+].fullUrl = "https://test.fhir.dk/Organization/9d4a1ea8-d7c6-4776-9e93-911ed10d4d36" //Som tidligere
* entry[=].resource = 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/364ae8f2-75b4-43a0-8010-e79ba38f7990" //behovssamtale
* entry[=].resource = 364ae8f2-75b4-43a0-8010-e79ba38f7990


Instance: 398c214e-2ae6-4c69-8daa-351769c2dbe5
InstanceOf: klgateway-119-organization
Title: "AfsenderAfBrunosHenvisning2"
Description: "Medicins observations afdeling Holbæk sygehus, der er afsender af Brunos Henvisning"
Usage: #inline
* identifier.use = #official
* identifier.value = "1347831000016005"
* identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: 21ade6b2-d9a1-4564-bd91-b841bbae7ccc
InstanceOf: klgateway-119-focus-condition
Title: "BrunoKOL"
Description: "Brunos aktionsdiagnose fra hans henvisning, hvor man kan se, at han henvises pga. sin KOL"
Usage: #inline
* code.coding[SKS-D] = urn:oid:1.2.208.176.2.4.12#DJ44 "Kronisk obstruktiv lungesygdom"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)

Instance: 4fb11af4-d0e3-4a28-8a6b-375c35629a58
InstanceOf: klgateway-119-servicerequest
Title: "BrunoRequestInformationKOL"
Description: "Information fra Brunos henvisning vedr. KOL, der er baggrunden for at igangsætte yderligere i kommunen"
Usage: #inline
* requester = Reference(398c214e-2ae6-4c69-8daa-351769c2dbe5)
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-status#plan
* code.coding = $KLCommonCodes#a71921ea-fe83-441d-933b-cc21d0b3c8c3
* reasonReference = Reference(21ade6b2-d9a1-4564-bd91-b841bbae7ccc)
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* authoredOn = 2022-07-04

Instance: 364ae8f2-75b4-43a0-8010-e79ba38f7990
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoBehovssamtale"
Description: "Bruno's indsats vedr. behovssamtale"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#ee5606ac-1bed-487e-aa3c-72dcc30ec037 //Behovssamtale
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-07-04
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

//Seventh
Instance: 88889c22-b86d-4ceb-81d8-38a158f12bf4
InstanceOf: klgateway-119-delivery-report
Description: "DeliveryReport-Bruno-7"
Usage: #example
* type = #collection
* timestamp = 2022-06-10T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e6ce3367-d224-4817-8852-302ae75f7d41" //Bruno som tidligere
* entry[=].resource = e6ce3367-d224-4817-8852-302ae75f7d41

* entry[+].fullUrl = "https://test.fhir.dk/Organization/9d4a1ea8-d7c6-4776-9e93-911ed10d4d36" //udfører som tidligere
* entry[=].resource = 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/364ae8f2-75b4-43a0-8010-e79ba38f7990" //Behovssamtale afsluttet
* entry[=].resource = 364ae8f2-75b4-43a0-8010-e79ba38f7990-v2

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/6daa6b0e-b89a-4b4a-b057-ec02316a05be" //Behovssamtales kontakt
* entry[=].resource = 6daa6b0e-b89a-4b4a-b057-ec02316a05be

* entry[+].fullUrl = "https://test.fhir.dk/Condition/b7b532ca-561f-4138-b94b-0285902dbc24" //Brunos tilstand sundhedskompetence
* entry[=].resource = b7b532ca-561f-4138-b94b-0285902dbc24

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/22695613-b50d-445d-aeb9-81937e3f3e47" //Brunos 119 indsatsforløb
* entry[=].resource = 22695613-b50d-445d-aeb9-81937e3f3e47

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1e4333ec-315c-4e98-b009-fcb77b8e8103" //Brunos indsats: sygdomshåndtering
* entry[=].resource = 1e4333ec-315c-4e98-b009-fcb77b8e8103

Instance: 364ae8f2-75b4-43a0-8010-e79ba38f7990-v2
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoBehovssamtale-v2"
Description: "Bruno's behovssamtale afsluttes"
Usage: #inline
* id = "364ae8f2-75b4-43a0-8010-e79ba38f7990"
* activity.detail.code.coding[level2] = $FSIII#ee5606ac-1bed-487e-aa3c-72dcc30ec037 //Behovssamtale
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-07-04
* period.end = 2022-07-09
* status = http://hl7.org/fhir/request-status#completed
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)


Instance: 6daa6b0e-b89a-4b4a-b057-ec02316a05be
InstanceOf: klgateway-119-encounter
Title: "BrunoKontaktBehovssamtale"
Description: "Brunos kontakt, hvor der er udført en behovssamtale"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-07-09T13:15:00.000Z
* period.end = 2022-07-09T13:45:00.000Z
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* extension[basedOnCarePlan].valueReference = Reference(364ae8f2-75b4-43a0-8010-e79ba38f7990-v2)


Instance: b7b532ca-561f-4138-b94b-0285902dbc24
InstanceOf: klgateway-119-condition
Title: "BrunoTilstandSundhedskompetence"
Description: "Brunos Tilstand vedrørende sundhedskompetence"
Usage: #inline
* code.coding =  $FSIII#bb7e9e71-73f6-4ec6-a0bf-eaec1e5982b4 "Sundhedskompetence"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-07-09
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* category.coding = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item

Instance: 22695613-b50d-445d-aeb9-81937e3f3e47
InstanceOf: klgateway-119-care-plan
Title: "BrunoforløbSygdomshåndtering"
Description: "Brunos forløb vedr. Sygdomshåndtering"
Usage: #inline
* category = $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-07-09
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

Instance: 1e4333ec-315c-4e98-b009-fcb77b8e8103
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoSygdomshåndtering"
Description: "Brunos indsats vedr. Sygdomshåndtering"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#e71b7d85-5c78-49c2-8624-8499d162317b "Sygdomshåndtering"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-07-09
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)
* basedOn = Reference(22695613-b50d-445d-aeb9-81937e3f3e47)

//Eight
Instance: 738ec570-6bb6-4690-9a88-1dbed46d65ed
InstanceOf: klgateway-119-delivery-report
Description: "DeliveryReport-Bruno-8"
Usage: #example
* type = #collection
* timestamp = 2022-09-30T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e6ce3367-d224-4817-8852-302ae75f7d41" //Bruno som tidligere
* entry[=].resource = e6ce3367-d224-4817-8852-302ae75f7d41

* entry[+].fullUrl = "https://test.fhir.dk/Organization/9d4a1ea8-d7c6-4776-9e93-911ed10d4d36" //udfører som tidligere
* entry[=].resource = 9d4a1ea8-d7c6-4776-9e93-911ed10d4d36

* entry[+].fullUrl = "https://test.fhir.dk/Condition/b7b532ca-561f-4138-b94b-0285902dbc24" //Brunos tilstand sundhedskompetence afsluttes
* entry[=].resource = b7b532ca-561f-4138-b94b-0285902dbc24-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/22695613-b50d-445d-aeb9-81937e3f3e47" //Brunos 119 indsatsforløb afsluttes
* entry[=].resource = 22695613-b50d-445d-aeb9-81937e3f3e47-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/1e4333ec-315c-4e98-b009-fcb77b8e8103" //Brunos indsats: Madlavning i praksis afsluttes
* entry[=].resource = 1e4333ec-315c-4e98-b009-fcb77b8e8103-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/e91f631d-6f99-4eb9-9f07-dce1d4f4e54f" //Brunos indsats: Afsluttende samtale
* entry[=].resource = e91f631d-6f99-4eb9-9f07-dce1d4f4e54f

* entry[+].fullUrl = "https://test.fhir.dk/Enconter/d7646272-58a4-4bfc-a434-b89d4c826cf9" //Brunos kontakt på afsluttende samtale
* entry[=].resource = d7646272-58a4-4bfc-a434-b89d4c826cf9

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/0ce001f0-91c0-4b8c-8604-e94efb46bb45" //Brunos 119 opfølgningsforløb
* entry[=].resource = 0ce001f0-91c0-4b8c-8604-e94efb46bb45

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/998df1b7-2339-46ec-9672-07178b04a6d8" //Brunos 119 planlagt opfølgning
* entry[=].resource = 998df1b7-2339-46ec-9672-07178b04a6d8

Instance: b7b532ca-561f-4138-b94b-0285902dbc24-v2
InstanceOf: klgateway-119-condition
Title: "BrunoTilstandSundhedskompetence"
Description: "Brunos Tilstand vedrørende sundhedskompetence afsluttes"
Usage: #inline
* id = "b7b532ca-561f-4138-b94b-0285902dbc24"
* code.coding =  $FSIII#bb7e9e71-73f6-4ec6-a0bf-eaec1e5982b4 "Sundhedskompetence"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#inactive
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* recordedDate = 2022-07-09
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)

Instance: 22695613-b50d-445d-aeb9-81937e3f3e47-v2
InstanceOf: klgateway-119-care-plan
Title: "BrunoforløbSygdomshåndtering"
Description: "Brunos forløb vedr. Sygdomshåndtering afsluttes"
Usage: #inline
* id = "22695613-b50d-445d-aeb9-81937e3f3e47"
* category = $KLCommonCodes#5c160c02-e858-4c1f-925a-71ed64844749 //kl-term update "Intervention efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-07-09
* period.end = 2022-09-30
* status = http://hl7.org/fhir/request-status#completed
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

Instance: 1e4333ec-315c-4e98-b009-fcb77b8e8103-v2
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoSygdomshåndtering"
Description: "Brunos indsats vedr. Sygdomshåndtering afsluttes"
Usage: #inline
* id = "1e4333ec-315c-4e98-b009-fcb77b8e8103"
* activity.detail.code.coding[level2] = $FSIII#e71b7d85-5c78-49c2-8624-8499d162317b "Sygdomshåndtering"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#2865f123-15a7-4a36-a514-32ea37c400ca "Gruppebaseret indsats"
* period.start = 2022-07-09
* period.end = 2022-09-30
* status = http://hl7.org/fhir/request-status#completed
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)
* basedOn = Reference(22695613-b50d-445d-aeb9-81937e3f3e47)

Instance: e91f631d-6f99-4eb9-9f07-dce1d4f4e54f
InstanceOf: klgateway-119-planned-intervention
Title: "BrunoAfsluttendeSamtale"
Description: "Brunos indsats vedr. Afsluttende samtale afsluttes, fordi den gennemføres"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#03a3ebdb-9e2d-4be1-b32b-42f0bd2a3362 "Afsluttende samtale"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-09-30
* period.end = 2022-09-30
* status = http://hl7.org/fhir/request-status#completed
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#completed
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

Instance: d7646272-58a4-4bfc-a434-b89d4c826cf9
InstanceOf: klgateway-119-encounter
Title: "BrunoKontaktAfsluttendeSamtale"
Description: "Brunos kontakt, hvor der er udført en afsluttende samtale"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* period.start = 2022-09-30T09:05:00.000Z
* period.end = 2022-09-30T09:35:00.000Z
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* extension[basedOnCarePlan].valueReference = Reference(e91f631d-6f99-4eb9-9f07-dce1d4f4e54f)

Instance: 0ce001f0-91c0-4b8c-8604-e94efb46bb45
InstanceOf: klgateway-119-care-plan
Title: "BrunoOpfølgningsforløb"
Description: "Brunos opfølgningsforløb"
Usage: #inline
* category = $KLCommonCodes#9791e55a-656f-47eb-8fd5-c4a06b0a4662 //"Opfølgning efter §119 sundhedsfremm og forebyggelse"
* period.start = 2022-09-30
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)

Instance: 998df1b7-2339-46ec-9672-07178b04a6d8
InstanceOf: klgateway-119-planned-intervention
Title: "Brunoopfølgning"
Description: "Brunos indsats vedr. opfølgning"
Usage: #inline
* activity.detail.code.coding[level2] = $FSIII#d1e016b5-150a-4ac4-97ba-d3e19e28471e "Opfølgning"
* activity.detail.extension[deliveryType].valueCodeableConcept = $KLCommonCodes#8d12d74c-17da-47a7-a4fe-e69dbaec0a8c "Individuel indsats"
* period.start = 2022-09-30
* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/care-plan-intent#plan
* subject = Reference(e6ce3367-d224-4817-8852-302ae75f7d41)
* activity.detail.status = http://hl7.org/fhir/care-plan-activity-status#in-progress
* activity.detail.performer = Reference(9d4a1ea8-d7c6-4776-9e93-911ed10d4d36)
* basedOn = Reference(0ce001f0-91c0-4b8c-8604-e94efb46bb45)


---

