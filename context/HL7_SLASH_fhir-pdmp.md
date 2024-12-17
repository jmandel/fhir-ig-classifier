File: repos/HL7_SLASH_fhir-pdmp/sushi-config.yaml

# documentation: https://fshschool.org/docs/sushi/configuration/
# 
id: hl7.fhir.us.pdmp
canonical: http://hl7.org/fhir/us/pdmp
name: PDMP
title: US Prescription Drug Monitoring Program (PDMP)
description: US Prescription Drug Monitoring Program (PDMP) FHIR IG
status: active # draft | active | retired | unknown
version: 1.0.0
fhirVersion: 4.0.1 
copyrightYear: 2023+
releaseLabel: STU1 # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
license: CC0-1.0 
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
publisher:
  name: HL7 International / Pharmacy
  url: http://www.hl7.org/Special/committees/medication

dependencies:
  hl7.fhir.us.core: 6.1.0

pages:
  index.md:
    title: PDMP IG Home Page
  use-case.md:
    title: Use Cases
  submission-options.md:
    title: Operation Submission Options
  cds-smart.md:
    title: CDS Hooks and SMART App Options
  conformance.md:
    title: Conformance Expectations
  security.md:
    title: Security
  mappings.md:
    title: Mappings to Related Standards
  us-core-profiles.md:
    title: Applicable US Core Profiles
  capability-statements.md:
    title: Capability Statements
  downloads.xml:
    title: Downloads
  changes.md:
    title: Change Log

# menu:
#   Home: index.html
#   Artifacts: artifacts.html
#

contact:
  - name: Frank McKinney
    telecom:
      - system: email
        value: frank.mckinney@pocp.com
      - system: email
        value: fm@frankmckinney.com
  - name: Scott Robertson
    telecom:
      - system: email
        value: scott.robertson@pocp.com
      - system: email
        value: scott@BearHealthTech.consulting
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: phx
parameters:
  auto-oid-root: 2.16.840.1.113883.4.642.40.35
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
# instanceOptions:
#   Determines for which types of Instances SUSHI will automatically set meta.profile
#   if InstanceOf references a profile:
#
#   setMetaProfile: always # always | never | inline-only | standalone-only
#
#
#   Determines for which types of Instances SUSHI will automatically set id
#   if InstanceOf references a profile:
#
#   setId: always # always | standalone-only


---

// File: input/pagecontent/Bundle-pdmp-bundle-history-result-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-history-result-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">605153</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry2_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[3]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry3_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry3_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The pharmacy that dispensed the reported medication: Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></div>

<hr>

---

// File: input/pagecontent/Bundle-pdmp-bundle-history-result-2-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-history-result-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Record of a dispense to August Samuels for Acetaminophen/Codeine on 2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:151b9dd1-ca84-48a4-b132-67b1bbed0194</span></span><span style="display:inline-block"><span class="emph2">identifier</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">605153</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:2706c68c-fb00-4f01-acb9-2547a20c5f63</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry2_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">meddispense-res-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record dispense to August Thomas Samuels for alprazolam on 2023-07-08</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span></span><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://anotherPharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">87355201</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">433800</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093545106</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Thomas Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:d0890c3e-45dc-489c-8498-31ffb6254003</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">990717</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Another Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:47a9b899-1bee-4490-bd41-b3ca12eb441a</span></span><span style="display:inline-block"><span class="emph2">identifier</span><span style="display:inline-block"><span class="emph3">type</span></span></span><span style="display:inline-block"><span class="emph4">coding</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">580331</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">60</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">30</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-07-08</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-07-08</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2 tablets every morning</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[3]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry3_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry3_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for August Samuels, dob 1989-03-12, SSN 120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[4]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry4_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry4_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry4_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry4_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for August Thomas Samuels, dob 1989-03-12, MRN 28-145-2249</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://Highview.org/EHR/patient/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">28-145-2249</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">given[1]</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><span style="display:inline-block"><span class="emph2">given[2]</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Thomas</span></span></span></span><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[5]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry5_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry5_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry5_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry5_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Pharmacy: Our Pharmacy, NCPDP ID 999017</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Sheldonville</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02093</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[6]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:d0890c3e-45dc-489c-8498-31ffb6254003</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry6_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry6_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry6_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry6_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Pharmacy: Another Pharmacy, NCPDP ID 999717</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1682435585</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999717</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Another Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-1134</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-another-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1809 Broad St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Cumberland</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">RI</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02864</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[7]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:1ae374d2-7bb9-4298-8c54-2179410c549e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry7_resource_DetectedIssue" class="emph0 summary">DetectedIssue</span><span id="_Bundle_entry7_resource_DetectedIssue" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">alert-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry7_resource_DetectedIssue_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry7_resource_DetectedIssue_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">An alert generated by the PDMP: 03 Doctor/pharmacy shopping alert</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">final</span></span></span><br><span style="display:inline-block"><span class="emph1">code</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">03</span></span></span><br><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Doctor/pharmacy shopping alert</span></span></span><br><span style="display:inline-block"><span class="emph1">patient</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Thomas Samuels</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[8]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:47a9b899-1bee-4490-bd41-b3ca12eb441a</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry8_resource_MedicationRequest" class="emph0 summary">MedicationRequest</span><span id="_Bundle_entry8_resource_MedicationRequest" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorizing-prescription-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry8_resource_MedicationRequest_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry8_resource_MedicationRequest_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The authorizing prescription for prescription dispense 87355201</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">580331</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">active</span></span></span><br><span style="display:inline-block"><span class="emph1">intent</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">order</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">433800</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Thomas Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">requester</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:77ee025a-59fc-4d1e-a189-2133a9a56c26</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Marie Fiorella, MD</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">text</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2 tablets every morning</span></span><br><span style="display:inline-block"><span class="emph1">dispenseRequest</span><span style="display:inline-block"><span class="emph2">numberOfRepeatsAllowed</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><span style="display:inline-block"><span class="emph2">quantity</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">60</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph2">expectedSupplyDuration</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">30</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">days</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://unitsofmeasure.org</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">d</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[9]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:77ee025a-59fc-4d1e-a189-2133a9a56c26</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry9_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Bundle_entry9_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry9_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry9_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP record for Marie Fiorella, MD</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9941339100</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/NamingSystem/usdeanumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">CF1234563</span></span></span></span><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fiorella</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Marie</span></span></span><span style="display:inline-block"><span class="emph2">suffix</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MD</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">401-333-3333</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">use</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">work</span></span><span style="display:inline-block"><span class="emph2">line</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">201 S Main St #150</span></span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Cumberland</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">RI</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02864</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[10]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:151b9dd1-ca84-48a4-b132-67b1bbed0194</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry10_resource_MedicationRequest" class="emph0 summary">MedicationRequest</span><span id="_Bundle_entry10_resource_MedicationRequest" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorizing-prescription-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry10_resource_MedicationRequest_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry10_resource_MedicationRequest_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The authorizing prescription for prescription dispense 2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">605153</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">active</span></span></span><br><span style="display:inline-block"><span class="emph1">intent</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">order</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">requester</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:23c69153-03c7-470d-9cc8-08265491d095</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Marie Fiorella, MD</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">text</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span><br><span style="display:inline-block"><span class="emph1">dispenseRequest</span><span style="display:inline-block"><span class="emph2">numberOfRepeatsAllowed</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">quantity</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph2">expectedSupplyDuration</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">days</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://unitsofmeasure.org</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">d</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[11]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:23c69153-03c7-470d-9cc8-08265491d095</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry11_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Bundle_entry11_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry11_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry11_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP record for Marie Fiorella, MD</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9941339100</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/NamingSystem/usdeanumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">CF6543210</span></span></span></span><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fiorella</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Marie</span></span></span><span style="display:inline-block"><span class="emph2">suffix</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MD</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">401-333-3333</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">use</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">work</span></span><span style="display:inline-block"><span class="emph2">line</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">201 S Main St #150</span></span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Cumberland</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">RI</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02864</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></div>

<hr>

---

// File: input/pagecontent/Bundle-pdmp-bundle-request-message-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-request-message-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">message</span></span></span><br><span style="display:inline-block"><span class="emph1">timestamp</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-10-10T15:26:30.162-07:00</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/MyEHR/MessageHeader/messageheader-req-op-1</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader" class="emph0 summary">MessageHeader</span><span id="_Bundle_entry_resource_MessageHeader" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">messageheader-req-op-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-request</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MessageHeader_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Event = the canonical URL for the pdmp-history operation. Focus is the Parameters resource holding request inputs.</span></span></span><br><span style="display:inline-block"><span class="emph1">eventCoding</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:ietf:rfc:3986</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history</span></span></span><br><span style="display:inline-block"><span class="emph1">source</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MyPDMPServer</span></span><span style="display:inline-block"><span class="emph2">endpoint</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://pdmpserver.example.org/api</span></span></span><br><span style="display:inline-block"><span class="emph1">focus</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Parameters/parameters-req-op-1</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/MyEHR/Parameters/parameters-req-op-1</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters" class="emph0 summary">Parameters</span><span id="_Bundle_entry2_resource_Parameters" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">parameters-req-op-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Patient</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph4">identifier</span><span style="display:inline-block"><span class="emph5">type</span></span></span><span style="display:inline-block"><span class="leastEmph">coding</span><span style="display:inline-block"><span class="leastEmph">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="leastEmph">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="leastEmph">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph4">name</span><span style="display:inline-block"><span class="emph5">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph5">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph4">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><span style="display:inline-block"><span class="emph4">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><span style="display:inline-block"><span class="emph4">address</span><span style="display:inline-block"><span class="emph5">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph5">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span><br><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Practitioner</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster MD</span></span></span><br><span style="display:inline-block"><span class="emph4">identifier</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph4">name</span><span style="display:inline-block"><span class="emph5">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Amster</span></span><span style="display:inline-block"><span class="emph5">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Adam</span></span></span><br><span style="display:inline-block"><span class="emph4">address</span><span style="display:inline-block"><span class="emph5">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><br><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">PractitionerRole</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster, Internal Medicine, Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph4">practitioner</span><span style="display:inline-block"><span class="emph5">identifier</span></span></span><span style="display:inline-block"><span class="leastEmph">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span></span><span style="display:inline-block"><span class="leastEmph">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9851234689</span></span></span><br><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Adam Amster</span></span></span><br><span style="display:inline-block"><span class="emph4">organization</span><span style="display:inline-block"><span class="emph5">identifier</span></span></span><span style="display:inline-block"><span class="leastEmph">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span></span><span style="display:inline-block"><span class="leastEmph">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Clinic</span></span></span><span class="indent2"><span style="display:inline-block"><span class="emph4">telecom[1]</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph4">telecom[2]</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">aamster-highview-clinic@exampleemail.org</span></span></span></span><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Organization</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph4">identifier</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9851234689</span></span></span><br><span style="display:inline-block"><span class="emph4">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><span style="display:inline-block"><span class="emph4">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Clinic</span></span></span><span style="display:inline-block"><span class="emph4">address</span><span style="display:inline-block"><span class="emph5">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><br><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></span></span><br/></span></span></div>

<hr>

---

// File: input/pagecontent/Bundle-pdmp-bundle-response-message-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-response-message-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">message</span></span></span><br><span style="display:inline-block"><span class="emph1">timestamp</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2020-03-11T08:10:17-05:00</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:b5000d0c-fed9-4746-ac26-b5ce0111a2b7</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader" class="emph0 summary">MessageHeader</span><span id="_Bundle_entry_resource_MessageHeader" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">b5000d0c-fed9-4746-ac26-b5ce0111a2b7</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-response</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MessageHeader_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Event = the canonical URL for the pdmp-history operation. Focus is the Parameters resource holding response content.</span></span></span><br><span style="display:inline-block"><span class="emph1">eventCoding</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:ietf:rfc:3986</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history</span></span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">pdmp-history</span></span></span><br><span style="display:inline-block"><span class="emph1">source</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MyPDMPServer</span></span><span style="display:inline-block"><span class="emph2">endpoint</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">https://pdmp1.testpdmp.org/</span></span></span><br><span style="display:inline-block"><span class="emph1">response</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">messageheader-req-op-1</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">ok</span></span></span><br><span style="display:inline-block"><span class="emph1">focus</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:aecbb129-9a73-4b59-9d66-ff5cdb3f3164</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:aecbb129-9a73-4b59-9d66-ff5cdb3f3164</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters" class="emph0 summary">Parameters</span><span id="_Bundle_entry2_resource_Parameters" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">aecbb129-9a73-4b59-9d66-ff5cdb3f3164</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension</span></span></span><span style="display:inline-block"><span class="emph3">valueDateTime</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-12-01</span></span></span><br><span style="display:inline-block"><span class="emph2">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension</span></span></span><span style="display:inline-block"><span class="emph3">valuePeriod</span><span style="display:inline-block"><span class="emph4">start</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2021-12-02</span></span><span style="display:inline-block"><span class="emph4">end</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-12-01</span></span></span></span><span style="display:inline-block"><span class="emph2">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-data</span></span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Bundle</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">bundle-history-data-in-msg-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><span style="display:inline-block"><span class="emph4">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph4">entry[1]</span><span style="display:inline-block"><span class="leastEmph">@id</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><span style="display:inline-block"><span class="emph5">fullUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span></span><br><span style="display:inline-block"><span class="emph5">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent2"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph4">entry[2]</span><span style="display:inline-block"><span class="emph5">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph5">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">John</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">202 2nd Avenue</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">North Amherst</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph4">entry[3]</span><span style="display:inline-block"><span class="emph5">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph5">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The pharmacy that dispensed the reported medication: Our Pharmacy</span></span></span><span class="indent2"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent2"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></span></span><br/></span></span></div>

<hr>

---

// File: input/pagecontent/capability-statements.md

This section identifies the CapabilityStatements defined for this implementation guide. The section outlines conformance requirements for each of the PDMP FHIR IG actors which includes the specific profiles, operations and security mechanisms that need to be supported.

**Notes**: 
* The individual profiles contained in this guide identify specific structural constraints, terminology bindings and invariants.
* This section is in-process and will be updated based on review and input from PDMP stakeholders

