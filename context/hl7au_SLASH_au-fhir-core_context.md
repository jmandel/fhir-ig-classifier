File: repos/hl7au_SLASH_au-fhir-core/input/includes/example-list-generator.md

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

File: repos/hl7au_SLASH_au-fhir-core/input/includes/ext-list-generator.md

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

File: repos/hl7au_SLASH_au-fhir-core/input/includes/link-list.md

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
[Maturity Level]: https://build.fhir.org/ig/hl7au/au-fhir-base/guidance.html#maturity-levels
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

File: repos/hl7au_SLASH_au-fhir-core/input/includes/none_parameters.md

Below is an overview of the mandatory and optional search parameters. FHIR search operations and the syntax used to describe the interactions is described <a href="http://hl7.org/fhir/R4/search.html">here</a>.

#### Mandatory Search Parameters

No mandatory search parameters for this profile.

#### Optional Search Parameters

No optional search parameters for this profile.

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/nonnormative-example-boilerplate.md

These example instances show what data produced and consumed by systems conforming with this implementation guide might look like. Every effort has been made to ensure that the examples are correct and useful, but they are not a normative part of the specification nor are they fully representative of real world examples.

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_coding_guidance.md

- `Observation.category` provides an efficient way of supporting system interactions, e.g. restricting searches. Implementers need to understand that data categorisation is somewhat subjective. The categorisation applied by the source may not align with a receiver’s expectations.
- Additional codes that translate or map to the Observation code or category codes are allowed. For example providing both a local code and the required code.






---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_diagnostics_guidance.md

- `Observation.category` provides an efficient way of supporting system interactions, e.g. restricting searches. Implementers need to understand that data categorisation is somewhat subjective. The categorisation applied by the source may not align with a receiver’s expectations.
- The observations **MAY** have additional codes that translate or map to the Observation code or category codes. For example:
   -  providing a local code
   -  providing a more specific code
- The use of coding can vary significantly across systems, requesters need to understand that they may encounter codes they do not recognise and be prepared to handle those resources appropriately. Responders **SHOULD** populate `Observation.code.text` and/or `Observation.code.coding.display` so that the requester can at least display the observation even if the requester does not recognise the code supplied. 
- The Observation resource can represent a result using a single value in `Observation.value`, or can represent a set of results using either `Observation.component.value` or `Observation.hasMember`.
  - Although all are marked as *Must Support*, responders are not required to support all choices, but they **SHALL** support *at least one* of these elements
  - A requester **SHALL** support all elements (`Observation.value`, `Observation.component.value`, `Observation.hasMember`)
  - for further guidance, see the [Observation Grouping](https://hl7.org/fhir/R4/observation.html#obsgrouping) section in FHIR Specification.
- `Observation.identifier` may contain the same identifier as in the order or report connecting the resources that are related to a single request fulfilment workflow.
- Source system identifiers that identify the business process (order ids and reporting identifiers) **MAY** be included as [AU Local Order Identifier](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-localorderidentifier.html) and [AU Local Report Identifier](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-localreportidentifier.html) to support workflow and deduplication of Observation resources.
  - See guidance on the construction of an identifier on the relevant Identifier profile page and the section on [Business Identifiers](https://build.fhir.org/ig/hl7au/au-fhir-base/guidance.html#business-identifiers) in AU Base.


---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_notes.md

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)


    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code={{ code_system }}\|{{ code_code }},http://loinc.org\|9279-1,http://loinc.org\|85354-9

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s). The Observation `code` parameter searches `Observation.code` only. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`)


    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `survey` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/Observation?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`status`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)


    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;status=final
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`)


    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code={{ code_system }}\|{{ code_code }},http://loinc.org\|9279-1,http://loinc.org\|85354-9&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Observation?patient.identifier=http://example.org/fhir/mrn\|12345&amp;code={{ code_system }}\|{{ code_code }},http://loinc.org\|9279-1,http://loinc.org\|85354-9&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and report code(s) ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_parameters.md

<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance </th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient+category</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+category+date</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+code</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+category+status</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>token</code></td>
        <td></td>
  </tr>
   <tr>
        <td>patient+code+date</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHOULD</strong> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <strong>SHOULD</strong> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
    <tr>
        <td>patient</td>
        <td><b>MAY</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>category</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <strong>SHALL</strong> provide at least a code value and <strong>MAY</strong> provide both the system and code values. The responder <strong>SHALL</strong> support both.<br/><br/>The requester <strong>SHALL</strong> support search using the category code defined in this profile. The responder <strong>SHALL</strong> support search using the category code defined in this profile.</td>
  </tr>
  <tr>
        <td>code</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHALL</strong> support search using the LOINC codes defined in this profile. The responder <strong>SHALL</strong> support search using the LOINC codes defined in this profile.<br/><br/>The requester <strong>SHALL</strong> support <code>multipleOr</code>. The responder <strong>SHALL</strong> support <code>multipleOr</code>.</td>
  </tr>
  <tr>
        <td>date</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
  <tr>
        <td>status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHALL</strong> support <code>multipleOr</code>.The responder <strong>SHALL</strong> support <code>multipleOr</code>.</td>
  </tr>
 </tbody>
</table>


---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_social-history_notes.md

#### Mandatory Search Parameters

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|social-history
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|social-history

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`)


    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|social-history&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `social-history` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)


    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code={{ code_system }}\|{{ code_code }}

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s). The Observation `code` parameter searches `Observation.code` only. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)



    `GET [base]/Observation?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`status`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)


    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|social-history&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`)


    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code={{ code_system }}\|{{ code_code }}&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Observation?patient.identifier=http://example.org/fhir/mrn\|12345&amp;code={{ code_system }}\|{{ code_code }}&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and observation code(s) ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))




---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_vitalsigns_guidance.md

- `Observation.category` provides an efficient way of supporting system interactions, e.g. restricting searches. Implementers need to understand that data categorisation is somewhat subjective. The categorisation applied by the source may not align with a receiver’s expectations.
- Observations **MAY** have additional codes that translate or map to the Observation code or category codes. For example:
   -  providing a local code
   -  providing a more specific codes such as 8306-3 - *Body height - lying* in addition to 8302-2 - *Body height*.  Several additional observation codes are provided in the FHIR core specification [vital signs table](http://hl7.org/fhir/R4/observation-vitalsigns.html#vitals-table).
- Observations **MAY** have [component] observations to qualify the vital sign observation. For example, 8478-0 - *Mean blood pressure*, 8887-2 - *Heart rate device type*, 8326-1 - *Type of body temperature device*. Several of these are provided in the FHIR core specification [vital signs table](http://hl7.org/fhir/R4/observation-vitalsigns.html#vitals-table).



---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_vitalsigns_notes.md

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/Observation?patient={Type/}[id]&category=vital-signs`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=vital-signs

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`


    `GET [base]/Observation?patient={Type/}[id]&category=vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=vital-signs&amp;date=ge2020-01-01T00:00:00Z
      
    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `vital-signs` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)


    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code=http://snomed.info/sct\|364075005,http://loinc.org\|{{ code_code }},http://loinc.org\|85354-9

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s). The Observation `code` parameter searches `Observation.code` only. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))


#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/Observation?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`status`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)


    `GET [base]/Observation?patient={Type/}[id]&category=vital-signs&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=vital-signs&amp;status=final
      1. GET [base]/Observation?patient=5678&amp;category=vital-signs&amp;status=final,preliminary

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`


    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code=http://snomed.info/sct\|364075005,http://loinc.org\|{{ code_code }},http://loinc.org\|85354-9&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Observation?patient.identifier=http://example.org/fhir/mrn\|12345&amp;code=http://snomed.info/sct\|364075005,http://loinc.org\|{{ code_code }},http://loinc.org\|85354-9&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and observation code(s) ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/observation_vitalsigns_parameters.md

<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance </th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient+category</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+category+date</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+code</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+category+status</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+code+date</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHOULD</strong> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <strong>SHOULD</strong> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
    <tr>
        <td>patient</td>
        <td><b>MAY</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>category</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHALL</b> support search using the 'vital-signs' category defined in this profile. The responder <b>SHALL</b> support search using the 'vital-signs' category defined in this profile.</td>
  </tr>
  <tr>
        <td>code</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHALL</b> support search using the LOINC codes defined in this profile. The responder <b>SHALL</b> support search using the LOINC codes defined in this profile.</td>
  </tr>
  <tr>
        <td>date</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
  <tr>
        <td>status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHALL</strong> support <code>multipleOr</code>.The responder <strong>SHALL</strong> support <code>multipleOr</code>.</td>
  </tr>
 </tbody>
</table>


---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/prov-white-list.md


AU Core Provenance **SHALL** be supported for the following resource types that conform to an AU Core profile: 
<ul id="prov-white-list">
<li>AllergyIntolerance</li>
<li>Condition</li>
<li>Encounter</li>
<li>Immunization</li>
<li>MedicationRequest</li>
<li>Observation</li>
<li>Organization</li>
<li>Patient</li>
<li>Practitioner</li>
<li>PractitionerRole</li>
<li>Procedure</li>
</ul>

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/res-list-generator.md

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

File: repos/hl7au_SLASH_au-fhir-core/input/includes/resourcereferencesummary.md

