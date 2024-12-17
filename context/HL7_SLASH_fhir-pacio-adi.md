File: repos/HL7_SLASH_fhir-pacio-adi/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────ImplementationGuide-hl7.fhir.us.pacio-adi.json──────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.pacio-adi
canonical: http://hl7.org/fhir/us/pacio-adi
version: 2.1.0
name: PACIOAdvanceDirectiveInteroperability
title: PACIO Advance Directive Interoperability Implementation Guide
status: active
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  
    valueCode: pe
publisher:
  name: HL7 International / Patient Empowerment
  url: http://www.hl7.org/Special/committees/patientempowerment
  email: patients@lists.HL7.org
description: PACIO Advance Directive Interoperability Implementation Guide
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core: 6.1.0
  hl7.fhir.uv.extensions: current
  hl7.terminology: 5.4.0
  us.nlm.vsac:
    uri: 'http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac'
    version: 0.15.0
    id: vsac
parameters:
  show-inherited-invariants: false
  apply-jurisdiction: true
  apply-publisher: true
  path-expansion-params: '../../exp-params.json'
copyrightYear: 2021+
releaseLabel: STU 2
jurisdiction: urn:iso:std:iso:3166#US "United States of America"

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Table of Contents: toc.html
  General Guidance:
    Content Type Overview: content_type_overview.html
    System Use Cases: system_use_cases.html
    Formal Specification: formal_specification.html
    Security, Privacy, and Consent: security_privacy_consent.html
    Signatures: signatures.html
    Search Parameters: search_parameters.html
    Key Terms and Acronyms: key_terms_and_acronyms.html
  Person-Authored:
    PACP User Stories: content_type1_pacp_user_stories.html
    PACP Specification Guidance: content_type1_pacp_guidance.html
    MHAD User Stories: content_type1_mhad_user_stories.html
    MHAD Specification Guidance: content_type1_mhad_guidance.html
  Provider-Authored:
    PMO User Stories: content_type3_pmo_user_stories.html
    PMO Specification Guidance: content_type3_pmo_guidance.html
  Artifacts:
    Profiles: artifacts.html#3
    Extensions: artifacts.html#5
    Terminology: artifacts.html#6
    Search Parameters: search_parameters.html
    Capability Statement: CapabilityStatement-adi.html
    Examples: artifacts.html#8
    Package Dependencies: package_dependencies.html
  Release Notes: change_log.html
  Downloads: downloads.html

pages:
  index.md:
    title: Home
  content_type_overview.md:
    title: General Guidance
  content_type1_pacp_user_stories.md:
    title: User Stories and Personas
  content_type1_mhad_user_stories.md:
    title: User Stories and Personas
  content_type1_mhad_guidance.md:
    title: MHAD Guidance
  content_type1_pacp_guidance.md:
    title: PACP Guidance
  content_type3_pmo_user_stories.md:
    title: User Stories and Personas
  content_type3_pmo_guidance.md:
    title: PMO Guidance
  formal_specification.md:
    title: Formal Specification
  package_dependencies.md:
    title: Package Dependencies
  security_privacy_consent.md:
    title: Security, Privacy, and Consent
  signatures.md:
    title: Signatures
  system_use_cases.md:
    title: System Use Cases
  search_parameters.md:
    title: Recommended Search Parameters
  key_terms_and_acronyms.md:
    title: Key Terms and Acronyms
  artifact_adi.md:
    title: FHIR Artifacts
  change_log.md:
    title: Release Notes
  downloads.md:
    title: Downloads

---

// File: input/pagecontent/artifact_adi.md

ADI FHIR artifacts are clearer to understand when organized in the context of their document types, sections, and components. 


### Profiles

The table below summarizes the relevant profiles and elements by ADI Content Types:

<table border="1">
    <tr>
        <th colspan="3" style="background-color: #DEEBF7; text-align:center; padding: 10px; padding: 10px;"><b>CONTENT TYPE I: Patient-authored Advance Directive Information</b></th>
    </tr>
    <tr style="background-color: #D9D9D9;">
        <th style="padding: 10px;" colspan="1" rowspan="15"><b>PACP Document</b></th>
        <th style="padding: 10px;" colspan="1"><b>Section</b></th>
        <th style="padding: 10px;"><b>Elements or Profile References</b></th>
    </tr>
        <td style="padding: 7px;">header information</td>
        <td style="padding: 7px;">
            <ul>
                <li><i>date</i></li>
                <li><i>type</i></li>
                <li><i>category</i></li>
                <li><i>subject</i></li>
                <li><i>author</i></li>
                <li><i>title</i></li>
                <li><i>custodian</i></li>
                <li><i>text</i></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td style="padding: 7px;">healthcare_agent (LNC 81335-2)</td>
        <td style="padding: 7px;">
            <ul>
                <li><a href="StructureDefinition-ADI-ParticipantConsent.html">ADI Participant Consent</a></li>
                <li><a href="StructureDefinition-ADI-Participant.html">ADI Participant</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PACPComposition.html">ADI PtAuthored Composition</a></td>
        <td style="padding: 7px;"><p>This profile encompasses information that makes up the author’s advance care planning information.</p></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-Participant.html">ADI Participant</a></td>
        <td style="padding: 7px;"><p>This profile represents a person participating in a person's advance directives in some designated capacity such as healthcare agent or healthcare agent advisor.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-ParticipantConsent.html">ADI Participant Consent</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent the author’s consent for an ADI participant such as a healthcare agent or advisor and can include powers granted to, or limitations imposed upon, such persons.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-DocumentationObservation.html">ADI Documentation Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to indicate if additional advance directive documents, such as physician order for life sustaining treatment (MOLST or POLST) or Do Not Resuscitate Order (DNR) exist and a reference to the document.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PersonalInterventionPreference.html">ADI ADI PtAuthored Personal Intervention Preference</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent personal medical intervention preferences under certain health conditions.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-CareExperiencePreference.html">ADI PtAuthored Care Experience Preference</a></td>
        <td style="padding: 7px;"><p>This profile is used to express the author's personal thoughts about something he or she feels is relevant to his or her care experience which can be important to know when planning or delivering his or her care.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PersonalGoal.html">ADI PtAuthored Personal Goal</a></td>
        <td style="padding: 7px;"><p>This profile is a statement that presents the author's personal health goals that are important to be mindful of when planning his or her care.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PersonalPrioritiesOrganizer.html">ADI Personal Priorities Organizer</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent a set of personal goals, preferences or care experiences in a preferred ranked order.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-OrganDonationObservation.html">ADI Organ Donation Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent the author's thoughts about organ donation.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-AutopsyObservation.html">ADI Autopsy Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent the author's thoughts about autopsy.</p></td>
    </tr>
    <tr>    
       <td style="padding: 7px;"><a href="StructureDefinition-ADI-PreferenceCarePlan.html">ADI PtAuthored Care Plan</a></td>
        <td style="padding: 7px;"><p>The Preference Care Plan is a means for an individual to express their goals and preferences under certain circumstances that may be pertinent when planning his or her care.</p></td>
    </tr>
    <tr>    
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-Provenance.html">ADI Provenance</a></td>
        <td style="padding: 7px;"><p>Advance Directive Interoperability Provenance based on US Core to capture, search and fetch provenance information associated with advance directive interoperability data.</p></td>
    </tr>
    <tr>
        <th colspan="4" style="background-color: #9DC3E6; text-align:center; padding: 10px; padding: 10px;"><b>CONTENT TYPE II: Encounter-Centric Patient Instructions</b> <i>(after STU2)</i></th>
    </tr>
    <tr style="background-color: #D9D9D9;">
        <th style="padding: 10px;" colspan="2"><b>Profile Name</b></th>
        <th style="padding: 10px;"><b>Short description</b></th>
        <th style="padding: 10px;"><b>Based On</b></th>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="#">ADI Obligation Instruction</a></td>
        <td style="padding: 7px;"><p>This profile always expresses activities that care providers have been instructed by the person or their healthcare agent to perform.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/consent.html">Consent</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="#">ADI Prohibition Instruction</a></td>
        <td style="padding: 7px;"><p>This profile always expresses activities that care providers have been instructed by the person or their healthcare agent not to perform.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/consent.html">Consent</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="#">Advance Directives Organizer</a></td>
        <td style="padding: 7px;"><p>This profile groups a set of ADI observations documented together at a single point in time and are ONLY relevant during the episode of care being documented.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/list.html">List</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="#">ADI Advance Directives Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to record information about ADI authored by the person which contains goals, preferences, and priorities for care.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/observation.html">Observation</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="#">ADI Advance Care Planning Intervention</a></td>
        <td style="padding: 7px;"><p>This profile is used to record a planned intervention that will involve reviewing and verifying a person’s goals, preferences or priorities for treatment or will involve educating and supporting a person on establishing or modifying his or her ADI.</p></td>
        <td style="padding: 7px;"><a href="https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html">US Core Procedure</a></td>
    </tr>
    <tr>
        <th colspan="4" style="background-color: #478FD1; text-align:center; padding: 10px; padding: 10px;"><b>CONTENT Type III: Portable Medical Orders (PMO)</b> <i>(STU2)</i></th>
    </tr>
    <tr style="background-color: #D9D9D9;">
        <th style="padding: 10px;" colspan="2"><b>Profile Name</b></th>
        <th style="padding: 10px;"><b>Short description</b></th>
        <th style="padding: 10px;"><b>Based On</b></th>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PMOComposition.html">ADI PMO Composition</a></td>
        <td style="padding: 7px;"><p>This profile encompasses information that makes up a practitioner's portable medical order.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/composition.html">Composition</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PMOCarePlan.html">ADI PMO Care Plan</a></td>
        <td style="padding: 7px;"><p>This profile is used to specify the plan of care that represents the persons wishes, preferences, and experiences as documented in the PMO.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/careplan.html">Care Plan</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PMOServiceRequest.html">ADI PMO ServiceRequest</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent a practitioner authored portable medical order.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/servicerequest.html">Care Plan</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PMOHospiceObservation.html">ADI PMO Hospice Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent a finding that the individual is under hospice care.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/observation.html">Observation</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PMOParticipantObservation.html">ADI PMO Participant Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent the portable medical orders participant observation.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/observation.html">Observation</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="StructureDefinition-ADI-PMOReviewObservation.html">ADI PMO Review Observation</a></td>
        <td style="padding: 7px;"><p>This profile is used to represent the review status of the portable medical order.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/observation.html">Observation</a></td>
    </tr>  
    <tr>
        <td style="padding: 7px;">ADI Consent for Portable Medical Orders</td>
        <td style="padding: 7px;"><p>This profile is used to express the person, or their healthcare agent’s, consent that is not bound by an encounter.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/consent.html">Consent</a></td>
    </tr>
    <tr>
        <td style="padding: 7px;">ADI Consent for DNR Orders</td>
        <td style="padding: 7px;"><p>This profile is used to express the patient’s or healthcare agent consent that is not bound by an encounter.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/consent.html">Consent</a></td>
    </tr>
    <tr>
        <th colspan="4" style="background-color: #FFF2CC; text-align:center; padding: 10px; padding: 10px;"><b>Sharing Documents</b></th>
    </tr>
    <tr style="background-color: #D9D9D9;">
        <th style="padding: 10px;" colspan="2"><b>Name of Profile to be developed</b></th>
        <th style="padding: 10px;"><b>Short description</b></th>
        <th style="padding: 10px;"><b>Based On</b></th>
    </tr>
    <tr>
        <td style="padding: 7px;"><a href="#">ADI Consent to Share</a></td>
        <td style="padding: 7px;"><p>This profile is used to enable someone else to act on their behalf if they are unable to do so themselves.</p></td>
        <td style="padding: 7px;"><a href="http://hl7.org/fhir/R4/consent.html">Consent</a></td>
    </tr>
</table>


#### Globals Profiles

{% include globals-table.xhtml %}

---

// File: input/pagecontent/change_log.md

**Change log page for release notes**

### Support for Portable Medical Orders (PMO)
*Insert list of new PMO-related artifacts*

### Menu re-organization

### Mental Health Advance Directive (TBD)

### etc...insert more feature enhancements



---

// File: input/pagecontent/content_type_overview.md


This section provides additional guidance on the relationship between the associated profiles and the structure of the interoperable advance directive document.


<a name="content_types">

### ADI Content Types

There is a very important distinction for the three types of ADI content that will be covered in this IG. Below is a description of each type of content that will be covered by the ADI FHIR IG with versions.

<p>&nbsp;</p>
<table>
    <tr>
        <th width="50">&nbsp;</th>
        <th colspan="2" style="background-color:#DEEBF7; border: 1px solid black; vertical-align: middle; padding: 5px"><p style="font-size: 14px;"><b>Type 1: Person-Authored Advance Directive Information</b></p></th>
    </tr>
    <tr><td width="50">&nbsp;</td>
        <td width="25">&nbsp;</td>
        <td>
            <ul>
                <li>Person-authored information</li>
                <li>Used as a tool for sharing an individual’s medical treatment and intervention goals, preferences, and priorities (GPP)</li>
                <li>Provides guidance that a person would want known to inform treatment and care planning during a potential future medical emergency, in the case where the patient is unable to communicate with caregivers and medical personnel</li>
                <li>There is NO “contract” between the author (patient) and any other party involved in the future medical emergency that the GPP is required to be followed (i.e., no offer or acceptance, no consideration, no consequences for failure to follow the patient’s directives)</li>
            </ul>
        </td>
    </tr>
    <tr height="15"><td colspan="3">&nbsp;</td></tr>
    <tr>
        <th width="50">&nbsp;</th>
        <th colspan="2" style="background-color:#9DC3E6; border: 1px solid black; vertical-align: middle;  padding: 5px"><p style="font-size: 14px;"><b>Type II: Encounter-Centric Instructions</b></p></th>
    </tr>
    <tr><td width="50">&nbsp;</td>
        <td width="25">&nbsp;</td>
        <td>
            <ul>
                <li>Clinician or Practitioner-authored</li>
                <li>Instructions are related to the current, immediate episode of care</li>
                <li>The patient, or their healthcare agent, provides direct input in the creation of the instructions which specify decisions that have been made about treatments that may, or may not be, utilized during a medical emergency occurring within the current episode of care.</li>
            </ul>
        </td>
    </tr>
    <tr height="15"><td colspan="3">&nbsp;</td></tr>
    <tr>
        <th width="50">&nbsp;</th>
        <th colspan="2" style="background-color:#478FD1; border: 1px solid black; vertical-align: middle;  padding: 5px"><p style="font-size: 14px;"><b>Type III: Portable Medical Orders for Life-Sustaining Treatments</b></p></th>
    </tr>
    <tr><td width="50">&nbsp;</td>
        <td width="25">&nbsp;</td>
        <td>
            <ul>
                <li>Practitioner-authored</li>
                <li>A set of medical orders intended to follow a patient and be available across the continuum of care</li>
                <li>The patient, or their healthcare agent, provides direct input in the creation of the orders.</li>
                <li>These orders are used to document a provider’s orders for, or preferences against, treatments that are to be utilized during a future medical emergency that would necessitate life-sustaining treatment and interventions, and are based on the patient’s expressed goals, preferences, and priorities for such care.</li>
            </ul>
        </td>
    </tr>
</table>

<p align="center">
    <img src="./ADI_types_overview.png" alt="ADI Types Overview" style="width: 80%; float: none; vertical-align: middle;"/>
</p>

<br clear="all" />

The current version, STU2, of this ADI with FHIR IG covers the use of RESTful API interactions for creation, sharing, query/access, and verification of advance directive information between systems.  This IG is not intended to cover medical intervention goals, preferences, priorities for individuals who are not able to create and document their own advance healthcare decisions.


<blockquote class="stu-note">
    <p>
    STU2 supports only Person-authored Advance Directives (ADI Content Type 1) and Portable Medical Order (ADI Content Type 3) documents. Future versions of this FHIR IG will address encounter-centric patient instructions, Content Type 2.
    </p>
</blockquote>

### Structure and Resource Relationships

Advance healthcare decision documents may take several forms, including scanned PDF documents, CDA documents, other binary documents, as well as native FHIR documents (using the `Composition` and other ADI-specific profiled FHIR resources). This guide defines the interoperable guidance necessary to support creation, update, query, and access to all of these types and other potential ADI document types (through encoding in a `Binary` resource). Today, most of these documents are shared through scanned images housed in EMRs, EHRs and other systems.

