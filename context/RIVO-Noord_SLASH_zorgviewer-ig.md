// File: input/pagecontent/0checklists.md

<ul>
    <li><a href="checklists.html">Checklists &amp; Aansluiten</a></li>
    <li><a href="thermometer.html">Aansluit Thermometer</a></li>
    <li><a href="testing.html">Testing</a></li>
</ul>


---

// File: input/pagecontent/0design.md

<ul>
    <li><a href="design.html">Design</a></li>
    <li><a href="design2.html">Design 2024</a></li>
    <li><a href="design-background.html">Design Achtergrond</a></li>
    <li><a href="design-security.html">Security Design</a></li>
    <li><a href="design-authenticatie.html">Authenticatie Bouwblok Design</a></li>
    <li><a href="design-logging.html">Logging Bouwblok Design</a></li>
    <li><a href="zorgviewer-services.html">Zorgviewer Services</a></li>
</ul>

---

// File: input/pagecontent/0rao.md

<ul>
    <li><a href="zorgnetwerk.html">Inzage Zorgnetwerk</a></li>
</ul>

---

// File: input/pagecontent/0requirements.md

<ul>
    <li><a href="conformance.html">Uitgangspunten en Requirements</a></li>
    <li><a href="nen-normen.html">NEN Normen Conformiteit</a></li>
    <li><a href="datasets.html">Datasets</a></li>
    <li><a href="must-support.html">Must Support</a></li>
</ul>

---

// File: input/pagecontent/CapabilityStatement-Logging-intro.md

Zie voor details van het log bericht: [StructureDefinition-AuditEvent](StructureDefinition-AuditEvent.html).

N.B. De focus ligt op wettelijk benodigde logging volgens NEN 7513, uiteraard zal er meer gedetaileere technische logging nodig zijn.

---

// File: input/pagecontent/CapabilityStatement-OntsluitenBronsysteem-intro.md

