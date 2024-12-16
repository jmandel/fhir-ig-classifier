File: repos/hl7au_SLASH_au-fhir-base/input/includes/example-list-generator.md

{% assign my_types = "" %}
{%- for r_hash in site.data.artifacts -%}
  {% assign r_type = r_hash[0] | split: '/' | first %}
  {%- assign r = r_hash[1] -%}
  {%- if r.example -%}
    {% assign my_types =  my_types | append: ","s | append: r_type %}
  {%- endif -%}
{% endfor %}
{% assign my_array = my_types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

{% assign lhtype = "" %}
{% for i in my_array offset:1 %}
   {% assign dhtype = i | split: '-'  | first %}
   {%- if lhtype != dhtype %}
    {% assign lhtype = dhtype %}
### {{ lhtype }}
   {% endif %}
  <ul>
  {%- for r_hash in site.data.pages -%}
      {% assign r_type = r_hash[0] | split: '/' | first %}
      {%- assign r = r_hash[1] -%}
      {% assign dtype = r_type | split: '-'  | first %}
      {%- if r_type == i %}
          <li><a href="{{r_type}}">{{r.title}}</a></li>
      {% endif %}
  {%- endfor -%}
  </ul>
{% endfor %}



---

File: repos/hl7au_SLASH_au-fhir-base/input/includes/ext-list-generator.md

<!-- Use for sorted flat list  Extension allows for highlighting new stuff using include parameter -->

{% assign extensions = "" %}
{%- for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd= sd_hash[1] -%}
  {%- if sd.type == "Extension" -%}
    {% assign extensions =  extensions | append: "," | append: sd.name %}
  {%- endif -%}
{% endfor %}
{% assign my_array = extensions | split: "," %}
{% assign my_array = my_array | sort | uniq %}

<ul>
{% for i in my_array offset:1 %}
  {%- for sd_hash in site.data.structuredefinitions -%}
     {%- assign sd = sd_hash[1] -%}
     {%- if sd.name == i %}

      {%- assign new = false -%}
      {%- for new_stuff in site.data.new_stuff -%}
         {%- if new_stuff == i -%}
           {%- assign new = true -%}
           {%- break -%}
         {%- endif -%}
      {%- endfor -%}

      {%- if new -%}
        <li><a href="{{sd.path}}"><span class="bg-success" markdown="1">{{sd.title}}</span><!-- new-content --></a></li>
      {% else %}
        <li><a href="{{sd.path}}">{{sd.title}}</a></li>
      {% endif %}

    {% endif %}
  {% endfor %}

{% endfor %}
</ul>

---

File: repos/hl7au_SLASH_au-fhir-base/input/includes/link-list.md

[$docref operation]: OperationDefinition-docref.html
[$expand]: {{ site.data.fhir.path }}valueset-operation-expand.html  "An operation used to create a simple collection of codes suitable for use for data entry or validation"
[(how to search by date)]: {{site.data.fhir.path}}search.html#date
[(how to search by reference)]: {{site.data.fhir.path}}search.html#reference
[(how to search by token)]: {{site.data.fhir.path}}search.html#token
[AllergyIntolerance]: {{site.data.fhir.path}}allergyintolerance.html
[assertedDate Extension]: http://hl7.org/fhir/R4/extension-condition-asserteddate.html
[Audit Logging]: {{site.data.fhir.path}}security.html#audit
[Audit Logging]: {{site.data.fhir.path}}security.html#audit%20logging
[AuditEvent]: {{site.data.fhir.path}}auditevent.html
[Authentication]: {{site.data.fhir.path}}security.html#authentication
[Authorization/Access Control]: {{site.data.fhir.path}}security.html#authorization/access%20control
[Basic Provenance]: basic-provenance.html
[Blood pressure systolic and diastolic]: {{site.data.fhir.path}}bp.html
[Body height]: {{site.data.fhir.path}}bodyheight.html
[Body temperature]: {{site.data.fhir.path}}bodytemp.html
[Body weight]: {{site.data.fhir.path}}bodyweight.html
[CIMI]:http://www.hl7.org/Special/Committees/cimi/index.cfm
[CPT-4/HCPC for procedures]: {{site.data.fhir.path}}valueset-procedure-code.html
[CDC National Drug Code (NDC) Directory – Vaccine NDC Linker Table]: http://www2a.cdc.gov/vaccines/iis/iisstandards/ndc_crosswalk.asp
[CVX vaccine codes]: https://www2a.cdc.gov/vaccines/iis/iisstandards/ndc_crosswalk.asp
[Capability Statements]: capability-statements.html
[CapabilityStatement]: {{site.data.fhir.path}}capabilitystatement.html
[Cardiology (LP29708-2)]: https://loinc.org/LP29708-2
[CarePlan]: {{site.data.fhir.path}}careplan.html
[Clinical Notes]: clinical-notes.html
[ClinicalImpression]: {{site.data.fhir.path}}clinicalimpression.html
[Code on Dental Procedures and Nomenclature (CDT Code)]: http://www.ada.org/en/publications/cdt/
[CodeSystem]: {{site.data.fhir.path}}codesystem.html
[Communications]: {{site.data.fhir.path}}security.html#http
[Composition]: {{site.data.fhir.path}}composition.html
[ConceptMap]: {{site.data.fhir.path}}conceptmap.html
[Condition Quick Start]: StructureDefinition-au-core-condition-encounter-diagnosis.html#search
[Condition]: {{site.data.fhir.path}}condition.html
[Conformance]: conformance.html
[Conformance Requirements]: capability-statements.html "CapabilityStatements defined for this Guide"
[Conformance requirements for the AU Core Server]: CapabilityStatement-us-core-server.html
[Consent]: {{site.data.fhir.path}}consent.html
[Consultation Note (11488-4)]: https://loinc.org/11488-4.html
[Coverage]: {{site.data.fhir.path}}coverage.html
[DAF-Research]: http://hl7.org/fhir/us/daf-research/index.html
[Changes Between Versions]: changes-between-versions.html
[DataAbsentReason Code System]: {{site.data.fhir.path}}codesystem-data-absent-reason.html
[DataAbsentReason Extension]: {{site.data.fhir.path}}extension-data-absent-reason.html
[Device search parameters]: {{site.data.fhir.path}}device.html#search
[Device]: {{site.data.fhir.path}}device.html
[DiagnosticReport]:  {{site.data.fhir.path}}diagnosticreport.html
[DiagnosticReport]: {{site.data.fhir.path}}diagnosticreport.html
[DiagnosticReport]:{{ site.data.fhir.path }}diagnosticreport.html
[Digital Signatures]: {{site.data.fhir.path}}security.html#digital%20signatures
[Direct address]: https://www.healthit.gov/sites/default/files/directbasicsforprovidersqa_05092014.pdf
[Discharge Summary (18842-5)]: https://loinc.org/18842-5.html
[DocumentReference Format]: http://hl7.org/fhir/ValueSet-formatcodes.html
[DocumentReference vs DiagnosticReport]: clinical-notes-guidance.html#documentreference-vs-diagnosticreport
[DocumentReference-episode-summary]: DocumentReference-episode-summary.html
[DocumentReferenceStatus]: http://hl7.org/fhir/ValueSet-document-reference-status.html
[DocumentReference]: {{site.data.fhir.path}}documentreference.html
[Downloads]: downloads.html "Downloads Page"
[ElementDefinition.pattern]: {{site.data.fhir.path}}elementdefinition-definitions.html#ElementDefinition.pattern_x_
[Encounter]: {{site.data.fhir.path}}encounter.html
[Examples]: examples.html
[Extensible Binding]: {{site.data.fhir.path}}terminologies.html#extensible
[FHIR Artifacts]: artifacts.html
[FHIR Binary Resource]: http://hl7.org/fhir/binary.html
[FHIR Bulk Data Access (Flat FHIR)]: http://hl7.org/fhir/uv/bulkdata/index.html
[FHIR Communications]: {{site.data.fhir.path}}security.html#http
[FHIR Communications Security]: {{site.data.fhir.path}}security.html#http
[FHIR Conformance Rules]: {{site.data.fhir.path}}conformance-rules.html
[FHIR Data Types]: {{site.data.fhir.path}}datatypes.html
[FHIR Digital Signatures]: {{site.data.fhir.path}}security.html#digital%20signatures
[FHIR Documents]: {{site.data.fhir.path}}documents.html
[FHIR Must Support]: {{site.data.fhir.path}}profiling.html#mustsupport
[FHIR Paging]: {{site.data.fhir.path}}http.html#paging
[FHIR Provenance]: {{site.data.fhir.path}}provenance.html
[FHIR RESTful API]: {{site.data.fhir.path}}http.html
[FHIR RESTful Search API]: {{site.data.fhir.path}}http.html#search
[FHIR RESTful operations]: {{site.data.fhir.path}}operations.html
[FHIR Resource]: {{site.data.fhir.path}}resource.html
[FHIR Search]: {{site.data.fhir.path}}search.html
[FHIR Security Labels]: {{site.data.fhir.path}}security-labels.html
[FHIR Terminology]: {{site.data.fhir.path}}terminologies.html
[FHIR Version 4.0.1]: {{site.data.fhir.path}}index.html "FHIR Specification Home Page"
[FHIR Version DSTU2]: http://hl7.org/fhir/DSTU2/index.html "FHIR Version DSTU2 Specification Home Page"
[FHIR Version R4]: {{site.data.fhir.path}}index.html "FHIR Version R4 Specification Home Page"
[FHIR Version STU3]: http://hl7.org/fhir/STU3/index.html "FHIR Version STU3 Specification Home Page"
[Formal Profile Definition]: #profile
[Future of AU Core]: future-of-US-core.html
[General Security Considerations]: security.html
[Guidance]: guidance.html "Guidance Page"
[Guide to Resources]: {{site.data.fhir.path}}resourceguide.html
[HL7 U.S. Data Access Framework (DAF)]: https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/DAF+Home
[HTTP]: {{site.data.fhir.path}}http.html
[Head circumference]: {{site.data.fhir.path}}headcircum.html
[Heart rate]: {{site.data.fhir.path}}heartrate.html
[History & Physical Note (34117-2)]: https://loinc.org/34117-2.html
[Home]: index.html "Home Page"
[ICD-10-PCS codes]: http://www.cms.gov/Medicare/Coding/ICD10
[IHE Healthcare Provider Directory]: http://ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_HPD.pdf
[IHE MHD]: http://ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHD.pdf
[IHE XDS]: https://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
[Imaging Narrative (18748-4)]: https://loinc.org/18748-4.html
[Immunization]:  {{site.data.fhir.path}}immunization.html
[Implantable device list]: https://www.healthit.gov/test-method/implantable-device-list
[Laboratory Report Narrative (11502-2)]: https://loinc.org/11502-2.html
[LOINC]: http://loinc.org
[ImagingStudy]:  {{site.data.fhir.path}}imagingstudy.html
[Media]:  {{site.data.fhir.path}}media.html
[Location]:  {{site.data.fhir.path}}location.html
[Medication Clinical Drug (RxNorm)]: https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion
[Medication List]: medication-list.html
[MedicationRequest examples]: StructureDefinition-au-core-medicationrequest-examples.html
[MedicationRequest Quick Start]: StructureDefinition-au-core-medicationrequest.html#search
[MedicationRequestStatus]: {{site.data.fhir.path}}valueset-medicationrequest-status.html
[MedicationRequest]: {{site.data.fhir.path}}medicationrequest.html
[MedicationStatementStatus]: {{site.data.fhir.path}}valueset-medication-statement-status.html
[MedicationStatement]: {{site.data.fhir.path}}medicationstatement.html
[Medication]: {{site.data.fhir.path}}medication.html
[MedicationDispense]: {{site.data.fhir.path}}medicationdispense.html
[MedicationAdministration]: {{site.data.fhir.path}}medicationadministration.html
[Medications Module]: {{site.data.fhir.path}}medications-module.html
[MimeType]: http://www.rfc-editor.org/bcp/bcp13.txt#
[Multi-language support for Narratives]: {{site.data.fhir.path}}narrative.html#lang
[Must Support]: must-support.html
[NamingSystem]: {{site.data.fhir.path}}namingsystem.html
[Narrative]: {{site.data.fhir.path}}security.html#narrative
[Narrative documentation]: {{site.data.fhir.path}}narrative.html
[Nurse Note (34746-8)]: https://loinc.org/34746-8.html
[Observation Value Absent Reason]: http://hl7.org/fhir/ValueSet/data-absent-reason
[Observation]: {{site.data.fhir.path}}observation.html
[OperationOutcome]: {{site.data.fhir.path}}operationoutcome.html
[Organization]: {{site.data.fhir.path}}organization.html
[Oxygen saturation]: {{site.data.fhir.path}}oxygensat.html
[Patient]: {{site.data.fhir.path}}patient.html
[PractitionerRole]: {{site.data.fhir.path}}practitionerrole.html
[Practitioner]: {{site.data.fhir.path}}practitioner.html
[ProcedureStatus]: {{site.data.fhir.path}}valueset-procedure-status.html
[Procedure]: {{site.data.fhir.path}}procedure.html
[Provenance Agent Type]: ValueSet-us-core-provenance-participant-type.html
[Profiles and Extensions]: profiles-and-extensions.html
[Profiles]: profiles-and-extensions.html "Profiles and Extensions Page"
[Provenance]: {{site.data.fhir.path}}provenance.html
[Quantity]: {{site.data.fhir.path}}datatypes.html#quantity
[Quick Start]: #search
[Respiratory rate]: {{site.data.fhir.path}}resprate.html
[Required Binding]: {{site.data.fhir.path}}terminologies.html#required
[SMART App Launch Framework]: {{site.data.fhir.hl7_fhir_uv_smart_app_launch}}
[SNOMED CT]: http://snomed.info/sct
[SNOMED CT]: {{site.data.fhir.path}}valueset-procedure-code.html
[Search Parameter Registry]: {{site.data.fhir.path}}searchparameter-registry.html
[Search Parameters and Operations]: search-parameters-and-operations.html
[Security Labels]: {{site.data.fhir.path}}security-labels.html
[Security]: security.html
[ServiceRequest]: {{site.data.fhir.path}}servicerequest.html
[StructureDefinitions]: {{site.data.fhir.path}}structuredefinition.html
[Terminology]: terminology.html "Terminology Page"
[Terminology Binding Extensible]: http://hl7.org/fhir/R4/terminologies.html#extensible
[UCUM Codes value set]: {{site.data.fhir.path}}valueset-ucum-units.html
[UCUM]: http://unitsofmeasure.org
[HL7 Gender Harmony Project]: https://confluence.hl7.org/display/VOC/The+Gender+Harmony+Project
[AU Core AllergyIntolerance Profile]: StructureDefinition-au-core-allergyintolerance.html
[AU Core Body Temperature Profile]: StructureDefinition-au-core-body-temperature.html
[AU Core Body Weight Profile]: StructureDefinition-au-core-body-weight.html
[AU Core Body Height Profile]: StructureDefinition-au-core-body-height.html
[AU Core BMI Profile]: StructureDefinition-au-core-bmi.html
[AU Core Blood Pressure Profile]: StructureDefinition-au-core-blood-pressure.html
[AU Core CarePlan Profile]: StructureDefinition-au-core-careplan.html
[AU Core CareTeam Profile]: StructureDefinition-au-core-careteam.html
[AU Core Condition Codes]: ValueSet-us-core-condition-code.html
[AU Core Diagnostic Imaging Result Observation Profile]: StructureDefinition-au-core-observation-imaging.html
[AU Core DocumentReference Profile]: StructureDefinition-au-core-documentreference.html
[AU Core DocumentReference Type Value Set]: ValueSet-us-core-documentreference-type.html
[AU Core DocumentReference]: StructureDefinition-au-core-documentreference.html
[AU Core DocumentReferences Category Value Set]: ValueSet-us-core-documentreference-category.html
[AU Core Encounter Profile]: StructureDefinition-au-core-encounter.html
[AU Core Goal Profile]: StructureDefinition-au-core-goal.html
[AU Core Head Circumference Profile]: StructureDefinition-au-core-headcircum.html
[AU Core HealthcareService Profile]: StructureDefinition-au-core-healthcareservice.html
[AU Core Heart Rate Profile]: StructureDefinition-au-core-heart-rate.html
[AU Core Immunization Profile]: StructureDefinition-au-core-immunization.html
[AU Core Implantable Device Profile]: StructureDefinition-au-core-implantable-device.html
[AU Core Laboratory Result Observation Profile]: StructureDefinition-au-core-observation-lab.html
[AU Core Location Profile]: StructureDefinition-au-core-location.html
[AU Core Observation Clinical Test Result Profile]: StructureDefinition-au-core-observation-clinical-test.html
[AU Core Observation Imaging Result Profile]: StructureDefinition-au-core-observation-imaging.html
[AU Core Medication Profile]: StructureDefinition-au-core-medication.html
[AU Core MedicationAdministration Profile]: StructureDefinition-au-core-medicationadministration.html
[AU Core MedicationDispense Profile]: StructureDefinition-au-core-medicationdispense.html
[AU Core MedicationRequest Profile]: StructureDefinition-au-core-medicationrequest.html
[AU Core MedicationStatement Profile]: StructureDefinition-au-core-medicationstatement.html
[AU Core Organization Profile]: StructureDefinition-au-core-organization.html
[AU Core Patient Profile]: StructureDefinition-au-core-patient.html
[AU Core Pediatric BMI for Age Observation Profile]: StructureDefinition-pediatric-bmi-for-age.html
[AU Core Pediatric Weight for Height Observation Profile]: StructureDefinition-pediatric-weight-for-height.html
[AU Core Pediatric Head Occipital Frontal Circumference Observation Profile]: StructureDefinition-head-occipital-frontal-circumference-percentile.html
[AU Core Pediatric Head Occipital-frontal Circumference Percentile Profile]: StructureDefinition-head-occipital-frontal-circumference-percentile.html
[AU Core Practitioner Profile]: StructureDefinition-au-core-practitioner.html
[AU Core PractitionerRole Profile]: StructureDefinition-au-core-practitionerrole.html
[AU Core Procedure Profile]: StructureDefinition-au-core-procedure.html
[AU Core Provenance Profile]: StructureDefinition-au-core-provenance.html
[AU Core Pulse Oximetry Profile]: StructureDefinition-au-core-pulse-oximetry.html
[AU Core Security]: security.html
[AU Core RelatedPerson Profile]: StructureDefinition-au-core-relatedperson.html
[AU Core Respiratory Rate Profile]: StructureDefinition-au-core-respiratory-rate.html
[AU Core ServiceRequest Profile]: StructureDefinition-au-core-servicerequest.html
[AU Core Smoking Status Observation Profile]: StructureDefinition-au-core-smokingstatus.html
[AU Core Vital Signs Profile]: StructureDefinition-au-core-vital-signs.html
[Value sets]: terminology.html
[Vital Signs Profile]: {{site.data.fhir.path}}observation-vitalsigns.html
[Vital Signs Quick Start]: vitals-search.html
[base resource differential]: {{site.data.fhir.path}}diff.html
[boundaries section]: {{ site.data.fhir.path }}DocumentReference.html#bnr
[boundaries section]: {{ site.data.fhir.path }}documentreference.html#bnr
[boundaries section]: {{site.data.fhir.path}}medicationrequest.html#bnr
[capabilitystatement-expectation]: http://hl7.org/fhir/extension-capabilitystatement-expectation.html
[chains]: {{site.data.fhir.path}}search.html#chaining
[comparators]: {{site.data.fhir.path}}search.html#prefix
[compartment]: {{site.data.fhir.path}}compartmentdefinition.html
[component]:  {{site.data.fhir.path}}observation.html#gr-comp
[composites]: {{site.data.fhir.path}}search.html#combining
[contained]: {{site.data.fhir.path}}references.html#contained
[Contained resources]: {{site.data.fhir.path}}references.html#contained
[core specification]: {{site.data.fhir.path}}extensibility.html#2.20.0.2.2
[extensible]: {{site.data.fhir.path}}terminologies.html#extensible
[how to search by date]: {{site.data.fhir.path}}search.html#date
[how to search by reference]: {{site.data.fhir.path}}search.html#reference
[how to search by string]: {{site.data.fhir.path}}search.html#string
[how to search by the logical id]: {{site.data.fhir.path}}references.html#logical
[how to search by token]: {{site.data.fhir.path}}search.html#token
[`_include`]: {{site.data.fhir.path}}search.html#include
[_revinclude]: {{site.data.fhir.path}}search.html#include
[logical view]: {{site.data.fhir.path}}formats.html#table
[managing returned resources]: {{site.data.fhir.path}}search.html#return
[mapping]: general-guidance.html
[modifiers]: {{site.data.fhir.path}}search.html#modifiers
[multipleAnd]: {{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.multipleAnd
[multipleOr]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.multipleOr
[comparator]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.comparator
[modifier]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.modifier
[chain]:{{site.data.fhir.path}}searchparameter-definitions.html#SearchParameter.chain
[profiles]: {{site.data.fhir.path}}profiling.html
[quantity]: {{site.data.fhir.path}}search.html#quantity
[search]: http://hl7.org/fhir/search.html
[security considerations]: {{site.data.fhir.path}}security.html
[ethnicity]: SearchParameter-au-core-ethnicity.html
[race]: SearchParameter-au-core-race.html
[gender-identity]: SearchParameter-au-core-patient-gender-identity.html
[asserted-date]: SearchParameter-au-core-condition-asserted-date.html
[role]: SearchParameter-au-core-careteam-role.html
[discharge-disposition]: SearchParameter-au-core-encounter-discharge-disposition.html
[description]: SearchParameter-au-core-goal-description.html
[`ethnicity`]: SearchParameter-au-core-ethnicity.html
[`gender-identity`]: SearchParameter-au-core-patient-gender-identity.html
[`asserted-date`]: SearchParameter-au-core-condition-asserted-date.html
[`role`]: SearchParameter-au-core-careteam-role.html
[`discharge-disposition`]: SearchParameter-au-core-encounter-discharge-disposition.html
[`description`]: SearchParameter-au-core-goal-description.html
[{{site.data.fhir.path}}StructureDefinition/data-absent-reason]: {{site.data.fhir.path}}StructureDefinition/data-absent-reason
[reference]: {{site.data.fhir.path}}references.html
[timezone extension]: {{site.data.fhir.path}}extension-tz-code.html
[`Accept-Language`]: https://www.ietf.org/rfc/rfc2616.txt
[Record or update]: future-of-US-core.html#future-candidate-requirements-under-consideration
[writing and updating]: future-of-AU-core.html#future-candidate-requirements-under-consideration
[Servers Requiring Status]: general-requirements.html#search-for-servers-requiring-status
[converted from a new element]: {{site.data.fhir.path}}versions.html#extensions
[Referencing AU Core Profiles]: guidance.html#referencing-au-core-profiles
[differential view]: {{site.data.fhir.path}}profiling.html#snapshot
[vital signs table]: {{site.data.fhir.path}}observation-vitalsigns.html#vitals-table
[Goal]: {{site.data.fhir.path}}goal.html
[Missing Data]: general-requirements.html#missing-data
[Suppressed Data]: guidance.html#suppressed-data
[`CarePlan.status`]: {{site.data.fhir.path}}careplan.html
[Coded Elements]: general-requirements.html#using-codes-in-us-core-profiles
[clinical safety]:  {{site.data.fhir.path}}safety.html
[Mandatory]: must-support.html
[Using multiple codes with CodeableConcept Datatype]: general-requirements.html#translations
[Maturity Level]: {{site.data.fhir.path}}versions.html#maturity
[slicing]: {{site.data.fhir.path}}profiling.html#slicing
[Change Log]: changes.html
[Deletion Safety Checks]: http://hl7.org/fhir/R4/safety.html#conformance
[QuestionnaireResponse]: {{site.data.fhir.path}}questionnaireresponse.html
[Questionnaire]: {{site.data.fhir.path}}questionnaire.html
[Structured Data Capture (SDC) Questionnaire Response Profile]: {{site.data.fhir.hl7_fhir_uv_sdc}}/StructureDefinition-sdc-questionnaireresponse.html
[Structured Data Capture (SDC)]: {{site.data.fhir.hl7_fhir_uv_sdc}}
[General Requirements]: general-requirements.html
[Directory of published versions]: {{site.data.fhir.canonical}}/history.html
[General Requirements]: general-requirements.html
[HL7 C-CDA]: http://www.hl7.org/implement/standards/product_brief.cfm?product_id=492

---

File: repos/hl7au_SLASH_au-fhir-base/input/includes/nonnormative-example-boilerplate.md

These example instances show what data produced and consumed by systems conforming with this implementation guide might look like. Every effort has been made to ensure that the examples are correct and useful, but they are not a normative part of the specification nor are they fully representative of real world examples.

---

File: repos/hl7au_SLASH_au-fhir-base/input/includes/res-list-generator.md

<!-- Use for sorted flat list resources ValueSet, CodeSystem, SearchParameter, OperationDefinition  allows for highlighting new stuff using include parameter -->
{% assign my_types = "" %}
{%- for r_hash in site.data.resources -%}
  {% assign r_type = r_hash[0] | split: '/' | first %}
  {%- assign r = r_hash[1] -%}
  {%- if r_type == include.type %}
    {% assign my_types =  my_types | append: ","s | append: r.name %}
  {%- endif -%}
{% endfor %}
{% assign my_array = my_types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

<ul>
{% for i in my_array offset:1 %}
  {%- for r_hash in site.data.resources -%}
      {% assign r_type = r_hash[0] | split: '/' | first %}
      {%- assign r = r_hash[1] -%}
      {%- if r.name == i and r_type == include.type %}
        {%- assign new = false -%}
        {%- for new_stuff in site.data.new_stuff -%}
           {%- if new_stuff == i -%}
             {%- assign new = true -%}
             {%- break -%}
           {%- endif -%}
        {%- endfor -%}

        {%- if new -%}
          <li><a href="{{r.path}}"><span class="bg-success" markdown="1">{{r.title}}</span><!-- new-content --></a></li>
        {% else %}
          <li><a href="{{r.path}}">{{r.title}}</a></li>
        {% endif %}

    {% endif %}
  {%- endfor -%}
{% endfor %}
</ul>


---

File: repos/hl7au_SLASH_au-fhir-base/input/includes/sd-list-generator.md

{%- for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd1= sd_hash[1] -%}
  {%- unless sd1.type == "Extension" -%}
    {% assign types =  types | append: "," | append: sd1.type %}
  {%- endunless -%}
{% endfor %}
{% assign my_types = types | split: "," %}
{% assign my_types = my_types | sort | uniq %}
{% for i in my_types offset:1 %}
  <h4>{{ i }}</h4>
  <ul>
    {%- for sd_hash in site.data.structuredefinitions -%}
      {%- assign sd1 = sd_hash[1] -%}
      {%- if sd1.type == i %}
        {%- assign new = false -%}
        {%- assign parent = false -%}
        {%- assign child = false -%}
        {%- for sd_hash2 in site.data.structuredefinitions -%}
          {%- assign sd2 = sd_hash2[1] -%}
          {% if sd1.basename == sd2.name %}
            {%- assign child = true -%}
            {% break %}
          {% elsif sd1.name == sd2.basename%}
             {%- assign parent = true -%}
             {% break %}
          {% endif %}
        {% endfor %}


        {%- for new_stuff in site.data.new_stuff -%}
           {%- if new_stuff == sd1.name -%}
             {%- assign new = true -%}
             {%- break -%}
           {%- endif -%}
        {%- endfor -%}

          {%- unless parent or child -%}
            {%- if new -%}
              <li><a href="{{sd1.path}}"><span class="bg-success" markdown="1">{{sd1.title}}</span><!-- new-content --></a></li>
            {% else %}
              <li><a href="{{sd1.path}}">{{sd1.title}}</a></li>
            {% endif %}
          {%- endunless -%}

          {%- if parent -%}
            {%- if new -%}
              <li><a href="{{sd1.path}}"><span class="bg-success" markdown="1">{{sd1.title}}</span><!-- new-content --></a>
            {% else %}
              <li><a href="{{sd1.path}}">{{sd1.title}}</a>
            {% endif %}
                <ul>
                {%- for sd_hash3 in site.data.structuredefinitions -%}
                  {%- assign sd3 = sd_hash3[1] -%}
                  {% if sd1.name == sd3.basename %}
                    {%- assign new = false -%}
                    {% for new_stuff in site.data.new_stuff %}
                         {%- if new_stuff == sd3.name -%}
                           {%- assign new = true -%}
                           {%- break -%}
                         {%- endif -%}
                    {%- endfor -%}


                      {%- if new -%}
                        <li><a href="{{sd3.path}}"><span class="bg-success" markdown="1">{{sd3.title}}</span><!-- new-content --></a></li>
                      {% else %}
                        <li><a href="{{sd3.path}}">{{sd3.title}}</a></li>
                      {% endif %}

                  {% endif %}
                {% endfor %}
                </ul>
            </li>
          {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
  </ul>
{% endfor %}

---

File: repos/hl7au_SLASH_au-fhir-base/input/includes/sp_list.md

##### AllergyIntolerance
TBD

##### CarePlan
TBD

##### CareTeam
TBD

##### Condition
TBD

##### Device
TBD

##### DiagnosticReport
TBD

##### DocumentReference
TBD

##### Encounter
TBD

##### Goal
TBD

##### Immunization
TBD

##### Location
TBD

##### MedicationRequest
TBD

##### Observation
TBD

##### Organization
TBD

##### Patient
TBD

##### Practitioner
TBD

##### PractitionerRole
TBD

##### Procedure
TBD

##### QuestionnaireResponse
TBD

##### RelatedPerson
TBD

##### ServiceRequest
TBD


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-address-identifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-ahpraprofession-details-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- See [Australian Health Practitioner Regulation Agency (Ahpra) Data Guidance](generalguidance.html#australian-health-practitioner-regulation-agency-ahpra-data-guidance) for detailed guidance on representing Ahpra data using this extension.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-ahpraregistration-details-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- See [Australian Health Practitioner Regulation Agency (Ahpra) Data Guidance](generalguidance.html#australian-health-practitioner-regulation-agency-ahpra-data-guidance) for detailed guidance on representing Ahpra data using this extension.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-associated-healthcareservice-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-accessionnumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O to construct a legal globally unique identifier system for local identifiers. 



---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-address-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An international address can be represented using the core [Address](http://hl7.org/fhir/R4/datatypes.html#Address) data type.

**Potentially useful extensions:**
* Address.line: [Unit](http://hl7.org/fhir/R4/extension-iso21090-adxp-unitid.html)
* Address.line: [House Number](http://hl7.org/fhir/R4/extension-iso21090-adxp-housenumber.html)
* Address.line: [Street Name](http://hl7.org/fhir/R4/extension-iso21090-adxp-streetname.html)
* Address.line: [Street Name Type](http://hl7.org/fhir/R4/extension-iso21090-adxp-streetnametype.html)
* Address.line: [Street Name Base](http://hl7.org/fhir/R4/extension-iso21090-adxp-streetnamebase.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-ahpraregistrationnumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-allergyintolerance-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-assigningauthority-intro.md

This content provides the values for a sender to use where assigning authority components should be valued in fields in HL7 messages. 

Example HL7 V2 fields that will use this are:

* PRD-7 Provider Identifiers (CM)
* PV1-9 Consulting Doctor (XCN)
* OBR-28 Result copies to (XCN)


### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-australianbusinessnumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When coding `Identifier.type`, the preferred coding from the [hl7VS-identifierType - AU Extended](ValueSet-au-v2-0203-extended.html) value set is "XX" (Organization identifier), sent with a text value "ABN".


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-australiancompanynumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When coding `Identifier.type`, the preferred coding from the [hl7VS-identifierType - AU Extended](ValueSet-au-v2-0203-extended.html) value set is "XX" (Organization identifier), sent with a text value "ABN".


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-australianregistredbodynumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When coding `Identifier.type`, the preferred coding from the [hl7VS-identifierType - AU Extended](ValueSet-au-v2-0203-extended.html) value set is "XX" (Organization identifier), sent with a text value "ABN".


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-bodystructure-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-careagencyemployeeidentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-composition-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- It is important to clearly differentiate between representing the extent of a system's information for a patient versus clinical judgement of no relevant finding:
  - When asserting clinical judgement that there are no items of specific interest, (e.g. no current medications, no known allergies, or no history of vaccination), `Composition.section.entry` with a reference to a supported FHIR resource containing the record of assertion should be sent.
    - Guidance is provided in the core FHIR specification for AllergyIntolerance and Condition, and [AU Assertion of No Relevant Finding](StructureDefinition-au-norelevantfinding.html) is defined in this implementation guide to support additional concepts.
  - When a statement is about the nature or extent of the information the system has access to or is permitted to share, (e.g. not asked or information withheld), `Composition.section.emptyReason` should be sent with an appropriate code from the [ListEmptyReasons](http://hl7.org/fhir/R4/valueset-list-empty-reason.html) value set.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-condition-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-coverage-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- See each Identifier profile page for guidance related to that identifier type.
- When populating the type using the preferred ValueSet :
    - *Medicare* coverage **SHOULD** be represented by sending the V3 Value SetActCoverageTypeCode code "PUBLICPOL"
    - *DVA* coverage **SHOULD** be represented by sending the V3 Value SetActCoverageTypeCode code "VET"
    - *Private health insurance* coverage **SHOULD** be represented by sending the V3 Value SetActCoverageTypeCode code "HIP"
    - *Workcover* coverage **SHOULD** be represented by sending the V3 Value SetActCoverageTypeCode code "WCBPOL"
    - *Motor Accident* coverage  **SHOULD** be represented by sending the V3 Value SetActCoverageTypeCode code "AUTOPOL"
    - *Private (self funded)* coverage **SHOULD** be represented by sending the Coverage SelfPay Codes code "pay"
    - *Concession* coverage, for example Health Care Card or Pensioner Concession Card, **SHOULD** be represented by sending the Coverage SelfPay Codes code "payconc"

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-cspregistrationnumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-cwlthseniorshealthcardnumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The value of the identifier is the CRN. Implementers should be aware that a DVA-issued card will also include an individual's state-based DVA file number but only the CRN should be sent as the Commonwealth Seniors Health Card number.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-deliverypointidentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-diagnosticreport-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Results that are free text or report form are represented in `DiagnosticReport.presentedForm`.
- Results that are structured in FHIR resources are referenced in `DiagnosticResult.result`. Each referenced Observation resource represents an individual diagnostic test and result value or component result values, or a study / panel which references other Observations in `Observation.hasMember`.
- When constructing a report for a study / panel:
  - the individual component examinations are referenced by that grouping Observation in `Observation.hasMember` and not directly referenced in `DiagnosticReport.result`
  - `DiagnosticReport.code` and the study / panel Observation `Observation.code` should be the same concept if the report contains only the results of that study / panel
- See each Identifier profile page for guidance related to that identifier type.
- See the preferred [AU Base Pathology Report](StructureDefinition-au-pathologyreport.html) profile for guidance on representing a pathology report issued by the diagnostic service provider.
- See the preferred [AU Base Diagnostic Imaging Report](StructureDefinition-au-imagingreport.html) profile for guidance on representing an imaging report issued by the diagnostic service provider.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-diagnosticrequest-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The [procedure-targetBodyStructure](http://hl7.org/fhir/R4/extension-procedure-targetbodystructure.html) extension may be suitable for use where
   - body site is not implicit in the code found in `ServiceRequest.code` and  
   - body site information is to be handled as a separate resource (e.g. to identify and track separately) instead of an inline coded element in `ServiceRequest.bodySite`. 
- `ServiceRequest.code` for a pathology order is preferred to be a member of the [RCPA - SPIA Requesting Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-requesting-refset-3). 
- `ServiceRequest.code` for an imaging order is preferred to be a member of the [Imaging Procedure](https://healthterminologies.gov.au/fhir/ValueSet/imaging-procedure-1) value set.
- See each Identifier profile page for guidance related to that identifier type.

**Extensions under consideration:**
* ServiceRequest: [Result Copies To](StructureDefinition-result-copies-to.html) 

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-diagnosticresult-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The [bodySite](http://hl7.org/fhir/R4/extension-bodysite.html) extension may be suitable for use where
   - body site is not implicit in the code found in `Observation.code` and  
   - body site information is to be handled as a separate resource (e.g. to identify and track separately) instead of an inline coded element in `Observation.bodySite`. 
- See the [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html) profile for guidance on representing the result of a pathology test.
- See the [AU Base Diagnostic Imaging Result](StructureDefinition-au-imagingresult.html) profile for guidance on representing the result of a radiology examination or an imaging intensive diagnostic investigation.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-dosage-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-dvanumber-intro.md

### Usage Notes


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-employeenumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O or ABN to construct a legal globally unique identifier system for local identifiers. 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-encounter-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-etpprescriptionidentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-gnafidentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-healthcarecardnumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-healthcareservice-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An HPI-O can be sent in `HealthcareService.identifier` when supporting  the case where network HPI-Os are issued for sub-organisations, departments, or other logical divisions acting as specific healthcare services. This is useful in the absence of any specific national identifier for healthcare service entities.
- See each Identifier profile page for guidance related to that identifier type.
- If a system needs to differentiate contacts for a practitioner in a role by purpose:
  - contact information is sent in `HealthcareService.telecom`
  - purpose for the contact is sent using the [Contact Purpose](StructureDefinition-contact-purpose.html) extension in `HealthcareService.telecom.extension`
- See the [AU Base Location](StructureDefinition-au-location.html) profile for guidance on using a Location resource as part of defining a type of mobile or remotely delivered service.

**Potentially useful extensions:**
* HealthcareService.telecom: [Contact Purpose](StructureDefinition-contact-purpose.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-healthprogramparticipation-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-hpii-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-hpio-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-ihi-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Multiple Individual Healthcare Identifiers (IHIs) can be used in where the IHI status and/or IHI record status varies (e.g. deceased, provisional) though implementers should be aware when exchanging patient information that systems may not support multiple IHIs for an individual.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-imagingreport-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Results that are free text or report form are represented in `DiagnosticReport.presentedForm`.
- Results that are structured in FHIR resources are referenced in `DiagnosticResult.result`. Each referenced Observation resource represents an individual imaging examination and result value or component result values, or a nested grouping of Observations such as a multi-modality procedure which references other Observations in `Observation.hasMember`.
- When constructing a report for a nested grouping of Observations:
  - the individual imaging examinations are referenced by that grouping Observation in `Observation.hasMember` and not directly referenced in `DiagnosticReport.result`
  - `DiagnosticReport.code` and the grouping Observation `Observation.code` should be the same concept if the report contains only the results of that group.
- See each Identifier profile page for guidance related to that identifier type.
- The radiology laboratory is sent as a reference to an Organization in `DiagnosticReport.performer`.
- Each radiologist is sent as a references to a PractitionerRole resource in `DiagnosticReport.performer`.
  


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-imagingresult-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The [bodySite](http://hl7.org/fhir/R4/extension-bodysite.html) extension may be suitable for use where
   - body site is not implicit in the code found in `Observation.code` and  
   - body site information cannot be adequately captured by a single inline coded element in `Observation.bodySite`.
- When sending an observation that represents a study series or panel:
  - the group / panel code is sent in `Observation.code`
  - the overall comments are sent in `Observation.note`
  - the global interpretation by the producer of the study is sent in `Observation.interpretation`
  - individual results may be sent in `Observation.component` or by referencing individual observation results in `Observation.hasMember`
- When sending observations that group the set of results of a multi-modality procedure:
  - A multi-modality procedure observation is sent with individual component examinations in `Observation.hasMember`.
  - An individual component examination observation is referenced by that multi-modality procedure observation (`Observation.hasMember`) rather than directly at the diagnostic report level (`DiagnosticReport.result`).


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-immunization-intro.md

### Usage Notes

**Potentially useful extensions:**
* Immunization: [Vaccine Vial Serial Number](StructureDefinition-vaccine-serial-number.html) 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-insurancemembernumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-localdispenseidentifier-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O to construct a legal globally unique identifier system for local identifiers. 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-localorderidentifier-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O to construct a legal globally unique identifier system for local identifiers. 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-localprescriptionidentifier-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O to construct a legal globally unique identifier system for local identifiers. 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-localreportidentifier-intro.md

### Usage Notes

In many systems the report identifier is fulfilled by the concept filler order number in the HL7 V2 specification if there is only a single filler order number per report. When sending a filler order number the [AU Local Order Identifier](StructureDefinition-au-localorderidentifier.html) is the recommended applicable profile.

In diagnostic imaging and some laboratory systems the report identifier is fulfilled by the concept accession number if there is only a single accession number per report. When sending an accession number the [AU Accession Number](StructureDefinition-au-accessionnumber.html) is the recommended applicable profile.

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O to construct a legal globally unique identifier system for local identifiers. 

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-location-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When defining a type of mobile or remotely delivered service location:
  - `Location.mode` is sent as "kind"
  - One instance of `Location.type` is sent as "MOBL"
  - Additional types of `Location.type` indicate the service is tailored for delivery in these kinds of locations (e.g. "AMB", "COMM", "PTRES", "SCHOOL", or "WORK").
- When defining a remotely delivered service location:
  - `Location.mode` is sent as "kind"
  - `Location.type` is sent as "VI"
  - `Location.physicalType` is sent as "vi"


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-locationspecificpracticenumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicalrecordnumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- An organisation should use their own local system identifier namespace but if that is not available then see the guidance on [Business Identifiers](generalguidance.html#business-identifiers) on using an HPI-O or ABN to construct a legal globally unique identifier system for local identifiers. 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicarecardnumber-intro.md

### Usage Notes

The 10 digit format is supported as some systems do not support the 11 digit Medicare card number. 

The 10 digit Medicare card number is not sufficient to uniquely identify the number associated with an individual on a Medicare card as a card may include up to 9 individuals. If required, profiles can constrain this profile further to restrict usage to 11 digits only as desired.

Medicare card numbers are not used for uniquely identifying patients, they are identifying information that can be used in conjunction with other elements such as name and date of birth appropriately to confirm identity.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicareprovidernumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medication-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Medication definition includes coding as:
  - [PBS Item Code](https://www.pbs.gov.au/pbs/home) - Pharmaceutical Benefits Scheme coding, claiming context is not relevant as medicine coding
  - [Medication Package Global Trade Item Number](http://terminology.hl7.org/ValueSet/v3-GTIN) - Global Trade Item Number (GTIN) physical product reference
  - [AMT Medicines](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) - Australian Medicines Terminology, national drug terminology
  - [MIMS Package](https://www.mims.com.au/index.php) - commonly used medicine coding
- When a code for medication definition is unavailable, just text is allowed in `Medication.code.text`.
- When a medication is compounded and is a list of ingredients, `Medication.code` may contain only the list of ingredients as text in `Medication.code.text`.
- Non-coded support for other medicinal product information can be supported as follows:
  - ​brand name in [Medication Brand Name](StructureDefinition-medication-brand-name.html) extension
  - ​generic name in [Medication Generic Name](StructureDefinition-medication-generic-name.html) extension
  - item form and strength as part of medication definition in `Medication.code.text`
  - manufacturer in `Medication.manufacturer.display`

**Potentially useful extensions:**
* Medication: [Medication Brand Name](StructureDefinition-medication-brand-name.html)
* Medication: [Medication Generic Name](StructureDefinition-medication-generic-name.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicationadministration-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When identifying a medication, this resource can use either a code or refer to a Medication resource. 
- If making use of `MedicationAdministration.code`, this profile includes coding as:
  - [PBS Item Code](https://www.pbs.gov.au/pbs/home) - Pharmaceutical Benefits Scheme coding, claiming context is not relevant as medicine coding
  - [Medication Package Global Trade Item Number](http://terminology.hl7.org/ValueSet/v3-GTIN) - Global Trade Item Number (GTIN) physical product reference
  - [AMT Medicines](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) - Australian Medicines Terminology, national drug terminology
  - [MIMS Package](https://www.mims.com.au/index.php) - commonly used medicine coding
- If a medication is compounded and is a list of ingredients, `MedicationAdministration.code` is still present and may contain only the list of ingredients as text in `MedicationAdministration.code.text`.
- Where additional medicinal product information is needed, `MedicationAdministration.medicationReference` is preferred to `MedicationAdministration.code` and use of extensions, see guidance on [AU Base Medication](StructureDefinition-au-medication.html).

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicationdispense-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When identifying a medication, this resource can use either a code or refer to a Medication resource. 
- If making use of `MedicationDispense.code`, this profile includes coding as:
  - [PBS Item Code](https://www.pbs.gov.au/pbs/home) - Pharmaceutical Benefits Scheme coding, claiming context is not relevant as medicine coding
  - [Medication Package Global Trade Item Number](http://terminology.hl7.org/ValueSet/v3-GTIN) - Global Trade Item Number (GTIN) physical product reference
  - [AMT Medicines](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) - Australian Medicines Terminology, national drug terminology
  - [MIMS Package](https://www.mims.com.au/index.php) - commonly used medicine coding
- If a medication is compounded and is a list of ingredients, `MedicationDispense.code` is still present and may contain only the list of ingredients as text in `MedicationDispense.code.text`.
- Where additional medicinal product information is needed, `MedicationDispense.medicationReference` is preferred to `MedicationDispense.code` and use of extensions, see guidance on [AU Base Medication](StructureDefinition-au-medication.html).
- See each Identifier profile page for guidance related to that identifier type.

**Potentially useful extensions:**
* MedicationDispense: [Medication Brand Name](StructureDefinition-medication-brand-name.html) 
* MedicationDispense: [Medication Generic Name](StructureDefinition-medication-generic-name.html)


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicationrequest-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When identifying a medication, this resource can use either a code or refer to a Medication resource. 
- If making use of `MedicationRequest.code`, this profile includes coding as:
  - [PBS Item Code](https://www.pbs.gov.au/pbs/home) - Pharmaceutical Benefits Scheme coding, claiming context is not relevant as medicine coding
  - [Medication Package Global Trade Item Number](http://terminology.hl7.org/ValueSet/v3-GTIN) - Global Trade Item Number (GTIN) physical product reference
  - [AMT Medicines](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) - Australian Medicines Terminology, national drug terminology
  - [MIMS Package](https://www.mims.com.au/index.php) - commonly used medicine coding
- If a medication is compounded and is a list of ingredients, `MedicationRequest.code` is still present and may contain only the list of ingredients as text in `MedicationRequest.code.text`.
- Where additional medicinal product information is needed, `MedicationRequest.medicationReference` is preferred to `MedicationRequest.code` and use of extensions, see guidance on [AU Base Medication](StructureDefinition-au-medication.html).
- See each Identifier profile page for guidance related to that identifier type.

**Potentially useful extensions:**
* MedicationRequest: [Medication Brand Name](StructureDefinition-medication-brand-name.html) 
* MedicationRequest: [Medication Generic Name](StructureDefinition-medication-generic-name.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medicationstatement-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When identifying a medication, this resource can use either a code or refer to a Medication resource. 
- If making use of `MedicationStatement.code`, this profile includes coding as:
  - [PBS Item Code](https://www.pbs.gov.au/pbs/home) - Pharmaceutical Benefits Scheme coding, claiming context is not relevant as medicine coding
  - [Medication Package Global Trade Item Number](http://terminology.hl7.org/ValueSet/v3-GTIN) - Global Trade Item Number (GTIN) physical product reference
  - [AMT Medicines](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) - Australian Medicines Terminology, national drug terminology
  - [MIMS Package](https://www.mims.com.au/index.php) - commonly used medicine coding
- If a medication is compounded and is a list of ingredients, `MedicationStatement.code` is still present and may contain only the list of ingredients as text in `MedicationStatement.code.text`.
- Where additional medicinal product information is needed, `MedicationStatement.medicationReference` is preferred to `MedicationStatement.code` and use of extensions, see guidance on [AU Base Medication](StructureDefinition-au-medication.html).

**Potentially useful extensions:**
* MedicationStatement: [Medication Brand Name](StructureDefinition-medication-brand-name.html)
* MedicationStatement: [Medication Generic Name](StructureDefinition-medication-generic-name.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-medlist-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- It is important to clearly differentiate between representing the extent of a system's information for a patient versus clinical judgement of no relevant finding:
  - When asserting clinical judgement that there are no items of specific interest, (e.g. no current medications or no history of vaccination), `List.entry.item` with a reference to a supported FHIR resource containing the record of assertion should be sent. [AU Assertion of No Relevant Finding](StructureDefinition-au-norelevantfinding.html) is defined in this implementation guide for this concept.
  - When a statement is about the nature or extent of the information the system has access to or is permitted to share, (e.g. not asked or information withheld), `List.emptyReason` should be sent with an appropriate code from the [ListEmptyReasons](http://hl7.org/fhir/R4/valueset-list-empty-reason.html) value set.
- When a related person is the author of the list, the [Author as a RelatedPerson](StructureDefinition-author-related-person.html) extension is used and `List.source` is not included.
- If both the `List.entry.changeDescription` extension and `List.entry.flag` are populated the extension should only be used to expand on the `List.entry.flag` concept and not contradict its meaning.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-nataaccreditationnumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-natasitenumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-nationalprovideridentifieratorganisation-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-norelevantfinding-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-organization-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When selecting a code for `Organization.type`:
  - Where possible a code from the preferred [Healthcare Organisation Role Type](https://healthterminologies.gov.au/fhir/ValueSet/healthcare-organisation-role-type-1) value set should be selected.
  - If a system is unable to provide a code from the preferred value set because the implementation context is not restricted to healthcare practitioner providers then it is recommended to select a suitable code from SNOMED CT. 
  - If a suitable code from SNOMED CT is not available, a code from the code system [Australian and New Zealand Standard Industrial Classification (ANZSIC), 2006 (Revision 2.0)](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/anzsic-2006-20130626) may be used.
- See each Identifier profile page for guidance related to that identifier type.
- Additional considerations for systems aligning to HL7 AU Base:
  - Contact details and associated contact purpose are encouraged to be sent in `Organization.contact` over making use of the [Contact Purpose](StructureDefinition-contact-purpose.html) extension.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-paididentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-paioidentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-pathologyreport-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Results that are free text or report form are represented in `DiagnosticReport.presentedForm`.
- Results that are structured in FHIR resources are referenced in `DiagnosticResult.result`. Each referenced Observation resource represents an individual pathology test and result value or component result values, or a study / panel which references other Observations in `Observation.hasMember`.
- When constructing a report for a study / panel:
  - the individual component examinations are referenced by that grouping Observation in `Observation.hasMember` and not directly referenced in `DiagnosticReport.result`
  - `DiagnosticReport.code` and the study / panel Observation `Observation.code` should be the same concept if the report contains only the results of that study / panel
- See each Identifier profile page for guidance related to that identifier type.
- `effective[x]` is the earliest specimen collection date time.
- The pathology laboratory is sent as a reference to an Organization in `DiagnosticReport.performer`.
- Each pathologist is sent as a reference to a PractitionerRole resource in `DiagnosticReport.performer`.
- When sending a discipline specific laboratory result, one of discipline specific value sets may be more suitable for use than the entire reporting value set bound in this profile to `DiagnosticReport.code`:
  - [ValueSet : RCPA - SPIA Chemical Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-chemical-pathology-refset-3?ui:source=search)
  - [ValueSet : RCPA - SPIA Haematology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-haematology-refset-3?ui:source=search)
  - [ValueSet : RCPA - SPIA Immunopathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-immunopathology-refset-3?ui:source=search)
  - [ValueSet : RCPA - SPIA Microbiology Serology Molecular Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-microbiology-serology-molecular-refset-3?ui:source=search)


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-pathologyresult-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- When sending an observation that represents a study series or panel:
  - the group / panel code is sent in `Observation.code`
  - the overall comments are sent in `Observation.note`
  - the global interpretation by the producer of the study is sent in `Observation.interpretation`
  - individual results may be sent in `Observation.component` or by referencing individual observation results in `Observation.hasMember`
- When sending a discipline specific laboratory result, one of discipline specific value sets may be more suitable for use than the entire reporting value set bound in this profile to `Observation.code`:
  - [ValueSet : RCPA - SPIA Chemical Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-chemical-pathology-refset-3?ui:source=search)
  - [ValueSet : RCPA - SPIA Haematology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-haematology-refset-3?ui:source=search)
  - [ValueSet : RCPA - SPIA Immunopathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-immunopathology-refset-3?ui:source=search)
  - [ValueSet : RCPA - SPIA Microbiology Serology Molecular Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-microbiology-serology-molecular-refset-3?ui:source=search)


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-patient-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- See each Identifier profile page for guidance related to that identifier type.
- This profile supports the sex, gender, and related concepts of: Name to Use, Gender Identity, Individual Pronouns, Recorded Sex or Gender, Sex Assigned at Birth.
- When exchanging concepts of sex or gender, refer to the guidance in [Sex and Gender](sexgender.html) and the [Gender Harmony Implementation Guide](http://hl7.org/xprod/ig/uv/gender-harmony/).
- The Patient.gender value **SHALL** be regarded as a Recorded Sex or Gender (RSG) value. If assertions regarding the nature of the `Patient.gender` value are required, a single instance of the [Person Recorded Sex or Gender](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension may be included with these assertions and its `genderElementQualifier` subelement set to a value of "true".
- Need for an interpreter service can be represented with the [interpreterRequired extension](http://hl7.org/fhir/R4/extension-patient-interpreterrequired.html) set to "true" 
  - If the language for interpreter service is known, the language is included in `Patient.communication.language` and `Patient.communication.preferred` is set to "true". 
  - If `Patient.communication.preferred` has not been included, or is set to "false", systems should understand this as the language for the interpreter service is not known.

**Extensions under consideration:**
* Patient: [Ethnicity](StructureDefinition-ethnicity.html)


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-pbsprescribernumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-pensionerconcessioncardnumber-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The value of the identifier is the CRN. Implementers should be aware that a DVA-issued card will also include an individual's state-based DVA file number but only the CRN should be sent as the Pensioner Concession Card number.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-pharmacyapprovalnumber-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-practitioner-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- See each Identifier profile page for guidance related to that identifier type.
- This profile supports the sex, gender, and related concepts of: Name to Use, Gender Identity, Individual Pronouns, Recorded Sex or Gender, Sex Assigned at Birth.
- When exchanging concepts of sex or gender, refer to the guidance in [Sex and Gender](sexgender.html) and the [Gender Harmony Implementation Guide](http://hl7.org/xprod/ig/uv/gender-harmony/).
- See [Australian Health Practitioner Regulation Agency (Ahpra) Data Guidance](generalguidance.html#australian-health-practitioner-regulation-agency-ahpra-data-guidance) for detailed guidance on representing Ahpra-sourced data.
- A tertiary qualification or professional membership (non-Ahpra-sourced data) is represented by `Practitioner.qualification`
  - If none of the codes from the preferred value set are suitable then at least text should be sent in `Practitioner.qualification.code`



---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-practitionerrole-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- If a system needs to differentiate contacts for a practitioner in a role by purpose:
  - contact information is sent in `PractitionerRole.telecom`
  - purpose for the contact is sent using the [Contact Purpose](StructureDefinition-contact-purpose.html) extension in `PractitionerRole.telecom.extension`
- When selecting a code for `PractitionerRole.code`:
  - Where possible a code from the preferred [Practitioner Role](https://healthterminologies.gov.au/fhir/ValueSet/practitioner-role-1) value set should be selected.
  - If a system is unable to provide a code from the preferred value set because the implementation context is not restricted to healthcare practitioner providers then it is recommended to select a suitable code from SNOMED CT. 
  - If a suitable code from SNOMED CT is not available a code from the value set [Australian and New Zealand Standard Classification of Occupations](https://healthterminologies.gov.au/fhir/ValueSet/anzsco-1) may be used.
- See each Identifier profile page for guidance related to that identifier type.

**Potentially useful extensions:**
* PractitionerRole.telecom: [Contact Purpose](StructureDefinition-contact-purpose.html)


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-procedure-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The [procedure-targetBodyStructure](http://hl7.org/fhir/R4/extension-procedure-targetbodystructure.html) extension may be suitable for use where
   - the body site is not implicit in the code found in `Procedure.code` and  
   - body site information is to be handled as a separate resource (e.g. to identify and track separately) instead of an inline coded element in `Procedure.bodySite`. 


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-receivingapplication-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-receivingfacility-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-relatedperson-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- See each Identifier profile page for guidance related to that identifier type.
- This profile supports the sex, gender, and related concepts of: Name to Use, Gender Identity, Individual Pronouns, Recorded Sex or Gender, Sex Assigned at Birth.
- When exchanging concepts of sex or gender, refer to the guidance in [Sex and Gender](sexgender.html) and the [Gender Harmony Implementation Guide](http://hl7.org/xprod/ig/uv/gender-harmony/).

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-residentialagedcareserviceidentifier-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-servicerequest-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The [procedure-targetBodyStructure](http://hl7.org/fhir/R4/extension-procedure-targetbodystructure.html) extension may be suitable for use where
   - body site is not implicit in the code found in `ServiceRequest.code` and  
   - body site information is to be handled as a separate resource (e.g. to identify and track separately) instead of an inline coded element in `ServiceRequest.bodySite`. 
- See each Identifier profile page for guidance related to that identifier type.

**Extensions under consideration:**
* ServiceRequest: [Result Copies To](StructureDefinition-result-copies-to.html) 

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-specimen-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-substance-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-au-timezone-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-author-related-person-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-change-description-intro.md

### Usage Notes

**Profile specific implementation guidance:**

* This extension can be used in conjunction with `List.entry.flag` to provide associated narrative for the flag. For example, a medication list with an item flagged as "ceased" may include the reason for cessation in this extension.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-closing-the-gap-registration-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Set to "true" if a patient is eligible for CTG co-payment.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-contact-purpose-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-date-accuracy-indicator-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-date-of-arrival-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-dispense-number-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Set to "1" if there are no repeats.
- Increment by one each time a dispense act is successfully completed.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-encounter-description-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-encryption-certificate-pem-x509-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- The value recorded is an X509 certificate in PEM format as per [RFC7468](https://tools.ietf.org/html/rfc7468).


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-ethnicity-intro.md

NOTE: There is concern on the appropriateness of the [Australian Standard Classification of Cultural and Ethnic Groups (ASCCEG) 2019](https://www.abs.gov.au/statistics/classifications/australian-standard-classification-cultural-and-ethnic-groups-ascceg/2019) and the more specific [ancestry coding index](https://www.abs.gov.au/statistics/classifications/australian-standard-classification-cultural-and-ethnic-groups-ascceg/2019#index-for-coding-responses) for use as a terminology outside of a statistical domain. Feedback is sought on the suitability of these coding standards in supporting targeted provision of culturally appropriate healthcare services.

NOTE: This extension is not suitable for use when an ethnic identity is comprised of an unstructured string of potentially multiple composites (e.g. 'Of Malaysian and German descent but associates more as a Malay'). Feedback is sought on how to support an unstructured string, including the possibility of a string alternative to cater for narrative or composite text statements.

### Usage Notes


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-identifier-routability-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-ihi-record-status-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-ihi-status-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-ihi-verified-date-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-indigenous-status-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-individual-pronouns-intro.md

<p class="stu-note">Implementers are advised to take note that this content may be removed or changed and to take caution if using this extension.</p>

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-individual-recordedSexOrGender-intro.md

<p class="stu-note">This R4 (4.0.1) conversion of the <a href="https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html">Person Recorded Sex Or Gender</a> extension published in the R5 <a href="http://hl7.org/fhir/extensions/1.0.0">FHIR Extensions Pack</a> applies the expected future changes in <a href="https://jira.hl7.org/browse/FHIR-44514">FHIR-44514</a>. When available in the R4 extension pack this inclusion will be removed and AU Base will point to the extension pack.</p>

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-information-recipient-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-medication-brand-name-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- This extension can be used in conjunction with the [Medication Generic Name](StructureDefinition-medication-generic-name.html) extension to provide non-coded support for medicinal product information, see example [Medication/UncodedProduct0](Medication-UncodedProduct0.html).

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-medication-generic-name-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- This extension can be used in conjunction with the [Medication Brand Name](StructureDefinition-medication-brand-name.html) extension to provide non-coded support for medicinal product information, see example [Medication/UncodedProduct0](Medication-UncodedProduct0.html).

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-medication-long-term-intro.md

### Usage Notes

**Profile specific implementation guidance:**
- Set to "true" if a medication is for long term use.


---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-medication-strength-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-medication-type-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-no-fixed-address-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-result-copies-to-intro.md

### Usage Notes
The use of this extension might be replaced by the use of the more comprehensive [CommunicationRequest](https://www.hl7.org/fhir/r4/communicationrequest.html) resource type.

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-subsidised-concurrent-supply-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/intro-notes/StructureDefinition-vaccine-serial-number-intro.md

### Usage Notes

---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/changes.md

### Release TBD
- Publication date: TBD
- Publication status: TBD
- Based on FHIR version: 4.0.1

To help implementers, only the more significant changes are listed here.

#### Changes in this version
<ul>
  <li>New profiles:
  <ul>
  <li><a href="StructureDefinition-au-servicerequest.html">AU Base Service Request</a> (<a href="https://jira.hl7.org/browse/FHIR-46714">FHIR-46714</a>)</li>
  </ul>
  </li>
  <li>New extensions:
  <ul>
  <li><a href="StructureDefinition-veteran-status.html">Australian Veteran Status</a> (<a href="https://github.com/hl7au/au-fhir-base/issues/790">au-fhir-base #790</a>)</li>
  <li><a href="StructureDefinition-name-context.html">Name Context</a> (<a href="https://jira.hl7.org/browse/FHIR-45980">FHIR-45980</a>)</li>
  </ul>
  </li>
  <li>New value sets:
  <ul>
  <li><a href="ValueSet-au-jurisdiction-extended.html">Jurisdiction ValueSet - AU Extended</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>, <a href="https://jira.hl7.org/browse/FHIR-46351">FHIR-46351</a>)</li>
  <li><a href="ValueSet-rsg-source-document-type.html">AU Recorded Sex or Gender (RSG) Source Document Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
  <li><a href="ValueSet-rsg-type.html">AU Recorded Sex or Gender Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
  <li><a href="ValueSet-name-context.html">Name Context</a> (<a href="https://jira.hl7.org/browse/FHIR-45980">FHIR-45980</a>)</li>
  </ul>
  </li>
  <li>New code systems:
  <ul>
  <li><a href="CodeSystem-rsg-source-document-type.html">AU Recorded Sex or Gender Source Document Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
   <li><a href="CodeSystem-rsg-type.html">AU Recorded Sex or Gender Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>, <a href="https://jira.hl7.org/browse/FHIR-46428">FHIR-46428</a>)</li>
   <li><a href="CodeSystem-name-context.html">Name Context</a> (<a href="https://jira.hl7.org/browse/FHIR-45980">FHIR-45980</a>)</li>
  </ul>
  </li>
  <li>New search parameters:
  <ul>
  <li><a href="SearchParameter-indigenous-status.html">AustralianIndigenousStatus</a></li>
  <li><a href="SearchParameter-encounter-discharge-disposition.html">EncounterDischargeDisposition</a></li>
  <li><a href="SearchParameter-gender-identity.html">GenderIdentity</a> (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
  </ul>
  </li>
  <li>Changes to <a href="StructureDefinition-au-patient.html">AU Base Patient</a>:
    <ul>
      <li>Patient.extension changed to:
          <ul>
            <li>add Individual Pronouns (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
            <li>add Person Recorded Sex Or Gender (RSG) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
            <li>add Australian Veteran Status (<a href="https://github.com/hl7au/au-fhir-base/issues/790">au-fhir-base #790</a>)</li>
            <li>remove genderIdentity extension and replace it with the Individual Gender Identity extension (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
          </ul>
      </li>    
      <li>Added invariant inv-pat-1 to apply Gender Identity Response value set (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
      <li>Added invariant inv-pat-2 to apply Australian Pronouns value set (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
      <li>Added invariant inv-pat-3 to RSG.type to bind AU Recorded Sex or Gender Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pat-4 to RSG.sourceDocument.type to bind AU Recorded Sex or Gender (RSG) Source Document Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pat-5 to RSG.sourceDocument.jurisdiction to bind Jurisdiction ValueSet - AU Extended (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
    </ul> 
  </li>
  <li>Changes to <a href="StructureDefinition-au-relatedperson.html">AU Base RelatedPerson</a>:
    <ul>
      <li>RelatedPerson.extension changed to:
        <ul>
          <li>add Individual Gender Identity (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
          <li>add Individual Pronouns (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
          <li>add Person Recorded Sex Or Gender (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
        </ul>
      </li>
      <li>Added invariant inv-relper-0 to apply Gender Identity Response value set (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
      <li>Added invariant inv-relper-1 to apply Australian Pronouns value set (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
      <li>Added invariant inv-relper-2 to RSG.type to bind AU Recorded Sex or Gender Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-relper-3 to RSG.sourceDocument.type to bind AU Recorded Sex or Gender (RSG) Source Document Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-relper-4 to RSG.sourceDocument.jurisdiction to bind Jurisdiction ValueSet - AU Extended (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
    </ul>
  </li>
  <li>Changes to <a href="StructureDefinition-au-practitioner.html">AU Base Practitioner</a>:
    <ul>
      <li>Practitioner.extension added:
        <ul>
          <li>add Individual Gender Identity (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
          <li>add Individual Pronouns (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
          <li>add Person Recorded Sex Or Gender (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
        </ul>
      </li>
      <li>Added invariant inv-pra-2 to apply Gender Identity Response value set (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
      <li>Added invariant inv-pra-3 to apply Australian Pronouns value set (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
      <li>Added invariant inv-pra-4 to RSG.type to bind AU Recorded Sex or Gender Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pra-5 to RSG.sourceDocument.type to bind AU Recorded Sex or Gender (RSG) Source Document Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pra-6 to RSG.sourceDocument.type to bind Jurisdiction ValueSet - AU Extended (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
    </ul>
  </li>
  <li>Deprecated <a href="StructureDefinition-au-diagnosticrequest.html">AU Base Diagnostic Request</a> (<a href="https://jira.hl7.org/browse/FHIR-46714">FHIR-46714</a>).</li>
  <li>Removed cardinality constraint on Identifier.assigner in <a href="StructureDefinition-au-localorderidentifier.html">AU Local Order Identifier</a>, changing it from 1..1 to 0..1 (<a href="https://jira.hl7.org/browse/FHIR-47188">FHIR-47188</a>).</li>
  <li>Added minimum length constraint of 10 characters to Identifier.value in <a href="StructureDefinition-au-medicarecardnumber.html">AU Medicare Card Number</a> (<a href="https://jira.hl7.org/browse/FHIR-46619">FHIR-46619</a>).</li>
  <li>Changed context of extension <a href="StructureDefinition-indigenous-status.html">Australian Indigenous Status</a> to add Person and RelatedPerson.</li>
  <li>Changed Coverage.identifier type in <a href="StructureDefinition-au-coverage.html">AU Base Coverage</a> to add AU Pensioner Concession Card Number, AU Commonwealth Seniors Health Card Number and AU Health Care Card Number (<a href="https://jira.hl7.org/browse/FHIR-47191">FHIR-47191</a>).</li>
  <li>Changed Observation.code to add additional bindings for component value sets in <a href="StructureDefinition-au-pathologyresult.html">AU Base Pathology Result</a> (<a href="https://jira.hl7.org/browse/FHIR-46080">FHIR-46080</a>).</li>
  <li>Changed Medication.code to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medication.html">AU Base Medication</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationAdministration.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationadministration.html">AU Base Medication Administration</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationDispense.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationdispense.html">AU Base Medication Dispense</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationRequest.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationrequest.html">AU Base Medication Request</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationStatement.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationstatement.html">AU Base Medication Statement</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed Immunization.code to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-immunization.html">AU Base Immunisation</a> (<a href="https://jira.hl7.org/browse/FHIR-44821">FHIR-44821</a>).</li>
  <li>Added a guidance page on AU Base relationship with other HL7 AU FHIR implementation guides.</li>
  <li>Added a guidance page on sex, gender, and related concepts to AU Base to provide guidance on Name to Use, Gender Identity, Pronouns, Recorded Sex or Gender, and Sex Assigned at Birth (<a href="https://jira.hl7.org/browse/FHIR-46415">FHIR-46415</a>, <a href="https://jira.hl7.org/browse/FHIR-46429">FHIR-46429</a>, <a href="https://jira.hl7.org/browse/FHIR-46430">FHIR-46430</a>, <a href="https://jira.hl7.org/browse/FHIR-46428">FHIR-46428</a>).</li>
  <li>Added Biological Sex at Birth code to <a href="ValueSet-rsg-type.html">AU Recorded Sex or Gender Type</a> value set (<a href="https://jira.hl7.org/browse/FHIR-46544">FHIR-46544</a>).</li>
  <li>Maturity level changed to FMM 1 for the following:
    <ul>
      <li><a href="ValueSet-rsg-type.html">AU Recorded Sex or Gender Type</a> value set, <a href="CodeSystem-rsg-type.html">AU Recorded Sex or Gender Type</a> code system (<a href="https://jira.hl7.org/browse/FHIR-46528">FHIR-46528</a>)</li>
      <li><a href="ValueSet-rsg-source-document-type.html">AU Recorded Sex or Gender (RSG) Source Document Type</a> value set, <a href="CodeSystem-rsg-source-document-type.html">AU Recorded Sex or Gender Source Document Type</a> code system (<a href="https://jira.hl7.org/browse/FHIR-46529">FHIR-46529</a>)</li>
      <li><a href="ValueSet-au-jurisdiction-extended.html">Jurisdiction ValueSet - AU Extended</a> value set (<a href="https://jira.hl7.org/browse/FHIR-46530">FHIR-46530</a>)</li>
     <li><a href="StructureDefinition-au-paididentifier.html">AU PAI-D Identifier</a> (<a href="https://jira.hl7.org/browse/FHIR-46531">FHIR-46531</a>)</li>
     <li><a href="StructureDefinition-au-residentialagedcareserviceidentifier.html">AU Residential Aged Care Service Identifier</a> (<a href="https://jira.hl7.org/browse/FHIR-46532">FHIR-46532</a>)</li>
      <li><a href="StructureDefinition-au-substance.html">AU Base Substance</a> (<a href="https://jira.hl7.org/browse/FHIR-46533">FHIR-46533</a>)</li>
      <li><a href="StructureDefinition-veteran-status.html">Australian Veteran Status</a> (<a href="https://jira.hl7.org/browse/FHIR-46534">FHIR-46534</a>)</li>
      <li><a href="StructureDefinition-name-context.html">Name Context</a> extension, <a href="ValueSet-name-context.html">Name Context</a> value set, <a href="CodeSystem-name-context.html">Name Context</a> code system (<a href="https://jira.hl7.org/browse/FHIR-46535">FHIR-46535</a>)</li>
      <li><a href="StructureDefinition-result-copies-to.html">Result Copies To</a> extension (<a href="https://jira.hl7.org/browse/FHIR-47187">FHIR-47187</a>)</li>
    </ul>
  </li>
  <li>Updated AU Base CodeSystem resources to remove conformance to HL7 International <a href="http://hl7.org/fhir/StructureDefinition/shareablecodesystem">ShareableCodeSystem</a> and instead claim conformance to <a href="https://healthterminologies.gov.au/fhir/StructureDefinition/complete-code-system-4"> NCTS Complete CodeSystem</a> (<a href="https://jira.hl7.org/browse/FHIR-47148">FHIR-47148</a>) 
  </li>
  <li>Updated AU Base ValueSet resources to remove conformance to HL7 International <a href="http://hl7.org/fhir/StructureDefinition/shareablevalueset">ShareableValueSet</a> and instead claim conformance to <a href="https://healthterminologies.gov.au/fhir/StructureDefinition/composed-value-set-4"> NCTS Composed ValueSet</a> (<a href="https://jira.hl7.org/browse/FHIR-47149">FHIR-47149</a>) 
  </li>
  <li>Removed codes from <a href="ValueSet-au-v3-ActEncounterCode-extended.html" >ActEncounterCode - AU Extended</a> (<a href="https://jira.hl7.org/browse/FHIR-47120">FHIR-47120</a>)
  </li>
  <li>Removed DiagnosticReport.category.coding:anatomicRegionOfInterest slice from <a href="StructureDefinition-au-diagnosticreport.html" >AU Base Diagnostic Report</a> (<a href="https://jira.hl7.org/browse/FHIR-46933">FHIR-46933</a>)</li>
  <li>Change base definition of <a href="StructureDefinition-au-imagingreport.html" >AU Base Diagnostic Imaging Report</a> and <a href="StructureDefinition-au-pathologyreport.html" >AU Base Pathology Report</a> to be <a href="StructureDefinition-au-diagnosticreport.html" >AU Base Diagnostic Report</a> (<a href="https://jira.hl7.org/browse/FHIR-46898">FHIR-46898</a>)</li>
</ul>

### Release 4.2.2-ballot
- Publication date: 2024-08-04
- Publication status: Ballot
- Based on FHIR version: 4.0.1

The changes in this update are for ballot. 

To help implementers, only the more significant changes are listed here.

#### Changes in this version
<ul>
  <li>New profiles:
  <ul>
   <li><a href="StructureDefinition-au-coverage.html">AU Base Coverage</a> (Draft supporting AU eRequesting FHIR IG)</li>
  </ul>
  </li>
  <li>New extensions:
  <ul>
  <li><a href="StructureDefinition-veteran-status.html">Australian Veteran Status</a> (<a href="https://github.com/hl7au/au-fhir-base/issues/790">au-fhir-base #790</a>)</li>
  <li><a href="StructureDefinition-name-context.html">Name Context</a> (<a href="https://jira.hl7.org/browse/FHIR-45980">FHIR-45980</a>)</li>
  </ul>
  </li>
  <li>New value sets:
  <ul>
  <li><a href="ValueSet-au-jurisdiction-extended.html">Jurisdiction ValueSet - AU Extended</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>, <a href="https://jira.hl7.org/browse/FHIR-46351">FHIR-46351</a>)</li>
  <li><a href="ValueSet-rsg-source-document-type.html">AU Recorded Sex or Gender (RSG) Source Document Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
  <li><a href="ValueSet-rsg-type.html">AU Recorded Sex or Gender Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
  <li><a href="ValueSet-name-context.html">Name Context</a> (<a href="https://jira.hl7.org/browse/FHIR-45980">FHIR-45980</a>)</li>
  </ul>
  </li>
  <li>New code systems:
  <ul>
  <li><a href="CodeSystem-rsg-source-document-type.html">AU Recorded Sex or Gender Source Document Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
   <li><a href="CodeSystem-rsg-type.html">AU Recorded Sex or Gender Type</a> (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>, <a href="https://jira.hl7.org/browse/FHIR-46428">FHIR-46428</a>)</li>
   <li><a href="CodeSystem-name-context.html">Name Context</a> (<a href="https://jira.hl7.org/browse/FHIR-45980">FHIR-45980</a>)</li>
  </ul>
  </li>
  <li>New search parameters:
  <ul>
  <li><a href="SearchParameter-indigenous-status.html">AustralianIndigenousStatus</a></li>
  <li><a href="SearchParameter-encounter-discharge-disposition.html">EncounterDischargeDisposition</a></li>
  <li><a href="SearchParameter-gender-identity.html">GenderIdentity</a> (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
  </ul>
  </li>
  <li>Changes to <a href="StructureDefinition-au-patient.html">AU Base Patient</a>:
    <ul>
      <li>Patient.extension changed to:
          <ul>
            <li>add Individual Pronouns (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
            <li>add Person Recorded Sex Or Gender (RSG) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
            <li>add Australian Veteran Status (<a href="https://github.com/hl7au/au-fhir-base/issues/790">au-fhir-base #790</a>)</li>
            <li>remove genderIdentity extension and replace it with the Individual Gender Identity extension (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
          </ul>
      </li>    
      <li>Added invariant inv-pat-1 to apply Gender Identity Response value set (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
      <li>Added invariant inv-pat-2 to apply Australian Pronouns value set (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
      <li>Added invariant inv-pat-3 to RSG.type to bind AU Recorded Sex or Gender Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pat-4 to RSG.sourceDocument.type to bind AU Recorded Sex or Gender (RSG) Source Document Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pat-5 to RSG.sourceDocument.jurisdiction to bind Jurisdiction ValueSet - AU Extended (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
    </ul> 
  </li>
  <li>Changes to <a href="StructureDefinition-au-relatedperson.html">AU Base RelatedPerson</a>:
    <ul>
      <li>RelatedPerson.extension changed to:
        <ul>
          <li>add Individual Gender Identity (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
          <li>add Individual Pronouns (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
          <li>add Person Recorded Sex Or Gender (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
        </ul>
      </li>
      <li>Added invariant inv-relper-0 to apply Gender Identity Response value set (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
      <li>Added invariant inv-relper-1 to apply Australian Pronouns value set (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
      <li>Added invariant inv-relper-2 to RSG.type to bind AU Recorded Sex or Gender Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-relper-3 to RSG.sourceDocument.type to bind AU Recorded Sex or Gender (RSG) Source Document Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-relper-4 to RSG.sourceDocument.jurisdiction to bind Jurisdiction ValueSet - AU Extended (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
    </ul>
  </li>
  <li>Changes to <a href="StructureDefinition-au-practitioner.html">AU Base Practitioner</a>:
    <ul>
      <li>Practitioner.extension added:
        <ul>
          <li>add Individual Gender Identity (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
          <li>add Individual Pronouns (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
          <li>add Person Recorded Sex Or Gender (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>)</li>
        </ul>
      </li>
      <li>Added invariant inv-pra-2 to apply Gender Identity Response value set (<a href="https://jira.hl7.org/browse/FHIR-43718">FHIR-43718</a>)</li>
      <li>Added invariant inv-pra-3 to apply Australian Pronouns value set (<a href="https://jira.hl7.org/browse/FHIR-43719">FHIR-43719</a>)</li>
      <li>Added invariant inv-pra-4 to RSG.type to bind AU Recorded Sex or Gender Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pra-5 to RSG.sourceDocument.type to bind AU Recorded Sex or Gender (RSG) Source Document Type (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
      <li>Added invariant inv-pra-6 to RSG.sourceDocument.type to bind Jurisdiction ValueSet - AU Extended (extensible) (<a href="https://jira.hl7.org/browse/FHIR-43834">FHIR-43834</a>).</li>
    </ul>
  </li>
  <li>Changed context of extension <a href="StructureDefinition-indigenous-status.html">Australian Indigenous Status</a> to add Person and RelatedPerson.</li>
  <li>Changed Observation.code to add additional bindings for component value sets in <a href="StructureDefinition-au-pathologyresult.html">AU Base Pathology Result</a> (<a href="https://jira.hl7.org/browse/FHIR-46080">FHIR-46080</a>).</li>
  <li>Changed Medication.code to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medication.html">AU Base Medication</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationAdministration.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationadministration.html">AU Base Medication Administration</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationDispense.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationdispense.html">AU Base Medication Dispense</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationRequest.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationrequest.html">AU Base Medication Request</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed MedicationStatement.medicationCodeableConcept to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-medicationstatement.html">AU Base Medication Statement</a> (<a href="https://jira.hl7.org/browse/FHIR-44823">FHIR-44823</a>).</li>
  <li>Changed Immunization.code to replace slices with Additional Bindings as 'preferred' in <a href="StructureDefinition-au-immunization.html">AU Base Immunisation</a> (<a href="https://jira.hl7.org/browse/FHIR-44821">FHIR-44821</a>).</li>
  <li>Added a guidance page on AU Base relationship with other HL7 AU FHIR implementation guides.</li>
  <li>Added a guidance page on sex, gender, and related concepts to AU Base to provide guidance on Name to Use, Gender Identity, Pronouns, Recorded Sex or Gender, and Sex Assigned at Birth (<a href="https://jira.hl7.org/browse/FHIR-46415">FHIR-46415</a>, <a href="https://jira.hl7.org/browse/FHIR-46429">FHIR-46429</a>, <a href="https://jira.hl7.org/browse/FHIR-46430">FHIR-46430</a>, <a href="https://jira.hl7.org/browse/FHIR-46428">FHIR-46428</a>).</li>
  <li>Maturity level changed to FMM 1 for the following:
    <ul>
      <li><a href="ValueSet-rsg-type.html">AU Recorded Sex or Gender Type</a> value set, <a href="CodeSystem-rsg-type.html">AU Recorded Sex or Gender Type</a> code system (<a href="https://jira.hl7.org/browse/FHIR-46528">FHIR-46528</a>)</li>
      <li><a href="ValueSet-rsg-source-document-type.html">AU Recorded Sex or Gender (RSG) Source Document Type</a> value set, <a href="CodeSystem-rsg-source-document-type.html">AU Recorded Sex or Gender Source Document Type</a> code system (<a href="https://jira.hl7.org/browse/FHIR-46529">FHIR-46529</a>)</li>
      <li><a href="ValueSet-au-jurisdiction-extended.html">Jurisdiction ValueSet - AU Extended</a> value set (<a href="https://jira.hl7.org/browse/FHIR-46530">FHIR-46530</a>)</li>
     <li><a href="StructureDefinition-au-paididentifier.html">AU PAI-D Identifier</a> (<a href="https://jira.hl7.org/browse/FHIR-46531">FHIR-46531</a>)</li>
     <li><a href="StructureDefinition-au-residentialagedcareserviceidentifier.html">AU Residential Aged Care Service Identifier</a> (<a href="https://jira.hl7.org/browse/FHIR-46532">FHIR-46532</a>)</li>
      <li><a href="StructureDefinition-au-substance.html">AU Base Substance</a> (<a href="https://jira.hl7.org/browse/FHIR-46533">FHIR-46533</a>)</li>
      <li><a href="StructureDefinition-veteran-status.html">Australian Veteran Status</a> (<a href="https://jira.hl7.org/browse/FHIR-46534">FHIR-46534</a>)</li>
      <li><a href="StructureDefinition-name-context.html">Name Context</a> extension, <a href="ValueSet-name-context.html">Name Context</a> value set, <a href="CodeSystem-name-context.html">Name Context</a> code system (<a href="https://jira.hl7.org/browse/FHIR-46535">FHIR-46535</a>)</li>
    </ul>
  </li>
</ul>

### Release 4.1.0
- Publication date: 2023-02-22
- Publication status: Trial Use
- Based on FHIR version: 4.0.1

To help implementers, only the more significant changes are listed here.

#### Changes in this version
<ul>
<li>Changed HL7 AU implementation guide publication structure and format to better align to current HL7 practices.</li>
<li>New profiles:
<ul>
<li><a href="StructureDefinition-au-healthprogramparticipation.html">AU Health Program Participation Summary</a></li>
</ul>
</li>
<li>New extensions:
<ul>
<li><a href="StructureDefinition-result-copies-to.html">Result copies to</a> (<a href="https://github.com/hl7au/au-fhir-base/issues/670">au-fhir-base #670</a>)</li>
</ul>
</li>
<li>New value sets:
<ul>
<li><a href="ValueSet-au-observation-category-extended.html">Observation Category Codes - AU Extended</a></li>
</ul>
</li>
<li>New code systems:
<ul>
<li><a href="CodeSystem-au-observation-category.html">Observation Category Codes AU</a></li>
</ul>
</li>
<li>Removed profiles (migrated to AU Core):
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
    <li>AU Biological Sex Assigned at Birth</li>
    <li>AU Blood Pressure</li>
    <li>AU Body Height</li>
    <li>AU Body Mass Index</li>
    <li>AU Body Temperature</li>
    <li>AU Body Weight</li>
    <li>AU Estimated Date of Delivery</li>
    <li>AU Gestational Age</li>
    <li>AU Gravidity</li>
    <li>AU Head Circumference</li>
    <li>AU Heart Rate</li>
    <li>AU Last Menstrual Period</li>
    <li>AU Oxygen Saturation</li>
    <li>AU Parity</li>
    <li>AU Respiration Rate</li>
    <li>AU Smoking Status</li>
    <li>AU Vital Signs Panel</li>
</ul>
</li>
<li>Changed Patient.extension in <a href="StructureDefinition-au-patient.html">AU Base Patient:</a> to add genderIdentity and change the binding to <a href="https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1">Gender Identity Response</a> (extensible) (<a href="https://github.com/hl7au/au-fhir-base/issues/599">au-fhir-base #599</a>, <a href="https://jira.hl7australia.com/browse/FHIRIG-186">FHIRIG #186</a>).</li>
<li>Changed Encounter.type binding in <a href="StructureDefinition-au-encounter.html">AU Base Encounter</a> to Encounter Type (preferred) (<a href="https://github.com/hl7au/au-fhir-base/issues/382">au-fhir-base #382</a>, <a href="https://jira.hl7australia.com/browse/FHIRIG-191">FHIRIG #191</a>).</li>
<li>Changed Encounter.serviceType binding in <a href="StructureDefinition-au-encounter.html">AU Base Encounter</a> to Service Type (preferred)(<a href="https://github.com/hl7au/au-fhir-base/issues/684">au-fhir-base #684</a>, <a href="https://jira.hl7australia.com/browse/FHIRIG-191">FHIRIG #191</a>).</li>
<li>Technical correction of DiagnosticReport.code binding strength in <a href="StructureDefinition-au-diagnosticreport.html">AU Base Diagnostic Report</a> to preferred (<a href="https://jira.hl7australia.com/browse/FHIRIG-233">FHIRIG #233</a>).</li>
<li>Changed Immunization.statusReason binding in <a href="StructureDefinition-au-immunization.html">AU Base Immunisation</a> to Reason Vaccine Not Administered v3 (<a href="https://github.com/hl7au/au-fhir-base/issues/745">au-fhir-base #745</a>).</li>
<li>Changed Immunization.site.coding cardinality in <a href="StructureDefinition-au-immunization.html">AU Base Immunisation</a> to remove cardinality restriction (<a href="https://jira.hl7australia.com/browse/FHIRIG-242">FHIRIG #242</a>).</li>
<li>Changed Immunization.route.coding cardinality in <a href="StructureDefinition-au-immunization.html">AU Base Immunisation</a> to remove cardinality restriction (<a href="https://jira.hl7australia.com/browse/FHIRIG-242">FHIRIG #242</a>).</li>
<li>Changed Observation.category slicing in <a href="StructureDefinition-au-pathologyresult.html">AU Base Pathology Result</a> to move the preferred binding to a slice for Specific discipline of pathology (<a href="https://github.com/hl7au/au-fhir-base/issues/744">au-fhir-base #744</a>).</li>
<li>Changed <a href="CodeSystem-au-location-physical-type.html">Location Type (Physical) AU</a> to deprecate concept 'vi'.</li>
</ul>


### Release 4.0.0
- Publication date: 2022-05-30
- Publication status: Trial Use
- Based on FHIR version: 4.0.1

To help implementers, only the more significant changes are listed here.

**Changes in this version**
<ul>
<li>Changed the canonical URL to http://terminology.hl7.org.au and applied new OIDs to HL7 AU CodeSystems and ValueSets.</li>
<li>Technical correction to extensions to remove slicing (refactoring).</li>
<li>Changed identifier slices to Identifier profiles in resource profiles.</li>
<li>New extensions: 
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>Address Identifier</li>
<li>AHPRA Profession Details</li>
<li>AHPRA Registration Details</li>
<li>Contact Purpose</li>
<li>Date of Arrival in Australia</li>
<li>Ethnicity</li>
<li>IHI Verified Date</li>
<li>Vaccine Vial Serial Number</li>
<li>Medication Strength</li>
<li>Australian Time Zone</li>
</ul>
</li> 
<li>New profiles:
<ul>
  <li>New resource profiles:
  <ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
  <li>AU Diagnostic Imaging Report</li>
  <li>AU Diagnostic Imaging Result</li>
  <li>AU Diagnostic Request</li>
  <li>AU Pathology Report</li>
  <li>AU Pathology Result</li>
  <li>AU Base Procedure</li>
  <li>AU Biological Sex Assigned at Birth</li>
  <li>AU Blood Pressure</li>
  <li>AU Body Mass Index</li>
  <li>AU Body Temperature</li>
  <li>AU Heart Rate</li>
  <li>AU Oxygen Saturation</li>
  <li>AU Respiration Rate</li>
  <li>AU Vital Signs Panel</li>
  <li>AU Smoking Status</li>
  <li>AU Estimated Date of Delivery</li>
  <li>AU Gestational Age</li>
  <li>AU Gravidity</li>
  <li>AU Last Menstrual Period</li>
  <li>AU Parity</li>
  </ul>
  </li>
  <li>Identifier type profiles: 
  <ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
  <li>AU Accession Number</li>
  <li>AU Australian Business Number</li>
  <li>AU Australian Company Number</li>
  <li>AU Australian Registered Body Number</li>
  <li>AU AHPRA Registration Number</li>
  <li>AU Care Agency Employee Identifier</li>
  <li>AU Commonwealth Seniors Health Card Number</li>
  <li>AU CSP Registration Number</li>
  <li>AU Delivery Point Identifier</li>
  <li>AU DVA Number</li>
  <li>AU Employee Number</li>
  <li>AU ETP Prescription Identifier</li>
  <li>AU G-NAF Identifier</li>
  <li>AU Health Care Card Number</li>
  <li>AU HPI-I</li>
  <li>AU HPI-O</li>
  <li>AU IHI</li>
  <li>AU Insurance Member Number</li>
  <li>AU Local Dispense Identifier</li>
  <li>AU Local Order Identifier</li>
  <li>AU Local Prescription Identifier</li>
  <li>AU Local Report Identifier</li>
  <li>AU Location Specific Practice Number</li>
  <li>AU Medical Record Number</li>
  <li>AU Medicare Card Number</li>
  <li>AU Medicare Provider Number</li>
  <li>AU NATA Accreditation Number</li>
  <li>AU NATA Site Number</li>
  <li>AU National Provider Identifier At Organisation</li>
  <li>AU PAI-D Identifier</li>
  <li>AU PAI-O Identifier</li>
  <li>AU PBS Prescriber Number</li>
  <li>AU Pensioner Concession Card Number</li>
  <li>AU Pharmacy Approval Number</li>
  </ul>
  </li>
  </ul>
</li>
<li>New code systems:
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>Contact Purpose</li>
<li>ActCode AU</li>
<li>DegreeLicenseCertificate AU</li>
<li>Location Type (Physical) AU</li>
<li>Location Type AU</li>
</ul>
</li>
<li>New value sets:
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>Contact Purpose</li>
<li>ActEncounterCode - AU Extended</li>
<li>hl7VS-degreeLicenseCertificate - AU Extended</li>
<li>DVA Entitlement</li>
<li>Accession Number Type</li>
<li>Order Identifier Type</li>
<li>Location Type (Physical) - AU Extended</li>
<li>ServiceDeliveryLocationRoleType - AU Extended</li>
</ul>
</li>
<li>Removed profiles:
<ul>
<li>AU Base Device</li>
<li>AU Base Immunisation Recommendation</li>
<li>AU PBS Sponsor</li>
<li>AU Base Observation Age</li>
</ul>
</li>
<li>Removed value sets:
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>Healthcare Service Types SNOMED)</li>
<li>Healthcare Service Roles (SNOMED)</li>
<li>AMT Trade Product</li>
<li>AMT Trade Product Pack</li>
<li>AMT Containered Trade Product Pack</li>
<li>AMT Medicinal Product Unit of Use</li>
<li>AMT Trade Product Unit of Use</li>
<li>AMT Medicinal Product Pack</li>
</ul>
</li>
<li>Changed definition of IHI (AU IHI) to add extension IHI Verified Date.</li>
<li>Changed definition of DVA number (AU DVA Number) to convert invariants to a required binding on Identifier.type of DVA Entitlement (refactoring).</li>
<li>Changed IdentifierTypeAU, added codes "CAEI", "CSPRN", "DVAU", "LRI", "LSPN", "NATAA", "NATAS", "RACSI", "PAN", "GNAF", and "DPID".</li>
<li>Changed RelatedPerson.communication.language binding in AU Base Related Person to Common Languages in Australia (extensible).</li>
<li>Changed Encounter.class binding in AU Base Encounter to ActEncounterCode - AU Extended (extensible).</li>
<li>Changed Location.type binding in AU Base Location to ServiceDeliveryLocationRoleType - AU Extended (extensible).</li>
<li>Changed Location.physicalType in AU Base Location to Location Type (Physical) - AU Extended (preferred).</li>
<li>Changed Location.identifier type in AU Base Location to add AU Location Specific Practice Number.</li>
<li>Changed HealthcareService.identifier type in AU Base Healthcare Service to add AU Residential Aged Care Service Identifier.</li>
<li>Changed HealthcareService.type binding in AU Base Healthcare Service to Service Type (preferred).</li>
<li>Changed HealthcareService.specialty binding in AU Base Healthcare Service to Clinical Specialty (preferred).</li>
<li>Changed HealthcareService.availableTime.availableStartTime and HealthcareService.availableTime.availableEndTime in AU Base Healthcare Service to add the extension Australian Time Zone.</li>
<li>Changed PractitionerRole.availableTime.availableStartTime and PractitionerRole.availableTime.availableEndTime in AU Base Practitioner Role to add the extension Australian Time Zone.</li>
<li>Changed PractitionerRole.code binding in AU Base Practitioner Role to Practitioner Role (preferred).</li>
<li>Changed PractitionerRole.specialty binding in AU Base Practitioner Role to Clinical Specialty (preferred).</li>
<li>Changed Organization.identifier type in AU Base Organization to add AU Pharmacy Approval Number.</li>
<li>Changed Organization.type binding in AU Base Organization to Healthcare Organisation Role Type (preferred).</li>
<li>Changed Organization.contact.purpose binding in AU Base Organization to Contact Purpose (extensible).</li>
<li>Changed Practitioner.identifier type in AU Base Practitioner to add AU Ahpra Registration Number.</li>
<li>Changed Practitioner.qualification.extension in AU Base Practitioner to add extensions Ahpra Profession Details and Ahpra Registration Details.</li>
<li>Changed Practitioner.qualification.identifier type in AU Base Practitioner to add AU Ahpra Registration Number.</li>
<li>Changed Practitioner.qualification.code binding in AU Base Practitioner to hl7VS-degreeLicenseCertificate - AU Extended (preferred).</li>
<li>Changed Patient.extension in AU Base Patient to add extensions Date of Arrival in Australia and interpreterRequired.</li>
<li>Changed Patient.contact.relationship binding in AU Base Patient to Contact Relationship Type (extensible).</li>
<li>Changed Address.extension in Australian Address to add the extension Address Identifier.</li>
<li>Changed Substance.substanceReference to remove type restriction to AU Base Substance.</li>
<li>Changed AllergyIntolerance.code binding in AU Base Allergy Intolerance to version 2 of Indicator of Hypersensitivity or Intolerance to Substance (preferred).</li>
<li>Changed AllergyIntolerance.reaction.exposureRoute binding in AU Base Allergy Intolerance to Route of Administration (preferred).</li>
<li>Changed Condition.bodySite binding strength in AU Base Condition to preferred.</li>
<li>Changed Observation.code in AU Body Height to add a slice for the SNOMED CT concept.</li>
<li>Changed Observation.effective[x] in AU Body Height to restrict the type to dateTime.</li>
<li>Changed Observation.valueQuantity.code binding in AU Body Height to Metric Body Length Units.</li>
<li>Changed Observation.code in AU Body Weight to add a slice for the SNOMED CT concept.</li>
<li>Changed Observation.effective[x] in AU Body Weight to restrict the type to dateTime.</li>
<li>Changed Observation.valueQuantity.code binding in AU Body Weight to Metric Body Weight Units.</li>
<li>Changed Observation.code in AU Head Circumference to add a slice for the SNOMED CT concept.</li>
<li>Changed Observation.effective[x] in AU Head Circumference to restrict the type to dateTime.</li>
<li>Changed Observation.valueQuantity.code binding in AU Head Circumference to Metric Body Length Units.</li>
<li>Changed Observation.bodySite binding in AU Head Circumference to Body Site (preferred).</li>
<li>Retitled AU Base Diagnostic Observation to AU Base Diagnostic Result.</li>
<li>Changed Observation.category cardinality in AU Base Diagnostic Result to 1..*.</li>
<li>Changed Observation.subject cardinality in AU Base Diagnostic Result to 1..1.</li>
<li>Changed Observation.specimen type in AU Base Diagnostic Result to remove AU Base Specimen.</li>
<li>Changed Observation.effective[x] cardinality in AU Base Diagnostic Result to 1..1.</li>
<li>Changed Observation.hasMember in AU Base Diagnostic Result to allow only AU Diagnostic Result, AU Diagnostic Imaging Result, or AU Pathology Result.</li>
<li>Changed Observation.code constraint in AU Assertion of No Relevant Finding from fixed value to required pattern.</li>
<li>Changed Observation.dataAbsentReason cardinality in AU Assertion of No Relevant Finding to remove cardinality constraint.</li>
<li>Changed ServiceRequest.identifier type in AU Base Diagnostic Request from Placer Identifier to AU Local Order Identifier.</li>
<li>Changed ServiceRequest.code binding in AU Base Diagnostic Request to Evaluation Procedure (example).</li>
<li>Changed ServiceRequest.performerType binding in AU Base Diagnostic Request to replace multiple terminology binding slices with a binding to Practitioner Role (preferred).</li>
<li>Changed ServiceRequest.reasonCode binding in AU Base Diagnostic Request to Reason for Request (preferred).</li>
<li>Changed ServiceRequest.bodySite binding in AU Base Diagnostic Request to Body Site (preferred).</li> 
<li>Changed DiagnosticReport.identifier type in AU Base Diagnostic Report from Filler Identifier to AU Local Report, AU Local Order Identifier, and AU Accession Number Identifier.</li>
<li>Changed DiagnosticReport.basedOn type in AU Base Diagnostic Report to add AU Diagnostic Request.</li>
<li>Changed DiagnosticReport.code binding in AU Base Diagnostic Report to Evaluation Procedure (example).</li>
<li>Changed DiagnosticReport.result type in AU Base Diagnostic Report to add AU Diagnostic Result, AU Diagnostic Imaging Result, AU Pathology Result.</li>
<li>Changed Specimen.type, Specimen.collection.method, Specimen.collection.bodySite, and Specimen.container.type terminology constraint to replace the slice with a preferred binding.</li>
<li>Changed BodyStructure.morphology binding strength in AU Base BodyStructure to preferred.</li>
<li>Changed BodyStructure.locationQualifier	 binding in AU Base BodyStructure to Body Site Relative Site Qualifier (preferred).</li>
<li>Changed Immunization.site binding in AU Base Immunisation, moved the binding from Immunization.site.coding to Immunization.site and changed the strength to preferred.</li>
<li>Changed Immunization.route binding in AU Base Immunisation, moved the binding from Immunization.route.coding to Immunization.route and changed the strength to preferred.</li>
<li>Changed Immunization.performer slicing in AU Base Immunisation to remove the slice Immunisation Witnessed By and changed the discriminator to pattern:function.</li>
<li>Changed Immunization.vaccinationProtocol.targetDisease in AU Base Immunisation to remove the slice No Information for Target Disease.</li>
<li>Changed Medication.extension in AU Base Medication to remove extensions Medication Brand Name and Medication Generic Name.</li>
<li>Changed Medication.ingredient.itemReference type in AU Base Medication to remove AU Base Medication and AU Base Substance.</li>
<li>Changed MedicationRequest.extension in AU Base Medication Request to remove extensions Medication Brand Name and Medication Generic Name.</li>
<li>Changed MedicationRequest.medicationReference type in AU Base Medication Request to remove AU Base Medication.</li>
<li>Changed MedicationRequest.reasonCode binding in AU Base Medication Request to Reason for Request (preferred).</li>
<li>Changed MedicationDispense.extension in AU Base Medication Dispense to remove extensions Medication Brand Name and Medication Generic Name.</li>
<li>Changed MedicationDispense.medicationReference type in AU Base Medication Dispense to remove AU Base Medication.</li>
<li>Technical correction to MedicationDispense.dosageInstruction.method in AU Base Medication Dispense to remove partial slice definition.</li>
<li>Changed MedicationDispense.substitution.reason cardinality in AU Base Medication Dispense to 0..1.</li>
<li>Changed MedicationStatement.extension in AU Base Medication Statement to remove extensions Medication Brand Name and Medication Generic Name.</li>
<li>Changed MedicationStatement.medicationReference type in AU Base Medication Statement to remove AU Base Medication.</li>
<li>Changed MedicationStatement.status binding in AU Base Medication Statement to remove Medication Reason Not Taken (preferred).</li>
<li>Changed MedicationAdministration.medicationReference type in AU Base Medication Administration to remove AU Base Medication.</li>
<li>Changed MedicationAdministration.dosage.site binding in AU Base Medication Administration to Body Site (preferred).</li>
<li>Changed MedicationAdministration.dosage.route binding in AU Base Medication Administration to Route of Administration (preferred).</li>
<li>Changed MedicationAdministration.dosage.method binding strength in AU Base Medication Administration to preferred.</li>
<li>Changes specific to moving from STU3 to R4
<ul>
<li>Removed extensions: 
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>Performer Party</li>
<li>Administration Witness</li>
<li>Associated Practitioner Role</li>
<li>Section Author</li>
<li>Related Person Attester Party</li>
<li>Composition Author Role</li>
<li>Condition Recorder</li>
<li>Additional Category</li>
<li>Metadata Source</li>
<li>Encounter Origin Organisation</li>
<li>Encounter Destination Organisation</li>
<li>Healthcare Service Eligibility Detail</li>
<li>Healthcare Service Communication</li>
</ul>
</li>
<li>Changed AU Base Diagnostic Procedure Request to AU Base Diagnostic Request.</li>
<li>Changed AU Base Body Site to AU Base Body Structure.</li>
<li>Changed Encounter.hospitalization.extension in AU Base Encounter to remove Encounter Origin Organisation and Encounter Destination Organisation.</li>
<li>Changed HealthcareService.extension in AU Base Healthcare Service to remove Healthcare Service Eligibility Detail and Healthcare Service Communication.</li>
<li>Changed Composition.extension in AU Base Composition to remove Composition Author Role.</li>
<li>Changed Composition.attester.extension in AU Base Composition to remove Related Person Attester Party.</li>
<li>Changed Composition.section.extension in AU Base Composition to remove Section Author.</li>
<li>Changed AllergyIntolerance.extension in AU Base Allergy Intolerance to remove Author as a RelatedPerson.</li>
<li>Changed Condition.extension in AU Base Condition to remove Condition Recorder.</li>
<li>Changed Observation.extension in AU Base Diagnostic Result to remove Performer Party.</li>
<li>Changed DiagnosticReport.extension in AU Base Diagnostic Report to review Performer Party and Additional Category.</li>
<li>Changed Immunization.vaccinationProtocol.doseStatus in AU Base Immunisation to remove the slice Dose Status Not Available.</li>
<li>Changed MedicationAdministration.performer.extension in AU Base Medication Administration to remove the extension Administration Witness.</li>
<li>Changed MedicationList.extension in AU Base Medication List to remove the extension Authoring Practitioner Role.</li>
</ul>
</li>
</ul>


### Release 1.1.1
- Publication date: 2020-01-21
- Publication status: Trial Use
- Based on FHIR version: 3.0.2

Rebuild of this guide to publish based on FHIR 3.0.2. To help implementers, only the more significant changes are listed here.

**Changes in this version**
<ul>
<li>Added Maturity level (FMM) to profile and extension pages.</li>
<li>New extensions
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>Encounter Description</li>
<li>Authoring Practitioner Role</li>
<li>Encounter Origin Organisation</li>
<li>Encounter Destination Organisation</li>
<li>Associated Practitioner Role</li>
<li>Associated Healthcare Service</li>
<li>Performer Party</li>
<li>Administration Witness</li>
<li>Change Description</li>
<li>Author as a RelatedPerson</li>
<li>Condition Recorder</li>
<li>Additional Category</li>
</ul>
</li>
<li>New profiles:
<ul style="-moz-column-count: 3; -moz-column-gap: 20px;  -webkit-column-count: 3;  -webkit-column-gap: 20px;  column-count: 3;  column-gap: 20px;">
<li>AU Base Encounter</li>
<li>AU Base Immunisation Recommendation</li>
<li>AU Medicine List</li>
<li>AU Base Specimen</li>
<li>AU Assertion of No Relevant Finding</li>
<li>AU Base Diagnostic Procedure Request</li>
<li>AU Base Diagnostic Report</li>
<li>AU Base Diagnostic Observation</li>
<li>AU Base Substance</li>
</ul>
</li>
<li>New code systems: 
<ul>
<li>HL7 V2 Table 0443 - Provider Role (AU Extended).</li>
</ul>
</li>
<li>New value sets:
<ul>
<li>Healthcare Service Types (SNOMED)</li>
<li>v2 Provider Role - AU Extended</li>
</ul>
</li>
<li>Changed HealthcareService.type binding in AU Base Healthcare Service to Healthcare Service Types (SNOMED) (preferred).</li>
<li>Technical correction to fix slicing of elements of type coding or codeable concept by fixing system value.</li>
<li>Changed Immunization.practitioner in AU Base Immunisation to add slices for Immunisation Administered By, Immunisation Approved By, Immunisation Witnessed By.</li>
<li>Changed Immunization.explanation.reason and reasonNotGiven in AU Base Immunisation from slicing to preferred binding (refactoring).</li>
<li>Changed Medication.extension in AU Base Medication to remove extension AU PBS Sponsor.</li>
<li>Changed Medication.form binding in AU Base Medication to Medication Form.</li>
<li>Changed Medication.ingredient.itemReference type in AU Base Medication to allow only AU Base Medication or AU Base Substance.</li>
<li>Changed MedicationRequest.medicationReference type in AU Base MedicationRequest to allow only AU Base Medication.</li>
<li>Changed MedicationDispense.substitution.reason binding in AU Base Medication Dispense to Medicine Substitution Reason.</li>
<li>Changed MedicationStatement.reasonNotTaken binding in AU Base Medication Statement to Medication Reason Not Taken.</li>
<li>Changed MedicationStatement.reasonCode binding in AU Base Medication Statement to Medication Reason Taken.</li>
<li>Changed Observation.code constraint in AU Base Observation Age from required pattern to fixed value.</li>
<li>Changed Condition.code and Condition.evidence.code in AU Base Condition from slicing to preferred binding (refactoring).</li>
<li>Changed Condition.bodySite binding in AU Base Condition to Body Site.</li>
<li>Changed AllergyIntolerance.extension in AU Base Allergy Intolerance to replace Recorder as a RelatedPerson with Author as a RelatedPerson.</li>
<li>Changed AllergyIntolerance.reaction.substance and AllergyIntolerance.reaction.manifestation in AU Base Allergy Intolerance from slicing to preferred binding (refactoring).</li>
<li>Changed Dosage.method binding strength in AU Base Dosage to preferred.</li>
<li>Changed Dosage.additionalInstruction, Dosage.asNeeded[x], Dosage.site, and Dosage.route in AU Base Dosage from slicing to preferred binding (refactoring).</li>
</ul>

### Release 1.0.2
- Publication date: 2019-05-06
- Publication status: Trial Use
- Based on FHIR version: 3.0.1

First official published version of this implementation guide.


---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/downloads.md


### Downloadable copy of entire specification

A downloadable version of the entire implementation guide as a website is available so it can be hosted locally.

It is not recommended to view locally without hosting, but you can extract the files and open the index.html file in a web browser. This will provide access to the table of contents, introduction, and navigation links to different sections of the implementation guide.

- [Downloadable Copy](full-ig.zip)

### Package file

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artefacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation:

- [R4 Package](package.tgz){::download="true"}
- [R4B Package](package.r4b.tgz){::download="true"}

See the overview on [validating FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html) for more information about validating profiles and how to use these artefacts.

### Examples 

All examples included in this implementation guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)

### Consolidated CSV and Excel file representations of profiles 

All the profile information for the {{site.data.fhir.ig.title}} in a single CSV or Excel file, which may be helpful to testers and analysts to review element properties across profiles in a single table:

- [CSV(compressed folder)](csvs.zip)
- [Excel(compressed folder)](excels.zip)

### Implementation Guide Details

The following link to the ImplementationGuide resource defines the technical details of this publication, including dependencies and publishing parameters:

- [XML](ImplementationGuide-hl7.fhir.au.base.xml) 
- [JSON](ImplementationGuide-hl7.fhir.au.base.json)
- [TTL](ImplementationGuide-hl7.fhir.au.base.ttl)



---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/examples.md


The following examples are published with this guide and all are available as a downloadable as zip file [here](downloads.html#examples).

{% include nonnormative-example-boilerplate.md %}

In addition to the examples defined in this implementation, synthetic (realistic but not real) test data for developers and testers that conforms to HL7 Australia FHIR implementation guides is maintained in the [HL7 AU FHIR Test Data](https://github.com/hl7au/au-fhir-test-data) repository.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include example-list-generator.md %}
<!-- ================================================ -->












---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/fhirartefacts.md

  - [Artefacts Summary](artifacts.html)
  - [Profiles and Extensions](profiles-and-extensions.html)
  - [Search Parameters](search-parameters.html)
  - [Terminology](terminology.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/future.md

### AU Base Yearly Updates
AU Base will be published yearly. Yearly AU Base updates reflect changes from:
 - HL7 AU projects
   - AU Core
   - AU eRequesting
   - AU Provider Directory
 - requests from the AU FHIR community. 
 
 The approach is outlined in the figure below:

 <div> 
    <img src="yearlyupdate.png" alt="Yearly update of AU Base" style="width:90%"/>
  </div>
*Figure 1: Yearly update of AU Base*
<br/>

#### Maturing the Baseline
The approach to develop and mature AU Base is outlined below making reference to the [FHIR Maturity Level (FMM) levels](generalguidance.html#maturity-levels) is shown in the figure below.

 <div> 
    <img src="maturing.png" alt="Maturing the AU Base baseline" style="width:90%"/>
  </div>
*Figure 3: Maturing the AU Base baseline*
<br/>

---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/generalguidance.md

### Intent of this Implementation Guide
This implementation guide does not attempt to constrain for specific use cases. 
Instead it defines representations of how commonly needed concepts, in an Australian context, can be applied generally.

This implementation guide can then be drawn on for specific use cases and further constraints added for the needs of those cases.
By referencing the AU Base definition in downstream implementation guides there is a basic level of alignment in representation across those guides.  
This alignment allows general processing and simpler exchange of information from one implementation guide domain to another without the need for extensive integration translation tasks.
This becomes more useful as the number of specific use case implementation guides expands and the potential issues of movement of information into and out of multiple domains of interest is addressed.

This approach manifests as the following representation outcomes in this guide, as follows:
* Cardinality:  most representations described have a cardinality as defined in the core FHIR specification (which is general in nature) to avoid required content for use cases that do not need or support the content.
* Must Support: the FHIR profiling Must Support flags are not used in this guide; for similar reasons to the cardinality there is no assertion of required support for any of the elements profiled in this guide.
* Terminology Binding: elements that can be bound to terminology are often sliced to offer one or more specific binding options that can be required in downstream guides; this also provides value sets that are common/suitable for the Australian context. 
* Slice Constraints: in this guide choice or repeating elements are often sliced to define specific profiling options for that element, specific slices needed in downstream guides can be picked up and made required (cardinality), or must support as needed. Slicing on elements is left open to allow other slice profiles to be added as needed.

For a directly implementable usage of AU Base for a general level of capability it is recommended the AU Core implementation guide be considered. AU Core introduces a required level of element support that give a core set of capability that can be implemented and assumed.


### Maturity Levels 
These levels used for this Implementation Guide are associated with the [FHIR Maturity Model](http://hl7.org/fhir/R4/versions.html#maturity) and adjusted for local use.

The content of this release has been subject to significant review through ballot and other HL7 AU processes and many aspects of it have been implemented and 
subjected to interoperability testing through connectathons and early adoption. However, the degree of testing has varied. Some resources have been well tested 
in a variety of environments. Others have received relatively little real-world exercise. In general, the infrastructure should be considered to be more stable 
than the resources themselves. Guidance from early implementation will help address these areas.

All artifacts in this specification are assigned a "Maturity Level",known as AFMM (after the well-known CMM grades) - Australian FHIR Maturity Model. The AFMM level can be used by implementers to judge how advanced - and therefore stable - an artifact is. 

The following AFMM levels are defined:

{:start="0"}
**DRAFT 0** The resource or profile (artifact) has been published on the current build. Artifacts with this level must have a standards status of Draft.

**AFMM 1** DRAFT 0 PLUS the artifact produces no warnings or errors during the build process that have not been accepted by the responsible WG; and the responsible WG has indicated that they consider the artifact substantially complete and ready for implementation.

**AFMM 2** AFMM 1 PLUS the artifact has been tested and successfully supports interoperability among at least three independently developed systems leveraging most of the scope (e.g. at least 80% of the core data elements) using appropriate data and scenarios based on at least one of the declared scopes of the artifact (e.g. at a connectathon). These interoperability results must have been reported to and accepted by the FHIRWG.

**AFMM 3** AFMM 2 PLUS the artifact has been verified by the work group as meeting the [Conformance Resource Quality Guidelines](https://confluence.hl7.org/display/FHIR/Conformance+QA+Criteria); has been subject to a round of formal balloting; has at least 10 distinct implementer comments recorded in the tracker drawn from at least 3 organizations resulting in at least one substantive change.

**AFMM 4** AFMM 3 PLUS the artifact is published in a formal publication (e.g. a FHIR Implementation Guide), and implemented in multiple prototype projects. As well, the responsible work group agrees the artefact is sufficiently stable to require implementer consultation for subsequent non-backward compatible changes.

**AFMM 5** AFMM 4 PLUS the artifact has been published in two formal publication release cycles at AFMM1+ (i.e. Trial Use level) and has been implemented in at least 5 independent production systems.

**Normative** AFMM 5 PLUS the responsible work group and the FHIRWG agree the material is ready to lock down according to the [inter-version](https://hl7.org/fhir/versions.html#change) change rules and the artifact has passed HL7 AU normative ballot. This is synonymous with [Normative](https://hl7.org/fhir/versions.html#normative) standard status.

Reference should also be made to [Version Management Policy](http://hl7.org/fhir/R4/versions.html).

### Business Identifiers

["Business" identifiers](http://hl7.org/fhir/R4/resource.html#identifiers) are used extensively to consistently identify real world entities across systems, contexts of use, and other formats (e.g. HL7 v2 , CDA , XDS, and many more). 

Defined in this implementation guide are profiles for business identifiers for use in populating the following data elements:
   - `Device.identifier`
   - `DiagnosticReport.identifier`
   - `HealthcareService.identifier`
   - `Location.identifier`
   - `MedicationDispense.identifier`
   - `MedicationRequest.identifier`
   - `Observation.identifier`
   - `Organization.identifier`
   - `Patient.identifier`
   - `RelatedPerson.identifier`
   - `Practitioner.identifier`
   - `Practitioner.qualification.identifier`
   - `PractitionerRole.identifier`
   - `ServiceRequest.identifier`
          
Business identifiers will typically be a national identifier (ABN, Medicare Provider, IHI), registry / exchange service identifier (ETP, eRx), or local identifier (MRN, Placer Identifier).  

This guide publishes and maintains rules on how to exchange various business identifiers in Australia as a set of Identifier data type profiles, e.g. [AU PBS Prescriber Number](/StructureDefinition-au-pbsprescribernumber.html). 

While national and registry / exchange service identifiers will define the namespace to use when sending an identifier, a local identifier requires the organisation to define their own namespace when exchanging identifiers they manage.  

When constructing a local identifier it is preferable that an organisation uses their own local system identifier namespace (e.g. "https://local organisation domain/identifier type") but if that is not available then an organisation can use their HPI-O or ABN to construct a legal, globally unique identifier system for some local identifiers.

**HPI-O scoped Identifiers**

HPI-O scoped identifiers enable exchange of an organisation's local identifiers for items such as a patient medical record or a pathology report by combining a dedicated Australian Digital Health Agency published namespace and their HPI-O to construct a legal, globally unique identifier system for their local identifiers.

The full list of available identifier namespaces can be found by browsing the [ns.electronichealth.net.au identifier namespaces](https://developer.digitalhealth.gov.au/namespaces/browse-identifiers.html); there are several HPI-O scoped identifier namespaces available:
   - http://ns.electronichealth.net.au/id/hpio-scoped/accessionnumber/1.0
   - http://ns.electronichealth.net.au/id/hpio-scoped/dispense/1.0
   - http://ns.electronichealth.net.au/id/hpio-scoped/medicalrecord/1.0
   - http://ns.electronichealth.net.au/id/hpio-scoped/order/1.0
   - http://ns.electronichealth.net.au/id/hpio-scoped/prescription/1.0
   - http://ns.electronichealth.net.au/id/hpio-scoped/report/1.0
   - http://ns.electronichealth.net.au/id/hpio-scoped/service-provider-individual/1.0

There are four parts to using a HPI-O scoped identifier in FHIR: system, value, assigner and depending on the identifier profile requirements, a coded type. 

The system value is constructed in the format of [baseURL]/HPI-O, e.g.:

~~~
"system" : "http://ns.electronichealth.net.au/id/hpio-scoped/service-provider-individual/1.0/8003621566684455"
~~~

The value contains the local identifier, e.g.:
~~~
"value" : "3235209"
~~~

The assigner contains the name of the organisation that issues or manages the identifier, e.g.:

~~~
"assigner" : {
    "display" : "Devonport Family Medicine Clinic"
}
~~~

Example: PractitionerRole resource with an employee number (local identifier)
~~~
{
  "resourceType" : "PractitionerRole",
    ...
    "identifier" : [
      {
        "type" : {
          "coding" : [
            {
              "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code" : "EI",
              "display" : "Employee number"
              }
            ],
          "text" : "Employee Number"
      },
      "system" : "http://ns.electronichealth.net.au/id/hpio-scoped/service-provider-individual/1.0/8003621566684455",
      "value" : "3235209",
      "assigner" : {
        "display" : "Devonport Family Medicine Clinic"
    },
  ...
}  
~~~


**ABN scoped Identifiers**

ABN scoped identifiers enable exchange of an organisation's local identifiers for items such as a patient medical record by combining a dedicated Australian Digital Health Agency published namespace and their ABN to construct a legal, globally unique identifier system for their local identifiers.

The full list of available identifier namespaces can be found by browsing the [ns.electronichealth.net.au identifier namespaces](https://developer.digitalhealth.gov.au/namespaces/browse-identifiers.html); there are two ABN-scoped identifier namespaces available:
   - http://ns.electronichealth.net.au/id/abn-scoped/medicalrecord/1.0
   - http://ns.electronichealth.net.au/id/abn-scoped/service-provider-individual/1.0

There are four parts to using an ABN scoped identifier in FHIR: system, value, assigner and depending on the identifier profile requirements, a coded type. 

The system value is constructed in the format of [baseURL]/ABN, e.g.:

~~~
"system" : "http://ns.electronichealth.net.au/id/abn-scoped/medicalrecord/1.0/51824754455"
~~~

The value contains the local identifier, e.g.:
~~~
"value" : "12345446"
~~~

The assigner contains the name of the organisation that issues or manages the identifier, e.g.:

~~~
"assigner" : {
    "display" : "Test Hospital Org"
}
~~~

Example: Patient resource with a medical record number (local identifier)
~~~
{
  "resourceType" : "Patient",
    ...
      "identifier" : [
        {
        "type" : {
          "coding" : [
            {
              "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                     "code" : "MR",
                     "display" : "Medical record number"
                   }
                 ],
          "text" : "Medical Record Number"
        },
        "system" : "http://ns.electronichealth.net.au/id/abn-scoped/medicalrecord/1.0/51824754455",
        "value" : "12344456",
        "assigner" : {
          "display" : "Test Hospital Org"
    },
  ...
}
~~~


### Australian Health Practitioner Regulation Agency (Ahpra) Data Guidance
This guidance on the representation of Ahpra-sourced data is taken and adapted from Ahpra's practitioner information exchange (PIE) interoperability specification: Find registration.

Ahpra data items should be exchanged using a Practitioner resource.

This guidance matches Ahpra data items to the corresponding element in a Practitioner resource, making use of extensions [Ahpra Profession Details](StructureDefinition-ahpraprofession-details.html) and [Ahpra Registration Details](StructureDefinition-ahpraregistration-details.html) as needed.


#### Ahpra Person Data

<table class="list" width="100%">
    <tr>
    <th>Ahpra data element</th>
    <th>Element in <a href="StructureDefinition-au-practitioner.html">AU Base Practitioner</a></th>
    </tr>
    <tr>
        <td>Name Edit Date</td>
        <td>Practitioner.name.period.start</td>
    </tr>
    <tr>
        <td>Name Title</td>
        <td>Practitioner.name.prefix</td>
    </tr>
    <tr>
        <td>Family Name</td>
        <td>Practitioner.name.family</td>
    </tr>
    <tr>
        <td>Given Name</td>
        <td>Practitioner.name.given</td>
    </tr>
    <tr>
        <td>Middle Name</td>
        <td>Practitioner.name.given</td>
    </tr>
    <tr>
        <td>Profession Number</td>
        <td>Practitioner.identifier</td>
    </tr>
</table>


#### Ahpra Qualification Data

<table class="list" width="100%">
    <tr>
    <th>Ahpra data element</th>
    <th>Element in <a href="StructureDefinition-au-practitioner.html">AU Base Practitioner</a></th>
    </tr>
    <tr>
        <td>Qualification Title</td>
        <td>Practitioner.qualification.code.text</td>
    </tr>
    <tr>
        <td>Awarding Institution</td>
        <td>Practitioner.qualification.issuer.resolve().name</td>
    </tr>
    <tr>
        <td>Country Qualification Obtained</td>
        <td>Practitioner.qualification.issuer.resolve().address.country</td>
    </tr>
    <tr>
        <td>Year of Qualification</td>
        <td>Practitioner.qualification.period.start</td>
    </tr>
</table>

#### Ahpra Profession Data

<table class="list" width="100%">
    <tr>
    <th>Ahpra data element</th>
    <th>Element in <a href="StructureDefinition-au-practitioner.html">AU Base Practitioner</a></th>
    </tr>
    <tr>
        <td>Profession Number</td>
        <td>Practitioner.qualification.identifier</td>
    </tr>
    <tr>
        <td>Profession</td>
        <td>Practitioner.qualification.extension:ahpraprofession-details.ahpraProfession.text</td>
    </tr>
    <tr>
        <td>Profession Start Date</td>
        <td>Practitioner.qualification.period.start</td>
    </tr>
    <tr>
        <td>Conditions</td>
        <td>Practitioner.qualification.extension:ahpraprofession-details.ahpraCondition</td>
    </tr>
    <tr>
        <td>Undertakings</td>
        <td>Practitioner.qualification.extension:ahpraprofession-details.ahpraUndertaking</td>
    </tr>
    <tr>
        <td>Reprimands</td>
        <td>Practitioner.qualification.extension:ahpraprofession-details.ahpraReprimand</td>
    </tr>
    <tr>
        <td>Cautions</td>
        <td>Practitioner.qualification.extension:ahpraprofession-details.ahpraCaution</td>
    </tr>
</table>

#### Ahpra Registration Data

<table class="list" width="100%">
    <tr>
    <th>Ahpra data element</th>
    <th>Element in <a href="StructureDefinition-au-practitioner.html">AU Base Practitioner</a></th>
    </tr>
    <tr>
        <td>Profession Number</td>
        <td>Practitioner.qualification.identifier</td>
    </tr>
    <tr>
        <td>Profession</td>
        <td>Practitioner.qualification.extension:ahpraprofession-details.ahpraProfession.text</td>
    </tr>
    <tr>
        <td>Registration Record Number</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpraRegistrationRecordNumber</td>
    </tr>
    <tr>
        <td>Division</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpradivision.text</td>
    </tr>
    <tr>
        <td>Registration Type</td>
        <td>Practitioner.	qualification.extension:ahpraregistration-details.ahpraregistrationtype.text</td>
    </tr>
    <tr>
        <td>Registration Sub-Type</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpraregistrationsubtype.text</td>
    </tr>
    <tr>
        <td>Registration Status</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpraregistrationstatus.text</td>
    </tr>
    <tr>
        <td>Registration Expiry</td>
        <td>Practitioner.qualification.period.end</td>
    </tr>
    <tr>
        <td>Specialty</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpraspecialty.text</td>
    </tr>
    <tr>
        <td>Field of Specialty Practice</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahprafieldofspecialtypractice.text</td>
    </tr>
    <tr>
        <td>Initial Registration Date</td>
        <td>Practitioner.qualification.period.start</td>
    </tr>
    <tr>
        <td>Endorsements</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpraEndorsement</td>
    </tr>
    <tr>
        <td>Notations</td>
        <td>Practitioner.qualification.extension:ahpraregistration-details.ahpraNotation</td>
    </tr>
</table>


---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/guidance.md

- [General Guidance](generalguidance.html)
- [Relationship with other IGs](relationship.html)
- [Future of AU Base](future.html)

---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/index.md

### Introduction
This implementation guide is provided to support the use of HL7<sup>&reg;</sup> FHIR<sup>&reg;&copy;</sup> in an Australian context.  

AU Base defines Australian realm concepts (e.g. Medicare card number) as an additional set of options to what is available in the core FHIR standard, including extensions, terminology and identifiers.  It provides base profiles to inform a reader of which added concepts are considered relevant to a particular resource type, and these base profiles may be further constrained in a separate implementation guide for a particular usage.  For this reason, AU Base does not apply cardinality constraints or required binding strengths to added concepts (except in rare circumstances), and does not utilise must support flags or recommend or mandate any particular resource, element or interactions.

This guide alone does not constrain profiles sufficiently to ensure implementation use cases can be met. 

AU Core defines a set of conformance requirements that enforce a set of ‘minimum requirements’ on the Australian localised concepts from AU Base through cardinality constraints, Must Support flags, required/extensible binding strengths, and capability statements. AU Core is for use by Australian stakeholders when implementing FHIR to provide a common implementation and should be built on top of when creating additional Australian profiles and implementation guides. Conformance to AU Core may become tied to regulatory and/or contractual agreements in order to necessitate adoption to this more prescriptive specification.


### Dependencies

{% include dependency-table.xhtml %}

### How to Read this Guide

This guide is divided into several pages which are listed at the top of each page in the menu bar.

- [Home](index.html): This page provides the introduction and scope for this guide.
- [Guidance](guidance.html):  These pages list the guidance for this guide.
  - [General Guidance](generalguidance.html): This page provides guidance on using the profiles defined in this guide.
  - [Sex and Gender](sexgender.html): This page provides guidance on the representation of sex, gender, and related concepts.
  - [Relationship with other IGs](relationship.html): This page provides guidance on the relationship between AU Base and other implementation guides.
  - [Future of AU Base](future.html): This page outlines the yearly update cycle and approach to maturing AU Base.
- [FHIR Artefacts](fhirartefacts.html): These pages provide detailed descriptions and formal definitions for all the FHIR artefacts defined in this guide.
  - [Artefacts Summary](artifacts.html): This page lists the FHIR artefacts defined in this guide.
  - [Profiles and Extensions](profiles-and-extensions.html): This page describes the profiles and extensions that are defined in this guide to represent Australian local concepts using FHIR. Each profile page includes a narrative description, guidance, and formal definition. Although the guidance typically focuses on the profiled elements and seeks to provide a ‘how-to’ guide when representing concepts, it may also may focus on un-profiled elements to aid with implementation.
  - [Search Parameters](search-parameters.html): This page lists the search parameters defined in this guide for use in AU operations.
  - [Terminology](terminology.html): This page lists the value sets and code systems localised in this guide.
- [Examples](examples.html): This page lists all the examples used in this guide.
- [Support](support.html): These pages provide supporting material for implementation of AU Base.
  - [Downloads](downloads.html): This page provides links to downloadable artefacts.
  - [License and Legal](license.html): This page outlines license and legal requirements relating to AU Base.
- [Change Log](changes.html): This page documents the changes across versions of this guide.


### Collaboration
This guide is the product of collaborative work undertaken with participants from:

* [HL7 Australia FHIR Working Group](https://confluence.hl7.org/display/HAFWG/HL7+Australia+FHIR+Work+Group+Home)
* Australian FHIR Implementers Community
* Secure Messaging Technical Working Group

Primary Editors: Brett Esler, Danielle Tavares-Rixon.











---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/license.md

### HL7 Australia Intellectual Property Policy
HL7 Australia has an overarching intellectual property policy in place. The [HL7 Australia - Intellectual Property Policy](https://hl7.org.au/fhir/hl7a_ip_policy.pdf) document defines the HL7 Australia organisation position on many aspects related to the copyright, licensing, liabilities and usage of HL7 Australia FHIR Implementation Guides. This also includes how the HL7 Australia FHIR Implementation Guides referencing other underlying material from HL7 International and 3rd parties shall be considered when using HL7 Australia published material. This policy document is maintained with the current official position of HL7 Australia with respect to these considerations.

HL7 FHIR® [Licensing and Legal Terms](https://hl7.org/fhir/license.html) should also be referenced as the underlying standards published terms on which HL7 Australia FHIR Implementation Guides depend.

A number of key considerations are included here to support HL7 Australia FHIR Implementation Guide usage.

### Disclaimer and Warning of Use

HL7 Australia provides HL7 Australia content for informational and reference purposes. While HL7 Australia and the broader HL7 community endeavour to ensure the accuracy and reliability of HL7 Australia content, to the extent permitted by law, HL7 Australia:

&nbsp;&nbsp;(a) makes no warranties, express or implied:
<br/>&nbsp;&nbsp;&nbsp;&nbsp;(i) that HL7 Australia content will not infringe upon any third-party intellectual property rights, including patents, copyrights, trademarks, or trade secrets; or
<br/>&nbsp;&nbsp;&nbsp;&nbsp;(ii) that HL7 Australia content is suitable, complete or applicable for any particular purpose or use contemplated by the User, and
<br/>&nbsp;&nbsp;(b) shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or reliance on HL7 Australia content.

By accessing or using HL7 Australia content, Users agree to indemnify and hold harmless HL7 Australia, its officers, directors, employees, agents, and contributors of HL7 Australia content from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising out of or in connection with the User’s use of or reliance on HL7 Australia content.


### FHIR Licensing and Trademarks

#### HL7 International Licensing
HL7 International Protocol Specifications Copyright © 2011+ HL7.

This specification (including downloadable content) is based on HL7 Protocol Specifications produced by HL7 International under the terms of [HL7® Governance and Operations Manual](https://www.hl7.org/documentcenter/public/membership/HL7_Governance_and_Operations_Manual.pdf) relating to Intellectual Property (Section 09, at the time this specification was published), specifically its copyright, trademark and patent provisions.

HL7 International has and will continue to enforce the copyrights it holds in the HL7 Protocol Specifications.

Most trademarks used in conjunction with HL7® products, services and activities are registered and/or owned by HL7 International, rather than by HL7 Australia, and their use is subject to the associated HL7 International IP policies and licensing terms.

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR logo are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.


#### HL7 Australia Licensing

HL7 Australia licenses use of some HL7 Australia content under Creative Commons license. Users may only rely on the terms of a Creative Commons licence where HL7 Australia has explicitly licensed the use of an Artefact under a Creative Commons licence and shall not presume that a Creative Commons licence applies to any other HL7 Australia content not explicitly covered by a Creative Commons licence.

**HL7 Australia use of this specification is licensed under Creative Commons "No Rights Reserved" ([CC0](http://creativecommons.org/publicdomain/zero/1.0/)).**

Copyright © 2012+ HL7 Australia

Intellectual property rights and trademarks are defined in full in the [HL7 Australia - Intellectual Property Policy](https://hl7.org.au/fhir/hl7a_ip_policy.pdf) document. 


### Third-party artefacts and terminologies

HL7 Australia FHIR Implementation Guides contain and reference intellectual property owned by third parties ("Third Party IP"). Acceptance of these License Terms does not grant any rights with respect to Third Party IP. The licensee alone is responsible for identifying and obtaining any necessary licences or authorisations to utilise Third Party IP in connection with the specification or otherwise.

Following is a non-exhaustive list of third-party artefacts and terminologies that may require a separate licence:

| Artefact / Terminology | Statement |
| SNOMED CT | International Healthcare Terminology Standards Developing Organization ([IHTSDO](http://snomed.org)). Where this specification includes or references content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO) it is distributed by agreement between IHTSDO and HL7, or the Australian Digital Health Agency via NCTS terms. Implementer use of SNOMED CT is not covered by this agreement |
| DICOM | National Electrical Manufacturers Association ([NEMA](http://dicom.nema.org/)).  This specification may reference content from DICOM, which is copyright NEMA, and distributed by agreement between NEMA/DICOM and HL7. Implementer use of DICOM is not covered by this agreement |
| Logical Observation Identifiers Names & Codes (LOINC) | This material contains content from LOINC ([http://loinc.org](http://loinc.org)). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at [http://loinc.org/license](http://loinc.org/license). LOINC® is a registered United States trademark of Regenstrief Institute, Inc. |
| National Clinical Terminology Services ([NCTS](https://www.healthterminologies.gov.au/)) | This material contains references to National Clinical Terminology Service artefacts these are Copyright © 2024 Australian Digital Health Agency, implementer user of this content are advised of the NCTS [Terms of Use](https://www.healthterminologies.gov.au/ncts-website-terms-of-use/). |


---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/profiles-and-extensions.md



### Profiles

The following profiles and have been defined for this implementation guide.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles and highlight new ones using the input/data/new_stuff.yml list.  Remove it if you would like to hand generate it -->

{% include sd-list-generator.md %}
<!-- ================================================ -->

<br />

### Extensions

The following [extensions]({{site.data.fhir.path}}extensibility.html) have been defined as part of this guide. A [registry of standard extensions]({{site.data.fhir.path}}extensibility-registry.html) can be found in the FHIR specification and additional extensions may be registered on the HL7 FHIR registry at <http://hl7.org/fhir/registry>.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles and highlight new ones using the input/data/new_stuff.yml list.  Remove it if you would like to hand generate it -->

{% include ext-list-generator.md %}
<!-- ================================================ -->


<br />












---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/relationship.md

### HL7 AU FHIR specifications
 AU Base is designed to serve as a base layer within the broader context of FHIR implementations in an Australian healthcare environment. AU Base is definitional in nature and not intended for standalone implementation. It provides an additional set of localised options in addition to what is available in the FHIR standard including Australian extensions and Australian terminology. AU Base provides a source of truth for nationally agreed Australian concepts in FHIR such as Medicare card number or Australian Indigenous Status. 

Australian realm IGs and implementers are expected to use an AU Base defined concept where one exists instead of redefining locally.

In summary, AU Base:
- defines Australian realm concepts (e.g. Medicare card number) as an additional set of options to what is available in the FHIR standard including extensions and terminology.
- provides ‘Base’ profiles to inform a reader of which added concepts are considered relevant to a particular resource type. 
- does not apply cardinality constraints or required binding strengths that enforce conformance to those concepts except in rare circumstances. Must support flags are not utilised in AU Base profiles.
- does not recommend or mandate any particular resource, element, or interactions.

The context of AU Base within the set of HL7 AU standards is shown in the figure below:
- the **FHIR standard** is the foundation, which creates a common platform or foundation on which a variety of different solutions are implemented. References to the FHIR standard on this page include the HL7 International Core FHIR Specification, HL7 International Core Extensions FHIR Implementation Guide (Extensions Pack) and HL7 International HL7 Terminology (THO). 
- **AU Base** defines local concepts for use in an Australian context introducing relevant identifiers, terminology, extensions. 
- **AU Core** defines a set of conformance requirements that enforce a set of ‘minimum requirements’ on the local concepts from AU Base, specifying rules for the elements, extensions, vocabularies, and value sets, and the RESTful API interactions.
- **Use case IGs** (AU eRequesting and AU Provider Directory) build on AU Core to address specific use cases, defining a set of conformance requirements on top of AU Core, using additional building blocks from AU Base as needed.

This layering of IGs balances relative adoption and implementation maturity of FHIR and requirements of the use cases involved.

  <div> 
    <img src="architecture.png" alt="HL7 AU FHIR specification architecture" style="width:70%"/>
  </div>
*Figure 1: Context of AU Base within the set of HL7 AU standards*
<br/>

### Relationship to other IGs

AU Base aligns to, and leverages, international standards and other national standards. Corresponding profiles and extensions included in relevant FHIR implementation guides were reviewed and considered during the development process to ensure alignment and facilitate adoption of this standard. These implementation guides include:
- [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)
- [International Patient Access 1.0.0](https://hl7.org/fhir/uv/ipa/STU1/)
- [International Patient Summary Implementation Guide 1.1.0](https://hl7.org/fhir/uv/ips/STU1.1/)

The relationship of AU Base to other implementation guides is shown in the figure below. For illustrative purposes one downstream IG (AU Core) is shown.

 <div> 
    <img src="context-colour.png" alt="Relationship to other IGs" style="width:70%"/>
  </div>
*Figure 2: Relationship to Other IGs*
<br/>

Implementation Guide |Relationship
---|---
[AU Core](https://hl7.org.au/fhir/core)|This IG defines a set of conformance requirements that enforce a set of ‘minimum requirements’ on the local concepts from AU Base, specifying rules for the elements, extensions, vocabularies, and value sets, and the RESTful API interactions.
[AU Provider Directory](https://hl7.org.au/fhir/pd)|This IG defines a set of conformance requirements for the purpose of implementation of provider directory services. AU Provider Directory uses AU Base as the basis for profiles that define the FHIR resources to be supported, and rules for the elements, extensions, vocabularies, and value sets and the RESTful API interactions.
[HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)|This IG provides definitive guidance on how to exchange clinical sex and gender affirming information using HL7 models. Sex and gender concepts from this IG have been reviewed for the potential for adoption in Australia. Where adopted, these concepts are included by reference in AU Base.
[International Patient Access](https://hl7.org/fhir/uv/ipa/STU1/)|This IG describes how an application acting on behalf of a patient can access information about the patient from a clinical records system using a FHIR based API. The profiles in this IG were reviewed and considered during development of AU Base. 
[International Patient Summary Implementation Guide](https://hl7.org/fhir/uv/ips/STU1.1/)|This IG describes specify how to represent in HL7 FHIR the International Patient Summary (IPS). An International Patient Summary (IPS) document is an electronic health record extract containing essential healthcare information about a subject of care. The profiles in this IG were reviewed and considered during development of AU Base. AU Base is designed to be compatible with the data requirements of IPS.
{:.grid}





---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/search-parameters.md


The following [search parameters]({{site.data.fhir.path}}search.html) have been defined as part of this guide. A [registry of standard search parameters]({{site.data.fhir.path}}searchparameter-registry.html) can be found in the FHIR specification.

NOTE: The following search parameters **SHALL NOT** be interpreted on their own as a list of search requirements for a server.
{:.bg-warning}

### Encounter

- [discharge-disposition](SearchParameter-encounter-discharge-disposition.html)


### Patient

- [indigenous-status](SearchParameter-indigenous-status.html)
- [gender-identity](SearchParameter-gender-identity.html)


### Person

- [gender-identity](SearchParameter-gender-identity.html)


### Practitioner

- [gender-identity](SearchParameter-gender-identity.html)


### PractitionerRole

- [gender-identity](SearchParameter-gender-identity.html)


### RelatedPerson

- [gender-identity](SearchParameter-gender-identity.html)


---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/sexgender.md

The guidance below addresses how sex, gender, and related concepts can be structured in FHIR and conformant to AU Base.

### Name to Use (NtU)​
AU Base supports representation and exchange of the Name to Use data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)) in:
- [AU Base Patient](StructureDefinition-au-patient.html)
- [AU Base Practitioner](StructureDefinition-au-practitioner.html)
- [AU Base Related Person](StructureDefinition-au-relatedperson.html)

Name to Use is represented using "usual" in `name.use`. 

Example: RelatedPerson resource with name to use
~~~
{
  "resourceType" : "RelatedPerson",
    ...
    "name" : [
    {
      "use" : "usual",
      "family" : "Franklin",
      "given" : [
        "Stella"
      ]
    }
  ],
  ...
}  
~~~


### Pronouns​
AU Base supports representation and exchange of the Pronouns data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)) in:
- [AU Base Patient](StructureDefinition-au-patient.html)
- [AU Base Practitioner](StructureDefinition-au-practitioner.html)
- [AU Base Related Person](StructureDefinition-au-relatedperson.html)

Pronouns is represented with the [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) extension. In AU Base the value element of the [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) extension is constrained to be [Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)).

When populating the value element of the [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) extension:
- *they/them/their/theirs/themselves* may be represented by sending the LOINC Answer (LA) code LA29520-6
- *she/her/her/hers/herself* may be represented by sending the LOINC Answer (LA) code LA29519-8
- *he/him/his/his/himself* may be represented by sending the LOINC Answer (LA) code LA29518-0
- *Prefer not to answer* may be represented by sending the Data Absent Reason code "asked-declined"
- *Asked but not known* may be represented by sending the Data Absent Reason code "asked-unknown"
- *Not stated or inadequately described* may be represented by sending the Data Absent Reason code "unknown"
- Where the workflow does not support obtaining a pronoun, it may be represented by sending the Data Absent Reason code "not-asked"
- Where a pronoun is provided but does not correspond to one of the [Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1) terms then a text only or alternative specific coded value can be supplied.

Example: Practitioner resource with pronouns
~~~
{
  "resourceType" : "Practitioner",
    ...
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/individual-pronouns",
      "extension" : [
        {
          "url" : "value",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "LA29519-8",
                "display" : "she/her/her/hers/herself"
              }
            ]
          }
        },
        {
          "url" : "period",
          "valuePeriod" : {
            "start" : "2001-05-06"
          }
        }
      ]
    },
  ...
}  
~~~

Example: Patient resource with prefer not to answer for pronouns
~~~
{
  "resourceType" : "Patient",
    ...
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/individual-pronouns",
      "extension" : [
        {
          "url" : "value",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                "code" : "asked-declined",
              }
            ]
          }
        }
      ]
    },
  ...
}  
~~~


### Gender Identity (GI)
AU Base supports representation and exchange of the Gender Identity data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)) and aligned to [Australian Bureau of Statics Standard for Sex, Gender, Variations of Sex Characteristics and Sexual Orientation Variables, 2020](https://www.abs.gov.au/statistics/standards/standard-sex-gender-variations-sex-characteristics-and-sexual-orientation-variables/latest-release#gender) in:
- [AU Base Patient](StructureDefinition-au-patient.html)
- [AU Base Practitioner](StructureDefinition-au-practitioner.html)
- [AU Base Related Person](StructureDefinition-au-relatedperson.html)

Gender Identity is represented with the [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) extension. In AU Base the value element of the [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) extension is constrained to be [Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1) value set ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)).

When populating the value element of the [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) extension:
  - *Man or male* may be represented by sending the SNOMED CT code 446151000124109\|Identifies as male gender\|
  - *Woman or female* may be represented by sending the SNOMED CT code 446141000124107\|Identifies as female gender\|
  - *Non-binary* may be represented by sending the SNOMED CT code 33791000087105\|Identifies as nonbinary gender\|
  - *[I/They] use a different term (please specify)*  may be represented by sending only `text` and no `coding`
  - *Prefer not to answer* may be represented by sending the Data Absent Reason code "asked-declined"
  - *Not stated or inadequately described* may be represented by sending the Data Absent Reason code "unknown"
  - Where the workflow does not support obtaining a gender identity value, it may be represented by sending the Data Absent Reason code "not-asked"

Example: Patient resource with gender identity
~~~
{
  "resourceType" : "Patient",
    ...
    "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/individual-genderIdentity",
      "extension" : [
        {
          "url" : "value",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://snomed.info/sct",
                "code" : "446141000124107",
                "display" : "Identifies as female gender (finding)"
              }
            ]
          }
        }
      ]
    },
  ...
}  
~~~


### Recorded Sex or Gender
AU Base supports representation and exchange of the Recorded Sex or Gender (RSG) data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)) in:
- [AU Base Patient](StructureDefinition-au-patient.html)
- [AU Base Practitioner](StructureDefinition-au-practitioner.html)
- [AU Base Related Person](StructureDefinition-au-relatedperson.html)

RSG is represented with the [Person Recorded Sex or Gender](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension. In AU Base:
- the type element is constrained to be [AU Recorded Sex or Gender Type](ValueSet-rsg-type.html) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible))
- the sourceDocument element is constrained to be [AU Recorded Sex or Gender (RSG) Source Document Type](ValueSet-rsg-source-document-type.html) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible))
- the jurisdiction element is constrained to be [Jurisdiction ValueSet - AU Extended](ValueSet-au-jurisdiction-extended.html) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible))

RSG information includes the various sex and gender concepts that are often used in existing systems but are known to not reliably represent a gender identity, sex parameter for clinical use, or attributes related to sexuality, such as sexual orientation, sexual activity, or sexual attraction. When populating recorded sex or gender it is important to select a meaningful terminology for the value element of the [Person Recorded Sex or Gender](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension. For example, when representing a biological sex value it is recommended to use a biological sex value set. See [Sex Assigned at Birth](sexgender.html#sex-assigned-at-birth) for specific guidance on the representation of Sex Assigned at Birth.

Example: Patient resource with recorded gender from a passport
~~~
{
  "resourceType" : "Patient",
    ...
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender",
      "extension" : [
        {
          "url" : "value",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://hl7.org/fhir/administrative-gender",
                "code" : "female"
              }
            ]
          }
        },
        {
          "url" : "type",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "46098-0"
              }
            ]
          }
        },
        {
          "url" : "effectivePeriod",
          "valuePeriod" : {
            "start" : "2024-12-25"
          }
        },
        {
          "url" : "sourceDocument",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://terminology.hl7.org.au/CodeSystem/rsg-source-document-type",
                "code" : "passport"
              }
            ]
          }
        },
        {
          "url" : "sourceField",
          "valueString" : "Sex"
        },
        {
          "url" : "jurisdiction",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "urn:iso:std:iso:3166",
                "code" : "AU",
                "display" : "Australia"
              }
            ]
          }
        }
      ]
    }
  ],
  ...
}  
~~~


### Sex Assigned at Birth
AU Base supports representation and exchange of the Sex Assigned at Birth data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)) in:
- [AU Base Patient](StructureDefinition-au-patient.html)
- [AU Base Practitioner](StructureDefinition-au-practitioner.html)
- [AU Base Related Person](StructureDefinition-au-relatedperson.html)

Sex Assigned at Birth is represented with the [Person Recorded Sex or Gender](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension:
- the type element is populated with the SNOMED CT code 1515311000168102\|Biological sex at birth\|
- the value element is constrained to be [Biological Sex](https://healthterminologies.gov.au/fhir/ValueSet/biological-sex-1) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible))

<p class="stu-note">The FHIR Work Group is interested in views on whether <a href="https://healthterminologies.gov.au/fhir/ValueSet/biological-sex-1">Biological Sex</a> value set should be a required binding in future releases of AU Base. Please join a meeting or contact the FHIR Work Group if you have any views or perspectives on this.</p>

When populating the value element of the [Person Recorded Sex or Gender](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension for Sex Assigned at Birth:
  - *Male* may be represented by sending the SNOMED CT code 248153007\|Male\|
  - *Female* may be represented by sending the SNOMED CT code 248152002\|Female\|
  - *Intersex* may be represented by sending the SNOMED CT code 32570691000036108\|Intersex\|
  - *Indeterminate sex* may be represented by sending the SNOMED CT code 32570681000036106\|Indeterminate sex\|
  - *Prefer not to answer* may be represented by sending the Data Absent Reason code "asked-declined"
  - *Asked but not known* may be represented by sending the Data Absent Reason code "asked-unknown"
  - *Not stated or inadequately described* may be represented by sending the Data Absent Reason code "unknown"
  - Where the workflow does not support obtaining a sex at birth, it may be represented by sending the Data Absent Reason code "not-asked"

Example: Patient resource with Sex Assigned at Birth from birth certificate
~~~
{
  "resourceType" : "Patient",
    ...
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender",
      "extension" : [
        {
          "url" : "value",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://snomed.info/sct",
                "code" : "248153007",
                "display" : "Male"
              }
            ]
          }
        },
        {
          "url" : "type",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://snomed.info/sct",
                "code" : "1515311000168102",
                "display" : "Biological sex at birth"
              }
            ]
          }
        },
        {
          "url" : "effectivePeriod",
          "valuePeriod" : {
            "start" : "1974-12-25"
          }
        },
        {
          "url" : "acquisitionDate",
          "valueDateTime" : "2005-12-06"
        },
        {
          "url" : "sourceDocument",
          "valueCodeableConcept" : 
          {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "71230-7",
                "display" : "Birth certificate"
              },
              {
                "system" : "http://snomed.info/sct",
                "code" : "444561001",
                "display" : "Birth certificate"
              }
            ],
            "text" : "Scan of birth certificate"
          }
        },
        {
          "url" : "sourceField",
          "valueString" : "Sex"
        },
        {
          "url" : "jurisdiction",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "https://healthterminologies.gov.au/fhir/CodeSystem/australian-states-territories-1",
                "code" : "QLD"
              }
            ]
          }
        },
        {
          "url" : "comment",
          "valueString" : "Patient transitioned from male to female in 2001, but their birth certificate still indicates male."
        }
      ]
    },
  ...
}  
~~~



---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/support.md

- [Downloads](downloads.html)
- [Licence and Legal](license.html)


---

File: repos/hl7au_SLASH_au-fhir-base/input/pagecontent/terminology.md


This page lists all ValueSets and CodeSystems defined as part of this specification. 

As well as these included definitions this specification typically references [National Clinical Terminology Service (NCTS)](https://www.healthterminologies.gov.au/integration/R4/fhir) terminology resources. 


<div class="stu-note">
Implementers are advised to take note that expansions of value sets visible in this guide may differ from expansions returned with a server using [HL7 Terminology (THO)](http://terminology.hl7.org/6.0.2) version 6.0.0 or higher.
</div> 

### Value Sets

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-valuesets.html) for a complete discussion on value sets and a list of value set names used in FHIR.  Many value sets used in this guide are defined in the base FHIR specification. The following value sets are unique to this guide and not listed in the base FHIR specification.

|ValueSet|Profile where used|Published|
|---|---|---|
|[Accession Number Type](ValueSet-accession-number-type.html)|[AU Accession Number](StructureDefinition-au-accessionnumber.html)|AU Base|
|[ActEncounterCode - AU Extended](ValueSet-au-v3-ActEncounterCode-extended.html)|[AU Base Encounter](StructureDefinition-au-encounter.html)|AU Base|
|[Adverse Reaction Agent](https://healthterminologies.gov.au/fhir/ValueSet/adverse-reaction-agent-1)|[AU Base Allergy Intolerance](StructureDefinition-au-allergyintolerance.html)|NCTS|
|[AMT Medicinal Product and Substances](ValueSet-amt-mp-codes.html)|[AU Base Medication](StructureDefinition-au-medication.html)|AU Base|
|[Assertion Of Absence](https://healthterminologies.gov.au/fhir/ValueSet/assertion-of-absence-1)|[AU Assertion of No Relevant Finding](StructureDefinition-au-norelevantfinding.html)|NCTS|
|[AU Time Zone](ValueSet-au-timezone.html)|[Australian Time Zone](StructureDefinition-au-timezone.html)|AU Base|
|[Australian Immunisation Register Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/australian-immunisation-register-vaccine-1)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|NCTS|
|[Australian Indigenous Status](https://healthterminologies.gov.au/fhir/ValueSet/australian-indigenous-status-1)|[Australian Indigenous Status](StructureDefinition-indigenous-status.html)|NCTS|
|[Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1)|[AU Base Medication](StructureDefinition-au-medication.html), [AU Base Medication Administration](StructureDefinition-au-medicationadministration.html), [AU Base Medication Dispense](StructureDefinition-au-medicationdispense.html), [AU Base Medication Request](StructureDefinition-au-medicationrequest.html), [AU Base Medication Statement](StructureDefinition-au-medicationstatement.html)|NCTS|
|[Australian Pronouns](https://healthterminologies.gov.au/fhir/ValueSet/australian-pronouns-1)|[Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns)|NCTS|
|[Australian States and Territories](https://healthterminologies.gov.au/fhir/ValueSet/australian-states-territories-2)|[Australian Address](StructureDefinition-au-address.html)|NCTS|
|[Australian Veteran Status](https://healthterminologies.gov.au/fhir/ValueSet/australian-veteran-status-1)|[Australian Veteran Status](StructureDefinition-veteran-status.html)|NCTS|
|[Body Site](https://healthterminologies.gov.au/fhir/ValueSet/body-site-1)|[AU Base Body Structure](StructureDefinition-au-bodystructure.html), [AU Base Condition](StructureDefinition-au-condition.html), [AU Base Diagnostic Imaging Result](StructureDefinition-au-imagingresult.html), [AU Base Service Request](StructureDefinition-au-servicerequest.html), [AU Base Dosage](StructureDefinition-au-dosage.html), [AU Base Medication Administration](StructureDefinition-au-medicationadministration.html), [AU Base Procedure](StructureDefinition-au-procedure.html), [AU Base Specimen](StructureDefinition-au-specimen.html)|NCTS|
|[Body Site Relative Site Qualifier](https://healthterminologies.gov.au/fhir/ValueSet/body-site-relative-site-qualifier-1)|[AU Base Body Structure](StructureDefinition-au-bodystructure.html)|NCTS|
|[Clinical Condition](https://healthterminologies.gov.au/fhir/ValueSet/clinical-condition-1)|[AU Base Condition](StructureDefinition-au-condition.html)|NCTS|
|[Clinical Finding](https://healthterminologies.gov.au/fhir/ValueSet/clinical-finding-1)|[AU Base Allergy Intolerance](StructureDefinition-au-allergyintolerance.html), [AU Base Condition](StructureDefinition-au-condition.html), [AU Base Diagnostic Imaging Report](StructureDefinition-au-imagingreport.html), [AU Base Diagnostic Report](StructureDefinition-au-diagnosticreport.html), [AU Base Dosage](StructureDefinition-au-dosage.html), [AU Base Pathology Report](StructureDefinition-au-pathologyreport.html)|NCTS|
|[Clinical Specialty](https://healthterminologies.gov.au/fhir/ValueSet/clinical-specialty-1)|[AU Base Healthcare Service](StructureDefinition-au-healthcareservice.html), [AU Base Practitioner Role](StructureDefinition-au-practitionerrole.html)|NCTS|
|[Jurisdiction ValueSet - AU Extended](ValueSet-au-jurisdiction-extended.html)|[Person Recorded Sex Or Gender](http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender)|AU Base|
|[AU Recorded Sex or Gender (RSG) Source Document Type](ValueSet-rsg-source-document-type.html)|[Person Recorded Sex Or Gender](http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender)|AU Base|
|[AU Recorded Sex or Gender Type](ValueSet-rsg-type.html)|[Person Recorded Sex Or Gender](http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender)|AU Base|
|[Common Languages in Australia](https://healthterminologies.gov.au/fhir/ValueSet/common-languages-australia-2)|[AU Base Patient](StructureDefinition-au-patient.html), [AU Base Practitioner](StructureDefinition-au-practitioner.html), [AU Base Related Person](StructureDefinition-au-relatedperson.html)|NCTS|
|[Concurrent Supply Grounds](https://healthterminologies.gov.au/fhir/ValueSet/concurrent-supply-grounds-1)|[Subsidised Concurrent Supply](StructureDefinition-subsidised-concurrent-supply.html)|NCTS|
|[Contact Purpose](ValueSet-contact-purpose.html)|[AU Base Organisation](StructureDefinition-au-organization.html), [Contact Purpose](StructureDefinition-contact-purpose.html)|AU Base|
|[Contact Relationship Type](https://healthterminologies.gov.au/fhir/ValueSet/contact-relationship-type-3)|[AU Base Patient](StructureDefinition-au-patient.html)|NCTS|
|[Date Accuracy Indicator](https://healthterminologies.gov.au/fhir/ValueSet/date-accuracy-indicator-1)|[Date Accuracy Indicator](StructureDefinition-date-accuracy-indicator.html), [Date of Arrival](StructureDefinition-date-of-arrival.html)|NCTS|
|[DVA Entitlement](ValueSet-dva-entitlement.html)|[AU DVA Number](StructureDefinition-au-dvanumber.html)|AU Base|
|[Encounter Type](https://healthterminologies.gov.au/fhir/ValueSet/encounter-type-1)|[AU Base Encounter](StructureDefinition-au-encounter.html)|NCTS|
|[Evaluation Procedure](https://healthterminologies.gov.au/fhir/ValueSet/evaluation-procedure-1)|[AU Base Diagnostic Report](StructureDefinition-au-diagnosticreport.html), [AU Base Diagnostic Result](StructureDefinition-au-diagnosticresult.html)|NCTS|
|[Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1)|[Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity)|NCTS|
|[Health Program Participation Status](https://healthterminologies.gov.au/fhir/ValueSet/health-program-participation-status-1)|[AU Health Program Participation Summary](StructureDefinition-au-healthprogramparticipation.html)|NCTS|
|[Healthcare Organisation Role Type](https://healthterminologies.gov.au/fhir/ValueSet/healthcare-organisation-role-type-1)|[AU Base Organisation](StructureDefinition-au-organization.html)|NCTS|
|[hl7VS-degreeLicenseCertificate - AU Extended](ValueSet-au-v2-0360-extended.html)|[AU Base Practitioner](StructureDefinition-au-practitioner.html)|AU Base|
|[hl7VS-identifierType - AU Extended](ValueSet-au-v2-0203-extended.html)|[AU Australian Business Number](StructureDefinition-au-australianbusinessnumber.html), [AU Australian Company Number](StructureDefinition-au-australiancompanynumber.html), [AU Australian Registered Body Number](StructureDefinition-au-australianregistredbodynumber.html)|AU Base|
|[hl7VS-providerRole - AU Extended](ValueSet-au-v2-0443-extended.html)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|AU Base|
|[Imaging Anatomic Region Of Interest](https://healthterminologies.gov.au/fhir/ValueSet/imaging-anatomic-region-of-interest-1)|[AU Base Diagnostic Imaging Report](StructureDefinition-au-imagingreport.html), [AU Base Diagnostic Imaging Result](StructureDefinition-au-imagingresult.html)|NCTS|
|[Imaging Procedure](https://healthterminologies.gov.au/fhir/ValueSet/imaging-procedure-1)|[AU Base Diagnostic Imaging Report](StructureDefinition-au-imagingreport.html), [AU Base Diagnostic Imaging Result](StructureDefinition-au-imagingresult.html)|NCTS|
|[Immunisation Anatomical Site](https://healthterminologies.gov.au/fhir/ValueSet/immunisation-anatomical-site-1)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|NCTS|
|[Immunisation Route of Administration](https://healthterminologies.gov.au/fhir/ValueSet/immunisation-route-of-administration-1)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|NCTS|
|[Indicator of Hypersensitivity or Intolerance to Substance](https://healthterminologies.gov.au/fhir/ValueSet/indicator-hypersensitivity-intolerance-to-substance-2)|[AU Base Allergy Intolerance](StructureDefinition-au-allergyintolerance.html)|NCTS|
|[Individual Healthcare Identifier Record Status](https://healthterminologies.gov.au/fhir/ValueSet/ihi-record-status-1)|[IHI Record Status](StructureDefinition-ihi-record-status.html)|NCTS|
|[Individual Healthcare Identifier Status](https://healthterminologies.gov.au/fhir/ValueSet/ihi-status-1)|[IHI Record Status](StructureDefinition-ihi-record-status.html)|NCTS|
|[Location Type (Physical) - AU Extended](ValueSet-au-location-physical-type-extended.html)|[AU Base Location](StructureDefinition-au-location.html)|AU Base|
|[Medication Form](https://healthterminologies.gov.au/fhir/ValueSet/medication-form-1)|[AU Base Medication](StructureDefinition-au-medication.html)|NCTS|
|[Medication Reason Taken](https://healthterminologies.gov.au/fhir/ValueSet/medication-reason-taken-1)|[AU Base Medication Statement](StructureDefinition-au-medicationstatement.html)|NCTS|
|[Medication Type](ValueSet-medication-type.html)|[Medication Type](StructureDefinition-medication-type.html)|AU Base|
|[Medicine Item Change](ValueSet-medicine-item-change.html)|[AU Medicine List](StructureDefinition-au-medlist.html)|AU Base|
|[Medicine Substitution Reason](https://healthterminologies.gov.au/fhir/ValueSet/medicine-substitution-reason-1)|[AU Base Medication Dispense](StructureDefinition-au-medicationdispense.html), [AU Base Medication Request](StructureDefinition-au-medicationrequest.html)|NCTS|
|[MIMS](ValueSet-mims.html)|[AU Base Medication](StructureDefinition-au-medication.html), [AU Base Medication Administration](StructureDefinition-au-medicationadministration.html), [AU Base Medication Dispense](StructureDefinition-au-medicationdispense.html), [AU Base Medication Request](StructureDefinition-au-medicationrequest.html), [AU Base Medication Statement](StructureDefinition-au-medicationstatement.html)|AU Base|
|[Name Context](ValueSet-name-context.html)|[Name Context](StructureDefinition-name-context.html)|AU Base|
|[Observation Category Codes - AU Extended](ValueSet-au-observation-category-extended.html)||AU Base|
|[Order Identifier Type](ValueSet-order-identifier-type.html)|[AU Local Order Identifier](StructureDefinition-au-localorderidentifier.html)|AU Base|
|[Participation in Health Program](https://healthterminologies.gov.au/fhir/ValueSet/participation-in-health-program-1)|[AU Health Program Participation Summary](StructureDefinition-au-healthprogramparticipation.html)|NCTS|
|[Pathology Diagnostic Service Category](https://healthterminologies.gov.au/fhir/ValueSet/pathology-diagnostic-service-category-1)|[AU Base Pathology Report](StructureDefinition-au-pathologyreport.html), [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html)|NCTS|
|[PBS Item Codes](ValueSet-pbs-item.html)|[AU Base Medication](StructureDefinition-au-medication.html), [AU Base Medication Administration](StructureDefinition-au-medicationadministration.html), [AU Base Medication Dispense](StructureDefinition-au-medicationdispense.html), [AU Base Medication Request](StructureDefinition-au-medicationrequest.html), [AU Base Medication Statement](StructureDefinition-au-medicationstatement.html)|AU Base|
|[Procedure](https://healthterminologies.gov.au/fhir/ValueSet/procedure-1)|[AU Base Procedure](StructureDefinition-au-procedure.html)|NCTS|
|[RCPA - SPIA Chemical Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-chemical-pathology-refset-3)|[AU Base Pathology Report](StructureDefinition-au-pathologyreport.html), [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html)|NCTS|
|[RCPA - SPIA Haematology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-haematology-refset-3)|[AU Base Pathology Report](StructureDefinition-au-pathologyreport.html), [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html)|NCTS|
|[RCPA - SPIA Immunopathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-immunopathology-refset-3)|[AU Base Pathology Report](StructureDefinition-au-pathologyreport.html), [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html)|NCTS|
|[RCPA - SPIA Microbiology Serology Molecular Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-microbiology-serology-molecular-refset-3)|[AU Base Pathology Report](StructureDefinition-au-pathologyreport.html), [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html)|NCTS|
|[RCPA SPIA Pathology Reporting](https://healthterminologies.gov.au/fhir/ValueSet/spia-pathology-reporting-1)|[AU Base Pathology Report](StructureDefinition-au-pathologyreport.html), [AU Base Pathology Result](StructureDefinition-au-pathologyresult.html)|NCTS|
|[Reason For Non Participation In Health Program](https://healthterminologies.gov.au/fhir/ValueSet/reason-non-participation-health-program-1)|[AU Health Program Participation Summary](StructureDefinition-au-healthprogramparticipation.html)|NCTS|
|[Reason for Request](https://healthterminologies.gov.au/fhir/ValueSet/reason-for-request-1)|[AU Base Service Request](StructureDefinition-au-servicerequest.html), [AU Base Medication Request](StructureDefinition-au-medicationrequest.html)|NCTS|
|[Reason Vaccine Administered](https://healthterminologies.gov.au/fhir/ValueSet/reason-vaccine-administered-1)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|NCTS|
|[Reason Vaccine Not Administered](https://healthterminologies.gov.au/fhir/ValueSet/reason-vaccine-not-administered-3)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|NCTS|
|[Related Person Relationship Type](https://healthterminologies.gov.au/fhir/ValueSet/related-person-relationship-type-1)|[AU Base Related Person](StructureDefinition-au-relatedperson.html)|NCTS|
|[Route of Administration](https://healthterminologies.gov.au/fhir/ValueSet/route-of-administration-1)|[AU Base Allergy Intolerance](StructureDefinition-au-allergyintolerance.html), [AU Base Dosage](StructureDefinition-au-dosage.html), [AU Base Medication Administration](StructureDefinition-au-medicationadministration.html)|NCTS|
|[Separation Mode](https://healthterminologies.gov.au/fhir/ValueSet/separation-mode-1)|[AU Base Encounter](StructureDefinition-au-encounter.html)|NCTS|
|[Service Provision Conditions Australian Concepts](ValueSet-service-provision-conditions.html)|[AU Base Healthcare Service](StructureDefinition-au-healthcareservice.html)|NCTS|
|[Service Type](https://healthterminologies.gov.au/fhir/ValueSet/service-type-1)|[AU Base Encounter](StructureDefinition-au-encounter.html), [AU Base Healthcare Service](StructureDefinition-au-healthcareservice.html)|NCTS|
|[ServiceDeliveryLocationRoleType - AU Extended](ValueSet-au-v3-ServiceDeliveryLocationRoleType-extended.html)|[AU Base Location](StructureDefinition-au-location.html)|AU Base|
|[Specimen Collection Procedure](https://healthterminologies.gov.au/fhir/ValueSet/specimen-collection-procedure-1)|[AU Base Specimen](StructureDefinition-au-specimen.html)|NCTS|
|[Specimen Container Type](https://healthterminologies.gov.au/fhir/ValueSet/specimen-container-type-1)|[AU Base Specimen](StructureDefinition-au-specimen.html)|NCTS|
|[Specimen Type](https://healthterminologies.gov.au/fhir/ValueSet/specimen-type-1)|[AU Base Specimen](StructureDefinition-au-specimen.html)|NCTS|
|[Substance](https://healthterminologies.gov.au/fhir/ValueSet/substance-1)|[AU Base Substance](StructureDefinition-au-substance.html)|NCTS|
|[Vaccination Target Disease](https://healthterminologies.gov.au/fhir/ValueSet/vaccination-target-disease-1)|[AU Base Immunisation](StructureDefinition-au-immunization.html)|NCTS|
{:.grid}


### Code Systems

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-systems.html) for a complete discussion on code systems and a list of codes system names used in FHIR.  Most code systems used in this guide are defined in the base FHIR specification. The following code systems are used in the above value sets.

|CodeSystem|ValueSet where used|Published|
|---|---|---|
|[ActCode](http://terminology.hl7.org/CodeSystem/v3-ActCode)|[ActEncounterCode - AU Extended](ValueSet-au-v3-ActEncounterCode-extended.html)|FHIR|
|[ActCode AU](CodeSystem-au-v3-ActCode.html)|[ActEncounterCode - AU Extended](ValueSet-au-v3-ActEncounterCode-extended.html)|AU Base|
|[AU Recorded Sex or Gender Source Document Type](CodeSystem-rsg-source-document-type.html)|[AU Recorded Sex or Gender (RSG) Source Document Type](ValueSet-rsg-source-document-type.html)|AU Base|
|[AU Recorded Sex or Gender Type](CodeSystem-rsg-type.html)|[AU Recorded Sex or Gender Type](ValueSet-rsg-type.html)|AU Base|
|[Australian and New Zealand Standard Industrial Classification (ANZSIC), 2006 (Revision 2.0)](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/anzsic-2006-20130626)|[Australian And New Zealand Standard Industrial Classification](https://healthterminologies.gov.au/fhir/ValueSet/anzsic-1)|NCTS|
|[Australian Immunisation Register Vaccine](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/australian-immunisation-register-vaccine-20221118)|[Australian Immunisation Register Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/australian-immunisation-register-vaccine-1)|NCTS|
|[Australian Indigenous Status](https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1)|[Australian Indigenous Status](https://healthterminologies.gov.au/fhir/ValueSet/australian-indigenous-status-1)|NCTS|
|[Australian States and Territories](https://healthterminologies.gov.au/fhir/CodeSystem/australian-states-territories-1)|[Australian States and Territories](https://healthterminologies.gov.au/fhir/ValueSet/australian-states-territories-2)|NCTS|
|[Australian Veteran Status](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/australian-veteran-status-1)|[Australian Veteran Status](https://healthterminologies.gov.au/fhir/ValueSet/australian-veteran-status-1)|NCTS|
|[Concurrent Supply Grounds](https://healthterminologies.gov.au/fhir/CodeSystem/concurrent-supply-grounds-1)|[Concurrent Supply Grounds](https://healthterminologies.gov.au/fhir/ValueSet/concurrent-supply-grounds-1)|NCTS|
|[Contact Purpose](CodeSystem-contact-purpose.html)|[Contact Purpose](ValueSet-contact-purpose.html)|AU Base|
|[Data Absent Reason](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/data-absent-reason)|[Australian Pronouns](https://healthterminologies.gov.au/fhir/ValueSet/australian-pronouns-1)|NCTS|
|[Date Accuracy Indicator](https://healthterminologies.gov.au/fhir/CodeSystem/date-accuracy-indicator-1)|[Date Accuracy Indicator](https://healthterminologies.gov.au/fhir/ValueSet/date-accuracy-indicator-1)|NCTS|
|[DegreeLicenseCertificate AU](CodeSystem-au-v2-0360.html)|[hl7VS-degreeLicenseCertificate - AU Extended](ValueSet-au-v2-0360-extended.html)|AU Base|
|[DiagnosticServiceSectionId](http://terminology.hl7.org/CodeSystem/v2-0074)|[Pathology Diagnostic Service Category](https://healthterminologies.gov.au/fhir/ValueSet/pathology-diagnostic-service-category-1)|FHIR|
|[IdentifierType](http://terminology.hl7.org/CodeSystem/v2-0203)|[Accession Number Type](ValueSet-accession-number-type.html), [Order Identifier Type](ValueSet-order-identifier-type.html), [hl7VS-identifierType - AU Extended](ValueSet-au-v2-0203-extended.html)|FHIR|
|[IdentifierType AU](CodeSystem-au-v2-0203.html)|[hl7VS-identifierType - AU Extended](ValueSet-au-v2-0203-extended.html), [DVA Entitlement](ValueSet-dva-entitlement.html)|AU Base|
|[Individual Healthcare Identifier Record Status](https://healthterminologies.gov.au/fhir/CodeSystem/ihi-record-status-1)|[Individual Healthcare Identifier Record Status](https://healthterminologies.gov.au/fhir/ValueSet/ihi-record-status-1)|NCTS|
|[Individual Healthcare Identifier Status](https://healthterminologies.gov.au/fhir/CodeSystem/ihi-status-1)|[Individual Healthcare Identifier Status](https://healthterminologies.gov.au/fhir/ValueSet/ihi-status-1)|NCTS|
|[ISO3166Part1](https://terminology.hl7.org/CodeSystem-ISO3166Part1.html)|[Jurisdiction ValueSet - AU Extended](ValueSet-au-jurisdiction-extended.html)|FHIR|
|[ISO3166_2](https://terminology.hl7.org/6.0.0/CodeSystem-v3-iso3166-2.html)|[Jurisdiction ValueSet - AU Extended](ValueSet-au-jurisdiction-extended.html)|FHIR|
|[LocationType](http://terminology.hl7.org/ValueSet/location-physical-type)|[Location Type (Physical) - AU Extended](ValueSet-au-location-physical-type-extended.html)|FHIR|
|[Location Type (Physical) AU](CodeSystem-au-location-physical-type.html)|[Location Type (Physical) - AU Extended](ValueSet-au-location-physical-type-extended.html)|AU Base|
|[Location Type AU](CodeSystem-au-location-type.html)|[ServiceDeliveryLocationRoleType - AU Extended](ValueSet-au-location-physical-type-extended.html)|AU Base|
|[LOINC](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/LOINC-2.77)|[AU Recorded Sex or Gender (RSG) Source Document Type](ValueSet-rsg-source-document-type.html), [AU Recorded Sex or Gender Type](ValueSet-rsg-type.html), [RCPA - SPIA Chemical Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-chemical-pathology-refset-3), [RCPA - SPIA Haematology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-haematology-refset-3), [RCPA - SPIA Immunopathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-immunopathology-refset-3), [RCPA - SPIA Microbiology Serology Molecular Pathology Terminology Reference Set](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/spia-microbiology-serology-molecular-refset-3), [RCPA SPIA Pathology Reporting](https://healthterminologies.gov.au/fhir/ValueSet/spia-pathology-reporting-1)|NCTS, FHIR|
|[Medication Type](CodeSystem-medication-type.html)|[Medication Type](ValueSet-medication-type.html)|AU Base|
|[Medicine Item Change](CodeSystem-medicine-item-change.html)|[Medicine Item Change](ValueSet-medicine-item-change.html)|AU Base|
|[Monthly Index of Medical Specialties (MIMS)](CodeSystem-mims-external.html)|[MIMS](ValueSet-mims.html)|AU Base|
|[Name Context](CodeSystem-name-context.html)|[Name Context](ValueSet-name-context.html)|AU Base|
|[Observation Category Codes AU](CodeSystem-au-observation-category.html)|[Observation Category Codes - AU Extended](ValueSet-au-observation-category-extended.html)|AU Base|
|[PBS Item Codes](CodeSystem-pbs-item-external.html)|[PBS Item Codes](ValueSet-pbs-item.html)|AU Base|
|[providerRole](http://terminology.hl7.org/CodeSystem/v2-0443)|[hl7VS-providerRole - AU Extended](ValueSet-au-v2-0443-extended.html)|FHIR|
|[providerRole AU](CodeSystem-au-v2-0443.html)|[hl7VS-providerRole - AU Extended](ValueSet-au-v2-0443-extended.html)|AU Base|
|[RoleCode](http://terminology.hl7.org/CodeSystem/v3-RoleCode)|[ServiceDeliveryLocationRoleType - AU Extended](ValueSet-au-v3-ServiceDeliveryLocationRoleType-extended.html)|FHIR|
|[Separation Mode](https://healthterminologies.gov.au/fhir/CodeSystem/separation-mode-1)|[Separation Mode](https://healthterminologies.gov.au/fhir/ValueSet/separation-mode-1)|NCTS|
|[Service Provision Conditions Australian Concepts](CodeSystem-service-provision-conditions.html)|[Service Provision Conditions Australian Concepts](ValueSet-service-provision-conditions.html)|AU Base|
|[SNOMED Clinical Terms (Australian extension)](https://www.healthterminologies.gov.au/integration/R4/fhir/CodeSystem/32506021000036107-20240630)|[Adverse Reaction Agent](https://healthterminologies.gov.au/fhir/ValueSet/adverse-reaction-agent-1), [AMT Medicinal Product and Substances](ValueSet-amt-mp-codes.html), [Assertion Of Absence](https://healthterminologies.gov.au/fhir/ValueSet/assertion-of-absence-1), [Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1), [Body Site](https://healthterminologies.gov.au/fhir/ValueSet/body-site-1), [Body Site Relative Site Qualifier](https://healthterminologies.gov.au/fhir/ValueSet/body-site-relative-site-qualifier-1), [Clinical Condition](https://healthterminologies.gov.au/fhir/ValueSet/clinical-condition-1), [Clinical Finding](https://healthterminologies.gov.au/fhir/ValueSet/clinical-finding-1), [Clinical Specialty](https://healthterminologies.gov.au/fhir/ValueSet/clinical-specialty-1), [Contact Relationship Type](https://healthterminologies.gov.au/fhir/ValueSet/contact-relationship-type-3), [Encounter Type](https://healthterminologies.gov.au/fhir/ValueSet/encounter-type-1), [Evaluation Procedure](https://healthterminologies.gov.au/fhir/ValueSet/evaluation-procedure-1), [Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1), [Health Program Participation Status](https://healthterminologies.gov.au/fhir/ValueSet/health-program-participation-status-1), [Healthcare Organisation Role Type](https://healthterminologies.gov.au/fhir/ValueSet/healthcare-organisation-role-type-1), [Imagine Procedure](https://healthterminologies.gov.au/fhir/ValueSet/imaging-procedure-1), [Imaging Anatomic Region Of Interest](https://healthterminologies.gov.au/fhir/ValueSet/imaging-anatomic-region-of-interest-1), [Immunisation Anatomical Site](https://healthterminologies.gov.au/fhir/ValueSet/immunisation-anatomical-site-1), [Immunisation Route of Administration](https://healthterminologies.gov.au/fhir/ValueSet/immunisation-route-of-administration-1), [Indicator of Hypersensitivity or Intolerance to Substance](https://healthterminologies.gov.au/fhir/ValueSet/indicator-hypersensitivity-intolerance-to-substance-2), [Medication Form](https://healthterminologies.gov.au/fhir/ValueSet/medication-form-1), [Medication Reason Taken](https://healthterminologies.gov.au/fhir/ValueSet/medication-reason-taken-1), [Medicine Substitution Reason](https://healthterminologies.gov.au/fhir/ValueSet/medicine-substitution-reason-1), [Participation in Health Program](https://healthterminologies.gov.au/fhir/ValueSet/participation-in-health-program-1), [Procedure](https://healthterminologies.gov.au/fhir/ValueSet/procedure-1), [Reason for Non Participation in Health Program](https://healthterminologies.gov.au/fhir/ValueSet/reason-non-participation-health-program-1), [Reason for Request](https://healthterminologies.gov.au/fhir/ValueSet/reason-for-request-1), [Reason Vaccine Administered](https://healthterminologies.gov.au/fhir/ValueSet/reason-vaccine-administered-1), [Reason Vaccine Not Administered](https://healthterminologies.gov.au/fhir/ValueSet/reason-vaccine-not-administered-3), [Related Person Relationship Type](https://healthterminologies.gov.au/fhir/ValueSet/related-person-relationship-type-1), [Service Type](https://healthterminologies.gov.au/fhir/ValueSet/service-type-1), [Specimen Collection Procedure](https://healthterminologies.gov.au/fhir/ValueSet/specimen-collection-procedure-1), [Specimen Container Type](https://healthterminologies.gov.au/fhir/ValueSet/specimen-container-type-1), [Specimen Type](https://healthterminologies.gov.au/fhir/ValueSet/specimen-type-1), [Substance](https://healthterminologies.gov.au/fhir/ValueSet/substance-1), [Vaccination Target Disease](https://healthterminologies.gov.au/fhir/ValueSet/vaccination-target-disease-1)|NCTS, FHIR|
|[Time Zones](https://www.iana.org/time-zones)|[AU Time Zone](ValueSet-au-timezone.html)|FHIR|
{:.grid}


### Concept Maps

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-conceptmaps.html) for a complete discussion on concept maps and a list of concept map names used in FHIR.  Most concept maps relevant to this guide are defined in the base FHIR specification. The following concept maps are unique to this guide and not listed in the base FHIR specification.

**Concept maps published in the NCTS**
- [Australian States and Territories v1 to Australian States and Territories v2](https://healthterminologies.gov.au/fhir/ConceptMap/australian-states-territories-v1-to-v2-1)
- [METeOR Indigenous Status 291036 to Australian Indigenous Status](https://healthterminologies.gov.au/fhir/ConceptMap/meteor-indigenous-291036-to-australian-indigenous-status-2)
- [METeOR Person Gender 635994 to HL7 FHIR AdministrativeGender](https://healthterminologies.gov.au/fhir/ConceptMap/meteor-person-gender-635994-to-hl7-fhir-administrativegender-1)
- [METeOR Person Gender 741825 to HL7 FHIR AdministrativeGender](https://healthterminologies.gov.au/fhir/ConceptMap/meteor-person-gender-741825-to-fhir-administrativegender-1)
- [METeOR Person Sex 635126 to Biological Sex](https://healthterminologies.gov.au/fhir/ConceptMap/meteor-person-sex-635126-to-biological-sex-1)
- [Reason Vaccine Not Administered v1 to Reason Vaccine Not Administered v2](https://healthterminologies.gov.au/fhir/ConceptMap/reason-vaccine-not-administered-v1-to-v2-1)
- [Reason Vaccine Not Administered v2 to Reason Vaccine Not Administered v3](https://healthterminologies.gov.au/fhir/ConceptMap/reason-vaccine-not-administered-v2-to-v3-1)


---

