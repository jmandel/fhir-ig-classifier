File: repos/gabriel0316_SLASH_ig-tooling/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.at.fhir.gkl.ig-tooling
canonical: https://fhir.hl7.at/elga-austrianpatientsummary-r4
name: ELGA-AustrianPatientSummary-R4
title: Austrian Patient Summary (R4)
description: The FHIR® implementation guide Austrian Patient Summary is derived from the HL7® Austria FHIR® Core implementation guide and ensures conformity with the International Patient Summary (IPS).
status: draft # draft | active | retired | unknown
jurisdiction: urn:iso:std:iso:3166#AUT
version: 0.2.0
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2024+
releaseLabel: ci-build # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
# license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
# jurisdiction: urn:iso:std:iso:3166#US "United States of America" # https://www.hl7.org/fhir/valueset-jurisdiction.html
publisher:
  name: ELGA GmbH
  url: https://elga.gv.at
  # email: test@example.org

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
dependencies:
  hl7.fhir.uv.ips: 1.1.0
  hl7.at.fhir.core.r4: current
#   hl7.fhir.us.core: 3.1.0
#   hl7.fhir.us.mcode:
#     id: mcode
#     uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#     version: 1.0.0
#
#
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
#
pages:
  index.md:
    title: Home
  contest.md:
    title: IPS Visualization Contest
# pages:
#   index.md:
#     title: Example Home
#   implementation.xml:
#   examples.xml:
#     title: Examples Overview
#     simpleExamples.xml:
#     complexExamples.xml:
#
#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array.
# For parameters defined by core FHIR see:
# http://build.fhir.org/codesystem-guide-parameter-code.html
# For parameters defined by the FHIR Tools IG see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
#
# parameters:
#   excludettl: true
#   validation: [allow-any-extensions, no-broken-links]
#
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │ The menu property will be used to generate the input/menu.xml file. The menu is represented    │
# │ as a simple structure where the YAML key is the menu item name and the value is the URL.       │
# │ The IG publisher currently only supports one level deep on sub-menus. To provide a             │
# │ custom menu.xml file, do not include this property and include a `menu.xml` file in            │
# │ input/includes. To use a provided input/includes/menu.xml file, delete the "menu"              │
# │ property below.                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  IPS Visualization Contest: contest.html
  Artifacts: artifacts.html

# ╭───────────────────────────Less Common Implementation Guide Properties──────────────────────────╮
# │  Uncomment the properties below to configure additional properties on the ImplementationGuide  │
# │  resource. These properties are less commonly needed than those above.                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#
# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
#
# contact:
#   - name: Bob Smith
#     telecom:
#       - system: email # phone | fax | email | pager | url | sms | other
#         value: bobsmith@example.org
#         use: work
#
#
# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs. If a value is an id or name, SUSHI will replace
# it with the correct canonical when generating the IG JSON.
#
# global:
#   Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#   Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile
#
#
# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key.
#   * if the key is an id or name, SUSHI will replace it with the
#     correct URL when generating the IG JSON.
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * if the exampleCanonical is an id or name, SUSHI will replace
#     it with the correct canonical when generating the IG JSON.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#
# resources:
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds. If a resource
# is specified by id or name, SUSHI will replace it with the correct
# URL when generating the IG JSON.
#
# groups:
#   GroupA:
#     name: Group A
#     description: The Alpha Group
#     resources:
#     - StructureDefinition/animal-patient
#     - StructureDefinition/arm-procedure
#   GroupB:
#     name: Group B
#     description: The Beta Group
#     resources:
#     - StructureDefinition/bark-control
#     - StructureDefinition/bee-sting
#
#
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * date
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
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
instanceOptions:
  # When set to true, slices must be referred to by name and not only by a numeric index in order to be used
  # in an Instance's assignment rule. All slices appear in the order in which they are specified in FSH rules.
  # While SUSHI defaults to false for legacy reasons, manualSliceOrding is recommended for new projects.
  manualSliceOrdering: true # true | false
  # Determines for which types of Instances SUSHI will automatically set meta.profile
  # if InstanceOf references a profile:
  #
  # setMetaProfile: always # always | never | inline-only | standalone-only
  #
  #
  # Determines for which types of Instances SUSHI will automatically set id
  # if InstanceOf references a profile:
  #
  # setId: always # always | standalone-only


---

// File: input/pagecontent/contest.md

<style>
.stu-note::before {
  white-space: pre;
  content: "AUFGABE\A ";
  background-color: unset;
  color: unset;
  font-weight: bold;
}

.stu-note {
  margin: 5px;
  padding: 10px;
  background-color: #CBE9FD;
  border-left-color: #7F929E;
}
</style>

![hl7at](contest.png){: style="width: 10%"}

Liebe Schüler:innen und Student:innen,