|Resource Type|Profile|Supported Target Reference|
|---|---|---|---|
|AllergyIngolerance|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Condition|[AU Core Condition](StructureDefinition-au-core-condition.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|DocumentReference|[DocumentReference](https://hl7.org/fhir/R4/documentreference.html)|-|
|Encounter|[AU Core Encounter](StructureDefinition-au-core-encounter.html)|[AU Core Condition](StructureDefinition-au-core-condition.html), [AU Core Location](StructureDefinition-au-core-location.html), [Observation](http://hl7.org/fhir/R4/observation.html), [AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html), [AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html), [AU Core Procedure](StructureDefinition-au-core-procedure.html), [AU Base Related Person](http://hl7.org.au/fhir/StructureDefinition/au-relatedperson)|
|Immunization|[AU Core Immunization](StructureDefinition-au-core-immunization.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Location|[AU Core Location](StructureDefinition-au-core-location.html)|[AU Core Organization](StructureDefinition-au-core-organization.html)|
|Medication|[Medication](https://hl7.org/fhir/R4/medication.html)|-|
|Medication|[AU Core Medication](StructureDefinition-au-core-medication.html)|-|
|MedicationRequest|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|[AU Core Condition](StructureDefinition-au-core-condition.html), [AU Core Encounter](StructureDefinition-au-core-encounter.html), [Medication](https://hl7.org/fhir/R4/medication.html), [AU Core Medication](StructureDefinition-au-core-medication.html), [Observation](http://hl7.org/fhir/R4/observation.html), [AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html), [AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html), [AU Base Related Person](http://hl7.org.au/fhir/StructureDefinition/au-relatedperson)|
|Observation|[AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[AU Core Body Height](StructureDefinition-au-core-bodyheight.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[AU Core Body Weight](StructureDefinition-au-core-bodyweight.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html)|[AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html), [AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html), [AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html), [AU Base Related Person](http://hl7.org.au/fhir/StructureDefinition/au-relatedperson)
|Observation|[AU Core Heart Rate](StructureDefinition-au-core-heartrate.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[Observation](http://hl7.org/fhir/R4/observation.html)|-|
|Observation|[AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html)|[AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html), [AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html), [AU Base Related Person](http://hl7.org.au/fhir/StructureDefinition/au-relatedperson), [AU Base Specimen](http://hl7.org.au/fhir/StructureDefinition/au-specimen)|
|Observation|[AU Core Respiration Rate](StructureDefinition-au-core-resprate.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[AU Core Smoking Status](StructureDefinition-au-core-smokingstatus.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Observation|[AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|
|Organization|[Organization](https://hl7.org/fhir/R4/organization.html)|-|
|Organization|[AU Core Organization](StructureDefinition-au-core-organization.html)|-|
|Patient|[AU Core Patient](StructureDefinition-au-core-patient.html)|-|
|Practitioner|[AU Core Practitioner](StructureDefinition-au-core-practitioner.html)|-|
|PractitionerRole|[AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html)|[AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html)|
|Procedure|[AU Core Procedure](StructureDefinition-au-core-procedure.html)|[AU Core Condition](StructureDefinition-au-core-condition.html), [DocumentReference](https://hl7.org/fhir/R4/documentreference.html), [AU Core Encounter](StructureDefinition-au-core-encounter.html), [Observation](http://hl7.org/fhir/R4/observation.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Procedure](StructureDefinition-au-core-procedure.html)|
|RelatedPerson|[AU Base Related Person](http://hl7.org.au/fhir/StructureDefinition/au-relatedperson)|-|
|Specimen|[AU Base Specimen](http://hl7.org.au/fhir/StructureDefinition/au-specimen)|-|
{:.grid}

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/sd-list-generator.md

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

File: repos/hl7au_SLASH_au-fhir-core/input/includes/search_parameters_intro.md

Below is an overview of the mandatory and optional search parameters and combined search parameters. See the [AU Core CapabilityStatements](capability-statements.html) for a complete list of supported RESTful interactions for this IG.

FHIR search operations are described <a href="http://hl7.org/fhir/R4/search.html">here</a> and the syntax used to describe AU Core interactions is defined <a href="general-guidance.html#readsearch-syntax">here</a>.

Any search parameter defined in FHIR may be 'allowed' by the system unless explicitly marked as "**SHALL NOT**". A few items are marked as **MAY** in this implementation guide to highlight their potential relevance.


---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/security.md

### Security and Privacy

When implementing AU Core, implementers need to be aware of [FHIR security considerations](https://hl7.org/fhir/R4/security.html) and implement measures to protect information privacy and prevent exploitation by malicious actors.

Those implementing AU Core are also advised to review the [FHIR Implementer Safety Checklist](https://hl7.org/fhir/R4/safety.html) for important considerations in secure and safe system implementation.

Implementers of AU Core need to be aware of their obligations regarding security, privacy, and consent in Australia.

For AU Core, specific security requirements include:
- Systems **SHOULD** conform to [FHIR Communications Security](https://hl7.org/fhir/R4/security.html#http) requirements.
- Systems **SHOULD** support [SMART App Launch](https://hl7.org/fhir/smart-app-launch/) for client authentication and authorisation.
- Systems **SHALL** use TLS version 1.2 or higher for data exchange.
- Systems **SHOULD** use TLS version 1.3 for data exchange.
- Systems **SHOULD** use the Australian Cyber Security Centre (ACSC) [TLS configuration guidelines](https://www.cyber.gov.au/resources-business-and-government/maintaining-devices-and-systems/system-hardening-and-administration/web-hardening/implementing-certificates-tls-https-and-opportunistic-tls) that include recommendations for configuring protocol features and acceptable cipher suites when implementing TLS.

---

File: repos/hl7au_SLASH_au-fhir-core/input/includes/sp_list.md

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

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/CapabilityStatement-au-core-requester-intro.md

### Summary of Must Support and References Between Profiles
The table below identifies where a Profile has a Must Support reference to other profiles or resources (i.e., Target Profiles). This list is provided to clarify where additional profiles or resources may need to be supported if a requester supports a particular resource.

{% include resourcereferencesummary.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/CapabilityStatement-au-core-responder-intro.md

### Summary of Must Support and References Between Profiles
The table below identifies where a Profile has a Must Support reference to other profiles or resources (i.e., Target Profiles). This list is provided to clarify where additional profiles or resources may need to be supported if a responder supports a particular resource.

{% include resourcereferencesummary.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-allergyintolerance-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.


### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for a patient's allergies/adverse reactions
- Record or update a patient's allergies/adverse reactions

### Profile specific implementation guidance
- To represent that a patient does not have an allergy or category of allergies, an appropriate negation code (e.g. 716186003 \|No known allergy\| or 716184000 \|No known latex allergy\|) is used in `AllergyIntolerance.code`
- The use of coding can vary significantly across systems, requesters need to understand that they may encounter codes they do not recognise and be prepared to handle those resources appropriately. Responders **SHOULD** populate `AllergyIntolerance.code.text` and/or `AllergyIntolerance.code.coding.display` so that requesters can at least display the condition even if the requester does not recognise the code supplied.
- Refutation is not expected to be handled except as above - an appropriate negation code in `AllergyIntolerance.code` and `AllergyIntolerance.verificationStatus` of "confirmed" or "unconfirmed"
- Where only substance is known (e.g. 111088007 \|Latex\|) and not a statement of allergy or intolerance (e.g. 300916003 \|Allergy to latex\|), the substance is sent in `AllergyIntolerance.code`


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-allergyintolerance-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance </th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>patient+clinical-status</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/> The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
  <tr>
        <td>clinical-status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the **[`patient`](https://hl7.org/fhir/R4/allergyintolerance.html#search)** search parameter:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/AllergyIntolerance?patient={Type/}[id]` or optionally `GET [base]/AllergyIntolerance?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/AllergyIntolerance?patient=5678
      1. GET [base]/AllergyIntolerance?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/AllergyIntolerance?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all AllergyIntolerance resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

#### Optional Search Parameters

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/allergyintolerance.html#search)** and **[`clinical-status`](https://hl7.org/fhir/R4/allergyintolerance.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/AllergyIntolerance?patient={Type/}[id]&clinical-status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/AllergyIntolerance?patient=5678&amp;clinical-status=http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical\|active

    *Implementation Notes:* Fetches a bundle of all AllergyIntolerance resources for the specified patient and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bloodpressure-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of blood pressure associated with a patient
- Record or update an observation of blood pressure associated with a patient

### Profile specific implementation guidance
{% include observation_vitalsigns_guidance.md -%}
- Because blood pressure values are communicated in the *mandatory* systolic and diastolic components:
  - `Observation.value[x]` element **SHOULD** be omitted
  - an Observation without a systolic or diastolic result value, **SHOULD** include a reason why the data is absent in `Observation.component.dataAbsentReason`




---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bloodpressure-notes.md

{% assign code_code = "85354-9" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bodyheight-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of body height associated with a patient
- Record or update an observation of body height associated with a patient

### Profile specific implementation guidance
{% include observation_vitalsigns_guidance.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bodyheight-notes.md

{% assign code_code = "8302-2" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bodytemp-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of body temperature associated with a patient
- Record or update an observation of body temperature associated with a patient

### Profile specific implementation guidance
{% include observation_vitalsigns_guidance.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bodytemp-notes.md

{% assign code_code = "8310-5" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bodyweight-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of body weight associated with a patient
- Record or update an observation of body weight associated with a patient


### Profile specific implementation guidance
{% include observation_vitalsigns_guidance.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-bodyweight-notes.md

{% assign code_code = "29463-7" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-condition-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for a patient's problems, diagnoses, and health concerns
- Record or update a patient's problem, diagnosis, or health concern

### Profile specific implementation guidance
- `Condition.category` provides an efficient way of supporting system interactions, e.g. restricting searches. Implementers need to understand that data categorisation is somewhat subjective. The categorisation applied by the source may not align with a receiver’s expectations. 
- The use of coding can vary significantly across systems, requesters need to understand that they may encounter codes they do not recognise and be prepared to handle those resources appropriately. Responders **SHOULD** populate `Condition.code.text` and/or `Condition.code.coding.display` so that requesters can display the condition even if the requester does not recognise the code supplied. 
- `Condition.code` contains the identification of the condition, problem or diagnosis which may include body site information. Where a system has information not supported by the coding in `Condition.code.coding` (e.g. body site, laterality and other qualification of condition coding terms) that information **SHOULD** be supplied in `Condition.code.text`
- An active condition is represented using "active" in `Condition.clinicalStatus`
- To represent that a patient does not have a condition or history of condition, an appropriate negation code is used in `Condition.code`:
  - For indicating no known conditions or problems of any type `Condition.code` **SHOULD** use the code SNOMED CT 160245001 \|No current problems or disability (situation)\|
- Refutation is not expected to be handled except as above - an appropriate negation code in `Condition.code` and `Condition.verificationStatus` of "confirmed" or "unconfirmed"


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-condition-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
   <tr>
        <td>patient</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>patient+category</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+clinical-status</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+category+clinical-status</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+code</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
  <tr>
        <td>patient+onset-date</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>category</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>clinical-status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>code</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleOr</code>. The responder <strong>SHOULD</strong> support <code>multipleOr</code>.</td>
  </tr>
  <tr>
        <td>onset-date</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the **[`patient`](https://hl7.org/fhir/R4/condition.html#search)** search parameter:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Condition?patient={Type/}[id]`
    or optionally  `GET [base]/Condition?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Condition?patient=5678
      1. GET [base]/Condition?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Condition?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Condition resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/condition.html#search)** and **[`category`](https://hl7.org/fhir/R4/condition.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Condition?patient={Type/}[id]&category={system|}[code]`

    Example:
    
      1. GET [base]/Condition?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/condition-category\|encounter-diagnosis

    *Implementation Notes:* Fetches a bundle of all Condition resources for the specified patient and category code = `encounter-diagnosis` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/condition.html#search)** and **[`clinical-status`](https://hl7.org/fhir/R4/condition.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Condition?patient={Type/}[id]&clinical-status={system|}[code]`

    Example:
    
      1. GET [base]/Condition?patient=5678&amp;clinical-status=http://terminology.hl7.org/CodeSystem/condition-clinical\|active

    *Implementation Notes:* Fetches a bundle of all Condition resources for the specified patient and a clinical status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))


#### Optional Search Parameters

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/condition.html#search)** and **[`category`](https://hl7.org/fhir/R4/condition.html#search)** and **[`clinical-status`](https://hl7.org/fhir/R4/condition.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Condition?patient={Type/}[id]&category={system|}[code]&clinical-status={system|}[code]`

    Example:
    
      1. GET [base]/Condition?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|encounter-diagnosis&amp;clinical-status=http://terminology.hl7.org/CodeSystem/condition-clinical\|active

    *Implementation Notes:* Fetches a bundle of all Condition resources for the specified patient and category and clinical-status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/condition.html#search)** and **[`code`](https://hl7.org/fhir/R4/condition.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Condition?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Condition?patient=5678&amp;code=http://snomed.info/sct\|68566005,http://snomed.info/sct\|394659003

    *Implementation Notes:* Fetches a bundle of all Condition resources for the specified patient and condition code(s). **SHOULD** support search by multiple codes. The Condition `code` parameter searches `Condition.code` only. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/condition.html#search)** and **[`onset-date`](https://hl7.org/fhir/R4/condition.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHALL** support these `onset-date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `onset-date` (e.g.`onset-date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Condition?patient={Type/}[id]&onset-date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Condition?patient=5678&amp;onset-date=ge2020-01-01T00:00:00Z
      1. GET [base]/Condition?patient.identifier=http://example.org/fhir/mrn\|12345&amp;onset-date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Condition resources for the specified patient and onset-date ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-diagnosticresult-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for diagnostic results for a patient
- Query for category of diagnostic results (e.g. all cardiology results)
- Record or update a diagnostic result for a patient


### Profile specific implementation guidance
{% include observation_diagnostics_guidance.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-diagnosticresult-notes.md

{% include search_parameters_intro.md -%}
{% include observation_parameters.md -%}

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and a category code = `survey` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code=http://snomed.info/sct\|89240007,http://loinc.org\|14683-7,http://loinc.org\|85354-9

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s). The Observation `code` parameter searches `Observation.code` only. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
     - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and category ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Observation?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`status`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code=http://snomed.info/sct\|89240007,http://loinc.org\|14683-7,http://loinc.org\|85354-9&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Observation?patient.identifier=http://example.org/fhir/mrn\|12345&amp;code=http://snomed.info/sct\|89240007,http://loinc.org\|14683-7,http://loinc.org\|85354-9&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and observation code(s). **SHOULD** support search by multiple codes. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))




---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-diagnosticresult-path-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for pathology results for a patient
- Query for category of pathology results (e.g. all chemistry)
- Record or update pathology results belonging to a patient


### Profile specific implementation guidance
{% include observation_diagnostics_guidance.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-diagnosticresult-path-notes.md

{% include search_parameters_intro.md -%}
{% include observation_parameters.md -%}

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|laboratory

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and a category code = `laboratory` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code=http://loinc.org\|6690-2,http://loinc.org\|789-8

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s). The Observation `code` parameter searches `Observation.code` only. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|laboratory&amp;date=ge2020-01-01T00:00:00Z
       1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|laboratory&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `laboratory` ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Observation?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Observation?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`category`](https://hl7.org/fhir/R4/observation.html#search)** and **[`status`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|laboratory&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/observation.html#search)** and **[`code`](https://hl7.org/fhir/R4/observation.html#search)** and **[`date`](https://hl7.org/fhir/R4/observation.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Observation?patient=5678&amp;code=http://loinc.org\|6690-2,http://loinc.org\|789-8&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Observation?patient.identifier=http://example.org/fhir/mrn\|12345&amp;code=http://loinc.org\|6690-2,http://loinc.org\|789-8&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and observation code(s) ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-encounter-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios
The following are supported usage scenarios for this profile:
- Query for a specific patient encounter
- Query for all patient encounters
- Record or update a patient encounter

### Profile specific implementation guidance
- The Encounter resource can represent a clinical indication with `Encounter.reasonCode`, or a reference with `Encounter.reasonReference` to a Condition or other resource.
  - Although both are marked as *Must Support*, responders are not required to support both a code and a reference, but they **SHALL** support *at least one* of these elements
  - A requester **SHALL** support both elements

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-encounter-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>patient+date</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+class</td>
        <td><b>SHOULD</b></td>
         <td><code>reference</code>+<code>token</code></td>
         <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
         <td><code>reference</code>.<code>token</code></td>
         <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
   <tr>
        <td>patient+location</td>
        <td><b>SHOULD</b></td>
         <td><code>reference</code>+<code>reference</code></td>
         <td></td>
  </tr>
  <tr>
        <td>patient+status</td>
        <td><b>SHOULD</b></td>
         <td><code>reference</code>+<code>token</code></td>
         <td></td>
  </tr>
  <tr>
        <td>class</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>date</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
  <tr>
        <td>location</td>
        <td><b>MAY</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHALL</strong> support <code>multipleOr</code>.The responder <strong>SHALL</strong> support <code>multipleOr</code>.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters:

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the **[`patient`](https://hl7.org/fhir/R4/encounter.html#search)** search parameter:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Encounter?patient={Type/}[id]` or optionally `GET [base]/Encounter?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Encounter?patient=5678
      1. GET [base]/Encounter?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Encounter?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/encounter.html#search)** and **[`date`](https://hl7.org/fhir/R4/encounter.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Encounter?patient={Type/}[id]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Encounter?patient=5678&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient and date ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/encounter.html#search)** and **[`class`](https://hl7.org/fhir/R4/encounter.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Encounter?patient={Type/}[id]&class={system|}[code]`

    Example:
    
      1. GET [base]/Encounter?patient=5678&amp;class=http://terminology.hl7.org/CodeSystem/v3-ActCode\|AMB

    *Implementation Notes:* Fetches a bundle of all Encounter resources for the specified patient and class ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/encounter.html#search)** and **[`location`](https://hl7.org/fhir/R4/encounter.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Encounter?patient={Type/}[id]&location={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?patient=5678&amp;location=Location/vic-hospital

    *Implementation Notes:* Fetches a bundle of all Encounter resources matching the specified patient and location ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/encounter.html#search)** and **[`status`](https://hl7.org/fhir/R4/encounter.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Encounter?patient={Type/}[id]&&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Encounter?patient=5678&amp;status=finished

    *Implementation Notes:* Fetches a bundle of all Encounter resources matching the specified patient and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference)) and [how to search by token](http://hl7.org/fhir/R4/search.html#token)).

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-heartrate-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of heart rate associated with a patient
- Record or update an observation of heart rate associated with a patient

### Profile specific implementation guidance
{% include observation_vitalsigns_guidance.md -%}
- Pulse rate and heart rate are different concepts. In FHIR, both concepts are children of the parent Heart Rate concept and conform to the AU Core Heart Rate profile. When representing a pulse rate observation specifically, an *additional* SNOMED CT code 78564009 \|Pulse rate\| **SHALL** be added to `Observation.code`. This allows pulse rate observations to be identified and searched for directly. When populating pulse rate, the body site from which the pulse rate was observed is optional to include.


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-heartrate-notes.md

{% assign code_code = "8867-4" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-immunization-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for a patient's immunisations
- Record or update an immunisation record for a patient



---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-immunization-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both</td>
  </tr>
  <tr>
        <td>patient+status</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
  </tr>
  <tr>
        <td>patient+date</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>date</code></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
  <tr>
        <td>date</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.
</td>
  </tr>
  <tr>
        <td>patient+vaccine-code</td>
        <td><b>MAY</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
   <tr>
        <td>status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>vaccine-code</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters:

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the **[`patient`](https://hl7.org/fhir/R4/immunization.html#search)** search parameter:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Immunization?patient={Type/}[id]` or optionally`GET [base]/Immunization?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Immunization?patient=5678
      1. GET [base]/Immunization?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Immunization?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Immunization resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/immunization.html#search)** and **[`status`](https://hl7.org/fhir/R4/immunization.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Immunization?patient={Type/}[id]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Immunization?patient=5678&amp;status=not-done

    *Implementation Notes:* Fetches a bundle of all Immunization resources for the specified patient and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))



#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/immunization.html#search)** and **[`date`](https://hl7.org/fhir/R4/immunization.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Immunization?patient={Type/}[id]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Immunization?patient=5678&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Immunization?patient.identifier=http://example.org/fhir/mrn\|12345&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Immunization resources for the specified patient and date ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-location-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Record or update basic information for a location
- Read information about a location referenced by another resource


### Profile specific implementation guidance
- See guidance on the construction of an identifier on the relevant Identifier profile page and the section on [Business Identifiers](https://build.fhir.org/ig/hl7au/au-fhir-base/generalguidance.html#business-identifiers) in AU Base.
- When constructing an address
  - an international address can be represented using the core [Address](http://hl7.org/fhir/R4/datatypes.html#Address) data type
  - an Australian address **SHOULD** be represented using the [Australian Address](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-address.html) data type profile

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-location-notes.md

{% include search_parameters_intro.md -%}
<table class="list" width="100%">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>name</td>
        <td><b>SHALL</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
    <tr>
        <td>address</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>address-city</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>address-state</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>address-postalcode</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters

1. **SHALL** support searching based on text name using the **[`name`](https://hl7.org/fhir/R4/location.html#search)** search parameter:
    
    `GET [base]/Location?name=[string]`

    Example:
    
      1. GET [base]/Location?name=Hospital

    *Implementation Notes:* Fetches a bundle of all Location resources matching the name ([how to search by string](http://hl7.org/fhir/R4/search.html#string))


#### Optional Search Parameters:

The following search parameters **SHOULD** be supported:

1. **SHOULD** support searching based on text address using the **[`address`](https://hl7.org/fhir/R4/location.html#search)** search parameter:
    
    `GET [base]/Location?address=[string]`

    Example:
    
      1. GET [base]/Location?address=QLD
      1. GET [base]/Location?address=QLD

    *Implementation Notes:* Fetches a bundle of all Location resources matching the name ([how to search by string](http://hl7.org/fhir/R4/search.html#string))

1. **SHOULD** support searching using the **[`address-city`](https://hl7.org/fhir/R4/location.html#search)** search parameter:
    
    `GET [base]/Location?address-city=[string]`

    Example:
    
      1. GET [base]/Location?address-city=Westmead

    *Implementation Notes:* Fetches a bundle of all Location resources for the city ([how to search by string](http://hl7.org/fhir/R4/search.html#string))

1. **SHOULD** support searching using the **[`addresss-postalcode`](https://hl7.org/fhir/R4/location.html#search)** search parameter:
    
    `GET [base]/Location?addresss-postalcode=[string]`

    Example:
    
      1. GET [base]/Location?addresss-postalcode=3005

    *Implementation Notes:* Fetches a bundle of all Location resources matching the post code ([how to search by string](http://hl7.org/fhir/R4/search.html#string))

1. **SHOULD** support searching using the **[`address-state`](https://hl7.org/fhir/R4/location.html#search)** search parameter:
    
    `GET [base]/Location?address-state=[string]`

    Example:
    
      1. GET [base]/Location?address-state=TAS

    *Implementation Notes:* Fetches a bundle of all Location resources matching the state ([how to search by string](http://hl7.org/fhir/R4/search.html#string))

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-medication-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.
### Usage scenarios

The following are supported usage scenarios for this profile:

- Query medications associated with a patient referenced by another resource
- Record or update a medication associated with a patient referenced by another resource
- Read medications associated with a patient referenced by another resource


See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Profile specific implementation guidance
- See the [Medicine Information](medicine-information.html) page for guidance.




---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-medication-notes.md

{% include none_parameters.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-medicationrequest-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.


### Usage scenarios

The following are supported usage scenarios for this profile:

- Query medication orders or prescriptions for a patient (current and historical)
- Record or update medication orders or prescriptions for a patient


### Profile specific implementation guidance
- See the [Medicine Information](medicine-information.html) page for guidance.
- When recording "self-prescribed" medication, `MedicationRequest.requester` references the Patient or RelatedPerson as the prescriber.
- MedicationRequest resources can represent a medication using either a code with `MedicationRequest.medicationCodeableConcept`, or reference a [Medication](http://hl7.org/fhir/R4/medication.html) resource with `MedicationRequest.medicationReference`.
  - Although both are marked as *Must Support*, responders are not required to support both a code and a reference, but they **SHALL** support *at least one* of these elements
  - A requester **SHALL** support both elements
  - When referencing a Medication resource, it is preferred the resource is [contained](http://hl7.org/fhir/R4/references.html#contained) but it may be an external resource
  - If an external reference to a Medication resource is used, the responder **SHALL** support the `_include` parameter for searching this element
  - The requester **SHALL** support all method
- The MedicationRequest resource can represent the clinical indication as a code with `MedicationRequest.reasonCode`, or a reference with `MedicationRequest.reasonReference` to a Condition or other resource.
  - Although both are marked as *Must Support*, responders are not required to support both a code and a reference, but they **SHALL** support *at least one* of these elements
  - A requester **SHALL** support both elements  


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-medicationrequest-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
    <tr>
        <td>patient+status</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>token</code></td>
         <td></td>
  </tr>
  <tr>
        <td>patient+intent</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code></td>
         <td></td>
  </tr>
  <tr>
        <td>patient+intent+status</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>token</code></td>
         <td></td>
  </tr>
 <tr>
        <td>_id</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
   <tr>
        <td>patient+intent+authoredon</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>date</code></td>
         <td></td>
  </tr>
  <tr>
        <td>authoredon</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
  <tr>
        <td>intent</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHALL</strong> support <code>multipleOr</code>. The responder <strong>SHALL</strong> support <code>multipleOr</code>.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the **[`patient`](https://hl7.org/fhir/R4/medicationrequest.html#search)** search parameter:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `MedicationRequest:medication`
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

 
    `GET [base]/MedicationRequest?patient={Type/}[id]` or optionally `GET [base]/MedicationRequest?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/MedicationRequest?patient=5678
      1. GET [base]/MedicationRequest?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/MedicationRequest?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952&amp;_include=MedicationRequest:medication
      1. GET [base]/MedicationRequest?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all MedicationRequest resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/medicationrequest.html#search)** and **[`status`](https://hl7.org/fhir/R4/medicationrequest.html#search)** search parameters:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `MedicationRequest:medication`
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)


    `GET [base]/MedicationRequest?patient={Type/}[id]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/MedicationRequest?patient=5678&amp;status=active
      1. GET [base]/MedicationRequest?patient=5678&amp;status=active&amp;_include=MedicationRequest:medication

    *Implementation Notes:* Fetches a bundle of all MedicationRequest resources for the specified patient and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

#### Optional Search Parameters

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the **[`_id`](https://hl7.org/fhir/R4/medicationrequest.html#search)** search parameter:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `MedicationRequest:medication`

 
    `GET [base]/MedicationRequest?_id=[id]`

    Example:
    
      1. GET [base]/MedicationRequest?_id=2169591
      1. GET [base]/MedicationRequest?_id=2169591&amp;_include=MedicationRequest:medication

    *Implementation Notes:* Fetches a bundle with the requested MedicationRequest, instead of just the resource itself, and allows for the inclusion of additional search parameters such as _include, _revinclude, or _lastUpdated ([how to search by id of the resource](https://hl7.org/fhir/r4/search.html#id))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/medicationrequest.html#search)** and **[`intent`](https://hl7.org/fhir/R4/medicationrequest.html#search)** and **[`authoredon`](https://hl7.org/fhir/R4/medicationrequest.html#search)** search parameters:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `MedicationRequest:medication`
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `authoredon` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `authoredon` (e.g.`authoredon=[date]&authoredon=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`


    `GET [base]/MedicationRequest?patient={Type/}[id]&intent={system|}[code]&authoredon={gt|lt|ge|le}[date]{&authoredon={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/MedicationRequest?patient=5678&amp;intent=order&amp;authoredon=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all MedicationRequest resources for the specified patient and intent and date ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/medicationrequest.html#search)** and **[`intent`](https://hl7.org/fhir/R4/medicationrequest.html#search)** search parameters:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `MedicationRequest:medication`
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)


    `GET [base]/MedicationRequest?patient={Type/}[id]&intent={system|}[code]`

    Example:
    
      1. GET [base]/MedicationRequest?patient=5678&amp;intent=order

    *Implementation Notes:* Fetches a bundle of all MedicationRequest resources for the specified patient and intent ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/medicationrequest.html#search)** and **[`intent`](https://hl7.org/fhir/R4/medicationrequest.html#search)** and **[`status`](https://hl7.org/fhir/R4/medicationrequest.html#search)** search parameters:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `MedicationRequest:medication`
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)


    `GET [base]/MedicationRequest?patient={Type/}[id]&intent={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/MedicationRequest?patient=5678&amp;intent=order&amp;status=active
      1. GET [base]/MedicationRequest?patient=5678&amp;intent=order&amp;status=active&amp;_include=MedicationRequest:medication

    *Implementation Notes:* Fetches a bundle of all MedicationRequest resources for the specified patient and intent and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-organization-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for basic information for an organisation by name or identifier
- Recording or updating basic information for an organisation 
- Read information about an organisation referenced by another resource


### Profile specific implementation guidance
- See guidance on the construction of an identifier on the relevant Identifier profile page and the section on [Business Identifiers](https://build.fhir.org/ig/hl7au/au-fhir-base/generalguidance.html#business-identifiers) in AU Base.
- When constructing an address:
  - an international address can be represented using the core [Address](http://hl7.org/fhir/R4/datatypes.html#Address) data type
  - an Australian address **SHOULD** be represented using the [Australian Address](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-address.html) data type profile


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-organization-notes.md

{% include search_parameters_intro.md -%}
<table class="list" width="100%">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>identifier</td>
        <td><b>SHALL</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both. <br/><br/> The requester <b>SHOULD</b> support search using HPI-O and ABN identifiers as defined in the profile. The responder <b>SHOULD</b> support search using the using HPI-O and ABN identifiers as defined in the profile.</td>
  </tr>
    <tr>
        <td>name</td>
        <td><b>SHALL</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>address</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>_id</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td></td>
  </tr>
 </tbody>
</table>

#### Mandatory Search Parameters

The following search parameters **SHALL** be supported:

1. **SHALL** support searching using the **[`identifier`](https://hl7.org/fhir/R4/organization.html#search)** search parameter:
    
    `GET [base]/Organization?identifier={system|}[code]`

    Example:
    
      1. GET [base]/Organization?identifier=http://ns.electronichealth.net.au/id/hi/hpio/1.0\|8003621566684455
      1. GET [base]/Organization?identifier=http://hl7.org.au/id/abn\|23964200000

    *Implementation Notes:* Fetches a bundle containing any Organization resources matching the identifier ([how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching based on text name using the **[`name`](https://hl7.org/fhir/R4/organization.html#search)** search parameter:
    
    `GET [base]/Organization?name=[string]`

    Example:
    
      1. GET [base]/Organization?name=Hospital

    *Implementation Notes:* Fetches a bundle of all Organization resources matching the name ([how to search by string](http://hl7.org/fhir/R4/search.html#string))

#### Optional Search Parameters:

The following search parameters **SHOULD** be supported:

1. **SHOULD** support searching based on text address using the **[`address`](https://hl7.org/fhir/R4/organization.html#search)** search parameter:
    
    `GET [base]/Organization?address=[string]`

    Example:
    
      1. GET [base]/Organization?address=QLD

    *Implementation Notes:* Fetches a bundle of all Organization resources matching the address ([how to search by string](http://hl7.org/fhir/R4/search.html#string))
    
1. **SHOULD** support searching using the **[`_id`](https://hl7.org/fhir/R4/organization.html#search)** search parameter:
    
    `GET [base]/Organization?_id=[id]`

    Example:
    
      1. GET [base]/Organization?_id=5678

    *Implementation Notes:* Fetches a bundle with the requested Organization, instead of just the resource itself, and allows for the inclusion of additional search parameters such as _include, _revinclude, or _lastUpdated ([how to search by id of the resource](https://hl7.org/fhir/r4/search.html#id))



---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-patient-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for records associated with a patient
- Record or update a record associated with a patient
- Query for basic demographics and other administrative information about a patient
- Record or update basic demographics and other administrative information about a patient
- Read information about a patient referenced by another resource

### Gender Identity and related concepts
<b>Name to Use (NtU)​</b>

By making `name.use` a *Must Support* data element, this profile explicitly supports representation and exchange of the Name to Use data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)). Name to Use is represented using ‘usual’ in `name.use`. It should be noted that, `name.period` is not a *Must Support* data element in this version of the profile.

<b>Pronouns​</b>

By making Individual Pronouns extension a *Must Support* data element, this profile explicitly supports representation and exchange of the Pronouns data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)). The value element of the [Individual Pronouns extension](http://hl7.org/fhir/StructureDefinition/individual-pronouns) is constrained in this profile to be [Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)).

<b>Gender Identity (GI)</b>

By making Individual Gender Identity extension a *Must Support* data element, this profile explicitly supports representation and exchange of the Gender Identity data element (as defined in the [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)). The value element of the [Individual Gender Identity extension](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) is constrained in this profile to be [Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)).

<b>Sex Assigned at Birth</b>

Sex assigned at birth is represented using the [Person Recorded Sex or Gender extension](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) as profiled by [AU Core Sex Assigned At Birth](StructureDefinition-au-core-rsg-sexassignedab.html). It should be noted the [Person Recorded Sex or Gender extension](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) is not marked as *Must Support* in this version of the profile.


### Profile specific implementation guidance
- An individual's IHI **SHOULD** be used in `Patient.identifier` if available, in preference to Medicare or DVA numbers.
- See guidance on the construction of identifiers in each Identifier profile and the section on [Business Identifiers](https://build.fhir.org/ig/hl7au/au-fhir-base/generalguidance.html#business-identifiers) in AU Base.
- See the [Representing communication preferences](general-guidance.html#representing-communication-preferences) section for guidance.
- When constructing an address:
  - an international address can be represented using the core [Address](http://hl7.org/fhir/R4/datatypes.html#Address) data type
  - an Australian address **SHOULD** be represented using the [Australian Address](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-address.html) data type profile
- This profile supports the sex, gender, and related concepts of: Name to Use, Gender Identity, and Individual Pronouns:
  - When exchanging concepts of sex or gender, refer to the guidance on [Sex and Gender](https://build.fhir.org/ig/hl7au/au-fhir-base/sexgender.html) in AU Base and the [Gender Harmony Implementation Guide](http://hl7.org/xprod/ig/uv/gender-harmony/).
  - Sex Assigned at Birth is not marked as *Must Support* but may be exchanged using the [Person Recorded Sex or Gender extension](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) as profiled by [AU Core Sex Assigned At Birth](StructureDefinition-au-core-rsg-sexassignedab.html)
  - Name to Use is represented using "usual" in `name.use`.
  - Gender Identity is represented with the [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) extension. In AU Core, the value element of the [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) extension is constrained to be [Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1) value set ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)).
    - When populating the value element of the [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) extension:
      - *Man or male* may be represented by sending the SNOMED CT code 446151000124109\|Identifies as male gender\|
      - *Woman or female* may be represented by sending the SNOMED CT code 446141000124107\|Identifies as female gender\|
      - *Non-binary* may be represented by sending the SNOMED CT code 33791000087105\|Identifies as nonbinary gender\|
      - *[I/They] use a different term (please specify)*  may be represented by sending only `text` and no `coding`
      - *Prefer not to answer* may be represented by sending the Data Absent Reason code "asked-declined"
      - *Not stated or inadequately described* may be represented by sending the Data Absent Reason code "unknown"
      - Where the workflow does not support obtaining a gender identity value, it may be represented by sending the Data Absent Reason code "not-asked"
  - Pronouns is represented with the [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) extension. In AU Core, the value element of the [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) extension is constrained to be [Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1) ([extensible](http://hl7.org/fhir/R4/terminologies.html#extensible)).
    - When populating the value element of the [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) extension:
      - *they/them/their/theirs/themselves* may be represented by sending the LOINC Answer (LA) code LA29520-6
      - *she/her/her/hers/herself* may be represented by sending the LOINC Answer (LA) code LA29519-8
      - *he/him/his/his/himself* may be represented by sending the LOINC Answer (LA) code LA29518-0
      - *Prefer not to answer* may be represented by sending the Data Absent Reason code "asked-declined"
      - *Asked but not known* may be represented by sending the Data Absent Reason code "asked-unknown"
      - *Not stated or inadequately described* may be represented by sending the Data Absent Reason code "unknown"
      - Where the workflow does not support obtaining a pronoun, it may be represented by sending the Data Absent Reason code "not-asked"
      - Where a preferred pronoun is provided but is not one of the [Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1) terms then a text only or alternative specific coded value can be supplied.
- Patient names can be provided as a text representation in `name.text` and/or parts such as `name.family` and `name.given`. 
  - `name.text` specifies the entire name as it should be displayed and this may be provided instead of, or as well as, the specific parts. It is important to note that the presence of parts of a name, e.g. `name.family` and `name.given`, do not imply that `name.text` is known or must be supplied. 
  - In this profile, the following sub-elements of `name` are marked as *Must Support*: `name.use`, `name.text`, `name.family`, and `name.given`
    - responders are required to support at least one of the following sub-elements: `name.text`, `name.family`, and `name.given`
    - requesters are required to all sub-elements marked *Must Support*: `name.use`, `name.text`, `name.family`, and `name.given`




---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-patient-notes.md

{% include search_parameters_intro.md -%}

<br/><br/>*Note:* Support for _id is mandatory for a responder and optional for a requester. Where the expectation for a search parameter differs between actors, the table below will reflect the stronger conformance requirement.

<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance </th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>_id</td>
        <td><b>SHALL</b></td>
        <td><code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>identifier</td>
        <td><b>SHALL</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the profile.</td>
  </tr>
  <tr>
        <td>birthdate+family</td>
        <td><b>SHOULD</b></td>
        <td><code>date</code>+<code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>birthdate+name</td>
        <td><b>SHOULD</b></td>
        <td><code>date</code>+<code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>family</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>family+gender</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>gender+name</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code>+<code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>name</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
  <tr>
        <td>birthdate</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the day. A responder <b>SHALL</b> support a value precise to the day.<br/><br/>The requester <strong>SHOULD</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
  <tr>
        <td>gender</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>indigenous-status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>gender-identity</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters

1. **SHALL** support searching using the **[`_id`](https://hl7.org/fhir/R4/patient.html#search)** search parameter:
    
    `GET [base]/Patient?_id=[id]`

    Example:
    
      1. GET [base]/Patient?_id=5678

    *Implementation Notes:* Fetches a bundle with the requested Patient, instead of just the resource itself, and allows for the inclusion of additional search parameters such as _include, _revinclude, or _lastUpdated ([how to search by id of the resource](https://hl7.org/fhir/r4/search.html#id)).

1. **SHALL** support searching a patient by an identifier using the **[`identifier`](https://hl7.org/fhir/R4/patient.html#search)** search parameter:
    
    `GET [base]/Patient?identifier=[system|][code]`

    Example:
    
      1. GET [base]/Patient?identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Patient?identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361
      1. GET [base]/Patient?identifier=http://example.org/fhir/mrn\|12345

    *Implementation Notes:* Fetches a bundle containing any Patient resources matching the identifier ([how to search by token](http://hl7.org/fhir/R4/search.html#token))


#### Optional Search Parameters:

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching by a responder-defined search that matches any of the string fields in the HumanName, including family, given, prefix, suffix, and/or text using the **[`name`](https://hl7.org/fhir/R4/patient.html#search)** search parameter:
    
    `GET [base]/Patient?name=[string]`

    Example:
    
      1. GET [base]/Patient?name=Wang
      1. GET [base]/Patient?name=Wang


1. **SHOULD** support searching using the combination of the **[`gender`](https://hl7.org/fhir/R4/patient.html#search)** and **[`name`](https://hl7.org/fhir/R4/patient.html#search)** search parameters:
    
    `GET [base]/Patient?gender={system|}[code]&name=[string]`

    Example:
    
      1. GET [base]/Patient?name=Wang&amp;gender=female

    *Implementation Notes:* Fetches a bundle of all Patient resources matching the specified gender and name ([how to search by string](http://hl7.org/fhir/R4/search.html#string) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))



1. **SHOULD** support searching using the combination of the **[`birthdate`](https://hl7.org/fhir/R4/patient.html#search)** and **[`family`](https://hl7.org/fhir/R4/patient.html#search)** search parameters:
    - **SHOULD** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    
    `GET [base]/Patient?birthdate=[date]&family=[string]`

    Example:
    
      1. GET [base]/Patient?family=Wang&amp;birthdate=2007-03-20

    *Implementation Notes:* Fetches a bundle of all Patient resources matching the specified birthdate and family ([how to search by date](http://hl7.org/fhir/R4/search.html#date) and [how to search by string](http://hl7.org/fhir/R4/search.html#string))

1. **SHOULD** support searching using the combination of the **[`birthdate`](https://hl7.org/fhir/R4/patient.html#search)** and **[`name`](https://hl7.org/fhir/R4/patient.html#search)** search parameters:
    - **SHOULD** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`) and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`
    
    
    `GET [base]/Patient?birthdate=[date]&name=[string]`

    Example:
    
      1. GET [base]/Patient?name=Wang&amp;birthdate=2007-03-20gt

    *Implementation Notes:* Fetches a bundle of all Patient resources matching the name and a birthdate greater than that specified ([how to search by date](http://hl7.org/fhir/R4/search.html#date) and [how to search by string](http://hl7.org/fhir/R4/search.html#string))

1. **SHOULD** support searching using the combination of the **[`family`](https://hl7.org/fhir/R4/patient.html#search)** and **[`gender`](https://hl7.org/fhir/R4/patient.html#search)** search parameters:
    
    `GET [base]/Patient?family=[string]&gender={system|}[code]`

    Example:
    
      1. GET [base]/Patient?family=Wang&amp;gender=female

    *Implementation Notes:* Fetches a bundle of all Patient resources matching the specified family and gender ([how to search by string](http://hl7.org/fhir/R4/search.html#string) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-practitioner-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Record or update information about a practitioner referenced by another resource
- Read information about a practitioner referenced by another resource

### Profile specific implementation guidance
- Even though AU Core Profiles allow both PractitionerRole and Practitioner to be referenced, because PractitionerRole supplies a provider’s location, contact information, and reference to the Practitioner, it **SHOULD** be referenced instead of the Practitioner resource. 
- If a system only supports Practitioner, the system **SHALL** provide implementation specific guidance how to access a provider’s location and contact information using only the Practitioner resource.
- See guidance on the construction of an identifier on the relevant Identifier profile page and the section on [Business Identifiers](https://build.fhir.org/ig/hl7au/au-fhir-base/generalguidance.html#business-identifiers) in AU Base.



---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-practitioner-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
   <tr>
        <td>identifier</td>
        <td><b>SHALL</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both. <br/><br/> The requester <b>SHOULD</b> support search using a HPI-I identifier as defined in the profile. The responder <b>SHOULD</b> support search using the using a HPI-I identifier as defined in the profile.</td>
  </tr>
  <tr>
        <td>_id</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>name</td>
        <td><b>SHOULD</b></td>
        <td><code>string</code></td>
        <td></td>
  </tr>
 </tbody>
</table>

#### Mandatory Search Parameters

The following search parameters **SHALL** be supported:

1. **SHALL** support searching using the **[`identifier`](https://hl7.org/fhir/R4/practitioner.html#search)** search parameter:

    `GET [base]/Practitioner?identifier={system|}[code]`

    Example:
    
      1. GET [base]/Practitioner?identifier=http://ns.electronichealth.net.au/id/hi/hpii/1.0\|8003619900015717

    *Implementation Notes:* Fetches a bundle containing any Practitioner resources matching the identifier ([how to search by token](http://hl7.org/fhir/R4/search.html#token))

#### Optional Search Parameters:

The following search parameters **SHOULD** be supported:

1. **SHOULD** support searching using the **[`_id`](https://hl7.org/fhir/R4/practitioner.html#search)** search parameter:

    `GET [base]/Practitioner?_id=[id]`

    Example:
    
      1. GET [base]/Practitioner?_id=5678

    *Implementation Notes:* Fetches a bundle with the requested Practitioner, instead of just the resource itself, and allows for the inclusion of additional search parameters such as _include, _revinclude, or _lastUpdated ([how to search by id of the resource](https://hl7.org/fhir/r4/search.html#id))

1. **SHOULD** support searching for a practitioner based on text name using the **[`name`](https://hl7.org/fhir/R4/practitioner.html#search)** search parameter:

    `GET [base]/Practitioner?name=[string]`

    Example:
    
      1. GET [base]/Practitioner?name=Sandyson
      1. GET [base]/Practitioner?name=Sandyson&amp;

    *Implementation Notes:* Fetches a bundle of all Practitioner resources matching the name ([how to search by string](http://hl7.org/fhir/R4/search.html#string))

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-practitionerrole-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Record or update information about a practitioner in a role referenced by another resource
- Read information about a practitioner in a role referenced by another resource


### Profile specific implementation guidance
- Even though AU Core Profiles allow both PractitionerRole and Practitioner to be referenced, because PractitionerRole supplies a provider’s location, contact information, and reference to the Practitioner, it **SHOULD** be referenced instead of the Practitioner resource. 
- If a system only supports Practitioner, the system **SHALL** provide implementation specific guidance how to access a provider’s location and contact information using only the Practitioner resource.
- Requesters can request responders return the Practitioner resource using `_include`, see the Notes section below.
- See guidance on the construction of an identifier on the relevant Identifier profile page and the section on [Business Identifiers](https://build.fhir.org/ig/hl7au/au-fhir-base/generalguidance.html#business-identifiers) in AU Base.


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-practitionerrole-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  
  <tr>
        <td>identifier</td>
        <td><b>SHALL</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both. <br/><br/>The requester <b>SHOULD</b> support search using a Medicare Provider Number identifier as defined in the profile. The responder <b>SHOULD</b> support search using a Medicare Provider Number identifier as defined in the profile.</td>
  </tr>
   <tr>
        <td>practitioner</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>_id</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>practitioner.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>SHOULD</b> provide both the system and code values. The responder <b>SHALL</b> support both. <br/><br/> The requester <b>SHOULD</b> support search using a HPI-I identifier as defined in the AU Core Practitioner profile. The responder <b>SHOULD</b> support search using the using a HPI-I identifier as defined in the AU Core Practitioner profile.</td>
  </tr>
  <tr>
        <td>specialty</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>role</td>
        <td><b>SHOULD</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>organization</td>
        <td><b>MAY</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
 </tbody>
</table>

#### Mandatory Search Parameters

The following search parameters **SHALL** be supported:

1. **SHALL** support searching using the **[`identifier`](https://hl7.org/fhir/R4/practitionerrole.html#search)** search parameter:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `PractitionerRole:practitioner`

    `GET [base]/PractitionerRole?identifier={system|}[code]`

    Example:
    
      1. GET [base]/PractitionerRole?identifier=http://ns.electronichealth.net.au/id/medicare-prescriber-number\|553255&amp;_include=PractitionerRole:practitioner
      1. GET [base]/PractitionerRole?identifier=http://ns.electronichealth.net.au/id/medicare-prescriber-number\|553255

    *Implementation Notes:* Fetches a bundle containing any PractitionerRole resources matching the identifier ([how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the **[`practitioner`](https://hl7.org/fhir/R4/practitionerrole.html#search)** search parameters:
    - **SHOULD** support chained searching of practitioner canonical identifier `practitioner.identifier` (e.g. `practitioner.identifier=[system|][code]`)
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `PractitionerRole:practitioner`

    `GET [base]/PractitionerRole?practitioner={Type/}[id]` 
    or optionally `GET [base]/PractitionerRole?practitioner.identifier=[system|][code]`

    Example:
    
      1. GET [base]/PractitionerRole?practitioner=Practitioner/sandyson-sandy
      1. GET [base]/PractitionerRole?practitioner=Practitioner/sandyson-sandy&amp;_include=PractitionerRole:practitioner
      1. GET [base]/PractitionerRole?practitioner.identifier=http://ns.electronichealth.net.au/id/hi/hpii/1.0\|8003619900015717

    *Implementation Notes:* Fetches a bundle of all PractitionerRole resources matching the specified practitioner ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

#### Optional Search Parameters

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the **[`_id`](https://hl7.org/fhir/R4/practitionerrole.html#search)** search parameter:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `PractitionerRole:practitioner`

    `GET [base]/PractitionerRole?_id=[id]`

    Example:
    
      1. GET [base]/PractitionerRole/_id=5678
      1. GET [base]/PractitionerRole?_id=5678&amp;_include=PractitionerRole:practitioner

    *Implementation Notes:* Fetches a bundle with the requested PractitionerRole, instead of just the resource itself, and allows for the inclusion of additional search parameters such as _include, _revinclude, or _lastUpdated ([how to search by id of the resource](https://hl7.org/fhir/r4/search.html#id))

1. **SHOULD** support searching using the **[`specialty`](https://hl7.org/fhir/R4/practitionerrole.html#search)** search parameter:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `PractitionerRole:practitioner`

    `GET [base]/PractitionerRole?specialty={system|}[code]`

    Example:
    
      1. GET [base]/PractitionerRole?specialty=http://snomed.info/sct\|62247001
      1. GET [base]/PractitionerRole?specialty=http://snomed.info/sct\|62247001
      1. GET [base]/PractitionerRole?specialty=http://snomed.info/sct\|62247001&amp;_include=PractitionerRole:practitioner

    *Implementation Notes:* Fetches a bundle of all PractitionerRole resources for the specified specialty ([how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the **[`role`](https://hl7.org/fhir/R4/practitionerrole.html#search)** search parameter:
    - **SHOULD** support these **[`_include`](http://hl7.org/fhir/R4/search.html#include)** parameters: `PractitionerRole:practitioner`

    `GET [base]/PractitionerRole?role={system|}[code]`

    Example:
    
      1. GET [base]/PractitionerRole?role=http://snomed.info/sct\|304292004
      1. GET [base]/PractitionerRole?role=http://snomed.info/sct\|304292004&amp;_include=PractitionerRole:practitioner

    *Implementation Notes:* Fetches a bundle of all PractitionerRole resources for the specified role ([how to search by token](http://hl7.org/fhir/R4/search.html#token))



---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-procedure-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for procedures performed on a patient
- Record or update a record of a procedure performed on a patient

### Profile specific implementation guidance
- `Procedure.category` provides an efficient way of supporting system interactions, e.g. restricting searches. Implementers need to understand that data categorisation is somewhat subjective. The categorisation applied by the source may not align with a receiver’s expectations.
- The use of coding can vary significantly across systems, requesters need to understand that they may encounter codes they do not recognise and be prepared to handle those resources appropriately. Responders **SHOULD** populate `Procedure.code.text` and/or `Procedure.code.coding.display` so that requesters can at least display the procedure even if the requester does not recognise the code supplied.
- `Procedure.code` contains the identification of the procedure which may include body site information. Where a system has information not supported by the coding in `Procedure.code.coding` (e.g. body site, laterality and other qualification of procedure coding terms) that information **SHOULD** be supplied in `Procedure.code.text`
- The Procedure resource can represent a clinical indication with `Procedure.reasonCode`, or a reference with `Procedure.reasonReference` to a Condition or other resource.
  - Although both are marked as *Must Support*, responders are not required to support both a code and a reference, but they **SHALL** support *at least one* of these elements
  - A requester **SHALL** support both elements
- A procedure including an implantable device is recommended to use `Procedure.focalDevice` with a reference to a Device resource

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-procedure-notes.md

{% include search_parameters_intro.md -%}
<table class="list">
<tbody>
  <tr>
    <th>Parameter(s)</th>
    <th>Conformance</th>
    <th>Type(s)</th>
    <th>Requirements (when used alone or in combination)</th>
  </tr>
  <tr>
        <td>patient</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code></td>
        <td>The requester <b>SHALL</b> provide at least an id value and <b>MAY</b> provide both the Type and id values. The responder <b>SHALL</b> support both.</td>
  </tr>
  <tr>
        <td>patient+date</td>
        <td><b>SHALL</b></td>
        <td><code>reference</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient+code+date</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code>+<code>date</code></td>
        <td></td>
  </tr>
  <tr>
        <td>patient.identifier</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>.<code>token</code></td>
        <td>The requester <b>SHALL</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <b>SHOULD</b> support search using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile. The responder <b>SHOULD</b> support search using the using IHI, Medicare Number, and DVA Number identifiers as defined in the AU Core Patient profile.</td>
  </tr>
  <tr>
        <td>patient+status</td>
        <td><b>SHOULD</b></td>
        <td><code>reference</code>+<code>token</code></td>
        <td></td>
  </tr>
  <tr>
        <td>code</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleOr</code>. The responder <strong>SHOULD</strong> support <code>multipleOr</code>.</td>
  </tr>
  <tr>
        <td>date</td>
        <td><b>MAY</b></td>
        <td><code>date</code></td>
        <td>A requester <b>SHALL</b> provide a value precise to the second + time offset. A responder <b>SHALL</b> support a value precise to the second + time offset.<br/><br/>The requester <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHALL</strong> support these search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.<br/><br/>The requester <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>. The responder <strong>SHOULD</strong> support <code>multipleAnd</code>, and if <code>multipleAnd</code> is supported, <strong>SHALL</strong> support the search comparators <code>gt</code>, <code>lt</code>, <code>ge</code>, <code>le</code>.</td>
  </tr>
  <tr>
        <td>status</td>
        <td><b>MAY</b></td>
        <td><code>token</code></td>
        <td>The requester <b>SHALL</b> provide at least a code value and <b>MAY</b> provide both the system and code values. The responder <b>SHALL</b> support both.<br/><br/>The requester <strong>SHALL</strong> support <code>multipleOr</code>. The responder <strong>SHALL</strong> support <code>multipleOr</code>.</td>
  </tr>
 </tbody>
</table>


#### Mandatory Search Parameters

The following search parameters and search parameter combinations **SHALL** be supported:

1. **SHALL** support searching using the **[`patient`](https://hl7.org/fhir/R4/procedure.html#search)** search parameter:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)

    `GET [base]/Procedure?patient={Type/}[id]` or optionally`GET [base]/Procedure?patient.identifier=[system|][code]`

    Example:
    
      1. GET [base]/Procedure?patient=5678
      1. GET [base]/Procedure?patient.identifier=http://ns.electronichealth.net.au/id/medicare-number\|32788511952
      1. GET [base]/Procedure?patient.identifier=http://ns.electronichealth.net.au/id/hi/ihi/1.0\|8003608833357361 

    *Implementation Notes:* Fetches a bundle of all Procedure resources for the specified patient ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/procedure.html#search)** and **[`date`](https://hl7.org/fhir/R4/procedure.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`
    `GET [base]/Procedure?patient={Type/}[id]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Procedure?patient=5678&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Procedure?patient.identifier=http://example.org/fhir/mrn\|12345&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Procedure resources for the specified patient and date ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters

The following search parameters and search parameter combinations **SHOULD** be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/procedure.html#search)** and **[`code`](https://hl7.org/fhir/R4/procedure.html#search)** and **[`date`](https://hl7.org/fhir/R4/procedure.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`)
    - **SHOULD** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - **SHALL** support these `date` comparators: `gt,lt,ge,le`
    - **SHOULD** support *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* search on `date` (e.g.`date=[date]&date=[date]]&...`), and if *[multipleAnd](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)* is supported, <strong>SHALL</strong> support the search comparators `gt,lt,ge,le`

    `GET [base]/Procedure?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Procedure?patient=5678&amp;code=http://snomed.info/sct\|26782000,http://snomed.info/sct\|36969009&amp;date=ge2020-01-01T00:00:00Z
      1. GET [base]/Procedure?patient.identifier=http://example.org/fhir/mrn\|12345&amp;code=http://snomed.info/sct\|26782000,http://snomed.info/sct\|36969009&amp;date=ge2020-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Procedure resources for the specified patient and date and procedure code(s). **SHOULD** support search by multiple codes. ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token) and [how to search by date](http://hl7.org/fhir/R4/search.html#date))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/R4/procedure.html#search)** and **[`status`](https://hl7.org/fhir/R4/procedure.html#search)** search parameters:
    - **SHOULD** support chained searching of patient canonical identifier `patient.identifier` (e.g. `patient.identifier=[system|][code]`
    - **SHALL** support *[multipleOr](http://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Procedure?patient={Type/}[id]&status={system|}[code]{,{system|}[code],...}`

    Example:
    
      1. GET [base]/Procedure?patient=5678&amp;status=completed

    *Implementation Notes:* Fetches a bundle of all Procedure resources for the specified patient and status ([how to search by reference](http://hl7.org/fhir/R4/search.html#reference) and [how to search by token](http://hl7.org/fhir/R4/search.html#token))



---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-resprate-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of respiration rate associated with a patient
- Record or update an observation of respiration rate associated with a patient

### Profile specific implementation guidance
{% include observation_vitalsigns_guidance.md -%}



---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-resprate-notes.md

{% assign code_code = "9279-1" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-rsg-sexassignedab-intro.md

### Profile specific implementation guidance
- When populating the value element of the [Person Recorded Sex or Gender](https://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension for Sex Assigned at Birth:
  - *Male* may be represented by sending the SNOMED CT code 248153007\|Male\|
  - *Female* may be represented by sending the SNOMED CT code 248152002\|Female\|
  - *Intersex* may be represented by sending the SNOMED CT code 32570691000036108\|Intersex\|
  - *Indeterminate sex* may be represented by sending the SNOMED CT code 32570681000036106\|Indeterminate sex\|

**Examples:**

* Examples for this Extension Profile: [Patient/banks-mia-leanne](Patient-banks-mia-leanne.html)

---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-smokingstatus-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of smoking status associated with a patient
- Record or update an observation of smoking status associated with a patient

### Profile specific implementation guidance
{% include observation_coding_guidance.md -%}






---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-smokingstatus-notes.md

{% assign code_code = "266918002" %}
{% assign code_system = "http://snomed.info/sct" %}
{% include search_parameters_intro.md -%}
{% include observation_parameters.md -%}
{% include observation_social-history_notes.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-waistcircum-intro.md

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.

### Usage scenarios

The following are supported usage scenarios for this profile:

- Query for observations of waist circumference associated with a patient
- Record or update an observation of waist circumference associated with a patient


### Profile specific implementation guidance

{% include observation_vitalsigns_guidance.md -%}


---

File: repos/hl7au_SLASH_au-fhir-core/input/intro-notes/StructureDefinition-au-core-waistcircum-notes.md

{% assign code_code = "8280-0" %}
{% include search_parameters_intro.md -%}
{% include observation_vitalsigns_parameters.md -%}
{% include observation_vitalsigns_notes.md -%}

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/actors.md

The following ActorDefinitions define the systems that plays a role in data exchange, and that have obligations associated with the role the actor plays, in AU Core.

- [AU Core Requester actor](ActorDefinition-au-core-actor-requester.html)

The AU Core Requester is a system that creates and initiates a data access request to retrieve core digital health and administrative information. The set of capabilities (behaviours) for this actor is defined in [AU Core Requester CapabilityStatement](CapabilityStatement-au-core-requester.html).

- [AU Core Responder actor](ActorDefinition-au-core-actor-responder.html)

The AU Core Responder is a system responsible for providing responses to queries submitted by AU Core Requesters. The set of capabilities (behaviours) for this actor is defined in [AU Core Responder CapabilityStatement](CapabilityStatement-au-core-responder.html).

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/aucdi.md

[Australian Core Data for Interoperability (AUCDI)](https://sparked.csiro.au/index.php/sparked-products-resources/australian-core-data-for-interoperability/aucdi-release-1/) is the product of a national clinician focussed requirements gathering project operating as part of the [Sparked AU FHIR Accelerator](https://sparked.csiro.au/).  The AUCDI outputs form a set of data requirements to be considered and referred to as part of the development and definition of AU Core. 

The primary intent of the AUCDI is to design and govern a collection of coherent, reusable building blocks known as ‘data groups’. These data groups specify “what” the clinical requirements of the clinical information that should be included for data entry, data use, and sharing of information supporting healthcare delivery. However, it does not specify “how” the data is exchanged; this is the
role fulfilled by the FHIR standard. AUCDI is not required to be implemented as a whole single product. Parts can be
implemented as required for specific use cases.

AUCDI Release 1 (R1) is focused on an agreement of “the core of the core” common data elements; minimum data required to support standardised clinical information capture at the point of care as well as enable the safe and meaningful exchange of information to other care providers. 

AU Core is intended to provide an implementable standard for FHIR based interfaces for provider and patient information systems in Australia​ providing:
- an exchange standard for AUCDI (the underpinning clinical data model)
- Data model and RESTful API interactions that set minimum expectations for a system to record, update, search, and retrieve core digital health and administrative information​
- be built on top of for standards development for specific use cases

With AUCDI defining clinical data requirements and FHIR AU Core providing detailed FHIR-based profiles for meeting clinical data requirements and administrative data requirements, an interpretation of AUCDI is necessary which is undertaken through the community.

Updates to AU Core depend upon community input and we encourage our audience to submit questions and feedback to AU Core specifications by clicking on the Propose a change link in the footer of every page. In addition, we encourage requesting any necessary clarifications to AUCDI through the AUCDI process that helps inform future updates to FHIR AU Core.

### AUCDI mappings into AU Core

The table below shows the relationship between the AUCDI Data Groups and Elements and AU Core profiles.<br/>
Column attribute descriptions are as follows:
- <b>AUCDI Data Group</b>: Represents a grouping of one or more AUCDI Data Elements.
- <b>AUCDI Data Element</b>: Represents a single, discreet clinical concept defined by AUCDI.
- <b>AU Core Profile(s)</b>: Represents the mapping of AUCDI Data Groups and AUCDI Data Elements to AU Core FHIR artefacts.
- <b>FHIR Path</b>: The specific path in the FHIR standards for each AUCDI Data Element within, showing where and how to implement these elements in FHIR-based systems. 
- <b>Comment</b>: Additional information about the mapping including an explanation of where an element or group is not yet mapped.

<table border="1" cellspacing="0" cellpadding="0" width="100%">
<thead>
  <tr style="background-color: #f2f2f2;">
    <th>AUCDI Data Group</th>
    <th colspan="2">AUCDI Data Element</th>
    <th>AU Core Profile(s)</th>
    <th>FHIR Path</th>
    <th>Comment</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="4">Adverse reaction risk summary</td>
    <td colspan="2">Substance name</td>
    <td><a href="StructureDefinition-au-core-allergyintolerance.html">AU Core AllergyIntolerance</a></td>
    <td>AllergyIntolerance.code</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Manifestation</td>
    <td><a href="StructureDefinition-au-core-allergyintolerance.html">AU Core AllergyIntolerance</a></td>
    <td>AllergyInterolance.reaction</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Comment</td>
    <td><a href="StructureDefinition-au-core-allergyintolerance.html">AU Core AllergyIntolerance</a></td>
    <td>AllergyIntolerance.note</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Last updated</td>
    <td>-</td>
    <td>-</td>
    <td>This AUCDI element is a <a href="future.html#future-candidate-requirements-under-consideration">Future Candidate Requirement Under Consideration</a>. Future versions of AU Core will develop and test approaches to addressing Last Updated.</td>
  </tr>
  <tr>
    <td rowspan="5">Problem/Diagnosis summary</td>
    <td colspan="2">Problem / Diagnosis name</td>
    <td><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
    <td>Condition.code</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Body site/laterality</td>
    <td><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
    <td>Condition.code</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Status</td>
    <td><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
    <td>Condition.clinicalStatus</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Comment</td>
    <td><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
    <td>Condition.note</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Last updated</td>
    <td>-</td>
    <td>-</td>
    <td>This AUCDI element is a <a href="future.html#future-candidate-requirements-under-consideration">Future Candidate Requirement Under Consideration</a>. Future versions of AU Core will develop and test approaches to addressing Last Updated.</td>
  </tr>
  <tr>
    <td rowspan="5">Procedure completed event</td>
    <td colspan="2">Procedure name</td>
    <td><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
    <td>Procedure.code</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Clinical indication</td>
    <td><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
    <td>Procedure.reasonCode | Procedure.reasonReference[x]</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Body site/laterality</td>
    <td><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
    <td>Procedure.code</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Date performed</td>
    <td><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
    <td>Procedure.performed[x] | Procedure.performedDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Comment</td>
    <td><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
    <td>Procedure.note</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4">Vaccination administered event</td>
    <td colspan="2">Vaccine name</td>
    <td><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
    <td>Immunization.vaccineCode</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Sequence number</td>
    <td><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
    <td>Immunization.protocolApplied.doseNumber[x]</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Date of administration</td>
    <td><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
    <td>Immunization.occurenceDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Comment</td>
    <td><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
    <td>Immunization.note</td>
    <td></td>
  </tr>
    <tr>
    <td rowspan="2">Tobacco smoking summary</td>
    <td colspan="2">Overall status</td>
    <td><a href="StructureDefinition-au-core-smokingstatus.html">AU Core Smoking Status</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
    <tr>
    <td colspan="2">Last updated</td>
    <td>-</td>
    <td>-</td>
    <td>This AUCDI element is a <a href="future.html#future-candidate-requirements-under-consideration">Future Candidate Requirement Under Consideration</a>. Future versions of AU Core will develop and test approaches to addressing Last Updated.</td>
  </tr>
  <tr>
    <td rowspan="9">Medication use statement</td>
    <td colspan="2">Medication name</td>
    <td>AU Core MedicationStatement | <a href="StructureDefinition-au-core-medication.html">AU Core Medication</a></td>
    <td>MedicationStatement.medication[x] | Medication.code</td>
    <td rowspan="8"><p>Development and testing of AU Core MedicationStatement profile is planned for AU Core R2.</p><p>See <a href="medicine-information.html">Medicine Information</a> guidance.</p></td>
  </tr>
  <tr>
    <td colspan="2">Clinical indication</td>
    <td>AU Core MedicationStatement</td>
    <td>MedicationStatement.reasonCode | MedicationStatement.reasonReference</td>
  </tr>
  <tr>
    <td colspan="2">Strength</td>
    <td>AU Core MedicationStatement | <a href="StructureDefinition-au-core-medication.html">AU Core Medication</a></td>
    <td>MedicationStatement.medication[x] | Medication.code | Medication.ingredient</td>
  </tr>
  <tr>
    <td colspan="2">Form</td>
    <td>AU Core MedicationStatement | <a href="StructureDefinition-au-core-medication.html">AU Core Medication</a></td>
    <td>MedicationStatement.medication[x] | Medication.form</td>
  </tr>
  <tr>
    <td colspan="2">Dose amount</td>
    <td>AU Core MedicationStatement</td>
    <td>MedicationStatement.dosage.doseAndRate</td>
  </tr>
  <tr>
    <td colspan="2">Route of administration</td>
    <td>AU Core MedicationStatement</td>
    <td>MedicationStatement.dosage.route</td>
  </tr>
  <tr>
    <td colspan="2">Dose timing</td>
    <td>AU Core MedicationStatement</td>
    <td>MedicationStatement.dosage.timing</td>
  </tr>
  <tr>
    <td colspan="2">Comment</td>
    <td>AU Core MedicationStatement</td>
    <td>MedicationStatement.note</td>
  </tr>
  <tr>
    <td colspan="2">Date of assertion</td>
    <td>-</td>
    <td>-</td>
    <td>Mapping of this element will be undertaken as part of the work on the AU Core MedicationStatement profile, planned for AU Core R2.</td>
  </tr>
  <tr>
    <td rowspan="4">Sex and gender summary</td>
    <td colspan="2">Sex assigned at birth</td>
    <td><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
    <td>Patient.extension.where(url='http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender')</td>
    <td>The <a href="http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender">Person Recorded Sex or Gender extension</a> is profiled by <a href="StructureDefinition-au-core-rsg-sexassignedab.html">AU Core Sex Assigned At Birth (RSG)</a> to represent the concept of Sex assigned at birth.</td>
  </tr>
  <tr>
    <td colspan="2">Gender identity</td>
    <td><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
    <td>Patient.extension.where(url='http://hl7.org/fhir/StructureDefinition/individual-genderIdentity')</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Pronoun/s</td>
    <td><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
    <td>Patient.extension.where(url='http://hl7.org/fhir/StructureDefinition/individual-pronouns')</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Last updated</td>
    <td>-</td>
    <td>-</td>
    <td>This AUCDI element is a <a href="future.html#future-candidate-requirements-under-consideration">Future Candidate Requirement Under Consideration</a>. Future versions of AU Core will develop and test approaches to addressing Last Updated.</td>
  </tr>
  <tr>
    <td rowspan="2">Encounter – clinical context</td>
    <td colspan="2">Reason for encounter</td>
    <td><a href="StructureDefinition-au-core-encounter.html">AU Core Encounter</a></td>
    <td>Encounter.reasonCode | Encounter.reasonReference</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Modality</td>
    <td><a href="StructureDefinition-au-core-encounter.html">AU Core Encounter</a></td>
    <td>Encounter.class</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="15">Measurements and vital signs</td>
    <td rowspan="3">Blood pressure</td>
    <td>Systolic pressure</td>
    <td><a href="StructureDefinition-au-core-bloodpressure.html">AU Core Blood Pressure</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Diastolic pressure</td>
    <td><a href="StructureDefinition-au-core-bloodpressure.html">AU Core Blood Pressure</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-bloodpressure.html">AU Core Blood Pressure</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Pulse</td>
    <td>Rate</td>
    <td><a href="StructureDefinition-au-core-heartrate.html">AU Core Heart Rate</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of observation</td>
    <td><a href="StructureDefinition-au-core-heartrate.html">AU Core Heart Rate</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td  rowspan="2">Body temperature</td>
    <td>Temperature</td>
    <td><a href="StructureDefinition-au-core-bodytemp.html">AU Core Body Temperature</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-bodytemp.html">AU Core Body Temperature</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td  rowspan="2">Respiration</td>
    <td>Rate</td>
    <td><a href="StructureDefinition-au-core-resprate.html">AU Core Respiration Rate</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of observation</td>
    <td><a href="StructureDefinition-au-core-resprate.html">AU Core Respiration Rate</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td  rowspan="2">Body height</td>
    <td>Height / Length</td>
    <td><a href="StructureDefinition-au-core-bodyheight.html">AU Core Body Height</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-bodyheight.html">AU Core Body Height</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td  rowspan="2">Body weight</td>
    <td>Weight</td>
    <td><a href="StructureDefinition-au-core-bodyweight.html">AU Core Body Weight</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-bodyweight.html">AU Core Body Weight</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td  rowspan="2">Waist circumference</td>
    <td>Waist circumference</td>
    <td><a href="StructureDefinition-au-core-waistcircum.html">AU Core Waist Circumference</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-waistcircum.html">AU Core Waist Circumference</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
<tr>
    <td rowspan="11">Biomarkers</td>
    <td rowspan="5">Lipids</td>
    <td>HDL cholesterol</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>LDL cholesterol</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Total cholesterol</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Triglycerides</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Haemoglobin A1c (HbA1c)</td>
    <td>HbA1c</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Estimated glomerular filtration rate (eGFR)</td>
    <td>eGFR</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Urine albumin-creatinine ratio (uACR)</td>
    <td>uACR</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation</td>
    <td></td>
  </tr>
  <tr>
    <td>Date/Time of measurement</td>
    <td><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
    <td>Observation.effectiveDateTime</td>
    <td></td>
  </tr>
</tbody>
</table>



---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/capability-statements.md


The following CapabilityStatements define the specific capabilities that different types of systems are expected to have in order to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the following capability statements.

- [AU Core Requester CapabilityStatement](CapabilityStatement-au-core-requester.html)

This CapabilityStatement describes the basic rules for the [AU Core Requester actor](ActorDefinition-au-core-actor-requester.html) that is responsible for creating and initiating the queries for information. The complete list of FHIR profiles, RESTful operations, and search parameters supported by AU Core Requesters are defined in this CapabilityStatement. 

- [AU Core Responder CapabilityStatement](CapabilityStatement-au-core-responder.html)

This CapabilityStatement describes the basic rules for the [AU Core Responder actor](ActorDefinition-au-core-actor-responder.html) that is responsible for providing responses to queries submitted by AU Core Requester actors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by AU Core Responders are defined in this CapabilityStatement.

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/changes.md

###  Release TBD
- Publication date: TBD
- Publication status: TBD
- Based on FHIR version: 4.0.1

This change log documents the significant updates and resolutions implemented from version 1.0.0-ballot to TBD.

#### Changes in this version
- Made the following changes to AU Core Diagnostic Result Observation:
  - corrected base profile to AU Base Diagnostic Observation [FHIR-47116](https://jira.hl7.org/browse/FHIR-47116)
  - removed constraints from Observation.hasMember.reference [FHIR-46728](https://jira.hl7.org/browse/FHIR-46728), [FHIR-48331](https://jira.hl7.org/browse/FHIR-48331)
  - removed Must Support and Obligations from Observation.identifier, Observation.interpretation, Observation.note, Observation.method, Observation.referenceRange, Observation.referenceRange.low, Observation.referenceRange.high, Observation.referenceRange.type and Observation.referenceRange.text [FHIR-46737](https://jira.hl7.org/browse/FHIR-46737)
- Made the following changes to AU Core Pathology Result Observation:
  - removed constraints from Observation.hasMember.reference and Observation.specimen.reference [FHIR-46728](https://jira.hl7.org/browse/FHIR-46728), [FHIR-46731](https://jira.hl7.org/browse/FHIR-46731)
  - removed Must Support and Obligations from Observation.identifier, Observation.method and Observation.note [FHIR-46732](https://jira.hl7.org/browse/FHIR-46732)
- Made the following changes to AU Core Location:
  - removed Must Support flag and associated Obligation extensions from Location.identifier [FHIR-47105](https://jira.hl7.org/browse/FHIR-47105) and Location.mode [FHIR-47104](https://jira.hl7.org/browse/FHIR-47104)
- Made the following changes in AU Core Requester CapabilityStatement:
  - removed all instances of MAY support create, update, delete, vread, patch, history-instance [FHIR-46060](https://jira.hl7.org/browse/FHIR-46060)
  - Removed MAY support search-system and history-system [FHIR-46059](https://jira.hl7.org/browse/FHIR-46059)
  - updated requirement to mandate both system and code values for identifier search parameters on Organization, Practitioner and PractitionerRole [FHIR-46782](https://jira.hl7.org/browse/FHIR-46782)
  - changed the Observation search parameter 'patient' from SHALL to MAY [FHIR-47171](https://jira.hl7.org/browse/FHIR-47171)
  - removed the requirement for including an offset in the Patient 'birthdate' search parameter [FHIR-47150](https://jira.hl7.org/browse/FHIR-47150)
  - changed the Organization 'name' search parameter from SHOULD to SHALL [FHIR-47109](https://jira.hl7.org/browse/FHIR-47109)
  - changed the Location 'address' search parameter from SHALL to SHOULD [FHIR-47107](https://jira.hl7.org/browse/FHIR-47107)
  - added a PractitionerRole 'role' search parameter as a SHOULD [FHIR-47115](https://jira.hl7.org/browse/FHIR-47115)
  - changed MedicationRequest search parameters 'patient+intent' and 'patient+intent+status' from SHALL to SHOULD, and added a new MedicationRequest search parameter 'patient+status' as a SHALL [FHIR-47073](https://jira.hl7.org/browse/FHIR-47073)
  - removed Location search parameter 'identifier' [FHIR-48927](https://jira.hl7.org/browse/FHIR-48927)
- Made the following changes in AU Core Responder CapabilityStatement:
  - replaced security and authorization requirements with pointer to Security and Privacy page [FHIR-46067](https://jira.hl7.org/browse/FHIR-46067)
  - corrected narrative of PractitionerRole practitioner.identifier search parameter from Medicare Provider Number to HPI-I [FHIR-47013](https://jira.hl7.org/browse/FHIR-47013)
  - corrected support for Practitioner _id search parameter to be SHOULD instead of SHALL [FHIR-46777](https://jira.hl7.org/browse/FHIR-46777)
  - added missing entries for DocumentReference and RelatedPerson resources [FHIR-46546](https://jira.hl7.org/browse/FHIR-46546)
  - removed all instances of MAY support create, update, delete, vread, patch, history-instance [FHIR-46060](https://jira.hl7.org/browse/FHIR-46060)
  - changed the Observation search parameter 'patient' from SHALL to MAY [FHIR-47171](https://jira.hl7.org/browse/FHIR-47171)
  - removed the requirement for including an offset in the Patient 'birthdate' search parameter [FHIR-47150](https://jira.hl7.org/browse/FHIR-47150)
  - changed the Organization 'name' search parameter from SHOULD to SHALL [FHIR-47109](https://jira.hl7.org/browse/FHIR-47109)
  - changed the Location 'address' search parameter from SHALL to SHOULD [FHIR-47107](https://jira.hl7.org/browse/FHIR-47107)
  - added a PractitionerRole 'role' search parameter as a SHOULD [FHIR-47115](https://jira.hl7.org/browse/FHIR-47115)
  - changed MedicationRequest search parameters 'patient+intent' and 'patient+intent+status' from SHALL to SHOULD, and added a new MedicationRequest search parameter 'patient+status' as a SHALL [FHIR-47073](https://jira.hl7.org/browse/FHIR-47073)
  - removed Location search parameter 'identifier' [FHIR-48927](https://jira.hl7.org/browse/FHIR-48927)


###  Release 1.0.0-ballot
- Publication date: 2024-08-05
- Publication status: Ballot
- Based on FHIR version: 4.0.1

This change log documents the significant updates and resolutions implemented from version 0.3.0-ballot to 1.0.0-ballot.

#### Changes in this version
- Added AUCDI element mapping Date/Time of Measurement and Date/Time of Observation, and added future consideration note for Last Updated
- dependency to Smart App Launch changed to 2.1.0 instead of latest (2.2.0) due to missing dependency issue that causes failure to load in NPM Package registry [FHIR-46398](https://jira.hl7.org/browse/FHIR-46398)
- FHIR Obligations, Actors, and Capabilities:
  - changed the default obligation behaviour in AU Core for Responders from 'be capable of populate' to 'populate if known' [FHIR-45231](https://jira.hl7.org/browse/FHIR-45231), [FHIR-45195](https://jira.hl7.org/browse/FHIR-45195), [FHIR-45163](https://jira.hl7.org/browse/FHIR-45163), [FHIR-45095](https://jira.hl7.org/browse/FHIR-45095), [FHIR-45073](https://jira.hl7.org/browse/FHIR-45073)
  - introduced FHIR Obligations & ActorDefinitions to clarify system actors and associated obligations [FHIR-45231](https://jira.hl7.org/browse/FHIR-45231), [FHIR-45195](https://jira.hl7.org/browse/FHIR-45195), [FHIR-45163](https://jira.hl7.org/browse/FHIR-45163), [FHIR-45073](https://jira.hl7.org/browse/FHIR-45073)
  - clarified the documentation on Must Support and Mandatory elements using the language of Obligation [FHIR-45231](https://jira.hl7.org/browse/FHIR-45231), [FHIR-45195](https://jira.hl7.org/browse/FHIR-45195), [FHIR-45163](https://jira.hl7.org/browse/FHIR-45163), [FHIR-45073](https://jira.hl7.org/browse/FHIR-45073), [FHIR-43852](https://jira.hl7.org/browse/FHIR-43852)
  - clarified capabilities in AU Core R1 by:
    - renaming AU Core Server to be AU Core Responder [FHIR-45231](https://jira.hl7.org/browse/FHIR-45231), [FHIR-45195](https://jira.hl7.org/browse/FHIR-45195), [FHIR-45163](https://jira.hl7.org/browse/FHIR-45163), [FHIR-45073](https://jira.hl7.org/browse/FHIR-45073), [FHIR-43852](https://jira.hl7.org/browse/FHIR-43852)
    - renaming AU Core Client to be AU Core Requester [FHIR-45231](https://jira.hl7.org/browse/FHIR-45231), [FHIR-45195](https://jira.hl7.org/browse/FHIR-45195), [FHIR-45163](https://jira.hl7.org/browse/FHIR-45163), [FHIR-45073](https://jira.hl7.org/browse/FHIR-45073), [FHIR-43852](https://jira.hl7.org/browse/FHIR-43852)
  - added Actor Definitions page under FHIR Artefacts [FHIR-45231](https://jira.hl7.org/browse/FHIR-45231), [FHIR-45195](https://jira.hl7.org/browse/FHIR-45195), [FHIR-45163](https://jira.hl7.org/browse/FHIR-45163), [FHIR-45073](https://jira.hl7.org/browse/FHIR-45073).
- Added Security and Privacy page [FHIR-45067](https://jira.hl7.org/browse/FHIR-45067), and added requirements on supporting TLS 1.2 and TLS 1.3 [FHIR-46068](https://jira.hl7.org/browse/FHIR-46068).
- Added AU Variance Statement page [FHIR-46034](https://jira.hl7.org/browse/FHIR-46034).
- Moved the Medicine Information section from the General Guidance page to a new Medicine Information page [FHIR-45165](https://jira.hl7.org/browse/FHIR-45165).
- Removed support for the following search parameters and search parameter combinations:
  - Encounter: discharge-disposition, identifier, type, patient+discharge-disposition, patient+type [FHIR-45954](https://jira.hl7.org/browse/FHIR-45954), [FHIR-45603](https://jira.hl7.org/browse/FHIR-45603), [FHIR-46057](https://jira.hl7.org/browse/FHIR-46057)
  - MedicationRequest: identifier and category [FHIR-45991](https://jira.hl7.org/browse/FHIR-45991)
- Made the following changes to AU Core Immunization:
  - removed Must Support from Immunization.encounter [FHIR-45218](https://jira.hl7.org/browse/FHIR-45218)
  - removed Must Support from Immunization.performer, Immunization.performer.function, Immunization.performer.actor [FHIR-44653](https://jira.hl7.org/browse/FHIR-44653)
  - removed Must Support from Immunization.protocolApplied, Immunization.protocolApplied.series, Immunization.protocolApplied.targetDisease, Immunization.protocolApplied.doseNumber[x] [FHIR-44674](https://jira.hl7.org/browse/FHIR-44674), [FHIR-44656](https://jira.hl7.org/browse/FHIR-44656), [FHIR-44654](https://jira.hl7.org/browse/FHIR-44654)
  - removed Must Support from Immunization.reasonCode [FHIR-44654](https://jira.hl7.org/browse/FHIR-44654), [FHIR-45968](https://jira.hl7.org/browse/FHIR-45968)
  - added Must Support to Immunization.primarySource [FHIR-44659](https://jira.hl7.org/browse/FHIR-44659)
  - changed Immunization.vaccineCode slicing rule from slicing by system to slice by value set [FHIR-46391](https://jira.hl7.org/browse/FHIR-46391)
  - support for AIR codes and AMT Vaccine codes in Immunization.vaccineCode changed to define the slices in AU Core (no longer inherited from AU Base as per [FHIR-44821](https://jira.hl7.org/browse/FHIR-44821)). Slicing discriminator changed from slicing by value:system to slicing by value set and AMT value set binding strength has been corrected to required. [FHIR-46391](https://jira.hl7.org/browse/FHIR-46391)
- Made the following changes to AU Core Encounter:
  - removed Must Support from Encounter.identifier [FHIR-45212](https://jira.hl7.org/browse/FHIR-45212)
  - removed Must Support from Encounter.type [FHIR-44580](https://jira.hl7.org/browse/FHIR-44580)
  - removed Must Support from Encounter.hospitalization, Encounter.hospitalization.dischargeDisposition [FHIR-45210](https://jira.hl7.org/browse/FHIR-45210)
  - in Encounter.participant.individual replaced RelatedPerson with AU Base RelatedPerson [FHIR-45228](https://jira.hl7.org/browse/FHIR-45228)
- Removed Must Support from Location.description in AU Core Location [FHIR-45029](https://jira.hl7.org/browse/FHIR-45029).
- Made the following changes to AU Core MedicationRequest:
  - in MedicationRequest.requester replaced RelatedPerson with AU Base RelatedPerson [FHIR-45228](https://jira.hl7.org/browse/FHIR-45228)
  - removed Must Support from MedicationRequest.identifier [FHIR-45208](https://jira.hl7.org/browse/FHIR-45208)
  - removed Must Support from MedicationRequest.category [FHIR-45207](https://jira.hl7.org/browse/FHIR-45207)
  - removed Must Support from MedicationRequest.note [FHIR-45209](https://jira.hl7.org/browse/FHIR-45209)
  - removed Must Support from MedicationRequest.dispenseRequest, MedicationRequest.dispenseRequest.validityPeriod, MedicationRequest.dispenseRequest.numberOfRepeatsAllowed, MedicationRequest.dispenseRequest.quantity 
  [FHIR-45088](https://jira.hl7.org/browse/FHIR-45088)
  - removed Must Support from MedicationRequest.substitution, MedicationRequest.substitution.allowed[x] [FHIR-45088](https://jira.hl7.org/browse/FHIR-45088)
  - added Must Support to MedicationRequest.reasonReference [FHIR-45090](https://jira.hl7.org/browse/FHIR-45090)
  - support for AMT codes and PBS Item Codes in MedicationRequest.medicationCodeableConcept changed to define slicing in AU Core (no longer inherited from AU Base as per [FHIR-44821](https://jira.hl7.org/browse/FHIR-44821)). Slicing discriminator changed from slicing by value:system to slicing by value set and the binding strength has been corrected to required. [FHIR-46391](https://jira.hl7.org/browse/FHIR-46391)
  - updated invariant au-core-medreq-01 to allow for a Data Absent Reason extension in order to meet AU Core Missing Data and Suppressed Data requirements [FHIR-46417](https://jira.hl7.org/browse/FHIR-46417)
- Made the following changes to AU Core Medication:
  - removal of Must Support from Medication.manufacturer [FHIR-45130](https://jira.hl7.org/browse/FHIR-45130)
  - removed Must Support from Medication.form [FHIR-45221](https://jira.hl7.org/browse/FHIR-45221)
  - removed Must Support from Medication.ingredient [FHIR-45220](https://jira.hl7.org/browse/FHIR-45220)
  - removed Must Support from Medication.ingredient.item[x] [FHIR-45220](https://jira.hl7.org/browse/FHIR-45220)
  - removed Must Support from Medication.ingredient.isActive [FHIR-45220](https://jira.hl7.org/browse/FHIR-45220), [FHIR-45130](https://jira.hl7.org/browse/FHIR-45130), [FHIR-45049](https://jira.hl7.org/browse/FHIR-45049)
  - removed Must Support from Medication.ingredient.strength [FHIR-45220](https://jira.hl7.org/browse/FHIR-45220)
  - removed Must Support from Medication.amount [FHIR-45219](https://jira.hl7.org/browse/FHIR-45219)
  - support for AMT codes and PBS Item Codes in Medication.code changed to define slicing in AU Core (no longer inherited from AU Base as per [FHIR-44821](https://jira.hl7.org/browse/FHIR-44821)). Slicing discriminator changed from slicing by value:system to value set and the binding strength has been corrected to required. [FHIR-46391](https://jira.hl7.org/browse/FHIR-46391)
- Made the following changes to AU Core Organizaton: 
  - removed Must Support from Organization.alias [FHIR-44585](https://jira.hl7.org/browse/FHIR-44585)
  - corrected the invariant au-core-org-01 FHIRPath expression [FHIR-46103](https://jira.hl7.org/browse/FHIR-46103) 
- Made the following changes to AU Core Patient:
  - removed Must Support from Patient.extension:birthPlace [FHIR-45018](https://jira.hl7.org/browse/FHIR-45018)
  - removed Must Support from Patient.extension:interpreterRequired [FHIR-45186](https://jira.hl7.org/browse/FHIR-45186)
  - removed Must Support from Patient.birthDate.extension:birthTime [FHIR-45028](https://jira.hl7.org/browse/FHIR-45028)
  - removed Must Support from Patient.birthDate.extension:accuracyIndicator [FHIR-45028](https://jira.hl7.org/browse/FHIR-45028)
  - added Must Support on Patient.name.text [FHIR-44818](https://jira.hl7.org/browse/FHIR-44818)
  - added Must Support on Patient.name.family [FHIR-44818](https://jira.hl7.org/browse/FHIR-44818)
  - added Must Support on Patient.name.given [FHIR-44818](https://jira.hl7.org/browse/FHIR-44818)
 - updated invariants au-core-pat-01, au-core-pat-02, and au-core-pat-04 to allow for a Data Absent Reason extension in order to meet AU Core Missing Data and Suppressed Data requirements [FHIR-46406](https://jira.hl7.org/browse/FHIR-46406)
- Made the following changes to AU Core Practitioner:
  - removed Must Support from Practitioner.communication [FHIR-44588](https://jira.hl7.org/browse/FHIR-44588)
  - removed Must Support from Practitioner.qualification, Practitioner.qualification.identifier, Practitioner.qualification.code, Practitioner.qualification.period, Practitioner.qualification.issuer: [FHIR-45118](https://jira.hl7.org/browse/FHIR-45118), [FHIR-44587](https://jira.hl7.org/browse/FHIR-44587)
  - removed Must Support from Practitioner.address [FHIR-43860](https://jira.hl7.org/browse/FHIR-43860)
  - removed Must Support from Practitioner.telecom [FHIR-43860](https://jira.hl7.org/browse/FHIR-438608)
  - added Must Support on Practitioner.name.family [FHIR-44819](https://jira.hl7.org/browse/FHIR-44819)
  - added Must Support on Practitioner.name.given [FHIR-44819](https://jira.hl7.org/browse/FHIR-44819)
  - replaced constraint _au-core-prac-01: At least text or family name shall be present_ with making Practitioner.name.family mandatory (1..1) [FHIR-44819](https://jira.hl7.org/browse/FHIR-44819)
- Made the following changes to AU Core PractitionerRole:
  - removed Must Support from PractitionerRole.location [FHIR-43841](https://jira.hl7.org/browse/FHIR-43841)
  - updated invariant au-core-prarol-01 to allow for a Data Absent Reason extension in order to meet AU Core Missing Data and Suppressed Data requirements [FHIR-46419](https://jira.hl7.org/browse/FHIR-46419)
- Made the following changes to AU Core Procedure:
  - removed Must Support from Procedure.statusReason [FHIR-45013](https://jira.hl7.org/browse/FHIR-45013)
  - removed Must Support from Procedure.category [FHIR-45014](https://jira.hl7.org/browse/FHIR-45014)
  - removed Must Support from Procedure.recorder [FHIR-45015](https://jira.hl7.org/browse/FHIR-45015), [FHIR-45082](https://jira.hl7.org/browse/FHIR-45082)
  - removed Must Support from Procedure.asserter [FHIR-45016](https://jira.hl7.org/browse/FHIR-45016), [FHIR-45083](https://jira.hl7.org/browse/FHIR-45083)
  - removed Must Support from Procedure.bodySite and added profile-specific implementation guidance on including body site information [FHIR-45017](https://jira.hl7.org/browse/FHIR-45017), [FHIR-45114](https://jira.hl7.org/browse/FHIR-45114)
  - removed Must Support from Procedure.note [FHIR-45114](https://jira.hl7.org/browse/FHIR-45114)
  - removed the cardinality constraint on Procedure.performed[x], changing it from 1..1 to 0..1 [FHIR-45109](https://jira.hl7.org/browse/FHIR-45109)
  - removed Obligations on Procedure.bodySite [FHIR-46728](https://jira.hl7.org/browse/FHIR-46728)
- Removed AU Core Provenance [FHIR-45191](https://jira.hl7.org/browse/FHIR-45191).
- Removed AU Core MedicationStatement and added to Future of AU Core that AU Core MedicationStatement is planned for AU Core R2 [FHIR-45052](https://jira.hl7.org/browse/FHIR-45052).
- Updated mapping of AUCDI Procedure Completed Event to be represented by Procedure only [au-fhir-core #147](https://github.com/hl7au/au-fhir-core/issues/147).
- Updated mapping of AUCDI Medication Use Statement to be represented by MedicationStatement only [au-fhir-core #145](https://github.com/hl7au/au-fhir-core/issues/145).
- Made the following changes to AU Core Condition:
  - removed Must Support from Condition.asserter [FHIR-45019](https://jira.hl7.org/browse/FHIR-45019), [FHIR-45127](https://jira.hl7.org/browse/FHIR-45127), [FHIR-45083](https://jira.hl7.org/browse/FHIR-45083)
  - removed Must Support from  Condition.recorder [FHIR-45019](https://jira.hl7.org/browse/FHIR-45019), [FHIR-45082](https://jira.hl7.org/browse/FHIR-45082)
  - removed Must Support from Condition.encounter [FHIR-45189](https://jira.hl7.org/browse/FHIR-45189)
  - added profile-specific implementation guidance on representing no known problems [FHIR-45058](https://jira.hl7.org/browse/FHIR-45058)
  - removed invariant au-core-cond-05 [FHIR-46165](https://jira.hl7.org/browse/FHIR-46165)
- Made the following changes to AU Core AllergyIntolerance:
  - removed profile-specific implementation guidance "`AllergyIntolerance.verificationStatus` is "unconfirmed" where a sending system does not clearly have this element or "confirmed" depending on the level of certainty" [FHIR-45039](https://jira.hl7.org/browse/FHIR-45039)
  - removed Must Support from AllergyIntolerance.asserter [FHIR-44699](https://jira.hl7.org/browse/FHIR-44699), [FHIR-45083](https://jira.hl7.org/browse/FHIR-45083)
  - removed Must Support from AllergyIntolerance.recorder [FHIR-45082](https://jira.hl7.org/browse/FHIR-45082), [FHIR-45066](https://jira.hl7.org/browse/FHIR-45066)
  - removed Must Support from AllergyIntolerance.encounter [FHIR-45123](https://jira.hl7.org/browse/FHIR-45123)
  - removed Must Support from AllergyIntolerance.note [FHIR-45188](https://jira.hl7.org/browse/FHIR-45188)
  - changed the AllergyIntolerance.code 
    - changed Indicator of Hypersensitivity or Intolerance to Substance value set binding strength from preferred to extensible [FHIR-44713](https://jira.hl7.org/browse/FHIR-44713) 
    - added Additional Binding, Adverse Reaction Substances and Negated Findings value set as candidate [FHIR-44713](https://jira.hl7.org/browse/FHIR-44713) 
- Made the following changes to AU Core Smoking Status: 
  - removed Must Support from Observation.encounter [FHIR-45222](https://jira.hl7.org/browse/FHIR-45222)
  - removed Must Support from Observation.performer [FHIR-45223](https://jira.hl7.org/browse/FHIR-45223)
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - replaced Observation.code patternCodeableConcept constraint of 266918002 |Tobacco smoking consumption| with 1747861000168109 |Smoking status| [FHIR-45124](https://jira.hl7.org/browse/FHIR-45124)
  - updated invariant au-core-obs-01 to change the length check from >= 10 to >= 8 to match required precision to the day [FHIR-46407](https://jira.hl7.org/browse/FHIR-46407)
- Removed Must Support from the following elements in AU Core Immunization:
  - Immunization.encounter [FHIR-45218](https://jira.hl7.org/browse/FHIR-45218)
  - Immunization.performer [FHIR-44653](https://jira.hl7.org/browse/FHIR-44653)
  - Immunization.performer.function [FHIR-44653](https://jira.hl7.org/browse/FHIR-44653)
  - Immunization.performer.actor [FHIR-44653](https://jira.hl7.org/browse/FHIR-44653)
- Made the following changes to AU Core Blood Pressure: 
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786)
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)
- Made the following changes to AU Core Body Height:
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786)
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - removed the required binding to Metric Body Length Units value set from Observation.value[x]:valueQuantity to allow the FHIR standard profile binding, and added the Metric Body Length Units value set as a candidate additional binding [FHIR-44787](https://jira.hl7.org/browse/FHIR-44787)
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)  
- Made the following changes to AU Core Body Temperature: 
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786) 
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - removed the required binding to Metric Body Temperature Units value set from Observation.value[x]:valueQuantity to allow the FHIR standard profile binding, and added the Metric Body Temperature Units value set as a candidate additional binding [FHIR-44787](https://jira.hl7.org/browse/FHIR-44787) 
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)
- Made the following changes to AU Core Body Weight: 
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786)
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120) 
  - removed the required binding to Metric Body Weight Units value set from Observation.value[x]:valueQuantity to allow the FHIR standard profile binding, and added the Metric Body Weight Units value set as a candidate additional binding [FHIR-44787](https://jira.hl7.org/browse/FHIR-44787) 
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)
- Made the following changes to AU Core Heart Rate: 
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786) 
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - added profile-specific implementation guidance on representing pulse rate observations [FHIR-44861](https://jira.hl7.org/browse/FHIR-44861) 
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)
- Made the following changes to AU Core Respiration Rate: 
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786)
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)
- Made the following changes to AU Core Waist Circumference: 
  - removed Must Support from Observation.encounter [FHIR-45134](https://jira.hl7.org/browse/FHIR-45134)
  - removed Must Support from Observation.performer [FHIR-44786](https://jira.hl7.org/browse/FHIR-44786)  
  - removed the fixed value constraint 'final' on Observation.status [FHIR-45120](https://jira.hl7.org/browse/FHIR-45120)
  - removed the required binding to Metric Body Length Units value set from Observation.valueQuantity.code to allow the FHIR standard profile binding, and added the Metric Body Length Units value set as a candidate additional binding [FHIR-44787](https://jira.hl7.org/browse/FHIR-44787)
  - removed invariant au-core-obs-01 (duplicates invariant vs-1) [FHIR-46486](https://jira.hl7.org/browse/FHIR-46486)
- Corrected the search parameter for gender identity to be `gender-identity` not `patient-gender-identity` [FHIR-45057](https://jira.hl7.org/browse/FHIR-45057).
- Clarified that multipleAnd requires comparator support for AU Core date search parameters. [FHIR46309](https://jira.hl7.org/browse/FHIR-46309)
- Changed the following Patient search parameters:
  - birthdate search parameter support for comparators gt, le, lt, ge to be SHOULD instead of SHALL and multipleAnd support introduced as SHOULD [FHIR-45410](https://jira.hl7.org/browse/FHIR-45410)
  - _id search parameter for AU Core Requester to be SHOULD instead of SHALL [FHIR-46390](https://jira.hl7.org/browse/FHIR-46390)
- Changed the following Organization search parameters:
  - address search parameter to be SHOULD instead of SHALL [FHIR-45133](https://jira.hl7.org/browse/FHIR-45133)
  - name search parameter to be SHOULD instead of SHALL [FHIR-45133](https://jira.hl7.org/browse/FHIR-45133)
- Made the following changes to AU Core Diagnostic Result Observation:
  - in Observation.performer replaced RelatedPerson with AU Base RelatedPerson [FHIR-45228](https://jira.hl7.org/browse/FHIR-45228)
  - removed the required binding to ObservationStatus Result Available value set from Observation.status [FHIR-45125](https://jira.hl7.org/browse/FHIR-45125)
  - updated invariant au-core-obs-01 to change the length check from >= 10 to >= 8 to match required precision to the day [FHIR-46407](https://jira.hl7.org/browse/FHIR-46407)
- Made the following changes to AU Core Pathology Result Observation:
  - in Observation.performer replaced RelatedPerson with AU Base RelatedPerson [FHIR-45228](https://jira.hl7.org/browse/FHIR-45228)
  - removed the required binding to ObservationStatus Result Available value set from Observation.status [FHIR-45125](https://jira.hl7.org/browse/FHIR-45125)
  - updated invariant au-core-obs-01 to change the length check from >= 10 to >= 8 to match required precision to the day [FHIR-46407](https://jira.hl7.org/browse/FHIR-46407)
- Made the following changes in AU Core Requester CapabilityStatement:
  - removed reference to Bulk Data Access implementation guide [FHIR-45113](https://jira.hl7.org/browse/FHIR-45113)
  - corrected the Observation combined search parameter 'patient+category+status' from SHALL to SHOULD [FHIR-45390](https://jira.hl7.org/browse/FHIR-45390)
  - corrected narrative of Location identifier parameter requester requirements on providing both the system and code values from SHOULD to MAY [FHIR-46209](https://jira.hl7.org/browse/FHIR-46209)
  - replaced security and authorization requirements with pointer to Security and Privacy page [FHIR-46067](https://jira.hl7.org/browse/FHIR-46067)
  - added missing entries for DocumentReference and RelatedPerson resources [FHIR-46546](https://jira.hl7.org/browse/FHIR-46546)
- Made the following changes in AU Core Responder CapabilityStatement:
  - removed reference to Bulk Data Access implementation guide [FHIR-45113](https://jira.hl7.org/browse/FHIR-45113)
  - corrected the Observation combined search parameter 'patient+category+status' from SHALL to SHOULD [FHIR-45390](https://jira.hl7.org/browse/FHIR-45390)
  - corrected MedicationRequest combined search parameter 'patient+intent+authoredon' from SHALL to SHOULD [FHIR-46167](https://jira.hl7.org/browse/FHIR-46167)
  - corrected narrative of Location identifier parameter requester requirements on providing both the system and code values from SHOULD to MAY [FHIR-46209](https://jira.hl7.org/browse/FHIR-46209)
  - replaced security and authorization requirements with pointer to Security and Privacy page [FHIR-46067](https://jira.hl7.org/browse/FHIR-46067)


---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/comparison.md

AU Core aligns to, and leverages, international standards and other national standards, in particular:
- [International Patient Access 1.0.0](https://hl7.org/fhir/uv/ipa/STU1/) 
- [International Patient Summary Implementation Guide 1.1.0](https://hl7.org/fhir/uv/ips/STU1.1/)
- [US Core Implementation Guide 7.0.0](https://hl7.org/fhir/us/core/STU7/)

Relationships between AU Core, AUCDI, and the above key implementation guides is described in [Relationship with other IGs](relationship.html). 

Corresponding profiles, conformance requirements, and capability statements included in the key FHIR implementation guides were reviewed and considered during AU Core's development to ensure alignment, and to facilitate adoption of, this standard.

The below comparison evaluates AU Core conformance requirements with the key implementation guides identifying where compliance with AU Core satisfies the expectations established by the referenced implementation guide. 

At this time only profile comparison is available. Future versions of AU Core will compare capability statements.

### Profile comparison
As part of profile comparison, the requirements, constraints, and standards specified in a particular FHIR profile are evaluated. These requirements can include mandatory elements, must support elements, cardinality constraints, data types, terminology bindings, usage rules, extensions, rules on missing or suppressed data. 

The table below provides a profile only comparison from AU Core to profiles in key implementation guides. Compliance in the reverse direction is not guaranteed, i.e. a resource that is compliant with an International Patient Access profile **MAY NOT** be compliant with AU Core.

**Legend:**

<img src="green_checkmark.svg.png" width="20"/> **Compliant**: An AU Core compliant resource meets all requirements of the compared profile.

<img src="orange_checkmark.svg.png" width="20"/> **Additional requirements**: An AU Core compliant resource is compatible, but additional changes may be needed to meet all requirements of the compared profile. Where additional requirements are identified, more information is provided in the sections below.

<img src="cross_red_circle.svg.png" width="20"/> **Incompatible**: An AU Core compliant resource is incompatible with the compared profile. A resource cannot be compliant to both. Where incompatible requirements are identified, more information is provided in the sections below.

<img src="minus_symbol.svg.png" width="20"/> **No equivalent profile**: No equivalent profile for comparison.

<table border="1" style="width: 100%; margin: auto; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="width: 25%; text-align: center; vertical-align: middle;">AU Core</th>
            <th style="width: 25%; text-align: center; vertical-align: middle;">International Patient Access 1.0.0</th>
            <th style="width: 25%; text-align: center; vertical-align: middle;">International Patient Summary 1.1.0</th>
            <th style="width: 25%; text-align: center; vertical-align: middle;">US Core 7.0.0</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-allergyintolerance.html">AU Core AllergyIntolerance</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-bloodpressure.html">AU Core Blood Pressure</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-bodyheight.html">AU Core Body Height</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-bodytemp.html">AU Core Body Temperature</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-bodyweight.html">AU Core Body Weight</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-diagnosticresult.html">AU Core Diagnostic Result Observation</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-encounter.html">AU Core Encounter</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="minus_symbol.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="minus_symbol.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-heartrate.html">AU Core Heart Rate</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-location.html">AU Core Location</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="minus_symbol.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="minus_symbol.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-medication.html">AU Core Medication</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-medicationrequest.html">AU Core MedicationRequest</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/><img src="cross_red_circle.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-organization.html">AU Core Organization</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="minus_symbol.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-practitioner.html">AU Core Practitioner</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-practitionerrole.html">AU Core PractitionerRole</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="minus_symbol.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-resprate.html">AU Core Respiration Rate</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-smokingstatus.html">AU Core Smoking Status</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
        <tr>
            <td style="width: 25%; text-align: left; vertical-align: middle;"><a href="StructureDefinition-au-core-waistcircum.html">AU Core Waist Circumference</a></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="green_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
            <td style="width: 25%; text-align: center; vertical-align: middle;"><img src="orange_checkmark.svg.png" width="20"/></td>
        </tr>
    </tbody>
</table>

#### International Patient Access
[International Patient Access 1.0.0](https://hl7.org/fhir/uv/ipa/STU1/) describes how an application acting on behalf of a patient can access patient information from a clinical records system using a FHIR-based API.

##### Incompatible requirements
The following IPA profile(s) contain incompatible requirements with the equivalent AU Core profile. Implementers are advised to note that substantial code changes may be required to support these profiles.

<table border="1" style="width: 100%; margin: auto; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="width: 25%;">AU Core</th>
            <th style="width: 25%;">International Patient Access 1.0.0</th>
            <th style="width: 25%;">Element</th>
            <th style="width: 25%;">Incompatible requirements</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-medicationrequest.html">AU Core MedicationRequest</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/uv/ipa/STU1/StructureDefinition-ipa-medicationrequest.html">IPA-MedicationRequest</a></td>
            <td style="width: 25%;">MedicationRequest.requester</td>
            <td style="width: 25%;">IPA prohibits reference to Organization and RelatedPerson resources.</td>
        </tr>
    </tbody>
</table>

##### Additional requirements
The following IPA profile(s) contain additional requirements. Implementers are advised to note that some code changes may be required to support these profiles.

<table border="1" style="width: 100%; margin: auto; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="width: 25%;">AU Core</th>
            <th style="width: 25%;">International Patient Access 1.0.0</th>
            <th style="width: 25%;">Element</th>
            <th style="width: 25%;">Incompatible requirements</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/uv/ipa/STU1/StructureDefinition-ipa-immunization.html">IPA-Immunization</a></td>
            <td style="width: 25%;">Immunization.statusReason</td>
            <td style="width: 25%;">Must Support element in IPA.</td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 25%;"><a href="StructureDefinition-au-core-medicationrequest.html">AU Core MedicationRequest</a></td>
            <td rowspan="2" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ipa/STU1/StructureDefinition-ipa-medicationrequest.html">IPA-MedicationRequest</a></td>
            <td style="width: 25%;">MedicationRequest.reported[x]</td>
            <td style="width: 25%;">Must Support element in IPA.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.text</td>
            <td style="width: 25%;">Must Support element in IPA.</td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 25%;"><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
            <td rowspan="3" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ipa/STU1/StructureDefinition-ipa-patient.html">IPA-Patient</a></td>
            <td style="width: 25%;">Patient.identifier.value</td>
            <td style="width: 25%;">Must Support element in IPA.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.active</td>
            <td style="width: 25%;">Must Support element in IPA.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.link</td>
            <td style="width: 25%;">Must Support element in IPA.</td>
        </tr>
    </tbody>
</table>

##### Missing Data
AU Core compliant resources are compliant with IPA requirements for Missing Data.

##### Suppressed Data
IPA does not include requirements for Suppressed Data.

##### Additional profiles
This version of AU Core has no equivalent profile for the following IPA profiles:
- IPA-DocumentReference
- IPA-MedicationStatement

#### International Patient Summary
[International Patient Summary Implementation Guide 1.1.0](https://hl7.org/fhir/uv/ips/STU1.1/) describes how to represent the International Patient Summary (IPS) using HL7 FHIR. An International Patient Summary  document is an electronic health record extract containing essential healthcare information about a subject of care.

##### Additional requirements
The following IPS profile(s) contain additional requirements. Implementers are advised to note that some code changes may be required to support these profiles.

<table border="1" style="width: 100%; margin: auto; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="width: 25%;">AU Core</th>
            <th style="width: 25%;">International Patient Summary 1.1.0</th>
            <th style="width: 25%;">Element</th>
            <th style="width: 25%;">Additional requirements</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2" style="width: 25%;"><a href="StructureDefinition-au-core-allergyintolerance.html">AU Core AllergyIntolerance</a></td>
            <td rowspan="2" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-AllergyIntolerance-uv-ips.html">Allergy Intolerance (IPS)</a></td>
            <td style="width: 25%;">AllergyIntolerance.patient.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">AllergyIntolerance.type</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 25%;"><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
            <td rowspan="2" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Condition-uv-ips.html">Condition (IPS)</a></td>
            <td style="width: 25%;">Condition.clinicalStatus</td>
            <td style="width: 25%;">IPS requires minimum of 1.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Condition.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 25%;"><a href="StructureDefinition-au-core-diagnosticresult.html">AU Core Diagnostic Result Observation</a></td>
            <td rowspan="2" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Observation-results-uv-ips.html">Observation Results (IPS)</a></td>
            <td style="width: 25%;">Observation.status</td>
            <td style="width: 25%;">IPS requires value 'final'.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Immunization-uv-ips.html">Immunization (IPS)</a></td>
            <td style="width: 25%;">Immunization.patient.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td rowspan="5" style="width: 25%;"><a href="StructureDefinition-au-core-medication.html">AU Core Medication</a></td>
            <td rowspan="5" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Medication-uv-ips.html">Medication (IPS)</a></td>
            <td style="width: 25%;">Medication.ingredient.strength</td>
            <td style="width: 25%;">IPS requires UCUM for coded quantity units.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Medication.form</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Medication.ingredient</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Medication.ingredient.item[x]</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Medication.ingredient.strength</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 25%;"><a href="StructureDefinition-au-core-medicationrequest.html">AU Core MedicationRequest</a></td>
            <td rowspan="3" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-MedicationRequest-uv-ips.html">Medication Request (IPS)</a></td>
            <td style="width: 25%;">MedicationRequest.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>   
            <td style="width: 25%;">MedicationRequest.dosageInstruction.text</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>   
            <td style="width: 25%;">MedicationRequest.dosageInstruction.timing</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td rowspan="8" style="width: 25%;"><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
            <td rowspan="4" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Observation-results-laboratory-uv-ips.html">Observation Results: laboratory (IPS)</a></td>
            <td style="width: 25%;">Observation.status</td>
            <td style="width: 25%;">IPS requires value 'final'.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.performer</td>
            <td style="width: 25%;">IPS requires minimum of 1.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.value</td>
            <td style="width: 25%;">IPS requires UCUM for coded quantity units.</td>
        </tr>
        <tr>
            <td rowspan="4" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Observation-results-pathology-uv-ips.html">Observation Results: pathology (IPS)</a></td>
            <td style="width: 25%;">Observation.status</td>
            <td style="width: 25%;">IPS requires value 'final'.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.performer</td>
            <td style="width: 25%;">IPS requires minimum of 1.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.value</td>
            <td style="width: 25%;">IPS requires UCUM for coded quantity units.</td>
        </tr>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/StructureDefinition-Patient-uv-ips.html">Patient (IPS)</a></td>
            <td style="width: 25%;">Patient.generalPractitioner</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 25%;"><a href="StructureDefinition-au-core-practitioner.html">AU Core Practitioner</a></td>
            <td rowspan="2" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Practitioner-uv-ips.html">Practitioner (IPS)</a></td>
            <td style="width: 25%;">Practitioner.telecom</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address</td>
            <td style="width: 25%;">Must Support element in IPS.</td>
        </tr>  
        <tr>
            <td rowspan="2" style="width: 25%;"><a href="StructureDefinition-au-core-procedure.html">AU Core Procedure</a></td>
            <td rowspan="2" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Procedure-uv-ips.html">Procedure (IPS)</a></td>
            <td style="width: 25%;">Procedure.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Procedure.performed[x]</td>
            <td style="width: 25%;">IPS requires minimum of 1.</td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 25%;"><a href="StructureDefinition-au-core-smokingstatus.html">AU Core Smoking Status</a></td>
            <td rowspan="3" style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Observation-tobaccouse-uv-ips.html">Observation - SH: tobacco use</a></td>
            <td style="width: 25%;">Observation.subject.reference</td>
            <td style="width: 25%;">IPS requires minimum of 1. Must Support element in IPS.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.code</td>
            <td style="width: 25%;">IPS requires LOINC code 72166-2.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.value[x]</td>
            <td style="width: 25%;">IPS requires value from <a href="https://hl7.org/fhir/uv/ips/STU1.1/ValueSet-current-smoking-status-uv-ips.html">Current Smoking Status - IPS</a>.</td>
        </tr>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-waistcircum.html">AU Core Waist Circumference</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/uv/ips/STU1.1/StructureDefinition-Observation-results-uv-ips.html">Observation Results (IPS)</a></td>
            <td style="width: 25%;">Observation.subject.reference</td>
            <td style="width: 25%;">Must Support element in IPS.</td>    
        </tr>
    </tbody>
</table>

##### Missing Data
AU Core compliant resources are compliant with IPS requirements for Missing Data.

##### Suppressed Data
IPS does not include requirements for Suppressed Data.

##### Additional profiles
This version of AU Core has no equivalent profile for the following IPS profiles:
- Bundle - IPS
- Composition (IPS)
- Device (IPS)
- Device - performer, observer
- Device Use Statement (IPS)
- DiagnosticReport (IPS)
- Imaging Study (IPS)
- Media observation (Results: laboratory, media)
- Medication Statement (IPS)
- Observation - Pregnancy: EDD
- Observation - Pregnancy: outcome
- Observation - Pregnancy: status
- Observation - SH: alcohol use
- Observation Results: radiology (IPS)
- Specimen (IPS)


#### US Core
[US Core Implementation Guide 7.0.0](https://hl7.org/fhir/us/core/STU7/) serves as the foundation for FHIR implementation guides in the US Realm. It establishes the minimum constraints on FHIR resources to define US Core Profiles, specifying the required elements, extensions, vocabularies, and value sets, as well as their usage. It also outlines the minimum FHIR RESTful interactions needed to access patient data for each US Core Profile.

##### Additional requirements
The following US Core profile(s) contain additional requirements. Implementers are advised to note that some code changes may be required to support these profiles.

<table border="1" style="width: 100%; margin: auto; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="width: 25%;">AU Core</th>
            <th style="width: 25%;">US Core 7.0.0</th>
            <th style="width: 25%;">Element</th>
            <th style="width: 25%;">Additional requirements</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="8" style="width: 25%;"><a href="StructureDefinition-au-core-condition.html">AU Core Condition</a></td>
            <td rowspan="5" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-condition-problems-health-concerns.html">US Core Condition Problems and Health Concerns Profile</a></td>
            <td style="width: 25%;">Condition.category</td>
            <td style="width: 25%;">US Core requires category of 'problem-list-item' or 'health-concern'.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Condition.meta</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Condition.meta.lastUpdated</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Condition.assertedDate</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Condition.recordedDate</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-condition-encounter-diagnosis.html">US Core Condition Encounter Diagnosis Profile</a></td>
            <td style="width: 25%;">Condition.assertedDate</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Condition.encounter</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
         <tr>
            <td style="width: 25%;">Condition.recordedDate</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 25%;"><a href="StructureDefinition-au-core-allergyintolerance.html">AU Core Diagnostic Result Observation</a></td>
            <td rowspan="3" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-clinical-result.html">US Core Observation Clinical Result Profile</a></td>
            <td style="width: 25%;">Observation.code</td>
            <td style="width: 25%;">US Core extensible binding to <a href="https://hl7.org/fhir/R4/valueset-observation-codes.html">LOINC Codes</a>.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.value[x]</td>
            <td style="width: 25%;">US Core requires UCUM for coded quantity units.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.encounter</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="9" style="width: 25%;"><a href="StructureDefinition-au-core-encounter.html">AU Core Encounter</a></td>
            <td rowspan="9" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-encounter.html">US Core Encounter Profile</a></td>
            <td style="width: 25%;">Encounter.type</td>
            <td style="width: 25%;">US Core requires minimum of 1. Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.meta</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.meta.lastUpdated</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.identifier</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.identifier.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.identifier.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.participant.period</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.hospitalization</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Encounter.hospitalization.dischargeDisposition</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="4" style="width: 25%;"><a href="StructureDefinition-au-core-immunization.html">AU Core Immunization</a></td>
            <td rowspan="4" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-immunization.html">US Core Immunization Profile</a></td>
            <td style="width: 25%;">Immunization.vaccineCode</td>
            <td style="width: 25%;">US Core extensible binding to <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.6/expansion">CVX Vaccines Administered Vaccine Set</a>.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Immunization.statusReason</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Immunization.encounter</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Immunization.location</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="8" style="width: 25%;"><a href="StructureDefinition-au-core-location.html">AU Core Location</a></td>
            <td rowspan="8" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-location.html">US Core Location Profile</a></td>
            <td style="width: 25%;">Location.name</td>
            <td style="width: 25%;">US Core requires minimum of 1.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.identifier</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.status</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.telecom</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.address.line</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.address.city</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.address.state</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Location.address.postalCode</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-medication.html">AU Core Medication</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medication.html">US Core Medication Profile</a></td>
            <td style="width: 25%;">Medication.code</td>
            <td style="width: 25%;">US Core extensible binding to <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion">Medication Clinical Drug</a>.</td>
        </tr>
        <tr>
            <td rowspan="10" style="width: 25%;"><a href="StructureDefinition-au-core-medicationrequest.html">AU Core MedicationRequest</a></td>
            <td rowspan="10" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-medicationrequest.html">US Core MedicationRequest Profile</a></td>
            <td style="width: 25%;">MedicationRequest.medicationCodeableConcept</td>
            <td style="width: 25%;">US Core extensible binding to <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion">Medication Clinical Drug</a>.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.category</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.reported[x]</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.text</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.timing</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.doseAndRate</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.doseAndRate.dose[x]</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.dispenseRequest</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.dispenseRequest.numberOfRepeatsAllowed</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">MedicationRequest.dosageInstruction.dispenseRequest.quantity</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="9" style="width: 25%;"><a href="StructureDefinition-au-core-organization.html">AU Core Organization</a></td>
            <td rowspan="9" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-organization.html">US Core Organization Profile</a></td>
            <td style="width: 25%;">Organization.active</td>
            <td style="width: 25%;">US Core requires minimum of 1. Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.telecom.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.telecom.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.telecom.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.address.line</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.address.city</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.address.state</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.address.postalCode</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Organization.address.country</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="5" style="width: 25%;"><a href="StructureDefinition-au-core-diagnosticresult-path.html">AU Core Pathology Result Observation</a></td>
            <td rowspan="5" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation Profile</a></td>
            <td style="width: 25%;">Observation.code</td>
            <td style="width: 25%;">US Core extensible binding to <a href="https://hl7.org/fhir/us/core/STU7/ValueSet-us-core-laboratory-test-codes.html">US Core Laboratory Test Codes</a>. </td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.referenceRange</td>
            <td style="width: 25%;">US Core requires UCUM for coded quantity units.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.meta</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.meta.lastUpdated</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.encounter</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="13" style="width: 25%;"><a href="StructureDefinition-au-core-patient.html">AU Core Patient</a></td>
            <td rowspan="13" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-patient.html">US Core Patient Profile</a></td>
            <td style="width: 25%;">Patient.identifier</td>
            <td style="width: 25%;">US Core requires all identifiers to have system and value.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.identifier.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.identifier.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.name</td>
            <td style="width: 25%;">US Core requires all name to have family or given or Data Absent Reason extension.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Gender identity</td>
            <td style="width: 25%;">US Core requires US Core Gender Identity extension.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom</td>
            <td style="width: 25%;">US Core requires all telecom to have system and value.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.use</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.line</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.city</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.state</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Patient.telecom.postalCode</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="12" style="width: 25%;"><a href="StructureDefinition-au-core-practitioner.html">AU Core Practitioner</a></td>
            <td rowspan="12" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-practitioner.html">US Core Practitioner Profile</a></td>
            <td style="width: 25%;">Practitioner.identifier</td>
             <td style="width: 25%;">US Core requires minimum of 1, and all identifiers to have system and value.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.identifier.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.identifier.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.telecom</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.telecom.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.telecom.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address.line</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address.city</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address.state</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address.postalCode</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Practitioner.address.country</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="6" style="width: 25%;"><a href="StructureDefinition-au-core-practitionerrole.html">AU Core PractitionerRole</a></td>
            <td rowspan="6" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-practitionerrole.html">US Core PractitionerRole Profile</a></td>
            <td style="width: 25%;">PractitionerRole.telecom, PractitionerRole.endpoint</td>
            <td style="width: 25%;">US Core requires telecom or endpoint to be present (pd-1).</td>
        </tr>
        <tr>
            <td style="width: 25%;">PractitionerRole.location</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">PractitionerRole.telecom</td>
            <td style="width: 25%;">US Core requires all telecom to have system and value.</td>
        </tr>
        <tr>
            <td style="width: 25%;">PractitionerRole.telecom.system</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">PractitionerRole.telecom.value</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;">PractitionerRole.endpoint</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td rowspan="4" style="width: 25%;"><a href="StructureDefinition-au-core-smokingstatus.html">AU Core Smoking Status</a></td>
            <td rowspan="4" style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-smokingstatus.html">US Core Smoking Status Observation Profile</a></td>
            <td style="width: 25%;">Observation.status</td>
            <td style="width: 25%;">US Core requires status of 'final' or 'entered-in-error'.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.code</td>
            <td style="width: 25%;">US Core extensible binding to <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.6/expansion">Smoking Status Type</a>.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.value[x]:valueCodeableConcept</td>
            <td style="width: 25%;">Must Support element in US Core. US Core extensible binding to <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.3/expansion">Smoking status comprehensive</a>.</td>
        </tr>
        <tr>
            <td style="width: 25%;">Observation.value[x]:valueQuantity</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr>
        <tr>
            <td style="width: 25%;"><a href="StructureDefinition-au-core-waistcircum.html">AU Core Waist Circumference</a></td>
            <td style="width: 25%;"><a href="https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-simple-observation.html">US Core Simple Observation Profile</a></td>
            <td style="width: 25%;">Observation.performer</td>
            <td style="width: 25%;">Must Support element in US Core.</td>
        </tr> 
    </tbody>
</table>

##### Missing Data
AU Core compliant resources are compliant with US Core requirements for Missing Data.

##### Suppressed Data
AU Core compliant resources are compliant with US Core requirements for Suppressed Data.

##### Additional profiles 
This version of AU Core has no equivalent profile for the following US Core profiles:
- US Core CarePlan Profile
- US Core CareTeam Profile
- US Core Coverage Profile
- US Core Implantable Device Profile
- US Core DiagnosticReport Profile for Laboratory Results Reporting Profile
- US Core DiagnosticReport Profile for Report and Note Exchange Profile
- US Core DocumentReference Profile
- US Core Goal Profile Profile
- US Core MedicationDispense Profile
- US Core Average Blood Pressure Profile
- US Core Care Experience Preference Profile
- US Core Observation Occupation Profile
- US Core Observation Pregnancy Intent Profile
- US Core Observation Pregnancy Status Profile
- US Core Observation Screening Assessment Profile
- US Core Observation Sexual Orientation Profile
- US Core Simple Observation Profile
- US Core Treatment Intervention Preference Profile
- US Core Provenance Profile
- US Core QuestionnaireResponse Profile  
- US Core ServiceRequest Profile 
- US Core Specimen Profile

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/conformance.md

- [General Requirements](general-requirements.html)
- [Declaring Conformance](declaring-conformance.html)










---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/declaring-conformance.md

### Declaring Conformance

Systems may declare conformance to AU Core as: 
- [Profile Only Support](general-requirements.html#profile-only-support) for a system declaring conformance to one or more AU Core profiles
- [Profile Support + Interaction Support](general-requirements.html#profile-support--interaction-support) for a system declaring conformance to one or both of the [AU Core Capability Statements](capability-statements.html)

FHIR Servers that implement AU Core declare conformance to one of these approaches as described in the relevant section below.

#### Profile Only Support

Servers that implement Profile Only Support to AU Core profiles declare conformance to each profile by hosting a [CapabilityStatement](http://hl7.org/fhir/capabilitystatement.html) resource at [server-base-url]/metadata that is available to both authenticated and unauthenticated clients. The capability statement declares Profile Only Support for a resource as either a base profile using [CapabilityStatement.rest.resource.profile](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.profile) or supported profile using [CapabilityStatement.rest.resource.supportedProfile](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.supportedProfile).

Example: CapabilityStatement resource for a server supporting the AU Core Patient profile as a system-wide profile that is applied across all instances of the Patient resource:

    ```
    {
      "resourceType": "CapabilityStatement",
      ...
      "rest": [
        {
          "mode": "server",
        ...
            "resource": [
              ...
              {
                "type": "Patient",
                "profile": [
                  "http://hl7.org/fhir/us/core/StructureDefinition/au-core-patient"
                ],
                ...
              }
            ]
        }
      ] 
    }
    ```

Example: CapabilityStatement resource for a server supporting the AU Core Waist Circumference profile as a profile for supported use cases provided by the server:

    ```
    {
      "resourceType": "CapabilityStatement",
      ...
      "rest": [
        {
          "mode": "server",
        ...
            "resource": [
              ...
              {
                "type": "Observation",
                "supportedProfile": [
                  "http://hl7.org.au/fhir/core/StructureDefinition/au-core-waistcircum"
                ],
                ...
              }
            ]
        }
      ] 
    }
    ```


#### Profile Support + Interaction Support

Servers that implement Profile Support + Interaction Support declare conformance by hosting a [CapabilityStatement](http://hl7.org/fhir/capabilitystatement.html) at [server-base-url]/metadata, available to both authenticated and unauthenticated clients. The server's [CapabilityStatement.instantiates](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.instantiates) element references the [AU Core Responder Capability Statement](CapabilityStatement-au-core-responder.html#resourcesSummary1), as shown in the following fragment:

    ```
    {
      "resourceType": "CapabilityStatement",
      ...
      "instantiates": [
        "http://hl7.org.au/fhir/core/CapabilityStatement/au-core-responder"
      ],
      ...  
      "rest": [
        {
          "mode": "server",
        ...
        }
      ] 
    }
    ```

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/downloads.md


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

- [XML](ImplementationGuide-hl7.fhir.au.core.xml) 
- [JSON](ImplementationGuide-hl7.fhir.au.core.json)
- [TTL](ImplementationGuide-hl7.fhir.au.core.ttl)

### OpenAPI (a.k.a., Swagger) Definition Files

 The following [OpenAPI](https://www.openapis.org/) files are generated from the AU Core CapabilityStatements:

- [AU Core Responder](au-core-responder.openapi.json)
- [AU Core Requester](au-core-requester.openapi.json)


---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/examples.md

The following examples are published with this guide and all are available as a downloadable as zip file [here](downloads.html#examples).

{% include nonnormative-example-boilerplate.md %}

In addition to the examples defined in this implementation, synthetic (realistic but not real) test data for developers and testers that conforms to HL7 Australia FHIR implementation guides is maintained in the [HL7 AU FHIR Test Data](https://github.com/hl7au/au-fhir-test-data) repository.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include example-list-generator.md %}
<!-- ================================================ -->

### Extensions
* Sex Assigned at Birth: [Patient - Mia Leanne Banks](Patient-banks-mia-leanne.html)
* Individual Pronouns: [Patient - Mia Leanne Banks](Patient-banks-mia-leanne.html)
* Individual Gender Identity: [Patient - Mia Leanne Banks](Patient-banks-mia-leanne.html)

### Missing Data
* [Patient - Mr. Ronny Irvine (missing data for birth date)](Patient-ronny-irvine.html)
* [MedicationRequest - prescription, paracetamol 500 mg + codeine phosphate hemihydrate 30 mg (missing data for status and requester)](MedicationRequest-paracetamol-codeine.html) 

### Suppressed Data
* [Condition - Data suppressed for category and code](Condition-condition-masked.html)
* [Observation - Data suppressed for category, code and effectiveDate](Observation-observation-masked.html)











---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/fhirartefacts.md

  - [Artefacts Summary](artifacts.html)
  - [Profiles and Extensions](profiles-and-extensions.html)
  - [Search Parameters](search-parameters.html)
  - [Terminology](terminology.html)
  - [Capability Statements](capability-statements.html)
  - [Actor Definitions](actors.html)

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/future.md

### AU Core Yearly Updates
AU Core will be published yearly. Yearly AU Core updates reflect changes to:
 - Australian Core Data for Interoperability (AUCDI)
 - requests from the AU FHIR community. 
 
 The approach is outlined in the figure below:

 <div> 
    <img src="yearlyupdate.png" alt="Yearly update of AU Core" style="width:90%"/>
  </div>
*Figure 1: Yearly update of AU Core*
<br/>


### AU Core R1 Development process
The first release of AU Core is an 18 month process from HL7 AU proposal to publication of the first release, outlined in the figure below:


 <div> 
    <img src="R1Process.png" alt="AU Core R1 Development process" style="width:100%"/>
  </div>
*Figure 2: AU Core R1 Development process*
<br/>

#### Maturing the Baseline
The approach to develop and mature AU Core is outlined below making reference to the [FHIR Maturity Level (FMM) levels](https://build.fhir.org/ig/hl7au/au-fhir-base/guidance.html#maturity-levels) is shown in the figure below.

 <div> 
    <img src="maturing.png" alt="Maturing the AU Core baseline" style="width:80%"/>
  </div>
*Figure 3: Maturing the AU Core baseline*
<br/>

### Future Candidate Requirements Under Consideration
The following items are under consideration to add to AU Core.

* **Last Updated**: AUCDI element Last Updated is intended to reflect when a data group was last updated, capturing clinical relevance and currency. A known and implemented solution in other jurisdictions for similar requirements is the use of the Provenance resource. An alternative to the use of Provenance may be the definition of custom extensions. Future versions of AU Core will develop and test approaches to addressing Last Updated.
* **AU Core MedicationStatement**: Development and testing of AU Core MedicationStatement profile to support AUCDI Medication Use Statement is planned for the AU Core R2 scope.
* **Dosage**: The Dosage data type is complex, and the requirements in AU Base Dosage are not sufficient to provide clarity on the minimum requirements for supporting dosage and timing in Australia. Future versions of AU Core will develop and test an AU Core Dosage profile to support common implementation of medicine information. 
* **Composition**: Future versions of AU Core will develop and test AU Core Composition profile to support approaches to sharing clinical documents across multiple use cases.
* **DocumentReference**: Future versions of AU Core will develop and test an AU Core DocumentReference profile to support sharing of clinical notes across multiple use cases to support common implementation.
* **RelatedPerson**: Development and testing of AU Core RelatedPerson profile to support the exchange of core digital health and administrative information that involves persons with a personal relationship or non-healthcare-specific professional relationship to the patient is planned for the AU Core R2 scope.
* **HealthcareService**: Development and testing of AU Core HealthcareService profile to define minimum requirements for healthcare service information across multiple use cases to support common implementation. Work will also be undertaken to consider guidance on resource selection across HealthcareService, PractitionerRole, Organization, and Location.
* **Device**: Use of the Device resource for medical devices, and devices that perform, observe, or author clinical data, are required to support multiple downstream use cases including eRequesting and patient summary. Future versions of AU Core will develop and test profiles to support common implementation of Device information.
* **Coverage**: Use of the Coverage resource is required to support multiple downstream use cases including eRequesting. Future versions of AU Core will develop and test minimum requirements for coverage across multiple use cases to support common implementation.
* **ServiceRequest**: Use of the ServiceRequest resource is required to support multiple downstream use cases including eRequesting. Future versions of AU Core will develop and test minimum requirements for requests across multiple use cases to support common implementation.
* **Diagnostic Results**: Additional AU Core profiles to support common implementation of additional aspects of diagnostic results including imaging, specimen, and reports will be developed and tested in future versions of AU Core.
* **Key clinical elements and Missing Data requirements**: It is not clear at this point whether there is a case for prohibiting 'missing data' on resource.code e.g. AllergyInterolance.code, Condition.code, or Medication.code. At this time it is not clear how prohibition could be structured in AU Core noting there is no equivalent obligation code for 'don't allow missing data' and as the data type for these elements is CodeableConcept, preadoption of R5 mustHaveValue is not applicable (only for primitive types). 
* **Record or Update Data**: Systems may use operations that create and update resources for any of the profiles in this IG. However, more guidance and minimum requirements need to be developed and tested on writing and updating data in the context of AU Core implementations.
* **Profile Only implementation clarity**: Additional clarification on how to implement AU Core as Profile Only may be useful as a Profile Only Server CapabilityStatement.
* **Guidance on downstream implementation of AU Core**: Future versions of AU Core will provide further detail on how to address implementation of AU Core through adoption of AU Core in other FHIR Specifications.
* **Search Parameter Definitions**: AU Core SearchParameters currently defined in AU Core include search parameters with support for chained search. Future versions of AU Core will include the complete list of search parameters supported by AU Core and the rules for use as a set of FHIR SearchParameters as specified in AU Core CapabilityStatements.


---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/general-guidance.md

### Contained Resources
In some circumstances, the content referred to in the resource reference does not have an independent existence apart from the resource that contains it - it cannot be identified independently, and nor can it have its own independent transaction scope. For example, use of a Medication resource to represent medicinal product identification within the context of a MedicationRequest. In these circumstances the resource can be [contained](http://hl7.org/fhir/R4/references.html#contained). 

In AU Core profiles:
- Systems constructing a resource that represent medication information are encouraged to make use of contained resources within the context of a FHIR transaction. Operations on Medication resources are expected to be within the context of a referencing resource query such as an MedicationAdministration, MedicationDispense, MedicationRequest or MedicationStatement.
- If referencing a contained resource, both the contained resource and the referencing resource **SHALL** conform to the applicable AU Core profile.
- Otherwise, it is recommended that an AU Core Responder avoids the use of contained resources unless the referenced resource does not have an independent existence apart from the resource that contains it and cannot be identified independently.

Further guidance about the general use case for [contained resources](http://hl7.org/fhir/R4/references.html#contained) can be found in the base FHIR specification.

### Extensibility – “additional” elements
A server may send "additional" elements beyond those flagged with *Must Support* in an AU Core profile. Additional elements are often required by other profiles the system may conform to, allowing local requirements, including technical and workflow context for the resource, to be reflected and extending the health information supported in exchanges. For this reason, extensibility is generally encouraged and expected in AU Core profiles. Only in some exceptionally rare use case profiles are rules tightened to limit the nature of additional information that can be sent. Specification authors should strive to enable greater interoperability and software re-use by not reducing an element's cardinality.

Depending on local requirements, a client application may ignore these "additional" elements, may treat the data as for rendering only, or be capable of recognising and using the element. 

### Representing communication preferences

**Patient**

The table below provides guidance on representing communication preferences for a patient. Blank cells in the table indicate that the given element is absent from the resource.

<table class="list" style="width:100%">
    <colgroup>
       <col span="1" style="width: 20%;"/>
       <col span="1" style="width: 18%;"/>
       <col span="1" style="width: 18%;"/>
       <col span="1" style="width: 20%;"/>
       <col span="1" style="width: 24%;"/>
    </colgroup>
	<tbody>
      <tr>
        <th>Scenario</th>
        <th>communication.language</th>
        <th>communication.preferred</th>
        <th>extension:interpreterRequired</th>
		<th>Notes</th>
      </tr>
      <tr>
        <td>Preferred language is English</td>
        <td></td>
        <td></td>
        <td></td>
        <td>No element sent, as per the guidance in the <a href="http://hl7.org/fhir/patient-definitions.html#Patient.communication">Comments</a> of Patient.communication</td>
      </tr>
      <tr>
        <td>Preferred language is other than English</td>
        <td>language.coding</td>
        <td>'true'</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Interpreter required, language is known</td>
        <td>language.coding</td>
        <td>'true'</td>
        <td>'true'</td>
        <td></td>
      </tr>
      <tr>
        <td>Interpreter required, language is not known</td>
        <td></td>
        <td></td>
        <td>'true'</td>
        <td></td>
      </tr>
      <tr>
        <td>Interpreter is not required</td>
        <td></td>
        <td></td>
        <td>'false'</td>
        <td></td>
      </tr>
      <tr>
        <td>Communicates with multiple languages</td>
        <td>language.coding</td>
        <td></td>
        <td></td>
        <td>Each language instantiated in separate communication nodes; communication.preferred and extension:interpreterRequired may be sent as needed.</td>
      </tr>
    </tbody>
</table>

Example: Patient resource with interpreter required and language is known
~~~
{
  "resourceType" : "Patient",
    ...
      "extension" : [
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired",
          "valueBoolean" : true
        }          
       ]
    },
    ...
    "communication" : [
    {
      "language" : {
        "coding" : [
          {
            "system" : "urn:ietf:bcp:47",
            "code" : "yue"
          }
        ],
        "text" : "Cantonese"
      },
      "preferred" : true
    }
  ]
}
~~~

### Representing body site, which may include laterality
When exchanging `Procedure` and `Condition` resources using AU Core profiles there may be a need to represent a relevant body site and associated laterality using `CodeableConcept` elements. In FHIR, body site and associated laterality can be recorded in various ways and implementers are encourage to consider the following points when implementing:

* The `bodySite` element is not *Must Support* in AU Core profiles, there is no expectation to fill or meaningfully consume this element.
* The `CodeableConcept.text` element is system populated and may reflect more specific detail than the `CodeableConcept.coding` concepts provided.

AU Core provides the following guidance for what to do in each of the following scenarios:

1. Primary finding/procedure code with body site and laterality as a pre-coordinated code.
1. Primary finding/procedure code with body site (without laterality) as a pre-coordinated code, and a separate laterality coded qualifier.
1. Coded body site with laterality and separate primary finding/procedure code.
1. Coded body site without laterality and separate coded laterality qualifier and a primary finding/procedure code.


To support consistent representation the following is recommended for each of these cases, this approach can be applied to either Condition or Procedure profiles:

1\. Primary finding/procedure `code` only (pre-coordinated code including body site and laterality)
* For systems that have pre-coordinated coding describing a concept fully:
  * use only the `code` element to contain information on body site with laterality.

Example: Condition resource cellulitis of right knee
~~~
{
  "resourceType" : "Condition",
  "id" : "cellulitis",
  ...
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "10633311000119108",
        "display" : "Cellulitis of right knee"
      },
      "text" : "Cellulitis of right knee"
    ]
  }
  ...
}
~~~

2\. Primary finding/procedure `code` only (pre-coordinated code including body site without laterality and separate laterality qualifier)
* For systems that have pre-coordinated coding describing a concept including body site without laterality, and have a laterality qualifier recorded separately e.g. left, right:
  * use the `code` element:
    * `code.coding` contains the primary concept including body site (without laterality).
    * `code.text` is used to describe concept fully, this can include information on recorded laterality e.g. ', Right'.
  * in this case laterality is not expressed in coded form.


Example: Condition resource showing coded condition that includes body site, laterality as text only
~~~
{
  "resourceType" : "Condition",
  "id" : "cellulitis",
  ...
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "13301002",
        "display" : "Cellulitis of knee"
      },
      "text" : "Cellulitis of knee, Right"
    ]
  }
  ...
}
~~~

3\. Coded `body site` with laterality and separate primary finding/procedure `code`.
* For systems that have pre-coordinated coding describing primary concept without body site and separate body site with laterality recorded as coded value:
  * use the code element:
    * `code.coding` contains the primary concept alone (no body site or laterality).
    * `code.text` describes the concept fully, this can include information on recorded body site and laterality as text.
  * optionally, coded element `bodySite` may be supplied containing the coded body site with laterality.


Example: Condition resource showing coded condition, coded body site that includes laterality
~~~
{
  "resourceType" : "Condition",
  "id" : "cellulitis",
  ...
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "128045006",
        "display" : "Cellulitis"
      },
      "text" : "Cellulitis, Right Knee"
    ]
  },
  "bodySite" : [
    {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "6757004",
        "display" : "Structure of right knee region"
      }],
      "text" : "Right Knee"
    }
  ]
  ...
}
~~~


4\. Coded `body site` without laterality and separate coded laterality qualifier and a primary finding/procedure `code`.
* For systems that have pre-coordinated coding describing primary concept without body site and a body site without laterality is as separate coded value, and laterality qualifier recorded separately e.g. left, right:
  * use the `code` element:
    * `code.coding` contains the primary concept alone (no body site or laterality).
    * `code.text` describes the concept fully, this can include information on recorded body site and laterality as text.
  * optionally, coded element bodySite may be supplied containing:
    * `bodySite.coding` contains the coded body site without laterality.
    * `bodySite.text` describes the body site concept fully, this can include information on recorded laterality as text e.g. ', Right'.


Example: Condition resource with coded condition, coded body site, laterality as text only
~~~
{
  "resourceType" : "Condition",
  "id" : "cellulitis",
  ...
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "128045006",
        "display" : "Cellulitis"
      },
      "text" : "Cellulitis, Knee, Right"
    ]
  },
  "bodySite" : [
    {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "72696002",
        "display" : "Knee region structure"
      }],
      "text" : "Knee, Right"
    }
  ]
  ...
}
~~~

### Read/Search Syntax

Searching resources is defined by the [FHIR RESTful API](https://hl7.org/fhir/R4/http.html) and included here for informative purposes. The [AU Core CapabilityStatements](capability-statements.html) document the server and client rules for the RESTful interactions described in this guide.

All the search interaction examples in this guide use the HTTP GET method with the following syntax:

 **`GET [base]/[Resource-type]?[parameter1]{:m1|m2|...}={c1|c2|...}[value1{,value2,...}]{&[parameter2]{:m1|m2|...}={c1|c2|...}[value1{,value2,...}]&...}`**

-   GET is the HTTP verb used for fetching a resource
-   Variables surrounded by "\[\]" are mandatory *for the client* to supply and will be replaced by the string literal identified.
-   Variables surrounded by "\{\}" are optional *for the client* to supply and will be replaced by the string literal identified.
-   Variables:
    -   base: The Service Root URL (e.g., "<https://fhir-open-api-dstu2.smarthealthit.org>”)
    -  Resource-type: The name of a resource type (e.g., "Patient")
    -  parameter: the search parameters as defined for the particular interaction (e.g.,"?patient=Patient/123")
    -  value: the search parameter value for a particular search
       - When searching using the `token` type SearchParameter [(how to search by token)](https://hl7.org/fhir/R4/search.html#token), the syntax `{system|}[code]` means that the system value is optional *for the client* to supply.:
       - When searching using the `reference` type SearchParameter [(how to search by reference)](https://hl7.org/fhir/R4/search.html#reference), the syntax `{Type/}[id]` means that the Type value is optional *for the client* to supply:
       - When searching using the `date` type SearchParameter [(how to search by date)](https://hl7.org/fhir/R4/search.html#date), the syntax `{gt|lt|ge|le}[date]` means the date comparators "gt", "lt", "ge", and "le" are optional.   Date type searches without a comparator prefix are equivalent to searches with the "eq" comparator *even if* a server does not support the comparator.
    - \{:m1&#124;m2&#124;...}: The list of supported search parameter modifiers
    - {c1&#124;c2&#124;...}: The list of supported search parameter comparators
    - {,value2,...}: Optional multiple 'OR' Values
    - {&parameter2={:m1&#124;m2&#124;...}={c1&#124;c2&#124;...}[value1{,value2,...}&...}: Optional multiple 'AND' search parameters


In the simplest case, a search is executed by performing a GET operation in the RESTful framework:

`GET [base]/[Resource-type]?name=value&...`

For this RESTful search, the parameters are a series of name=\[value\] pairs encoded in the URL. The search parameter names are defined for each resource. For example, the Observation resource has the name "code" for searching on the LOINC or SNOMED CT-AU code.  For more information, see the [FHIR RESTful Search API](https://hl7.org/fhir/R4/http.html#search).

Examples in AU Core do not demonstrate the url encoding [rules for special characters](https://hl7.org/fhir/R4/search.html#escaping) e.g. "\|".

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/general-requirements.md

### Conforming to AU Core

There are two different ways to implement AU Core:
1. [Profile Only Support](#profile-only-support): system that represents digital health information using AU Core profiles without the expectation to implement any FHIR specified interactions.
1. [Profile Support + Interaction Support](#profile-support--interaction-support): system that represents digital health information using AU Core profiles (Profile Support) AND implements the [FHIR REST API](http://hl7.org/fhir/R4/http.html) interactions defined by an [AU Core Capability Statement](capability-statements.html) (Interaction Support).

The requirements of the FHIR standard and [FHIR Conformance Rules](http://hl7.org/fhir/conformance-rules.html) apply, and define the use of terms in this guide including the conformance verbs - **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **MAY**.

Implementers are advised to be familiar with the requirements of the FHIR standard when implementing AU Core, in particular:
- [FHIR Terminology requirements](http://hl7.org/fhir/R4/terminologies.html)
- [FHIR RESTful API](http://hl7.org/fhir/R4/http.html) 
- [FHIR Search](http://hl7.org/fhir/R4/search.html)
- [FHIR Resource formats](http://hl7.org/fhir/R4/resource.html)
- [FHIR Data Types](http://hl7.org/fhir/R4/datatypes.html)

### Conformance Artifacts

#### AU Core Profiles and Extensions
The [Profiles and Extensions](profiles-and-extensions.html) page lists the AU Core profiles and AU Core extensions defined for this implementation guide. An AU Core profile [StructureDefinition](http://hl7.org/fhir/R4/structuredefinition.html) defines the minimum elements, extensions, vocabularies and value sets that **SHALL** be present and constrains the way elements are used when conforming to the profile.

AU Core profile elements include mandatory and *Must Support* requirements. [Mandatory elements](#mandatory-elements) are required and have a minimum cardinality of 1 (min=1). [Must Support](#must-support-and-obligation) elements have defined conformance obligations in AU Core based on actor roles.

Systems may implement AU Core as: 
- [Profile Only Support](#profile-only-support) for a system declaring conformance to one or more AU Core profiles
- [Profile Support + Interaction Support](#profile-support--interaction-support) for a system declaring conformance to one or both of the [AU Core Capability Statements](capability-statements.html)

#### AU Core Capability Statements
The [AU Core Requester CapabilityStatement](CapabilityStatement-au-core-requester.html) defines the conformance requirements and expectations of an [AU Core Requester](ActorDefinition-au-core-actor-requester.html) actor responsible for initiating queries for information from an [AU Core Responder](ActorDefinition-au-core-actor-responder.html). The complete list of FHIR profiles, REST API interactions, and search parameters that can be implemented by an AU Core Requester are defined in this capability statement. 

The [AU Core Responder CapabilityStatement](CapabilityStatement-au-core-responder.html) defines the conformance requirements and expectations of an [AU Core Responder](ActorDefinition-au-core-actor-responder.html) actor responsible for providing responses to queries submitted by an [AU Core Requester](ActorDefinition-au-core-actor-requester.html). The complete list of FHIR profiles, REST API interactions, and search parameters that can be implemented by an AU Core Responder are defined in this capability statement. An AU Core Responder declares conformance to this list of capabilities based on the resource types and interactions it implements.

#### Profile Only Support
A system that represents digital health information using the content models of AU Core profiles without the expectation to implement any AU Core interactions can declare Profile Only Support to one or more AU Core profiles. 

A system that [declares conformance](declaring-conformance.html#profile-only-support) as Profile Only Support to an AU Core profile:
- **SHALL** correctly populate a resource with all mandatory elements specified in the profile’s definition.
- **SHALL** correctly populate a resource with all *Must Support* elements for which a value is known. 
- **SHALL** implement the requirements on [Missing Data](general-requirements.html#missing-data) when an element value is not known.

A system is not required to declare Profile Only Support to all AU Core profiles. For example, a pathology laboratory system that implements the [AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html) profile, is not required to produce a MedicationRequest resource. 

#### Profile Support + Interaction Support

Profile Support + Interaction Support refers to a system that represents digital health information using the content models of AU Core profiles AND implement the REST API interactions defined by the applicable AU Core capability statement.

An [AU Core Responder](ActorDefinition-au-core-actor-responder.html) that declares Profile Support + Interaction Support conformance:
- **SHALL** [declare conformance](declaring-conformance.html#profile-support--interaction-support) to the [AU Core Responder Capability Statement](CapabilityStatement-au-core-responder.html) in the server's CapabilityStatement.
- **SHALL** specify the implemented resource types, associated AU Core profiles, REST API interactions and search parameters in the server's CapabilityStatement.
- **SHALL** implement the [mandatory](#mandatory-elements) and/or [Must Support](#must-support-and-obligation) requirements for the elements defined as such in the implemented AU Core profiles.
- **SHALL** implement the required REST API interactions and search parameters as defined in the [AU Core Responder Capability Statement](CapabilityStatement-au-core-responder.html#resourcesSummary1).

An [AU Core Requester](ActorDefinition-au-core-actor-requester.html) that declares Profile Support + Interaction Support conformance:
- **SHALL** implement the [mandatory](#mandatory-elements) and/or [Must Support](#must-support-and-obligation) requirements for the elements defined as such in the implemented AU Core profiles.
- **SHALL** implement the required REST API interactions and search parameters as defined in the [AU Core Requester Capability Statement](CapabilityStatement-au-core-requester.html#resourcesSummary1).

### Mandatory Elements
Mandatory elements are elements with minimum cardinality > 0. When an element is mandatory, the data is expected to always be present. Very rarely, it may not be, and in this circumstance the requirements in [Missing Data](#missing-data) **SHALL** be applied. An element can be both *Must Support* and mandatory, in which case the requirements for mandatory's Missing Data requirements apply as described in [Missing Must Support and Mandatory Data](general-requirements.html#missing-must-support-and-mandatory-data).

The convention in this guide is to mark all mandatory elements as *Must Support* unless they are nested under an optional element.

### Must Support and Obligation
Labelling an element *[Must Support](https://www.hl7.org/fhir/conformance-rules.html#mustSupport)* means that systems that produce or consume resources **SHALL** provide support for the element in some meaningful way. The FHIR standard does not define exactly what 'meaningful' support for an element means, but indicates that a profile **SHALL** make clear exactly what kind of support is required when an element is labelled as *Must Support*.

Because AU Core is a foundational standard, *Must Support* needs to be defined in a way that does not impede or prescribe what a system does with the data, so as not to impede each implementation’s ability to tighten and define expectations for use under their own business rules, regulations, policies, etc. There is also a challenge that comes from inheritance of *Must Support* flags into implementation guides that have strict definitions for *Must Support* (e.g., must be able to display this value to an end user). AU Core will only apply the *Must Support* flag on the elements that are necessary to support _minimum_ requirements and are expected to be flagged as *Must Support* across the majority of Australian FHIR implementation guides.

In AU Core, the meaning of *Must Support* is specified in terms of [Obligation Codes](https://hl7.org/fhir/extensions/CodeSystem-obligation.html) in [obligation extensions](https://hl7.org/fhir/extensions/StructureDefinition-obligation.html) on the element definition. The obligation codes used to define the minimum obligations of *Must Support* elements in this implementation guide are reiterated below.

Actor | Code | Display | Definition | Notes
--- | --- | --- | --- | ---
[AU Core Responder](ActorDefinition-au-core-actor-responder.html) | [SHALL:populate-if-known](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-SHALL.58populate-if-known) | SHALL populate if known | Conformant applications producing resources SHALL correctly populate this element if they know a value for the element, but it is acceptable if the system is unable to ever know a value for the element. | This obligation does not impose a requirement to be able to know a value, unlike populate and able-to-populate which do. 'Knowing' an element means that a value for the element is available in memory, persistent store, or is otherwise available within the system claiming conformance.
[AU Core Requester](ActorDefinition-au-core-actor-requester.html) | [SHALL:no-error](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-SHALL.58no-error) | SHALL not error if present | Conformant applications SHALL accept resources containing any valid value for the element without error. | Applications are still able to inform the user that a value cannot be processed correctly and may ignore the data, but applications aren't able to reject an instance merely because the element is present (which would be allowed for elements that do not have this obligation). A system MAY raise an error if the value provided is not valid or violates specific business rules. This obligation also applies to elements that only contain an extension in place of a value where (or equivalent), should either of these be allowed on the consumer obligations

*Must Support* elements are treated differently between [AU Core Responder](ActorDefinition-au-core-actor-responder.html) and [AU Core Requester](ActorDefinition-au-core-actor-requester.html) actors. *Must Support* on a profile element **SHALL** be interpreted as follows.

#### AU Core Responder
An AU Core Responder:
- **SHALL** correctly populate all *Must Support* elements for which a value is known.
- **SHALL** implement the requirements on [Suppressed Data](general-requirements.html#suppressed-data) when an element is NOT allowed to be shared.
- **SHALL** implement the requirements on [Missing Data](general-requirements.html#missing-data) when an element value is not known.

When a *Must Support* element requires a more tightly stated obligation, this obligation is specified in the AU Core Responder [obligation extension](https://hl7.org/fhir/extensions/StructureDefinition-obligation.html) on the element definition.

#### AU Core Requester
An AU Core Requester:
- **SHALL** accept resources containing any valid value for *Must Support* elements without error.
- **SHALL** accept resources containing *Must Support* elements with [Missing Data](#missing-data) or [Suppressed data](#suppressed-data) without error.

How the system processes the resource depends on local requirements that could align with obligation terms such as [reject invalid](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-reject-invalid), [correctly handle](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-handle), [persist](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-persist), [display](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-display), or [ignore](https://hl7.org/fhir/extensions/CodeSystem-obligation.html#obligation-ignore).

When a *Must Support* element requires a more tightly stated obligation, this obligation is specified in the AU Core Requester [obligation extension](https://hl7.org/fhir/extensions/StructureDefinition-obligation.html) on the element definition.

#### Presentation of elements labelled Must Support in profiles

##### Presentation of elements labelled Must Support in table views

When rendered in an implementation guide each profile is presented in different formal views under tabs labelled "Differential Table", "Key Elements Table", and "Snapshot Table".

The elements labelled *Must Support* in these views are flagged with an <span style="padding-left: 3px; padding-right: 3px; color: white; background-color: red" title="This element must be supported">S</span>. Implementers should refer to the "Key Elements Table" to see the full set of elements that are mandatory or *Must Support*, and the full set of terminology requirements.

Implementers should take note that the full set of constraints (i.e. invariants) are only presented in the "Detailed Descriptions" tab or the raw representation (e.g. XML or JSON) of the profile. 

##### Presentation of elements labelled Must Support in raw representations

When viewing the raw representation (e.g. XML or JSON) of a profile, elements labelled *Must Support* are flagged as `mustSupport` set to "true". 

Example: AU Core AllergyIntolerance profile showing clinicalStatus and verificationStatus labelled *Must Support*
~~~
{
    "resourceType" : "StructureDefinition",
    ...
    "url" : "http://hl7.org.au/fhir/core/StructureDefinition/au-core-allergyintolerance",
    ...
    "type" : "AllergyIntolerance",
    "baseDefinition" : "http://hl7.org.au/fhir/StructureDefinition/au-allergyintolerance",     
    ...
           {
              "id" : "AllergyIntolerance.clinicalStatus",
              "path" : "AllergyIntolerance.clinicalStatus",
              "mustSupport" : true
           },
           {
              "id" : "AllergyIntolerance.verificationStatus",
              "path" : "AllergyIntolerance.verificationStatus",
              "mustSupport" : true
           },
    ...
}
~~~


#### Interpreting profile elements labelled Must Support

Profiles defined in this implementation publication flag *Must Support* on elements (e.g. `Patient.name`) and sub-elements of a data type (e.g. `Patient.name.use`). 
The explanation on how to interpret *Must Support* for an element does not address rules defined in each profile - which may limit or extend what is allowed for each element.

The sub-elements for each supported element in a profile are defined by a combination of the data type from the core specification and any additional rules included in the profile. A profile may include rules that:
- limit what is considered 'valid'
- extend the potential sub-elements by including an extension

For example, the profile [AU Core Patient](StructureDefinition-au-core-patient.html) limits what is considered valid for the element `Patient.name` with the invariant "**au-core-pat-02:** At least one patient name shall have a family name".

Typically AU Core profiles will inherit extended sub-elements from a HL7 AU Base profile, e.g. the element `Medication.code` in profile [AU Core Medication](StructureDefinition-au-core-medication.html) is of type CodeableConcept and is extended by inheriting a medicine specific sub-element `Medication.code.coding.extension` [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) from [AU Base Medication](https://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-medication.html). 

The full set of sub-elements is visible in the "Key Elements Table" or "Snapshot Table" which shows the sub-elements defined in this profile (shown in the "Differential Table") and the sub-elements inherited from a base profile.


##### Must Support - Primitive Elements
Primitive elements are single elements with a primitive value. If a primitive element is labelled as *Must Support*: 
- AU Core Responders **SHALL** correctly populate the element if a value is known. 
- AU Core Requesters **SHALL** accept resources without error if the element is present and containing any valid value.

For example, the AU Core Organization Profile `name` element is a primitive string datatype. Therefore, when claiming conformance to this profile:
- AU Core Responders **SHALL** correctly populate a value in `Organization.name` if a value is known.
- AU Core Requesters **SHALL** accept the Organization resource without error if `Organization.name` is present and containing any valid value.

##### Must Support - Complex Elements
Complex elements are composed of primitive and/or other complex elements. Elements may have additional rules defined in the profile that also apply, e.g. terminology binding, or invariants. 

If a complex element is labelled as *Must Support*:
- AU Core Responders **SHALL** correctly populate the element with at least one of the sub-element values if the value is known.
- AU Core Requesters **SHALL** accept resources without error if the element is present and containing any valid sub-element.

For example, the AU Core MedicationRequest Profile `note` element is labelled *Must Support* and has no *Must Support* sub-elements. When claiming conformance to this profile:
- AU Core Responders **SHALL** correctly populate a value in any valid `MedicationRequest.note` sub-element if a value is known e.g. `MedicationRequest.note.text`.
- AU Core Requesters **SHALL** accept the MedicationRequest resource without error if `MedicationRequest.note` is present and containing any valid sub-elements.

If a sub-element is labelled as *Must Support*: 
- AU Core Responders **SHALL** correctly populate the element with all *Must Support* sub-elements for which a value is known. 
- AU Core Requesters **SHALL** accept resource without error if *Must Support* sub-elements are present and containing any valid value.

For example, in the AU Core Practitioner Profile, the `name` element is labelled *Must Support* and has *Must Support* sub-elements `family` and `given`. When claiming conformance to this profile:
- AU Core Responders **SHALL** correctly populate a value in `Practitioner.name.family` and `Practitioner.name.given` if the value for those sub-elements is known.
- AU Core Requesters **SHALL** accept a Patient resource without error if `Practitioner.name` is present and contains valid values in `Practitioner.name.family` and `Practitioner.name.given` sub-elements.

##### Must Support - Resource References
Some elements labelled as *Must Support* reference multiple resource types or profiles such as `Observation.performer`. In such cases: 
- AU Core Responders **SHALL** correctly populate the element with at least one referenced resource or allowed profile if the value is known. 
- AU Core Requesters **SHALL** accept resources without error if the element is present and containing any valid referenced resource or profiles.

The table below provides a list of AU Core profile elements that allow multiple referenced resource types or profiles.

AU Core Profile |Must Support Element|Reference
---|---|---
AU Core Diagnostic Result Observation|Observation.performer|AU Core Practitioner, AU Core PractitionerRole, AU Core Organization, AU Core Patient, AU Base RelatedPerson
AU Core Diagnostic Result Observation|Observation.hasMember|AU Core Diagnostic Result Observation, AU Core Pathology Result Observation
AU Core Encounter|Encounter.participant.individual|AU Core Practitioner, AU Core PractitionerRole, AU Base Related Person
AU Core Encounter|Encounter.reasonReference|AU Core Condition, Observation, AU Core Procedure
AU Core Pathology Result Observation|Observation.performer|AU Core Practitioner, AU Core PractitionerRole, AU Core Organization, AU Core Patient, AU Base RelatedPerson
AU Core Procedure|Procedure.reasonReference|AU Core Condition, Observation, AU Core Procedure, DocumentReference
AU Core MedicationRequest|MedicationRequest.requester|AU Core Practitioner, AU Core PractitionerRole, AU Core Organization, AU Core Patient, AU Base Related Person
AU Core MedicationRequest|MedicationRequest.reasonReference|AU Core Condition, Observation
{:.grid}


##### Must Support - Choice of Data Types
Some elements labelled as *Must Support* allow different data types such as `Observation.effective[x]`. In such cases:
- AU Core Responders **SHALL** correctly populate the element with at least one data type allowed by the element definition if the value is known.
- AU Core Requesters **SHALL** accept resources without error if the element is present and containing any valid data type allowed by the element definition.

The table below provides a list of AU Core profile elements that allow multiple data types.

AU Core Profile |Must Support Element|Data Types
---|---|---
AU Core AllergyIntolerance|AllergyIntolerance.onset[x]|dateTime, age, Period, Range
AU Core Condition|Condition.onset[x]|dateTime, age, Period, Range
AU Core Condition|Condition.abatement[x]|dateTime, age, Period, Range
AU Core Diagnostic Result Observation|Observation.effective[x]|dateTime, Period
AU Core Pathology Result Observation|Observation.effective[x]|dateTime, Period
AU Core Diagnostic Result Observation|Observation.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Pathology Result Observation|Observation.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Diagnostic Result Observation|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Pathology Result Observation|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Blood Pressure|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Body Height|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Body Temperature|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Body Weight|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Heart Rate|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Respiration Rate|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Waist Circumference|Observation.component.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period
AU Core Immunization|Immunization.occurrence[x]|dateTime, string
AU Core MedicationRequest|MedicationRequest.medication[x]|CodeableConcept, Reference
AU Core Procedure|Procedure.performed[x]|dateTime, Period, string, Age, Range
{:.grid}

##### Must Support - Choice of Identifiers
A profile may support one or more than one identifier type and will include the supported identifiers in a profile by slicing the element and placing *Must Support* on each identifier slice. In such cases:
- AU Core Responders **SHALL** correctly populate the element with identifiers from any supported identifier type where the identifier is known.
- AU Core Requesters **SHALL** accept resources without error if the element is present and containing any identifier type allowed by the element definition.

The table below provides a list of AU Core profile elements that allow multiple identifier types.

AU Core Profile |Must Support Element|Supported Identifiers
---|---|---
AU Core Organization|Organization.identifier|HPI-O, Australian Business Number
AU Core Patient|Patient.identifier|IHI, Medicare Card Number, DVA Number
AU Core Practitioner|Practitioner.identifier|HPI-I
AU Core PractitionerRole|PractitionerRole.identifier|Medicare Provider Number
{:.grid}

For example, the profile [AU Core Patient](StructureDefinition-au-core-patient.html) requires support for the following choices `Patient.identifier` defined in [AU Base Patient](https://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-patient.html) to support Individual Healthcare Identifier (IHI), Medicare Card Number, Department of Veterans' Affairs (DVA) Number. When claiming conformance to the AU Core Patient Profile:
- AU Core Responders **SHALL** correctly populate `Patient.identifier` with an IHI, or Medicare Care Number, or DVA Number, or any combination of them.
- AU Core Requesters **SHALL** accept Patient resource if `Patient.identifier` is present containing any valid value. A valid value may be an IHI, Medicare Care Number, or DVA Number identifier, or may be some other allowed identifier.

Systems **MAY** support populating and processing other identifiers, but this is not a requirement of AU Core.

##### Must Support - Choice of Profile Elements

A resource may support two elements that are used to indicate a reason, e.g. `Encounter.reasonCode` and `Encounter.reasonReference` in the profile [AU Core Encounter](StructureDefinition-au-core-encounter.html). In such cases:
- AU Core Responders **SHALL** correctly populate at least one element choice if the value is known.
- AU Core Requesters **SHALL** accept resources without error if any element allowed by the profile is present and containing any valid value. 

The table below lists the applicable profiles and elements in AU Core.

AU Core Profile |Must Support Choice Elements
---|---
AU Core Encounter|Encounter.reasonCode, Encounter.reasonReference
AU Core Procedure|Procedure.reasonCode, Procedure.reasonReference
AU Core MedicationRequest|MedicationRequest.reasonCode, MedicationRequest.reasonReference
{:.grid}


##### Must Support - Choice of Terminology

In AU Core, elements that define support for more than one value set only apply to the [Coding](http://hl7.org/fhir/R4/datatypes.html#Coding) part of the element and are not intended to prevent systems from supplying only a text value. In such cases:
- AU Core Responders **SHALL** correctly populate the element with concepts from each supported value set where the applicable concept is known.
- AU Core Requesters **SHALL** accept resources without error if the element is present and containing any valid value. 

The table below lists the applicable profiles and elements in AU Core that support multiple value sets.

AU Core Profile |Must Support Sub-Element|Terminology Choices
---|---
AU Core Immunization|Immunization.code.coding|[Australian Medicines Terminology Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/amt-vaccine-1), [Australian Immunisation Register Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/australian-immunisation-register-vaccine-1)
AU Core Medication|Medication.code.coding|[Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1), [PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-pbs-item.html)
AU Core MedicationRequest|MedicationRequest.code.coding|[Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1), [PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-pbs-item.html)
{:.grid}

For example, the profile [AU Core Medication](StructureDefinition-au-core-medication.html) requires support for the following terminology choices `Medication.code.coding` defined in [AU Base Medication](https://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-au-medication.html) to support [Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) and [PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-pbs-item.html) as indicated by flagging *Must Support* on those two terminology slices.

When claiming conformance to the AU Core Medication profile: 
- AU Core Responders **SHALL** correctly populate `Medication.code.coding` with either a code from [Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) or [PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-pbs-item.html), or both, if a coded value is known.
- AU Core Requesters **SHALL** accept a Medication resource without error if `Medication.code.coding` is present and containing any valid value. A valid value may be text, or may be a code from [Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1) or [PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-pbs-item.html), or both, or some other code.

Systems **MAY** populate and accept other code systems but this is not a requirement of AU Core.

### Missing Data

There are situations when information for a particular data element is missing and the source system does not know the reason for the absence of data. 

#### Missing Must Support and Optional Data

If the source system does not know the value for an optional element (minimum cardinality = 0), including elements labelled *Must Support*, the data element **SHALL** be omitted from the resource.  

#### Missing Must Support and Mandatory Data

If the data element is a mandatory element (minimum cardinality is > 0), the element **SHALL** be present *even if* the source system does not know the value or the reason the value is absent.

1.  For *non-coded* data elements where the applicable AU Core profile does not mandate a sub-element
    - use the [DataAbsentReason extension](http://hl7.org/fhir/R4/extension-data-absent-reason.html) 
    - use the code `unknown` _The value is expected to exist but is not known_
  
    Example: Patient resource where the patient's birthDate is not available.
    ~~~
    {
      "resourceType" : "Patient",
           ...
           "_birthDate" : {
                "extension" : [
                  {
                    "url" : "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                    "valueCode" : "unknown"
                  }
                ]
              },
          ...
         }
    ~~~
      
2. For *non-coded* data elements where the applicable AU Core profile mandates a sub-element, e.g. in AU Core Practitioner, the sub-element `Practitioner.name.family` is mandatory, then the resource must contain the sub-element otherwise the resource will not be conformant.

3. For *coded* data elements:
    - *required* binding strength:
      - use the appropriate "unknown" concept code from the value set if available.
      - if the value set does not have the appropriate "unknown" concept code, you must use a concept from the value set anyway. Otherwise, the instance will not be conformant.
      - For AU Core profiles, the following status elements with required binding have no appropriate "unknown" concept code:
        - `AllergyIntolerance.clinicalStatus`&#42;
        - `Condition.clinicalStatus`&#42;
        - `Immunization.status`
        
      &#xa;&#xa;&#xa;&#xa;&#42;The clinicalStatus element is conditionally mandatory based on resource-specific constraints.
    - *example*, *preferred*, or *extensible* binding strengths:
      - when the system has text but no coded value, only the text sub-element is populated.
      - when there is neither text or coded value:
        - use the appropriate "unknown" concept code from the value set if available.
        - when the value set does not have an appropriate "unknown" concept code, use `unknown` from the [DataAbsentReason Code System](http://terminology.hl7.org/CodeSystem/data-absent-reason).

        Example: AllergyIntolerance resource where the manifestation is unknown.
        ~~~
        ...
        "reaction" : [
          {
            "manifestation" : [
              {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                    "code" : "unknown",
                    "display" : "Unknown"
                  }
                ]
              }
            ]
          }
        ]
        ...
        ~~~


### Suppressed Data
In some circumstances, specific pieces of data may be hidden due to security or privacy reasons. 

When an element definition is optional (minimum cardinality = 0), including elements labelled *Must Support*:
- AU Core Responder **SHALL NOT** populate the element in the resource when a value is suppressed.  

When an element definition is mandatory (minimum cardinality > 0), 
- AU Core Responders **SHALL** correctly populate the element but it may exceed the data requester's access rights to know that the data is suppressed:
  - where a requester does not have access rights to know that data is suppressed use the code `unknown` from the [DataAbsentReason Code System](http://terminology.hl7.org/CodeSystem/data-absent-reason) following the section on [Missing Data](#missing-data).
  - where a requester may know that the data is suppressed use the code `masked` from the [DataAbsentReason Code System](http://terminology.hl7.org/CodeSystem/data-absent-reason) following the section on [Missing Data](#missing-data).



---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/guidance.md

- [General Guidance](general-guidance.html)
- [Medicine Information](medicine-information.html)
- [AU Core Data for Interoperability](aucdi.html)
- [Relationship with other IGs](relationship.html)
- [AU Variance Statement](variance.html)
- [Comparison with other national and international IGs](comparison.html)
- [Future of AU Core](future.html)

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/index.md

### Introduction
AU Core is provided to support the use of HL7<sup>&reg;</sup> FHIR<sup>&reg;&copy;</sup> in an Australian context. It sets the minimum expectations on FHIR resources to support conformance and implementation in systems.

AU Core defines the data model and RESTful API interactions that set minimum expectations for a system to record, update, search, and retrieve core digital health and administrative information. 

AU Core uses AU Base representations, where available, as the basis for profiles that define the FHIR resources to be supported, and the elements, extensions, vocabularies, and value sets that SHALL be present are identified, and how they are used is defined. It also documents the minimum FHIR RESTful interactions for each resource type to access data. AU Core promotes interoperability and adoption through common implementation and SHOULD be the basis of further implementation guide development for specific use cases. 

There are two different ways to implement AU Core:
1. Profile Only Support: systems support only the resources as profiled by AU Core to represent digital health information.
1. Profile Support + Interaction Support: systems support the resources as profiled by AU Core to represent digital health information (Profile Support) and the [RESTful FHIR API](http://hl7.org/fhir/R4/http.html) interactions defined for it (Interaction Support).

In this regard it is similar in nature to other national core specifications such as US Core FHIR Implementation Guide and international FHIR specifications such as International Patient Access FHIR Implementation Guide.

For a detailed description of the different ways to implement AU Core see the [Conformance Requirements](general-requirements.html) page.

### Project background

This implementation guide is under development through the AU Core project as part of the [Sparked AU FHIR Accelerator](https://sparked.csiro.au/). The Sparked AU FHIR Accelerator is a community comprising government, technology vendors, provider organisations, peak bodies, practitioners, and domain experts, to accelerate the creation and use of national FHIR standards in health care information exchange.

The AU Core Sparked project includes:
- Australian Core Data for Interoperability - clinician focussed data requirements project.
- AU Core FHIR Implementation Guide - HL7 Australia technical data access and exchange specification.

The [Australian Core Data for Interoperability (AUCDI)](https://sparked.csiro.au/index.php/sparked-products-resources/australian-core-data-for-interoperability/aucdi-release-1/)  aims to define requirements underlying the standardisation of the capture, structure, usage, and exchange of health data to counteract the current fragmentation of Australia’s health data systems. The AUCDI forms a basis for clinical data requirements for AU Core.

### Dependencies

{% include dependency-table.xhtml %}

### Usage

AU Core is particularly useful in defining:

- A testable level of system conformance
- Assumed support by client applications
- The basis of downstream implementation guides

Implementation of capabilities defined in AU Core enables specifications, applications and business logic to be developed with confidence.

This document is a working specification that may be directly implemented by FHIR<sup>&reg;&copy;</sup> system producers.

FHIR<sup>&reg;&copy;</sup> connectathon events are key to the verification of the guide as being suitable for 
implementation. This implementation guide will be used as the basis for Australian connectathon events.

### AU Core Actors

The following actors are part of AU Core:

**AU Core Requestor**

A system that creates and initiates a data access request to retrieve core digital health and administrative information. The AU Core Requestor is the client in a client-server interaction.  
<br/>

**AU Core Responder**

A system that responds to the data access request submitted by requesters, providing responses to requests for core digital health and administrative information. The AU Core Responder is the server in a client-server interaction.  
<br/>

### AU Core FHIR RESTful interactions

For systems that support AU Core FHIR RESTful interactions ([Profile Support + Interaction Support](general-requirements.html#profile-support--interaction-support)), the interaction requirements, such as read and search operations, are detailed in the AU Core Requester and AU Core Responder [CapabilityStatements](capability-statements.html).

The following are simple examples of AU Core FHIR RESTful interactions between AU Core Requester and AU Core Responder actors:

**Example of a FHIR RESTful read interaction**

<div> 
  <img src="au-core-read-interaction-example.svg" alt="FHIR RESTful read interaction example" style="width:60%"/>
</div>
<br/>
*Figure 1: Read a Patient using the logical id*
<br/>
<br/>

**Example of a FHIR RESTful search interaction**

<div> 
  <img src="au-core-search-interaction-example.svg" alt="FHIR RESTful search interaction example" style="width:60%"/>
</div>
<br/>
*Figure 2: Search for patients that match a family name*
<br/>

### How to read this guide

This guide is divided into several pages which are listed at the top of each page in the menu bar.

- [Home](index.html): This page provides the introduction and scope for this guide.
- [Conformance](conformance.html): These pages describe the set of rules to claim conformance to this guide including the expectations for *Must Support*  elements in AU Core profiles.
  - [General Requirements](general-requirements.html): This page defines requirements common to all actors and profiles used in this guide including how CapabilityStatements are used to claim conformance. This page defines the expectations for mandatory and *Must Support*  elements in AU Core Profiles.
  - [Declaring Conformance](declaring-conformance.html): This page describes how to declare conformance to AU Core.
- [Guidance](guidance.html): These pages list the guidance for this guide.
  - [General Guidance](general-guidance.html): This page provides guidance on using the profiles defined in this guide.
  - [Medicine Information](medicine-information.html): This page provides guidance on constructing medication related resources.
  - [AU Core Data for Interoperability](aucdi.html): This page maps AUCDI data groups and elements to FHIR artefacts in AU Core.
  - [Relationship with other IGs](relationship.html): This page provides guidance on the relationship between AU Core, AUCDI, and other implementation guides.
  - [AU Variance Statement](variance.html): This page documents the variance from AU Base.
  - [Comparison with other national and international IGs](comparison.html): This page provides comparison between AU Core profiles and other national, or international implementation guides.
  - [Future of AU Core](future.html): This page outlines the approach to developing AU Core and yearly update cycle.
- [Security and Privacy](security.html): This page documents the AU Core general security and privacy requirements and recommendations.
- [FHIR Artefacts](fhirartefacts.html): These pages provide detailed descriptions and formal definitions for all the FHIR artefacts defined in this guide.
  - [Artefacts Summary](artifacts.html): This page lists the FHIR artefacts defined in this guide.
  - [Profiles and Extensions](profiles-and-extensions.html): This page describes the profiles and extensions that are defined in this guide to exchange data. Each profile page includes a narrative description and guidance, formal definition and a "Notes" section that summarises the supported search transactions for each profile. Although the guidance typically focuses on the profiled elements, it may also may focus on un-profiled elements to aid with implementation.
  - [Search Parameters](search-parameters.html): This page lists the search parameters extended for use in this guide for use in AU Core operations.
  - [Terminology](terminology.html): This page lists the value sets and code systems supported in this guide.
  - [Capability Statements](capability-statements.html): This page defines the expected FHIR capabilities of AU Core Responders and Requesters.
  - [Actor Definitions](actors.html): This page defines the AU Core actors, AU Core Responder and AU Core Requester.
- [Examples](examples.html): This page lists all the examples used in this guide.
- [Support](support.html): These pages provide supporting material for implementation of AU Core.    
  - [Downloads](downloads.html): This page provides links to downloadable artefacts.
  - [License and Legal](license.html): This page outlines the license and legal requirements for material in AU Core.
- [Change Log](changes.html): This page documents the changes across versions of this guide.

### Collaboration
This guide is the product of collaborative work undertaken with participants from:

* [HL7 Australia AU Core Technical Design Group](https://confluence.hl7.org/display/HAFWG/HL7+Australia+-+AU+Core+Technical+Design+Group+Home)
* [HL7 Australia FHIR Working Group](https://confluence.hl7.org/display/HAFWG/HL7+Australia+FHIR+Work+Group+Home)
* Australian FHIR Implementers Community  

Primary Editors: Brett Esler, Danielle Tavares-Rixon, Dusica Bojicic.











---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/license.md

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

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/medicine-information.md

The FHIR standard defines the following resources for exchanging medicine information:
- [Medication](http://hl7.org/fhir/R4/medication.html)
- [MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html)
- [MedicationDispense](http://hl7.org/fhir/R4/medicationdispense.html)
- [MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html)
- [MedicationStatement](http://hl7.org/fhir/R4/medicationstatement.html)

AU Core defines the following profiles:
- [AU Core Medication](StructureDefinition-au-core-medication.html): to support medicinal product identification in an Australian healthcare context.
- [AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html) (with AU Core Medication): to support prescription, ordering, and ePrescribing use cases.

It is anticipated that future releases of AU Core will define profiles of:
- MedicationAdministration (with AU Core Medication) to support medication chart and other administration use cases.
- MedicationDispense (with AU Core Medication) to support dispense records and medication management use cases.
- MedicationStatement (with AU Core Medication) to support summary statements of medicine use.

The guidance below addresses how medicinal product identification can be structured in FHIR conformant to AU Core.

### Medicinal Product Identification

For extemporaneous medications, the medication code element is the primary mechanism to identify a medicine. In this case, a list of ingredients including strength and form is recommended to be provided as text in the medication code element e.g. `Medication.code.text` or `MedicationRequest.medicationCodeableConcept.text`.

For non-extemporaneous medications, the medication code element is the primary mechanism to identify a medicine. In this case, information identifying the medicinal product including strength and form is recommended to be provided as a code from a terminology in the medication code element, e.g. `Medication.code.coding` or `MedicationRequest.medicationCodeableConcept.coding`, and the description of the medicinal product as presented to the user is provided in the text e.g. `Medication.code.text` or `MedicationRequest.medicationCodeableConcept.text`. 

Australian Medicines Terminology (AMT) is the national terminology for identification and naming of medicines in clinical systems for Australia. 
The AMT is published monthly to include new items on the Australian Register of Therapeutic Goods from the TGA, as well as items listed on the Pharmaceutical Benefits Scheme. 
The AMT is published as part of SNOMED CT-AU (Australian edition of SNOMED CT) and can be downloaded in a variety of formats from the [National Clinical Terminology Service (NCTS)](https://www.healthterminologies.gov.au/).

In addition to the medication code, the majority of use cases support exchange of structured medicine information as separate data elements covering brand name, generic name, item form and strength, and manufacturer. These data elements may be supported as coded, or text, and systems are likely to use a combination of coded and text elements when constructing a Medication resource. 

The guidance for how to support coded or text identification of medicinal products is summarised below: 

1. For *coded* support of a medication, the preferred method is to use a single medication code that captures all information required for identification of the medication in code.coding.
    - AMT contains both generic or branded medication concepts. Depending on the concept level selected, an AMT concept can convey the following detail: brand name, generic (ingredient) name, item form, strength, pack size, container type.
    - AMT concepts are defined by relationships which detail the properties or components that identify a medication. Detailed information about the medication such as the brand name, generic (ingredient) name, form and strength can be retrieved via terminology [lookup operation](https://build.fhir.org/terminology-service.html#lookup).
    - When there is a requirement to explicitly state the the type of medicinal coding (e.g. branded product with strength or form), [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) can optionally be used in the resource (i.e. MedicationAdministration, MedicationStatement, MedicationDispense, MedicationRequest, Medication):  
      - generic item form and strength = `code.coding` with [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) using `UPDSF` from the [Medication Type code system](http://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-medication-type.html)
      - branded item form and strength = `code.coding` with [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) using `BPDSF` from the [Medication Type code system](http://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-medication-type.html)

    Example: Medication with single code identifying brand name, item form and strength.
    ~~~
    {
      "resourceType": "Medication",
       ...
      "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "32328011000036106",
              "display": "Benpen 3 g powder for injection, 1 vial"
            },
          ]
        }
    }
    ~~~

    Example: Medication with single code identifying generic name, item form and strength, with identification of product type.
    ~~~
    {
      "resourceType": "Medication",
       ...
      "code": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org.au/fhir/StructureDefinition/medication-type",
                  "valueCoding": {
                    "system": "http://terminology.hl7.org.au/CodeSystem/medication-type",
                    "code": "UPDSF",
                    "display": "Unbranded product with strengths and form"
                  }
                }
              ],
              "system": "http://snomed.info/sct", 
              "code": "32686011000036108",
              "display": "benzylpenicillin 3 g injection, vial"
            },
          ]
        }
    }
    ~~~

2. For *coded* support of brand name, generic name, manufacturer, item form and strength, where the individual components required for medication identification are separately coded:
   - Coded support for the following can be provided using code.coding with an optional [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) to explicitly declare the type of product identification in the resource (i.e. MedicationAdministration, MedicationStatement, MedicationDispense, MedicationRequest, Medication), for example: 
      - brand name = `code.coding` with [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) using `BPD` from the [Medication Type code system](http://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-medication-type.html)
      - generic name = `code.coding` with [Medication Type extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-type.html) using `UPD` from the [Medication Type code system](http://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-medication-type.html)
   - If the resource is a Medication resource:
      - form and strength may be separately provided in `Medication.form`, `Medication.ingredient.itemCodeableConcept` and `Medication.ingredient.strength` when they are not implicit in `Medication.code`
      

    Example: Medication with coded brand name, generic name, item form and strength.
    ~~~
    {
      "resourceType": "Medication",
        ...
        "code": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org.au/fhir/StructureDefinition/medication-type",
                  "valueCoding": {
                    "system": "http://terminology.hl7.org.au/CodeSystem/medication-type",
                    "code": "UPD",
                    "display": "Unbranded product with no strengths or form"
                  }
                }
              ],
              "system": "http://pbs.gov.au/code/item",
              "code": "02647H",
              "display": "BENZYLPENICILLIN"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org.au/fhir/StructureDefinition/medication-type",
                  "valueCoding": {
                    "system": "http://terminology.hl7.org.au/CodeSystem/medication-type",
                    "code": "BPD",
                    "display": "Branded product with no strengths or form"
                  }
                }
              ],
              "system": "http://snomed.info/sct",
              "code": "3539011000036105",
              "display": "Benpen"
            }, 
          ]
        },
        "manufacturer": {
          "identifier": {
            "system": "http://pbs.gov.au/code/manufacturer",
            "value": "CS"
          }
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "129011000036109",
              "display": "Injection"
            }
          ],
          "text": "Injection"
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "323389000",
                  "display": "Benzylpenicillin"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 3,
                "unit": "g"
              },
              "denominator": {
                "value": 1,
                "unit": "unit"
              }
            }
          }
        ]
    }
    ~~~

3.  For *non-coded* support for brand name, generic name, manufacturer, item form and strength:
    - Non-coded support is provided using the Medication resource
        - brand name = `Medication.extension` [Medication Brand Name extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-brand-name.html)
        - generic name = `Medication.extension` [Medication Generic Name extension](http://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-medication-generic-name.html)
        - item form and strength = `Medication.code.text`
  
    Example: Medication with text only brand name, generic name, item form and strength.
    ~~~
    {
      "resourceType": "Medication",
       ...
       "extension": [
         {
           "url": "http://hl7.org.au/fhir/StructureDefinition/medication-generic-name",
           "valueString": "Benzylpenicillin"
         },
         {
           "url": "http://hl7.org.au/fhir/StructureDefinition/medication-brand-name",
           "valueString": "Benpen"
         }
       ],
       "code": {
         "text": "Benpen 3 g powder for injection, 1 vial"
       }
    }
    ~~~

4. Manufacturer information is not typically included in a medication code. Support for manufacturer information is provided using a Medication resource:
  - *coded* support: manufacturer = `Medication.manufacturer.identifier`
  - *non-coded* support: manufacturer = `Medication.manufacturer.display`
    
    Example: Medication with coded manufacturer.
    ~~~
    {
      "resourceType": "Medication",
        ...
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "32328011000036106",
              "display": "Benpen 3 g powder for injection, 1 vial"
            }
          ]
        },
        "manufacturer": {
          "identifier": {
            "system": "http://pbs.gov.au/code/manufacturer",
            "value": "CS"
          }
        }
    }
    ~~~

    Example: Medication with non-coded manufacturer.
    ~~~
    {
      "resourceType": "Medication",
       ...
       "code": {
         "text": "Benpen 3 g powder for injection, 1 vial"
       },
       "manufacturer": {
         "display": "Seqirus"
       }
    }
    ~~~

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/profiles-and-extensions.md

### Profiles

The following profiles and have been defined for this implementation guide.

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all profiles and highlight new ones using the input/data/new_stuff.yml list.  Remove it if you would like to hand generate it -->

{% include sd-list-generator.md %}
<!-- ================================================ -->

#### Extension
* [AU Core Sex Assigned At Birth](StructureDefinition-au-core-rsg-sexassignedab.html)

<br />

### Extensions

All extensions used in this guide are defined in the FHIR Extensions Pack or [AU Base](http://build.fhir.org/ig/hl7au/au-fhir-base/profiles-and-extensions.html#extensions).

The following extensions are marked with *Must Support* in this implementation guide:
* [Australian Indigenous Status](https://build.fhir.org/ig/hl7au/au-fhir-base/StructureDefinition-indigenous-status.html) in [AU Core Patient](StructureDefinition-au-core-patient.html)
* [Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns) in [AU Core Patient](StructureDefinition-au-core-patient.html)
* [Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity) in [AU Core Patient](StructureDefinition-au-core-patient.html)

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/relationship.md


### Relationship to HL7 AU Base

This guide is built on top of the FHIR standard and, where available, [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/).

  <div> 
    <img src="relationship.png" alt="Relationship with HL7 AU Base" style="width:70%"/>
  </div>
*Figure 1: Relationship with HL7 AU Base*
<br/>

**AU Base:**
- defines Australian realm concepts (e.g. Medicare card number) as an additional set of options to what is available in the FHIR standard including extensions and terminology.
- provides ‘Base’ profiles to inform a reader of which added concepts are considered relevant to a particular resource type. 
- does not apply cardinality constraints or required binding strengths that enforce conformance to those concepts except in rare circumstances. Must support flags are not utilised in AU Base profiles.
- does not recommend or mandate any particular resource, element, or interactions.


**AU Core:**
- defines a set of conformance requirements that enforce a set of 'minimum requirements' on the Australian localised concepts from AU Base, specifying the elements, extensions, vocabularies, and value sets that SHALL be present and how they SHALL be used, along with the RESTful API interactions. 
- for use by Australian stakeholders when implementing FHIR to provide a common implementation and should be built on top of when creating further Australian profiles and implementation guides.
- conformance may become tied to regulatory and/or contractual agreements in order to necessitate adoption to this more prescriptive specification.

The context of AU Core within the set of HL7 AU standards is shown in the figure below.
  <div> 
    <img src="architecture.png" alt="Context of AU Core within the set of HL7 AU standards" style="width:70%"/>
  </div>
*Figure 2: Context of AU Core within the set of HL7 AU standards*
<br/>

### Relationship to AUCDI and other IGs
The primary intent of the [Australian Core Data for Interoperability (AUCDI)](https://sparked.csiro.au/index.php/sparked-products-resources/australian-core-data-for-interoperability/aucdi-release-1/) is to design and govern a collection of coherent, reusable building blocks known as ‘data groups’. These data groups specify “what” the clinical requirements of the clinical information that should be included for data entry, data use, and sharing of information supporting healthcare delivery. However, it does not specify “how” the data is exchanged; this is the
role fulfilled by the FHIR standard. AUCDI is not required to be implemented as a whole single product. Parts can be
implemented as required for specific use cases.

AUCDI Release 1 (R1) is focused on an agreement of “the core of the core” common data elements; minimum data required to support standardised clinical information capture at the point of care as well as enable the safe and meaningful exchange of information to other care providers. 

AU Core is intended to provide an implementable standard for FHIR based interfaces for provider and patient information systems in Australia​ providing:
- an exchange standard for AUCDI (the underpinning clinical data model)
- Data model and RESTful API interactions that set minimum expectations for a system to record, update, search, and retrieve core digital health and administrative information​
- be built on top of for standards development for specific use cases

With AUCDI defining clinical data requirements and FHIR AU Core providing detailed FHIR-based profiles for meeting clinical data requirements and administrative data requirements, an interpretation of AUCDI is necessary which is undertaken through the community.

Updates to AU Core depend upon community input and we encourage our audience to submit questions and feedback to AU Core specifications by clicking on the Propose a change link in the footer of every page. In addition, we encourage requesting any necessary clarifications to AUCDI through the <a href="https://sparked.csiro.au/index.php/sparked-products-resources/australian-core-data-for-interoperability/">AUCDI process</a> that helps inform future updates to FHIR AU Core.

See [AUCDI](aucdi.html) for the relationship between the AUCDI data groups, elements, and AU Core profiles.

AU Core aligns to, and leverages, international standards and other national standards. Corresponding profiles included in relevant FHIR implementation guides were reviewed and considered during the development process to ensure alignment and to facilitate adoption of this standard. These implementation guides include:
- [HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)
- [International Patient Access 1.0.0](https://hl7.org/fhir/uv/ipa/STU1/)
- [International Patient Summary Implementation Guide 1.1.0](https://hl7.org/fhir/uv/ips/STU1.1/)
- [US Core Implementation Guide 7.0.0](https://hl7.org/fhir/us/core/2024Jan/)

The relationship of AU Core to AUCDI and other implementation guides is shown in the figure below.

 <div> 
    <img src="context-colour.png" alt="Relationship to AUCDI and Other IGs" style="width:70%"/>
  </div>
*Figure 3: Relationship to AUCDI and Other IGs*
<br/>

Implementation Guide |Relationship
---|---
[AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/)|This IG defines Australian realm concepts including terminology, identifiers, and extensions. AU Core uses AU Base, where available, as the basis for profiles that define the FHIR resources to be supported, and the elements, extensions, vocabularies, and value sets that SHALL be present are identified, and how they are used is defined.
[HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation](https://hl7.org/xprod/ig/uv/gender-harmony/informative1/)|This IG provides definitive guidance on how to exchange clinical sex and gender affirming information using HL7 models. Sex and gender concepts from this IG have been reviewed for the potential for adoption in Australia. Where adopted, these concepts are included by reference in AU Base and are available for use in AU Core via AU Base.
[International Patient Access](https://hl7.org/fhir/uv/ipa/STU1/)|This IG describes how an application acting on behalf of a patient can access information about the patient from a clinical records system using a FHIR based API. The REST API and profiles in this IG were reviewed and considered during development of AU Core. AU Core is designed to be compatible with IPA, e.g. AU Core conformant data can be accessed by an IPA conformant client.
[International Patient Summary Implementation Guide](https://hl7.org/fhir/uv/ips/STU1.1/)|This IG describes specify how to represent in HL7 FHIR the International Patient Summary (IPS). An International Patient Summary (IPS) document is an electronic health record extract containing essential healthcare information about a subject of care. The profiles in this IG were reviewed and considered during development of AU Core. AU Core is designed to be compatible with IPS, e.g. AU Core conformant data can be used to generate a patient summary that is conformant to IPS.
[US Core Implementation Guide](https://hl7.org/fhir/us/core/STU7/)|This IG is the foundation for US Realm FHIR implementation guides. It defines the minimum constraints on the FHIR resources to create the US Core Profiles. The elements, extensions, vocabularies, and value sets that SHALL be present are identified, and how they are used is defined. It also documents the minimum FHIR RESTful interactions for each US Core Profiles to access patient data. The REST API and profiles in this IG were reviewed and considered during development of AU Core. AU Core is compatible where possible.
{:.grid}

See [Comparison with other national and international IGs](comparison.html) for a comparison between AU Core profiles and profiles in other implementation guides.


---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/search-parameters.md

The complete list of search parameters supported by AU Core and the rules for use are defined in the [AU Core CapabilityStatements](capability-statements.html).

AU Core does not introduce new search parameters but refines those from the [Base FHIR Specification](https://hl7.org/fhir/R4/searchparameter-registry.html) or [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/search-parameters.html). AU Core SearchParameters are derived from these existing definitions to specify additional requirements for the following SearchParameter elements:​

- [multipleAnd](https://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleAnd)
- [multipleOr](https://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.multipleOr)
- [comparator](https://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.comparator)
- [modifier](https://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.modifier)
- [chain](https://hl7.org/fhir/R4/searchparameter-definitions.html#SearchParameter.chain) 

<div class="stu-note" markdown="1">
The set of AU Core SearchParameters currently defined in AU Core include search parameters with support for chained search. Future releases of AU Core will define the complete list of search parameters supported by AU Core and the rules for use as a set of FHIR SearchParameters.
</div>

The [registry of standard search parameters]({{site.data.fhir.path}}searchparameter-registry.html) can be found in the FHIR specification and [AU defined search parameters](http://build.fhir.org/ig/hl7au/au-fhir-base/search-parameters.html) in AU Base.

### Common search parameters

- [clinical-patient](SearchParameter-au-core-clinical-patient.html)

### PractitionerRole search parameters

- [practitionerrole-practitioner](SearchParameter-au-core-practitionerrole-practitioner.html)

---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/support.md

- [Downloads](downloads.html)
- [License and Legal](license.html)










---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/terminology.md

This page lists all ValueSets and CodeSystems supported as part of AU Core. 

As well as terminology defined in FHIR, this specification supports terminology defined in [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/terminology.html) or [National Clinical Terminology Service (NCTS)](https://www.healthterminologies.gov.au/integration/R4/fhir) terminology resources. 

### Value Sets

This implementation guide does not define any unique value sets. The value sets used in this guide are defined in the base FHIR specification, [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/terminology.html), or [NCTS](https://www.healthterminologies.gov.au/integration/R4/fhir/metadata).  

The list below shows the value sets bound as [preferred](https://hl7.org/fhir/R4/terminologies.html#preferred) or greater to a supported element, element slice, or extension.

|ValueSet|Profile where used|Published|
|---| ---| ---|
|[ActEncounterCode - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-au-v3-ActEncounterCode-extended.html)|[AU Core Encounter](StructureDefinition-au-core-encounter.html)|AU Base|
|[AdministrativeGender](https://hl7.org/fhir/R4/valueset-administrative-gender.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|FHIR|
|[AddressUse](http://hl7.org/fhir/ValueSet/address-use)|[AU Core Location](StructureDefinition-au-core-location.html), [AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Patient](StructureDefinition-au-core-patient.html)|FHIR|
|[AddressType](http://hl7.org/fhir/ValueSet/address-type)|[AU Core Location](StructureDefinition-au-core-location.html), [AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Patient](StructureDefinition-au-core-patient.html)|FHIR|
|[Adverse Reaction Agent](https://healthterminologies.gov.au/fhir/ValueSet/adverse-reaction-agent-1)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|NCTS|
|[Adverse Reaction Substances and Negated Findings](https://healthterminologies.gov.au/fhir/ValueSet/adverse-reaction-substances-and-negated-findings-1)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|NCTS|
|[AllergyIntolerance Clinical Status Codes](https://hl7.org/fhir/R4/valueset-allergyintolerance-clinical.html)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|FHIR|
|[AllergyIntolerance Verification Status Codes](http://hl7.org/fhir/R4/valueset-allergyintolerance-verification.html)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|FHIR|
|[AllergyIntoleranceSeverity](http://hl7.org/fhir/R4/valueset-reaction-event-severity.html)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|FHIR|
|[Australian Immunisation Register Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/australian-immunisation-register-vaccine-1)|[AU Core Immunization](StructureDefinition-au-core-immunization.html)|NCTS|
|[Australian Indigenous Status](https://healthterminologies.gov.au/fhir/ValueSet/australian-indigenous-status-1)|[AU Core Patient](StructureDefinition-au-core-patient.html)|NCTS|
|[Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html), [AU Core Medication](StructureDefinition-au-core-medication.html)|NCTS|
|[Australian Medicines Terminology Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/amt-vaccine-1)|[AU Core Immunization](StructureDefinition-au-core-immunization.html)|NCTS|
|[Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1)|[Individual Pronouns](http://hl7.org/fhir/StructureDefinition/individual-pronouns)|NCTS|
|[Australian States and Territories](https://healthterminologies.gov.au/fhir/ValueSet/australian-states-territories-2)|[AU Core Location](https://build.fhir.org/ig/hl7au/au-fhir-core/StructureDefinition-au-core-location.html), [AU Core Organization](https://build.fhir.org/ig/hl7au/au-fhir-core/StructureDefinition-au-core-organization.html), [AU Core Patient](https://build.fhir.org/ig/hl7au/au-fhir-core/StructureDefinition-au-core-patient.html)|NCTS|
|[Biological Sex](https://healthterminologies.gov.au/fhir/ValueSet/biological-sex-1)|[AU Core Sex Assigned At Birth](StructureDefinition-au-core-rsg-sexassignedab.html)|NCTS|
|[Body Length Units](http://hl7.org/fhir/ValueSet/ucum-bodylength)|[AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html)|FHIR|
|[Body Temperature Units](http://hl7.org/fhir/ValueSet/ucum-bodytemp)|[AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html)|FHIR|
|[Body Weight Units](http://hl7.org/fhir/ValueSet/ucum-bodyweight)|[AU Core Body Weight](StructureDefinition-au-core-bodyweight.html)|FHIR|
|[Clinical Condition](https://healthterminologies.gov.au/fhir/ValueSet/clinical-condition-1)|[AU Core Condition](StructureDefinition-au-core-condition.html)|NCTS|
|[Clinical Finding](https://healthterminologies.gov.au/fhir/ValueSet/clinical-finding-1)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html), [AU Core Condition](StructureDefinition-au-core-condition.html)|NCTS|
|[Clinical Specialty](https://healthterminologies.gov.au/fhir/ValueSet/clinical-specialty-1)|[AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html)|NCTS|
|[Common Languages in Australia](https://healthterminologies.gov.au/fhir/ValueSet/common-languages-australia-2)|[AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html)|NCTS|
|[Condition/Diagnosis Severity](https://hl7.org/fhir/R4/valueset-condition-severity.html)|[AU Core Condition](StructureDefinition-au-core-condition.html)|FHIR|
|[ConditionCategoryCodes](https://hl7.org/fhir/R4/valueset-condition-category.html)|[AU Core Condition](StructureDefinition-au-core-condition.html)|FHIR|
|[ConditionClinicalStatusCodes](https://hl7.org/fhir/R4/valueset-condition-clinical.html)|[AU Core Condition](StructureDefinition-au-core-condition.html)|FHIR|
|[ConditionVerificationStatus](https://hl7.org/fhir/R4/valueset-condition-ver-status.html)|[AU Core Condition](StructureDefinition-au-core-condition.html)|FHIR|
|[ContactPointSystem](http://hl7.org/fhir/ValueSet/contact-point-system)|[AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html)|FHIR|
|[ContactPointUse](http://hl7.org/fhir/ValueSet/contact-point-use)|[AU Core Organization](StructureDefinition-au-core-organization.html), [AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html)|FHIR|
|[DataAbsentReason](https://hl7.org/fhir/R4/valueset-data-absent-reason.html)|[AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Heart Rate](StructureDefinition-au-core-heartrate.html), [AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html), [AU Core Respiration Rate](StructureDefinition-au-core-resprate.html), [AU Core Body Weight](StructureDefinition-au-core-bodyweight.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html), [AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html), [AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html), [AU Core Smoking Status](StructureDefinition-au-core-smokingstatus.html)|FHIR|
|[DVA Entitlement](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-dva-entitlement.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|AU Base|
|[Encounter Reason Codes](https://hl7.org/fhir/R4/valueset-encounter-reason.html)|[AU Core Encounter](StructureDefinition-au-core-encounter.html)|FHIR|
|[EncounterStatus](https://hl7.org/fhir/R4/valueset-encounter-status.html)|[AU Core Encounter](StructureDefinition-au-core-encounter.html)|FHIR|
|[EventStatus](https://hl7.org/fhir/R4/valueset-event-status.html)|[AU Core Procedure](StructureDefinition-au-core-procedure.html)|FHIR|
|[Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1)|[Individual Gender Identity](http://hl7.org/fhir/StructureDefinition/individual-genderIdentity)|NCTS|
|[Healthcare Organisation Role Type](https://healthterminologies.gov.au/fhir/ValueSet/healthcare-organisation-role-type-1)|[AU Core Organization](StructureDefinition-au-core-organization.html)|NCTS|
|[hl7VS-degreeLicenseCertificate - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v2-0360-extended.html)|[AU Core Practitioner](StructureDefinition-au-core-practitioner.html)|AU Base|
|[hl7VS-identifierType - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-au-v2-0203-extended.html)|[AU Core Organization](StructureDefinition-au-core-organization.html)|AU Base|
|[hl7VS-providerRole - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-au-v2-0443-extended.html)|[AU Core Immunization](StructureDefinition-au-core-immunization.html)|AU Base|
|[IdentifierUse](https://hl7.org/fhir/R4/valueset-identifier-use.html)|[AU Core Patient](StructureDefinition-au-core-patient.html)|FHIR|
|[Immunization Status Codes](https://hl7.org/fhir/R4/valueset-immunization-status.html)|[AU Core Immunization](StructureDefinition-au-core-immunization.html)|FHIR|
|[Indicator of Hypersensitivity or Intolerance to Substance](https://healthterminologies.gov.au/fhir/ValueSet/indicator-hypersensitivity-intolerance-to-substance-2)|[AU Core AllergyIntolerance](StructureDefinition-au-core-allergyintolerance.html)|NCTS
|[Individual Healthcare Identifier Record Status](https://healthterminologies.gov.au/fhir/ValueSet/ihi-record-status-1)|[AU Core Patient](StructureDefinition-au-core-patient.html)|NCTS|
|[Location Type (Physical) - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-au-location-physical-type-extended.html)|[AU Core Location](StructureDefinition-au-core-location.html)|AU Base|
|[LocationMode](https://hl7.org/fhir/R4/valueset-location-mode.html)|[AU Core Location](StructureDefinition-au-core-location.html)|FHIR|
|[LocationStatus](https://hl7.org/fhir/R4/valueset-location-status.html)|[AU Core Location](StructureDefinition-au-core-location.html)|FHIR|
|[Medication request intent](https://hl7.org/fhir/R4/valueset-medicationrequest-intent.html)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|FHIR|
|[Medicationrequest status](https://hl7.org/fhir/R4/valueset-medicationrequest-status.html)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|FHIR|
|[Metric Body Length Units](https://healthterminologies.gov.au/fhir/ValueSet/metric-body-length-units-1)|[AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html)|NCTS|
|[Metric Body Weight Units](https://healthterminologies.gov.au/fhir/ValueSet/metric-body-weight-units-1)|[AU Core Body Weight](StructureDefinition-au-core-bodyweight.html)|NCTS|
|[NameUse](https://hl7.org/fhir/R4/valueset-name-use.html)|[AU Core Patient](StructureDefinition-au-core-patient.html), [AU Core Practitioner](StructureDefinition-au-core-practitioner.html)|FHIR|
|[Observation Category Codes](https://hl7.org/fhir/R4/valueset-observation-category.html)|[AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Heart Rate](StructureDefinition-au-core-heartrate.html), [AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html), [AU Core Respiration Rate](StructureDefinition-au-core-resprate.html), [AU Core Body Weight](StructureDefinition-au-core-bodyweight.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html), [AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html), [AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html), [AU Core Smoking Status](StructureDefinition-au-core-smokingstatus.html)|FHIR|
|[Observation Interpretation Codes](https://hl7.org/fhir/R4/valueset-observation-interpretation.html)|[AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html)|FHIR
|[Observation Reference Range Meaning Codes](https://hl7.org/fhir/R4/valueset-referencerange-meaning.html)|[AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html)|FHIR
|[ObservationStatus](http://hl7.org/fhir/R4/valueset-observation-status.html)|[AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html), [AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html), [AU Core Body Weight](StructureDefinition-au-core-bodyweight.html), [AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html), [AU Core Heart Rate](StructureDefinition-au-core-heartrate.html), [AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Respiration Rate](StructureDefinition-au-core-resprate.html), [AU Core Smoking Status](StructureDefinition-au-core-smokingstatus.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html)|FHIR|
|[Participant type](https://hl7.org/fhir/R4/valueset-encounter-participant-type.html)|[AU Core Encounter](StructureDefinition-au-core-encounter.html)|FHIR|
|[PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-pbs-item.html)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html), [AU Core Medication](StructureDefinition-au-core-medication.html)|AU Base|
|[Practitioner Role](https://healthterminologies.gov.au/fhir/ValueSet/practitioner-role-1)|[AU Core PractitionerRole](StructureDefinition-au-core-practitionerrole.html)|NCTS|
|[Procedure](https://healthterminologies.gov.au/fhir/ValueSet/procedure-1)|[AU Core Procedure](StructureDefinition-au-core-procedure.html)|NCTS|
|[QuantityComparator](http://hl7.org/fhir/ValueSet/quantity-comparator)|[AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html), [AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html), [AU Core Body Weight](StructureDefinition-au-core-bodyweight.html), [AU Core Diagnostic Result Observation](StructureDefinition-au-core-diagnosticresult.html), [AU Core Heart Rate](StructureDefinition-au-core-heartrate.html), [AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html), [AU Core Respiration Rate](StructureDefinition-au-core-resprate.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html)|FHIR|
|[RCPA SPIA Pathology Reporting](https://healthterminologies.gov.au/fhir/ValueSet/spia-pathology-reporting-1)|[AU Core Pathology Result Observation](StructureDefinition-au-core-diagnosticresult-path.html)|NCTS|
|[Reason for Request](https://healthterminologies.gov.au/fhir/ValueSet/reason-for-request-1)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|NCTS|
|[Route of Administration](https://healthterminologies.gov.au/fhir/ValueSet/route-of-administration-1)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|NCTS|
|[Service Type](https://healthterminologies.gov.au/fhir/ValueSet/service-type-1)|[AU Core Encounter](StructureDefinition-au-core-encounter.html)|NCTS|
|[ServiceDeliveryLocationRoleType - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base//ValueSet-au-v3-ServiceDeliveryLocationRoleType-extended.html)|[AU Core Location](StructureDefinition-au-core-location.html)|AU Base|
|[Smoking Status](https://healthterminologies.gov.au/fhir/ValueSet/smoking-status-1)|[AU Core Smoking Status](StructureDefinition-au-core-smokingstatus.html)|NCTS|
|[SNOMED CT Additional Dosage Instructions](http://hl7.org/fhir/ValueSet/additional-instruction-codes)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|FHIR|
|[SNOMED CT Administration Method Codes](http://hl7.org/fhir/ValueSet/administration-method-codes)|[AU Core MedicationRequest](StructureDefinition-au-core-medicationrequest.html)|FHIR|
|[Vital Signs Units](https://hl7.org/fhir/R4/valueset-ucum-vitals-common.html)|[AU Core Heart Rate](StructureDefinition-au-core-heartrate.html), [AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html), [AU Core Respiration Rate](StructureDefinition-au-core-resprate.html), [AU Core Body Weight](StructureDefinition-au-core-bodyweight.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html), [AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html)|FHIR|
|[VitalSigns](https://hl7.org/fhir/R4/valueset-observation-vitalsignresult.html)|[AU Core Heart Rate](StructureDefinition-au-core-heartrate.html), [AU Core Body Height](StructureDefinition-au-core-bodyheight.html), [AU Core Blood Pressure](StructureDefinition-au-core-bloodpressure.html), [AU Core Respiration Rate](StructureDefinition-au-core-resprate.html), [AU Core Body Weight](StructureDefinition-au-core-bodyweight.html), [AU Core Waist Circumference](StructureDefinition-au-core-waistcircum.html), [AU Core Body Temperature](StructureDefinition-au-core-bodytemp.html)|FHIR|
{:.grid}



### Code systems

This implementation guide does not define any unique code systems. The code systems used in this guide are defined in the base FHIR specification, [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/terminology.html), or [NCTS](https://www.healthterminologies.gov.au/integration/R4/fhir/metadata).  

The list below shows the code systems used in the value sets above.

|CodeSystem|ValueSet where used|Published|
|---|---|---|---|
|[ActCode AU](https://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-au-v3-ActCode.html)|[ActEncounterCode - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v3-ActEncounterCode-extended.html)|AU Base|
|[ActCode](https://terminology.hl7.org/5.3.0/CodeSystem-v3-ActCode.html)|[ActEncounterCode](https://terminology.hl7.org/5.5.0/ValueSet-v3-ActEncounterCode.html)|FHIR|
|[AddressUse](http://hl7.org/fhir/address-use)|[AddressUse](http://hl7.org/fhir/ValueSet/address-use)|FHIR|
|[AddressType](http://hl7.org/fhir/address-type)|[AddressType](http://hl7.org/fhir/ValueSet/address-type)|FHIR|
|[AdministrativeGender](https://hl7.org/fhir/R4/codesystem-administrative-gender.html)|[AdministrativeGender](https://hl7.org/fhir/R4/valueset-administrative-gender.html)|FHIR|
|[AllergyIntolerance Clinical Status Codes](https://hl7.org/fhir/R4/valueset-allergyintolerance-clinical.html)|[AllergyIntolerance Clinical Status Codes](https://hl7.org/fhir/R4/valueset-allergyintolerance-clinical.html)|FHIR|
|[AllergyIntolerance Verification Status](https://hl7.org/fhir/R4/codesystem-allergyintolerance-verification.html)|[AllergyIntolerance Verification Status Codes](http://hl7.org/fhir/R4/valueset-allergyintolerance-verification.html)|FHIR|
|[AllergyIntoleranceSeverity](https://hl7.org/fhir/R4/codesystem-reaction-event-severity.html)|[AllergyIntoleranceSeverity](https://hl7.org/fhir/R4/valueset-reaction-event-severity.html)|FHIR|
|[Australian Immunisation Register Vaccine](https://www.servicesaustralia.gov.au/air-vaccine-code-formats?context=20)|[Australian Immunisation Register Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/australian-immunisation-register-vaccine-1)|NCTS|
|[Australian Indigenous Status](https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1)|[Australian Indigenous Status](https://healthterminologies.gov.au/fhir/ValueSet/australian-indigenous-status-1)|NCTS|
|[Australian States and Territories](https://healthterminologies.gov.au/fhir/CodeSystem/australian-states-territories-1)|[Australian States and Territories](https://healthterminologies.gov.au/fhir/ValueSet/australian-states-territories-2)|NCTS|
|[Condition Category Codes](https://hl7.org/fhir/R4/codesystem-condition-category.html)|[Condition Category Codes](https://hl7.org/fhir/R4/valueset-condition-category.html)|FHIR|
|[Condition Clinical Status Codes](https://hl7.org/fhir/R4/codesystem-condition-clinical.html)|[Condition Clinical Status Codes](https://hl7.org/fhir/R4/valueset-condition-clinical.html)|FHIR|
|[ConditionVerificationStatus](https://hl7.org/fhir/R4/valueset-allergyintolerance-verification.html)|[ConditionVerificationStatus](https://hl7.org/fhir/R4/valueset-condition-ver-status.html)|FHIR|
|[ContactPointSystem](http://hl7.org/fhir/contact-point-system)|[ContactPointSystem](http://hl7.org/fhir/ValueSet/contact-point-system)|FHIR|
|[ContactPointUse](http://hl7.org/fhir/contact-point-use)|[ContactPointUse](http://hl7.org/fhir/ValueSet/contact-point-use)|FHIR|
|[DataAbsentReason](https://hl7.org/fhir/R4/valueset-data-absent-reason.html)|[Australian Pronouns](https://www.healthterminologies.gov.au/integration/R4/fhir/ValueSet/australian-pronouns-1), [Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1), [DataAbsentReason](https://hl7.org/fhir/R4/valueset-data-absent-reason.html)|FHIR|
|[DegreeLicenseCertificate AU](https://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-au-v2-0360.html)|[hl7VS-degreeLicenseCertificate - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v2-0360-extended.html)|AU Base|
|[EncounterStatus](https://hl7.org/fhir/R4/codesystem-encounter-status.html)|[EncounterStatus](https://hl7.org/fhir/R4/valueset-encounter-status.html)|FHIR|
|[EventStatus](https://hl7.org/fhir/R4/codesystem-event-status.html)|[EventStatus](https://hl7.org/fhir/R4/valueset-event-status.html)|FHIR|
|[IdentifierType AU](https://build.fhir.org/ig/hl7au/au-fhir-base//CodeSystem-au-v2-0203.html)|[DVA Entitlement](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-dva-entitlement.html), [hl7VS-identifierType - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v2-0203-extended.html)|AU Base|
|[identifierType]( http://terminology.hl7.org/CodeSystem/v2-0203)|[hl7VS-identifierType - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v2-0203-extended.html)|FHIR|
|[IdentifierUse](https://hl7.org/fhir/R4/codesystem-identifier-use.html)|[IdentifierUse](https://hl7.org/fhir/R4/valueset-identifier-use.html)|FHIR|
|[Location Type (Physical) AU](https://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-au-location-physical-type.html)|[Location Type (Physical) - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-location-physical-type-extended.html)|AU Base|
|[Location Type AU](https://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-au-location-type.html)|[ServiceDeliveryLocationRoleType - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v3-ServiceDeliveryLocationRoleType-extended.html)|AU Base|
|[LocationMode](https://hl7.org/fhir/R4/codesystem-location-mode.html)|[LocationMode](https://hl7.org/fhir/R4/valueset-location-mode.html)|FHIR|
|[LocationStatus](https://hl7.org/fhir/R4/codesystem-location-status.html)|[LocationStatus](https://hl7.org/fhir/R4/valueset-location-status.html)|FHIR|
|[LOINC](https://www.healthterminologies.gov.au/access-clinical-terminology/access-fhir-terminology-resources/code-systems/?ui:filter=loinc)|[Australian Pronouns](https://healthterminologies.gov.au/fhir/ValueSet/australian-pronouns-1), [RCPA SPIA Pathology Reporting](https://healthterminologies.gov.au/fhir/ValueSet/spia-pathology-reporting-1), [Vital Signs](http://hl7.org/fhir/R4/valueset-observation-vitalsignresult.html)|NCTS, FHIR|
|[Medication request intent](https://hl7.org/fhir/R4/codesystem-medicationrequest-intent.html)|[Medication request intent](https://hl7.org/fhir/R4/valueset-medicationrequest-intent.html)|FHIR|
|[MedicationRequest status](https://hl7.org/fhir/R4/codesystem-medicationrequest-status.html)|[Medicationrequest status](https://hl7.org/fhir/R4/valueset-medicationrequest-status.html)|FHIR|
|[NameUse](https://hl7.org/fhir/R4/codesystem-name-use.html)|[NameUse](https://hl7.org/fhir/R4/valueset-name-use.html)|FHIR|
|[Observation Category Codes](https://hl7.org/fhir/R4/valueset-observation-category.html)|[Observation Category Codes](https://hl7.org/fhir/R4/valueset-observation-category.html)|FHIR|
|[Observation Reference Range Meaning Codes](https://hl7.org/fhir/R4/codesystem-referencerange-meaning.html)|[Observation Reference Range Meaning Codes](https://hl7.org/fhir/R4/valueset-referencerange-meaning.html)|FHIR|
|[ObservationStatus](https://hl7.org/fhir/codesystem-observation-status.html)|[ObservationStatus](http://hl7.org/fhir/R4/valueset-observation-status.html)|FHIR|
|[ParticipationType](https://hl7.org/fhir/R4/v3/ParticipationType/cs.html)|[Participant type](https://hl7.org/fhir/R4/valueset-encounter-participant-type.html)|FHIR|
|[PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-pbs-item-external.html)|[PBS Item Codes](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-pbs-item.html)|AU Base|
|[providerRole AU](https://build.fhir.org/ig/hl7au/au-fhir-base/CodeSystem-au-v2-0443.html)|[hl7VS-providerRole - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v2-0443-extended.html)|AU Base|
|[providerRole](https://terminology.hl7.org/5.3.0/CodeSystem-v2-0443.html)|[hl7VS-providerRole - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v2-0443-extended.html)|FHIR|
|[QuantityComparator](http://hl7.org/fhir/quantity-comparator)|[QuantityComparator](http://hl7.org/fhir/ValueSet/quantity-comparator)|FHIR|
|[RoleCode](https://terminology.hl7.org/5.5.0/CodeSystem-v3-RoleCode.html)|[ServiceDeliveryLocationRoleType - AU Extended](https://build.fhir.org/ig/hl7au/au-fhir-base/ValueSet-au-v3-ServiceDeliveryLocationRoleType-extended.html)|FHIR|
|[SNOMED CT (Australian extension)](https://www.healthterminologies.gov.au/access-clinical-terminology/access-fhir-terminology-resources/code-systems/?ui:filter=snomed)|[Adverse Reaction Agent](https://healthterminologies.gov.au/fhir/ValueSet/adverse-reaction-agent-1), [Adverse Reaction Substances and Negated Findings](https://healthterminologies.gov.au/fhir/ValueSet/adverse-reaction-substances-and-negated-findings-1), [Australian Medication](https://healthterminologies.gov.au/fhir/ValueSet/australian-medication-1), [Australian Medicines Terminology (AMT) Vaccine](https://healthterminologies.gov.au/fhir/ValueSet/amt-vaccine-1), [Biological Sex](https://healthterminologies.gov.au/fhir/ValueSet/biological-sex-1), [Clinical Condition](https://healthterminologies.gov.au/fhir/ValueSet/clinical-condition-1), [Clinical Finding](https://healthterminologies.gov.au/fhir/ValueSet/clinical-finding-1), [Clinical Specialty](https://healthterminologies.gov.au/fhir/ValueSet/clinical-specialty-1),  [Encounter Reason Codes](http://hl7.org/fhir/R4/valueset-encounter-reason.html), [Gender Identity Response](https://healthterminologies.gov.au/fhir/ValueSet/gender-identity-response-1), [Healthcare Organisation Role Type](https://healthterminologies.gov.au/fhir/ValueSet/healthcare-organisation-role-type-1), [Indicator of Hypersensitivity or Intolerance to Substance](https://healthterminologies.gov.au/fhir/ValueSet/indicator-hypersensitivity-intolerance-to-substance-2), [PractitionerRole](https://healthterminologies.gov.au/fhir/ValueSet/practitioner-role-1), [Procedure](https://healthterminologies.gov.au/fhir/ValueSet/procedure-1), [Reason for Request](https://healthterminologies.gov.au/fhir/ValueSet/reason-for-request-1), [Route of Administration](https://healthterminologies.gov.au/fhir/ValueSet/route-of-administration-1), [Service Type](https://healthterminologies.gov.au/fhir/ValueSet/service-type-1), [Smoking Status](https://healthterminologies.gov.au/fhir/ValueSet/smoking-status-1), [SNOMED CT Additional Dosage Instructions](http://hl7.org/fhir/ValueSet/additional-instruction-codes), [SNOMED CT Administration Method Codes](http://hl7.org/fhir/ValueSet/administration-method-codes)|NCTS, FHIR|
|[Tags for the Identification of Languages](https://terminology.hl7.org/CodeSystem-v3-ietf3066.html)|[Common Languages in Australia](https://healthterminologies.gov.au/fhir/ValueSet/common-languages-australia-2)|FHIR|
|[Unified Code for Units of Measure (UCUM)](https://terminology.hl7.org/CodeSystem-v3-ucum.html)|[BodyLengthUnits](http://hl7.org/fhir/R4/valueset-ucum-bodylength.html), [BodyWeightUnits](http://hl7.org/fhir/R4/valueset-ucum-bodyweight.html), [Metric Body Length Units](https://healthterminologies.gov.au/fhir/ValueSet/metric-body-length-units-1), [Metric Body Weight Units](https://healthterminologies.gov.au/fhir/ValueSet/metric-body-weight-units-1)|FHIR|
|[v3 Code System ObservationInterpretation](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html)|[Observation Category Codes](https://hl7.org/fhir/R4/valueset-observation-interpretation.html)|FHIR|
|[v3 Code System ParticipationType](https://hl7.org/fhir/R4/v3/ParticipationType/cs.html)|[Participant type](https://hl7.org/fhir/R4/valueset-encounter-participant-type.html)|FHIR|
{:.grid}


---

File: repos/hl7au_SLASH_au-fhir-core/input/pagecontent/variance.md

This version of the AU Core FHIR IG complies with [Version 1.0 of the HL7 Australia FHIR Work Group AU Variance Requirements](https://hl7.org.au/fhir/HL7%20AU%20Variance%20Requirements%20v1.0.pdf).

HL7 Australia published FHIR implementation guides under the governance of the HL7 Australia FHIR Work Group are required to follow specific publishing guidelines:
- **SHOULD** use AU Core profiles
- **SHOULD** use AU Base profiles and extensions

If a FHIR implementation guide cannot comply with an AU Core profile or reuse an AU Base extension, or fails to comply with an AU Base profile, it must document the variance.

The Variance Statement identifies where an HL7 Australia published FHIR implementation guide does not meet the expectations set by AU Base and/or AU Core. It also identifies resources not profiled in AU Base or AU Core, facilitating the FHIR Work Group's assessment for potential further development. Additionally, the Variance Statement page indicates where the HL7 Australia FHIR IG fully complies with AU Base or AU Core.

The Variance Statement undergoes review and assessment by the FHIR Work Group as part of the FHIR IG balloting process. For more details on the requirements of a Variance Statement, refer to [AU FHIR IG Variance Requirements](https://hl7.org.au/fhir/HL7%20AU%20Variance%20Requirements%20v1.0.pdf).


### Variance from AU Base
This implementation guide has no variance (i.e. fully compliant) from AU Base FHIR Implementation Guide version 4.2.2-ci-build ([current](https://build.fhir.org/ig/hl7au/au-fhir-base/)).

#### Additionally Profiled Resources

This implementation guide profiles the following resources that are not profiled in AU Base: 

- Extension
  - [AU Core Sex Assigned At Birth](https://build.fhir.org/ig/hl7au/au-fhir-core/StructureDefinition-au-core-rsg-sexassignedab.html) profiles core FHIR extension [Person Recorded Sex Or Gender](http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender)   


---