This implementation guide is designed to guide a range of digitization levels, ranging from scanned documents to fully discrete FHIR documents. These different types of ADI data can be more digitized than others within same document by its representation as a FHIR `Composition` resource. This is described in more detail in the [ADI FHIR Document Structure](content_type_overview.html#adi-fhir-document-structure) section.

The diagram below further illustrates how these documents are organized. The FHIR `DocumentReference` resource is used for "indexing" of documents, similar to the way a library uses a card catalog to index books based on different search criteria, for example, by title, author, date, or classification code.  The DocumentReference can be used in the same way for searching and finding documents with specific attributes such as type of document, subject (e.g., patient), author, dates.  These attributes are provided in the metadata of the DocumentReference so that the actual documents do not have to be accessed for most common searches.  A complete list of search capabilities on DocumentReference can be found in the [Search Parameters](search_parameters.html#adi-documentreference-documentreference) section.

<p align="center">
    <object data="ADI_profile_resource_relationships2.svg" type="image/svg+xml" width="70%"></object>
</p>

Digital signatures are defined as optional in this guide, for a myriad of factors including maturity of systems that can create and exchange digital ADI. If supported by a Content Creator system, the digital signature will be a captured in a `Binary` resource that is referenced by an additional `DocumentReference` resource.

<blockquote class="stu-note">
    <p>
    There is movement within the FHIR community to move towards using the Provenance resource as a standard way to apply a digital signature to a document in FHIR.  The signature within the Provenance resource would be used to encrypt the binary (the actual document itself), not the DocumentReference.  A future version of the implementation guide will be updated to follow the standard FHIR guidance on signatures when it is finalized.
    </p>
</blockquote>

### ADI FHIR Document Structure

ADI native documents using FHIR are instances of the `Bundle` resource with the `type` = `document`. The document should have all content contained within the Bundle with no external references except for the references to external documents in the [DocumentationObservation](StructureDefinition-ADI-DocumentationObservation.html) through the `focus` data element. FHIR `Bundle` documents consist of multiple entry resources within it, with the first entry being a `Composition` resource. The `Composition` resource acts as the header and organizational construct. It contains information about the document such as the category of document, dates, and references to the various participants of the document, as well as document sections used to categorize or organize the contained entries. 

This structure at the highest level is common to all ADI content types. Additional FHIR representation requirements will depend on:
* the form of advance directive document
* the ADI content type

Reference the IG section, [Advance Directive Structure Requirements](formal_specification.html#advance-directive-document-structure-requirements), for further guidance.


<!-- 
#### ADI Content Type 2 Document Structure

<blockquote class="stu-note">
    <p>
    Content Type 2 is out of scope for the PACIO ADI STU2 publication. A brief description is provided for completeness.
    </p>
</blockquote>

Content Type 2, Episode-Centric Patient Instructions, are used when a person is about to undergo a medical procedure during which there is the potential need to deploy life-sustaining treatments. This type of ADI information can also be used when a person is about to have an inpatient stay, or a stay at a nursing or rehab care facility, where the care delivery team asks the individual to make decisions about medical treatments they do or do not want, should circumstances arise when these decisions need to be made and the individual’s choices would need to be taken into consideration. A person may make these decisions for his or her self, and is sometimes the case if the person cannot make these decisions, the healthcare agent may decide. These medical treatment decisions are made in the present and ONLY apply to the current episode of care. They are instructions provided by the person or their surrogate decision-maker. These instructions are closely related to advance directives, in that they say, if x happens, then do y. Or, if x happens, do not do y. For this reason, these kinds of instructions and prohibitions are often recorded with a person’s advance directives. However, they are not advance directives because they represent treatment instructions that ONLY apply to the current episode of care. These instructions are considered obligation or prohibition instructions, provided by the person or their surrogate decision-maker, and authored by a practitioner.
 -->

#### Clause Extension
Advance directive documents often contain additional information, or clauses, related to specific areas of the document. This may include things like additional observations about which named healthcare agent is to be primary versus back-up, or a healthcare agent has been selected, or a statement by the author of the document that is felt to be important to the overall contents, and other information that provides context to the data otherwise expressed in the sections or entries of an ADI document. To support this information this guide has defined a [Clause extension](StructureDefinition-adi-clause-extension.html) to all of the Composition sections and various profiles and elements.




---

// File: input/pagecontent/content_type1_mhad_guidance.md


### Document Structure

<blockquote class="stu-note">
    <p>
    The MHAD document structure is in an early stage with a primary focus on specifying the MHAD metadata with an unstructured advanced directive attached. We welcome feedback informing the structured representation of mental health sections. 
    </p>
</blockquote>

Structurally, MHAD shares the same ADI header as the PACP document. It differs in the related clauses. A summary of the document structure is shown below:

<p align="center">
    <img src="./document_structure_adi_pacp_mhad.png" alt="Mental Health Advance Directive Document Structure" style="width: 100%; float: none; vertical-align: middle;"/>
</p>

<br clear="all" />




---

// File: input/pagecontent/content_type1_mhad_user_stories.md

Mental health advance directives are legal documents that allow individuals to specify their preferences for mental health treatment in advance, in case they later become unable to make these decisions themselves due to mental illness. These directives can outline what types of treatments a person does or does not want, including medications, hospitalization, and therapies. They can also appoint a specific person, known as a healthcare proxy or agent, to make decisions on their behalf.

The main purposes of a mental health advance directive are to ensure that an individual’s treatment preferences are respected and followed during periods when they might not be able to communicate their wishes due to their mental health condition. This can provide reassurance to both the individual and their family, and can also help in preventing conflicts or confusion about the best course of action during a crisis.

The specifics of how to create and implement a mental health advance directive can vary by jurisdiction, so it is important to consult local laws and possibly seek legal advice when considering creating one.






---

// File: input/pagecontent/content_type1_pacp_guidance.md

### ADI Content Type 1 Document Structure

The ADI Content Type 1 document defines 7 sections:
1. Healthcare Agent - Healthcare agents, healthcare agent advisors, and consent by the subject regarding the stated designees’ roles, powers, and limitations.
2. Goals, Preferences, and Priorities for Certain Conditions – Preferences to be used in treatment or care planning that express a person’s goals, preferences, and priorities for care to be considered under specific situations or conditions.
3. Goals, Preferences, and Priorities Personal Care Experience – Characteristically these concepts express a person’s priorities for Quality of Life and the related care delivery experiences, personal goals, and preferences for that experience, which can be further grouped and placed into a Personal Priorities Organizer.
4. Goals, Preferences, and Priorities Upon Death - Goals, preferences, and priorities a person expresses for those events that occur at the time of, or soon after, their death.
5. Additional Documentation - Observations regarding the existence of other advance directive related information.
6. Witness & Notary - References and information regarding witnesses and notary.
7. Administrative Information - Administrative information associated with the personal advance care plan and/or advance directive information.

<p align="center">
    <img src="./document_structure_adi_pacp.png" alt="Person-authored Advance Directive Document Structure" style="width: 100%; float: none; vertical-align: middle;"/>
</p>

The content in these categories of advance directive could include, but are not limited to:
* Healthcare agent designation
* Antibiotics administration preference
* Artificial nutrition and hydration administration preference
* Intubation and ventilation procedure preference
* Resuscitation procedure preference
* Diagnostic testing procedure preference
* Preferences relating to palliative and supportive care
* Preferences relating to hospice care at the end of life
* Organ donation preference
* Death arrangement preference
* Religious, spiritual, cultural or faith-based values that are important to the individual receiving care
* Specific individuals or contacts to notify, likes & joys, dislikes & fears, and various messages or information to be made available

Content type 1 also includes identifying the presence of any type of Portable Medical Order (PMO) such as a POLST or MOLST, and orders such as Do Not Resuscitate (DNR) orders. It also includes identifying other types of person-authored ADI that might exist outside of the document being reviewed.  It does not include the specifics of the structured information content of other PMO and/or DNR documents, but instead creates awareness as to the presence of the documents.


---

// File: input/pagecontent/content_type1_pacp_user_stories.md


### Create in a digital form and make available for sharing and accessing advance directive information

#### Example Persona

Betsy Smith-Johnson is a 73 year-old female who lived in Texas. In 2015, just before her 65th birthday, she saw her Primary Care Physician (PCP) in Texas who recommended she complete an Advance Directive before her upcoming Annual Wellness Visit.  She completed a paper Texas Living Will form by hand and obtained the wet signatures of two witnesses, which she then uploaded to her account in a consumer-facing application, MyExampleAD.

Betsy uses a consumer facing tool to create a digital advance directive or upload a scanned copy of her paper advance directive document. This tool may integrate with any customer-facing application, including but not limited to an EHR or a specialized care application. Her interoperable digital advance directive information is made available by being stored in a registry/repository/HIE/QHIN/EHR.

Betsy then shares her advance directive information with her son Charles, her primary healthcare agent (HCA) her daughter Debra, her first Alternate HCA, and her primary care physician via the MyExampleAD application. That way, if either Charles or Debra are contacted by a treating provider in an emergency, they can make her advance directive accessible to inform treatment. 


**NOTE:** This IG makes no comment as to how EHRs should be architected, as this is beyond the scope of a FHIR implementation guide.

#### Workflow Representation

<img src="./type1_patient_story_1a.svg" alt="Patient Story 1a" style="width: 100%; float: none; align: middle;"/>
<br clear="all" />

#### FHIR Representation

The example AD document for Betsy Smith-Johnson is represented as a [here](Bundle-Example-Smith-Johnson-Bundle1.html). 


 


---

// File: input/pagecontent/content_type1_pacp.md

### Introduction 
<p>
TBD for patient-authored advance directives.
</p>

---

// File: input/pagecontent/content_type3_pmo_guidance.md

### ADI Content Type 3 Document Structure

Content Type 3, are Portable Medical Orders (such as a DNR and/or POLST/MOLST orders). These documents tell other healthcare professionals what the treatment intervention preferences are for a person, and are usually intended to be created when there is an expectation of a limited life-expectancy.  Portable medical order documents are authored by practitioners, not patients, and are legal physician orders. They do not document goals, preferences, and priorities that a patient intends to be referenced as guidance when making care decisions but instead focus on medical treatment intervention decisions that already have been made so as to guide treatment interventions.

All doctors, emergency medical professionals, and other healthcare professionals, must follow these portable medical orders as the person moves from one location to another (hospital, care facility, home, etc.), unless another practitioner examines the person, reviews the orders with the person or their healthcare agent, and a decision is reached that changes to the orders are warranted or desired. In an emergency situation, life-sustaining procedures that are normally required of emergency response personnel will be overridden by the contents of portable medical orders.

Depending on the state, portable medical orders may be known by any of the following names:
* MOLST (Medical Orders for Life Sustaining Treatment)
* POLST (Physician Orders for Life Sustaining Treatment)
* MOST (Medical Orders for Scope of Treatment)
* POST (Physician Orders for Scope of Treatment)
* TPOPP (Transportable Physician Orders for Patient Preferences)
* Out-of-hospital Do Not Resuscitate (DNR) Orders
* DNAR (Do Not Attempt Resuscitation) or AND (Allow Natural Death) Orders

Portable medical orders are not advance directives and should not be confused with them:

1. PMOs are treatment orders written by practitioners.
2. Episode-centric obligation and prohibition instructions written by clinicians and practitioners, not people like advance directives are.
3. PMOs are instructions given by the person or their healthcare agent to a practitioner, who then creates legal orders to carry out those treatment decisions.

These are important distinctions to understand.

Structurally, the document structure shares the same ADI header as the PACP document and includes sections specific to the portable medical order (PMO):


<p align="center">
    <img src="./document_structure_adi_pmo.png" alt="Portable Medical Order Document Structure" style="width: 100%; float: none; vertical-align: middle;"/>
</p>

<br clear="all" />

---

// File: input/pagecontent/content_type3_pmo_user_stories.md

### Introduction 


#### Example Persona

The following story continues the <a href="type1_user_stories_and_personas.html">Content Type 1 user story</a> for patient-authored advance directive.

Five years after Betsy Smith-Johnson creates her ADD, in 2020, Betsy moves to Michigan to spend time with her son Charles. She finds a new PCP, Dr. Anita Chu, near her new home in Michigan. With Betsy's consent, Dr. Chu’s queries the AD/ACP/PMO registry & repository for Betsy's advance directives via the practitioner-facing app. Together they review her Texas Living Will, updated Michigan AD, and PACP documents. Dr. Chu suggests that it may be appropriate to complete a PMO, specifically a POLST Model form, to ensure that her GPPs are able to be honored should she require emergency care in her new home state.

Betsy uses a consumer-facing app to upload an updated Michigan AD form with her correct address, to replace the previous version, on December 21, 2020.  The following day she updates her PACP with her new address and revised HCA designations, on December 22, 2020.  The last thing Betsy does in her consumer-facing app is to revoke/cancel the Texas Living Will since it no longer current and she intends for her other ADI documents to inform any future medical care. (MyDirectives)

The updated Michigan AD, updated PACP, and newly revoked/voided Texas Living Will documents/status are updated in the AD/ACP/PMO registry and repository. 


---

// File: input/pagecontent/downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

<ul>
<li><a href="full-ig.zip">Full Specification (zip)</a></li>
<li><a href="definitions.json.zip">JSON Definitions (zip)</a></li>
<li><a href="examples.json.zip">JSON Examples (zip)</a></li>
<li><a href="definitions.xml.zip">XML Definitions (zip)</a></li>
<li><a href="definitions.ttl.zip">Turtle Definitions (zip)</a></li>
</ul>

</div>

---

// File: input/pagecontent/formal_specification.md


This section defines additional requirements and guidance relevant to this guide as a whole. The conformance verbs - **SHALL**, **SHOULD**, **MAY** - used in this guide are defined in [FHIR Conformance Rules](http://hl7.org/fhir/R4/conformance-rules.html).


### System Role Definitions

**Data Sources** are defined as systems that originate advance directive related documents & resources. These systems may be personal health records, clinical records, or even consumer-facing platforms.

**Data Consumers** are defined as systems retrieving or receiving advance directive information for direct use or integration into their application platform (as opposed to acting as a server or intermediary).

**Servers** are defined as systems that make advance directive information available through query or retrieval.

### Claiming Conformance to an ADI Profile
#### To claim conformance to a profile in this guide;

**_Data Sources:_**

**SHALL** support creating resources that conform to resource and profile requirements included in the [ADI Capability Statement](CapabilityStatement-adi.html) capability expectations (capabilitystatement-expectation extension with valueCode = SHALL).

**SHALL** populate all profile data elements that have a minimum cardinality >= 1 and meet all other basic FHIR conformance requirements (e.g. terminology binding requirements)

**MAY** assert missing information by using an appropriate value set code where allowed or by using a (dataAbsentReason extension)http://hl7.org/fhir/r4/extension-data-absent-reason.html for elements that are not marked as required (cardinality 0..*)

**SHOULD** send all elements defined in the profiles if captured in the system in a way that can be shared and do so as codified and as structured as possible (in addition to meeting the [CodeableConcept](#must-support-of-codeableconcept-text-elements) and [resource](#must-support-of-resource-text-elements) human readable text requirements). 

**SHALL** meet the requirements identified in the definition of Must Support elements.


**_Data Consumers:_**

**SHALL* meet the requirements identified in the definition of Must Support elements.


**_Servers:_**

**SHALL** include a CapabilityStatement that has a CapabilityStatement.instantiates value with the canonical URL of the [ADI Capability Statement](CapabilityStatement-adi.html).

**SHALL* meet the [ADI Capability Statement](CapabilityStatement-adi.html) capability expectations.

**SHALL** reliably provide the information completely in the form in which it was received.  

### Must Support

Profiles used by or inherited by this guide that are defined in other implementation guides, inherit the definition of `Must Support` from their respective guides for elements which they define as Must Support.

#### Data Source System Requirements

Data Sources **SHALL** be capable of populating the data element for profiles the system is claiming conformance to. In other words, the system must be able to demonstrate the population and communication of the element if the profile is supported by that system, but it is acceptable to omit the element if the system doesn't have values in a particular instance. A system that is incapable of ever sharing the element for a required profile, as defined in the [ADI Capability Statement](CapabilityStatement-adi.html) is considered to be non-conformant to this implementation guide.
For example: If a system only purports to support scanned documents, the system will have to support the Must Support elements for the DocumentReference and other supportive profiles, but would not need to support a FHIR document, which includes the Composition resource, or any related Must Support elements. 

 

The DataAbsentReason extension **MAY** be used on Must Support elements that are not available, but **SHALL NOT** use them in place of meeting the Must Support requirement (Meaning that the system must be capable of producing the profiled resource with the element.)

 

#### Data Consumer System Requirements

Data Consumers **SHALL** be capable of rendering the narrative resource level text and Composition.section.text elements marked as Must Support.   

Data Consumers **SHALL** be capable of processing resource instances containing conformant Must Support data element without generating an error or causing the application to fail.

Data Consumers **SHALL** interpret missing Must Support data elements within resource instances as not being present or not deemed to be shareable with the Data Consumer for privacy or other business reasons.

Data Consumers **SHALL** be able to process resource instances containing data elements asserting missing information. Data Consumers are not required to process assertions of missing data. Assertion of missing information may be expressed using an appropriate value set code where allowed or using a [dataAbsentReason extension](http://hl7.org/fhir/r4/extension-data-absent-reason.html) for elements that are not marked as required (cardinality 1..X).

 

#### Notable differences from US Core Conformance and Must Support Requirements

Data Sources may assert missing information for data elements without the need of this guide explicitly stating where it is allowed.

Data Consumers must be capable of displaying resource level text elements marked as Must Support.

Servers must be able to reliably provide the information completely in the form in which it was received.

**NOTE:** Elements marked as Must Support are relevant for **the resources/profiles that a system purports to support**. Systems are allowed to include additional data - and receivers (servers and consumers) **SHOULD NOT** reject instances that contain unexpected data elements if those elements are not modifier elements. However, data sources **SHALL NOT** expect data consumers to store, process, or display the data.

### Must Support of CodeableConcept Text Elements

The area of advance directive interoperability is relatively new and codes capturing the concepts related to advance directives are not well established or well known. This implementation guide provides several codes for expressing this information but specifies extensible bindings to use other code systems where necessary. These code systems may also not be well-known. 
Additionally, there are not widely accepted universal or national for standards for capturing this information. Different scopes of use and jurisdictions capture and organize this information in different ways. As such, it is important for data sources to capture this information as it is presented and for data consumer systems to be able to present it the same way to users. 

To that end, several `CodeableConcept` `text` data elements are marked as Must Support. 

Per the FHIR Standard for [Using Text in CodeableConcept](https://www.hl7.org/fhir/datatypes.html#CodeableConcept): 
> The `text` is the representation of the concept as entered or chosen by the user, and which most closely represents the intended meaning of the user or concept. Very often the `text` is the same as a `display` of one of the codings. One or more of the codings may be flagged as the user selected code - the code or concept that the user selected directly.

In some cases a code may not exist for a particular concept, in such cases, it is possible to provide a free text only representation of the concept in the `CodeableConcept` `text` element without any 'coding' elements present.

For example, using text only, the `Goal.category` element would be:

    "valueCodeableConcept": {
        "text": "Free text concept description"
    }

### Must Support of Resource Text Elements

Because advance directive interoperability is relatively new and there are not any widely accepted universal or national for standards for capturing this information, advance directives may be represented in many different ways. It is important that this information be communicated as it is meant and that it is received and viewable in that same manner. 

To address this need, most of the profiles in this implementation guide require the resource instance's `text` element (cardinality `1..1`).

The `text` element of a resource is a [Narrative](http://hl7.org/fhir/R4/narrative.html#Narrative) data type. The `status` element of this data type indicates whether the text is generated by a system based on the structured data in the resource or if it contains additional information. The `status` element is required. 

For the purposes of this implementation guide, it is expected that most implementations will have resource instances that have additional data in the `text` than is captured in the structured data. When that is the case, the narrative `text.status` **SHALL** be `additional`.

### Document Bundles and Constituent Resources

<!--[TODO]--> 
This guide requires the interoperability of Advance Directive Information through the use of wholly contained documents as part of its use case. While it is required that this data be made interoperable as a collection of Advance Directive Information in document Bundles, systems may decide to make use of the constituent resources as separate resources for additional uses and purposes, such as use in support of Clinical Decision Support. 

### Advance Directive Document Structure Requirements

Advance directive documents may take several forms including scanned PDF documents, CDA documents and native FHIR documents. This guide defines interoperability to support any number of types.

All documents, regardless of format are saved in the `Binary` resource and are available through the `Binary` endpoint. Further guidance on representing each document attachment type is provided below.

#### Advance Directive Scanned PDF Structure Requirements

Scanned PDF documents are represented as a base64 encoded attachment with `DocumentReference.content.attachment.contentType` set to "application/pdf".

An example of this representation is shown in the resource snippet below:

```
"content": [{
    "attachment": {
        "contentType": "application/pdf",
        "data" : "JVBERi0xLjcKJeLjz9MKNSAwIG9i....etc"
    }
}]
```

#### Advance Directive CDA Document Structure Requirements

CDA attachments **SHALL** align with the [HL7 CDA® R2 Implementation Guide: Personal Advance Care Plan (PACP) Document, Release 1 STU3 - US Realm](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=434) specification:

* Set the FHIR `DocumentReference.content.attachment.format.system` element to "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem" 
* Set the FHIR `DocumentReference.content.attachment.format.code` element to one of two options depending on the CDA format:

| Format              | DocumentReference.content.format.code               |
| ------------------- | --------------------------------------------------- |
| Structured Body     | urn:hl7-org:sdwg:pacp-structuredBody:1.3.1          |
| Non-structured Body | urn:hl7-org:sdwg:pacp-nonXMLBody:1.3.1              |
{: .grid }

An example of this representation is shown in the resource snippet below:

```
"content": [{
    "attachment": {
        "contentType": "application/cda+xml",
        "url": "Binary/03fdcd6b-4e0f-406e-86ac-6b56bf9ce575"
    },
    "format": {
        "system": "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
        "code": "urn:hl7-org:sdwg:pacp-structuredBody:1.3.1",
        "display": "PACP C-CDA"
    }
}]
```

#### Advance Directive Native FHIR Document Structure Requirements

FHIR native documents **SHALL** be Bundle resources with `type` = `document` and encoded as a `Binary` resource. Documents that are communicated **SHALL** have at least one DocumentReference resource that references the Binary through the `DocumentReference.content.attachment.url` element.

FHIR native documents **SHOULD** have all content contained within the Bundle with no external references except for the references to external documents in the [DocumentationObservation](StructureDefinition-ADI-DocumentationObservation.html).focus. FHIR native documents have internal references between resources (e.g. the Composition resource referencing entry resources). These references **SHALL** be resolved using the `Bundle.entry.fullUrl`. This URL may be a proper URL, but there **SHOULD** be no expectation that the URL resolves outside of the confines of the Bundle. To avoid confusion, it may be desirable to use UUID (e.g. urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7) instead of URLs for the fullUrl. 


### Document Digital Signatures
#### Background
Digital signatures provide trusted signatures, non-repudiation, and they make the signed document tamper-proof. Digital signatures include several capabilities that distinguish them from basic electronic signatures. In much the same way as other document exchange, the use of digital signatures for advance directive document interoperability will depend on the specific scenario, parties involved, and jurisdictional or organizational requirements. There are challenges and costs to using digital signatures that may present an unnecessary barrier to some applications of this implementation guide. Therefore this guide does not require the use of digital signatures, but instead recommend that systems **SHOULD** support digital signatures where possible.

There are a number of options available for signing documents in FHIR. For context, below is a description of a number that were considered for this guide.

The first option is an embedded signature where a FHIR document bundle is digitally signed.  In this method, the digital signature is saved in Bundle.signature. The result is the content and document bundle are included in a single DocumentReference Resource. This approach works for JSON and xml bundles. 

The second option is a detached signature, in which the Binary Resource is digitally signed and saved as a new DocumentReference.  This option results in two DocumentReferences where one DocumentReference has the content and the other contains the digital signature. The DocumentReference with the signature uses DocumentReference.relatesTo.code were the code is signs and DocumentReference.relatesTo.target points to the DocumentReference that contains the content.  The detached signature option supports FHIR Document Bundle, CDA, pdf, and mp3 content. 

The final option uses an enveloped signature. In this option, the content is wrapped in a FHIR Bundle in a JSON object and then encoded to binary. The binary is then signed using JSON Web Signature.  The enveloped signature described only allows for signing of JSON files.

<blockquote class="stu-note">
    <p>
    There is movement within the FHIR community to move towards using the Provenance resource as a standard way to apply a digital signature to a document in FHIR.  The signature within the Provenance resource would be used to encrypt the binary (the actual document itself), not the DocumentReference.  A future version of the implementation guide will be updated to follow the standard FHIR guidance on signatures when it is finalized.
    </p>
</blockquote>

#### Digital Signatures for Advance Directive Interoperability
If digital signatures are supported, the method of signatures this guide specifies is the detached signature. The detached signature approach provides the greatest flexibility of document type support (does not have to be a JSON or even a FHIR encoded document) and enables the ability for clients that do not support or require digital signatures to retrieve and use the data unhampered. The detached signature approach is also aligned with the design and workflows of major US health information networks. 
Systems claiming conformance to this guide that support digital signatures **SHALL** support the detached signature stored in a separate Binary resource and referenced by a DocumentReference resource as described below.

For the detached signature, the digital signature is saved in a Binary resource and pointed to from an additional DocumentReference resource in the `DocumentReference.content.attachment.url`.  This signature DocumentReference links to the advance directive document DocumentReference using `DocumentReference.relatesTo.target` and the code `signs` is used in the `DocumentReference.relatesTo.code` field to identify how this DocumentReference resource relates to the target. 

The cryptographic digital signature is included in the DocumentReference.content as an attachment. The mimeType for the digital signature is Content.attachment.contentType.application/jws for JSON signature and Content.attachment.contentType.xml-signature” for xml signature.  The details of the cryptographic digital signature **SHALL** be a referenced Binary Resource using `url`. 
Below is an example of detached digital signature with the cryptographic digital signature referenced using Binary Resource. 

<p align="center">
    <img src="./digital_signature_reference_example.png" alt="Digital Signature Reference Example" style="float: none; align: middle;"/>
</p>

For further information on signatures, the technology basis behind them, and implementation requirements, please see the section on [Signatures](signatures.html).


### Replacing Documents
At some point it may be necessary for an advance directive document to be replaced or deprecated. The situations and conditions in which a document is replaced or deprecated is dependent on jurisdictional requirements as well as the intent and interests of the actors involved. When a document is replaced or deprecated is beyond the scope of this guide, however, this guide does specify requirements that need to be supported in the event documents need to be replaced or deprecated.

#### Document replacement
When a document is to be replaced, a new DocumentReference is created. The new document points "backwards" to the documentReference it is replacing through the `DocumentReference.relatesTo.target` and a `DocumentReference.relatesTo.code` with a value of `replaces`. The original document then should be marked as replaced by updating the `DocumentReference.status` to the code `superseded`. Ideally the DocumentReference being replaced and the replacing DocumentReference will have matching business identifiers (`DocumentReference.identifier`) to enable direct searching across multiple versions.

Documents can be deprecated through a document replacement that includes a new version indicating that the document is deprecated or otherwise no longer in force.

---

// File: input/pagecontent/index.md

The Advance Directive Interoperability (ADI) FHIR implementation guide (IG) explains how to represent, exchange, and verify a person’s goals, preferences and priorities for medical treatment and interventions regarding future medical care. 

<blockquote class="stu-note">
    <p>
    This is a preliminary draft of STU2, which includes support for portable medical orders for life-sustaining treatment, Content Type 3. This builds upon STU1, which supported only Person-authored Advance Directives (ADI Content Type 1) documents. Future versions of this FHIR IG will address encounter-centric patient instructions, Content Type 2.
    </p>
</blockquote>

### Introduction 
<p>
This ADI implementation guide (IG) describes how to use existing HL7 FHIR® standards to create, update, share, verify, and exchange information about an individual's advance medical goals, preferences, and priorities for care in the event the individual is unable to communicate this information to medical teams for themselves due to a health crisis. The term “advance directive” in this IG does not refer to a specific form, document, or method of memorializing advance healthcare decisions, but is instead an over-arching category.
</p>

<p>
Advance healthcare directives can be categorized into <a href="content_type_overview.html#adi-content-types">three types of information</a>. The current version of this guide addresses Content Type 1: Person-Authored Advance Directive Information and Content Type 3:  Portable Medical Orders for Life-Sustaining Treatment. Subsequent versions of this guide will address the other two types; Content Type 2: Encounter-Centric Patient Instructions (obligations and prohibitions).
</p>
<p>
Included in the content for this FHIR IG are person-authored advance directives and personal advance care plans which comprise Content Type 1, and also cover patient consent information attesting to their designation of a person, or persons, to serve as their healthcare agent. 
</p>

<!-- Removed. Kept for review before ballot
<p>
This initial version defines the minimum conformance requirements for digital representation and exchange of person-authored advance directives and personal advance care plans (e.g. a person’s advance medical treatment and intervention goals, preferences and priorities,  regarding potential future medical care in the event the individual becomes a patient and cannot speak for himself or herself. The intervention preferences may be conditional upon a specific health condition or physical situation. It also defines minimum conformance for the representation of patient consent for the appointment of a healthcare agent or agents, and consent to share advance directive information.
</p>
<p>
A subsequent version of this IG will define the minimum conformance requirements for digital representation and exchange of practitioner-authored encounter-centric patient instructions regarding medical treatment and intervention preferences and priorities that are immediate and apply to the current encounter.
</p>
<p>
A subsequent version of this IG will define the minimum conformance requirements for digital representation and exchange of practitioner-authored advance medical treatment orders. The representation creates a portable record of medical orders regarding specific aspects of life-sustaining medical treatments a patient does or does not want to receive, which could be performed during a potential future medical care event if the patient were to require life-sustaining medical interventions due to a health crisis or emergency. These orders include instructions commonly found in portable medical orders for life-sustaining treatments and may include other orders such as but not limited to Do Not Hospitalize and Do Not Intubate orders.
</p>
-->

### Background

Advance directive interoperability is a complex area that involves many stakeholders. The HL7 workgroup sponsor for this FHIR IG is Patient Empowerment. HL7 co-sponsor workgroups include Patient Care, Community Based Care and Privacy, and Orders & Observations. As part of PACIO’s main goal in improving care transitions, the Post-Acute Care Interoperability (PACIO) Community has adopted this project as a critical use case. The PACIO Community has a strong interest in the topic of advance directive interoperability with FHIR and will support the community engagement and technical FHIR IG development needed for advance directives interoperability. PACIO is supported by MITRE, CMS, ONC and many other stakeholders (clinical, technical, and industry associations).

FHIR profiles have been developed for several existing FHIR resources to represent advance directive Content Type 1 such as: living will, durable medical power of attorney, personal health goals at end of life, care experience preferences, emergency intervention preferences under certain circumstances, and upon death preferences. For more details on advance directive interoperability and content types, refer to the General Guidance section of this IG.

### Project Need
<p>
Systems used to create and update patient-generated advance care plans through a patient-directed process need a way for individuals to communicate information about their advance medical care goals, preferences, and priorities. Individuals need a way to generate and update information related to their advance directives so that their current wishes can inform provider-generated care plans. Interoperable exchange of the advance directive documentation supports more effective sharing of this information across transitions of care and enables practitioners to create person-centered care plans that align with a patient’s values, goals of care, treatment preferences, and quality of life priorities when a patient can no longer communicate for themselves.
</p>

### External drivers

**Note:** The IG was initially developed during the beginning of the COVID-19 pandemic, before vaccines were available and many patients were put on ventilators at hospitals. The narrative below is meant to illustrate a situation where a patient in this case would want their advance directive in place.

The aging population receiving healthcare in skilled nursing facilities and assisted living communities were under forced isolation to reduce the risk of contracting COVID-19. Additionally, due to the pandemic, those requiring medical care  experienced transitions of care without family or a personal advocate to accompany them in order to influence medical care or be at their side; concerns about the viral transmission potential associated with paper advance directive documents further complicate transitions of care. The impact created a sense of disempowerment, isolation, and a disconnection with the world they can no longer safely interact freely with.

<p>
Never before had the availability of verifiable digital advance directive documents been so essential to delivering care.
</p>
<p>
Providers understood that a person’s goals, preferences, and priorities for care were a critical element in a person-centered healthcare system.
</p>
<p>
The role of technology and expanded adoption by the aging population, providers, and care teams brought to the forefront the expectation of seamless accessibility of advance directive information.
</p>

### Audience/Expected Users
<p>
The audience for this IG includes architects and developers of healthcare information technology (HIT) systems in the US Realm that exchange clinical and non-clinical data. Business analysts and policy managers can also benefit from a basic understanding of the use of FHIR profiles across multiple implementation use cases. Finally, Quality Reporting Agencies, Standards Development Organizations (SDOs), Payors, Providers and Patients will benefit from this IG.
</p>

### About the PACIO Project
<p>
The PACIO Project is a collaborative effort to advance interoperable health data exchange between post-acute care (PAC) and other providers, patients, and key stakeholders across health care and to promote health data exchange in collaboration with policy makers, standards organizations, and industry through a consensus-based approach.
</p>
<p>
The primary goal of the PACIO Project is to establish a framework for the development of Fast Healthcare Interoperability Resources (FHIR) technical implementation guides and reference implementations that will facilitate health data exchange through standards-based use case-driven application programming interfaces (APIs).
</p>


### How to read this Guide
This Guide is divided into several pages which are listed at the top of each page in the menu bar.
<ul>
    <li>Home: The home page provides the introduction and background information to set context for the use of the HL7 FHIR® ADI Implementation Guide.</li>
    <li>Table of Contents: A list of the narrative pages and FHIR artifacts in the IG.</li>
    <li>General Guidance: These pages provide overall guidance in using the profiles and transactions common to all ADI content types. 
        <ul>
            <li>Content Type Overview: Content types provide a clear distinction for the three types of advance directive information. A detailed description of each type is provided.</li>
            <li>Patient Stories and Personas: Patient stories and personas give context to the data exchange standards detailed in the technical areas of the IG. They allow the non-technical reader to envision situations in which the IGs provisions would apply, and ensure that the IG meets the intended needs for exchange of this type of information.</li>
            <li>Use Cases: A use case is a list of technical actions or event steps typically defining the interactions between a role and a system to achieve a goal. The actor can be a human or other external system. Technical scenarios that describe systems interactions between technical actors to implement the use case.</li>
            <li>General Guidance: Information about the structure and relationships between the profiles in this guide.</li>
            <li>Formal Specification: Information about conformance to the guide including Must Support requirements, document signatures, and document workflow.</li>
            <li>Security: General security requirements and recommendations for HL7 FHIR® ADI Implementation Guide actors, including authentication, authorization, and logging requirements and guidance.</li>
            <li>Key Terms and Acronyms: A glossary of relevant terms described in advance directives.</li>
        </ul>
    </li>
    <li>Patient-Authored: These sections provide the use cases, personas, and additional guidance specific to patient-authored care preferences (PACP).
        <ul>
            <li>Use Cases and Persona Examples</li>
            <li>PACP-specific guidance</li>
        </ul>
    </li>
    <li>Portable Medical Orders: These sections provide the use cases, personas, and additional guidance specific to portable medical orders (PMO).
        <ul>
            <li>Use Cases and Persona Examples</li>
            <li>PMO-specific guidance</li>
        </ul>
    </li>
    <li>FHIR Artifacts: These sections provide detailed descriptions and formal definitions for all the FHIR artifacts defined in this guide.
        <ul>
            <li>Profiles: This section lists the set of Profiles that are defined in this guide to exchange advance directive information. Each linked Profile page includes a narrative introduction and a formal definition.</li>
            <li>Extensions: This section lists the set of Extensions that are defined in this guide that are used by the IG defined profiles. Each linked Extension  page includes a formal definition.</li>
            <li>Search Parameters and Operations: This section lists the HL7 FHIR® ADI Implementation Guide defined Operations and Search Parameters that are used in ADI transactions.</li>
            <li>Terminology: This section lists the value sets and code system defined for HL7 FHIR® ADI Implementation Guide profiles.</li>
            <li>Capability Statement: The following artifacts define the specific capabilities that different types of systems need to support to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the included capability statements.</li>
            <li>Examples: The section that contains examples of advance directive information that is conformant to the profiles of this guide.</li>
        </ul>
    </li>
    <li>Release Notes: A summary of changes from the PACIO ADI STU1 release.</li>
    <li>Downloads: This page provides links to downloadable artifacts.</li>
</ul>

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Intellectual Property Considerations

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/key_terms_and_acronyms.md


<table border="1">
    <tr>
        <th><b>Term</b></th>
        <th><b>Definition</b></th>
    </tr>
    <tr>
        <td>Advance directives</td>
        <td>An individual's advance medical goals, preferences, and priorities for care in the event the individual is unable to communicate this information to medical teams for themselves due to a health crisis. An advance directive may encompass all of the following: living will, medical power of attorney, combined living will and medical power of attorney.</td>
    </tr>
    <tr>
        <td>ADI</td>
        <td>Advance Directive Interoperability</td>
    </tr>
    <tr>
        <td>Patient Living Will</td>
        <td><p>Clinical information generated by a patient, or a patient agent (proxy), acting in a non-clinical role to provide clinically relevant information. The patient agent may not have a legally defined relationship with the patient (e.g. a close friend).</p>
        <p>These are statutory defined documents (i.e., states). All documents are focused on relevant clinical information as determined by a patient or their proxy related to the wishes for potential future events.</p></td>
    </tr>
    <tr>
        <td>Patient Personal Advance Care Plan (PACP)</td>
        <td><p>This term may be used as either the document or section code for the Personal Advance Care Plan. This term was created for, but is not limited in use to, the HL7 Implementation Guide for CDA Release 2: Personal Advance Care Plan Document (US Realm) Draft Standard for Trial Use Release 1.0.</p>
        <p>It may include patient goals, preferences, and priorities under certain health conditions; patient goals, preferences, and priorities upon death; patient goals, preferences, and priorities for care experience; witness and notary document; and patient healthcare agent.
        </p></td>
    </tr>
    <tr>
        <td>Patient story</td>
        <td><p>Patient stories are fictitious illustrative personal stories that are included to show the personal nature of the information being shared and demonstrate the value of having and sharing personal advance care plan information or, alternatively, the negative outcomes that arise when this information is not available in a high-quality, standardized, sharable digital format.</p>
        <p>Personas are used to model, summarize and communicate research about people who have been observed or researched in some way. A persona is depicted as a specific person but is not a real individual; rather, it is synthesized from observations of many people.
        </p></td>
    </tr>
    <tr>
        <td>Power of attorney</td>
        <td><p>A power of attorney or POA is a legal document which authorizes someone to act on behalf of someone else. The person granting the power of attorney is known as the principal, granter, or donor, while the person authorized to act is called an agent, attorney-in-fact, or attorney. There are many different types of POAs, and each can be further customized to suit the requirements of the granter. In short, it all depends on the content of the contract. Power of attorney documents in LOINC represent a medical or durable power of attorney.</p>
        <p>These are statutory defined documents (i.e., states).  All documents are focused on details related to power of attorney.
        </p></td>
    </tr>
    <tr>
        <td>Use case</td>
        <td>A use case is a list of technical actions or event steps typically defining the interactions between a role and a system to achieve a goal. The actor can be a human or other external system. Technical scenarios that describe systems interactions between technical actors to implement the use case.</td>
    </tr>
</table>

---

// File: input/pagecontent/package_dependencies.md

### Implementation Guide Dependencies

This Implementation Guide is based on [FHIR R4](http://hl7.org/fhir/R4/). Some packages that are listed with R5 were added for FHIR tooling compatibility and does not affect any other PACIO ADI artifact compatibility with FHIR R4.

{% include dependency-table.xhtml %}



---

// File: input/pagecontent/pmo_stories_and_personas.md


### Create in a digital form and make available for sharing and accessing portal medical orders (PMO).


**NOTE:** This IG makes no comment as to how EHRs should be architected, as this is beyond the scope of a FHIR implementation guide.

<!-- <img src="./patient_story_1a.png" alt="Patient Story 1a" style="width: 100%; float: none; align: middle;"/>
<br clear="all" /> -->


---

// File: input/pagecontent/release_notes.md

### Changes from STU1

#### Guidance for Portable Medical Orders (PMO)

#### IG Menu Re-organization

The IG menu structure separates detailed guidance for all AD content types.

#### New guidance on mental health AD

#### Closer Alignment with US Core

The following ADI profiles are now derived from US Core profiles:

* ADI Care Plan

#### Care Plan


---

// File: input/pagecontent/search_parameters.md

### Bundle
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by FHIR resource ID</td>
			<td><code class="highlighter-rouge">GET [base]/Bundle?_id=[id]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Bundle-composition.html">composition</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by reference to a composition</td>
			<td><code class="highlighter-rouge">GET [base]/Bundle?composition=[reference]</code></td>
		</tr>
  		<tr>
			<td><a href="SearchParameter-Bundle-identifier.html">identifier</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by business identifier</td>
			<td><code class="highlighter-rouge">GET [base]/Bundle?identifier=[token]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Bundle-timestamp.html">timestamp</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by a date in time</td>
			<td><code class="highlighter-rouge">GET [base]/Bundle?timestamp=[date]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Bundle-type.html">type</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#code">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by type code</td>
			<td><code class="highlighter-rouge">GET [base]/Bundle?type=[system]|[code]</code></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

### Consent
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="SearchParameter-Consent-id.html">id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by FHIR resource id of a Consent</td>
			<td><code class="highlighter-rouge">GET [base]/Consent/[id]</code></td>
		</tr>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_history/vid</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by historical version number</td>
			<td><code class="highlighter-rouge">GET [base]/Consent/[id]/_history/vid</code></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

### ADI-DocumentReference (DocumentReference)
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="SearchParameter-DocumentReference-id.html">id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by FHIR resource id</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference/[id]</code></td>
		</tr>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_history/vid</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by historical version</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference/[id]/_history/vid</code></td>
		</tr>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by FHIR resource ID</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?_id=[id]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-authenticator.html">authenticator</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by who/what authenticated the document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?authenticator=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-author.html">author</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by who and/or what authored the document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?author=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-category.html">category</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by categorization of document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?category=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-contenttype.html">contenttype</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#string">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by MIME type of the content, with charset etc.</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?contenttype=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-custodian.html">custodian</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by organization which maintains the document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?custodian=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-date.html">date</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by when this document reference was created</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?date=[date]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-description.html">description</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by human-readable description</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?description=[description]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-encounter.html">encounter</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by encounter reference</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?encounter=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-event.html">event</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by main clinical acts documented</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?event=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-facility.html">facility</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by kind of facility where patient was seen</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?facility=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-format.html">format</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Search by format code content rules for the document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?format=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-identifier.html">identifier</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by business identifier of the attachment binary</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?identifier=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-language.html">language</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by human language of the content (BCP-47)</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?language=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-location.html">location</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#uri">uri</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by uri where the data can be found</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?location=[uri]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-patient.html">patient</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by who is the subject of the document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?patient=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-period.html">period</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by time of service that is being documented</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?period=[period]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-related.html">related</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by related identifier or resource</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?related=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-relatesto.html">relatesto</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by target of the relationship</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?relatesto=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-relation.html">relation</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by relation code (replaces | transforms | signs | appends)</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?relation=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-security-label.html">security-label</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by document security-tags</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?security-label=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-setting.html">setting</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by additional details about where the content was created (e.g. clinical specialty)</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?setting=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-status.html">status</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by document reference status code (current | superseded | entered-in-error)</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?status=[status]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-subject.html">subject</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>MAY</strong></td>
			<td>Search by who/what is the subject of the document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?subject=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-DocumentReference-type.html">type</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search by kind of document</td>
			<td><code class="highlighter-rouge">GET [base]/DocumentReference?type=[system]|[code]</code></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

### Patient
<p>
	We strongly recommend using the $match operation in performing a system-to-system query to ensure that the right patient is selected. The Patient.search parameters below may be generally used for subsequent queries once the patient is selected.
	Search parameter requirements for Patient under this IG match those for <a href="https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-patient.html#mandatory-search-parameters">US Core Patient search requirements</a>
</p>
<p>&nbsp;</p>


---

// File: input/pagecontent/security_privacy_consent.md

[//]: #  ## Security, Privacy, and Consent 

### General Considerations

Advance Directive Interoperability (ADI) involves communication of advance directive information across multiple parties including who the information is about, their healthcare agents and identified advisors, and care providers. The author, who is also the person the information is about, needs access to create, modify, remove, and share this information either directly or through an authorized third party. Users of this information are the appointed healthcare agents or advisors, care providers in emergency, intensive, or critical care environments, or others providing longer term care in a skilled nursing or other similar facility.

Advance directive information contains patient specific information, which means that it needs to be protected with proper security and privacy protections to avoid malicious or unintentional exposure of such information. All Advance Directive Interoperability exchanges must be appropriately secured in transit and access limited only to authorized individuals.

The ADI IG focuses on providing a structure to share data and information. Policy, legal, and regulatory differences across states and local areas may impact the workflow and requirements associated with Advance Directives Information. Implementors should review the current context for where this IG is expected to be used to ensure those requirements are met.


#### Security Considerations and Guidance

All implementers of the Advance Directive Interoperability Implementation Guide (IG) **SHOULD** follow the FHIR Security guidance, Security and Privacy Module, and the FHIR Implementer’s Safety Checklist guidance as defined in the FHIR standard where applicable and not otherwise superseded by this Section of the ADI IG.

1.	The FHIR Security specification provides guidance related to communication security, authentication, authorization/access control, audit, digital signatures, attachments, labels, narrative, and input validation. The FHIR security specification is available [here](http://hl7.org/fhir/R4/security.html).
2.	The FHIR Security and Privacy Module describes access control and authorization considerations to protect a FHIR server, how to document permissions granted, and hot to keep records of performed events. The FHIR Security and privacy module can be found [here](http://hl7.org/fhir/R4/secpriv-module.html).
3.	The FHIR Implementer’s Safety Checklist helps implementers be sure that they have considered all the parts of FHIR that impact their system design regarding safety. The FHIR safety check list is available [here](http://hl7.org/fhir/R4/safety.html).

#### Security Requirements

For the purposes of Advance Directive Interoperability, additional security conformance requirements are as follows:

##### Exchange Security

1.	The exchange of information **SHALL** support [Transport Layer Security (TLS) Protocol Version 1.2 (RFC5246)](https://www.rfc-editor.org/rfc/rfc5246) or a more recent version of TLS for transport layer security.
2.	Implementers of this Implementation Guide **SHALL** support [SMART on FHIR STU 2.1 App Launch Framework](http://hl7.org/fhir/smart-app-launch/STU2.1/index.html) and **MAY** support [SMART on FHIR STU 2.1 Backend Services](https://www.hl7.org/fhir/smart-app-launch/STU2.1/backend-services.html).
3.	Implementers of this Implementation Guide **SHOULD** support mutually authenticated TLS.
4.	Server implementations that expect to support browser-based javascript applications SHOULD enable [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) for REST operations. Many client web-based apps use javascript for API calls which requires CORS. However, CORS could present security concerns if not implemented correctly or is not continually updated as new security issues are found and addressed. Implementers of CORS **SHOULD** consider advice about CORS from sources such as [Enable-CORS](http://enable-cors.org/) and [Moesif blog on Guide to CORS Pitfalls](https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/).

##### Authentication and Authorization Requirements

###### SMART App Launch

The following only applies to servers supporting app launch:

1.	Implementations **SHALL** support the FHIR US Core [Patient Privacy and Security requirements](https://hl7.org/fhir/us/core/STU6.1/security.html).
2.	Server systems **SHALL** publish their authorization and token endpoints for discovery in accordance with the SMART App Launch STU2 framework and publicly publish the [Well-Known Uniform Resource Identifiers (URIs)](http://hl7.org/fhir/smart-app-launch/STU2.1/conformance.html) JSON file with scopes defined in the `scopes_supported` property.
3.	Implementations **SHOULD** consider the [SMART on FHIR STU2 Best Practices in Authorization](https://hl7.org/fhir/smart-app-launch/STU2.1/best-practices.html)
4.  Implementation **MAY** support [Health Relationship Trust Profile for User-Managed Access (HEART)](https://openid.net/specs/openid-heart-uma2-1_0.html).
5.  This guide defines the following server requirements for [SMART on FHIR Core Capabilities](https://hl7.org/fhir/smart-app-launch/STU2.1/conformance.html#capability-sets):

    1.  **SHALL** support [Patient Access for Standalone Apps](http://hl7.org/fhir/smart-app-launch/STU2.1/conformance.html#patient-access-for-standalone-apps)
    2.  **SHOULD** support [Patient Access for EHR Launch](http://hl7.org/fhir/smart-app-launch/STU2.1/conformance.html#patient-access-for-ehr-launch-ie-from-portal)
    3.  **SHALL** support [Clinician Access for Standalone Apps](http://hl7.org/fhir/smart-app-launch/STU2.1/conformance.html#clinician-access-for-standalone)
    4.  **SHOULD** support: [Clinician Access for EHR Launch](http://hl7.org/fhir/smart-app-launch/STU2.1/conformance.html#clinician-access-for-ehr-launch)
    5.  In addition to the guidance above, there are additional requirements for other SMART on FHIR capabilities not included above, including:
        <br />
        <table>
            <tr>
                <th style="margin-left: 5px; margin-right: 5px;">Element</th>
                <th style="margin-left: 5px; margin-right: 5px;">Requirement</th>
                <th style="margin-left: 5px; margin-right: 5xpx;">Reason</th>
            </tr>
            <tr>
                <td>sso-openid-connect</td>
                <td>SHALL</td>
                <td>Advance directive information is sensitive information, so authorization using SMART's OpenID Connect profile is required</td>
            </tr>
            <tr>
                <td>scopes</td>
                <td>SHALL</td>
                <td>
                    <table>
                        <tr>
                            <td>openid:</td>
                            <td>Permission to retrieve information about the current logged-in user</td>
                        </tr>
                        <tr>
                            <td>fhirUser:</td>
                            <td>Permission to retrieve information about the current logged-in user</td>
                        </tr>
                        <tr>
                            <td>launch/patient:</td>
                            <td>When launching outside EHR, ask for patient to be selected at launch time</td>
                        </tr>
                        <tr>
                            <td>patient/Patient.read:</td>
                            <td>Permission to read any resource for the current patient</td>
                        </tr>
                        <tr>
                            <td>patient/DocumentReference.*:</td>
                            <td>Permission to access document references for the current patient</td>
                        </tr>
                        <tr>
                            <td>user/Patient.read:</td>
                            <td>Allows the client app to select the patient</td>
                        </tr>
                        <tr>
                            <td>user/DocumentReference.*:</td>
                            <td>Allows the client app to select a document reference</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>context-banner</td>
                <td>SHOULD</td>
                <td>The banner helps provides the patient context for the data</td>
            </tr>
            <tr>
                <td>permission-offline</td>
                <td>SHOULD</td>
                <td>Support for refresh tokens, which allow a session to be extended without repeated logins</td>
            </tr>
        </table>

###### SMART Backend Systems

The following applies to servers that support backend services:

1.  Implementations **SHALL** support the [SMART Backend Services: Authorization Guide](https://hl7.org/fhir/uv/bulkdata/STU1.0.1/authorization/index.html)

<!--  TODO
#### Individual-Authorized Exchange
1.	http://hl7.org/fhir/us/davinci-pdex/Member-AuthorizedOAuth2Exchange.html
-->

#### Privacy Requirement

For the purposes of Advance Directive Interoperability, privacy conformance requirements are as follows:
- Implementers **SHOULD** support data sharing policies with use of the Consent resource.

#### Provenance

1.	Server implementations **SHOULD** support the ability to directly record and/or enable clients to assert (store) provenance associated with advance directive information using the [Provenance](http://hl7.org/fhir/R4/provenance.html) resource.

<!-- TODO Consider US Core requirements
https://www.hl7.org/fhir/us/core/security.html
-->

---

// File: input/pagecontent/signatures.md


### About Signatures

This specification does not require signatures but supports the transmission of signatures if business agreements require them.
{:.bg-info}

Data Consumers may require signatures from a Data Source to attest to the information being exchanged. For example, for a clinician to adequately review and follow a patient's advance directive, the submitted information needs to be signed.[^first][^second]  To comply with these signature requirements, this page documents how to create and verify FHIR Digital Signatures when using advance directives. 
 
Signatures represent different levels of attestation:

- The signature represents a provider or patient signature attesting that the information is true and accurate to the best of their knowledge.
- The signature representing the sending system is a *system-level* attestation by the sending organization that they supplied the information. It is a complete and accurate representation of the shareable information from that system, meeting the requested criteria. This signature does NOT attest that the information is accurate because the system can't make that determination.

Consult with your legal team for questions regarding legal liability associated with sharing and signing data.
{:.bg-warning}

### Electronic Signatures

The term "electronic signature" means an electronic sound, symbol, or process attached to or logically associated with a contract or other record and executed or adopted by a person with the intent to sign the record.[^third]

The various forms of electronic signatures include:
- a typed-out name
- a graphical image that represents a handwritten signature
- a digitized handwritten signature
- digital signature using encryption technology

This guide specifies how to implement digital signatures in the following sections. Specific guidance for other electronic signatures is an implementation detail that is out of scope for this guide.

#### Electronic Signature Example

The electronic signature is a JPG Image that represents this handwritten signature:

{% include img.html img="jh-signature.jpg" %}

### Digital Signatures

*Digital Signatures* are a type of *Electronic signature* that meet the following functional requirements:

1. authentication  - They verify the identity of a person.
2. integrity -  They ensure the signed document has not been altered.
3. non-repudiation - The signer can not dispute their authorship (For example, if there is subsequent legal activity related to the signed document).

Digital Signatures employ encryption technology and a digital certificate issued by a certification authority (CA). The encryption ensures the signee has attested to the integrity of the data. A certificate issued by a CA that the Data Consumer trusts ensures that the Data Consumer can trust that the signature is authentic and non-repudiable.

#### Digital Signature Rules

1. **SHALL** use JSON Web Signature (JWS)(see [RFC 7515])
   JSON Web Signature (JWS) is a means of representing content secured with digital signatures or Hash-based Message Authentication Codes (HMACs) using JSON data structures. Cryptographic algorithms and identifiers used with this specification are enumerated in the separate JSON Web Algorithms (JWA). [^fourth]

    Implementers that support XML must be aware that JSON Web Signatures can only be created and validated in the original native JSON. Transforms to and from XML will invalidate signatures.
    {:.bg-warning} 

2. [JSON Signature rules](http://hl7.org/fhir/datatypes.html#JSON) specified in the FHIR specification. (reproduced below for reader convenience):
   When the signature is a JSON Digital Signature (contentType = application/jose), the following rules apply:
   - The Signature.data is base64 encoded JWS-Signature [RFC 7515: JSON Web Signature (JWS)]
   - The signature is a [Detached] Signature (where the content that is signed is removed from the JWS)
   - When FHIR Resources are signed, the signature is across the [Canonical JSON] form of the resource(s)
   - The Signature **SHOULD** use the hashing algorithm SHA256. The signature validation policy will apply to the signature and determine the acceptability
   - The Signature **SHALL** include a "CommitmentTypeIndication" element for the purpose(s) of the signature. The Purpose can be the action being attested to or the role associated with the signature. The value shall come from ASTM E1762-95(2013). The `Signature.type` shall contain the same values as the CommitmentTypeIndication element.

##### Sender/Signer Steps

1. Prepare JWS Header
    1.  **SHALL** have `"alg": "RS256"` (preferred) or some other JSON Web Algorithms (JWA) (see [RFC 7518])
    2.  **SHALL** have `"kty": "RS"`
    3.  **SHALL** have `"x5c"` (X.509 certificate chain) equal to an array of one or more base64-encoded (not base64url-encoded) DER representations of the public certificate or certificate chain (see [RFC 7517]).
The public key is listed in the first certificate in the `"x5c"` specified by the "Modulus" and "Exponent" parameters of the entry.
2. Prepare JWS Payload
    1. base64_url encode the payload
3. Create the JWS signature using the supported algorithm
4. Remove the payload element from the JWS
5. base64 encode the JWS
6. Add the Signature element and populate the mandatory Signature datatype elements and actual signature content:
   -  `Signature.type`  - Set to the appropriate [signature type](http://hl7.org/fhir/valueset-signature-type.html), such as an Identity Witness Signature
   -  `Signature.when`  - System timestamp when signature created
   -  `Signature.who`  -  Reference or identifier of the organization or practitioner who signed it
   -  `Signature.data`  - base64 encoded JWS
7. Send data to the consumer

##### Receiver/Validation Steps

The following steps outline the process for verifying the Signature.

1. Retrieve and store the resource
2. Canonicalize the resource
3. Transform the canonicalized json to a base64-url format
4. Get the base64 encoded JWS  from the `signature.data`  element
5. Base64 decode the encoded JWS
6. Insert the base64 encoded data into the JWS payload element.
7. Obtain the public key from the first certificate in the JWS header `"x5c"` key
    - base64 decode the key value
    - Use the "Subject Public Key Info"
8. Verify Issuer, Validity Dates, Subject, and KeyUsage of the certificate,
9. Validate the JWS using the public key or the X.509 Certificate

---

### Footnotes / References

[^first]: MLN Fact Sheet: Complying with Medicare Signature Requirements MLN Fact Sheet <https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/Signature_Requirements_Fact_Sheet_ICN905364.pdf>
[^second]: CMS signature requirements outlined in the Medicare Program Integrity Manual (CMS Pub.100-08), Chapter 3, Section 3.3.2.4. <https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/pim83c03.pdf#page=44>
[^third]: "15 U.S. Code § 7006 - Definitions", LII / Legal Information Institute". Law.cornell.edu. Retrieved 2021-10-06. <https://www.law.cornell.edu/uscode/text/15/7006#5>
[^fourth]: [RFC 7515] Jones, M., et al., "JSON Web Signature (JWS)", RFC 7515, ISSN: 2070-1721, May 2015, <https://tools.ietf.org/html/rfc7515>

{% include link-list.md %}



---

// File: input/pagecontent/StructureDefinition-ADI-AutopsyObservation-intro.md

The ADI Autopsy observation is used to represent the patient’s documented decisions regarding autopsy, should they pass away.  These decisions can be documented in narrative form or as a result of selecting from a list of options provided by the content creator/implementer.  Enabling the patient to state their preferences for autopsy is an important element in representing their goals, preferences, and priorities for activities that occur upon death.

---

// File: input/pagecontent/StructureDefinition-ADI-CareExperiencePreference-intro.md

The ADI PtAuthored Care Experience Preference is a mechanism for the patient to represent their thoughts about the care they will receive (before and after an emergency health crisis) and is intended to inform the care team who may not know anything about them what is important to them as care is delivered.  Aspects of the patient’s personal preferences and priorities such as what they like or find joy in, what they dislike or fear, what matters to them, the role religion, faith, or spirituality play in their life, and who they might want contacted to support those beliefs are examples of what is represented in this section.

---

// File: input/pagecontent/StructureDefinition-ADI-Composition-Header-intro.md

This profile, largely based on the CCDA on FHIR US Realm Header profile, defines requirements that address specific exchange requirements for a composition containing a person's advance care plan information.

**Conformance:**

In the cases where the patient is not able to "write" the PACP contents due to literacy constraints or physical disability, e.g. hemiplegia, the patient/subject is still considered author of the content, and a data enterer will fill the role of physically creating the document by entering the author’s requested information into the system used to create the document.

Advance Directive Information versionNumber represents a numeric value used to version successive replacement documents. Best practice for systems that support distributed document creation and updating is to populate the versionNumber with the timestamp created from the date/time when the version of the document is created in the system.  Note: this may or may not be equivalent to the timestamp integer for Composition.date. the versionNumber timestamp always will be equivalent to the Bundle.timestamp for the document.   

To better align with CDA, versionNumber should be a string label generated by converting the ClinicalDocument.effectiveTime (or Composition.date) to UTC time (-0000) and then using the YYYYMMDDhhmmss as the version.

For documents created within a system will follow the pattern that the timestamp-label versionNumber will be equivalent to the timestamp of the Composition.date and the Bundle.timestamp. However, for unstructured historical documents uploaded into a system, the timestamp-label versionNumber will be equivalent to the timestamp of the  the Bundle.timestamp, but the Composition.date will reflect the creation date of the original document.

---

// File: input/pagecontent/StructureDefinition-ADI-DocumentationObservation-intro.md

The ADI Document observation represents the existence of any advance directive documents the patient may want to notify the treating care team of, so as to further support personalized care delivery.  The observation is not intended to communicate the actual contents of those additional documents, if they exist, but are intended to represent that the documents exist so that further investigation can be undertaken to locate them or learn more about them.  Duplicate form completion, inconsistent form responses, and siloed documents are a source of misinformation and confusion during care delivery so this section is intended to create awareness that other forms of advance healthcare decisions exist that the person wants others to be aware of in an effort to potentially locate the documents so as to reduce confusion and misinformation.

---

// File: input/pagecontent/StructureDefinition-ADI-DocumentReference-intro.md

**Conformance:**

Advance Directive Information `versionNumber` represents a string value used to version successive replacement documents. Best practice for systems that support distributed document creation and updating is to populate the versionNumber with the timestamp created from the date/time when the version of the document is created in the system.  Note: this may or may not be equivalent to the timestamp integer for Composition.date. the versionNumber timestamp always will be equivalent to the Bundle.timestamp for the document.   

To better align with CDA, `versionNumber` should be a string label generated by converting the ClinicalDocument.effectiveTime (or Composition.date) to UTC time (-0000) and then using the YYYYMMDDhhmmss as the version.

For documents created within a system will follow the pattern that the timestamp-label versionNumber will be equivalent to the timestamp of the Composition.date and the Bundle.timestamp. However, for unstructured historical documents uploaded into a system, the timestamp-label versionNumber will be equivalent to the timestamp of the timestamp of the system dateTime when the document was uploaded, but the Composition.date will reflect the creation date of the original document, if it is available. If the creation date of the original document is not known, then Composition.date may be the system dateTime when the document is uploaded.

This profile defines constraints that represent the information needed to register an advance directive information document on a FHIR server. Temporal information is essential to the document registration process.  DocumentReference.date holds the date when the document was registered and DocumentReference.content.attachment.creation holds the "creation date" associated with the document itself.

---

// File: input/pagecontent/StructureDefinition-ADI-Goal-intro.md

The ADI goal represents the patient’s advance healthcare decision goals for the medical interventions that will be part of the clinician-authored care plan that will drive treatment.  The patient’s documented goals of the medical care they will receive is based on the context or condition specified, and is intended to guide the provider-authored interventions that will be documented by the care team providing the treatment interventions that meet those documented patient goals. This allows a person-centered approach to care planning that reflects the specific goals, preferences, and priorities of that person which can then be merged with the clinical care plan so as to enable a jointly developed plan of care between the provider and person receiving care.

---

// File: input/pagecontent/StructureDefinition-ADI-OrganDonationObservation-intro.md

The ADI Organ donation observation is used to represent the patient’s documented decisions regarding organ and tissue donation, and any specifics as to how the organ and tissue donations are to be used, should the patient pass away.  These decisions can be documented in narrative form or as a result of selecting from a list of options provided by the content creator/implementer.  Enabling the patient to state their preferences for organ and tissue donation is an important element in representing their goals, preferences, and priorities for activities that occur upon death.

---

// File: input/pagecontent/StructureDefinition-ADI-PACPComposition-intro.md

This profile defines the requirements for communicating a Personal Advance Care Plan (PACP) using a Composition Resource. It is used to create a person-generated document which is authored by the subject of the document (the patient). It contains information about the person's goals, preferences, and priorities (GPPs) for care and treatment under certain future conditions.

It is possible for a PACP composition to only contain textual information and not have any encoded entries. In this case, an implementer may populate the `section.text` element in place of a resource reference in the `section.entry` element.


---

// File: input/pagecontent/StructureDefinition-ADI-ParticipantConsent-intro.md

### Conformance

* `Consent.category` has a 1..* cardinality which SHALL include a fixed code of *acd*. Although the current HL7 definition for this code, is more applicable to encounter-centric ADI documents, this code will apply for both ADI Content Type 1 and Type 2 documents.

---

// File: input/pagecontent/StructureDefinition-ADI-PersonalGoal-intro.md

The ADI PtAuthored Personal Goal represents the patient’s personal goals and values related to quality of life that are intended to inform the treatment being provided.  This may be communicated as a statement of what is important to the patient to have a good quality of life, such as avoiding prolonged dependence on machines or being able to feed, bathe, and take care of themselves.  They may want to be to be able to die at home or not be a financial burden to their family.  Content creators or implementers may provide a list of things the patient can select that are personally important to them or the decisions may be captured in narrative form.  Without any more specificity than what the personal goal of the patient is, a medical team may be able to narrow down a list of potential treatment interventions to just a few whose outcomes would enable meeting the patient’s documented personal goals and values.

---

// File: input/pagecontent/StructureDefinition-ADI-PersonalInterventionPreference-intro.md

The ADI PtAuthored Personal Intervention Preference represents the patient’s preferences for treatment interventions based on their personal goals and priorities.  The patient may indicate whether they wish to issue an advance directive (instruction) to receive intubation, tube feeding, life support, and/or pain management to name a few.  The preferences may be documented in narrative form or the result of selecting from a list of options provided by the content creator/implementer.  Enabling the patient to state the interventions they want to receive so the care team is aware of those preferences can have a meaningful impact on the ability of the provider to deliver person-centered care that reflects the patient’s values and priorities for treatment.

---

// File: input/pagecontent/StructureDefinition-ADI-PersonalPrioritiesOrganizer-intro.md

The ADI Personal Priorities organizer represents the patient’s ranked preferences for their stated personal goals of care, which is related to 8.12.1.  A patient may rank avoiding prolonged dependence on machines higher than being able to die at home, which can impact the medical team’s recommendations as to which interventions and associated known outcomes would most closely result in the highest ranked priorities of the patient.

---

// File: input/pagecontent/StructureDefinition-ADI-PreferenceCarePlan-intro.md

The ADI PtAuthored Care Plan represents the patient’s goals for treatment based on circumstances or situations that provide context for the goals documented.  A patient could document their goal of care in a situation such as a terminal condition that will result in their death in a relatively short period of time as being to extend their life for as long as possible, or allow their natural death to occur, or allow limited treatments to occur for a certain period of time before they are stopped.  In a different situation, such as permanent and severe brain damage from which they are not expected to recover, that their goal of care options may be the same but their documented selection is different.  Various forms and jurisdictions include circumstances or situations that are relatively consistent but still vary somewhat, so this Resource allows the basic structure of a context or circumstance or situation to be defined, against which the identification of a goal is documented, and against which in some existing forms further identification of the patient’s preference for interventions is captured.  To enable the patient’s own preferred plan of care to merge with the care team’s clinical plan of care results in a jointly-authored and patient-centered plan of care that is informed by the person receiving care and the care team responsible for delivering that care.

---

// File: input/pagecontent/system_use_cases.md

### Overview of ADI Use Cases


In ADI use cases, advance directive content created and updated will be represented using FHIR resources. The advance directive content is created and may be updated periodically by human actors.

For Content Type 1, Person-authored advance directive information, there may be multiple human actors involved; however, there will only be one author which is the patient. Other human actors may include the healthcare agent, alternate healthcare agents, witness, notary, provider, and data enterer.

<blockquote class="stu-note">
    <p>
    STU1 supports only Person-authored Advance Directives (ADI Content Type 1) documents. Future versions of this FHIR IG will address encounter-centric patient instructions, Content Type 2, and portable medical orders (such as DNRs or POLST/MOLST orders) for Content Type 3.
    </p>
</blockquote>


System actors are responsible for ensuring the advance directive information is correctly represented using FHIR resources. The technical actor is responsible for carrying out activities to conduct transition exchanges and make the information available.


Use cases in this IG will provide requirements for systems to use FHIR RESTful operations to both share (PUSH) and query & access (PULL) an individual’s advance directive content. In addition, it will cover technical requirements to update advance directive content. Finally, the use cases will provide guidance on information or document verification that what is available is current. In this use case, verification addresses situations when you have advance directive information available for access, and the system uses FHIR RESTful operations to determine if what is available is the most current version of that information or document. The details for these use cases are provided below.


<p align="center">
    <img src="./ADI_use_case_overview.png" alt="ADI Use Case Overview" style="width: 70%; float: none; align: middle;"/>
</p>

#### Use Case 1: Create in Digital Form [Content]

In Use Case 1, the person that wants to create their advance directive information in a digital form enters information in a content creator system. The content creator system ensures the information is stored and is available for the steps in the process that are described in the following use cases.  

{% include examplebutton_default.html example="use_case_1_actor_transition.md" b_title = "Click Here To See Use Case 1 Actor Transaction Diagram" %}

##### Use Case 1 Process Steps

<p>
In Use Case 1, the process is started by a person seeking to create advance directive information in a digital form. The precondition for the process includes the system is able to capture and make the advance directive information available in standard-based digital format. The person creates advance directive information in the creator system, or optionally in a different system. Advance directive information is then stored and indexed by a custodian system responsible for information exchange. Finally, the advance directive information is made available in digital form within a Custodian System that can share the documents or information as a FHIR Client and/or support query as a FHIR Server.
</p>

{% include examplebutton_default.html example="use_case_1_sequence.md" b_title = "Click Here To See Use Case 1 Sequence Diagram" %}

On first creation, the DocumentReference version number is set to 1 and the status set to *current*.

{% include examplebutton_default.html example="use_case_1_document_structure.md" b_title = "Click Here to See the initial ADI Document Diagram" %}

#### Use Case 2: Share [Content]

In Use Case 2, the Content Creator system makes the person-authored advance directive information available via a Content Receiver system using a FHIR API. The Content Receiver system may be an end system or may be another Content Custodian system.

##### Use Case 2 Process Steps

In Use Case 2, the process is started when a person wants to share their advance directive information with a human or system Content Receiver system. The person directs the Content Creator system to send the advance directive information to the Content Receiver through a FHIR based POST transaction. The Content Receiver will receive, store and process the advance directive information in their system.


#### Use Case 3: Query and Access [Content]

Use-case 3 aims to enable provider access to advance directive information. It includes 3 steps: 

* Step 1 is a Patient Query where a system or human actor, such as a member of a provider care team performs an activity in their system, which is at that point acting as the Content Requester system, to search for the person or subject of interest in the Content Custodian system in order to retrieve the appropriate Patient FHIR ID for which to perform the subsequent actions. This is a common FHIR behavior and is not further specified in this guide.

{% include examplebutton_default.html example="use_case_3_actor_transition_1.md" b_title = "Click Here To See Use Case 3 Actor Transaction Diagram Step 1" %}

* Step 2 is a `DocumentReference` query, where the Content Requester system performs a `GET DocumentReference` request using the retrieved patient ID and additional search parameters like date, to the Content Custodian system. The Content Custodian system returns all matching `DocumentReference` information that has been authorized by the person to be eligible for access. This step returns a `DocumentReference` FHIR resource, which may or may not contain a binary-encoded document. To allow for pragmatic variations in implementer infrastructures, systems claiming conformance to this guide may encode scanned documents in one of two ways. Both options are supported in FHIR and the Server decides which it will utilize.

**Option 1:** file attachment has In-line Representation `content.attachment`, where
*  `.contentType` is a MIME type  (application/pdf)
*  `.data` is inline Base64 binary Data

```
For example:
"attachment": {
      "contentType": "application/pdf",
      "data": "JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9DcmVhdG9yIChNb3ppbGxhLzUuMCBcKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NFwpIEFwcGxlV2ViS2l0LzUzNy4zNiBcKEtIVE1MLCBsaWtlIEdlY2tvXCkgQ2hyb21lLzExOS4wLjAuMCBTYWZhcmkvNTM3LjM2KQovUHJvZHVjZXIgKFNraWEvUERGIG0xMTkpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMzExMDcxNTIxMzkrMDAnMDAnKQovTW9kRGF0ZSAoRDoyMDIzMTEwNzE1MjEzOSswMCcwMCcpPj4KZW5kb2JqCjMgMCBvYmoKPDwvY2EgMQovQk0gL05vcm1hbD4...+CmVuZG9iago1IDAgb2JqCjw8L0NBIDEKL2NhIDEKL0xDIDAKL0xKIDAKL0xXIDEKL01MIDQKL1NBIHRydWUKL0JNIC9Ob3JtYWw+PgplbmRvYmoKOCAwIG9iago8PC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggMzY4OT4+IHN0cmVhbQp4nO1cWY8bxxF+56+Y5wAZ9X0AggCS2jXyYCCJF/Cz4cgGAq2ROA6Qn5/qo7prZljDppZaKYElSBxOH1X91d3TnFnpmP9MAv7+cSZffVTTj8+Hfx7EZOOsvZ10dHNIn362068fDt//",
      "creation": "2023-12-22T05:00:00+00:00" }

```

<br />

**Option 2:** file attachment is referenced by url in `content.attachment`, where
* `.contentType` is a MIME type (application/pdf)
* `.url` is the uri where the data can be found

For example:
```
"attachment": {
      "contentType": "application/pdf",
      "url": https://qa-rr-fhir2.maxmddirect.com/Binary/b193ff07-d6ca-495d-a995-b222f87d5942,
      "creation": "2023-12-22T05:00:00+00:00"}
```
<br />

{% include examplebutton_default.html example="use_case_3_actor_transition_2.md" b_title = "Click Here To See Use Case 3 Actor Transaction Diagram Step 2" %}

* Step 3 involves retrieving the document content. The Content Retriever system performs a GET operation using the URL specified in `DocumentReference`. This operation should be available using the same authentication and authorization that was used to retrieve the DocumentReference in a previous step of this process. Depending on the capabilities of the Content Custodian system or the format of the content, the retrieved Binary resource may need to be decoded. If the Content Custodian system supports it, and if the document content is in xml or json formatting, a request with an HTTP Accept Header of application/xml, text/xml, or application/json may retrieve the decoded document (which may be a FHIR Bundle with type = document).

{% include examplebutton_default.html example="use_case_3_actor_transition_3.md" b_title = "Click Here To See Use Case 3 Actor Transaction Diagram Step 3" %}

##### Use Case 3 Process Steps

The Use Case 3 process describes message interactions between a Content Requester system, such as SMART on FHIR application, and a backend server. Note that while backend servers are supported by this IG, more specification requirement details related to backend server guidance will be coming in STU2.

This process is started when a care team member of an organization wants a person’s advance directive information for treatment planning and decision-making. The Content Requester system must contact a Content Custodian system that offers a FHIR API for receiving requests for advance directive information. The care team member or human actor requesting the advance directive information must be authorized to access the person’s advance directive information on the Content Custodian system. The Content Custodian system may be accessed via a SMART Health Card or record endpoint in their digital insurance card.

The Content Requester system SHOULD use the FHIR operation [$match](https://hl7.org/fhir/r4/patient-operation-match.html) for system-to-system patient querying, preferably with an enterprise master patient index (EMPI) to ensure a high threshold match and so that the right individual's advance directive information is selected. An example of using the $match operation is shown [here](https://hl7.org/fhir/R4/patient-operation-match.html#examples). The Content Custodian server returns all matched Patient resources to the Content Requester system. If more than one Patient resource is returned, the Content Requester will confirm which is the correct patient. The Content Requester system will then send a `GET DocumentReference query` using patient FHIR ID and any additional search parameters as supported and needed. The Content Custodian returns all matched `DocumentReference` resources to the Content Requester system. If more than one DocumentReference is returned, the Content Requester system will confirm which `DocumentReference`(s) are wanted. Finally, the Content Requester system will retrieve the wanted documents using a GET operation on the URL included in the `DocumentReference` resource and decode the document content if necessary.

<blockquote class="stu-note">
    <p>
    Content custodian systems should be discoverable through the National Directory for Healthcare in the future. Implementers should be aware that a National Directory of Healthcare Providers and Services (NDH) FHIR Implementation guide is currently being developed by the FHIR at Scale Taskforce (FAST) and considered for adoption when the IG is formally published.
    </p>
</blockquote> 

#### Use Case 4: Update [Content]

In Use Case 4, the process is started by a person wanting to update previously created advance directive information. The precondition for the process is that the Content Creator and Content Custodian systems are able to associate a new version of the ADI information and/or document(s) as active and possess the ability to mark prior ADI information and/or document(s) version as inactive.

##### Use Case 4 Process Steps


Use Case 4 continues Use Case 2 and Use Case 3, which created the initial document to handle updated document versions. The process is started by a person wanting to update previously created advance directive information. The precondition for the process is that the Content Creator and Content Custodian systems are able to associate a new version of the ADI information and/or document(s) as active and possess the ability to mark prior ADI information and/or document(s) version as inactive.

* First, The person consents to share updated AD information. The person creates an updated version of their advance directive information which is stored in a Content Custodian system responsible for information exchange, using the same setID identifier as the replaced document and with status = “current”, relatesTo.code = “replaces”, and relatesTo.target –> prior version.
* Then, the DocumentReference for the prior version of AD information is updated so that its documentReference.status is changed to superseded.
* At the end of the process, the `DocumentReference` for the updated version of the document has a status of *current* and the the DocumentReference for the previous version of the document is a status of *superceded*. The relationship between the new and previous version of the document is preserved through the current `DocumentReference` `relatesTo.code` (*replaces*).

{% include examplebutton_default.html example="use_case_4_actor_transition.md" b_title = "Click Here To See Use Case 4 ADI Document Diagram" %}

<blockquote class="stu-note">
<p>
It is the responsibility of the Content Custodian of the AD documents to maintain versioning of AD documents.
</p>
</blockquote>

**Note:** FHIR Resource versioning is only used for error corrections. 

#### Use Case 5: Revoke [Content]

In Use Case 5, the person decides to withdraw the Advance Directive document. Revoke is more complex than the Update use case in that the status depends on situation or reason for revoking the document.
* scenario 1: User decides to revoke advance directive entirely; there is only one version of the document.
* scenario 2: User decides to revoke only the current version of the document because it was entered in error. A prior version of the document exists.

##### Use Case 5 Process Steps

**Scenario: 1: Revoke the advance directive entirely**

* Step 1 sets the `DocumentReference.docStatus` code to *cancelled*

**Scenario: 2: Revoke the advance directive because it was entered in error - prior version exists**

This scenario could be addressed as an update (Use Case 4), except that we describe that the reason (element name??) was entered-in-error.

#### Use Case 6: Verify current version of AD [Content]

In Use Case 6, a Content Verifier has advance directive information which it previously received or retrieved.

* Step 1 is the retrieval of the known DocumentReference. The Content Verifier system already has a version of the document and therefore knows the setId identifier for the document. The Content Verifier seeks to confirm the information they have is the person’s current advance directive information. To verify that the document they have is the current version (and get the current version if it is not), the Content Verifier queries the Content Custodian system to retrieve the current version of the document already in their possession. If the DocumentReference has a status = current, the latest document has been verified as retrieved and no further action is needed.

{% include examplebutton_default.html example="use_case_6_actor_transition_1.md" b_title = "Click Here To See Use Case 6 Actor Transaction Diagram Step 1" %}

 * Step 2 is to retrieve newer content if available. If the `DocumentReference` resource retrieved by the Content Retriever system in Step 1 has a status of `superseded` then the document that the Content Custodian system already knows of has been replaced, necessitating that the Content Verifier system perform a second query for a `DocumentReference` resource that has a `relatesto.code` of `replaces` and a reference to the superseded `DocumentReference` resource. The Content Verifier can then retrieve the document as described in step 3 of <a hef="#use-case-3-description">Use Case 3</a>.

{% include examplebutton_default.html example="use_case_6_actor_transition_2.md" b_title = "Click Here To See Use Case 5 Actor Transaction Diagram Step 2" %}

##### Use Case 6 Processes Steps

In Use Case 6, the process is started by a Content Verifier system that would like to confirm the current version of advance directive information is already stored, or not. The precondition for the process is the Content Verifier system has a version of advance directive information from an earlier time.

* First, the Content Verifier system performs a GET DocumentReference with known setID to content custodian. The Content Custodian system returns the `DocumentReference`.
* If the `DocumentReference` returned contains a `status` of `superseded` then the document has been replaced and the Content Verifier system will perform a second query for a `DocumentReference` resource based on the `relatesto.code` referenced by the superseded `DocumentReference` resource. 
* The Content Verifier system will read the wanted documents using a GET operation on the URL included in the “current” `DocumentReference` resource and decode the document content if necessary.

{% include examplebutton_default.html example="use_case_6_sequence.md" b_title = "Click Here To See Use Case 6 Sequence Diagram" %}



---

// File: input/pagecontent/type1_patient_authored.md

### Introduction 
<p>
TBD for patient-authored advance directives.
</p>

---

// File: input/pagecontent/type2_encounter_based.md

### Introduction 

<blockquote class="stu-note">
    <p>
    This page is a placeholder for a future version of this FHIR IG that addresses encounter-centric patient instructions, Content Type 2.
    </p>
</blockquote>

### Create in a digital form and make available for sharing and accessing Encounter-Centric Patient Instructions

Steven is a 34 year old man who has had Cystic Fibrosis all his life. He created his advance directive a few years ago when his condition sharply worsened. He is eligible for a lung transplant due to his age and disease state. 

His advance directive states that he wants no life-sustaining treatment if he has a health crisis that warrants those measures, and is unable to communicate for himself. Steven doesn't want to be resuscitated only to wait for a lung transplant that may never happen. 

Steven gets the call one night that he has been matched to a donor and goes immediately to the hospital for his lung transplant. 

The surgeon meets with Steven prior to the procedure and asks him if he has specific instructions related to the transplant encounter, should a situation arise during surgery that requires additional treatment decisions to be made. 

Steven’s surgeon creates an order, based on Steven’s consent, about his decision to receive life-sustaining treatment during the current encounter. Steven feels he has a chance at a longer life with a new lung that he hasn't been able to consider until now. 

Steven's patient instructions and consent are documented and signed-off in the clinical record to enable the entire medical team to have visibility into Steven’s instructions during his surgical procedure.

Steven’s patient instructions and associated order, as part of the encounter summary documentation, is made available from the EMR to other care settings (outside the clinical record) by being stored in a registry/repository/HIE/QHIN/EHR as a result of integration that exists. 

<img src="./patient_story_1b.png" alt="Patient Story 1b"/>
<br clear="all" />

### Create in a digital form and make available for sharing and accessing Portable Medical Order for Life-Sustaining Treatment

Frank is a 78 year old man who has end stage kidney disease and receives dialysis 3x per week. He receives long term supportive services in his home. Frank is cognitively intact.

Frank suffers from a chronic health condition that has resulted in a limited life-expectancy of 6-12 months. He creates an advance directive with his caregiver. Frank does not want to have life-sustaining treatment rendered if his condition warrants those measures if he is unable to communicate for himself. 

Frank's condition worsens sharply one day and he is taken by ambulance to the nearest hospital for treatment. Frank tells the ER physician about his advance directive and the physician writes a DNR order, valid for that hospitalization only, to Frank's medical record. 

Frank is transferred to a skilled nursing facility for post-acute care. The practitioner overseeing his care in the Skilled Nursing Facility (SNF) meets with Frank to discuss his goals of care, his hospital DNR, and reviews his advance directive with him. He recommends creation of a portable medical order for life-sustaining treatment to align with Frank's desire to prevent an unwanted hospital transfer. 

The practitioner ensures the portable medical order for life-sustaining treatment document is added to Frank’s SNF medical record so it is accessible by facility staff in case of emergency. Frank also receives a copy of this new document, which he places in his bedside table.

The facility's medical record is integrated to the broader healthcare ecosystem which accessed Frank's advance directive, and now enables his portable medical order for life-sustaining treatment document to be available in a registry/repository/HIE/QHIN so as to inform treatment during a transition of care. 

One evening Frank sustains a significant change in condition that renders him unconscious. The SNF care team reviews his portable medical order for life-sustaining treatment document to find he doesn't want to receive life-sustaining treatment. They call 911 in accordance with facility policy. Emergency access to Frank's ADI is granted, and the EMS personnel render comfort measures in concordance with his wishes. 

<img src="./patient_story_1c.png" alt="Patient Story 1c"/>
<br clear="all" />


---

// File: input/pagecontent/underlying_technologies.md

### Fast Healthcare Interoperability Resources

Based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard, this implementation guide uses terminology, notations, and design principles that are specific to FHIR. Implementers of this specification therefore need to understand some basic information about this specification.

Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read the following prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html)
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)
* [Security]({{site.data.fhir.path}}security.html)
* [Security Labels]({{site.data.fhir.path}}security-labels.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard and builds on the [US Core Implementation Guide](http://hl7.org/fhir/us/core) and implementers need to familiarize themselves with the profiles in that guide. Implementers should also familiarize themselves with the FHIR resources used within the guide:

<table>
    <td>
      <a href="{{site.data.fhir.path}}documentreference.html">DocumentReference</a><br/>
      <a href="{{site.data.fhir.path}}composition.html">Composition</a><br/>
      <a href="{{site.data.fhir.path}}observation.html">Observation</a><br/>
    </td>
</table>

---

// File: input/includes/link-list.md

[(Verification Signature)]: {{site.data.fhir.path}}valueset-signature-type.html
[FHIR Document]: {{site.data.fhir.path}}documents.html
[RFC 7515]: https://tools.ietf.org/html/rfc7515
[JSON Signature rules]: {{site.data.fhir.path}}datatypes.html#JSON
[RFC 7515: JSON Web Signature (JWS)]: https://tools.ietf.org/html/rfc7515
[Detached]: https://tools.ietf.org/html/rfc7515#appendix-F
[Canonical JSON]: {{site.data.fhir.path}}json.html#canonical
[JWS JSON Serialization]: https://datatracker.ietf.org/doc/html/rfc7515#section-3.2
[X.509 certificates]: https://www.itu.int/rec/T-REC-X.509
[RFC 7518]: https://tools.ietf.org/html/rfc7518
[RFC 7517]: https://tools.ietf.org/html/rfc7517


---

// File: input/includes/use_case_1_actor_transition.md


<br clear="all" />
<img src="./use_case_1_1.svg" alt="Use Case 21: Diagram 2"/>
<br clear="all" />


---

// File: input/includes/use_case_1_document_structure.md


<img src="./use_case_1_3.svg" alt="Use Case 1: Diagram 3" style="width: 75%; float: none; align: middle;"/>


---

// File: input/includes/use_case_1_sequence.md


<img src="./use_case_1_2.png" alt="Use Case 21: Diagram 1"/>
<br clear="all" />


---

// File: input/includes/use_case_2_sequence.md


<img src="./use_case_2_2.png" alt="Use Case 2: Diagram 2" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_3_actor_transition_1.md


<img src="./use_case_3_1.png" alt="Use Case 3: Diagram 1" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_3_actor_transition_2.md


<img src="./use_case_3_2.png" alt="Use Case 3: Diagram 2" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_3_actor_transition_3.md


<img src="./use_case_3_3.png" alt="Use Case 3: Diagram 3" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_3_sequence.md


<img src="./use_case_3_4.png" alt="Use Case 3: Diagram 4.1" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_4_actor_transition.md


<img src="./use_case_4_1.svg" alt="Use Case 4: Diagram 1" style="width: 75%; float: none; align: middle;">


---

// File: input/includes/use_case_4_sequence.md


<img src="./use_case_4_2.png" alt="Use Case 4: Diagram 2" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_6_actor_transition_1.md


<img src="./use_case_6_1.png" alt="Use Case 5: Diagram 1" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_6_actor_transition_2.md


<img src="./use_case_6_2.png" alt="Use Case 5: Diagram 2" style="width: 100%; float: none; align: middle;"/>


---

// File: input/includes/use_case_6_sequence.md


<img src="./use_case_6_3.png" alt="Use Case 5: Diagram 3" style="width: 100%; float: none; align: middle;"/>


---

// File: input/fsh/ADIFacilitator.fsh

Profile: ADIFacilitator
Parent: $USCorePractitionerRole
Id: ADI-Facilitator
Title: "ADI Facilitator"
Description: "This profile represents a clinician who assists the patient in advance care planning services."

* code 1..1 MS
* code from $HL7ServiceEventPerformer

---

// File: input/fsh/ADIHeaderProfile.fsh

Profile: ADICompositionHeader
Parent: clinicaldocument
Id: ADI-Composition-Header
Title: "ADI Composition Header"
Description: "This abstract profile defines constraints that represent common administrative and demographic concepts for advance directives information used in US Realm clinical documents."

* ^abstract = true 
* language 1..1 MS

* extension[composition-clinicaldocument-versionNumber] 1..1 MS
// Need extensions
//* extension contains
//    http://hl7.org/fhir/StructureDefinition/composition-clinicaldocument-versionNumber named versionNumber 0..1 
/*    
    http://hl7.org/fhir/us/ccda/StructureDefinition/VersionNumber named version_number_extension 0..1 MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/DataEntererExtension named data_enterer_extension 0..1 MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/InformantExtension named informant_extension 0..* MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/InformationRecipientExtension named information_recipient_extension 0..* MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/ParticipantExtension named participant_extension 0..* MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/PerformerExtension named performer_extension 0..* MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/AuthorizationExtension named authorization_extension 0..* MS and
    http://hl7.org/fhir/us/ccda/StructureDefinition/OrderExtension named order_extension 0..* MS
    */

* extension contains
  //  adi-versionNumber-extension named VersionNumber 0..1 MS and
    adi-effective-date-extension named EffectiveDateExtension 0..1 and
    adi-jurisdiction-extension named Jurisdiction 0..* and 
    adi-dataEnterer-extension named DataEntererExtension 0..1 and
    adi-informant-extension named InformantExtension 0..* and
  //  adi-informationRecipient-extension named InformationRecipientExtension 0..* MS and
    adi-participant-extension named ParticipantExtension 0..* and
    adi-performer-extension named PerformerExtension 0..* and
    adi-clause-extension named ClauseExtension 0..* and
    adi-document-revoke-status named DocumentRevokeStatus 0..1 MS

* language 1..1 MS
* identifier 1..1 MS

*  status from ADICompositionStatusVS (required) // fix for FHIR-46153

* type MS
* type from $VSACADIAdvanceDirectiveCategories (extensible)

* category 0..1 MS
* category = $LOINC#42348-3 "Advance directives"
* subject 1..1 MS
* subject only Reference($USCorePatient)

* encounter only Reference($USCoreEncounter)
* date MS
* author MS
* author only Reference($USCorePractitioner or $USCorePractitionerRole or PractitionerRole or $USCorePatient or Device or RelatedPerson)
* title MS
* confidentiality 0..0

* custodian 1..1 MS
* custodian only Reference($USCoreOrganization)

* event.code = ADITempCS#acp-services "Advance care planning services"
* event.detail ^slicing.discriminator.type = #profile
* event.detail ^slicing.discriminator.path = "resolve()"
* event.detail ^slicing.rules = #open
* event.detail ^slicing.description = "Slice based on the reference profile and code pattern"

* event.detail contains adiFacilitator 0..1
* event.detail[adiFacilitator] only Reference(ADIFacilitator)
* event.detail[adiFacilitator] ^short = "ADI Facilitator"

* section.extension contains    
    adi-clause-extension named ClauseExtension 0..*
    
// need to add notes on which attester roles there are. Change name of personal_attester to witness_attester professional_attester to notary_attester
// Need to add an extension with a code that explains the role, witness or notary. Others?




---

// File: input/fsh/ADINotaryProfile.fsh

Profile: ADINotary
Parent: RelatedPerson
Id: ADI-Notary
Title: "ADI Notary"
Description: "This profile represents a person participating as a notary for a person's advance directives."

* active MS
* text 1..1 // CONF:4445-33393

* patient 1..1 MS
* patient only Reference($USCorePatient)

* relationship 1..* MS
* relationship from $HL7RelatedPersonRelationshipType (extensible)


//Healthcare Agent or Proxy Choices
//Personal And Legal Relationship Role Type

* relationship ^slicing.discriminator.type = #pattern 

* relationship ^slicing.discriminator.path = "$this"
* relationship ^slicing.rules = #open
* relationship ^slicing.ordered = false   // can be omitted, since false is the default
* relationship ^slicing.description = "Slice based on $this pattern"

* relationship contains notary 1..1 MS
* relationship[notary] = v3-ParticipationType#NOTARY
* relationship[notary] ^requirements = "Indicates the relationship is as a notary for the advance directive."

* name 1..1 MS // CONF:4445-33420
* telecom 1..* MS // CONF:4445-33417
* address MS

* extension contains
    adi-notaryInformation-extension named NotaryInformationExtension 0..1

// HOW About references to external documents????

---

// File: input/fsh/ADIParticipantConsentProfile.fsh

Profile: ADIParticipantConsent
Parent: Consent
Id: ADI-ParticipantConsent
Title: "ADI Participant Consent"
Description: "This profile is used to represent a consent for an advance directive participant such as a healthcare agent or advisor and power or limitation granted to such persons."

* obeys HCA-authority-scope-provisionType
* obeys HCA-consent-category
* obeys HCA-provision-purpose

* text 1..1 MS

* status MS
//[TODO] need verification that it is active only. Is the authority proposed if the agent is not yet aware or accepted the role?
* status = #active
// [TODO], the LOINC code is an observable, which is not meant to express scope. Will need to find another code that could (Follow-up with Dan Vreeman  Liz Umberfield)
* scope from $VSACADIConsentType (required)

// Fix for FHIR_34506 - meeting on 2023-08-28: re-point to http://terminology.hl7.org/CodeSystem/consentcategorycodes
/*
	* Create a fixed value of acd for the consent type.
	* Write in narrative what our interpretation of the existing code.
*/

* category 1..1 MS
* category = $HL7ConsentCategoryCodes#acd
// * category from $HL7ConsentCategoryVS (extensible)


// Attempt at slicing category
// * category ^slicing.discriminator.type = #pattern
// * category ^slicing.discriminator.path = "$this"
// * category ^slicing.rules = #open
// * category ^slicing.ordered = true
// * category ^slicing.description = "Description"

// * category contains AdvanceDirective 1..1
// * category[AdvanceDirective] = $HL7ConsentCategoryCodes#acd "Advance Directive"
// * category[AdvanceDirective] ^requirements = "Used to identify that this is a consent related to an advance directive."

// * category contains ConsentCategory 0..*
// * category[ConsentCategory] from $HL7ConsentCategoryVS (extensible)
// * category[ConsentCategory] ^requirements = "Indicates other categories this consent is related to."

// [TODO] there seems to be an issue with consent scope. The url http://terminology.hl7.org/CodeSystem/consentscope forwards to https://terminology.hl7.org/2.1.0/CodeSystem-consentscope.html
// But the version we are using is the R4 version http://hl7.org/fhir/codesystem-consent-scope.html#consent-scope-adr
//* scope = $HL7ConsentScope#adr

* patient 1..1 MS
* patient only Reference($USCorePatient)
* dateTime MS

// [TODO] Where is the appropriate place to state that this Consent is for an agent 
* policy MS
* policy ^comment = "A URI indicating the policy or jurisdiction that defines the policy for healthcare agents and granted powers and limitations."
//$LOINC#75786-4

* provision 1..1 MS

* provision.extension contains
    adi-clause-extension named ClauseExtension 0..*


* provision.type 1..1 MS
* provision.period 
//[TODO] do we need to support and require provision.actor for all HCA's?
* provision.actor 1..* MS


// TODO Add guidanceexamples from spreadsheet
// Has communication with your healthcare agent(s) occurred?
// Health care agent willingness to serve in the HCA role

* provision.actor.extension contains
    adi-clause-extension named ClauseExtension 0..*
    
* provision.actor.role from $VSACADIConsentActorRole (required)
* provision.actor.reference only Reference(ADIParticipant)

// [TODO] we need a valueset defined. Any candidates?

* provision.action from ADIHCADecisionsVS (extensible)
* provision.action ^comment = "Actions without a defined code are placed in action.text."
* provision.purpose from http://terminology.hl7.org/ValueSet/v3-ActReason (required)

// [TODO] need to add guidance that first provision is the base set of rules, and the nested ones are exceptions to the rules.
// This may tke 2 forms, either a permit as a base rule with exceptions stating what is type deny, or vice versa.


// examples of provisions in OneNote - Powers & Limitation Examples for consent

/*
    i.      My agent is authorized to
    ii.      __Consent, refuse, or withdraw consent to any care, procedure, treatment, or service to diagnose, treat, or maintain a physical or mental condition, including artificial nutrition and hydration;
    iii.      __Permit, refuse, or withdraw permission to participate in federally regulated research related to my condition or disorder;
    iv.      __Make all necessary arrangements for any hospital, phychiatric treatment facility, hospice, nursing home, or other healthcare organization; and, employ or discharge healthcare personnel (any person who is authorized or permitted by the laws of the state to provide healthcare services) as he or she shall deem necessary for my physical, mental, or emotional well-being;
    v.      __Request, receive, review, and authorize sending any information regarding my physical or mental health, or my personal affairs, including medical and hospital records; and execute any releases that may be required to obtain such information;
    vi.      __Move me into or out of any State or institution;
    vii.      __Take legal action, if needed;
    viii.      __Make decisions about autopsy, tissue and organ donation, and the disposition of my body in conformity with state law; and
    ix.      __Become my guardian if one is needed.


*/

// need to define jurisdiction, original form?



Invariant:  HCA-authority-scope-provisionType
Description: "Scope indicates powers granted and provision type is permit or scope indicates limitations placed and provision type is deny or scope indicates no powers/limitations and no provisions type and no action exist"
Expression: "(scope.coding.where(code = '75786-4').exists() and provision.type = 'permit') or (scope.coding.where(code = '81346-9').exists() and provision.type = 'deny') or (scope.coding.where(code = '81335-2').exists() and provision.type.exists().not() and provision.action.exists().not() and provision.provision.exists().not())"
Severity:   #error

Invariant: HCA-consent-category
Description: "Category must have a ConsentCategory of 'acd'"
Expression: "category.coding.where(code = 'acd').exists()"
Severity:   #error

Invariant: HCA-provision-purpose
Description: "Provision purpose must have a purpose of 'PWATRNY'"
Expression: "provision.purpose.exists().not() or provision.purpose.where(code = 'PWATRNY').exists()"
Severity:   #error


---

// File: input/fsh/ADIParticipantProfile.fsh

Profile: ADIParticipant
Parent: RelatedPerson
Id: ADI-Participant
Title: "ADI Participant"
Description: "This profile represents a person participating in a person's advance directives in some capacity such as healthcare agent or healthcare agent advisor."

* active MS
* text 1..1 // CONF:4445-33393

* patient 1..1 MS
* patient only Reference($USCorePatient)

* relationship 0..* MS
* relationship from $HL7RelatedPersonRelationshipType (extensible)


//Healthcare Agent or Proxy Choices
//Personal And Legal Relationship Role Type

* relationship ^slicing.discriminator.type = #pattern 

* relationship ^slicing.discriminator.path = "$this"
* relationship ^slicing.rules = #open
* relationship ^slicing.ordered = false   // can be omitted, since false is the default
* relationship ^slicing.description = "Slice based on $this pattern"


* name 1..1 MS // CONF:4445-33420
* telecom 1..* MS // CONF:4445-33417
* address MS


// HOW About references to external documents????

---

// File: input/fsh/ADIWitnessProfile.fsh

Profile: ADIWitness
Parent: RelatedPerson
Id: ADI-Witness
Title: "ADI Witness"
Description: "This profile represents a person participating as a witness for a person's advance directives."

* active MS
* text 1..1 // CONF:4445-33393

* patient 1..1 MS
* patient only Reference($USCorePatient)

* relationship 1..* MS
* relationship from $HL7RelatedPersonRelationshipType (extensible)


//Healthcare Agent or Proxy Choices
//Personal And Legal Relationship Role Type

* relationship ^slicing.discriminator.type = #pattern 

* relationship ^slicing.discriminator.path = "$this"
* relationship ^slicing.rules = #open
* relationship ^slicing.ordered = false   // can be omitted, since false is the default
* relationship ^slicing.description = "Slice based on $this pattern"

* relationship contains witness 1..1 MS
* relationship[witness] = v3-ParticipationType#WIT
* relationship[witness] ^requirements = "Indicates the relationship is as a witness to the advance directive."

* name 1..1 MS // CONF:4445-33420
* telecom 1..* MS // CONF:4445-33417
* address MS


// HOW About references to external documents????

---

// File: input/fsh/Aliases.fsh

//USCore -
//Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreGoal = http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal
Alias:   $USCoreGoalDescription = http://hl7.org/fhir/us/core/ValueSet/us-core-goal-description|6.1.0
Alias:   $USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias:   $USCoreProcedure = http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure
Alias:   $USCoreProvenance = http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance
Alias:   $USCoreCarePlan = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan
Alias:   $USCoreServiceRequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-servicerequest 
Alias:   $USCoreRace = http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
Alias:   $USCoreEthnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity


Alias: $USCoreDocumentReference = http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
Alias: $USCoreDocumentReferenceType = http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-type
Alias: $USCoreDocumentReferenceCategory = http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-category

Alias: $USRealmHeader = http://hl7.org/fhir/us/ccda/StructureDefinition/US-Realm-Header


Alias: $HL7IdentifierType = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $HL7ProvenanceParticipantType = http://terminology.hl7.org/CodeSystem/provenance-participant-type|1.0.0
Alias: $HL7NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $HL7YesNoVS = http://terminology.hl7.org/ValueSet/v2-0136
Alias: $HL7YesNoCS = http://terminology.hl7.org/CodeSystem/v2-0532



Alias: $HL7CompositionAttestation = http://hl7.org/fhir/ValueSet/composition-attestation-mode
Alias: $HL7ConsentScope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $HL7ConsentCategoryCodes = http://terminology.hl7.org/CodeSystem/consentcategorycodes
Alias: $HL7ConsentCategoryVS = http://hl7.org/fhir/ValueSet/consent-category
Alias: $HL7JurisdictionCodes = http://hl7.org/fhir/ValueSet/jurisdiction

Alias: $LOINC = http://loinc.org
Alias: $SNOMEDCT = http://snomed.info/sct
Alias: $OmbRaceCat = urn:oid:2.16.840.1.113883.6.238

Alias: $HL7RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $HL7RoleClass = http://terminology.hl7.org/CodeSystem/v3-RoleClass
Alias: $HL7RelatedPersonRelationshipType = http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype
Alias: $HL7ServiceEventPerformer = http://terminology.hl7.org/ValueSet/v3-xServiceEventPerformer

Alias: $HL7ObservationCategory = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $HL7CompositionStatusR5 = http://hl7.org/fhir/composition-status|5.0.0
Alias: $HL7DocumentReferenceStatusR5 = http://hl7.org/fhir/document-reference-status|5.0.0
Alias: $HL7AdataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $HL7ConsentCategoryCodes = http://terminology.hl7.org/CodeSystem/consentcategorycodes

Alias: $VSACClauseType = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.14
Alias: $VSACUponDeathPreferences = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.15

Alias: $VSACADIParticipantRole = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.35
Alias: $VSACADIAdvanceDirectiveCategories = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.11.20.9.69.4
Alias: $VSACADIInterventionPreferencesEndOfLifeGrouping = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.9
Alias: $VSACADIConsentActorRole = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1046.35
Alias: $VSACADICareExperiencePreferences = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.11
Alias: $VSACADIConsentType = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.13
Alias: $VSACADIInitialTreatmentPMOOptions = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.27 // mlt_note: there is a LOINC answer list: LL6264-7
Alias: $VSACADIInitialTreatmentPMOOptionsGrouping = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.33
Alias: $VSACADIAdditionalPMOProcedures = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.32
Alias: $VSACADIAdditionalPMOProceduresGrouping = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.34
Alias: $VSACADIMedicallyAssistedNutritionOrderOptions = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.35
Alias: $VSACADIMedicallyAssistedNutritionOrderOptionsGrouping = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.36
Alias: $VSACCardiopulmonaryResuscitationOrderOptions = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.28

// Standard extension aliases
Alias: $data-absent-reason = http://terminology.hl7.org/CodeSystem/data-absent-reason

// fix for FHIR-46149
Alias: $VSACADIAdvanceDirectiveCategoriesGrouper = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1115.25


---

// File: input/fsh/AutopsyObservationProfile.fsh

Profile: ADIAutopsyObservation
Parent: Observation
Id: ADI-AutopsyObservation
Title: "ADI Autopsy Observation"
Description: "This profile is used to represent the author's thoughts about autopsy."

* text 1..1 MS
* status = #final
//* code from ADIAutopsyVS (required)
* code = $LOINC#75782-3
* subject 1..1 MS
* subject only Reference($USCorePatient)

* value[x] 1..1 MS

* note 




---

// File: input/fsh/CareExperiencePreferenceProfile.fsh

Profile: ADICareExperiencePreference
Parent: Observation
Id: ADI-CareExperiencePreference
Title: "ADI PtAuthored Care Experience Preference"
Description: "Care Experience Preference is a clinical statement that presents the author's personal thoughts about something a person feels is relevant to their care experience and may be pertinent when planning their care."


* category ^slicing.discriminator.type = #value 
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on $this value"

* category 1..*
//* category from $VSACADICareExperiencePreferences (extensible) //moved from 'category' to 'code' FHIR-35078
* category contains
    type 1..1 MS 
    
* category[type] = ADIPreferenceCategoryCS#care-experience-preference

* code 1..1 MS
* code from $VSACADICareExperiencePreferences (extensible)
* code.text MS

* text 1..1 MS

* status = #final

* subject 1..1 MS
* subject only Reference($USCorePatient)

* value[x] 1..1 MS

* extension contains adi-enclosedPrecondition-extension named EnclosedPreconditionExtension 0..1

/*Profile: ADICareExperiencePreference
Parent: Observation
Id: ADI-CareExperiencePreference
Title: "ADI PtAuthored Care Experience Preference"
Description: "Care Experience Preference is a clinical statement that presents the author's personal thoughts about something he or she feels is relevant to his or her care experience and may be pertinent when planning his or her care."

* text 1..1 MS
* status = #final


* code 1..1 MS
* code from ADICareExperiencePreferencesVS (extensible)
* code.text MS
* subject 1..1 MS
* subject only Reference($USCorePatient)

* value[x] 1..1 MS
* value[x].extension contains
    adi-enclosedPrecondition-extension named EnclosedPreconditionExtension 0..1

* value[x].extension[adi-enclosedPrecondition-extension] ^comment = "Precondition contains the components that make up the Actual Value for use by systems for rendering or other purposes. It must not include additional information."

* note MS

*/
// If we restrict the value type, have guidance about including information in note

---

// File: input/fsh/CodeSystems_tbdcodes.fsh

CodeSystem: ADITempCS
Title: "ADI Temporary Code System"
Id: adi-temp-cs
Description: "Codes to be used as placeholders until they have a formal assigned code from a recognized terminology steward"
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."
* #ldo "Document completion information" "Information in a document that pertains to actions or activities taken to finalize the document."
* #adm "Document administrative information" "Administrative information in a document."
* #pmo-medically-assisted-hydration-service-request "Medically assisted hydration order"
* #situational-decision "Decide if or when the situation arises"
* #medical-assisted-nutrition-while-beneficial "Medically assisted nutrition until not beneficial or a burden to the patient"
* #hydration-surgical-placed-tubes "Hydration through surgically placed tubes"
* #no-hydration-desired "No artificial means of hydration desired"
* #hydration-for-pain-relief-or-comfort "Medically assisted hydration only to relieve pain and discomfort"
* #artificial-hydration-no-surgical-placed-tubes "Trial period for artificial hydration but no without surgically-placed tubes"
* #acp-services "Advance care planning services"

---

// File: input/fsh/CodeSystems.fsh


CodeSystem: ADIHCADecisionsCS
Title: "Healthcare Agent Decision Codes"
Description: "Codes indicating decisions a healthcare agent may or may not make on behalf of an individual."
* #intubation "Intubation" "Intubation"
* #tube-feeding "Tube feeding" "Tube feeding"
* #life-support "Life support" "Life support"
* #iv-fluid-and-support "IV fluid and support" "IV fluid and support"
* #antibiotics "Antibiotics" "Antibiotics"
* #cpr "Cardiopulmonary Resuscitation (CPR)" "Cardiopulmonary Resuscitation (CPR)"
* #resuscitation-non-cpr "Non-CPR Resuscitation" "Non-CPR Resuscitation"
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: ADIPreferenceCategoryCS
Title: "ADI Goal Category Code System"
Description: "Advance Directive Preference Category"
* #intervention-preference "Intervention preference" "A personal preference for a type of medical intervention (treatment) request under certain conditions."
* #care-experience-preference "Care experience preference" "Personal thoughts about something a person feels is relevant to their care experience and may be pertinent when planning their care."
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: ADIRevokeStatusCS
Title: "ADI Revoke Status Code System"
Description: "Advance Directive Revoke Status"
* #cancelled "The composition is unavailable because the measurement was not started or not completed (also sometimes called \"aborted\"). "
* #entered-in-error "The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid."
* #deprecated "This composition has been withdrawn or superseded and should no longer be used."


---

// File: input/fsh/DocumentationObservationProfile.fsh

Profile: ADIDocumentationObservation
Parent: Observation
Id: ADI-DocumentationObservation
Title: "ADI Documentation Observation"
Description: "This profile is used to indicate if additional advance directive documents, such as physician order for life sustaining treatment (MOLST or POLST) or Do Not Resuscitate Order (DNR) exist and a reference to the document."

* text 1..1 MS

// TODO is this final?
* status = #final
//TODO What should we use for category. Observations are commonly queried on category.

// TODO should the code.coding?
* code MS
* code = $LOINC#42348-3

//* code = from ADIDocumentationTypeVS (extensible)

// What to do about these displayName requirements? With FHIR teh display is in a coding which could have multiple instances (translations).
//   Do we limit the coding instances? (not preferred).  Do we require display for all of them? Or do we define only the first instance to be exactly as it should be?
//* code.coding.display 1..1  // CONF:4445-33536
* subject 1..1 MS
* subject only Reference($USCorePatient)

* focus ^short = "Reference to the additional document this observation is about"

* effective[x] 1..1 MS  // CONF:4445-33113

* value[x] 1..1 MS
* value[x] only CodeableConcept
// Remove Presence indicator

* valueCodeableConcept from ADIDocumentationTypeVS (extensible)

// need to add derived from documentReference to allow pointing to the actual order

* performer 1..1



* note MS


* performer ^comment = "The party responsible for or made the observation. For individual (patient) authored advance directive documents this will likely be the patient."


/*
Profile: ADIDNROrderObservation
Parent: Observation
Id: ADI-DNROrderObservation
Title: "ADI DNR Order Observation"
Description: "This profile is used to indicate if a person has a Do Not Resuscitate, Do Not Attempt Resuscitation, or Allow Natural Death order is in place."

* text 1..1 MS

// TODO is this final?
* status = #final
//TODO What should we use for category. Observations are commonly queried on category.

// TODO should the code.coding?
* code MS
* code = $LOINC#81351-9 // CONF:4445-33158

// What to do about these displayName requirements? With FHIR teh display is in a coding which could have multiple instances (translations).
//   Do we limit the coding instances? (not preferred).  Do we require display for all of them? Or do we define only the first instance to be exactly as it should be?
//* code.coding.display 1..1  // CONF:4445-33536
* subject 1..1 MS
* subject only Reference($USCorePatient)

* effective[x] MS  // CONF:4445-33113

* value[x] 1..1 MS
* value[x] only CodeableConcept


// need to add derived from documentReference to allow pointing to the actual order


* note MS
*/

---

// File: input/fsh/DocumentReferenceProfile.fsh

Profile: ADIDocumentReference
// [TODO] Does this need to derive from US Core DocumentReference? If so, need to review the requirements below and remove incompatible or redundant requirements
Parent: DocumentReference
Id: ADI-DocumentReference
Title: "ADI Document Reference"
Description: "This profile defines constraints that represent the information needed to register an advance directive information document on a FHIR server."

* identifier MS
* status MS
* type 1..1 MS
* date 1..1 MS
* category 1..* MS
* category from $USCoreDocumentReferenceCategory (extensible)
* subject 1..1 MS
* subject only Reference($USCorePatient)
* date MS
* author MS
* author only Reference($USCorePractitioner or $USCoreOrganization or $USCorePatient)
* custodian MS
* custodian only Reference($USCoreOrganization)
* content MS
* content.attachment MS
* content.attachment.contentType 1..1 MS
* content.attachment.data MS
* content.attachment.url MS
* content.attachment.creation 1..1 MS
* content.format MS
* context MS
* context.encounter MS
* context.encounter only Reference($USCoreEncounter)
* context.period MS

* docStatus from ADIDocumentReferenceStatusVS (required) // fix for FHIR-46153

* extension contains
    adi-document-revoke-status named DocumentRevokeStatus 0..1 MS and
    adi-docVersionNumber-extension named DocumentReferenceVersionNumber 0..1 MS
// These are from the mapping document and are likely not the intended final short descriptions
RuleSet: ADIDocumentReferenceShortDescriptions
* type ^short = "Advance Directive Categories"
* subject ^short = "Patient"

// TODO add page guidance on the different document types
/*
* include $LOINC#64298-3 "Power of attorney"
* include $LOINC#81334-5 "Patient Personal advance care plan"
* include $LOINC#86533-7 "Patient Living will"
* include $LOINC#92664-2 "Power of attorney and Living will"
*/
//* type from ADIAdvanceDirectiveCategoriesVS (extensible)
//* type short name "Advance Directives Categories"

---

// File: input/fsh/Extensions.fsh


Extension: DocumentReferenceVersionNumber
Id: adi-docVersionNumber-extension
Title: "Version Number"
Description: "Advance Directive Information VersionNumber Extension represents a numeric value used to version successive replacement documents."
Context: DocumentReference
* valueString 1..1 MS
* value[x] only string


Extension: Jurisdiction
Id: adi-jurisdiction-extension
Title: "Jurisdiction"
Description: "Jurisdiction for which content is applicable."
Context: Composition, Extension
* value[x] only CodeableConcept
* valueCodeableConcept 1..1 MS
* valueCodeableConcept from $HL7JurisdictionCodes (extensible)


//[TODO get clarification on the extension descriptions and constraints. ]

Extension: DataEntererExtension
Id: adi-dataEnterer-extension
Title: "Data Enterer"
Description: "Data Enterer Extension represents the person who transferred the content, written or dictated, into the Advance Directive document. To clarify, an author provides the content, subject to their own interpretation; a dataEnterer adds an author’s information to the electronic system."
Context: Composition
* value[x] only Reference
* valueReference 1..1 MS
* valueReference only Reference($USCorePractitioner or $USCorePractitionerRole or $USCorePatient or RelatedPerson)


Extension: InformantExtension
Id: adi-informant-extension
Title: "Informant"
Description: "The Advance Directive Information Informant Extension describes an information source for any content within the Advance Directive document. This informant is constrained for use when the source of information is an assigned health care provider for the patient."
Context: Composition
* value[x] only Reference
* valueReference 1..1 MS
* valueReference only Reference($USCorePractitioner or $USCorePractitionerRole or $USCorePatient or RelatedPerson)

Extension: ParticipantExtension
Id: adi-participant-extension
Title: "Participant"
Description: "The Advance Directive Information Participant Extension identifies supporting entities, including parents, relatives, caregivers, insurance policyholders, guarantors, and others related in some way to the patient. A supporting person or organization is an individual or an organization with a relationship to the patient. A supporting person who is playing multiple roles would be recorded in multiple participants (e.g., emergency contact and next-of-kin)."
Context: Composition
* value[x] only Reference
* valueReference 1..1 MS
* valueReference only Reference($USCorePractitioner or $USCorePractitionerRole or RelatedPerson)


Extension: PerformerExtension
Id: adi-performer-extension
Title: "Performer"
Description: "The Advance Directive Information Performer Extension represents clinicians who actually and principally carry out the clinical services being documented. In a transfer of care this represents the healthcare providers involved in the current or pertinent historical care of the patient. Preferably, the patients key healthcare care team members would be listed, particularly their primary physician and any active consulting physicians, therapists, and counselors."
Context: Composition
* value[x] only Reference
* valueReference 1..1 MS
* valueReference only Reference($USCorePractitioner or $USCorePractitionerRole)

/*
Extension: OrderExtension
Id: adi-order-extension
Title: "Order"
Description: "The Advance Directive Information Order Extension represents orders that are fulfilled by this document such as a radiologists report of an x-ray."
* value[x] only Reference
* valueReference 1..1 MS
* valueReference only Reference(ServiceRequest)
*/


Extension: EnclosedPreconditionExtension
Id: adi-enclosedPrecondition-extension
Title: "Enclosed Precondition"
Description: "The Enclosed Precondition Extension allows for a precondition to be applied to an advance directive observation or goal.  When applied to Goal instance, the stated goal only applies if the precondition is met.  For example, the precondition 'If I am so sick or seriously injured that I cannot express my own medical treatment preferences' could be applied to the patient's goal of 'Avoiding prolonged dependence on machines'.  When applied to an Observation instance, it is important to note that the precondition applies only to the preference expressed within the observation, not to the observation itself, since the act of recording the preference as an observation has already been done.  For example, the precondition 'If I am nearing end of life' could be applied to the preference 'Please attempt to notify someone from my religion at the following number...' recorded within an observation."
Context: Observation, Goal.description
* value[x] only CodeableConcept
* valueCodeableConcept 1..1 MS	


Extension: NotaryInformationExtension
Id: adi-notaryInformation-extension
Title: "Notary Information"
Description: "The Notary Information Extension allows for the capture of information relevant to the notary."
Context: RelatedPerson
* extension contains
	AttesterRole 1..1 and
    AttestationStatement 0..1 and
    Signature 0..1 and
	NotarySealId 0..1 and
	NotaryCommissionExpirationDate 0..1 and
	adi-jurisdiction-extension named NotaryCommissionJurisdiction 0..1

* obeys notary-information-requires-notary-role

* extension[AttesterRole] ^short = "Attester Role"
* extension[AttesterRole].value[x] 1..1 MS
* extension[AttesterRole].value[x] only CodeableConcept
* extension[AttesterRole].valueCodeableConcept from ADIAttesterRoleTypeVS (extensible)

* extension[AttestationStatement] ^short = "Attestation Statement"
* extension[AttestationStatement].value[x] 1..1 MS
* extension[AttestationStatement].value[x] only string or markdown

* extension[Signature] ^short = "Attester Signature with Date"
* extension[Signature].value[x] 1..1 MS
* extension[Signature].value[x] only Signature

* extension[NotarySealId] ^short = "Notary seal id"
* extension[NotarySealId].value[x] 1..1 MS
* extension[NotarySealId].value[x] only Identifier

* extension[NotaryCommissionExpirationDate] ^short = "Notary commission expiration date"
* extension[NotaryCommissionExpirationDate].value[x] 1..1 MS
* extension[NotaryCommissionExpirationDate].value[x] only date



Extension: EffectiveDateExtension
Id: adi-effective-date-extension
Title: "Effective Date"
Description: "The Advance Directive document effective dates."
Context: Composition
* value[x] only Period
* valuePeriod 1..1 MS


Extension: ClauseExtension
Id: adi-clause-extension
Title: "Clause"
Description: "A clause or set of clauses relevant to the resource or element being extended"
Context: BackboneElement, Bundle, Composition, Consent
* extension 1..*
* extension contains
	Title 0..1 and
	Type 0..1 and
	Policy 0..* and
	Clause 1..*

* extension[Title] ^short = "Section in which clauses are presented."
* extension[Title].value[x] 1..1
* extension[Title].value[x] only string

* extension[Type] ^short = "Type of clause."
* extension[Type].value[x] 1..1
* extension[Type].value[x] only CodeableConcept
* extension[Type].valueCodeableConcept from $VSACClauseType (extensible)

* extension[Policy] ^short = "Link to the policies related to the clause"
* extension[Policy].value[x] 1..1 MS
* extension[Policy].value[x] only Reference

* extension[Clause] ^short = "A human readable clause."
* extension[Clause].value[x] 1..1 MS
* extension[Clause].value[x] only markdown


Extension: GoalOrderByDescendingPriority
Id: adi-goal-order-by-descending-priority-extension
Title: "Goal Order by Descending Priority"
Description: "Indicates if the goals are ordered in descending priority (Y) or no specific order (N)."
Context: CarePlan
* value[x] only CodeableConcept
* valueCodeableConcept 1..1 MS
* valueCodeableConcept from $HL7YesNoVS (extensible)


Invariant:  notary-information-requires-notary-role
Description: "If Notary information (seal or commission expiration date) exists, then role must be notary"
Expression: 
	"extension.where(url = 'NotarySealId').value.exists() or 
	extension.where(url = 'NotaryCommissionExpirationDate').value.exists() 
	implies extension.where(url = 'AttesterRole').value.coding.exists(code='81372-5')"

// mlt_20231105: line below commented out for troubleshooting Invariant.
// Expression: "(extension.where(url = 'NotarySealId').valueIdentifier.exists() or extension.where(url = 'NotaryCommissionExpirationDate').valueDate.exists()) implies extension.where(url = 'AttesterRole').valueCodeableConcept.where(coding.code='81372-5').exists()"

//Expression: "category.coding.where(code.memberOf('http://hl7.org/fhir/us/pacio-adi/ValueSet/ADIInterventionPreferencesOrdinalVS')).exists() implies description.coding.where(code.memberOf('http://terminology.hl7.org/ValueSet/v2-0136')).exists()"
//Expression: "category.coding.code.memberOf('http://hl7.org/fhir/us/pacio-adi/ValueSet/ADIInterventionPreferencesOrdinalVS').exists()"
Severity:   #error



Extension: DocumentRevokeStatus
Id: adi-document-revoke-status
Title: "Revoke Status"
Description: "The Advance Directive document revoke status."
Context: Composition, DocumentReference
* value[x] only code
* value[x] 0..1 MS
* value[x] from ADIDocumentRevokeStatusVS (required) //  R5 Composition Status valueset. Fix for FHIR-


// TODO Could add Invariant for Signature.type matching the attesterRole
// TODO Notary Expiration Date?



---

// File: input/fsh/OrganDonationObservationProfile.fsh

Profile: ADIOrganDonationObservation
Parent: Observation
Id: ADI-OrganDonationObservation
Title: "ADI Organ Donation"
Description: "This profile is used to represent the author's thoughts about organ donation."

* text 1..1 MS
* status = #final


* code 1..1 MS
//* code from ADIOrganDonationVS (required)
* code = $LOINC#75781-5
* code.text 
* subject 1..1 MS
* subject only Reference($USCorePatient)

* value[x] 1..1 MS

* note 



---

// File: input/fsh/PACPCompositionProfile.fsh

Profile: ADIPACPComposition
Parent: ADICompositionHeader
Id: ADI-PACPComposition
Title: "ADI PtAuthored Composition"
Description: "This profile encompasses information that makes up the author’s advance care information plan."

* author only Reference($USCorePatient)
* attester.party only Reference($USCorePatient or RelatedPerson)

* section ^slicing.discriminator.type = #pattern 
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.ordered = false   // can be omitted, since false is the default
* section ^slicing.description = "Slice based on $this value"

* section 1..*
* section.text 1..1 MS
* section ^slicing.discriminator.type = #pattern 
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.ordered = false   // can be omitted, since false is the default
* section ^slicing.description = "Slice based on $this value"
* section contains
    healthcare_agent 0..1 and
    gpp_for_certain_health_condition 0..1 MS and
    gpp_personal_care_experience 0..1 MS and
    gpp_upon_death 0..1 MS and
    additional_documentation 0..1 MS and
    witness_and_notary 0..1 MS and
    administrative_information 0..1 MS

* section[healthcare_agent] ^short = "Healthcare agents, healthcare agent advisors, and consent regarding their roles, powers, and limitations"

* obeys HCA-section-cardinality and HCA-section-emptyReason-required

* section[healthcare_agent].title 1..1 MS
* section[healthcare_agent].code 1..1 
* section[healthcare_agent].code = $LOINC#81335-2
* section[healthcare_agent].entry 
* section[healthcare_agent].entry only Reference(ADIParticipantConsent or ADIParticipant)
* section[healthcare_agent].emptyReason from ADINoHealthcareAgentIncludedReasonVS (required)
* section[healthcare_agent].emptyReason ^short = "This is only MS (must support) if the document types are supported."
* section[healthcare_agent] obeys HCA-section-entries
// TODO add guidance around this emptyReason element
// TODO add invariant stating that if entry exists, then agent Consent must exist

* section[gpp_for_certain_health_condition] ^short = "Preference care plans defined for specific situations and/or conditions"
* section[gpp_for_certain_health_condition] ^definition = "The section defines Goals, Preferences, and Priorities of the person under certain health conditions.  In this section, the CarePlan resource provides a construct by which the identified personal values and preferences for treatment can be integrated into the plan of care which acts, from a workflow or process perspective, as the roadmap for care delivery and treatment. "
* section[gpp_for_certain_health_condition].title 1..1 MS
* section[gpp_for_certain_health_condition].code 1..1 
* section[gpp_for_certain_health_condition].code = $LOINC#81336-0
//* section[gpp_for_certain_health_condition].entry only Reference(ADIPreferenceCarePlan or ADIPersonalInterventionPreference or ADIPersonalInterventionRequestPreference or ADIPersonalPrioritiesOrganizer or ADIPersonalGoal)
* section[gpp_for_certain_health_condition].entry only Reference(ADIPreferenceCarePlan)

* section[gpp_personal_care_experience] ^short = "Quality of Life related personal care experiences, personal goals, and priorities"
* section[gpp_personal_care_experience].title 1..1 MS
* section[gpp_personal_care_experience].code 1..1 
* section[gpp_personal_care_experience].code = $LOINC#81338-6
* section[healthcare_agent].orderedBy 
* section[gpp_personal_care_experience].entry 
* section[gpp_personal_care_experience].entry only Reference(ADICareExperiencePreference or ADIPersonalPrioritiesOrganizer or ADIPersonalGoal)

* section[gpp_upon_death] ^short = "Goals, preferences, and priorities upon death"
* section[gpp_upon_death].title 1..1 MS
* section[gpp_upon_death].code 1..1 
* section[gpp_upon_death].code = $LOINC#81337-8
* section[gpp_upon_death].entry 
//* section[gpp_upon_death].entry only Reference(ADIPreferenceCarePlan or ADIPersonalInterventionPreference or ADIPersonalInterventionRequestPreference or ADIPersonalPrioritiesOrganizer or ADIAutopsyObservation or ADIOrganDonationObservation or ADIPersonalGoal)
* section[gpp_upon_death].entry only Reference(ADIPreferenceCarePlan or ADIPersonalInterventionPreference or ADIPersonalPrioritiesOrganizer or ADIAutopsyObservation or ADIOrganDonationObservation or ADIPersonalGoal)


* section[additional_documentation] ^short = "Observations regarding the existence of other advance directive related information"
* section[additional_documentation].title 1..1 MS
* section[additional_documentation].code 1..1 
* section[additional_documentation].code = $LOINC#77599-9

* section[additional_documentation].entry only Reference(ADIDocumentationObservation)


* section[witness_and_notary] ^short = "Witness and notary information.  The first witness should be the author of the document"
* section[witness_and_notary] ^definition = "A participant who has assumed the role of Notary and attested to the authenticity of the signers and accuracy of the composition/document."
* section[witness_and_notary].title 1..1 MS
* section[witness_and_notary].code 1..1 
* section[witness_and_notary].code = $LOINC#81339-4
// TODO DWH - Add short description "Witness and notary statement" to ClauseExtension

* section[witness_and_notary].entry only Reference(ADIWitness or ADINotary)

* section[administrative_information] ^short = "Administrative information associated with this personal advance care plan"
* section[administrative_information].title 1..1 MS
* section[administrative_information].code 1..1 
* section[administrative_information].code = $LOINC#81381-6





/*
Invariant:  HCA-section-entries0
Description: "0 - If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.exists().not()"
//Expression: "entry.resolve() is Consent" fail
Severity:   #error



Invariant:  HCA-section-entries1
Description: "1 -If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.where($this.resolve() is Consent)"
Severity:   #error



Invariant:  HCA-section-entries2
Description: "2 - If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.where($this.resolve() is RelatedPerson)"
Severity:   #error

*/

Invariant:  HCA-section-entries
Description: "If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.exists().not() or (entry.where($this.resolve() is Consent).exists() and entry.where($this.resolve() is RelatedPerson).exists())"
Severity:   #error

Invariant: HCA-section-cardinality
Description: "If the PACP Composition document type is equal to Power of attorney (64298-3), Patient Personal advance care plan (81334-5), or Power of attorney and Living will (92664-2), then the PACP Composition requires one and only one healthcare agent section slice with code = 81335-2 (Patient Healthcare agent)"
Expression: "(type.coding.where(code = '64298-3').exists().not() and type.coding.where(code = '81334-5').exists().not() and type.coding.where(code = '92664-2').exists().not()) or section.where(code.coding.where(code = '81335-2').exists()).count() = 1"
Severity:   #error

Invariant: HCA-section-emptyReason-required
Description: "section[healthcare_agent].emptyReason is required if section[healthcare_agent] is present and there are no entries."
// Expression: "section.where(code.coding.where(code = '81335-2')).exists().not() or section.where(code.coding.where(code = '81335-2')).entry.count() > 0 or section.where(code.coding.where(code = '81335-2')).emptyReason.exists()"
// Expression: "section.code.coding.where(code = '81335-2').exists().not() or section.code.coding.where(code = '81335-2').count() > 0 or section.emptyReason.exists()"
Expression: "section.where(code.coding.where(code = '81335-2').exists()).exists().not() or section.where(code.coding.where(code = '81335-2').exists()).entry.count() > 0 or section.where(code.coding.where(code = '81335-2').exists()).emptyReason.exists()"
Severity:   #error


---

// File: input/fsh/PersonalGoal.fsh

Profile: ADIPersonalGoal
Parent: $USCoreGoal
Id: ADI-PersonalGoal
Title: "ADI PtAuthored Personal Goal"
Description: "This profile is a statement that presents the author's personal health and treatment goals that are pertinent when planning their care."

* category ^slicing.discriminator.type = #value 
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on $this value"
* category MS
* category 1..*
* category.text MS
* category contains type 1..1 MS 
* category[type] = $LOINC#87528-6

* text 1..1 MS

* description 1..1 MS
* description.extension contains
    adi-enclosedPrecondition-extension named EnclosedPreconditionExtension 0..1
* description.extension[adi-enclosedPrecondition-extension] ^comment = "Contextual Value contains the components that make up the Actual Value for use by systems for rendering or other purposes. It must not include additional information."

* subject 1..1 MS
* subject only Reference($USCorePatient)

* expressedBy 1..1 MS
* expressedBy only Reference($USCorePatient)

* obeys goal-subject-expressedby

Invariant:  goal-subject-expressedby
Description: "subject and expressedBy refer to the same patient"
Expression: "subject = expressedBy"
Severity:   #error



---

// File: input/fsh/PersonalInterventionPreferenceProfile.fsh

Profile: ADIPersonalInterventionPreference
Parent: Observation
Id: ADI-PersonalInterventionPreference
Title: "ADI PtAuthored Personal Intervention Preference"
Description: "This profile is used to represent a personal preference for a type of medical intervention (treatment) request under certain conditions."

* category ^slicing.discriminator.type = #value 
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on $this value"

* category 1..*
//* category from ADIInterventionPreferencesVS (extensible) //moved from 'category' to 'code' FHIR-35078 
* category contains
    type 1..1 MS 
    
* category[type] = ADIPreferenceCategoryCS#intervention-preference

* code 1..1 MS
* code from $VSACADIInterventionPreferencesEndOfLifeGrouping (extensible) // ADIInterventionPreferencesVS (extensible)
* code.text MS

* text 1..1 MS

* status = #final

* subject 1..1 MS
* subject only Reference($USCorePatient)

* value[x] 1..1 MS

* extension contains adi-enclosedPrecondition-extension named EnclosedPreconditionExtension 0..1

// TODO Fix invariant
//* obeys value-personal-intervention-preference-ordinal

Invariant:  value-personal-intervention-preference-ordinal
Description: "If the ADI PtAuthored Personal Intervention Preference code is from the ADI PtAuthored Personal Intervention Preference Ordinal ValueSet, the value SHALL be 'Y' or 'N'"
Expression: "category.coding.where(code.memberOf('http://hl7.org/fhir/us/pacio-adi/ValueSet/ADIInterventionPreferencesOrdinalVS')).exists() implies (description.coding.code = 'Y' or description.coding.code = 'N')"
//Expression: "category.coding.where(code.memberOf('http://hl7.org/fhir/us/pacio-adi/ValueSet/ADIInterventionPreferencesOrdinalVS')).exists() implies description.coding.where(code.memberOf('http://terminology.hl7.org/ValueSet/v2-0136')).exists()"
//Expression: "category.coding.code.memberOf('http://hl7.org/fhir/us/pacio-adi/ValueSet/ADIInterventionPreferencesOrdinalVS').exists()"
Severity:   #error



---

// File: input/fsh/PersonalPrioritiesOrganizerProfile.fsh

Profile: ADIPersonalPrioritiesOrganizer
Parent: List
Id: ADI-PersonalPrioritiesOrganizer
Title: "ADI Personal Priorities Organizer"
Description: "Personal Priorities Organizer is used to represent a set of personal goals, preferences or care experiences in a preferred ranked order."

* text 1..1 MS
* status MS // should there be a specific status code?

* title 1..1 // Should this be required?
* code 1..1

* code = $LOINC#81340-2 // CONF:4445-33374

* subject 1..1 MS
* subject only Reference($USCorePatient)

* orderedBy 1..1 MS
* orderedBy = http://terminology.hl7.org/CodeSystem/list-order#priority


* entry.item only Reference(ADIPersonalGoal or ADIPersonalInterventionPreference or ADICareExperiencePreference)

---

// File: input/fsh/PMOCarePlan.fsh

Profile: ADIPMOCarePlan
Parent: $USCoreCarePlan
Id: ADI-PMOCarePlan
Title: "ADI PMO Care Plan"
Description: "The Portable Medical Order Care Plan."

//* text 1..1 MS

* status = #active
* intent = #order

* category ^slicing.discriminator.type = #pattern 
* category ^slicing.discriminator.path = "$this"
// Should the pattern be open or closed?
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on $this value"
* category contains
    portable_medical_order 1..1 MS

// TODO find a proper code 
* category[portable_medical_order] = $LOINC#100821-8 //"Advance care plan"


* subject 1..1 MS
* subject only Reference($USCorePatient)

* addresses 0..* MS
* addresses ^comment = "TODO"

* activity.reference only Reference(ADIPMOServiceRequest)

//* goal ^short = "Patient's preferences and goals for the scope of this care plan."
//* goal 1..* MS
//* goal only Reference(ADIPersonalInterventionPreference or ADIPersonalGoal or ADICareExperiencePreference)

//* extension contains
    //padi-goal-order-by-descending-priority-extension named GoalOrderByDescendingPriority 0..1 

---

// File: input/fsh/PMOCompositionProfile.fsh

Profile: ADIPMOComposition
Parent: ADICompositionHeader
Id: ADI-PMOComposition
Title: "ADI PMO Composition"
Description: "This profile encompasses information that makes up a practitioner's portable medical order."

* author only Reference($USCorePractitionerRole)

* type = $LOINC#93037-0 // "Portable medical order form"

// fix for FHIR-46609: PMO Composition event needs further constraints for facilitators.
// * event.detail only Reference(ADIPMOServiceRequest or ADIParticipantConsent or ADIPMOProcedure)

// modified FHIR-46609 with FHIR-48858 to accommodate slicing in support of ADI faciliator at the PMO Composition Header level.
* event.detail contains pmo-servicerequest 0..* and pmo-participantconsent 0..* and pmo-procedure 0..*
* event.detail[pmo-servicerequest] only Reference(ADIPMOServiceRequest)
* event.detail[pmo-servicerequest] ^short = "ADI PMO Service Request"
* event.detail[pmo-participantconsent] only Reference(ADIParticipantConsent)
* event.detail[pmo-participantconsent] ^short = "ADI Participant Consent"
* event.detail[pmo-procedure] only Reference(ADIPMOProcedure)
* event.detail[pmo-procedure] ^short = "ADI PMO Procedure"


* section ^slicing.discriminator.type = #pattern 
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.ordered = false   // can be omitted, since false is the default
* section ^slicing.description = "Slice based on $this value"

* section 1..*
* section.text 1..1 MS
* section ^slicing.discriminator.type = #pattern 
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.ordered = false   // can be omitted, since false is the default
* section ^slicing.description = "Slice based on code"
* section contains
    portable_medical_orders 1..1 MS and
    completion_information 0..1 MS and 
    administration_information 0..1 MS and
    additional_documentation 0..1 MS and
    witness_and_notary 0..1 MS

// ******* Medical Orders Section ********
* section[portable_medical_orders] ^short = "Portable Medical Orders"
* section[portable_medical_orders].extension[adi-clause-extension] ^short = "Section clause, additional instructions, or information"
* section[portable_medical_orders].title 1..1 MS
* section[portable_medical_orders].code 1..1 MS
* section[portable_medical_orders].code = $LOINC#59772-4

* section[portable_medical_orders].entry MS
* section[portable_medical_orders].entry only Reference(ADIPMOServiceRequest) // or ADIPMONoAdditionalRequestObservation)

// TODO: reconsider slicing entry as profile slicing causes a significant operational cost (see https://chat.fhir.org/#narrow/stream/179166-implementers/topic/Slicing.20Composition.20Entries and 
// https://www.hl7.org/fhir/profiling.html profile discriminator type)
* section[portable_medical_orders].entry ^slicing.discriminator.type = #profile 
* section[portable_medical_orders].entry ^slicing.discriminator.path = "resolve()"
* section[portable_medical_orders].entry ^slicing.rules = #open
* section[portable_medical_orders].entry ^slicing.ordered = false   // can be omitted, since false is the default
* section[portable_medical_orders].entry ^slicing.description = "Slice based on $this value"
* section[portable_medical_orders].entry contains
    cardiopulmonary_resuscitation_service_request 0..1 MS and
    initial_treatment_service_request 0..1 MS and
    additional_orders_or_instructions_service_request 0..* MS and
    medically_assisted_nutrition_service_request 0..1 MS and
    medically_assisted_hydration_service_request 0..1 MS

* section[portable_medical_orders].entry[cardiopulmonary_resuscitation_service_request] only Reference(ADIPMOCPRServiceRequest)
* section[portable_medical_orders].entry[initial_treatment_service_request] only Reference(ADIPMOInitialTreatmentServiceRequest)
* section[portable_medical_orders].entry[additional_orders_or_instructions_service_request] only Reference(ADIPMOAdditionalOrdersOrInstructionsServiceRequest)
* section[portable_medical_orders].entry[medically_assisted_nutrition_service_request] only Reference(ADIPMOMedicallyAssistedNutritionServiceRequest)
* section[portable_medical_orders].entry[medically_assisted_hydration_service_request] only Reference(ADIPMOMedicallyAssistedHydrationServiceRequest)

// ******* PMO Completion Information Section ********

* section[completion_information] ^short = "Portable medical order completion information"
* section[completion_information].extension[adi-clause-extension] ^short = "Administrative, instructional, and/or legal information"
* section[completion_information].title 1..1 MS
* section[completion_information].code 1..1 MS
* section[completion_information].code = adi-temp-cs#ldo // "Portable medical order completion information" // Code is LOINC pre-release as on 11/03/2022 - https://loinc.org/prerelease/
// need to slice on entries. OrderReview has a max of 1 and orders participant has a max of 1

* section[completion_information].entry ^slicing.discriminator.type = #profile
* section[completion_information].entry ^slicing.discriminator.path = "resolve()"
* section[completion_information].entry ^slicing.rules = #open 
* section[completion_information].entry ^slicing.ordered = false
* section[completion_information].entry ^slicing.description = "Slice based on $this value"

* section[completion_information].entry contains
    orders_review 0..* and
    orders_participant 0..* and
    hospice_observation 0..1 and 
    hospice_agency 0..1

* section[completion_information].entry[orders_review] only Reference(ADIPMOReviewObservation)
* section[completion_information].entry[orders_participant] only Reference(ADIPMOParticipantObservation)
* section[completion_information].entry[hospice_observation] only Reference(ADIPMOHospiceObservation)
* section[completion_information].entry[hospice_agency] only Reference($USCoreOrganization)

// ******* PMO Administration Information Section ********

* section[administration_information] ^short = "Observations regarding the existence of other advance directive related information"
* section[administration_information].title 1..1 MS
* section[administration_information].code 1..1 MS
* section[administration_information].code = adi-temp-cs#adm
// * section[administration_information].entry only Reference(<enter reference to EmergencyContactInformation>)

* section[administration_information].entry ^slicing.discriminator.type = #profile
* section[administration_information].entry ^slicing.discriminator.path = "resolve()"
* section[administration_information].entry ^slicing.rules = #open 
* section[administration_information].entry ^slicing.ordered = false
* section[administration_information].entry ^slicing.description = "Slice based on $this value"

* section[administration_information].entry contains
    adi_personal_goal 0..* MS
* section[administration_information].entry[adi_personal_goal] only Reference(ADIPersonalGoal)

// ******* PMO Additional Documentation Section ********

* section[additional_documentation] ^short = "Observations regarding the existence of other advance directive related information"
* section[additional_documentation].title 1..1 MS
* section[additional_documentation].code 1..1 MS
* section[additional_documentation].code = $LOINC#77599-9
* section[additional_documentation].entry only Reference(ADIDocumentationObservation)

// ******* PMO Witness and Notary Section ********

* section[witness_and_notary] ^short = "Witness and notary information.  The first witness should be the author of the document."
* section[witness_and_notary] ^definition = "A participant who has assumed the role of Notary and attested to the authenticity of the signers and accuracy of the composition/document."
* section[witness_and_notary].title 1..1 MS
* section[witness_and_notary].code 1..1 MS
* section[witness_and_notary].code = $LOINC#81339-4
* section[witness_and_notary].entry only Reference(ADIParticipant)


//****** Open for discussion **********
// Signature
// How to capture hospice agency
// TODO add extension to ServiceRequest for basedOn consent.

// TODO: May need to add a witness and notary section for the persons signature
// TODO: Where it physician participants? What are informants in CDA ePOLST? Looks like dataEnterer (from POLST mapping) For Ordering participant, may be done by a PA, so a supervising physician. Physicians should have licensing/cert #s
// TODO: In CDA ePOLST review •	Legal Authenticator va Authentication. •	Legal Authenticator seems to be for supervising
// TODO: Part of National POLST - Professional Assisting Health Care Professional w/ Completion (Name) - With role that could include Social Worker, Nurse, Clergy, Other.
// TODO: CDA ePOLST legalAuthenticator is •	Legal Authenticator: The legalAuthenticator element is the individual who is responsible for the document. For the ePOLST, this is the signer in "Section F. Signature: Health Care Provider" of the National POLST Form (either the "Health Care Provider" or the "Supervising physician"). Only licensed healthcare providers authorized to sign POLST forms in their state or D.C. can sign this form. 
// TODO: CDA - Difference between License and Cert # - From Howard - Physician Assistants are Certified (PA-C) and it looks like Nurse Practitioners may vary between states as certified or licensed. Certified would have to operate under a medical director or supervising physician, and would likely need that validating signature.
// TODO: CDA has "Patient is enrolled in hospice" in the mapping to "US Realm Header (V3), participant" How is this to be done in the CDA? Not clear in the templates.


// TODO the Professional Assisting Health Care Provider w/ Form Completion Maybe should not be an observation, but a related person with a role.
// Signature date of provide needs to be linked to provider.

// For medically assisted nutrition and hydration (and anti-biotics) trial period. Need a goal and time in the consent (or CarePlan)?
// Need to have an "if needed" indicator for interventions


/*
Invariant:  HCA-section-entries0
Description: "0 - If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.exists().not()"
//Expression: "entry.resolve() is Consent" fail
Severity:   #error



Invariant:  HCA-section-entries1
Description: "1 -If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.where($this.resolve() is Consent)"
Severity:   #error



Invariant:  HCA-section-entries2
Description: "2 - If healthcare agent section entry exists, then the HCA consent entry and HCA RelatedPerson entry must exist"
//Expression: "entry.exists() implies (entry.where($this is Consent).exists() and entry.where($this is RelatedPerson).exists())"
Expression: "entry.where($this.resolve() is RelatedPerson)"
Severity:   #error

*/


---

// File: input/fsh/PMOHospiceObservation.fsh


/////////////////////////////////
// PMO as Observation

Profile: ADIPMOHospiceObservation
Parent: Observation
Id: ADI-PMOHospiceObservation
Title: "ADI PMO Hospice Observation"
Description: "This profile is used to represent a finding that the individual is under hospice care."
* ^experimental = false

* status = #final


// TODO need a category (Survey for now)
// TODO may need to get a variance request from us core Observation. In different version and also do any of the categories fit?
// http://hl7.org/fhir/us/core/STU5.0.1/ValueSet-us-core-servicerequest-category.html

* category 1..1 MS
* category = $HL7ObservationCategory#survey
* code 1..1 MS

//* code = $LOINC#75781-5

* subject 1..1
* subject only Reference($USCorePatient)

* encounter 0..0 // verify no encounter possible
* performer only Reference($USCorePractitioner)


* code = $SNOMEDCT#551781000124102 //Under care of hospice team (finding) - US Edition
 
* value[x] only boolean
* value[x] 1..1


---

// File: input/fsh/PMOParticipantObservation.fsh

Profile: ADIPMOParticipantObservation
Parent: Observation
Id: ADI-PMOParticipantObservation
Title: "ADI PMO Participant Observation"
Description: "This profile is used to represent the portable medical orders participant observation."


// TODO will likely need a variance Request
//* text 1..1 MS
* status = #final


* code 1..1 MS
* code = $LOINC#100827-5

* focus 1..1 MS
* focus only Reference(ADIPMOComposition) // TODO, is this needed, check with O&O

* value[x] 1..1 MS
* value[x] only CodeableConcept
* valueCodeableConcept from LOINCPOLSTDiscussPartAnswerList (extensible) // other value in valueSet causes an issue with extensible bindings. How to address?



---

// File: input/fsh/PMOProcedure.fsh

Profile: ADIPMOProcedure
Parent: $USCoreProcedure
Id: ADI-PMOProcedure
Title: "ADI PMO Procedure"
Description: "This profile is used to represent both a practitioner authored portable medical order (PMO) procedure. This supports a POLST indication that there was another healthcare facilitator that was an intermediary."

* performer.actor only Reference($USCorePractitioner or $USCorePractitionerRole or $USCoreOrganization)

---

// File: input/fsh/PMOReviewObservation.fsh

Profile: ADIPMOReviewObservation
Parent: Observation
Id: ADI-PMOReviewObservation
Title: "ADI PMO Review Observation"
Description: "This profile is used to represent the review status of the portable medical order."


// TODO will likely need a variance Request
//* text 1..1 MS
* status = #final


* code 1..1 MS
* code = $LOINC#100826-7 // "Portable medical order AndOr advance directive review"

* focus 1..1 MS
* focus only Reference(ADIPMOComposition) // TODO, is this needed, check with O&O

* value[x] 1..1 MS
* value[x] only CodeableConcept
* valueCodeableConcept from LOINCPOLSTReviewAnswerList (extensible)


---

// File: input/fsh/PMOServiceRequest.fsh

Profile: ADIPMOServiceRequest
Parent: $USCoreServiceRequest
Id: ADI-PMOServiceRequest
Title: "ADI PMO ServiceRequest"
Description: "This profile is used to represent both a patient authored care plan (PACP) and a practitioner authored portable medical order (PMO)."

/*
* extension contains
    adi-based-on-consent-extension named BasedOnConsentExtension 0..1
*/
//* text 1..1 MS

* status = #active
* intent = #order

// TODO need a category 
// TODO may need to get a variance request from us core ServiceRequest. In different version and also do any of the categories fit?
// http://hl7.org/fhir/us/core/STU5.0.1/ValueSet-us-core-servicerequest-category.html

* category 1..* MS
* code 1..1 MS


/* extension contains
    adi-based-on-consent-extension named BasedOnConsentExtension 0..1
*/
//* code = $LOINC#75781-5

* subject 1..1
* subject only Reference($USCorePatient)

* encounter 0..0 // verify no encounter possible
* requester 1..1
* requester only Reference($USCorePractitioner)




Profile: ADIPMOCPRServiceRequest
Parent: ADIPMOServiceRequest
Id: ADI-PMOCPRServiceRequest
Title: "ADI PMO Cardiopulmonary Resuscitation ServiceRequest"
Description: "This profile is used to represent a practitioner authored portable medical order for cardiopulmonary resuscitation."

* status = #active

* ^experimental = false
* category = $LOINC#100822-6 "Cardiopulmonary resuscitation orders"
* code = $SNOMEDCT#89666000 "Cardiopulmonary resuscitation (procedure)" 
* doNotPerform 0..1 MS
* orderDetail 1..1 MS
* orderDetail from $VSACCardiopulmonaryResuscitationOrderOptions (required) 

// TO DO: 

Profile: ADIPMOInitialTreatmentServiceRequest
Parent: ADIPMOServiceRequest
Id: ADI-PMOInitialTreatmentServiceRequest
Title: "ADI PMO Initial Treatment ServiceRequest"
Description: "This profile is used to represent a practitioner authored portable medical order for initial treatment."

* status = #active

* ^experimental = false
* category = $LOINC#100823-4 "Initial portable medical treatment orders"
* code 1..1 MS
* code from ADIInitialTreatmentPMOOptionsVS (extensible)
* orderDetail from $VSACADIInitialTreatmentPMOOptions (extensible) // VSAC value set with codes from LOINCPOLSTInitialTxAnswerList (extensible)

* supportingInfo only Reference(ADIPersonalGoal or ADIDocumentReference)

Profile: ADIPMOAdditionalOrdersOrInstructionsServiceRequest
Parent: ADIPMOServiceRequest
Id: ADI-PMOAdditionalOrdersOrInstructionsServiceRequest
Title: "ADI PMO Additional orders or instructions ServiceRequest"
Description: "This profile is used to represent a practitioner authored portable medical order additional orders or instructions."

* status = #active

* ^experimental = false
* category = $LOINC#100824-2 "Additional portable medical orders or instructions"
* code 1..1 MS
* code from $VSACADIAdditionalPMOProcedures (extensible)
* orderDetail from $VSACADIAdditionalPMOProceduresGrouping (extensible)

Profile: ADIPMOMedicallyAssistedNutritionServiceRequest
Parent: ADIPMOServiceRequest
Id: ADI-PMOMedicallyAssistedNutritionServiceRequest
Title: "ADI PMO Medically Assisted Nutrition Service Request"
Description: "This profile is used to represent a practitioner authored portable medical order for medically assisted nutrition."

* ^experimental = false
* category = $LOINC#100825-9 "Medically assisted nutrition orders"
* code 1..1 MS
* code from $VSACADIMedicallyAssistedNutritionOrderOptions (extensible) // LOINCPOLSTMedAssistNutrAnswerList 
* orderDetail from $VSACADIMedicallyAssistedNutritionOrderOptionsGrouping (extensible)

Profile: ADIPMOMedicallyAssistedHydrationServiceRequest
Parent: ADIPMOServiceRequest
Id: ADI-PMOMedicallyAssistedHydrationServiceRequest
Title: "ADI PMO Medically Assisted Hydration Service Request"
Description: "This profile is used to represent a practitioner authored portable medical order for medically assisted hydration."

* status = #active

* ^experimental = false
* category = ADITempCS#pmo-medically-assisted-hydration-service-request "Medically assisted hydration order"
* code 1..1 MS // TO DO: create valueset of hydration orders with an extensible binding.

/////////////////////////////////
// PMO as full service Request
/*
Profile: ADIPMOFullServiceRequest
Parent: ServiceRequest
Id: ADI-PMOFullServiceRequest
Title: "ADI PMO Full ServiceRequest"
Description: "This profile is used to represent a practitioner authored portable medical order."

* text 1..1 MS

* status = #active
* intent = #order

// TODO need a category 
// TODO may need to get a variance request from us core ServiceRequest. In different version and also do any of the categories fit?
// http://hl7.org/fhir/us/core/STU5.0.1/ValueSet-us-core-servicerequest-category.html

* category 1..1 MS
* code 1..1 MS

//* code = $LOINC#75781-5

* subject 1..1
* subject only Reference($USCorePatient)

* encounter 0..0 // verify no encounter possible
* requester only Reference($USCorePractitioner)

* ^experimental = false
* category = $LOINC#100822-6 // "Cardiopulmonary resuscitation orders"
* code from LOINCPOLSTCPRAnswerList (extensible)

*/

---

// File: input/fsh/PreferenceCarePlan.fsh

Profile: ADIPreferenceCarePlan
Parent: $USCoreCarePlan
Id: ADI-PreferenceCarePlan
Title: "ADI PtAuthored Care Plan"
Description: "The Preference Care Plan is a means for an individual to express their goals and preferences under certain circumstances that may be pertinent when planning his or her care."

* text 0..1 MS

* status = #active
* intent = #proposal

* category ^slicing.discriminator.type = #pattern 
* category ^slicing.discriminator.path = "$this"
// Should the pattern be open or closed?
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on $this value"
* category contains
    advance_care_planning 1..1 MS

* category[advance_care_planning] = $LOINC#81378-2 "Goals, preferences, and priorities under certain health conditions [Reported]"
* title 1..1 MS

* subject 1..1 MS
* subject only Reference($USCorePatient)

* addresses 0..* MS
* addresses ^short = "Health issues this plan addresses (use display only for potential conditions the patient does not currently have)"
* addresses ^comment = "The conditions or circumstances in which the stated preferences and goals of the care plan apply. If there are no contained or referenceable resources (e.g. these are potential future conditions that do not represent a condition the patient currently has), the display should be in addresses.display. If no specific circumstances, then the display should indicate something like 'General' or 'All'"

* goal ^short = "Patient's goals for the scope of this care plan."
* goal 0..* MS
* goal only Reference(ADIPersonalGoal)

* supportingInfo ^short = "Observations of a patient's preferences for the scope of this care plan."
* supportingInfo 0..* MS
* supportingInfo only Reference(ADICareExperiencePreference)

* activity.reference only Reference($USCoreServiceRequest)

* obeys goal-or-supportingInfo-required

* extension contains
    adi-goal-order-by-descending-priority-extension named GoalOrderByDescendingPriority 0..1 

Invariant: goal-or-supportingInfo-required
Description: "Either goal or supportingInfo must exist, ie. goal and supportingInfo cannot both be blank, ie. if goal does not exist then supportingInfo must exist."
Expression: "goal.empty() implies supportingInfo.exists()"
Severity:   #error

---

// File: input/fsh/ProvenanceProfile.fsh

Profile: ADIProvenance
// Does this need to derive from US Core DocumentReference? If so, need to review the requirements below and remove incompatible or redundant requirements
Parent: $USCoreProvenance
Id: ADI-Provenance
Title: "ADI Provenance"
Description: "Advance Directive Interoperability Provenance based on US Core to capture, search and fetch provenance information associated with advance directive interoperability data."

* agent contains
    assembler 0..1 MS

* agent[assembler].type 1..1 MS 
* agent[assembler].type = $HL7ProvenanceParticipantType#assembler

// TODO US Core provenance does not allow provenance agent.who of a device

* insert ADIProvenanceDescriptions


RuleSet: ADIProvenanceDescriptions
* agent[assembler] ^short = "Indicates the name of the system used to assemble the person's original advance care planning information into a document for exchange."


---

// File: input/fsh/SearchParameters.fsh

Instance: Bundle-identifier
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #identifier
* name = "ADIBundleIdentifier"
* description = "Search by business identifier"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/Bundle-identifier"
* base[0] = #Bundle

* type = #token

* expression = "Bundle.identifier"

* multipleOr = true
* multipleAnd = true



Instance: Bundle-composition
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #composition
* name = "ADIBundleComposition"
* description = "Search by reference to a composition"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/Bundle-composition"
* base[0] = #Bundle

* type = #reference

* expression = "Bundle.entry.first().resource"

* multipleOr = true
* multipleAnd = true



Instance: Bundle-timestamp
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #timestamp
* name = "ADIBundleTimestamp"
* description = "Search by date in time"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/Bundle-timestamp"
* base[0] = #Bundle

* type = #date

* expression = "Bundle.timestamp"

* multipleOr = true
* multipleAnd = true



Instance: Bundle-type
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #type
* name = "ADIBundleType"
* description = "Search by type"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/Bundle-type"
* base[0] = #Bundle

* type = #token

* expression = "Bundle.type"

* multipleOr = true
* multipleAnd = true



Instance: Consent-id
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #id
* name = "ADIConsentId"
* description = "Search by FHIR Resource ID"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/Consent-id"
* base[0] = #Consent

* type = #token

* expression = "Consent.id"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-id
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #id
* name = "ADIDocumentReferenceId"
* description = "Search by FHIR Resource ID"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-id"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.id"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-authenticator
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #authenticator
* name = "ADIDocumentReferenceAuthenticator"
* description = "Search by who/what authenticated the document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-authenticator"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.authenticator"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-author
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #author
* name = "ADIDocumentReferenceAuthor"
* description = "Search by who and/or what authored the document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-author"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.author"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-category
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #category
* name = "ADIDocumentReferenceCategory"
* description = "Search by categorization of document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-category"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.category"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-contenttype
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #contenttype
* name = "ADIDocumentReferenceContentType"
* description = "Search by MIME type of the content, with charset etc."
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-contenttype"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.content.attachment.contentType"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-custodian
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #custodian
* name = "ADIDocumentReferenceCustodian"
* description = "Search by organization which maintains the document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-custodian"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.custodian"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-date
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #date
* name = "ADIDocumentReferenceDates"
* description = "Search by when this document reference was created"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-date"
* base[0] = #DocumentReference

* type = #date

* expression = "DocumentReference.date"

* comparator[+] = #eq
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #sa
* comparator[+] = #eb
* comparator[+] = #ap

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-description
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #description
* name = "ADIDocumentReferenceDescription"
* description = "Search by human-readable description"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-description"
* base[0] = #DocumentReference

* type = #string

* expression = "DocumentReference.description"

* modifier[+] = #missing
* modifier[+] = #exact
* modifier[+] = #contains

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-encounter
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #encounter
* name = "ADIDocumentReferenceEncounter"
* description = "Search by encounter reference"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-encounter"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.context.encounter"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-event
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #event
* name = "ADIDocumentReferenceEvent"
* description = "Search by main clinical acts documented"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-event"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.context.event"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-facility
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #facility
* name = "ADIDocumentReferenceFacility"
* description = "Search by kind of facility where patient was seen"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-facility"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.context.facilityType"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-format
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #format
* name = "ADIDocumentReferenceFormat"
* description = "Search by format code content rules for the document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-format"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.content.format"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-identifier
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #identifier
* name = "ADIDocumentReferenceIdentifier"
* description = "Search by business identifier of the attachment binary"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-identifier"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.identifier"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-language
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #language
* name = "ADIDocumentReferenceLanguage"
* description = "Search by human language of the content (BCP-47)"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-language"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.language"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-location
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #location
* name = "ADIDocumentReferenceLocation"
* description = "Search by uri where the data can be found"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-location"
* base[0] = #DocumentReference

* type = #uri

* expression = "DocumentReference.content.attachment.url"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-patient
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #patient
* name = "ADIDocumentReferencePatient"
* description = "Search by who/what is the subject of the document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-patient"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.subject.where(resolve() is Patient)"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-period
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #period
* name = "ADIDocumentReferencePeriod"
* description = "Search by time of service that is being documented"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-period"
* base[0] = #DocumentReference

* type = #date

* expression = "DocumentReference.context.period"

* comparator[+] = #eq
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #sa
* comparator[+] = #eb
* comparator[+] = #ap

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-related
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #related
* name = "ADIDocumentReferenceRelated"
* description = "Search by related identifier or resource"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-related"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.context.related"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-relatesto
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #relatesto
* name = "ADIDocumentReferenceRelatesTo"
* description = "Search by target of the relationship"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-relatesto"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.relatesTo.target"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-relation
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #relation
* name = "ADIDocumentReferenceRelation"
* description = "Search by relation code (replaces | transforms | signs | appends)"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-relation"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.relatesTo.code"

* multipleOr = true
* multipleAnd = true


/*
Instance: DocumentReference-relationship
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #relationship
* name = "ADIDocumentReferenceRelationship"
* description = "Search by relationship code and value (combination of relation and relatesTo)"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-relationship"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.relatesTo"

* multipleOr = true
* multipleAnd = true

*/

Instance: DocumentReference-security-label
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #security-label
* name = "ADIDocumentReferenceSecurityLabel"
* description = "Search by document security-tags"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-security-label"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.securityLabel"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-setting
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #setting
* name = "ADIDocumentReferenceSetting"
* description = "Search by additional details about where the content was created (e.g. clinical specialty)"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-setting"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.context.practiceSetting"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-status
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #status
* name = "ADIDocumentReferenceStatus"
* description = "Search by document reference status code (current | superseded | entered-in-error)"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-status"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.status"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-subject
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #subject
* name = "ADIDocumentReferenceSubject"
* description = "Search by who/what is the subject of the document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-subject"
* base[0] = #DocumentReference

* type = #reference

* expression = "DocumentReference.subject"

* multipleOr = true
* multipleAnd = true



Instance: DocumentReference-type
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #type
* name = "ADIDocumentReferenceType"
* description = "Search by kind of document"
* url = "http://hl7.org/fhir/us/pacio-adi/SearchParameter/DocumentReference-type"
* base[0] = #DocumentReference

* type = #token

* expression = "DocumentReference.type"

* multipleOr = true
* multipleAnd = true


---

// File: input/fsh/ValueSets.fsh

/*
ValueSet: ADIConsentTypeVS
Title: "Consent Type"
Description: "Codes indicating type of advance directive consents."
* ^experimental = false
* include $LOINC#81335-2 "Patient Healthcare agent" // "Healthcare agents identified with no powers or limitations specified"
* include $LOINC#75786-4 "Powers granted to healthcare agent [Reported]" // "Healthcare agents identified with powers granted specified"
* include $LOINC#81346-9 "Limitations placed on healthcare agent [Reported]" // "Healthcare agents identified with limitations placed specified"
* include $LOINC#81343-6 "Healthcare agent advisor [Reported]"
* insert LOINCCopyrightNotice
*/

ValueSet: ADIPersonalAndLegalRelationshipRoleTypeVS
Title: "Personal And Legal Relationship Role Type"
Description: "Clinical Focus: A personal or legal relationship records the role of a person in relation to another person, or a person to himself or herself. This value set is to be used when recording relationships based on personal or family ties or through legal assignment of responsibility."
* ^experimental = false
* codes from system $HL7RoleCode

/* 
ValueSet: ADIInterventionPreferencesVS
Title: "Intervention Preferences"
Description: "Clinical Focus: This value set includes concepts representing an individual's intervention preferences which can be expressed by the individual in his or her advance care plan.),(Data Element Scope: The intent of this value set is to identify personal intervention preferences that may be relevant and could be considered by clinicians or any person or organization that is providing care, treatment, or performing any other type of act to or on behalf of the individual.)"
* ^experimental = false
// * codes from valueset ADIInterventionPreferencesOrdinalVS
* codes from valueset $VSACADIInterventionPreferencesEndOfLifeGrouping
* include ADIPreferenceCategoryCS#intervention-preference "Intervention preference"
* insert LOINCCopyrightNotice
*/

ValueSet: ADIInterventionPreferencesOrdinalVS
Title: "Intervention Preferences - Ordinal"
Description: "Clinical Focus: This value set includes concepts representing an individual's intervention preferences which can be expressed by the individual in his or her advance care plan.),(Data Element Scope: The intent of this value set is to identify personal intervention preferences that may be relevant and could be considered by clinicians or any person or organization that is providing care, treatment, or performing any other type of act to or on behalf of the individual.)"
* ^experimental = false
* include $LOINC#75787-2 "Advance directive - request for intubation"
* include $LOINC#75788-0 "Advance directive - request for tube feeding"
* include $LOINC#75789-8 "Advance directive - request for life support"
* include $LOINC#75790-6 "Advance directive - request for IV fluid and support"
* include $LOINC#75791-4 "Advance directive - request for antibiotics"
* include $LOINC#75792-2 "Advance directive - request for resuscitation that differs from cardiopulmonary resuscitation"
* insert LOINCCopyrightNotice


ValueSet: ADIHCADecisionsVS
Title: "Healthcare Agent Decisions"
Description: "Codes indicating decisions a healthcare agent may or may not make on behalf of an individual."
* ^experimental = false
* codes from system ADIHCADecisionsCS
* include $LOINC#81347-7 "Consent for healthcare agent to deviate from stated goals, preferences and priorities [Reported]"
* include $LOINC#81344-4 "Healthcare agent authority to inspect and disclose mental and physical health information [Reported]"
* include $LOINC#81345-1 "Healthcare agent authority to inspect and disclose specially protected health information [Reported]"
* insert LOINCCopyrightNotice


ValueSet: ADINoHealthcareAgentIncludedReasonVS
Title: "No Healthcare Agent Included Reason"
Description: "Includes data absent reason concepts to express why a Healthcare Agent is not included."
* ^experimental = false
* include $HL7AdataAbsentReason#unknown
* include $HL7AdataAbsentReason#asked-unknown
* include $HL7AdataAbsentReason#temp-unknown
* include $HL7AdataAbsentReason#not-asked
* include $HL7AdataAbsentReason#asked-declined
* include $HL7AdataAbsentReason#not-applicable
* include $HL7AdataAbsentReason#unsupported



ValueSet: ADIAttesterRoleTypeVS
Title: "Attester Role"
Description: "Codes indicating a role of an attester."
* ^experimental = false
* include $LOINC#81372-5 "Notary"
* include $LOINC#81369-1 "First witness"
* include $LOINC#81370-9 "Second witness"
* include $LOINC#81371-7 "Third witness"
* insert LOINCCopyrightNotice


ValueSet: ADIDocumentationTypeVS
Title: "Documentation Types"
Description: "Types of Documents"
* ^experimental = false
* include $LOINC#81352-7 "Medical Order for Life-Sustaining Treatment, Physician Order for Life-Sustaining Treatment, or a similar medical order is in place [Reported]"
* include $LOINC#81351-9 "Do Not Resuscitate, Do Not Attempt Resuscitation, or Allow Natural Death order is in place [Reported]"
* include $LOINC#42348-3 "Advance directives"
//* include $LOINC#81375-8 "Self assessment of health status [Reported]"
//* include $LOINC#81354-3 "Prescribed anticipatory medication [Reported]"
* include $SNOMEDCT#304253006 "Not for resuscitation"
* include $SNOMEDCT#714748000 "Has advance care plan"
* include codes from system $SNOMEDCT where concept is-a #425392003 "Active advance directive"
* include codes from system $SNOMEDCT where concept is-a #423876004 "Clinical document"
* insert LOINCCopyrightNotice
* insert SNOMEDCopyrightNotice

// LOINC PMO ValueSet lists

ValueSet: LOINCPOLSTCPRAnswerList
Title: "LOINC POLST CPR Answer List"
Description: "LOINC POLST CPR Answer List (LL6263-9)"

* ^experimental = false
* include $LOINC#LA33470-8  "Yes CPR"
* include $LOINC#LA33471-6  "No CPR: Do Not Attempt Resuscitation"
* insert LOINCCopyrightNotice


ValueSet: LOINCPOLSTInitialTxAnswerList
Title: "LOINC POLST Initial Tx Answer List"
Description: "LOINC POLST Initial Tx Answer List (LL6264-7)"

* ^experimental = false
* include $LOINC#LA33473-2 "Full Treatments"
* include $LOINC#LA33474-0 "Selective Treatments"
* include $LOINC#LA33475-7 "Comfort-focused Treatments"
* insert LOINCCopyrightNotice


ValueSet: LOINCPOLSTMedAssistNutrAnswerList
Title: "LOINC POLST Med assist nutr Answer List"
Description: "LOINC POLST Med assist nutr Answer List (LL6267-0)"

* ^experimental = false
* include $LOINC#LA33489-8 "Provide feeding through new or existing surgically-placed tubes"
* include $LOINC#LA33490-6 "Trial period for artificial nutrition but no surgically-placed tubes"
* include $LOINC#LA33491-4 "No artificial means of nutrition desired"
* include $LOINC#LA33492-2 "Not discussed or no decision made (provide standard of care)"
* insert LOINCCopyrightNotice

ValueSet: LOINCPOLSTReviewAnswerList
Title: "LOINC POLST review Answer List"
Description: "LOINC POLST review Answer List (LL6265-4)"

* ^experimental = false
* include $LOINC#LA33476-5 "Yes the document was reviewed"
* include $LOINC#LA33478-1 "Conflict exists, notified patient"
* include $LOINC#LA33479-9 "Advance directive not available"
* include $LOINC#LA33481-5 "No advance directive exists"
* insert LOINCCopyrightNotice

ValueSet: LOINCPOLSTDiscussPartAnswerList
Title: "LOINC POLST discuss part List"
Description: "LOINC POLST discuss part Answer List (LL6266-2)"

* ^experimental = false
* include $LOINC#LA33482-3 "Patient with decision-making capacity"
* include $LOINC#LA33483-1 "Court appointed guardian"
* include $LOINC#LA33485-6 "Parent of minor"
* include $LOINC#LA33487-2 "Legal surrogate/health care agent"
* include $LOINC#LA46-8 "Other"
* insert LOINCCopyrightNotice


ValueSet: ADIPMOConsentCategoriesVS
Title: "Portable Medical Order Categories"
Description: "Codes indicating Categories of Portable Medical Orders."
* ^experimental = false
* include $HL7ConsentCategoryCodes#dnr "Do Not Resuscitate"
* include $HL7ConsentCategoryCodes#polst "POLST"

ValueSet: ADICompositionStatusVS
Title: "ADI Composition Status"
Description: "a document status backported from the FHIR R5 Composition status."
* ^experimental = false
// * codes from system $HL7CompositionStatusR5  // mlt: updated to the valueset for FHIR R5 composition status.
* include $HL7CompositionStatusR5#preliminary
* include $HL7CompositionStatusR5#final
* include $HL7CompositionStatusR5#amended

ValueSet: ADIDocumentReferenceStatusVS
Title: "ADI Document Reference Status"
Description: "a document status backported from the FHIR R5 Document Reference Status."
* ^experimental = false
* codes from system $HL7DocumentReferenceStatusR5  

ValueSet: ADIDocumentRevokeStatusVS
Title: "ADI Document Revoke Status"
Description: "a document status backported from the FHIR R5 Composition status version which supports the revoked document use case."
* ^experimental = false
// * codes from system $HL7CompositionStatusR5  // mlt: updated to the valueset for FHIR R5 composition status.
//* include $HL7CompositionStatusR5#cancelled
//* include $HL7CompositionStatusR5#entered-in-error
//* include $HL7CompositionStatusR5#deprecated
* codes from system ADIRevokeStatusCS

ValueSet: ADIDMedicallyAssistedHydrationNutritionOrderVS
Title: "Medically Assisted Hydration Order"
Description: "Medically Assisted Hydration Order."
* ^experimental = false

ValueSet: ADIDMedicallyAssistedHydrationNutritionOrderGroupingVS
Title: "Medically Assisted Hydration Order"
Description: "Medically Assisted Hydration Order."
* ^experimental = false

ValueSet: ADIInitialTreatmentPMOOptionsVS
Title: "Initial Treatment Portable Medical Order Options"
Description: "Initial Treatment Portable Medical Order Options."
* ^experimental = false
* include codes from valueset $VSACADIInitialTreatmentPMOOptions
* include codes from valueset $VSACADIInitialTreatmentPMOOptionsGrouping

/* ********** RuleSets *********/

RuleSet: LOINCCopyrightNotice
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"

RuleSet: SNOMEDCopyrightNotice
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement. The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the Creative Commons Attribution 4.0 International Public License. For more information, see SNOMED IPS Terminology. The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review usage terms or directly contact SNOMED International: info@snomed.org"


---