Die [HL7® Austria](https://hl7.at/) lädt mit Unterstützung der [ELGA GmbH](https://www.elga.gv.at/) herzlich dazu ein, am Visualization Contest für das [International Patient Summary (IPS)](https://hl7.org/fhir/uv/ips/) teilzunehmen und euer kreatives Potenzial zu entfalten! Das IPS wird zu einem wichtigen Element der europäischen Gesundheitskommunikation und trägt dazu bei, wesentliche Patientendaten einheitlich und verständlich zu übermitteln.

Das IPS basiert auf dem [HL7® FHIR®](https://hl7.org/fhir/R4/index.html) (Fast Healthcare Interoperability Resources) Standard und nutzt strukturierte Datenformate wie JSON zur Speicherung und Übertragung. Es umfasst wichtige Informationen zu einer Person, wie demografische Daten, medizinische Diagnosen, Medikationspläne, Allergien und vieles mehr, um ein umfassendes Bild zu vermitteln.

Im Rahmen dieses Wettbewerbs stellen wir euch zwei beispielhafte IPS-Datensätze zur Verfügung, die im Zuge des Contests visualisiert werden sollen. Diese Datensätze bieten euch die Möglichkeit, eure Designideen an realistischen Patient:inneninformationen zu testen und umzusetzen.

<div markdown="1" class="stu-note" >
Eure Aufgabe besteht darin, innovative Design-Prototypen für die Visualisierung des IPS zu entwickeln - allein oder als Team! Ihr könnt dabei interaktive Lösungen gestalten, die die Nutzer einbeziehen. Alternativ könnt ihr auch statische Visualisierungen entwerfen, die beispielsweise für den Ausdruck geeignet sind und dennoch die Informationen klar und übersichtlich darstellen. Wichtig ist uns, dass die Informationen übersichtlich dargestellt werden und bei bedarf auch nach Daten gefiltert oder gesucht werden kann. Ebenso solle jede Art von Darstellung unterstützt werden (z.B. Stichwort "responsive"). Sollte eine technische Umsetzung nicht möglich sein, sind wir jedenfalls auch an Mock-ups interessiert. In jedem Fall solltet ihr euer Werk gut dokumentieren, z.B. in einem GitHub/GitLab-Repository, wo ihr auch gleich die Source-Files bereitstellen könnt.

Beispiele des österreichischen Patient Summary (bereitgestellt durch die ELGA GmbH):

- [APS-1-no-problems-medication-allergies](Bundle-APS-1-no-problems-medication-allergies.html) - Minimalbeispiel eines Patienten ohne gesundheitliche Probleme, aktuelle Medikation oder Allergien.
- [APS-2-preventive-medical-checkup](Bundle-APS-2-preventive-medical-checkup.html) - Umfangreiches Beispiel eines Patienten mit zahlreichen Beschwerden, Allergien, früheren Behandlungen, etc. Darüber hinaus wurden mehrere Medikamente verschrieben und Laborwerte erhoben.
</div>

Der Contest erstreckt sich über den Sommer und endet am **31. Oktober 2024**. Eure eingereichten Prototypen werden von einer Fachjury bewertet, die Kreativität, Benutzerfreundlichkeit, Umsetzbarkeit, Ästhetik und die Fähigkeit zur effektiven Kommunikation von Gesundheitsinformationen berücksichtigt.

Die Gewinner:innen werden nicht nur mit einem Preisgeld belohnt, sondern haben auch die Möglichkeit, ihre Entwürfe einer breiten Öffentlichkeit zu präsentieren und einen Beitrag zur Weiterentwicklung der Gesundheitskommunikation zu leisten. Die Gewinner:innen des Wettbewerbs werden mit einem Preisgeld von € 1000,- prämiert und dürfen ihren Design-Prototypen im Rahmen der HL7 Jahrestagung 2025 präsentieren.

Nutzt diese Chance, eure Fähigkeiten im Design und euer Interesse am Gesundheitswesen zu kombinieren und gemeinsam die Zukunft der Patient Summary zu gestalten!

Wir freuen uns auf eure kreativen Ideen und Einsendungen!

Mit freundlichen Grüßen,

HL7® Austria mit Unterstützung der ELGA GmbH

[![hl7at](hl7atlogo.png){: style="width: 10%"}](https://hl7.at/) [![elga](logo.jpg){: style="width: 10%"}](https://www.elga.gv.at/)

### Existierende Visualisierungswerkzeuge

Für das IPS gibt es bereits verschiedene Visualisierungswerkzeuge, die aber allesamt noch nicht optimal sind:

- [https://www.maxmddirect.com/direct/FHIR/ResponseViewer](https://www.maxmddirect.com/direct/FHIR/ResponseViewer)
- [https://ps-ca-renderer.apibox.ca/index.html](https://ps-ca-renderer.apibox.ca/index.html)
- [https://www.ipsviewer.com/](https://www.ipsviewer.com/)
- [https://sandbox.hl7europe.eu/laboratory/web/apps/visualiser/index.html?url=https://sandbox.hl7europe.eu/laboratory/fhir/Bundle/at-f91828ea057b](https://sandbox.hl7europe.eu/laboratory/web/apps/visualiser/index.html?url=https://sandbox.hl7europe.eu/laboratory/fhir/Bundle/at-f91828ea057b) basierend auf [https://github.com/hl7-eu/viz-lab](https://github.com/hl7-eu/viz-lab)
- [https://idmp-viewer.azurewebsites.net/display-product?url=https://sandbox.hl7europe.eu/laboratory/fhir/Bundle/at-f91828ea057b](https://idmp-viewer.azurewebsites.net/display-product?url=https://sandbox.hl7europe.eu/laboratory/fhir/Bundle/at-f91828ea057b) basierend auf [http://www.nprogram.co.uk/](http://www.nprogram.co.uk/)

### Teilnahmebedingungen

- Diese Teilnahmebedingungen gelten für den Wettbewerb "IPS Visualization Contest", organisiert von HL7® Austria mit Unterstützung der ELGA GmbH.
- Der einzureichende Design-Prototyp muss sich mit der Visualisierung des IPS auseinandersetzen.
- Einreichen können einzelne oder Gruppen von Schüler:innen und/oder Student:innen, die aktiv sind oder deren Schul- oder Studienabschluss an einer österreichischen Schule oder Universität nicht länger als ein Jahr zurückliegt.
- Eine Mitgliedschaft bei HL7® Austria wird nicht vorausgesetzt.
- Eine Bewerbung erfolgt auf Deutsch oder Englisch und umfasst folgende Unterlagen:
  - Vorstellung des Design-Prototypen - diese sollte folgendes enthalten:
    - Beschreibung des Design-Prototypen
    - Designvorschläge/Screenshots
    - ggf. Link auf ein GitLab/GitHub-Repository
    - ggf. Link auf einen funktionierenden Prototypen
  - Kurzpräsentation des Design-Prototypen auf 3 Folien (als PDF)
  - Lebenslauf mit stichwortartiger Beschreibung des bisherigen (schulischen oder wissenschaftlichen) Werdegangs der einzelnen Schüler:innen und/oder Student:innen (als PDF)
- Einsendung an [office@hl7.at](mailto:office@hl7.at). Sie erhalten dann eine Rückmeldung, ob Ihre Unterlagen akzeptiert wurden. Nur vollständige Bewerbungen werden akzeptiert.
- Einsendeschluss: 31. Oktober 2024
- Die Gewinner:innen werden bis 31. Dezember 2024 bekannt gegeben.
- Die Gewinner:innen präsentieren ihren Design-Prototyp in einem Kurzvortrag (5 Minuten) anhand der eingereichten Kurzpräsentation im Rahmen der HL7® Jahrestagung 2025. Für sie ist daher die Teilnahme an dieser Veranstaltung kostenlos.
- Etwaige durch die Einreichung anfallende Kosten (wie z.B. Arbeitszeit, Reisekosten, etc.) werden nicht erstattet.
- Die Auswahl des besten Design-Prototypen erfolgt durch eine Jury, die als wissenschaftliches Komitee von der HL7® Austria bestellt wird.
- Das Einlegen von Rechtsmitteln gegen die vom Ausschuss getroffene Auswahl ist ausgeschlossen.
- Mit der Einreichung erklären sich die Teilnehmer ausdrücklich damit einverstanden, dass alle Nutzungs-, Veröffentlichungs- und Weiterentwicklungsrechte an dem eingereichten Design-Prototypen nicht-exklusiv auf die ELGA GmbH übertragen werden. Diese Rechte-Übertragung an die ELGA GmbH erfolgt unwiderruflich und unentgeltlich. Nicht-exklusiv bedeutet in diesem Zusammenhang, dass die Teilnehmer ihre Design-Prototypen unabhängig von der ELGA GmbH auch selbst uneingeschränkt weiterverwenden und verwerten dürfen.
- Für alle Streitigkeiten aus oder im Zusammenhang mit der gegenständlichen Auslobung sowie im Zusammenhang mit Nutzungsrechten an der im Wettbewerb eingereichten Software ist ausnahmslos österreichisches Recht, jedoch unter Ausschluss aller Weiterverweisungen auf ausländisches Recht anzuwenden.
- Für Streitigkeiten aus dieser Auslobung inkl. Nutzungsrechten ist das sachlich zuständige Gericht am Sitz der Ausloberin (HL7 Austria) zuständig.



---

// File: input/pagecontent/index.md

<style>
.stu-note::before {
  white-space: pre;
  content: "WETTBEWERB\A ";
  background-color: unset;
  color: unset;
  font-weight: bold;
}

blockquote.stu-note {
  margin: 5px;
  padding: 10px;
  background-color: #CBE9FD;
  border-left-color: #7F929E;
}
</style>

<div xmlns="http://www.w3.org/1999/xhtml"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <blockquote class="stu-note">
    <p><img src="contest.png" alt="hl7at" style="width: 5%"></p>
    <p></p>
    <p><strong>Aufruf zum <a href="contest.html">IPS Visualization Contest</a> - Gestalte die Zukunft des Patient Summary!</strong></p>
    <p></p>
    <p></p>
  </blockquote>
</div>

### Einleitung

Ziel dieses Implementierungsleitfadens ist die Beschreibung von Struktur, Format und Standards des österreischischen Patient Summary (Austrian PS). Dazu werden die Vorgaben des [International Patient Summary (IPS)](https://hl7.org/fhir/uv/ips/) sowie des [HL7® Austria FHIR® Core Implementation Guides](https://build.fhir.org/ig/HL7Austria/HL7-AT-FHIR-Core-R4/) kombiniert.

[![overview](austrian-ips-context.drawio.png){: style="width: 50%"}](austrian-ips-context.drawio.png)

#### Beispiele

Die folgenden beiden Beispiele setzen die Vorgaben des österreichischen Patient Summary um:

- [APS-1-no-problems-medication-allergies](Bundle-APS-1-no-problems-medication-allergies.html)
- [APS-2-preventive-medical-checkup](Bundle-APS-2-preventive-medical-checkup.html)

### Abhängigkeiten zu anderen Implementierungsleitfäden

{% include dependency-table.xhtml %}

### Lizenz und rechtliche Bedingungen
HL7®, HEALTH LEVEL SEVEN® und FHIR® sind Marken im Besitz von Health Level Seven International, eingetragen beim United States Patent and Trademark Office.

Dieser Implementierungsleitfaden enthält und verweist auf geistiges Eigentum, das Dritten gehört („Third Party IP“). Mit der Annahme dieser Lizenzbedingungen werden keine Rechte in Bezug auf das geistige Eigentum Dritter gewährt. Der Lizenznehmer ist allein dafür verantwortlich, alle erforderlichen Lizenzen oder Genehmigungen für die Nutzung des geistigen Eigentums Dritter in Verbindung mit der Spezifikation oder auf andere Weise zu ermitteln und einzuholen.

---

// File: input/fsh/alias.fsh

// profiles
Alias: $imposeProfile =                     http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile

// code systems
Alias: $loinc =                             http://loinc.org


---

// File: input/fsh/INVARIANTS.fsh




---

// File: input/fsh/profiles/AllergyIntolerance.fsh

Profile: AtIpsAllergyIntolerance
Parent: AllergyIntolerance
Id: at-ips-allergyintolerance
Title: "AT IPS AllergyIntolerance"
Description: "This AT IPS profile for the AllergyIntolerance resource is derived from the general AllergyIntolerance resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS AllergyIntolerance"
* ^extension[$imposeProfile].valueCanonical = Canonical(AllergyIntoleranceUvIps)
* patient only Reference(AtIpsPatient)



---

// File: input/fsh/profiles/Bundle.fsh

Profile: AtIpsBundle
Parent: Bundle
Id: at-ips-bundle
Title: "AT IPS Bundle"
Description: "This AT IPS profile for the Bundle resource is derived from the general Bundle resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Bundle"
* ^extension[$imposeProfile].valueCanonical = Canonical(BundleUvIps)

* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[=].path = "resource"
* entry ^slicing.discriminator[+].type = #type
* entry ^slicing.discriminator[=].path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = false

* entry contains
    Composition 1..1 and
    Patient 1..1 and
    AllergyIntolerance 0..* and
    Condition 0..* and
    Device 0..* and
    DeviceUseStatement 0..* and
    DiagnosticReport 0..* and
    ImagingStudy 0..* and
    Immunization 0..* and
    Media 0..* and
    Medication 0..* and
    MedicationRequest 0..* and
    MedicationStatement 0..* and
    Practitioner 0..* and
    PractitionerRole 0..* and
    Procedure 0..* and
    Organization 0..* and
    ObservationVitalSigns 0..* and
    ObservationPregnancyEdd 0..* and
    ObservationPregnancyOutcome 0..* and
    ObservationPregnancyStatus 0..* and
    ObservationAlcoholUse 0..* and
    ObservationTobaccoUse 0..* and
    ObservationResults 0..* and
    Specimen 0..*

* entry[Composition].resource 1..
* entry[Composition].resource only AtIpsComposition

* entry[Patient].resource 1..
* entry[Patient].resource only AtIpsPatient

* entry[AllergyIntolerance].resource 1..
* entry[AllergyIntolerance].resource only AtIpsAllergyIntolerance

* entry[Condition].resource 1..
* entry[Condition].resource only AtIpsCondition

* entry[Device].resource 1..
* entry[Device].resource only Device // do not use AtIpsDevice here because e.g. no simple Device-author is possible

* entry[DeviceUseStatement].resource 1..
* entry[DeviceUseStatement].resource only AtIpsDeviceUseStatement

* entry[DiagnosticReport].resource 1..
* entry[DiagnosticReport].resource only AtIpsDiagnosticReport

* entry[ImagingStudy].resource 1..
* entry[ImagingStudy].resource only AtIpsImagingStudy

* entry[Immunization].resource 1..
* entry[Immunization].resource only AtIpsImmunization

* entry[Media].resource 1..
* entry[Media].resource only AtIpsMediaObservation

* entry[Medication].resource 1..
* entry[Medication].resource only AtIpsMedication

* entry[MedicationRequest].resource 1..
* entry[MedicationRequest].resource only AtIpsMedicationRequest

* entry[MedicationStatement].resource 1..
* entry[MedicationStatement].resource only AtIpsMedicationStatement

* entry[Practitioner].resource 1..
* entry[Practitioner].resource only AtIpsPractitioner

* entry[PractitionerRole].resource 1..
* entry[PractitionerRole].resource only AtIpsPractitionerRole

* entry[Procedure].resource 1..
* entry[Procedure].resource only AtIpsProcedure

* entry[Organization].resource 1..
* entry[Organization].resource only AtIpsOrganization

* entry[ObservationVitalSigns].resource 1..
* entry[ObservationVitalSigns].resource only AtIpsObservationVitalSigns

* entry[ObservationPregnancyEdd].resource 1..
* entry[ObservationPregnancyEdd].resource only AtIpsObservationPregnancyEdd

* entry[ObservationPregnancyOutcome].resource 1..
* entry[ObservationPregnancyOutcome].resource only AtIpsObservationPregnancyOutcome

* entry[ObservationPregnancyStatus].resource 1..
* entry[ObservationPregnancyStatus].resource only AtIpsObservationPregnancyStatus

* entry[ObservationAlcoholUse].resource 1..
* entry[ObservationAlcoholUse].resource only AtIpsObservationAlcoholUse

* entry[ObservationTobaccoUse].resource 1..
* entry[ObservationTobaccoUse].resource only AtIpsObservationTobaccoUse

* entry[ObservationResults].resource 1..
* entry[ObservationResults].resource only AtIpsObservationResults

* entry[Specimen].resource 1..
* entry[Specimen].resource only AtIpsSpecimen


---

// File: input/fsh/profiles/Composition.fsh


Profile: AtIpsComposition
Parent: Composition
Id: at-ips-composition
Title: "AT IPS Composition"
Description: "This AT IPS profile for the Composition resource is derived from the general Composition resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Composition"
* ^extension[$imposeProfile].valueCanonical = Canonical(CompositionUvIps)
* subject only Reference(AtIpsPatient)
* relatesTo.target[x] only Identifier or Reference(Composition or AtIpsComposition)

* section ^slicing.discriminator.type = #pattern
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.ordered = false

* section contains
    sectionMedications 1..1 and
    sectionAllergies 1..1 and
    sectionProblems 1..1 and
    sectionProceduresHx 0..1 and
    sectionImmunizations 0..1 and
    sectionMedicalDevices 0..1 and
    sectionResults 0..1 and
    sectionVitalSigns 0..1 and
    sectionPastIllnessHx 0..1 and
    sectionFunctionalStatus 0..1 and
    sectionPlanOfCare 0..1 and
    sectionSocialHistory 0..1 and
    sectionPregnancyHx 0..1 and
    sectionAdvanceDirectives 0..1

// ------ Required sections ------ //

* section[sectionMedications].code = $loinc#10160-0
* section[sectionMedications].entry ^slicing.discriminator[0].type = #profile
* section[sectionMedications].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionMedications].entry ^slicing.rules = #open
* section[sectionMedications].entry 1..
* section[sectionMedications].entry only Reference (MedicationStatement or MedicationRequest or MedicationAdministration or MedicationDispense or DocumentReference)
* section[sectionMedications].entry contains
    medicationStatement 0..* and
    medicationRequest 0..*
* section[sectionMedications].entry[medicationStatement] only Reference(AtIpsMedicationStatement)
* section[sectionMedications].entry[medicationRequest] only Reference(AtIpsMedicationRequest)

* section[sectionAllergies].code = $loinc#48765-2
* section[sectionAllergies].entry ^slicing.discriminator[0].type = #profile
* section[sectionAllergies].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionAllergies].entry ^slicing.rules = #open
* section[sectionAllergies].entry 1..
* section[sectionAllergies].entry only Reference (AllergyIntolerance or DocumentReference)
* section[sectionAllergies].entry contains
    allergyOrIntolerance 1..*
* section[sectionAllergies].entry[allergyOrIntolerance] only Reference(AtIpsAllergyIntolerance)

* section[sectionProblems].code = $loinc#11450-4
* section[sectionProblems].entry ^slicing.discriminator[0].type = #profile
* section[sectionProblems].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionProblems].entry ^slicing.rules = #open
* section[sectionProblems].entry 1..
* section[sectionProblems].entry only Reference(Condition or DocumentReference)
* section[sectionProblems].entry contains
    problem 1..*
* section[sectionProblems].entry[problem] only Reference(AtIpsCondition)

// ------ Recommended sections ------ //

* section[sectionProceduresHx].code = $loinc#47519-4
* section[sectionProceduresHx].entry ^slicing.discriminator[0].type = #profile
* section[sectionProceduresHx].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionProceduresHx].entry ^slicing.rules = #open
* section[sectionProceduresHx].entry 1..
* section[sectionProceduresHx].entry only Reference(Procedure or DocumentReference)
* section[sectionProceduresHx].entry contains
    procedure 1..*
* section[sectionProceduresHx].entry[procedure] only Reference(AtIpsProcedure)

* section[sectionImmunizations].code = $loinc#11369-6
* section[sectionImmunizations].entry ^slicing.discriminator[0].type = #profile
* section[sectionImmunizations].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionImmunizations].entry ^slicing.rules = #open
* section[sectionImmunizations].entry 1..
* section[sectionImmunizations].entry only Reference(Immunization or DocumentReference)
* section[sectionImmunizations].entry contains
    immunization 1..*
* section[sectionImmunizations].entry[immunization] only Reference(AtIpsImmunization)

* section[sectionMedicalDevices].code = $loinc#46264-8
* section[sectionMedicalDevices].entry ^slicing.discriminator[0].type = #profile
* section[sectionMedicalDevices].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionMedicalDevices].entry ^slicing.rules = #open
* section[sectionMedicalDevices].entry 1..
* section[sectionMedicalDevices].entry only Reference(DeviceUseStatement or DocumentReference)
* section[sectionMedicalDevices].entry contains
    deviceStatement 1..*
* section[sectionMedicalDevices].entry[deviceStatement] only Reference(AtIpsDeviceUseStatement)

* section[sectionResults].code = $loinc#30954-2
* section[sectionResults].entry ^slicing.discriminator[0].type = #type
* section[sectionResults].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionResults].entry ^slicing.discriminator[+].type = #profile
* section[sectionResults].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionResults].entry ^slicing.rules = #open
* section[sectionResults].entry 1..
* section[sectionResults].entry only Reference(Observation or DiagnosticReport or DocumentReference)
* section[sectionResults].entry contains
    resultsObservation 0..* and
    resultsDiagnosticReport 0..*
* section[sectionResults].entry[resultsObservation] only Reference(AtIpsObservationResults)
* section[sectionResults].entry[resultsDiagnosticReport] only Reference(AtIpsDiagnosticReport)

// ------ Optional sections ------ //

* section[sectionVitalSigns].code = $loinc#8716-3
* section[sectionVitalSigns].entry ^slicing.discriminator[0].type = #profile
* section[sectionVitalSigns].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionVitalSigns].entry ^slicing.rules = #open
* section[sectionVitalSigns].entry only Reference(Observation or DocumentReference)
* section[sectionVitalSigns].entry contains
    vitalSign 0..*
