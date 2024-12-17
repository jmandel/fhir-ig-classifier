File: repos/HL7_SLASH_davinci-epdx/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     ││                                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭────────────────────────ImplementationGuide-hl7.fhir.us.davinci-pdex.json───────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.davinci-pdex
canonical: http://hl7.org/fhir/us/davinci-pdex
version: 2.1.0
name: DaVinciPayerDataExchange
title: Da Vinci Payer Data Exchange
status: active  # draft | active | retired | unknown

publisher:
  name: HL7 International / Financial Management
  url: http://www.hl7.org/Special/committees/fm
  email: fm@lists.HL7.org
contact:
  - name: "Mark Scrimshire (mark.scrimshire@onyxhealth.io)"
    telecom:
      - system: email
        value: "mailto:mark.scrimshire@onyxhealth.io"
  - name: "HL7 International - Financial Management"
    telecom:
      - system: url
        value: "http://www.hl7.org/Special/committees/fm"
description: "This specification has undergone ballot and connectathon testing. It is expected to continue to evolve, possibly significantly, as part of that process.\nFeedback is welcome and may be submitted through the FHIR JIRA tracker indicating US Da Vinci PDex as the specification.  If balloting on this IG, please submit your comments via the tracker and reference them in your ballot submission implementation guide.\n\nThis guide can be reviewed offline. Go to the Downloads section. Click on the link to download the full Implementation Guide as a zip file. Expand the zip file and use a web browser to launch the index.html file in the directory created by the zip extract process. External hyperlinks in the guide will not be available unless you have an active internet connection. \n\n[Financial Management](https://confluence.hl7.org/display/FM/Financial+Management+Home) is the Sponsoring Work Group for this Implementation Guide.\n\n**The Payer Data Exchange (PDex) Implementation Guide (IG) is provided for Payers/Health Plans to enable them to create a Member's Health History using clinical resources (based on US Core 3.1.1 and 6.1.0 Profiles based on FHIR R4) which can be understood by providers and, if they choose to, committed to their Electronic Medical Records (EMR) System.**\n\nThe PDex work group has made changes to the original version of the IG following the publication of the final CMS Interoperability and Patient Access Rule (CMS-9115_ andin STU2.1 the IG has been expanded to meet the requirements of the CMS Prior Authorization Rule (CMS-0057).\n\nThis IG uses the same Member Health History \"payload\" for member-authorized exchange of information with other Health Plans, with Providers and with Third-Party Applications. It describes the interaction patterns that, when followed, allow the various parties involved in managing healthcare and payer data to more easily integrate and exchange data securely and effectively.\n\nThis IG covers the exchange of:\n- Claims-based information (without financials)\n- Clinical Information (such as Lab Results, Allergies and Conditions)\n- Prior Authorization information\n\nThis IG covers the exchange of this information using US Core and Da Vinci Health Record Exchange (HRex) Profiles. This superset of clinical profiles forms the Health Plan Member's Health History. \n\nThis IG covers the exchange of a Member's Health History in the following scenarios:\n- Provider requested exchange using SMART-on-FHIR Bulk exchange\n- Health Plan Exchange using SMART-on-FHIR\n- Member-authorized Health Plan to Health Plan exchange\n- Member-authorized Health Plan to Third-Party Application exchange\n\nThe latter two scenarios are provided to meet the requirements identified in the CMS Interoperability and Patient Access Final Rule.\n\n**There are items in this guide that are subject to update**. This includes:\n- Value Sets\n- Vocabularies (X12, NUBC etc.)\n- Examples\n\n**The Vocabulary, Value Sets and codings used to express data in this IG are subject to review and will be reconciled with**  [X12](http://www.x12.org).\n\nSee the [Table of Contents](toc.html) for more information.\n"
copyright: >-
  Used by permission of HL7 International, all rights reserved Creative Commons License
license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
dependencies:
  hl7.fhir.us.core.3.1.1:
    version: 3.1.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore3
    reason: |
      Defines USCDI 1 resources that will be exposed by PDex APIs.
  hl7.fhir.us.core:
    version: 6.1.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore6
    reason: |
      Defines USCDI 3 resources that will be exposed by PDex APIs.
  hl7.fhir.us.core.v700:
    version: 7.0.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore7
    reason: | 
      Needed for systems supporting USCDI v4
  hl7.fhir.us.davinci-hrex:
    version: 1.1.0
    id: hrex
    reason: |
      Defines common conformance rules across all Da Vinci IGs, as well as additional constraints and profiles beyond U.S. Core
  # hl7.fhir.us.davinci-hrex: 1.1.0
  # hl7.fhir.us.davinci-hrex: 1.1.0-preview
  hl7.fhir.us.carin-bb:
    #version: 2.0.0
    version: 2.1.0-snapshot1
    uri: http://hl7.org/fhir/us/carin-bb/ImplementationGuide/hl7.fhir.us.carin-bb
    id: carinbb
  hl7.fhir.us.davinci-pas: 2.0.1
  hl7.fhir.us.davinci-atr: 2.0.0
  hl7.fhir.us.ndh: 1.0.0-ballot
  hl7.fhir.us.davinci-dtr: 2.0.0
  # hl7.fhir.us.directory-query: 1.0.0-ballot
  # hl7.fhir.uv.extensions.r4: 1.0.0
  hl7.fhir.uv.extensions: 5.1.0-ballot1
  hl7.terminology.r4: 6.1.0
  # hl7.terminology.r4: 5.5.0
  # hl7.fhir.uv.tools: 0.2.0-snapshot
parameters:
  show-inherited-invariants: false
  path-expansion-params: ../../input/expansion-params.json
  apply-jurisdiction: true
  apply-publisher: true
  # auto-oid-root: 2.16.840.1.113883.4.642.40.8
  # needs hl7.fhir.uv.tools: 0.2.0-snapshot
  generate: example-narratives
  # for using US ed of SNOMED
  path-pages:
    - input/pagecontent
    - input/intro-notes
  shownav: 'true'
copyrightYear: 2024+
releaseLabel: STU2 Ballot # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
jurisdiction: urn:iso:std:iso:3166#US "United States of America" # https://www.hl7.org/fhir/valueset-jurisdiction.html
# category: Financial
extension:
  - url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
    valueCode: fm
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
pages:
  index.md:
    title: Home
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  overview.md:
    title: Overview
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  introduction.md:
    title: Introduction
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  ImplementationGuide-hl7.fhir.us.davinci-pdex.md:
    title: PDex Implementation Guide
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  securityandprivacy.md:
    title: Security and Privacy
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    FHIRAccessPermissions.md:
      title: FHIR Access Permissions
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
  pdeximplementationactorsinteractionsdatapayloadsandmethods.md:
    title: PDex Implementation, Actors, Interactions, Data Payloads and Methods
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    handlingdataprovenance.md:
      title: Handling Data Provenance
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
    provider-access-api.md:
      title: Provider Access API
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
    payertopayerexchange.md:
      title: Payer-to-Payer Exchange (single member)
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
    payertopayerbulkexchange.md:
      title: Payer-to-Payer Exchange (bulk)
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
    datamapping.md:
      title: Data Mapping
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
      USCoreAllergyIntolerance.md:
        title: US Core AllergyIntolerance
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreCarePlan.md:
        title: US Core CarePlan
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreCareTeam.md:
        title: US Core CareTeam
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreCondition.md:
        title: US Core Condition
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      consent.md:
        title: Consent
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      coverage.md:
        title: Coverage
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      PdexDevice.md:
        title: PDex Device
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreDiagnosticReportforLaboratoryResultsReporting.md:
        title: US Core DiagnosticReport for Laboratory Results Reporting
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreDiagnosticReportforReportandNoteExchange.md:
        title: US Core DiagnosticReport for Report and Note Exchange
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreDocumentReference.md:
        title: US Core DocumentReference
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreEncounter.md:
        title: US Core Encounter
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreGoal.md:
        title: US Core Goal
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreImmunization.md:
        title: US Core Immunization
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreImplantableDevice.md:
        title: US Core ImplantableDevice
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreLaboratoryResultObservation.md:
        title: US Core Laboratory Result Observation
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreLocation.md:
        title: US Core Location
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreMedication.md:
        title: US Core Medication
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      PDexMedicationDispense.md:
        title: PDex MedicationDispense
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreMedicationRequest.md:
        title: US Core MedicationRequest
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreOrganization.md:
        title: US Core Organization
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePatient.md:
        title: US Core Patient
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePediatricBMIforAgeObservation.md:
        title: US Core Pediatric BMI for Age Observation
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePediatricHeadOccipital.md:
        title: US Core Pediatric Head Occipital-frontal Circumference Observation
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePediatricWeightforHeightObservation.md:
        title: US Core Pediatric Weight for Height Observation
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePractitioner.md:
        title: US Core Practitioner
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePractitionerRole.md:
        title: US Core PractitionerRole
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      PDexPriorAuthorization.md:
        title: PDex Prior Authorization
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreProcedure.md:
        title: US Core Procedure
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      PDexProvenance.md:
        title: PDex Provenance
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreProvenance.md:
        title: US Core Provenance
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCorePulseOximetry.md:
        title: US Core Pulse Oximetry
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      USCoreSmokingStatusObservation.md:
        title: US Core Smoking Status Observation
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
      VitalSigns.md:
        title: VitalSigns
        extension:
          - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
            valueCode: informative
  usecasescenarios.md:
    title: Use Case Scenarios
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  cds-hooks.md:
    title: CDS Hooks
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    workflowexamples.md:
      title: Workflow Examples
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: informative
  member-authorizedoauth2exchange.md:
    title: Member-Authorized OAuth2.0 Exchange
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  changehistory.md:
    title: Change History
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  credits.md:
    title: Credits
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  PDexDownloads.md:
    title: Downloads
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  artifacts.html:
    title: FHIR Artifacts
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  other-igs.md:
    title: Other IG Artifacts
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative


# ╭────────────────────────────────────────────menu.xml.ignore────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml.ignore file, delete the "menu" property below.     │
# ╰───────────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  IG Home: index.html
  Background:
    Reading this IG: overview.html
    Use Cases: usecasescenarios.html
    Introduction: introduction.html
    Project and Participants: credits.html
  Specification:
    Conformance Expectations: introduction.html
    Actors, Interactions and Payloads: pdeximplementationactorsinteractionsdatapayloadsandmethods.html
    Privacy, Safety, and Security: securityandprivacy.html
    Provider Access: provider-access-api.html
    Payer-to-Payer(bulk): payertopayerbulkexchange.html
    Payer-to-Payer(single): payertopayerexchange.html
    Data Mapping: datamapping.html
    CDS Hooks: cds-hooks.html
  FHIR Artifacts: artifacts.html
  Base Specs:
    FHIR R4 Spec: new-tab http://hl7.org/fhir/R4/
    HRex 1.1.0: new-tab https://hl7.org/fhir/us/davinci-hrex/STU1.1/
    US Core 3.1.1: new-tab https://www.hl7.org/fhir/us/core/STU3.1.1/
    US Core 6.1.0: new-tab https://hl7.org/fhir/us/core/STU6.1/
    US Core 7.0.0: new-tab https://hl7.org/fhir/us/core/STU7/
    Other IGs: other-igs.html
  Support:
    Project Page: new-tab https://confluence.hl7.org/pages/viewpage.action?pageId=116462704
    Implementer Support: new-tab https://confluence.hl7.org/display/DVP/PDex+Implementer+Support
    Specification Dashboard: new-tab https://jira.hl7.org/secure/Dashboard.jspa?selectPageId=17314
    Discussion Forum: new-tab https://chat.fhir.org/#narrow/stream/235286-Da-Vinci-PDex
    Propose a Change: new-tab  https%3A%2F%2Fjira.hl7.org%2Fsecure%2FCreateIssueDetails%21init.jspa%3Fpid%3D10405%26issuetype%3D10600%26customfield_11302%3DFHIR-us-davinci-pdex
    Downloads: PDexDownloads.html
    Credits: credits.html
  Change Log: changehistory.html


---

// File: input/pagecontent/cds-hooks.md


[Previous Page - Use Case Scenarios](usecasescenarios.html)

<div class="stu-note">
<b><i>This page was published in STU1.0. It has been superceded by the Provider Access API requirements 
in the CMS Prior Authorization Rule (CMS-0057).
There has been limited, if any implementation of the CDS Hooks capability defined in this guide. 
This section on CDS Hooks will be removed in the next version of this IG.
</i></b>
</div>


This section of the implementation guide defines the specific conformance requirements for systems wishing to conform to this Payer Data Exchange (PDex) Implementation Guide. The bulk of it focuses on the implementation of the CDS Hooks Specification to meet PDex use-cases. It also describes the use of SMART on FHIR and provides guidance on privacy, security and other implementation requirements.

This IG uses a combination of CDS-Hooks and SMART-on-FHIR to enable Providers to issue a query to a Health Plan and to retrieve information about their patient (the Health Plan member) that they **MAY** review and choose to commit to the patient record in their EMR.

CDS Hooks enables the Health Plan to be queried either via an on-demand transaction triggered from a SMART-on-FHIR app, or from a workflow event in the EMR that triggers the hook, such as when an appointment is booked for a patient.

The bulk of the functionality of this specification is implemented using CDS Hooks. The [Hooks specification]( https://cds-hooks.hl7.org/) is small. Implementers should read and be familiar with all of it.

CDS Hooks is a relatively new technology. It is considered a Standard for Trial Use, meaning that it will continue to evolve based on implementer feedback and may change in ways that are not compatible with the current draft. As well, the initial version of the specification has focused on the core architecture and a relatively simple set of capabilities. Additional capabilities will be introduced in future versions.

To meet requirements identified by Da Vinci project participants, it is necessary to introduce some additional capabilities above and beyond what is currently found in the CDS Hooks specification. This section of the PDex implementation guide describes those additional capabilities and the mechanism the implementation guide proposes to implement them. The purpose of these customizations is to enable testing at connectathons and to support feedback into the CDS Hooks design process.

When interacting with EMR systems that support FHIR R4 the SMART App **SHALL** evaluate the EMR System's CapabilityStatement that the implementation has deemed relevant to this SMART-on-FHIR application to determine which of the records selected by the Provider can be written to the EMR via the FHIR API.

Where the EMR's FHIR API does not enable the SMART App to write a resource via the API, the SMART App **SHOULD** write the records that it is permitted to write to the API. The remaining selected records **SHOULD** be retained in the EMR in the most appropriate form to allow the provider access to the information when needed.
Each capability listed here has been proposed to the CDS Hooks community and may well become part of the official specification, either in the initial release, or in some future release. However, there is a significant likelihood that the manner in which the requirements are met may vary somewhat from a syntax or even an architectural approach. Future versions of this implementation guide will be updated to align with how these requirements are addressed in future versions of the CDS Hook specification. This implementation guide will not be able to be Normative (locked into backward compatibility mode) until the underlying CDS Hooks content is also normative.

This implementation guide extends/customizes CDS Hooks in 4 ways: 
* Support for FHIR R4 
* Extending the appointment-book hook
* A hook configuration mechanism
* Additional response capabilities. 

Each way is described in the following sections.

### Support for FHIR R4

The hooks published in the CDS Hooks specification provide a list of context resources for the DSTU2 and STU3 versions of FHIR. The CDS Hook specification won't be updated to include R4 resources until after R4 is finalized. Because this implementation guide is being written to support FHIR R4 as well as STU3 and Argonaut (DSTU2), it provides guidance on what R4 resources are relevant for each hook (both pre-existing hooks, as well as newly proposed hooks).

It is possible that the actual list of R4 resources provided for the hooks will differ from that proposed in this IG. Future versions of the Implementation Guide will adjust accordingly.

The CDS Hooks payload received from an EMR can include DSTU2, STU3 or R4 resources. The Payer's CDS Hooks service **SHALL** handle the content in the JSON hooks payload, regardless of version of FHIR used for incorporated resources.

The health plan's CDS Hooks service **SHALL** provide access to FHIR R4 resources based on Profiles identified in the US Core, Da Vinci PDex and HRex IGs.

The SMART-on-FHIR App that **MAY** be called from the returned CDS Hooks card will not translate R4 profiles to earlier versions of FHIR. 

When interacting with EMR systems that support FHIR R4 the SMART App **SHALL** evaluate the EMR System's CapabilityStatement to determine which of the records selected by the Provider can be written to the EMR via the FHIR API. Where the EMR's FHIR API does not enable the SMART App to write a resource via the API the SMART App shall write the records that it is permitted to write to the API. The remaining selected records **SHALL** be compiled into a FHIR bundle, a PDF **SHALL** be created to provide a human-readable version of the bundle and both documents **SHALL** be attached as a DocumentReference and committed to the patient's record. 

Where an EMR providing an R4 API prevents the attaching of a FHIR bundle to a DocumentReference the SMART APP **SHALL** attempt to write the selected records based upon the options listed below for graceful write degradation.

#### Graceful Write Degradation

When interacting with EMR systems that support FHIR versions prior to FHIR R4 the SMART App **SHALL**, where permitted by the target EMR, create a DocumentReference and encapsulate a PDF, human-readable version of the records being committed, together with a document bundle that encapsulates the FHIR resources from the health plan that the provider has selected to commit to the patient's record.

Where the EMR does not support the attachment of FHIR Bundles to a DocumentReference record the SMART App **SHALL** create a human-readable PDF version of the selected resources then attach this document to the DocumentReference and commit to the patient's record.

Where the EMR does not support the attachment of PDF Documents to a DocumentReference record the SMART App **SHALL** create an HTML or XHTML document that contains the selected resources then attach this document to the DocumentReference and commit to the patient's record.

Where the EMR does not support the attachment of HTML/XHTML documents to a DocumentReference record the SMART App **SHALL** create a human-readable ASCII text version of the selected resources then attach this to the DocumentReference and commit to the patient's record.

To summarize this graceful degradation in functionality the priority for writing information to a target EMR should be:

1. Write information to the respective target resources
2. Where data can't be written to target resources, create a Document Reference that comprises a FHIR bundle and a human-readable PDF of the records being committed.
3. Where the DocumentReference resource does not support committing a FHIR bundle, store the PDF document.
4. Where the DocumentReference does not support writing a PDF, store an HTML or XHTML version.
5. Where the DocumentReference does not support HTML or XHTML content, write an ASCII text version.

### Adding or Modifying Hooks

The base CDS hooks 1.0 specification defines the following hooks: 

- patient-view
- medication-prescribe
- order-review
- order-select
- order-sign
- appointment-book
- encounter-start
- encounter-discharge.

The expectation is that new hooks will be defined by and eventually formally approved by the community. The formal process for this proposal and maturity development process is still evolving. Individuals interested in this process can provide feedback [here](https://cds-hooks.hl7.org).

#### Additional Hooks

Defining new hooks is an expected part of the CDS Hooks specification and there is no need for hooks to be officially registered with the community for them to be used. However, using registered hooks increases the likelihood of broad adoption by the community - which increases the likelihood of broad uptake of this implementation guide. The project is proposing hooks that build on proposals made in the Da Vinci CRD IG. 

#### Modified Hooks

This IG uses a modified appointment-book hook. Subscriber Id is declared as an OPTIONAL context field. 

Subscriber Id or Member Id, if available, **SHOULD** be taken from the Patient's Coverage record, or be manually entered by the Provider via the SMART-on-FHIR App.

If the Member Id is not available, the Subscriber ID and the patient information from the Coverage.beneficiary element **SHOULD** be used to uniquely identify the member.

### PDex Hooks

Sharing of Member health information via PDex **SHALL** use the CDS Hooks specification. Connection to health plan systems **SHALL** be supported via the following hook:

- appointment-book.

The overall flow of the SMART-on-FHIR and CDS-Hooks interaction is summarized in the diagram below:

<table>
	<tr>
		<td>
			<img  width="100%" height="auto"  src="PDEX-SMART-Hook-SMART-InteractionMethods1.png">
		</td>
	</tr>	
</table>

It is possible that this hook will change over the course of the review/approval process, including changes to the names of the hooks, and their context parameters or other information. Future versions of this implementation guide will be updated to align with such changes. Additional hooks may also be added.

This IG defines an extension to the appointment-book hook. The additional optional context fields are:

- MemberId (optional): The number that identifies the unique person in the health plan system.

NOTE: Even pre-existing hooks are not yet locked down as normative and similar changes are possible, though perhaps less likely.

A sample of the CDS Hook for appointment-book is included below:

<pre>
{
  "hookInstance": "d1577c69-dfbe-44ad-ba6d-3e05e953b2ea",
  "fhirServer": "http://fhir.example.com",
  "fhirAuthorization" : {
       "access_token" : "some-opaque-fhir-access-token",
       "token_type" : "Bearer",
       "expires_in" : 300,
       "scope" : "patient/Patient.read patient/Observation.read",
       "subject" : "cds-service4"
     },
  "hook": "appointment-book",
  "user": "Practitioner/example",
  "context": {
    "userId" : "Practitioner/A12365498",
    "patientId" : "EMR1239876",
    "encounterId" : "654",
    "appointments" : [],
		}
		"extension" : {
        "memberId" : "HP567123489", 
				"coverage" :  "Coverage/{{id}}
		}
  }
</pre>

If a Health Plan does not provide a Member Id on a coverage card the extension can reference a Coverage resource that contains the Subscriber Id, plan details and the beneficiary information (i.e., the member demographic information).

Any identifiers associated with the coverage for the patient (which may include patient demographics) **SHOULD** be obtained from the FHIR Coverage record for the patient, or **MAY** be entered manually by the provider via the SMART-on-FHIR App.

#### Hook Configuration

PDex supports three common scenarios where CDS Hooks **SHOULD** be used:

- New Patient presents at Provider
- Patient returns to Provider
- Patient presents at Specialist.

The hook interaction for these scenarios is:

* appointment-book.

When a Card is returned from the CDS Hooks appointment-book service by a Health Plan it will provide the following elements:
- An AppContext that enables the launch of a (pre-registered and credentialed) SMART-on-FHIR to perform the next steps.
The URL for the Health Plan’s FHIR API
- A result code indicating the result of a Member Search
- The returned information MAY include a link to a SMART-on-FHIR App to enable selection of resources by the Clinician that will be written to the Clinician’s EMR system
- An information card with a human-readable interpretation of the Member Search Result
- The information card MAY include a link to launch the SMART-on-FHIR App using the appContext to enable the Clinician to query information about their patient using the Health Plan’s FHIR API.
 

The SMART-on-FHIR App **MAY** be configured with default FHIR search queries that can be set by the Clinician, or their organization. 
 
 Examples of preset search query parameters **MAY** include, but are not limited to:
- Period (Start and, optionally, End date)
- Excluded Practitioner(s)
- Excluded Organization(s)
- Excluded Location(s)

The latter three items are used to enable the Provider to exclude information that they may already have in their system.
These query parameters are examples of FHIR API queries. Any valid FHIR search query for a Patient **MAY** be constructed by the Provider. The potentially valid search query parameters will be limited by the options provided in the Health Plan's FHIR API CapabilityStatement.

As a minimum, the Health Plan's FHIR API **SHALL** limit returned results to the records that are related to the Patient/Member that is the subject of the Provider query.

As a minimum, search of FHIR Resources **SHOULD** support the following query parameters where appropriate for a Resource Type:

- \_lastUpdated (e.g. Last Updated after yyyy-mm-dd.HH:MM:ss
- Period (i.e., Date / Time filters)
- Inclusions or exclusions based upon Organization, Location or Practitioners.

An example CDS Hooks Response Card is shown below:

<pre>
{
  "cards": [
    {
      "summary": "Provider Member History Request",
      "indicator": "success",
      "detail": "Response from Payer Appointment-Book Hook",
      "source": {
        "label": "Static Member History Response",
        "url": "https://example.com/fhir/"
      },
      "links": [
        {
          "label": "SMART Example App",
          "url": "https://smart.example.com/fhir/Patient/123456789",
          "type": "smart"
        }
      ]
    }
  ]
 }

</pre>


### Systems

This Implementation Guide sets expectations for two types of systems:

1. Client Systems
2. Payer Systems.

#### Client Systems
Client systems are electronic medical records, Pharmacy systems and other clinical and administrative systems are responsible for the ordering and execution of patient-related services. These are systems whose users have a need for discovery of patient information from health plans who have provided coverage to the patient.

#### Payer Systems
Payer systems are systems run by health plans/insurers that provide insurance coverage to the patient and can provide claims history clinical information and benefits information about the patient.

The requirements and expectations described here are not intended to be exhaustive. Health plans and clients **MAY** support additional hooks, additional card patterns, additional resources, additional extensions, etc. The purpose of this Implementation Guide is to establish a baseline of expected behavior that communication partners can rely on and then build from. Future versions of this specification will evolve based on implementer feedback.

[Next Page - Workflow Examples](workflowexamples.html)


---

// File: input/pagecontent/changehistory.md


[Previous Page - Member-Authorized OAuth2 Exchange](member-authorizedoauth2exchange.html)

{% include style_insert_table_blue.html %}

### STU2.1.0-ballot Reconciliation

| JIRA Ticket                                             | Change                                                                                              |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| STU2.1 Block Vote 3                                     |                                                                                                     |
| [FHIR-48991](https://jira.hl7.org/browse/FHIR-48991)    | Fix broken Links and other issues identified in QA Report                                           |
| [FHIR-48922](https://jira.hl7.org/browse/FHIR-48922)    | $davinci-data-export param exportType should be mandatory                                           |
| [FHIR-48088](https://jira.hl7.org/browse/FHIR-48088)    | Code Systems should be in THO or be granted an exemption                                            |
| [FHIR-48079](https://jira.hl7.org/browse/FHIR-48079)    | Separate API details from the Data payload section                                                  |
| [FHIR-48063](https://jira.hl7.org/browse/FHIR-48063)    | Member-authorized exchange is underspecified                                                        |
| [FHIR-48061](https://jira.hl7.org/browse/FHIR-48061)    | "PDex Implementation, Actors, Interactions, Data Payloads and Methods" page important or redundant? |
| [FHIR-48057](https://jira.hl7.org/browse/FHIR-48057)    | Missing must support definition                                                                     |
| [FHIR-48036](https://jira.hl7.org/browse/FHIR-48036)    | Separate data mapping and patient matching discussion                                               |
| [FHIR-48023](https://jira.hl7.org/browse/FHIR-48023)    | Sub-field must support language inconsistency                                                       |
| [FHIR-47778](https://jira.hl7.org/browse/FHIR-47778)    | Include the full HRex privacy and security requirements                                             | 
| [FHIR-47761](https://jira.hl7.org/browse/FHIR-47761)    | Security and Privacy and Access Permissions Page not accessible                                     | 
| [FHIR-47562](https://jira.hl7.org/browse/FHIR-47562)    | Please add a "Plain Language Summary about HL7 and this Guide" to the home page.                    | 
| [FHIR-47056](https://jira.hl7.org/browse/FHIR-47056)    | Clarify OAuth2.0 workflow for Payer to Payer                                                        | 
| [FHIR-47053](https://jira.hl7.org/browse/FHIR-47053)    | Require MemberId parameter to be returned in $member-match                                          | 
|                                                         |                                                                                                     |
| STU2.1 Block Vote 2                                     |                                                                                                     |
| [FHIR-48701](https://jira.hl7.org/browse/FHIR-48701)    | AppointmentBook hook usage for Provider Access use case                                             |
| [FHIR-48313](https://jira.hl7.org/browse/FHIR-48313)    | What are implementers supposed to follow for exportType                                             |
| [FHIR-48077](https://jira.hl7.org/browse/FHIR-48077)    | provenance details are spread across several pages and are inconsistently linked                    |
| [FHIR-48073](https://jira.hl7.org/browse/FHIR-48073)    | Use Case Scenarios page not easily reachable                                                        |
| [FHIR-48072](https://jira.hl7.org/browse/FHIR-48072)    | Data Mapping Conformance Requirements                                                               |
| [FHIR-48070](https://jira.hl7.org/browse/FHIR-48070)    | integrate separate sections on data mapping                                                         |
| [FHIR-48058](https://jira.hl7.org/browse/FHIR-48058)    | Unclear references to Da Vinci ATR                                                                  |
| [FHIR-48037](https://jira.hl7.org/browse/FHIR-48037)    | CapabilityStatements don't belong under Data Mapping                                                |
| [FHIR-47057](https://jira.hl7.org/browse/FHIR-47057)    | Don't require mapping claims data to US Core resources if sending as ExplanationOfBenefit resources |
| [FHIR-47055](https://jira.hl7.org/browse/FHIR-47055)    | Don't require five year time limit on bulk Payer to Payer exchange                                  |
| [FHIR-47054](https://jira.hl7.org/browse/FHIR-47054)    | Make saving Provenance information received through Payer to Payer optional                         |
| [FHIR-46761](https://jira.hl7.org/browse/FHIR-46761)    | Add Prev / bottom / Next to header/footer                                                           |
| STU2.1 Block Vote 1                                     |                                                                                                     |
| [FHIR-48675](https://jira.hl7.org/browse/FHIR-48675)    | Add Hyperlink to PDex Server Capability Statement                                                   |
| [FHIR-48369](https://jira.hl7.org/browse/FHIR-48369)    | Conflicting statements on OAuth-authorized exchange                                                 |
| [FHIR-48076](https://jira.hl7.org/browse/FHIR-48076)    | With Mod: Remove superseded CDS Hooks page                                                          |
| [FHIR-48074](https://jira.hl7.org/browse/FHIR-48074)    | With Mod: provider-controlled information requests and filtering page not easily reachable          |
| [FHIR-48056](https://jira.hl7.org/browse/FHIR-48056)    | With Mod: Multiple CapabilityStatement descriptions not in sync and should be collapsed             |
| [FHIR-47794](https://jira.hl7.org/browse/FHIR-47794)    | Change SHOULD to SHALL                                                                              |
| [FHIR-47792](https://jira.hl7.org/browse/FHIR-47792)    | rewrite for clarity and grammar                                                                     |
| [FHIR-47789](https://jira.hl7.org/browse/FHIR-47789)    | Not Persuasive: Change SHOULD to SHALL                                                              |
| [FHIR-47787](https://jira.hl7.org/browse/FHIR-47787)    | Clarify concept of changed status                                                                   |
| [FHIR-47786](https://jira.hl7.org/browse/FHIR-47786)    | Change SHOULD to SHALL                                                                              |
| [FHIR-47785](https://jira.hl7.org/browse/FHIR-47785)    | Change SHOULD to SHALL                                                                              |
| [FHIR-47784](https://jira.hl7.org/browse/FHIR-47784)    | Confusing Phrase                                                                                    |
| [FHIR-47783](https://jira.hl7.org/browse/FHIR-47783)    | Clarify the Regulatory requirements                                                                 |
| [FHIR-46681](https://jira.hl7.org/browse/FHIR-46681)    | Add US Core 7.0.0 support to the IG                                                                 |
| STU2.1 Technical Corrections                            |                                                                                                     |
| TC:[FHIR-48071](https://jira.hl7.org/browse/FHIR-48071) | Rendered text in the middle of example json                                                         |
| TC:[FHIR-48068](https://jira.hl7.org/browse/FHIR-48068) | Reference to profile pages instead of data mapping pages                                            |
| TC:[FHIR-48067](https://jira.hl7.org/browse/FHIR-48067) | mebedded -> embedded                                                                                |
| TC:[FHIR-48065](https://jira.hl7.org/browse/FHIR-48065) | member health history us core sections should be subsections                                        |
| TC:[FHIR-48040](https://jira.hl7.org/browse/FHIR-48040) | device row in capability statement table shifted over incorrectl                                    |
| TC:[FHIR-48039](https://jira.hl7.org/browse/FHIR-48039) | un-rendered link on the capability statement page                                                   |
| TC:[FHIR-48024](https://jira.hl7.org/browse/FHIR-48024) | Incorrect Section Numbering                                                                         |
| TC:[FHIR-48022](https://jira.hl7.org/browse/FHIR-48022) | Oral Basis Profile is the Dental Profile?                                                           |
| TC:[FHIR-47973](https://jira.hl7.org/browse/FHIR-47973) | Large number of technical corrections                                                               |
| TC:[FHIR-47788](https://jira.hl7.org/browse/FHIR-47788) | grammatical errors and typos                                                                        |

### STU 2.1.0 Update

| JIRA Ticket                                                                                               | Change                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TC:[FHIR-46479](https://jira.hl7.org/browse/FHIR-46479)                                                   | Change CARIN Blue Button IG link to 2.1.0-snapshot1                                                                                                             |
| [FHIR-46476](https://jira.hl7.org/browse/FHIR-46476)                                                      | Provide guidance on handling of unstructured data for exchange via Payer-to-Payer API                                                                                                                                                                                                |
| [FHIR-45992](https://jira.hl7.org/browse/FHIR-45992)                                                      | Overview page should mention different APIs instead of exchange methods                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [FHIR-42964](https://jira.hl7.org/browse/FHIR-42964) [FHIR-43375](https://jira.hl7.org/browse/FHIR-43375) | Add more Clarity to Step 3- Request Access token for Member Access , How to communicate the Patient ID or Member id when Request Access token for Member Access                                                                                                                                                                                                                                                                                                                                                                  |
| [FHIR-45969](https://jira.hl7.org/browse/FHIR-45969)                                                      | Specify a means to search for different types of groups.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [FHIR-46444](https://jira.hl7.org/browse/FHIR-46444)                                                      | Add Endpoint discovery expectations to index.html                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Add links to C4BB Basis Profiles for use in Payer and PRovider APIs                                       | Point to C4BB Basis (Non-Financial) Profiles to enable EOBs to be exchanged via Provider Access and Payer-to-Payer API. Update relevant narrative pages.                                                                                                                                                                                                                                                                                                                                                                         |
| Updates from CMS Connectathon 2024-07-17                                                                  | Add comment about search parameters for _t[changehistory.md](changehistory.md)ypeFilter. Re-work introduction page to Explain the differences between the different APIs. Patient, Provider and Payer-to-Payer. Change Order Select to Encounter Start in Provider Access API Section. CDS Hooks. Should this be retired? Note to say it pre-dates CMS Regulations. Add scope for Single-member match add 6.4.6 to single-member match and change the scope to fit. Re-order Table of Contents - PDex IG not before introduction. |
| Updates from PDex community meeting 2024-07-12                                                            | Use rendering provider NPI as minimum for Attribution Lists. Add EMR Role-based security Assumption. Add UDAP subject_id recommendation.                                                                                                                                                                                                                                                                                                                                                                                         |
| [FHIR-45353](https://jira.hl7.org/browse/FHIR-45353)                                                      | Capturing adjudication (determination) date for pre-auth. Created WhenAdjudicated Extension to hold a DateTime element that can be used in EOB item.adjudication and adjudication.                                                                                                                                                                                                                                                                                                                                               |
| [FHIR-46132](https://jira.hl7.org/browse/FHIR-46132)                                                      | Define Consent Profile for Provider Access Opt-out. Make clear it is optional and provided as assistance for recording opt-out                                                                                                                                                                                                                                                                                                                                                                                                   |
| Identify Provider Access and Payer-to-Payer as Async APIs                                                 | Add section to Payer-to-Payer Bulk and Provider Access API narrative pages to use HTTP POST and operate as Async Operations                                                                                                                                                                                                                                                                                                                                                                                                      |
| Add new Data Payload section                                                                              | Add Data Payload section to Provider Access Narrative and Payer-to-Payer bulk API narrative.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Add new Capability Statements                                                                             | Add capability Statements for Provider Access and Payer-to-Payer API access.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Fix Payer-to-Payer bulk exchange workflow digram                                                          | Change from $pdex-p2p-export to $davinci-data-export                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| More specific Group.code value for Operation Scope                                                        | More specific Group.code value using CodeSystem URL for Operation Scope                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Edited Scopes for Operations                                                                              | Edited scopes for Operations used in Payer-to-Payer and Provider Access APIs                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Added Informative Extension to Pages                                                                      | Added Informative Extension to Pages in Sushi-config.yaml                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Added Change History to Menu                                                                              | Add Change History page to Menu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [FHIR-45364](https://jira.hl7.org/browse/FHIR-45364)                                                      | Provide Use case examples for use of custom extensions in PDex Provider Group                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Update Clinical-Financial picture in overview.md                                                          | Update Clinical Financial image on overview page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [FHIR-45356](https://jira.hl7.org/browse/FHIR-45356)                                                      | Change milsEndpoint examples to use correct code from NdhAssociatedServersTypeCS                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [FHIR-45355](https://jira.hl7.org/browse/FHIR-45355)                                                      | Removed copied NDH Extensions, Code Systems and Value Sets. Point to content in NDH 1.0.0-ballot, allowing replicated content to be removed from PDex.                                                                                                                                                                                                                                                                                                                                                                           |
| [FHIR-45352](https://jira.hl7.org/browse/FHIR-45352)                                                      | Added support for US Core 6.1.0 in addition to US Core 3.1.1. Based on L McKenzie Publishing Guidance                                                                                                                                                                                                                                                                                                                                                                                                                            |
| New MembersOptedOut Extension                                                                             | Extension to capture number of Attributed Members excluded from the list through Opt-Out                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| TC: [FHIR-44906](https://jira.hl7.org/browse/FHIR-44906)                                                  | Fix broken link to Bulk Data Access IG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Add DaVinci-data-export-operation to Other-igs.md                                                         | Add link to Da Vinci Data Export Operation in other-igs.md                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Expand narrative for Provider Access and Payer-to-Payer APIs                                              | Removed ExportModeVS and ExportModeCS, replaced by exportType with fragment                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [FHIR-44807](https://jira.hl7.org/browse/FHIR-44807)                                                      | Drop Must Support from item.adjudication[consumeUnits] In PDex Prior Authorization                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Add Provider Access API Diagram                                                                           | Created Plantuml for Provider Access API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Decision to remove optout members from Group                                                              | Remove OptOut Extension                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 
| Define OptedOut Extension to capture member optout                                                        | Added OptedOut Extension to PDexProviderGroup to record member opt out from data sharing with attributedproviders                                                                                                                                                                                                                                                                                                                                                                                                                | 


### STU 2.0.0-ballot:Ballot Reconciliation

| JIRA Ticket                                              | Change                                                                                                                                                      |
|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Payer-to-Payer Bulk Exchange Draft                       | Draft of PDex Multi Member Match Operation and Request and Response Bundles                                                                                 | 
| BallotRec-Vote7                                          |                                                                                                                                                             | 
| TC: endpoint example                                     | Update Endpoint example with new Trust Framework certificates in Base64Binary                                                                               |
| TC: [FHIR-41675](https://jira.hl7.org/browse/FHIR-41675) | Remove duplicate codes from Provenance Agent Type                                                                                                           |
| TC: [FHIR-41497](https://jira.hl7.org/browse/FHIR-41497) | Missing reference to CDS Hooks diagram                                                                                                                      |
| TC: [FHIR-41399](https://jira.hl7.org/browse/FHIR-41399) | Text states "US Core v3.1.1" but URL behind "US Core FHIR R4" points to US Core V 6.0.0                                                                     |
| TC: [FHIR-41398](https://jira.hl7.org/browse/FHIR-41398) | Typo at the bottom of section 5.0.4.3 ("4.2" vs. "5.2")                                                                                                     |
| [FHIR-41381](https://jira.hl7.org/browse/FHIR-41381)     | Add narrative stating that the Prior Authorization profile also applies to the Payer to Payer use case                                                      |
| NDH Profiles and Extensions                              | Imported unpublished NDH Profiles, Extensions, CodeSystems and ValueSets into PDex for mTLS support                                                         |
| [FHIR-41307](https://jira.hl7.org/browse/FHIR-41307)     | Conflicting Links to HRex Coverage Profile                                                                                                                  |
| [FHIR-41177](https://jira.hl7.org/browse/FHIR-41177)     | Capturing adjudication (determination) date for pre-auth                                                                                                    |
| [FHIR-40517](https://jira.hl7.org/browse/FHIR-40517)     | Section numbering is broken                                                                                                                                 |
| Created Examples for mTLS                                | Created Examples for MtlsOrganization and MtlsEndpoint                                                                                                      | 
| [FHIR-40357](https://jira.hl7.org/browse/FHIR-40357)     | Possible typo in Data Mapping specification                                                                                                                 | 
| [FHIR-40239](https://jira.hl7.org/browse/FHIR-40239)     | Missing endpoint URLs?                                                                                                                                      | 
| [FHIR-36626](https://jira.hl7.org/browse/FHIR-36626)     | Review all mappings as significant errors have been detected - Reviewed against CARIN-BB STU2                                                               | 
| [FHIR-36602](https://jira.hl7.org/browse/FHIR-36602)     | Review all mappings as significant errors have been detected in the above mappings and are expected in other mappings.- Reviewed against CARIN-BB STU2      |
| [FHIR-36601](https://jira.hl7.org/browse/FHIR-36601)     | Review all mappings for DiagnosticReport - Reviewed against CARIN-BB STU2                                                                                   | 
| [FHIR-36598](https://jira.hl7.org/browse/FHIR-36598)     | Review all mappings for Encounter - Reviewed against CARIN-BB STU2                                                                                          | 
| QA Report Fixes                                          | Apply fixes to resolve QA Report Errors.                                                                                                                    | 
| TC: [FHIR-39434](https://jira.hl7.org/browse/FHIR-39424) | Update table of profiles for payer-to-payer exchange                                                                                                        | 
| [FHIR-39424](https://jira.hl7.org/browse/FHIR-39434)     | We need a new OperationDefinition for patient-export-pdex                                                                                                   | 
| [FHIR-39314](https://jira.hl7.org/browse/FHIR-39314)     | Need detail w.r.t. reconciling new session with Consent from earlier interaction                                                                            | 
| [FHIR-36626](https://jira.hl7.org/browse/FHIR-36626)     | Review all mappings as significant errors have been detected  - fixed table layout and reconcile to CARIN-BB STU2 - CareTeam, Condition, Coverage, Encounter |  
| BallotRec-Vote6                                          |                                                                                                                                                             | 
| TC: [FHIR-38767](https://jira.hl7.org/browse/FHIR-38767) | Typo in 5.2.1.3 Future Direction for Discovery and Registration                                                                                             | 
| [FHIR-38708](https://jira.hl7.org/browse/FHIR-38708)     | Clarification on payer directory queries                                                                                                                    | 
| [FHIR-38707](https://jira.hl7.org/browse/FHIR-38707)     | Clarifications on dynamic client registration and first token request                                                                                       | 
| [FHIR-38706](https://jira.hl7.org/browse/FHIR-38706)     | Consent reference to DocumentReference in member match request clarification -                                                                              |   
| TC: [FHIR-38705](https://jira.hl7.org/browse/FHIR-38705) | Endpoint bundle example is not valid                                                                                                                        |  
| TC: [FHIR-38696](https://jira.hl7.org/browse/FHIR-38696) | Wrong link - NationalDirectory Endpoint resource                                                                                                            | 
| [FHIR-38650](https://jira.hl7.org/browse/FHIR-38650)     | PDex defines an incorrect request pattern for Patient-level bulk export                                                                                     |
| [FHIR-38097](https://jira.hl7.org/browse/FHIR-38097)     | ExplanationOfBenefit description clarification for use of item level, header level adjudication                                                             | 
| BallotRec-Vote5                                          |                                                                                                                                                             |
| [FHIR-38096](https://jira.hl7.org/browse/FHIR-38096)     | For Pdex Prior Authorization EOB, reviewAction extension not available at header level adjudication.                                                        |
| [FHIR-37904](https://jira.hl7.org/browse/FHIR-37904)     | Add Privacy and Security section to IG                                                                                                                      |
| [FHIR-36598](https://jira.hl7.org/browse/FHIR-36598)     | Review all mappings for Encounter.                                                                                                                          |
| [FHIR-36495](https://jira.hl7.org/browse/FHIR-36495)     | CDS Card should not return an access token                                                                                                                  |
| [FHIR-36315](https://jira.hl7.org/browse/FHIR-36315)     | Unclear definitions of filtering vs restricting cases                                                                                                       |
| TC: [FHIR-36174](https://jira.hl7.org/browse/FHIR-36174) | Correction in StructureDefinition-pdex-provenance                                                                                                           |
| BallotRec-Vote4                                          |                                                                                                                                                             |
| Added mTLS Discovery Profiles                            | Added mTLS Discovery profiles and referenced in Payer-to-Payer Exchange page.                                                                               |
| [FHIR-37778](https://jira.hl7.org/browse/FHIR-37778)     | Link to the HREX Coverage takes you to the Patient Demographic Profile                                                                                      |
| [FHIR-37645](https://jira.hl7.org/browse/FHIR-37645)     | Consent presentation for P2P                                                                                                                                |
| [FHIR-37644](https://jira.hl7.org/browse/FHIR-37644)     | Consent Revocation for P2P                                                                                                                                  |
| [FHIR-36599](https://jira.hl7.org/browse/FHIR-36599)     | Review 835 and all mappings to diagnostics.                                                                                                                 |
| [FHIR-36572](https://jira.hl7.org/browse/FHIR-36572)     | Create a Formal Specification or Conformance Expectations page/section                                                                                      |
| [FHIR-36462](https://jira.hl7.org/browse/FHIR-36462)     | Incorrect Diagram, Consent considerations, everything operation (Duplicate of [FHIR-36461](https://jira.hl7.org/browse/FHIR-36461))                         |
| [FHIR-36254](https://jira.hl7.org/browse/FHIR-36254)     | Missing details of payer-to-payer mutual authentication                                                                                                     |
| [FHIR-36223](https://jira.hl7.org/browse/FHIR-36223)     | PDEX defined their own version of an already existing code system                                                                                           |
| TC: [FHIR-36176](https://jira.hl7.org/browse/FHIR-36176) | Correction needed in ExplanationOfBenefit-PDexPriorAuth1.json                                                                                               |
| [FHIR-36078](https://jira.hl7.org/browse/FHIR-36078)     | CareTeam for a patient is not the same thing as "a random collection of Providers that treated the patient once"                                            |
| BallotRec-Vote3                                          |                                                                                                                                                             |
| [FHIR-37577](https://jira.hl7.org/browse/FHIR-37577)     | Change use of _profile to ExplanationOfBenefit.use to filter on "preauthorization"                                                                          |
| [FHIR-37576](https://jira.hl7.org/browse/FHIR-37576)     | Duplicate to FHIR-37577                                                                                                                                     |
| [FHIR-37546](https://jira.hl7.org/browse/FHIR-37546)     | Consent expiration for P2P Data Exchange                                                                                                                    |
| [FHIR-36767](https://jira.hl7.org/browse/FHIR-36767)     | $member-match operation conformance not defined                                                                                                             |
| [FHIR-36629](https://jira.hl7.org/browse/FHIR-36629)     | change from are expected to SHALL                                                                                                                           |
| [FHIR-36601](https://jira.hl7.org/browse/FHIR-36601)     | Review all mappings for DiagnosticReport (MedicationDispense).                                                                                              |
| [FHIR-36462](https://jira.hl7.org/browse/FHIR-36462)     | Incorrect Diagram, Consent considerations, everything operation                                                                                             |
| BallotRec-Vote2                                          |                                                                                                                                                             |
| [FHIR-36885](https://jira.hl7.org/browse/FHIR-36885)     | ExplanationOfBenefit.use = preauthorization                                                                                                                 |
| [FHIR-36772](https://jira.hl7.org/browse/FHIR-36772)     | PDEX Provenance page. Broken section                                                                                                                        |
| [FHIR-36767](https://jira.hl7.org/browse/FHIR-36767)     | $member-match operation conformance not defined                                                                                                             |
| [FHIR-36600](https://jira.hl7.org/browse/FHIR-36600)     | Review all mappings for Coverage                                                                                                                            |
| [FHIR-36597](https://jira.hl7.org/browse/FHIR-36597)     | Invalid data population instruction for Condition                                                                                                           |
| [FHIR-36596](https://jira.hl7.org/browse/FHIR-36596)     | Invalid data population instruction for CareTeam                                                                                                            |
| [FHIR-36563](https://jira.hl7.org/browse/FHIR-36563)     | No issues; this section is dense but necessary in defining scope.                                                                                           |
| [FHIR-36352](https://jira.hl7.org/browse/FHIR-36352)     | Expand CPCDS Undefined Acronym                                                                                                                              |
| [FHIR-36337](https://jira.hl7.org/browse/FHIR-36337)     | Update Name Column for Lab Result                                                                                                                           |
| TC: [FHIR-36075](https://jira.hl7.org/browse/FHIR-36075) | Link to US Core 3.1.1 actually links to HL7 home                                                                                                            |
| TC: [FHIR-36314](https://jira.hl7.org/browse/FHIR-36314) | Formatting fixes in Care Team element table                                                                                                                 |
| Ballot-Rec-Vote1                                         |                                                                                                                                                             |
| TC: [FHIR-37366](https://jira.hl7.org/browse/FHIR-37366) | Vital Signs not referenced in Capability Statement                                                                                                          |
| [FHIR-36603](https://jira.hl7.org/browse/FHIR-36603)     | Note that CPCDS is external and informative                                                                                                                 |
| [FHIR-36580](https://jira.hl7.org/browse/FHIR-36580)     | Update references to HRex to published 1.0.0 version                                                                                                        |
| TC: [FHIR-36575](https://jira.hl7.org/browse/FHIR-36575) | Make the CapabilityStatement rendering more reader friendly                                                                                                 |
| [FHIR-36573](https://jira.hl7.org/browse/FHIR-36573)     | Correction: Added pages to drop-down menu                                                                                                                   |
| TC: [FHIR-36569](https://jira.hl7.org/browse/FHIR-36569) | Create a Change Notes or History page                                                                                                                       |
| [FHIR-36564](https://jira.hl7.org/browse/FHIR-36564)     | Add clarifying markup for CPCDS mapping tables                                                                                                              | 
| [FHIR-36562](https://jira.hl7.org/browse/FHIR-36562)     | Add CARIN Acronym on first use                                                                                                                              |
| TC: [FHIR-36255](https://jira.hl7.org/browse/FHIR-36255) | Formatting issues for PDEX server capability statement                                                                                                      |
| [FHIR-36237](https://jira.hl7.org/browse/FHIR-36237)     | Sending Duplicative Data                                                                                                                                    |
| TC: [FHIR-36080](https://jira.hl7.org/browse/FHIR-36080) | link to published FHIR v4.0.1                                                                                                                               |
| TC: [FHIR-36079](https://jira.hl7.org/browse/FHIR-36079) | removed double link to ChangeHistory                                                                                                                        |

Technical Corrections are prefixed with "TC: "

### STU 2.0.0

The following changes were applied in the Proposed STU 2.0.0 update:

| JIRA Ticket | Change                                                                                                                                                                                                                                                          |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TC: [FHIR-36026](https://jira.hl7.org/browse/FHIR-36026) | Multiple Technical Corrections                                                                                                                                                                                                                                  |
| [FHIR-35868](https://jira.hl7.org/browse/FHIR-35868) | Revert US Core References back to 3.1.1                                                                                                                                                                                                                         |
| [FHIR-34308](https://jira.hl7.org/browse/FHIR-34308) | Update US Core and PDex inter-relationship diagram to add Prior Auth in Overview page.                                                                                                                                                                          |
| [FHIR-33382](https://jira.hl7.org/browse/FHIR-33382) | Change references to US Core to link to the current 4.0.0 version. Reverted - see [FHIR-35868](https://jira.hl7.org/browse/FHIR-35868) above.                                                                                                                   |
| [FHIR-33218](https://jira.hl7.org/browse/FHIR-33218) | Update Payer-to-Payer Exchange section to clarify use of Bulk FHIR protocols for retrieval of data for a single patient/member only. The flow has been subject to substantial assessment at multiple connectathons and test events.                             |
|[FHIR-33217](https://jira.hl7.org/browse/FHIR-33217)| Add a [PDex Prior Authorization profile](StructureDefinition-pdex-priorauthorization.html), based on the EOB resource to support the exchange of Prior Authorization information with Members.  Added Slices to item adjudication and added consumedunits slice |
|[FHIR-33141](https://jira.hl7.org/browse/FHIR-33141)| Revert [PDex Provenance](StructureDefinition-pdex-provenance.html) Recorded definition to the US Core Provenance version                                                                                                                                        |
|[FHIR-33173](https://jira.hl7.org/browse/FHIR-33173)| Add clarification to use of $everything operation - superceded by updates to [Payer-to-Payer exchange](payertopayerexchange.html)                                                                                                                               |
|[FHIR-33216](https://jira.hl7.org/browse/FHIR-33216)| Add guidance for use of Consent resource in $member-match operation - superceded by updated to [Payer-to-Payer exchange](payertopayerexchange.html)                                                                                                             |
| [FHIR-33713](https://jira.hl7.org/browse/FHIR-33713)| Add [Provenance custodian](Provenance-1000101.html) record for receipt of member data from prior payer                                                                                                                                                          |

### STU 1.0.0

First version of the PDex IG.

### STU 0.1.0

Draft of PDex IG

### STU 0.0.1

Skeleton version of PDex IG

[Next Page - Credits](credits.html)


---

// File: input/pagecontent/consent.md

[Previous Page - US Core Condition](USCoreCondition.html)

Consent is used in two places in this Implementation Guide:

1. [Payer-to-Payer Member Match](payertopayerbulkexchange.html)
2. [Provider Access API Member Opt-out](provider-access-api.html#member-opt-out)

### Payer-to-Payer Member Match

In Payer-to-Payer Member Match the requesting payer will include a 
[HRex Consent](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-consent.html) record.
The record records the Member's agreement to allow the requesting Payer to retrieve data from the member's old health plan and identifies
the scope of the data to be retrieved: all data, or only Non-Sensitive data.

### Provider Access Opt-out

The CMS Prior Authorization Rule (CMS-0057) requires that a health plan enables a member to choose to opt-out of sharing their data with providers via the [Provider Access API](provider-access-api.html). By default a member is opted-in to 
data sharing with Providers that have an existing, or impending treatment relationship. This implementation Guide 
provides a [Consent profile](StructureDefinition-pdex-provider-consent.html)
that expresses a Member's decision to opt-out, i.e., Deny sharing of their data, A Member can also revoke that denial.

While it is expected that health plans **MAY** implement their own processes and communication methods to track and act upon a member opting out of Provider Access AI data sharing, the following profile is provided as an example of a Consent resource that could be used to express a member opt-out. This **MAY** be used by a member portal, or consumer app to communicate an opt-out from Provider Access sharing.

[PDex Provider Consent Profile](StructureDefinition-pdex-provider-consent.html).

Example Member Opt-out: [PDex Provider Access API Opt-out](Consent-no-consent-1.html).


[Next Page - Coverage](coverage.html)


---

// File: input/pagecontent/coverage.md

[Previous Page - Consent](consent.html)

The [Coverage resource](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html) is profiled in the Da Vinci HRex IG. 

NOTE: This resource is not included in the resource set returned by Payer-to-Payer exchange. The resource is used to submit coverage information to the $MemberMatch operation.

{% include style_insert_table_blue.html %}

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the [HRex Coverage resource](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html) are:

| R4 Element              | Name          | Cardinality | Type                                         |
|-------------------------|---------------|:-----------:|----------------------------------------------|
| Coverage.identifier     |  identifier   |    0..1     | Identifier                                   |
| Coverage.status         |  status       |    1..1     | code                                         |
| Coverage.subscriberId   |  subscriberId |    0..1     | string                                       |
| Coverage.beneficiary    |  beneficiary  |    1..1     | Reference(HRex Patient Demographics Profile) |
| Coverage.payor          |  payor        |    1..1     | Reference(HRex Organization Profile)         |



<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Health Plan Mapping Assistance
A collaboration of Health Plan experts have performed an evaluation of claims information and developed a mapping of  data for Members to the [Coverage profile](http://hl7.org/fhir/R4/coverage.html). This is shown below as an assistance  to implementers:

| PDex Element              | Must Support | Cardinality | CARIN-BB Element          | CPCDS Element Mapping  or Implementer Note                                     |
|---------------------------|-------------|:-----------:|---------------------------|-----------------------------------------------------------|
| Coverage.meta.lastUpdated |             |     0..1    | Coverage.meta.lastUpdated | [{"163":"Coverage Last Updated Date"}]                    |
| Coverage.identifier       |      S      |     0..*    | Coverage.identifier       | [{"Ref (1)":"Member id"}]                                 |
| Coverage.status           |             |     1..1    | Coverage.status           | [{"133":"Coverage status"}]                               |
| Coverage.subscriberId     |      S      |     0..1    | Coverage.subscriberId     | [{"132":"Subscriber id"}]                                 |
| Coverage.beneficiary      |      S      |     1..1    | Coverage.beneficiary      | Use [{"Ref (1)":"Member id"}] to find Ratient/id Reference |
| Coverage.relationship     |             |     0..1    | Coverage.relationship     | [{"72":"Relationship to subscriber"}]                     |
| Coverage.payor            |      S      |     1..*    | Coverage.payor            | [{"Ref (2)<br>":"Claim Payer Identifier"}                 |
| Coverage.class.value      |             |     1..1    | Coverage.class.value      | [{"Plan=154":"Plan Identifier"}, {"Group=134":"Group Id"} |
| Coverage.class.name       |             |     0..1    | Coverage.class.name       | [{"Plan=155":"Plan Name"}, {"Group=135":"Group Name"}     |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

It is important to note a difference between Coverage information provided in the CARIN-BB IG and the PDex IG. The PDex IG Coverage expresses the current state of health plan coverage whereas the CARIN-BB Coverage is intended to express the coverage that was valid at the date of service or admission.


SubscriberId may not uniquely identify a health plan member. 
If beneficiary is subscriber, also set .relationship to "self".

It may, for example, identify the parent who obtains coverage for a child. Therefore, the Coverage resource may provide a combination of identifiers and point to demographic information to uniquely identify a patient/member.

Coverage.identifier **MAY** include a member identifier in the Coverage resource.

#### Example Coverage Resource

An example mapping of a Coverage resource is shown here:

<pre>
{
  "resourceType": "Coverage",
  "id": "9876B1",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">A human-readable rendering of the coverage</div>"
  },
  "identifier": [
    {
      "system": "http://benefitsinc.com/certificate",
      "value": "12345"
    }
  ],
  "status": "active",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code": "EHCPOL",
        "display": "extended healthcare"
      }
    ]
  },
  "policyHolder": {
    "reference": "http://benefitsinc.com/FHIR/Organization/CBI35"
  },
  "subscriber": {
    "reference": "Patient/4"
  },
  "beneficiary": {
    "reference": "Patient/4"
  },
  "dependent": "0",
  "relationship": {
    "coding": [
      {
        "code": "self"
      }
    ]
  },
  "period": {
    "start": "2011-05-23",
    "end": "2012-05-23"
  },
  "payor": [
    {
      "reference": "Organization/Payer1"
    }
  ],
  "class": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "group"
          }
        ]
      },
      "value": "CB135",
      "name": "Corporate Baker's Inc. Local #35"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "subgroup"
          }
        ]
      },
      "value": "123",
      "name": "Trainee Part-time Benefits"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "plan"
          }
        ]
      },
      "value": "B37FC",
      "name": "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "subplan"
          }
        ]
      },
      "value": "P7",
      "name": "Includes afterlife benefits"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "class"
          }
        ]
      },
      "value": "SILVER",
      "name": "Silver: Family Plan spouse only"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "subclass"
          }
        ]
      },
      "value": "Tier2",
      "name": "Low deductable, max $20 copay"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "sequence"
          }
        ]
      },
      "value": "9"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "rxid"
          }
        ]
      },
      "value": "MDF12345"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "rxbin"
          }
        ]
      },
      "value": "987654"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "rxgroup"
          }
        ]
      },
      "value": "M35PT"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "rxpcn"
          }
        ]
      },
      "value": "234516"
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
            "code": "sequence"
          }
        ]
      },
      "value": "9"
    }
  ]
}
</pre>



[Next Page - Pdex Device](PdexDevice.html)


---

// File: input/pagecontent/credits.md

[Previous Page - Change Log](changehistory.html)


### Da Vinci

[Da Vinci](https://www.hl7.org/about/davinci/index.cfm) is an HL7-sponsored project that brings together U.S. payers, providers, and technology suppliers to help payers and providers improve clinical, quality, cost, and care management outcomes using FHIR-related technologies. The project organizes meetings (face-to-face and conference calls) and connectathons to find ways to leverage FHIR technologies to support and integrate value-based care (VBC) data exchange across communities. Da Vinci identifies value-based care use cases of interest to its members and to the broader community.

The process that Da Vinci has adopted includes:

1. identifying business, clinical, technical, and testing requirements
2. developing and balloting a FHIR-based implementation guide (IG)
3. developing reference implementations (RIs) to demonstrate that the concepts in the IG are possible to implement
4. piloting the standard
5. supporting the production use of the IG to enable exchange of data to support interoperability for value-based care

All Da Vinci work adheres to a common set of [guiding principles](https://build.fhir.org/ig/HL7/davinci-ehrx/davinci-guiding-principles.html).

Additional information about Da Vinci, its members, the use cases, and the implementation guides being developed can all be found on the [HL7 website](http://www.hl7.org/about/davinci). Meeting minutes and other materials can be found on the [Da Vinci Confluence page](https://confluence.hl7.org/display/DVP).

### The Da Vinci Payer Data Exchange (PDex) project

This Implementation Guide was made possible by the thoughtful contributions of the following people and organizations.

This Implementation Guide was the work of the [Da Vinci Accelerator Project's](http://www.hl7.org/about/davinci/index.cfm?ref=common) PDex work group and Da Vinci member organizations.

The [PDex work group can be found on confluence](https://confluence.hl7.org/pages/viewpage.action?pageId=116462704).

### Credits

**Primary authors:**
* Mark Scrimshire (OnyxHealth.io)

**Project leads:**

* Robert Dieterle (EnableCare, LLC)
* Viet Nguyen (Stratametrics, LLC)

**Project management and coordination:**
* Jocelyn Keegan (Point of Care Partners)
* Vanessa Candelora (Point of Care Partners)
* Crystal Kallum (Point of Care Partners)

**Technical support and guidance:**
* Rick Geimer (Lantana Consulting Group)

**Sponsoring Work Group**

This Implementation Guide is supported by the [HL7 Financial Management Work Group](http://www.hl7.org/Special/committees/fm) as the sponsoring work group.

**Project participants included:**
* Blue Cross Blue Shield of Alabama (Tony Benson) - Project Lead PDex STU1
* Aegis (Richard Ettema, Sandra Vance)
* Allscripts (Emma Jones, Jeffrey Danford)
* Blue Cross Blue Shield of Alabama (Tony Benson, Kevin Lambert, Gini McGlothin, Morry Payne, Clarissa Winchester)
* Cerner (Hans Buitendijk, Kevin Shekleton, Michelle Miller)
* Epic (Danielle Friend, Isaac Vetter, Spencer Utley)
* Health Care Data Standards (Mary Kay McDaniel)
* Optum (Linda Michaelsen, Nicholas Radov)
* Onyx Technology, LLC (Mark Scrimshire, Michael Cox, Santhi Chebrolu)

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.

### Terminology

This IG defaults to using US Core Profiles and value sets. 

If a resource is required that is not part of US Core it will be defined and referenced in the HRex IG. HRex is used to reference profiles that are utilized across multiple Da Vinci IGs.

If a resource is unique to the PDex IG it will be defined in this guide, together with any unique value sets or coding systems required to support the profile.


[Next Page - FHIR Artifacts](artifacts.html)


---

// File: input/pagecontent/datamapping.md

[Previous Page - Payer-to-Payer Bulk Exchange](payertopayerbulkexchange.html)

Health Plans **SHOULD** map claims and clinical information for a member to [US Core v3.1.1]({{site.data.fhir.ver.uscore3}}), [US Core v6.1.0]({{site.data.fhir.ver.uscore6}}) or [US Core v7.0.0]({{site.data.fhir.ver.uscore7}})FHIR Resources based on R4. This IG defers to the supporting specifications to map data to FHIR resources and avoids creating new profiles unless necessary, such as in the case of MedicationDispense when this was not defined in US Core 3.1.1.

US Core has expanded upon the original Argonaut profiles as the FHIR specification has also matured. As the Da Vinci project tackles more use cases and creates further Implementation Guides additional profiles that are used across multiple IGs will be implemented in the HRex IG. As those profiles mature and achieve adoption, they **MAY** be offered up to US Realm for incorporation into a future version of US Core.

Where a [US Core 3.1.1. FHIR R4]({{site.data.fhir.ver.uscore3}}),  [US Core 6.1.0. FHIR R4]({{site.data.fhir.ver.uscore6}}) or [US Core 7.0.0. FHIR R4]({{site.data.fhir.ver.uscore7}}) Resource is not defined Health Plans **SHALL** map claims and clinical information to FHIR Profiles defined in this IG, or the [Da Vinci HRex IG]({{site.data.fhir.ver.hrex}}).

The mapping of a patient's coverage and claims information to the relevant FHIR US Core and Da Vinci PDex/HRex profiles is covered in this section.

## Capability Statements

[PDex Server CapabilityStatement with US Core 6.1. support](CapabilityStatement-pdex-server-6-1.html) 

This Section describes the expected capabilities of the PDex with US Core 6.1 Support Server actor which is responsible for providing responses to the queries submitted by the PDex Requesters. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex and US Core Servers are defined. Systems implementing this capability statement should meet the ONC 2015 Common Clinical Data Set (CCDS) access requirement for Patient Selection 170.315(g)(7) and Application Access - Data Category Request 170.315(g)(8) and the ONC [U.S. Core Data for Interoperability (USCDI) Version 3 July 2022](https://www.healthit.gov/isa/sites/isa/files/2022-07/USCDI-Version-3-July-2022-Final.pdf).  PDex Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements.

[PDEX Server CapabilityStatement](CapabilityStatement-pdex-server.html)

This Section describes the expected capabilities of the PDex Server actor which supports US Core 3.1.1 and is responsible for providing responses to the queries submitted by PDex Requesters. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex Servers for US Core 3.1.1 are defined. PDex Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements.

The profiles referenced in the Data Mapping Section are included in the above Server Capability Statements.

The CMS Prior Authorization Rule (CMS-0057) requires Claims and Encounter data to be exchanged with
Providers and Payers via the respective Provider Access API and Payer-to-Payer APIs, defined in this IG.
The Rule requires that a non-financial view of those claims and encounters are provided. This IG utilizes
the work of the [CARIN Consumer Directed Payer Data Exchange IG]({{site.data.fhir.ver.carinbb}}) which defines the following
non-financial profiles:

- [Inpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis.html) 
- [Outpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis.html)
- [Professional NonClinician Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis.html)
- [Oral Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Oral-Basis.html)
- [Pharmacy Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-Basis.html)


Oral and vision information are considered part of the Health Plan record for a specific member and, when it is available, **SHOULD** be included in the Payer-toPayer and Provider Access exchanges described in this IG, using the BASIS profiles defined in the [CARIN Consumer Directed Payer Data Exchange IG (CARIN IG for Blue Button®)](http://hl7.org/fhir/us/carin-bb/STU2/).

## Ingesting Exchanged Data

Mapping is required when data is exchanged between systems. The PDex IG exchanges are centered around the Members/Patients. 
FHIR platforms generate their own ids when creating resources. Consequently, a Patient resource in one system can have a different 
FHIR Resource ID from that Patient in another system. When a bundle of resources is retrieved from a Health Plan's FHIR API it will 
be necessary to map identifiers to determine whether a record in the target system needs to be updated or created. 
The following step-by-step approach is proposed for handling the import of a bundle of resources received as part of a Patient-everything 
FHIR bundle or as a result of a Payer-to-Payer Exchange (See [Payer-to-Payer Exchange (Bulk)](payertopayerbulkexchange.html) or
[Payer-to-Payer Exchange (single member)](payertopayerexchange.html)).

In the steps below "Received" refers to the information requested from a Health Plan's FHIR API. "Target" refers to the target FHIR API of the organization making the request. In the Payer-to-Payer exchange scenario the New Plan is the Target, and the Old Health Plan provides the "Received" bundle. 

1. Use the received Patient resource to match to the target Patient resource. Use the Target Patient Resource ID for any Patient references used in subsequently imported records from the Received bundle.
2. Update the Target Patient Resource to add the Received Patient Ids from the Received Patient Resource.
3. Identify Received Practitioner resources in the bundle and use NPI, where available, to map to the Target Practitioner Resources. If the Practitioner is not found in the Target system, create a record. Use the Target Practitioner Resource ID for any references to this Practitioner in the received bundle.
4. Identify Received Organization resources in the bundle and use NPI, where available, to map to the Target Organization Resources. If the Organization is not found in the Target system, create a record. Use the Target Organization Resource ID for any references to this Organization in the received bundle.
5. Identify Received Location resources in the bundle and map to Target Location resources. If the Location is not found in the Target system, create a record. Use the Target Organization Resource ID for any references to this Location in the received bundle.

It is recommended that the Identifier field in a resource be used to record the ID of the corresponding resource imported from a received bundle. This should simplify mapping for subsequent bundles received from the sending FHIR API.

## Providing data in sub-element fields

In this data mapping section, each profile has a listing of the minimum essential fields that are required to enable a US Core profile to be successfully validated. If a field is marked as required (cardinality n.., where n>0) the Health Plan **SHALL** populate the field. For a field specified as MUST SUPPORT and the cardinality is 0.., the Health Plan **SHALL** be capable of populating the field and do so if the relevant data exists. Where a field contains sub-field elements that are marked as MUST SUPPORT but the parent element has a cardinality of 0..n, where n is 1 or greater, the health plan **SHALL** provide data for the MUST SUPPORT sub-elements, only if it is providing data for the parent element.

If a field is marked as MUST SUPPORT the receiver **SHALL** be able to consume it without generating an error.


## Mapping Adjudicated Claims and Encounter Information to Clinical Resources

A table providing a mapping from the [Consumer-Directed Payer Data Exchange IG](http://hl7.org/fhir/us/carin-bb/) to fields in the respective clinical profiles (US Core and PDex) is provided in the narrative pages for the following profiles:
- [US Core CareTeam](USCoreCareTeam.html)
- [US Core Condition](USCoreCondition.html)
- [US Core Encounter](USCoreEncounter.html)
- [US Core Patient](USCorePatient.html)
- [US Core Procedure](USCoreProcedure.html)
- [US Core Observation(s)](USCoreLaboratoryResultObservation.html)
- [HRex Coverage](coverage.html)
- [PDex MedicationDispense](PDexMedicationDispense.html).

Tables are provided to assist implementers in mapping adjudicated claims data represented in the Consumer-Directed Payer Data Exchange IG to clinical resources that may be exchanged as part of workflows identified in this Da Vinci Payer Data Exchange IG. The tables identify the source profile element and the associated Common Payer Consumer Data Set (CPCDS) mapping. CPCDS is a format developed by a consortium of health plans to support the creation of Consumer-Directed Payer Data Exchange IG resources from claims and associated data. CPCDS is not a HL7-managed data set. It is provided only as an informative resource to assist health plans in mapping data to FHIR profiles in a consistent manner. This mapping information is provided as guidance only. It may require payers to use discretion in mapping claims data to the relevant clinical resources.

With the CMS Prior Authorization Rule (CMS-0057) recommending the series of Da Vinci Burden Reduction Implementation Guides (Coverage Requirements Discovery, Documents Templates and Rules and Prior Authorization Support) it is expected that Payers will receive more clinical data from Providers. Much of that data will be in structured form, as defined by the US Core Implementation Guide. The Payer-to-Payer Bulk API also requires the exchange of unstructured data that supports a Prior Authorization decision. Such data would be embedded in a DocumentReference resource for exchange. This is likely to result in Payers having far more clinical data to exchange wih Members, Providers and other Payers.

The column definitions are provided in the table below. Look for this style of table in the Data Mapping pages and Profiles defined in this IG.

{% include style_insert_table_blue.html %}

| US Core/PDex Element                                                    | Must Support                       | Cardinality | CARIN-BB Element          | CPCDS Element Mapping or Implementer Note      |
|-------------------------------------------------------------------------|------------------------------------|:----------:|---------------------------|----------------------------------------|
| The Element name in the target Profile. e.g., Coverage.meta.lastUpdated | S indicates a Must Support Element |   Defines the cardinality of the target element   | The CARIN-BB source element name | The Mapping Element Id from the CARIN-BB CPCDS mapping document and the associated mapping element name [{"163":"Coverage Last Updated Date"}] |

<i>Note: Fields with a cardinality of 1..1 or 1..* are only considered mandatory fields when they are a top-level element in a resource. If they are contained within a parent element that is optional the child element is also optional, unless data for the parent element is provided. </i>

<i>Note: In the CPCDS Element Mapping column the element ["{163]":"...."}] or ["Ref(x,xx,xxx)":"..."] refers to the CPCDS element Id: Element name in the CPCDS tables.</i>

The IG will continue to be tested at connectathons and will continue to utilize commonly adopted standards (e.g., US Core profiles) that have been tested by other groups (e.g., Argonaut). USCDI concepts are encapsulated in US Core Profiles on FHIR Resources. The Code Systems, Value Sets and codings used in this IG are based on US Core Profiles. Regardless of the way in which payers store their administrative and clinical information they will need to map it appropriately to these profiles.

## US Core Profiles

This IG supports the use of multiple US Core versions. The profiles supported by the respective versions are 
linked below:

- [US Core 3.1.1 Profiles and Extensions]({{site.data.fhir.ver.uscore3}}/profiles.html)
- [US Core 6.1.0 Profiles and Extensions]({{site.data.fhir.ver.uscore6}}/profiles-and-extensions.html)


[Next Page - US Core Allergy Intolerance](USCoreAllergyIntolerance.html)


---

// File: input/pagecontent/FHIRAccessPermissions.md

[Previous Page - Security and Privacy](securityandprivacy.html)

{% include style_insert_table_blue.html %}

<div class="stu-note">
<b><i>This page has been updated to reflect the release of the CMS Prior Authorization Rule (CMS-0057).
The changes have been made to stay in sync with the bulk transfer requirements of the rule. 
</i></b>
</div>

The PDex IG implements APIs which require external entities to be granted access to a sub-set of records 
via FHIR APIs. SMART Scopes enable permissions and actions to be enforced based upon the type of 
resource. SMART Scopes are less effective at restricting data within a resource type. This page on 
FHIR Access Permissions outlines a method that could use the FHIR Group resource to track access 
permissions, for example to a subset of Patients, or a group of Group records. There are three
scenarios in the PDex IG that could utilize this approach.

| PDex API                       | Restrict Access To |
|--------------------------------|--------------------|
| Payer-to-Payer (Single Member) | Patient/{FHIR_id}  |
| Payer-to-Payer (Bulk Access)   | Group/{FHIR_id}    |
| Provider Access (Bulk Access)  | Group/{FHIR_id}    |

This page is provided as guidance for Implementers. It is possible/likely that Implementers will 
implement access permissions in an alternative system, such as the Authorization server.

The Payer-to-Payer APIs have a member-match operation that, in the case of a single member, returns a 
Patient/{FHIR_id} after a successful match. In the case of a bulk member-match, the matched members
are returned in a Matched Member Group resource. In both scenarios the requesting (New) Payer may
perform this match operation multiple times and should only be granted access to data for the matched 
members, whether in a Group or after a single match. An Implementer could choose to record the matched
Id (either Patient or Group) in a Group record that is associated with the requesting entity. 
Subsequently, when the requesting entity performs the data request (e.g. via the Da Vinci Data Export
Operation) the target FHIR_id could be checked against the Group Resource associated with the requesting
entity. Access to data would be granted if the target Patient or Group Id is found in the Requesting 
Entities Group record.

The Requesting Entity Group record could be constrained to a specific use case by defining a Profile 
where the Group.code defined the use case that the requesting entity's Access Permissions were 
constrained to. For example, to one of the three APIs identified in the table above.

In the case of the Provider Access API, a Provider representative, such as an EMR within a health system
may represent multiple Providers. The Payer could create a Group resource that is associated with the 
Provider Representative and included the Group Ids for the Providers they represent.

[Next Page - PDex Implementation Actors, Interactions, Data Payloads and Methods](pdeximplementationactorsinteractionsdatapayloadsandmethods.html)





---

// File: input/pagecontent/handlingdataprovenance.md

[Previous Page - PDex Implementation, Actors, Interactions, Data Payloads and Methods](pdeximplementationactorsinteractionsdatapayloadsandmethods.html)

Handling Provenance is an essential element in establishing confidence and trust as data is exchanged with other parties. The Provenance resource is used to document the source and handling of data. It documents the chain of custody of the information.

The PDex IG will define [PDex Provenance](PDexProvenance.html) examples that meet the needs of Health Plans. The value sets, including any new codes required, used to enable Health Plans to express Provenance Records will be supplied to the Security Work Group and others developing Provenance profiles as examples of real-world requirements.

Provenance requirements for the Payer Community may be a super-set of those of the Provider-focused Argonaut community.

Health Plans SHOULD accept and retain Provenance records received with data based on Member-authorized Payer-to-Payer exchange.

Health Plans SHOULD accept and retain Provenance records received with data from  sources other than Member-authorized Payer-to-Payer exchange.

When a Health Plan forwards information as a FHIR Resource it SHOULD create related Provenance record(s) to reflect the original source of the data.

A Provenance resource SHOULD be provided with each member-related resource provided by the Health Plan's FHIR API when requested, such as via the _RevInclude parameter.

This guide provides a pdex-provenance resource that is customized to the needs of the payer by focusing on their role as a transmitter and not originator of data.


[Next Page - Payer-to-Payer Exchange](payertopayerexchange.html)


---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.davinci-pdex.md

[Previous Page - Introduction](introduction.html)

|                                                                                                          |                                            |
|----------------------------------------------------------------------------------------------------------|--------------------------------------------|
| *Official URL*: http://hl7.org/fhir/us/davinci-pdex                                                      | *Version*: 2.1.0                           |
| *NPM package name*: hl7.fhir.us.davinci-pdex                                                             | *ComputableName*: DaVinciPayerDataExchange |
| *Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License |
| *Other Identifiers*: OID:2.16.840.1.113883.4.642.40.8                                                    |
{:.grid}


{{ site.data.ig.description }}

- [XML](ImplementationGuide-hl7.fhir.us.davinci-pdex.xml)
- [JSON](ImplementationGuide-hl7.fhir.us.davinci-pdex.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}

[Next Page - Security and Privacy](securityandprivacy.html)



---

// File: input/pagecontent/index.md


<div class="stu-note">

<b><i>This page has been updated to reflect the release of the CMS Prior Authorization Rule (CMS-0057).
The guide has also been updated to support the adoption of US Core 6.1.0, in addition to existing support for US Core 3.1.1. This change is implemented to enable implementers to comply with both the 
CMS-0057 Rule and the ONC's HTI-1 rule that implements US Core 6.1.0 as the base standard of US Core 
as of January 1, 2026.</i></b>
</div>

<div style="width: 100%;" >
<h3 id="plain-language-summary-about-hl7-and-this-guide">Plain Language Summary about HL7 and this Guide<a class="anchorjs-link " href="#plain-language-summary-about-hl7-and-this-guide" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a>
  <button class="btn btn-info btn-lg collapsed" type="button" title="Click to Open or Close the Plain Language Summary" data-toggle="collapse" data-target="#plain-lang-summary" aria-expanded="false" aria-controls="collapseExample">
    Welcome! Thank-you for wanting to learn about this guide.  Click Here to see the Plain Language Summary
  </button>
</h3>
</div>



{% include index-plain-language-summary.html %}

The PDex work group has made changes to the original version of the IG following the publication of the final CMS Interoperability and Patient Access Rule (CMS-9115) and the subsequent Advancing Interoperability and Improving Prior Authorization Rule (CMS-0057).

The STU2.1 version of the IG incorporates changes to support the sharing of Prior Authorization information with members, providers and other payers. This is done through the profiling of the [ExplanationOfBenefit](PDexPriorAuthorization.html) resource. This version of the Implementation guide also introduces two Bulk APIs that enable the data available through the Patient Access API to also be made available to In-Network/Contracted Providers and other Health Plans through the [Provider Access API](provider-access-api.html) and the [Payer-to-Payer Bulk API](payertopayerbulkexchange.html). 

CMS Guidance defines two sets of data to be made available by payers in the Patient Access API:  Claims and Encounter Data and Clinical data.  They provide links to specific implementations guides for the Patient Access API to provide guidance. Use of these implementation guides is not required but is recommended. If used these guides will provide information payers can employ to meet the requirements of the policies being finalized. 
The [CARIN Consumer Directed Payer Data Exchange IG (CARIN IG for Blue Button®)](http://hl7.org/fhir/us/carin-bb/STU2/) defines how Claims and Encounter Data are to be provided; This Da Vinci Payer Data Exchange IG (PDex) and the [US Core 3.1.1 IG]({{site.data.fhir.ver.uscore3}}), [US Core 6.1.0 IG]({{site.data.fhir.ver.uscore6}}) or [US Core 7.0.0 IG]({{site.data.fhir.ver.uscore7}}) define how Clinical Data is to be provided. 

This version of the Implementation Guide introduces support for [US Core 7.0.0 IG]({{site.data.fhir.ver.uscore7}}). Since the IG embraces US Core the support for [US Core 7.0.0]({{site.data.fhir.ver.uscore7}}) is similar to the support for [US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) which required minimal changes to the PDex IG. Throughout this IG references to [US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) can also be interpreted as supporting [US Core 7.0.0]({{site.data.fhir.ver.uscore7}}) which is expected to supercede [US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) in 2028. 

### Continuing Standards Evolution

This IG recognizes that the healthcare industry is rapidly evolving methods, such as TEFCA, to enable the
secure exchange of information between Providers and Payers and between payers. 
Incorporating prescriptive definitions for connecting, registering and authorizing access to the 
Provider Access or Payer-to-Payer API risks complicating the adoption of solutions that will 
enable secure exchange of data, at scale. Health Plans implementing the Da Vinci guides that address the CMS Prior Authorization Rule (Payer Data Exchange, Coverage Requirements Discovery, Documents templates and Rules and Prior Authorization Support) are urged to continue to engage with their respective work groups in order to 
be aware of ongoing developments and emergent implementation approaches, as the industry works to evolve methods that will enable adoption of these Interoperability Standards at scale. Developments are to be expected in the area of automated registration and access to the secure APIs documented 
in these IGs.

### Background
There are two parallel paths pursued by the CARIN Alliance (**C**reating **A**ccess to **R**eal-time **In**formation) and the Da Vinci Project related to providing health plan data to various stakeholders.  CARIN Alliance approaches the issue primarily from a financial (claims) perspective, with some limited associated clinical data. The Da Vinci Project approaches the issue primarily from a clinical perspective and leaves financial data out of scope.

The CARIN Alliance focused on replicating the CMS Blue Button 2.0 solution directed at providing beneficiaries access to claims information for Medicare Fee For Service (FFS) in the form of a FHIR based ExplanationOfBenefit (EOB). The CARIN Alliance Consumer-Directed Payer Data Exchange (CARIN IG for Blue Button®) solution was intended to provide the same information based on commercial payer databases, at least for Medicare Advantage products. The CMS Interoperability and Patient Access Final Rule expanded the scope of a Blue Button 2.0 equivalent to include not just Medicare Advantage but also Medicaid HMO, CHIP HMO and QHP's in the federal marketplace.

The Da Vinci Payer Data Exchange (PDex) solution started with the goal of providing payer sourced information to providers in the form of FHIR resources consistent with US Core profiles for FHIR Release 4 (R4). The CMS Interoperability Final Rule directs covered payers (as noted above) to make Encounter and Clinical data available to members through an API (defined by the ONC 21st Century Cures Act Final Rule) for, at a minimum, information defined in USCDI release 1.1. Since PDex was already focused on making the same information available through a compliant API, Da Vinci expanded the scope of PDex to include not only payer to provider exchange at the request of the provider but also payer to third party application exchange at the request of the member.

In addition, the CMS Interoperability Final Rule requires a covered plan, at the member’s request, to make their information (as defined by USCDI release 1.1), at a minimum available to any other plan as directed by the member. This ability must exist for up to 5 years after the member leaves the plan. Da Vinci expanded the scope of the PDex Implementation Guide to support this exchange. This aspect of the CMS-9115 Interoperability and Patient Access Rule was never enforced. However, in the following Prior Authorization Rule (CMS-0057) CMS requires Payers to enable Payers to perform a Payer-to-Payer exchange of data for opted-in and matched members that have moved to a new plan from a regulated health plan.
  
At this point we have two solutions that provide an overlapping but different set of information for the members of a health plan. The first is the CARIN IG for Blue Button® which is focused on providing claims information, including the adjudication information, in the form of a FHIR ExplanationOfBenefit (EOB).  The second solution is to provide all payer information related to the clinical condition and care of the patient using US Core profiles on FHIR R4 resources. In the latter case, USCDI information coming from claims is represented as US Core resources and includes, at a minimum: encounters, providers, organizations, locations, dates of service, diagnoses (conditions), procedures and observations. This information would also include clinical information from sources other than claims maintained by the payer, such as:

1. Laboratory results received via HL7 V2 ORU transactions, 
2. Clinical data from HL7 consolidated CDAs, 
3. Information derived from HL7 V2 ADT transactions, 
4. Information received or extracted from immunization registries, 
5. Information related to medication administration from pharmacy benefit managers in pharmacy networks, 
6. FHIR resources, and any other source of clinical information related to the member.
 
Unlike the [US Core 3.1.1 IG]({{site.data.fhir.ver.uscore3}}) or [US Core 6.1.0 IG]({{site.data.fhir.ver.uscore6}}), PDex provides guidance to payers on how to make the following information available via the Patient Access API:

1. Provenance appropriate for payer data exchange (extended US Core Provenance)
2. Dispensed medications (not covered in [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}))
3. Medical devices that are not implantable devices (not covered in US Core)
4. Common Payer Consumer Data Set (CPCDS) to US Core and PDex profiles to satisfy the requirement for exchange of USCDI V1 information
5. Clinical data received by payers (e.g., laboratory results) from multiple sources (e.g., claims, HL7 V2, CDA) to the appropriate FHIR US Core and PDex profile data elements.

<table>
	<tr>
		<td>
			<img width="100%" height="auto" src="Payer-Admin-Financial-Clinical-Data-interchange.png">
		</td>	
	</tr>	
</table>


This IG uses the same Member Health History "payload" for member-authorized exchange of information with other Health Plans, in network providers and with Third-Party Applications. It describes the interaction patterns that, when followed, allow the various parties involved in managing healthcare and payer data to more easily integrate and exchange data securely and effectively.

This IG covers the exchange of:
- Claims-based information via clinical FHIR profiles, namely US Core plus payer-specific profiles for Device and MedicationDispense
- Clinical Information (such as Lab Results, Allergies and Conditions)

In support of the Prior Authorization Rule (CMS-0057) This IG adds support for Prior Authorizations and the supporting clinical information used in reaching a decision. This information iis added to the Patient Access API and is also available to In-Network Providers and other Payers through the Provider Access and Payer-to-Payer Bulk APIs.

This IG covers the exchange of this information using US Core and Da Vinci Health Record Exchange (HRex) Profiles. This superset of clinical profiles forms the Health Plan Member's Health History. 

This IG covers the exchange of a Member's Health History in the following scenarios:
- Provider requested Provider-Health Plan Exchange using CDS-Hooks and SMART-on-FHIR
- Member-authorized Health Plan to Health Plan exchange
- Member-authorized Health Plan to Third-Party Application exchange

The latter two scenarios are provided to meet the requirements identified in the CMS Interoperability Notice for Proposed Rule Making issued on February 11, 2019. To meet the requirements of the CMS Prior Authorization Rule this IG adds two new APIs:

- [Provider Access Bulk API](provider-access-api.html)
- [Payer-to-Payer Bulk API](payertopayerbulkexchange.html)

**There are items in this guide that are subject to update**. This includes:
- Value Sets
- Code Systems
- Examples.

See the [Table of Contents](toc.html) for more information.

### Mapping Adjudicated Claims, Encounter and Prior Authorization Information

The [Data Mapping](datamapping.html) section addresses the mapping of Claims and Encounter data to Clinical profiles. Some 
US Core profiles correlate with data provided in the [Consumer-Directed Payer Data Exchange (Blue Button 2.0)IG](http://hl7.org/fhir/us/carin-bb/). 
The Data Mapping section provides tables to assist implementers in mapping between these IGs.

With the CMS Prior Authorization Rule (CMS-0057) recommending the series of Da Vinci Burden Reduction Implementation Guides (Coverage Requirements Discovery, Documents Templates and Rules and Prior Authorization Support) it is expected that Payers will receive more clinical data from Providers. Much of that data will be in structured form, as defined by the US Core Implementation Guide. The Payer-to-Payer Bulk API also requires the exchange of unstructured data that supports a Prior Authorization decision. Such data would be embedded in a DocumentReference resource for exchange. This is likely to result in Payers having far more clinical data to exchange wih Members, Providers and other Payers.


The IG will continue to be tested at connectathons and will continue to utilize commonly adopted standards (e.g., US Core profiles) that have been tested by other groups (e.g., Argonaut). USCDI concepts are encapsulated in US Core Profiles on FHIR Resources. The Code Systems, Value Sets and codings used in this IG are based on US Core Profiles. Regardless of the way in which payers store their administrative and clinical information they will need to map it appropriately to these profiles. 

In addition, we are creating a supplemental guide to provide more examples of how to populate the resources that are being exchanged based on the nature of the source information (e.g., lab results via V2 transactions, CDA, or claims).

### Endpoint Discovery

Implementers of this IG **SHOULD** support the [endpoint discovery]({{site.data.fhir.ver.hrex}}/endpoint-discovery.html) mechanism defined in the HRex specification to allow discovery of the endpoints used in this IG - specifically the following:

- Patient Access API.
- Provider Access API.
- Payer-to-Payer API (single member and multiple members).

### Intellectual Property Considerations

This HL7 specification contains and references intellectual property owned by third parties ("Third Party IP").  Implementers and testers of this specification **SHALL** abide by the license requirements for each terminology content artifact utilized within a functioning implementation. Terminology licenses **SHALL** be obtained from the Third-Party IP owner for each code system and/or other specified artifact used.  It is the sole responsibility of each organization deploying or testing this specification to ensure their implementations comply with licensing requirements of each Third-Party IP.

{% include ip-statements.xhtml %}

### Conventions

This implementation guide (IG) uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

**SHALL** indicates requirements that must be met to be conformant with the specification.

**SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to) but which do not, for this version of the specification, affect the determination of specification conformance.

**MAY** describes optional behaviors that are free to consider but where there is no recommendation for, or against, adoption.

#### MustSupport

For profiles defined in other IGs, the meaning of Must Support is established in the defining IG. Note that the Must Support requirements for this IG are modeled after the US Core Implementation Guide. For further information see the [Must Support](introduction.html#mustsupport) section in the Introduction page.

#### Security and Privacy

Security and Privacy are critically important when exchanging information. Please refer to the [Security and Privacy](securityandprivacy.html) page in this IG and
the guidance it references in the [Health Record Exchange (HRex) IG]({{site.data.fhir.ver.hrex}}/security.html).

#### Patient/Subject Terminology

It is important to differentiate in the Implementation Guide between identifiers used by the Provider/EMR and those used by the Payer/Health Plan to identify the patient/subject/member.

For the purposes of this IG we will use the following terms:

* **patient** or **subject** id will be used to express the identifier used by the provider to identify a patient/subject.

* **member** id will be used to express the identifier used by the payer/health plan to identify an individual member. Health Plans may historically have referred to these individual members as:

    * Memberƒ
    * Subscriber 
    * Beneficiary
    * Dependent
    * Group Member
    * Plan Member
    * Covered Party
    * Subject of Care.

### Dependencies

{% include dependency-table-nontech.xhtml %}

### Change History

A history of changes made since the publication of the STU1 version of the PDex IG is maintained in [ChangeHistory](changehistory.html).

### Project and Participants

See the [Credits](credits.html) page for a list of contributors to the creation and maintenance of this Implementation Guide.

### FHIR Publisher

This IG was built with Sushi and the FHIR Publisher (v1.6.5 or greater).


[Next Page: Overview](overview.html)


---

// File: input/pagecontent/introduction.md

[Previous Page - Overview](overview.html)

<div class="stu-note">

<b><i>This page has been updated to reflect the release of the CMS Prior Authorization Rule (CMS-0057).
The guide has also been updated to support the adoption of US Core 6.1.0, in addition to existing support for US Core 3.1.1. This change is implemented to enable implementers to comply with both the
CMS-0057 Rule and the ONC's HTI-1 rule that implements US Core 6.1.0 as the base standard of US Core
as of January 1, 2026.</i></b>

</div>
{% include style_insert_table_blue.html %}

The PDex Implementation Guide (IG) identifies three actors and specifies three interactions that occur. Each interaction differs based upon the actors involved and the data payload that is being communicated. 

**Actors:**
1. Health Plans.
2. Providers.
3. Third-Party Applications.
  
**Interactions:**
1. Payer to Provider Exchange using CDS Hooks.
2. Member-authorized Health Plan to Health Plan Exchange.
3. Member-authorized Health Plan to Third Party Applications. 

### PDex STU2.1

The STU2.1 Version of the PDex IG introduces two important new Interactions:

1. Payer-to-Payer Bulk Exchange.
2. Payer-Provider Bulk Exchange.
	
Payer-Provider Bulk Exchange is a bulk exchange of data for Members that have not chosen to opt-out
of data sharing with providers. This exchange effectively supercedes the original Payer Provider 
exchange that used CDS Hooks.

Payer-to-Payer Bulk Exchange is a bulk exchange of data for Members that have opted in to enable a 
payer to retrieve data from a prior plan.

### Interaction with CARIN Consumer-Directed Exchange IG

The Blue Button 2.0 initiative (The CMS Blue Button 2.0 API and the CARIN Consumer-Directed Exchange IG) specifies the profiles used to communicate claims information between health plans and their members. The PDex Implementation Guide (IG) is focused on presenting a member's health and claims information as FHIR clinical profiles (based on US Core) that are more easily consumed by Electronic Medical Records (EMR) systems. 
                                                                                                          
Ad-hoc PDex Member History Requests via CDS Hooks provides a mechanism for providers/clinicians to request information from health plans about the medical history of their patient as part of their regular workflow.  The requestor should be aware that the Health Plan may not have a complete medical history of services provided due to delays in billing, patient ability to pay for services, etc.

The same FHIR profiles used to support communication between the health plan and providers will also be used to provide the payload of member health information which will be exchanged between health plans when authorized by a health plan member.

While the authorization and communication mechanisms may differ between the provider-to-payer exchange and the member-authorized  Payer-to-Payer exchange or member-authorized Payer to Third-Party Application exchange the API interactions and data formats may be the same.  

The objective with the above approach is to:

- Minimize the proliferation of FHIR profiles by encouraging the re-use of FHIR profiles that have seen significant development effort invested by stakeholders across health care systems.
- Consolidate the number of operational interfaces that health plans and  EMR systems need to maintain in order to meet regulatory requirements.

### Implementation Guide Scope

The first release of the PDex IG will focus on the following in-scope items. Items in the deferred scope category will be considered for future iterations of the IG or will be accommodated via an alternative Da Vinci Use Case. Out of scope items are not being considered at this time.
	
#### In Scope
	
- Ambulatory Care Provider queries.
- Member-authorized Payer-to-Payer information exchange.
- Member-authorized Payer-to-Third-Party Application information exchange.
	
#### Deferred Scope
	
- In Patient Care Provider queries.
- Provider initiated data push.
	
#### Out of Scope
	
- Wearable device data.

### Member Consent

Member/Patient Consent for scenarios covered in this Implementation Guide fall into two areas:

1. Provider-Health Plan Exchange
2. Member-mediated Information Exchange.


#### Payer-to-Payer Exchange

Under the CMS Prior Authorization Rule (CMS-0057) the Payer-to-Payer API is an op-in API. A member must
actively opt-in to have their payer retrieve data from their prior payer. The member must provide the 
necessary coverage and demographics information to their health plan to enable them to be matched by their
prior payer.

Claims and Encounter data included in the data exchange is required to exclude financial data.

#### Provider-Health Plan Exchange

Provider-Health Plan exchange of data is covered by the Health Insurance Portability and Accountability Act (HIPAA) under the [Treatment Payment and Health Care Operations](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/disclosures-treatment-payment-health-care-operations/index.html) provision. 

Under the CMS Prior Authorization Rule (CMS-0057) the Provider Access API is an opt-out API. A member's
data is included by default in an exchange with an in-network provider unless the member has chosen to
opt-out of sharing with any providers.

Claims and Encounter data included in the data exchange is required to exclude financial data.


#### Member-mediated Information Exchange

The CMS Interoperability and Patient Access Rule requires that a member new to a health plan **SHALL** be able to request that their information be passed from their old health plan to their new health plan.

The CMS rule also specifies that all data from the member's health record that is held by the health plan since January 1, 2016, be available via API.

A Member **SHALL** also be able to use APIs to share information with Third Party Applications. 

The Member-mediated Information Exchange method will build upon established OAuth2.0 protocols for patient access to their health and claims information that enables the sharing of information with third-party applications. The process of Member Authentication, typically using the member's user credentials from the Health Plan's portal, and OAuth2.0 authorization to share will form the basis of the member Consent to share.

The health history payload for the exchange would be the same FHIR resources that are passed to providers under the Provider-Payer exchange scenario. The [Use Case Scenarios page](usecasescenarios.html) contains examples of how the health history could be utilized.

The exchange of healthcare network/directory information and Pharmacy network/directory information is covered in the [PDex-Plan-Net IG](http://hl7.org/fhir/us/davinci-pdex-plan-net/).

The exchange of Prescription drug formulary information is covered in the [PDex-formulary IG](http://hl7.org/fhir/us/Davinci-drug-formulary/).

The OAuth2.0-based exchange is covered in detail in the [Member-Authorized OAuth2 Exchange](member-authorizedoauth2exchange.html).

### Supporting Specifications

This Implementation Guide is dependent on other specifications. Please submit any comments you have on these base specifications as follows:

- Feedback on CDS Hooks should be posted to the CDS Hooks [GitHub Issue List](https://github.com/cds-hooks/docs/issues)

- Feedback on this Implementation Guide and supporting HL7 specifications should be submitted as issue tickets via the [HL7 FHIR Jira system](https://jira.hl7.org/secure/Dashboard.jspa). Login to Jira and create an issue. Next enter the following information to identify the relevant specification:

Project: FHIR Specification Feedback
Issue Type: Change Request
Specification:

- FHIR Core (FHIR)
- US Core (FHIR)
- US Da Vinci PDex (FHIR).

Individuals interested in participating in Payer Data exchange (PDex) or other HL7 Da Vinci projects can find information about the Da Vinci accelerator project [here](http://www.hl7.org/about/davinci).

#### FHIR

This Implementation Guide uses terminology, notations and design principles that are specific to FHIR. Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this Implementation Guide.


* [FHIR overview](http://hl7.org/fhir/R4/overview.html)
* [Developer's Introduction](http://hl7.org/fhir/R4/overview-dev.html)
* [Clinical Introduction](http://hl7.org/fhir/R4/overview-clinical.html)
* [FHIR data types](http://hl7.org/fhir/R4/datatypes.html)
* [Using codes](http://hl7.org/fhir/R4/terminologies.html)
* [References between resources](http://hl7.org/fhir/R4/references.html)
* [How to read resource and profile definitions](http://hl7.org/fhir/R4/formats.html)
* [Base resource](http://hl7.org/fhir/R4/resource.html).

### Implementation Assumptions

Wherever possible, the PDex IG will use established [US Core STU 3.1.1 Profiles]({{site.data.fhir.ver.uscore3}}) or [US Core STU 6.1.0 Profiles]({{site.data.fhir.ver.uscore6}}). Where information must be presented in FHIR resources that fall outside of the US Core Implementation Guide (IG) the HL7 Da Vinci Health Record exchange (HRex) IG will define the necessary Da Vinci FHIR profiles or will refer to other Implementation Guides, as necessary.

Where profiles are specific to the PDex use case, the profiles will be defined in this guide.

#### Implementation Hierarchy and Priorities

The PDex Implementation Guide (IG) will utilize existing HL7 FHIR Profiles in the following order of descending priority:

1. HL7 FHIR US Core STU3 v3.1.1 (based on FHIR R4 - [{{site.data.fhir.ver.uscore3}}/STU3.1.1]({{site.data.fhir.ver.uscore3}}))
2. HL7 FHIR US Core STU6 v6.1.0 (based on FHIR R4 - [{{site.data.fhir.ver.uscore}}/STU6.1]({{site.data.fhir.ver.uscore6}}))
3. Da Vinci HRex IG profiles (based on FHIR R4 - [http://hl7.org/fhir/us/davinci-hrex/](http://hl7.org/fhir/us/davinci-hrex/) ).

Note: The ONC HTI-1 rule has set a date for January 1, 2026 when US Core 6.1.0 becomes the base standard, superceding US Core 3.1.1. 
Prior to that date Implementers may choose to implement either version of US Core.

This Implementation Guide recognizes that Electronic Medical Record systems used by providers may have existing FHIR APIs that are based on versions of FHIR prior to FHIR R4, with DSTU2 (Argonaut) being the most popular implementation.

Amongst Health Plans there has been limited adoption of FHIR specifications and FHIR APIs. Therefore, for profiles and APIs identified in this IG, the FHIR R4 version **SHALL** be used.

### PDex Data Payloads

The PDex IG covers the following data types:

- Clinical History
- Claims-derived History
- Prior Authorizations

#### Member Health History

The FHIR Resources that comprise the Member Clinical and Claims-derived history, otherwise referred to as the "Member Health History" **SHOULD** include the following profiles where payers have data to support the use of those profiles:

##### US Core

This IG supports three versions of US Core that represents a member's health history.

- US Core 3.1.1
- US Core 6.1.0
- US Core 7.0.0

To understand the changes between US Core 3.1.1, US Core 6.1.0 and US Core 7.0.0 check out the [Cross Version Comparisons Section]({{site.data.fhir.ver.uscore6}}/changes-between-versions.html#cross-version-comparisons) section of the US Core 6.1.0 and US Core 7.0.0. IGs.

##### US Core Profiles (STU3 - 3.1.1)

- [US Core AllergyIntolerance Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-allergyintolerance.html)
- [US Core CarePlan Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-careplan.html)
- [US Core CareTeam Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-careteam.html)
- [US Core Condition Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-condition.html)
- [US Core DiagnosticReport Profile for Laboratory Results Reporting]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-diagnosticreport-lab.html)
- [US Core DiagnosticReport Profile for Report and Note exchange]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-diagnosticreport-note.html)
- [US Core DocumentReference Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-documentreference.html)
- [US Core Encounter Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-encounter.html)
- [US Core Goal Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-goal.html)
- [US Core Immunization Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-immunization.html)
- [US Core Implantable Device Profile](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-implantable-device.html)
- [US Core Laboratory Result Observation Profile](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab.html)
- [US Core Location Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-location.html)
- [US Core Medication Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-medication.html)
- [US Core MedicationRequest Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-medicationrequest.html)
- [US Core Organization Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-organization.html)
- [US Core Patient Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-patient.html)
- [US Core Pediatric BMI for Age Observation Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-pediatric-bmi-for-age.html)
- [US Core Pediatric Weight for Height Observation Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-pediatric-weight-for-height.html)
- [US Core Practitioner Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-practitioner.html)
- [US Core PractitionerRole Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-practitionerrole.html)
- [US Core Procedure Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-procedure.html)
- [US Core Provenance Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-provenance.html)
- [US Core Pulse Oximetry Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-pulse-oximetry.html)
- [US Core Smoking Status Observation Profile]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-smokingstatus.html).

In addition, US Core 3.1.1 uses the [Vital Signs Profile](http://hl7.org/fhir/R4/observation-vitalsigns.html) from the FHIR Specification.

##### US Core Profiles (STU6 - 6.1.0)

- [USCore AllergyIntolerance Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-allergyintolerance.html)
- [USCore CarePlan Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-careplan.html)
- [USCore CareTeam Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-careteam.html)
- [USCore Condition Encounter Diagnosis Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-condition-encounter-diagnosis.html )
- [USCore Condition Problems and Health Concerns Profile]({{site.data.fhir.ver.uscore6}}StructureDefinition-us-core-condition-problems-health-concerns.html)
- [USCore Coverage Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-coverage.html)
- [USCore Implantable Device Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-implantable-device.html)
- [USCore DiagnosticReport Profile for Laboratory Results Reporting]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-diagnosticreport-lab.html)
- [USCore DiagnosticReport Profile for Report and Note Exchange]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-diagnosticreport-note.html) 
- [USCore DocumentReference Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-documentreference.html)
- [USCore Encounter Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-encounter.html)
- [USCore Goal Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-goal.html)
- [USCore Immunization Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-immunization.html)
- [USCore Location Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-location.html)
- [USCore Medication Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medication.html)
- [USCore MedicationDispense Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medicationdispense.html)
- [USCore MedicationRequest Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medicationrequest.html)
- [USCore Observation Clinical Result Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-clinical-result.html)
- [USCore Laboratory Result Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-lab.html)
- [USCore Observation Occupation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-occupation.html)
- [USCore Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-pregnancyintent.html)
- [USCore Observation Pregnancy Status Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-pregnancystatus.html)
- [USCore Observation Screening Assessment Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-screening-assessment.html)
- [USCore Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-sexual-orientation.html)
- [USCore Simple Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-simple-observation.html)
- [USCore Smoking Status Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-smokingstatus.html)
- [USCore Vital Signs Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-vital-signs.html)
- [USCore Pediatric Head Occipital Frontal Circumference Percentile Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-head-occipital-frontal-circumference-percentile.html)
- [USCore Pediatric BMI for Age Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-bmi-for-age.html)
- [USCore Pediatric Weight for Height Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-weight-for-height.html)
- [USCore Blood Pressure Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-blood-pressure.html)
- [USCore BMI Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-bmi.html)
- [USCore Body Height Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-body-height.html)
- [USCore Body Temperature Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-body-temperature.html)
- [USCore Body Weight Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-body-weight.html)
- [USCore Head Circumference Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-head-circumference.html)
- [USCore Heart Rate Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-heart-rate.html)
- [USCore Pulse Oximetry Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-pulse-oximetry.html)
- [USCore Respiratory Rate Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-respiratory-rate.html)
- [USCore Organization Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-organization.html)
- [USCore Patient Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-patient.html)
- [USCore Practitioner Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-practitioner.html)
- [USCore PractitionerRole Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-practitionerrole.html)
- [USCore Procedure Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-procedure.html)
- [USCore Provenance Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-provenance.html)
- [USCore QuestionnaireResponse Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-questionnaireresponse.html)
- [USCore RelatedPerson Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-relatedperson.html)
- [USCore ServiceRequest Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-servicerequest.html)
- [USCore Specimen Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-specimen.html)

##### US Core Profiles (STU7 - 7.0.0)

- [USCore AllergyIntolerance Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-allergyintolerance.html)
- [USCore CarePlan Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-careplan.html)
- [USCore CareTeam Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-careteam.html)
- [USCore Condition Encounter Diagnosis Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-condition-encounter-diagnosis.html )
- [USCore Condition Problems and Health Concerns Profile]({{site.data.fhir.ver.uscore7}}StructureDefinition-us-core-condition-problems-health-concerns.html)
- [USCore Coverage Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-coverage.html)
- [USCore Implantable Device Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-implantable-device.html)
- [USCore DiagnosticReport Profile for Laboratory Results Reporting]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-diagnosticreport-lab.html)
- [USCore DiagnosticReport Profile for Report and Note Exchange]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-diagnosticreport-note.html)
- [USCore DocumentReference Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-documentreference.html)
- [USCore Encounter Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-encounter.html)
- [USCore Goal Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-goal.html)
- [USCore Immunization Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-immunization.html)
- [USCore Location Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-location.html)
- [USCore Medication Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-medication.html)
- [USCore MedicationDispense Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-medicationdispense.html)
- [USCore MedicationRequest Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-medicationrequest.html)
- [USCore Observation Clinical Result Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-clinical-result.html)
- [USCore Laboratory Result Observation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-lab.html)
- [USCore Observation Occupation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-occupation.html)
- [USCore Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-pregnancyintent.html)
- [USCore Observation Pregnancy Status Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-pregnancystatus.html)
- [USCore Observation Screening Assessment Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-screening-assessment.html)
- [USCore Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-observation-sexual-orientation.html)
- [USCore Simple Observation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-simple-observation.html)
- [USCore Smoking Status Observation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-smokingstatus.html)
- [USCore Vital Signs Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-vital-signs.html)
- [USCore Pediatric Head Occipital Frontal Circumference Percentile Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-head-occipital-frontal-circumference-percentile.html)
- [USCore Pediatric BMI for Age Observation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-pediatric-bmi-for-age.html)
- [USCore Pediatric Weight for Height Observation Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-pediatric-weight-for-height.html)
- [USCore Blood Pressure Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-blood-pressure.html)
- [USCore BMI Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-bmi.html)
- [USCore Body Height Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-body-height.html)
- [USCore Body Temperature Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-body-temperature.html)
- [USCore Body Weight Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-body-weight.html)
- [USCore Head Circumference Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-head-circumference.html)
- [USCore Heart Rate Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-heart-rate.html)
- [USCore Pulse Oximetry Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-pulse-oximetry.html)
- [USCore Respiratory Rate Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-respiratory-rate.html)
- [USCore Organization Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-organization.html)
- [USCore Patient Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-patient.html)
- [USCore Practitioner Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitioner.html)
- [USCore PractitionerRole Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitionerrole.html)
- [USCore Procedure Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-procedure.html)
- [USCore Provenance Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-provenance.html)
- [USCore QuestionnaireResponse Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-questionnaireresponse.html)
- [USCore RelatedPerson Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-relatedperson.html)
- [USCore ServiceRequest Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-servicerequest.html)
- [USCore Specimen Profile]({{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-specimen.html)

##### Da Vinci PDex / HRex

- [HRex Coverage](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html)
- [PDex Provider Consent](StructureDefinition-pdex-provider-consent.html)
- [PDex Device](StructureDefinition-pdex-device.html)
- [PDex PriorAuthorization](StructureDefinition-pdex-priorauthorization.html)
- [PDex MedicationDispense](StructureDefinition-pdex-medicationdispense.html) - USCore 3.1.1 implementations only. Superceded by MedicationDispense profile in US Core 6.1.0 and US Core 7.0.0
- [PDex Provenance](StructureDefinition-pdex-provenance.html).

### CapabilityStatement (STU3 - US Core 3.1.1, US Core 6.1.0 and US Core 7.0.0)

The CMS Interoperability rule requires Health Plans to make available data they hold for a member from Jan 1, 2016, onwards. 
When data is transferred from one plan to another the health plan receiving the data request is only obligated to share member 
health data for Five years prior to the date of the request. The data can include:

- CARIN Blue Button Claims data (without the financial content)
- US Core Clinical Data (Structured Data)
- Unstructured clinical data used to determine a prior authorization decision
- PDex Prior Authorization profile.

All resources available via a FHIR API endpoint **SHALL** be declared in a FHIR CapabilityStatement.

The FHIR CapabilityStatement defines the resources and operations supported by the resources exposed via the FHIR API.

The Read and Search Operations **SHALL** be supported for the FHIR Profiles covered in this payload section. 
The V-Read and History operations **MAY** be supported.

The FHIR CapabilityStatement defines the resources and operations permitted on the resources exposed via the FHIR API.

The Permitted Operations for the FHIR Profiles covered in this payload section are defined in the [PDex Server Capability Statement](CapabilityStatement-pdex-server.html)

The Capability Statements in this IG are:

- [Server CapabilityStatement (STU3 - US Core 3.1.1)](CapabilityStatement-pdex-server.html)
- [Server CapabilityStatement (STU6 - US Core 6.1.0)](CapabilityStatement-pdex-server-6-1.html)
- [Provider Access Server CapabilityStatement](CapabilityStatement-pdex-provider-access-server.html)
- [Payer Access Server CapabilityStatement](CapabilityStatement-pdex-payer-access-server.html)

#### Conformance Expectations

This implementation guide uses specific terminology such as **SHALL**, **SHOULD**, **MAY** to flag statements that have relevance for the evaluation of conformance with the guide. As well, profiles in this implementation guide make use of the [mustSupport](http://hl7.org/fhir/R4/profiling.html#mustsupport) element. Base expectations for the interpretations of these terms are set in the [FHIR core specification](http://hl7.org/fhir/R4/conformance-rules.html#conflang) and general Da Vinci-wide expectations are [defined in HRex]({{site.data.fhir.ver.hrex}}/conformance.html).

### MustSupport

For querying and reading PDex and US Core Profiles, Must Support on any profile data element SHALL be interpreted as follows:

PDex Responders **SHALL** be capable of populating all data elements as part of the query results as specified by the PDex and US Core Server Capability Statement.
PDex Requestors **SHALL** be capable of processing resource instances containing the data elements without generating an error or causing the application to fail. In other words PDex Requestors **SHOULD** be capable of displaying the data elements for human use or storing it for other purposes.
In situations where information on a particular data element is not present and the reason for absence is unknown, PDex Responders **SHALL NOT** include the data elements in the resource instance returned as part of the query results.
When querying PDex Responders, PDex Requestors **SHALL** interpret missing data elements within resource instances as data not present in the PDex Responder’s system.
In situations where information on a particular data element is missing and the PDex Responder knows the precise reason for the absence of data, PDex Responders **SHALL** send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or using the dataAbsentReason extension.
PDex Requestors **SHALL** be able to process resource instances containing data elements asserting missing information.

Additional information about MustSupport can be found in the [Da Vinci HRex Conformance Page]({{site.data.fhir.ver.hrex}}/conformance.html#mustsupport) and the 
[US Core Must Support page]({{site.data.fhir.ver.uscore7}}/must-support.html).

NOTE: Typically PDex Responder Actor = Server and PDex Requestor Actor = Client
NOTE: Readers are advised to understand FHIR Terminology requirements, FHIR RESTful API based on the HTTP protocol, along with FHIR Data Types, FHIR Search and FHIR Resource formats before implementing PDex requirements.

#### Healthcare Network Directory 

The provision of a Member-accessible Healthcare Network Directory API is detailed in the companion, subsidiary Payer Data Exchange Plan Network Implementation Guide ([PDex-plan-net IG](http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1/)).

#### Pharmacy Network Directory

The provision of a Member-accessible Pharmacy Network Directory API is detailed in the companion, subsidiary Payer Data Exchange Plan Network Implementation Guide ([PDex-plan-net IG](http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1/)). A Health Plan's Pharmacy Network **SHOULD** be expressed using the same FHIR profiles used for the Healthcare Network Directory.

#### Medication Formulary

When a Health Plan provides prescription drug coverage the list of covered medications is known as a "Formulary."  The provision of a Member-accessible Prescription Drug Formulary API is detailed in the companion, subsidiary Payer Data Exchange Drug Formulary Implementation Guide ([PDex-formulary IG](https://build.fhir.org/ig/HL7/davinci-pdex-formulary/)).


[Next Page: Implementation Guide](ImplementationGuide-hl7.fhir.us.davinci-pdex.html)


---

// File: input/pagecontent/member-authorizedoauth2exchange.md

[Previous Page - Workflow Examples](workflowexamples.html)


This IG provides a mechanism for Member-authorized exchange of their Health History:

* From an old Health Plan to a new Health Plan
* From their Health Plan to a third-party application of the member's choice.

The authorization method uses the [OAuth 2.0](https://oauth.net/2/) protocol to issue a token to an authorized application or service. The authorized application can then use the token to enable interaction with the FHIR REST API.

When a Member is authorizing sharing of the Member Health History with another Health Plan, or a Third Party Application, via the OAuth 2.0 protocol the Health Plan that is operating the API **SHALL** offer the Member an option to allow the sharing of sensitive information, such as behavioral health data, resulting in the data being shared excluding sensitive data that is covered by state and/or federal regulations. However, under the HIPAA Right of Access the Member is at liberty to share that information if they so wish.

<table>
	<tr>
		<td>
			<img  width="100%" height="auto" src="MemberAuthExchange.png">
		</td>	
	</tr>	
</table>

The well-defined mechanism for enabling Member/Patient authorization to share information with an application using the FHIR API is to use OAuth2.0 as the Authorization protocol. The member **SHALL** authenticate using credentials they have been issued by, or accepted by the Health Plan. This is typically the member's customer portal credentials.

After authenticating the Member **SHALL** be presented with an Authorization process that enables them to approve the sharing of information with the Third Party, or new Health Plan, Application that has client application credentials registered with the Health Plan.

The Authorization process **SHALL** provide the ability for the authorized representative to designate a third-party application that will have access to all information permitted by current state and federal regulations.  

After successfully authorizing an application an Access Token and Optional Refresh Token **SHALL** be returned to the requesting application. 

The requesting application **SHALL** use the access token to access the Health Plan's secure FHIR API to download the information that the Member is allowed to access. 

Applications are registered with the API Endpoint. The application owner **MAY** be:
- Another Health Plan
- An Independent developer, such as a Personal Health Record application developer
- Another Covered Entity, such as a Provider.


[Next Page - Change History](changehistory.html)


---

// File: input/pagecontent/other-igs.md

[Previous Page - Artifacts](artifacts.html)

## Other Implementation Guides

An important objective in the HL7 Da Vinci Accelerator Project is to avoid
unnecessary profile proliferation and to leverage common processes. To this end
the PDex IG leverages the profiles, extensions and operations incorporated into
other Implementation Guides.

### Implementation Guides

PDex references the following Implementation Guides:

- [US Core 3.1.1]({{site.data.fhir.ver.uscore3}})
- [US Core 6.1.0]({{site.data.fhir.ver.uscore6}})
- [Da Vinci Health Record Exchange (HRex) 1.0.0](http://hl7.org/fhir/us/davinci-hrex/STU1/)
- [Da Vinci Member Attribution (ATR) 2.0.0](http://hl7.org/fhir/us/davinci-atr/STU2/)
- [Da Vinci Prior Authorization Support (PAS) 2..00](http://hl7.org/fhir/us/davinci-pas/STU2/)
- [FAST National Directory (NDH)](https://build.fhir.org/ig/HL7/fhir-us-ndh/)

Note: The FAST National Directory (NDH) IG has yet to be published. To enable PDex to leverage the profiles and extensions in the NDH IG the required Profiles, Extensions, Value Sets and Code Systems have been copied into PDex. Once the NDH IG is published it is intended that the PDex IG would remove the NDH content in a future PDex STU update and reference the FAST NDH IG directly.


### Profiles

The following profiles are referenced in this IG:

#### US Core

- [US Core 3.1.1 Profiles]({{site.data.fhir.ver.uscore3}}/profiles.html)
- [US Core 6.1.0 Profiles]({{site.data.fhir.ver.uscore6}}/profiles-and-extensions.html)
- [US Core 7.0.0 Profiles]({{site.data.fhir.ver.uscore7}}/profiles-and-extensions.html)


#### Health Record Exchange (HRex)

- [HRex Patient Demographics](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-patient-demographics.html)
- [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-coverage.html)
- [HRex Consent Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-consent.html)
- [HRex Parameters Member Match Request Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-parameters-member-match-in.html)
- [HRex Parameters Member Match Response Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-parameters-member-match-out.html)

#### Da Vinci Member Attribution (ATR)

- [ATRGroup](http://hl7.org/fhir/us/davinci-atr/STU2/StructureDefinition-atr-group.html)

### Operations

The following operations are referenced:

#### Health Record Exchange (HRex)

- [HRex Member Match Operation](http://hl7.org/fhir/us/davinci-hrex/STU1/OperationDefinition-member-match.html)

#### Da Vinci Member Attribution (ATR)

**NOTE:** exportType parameter **SHALL** be populated with a value for all PDex implementations of the $Davinci-data-export-operation. 
i.e., [Provider Access API](provider-access-api.html) and [Payer-to-Payer Bulk API](payertopayerbulkexchange.html).

- [$Davinci-data-export-operation](http://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html)

### IG/package dependencies

The following dependencies are used in production of this guide:

{% include dependency-table-short.xhtml %}

### Cross version analysis

{% include cross-version-analysis-inline.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}

<br/>


<p><a href="PDexDownloads.html">[Next Page - Downloads]</a></p>



---

// File: input/pagecontent/overview.md

[Previous Page - Home](index.html)

The PDex guide is based on the [HL7 FHIR 4.0.1](http://hl7.org/fhir/R4/) standard, as well as the [CDS Hooks](https://cds-hooks.org/),  [SMART on FHIR](http://docs.smarthealthit.org/) and [OAuth2.0](https://oauth.net/2/) standards, which build additional capabilities on top of FHIR. This architecture is intended to maximize the number of clinical systems that conform to this guide as well as to allow for easy growth and extensibility of system capabilities in the future.

To understand how to read an Implementation Guide implementers should refer to the [How to Read page](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html) in the FHIR Specification.

### FHIR

This implementation guide uses terminology, notations and design principles that are specific to FHIR. Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

- [FHIR Overview](http://hl7.org/fhir/R4/overview.html)
- [Developer's Introduction](http://hl7.org/fhir/R4/overview-dev.html) (or [Clinical Introduction](http://hl7.org/fhir/R4/overview-clinical.html))()
- [FHIR Data Types](http://hl7.org/fhir/R4/datatypes.html)
- [Using Codes](http://hl7.org/fhir/R4/terminologies.html)
- [References Between Resources](http://hl7.org/fhir/R4/references.html)
- [How to Read Resource & Profile Definitions](http://hl7.org/fhir/R4/) and additional [IG reading guidance](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html)
- [Base Resource](http://hl7.org/fhir/R4/resource.html)
- [Resource Formats](http://hl7.org/fhir/R4/formats.html)

- This implementation guide supports the [R4](http://hl7.org/fhir/R4/index.html) version of the FHIR standard and builds on the US Core [3.1 (USCDI v1)]({{site.data.fhir.ver.uscore3}}), 
- [6.1 (USCDI v3)]({{site.data.fhir.ver.uscore6}}) and [7.0 (USCDI v4)]({{site.data.fhir.ver.uscore7}}) implementation guides and implementers need to familiarize themselves with the profiles in those guides. The profiles in this IG conform with all three releases of US Core.

This Implementation Guide (IG) also utilizes the profiles detailed in the [HL7 FHIR� US Core Implementation Guide STU3 Release 3.1.1]({{site.data.fhir.ver.uscore3}}), [HL7 FHIR� US Core Implementation Guide STU6 Release 6.1.0]({{site.data.fhir.ver.uscore6}}), or [HL7 FHIR� US Core Implementation Guide STU7 Release 7.0.0]({{site.data.fhir.ver.uscore7}}) based on HL7 FHIR Release 4. This guide addresses use cases for payers to share clinical information with members, their authorized third-party applications, other payers or providers. In addition, the guide adds profiles and operations that are either not available or are unsuited for use by the payer community. An example of this is the MedicationDispense that is used to record the prescription medications supplied by a pharmacy to a health plan member. The relationship between US Core and Payer Data Exchange can be expressed in a Venn diagram as shown below.

This IG also utilizes resources from the FHIR R4 Base Specification. Implementers should therefore refer to the following resources from the base specification:

- [Bundle](http://hl7.org/fhir/R4/bundle.html)
- [CapabilityStatement](http://hl7.org/fhir/R4/capabilitystatement.html)
- [CodeSystem](http://hl7.org/fhir/R4/codesystem.html)
- [Consent](http://hl7.org/fhir/R4/consent.html)
- [Coverage](http://hl7.org/fhir/R4/coverage.html)
- [Device](http://hl7.org/fhir/R4/device.html)
- [DocumentReference](http://hl7.org/fhir/R4/documentreference.html)
- [Encounter](http://hl7.org/fhir/R4/encounter.html)
- [Endpoint](http://hl7.org/fhir/R4/endpoint.html)
- [ExplanationOfBenefit](http://hl7.org/fhir/R4/explanationofbenefit.html)
- [Group](http://hl7.org/fhir/R4/group.html)
- [Location](http://hl7.org/fhir/R4/location.html)
- [MedicationDispense](http://hl7.org/fhir/R4/medicationdispense.html)
- [OperationDefinition](http://hl7.org/fhir/R4/operationdefinition.html)
- [Organization](http://hl7.org/fhir/R4/organization.html)
- [Parameters](http://hl7.org/fhir/R4/parameters.html)
- [Patient](http://hl7.org/fhir/R4/patient.html)
- [Practitioner](http://hl7.org/fhir/R4/practitioner.html)
- [Provenance](http://hl7.org/fhir/R4/provenance.html)
- [SearchParameter](http://hl7.org/fhir/R4/searchparameter.html)
- [StructureDefinition](http://hl7.org/fhir/R4/structuredefinition.html)
- [ValueSet](http://hl7.org/fhir/R4/valueset.html)


<table><tr><td><img width="100%" height="auto" src="PDexAndUSCoreRelationship-v5.png" /></td></tr></table>
  
Implementers of this specification therefore need to understand some basic information about these specifications, which act as building blocks for this Implementation Guide.

The purpose of this Implementation Guide is to enable data to be exchanged between Health Plans (Payers) and Practitioners (Providers) and via Member-authorized exchange between Health Plans and Third-Party Applications, or with other health plans. 

All data exchanged by Health Plans using the interactions covered in this IG **SHALL** be transformed to FHIR R4 resources.  Health Plans **MAY** have both data from clinical and claims sources that they store in their Systems of Record. This IG does not require Health Plans to store this data in FHIR formats, rather only capable of transforming to FHIR resources for the purposes of data exchange with Providers, other Health Plans and Third-Party Applications for the interactions covered in this IG.

**There are items in this guide that are subject to update**. This includes:
- Value Sets
- Code Systems
- Examples.

We have mapped the CARIN Alliance CPCDS as a generic representation of information held by Payers relevant to representation in US Core profiles.

The schematic shown below provides an overview of this transformation.

<table><tr><td><img width="100%" height="auto" src="Payer-Admin-Financial-Clinical-Data-interchange.png" /></td></tr></table>

Health Plans receive data from many other sources that contribute to a Member's Health History. In addition to medical claims Health Plans may receive C-CDA documents or HL7 V2 messages, such as Admit, Discharge, Transfer (ADT) Messages. As an example, the diagram below shows how an ADT Message can be transformed into HL7 FHIR Resources:

<table><tr><td><img width="100%" height="auto" src="MappingFromV2toFHIR.png" /></td></tr></table>

If the same data element is included in the member’s record from multiple sources for the same event, that information only needs to be mapped to FHIR and made available via the Patient Access API once. Payers should look at the data they maintain and ensure that information relevant to the member’s care and treatment over time is accurately represented – in this way, it may not be appropriate to include a single data element only once across multiple events.

Where data is passed via Payer Data Exchange, Payers have the ability to indicate the provenance of the information they are sending. Receiving plans are not required to deduplicate data they have received from other payers or otherwise review or validate the data they receive from another payer.
 
### Exchange Methods

This IG covers three methods of information exchange:
1. CDS-Hooks and SMART-on-FHIR
2. OAuth2.0 or SMART-on-FHIR Member-authorized Exchange
3. $patient-everything exchange via alternate secure channels.

This version of the IG adds new APIs that support the requirements of the CMS Prior Authorization Rule (CMS-0057). 
These APIs are:

- [Provider Access API](provider-access-api.html).
- [Payer-to-Payer Bulk API](payertopayerbulkexchange.html)

Earlier versions of the PDex IG recommended the use of CDS Hooks to enable Provider Access to ember data. That 
method has been superseded by the [Provider Access API](provider-access-api.html) that meets the requirements of
the CMS Prior Authorization Rule (CMS-0057).

#### CDS-Hooks and SMART-on-FHIR

**Note: This section is being considered for removal in the next release of this IG.**

The [PDex Implementation, Actors, Interactions, Data Payloads and Methods](pdeximplementationactorsinteractionsdatapayloadsandmethods.html) section provides an introduction to the CDS Hooks method of exchange. That section also includes information the Actors involved in data exchange and the methods of exchange of the
data payloads covered by this IG.

An overview of the flow of the CDS-Hooks and SMART-on-FHIR exchange is shown in [section 8 - CDS Hooks](http://build.fhir.org/ig/HL7/davinci-epdx/cds-hooks.html#pdex-hooks). This exchange flow is used for communication between Providers and Health Plans. The CDS-Hook will be used to perform a Patient/Member match and return a token that enables a SMART-on-FHIR App to access information via the Health Plan's FHIR API for the matched member.


#### OAuth2.0 or SMART-on-FHIR Member-authorized Exchange

The sharing of data with a member controlled Third Party App is accomplished through the Member's HIPAA Right of Access. As such the member is able to use their data in any way they desire. 

The SMART-on-FHIR application framework is a well-defined mechanism for enabling Member/Patient authorization to share information with a SMART-on-FHIR application. The member **SHALL** authenticate using credentials that have been issued by or are recognized and accepted by the Health Plan. These are typically the member's customer portal credentials for accessing the health plan.

After authenticating the Member **SHALL** be presented with an Authorization screen that enables them to approve the sharing of information with the Third Party, or new Health Plan Application that has client application credentials registered with the Health Plan.


#### $patient-everything Exchange Via Alternate Secure Transport

The [$patient-everything](https://www.hl7.org/fhir/operation-patient-everything.html) operation for an individual member enables the potential use of Bulk FHIR, using such formats as ND-JSON. This IG does not define the alternate secure transport mechanisms that may be used for exchange between Health Plans. However, the IG does allow for the use of Bulk FHIR formats to exchange data for an individual member where the member has authorized that exchange or Federal, state or local regulations authorize the sharing of information between parties. 

The use of the Bulk FHIR specification for transmission of member data **SHALL** honor jurisdictional and personal privacy restrictions that are relevant to a member's health record.

Data Segmentation capabilities for Bulk Data Transfer are currently being developed by FHIR community members which may have an impact on future revisions of the IG.

### Provenance

Since Health Plans compile information from many sources to create a Member's Health History it is important that data traceability is maintained. This guide defines a Provenance resource that is used for this purpose. This resource supplements the US Core Provenance profile which is typically not suited to payer's common use cases. The PDex Provenance profile is used to identify the source of information, and the fact that the payer is acting as the transmitting agent.

Health Plans **SHALL** incorporate provenance records that they receive as part of any exchange of FHIR data. Where a FHIR Provenance resource is not provided, such as when data is received from other non-FHIR sources, the Health Plan **SHOULD** create FHIR Provenance record(s) to identify the source of the information being exchanged. Health Plans **SHALL** provide Provenance records that, at a minimum, indicate that they are playing the role of Transmitter of the data in any PDex information exchange.

In the case of historical data, the Health Plan **SHOULD** identify the author, source and source format of the data.

Retrieving Provenance for resources is accomplished by adding "_revinclude=Provenance:target" to a search request.

Provenance is covered in more detail in [Handling Data Provenance](handlingdataprovenance.html).


[Next Page - Introduction](introduction.html)


---

// File: input/pagecontent/payertopayerbulkexchange.md

[Previous Page - Payer-to-Payer Exchange (single member)](payertopayerexchange.html)

<div class="stu-note">

<b><i>Payer-to-Payer API bulk data guidance in this version of the IG is draft only. 
It has not appeared in ballot but has been tested at multiple Connectathons. 
This has been incorporated to meet the requirements of the CMS Prior Authorization Rule 
(CMS-0057)</i></b>
</div>

When requested by a Health Plan member, the Exchange of clinical data, as
scoped by USCDI version 1 or version 3 and represented in FHIR by US Core 
3.1.1 or 6.1.0, is a requirement of the Advancing Interoperability and 
Prior Authorization Rule (CMS-0057) published in February 2024. The rule requires 
Payers to support the bulk exchange of data for multiple members.

The PDex Payer-to-Payer FHIR-based bulk data exchange in this section of 
the IG supports the exchange of data for a single member, or 
multiple members. 

Bulk Payer-to-Payer exchange **SHALL** be accomplished by the use of the 
Bulk FHIR API specification. 

The Advancing Interoperability and Prior Authorization Final Rule requires 
that the Member consent to the retrieval of their data from their prior 
health plan.

The Advancing Interoperability and Prior Authorization Final Rule requires that 
health plans **SHALL** limit the data exchanged to data with a service date no 
earlier than 5 years prior to the date of the data request. Prior Authorizations 
**SHALL** be limited to current/active Prior Authorizations in addition to Prior 
Authorizations that have changed status within the last year, as of the date of 
request for information.

Status changes of Prior Authorizations will be determined by the Prior Authorization 
Processor. This IG is representing the change in status. For example, a Prior Authorization 
may be denied, but then approved upon appeal. A prior Authorization might be pended and then
subsequently approved or denied.

If the Prior Authorization processor changes the status of the Prior Authorization then the
date of change will be recorded, In the Provider and Payer-to-Payer APIs and Prior 
Authorization that has changed status in the previous 12 months (from the date of enquiry)
**SHALL** be included in the API response.


The Advancing Interoperability and Prior Authorization Final Rule requires that 
Prior Authorizations exchanged via the Payer-to-Payer Exchange API **SHALL** include 
the supporting clinical data used to make the prior authorization determination. 
The supporting data **SHALL** include unstructured data used in the prior 
authorization determination. 

The data available to be returned by the Bulk Payer-to-Payer Exchange API **SHALL** 
include the following types of data:

- [US Core 3.1.1]({{uscore3}}) oe [US Core 6,1,0]({{uscore6}})Clinical Data with additional PDex defined Profiles.
- Claims and Encounters, with financial data excluded as defined by Non-Financial ExplanationOfBenefit profiles defined in the
- [Prior Authorizations](/StructureDefinition-pdex-priorauthorization.html) and supporting clinical data as defined by this guide. 
- [CARIN Consumer Directed Payer Data Exchange IG Non-Financial (Basis) Profiles ]({{site.data.fhir.ver.carinbb}}), as detailed below.

The CMS Prior Authorization Rule (CMS-0057) requires Claims and Encounter data to be exchanged with
Providers and Payers via the respective Provider Access API and Payer-to-Payer APIs, defined in this IG.
The Rule requires that a non-financial view of those claims and encounters are provided. This IG utilizes
the work of the [CARIN Consumer Directed Payer Data Exchange IG]({{site.data.fhir.ver.carinbb}}) which defines the following
non-financial profiles:

- [Inpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis.html)
- [Outpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis.html)
- [Professional NonClinician Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis.html)
- [Oral Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Oral-Basis.html)
- [Pharmacy Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-Basis.html)


### Performing Bulk Data Exchange

Payer-to-Payer Exchange is an **"opt-in"** choice for Members. The requesting 
(or New) health plan **SHALL** request permission (i.e., consent) from the Member 
to retrieve the data from their prior plan. 
[Payer-to-Payer (single Member) Exchange](payertopayerexchange.html)), **SHALL** exchange the same data. 

The following data **SHALL** be exchanged with 
the prior plan for each Member that provides their consent in order for the 
prior plan to attempt to match the Member:

- [HRex Patient Demographics Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-patient-demographics.html)
- [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-coverage.html)
- [HRex Consent Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-consent.html).

The following information **MAY** be exchanged with the prior plan for a member:

- (optional) Current, or future, coverage provided by the Requesting Plan

The bulk Exchange workflow is based upon the workflows identified in the 
Payer-to-Payer (Single Member) exchange. The variations to support bulk 
exchange are documented in this section of the IG.

The requesting Payer **SHALL** obtain an access token in accordance with the 
[SMART Backend Services Authorization](http://hl7.org/fhir/uv/bulkdata/STU2/) 
process, as documented in the 
[FHIR Bulk Data Access IG (2.0.0 STU2)](http://hl7.org/fhir/uv/bulkdata/STU2/). 

The bulk Payer-to-Payer exchange is initiated by supplying a Parameter bundle to the 
[$bulk-member-match operation](OperationDefinition-bulk-member-match.html). A set of OAuth2.0/SMART-on-FHIR Client Credentials 
**SHALL** be required to access the secured $bulk-member-match operation endpoint.

For each member submitted to the $bulk-member-match operation the following parameters 
**SHALL** be supplied as a **parameter.part** element in the 
[$multi-member-match-bundle-in](StructureDefinition-pdex-parameters-multi-member-match-bundle-in.html) parameter bundle. 

- MemberPatient: - [HRex Patient demographics](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-patient-demographics.html)
- CoverageToMatch - details of the prior health plan coverage, supplied by the member, typically from the health plan coverage card. Uses the [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html)
- Consent - Record of consent received by requesting payer from Member to retrieve their records from the prior payer. This is an opt-in. Uses the [HRex Consent Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-consent.html)

Optionally the new health plan **MAY** include the following element in the **parameter.part**
element for a member:

- CoverageToLink - Optional parameter. Details of new or prospective health plan coverage, provided by the health plan based upon the member’s enrolment. Uses the [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html)

An example request bundle can be found here: [PDex $multi-member-match request](StructureDefinition-pdex-parameters-multi-member-match-bundle-in.html)

The PDex $multi-member-match and the subsequent $davinci-data-export operations **SHALL** be submitted using a HTTP POST.
The HTTP Header **SHALL** include:

    Prefer: respond-async


### Bulk Member Match with Consent

The Bulk Member Match Operation will use the following Parameters:

- In: [PDexMultiMemberMatchRequestParameterBundle](StructureDefinition-pdex-parameters-multi-member-match-bundle-in.html)
- Out: [PDexMultiMemberMatchResponseParameters](StructureDefinition-pdex-parameters-multi-member-match-bundle-out.html)

The Response Profile provides a Group identifier that can be used by the requesting/new
payer to retrieve data.

The Operation Definition for Bulk Member Match is:

[PDex Bulk Member Match](OperationDefinition-bulk-member-match.html)

The Bulk Member Match Operation **SHALL** evaluate the consent request for 
each member and determine whether the request for only Non-Sensitive data, 
as determined by federal and state regulations that apply to the data holder, 
can be complied with. The following decision tree illustrates how the Consent 
determination **SHALL** be made.

Consent **SHALL** be evaluated at the time of the data request to ensure that the Member
has not contacted their previous payer to override sharing consent.

The consent decision logic is the same for Single Member Match and Bulk Member Match. 
It is the result of the decision that differs. For Single Member Match Operation, 
either the Patient information is returned, or an Operation Outcome is generated. 
In Bulk Member Match a member is assigned to a Matched, Non-Matched or Consent 
Constrained Group and processing continues until every member has been evaluated 
and the resulting Groups are returned in the Operation response.

The consent decision flow for the bulk member match is shown in the following diagram:

<div style="height=auto;width=90%;">
{% include member-match-consent-decision-flow.svg %}
</div>

### Searching for Matched Groups

A payer may send multiple requests for member matching to another Payer. This can result in multiple
Matched Group records being created. The FHIR Group resource supports searching on characteristic. 
To enable searching the [PDexMemberMatchGroup Profile](StructureDefinition-pdex-member-match-group.html)
sets the characteristic element to include the "match" code, the identifier of the requesting payer
in (characteristic.valueReference), sets characteristic.exclude to false and characteristic.period.start to the date of the match request.

Implementers **SHALL** support the standard search parameters for group that are specified in the base 
Group resource in FHIR R4 specification: [Group Search Parameters](StructureDefinition-pdex-member-match-group.html).


### Da Vinci Data Export Payload

The Provider Access is meant to enable in-network providers to retrieve the information they want about one or more patients
that are attributed to them via an existing, or impending treatment relationship. Under the requirements of the CMS
Prior Authorization Rule (CMS-0057) the data available through the API **SHOULD** include:

- US Core Clinical data ([US core 3.1.1]({{site.data.fhir.ver.uscore3}}) or [US Core 6.1]({{site.data.fhir.ver.uscore6}})
- [CARIN Blue Button non-Financial Profiles]({{site.data.fhir.ver.carinbb}}/artifacts.html)
- [PDex Prior Authorization Profile](StructureDefinition-pdex-priorauthorization.html)


### DaVinci-Data-Export Operation

The [davinci-data-export Operation](http://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html) and the optional parameters are defined in the [Da Vinci Member Attribution (ATR) List Implementation Guide STU2](http://hl7.org/fhir/us/davinci-atr/STU2/).

Requesting/New Payer:

- **SHALL** be issued with OAuth2.0/SMART-On-FHIR client credentials that enable access to /Group/{id}. Where {id} is the PDex Member Match Group(s) resulting from the Bulk Member Match Operation.
- **SHALL** be permitted to SEARCH /Group. The search function and the bundle contents returned **SHALL** be restricted to the {ids} that are associated with theRequesting/New Payer.
- **MAY** be associated with more than one PDex Member Match group list.
- **SHALL** be permitted to GET /Group/{id} for any PDex Member Match Group list they are associated with.
- **SHALL** be permitted to call $davinci-data-export operation for any /Group/{id} they are associated with.
- **SHALL** be permitted to retrieve data with a service date within 5 years of the date of the request for information.

While the [$Davinci-data-export-operation](http://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html) 
enables granular resource requests the operation **SHOULD** be used with two scenarios:

- Requesting all data within the previous 5 years for all members in the list.
- Requesting all data for all members in the list since the last request.

The latter option is to enable two scenarios:

- For "run-off" data to be collected for members that have switched plans
- For members with concurrent coverage. 

For members with concurrent coverage this will enable data to be requested at 
least quarterly.

The Data Export operation **SHALL** check the consent status for each member 
at the time of execution. This is necessary to identify members that may have 
changed their opt-in/opt-out status for sharing with health plans.

Data that **SHALL** be available via the API includes:

- [US Core 3.1.1](http://hl7.org/fhir/us/core/STU3.1.1/) Clinical Data with additional PDex defined Profiles.
- Claims and Encounters, with financial data excluded as defined by Non-Financial ExplanationOfBenefit Basis profiles defined in the [CARIN Consumer Directed Payer Data Exchange]({{site.data.fhir.ver.carinbb}}) Implementation Guide.
- [Prior Authorizations](/StructureDefinition-pdex-priorauthorization.html) and supporting clinical data as defined by this guide.

Claims and clinical data **SHALL** be limited to records with a service date 
within 5 years of the date of request for data.
Prior Authorizations **SHALL** be limited to Active/Current Prior Authorizations and 
Prior Authorizations that have changed status within the last year, as of the date 
of the information request.

#### ExportType

This is an optional parameter in the Da Vinci Data Export Operation.
For Payer-to-Payer Bulk Exchange the exportType field **SHALL** have the following value:

- hl7.fhir.us.davinci-pdex#payertopayer

##### _since

Resources in the Patient Access API can extend back to January 1, 2016.
For Payer-to-Payer Exchange only data updated within five years of the transaction 
request date **SHALL** be returned via the API. The _since parameter **SHOULD** be used for resource 
requests when the full history is not required. It is expected that Payers **MAY** 
first request data for members without limiting the request using the _since parameter. 
Subsequent requests **MAY** then use _since to limit data to information that is new. 
This would enable the Payer to request "Run-off" data that the prior plan 
received after the initial enrollment by the member in the new plan.

If the _since parameter is earlier than five years before the transaction request 
the date/time **SHALL** be overridden and set to five years before the transaction 
request date.

##### _until

The _until parameter **MAY** be used less frequently. It is most likely to be 
used by the Payer to retrieve member data for a specific period. This may be the 
case where two Payers both share a Member that has concurrent coverage with 
multiple Payers. For example when requesting data for a particular quarterly period.

##### _type

The _type parameter **MAY** be used to restrict the resources retrieved by the 
Payer. If this parameter is not used all available resources **SHALL** be returned 
by the Payer, subject to the constraints applied by other input parameters.

##### _typeFilter

The _typeFilter parameter **MAY** be used to further restrict the resources 
retrieved by the Payer. For example, to only retrieve Observations of a certain 
type. The _typeFilter, if used, **SHALL** comprise one, or more, valid FHIR 
search queries for the respective resource being filtered.

NOTE: When constructing search queries to incorporate into a _typeFilter, Search parameters 
supported by the relevant profiles from the PDex, US Core or CARIN Blue Button IGs **SHALL**
be followed.

The overall workflow for Bulk Payer-to-Payer Exchange is shown in the diagram below:

<div style="height=auto;width=90%;">
{% include bulk-p2p-exchange.svg %}
</div>


### Access and Refresh Tokens

Implementers **SHOULD** implement OAuth 2.0 access management in accordance with 
the SMART Backend Services Authorization Profile. When SMART Backend Services 
Authorization is used, Bulk Data Status Request and Bulk Data Output File 
Requests with requiresAccessToken=true **SHALL** be protected the same way as
the Bulk Data Kick-off Request, including an access token with scopes that cover 
all resources being exported. A server **MAY** additionally restrict Bulk Data 
Status Request and Bulk Data Output File Requests by limiting them to the client 
that originated the export. Health plans **SHALL** limit the data returned to 
only those FHIR resources for which the client is authorized.

Clients **SHALL** require OAuth client credentials to enable secure access to read 
and search the Group resources and perform Bulk export operations. Access Tokens 
**SHALL** be required to access the Group resources and the Bulk export operation. 
Access and Refresh Tokens **SHALL** be issued to support the client requesting and
subsequently retrieving the bulk data response to their request.

Registering of a client application or service to perform the bulk Payer-to-Payer 
Exchange should be registered in accordance with the approach defined in the 
[SMART App Launch IG](https://hl7.org/fhir/smart-app-launch/client-confidential-asymmetric.html#registering-a-client-communicating-public-keys).
That IG also encourages the use of the OAuth2.0 Dynamic Client Registration Protocol 
(DCRP). An alternative approach that is closely aligned with the DCRP protocol is 
to use the B2B protocols detailed in the [HL7 Security for Scalable Registration, Authentication, and Authorization](http://hl7.org/fhir/us/udap-security/STU1/) 
IG.

### Scopes for Operations

[SMART App Launch STU2.1](http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch)
defines granular scopes for resources. Following the model proposed in the section on
[FHIR Resource Scope Syntax](https://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html#scopes-for-requesting-context-data)
the following scopes are proposed to control access to the Bulk-member-match  
and Da Vinci Data Export Operations for Payer-to-Payer bulk exchange:

- http://hl7.org/fhir/us/davinci-pdex/OperationDefinition/bulk-member-match
- system.Group.u?code=http://hl7.org/fhir/us/davinci-pdex/ValueSet/PDexMultiMemberMatchResultVS|match

This would be the scope to execute the *bulk-member-match* operation 
and the *davinci-data-export* operation for *payertopayer* exchange with the data export being restricted 
to the Group *id(s)* that the user is authorized to access.


[Next Page - Data Mapping](datamapping.html)


---

// File: input/pagecontent/payertopayerexchange.md

[Previous Page - Handling Data Provenance](handlingdataprovenance.html)

{% include style_insert_table_blue.html %}

<div class="stu-note">
<b><i>This page has been updated to reflect the release of the CMS Prior Authorization Rule (CMS-0057).
The changes have been made to stay in sync with the bulk transfer requirements of the rule. </i></b>
</div>

The Exchange of all of a member's clinical data, as scoped by USCDI version 1 and represented in FHIR by 
US Core 3.1.1, is a requirement of the CMS Interoperability Rule. This IG also supports the exchange of
USCDI version 3 as represented in FHIR by US Core 6.1.0, to support compliance with ASTP's HTI-1 Rule.

The CMS Prior Authorization Rule (CMS-0057) limits the data to be exchanged via Payer-to-Payer APIs to Five
years prior to the date of the request.

Payers **MAY** choose to implement Payer-to-Payer Exchange for a single member by following the content provided in this section of the IG.

Payers **SHALL** implement the Bulk Payer-to-Payer Exchange detailed in this IG on the [Payer-to-Payer Bulk Exchange](payertopayerbulkexchange.html) page to exchange information for multiple members. Bulk Payer-to-Payer Exchange
**MAY** be used to exchange data for a SINGLE member.

Payer-to-Payer exchange for a single member **MAY** be accomplished by three methods. Clients wishing to retrieve data **SHOULD** consult 
the Data Provider's Server Capability Statement to determine which methods are made available by the data holder. 
Each retrieval method for a single member **SHALL** be preceded by the use of the following interaction to match a member and provide consent:

### Member Match with Consent

<div style="height=auto;width=90%;">
{% include authorization-consent.svg %}
</div>

Health Plans **SHALL** support the $member-match operation.

The steps in the Member Match with Consent process are:

- Establish a secure connection via mTLS
- Use mTLS secure connection to perform OAuth2.0 Dynamic Client Registration to acquire OAuth2.0 client credentials
- Use Client Credentials to acquire OAuth2.0 token to perform $member-match operation
- The $member-match operation uses Patient Demographics and Coverage records to determine if a member is found
- The $member-match operation evaluates the Consent resource for a matched member
- If a member is matched and the Consent request can be complied with (Per Policy request and Date range) a unique Member ID is provided to the requesting Payer (Payer2)
- If a Member ID is returned from $member-match, a request is made to the OAuth2.0 Token endpoint for an OAuth2.0 Access Token which is scoped to the identified shared member
- If a Token is granted the requesting payer performs data retrieval steps using appropriate methods, defined below.

Some of these steps are optional depending on the authorization and trust framework being used.

The process for evaluating consent uses the same logic and decision flow used
in the bulk Payer-to-Payer Exchange. However, the outcome in the Single Member Match operation is different because either Patient information is returned for the Matched Member or an Operation Outcome is returned.

The decision flow is shown below:

<div style="height=auto;width=90%;">
{% include single-member-match-consent-decision-flow.svg %}
</div>

#### The $member-match operation

The $member-match operation is defined in the [HRex member-match operation](http://hl7.org/fhir/us/davinci-hrex/OperationDefinition-member-match.html). The profiles used in the
$member-match Operation are also defined in the [HRex IG](http://hl7.org/fhir/us/davinci-hrex). These are:

- [HRex Patient Demographics Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-patient-demographics.html)
- [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-coverage.html)
- [HRex Consent Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-consent.html).

The Coverage Profile is used to provide data for the CoverageToMatch and the CoverageToLink parameters in the
$member-match operation. The CoverageToMatch is the information about the prior coverage. The CoverageToLink
is the current coverage for the member at the new/requesting payer.

When no match is found, or if multiple matches are found, a 422 Unprocessable entity status code will be returned.

If the receiving payer matches to a unique member but is unable to comply with the consent request, a
Patient ID **SHALL** NOT be returned in the $member-match response and a 422 status code **SHALL** be
returned with an Operation Outcome which indicates that the consent request could not be complied with.

### Evaluation of Consent

The receiving payer **MAY** store the Consent record for the member.
The following minimal content from the Consent record is used to validate a data request:

- Member Identity is matched
- Consent Policy (Everything or only Non-Sensitive data) matches the data release segmentation capabilities of the receiving payer
- Date period for consent is valid
- Payer requesting retrieval of data is matched.

If a Consent is provided by an Authorized Representative, the person's demographic details should be included as
a **contained** resource (such as Patient or RelatedPerson) within the consent record. The Authorized
Representative should be identified as an actor with an appropriate SecurityRoleType, such as "DPOWATT",
"HPOWATT" or similar value.

The exchange of Consent is being carried out between two covered entities and the content and conditions for an
exchange of consent will be governed by a mutually agreed Trust Framework. The Consent resource's document
reference link would be to a document maintained by the requesting payer. The content of the referenced document
would NOT be used for any determination as part of the automated $member-match operation. The referenced document's
only purpose is to provide evidence of an appropriate signature of the consenting member/patient.

It is expected that the referenced document url/identifier could be used in an out-of-band audit to determine the
validity of a consent request. This would be part of the Trust Framework agreed by the covered entities who
are party to the framework rules.

If the receiving payer matches to a unique member but is unable to comply with the consent request, a
Patient ID **SHALL** NOT be returned in the $member-match response and a 422 status code **SHALL** be
returned with an Operation Outcome which indicates that the consent request could not be complied with.

#### Period of Consent Validity

Here are some scenarios that could inform the decision about an appropriate period of validity for a consent to
exchange health information:

- Medicare has an annual enrollment. This can result in beneficiaries signing up for a new health plan up to 3 months before their new health plan goes into effect.
- When a member's health plan is terminated it is not uncommon for claims and supporting information to be received by the health plan for a period after the plan terminates.
- Some plan beneficiaries may have concurrent coverage. For example, a Medicare and a Medicaid plan may be in effect for a beneficiary for the duration of coverage period. In this scenario health plans may need to exchange information about the beneficiary throughout the period of dual plan coverage to coordinate treatment.

It is a member's option to share their health information with their new health plan. When a member chooses to grant consent for a health plan to retrieve their health data from a prior health plan the proposed period of consent MAY be:

| Scenario  | Consent Start Date | Consent End Date |
|-----------|--------------------|------------------|
| Early Enrollment | Date of enrollment | 90 days after Plan Start Date |
| Immediate Enrollment | Date of enrollment | 90 days after Plan Start Date |
| Concurrent Plan Coverage | Date of enrollment | Plan Period End Date (typically 12 months from plan start date) |

In the case where a match is confirmed the receiving payer will:

- Utilize the consent record to evaluate the request from the requesting payer (Payer2) for data about the matched member. For example, is the old payer able to respond to a request for only non-sensitive data.
- Return a Unique Patient Identifier (Patient FHIR ID) in the $member-match Operation Response.

#### Consent Revocation

The following guidance is provided for a situation where a member wishes to revoke consent for a previously 
granted Payer-to-Payer exchange.

As part of Payer-to-Payer Exchange Consent is gathered by the New Payer.
Since the New Payer has the current relationship with the member it is proposed that the New Payer manages 
the Consent Revocation process. This would involve the New Payer cancelling any recurring request to the 
old payer for new information for the member.

This approach does not preclude the member contacting their old payer and issuing a consent directive to 
block the release of data to the new payer. However, this is anticipated to be a rare occurrence.

#### Consent Request Language

It is recommended that consistent language is used by Payers to present the information to a member when they 
are being asked to grant consent for a Payer-to-Payer exchange of their health information.

You [the Member] are:

- Instructing [New Payer] to retrieve your health information from [Old Payer]
- Instructing the Old Payer to release your health information to [New Payer]
- Requesting all information is to be retrieved, or sensitive data (such as mental health data) should be excluded from the retrieved health information.
- Granting consent for [New Payer] to request data from [Old Payer] for a period of up to 90 days after the activation of your health coverage with [New Payer]

Please note that:
- The scope of data sensitivity is determined by Federal and State regulations that apply in the state in which [Old Payer] operates.
- If [Old Payer] is unable to identify and exclude sensitive data and you have chosen to exclude sensitive data from the request then [Old Payer] will be unable to comply with your request.
- In the case where you have active coverage with both [Old Payer] and [New Payer] the end date for the Consent instruction will be the anticipated end date of the health coverage with [New Payer].

### Data Retrieval Methods

Once Health Plans have completed the Member Access stage of the Exchange the requesting 
Health Plan **SHALL** utilize the access token returned from the Member Access step to 
request/retrieve data using one of the following three methods:

1. Query all clinical resource individually
2. [$patient-everything](https://www.hl7.org/fhir/operation-patient-everything.html) operation
3. Bulk FHIR Asynchronous protocols.

Each of the above data retrieval methods **SHALL** support the retrieval of the profiles and resources identified in the table below.

| Profile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Resource           |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| [US Core Allergy Intolerance](https://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | AllergyIntolerance |
| [US Core CarePlan](https://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | CarePlan           |
| [US Core CareTeam](https://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | CareTeam           |
| [US Core Condition](https://hl7.org/fhir/us/core/StructureDefinition/us-core-condition)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Condition          |
| [PDex Device](https://hl7.org/fhir/us/davinci-pdex/STU1/StructureDefinition-pdex-device) <br/> [US Core ImplantableDevice](https://hl7.org/fhir/us/core/StructureDefinition/us-core-device)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Device             |
| [US Core DiagnosticReport for Laboratory Results Reporting](https://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab)<br/>[US Core DiagnosticReport for Report and Note Exchange](https://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | DiagnosticReport   |
| [US Core DocumentReference](https://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | DocumentReference  |
| [US Core Encounter](https://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Encounter          |
| [US Core Goal](https://hl7.org/fhir/us/core/StructureDefinition/us-core-goal)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Goal               |
| [US Core Immunization](https://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Immunization       |
| [US Core Location](https://hl7.org/fhir/us/core/StructureDefinition/us-core-location)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Location           |
| [US Core Medication](https://hl7.org/fhir/us/core/StructureDefinition/us-core-medication)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Medication         |
| [PDex MedicationDispense](https://build.fhir.org/ig/HL7/davinci-hrex/StructureDefinition-pdex-medicationdispense)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | MedicationDispense |
| [US Core MedicationRequest](https://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | MedicationRequest  |
| [US Core Laboratory Result Observation](https://hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab)<br/>[US Core Pediatric BMI for Age Observation](https://hl7.org/fhir/us/core/StructureDefinition/pediatric-bmi-for-age)<br/>[US Core Pediatric Head Occipital-frontal Circumference Observation](https://hl7.org/fhir/us/core/StructureDefinition/head-occipital-frontal-circumference-percentile)<br/>[US Core Pediatric Weight for Height Observation](https://hl7.org/fhir/us/core/StructureDefinition/pediatric-weight-for-height)<br/>[US Core Pulse Oximetry](https://hl7.org/fhir/us/core/StructureDefinition-us-core-pulse-oximetry)<br/>[US Core Smoking Status Observation](https://hl7.org/fhir/us/core/StructureDefinition-us-core-smokingstatus)<br/>[VitalSigns](https://hl7.org/fhir/StructureDefinition/vitalspanel) | Observation  |
| [US Core Organization](https://hl7.org/fhir/us/core/StructureDefinition/us-core-organization)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Organization |
| [US Core Patient](https://hl7.org/fhir/us/core/StructureDefinition/us-core-patient)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Patient      |
| [US Core Practitioner](https://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Practitioner |
| [US Core PractitionerRole](https://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | PractitionerRole  |
| [US Core Procedure](https://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)  | Procedure    |
| [HRex Coverage](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-coverage.html) | Coverage |
| [PDex Prior Authorization](StructureDefinition-pdex-priorauthorization.html) | Prior Authorization |
| [PDex Provenance](StructureDefinition-pdex-provenance.html)<br/>[US Core Provenance](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-provenance.html)  | Provenance   |

The CMS Prior Authorization Rule (CMS-0057) requires Claims and Encounter data to be exchanged with
Providers and Payers via the respective Provider Access API and Payer-to-Payer APIs, defined in this IG.
The Rule requires that a non-financial view of those claims and encounters are provided. This IG utilizes
the work of the [CARIN Consumer Directed Payer Data Exchange IG]({{site.data.fhir.ver.carinbb}}) which defines the following
non-financial profiles:

- [Inpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis.html)
- [Outpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis.html)
- [Professional NonClinician Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis.html)
- [Oral Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Oral-Basis.html)
- [Pharmacy Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-Basis.html)

### Query all clinical resources individually

Health Plans **SHALL** support search of a member's clinical data to each USCDI/US Core clinical resource, 
as identified in the table above. Using the search capability of each resource enables the _revInclude 
and _include parameters to be used to retrieve the associated Provenance and supporting records.

### $everything operation

Health Plans **SHALL** support the use of the $everything operation. The Patient/{id}/$everything 
operation is defined in the FHIR R4 specification here:
[https://www.hl7.org/fhir/operation-patient-everything.html](https://www.hl7.org/fhir/operation-patient-everything.html).

As noted in the previous section, $everything **SHALL** limit the data retrieved to that which the
requester is permitted to access. This might require an implementer to filter records at a more 
granular level than the resource.

The following resource/profiles relevant to the PDex IG are retrievable using the $everything operation:

Example of _type parameter:

    _type= AllergyIntolerance,CarePlan,CareTeam,Condition,Device,DiagnosticReport,DocumentReference,Encounter,
           Goal,Immunization,Medication,MedicationDispense,MedicationRequest,Observation,Patient,Procedure,Provenance

The server **SHOULD** filter the ExplanationOfBenefit resource to include only PDex Prior Authorization 
profiled records. e.g., ExplanationOfBenefit.use does not equal "claim". 

### Bulk FHIR Asynchronous protocols

    /Patient/$export

Payer-to-Payer Data Exchange **SHOULD** support the use of Bulk FHIR methods, as defined in the HL7 FHIR
[Bulk Data Access Implementation Guide](http://hl7.org/fhir/uv/bulkdata/STU2/). The
request/retrieval of data **SHOULD** use the [FHIR Bulk Data Patient Level
Export](http://hl7.org/fhir/uv/bulkdata/STU2/OperationDefinition-patient-export.html) and the[Bulk Data Export Operation Request Flow](http://hl7.org/fhir/uv/bulkdata/STU2/export.html#bulk-data-export-operation-request-flow).

The Patient Export Operation for Payer-to-Payer exchange should be constrained to the resources and
profiles that the requester is permitted to access, such as the profiles identified in the table in 
the [Data Retrieval Methods](payertopayerexchange.html#data-retrieval-methods) section of this page.

The _typeFilter parameter can be used to scope resources using search parameters to exclude resources 
that are not required, such as non-clinical resources.

### Constraining Data Based Upon Permissions of the Requestor

The FHIR Server **SHALL** constrain the data returned from the server to a requester based upon the access
permissions of the requester.

For example, if a requester queries for ExplanationOfBenefit resources but they are only allowed to see
Prior Authorization records, and not EOB Claims, the FHIR Server **SHALL** filter the data accordingly.

This Constraining condition may be required in implementations where multiple types of data are being
served up by a single FHIR Server. The condition is particularly relevant when implementing Operations
such as $everything or $export. See the sections below.

### Authorization and Trust Framework

#### Future Direction for Discovery and Registration

Future versions of this IG are expected to transition from the current discovery and registration process.  The
current process, outlined on this page, utilizes a git repository of mTLS endpoint bundles that are used to
create a secure mTLS connection. That connection is then used to access an OAuth2.0 Dynamic Client Registration (DCRP)
endpoint to register for a set of client credentials. Those credentials provide access to the $member-match operation.

A future workflow is likely to use the FAST National Directory to find other payers that are in a common trust
framework. The endpoint information for those payers would point to a Unified Data Access Profiles service,
as defined in the FHIR At Scale Taskforce (FAST)
[Security for Scalable Registration, Authentication, and Authorization IG](https://build.fhir.org/ig/HL7/fhir-udap-security-ig/). UDAP would be used to
request a client credential that can be used to perform a $member-match and subsequently to request an
OAuth2.0 token that is scoped to the member/patient returned from a successful match operation.

#### mTLS Endpoint Discovery

Payers need two capabilities in order to establish trusted connections with other Payers:

1. A Discovery or Directory Service to be able to find other endpoints
2. A Trust Framework in which both parties are members.

In the absence of a Trusted Exchange Framework and Common Agreement (TEFCA) or National Endpoint Directory
service for Payers an interim solution is required. For this purpose, a public git repository will be
established that will be used to store signed mTLS endpoint bundles.

Each Payer will create an mTLS bundle. The bundle will be signed by a Certificate Authority (CA) using
public/private keys. The Endpoint will also be "endorsed" by a Trust Framework Manager using a certificate.
The Trust Framework endorsement process is detailed below in the Trust Framework section of this page.

The mTLS Endpoint Bundle is profiled in this IG. It consists of an Endpoint And two Organization profiles:
One for the Health Plan and One for the Managing Organization that operates the endpoint.
These profiles use the National Directory (NDH) IG Profiles.

For Payers to establish a secure mTLS connection with another Payer there needs to be a discovery service.
In the absence of a Trusted Exchange Framework and Common Agreement (TEFCA) or National Endpoint Directory
service for Payers an interim solution is required. For this purpose, a public git repository will be
established that will be used to store signed mTLS endpoint bundles. A test version of that repository
has been established here: [https://github.com/HL7-DaVinci/pdex-payer-payer](https://github.com/HL7-DaVinci/pdex-payer-payer). The repository
includes some supporting tools and documentation relating to mTLS discovery.

Each Payer will create an mTLS bundle. The bundle will be signed by a Certificate Authority (CA) using p
ublic/private keys. The public key is included in the Endpoint record that is provided in the bundle.
A public key should also be provided by the Trust Framework that is overseeing the Payer-to-Payer exchange
process. The Associated Servers Extension will identify the PDex IG Base URI and the OAuth2.0 Dynamic
Client Registration Protocol Endpoint. The PDex Capability Statement can be retrieved from [BASE URI]/metadata.
The security section within the Capability Statement will define the SMART-on-FHIR endpoints for Access Tokens.
The Registration Endpoint will only be accessible via the mTLS connection established using the mTLS endpoint
information in the bundle.

The mTLS Endpoint Bundle is profiled in this IG. It consists of an Endpoint and two Organization profiles
(One for the Health Plan, the other for the Operating entity that manages the Endpoint). These profiles
use the National Directory (NDH) IG Profiles.

The profiles are:

- [mTLS Endpoint Bundle](StructureDefinition-mtls-bundle.html)
- [National Directory NDH Exchange Endpoint](https://build.fhir.org/ig/HL7/fhir-us-ndh/StructureDefinition-ndhEx-Endpoint.html)
- [National Directory NDH Base Organization](https://build.fhir.org/ig/HL7/fhir-us-ndh/StructureDefinition-ndh-Organization.html).

The profiles in the mTLS bundle are modeled after the profiles in the National Directory (NDH) IG. The
National Directory is not yet operational. Therefore, it is outside the scope of this IG to define search
methods into the National Directory. In the interim payers will need to download the Git repository and
perform searches against the bundles to identify other payers and extract the relevant data.

##### Trust Framework

A Trust Framework is a construct where the parties to the framework agree to a common set of operating rules.
A manager of the Trust Framework would be appointed to administer the framework: the Trust Manager. This would
involve the issuing and revocation of certificates that validate an organization's membership of the framework.

The Trust Manager responsibilities include:

- Obtain and manage a Signing Certificate from a Trusted CA.
- Manage submissions from Payers that includes their public identity certificate and completed Framework agreement. The Framework agreement confirms their participation in the Trust Framework and observation of the Trust Framework operating requirements.

The management of payer submissions involves the following steps:

1. Verifying the identity certificate.
2. Verifying the signature to the Framework agreement.
3. Signing the payer's public identity certificate  with a digital signature.
4. Returning the signed payer's public identity certificate and the public Trust Framework signing certificate to the payer.

Upon completion of the submission process the Payer creates the endpoint and includes the signed payer public
identity certificate and the public Trust Framework signing certificate into an Endpoint resource.
This is incorporated into a bundle that includes the Payer's organization record and the organization record
for the organization that manages the endpoint. Where the organization is both the payer and the managing
organization there should still be two Organization records created.

The completed bundle would be posted to a new branch of the public GitHub Repository.

The Trust Manager would be responsible for reviewing and merging bundles submitted via a new branch of the
GitHub repository into the main branch of the Repository.

Trust Framework members are responsible for refreshing their copy of the main branch of the GitHub repository
which would be used to refresh and update their list of mTLS and Authentication Endpoints for current
validated members of the Trust Framework.

#### OAuth2.0 Dynamic Client Registration

Once payers have setup a secure mTLS connection, the new Payer will query the Dynamic Client Registration Protocol
(DCRP) endpoint of the target (old) payer to obtain a client credential with scopes that enable queries to be
made to the $member-match operation endpoint.

### Request Access Token for Member Access

In step 3 of the Member-match process, the requesting Payer will have received a FHIR ID for the matched member
(the MemberMatch ID). This Id should be submitted to the Access Token Endpoint with a JWT where the subject Id
is the MemberMatch ID. The Authorization Server **SHOULD** use the Subject ID, confirms that consent for the
Requesting Payer to access the Matched Member is still valid and therefore issue an access token that is scoped
to the FHIR ID of the matched member, consequently bounding any subsequent FHIR API request to that specific
Patient FHIR ID.

### Scopes for Operations

[SMART App Launch STU2.1](http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch)
defines granular scopes for resources. Following the model proposed in the section on
[FHIR Resource Scope Syntax](https://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html#scopes-for-requesting-context-data)
the following scope is proposed to control access to the member-match  
Operations for Payer-to-Payer single-member exchange:

- http://hl7.org/fhir/us/davinci-hrex/OperationDefinition/member-match

This would be the scope to execute the *single-member-match* operation
for *payer-to-payer* exchange with any subsequent export being restricted
to the Patient *id(s)* that the user is authorized to access.

[Next Page - Payer-to-Payer Bulk Exchange](payertopayerbulkexchange.html)


---

// File: input/pagecontent/PdexDevice.md

[Previous Page - Coverage](coverage.html)

US Core supports the [US Core Implantable Device](http://hl7.org/fhir/us/core/StructureDefinition-us-core-implantable-device.html) resource. However,  payers may need to record information about other non-implantable devices that are used by their members. The [PDex Device](StructureDefinition-pdex-device.html) profile is used to record this type of information. 

In future versions of this IG there is a desire to ensure that all Device identification information is exchanged using the [PDex Device](StructureDefinition-pdex-device.html) or [US Core Implantable Device](http://hl7.org/fhir/us/core/StructureDefinition-us-core-implantable-device.html) resource.  

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the [PDex Device](StructureDefinition-pdex-device.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                         | Name              | Cardinality | Type                               |
|------------------------------------|-------------------|:-----------:|------------------------------------|
| Device.type                        |  type             |     1..1    | CodeableConcept                    |
| Device.patient                     |  patient          |     1..1    | Reference(US Core Patient Profile) |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

The PDex Device profile is available here: [StructureDefinition-pdex-device.html](StructureDefinition-pdex-device.html)

#### Example Device Resource

An example mapping of a device resource is shown below:

<pre>
{
  "resourceType" : "Device",
  "id" : "udi-1",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-device"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: udi-1</p><p><b>meta</b>: </p><h3>UdiCarriers</h3><table class=\"grid\"><tr><td>-</td><td><b>CarrierHRF</b></td></tr><tr><td>*</td><td>(01)09504000059118(17)141120(10)7654321D(21)10987654d321</td></tr></table><p><b>status</b>: active</p><p><b>type</b>: Coated femoral stem prosthesis, modular <span style=\"background: LightGoldenRodYellow\">(Details : {SNOMED CT code '468063009' = 'Coated femoral stem prosthesis, modular (physical object)', given as 'Coated femoral stem prosthesis, modular'})</span></p><p><b>patient</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p></div>"
  },
  "udiCarrier" : [
    {
      "carrierHRF" : "(01)09504000059118(17)141120(10)7654321D(21)10987654d321"
    }
  ],
  "status" : "active",
  "type" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "468063009",
        "display" : "Coated femoral stem prosthesis, modular"
      }
    ]
  },
  "patient" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  }
}
</pre>



[Next Page - US Core DiagnosticReport for Laboratory Results Reporting](USCoreDiagnosticReportforLaboratoryResultsReporting.html)


---

// File: input/pagecontent/PDexDownloads.md

[Previous Page - Other IG Artifacts](other-igs.html)

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy(compressed folder)](full-ig.zip)

A downloadable version of the core FHIR R4 specification is here:

- [Downloadable Core FHIR R4 Specification](http://hl7.org/fhir/R4/downloads.html)
- [Zipped version of FHIR R4 Specification](http://hl7.org/fhir/R4/fhir-spec.zip)

### Examples

All the examples that are used in this Implementation Guide available for download:

- [JSON(compressed folder)](examples.json.zip)
- [XML(compressed folder)](examples.xml.zip)

### Definitions

- [JSON Definitions (zip)](definitions.json.zip)
- [XML Definitions (zip)](definitions.xml.zip)
- [Turtle Definitions (zip)](definitions.ttl.zip)

### IG/package dependencies

The following dependencies are used in production of this guide:

{% include dependency-table-short.xhtml %}



### Globals table

{% include globals-table.xhtml %}

### Cross version analysis

{% include cross-version-analysis-inline.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}

### FHIR Validator

Link to current version of FHIR validator:

- [FHIR Validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar)

Validator Instructions for use:

[Validator Instructions](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)


<p><a href="toc.html">[Next Page - Table of Contents]</a></p>



---

// File: input/pagecontent/pdeximplementationactorsinteractionsdatapayloadsandmethods.md

---
title: PDex Implementation, Actors, Interactions, Data Payloads and Methods

---
[Previous Page - Security and Privacy](securityandprivacy.html)

{% include style_insert_table_blue.html %}

<div class="stu-note">

<b><i>The use of CDS Hooks to enable Providers to retrieve data from Payers has been superseded by the inclusion 
of the Provider Access Bulk API in the STU2.1 release of this IG. The .CDS Hooks with SMART-on-FHIR section
on this page is being considered for removal in the next version of this IG.</i></b>
</div>

This section defines the Actors, Exchange Interactions and Data Payloads covered by the PDex IG.

The Member Health History is represented as a series of FHIR Resources that are based on a superset 
of [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) or [US Core 6.1.0]({{site.data.fhir.ver.uscore6}}), HRex and PDex profiles. 
The content/payload of the Member Health History may be augmented by FHIR resources that are 
generated from other HL7 Da Vinci IG use cases, such as Coverage Requirements Determination(CRD) or Prior Authorization
Support (PAS).

### Actors

The following actors are recognized in the PDex IG:

- **Health Plan**: The Insurance entity, or Payer, who handles claims for services provided to their plan members. 
- **Member**: The health plan member / patient who is, or was, a member of a health plan.
- **Provider**: The practitioner or clinician, or their representative, that initiates a data access request to retrieve member data from a health plan.
- **Third-Party Application**: Health Plan Members / Patients have a right under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) to direct the information held by a covered entity, such as a hospital or Health Plan to a third party of their choosing.

There are different terms used for an individual or patient in the Health Plan industry. Terms such as subscriber or member may be used. A subscriber and a member are not necessarily equivalent. For example, the subscriber may be the primary family member on a plan that covers the entire family. Therefore, the term Member will be used throughout this guide to identify the individual subject of the "member health history".

### Exchange Interactions

The PDex IG is specifying three exchange interactions:
 
1. Providers and Health Plans exchanging information about a member where the provider has a current or pending treatment relationship.
2. Health Plans via a Member authorized exchange when a member has moved from enrollment in one health plan to another.
3. Health Plans and Third-Party Applications that a member has authorized to share their health information that is held by the health plan.

### Data Payloads

The PDex IG defines two types of data payload:

1. Member Clinical and Claims-derived History. Referred to in this IG as the "Member Health History"
2. Coverage (HealthPlan Membership data).

All resources and operations available via a FHIR API endpoint **SHALL** be declared in a FHIR CapabilityStatement.

See [Data Mapping](datamapping.html) for details of the Data Payloads and operations.

### Interaction Methods

The PDex IG is focused on provider, member, or plan directed exchange of a member's data. 

All exchanges in this IG are for an individual. Where one member has permission to access the information 
for another member of the health plan, they should provide appropriate credentials to enable the exchange 
for that individual. 

The PDex IG specifies three interaction methods. Their use depends upon the Actors involved and the Data 
Payloads being exchanged.

There are three potential interaction methods:
1. CDS Hooks with SMART on FHIR
2. OAuth 2.0 and FHIR API
3. Patient-everything-pdex via alternate secure transport.

This version of the IG adds new APIs that support the requirements of the CMS Prior Authorization Rule (CMS-0057).
These APIs are:

- [Provider Access API](provider-access-api.html).
- [Payer-to-Payer Bulk API](payertopayerbulkexchange.html)

Earlier versions of the PDex IG recommended the use of CDS Hooks to enable Provider Access to ember data. That
method has been superceded by the [Provider Access API](provider-access-api.html) that meets the requirements of
the CMS Prior Authorization Rule (CMS-0057).


#### CDS Hooks with SMART-on-FHIR

**Note: This section is being considered for removal in the next release of this IG.**

Clinical systems will use the specification and workflows defined by [CDS Hooks](https://cds-hooks.hl7.org/) to initiate Payer Data 
Exchange  with Health Plans. Implementers must be familiar with all aspects of this specification.

SMART-on-FHIR is expected to be used in conjunction with CDS Hooks in two principal ways:

1. When a new patient books an appointment
2. When a patient returns for an appointment after a significant period (for example, after wintering in a different region).

The CDS Hooks and SMART-on-FHIR application configuration is detailed in [CDS-Hooks](cds-hooks.html).

##### Ad-hoc PDex Member History Request

The specification of a SMART-on-FHIR App to initiate a CDS-Hook call to a Health Plan's FHIR API enables:

* The CDS Hook to be fired from an automated workflow based upon EMR events.
* The SMART-on-FHIR triggering app enables an on-demand call to the Health Plan to enable access to a Health Plan member's information.
* The Health Plan to implement one entry point for a request for Member Information, which may require the Health Plan to trigger the compilation of information or perform an initial patient match rather than providing access for a Provider to openly search their member records.

CDS Hooks provides a mechanism for providers/clinicians to request a medical history for their patient from the 
Health Plan as part of their regular workflow - when scheduling an appointment. However, sometimes clinicians 
may be interested in updating the patient's medical history without going through the appointment booking 
steps within their EMR. I.e., They don't want to actually create an appointment, they just want to ask the 
question "Has anything new happened to my patient at some other location?"

Sometimes clinicians want to check and update a patient's history, for example during a patient review, or 
responding to a question from a patient. One solution to this need is the use of a SMART on FHIR app 
that will invoke a CDS Hook. This is possible because many EMR systems provide support for SMART on FHIR. 
This use of SMART is distinct from the use of SMART in CDS Hooks. This isn't launching a SMART app based upon 
the contents of a returned card. Instead, it is using SMART to invoke a CDS Hook in place of the EMR. 
It is emulating the workflow trigger that would normally trigger a hook within an EMR workflow.

The SMART on FHIR CDS Hook trigger approach was pioneered by the [Da Vinci Coverage Requirements Discovery IG](http://hl7.org/fhir/us/davinci-crd/index.html) 
(CRD-IG). Developers interested in using this approach should refer to the CDS Hooks and SMART on FHIR sections of 
that IG for the latest guidance, examples and links to code samples. 

The PDex IG uses a similar approach to enable a CDS Hook. The CDS Hook used by PDex is:

- Appointment-book.

This IG also proposes the creation of a new CDS Hook for the interaction defined in this IG. This hook would be:

- Request-member-history.

An overview of the transaction flow is shown in figure 4-1:

![Figure 4-1: CDS-Hooks SMART-on-FHIR Transaction Flow](PDEX-SMART-Hook-SMART-InteractionMethods1.png){:height="auto" width="100%"}
**Figure 4-1: CDS-Hooks SMART-on-FHIR Transaction Flow
 
##### Hook Actions

When a Health Plan server responds to a CDS Hook, one of the possible actions is to allow the user to 
[invoke a SMART App](https://cds-hooks.hl7.org/1.0/#link). Support for this option by Health Plan systems **SHOULD** be provided. 
The SMART on FHIR app provided as a link from the returned CDS Hook **SHOULD** enable a clinician to 
review the available Health Plan's data for their patient, select the data they want to commit to their EMR 
system and upon confirming their selection, enable the selected data to be written to the clinician's EMR system.

The objective of this flow is to place the decision about the data being deposited into the EMR into the hands 
of the responsible organization and their providers. This does not prevent an organization from defining data 
selection criteria that filters Health Plan provided information and automatically importing records that 
meet their criteria. For the purposes of this IG and accompanying Reference Implementation the manual provider 
selection method was used to illustrate the record import capability.

The [Da Vinci Documentation Templates and Rules Implementation Guide]({{site.data.fhir.ver.davinci-dtr}}) (DTR-IG) 
provides additional guidance and expectations on the use of CDS Hook cards to launch SMART Apps and how payer-provided 
SMART Apps should function.

All requesters (e.g., EHRs) **SHOULD** store provenance associated with any data exchanged as part of this IG if 
it is committed to their system.

#### OAuth2.0 and FHIR API for Member-Mediated Exchange

This section outlines the approach for a member to mediate the sharing of data between health plans, or with an app of 
their choice using the Patient Access API and the SMART-on-FHIR App Launch methods. If a Payer, as the new health plan, 
wished to offer members the ability to retrieve data from prior health plans they would need to provide an application 
that could be registered with other health plans to enable members to authenticate with their prior health plan 
and authorize sharing with their new health plan. The application would then retrieve data that is shared via the 
Patient Access API and could load that data into the member's record.

In the STU2.1 version of the Payer Data Exchange (PDex) IG additional bulk exchange methods are defined that enable 
data exchange to occur between health plans ([Payer-to-Payer Bulk Exchange](payertopayerbulkexchange.html)), at the 
direction of the member, or to enable exchange with a Provider ([Provider Access API](provider-access-api.html)) 
unless a member has actively opted-out of data sharing with Providers. 

The well-defined mechanism for enabling Member/Patient authorization to share information with an application using 
the FHIR API is to use OAuth2.0 as the Authorization protocol. The member **SHALL** authenticate using 
credentials they have been issued by the Health Plan. This is typically the member's customer portal credentials.

The member will typically select a third-party application, service or new (target) Health Plan with whom 
they wish to share data. The member should review and agree with the Terms of Service and a Privacy Policy 
that details how the application or service will use the member's data from the (source) Health Plan. 
While authenticated to the application or service, the member **MAY** connect to the (source) Health Plan's 
authorization server. After authenticating to the (source) Health Plan's authorization server, the Member 
**SHALL** be presented with an Authorization screen that enables them to approve the sharing of information with 
their intended application, service or (target) Health Plan. For this authorization to occur the Application, 
service or (target) Health Plan will require OAuth 2.0 client application credentials that are issued by the 
(source) Health Plan in order to register an authorization request.

The Authorization process, in accordance with applicable privacy policy, **SHALL** provide a mechanism to 
support current regulations allowing members the right to decide what information is permitted to be exchanged.  
Examples of member authorized restrictions/permissions are 42CFR, State and Federal requirements for sensitive data. 

After successfully authorizing an application an Access Token and Optional Refresh Token **SHALL** be 
returned to the requesting application. 

The scopes of the access token **SHALL** be restricted to the authorizing Member's information and the scopes approved.

Any subsequent Access Token issued based on the Refresh Token **SHALL** be restricted (at least) to the same 
restrictions.

The requesting application **SHALL** use the access token to access the Health Plan's secure FHIR API to download 
the information that the Application is allowed to access. 

The OAuth2.0 Member-authorized exchange is detailed in [Section: Member-Authorized OAuth2.0 Exchange](member-authorizedoauth2exchange.html).

An overview of the OAuth2.0 Flow using the FHIR API is shown below for both Health Plan exchange and Third-Party 
Application Exchange:

![Figure 4-2: Payer-to-Payer Exchange with Member Interaction](Payer-Payer-with-member-InteractionMethods2.png){:height="auto" width="100%"}
**Figure 4-2: Payer-to-Payer Exchange with Member Interaction

![Figure 4-3: Payer to Application Interaction](Payer-App-InteractionMethods3.png){:height="auto" width="100%"}
**Figure 4-3: Payer to Application Interaction

#### Payer-to-Payer Data Exchange

The Exchange of all of a member's clinical data, as scoped by USCDI version 1 or version 3 and represented in FHIR by US Core 3.1.1 or US Core 6.1.0, is a requirement of the CMS Prior Authorization Rule (CMS-0057).

The CMS Prior Authorization Rule (CMS-0057) requires Payers to make available Prior Authorization decisions and 
updates via the Patient, Provider and Payer-to-Payer Access APIs. The Rule also requires the exchange of the 
supporting clinical data, used in arriving at the Prior Authorization decision, (based on US Core 3.1.1 and, 
in the future, US Core 6.1.0) via those same APIs.

For Patient and Provider Access APIs, the requirement is to exchange structured clinical data used in arriving 
at the Prior Authorization Decision.

For the Payer-to-Payer API, the rule also requires any Unstructured data used in arriving at the Prior 
Authorization decision to be exchanged.

Payer-to-Payer exchange can be accomplished by two methods: 

1. [Payer-to-Payer Exchange for a single member](payertopayerexchange.html)
2. [Payer-to-Payer Bulk Exchange for multiple members](payertopayerbulkexchange.html)

Clients wishing to retrieve data **SHOULD** consult the Data Provider's Server Capability Statement to 
determine which methods are made available by the data holder. 

The exchange of Unstructured data does not require a Payer to translate the unstructured content into structured
FHIR resources such as Observations or Conditions, etc.

Payers **SHOULD**: 
- base 64 encode as an attachment (e.g. images, digitized clinical notes or fax content) and create a binary record, as per the [FHIR R4 Binary resource](http://hl7.org/fhir/R4/binary.html)
- Create a DocumentReference using [US Core 3.1.1 Document Reference]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-documentreference.html) or [US Core 6.1.0 Document Reference]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-documentreference.html)

Payers are required to exchange Unstructured data with other Payers via the Payer-to-Payer API.

Payers **MAY** choose to exchange unstructured data with Patients and Providers, via their respective APIs, 
using the same content provided to Payers. i,e. Attaching as a binary resource and referenced in a DocumentReference.


[Next Page - Handling Data Provenance](handlingdataprovenance.html)


---

// File: input/pagecontent/PDexMedicationDispense.md

[Previous Page - US Core Medication](USCoreMedication.html)

The  [Da Vinci PDex MedicationDispense profile](StructureDefinition-pdex-medicationdispense.html)  **SHALL** be used to record a member's prescription drug claims when sharing data using
the [US Core 3.1.1 Implementation Guide]({{site.data.fhir.ver.uscore3}}). When using the  [US Core 6.1.0 Implementation Guide]({{site.data.fhir.ver.uscore6}}) 
to exchange data the [US Core MedicationDispense profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medicationdispense.html) should be used.


{% include style_insert_table_blue.html %}

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the [Da Vinci PDex MedicationDispense](StructureDefinition-pdex-medicationdispense.html) profile are:

| R4 Element                                     | Name            | Cardinality | Type                                                                                              |
|------------------------------------------------|-----------------|:-----------:|---------------------------------------------------------------------------------------------------|
| MedicationDispense.status                      |  status         |     1..1    | code                                                                                              |
| MedicationDispense.medication[x]               |  medication[x]  |     1..1    |                                                                                                   |
| MedicationDispense.subject                     |  subject        |     1..1    | Reference(US Core Patient )                                                                       |
| MedicationDispense.performer.actor             |  actor          |     1..1    | Reference(Practitioner \| PractitionerRole \| Organization \| Patient \| Device \| RelatedPerson) |
| MedicationDispense.substitution.wasSubstituted |  wasSubstituted |     1..1    | boolean                                                                                           |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>



#### Health Plan Mapping Assistance

A collaboration of Health Plan experts has performed an evaluation of claims information and developed a mapping of  data for Members to the [PDex MedicationDispense profile](StructureDefinition-pdex-medicationdispense.html). This is shown below as an assistance to implementers:

| PDex Element                              | Must Support | Cardinality | CARIN-BB Element                                                                       | CPCDS Element Mapping or Implementer Note                                                                                                                                                                 |
|-------------------------------------------|:------------:|:-----------:|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - MedicationDispense.meta.lastUpdated     |              |     0..1    | ExplanationOfBenefit.meta.lastUpdated                                                  | [{"163":"EOB Last Updated Date"}]                                                                                                                                                                         |
| MedicationDispense.identifier             |              |     0..*    | ExplanationOfBenefit.Identifier                                                        | [{"35":"RX service reference number"}]. Note: Assign Payer System URI for Unique Claim Id in MedicationDispense.identifier.system. SetClaim Id in MedicationDispense.identifier.value                     |
| MedicationDispense.status                 |       S      |     1..1    | ExplanationOfBenefit.status                                                            | [{"140":"Claim processing status code<br>"}] Note: Default to "completed"                                                                                                                               |
| MedicationDispense.medication[x]          |              |     1..1    |                                                                                        | . Note: Enter prescription information in sub-elements below                                                                                                                                               |
| -  MedicationDispense.medicationReference |              |             | ExplanationOfBenefit.supportingInfo.code, ExplanationOfBenefit.detail.productOrService | [{"79":"NCPDP field # 408-D8 (Dispensed As Written (DAW)/Product Selection Code) https://ushik.ahrq.gov/ViewItemDetails?itemKey=200387000&system=sdo"}, {"38, 78":"National drug code<br>Compound Code"}] |
| MedicationDispense.subject                |       S      |     1..1    | ExplanationOfBenefit.patient                                                           | [{"Ref (1), Ref (109)":"Member id, Patient account number"}, {"Ref (191)":"Unique Member ID"}, {"Ref (110)":"Medical record number"}]                                                                    |
| -  MedicationDispense.performer.function  |              |     0..1    | ExplanationOfBenefit.careTeam.role                                                     | [{"165":"Care Team Role (Value pcp\|Prescribing)"}]                                                                                                                                                       |
| -  MedicationDispense.performer.actor     |              |     1..1    | ExplanationOfBenefit.careTeam.provider                                                 | [{"Ref(96,122)":"Provider NPIs"}, {"Ref(169,172)":"Provider Names"}, {"94, 167":"Claum billing provider NPI, Claim billing provider name"}]                                                                |
| MedicationDispense.quantity               |              |     0..1    | ExplanationOfBenefit.item.quantity                                                     | [{""39,151"":"Quantity dispensed \| Quantity Qualifier Code"}]                                                                                                                                             |
| MedicationDispense.daysSupply             |              |     0..1    | ExplanationOfBenefit.supportingInfo.valueQuantity                                      | [{"77":"Days supply"}]                                                                                                                                                                                    |
| MedicationDispense.whenHandedOver         |              |     0..1    | ExplanationOfBenefit.item.servicedDate                                                 | [{"90":"Service (from) date"}]                                                                                                                                                                            |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example MedicationDispense Resource

An example mapping of a MedicationDispense resource is shown here for a dispense for Over-The-Counter medication - Tylenol PM (NDC code) - on hold with as needed dosage with a condition, a dose Range and an Event History:

[MedicationDispense Example](MedicationDispense-1000001.html)



[Next Page - US Core MedicationRequest](USCoreMedicationRequest.html)


---

// File: input/pagecontent/PDexPriorAuthorization.md

[Previous Page - US Core PractitionerRole](USCorePractitionerRole.html)

{% include style_insert_table_blue.html %}

The PDex Prior Authorization profile has been created to enable Payers to communicate prior authorization decisions and changes to the status of a prior authorization to members, providers and other payers.

Prior Authorizations can be identified by the ExplanationOfBenefit.use = preauthorization.

Go to [PDex Prior Authorization profile](StructureDefinition-pdex-priorauthorization.html)

[Next Page - US Core Procedure](USCoreProcedure.html)


---

// File: input/pagecontent/PDexProvenance.md

[Previous Page - US Core Procedure](USCoreProcedure.html)

When a Health Plan forwards information as a FHIR Resource it **SHOULD** create related 
Provenance record(s) to reflect the original source. 

A Provenance resource **SHOULD** be provided with each member-related resource provided by the Health Plan's FHIR API. 

This **SHOULD** be used to:
- identify the source of the information. 
- whether the data came via a clinical record, or a claim record. 


The PDex-Provenance resource is based on the [US Core Provenance Profile](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-provenance.html) and is documented here: [StructureDefinition-pdex-provenance.html](StructureDefinition-pdex-provenance.html)

PDex Provenance adds an extension that uses the ProvenanceSourceFrom ValueSet to the entity element. In the PDex Provenance Profile the extension is included in the Provenance.entity base element.

Provenance.recorded value **SHOULD** be the date/time when the data is received by the payer.

The purpose of the extension is to identify the source format that the data in the provenance.target resource is taken from.


The [Pdex Provenance](StructureDefinition-pdex-provenance.html) record **SHOULD** be populated with the following essential fields (Must Support or Cardinality greater than 0..*) as follows:

{% include style_insert_table_blue.html %}

| R4 Element                                                | Name                         | Cardinality | Type                                                                    |
|-----------------------------------------------------------|------------------------------|:-----------:|-------------------------------------------------------------------------|
| Provenance.target                                         |  target                      |     1..*    | Reference(Resource)                                                     |
| Provenance.recorded                                       |  recorded                    |     1..1    | instant                                                                 |
| Provenance.agent                                          |  agent                       |     1..*    | (Slice Definition)                                                      |
| Provenance.agent:All Slices.type                          |  type                        |     1..1    | CodeableConcept                                                         |
| Provenance.agent:All Slices.who                           |  who                         |     1..1    | Reference(US Core Organization Profile \| US Core Practitioner Profile) |
| Provenance.agent:All Slices.onBehalfOf                    |  onBehalfOf                  |     0..1    | Reference(US Core Organization Profile)                                 |
| Provenance.agent:ProvenanceAuthor                         |  agent:ProvenanceAuthor      |     0..*    | BackboneElement                                                         |
| Provenance.agent:ProvenanceAuthor.type                    |  type                        |     1..1    | CodeableConcept                                                         |
| Provenance.agent:ProvenanceAuthor.type.coding             |  coding                      |     1..*    | Coding                                                                  |
| Provenance.agent:ProvenanceAuthor.type.coding.system      |  system                      |     1..1    | uri                                                                     |
| Provenance.agent:ProvenanceAuthor.type.coding.code        |  code                        |     1..1    | code                                                                    |
| Provenance.agent:ProvenanceAuthor.who                     |  who                         |     1..1    | Reference(US Core Organization Profile \| US Core Practitioner Profile) |
| Provenance.agent:ProvenanceTransmitter                    |  agent:ProvenanceTransmitter |     0..1    | BackboneElement                                                         |
| Provenance.agent:ProvenanceTransmitter.type               |  type                        |     1..1    | CodeableConcept                                                         |
| Provenance.agent:ProvenanceTransmitter.type.coding        |  coding                      |     1..*    | Coding                                                                  |
| Provenance.agent:ProvenanceTransmitter.type.coding.system |  system                      |     1..1    | uri                                                                     |
| Provenance.agent:ProvenanceTransmitter.type.coding.code   |  code                        |     1..1    | code                                                                    |
| Provenance.agent:ProvenanceTransmitter.who                |  who                         |     1..1    | Reference(US Core Organization Profile \| US Core Practitioner Profile) |
| Provenance.entity.ProvenanceSourceFrom.url                |  url                         |     1..1    | uri                                                                     |
| Provenance.entity.role                                    |  role                        |     1..1    | code                                                                    |
| Provenance.entity.what                                    |  what                        |     1..1    | Reference(Resource) In general this will be a text string indicating the source is defined by the role code                                                     |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

### Example Provenance Records

Four examples are provided to deal with four different scenarios:

1. Payer is transmitting a bundle [ExampleProvenanceTransmitter](Provenance-1000001.html)
2. Organization as source of a record [ExampleProvenanceAuthor](Provenance-1000002.html)
3. Solo Practitioner as source of a record [ExampleProvenanceSoloPractitioner](Provenance-1000003.html)
4. Payer as source of a record [ExampleProvenancePayerSource](Provenance-1000004.html)

#### Payer Receives a bundle from another Payer

If the payer is storing the content of the bundle rather than retaining the bundle intact then the content received
SHOULD be written to a FHIR server and the records assigned new FHIR IDs with references being re-written to maintain 
referential integrity.

Provenance records received need to have their target references re-written to maintain the link to the received
records. If the bundle include a Transmitter Provenance record the receiving payer would re-write the target 
reference(s) in the Transmitter record to link to the records received in the bundle that were written to the 
receiving payer's FHIR server.

Example bundles showing how records are updated as they pass from Payer to Payer are shown below. In these examples we
are only showing encounter records, however any US Core clinical record could be part of the transmitted bundle.

The first bundle is requested by Payer 2 from Payer 1.  Payer 1 also includes a Transmitter Provenance record for 
the content of the bundle.

[Payer 1 Bundle requested by Payer 2](Bundle-1000000-1.json.html)

When a member moves from Payer 2 to Payer 3 the bundle comprises a Patient Record from Payer 2. Encounter and 
Provenance records received from Payer 1. The Transmitter record from Payer 1. The Encounter record received from
a Provider for the member while covered by Payer 2. A supporting Provenance record for the encounter is included. 
A Transmitter Provenance record is also generated by Payer 2 to cover the content of the bundle.

[Payer 2 Bundle requested by Payer 3](Bundle-1000000-2.json.html)

When the member moves from Payer 2 to Payer 3 the bundle received from Payer 2 includes a Patient record written 
by Payer 2. The Encounter and Provenance records from Payer 1 plus the Encounter and Provenance records generated
while the member was covered by Payer 2. A re-written Transmitter record is included from Payer 1 and a Transmitter
record generated for the bundle by Payer 2 is also included.

[Payer 3 bundle requestewd by Payer 4](Bundle-1000000-3.json.html)

#### Payer Converts a clinical record from a non-FHIR format

The Payer creates the Provenance record as follows:

    target.reference = Reference of the converted record
    recorded = Date original record was received
    agent.type = Author
    agent.who = US Core Organization record for the originating organization
    extension.sourceFormat = "ccda" to identify that the record was transformed from a CCDA document

#### Payer Converts a practitioner's clinical record from a non-FHIR format

The Payer creates the Provenance record as follows:

    target.reference = Reference of the converted record
    recorded = Date original record was received
    agent.type = Author
    agent.who = US Core Practitioner record when the provider is NOT associated with an organization
    extension.sourceFormat = "hl7v2" to identify that the record was transformed from a HL7 v2 message

#### Payer creates a clinical record from internal sources

The Payer creates the Provenance record as follows:

    target.reference = Reference of the converted record
    recorded = Date original record was received
    agent.type = Source
    agent.who = Payer's US Core Organization record
    extension.sourceFormat = "custom" to identify that the record was transformed from a custom data format such as a CSV file.

The Health Plan **SHALL** accept and maintain Provenance information associated with information received from contributing entities. 
The Health Plan **SHALL** add Provenance record(s) as necessary to document relevant actions taken as the current custodian of the information. 
Provenance information **SHALL** be available for any information requested by an external entity as part of exchanges conformant to this implementation guide. 

This guide shall define extensions to the provenance value sets as required to document the provenance of the information exchange.

#### Clinical Information without Provenance

The Health Plan **SHOULD** create a Provenance Record documenting the source of the records, the identity of the health plan and the action taken to become the custodian of the data.

The updated Provenance record **SHOULD** be passed on to any downstream entity that requests Provenance information for the records they request.   

#### FHIR Resource from prior Health Plan

The Health Plan **SHOULD** store the Provenance information and maintain the correlation or links to the records the Provenance Record is documenting.

The Health Plan **SHOULD** update the Provenance records to add information covering the identity of the health plan and the action taken to become the custodian of the data.

The updated Provenance record **SHOULD** be passed on to any downstream entity requesting the associated records.   

#### Claim Information from Provider

The Health Plan **SHOULD** create a Provenance Record documenting the source of the records, the identity of the health plan and the action taken to transform the data to FHIR Clinical Resources.

The updated Provenance record **SHOULD** be passed on to any downstream entity requesting the associated records.   

### Example Provenance Record

An example Author Provenance record appears below:

<pre>
{
  "resourceType" : "Provenance",
  "id" : "1000002",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2020-07-10T16:26:23.217+00:00",
    "profile" : [
      "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-target-provenance"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p></div>"
  },
  "extension" : [
    {
      "url" : "sourceFormat",
      "valueCodeableConcept" : {
        "coding" : [
          {
            "system" : "http://hl7.org/fhir/us/davinci-pdex/ValueSet/ProvenancePayerSourceFormatVS",
            "code" : "hl7ccda"
          }
        ]
      }
    }
  ],
  "target" : [
    {
      "reference" : "encounter/2000003"
    }
  ],
  "recorded" : "2020-07-10T16:26:23.217+00:00",
  "agent" : [
    {
      "type" : {
        "coding" : [
          {
            "system" : "http://terminology.hl7.org/CodeSystem/provenanceagenttype",
            "code" : "author"
          }
        ]
      },
      "who" : {
        "reference" : "Organization/Payer1"
      }
    }
  ]
}

</pre>

### Returning Provenance Records

Requesting a provenance resource is accomplished by adding the "_revinclude=Provenance:target" parameter to a search query. 

For servers that support the "_revinclude" parameter this will return Provenance records in a bundle along with 
the resources returned by the search query. 


[Next Page - US Core Provenance](USCoreProvenance.html)


---

// File: input/pagecontent/provider-access-api.md

[Previous Page - Handling Data Provenance](handlingdataprovenance.html)

<div class="stu-note">

<b><i>Provider Access API bulk data guidance in this version of the IG is draft only. 
It has not appeared on the ballot but has been tested at Connectathons. It is included to support 
the requirements of the CMS prior Authorization Rule (CMS-0057).
The bulk data transfer API is based upon published guidance in the Da Vinci Member Attribution (ATR) IG.
</i></b>
</div>

## Provider Access API

In December 2022, CMS released the [Advancing Interoperability and Improving Prior Authorization Processes Proposed Rule CMS-0057-P](https://www.cms.gov/newsroom/fact-sheets/advancing-interoperability-and-improving-prior-authorization-processes-proposed-rule-cms-0057-p-fact). 
This rule was finalized in February 2024.  
One of the requirements of the rule is for Impacted Payers to implement a Provider Access API. 
This is an API that conforms to the [HL7 FHIR Bulk Data API specification](http://hl7.org/fhir/uv/bulkdata/STU2/).
The purpose of the Provider Access API is to enable Providers to query a Payer API for information 
about the members of the health plan where they have a current, or upcoming treatment relationship.
The API will enable a provider to ask a Payer "What do you know about my Patients?"

The Payer Data Exchange Implementation Guide supports the Provider Access API by
utilizing the [$Davinci-data-export-operation](http://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html) operation in the [Da Vinci Member Attribution Implementation Guide](http://hl7.org/fhir/us/davinci-atr/STU2/).

This IG is not overly prescriptive in how to construct and manage Member Attribution lists.
Health plans are responsible for managing Member Attribution Lists according to their own business rules
for determining whether a Provider and Member have an existing, or impending treatment relationship.

This IG recognizes that the healthcare industry is rapidly evolving methods, such as TEFCA, to enable the
secure exchange of information between Providers and Payers. Incorporating prescriptive definitions for
connecting, registering and authorizing access to the Provider Access API risks complicating the adoption
of solutions that will enable secure exchange of data, at scale.

### How does Provider Access Work?

The diagram below illustrates how health plans may construct and maintain their Member Attribution lists 
for Organizations, Locations and Providers. It also illustrates how a Provider Representative, such as 
an EMR, can query the health plan for the PDexProviderGroup resources they are permitted to see and then
use the Group/{id} endpoint for those records to request Member clinical, prior authorization and 
non-financial claims and encounter data.

The typical use case is expected to be one where an EMR retrieves data from a health plan for one or more 
providers using automated service functions. The retrieving system or service, such as an EMR, 
is presumed to have implemented Role-based access to ensure that only authenticated and authorized 
personnel, or systems, have access to the retrieved data.

It is recommended that, at a minimum, health plans create Member Attribution Lists using the NPI data for 
the Rendering Provider. Health plans **MAY** choose to construct alternative or additional Attribution
Lists that cover more than one provider, for example by creating an Attribution list for all providers
at a specific facility.

<div style="height=auto;width=90%;">
{% include provider-access-api.svg %}
</div>

### Member Opt-out

A health plan member is entitled to opt-out of data sharing via the Provider Access API. PDex defines a consent profile 
that enables a member to deny sharing via the Provider Access API. A member should also be able to update their preference 
to revoke a previous denial. 

Health Plans **SHALL** implement the pdex-provider-consent to enable a member to express their sharing preference.

The [PDex Server Capability Statement](CapabilityStatement-pdex-server.html) enables the Consent record to be written to the Patient Access API.

See the [PDex Provider Consent here](StructureDefinition-pdex-provider-consent.html)

### Attribution List driven

The Provider Access API is centered around Attribution lists that enable a Provider/Provider Organization or 
Facility to retrieve data for health plan members that are assigned to that Provider. The data retrieval uses a 
FHIR Bulk data export operation to retrieve the requested data.

Members **SHALL** have the ability to opt-out of data sharing with providers.

The Health Plan is responsible for managing Attribution Lists. Attribution Lists **SHOULD** be 
discrete lists at the Organization + Facility + Provider level. This level of granularity is needed
to account for Providers working across different organizations, or at different facilities that
may use different EMRs. A health plan **MAY** adopt their own methodology for managing and maintaining 
provider attribution lists. Health plans are encouraged, for transparency purposes, to share their methodology 
for managing Member Attribution.

Health plans:
- **MAY** use claims data as a source to identify existing treatment relationships. 
- **MAY** utilize their own rules for determining the attribution of members to Providers.
- **SHOULD** use the [Coverage Requirements Discovery IG's](https://hl7.org/fhir/us/davinci-crd/STU2.1-preview/hooks.html) appointment-book and encounter-start CDS Hooks as a means to determine impending treatment relationships.

Attribution lists **SHALL** be searchable via a secure RESTful API. Access to the Group resource to READ 
attribution lists should be scoped to the appropriate Organization, Facility, Provider or their 
authorized representative that is acting on the behalf of the Provider.

The [Da Vinci Data Export Operation](https://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html) in the [Member Attribution IG](https://hl7.org/fhir/us/davinci-atr/STU2/) supports the Bulk FHIR API specification.
The operation uses the Group resource. For the PDex Provider Access API the following capabilities
**SHOULD** be supported:

- Search for Group.
- Get Group record.
- Request all information for members in the Group.
- Request information for a subset of members in the Group.
- Request a limited set of information for a subset of members in the Group.

This combination of requests should cover all provider data requests, such as:

- Send all data for this set of patients that are new to my practice.
- Send new data since I last requested for this set of patients.
- Send just the lab results for this set of patients since this date.

Access **SHALL** be controlled using client credentials that are compliant with SMART-On-FHIR.
Access **SHOULD** be restricted to Providers with a contractual relationship with a Payer.

The [$davinci-data-export operations](https://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html) **SHALL** be submitted using a HTTP POST.
The HTTP Header **SHALL** include:

    Prefer: respond-async


### Attribution List

The Payer **SHALL** be responsible for managing and maintaining the attribution list that assigns 
Members to Providers. The payer **SHALL** take account of members that have chosen to Opt-out of 
sharing data with providers. Those opted-out members **SHALL** be omitted from the Provider 
Attribution list. The Payer **MAY** choose to maintain a separate Group resource for a Provider 
that identities the Opted-out Members that would otherwise have been Attributed to the Provider. 
If a Payer maintains an Opted-out Group resource it is the Payers responsibility
to ensure that a Provider is unable to download data about those opted-out members using a bulk 
export operation. The [Da Vinci Member Attribution (ATR) IG](https://hl7.org/fhir/us/davinci-atr/STU2/) 
provides transactions to manage the Group resource through Add, change and delete member actions.

The [AttributionListStatus extension](https://hl7.org/fhir/us/davinci-atr/STU2/StructureDefinition-ext-attributionListStatus.html) can have one of three values:
- draft: Used when building a list and it is not considered ready for use.
- final: Used for lists that may be governed by contractual considerations and should bot be changed.
- open: Use for lists that can be amended. For example when a provider is still accepting patients. 

A provider **MAY** have more than one list. For example, a list marked as Final related to a Value-based care contract and an "open" list where the Provider is still accepting patients under a different care arrangement. 

The [PDexProviderGroup](StructureDefinition-pdex-provider-group.html) profile **SHALL** be used to record the
members attributed to a Provider, Provider Group or Organization. PDexProviderGroup is based on the 
[ATRGroup](http://hl7.org/fhir/us/davinci-atr/STU2/StructureDefinition-atr-group.html) Profile 
from the [Da Vinci Member Attribution (ATR) 2.0.0 IG](http://hl7.org/fhir/us/davinci-atr/STU2/). 

The profile adds an extension at the root level. This is used to, optionally, record the number 
of potentially attributed members that instead used their right to opt-out of sharing data with 
providers. By recording this quantity it **MAY** help providers reconcile their attribution lists 
with those managed by the Payer, The extension is:

- [MembersOptedOut](StructureDefinition-base-ext-members-opted-out.html)

The [PDexProviderGroup](StructureDefinition-pdex-provider-group.html) Profile adds three extensions to the member element. 
These are used to track the data retrieved for a member by the provider. This enables sophisticated
providers to fine tune their requests for data. For example, Retrieving the group resource a 
Provider could create a Provider Access data request that repeated the parameters supplied to
[lastResources](StructureDefinition-base-ext-last-types.html) and [lastFilters](StructureDefinition-base-ext-last-typefilter.html) and compile a list of Patients with the 
same [lastTransmitted](StructureDefinition-base-ext-last-transmission.html) date. The Provider Access API is flexible enough that a Provider 
could submit a request for the data for a single Patient, repeating the previously used parameters. 
A Provider could also compile a request that omitted resources that were previously asked for,
avoiding data duplication. Providing these member-level extensions is meant as an aid to Providers 
and Payers to enable granular data sharing. Providers, or Payers wishing to take advantage of these
elements **SHOULD** consider implementing their own independent data tracking capabilities to 
understand what data has been provided to a Provider for specific members.

The member-level extensions are primarily intended for instances where a Provider does not want to
download *ALL information for ALL attributed members.*

The member-level extensions are:

- [lastTransmitted](StructureDefinition-base-ext-last-transmission.html)
- [lastResources](StructureDefinition-base-ext-last-types.html)
- [lastFilters](StructureDefinition-base-ext-last-typefilter.html)

These extensions **SHALL** be updated by the [$davinci-data-export](https://hl7.org/fhir/us/davinci-atr/STU2/OperationDefinition-davinci-data-export.html) PDex Use Case Operation.

### Searching for Attributed Groups

A Provider Representative may need to manage multiple attribution lists. The FHIR Group resource 
supports searching on characteristic. To enable searching the 
[PDexMemberMatchGroup Profile](StructureDefinition-pdex-member-match-group.html)
sets the characteristic element to include the "pdexprovidergroup" code, the identifier of the 
provider in (characteristic.valueReference), sets characteristic.exclude to false and 
characteristic.period.start to the date attribution list creation or update.

Implementers **SHALL** support the standard search parameters for group that are specified in the base
Group resource in FHIR R4 specification: [Group Search Parameters](StructureDefinition-pdex-member-match-group.html).


### Da Vinci Data Export Payload

The Provider Access is meant to enable in-network providers to retrieve the information they want about one or more patients
that are attributed to them via an existing , or impending treatment relationship. Under the requirements of the CMS
Prior Authorization Rule (CMS-0057) the data available through the API **SHOULD** include:

- US Core Clinical data ([US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) or [US Core 6.1]({{site.data.fhir.ver.uscore6}})
- [PDex Prior Authorization Profile](StructureDefinition-pdex-priorauthorization.html)
- [CARIN Consumer Directed Payer Data Exchange IG Non-Financial (Basis) Profiles ]({{site.data.fhir.ver.carinbb}}), as detailed below.

The CMS Prior Authorization Rule (CMS-0057) requires Claims and Encounter data to be exchanged with
Providers and Payers via the respective Provider Access API and Payer-to-Payer APIs, defined in this IG.
The Rule requires that a non-financial view of those claims and encounters are provided. This IG utilizes
the work of the [CARIN Consumer Directed Payer Data Exchange IG]({{site.data.fhir.ver.carinbb}}) which defines the following
non-financial profiles:

- [Inpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis.html)
- [Outpatient Institutional Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis.html)
- [Professional NonClinician Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis.html)
- [Oral Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Oral-Basis.html)
- [Pharmacy Basis Profile]({{site.data.fhir.ver.carinbb}}/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-Basis.html)

### Da Vinci Data Export Operation - PDex Provider Use Case

Provider Representative:

- **SHALL** be issued with OAuth2.0/SMART-On-FHIR client credentials that enable access to /Group/{id}. Where {id} is the PDexProviderGroup(s) attributed to the Organization, Facility and Provider they are representing.
- **SHALL** be permitted to SEARCH /Group. The search function and the bundle contents returned **SHALL** be restricted to the {ids} that are associated with the Provider Representative's account. 
- **MAY** be associated with more than one attribution group list.
- **SHALL** be permitted to GET /Group/{id} for any Attribution Group list they are associated with.
- **SHALL** be permitted to call $davinci-data-export operation for any /Group/{id} they are associated with.

The $davinci-data-export operation enables a Provider Representative to perform granular requests 
for data. 

Data can be constrained by:

- Patient subset
- Date range
- Resource Type
- Resource filter (valid search parameters for a resource)

Data available via the API includes:

- Clinical resources (US Core and PDex)
- Prior Authorizations and supporting structured documentation
- Non-Financial claims and encounters (CARIN Blue Button)

The Data Export operation **SHALL** check the consent status for each member at the time 
of execution. This is necessary to identify members that may have changed their opt-out 
status for sharing with providers.

#### Da Vinci Data Export Parameter Handling

##### patient

If the patient parameter is not provided data **SHALL** be retrieved for all members 
in the Group. If the patient parameter is provided the operation **SHALL** ignore references 
to patients that are invalid, or not a member of the group.

##### exportType

This is an optional parameter in the Da Vinci Data Export Operation.
The exportType parameter **SHALL** have one of the following values:

-  hl7.fhir.us.davinci-pdex#provider-delta
-  hl7.fhir.us.davinci-pdex#provider-download
-  hl7.fhir.us.davinci-pdex#provider-snapshot

The hl7.fhir.us.davinci-pdex#provider-delta option **SHALL** be used when the provider is
retrieving new, or updated data that will be stored as part of the patient record.

The hl7.fhir.us.davinci-pdex#provider-download option **SHALL** be used when the provider is
retrieving data that will be stored as part of the patient record.

The hl7.fhir.us.davinci-pdex#provider-snapshot value **SHOULD** be used when a provider
wants to download data for viewing.

From the Data Provider's perspective the hl7.fhir.us.davinci-pdex#provider-download exportType
parameter will require the Data Provider/Payer to track the latest download
date/time for the Patients that the provider requests data for.  These values **SHALL**
be updated in an extension associated with the Patient for which a download was requested.

##### _since

Resources in the Patient Access and Provider Access API can extend back to January 1, 2016. 
The _since parameter **SHOULD** be used for resource requests when the full history is not 
required. It is expected that providers **MAY** first request data for members without 
limiting the request using the _since parameter. Subsequent requests **MAY** then use _since
to limit data to information that is new.

##### _until

The _until parameter **MAY** be used less frequently. It is most likely to be used with the  
hl7.fhir.us.davinci-pdex#provider-snapshot exportType to retrieve member data for a specific 
period.

##### _type

The _type parameter **MAY** be used to restrict the resources retrieved by the Provider. This 
enables providers to only retrieve the resource types they are interested in seeing. If this 
parameter is not used all available resources **SHALL** be returned by the Payer, subject to
the constraints applied by other input parameters.

When _type is used the export operation **SHALL** record the content of the _type parameter in the
[lastResources](StructureDefinition-base-ext-last-types.html) element for each Member for which data is retrieved. The
[lastTransmitted](StructureDefinition-base-ext-last-transmission.html) **SHALL** be recorded with either the Date/Time of the Export Transaction
or the value of the _until parameter, if it is earlier.

##### _typeFilter

The _typeFilter parameter **MAY** be used to further restrict the resources retrieved by the 
Provider. For example, to only retrieve Observations of a certain type. The _typeFilter, if 
used, **SHALL** comprise one, or more, valid FHIR search queries for the respective resource 
being filtered.

When _typeFilter is used the export operation **SHALL** record the content of the _typeFilter 
parameter in the [lastFilters](StructureDefinition-base-ext-last-typefilter.html) element for each Member for which data is retrieved. The
[lastTransmitted](StructureDefinition-base-ext-last-transmission.html) **SHALL** be recorded with either the Date/Time of the Export Transaction
or the value of the _until parameter, if it is earlier.

NOTE: When constructing search queries to incorporate into a _typeFilter, Search parameters
supported by the relevant profiles from the PDex, US Core or CARIN Blue Button IGs **SHALL**
be followed.


### Access and Refresh Tokens

Implementers **SHOULD** implement OAuth 2.0 access management in accordance with the SMART Backend Services 
Authorization Profile. When SMART Backend Services Authorization is used, Bulk Data Status Request and Bulk Data 
Output File Requests with requiresAccessToken=true **SHALL** be protected the same way the Bulk Data Kick-off Request, 
including an access token with scopes that cover all resources being exported. A server **MAY** 
additionally restrict Bulk Data Status Request and Bulk Data Output File Requests by limiting 
them to the client that originated the export. Health plans **SHALL** limit the data returned to 
only those FHIR resources for which the client is authorized. 

Clients **SHALL** require OAuth client credentials to enable secure access to read and search the Group 
resources and perform Bulk export operations. Access Tokens **SHALL** be required to access the Group
resources and and the Bulk export operation. Access and Refresh Tokens **SHOULD** be issued to support 
the client requesting and subsequently retrieving the bulk data response to their request.

Registering of a client application or service to perform the bulk Payer-to-Payer
Exchange should be registered in accordance with the approach defined in the
[SMART App Launch IG](https://hl7.org/fhir/smart-app-launch/client-confidential-asymmetric.html#registering-a-client-communicating-public-keys).
That IG also encourages the use of the OAuth2.0 Dynamic Client Registration Protocol
(DCRP). An alternative approach that is closely aligned with the DCRP protocol is
to use the B2B protocols detailed in the 
[HL7 Security for Scalable Registration, Authentication, and Authorization](http://hl7.org/fhir/us/udap-security/STU1/) IG.

If the protocols detailed in the above UDAP Security IG's [Business to Business](https://hl7.org/fhir/us/udap-security/b2b.html)) section are used, 
it is recommended that the subject_id in the B2B Authorization Extension Object (Key Name: "hl7-b2b") 
contain the NPI of the Provider for which Attributed Patient data is being requested. For instances 
where health plan generated attribution lists cover more than a single provider, the subject_id could 
be the FHIR Id of the Group being requested. The use of the Group FHIR ID as the subject_id is based 
upon the assumption that health plans have access controls in place to restrict the requestor to only 
having access to Group records they are authorized to access.

### Scopes for Operations

[SMART App Launch STU2.1](http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch) 
defines granular scopes for resources. Following the model proposed in the section on 
[FHIR Resource Scope Syntax](https://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html#scopes-for-requesting-context-data)
the following scopes are proposed to control access to the Da Vinci Data Export Operation for Provider Access:

- system.Group.u?code=http://hl7.org/fhir/us/davinci-pdex/ValueSet/PDexMultiMemberMatchResultVS|pdexprovidergroup

This would be the scope to execute the *davinci-data-export* operation 
with it being restricted to the Group *id(s)* that the user is authorized to access.




[Next Page - Payer-to-Payer Exchange (Single Member)](payertopayerexchange.html)


---

// File: input/pagecontent/securityandprivacy.md

[Previous Page - Introduction](introduction.html)

The PDex IG adopts the Security and Privacy approach detailed in the [Health Record Exchange (HRex) IG]({{site.data.fhir.ver.hrex}}/security.html).
Implementers should also take note of the guidance in the FHIR R4 specification on the [HL7 core security page](http://hl7.org/fhir/R4/security.html).
The Security and Privacy section of the HRex IG addresses:

- [Statutes, Regulations, and Guiding Principles](https://hl7.org/fhir/us/davinci-hrex/2024Sep/security.html#statutes-regulations-and-guiding-principles)
- [FHIR Clinical Safety, Security and Implementation Guidance](https://hl7.org/fhir/us/davinci-hrex/2024Sep/security.html#fhir-clinical-safety-security-and-implementation-guidance)
- [Security/Privacy Related Technologies Including Explicit Consent and Security Labels](https://hl7.org/fhir/us/davinci-hrex/2024Sep/security.html#security-privacy-related-technologies-including-explicit-consent)
- [Exchange Security](https://hl7.org/fhir/us/davinci-hrex/2024Sep/security.html#exchange-security)
- [Additionally Protected Information](https://hl7.org/fhir/us/davinci-hrex/2024Sep/security.html#additionally-protected-information)
- [Security Contexts for Da Vinci IGs](https://hl7.org/fhir/us/davinci-hrex/2024Sep/security.html#additionally-protected-information)


The following page ,[FHIR Access Permissions](FHIRAccessPermissions.html), is provided for guidance 
only and addresses an approach to control access to sub-sets of Patient or Group records by external 
parties.

[Next Page - FHIR Access Permissions](FHIRAccessPermissions.html)


---

// File: input/pagecontent/USCoreAllergyIntolerance.md

[Previous Page - Data Mapping](datamapping.html)

Where a Health Plan has information about a member's allergies the  US Core AllergyIntolerance profile
 **SHALL** be used to record them.

The US Core AllergyIntolerance profile is found here:

- [US Core 3.1.1 AllergyIntolerance]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-allergyintolerance.html)
- [US Core 6.1.0 AllergyIntolerance]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-allergyintolerance.html)


The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the US Core AllergyIntolerance resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                | Name                | Cardinality | Type                               |
|-------------------------------------------|---------------------|:-----------:|------------------------------------|
| AllergyIntolerance.clinicalStatus         |  clinicalStatus     |     0..1    | CodeableConcept                    |
| AllergyIntolerance.verificationStatus     |  verificationStatus |     0..1    | CodeableConcept                    |
| AllergyIntolerance.code                   |  code               |     1..1    | CodeableConcept                    |
| AllergyIntolerance.patient                |  patient            |     1..1    | Reference(US Core Patient Profile) |
| AllergyIntolerance.reaction               |  reaction           |     0..*    | BackboneElement                    |
| AllergyIntolerance.reaction.manifestation |  manifestation      |     1..*    | CodeableConcept                    |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example AllergyIntolerance Resource

An example mapping of an AllergyIntolerance resource is shown below:
<pre>
{
  "resourceType" : "AllergyIntolerance",
  "id" : "example",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>meta</b>: </p><p><b>clinicalStatus</b>: Active <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: medication</p><p><b>criticality</b>: high</p><p><b>code</b>: sulfonamide antibacterial <span style=\"background: LightGoldenRodYellow\">(Details : {SNOMED CT code '387406002' = 'Sulfonamide (substance)', given as 'Sulfonamide (substance)'})</span></p><p><b>patient</b>: <a href=\"Patient-example.html\">Amy V. Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><h3>Reactions</h3><table class=\"grid\"><tr><td>-</td><td><b>Manifestation</b></td><td><b>Severity</b></td></tr><tr><td>*</td><td>skin rash <span style=\"background: LightGoldenRodYellow\">(Details : {SNOMED CT code '271807003' = 'Eruption of skin (disorder)', given as 'skin rash'})</span></td><td>mild</td></tr></table></div>"
  },
  "clinicalStatus" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        "code" : "active"
      }
    ]
  },
  "verificationStatus" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        "code" : "confirmed"
      }
    ]
  },
  "category" : [
    "medication"
  ],
  "criticality" : "high",
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "387406002",
        "display" : "Sulfonamide (substance)"
      }
    ],
    "text" : "sulfonamide antibacterial"
  },
  "patient" : {
    "reference" : "Patient/example",
    "display" : "Amy V. Shaw"
  },
  "reaction" : [
    {
      "manifestation" : [
        {
          "coding" : [
            {
              "system" : "http://snomed.info/sct",
              "code" : "271807003",
              "display" : "skin rash"
            }
          ],
          "text" : "skin rash"
        }
      ],
      "severity" : "mild"
    }
  ]
}
</pre>



[Next Page - US Core CarePlan](USCoreCarePlan.html)


---

// File: input/pagecontent/USCoreCarePlan.md

[Previous Page - US Core AllergyIntolerance](USCoreAllergyIntolerance.html)

Where a Health Plan has access to Care Plan information for a member, they **SHALL** make the information available using the [US Core CarePlan](http://hl7.org/fhir/us/core/StructureDefinition-us-core-careplan.html) resource.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the 
[US Core 3.1.1 CarePlan]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-careplan.html) or
[US Core 6.1.0 CarePlan]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-careplan.html)resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                 | Name                 | Cardinality | Type                               |
|--------------------------------------------|----------------------|:-----------:|------------------------------------|
| CarePlan.text                              |  text                |     1..1    | Narrative                          |
| CarePlan.text.status                       |  status              |     1..1    | code                               |
| CarePlan.text.div                          |  div                 |     1..1    | xhtml                              |
| CarePlan.status                            |  status              |     1..1    | code                               |
| CarePlan.intent                            |  intent              |     1..1    | code                               |
| CarePlan.category                          |  category            |     1..*    | (Slice Definition)                 |
| CarePlan.category:AssessPlan               |  category:AssessPlan |     1..1    | CodeableConcept                    |
| CarePlan.category:AssessPlan.coding        |  coding              |     1..*    | Coding                             |
| CarePlan.category:AssessPlan.coding.system |  system              |     1..1    | uri                                |
| CarePlan.category:AssessPlan.coding.code   |  code                |     1..1    | code                               |
| CarePlan.subject                           |  subject             |     1..1    | Reference(US Core Patient Profile) |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example CarePlan Resource

An example mapping of a CarePlan for a colonoscopy is shown below:

<pre>
{
  "resourceType" : "CarePlan",
  "id" : "colonoscopy",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan"
    ]
  },
  "text" : {
    "status" : "additional",
				"div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">      
				            <strong>Assessment</strong>
				            <ol><li>Recurrent GI bleed of unknown etiology; hypotension perhaps secondary to this but as likely secondary to polypharmacy.</li>
										       <li>Acute on chronic anemia secondary to #1.</li>
													 <li>Azotemia, acute renal failure with volume loss secondary to #1.</li>
													 <li>Hyperkalemia secondary to #3 and on ACE and K+ supplement.</li>
													 <li>Other chronic diagnoses as noted above, currently stable.</li>
										</ol>
										<table>
										      <thead>
													    <tr>
															     <th>Planned Activity</th>
																	 <th>Planned Date</th>
														 </tr>
												 </thead>
												<tbody>
												    <tr>
														     <td>Colonoscopy</td>
																 <td>April 21, 2000</td>
													</tr>
										 </tbody>
							</table>
							</div>"
  },
  "status" : "active",
  "intent" : "order",
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
          "code" : "assess-plan"
        }
      ]
    }
  ],
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  }
}
</pre>



[Next Page - US Core CareTeam](USCoreCareTeam.html)


---

// File: input/pagecontent/USCoreCareTeam.md

[Previous Page - US Core CarePlan](USCoreCarePlan.html)

Where a Health Plan has access to Information about the CareTeam for a member they **SHALL** make the information available using the
[US Core 3.1.1 CareTeam]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-careteam.html) or
[US Core 6.1.0 CareTeam]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-careteam.html)resource are:


The essential fields (Must Support or Cardinality greater than 0..*) to be provided are:

| R4 Element           | Name         | Cardinality | Type                                                                                               |
|----------------------|--------------|:-----------:|----------------------------------------------------------------------------------------------------|
| CareTeam.status      |  status      |     0..1    | code                                                                                               |
| CareTeam.subject     |  subject     |     1..1    | Reference(US Core Patient Profile)                                                                 |
| CareTeam.participant |  participant |     1..*    | BackboneElement                                                                                    |
| CareTeam.role        |  role        |     1..1    | CodeableConcept                                                                                    |
| CareTeam.member      |  member      |     1..1    | Reference(US Core Patient Profile \| US Core Practitioner Profile \| US Core Organization Profile) |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

Claims information typically represents a particular event, such as a procedure or encounter. The CareTeam resource is intended to represent the parties involved in supporting a subject/patient. Where a claim represents an Episode of Care it may be appropriate to record the parties involved in the claim as members of the CareTeam involved in that EpisodeOfCare. For discrete procedures or encounters it **MAY** not be appropriate to create a CareTeam record from the claims information.

The essential fields to be provided in the CareTeam resource from the CPCDS file, where appropriate, are:

{% include style_insert_table_blue.html %}

| US Core Element                   | Must Support | Cardinality | CARIN-BB Element                           | CPCDS Element Mapping or Implementer Note                                                                                                                                                                                                                                               |
|-----------------------------------|--------------|-------------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CareTeam.status                   |       S      |     0..1    |                                            | . Note: When generated from claim set to [ active]                                                                                                                                                                                                                                      |
| CareTeam.subject                  |       S      |     1..1    | ExplanationOfBenefit.patient               | [{"Ref (1)":"Member id"}]                                                                                                                                                                                                                                                                |
| CareTeam.encounter                |              |     0..1    |                                            | . Note: Reference Encounter generated from claim/EOB                                                                                                                                                                                                                                    |
| CareTeam.period                   |              |     0..1    | ExplanationOfBenefit.item.servicedPeriod \  ExplanationOfBenefit.item.servicedDate | [{"Ref (177, 178)":"Statement from date, Statement through date<br>"}, {"Ref (90,119)":"Service From date, Service to date"}]                                                                                                                                                            |
|  - CareTeam.participant.role      |       S      |     1..1    | ExplanationOfBenefit.careTeam.role         | [{"165":"Care Team Role"}]                                                                                                                                                                                                                                                              |
|  - CareTeam.participant.member    |       S      |     1..1    | ExplanationOfBenefit.careTeam.provider     | [{"Ref (93, 96, 98, 99, 173)":"Provider attending, PCP, operating, <br/>referring and supervising NPIs"}, {"Ref (166, 169, 182, 171, 174)":"Provider <br/>attending, PCP, operating, referring and supervising names"},<br/>{"Ref (94, 167)":"Claim Billing Provider NPI, <br/>Claim Billing Provider Name"}] |





<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example CareTeam Resource

An example mapping of a CareTeam is shown below:

<pre>
{
  "resourceType" : "CareTeam",
  "id" : "example",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>meta</b>: </p><p><b>status</b>: active</p><p><b>name</b>: US-Core example CareTeam</p><p><b>subject</b>: <a href=\"Patient-example.html\">Amy V. Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><blockquote><p><b>participant</b></p><p><b>role</b>: Allopathic &amp;amp; Osteopathic Physicians:Internal Medicine:Cardiovascular Disease <span style=\"background: LightGoldenRodYellow\">(Details : {http://nucc.org/provider-taxonomy code '207RC0000X' = 'Cardiovascular Disease', given as 'Allopathic &amp;amp; Osteopathic Physicians:Internal Medicine:Cardiovascular Disease'})</span></p><p><b>member</b>: <a href=\"Practitioner-practitioner-1.html\">Ronald Bone, MD. Generated Summary: id: practitioner-1; 9941339108, 25456; Ronald Bone </a></p></blockquote><blockquote><p><b>participant</b></p><p><b>role</b>: Allopathic &amp;amp; Osteopathic Physicians:General Practice <span style=\"background: LightGoldenRodYellow\">(Details : {http://nucc.org/provider-taxonomy code '208D00000X' = 'General Practice', given as 'Allopathic &amp;amp; Osteopathic Physicians:General Practice'})</span></p><p><b>member</b>: <a href=\"Practitioner-practitioner-2.html\">Kathy Fielding, MD. Generated Summary: id: practitioner-2; 1245319599, 456789; Fielding Kathy </a></p></blockquote><blockquote><p><b>participant</b></p><p><b>role</b>: Patient (person) <span style=\"background: LightGoldenRodYellow\">(Details : {SNOMED CT code '116154003' = 'Patient', given as 'Patient (person)'})</span></p><p><b>member</b>: <a href=\"Patient-example.html\">Amy V. Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p></blockquote></div>"
  },
  "status" : "active",
  "name" : "US-Core example CareTeam",
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy V. Shaw"
  },
  "participant" : [
    {
      "role" : [
        {
          "coding" : [
            {
              "system" : "http://nucc.org/provider-taxonomy",
              "code" : "207RC0000X",
              "display" : "Allopathic &amp; Osteopathic Physicians:Internal Medicine:Cardiovascular Disease"
            }
          ]
        }
      ],
      "member" : {
        "reference" : "Practitioner/practitioner-1",
        "display" : "Ronald Bone, MD"
      }
    },
    {
      "role" : [
        {
          "coding" : [
            {
              "system" : "http://nucc.org/provider-taxonomy",
              "code" : "208D00000X",
              "display" : "Allopathic &amp; Osteopathic Physicians:General Practice"
            }
          ]
        }
      ],
      "member" : {
        "reference" : "Practitioner/practitioner-2",
        "display" : "Kathy Fielding, MD"
      }
    },
    {
      "role" : [
        {
          "coding" : [
            {
              "system" : "http://snomed.info/sct",
              "code" : "116154003",
              "display" : "Patient (person)"
            }
          ]
        }
      ],
      "member" : {
        "reference" : "Patient/example",
        "display" : "Amy V. Shaw"
      }
    }
  ]
}
</pre>



[Next Page - US Core Condition](USCoreCondition.html)


---

// File: input/pagecontent/USCoreCondition.md

[Previous Page - US Core CareTeam](USCoreCareTeam.html)

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 Condition]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-condition.html) or
[US Core 6.1.0 Condition Encounter Diagnosis]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-condition-encounter-diagnosis.html) or
[US Core 6.1.0 Condition Problems and Health Concerns]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-condition-problems-health-concerns.html)
resources are:

{% include style_insert_table_blue.html %}

| R4 Element                   | Name                | Cardinality | Type                               |
|------------------------------|---------------------|:-----------:|------------------------------------|
| Condition.clinicalStatus     |  clinicalStatus     |     0..1    | CodeableConcept                    |
| Condition.verificationStatus |  verificationStatus |     0..1    | CodeableConcept                    |
| Condition.category           |  category           |     1..*    | CodeableConcept                    |
| Condition.code               |  code               |     1..1    | CodeableConcept                    |
| Condition.subject            |  subject            |     1..1    | Reference(US Core Patient Profile) |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

The essential fields to be provided in the Condition resource from the CPCDS file are:

| US Core Element               | Must Support | Cardinality | CARIN-BB Element                         | CPCDS Element Mapping or Implementer Note                                                                                                      |
|-------------------------------|:------------:|:-----------:|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Condition.clinicalStatus      |       S      |     0..1    |                                          | . Note: active \| recurrence \| relapse \| inactive \| remission \| resolved                                                                   |
| Condition.verificationStatus  |       S      |     0..1    |                                          | . Note: active \| recurrence \| relapse \| inactive \| remission \| resolved                                                                   |
| Condition.category            |       S      |     1..*    |                                          | . Note: Based on Diagnosis from claim pick appropriate condition category from: [problem-list-item \| encounter-diagnosis \| health-concern]     |
| Condition.code                |       S      |     1..1    | ExplanationOfBenefit.diagnosis.diagnosis | [{"6, 7, 8, 21, 22, 23, 30":"Diagnosis Code"}]                                                                                                                   |
| Condition.subject             |       S      |     1..1    | ExplanationOfBenefit.patient             | [{"Ref (1)":"Member id"}]                                                                                                                       |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example Condition Resource

An example mapping of a problem using the Condition is shown below:

<pre>
{
  "resourceType" : "Condition",
  "id" : "example",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>meta</b>: </p><p><b>clinicalStatus</b>: Active <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active', given as 'Active'})</span></p><p><b>verificationStatus</b>: Confirmed <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed', given as 'Confirmed'})</span></p><p><b>category</b>: Problem <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item', given as 'Problem List Item'})</span></p><p><b>code</b>: Single liveborn, born in hospital <span style=\"background: LightGoldenRodYellow\">(Details : {SNOMED CT code '442311008' = 'Liveborn born in hospital', given as 'Liveborn born in hospital'})</span></p><p><b>subject</b>: <a href=\"Patient-example.html\">Amy V. Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><p><b>onset</b>: Aug 10, 2016, 12:00:00 AM</p></div>"
  },
  "clinicalStatus" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code" : "active",
        "display" : "Active"
      }
    ],
    "text" : "Active"
  },
  "verificationStatus" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code" : "confirmed",
        "display" : "Confirmed"
      }
    ],
    "text" : "Confirmed"
  },
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://terminology.hl7.org/CodeSystem/condition-category",
          "code" : "problem-list-item",
          "display" : "Problem List Item"
        }
      ],
      "text" : "Problem"
    }
  ],
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "442311008",
        "display" : "Liveborn born in hospital"
      }
    ],
    "text" : "Single liveborn, born in hospital"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy V. Shaw"
  },
  "onsetDateTime" : "2016-08-10"
}
</pre>



[Next Page - Consent](consent.html)


---

// File: input/pagecontent/USCoreDiagnosticReportforLaboratoryResultsReporting.md

[Previous Page - PDex Device](PdexDevice.html)

Where a Health Plan has access to Laboratory Results and other diagnostic information, they **SHALL** make the information available using the [US Core DiagnosticReport for Laboratory Results Reporting](http://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-lab.html) resource.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the US Core DiagnosticReport for Laboratory Results Reporting resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                              | Name                      | Cardinality | Type                                                                    |
|---------------------------------------------------------|---------------------------|:-----------:|-------------------------------------------------------------------------|
| DiagnosticReport.status                                 |  status                   |     1..1    | code                                                                    |
| DiagnosticReport.category                               |  category                 |     1..*    | (Slice Definition)                                                      |
| DiagnosticReport.category:LaboratorySlice               |  category:LaboratorySlice |     1..1    | CodeableConcept                                                         |
| DiagnosticReport.category:LaboratorySlice.coding        |  coding                   |     1..*    | Coding                                                                  |
| DiagnosticReport.category:LaboratorySlice.coding.system |  system                   |     1..1    | uri                                                                     |
| DiagnosticReport.category:LaboratorySlice.coding.code   |  code                     |     1..1    | code                                                                    |
| DiagnosticReport.code                                   |  code                     |     1..1    | CodeableConcept                                                         |
| DiagnosticReport.subject                                |  subject                  |     1..1    | Reference(US Core Patient Profile)                                      |
| DiagnosticReport.effective[x]                           |  effective[x]             |     1..1    |                                                                         |
| DiagnosticReport.issued                                 |  issued                   |     1..1    | instant                                                                 |
| DiagnosticReport.performer                              |  performer                |     0..*    | Reference(US Core Practitioner Profile \| US Core Organization Profile) |
| DiagnosticReport.result                                 |  result                   |     0..*    | Reference(US Core Laboratory Result Observation Profile)                |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### HL7 V2 Mapping to Diagnostic Report

| R4 Hierarchical Name                      | R4 Name           | Cardinality | Type                                                                                                                       | HL7 V2 Source |
|-------------------------------------------|-------------------|-------------|----------------------------------------------------------------------------------------------------------------------------|---------------|
| DiagnosticReport.basedOn                  |  basedOn          | 0..*        | Reference(CarePlan \| DeviceRequest \| ImmunizationRecommendation \| MedicationRequest \| NutritionOrder\| ServiceRequest) | ORC           |
| DiagnosticReport.status                   |  status           | 1..1        | code                                                                                                                       | OBX-11        |
| DiagnosticReport.code                     |  code             | 1..1        | CodeableConcept                                                                                                            | OBX-3         |
| DiagnosticReport.subject                  |  subject          | 1..1        | Reference(US Core Patient Profile)                                                                                         | PID-3         |
| DiagnosticReport.focus                    |  focus            | 0..*        | Reference(Resource)                                                                                                        | OBX-3         |
| DiagnosticReport.encounter                |  encounter        | 0..1        | Reference(Encounter)                                                                                                       | PV1           |
| DiagnosticReport.effective[x]             |  effective[x]     | 0..1        | dateTime, Period                                                                                                           | OBX-14        |
| DiagnosticReport.issued                   |  issued           | 0..1        | instant                                                                                                                    | OBR-22        |
| DiagnosticReport.performer                |  performer        | 0..*        | Reference(Practitioner \| PractitionerRole \| Organization \| CareTeam \| Patient \| RelatedPerson)                        | OBX-15        |
| DiagnosticReport.value[x]                 |  value[x]         | 0..1        | Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period                     | OBX-5         |
| DiagnosticReport.dataAbsentReason         |  dataAbsentReason | 0..1        | CodeableConcept                                                                                                            | N/A           |
| DiagnosticReport.interpretation           |  interpretation   | 0..*        | CodeableConcept                                                                                                            | OBX-8         |
| DiagnosticReport.note                     |  note             | 0..*        | Annotation                                                                                                                 | NTE           |
| DiagnosticReport.bodySite                 |  bodySite         | 0..1        | CodeableConcept                                                                                                            | OBX-20        |
| DiagnosticReport.method                   |  method           | 0..1        | CodeableConcept                                                                                                            | OBX-17        |
| DiagnosticReport.specimen                 |  specimen         | 0..1        | Reference(Specimen)                                                                                                        | SPM           |
| DiagnosticReport.device                   |  device           | 0..1        | Reference(Device \| DeviceMetric)                                                                                          | OBX-17        |
| DiagnosticReport.referenceRange           |  referenceRange   | 0..*        | BackboneElement                                                                                                            | OBX-7         |
| DiagnosticReport.referenceRange.extension |  extension        | 0..*        | Extension                                                                                                                  | OBX-7         |
| DiagnosticReport.referenceRange.low       |  low              | 0..1        | SimpleQuantity                                                                                                             | OBX-7         |
| DiagnosticReport.referenceRange.high      |  high             | 0..1        | SimpleQuantity                                                                                                             | OBX-7         |
| DiagnosticReport.referenceRange.type      |  type             | 0..1        | CodeableConcept                                                                                                            | OBX-10        |
| DiagnosticReport.referenceRange.appliesTo |  appliesTo        | 0..*        | CodeableConcept                                                                                                            | OBX-10        |
| DiagnosticReport.referenceRange.text      |  text             | 0..1        | string                                                                                                                     | OBX-7         |

#### C-CDA Mapping to Diagnostic Report

| R4 Hierarchical Name                      | R4 Name            | Cardinality | Type                                                                                                                       | CCDA                                                                                |
|-------------------------------------------|--------------------|:-----------:|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| DiagnosticReport.text                     |  text              | 0..1        | Narrative                                                                                                                  | Act.text (?)                                                                        |
| DiagnosticReport.contained                |  contained         | 0..*        | Resource                                                                                                                   | N/A                                                                                 |
| DiagnosticReport.extension                |  extension         | 0..*        | Extension                                                                                                                  | N/A                                                                                 |
| DiagnosticReport.modifierExtension        |  modifierExtension | 0..*        | Extension                                                                                                                  | N/A                                                                                 |
| DiagnosticReport.identifier               |  identifier        | 0..*        | Identifier                                                                                                                 | id                                                                                  |
| DiagnosticReport.basedOn                  |  basedOn           | 0..*        | Reference(CarePlan \| DeviceRequest \| ImmunizationRecommendation \| MedicationRequest \| NutritionOrder\| ServiceRequest) | .outboundRelationship[typeCode=FLFS].target                                         |
| DiagnosticReport.category                 |  category          | 1..*        | CodeableConcept                                                                                                            | .outboundRelationship[typeCode="COMP].target[classCode="LIST", moodCode="EVN"].code |
| DiagnosticReport.code                     |  code              | 1..1        | CodeableConcept                                                                                                            | code                                                                                |
| DiagnosticReport.subject                  |  subject           | 1..1        | Reference(US Core Patient Profile)                                                                                         | participation[typeCode=SBJ]                                                         |
| DiagnosticReport.performer                |  performer         | 0..*        | Reference(Practitioner \| PractitionerRole \| Organization \| CareTeam \| Patient \| RelatedPerson)                        | participation[typeCode=PRF]                                                         |
| DiagnosticReport.value[x]                 |  value[x]          | 0..1        | Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period                     | value                                                                               |
| DiagnosticReport.dataAbsentReason         |  dataAbsentReason  | 0..1        | CodeableConcept                                                                                                            | value.nullFlavor                                                                    |
| DiagnosticReport.interpretation           |  interpretation    | 0..*        | CodeableConcept                                                                                                            | interpretationCode                                                                  |
| DiagnosticReport.method                   |  method            | 0..1        | CodeableConcept                                                                                                            | methodCode                                                                          |
| DiagnosticReport.specimen                 |  specimen          | 0..1        | Reference(Specimen)                                                                                                        | participation[typparticipation[typeCode=DEV]eCode=SPC].specimen                     |
| DiagnosticReport.device                   |  device            | 0..1        | Reference(Device \| DeviceMetric)                                                                                          | participation[typeCode=DEV]                                                         |
| DiagnosticReport.referenceRange           |  referenceRange    | 0..*        | BackboneElement                                                                                                            | outboundRelationship[typeCode=REFV]/target[classCode=OBS, moodCode=EVN]             |
| DiagnosticReport.referenceRange.low       |  low               | 0..1        | SimpleQuantity                                                                                                             | value:IVL_PQ.low                                                                    |
| DiagnosticReport.referenceRange.high      |  high              | 0..1        | SimpleQuantity                                                                                                             | value:IVL_PQ.high                                                                   |
| DiagnosticReport.referenceRange.type      |  type              | 0..1        | CodeableConcept                                                                                                            | interpretationCode                                                                  |
| DiagnosticReport.referenceRange.appliesTo |  appliesTo         | 0..*        | CodeableConcept                                                                                                            | N/A (?)                                                                             |
| DiagnosticReport.referenceRange.age       |  age               | 0..1        | Range                                                                                                                      | outboundRelationship[typeCode=PRCN].targetObservationCriterion[code="age"].value    |
| DiagnosticReport.referenceRange.text      |  text              | 0..1        | string                                                                                                                     | value:ST                                                                            |
| DiagnosticReport.hasMember                |  hasMember         | 0..*        | Reference(Observation \| QuestionnaireResponse \| MolecularSequence)                                                       | outBoundRelationship                                                                |
| DiagnosticReport.derivedFrom              |  derivedFrom       | 0..*        | Reference(DocumentReference \| ImagingStudy \| Media \| QuestionnaireResponse \| Observation \| MolecularSequence)         | N/A (?)                                                                             |

#### Claim (837) to Diagnostic Report


| R4 Hierarchical Name                              | R4 Name            | Cardinality | Type                                                                                                                         | Claim(837) / Note          |
|---------------------------------------------------|--------------------|:-----------:|------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| DiagnosticReport.implicitRules                    |  implicitRules     | 0..1        | uri                                                                                                                          | x                          |
| DiagnosticReport.language                         |  language          | 0..1        | code                                                                                                                         | x                          |
| DiagnosticReport.text                             |  text              | 0..1        | Narrative                                                                                                                    | x                          |
| DiagnosticReport.contained                        |  contained         | 0..*        | Resource                                                                                                                     | x                          |
| DiagnosticReport.extension                        |  extension         | 0..*        | Extension                                                                                                                    | x                          |
| DiagnosticReport.modifierExtension                |  modifierExtension | 0..*        | Extension                                                                                                                    | x                          |
| DiagnosticReport.identifier                       |  identifier        | 0..*        | Identifier                                                                                                                   | x                          |
| DiagnosticReport.partOf                           |  partOf            | 0..*        | Reference(MedicationAdministration\| MedicationDispense \| MedicationStatement \| Procedure \| Immunization \| ImagingStudy) | x                          |
| DiagnosticReport.status                           |  status            | 1..1        | code                                                                                                                         | Default to "unknown"       |
| DiagnosticReport.category                         |  category          | 1..*        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.code                             |  code              | 1..1        | CodeableConcept                                                                                                              | Procedure Code             |
| DiagnosticReport.subject                          |  subject           | 1..1        | Reference(US Core Patient Profile)                                                                                           | Patient Demographics       |
| DiagnosticReport.focus                            |  focus             | 0..*        | Reference(Resource)                                                                                                          | x                          |
| DiagnosticReport.effective[x]                     |  effective[x]      | 0..1        | dateTime, Period                                                                                                             | Date of Service            |
| DiagnosticReport.issued                           |  issued            | 0..1        | instant                                                                                                                      | Interchange Date/Time      |
| DiagnosticReport.performer                        |  performer         | 0..*        | Reference(Practitioner \| PractitionerRole \| Organization \| CareTeam \| Patient \| RelatedPerson)                          | Billing/Rendering Provider |
| DiagnosticReport.value[x]                         |  value[x]          | 0..1        | Quantity, CodeableConcept, string, boolean, integer, Range, Ratio, SampledData, time, dateTime, Period                       | x                          |
| DiagnosticReport.dataAbsentReason                 |  dataAbsentReason  | 0..1        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.interpretation                   |  interpretation    | 0..*        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.note                             |  note              | 0..*        | Annotation                                                                                                                   | Note Segment               |
| DiagnosticReport.bodySite                         |  bodySite          | 0..1        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.method                           |  method            | 0..1        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.specimen                         |  specimen          | 0..1        | Reference(Specimen)                                                                                                          | x                          |
| DiagnosticReport.device                           |  device            | 0..1        | Reference(Device \| DeviceMetric)                                                                                            | x                          |
| DiagnosticReport.referenceRange                   |  referenceRange    | 0..*        | BackboneElement                                                                                                              | x                          |
| DiagnosticReport.referenceRange.id                |  id                | 0..1        | string                                                                                                                       | x                          |
| DiagnosticReport.referenceRange.extension         |  extension         | 0..*        | Extension                                                                                                                    | x                          |
| DiagnosticReport.referenceRange.modifierExtension |  modifierExtension | 0..*        | Extension                                                                                                                    | x                          |
| DiagnosticReport.referenceRange.low               |  low               | 0..1        | SimpleQuantity                                                                                                               | x                          |
| DiagnosticReport.referenceRange.high              |  high              | 0..1        | SimpleQuantity                                                                                                               | x                          |
| DiagnosticReport.referenceRange.type              |  type              | 0..1        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.referenceRange.appliesTo         |  appliesTo         | 0..*        | CodeableConcept                                                                                                              | x                          |
| DiagnosticReport.referenceRange.age               |  age               | 0..1        | Range                                                                                                                        | x                          |
| DiagnosticReport.referenceRange.text              |  text              | 0..1        | string                                                                                                                       | x                          |
| DiagnosticReport.hasMember                        |  hasMember         | 0..*        | Reference(Observation \| QuestionnaireResponse \| MolecularSequence)                                                         | x                          |
| DiagnosticReport.derivedFrom                      |  derivedFrom       | 0..*        | Reference(DocumentReference \| ImagingStudy \| Media \| QuestionnaireResponse \| Observation \| MolecularSequence)           | x                          |



#### Example DiagnosticReport for Laboratory Results Reporting Resource

An example mapping of a DiagnosticReport for urinalysis is shown below:

<pre>
{
  "resourceType" : "DiagnosticReport",
  "id" : "urinalysis",
  "meta" : {
    "versionId" : "209563",
    "lastUpdated" : "2016-04-19T17:28:11.308+00:00",
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: urinalysis</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/v2-0074 code 'LAB' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Complete Urinalysis <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code '24356-8' = 'Urinalysis complete panel - Urine', given as 'Urinalysis complete panel - Urine'})</span></p><p><b>subject</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><p><b>effective</b>: Jul 5, 2005, 12:00:00 AM</p><p><b>issued</b>: Jul 6, 2005, 12:45:33 AM</p><p><b>performer</b>: <a href=\"Organization-acme-lab.html\">Acme Laboratory, Inc. Generated Summary: id: acme-lab; 1144221847, 2523423456; active; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/organization-type prov}\">Healthcare Provider</span>; name: Acme Labs; ph: (+1) 734-677-7777, hq@acme.org</a></p><p><b>result</b>: </p><ul><li><a href=\"Observation-urine-color.html\">COLOR=Yellow. Generated Summary: id: urine-color; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5778-6}\">COLOR</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.inbnm,fo/sct 371244009}\">Yellow</span></a></li><li><a href=\"Observation-urine-clarity.html\">APPEARANCE=Hazy. Generated Summary: id: urine-clarity; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 32167-9}\">APPEARANCE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 81858005}\">Hazy</span></a></li><li><a href=\"Observation-urine-glucose.html\">GLUCOSE=Negative. Generated Summary: id: urine-glucose; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 25428-4}\">GLUCOSE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-urine-bilirubin.html\">BILIRUBIN=Negative. Generated Summary: id: urine-bilirubin; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5770-3}\">BILIRUBIN</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-urine-ketone.html\">KETONE=Negative. Generated Summary: id: urine-ketone; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 2514-8}\">KETONE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-usg.html\">SPEC GRAV=1.017. Generated Summary: id: usg; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5811-5}\">SPEC GRAV</span>; effective: Jul 5, 2005, 12:00:00 AM; 1.017 {urine specific gravity}</a></li><li><a href=\"Observation-urine-ph.html\">PH=6 (pH). Generated Summary: id: urine-ph; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5803-2}\">PH</span>; effective: Jul 5, 2005, 12:00:00 AM; 6.0 (pH)</a></li><li><a href=\"Observation-urine-protein.html\">PROTEIN=Negative. Generated Summary: id: urine-protein; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 20454-5}\">PROTEIN</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-urobilinogen.html\">UROBILINOGEN=0.3 mg/dL. Generated Summary: id: urobilinogen; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 20405-7}\">UROBILINOGEN</span>; effective: Jul 5, 2005, 12:00:00 AM; 0.3 mg/dL</a></li><li><a href=\"Observation-urine-nitrite.html\">NITRITE=Positive. Generated Summary: id: urine-nitrite; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5802-4}\">NITRITE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 10828004}\">Positive</span></a></li><li><a href=\"Observation-urine-hemoglobin.html\">BLOOD=Trace. Generated Summary: id: urine-hemoglobin; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5794-3}\">BLOOD</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260405006}\">Trace</span></a></li><li><a href=\"Observation-urine-leukocyte-esterase.html\">LEUK ESTERASE=2+e. Generated Summary: id: urine-leukocyte-esterase; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5799-2}\">LEUK ESTERASE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260348001}\">2+</span></a></li><li><a href=\"Observation-urine-sediment.html\">COMMENT=Recommend Urine Culture. Generated Summary: id: urine-sediment; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 11279-7}\">COMMENT</span>; effective: Jul 5, 2005, 12:00:00 AM; value: Recommend Urine Culture</a></li><li><a href=\"Observation-urine-bacteria.html\">BACTERIA=4+. Generated Summary: id: urine-bacteria; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 25145-4}\">BACTERIA</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260350009}\">4+</span></a></li><li><a href=\"Observation-urine-epi-cells.html\">EPITHELIAL CELLS=1-5 cells/HPF. Generated Summary: id: urine-epi-cells; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5787-7}\">EPITHELIAL CELLS</span>; effective: Jul 5, 2005, 12:00:00 AM; </a></li><li><a href=\"Observation-urine-wbcs.html\">WBC=20-30 cells/HPF. Generated Summary: id: urine-wbcs; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5821-4}\">WBC</span>; effective: Jul 5, 2005, 12:00:00 AM; </a></li><li><a href=\"Observation-urine-rbcs.html\">RBC=Occasional cells/HPF. Generated Summary: id: urine-rbcs; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 13945-1}\">RBC</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 84638005}\">Occasional</span></a></li></ul></div>"
  },
  "status" : "final",
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code" : "LAB",
          "display" : "Laboratory"
        }
      ]
    }
  ],
  "code" : {
    "coding" : [
      {
        "system" : "http://loinc.org",
        "code" : "24356-8",
        "display" : "Urinalysis complete panel - Urine"
      }
    ],
    "text" : "Complete Urinalysis"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  },
  "effectiveDateTime" : "2005-07-05",
  "issued" : "2005-07-06T11:45:33+11:00",
  "performer" : [
    {
      "reference" : "Organization/acme-lab",
      "display" : "Acme Laboratory, Inc"
    }
  ],
  "result" : [
    {
      "reference" : "Observation/urine-color",
      "display" : "COLOR=Yellow"
    },
    {
      "reference" : "Observation/urine-clarity",
      "display" : "APPEARANCE=Hazy"
    },
    {
      "reference" : "Observation/urine-glucose",
      "display" : "GLUCOSE=Negative"
    },
    {
      "reference" : "Observation/urine-bilirubin",
      "display" : "BILIRUBIN=Negative"
    },
    {
      "reference" : "Observation/urine-ketone",
      "display" : "KETONE=Negative"
    },
    {
      "reference" : "Observation/usg",
      "display" : "SPEC GRAV=1.017"
    },
    {
      "reference" : "Observation/urine-ph",
      "display" : "PH=6 (pH)"
    },
    {
      "reference" : "Observation/urine-protein",
      "display" : "PROTEIN=Negative"
    },
    {
      "reference" : "Observation/urobilinogen",
      "display" : "UROBILINOGEN=0.3 mg/dL"
    },
    {
      "reference" : "Observation/urine-nitrite",
      "display" : "NITRITE=Positive"
    },
    {
      "reference" : "Observation/urine-hemoglobin",
      "display" : "BLOOD=Trace"
    },
    {
      "reference" : "Observation/urine-leukocyte-esterase",
      "display" : "LEUK ESTERASE=2+e"
    },
    {
      "reference" : "Observation/urine-sediment",
      "display" : "COMMENT=Recommend Urine Culture"
    },
    {
      "reference" : "Observation/urine-bacteria",
      "display" : "BACTERIA=4+"
    },
    {
      "reference" : "Observation/urine-epi-cells",
      "display" : "EPITHELIAL CELLS=1-5 cells/HPF"
    },
    {
      "reference" : "Observation/urine-wbcs",
      "display" : "WBC=20-30 cells/HPF"
    },
    {
      "reference" : "Observation/urine-rbcs",
      "display" : "RBC=Occasional cells/HPF"
    }
  ]
}
</pre>



[Next Page - US Core DiagnosticReport for Report and Note Exchange](USCoreDiagnosticReportforReportandNoteExchange.html)


---

// File: input/pagecontent/USCoreDiagnosticReportforReportandNoteExchange.md

[Previous Page - US Core DiagnosticReport for Laboratory Results Reporting](USCoreDiagnosticReportforLaboratoryResultsReporting.html)

Where a Health Plan has access to clinical notes and associated diagnostic information, they **SHALL** make the information available using the [US Core DiagnosticReport for Report and Note Exchange](http://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-note.html) resource.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the US Core DiagnosticReport for Report and Note Exchange resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                              | Name                      | Cardinality | Type                                                                    |
|---------------------------------------------------------|---------------------------|:-----------:|-------------------------------------------------------------------------|
| DiagnosticReport.status                                 |  status                   |     1..1    | code                                                                    |
| DiagnosticReport.category                               |  category                 |     1..*    | (Slice Definition)                                                      |
| DiagnosticReport.category:LaboratorySlice               |  category:LaboratorySlice |     1..1    | CodeableConcept                                                         |
| DiagnosticReport.category:LaboratorySlice.coding        |  coding                   |     1..*    | Coding                                                                  |
| DiagnosticReport.category:LaboratorySlice.coding.system |  system                   |     1..1    | uri                                                                     |
| DiagnosticReport.category:LaboratorySlice.coding.code   |  code                     |     1..1    | code                                                                    |
| DiagnosticReport.code                                   |  code                     |     1..1    | CodeableConcept                                                         |
| DiagnosticReport.subject                                |  subject                  |     1..1    | Reference(US Core Patient Profile)                                      |
| DiagnosticReport.effective[x]                           |  effective[x]             |     1..1    |                                                                         |
| DiagnosticReport.issued                                 |  issued                   |     1..1    | instant                                                                 |
| DiagnosticReport.performer                              |  performer                |     0..*    | Reference(US Core Practitioner Profile \| US Core Organization Profile) |
| DiagnosticReport.result                                 |  result                   |     0..*    | Reference(US Core Laboratory Result Observation Profile)                |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example DiagnosticReport for Report and Note exchange Resource

An example mapping of a DiagnosticReport for urinalysis is shown below:

<pre>
{
  "resourceType" : "DiagnosticReport",
  "id" : "urinalysis",
  "meta" : {
    "versionId" : "209563",
    "lastUpdated" : "2016-04-19T17:28:11.308+00:00",
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: urinalysis</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/v2-0074 code 'LAB' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Complete Urinalysis <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code '24356-8' = 'Urinalysis complete panel - Urine', given as 'Urinalysis complete panel - Urine'})</span></p><p><b>subject</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><p><b>effective</b>: Jul 5, 2005, 12:00:00 AM</p><p><b>issued</b>: Jul 6, 2005, 12:45:33 AM</p><p><b>performer</b>: <a href=\"Organization-acme-lab.html\">Acme Laboratory, Inc. Generated Summary: id: acme-lab; 1144221847, 2523423456; active; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/organization-type prov}\">Healthcare Provider</span>; name: Acme Labs; ph: (+1) 734-677-7777, hq@acme.org</a></p><p><b>result</b>: </p><ul><li><a href=\"Observation-urine-color.html\">COLOR=Yellow. Generated Summary: id: urine-color; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5778-6}\">COLOR</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.inbnm,fo/sct 371244009}\">Yellow</span></a></li><li><a href=\"Observation-urine-clarity.html\">APPEARANCE=Hazy. Generated Summary: id: urine-clarity; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 32167-9}\">APPEARANCE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 81858005}\">Hazy</span></a></li><li><a href=\"Observation-urine-glucose.html\">GLUCOSE=Negative. Generated Summary: id: urine-glucose; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 25428-4}\">GLUCOSE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-urine-bilirubin.html\">BILIRUBIN=Negative. Generated Summary: id: urine-bilirubin; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5770-3}\">BILIRUBIN</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-urine-ketone.html\">KETONE=Negative. Generated Summary: id: urine-ketone; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 2514-8}\">KETONE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-usg.html\">SPEC GRAV=1.017. Generated Summary: id: usg; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5811-5}\">SPEC GRAV</span>; effective: Jul 5, 2005, 12:00:00 AM; 1.017 {urine specific gravity}</a></li><li><a href=\"Observation-urine-ph.html\">PH=6 (pH). Generated Summary: id: urine-ph; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5803-2}\">PH</span>; effective: Jul 5, 2005, 12:00:00 AM; 6.0 (pH)</a></li><li><a href=\"Observation-urine-protein.html\">PROTEIN=Negative. Generated Summary: id: urine-protein; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 20454-5}\">PROTEIN</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260385009}\">Negative</span></a></li><li><a href=\"Observation-urobilinogen.html\">UROBILINOGEN=0.3 mg/dL. Generated Summary: id: urobilinogen; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 20405-7}\">UROBILINOGEN</span>; effective: Jul 5, 2005, 12:00:00 AM; 0.3 mg/dL</a></li><li><a href=\"Observation-urine-nitrite.html\">NITRITE=Positive. Generated Summary: id: urine-nitrite; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5802-4}\">NITRITE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 10828004}\">Positive</span></a></li><li><a href=\"Observation-urine-hemoglobin.html\">BLOOD=Trace. Generated Summary: id: urine-hemoglobin; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5794-3}\">BLOOD</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260405006}\">Trace</span></a></li><li><a href=\"Observation-urine-leukocyte-esterase.html\">LEUK ESTERASE=2+e. Generated Summary: id: urine-leukocyte-esterase; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5799-2}\">LEUK ESTERASE</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260348001}\">2+</span></a></li><li><a href=\"Observation-urine-sediment.html\">COMMENT=Recommend Urine Culture. Generated Summary: id: urine-sediment; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 11279-7}\">COMMENT</span>; effective: Jul 5, 2005, 12:00:00 AM; value: Recommend Urine Culture</a></li><li><a href=\"Observation-urine-bacteria.html\">BACTERIA=4+. Generated Summary: id: urine-bacteria; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 25145-4}\">BACTERIA</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 260350009}\">4+</span></a></li><li><a href=\"Observation-urine-epi-cells.html\">EPITHELIAL CELLS=1-5 cells/HPF. Generated Summary: id: urine-epi-cells; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5787-7}\">EPITHELIAL CELLS</span>; effective: Jul 5, 2005, 12:00:00 AM; </a></li><li><a href=\"Observation-urine-wbcs.html\">WBC=20-30 cells/HPF. Generated Summary: id: urine-wbcs; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 5821-4}\">WBC</span>; effective: Jul 5, 2005, 12:00:00 AM; </a></li><li><a href=\"Observation-urine-rbcs.html\">RBC=Occasional cells/HPF. Generated Summary: id: urine-rbcs; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category laboratory}\">Laboratory</span>; <span title=\"Codes: {http://loinc.org 13945-1}\">RBC</span>; effective: Jul 5, 2005, 12:00:00 AM; <span title=\"Codes: {http://snomed.info/sct 84638005}\">Occasional</span></a></li></ul></div>"
  },
  "status" : "final",
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code" : "LAB",
          "display" : "Laboratory"
        }
      ]
    }
  ],
  "code" : {
    "coding" : [
      {
        "system" : "http://loinc.org",
        "code" : "24356-8",
        "display" : "Urinalysis complete panel - Urine"
      }
    ],
    "text" : "Complete Urinalysis"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  },
  "effectiveDateTime" : "2005-07-05",
  "issued" : "2005-07-06T11:45:33+11:00",
  "performer" : [
    {
      "reference" : "Organization/acme-lab",
      "display" : "Acme Laboratory, Inc"
    }
  ],
  "result" : [
    {
      "reference" : "Observation/urine-color",
      "display" : "COLOR=Yellow"
    },
    {
      "reference" : "Observation/urine-clarity",
      "display" : "APPEARANCE=Hazy"
    },
    {
      "reference" : "Observation/urine-glucose",
      "display" : "GLUCOSE=Negative"
    },
    {
      "reference" : "Observation/urine-bilirubin",
      "display" : "BILIRUBIN=Negative"
    },
    {
      "reference" : "Observation/urine-ketone",
      "display" : "KETONE=Negative"
    },
    {
      "reference" : "Observation/usg",
      "display" : "SPEC GRAV=1.017"
    },
    {
      "reference" : "Observation/urine-ph",
      "display" : "PH=6 (pH)"
    },
    {
      "reference" : "Observation/urine-protein",
      "display" : "PROTEIN=Negative"
    },
    {
      "reference" : "Observation/urobilinogen",
      "display" : "UROBILINOGEN=0.3 mg/dL"
    },
    {
      "reference" : "Observation/urine-nitrite",
      "display" : "NITRITE=Positive"
    },
    {
      "reference" : "Observation/urine-hemoglobin",
      "display" : "BLOOD=Trace"
    },
    {
      "reference" : "Observation/urine-leukocyte-esterase",
      "display" : "LEUK ESTERASE=2+e"
    },
    {
      "reference" : "Observation/urine-sediment",
      "display" : "COMMENT=Recommend Urine Culture"
    },
    {
      "reference" : "Observation/urine-bacteria",
      "display" : "BACTERIA=4+"
    },
    {
      "reference" : "Observation/urine-epi-cells",
      "display" : "EPITHELIAL CELLS=1-5 cells/HPF"
    },
    {
      "reference" : "Observation/urine-wbcs",
      "display" : "WBC=20-30 cells/HPF"
    },
    {
      "reference" : "Observation/urine-rbcs",
      "display" : "RBC=Occasional cells/HPF"
    }
  ]
}
</pre>



[Next Page - US Core DocumentReference](USCoreDocumentReference.html)


---

// File: input/pagecontent/USCoreDocumentReference.md

[Previous Page - US Core DiagnosticReport for Report and Note Exchange](USCoreDiagnosticReportforReportandNoteExchange.html)

The Health Plan **SHALL** use the
[US Core 3.1.1 DocumentReference]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-documentreference.html) or
[US Core 6.1.0 DocumentReference]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-documentreference.html) 
resource to exchange:
 
- Unstructured data
- Imaging data
- C-CDA documents

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the US Core DocumentReference resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                       | Name         | Cardinality | Type                                                                                               |
|--------------------------------------------------|--------------|:-----------:|----------------------------------------------------------------------------------------------------|
| DocumentReference.identifier                     |  identifier  |     0..*    | Identifier                                                                                         |
| DocumentReference.status                         |  status      |     1..1    | code                                                                                               |
| DocumentReference.type                           |  type        |     1..1    | CodeableConcept                                                                                    |
| DocumentReference.category                       |  category    |     1..*    | CodeableConcept                                                                                    |
| DocumentReference.subject                        |  subject     |     1..1    | Reference(US Core Patient Profile)                                                                 |
| DocumentReference.date                           |  date        |     0..1    | instant                                                                                            |
| DocumentReference.author                         |  author      |     0..*    | Reference(US Core Practitioner Profile \| US Core Organization Profile \| US Core Patient Profile) |
| DocumentReference.custodian                      |  custodian   |     0..1    | Reference(US Core Organization Profile)                                                            |
| DocumentReference.content                        |  content     |     1..*    | BackboneElement                                                                                    |
| DocumentReference.content.attachment             |  attachment  |     1..1    | Attachment                                                                                         |
| DocumentReference.content.attachment.contentType |  contentType |     1..1    | code                                                                                               |
| DocumentReference.content.attachment.data        |  data        |     0..1    | base64Binary                                                                                       |
| DocumentReference.content.attachment.url         |  url         |     0..1    | url                                                                                                |
| DocumentReference.content.format                 |  format      |     0..1    | Coding                                                                                             |
| DocumentReference.context                        |  context     |     0..1    | BackboneElement                                                                                    |
| DocumentReference.context.encounter              |  encounter   |     0..1    | Reference(US Core Encounter Profile)                                                               |
| DocumentReference.context.period                 |  period      |     0..1    | Period                                                                                             |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example DocumentReference resource

An example mapping of a DocumentReference for an episode of care is shown below:

<pre>
{
  "resourceType" : "DocumentReference",
  "id" : "episode-summary",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: episode-summary</p><p><b>meta</b>: </p><p><b>identifier</b>: urn:oid:2.16.840.1.113883.19.5.99999.1</p><p><b>status</b>: current</p><p><b>type</b>: CCD Document <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code '34133-9' = 'Summary of episode note', given as 'Summary of episode note'})</span></p><p><b>category</b>: Clinical Note <span style=\"background: LightGoldenRodYellow\">(Details : {http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category code 'clinical-note' = 'Clinical Note', given as 'Clinical Note'})</span></p><p><b>subject</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><p><b>date</b>: Mar 9, 2016, 3:29:46 PM</p><p><b>author</b>: <a href=\"Practitioner-practitioner-1.html\">Ronald Bone, MD. Generated Summary: id: practitioner-1; 9941339108, 25456; Ronald Bone </a></p><p><b>description</b>: Pulmonology clinic acute visit</p><h3>Contents</h3><table class=\"grid\"><tr><td>-</td><td><b>Attachment</b></td><td><b>Format</b></td></tr><tr><td>*</td><td/><td>Documents following C-CDA constraints using a structured body (Details: urn:oid:1.3.6.1.4.1.19376.1.2.3 code urn:hl7-org:sdwg:ccda-structuredBody:2.1 = 'urn:hl7-org:sdwg:ccda-structuredBody:2.1', stated as 'Documents following C-CDA constraints using a structured body')</td></tr></table><h3>Contexts</h3><table class=\"grid\"><tr><td>-</td><td><b>Period</b></td></tr><tr><td>*</td><td>Dec 22, 2004, 9:00:00 PM --&gt; Dec 22, 2004, 9:01:00 PM</td></tr></table></div>"
  },
  "identifier" : [
    {
      "system" : "urn:ietf:rfc:3986",
      "value" : "urn:oid:2.16.840.1.113883.19.5.99999.1"
    }
  ],
  "status" : "current",
  "type" : {
    "coding" : [
      {
        "system" : "http://loinc.org",
        "code" : "34133-9",
        "display" : "Summary of episode note"
      }
    ],
    "text" : "CCD Document"
  },
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
          "code" : "clinical-note",
          "display" : "Clinical Note"
        }
      ],
      "text" : "Clinical Note"
    }
  ],
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  },
  "date" : "2016-03-09T15:29:46Z",
  "author" : [
    {
      "reference" : "Practitioner/practitioner-1",
      "display" : "Ronald Bone, MD"
    }
  ],
  "description" : "Pulmonology clinic acute visit",
  "content" : [
    {
      "attachment" : {
        "contentType" : "text/plain",
        "url" : "/Binary/1-note",
        "title" : "Uri where the data can be found: [base]/Binary/1-note"
      },
      "format" : {
        "system" : "urn:oid:1.3.6.1.4.1.19376.1.2.3",
        "code" : "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
        "display" : "Documents following C-CDA constraints using a structured body"
      }
    }
  ],
  "context" : {
    "period" : {
      "start" : "2004-12-23T08:00:00+11:00",
      "end" : "2004-12-23T08:01:00+11:00"
    }
  }
}
</pre>

The following example of a DocumentReference and associated PDex Provenance resource demonstrates how an unstructured document, such as a Portable Document Format (PDF) document could be attached or embedded as base64 encoded content in a DocumentReference. The associated PDex Provenance resource identifies the source document as a PDF file. 

#### Example: Unstructured Document with Provenance

- The example US Core DocumentReference is here: [DocumentReference-123456.html](DocumentReference-123456.html)
- The associated PDex Provenance resource is here: [Provenance-1000006.html](Provenance-1000006.html)



[Next Page - US Core Encounter](USCoreEncounter.html)


---

// File: input/pagecontent/USCoreEncounter.md

[Previous Page - US Core DocumentReference](USCoreDocumentReference.html)

An example mapping of Health Plan data for Members to the
[US Core 3.1.1 Encounter]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-encounter.html) or
[US Core 6.1.0 Encounter]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-encounter.html) resource 
is shown below:

{% include style_insert_table_blue.html %}

When populating the encounter resource period - if claim has period, populate period; if only a date, populate the end date in a period element.

Add warning text to alert the user that Claims consider the date of service to be the date when the service is completed therefore one generally cannot infer the start date of a diagnosis or the encounter to be the same as the service date of a line item.


The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the 
[US Core 3.1.1 Encounter]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-encounter.html) or
[US Core 6.1.0 Encounter]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-encounter.html) resource are:

| R4 Element                                     | Name                  | Cardinality | Type                                    |
|------------------------------------------------|-----------------------|:-----------:|-----------------------------------------|
| Encounter.identifier                           |  identifier           |     0..*    | Identifier                              |
| Encounter.identifier.system                    |  system               |     1..1    | uri                                     |
| Encounter.identifier.value                     |  value                |     1..1    | string                                  |
| Encounter.status                               |  status               |     1..1    | code                                    |
| Encounter.class                                |  class                |     1..1    | Coding                                  |
| Encounter.type                                 |  type                 |     1..*    | CodeableConcept                         |
| Encounter.subject                              |  subject              |     1..1    | Reference(US Core Patient Profile)      |
| Encounter.participant                          |  participant          |     0..*    | BackboneElement                         |
| Encounter.participant.type                     |  type                 |     0..*    | CodeableConcept                         |
| Encounter.participant.period                   |  period               |     0..1    | Period                                  |
| Encounter.participant.individual               |  individual           |     0..1    | Reference(US Core Practitioner Profile) |
| Encounter.period                               |  period               |     0..1    | Period                                  |
| Encounter.reasonCode                           |  reasonCode           |     0..*    | CodeableConcept                         |
| Encounter.hospitalization                      |  hospitalization      |     0..1    | BackboneElement                         |
| Encounter.hospitalization.dischargeDisposition |  dischargeDisposition |     0..1    | CodeableConcept                         |
| Encounter.location                             |  location             |     0..*    | BackboneElement                         |
| Encounter.location.location                    |  location             |     1..1    | Reference(Location)                     |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

Fields that can be mapped from the CARIN Blue Button IG CPCDS File are included in the table below:

| US Core Element                                | Must Support | Cardinality | CARIN-BB Element                                                                                   | CPCDS Element Mapping or Implementer Note                                                                                                                                                                                                                                                                     |
|------------------------------------------------|:------------:|:-----------:|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Encounter.identifier                           |       S      |     0..*    | ExplanationOfBenefit.identifier                                                                    | [{"35":"Payer claim unique identifier"}]. Note: Assign Payer System URI for Unique Claim Id in Encounter.identifier.system. SetClaim Id in Encounter.identifier.value                                                                                                                                         |
| Encounter.identifier.system                    |       S      |     1..1    |                                                                                                    | Note: Assign Payer System URI for Unique Claim Id in Encounter.identifier.system. Set Claim Id in Encounter.identifier.value                                                                                                                                                                                  |
| Encounter.identifier.value                     |       S      |     1..1    |                                                                                                    | Note: Assign Claim Id in Encounter.identifier.value                                                                                                                                                                                                                                                           |
| Encounter.status                               |       S      |     1..1    | ExplanationOfBenefit.status                                                                        | [{"140":"Claim processing status code<br>"}]                                                                                                                                                                                                                                                                  |
| Encounter.statusHistory.period                 |              |     1..1    |                                                                                                    | [{"177, 178":"Statement From Date<br>Statement Through Date<br>"}]                                                                                                                                                                                                                                            |
| Encounter.class                                |       S      |     1..1    |                                                                                                    | Note: Use ExplanationOfBenefit.type [institutional\|oral\|pharmacy\|professional\|vision]  to map to ActCode [IMP\|AMB\|AMB\|AMB]  |
| Encounter.classHistory.period                  |              |     1..1    | ExplanationOfBenefit.item.serviced.servicedPeriod, ExplanationOfBenefit.item.serviced.servicedDate | [{"18, 19":"Member Admission Date<br>Member Discharge Date"}, {"90, 119":"Service from date, Service to date"}]                                                                                                                                                                                               |
| Encounter.type                                 |       S      |     1..*    | ExplanationOfBenefit.type                                                                          | HCPCS codes are contained within CPT Code System.                                                                                                                                                                                                                                                             |
| Encounter.subject                              |       S      |     1..1    | ExplanationOfBenefit.patient                                                                       | [{"Ref (1), Ref (109)":"Member id, Patient account number"}, {"Ref (191)":"Unique Member ID"}, {"Ref (110)":"Medical record number"}]                                                                                                                                                                         |
| Encounter.participant.type                     |       S      |     0..*    | ExplanationOfBenefit.careTeam.role                                                                 | [{"165":"Care Team Role"}]                                                                                                                                                                                                                                                                                    |
| Encounter.participant.period                   |       S      |     0..1    |                                                                                                    | Note: Provide information if available                                                                                                                                                                                                                                                                        |
| Encounter.participant.individual               |       S      |     0..1    | ExplanationOfBenefit.careTeam.provider                                                             | [{"Ref (93, 96, 98, 99, 173)":"Provider attending, PCP, operating, <br/>referring and supervising NPIs"}, {"Ref (166, 169, 182, 171, 174)":"Provider <br/>attending, PCP, operating, referring and supervising names"},<br/>{"Ref (94, 167)":"Claim Billing Provider NPI, <br/>Claim Billing Provider Name"}] |
| Encounter.period                               |       S      |     0..1    | ExplanationOfBenefit.item.serviced.servicedPeriod, ExplanationOfBenefit.item.serviced.servicedDate | [{"18, 19":"Member Admission Date<br>Member Discharge Date"}, {"90, 119":"Service from date, Service to date"}]                                                                                                                                                                                               |
| Encounter.length                               |       S      |     0..1    |                                                                                                    | . Note: Provide information if available                                                                                                                                                                                                                                                                      |
| Encounter.reasonCode                           |       S      |     0..*    |                                                                                                    | . Note: Provide information if available                                                                                                                                                                                                                                                                      |
| Encounter.diagnosis |              |     0..*    | ExplanationOfBenefit.diagnosis.onAdmission                                                         | [{"21, 22, 23, 30, 31":"Diagnosis Code"}, {"28, 29":"Present on admission"}]                                                                                                                                                                                                                                  |
| Encounter.hospitalization                      |       S      |     0..1    |                                                                                                    | . Note: Provide information if available                                                                                                                                                                                                                                                                      |
| Encounter.hospitalization.dischargeDisposition |       S      |     0..1    |                                                                                                    | Note: Provide information if available                                                                                                                                                                                                                                                                        |
| Encounter.location                             |       S      |     0..*    | ExplanationOfBenefit.locationReference                                                             | Note: Reference to location where Encounter took place                                                                                                                                                                                                                                                        |
| Encounter.location.location                    |       S      |     1..1    |                                                                                                    | Note: Reference to location where Encounter took place                                                                                                                                                                                                                                                        |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>


#### Example Encounter Resource

An example mapping of an Encounter resource is shown here:

<pre class="json">
{
  "resourceType" : "Encounter",
  "id" : "example-1",
  "meta" : {
    "lastUpdated" : "2017-05-26T11:56:57.250-04:00",
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">&lt;p&gt;&lt;b&gt;Generated Narrative</b></p><p><&lt;b&gt;id&lt;/b&gt;: example-1</p>&lt;p&gt;&lt;b&gt;meta</b>: </p>&lt;p&gt;&lt;b&gt;status</b>: finished</p>&lt;p&gt;&lt;b&gt;class</b>: <span title=\"{http://terminology.hl7.org/CodeSystem/v3-ActCode AMB}\">ambulatory</span></p>&lt;p&gt;&lt;b&gt;type</b>: <span title=\"Codes: {http://www.ama-assn.org/go/cpt 99201}\">Office Visit</span></p>&lt;p&gt;&lt;b&gt;subject</b>: <a href=\"Patient-example.html\">Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw , Amy V. Baxter ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: 1987-02-20</a></p>&lt;p&gt;&lt;b&gt;period</b>: Nov 1, 2015, 10:00:14 PM --&gt; Nov 1, 2015, 11:00:14 PM</p></div>"
  },
  "status" : "finished",
  "class" : {
    "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code" : "AMB",
    "display" : "ambulatory"
  },
  "type" : [
    {
      "coding" : [
        {
          "system" : "http://www.ama-assn.org/go/cpt",
          "code" : "99201"
        }
      ],
      "text" : "Office Visit"
    }
  ],
  "subject" : {
    "reference" : "Patient/example"
  },
  "period" : {
    "start" : "2015-11-01T17:00:14-05:00",
    "end" : "2015-11-01T18:00:14-05:00"
  }
}
</pre>


Refer to the US Core Additional examples of the [US Core 3.1.1 Implementation Guide]({{site.data.fhir.ver.uscore3}}) 
or [US Core 6.1.0 Implementation Guide]({{site.data.fhir.ver.uscore6}}) for further examples of completed 
Encounter Profiles.



[Next Page - US Core Goal](USCoreGoal.html)


---

// File: input/pagecontent/USCoreGoal.md

[Previous Page - US Core Encounter](USCoreEncounter.html)

This IG supports the full complement of US Core profiles. 
They are supported to enable a payer to produce FHIR resources from 
data provided in other formats.

For some resources, payers are unlikely to have the clinical information
necessary to create a valid US Core resource. The
[US Core 3.1.1 Goal]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-goal.html) or
[US Core 6.1.0 Goal]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-goal.html) resource
is one potential example of a resource that payers may be 
unable to create from the source clinical data they have available.

A valid US Core Goal profile in addition to a reference to a member, using the US Core Patient resource, will require a lifecycleStatus, a description of the goal and, optionally, a target date.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the 
[US Core 3.1.1 Goal]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-goal.html) or
[US Core 6.1.0 Goal]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-goal.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element            | Name             | Cardinality | Type                               |
|-----------------------|------------------|:-----------:|------------------------------------|
|  Goal.lifecycleStatus |  lifecycleStatus |     1..1    | code                               |
|  Goal.description     |  description     |     1..1    | CodeableConcept                    |
|  Goal.subject         |  subject         |     1..1    | Reference(US Core Patient Profile) |
|  Goal.target          |  target          |     0..*    | BackboneElement                    |
|  Goal.due[x]:dueDate  |  due[x]:dueDate  |     0..1    | date                               |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example Goal Resource

An example mapping of a Goal resource is shown here:

<pre>
{
  "resourceType" : "Goal",
  "id" : "goal-1",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><p><b>id</b>: goal-1</p><p><b>meta</b>: </p><p><b>lifecycleStatus</b>: active</p><p><b>description</b>: <span title=\"Codes: \">Patient is targeting a pulse oximetry of 92% and a weight of 195 lbs</span></p><p><b>subject</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw , Amy V. Baxter ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: 1987-02-20</a></p><h3>Targets</h3><table class=\"grid\"><tr><td>-</td><td><b>Due[x]</b></td></tr><tr><td>*</td><td>2016-04-05</td></tr></table></div>"
  },
  "lifecycleStatus" : "active",
  "description" : {
    "text" : "Patient is targeting a pulse oximetry of 92% and a weight of 195 lbs"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  },
  "target" : [
    {
      "dueDate" : "2016-04-05"
    }
  ]
}

</pre>

[Next Page - US Core Immunization](USCoreImmunization.html)


---

// File: input/pagecontent/USCoreImmunization.md

[Previous Page - US Core Goal](USCoreGoal.html)

Where a Health Plan has access to structured and coded Immunization information for a member, the health plan **SHALL** present the information using the
[US Core 3.1.1 Immunization]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-immunization.html) or
[US Core 6.1.0 Immunization]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-immunization.html)
resource when information is available in a structured and coded form.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the 
[US Core 3.1.1 Immunization]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-immunization.html) or
[US Core 6.1.0 Immunization]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-immunization.html)
 resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                  | Name           | Cardinality | Type                                                        |
|---------------------------------------------|----------------|-------------|-------------------------------------------------------------|
|  Immunization.status                        |  status        | 1..1        | code                                                        |
|  Immunization.statusReason                  |  statusReason  | 0..1        | CodeableConcept                                             |
|  Immunization.vaccineCode                   |  vaccineCode   | 1..1        | CodeableConcept                                             |
|  Immunization.patient                       |  patient       | 1..1        | Reference(US Core Patient Profile)                          |
|  Immunization.occurrence[x]                 |  occurrence[x] | 1..1        |                                                             |
|  Immunization.primarySource                 |  primarySource | 1..1        | boolean                                                     |
|  Immunization.performer.actor               |  actor         | 1..1        | Reference(Practitioner \| PractitionerRole \| Organization) |
|  Immunization.protocolApplied.doseNumber[x] |  doseNumber[x] | 1..1        |                                                             |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example Immunization Resource:

An example mapping of an Immunization resource is shown below:

<pre>
{
  "resourceType" : "Immunization",
  "id" : "imm-1",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: imm-1</p><p><b>meta</b>: </p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: influenza, injectable, quadrivalent, contains preservative <span style=\"background: LightGoldenRodYellow\">(Details : {http://hl7.org/fhir/sid/cvx code '158' = 'influenza, injectable, quadrivalent', given as 'influenza, injectable, quadrivalent, contains preservative'}; {http://hl7.org/fhir/sid/ndc code '49281-0621-15' = '49281-0621-15', given as 'FLUZONE QUADRIVALENT'})</span></p><p><b>patient</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p><p><b>occurrence</b>: Jan 8, 2016, 12:00:00 AM</p><p><b>primarySource</b>: false</p></div>"
  },
  "status" : "completed",
  "vaccineCode" : {
    "coding" : [
      {
        "system" : "http://hl7.org/fhir/sid/cvx",
        "code" : "158",
        "display" : "influenza, injectable, quadrivalent, contains preservative"
      },
      {
        "system" : "http://hl7.org/fhir/sid/ndc",
        "code" : "49281-0621-15",
        "display" : "FLUZONE QUADRIVALENT"
      }
    ]
  },
  "patient" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  },
  "occurrenceDateTime" : "2016-01-08",
  "primarySource" : false
}
</pre>



[Next Page - US Core ImplantableDevice](USCoreImplantableDevice.html)


---

// File: input/pagecontent/USCoreImplantableDevice.md

[Previous Page - US Core Immunization](USCoreImmunization.html)

Where a Health Plan has information about devices used by the Member that information **SHALL** be published using the
[US Core 3.1.1 Implantable Device]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-implantable-device.html) or
[US Core 6.1.0 Implantable Device]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-implantable-device.html)
 resource when the information is structured and coded.

In future versions of this IG there is a desire to ensure that all Implantable Device identification information is exchanged using the Implantable Device resource.  

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 Implantable Device]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-implantable-device.html) or
[US Core 6.1.0 Implantable Device]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-implantable-device.html)
resource are:

{% include style_insert_table_blue.html %}

| R4 Element                          | Name                | Cardinality | Type                               |
|-------------------------------------|---------------------|:-----------:|------------------------------------|
|  Device.udiCarrier                  |  udiCarrier         |     0..1    | BackboneElement                    |
|  Device.udiCarrier.deviceIdentifier |  deviceIdentifier   |     1..1    | string                             |
|  Device.udiCarrier.carrierAIDC      |  carrierAIDC        |     0..1    | base64Binary                       |
|  Device.udiCarrier.carrierHRF       |  carrierHRF         |     0..1    | string                             |
|  Device.distinctIdentifier          |  distinctIdentifier |     0..1    | string                             |
|  Device.manufactureDate             |  manufactureDate    |     0..1    | dateTime                           |
|  Device.expirationDate              |  expirationDate     |     0..1    | dateTime                           |
|  Device.lotNumber                   |  lotNumber          |     0..1    | string                             |
|  Device.serialNumber                |  serialNumber       |     0..1    | string                             |
|  Device.type                        |  type               |     1..1    | CodeableConcept                    |
|  Device.patient                     |  patient            |     1..1    | Reference(US Core Patient Profile) |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example Implantable Device Resource

An example mapping of an implantable device resource is shown below:

<pre>
{
  "resourceType" : "Device",
  "id" : "udi-1",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-device"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: udi-1</p><p><b>meta</b>: </p><h3>UdiCarriers</h3><table class=\"grid\"><tr><td>-</td><td><b>CarrierHRF</b></td></tr><tr><td>*</td><td>(01)09504000059118(17)141120(10)7654321D(21)10987654d321</td></tr></table><p><b>status</b>: active</p><p><b>type</b>: Coated femoral stem prosthesis, modular <span style=\"background: LightGoldenRodYellow\">(Details : {SNOMED CT code '468063009' = 'Coated femoral stem prosthesis, modular (physical object)', given as 'Coated femoral stem prosthesis, modular'})</span></p><p><b>patient</b>: <a href=\"Patient-example.html\">Amy Shaw. Generated Summary: id: example; Medical Record Number = 1032702 (USUAL); active; Amy V. Shaw ; ph: 555-555-5555(HOME), amy.shaw@example.com; gender: female; birthDate: Feb 20, 2007</a></p></div>"
  },
  "udiCarrier" : [
    {
      "carrierHRF" : "(01)09504000059118(17)141120(10)7654321D(21)10987654d321"
    }
  ],
  "status" : "active",
  "type" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "468063009",
        "display" : "Coated femoral stem prosthesis, modular"
      }
    ]
  },
  "patient" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  }
}
</pre>



[Next Page - US Core Laboratory Result Observation](USCoreLaboratoryResultObservation.html)


---

// File: input/pagecontent/USCoreLaboratoryResultObservation.md

[Previous Page - US Core ImplantableDevice](USCoreImplantableDevice.html)

 The US Core Laboratory Result Observation profile sets minimum expectations for the Observation resource to record, search, and fetch laboratory test results associated with a patient/member. It identifies which core elements, extensions, vocabularies and value sets **SHALL** be present in the resource when using this profile.

In [US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) a number of new Observation profiles were created. Many of them replaced the 
Vital Signs profiles from the base FHIR R4 base specification. The full list of [US Core 6.1.0 Observation profiles]({{site.data.fhir.ver.uscore6}}/profiles-and-extensions.html#observation) in can be found [here]({{site.data.fhir.ver.uscore6}}/profiles-and-extensions.html#observation):

- [US Core Observation Clinical Result Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-clinical-result.html)
- [US Core Laboratory Result Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-lab.html)
- [US Core Observation Occupation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-occupation.html)
- [US Core Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-pregnancyintent.html)
- [US Core Observation Pregnancy Status Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-pregnancystatus.html)
- [US Core Observation Screening Assessment Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-screening-assessment.html)
- [US Core Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-sexual-orientation.html)
- [US Core Simple Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-simple-observation.html)
- [US Core Smoking Status Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-smokingstatus.html)
- [US Core Vital Signs Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-vital-signs.html)
  - [US Core Pediatric Head Occipital Frontal Circumference Percentile Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-head-occipital-frontal-circumference-percentile.html)
  - [US Core Pediatric BMI for Age Observation Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-bmi-for-age.html)
  - [US Core Pediatric Weight for Height]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-weight-for-height.html)
  - [US Core Blood Pressure Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-blood-pressure.html)
  - [US Core BMI Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-bmi.html)
  - [US Core Body Height Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-body-height.html)
  - [US Core Body Temperature Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-body-temperature.html)
  - [US Core Body Weight Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-body-weight.html)
  - [US Core Head Circumference Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-head-circumference.html)
  - [US Core Heart Rate Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-heart-rate.html)
  - [US Core Pulse Oximetry Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-pulse-oximetry.html)
  - [US Core Respiratory Rate Profile]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-respiratory-rate.html)


The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the [US Core 3.1.1 LaboratoryResultObservation]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-observation-lab.html) or
[US Core 6.1.0 LaboratoryResultObservation]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-observation-lab.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                              | Name                 | Cardinality | Type                               |
|-----------------------------------------|----------------------|:-----------:|------------------------------------|
|  Observation.status                     |  status              |     1..1    | code                               |
|  Observation.category                   |  category            |     1..*    | (Slice Definition)                 |
|  Observation.category:Laboratory        |  category:Laboratory |     1..1    | CodeableConcept                    |
|  Observation.category:Laboratory.coding |  Laboratory.coding   |     1..*    | Coding                             |
|  Observation.category:Laboratory.system |  Laboratory.system   |     1..1    | uri                                |
|  Observation.category:Laboratory.code   |  Laboratory.code     |     1..1    | code                               |
|  Observation.code                       |  code                |     1..1    | CodeableConcept                    |
|  Observation.subject                    |  subject             |     1..1    | Reference(US Core Patient Profile) |
|  Observation.effective[x]               |  effective[x]        |     0..1    |                                    |
|  Observation.value[x]                   |  value[x]            |     0..1    |                                    |
|  Observation.dataAbsentReason           |  dataAbsentReason    |     0..1    | CodeableConcept                    |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

### Example Laboratory Results Profile

Link to urine specific gravity laboratory result: [https://hl7.org/fhir/us/core/Observation-usg.html](https://hl7.org/fhir/us/core/Observation-usg.html)


[Next Page - US Core Location](USCoreLocation.html)


---

// File: input/pagecontent/USCoreLocation.md

[Previous Page - US Core Laboratory Result Observation](USCoreLaboratoryResultObservation.html)

The  
[US Core 3.1.1 Location]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-location.html) or
[US Core 6.1.0 Location]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-location.html) 
**SHALL** be used to record location/facility-specific information.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the  
[US Core 3.1.1 Location]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-location.html) or
[US Core 6.1.0 Location]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-location.html)
resource are:

{% include style_insert_table_blue.html %}

| R4 Element                     | Name                  | Cardinality | Type                                    |
|--------------------------------|-----------------------|:-----------:|-----------------------------------------|
|  Location.status               |  status               |     0..1    | code                                    |
|  Location.name                 |  name                 |     1..1    | string                                  |
|  Location.telecom              |  telecom              |     0..*    | ContactPoint                            |
|  Location.address              |  address              |     0..1    | Address                                 |
|  Location.address.line         |  line                 |     0..*    | string                                  |
|  Location.address.city         |  city                 |     0..1    | string                                  |
|  Location.address.state        |  state                |     0..1    | string                                  |
|  Location.address.postalCode   |  postalCode           |     0..1    | string                                  |
|  Location.managingOrganization |  managingOrganization |     0..1    | Reference(US Core Organization Profile) |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>


#### Example Location Resource

An example mapping of a Location resource is shown here:

<pre>
{
  "resourceType" : "Location",
  "id" : "hl7east",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-location"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: hl7east</p><p><b>meta</b>: </p><p><b>identifier</b>: 29</p><p><b>status</b>: active</p><p><b>name</b>: Health Level Seven International - Amherst</p><p><b>description</b>: HL7 Headquarters - East</p><p><b>telecom</b>: ph: (+1) 734-677-7777</p><p><b>address</b>: 3300 Washtenaw Avenue, Suite 227 Amherst MA 01002 USA </p><h3>Positions</h3><table class=\"grid\"><tr><td>-</td><td><b>Longitude</b></td><td><b>Latitude</b></td></tr><tr><td>*</td><td>-72.519854</td><td>42.373222</td></tr></table><p><b>managingOrganization</b>: Health Level Seven International</p></div>"
  },
  "identifier" : [
    {
      "system" : "http://www.acme.org/location",
      "value" : "29"
    }
  ],
  "status" : "active",
  "name" : "Health Level Seven International - Amherst",
  "description" : "HL7 Headquarters - East",
  "telecom" : [
    {
      "system" : "phone",
      "value" : "(+1) 734-677-7777"
    }
  ],
  "address" : {
    "line" : [
      "3300 Washtenaw Avenue, Suite 227"
    ],
    "city" : "Amherst",
    "state" : "MA",
    "postalCode" : "01002",
    "country" : "USA"
  },
  "position" : {
    "longitude" : -72.519854,
    "latitude" : 42.373222
  },
  "managingOrganization" : {
    "display" : "Health Level Seven International"
  }
}
</pre>

Refer to the US Core Additional examples of the [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) or
[US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) Implementation Guide for further examples of completed 
Location Profiles.



[Next Page - US Core Medication](USCoreMedication.html)


---

// File: input/pagecontent/USCoreMedication.md

[Previous Page - US Core Location](USCoreLocation.html)

Where a Health Plan has access to Medication information, they **SHALL** make the information available using the
[US Core 3.1.1 Medication]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-medication.html) or
[US Core 6.1.0 Medication]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medication.html) resource.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 Medication]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-medication.html) or
[US Core 6.1.0 Medication]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medication.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                     | Name     | Cardinality | Type            |
|--------------------------------|----------|:-----------:|-----------------|
|  Medication.code               |  code    |     1..1    | CodeableConcept |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example Medication Resource

An example mapping of a Medication is shown below:

<pre>
{
  "resourceType": "Medication",
  "id": "med0311",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0311</p><p><b>contained</b>: </p><p><b>code</b>: Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Prednisone (substance) <span>(Details : {SNOMED CT code '116602009' = 'Prednisone', given as 'Prednisone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
  },
  "contained": [
    {
      "resourceType": "Substance",
      "id": "sub03",
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "116602009",
            "display": "Prednisone (substance)"
          }
        ]
      }
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "373994007",
        "display": "Prednisone 5mg tablet (Product)"
      }
    ]
  },
  "form": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "385055001",
        "display": "Tablet dose form (qualifier value)"
      }
    ]
  },
  "ingredient": [
    {
      "itemReference": {
        "reference": "#sub03"
      },
      "strength": {
        "numerator": {
          "value": 5,
          "system": "http://unitsofmeasure.org",
          "code": "mg"
        },
        "denominator": {
          "value": 1,
          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          "code": "TAB"
        }
      }
    }
  ]
}
</pre>




[Next Page - PDex MedicationDispense](PDexMedicationDispense.html)


---

// File: input/pagecontent/USCoreMedicationRequest.md

[Previous Page - PDex MedicationDispense](PDexMedicationDispense.html)

Where a Health Plan has access to Prescription information, they **SHALL** make the information available using the
[US Core 3.1.1 MedicationRequest]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-medicationrequest.html) or
[US Core 6.1.0 MedicationRequest]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medicationrequest.html) resource.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 MedicationRequest]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-medicationrequest.html) or
[US Core 6.1.0 MedicationRequest]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medicationrequest.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                | Name               | Cardinality | Type                                                                                               |
|-------------------------------------------|--------------------|:-----------:|----------------------------------------------------------------------------------------------------|
|  MedicationRequest.status                 |  status            |     1..1    | code                                                                                               |
|  MedicationRequest.intent                 |  intent            |     1..1    | code                                                                                               |
|  MedicationRequest.reported[x]            |  reported[x]       |     0..1    |                                                                                                    |
|  MedicationRequest.medication[x]          |  medication[x]     |     1..1    |                                                                                                    |
|  MedicationRequest.subject                |  subject           |     1..1    | Reference(US Core Patient Profile)                                                                 |
|  MedicationRequest.encounter              |  encounter         |     0..1    | Reference(Encounter)                                                                               |
|  MedicationRequest.authoredOn             |  authoredOn        |     1..1    | dateTime                                                                                           |
|  MedicationRequest.requester              |  requester         |     1..1    | Reference(US Core Practitioner Profile \| US Core Organization Profile \| US Core Patient Profile) |
|  MedicationRequest.dosageInstruction      |  dosageInstruction |     0..*    | Dosage                                                                                             |
|  MedicationRequest.dosageInstruction.text |  text |     0..1    | String                                                                                             |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example MedicationRequest Resource

An example mapping of a MedicationRequest is shown below:

<pre>
{
  "resourceType": "MedicationRequest",
  "id": "medrx0303",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0303</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0311; Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>groupIdentifier</b>: 983939393 (OFFICIAL)</p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: , , </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>51 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>21 days<span> (Details: UCUM code d = 'd')</span></td><td><a>Organization/f001</a></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>Therapeutic Brand <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution code 'TB' = 'therapeutic brand', given as 'Therapeutic Brand'})</span></td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>"
  },
  "contained": [
    {
      "resourceType": "Medication",
      "id": "med0311",
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "373994007",
            "display": "Prednisone 5mg tablet (Product)"
          }
        ]
      }
    }
  ],
  "identifier": [
    {
      "use": "official",
      "system": "http://www.bmc.nl/portal/prescriptions",
      "value": "12345689"
    }
  ],
  "status": "active",
  "intent": "order",
  "medicationReference": {
    "reference": "#med0311"
  },
  "subject": {
    "reference": "Patient/pat1",
    "display": "Donald Duck"
  },
  "encounter": {
    "reference": "Encounter/f001",
    "display": "encounter who leads to this prescription"
  },
  "authoredOn": "2015-01-15",
  "requester": {
    "reference": "Practitioner/f007",
    "display": "Patrick Pump"
  },
  "basedOn": [
    {
      "reference": "CarePlan/gpvisit"
    }
  ],
  "groupIdentifier": {
    "use": "official",
    "system": "http://www.bmc.nl/portal/prescriptions",
    "value": "983939393"
  },
  "note": [
    {
      "text": "Patient told to take with food"
    }
  ],
  "dosageInstruction": [
    {
      "sequence": 1,
      "text": "Take 4 tablets daily for 7 days starting January 16, 2015",
      "timing": {
        "repeat": {
          "boundsPeriod": {
            "start": "2015-01-16",
            "end": "2015-01-20"
          },
          "frequency": 1,
          "period": 1,
          "periodUnit": "d"
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral Route"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "421521009",
            "display": "Swallow - dosing instruction imperative (qualifier value)"
          }
        ]
      },
      "doseAndRate": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                "code": "ordered",
                "display": "Ordered"
              }
            ]
          },
          "doseQuantity": {
            "value": 4,
            "unit": "TAB",
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "TAB"
          }
        }
      ]
    },
    {
      "sequence": 2,
      "text": "Take 2 tablets daily for 7 days starting January 23, 2015",
      "timing": {
        "repeat": {
          "boundsPeriod": {
            "start": "2015-01-23",
            "end": "2015-01-30"
          },
          "frequency": 1,
          "period": 1,
          "periodUnit": "d"
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral Route"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "421521009",
            "display": "Swallow - dosing instruction imperative (qualifier value)"
          }
        ]
      },
      "doseAndRate": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                "code": "ordered",
                "display": "Ordered"
              }
            ]
          },
          "doseQuantity": {
            "value": 2,
            "unit": "TAB",
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "TAB"
          }
        }
      ]
    },
    {
      "sequence": 3,
      "text": "Take 1 tablets daily for 7 days starting January 31, 2015",
      "timing": {
        "repeat": {
          "boundsPeriod": {
            "start": "2015-01-31",
            "end": "2015-02-06"
          },
          "frequency": 1,
          "period": 1,
          "periodUnit": "d"
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral Route"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "421521009",
            "display": "Swallow - dosing instruction imperative (qualifier value)"
          }
        ]
      },
      "doseAndRate": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                "code": "ordered",
                "display": "Ordered"
              }
            ]
          },
          "doseQuantity": {
            "value": 1,
            "unit": "TAB",
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "TAB"
          }
        }
      ]
    }
  ],
  "dispenseRequest": {
    "validityPeriod": {
      "start": "2015-01-15",
      "end": "2016-01-15"
    },
    "numberOfRepeatsAllowed": 1,
    "quantity": {
      "value": 51,
      "unit": "TAB",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "expectedSupplyDuration": {
      "value": 21,
      "unit": "days",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "performer": {
      "reference": "Organization/f001"
    }
  },
  "substitution": {
    "allowedCodeableConcept": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          "code": "TB",
          "display": "Therapeutic Brand"
        }
      ]
    },
    "reason": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "FP",
          "display": "formulary policy"
        }
      ]
    }
  }
}
</pre>




[Next Page - US Core Organization](USCoreOrganization.html)


---

// File: input/pagecontent/USCoreOrganization.md

[Previous Page - US Core MedicationRequest](USCoreMedicationRequest.html)

When a Health Plan is documenting information about organizations in relation to the Member's Health History, they 
**SHOULD** use the
[US Core 3.1.1 Organization]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-organization.html) or
[US Core 6.1.0 Organization]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-organization.html) resource.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 Organization]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-organization.html) or
[US Core 6.1.0 Organization]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-organization.html) resource 
are:

{% include style_insert_table_blue.html %}

| R4 Element                                 | Name            | Cardinality | Type               |
|--------------------------------------------|-----------------|:-----------:|--------------------|
|  Organization.identifier                   |  identifier     |     0..*    | (Slice Definition) |
|  Organization.identifier:All Slices.system |  system         |     0..1    | uri                |
|  Organization.identifier:All Slices.value  |  value          |     0..1    | string             |
|  Organization.identifier:NPI               |  identifier:NPI |     0..1    | Identifier         |
|  Organization.identifier:NPI.system        |  system         |     1..1    | uri                |
|  Organization.active                       |  active         |     1..1    | boolean            |
|  Organization.name                         |  name           |     1..1    | string             |
|  Organization.telecom                      |  telecom        |     0..*    | ContactPoint       |
|  Organization.address                      |  address        |     0..*    | Address            |
|  Organization.address.line                 |  line           |     0..4    | string             |
|  Organization.address.city                 |  city           |     0..1    | string             |
|  Organization.address.state                |  state          |     0..1    | string             |
|  Organization.address.postalCode           |  postalCode     |     0..1    | string             |
|  Organization.address.country              |  country        |     0..1    | string             |

#### Example Organization resource

An example mapping of an Organization resource is shown below:

<pre>
{
  "resourceType" : "Organization",
  "id" : "saint-luke-w-endpoint",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <h1>Organization</h1>\n            <div>\n                <p>ID: 393872</p>\n                <p>Name: Saint Luke's Hospital of Kansas City </p>\n                <p>NPI: 1063494177</p>\n                <p>Phone:(816)932-2000</p>\n                <p>Address:4401 Wornall Rd,, MO, 64111</p>\n            </div>\n        </div>"
  },
  "contained" : [
    {
      "resourceType" : "Endpoint",
      "id" : "75",
      "status" : "active",
      "connectionType" : {
        "system" : "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        "code" : "direct-project"
      },
      "name" : "Dr. Ronald Bone Direct Address",
      "managingOrganization" : {
        "reference" : "Organization/example-organization-2"
      },
      "payloadType" : [
        {
          "coding" : [
            {
              "system" : "urn:oid:1.3.6.1.4.1.19376.1.2.3",
              "code" : "urn:hl7-org:sdwg:ccda-structuredBody:1.1"
            }
          ]
        }
      ],
      "payloadMimeType" : [
        "text/xml"
      ],
      "address" : "mailto:Interoperability@DirectAddress.com"
    }
  ],
  "identifier" : [
    {
      "system" : "http://example.org/fhir/sid/us-npi",
      "value" : "1063494177"
    },
    {
      "system" : "http://example.org/fhir/us/argo/sid/us-ein",
      "value" : "00-0000000"
    }
  ],
  "active" : true,
  "name" : "Saint Luke's Hospital of Kansas City",
  "telecom" : [
    {
      "system" : "phone",
      "value" : "(816)932-2000",
      "use" : "work"
    },
    {
      "system" : "other",
      "value" : "http://www.saintlukeshealthsystem.org/locations/saint-lukes-hospital-kansas-city",
      "use" : "work"
    }
  ],
  "address" : [
    {
      "text" : "3300 Washtenaw Avenue, Suite 227 Amherst MA 01002",
      "line" : [
        "4401 Wornall Rd,"
      ],
      "city" : "Amherst",
      "state" : "MA",
      "postalCode" : "64111"
    }
  ],
  "endpoint" : [
    {
      "reference" : "#75"
    }
  ]
}
</pre>



[Next Page - US Core Patient](USCorePatient.html)


---

// File: input/pagecontent/USCorePatient.md

[Previous Page - US Core Organization](USCoreOrganization.html)

The [US Core 3.1.1 Patient]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-patient.html) or
[US Core 6.1.0 Patient]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-patient.html) resource 
*SHALL** be used to express a member's demographic information.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 Patient]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-patient.html) or
[US Core 6.1.0 Patient]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-patient.html) resource
are:

{% include style_insert_table_blue.html %}

| R4 Element                      | Name               | Cardinality | Type                                |
|---------------------------------|--------------------|:-----------:|-------------------------------------|
|  Patient.us-core-race           |  us-core-race      |     0..1    | (Complex)                           |
|  Patient.us-core-ethnicity      |  us-core-ethnicity |     0..1    | (Complex)                           |
|  Patient.us-core-birthsex       |  us-core-birthsex  |     0..1    | code                                |
|  Patient.identifier             |  identifier        |     1..*    | Identifier                          |
|  Patient.identifier.system      |  system            |     1..1    | uri                                 |
|  Patient.identifier.value       |  value             |     1..1    | string                              |
|  Patient.name                   |  name              |     1..*    | HumanName                           |
|  Patient.name.family            |  family            |     0..1    | string                              |
|  Patient.name.given             |  given             |     0..*    | string                              |
|  Patient.telecom                |  telecom           |     0..*    | ContactPoint                        |
|  Patient.telecom.system         |  system            |     1..1    | code                                |
|  Patient.telecom.value          |  value             |     1..1    | string                              |
|  Patient.telecom.use            |  use               |     0..1    | code                                |
|  Patient.gender                 |  gender            |     1..1    | code                                |
|  Patient.birthDate              |  birthDate         |     0..1    | date                                |
|  Patient.address                |  address           |     0..*    | Address                             |
|  Patient.address.line           |  line              |     0..*    | string                              |
|  Patient.address.city           |  city              |     0..1    | string                              |
|  Patient.address.state          |  state             |     0..1    | string                              |
|  Patient.address.postalCode     |  postalCode        |     0..1    | string                              |
|  Patient.address.period         |  period            |     0..1    | Period                              |
|  Patient.communication          |  communication     |     0..*    | BackboneElement                     |
|  Patient.communication.language |  language          |     1..1    | CodeableConcept                     |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>


The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the Patient resource from the CPCDS file are:

| US Core Element       | Must Support | Cardinality | CARIN-BB Element           | CPCDS Element Mapping or Implementer Note                                                                                                                                                                                                           |
|-----------------------|:------------:|:-----------:|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Patient.meta.lastUpdated |              |     0..1    | Patient.meta.lastUpdated   | [{"163":"Member Demographics Last Updated Date"}] |
| Patient.us-core-race  |       S      |     0..1    | Patient.us-core-race       | [{"128":"Race Code"}]  |
| Patient.us-core-ethnicity |       S      |     0..1    | Patient.us-core-ethnicity  | [{"129":"Ethnicity"}]  |
| Patient.us-core-birthsex |       S      |     0..1    | Patient.us-core-birthsex   | [{"153":"Birth Sex"}]  |
| Patient.identifier    |       S      |     1..*    | Patient.identifier         | [{"MMI=1":"Member id"}, {"191":"Unique Member ID"}, {"PatnAcctNr=109, MedRecNr=110":"Patient account number, Medical record number"}]. Note: Assign Payer System URI for Member Ids in Patient.identifier.system. Set Member Id in Patient.identifier.value |
| Patient.identifier.system |       S      |     1..1    |                            | Note: Assign Payer System URI for Member Ids in Patient.identifier.system  |
| Patient.identifier.value |       S      |     1..1    |                            | Note: Set Member Id in Patient.identifier.value |
| Patient.name          |       S      |     1..*    | Patient.name               | [{"130":"Patient Name"}] Note: Split Member Name into Patient.name.family, Patient.name.given  |
| Patient.name.family   |       S      |     0..1    |                            | Note: Split Member Name into Patient.name.family, Patient.name.given |
| Patient.name.given    |       S      |     0..*    |                            | Note: Split Member Name into Patient.name.family, Patient.name.given |
| Patient.telecom       |       S      |     0..*    |                            | Note: Provide contact information from member record, if available |
| Patient.telecom.system |       S      |     1..1    |                            | Note: phone \| fax \| email \| pager \| url \| sms \| other - if avaiable  |
| Patient.telecom.value |       S      |     1..1    |                            | Note: provide contact information from member record, if available |
| Patient.telecom.use   |       S      |     0..1    |                            | Note: provide home \| work \| temp \| old \| mobile if known  |
| Patient.gender   |       S      |     1..1    | Patient.gender             | [{"71":"Gender code"}] |
| Patient.birthDate     |       S      |     0..1    | Patient.birthDate          | [{"70":"Date of birth"}] |
| Patient.deceasedBoolean |              |             | Patient.deceasedBoolean    | [{"150":"Deceased"}]   |
| Patient.deceasedDateTime |              |             | Patient.deceasedDateTime   | [{"124":"Date of death"}] |
| Patient.address       |       S      |     0..*    |                            | Note: Provide address elements, if available |
| Patient.address.line  |       S      |     0..*    | Patient.address.line       | [{"158":"Street Address"}] |
| Patient.address.city  |       S      |     0..1    |                            | Note: Provide city, if available |
| Patient.address.district |              |     0..1    | Patient.address.district   | [{"125":"County"}]  |
| Patient.address.state |       S      |     0..1    | Patient.address.state      | [{"126":"State"}]  |
| Patient.address.postalCode |       S      |     0..1    | Patient.address.postalCode | [{"131":"Zip"}]  |
| Patient.address.country |              |     0..1    | Patient.address.country    | [{"127":"Country"}]  |
| Patient.address.period |       S      |     0..1    |                            | Note: Provide validity period for address, if available |
| Patient.communication |       S      |     0..*    |                            | . Note: Provide preferred communication language via language code below, if available |
| Patient.communication.language |       S      |     1..1    |                            | Note: Provide preferred communication language, if available |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

The Member Number will be entered in the **identifier** field. The code **MB**  **SHALL** be used to identify the member identifier.  See the example below:

<pre>
{
      "use" : "member",
      "type" : {
        "coding" : [
          {
            "system" : "http://hl7.org/fhir/v2/0203",
            "code" : "MB",
            "display" : "Member Number"
          }
        ],
        "text" : "Health Plan Member Number"
      },
      "system" : "http://plan.healthplan.com",
      "value" : "987654321"
    }
</pre>




#### Example Patient Resource

An example mapping of a Patient resource is shown here:

<pre>
{
  "resourceType" : "Patient",
  "id" : "example",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns="http://www.w3.org/1999/xhtml">
			<p>
				<b>Generated Narrative with Details</b>
			</p>
			<p>
				<b>id</b>: example</p>
			<p>
				<b>identifier</b>: Medical Record Number = 1032702 (USUAL)</p>
			<p>
				<b>identifier</b>: Health Plan Member Number = 987654321 (USUAL)</p>
			<p>
				<b>active</b>: true</p>
			<p>
				<b>name</b>: Arthur B. Dent </p>
			<p>
				<b>telecom</b>: ph: 555-555-5555(HOME), amy.shaw@example.com</p>
			<p>
				<b>gender</b>: </p>
			<p>
				<b>birthsex</b>: Male</p>
			<p>
				<b>birthDate</b>: Jan 22, 1953</p>
			<p>
				<b>address</b>: 6518 Meadowridge Rd, Elkridge, MD 21075 US </p>
			<p>
				<b>race</b>: White, American Indian or Alaska Native, Asian, Shoshone, Filipino</p>
			<p>
				<b>ethnicity</b>: Hispanic or Latino, Dominican, Mexican</p>
		</div>"
  },
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
      "extension" : [
        {
          "url" : "ombCategory",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "2106-3",
            "display" : "White"
          }
        },
        {
          "url" : "ombCategory",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "1002-5",
            "display" : "American Indian or Alaska Native"
          }
        },
        {
          "url" : "ombCategory",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "2028-9",
            "display" : "Asian"
          }
        },
        {
          "url" : "detailed",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "1586-7",
            "display" : "Shoshone"
          }
        },
        {
          "url" : "detailed",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "2036-2",
            "display" : "Filipino"
          }
        },
        {
          "url" : "text",
          "valueString" : "Mixed"
        }
      ]
    },
    {
      "url" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      "extension" : [
        {
          "url" : "ombCategory",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "2135-2",
            "display" : "Hispanic or Latino"
          }
        },
        {
          "url" : "detailed",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "2184-0",
            "display" : "Dominican"
          }
        },
        {
          "url" : "detailed",
          "valueCoding" : {
            "system" : "urn:oid:2.16.840.1.113883.6.238",
            "code" : "2148-5",
            "display" : "Mexican"
          }
        },
        {
          "url" : "text",
          "valueString" : "Hispanic or Latino"
        }
      ]
    },
    {
      "url" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
      "valueCode" : "M"
    }
  ],
  "identifier" : [
    {
      "use" : "member",
      "type" : {
        "coding" : [
          {
            "system" : "http://hl7.org/fhir/v2/0203",
            "code" : "MB",
            "display" : "Member Number"
          }
        ],
        "text" : "Health Plan Member Number"
      },
      "system" : "http://plan.healthplan.com",
      "value" : "987654321"
    },
    {
      "use" : "usual",
      "type" : {
        "coding" : [
          {
            "system" : "http://hl7.org/fhir/v2/0203",
            "code" : "MR",
            "display" : "Medical Record Number"
          }
        ],
        "text" : "Medical Record Number"
      },
      "system" : "http://hospital.smarthealthit.org",
      "value" : "1032702"
    }
  ],
  "active" : true,
  "name" : [
    {
      "family" : "Dent",
      "given" : [
        "Arthur",
        "B."
      ]
    }
  ],
  "telecom" : [
    {
      "system" : "phone",
      "value" : "555-555-5555",
      "use" : "home"
    },
    {
      "system" : "email",
      "value" : "arthur.dent@example.com"
    }
  ],
  "gender" : "male",
  "birthDate" : "1953-01-22",
  "address" : [
    {
      "line" : [
        "6518 Meadowridge Rd"
      ],
      "city" : "Elkridge",
      "state" : "MD",
      "postalCode" : "21075",
      "country" : "US"
    }
  ]
}
</pre>

Refer to the US Core Additional examples of the [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) or 
[US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) Implementation Guide for further examples of completed 
Patient Profiles.



[Next Page - US Core Pediatric BMI for Age Observation](USCorePediatricBMIforAgeObservation.html)


---

// File: input/pagecontent/USCorePediatricBMIforAgeObservation.md

[Previous Page - US Core Patient](USCorePatient.html)

The [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) IG profiles the Observation resource for a variety of purposes. 
For example:
- [Smoking status]({{site.data.fhir.ver.uscore3}}/Observation-some-day-smoker.html)
- [Pediatric BMI for Age]({{site.data.fhir.ver.uscore3}}/Observation-pediatric-bmi-example.html)
- [Pediatric Weight for Height]({{site.data.fhir.ver.uscore3}}/Observation-pediatric-wt-example.html)

[US Core 6.1.0 ]({{site.data.fhir.ver.uscore6}}) defines those same profiles:
- [Smoking status]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-smokingstatus.html)
- [Pediatric BMI for Age]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-bmi-for-age.html)
- [Pediatric Weight for Height]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-weight-for-height.html)


The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the 
[US Core Observation]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-observation-lab.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                 | Name              | Cardinality | Type                               |
|--------------------------------------------|-------------------|:-----------:|------------------------------------|
|  Observation.status                        |  status           |     1..1    | code                               |
|  Observation.category                      |  category         |     1..*    | (Slice Definition)                 |
|  Observation.category:VSCat                |  category:VSCat   |     1..1    | CodeableConcept                    |
|  Observation.category:VSCat.coding         |  coding           |     1..*    | Coding                             |
|  Observation.category:VSCat.coding.system  |  system           |     1..1    | uri                                |
|  Observation.category:VSCat.coding.code    |  code             |     1..1    | code                               |
|  Observation.code                          |  code             |     1..1    | CodeableConcept                    |
|  Observation.code.coding                   |  coding           |     1..*    | Coding                             |
|  Observation.code.coding.system            |  system           |     1..1    | uri                                |
|  Observation.code.coding.code              |  code             |     1..1    | code                               |
|  Observation.subject                       |  subject          |     1..1    | Reference(US Core Patient Profile) |
|  Observation.effective[x]                  |  effective[x]     |     1..1    |                                    |
|  Observation.value[x]                      |  value[x]         |     0..1    | (Slice Definition)                 |
|  Observation.value[x]:valueQuantity.value  |  value            |     1..1    | decimal                            |
|  Observation.value[x]:valueQuantity.unit   |  unit             |     1..1    | string                             |
|  Observation.value[x]:valueQuantity.system |  system           |     1..1    | uri                                |
|  Observation.value[x]:valueQuantity.code   |  code             |     1..1    | code                               |
|  Observation.dataAbsentReason              |  dataAbsentReason |     0..1    | CodeableConcept                    |
|  Observation.component                     |  component        |     0..*    | BackboneElement                    |
|  Observation.component.code                |  code             |     1..1    | CodeableConcept                    |
|  Observation.component.value[x]            |  value[x]         |     0..1    |                                    |
|  Observation.dataAbsentReason              |  dataAbsentReason |     0..1    | CodeableConcept                    |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>


#### An Example BMI Age Observation Resource

US Core Pediatric BMI for Age example: US Core 3.1.1 Pediatric BMI for Age]({{site.data.fhir.ver.uscore3}}/StructureDefinition-pediatric-bmi-for-age.html)
<pre>
{
  "resourceType" : "Observation",
  "id" : "pediatric-bmi-example",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/pediatric-bmi-for-age"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><p><b>id</b>: pediatric-bmi-example</p><p><b>meta</b>: </p><p></p><p><b>category</b>: <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category vital-signs}\">Vital Signs</span></p><p><b>code</b>: <span title=\"Codes: {http://loinc.org 59576-9}\">BMI</span></p><p><b>subject</b>: <a href=\"Patient-child-example.html\">Child Example. Generated Summary: id: child-example; Medical Record Number: 1032704 (USUAL); active; Child Example ; ph: 555-555-5555(HOME); gender: male; birthDate: 2016-01-15</a></p><p><b>encounter</b>: <span>GP Visit</span></p><p><b>effective</b>: 05/05/2019 5:12:29 AM</p><p><b>value</b>: 65 %</p><p><b>note</b>: CDC Males, 2-20 years Chart</p></div>"
  },
  "status" : "final",
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
          "code" : "vital-signs",
          "display" : "Vital Signs"
        }
      ],
      "text" : "Vital Signs"
    }
  ],
  "code" : {
    "coding" : [
      {
        "system" : "http://loinc.org",
        "code" : "59576-9",
        "display" : "Body mass index (BMI) [Percentile] Per age and sex"
      }
    ],
    "text" : "BMI"
  },
  "subject" : {
    "reference" : "Patient/child-example",
    "display" : "Child Example"
  },
  "encounter" : {
    "display" : "GP Visit"
  },
  "effectiveDateTime" : "2019-05-04T12:12:29-07:00",
  "valueQuantity" : {
    "value" : 65,
    "unit" : "%",
    "system" : "http://unitsofmeasure.org",
    "code" : "%"
  },
  "note" : [
    {
      "text" : "CDC Males, 2-20 years Chart"
    }
  ]
}
</pre>


[Next Page - US Core Pediatric Head Occipital-frontal Circumference Observation](USCorePediatricHeadOccipital.html)


---

// File: input/pagecontent/USCorePediatricHeadOccipital.md

[Previous Page - US Core Pediatric BMI for Age Observation](USCorePediatricBMIforAgeObservation.html)

The US Core IG profiles the Observation resource for a variety of purposes. For example:
- [Smoking status](https://hl7.org/fhir/us/core/Observation-some-day-smoker.html)
- [Pediatric BMI for Age](http://hl7.org/fhir/us/core/Observation-pediatric-bmi-example.html)
- [Pediatric Weight for Height](https://hl7.org/fhir/us/core/Observation-pediatric-wt-example.html)

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the [US Core Observation](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                 | Name              | Cardinality | Type                               |
|--------------------------------------------|-------------------|:-----------:|------------------------------------|
|  Observation.status                        |  status           |     1..1    | code                               |
|  Observation.category                      |  category         |     1..*    | (Slice Definition)                 |
|  Observation.category:VSCat                |  category:VSCat   |     1..1    | CodeableConcept                    |
|  Observation.category:VSCat.coding         |  coding           |     1..*    | Coding                             |
|  Observation.category:VSCat.coding.system  |  system           |     1..1    | uri                                |
|  Observation.category:VSCat.coding.code    |  code             |     1..1    | code                               |
|  Observation.code                          |  code             |     1..1    | CodeableConcept                    |
|  Observation.code.coding                   |  coding           |     1..*    | Coding                             |
|  Observation.code.coding.system            |  system           |     1..1    | uri                                |
|  Observation.code.coding.code              |  code             |     1..1    | code                               |
|  Observation.subject                       |  subject          |     1..1    | Reference(US Core Patient Profile) |
|  Observation.effective[x]                  |  effective[x]     |     1..1    |                                    |
|  Observation.value[x]                      |  value[x]         |     0..1    | (Slice Definition)                 |
|  Observation.value[x]:valueQuantity.value  |  value            |     1..1    | decimal                            |
|  Observation.value[x]:valueQuantity.unit   |  unit             |     1..1    | string                             |
|  Observation.value[x]:valueQuantity.system |  system           |     1..1    | uri                                |
|  Observation.value[x]:valueQuantity.code   |  code             |     1..1    | code                               |
|  Observation.dataAbsentReason              |  dataAbsentReason |     0..1    | CodeableConcept                    |
|  Observation.component                     |  component        |     0..*    | BackboneElement                    |
|  Observation.component.code                |  code             |     1..1    | CodeableConcept                    |
|  Observation.component.value[x]            |  value[x]         |     0..1    |                                    |
|  Observation.dataAbsentReason              |  dataAbsentReason |     0..1    | CodeableConcept                    |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### An Example Head Occipital-frontal Circumference Observation Resource

US Core Pediatric Head Occipital-frontal Circumference Percentile example: [https://hl7.org/fhir/us/core/Observation-ofc-percentile.html](https://hl7.org/fhir/us/core/Observation-ofc-percentile.html)


[Next Page - US Core Pediatric Weight for Height Observation](USCorePediatricWeightforHeightObservation.html)


---

// File: input/pagecontent/USCorePediatricWeightforHeightObservation.md

[Previous Page - US Core Pediatric Head Occipital-frontal Circumference Observation](USCorePediatricHeadOccipital.html)

The [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) IG profiles the Observation resource for a variety of purposes.
For example:
- [Smoking status]({{site.data.fhir.ver.uscore3}}/Observation-some-day-smoker.html)
- [Pediatric BMI for Age]({{site.data.fhir.ver.uscore3}}/Observation-pediatric-bmi-example.html)
- [Pediatric Weight for Height]({{site.data.fhir.ver.uscore3}}/Observation-pediatric-wt-example.html)

[US Core 6.1.0 ]({{site.data.fhir.ver.uscore6}}) defines those same profiles:
- [Smoking status]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-smokingstatus.html)
- [Pediatric BMI for Age]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-bmi-for-age.html)
- [Pediatric Weight for Height]({{site.data.fhir.ver.uscore6}}/StructureDefinition-pediatric-weight-for-height.html)


The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core Observation]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-observation-lab.html) resource are:


{% include style_insert_table_blue.html %}

| R4 Element                                 | Name              | Cardinality | Type                               |
|--------------------------------------------|-------------------|:-----------:|------------------------------------|
|  Observation.status                        |  status           |     1..1    | code                               |
|  Observation.category                      |  category         |     1..*    | (Slice Definition)                 |
|  Observation.category:VSCat                |  category:VSCat   |     1..1    | CodeableConcept                    |
|  Observation.category:VSCat.coding         |  coding           |     1..*    | Coding                             |
|  Observation.category:VSCat.coding.system  |  system           |     1..1    | uri                                |
|  Observation.category:VSCat.coding.code    |  code             |     1..1    | code                               |
|  Observation.code                          |  code             |     1..1    | CodeableConcept                    |
|  Observation.code.coding                   |  coding           |     1..*    | Coding                             |
|  Observation.code.coding.system            |  system           |     1..1    | uri                                |
|  Observation.code.coding.code              |  code             |     1..1    | code                               |
|  Observation.subject                       |  subject          |     1..1    | Reference(US Core Patient Profile) |
|  Observation.effective[x]                  |  effective[x]     |     1..1    |                                    |
|  Observation.value[x]                      |  value[x]         |     0..1    | (Slice Definition)                 |
|  Observation.value[x]:valueQuantity.value  |  value            |     1..1    | decimal                            |
|  Observation.value[x]:valueQuantity.unit   |  unit             |     1..1    | string                             |
|  Observation.value[x]:valueQuantity.system |  system           |     1..1    | uri                                |
|  Observation.value[x]:valueQuantity.code   |  code             |     1..1    | code                               |
|  Observation.dataAbsentReason              |  dataAbsentReason |     0..1    | CodeableConcept                    |
|  Observation.component                     |  component        |     0..*    | BackboneElement                    |
|  Observation.component.code                |  code             |     1..1    | CodeableConcept                    |
|  Observation.component.value[x]            |  value[x]         |     0..1    |                                    |
|  Observation.dataAbsentReason              |  dataAbsentReason |     0..1    | CodeableConcept                    |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### An Example Pediatric Weight For Height Observation Resource

US Core Pediatric Weight for Height Observation: [https://hl7.org/fhir/us/core/Observation-pediatric-wt-example.html](https://hl7.org/fhir/us/core/Observation-pediatric-wt-example.html)
<pre>
{
  "resourceType" : "Observation",
  "id" : "pediatric-wt-example",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/pediatric-weight-for-height"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><p><b>id</b>: pediatric-wt-example</p><p><b>meta</b>: </p><p></p><p><b>category</b>: <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/observation-category vital-signs}\">Vital Signs</span></p><p><b>code</b>: <span title=\"Codes: {http://loinc.org 77606-2}\">BMI</span></p><p><b>subject</b>: <a href=\"Patient-infant-example.html\">Infant Example. Generated Summary: id: infant-example; Medical Record Number: 1032703 (USUAL); active; Infant Example ; ph: 555-555-5555(HOME); gender: male; birthDate: 2020-06-02</a></p><p><b>encounter</b>: <span>GP Visit</span></p><p><b>effective</b>: 2020-07-02</p><p><b>value</b>: 65 %</p><p><b>note</b>: WHO Males, 0-2 years Chart</p></div>"
  },
  "status" : "final",
  "category" : [
    {
      "coding" : [
        {
          "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
          "code" : "vital-signs",
          "display" : "Vital Signs"
        }
      ],
      "text" : "Vital Signs"
    }
  ],
  "code" : {
    "coding" : [
      {
        "system" : "http://loinc.org",
        "code" : "77606-2",
        "display" : "Weight-for-length Per age and sex"
      }
    ],
    "text" : "BMI"
  },
  "subject" : {
    "reference" : "Patient/infant-example",
    "display" : "Infant Example"
  },
  "encounter" : {
    "display" : "GP Visit"
  },
  "effectiveDateTime" : "2020-07-02",
  "valueQuantity" : {
    "value" : 65,
    "unit" : "%",
    "system" : "http://unitsofmeasure.org",
    "code" : "%"
  },
  "note" : [
    {
      "text" : "WHO Males, 0-2 years Chart"
    }
  ]
}
</pre>




[Next Page - US Core Practitioner](USCorePractitioner.html)


---

// File: input/pagecontent/USCorePractitioner.md

[Previous Page - US Core Pediatric Weight for Height Observation](USCorePediatricWeightforHeightObservation.html)

The [US Core 3.1.1 Practitioner]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-practitioner.html) or
[US Core 6.1.0 Practitioner]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-practitioner.html) 
**SHALL** be used to record information about Practitioners.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 Practitioner]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-practitioner.html) or
[US Core 6.1.0 Practitioner]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-practitioner.html)
resource are:

{% include style_insert_table_blue.html %}

| R4 Element                                 | Name            | Cardinality | Type               |
|--------------------------------------------|-----------------|:-----------:|--------------------|
|  Practitioner.identifier                   |  identifier     |     1..*    | (Slice Definition) |
|  Practitioner.identifier:All Slices.system |  system         |     1..1    | uri                |
|  Practitioner.identifier:All Slices.value  |  value          |     1..1    | string             |
|  Practitioner.identifier:NPI               |  identifier:NPI |     0..1    | Identifier         |
|  Practitioner.identifier:NPI.system        |  system         |     1..1    | uri                |
|  Practitioner.name                         |  name           |     1..*    | HumanName          |
|  Practitioner.name.family                  |  family         |     1..1    | string             |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>


#### Example Practitioner Resource

An example mapping of a Practitioner resource is shown here:

<pre>
{
  "resourceType" : "Practitioner",
  "id" : "practitioner-1",
  "meta" : {
    "profile" : [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
    ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: practitioner-1</p><p><b>meta</b>: </p><p><b>identifier</b>: 9941339108, 25456</p><p><b>name</b>: Ronald Bone </p><p><b>address</b>: 1003 Healthcare Drive Amherst MA 01002 (HOME)</p></div>"
  },
  "identifier" : [
    {
      "system" : "http://hl7.org.fhir/sid/us-npi",
      "value" : "9941339108"
    },
    {
      "system" : "http://www.acme.org/practitioners",
      "value" : "25456"
    }
  ],
  "name" : [
    {
      "family" : "Bone",
      "given" : [
        "Ronald"
      ],
      "prefix" : [
        "Dr"
      ]
    }
  ],
  "address" : [
    {
      "use" : "home",
      "line" : [
        "1003 Healthcare Drive"
      ],
      "city" : "Amherst",
      "state" : "MA",
      "postalCode" : "01002"
    }
  ]
}
</pre>

Refer to the US Core Additional examples of the [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) or
[US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) Implementation Guide for further examples of completed
Practitioner Profiles.


[Next Page - US Core PractitionerRole](USCorePractitionerRole.html)


---

// File: input/pagecontent/USCorePractitionerRole.md

[Previous Page - US Core Practitioner](USCorePractitioner.html)

The [US Core 3.1.1 PractitionerRole]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-practitionerrole.html) or
[US Core 6.1.0 PractitionerRole]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-practitionerrole.html)
**SHALL** be used to record information about the roles that practitioners take in providing services to their patients.

The essential fields (Must Support or Cardinality greater than 0..*) to be provided in the
[US Core 3.1.1 PractitionerRole]({{site.data.fhir.ver.uscore3}}/StructureDefinition-us-core-practitionerrole.html) or
[US Core 6.1.0 PractitionerRole]({{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-practitionerrole.html)
resource are:

{% include style_insert_table_blue.html %}

| R4 Element                       | Name          | Cardinality | Type                                    |
|----------------------------------|---------------|:-----------:|-----------------------------------------|
|  PractitionerRole.practitioner   |  practitioner |     1..1    | Reference(US Core Practitioner Profile) |
|  PractitionerRole.organization   |  organization |     1..1    | Reference(US Core Organization Profile) |
|  PractitionerRole.code           |  code         |     0..*    | CodeableConcept                         |
|  PractitionerRole.specialty      |  specialty    |     0..*    | CodeableConcept                         |
|  PractitionerRole.location       |  location     |     0..*    | Reference(Location)                     |
|  PractitionerRole.telecom        |  telecom      |     0..*    | ContactPoint                            |
|  PractitionerRole.telecom.system |  system       |     1..1    | code                                    |
|  PractitionerRole.telecom.value  |  value        |     1..1    | string                                  |
|  PractitionerRole.endpoint       |  endpoint     |     0..*    | Reference(Endpoint)                     |

<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>

#### Example PractitionerRole Resource

An example mapping of an PractitionerRole resource is shown here:

<pre>
{
  "resourceType" : "Bundle",
  "id" : "66c8856b-ba11-4876-8aa8-467aad8c11a2",
  "type" : "searchset",
  "total" : 1,
  "link" : [
    {
      "relation" : "self",
      "url" : "http://52.90.126.238:8080/fhir/baseDstu3/PractitionerRole?_id=PractitionerRole-1&_include=PractitionerRole%3Apractitioner&_include=PractitionerRole%3Aendpoint"
    }
  ],
  "entry" : [
    {
      "fullUrl" : "http://52.90.126.238:8080/fhir/baseDstu3/PractitionerRole/PractitionerRole-1",
      "resource" : {
        "resourceType" : "PractitionerRole",
        "id" : "PractitionerRole-1",
        "meta" : {
          "profile" : [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
          ]
        },
        "text" : {
          "status" : "generated",
          "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: PractitionerRole-1</p><p><b>meta</b>: </p><p><b>practitioner</b>: <a href=\"Practitioner/Practitioner-1011\">Brenda Jennings Richard MD</a></p><p><b>organization</b>: <a href=\"Organization-acme-lab.html\">Acme Lab. Generated Summary: id: acme-lab; 1144221847, 2523423456; active; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/organization-type prov}\">Healthcare Provider</span>; name: Acme Labs; ph: (+1) 734-677-7777, hq@acme.org</a></p><p><b>code</b>: Primary Care <span style=\"background: LightGoldenRodYellow\">(Details : {http://nucc.org/provider-taxonomy code '261QP2300X' = 'Primary Care', given as 'Primary Care'})</span></p><p><b>specialty</b>: General Practice <span style=\"background: LightGoldenRodYellow\">(Details : {http://nucc.org/provider-taxonomy code '208D00000X' = 'General Practice', given as 'General Practice'})</span></p><p><b>location</b>: <a href=\"Location-hl7east.html\">Health Level Seven International. Generated Summary: id: hl7east; 29; status: active; name: Health Level Seven International - Amherst; description: HL7 Headquarters - East; ph: (+1) 734-677-7777</a></p><p><b>endpoint</b>: </p><ul><li><a href=\"http://52.90.126.238:8080/fhir/baseDstu3/Endpoint/Endpoint-71\">Westwood Physicians Organization ADT</a></li><li><a href=\"http://52.90.126.238:8080/fhir/baseDstu3/Endpoint/Endpoint-71\">Brenda.Jennings.Richard.MD@direct.example.org</a></li></ul></div>"
        },
        "practitioner" : {
          "reference" : "Practitioner/Practitioner-1011",
          "display" : "Brenda Jennings Richard MD"
        },
        "organization" : {
          "reference" : "Organization/acme-lab",
          "display" : "Acme Lab"
        },
        "code" : [
          {
            "coding" : [
              {
                "system" : "http://nucc.org/provider-taxonomy",
                "code" : "261QP2300X",
                "display" : "Primary Care"
              }
            ]
          }
        ],
        "specialty" : [
          {
            "coding" : [
              {
                "system" : "http://nucc.org/provider-taxonomy",
                "code" : "208D00000X",
                "display" : "General Practice"
              }
            ]
          }
        ],
        "location" : [
          {
            "reference" : "Location/hl7east",
            "display" : "Health Level Seven International"
          }
        ],
        "endpoint" : [
          {
            "reference" : "http://52.90.126.238:8080/fhir/baseDstu3/Endpoint/Endpoint-71",
            "display" : "Westwood Physicians Organization ADT"
          },
          {
            "reference" : "http://52.90.126.238:8080/fhir/baseDstu3/Endpoint/Endpoint-71",
            "display" : "Brenda.Jennings.Richard.MD@direct.example.org"
          }
        ]
      },
      "search" : {
        "mode" : "match"
      }
    },
    {
      "fullUrl" : "http://52.90.126.238:8080/fhir/baseDstu3/Practitioner/Practitioner-1011",
      "resource" : {
        "resourceType" : "Practitioner",
        "id" : "Practitioner-1011",
        "meta" : {
          "profile" : [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
          ]
        },
        "text" : {
          "status" : "generated",
          "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: Practitioner-1011</p><p><b>meta</b>: </p><p><b>identifier</b>: US Social Security Number = 000001011 (OFFICIAL), US National Provider Identifier = 9999991011 (OFFICIAL), Michigan Common Key Service Identifier = d46f70565a1042f6a6ece48dd81b408f (OFFICIAL)</p><p><b>name</b>: Brenda Jennings Richard </p><p><b>telecom</b>: ph: 313-555-6868(HOME), ph: 313-555-6443(WORK)</p><p><b>address</b>: 346 W Plum Avenu Dearborn MI 48123</p><p><b>gender</b>: female</p><p><b>birthDate</b>: Nov 15, 1976</p><h3>Qualifications</h3><table class=\"grid\"><tr><td>-</td><td><b>Identifier</b></td><td><b>Code</b></td><td><b>Issuer</b></td></tr><tr><td>*</td><td>Michigan Medical License = LARA-1011 (OFFICIAL)</td><td>Medical Doctor <span style=\"background: LightGoldenRodYellow\">(Details : {http://michigan.gov/lara/license-type code '4305' = '4305', given as 'Medical Doctor'})</span></td><td>Michigan Department of Licensing and Regulatory Affairs</td></tr></table></div>"
        },
        "identifier" : [
          {
            "use" : "official",
            "type" : {
              "coding" : [
                {
                  "system" : "http://terminology.hl7.org/CodeSystem/identifier-type",
                  "code" : "SB",
                  "display" : "Social Beneficiary Identifier"
                }
              ],
              "text" : "US Social Security Number"
            },
            "system" : "http://hl7.org/fhir/sid/us-ssn",
            "value" : "000001011"
          },
          {
            "use" : "official",
            "type" : {
              "coding" : [
                {
                  "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code" : "PRN",
                  "display" : "Provider number"
                }
              ],
              "text" : "US National Provider Identifier"
            },
            "system" : "http://hl7.org/fhir/sid/us-npi",
            "value" : "9999991011"
          },
          {
            "use" : "official",
            "type" : {
              "coding" : [
                {
                  "system" : "http://terminology.hl7.org/CodeSystem/identifier-type",
                  "code" : "SB",
                  "display" : "Social Beneficiary Identifier"
                }
              ],
              "text" : "Michigan Common Key Service Identifier"
            },
            "system" : "http://mihin.org/fhir/cks",
            "value" : "d46f70565a1042f6a6ece48dd81b408f"
          }
        ],
        "name" : [
          {
            "family" : "Richard",
            "given" : [
              "Brenda",
              "Jennings"
            ],
            "suffix" : [
              "MD"
            ]
          }
        ],
        "telecom" : [
          {
            "system" : "phone",
            "value" : "313-555-6868",
            "use" : "home"
          },
          {
            "system" : "phone",
            "value" : "313-555-6443",
            "use" : "work"
          }
        ],
        "address" : [
          {
            "text" : "346 W Plum Avenu Dearborn MI 48123",
            "line" : [
              "346 W Plum Avenue"
            ],
            "city" : "Dearborn",
            "state" : "MI",
            "postalCode" : "48126"
          }
        ],
        "gender" : "female",
        "birthDate" : "1976-11-15",
        "qualification" : [
          {
            "identifier" : [
              {
                "use" : "official",
                "type" : {
                  "coding" : [
                    {
                      "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "MD",
                      "display" : "Medical License number"
                    }
                  ],
                  "text" : "Michigan Medical License"
                },
                "system" : "http://michigan.gov/fhir/medical-license",
                "value" : "LARA-1011",
                "assigner" : {
                  "display" : "State of Michigan"
                }
              }
            ],
            "code" : {
              "coding" : [
                {
                  "system" : "http://michigan.gov/lara/license-type",
                  "code" : "4305",
                  "display" : "Medical Doctor"
                }
              ]
            },
            "issuer" : {
              "display" : "Michigan Department of Licensing and Regulatory Affairs"
            }
          }
        ]
      },
      "search" : {
        "mode" : "include"
      }
    },
    {
      "fullUrl" : "http://52.90.126.238:8080/fhir/baseDstu3/Endpoint/Endpoint-71",
      "resource" : {
        "resourceType" : "Endpoint",
        "id" : "71",
        "text" : {
          "status" : "generated",
          "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 71</p><p><b>status</b>: active</p><p><b>connectionType</b>: Direct Project (Details: http://terminology.hl7.org/CodeSystem/endpoint-connection-type code direct-project = 'Direct Project', stated as 'null')</p><p><b>name</b>: Brenda.Jennings.Richard.MD@direct.example.org</p><p><b>managingOrganization</b>: <a href=\"Organization-acme-lab.html\">Generated Summary: id: acme-lab; 1144221847, 2523423456; active; <span title=\"Codes: {http://terminology.hl7.org/CodeSystem/organization-type prov}\">Healthcare Provider</span>; name: Acme Labs; ph: (+1) 734-677-7777, hq@acme.org</a></p><p><b>payloadType</b>: urn:hl7-org:sdwg:ccda-structuredBody:1.1 <span style=\"background: LightGoldenRodYellow\">(Details : {urn:oid:1.3.6.1.4.1.19376.1.2.3 code 'urn:hl7-org:sdwg:ccda-structuredBody:1.1' = 'urn:hl7-org:sdwg:ccda-structuredBody:1.1)</span></p><p><b>payloadMimeType</b>: text/xml</p><p><b>address</b>: <a href=\"mailto:Brenda.Jennings.Richard.MD@direct.example.org\">Brenda.Jennings.Richard.MD@direct.example.org</a></p></div>"
        },
        "status" : "active",
        "connectionType" : {
          "system" : "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
          "code" : "direct-project"
        },
        "name" : "Brenda.Jennings.Richard.MD@direct.example.org",
        "managingOrganization" : {
          "reference" : "Organization/acme-lab"
        },
        "payloadType" : [
          {
            "coding" : [
              {
                "system" : "urn:oid:1.3.6.1.4.1.19376.1.2.3",
                "code" : "urn:hl7-org:sdwg:ccda-structuredBody:1.1"
              }
            ]
          }
        ],
        "payloadMimeType" : [
          "text/xml"
        ],
        "address" : "mailto:Brenda.Jennings.Richard.MD@direct.example.org"
      },
      "search" : {
        "mode" : "include"
      }
    }
  ]
}
</pre>

Refer to the US Core Additional examples of the [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}) or
[US Core 6.1.0]({{site.data.fhir.ver.uscore6}}) Implementation Guide for further examples of completed
PractitionerRole Profiles.



[Next Page - PDex Prior Authorization](PDexPriorAuthorization.html)


---