Benodigde SMART-on-FHIR [scopes](http://hl7.org/fhir/smart-app-launch/1.0.0/scopes-and-launch-context/index.html):
1. user/Patient.search
1. user/Patient.read
1. user/DocumentReference.search
1. user/Binary.read
1. user/Condition.search
1. user/Practitioner.read
1. user/PractitionerRole.search
1. user/Procedure.search
1. user/Observation.search
1. user/Specimen.read
1. user/Consent.search
1. user/Flag.search

---

// File: input/pagecontent/CapabilityStatement-ZorgviewerHost-intro.md

Benodigde SMART-on-FHIR [scopes](http://hl7.org/fhir/smart-app-launch/1.0.0/scopes-and-launch-context/index.html):
1. user/Patient.read
1. user/Practitioner.read
1. user/PractitionerRole.read

---

// File: input/pagecontent/changes.md

### Versies

<style>table, td, th { border: 1px solid black; padding:5px; }</style>

|Versie|Datum|Changes|
|---|---|---|
|1.10.0-sprint48|current|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.9.1-sprint47...master)<br/>* Spoedopname behandelaanwijzing toegevoegd<br/>* Medicatie update<br/>* DocumentReference status=current parameter toegevoegd|
|1.9.1-sprint47|10-dec-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.8.0-sprint46...1.9.1-sprint47)<br/>* Vaccinatie toegevoegd|
|1.8.0-sprint46|25-nov-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.7.0-sprint45...1.8.0-sprint46)<br/>* MedicatieGebruik en MedicatieAfspraak toegevoegd<br/>* Design pagina's gesplitst|
|1.7.0-sprint45|12-nov-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.6.0-sprint43...1.7.0-sprint45)|
|1.6.0-sprint43|17-okt-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.5.0-sprint42...1.6.0-sprint43)|
|1.5.0-sprint40,41,42|30-sep-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.4.0-sprint39...sprint42)|
|1.4.0-sprint39|23-aug-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.3.0-sprint38...1.4.0-sprint39)|
|1.3.0-sprint38|6-aug-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.2.0-sprint37...1.3.0-sprint38)|
|1.2.0-sprint37|26-jul-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/1.1.0-sprint35...1.2.0-sprint37)|
|*sprint36*||*Overgeslagen*|
|1.1.0-sprint35|21-jun-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.26.0-sprint33...1.1.0-sprint35)|
|1.0.0-sprint33,0.26.0-sprint33|29-mei-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.25.0-sprint32...0.26.0-sprint33)|
|0.25.0-sprint32|13-mei-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.24.0-sprint30...0.25.0-sprint32)|
|*sprint31*||*Overgeslagen*|
|0.24.0-sprint30/MVP2|17-apr-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.23.0-sprint28...0.24.0-sprint30)|
|*sprint29*||*Overgeslagen*|
|0.23.0-sprint28|18-mrt-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.22.0-sprint27...0.23.0-sprint28)|
|0.22.0-sprint27|4-mrt-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.21.0-sprint26...0.22.0-sprint27)|
|0.21.0-sprint26|20-feb-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.20.0-sprint25...0.21.0-sprint26)|
|0.20.0-sprint25|5-feb-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.19.0-sprint24...0.20.0-sprint25)|
|0.19.0-sprint24|22-jan-2024|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.18.0-sprint22...0.19.0-sprint24)<br/>* Design rondom AuditLogging attributes|
|*sprint23*||*Overgeslagen*|
|0.18.0-sprint22|11-dec-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.17.0-sprint20...0.18.0-sprint22)|
|0.18.0-sprint21|17-nov-2023|*Verwerkt in sprint 22*|
|0.17.0-sprint20|13-nov-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.16.0-sprint18...0.17.0-sprint20)<br/>* RIVO kleur toegepast<br/>* Topicus behandelaanwijzing wijzigingen|
|*sprint19*||*Overgeslagen*|
|0.16.0-sprint18|18-okt-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.15.0-sprint17...0.16.0-sprint18)<br/>* Epic Checklist update<br/>* Topicus feedback<br/>* new: Zorgviewer Services|
|0.15.0-sprint17|3-okt-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.14.0-sprint16...0.15.0-sprint17)<br/>* Lab updates<br/>* Patient.deceased added|
|0.14.0-sprint16|19-sep-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.13.0-sprint15...0.14.0-sprint16)<br/>* Voornamelijk updates en fixes|
|0.13.0-sprint15|4-sep-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.12.0-sprint13...0.13.0-sprint15)<br/>* Logging AuditEvent uitwerking|
|*sprint14*||*Overgeslagen*|
|0.12.0-sprint13|9-aug-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.11.0-sprint12...0.12.0-sprint13)<br/>* UI Guidances detail updates/fixes<br/>* Epic checklist uitgewerkt|
|0.11.0-sprint12|27-jul-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.10.1-sprint11...0.11.0-sprint12)<br/>* Nog een lab voorbeeld toegevoegd<br/>* UI Guidances gelijkgetrokken<br/>* Structuur artifact pagina's gelijkgetrokken|
|0.10.1-sprint11|18-jul-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.10.0-sprint11...0.10.1-sprint11)<br/>* Behandelaanwijzing mapping ivm VIPLive aansluiting<br/>* Review en QA fixes|
|0.10.0-sprint11|12-jul-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.9.0-sprint10...0.10.0-sprint11)<br/>* Kleine detail updates en QA<br/>* AuditEvent draft<br/>* UI guidance updates|
|0.9.0-sprint10|27-jun-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.8.0-sprint9...0.9.0-sprint10)<br/>* Labuitslagen tweede draft<br/>* Toestemming mappings van HL7 v2 CON|
|0.8.0-sprint9|14-jun-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.7.0-sprint8...0.8.0-sprint9)<br/>* Alle UI Guidance updates<br/>* Labuitslagen eerste draft<br/>* Toestemming updates<br/>* Technische QA fixes|
|0.7.0-sprint8|30-mei-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.6.0-sprint7...0.7.0-sprint8)<br/>* Algemene UI Design aanpassingen kolom volgorde<br/>* Leeswijzer update<br/>* FHIR requests bijgesteld, DataTime vs Period<br/>* Terminologie resources toegevoegd<br/>* Kleine documentatie issues, plaatjes, missende links en wat vertalingen|
|0.6.0-sprint7|15-mei-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.5.0-sprint6...0.6.0-sprint7)<br/>* Verrichtingen, Behandelaanwijzing - UI en voorbeeld updates<br/>* Achtergrond Dokter Dokter - update|
|0.5.0-sprint6|2-mei-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.4.0-sprint5...0.5.0-sprint6)<br/>* Verrichtingen UI Guidance en Profiel - new<br/>* Patient naam algorithme<br/>* Ontsluiten bronsysteem - update<br/>* Behandelaanwijzing en Wilsverklaring UI Guidance en Profielen - concept|
|0.4.0-sprint5|17-apr-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.3.0-sprint4...0.4.0-sprint5)<br/>* Design Background - new<br/>* Probleem en Correspondentie UI Guidance - new<br/>* Toestemming CapabilityStatement, Toestemming Consent, Endpoint - new<br/>* Security Design update sequence diagram<br/>* Dataset Toestemmingen - updates|
|0.3.0-sprint4|3-apr-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.2.0-sprint3...0.3.0-sprint4)<br/>* Behandelaanwijzing (Consent) obv ACP - draft<br/>* Sequence diagrammen bijgewerkt<br/>* Bron zorgaanbieder meta tag<br/>* Correspondentie - draft|
|0.2.0-sprint3|24-mar-2023|[Detail wijzigingen](https://github.com/RIVO-Noord/zorgviewer-ig/compare/0.1.0-sprint2...0.2.0-sprint3)<br/>* Opstarten Zorgviewer - afgestemd<br/>* Correspondentie onderdelen, o.a. DocumentReference - draft<br/>* Security Design - draft|
|0.1.0-sprint1|tot 17-feb-2023|Wijzigingen sprint 1 en 2<br/>* Initiele vulling<br/>* Opstarten Zorgviewer draft<br/>* Requirements review door productowner|

### Versienummering

[Semantic Versioning](https://semver.org/)

Vorm: (major).(minor).(rev)-(tag)

Voorbeelden:

* 0.x.x-CIbuild - De "nightly" build
* 0.1.0-sprint1 - De versie (sprint snapshot) ten behoeve van sprint #1
* 0.2.0-sprint2 - De versie (sprint snapshot) ten behoeve van sprint #2
* 0.2.20-sprint2 - sprint #2 met verdere verduidelijking of foutjes adhv vragen
* ...
* 1.0.x-mvp2 - De eerste productie versie 1.0

### Review Workflow

* Ronde 1. Als de schrijvers van de IG een gedeelte klaar hebben dan volgt er eerst een interne review.
* Ronde 2. Daarna wordt het gedeelte aangeboden aan het bouwteam voor review.
* Ronde 3. Vervolgens kan de product owner een review uitvoeren.
* Ronde 4. Als daarmee de interne zorgviewer review is geweest kan het gedeelte nog worden aangeboden ter review aan de RIVO-Noord architecten.

**Weergave van alle reviews die tot nu toe zijn uitgevoerd:**

| Versie        | Onderdeel te reviewen                          | Ronde 1 (IG) | Ronde 2 (Bouw) | Ronde 3 (PO) | Ronde 4 (Extern) |
|---------------|------------------------------------------------|---------|---------------|---------|---------------|
| 0.1.0-sprint1 | Requirements en uitgangspunten alle paragrafen | Gereed  | Niet gevraagd | Gereed  | Niet gevraagd |
| | | | | | |

<div>
{% include Review-Workflow.svg %}
</div>

---

// File: input/pagecontent/checklists.md


Op deze pagina volgen de checklists die als handvat kunnen worden gebruikt als je als bronsysteem wilt aansluiten (bouwblok Ontsluiten Bronsysteem) of als je de Zorgviewer wilt kunnen opstarten vanuit je eigen systeem (bouwblok Zorgviewer Host).
Maar ook voor het toevoegen van een nieuw behandelplan met relevante filters voor bepaalde aandoening of gewoon een setje relevante gegevens filters op gegevens.

### Basis afspraken

1. *Vulling*: Zorgaanbieder is verantwoordelijk om zoveel mogelijk van de Zorgviewer implementatiegids zib vulling te regelen
1. *Vulling*: Zorgaanbieder is er bewust van dat niet alle gegevens beschikbaar zijn in de Zorgviewer, of doordat het technisch (nog) niet mogelijk is (FHIR), of omdat de workflow niet is ingericht (Bronsysteem), of omdat configuratie niet volledig is (Bronsysteem of Bronsysteem ontsluiting), of omdat de Zorgviewer het betreffende veld (nog) niet toont.
1. *Vulling*: Zorgaanbieder accepteert dat vulling vanuit andere Zorgaanbieders minder kan zijn dan verwacht. We ontsluiten eerst wat we (technisch) kunnen. Bijvoorbeeld:
    1. codering mist, omdat coderingen niet (volledig) zijn ingelezen 
    1. regels missen, e.g. medische voorgeschiedenis
1. *Identiteit/Security*: Zorgaanbieder accepteert identiteit van de andere aangesloten Zorgaanbieders en mag ervanuit gaan dat er wordt gezorgd voor een juiste gebruikersrechten administratie.
1. *Security*: Zorgaanbieder staat in het NEN 7510 register
1. *Logging*: Zorgaanbieder moet voor de NEN 7513 conforme logging zorgen
1. *Governance*: Zorgaanbieder is deelnemer RIVO-Noord

### Epic huizen

<div>
{% include Checklist-Epic.svg %}
</div>

<style>table, td, th { border: 1px solid black; padding:5px; }</style>

**Stap 1 Aanmaken Apps in Epic: Zorgviewer FrontEnd en Zorgviewer Backend**<br/>
De frontend is een SMART-on-FHIR integratie, waarbij de standaard [Epic sequence er zo uit ziet](https://galaxy.epic.com/?#Browse/page=1!68!50!3404409,100001067,100001075,100001077&from=Galaxy-Redirect).
* 1.1 Front-end App: Interconnect (Foreground) verbinding kan maken naar https://auth.zorgviewer.nl/.well-known/jwks
* 1.2 Front-end App: Ga naar [My Apps / Vendor Services (epic.com)](https://vendorservices.epic.com/Developer/Apps) en maak de volgende App registratie:

| Veld | Vulling |
|--|--|
| Application Name:| `Zorgviewer-Frontend`|
| Who will primarily be using this app? | Clinicians, Staff, or Administrative Users|
| Features:| Incoming API|
| Selecteer de volgende Scopes:|* Patient.Read (STU3)<br/>* Practitioner.Read (STU3)|
| Does your app use OAuth 2.0? |Use Oauth 2.0|
| App FHIR Version: |STU3|
| FHIR ID Generation Scheme: |Use Unconstrained FHIR ID's|
| Endpoint URI:|* `dev.zorgviewer.nl/api/application/redirect`<br/>* `app-dev.zorgviewer.nl/api/application/redirect`<br/>* `app-tst.zorgviewer.nl/api/application/redirect`<br/>* `app-acc.zorgviewer.nl/api/application/redirect`<br/>* `app.zorgviewer.nl/api/application/redirect`|
| Is this a confidential Client? | Disable|
| Advanced: | * Enable on Sandbox: Disable |
| Non-Production Client ID: | Activate for Non-Production (production volgt in een later stadium)|

* 1.3 Back-end App: Ga naar [My Apps / Vendor Services (epic.com)](https://vendorservices.epic.com/Developer/Apps) en maak de volgende App registratie:

| Veld | Vulling |
|--|--|
| Application Name: |`Zorgviewer-Backend`|
| Who will primarily be using this app? | Backend Systems|
| Features:| Incoming API|
| Selecteer de volgende Scopes:|* Binary.Read (Correspondences) (STU3)<br/>* Binary.Read (Radiology Results) (STU3)<br/>* Condition.Search (Encounter Diagnosis, Problems) (STU3)<br/>* Consent.Search (Code Status) (STU3)<br/>* Consent.Search (Document) (STU3)<br/>* DocumentReference.Search (Correspondences) (STU3)<br/>* DocumentReference.Search (Radiology Results) (STU3)<br/>* Flag.Search (Health Concern) (STU3)<br/>* Flag.Search (Infection) (STU3)<br/>* Flag.Search (Patient FYI) (STU3)<br/>* Observation.$lastn (Labs) (STU3)<br/>* Observation.Search (Labs) (STU3)<br/>* Patient.Search (STU3)<br/>* Procedure.Search (Orders, Surgeries) (STU3)<br/>* Specimen.Read (Labs) (STU3)|
| Does your app use OAuth 2.0? |Use Oauth 2.0|
| App FHIR Version:| STU3|
| FHIR ID Generation Scheme: |Use Unconstrained FIHR ID's|
| Non-Production JWK Set URL: | `https://auth.zorgviewer.nl/.well-known/jwks`|
| Production JWK Set URL: | voorlopig leeg laten|
| Advanced: |* Enable on Sandbox: Disable<br/>* Non-Production Client ID: Activate for Non-Production (production volgt in een later stadium)<br/>* Ter info: deze waarschuwing kan genegeerd worden "Add Non-Production Credentials"|

**Stap 2 Client Certificate van de Zorgviewer back-end**
* 2.1 Team Zorgviewer: Het Zorgviewer team genereert een Zorgviewer-Bronsysteem specifiek Certificate Request (Client Certificaat) en leveren dit aan het aan te sluiten organisatie.
* 2.2 Op basis van het door Zorgviewer gegenereerde CSR, vraag een Client Certificaat aan. Dit mag een Publieke CA zijn, maar mag ook uitgegeven zijn door een Interne CA. 
	* Deel het Certificaat met team Zorgviewer.
* 2.3 Team Zorgviewer: PFX genereren op basis van Private Key + Gegenereerde Certificaat en opnemen in de Zorgviewer KeyVault

**Stap 3 Parallel kan het volgende worden geregeld**
* 3.1 Maak een backend User (EMP) aan met de volgende security points:<br/>
	**! Let op: wanneer meer informatie (zibs) worden gedeeld, kan het zijn dat er aanvullende security points nodig zijn.**
	* EpicCare Ambulatory security point 1-Patient Search/Select
	* EpicCare Ambulatory security point 16-Chart Review
	* EpicCare Ambulatory security point 54-Demographics
	* EpicCare Ambulatory security point 94-Chart Review – Order Tabs
	* EpicCare Ambulatory security point 111-Problem List
	* EpicCare Ambulatory security point 176-Review Procedure Reports
	* EpicCare Ambulatory security point 262-View Only Demographics
	* EpicCare Ambulatory security point 311-Order Review
	* EpicCare Ambulatory security point 333-Results Review
	* EpicCare Inpatient security point 4-Results Review
	* EpicCare Inpatient security point 5-Patient Summary
	* EpicCare Inpatient security point 6-Demographics
	* EpicCare Inpatient security point 7-Chart Review
	* EpicCare Inpatient security point 8-View Only Demographics
	* EpicCare Inpatient security point 12-Order Review
	* EpicCare Inpatient security point 13-Problem List
	* EpicCare Inpatient security point 184-View Procedure Reports
	* Nurse Triage/Call Management security point 902-Chart Review
	* Nurse Triage/Call Management security point 903-Demographics
	* MyChart - Hyperspace User security point 47 – Third Party View Questionnaires
	* Care Everywhere security point 4-View Documents
	* Cadence security point 5105-Edit Patient Record
	* Cadence security point 5201-Open Patient Record
	* EpicCare security point 35-Create New Patient
	* Identity security point 1-Create Record
* 3.2 *Moet nog aangevuld worden...* - FHIR endpoint (interconnect) > client id koppelen aan emp (epic manual)
Er moet een backend EMP worden aangemaakt, zie hiervoor de  [Epic Galaxy documentatie Backend System Integration](https://galaxy.epic.com/Redirect.aspx?DocumentID=100001068&PrefDocID=97042)
* 3.3 Uitvoeren van de Epic Sherlock Checklist BgZ VIPP5 voor de zorginformatiebouwstenen in scope
* 3.4 Om te voorkomen dat onterecht een werkdiagnose (die wel in problemlijst mee komen) op "confirmed" worden gezet, moet de FHIR Profile Variabele (AIP) FHIR_NL_PROBLEM_SHOW_VERIFY_STATUS ingesteld worden op 0 (Nee)
* 3.5 Ten behoeve van Audit Logging [Epic Nova](https://nova.epic.com/Search.aspx?CstID=2#SearchTerm=818072)

**Stap 4: Configureren EndPoints**
* 4.1 (UMCG OPLOSSING) Patiënttoestemmingscheck bouwen in broker. De gekozen oplossing is afhankelijk van het eigen organisatie. In het UMCG is dit als volgt geimplementeerd:
<div>
{% include Consent-seq.svg %}
</div>

* 4.1.1 In Epic: Ga naar Documenttype administratie: mapping van het Toestemmingsformulier onder de DocType Group van Patiënttoestemming. Dit is ook afhankelijk van de specifieke inrichting en beleid van de eigen organisatie.
* 4.2 *Moet nog aangevuld worden...* - Interconnect config + interne url's
* 4.3 Ontsluiten van Frontend en Backend end-points via broker naar internet en vervolgens de Zorgviewer IP-reeks 20.160.170.124/31 in de ACL van de Firewall (etc) opnemen zodat de Zorgviewer kan communiceren (HTTPS) met de endpoints. Dit is ook afhankelijk van de eigen organisatie hoe de beveiliging ingeregeld dient te worden. Indien de organisatie met een IP filter wilt werken is bovenstaande nodig.
* 4.4 Endpoint ontsluiten
	* Client Certificaat controle op BackendEndpoint
* 4.5 Aanleveren aan Zorgviewer volgende gegevens:
	* Client ID's
	* Backend (base en token) Endpoints externe URL's backend
	* ISS URL frontend
* 4.6 Toevoegen meta.source (HL7 NL OID van de zorgaanbieder) bij iedere FHIR resource in de FHIR response Bundle
```json
{
"entry": [ {
  "resource": {
    "resourceType": "...",
	  "id": "...",
      "meta": {
        "extension": [ {
            "url": "http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source",
            "valueUri": "urn:oid:2.16.840.1.113883.2.4.3.8"
        } ]
    } }
  } ]
}
```

**Stap 5: Hyperspace configuratie Opstarten Zorgviewer**
* 5.1 FDI record maken voor de Zorgviewer. Gebruik Naming Convention van eigen organisatie.

| Veld | Vulling |
|--|--|
| Type: | PACS[1] |
| Model Record: | SMART ON FHIR |
| Patient ID Type: | MDN |
| Installation Mnemonic Values: | 1 URL: `https://dev.zorgviewer.nl/api/application/launch`<br/>2 Protected: `1`<br/>3 ClientID: eigen clientID<br/>4 Launchtype: 7 (of 6)<br/>7 Use edge browser: 1|

* 5.2 Knop (E2U) maken voor het kunnen opstarten van de Zorgviewer
	* 5.2.1 Plaats de knop in de patiëntencontext en respecteer hierbij eigen Break-the-Glass regels
	* 5.2.2 Knop is dan alleen beschikbaar wanneer iemand in een (poli)klinisch contact van een patiënt kan

* 5.3 Controleren van de "unmasked BSN" setting
	* Open de juiste Shared Security Class (ECL). Zie hiervoor het EMP record item 20800.
	* Controleer of item 20511 gevuld is met een record 'SNN' met item 20512 gevuld met 'data is masked only in printing (masking code)' [3]

***Toegang tot data regelen met Break-The-Glass (BTG)***
* 5.4 De bouw van BTG bestaat uit het maken van de regel (CER), de extensie (LPP) en de Security Policy Check (HAC)
	* 5.4.1 Maak een regel (CER):
	Wanneer deze regel waar is, dan krijgt de gebruiker GEEN toegang tot de gegevens

*Logica:* Op maat: (1 and (2 or 3))

| Nr | Eigenschap | Operator | Waarde |
|--|--|--|--|
| 1 | Constant > User > C_User Role | = |  <GEMAAKTE BACKGROUND USER> Checklist stap 3.1 |
| 2 | Patient > C_Patient Verification > C_PT_VRX | <> | Geverifieerd [1] |
| 3 | Patient > CE - Has Prospective Auth | <> | Ja [1] |


Foutmelding 1

* 5.4.2 Maak een extensie (LPP)
	* Type (i30) = BTG Check [89]
	* Code (i100)= $$chkRule^HUBTGCK9("ID VAN GEMAAKTE CER")
	* Code template (i1000) = CHECK: USE RULE TO EVALUATE BTG [606558]
	* Parameters (Related i1000)= Naam [RULEID] (i1010) & Waarde [ID VAN GEMAAKTE CER] (i1020)
* 5.4.3 Maak een Security Policy Check (HAC)
	* Released (i40) = Uiteindelijk releasen -> Yes [2]
	* Check level (i55) = Patient
	* View list (i105) = FHIR
	* Extensions to run (i110) = ID VAN GEMAAKTE LPP
	* Success type (i120) = Inappropriate [1]


**Stap 6: Testen van de volledige bouw**

### Chipsoft huizen

#### Ontsluiten bronsysteem 

1. Regel Zorgplatform contract, specifiek voor de BgZ en Documenten Services van de [Digital-Care API](https://developer.zorgplatform.online/digital-care)
1. OID's voor Zorgplatform ontsluiting en HiX Webintegratie activiteitendefinities
    * 2.16.840.1.113883.2.4.3.213.1.3 = Test Zorgviewer
    * 2.16.840.1.113883.2.4.3.213.1.2 = Acceptatie Zorgviewer
    * 2.16.840.1.113883.2.4.3.213.1.1 = Productie Zorgviewer
1. Eerste keer FHIR ontsluiting toepassen: Aanzetten / synchroniseren Zorgplatform

#### Opstarten van de Zorgviewer vanuit eigen EPD

1. Webintegratie configureren in HiX

### Topicus huizen met VIPLive

#### Ontsluiten bronsysteem 
1. ...

#### Opstarten van de Zorgviewer vanuit eigen EPD
1. ...

### Nexus huizen

#### Ontsluiten bronsysteem 
1. ...

#### Opstarten van de Zorgviewer vanuit eigen EPD
1. ...

### Verbinding en TLS Certificaten

1. [NCSC ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS)](https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1)
1. ?? Eisen?
1. ?? Waar kan/moet je de Client en Server aanvragen?
1. ...

### Behandelplan / zorgpad / zorgproces

1. Maak uitwerking volgend RadB analysesheet / ZiRA...
1. Installeer in Behandelplan bouwblok


---

// File: input/pagecontent/ConceptMap-behandelaanwijzing-2017-2020-intro.md

* Group 1 = Mapping tussen de zibs [Behandelaanwijzing 2017](https://zibs.nl/wiki/TreatmentDirective-v3.1(2017EN)) en [Behandelaanwijzing2 2020](https://zibs.nl/wiki/TreatmentDirective2-v1.0(2020EN)) 
* Group 2 = Mapping tussen [BehandelingToegestaanCodelijst](http://decor.nictiz.nl/fhir/ValueSet/2.16.840.1.113883.2.4.3.11.60.40.2.2.1.2--20171231000000) en [BehandelBesluitCodelijst](http://decor.nictiz.nl/fhir/ValueSet/2.16.840.1.113883.2.4.3.11.60.40.2.2.2.2--20200901000000)

---

// File: input/pagecontent/ConceptMap-patient-toestemming-intro.md

{% include future-note.md %}

Akkoord voorbeeld HL7 v2 relevante bericht segmenten:
```
PID|1||7765853^^^UMCG^PI~012345678^^^NLMINBIZA^NNNLD||...
...
CON|1|Doss. delen?|||||||||AKKOORD||20230620000503||20430614235959||||||||||
...
```

Geweigerd voorbeeld HL7 v2 relevante bericht segmenten:
```
PID|1||7765853^^^UMCG^PI~012345678^^^NLMINBIZA^NNNLD||...
...
CON|1|Doss. delen?|||||||||GEWEIGERD||20230517121415||20430511235959||||||||||
...
```

---

// File: input/pagecontent/conformance.md

### Uitgangspunten

1. De architectuur moet generiek zijn en voor verschillende zorgpaden en specialismen toepasbaar zijn.
1. Alle actoren in het zorgpad hebben inzage in dezelfde informatie, op basis van de gegeven toestemming van de patiënt.
1. Informatie blijft primair bij de bron en wordt zo min mogelijk gerepliceerd
    * Registratie aan de Bron - zorg voor juiste bron registratie, ontsluit wat er is
    * Aanpassen aan de bron, mappings in de bron en bron corrigeren als mogelijk
1. De Zorgviewer wordt opgestart vanuit de eigen informatieomgeving
1. *TOEKOMST* Informatie kan worden overgenomen in het eigen informatiesysteem wanneer daaraan behoefte is
1. De informatie wordt gefilterd op basis van de specifieke informatiebehoefte, bijvoorbeeld:
    * actief zorgpad
    * alle zorgepisodes van de afgelopen 2 jaar
    * alle benodigde informatie voor een gedefinieerd specifiek zorgpad
    * alle labuitslagen van de afgelopen 4 maanden
1. De architectuur gaat uit van een haalbare eerste versie vanuit bestaande werkwijzen en technische mogelijkheden.
1. De architectuur voldoet aan wet- en regelgeving en maakt compliancy op het gebied van privacy en security mogelijk.
1. De architectuur rust op de verleende toestemming door de patiënt. De patiënt bepaalt of gegevens worden gedeeld, en heeft inzicht in wie de gegevens raadpleegt of overneemt.
1. De architectuur is gebaseerd op [open standaarden](https://en.wikipedia.org/wiki/Open_standard)
1. Taal en transport zijn gescheiden, zodat vendor-lock-in wordt voorkomen
    * Internet-first transport - geen besloten netwerken

### Requirements

#### Zorgviewer Host

**Synoniemen**:
1. Hostsysteem
1. Informatieomgeving

**Definitie**: Informatieomgeving (EPD, ECD, Portal) van de gebruiker van waaruit de Zorgviewer opstart wordt.

**Requirements**:
1. De zorgviewer host draagt zorg voor (lokale) authenticatie van de gebruiker.
1. De zorgviewer host voorziet in patient selectie en toets behandelrelatie.
1. De zorgviewer host kan de zorgviewer opstarten met context (huidige gebruiker en patient).
1. De zorgviewer host ondersteunt patient context wissels.
1. De zorgviewer host ondersteunt gebruiker context wissels.
1. De zorgviewer host biedt mogelijkheid aan de zorgviewer om huidige gebruiker en patiënt details (zoals naam) op te vragen als dit mist in de context.

**Keuze**:
1. Conform [SMART-on-FHIR 1.0.0 EHR launch](http://hl7.org/fhir/smart-app-launch/1.0.0/index.html#ehr-launch-sequence)

**Solutions**:
1. Epic Hyperspace
1. Chipsoft HiX
1. Topicus VIPlive
1. *TOEKOMST* Zorgviewer Launcher - Los voor gebruikers zonder EPD/ECD

#### Zorgviewer

**Definitie**: De Zorgviewer toont data uit de aangesloten bronsystemen, ordent deze, en biedt de gebruiker de mogelijkheid van filtering van de data op basis van het zorgpad of persoonlijke instellingen.

**Requirements**:
1. De zorgviewer bevat zelf geen patiëntgebonden data, en wijzigt geen data in de bronsystemen. 
1. De zorgviewer integreert in de informatieomgeving van de gebruiker.
    1. **Keuze**: Conform [SMART-on-FHIR 1.0.0 EHR launch](http://hl7.org/fhir/smart-app-launch/1.0.0/index.html#ehr-launch-sequence)
1. Het moet mogelijk zijn om aan te geven dat het een spoedsituatie betreft.
1. Conflicten, ontdubbelen en duplicaatdetectie volgens [BgZ MSZ Informatiestandaard](https://informatiestandaarden.nictiz.nl/wiki/BgZ:V1.0_BgZ_MSZ_Informatiestandaard)
    1. De zorgviewer attendeert de gebruiker op belangrijke lacunes in het eigen informatiesysteem: specificeren wat en welke dat zijn. Centraal vastleggen en dat alerten. 
    1. De zorgviewer attendeert de gebruiker op conflicten in het tonen van data van verschillende bronnen waar ze niet overeenkomen. 
    1. De zorgviewer faciliteert in ontdubbelen
1. De zorgviewer logt gebruikersacties (clicks). Dit ten behoeve van optimalisatie gebruikersinterface en trends van gebruik.
1. De zorgviewer biedt de mogelijkheid om informatie te tonen op basis van de plek van de patiënt in het zorgpad.
1. De zorgviewer biedt de mogelijkheid om persoonlijke filters toe te passen.

#### Toestemming

**Definitie**: De expliciete specifieke, vrijgegeven toestemming tot het beschikbaar stellen van zorginformatie door de patiënt (bron: AVG)
{% include img.html img="mitz-toestemming.png" caption="Bron: MITZ Toestemming Documentatie" %}

**Kandidaat solutions**:
1. *INITIEEL*: Regionale service
    1. Invulling: FHIR server met vulling volgens FHIR API van [MITZ "Open autorisatievraag"](https://drive.google.com/file/d/1cHgsz-OORw5QMoGj5Lh_475Bu_TpDHvj/view)
1. Connect4Care Topicus
1. MITZ OTV *TOEKOMST*

#### Identiteit

**Definitie**: Identiteit wordt gebruikt voor: 
* Vastleggen van logging 
* Bepalen van gerechtigde dataset 
* Basis voor authenticatie

**Requirements**:
1. Gebruik van reeds in organisatie in gebruik zijnde ID’s gekoppeld aan een extern erkende identiteit, zoals AGB of BIG voor zorgverleners en zorgaanbieders.
    1. Lokale identiteit MOET AGB-Z of BIG-Nummer als attribuut hebben, zodat we via de Zorgverlener Directory de specialismen en rollen kunnen opvragen
1. Vektis AGB-medische specialismen

#### Zorgverlener Directory

**Synoniemem**:
1. Zorgverlener Registry
1. Zorgaanbieder Registry of Directory
1. Provider Directory (IHE)
1. Adressering
1. White pages

**Definitie**: Register met Identiteiten en attributen van zorgaanbieders en zorgverleners. Voorbeelden zijn volledige naam, maar ook technische endpoints.
>Volledige naam: "F. Heuvel (Cardiologie (cardioloog)) in het UMCG"<br/>
>FHIR Base voor UMCG: https://prd.epic.umcg.nl/fhir/STU3 

**Kandidaat solutions:**
1. Regionale FHIR server met vulling volgens FHIR API van ZORG-AB
    1. [ZORG-AB Implementatiehandeleiding](https://www.vzvz.nl/diensten/gemeenschappelijke-diensten/zorg-ab/releases)
    1. FHIR Interface definitie ZORG-AB: [Simplifier Project](https://simplifier.net/ZORG-AB)
1. *ONDERZOCHT*: Het [BIG-Register](https://www.bigregister.nl/zoek-zorgverlener/zoeken-eigen-systeem) - [Handleiding webservice BIG-register](https://www.bigregister.nl/documenten/publicaties/2017/03/03/handleiding-webservice-big-register) - deze biedt geen FHIR interface, bovendien zit de content ook in het ZORG-AB.

#### Authenticatie

**Definitie**: Het bouwblok authenticatie stelt de identiteit van de gebruiker onomstotelijk vast volgens de wettelijke kaders. Is onderdeel van de Zorgviewer Host.

**Requirements**:
1. ..

**Keuze**:
1. Compliant met [SMART-on-FHIR 1.0.0](http://hl7.org/fhir/smart-app-launch/1.0.0/)

**Invulling Epic**:
1. Zorgviewer [Epic OAuth2](https://appmarket.epic.com/Article/Index?docid=oauth2)
1. Ontsluiting bronsysteem [Epic Backend Authentication](https://appmarket.epic.com/Article/Index?docid=oauth2&section=BackendOAuth2Guide)

#### Autorisatie

**Definitie**: Rechten die een identiteit (zorgverlener, cliënt / patiënt) heeft voor toegang tot cliëntgegevens (bron: NEN 7510).

Er zijn meerdere niveau's van autorisatie, namelijk:
1. De zorgviewer moet geautoriseerd zijn om bronsysteem ontsluitingen te bevragen (technisch: welke FHIR resources in scope en clientID)
1. De gebruiker moet geautoriseerd zijn om de zorgviewer te gebruiken
1. De gebruiker moet geautoriseerd zijn om specifieke gegevens op te vragen aan de hand van toestemming en rol

#### Logging

**Definitie**: Stelselmatige geautomatiseerde registratie van gegevens rond de toegang tot het patiëntdossier, die controle van de rechtmatigheid ervan mogelijk maakt (NEN 7513).

**Requirements**:
1. Bij opvragen van gegevens dient een gebruikersnaam en extern id mee gestuurd te worden door de aanroepende instelling zodat dit bij het bronsysteem kan worden gelogd.
1. Logging dient te gebeuren in het bronsysteem.
1. Logging dient te gebeuren op inzage van de gegevens. 
1. De Zorgviewer logt voor audit log naar een regionale log service. 
1. Logging volgens NEN 7513 en IHE ATNA  

**Solutions**:
1. Regionale FHIR Server met AuditEvents conform NEN 7513 gevuld.

#### Ontsluiting bronsysteem

**Definitie**: Het bouwblok ‘Ontsluiting bronsystemen’ draagt zorg voor het aanleveren van de informatie uit de bronsystemen in een formaat dat door de zorgviewer kan worden verwerkt (Zibs/FHIR).

**Requirements**:
1. Ontsluit minimaal de volgende gegevens: 
    1. de 28 BgZ-Zibs
    1. de correspondentie (radiologie brieven, specialisten brieven, notities, ontslag brief)
    * N.B. de zibs kunnen heel veel gegevens ondersteunen, maar als er geen schermen voor zijn om de gegevens in te voeren of geen workflow is waar die schermen zichtbaar worden, zullen die gegevens nooit beschikbaar zijn.
1. Zorginformatiebouwstenen conform NICTIZ [publicatie 2017](https://zibs.nl/wiki/ZIB_Publicatie_2017(NL)), de 28 BgZ-Zibs,
[Zibs 2017 FHIR Profiles](https://simplifier.net/packages/nictiz.fhir.nl.stu3.zib2017/) en [BgZ 2017](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/FHIR_BGZ_2017) obv [HL7 FHIR STU3](http://hl7.org/fhir/STU3/) 
1. Individuele zibs moeten kunnen worden aangeleverd 
1. Alleen identiteiten zoals gedefinieerd door het Identiteit bouwblok mogen geaccepteerd worden.
1. *TOEKOMST* Bronsysteem ZOU MOETEN checken bij Mitz

**Kandidaat solutions**:
* [Epic Interconnect](https://fhir.epic.com) via Intersystems Iris Healthshare
* [Chipsoft Zorgplatform](https://developer.zorgplatform.online) 
* [Topicus VIPlive](https://viplive.nl/over-ons/viplive-koppelen-met-systemen)
* XDS-NN met een FHIR API volgens de IG (e.g. Documenten)
* Een "Docker" voor een bron die geheel of gedeeltelijk nog niet conform zorgviewer-ig kan ontsluiten
* Nexus via Founda

#### Behandelplan

**Definitie**: De stappen die je als patiënt of cliënt kan doorlopen in het zorgpad. In de zorgviewer zie je een digitale weergave van het -regionaal of per specialisme overeengekomen- zorgpad. Aan de gestructureerde stappen 'hangen' informatiecomponenten (de zibs of codes) vast, waarmee de relevante gegevens hoger getoond kunnen worden.

**Requirements**:
1. ..

**Solutions**:
* FHIR server met PlanDefinitions, focus op data-requirements tbv queries en filters 
    * in lijn met [FHIR Clinical Guidelines](https://hl7.org/fhir/uv/cpg/)
    * in lijn met [Problem List Maps](https://problemlist.org/)

### Technische Requirements

1. Alle implementaties dienen zich te houden aan **Postel's law, Robustness principle** [Grahame Grieve](http://www.healthintersections.com.au/?p=2403) of [Mark Kramer](https://lightmyfhir.org/2016/05/25/postels-law-and-fhir-profiles/)
1. Niet valideren tegen de profiles at-runtime, alleen bij aansluit (zelf) certificeren aan de hand van de [CapabilityStatements](artifacts.html#1) in deze implementatiegids.

### EHR-S FM Requirements Mapping

Het HL7 EHR System Functional Model is een referentie lijst van functies die mogelijk in een EPD Systeem (EHR-S) beschikbaar zijn.

* Bronsysteem Ontsluiting 
    * Alles onder [TI.5 Standards-Based Interoperability](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.5.html)
    * [TI.5.1.1 Application Interchange Standards](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.5.1.1.html)
* Logging [TI.2 Audit](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.2.html)
* Authenticatie
    * [TI.1.1 Entity Authentication](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.1.1.html)
    * [TI.1.11 Trusted Information Exchange Environment](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.1.11.html)
* Autorisatie [TI.1.2 Entity Authorization](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.1.2.html)
* Terminology [TI.4.1 Standard Terminology and Terminology Models](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.4.1.html)
* Toestemming Privacy AVG [TI.1.8 Patient Privacy and Confidentiality](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-TI.1.8.html)
* Behandelplan [CPS.3.3 Support for Standard Care Plans, Guidelines, Protocols](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-CPS.3.3.html)
* Zorgviewer [CPS.3.4 Support for Context-Sensitive Care Plans, Guidelines, Protocols](https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/Requirements-EHRSFMR2.1-CPS.3.4.html)



---

// File: input/pagecontent/copyrights.md

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/datasets.md

Deze pagina beschrijft de content van de datasets.
N.B. Datasets zijn relevante selectie van data elementen met eventueel filters voor een bepaald zorgpad.

### Data Requirements 

*Aka "Gegevenssets" virtueel bouwblok.*

1. Basis zijn de 28 zibs uit de BgZ aangevuld met de correspondentie (radiologie brieven, specialisten brieven, notities, ontslag brief)
1. De Data Requirements zijn een gemeenschappelijk profiel op wat leveranciers nu kunnen en zorginstellingen hebben ingericht in hun workflows (VIPP5).
    1. Leidend zijn de zibs
    1. Vervolgens wordt getest wat de leveranciers ondersteunen van de zibs via FHIR
    * In sommige gevallen kan het zijn dat de workflow niet is ingericht of anders is ingericht (dat mag). Voor mantatory (min=1) en must-support elementen zou die workflow MOETEN worden aangepast om goed te functioneren in de Zorgviewer. Bijvoorbeeld bij zorgverleners MOET een externe identifier geregistreerd zijn, zodat deze ook via FHIR Practitioner wordt ontsloten.

### BgZ+PDF/a

Vanuit verschillende projecten en programma's wordt er gewerkt aan de de Basisgegevensset Zorg (BgZ) bestaande uit 28 zorginformatiebouwstenen (zibs). Vanuit de verschillende projecten en programma's worden bepaalde regels gehanteerd. Vanuit project Zorgviewer fase 1 richten wij ons op de overlap van al deze afspraken. Om hier een duidelijker beeld over te schetsen is het volgende flower venn-diagram opgesteld om de overeenkomsten van de verschillende projecten en programma's zichtbaar te maken.

{% include img.html img="FlowerVenndiagram.png" caption="BgZ+PDF/a Flower Venn-Diagram" width="30%" %}

In het midden van bovenstaande flower venn-diagram staat de zorgviewer (ZV). Het project maakt gebruik van de eisen van verschillende programma's, de mogelijkheden die de verschillende systemen aanbieden (ChipSoft, Epic, Topicus, etc.) en wat de verschillende organisaties al kunnen op het gebied van data-ontsluiting (Martini, MCL, Tjongerschans, UMCG, etc.). 

Onderstaande lijst sommeert nogmaals wat de verschillende bronnen zijn van de desbetreffende programma's, leveranciers en organisaties:
1. Wat wordt geëist vanuit de wet en moet dus door de leveranciers worden ondersteund: 
     1. [IZA](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjr49Tvntv9AhWK2aQKHdAaDooQFnoECAwQAQ&url=https%3A%2F%2Fwww.rijksoverheid.nl%2Fbinaries%2Frijksoverheid%2Fdocumenten%2Frapporten%2F2022%2F09%2F16%2Fintegraal-zorgakkoord-samen-werken-aan-gezonde-zorg%2Fintegraal-zorg-akkoord.pdf&usg=AOvVaw3KopPSCxT2VkhnPKQlehkb&cshid=1678790821565394)
     1. Vanuit de ziekenhuizen: [VIPP5 Staatscourant stcrt-2020-7935](https://zoek.officielebekendmakingen.nl/stcrt-2020-7935.html)
     1. Vanuit de huisartsen: [VIPPOPEN Staatscourant 2022 3373260-1029631-CZ](https://zoek.officielebekendmakingen.nl/stcrt-2022-18226.html)
1. MedMij specs (basic): 
    1. [BgZ 2017](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/OntwerpBGZ_2017)
    1. [BgZ 2017 FHIR](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/FHIR_BGZ_2017)
    1. [PDF/a](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/OntwerpPDFA)
1. Wat kan Epic nu:
    1. De Epic huizen implementeren de zibs uit de BgZ, dus niet alleen laatste bloeddruk, maar alle b.v. Ofwel, we doen meer dan de BgZ en minder dan de zibs.
    1. [Epic FHIR](https://fhir.epic.com/Specifications) **STU3** *Provider-Facing*
    1. [SMoR - VIPP 5 Module 1 - PDFA Correspondence via FHIR - Design - February 2021 revision.pdf](https://umcgonline.sharepoint.com/:b:/r/sites/RIVO-Noord-RealisatieZorgviewer/Shared%20Documents/Werkgroep%20Implementatie%20gids/Achtergrond%20materiaal/SMoR%20-%20VIPP%205%20Module%201%20-%20PDFA%20Correspondence%20via%20FHIR%20-%20Design%20-%20February%202021%20revision.pdf?csf=1&web=1&e=o7DDKG)
    1. [SMoR - VIPP 5 Module 1 - Updates to BgZ on FHIR to Support Hospital MedMij Kwalificatie - Medications and Problems](https://umcgonline.sharepoint.com/:b:/r/sites/RIVO-Noord-RealisatieZorgviewer/Shared%20Documents/Werkgroep%20Implementatie%20gids/Achtergrond%20materiaal/VIPP%205%20Module%201%20-%20Updates%20to%20BgZ%20on%20FHIR%20to%20Support%20Hospital%20MedMij%20Kwalificatie%20-%20Medications%20and%20Problems.pdf?csf=1&web=1&e=bTTAUJ)
    1. [SMoR - VIPP 5 Module 1 - BGZ on FHIR - Design - July 2020 revision.pdf](https://umcgonline.sharepoint.com/:b:/r/sites/
    RIVO-Noord-RealisatieZorgviewer/Shared%20Documents/Werkgroep%20Implementatie%20gids/Achtergrond%20materiaal/SMoR%20-%20VIPP%205%20Module%201%20-%20BGZ%20on%20FHIR%20-%20Design%20-%20July%202020%20revision.pdf?csf=1&web=1&e=fEd69C)
1. Wat kan Chipsoft nu:
    1. [Digitale Zorg Zorgplatform](https://developer.zorgplatform.online/digital-care)
    1. [FHIR BgZ API](https://developer.zorgplatform.online/digital-care/api/bgz)
    1. [FHIR Document API](https://developer.zorgplatform.online/digital-care/api/document)


#### Voorbeeld BgZ

De Basisgegevensset Zorg (BgZ), ook wel patient summary (PS) genoemd, behandelen wij als een sub-set van zibs. In de BgZ worden de BgZ-secties beperkt. Bijvoorbeeld de BgZ-sectie Uitslagen beperkt zich op klinisch chemisch lab, laatste uitslag. Dit zou betekenen dat de zorgverlener geen inzage heeft in trends (eerdere klinische chemie uitslagen) of andere typen laboratorium uitslagen. De andere laboratorium uitslagen zijn bijvoorbeeld hematologie, serologie/immunologie, virologie, toxicologie, microbiologie of moleculaire genetica (zie zib LaboratoriumUitslag - ResultaatType - ResultaatTypeCodelijst). Deze filters op de zibs beschouwen we als voorbeelden. Vanuit project zorgviewer laten wij deze filters achterwegen, zodat alle lab-uitslagen ingezien kunnen worden. 

### Typen consent

#### Informed Consent

In de gezondheidszorg wordt gebruik gemaakt van de [Informed Consent](https://www.knmg.nl/advies-richtlijnen/dossiers/informed-consent). Middels de informed consent geeft de patiënt toestemming voor het uitvoeren van het medisch beleid door de zorgverlener. Het wordt 'informed' genoemd, omdat je de patiënt voorafgaand informeert over de mogelijke behandeling en de consequenties van behandelen. Bij behandelen worden ook de onderzoeken verstaan, zoals bloedafname of de röntgen foto. 

Het informeren van de patiënt over de behandeling is de informatieplicht die een zorgverlener heeft. Dit is ook vastgelegd in de Wet Geneeskundige BehandelOvereenkomst (WGBO). 

#### Toestemming delen gegevens

Voor het delen van gegevens moet apart toestemming gevraagd worden. Dit is niet opgenomen in het informed consent. Op dit moment moet bij elke instelling apart de toestemming gevraagd én geregistreerd worden in eigen informatiesysteem. Hierdoor ervaren gebruikers problemen, omdat niet in elke instelling de toestemming juist is geregistreerd, waardoor informatie niet uitgewisseld kan worden.

[*Mitz-toestemming*](https://www.mitz-toestemming.nl/)
Om problemen rondom toestemming en gegevensuitwisseling tegen te gaan is er landelijk Mitz gekozen als dé oplossing voor de toestemmingsvoorziening. In Mitz kan de patiënt op één plek zijn/haar toestemmingen beheren. Alle uitwisselingssystemen (US) worden aangesloten op Mitz, zodat ook de US'en op de hoogte zijn van de toestemming van de patiënt. De toestemming wordt op een categorie van zorgaanbieders geregistreerd. 

Als een zorgaanbieder de toestemming van een patiënt wil raadplegen, dan wordt er een vraag gesteld aan het US. Het US vraagt dan de toestemming op bij Mitz. Eerst wordt er gevraagd of er toestemming is voor het delen van gegevens: [de gesloten autorisatievraag](https://www.mitz-toestemming.nl/over-mitz/hoe-werkt-mitz).

#### Huidige MITZ toestemmingen (v3.8.1)

Algemene vraag aan patient:
> "Geeft u {gevelnaam zorgaanbieder} toestemming om uw noodzakelijke {gegevenscategorie} beschikbaar te stellen aan andere zorgaanbieders, zoals huisartsen, ziekenhuizen en andere medisch specialistische instellingen en apotheken, als dat voor uw behandeling nodig is?"

Zorgaanbiedercategorien (raadeplegende):
* Huisartsen en huisartsenposten
* Ziekenhuizen, medische centra en klinieken
* Geestelijke gezondheidszorg (GGZ)
* Verpleging en verzorging
* Apotheken
* Laboratoria en diagnostische centra

Gegevenscategorieën:
* Behandelgegevens (medische gegevens)
* Uitslagen (zit ook in #1)
* Medicatiegegevens (zit ook in #1)
* Alle gegevens

### Acute Zorg

Binnen de acute zorg lopen een aantal trajecten om gegevensuitwisseling voor elkaar te krijgen. Binnen de acute zorg is het noodzakelijk om op snelle wijze informatie over de patiënt te ontvangen. Denk bijvoorbeeld aan het reanimatiebeleid en -wensen van de patiënt. Middels project e-Spoed is getracht om afspraken rondom verschillende scenario's in kaart te brengen. Per scenario's worden verschillende technische en functionele eisen gesteld; denk aan het berichttype en naar wie het bericht verstuurd moet worden. Deze informatiestandaard staat onder beheer van Nictiz. 

Verder heeft de acute zorg meerdere andere informatiestandaarden per uitwisseling uitgeschreven, onder andere:
* Ambulanceoverdracht naar SEH en retourbericht 2.4.0
* (Triage)verwijzingen; spoedmelding; bevestiging en voorwaarschuwing 1.5.0
* Professionele samenvatting en rapportages verleende zorg 2.1.0

Hieronder nog een aantal links:
* [https://nictiz.nl/standaarden/informatiestandaarden/acute-zorg/](https://nictiz.nl/standaarden/informatiestandaarden/acute-zorg/)
* [https://informatiestandaarden.nictiz.nl/wiki/Landingspagina_Acute_Zorg](https://informatiestandaarden.nictiz.nl/wiki/Landingspagina_Acute_Zorg)
* [https://amigo.nictiz.nl/acute-zorg/opvragingen-bij-huisarts/dataset](https://amigo.nictiz.nl/acute-zorg/opvragingen-bij-huisarts/dataset)

### HartNet - TAVI Proces

[HartNet is een regionaal samenwerkingsverband tussen de ziekenhuizen in Groningen en Drenthe](https://www.umcg.nl/-/hartnet-de-juiste-hartzorg-op-de-juiste-plek). Het doel is om de juiste hartzorg op de juiste plek aan te bieden voor de bewoners in Noord-Nederland. HartNet heeft daarom vijf verschillende zorgpaden volledig uitgeschreven en geoptimaliseerd. Eén van deze zorgpaden is het TAVI zorgpad en staat voor Transcatheter Aortic Valve Implantation. Bij TAVI wordt een hartklep vervangen, wanneer deze niet optimaal werkt. Denk aan aandoeningen zoals aortaklepstenose; een aandoening waarbij de hartklep onvoldoende sluit. 

Het TAVI zorgpad is eerst uitgeschreven door de afdelingen van de verschillende huizen en vervolgens over elkaar gelegd.  

Het idee van de regionale zorgpaden is om de zorg op de juiste plek bij de juiste professional uit te voeren:
* De diagnostiek vindt plaats in de 2e lijn;
* De Hart Bespreking (MDO) vindt plaats in de 3e lijn voor het bepalen van het zorgplan;
* De ingreep wordt uitgevoerd in de 3e lijn;
* De follow-up wordt uitgevoerd in de 2e lijn.

### Advanced Care Planning

Advanced Care Planning (ACP) wordt ook wel het proactieve zorgplan genoemd. Een plan waarin de wensen en behoeften van de patiënt worden beschreven. In de ACP Leidraad proactieve zorgplanning (advance care planning) van Palliaweb wordt het proces van het verkrijgen van informatie rondom ACP uitgelegd. In het ACP staan zaken rondom de wilsbekwaamheid, wettelijke vertegenwoordiging, doelen van behandeling en behandelgrenzen. Behandelgrenzen beschrijven onder andere het reanimatiebeleid.

Het ACP beschrijft ook informatie over de patiëntencontext in de Gegevensset Passende Zorg (GPZ). Deze gegevensset heeft overeenkomsten met de Gegevensset Oncologie Algemeen (GOA) en de MensGebonden Set (MGS). De set komt ook overeen met de basisgegevensset zorg (BgZ) met een aantal aanvullingen:
* Sociale context
    * Gezinssamenstelling
    * Beroep
    * Hobbies
    * Sociaal netwerk
    * Onafhankelijkheid
    * Sociale observaties
* Zingeving
* Communicatie
* Organisatie van zorg
    * Plaats van zorg
    * Plaats van overlijden
* Functioneel en somatisch (specifieke vragenlijsten / metingen)

Vanuit project Zorgviewer is de ACP deels in scope, namelijk de BehandelAanwijzing (TreatmentDirective) met een aanvulling in de codelijst. Codelijst die gebruikt gaat worden voor de zorgviewer is een lijst met 8 items, zie [TreatmentDirective ACP behandelingen waardelijst](ValueSet-ACPTreatmentCodelist.html)

Voor de volledige dataset, kijk op [Nictiz ART-DECOR](https://decor.nictiz.nl/art-decor/decor-project--pall-izppz-)


---

// File: input/pagecontent/design-authenticatie.md

<style>table, td, th { border: 1px solid black; padding:5px; }</style>

### Opstarten zorgviewer: Summary Table

In onderstaande tabel hebben we voor alle methoden de verschillende definities van attributen naast elkaar gezet en waar ze te vinden zijn in de verschillende standaarden (SAML, SMART-on-FHIR, FHIR).

| Item | Chipsoft Zorgplaform (SAML) | VIPLive (SAML) | Epic (SMART-on-FHIR) | Value | FHIR Path |
|--|--|--|--|--|--|
| Workflow ID | http://sts.zorgplatform.online/ws/claims/2017/07/workflow/workflow-id | nvt | nvt | `a84f5229-c804-4627-8b80-489ae3ed6a51` | nvt |
| Practitioner ID | Subject/NameID | Subject/NameID | Practitioner read adhv token.practitioner / *zie FHIR Path* | `177578` | Practitioner.identifier |
| Practitioner Name | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name | professional.initials | ^^ / *zie FHIR Path* | `L.` | Practitioner.name.given[extension=IN] |
| Practitioner Name | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name | professional.family_name | ^^ / *zie FHIR Path* | `Arts` | Practitioner.name.family |
| Practitioner Role | urn:oasis:names:tc:xacml:2.0:subject:role | urn:oasis:names:tc:xacml:2.0:subject:role | PractitionerRole read adhv token.practitioner | `code=62247001 display=huisarts system=SNOMED CT` | PractitionerRole.code[system=sct] n.b. via [ConceptMap-epic-rolcode](ConceptMap-epic-rolcode.html) |
| Organization OID | urn:oasis:names:tc:xspa:1.0:subject:organization-id | organization-id | ^^ / *zie FHIR Path* | `2.16.840.1.113883.2.4.3.8` | Practitioner.meta[extension=source] |
| Patient BSN | urn:oasis:names:tc:xacml:1.0:resource:resource-id | client.bsn | Patient read adhv token.patient / *zie FHIR Path* | `999911120` | Patient.identifier[system=bsn] |
| Patient FHIR ID | patient-fhir-id uit Task.reference read adhv workflow-id |  | token.patient / *zie FHIR Path* | `9819C39260647B5DE61609CDF1FA1C` | Patient.id |
| Patient Name | ^^ / *zie FHIR Path* | client.initials | ^^ / *zie FHIR Path* | `J.` | Patient.name.given[extension=IN] |
| Patient Name | ^^ / *zie FHIR Path* | client.family_name | ^^ / *zie FHIR Path* | `Fictief` | Patient.name.family |
| Patient Birthdate | ^^ / *zie FHIR Path* | client.birthdate | ^^ / *zie FHIR Path* | `19700101` | Patient.birthDate |

### Verkrijgen bronsysteem access token

<blockquote class="stu-note" markdown="1">
N.B. Deze IG bouwt op SMART-on-FHIR 1.0.0 ivm FHIR STU3 en Scopes notatie. De bijbehorende backend authenticatie is gespecificeerd in Bulk Data Access FHIR specificaties. SMART-on-FHIR 2.0 brengt eea weer samen, maar upgrade ook de Scopes en de FHIR versie naar R4. Daarom blijven wij voor MVP2 bij de 1.0.0 versie.
</blockquote>

<blockquote class="stu-note" markdown="1">
N.B. Vanuit de WEGIZ wordt de TA Notified Pull een eis. Richting de toekomst zullen de verschillende bronsystemen hier naartoe werken.
Naast SMART-on-FHIR zal de TA Notified Pull de voorkeur standaard zijn. Tot die tijd moeten we meerdere vormen ondersteunen, zie de Summary Tables. 
</blockquote>

Hier passen we de request access token flow toe van de Bulk Data Access Backend authenticatie specificaties.
Daarnaast ivm NEN 7513 logging requirement moet het bronsysteem de vragende organisatie weten. De vragende organisatie is de organisatie van de geauthenticeerde gebruiker van de Zorgviewer. De [IHE IUA standaard](https://profiles.ihe.net/ITI/IUA/) beschrijft de attribuut naam die hiervoor gebruikt dient te worden in de authentication JWT die mee gaat naar de access token request. Dit is ook zoals LSP/VZVZ dit doet.
```
{ "iss": "...",
  "sub": "...",
  "exp": "...",
  (optioneel) "subject_organization": "UMCG",
  "subject_organization_id": "urn:oid:2.16.840.1.113883.2.4.3.8" 
}
```

### Bevragen bronsysteem: Summary Table

In onderstaande tabel hebben we voor alle methoden de verschillende definities van attributen naast elkaar gezet en waar ze te vinden zijn in de verschillende standaarden (Zorgviewer, SAML, SMART-on-FHIR, TA Notified Pull).

| Item | Generiek (HTTP-Header) | **TA Notified Pull** | Chipsoft Zorgplaform (SAML) | VIPLive (SAML) | Epic (SMART-on-FHIR) | Value | FHIR Path |
|--|--|--|--|--|--|--|--|
| PurposeOfUse |   | *FHIR Task.code* | urn:oasis:names:tc:xspa:1.0:subject:purposeofuse | nvt | nvt | `TREATMENT` | nvt |
| Workflow ID |   | *FHIR Task.identifier* | http://sts.zorgplatform.online/ws/claims/2017/07/workflow/workflow-id | nvt | nvt | `a84f5229-c804-4627-8b80-489ae3ed6a51` | nvt |
| Patient BSN |   | auth_token.patient | urn:oasis:names:tc:xacml:1.0:resource:resource-id | client.bsn | auth_token.patient | `999911120` | Patient.identifier[system=BSN] |
| Practitioner ID | X-ZV-Subject-Id | auth_token.user_id | Subject/NameID | Subject/NameID | auth_token.subject_id en HTTP-Header AORTA-ID usr | `177578` | Practitioner.identifier |
| Practitioner Role | X-ZV-Subject-Role | auth_token.user_role | urn:oasis:names:tc:xacml:2.0:subject:role | urn:oasis:names:tc:xacml:2.0:subject:role | auth_token.subject_role en HTTP-Header AORTA-ID rol | `code=62247001 display=huisarts system=SNOMED CT` | Practitioner.qualification[system=sct] |
| Practitioner Name |   |   | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name | professional.initials + professional.family_name | auth_token.subject_name | `L. Arts` | Practitioner.name |
| Organization OID | X-ZV-Subject-Organization-Id | auth_token.sub | urn:oasis:names:tc:xspa:1.0:subject:organization-id | urn:oasis:names:tc:xspa:1.0:subject:organization-id | auth_token.subject_organization_id en HTTP-Header AORTA-ID org | `2.16.528.1.1007.3.3.15123` | Practitioner.meta[extension=source] |
| Correlation ID | X-Correlation-Id |   | &#8656; | &#8656; | HTTP-Header AORTA-ID cid | [NaN0-1D-12](https://zelark.github.io/nano-id-cc/) `H54f_8b9d6bC` | nvt |
| Request ID | X-Request-Id |   | &#8656; | &#8656; | HTTP-Header AORTA-ID rid | [NaN0-1D-12](https://zelark.github.io/nano-id-cc/) `1b9d6bCd-bBf` | nvt |
| Context | X-ZV-Context |   | &#8656; | &#8656; | &#8656; | zie boven |   |


---

// File: input/pagecontent/design-background.md

### Opties Ontsluiten Bronsysteem

In onderstaande plaat zijn een 2-tal opties geschetst voor het positioneren van de bouwblok Ontsluiten Bronsysteem.
Let op: dit is niet een solution layer plaat. Het kan nog steeds dat de functionaliteit van het bouwblok Ontsluiten Bronsysteem gesplitst is.

Functionaliteiten:
* Zorgt voor een FHIR IF conform deze implementatie gids.
* Als deze bij de zorgaanbieder wordt geplaatst zal hier ook iets van firewall functionaliteit in zitten om de FHIR IF veilig op het internet te ontsluiten.
* Als de Bron (EPD/ECM) geen FHIR kan of niet helemaal standaard, kunnen hier transformaties gebeuren.

{% include img.html img="ontsluiten-bronsysteem-opties.png" caption="Opties Ontsluiten Bronsysteem" width="70%" %}

#### Optie 1 (groen)
Voor het ontsluiten van het bronsysteem is een resource server, waar de informatie opgehaald kan worden, en is er een authenticatie server nodig, waar de authenticatie wordt afgehandeld. Bij optie 1, zijn de inrichting en het beheer met name aan de zorgaanbieder kant benodigd en kan de Zorgviewer op basis van de afgesproken standaard uit deze IG connecteren. 

* Conclusie: Inrichten en beheer ligt bij de zorgaanbieder.

#### Optie 2 (paars)
Voor het ontsluiten van het bronsysteem is een resource server, waar de informatie opgehaald kan worden, en is er een authenticatie server nodig, waar de authenticatie wordt afgehandeld. Bij optie 2, zijn de inrichting en het beheer met name aan de Zorgviewer kant benodigd en kan de Zorgviewer op basis van de iets afwijkende standaard uit deze IG connecteren. 

* Conclusie: Zorgviewer Bouw team neemt ontwikkeling en beheer op zich.

### Ontsluiten ACP vanuit Dokter Drenthe / VIPLive

In onderstaande plaat is globaal weergegeven hoe de systemen van de huisarts integreren richting de Zorgviewer.

{% include img.html img="ontsluiten-dokterdrenthe.png" caption="Ontsluiten dokter Drenthe" width="70%" %}

#### Definities
* Topicus = Leverancier van VIPLive
* VIPLive = producten suite / platform, VIPLive is geen HIS, in VIPLive wordt de ACP ingevoerd door de huisarts
* VIPLive Spoed EPD = module van VIPLive en wordt gebruikt in de huisartsenpost

#### Omschrijving proces
VIPLive (SPOED EPD) is het systeem waarmee de Zorgviewer gekoppeld moet worden. Het VIPLive platform, met daarin SPOED EPD wordt in de avond, nacht en weekend gebruikt door de huisartsenpost (HAP). De triagist aan de telefoon voert de triage uit wanneer een patiënt belt. De gegevens van de patiënt en BSN wordt gedocumenteerd in het VIPLive Spoed EPD. Basale dossier informatie is hier al bekend via Landelijk SchakelPunt (LSP) indien patiënt toestemming heeft gegeven.
 
Niet elk huisartspraktijk in Noord-Nederland (Groningen/Friesland/Drenthe) heeft VIPLive. Echter, in Drenthe is regionaal afgesproken om VIPLive (Spoed EPD) te gebruiken bij de HAPPEN. Daarbij wordt de ACP informatie áltijd in VIPLive vastgelegd. Nogmaals, deze afspraak is regionaal gemaakt binnen Drenthe. Dit is niet het geval in Friesland en in Groningen.

Voor alle huisartsen (niet HAP) is het relevant om de correspondentie vanuit het ziekenhuis te kunnen inzien vanuit VIPLive in de Zorgviewer. 

De integratie is als volgt met de Zorgviewer
* Ophalen van de ACP uit VIPLive platform met daarin VIPLive Spoed EPD
* opstarten Zorgviewer vanuit VIPLive

 

---

// File: input/pagecontent/design-logging.md

### Gerelateerde Artifacts

* [Logging CapabilityStatement](CapabilityStatement-Logging.html)
* [AuditEvent Profile](StructureDefinition-AuditEvent.html)

### Toevoegen Logging HTTP-Headers

Tbv het correleren van de Zorgviewer logging met de logging van een Bronsysteem dient een `X-Correlation-Id` HTTP Header (per sessie) en een `X-Request-Id` HTTP Header (per request) te worden toegevoegd aan ieder request aan het Bronsysteem. Deze kan dan door het Bronsysteem gelogd worden, zodat de logging in de Zorgviewer kan worden gekoppeld aan de logging in het Bronsysteem.
Epic ondersteunt dit nu d.m.v. key-value pairs in de `AORTA-ID` HTTP-Header, zie [Epic Nova](https://nova.epic.com/Search.aspx?CstID=2#SearchTerm=818072).

Voorbeeld voor Epic HTTP-Header van "L. Arts uit Tjongerschans": `AORTA-ID: rid:1b9d6bCd-bBf;cid:yA8UM8fHmhde;usr:larts;rol:62247001;org:2.16.528.1.1007.3.3.15123`. N.B. maximale lengte is 128 characters.
Voor de Request- en Correlation-ID's kan de [NaN0-1D-12](https://zelark.github.io/nano-id-cc/) 12 tekens gebruikt.

Voorbeeld van de headers:
```
GET /fhir/Patient/123456789 HTTP/1.1
...
X-Request-Id: 1b9d6bCd-bBf
X-Correlation-Id: H54f_8b9d6bC
```

### Gebruiker en Organisatie HTTP-Headers

De overige velden worden op twee manieren meegestuurd: individueel als HTTP header en verpakt in een
JWT, tevens als HTTP header.
De JWT variant is de veiligere optie, omdat de JWT ondertekend is en de waarden daarmee niet aangepast
kunnen worden. Het is echter niet perse gegarandeerd dat deze constructie door een bronsysteem
ondersteund wordt. Daarom worden ze ook individueel als HTTP header meegestuurd.
Voor de naamgeving is gekozen voor een prefix `X-ZV-` (Zorgviewer) gevolgd door de naam van het veld,
die weer gebaseerd zijn op [IHE IUA](https://profiles.ihe.net/ITI/IUA/#3714221-json-web-token-option).

Voorbeeld van de headers per veld:
```
GET /fhir/Patient/123456789 HTTP/1.1
...
X-ZV-Subject-Organization-Id: 2.16.840.1.113883.2.4.3.8
X-ZV-Subject-Id: smart-Practitioner-71614502
X-ZV-Subject-role: 223366009
```

Voorbeeld van de JWT:
```
{
 "subject_organization_id": "2.16.840.1.113883.2.4.3.8",
 "subject_id": "smart-Practitioner-71614502",
 "subject_role": "223366009"
}
```

De JWT wordt ondertekend met de private key waarmee ook de JWT voor het request voor access tokens
wordt ondertekend. Hiervoor is al een route ingericht om het publieke deel van de key op te vragen ([JWKS](https://auth.zorgviewer.nl/.well-known/jwks)).
Vervolgens wordt de JWT in een custom HTTP header geplaatst:
```
GET /fhir/Patient/123456789 HTTP/1.1
...
X-ZV-Context:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0X29yZ2FuaXphdGlvbl9pZCI6I
jIuMTYuODQwLjEuMTEzODgzLjIuNC4zLjgiLCJzdWJqZWN0X2lkIjoic21hcnQtUHJhY3RpdGl
vbmVyLTcxNjE0NTAyIiwic3ViamVjdF9yb2xlIjoiMjIzMzY2MDA5In0.luhI3cpGGpoEIAtDi
8d-Bhf0h2wdEO1f_Jt1xHFe1Xc
```
Het ontvangende systeem kan nu de JWT decoden, valideren en de velden uitlezen.

---

// File: input/pagecontent/design-security.md



<div>
{% include Security-Design-seq.svg %}
</div>

---

// File: input/pagecontent/design.md

<style>table, td, th { border: 1px solid black; padding:5px; }</style>

Deze pagina beschrijft de interacties tussen de bouwblokken voor het opstarten van de zorgviewer en het ontsluiten van de bronsystemen. 
Dit is de startpagina voor het bouwteam.

### Bouwblokken

{% include img.html img="bouwblokken.png" caption="Bouwblokken" width="70%" %}

| | |
| --- | --- |
| **[Toestemming](CapabilityStatement-Toestemming.html)** | Inwoners van onze zorgregio geven op één keer, op één plek zorgverleners toestemming, dat zij  hun zorggegevens mogen inzien van andere behandelaren en vanuit andere zorgorganisaties. |
| **Gebruikers [Authenticatie](design-authenticatie.html)** | Klopt het dat jij als zorgverlener bent, wie je zegt dat je bent? Werk jij echt bij die zorgorganisatie? Door middel van twee factor authenticatie binnen je eigen informatieomgeving wordt jouw identiteit op twee manieren gecheckt. Met deze authenticatie heb je ook toegang tot de Zorgviewer. |
| **Autorisatie** | Welke informatie van patiënten en cliënten is voor mij als zorgverlener beschikbaar? Mag je als apotheker bijvoorbeeld de volledige zorginformatie zien of heb je enkel inzag in labuitslagen en medicatie?<br/>**N.B. Zorgviewer heeft 1 autorisatie profiel, namelijk alle Zorgverleners die toegang hebben tot de Zorgviewer hebben toegang tot het ontsloten dossier van de patiënt of cliënt als die toestemming heeft gegeven.** |
| **[Patiëntindex](CapabilityStatement-Toestemming.html)** | De patiëntindex maakt inzichtelijk bij welke zorgorganisaties de patiënt of cliënt bekend is. De zorgviewer bevraagt bij het inloggen door een zorgverlener enkel de informatiesystemen van deze zorgorganisaties. |
| **[Logging](design-logging.html)** | Wie logt wanneer en waar in? Het geautomatiseerde logboek houdt exact bij welke zorgverlener toegang heeft gevraagd en gekregen tot de zorginformatie van een patiënt of cliënt. |
| **[Behandelplan](CapabilityStatement-Behandelplan.html)** | De stappen die je als patiënt of cliënt doorloopt in het zorgpad. In de zorgviewer zie je een digitale weergave van het -regionaal overeengekomen- zorgpad. Aan de gestructureerde stappen ‘hangen’ informatiecomponenten vast. |
| **[Ontsluiting bronsysteem](CapabilityStatement-OntsluitenBronsysteem.html)** | Elk informatiesysteem communiceert in een eigen taal. Dit technische bouwblok is een koppeling, die ervoor zorgt, dat alle zorginformatie uit de verschillende bronsystemen in de zorgviewer in dezelfde taal beschikbaar is. |
| **Overname** *TOEKOMST* | Is de zorginformatie -beschikbaar in de zorgviewer, afkomstig van een ander bronsysteem- voor jou als zorgverlener relevant, dan kan je deze selecteren en overnemen in de informatieomgeving van jouw zorgorganisatie. |
| **Zorgviewer** | Alle bouwblokken samen vormen de zorgviewer. De zorgviewer combineert, ontdubbelt en filtert de informatie op basis van jouw behoefte als zorgverlener. De zorgviewer biedt zorgverleners een 360° beeld van de patiënt of cliënt. Opgebouwd uit alle beschikbare zorginformatie, waarvoor de patiënt of cliënt toestemming heeft gegeven. |
| **[Zorgviewer Services](zorgviewer-services.html)** | Bouwblokken voor generieke services |

**Multi-inzetbaar**: *De bouwblokken zijn niet alleen bruikbaar voor de regionale zorgviewer, maar zijn ook bruikbaar en essentieel voor het delen van diagnostiek, multidisciplinair overleg, monitoring en e-Health en de Persoonlijke Gezondheidsomgeving (PGO).* |

### Bouwblokken samenwerking

In onderstaande schema zie je de groepering en interacties (in globale volgorde) tussen de verschillende bouwblokken.

<div>
{% include Zorgviewer-comp-1.svg width="60%" %}
</div>

### Functionaliteiten

Hierna volgt een schema met functionaliteiten per bouwblok.

<div>
{% include Functionaliteiten.svg width="60%" %}
</div>

### Actors

Scope MVP2 is Epic (UMCG, MCL), Chipsoft (Antonius Sneek, Tjongerschans, Wilhelmina, Martini, Nij Smellinge), en Topicus VIPlive (bij Dokter Drenthe aangesloten partijen).

### IHE System Actors

Note: Relatie tussen bouwblokken en definities uit [IHE Actors](https://gazelle.ihe.net/GMM/tf/actor/listActors.seam), b.v. de [IHE Mobile Profiles IHE_PCC_Suppl_QEDm](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_QEDm.pdf)

* Authorization Client, Result Aggregator - Zorgviewer bouwblok
* Authorization Server - Authenticatie bouwblok
* Provider Information Directory - Zorgverlener Registry bouwblok
* Clinical Data Consumer "Raadpleger" - Zorgviewer bouwblok
* Clinical Data Source "Beschikbaar steller" - Ontsluiten Bronsysteem bouwblok

### Sequence Diagrams

### Opstarten zorgviewer: Epic

Eerst opstarten Zorgviewer Host, inloggen en patiënt selectie en vervolgens opstarten van de Zorgviewer.

**Van toepassing zijnde standaarden en documentatie**:
* [SMART-on-FHIR 1.0.0](http://hl7.org/fhir/smart-app-launch/1.0.0/)
* [EHR Launch](http://hl7.org/fhir/smart-app-launch/1.0.0/#ehr-launch-sequence)
* [Epic SSO Launching](https://appmarket.epic.com/Article/Index?docid=launching)

<div>
{% include Zorgviewer-seq-1-fhir.svg %}
</div>

**Token Attributes mapping op FHIR tabel**:

| Scope | Name/Path | Value | FHIR Path |
|--|--|--|--|
| Practitioner FHIR ID | practitioner | ``ABCD..`` | Practitioner.id |
| Patient FHIR ID | patient | ``WXYZ..`` | Patient.id |

### Opstarten zorgviewer: Chipsoft HiX/Zorgplatform

Eerst opstarten Zorgviewer Host, inloggen en patiënt selectie en vervolgens opstarten van de Zorgviewer.

**Van toepassing zijnde standaarden en documentatie**:
* [XACML SAML Profile Version 2.0](https://docs.oasis-open.org/xacml/xacml-saml-profile/v2.0/xacml-saml-profile-v2.0.html)
* [Chipsoft Web Browser Single-Sign-On](https://developer.zorgplatform.online/digital-care/authenticatie)

<div>
{% include Zorgviewer-seq-1-zp.svg %}
</div>

**SAML Attributes Assertions mapping op FHIR tabel**:

| Item | Attribute Name/Path | Value | FHIR Path |
|--|--|--|--|
| Workflow ID | http://sts.zorgplatform.online/ws/claims/2017/07/workflow/workflow-id | `a84f5229-c804-4627-8b80-489ae3ed6a51` | nvt |
| Practitioner ID | Subject/NameID | ``larts@2.16.528.1.1007.3.3.15123`` | Practitioner.identifier |
| Practitioner Role | urn:oasis:names:tc:xacml:2.0:subject:role | ``SNOMED CT 62247001 huisarts`` | PractitionerRole.code[system=sct] |
| Patient BSN | urn:oasis:names:tc:xacml:1.0:resource:resource-id | ``999911120`` | Patient.identifier[system=bsn] |

### Opstarten zorgviewer: VIPlive

**Van toepassing zijnde standaarden en documentatie**:
* [XACML SAML Profile Version 2.0](https://docs.oasis-open.org/xacml/xacml-saml-profile/v2.0/xacml-saml-profile-v2.0.html)
* VIPLive Interconnect - IdP initiated SAML 2023-11-09 17:01:43 Versie 1.1

<div>
{% include Zorgviewer-seq-1-viplive.svg %}
</div>

**SAML Attributes Assertions op FHIR mapping tabel**:

| Item | Attribute Name/Path | Value | FHIR Path |
|--|--|--|--|
| Organization OID | urn:oasis:names:tc:xspa:1.0:subject:organization-id | ``2.16.840.1.113883.2.4.3.164.2.1.2`` | Organization.identifier |
| Practitioner ID | Subject/NameID | `177578` | Practitioner.identifier |
| Practitioner Role | urn:oasis:names:tc:xacml:2.0:subject:role | `<Role code="62247001" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED_CT" displayName="huisarts" xmlns="urn:hl7-org:v3"/>` | PractitionerRole.code[system=sct] |
| Practitioner Name | professional.initials | `L.` | Practitioner.name.given[extension=IN] |
| Practitioner Name | professional.family_name | `Arts` | Practitioner.name.family |
| Patient Name | client.initials | `J.` | Patient.name.given[extension=IN] |
| Patient Name | client.family_name | `Fictief` | Patient.name.family |
| Patient Birthdate | client.birthdate | `19700101` | Patient.birthDate |
| Patient BSN | client.bsn | `999911120` | Patient.identifier[system=bsn] |

### Bepalen zorgaanbieders

Bepalen zorgaanbieders en endpoints zonder toestemming check
<div>
{% include Zorgviewer-seq-2a.svg %}
</div>

### Bepalen zorgaanbieders adhv toestemming

Bepalen zorgaanbieders en endpoints waarvoor toestemming is gegeven door de patiënt.

Met de Zorgviewer MVP2 zullen we een toestemming realiseren volgens de afspraken tussen de RIVO-Noord instellingen. Zie het beleid [hier](https://rivo-noord.nl/zorgviewer/toestemming). Deze zal zoveel mogelijk volgens de MITZ specificatie zijn. MITZ zal zich laten inspireren door de Zorgviewer specificaties.

**Van toepassing zijnde standaarden en documentatie**:
* MITZ Open autorisatie vraag gebruikt als lokalisatie vraag

<div>
{% include Zorgviewer-seq-2.svg %}
</div>

### Bevragen bronsystemen zorgaanbieders

**Van toepassing zijnde standaarden en documentatie**:
* [Bulk Data Access Backend Authentication](https://www.hl7.org/fhir/smart-app-launch/backend-services.html#obtain-access-token)
* [IHE Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/)
* [MedMij BgZ 2017 FHIR](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/FHIR_BGZ_2017)
* [TA Notified Pull / TWIIN TTA FHIR](https://twiin-afsprakenstelsel.scrollhelp.site/ta12/10-2-5-tta-fhir-authentication-authorization)
* Epic
      * [Epic Backend Authentication](https://appmarket.epic.com/Article/Index?docid=oauth2&section=BackendOAuth2Guide)
      * [Epic Galaxy: Backend System Integrations](https://galaxy.epic.com/Redirect.aspx?DocumentID=100001068&PrefDocID=97042)
      * [Epic FHIR](https://appmarket.epic.com/Sandbox/)
* Chipsoft
      * [Chipsoft BgZ API](https://developer.zorgplatform.online/digital-care/api/bgz)
      * [Chipsoft Service Authenticatie](https://developer.zorgplatform.online/digital-care/authenticatie)

<div>
{% include Zorgviewer-seq-3.svg %}
</div>

### Bevragen bronsystemen zorgaanbieders documenten

**Van toepassing zijnde standaarden en documentatie**:
* [MedMij PDF/a](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/OntwerpPDFA)
* [Chipsoft Documenten API](https://developer.zorgplatform.online/digital-care/api/document)

<div>
{% include Zorgviewer-seq-4.svg %}
</div>


---

// File: input/pagecontent/design2.md

<style>table, td, th { border: 1px solid black; padding:5px; }</style>

{% include future-note.md %}

Deze pagina beschrijft de interacties tussen de bouwblokken voor het opstarten van de zorgviewer en het ontsluiten van de bronsystemen.
Dit is de startpagina voor het bouwteam.

### Actors

Scope MVP2024 (MVP3) is Nexus (Treant, OZG), Nedap.

### Sequence Diagrams

### Opstarten zorgviewer: Nexus

**Van toepassing zijnde standaarden en documentatie**:
* SAML
* *toekomst* SMART-on-FHIR en/of FHIRcast

### Bevragen bronsysteem: Nexus

**Van toepassing zijnde standaarden en documentatie**:
* Nexus Cloud-connect
* *binnenkort* [TA Notified Pull]( https://twiin-afsprakenstelsel.scrollhelp.site/ta12/10-2-5-tta-fhir-authentication-authorization)

### Opstarten zorgviewer: Nedap


### Bevragen bronsysteem: Nedap

**Van toepassing zijnde standaarden en documentatie**:
* [Ons-API zibs & FHIR](https://ons-api.nl/techniek/FHIR-ZIBS/FHIR-ZIBS-GettingStartedWithFhir.html)

### Nuts Toepassing Zorginzage Bolt (generiek)

**Van toepassing zijnde standaarden en documentatie**:
* [Zorginzage 2022 Bolt](https://nuts-foundation.gitbook.io/bolts/zorginzage/zorginzage-2022)

<div>
{% include NutsXzorgviewer.svg %}
</div>

---

// File: input/pagecontent/downloads.md

### Full IG

Download the entire implementation guide [here](full-ig.zip).

### NPM Package and Definitions

The following file contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc. defined as part of this Implementation Guide:

- [NPM Package](package.tgz)

In addition there are format specific definition files:

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)
- [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the rules about what makes these profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation.  See the overview on [validating FHIR profiles and resources]({{ site.data.fhir.path }}validation.html).

There are also specific packages for the R4 and R4B FHIR specifications:

### Examples

All of the examples that are used in this Implementation Guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)

---

// File: input/pagecontent/index.md


### Introductie van de implementatiegids (IG)

Welkom op de implementatiegids van de Zorgviewer. In deze implementatiegids wordt ingegaan op de use-cases en de functionele en technische invulling hiervan. Op de [website van het Regionaal InformatieVoorzieningsOverleg Noord Nederland](http://rivo-noord.nl) kun je meer informatie vinden over de organisatie rondom de Zorgviewer. Op deze website kun je ook meer achtergrond informatie vinden over de [Zorgviewer](https://www.rivo-noord.nl/ontwikkelingen/zorgviewer/).

### Achtergrond

[Deze video](https://www.youtube.com/watch?v=3C2ol2i4w9s) vertelt je in een notendop wat de Zorgviewer is!

Tegenwoordig is het bestaan van ketenzorg en netwerkzorg de norm. Ondersteund met kreten als 'Juiste Zorg op de Juiste Plaats door de Juiste Zorgverlener <strong>met de Juiste (Technische) Ondersteuning</strong>. 

Samen met het RIVO en de regionale architecten (RAO) is er in 2020 een [netwerkzorgarchitectuur](https://jimdo-storage.global.ssl.fastly.net/file/a647b7db-1537-4f74-a4c0-b56066ae9d07/Netwerkzorgarchitectuur%201.0.pdf) opgeleverd, waar men spreekt over het neerzetten van een 360 graden beeld van de patiënt. In eerdere programma's rondom Registratie aan de Bron, VIPP, MedMij/PGO is het de bedoeling geweest om de registratie (aan de bron) recht te trekken. 

Nu zijn wij in een fase gekomen dat onze zorgverleners in de regio behoefte krijgen aan <strong>een Juiste (Technische) Ondersteuning</strong>. Om dit te realiseren is er gekozen om een aantal MVP trajecten te starten met leveranciers. Duidelijk is geworden hoe complex het zorglandschap en de zorgcontext is. Daaruit is een RIVO-Noord Zorgviewer MVP2 project ontstaan, namelijk de ontwikkeling van een Zorgviewer door de interne ontwikkelaars van het UMCG namens het RIVO.

Het RIVO-Noord Zorgviewer MVP2 Project wordt door een team vanuit het UMCG getrokken. Een aantal ontwikkelaars en architecten houden zich bezig met het design en ontwikkeling van de Zorgviewer. De context van de Zorgviewer kun je vinden in deze implementatiegids. Gebruik de Leeswijzer implementatiegids om je te oriënteren.

#### Historie Zorgviewer

| | |
| --- | --- |
| 2023 tot heden | [RIVO-Noord Zorgviewer MVP2 Project](https://www.rivo-noord.nl/zorgviewer). Livegang met een beperkt aantal gebruikers (april 2024)|
| 2022 | [Supernova Zorgviewer MVP1](https://www.salesforce.com/nl/blog/2022/05/supernova.html) |
| 2021-nov | Zorgviewer Prototype middels [dHealthLab](https://dhealth.nl/) Clinical Connectathon Netwerkzorg |
| 2020 | [Netwerkzorg Architectuur 1.0](https://jimdo-storage.global.ssl.fastly.net/file/a647b7db-1537-4f74-a4c0-b56066ae9d07/Netwerkzorgarchitectuur%201.0.pdf) vastgesteld

#### Leeswijzer implementatiegids

De implementatiegids bestaat uit een aantal tabbladen met sub-tabbladen. Elk tabblad geeft tekst en uitleg over het bepaalde onderdeel.

<strong>Tabblad: Requirements</strong>
- [Uitgangspunten en Requirements](conformance.html) = uitleg over de uitgangspunten, principes en de uiteindelijke requirements (eisen en wensen) van architectuur en onze gebruikers
- [NEN Conformiteit](nen-normen.html) = de NEN normen van toepassing bij de ontwikkeling van de Zorgviewer
- [Datasets](datasets.html) = content van praktijkvoorbeelden (use-cases) voor het inzetten van de Zorgviewer
- [Must Support](must-support.html) = bevat de specifieke interpretatie van "Must Support" in deze FHIR implementatie gids, zie ook [Must Support in de FHIR standaard](https://hl7.org/fhir/STU3/profiling.html#mustsupport)

<strong>Tabblad: Design</strong>
- [Design](design.html) = het volledige ontwerp van de Zorgviewer

<strong>Tabblad: RAO</strong>
Dit tabblad is voor de aanvullingen vanuit het Regionaal Architecten Overleg vanuit RIVO
- [Inzage Zorgnetwerk](zorgnetwerk.html) = overzicht hoe de verschillende systemen acteren rondom de patiënt met als perspectief 'de Zorgviewer'

<strong>Tabblad: Artifact Index</strong>
- [Artifact index](artifacts.html) = beschrijving van onder andere de FHIR resources. Deze pagina wordt gebruikt om de details van de FHIR resources in te zien met een aantal voorbeelden vanuit de verschillende organisaties en systemen

    Bijbehorende Zibs zoeken vanuit een FHIR resource:

* In onderstaande voorbeeld staat "This structure is derived from Zib Problem", deze link gaat naar de volledige zib op Simplifier.net. Op deze site staat onder het tabblad ‘Mappings’ bovenaan in de tabel de directe link naar de zib op zibs.nl.
* Ook in de link onder het kopje ‘Type’, in dit geval ‘Zib Problem’ gaat de link naar Simplifier.net. Het ‘Overview’ tabblad is de FHIR-representatie van de Zib. Daarin zitten de Mappings terug naar de Zib. 
* In de kolom "Description" staat de naam van het element in de Zib. Via bovenstaande links naar Simplifier.net staat in de kolom ‘Mappings’ de uitgebreide beschrijving.
<div>
{% include img.html img="leeswijzer-fhir-resources-en-zibs.png" width="70%" %}
</div>

[Toelichting op het format](https://hl7.org/fhir/STU3/formats.html#table)

### Dependencies

{% include dependency-table.xhtml %}



---

// File: input/pagecontent/must-support.md


Op basis van bronsysteem voorbeeld berichten conform de zibs wordt bekeken wat de minimale overlappende vulling is.
Dat weer aangevuld met de [FMS Handreiking Adequate registratie](https://amigo.nictiz.nl/handreiking-adequate-registratie) resulteert in de must-support en mandatory (min=1) van elementen.
De FMS Handreiking en Fit-Gap analyse laat de overeenkomstige elementen zien voor de bronsystemen Epic, Chipsoft en Nexus.
Van mandatory elementen (min=1) wordt er altijd vulling verwacht.
De Zorgviewer FHIR Profilen zijn constraints van de generieke zib2017 FHIR STU3 Profielen.

### User Interface levels

Daarnaast is er een onderverdeling van alle elementen voor de User Interface.

1. minimale selectie
1. must-support
1. maximaal zibs/BgZ
1. (complete fhir resource en extra extensions) *buiten scope*

Het laatst genoemde niveau is buiten scope. Met name omdat er bijna oneindig veel mogelijke vullingen en extensies mogelijk zijn.

### Uitzonderingen

In tegenstelling tot wat het zib2017 profiel zegt is het wel degelijk toegestaan om Condition.onsetPeriod te gebruiken als ProbleemBeginDatum. Dit wordt o.a. door Epic gebruikt als een begin datum een "vage" datum is, zoals ergens in het jaar 2020. Dan is het begin 20200101 en eind 20201231.
Dit is afgestemd met Nictiz zie [BITS ticket MM-4077](https://bits.nictiz.nl/browse/MM-4077).
Vanaf de volgende versie (zibs2020) is Nictiz sowieso open-world bezig.


---

// File: input/pagecontent/nen-normen.md

Op deze pagine beschrijven we de conformiteit met de verschillende NEN normen als gevolg van de [Wet EGIZ](https://www.gegevensuitwisselingindezorg.nl/gegevensuitwisseling/uitleg-over-de-wet) en bijbehorende [NEN-Normen](https://www.nen-egiz.nl/overzicht-normen/) van toepassing op de Zorgviewer.

### Samenhang van alle EGIZ normen

[<img src="https://connect.nen.nl/Scripts/Sunburst/Sunburst_small.png"/>](https://connect.nen.nl/standard/sunburst?infoOn=319920&backRNR=3703744)

### Normen voor specifieke gegevensuitwisselingen

* [NEN 7540:2022](https://www.nen.nl/nen-7540-2022-ontw-nl-302516) 
    * Zorgviewer is conform de "BGZ-uitwisseling tussen instellingen voor medisch specialistische zorg" 
    * "Figuur 9 – Usecase Opvragen BgZ" 
    * En voor "6.4.7. Stap 7: Verwerken BgZ' ondersteund het de "Inzien" functie
* [TTA Direct Pull](https://vzvz.atlassian.net/wiki/spaces/Twiincon/pages/331847141/10.2.4+TTA+FHIR+-+Pull) *in ontwikkeling*

### Normen voor generieke functies

* NEN 7517 – Toestemming *in ontwikkeling*
* NEN 7518 – Identificatie & Authenticatie *in ontwikkeling*
* NEN 7519 – Lokalisatie - [Normontwerp](https://normontwerpen.nen.nl/Home/Details/931?_gl=1*1fahnj8*_ga*MTY2NjY5OTI4MS4xNjkwMzYzMjg5*_ga_C13P8HNDG2*MTY5ODkyMDE5Ni45MS4xLjE2OTg5MjA1MzEuMC4wLjA.) gepubliceerd en open voor inzage

### Normen voor informatiebeveiliging

* [NEN 7510-2:2017](https://www.nen.nl/nen-7510-2-2017-nl-238787)
    * [AuditEvent](StructureDefinition-AuditEvent.html)
* [NEN 7512:2022](https://www.nen.nl/nen-7512-2022-nl-297137)
* [NEN 7513:2023](https://www.nen.nl/nen-7513-2023-ontw-nl-309856)
    * [AuditEvent](StructureDefinition-AuditEvent.html)

### Bouwblokken x Norm

|Bouwblok|Norm|
|-|-|
|Logging|NEN 7510, 7513|
|Toestemming|NEN 7517, NEN 7519 (Lokalisatie)|
|Authenticatie|NEN 7518|
|Zorgviewer, Ontsluiten bronsysteem|NEN 7540|


---

// File: input/pagecontent/PlanDefinition-BgZ2017-intro.md

In deze PlanDefinition is de BgZ 2017 als DataRequirements beschreven.
Deze kunnen worden gebruikt om requests met de juiste filters samen te stellen.
Bijvoorbeeld voor DrugUse (DrugsGebruik) vind je hierin de juiste code value voor het opvragen van de DrugUse Observations.


---

// File: input/pagecontent/searchform.md

<iframe src="https://duckduckgo.com/search.html?site=https://implementatiegids.zorgviewer.nl&amp;prefill=Search RIVO-Noord Zorgviewer MVP2 Implementation Guide (Current Snapshot)&amp;focus=yes" style="overflow:hidden;margin:0;padding:0;width:408px;height:40px;" frameborder="0"></iframe>

Note: this search searches the curent snapshot of the RIVO-Noord Zorgviewer MVP2 Implementation Guide.

---

// File: input/pagecontent/StructureDefinition-AdvanceDirective-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Wilsverklaring](https://zibs.nl/wiki/Wilsverklaring-v3.1(2017NL))

### User-Interface guidance

Kolom definities:
<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td> of lookup adhv code (AGB-Z of OID)</td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.dateTime</samp></td>
      <td><code>dateTime</code></td>
      <td>WilsverklaringDatum</td>
      <td>Kunnen vage datums zijn</td>
    </tr>
    <tr>
      <td>Type​</td>
      <td><samp>.category[1].text</samp></td>
      <td><code>string</code></td>
      <td>WilsverklaringType</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Request

1. Opvragen (search) wilsbeschikkingen

    `GET <ontsluiten-bronsysteem-base>/Consent?patient=<fhir_patient_id>&category=http://snomed.info/sct|11341000146107`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-AllergyIntolerance-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Allergie Intolerantie](https://zibs.nl/wiki/AllergieIntolerantie-v3.2(2017NL))

### FMS Adequate Registratie

Als bron voor de must-support flags en de UI guidance is gebruikt: [Fit-gap analyse allergie-intolerantie](https://amigo.nictiz.nl/uploads/a158231f-a872-4828-b5c5-0a24e7b4e4bd/Fit_gap_analyse_Allergie-intolerantie.pdf)

### View Definition

* [ViewDefinition voor Allergieën en Intoleranties](ViewDefinition-AllergyIntolerance.json)

### User-Interface guidance

<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.onsetPeriod.start</samp></td>
      <td><code>dateTime</code></td>
      <td>BeginDatumTijd</td>
      <td></td>
    </tr>
    <tr>
      <td>Stof</td>
      <td><samp>.code.text</samp></td>
      <td><code>string</code></td>
      <td>VeroorzakendeStof</td>
      <td></td>
    </tr>
    <tr>
      <td>Toelichting</td>
      <td><samp>.note.extension('http://nictiz.nl/fhir/StructureDefinition/note')</samp></td>
      <td><code>string</code></td>
      <td>Toelichting</td>
      <td></td>
    </tr>
    <tr>
      <td>Ernst</td>
      <td><samp>.criticality.extension[system="http://nictiz.nl/fhir/StructureDefinition/code-specification"].text</samp> of indien geen extensie aanwezig <samp>.criticality</samp></td>
      <td><code>string,code</code></td>
      <td>MateVanKritiek</td>
      <td></td>
    </tr>
    <tr>
      <td>Reactie</td>
      <td><samp>.reaction.manifestation.text</samp></td>
      <td><code>string</code></td>
      <td>Reactie Symptoom</td>
      <td></td>
    </tr>
    <tr>
      <td>Categorie</td>
      <td><samp>.category.extension[system=” http://nictiz.nl/fhir/StructureDefinition/code-specification"].text</samp> of indien geen extensie aanwezig <samp>.category</samp></td>
      <td><code>string,code</code></td>
      <td>AllergieCategorie</td>
      <td>Hebt meerdere opties die tegelijk getoond kunnen worden</td>
    </tr>
    <tr>
      <td>Klinische status</td>
      <td><samp>.clinicalStatus.extension[system=" http://nictiz.nl/fhir/StructureDefinition/code-specification "].text</samp> of indien geen extensie aanwezig <samp>.clinicalStatus</samp></td>
      <td><code>string,code</code></td>
      <td>AllergieStatus</td>
      <td>‘Actief’, ‘Niet meer aanwezig’, ‘Achterhaald’. ‘Foutief’ status wordt niet getoond in de Zorgviewer (wordt uitgefilterd). Indien geen extensie aanwezig, dan worden de waarden als volgt gemapped: Active -> Actief; InActive -> Achterhaald; Resolved -> Niet meer aanwezig</td>
    </tr>
  </tbody>
</table>

### Request

1. Opvragen (search) allergieen en intoleranties

    `GET <ontsluiten-bronsysteem-base>/AllergyIntolerance/?patient=<fhir_patient_id>`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-AuditEvent-intro.md

* [NEN 7513:2018](https://www.nen.nl/nen-7513-2018-nl-245399) ~vrij beschikbaar na registratie~
    * gebeurtenissen in scope van de Zorgviewer
        * Als de Zorgviewer een patient opent: "gegevens lezen"
        * Als een beheerder loggegevens inziet: "loggegevens lezen"
* Zie [AuditEvent-example-1](AuditEvent-example-auditevent-zorgviewer.html)

<style>table, td, th { border: 1px solid black; padding:5px; }</style>

| key | value | FHIR Path |
|--|--|--|
| **Gebeurtenis** | | `AuditEvent` |
| gebeurteniscode | DCM,110110,'Patient Record' | `AuditEvent.type.coding.system = http://dicom.nema.org/resources/ontology/DCM`<br/>`AuditEvent.type.coding.code = 110110`<br/>`AuditEvent.type.coding.code = Patient Record` |
| actiecode | R | `AuditEvent.action = R` |
| datum en tijd | 1986‐09‐14T14:12:12 | `AuditEvent.recorded` |
| **Gebruiker** | | `AuditEvent.agent` |
| gebruikers-id | Schroder, CP, Arts en system urn:oid:2.16.840.1.113883.2.4.3.8<br/>of AGB-Z 06020101 met system http://fhir.nl/fhir/NamingSystem/agb-z | zorgaanbieder OID `AuditEvent.agent.userId.system`<br/>`AuditEvent.agent.userId.value `<br/>en `AuditEvent.agent.name` |
| | Zelfde als voor ToestemmingConsent.policy:<br/>https://rivo-noord.nl/zorgviewer/toestemming | `AuditEvent.agent.policy` |
| gebruikersrol | 05 Directly involved healthcare professional | `AuditEvent.agent.role.coding.system`<br/>`AuditEvent.agent.role.coding.code`<br/>`AuditEvent.agent.role.coding.display` |
| ID van verantwoordelijke gebruiker | zie gebruikers-id | |
| Rol van verantwoordelijke gebruiker | zie gebruikersrol | |
| **Object** | | `AuditEvent.entity` |
| Identificatortype | Patiëntnummer | `AuditEvent.entity.type.code = 1`<br/>`AuditEvent.entity.type.system = http://hl7.org/fhir/audit-entity-type` |
| Identificator | http://fhir.nl/fhir/NamingSystem/bsn<br/>999911120 | `AuditEvent.entity.identifier.system`<br/>`AuditEvent.entity.identifier.value` |
| Autorisatieprotocol | ? | |
| Toestemmingsprofiel | ? | |
| **Loggegevens** | | `AuditEvent.source` |
| Identificatie van de bron | Zorgviewer RIVO-Noord | `AuditEvent.source.identifier.value` | 

{% include img.html img="nen7513-datamodel.png" caption="NEN 7513 overzicht datamodel<br/>geel is verplicht" width="50%" %}

---

// File: input/pagecontent/StructureDefinition-Condition-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Probleem](https://zibs.nl/wiki/Probleem-v4.1(2017NL))

### FMS Adequate Registratie

Als bron voor de must-support flags en de UI guidance is gebruikt: [Fit-gap analyse probleem](https://amigo.nictiz.nl/uploads/e4a96295-3715-439b-804a-024ca1d7fadf/fit_gap_analyse_Probleeem.pdf)

### User-Interface guidance

Een schets van het scherm met labels en sortering informatie
<div style="clear:both;"><img src="UI-Schets-Problemen.png" class="figure-img img-responsive img-rounded center-block"></div>

Kolom definities:
<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.onsetDateTime</samp> of <samp>.onsetPeriod​</samp> (Epic)</td>
      <td><code>dateTime</code> of <code>Period</code></td>
      <td>ProbleemBeginDatum</td>
      <td>Laat één datum zien als de <code>.onsetDateTime</code> of <code>.onsetPeriod</code> hetzelfde is​</td>
    </tr>
    <tr>
      <td>Diagnose​</td>
      <td><samp>.code.text</samp></td>
      <td><code>string​</code></td>
      <td>ProbleemNaam</td>
      <td></td>
    </tr>
    <tr style="background-color:#8faadc; color:white">
      <th colspan="5">(1) UITKLAPVELD</tH>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Diagnose</td>
      <td><samp>.code.coding[]</samp> en dan <samp>.system</samp>, <samp>.code</samp> en <samp>.display​</samp></td>
      <td><code>string</code></td>
      <td>ProbleemNaam</td>
      <td>Meerdere codes mogelijk.<br/>Ignore NullFlavor.​<br/>Lookup system label middels <code>&lt;terminologie-base&gt;/CodeSystem?url=&lt;.system&gt;</code> en gebruik dan <code>CodeSystem.title</code></td>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Toelichting</td>
      <td><samp>.note.text</samp></td>
      <td><code>string</code></td>
      <td>Toelichting</td>
      <td></td>
    </tr>
    <tr style="background-color:#adb9ca; color:white">
      <th colspan="5">MARKERING</tH>
    </tr>
    <tr style="background-color:#d6dce5">
      <td></td>
      <td><samp>.clinicalStatus</samp></td>
      <td><code>code</code></td>
      <td>ProbleemStatus</td>
      <td>Actueel (active) = groene rijen, dikgedrukt​<br/>
Niet actueel (inactive) = grijze rijen​</td>
    </tr>
  </tbody>
</table>

### Zoeken naar codes

* [DHD T-Rex](https://trex.dhd.nl/) - `system=http://snomed.info/sct`
* [ICD-10-NL](https://terminologie.nictiz.nl/art-decor/claml?collection=icd10-nl-data) - `system=http://hl7.org/fhir/sid/icd-10-nl`
* [ICPC-1 NL](https://viewers.nhg.org/icpcviewer/) - `system=http://hl7.org/fhir/sid/icpc-1-nl`

### Request

1. Opvragen (search) actieve en gesloten problemen

    `GET <ontsluiten-bronsysteem-base>/Condition?patient=<fhir_patient_id>[&clinical-status=active,resolved]`

    <blockquote class="stu-note" markdown="1">
    N.B. De clinical-status parameter is niet meer nodig als de Epic Feb '23 is geinstalleerd.
    </blockquote>

### Uitzondering onsetDateTime, onsetPeriod, abatementDateTime en abatementPeriod

<blockquote class="stu-note" markdown="1">
N.B. In tegenstelling tot het officiele zib profiel wordt in de praktijk voor de onset zowel een exacte datum (dateTime) geaccepteerd als een vage of range (period, b.v. ergens in 2011) datum.
</blockquote>

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-DocumentReference-intro.md

{% include profile-note.md %}

### View Definition

* [ViewDefinition voor Correspondentie](ViewDefinition-DocumentReference.json)

### User-Interface guidance

Kolom definities:
<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.context.period.start</samp> of <samp>.indexed</samp> indien <samp>.context.period.start</samp> leeg is</td>
      <td><code>dateTime</code></td>
      <td><i>nvt</i></td>
      <td>N.B. tijd is GMT, dus omzetten naar CET. 
      
  Ter info: indien datum uit ​<samp>.indexed</samp> komt, wordt deze gemarkeerd met een icoontje (i) </td>
    </tr>
    <tr>
      <td>Type</td>
      <td><samp>iif(type.text.startsWith('2.16.840.1.113883.'),type.coding[0].code,type.text)</samp></td>
      <td><code>code</code></td>
      <td><i>nvt</i></td>
      <td></td>
    </tr>
    <tr>
      <td>Klasse</td>
      <td><samp>iif(class.text.startsWith('2.16.840.1.113883.'),class.coding[0].code,class.text)</samp></td>
      <td><code>code</code></td>
      <td><i>nvt</i></td>
      <td></td>
    </tr>
    <tr>
      <td>Beschrijving</td>
      <td><samp>.description​</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Tijdelijk voor Zorgplatform: gebruik <code>content.attachment.title</code> voor de beschrijving van documenten inclusief het strippen van de <code>.pdf</code>extensie</td>
    </tr>
    <tr>
      <td>Auteur</td>
      <td><samp>.author.display</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Tijdelijk voor Zorgplatform: indien <code>.author.display</code> is gevuld met een OID, dan wordt het veld gevuld met <code>Auteur niet bekend</code></td>
    </tr>
    <tr>
      <td>Specialisme</td>
      <td><samp>.context.practiceSetting.text</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Tijdelijk voor Zorgplatform: indien <code>.context.practiceSetting.text</code> is gevuld met een OID (startsWith('2.16.840.1.113883.)), dan wordt het veld gevuld met <code>.context.practiceSetting.coding.code</code> (een SNOMED CT code)</td>
    </tr>
    <tr style="background-color:gray; color:white">
      <td>MimeType (voor filtering op pdf)</td>
      <td><samp>.content.attachment.contentType</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Alleen <code>application/pdf</code> tonen</td>
    </tr>
  </tbody>
</table>

### Document soorten herkennen

<table class="grid">
  <thead>
    <th>class (higher level grouping)</th>
    <th>type (http://loinc.org)</th>
    <th>type descriptions</th>
  </thead>
  <tbody>
    <tr>
      <td>correspondence<br/>Correspondentie</td>
      <td>Healthcare communication Document (56444-3)</td>
      <td>Correspondentie, Patiëntenbrief, Verwijsbrief, Poliklinische brief, Artsenbrief</td>
    </tr>
    <tr>  
      <td>CS: Brief (51852-2)<br/>CS: Hospital Letter (68609-7)</td>
      <td>CS: Brief (51852-2)<br/>CS: Hospital Letter (68609-7)</td>
      <td>{OID?}</td>
    </tr>
    <tr>
      <td>imaging-result<br/>Imaging result</td>
      <td>Procedure note (28570-0)</td>
      <td>Radiologie verslag</td>
    </tr>
    <tr>
      <td>clinical-note<br/>Notitie</td>
      <td>Epic clinical-note(s) types from https://vendorservices.epic.com/Sandbox/Index?api=865
        <ul><li>Discharge Documentation (18842-5)</li>
        <li>Consultation (11488-4)</li>
        <li>History & Physical (34117-2)</li>
        <li>Progress Note (11506-3)</li>
        <li>Procedure Note (28570-0)</li>
        <li>Emergency Department Note (34111-5)</li>
        <li>Nurse Note (34746-8)</li>
        <li>Discharge Instructions (74213-0)</li>
        <li>Risk assessment and screening note (75492-9)</li>
        <li>OR Note (11504-8)</li>
        <li>Miscellaneous Notes (34109-9)</li></ul></td>
      <td></td>
    </tr>
  </tbody>
</table>

Zie het Excelbestand tab "classCode+decision tree" voor LOINC codes:
[Nationale XDS metadataset](https://nictiz.nl/standaarden/overzicht-van-standaarden/xds-metadata/)

### Request

1. Opvragen (search) alle documenten

    `GET <ontsluiten-bronsysteem-base>/DocumentReference?patient=<fhir_patient_id>&status=current`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-Flag-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Alert](https://zibs.nl/wiki/Alert-v3.2(2017NL))

### View Definition

* [ViewDefinition voor Alerts](ViewDefinition-Flag.json)

<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.period.start</samp></td>
      <td><code>dateTime</code></td>
      <td>BeginDatumTijd</td>
      <td></td>
    </tr>
    <tr>
      <td>Voor</td>
      <td><samp>.code.text of .extension('http://hl7.org/fhir/StructureDefinition/flag-detail').valueReference.reference.resolve().code.text</samp></td>
      <td><code>string</code></td>
      <td>AlertNaam of <i>geassosieerde</i> Conditie::Probleem</td>
      <td>De resolve levert de bijbehorende Condition</td>
    </tr>
    <tr>
      <td>Categorie</td>
      <td><samp>.category.text</samp></td>
      <td><code>string</code></td>
      <td>AlertType</td>
      <td></td>
    </tr>
    <tr>
      <td>Status</td>
      <td><samp>.status</samp></td>
      <td><code>code</code></td>
      <td><i>nvt</i></td>
      <td>Mapping: ‘active’ naar ‘actueel’; ‘in-active’ naar ‘niet actueel’ Uitgefilterd: ‘entered-in-error’ wordt niet getoond in de Zorgviewer, omdat het om foutief ingevoerde data gaat.</td>
    </tr>
  </tbody>
</table>

### Examples

{% sql {
  "query" : "select name as Name, Description, web from Resources where Type = 'Flag'",
  "class" : "grid",
  "columns" : [
    { "name" : "Name", "type" : "link", "source" : "Name", "target" : "web"},
    { "name" : "Description", "type" : "markdown", "source" : "Description"}
  ]
} %}

### Request

1. Opvragen (search) alerts

    `GET <ontsluiten-bronsysteem-base>/Flag?patient=<fhir_patient_id>`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-Immunization-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Vaccinaties](https://zibs.nl/wiki/Vaccinatie-v3.1(2017NL))

### View Definition

* [ViewDefinition voor Vaccinaties](ViewDefinition-Immunization.json)

<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.date</samp></td>
      <td><code>dateTime</code></td>
      <td>VaccinatieDatum</td>
      <td></td>
    </tr>
    <tr>
      <td>Product</td>
      <td><samp>.vaccineCode.text</samp></td>
      <td><code>string</code></td>
      <td>ProductCode</td>
      <td></td>
    </tr>
    <tr>
      <td>Toelichting</td>
      <td><samp>.note.text</samp></td>
      <td><code>string</code></td>
      <td>Toelichting</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Request

1. Opvragen (search) vaccinaties

    `GET <ontsluiten-bronsysteem-base>/Immunization?patient=<fhir_patient_id>&status=completed`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-LaboratoryTestResult-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Laboratorium uitslag](https://zibs.nl/wiki/LaboratoriumUitslag-v4.1(2017NL))

### User-Interface guidance

Een schets van het scherm met labels en sortering informatie
<div style="clear:both;"><img src="UI-Schets-LaboratoriumUitslag.png" class="figure-img img-responsive img-rounded center-block"></div>

Kolom definities:
<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Afnamedatum</td>
      <td><samp>.specimen.resolve().collection.collectedDateTime</samp></td>
      <td><code>dateTime</code></td>
      <td>Monster/ AfnameDatumTijd</td>
      <td></td>
    </tr>
    <tr>
      <td>Test</td>
      <td><samp>.code.text</samp></td>
      <td><code>string​</code></td>
      <td>TestCode</td>
      <td></td>
    </tr>
    <tr>
      <td>Testuitslag (interpretatie)</td>
      <td><samp>.valueString</samp> of <samp>.valueQuantity.value</samp> + <samp>.valueQuantity.unit</samp> + (<samp>.interpretation.code</samp> zie toelichting)</td>
      <td><code>decimal + string (+ icon​)</code></td>
      <td>TestUitslag, InterpretatieVlaggen</td>
      <td><code>.interpretation.code</code><br/><code>"AA"</code>: uitroepteken icon, kritiek<br/>
      <code>"281302008" of "H"</code>: pijl omhoog, boven de bovengrens<br/>
      <code>"281300000" of "L"</code>: pijl naar beneden, onder de ondergrens<br/>
      N.B. Resistent, Intermediar en Sensitief vanuit de standaard zijn niet van toepassing op de klinische chemie. <br/><br/><b>Epic:</b> Indien lab-order geannuleerd, dan wordt deze kolom gevuld met <code>"GEANNULEERD"</code>. Dit is voor nu akkoord bevonden door stuurgroep Zorgviewer.</td>
    </tr>
    <tr>
      <td>Onder- en bovengrens</td>
      <td><samp>.referenceRange.low.value</samp> '–' <samp>.referenceRange.high.value</samp> + <samp>.referenceRange.high.unit</samp><br/>indien low.unit en high.unit niet gelijk zijn aan elkaar:<br/><samp>.referenceRange.low.value</samp> + <samp>.referenceRange.low.unit</samp> '–' <samp>.referenceRange.high.value</samp> + <samp>.referenceRange.high.unit</samp></td>
      <td><code>decimal + string​</code></td>
      <td>ReferentieOndergrens, ReferentieBovengrens</td>
      <td></td>
    </tr>
    <tr>
      <td>Materiaal</td>
      <td><samp>.specimen.resolve().type.text</samp></td>
      <td><code>string​</code></td>
      <td>Monster/ Monstermateriaal</td>
      <td></td>
    </tr> 
    <tr>
      <td>Status</td>
      <td><samp>.status</samp></td>
      <td><code>code</code></td>
      <td>ResultaatStatus</td>
      <td><b>Epic:</b> Indien lab-order geannuleerd, dan krijgt dit alsnog de status Definitief met een Testuitslag van <code>"GEANNULEERD"</code>. Dit is voor nu akkoord bevonden door stuurgroep Zorgviewer.</td>
      <td>​</td>
    </tr>
    <tr style="background-color:#8faadc; color:white">
      <th colspan="5">(1) UITKLAPVELD</tH>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Commentaar</td>
      <td><samp>.comment</samp></td>
      <td><code>string</code></td>
      <td>Toelichting</td>
      <td>​</td>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Toelichting materiaal</td>
      <td><samp>.specimen.revolve().note.text</samp></td>
      <td><code>string</code></td>
      <td>Monster/ Toelichting</td>
      <td>​</td>
    </tr>
  </tbody>
</table>

### Zoeken naar codes

* [LOINC lab-uitslagen](https://terminologie.nictiz.nl/art-decor/loinc) - `system=http://loinc.org`

### Request

1. Opvragen (search) laatst bekende labuitslag per type (inclusief materiaalsoort) voor een patient

    `GET <ontsluiten-bronsysteem-base>/Observation/$lastn?patient=<fhir_patient_id>&category=http://snomed.info/sct|275711006&_include=Observation:specimen`

    <blockquote class="stu-note" markdown="1">
    N.B. Alleen klinische chemie resultaten zijn op dit moment beschikbaar.
    </blockquote>

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-MedicationRequest-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Medicatieafspraak](https://zibs.nl/wiki/MedicationAgreement-v1.0(2017EN))

### View Definition

* [ViewDefinition voor MedicationRequest](ViewDefinition-MedicationRequest.json)

### Request

1. Opvragen (search) definities

    `GET <ontsluiten-bronsysteem-base>/MedicationRequest?category=http://snomed.info/sct|16076005&_include=MedicationRequest:medication&patient=<fhir_patient_id>`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-MedicationStatement-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Medicatie Gebruik](https://zibs.nl/wiki/MedicatieGebruik2-v1.0.1(2017NL))

### View Definition

* [ViewDefinition voor MedicationStatement](ViewDefinition-MedicationStatement.json)

### Request

1. Opvragen (search) definities

    `GET <ontsluiten-bronsysteem-base>/MedicationStatement?category=urn:oid:2.16.840.1.113883.2.4.3.11.60.20.77.5.3|6&_include=MedicationStatement:medication&patient=<fhir_patient_id>`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-Organization-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Zorgaanbieder](https://zibs.nl/wiki/Zorgaanbieder-v3.1.1(2017NL))

### Zoeken naar identifiers

* [Vektiz AGB Register zoeken](https://www.vektis.nl/agb-register/zoeken) @system = http://fhir.nl/fhir/NamingSystem/agb-z
* [HL7 NL OID Register](https://hl7.nl/actuele-hl7-nl-oid-register.html) @system = urn:oid:2.16.840.1.113883.2.4.3
* [URA UZI Register Abonneenummer](https://www.zorgcsp.nl/zoeken/UitgegevenServerCertificatenUzi) @system = http://fhir.nl/fhir/NamingSystem/ura
* Voorbeeld:
    * [Vektiz AGB Register UMCG](https://www.vektis.nl/agb-register/onderneming-06020101)

### Requests

1. Opvragen (search) naar organisatie op basis van de organisatie AGB, OID of URA

    `GET <bronsysteem-ontsluiting-base/Organization?identifier=<URA|AGB|OID>`

{% include bronsysteem-herkennen.md %}


---

// File: input/pagecontent/StructureDefinition-Patient-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Patient](https://zibs.nl/wiki/Patient-v3.1(2017NL))

### Patient.name algoritme

Bovenop constraint **zv-pat-1**:
1. als ``name[].use`` gebruik dan de ``name[use="official"]``, anders de 1ste ``name[0]``
1. als ``name[].text`` gebruik die, anders concatenate de 1ste ``name[].given[0]`` met de ``name[].family``

### Requests

1. Opvragen (search) naar patient op basis van de BSN

    `GET <bronsysteem-ontsluiting-base/Patient?identifier=<BSN>`

1. Of opvragen (search) middels POST, zie: [FHIR STU3 http search](https://hl7.org/fhir/STU3/http.html#search)

    `POST <bronsysteem-ontsluiting-base/Patient/_search`

    `Content-Type: application/x-www-form-urlencoded`

    `identifier=<BSN>`

1. Opvragen (read) patient op basis van de fhir_patient_id

    `GET <ontsluiten-bronsysteem-base>/Patient/<fhir_patient_id>`

### Response

1. Bundle met 1 Patient

    Dit is de gewenste situatie.

1. Bundle met meer dan 1 Patient

    Dit kan gebeuren na een SEH opname als de patient nog niet samengevoegd is.

1. Bundle zonder patienten of een HTTP Response 401/404

    Dit gebeurt als de patient GEEN toestemming heeft gegeven of de patient simpelweg niet bestaat bij de bevraagde organisatie.

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-PlanDefinition-intro.md

{% include future-note.md %}

### Example

* [BgZ2017 DataRequirements in scope voor MVP2](PlanDefinition-BgZ2017.html)

### Request

1. Opvragen (search) definities

    `GET <behandelplan-base>/PlanDefinition?name=BgZ2017`


---

// File: input/pagecontent/StructureDefinition-Practitioner-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Zorgverlener](https://zibs.nl/wiki/Zorgverlener-v3.2(2017NL))

### Zoeken naar codes

* [Vektiz AGB Register zoeken](https://www.vektis.nl/agb-register/zoeken)

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-PractitionerRole-intro.md


### Request

1. Opvragen (search) rollen bij een specifieke zorgverlener

    `GET <zorgverlener-directory-base>/PractitionerRole/?practitioner=<Practitioner.id>`

1. Opvragen (search) rollen bij een zorgverlener adhv identifier

    `GET <zorgverlener-directory-base>/PractitionerRole/?identifier=<AGB/BIG>`


---

// File: input/pagecontent/StructureDefinition-Procedure-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB Verrichting](https://zibs.nl/wiki/Verrichting-v4.1(2017NL))

### View Definition

* [ViewDefinition voor Verrichtingen](ViewDefinition-Procedure.json)

### User-Interface guidance

Een schets van het scherm met labels en sortering informatie
<div style="clear:both;"><img src="UI-Schets-Verrichtingen.png" class="figure-img img-responsive img-rounded center-block"></div>

Kolom definities:
<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>
    <tr>
      <td>Datum</td>
      <td><samp>.performedPeriod.start​</samp></td>
      <td><code>dateTime</code></td>
      <td>VerrichtingBeginDatum</td>
      <td>​Kunnen vage datums zijn.​</td>
    </tr>
    <tr>
      <td>Verrichting</td>
      <td><samp>.code.text</samp></td>
      <td><code>string​</code></td>
      <td>VerrichtingType</td>
      <td></td>
    </tr>
    <tr>
      <td>Locatie</td>
      <td><samp>.location.display​</samp></td>
      <td><code>string</code></td>
      <td>Locatie::Zorgaanbieder</td>
      <td>Zie discussie hier: <a href="https://bits.nictiz.nl/browse/MM-5002">BITS ticket MM-5002</a></td>
    </tr>
    <tr>
      <td>Uitgevoerd door</td>
      <td><samp>.performer.actor.display​</samp></td>
      <td><code>string</code></td>
      <td>Uitvoerder</td>
      <td>Meestal alleen specialisme</td>
    </tr>
    <tr style="background-color:#8faadc; color:white">
      <th colspan="5">(1) UITKLAPVELD</tH>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Verrichtingcode</td>
      <td><samp>.code.coding[]</samp> en dan <samp>.system</samp>, <samp>.code</samp> en <samp>.display​</samp></td>
      <td><code>string</code></td>
      <td>VerrichtingType</td>
      <td>Meerdere codes mogelijk.<br/>Ignore NullFlavor.​<br/>Lookup system label middels <code>&lt;terminologie-base&gt;/CodeSystem?url=&lt;.system&gt;</code> en gebruik dan <code>CodeSystem.title</code>​</td>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Lateraliteit</td>
      <td><samp>.bodySite.extension[url="http://nictiz.nl/fhir/StructureDefinition/BodySite-Qualifier"].valueCodeableConcept.text</samp></td>
      <td><code>string</code></td>
      <td>ProbleemLateraliteit</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Zoeken naar codes

* [DHD Verrichtingenthesaurus, CBV en Zorgactiviteiten](https://trex.dhd.nl/)
* [NHG Ingrepenviewer tabel 49](https://viewers.nhg.org/ingrepenviewer/)

### Request

1. Opvragen (search) verrichtingen

    `GET <ontsluiten-bronsysteem-base>/Procedure?patient=<fhir_patient_id>`

    *N.B. Deze request is breder dan de BgZ request, waar alleen de chirugische verrichtingen worden opgevraagd.*

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/StructureDefinition-Specimen-intro.md

Zie [LaboratoriumTestResult](StructureDefinition-LaboratoryTestResult.html) voor User Interface guidance en Request.


---

// File: input/pagecontent/StructureDefinition-ToestemmingConsent-intro.md

{% include future-note.md %}

### Mappings

* [HL7 v2 ADT^A08 en ADT^A31 mapping van PID en CON segmenten](ConceptMap-patient-toestemming.html)

### Request

1. Opvragen (search) toestemmingen voor een patient

    `GET <toestemming-base>/Consent?patient:Patient.identifier=<BSN>`

    N.B. Bij geen resultaat heeft de patient expliciet geen toestemming gegeven of nog niet toestemming gegeven. 

---

// File: input/pagecontent/StructureDefinition-TreatmentDirective-intro.md

{% include profile-note.md %}

### Zorginformatiebouwsteen

[ZIB BehandelAanwijzing](https://zibs.nl/wiki/BehandelAanwijzing-v3.1(2017NL))

### FMS Adequate Registratie

Als bron voor de must-support flags is gebruikt: [Fit-gap analyse behandelaanwijzing](https://amigo.nictiz.nl/uploads/7d857f79-4b79-4732-a1dd-2756bf4cdd24/fit_gap_analyse_Behandelaanwijzing.pdf)

<blockquote class="stu-note" markdown="1">
N.B. "Geverifieerd" en "Geverifieerd bij" wel gewenst, maar niet beschikbaar in de huidige configuraties en "echte" voorbeeld data.
</blockquote>

### Behandelgrenzen van de Advance Care Planning (ACP)

*Synoniem = Proactieve zorgplanning*

Eerder in datasets onder het kopje [Advanced Care Planning (ACP)](datasets.html#advanced-care-planning) is uitgelegd waar het formulier en de dataset uit bestaat. 
Vanuit de landelijke organisatie rondom palliatieve zorg is er een aanvulling nodig van de BehandelingCodelijst, komende uit de zib BehandelAanwijzing. Toegevoegd zijn drie nieuwe categorieen met SNOMED CT codering. Deze lijst kun je vinden op [ACP TreatmentCodelist](ValueSet-ACPTreatmentCodelist.html) pagina.

<blockquote class="stu-note" markdown="1">
Op dit moment zijn alleen de Behandelwensen deel (de BehandelAanwijzing zib) in scope. Deze specificering van de zib BehandelAanwijzing is te vinden in dit [resource profile](#profile).
</blockquote>

### View Definition

* [ViewDefinition voor Behandelaanwijzingen](ViewDefinition-Behandelaanwijzingen.json)

### User-Interface guidance
**! Belangrijk dat de UI Schets van Behandelaanwijzing en de UI Schets van Wilsverklaring in één scherm te tonen.**

Een schets van het scherm met labels en sortering informatie:
<div style="clear:both;"><img src="UI-Schets-BehandelAanwijzingenWilsverklaring1.png" class="figure-img img-responsive img-rounded center-block"></div>

Kolom definities:
<table class="grid">
  <thead>
    <th>Kolom label</th>
    <th width="25%">FHIR Path</th>
    <th>FHIR Type</th>
    <th>Zib element</th>
    <th>Toelichting of regels</th>
  </thead>
  <tbody>
    <tr>
      <td>Bron</td>
      <td><samp>.meta.extension("http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source").valueUri</samp></td>
      <td><code>string</code></td>
      <td><i>nvt</i></td>
      <td>Lookup adhv uri (AGB-Z of OID) <code>&lt;adressering-base&gt;/Organization?identifier=&lt;.meta.tag.code&gt;</code> en gebruik dan <code>Organization.name</code></td>
    </tr>  
    <tr>
      <td>Datum</td>
      <td><samp>.period.start​</samp></td>
      <td><code>dateTime</code></td>
      <td></td>
      <td>Kunnen vage datums zijn.</td>
    </tr>
    <tr>
      <td>Behandeling</td>
      <td><samp>.extension.where(url='http://nictiz.nl/fhir/StructureDefinition/zib-TreatmentDirective-Treatment')...</samp><br/>
      Variaties per bronsysteem<ul><li>Epic: <samp>...valueCodeableConcept.text</samp> met lange display</li> 
      <li>VIPLive: <samp>...valueCodeableConcept.display</samp> in het Engels</li> 
      <li>ChipSoft: <samp>...valueCodeableConcept.text</samp> korte display met hoofdletters</li></ul></td>
      <td><code>string</code></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Behandeling toegestaan</td>
      <td><samp>.modifierExtension.where(url='http://nictiz.nl/fhir/StructureDefinition/zib-TreatmentDirective-TreatmentPermitted').valueCodeableConcept.coding.display</samp></td>
      <td><code>string</code></td>
      <td>BehandelingToegestaan</td>
      <td>Zie UI schets voor icon mapping. N.B. obv coding.code</td>
    </tr>
    <tr>
      <td>Beperkingen</td>
      <td><samp>.except.extension.where(url='http://nictiz.nl/fhir/StructureDefinition/zib-TreatmentDirective-Restrictions').value</samp></td>
      <td><code>string</code></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Geverifieerd bij</td>
      <td><samp>.extension.extension.where(url='VerifiedWith').valueCodeableConcept.text</samp></td>
      <td><code>string</code></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="background-color:#8faadc; color:white">
      <th colspan="5">(1) UITKLAPVELD</tH>
    </tr>
    <tr style="background-color:#b4c7e7">
      <td>Toelichting</td>
      <td><samp>.extension.where(url='http://nictiz.nl/fhir/StructureDefinition/Comment').valueString</samp></td>
      <td><code>string</code></td>
      <td>Toelichting</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Gerelateerde Mapping

<blockquote class="stu-note" markdown="1">
Voor implementatie in VIPLive, die zib 2020 gebasseerd is, zijn mappings gedefinieerd tussen de 2017 zib versie en de 2020 zib versie. Deze mappings zijn voorgelegd aan het Nictiz zib-centrum en zij hebben deze voorlopig geaccepteerd terwijl zij verder werken aan de officiele transformaties.

* equal betekent 100% gelijk
* equivalent betekent ongeveer gelijk
</blockquote>

* [ConceptMap Behandelaanwijzing 2017 en Behandelaanwijzing2 2020](ConceptMap-behandelaanwijzing-2017-2020.html)

### Request

1. Opvragen (search) behandelaanwijzingen

    `GET <ontsluiten-bronsysteem-base>/Consent?patient=<fhir_patient_id>&category=http://snomed.info/sct|11291000146105`

{% include bronsysteem-herkennen.md %}

---

// File: input/pagecontent/testing.md

Zie in de FHIR specificaties: [Testing FHIR](https://hl7.org/fhir/STU3/testing.html)

### Sandboxes

* [Official HL7 Logica Sandbox](https://www.logicahealth.org/)
* [SMART Launcher](https://launch.smarthealthit.org/?fhir_version=r3)
* [Epic Hyperspace Simulator](https://appmarket.epic.com/HyperspaceSimulator)
* [Zorgplatform Sandbox](https://developer.zorgplatform.online/swaggerdocs)

### Test Tooling

* [Touchstone](https://touchstone.aegis.net/touchstone/) - REDELIJK Standaard FHIR TestScript - ook gebruikt voor MedMij kwalificatie
* [Interoplab](https://interoplab.nl/platform/)
* [Inferno](https://inferno-framework.github.io/inferno-core/) - MOEILIJK Custom Ruby
* [Crucible](https://github.com/fhir-crucible/) - API testen obv Implementatie Gids - MOEILIJK Custom Ruby

### Test Data

* [Nictiz-STU3-Zib2017](https://github.com/Nictiz/Nictiz-STU3-Zib2017/tree/stable-2.x/Examples)
* [Synthea](https://synthetichealth.github.io/synthea/) - Genereren van test data

### FHIR Path

* [FHIR Path](https://fhirpath-lab.azurewebsites.net/FhirPath/) of [fhirpath.js](https://hl7.github.io/fhirpath.js/) - query van FHIR output

### SQL-on-FHIR-v2 ViewDefinitions

Een tool om een FHIR response als tabel te tonen. Op basis van de "FHIR Path"s in de "Kolom definities" secties van de Profiles in deze implementatie gids kan je eenvoudig van test FHIR response snel als tabel zien. 

* [SQL-on-FHIR](https://fhirpath-lab.azurewebsites.net/sqlonfhir/)
* [ViewDefinition voor Alerts](ViewDefinition-Flag.json)
* [ViewDefinition voor Allergieën en Intoleranties](ViewDefinition-AllergyIntolerance.json)
* [ViewDefinition voor Behandelaanwijzingen](ViewDefinition-Behandelaanwijzingen.json)
* [ViewDefinition voor Correspondentie](ViewDefinition-DocumentReference.json)

### FHIR Validator Web

N.B. Vergeet niet in Options STU3 te kiezen.
* [Officiele HL7 FHIR](https://validator.fhir.org/)
* [Simplifier Validator](https://simplifier.net/validate?scope=nictiz.fhir.nl.stu3.zib2017@2.2.12)

### FHIR Validator CLI

Get the latest FHIR Validator.
```
> curl -L https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar -o validator_cli.jar
```

Run the FHIR Validator on the example Patients against the Zorgviewer profile and Dutch(nl) SNOMED CT.
```
> java -jar validator_cli.jar -version 3.0.2 -ig ~/.fhir/packages/hl7.fhir.nl.zorgviewer#dev/package/ -ig ~/.fhir/packages/nictiz.fhir.nl.stu3.zib2017#2.2.18/package/ -sct nl -profile http://hl7.nl/fhir/zorgviewer/StructureDefinition/Patient input/examples/Patient-JFictief.json
> java -jar validator_cli.jar -version 3.0.2 -ig input/resources -ig ~/.fhir/packages/nictiz.fhir.nl.stu3.zib2017#2.2.18/package/ -sct nl -profile http://hl7.nl/fhir/zorgviewer/StructureDefinition/Patient input/examples/Patient-Chipsoft.json
```

Run the FHIR Validator on your example output against the Zorgviewer IG and Dutch(nl) SNOMED CT and produce friendly HTML.
```
> java -jar validator_cli.jar -version 3.0.2 -ig ~/.fhir/packages/hl7.fhir.nl.zorgviewer#dev/package/ -ig ~/.fhir/packages/nictiz.fhir.nl.stu3.zib2017#2.2.18/package/ -sct nl -language nl -html-output validation.html 20240417\ PDFA\ 3.0.38\ NEXUS\ DocumentReference.json 
> open validation.html in your favorite browser
```

---

// File: input/pagecontent/thermometer.md



---

// File: input/pagecontent/zorgnetwerk.md

<div class="dragon">
<b>Dit is een RIVO Architecten Overleg onderwerp en uitwerking.</b>
</div>

### Inzage zorgnetwerk?

Inzage in het zorgnetwerk van een patiënt/cliënt binnen het zorgdomein.

### Fasering

1. Doordat de arts in de informatie kijkt in de Zorgviewer
1. Overzicht afleiden en presenteren uit beschikbare informatie Zorgviewer
1. Zorgteam bijhouden irt Behandelplan

#### 1 Huidige situatie

#### 2 Afleiden uit beschikbare informatie

In onderstaande tabel staat een overzicht van gegevens die mogelijk het zorgnetwerk voor een patient vormen. 
Zowel de bron in de zib als de bron in FHIR, waar soms meer in staat dan in de zib.
De laatste 4 kolommen (Zorgviewer, Epic, Zorgplatform, Nexus) geeft per systeem aan of dat gegeven via FHIR beschikbaar is (Persoon, Zorginstelling, Contactdatums). De 3 legenda waarden gaan over beschikbaarheid van de gegevens. '111' betekent dat het gegeven in de kolom Persoon, Zorginstellen als Contactdatums beschikbaar is.

Legenda: '-' = nvt, '0' = gegeven niet beschikbaar, '1' gegeven beschikbaar, '?' = nog uitzoeken

<table border="1" cellpadding="5">
<tr><th>Zib / FHIR</th>
<th>Persoon</th>
<th>Zorginstelling</th>
<th>Contactdatums</th>
<th>Zorgviewer</th>
<th>Epic</th>
<th>Zorgplatform</th>
<th>Nexus</th></tr>
<tr><td>Patient / Patient</td>
<td></td>
<td></td>
<td></td>
<td>1--</td>
<td>1--</td>
<td>1--</td>
<td>1--</td></tr>
<tr><td>Relaties niet in Patient zib</td>
<td>Huisarts / Patient.generalPractitioner (Pract)</td>
<td>Houder van het dossier / Patient.managingOrganization (Org) 
</td>
<td>nvt</td>
<td>00-</td>
<td>11-</td>
<td>11-</td>
<td>11-</td></tr>
<tr><td>ContactPersoon / Patient.contact</td>
<td>e.g. wife / Patient.contact</td>
<td>nvt</td>
<td>nvt</td>
<td>0--</td>
<td>1--</td>
<td>1--</td>
<td>1--</td>
</tr><tr><td>
Problemen / Condition 
</td>
<td>
Diagnosesteller 

Condition.asserter (Practitioner) 
</td>
<td></td>
<td>
Diagnosestelling 

Condition.assertedDate 
</td>
<td>0-0</td>
<td>0-1</td>
<td>1-1</td>
<td>0-0</td></tr>
<tr><td>Verrichtingen / Procedure</td>
<td>Procedure.performer (Practitioner)</td>
<td>
Procedure.performer (Location) 

(N.B. Epic/ZP use Performer.location) 
</td>
<td>Procedure.performedDateTime</td>
<td>111</td>
<td>111</td>
<td>111</td>
<td>111</td></tr>
<tr><td>VG Procedure (special case)</td>
<td>Procedure.performer (Practitioner)</td>
<td>Procedure.performer (Location)</td>
<td>Procedure.performedDateTime</td>
<td>111</td>
<td>001</td>
<td>???</td>
<td>???</td></tr>
<tr><td>
Contact / Encounter 
</td>
<td>
Met 

Encounter.participant.individual (Practitioner) 
</td>
<td>
Locatie 

Encounter.serviceProvider (Organization) 

(Epic uses Encounter.location) 

UMCGheeft ook nog afdeling als 2de locatie! 
</td>
<td>Encounter.period</td>
<td>000</td>
<td>111</td>
<td>111</td>
<td>111</td></tr>
</table>

---

// File: input/pagecontent/zorgviewer-services.md

De volgende bouwblokken hebben allen een FHIR API. Hierdoor kunnen ze allemaal worden gerealiseerd door een generieke FHIR-Store in te richten. Deze verzameling noemen we de Zorgviewer Services. Later kunnen die worden vervangen door nationale alternatieven. Bij onderstaande tijdelijke oplossingen worden de gegevens als FHIR resources opgeslagen in die Zorgviewer Services FHIR-Store.

### [Terminology](CapabilityStatement-Terminology.html)

* Doel: Nederlandse Terminology Service ([NTS Nictiz](https://nictiz.nl/wat-we-doen/activiteiten/terminologie/de-nationale-terminologieserver/))
* Inhoud: Vertalingen (ValueSet, CodeSystem, ConceptMap)
* Tijdelijk: CodeSystem en ValueSets in deze IG.

#### Bevragen terminologie

*TODO sequence diagram uitwerken*
Opvragen CodeSystems en ValueSets voor gebruik in de Zorgviewer.

**Van toepassing zijnde standaarden en documentatie**:
* [FHIR Terminology Service](https://hl7.org/fhir/STU3/terminology-service.html)

### [Toestemming / PatientIndex](CapabilityStatement-Toestemming.html)

* Doel: landelijke MITZ open vraag
* Inhoud: Toestemmingen van een patient (Consents)
* Tijdelijk: Vullen [Toestemming Consent](StructureDefinition-ToestemmingConsent) dmv afvangen HL7 v2 toestemming berichten.

### [Zorgverlener Directory](CapabilityStatement-ZorgverlenerDirectory.html)

* Doel: landelijke [ZORG-AB](https://www.vzvz.nl/diensten/gemeenschappelijke-diensten/zorg-ab/releases) of AGB Register
* Inhoud
    * Zorgverlener en metadata zoals specialisme (kwalificaties) ([Practitioner](StructureDefinition-Practitioner.html))
    * Zorgverlener Rol en metadata zoals specialisme (kwalificaties) adhv AGB code ([PractitionerRole](StructureDefinition-PractitionerRole.html))
* Tijdelijk: Verkrijgen AGB codes met bijbehorende specialismen en deze als PractitionerRole.

### [Adressering](CapabilityStatement-Adressering.html)

* Doel: landelijke [ZORG-AB](https://www.vzvz.nl/diensten/gemeenschappelijke-diensten/zorg-ab/releases)
* Inhoud
    * Bronsystemen endpoints ([Endpoints](StructureDefinition-Endpoint.html))
    * Organisatie metadata ([Organization](StructureDefinition-Organization.html))
* Tijdelijk: Maken Endpoints en Organizations adhv Zorgviewer aangesloten organisaties.

### [Behandelplan](CapabilityStatement-Behandelplan.html)

* Behandelplan details, workflow, beginnent met filters ([PlanDefinition](StructureDefinition-PlanDefinition.html), DataRequirements)

---

// File: input/includes/bronsysteem-herkennen.md

### Bronsysteem herkennen

De *Zorgviewer-backend* of *Ontsluiten bronsysteem* **MOET** na bevragen van het bronsysteem aan elk resultaat resource een meta-tag toevoegen met de AGB, OID of URA identifier van de zorgaanbieder (zie [Organization](StructureDefinition-Organization.html) voor voorbeelden). Dit wordt vervolgens gebruikt in de "Bron" kolom in de Zorgviewer-frontend. N.B. We gebruiken hier een *pre-adopt* van de FHIR R4 [Meta.source](StructureDefinition-extension-Meta.source.html).

Toevoegen aan elke response, dus per resource (bij een read) of per Bundle (bij een search):
```json
"meta": {
    "extension": [ {
        "url": "http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source",
        "valueUri": "urn:oid:2.16.840.1.113883.2.4.3.8"
    } ]
}
```

*Alternatief:* Elke entry van een search response Bundle bevat een referentie naar de bijbehorende Patient (``<resource>.subject|patient``). Elke patient heeft een ``Patient.managingOrganization`` en in de gerefereerde ``Organization.identifier`` staat vervolgens o.a. de OID van het bronsysyeem. Of je gebruikt de identifiers om een volledige Organization op te zoeken in het [adresboek](zorgviewer-services.html#adressering) en zie inhoud [hier](artifacts.html#zorgviewer-services-content).

---

// File: input/includes/future-note.md

<div class="dragon">
<b>De specificatie op deze pagina is work-in-progress.</b>
</div>

---

// File: input/includes/new-content-note.md

<div class="new-content" markdown="1">
*Where possible, new or updated content is highlighted in green for review.*
</div>

---

// File: input/includes/profile-note.md

<blockquote class="stu-note" markdown="1">
Dit Profiel is het resultaat van de vergelijking tussen de zib2017 FHIR Profiel en de implementaties in Epic, Chipsoft, Topicus en Nexus.
De elementen die in ieder geval in alle output beschikbaar zullen zijn.
Voornamelijk bedoeld voor houvast van een client en voor validatie van output.
</blockquote>

---

// File: input/images-source/Checklist-Epic.plantuml

@startuml
!pragma teoz true
hide footbox

participant "Zorgviewer-Back-end" as zvbe
box "Ontsluiten bronsysteem"
  participant "Broker / Interconnect" as broker
end box
box "Bronsysteem"
  participant "Epic / Hyperspace" as epic
end box
participant "Zorgviewer-Front-end" as zvfe

zvbe <--> broker
note right zvbe
* 1.3
* 2.1
* 2.2
* 2.3
end note
broker <--> epic
note right broker
* 1.1
* 4.1
* 4.2
* 4.3
* 4.4
* 4.5
* 4.6
end note
note left zvfe
* 1.2
end note
note right epic
* 3.1
* 3.2
* 3.3
* 3.4
* 3.5
* 4.1.1
* 5.1
* 5.2
end note
epic <--> zvfe

@enduml

---

// File: input/images-source/Consent-seq.plantuml

@startuml
hide footbox

participant "Zorgviewer-Back-end" as zv
participant "<<Ontsluiten bronsysteem>>\nIRIS" as obron
participant "<<Bronsysteem>>\nEPIC" as bron

zv->obron: gegevensverzoek (FHIR request)
activate zv
activate obron
obron->bron: Consent call uitvoeren voor de gewenste patient\n""<epic-fhir-base>/Consent?category=http://loinc.org|59284-0&patient=<patient_fhir_id>""
note right obron
  "Toestemming uitwisselen dossier" consent is active als:
  ""Consent.coding[0] = urn:oid:1.2.840.114350.1.13.3.7.4.686783.100#201047""
  en datum van vandaag valt in ""Consent.period"" en ""Consent.status = #active""
end note
alt geen active consent
  obron-->zv: lege Bundle
else active consent
  obron->bron: doorsturen gegevensverzoek (FHIR request)
  bron-->obron: results Bundle
  obron-->zv: results Bundle
end

deactivate obron
deactivate zv

@enduml

---

// File: input/images-source/Functionaliteiten.plantuml

@startuml

skinparam nodesep 2
skinparam ranksep 1

!include <archimate/Archimate>

package "Zorgviewer" {
  Application_Function(af1, "Patient\nbanner")
  Application_Function(af2, "Weergave\ngegevens")
  Application_Function(af3, "Sorteren")
  Application_Function(af4, "Conflicten\nattenderen")
  Application_Function(af5, "Ontdubbelen\ngegevens")
  Application_Function(af6, "Filtering obv\nBehandelplan")
}

package "Zorgviewer Host" {
  Application_Function(af7, "Opstart\nZorgviewer")
  Application_Function(af8, "Stelt\nidentity vast")
  Application_Function(af9, "Controle\nbehandelrelatie")
  Application_Function(af10, "Patient\nselectie")
  Application_Function(af11, "Zorgverlener\ngegevens")
  Application_Function(af12, "Zorgverlener\nrollen")
}

cloud {
 package "Behandelplan" {
   Application_Function(af13, "Behandelplannen\nadhv diagnose")
   Application_Function(af14, "Relevante gegevens\nadhv zorgpad")
   Application_Function(af15, "Relevante gegevens\nadhv rol")
 }
 package "Toestemming & Patientindex" {
   Application_Function(af16, "Toegestane\nbronsystemen patient")
   Application_Function(af17, "Bronsystemen\nendpoints")
 }
}

@enduml

---

// File: input/images-source/NutsXzorgviewer.plantuml

@startuml
hide footbox
autonumber

box Opvrager
    actor Zorgverlener
    box "Zorgaanbieder eigen systeem"
      participant "Zorgviewer\nHost" as Host
      participant Authenticatie
      participant "Eigen\nbronsysteem" as EBron
        end box

    !pragma teoz true
    box "Zorgviewer" #SpringGreen
        participant "Zorgviewer\nFrontend" as ZVFE
        participant "Zorgviewer\nBackend" as ZVBE
        participant "Zorgviewer Nuts Node" as ZVNode
    end box
    participant "Mitz Localisatie" as MitzLocalisatie
end box

participant Adressering

box "Andere zorgaanbieder bronsysteem\n(meerdere)"
  participant "Toestemming\n~MITZ" as Toestemming
  box "Bronhouder ontsluiting" #orange
      participant "API Security" as AOBron
      participant "Bronsysteem Nuts Node" as BronNode
  end box
  participant "Bronsysteem" as ABron
end box

note over Host
  CHECK: Zorgaanbieder is deelnermer RIVO-Noord
  CHECK: Zorgaanbieder staat in [[https://www.nen.nl/certificatie-en-keurmerken-nen-7510 NEN 7510 register]]
end note
note over Adressering
    Addresering wordt nu
    voorzien door de Nuts nodes
end note

== Start Zorgviewer Host ==

Zorgverlener->Host: start EPD
activate Zorgverlener
activate Host
Zorgverlener->Host: inloggen met lokale identiteit
Host->Authenticatie
activate Authenticatie
Authenticatie ->x Authenticatie
note left
  CHECK: authenticatie
end note
deactivate Authenticatie
Zorgverlener->Host: selecteer patient
Host ->x Host
note left
  CHECK: behandelrelatie
end note

...

== Start Zorgviewer ==

Zorgverlener->Host: start Zorgviewer
Host ->x Host
note left
  CHECK: op basis van security context
    "knop" wel of niet tonen
end note
Host->ZVFE: start met context
activate ZVFE
ZVFE ->x ZVFE
note left
  CHECK: whitelist
  CHECK: token validatie
end note
ZVFE<->Authenticatie: authenticatie handshake
note left
  CHECK: applicatie
end note
destroy Authenticatie

== Huidige patient en gebruiker ==

group (OPT) als niet al in context
  ZVFE-->ZVBE: opvragen huidige gebruiker\nen patient details
  activate ZVBE
  ZVBE-->EBron: (OPT) opvragen gebruiker\nen patient details
  note left
    CHECK: access token
    CHECK: client certificate
  end note
  destroy EBron
end
ZVFE->ZVFE: toon gebruiker en patient\nidentiteit details

== Netwerk identieit aanmaken ==

ZVBE -> ZVNode: signing session starten
activate ZVNode
ZVNode -> ZVNode : Render EmployeeIdentity
note left
  Zorginstelling verklaard de identiteit van de gebruiker
  De gebruik bevestigt deze.
end note
Zorgverlener -> ZVNode : bevestigen identiteit
deactivate ZVNode
ZVBE -> ZVNode: ophalen EmployeeIdentity

== Patient dossier ==

ZVBE->MitzLocalisatie: vraag bronhouders voor patient op
note right
  ~MITZ Open autorisatievraag
end note
destroy Toestemming
ZVBE->ZVNode: vraag endpoints op van organizaties\nobv de toestemmingen
note right
  Endpoints uit Nuts node
end note
destroy Adressering
loop Voor ieder endpoint
  ZVBE -> BronNode : verkrijg access_token mbv EmployeeIdentity
  ZVBE->AOBron: opvragen gegevens
  activate AOBron
  AOBron ->x AOBron
  note left
    CHECK: ip/ACL
  end note
  AOBron -> BronNode : valideer access_token
  destroy BronNode
  note right
    CHECK: access token
    CHECK: opvrager identiteit
    CHECK: EmployeeIdentity
  end note
  AOBron->ABron: opvragen gegevens
  activate ABron
  ABron ->x ABron
  note left
    CHECK: ip/ACL
    CHECK: backend token
    CHECK: client certificate
  end note
  ABron->Toestemming: ~MITZ Gesloten autorisatie vraag
  ABron ->x ABron
  note left
    CHECK: vraag gesteld zonder MITZ toestemming
  end note
  ABron-->AOBron: gegevens
  deactivate ABron
  AOBron-->ZVBE: gegevens
  deactivate AOBron
end
ZVBE-->ZVFE: toon geaggregeerde gegevens
deactivate ZVBE
deactivate ZVFE

@enduml

---

// File: input/images-source/Review-Workflow.plantuml

@startuml 

state "Concept" as concept
state "(1) WG review" as WGreview
state "(2) PO review" as POreview

concept : werken in master branch\n[[https://build.fhir.org/ig/RIVO-Noord/zorgviewer-ig/ CI Build]]
WGreview : werkgroepen IG en Bouw review\n[[https://build.fhir.org/ig/RIVO-Noord/zorgviewer-ig/branches/ laatste tag]]
POreview : product owner review\n[[https://build.fhir.org/ig/RIVO-Noord/zorgviewer-ig/branches/ laatste tag]]

[*] --> concept : new minor\n0.m.0
concept -[bold]-> WGreview : tag release
WGreview -[dashed]-> concept : [comments]\nnew revision\n0.m.r+1 
WGreview -[bold]-> POreview : [no comments]
POreview -[dashed]-> concept : [comments]\nnew revision\n0.m.r+1 
POreview -[bold]-> publicatie : [no comments]\nsnapshot release\n0.m.r
state "(3) Publicatie" as publicatie
publicatie --> [*] : volgende iteratie\n0.m+1.0
publicatie -[dotted]-> concept : [comments]\nop laatste revision
publicatie : breed review o.a. RIVO Architecten\n[[https://implementatiegids.zorgviewer.nl snapshot release]]

@enduml

---

// File: input/images-source/Security-Design-seq.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
box "Zorgaanbieder eigen systeem"
  participant "Zorgviewer\nHost" as Host
  participant "Eigen\nbronsysteem" as EBron
  participant Authenticatie
end box

!pragma teoz true
box "Zorgviewer Netwerk" #LightGreen
  box "Zorgviewer" #SpringGreen
    participant "Zorgviewer\nFrontend\n(in Browser)" as ZVFE
    participant "Zorgviewer\nBackend" as ZVBE
  end box
  participant "Toestemming\n~MITZ" as Toestemming
  participant Adressering
end box

box "Andere zorgaanbieder bronsysteem\n(meerdere)"
  participant "Ontsluiten\nbronsysteem" as AOBron
  participant "Bronsysteem" as ABron
end box

note over Host
  CHECK: Zorgaanbieder is deelnermer RIVO-Noord
  CHECK: Zorgaanbieder staat in [[https://www.nen.nl/certificatie-en-keurmerken-nen-7510 NEN 7510 register]]
end note

== Start Zorgviewer Host ==

Zorgverlener->Host ** : start EPD
activate Zorgverlener
activate Host
Zorgverlener->Host: inloggen met lokale identiteit
Host->Authenticatie
activate Authenticatie
Authenticatie ->x Authenticatie
note left
  CHECK: authenticatie
end note
deactivate Authenticatie
Zorgverlener->Host: selecteer patient
Host ->x Host
note left
  CHECK: behandelrelatie
end note

...

== Start Zorgviewer ==

Zorgverlener->Host: start Zorgviewer
Host ->x Host
note left
  PRE-CONDITIE: op basis van security context
    "knop" wel of niet beschikbaar
end note
Host->ZVFE ** : start met context
activate ZVFE
ZVFE ->x ZVFE
note right
  CHECK: whitelist
  CHECK: token validatie
end note
ZVFE<->Authenticatie: authenticatie handshake\nOAuth2/ClientID
note left
  CHECK: applicatie
end note
destroy Authenticatie

== Huidige patient en gebruiker ==

group (OPTIONEEL) als niet al in context
  ZVFE-->EBron: (OPTIONEEL) opvragen huidige gebruiker\nen patient details
  note left
    CHECK: access token
  end note
  destroy EBron
end
ZVFE->ZVFE: toon gebruiker en patient\nidentiteit details

== Patient dossier ==

ZVFE->ZVBE: opvragen gegevens
activate ZVBE
ZVBE->Toestemming: vraag patient toestemmingen op
note right
  Wordt MITZ Open autorisatievraag\nals dit in de regio in productie is
end note
destroy Toestemming
ZVBE->Adressering: vraag endpoints (lokaties) op van organizaties\nobv de toestemmingen
note right
  binnen besloten Zorgviewer netwerk
end note
destroy Adressering
loop Voor ieder endpoint
  ZVBE->AOBron: opvragen gegevens
  activate AOBron
  AOBron ->x AOBron
  note left
    CHECK: ip/ACL
  end note
  AOBron->ABron: opvragen gegevens
  activate ABron
  ABron ->x ABron
  note left
    CHECK: ip/ACL
    CHECK: backend token
    CHECK: client certificate
  end note
  group Check toestemming OPTIES
    note over AOBron
      Als MITZ in productie is in de regio wordt dit de Gesloten autorisatie vraag 
      vanuit bron (b) of vanuit ontsluiten bronsysteem (b) als de bron dit niet zelf kan.
    end note
    AOBron->ABron: (a) Check locale toestemming
    ABron->Toestemming: (b) Check toestemming
  end
  ABron ->x ABron
  note left
    CHECK: vraag gesteld zonder MITZ toestemming
  end note
  ABron-->AOBron: gegevens
  deactivate ABron
  AOBron-->ZVBE: gegevens
  deactivate AOBron
end
ZVBE-->ZVFE: toon geaggregeerde gegevens
deactivate ZVBE
deactivate ZVFE

@enduml

---

// File: input/images-source/Zorgviewer-comp-1.plantuml

@startuml

skinparam node {
  fontColor<<future>> Gray
  borderColor<<future>> LightGray
}
skinparam component {
  fontColor<<future>> Gray
  borderColor<<future>> LightGray
}

cloud "cloud" {
 [Zorgviewer]
 [Behandelplan] <<future>>
 [Toestemming] <<future>>
 [Adressering] <<future>>
 [Zorgverlener\nDirectory] <<future>>
}

node "Epic huis" {
 [Hyperspace] <<Zorgviewer\nHost>>
 [Epic Auth] <<Authenticatie>>
 [IRIS of Rhapsody] <<Bronsysteem\nontsluiting>> as Broker
 [Epic] <<Bronsysteem\n& Logging>>
 [Hyperspace]-->[Epic]
 [Broker]-->[Epic]
 [Epic Auth]-->[Epic]
}

node "Chipsoft of Topicus huis" {
 [HiX of VIPLive] <<Zorgviewer Host\n& Logging\n& Bronsysteem>>
 [Zorgplatform of\nVIPLive Auth] <<Authenticatie>>
 [Zorgplatform\nof VIPLive] <<Bronsysteem\nontsluiting>>
 [Zorgplatform\nof VIPLive]->[HiX of VIPLive]
}

node "Zorgviewer Host Los" <<future>> {
 [ZV Los] <<Zorgviewer Host>> <<future>>
 [ZV Los Auth] <<Authenticatie>> <<future>>
}

[Hyperspace]-u->[Zorgviewer] :  1. opstart
[HiX of VIPLive]-u->[Zorgviewer] : 1. opstart
[ZV Los]..>[Zorgviewer] : 1. opstart
[Zorgviewer]-d->[Epic Auth] : 2. wie?
[Zorgviewer]..>[ZV Los Auth] : 2. wie?
[Zorgviewer]-d->[Zorgplatform of\nVIPLive Auth] : 2. wie?
[Zorgviewer]-u->[Toestemming] : 3a. waar?
[Zorgviewer]-u->[Adressering] : 3b. waar?
[Zorgviewer]-u->[Behandelplan] : 4. filters
[Zorgviewer]->[Zorgplatform\nof VIPLive] : 5. bevragen
[Zorgviewer]->[Broker] : 5. bevragen
[Zorgviewer]->[Zorgverlener\nDirectory] : (opt)5b. bevragen
@enduml

---

// File: input/images-source/Zorgviewer-seq-1-fhir.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
box "Eigen zorgaanbieder"
participant "Zorgviewer Host" as Host
participant Authenticatie
end box
participant Zorgviewer

Zorgverlener->Host: start EPD
Zorgverlener->Host: inloggen met lokale identiteit
Zorgverlener->Host: selecteer patient
Zorgverlener->Host: start Zorgviewer
Host->Zorgviewer: start met context dmv SMART-on-FHIR \n""https://app-tst.zorgviewer.nl/application/launch""
activate Zorgviewer
Zorgviewer<->Authenticatie: SMART-on-FHIR handshake
note left Zorgviewer
 Uit request: zorgviewer-host-base from URL

 token: {
  "access_token": "...",
  "id_token": "<JWT>",
  "patient": "<patient_fhir_id>",
  "practitioner": "<practitioner_fhir_id>"
  ... }

 access_token decoded: {
  "sub": "<practitioner_fhir_id>"
  ... }
end note
Zorgviewer->Host: opvragen gebruiker gegevens\n""<zorgviewer-host-base>/Practitioner/<practitioner_fhir_id>""
activate Host
Host-->Zorgviewer: ""[[StructureDefinition-Practitioner.html Practitioner]]""
deactivate Host
Zorgviewer->Host: opvragen gebruiker rollen\n""<zorgviewer-host-base>/PractitionerRole?practitioner=<practitioner_fhir_id>""
activate Host
Host-->Zorgviewer: ""[[StructureDefinition-PractitionerRole.html PractitionerRole]]""
note left Zorgviewer
 opt: ""[[ConceptMap-epic-rolcode.html ConceptMap]]"" gebruiken voor PractitionerRole.code
 subject_role zit in Practitioner.code[system=SNOMED CT]
 subject_organization_id zit in Practitioner.meta[extension=source]
end note
deactivate Host
Zorgviewer->Zorgviewer: toon gebruiker gegevens

Zorgviewer->Host: opvragen patient gegevens\n""<zorgviewer-host-base>/Patient/<patient_fhir_id>""
activate Host
Host-->Zorgviewer: ""[[StructureDefinition-Patient.html Patient]]"" (onder andere BSN voor verdere raadplegingen)
deactivate Host
Zorgviewer->Zorgviewer: toon patient gegevens

Zorgviewer->Zorgviewer: **ga naar de Bepalen zorgaanbieders sequence**

deactivate Zorgviewer

@enduml

---

// File: input/images-source/Zorgviewer-seq-1-viplive.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
box "Eigen zorgaanbieder\nVIPLive"
participant "Zorgviewer Host" as Host
participant Authenticatie
end box
participant Zorgviewer

Zorgverlener->Host: start EPD
Zorgverlener->Host: inloggen met lokale identiteit
Zorgverlener->Host: selecteer patient
Zorgverlener->Host: start Zorgviewer
Host->Zorgviewer: start met context
activate Zorgviewer
Zorgviewer<->Authenticatie: SAML handshake
note left Zorgviewer
 SAML Attributes
 # subject:role
 # subject:organization-id
 ... zie tabel
end note
Zorgviewer->Zorgviewer: toon gebruiker gegevens
Zorgviewer->Zorgviewer: toon patient gegevens

Zorgviewer->Zorgviewer: **ga naar de Bepalen zorgaanbieders sequence**

deactivate Zorgviewer

@enduml

---

// File: input/images-source/Zorgviewer-seq-1-zp.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
box "Eigen zorgaanbieder\nHiX / Zorgplatform"
participant "Zorgviewer Host" as Host
participant Authenticatie
end box
participant Zorgviewer

Zorgverlener->Host: start EPD
Zorgverlener->Host: inloggen met lokale identiteit
Zorgverlener->Host: selecteer patient
Zorgverlener->Host: start Zorgviewer
Host->Zorgviewer: start met context
activate Zorgviewer
Zorgviewer<->Authenticatie: SAML handshake
note left Zorgviewer
 Attributen
 # BSN -> resource-id
 # Role -> role
 ... zie tabel
end note
Zorgviewer->Zorgviewer: toon gebruiker gegevens
Zorgviewer->Zorgviewer: toon patient gegevens

Zorgviewer->Zorgviewer: **ga naar de Bepalen zorgaanbieders sequence**

deactivate Zorgviewer

@enduml

---

// File: input/images-source/Zorgviewer-seq-2.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
participant "Zorgviewer\n~MITZ Uitwisselsysteem" as Zorgviewer
participant "Toestemming\n~MITZ" as Toestemming
participant "Adressering" as Adressering

activate Zorgviewer
Zorgverlener->Zorgviewer: ..vervolg opstarten zorgviewer..
Zorgviewer->Toestemming: Opvragen ontvankelijke zorgaanbieders (Open autorisatievraag adhv BSN)\n""<toestemming-base>/Consent?patient:Patient.identifier=<BSN>""
note over Toestemming: Afhankelijk van toestemming van patient\nvoor "delen met de zorgverlener".
activate Toestemming
Toestemming-->Zorgviewer: Lijst ontvankelijke zorgaanbieders (Organization)\nBundle met ""[[StructureDefinition-ToestemmingConsent.html ToestemmingConsent]]""
deactivate Toestemming

loop voor iedere zorgaanbieder
  Zorgviewer->Adressering: Endpoints opvragen adhv Organization\n""<adressering-base>/Endpoint?organization=<Consent.organization.reference>""
  note over Toestemming
    Consent.organization: e.g. UMCG
    Endpoint opvragen bij Organization
  end note
  activate Adressering
  Adressering-->Zorgviewer: Bundle met ""[[StructureDefinition-Endpoint.html Endpoint]]""
  deactivate Adressering
end loop

deactivate Zorgviewer

@enduml

---

// File: input/images-source/Zorgviewer-seq-2a.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
participant "Zorgviewer" as Zorgviewer
participant "Adressering" as Adressering

activate Zorgviewer
Zorgverlener->Zorgviewer: ..vervolg opstarten zorgviewer..

Zorgviewer->Adressering: Organizations opvragen\n""<adressering-base>/Organization""
note over Adressering
  Alle geregistreerde Organizations
end note
activate Adressering
Adressering-->Zorgviewer: Bundle met ""[[StructureDefinition-Organization.html Organization]]""
deactivate Adressering

loop voor iedere organisatie
    Zorgviewer->Adressering: Endpoints opvragen adhv Organization\n""<adressering-base>/Endpoint?organization=Organization/<Organization.name>""
    note over Adressering
    Endpoint opvragen bij Organization
    end note
    activate Adressering
    Adressering-->Zorgviewer: Bundle met ""[[StructureDefinition-Endpoint.html Endpoint]]""
    deactivate Adressering
end loop

deactivate Zorgviewer

@enduml

---

// File: input/images-source/Zorgviewer-seq-3.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
participant Zorgviewer
participant Logging
participant Behandelplan
box "Andere zorgaanbieder"
participant "Bronsysteem ontsluiting" as Bron
participant Authenticatie
participant Bronsysteem
end box

activate Zorgviewer
Zorgverlener->Zorgviewer: ..vervolg bepalen\nzorgaanbieders..
Zorgviewer->Logging: log gebeurtenis, zie [[StructureDefinition-AuditEvent.html AuditEvent]]
Zorgviewer->Behandelplan: Bepalen minimale dataset\n""<behandelplan-base>/PlanDefinition?name=BgZ2017""
note right Zorgviewer
  Eerst hard-coded "BgZ2017" behandelplan.
  Later obv (hoofd)diagnose(zorgpad) of rol/specialisme gebruiker.
end note
activate Behandelplan
Behandelplan-->Zorgviewer: Behandelplan\n""[[StructureDefinition-PlanDefinition.html PlanDefinition]]""
deactivate Behandelplan
loop voor iedere zorgaanbieder
  Zorgviewer->Zorgviewer: [[Endpoint-UMCG.html Bronsysteem ontsluiting endpoint]]
  activate Zorgviewer
  Zorgviewer->Bron : verkrijg ""patient_fhir_id"" adhv BSN\n""<bronsysteem-ontsluiting-base>/Patient?identifier=<BSN>""
  activate Bron
  Bron->Authenticatie : verkrijgen access token [[design.html#bevragen-bronsysteem-summary-table zie tabel]]
  note right Bron
    auth_token bij access token request:
    { ...
      "subject_name": "Int Arts",
      "subject_role": [ 
          { 
            "system": "2.16.840.1.113883.6.96", 
            "code": "309343006", 
            "display": "Arts" 
          } 
        ],
      (optioneel) "subject_organization": "UMCG",
      "subject_organization_id": "urn:oid:2.16.840.1.113883.2.4.3.8" }
  end note
  Bron->Bronsysteem : Patient request
  activate Bronsysteem
  Bronsysteem-->Bronsysteem: toestemming controle\nen log request
  Bronsysteem-->Bron : Patient resource
  opt als knooppunt voor meerdere bronnen
    Bron->Bron: Toevoegen bron metadata\nadhv [[CodeSystem-bronsysteem-zorgaanbieder.html bronsysteem-zorgaanbieder]]
    note right Bron
"meta": {
    "extension": [ {
        "url": "http://hl7.org/fhir/4.0/StructureDefinition/extension-Meta.source",
        "valueUri": "urn:oid:2.16.840.1.113883.2.4.3.8"
    } ]
}
- of -
via Patient.managingOrganization.identifier
    end note
  end opt
  deactivate Bronsysteem
  Bron-->Zorgviewer : ""[[StructureDefinition-Patient.html Patient]]""
  deactivate Bron
  loop gegevensverzoeken
    Zorgviewer->Zorgviewer: formuleren gegevensverzoek (request)\nadhv Behandelplan Data Requirements\n""PlanDefinition.action[0].output[].type""\nen ""PlanDefinition.action[0].output[].codeFilter""
    activate Zorgviewer
    Zorgviewer->Bron: gegevensverzoek\n""<bronsysteem-ontsluiting-base>/<resource>?patient=<patient_fhir_id>&<filter>""
    activate Bron
    opt als token verlopen
      Bron->Authenticatie : verkrijgen access token (zie stap #7)
    end opt
    Bron->Bronsysteem : gegevensverzoek (per zib)
    activate Bronsysteem
    Bronsysteem-->Bronsysteem: toestemming controle\nlog request
    Bronsysteem->Bron: fhir resources (Bundle) bij de zib
    deactivate Bronsysteem
    opt als knooppunt voor meerdere bronnen
      Bron->Bron: Toevoegen bron metadata (zie stap #11)
    end opt
    Bron-->Zorgviewer: fhir resources (Bundle) bij de zib
    deactivate Bron
    deactivate Zorgviewer
    group **TOEKOMST**
      Zorgviewer->Zorgviewer: ontdubbelen en conflicten detectie
      note right of Zorgviewer
        Zorgviewer invulling van [[https://informatiestandaarden.nictiz.nl/wiki/BgZ:V1.0_BgZ_MSZ_Informatiestandaard BgZ]] 
        paragrafen 3.2.9.1 Ontdubbelen en 3.2.9.2 Duplicaatdetectie
      end note
    end group
  end
  deactivate Zorgviewer
end

Zorgviewer->Zorgviewer: toon gegevens
Zorgviewer-->Zorgverlener

@enduml

---

// File: input/images-source/Zorgviewer-seq-4.plantuml

@startuml
hide footbox
autonumber

actor Zorgverlener
participant Zorgviewer
participant "Zorgverlener\nDirectory" as zvdir
box "Andere zorgaanbieder"
participant "Bronsysteem ontsluiting" as Bron
participant Bronsysteem
end box

activate Zorgviewer
Zorgverlener->Zorgviewer: ..vervolg bevragen bronsystemen zorgaanbieders..
loop
    Zorgviewer->Zorgviewer: voor iedere zorgaanbieder ([[Endpoint-UMCG.html Bronsysteem ontsluiting endpoint]])
    activate Zorgviewer
    Zorgviewer->Zorgviewer: formuleren documenten gegevensverzoek(request)
    Zorgviewer->Bron: gegevensverzoek\n""<bronsysteem-ontsluiting-base>/DocumentReference?patient=<patient_fhir_id>""
    activate Bron
    opt als token verlopen
        Bron->Bronsysteem : verkrijgen access token
    end opt
    Bron->Bronsysteem : gegevensverzoek
    activate Bronsysteem
    Bronsysteem-->Bronsysteem: toestemming check\nen log request
    Bronsysteem->Bron: fhir resources (DocumentReference Bundle)
    deactivate Bronsysteem
    opt als knooppunt voor meerdere bronnen
      Bron->Bron: Toevoegen bron metadata
    end opt
    Bron-->Zorgviewer: Bundle met ""[[StructureDefinition-DocumentReference.html DocumentReference]]""
    deactivate Bron
    group **TOEKOMST**: specialisme bij documenten loop
        Zorgviewer->Bron: ""GET <bronsysteem-ontsluiting-base>/Practitioner/<practitioner_fhir_id>""
        Bron-->Zorgviewer: ""[[StructureDefinition-Practitioner.html Practitioner]]""
        Zorgviewer->zvdir: ""GET <zorgverlener-directory-base>/PractitionerRole/?identifier=<AGB/BIG>""
        zvdir-->Zorgviewer: Bundle met ""[[StructureDefinition-PractitionerRole.html PractitionerRole]]""
    end
    Zorgviewer->Zorgviewer: samenvoegen
    deactivate Zorgviewer
end
Zorgviewer->Zorgviewer: toon documenten lijst
Zorgviewer-->Zorgverlener
deactivate Zorgviewer
group wacht op gebruikers actie
...
end
Zorgverlener-->Zorgviewer: selecteer document
activate Zorgviewer
Zorgviewer->Bron: gegevensverzoek\n""<bronsysteem-ontsluiting-base>/Binary/<binary-id>""\nurl komt uit DocumentReference.content.attachement.url
note right Zorgviewer
    Stuur [[http://hl7.org/fhir/STU3/binary.html#rest Accept Header]]
    application/fhir+xml of application/fhir+json   
end note
activate Bron
opt als token verlopen
    Bron->Bronsysteem : verkrijgen access token
end opt
Bron->Bronsysteem : gegevensverzoek
activate Bronsysteem
Bronsysteem-->Bronsysteem: toestemming check\nen log request
Bronsysteem->Bron: Binary
opt als knooppunt voor meerdere bronnen
    Bron->Bron: Toevoegen bron metadata
end opt
deactivate Bronsysteem
Bron-->Zorgviewer: Binary
deactivate Bron
Zorgviewer->Zorgviewer: toon document
Zorgviewer-->Zorgverlener
deactivate Zorgviewer

@enduml

---