#### Conformance requirements for the PDMP Responder

The section describes the expected capabilities of the PDMP Responder actor which is responsible for providing responses to the requests submitted by PDMP Requester applications.

##### Behavior

The PDMP Responder **SHALL**:

* Support the PDMP Patient, PDMP MedicationDispense and PDMP Pharmacy Organization resource profiles.
* Support the US Core Practitioner, US Core PractitionerRole and US Core Organization (for organizations other than pharmacies) profiles.
* Support the pdmp-history operation and associated Parameters and Bundle profiles.
* Implement the RESTful behavior according to the [FHIR specification](https://www.hl7.org/fhir/http.html).
	* which includes returning the following response classes:
		* (Status 200): successful operation
		* (Status 400): invalid parameter
		* (Status 401/4xx): unauthorized request
		* (Status 403): insufficient scope
		* (Status 404): unknown resource
		* (Status 410): deleted resource
* Support JSON resource formats for all  interactions.
* Declare a CapabilityStatement identifying the list of profiles, operations, and search parameters supported.

The PDMP Responder **SHOULD**:

* Support the following US Core and PDMP resource profiles:
	* US Core Medication
	* PDMP MedicationAdministration

* Support xml resource formats for all PDMP interactions.
* Identify the US Core profile(s) and PDMP profiles supported as part of the FHIR meta.profile attribute for each instance.

The PDMP Responder MAY:

* Support submission of the pdmp-history operation using FHIR Messaging, including support for the associated MessageDefinition and guidance.


##### Security:

* The PDMP Responder **SHOULD** support the SMART Backend Services Authorization Guide for verifying authentication and providing authorization to PDMP Requesters.

* The PDMP Responder **MAY** support the HTTP Header parameter X-Request-ID for request correlation between the PDMP Requester and PDMP Responder.


#### Conformance requirements for the PDMP Requester

The section describes the expected capabilities of the PDMP Requester actor which is responsible for providing responses to the queries submitted by the PDMP Requester applications.


##### Behavior

The PDMP Requester **SHALL**:

* Support the PDMP Patient, PDMP MedicationDispense and PDMP Pharmacy Organization resource profiles.
* Support the US Core Practitioner, US Core PractitionerRole and US Core Organization (for organizations other than pharmacies) profiles.
* Support the pdmp-history operation and associated Parameters and Bundle profiles.
* Consume the RESTful responses according to the FHIR specification.
	* which includes returning the following response classes:
		* (Status 200): successful operation
		* (Status 400): invalid parameter
		* (Status 401/4xx): unauthorized request
		* (Status 403): insufficient scope
		* (Status 404): unknown resource
		* (Status 410): deleted resource.
* Support JSON resource formats for all  interactions.

The PDMP Requester **SHOULD**:

* Support the following US Core and PDMP resource profiles:
	* US Core Medication
	* PDMP MedicationAdministration

* Support xml resource formats for all  interactions.



##### Security:

* The PDMP Requester **SHOULD** support the SMART Backend Services Authorization Guide applicable to clients.

* The PDMP Requester **MAY** add the HTTP Header parameter X-Request-ID as part of the Search request for request correlation between the PDMP Requester and PDMP Responder.



<br>





---

// File: input/pagecontent/cds-smart.md

This section describes approaches for using FHIR's CDS Hooks and SMART App Launch standards to retrieve a patient's information from a PDMP Responder from within the provider's system, as an alternative to the operation-based approached described [here](submission-options.html).


<p></p>

### Overview - Using CDS Hooks and SMART App Launch for PDMP

FHIR's CDS Hooks and SMART App Launch standards enable information exchange and user interaction with external systems to be integrated into a provider system's workflows. 
- [CDS Hooks](https://cds-hooks.hl7.org/2.0/) focuses on triggering interactions with external CDS Servers at appropriate points in a user's process, such as during drug ordering. At a high level...
  - the provider system sends the CDS Server information about the patient and other clinical context at an appropriate step in the provider's workflow (e.g., when ordering a procedure or medication)
  - the CDS Server evaluates the submitted information and returns alerts, suggestions, a link to a SMART app for use by the provider, and/or other decision-support information
  - the provider system presents the information to the user and enables them to launch an app if received in the response.

<p></p>

- [SMART App Launch](https://www.hl7.org/fhir/smart-app-launch/) enables a provider system to launch an externally-hosted SMART app within a user's workflow, authorizing data exchange between the provider system and the external app and allowing the user to view and interact with the app's interface.
  - The provider system launches the SMART app within its user interface, enabling the user to interact with the app without first navigating to it or completing a separate sign-on
  - The launch can be in the context of a CDS Hooks interaction (above), based on rules maintained by the provider system, or as the result of a manual user action (e.g., clicking a '"launch app" button on the patient view page)
  - The SMART App Launch protocol takes care of authorizing the external app and appropriately limiting its data access rights without any user intervention.

<p></p>

When applied to PDMP...
- **CDS Hooks can alert the provider to check a patient's PDMP history** in situations where it may not be apparent that the patient's use of opioids may be pertinent, for example when the provider is ordering a colonoscopy (as long-term opioid use decreases gastric motility). This can provide value in workflows where checking PDMP history is not mandated.
- **SMART App Launch supports mandated use** of PDMP information during drug ordering or dispensing by rendering the PDMP history in a standard way within the provider's workflow.

#### Guidance for using CDS Hooks and SMART App Launch for PDMP
This guide defers to the CDS Hooks and SMART App Launch implementation guides for details on their implementation. However, it provides the following direction for using those standards to retrieve PDMP history.

<p></p>

**Use scenarios for CDS Hooks versus SMART App Launch.** 

Implementers:
- **MAY** use CDS Hooks for decision support alerts associated with non-drug orders, to inform the provider of a situation where opioid use might be an issue and checking PDMP is recommended.
- **SHOULD NOT** use CDS Hooks as a mechanism to support a provider requirement to always check PDMP
- **SHALL NOT** return discrete patient PDMP history detail in a CDS Hooks response (instead, the CDS Server **SHOULD** return a URL or SMART app link card to access the information)
- **SHOULD** use  SMART App Launch alone (not triggered by CDS Hooks) for situations where the provider must view a patient's PDMP history.

**CDS Hooks workflow event options**

- The CDS Hooks specification defines event triggers, called "hooks", reflecting workflow points where a request to a CDS Server can be called. In order to provide early notification that PDMP information may be useful to the provider, hooks that occur earlier in the decision-making process, such as...
  - order-select which fires at the start of the ordering process 
  - patient-view which occurs when the provider first views the patient's chart in an encounter

... may be preferable to those that happen after the provider has made determinations.

However, if receiving finalized order details in the CDS request would better enable the PDMP's CDS service to respond, use of the order-sign hook may be more appropriate.

<p></p>

**Providing context information to a PDMP Responder's CDS Server or SMART App**

The PDMP Responder must receive the same patient and authorized provider information when called using CDS Hooks or SMART App Launch as when the provider system submits a request using the pdmp-history operation--to support its authorization and processing requirements.

When submitting a CDS Hooks request or launching an SMART app, the provider system **MAY** include the [request Parameters resource](StructureDefinition-pdmp-parameters-request.html) to provide needed context:
- as prefetch data in a CDS Hooks request
- in the appContext launch parameter in a SMART app launch.



<p></p>
<p></p>


---

// File: input/pagecontent/changes.md

### STU 1

This is the initial, ballot version of the US Prescription Drug Monitoring Program (PDMP) FHIR Implementation Guide.

This IG consists primarily of new content that is being balloted for the first time. However, it includes some content from a previous work that was balloted but not published, the US Meds FHIR IG, which has been updated and incorporated here.



---

// File: input/pagecontent/CodeSystem-temporary-pdmp-response-status-intro.md


<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding this temporary code system.</b> The authors believe the single value of this code system is unique to the PDMP use case this implementation guide supports. We expect that it may either be proposed as an addition to a related <a href="https://www.pdmpassist.org/PMIX/Standards">PMIX (Prescription Monitoring Information Exchange)</a> code system or maintained within this IG.
</p>
</blockquote>

<p></p>


---

// File: input/pagecontent/conformance.md

### Handling Missing Data

#### In Must Support Elements

**Unknown Reason.** If the PDMP Responder system does not have data for a *Must Support* data element, and the reason for absence is unknown:

- The PDMP Responder system responding to a query SHALL NOT include the element in the resource. 

- The PDMP Requester system SHALL interpret missing data elements within resource instances as data not present in the PDMP Responder system.

**Known Reason.** In situations where information on a particular data element is missing and the PDMP Responder knows the precise reason for the absence of data: 

- The PDMP Responder system SHALL send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or using the dataAbsentReason extension. *(See next section)*

- The PDMP Requester system SHALL be able to process resource instances containing data elements asserting missing information.

#### In Required Elements

If the source system does not have data for a *required* data element (in other words, where the minimum cardinality is greater than 0), participants must follow the rules below.

**Non-Coded Data Elements**. Use the FHIR [DataAbsentReason Extension](http://hl7.org/fhir/R4/extension-data-absent-reason.html) with the code, unknown, which means *the value is expected to exist but is not known*.

**Coded Data Elements** 

- ***Example, preferred, or extensible* binding strengths**
  
  - If the source systems has text but no coded data, only the text element is used.
  - If there is neither text nor coded data, use the appropriate “unknown” concept code from the value set if available
  - If the value set does not have the appropriate “unknown” concept code, use “unknown” from the  [DataAbsentReason Code System](http://hl7.org/fhir/R4/codesystem-data-absent-reason.html)
  
- ***Required* binding strength** 

    - Use the appropriate “unknown” concept code from the value set, if available. 
    - In cases where the PDMP Responder does not know the correct code, and the value set lacks an appropriate "unknown" code, it SHALL respond to a query for the resource with an OperationOutcome accompanied by a 404 HTTP error code. 
    
    For example, the following status elements do not contain an “unknown” concept code--and so, the element cannot be populated as unknown:
    
    - AllergyIntolerance.clinicalStatus
    - Condition.clinicalStatus
    - DocumentReference.status

<p></p>



---

// File: input/pagecontent/index.md

### Introduction

Prescription Drug Monitoring Programs (PDMPs) are state-based databases that provide prescribers and pharmacists with timely information about controlled substance, and in some states non-controlled substance, dispensing, administration and patient behaviors. Use of information stored in PDMPs during care delivery helps avoid drug misuse and diversion and can provide improved patient care and safety.

To reduce opioid misuse, reduce drug diversion, and for other purposes, states have implemented policies mandating providers to reference PDMPs to obtain a patient's PDMP history before prescribing or dispensing certain medications. The Prescription Drug Monitoring Program (PDMP) FHIR Implementation Guide defines a method for providers to request and retrieve patient PDMP information using the HL7 FHIR standard. 

For general background on state PDMP programs, see the Centers for Disease Control and Prevention [PDMP - What States Need to Know](https://www.cdc.gov/overdose-prevention/php/interventions/prescription-drug-monitoring-programs.html).
 
#### PDMP Ecosystem

The Figure 1, below, shows an overview of the PDMP reporting ecosystem.  This diagram was adapted from Prescription Drug Monitoring Program Training and Technical Assistance Center ([PDMP TTAC](https://www.pdmpassist.org)).  PDMP TTAC is an organization of PDMPs, federal partners and other stakeholders which has establish technical standards and provides other services, support, resources, & strategies to further the efforts and effectiveness of PDMPs.

In this figure, 
* a user can interact with a State PDMP System directly (i.e., a web portal) or through a Health care or pharmacy entity (e.g., EHR, pharmacy system)
* Health care or pharmacy entity can interact with a State PDMP System directly or via an Integration Facilitator
* State PDMP Systems exchange information with each other through an inter-PDMP Hub
* ovals have been added to the diagram to identify PDMP Requestors (yellow) and PDMP Responders (green)

Outside of a user accessing a State PDMP System via a web portal, the interactions in Figure 1 can support discrete data exchange. 

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: An overview of the PDMP ecosystem</strong> adapted from PDMP TTAC</figcaption>
  <p>
  <img src="pdmp-ecosystem-small.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

#### Adding FHIR to the PDMP Ecosystem

This Implementation Guide provides another method for Users (or Users + Health care or Pharmacy entities) to request and receive PDMP history reports.  Systems may elect to follow the method in this Implementation Guide to leverage existing FHIR Infrastructure, particularly when discrete PDMP data is allowed to be stored or incorporated locally.

### Scope

For this Implementation Guide, we limit and abstract the ecosystem in Figure 1 to focus on PDMP request and PDMP response messages exchanged between the PDMP Requester and the PDMP Responder as depicted in Figure 2. 

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2:  Abstract Model and Actors</strong></figcaption>
  <p>
  <img src="pdmp-overview-scope.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

To support varying regulatory requirements, PDMP response supports both the PDMP history as discrete data and a URL pointing to the PDMP history rendered (fully-formatted) to regulatory requirements.

This guide provides both RESTful operation and messaging submission methods to match implementers' particular environments as described [here](submission-options.html).

This Implementation Guide is intended to be used in the United States.  It reflects US pharmacy processes and conventions.

### Out of Scope
**Hubs and Integration Facilitators**
The inter-PDMP hubs and Integration Facilitators in Figure 1 may be associated with either the PDMP Requestor or the PDMP Responder in Figure 2, depending upon the implementation.  They are not specifically addressed as separate entities in this Implementation Guide.

**Other interactions** between PDMP ecosystem parties, including parties not depicted in Figure 1, are ***out of scope*** for this Implementation Guide.  These exchanges include, but are not limited to:
- data exchange between PDMPs
- prescription dispensations reported by the pharmacy to the PDMP
- electronic prescriptions sent from the prescriber to the pharmacy


**Patient Matching:** This Implementation Guide does not specify patient matching requirements.  States may require requesters to include certain patient information to enable or facilitate patient matching.  This guide supports that patient information, however, the specific patient matching criteria requirements for each PDMP are ***out of scope***.

**PDMP Logging Requirements:**  This Implementation Guide does not address PDMP logging requirements since the requirements vary between jurisdictions and are not typically messaged (i.e., not communicated back to the PDMP).  

### Actors and Definitions

- **PDMP Requester:** A system that sends PDMP requests to PDMP Responders and receives PDMP responses in return. The system may include both a local system (e.g., EHR, Pharmacy System) and associated intermediaries (e.g., message routing and other value-added service providers). This system can be thought of as the client in a client-server interaction.  

- **PDMP Responder:** A system that receives PDMP requests from PDMP Requesters and responds with PDMP responses. The system may include, in addition to the state PDMP, other partner systems (e.g., hubs).  This system can be thought of as the server in a client-server interaction.

- **PDMP request:** A message, sent by a PDMP requester on behalf of a user, which contains all necessary and required information such that a PDMP Responder can, if appropriate, respond with a PDMP response.  This includes, but is not limited to, user identification and authorization and patient identification.

- **PDMP response:** A message, sent by a PDMP Responder that particular PDMP Requester that submitted a specific  PDMP request.  The message may include any combination of: the PDMP history in discrete data, a URL to a formatted PDMP history report, additional alerts and message, error messages, and other relevant information.

- **PDMP history:** The content of a PDMP response including pertinent patient, pharmacy, prescriber, and dispensation records. The PDMP Responder may also include alerts, administration records, and other information as appropriate or as required by policy or regulation.


### Content and Organization

The guide is organized into the following sections:

- [Use Case Overview](use-case.html) describes the PDMP use case, participants and environment variations.
- [Operation Submission Options](submission-options.html) details PDMP request submission and response processing using a FHIR operation.
- [CDS Hooks and SMART App Options](cds-smart.html) describes use of these FHIR mechanisms to integrate retrieval and view of PDMP information into the provider's workflow.
- [Security](security.html) provides information for implementers related to security and privacy.
- [Conformance Expectations](conformance.html) defines use of Must Support elements and also describes conventions for situations where information is not available.
- [Mappings to Related Standards](mappings.html) describes how FHIR content relates to other standards use in the larger PDMP ecosystem.
- [Applicable US Core Profiles](us-core-profiles.html) defines expectations for the use of US Core profiles in the guide's searches.
- [Profiles, Terminology and Examples](artifacts.html) lists the FHIR profiles and other artifacts defined in this IG.

### FHIR Basics 

For those new to FHIR, the material below describes basic FHIR principles and gives guidance for reading FHIR specifications.

- [FHIR overview](http://hl7.org/fhir/R4/overview.html)
- [Developer’s introduction](http://hl7.org/fhir/R4/overview-dev.html) (or [Clinical introduction](http://hl7.org/fhir/R4/overview-clinical.html))
- [FHIR data types](http://hl7.org/fhir/R4/datatypes.html)
- [Using codes](http://hl7.org/fhir/R4/terminologies.html)
- [References between resources](http://hl7.org/fhir/R4/references.html)
- [How to read resource & profile definitions](http://hl7.org/fhir/R4/formats.html)
- [Base resource](http://hl7.org/fhir/R4/resource.html)

### Sponsoring HL7 Workgroup  
[Pharmacy](http://www.hl7.org/Special/committees/medication/index.cfm)

### Authors

<table class="grid">
    <tbody>
	  <tr>
		<td colspan="2">HL7 Pharmacy Workgroup</td>
  	  </tr>
	  <tr>
		<td>Frank McKinney</td>
		<td><a href="mailto:frank.mckinney@pocp.com">frank.mckinney@pocp.com</a></td>
	  </tr>
	  <tr>
		<td>Scott Robertson</td>
		<td><a href="mailto:scott.robertson@pocp.com">scott.robertson@pocp.com</a></td>
	  </tr>
	  <tr>
		<td colspan="2">Brett Marquard, Nagesh Bashyam, Melva Peters and Eric Haas authored the predecessor to this guide, the US Meds FHIR IG. Certain content from that work has been updated and included here.</td>
	  </tr>
	</tbody>
  </table>

### Stakeholders
The authors acknowledge and thank our stakeholders for their essential contribution.  A limited number of those stakeholders are listed here:
<table class="grid">
    <tbody>
		<tr><td> Carly Crownover </td><td> Database Administrator </td><td> CSMD </td></tr>
		<tr><td> Craig Wetzelberger </td><td> Director of Software Engineering </td><td> Bamboo Health </td></tr>
		<tr><td> Dara Zarley, PharmD </td><td> Grant & Project Analyst </td><td> Nevada State Board of Pharmacy </td></tr>
		<tr><td> Don Vogt </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Fan Xiong, MPH </td><td> Senior Epidemiologist </td><td> Washington State Department of Health </td></tr>
		<tr><td> Fred Aabedi </td><td> CTO </td><td> LogiCoy Inc </td></tr>
		<tr><td> Jean Hall </td><td> Program Director, PDMP Solutions </td><td> LogiCoy Inc. </td></tr>
		<tr><td> Jim Giglio </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Joseph Fibich, PharmD </td><td> Director, Pharmacy Services Program </td><td> CyncHealth </td></tr>
		<tr><td> Keller Martin </td><td> Staff Solutions Architect </td><td> Bamboo Health </td></tr>
		<tr><td> Kevin Borcher </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Mitchell Barnett, PharmD, MS </td><td> Associate PMP Director </td><td> Iowa PDMP </td></tr>
		<tr><td> Nerissa Montgomery </td><td>  </td><td> Louisiana Board of Pharmacy </td></tr>
		<tr><td> Pat Knue </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Rachel Buelow </td><td> </td><td>Surescripts </td></tr>
		<tr><td> Reshmi Ravindranath </td><td> PMP Administrator </td><td> Louisiana Board of Pharmacy </td></tr>
		<tr><td> Robert May </td><td> Program Director </td><td> IJIS Institute</td></tr>
		<tr><td> Ronald Larsen </td><td> PDMP Consultant </td><td> IJIS Institute - RxCheck </td></tr>
		<tr><td> Siri Chadalavada </td><td> </td><td> Biztek Innovations </td></tr>
		<tr><td> Wanda Govan-Jenkins, DNP, MBA, MS, RN </td><td> ONC Project Officer Lead </td><td> Office of the National Coordinator for Health Information Technology </td></tr>
		<tr><td> Zohaib Salim </td><td> Senior Product Manager </td><td> Bamboo Health </td></tr>
	</tbody>
  </table>

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
- PIMX references are available through the Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) [https://www.pdmpassist.org/PMIX/Standards](https://www.pdmpassist.org/PMIX/Standards). 
- NCPDP references are copyright National Council for Prescription Drug Programs (NCPDP) [https://standards.ncpdp.org](https://standards.ncpdp.org/)
- ASAP references are copyright American Society for Automation in Pharmacy (ASAP) [https://asapnet.org/publications/](https://asapnet.org/publications/)

{% include ip-statements.xhtml %}



---

// File: input/pagecontent/mappings.md

### Other Data Standards Supporting the PDMP Ecosystem

The broad PDMP ecosystem - from writing a prescription to reporting PDMP history - employs a combination of NCPDP, ASAP and PMIX/NIEM standards, as illustrated below:

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: Standards supporting the PDMP ecosystem</strong></figcaption>
  <p>
  <img src="pdmp-overview-standards.png" style="float:none">  
  </p>
</figure>
</div>

In Figure 1, above, 
* prescribers write a prescription and forward it electronically to the pharmacy using NCPDP SCRIPT.
* upon dispensation or sale of the prescription, the pharmacy reports the dispensation to the appropriate PDMP system(s) using ASAP Standard for Prescription Drug Monitoring Programs (ASAP Reporting)
* PDMP systems exchange information between each other using PMIX/NIEM
* in contrast, getting the PDMP information to providers (prescribers and pharmacists) does not utilize a single, consistent, methodology.  Current implementations include
  * all PDMP provide a web portal for provider access
  * some PDMPs support NCPDP SCRIPT RxHistory for PDMP report request/response
  * some PDMPs support ASAP Web Services for PDMP report request/response
  * some PDMPs have other proprietary integration options for PDMP report request/response

In introducing FHIR as a methodology in connecting providers (prescribers and pharmacists) to the PDMPs, the Implementation Guide stakeholders agreed that mappings between FHIR, PMIX/NIEM, and NCPDP SCRIPT RxHistory may be beneficial for users of this Implementation Guide.

### Mapping

Mapping from each FHIR resource in this Implementation Guide to PMIX/NIEM and NCPDP SCRIPT RxHistory is included in the resource profile pages. On the resource page (e.g., [PDMP MedicationDispense](StructureDefinition-pdmp-medicationdispense.html)), click on the 'Mappings' tab and scroll to find the mapping of interest.  The following tables consolidate the mappings for request and response scenarios by standard.

Resources which are not profiled in this Implementation Guide (e.g, US Core Prescriber) do not include mappings to PMIX/NIEM or NCPDP SCRIPT RxHistory. Mapping to these resources is included below, but is not included in the resource definitions (e.g., the mapping tab for US Core Prescriber does not include mapping to PMIX/NIEM)

Fully qualified element names in each standard can be very long.  To reduce the text in each cell, the tables below provide "context" and "XPath" or "FHIRPath" for the mapped data elements.  The context is a simplified representation of the XPath/FHIRPath referring to the major nodes in the XML Schema, or PDMP FHIR Bundles defined in this Implementation Guide.  The XPath/FHIRPath are prefixes to the XPath or FHIRPath for each element in the table.


#### NCPDP to FHIR Mapping for Request

This section includes a representative field mapping from NCPDP SCRIPT 2017071 RxHistoryRequest to the FHIR elements in this Implementation Guide.

<style type="text/css">.ritz .waffle a { color: inherit; }.ritz .waffle .maptable17{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#ffffff;text-align:left;color:#000000;font-family:'Calibri',Arial;font-size:11pt;vertical-align:middle;white-space:normal;overflow:hidden;word-wrap:break-word;direction:ltr;padding:0px 3px 0px 3px;}.ritz .waffle .maptable11{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#4f81bd;text-align:center;font-weight:bold;color:#ffffff;font-family:'Calibri',Arial;font-size:12pt;vertical-align:middle;white-space:normal;overflow:hidden;word-wrap:break-word;direction:ltr;padding:0px 3px 0px 3px;}.ritz .waffle .maptable10{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#4f81bd;text-align:left;color:#000000;font-family:'Calibri',Arial;font-size:12pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:0px 3px 0px 3px;}.ritz .waffle .maptable16{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#c6d9f0;text-align:center;color:#000000;font-family:'Calibri',Arial;font-size:12pt;vertical-align:middle;white-space:normal;overflow:hidden;word-wrap:break-word;direction:ltr;padding:0px 3px 0px 3px;}</style>
<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11">Element Name</td>
        <td class="maptable11">NCPDP Data Element</td>
        <td class="maptable11">FHIR Data Element</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="5">Request</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message <br/> XPath:<i>/Message</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message<br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Request ID</td>
        <td class="maptable17">Header/MessageID</td>
        <td class="maptable17">entry.resource.where(resourceType='MessageHeader').id</td>
      </tr>
      <tr>
        <td class="maptable17">Request date/time</td>
        <td class="maptable17">Header/SentTime</td>
        <td class="maptable17">timestamp</td>
      </tr>
      <tr>
        <td class="maptable17">Start Date</td>
        <td class="maptable17">Body/RxHistoryRequest/RequestedDates/StartDate</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable17">End Date</td>
        <td class="maptable17">Body/RxHistoryRequest/RequestedDates/EndDate;</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="4">Patient</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Rx History Request / Patient <br/> XPath: <i>/Message/Body/RxHistoryRequest/Patient/HumanPatient</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / us-core-practitioner <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.resource.where(resourceType='Patient')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">Name/FirstName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">Name/LastName</td>
        <td class="maptable17">name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">DateOfBirth</td>
        <td class="maptable17">birthdate</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="4">Requester</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Rx History Request / Prescriber <br/> XPath: <i>/Message/Body/RxHistoryRequest/Prescriber/NonVeterinarian</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / us-core-practitioner <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.resource.where(resourceType='Practitioner')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Name</td>
        <td class="maptable17">Name</td>
        <td class="maptable17">name</td>
      </tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="6">Requesting Facility</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Rx History Request / Facility <br/> XPath: <i>/Message/Body/RxHistoryRequest</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / us-core-organization <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.resource.where(resourceType='Organization')</i></td>
      </tr>
      <tr>
        <td class="maptable17"> Name</td>
        <td class="maptable17">FacilityName</td>
        <td class="maptable17">name</td>
      </tr>
      <tr>
        <td class="maptable17">State</td>
        <td class="maptable17">Address/StateProvince</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NCPDP ID</td>
        <td class="maptable17">Identification/NCPDPID</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber').value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
    </tbody>
  </table>
</div>



#### NCPDP to FHIR Mappings for Response

This section includes a representative field mapping from NCPDP SCRIPT 2017071 RxHistoryResponse to the FHIR elements in this Implementation Guide.

<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11">Element Name</td>
        <td class="maptable11">NCPDP Data Element </td>
        <td class="maptable11">FHIR Data Element </td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="5">Response Information</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message <br/>XPath: <i>/Message</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message<br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='MessageHeader')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Request ID</td>
        <td class="maptable17">Header/RelatesToMessageID</td>
        <td class="maptable17">response.identifier</td>
      </tr>
        <td class="maptable17">Response Date/Time</td>
        <td class="maptable17">Header/SentTime</td>
        <td class="maptable17">Parameters.extension.where(extension.url='phttp://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension')</td>
      </tr>
      <tr>
        <td class="maptable17">Report Start Date</td>
        <td class="maptable17">Body/RxHistoryResponse/RequestedDates/StartDate</td>
        <td class="maptable17">Parameters.extension.where(extension.url='phttp://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.start</td>
      </tr>
      <tr>
        <td class="maptable17">Report End date</td>
        <td class="maptable17">Body/RxHistoryResponse/RequestedDates/EndDate</td>
        <td class="maptable17">Parameters.extension.where(extension.url='phttp://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.end</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="11">Patient</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / Patient <i>/Message/Body/RxHistoryResponse/Patient/HumanPatient</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='Patient')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">Name/FirstName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">Name/LastName</td>
        <td class="maptable17">name.family</td>
      </tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">DateOfBirth</td>
        <td class="maptable17">birthdate</td>
      </tr>
      <tr>
        <td class="maptable17">Gender</td>
        <td class="maptable17">Gender</td>
        <td class="maptable17">gender</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address 1</td>
        <td class="maptable17">Address/AddressLine1</td>
        <td class="maptable17">address.line[0]</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address 2</td>
        <td class="maptable17">Address/AddressLine2</td>
        <td class="maptable17">address.line[1]</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">Address/City</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">Address/StateProvince</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">Address/PostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">SSN</td>
        <td class="maptable17">Identification/SocialSecurity</td>
        <td class="maptable17">identifier.where(system=http://hl7.org/fhir/sid/us-ssn)</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="17">Prescription</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / MedicationDispensed <i>/Message/Body/RxHistoryResponse/MedicationDispensed</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='MedicationDispense')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Filled Date</td>
        <td class="maptable17">LastFillDate</td>
        <td class="maptable17">whenPrepared</td>
      </tr>
      <tr>
        <td class="maptable17">Written Date</td>
        <td class="maptable17">WrittenDate</td>
        <td class="maptable17">authorizingPrescription.authoredOn</td>
      </tr>
      <tr>
        <td class="maptable17">Number</td>
        <td class="maptable17">HistorySource/SourceReference</td>
        <td class="maptable17">identifier</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Name</td>
        <td class="maptable17">DrugDescription</td>
        <td class="maptable17">medicationCodeableConcept.text</td>
      </tr>
      <tr>
        <td class="maptable17">Product ID Qualifier (NDC)</td>
        <td class="maptable17">DrugCoded/ProductCode/Qualifier = 'ND'</td>
        <td class="maptable17">medicationCodeableConcept.coding.system = 'http://hl7.org/fhir/sid/ndc'</td>
      </tr>
      <tr>
        <td class="maptable17">Product ID (NDC)</td>
        <td class="maptable17">DrugCoded/ProductCode/Code</td>
        <td class="maptable17">medicationCodeableConcept.coding.where(system='http://hl7.org/fhir/sid/ndc').code</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Strength</td>
        <td class="maptable17">DrugCoded/Strength</td>
        <td class="maptable17">medicationCodeableConcept.ingredient.strength</td>
      </tr>
      <tr>
        <td class="maptable17">Dosage Form</td>
        <td class="maptable17">Quantity/QuantityUnitOfMeasure</td>
        <td class="maptable17">medicationCodeableConcept.form</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Quantity</td>
        <td class="maptable17">Quantity/Value</td>
        <td class="maptable17">quantity</td>
      </tr>
      <tr>
        <td class="maptable17">Days of Supply</td>
        <td class="maptable17">DaysSupply</td>
        <td class="maptable17">daysSupply</td>
      </tr>
      <tr>
        <td class="maptable17">Refill Number</td>
        <td class="maptable17">HistorySource/FillNumber</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number').valuePositiveInt</td>
      </tr>
      <tr>
        <td class="maptable17">Refills Authorized</td>
        <td class="maptable17"><i>not directly represented in RxHistoryResponse</i></td>
        <td class="maptable17">authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed</td>
      </tr>
      <tr>
        <td class="maptable17">Partial Fill Indicator</td>
        <td class="maptable17"><em>not supported in RxHistoryResponse</em></td>
        <td class="maptable17">type</td>
      </tr>
      <tr>
        <td class="maptable17">Method of Payment</td>
        <td class="maptable17">HistorySource/PaymentType</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment')</td>
      </tr>
      <tr>
        <td class="maptable17">Opioid Treatment Code</td>
        <td class="maptable17"><i>not supported</i></td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code').Coding.code</td>
      </tr>
      <tr>
        <td class="maptable17">Transmission Method</td>
        <td class="maptable17"><i>not supported</i></td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method').Coding.code</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="11">Dispenser Organization</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / MedicationDispensed / Pharmacy<i>/Message/Body/RxHistoryResponse/MedicationDispensed/Pharmacy</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='Organization')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Name (Facility)</td>
        <td class="maptable17">BusinessName</td>
        <td class="maptable17">name</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address line 1</td>
        <td class="maptable17">Address/AddressLine1</td>
        <td class="maptable17">address.line[0]</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address line 2</td>
        <td class="maptable17">Address/AddressLine2</td>
        <td class="maptable17">address.line[1]</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">Address/City</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">Address/StateProvince</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">Address/PostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">Phone Number</td>
        <td class="maptable17">CommunicationNumbers/PrimaryTelephone</td>
        <td class="maptable17">telecom</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NCPDP ID</td>
        <td class="maptable17">Identification/NCPDPID</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber').value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="12">Prescriber</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / MedicationDispensed / Prescriber <i>/Message/Body/RxHistoryResponse/MedicationDispensed/Prescriber</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='Prescriber')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">NonVeterinarian/Name/FirstName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">NonVeterinarian/Name/LastName</td>
        <td class="maptable17">name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address Line 1</td>
        <td class="maptable17">NonVeterinarian/Address/AddressLine1</td>
        <td class="maptable17">address.line[0]</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address Line 2</td>
        <td class="maptable17">Prescriber/NonVeterinarian/Address/AddressLine2</td>
        <td class="maptable17">address.line[1]</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">NonVeterinarian/Address/City</td>
        <td class="maptable17">Practitioner.address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">NonVeterinarian/Address/StateProvince</td>
        <td class="maptable17">Practitioner.address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">NonVeterinarian/Address/PostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">DEA Number</td>
        <td class="maptable17">NonVeterinarian/Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI Number</td>
        <td class="maptable17">NonVeterinarian/Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable17">State License</td>
        <td class="maptable17">NonVeterinarian/Identification/StateLicenseNumber</td>
        <td class="maptable17">identifier</td>
      </tr>
      <tr>
        <td class="maptable17">State of License</td>
        <td class="maptable17"><i>not supported</i></td>
        <td class="maptable17">identifier.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-jurisdiction')</td>
      </tr>
    </tbody>
  </table>
</div>


#### PMIX to FHIR Mapping for Request

This section includes a representative field mapping from PMIX/NIEM 4.0 Request to the FHIR elements in this Implementation Guide.

<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11"> Element Name</td>
        <td class="maptable11">PMIX Data Element</td>
        <td class="maptable11">FHIR Data Element </td>
      </tr>
      <tr>
        <td class="maptable16" colspan="2"></td>
        <td class="maptable16">context: PMP Request <br/> XPath: <i>pmix:PMPRequest</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.where(name='patient')</i></td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="2">Request Date Range</td>
        <td class="maptable17">Start Date</td>
        <td class="maptable17">pmp:RequestPrescriptionDateRange/pmp:RequestPrescriptionDateRangeBegin</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable17">End Date</td>
        <td class="maptable17">pmp:RequestPrescriptionDateRange/pmp:RequestPrescriptionDateRangeEnd</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable16" colspan="2"></td>
        <td class="maptable16">context: <i>pmix:PMPRequest</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.where(name='patient')</i></td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="3">Patient</td>
        <td class="maptable17">First Name</td>
        <td class="maptable17">pmp:RequestPatient/nc:PersonName/nc:PersonGivenName</td>
        <td class="maptable17">Patient.name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">pmp:RequestPatient/nc:PersonName/nc:PersonSurName</td>
        <td class="maptable17">Patient.name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">pmp:RequestPatient/nc:PersonBirthDate/Date</td>
        <td class="maptable17">Patient.birthdate</td>
      </tr>
    </tbody>
  </table>
</div>


#### PMIX to FHIR Mapping for Response

This section includes a representative field mapping from PMIX/NIEM 4.0 Prescription Report to the FHIR elements in this Implementation Guide.

<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11"> Element Name</td>
        <td class="maptable11">PMIX Data Element</td>
        <td class="maptable11">FHIR Data Element</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="4">Response Information</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report <br/> XPath:<i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').paramenter</i></td>
      </tr>
      <tr>
        <td class="maptable17">Report Date/Time</td>
        <td class="maptable17">pmp:ReportExecutionDate <br/> pmp:ReportExecutionTime </td>
        <td class="maptable17">extension.where(extension.url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension')</td>
      </tr>
      <tr>
        <td class="maptable17">Report Start Date</td>
        <td class="maptable17">pmp:ReportDateRange/pmp:ReportDateRangeBegin</td>
        <td class="maptable17">extension.where(extension.url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.start</td>
      </tr>
      <tr>
        <td class="maptable17">Report End Date</td>
        <td class="maptable17">pmp:ReportDateRange/pmp:ReportDateRangeEnd</td>
        <td class="maptable17">extension.where(extension.url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.end</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="10">Patient</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription / Patient <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription/pmp:Patient</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / us-core-patient <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonGivenName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonSurName</td>
        <td class="maptable17">name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">nc:PersonBirthDate/Date</td>
        <td class="maptable17">birthdate</td>
      </tr>
      <tr>
        <td class="maptable17">Gender</td>
        <td class="maptable17">PersonSexCode</td>
        <td class="maptable17">gender</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/LocationStreet</td>
        <td class="maptable17">address.line</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/nc:LocationCityName</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/LocationState</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/nc:LocationPostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">SSN</td>
        <td class="maptable17">PersonSocialSecurityNumberIdentifier</td>
        <td class="maptable17">identifier.where(system=http://hl7.org/fhir/sid/us-ssn).value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="16">Prescription</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-medicationdispense <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/pdmp-medicationdispense')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Filled Date</td>
        <td class="maptable17">pmp:PrescriptionFilledDate</td>
        <td class="maptable17">whenPrepared</td>
      </tr>
      <tr>
        <td class="maptable17">Written Date</td>
        <td class="maptable17">pmp:PrescriptionWrittenDate</td>
        <td class="maptable17">authorizingPrescription.authoredOn</td>
      </tr>
      <tr>
        <td class="maptable17">Number</td>
        <td class="maptable17">pmp:PrescriptionNumberText</td>
        <td class="maptable17">identifier.value</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Name</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugProductNameText</td>
        <td class="maptable17">medicationCodeableConcept.text</td>
      </tr>
      <tr>
        <td class="maptable17">Product NDC</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugNDCProductIdentifier</td>
        <td class="maptable17">medicationCodeableConcept.coding.where(system='http://hl7.org/fhir/sid/ndc').code</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Strength</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugStrengthText</td>
        <td class="maptable17">medicationCodeableConcept.ingredient.strength</td>
      </tr>
      <tr>
        <td class="maptable17">Dosage Form</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugUnitOfMeasureText</td>
        <td class="maptable17">medicationCodeableConcept.form</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Quantity</td>
        <td class="maptable17">pmp:DispensedQuantity</td>
        <td class="maptable17">quantity</td>
      </tr>
      <tr>
        <td class="maptable17">Days of Supply</td>
        <td class="maptable17">pmp:DaysSupplyCount</td>
        <td class="maptable17">daysSupply</td>
      </tr>
      <tr>
        <td class="maptable17">Refill Number</td>
        <td class="maptable17">pmp:DrugRefillNumberCount</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number').valuePositiveInt</td>
      </tr>
      <tr>
        <td class="maptable17">Refills Authorized</td>
        <td class="maptable17">pmp:RefillsAuthorizedCount</td>
        <td class="maptable17">authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed</td>
      </tr>
      <tr>
        <td class="maptable17">Partial Fill Indicator</td>
        <td class="maptable17">pmp:PartialFillIndicator</td>
        <td class="maptable17">type</td>
      </tr>
      <tr>
        <td class="maptable17">Method of Payment</td>
        <td class="maptable17">pmp:MethodOfPaymentCode</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment').code</td>
      </tr>
      <tr>
        <td class="maptable17">Opioid Treatment Code</td>
        <td class="maptable17">pmp:OpioidTreatmentCategoryCode</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code').Coding.code</td>
      </tr>
      <tr>
        <td class="maptable17">Transmission Method</td>
        <td class="maptable17">pmp:TransmissionFormOfRxOriginCode</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method').Coding.code</td>
      </tr>
      <tr>
         <td class="maptable16" rowspan="10">Dispenser Organization</td>
       <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription / Dispenser <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription/pmp:Dispenser</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-organization-pharmacy <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/pdmp-organization-pharmacy')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Name (Facility)</td>
        <td class="maptable17">nc:OrganizationDoingBusinessAsName</td>
        <td class="maptable17">name</td>
      </tr>
      <tr>
        <td class="maptable17"> Street Address</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStreet/nc:StreetFullText</td>
        <td class="maptable17">address.line</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationCityName</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStateUSPostalServiceCode</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationPostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">Phone Number</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactTelephoneNumber/nc:FullTelephoneNumber</td>
        <td class="maptable17">telecom</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">pmp:DEANumberIdentifier</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NCPDP ID</td>
        <td class="maptable17">pmp:NCPDPIdentifier</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber').value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">pmp:NPIIdentifier</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="11">Prescriber</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription / Prescriber <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription/pmp:Prescriber</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / us-core-practitioner <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonGivenName</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonSurName</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStreet/nc:StreetFullText</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.line</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationCityName</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStateUSPostalServiceCode</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationPostalCode</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">DEA </td>
        <td class="maptable17">pmp:DEANumberIdentifier/nc:IdentificationID</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier</td>
      </tr>
      <tr>
        <td class="maptable17">NPI </td>
        <td class="maptable17">pmp:NPIIdentifier/nc:IdentificationID</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier.where(coding.system'http://hl7.org/fhir/sid/us-npi')</td>
      </tr>
      <tr>
        <td class="maptable17">State License </td>
        <td class="maptable17">pmp:StateLicenseIdentifier:nc:IdentificationID</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier</td>
      </tr>
      <tr>
        <td class="maptable17">State of License</td>
        <td class="maptable17">pmp:StateLicenseIdentifier:nc:IdentificationJurisdiction</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier</td>
      </tr>
    </tbody>
  </table>
</div>




---

// File: input/pagecontent/MedicationAdministration-pdmp-medadmin-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">MedicationAdministration</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-medadmin-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/md-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationadministration</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Telephone Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent0"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">864706</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">methadone hydrochloride 10 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00406577123</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">METHADONE HYDROCHLORIDE, 1 TABLET in 1 BLISTER PACK (0406-5771-23) (package)</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">methadone hydrochloride 10 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">display</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Amy V. Shaw</span></span><br><span style="display:inline-block"><span class="emph1">effectivePeriod</span><span style="display:inline-block"><span class="emph2">start</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-01-15T04:30:00+01:00</span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Ronald Bone, MD</span></span></span><br><span style="display:inline-block"><span class="emph1">dosage</span><span style="display:inline-block"><span class="emph2">text</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Give 1 tablet</span></span><span style="display:inline-block"><span class="emph2">dose</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span></div>

<hr>

---

// File: input/pagecontent/MedicationDispense-pdmp-meddispense-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">MedicationDispense</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-meddispense-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">versionId</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">lastUpdated</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05T06:38:52+00:00</span></span></span><span style="display:inline-block"><span class="emph2">source</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-mme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">18</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[4]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Private Pay (Cash, Charge, Credit Card)</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[5]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Acute Opioid Therapy</span></span></span></span><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent0"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">15</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tablet every 6-8 hours as needed for pain</span></span></span></div>

<hr>

---

// File: input/pagecontent/MedicationDispense-pdmp-meddispense-2-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">MedicationDispense</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-meddispense-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">versionId</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">lastUpdated</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2016-12-10T06:38:52+00:00</span></span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span></span><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">in-progress</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent0"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">433800</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093545106</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">display</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">60</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">30</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-07-08T06:45:52Z</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2 tablets every morning</span></span></span></div>

<hr>

---

// File: input/pagecontent/OperationDefinition-pdmp-history-intro.md

**Notes:**

- **Detailed parameter definitions.** The table below describes the input and output parameters, including their uses and base FHIR resource types.The content conveyed in those parameters is further constrained by the [PDMP Parameters - Request](StructureDefinition-pdmp-parameters-request.html) and [PDMP Parameters - Response](StructureDefinition-pdmp-parameters-response.html) profiles referenced below. 

<p></p>

- **PDMP dispensation history data definition.** The [PDMP History Result Bundle](StructureDefinition-pdmp-bundle-history-result.html) profile further profiles the pdmp-history-data response parameter's content.

<p></p>

- **Output parameter cardinality.** The four response parameters are each individually optional, but at least one must be present in the operation response, reflecting these scenarios:
  - **PDMP history available.** pdmp-history-data and/or pdmp-history-link are populated when the PDMP Responder has PDMP information available for the requested patient.
  - **Pre-stage-only.** outcome and, optionally, pre-stage-retrieval-key are populated when the PDMP Responder is replying to a request in which the pre-stage-only parameter is set to true (see details below).
  - **Patient not found.** outcome is populated if the PDMP Responder is unable to locate information for the requested patient. pdmp-history-link may also be populated in this scenario. See [this section](submission-options.html#successful-processing-that-does-not-locate-pdmp-history-for-the-requested-patient) for additional response specifics and an example.
  - **Fatal exception.** only outcome is populated if the PDMP Responder encounters an exception that prevents completion of response processing. See [this section](submission-options.html#error-preventing-completion-of-response-processing) for additional response specifics and an example.
  - **Non-fatal exception impacting response content.** outcome is populated in addition to one or more other parameters if the PDMP Responder encounters a non-fatal exception when executing a request that impacts the content of the response,  to indicate the issue and impact on the PDMP history content see [this section](submission-options.html#non-fatal-processing-exception) for additional response specifics and an example.
  - **Other warning or information.** outcome may be populated in addition to one or more other parameters to return other warning or processing information.
  
  <p></p>

 - **Requests to stage data for later retrieval.** A request with the pre-stage-only input parameter set to true directs the PDMP Responder to gather information for the requested patient and stage it for retrieval via a subsequent pdmp-history call.
   - In response, the PDMP Responder populates the outcome parameter with an indication that the request was accepted and optionally returns a key value in the pre-stage-retrieval-key output parameter that the PDMP Requester must include in the subsequent operation call's pre-stage-retrieval-key input parameter.
   - see [this section](submission-options.html#successful-acceptance-of-a-pre-stage-only-request) for additional response specifics and an example.

<p></p>

 - **FHIR resource references.** Resources conveyed in the operation's input and output parameters will 

<p></p>

 - **FHIR resource references.** Resources conveyed in the operation's input and output parameters will typically contain references to other FHIR resources. Certain of these references are expected to resolve to other resources in the respective submission or response. Others, however, may refer to resources that are not present in the operation because they are not pertinent to the PDMP use case. Below are this guide's expectations:

<p></p>

   - **Operation request:**
     - _Authorized Practitioner Relationships._ The PractitionerRole resource submitted in the authorized-practitioner-role parameter: 
       - **SHOULD** contain a reference to the Practitioner resource submitted in the corresponding authorized-practitioner parameter in its .practitioner element.
       - **SHOULD** contain a reference to the Organization resource submitted in the corresponding authorized-practitioner-organization parameter in its .organization element.
     - _Delegate Relationships._ The PractitionerRole resource submitted in the delegate-practitioner-role parameter: 
       - **SHOULD** contain a reference to the Practitioner resource submitted in the corresponding delegate-practitioner parameter in its .practitioner element.
       - **SHOULD** contain a reference to the Organization resource submitted in the corresponding delegate-organization parameter in its .organization element.
       - _Note:_ a delegate is an individual authorized by a provider or pharmacist who is requesting the PDMP information on their behalf.  For example, an intake or triage person in an emergency department may be a delegate for a physician in that department
     - _Other references_ may be present in submitted resources but are not required to resolve to other resources in the request.

   <p></p>

   - **Operation response - PDMP History Data parameter:** 
     - Resources contained in the bundle conveyed in the pdmp-history-data parameter are expected to reference one another according to the rules of the associated FHIR profiles. 
     - See [PDMP History Result Bundle](StructureDefinition-pdmp-bundle-history-result.html) for details about the Bundle that populates this parameter.
 
<p></p>

**Examples:**

An example of the Parameters resource submitted to this operation:
- [pdmp-history-input-parameters-1](Parameters-pdmp-history-input-parameters-1.html)

An example of the Parameters resource returned by this operation:
- [pdmp-history-output-parameters-1](Parameters-pdmp-history-output-parameters-1.html)


<p></p>

---

// File: input/pagecontent/Organization-pdmp-pharmacy-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">Organization</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-pharmacy-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">DEA</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Drug Enforcement Administration registration number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/NamingSystem/usdeanumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">CS4861378</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[3]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-input-parameters-1-intro.md

This is an example of a Parameters resource used to invoke the Patient/$pdmp-history operation

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster MD</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Amster</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Adam</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster, Internal Medicine, Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-1</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Adam Amster</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-1</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Clinic</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">aamster-highview-clinic@exampleemail.org</span></span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9851234689</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-input-parameters-2-minimum-intro.md

This is an example of a Parameters resource used to invoke the Patient/$pdmp-history operation. This example illustrates the minimum population for a request. Note that additional content will often be required by jurisditional rules.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-2-minimum</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster MD</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Amster</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster, Internal Medicine, Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-2</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Adam Amster</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-2</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Clinic</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-input-parameters-3-veterinary-intro.md

This example illustrates how a request is populated when submitted from a veterinary setting and the patient is an animal. 

- The Patient.patient-animal extension is populated to indicate that the patient is an animal. The animal's species is included from the [PDMP Species Type ValueSet](ValueSet-pdmp-species-type.html)
- **Patient.name**
  - Populate the animal's name in name.given, and the owner's family name in name.family
- **Patient.birthDate**
  - Populate birthDate value if known. Otherwise, populate birthdate.extension using the [data absent reason extension](http://hl7.org/fhir/StructureDefinition/data-absent-reason) with the value "unkonwn"
- **RelatedPerson representing the owner**
  - When the patient is an animal, the Patient resource **SHOULD** be accompanied by a RelatedPerson reflecting the animal's owner's information
  

<p></p>


<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-3-veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Animal patient: Fido Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/patient-animal</span></span></span><span style="display:inline-block"><span class="emph2">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">species</span></span></span><span style="display:inline-block"><span class="emph3">valueCodeableConcept</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Veterinary Patient</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Medical record number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://vet-medical.example.org/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10035406</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fido</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Susan Patel, Veterinarian</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patel</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Susan Patel, Veterinary Medicine, Highview Veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-3</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Susan Patel</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-3</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Veterinary</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">animal-owner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter5_resource_RelatedPerson" class="emph0 summary">RelatedPerson</span><span id="_Parameters_parameter5_resource_RelatedPerson" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter5_resource_RelatedPerson_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter5_resource_RelatedPerson_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Animal's owner: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">DL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Driver&#39;s license number</span></span></span><br><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">M231-64600-565-55</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">patient</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patient/patient-req-3</span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[6]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-input-parameters-4-delegate-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-4-delegate</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-4</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Patient: Jules Julien</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Medical record number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://highview-va.example.org/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10035666601</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Julien</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Jules</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">female</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1980-05-20</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Santa Clara Blvd</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-4</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Mari Kimble MD</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1665015602</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Kimble</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-4</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Mari Kimble, Internal Medicine, Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-4</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Mari Kimble</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-4</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">specialty</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://nucc.org/provider-taxonomy</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">207R00000X</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Internal Medicine Physician</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">508-856-1234</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-4</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">508-856-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2002 Highview Ln</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Worcester</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01604</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">delegate-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter5_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter5_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-4-del</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter5_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter5_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Boris Bartok</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1554505606</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Bartok</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[6]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">delegate-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter6_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter6_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-4-del</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter6_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter6_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Boris Bartok RN, Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-4-del</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Mari Kimble</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-4-del</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">specialty</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://nucc.org/provider-taxonomy</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">163W00000X</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Registered Nurse</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">508-856-9999</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[7]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">delegate-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter7_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter7_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-4-del</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter7_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter7_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview VA Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">508-856-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2002 Highview Ln</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Worcester</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01604</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[8]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-1-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-data</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle" class="emph0 summary">Bundle</span><span id="_Parameters_parameter_resource_Bundle" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">bundle-history-data-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="leastEmph">@id</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><span style="display:inline-block"><span class="emph2">fullUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">lastUpdated</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05T18:38:52+00:00</span></span><span style="display:inline-block"><span class="emph2">source</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-mme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">18</span></span></span></span><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">000022056</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">15</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab every 6 to 8 hours as needed for pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[3]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The pharmacy that dispensed the reported medication: Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></span></span><br/></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-2-minimal-history-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation. This example illustrates the minimum population for an individual with dispensed medications.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-2-minimal-history</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-data</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle" class="emph0 summary">Bundle</span><span id="_Parameters_parameter_resource_Bundle" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">bundle-history-data-2-minimal</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="leastEmph">@id</span>: &nbsp;<span class="valueEmph">meddispense-res-2</span></span></span><span style="display:inline-block"><span class="emph2">fullUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[3]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-2-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The pharmacy that dispensed the reported medication: Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span></span></span></span><br/></span></span></span><br/></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-3-patient-not-found-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation. This example illustrates an exception situation where the PDMP Responder couldn't retrieve data from its state PDMP.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-3-patient-not-found</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">outcome</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_OperationOutcome" class="emph0 summary">OperationOutcome</span><span id="_Parameters_parameter_resource_OperationOutcome" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">100</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_OperationOutcome_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_OperationOutcome_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">No PDMP history was found for the submitted patient</span></span></span><br><span style="display:inline-block"><span class="emph1">issue</span><span style="display:inline-block"><span class="emph2">severity</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">information</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">informational</span></span></span><span style="display:inline-block"><span class="emph2">details</span><span style="display:inline-block"><span class="emph3">coding</span></span></span><span style="display:inline-block"><span class="emph4">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXStatusCode</span></span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">no-data</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">No Data</span></span></span><br><span style="display:inline-block"><span class="emph2">diagnostics</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">No PDMP history was found for the submitted patient</span></span></span></span></span></span><br/></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-4-link-response-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation. This example illustrates an exception situation where the PDMP Responder couldn't retrieve data from its state PDMP.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-4-link-response</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-link</span></span><span style="display:inline-block"><span class="emph2">valueUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://pdmp.example.org/response/013050650054450</span></span></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-5-pre-stage-response-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation. This example illustrates an exception situation where the PDMP Responder couldn't retrieve data from its state PDMP.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-5-pre-stage-response</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-retrieval-key</span></span><span style="display:inline-block"><span class="emph2">valueString</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">0938e860-2f61-433b-982a-9044bd2f42d5</span></span></span><br><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">outcome</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_OperationOutcome" class="emph0 summary">OperationOutcome</span><span id="_Parameters_parameter2_resource_OperationOutcome" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4d76ff54-21d1-419f-9ec1-233cfbd45b0e</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_OperationOutcome_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_OperationOutcome_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Pre-stage request was accepted successfully</span></span></span><br><span style="display:inline-block"><span class="emph1">issue</span><span style="display:inline-block"><span class="emph2">severity</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">information</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">informational</span></span></span><span style="display:inline-block"><span class="emph2">details</span><span style="display:inline-block"><span class="emph3">coding</span></span></span><span style="display:inline-block"><span class="emph4">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/CodeSystem/temporary-pdmp-response-status</span></span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-accepted</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Pre-Stage Request Accepted</span></span></span></span></span></span><br/></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-6-non-fatal-warning-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation. This example illustrates an exception situation where the PDMP Responder couldn't retrieve data from its state PDMP.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-6-non-fatal-warning</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-link</span></span><span style="display:inline-block"><span class="emph2">valueUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://pdmp.example.org/response/976a5495-72b6-4ed2-b913-a7dc21e7e5e0</span></span></span><br><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">outcome</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_OperationOutcome" class="emph0 summary">OperationOutcome</span><span id="_Parameters_parameter2_resource_OperationOutcome" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">86b95d37-653b-4d46-9af1-02f43eba4f72</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_OperationOutcome_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_OperationOutcome_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Incomplete results: History includes only information from the MN PDMP. Iowa PDMP did not respond within the timeout window</span></span></span><br><span style="display:inline-block"><span class="emph1">issue</span><span style="display:inline-block"><span class="emph2">severity</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">warning</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">incomplete</span></span></span><span style="display:inline-block"><span class="emph2">details</span><span style="display:inline-block"><span class="emph3">coding</span></span></span><span style="display:inline-block"><span class="emph4">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXStatusCode</span></span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">error</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Error</span></span></span><br><span style="display:inline-block"><span class="emph2">diagnostics</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Incomplete results: History includes only information from the MN PDMP. Iowa PDMP did not respond within the timeout window</span></span></span></span></span></span><br/></span></div>

<hr>

---

// File: input/pagecontent/Parameters-pdmp-history-output-parameters-7-fatal-error-intro.md

This is an example of a Parameters resource used in the response to the Patient/$pdmp-history operation. This example illustrates an fatal exception situation causing the PDMP Responder to stop processing the request.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-output-parameters-7-fatal-error</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">outcome</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_OperationOutcome" class="emph0 summary">OperationOutcome</span><span id="_Parameters_parameter_resource_OperationOutcome" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">86b95d37-653b-4d46-9af1-02f43eba4f72</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_OperationOutcome_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_OperationOutcome_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Incomplete results: A system error occurred during processing</span></span></span><br><span style="display:inline-block"><span class="emph1">issue</span><span style="display:inline-block"><span class="emph2">severity</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">error</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">exception</span></span></span><span style="display:inline-block"><span class="emph2">details</span><span style="display:inline-block"><span class="emph3">coding</span></span></span><span style="display:inline-block"><span class="emph4">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXStatusCode</span></span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">error</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Error</span></span></span><br><span style="display:inline-block"><span class="emph2">diagnostics</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">An unexpected system error occurred during processing. Please resubmit.</span></span></span></span></span></span><br/></div>

<hr>

---

// File: input/pagecontent/Patient-pdmp-patient-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">Patient</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-patient-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></div>

<hr>

---

// File: input/pagecontent/Patient-pdmp-patient-2-veterinary-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">Patient</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-patient-2-veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/patient-animal</span></span></span><span style="display:inline-block"><span class="emph2">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">species</span></span></span><span style="display:inline-block"><span class="emph3">valueCodeableConcept</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Veterinary Patient</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Medical record number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://vet-medical.example.org/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10035406</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fido</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></div>

<hr>

---

// File: input/pagecontent/Patient-pdmp-patient-3-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">Patient</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-patient-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Medical Record Number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://Highview.org/EHR/patient/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">28-145-2249</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Thomas</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln #23</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></div>

<hr>

---

// File: input/pagecontent/profiles.md

﻿---
title: Profiles defined as part of this Guide
layout: default
active: profiles
---
### Profiles

The following Profiles have been defined for this implementation guide.

{% include list-profiles.xhtml %}

<br />


### Extensions

These extensions have been defined for this implementation guide.


{% include list-extensions.xhtml %}

<!--

{ % include link-list.md % }
-->

<br />


---

// File: input/pagecontent/RelatedPerson-relatedperson-2-veterinary-intro.md

This example illustrates how the owner of an animal patient is represented in a RelatedPerson resource

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">RelatedPerson</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">relatedperson-2-veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson</span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">DL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Driver&#39;s license number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:oid:2.16.840.1.113883.4.3.25</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">M231-64600-565-55</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">patient</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patient/pdmp-patient-2-veterinary</span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></div>

<hr>

<p></p>

---

// File: input/pagecontent/security.md


#### Security Considerations for Operations and Messaging
In each of the exchanges described in this guide, the PDMP Requester **SHALL** provide proof of authorization. PDMP Requester and PDMP Responder systems **SHOULD** implement OAuth 2.0 access management in accordance with the [SMART Backend Services: Authorization Guide](https://hl7.org/fhir/uv/bulkdata/authorization), as the exchanges in this guide do not require user access authorization and may run autonomously.

<p></p>

#### Security Considerations for CDS Hooks and SMART on FHIR Apps

Provider Systems and REMS Administrators **SHALL** follow security guidance defined in...
- the CDS Hooks [Security and Safety](https://cds-hooks.hl7.org/2.0/#security-and-safety) section
- the [SMART App Launch  Implementation Guide](https://hl7.org/fhir/smart-app-launch).

<p></p>

#### Other Security Considerations
In addition, implementers are expected to...
- follow core [FHIR security principles](https://www.hl7.org/fhir/security.html).
 
- protect patient privacy as described in [FHIR Security and Privacy Considerations](https://www.hl7.org/fhir/secpriv-module.html).

<p></p>
<p></p>


---

// File: input/pagecontent/StructureDefinition-pdmp-bundle-history-result-intro.md

**Notes:**

**Resource entry cardinality.** The only required resource in the Bundle is Patient, and all others are optional. This reflects that PDMP history can include information about dispensations and/or administrations--with each type of event represented by different sets of FHIR resources. 

In addition, profiles for the resources used to represent each kind of event allow for variability in representing the participants and related information; for example, the prescription for a dispensed drug can be represented with identifier in the MedicationDispense.authorizingPrescription element or by a reference to a MedicationRequest resource.

<p></p>

**Population when multiple patient records are returned.** The PDMP Responder **SHALL** include multiple Patient resources when a single positive match to the patient data submitted in the request cannot be made or when PDMP history from multiple data sources is returned and the associated patient specifics cannot be resolved to a single Patient resource.

In this situation, MedicationDispense, MedicationAdministration and other returned resources **SHALL** reference the appropriate Patient resource in elements that reference the patient.

<p></p>

**Noting the PDMP data source in returned resources.** All resources returned in this Bundle **SHALL** reference their source (e.g., the state PDMP from which the data was obtained) in the .meta.source element.

<p></p>

**History Result Bundle not created if history is not found.** If the PDMP Responder is unable to locate information for the requested patient it **SHALL NOT** create this Bundle or populate the pdmp-history-data output parameter.

Instead, the PDMP Responder indicates that history was not found using the response's outcome parameter. See [this section](submission-options.html#successful-processing-that-does-not-locate-pdmp-history-for-the-requested-patient) for additional response specifics and an example.

<p></p>

**Request information is not echoed in the History Result Bundle.** This Bundle is intended to contain only information from the PDMP Responder's information sources. It **SHALL NOT** be used to echo back patient or other information submitted in the pdmp-history request.

<p></p>

**Use of PDMP and US Core profiles.** Resources returned in this Bundle **SHALL** conform to the profiles identified below for the resource types noted here. 

Additional resource types **MAY** be returned if needed by the PDMP Responder to include aspects of PDMP history that cannot be represented by those listed below. When returning an additional resource type for which there is a US Core profile, the US Core profile **SHOULD** be used.

<p></p>


---

// File: input/pagecontent/StructureDefinition-pdmp-medicationadministration-intro.md

**Important elements in this profile:**

- **MedicationAdministration.subject**
  - A reference to the patient receiving the medication SHALL be populated
- **MedicationAdministration.medicationCodeableConcept (or Medication reference)**
  - The administered medication SHALL be populated, including the associated RxNorm code and NDC11, as available, reflecting the medication name, strength and dose form
  - For information concerning mapping between NDC and RxNorm, see   [Mapping NDC, RXCUI, and Drug Names in the RxNorm Files](https://www.nlm.nih.gov/research/umls/user_education/quick_tours/RxNorm/ndc_rxcui/NDC_RXCUI_DrugName.html)
- **MedicationAdministration.performer**
  - The party that administered the medication SHALL be populated using either a reference to the performer (US Core Practitioner resource) or an identifier specifying both the provider's identifier value and system
- **MedicationAdministration.request**
  - A reference to the authorizing MedicationRequest SHOULD be populated
- **MedicationAdministration.dosage.dose**
  - The dose administered, including numeric value and units SHALL be populated
  - When the dose is stated in terms of "eaches" (e.g., tablets, capsules, etc.), populate only the dose.unit value with the text "each". Do not populate the dose.system or dose.code values
- **MedicationAdministration.effective**
  - The date(s) that the medication was adminstered to the patient SHALL be populated
- **MedicationAdministration.medicationCodeableConcept.userSelected**
  - The userSelected element associated with the drug code received from administration data source
  - The userSelected element associated with any additional drug codes provided SHALL NOT be populated
- **MedicationAdministration.authorizingPrescription.identifier**
  - This element SHOULD be populated with the authorizing prescription's prescriber-system-assigned order number, if known

  <p></p>

---

// File: input/pagecontent/StructureDefinition-pdmp-medicationdispense-intro.md

**Important elements in this profile:**

- **MedicationDispense.subject**
  - A reference to the patient receiving the medication SHALL be populated
- **MedicationDispense.medicationCodeableConcept (or Medication reference)**
  - The dispensed medication SHALL be populated, including the associated RxNorm code and NDC11, as available, reflecting the medication name, strength and dose form
  - For information concerning mapping between NDC and RxNorm, see   [Mapping NDC, RXCUI, and Drug Names in the RxNorm Files](https://www.nlm.nih.gov/research/umls/user_education/quick_tours/RxNorm/ndc_rxcui/NDC_RXCUI_DrugName.html)
- **MedicationDispense.performer**
  - The party that dispensed the medication SHALL be populated using either a reference to the performer (PDMP Organization-Pharmacy or US Core Practitioner resource) or an identifier specifying both the identifier value and system
- **MedicationDispense.authorizingPrescription**
  - A reference to the authorizing MedicationRequest SHOULD be populated
- **MedicationDispense.quantity**
  - Quantity, including numeric value and units SHALL be populated
  - When the dispense quantity is stated in terms of "eaches" (e.g., tablets, capsules, etc.), populate only the quantity.unit value with the text "each". Do not populate the quantity.system or quantity.code values
- **MedicationDispense.daysSupply**
  - Dispensed days supply SHALL be populated
- **MedicationDispense.whenPrepared**
  - The date that the medication was prepared SHALL be populated in the whenPrepared element
- **MedicationDispense.medicationCodeableConcept.userSelected**
  - The userSelected element associated with the drug code received from the pharmacy or other dispensation data source
  - The userSelected element associated with any additional drug codes provided SHALL NOT be populated
- **MedicationDispense.authorizingPrescription.identifier**
  - This element SHOULD be populated with the authorizing prescription's pharmacy-assigned prescription number, if known; otherwise it should be populated with the authorizing prescription's prescriber-system-assigned order number, if known

<p></p>
<p></p>

**Technical note:**

A rule defined in the base MedicationDispense StructureDefinition causes an error to be produced when a valid date is present in MedicationDispense.whenPrepared and a [Data Absent Reason extension](https://hl7.org/fhir/R4/extension-data-absent-reason.html) is used in place of MedicationDispense.whenHandedOver. This rule (invariant mdd-1), which asserts that the whenPrepared date must precede the whenHandedOver date, interprets whenHandedOver's value as 'null' in this situation, causing the test to fail. A request has been submitted to adjust the rule to accommodate this valid use of the Data Absent Reason extension in a future FHIR release.
 
<p></p>
<p></p>


---

// File: input/pagecontent/StructureDefinition-pdmp-messageheader-request-intro.md


**Important elements in this profile:**

- **MessageHeader.eventCoding.code**
  - The code system, pdmp-event-type and value, pdmp-patient-request identify the message as a PDMP request
- **MessageHeader.focus**
  - This element references a Parameters resource conforming to the [PDMP Parameters - Request](StructureDefinition-pdmp-parameters-request.html) profile
<p></p>

**Example.** This profile is illustrated in the following full message example:
- [PDMP Request 1](Bundle-pdmp-bundle-request-message-1.html)

<p></p>

---

// File: input/pagecontent/StructureDefinition-pdmp-messageheader-response-intro.md


**Important elements in this profile:**

- **MessageHeader.eventCoding.code**
  - The code system, pdmp-event-type and value, pdmp-patient-response identify the message as a PDMP response
- **MessageHeader.focus**
  - This element references a Bundle resource containing medication dispenses administrations associated with the patient identified in the request 
<p></p>

**Example.** This profile is illustrated in the following full message example:
- [PDMP Response 1](Bundle-pdmp-bundle-response-message-1.html)

<p></p>

---

// File: input/pagecontent/StructureDefinition-pdmp-organization-pharmacy-intro.md

**Important elements in this profile:**

- **Organization.identifier**
  - An identifier SHALL be provided for the pharmacy. NPI, DEA, NCPDP Provider ID or state license number are preferred
- **Organization.name**
  - The pharmacy name SHALL be populated
- **Organization.address and Organization.telecom**
  - Contact information for the pharmacy SHOULD be populated, to enable the pharmacy to be reached for questions if necessary

<p></p>

---

// File: input/pagecontent/StructureDefinition-pdmp-parameters-request-intro.md


**Example.** This profile is illustrated in the following full message example:
- [PDMP Request 1](Bundle-pdmp-bundle-request-message-1.html)

<p></p>

---

// File: input/pagecontent/StructureDefinition-pdmp-patient-intro.md

**Required elements in this profile**

- **name** The patient's family name and a given name
- **birthDate** A full birthdate including year, month and day
- **identifier** At least one patient identifier

<p></p>

**Additional _Must Support_ elements**
In addition to the elements identified as Must Support in the US Core Patient profile, this profile includes:
- **address.country** 
- **birthDate** A full birthdate including year, month and day
- **identifier** At least one patient identifier

**Note regarding optional Patient elements**

 Implementers **SHALL** follow jurisdictional rules and norms for populating patient information in a PDMP request, including the elements that the implementer's jurisdiction requires. Note that supplying additional information beyond those requirements might impact the PDMP Responder's patient matching process--which may be optimized for its jurisdiction's rules.
 
<p></p>



---

// File: input/pagecontent/submission-options.md

This section describes how a PDMP Requester can retrieve a patient's information from a PDMP Responder by calling the pdmp-history operation directly or by submitting that operation request using FHIR messaging.

<p></p>

### PDMP History Operation

The PDMP request and response are accomplished using a FHIR Operation ([pdmp-history](OperationDefinition-pdmp-history.html)) which is invoked by POSTing a FHIR Parameters resource containing patient and requesting provider details to the PDMP Responder's Patient/$pdmp-history endpoint. In response, the PDMP Responder gathers PDMP history information and returns it within another Parameters resource.

The PDMP history may be returned as... 
- discrete FHIR data returned in the operation response's pdmp-history-data parameter

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and / or

- a URL to access a report containing PDMP history--returned in the response's pdmp-history-link parameter.

A PDMP Responder may choose to implement either or both of those options, with consideration for applicable state rules or other requirements.

Also contained in the response are: 
- an optional identifier to be submitted in a subsequent request, in the  pre-stage-retrieval-key parameter
- processing information in the form of a FHIR OperationOutcome resource, returned in the outcome parameter.

<p></p>

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: High-level PDMP Operation Flow and Content</strong></figcaption>
  <p>
  <img src="operation-flow.png" style="float:none">  
  </p>
</figure>
</div>

<p></p>

Use of an operation enables the process to support current PDMP processing requirements including:

- submission of requesting provider and delegate details and facility information which are used for authorization and record-keeping 
  - a delegate is an individual authorized by a provider or pharmacist who is requesting the PDMP information on their behalf.  For example, an intake or triage person in an emergency department may be a delegate for a physician in that department
- support for a pre-stage-only request processing option
  - A pre-stage-only request (pre-stage-only = true) directs the PDMP Responder to gather information for the requested patient and stage it for retrieval via a subsequent pdmp-history call
- support for the return of PDMP history in the form of discrete FHIR data
- support for the return of a URL for accessing a PDMP history.

**Operation definition.** See the [pdmp-history OperationDefinition](OperationDefinition-pdmp-history.html) for an overview of the operation's inputs and outputs, and the following Parameter definitions for additional details:
- [request parameter details](StructureDefinition-pdmp-parameters-request.html)
- [response parameter details](StructureDefinition-pdmp-parameters-response.html)

**Submission options.** The operation can be called in two ways:
- **direct operation call** using a RESTful POST to the PDMP Responder's [base]/Patient/$pdmp-history endpoint
- **using FHIR messaging**, by submitting the operation's request parameters within a bundle that also includes a MessageHeader that references the pdmp-history operation definition. See [the messaging section below](submission-options.html#message-submission) for details.

<p></p>

### Message submission
The PDMP  pdmp-history operation may also be invoked using FHIR messaging. The PDMP Requester submits the operation's request parameters within a FHIR Bundle that also includes a MessageHeader. The event element in the MessageHeader references the pdmp-history operation definition.

A message-based request is illustrated below:

<p></p>

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: PDMP Message Flow</strong></figcaption>
  <p>
  <img src="message-flow.png" style="float:none">  
  </p>
</figure>
</div>

<p></p>

The messaging method may also be used to transmit requests via an intermediary such as an e-prescribing network or other healthcare data exchange. The MessageHeader supplies elements that the participants may use to: 
- specify which PDMP Responder to forward the message to
- link requests and responses during routing
- log processing information .

Below is an illustration of submission through an intermediary:

<p></p>

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: Intermediary Message Flow</strong></figcaption>
  <p>
  <img src="intermediary-flow.png" style="float:none">  
  </p>
</figure>
</div>

<p></p>

#### Request message content

The PDMP Request message includes a MessageHeader and a Parameters resource containing the information needed to retrieve a single individual's information from a PDMP Responder (see [request parameter details](StructureDefinition-pdmp-parameters-request.html)). Note that the MessageHeader.event of the request references the same [pdmp-history operation](OperationDefinition-pdmp-history.html) that can be invoked directly using a RESTful POST to in non-messaging environments.

Further details and examples are at [PDMP Bundle - Request Message](StructureDefinition-pdmp-bundle-request-message.html) 

<p></p>

#### Response message content

The PDMP Response message contains a MessageHeader and the [response Parameters resource](StructureDefinition-pdmp-parameters-request.html) defined in the [pdmp-history operation](OperationDefinition-pdmp-history.html).

Further details and examples are at [PDMP Bundle - Response Message](StructureDefinition-pdmp-bundle-response-message.html) 

<p></p>

#### Message submission details
Invoking the pdmp-history operation via FHIR messaging is accomplished following the guidance provided in the [Invoking Operations via Messages](http://hl7.org/fhir/messaging.html#operations) section of the FHIR specification.

**MessageHeader population**

The MessageHeader.event of the request message references the [pdmp-history operation](OperationDefinition-pdmp-history.html). Specifically:
- MessageHeader.eventCoding.system = "urn:ietf:rfc:3986"
- MessageHeader.eventCoding.code = "http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history"

**Submission endpoint and parameters**

The request message is submitted using  HTTP POST to the PDMP Responder using the standard FHIR $process-message operation...
  - URL: [base]/$process-message
  - Details from the base FHIR specification are [here](https://www.hl7.org/fhir/operation-messageheader-process-message.html).

Per the standard, the $process-message operation **SHALL** contain a single content parameter consisting of a FHIR message (a Bundle containing a MessageHeader resource).  

The async and response-url Process Message parameters may be used when supported by the PDMP Responder.

PDMP messages are exchanged using standard FHIR messaging features. 
- See [Messaging Using FHIR Resources](https://www.hl7.org/fhir/messaging.html) for messaging conventions contained in the FHIR specification.

<p></p>

### Returning Processing Information and Exceptions

This section provides guidance for PDMP Responders for responding in situations where the request cannot be processed in part or in whole, or where there is other processing information to be returned in the operation response.

All scenarios described below communicate processing information using the operation's outcome parameter, which holds an OperationOutcome resource that gives the details of one or more processing aspects. This OperationOutcome contains:

* a definition of severity in the OperationOutcome.issue.severity field which must come from [this FHIR value set](https://hl7.org/fhir/R4/valueset-issue-severity.html). 
* a definition of the type of error in the OperationOutcome.issue.code element (e.g., incomplete transient error, business-rule processing error, etc.) which must come from [this FHIR value set](https://hl7.org/fhir/R4/valueset-issue-type.html).
* additional diagnostic details of the error or other processing condition in OperationOutcome.diagnostics property
* an OperationOutcome.issue.details.coding.code value to further define the processing condition
* a human-readable version of the condition's details in the OperationOutcome.issue.details.coding.display field.

PDMP Responders are expected to utilize codes and descriptive text in the .diagnostics.issue.details element that meet their existing conventions and/or jurisdictional requirements. One iteration of this element **SHOULD** contain a code from the [PDMP Response Status Codes](ValueSet-pdmp-response-status.html) value set.

<p></p>
<p></p>

_Below are expectations for returning processing information in common PDMP scenarios:_

<p></p>

#### Successful processing that does not locate PDMP history for the requested patient

When a PDMP Responder system successfully completes processing of a PDMP request but has no PDMP history to return (e.g., if the requested patient is not found) it  **SHALL** respond by returning an OperationOutcome resource within the outcome operation parameter that describes the reason that no history was returned, as show in [this example](Parameters-pdmp-history-output-parameters-3-patient-not-found.html). 

In this scenario, one iteration of issue.details.code **SHOULD** be populated with the no-data code from the [response status value set](ValueSet-pdmp-response-status.html)

A pdmp-history-link **MAY** also be populated in this scenario, referencing a human-readable report that states that the patient was not found.

<p></p>

#### Successful acceptance of a pre-stage-only request

The PDMP Requester populates the pre-stage-only input parameter with true to request that the PDMP Responder gather information for the submitted patient and stage it for retrieval via a subsequent pdmp-history call. The PDMP Responder returns an operation response with the outcome parameter populated to indicate that the request was accepted, as show in [this example](Parameters-pdmp-history-output-parameters-5-pre-stage-response.html).

In this scenario, one iteration of issue.details.code **SHOULD** be populated with the pre-stage-accepted code from the [response status value set](ValueSet-pdmp-response-status.html)

There is no requirement for PDMP Responders to accept pre-stage-only requests.  Support for pre-stage requests is determined when the integration is being built between the PDMP Requestor (e.g., an EHR) and the PDMP Responder. 
<p></p>

#### Non-fatal processing exception

If the PDMP Responder encounters a non-fatal exception when executing a request that impacts the content of the response the system **SHALL** include an OperationOutcome within the operation's outcome parameter describing the issue and how the response content was impacted, as illustrated in [this example](Parameters-pdmp-history-output-parameters-6-non-fatal-warning.html). 

In this scenario, one iteration of issue.details.code **SHOULD** be populated with the error code from the [response status value set](ValueSet-pdmp-response-status.html)

<p></p>

#### Error preventing completion of response processing

When a PDMP Responder system encounters an error that prevents it from completing processing of a PDMP request, it  **SHALL** respond by returning an OperationOutcome resource within the outcome operation parameter that describes the nature of the failure, as show in [this example](Parameters-pdmp-history-output-parameters-7-fatal-error.html).

In this scenario, one iteration of issue.details.code **SHOULD** be populated with the error code from the [response status value set](ValueSet-pdmp-response-status.html)

<p></p>
<p></p>

---

// File: input/pagecontent/us-core-profiles.md

### US Core Profiles Used With This Guide

#### Base profiles for PDMP-specific content

This guide incorporates US Core profiles as the base for the following resource profiles that further specify content exchange between PDMP Requesters and PDMP Responders:

<p></p>

<table class="grid">
    <tbody>
        <tr>
              <td style="font-weight:bold;text-align:center">PDMP Profile</td>
            <td style="font-weight:bold;text-align:center">Base US Core Profile</td>
        </tr>
        <tr>
            <td><a href="StructureDefinition-pdmp-patient.html">PDMP Patient</a></td>
            <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html">US Core Patient</a></td>
        </tr>
        <tr>
            <td><a href="StructureDefinition-pdmp-medicationdispense.html">PDMP MedicationDispense</a></td>
            <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-medicationdispense.html">US Core MedicationDispense</a></td>
        </tr>
        <tr>
            <td><a href="StructureDefinition-pdmp-organization-pharmacy.html">PDMP Pharmacy</a></td>
            <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html">US Core Organization</a></td>
        </tr>   
    </tbody>
</table>

<p></p>

#### Required profiles for where PDMP-specific content hasn't been defined

Implementers SHALL conform to the following US Core profiles in PDMP interactions as indicated below:

<p></p>

<table class="grid">
    <tbody>
        <tr>
              <td style="font-weight:bold;text-align:center">US Core Profile</td>
            <td style="font-weight:bold;text-align:center">Use in PDMP Interactions</td>
        </tr>
        <tr>
            <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html">US Core Practitioner</a></td>
            <td>Represents the authorized provider and delegate (if exchanged) requesting an individual's PDMP history. 
            <p></p>
            Also may represent an administering, dispensing or prescribing provider in a PDMP response, if applicable.</td>
        </tr>
        <tr>
            <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-practitionerrole.html">US Core PractitionerRole</a></td>
            <td>Provides practice information for the authorized provider and delegate</td>
        </tr>
        <tr>
             <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html">US Core Organization</a></td>
            <td>Represents the organization of the authorized provider and delegate
            <p></p>
            Also may represent an organization participating in drug administration or dispensing in a PDMP response, if applicable.
            </td>
       </tr>   
        <tr>
             <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-relatedperson.html">US Core RelatedPerson</a></td>
            <td>Represents the owner of an animal, if that animal is submitted as the patient in a PDMP request</td>
       </tr>   
         <tr>
             <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html">US Core MedicationRequest</a></td>
            <td>Represents a prescription, which may be referenced from a MedicationDispense or MedicationAdministration.</td>
       </tr>   
        <tr>
             <td><a href="https://hl7.org/fhir/us/core/StructureDefinition-us-core-medication.html">US Core Medication</a></td>
            <td>May be used to represent a dispensed or administered drug in a PDMP response as an alternative to the coded <code>medicationCodeableConcept</code> representation in a MedicationDispense or MedicationAdministration, for example when communicating compounded drugs.</td>
       </tr>   
    </tbody>
</table>

<p></p>

#### Additional information exchanged in PDMP interactions

This guide does not prohibit PDMP participants from exchanging additional information beyond what it details, for example to meet jurisdictional requirements or to support additional use cases. 

When other resources not profiled in this implementation guide or listed above are exchanged between a PDMP Requester and PDMP Responder, they **SHALL** conform to US Core profiles where applicable profiles exist.

<p></p>

*See the [full list of US Core profiles](https://www.hl7.org/fhir/us/core/profiles-and-extensions.html)*

<p></p>
<p></p>




---

// File: input/pagecontent/use-case.md

### Abstract Use Case
This guide centers around a single use case, in which a PDMP Requestor (prescriber or pharmacist) accesses a Patient’s PDMP history from a PDMP Responder (a state PDMP or related system(s))

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: IG Scope</strong></figcaption>
  <p>
  <img src="pdmp-overview-scope.png" style="float:none">  
  </p>
</figure>
</div>

All other interactions between the parties above--such as a prescription being sent from the prescriber to the dispensing pharmacy, or the pharmacy submitting dispensations to the PDMP--are critical to the overall PDMP process but are not in-scope for this IG (see [Scope](index.html#scope)). 

<p></p>


### Use Case 1 - *A simple PDMP request/response*


Sam August comes into the Highview Clinic complaining about his right hand and wrist pain after he fell from a ladder.  He is seen by Dr. Adam Amster.  After examining Mr. August, Dr. Amster's assessment is a sprained wrist and a broken right ring finger.  Mr. Amster is provided a wrist brace and his affected finger is immobilized with a splint.  Dr. Amster determines that a pain medication is appropriate, and 
1. Dr. Amster enters a prescription for Acetaminophen with Codeine 325 mg / 30 mg into the Highview Clinic EHR.  
1. EHR workflow checks determine a PDMP review is needed. 
1. Dr. Amster is presented with a prompt to request Mr. August's PDMP history.
1. Dr. Amster responds to the prompt to request the PDMP History.
1. The EHR creates a pdmp-bundle-request.
1. The EHR sends the request to the State PDMP (PDMP Responder).
1. The PDMP receives and processes the request. 
1. The PDMP responds with a pdmp-bundle-response to the EHR.  
1. The EHR receives the pdmp-bundle-response, formats it appropriately, and presents it to Dr. Amster.
1. Dr. Amster reviews and acknowledges the PDMP report.

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2: Use Case 1 sequence diagram</strong></figcaption>
  <p>
  <img src="use-case-1-sequence.png" style="float:none">  
  </p>
</figure>
</div>

<p></p>


### Use Case 2 - *Illustrating a pre-stage PDMP request/response*


Sam August presents at the Highview Medical Center Emergency Department complaining of severe pain in his right hand, wrist, and forearm after falling off of a ladder.  
1. Mr. August is admitted to the ED's EHR and triaged into the care service.
1. Per ED policy, the ED EHR submits a pre-stage PDMP request
    1. The EHR creates a pdmp-bundle-request with the input parameter pre-stage-only= true. 
    1. The EHR send the request to the State PDMP (PDMP Responder).
1. The PDMP receives and processes the request. 
1. The PDMP responds with a pdmp-bundle-response with the retrieval key in the output parameter pre-stage-retrieval-key to the EHR.

Mr. August is subsequently seen by Dr. Amster.  Dr. Amster's assessment is one or more fractures in the hand, wrist, and forearm.  Subsequent radiology images confirm fractures of the lower right ulna and multiple metacarpal and phalanges.  Dr. Amster orders casting of the right forearm and hand, and  

5. Dr. Amster enters a prescription for Acetaminophen with Codeine 325 mg / 30 mg into the ED's EHR.  
1. The EHR workflow checks determine a PDMP review is needed. 
1. The EHR presents Dr. Amster with a prompt to request Mr. August's PDMP history.
1. Dr. Amster responds to the prompt and requests the PDMP History.
1. The EHR creates a pdmp-bundle-request and *includes the pre-stage-retrieval-key, previously received, as an input parameter*.
1. The EHR sends the request to the State PDMP (PDMP Responder).
1. The PDMP uses the pre-stage-retrieval-key to retrieve the previously generated PDMP history. 
1. The PDMP responds with a pdmp-bundle-response, based upon the previously generated PDMP history, to the EHR.  
1. The EHR receives the pdmp-bundle-response, formats it appropriately, and presents it to Dr. Amster.
1. Dr. Amster reviews and acknowledges the PDMP report.


<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 3: Use Case 2 sequence diagram</strong></figcaption>
  <p>
  <img src="use-case-2-sequence.png" style="float:none">  
  </p>
</figure>
</div>

<p></p>

### Use Case 3 - *Illustrating a PDMP response including a URL*

The pdmp-bundle-response can include the PDMP history as discrete FHIR-formatted data, a URL link to a fully formatted PDMP history report, or both the discrete data and the link.  If discrete is sent, it can support additional Clinical Decision Support services in the EHR.  However, the EHR may not necessarily support visual formatting the PDMP may be required to follow (e.g., regulatory presentation requirements).  Thus, the PDMP may only send (or may be required to only send) a URL link to ensure that regulatory presentation requirements are enforced.

The use case sequence is the same as above, except for Use Case 1 step 9 and Use Case 2 step 13.  Instead of presenting the discrete data received in the pdmp-bundle-response, the EHR redirects the Dr. Amster via the URL link to the formatted PDMP History on the State PDMP (PDMP Responder)'s web server.  This alternate flow is shown in the follow diagram.

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 4: Use Case 3 sequence diagram</strong></figcaption>
  <p>
  <img src="use-case-3-sequence.png" style="float:none">  
  </p>
</figure>
</div>

<p></p>



---

// File: input/pagecontent/ValueSet-pdmp-opioid-treatment-code-intro.md

<p></p>

<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding code values.</b> This value set contains codes from a code system maintained by the Prescription Monitoring Information eXchange (PMIX) Standards Organization. To assist implementers, below are the codes at the time of publishing.
</p>
</blockquote>

<p></p>

<table class="codes">
    <tbody>
		<tr><td style="white-space:nowrap"><b>Code</b></td><td><b>System</b></td><td><b>Display</b></td></tr>
		<tr><td>01</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Not Used for Opioid Dependency Treatment</td></tr>
		<tr><td>02</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Used for Opioid Dependency Treatment</td></tr>
		<tr><td>03</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Pain Associated with Active and Aftercare Cancer Treatment</td></tr>
		<tr><td>04</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Palliative Care in Conjunction with a Serious Illness</td></tr>
		<tr><td>05</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>End-of-Life and Hospice Care</td></tr>
		<tr><td>06</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>A Pregnant Individual with a Pre-existing Prescription for Opioids</td></tr>
		<tr><td>07</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Acute Pain for an Individual with an Existing Opioid Prescription for Chronic Pain</td></tr>
		<tr><td>08</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Individuals Pursuing an Active Taper of Opioid Medications</td></tr>
		<tr><td>09</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Patient is Participating in a Pain Management Contract</td></tr>
		<tr><td>10</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Acute Opioid Therapy</td></tr>
		<tr><td>11</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Chronic Opioid Therapy</td></tr>
		<tr><td>99</td><td>http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</td><td>Other (trading partner agreed upon reason or not indiciated)</td></tr>
  </tbody>
</table>

<p></p>


---

// File: input/pagecontent/ValueSet-pdmp-patient-alert-category-code-intro.md

<p></p>

<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding code values.</b> This value set contains codes from a code system maintained by the Prescription Monitoring Information eXchange (PMIX) Standards Organization. To assist implementers, below are the codes at the time of publishing.
</p>
</blockquote>

<p></p>

<table class="codes">
    <tbody>
		<tr><td style="white-space:nowrap"><b>Code</b></td><td><b>System</b></td><td><b>Display</b></td></tr>
		<tr><td>01</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Suspected non-fatal overdose alert</td></tr>
		<tr><td>02</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Suspected fatal overdose alert</td></tr>
		<tr><td>03</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Doctor/pharmacy shopping alert</td></tr>
		<tr><td>04</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Overlapping prescription alert</td></tr>
		<tr><td>05</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>MME alert</td></tr>
		<tr><td>06</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Marijuana alert</td></tr>
		<tr><td>07</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Prescribing practice alert</td></tr>
		<tr><td>08</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Dispensing practice alert</td></tr>
		<tr><td>09</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Naloxone dispensing alert</td></tr>
		<tr><td>10</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Conviction alert</td></tr>
		<tr><td>11</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Law Enforcement alert</td></tr>
		<tr><td>12</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Patient contract alert</td></tr>
		<tr><td>99</td><td>http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</td><td>Unspecified Alert</td></tr>
</tbody>
</table>

<p></p>


---

// File: input/pagecontent/ValueSet-pdmp-response-status-intro.md

<p></p>

<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding code values.</b> This value set contains codes from a code system maintained by the Prescription Monitoring Information eXchange (PMIX) Standards Organization. To assist implementers, below are the codes at the time of publishing.
</p>
</blockquote>

<p></p>

<table class="codes">
    <tbody>
		<tr><td style="white-space:nowrap"><b>Code</b></td><td><b>System</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr>
		<tr><td>complete</td><td>http://terminology.hl7.org/CodeSystem/PMIXStatusCode</td><td>Complete</td><td>Data is available and returned for a person that matches the requested patient based on the information provided in the request</td></tr>
		<tr><td>no-data</td><td>http://terminology.hl7.org/CodeSystem/PMIXStatusCode</td><td>No Data</td><td>There is no data for a person that matches the requested patient based on the information provided in the request</td></tr>
		<tr><td>disallowed</td><td>http://terminology.hl7.org/CodeSystem/PMIXStatusCode</td><td>Disallowed</td><td>The requesting user's role is not permitted in the state from which they are requesting information</td></tr>
		<tr><td>error</td><td>http://terminology.hl7.org/CodeSystem/PMIXStatusCode</td><td>Error</td><td>An error occurred in request process either at the PDMP or hub level. This status would include hub or PDMP system errors as well as externally created faults. The hub should also send the specific error text</td></tr>
		<tr><td>deferred</td><td>http://terminology.hl7.org/CodeSystem/PMIXStatusCode</td><td>Deferred</td><td>The response cannot be returned at this time. This may be caused by the request going to a manual process (placed in a queue for a person to review and reconcile) in a state PDMP system</td></tr>
		<tr><td>version-mismatch</td><td>http://terminology.hl7.org/CodeSystem/PMIXStatusCode</td><td>Version Mismatch</td><td>Differences in the versions of the hub software being used by two states cause an error</td></tr>
		<tr><td>pre-stage-accepted</td><td>http://hl7.org/fhir/us/pdmp/CodeSystem/temporary-pdmp-response-status</td><td>Pre-Stage Request Accepted</td><td>The request to pre-stage PDMP history results for the submitted individual has been accepted</td></tr>
</tbody>
</table>

<p></p>


---

// File: input/pagecontent/ValueSet-pdmp-rx-transmission-method-intro.md

<p></p>

<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding code values.</b> This value set contains codes from a code system maintained by the Prescription Monitoring Information eXchange (PMIX) Standards Organization. To assist implementers, below are the codes at the time of publishing.
</p>
</blockquote>

<p></p>

<table class="codes"><tbody><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>System</b></td><td><b>Display</b></td></tr>
<tr><td style="white-space:nowrap">01</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Written Prescription</td></tr>
<tr><td style="white-space:nowrap">02</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Telephone Prescription</td></tr>
<tr><td style="white-space:nowrap">03</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Telephone Emergency Prescription</td></tr>
<tr><td style="white-space:nowrap">04</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Fax Prescription</td></tr>
<tr><td style="white-space:nowrap">05</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Electronic Prescription</td></tr>
<tr><td style="white-space:nowrap">06</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Transferred/Forwarded Prescription</td></tr>
<tr><td style="white-space:nowrap">99</td><td>http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</td><td>Other</td></tr></tbody></table>

<p></p>


---

// File: input/pagecontent/ValueSet-pdmp-species-type-intro.md

<p></p>

<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding code values.</b> This value set contains codes from a code system maintained by the Prescription Monitoring Information eXchange (PMIX) Standards Organization. To assist implementers, below are the codes at the time of publishing.
</p>
</blockquote>

<p></p>

<table class="codes">
    <tbody>
		<tr><td style="white-space:nowrap"><b>Code</b></td><td><b>System</b></td><td><b>Display</b></td></tr>
		<tr><td>01</td><td>http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode</td><td>Human</td></tr>
		<tr><td>02</td><td>http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode</td><td>Veterinary Patient</td></tr>
</tbody>
</table>

<p></p>


---

// File: input/pagecontent/ValueSet-pmix-method-of-payment-intro.md

<p></p>

<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding code values.</b> This value set contains codes from a code system maintained by the Prescription Monitoring Information eXchange (PMIX) Standards Organization. To assist implementers, below are the codes at the time of publishing.
</p>
</blockquote>

<p></p>

<table class="codes">
    <tbody>
		<tr><td style="white-space:nowrap"><b>Code</b></td><td><b>System</b></td><td><b>Display</b></td></tr>
		<tr><td>01</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Private Pay (Cash, Charge, Credit Card)</td></tr>
		<tr><td>02</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Medicaid</td></tr>
		<tr><td>03</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Medicare</td></tr>
		<tr><td>04</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Commercial Insurance</td></tr>
		<tr><td>05</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Military Installations or VA</td></tr>
		<tr><td>06</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Worker's Compensation</td></tr>
		<tr><td>07</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Indian Nations</td></tr>
		<tr><td>99</td><td>http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</td><td>Other</td></tr>
</tbody>
</table>

<p></p>


---

// File: input/fsh/aliases.fsh

// Core FHIR resources and extensions
Alias: $detectedissue = http://hl7.org/fhir/StructureDefinition/DetectedIssue
Alias: $operation-outcome = http://hl7.org/fhir/StructureDefinition/OperationOutcome
Alias: $fhir-resource = http://hl7.org/fhir/StructureDefinition/Resource
Alias: $patient-animal-extension = http://hl7.org/fhir/StructureDefinition/patient-animal

// FHIR terminology
Alias: $medication-admin-status = http://hl7.org/fhir/ValueSet/medication-admin-status
Alias: $medicationdispense-status = http://hl7.org/fhir/ValueSet/medicationdispense-status
Alias: $taxonomy = http://nucc.org/provider-taxonomy
Alias: $operation-event-type = urn:ietf:rfc:3986
Alias: $patient-status = http://hl7.org/fhir/ValueSet/patient-status
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $ndc = http://hl7.org/fhir/sid/ndc

// US Core profiles
Alias: $us-core-encounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: $us-core-medication = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication
Alias: $us-core-medicationdispense = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationdispense
Alias: $us-core-medicationrequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest
Alias: $us-core-organization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: $us-core-patient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: $us-core-practitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $us-core-practitionerrole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $us-core-relatedperson = http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson

// US Core terminology
Alias: $us-core-medication-clinical-drug = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4

// PDMP messaging-related profiles
Alias: $pdmp-bundle-history-result = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result
Alias: $pdmp-bundle-request-message = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message
Alias: $pdmp-bundle-response-message = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message
Alias: $pdmp-messageheader-request = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-request
Alias: $pdmp-messageheader-response = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-response

// PDMP operation-related profiles
Alias: $pdmp-parameters-request = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request
Alias: $pdmp-parameters-response = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response

// PDMP content profiles
Alias: $pdmp-extension-lme = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme
Alias: $pdmp-extension-mme = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-mme
Alias: $pdmp-extension-rx-fill-number = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number
Alias: $pdmp-extension-rx-transmission-method = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method
Alias: $pdmp-extension-method-of-payment = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment
Alias: $pdmp-extension-opioid-treatment-code = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code
Alias: $pdmp-medicationadministration = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationadministration
Alias: $pdmp-medicationdispense = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense
Alias: $pdmp-patient = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient
Alias: $pdmp-pharmacy = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy

// PDMP terminology
Alias: $pdmp-response-status-cs = http://hl7.org/fhir/us/pdmp/CodeSystem/temporary-pdmp-response-status
Alias: $pmix-response-status-cs = http://terminology.hl7.org/CodeSystem/PMIXStatusCode
Alias: $pmix-transmission-cs = http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType
Alias: $pmix-species-type-cs = http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode
Alias: $pmix-opioid-treatment-code-cs = http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode
Alias: $pmix-method-of-payment-cs = http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment
Alias: $pmix-patient-alert-category-code-cs = http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode


---