* section[sectionVitalSigns].entry[vitalSign] only Reference(AtIpsObservationVitalSigns)

* section[sectionPastIllnessHx].code = $loinc#11348-0
* section[sectionPastIllnessHx].entry ^slicing.discriminator[0].type = #profile
* section[sectionPastIllnessHx].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionPastIllnessHx].entry ^slicing.rules = #open
* section[sectionPastIllnessHx].entry 1..
* section[sectionPastIllnessHx].entry only Reference(Condition or DocumentReference)
* section[sectionPastIllnessHx].entry contains
    pastProblem 1..*
* section[sectionPastIllnessHx].entry[pastProblem] only Reference(AtIpsCondition)

* section[sectionFunctionalStatus].code = $loinc#47420-5
* section[sectionFunctionalStatus].entry ^slicing.discriminator[0].type = #profile
* section[sectionFunctionalStatus].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionFunctionalStatus].entry ^slicing.rules = #open
* section[sectionFunctionalStatus].entry only Reference(Condition or ClinicalImpression or DocumentReference)
* section[sectionFunctionalStatus].entry contains
    disability 0..* and
    functionalAssessment 0..*
* section[sectionFunctionalStatus].entry[disability] only Reference(AtIpsCondition)
* section[sectionFunctionalStatus].entry[functionalAssessment] only Reference(ClinicalImpression)

* section[sectionPlanOfCare].code = $loinc#18776-5
* section[sectionPlanOfCare].entry ^slicing.discriminator[0].type = #profile
* section[sectionPlanOfCare].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionPlanOfCare].entry ^slicing.rules = #open
* section[sectionPlanOfCare].entry only Reference(CarePlan or DocumentReference)
* section[sectionPlanOfCare].entry contains
    carePlan 0..*
* section[sectionPlanOfCare].entry[carePlan] only Reference(CarePlan)

* section[sectionSocialHistory].code = $loinc#29762-2
* section[sectionSocialHistory].entry ^slicing.discriminator[0].type = #profile
* section[sectionSocialHistory].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionSocialHistory].entry ^slicing.rules = #open
* section[sectionSocialHistory].entry only Reference(Observation or DocumentReference)
* section[sectionSocialHistory].entry contains
    smokingTobaccoUse 0..1 and
    alcoholUse 0..1
* section[sectionSocialHistory].entry[smokingTobaccoUse] only Reference(AtIpsObservationTobaccoUse)
* section[sectionSocialHistory].entry[alcoholUse] only Reference(AtIpsObservationAlcoholUse)

* section[sectionPregnancyHx].code = $loinc#10162-6
* section[sectionPregnancyHx].entry ^slicing.discriminator[0].type = #profile
* section[sectionPregnancyHx].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionPregnancyHx].entry ^slicing.rules = #open
* section[sectionPregnancyHx].entry only Reference(Observation or DocumentReference)
* section[sectionPregnancyHx].entry contains
    pregnancyStatus 0..* and
    pregnancyOutcomeSummary 0..*
* section[sectionPregnancyHx].entry[pregnancyStatus] only Reference(AtIpsObservationPregnancyStatus)
* section[sectionPregnancyHx].entry[pregnancyOutcomeSummary] only Reference(AtIpsObservationPregnancyOutcome)

* section[sectionAdvanceDirectives].code = $loinc#42348-3
* section[sectionAdvanceDirectives].entry ^slicing.discriminator[0].type = #profile
* section[sectionAdvanceDirectives].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionAdvanceDirectives].entry ^slicing.rules = #open
* section[sectionAdvanceDirectives].entry only Reference(Consent or DocumentReference)
* section[sectionAdvanceDirectives].entry contains
    advanceDirectivesConsent 0..*
* section[sectionAdvanceDirectives].entry[advanceDirectivesConsent] only Reference(Consent)


---

// File: input/fsh/profiles/Condition.fsh

Profile: AtIpsCondition
Parent: Condition
Id: at-ips-condition
Title: "AT IPS Condition"
Description: "This AT IPS profile for the Condition resource is derived from the general Condition resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Condition"
* ^extension[$imposeProfile].valueCanonical = Canonical(ConditionUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/Device.fsh

Profile: AtIpsDevice
Parent: Device
Id: at-ips-device
Title: "AT IPS Device"
Description: "This AT IPS profile for the Device resource is derived from the general Device resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Device"
* ^extension[$imposeProfile].valueCanonical = Canonical(DeviceUvIps)
* patient only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/DeviceUseStatement.fsh

Profile: AtIpsDeviceUseStatement
Parent: DeviceUseStatement
Id: at-ips-deviceusestatement
Title: "AT IPS DeviceUseStatement"
Description: "This AT IPS profile for the DeviceUseStatement resource is derived from the general DeviceUseStatement resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS DeviceUseStatement"
* ^extension[$imposeProfile].valueCanonical = Canonical(DeviceUseStatementUvIps)
* subject only Reference(AtIpsPatient)
* device only Reference(AtIpsDevice)


---

// File: input/fsh/profiles/DiagnosticReport.fsh

Profile: AtIpsDiagnosticReport
Parent: DiagnosticReport
Id: at-ips-diagnosticreport
Title: "AT IPS DiagnosticReport"
Description: "This AT IPS profile for the DiagnosticReport resource is derived from the general DiagnosticReport resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS DiagnosticReport"
* ^extension[$imposeProfile].valueCanonical = Canonical(DiagnosticReportUvIps)
* subject only Reference(AtIpsPatient or Group)
* performer only Reference(AtIpsPractitioner or AtIpsPractitionerRole or AtIpsOrganization or CareTeam)
* specimen only Reference(AtIpsSpecimen)

* result ^slicing.discriminator.type = #profile
* result ^slicing.discriminator.path = "resolve()"
* result ^slicing.rules = #open
* result ^slicing.ordered = false
* result contains observationResults 0..*
* result[observationResults] 0..*
* result[observationResults] only Reference(AtIpsObservationResultsLaboratory or AtIpsObservationResultsPathology or AtIpsObservationResultsRadiology or AtIpsObservationResults)


---

// File: input/fsh/profiles/ImagingStudy.fsh

Profile: AtIpsImagingStudy
Parent: ImagingStudy
Id: at-ips-imagingstudy
Title: "AT IPS ImagingStudy"
Description: "This AT IPS profile for the ImagingStudy resource is derived from the general ImagingStudy resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS ImagingStudy"
* ^extension[$imposeProfile].valueCanonical = Canonical(ImagingStudyUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/Immunization.fsh

Profile: AtIpsImmunization
Parent: Immunization
Id: at-ips-immunization
Title: "AT IPS Immunization"
Description: "This AT IPS profile for the Immunization resource is derived from the general Immunization resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Immunization"
* ^extension[$imposeProfile].valueCanonical = Canonical(ImmunizationUvIps)
* patient only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/Media.fsh

Profile: AtIpsMediaObservation
Parent: Media
Id: at-ips-MediaObservation
Title: "AT IPS MediaObservation"
Description: "This AT IPS profile for the Media resource is derived from the general Media resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS MediaObservation"
* ^extension[$imposeProfile].valueCanonical = Canonical(MediaObservationUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/Medication.fsh

Profile: AtIpsMedication
Parent: MedicationIPS
Id: at-ips-medication
Title: "AT IPS Medication"
Description: "This AT IPS profile for the Medication resource is derived from the IPS Medication resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide."
* . ^short = "AT IPS Medication"
// * ^extension[$imposeProfile].valueCanonical = Canonical(MedicationIPS)
* ingredient.item[x] only CodeableConceptIPS or Reference(http://hl7.org/fhir/StructureDefinition/Substance or AtIpsMedication)


---

// File: input/fsh/profiles/MedicationRequest.fsh

Profile: AtIpsMedicationRequest
Parent: MedicationRequest
Id: at-ips-medicationrequest
Title: "AT IPS MedicationRequest"
Description: "This AT IPS profile for the MedicationRequest resource is derived from the general MedicationRequest resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS MedicationRequest"
* ^extension[$imposeProfile].valueCanonical = Canonical(MedicationRequestIPS)
* medication[x] only CodeableConcept or Reference(AtIpsMedication)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/MedicationStatement.fsh

Profile: AtIpsMedicationStatement
Parent: MedicationStatement
Id: at-ips-medicationstatement
Title: "AT IPS MedicationStatement"
Description: "This AT IPS profile for the MedicationStatement resource is derived from the general MedicationStatement resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS MedicationStatement"
* ^extension[$imposeProfile].valueCanonical = Canonical(MedicationStatementIPS)
* medication[x] only CodeableConcept or Reference(AtIpsMedication)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/ObservationAlcoholUse.fsh

Profile: AtIpsObservationAlcoholUse
Parent: Observation
Id: at-ips-observationalcoholuse
Title: "AT IPS Observation Alcohol Use"
Description: "This AT IPS profile for the Observation resource is derived from the general Observation resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Alcohol Use"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationAlcoholUseUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/ObservationPregnancyEdd.fsh

Profile: AtIpsObservationPregnancyEdd
Parent: Observation
Id: at-ips-observationpregnancyedd
Title: "AT IPS Observation Pregnancy Expected Delivery Date"
Description: "This AT IPS profile for the Observation resource is derived from the general Observation resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Pregnancy Expected Delivery Date"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationPregnancyEddUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/ObservationPregnancyOutcome.fsh

Profile: AtIpsObservationPregnancyOutcome
Parent: Observation
Id: at-ips-observationpregnancyoutcome
Title: "AT IPS Observation Pregnancy Outcome"
Description: "This AT IPS profile for the Observation resource is derived from the general Observation resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Pregnancy Outcome"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationPregnancyOutcomeUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/ObservationPregnancyStatus.fsh

Profile: AtIpsObservationPregnancyStatus
Parent: Observation
Id: at-ips-observationpregnancystatus
Title: "AT IPS Observation Pregnancy Status"
Description: "This AT IPS profile for the Observation resource is derived from the general Observation resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Pregnancy Status"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationPregnancyStatusUvIps)
* subject only Reference(AtIpsPatient)
* hasMember only Reference(AtIpsObservationPregnancyEdd)


---

// File: input/fsh/profiles/ObservationResults.fsh

Profile: AtIpsObservationResults
Parent: Observation
Id: at-ips-observationresults
Title: "AT IPS Observation Results"
Description: "This AT IPS profile for the Observation resource is derived from the general Observation resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Results"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationResultsUvIps)
* subject only Reference(AtIpsPatient or Group or Device or Location)
* performer only Reference(AtIpsPractitioner or AtIpsPractitionerRole or AtIpsOrganization or CareTeam or AtIpsPatient or RelatedPerson)
* hasMember only Reference(AtIpsObservationResults or QuestionnaireResponse or MolecularSequence)


---

// File: input/fsh/profiles/ObservationResultsLaboratory.fsh

Profile: AtIpsObservationResultsLaboratory
Parent: AtIpsObservationResults
Id: at-ips-observationresultslaboratory
Title: "AT IPS Observation Results Laboratory"
Description: "This AT IPS profile for the Observation resource is derived from the \"AtIpsObservationResults\" profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Results Laboratory"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationResultsLaboratoryUvIps)
* specimen only Reference(AtIpsSpecimen)
* hasMember only Reference(AtIpsObservationResultsLaboratory or AtIpsObservationResults)


---

// File: input/fsh/profiles/ObservationResultsPathology.fsh

Profile: AtIpsObservationResultsPathology
Parent: AtIpsObservationResults
Id: at-ips-observationresultspathology
Title: "AT IPS Observation Results Pathology"
Description: "This AT IPS profile for the Observation resource is derived from the \"AtIpsObservationResults\" profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Results Pathology"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationResultsPathologyUvIps)
* subject only Reference(AtIpsPatient)
* specimen only Reference(AtIpsSpecimen)
* hasMember only Reference(AtIpsObservationResultsPathology or AtIpsObservationResults)


---

// File: input/fsh/profiles/ObservationResultsRadiology.fsh

Profile: AtIpsObservationResultsRadiology
Parent: AtIpsObservationResults
Id: at-ips-observationresultsradiology
Title: "AT IPS Observation Results Radiology"
Description: "This AT IPS profile for the Observation resource is derived from the \"AtIpsObservationResults\" profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Results Radiology"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationResultsRadiologyUvIps)
* partOf only Reference(AtIpsImagingStudy)
* subject only Reference(AtIpsPatient)
* hasMember only Reference(AtIpsObservationResultsRadiology or AtIpsObservationResults)


---

// File: input/fsh/profiles/ObservationTobaccoUse.fsh

Profile: AtIpsObservationTobaccoUse
Parent: Observation
Id: at-ips-observationtobaccouse
Title: "AT IPS Observation Tobacco Use"
Description: "This AT IPS profile for the Observation resource is derived from the general Observation resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Observation Tobacco Use"
* ^extension[$imposeProfile].valueCanonical = Canonical(ObservationTobaccoUseUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/ObservationVitalSigns.fsh

Profile: AtIpsObservationVitalSigns
Parent: http://hl7.org/fhir/StructureDefinition/vitalsigns
Id: at-ips-observationvitalsigns
Title: "AT IPS Observation Vital Signs"
Description: "This AT IPS profile for the Observation resource is derived from the general vital signs profile."
* . ^short = "AT IPS Observation Vital Signs"
* subject only Reference(AtIpsPatient)


---

// File: input/fsh/profiles/Organization.fsh

Profile: AtIpsOrganization
Parent: HL7ATCoreOrganization
Id: at-ips-organization
Title: "AT IPS Organization"
Description: "This AT IPS profile for the Organization resource is derived from the corresponding HL7® Austria FHIR® Core profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Organization"
* ^extension[$imposeProfile].valueCanonical = Canonical(OrganizationUvIps)


---

// File: input/fsh/profiles/Patient.fsh

Profile: AtIpsPatient
Parent: HL7ATCorePatient
Id: at-ips-patient
Title: "AT IPS Patient"
Description: "This AT IPS profile for the Patient resource is derived from the corresponding HL7® Austria FHIR® Core profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Patient"
* ^extension[$imposeProfile].valueCanonical = Canonical(PatientUvIps)


---

// File: input/fsh/profiles/Practitioner.fsh

Profile: AtIpsPractitioner
Parent: HL7ATCorePractitioner
Id: at-ips-practitioner
Title: "AT IPS Practitioner"
Description: "This AT IPS profile for the Practitioner resource is derived from the corresponding HL7® Austria FHIR® Core profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Practitioner"
* ^extension[$imposeProfile].valueCanonical = Canonical(PractitionerUvIps)


---

// File: input/fsh/profiles/PractitionerRole.fsh

Profile: AtIpsPractitionerRole
Parent: HL7ATCorePractitionerRole
Id: at-ips-practitionerrole
Title: "AT IPS PractitionerRole"
Description: "This AT IPS profile for the PractitionerRole resource is derived from the corresponding HL7® Austria FHIR® Core profile and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "At IPS PractitionerRole"
* ^extension[$imposeProfile].valueCanonical = Canonical(PractitionerRoleUvIps)
* practitioner only Reference(AtIpsPractitioner)
* organization only Reference(AtIpsOrganization)


---

// File: input/fsh/profiles/Procedure.fsh

Profile: AtIpsProcedure
Parent: Procedure
Id: at-ips-Procedure
Title: "AT IPS Procedure"
Description: "This AT IPS profile for the Procedure resource is derived from the general Procedure resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Procedure"
* ^extension[$imposeProfile].valueCanonical = Canonical(ProcedureUvIps)
* subject only Reference(AtIpsPatient)
* performer.actor only Reference(AtIpsPatient or RelatedPerson or DeviceObserverUvIps or AtIpsPractitioner or AtIpsPractitionerRole or AtIpsOrganization)
* performer.onBehalfOf only Reference(AtIpsOrganization)


---

// File: input/fsh/profiles/Specimen.fsh

Profile: AtIpsSpecimen
Parent: Specimen
Id: at-ips-specimen
Title: "AT IPS Specimen"
Description: "This AT IPS profile for the Specimen resource is derived from the general Specimen resource in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide and also ensures IPS conformity via the IPS profile referenced by the so-called [`imposeProfile`](http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile) extension."
* . ^short = "AT IPS Specimen"
* ^extension[$imposeProfile].valueCanonical = Canonical(SpecimenUvIps)
* subject only Reference(AtIpsPatient)


---

// File: input/landing_page/_index.yml

- name: ELGA-AustrianPatientSummary-R4
- version: 0.1.0
- description: FHIR&reg; R4 Implementation Guide for the Austrian Patient Summary.
- last_published: %%date%%
- branch: %%branch%%
- type: draft


---

// File: input/fsh/examples/example-APS-1-no-problems-medication-allergies.fsh

Alias: $loinc = http://loinc.org
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $absent-unknown-uv-ips = http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical

Instance: APS-1-no-problems-medication-allergies
InstanceOf: AtIpsBundle
Usage: #example
* identifier.system = "http://system-to-be-defined.com"
* identifier.value = "63fef90a-be11-4ddf-aece-d77da15c4f20"
* type = #document
* timestamp = "2024-02-08T14:01:30+00:00"
* entry[0].fullUrl = "urn:uuid:212fdc76-ccc3-40bf-8cdd-82f2ef88bd7b"
* entry[=].resource = APS-1-no-problems-medication-allergies-composition
* entry[+].fullUrl = "urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8"
* entry[=].resource = APS-1-no-problems-medication-allergies-patient
* entry[+].fullUrl = "urn:uuid:75db30ee-7028-486c-929a-c5126837f472"
* entry[=].resource = APS-1-no-problems-medication-allergies-author
* entry[+].fullUrl = "urn:uuid:72e85b9d-004d-4104-b166-86d129948bae"
* entry[=].resource = APS-1-no-problems-medication-allergies-problem-1
* entry[+].fullUrl = "urn:uuid:acac4c94-a752-4cf5-9a6b-0d84237d5076"
* entry[=].resource = APS-1-no-problems-medication-allergies-medication-summary-1
* entry[+].fullUrl = "urn:uuid:768eb9cb-00f3-4ab1-bfc2-ff835cb3b89b"
* entry[=].resource = APS-1-no-problems-medication-allergies-allergy-1

Instance: APS-1-no-problems-medication-allergies-composition
InstanceOf: AtIpsComposition
Usage: #inline
// * language = #de-AT
* status = #preliminary
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* date = "2024-02-08T14:01:30+00:00"
* author = Reference(urn:uuid:75db30ee-7028-486c-929a-c5126837f472)
* title = "International Patient Summary"
* section[sectionMedications].title = "Medication Summary"
* section[sectionMedications].code = $loinc#10160-0 "History of Medication use Narrative"
* section[sectionMedications].text.status = #empty
* section[sectionMedications].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionMedications].entry = Reference(urn:uuid:acac4c94-a752-4cf5-9a6b-0d84237d5076)
* section[sectionAllergies].title = "Allergies and Intolerances"
* section[sectionAllergies].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[sectionAllergies].text.status = #empty
* section[sectionAllergies].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionAllergies].entry = Reference(urn:uuid:768eb9cb-00f3-4ab1-bfc2-ff835cb3b89b)
* section[sectionProblems].title = "Problem List"
* section[sectionProblems].code = $loinc#11450-4 "Problem list - Reported"
* section[sectionProblems].text.status = #empty
* section[sectionProblems].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionProblems].entry = Reference(urn:uuid:72e85b9d-004d-4104-b166-86d129948bae)

Instance: APS-1-no-problems-medication-allergies-patient
InstanceOf: AtIpsPatient
Usage: #inline
* identifier.type = $v2-0203#SS "Social Security Number"
* identifier.system = "urn:oid:1.2.40.0.10.1.4.3.1"
* identifier.value = "1111241261"
* identifier.assigner.display = "Dachverband der österreichischen Sozialversicherungsträger"
* name.family = "Musterfrau"
* name.given[0] = "Maria"
* name.given[+] = "Johanna"
* name.prefix = "Dr."
* telecom[0].system = #phone
* telecom[=].value = "+43.2682.40400"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+43.664.1234567"
* telecom[=].use = #mobile
* telecom[+].system = #email
* telecom[=].value = "musterfrau@provider.at"
* gender = #female // 1..1 in AT Core
* birthDate = "1961-12-24" // 1..1 in IPS
* address.line = "Musterstraße 13a"
* address.use = #home
* address.city = "Eisenstadt"
* address.state = "Burgenland"
* address.postalCode = "7000"
* address.country = "AUT"
* maritalStatus = $v3-MaritalStatus#M "Married"

Instance: APS-1-no-problems-medication-allergies-author
InstanceOf: Device
Usage: #inline
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>This Device generates an IPS FHIR Document from in production used ELGA CDA</p></div>"
* deviceName.name = "IPS Generator"
* deviceName.type = #user-friendly-name

Instance: APS-1-no-problems-medication-allergies-problem-1
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#inactive "Inactive"
* code = $absent-unknown-uv-ips#no-known-problems "No known problems"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-1-no-problems-medication-allergies-medication-summary-1
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #unknown
* medicationCodeableConcept = $absent-unknown-uv-ips#no-known-medications "No known medications"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T10:31:58+02:00"

Instance: APS-1-no-problems-medication-allergies-allergy-1
InstanceOf: AtIpsAllergyIntolerance
Usage: #inline
* clinicalStatus = $allergyintolerance-clinical#inactive "Inactive"
* code = $absent-unknown-uv-ips#no-known-allergies "No known allergies"
* patient = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

---

// File: input/fsh/examples/example-APS-2-preventive-medical-checkup.fsh

Alias: $loinc = http://loinc.org
Alias: $sct = http://snomed.info/sct
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $absent-unknown-uv-ips = http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $asp = https://termgit.elga.gv.at/CodeSystem/asp-liste
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $elga-laborparameterergaenzung = https://termgit.elga.gv.at/CodeSystem/elga-laborparameterergaenzung
Alias: $observation-interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $event-timing = http://hl7.org/fhir/event-timing

Instance: APS-2-preventive-medical-checkup
InstanceOf: AtIpsBundle
Usage: #example
* identifier.system = "http://system-to-be-defined.com"
* identifier.value = "63fef90a-be11-4ddf-aece-d77da15c4f20"
* type = #document
* timestamp = "2024-02-08T14:01:30+00:00"
* entry[0].fullUrl = "urn:uuid:212fdc76-ccc3-40bf-8cdd-82f2ef88bd7b"
* entry[=].resource = APS-2-preventive-medical-checkup-composition
* entry[+].fullUrl = "urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8"
* entry[=].resource = APS-2-preventive-medical-checkup-patient
* entry[+].fullUrl = "urn:uuid:75db30ee-7028-486c-929a-c5126837f472"
* entry[=].resource = APS-2-preventive-medical-checkup-author
// Problem List
* entry[+].fullUrl = "urn:uuid:72e85b9d-004d-4104-b166-86d129948bae"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-1
* entry[+].fullUrl = "urn:uuid:82fa32f6-39d6-4fc9-9624-90a48fd3d3a5"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-2
* entry[+].fullUrl = "urn:uuid:61db6213-22ab-405a-825a-0ae6905fad1e"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-3
* entry[+].fullUrl = "urn:uuid:194cac84-0ee2-40b4-8dda-1866318d234c"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-4
* entry[+].fullUrl = "urn:uuid:9d1c0b74-20c1-4603-a95a-71e6a1dc8fde"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-5
* entry[+].fullUrl = "urn:uuid:b62c11b1-c478-4d04-ae6f-5f73543f2bb1"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-6
* entry[+].fullUrl = "urn:uuid:8d3a18fb-3610-4bfb-9aa4-1169cc6dd2dd"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-7
* entry[+].fullUrl = "urn:uuid:c5d400b1-b58b-41ed-9776-cfcdaf48f2e6"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-8
* entry[+].fullUrl = "urn:uuid:32d90aaa-6577-4c5d-9771-d8f606ebf0b9"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-9
* entry[+].fullUrl = "urn:uuid:2040058f-9537-4b26-9367-5ca5ac0ddb58"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-10
* entry[+].fullUrl = "urn:uuid:b7b2a10d-7295-4fd1-ad21-81bca78dc45a"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-11
* entry[+].fullUrl = "urn:uuid:ebfb60a8-a753-459d-a796-a191a4dbd91d"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-12
// Problem List - Family history
* entry[+].fullUrl = "urn:uuid:3f3140b1-9478-4491-b7bf-10560f38da0e"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-13
* entry[+].fullUrl = "urn:uuid:caa77334-fbfc-4129-a101-1b01c595dd91"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-14
* entry[+].fullUrl = "urn:uuid:e66d8ac1-a124-4e94-be22-969c9b117ce5"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-15
* entry[+].fullUrl = "urn:uuid:5ab717ff-c0a0-409e-83db-0fa6f8619f68"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-16
// Problem List - periodontal disease risk
* entry[+].fullUrl = "urn:uuid:fa46fccb-5c24-4a40-a478-d6da4902ff33"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-17
* entry[+].fullUrl = "urn:uuid:f235c566-01aa-457d-ab49-9e422df69863"
* entry[=].resource = APS-2-preventive-medical-checkup-problem-17-assessment-1
// Medication Summary
* entry[+].fullUrl = "urn:uuid:acac4c94-a752-4cf5-9a6b-0d84237d5076"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-1
* entry[+].fullUrl = "urn:uuid:98285578-0bb6-42b2-908c-5bcc5e3992e0"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-2
* entry[+].fullUrl = "urn:uuid:769a289d-a518-469a-8100-7943550e359f"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-3
* entry[+].fullUrl = "urn:uuid:9cb3b3df-7b15-4270-af39-5f2f819e692e"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-4
* entry[+].fullUrl = "urn:uuid:da89fd22-0d4f-4220-a625-b9ddf5eb330d"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-5
* entry[+].fullUrl = "urn:uuid:e526f7e5-2f76-484e-acde-d6f2365f0859"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-6
* entry[+].fullUrl = "urn:uuid:6d15d84f-2faf-4141-ac0c-fb9cf8496abe"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-7
* entry[+].fullUrl = "urn:uuid:ecf9728f-fa50-4b46-b8f7-7768174df72a"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-8
* entry[+].fullUrl = "urn:uuid:cf4b2e92-51e6-44de-9406-5406e66e9d45"
* entry[=].resource = APS-2-preventive-medical-checkup-medication-summary-9
// Allergies and Intolerances
* entry[+].fullUrl = "urn:uuid:768eb9cb-00f3-4ab1-bfc2-ff835cb3b89b"
* entry[=].resource = APS-2-preventive-medical-checkup-allergy-1
// History of Procedures
* entry[+].fullUrl = "urn:uuid:75c46c35-8f4e-4232-b026-5672c60d076a"
* entry[=].resource = APS-2-preventive-medical-checkup-procedure-history-1
* entry[+].fullUrl = "urn:uuid:8103f99c-64f0-4dd5-b92e-5c9680c91e47"
* entry[=].resource = APS-2-preventive-medical-checkup-procedure-history-2
* entry[+].fullUrl = "urn:uuid:8a825f17-1599-4928-b384-0ca4a62daba8"
* entry[=].resource = APS-2-preventive-medical-checkup-procedure-history-3
// Diagnostic Results
* entry[+].fullUrl = "urn:uuid:725bcf71-22e6-473b-a879-49a4b63cd654"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-1
* entry[+].fullUrl = "urn:uuid:aeff2319-2cc2-4fba-9541-7a4de3d20f91"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-2
* entry[+].fullUrl = "urn:uuid:d16dce15-bc5a-48a5-910e-6ac039785a2a"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-3
* entry[+].fullUrl = "urn:uuid:96314fcd-3b0c-4032-8cac-6eb59579d90a"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-4
* entry[+].fullUrl = "urn:uuid:30c8a990-ea39-4dcb-9e1e-b9ac74afffc9"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-5
* entry[+].fullUrl = "urn:uuid:f29ac02d-762e-436e-b40c-667ab89e15f2"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-6
* entry[+].fullUrl = "urn:uuid:28a773ea-38c7-4c77-86c4-7764325756e7"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-7
* entry[+].fullUrl = "urn:uuid:4fe4b16a-14cb-4fd6-9da6-02c4b3797fdc"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-8
* entry[+].fullUrl = "urn:uuid:24ff8632-0ccd-4279-88b2-325fdd936ecb"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-9
* entry[+].fullUrl = "urn:uuid:8c11ad58-94ec-469c-ba4d-bfba9063067d"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-10
* entry[+].fullUrl = "urn:uuid:8c7f9e94-b834-474e-818c-bbd6c3ce3e17"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-11
* entry[+].fullUrl = "urn:uuid:e6e05f94-92be-4ae3-bf49-b0b7d4a62b35"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-12
* entry[+].fullUrl = "urn:uuid:33e09da2-5f43-4046-b2eb-cf190031826b"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-13
* entry[+].fullUrl = "urn:uuid:b675680e-9469-41b1-adc1-093904e3a1d2"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-14
// Diagnostic Results - Performer
* entry[+].fullUrl = "urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6"
* entry[=].resource = APS-2-preventive-medical-checkup-diagnostic-result-performer-1
// Vital Signs
* entry[+].fullUrl = "urn:uuid:74c5e186-d765-4c93-a624-c9b0746e8142"
* entry[=].resource = APS-2-preventive-medical-checkup-vital-sign-1
* entry[+].fullUrl = "urn:uuid:428259da-e0f7-4780-b1e3-c177515edd37"
* entry[=].resource = APS-2-preventive-medical-checkup-vital-sign-2
* entry[+].fullUrl = "urn:uuid:daf9c15d-14d4-429c-b658-6842fdff67d8"
* entry[=].resource = APS-2-preventive-medical-checkup-vital-sign-3
* entry[+].fullUrl = "urn:uuid:8248cc70-65a2-4d37-ae14-a3ef2abf8f32"
* entry[=].resource = APS-2-preventive-medical-checkup-vital-sign-4
* entry[+].fullUrl = "urn:uuid:4d3f7ac4-fd0a-49af-a56b-303a2dbe67d1"
* entry[=].resource = APS-2-preventive-medical-checkup-vital-sign-5
* entry[+].fullUrl = "urn:uuid:be35e603-6b99-4bb5-ad70-8499f6b55df1"
* entry[=].resource = APS-2-preventive-medical-checkup-vital-sign-6
// Past History of Illness
* entry[+].fullUrl = "urn:uuid:82301518-66ca-4b4c-821d-087adf643cc4"
* entry[=].resource = APS-2-preventive-medical-checkup-illness-history-1
* entry[+].fullUrl = "urn:uuid:ce2589a2-a5e5-4520-808f-8118e2863a95"
* entry[=].resource = APS-2-preventive-medical-checkup-illness-history-2
// Social History
* entry[+].fullUrl = "urn:uuid:d0a5bbf1-6d01-4d44-bac5-05f12c98411e"
* entry[=].resource = APS-2-preventive-medical-checkup-social-history-1
* entry[+].fullUrl = "urn:uuid:9add5c32-1ded-43d6-b163-c3fe13f94984"
* entry[=].resource = APS-2-preventive-medical-checkup-social-history-2

Instance: APS-2-preventive-medical-checkup-composition
InstanceOf: AtIpsComposition
Usage: #inline
// * language = #de-AT
* status = #final
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* date = "2024-02-08T14:01:30+00:00"
* author = Reference(urn:uuid:75db30ee-7028-486c-929a-c5126837f472)
* title = "International Patient Summary - Preventive Medical Checkup"
// Problem List
* section[sectionProblems].title = "Problem List"
* section[sectionProblems].code = $loinc#11450-4 "Problem list - Reported"
* section[sectionProblems].text.status = #empty
* section[sectionProblems].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionProblems].entry[0] = Reference(urn:uuid:72e85b9d-004d-4104-b166-86d129948bae)
* section[sectionProblems].entry[+] = Reference(urn:uuid:82fa32f6-39d6-4fc9-9624-90a48fd3d3a5)
* section[sectionProblems].entry[+] = Reference(urn:uuid:61db6213-22ab-405a-825a-0ae6905fad1e)
* section[sectionProblems].entry[+] = Reference(urn:uuid:194cac84-0ee2-40b4-8dda-1866318d234c)
* section[sectionProblems].entry[+] = Reference(urn:uuid:9d1c0b74-20c1-4603-a95a-71e6a1dc8fde)
* section[sectionProblems].entry[+] = Reference(urn:uuid:b62c11b1-c478-4d04-ae6f-5f73543f2bb1)
* section[sectionProblems].entry[+] = Reference(urn:uuid:8d3a18fb-3610-4bfb-9aa4-1169cc6dd2dd)
* section[sectionProblems].entry[+] = Reference(urn:uuid:c5d400b1-b58b-41ed-9776-cfcdaf48f2e6)
* section[sectionProblems].entry[+] = Reference(urn:uuid:32d90aaa-6577-4c5d-9771-d8f606ebf0b9)
* section[sectionProblems].entry[+] = Reference(urn:uuid:2040058f-9537-4b26-9367-5ca5ac0ddb58)
* section[sectionProblems].entry[+] = Reference(urn:uuid:b7b2a10d-7295-4fd1-ad21-81bca78dc45a)
* section[sectionProblems].entry[+] = Reference(urn:uuid:ebfb60a8-a753-459d-a796-a191a4dbd91d)
// Problem List - Family history
* section[sectionProblems].entry[+] = Reference(urn:uuid:3f3140b1-9478-4491-b7bf-10560f38da0e)
* section[sectionProblems].entry[+] = Reference(urn:uuid:caa77334-fbfc-4129-a101-1b01c595dd91)
* section[sectionProblems].entry[+] = Reference(urn:uuid:e66d8ac1-a124-4e94-be22-969c9b117ce5)
* section[sectionProblems].entry[+] = Reference(urn:uuid:5ab717ff-c0a0-409e-83db-0fa6f8619f68)
// Problem List - periodontal disease risk
* section[sectionProblems].entry[+] = Reference(urn:uuid:fa46fccb-5c24-4a40-a478-d6da4902ff33)
// Medication Summary
* section[sectionMedications].title = "Medication Summary"
* section[sectionMedications].code = $loinc#10160-0 "History of Medication use Narrative"
* section[sectionMedications].text.status = #empty
* section[sectionMedications].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionMedications].entry[0] = Reference(urn:uuid:acac4c94-a752-4cf5-9a6b-0d84237d5076)
* section[sectionMedications].entry[+] = Reference(urn:uuid:98285578-0bb6-42b2-908c-5bcc5e3992e0)
* section[sectionMedications].entry[+] = Reference(urn:uuid:769a289d-a518-469a-8100-7943550e359f)
* section[sectionMedications].entry[+] = Reference(urn:uuid:9cb3b3df-7b15-4270-af39-5f2f819e692e)
* section[sectionMedications].entry[+] = Reference(urn:uuid:da89fd22-0d4f-4220-a625-b9ddf5eb330d)
* section[sectionMedications].entry[+] = Reference(urn:uuid:e526f7e5-2f76-484e-acde-d6f2365f0859)
* section[sectionMedications].entry[+] = Reference(urn:uuid:6d15d84f-2faf-4141-ac0c-fb9cf8496abe)
* section[sectionMedications].entry[+] = Reference(urn:uuid:ecf9728f-fa50-4b46-b8f7-7768174df72a)
* section[sectionMedications].entry[+] = Reference(urn:uuid:cf4b2e92-51e6-44de-9406-5406e66e9d45)
// Allergies and Intolerances
* section[sectionAllergies].title = "Allergies and Intolerances"
* section[sectionAllergies].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[sectionAllergies].text.status = #empty
* section[sectionAllergies].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionAllergies].entry = Reference(urn:uuid:768eb9cb-00f3-4ab1-bfc2-ff835cb3b89b)
// History of Procedures
* section[sectionProceduresHx].title = "History of Procedures"
* section[sectionProceduresHx].code = $loinc#47519-4 "History of Procedures Document"
* section[sectionProceduresHx].text.status = #empty
* section[sectionProceduresHx].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionProceduresHx].entry[0] = Reference(urn:uuid:75c46c35-8f4e-4232-b026-5672c60d076a)
* section[sectionProceduresHx].entry[+] = Reference(urn:uuid:8103f99c-64f0-4dd5-b92e-5c9680c91e47)
* section[sectionProceduresHx].entry[+] = Reference(urn:uuid:8a825f17-1599-4928-b384-0ca4a62daba8)
// Diagnostic Results
* section[sectionResults].title = "Diagnostic Results"
* section[sectionResults].code = $loinc#30954-2 "Relevant diagnostic tests/laboratory data Narrative"
* section[sectionResults].text.status = #empty
* section[sectionResults].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionResults].entry[0] = Reference(urn:uuid:725bcf71-22e6-473b-a879-49a4b63cd654)
* section[sectionResults].entry[+] = Reference(urn:uuid:aeff2319-2cc2-4fba-9541-7a4de3d20f91)
* section[sectionResults].entry[+] = Reference(urn:uuid:d16dce15-bc5a-48a5-910e-6ac039785a2a)
* section[sectionResults].entry[+] = Reference(urn:uuid:96314fcd-3b0c-4032-8cac-6eb59579d90a)
* section[sectionResults].entry[+] = Reference(urn:uuid:30c8a990-ea39-4dcb-9e1e-b9ac74afffc9)
* section[sectionResults].entry[+] = Reference(urn:uuid:f29ac02d-762e-436e-b40c-667ab89e15f2)
* section[sectionResults].entry[+] = Reference(urn:uuid:28a773ea-38c7-4c77-86c4-7764325756e7)
* section[sectionResults].entry[+] = Reference(urn:uuid:4fe4b16a-14cb-4fd6-9da6-02c4b3797fdc)
* section[sectionResults].entry[+] = Reference(urn:uuid:24ff8632-0ccd-4279-88b2-325fdd936ecb)
* section[sectionResults].entry[+] = Reference(urn:uuid:8c11ad58-94ec-469c-ba4d-bfba9063067d)
* section[sectionResults].entry[+] = Reference(urn:uuid:8c7f9e94-b834-474e-818c-bbd6c3ce3e17)
* section[sectionResults].entry[+] = Reference(urn:uuid:e6e05f94-92be-4ae3-bf49-b0b7d4a62b35)
* section[sectionResults].entry[+] = Reference(urn:uuid:33e09da2-5f43-4046-b2eb-cf190031826b)
* section[sectionResults].entry[+] = Reference(urn:uuid:b675680e-9469-41b1-adc1-093904e3a1d2)
// Vital Signs
* section[sectionVitalSigns].title = "Vital Signs"
* section[sectionVitalSigns].code = $loinc#8716-3 "Vital signs"
* section[sectionVitalSigns].text.status = #empty
* section[sectionVitalSigns].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionVitalSigns].entry[0] = Reference(urn:uuid:74c5e186-d765-4c93-a624-c9b0746e8142)
* section[sectionVitalSigns].entry[+] = Reference(urn:uuid:428259da-e0f7-4780-b1e3-c177515edd37)
* section[sectionVitalSigns].entry[+] = Reference(urn:uuid:daf9c15d-14d4-429c-b658-6842fdff67d8)
* section[sectionVitalSigns].entry[+] = Reference(urn:uuid:8248cc70-65a2-4d37-ae14-a3ef2abf8f32)
* section[sectionVitalSigns].entry[+] = Reference(urn:uuid:4d3f7ac4-fd0a-49af-a56b-303a2dbe67d1)
* section[sectionVitalSigns].entry[+] = Reference(urn:uuid:be35e603-6b99-4bb5-ad70-8499f6b55df1)
// Past History of Illness
* section[sectionPastIllnessHx].title = "Past History of Illness"
* section[sectionPastIllnessHx].code = $loinc#11348-0 "History of Past illness Narrative"
* section[sectionPastIllnessHx].text.status = #empty
* section[sectionPastIllnessHx].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionPastIllnessHx].entry[0] = Reference(urn:uuid:82301518-66ca-4b4c-821d-087adf643cc4)
* section[sectionPastIllnessHx].entry[+] = Reference(urn:uuid:ce2589a2-a5e5-4520-808f-8118e2863a95)
// Social History
* section[sectionSocialHistory].title = "Social History"
* section[sectionSocialHistory].code = $loinc#29762-2 "Social history Narrative"
* section[sectionSocialHistory].text.status = #empty
* section[sectionSocialHistory].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>narrative needs to be generated</p></div>"
* section[sectionSocialHistory].entry[0] = Reference(urn:uuid:d0a5bbf1-6d01-4d44-bac5-05f12c98411e)
* section[sectionSocialHistory].entry[+] = Reference(urn:uuid:9add5c32-1ded-43d6-b163-c3fe13f94984)

Instance: APS-2-preventive-medical-checkup-patient
InstanceOf: AtIpsPatient
Usage: #inline
* identifier.type = $v2-0203#SS "Social Security Number"
* identifier.system = "urn:oid:1.2.40.0.10.1.4.3.1"
* identifier.value = "0000121150"
* identifier.assigner.display = "Dachverband der österreichischen Sozialversicherungsträger"
* name.family = "Test"
* name.given[0] = "Arnold"
* gender = #male // 1..1 in AT Core
* birthDate = "1950-11-12" // 1..1 in IPS
* address.line = "Am Schulweg 5"
* address.use = #home
* address.city = "Hainfeld"
* address.postalCode = "3100"
* address.country = "AUT"

Instance: APS-2-preventive-medical-checkup-author
InstanceOf: AtIpsPractitioner
Usage: #inline
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:1.2.40.0.10.99.1.2.3.4"
* identifier.assigner.display = "Bundesministerium für Gesundheit"
* name.prefix[0] = "Dr"
* name.family = "Hausarzt"
* name.given[0] = "Hannes"

// Problem List

Instance: APS-2-preventive-medical-checkup-problem-1
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#700379002 "Chronic kidney disease stage 3B"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-2
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#711150003 "Long-term current use of anticoagulant"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// Type-2-Diabetes
Instance: APS-2-preventive-medical-checkup-problem-3
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#314194001 "Diabetic on insulin and oral treatment"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-4
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#710159007 "Long-term current use of immunosuppressive drug"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-5
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#38341003 "Hypertensive disorder"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// shall this condition be documented? "normal"
Instance: APS-2-preventive-medical-checkup-problem-6
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#408570008 "Carotid artery doppler normal"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// shall this condition be documented? "normal"
Instance: APS-2-preventive-medical-checkup-problem-7
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#168938005 "Coronary arteriography normal"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// shall this condition be documented as medication?
Instance: APS-2-preventive-medical-checkup-problem-8
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#328941000119101 "Long-term current use of bisphosphonates"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* onsetPeriod.start = "2020-06"
* onsetPeriod.end = "2025-03"
// * abatementDateTime = "2025-03"

Instance: APS-2-preventive-medical-checkup-problem-9
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#440028005 "Permanent atrial fibrillation"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-10
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#735623008 "Albuminuria grade A2"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-11
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#239792003 "Seronegative rheumatoid arthritis"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-12
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#13644009 "Hypercholesterolemia"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// Problem List - Family history

Instance: APS-2-preventive-medical-checkup-problem-13
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#160303001 "Family history of diabetes mellitus (situation)"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-14
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#312824007 "Family history of cancer of colon"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-15
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#134439009 "Family history: premature coronary heart disease"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-problem-16
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#160314003 "FH: Hypercholesterolemia"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// risk of periodontal disease
Instance: APS-2-preventive-medical-checkup-problem-17
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#inactive "Inactive"
* verificationStatus = $condition-ver-status#provisional "Provisional"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#2556008 "Periodontal disease (disorder)"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* stage.assessment = Reference(urn:uuid:f235c566-01aa-457d-ab49-9e422df69863)

Instance: APS-2-preventive-medical-checkup-problem-17-assessment-1
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#exam "Exam"
* code = $sct#1237049003 "Evaluation of risk factors for periodontal disease"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueCodeableConcept = $sct#723509005 "High risk"

// Medication Summary

Instance: APS-2-preventive-medical-checkup-medication-summary-1
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#2443061 "EBETREXAT TBL 10MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
// "S:0-0-0-2 / FR"
* dosage.sequence = 1
* dosage.timing.repeat.when = $event-timing#NIGHT "Night"
* dosage.timing.repeat.dayOfWeek = #fri
* dosage.route = $sct#26643006 "Oral use"
* dosage.doseAndRate.doseQuantity.value = 2
* dosage.doseAndRate.doseQuantity.unit = "Tablet"
* dosage.doseAndRate.doseQuantity.system = "https://standardterms.edqm.eu/"
* dosage.doseAndRate.doseQuantity.code = #15054000"

Instance: APS-2-preventive-medical-checkup-medication-summary-2
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#3779722 "ELIQUIS FTBL 2,5MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:1-0-0-1"

Instance: APS-2-preventive-medical-checkup-medication-summary-3
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#3910895 "FORXIGA FTBL 10MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:1-0-0-0"

Instance: APS-2-preventive-medical-checkup-medication-summary-4
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#4476685 "GEROFOL TBL 5MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:MO, MI"

Instance: APS-2-preventive-medical-checkup-medication-summary-5
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#3780576 "IBANDRONSAEURE SAN FSPR 3MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:0,33/Monat, alle 3 Monate"

Instance: APS-2-preventive-medical-checkup-medication-summary-6
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#1294446 "METFORMIN HEX FTBL  500MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:1-0-0-1"

Instance: APS-2-preventive-medical-checkup-medication-summary-7
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#2450888 "RAMIPRIL 1A TBL  5MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:1-0-0-0"

Instance: APS-2-preventive-medical-checkup-medication-summary-8
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#4466132 "ROSUVASTATIN 1A FTBL 10MG"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"

Instance: APS-2-preventive-medical-checkup-medication-summary-9
InstanceOf: AtIpsMedicationStatement
Usage: #inline
* status = #active
* medicationCodeableConcept = $asp#4477087 "SEMGLEE INJ 100E/ML FPEN 3ML"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectivePeriod.start = "2024-02-08T10:31:58+02:00"
* dosage.text = "S:0-0-0-10"

// Allergies and Intolerances

Instance: APS-2-preventive-medical-checkup-allergy-1
InstanceOf: AtIpsAllergyIntolerance
Usage: #inline
* clinicalStatus = $allergyintolerance-clinical#active "Active"
* code = $sct#764146007 "Penicillin"
* patient = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// History of Procedures

Instance: APS-2-preventive-medical-checkup-procedure-history-1
InstanceOf: AtIpsProcedure
Usage: #inline
* status = #completed
* code = $sct#770606008 "Total replacement of left hip joint"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* performedDateTime = "2010"

Instance: APS-2-preventive-medical-checkup-procedure-history-2
InstanceOf: AtIpsProcedure
Usage: #inline
* status = #completed
* code = $sct#80146002 "Appendectomy"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* performedDateTime = "1962"

Instance: APS-2-preventive-medical-checkup-procedure-history-3
InstanceOf: AtIpsProcedure
Usage: #inline
* status = #completed
* code = $sct#851000119109 "History of colonoscopy"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
// within the last 10 years
* performedDateTime = "2014"

// Diagnostic Results

Instance: APS-2-preventive-medical-checkup-diagnostic-result-1
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#882-1 "ABO and Rh group [Type] in Blood"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#278149003 "Blood group A Rh(D) positive (finding)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-2
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $elga-laborparameterergaenzung#500 "Klinische Chemie"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:56:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* hasMember[0] = Reference(urn:uuid:aeff2319-2cc2-4fba-9541-7a4de3d20f91)
* hasMember[+] = Reference(urn:uuid:d16dce15-bc5a-48a5-910e-6ac039785a2a)
* hasMember[+] = Reference(urn:uuid:96314fcd-3b0c-4032-8cac-6eb59579d90a)
* hasMember[+] = Reference(urn:uuid:30c8a990-ea39-4dcb-9e1e-b9ac74afffc9)
* hasMember[+] = Reference(urn:uuid:f29ac02d-762e-436e-b40c-667ab89e15f2)
* hasMember[+] = Reference(urn:uuid:28a773ea-38c7-4c77-86c4-7764325756e7)

Instance: APS-2-preventive-medical-checkup-diagnostic-result-3
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2093-3 "Cholesterin"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueQuantity.value = 180
* valueQuantity.unit = "mg/dL"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #mg/dL

Instance: APS-2-preventive-medical-checkup-diagnostic-result-4
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2085-9 "HDL-Cholesterin"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueQuantity.value = 45
* valueQuantity.unit = "mg/dL"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #mg/dL

Instance: APS-2-preventive-medical-checkup-diagnostic-result-5
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#9830-1 "Cholesterol.total/Cholesterol in HDL [Mass Ratio] in Serum or Plasma"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueQuantity.value = 4.0
* valueQuantity.unit = "{ratio}"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #{ratio}

Instance: APS-2-preventive-medical-checkup-diagnostic-result-6
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2571-8 "Triglyceride"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueQuantity.value = 130
* valueQuantity.unit = "mg/dL"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #mg/dL

Instance: APS-2-preventive-medical-checkup-diagnostic-result-7
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2324-2 "Gamma-GT"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueQuantity.value = 54
* valueQuantity.unit = "U/L"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #U/L

Instance: APS-2-preventive-medical-checkup-diagnostic-result-8
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $elga-laborparameterergaenzung#1400 "Urindiagnostik"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:56:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* hasMember[0] = Reference(urn:uuid:24ff8632-0ccd-4279-88b2-325fdd936ecb)
* hasMember[+] = Reference(urn:uuid:8c11ad58-94ec-469c-ba4d-bfba9063067d)
* hasMember[+] = Reference(urn:uuid:8c7f9e94-b834-474e-818c-bbd6c3ce3e17)
* hasMember[+] = Reference(urn:uuid:e6e05f94-92be-4ae3-bf49-b0b7d4a62b35)
* hasMember[+] = Reference(urn:uuid:33e09da2-5f43-4046-b2eb-cf190031826b)
* hasMember[+] = Reference(urn:uuid:b675680e-9469-41b1-adc1-093904e3a1d2)

Instance: APS-2-preventive-medical-checkup-diagnostic-result-9
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#33052-2 "Leukocytes [Presence] in Urine"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#260415000 "Not detected (qualifier value)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-10
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2887-8 "Protein [Presence] in Urine"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#260415000 "Not detected (qualifier value)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-11
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2349-9 "Glucose [Presence] in Urine"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#260415000 "Not detected (qualifier value)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-12
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#53963-5 "Blood [Presence] in Urine by Visual"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#260415000 "Not detected (qualifier value)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-13
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#32710-6 "Nitrite [Presence] in Urine"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#260415000 "Not detected (qualifier value)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-14
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#13658-0 "Urobilinogen [Presence] in Urine"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueCodeableConcept = $sct#260415000 "Not detected (qualifier value)"

Instance: APS-2-preventive-medical-checkup-diagnostic-result-15
InstanceOf: AtIpsObservationResultsLaboratory
Usage: #inline
* status = #final
* category = $observation-category#laboratory "Laboratory"
* code = $loinc#2339-0 "Glucose /B"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T07:34:06+01:00"
* performer = Reference(urn:uuid:82f802a7-56a9-49b4-a675-95da08f0d7a6)
* valueQuantity.value = 112
* valueQuantity.unit = "mg/dL"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #mg/dL

// Diagnostic Results - Performer

Instance: APS-2-preventive-medical-checkup-diagnostic-result-performer-1
InstanceOf: AtIpsOrganization
Usage: #inline
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:1.2.40.0.34.99.4613"
* identifier.assigner.display = "Bundesministerium für Gesundheit"
* name = "Amadeus Spital - Labor"
* telecom[0].system = #phone
* telecom[=].value = "+43.1.3453446.0"
* telecom[+].system = #fax
* telecom[=].value = "+43.1.3453446.4674"
* telecom[+].system = #email
* telecom[=].value = "info@amadeusspital.at"
* telecom[+].system = #url
* telecom[=].value = "https://www.amadeusspital.at"
* address.line = "Währinger Gürtel 18-20"
* address.city = "Wien"
* address.postalCode = "1090"
* address.country = "AUT"

// Vital Signs

Instance: APS-2-preventive-medical-checkup-vital-sign-1
InstanceOf: AtIpsObservationVitalSigns
Usage: #inline
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#8302-2 "Body height"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueQuantity.value = 173
* valueQuantity.unit = "cm"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #cm

Instance: APS-2-preventive-medical-checkup-vital-sign-2
InstanceOf: AtIpsObservationVitalSigns
Usage: #inline
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#29463-7 "Body weight"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueQuantity.value = 68
* valueQuantity.unit = "kg"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #kg

Instance: APS-2-preventive-medical-checkup-vital-sign-3
InstanceOf: AtIpsObservationVitalSigns
Usage: #inline
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#39156-5 "Body mass index (BMI) [Ratio]"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueQuantity.value = 22.72
* valueQuantity.unit = "kg/m2"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #kg/m2
// realization of "leicht übergewichtig"
* interpretation = $observation-interpretation#H "High"

Instance: APS-2-preventive-medical-checkup-vital-sign-4
InstanceOf: AtIpsObservationVitalSigns
Usage: #inline
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#85354-9 "Blood pressure panel with all children optional"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* component[0].code = $loinc#8480-6 "Systolic blood pressure"
* component[=].valueQuantity.value = 130
* component[=].valueQuantity.unit = "mm[Hg]"
* component[=].valueQuantity.system = "http://unitsofmeasure.org"
* component[=].valueQuantity.code = #mm[Hg]
* component[+].code = $loinc#8462-4 "Diastolic blood pressure"
* component[=].valueQuantity.value = 80
* component[=].valueQuantity.unit = "mm[Hg]"
* component[=].valueQuantity.system = "http://unitsofmeasure.org"
* component[=].valueQuantity.code = #mm[Hg]

Instance: APS-2-preventive-medical-checkup-vital-sign-5
InstanceOf: AtIpsObservationVitalSigns
Usage: #inline
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#8867-4 "Heart rate"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueQuantity.value = 85
* valueQuantity.unit = "/min"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #/min

Instance: APS-2-preventive-medical-checkup-vital-sign-6
InstanceOf: AtIpsObservationVitalSigns
Usage: #inline
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $sct#276361009 "Waist circumference"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueQuantity.value = 102
* valueQuantity.unit = "cm"
* valueQuantity.system = "http://unitsofmeasure.org"
* valueQuantity.code = #cm
* valueQuantity.comparator = #<

// Past History of Illness

Instance: APS-2-preventive-medical-checkup-illness-history-1
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#resolved "Resolved"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#161419000 "History of measles"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

Instance: APS-2-preventive-medical-checkup-illness-history-2
InstanceOf: AtIpsCondition
Usage: #inline
* clinicalStatus = $condition-clinical#resolved "Resolved"
* verificationStatus = $condition-ver-status#confirmed "Confirmed"
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* code = $sct#161423008 "History of chickenpox (situation)"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)

// Social History

Instance: APS-2-preventive-medical-checkup-social-history-1
InstanceOf: AtIpsObservationTobaccoUse
Usage: #inline
* status = #final
* code = $loinc#72166-2 "Tobacco smoking status"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueCodeableConcept = $loinc#LA18978-9 "Never smoker"

Instance: APS-2-preventive-medical-checkup-social-history-2
InstanceOf: Observation
Usage: #inline
* status = #final
* code = $sct#61686008 "Physical exercise"
* subject = Reference(urn:uuid:0fed5ebe-ca8f-4ad1-aba4-ddad45bd6cc8)
* effectiveDateTime = "2024-02-08T08:30:00+01:00"
* valueRatio.numerator.value = 2.5
* valueRatio.numerator.unit = "h"
* valueRatio.numerator.system = "http://unitsofmeasure.org"
* valueRatio.numerator.code = #h
* valueRatio.numerator.comparator = #>
* valueRatio.denominator.value = 1
* valueRatio.denominator.unit = "wk"
* valueRatio.denominator.system = "http://unitsofmeasure.org"
* valueRatio.denominator.code = #wk

---

