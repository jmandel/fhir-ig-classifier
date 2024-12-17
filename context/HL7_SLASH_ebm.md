File: repos/HL7_SLASH_ebm/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.ebm
canonical: http://hl7.org/fhir/uv/ebm
name: EBM-IG
title: Evidence Based Medicine on FHIR Implementation Guide
# description: Example Implementation Guide for getting started with SUSHI
status: draft # draft | active | retired | unknown
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: cds  # <<< The value must be the code for the workgroup
version: 2.0.0-ballot
fhirVersion: 6.0.0-ballot2 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2024+
releaseLabel: ballot # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
# license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World" # https://www.hl7.org/fhir/valueset-jurisdiction.html
publisher:
  name: HL7 International / Clinical Decision Support
  url: http://www.hl7.org/Special/committees/dss

dependencies:
  hl7.fhir.uv.extensions.r5: latest
  hl7.terminology.r5: latest

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
# dependencies:
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
    title: Introduction
  evidence.md:
    title: Evidence Profiles
  evidencevariable.md:
    title: EvidenceVariable Profiles
  group.md:
    title: Group Profiles
  citation.md:
    title: Citation Profiles
  artifactassessment.md:
    title: ArtifactAssessment Profiles
  composition.md:
    title: Composition Profiles
  otherprofiles.md:
    title: Other Profiles
  profiles.md:
  extensions.md:
  terminologies.md:
  examples.md:
  downloads.md:

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
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#
parameters:
  auto-oid-root: 2.16.840.1.113883.4.642.40.44
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
  Profiles:
    Evidence: evidence.html
    EvidenceVariable: evidencevariable.html
    Group: group.html
    Citation: citation.html
    ArtifactAssessment: artifactassessment.html
    Composition: composition.html
    Other: otherprofiles.html
    All: profiles.html
  Extensions: extensions.html
  Terminologies: terminologies.html
  Examples: examples.html
  Artifacts: artifacts.html
  Downloads: downloads.html

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

// File: input/pagecontent/artifactassessment.md

### Understanding the ArtifactAssessment Resource

The <b>ArtifactAssessment Resource</b> provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.

The <b>ArtifactAssessment Resource</b> represents one or more assessments of another record or resource. The resource captures metadata about the assessment, as well as the data for the results of the assessment which might include comments, classifications, ratings, questions, and responses.

The <b>ArtifactAssessment Resource</b> provides a structure to communicate judgments or qualitative data about a record (a resource or other set of data with a known identity or URL by which it can be accessed), including comments, corrections, classifications, and ratings. The <b>ArtifactAssessment Resource</b> is used when the content attribution and management rights differ from the record being commented upon, or the commenter desires to separate the comments from the target record. The scope is intended to cover assessments (added information) regarding clinical records about individual human subjects, assessments (added information) regarding healthcare provision for individual persons (such as care plans), and assessments (added information) regarding records related to community knowledge such as scientific evidence and group-oriented guidance.

The artifact[x] element is required and uses a Reference, canonical, or uri datatype to express the single artifact that the assessment is about.

The content element is a BackboneElement and repeatable recursively with a component element. Each content element may contain any of summary (a markdown comment), type (a CodeableConcept to classify the type of content), classifier (an array of CodeableConcept for the classifier values), quantity (a Quantity for the classifier value), author (a Reference to the creator of the content), path (an array of uri values if the content is about a part of the artifact[x]), relatedArtifact (an array of RelatedArtifact), freeToShare (a boolean), and component (an array of BackBoneElement using the content structure).

<b>ArtifactAssessment</b> is about the content of a Resource and not about the provenance of the Resource so should not be confused with <b>Provenance</b>.

<b>ArtifactAssessment</b> is not used for communications that are not about a Resource so should not be confused with <b>Communication</b> or <b>Composition</b> (or profiles of Composition) which may be used for the primary communication about the subject matter.

<b>Observation Resource</b> is used extensively for observations about people, groups, devices, locations, substances, and procedures – not about the record describing these entities. <b>ArtifiactAssessment</b> is used for observations where the subject is the artifact or record, not the entity described by the artifact. Simple "assessments" about an <b>Observation</b> such as status, dataAbsentReason, interpretation and note would use the <b>Observation Resource</b> where this is already structured. <b>ArtifactAssessment Resource</b> may be used for complex assessments of an Observation such as justifications for reasons to correct the record.

Across healthcare communities, there are an extensive number of comments and corrections regarding resources where the commenter is not able or permitted to modify the resource content, and there are many situations in which assessments with classifications and ratings of medical record content are made by parties who would not include the assessments in the medical record. Across the academic, scientific, quality measurement development, and clinical decision support communities there is an extensive need to report assessments and feedback about resources and records. These artifact assessments may take multiple forms (including text, classifications, ratings or measurements) and might or might not be created, queried and maintained independently from the artifact being rated or commented upon.

### Profiles of ArtifactAssessment Resource

All Profiles of <b>ArtifactAssessment</b> include extensions for url, description, and author.

### Comment Profile of ArtifactAssessment Resource

The **[Comment Profile][Comment]** is used for comments about a Resource that may be created independently from Resource creators. **[Comment][Comment]** content will most commonly be expressed in ArtifactAssessment.content.summary elements.

### Classification Profile of ArtifactAssessment Resource

The **[Classification Profile][Classification]** is used for classifier tags that may be created independently from Resource creators and may be used for search indexes. **[Classification][Classification]** content will most commonly be expressed using ArtifactAssessment.content.type and ArtifactAssessment.content.classifier elements.

### Rating Profile of ArtifactAssessment Resource

The **[Rating Profile][Rating]** is used for classifier tags that may include quantitative ratings and may be created independently from Resource creators. **[Rating][Rating]** content will most commonly be expressed using ArtifactAssessment.content.type and ArtifactAssessment.content.classifier or ArtifactAssessment.content.quantity elements.

### DateAsRating Profile of ArtifactAssessment Resource

The **[DateAsRating Profile][DateAsRating]** is a Profile of **[Classification][Classification]** that is used for representing a date or dateTime as a classifier value. An extension to ArtifactAssessment.content provides the dateAsRating value with a dateTime datatype.

### CertaintyOfEvidence Profile of ArtifactAssessment Resource

The **[CertaintyOfEvidence Profile][CertaintyOfEvidence]** is used for expression of the certainty (also called quality or confidence in the estimates) of an Evidence artifact.

### RiskOfBias Profile of ArtifactAssessment Resource

The **[RiskOfBias Profile][RiskOfBias]** is used for expression of the assessment of the threats to validity (or risk of bias) of an Evidence artifact or an artifact consisting of Evidence or the plan to create Evidence.

### RecommendationJustification Profile of ArtifactAssessment Resource

The **[RecommendationJustification Profile][RecommendationJustification]** is used for expressing the rationale, evidence, and judgments supporting a recommendation, such as from a clinical practice guideline.

### OutcomeImportance Profile of ArtifactAssessment Resource

The **[OutcomeImportance Profile][OutcomeImportance]** is used for expression of the relative importance of an outcome. The outcome is typically expressed with an <b>EvidenceVariable Resource</b> and may use the **[VariableDefinition Profile][VariableDefinition]** of EvidenceVariable (or **[OutcomeDefinition Profile][OutcomeDefinition]** of Group). The ArtifactAssessment.content.quantity.value element is described with "The value must be 0 (no importance) or a positive decimal. The value of 100 represents the importance of the reference outcome. A value greater than 100 represents exceptionally high importance that is higher than the importance of the reference outcome." and the ArtifactAssessment.content.quantity.unit element is set to "%".

### CompositeRating Profile of ArtifactAssessment Resource

The **[CompositeRating Profile][CompositeRating]** is used for a composite rating or classification of a Resource that may be created following ratings or classifications by two or more parties.

### Adaptation Profile of ArtifactAssessment Resource

The **[Adaptation Profile][Adaptation]** is used for assessments of a knowledge artifact that are used to create a new knowledge artifact through acceptance, rejection or modification of the assessed artifact.

### Comparison Profile of ArtifactAssessment Resource

The **[Comparison Profile][Comparison]** is a Profile of **[Adaptation][Adaptation]** that is used for assessments of similarities and differences between knowledge artifacts.

{% include link-list.md %}

---

// File: input/pagecontent/citation.md

### Understanding the Citation Resource

The <b>Citation Resource</b> enables reference to any knowledge artifact for purposes of identification and attribution. The <b>Citation Resource</b> supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.

The scope of the <b>Citation Resource</b> is to describe any aspect of identification, location, authorship, and contributorship to a journal article, report, document, resource, or other knowledge artifact. Citations are used extensively in scholarly communication and important for documenting the evidence or source behind statements of fact, opinion, and interpretation. Citations are also used for acknowledgement of the contributions of individuals and groups to the creation and advancement of knowledge.

Across the academic and scientific community citations are used extensively to reference the knowledge artifacts contributing to current work. For any community searching for reports of research or scholarly publications (such as searching MEDLINE) the citations contain the metadata used for such searches. Standardization of citations supports interoperability across citation managers and adaptation to current needs, such as reports being available on preprint servers before 'final' peer-reviewed published form, need to cite datasets or other alternative forms of expression, or the ability to support citation of FHIR Resources where the FHIR Resource represents research or scholarly publication.

Although citations as a concept are certainly not unique to healthcare, their use within healthcare contexts is ubiquitous, especially as part of the need to cite literature references and scientific knowledge as part of supporting evidence. This need is already manifest in references to the <b>Citation Resource</b> from other FHIR resources including <b>ResearchStudy</b>, <b>SubstanceDefinition</b>, and <b>DiagnosticReport</b>. In addition, citations of evidence are a critical aspect of evidence-based medicine and structures to represent citation information are a necessary modeling component in the EBM-on-FHIR project. Without a resource dedicated to this concept, evidence-based medicine concepts and approaches would need to rely on extensions and/or non-FHIR-based solutions to exchange citation information, resulting in more complex and difficult to implement and maintain resource types to support evidence-based medicine.

The <b>Citation Resource</b> can accommodate both human and machine readers. The summary element provides human-readable information.

The <b>Citation Resource</b> has multiple elements containing metadata that describe the citation resource itself, and a citedArtifact element containing metadata that describe the article or artifact being cited.

Attribution of scholarly contributions is expressed in the citedArtifact.contributorship element, which has grown more complex as the nature of authorship and the concerns for credit and acknowledgement are increasingly complex. If an individualized attribution structure is not required, the citedArtifact.contributorship.summary element will do.

"Publication" must now cover books, books series, article series, database registries, database updates, and the like. The citedArtifact.publicationForm element enables this description. Within citedArtifact.publicationForm, the publishedIn element identifies the largest container (journal, book, database, or newspaper) and the remaining elements (covering volume, issue, dates, language, and pagination) are specific to the artifact being cited.

Any resource may have common metadata including publisher, authors, reviewers, editors, endorsers, identifiers and location concepts for the resource. The <b>Citation Resource</b> is expected to be used primarily for citing things that are not FHIR Resources. There is NOT an expectation to provide Citations for most FHIR Resources. However, FHIR Resources can be the subject of <b>Citation Resources</b> when there are additional needs beyond common metadata to use the FHIR Resource as the cited source in other contexts or to support scholarly and scientific contribution attribution to the FHIR Resource content.

The <b>Provenance Resource</b> is used to track the contributions to a resource as it occurs, especially for purposes of confirming authenticity and trust. Citation.citedArtifact.contributorship is used to report the attribution of contributions to the cited artifact, especially for purposes of recognition and acknowledgement, but is not directly reporting the data to support authenticity of the contributions.

The <b>DocumentReference Resource</b> is described as a reference to a document of any kind for any purpose. As the <b>DocumentReference Resource</b> was developed for healthcare data exchange it is modeled to support individualized provenance, security, and artifact relationships as often needed in this context. The <b>Citation Resource</b> was developed for the reference to knowledge artifacts commonly used in scientific and scholarly communication so is modeled to support identification, attribution, classification, status tracking, and representation (summary) of the citation.

Approaches to a citation standard external to FHIR are not well suited for integration with FHIR-based approaches to Evidence and related resources. The MEDLINE citation format is widely used but not extensible for many types of knowledge artifacts that may be cited and not open to community development through open standards development methods. The RIS citation format is widely used but is not a singularly maintained standard and multiple implementations using RIS in different ways leads to confusion and inefficiency.

In many examples derived from the structured data in PubMed MEDLINE, the 'code system' referred to is an external URL that is not structured like a FHIR <b>CodeSystem Resource</b>.  These examples include 'https://meshb.nlm.nih.gov/', 'https://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html#citationsubset', 'https://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html#owner_value', 'https://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html#issn', 'https://www.cas.org/support/documentation/chemical-substances', and 'https://ncithesaurus.nci.nih.gov/ncitbrowser'. 

### Profiles of Citation Resource

The **[JournalArticleCitation Profile][JournalArticleCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Journal Article"

The **[BookCitation Profile][BookCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Book".

The **[BookPartCitation Profile][BookPartCitation]** includes a citedArtifact.publicationForm.publishedIn.type value of "Book" and a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Book Part".

The **[DatabaseCitation Profile][DatabaseCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Database".
  
The **[DatabaseEntryCitation Profile][DatabaseEntryCitation]** includes a citedArtifact.publicationForm.publishedIn.type value of "Database" and a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Database Entry".

The **[DatasetCitation Profile][DatasetCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Dataset".

The **[PreprintCitation Profile][PreprintCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Preprint".

The **[SoftwareCitation Profile][SoftwareCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Executable app".

The **[WebPageCitation Profile][WebPageCitation]** includes a citedArtifact.classification with a type value of "Knowledge Artifact Type" and a classifier value of "Webpage".

{% include link-list.md %}


---

// File: input/pagecontent/composition.md

### Understanding the Composition Resource

The <b>Composition Resource</b> is a structure for grouping information for purposes of persistence and attestability. The <b>Composition Resource</b> provides the basic structure for a FHIR document. The full content of the document is expressed using a <b>Bundle Resource</b> containing the Composition and its entries (which are references to other FHIR Resources).

Metadata elements in the <b>Composition Resource</b> that are similar to other Resources include url, identifier, version, status (which has different codes than the status used in other Resources), date, useContext, author (which uses a Reference datatype), name, title, and note.

Composition.type is required and uses a CodeableConcept datatype. Composition.category is optional and uses an array of CodeableConcept datatype.

Composition.subject is optional and uses an array of Reference to express what the composition is about. Composition.encounter is optional and uses a single Reference to an Encounter Resource (this is common in health data exchange and uncommon in science data exchange).

Composition.attester is a repeatable BackboneElement that is similar conceptually to reviewer, editor, and endorser elements used in other Resources.

Composition.custodian is optional and references an <b>Organization Resource</b> to represent the 'publisher' of the composition.

Composition.relatesTo is similar to Resource.relatedArtifact used in other Resources. In compositions used for scientific knowledge exchange, there is often a desire to inform the reader how to cite the composition. The relatesTo element may have an instance with a type of "cite-as" to represent how to cite the composition.

Composition.event is a repeatable BackboneElement to represent the clinical service(s) being documented and is not expected to be used commonly in the EBMonFHIR Implementation Guide.

Composition.section is a repeatable and recursive BackboneElement that contains all the content of the composition.

Identifiers of a composition section include section.title (string datatype), section.code (CodeableConcept datatype), and section.focus (Reference datatype).

Metadata about the composition section include section.author (repeatable Reference datatype) and emptyReason (CodeableConcept datatype).

The content of a section may be found in text, entry, and/or section elements.

section.entry is a repeatable Reference.

section.section is a repeatable BackboneElement and section.orderedBy is a CodeableConcept to specify the order of section entries.

section.text is a Narrative datatype used for a text summary of the section. A Narrative datatype contains 2 required elements: section.text.status coded as generated, extensions, additional, or empty and section.text.div with xhtml content.

### EvidenceReport Profile of Composition Resource

The **[EvidenceReport Profile][EvidenceReport]** is used for a base structure (canonical resource management) for a report combining any number of <b>Citation</b>, <b>Evidence</b>, <b>EvidenceVariable</b>, <b>Composition</b>, and related Resources. The **[EvidenceReport Profile][EvidenceReport]** adds a number of extensions for metadata (versionAlgorithm, experimental, description, purpose, copyright, copyrightLabel, approvalDate, lastReviewDate, and effectivePeriod). The EvidenceReport Profile limits the number of subject elements to 1 and limits the resource types that can be referenced as the subject to <b>Citation</b>, **[Classification][Classification]**, **[EvidenceReportSubject][EvidenceReportSubject]**, or <b>ResearchStudy</b>. The Composition.attester.mode element uses a CodeableConcept datatype and a Contributor Role Value Set is provided with preferred binding to include concepts for reviewer, editor, endorser, informant, recorder, and funder. An EvidenceReport Section Code Value Set is provided with extensible binding for the section.code elements.

### ResearchStudyDataDictionary Profile of Composition Resource

The **[ResearchStudyDataDictionary Profile][ResearchStudyDataDictionary]** is a Profile of **[EvidenceReport Profile][EvidenceReport]** and is used for a code key for variable names in a dataset containing the observations collected in a research study. Each variable is included in a section.entry instance which references **[VariableDefinition Profile][VariableDefinition]**.

### EvidenceReportPackage Profile of Composition Resource

The **[EvidenceReportPackage Profile][EvidenceReportPackage]** is used for a base structure to extend the **[EvidenceReport Profile][EvidenceReport]** with optional sections for Introduction, Discussion, Methods, References, Competing Interests, Acknowledgements, and Appendices.

### ComparativeEvidenceReport Profile of Composition Resource

The **[ComparativeEvidenceReport Profile][ComparativeEvidenceReport]** is a Profile of **[EvidenceReportPackage][EvidenceReportPackage]** and is used for an evidence report including the study group, exposure, comparator, and findings for any number of outcomes comparing the exposure to the comparator in the study group. 

The Composition.type value is set to a "Comparative Evidence Report".

..A 'Population' section is required with entries limited to reference **[StudyGroup Profile][StudyGroup]**.

..An 'Intervention' section is required with 2 contained sections. The 'Intervention' section may be repeated. An 'Intervention Description' section is required with entries limited to reference **[ExposureDefinition Profile][ExposureDefinition]**. An 'Intervention Group' section is required with entries limited to reference **[ExposureGroup Profile][ExposureGroup]**.

..A 'Comparator' section is required with 2 contained sections. A 'Comparator Description' section is required with entries limited to reference **[ComparatorDefinition Profile][ComparatorDefinition]** or **[ExposureDefinition Profile][ExposureDefinition]**. A 'Comparator Group' section is required with entries limited to reference **[ComparatorGroup Profile][ComparatorGroup]** or **[ExposureGroup Profile][ExposureGroup]**.

..A 'Research Study' section is required with entries limited to reference <b>ResearchStudy Resource</b> or <b>Citation Resource</b> or <b>Composition Resource</b>.

..A 'Baseline Measures' section is optional. The 'Baseline Measures' section entry element is limited to a single instance that references **[BaselineMeasureReport Profile][BaselineMeasureReport]**. 

..A 'Participant Flow' section is optional. The 'Participant Flow' section entry element is limited to a single instance that references **[ParticipantFlowReport Profile][ParticipantFlowReport]**. 

..An 'Outcome Measures' section is optional. The 'Outcome Measures' section entry element is limited to reference **[OutcomeMeasureReport Profile][OutcomeMeasureReport]**.

..A 'Summary of Findings' section is optional. The 'Summary of Findings' section entry element is limited to reference **[SummaryOfFindings Profile][SummaryOfFindings]**.

### ComparativeEvidenceSynthesisReport Profile of Composition Resource

The **[ComparativeEvidenceSynthesisReport Profile][ComparativeEvidenceSynthesisReport]** is a Profile of **[EvidenceReportPackage][EvidenceReportPackage]** and is used for an evidence report including the intended population, intended exposure, intended comparator, and findings for any number of outcomes comparing the exposure to the comparator with observed study group, observed exposure group, and observed comparator group unique for each outcome.

The Composition.type value is set to a "Comparative Evidence Synthesis Report".

..A 'Population' section is required with entries limited to reference **[CohortDefinition Profile][CohortDefinition]** or **[ConceptualCohortDefinition Profile][ConceptualCohortDefinition]**.

..One or more 'Intervention description' sections are required with entries limited to reference **[CohortDefinition Profile][CohortDefinition]** or **[ConceptualCohortDefinition Profile][ConceptualCohortDefinition]**.

..A 'Comparator' section is required with entries limited to reference **[CohortDefinition Profile][CohortDefinition]** or **[ConceptualCohortDefinition Profile][ConceptualCohortDefinition]**.

..A 'Research Study' section is required with entries limited to reference <b>ResearchStudy Resource</b> or <b>Citation Resource</b> or <b>Composition Resource</b>.

..An 'Outcome Variables' section is optional with entries limited to reference **[VariabletDefinition Profile][VariabletDefinition]**.

..A 'Results' section is optional. The 'Results' section entry element is limited to reference **[OutcomeMeasureSynthesisReport Profile][OutcomeMeasureSynthesisReport]**.

..A 'Summary of Findings' section is optional. The 'Summary of Findings' section entry element is limited to reference **[SummaryOfFindings Profile][SummaryOfFindings]**.


### EvidenceMeasureReportPackage Profile of Composition Resource

The **[EvidenceMeasureReportPackage Profile][EvidenceMeasureReportPackage]** is used for a base structure to extend the **[EvidenceReport Profile][EvidenceReport]** with optional relatesTo slices for Total Group, Intervention Group, Comparator Group, and Group Assignment.

The relatesTo element may include instances with type values of "depends-on", label values to identify the contextual use of specific Group Resources (such as "Intervention Group", "Comparator Group", and "Total Group"), and resourceReference values which may be limited to reference **[StudyGroup][StudyGroup]**, **[ExposureGroup][ExposureGroup]**, or **[ComparatorGroup][ComparatorGroup]** Profiles.

The relatesTo element may include instances with type values of "composed-of", label values of "Group Assignment" to identify the contextual use of specific EvidenceVariable Resources, and resourceReference values which may be limited to reference **[GroupAssignment][GroupAssignment]** Profiles.

### BaselineMeasureReport Profile of Composition Resource

The **[BaselineMeasureReport Profile][BaselineMeasureReport]** is a Profile of **[EvidenceMeasureReportPackage][EvidenceMeasureReportPackage]** and is used for an evidence report including the findings for any number of baseline measures in a research study. 

The Composition.type value is set to a "Baseline Measure Report".

The relatesTo element may include instances with type values of "derived-from", label values of "Baseline Measure" to identify the contextual use of specific EvidenceVariable Resources, and resourceReference values which may be limited to reference **[VariableDefinition][VariableDefinition]** Profiles.

The section element contains one or more instances (sections) with each of these sections identified by focus (Composition.section.focus) which references a **[VariableDefinition Profile][VariableDefinition]**. Each of these focused sections contain one or more of the following sections:

..Composition.section.section[comparatorEvidence] has a section.code value for 'Evidence with comparator alone' and entries limited to a single reference of a **[BaselineMeasureEvidence Profile][BaselineMeasureEvidence]**.

..Composition.section.section[interventionEvidence] has a section.code value for 'Evidence with intervention alone' and entries limited to a single reference of a **[BaselineMeasureEvidence Profile][BaselineMeasureEvidence]**.

..Composition.section.section[totalGroup] has a section.code value for 'Evidence with total group' and entries limited to a single reference of a **[BaselineMeasureEvidence Profile][BaselineMeasureEvidence]**.

..Composition.section.section[comparativeEvidence] has a section.code value for 'Evidence with intervention vs. comparator' and entries limited to a single reference of a **[ComparativeBaselineMeasureEvidence Profile][ComparativeBaselineMeasureEvidence]**.


### ParticipantFlowReport Profile of Composition Resource

The **[ParticipantFlowReport Profile][ParticipantFlowReport]** is a Profile of **[EvidenceMeasureReportPackage][EvidenceMeasureReportPackage]** and is used for an evidence report including the counts (and proportions) for any number of participant flow measures in a research study. For example, the ParticipantFlowReport may include the data for a CONSORT Participant Flow Diagram reported with a randomized controlled trial.

The Composition.type value is set to a "Participant Flow Report".

The relatesTo element may include instances with type values of "derived-from", label values of "Participant Flow Measure" to identify the contextual use of specific EvidenceVariable Resources, and resourceReference values which may be limited to reference **[ParticipantFlowEvidenceVariable][ParticipantFlowEvidenceVariable]** Profiles.

The section element contains one or more instances (sections) with each of these sections identified by focus (Composition.section.focus) which references a **[ParticipantFlowEvidenceVariable Profile][ParticipantFlowEvidenceVariable]**. Each of these focused sections contain one or more of the following sections:

..Composition.section.section[comparatorEvidence] has a section.code value for 'Evidence with comparator alone' and entries limited to a single reference of a **[ParticipantFlowEvidence Profile][ParticipantFlowEvidence]**.

..Composition.section.section[interventionEvidence] has a section.code value for 'Evidence with intervention alone' and entries limited to a single reference of a **[ParticipantFlowEvidence Profile][ParticipantFlowEvidence]**.

..Composition.section.section[totalGroup] has a section.code value for 'Evidence with total group' and entries limited to a single reference of a **[ParticipantFlowEvidence Profile][ParticipantFlowEvidence]**.

..Composition.section.section[comparativeEvidence] has a section.code value for 'Evidence with intervention vs. comparator' and entries limited to a single reference of a **[ComparativeParticipantFlowEvidence Profile][ComparativeParticipantFlowEvidence]**.



### OutcomeMeasureReport Profile of Composition Resource

The **[OutcomeMeasureReport Profile][OutcomeMeasureReport]** is a Profile of **[EvidenceMeasureReportPackage][EvidenceMeasureReportPackage]** and is used for an evidence report including the findings for any number of outcome measures in a research study. 

The Composition.type value is set to an "Outcome Measure Report".

The relatesTo element may include instances with type values of "derived-from", label values of "Outcome Measure" to identify the contextual use of specific EvidenceVariable Resources, and resourceReference values which may be limited to reference **[VariableDefinition][VariableDefinition]** Profiles.

The section element contains one or more instances (sections) with each of these sections identified by focus (Composition.section.focus) which references a **[VariableDefinition Profile][VariableDefinition]**. Each of these focused sections contain one or more of the following sections:

..Composition.section.section[comparatorEvidence] has a section.code value for 'Evidence with comparator alone' and entries limited to a single reference of a **[NoncomparativeEvidence Profile][NoncomparativeEvidence]**.

..Composition.section.section[interventionEvidence] has a section.code value for 'Evidence with intervention alone' and entries limited to a single reference of a **[NoncomparativeEvidence Profile][NoncomparativeEvidence]**.

..Composition.section.section[totalGroup] has a section.code value for 'Evidence with total group' and entries limited to a single reference of a **[NoncomparativeEvidence Profile][NoncomparativeEvidence]**.

..Composition.section.section[comparativeEvidence] has a section.code value for 'Evidence with intervention vs. comparator' and entries limited to a single reference of a **[ComparativeEvidence Profile][ComparativeEvidence]**.


### Guideline Profile of Composition Resource

The **[Guideline Profile][Guideline]** is a Profile of **[EvidenceReportPackage][EvidenceReportPackage]** and is used for the composition of a clinical practice guideline and may be tightly related to use of the **[Recommendation Profile][Recommendation]** for related content. 

The Composition.type value is set to a "Guideline".

The **[Guideline Profile][Guideline]** will have 1 to 6 section element instances with any of the following section.code concepts:  Introduction, Recommendations, Text, Methods, Acknowledgements, and Appendices. The Recommendations section will have entries which are constrained to reference the **[Recommendation Profile][Recommendation]**. 

### Recommendation Profile of Composition Resource

The **[Recommendation Profile][Recommendation]** is a Profile of **[EvidenceReportPackage][EvidenceReportPackage]** and is used for the composition of a recommendation (such as that from a clinical practice guideline) and may be tightly related to a **[RecommendationPlan Profile][RecommendationPlan]** of PlanDefinition and a **[RecommendationJustification Profile][RecommendationJustification]** of ArtifactAssessment. 

The Composition.type value is set to a "Recommendation".

The **[Recommendation Profile][Recommendation]** will have 1 or more section element instances with any of the following section.code concepts:  Recommendation Specification (required), Discussion (optional), Evidence (optional), Justification (optional), and Considerations (optional).

..The Recommendation Specification section is required and contains sections with section.code concepts for Recommendation Statement, Ratings, Population, Action, and Opposite Action.

..The Discussion section may contain sections for text-based summaries.

..The Evidence section may contain sections for text-based summaries and may contain entries referencing ArtifactAssessment, Evidence, or Composition Resources.

..The Justification section may contain sections for text-based summaries and may contain entries referencing ArtifactAssessment Resources (RecommendationJustification Profile).

..The Considerations section contains sections with section.code concepts for Summary, Subgroup Considerations, Implementation Considerations, Monitoring Considerations, Competing Interests, and Research Considerations.

### SummaryOfFindings Profile of Composition Resource

The **[SummaryOfFindings Profile][SummaryOfFindings]** is a Profile of **[EvidenceReport][EvidenceReport]** and is used for an evidence report combining <b>Evidence</b> and <b>EvidenceVariable Resources</b>, organized around **[VariableDefinition][VariableDefinition]** (Profile of EvidenceVariable), to represent the summary of findings of comparative evidence. 

The Composition.type value is set to a "Summary of Findings".

The **[SummaryOfFindings Profile][SummaryOfFindings]** has 1 'Column Headers' section and 1 or more 'Summary of findings entry for a single outcome' sections.  Each 'Summary of findings entry for a single outcome' section has a focus element (section.focus) which references a **[VariableDefinition Profile][VariableDefinition]**. Each of these sections has the same set of section.section.code patterns to provide the following contained sections:

1. An 'Outcome Measure' section is required for the 'Column Headers' section and optional for the 'Summary of findings entry for a single outcome' sections. If used in the 'Summary of findings entry for a single outcome' section, entries are limited to reference a single **[VariableDefinition Profile][VariableDefinition]**.

2. A 'Sample Size' section is optional.

3. A 'Result with comparator alone' section is optional. If used in the 'Summary of findings entry for a single outcome' section, entries are limited to reference a single **[ComparatorOnlyEvidence Profile][ComparatorOnlyEvidence]**.

4. A 'Result with intervention alone' section is optional. If used in the 'Summary of findings entry for a single outcome' section, entries are limited to reference a single **[InterventionOnlyEvidence Profile][InterventionOnlyEvidence]**.

5. A 'Result with intervention alone (calculated)' section is optional. If used in the 'Summary of findings entry for a single outcome' section, entries are limited to reference up to 2 Resources using **[ComparatorOnlyEvidence Profile][ComparatorOnlyEvidence]** or **[ComparativeEvidence Profile][ComparativeEvidence]**.

6. A 'Result with intervention vs. comparator' section is optional. If used in the 'Summary of findings entry for a single outcome' section, entries are limited to reference a single **[ComparativeEvidence Profile][ComparativeEvidence]**.

7. A 'Certainty of Evidence' section is optional. If used in the 'Summary of findings entry for a single outcome' section, entries may reference **[ComparativeEvidence Profile][ComparativeEvidence]** or **[CertaintyOfEvidence Profile][CertaintyOfEvidence]**.

8. An 'Assertion' section is optional. If used in the 'Summary of findings entry for a single outcome' section, entries are limited to reference a single **[ComparativeEvidence Profile][ComparativeEvidence]**.

### SummaryOfNetEffect Profile of Composition Resource

The **[SummaryOfNetEffect Profile][SummaryOfNetEffect]** is a Profile of **[EvidenceReportPackage][EvidenceReportPackage]** and is used for an evidence report combining <b>ArtifactAssessment</b>, <b>Evidence</b>, and <b>EvidenceVariable Resources</b>, organized around **[VariableDefinition][VariableDefinition]** (Profile of EvidenceVariable), to represent the summary of net effect contributions of comparative evidence, adjusted for the relative importance of outcomes. 

The Composition.type value is set to a "Summary of Net Effect Contributions".

The **[SummaryOfNetEffect Profile][SummaryOfNetEffect]** has 1 'Column Headers' section, 1 or more 'Summary of net effect contributions entry for a single outcome' sections, and may have a 'Net Effect Estimate' section.  Each 'Summary of net effect contributions entry for a single outcome' section has a focus element (section.focus) which references a **[VariableDefinition Profile][VariableDefinition]**. Each of these sections and the 'Column Headers' section has the same set of section.section.code patterns to provide the following contained sections:

1. An 'Outcome Measure' section is required for the 'Column Headers' section and optional for the 'Summary of net effect contributions entry for a single outcome' sections. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[VariableDefinition Profile][VariableDefinition]**.

2. An 'Outcome Desirability' section is optional. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[OutcomeImportance Profile][OutcomeImportance]**.

3. A 'Relative Importance' section is optional. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[OutcomeImportance Profile][OutcomeImportance]**.

4. A 'Result with comparator alone' section is optional. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[ComparatorOnlyEvidence Profile][ComparatorOnlyEvidence]**.

5. A 'Evidence Results for the intervention exposure only' section is optional. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[InterventionOnlyEvidence Profile][InterventionOnlyEvidence]**.

6. A 'Result with intervention alone (calculated)' section is optional. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference up to 2 Resources using **[ComparatorOnlyEvidence Profile][ComparatorOnlyEvidence]** or **[ComparativeEvidence Profile][ComparativeEvidence]**.

7. A 'Result with intervention vs. comparator' section is optional. If used in the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[ComparativeEvidence Profile][ComparativeEvidence]**.

8. A 'Net Effect Contribution' section is required. In the 'Summary of net effect contributions entry for a single outcome' section, entries are limited to reference a single **[NetEffectContribution Profile][NetEffectContribution]**.

The 'Net Effect Estimate' section, if used, is limited to a single entry which references a **[NetEffectEstimate Profile][NetEffectEstimate]**.

 
### EvidenceMap Profile of Composition Resource

The **[EvidenceMap Profile][EvidenceMap]** is a Profile of **[EvidenceReport][EvidenceReport]** and is used for an organized listing of Resources used to generate **[EvidenceReport][EvidenceReport]** instances.

The Composition.type value is set to a "EvidenceMap".

The **[EvidenceMap Profile][EvidenceMap]** provides 11 optional sections with a suggested section.code.coding value and limitations of resource type for section.entry values. The 11 sections are:

1. Outcome Measure, limited to reference **[VariableDefinition Profile][VariableDefinition]**.
2. Evidence with comparator alone, limited to reference **[ComparatorOnlyEvidence Profile][ComparatorOnlyEvidence]**.
3. Evidence with intervention alone, limited to reference **[InterventionOnlyEvidence Profile][InterventionOnlyEvidence]**.
4. Evidence with intervention vs. comparator, limited to reference **[ComparativeEvidence Profile][ComparativeEvidence]**.
5. Certainty of Evidence, limited to reference **[CertaintyOfEvidence Profile][CertaintyOfEvidence]**.
6. Population, limited to reference <b>Group Resource</b>.
7. Intervention, limited to reference **[VariableDefinition Profile][VariableDefinition]**.
8. Intervention Description, limited to reference <b>Group Resource</b>.
9. Intervention Group, limited to reference <b>Group Resource</b>.
10. Classifier, limited to reference <b>ArtifactAssessment Resource</b>.
11. Relative Importance, limited to reference <b>ArtifactAssessment Resource</b>.

### M11Report Profile of Composition Resource

The **[M11Report Profile][M11Report]** is a Profile of **[EvidenceReport][EvidenceReport]** and is used for the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH) Clinical Electronic Structured Harmonised Protocol (CeSHarP) M11 Technical Specification.

The Composition.type value is set to a "Clinical Trial Protocol" and "CeSHarP Report".

The **[M11Report Profile][M11Report]** contains 15 sections with highly detailed instructions and is shared in the EBMonFHIR Implementation Guide for initial development and coordination with the base structures in the EBMonFHIR Implementation Guide. There will likely be a future 'M11 Report' Implementation Guide developed by a different but coordinated group. 

{% include link-list.md %}


---

// File: input/pagecontent/downloads.md

### Definitions

Format-specific definitions of the FHIR resources used in this Implementation Guide can be downloaded here.

*   [XML](definitions.xml.zip)
*   [JSON](definitions.json.zip)
*   [TTL](definitions.ttl.zip)


### Examples

Examples of the FHIR resources used in this Implementation Guide can be downloaded here.

*   [XML](examples.xml.zip)
*   [JSON](examples.json.zip)
*   [TTl](examples.ttl.zip)

### Full Implementation Guide

The full implementation guide can be downloaded here.

*   [Full IG](full-ig.zip)


---

// File: input/pagecontent/evidence.md

### Understanding the Evidence Resource

The <b>Evidence Resource</b> is the central atomic component for the Evidence-related Resources. The <b>Evidence Resource</b> provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures, outcomes, covariates), the statistics (the quantitative results of a study or statistical analysis), and the certainty of this evidence.

Human-readable summaries of the <b>Evidence Resource</b> may be expressed in description, assertion, and note elements. 

The description element is typically used for the primary expression, ideally the factual summary of the content in the structured Resource. 

The assertion element is less commonly used and is typically used for an interpretive expression (sometimes called the conclusion or bottom-line). 

For example, a description that includes a relative risk 0.8 and 95% confidence interval 0.7 to 0.9 for an outcome of mortality may be accompanied by an assertion that the intervention is associated with a reduction in mortality (or the assertion that the intervention reduces mortality). The concept that the intervention is associated with a reduction in mortality is an interpretation and not directly found in the content of the structured Resource. 

The note element may be used for any number of explanatory, variant, or related comments.

The variableDefinition BackboneElement is used to describe what the evidence is about. 

Each variable defined must be assigned a variable role which signals how that variable is used in the statistics within the <b>Evidence Resource</b>. In FHIR version R6, the variableDefinition.variableRole uses a code datatype and the options are population, exposure, outcome, or covariate. This limitation to 4 roles supports extensive combinations for different types of evidence. If subtyping of role is needed, in FHIR version R6 there isa variableDefinition.roleSubtype element with a CodeableConcept datatype. This EBMonFHIR IG uses the FHIR version R5 base, so in an **[EvidenceR6 Profile][EvidenceR6]** the variableDefinition.variableRole element is set to a CodeableConcept specifying use of extensions and extensions on variableDefinition are provided for variableRoleCode and roleSubtype. For comparative evidence, an extension on variableDefinition for comparatorCategory is used to express the categorical value serving as the reference value for the comparison.

The variable definition may be expressed in human-readable form (with a description element) and/or expressed in computable form by referencing <b>Group</b> or <b>EvidenceVariable Resources</b>. In general, <b>Group Resources</b> are used to define populations and <b>EvidenceVariable Resources</b> are used to define exposures, outcomes, and covariates. The variableDefinition elements allow expression of the observed variable and the intended variable. In many forms of expression the Evidence is interpreted for a specific context and recognition of both observed and intended variables is important for understanding the applicability and certainty of the evidence. A directnessMatch element may be used to express the similarity between the observed and intended variable.

Because a statistic can rarely be interpreted without knowing how it was obtained, the Evidence Resource enables expression of the study design. The studyDesign element uses a CodeableConcept datatype to describe any study design features. For evidence derived from synthesis of evidence, the <b>Evidence Resource</b> enables expression of the approach to combining the data. The synthesisType element uses a CodeableConcept datatype to describe the method for combining data from two or more studies.

The heart of the evidence is the statistic. The statistic BackboneElement provides a machine-interpretable expression of a statistic, including the quantity; unit of measure; classification of statistic type; sample size; attributes such as confidence intervals, p values, and heterogeneity estimates; and statistic model characteristics. An <b>Evidence Resource</b> may contain more than one statistic, in which case each statistic matches the same combination of variable definitions.

The certainty BackboneElement provides a machine-interpretable expression of certainty, confidence or quality of the evidence. The certainty BackboneElement can express overall certainty and certainty of any subcomponent concepts using codeable concepts from structured rating systems.

### Profiles of Evidence Resource

The **[EvidenceR6 Profile][EvidenceR6]** is a base for all other Evidence Profiles. The **[EvidenceR6 Profile][EvidenceR6]** adds 3 extensions to variableDefinition (variableRoleCode 1..1, roleSubtype 0..1, and comparatorCategory 0..1), 1 extension to statistic (modelExpression 0..1), 6 extensions to statistic.modelCharacteristic, and 1 extension to statistic.modelCharacteristic.variable

The **[SingleStudyEvidence Profile][SingleStudyEvidence]** simply provides a "not applicable" value for the synthesisType element.

The **[EvidenceSynthesisEvidence Profile][EvidenceSynthesisEvidence]** is used for evidence that is combined from two or more studies, and requires use of the synthesisType element to express the method by which evidence was synthesized.

The **[NonComparativeEvidence Profile][NonComparativeEvidence]** requires at least 1 variableDefinition with the role of 'population' and at lease 1 variableDefinition with the role of 'outcome'. Because the variableRoleCode element is an extension in the EBMonFHIR IG and discriminating instances by extension is problematic, the Profile use the note element to identify the variableDefinition in the assigned role. If note are desired at the level of the variableDefinition, the desired content of the note should be added to the description element.

The **[ComparativeEvidence Profile][ComparativeEvidence]** requires the same structures as noted above for the NonComparativeEvidence Profile and also requires a single variableDefinition with the role of 'exposure'. For this variableDefinition with the role of 'exposure' the observed element may only reference Resources following the GroupAssignment Profile (which specifies the categories for the EvidenceVariable handling) and the comparatorCategory element (extension) must be used to specify the category used as reference point for the comparison.

The **[ComparatorOnlyEvidence Profile][ComparatorOnlyEvidence]** is a Profile of **[NonComparativeEvidence][NonComparativeEvidence]** with guidance on use of the variableDefinition structure: "To report comparator-only evidence for a research question defined by Population, Intervention, Comparator, and Outcome (PICO), one would use two variableDefinition instances. A group defined by a combination of Population and Comparator has the variableRole of population, the Intervention is not included in the ComparatorOnlyEvidence, and the Outcome has variableRole of outcome."

The **[InterventionOnlyEvidence Profile][InterventionOnlyEvidence]** is a Profile of **[NonComparativeEvidence][NonComparativeEvidence]** with guidance on use of the variableDefinition structure: "To report intervention-only evidence for a research question defined by Population, Intervention, Comparator, and Outcome (PICO), one would use two variableDefinition instances. A group defined by a combination of Population and Intervention has the variableRole of population, the Comparator is not included in the InterventionOnlyEvidence, and the Outcome has variableRole of outcome."

The **[BaselineMeasureEvidence Profile][BaselineMeasureEvidence]** is a Profile of **[NonComparativeEvidence][NonComparativeEvidence]** which has the baseline measure in the variableDefinition with the role of 'outcome'.

The **[ComparativeBaselineMeasureEvidence Profile][ComparativeBaselineMeasureEvidence]** is a Profile of **[ComparativeEvidence][ComparativeEvidence]** which has the baseline measure in the variableDefinition with the role of 'outcome'.

The **[ParticipantFlowEvidence Profile][ParticipantFlowEvidence]** is a Profile of **[NonComparativeEvidence][NonComparativeEvidence]** which has the participant flow measure in the variableDefinition with the role of 'outcome'. The intended and directnessMatch elements in variableDefinition are not used. The statistic.numberAffected element is not used because the number counted is the statistic.quantity and the statistic.modelCharacteristic element is not used because simple counting does not require any statistical modeling.

The **[ComparativeParticipantFlowEvidence Profile][ComparativeParticipantFlowEvidence]** is a Profile of **[ComparativeEvidence][ComparativeEvidence]** which has the participant flow measure in the variableDefinition with the role of 'outcome'. The intended and directnessMatch elements in variableDefinition are not used.

The **[EndpointAnalysisPlan Profile][EndpointAnalysisPlan]** is used for specification of the planned statistical model for analysis of a single endpoint. The statistic.modelCharacteristic.intended element in FHIR version R6 and the statistic.modelCharacteristic.extension:intended element in FHIR version R5 is set to true.

The **[NetEffectEstimate Profile][NetEffectEstimate]** is used for the result of a net effect analysis. The variableDefinition with the role of 'exposure' is required. The exposure may be described in variableDefinition.description and/or referenced from variableDefinition.observed to a **[GroupAssignment Profile][GroupAssignment]**. Either way, the comparatorCategory needs to be expressed. The variableDefinition with the role of 'outcome' is not used because the statistical combination is functionally working with a 'population' of Evidence Resources (**[NetEffectContribution Profile][NetEffectContribution]**) and not an outcome variable that is being processed across observations. The variableDefinition with the role of 'population' will reference a **[NetEffectContributions Profile][NetEffectContributions]** of Group Resource. The statistic reported for the net effect estimate is set to use a statistic type of 'Risk Difference', an attribute estimate type of 'Confidence interval', and a model characteristic of 'Net effect analysis'.

The **[NetEffectContribution Profile][NetEffectContribution]** is a Profile of **[ComparativeEvidence][ComparativeEvidence]** which is specialized for an effect estimate (risk difference) multiplied by a relative importance rating of the outcome. The value of the relative importance rating of the outcome is expressed in an **[OutcomeImportance Profile][OutcomeImportance]** of ArtifactAssessment. Because the FHIR model does not support direct referencing of an <b>ArtifactAssessment</b> from the variableDefinition, the **[NetEffectContribution Profile][NetEffectContribution]** uses a variableDefinition with the role of 'covariate' explicitly labeled as a 'Relative Importance Multiplier' and the **[OutcomeImportance Profile][OutcomeImportance]** is referenced from a relatedArtifact element with a type of #amended-with as the multiplier is amending the effect estimate (risk difference). The statistic reported for the net effect contribution is set to use a statistic type of 'Risk Difference', an attribute estimate type of 'Confidence interval', and a model characteristic of 'Net effect contribution analysis'.

{% include link-list.md %}


---

// File: input/pagecontent/evidencevariable.md

### Understanding the EvidenceVariable Resource

The <b>EvidenceVariable Resource</b> describes a single variable used in a statistical analysis.

Evidence may be reported for different types of knowledge. One commonly used format for expression of what evidence is about is the "PICO" format. PICO stands for:

Population - the population within which exposures and outcomes are being considered

Intervention - the conditional state or exposure state being described for which one is expressing the risk of or effect on an outcome

Comparator - the alternative conditional state or alternative exposure state when one is comparing states for the effect on an outcome

Outcome - the result or effect of an intervention or exposure in a population

Sometimes PECO is used instead of PICO to emphasize evaluation of exposures that may not be interventions. Sometimes PICOT is used to express timing of the outcome assessment.

PICO (and its variants like PECO or PICOT) is a universal acronym used in evidence-based medicine communities to clearly express research questions and evidence findings.

The <b>EvidenceVariable Resource</b> allows expression of the components of a PICO question in codeable and reusable formats. The EvidenceVariable.definition element has a CodeableReference datatype which can define the PICO component as a concept and/or reference to a Group Resource for a structured definition.

The <b>EvidenceVariable Resource</b> has a handling element to express the statistical handling as continuous, dichotomous, ordinal, or polychotomous.

For categorical handling (dichotomous, ordinal, or polychotomous), the EvidenceVariable.category element can be used to name each category and express the value that defines the category.

### Profiles of EvidenceVariable Resource

The **[VariableDefinition Profile][VariableDefinition]** is a base for all other EvidenceVariable Profiles. The **[VariableDefinition Profile][VariableDefinition]** adds an extension for the definition as a CodeableReference datatype (consistent with FHIR version R6) and removes the characteristic element used in FHIR version R5 (and replaced with reference to Group Resource from the definition.reference element). The **[VariableDefinition Profile][VariableDefinition]** requires the use of the handling element and adds an extension to the category element (valueReference) to enable reference to a Group Resource for structured definitions of categories that are not able to be expressed adequately with CodeableConcept, Quantity or Range datatypes.

The **[GroupAssignment Profile][GroupAssignment]** is a Profile of **[VariableDefinition][VariableDefinition]** used for **[ComparativeEvidence][ComparativeEvidence]** (for the variableDefinition in the role of 'exposure'). The **[GroupAssignment Profile][GroupAssignment]** is used to classify an <b>EvidenceVariable</b> as an exposure managed as a categorical variable. The variable definition is 'Defined by handling and category elements' and there must be at least 2 category element instances. The category element instances must have a name, and the name of one of these category element instances will be used in the **[ComparativeEvidence][ComparativeEvidence]** (in variableDefinition.comparatorCategory) to express the reference value for comparison.

The **[ParticipantFlowEvidenceVariable Profile][ParticipantFlowEvidenceVariable]** is a Profile of **[VariableDefinition][VariableDefinition]** used to describe outcome measures for completion and reasons for non-completion of participation in a research study. For simplicity the handling element always has a value of 'dichotomous'.

{% include link-list.md %}


---

// File: input/pagecontent/extensions.md

{% include table-extensions.xhtml %}


---

// File: input/pagecontent/group.md

### Understanding the Group Resource

The <b>Group Resource</b> represents a defined collection of entities. The group may be enumerated, meaning that there is a known quantity of group members with or without a listing of the group members. The group may be definitional, meaning there is a structured representation of the characteristics (criteria) that define membership eligiblity, or who or what matches the criteria to be considered a member of the group.

#### Group.type

The Group.type element is used to classify the type of group member in terms of FHIR types with options limited to person, animal, practitioner, device, careteam, healthcareservice, location, organization, relatedperson, and specimen. Group.type is a required element in the use of <b>Group Resource</b> for health data exchange.

In other words, type is letting you know the type of group (Person, Specimen,...).  The choices in Group.type are limited to concepts represented in FHIR. If type is person, then the members would have to be resources of type person. If type is device, you will expect a different set of resources. 

In FHIR version R5, the Group.type element is required. In FHIR version R6, the Group.type element is required if the Group.membership element has a value of definitional or enumerated. 

#### Group.membership

The Group.membership element is used to classify the <b>Group Resource</b> as either definitional or enumerated, and is a required element.

- *enumerated*: Use this code if you desire to list the group members and/or specify the number of entities in the group.

- *definitional*: Use this code if the Group.characteristic value(s) specified are both necessary and sufficient to determine qualifications for membership (for defining what makes something a member of the group). If a group is both enumerated and definitional, then use the enumerated code.

In FHIR version R6, a third code (conceptual) is allowed for the Group.membership element value, and Group.type is not required when Group.membership = 'conceptual'. This allows greater flexibility as needed for science data exchange.

- *conceptual*: Use this code if the Group is neither enumerated (listing or counting actual members) nor definitional (providing complete definition for membership qualifications). A different use of conceptual is when the 'conceptual' Group is a 'definitional' Group in which the Group.type is not bound to FHIR types.

In the EBMonFHIR Implementation Guide, which is built on FHIR version R5 so must respect the Group.type and Group.membership requirements, there is no constraints or extensions to change the type or membership element values to concepts not fitting the base requirements. When a Group would be considered 'conceptual' the examples will use 'definitional' and when a Group would not use the type element the example will use 'animal' (as the least likely value to be confused for a real value in the examples used in the EBMonFHIR Implementation Guide).

#### Group.code

Group.code is used to describe the kind of group members, especially when a more specific classification than the Group.type value is desired. For example, if Group.type is 'animal', then Group.code may be 'cow'. If Group.type is 'device', then Group.code could be 'syringe' or 'cytometer'.

#### Group.quantity

Group.quantity is a count of group members, so it must be an integer if used.

#### Group.characteristic

The base <b>Group Resource</b> in FHIR version R5 uses a repeatable characteristic element to define inclusion and exclusion criteria. This characteristic element includes 4 elements:

.. code which is a required CodeableConcept to represent the type of characterstic. 

.. value[x] with is a required element, with datatype of CodeableConcept, boolean, Quantity, Range, or Reference, to represent the matching value for the type of characteristic

.. exclude which is a required boolean to determine if this is an inclusion or exclusion criterion

.. period which is an optional Period for when in calendar time the characteristic applies

Each characteristic must have a code value (CodeableConcept datatype) to specify the attribute. 

For a characteristic of "age > 18 years” the attribute is “age” and the attribute of age may be expressed as:

"code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "397669002",
            "display": "Age"
          }
        ]
      }

For a characteristic of "Body mass index >= 30 kg/m2" the attribute is "Body mass index" and the attribute may be expressed as:
 
      
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "39156-5",
            "display": "Body mass index (BMI) [Ratio]"
          }
        ]
      }

(Examples taken from https://fevir.net/resources/Group/171819)

Each characteristic must have a value[x] value to specify the value of the attribute that holds for members of the group. There is no [x] in the JSON or XML expression as it is replaced with the data type (CodeableConcept, boolean, Quantity, Range, Reference, or in FHIR version R6 uri or Expression)

For a characteristic of "age > 18 years” the value is “> 18 years” and the value may be expressed with a Quantity datatype as:

"valueQuantity": {
        "comparator": ">=",
        "value": 18,
        "unit": "years",
        "system": "http://unitsofmeasure.org",
        "code": "a"
             }

Ror a characteristic of "Body mass index >= 30 kg/m2" the value is ">= 30 kg/m2" and the value may be expressed as:

"valueQuantity": {
        "comparator": ">=",
        "value": 30,
        "unit": "kg/m2",
        "system": "http://unitsofmeasure.org",
        "code": "kg/m2"
             }

(Examples taken from https://fevir.net/resources/Group/171819)

Sometimes group membership is determined by characteristics not possessed. When this is the case, the Group.characteristic.exclude element has a value of true ("exclude": true). For characteristics that are not exclusion criteria, the Group.characteristic.exclude element has a value of false ("exclude": false). The exclude element is required.

For example, an exclusion criterion of HbA1c ≥ 14.0% is expressed as:

{
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "59261-8",
            "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
          }
        ]
      },
      "valueQuantity": {
        "value": 14,
        "comparator": ">=",
        "unit": "%",
        "system": "http://unitsofmeasure.org",
        "code": "%"
      },
      "exclude": true
    }

modified off:

StudyEligibilityCriteria: Eligibility Criteria for Bariatric Surgery Randomized Trial (Diabetes Surgery Study) [Database Entry: FHIR Group Resource]. Contributors: Brian S. Alper [Authors/Creators]. In: Fast Evidence Interoperability Resources (FEvIR) Platform, FOI 170443. Revised 2022-09-09. Available at: https://fevir.net/resources/Group/170443. Computable resource at: https://fevir.net/resources/Group/170443.

#### Group.member

The Group.member element is a BackboneElement (multiple elements per instance) and may have any number of instances. Each instance refers to an actual member of the group.  Each member must be represented in an entity element (Group.member.entity) which uses a Reference datatype, and each member may optionally have a period element (Group.member.period) with a Period datatype for the timeframe of group membership and an inactive element (Group.member.inactive) with a boolean datatype to denote if a member is no longer in the group.

### Profiles of Group Resource

The **[GroupR6 Profile][GroupR6]** is a base for all other Group Profiles. Extensions for metadata about the Group Resource include url, version, versionAlgorithmString, title, experimental, date, publisher, contact, useContext, purpose, copyright, copyrightLabel, author, and relatedArtifact. A modifierExtension for status allows specifying whether the Resource is active, draft, or retired. An extension for characteristicExpression allows use of an Expression datatype to represent the group definition instead of using the characteristic element.

Extensions for combinationMethod (valueCode choices of all-of, any-of, at-least, at-most, except-subset) and combinationThreshold (valuePositiveInt for use with at-least or at-most) express how 2 or more characteristic instances are combined.

The Group.combinationMethod extension is used when there are two or more Group.characteristic instances to define how the characteristics are combined. 

- Use a code *all-of* to indicate that each of the characteristics must be met. This is functionally equivalent to  combining all characteristics with an AND operator.
- Use a code *any-of* to indicate that at least one of the characteristics must be met. This is functionally equivalent to combining all characteristics with an OR operator.
- Use a code *at-least* to indicate that at least n of the characteristics must be met. Use Group.combinationThreshold to specify the value of n.
- Use a code *at-most* to indicate that at most n of the characteristics must be met. Use Group.combinationThreshold to specify the value of n.
- Use a code *except-subset* to indicate that the characteristics expressed as exclusion criteria are used as exceptions to meeting the characteristics expressed as inclusion criteria. Explaining by example: “Cancer of any kind (except basal cell skin cancer or cancer in situ) unless documented to be disease-free for five years” (https://fevir.net/resources/Group/170441)

The Group.combinationThreshold extension provides the value of "n" when *at-least* or *at-most* codes are used for the Group.combinationMethod extension (see above)

The characteristic element has multiple extensions to support more ways of defining eligibility criteria.

.. valueUri and valueExpression provide additional datatypes for the value of the characteristic

.. description uses a markdown datatype and supports a human-readable description of the characteristic. A short, natural language description of the characteristic could be used to communicate the criterion to an end-user.  The description element is for convenience so that end users can understand the characteristic and is neither a required part of the characteristic nor part of the structured representation of the characteristic.

.. method uses a CodeableConcept datatype and supports specification of how the value of the characteristic is determined. The method modifies the Group.characteristic.code and indicates how the value is to be determined.  For example, HbA1c values can be determined by High-Performance Liquid Chromatography (HPLC) or by capillary electrophoresis. The method may be expressed as multiple concepts, e.g. standing barefoot for height measurements could be expressed as two separate concepts (standing and barefoot) that express the method.

.. determinedByReference uses a Reference datatype to specify a <b>Device</b>, <b>DeviceMetric</b>, or <b>DeviceDefinition</b> used to determine the value of the characteristic

.. determinedByExpression uses an Expression datatype to specify the formula or calculation used to determine the value of the characteristic

In the FHIR version R6 Group Resource, Group.characteristic.determinedBy[x] modifies the Group.characteristic.code and indicates how the value is to be determined, using either a Reference datatype or an Expression datatype.  This provides a means of expressing or modifying the method, not as a set of concepts, but as either a reference to a device or as an Expression.  The reference to a device can be either to a specific device using the Device Resource or the DeviceMetric Resource if a specific set of device parameters is needed, or a type of device using the DeviceDefinition Resource.

.. offset uses a CodeableConcept datatype and supports specification of a reference point from which the value is measured, e.g., 2 units above the upper normal limit would be expressed with a valueQuantity of 2 units and an offset with a coding for Upper Normal Limit. The offset defines the reference point for comparison when other than 0.  To express a characteristic of a calcium level greater than the normal limit or a hemoglobin level less than 1 g/dL below the reference range, the offset concept would represent "normal limit" or "reference range". This is a modifier element because it modifies the meaning of the characteristic.value[x].

.. instancesQuantity and instancesRange are used to express the number of times the characteristic is met, i.e. the number of occurrences meeting the characteristic. There should be a constraint on the Quantity.value and Range.low.value and Range.high.value that it can only be non-negative whole numbers.

.. durationDuration and durationRange are used to express how long the characteristic is met, i.e. the length of time in which the characteristic is met.

.. timing uses a complex expression (matching the RelativeTime datatype in FHIR version R6) to express timing relative to an event or context other than calendar time, e.g. within a month following patient discharge.

Note: RelativeTime is a new datatype in FHIR version R6. RelativeTime is used to express a point in time or an interval of time relative to an event defined in data types other than dateTime.

Example representing "at 12 months form inclusion in a clinical trial" from https://fevir.net/resources/Group/172484 with inclusion defined as enrollment:

 "timing": [
        {
          "contextCode": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "709491003",
                "display": "Enrollment in clinical trial"
              }
            ]
          },
          "offsetDuration": {
            "value": 12,
            "unit": "months",
            "system": "http://unitsofmeasure.org",
            "code": "mo"
          },
          "text": "at 12 months"
        }


The **[CohortDefinition Profile][CohortDefinition]** is a Profile of **[GroupR6][GroupR6]** that is used to provide a conceptual or definitional representation of a group. In FHIR version R6, membership = conceptual allows avoiding the required use of type. In this IG for FHIR version R5, membership is definitional and the type value can be ignored for resource content processing. The quantity and member elements are not used in the **[CohortDefinition Profile][CohortDefinition]**.
The **[CohortDefinition Profile][CohortDefinition]** is used to support characteristics that are combinations of two or more characteristics. 

For example, a group defined by females who are are > 20 years old or have red hair would be defined with combinationMethod = 'all-of' and 2 characteristic instances: {code sex, valueCodeableConcept female} and {code Defined by Reference, valueReference CohortDefinition: > 20y or red hair}. 
The CohortDefinition: > 20y or red hair would be defined with combinationMethod = 'any-of' and 2 characteristic instances: {code age, valueQuantity > 20 years} and {code hair color, valueCodeableConcept red}.

Profiles of **[CohortDefinition][CohortDefinition]** used for the inclusion and exclusion criteria of specific conceptual types of groups include the **[StudyEligibilityCriteria Profile][StudyEligibilityCriteria]** (for a research study), the **[RecommendationEligibilityCriteria Profile][RecommendationEligibilityCriteria]** (for a clinical practice guideline recommendation), the **[SystematicReviewEligibilityCriteria Profile][SystematicReviewEligibilityCriteria]** (for a systematic review), the **[MetaanalysisEligibilityCriteria Profile][MetaanalysisEligibilityCriteria]** (for a statistical meta-analysis), and the **[SearchStrategy Profile][SearchStrategy]** (for a literature search). These Profiles are not currently structurally different than **[CohortDefinition][CohortDefinition]** but are separated for future development in case of specialized developments for eligibility criteria.

The **[ExposureDefinition][ExposureDefinition]**, **[ComparatorDefinition][ComparatorDefinition]**, **[OutcomeDefinition][OutcomeDefinition]**, and **[MetaanalysisOutcomeDefinition Profiles][MetaanalysisOutcomeDefinition]** are Profiles of **[CohortDefinition][CohortDefinition]** used for the definition of evidence variables. These Profiles are not currently structurally different than **[CohortDefinition][CohortDefinition]** but are separated for future development in case of specialized developments for variable definitions.

The **[ExposureGroup][ExposureGroup]** and **[ComparatorGroup Profiles][ComparatorGroup]** are Profiles of **[GroupR6][GroupR6]** used to support 'enumerated' groups. When the evidence is about groups that can be typed to FHIR types, the type element can be used and the membership element can be set to 'enumerated'  In FHIR version R6, when the evidence is not about groups that can be typed to FHIR types, the membership element can be set to 'conceptual' to signal non-use of the type element. These Profiles are provided for future development and to maintain consistency between R5 and R6 versions.

The **[NetEffectContributions Profile][NetEffectContributions]** is a Profile of **[GroupR6][GroupR6]** used to represent an enumerated group of participants in a net effect analysis where the participants are Evidence Resources (**[NetEffectContribution Profile][NetEffectContribution]**). Because <b>Evidence Resources</b> are not among the allowed values in Group.type and not among the allowed values in Group.member.entity, the type of group member is expressed as "Net Effect Contribution" in Group.code.text and the method of listing group members is to use a single characteristic with a code.text value of "Member of" and a valueReference which references a **[NetEffectContributionList Profile][NetEffectContributionList]** of List Resource.

The **[StudyGroup Profile][StudyGroup]** is a Profile of **[GroupR6][GroupR6]** used to represent an enumerated group of participants in a research study. The membership value is set to 'enumerated'.

The **[MetaanalysisStudyGroup Profile][MetaanalysisStudyGroup]** is a Profile of **[GroupR6][GroupR6]** used to represent an enumerated group of participants in a meta-analysis where the participants are <b>Evidence Resources</b>. Because <b>Evidence Resources</b> are not among the allowed values in Group.type and not among the allowed values in Group.member.entity, the type of group member is expressed as "Evidence" in Group.code.text and the method of listing group members is to use a single characteristic with a code.text value of "Member of" and a valueReference which references an **[EvidenceList Profile][EvidenceList]** of List Resource.

The **[EvidenceReportSubject Profile][EvidenceReportSubject]** is a Profile of **[CohortDefinition][CohortDefinition]** used to define the subject of an **[EvidenceReport][EvidenceReport]**. The report subject is defined conceptually as a combination ('all-of') of characteristics. Any characteristic is optional (as there are many types of evidence reports) but common types of characteristics suggested in the Implementation Guide include Population (referencing <b>Group</b>), Intervention or Exposure (referencing <b>EvidenceVariable</b> or <b>Group</b>), Comparator (referencing <b>EvidenceVariable</b> or <b>Group</b>), and Outcomes (referencing **[OutcomeList][OutcomeList]**).

The **[ComparativeEvidenceReportSubject Profile][ComparativeEvidenceReportSubject]** is a Profile of **[EvidenceReportSubject][EvidenceReportSubject]** which requires the use of Population (constrained to reference **[StudyGroup][StudyGroup]**), Intervention or Exposure (constrained to reference **[VariableDefinition][VariableDefinition]** or **[ExposureDefinition][ExposureDefinition]**), Comparator (constrained to reference **[VariableDefinition][VariableDefinition]** or **[ExposureDefinition][ExposureDefinition]** or **[ComparatorDefinition][ComparatorDefinition]**), and Outcomes (constrained to reference **[OutcomeList][OutcomeList]**).

{% include link-list.md %}


---

// File: input/pagecontent/index.md

## EBMonFHIR Implementation Guide

Welcome to the EBMonFHIR Implementation Guide!

The FHIR Resources for Evidence Based Medicine Knowledge Assets ('EBMonFHIR') Implementation Guide defines profiles and value sets for the representation of scientific knowledge. This implementation guide is intended for developers of systems using FHIR for data exchange of scientific knowledge and for authors of more specialized implementation guides in this domain.

This implementation guide covers the broad scope of representation of scientific knowledge, including (1) citations to represent identification, location, classification, and attribution for knowledge artifacts; (2) components of research study design including study eligibility criteria (cohort definitions) and endpoint analysis plans; (3) research results including the statistic findings, definition of variables for which those findings apply, and the certainty of these findings; (4) assessments of research results; (5) aggregation and synthesis of research results; (6) judgments regarding evidence syntheses and contextual factors related to recommendations; (7) recommendations; and (8) compositions of combinations of these types of knowledge. The types of interoperability covered include syntactic (Resource StructureDefinitions) and semantic (value sets).

## To Learn About FHIR

This implementation guide is based on the HL7 [FHIR](http://hl7.org/fhir/R5/index.html) standard. It uses terminology, notations and design principles that are specific to FHIR. Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to review the following prior to reading the rest of this implementation guide.

[FHIR overview](http://hl7.org/fhir/R5/overview.html)

[Developer's introduction](http://hl7.org/fhir/R5/overview-dev.html)

(or [Clinical introduction](http://hl7.org/fhir/R5/overview-clinical.html))

[FHIR data types](http://hl7.org/fhir/R5/datatypes.html)

[Using codes](http://hl7.org/fhir/R5/terminologies.html)

[References between resources](http://hl7.org/fhir/R5/references.html)

[How to read resource & profile definitions](http://hl7.org/fhir/R5/formats.html)

[Base resource](http://hl7.org/fhir/R5/resource.html)

[FHIR Validation](http://hl7.org/fhir/R5/validation.html)

## FHIR Versions R5 and R6

The Evidence Based Medicine on FHIR (EBMonFHIR) developed Resources (<b>ArtifactAssessment</b>, <b>Citation</b>, <b>Evidence</b>, and <b>EvidenceVariable</b>) are first ready for use in the FHIR version R5.  The FHIR version R6 includes further enhancements to these Resources. This EBMonFHIR Implementation Guide is based on FHIR version R5 and adds extensions to FHIR Resources (especially <b>Group</b>, <b>Evidence</b>, and <b>EvidenceVariable</b>) to use the features as structured in FHIR version R6.  This is expected to support smooth interoperabiltiy for EBM Resources whether implementers use R5 or R6 versions.

## Resources Used in the EBMonFHIR IG

### Evidence Resource

The <b>Evidence Resource</b> is the central atomic component for the Evidence-related Resources. The <b>Evidence Resource</b> provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures, outcomes, covariates), the statistics (the quantitative results of a study or statistical analysis), and the certainty of this evidence.

Profiles of <b>Evidence Resource</b> include:

- <b>EvidenceR6</b> is a base for all other Evidence Profiles. Profiles of <b>EvidenceR6</b> include:
  - <b>SingleStudyEvidence</b>
  - <b>EvidenceSynthesisEvidence</b>
  - <b>NonComparativeEvidence</b> -- Profiles of <b>NonComparativeEvidence</b> include:
    - <b>ComparatorOnlyEvidence</b>
    - <b>InterventionOnlyEvidence</b>
    - <b>BaselineMeasureEvidence</b>
    - <b>ParticipantFlowEvidence</b>
  - <b>ComparativeEvidence</b> -- Profiles of <b>ComparativeEvidence</b> include:
    - <b>ComparativeBaselineMeasureEvidence</b>
    - <b>ComparativeParticipantFlowEvidence</b>
    - <b>NetEffectContribution</b>
  - <b>EndpointAnalysisPlan</b>
  - <b>NetEffectEstimate</b> 

### EvidenceVariable Resource

The <b>EvidenceVariable Resource</b> describes a single variable used in a statistical analysis.

Profiles of <b>EvidenceVariable Resource</b> include:
- <b>VariableDefinition</b> is a base for all other EvidenceVariable Profiles. Profiles of <b>VariableDefinition</b> include:
  - <b>GroupAssignment</b>
  - <b>ParticipantFlowEvidenceVariable</b>

### Group Resource

The <b>Group Resource</b> represents a defined collection of entities. The group may be enumerated, meaning that there is a known quantity of group members with or without a listing of the group members. The group may be definitional, meaning there is a structured representation of the characteristics (criteria) that define membership eligiblity, or who or what matches the criteria to be considered a member of the group.

Profiles of <b>Group Resource</b> include:
- <b>GroupR6</b> is a base for all other Group Profiles. Profiles of <b>GroupR6</b> include:
  - <b>StudyGroup</b>
  - <b>ExposureGroup</b>
  - <b>ComparatorGroup</b>
  - <b>MetaanalysisStudyGroup</b>
  - <b>NetEffectContributions</b>
  - <b>CohortDefinition</b> -- Profiles of <b>CohortDefinition</b> include:
    - Profiles of <b>CohortDefinition</b> used for the inclusion and exclusion criteria of specific conceptual types of groups include <b>StudyEligibilityCriteria</b> (for a research study), <b>RecommendationEligibilityCriteria</b> (for a clinical practice guideline recommendation), <b>SystematicReviewEligibilityCriteria</b> (for a systematic review), <b>MetaanalysisEligibilityCriteria</b> (for a statistical meta-analysis), and <b>SearchStrategy</b> (for a literature search). These Profiles are not currently structurally different than <b>CohortDefinition</b> but are separated for future development in case of specialized developments for eligibility criteria.
    - <b>ExposureDefinition</b>, <b>ComparatorDefinition</b>, <b>OutcomeDefinition</b>, and <b>MetaanalysisOutcomeDefinition</b> are Profiles of <b>CohortDefinition</b> used for the definition of evidence variables. These Profiles are not currently structurally different than <b>CohortDefinition</b> but are separated for future development in case of specialized developments for variable definitions.
    - <b>EvidenceReportSubject</b> is used to define the subject of an <b>EvidenceReport</b>. A Profile of <b>EvidenceReportSubject</b> is:
      - <b>ComparativeEvidenceReportSubject</b>

### Citation Resource

The <b>Citation Resource</b> enables reference to any knowledge artifact for purposes of identification and attribution. The <b>Citation Resource</b> supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.

Profiles of <b>Citation Resource</b> include:
- <b>JournalArticleCitation</b>
- <b>BookCitation</b>
- <b>BookPartCitation</b>
- <b>DatabaseCitation</b>
- <b>DatabaseEntryCitation</b>
- <b>DatasetCitation</b>
- <b>PreprintCitation</b>
- <b>SoftwareCitation</b>
- <b>WebPageCitation</b>

### ArtifactAssessment Resource

The <b>ArtifactAssessment Resource</b> provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.

Profiles of <b>ArtifactAssessment Resource</b> include:
- <b>Comment</b>
- <b>Classification</b>
  - <b>DateAsRating Profile</b> is a Profile of <b>Classification</b>
- <b>Rating</b>
- <b>CertaintyOfEvidence</b>
- <b>RiskOfBias</b>
- <b>RecommendationJustification</b>
- <b>OutcomeImportance</b>
- <b>CompositeRating</b>
- <b>Adaptation</b>
  - <b>Comparison Profile</b> is a Profile of <b>Adaptation</b>

### Composition Resource

The <b>Composition Resource</b> is a structure for grouping information for purposes of persistence and attestability. The <b>Composition Resource</b> provides the basic structure for a FHIR document. The full content of the document is expressed using a <b>Bundle Resource</b> containing the Composition and its entries (which are references to other FHIR Resources).

Profiles of <b>Composition Resource</b> include:
- <b>EvidenceReport</b> is used for a base structure (canonical resource management) for a report combining any number of <b>Citation</b>, <b>Evidence</b>, <b>EvidenceVariable</b>, <b>EvidenceReport</b>, and related Resources. Profiles of <b>EvidenceReport</b> include:
  - <b>ComparativeEvidenceReport</b> is used for an evidence report including the study group, exposure, comparator, and findings for any number of outcomes comparing the exposure to the comparator in the study group. 
  - <b>BaselineMeasureReport</b> is used for an evidence report including the findings for any number of baseline measures in a research study. 
  - <b>EvidenceMap</b> is used for an organized listing of Resources used to generate <b>EvidenceReport</b> instances.
  - <b>M11Report</b> is used for the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH) Clinical Electronic Structured Harmonised Protocol (CeSHarP) M11 Technical Specification.
  - <b>EvidenceReportPackage</b> is used for a base structure to extend the <b>EvidenceReport Profile</b> with optional sections for Introduction, Discussion, Methods, References, Competing Interests, Acknowledgements, and Appendices. Profiles of <b>EvidenceReportPackage</b> include:
    - <b>Guideline</b> is used for the composition of a clinical practice guideline and may be tightly related to use of the <b>Recommendation Profile</b> for related content. 
    - <b>Recommendation</b> is used for the composition of a recommendation (such as that from a clinical practice guideline) and may be tightly related to a <b>RecommendationPlan Profile</b> of PlanDefinition and a <b>RecommendationJustification Profile</b> of ArtifactAssessment. 
    - <b>SummaryOfFindings</b> is used for an evidence report combining <b>Evidence</b> and <b>EvidenceVariable Resources</b>, organized around <b>VariableDefinition</b> (Profile of EvidenceVariable), to represent the summary of findings of comparative evidence. 
    - <b>SummaryOfNetEffect</b> is used for an evidence report combining <b>ArtifactAssessment</b>, <b>Evidence</b>, and <b>EvidenceVariable Resources</b>, organized around <b>VariableDefinition</b> (Profile of EvidenceVariable), to represent the summary of net effect contributions of comparative evidence, adjusted for the relative importance of outcomes. 

### Other Resources

Other Resources and <b>Other Profiles</b> used in the EBMonFHIR Implementation Guide include:
- <b>ResearchStudy Resource</b>
  - <b>M11ResearchStudy</b> used to add extensions for use with an M11 Report.
  - <b>SystematicReview</b> used for a research study that involves investigation of research studies.
- <b>ActivityDefinition Resource</b> including a Profile of:
  - <b>RecommendationAction</b> used for a recommendation from a clinical practice guideline.
- <b>PlanDefinition Resource</b> including Profiles of:
  - <b>RecommendationPlan</b> used for the implementable representation of a recommendation (such as that from a clinical practice guideline). <b>RecommendationPlan</b> is developed to match the CPGonFHIR related Implementation Guidance.
  - <b>SoaPlanDefinition</b> used for the representation of a schedule of activities that is often includes with a research study protocol. <b>SoaPlanDefinition</b> is in development related to efforts to support the <b>M11Report Profile</b>.
- <b>Library Resource</b> including Profiles of:
  - <b>SearchResults</b> used to represent search results, such as for a systematic review. The subjectReference element is limited to reference a <b>SearchStrategy Profile</b>.
  - <b>SystematicReviewIncludedStudies</b> used to represent the subset of search results of a systematic review which meet the inclusion criteria. The subjectReference element is limited to reference a <b>SystematicReviewEligibilityCriteria Profile</b>.
  - <b>SystematicReviewExcludedStudies</b> used to represent the subset of search results of a systematic review which did not meet the inclusion criteria. The subjectReference element is limited to reference a <b>SystematicReviewEligibilityCriteria Profile</b>.
- <b>List Resource</b> including Profiles of:
  - <b>EvidenceList</b> used provide a list of <b>Evidence Resources</b>. <b>EvidenceList</b> is used to represent a group of evidence for the population for an <b>EvidenceSynthesisEvidence</b> using a summary data meta-analysis approach and is referenced from a <b>MetaanalysisStudyGroup</b>. The entry element is repeatable and limited to reference an <b>Evidence Resource</b>.
  - <b>NetEffectContributionList</b> used provide a list of Evidence Resources (<b>NetEffectContribution Profile</b>). <b>NetEffectContributionList</b> is used to represent a group of evidence for the population for a <b>NetEffectEstimate</b> (Profile of Evidence) using a net effect analysis approach and is referenced from a <b>NetEffectContributions</b> (Profile of Group). The entry element is repeatable and limited to reference a <b>NetEffectContribution Resource</b>.
  - <b>OutcomeList</b> used provide a list of outcomes. <b>OutcomeList</b> is referenced in the <b>EvidenceReportSubject Profile</b> as a way to define the set of outcomes that an <b>EvidenceReport</b> is about. The entry element is repeatable and limited to reference an <b>OutcomeDefinition Profile</b> or a <b>VariableDefinition Profile</b>.

## Dependencies and Statements

### Dependencies

{% include dependency-table-short.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/otherprofiles.md

### Profiles of ResearchStudy Resource

The **[M11ResearchStudy Profile][M11ResearchStudy]** is a Profile of <b>ResearchStudy Resource</b> and is used to add extensions for use with an M11 Report.

The **[SystematicReview Profile][SystematicReview]** is a Profile of <b>ResearchStudy Resource</b> and is used for a scientific study based on a protocol that includes search and selection of eligible studies, study quality assessment, data extraction, and synthesis.

Extensions are provided for searchStrategy, systematicReviewEligibilityCriteria, numberOfStudiesIdentified, numberOfStudiesIncluded, includedStudy, excludedStudy, and resultAsComposition.

### RecommendationAction Profile of ActivityDefinition Resource

The **[RecommendationAction Profile][RecommendationAction]** is a Profile of <b>ActivityDefinition Resource</b> and is used for a recommendation from a clinical practice guideline.

A CharacteristicTiming extension named timingRelativeTime provides support for the RelativeTime datatype in FHIR version R6 to be used in FHIR version R5.

### RecommendationPlan Profile of PlanDefinition Resource

The **[RecommendationPlan Profile][RecommendationPlan]** is a Profile of <b>PlanDefinition Resource</b> and is used for the implementable representation of a recommendation (such as that from a clinical practice guideline). The **[RecommendationPlan Profile][RecommendationPlan]** is developed to match the CPGonFHIR related Implementation Guidance.

A CharacteristicTiming extension named timingRelativeTime is available for the PlanDefinition.action element to provide support for the RelativeTime datatype in FHIR version R6 to be used in FHIR version R5.

### SoaPlanDefinition Profile of PlanDefinition Resource

The **[SoaPlanDefinition Profile][SoaPlanDefinition]** is a Profile of <b>PlanDefinition Resource</b> and is used for the representation of a schedule of activities that is often includes with a research study protocol. The **[SoaPlanDefinition Profile][SoaPlanDefinition]** is in development related to efforts to support the **[M11Report Profile][M11Report]**.

A CharacteristicTiming extension named timingRelativeTime is available for the PlanDefinition.action element to provide support for the RelativeTime datatype in FHIR version R6 to be used in FHIR version R5.

### Profiles of Library Resource

The **[SearchResults Profile][SearchResults]** is used to represent search results, such as for a systematic review. The subjectReference element is limited to reference a **[SearchStrategy Profile][SearchStrategy]**.

The **[SystematicReviewIncludedStudies Profile][SystematicReviewIncludedStudies]** is used to represent the subset of search results of a systematic review which meet the inclusion criteria. The subjectReference element is limited to reference a **[SystematicReviewEligibilityCriteria Profile][SystematicReviewEligibilityCriteria]**.

The **[SystematicReviewExcludedStudies Profile][SystematicReviewExcludedStudies]** is used to represent the subset of search results of a systematic review which did not meet the inclusion criteria. The subjectReference element is limited to reference a **[SystematicReviewEligibilityCriteria Profile][SystematicReviewEligibilityCriteria]**.

### Profiles of List Resource

The **[EvidenceList Profile][EvidenceList]** is used provide a list of <b>Evidence Resources</b>. The **[EvidenceList Profile][EvidenceList]** is used to represent a group of evidence for the population for an **[EvidenceSynthesisEvidence][EvidenceSynthesisEvidence]** using a summary data meta-analysis approach and is referenced from a **[MetaanalysisStudyGroup][MetaanalysisStudyGroup]**. The entry element is repeatable and limited to reference an <b>Evidence Resource</b>.

The **[NetEffectContributionList Profile][NetEffectContributionList]** is used provide a list of Evidence Resources (**[NetEffectContribution Profile][NetEffectContribution]**). The **[NetEffectContributionList Profile][NetEffectContributionList]** is used to represent a group of evidence for the population for a **[NetEffectEstimate][NetEffectEstimate]** (Profile of Evidence) using a net effect analysis approach and is referenced from a **[NetEffectContributions][NetEffectContributions]** (Profile of Group). The entry element is repeatable and limited to reference a <b>NetEffectContribution Resource</b>.

The **[OutcomeList Profile][OutcomeList]** is used provide a list of outcomes. The **[OutcomeList Profile][OutcomeList]** is referenced in the **[EvidenceReportSubject Profile][EvidenceReportSubject]** as a way to define the set of outcomes that an **[EvidenceReport][EvidenceReport]** is about. The entry element is repeatable and limited to reference an **[OutcomeDefinition Profile][OutcomeDefinition]** or a **[VariableDefinition Profile][VariableDefinition]**.

{% include link-list.md %}

---

// File: input/pagecontent/profiles.md

{% include table-profiles.xhtml %}


---

// File: input/pagecontent/terminologies.md

### Terminologies

To download related CodeSystem and ValueSet Resources:

Copy the JSON content from 
* [Scientific Evidence Code System (SEVCO)](https://fevir.net/resources/CodeSystem/181513#json)
* [Recommendation Justification Code System](https://fevir.net/resources/CodeSystem/27834#json)
* [Evidence Based Medicine on FHIR Implementation Guide Code System](https://fevir.net/resources/CodeSystem/179423#json)
* [EvidenceVariableRoleSubtype Value Set](https://fevir.net/resources/ValueSet/179424#json)
* [EvidenceReportSectionCode Value Set](https://fevir.net/resources/ValueSet/179431#json)

or use the [FEvIR API](https://fevir.net/apidoc).


### Code Systems

{% include table-codesystems.xhtml %}

### Value Sets

{% include table-valuesets.xhtml %}


---

// File: input/includes/link-list.md

[Adaptation]: StructureDefinition-adaptation.html
[ArtifactAssessmentCompared]: StructureDefinition-artifact-assessment-compared.html
[ArtifactAssessmentDateAsRating]: StructureDefinition-artifact-assessment-date-as-rating.html
[BaselineMeasureEvidence]: StructureDefinition-baseline-measure-evidence.html
[BaselineMeasureReport]: StructureDefinition-baseline-measure-report.html
[BookCitation]: StructureDefinition-book-citation.html
[BookPartCitation]: StructureDefinition-book-part-citation.html
[CertaintyOfEvidence]: StructureDefinition-certainty-of-evidence.html
[CharacteristicTiming]: StructureDefinition-characteristic-timing.html
[Classification]: StructureDefinition-classification.html
[CohortDefinition]: StructureDefinition-cohort-definition.html
[Comment]: StructureDefinition-comment.html
[ComparativeBaselineMeasureEvidence]: StructureDefinition-comparative-baseline-measure-evidence.html
[ComparativeEvidence]: StructureDefinition-comparative-evidence.html
[ComparativeEvidenceReport]: StructureDefinition-comparative-evidence-report.html
[ComparativeEvidenceReportSubject]: StructureDefinition-comparative-evidence-report-subject.html
[ComparativeParticipantFlowEvidence]: StructureDefinition-comparative-participant-flow-evidence.html
[ComparatorDefinition]: StructureDefinition-comparator-definition.html
[ComparatorGroup]: StructureDefinition-comparator-group.html
[ComparatorOnlyEvidence]: StructureDefinition-comparator-only-evidence.html
[Comparison]: StructureDefinition-comparison.html
[CompositeRating]: StructureDefinition-composite-rating.html
[ConceptualCohortDefinition]: StructureDefinition-conceptual-cohort-definition.html
[DatabaseCitation]: StructureDefinition-database-citation.html
[DatabaseEntryCitation]: StructureDefinition-database-entry-citation.html
[DatasetCitation]: StructureDefinition-dataset-citation.html
[DateAsRating]: StructureDefinition-date-as-rating.html
[EndpointAnalysisPlan]: StructureDefinition-endpoint-analysis-plan.html
[Evidence Based Medicine on FHIR Implementation Guide Code System]: CodeSystem-179423.html
[EvidenceList]: StructureDefinition-evidence-list.html
[EvidenceMap]: StructureDefinition-evidence-map.html
[EvidenceReport]: StructureDefinition-evidence-report.html
[EvidenceReportPackage]: StructureDefinition-evidence-report-package.html
[EvidenceMeasureReportPackage]: StructureDefinition-evidence-measure-report-package.html
[EvidenceReportSubject]: StructureDefinition-evidence-report-subject.html
[EvidenceSynthesisEvidence]: StructureDefinition-evidence-synthesis-evidence.html
[EvidenceVariableDefinition]: StructureDefinition-evidence-variable-definition.html
[ExposureDefinition]: StructureDefinition-exposure-definition.html
[ExposureGroup]: StructureDefinition-exposure-group.html
[GroupAssignment]: StructureDefinition-group-assignment.html
[GroupR6]: StructureDefinition-group-r6.html
[Guideline]: StructureDefinition-guideline.html
[InterventionOnlyEvidence]: StructureDefinition-intervention-only-evidence.html
[JournalArticleCitation]: StructureDefinition-journal-article-citation.html
[M11Report]: StructureDefinition-m11-report.html
[M11ResearchStudy]: StructureDefinition-m11-research-study.html
[MetaanalysisEligibilityCriteria]: StructureDefinition-metaanalysis-eligibility-criteria.html
[MetaanalysisOutcomeDefinition]: StructureDefinition-metaanalysis-outcome-definition.html
[MetaanalysisStudyGroup]: StructureDefinition-metaanalysis-study-group.html
[NetEffectContribution]: StructureDefinition-net-effect-contribution.html
[NetEffectContributionList]: StructureDefinition-net-effect-contribution-list.html
[NetEffectContributions]: StructureDefinition-net-effect-contributions.html
[NetEffectEstimate]: StructureDefinition-net-effect-estimate.html
[NonComparativeEvidence]: StructureDefinition-non-comparative-evidence.html
[OutcomeDefinition]: StructureDefinition-outcome-definition.html
[OutcomeImportance]: StructureDefinition-outcome-importance.html
[OutcomeList]: StructureDefinition-outcome-list.html
[OutcomeMeasureReport]: StructureDefinition-outcome-measure-report.html
[ParticipantFlowEvidence]: StructureDefinition-participant-flow-evidence.html
[ParticipantFlowEvidenceVariable]: StructureDefinition-participant-flow-evidence-variable.html
[ParticipantFlowReport]: StructureDefinition-participant-flow-report.html
[PreprintCitation]: StructureDefinition-preprint-citation.html
[Rating]: StructureDefinition-rating.html
[Recommendation]: StructureDefinition-recommendation.html
[Recommendation Justification Code System]: CodeSystem-27834.html
[RecommendationAction]: StructureDefinition-recommendation-action.html
[RecommendationEligibilityCriteria]: StructureDefinition-recommendation-eligibility-criteria.html
[RecommendationJustification]: StructureDefinition-recommendation-justification.html
[RecommendationPlan]: StructureDefinition-recommendation-plan.html
[ResearchStudyDataDictionary]: StructureDefinition-research-study-data-dictionary.html
[RiskOfBias]: StructureDefinition-risk-of-bias.html
[Scientific Evidence Code System (SEVCO) -- EXAMPLE VERSION for EBMonFHIR Implementation Guide]: CodeSystem-181513.html
[SearchResults]: StructureDefinition-search-results.html
[SearchStrategy]: StructureDefinition-search-strategy.html
[SingleStudyEvidence]: StructureDefinition-single-study-evidence.html
[SoaPlanDefinition]: StructureDefinition-soa-plandefinition.html
[SoftwareCitation]: StructureDefinition-software-citation.html
[StatisticModel]: StructureDefinition-statistic-model.html
[StatisticModelExpression]: StructureDefinition-statistic-model-expression.html
[StatisticModelIncludeIf]: StructureDefinition-statistic-model-include-if.html
[StudyEligibilityCriteria]: StructureDefinition-study-eligibility-criteria.html
[StudyGroup]: StructureDefinition-study-group.html
[SummaryOfFindings]: StructureDefinition-summary-of-findings.html
[SummaryOfNetEffect]: StructureDefinition-summary-of-net-effect.html
[SystematicReview]: StructureDefinition-systematic-review.html
[SystematicReviewEligibilityCriteria]: StructureDefinition-systematic-review-eligibility-criteria.html
[SystematicReviewExcludedStudies]: StructureDefinition-systematic-review-excluded-studies.html
[SystematicReviewIncludedStudies]: StructureDefinition-systematic-review-included-studies.html
[WebPageCitation]: StructureDefinition-web-page-citation.html
[VariableDefinition]: StructureDefinition-variable-definition.html

[VS EBMImplementationGuideProfile Value Set]: ValueSet-179430.html
[VS Evidence Variable Role Subtype Value Set]: ValueSet-evidence-variable-role-subtype.html
[VS EvidenceReportSectionCode Value Set]: ValueSet-179431.html
[VS EvidenceVariableRoleSubtype Value Set]: ValueSet-179424.html
[VS Recommendation Justification Classifier Codes Value Set]: ValueSet-recommendation-justification-classifier.html
[VS Risk Of Bias Type Value Set]: ValueSet-181524.html


---

// File: input/intro-notes/StructureDefinition-adaptation-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information about the resource structure.

---

// File: input/intro-notes/StructureDefinition-baseline-measure-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-baseline-measure-report-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-book-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-book-part-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-certainty-of-evidence-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-classification-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-cohort-definition-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comment-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparative-baseline-measure-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparative-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparative-evidence-report-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparative-evidence-report-subject-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparative-participant-flow-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparator-definition-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparator-group-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparator-only-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-comparison-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-composite-rating-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-database-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-database-entry-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-dataset-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-date-as-rating-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-endpoint-analysis-plan-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-evidence-map-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-evidence-r6-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-evidence-report-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-evidence-report-subject-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-evidence-synthesis-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-exposure-definition-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-exposure-group-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-group-assignment-intro.md

See [Understanding the EvidenceVariable Resource](evidencevariable.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-group-r6-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-guideline-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-intervention-only-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-journal-article-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-m11-report-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-metaanalysis-eligibility-criteria-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-metaanalysis-outcome-definition-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-metaanalysis-study-group-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-net-effect-contribution-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-net-effect-contributions-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-net-effect-estimate-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-non-comparative-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-outcome-definition-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-outcome-importance-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-participant-flow-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-participant-flow-measure-intro.md

See [Understanding the EvidenceVariable Resource](evidencevariable.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-participant-flow-report-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-preprint-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-rating-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-recommendation-eligibility-criteria-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-recommendation-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-recommendation-justification-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-risk-of-bias-intro.md

See [Understanding the ArtifactAssessment Resource](artifactassessment.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-search-strategy-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-single-study-evidence-intro.md

See [Understanding the Evidence Resource](evidence.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-software-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-study-eligibility-criteria-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-study-group-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-summary-of-findings-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-summary-of-net-effect-intro.md

See [Understanding the Composition Resource](composition.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-systematic-review-eligibility-criteria-intro.md

See [Understanding the Group Resource](group.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-variable-definition-intro.md

See [Understanding the EvidenceVariable Resource](evidencevariable.html) for additional information.

---

// File: input/intro-notes/StructureDefinition-web-page-citation-intro.md

See [Understanding the Citation Resource](citation.html) for additional information.

---

// File: input/pagecontent/examples.md

{% include example-list-generator.md %}


---

// File: input/fsh/activity-definition/p-recommendation-action.fsh

Profile: RecommendationAction
Parent: ActivityDefinition
Id: recommendation-action
Description: "Profile of ActivityDefinition for Evidence Based Medicine IG. The RecommendationAction Profile is used for a recommendation from a clinical practice guideline."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains CharacteristicTiming named timingRelativeTime 0..1
* topic 0..0

---

// File: input/fsh/aliases.fsh

Alias: $cs-synthesis-type = http://terminology.hl7.org/CodeSystem/synthesis-type
Alias: $cs-variable-role = http://terminology.hl7.org/CodeSystem/variable-role
Alias: $cs-sevco-for-ebm-ig = https://fevir.net/resources/CodeSystem/181513
Alias: $recommendation-justification-classifiers = https://fevir.net/resources/CodeSystem/27834
Alias: $cs-ebm-ig = https://fevir.net/resources/CodeSystem/179423
Alias: $cpg-common-persona = http://hl7.org/fhir/uv/cpg/ValueSet/cpg-common-persona
Alias: $ebm-evidence-variable-role-subtype = https://fevir.net/resources/ValueSet/179424
Alias: $ebm-evidence-report-section-code = https://fevir.net/resources/ValueSet/179431
Alias: $ebm-evidence-statistic-type = http://hl7.org/fhir/ValueSet/statistic-type
Alias: $ebm-risk-of-bias-type = https://fevir.net/resources/ValueSet/181524
Alias: $ebm-search-strategy-characteristic-code = https://fevir.net/resources/ValueSet/265087
Alias: $research-study-objective-type = http://hl7.org/fhir/ValueSet/research-study-objective-type

 // Aliases for common structure definition extensions
Alias: $ext-fmm = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: $ext-wg = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias: $ext-standards-status = http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status

Alias: $ext-characteristic-expression = http://hl7.org/fhir/StructureDefinition/characteristicExpression

Alias: $ext-url = http://hl7.org/fhir/StructureDefinition/artifact-url
Alias: $ext-description = http://hl7.org/fhir/StructureDefinition/artifact-description
Alias: $ext-version = http://hl7.org/fhir/StructureDefinition/artifact-version
Alias: $ext-versionAlgorithm = http://hl7.org/fhir/StructureDefinition/artifact-versionAlgorithm
Alias: $ext-title = http://hl7.org/fhir/StructureDefinition/artifact-title
Alias: $ext-status = http://hl7.org/fhir/StructureDefinition/artifact-status
Alias: $ext-experimental = http://hl7.org/fhir/StructureDefinition/artifact-experimental
Alias: $ext-date = http://hl7.org/fhir/StructureDefinition/artifact-date
Alias: $ext-publisher = http://hl7.org/fhir/StructureDefinition/artifact-publisher
Alias: $ext-contact = http://hl7.org/fhir/StructureDefinition/artifact-contact
Alias: $ext-useContext = http://hl7.org/fhir/StructureDefinition/artifact-useContext
Alias: $ext-purpose = http://hl7.org/fhir/StructureDefinition/artifact-purpose
Alias: $ext-copyright = http://hl7.org/fhir/StructureDefinition/artifact-copyright
Alias: $ext-copyrightLabel = http://hl7.org/fhir/StructureDefinition/artifact-copyrightLabel
Alias: $ext-author = http://hl7.org/fhir/StructureDefinition/artifact-author
Alias: $ext-relatedArtifact = http://hl7.org/fhir/StructureDefinition/artifact-relatedArtifact

Alias: $ext-characteristic-method = http://hl7.org/fhir/6.0/StructureDefinition/extension-Group.characteristic.method
Alias: $ext-researchStudy-studyRegistration = http://hl7.org/fhir/StructureDefinition/researchStudy-studyRegistration

---

// File: input/fsh/artifact-assessment/ext-artifact-assessment-compared.fsh

Extension: ArtifactAssessmentCompared
Id: artifact-assessment-compared
Description: "The artifact being compared to the referenced artifact."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ArtifactAssessment"
* value[x] only Reference or canonical or uri
* . ^short = "The artifact being compared to the referenced artifact"
* . ^definition = "The artifact being compared to the referenced artifact."


---

// File: input/fsh/artifact-assessment/ext-artifact-assessment-date-as-rating.fsh

Extension: ArtifactAssessmentDateAsRating
Id: artifact-assessment-date-as-rating
Description: "A date or dateTime value as the classifier or rating value."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ArtifactAssessment.content"
* value[x] only dateTime
* . ^short = "A date value as the classifier or rating value."
* . ^definition = "A date or dateTime value as the classifier or rating value."


---

// File: input/fsh/artifact-assessment/p-adaptation.fsh

Profile: Adaptation
Parent: ArtifactAssessment
Id: adaptation
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The Adaptation Profile is used for assessments of a knowledge artifact that are used to create a new knowledge artifact through acceptance, rejection or modification of the assessed artifact."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this Adaptation when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the Adaptation"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Adaptation."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the Adaptation." 
  * ^short = "How to cite the Adaptation"
* date
  * ^definition = "The date (and optionally time) when the Adaptation was published. The date should change when the substantive content of the Adaptation changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the Adaptation and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Adaptation."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the Adaptation and/or its content."
* approvalDate ^short = "When the Adaptation was approved by publisher"
* lastReviewDate ^short = "When the Adaptation was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the Adaptation is about."
  * ^short = "The artifact that is being adapted"
* content
  * ^definition = "A comment, rating or classification of the artifact."
  * ^short = "A comment, rating or classification"
* content.informationType 0..0
* content.freeToShare
  * ^definition = "Acceptable to publicly share the Adaptation content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the content"
* workflowStatus
  * ^definition = "Indicates the workflow status of the adaptation process."
  * ^short = "The workflow status of the adaptation process"
* disposition
  * ^definition = "Indicates the disposition of the responsible party for approval of the adaptation."
  * ^short = "The disposition of the proposed adaptation"


---

// File: input/fsh/artifact-assessment/p-certainty-of-evidence.fsh

Profile: CertaintyOfEvidence
Parent: ArtifactAssessment
Id: certainty-of-evidence
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The CertaintyOfEvidence Profile is used for expression of the certainty (also called quality or confidence in the estimates) of an Evidence artifact." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this CertaintyOfEvidence when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the CertaintyOfEvidence"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the CertaintyOfEvidence."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the CertaintyOfEvidence." 
  * ^short = "How to cite the CertaintyOfEvidence"
* date
  * ^definition = "The date (and optionally time) when the CertaintyOfEvidence was published. The date should change when the substantive content of the CertaintyOfEvidence changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the CertaintyOfEvidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the CertaintyOfEvidence."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the CertaintyOfEvidence and/or its content."
* approvalDate ^short = "When the CertaintyOfEvidence was approved by publisher"
* lastReviewDate ^short = "When the CertaintyOfEvidence was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the CertaintyOfEvidence is about."
  * ^short = "The artifact that is rated"
* content
  * ^definition = "A rating or classification of the artifact."
  * ^short = "A rating"
* content.informationType 0..0
* content.type from http://hl7.org/fhir/ValueSet/certainty-type (extensible)
* content.classifier from http://hl7.org/fhir/ValueSet/certainty-rating (extensible)
* content.freeToShare
  * ^definition = "Acceptable to publicly share the CertaintyOfEvidence content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the CertaintyOfEvidence content"

---

// File: input/fsh/artifact-assessment/p-classification.fsh

Profile: Classification
Parent: ArtifactAssessment
Id: classification
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The Classification Profile is used for classifier tags that may be created independently from Resource creators and may be used for search indexes."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this Classification when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the Classification"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Classification."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the Classification." 
  * ^short = "How to cite the Classification"
* date
  * ^definition = "The date (and optionally time) when the Classification was published. The date should change when the substantive content of the Classification changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the Classification and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Classification."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the Classification and/or its content."
* approvalDate ^short = "When the Classification was approved by publisher"
* lastReviewDate ^short = "When the Classification was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the Classification is about."
  * ^short = "The artifact that is classified"
* content 1..*
  * ^definition = "A classification of the artifact."
  * ^short = "A classification"
* content.informationType 0..0
* content.freeToShare
  * ^definition = "Acceptable to publicly share the classification content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the classification content"



---

// File: input/fsh/artifact-assessment/p-comment.fsh

Profile: Comment
Parent: ArtifactAssessment
Id: comment
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The Comment Profile is used for comments about a Resource that may be created independently from Resource creators."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this Comment when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the Comment"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Comment."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the Comment." 
  * ^short = "How to cite the Comment"
* date
  * ^definition = "The date (and optionally time) when the Comment was published. The date should change when the substantive content of the Comment changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the Comment and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Comment."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the Comment and/or its content."
* approvalDate ^short = "When the Comment was approved by publisher"
* lastReviewDate ^short = "When the Comment was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the Comment is about."
  * ^short = "The artifact that is commented upon"
* content 1..*
  * ^definition = "A comment about the artifact."
  * ^short = "A comment"
* content.informationType 0..0
* content.freeToShare
  * ^definition = "Acceptable to publicly share the Comment content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the Comment content"
* workflowStatus 0..0
* disposition 0..0


---

// File: input/fsh/artifact-assessment/p-comparison.fsh

Profile: Comparison
Parent: Adaptation
Id: comparison
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The Comparison Profile is used for assessments of similarities and differences between knowledge artifacts."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains ArtifactAssessmentCompared named comparedArtifact 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this Comparison when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the Comparison"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Comparison."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the Comparison." 
  * ^short = "How to cite the Comparison"
* date
  * ^definition = "The date (and optionally time) when the Comparison was published. The date should change when the substantive content of the Comparison changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the Comparison and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Comparison."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the Comparison and/or its content."
* approvalDate ^short = "When the Comparison was approved by publisher"
* lastReviewDate ^short = "When the Comparison was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the Comparison is about."
  * ^short = "The artifact that is being compared"
* content.informationType 0..0
* content.freeToShare
  * ^definition = "Acceptable to publicly share the Comparison content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the content"
* workflowStatus
  * ^definition = "Indicates the workflow status of the comparison and adaptation process."
  * ^short = "The workflow status of the comparison and adaptation process"
* disposition
  * ^definition = "Indicates the disposition of the responsible party for approval of the comparison and adaptation."
  * ^short = "The disposition of the proposed adaptation"


---

// File: input/fsh/artifact-assessment/p-composite-rating.fsh

Profile: CompositeRating
Parent: ArtifactAssessment
Id: composite-rating
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The CompositeRating Profile is used for a composite rating or classification of a Resource that may be created following ratings or classifications by two or more parties."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this CompositeRating when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the CompositeRating"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Comment."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the CompositeRating." 
  * ^short = "How to cite the CompositeRating"
* date
  * ^definition = "The date (and optionally time) when the CompositeRating was published. The date should change when the substantive content of the CompositeRating changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the CompositeRating and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the CompositeRating."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the CompositeRating and/or its content."
* approvalDate ^short = "When the CompositeRating was approved by publisher"
* lastReviewDate ^short = "When the CompositeRating was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the CompositeRating is about."
  * ^short = "The artifact that is rated or classified"
* content.informationType 0..0
* content 1..*
  * ^definition = "A rating or classification of the artifact."
  * ^short = "A rating or classification"
* content.freeToShare
  * ^definition = "Acceptable to publicly share the CompositeRating content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the CompositeRating content"


---

// File: input/fsh/artifact-assessment/p-date-as-rating.fsh

Profile: DateAsRating
Parent: Classification
Id: date-as-rating
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The DateAsRating Profile is used for representing a date or dateTime as a classifier value."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* content
  * extension contains ArtifactAssessmentDateAsRating named dateAsRating 0..*
  * informationType 0..0



---

// File: input/fsh/artifact-assessment/p-outcome-importance.fsh

Profile: OutcomeImportance
Parent: ArtifactAssessment
Id: outcome-importance
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The OutcomeImportance Profile is used for expression of the relative importance of an outcome. The outcome is typically expressed with an EvidenceVariable Resource and may use the VariableDefinition Profile of EvidenceVariable (or OutcomeDefinition Profile of Group)." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this OutcomeImportance when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the OutcomeImportance"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the OutcomeImportance."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the OutcomeImportance." 
  * ^short = "How to cite the OutcomeImportance"
* date
  * ^definition = "The date (and optionally time) when the OutcomeImportance was published. The date should change when the substantive content of the OutcomeImportance changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the OutcomeImportance and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the OutcomeImportance."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the OutcomeImportance and/or its content."
* approvalDate ^short = "When the OutcomeImportance was approved by publisher"
* lastReviewDate ^short = "When the OutcomeImportance was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the OutcomeImportance is about."
  * ^short = "The artifact that is rated"
* content 1..*
  * ^definition = "A rating or classification of the artifact."
  * ^short = "A rating"
* content.informationType 0..0
* content.quantity 0..1
  * ^short = "Percentage of importance of reference outcome" 
  * ^definition = "A quantitative rating of the relative importance of the outcome."
* content.quantity.value 1..1
  * ^comment = "The value must be 0 (no importance) or a positive decimal. The value of 100 represents the importance of the reference outcome. A value greater than 100 represents exceptionally high importance that is higher than the importance of the reference outcome."
* content.quantity.comparator 0..0
* content.quantity.unit 1..1
* content.quantity.unit = "%"
* content.quantity.system 1..1
* content.quantity.system = "http://unitsofmeasure.org"
* content.quantity.code 1..1
* content.quantity.code = #%
* content.freeToShare
  * ^definition = "Acceptable to publicly share the OutcomeImportance content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the OutcomeImportance content"
* workflowStatus 0..0
* disposition 0..0

---

// File: input/fsh/artifact-assessment/p-rating.fsh

Profile: Rating
Parent: ArtifactAssessment
Id: rating
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The Rating Profile is used for classifier tags that may include quantitative ratings and may be created independently from Resource creators."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this Rating when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the Rating"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Rating."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the Rating." 
  * ^short = "How to cite the Rating"
* date
  * ^definition = "The date (and optionally time) when the Rating was published. The date should change when the substantive content of the Rating changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the Rating and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Rating."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the Rating and/or its content."
* approvalDate ^short = "When the Rating was approved by publisher"
* lastReviewDate ^short = "When the Rating was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the Rating is about."
  * ^short = "The artifact that is rated"
* content 1..*
  * ^definition = "A rating of the artifact."
  * ^short = "A rating"
* content.informationType 0..0
* content.quantity
  * ^short = "Quantitative rating"
  * ^definition = "A quantitative rating of the artifact."
  * value 1..1
* content.freeToShare
  * ^definition = "Acceptable to publicly share the rating content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the rating content"



---

// File: input/fsh/artifact-assessment/p-recommendation-justification.fsh

Profile: RecommendationJustification
Parent: ArtifactAssessment
Id: recommendation-justification
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The RecommendationJustification Profile is used for expressing the rationale, evidence, and judgments supporting a recommendation, such as from a clinical practice guideline." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this Recommendation Justification when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the Recommendation Justification"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the Recommendation Justification."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the Recommendation Justification." 
  * ^short = "How to cite the Recommendation Justification"
* date
  * ^definition = "The date (and optionally time) when the Recommendation Justification was published. The date should change when the substantive content of the Rating changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the Recommendation Justification and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Recommendation Justification."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the Recommendation Justification and/or its content."
* approvalDate ^short = "When the Recommendation Justification was approved by publisher"
* lastReviewDate ^short = "When the Recommendation Justification was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the Recommendation Justification is about."
  * ^short = "The recommendation that is justified"
* content 1..5
  * ^definition = "A comment, rating, or classification of the recommendation."
  * ^short = "A comment, rating, or classification"
* content ^slicing.discriminator.type = #value
* content ^slicing.discriminator.path = "type"
* content ^slicing.rules = #closed
* content contains recommendationSpecification 1..1 MS and evidence 0..1 MS and netEffect 0..1 MS and judgments 0..1 MS and competingInterests 0..1 MS
* content[recommendationSpecification].type = https://fevir.net/resources/CodeSystem/179423#recommendation-specification "Recommendation Specification"
* content[recommendationSpecification]
  * component ^slicing.discriminator.type = #value
  * component ^slicing.discriminator.path = "type"
  * component ^slicing.rules = #closed
  * component contains ratingSystem 0..1 MS and strengthOfRecommendation 0..1 MS and directionOfRecommendation 0..1 MS and otherRatings 0..1 and discussion 0..1
  * component[ratingSystem].type = https://fevir.net/resources/CodeSystem/179423#rating-system "Rating System"
  * component[strengthOfRecommendation].type = https://fevir.net/resources/CodeSystem/179423#strength-of-recommendation "Strength of Recommendation"
  * component[directionOfRecommendation].type = https://fevir.net/resources/CodeSystem/179423#direction-of-recommendation "Direction of Recommendation"
  * component[otherRatings].type = https://fevir.net/resources/CodeSystem/179423#ratings "Ratings"
  * component[discussion].type = https://fevir.net/resources/CodeSystem/179423#discussion "Discussion"
* content[evidence].type = https://fevir.net/resources/CodeSystem/179423#evidence "Evidence"
* content[evidence]
  * component ^slicing.discriminator.type = #value
  * component ^slicing.discriminator.path = "type"
  * component ^slicing.rules = #closed
  * component contains summaryOfFindings 0..1 MS and desirableEffects 0..1 MS and undesirableEffects 0..1 MS and discussion 0..1
  * component[summaryOfFindings].type = https://fevir.net/resources/CodeSystem/179423#summary-of-findings "Summary of Findings"
  * component[desirableEffects].type = https://fevir.net/resources/CodeSystem/179423#desirable-effects "Desirable Effects"
  * component[undesirableEffects].type = https://fevir.net/resources/CodeSystem/179423#undesirable-effects "Undesirable Effects"
  * component[discussion].type = https://fevir.net/resources/CodeSystem/179423#discussion "Discussion"
* content[netEffect].type = https://fevir.net/resources/CodeSystem/179423#net-effect "Net Effect"
* content[netEffect]
  * component ^slicing.discriminator.type = #value
  * component ^slicing.discriminator.path = "type"
  * component ^slicing.rules = #closed
  * component contains preferences 0..1 MS and discussion 0..1
  * component[preferences].type = https://fevir.net/resources/CodeSystem/179423#preferences "Preferences"
  * component[discussion].type = https://fevir.net/resources/CodeSystem/179423#discussion "Discussion"
* content[judgments].type = https://fevir.net/resources/CodeSystem/179423#judgments "Judgments"
* content[judgments]
  * component ^slicing.discriminator.type = #value
  * component ^slicing.discriminator.path = "type"
  * component ^slicing.rules = #closed
  * component contains justification 0..1 MS and problemImportance 0..1 MS and costs 0..1 MS and costeffectiveness 0..1 MS and equity 0..1 MS and acceptability 0..1 MS and feasibility 0..1 MS
  * component[justification].type = https://fevir.net/resources/CodeSystem/179423#justification "Justification"
  * component[problemImportance].type = https://fevir.net/resources/CodeSystem/179423#problem-importance "Problem Importance"
  * component[costs].type = https://fevir.net/resources/CodeSystem/179423#costs "Costs"
  * component[costeffectiveness].type = https://fevir.net/resources/CodeSystem/179423#cost-effectiveness "Cost-effectiveness"
  * component[equity].type = https://fevir.net/resources/CodeSystem/179423#equity "Equity"
  * component[acceptability].type = https://fevir.net/resources/CodeSystem/179423#acceptability "Acceptability"
  * component[feasibility].type = https://fevir.net/resources/CodeSystem/179423#feasibility "Feasibility"
* content[competingInterests].type = https://fevir.net/resources/CodeSystem/179423#competing-interests "Competing Interests"
* content.informationType 0..0
* content.classifier from recommendation-justification-classifier (extensible)
* content.freeToShare
  * ^definition = "Acceptable to publicly share the content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the content"


---

// File: input/fsh/artifact-assessment/p-risk-of-bias.fsh

Profile: RiskOfBias
Parent: ArtifactAssessment
Id: risk-of-bias
Description: "Profile of ArtifactAssessment for Evidence Based Medicine IG. The RiskOfBias Profile is used for expression of the assessment of the threats to validity (or risk of bias) of an Evidence artifact or an artifact consisting of Evidence or the plan to create Evidence." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-url named url 0..1
* extension contains $ext-description named description 0..1
* extension contains $ext-author named author 0..*
* identifier
  * ^definition = "A formal identifier that is used to identify this RiskOfBias when it is represented in other formats, or referenced in a specification, model, design or an instance." 
  * ^short = "Additional identifier for the RiskOfBias"
  * ^comment = "Typically, this is used for identifiers that can be used in systems outside of FHIR, where it is not sufficient to use the logical URI."
  * ^requirements = "Allows externally provided and/or usable business identifiers to be easily associated with the RiskOfBias."
* citeAs[x]
  * ^definition = "Display of or reference to the bibliographic citation of the RiskOfBias." 
  * ^short = "How to cite the RiskOfBias"
* date
  * ^definition = "The date (and optionally time) when the RiskOfBias was published. The date should change when the substantive content of the RiskOfBias changes."
  * ^comment = ""
* copyright
  * ^definition = "A copyright statement relating to the RiskOfBias and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the RiskOfBias."
  * ^requirements = "Consumers must be able to determine any legal restrictions on the use of the RiskOfBias and/or its content."
* approvalDate ^short = "When the RiskOfBias was approved by publisher"
* lastReviewDate ^short = "When the RiskOfBias was last reviewed"
* artifact[x]
  * ^definition = "A reference to a resource, canonical resource, or non-FHIR resource which the RiskOfBias is about."
  * ^short = "The artifact that is rated"
* artifactReference only Reference(Evidence or Composition or ResearchStudy or Citation)
* content
  * ^definition = "A rating or classification of the artifact."
  * ^short = "A rating"
* content.informationType 0..0
* content.type from $ebm-risk-of-bias-type (extensible)
* content.classifier from http://hl7.org/fhir/ValueSet/certainty-rating (extensible) //TODO - change to from risk-of-bias-classifier from $sevco when ready
* content.freeToShare
  * ^definition = "Acceptable to publicly share the RiskOfBias content, specific to the associated content instance"
  * ^short = "Acceptable to publicly share the RiskOfBias content"

---

// File: input/fsh/artifact-assessment/vs-recommendation-justification-classsifier.fsh

ValueSet: RecommendationJustificationClassifier
Id: recommendation-justification-classifier
Title: "Recommendation Justification Classifier Codes Value Set"
Description: "Codes for use with the Classifier drop-down menu for FEvIR(R): Recommendation Justification Builder."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^experimental = false
* include codes from system $recommendation-justification-classifiers

---

// File: input/fsh/citation/p-book-citation.fsh

Profile: BookCitation
Parent: Citation
Id: book-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The BookCitation Profile is used for citations of a book." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited book when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier. May include ISBN, Bookshelf ID, GTIN, DOI, PMID, etc"
  * publicationForm
    * publishedIn
      * type
        * ^short = "Not typically used when citing a book itself"
      * identifier
        * ^short = "Not typically used when citing a book itself"
      * title
        * ^short = "Not typically used when citing a book itself" 
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and publishingModel 0..1 and publicationType 0..1 and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains book 1..1 MS
    * classifier[book].coding 1..1
    * classifier[book].coding = http://hl7.org/fhir/citation-artifact-classifier#D001877 "Book"
  * classification[publishingModel].type.coding 1..1
  * classification[publishingModel].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#publishing-model "Publishing Model"
  * classification[publicationType].type.coding 1..1
  * classification[publicationType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#publication-type "Publication type"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
  


---

// File: input/fsh/citation/p-book-part-citation.fsh

Profile: BookPartCitation
Parent: Citation
Id: book-part-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The BookPartCitation Profile is used for citations of a part of a book." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited book part when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier. May include Bookshelf ID, DOI, etc"
  * publicationForm
    * publishedIn
      * type = http://hl7.org/fhir/published-in-type#D001877 "Book"
      * identifier
        * ^definition = "A formal identifier that is used to identify the book when it is represented in other formats, or referenced in a specification, model, design or an instance." 
        * ^short = "Unique identifier. May include ISBN, Bookshelf ID, GTIN, DOI, PMID, etc"
      * title
        * ^short = "Title of the book"
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and publishingModel 0..1 and publicationType 0..1 and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains bookPart 1..1 MS
    * classifier[bookPart].coding 1..1
    * classifier[bookPart].coding = https://fevir.net/resources/CodeSystem/179423#classified-as-book-part "Book Part"
  * classification[publishingModel].type.coding 1..1
  * classification[publishingModel].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#publishing-model "Publishing Model"
  * classification[publicationType].type.coding 1..1
  * classification[publicationType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#publication-type "Publication type"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
  * contributorship.entry.role
    * ^comment = "Consider 'Book Editor' as an additional contributor role type."
  


---

// File: input/fsh/citation/p-database-citation.fsh

Profile: DatabaseCitation
Parent: Citation
Id: database-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The DatabaseCitation Profile is used for citations of a database." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited database when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier."
  * publicationForm
    * publishedIn
      * type
        * ^short = "Not typically used when citing a database itself"
      * identifier
        * ^short = "Not typically used when citing a database itself"
      * title
        * ^short = "Not typically used when citing a database itself"
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains database 1..1 MS
    * classifier[database].coding 1..1
    * classifier[database].coding = http://hl7.org/fhir/citation-artifact-classifier#D019991 "Database"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"



---

// File: input/fsh/citation/p-database-entry-citation.fsh

Profile: DatabaseEntryCitation
Parent: Citation
Id: database-entry-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The DatabaseEntryCitation Profile is used for citations of a record within a database."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited database record when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier. May include DOI, FOI, Database Accession Number, etc"
  * publicationForm
    * publishedIn
      * type = http://hl7.org/fhir/published-in-type#D019991 "Database"
      * identifier
        * ^definition = "A formal identifier that is used to identify the database when it is represented in other formats, or referenced in a specification, model, design or an instance." 
        * ^short = "Unique identifier."
      * title
        * ^short = "Title of the database"
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and definedInText 0..* and fhirResourceType 0..1
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains databaseEntry 1..1 MS and fhirResource 0..1
    * classifier[databaseEntry].coding 1..1
    * classifier[databaseEntry].coding = https://fevir.net/resources/CodeSystem/179423#classified-as-database-entry "Database Entry"
    * classifier[fhirResource].coding 1..1
    * classifier[fhirResource].coding = http://hl7.org/fhir/citation-artifact-classifier#fhir-resource "FHIR Resource"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
  * classification[fhirResourceType].type.coding 1..1
  * classification[fhirResourceType].type.coding = http://hl7.org/fhir/citation-artifact-classifier#fhir-resource "FHIR Resource"


---

// File: input/fsh/citation/p-dataset-citation.fsh

Profile: DatasetCitation
Parent: Citation
Id: dataset-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The DatasetCitation Profile is used for citations of a dataset."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited dataset when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier. May include DOI, FOI, Database Accession Number, etc"
  * publicationForm
    * publishedIn
      * type
        * ^comment = "often coded with system http://hl7.org/fhir/published-in-type, code D019991, and display Database"
      * identifier
        * ^definition = "A formal identifier that is used to identify the database when it is represented in other formats, or referenced in a specification, model, design or an instance." 
        * ^short = "Unique identifier."
      * title
        * ^short = "Title of the database"
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and studyDesign 0..1 and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains dataset 1..1 MS
    * classifier[dataset].coding 1..1
    * classifier[dataset].coding = http://hl7.org/fhir/citation-artifact-classifier#D064886 "Dataset"
  * classification[studyDesign].type.coding 1..1
  * classification[studyDesign].type.coding = https://fevir.net/resources/CodeSystem/179423#study-design "Study Design"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
//TODO - create support for how to handle the file type (e.g. .csv or .xls) for the dataset, e.g. citedArtifact.classification or specific extension

---

// File: input/fsh/citation/p-journal-article-citation.fsh

Profile: JournalArticleCitation
Parent: Citation
Id: journal-article-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The JournalArticleCitation Profile is used for citations of an article published in a periodical venue classified as a journal."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* effectivePeriod 0..0
* citedArtifact
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and publishingModel 0..1 and publicationType 0..1 and citationSubset 0..1 and studyDesign 0..1 and definedInText 0..* and meshHeading 0..1 and chemical 0..1 and keyword 0..1
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains journalArticle 1..1 MS
    * classifier[journalArticle].coding 1..1
    * classifier[journalArticle].coding = http://hl7.org/fhir/citation-artifact-classifier#D016428 "Journal Article"
  * classification[publishingModel].type.coding 1..1
  * classification[publishingModel].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#publishing-model "Publishing Model"
  * classification[publicationType].type.coding 1..1
  * classification[publicationType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#publication-type "Publication type"
  * classification[citationSubset].type.coding 1..1
  * classification[citationSubset].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#citation-subset "Citation subset" 
  * classification[studyDesign].type.coding 1..1
  * classification[studyDesign].type.coding = https://fevir.net/resources/CodeSystem/179423#study-design "Study Design"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
  * classification[meshHeading].type.coding 1..1
  * classification[meshHeading].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#mesh-heading "MeSH heading"
  * classification[keyword].type.coding 1..1
  * classification[keyword].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#keyword "Keyword"
  * classification[chemical].type.coding 1..1
  * classification[chemical].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#chemical "Chemical"

---

// File: input/fsh/citation/p-preprint-citation.fsh

Profile: PreprintCitation
Parent: Citation
Id: preprint-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The PreprintCitation Profile is used for citations of an article published in a form prior to peer-reviewed publication in a journal, book, or other permanent record."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and studyDesign 0..1 and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains preprint 1..1 MS
    * classifier[preprint].coding 1..1
    * classifier[preprint].coding = http://hl7.org/fhir/citation-artifact-classifier#D000076942 "Preprint"
  * classification[studyDesign].type.coding 1..1
  * classification[studyDesign].type.coding = https://fevir.net/resources/CodeSystem/179423#study-design "Study Design"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
  

---

// File: input/fsh/citation/p-software-citation.fsh

Profile: SoftwareCitation
Parent: Citation
Id: software-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The SoftwareCitation Profile is used for citations of executable code."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited software when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier. May include DOI, FOI, Database Accession Number, etc"
  * publicationForm
    * publishedIn
      * type
        * ^comment = "often coded with system http://hl7.org/fhir/published-in-type, code D019991, and display Database"
      * identifier
        * ^definition = "A formal identifier that is used to identify the database when it is represented in other formats, or referenced in a specification, model, design or an instance." 
        * ^short = "Unique identifier."
      * title
        * ^short = "Title of the database"
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains software 1..1 MS
    * classifier[software].coding 1..1
    * classifier[software].coding = http://hl7.org/fhir/citation-artifact-classifier#executable-app "Executable app"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"
//TODO - create support for how to handle the file type (e.g. .js or .py) for the software, e.g. citedArtifact.classification or specific extension

---

// File: input/fsh/citation/p-web-page-citation.fsh

Profile: WebPageCitation
Parent: Citation
Id: web-page-citation
Description: "Profile of Citation for Evidence Based Medicine IG. The WebPageCitation Profile is used for citations of a web page or website, typically when there is not another type being used to classify the cited artifact."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* citedArtifact
  * identifier
    * ^definition = "A formal identifier that is used to identify the cited web page when it is represented in other formats, or referenced in a specification, model, design or an instance." 
    * ^short = "Unique identifier. Typically the URL."
  * publicationForm
    * publishedIn
      * type.text = "Website"
      * identifier
        * ^definition = "A formal identifier that is used to identify the website when it is represented in other formats, or referenced in a specification, model, design or an instance." 
        * ^short = "Unique identifier."
      * title
        * ^short = "Title of the website"
  * webLocation 1..*
  * classification 1..*
  * classification ^slicing.discriminator.type = #value
  * classification ^slicing.discriminator.path = "type.coding"
  * classification ^slicing.rules = #open
  * classification contains knowledgeArtifactType 1..1 MS and definedInText 0..*
  * classification[knowledgeArtifactType].type.coding 1..1
  * classification[knowledgeArtifactType].type.coding = http://hl7.org/fhir/cited-artifact-classification-type#knowledge-artifact-type "Knowledge Artifact Type"
  * classification[knowledgeArtifactType]
    * classifier 1..*
    * classifier ^slicing.discriminator.type = #value
    * classifier ^slicing.discriminator.path = "coding"
    * classifier ^slicing.rules = #open
    * classifier contains webpage 1..1 MS
    * classifier[webpage].coding 1..1
    * classifier[webpage].coding = http://hl7.org/fhir/citation-artifact-classifier#webpage "Webpage"
  * classification[definedInText].type.coding 1..1
  * classification[definedInText].type.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-text "Defined in text"


---

// File: input/fsh/composition/p-baseline-measure-report.fsh

Profile: BaselineMeasureReport
Parent: EvidenceTableReportPackage
Id: baseline-measure-report
Description: "Profile of Composition for Evidence Based Medicine IG. The BaselineMeasureReport Profile is used for an evidence report including the findings for any number of baseline measures in a research study."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#BaselineMeasureReport "BaselineMeasureReport"
* type.text = "Baseline Measure Report"
* section[results]
  * section 1..*
    * focus only Reference(VariableDefinition)
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.coding"
    * section ^slicing.rules = #open
    * section contains comparatorEvidence 0..1 MS and interventionEvidence 0..1 MS and totalGroup 0..1 MS and comparativeEvidence 0..1 MS
    * section[comparatorEvidence].code.coding 1..1
    * section[comparatorEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-comparator-alone "Evidence with comparator alone"
    * section[comparatorEvidence]
      * entry 0..1 
      * entry only Reference(BaselineMeasureEvidence)
    * section[interventionEvidence].code.coding 1..1
    * section[interventionEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-alone "Evidence with intervention alone"
    * section[interventionEvidence]
      * entry 0..1 
      * entry only Reference(BaselineMeasureEvidence)
    * section[totalGroup].code.coding 1..1
    * section[totalGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-total-group "Evidence with total group"
    * section[totalGroup]
      * entry 0..1 
      * entry only Reference(BaselineMeasureEvidence)
    * section[comparativeEvidence].code.coding 1..1
    * section[comparativeEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-vs-comparator "Evidence with intervention vs. comparator"
    * section[comparativeEvidence]
      * entry 0..1 
      * entry only Reference(ComparativeBaselineMeasureEvidence)


---

// File: input/fsh/composition/p-comparative-evidence-report.fsh

Profile: ComparativeEvidenceReport
Parent: EvidenceReportPackage
Id: comparative-evidence-report
Description: "Profile of Composition for Evidence Based Medicine IG. The ComparativeEvidenceReport Profile is used for an evidence report including the study group, exposure, comparator, and findings for any number of outcomes comparing the exposure to the comparator in the study group."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#ComparativeEvidenceReport "ComparativeEvidenceReport"
* type.text = "Comparative Evidence Report"
* relatesTo ^slicing.discriminator.type = #value
* relatesTo ^slicing.discriminator.path = "label"
* relatesTo ^slicing.rules = #open
* relatesTo contains groupAssignment 0..*
* relatesTo[groupAssignment].type = #composed-of
* relatesTo[groupAssignment].label = "Group Assignment"
* relatesTo[groupAssignment].resourceReference only Reference(GroupAssignment)
* section 5..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains population 1..1 MS and intervention 1..* MS and comparator 1..1 MS and researchStudy 1..1 MS and baseline 0..1 MS and flow 0..1 MS and outcomes 0..1 MS and summaryOfFindings 0..1 MS
* section[population].code.coding 1..1
* section[population].code.coding = https://fevir.net/resources/CodeSystem/179423#population "Population"
* section[population]
  * entry only Reference(StudyGroup)
* section[intervention].code.coding 1..1
* section[intervention].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention "Intervention"
* section[intervention]
  * section 2..2
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains description 1..1 MS and group 1..1 MS
  * section[description].code.coding 1..1
  * section[description].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-description "Intervention Description"
  * section[description]
    * entry 0..1
    * entry only Reference(ExposureDefinition)
  * section[group].code.coding 1..1
  * section[group].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-group "Intervention Group"
  * section[group]
    * entry 0..1
    * entry only Reference(ExposureGroup)
* section[comparator].code.coding 1..1
* section[comparator].code.coding = https://fevir.net/resources/CodeSystem/179423#comparator "Comparator"
* section[comparator]
  * section 2..2
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains description 1..1 MS and group 1..1 MS
  * section[description].code.coding 1..1
  * section[description].code.coding = https://fevir.net/resources/CodeSystem/179423#comparator-description "Comparator Description"
  * section[description]
    * entry 0..1
    * entry only Reference(ComparatorDefinition or ExposureDefinition)
  * section[group].code.coding 1..1
  * section[group].code.coding = https://fevir.net/resources/CodeSystem/179423#comparator-group "Comparator Group"
  * section[group]
    * entry 0..1
    * entry only Reference(ComparatorGroup or ExposureGroup)
* section[researchStudy].code.coding 1..1
* section[researchStudy].code.coding = https://fevir.net/resources/CodeSystem/179423#research-study "Research Study"
* section[researchStudy]
  * entry only Reference(ResearchStudy or Citation or Composition)
* section[baseline].code.coding 1..1
* section[baseline].code.coding = https://fevir.net/resources/CodeSystem/179423#baseline-measures "Baseline Measures"
* section[baseline]
  * entry 0..1 
  * entry only Reference(BaselineMeasureReport)
* section[flow].code.coding 1..1
* section[flow].code.coding = https://fevir.net/resources/CodeSystem/179423#participant-flow "Participant Flow"
* section[flow]
  * entry 0..1 
  * entry only Reference(ParticipantFlowReport)
* section[outcomes].code.coding 1..1
* section[outcomes].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-measures "Outcome Measures"
* section[outcomes]
  * entry 0..*
  * entry only Reference(OutcomeMeasureReport)
* section[summaryOfFindings].code.coding 1..1
* section[summaryOfFindings].code.coding = https://fevir.net/resources/CodeSystem/179423#summary-of-findings "Summary of Findings"
* section[summaryOfFindings]
  * entry 0..*
  * entry only Reference(SummaryOfFindings)

---

// File: input/fsh/composition/p-comparative-evidence-synthesis-report.fsh

Profile: ComparativeEvidenceSynthesisReport
Parent: EvidenceReportPackage
Id: comparative-evidence-synthesis-report
Description: "Profile of Composition for Evidence Based Medicine IG. The ComparativeEvidenceSynthesisReport Profile is used for an evidence report including the intended population, intended exposure, intended comparator, and findings for any number of outcomes comparing the exposure to the comparator with observed study group, observed exposure group, and observed comparator group unique for each outcome."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#ComparativeEvidenceSynthesisReport "ComparativeEvidenceSynthesisReport"
* type.text = "Comparative Evidence Synthesis Report"
* relatesTo ^slicing.discriminator.type = #value
* relatesTo ^slicing.discriminator.path = "label"
* relatesTo ^slicing.rules = #open
* relatesTo contains groupAssignment 0..*
* relatesTo[groupAssignment].type = #composed-of
* relatesTo[groupAssignment].label = "Group Assignment"
* relatesTo[groupAssignment].resourceReference only Reference(GroupAssignment)
* section 5..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains population 1..1 MS and intervention 1..* MS and comparator 1..1 MS and researchStudy 1..1 MS and outcomeVariables 0..1 and results 0..1 MS and summaryOfFindings 0..1 MS
* section[population].code.coding 1..1
* section[population].code.coding = https://fevir.net/resources/CodeSystem/179423#population "Population"
* section[population]
  * entry only Reference(CohortDefinition or ConceptualCohortDefinition)
* section[intervention].code.coding 1..1
* section[intervention].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-description "Intervention Description"
* section[intervention]
  * entry only Reference(CohortDefinition or ConceptualCohortDefinition)
* section[comparator].code.coding 1..1
* section[comparator].code.coding = https://fevir.net/resources/CodeSystem/179423#comparator-description "Comparator Description"
* section[comparator]
  * entry only Reference(CohortDefinition or ConceptualCohortDefinition)
* section[researchStudy].code.coding 1..1
* section[researchStudy].code.coding = https://fevir.net/resources/CodeSystem/179423#research-study "Research Study"
* section[researchStudy]
  * entry only Reference(ResearchStudy or Citation or Composition)
* section[outcomeVariables].code.coding 1..1
* section[outcomeVariables].code.coding = https://fevir.net/resources/CodeSystem/179423#variables "Variables"
* section[outcomeVariables]
  * entry 0..*
  * entry only Reference(VariableDefinition)
* section[results].code.coding 1..1
* section[results].code.coding = https://fevir.net/resources/CodeSystem/179423#results "Results"
* section[results]
  * entry 0..*
  * entry only Reference(OutcomeMeasureSynthesisReport)
* section[summaryOfFindings].code.coding 1..1
* section[summaryOfFindings].code.coding = https://fevir.net/resources/CodeSystem/179423#summary-of-findings "Summary of Findings"
* section[summaryOfFindings]
  * entry 0..*
  * entry only Reference(SummaryOfFindings)


---

// File: input/fsh/composition/p-evidence-map.fsh

Profile: EvidenceMap
Parent: EvidenceReport
Id: evidence-map
Description: "Profile of Composition for Evidence Based Medicine IG. The EvidenceMap Profile is used for an organized listing of Resources used to generate EvidenceReport instances." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#EvidenceMap "EvidenceMap"
* section 1..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains outcomeDefinition 0..1 and comparatorOnlyEvidence 0..1 and interventionOnlyEvidence 0..1 and comparativeEvidence 0..1 and certaintyOfEvidence 0..1 and evidenceVariablePopulation 0..1 and intervention 0..1 and interventionDescription 0..1 and interventionGroup 0..1 and evidenceClassifier 0..1 and relativeImportance 0..1
* section[outcomeDefinition].code.coding 1..1
* section[outcomeDefinition].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-measure "Outcome Measure"
* section[outcomeDefinition]
  * entry only Reference(VariableDefinition)
* section[comparatorOnlyEvidence].code.coding 1..1
* section[comparatorOnlyEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-comparator-alone "Evidence with comparator alone"
* section[comparatorOnlyEvidence]
  * entry only Reference(ComparatorOnlyEvidence)
* section[interventionOnlyEvidence].code.coding 1..1
* section[interventionOnlyEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-alone "Evidence with intervention alone"
* section[interventionOnlyEvidence]
  * entry only Reference(InterventionOnlyEvidence)
* section[comparativeEvidence].code.coding 1..1
* section[comparativeEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-vs-comparator "Evidence with intervention vs. comparator"
* section[comparativeEvidence]
  * entry only Reference(ComparativeEvidence)
* section[certaintyOfEvidence].code.coding 1..1
* section[certaintyOfEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#certainty-of-evidence "Certainty of Evidence"
* section[certaintyOfEvidence]
  * entry only Reference(CertaintyOfEvidence)
* section[evidenceVariablePopulation].code.coding 1..1
* section[evidenceVariablePopulation].code.coding = https://fevir.net/resources/CodeSystem/179423#population "Population"
* section[evidenceVariablePopulation]
  * entry only Reference(Group)
* section[intervention].code.coding 1..1
* section[intervention].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention "Intervention"
* section[intervention]
  * entry only Reference(VariableDefinition)
* section[interventionDescription].code.coding 1..1
* section[interventionDescription].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-description "Intervention Description"
* section[interventionDescription]
  * entry only Reference(Group)
* section[interventionGroup].code.coding 1..1
* section[interventionGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-group "Intervention Group"
* section[interventionGroup]
  * entry only Reference(Group)
* section[evidenceClassifier].code.coding 1..1
* section[evidenceClassifier].code.coding = https://fevir.net/resources/CodeSystem/179423#classifier "Classifier"
* section[evidenceClassifier]
  * entry only Reference(ArtifactAssessment)
* section[relativeImportance].code.coding 1..1
* section[relativeImportance].code.coding = https://fevir.net/resources/CodeSystem/179423#relative-importance "Relative Importance"
* section[relativeImportance]
  * entry only Reference(ArtifactAssessment)

  



 


---

// File: input/fsh/composition/p-evidence-measure-report-package.fsh

Profile: EvidenceMeasureReportPackage
Parent: EvidenceReport
Id: evidence-measure-report-package
Description: "Profile of Composition for Evidence Based Medicine IG. THIS PROFILE WILL BE REPLACED WITH EvidenceTableReportPackage. The EvidenceMeasureReportPackage Profile is used for a base structure to extend the EvidenceReport Profile with optional relatesTo slices for Total Group, Intervention Group, Comparator Group, and Group Assignment."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* relatesTo 1..*
* relatesTo ^slicing.discriminator.type = #value
* relatesTo ^slicing.discriminator.path = "label"
* relatesTo ^slicing.rules = #open
* relatesTo contains interventionGroup 0..* MS and comparatorGroup 0..* MS and totalGroup 0..1 MS and groupAssignment 0..*
* relatesTo[interventionGroup].type = #depends-on
* relatesTo[interventionGroup].label = "Intervention Group"
* relatesTo[interventionGroup].resourceReference only Reference(ExposureGroup or ComparatorGroup)
* relatesTo[comparatorGroup].type = #depends-on
* relatesTo[comparatorGroup].label = "Comparator Group"
* relatesTo[comparatorGroup].resourceReference only Reference(ExposureGroup or ComparatorGroup)
* relatesTo[totalGroup].type = #depends-on
* relatesTo[totalGroup].label = "Total Group"
* relatesTo[totalGroup].resourceReference only Reference(StudyGroup)
* relatesTo[groupAssignment].type = #composed-of
* relatesTo[groupAssignment].label = "Group Assignment"
* relatesTo[groupAssignment].resourceReference only Reference(GroupAssignment)


---

// File: input/fsh/composition/p-evidence-report-package.fsh

Profile: EvidenceReportPackage
Parent: EvidenceReport
Id: evidence-report-package
Description: "Profile of Composition for Evidence Based Medicine IG. The EvidenceReportPackage Profile is used for a base structure to extend the EvidenceReport Profile with optional sections for Introduction, Discussion, Methods, References, Competing Interests, Acknowledgements, and Appendices."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains summary 0..1 and introduction 0..1 MS and discussion 0..1 MS and methods 0..1 MS and references 0..1 MS and competingInterests 0..1 MS and acknowledgements 0..1 MS and appendices 0..1 MS
* section[summary].code.coding 1..1
* section[summary].code.coding = https://fevir.net/resources/CodeSystem/179423#summary "Summary"
* section[introduction].code.coding 1..1
* section[introduction].code.coding = https://fevir.net/resources/CodeSystem/179423#introduction "Introduction"
* section[discussion].code.coding 1..1
* section[discussion].code.coding = https://fevir.net/resources/CodeSystem/179423#discussion "Discussion"
* section[methods].code.coding 1..1
* section[methods].code.coding = https://fevir.net/resources/CodeSystem/179423#methods "Methods"
* section[references].code.coding 1..1
* section[references].code.coding = https://fevir.net/resources/CodeSystem/179423#references "References"
* section[references]
  * entry only Reference(Citation)
* section[competingInterests].code.coding 1..1
* section[competingInterests].code.coding = https://fevir.net/resources/CodeSystem/179423#competing-interests "Competing Interests"
* section[acknowledgements].code.coding 1..1
* section[acknowledgements].code.coding = https://fevir.net/resources/CodeSystem/179423#acknowledgements "Acknowledgements"
* section[appendices].code.coding 1..1
* section[appendices].code.coding = https://fevir.net/resources/CodeSystem/179423#appendices "Appendices"


---

// File: input/fsh/composition/p-evidence-report.fsh

Profile: EvidenceReport
Parent: Composition
Id: evidence-report
Description: "Profile of Composition for Evidence Based Medicine IG. The EvidenceReport Profile is used for a base structure (canonical resource management) for a report combining any number of Citation, Evidence, EvidenceVariable, EvidenceReport, and related Resources."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-versionAlgorithm named versionAlgorithm 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-experimental named experimental 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-description named description 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-purpose named purpose 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-copyright named copyright 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-copyrightLabel named copyrightLabel 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-approvalDate named approvalDate 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-lastReviewDate named lastReviewDate 0..1
* extension contains http://hl7.org/fhir/StructureDefinition/artifact-effectivePeriod named effectivePeriod 0..1
* subject only Reference(Citation or Classification or EvidenceReportSubject or ResearchStudy)
* subject 0..1
  * ^comment = "Reference a single Citation Resource, EvidenceVariable Resource (EvidenceReportSubject Profile), or ReserchStudy Resource to define the subject of this EvidenceReport."
* attester.mode from EvidenceReportContributorRole (preferred)
  * ^short = "reviewer | editor | endorser | informant | recorder"
* relatesTo ^slicing.discriminator.type = #value
* relatesTo ^slicing.discriminator.path = "label"
* relatesTo ^slicing.rules = #open
* relatesTo contains citeAs 0..1 and partOf 0..* and derivedFrom 0..* and specificationOfOriginal 0..*
* relatesTo[citeAs].type = http://hl7.org/fhir/related-artifact-type#cite-as
* relatesTo[citeAs].label = "Cite as"
* relatesTo[partOf].type = http://hl7.org/fhir/related-artifact-type#part-of
* relatesTo[partOf].label = "Part of"
* relatesTo[derivedFrom].type = http://hl7.org/fhir/related-artifact-type#derived-from
* relatesTo[derivedFrom].label = "Derived from"
* relatesTo[specificationOfOriginal].type = http://hl7.org/fhir/related-artifact-type#specification-of
* relatesTo[specificationOfOriginal].label = "Original publication"
* section.code from $ebm-evidence-report-section-code (extensible)

---

// File: input/fsh/composition/p-evidence-table-report-package.fsh

Profile: EvidenceTableReportPackage
Parent: EvidenceReport
Id: evidence-table-report-package
Description: "Profile of Composition for Evidence Based Medicine IG. The EvidenceTableReportPackage Profile is used for a base structure to extend the EvidenceReport Profile with sections for Groups (Total Group, Intervention Group, Comparator Group, and Group Assignment), Evidence Variables, and Results."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains groups 0..1 MS and variables 0..1 MS and results 0..1 MS
* section[groups].code.coding 1..1
* section[groups].code.coding = https://fevir.net/resources/CodeSystem/179423#groups "Groups"
* section[groups]
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains totalGroup 0..1 MS and interventionGroup 0..1 MS and comparatorGroup 0..1 MS and groupAssignment 0..1
  * section[totalGroup].code.coding 1..1
  * section[totalGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#population "Population"
  * section[totalGroup]
    * entry only Reference(StudyGroup)
  * section[interventionGroup].code.coding 1..1
  * section[interventionGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-group "Intervention Group"
  * section[interventionGroup]
    * entry only Reference(ExposureGroup or ComparatorGroup)
  * section[comparatorGroup].code.coding 1..1
  * section[comparatorGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#comparator-group "Comparator Group"
  * section[comparatorGroup]
    * entry only Reference(ExposureGroup or ComparatorGroup)
  * section[groupAssignment].code.coding 1..1
  * section[groupAssignment].code.coding = https://fevir.net/resources/CodeSystem/179423#GroupAssignment "GroupAssignment"
  * section[groupAssignment]
    * entry only Reference(GroupAssignment)
* section[variables].code.coding 1..1
* section[variables].code.coding = https://fevir.net/resources/CodeSystem/179423#variables "Variables"
* section[variables]
  * entry only Reference(VariableDefinition)
* section[results].code.coding 1..1
* section[results].code.coding = https://fevir.net/resources/CodeSystem/179423#results "Results"


---

// File: input/fsh/composition/p-guideline.fsh

Profile: Guideline
Parent: EvidenceReportPackage
Id: guideline
Description: "Profile of Composition for Evidence Based Medicine IG. The Guideline Profile is used for the composition of a clinical practice guideline and may be tightly related to use of Recommendation Profile of Composition for related content."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#Guideline "Guideline"
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains recommendations 0..1 MS
* section[recommendations].code.coding 1..1
* section[recommendations].code.coding = https://fevir.net/resources/CodeSystem/179423#recommendations "Recommendations"
* section[recommendations]
  * entry only Reference(Recommendation)



---

// File: input/fsh/composition/p-m11-report.fsh

Profile: M11Report
Parent: EvidenceReport
Id: m11-report
Description: "Profile of Composition for Evidence Based Medicine IG. The M11Report Profile is used for the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH) Clinical Electronic Structured Harmonised Protocol (CeSHarP) M11 Technical Specification."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^copyright = "This Profile is developed to support the evolving draft of the M11 Template. The ICH is the copyright holder for the M11 template and has not endorsed or sponsored this Profile."
* type.coding 1..1
* type.coding = http://loinc.org#35528-9 "Clinical trial protocol Clinical trial protocol"
* type.text = "CeSHarP Report"
* section 15..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.text"
* section ^slicing.rules = #open
* section contains titlepage 1..1 MS and summary 1..1 MS and introduction 1..1 MS and estimands 1..1 MS and design 1..1 MS and population 1..1 MS and intervention 1..1 MS and dropout 1..1 MS and assessments 1..1 MS and adverseEvents 1..1 MS and statistics 1..1 MS and oversight 1..1 MS and definitions 1..1 MS and glossary 1..1 MS and references 1..1 MS
* section[titlepage].title = "Title Page"
* section[titlepage].code.text = "section0-title-page"
* section[titlepage]
  * entry only Reference(M11ResearchStudy)
* section[summary].title = "Protocol Summary"
* section[summary].code.text = "section1-protocol-summary"
* section[summary]
  * section 3..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains protocolSynopsis 1..1 MS and trialSchema 1..1 MS and scheduleOfActivities 1..1 MS
  * section[protocolSynopsis].title = "Protocol Synopsis"
  * section[protocolSynopsis].code.text = "section1.1-protocol-synopsis"
  * section[protocolSynopsis]
    * section 6..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains objectivesEndpoints 1..1 MS and overallDesign 1..1 and numberOfArms 1..1 and blinding 1..1 and numberOfParticipants 1..1 and duration 0..1 and committees 1..1
    * section[objectivesEndpoints].title = "Primary and Secondary Objectives and Estimands"
    * section[objectivesEndpoints].code.text = "section1.1.1-objectives-estimands"
    * section[objectivesEndpoints]
      * text 1..1
      * text ^comment = "Summarize the primary and secondary objectives and any associated estimands. Consider including a copy of the from Section 3 of the protocol and follow all the same instructions."
      * entry only Reference(Composition)
    * section[overallDesign].title = "Overall Design"
    * section[overallDesign].code.text = "section1.1.2-overall-design"
    * section[overallDesign]
      * text 1..1
      * text ^comment = "see Template instructions"
      * entry only Reference(Composition or ResearchStudy)
    * section[numberOfArms].code.text = "Number of Arms"
    * section[numberOfArms]
      * text 1..1
      * text ^comment = "Enter the numeric value for the number of arms in the trial. For trials with a different number of arms in different periods, populate this field based on the total number of arms."
    * section[blinding].code.text = "Blinding"
    * section[blinding]
      * text 1..1
      * text ^comment = "For designs in which these details may differ in one or more trial periods, answer according to the portion of the trial in which the highest number of blinded roles occurs.  More details can be provided in Section 6.6 of the protocol. State: Blinded roles: The following roles indicated will not be made aware of the treatment group assignment during the trial: [blinded roles]. Not applicable (No blinding) indicates an open-label trial."
    * section[numberOfParticipants].code.text = "Number of Participants"
    * section[numberOfParticipants]
      * text 1..1
      * text ^comment = "State the expected number of participants to be assigned to trial intervention/enrolled.  Indicate whether the number provided is the target or maximum number of individuals to be randomly assigned to trial intervention/enrolled. A [Target/ Maximum] of [[Enter Number of Participants]] participants will be [randomly assigned to trial intervention/ enrolled]."
    * section[duration].code.text = "Duration"
    * section[duration]
      * text 1..1
      * text ^comment = "See Template instructions."
    * section[committees].code.text = "Committees"
    * section[committees]
      * text 1..1
      * text ^comment = "Indicate whether any committee(s) will be reviewing data while the trial is ongoing, and the type of committee.  Common examples include Data Monitoring Committee, Dose Escalation Committee, or Endpoint Adjudication Committee; describe others, if applicable.   List independent committees in the space indicated.  Other committees may be included at the Sponsor’s discretion in the separate space provided.  Committees listed here should be fully described in Section 11.3. Indicate N/A if no independent committees will be involved in the trial. Delete Other Committees if not applicable."
  * section[trialSchema].title = "Trial Schema"
  * section[trialSchema].code.text = "section1.2-trial-schema"
  * section[trialSchema]
    * text 1..1
    * text ^comment = "The purpose of this section is to provide a visual depiction of the trial design, orienting users of the protocol to the key features of the design.  The schema depicts the trial arms, the flow of individual participants through the progression of trial period(s)/epochs (such as screening, washout/run-in, intervention, and key milestones [for example, randomisation, cross-over, end of treatment]).  For complex trials, additional schemas may be added to describe activities or trial periods in greater detail."
    * entry only Reference(SoaPlanDefinition)
  * section[scheduleOfActivities].title = "Schedule of Activities"
  * section[scheduleOfActivities].code.text = "section1.3-schedule-of-activities"
  * section[scheduleOfActivities]
    * text 1..1
    * text ^comment = "The schedule of activities must capture the procedures that will be accomplished at each trial visit, and all contact with participants, for example, telephone contacts. This includes any tests that are used for eligibility, participant randomisation or stratification, or decisions on trial intervention discontinuation. Allowable windows should be stated for all visits and procedures. A tabular format is recommended."
    * entry only Reference(SoaPlanDefinition)
* section[introduction].title = "Introduction"
* section[introduction].code.text = "section2-introduction"
* section[introduction]
  * section 2..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains purposeOfTrial 1..1 MS and benefitsAndRisks 1..1 MS
  * section[purposeOfTrial].title = "Purpose of Trial"
  * section[purposeOfTrial].code.text = "section2.1-trial-purpose"
  * section[purposeOfTrial]
    * text 1..1
    * text ^comment = "Explain why the trial is needed, why the research questions being asked are important.  Do not restate the IB."
  * section[benefitsAndRisks].title = "Summary of Benefits and Risks"
  * section[benefitsAndRisks].code.text = "section2.2-benefits-risks"
  * section[benefitsAndRisks]
    * text 1..1
    * text ^comment = "Include an assessment of known and potential risks and benefits, if any, from the perspective of an individual participant, including the basis of the risk (for example, nonclinical studies or prior clinical trials). Optional level 3 subheadings are provided to assist with organization of the section; alternatively, the section may be summarized in a single section utilizing the overall benefit-risk entry point."
  * section[benefitsAndRisks]
    * section 3..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains benefitSummary 1..1 MS and riskSummary 1..1 and overallBenefitRisk 1..1
    * section[benefitSummary].title = "Benefit Summary"
    * section[benefitSummary].code.text = "section2.2.1-benefit-summary"
    * section[benefitSummary]
      * text 1..1
      * text ^comment = "The benefit summary should be written from the perspective of an individual participant, and should describe any physical, psychological, social, legal, or any other potential benefits to individual participants as a result of participating in the trial, addressing immediate potential benefits and/or long-range potential benefits.  Clearly state if no benefits to an individual participant can be anticipated, or if potential benefits are unknown.  For early clinical trials such as Phase 1, benefits for an individual participant (other than those of altruism) are expected to be minimal. Benefits to society in general may also be included but should be described separately."
    * section[riskSummary].title = "Risk Summary and Mitigation Strategy"
    * section[riskSummary].code.text = "section2.2.2-risk-summary"
    * section[riskSummary]
      * text 0..1
      * text ^comment = "You may enter the entire risk summary here or use the subsections for Trial Intervention, Trial Procedures, and Other as noted below."
    * section[riskSummary]
      * section ^slicing.discriminator.type = #value
      * section ^slicing.discriminator.path = "code.text"
      * section ^slicing.rules = #open
      * section contains trialIntervention 0..1 MS and trialProcedures 0..1 and otherRisk 0..1
      * section[trialIntervention].title = "Trial-specific Intervention Risks and Mitigations"
      * section[trialIntervention].code.text = "section2.2.2.1-trial-intervention-risk-summary"
      * section[trialIntervention]
        * text 1..1
        * text ^comment = "Trial Intervention - Describe risks related to trial-specific treatments and interventions.  For the protocol, focus only on the relevant key risks for THIS trial.  Provide a brief description of strategies to mitigate identified risks or provide a cross-reference to the relevant protocol section."
      * section[trialProcedures].title = "Trial-specific Procedure Risks and Mitigations"
      * section[trialProcedures].code.text = "section2.2.2.2-trial-procedures-risk-summary"
      * section[trialProcedures]
        * text 1..1
        * text ^comment = "Trial Procedures - Consider risks associated with the design (for example, placebo arm) and procedures specific to THIS trial (for example, biopsies), and any measures to control the risks. Provide a brief description of strategies to mitigate identified risks or provide a cross-reference to the relevant protocol section.  This is not intended to be an exhaustive list of all possible risks associated with trial procedures but should focus on the unique risks inherent in the design or less common or high-risk procedures.  As above, provide a brief description of strategies to mitigate identified risks or provide a cross-reference to the relevant protocol section."
      * section[otherRisk].title = "Trial-specific Other Risks and Mitigations"
      * section[otherRisk].code.text = "section2.2.2.3-trial-other-risk-summary"
      * section[otherRisk]
        * text 1..1
        * text ^comment = "Other - Consider risks associated with other items (for example, comparators, challenge agents, imaging agents, medical devices).  Insert a line for each, as needed."
    * section[overallBenefitRisk].title = "Overall Benefit:Risk Conclusion"
    * section[overallBenefitRisk].code.text = "section2.2.3-overall-benefit-risk-conclusion"
    * section[overallBenefitRisk]
      * text 1..1
      * text ^comment = "Provide a succinct, concluding statement on the perceived balance between risks that have been identified from cumulative safety data, protocol procedures, and anticipated efficacy/benefits within the context of the proposed trial. Risks need to be assessed against the benefits for the individual participant at least once a year."
* section[estimands].title = "Trial Objectives and Estimands"
* section[estimands].code.text = "section3-estimands"
* section[estimands]
  * entry only Reference(M11ResearchStudy)
* section[design].title = "Trial Design"
* section[design].code.text = "section4-trial-design"
* section[design]
  * section 4..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains description 1..1 MS and rationale 1..1 MS and trialStoppingRules 1..1 MS and startEnd 1..1 MS and access 0..1 MS
  * section[description].title = "Description of Trial Design"
  * section[description].code.text = "section4.1-description-of-trial-design"
  * section[description]
    * text 1..1
    * text ^comment = "see Template instructions"
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains stakeholderInput 0..1 MS
    * section[stakeholderInput].title = "Stakeholder Input into Design"
    * section[stakeholderInput].code.text = "section4.1.1-stakeholder-input-into-design"
    * section[stakeholderInput]
      * text 1..1
      * text ^comment = "If applicable, describe any stakeholder (for example, patient, healthcare professional and patient advocacy groups) involvement in the design of the trial and any suggestions implemented."
  * section[rationale].title = "Rationale for Trial Design"
  * section[rationale].code.text = "section4.2-rationale-for-trial-design"
  * section[rationale]
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains model 0..1 MS and duration 0..1 MS and endpoints 0..1 MS and interim 0..1 MS and comparator 0..1 MS and adaptive 0..1 MS and otherAspects 0..1 MS
    * section[model].title = "Rationale for Intervention Model"
    * section[model].code.text = "section4.2.1-rationale-intervention-model"
    * section[model]
      * text 1..1
      * text ^comment = "Provide a rationale for the trial intervention model selected in Section 4.1, Description of Trial Design with a cross-reference to Section 6.2, Rationale for Investigational Intervention(s). Rationale for choice of comparator, if applicable, should be described separately in Section 4.2.5, Rationale for Comparator. A rationale for the choice of trial population should be described separately in Section 5.1, Description of Trial Population and Rationale."
    * section[duration].title = "Rationale for Duration"
    * section[duration].code.text = "section4.2.2-rationale-duration"
    * section[duration]
      * text 1..1
      * text ^comment = "Provide a rationale that the trial duration is appropriate for a reliable and relevant evaluation of the trial intervention per the trial objective(s)."
    * section[endpoints].title = "Rationale for Estimands"
    * section[endpoints].code.text = "section4.2.3-rationale-estimands"
    * section[endpoints]
      * text 1..1
      * text ^comment = "Provide a rationale for the trial estimand(s) described in Section 3. This should include a rationale that the selected endpoint(s) are clinically relevant and provide a reliable and valid measurement of the intended intervention effect. It should also include a rationale for the selected strategies for handling intercurrent events."  
    * section[interim].title = "Rationale for Interim Analysis"
    * section[interim].code.text = "section4.2.4-rationale-interim-analysis"
    * section[interim]
      * text 1..1
      * text ^comment = "If applicable, provide a rationale for any interim analysis planned with respect to its purpose (for example, stopping the trial early for efficacy or futility) and timing."  
    * section[comparator].title = "Rationale for Control Type"
    * section[comparator].code.text = "section4.2.5-rationale-comparator"
    * section[comparator]
      * text 1..1
      * text ^comment = "If applicable, provide a rationale for the type and choice of control selected for the trial (for example, placebo, active drug, combination, historical). Describe any known or potential problems associated with the control group selected in light of the specific disease and intervention(s) being studied. If comparators will differ by region, describe. The rationale for dose/dose regimen is explained in Section 6.2."  
    * section[adaptive].title = "Rationale for Adaptive or Novel Trial Design"
    * section[adaptive].code.text = "section4.2.6-rationale-adaptive"
    * section[adaptive]
      * text 1..1
      * text ^comment = "If applicable, provide a rationale for the use of an adaptive or novel design."  
    * section[otherAspects].title = "Rationale for Other Trial Design Aspects"
    * section[otherAspects].code.text = "section4.2.7-rationale-other-aspects"
    * section[otherAspects]
      * text 1..1
      * text ^comment = "Discuss rationale for any additional aspects of the design not addressed above."
  * section[trialStoppingRules].title = "Trial Stopping Rules"
  * section[trialStoppingRules].code.text = "section4.3-trial-stopping-rules"
  * section[trialStoppingRules]
    * text 1..1
    * text ^comment = "If applicable, describe any trial-specific stopping rules, including guidance on when the trial should be stopped for safety reasons, when a cohort or dose escalation should be terminated, and/or when a given treatment arm should be terminated. If applicable, describe any rules that may result in a temporary pause of dosing and/or enrollment into the trial and criteria for restarting enrollment. Ensure that the trials stopping rules are aligned with the specifications that are described in Section 10.9 for Interim Analyses."
  * section[startEnd].title = "Start of Trial and End of Trial"
  * section[startEnd].code.text = "section4.4-start-and-end"
  * section[startEnd]
    * text 1..1
    * text ^comment = "Define key timepoints in the trial, including trial start and end dates. For example, a key timepoint definition for start of trial might be when the informed consent is signed by the first participant and a key timepoint definition for end of trial might be when participants are no longer being examined or the last participant’s last study assessment has occurred.   If applicable, consider local regulatory requirements for these and other definitions (for example, the first act of recruitment). If appropriate, provide a cross-reference to Section 11.6"
  * section[access].title = "Access to Trial Intervention After End of Trial"
  * section[access].code.text = "section4.5-access-after-trial"
  * section[access]
    * text 1..1
    * text ^comment = "If applicable, describe any possibilities for access to trial intervention, if any, beyond completion of the trial.  Planned extension trials, if described above in Section 4.1 do not need to be repeated." 
* section[population].title = "Trial Population"
* section[population].code.text = "section5-trial-population"
* section[population]
  * section 6..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains description 1..1 MS and inclusionCriteria 1..1 MS and exclusionCriteria 1..1 MS and contraception 1..1 MS and lifestyle 0..1 MS and screenFailures 0..1 MS
  * section[description].title = "Description of Trial Population and Rationale"
  * section[description].code.text = "section5.1-population-description"
  * section[description]
    * text 1..1
    * text ^comment = "Describe the population selected (for example, healthy participants, adult participants, paediatric participants) and how the enrollment criteria reflect the populations that are likely to use the drug if approved. Specify the population age range (for example, ≤3 months, ≥18 to ≤80 years old) including the time point at which qualification for age criteria is determined (for example, at time of screening vs randomization for paediatric trials). Specify any key diagnostic criteria for the population (for example, “acute lung injury”, or a specific biomarker profile). If applicable, describe similar conditions or diseases and their differential diagnosis. If the target population is based on a subset of the entire trial population defined by a particular characteristic measured at baseline (e.g., a specific biomarker), this subset should be defined and justified in this section. Provide a rationale for the trial population ensuring that the population selected is well defined and clinically recognisable. Describe how the selected population can meet the trial objectives and how the enrollment criteria reflects the targeted populations. Justify whether the trial intervention is to be evaluated in paediatric participants, in adults unable to consent for themselves, other vulnerable participant populations, or those that may respond to the trial intervention differently (for example, elderly, hepatic or renally impaired, or immunocompromised participants)."
    * entry only Reference(CohortDefinition)
  * section[inclusionCriteria].title = "Inclusion Criteria"
  * section[inclusionCriteria].code.text = "section5.2-inclusion-criteria"
  * section[inclusionCriteria]
    * text 1..1
    * text ^comment = "Inclusion criteria are characteristics that define the trial population, for example, those criteria that every potential participant must satisfy, to qualify for trial entry."
    * entry only Reference(CohortDefinition)
  * section[exclusionCriteria].title = "Exclusion Criteria"
  * section[exclusionCriteria].code.text = "section5.3-exclusion-criteria"
  * section[exclusionCriteria]
    * text 1..1
    * text ^comment = "Exclusion criteria are characteristics that make an individual ineligible for participation."
    * entry only Reference(CohortDefinition)
  * section[contraception].title = "Contraception"
  * section[contraception].code.text = "section5.4-contraception"
  * section[contraception]
    * section 2..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains contraceptionDefinitions 1..1 MS and contraceptionDetails 1..1 MS
    * section[contraceptionDefinitions].title = "Definitions Related to Childbearing Potential"
    * section[contraceptionDefinitions].code.text = "section5.4.1-contraception-definitions"
    * section[contraceptionDefinitions]
      * text 1..1
      * text ^comment = "Specify the definitions of Participant of childbearing potential and Participant of non-childbearing potential, or state Not Applicable."
    * section[contraceptionDetails].title = "Contraception Requirements"
    * section[contraceptionDetails].code.text = "section5.4.2-contraception-details"
    * section[contraceptionDetails]
      * text 1..1
      * text ^comment = "Specify the contraceptive methods required and duration of use, or state Not Applicable."
  * section[lifestyle].title = "Lifestyle Restrictions"
  * section[lifestyle].code.text = "section5.5-lifestyle-restrictions"
  * section[lifestyle]
    * text 1..1
    * text ^comment = "In the following subsections, describe any restrictions during the trial pertaining to lifestyle and/or diet, intake of caffeine, alcohol, or tobacco, or physical and other activities. If not applicable, include a statement that no restrictions are required."
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains dietary 0..1 MS and substances 0..1 MS and activity 0..1 MS and other 0..1 MS
    * section[dietary].title = "Meals and Dietary Restrictions"
    * section[dietary].code.text = "section5.5.1-dietary-restrictions"
    * section[dietary]
      * text 1..1
      * text ^comment = "If applicable, describe any restrictions on diet (for example, food and drink restrictions, timing of meals relative to dosing)."
    * section[substances].title = "Caffeine, Alcohol, Tobacco, and Other Restrictions"
    * section[substances].code.text = "section5.5.2-substances-restrictions"
    * section[substances]
      * text 1..1
      * text ^comment = "If applicable, describe any restrictions on the intake of caffeine, alcohol, tobacco, or other restrictions."
    * section[activity].title = "Physical Activity Restrictions"
    * section[activity].code.text = "section5.5.3-activity-restrictions"
    * section[activity]
      * text 1..1
      * text ^comment = "If applicable, describe any restrictions on activity (for example, in first-in-human trials, activity may be restricted by ensuring participants remain in bed for 4 to 6 hours after dosing)."
    * section[other].title = "Other Activity Restrictions"
    * section[other].code.text = "section5.5.4-other-restrictions"
    * section[other]
      * text 1..1
      * text ^comment = "If applicable, describe restrictions on any other activity (for example, blood or tissue donation); or any other activity restrictions, such as on driving, heavy machinery use, or sun exposure."  
  * section[screenFailures].title = "Screen Failure and Rescreening" 
  * section[screenFailures].code.text = "section5.6-screen-failure"
  * section[screenFailures]
    * text 1..1
    * text ^comment = "Indicate how screen failure will be handled in the trial, including conditions and criteria upon which rescreening is acceptable. If applicable, indicate the circumstances and time window under which a repeat procedure is allowed for screen failure relating to specific inclusion/exclusion criteria for the trial."
* section[intervention].title = "Trial Intervention and Concomitant Therapy"
* section[intervention].code.text = "section6-trial-intervention"
* section[intervention]
  * section 9..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains overview 1..1 MS and description 1..1 MS and rationale 1..1 MS and dosingAdministration 1..1 MS and doseModification 0..1 MS and treatmentOfOverdose 1..1 MS and preparation 1..1 MS and assignmentAndBlinding 1..1 MS and compliance 1..1 MS and noninvestigationalTherapy 0..1 MS and concomitantTherapy 1..1 MS
  * section[overview].title = "Overview of Trial Interventions"
  * section[overview].code.text = "section6.1-overview-of-trial-interventions"
  * section[overview]
    * text 1..1
    * text ^comment = "Enter a Table of Trial Interventions. See Template Instructions for details."
    * entry only Reference(ExposureDefinition)
  * section[description].title = "Description of Investigational Trial Intervention"
  * section[description].code.text = "section6.2-description-of-trial-intervention"
  * section[description]
    * text 1..1
    * text ^comment = "The investigational trial intervention is the product used in the trial as part of trial objectives. Other trial interventions that are not part of trial objectives (not an investigational role in this trial) are described in Section 6.10 Description of Non-investigational trial interventions. For IMP, NIMP, AxMP designations based on local legislation, please refer to Table of Trial Interventions above. Describe the investigational trial intervention to be administered in each arm of the trial and for each period of the trial including route and mode of administration, dose, dosage regimen, duration of intervention, use, packaging and labelling. Refer to approved regional labelling, as appropriate. For drug/device combination products, include details on the configuration and use of the device and device manufacturer. A device user manual may be referenced in this section."
    * entry only Reference(ExposureDefinition)
  * section[rationale].title = "Rationale for Investigational Trial Intervention Dose and Regimen"
  * section[rationale].code.text = "section6.3-rationale-for-trial-intervention-regimen"
  * section[rationale]
    * text 1..1
    * text ^comment = "Provide a rationale for the selection of the dose(s) or dose range, the route of administration, and dosing regimen of the investigational trial intervention. This rationale should include relevant results from previous preclinical studies and clinical trials that support selection of the dose and regimen.  Discuss impact of differences in study population characteristics (for example, age, sex and/or race) which could lead to differences in pharmacokinetics and pharmacodynamics in this study as compared to previous studies. If applicable, justify any differences in dose regimen or therapeutic use relative to approved labelling. Describe prior trials and other information that support the dose and/or dose regimen of the investigational intervention. Include a rationale for prospective dose adjustments incorporated in the trial, if any."
    * entry only Reference(ExposureDefinition)
  * section[dosingAdministration].title = "Investigational Trial Intervention Administration"
  * section[dosingAdministration].code.text = "section6.4-dosing-and-administration"
  * section[dosingAdministration]
    * text 1..1
    * text ^comment = "Describe the detailed procedures for administration of each participant's dose of investigational trial intervention. This may include the timing of dosing (for example, time of day, interval), the duration (for example, the length of time participants will be administered the investigational trial intervention), the planned route of administration (for example, oral, nasal, intramuscular), and the timing of dosing relative to meals. Include any specific instructions to trial participants about when or how to prepare and take the dose(s) and how delayed or missed doses should be handled. Dose escalation or cohort expansion as part of the overall design should be covered in Section 4.1 (Description of Trial Design)."
    * entry only Reference(ActivityDefinition)
  * section[doseModification].title = "Investigational Trial Intervention Dose Modification"
  * section[doseModification].code.text = "section6.5-dose-modification"
  * section[doseModification]
    * text 1..1
    * text ^comment = "For each participant, describe any dose modifications allowed, including conditions for such dose modifications, particularly regarding failure to respond or safety concerns. State any minimum period required before a participant’s dose might be raised to the next higher dose or dose range. Include whether it is permissible to start and stop treatment and how dose reductions (if permitted) are to be managed. Information on stopping investigational trial intervention for an individua participant due to safety/other reasons should be detailed in Section 7, Participant Discontinuation of Trial Intervention and Withdrawal from Trial."
    * entry only Reference(ActivityDefinition)
  * section[treatmentOfOverdose].title = "Management of Investigational Trial Intervention Overdose"
  * section[treatmentOfOverdose].code.text = "section6.6-management-of-overdose"
  * section[treatmentOfOverdose]
    * text 1..1
    * text ^comment = "Describe what is meant by investigational trial intervention overdose. Provide any available information on managing the overdose and ensure it is consistent with the Investigator’s Brochure or product labelling, cross-references these documents as applicable."
    * entry only Reference(ActivityDefinition or PlanDefinition)
  * section[preparation].title = "Preparation, Storage, Handling and Accountability of Investigational Trial Intervention(s)"
  * section[preparation].code.text = "section6.7-preparation-storage-handling"
  * section[preparation]
    * section 3..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains preparationIntervention 1..1 MS and storageHandling 1..1 MS and accountability 1..1 MS
    * section[preparationIntervention].title = "Preparation of Investigational Trial Intervention(s)"
    * section[preparationIntervention].code.text = "section6.7.1-preparation"
    * section[preparationIntervention]
      * text 1..1
      * text ^comment = "Describe any preparation of the investigational trial intervention, and when necessary, by whom. When applicable, describe the maximum hold time once thawed/mixed before administration. Include thawing, diluting, mixing, and reconstitution/preparation instructions in this section. For drug/device combination products, include any relevant assembly or use instructions and reference the package insert that is provided separately. If the instructions are lengthy or complicated, it is acceptable to reference the package insert (if applicable) or include instructions in a separate document(s) provided to the site (for example, a pharmacy manual). If the latter, reference the separate documents."
    * section[storageHandling].title = "Storage and Handling of Investigational Trial Intervention"
    * section[storageHandling].code.text = "section6.7.2-storage-handling"
    * section[storageHandling]
      * text 1..1
      * text ^comment = "Describe storage and handling requirements (for example, protection from light, temperature, humidity) for the investigational trial intervention(s).  For trials in which multi-dose vials are utilised, provide additional information regarding stability and expiration time after initial use (for example, the seal is broken). State how the investigational trial intervention(s) will be provided to the Investigator. If applicable, describe the kits, packaging, or other material of the investigational trial intervention for blinding purposes. If the instructions are lengthy or complicated, it is acceptable to reference the package insert (if applicable) or include instructions in a separate document(s) provided to the site (for example, a pharmacy manual). If the latter, reference the separate documents."
    * section[accountability].title = "Accountability of Investigational Trial Intervention"
    * section[accountability].code.text = "section6.7.3-accountability"
    * section[accountability]
      * text 1..1
      * text ^comment = "Describe the accountability method, including how the investigational trial intervention will be distributed and related details, including: •	how and by whom the investigational trial intervention will be distributed •	participation of a drug storage repository or pharmacy, if applicable, •	plans for disposal or return of unused product, •	if applicable, plans for reconciliation of investigational trial intervention."
  * section[assignmentAndBlinding].title = "Investigational Trial Intervention Assignment, Randomisation and Blinding"
  * section[assignmentAndBlinding].code.text = "section6.8-assignment-randomisation-blinding"
  * section[assignmentAndBlinding]
    * section 4..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains assignment 1..1 MS and randomisation 1..1 MS and blinding 1..1 MS and unblinding 1..1 MS
    * section[assignment].title = "Participant Assignment to Investigational Trial Intervention"
    * section[assignment].code.text = "section6.8.1-assignment"
    * section[assignment]
      * text 1..1
      * text ^comment = "Describe the method of assigning participants to investigational trial intervention without being so specific that blinding or randomisation might be compromised. If assignment to investigational trial intervention is by randomisation, describe when randomisation occurs relative to screening. State that at enrollment, participant identification codes should be assigned. If adaptive randomisation or other methods of covariate balancing/minimisation are employed, include a cross-reference to the methods of analysis in Section 10, Statistical Considerations. As applicable, details regarding the implementation of procedures to minimise bias should be described."
    * section[randomisation].title = "Randomisation"
    * section[randomisation].code.text = "section6.8.2-randomisation"
    * section[randomisation]
      * text 1..1
      * text ^comment = "Describe the randomisation procedures (for example, central randomisation procedures), the method used to generate the randomisation schedule (for example, computer generated), the source of the randomisation schedule (for example, sponsor, investigator, or other), and whether or not IxRS will be used. To maintain the integrity of the blinding, do not include the block size. Describe the use and validation of any computer systems and programmes used for randomisation."
    * section[blinding].title = "Blinding"
    * section[blinding].code.text = "section6.8.3-blinding"
    * section[blinding]
      * text 1..1
      * text ^comment = "Describe efforts to ensure that the investigational trial intervention(s) are as indistinguishable as possible. Plans for the maintenance of randomisation codes and appropriate blinding for the trial should be described. Procedures for planned and unplanned (for example, safety events) breaking of randomisation codes should be provided. If the trial allows for some investigators or other designated staff to remain unblinded (for example, to allow them to adjust investigational trial intervention), the means of maintaining the blinding for other investigators or staff should be explained. Measures to prevent unblinding by laboratory measurements or while performing study assessments, if used, should be described. For transparency and trial integrity reasons, consider including a table where different roles (e.g. statistician, sponsor, investigator, site staff, DMC, CRO, etc.) and level of blinding are described. It needs to be clear how access to unblinded results will be controlled and what type of information will be disseminated from whom, and to whom. Distinction should be made between knowledge of individual treatment assignments and access to patient-level data or results by treatment group."
    * section[unblinding].title = "Emergency Unblinding at the Site"
    * section[unblinding].code.text = "section6.8.4-unblinding"
    * section[unblinding]
      * text 1..1
      * text ^comment = "Describe the criteria for breaking the trial blind or participant code. Describe the circumstances in which the blinding would be broken for an individual or for all participants and who has responsibility. Include the procedure for emergency unblinding such as via IxRS or code envelopes as well as documentation of unblinding. Indicate to whom the intentional and unintentional unblinding should be reported."
  * section[compliance].title = "Investigational Trial Intervention Compliance"
  * section[compliance].code.text = "section6.9-intervention-compliance"
  * section[compliance]
    * text 1..1
    * text ^comment = "Describe measures employed to ensure and document dosing information and investigational trial intervention compliance (for example, accountability records, diary cards, or concentration measurements). Include a description of what documents are mandatory to complete (for example, participant drug log) and what source data/records will be used to document investigational trial intervention compliance."
  * section[noninvestigationalTherapy].title = "Non-Investigational Trial Intervention(s)"
  * section[noninvestigationalTherapy].code.text = "section6.10-noninvestigational-interventions"
  * section[noninvestigationalTherapy]
    * text 1..1
    * text ^comment = "As stated in Section 6, non-investigational interventions are products used in the trial but are not part of trial objectives and hence, are not investigational trial interventions. The non-investigational trial intervention(s) may be described concisely in a table or in the following sections as applicable."
  * section[noninvestigationalTherapy]
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains background 0..1 MS and rescue 0..1 MS and other 0..1 MS
    * section[background].title = "Background Intervention"
    * section[background].code.text = "section6.10.1-background-intervention"
    * section[background]
      * text 1..1
      * text ^comment = "Non-investigational interventions are products used in the context of the trial but are not part of trial objectives and are not investigational trial intervention. Describe background interventions, including administration and any conditions for use."
    * section[rescue].title = "Rescue Therapy"
    * section[rescue].code.text = "section6.10.2-rescue-therapy"
    * section[rescue]
      * text 1..1
      * text ^comment = "List all rescue medications, treatments, and/or procedures, including any relevant instructions about their administration and any conditions for their use. If administration of rescue therapy leads to the temporary discontinuation of trial intervention or a participant’s withdrawal from the trial, refer to Section 7, Participant Discontinuation of Trial Intervention and Withdrawal from Trial."
    * section[other].title = "Other Therapy"
    * section[other].code.text = "section6.10.3-other-therapy"
    * section[other]
      * text 1..1
      * text ^comment = "If applicable, describe the use of other non-investigational or auxiliary therapy, for example, challenge agents or diagnostics."
  * section[concomitantTherapy].title = "Concomitant Therapy"
  * section[concomitantTherapy].code.text = "section6.11-concomitant-therapy"
  * section[concomitantTherapy]
    * text 1..1
    * text ^comment = "Describe the concomitant medications, supplements, complementary and alternative therapies, treatments, and/or procedures which are allowed or prohibited during the trial, and include details about when the information will be collected (for example, screening, all visits). This section should be consistent with the medication restrictions in the inclusion/exclusion criteria previously listed."
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains prohibited 0..1 MS and permitted 0..1 MS
    * section[prohibited].title = "Prohibited Concomitant Therapy"
    * section[prohibited].code.text = "section6.11.1-prohibited-concomitant-therapy"
    * section[prohibited]
      * text 1..1
      * text ^comment = "If applicable, describe any prohibited concomitant therapy."
    * section[permitted].title = "Permitted Concomitant Therapy"
    * section[permitted].code.text = "section6.11.2-permitted-concomitant-therapy"
    * section[permitted]
      * text 1..1
      * text ^comment = "If applicable, describe any permitted concomitant therapy."
* section[dropout].title = "Participant Discontinuation of Trial Intervention and Discontinuation or Withdrawal from Trial"
* section[dropout].code.text = "section7-participant-discontinuation"
* section[dropout]
  * section 3..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains discontinuation 1..1 MS and withdrawal 1..1 MS and lostToFollowUp 1..1 MS
  * section[discontinuation].title = "Discontinuation of Trial Intervention for Individual Participants"
  * section[discontinuation].code.text = "section7.1-discontinuation-of-trial-intervention"
  * section[discontinuation]
    * section 3..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains permanent 1..1 MS and temporary 1..1 MS and rechallenge 1..1 MS
    * section[permanent].title = "Permanent Discontinuation of Trial Intervention"
    * section[permanent].code.text = "section7.1.1-permanent-discontinuation-of-trial-intervention"
    * section[permanent]
      * text 1..1
      * text ^comment = "Describe the criteria for discontinuation of a participant from any trial intervention, carefully evaluating which are appropriate for the trial population and therapy being studied. Specify whether participants who discontinue trial intervention can or cannot continue the trial (continue trial visits). In many cases, it will be important to continue to follow and ascertain outcomes in participants who discontinue treatment through the end of the trial to prevent missing data in important analyses Refer to the Section 1.3 Schedule of Activities for assessments to be performed at the time of and following discontinuation of trial intervention. Explain the process for collecting and recording the detailed reasons for discontinuing trial intervention(s)."
    * section[temporary].title = "Temporary Discontinuation of Trial Intervention"
    * section[temporary].code.text = "section7.1.2-temporary-discontinuation-of-trial-intervention"
    * section[temporary]
      * text 1..1
      * text ^comment = "Describe •	the criteria for temporary discontinuation or interruption of trial intervention for an individual participant •	what to do and which restrictions still apply if the participant needs to temporarily discontinue or interrupt trial intervention •	whether they will continue in the trial, and • whether all, or specify which, assessments will be performed for the stated duration of the trial. Details of any rechallenge or restart after a safety-related event should be included in Section 7.1.3, Rechallenge."
    * section[rechallenge].title = "Rechallenge"
    * section[rechallenge].code.text = "section7.1.3-rechallenge"
    * section[rechallenge]
      * text 1..1
      * text ^comment = "Describe the criteria for rechallenge/restarting trial intervention, how to perform rechallenge, number of rechallenges allowed during the trial, and whether all, or specify which, assessments will be performed for the stated duration of the trial. If rechallenge is not allowed, state this."
  * section[withdrawal].title = "Discontinuation or Withdrawal from the Trial"
  * section[withdrawal].code.text = "section7.2-participant-withdrawal"
  * section[withdrawal]
    * text 1..1
    * text ^comment = "Describe the criteria for participant withdrawal from the trial. Describe the reason for withdrawal and the type and data to be collected for the final assessments with reference to the schedule of activities for the participant end of study visit unless provided in another section. In many cases, the only reason for a participant being considered withdrawn from the trial should be a participant’s withdrawal of consent to continue to participate in the trial. All other participants, including those who discontinue treatment, should remain in the trial and continued to be followed to prevent missing data in important analyses. Please refer to Section 10 about the data that need to be collected for the trial estimands."
  * section[lostToFollowUp].title = "Lost to Follow-Up"
  * section[lostToFollowUp].code.text = "section7.3-lost-to-follow-up"
  * section[lostToFollowUp]
    * text 1..1
    * text ^comment = "Describe how the trial will define loss to follow-up. In general, participants should be considered lost to follow-up only if they cannot be reached despite multiple attempts at contact. Describe how reasons for loss to follow-up (when available) will be documented. Also describe approaches that will be used to minimize loss to follow-up, such as multiple, diverse methods to remain in contact with participants (e.g., telephone calls, texts, and emails to the participant)."
* section[assessments].title = "Trial Assessments and Procedures"
* section[assessments].code.text = "section8-assessments"
* section[assessments]
  * section 8..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains considerations 0..1 MS and screeningBaseline 1..1 MS and efficacy 1..1 MS and safety 1..1 MS and pharmacokinetics 1..1 MS and biomarkers 1..1 MS and immunogenicity 1..1 MS and economics 0..1 MS
  * section[considerations].title = "Trial Assessments and Procedures Considerations"
  * section[considerations].code.text = "section8.1-assessments-procedures"
  * section[considerations]
    * text 1..1
    * text ^comment = "Enter general trial assessments and procedures text, if needed."
  * section[screeningBaseline].title = "Screening/Baseline Assessments and Procedures"
  * section[screeningBaseline].code.text = "section8.2-screening-baseline-assessments"
  * section[screeningBaseline]
    * text 1..1
    * text ^comment = "Describe any assessments and procedures that are unique to screening/baseline (for example, collection of data on participant characteristics, assessments/procedures performed for the purpose of determining eligibility or for stratification) in this section. Describe screening and baseline assessments and procedures separately if screening and baseline are performed at different visits."
  * section[efficacy].title = "Efficacy Assessments and Procedures"
  * section[efficacy].code.text = "section8.3-efficacy-assessments"
  * section[efficacy]
    * text 1..1
    * text ^comment = "Describe efficacy assessments and procedures in this section. Cross-refer to Section 8.7 if immunogenicity assessments are used in efficacy determination."
  * section[safety].title = "Safety Assessments and Procedures"
  * section[safety].code.text = "section8.4-safety-assessments"
  * section[safety]
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains physical 0..1 MS and vitals 0..1 MS and ecg 0..1 MS and laboratory 0..1 MS and pregnancy 0..1 MS and suicidal 0..1 MS
    * section[physical].title = "Physical Examination"
    * section[physical].code.text = "section8.4.1-physical-examination"
    * section[physical] 
      * text 1..1
      * text ^comment = "Include any specific instructions for the collection and interpretation of physical examinations."
    * section[vitals].title = "Vital Signs"
    * section[vitals].code.text = "section8.4.2-vital-signs"
    * section[vitals] 
      * text 1..1
      * text ^comment = "Include any specific instructions for the collection and interpretation of vital signs."
    * section[ecg].title = "Electrocardiograms"
    * section[ecg].code.text = "section8.4.3-electrocardiograms"
    * section[ecg] 
      * text 1..1
      * text ^comment = "Include any specific instructions for the collection, interpretation, and archiving of ECGs."      
    * section[laboratory].title = "Clinical Laboratory Assessments"
    * section[laboratory].code.text = "section8.4.4-clinical-laboratory-assessments"
    * section[laboratory] 
      * text 1..1
      * text ^comment = "Include any specific instructions for the collection and interpretation of clinical laboratory assessments. •	Type of laboratory (central/local/hybrid) •	acceptability of additional tests deemed necessary by the investigator or local regulations •	instructions for situations in which central laboratory results are not available in time for trial intervention and/or response evaluation, or in the event of a severe disruption (for example, a pandemic or natural disaster) •	treatment algorithms for results out of normal range •	Cross-refer to Section 13.2 for lab assessment panels"
    * section[pregnancy].title = "Pregnancy Testing"
    * section[pregnancy].code.text = "section8.4.5-pregnancy-testing"
    * section[pregnancy] 
      * text 1..1
      * text ^comment = "Optional section to specify pregnancy testing requirements."
    * section[suicidal].title = "Suicidal Ideation and Behaviour Risk Monitoring"
    * section[suicidal].code.text = "section8.4.6-suicidal-ideation"
    * section[suicidal] 
      * text 1..1
      * text ^comment = "If the trial meets any of the criteria requiring suicidal ideation and behaviour risk monitoring by the guidance/guideline in each region, include justification for the need for suicidal ideation and behaviour risk monitoring in the study and add any specific instructions for the collection and interpretation of the assessment. In case this is an AESI in the study, justification will also need to be provided in the appropriate subsection of Section 9.4."
  * section[pharmacokinetics].title = "Pharmacokinetics"
  * section[pharmacokinetics].code.text = "section8.5-pharmacokinetics"
  * section[pharmacokinetics]
    * text 1..1
    * text ^comment = "Include any specific instructions for the collection and assay of samples and interpretation of PK assessments. If pharmacokinetic testing is not included in the study, state Not Applicable. •	Describe the biological sample(s) collected, the handling of samples, and the assay method. o	Specific sample collection and processing instructions can be described in an appendix or a separate document and cross-referenced. •	Describe the retention time for the samples (ensuring alignment with the ICF). •	Indicate the types of analyses that may be studied for each sample."
  * section[biomarkers].title = "Biomarkers"
  * section[biomarkers].code.text = "section8.6-biomarkers"
  * section[biomarkers]
    * text 0..1
    * text ^comment = "No text is intended here (header only). Include any specific instructions for the collection of samples and interpretation of biomarkers in the sub-sections below as applicable. Safety biomarkers should be included in Section 8.4 and immunogenicity markers in Section 8.7."
    * section 2..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains genetics 1..1 MS and pharmacodynamics 1..1 MS and other 0..1 MS
    * section[genetics].title = "Genetics and Pharmacogenomics"
    * section[genetics].code.text = "section8.6.1-genetics-pharmacogenomics"
    * section[genetics]
      * text 1..1
      * text ^comment = "[Include any specific instructions for the collection and assay of samples for genetic and/or pharmacogenomic analysis. If genetic testing is not included in the study, state “Not Applicable.” • Describe the biological samples that will be collected (for example, tissue, serum, plasma, etc.), handling of samples, and the assay method. o Specific sample collection and processing instructions can be described in an appendix or a separate document and cross-referenced. • Describe the retention time for the samples (ensuring alignment with the ICF). • Indicate the types of analyses that may be studied for each sample."
    * section[pharmacodynamics].title = "Pharmacodynamic Biomarkers"
    * section[pharmacodynamics].code.text = "section8.6.2-pharmacodynamics"
    * section[pharmacodynamics]
      * text 1..1
      * text ^comment = "[Include any specific instructions for the collection of samples and assessment of pharmacodynamic biomarkers. If pharmacodynamic biomarker testing is not included in the study, state “Not Applicable.” • Describe the biological samples that will be collected (for example, tissue, serum, plasma, etc.). o Specific sample collection and processing instructions can be described in an appendix or a separate document and cross-referenced. • Describe the retention time for the samples (ensuring alignment with the ICF). • Indicate the types of biomarkers that will be studied for each sample. • Specify whether each sample is optional or required. Required samples must be based on a protocol objective."
    * section[other].title = "Other Biomarkers"
    * section[other].code.text = "section8.6.3-other-biomarkers"
    * section[other]
      * text 1..1
      * text ^comment = "[Include any specific instructions for the collection of samples and assessment of other biomarkers. • Describe the biological samples that will be collected (for example, tissue, serum, plasma, etc.). o Specific sample collection and processing instructions can be described in an appendix or a separate document and cross-referenced. • Describe the retention time for the samples (ensuring alignment with the ICF). • Indicate the types of biomarkers that will be studied for each sample. • Specify whether each sample is optional or required. Required samples must be based on a protocol objective."
  * section[immunogenicity].title = "Immunogenicity Assessments"
  * section[immunogenicity].code.text = "section8.7-immunogenicity-assessments"
  * section[immunogenicity]
    * text 1..1
    * text ^comment = "Include any specific instructions for the collection of samples and interpretation of immunogenicity. If immunogenicity assessments are included within Efficacy Assessments or Safety Assessments, cross-reference to that section. If immunogenicity testing is not included in the study, state Not Applicable."
  * section[economics].title = "Medical Resource Utilisation and Health Economics"
  * section[economics].code.text = "section8.8-economics"
  * section[economics]
    * text 1..1
    * text ^comment = "This section does not apply to COAs.  Include this section only for any value evidence and outcomes assessments not included in either the efficacy or safety sections. If medical resource utilization and health economics assessment is not included in the study, state Not Applicable. Describe the health outcome measures, collection method (for example, diary, physician interview), and participant burden."
* section[adverseEvents].title = "Adverse Events, Serious Adverse Events, Product Complaints, Pregnancy and Postpartum Information"
* section[adverseEvents].code.text = "section9-adverse-events"
* section[adverseEvents]
  * section 5..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains definitions 1..1 MS and collectionMethods 1..1 MS and recording 1..1 MS and reporting 1..1 MS and pregnancy 1..1 MS
  * section[definitions].title = "Definitions"
  * section[definitions].code.text = "section9.1-definitions"
  * section[definitions]
    * section 2..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains adverseEventsDefinitions 1..1 MS and seriousAdverseEventsDefinitions 1..1 MS and productComplaintsDefinitions 0..1 MS
    * section[adverseEventsDefinitions].title = "Definitions of Adverse Events"
    * section[adverseEventsDefinitions].code.text = "section9.1.1-definitions-adverse-events"
    * section[adverseEventsDefinitions]
      * text 1..1
      * text ^comment = "Specify the AE definitions, including: •	Any relevant regional AE requirements. •	Any events that meet and do not meet the AE definition. •	Any trial-specific AE clarifications. •	The trial-specific definition for an overdose. •	If applicable, any clarifications on the AE and SAE definitions for efficacy trials (for example, lack of efficacy or failure of pharmacological actions reporting)."
    * section[seriousAdverseEventsDefinitions].title = "Definitions of Serious Adverse Events"
    * section[seriousAdverseEventsDefinitions].code.text = "section9.1.2-definitions-serious-adverse-events"
    * section[seriousAdverseEventsDefinitions]
      * text 1..1
      * text ^comment = "Specify the SAE definitions, including: •	Any relevant regional SAE requirements. •	Any events that meet and do not meet the SAE definition. •	Any trial-specific SAE clarifications."
    * section[productComplaintsDefinitions].title = "Definitions of Medical Device Product Complaints"
    * section[productComplaintsDefinitions].code.text = "section9.1.3-definitions-product-complaints"
    * section[productComplaintsDefinitions]
      * text 1..1
      * text ^comment = "Specify the definitions of medical device product complaints."
  * section[collectionMethods].title = "Timing and Mechanism for Collection and Reporting"
  * section[collectionMethods].code.text = "section9.2-collection-methods"
  * section[collectionMethods]
    * text 1..1
    * text ^comment = "Specify the starting and ending time periods for and frequency of collecting AEs and SAEs. Cross refer to the Schedule of Assessments as appropriate."
  * section[recording].title = "Recording and Follow-Up"
  * section[recording].code.text = "section9.3-recording-and-follow-up"
  * section[recording]
    * text 1..1
    * text ^comment = "Specify the Investigator’s actions for recording AEs and SAEs, including severity, causality, and the final outcome."
  * section[recording]
    * section 4..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains identifying 1..1 MS and intensity 1..1 MS and causality 1..1 MS and followup 1..1 MS
    * section[identifying].title = "Identification"
    * section[identifying].code.text = "section9.3.1-identifying-events"
    * section[identifying]
      * text 1..1
      * text ^comment = "Specify how AEs, SAEs, product complaints and pregnancy and postpartum information will be identified (for example, spontaneous reporting, solicited questions)."
    * section[intensity].title = "Severity"
    * section[intensity].code.text = "section9.3.2-severity"
    * section[intensity]
      * text 1..1
      * text ^comment = "Specify the intensity rating categories/scale."     
    * section[causality].title = "Causality"
    * section[causality].code.text = "section9.3.3-causality"
    * section[causality]
      * text 1..1
      * text ^comment = "Specify: •	The causality categories/scale. •	Procedures for assessing causality."
    * section[followup].title = "Follow-up"
    * section[followup].code.text = "section9.3.4-followup"
    * section[followup]
      * text 1..1
      * text ^comment = "Specify the procedures for follow-up of AEs, SAEs, pregnancy and product complaints.  Include the assessment tools that will be used to monitor the events and the duration of follow-up after appearance of the events.  Specify any procedures to be used for trials in which death is not an endpoint."
  * section[reporting].title = "Reporting"
  * section[reporting].code.text = "section9.4-reporting-events"
  * section[reporting]
    * text 1..1
    * text ^comment = "Specify the SAE reporting method (for example, an electronic data collection tool or a paper CRF) and reporting timeline to the Sponsor."
  * section[reporting]
    * section 3..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains regulatoryRequirements 1..1 MS and specialInterest 1..1 MS and diseaseRelatedEvents 1..1 MS
    * section[regulatoryRequirements].title = "Regulatory Reporting Requirements"
    * section[regulatoryRequirements].code.text = "section9.4.1-regulatory-requirements"
    * section[regulatoryRequirements]
      * text 1..1
      * text ^comment = "Specify: •	The investigators’ responsibilities for reporting SAEs and Medical Device Product Complaints to the Sponsor (and to Ethics Committees, where required), specifying timing of reporting to allow the Sponsor to meet their responsibilities •	The Sponsor’s legal/regulatory responsibilities to report SAEs to regulatory authorities, ethics committees, and investigators •	Serious and unexpected adverse reaction reporting"     
    * section[specialInterest].title = "Adverse Events of Special Interest"
    * section[specialInterest].code.text = "section9.4.2-special-interest"
    * section[specialInterest]
      * text 1..1
      * text ^comment = "Specify any Adverse Events of Special Interest (AESI): •	Other events that merit reporting to the Sponsor, trial leadership, IRB, and regulatory agencies (for example, secondary malignancies in oncology trials). •	Other reportable events not already included in the previous sections, such as cardiovascular events, medical device incidents (including malfunctions), laboratory test abnormalities, and trial intervention overdose.   Include the following for each AESI: •	The definition of the event. Specify the MedDRA preferred terms to use to report the AESI. •	If it is a measurable quantity, specify how will the measurement be done. •	If it is a clinical event, specify how will it be confirmed."
    * section[diseaseRelatedEvents].title = "Disease-related Events or Outcomes Not Qualifying as AEs or SAEs"
    * section[diseaseRelatedEvents].code.text = "section9.4.3-disease-related-events"
    * section[diseaseRelatedEvents]
      * text 1..1
      * text ^comment = "Specify any Disease-Related Events (DREs), disease-related outcomes (DROs), or both that will not be reported as AEs or SAEs (for example, seizures in anticonvulsant trials) or state not applicable."
  * section[pregnancy].title = "Pregnancy and Postpartum Information"
  * section[pregnancy].code.text = "section9.5-pregnancy-postpartum"
  * section[pregnancy]
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains pregnant 0..1 MS and pregnantPartner 0..1 MS
    * section[pregnant].title = "Participants Who Become Pregnant During the Trial"
    * section[pregnant].code.text = "section9.5.1-pregnant"
    * section[pregnant]
      * text 1..1
      * text ^comment = "See Template for instructions."
    * section[pregnantPartner].title = "Participants Whose Partners Become Pregnant"
    * section[pregnantPartner].code.text = "section9.5.2-pregnant-partner"
    * section[pregnantPartner]
      * text 1..1
      * text ^comment = "See Template for instructions."
* section[statistics].title = "Statistical Considerations"
* section[statistics].code.text = "section10-statistics"
* section[statistics]
  * text 0..1
  * text ^comment = "Ensure that the data analysis complies with ICH E9 Guideline and ICH E9(R1) Guideline. In general, all relevant data collected in the trial should be considered in this section. No text is intended here (header only)."
  * section 6..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains considerations 1..1 MS and analysisSets 1..1 MS and analysisBaseline 1..1 MS and analysisPrimaryObjective 1..* MS and secondaryAnalysis 0..* MS and exploratoryAnalysis 0..1 MS and safetyAnalyses 0..1 MS and otherAnalyses 0..1 MS and multiplicity 1..1 MS and interimAnalyses 0..1 MS and sampleSize 1..1 MS
  * section[considerations].title = "General Considerations"
  * section[considerations].code.text = "section10.1-general-considerations"
  * section[considerations]
    * text 1..1
    * text ^comment = "Provide statements relevant to statistical considerations in general. For example, this might include statements indicating whether there is a separate statistical analysis plan, which general summary statistics will be provided, and when the analyses will be conducted (e.g., “The analysis will be conducted on all participant data at the time the trial ends.”)."
  * section[analysisSets].title = "Analysis Sets"
  * section[analysisSets].code.text = "section10.2-analysis-sets"
  * section[analysisSets]
    * text 1..1
    * text ^comment = "Describe analysis sets to be considered at the trial level, i.e., the set of participants whose data are to be included in the analyses."
  * section[analysisBaseline].title = "Analyses of Demographics and Other Baseline Variables"
  * section[analysisBaseline].code.text = "section10.3-analyses-demographics"
  * section[analysisBaseline]
    * text 1..1
    * text ^comment = "Describe the summary statistics that will be used to describe the distribution of demographic and other relevant variables at baseline. Specify the timing of the measurement of the variables (e.g., at inclusion in the trial; before , or at randomization). Relevant variables include, but are not limited to: stratification variables specified in Section 6.8, covariates for the statistical models specified in Section 10.4, other suspected predictive or prognostic variables, and variables used for planned subgroup analyses."
  * section[analysisPrimaryObjective].title = "Analyses Associated with the Primary Objective(s)"
  * section[analysisPrimaryObjective].code.text = "section10.4-analysis-primary-objective"
  * section[analysisPrimaryObjective]
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains analysisPrimaryInstance 1..* MS
    * section[analysisPrimaryInstance].code.text = "section10.4-analysis-primary-objective-instance"
    * section[analysisPrimaryInstance]
      * focus only Reference(VariableDefinition)
      * text 0..1
      * text ^comment = "No content here. Create a new section for each estimand."
      * section 3..*
      * section ^slicing.discriminator.type = #value
      * section ^slicing.discriminator.path = "code.text"
      * section ^slicing.rules = #open
      * section contains statisticalModel 1..1 MS and intercurrentEventHandling 0..1 MS and missingData 1..1 MS and sensitvityAnalysis 1..1 MS and supplementaryAnalysis 0..1 MS
      * section[statisticalModel].title = "Statistical Method of Analysis"
      * section[statisticalModel].code.text = "section10.4.1-statistical-method"
      * section[statisticalModel]
        * text 1..1
        * text ^comment = "Describe the statistical analysis methods that will be used to evaluate the primary objective(s) and associated estimand(s) in Section 3.1. Ensure that the statistical hypothesis/model/analysis (and corresponding assumptions) is aligned with the primary estimand(s). For each objective, state the null and alternative hypotheses, including the pre-planned type 1 error rate, or alternative criteria for evaluating whether the objective has been met, and relevant operating characteristics if appropriate. Describe the statistical model used and the factors that will be included (covariates and interactions) and any rules for handling these factors (for example, pooling of centres). If modelling and simulation methods are to be used, please describe the model (inputs and outputs), the underlying assumptions, and the method of model fitting."
        * entry only Reference(EndpointAnalysisPlan)
      * section[intercurrentEventHandling].title = "Handling of Data in Relation to Primary Estimand(s)"
      * section[intercurrentEventHandling].code.text = "section10.4.2-data-handling"
      * section[intercurrentEventHandling]
        * text 1..1
        * text ^comment = "For each intercurrent event of the primary estimand(s) (Section 3.1, Estimand[s] for the Primary Objective[s]), explain how data will be handled for the statistical analysis in line with the primary estimand. The handling of intercurrent events in statistical analysis should be aligned with the specific estimand strategies being used. This section should describe with more detail the rationale and handling of the data rather than repeating the guidance from the preceding sections."
      * section[missingData].title = "Handling of Missing Data"
      * section[missingData].code.text = "section10.4.3-missing-data-handling"
      * section[missingData]
        * text 1..1
        * text ^comment = "Describe how missing data will be addressed (e.g., imputation method and model), state the underlying assumptions, and provide a rationale for the approach. Refer to the E9(R1) addendum when the estimand framework is used."
      * section[sensitvityAnalysis].title = "Sensitivity Analysis"
      * section[sensitvityAnalysis].code.text = "section10.4.4-sensitivity-analysis"
      * section[sensitvityAnalysis]
        * text 1..1
        * text ^comment = "Describe sensitivity analyses. Sensitivity analyses are a series of analyses conducted with the intent to explore the robustness of inferences from the main estimator to deviations from its underlying modelling assumptions and limitations in the data."
        * entry only Reference(EndpointAnalysisPlan)
      * section[supplementaryAnalysis].title = "Supplementary Analysis"
      * section[supplementaryAnalysis].code.text = "section10.4.5-supplementary-analysis"
      * section[supplementaryAnalysis]
        * text 1..1
        * text ^comment = "Describe any supplementary analysis if applicable. Supplementary analyses are conducted in addition to the main and sensitivity analysis with the intent to provide additional insights into the understanding of the treatment effect."
  * section[secondaryAnalysis].title = "Analyses Associated with the Secondary Objective(s)"
  * section[secondaryAnalysis].code.text = "section10.5-analysis-secondary-objective"
  * section[secondaryAnalysis]
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains analysisSecondaryInstance 1..* MS
    * section[analysisSecondaryInstance].code.text = "section10.5-analysis-secondary-objective-instance"
    * section[analysisSecondaryInstance]
      * focus only Reference(VariableDefinition)
      * text 0..1
      * text ^comment = "No content here. Create a new section for each estimand."
      * section 0..*
      * section ^slicing.discriminator.type = #value
      * section ^slicing.discriminator.path = "code.text"
      * section ^slicing.rules = #open
      * section contains statisticalModel 0..1 MS and intercurrentEventHandling 0..1 MS and missingData 0..1 MS and sensitvityAnalysis 0..1 MS and supplementaryAnalysis 0..1 MS
      * section[statisticalModel].title = "Statistical Method of Analysis"
      * section[statisticalModel].code.text = "section10.5.1-statistical-method"
      * section[statisticalModel]
        * text 1..1
        * text ^comment = "Clearly specify any secondary hypotheses that will be tested for confirmatory purposes."
        * entry only Reference(EndpointAnalysisPlan)
      * section[intercurrentEventHandling].title = "Handling of Data in Relation to Secondary Estimand(s)"
      * section[intercurrentEventHandling].code.text = "section10.5.2-data-handling"
      * section[intercurrentEventHandling]
        * text 1..1
        * text ^comment = "Enter Handling of Data in Relation to Secondary Estimand(s)"
      * section[missingData].title = "Handling of Missing Data"
      * section[missingData].code.text = "section10.5.3-missing-data-handling"
      * section[missingData]
        * text 1..1
        * text ^comment = "Describe how missing data will be addressed (e.g., imputation method and model), state the underlying assumptions, and provide a rationale for the approach. Refer to the E9(R1) addendum when the estimand framework is used."
      * section[sensitvityAnalysis].title = "Sensitivity Analysis"
      * section[sensitvityAnalysis].code.text = "section10.5.4-sensitivity-analysis"
      * section[sensitvityAnalysis]
        * text 1..1
        * text ^comment = "Describe sensitivity analyses. Sensitivity analyses are a series of analyses conducted with the intent to explore the robustness of inferences from the main estimator to deviations from its underlying modelling assumptions and limitations in the data."
        * entry only Reference(EndpointAnalysisPlan)
      * section[supplementaryAnalysis].title = "Supplementary Analysis"
      * section[supplementaryAnalysis].code.text = "section10.5.5-supplementary-analysis"
      * section[supplementaryAnalysis]
        * text 1..1
        * text ^comment = "Describe any supplementary analysis if applicable. Supplementary analyses are conducted in addition to the main and sensitivity analysis with the intent to provide additional insights into the understanding of the treatment effect."
  * section[exploratoryAnalysis].title = "Analyses Associated with the Exploratory Objective(s)"
  * section[exploratoryAnalysis].code.text = "section10.6-analysis-exploratory-objective"
  * section[exploratoryAnalysis]
    * text 1..1
    * text ^comment = "Describe any exploratory analyses, if applicable. Additional subsections could be created to describe the analyses, as needed."
  * section[safetyAnalyses].title = "Safety Analyses"
  * section[safetyAnalyses].code.text = "section10.7-safety-analyses"
  * section[safetyAnalyses]
    * text 1..1
    * text ^comment = "If safety is a primary and/or secondary objective, describe the corresponding safety analyses in the appropriate section above (Section 10.2 or Section 10.3)."
  * section[otherAnalyses].title = "Other Analyses"
  * section[otherAnalyses].code.text = "section10.8-other-analyses"
  * section[otherAnalyses]
    * text 1..1
    * text ^comment = "Describe Other Analyses such as Subgroup analyses, Adjusted analysis if needed."
  * section[interimAnalyses].title = "Interim Analyses"
  * section[interimAnalyses].code.text = "section10.9-interim-analyses"
  * section[interimAnalyses]
    * text 1..1
    * text ^comment = "Describe any interim analysis and criteria for stopping or adapting the trial. The description should include, but is not limited to, the following: {See Template for full list}"
  * section[multiplicity].title = "Multiplicity Adjustments"
  * section[multiplicity].code.text = "section10.10-multiplicity-adjustments"
  * section[multiplicity]
    * text 1..1
    * text ^comment = "Multiple testing procedures may be needed to limit the probability of false positive findings in a trial. Reasons for carrying out multiple statistical tests include - but are not restricted to - multiple endpoints, multiple treatment groups, multiple hypotheses, subgroups, different statistical methods, etc. Describe any approaches to multiplicity control for the trial. This description might go beyond the analysis of primary objectives. Specify the statistical approach to control the overall type I error rate as well as the (adjusted) significance levels to test specific hypotheses, as applicable. Clarify whether the tests/confidence intervals are one- or two-sided. State the circumstances under which a study will be considered to have met its primary objective(s). For example, in a study with two primary efficacy endpoints, this section should state whether the study would be expected to provide evidence on at least one or on both of the endpoints in order to confirm the efficacy of the treatment. For some statistical approaches it might be helpful to include a graphical depiction, as visualization will be helpful for understanding, coupled with the clinical translation of the mathematical choices. Details regarding Interim Analyses should be provided in section 10.9."
  * section[sampleSize].title = "Sample Size Determination"
  * section[sampleSize].code.text = "section10.11-sample-size-determination"
  * section[sampleSize]
    * text 1..1
    * text ^comment = "This section should detail the methods used for the determination of the sample size and a reference to tables or statistical software used to carry out the calculation. Sufficient information should be provided so that the sample size calculation can be reproduced or described. If the planned sample size is not derived statistically, then this should be explicitly stated along with a rationale for the intended sample size (for example, exploratory nature of pilot trials; pragmatic considerations for trials in rare diseases)."
    * entry only Reference(EndpointAnalysisPlan)
* section[oversight].title = "Trial Oversight and Other General Considerations"
* section[oversight].code.text = "section11-oversight"
* section[oversight]
  * section 10..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains regulatory 1..1 MS and trialOversight 1..1 MS and committees 1..1 MS and informedConsent 1..1 MS and insurance 1..1 MS and riskManagement 1..1 MS and dataGovernance 1..1 MS and sourceData 1..1 MS and protcolDeviations 1..1 MS and earlySiteClosure 1..1 MS
  * section[regulatory].title = "Regulatory and Ethical Considerations"
  * section[regulatory].code.text = "section11.1-regulatory-considerations"
  * section[regulatory]
    * text 1..1
    * text ^comment = "Concisely summarize the prevailing ethical, legal, and regulatory guidelines that will be applied throughout the trial. For example, This trial will be conducted in accordance with the protocol and with the following: • Consensus ethical principles derived from international guidelines including the Declaration of Helsinki and the Council for International Organisations of Medical Sciences (CIOMS) International Ethical Guidelines • ICH Good Clinical Practice (GCP) Guidelines • Applicable laws and regulations"
  * section[trialOversight].title = "Trial Oversight"
  * section[trialOversight].code.text = "section11.2-trial-oversight"
  * section[trialOversight]
    * text 0..1
    * text ^comment = "Concisely summarize the trial oversight listing the investigator and sponsor responsibilities not covered in other sections of the protocol which are essential for the operations of the trial, specifying the ones related to quality assurance."
    * section 2..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains investigatorResponsibilities 1..1 MS and sponsorResponsibilities 1..1 MS
    * section[investigatorResponsibilities].title = "Investigator Responsibilities"
    * section[investigatorResponsibilities].code.text = "section11.2.1-investigator-responsibilities"
    * section[investigatorResponsibilities]
      * text 1..1
      * text ^comment = "Enter Investigator Responsibilities."
    * section[sponsorResponsibilities].title = "Sponsor Responsibilities"
    * section[sponsorResponsibilities].code.text = "section11.2.2-sponsor-responsibilities"
    * section[sponsorResponsibilities]
      * text 1..1
      * text ^comment = "Describe the sponsor duties to be delegated to a third party that may impact the investigators sites, if applicable."
  * section[informedConsent].title = "Informed Consent Process"
  * section[informedConsent].code.text = "section11.3-informed-consent-process"
  * section[informedConsent]
    * text 1..1
    * text ^comment = "Specify the key elements of the informed consent process, including any special needs and how these are addressed (for example, assent, capacity, legally acceptable representative, adolescents who may reach age of majority during the trial, pregnant participants and pregnant partners of participants)."
    * section 0..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains assentProcess 0..1 MS and emergency 0..1 MS and rescreening 0..1 MS and remainingSamples 0..1 MS
    * section[assentProcess].title = "Assent Process"
    * section[assentProcess].code.text = "section11.3.0-assent-process"
    * section[assentProcess]
      * text 1..1
    * section[emergency].title = "Emergency Consent Process"
    * section[emergency].code.text = "section11.3.0-emergency-consent-process"
    * section[emergency]
      * text 1..1
      * text ^comment = "If enrollment in the trial may occur during an emergency in which the participant or their legally acceptable representative is not able or available to give consent, describe the consent process."
    * section[rescreening].title = "Informed Consent for Rescreening"
    * section[rescreening].code.text = "section11.3.1-rescreening-consent-process"
    * section[rescreening]
      * text 1..1
      * text ^comment = "If participants can be rescreened, add the text to state whether the participant needs to complete a new consent.  Screen failure and rescreening should be clearly defined in the protocol, with cross-reference to those definitions."
    * section[remainingSamples].title = "Informed Consent for Remaining Samples in Exploratory Research"
    * section[remainingSamples].code.text = "section11.3.2-remaining-samples"
    * section[remainingSamples]
      * text 1..1
      * text ^comment = "If any exploratory research is planned and additional written consent regarding the use of remaining samples for exploratory research will be obtained, describe the consent process." 
  * section[committees].title = "Committees"
  * section[committees].code.text = "section11.4-committees"
  * section[committees]
    * text 1..1
    * text ^comment = "Briefly describe the administrative structure of committees that will be reviewing data while the trial is ongoing, and the type of committee (for example, Dose Escalation Committee, Data Monitoring Committee or Data Safety Monitoring Board). Note that specific details may be required depending on local law or regulation.  If applicable, Committee Charters may be cross-referenced. If no committees are applicable, state Not Applicable."
  * section[insurance].title = "Insurance and Indemnity"
  * section[insurance].code.text = "section11.5-insurance-and-indemnity"
  * section[insurance]
    * text 1..1
    * text ^comment = "Concisely summarize the arrangements for participants insurance and indemnity if not addressed in a separate agreement, if required by the applicable regulatory requirements."
  * section[riskManagement].title = "Risk Management"
  * section[riskManagement].code.text = "section11.6-risk-management"
  * section[riskManagement]
    * text 1..1
    * text ^comment = "Describe how the critical to quality factors will be mitigated. It is important to determine the risks that threaten their integrity and decide whether they can be accepted or should be mitigated, based on their probability, detectability and impact. Where it is decided that risks should be mitigated, the necessary control processes should be put in place and communicated, and the necessary actions taken to mitigate the risks."
  * section[dataGovernance].title = "Data Governance"
  * section[dataGovernance].code.text = "section11.7-data-governance"
  * section[dataGovernance]
    * text 1..1
    * text ^comment = "Describe the key processes for critical trial integrity, traceability and security enabling accurate collection, reporting, monitoring, transfer, retention, access and publication if not addressed in separate agreement(s). Describe the measures to protect the privacy and confidentiality of personal information of trial participants in accordance with applicable regulatory requirements on personal data protection and any measures that should be taken in case of a data security breach."
  * section[sourceData].title = "Source Data"
  * section[sourceData].code.text = "section11.8-source-data"
  * section[sourceData]
    * text 1..1
    * text ^comment = "Establish the importance of source data and expectation for traceability of transcribed information back to source.  Delineate expectations for investigators (for example, maintain source data at the site, ensure availability of current records) and trial monitors (for example, verify CRF data relative to source, safety of participants is being protected, conduct is in accordance with GCP).  Define what constitutes source data and its origin or provide a reference to the location of these definitions, if contained in a separate document, such as a monitoring guideline or source data acknowledgement). Describe the provision for direct access to source data and documents enabling clinical trial-related monitoring, audits and regulatory inspections, if not included in separate agreement(s)."
  * section[protcolDeviations].title = "Protocol Deviations"
  * section[protcolDeviations].code.text = "section11.9-protocol-deviations"
  * section[protcolDeviations]
    * text 1..1
    * text ^comment = "Plans for detecting, reviewing, and reporting any deviations from the protocol should be described or a reference to separate document included."
  * section[earlySiteClosure].title = "Early Site Closure"
  * section[earlySiteClosure].code.text = "section11.10-early-site-closure"
  * section[earlySiteClosure]
    * section 3..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.text"
    * section ^slicing.rules = #open
    * section contains decisionRights 1..1 MS and criteria 1..1 MS and responsibilities 1..1 MS
    * section[decisionRights].title = "Decision Rights for Site Closure"
    * section[decisionRights].code.text = "section11.10-early-site-closure#decisionRights"
    * section[decisionRights]
      * text 1..1
      * text ^comment = "List the sponsor's rights to close a site.  Likewise, list the investigator's rights to initiate early site closure."
    * section[criteria].title = "Crteria for Early Closure"
    * section[criteria].code.text = "section11.10-early-site-closure#criteria"
    * section[criteria]
      * text 1..1
      * text ^comment = "List the criteria for early closure of a site by the sponsor or investigator."
    * section[responsibilities].title = "Responsibilities Following Early Site Closure"
    * section[responsibilities].code.text = "section11.10-early-site-closure#responsibilities"
    * section[responsibilities]
      * text 1..1
      * text ^comment = "List the responsibilities of the sponsor and investigator following early site closure, such as informing the ethics committee(s), and prompt notification of the participant and transition to appropriate therapy and/or follow-up."

* section[definitions].title = "Appendix: Supporting Details"
* section[definitions].code.text = "section12-supporting-details"
* section[definitions]
  * section 3..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.text"
  * section ^slicing.rules = #open
  * section contains clinicalLaboratoryTests 1..1 MS and regional 1..1 MS and priorAmendments 1..1 MS
  * section[clinicalLaboratoryTests].title = "Clinical Laboratory Tests"
  * section[clinicalLaboratoryTests].code.text = "section12.1-clinical-laboratory-tests"
  * section[clinicalLaboratoryTests]
    * text 1..1
    * text ^comment = "Specify which laboratory parameters should be included in each clinical laboratory assessment panel (for example, for haematology, chemistry, urinalysis). A tabular presentation for such information is common. If applicable, include equations and references for locally calculated laboratory results. If not applicable, retain header and enter Not Applicable."
  * section[regional].title = "Country/Region-Specific Differences"
  * section[regional].code.text = "section12.2-country-specific-differences"
  * section[regional]
    * text 1..1
    * text ^comment = "Although global clinical trial practices are increasingly harmonised, some country/ region-specific differences in requirements do exist (for example, document retention periods, contraception requirements).  Where differences in requirements cannot be reconciled, sponsors should explain how they will document and communicate country/region-specific differences (for example, by country/region-specific amendments or addenda). An alternative to country/region-specific amendments is to list the specific differences by country or countries in this section, including a reference to the relevant section of the protocol where the differing requirement applies. If not applicable, retain header and enter Not Applicable."
  * section[priorAmendments].title = "Prior Protocol Amendment(s)"
  * section[priorAmendments].code.text = "section12.3-prior-protocol-amendments"
  * section[priorAmendments]
    * text 1..1
    * text ^comment = "Either enter value of {Not applicable. The protocol has not been amended.} or {Not applicable. This is the first protocol amendment.} or SEE TEMPLATE INSTRUCTIONS."
* section[glossary].title = "Appendix: Glossary of Terms and Abbreviations"
* section[glossary].code.text = "section13-glossary"
* section[glossary]
  * text 1..1
  * text ^comment = "Define abbreviations and other terms used in the protocol. A tabular presentation is common and may serve as the definition at first use."
  * entry only Reference(ValueSet or CodeSystem)
* section[references].title = "Appendix: References"
* section[references].code.text = "section14-references"
* section[references]
  * text 1..1
  * text ^comment = "References should be listed in a common format that includes all relevant information to identify the source and date published.  If not published, this should be clearly indicated."
  * entry only Reference(Citation)

---

// File: input/fsh/composition/p-outcome-measure-report.fsh

Profile: OutcomeMeasureReport
Parent: EvidenceTableReportPackage
Id: outcome-measure-report
Description: "Profile of Composition for Evidence Based Medicine IG. The OutcomeMeasureReport Profile is used for an evidence report including the findings for any number of outcome measures in a research study."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#OutcomeMeasureReport "OutcomeMeasureReport"
* type.text = "Outcome Measure Report"
* section[results]
  * section 1..*
    * focus only Reference(VariableDefinition)
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.coding"
    * section ^slicing.rules = #open
    * section contains comparatorEvidence 0..1 MS and interventionEvidence 0..1 MS and totalGroup 0..1 MS and comparativeEvidence 0..1 MS
    * section[comparatorEvidence].code.coding 1..1
    * section[comparatorEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-comparator-alone "Evidence with comparator alone"
    * section[comparatorEvidence]
      * entry 0..1 
      * entry only Reference(NonComparativeEvidence)
    * section[interventionEvidence].code.coding 1..1
    * section[interventionEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-alone "Evidence with intervention alone"
    * section[interventionEvidence]
      * entry 0..1 
      * entry only Reference(NonComparativeEvidence)
    * section[totalGroup].code.coding 1..1
    * section[totalGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-total-group "Evidence with total group"
    * section[totalGroup]
      * entry 0..1 
      * entry only Reference(NonComparativeEvidence)
    * section[comparativeEvidence].code.coding 1..1
    * section[comparativeEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-vs-comparator "Evidence with intervention vs. comparator"
    * section[comparativeEvidence]
      * entry 0..1 
      * entry only Reference(ComparativeEvidence)


---

// File: input/fsh/composition/p-outcome-measure-synthesis-report.fsh

Profile: OutcomeMeasureSynthesisReport
Parent: EvidenceReport
Id: outcome-measure-synthesis-report
Description: "Profile of Composition for Evidence Based Medicine IG. The OutcomeMeasureSynthesisReport Profile is used for an evidence report including the findings for any number of outcomes in a synthesis of research studies, where there may be a unique observed study group, observed exposure group, and observed comparator group for each outcome."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#OutcomeMeasureSynthesisReport "OutcomeMeasureSynthesisReport"
* type.text = "Outcome Measure Synthesis Report"
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains results 1..1 MS
* section[results].code.coding 1..1
* section[results].code.coding = https://fevir.net/resources/CodeSystem/179423#results "Results"
* section[results]
  * section 1..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains result 1..* MS
  * section[result].code.coding 1..1
  * section[result].code.coding = https://fevir.net/resources/CodeSystem/179423#summary-of-findings-entry-for-a-single-outcome "Summary of findings entry for a single outcome"
  * section[result]
    * focus 1..1
    * focus only Reference(VariableDefinition)
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.coding"
    * section ^slicing.rules = #open
    * section contains population 0..1 MS and intervention 0..1 MS and comparator 0..1 MS and groupAssignment 0..1 and comparatorEvidence 0..1 MS and interventionEvidence 0..1 MS and comparativeEvidence 0..1 MS
    * section[population].code.coding 1..1
    * section[population].code.coding = https://fevir.net/resources/CodeSystem/179423#population "Population"
    * section[population]
      * entry only Reference(Group)
    * section[intervention].code.coding 1..1
    * section[intervention].code.coding = https://fevir.net/resources/CodeSystem/179423#intervention-group "Intervention Group"
    * section[intervention]
      * entry only Reference(ExposureGroup or ComparatorGroup)
    * section[comparator].code.coding 1..1
    * section[comparator].code.coding = https://fevir.net/resources/CodeSystem/179423#comparator-group "Comparator Group"
    * section[comparator]
      * entry only Reference(ComparatorGroup or ExposureGroup)
    * section[groupAssignment].code.coding 1..1
    * section[groupAssignment].code.coding = https://fevir.net/resources/CodeSystem/179423#GroupAssignment "GroupAssignment"
    * section[groupAssignment]
      * entry only Reference(GroupAssignment)
    * section[comparatorEvidence].code.coding 1..1
    * section[comparatorEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-comparator-alone "Result with comparator alone"
    * section[comparatorEvidence]
      * entry only Reference(NonComparativeEvidence)
    * section[interventionEvidence].code.coding 1..1
    * section[interventionEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone "Result with intervention alone"
    * section[interventionEvidence]
      * entry only Reference(NonComparativeEvidence)
    * section[comparativeEvidence].code.coding 1..1
    * section[comparativeEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-vs-comparator "Result with intervention vs. comparator"
    * section[comparativeEvidence]
      * entry only Reference(ComparativeEvidence)


---

// File: input/fsh/composition/p-participant-flow-report.fsh

Profile: ParticipantFlowReport
Parent: EvidenceTableReportPackage
Id: participant-flow-report
Description: "Profile of Composition for Evidence Based Medicine IG. The ParticipantFlowReport Profile is used for an evidence report including the counts (and proportions) for any number of participant flow measures in a research study. For example, the ParticipantFlowReport may include the data for a CONSORT Participant Flow Diagram reported with a randomized controlled trial."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#ParticipantFlowReport "ParticipantFlowReport"
* type.text = "Participant Flow Report"
* section[results]
  * section 1..*
    * focus only Reference(ParticipantFlowEvidenceVariable)
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.coding"
    * section ^slicing.rules = #open
    * section contains comparatorEvidence 0..1 MS and interventionEvidence 0..1 MS and totalGroup 0..1 MS and comparativeEvidence 0..1 MS
    * section[comparatorEvidence].code.coding 1..1
    * section[comparatorEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-comparator-alone "Evidence with comparator alone"
    * section[comparatorEvidence]
      * entry 0..1 
      * entry only Reference(ParticipantFlowEvidence)
    * section[interventionEvidence].code.coding 1..1
    * section[interventionEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-alone "Evidence with intervention alone"
    * section[interventionEvidence]
      * entry 0..1 
      * entry only Reference(ParticipantFlowEvidence)
    * section[totalGroup].code.coding 1..1
    * section[totalGroup].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-total-group "Evidence with total group"
    * section[totalGroup]
      * entry 0..1 
      * entry only Reference(ParticipantFlowEvidence)
    * section[comparativeEvidence].code.coding 1..1
    * section[comparativeEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence-with-intervention-vs-comparator "Evidence with intervention vs. comparator"
    * section[comparativeEvidence]
      * entry 0..1 
      * entry only Reference(ComparativeParticipantFlowEvidence)


---

// File: input/fsh/composition/p-recommendation.fsh

Profile: Recommendation
Parent: EvidenceReportPackage
Id: recommendation
Description: "Profile of Composition for Evidence Based Medicine IG. The Recommendation Profile is used for the composition of a recommendation (such as that from a clinical practice guideline) and may be tightly related to a RecommendationPlan Profile of PlanDefinition and a RecommendationJustification Profile of ArtifactAssessment."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#Recommendation "Recommendation"
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains recommendationSpecification 1..1 MS and evidence 0..1 MS and justification 0..1 MS and considerations 0..1 MS
* section[recommendationSpecification].code.coding 1..1
* section[recommendationSpecification].code.coding = https://fevir.net/resources/CodeSystem/179423#recommendation-specification "Recommendation Specification"
* section[recommendationSpecification]
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains recommendationStatement 0..1 MS and ratings 0..1 and population 0..1 and action 0..1 and oppositeAction 0..1
  * section[recommendationStatement].code.coding 1..1
  * section[recommendationStatement].code.coding = https://fevir.net/resources/CodeSystem/179423#recommendation-statement "Recommendation Statement"
  * section[ratings].code.coding 1..1
  * section[ratings].code.coding = https://fevir.net/resources/CodeSystem/179423#ratings "Ratings"
  * section[population].code.coding 1..1
  * section[population].code.coding = https://fevir.net/resources/CodeSystem/179423#population "Population"
  * section[action].code.coding 1..1
  * section[action].code.coding = https://fevir.net/resources/CodeSystem/179423#action "Action"
  * section[oppositeAction].code.coding 1..1
  * section[oppositeAction].code.coding = https://fevir.net/resources/CodeSystem/179423#opposite-action "Opposite Action"
* section[evidence].code.coding 1..1
* section[evidence].code.coding = https://fevir.net/resources/CodeSystem/179423#evidence "Evidence"
* section[justification].code.coding 1..1
* section[justification].code.coding = https://fevir.net/resources/CodeSystem/179423#justification "Justification"
* section[justification]
  * entry only Reference(RecommendationJustification)
* section[considerations].code.coding 1..1
* section[considerations].code.coding = https://fevir.net/resources/CodeSystem/179423#considerations "Considerations"


---

// File: input/fsh/composition/p-research-study-data-dictionary.fsh

Profile: ResearchStudyDataDictionary
Parent: EvidenceReport
Id: research-study-data-dictionary
Description: "Profile of Composition for Evidence Based Medicine IG. The ResearchStudyDataDictionary Profile is used for a code key for variable names in a dataset containing the observations collected in a research study. Each variable is included in a section.entry instance which references a VariableDefinition Profile of EvidenceVariable."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#ResearchStudyDataDictionary "ResearchStudyDataDictionary"
* type.text = "Research Study Data Dictionary"


---

// File: input/fsh/composition/p-summary-of-findings.fsh

Profile: SummaryOfFindings
Parent: EvidenceTableReportPackage
Id: summary-of-findings
Description: "Profile of Composition for Evidence Based Medicine IG. The SummaryOfFindings Profile is used for an evidence report combining Evidence and EvidenceVariable Resources, organized around VariableDefinition (Profile of EvidenceVariable), to represent the summary of findings of comparative evidence."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#SummaryOfFindings "SummaryOfFindings"
* type.text = "Summary of Findings"
* section 2..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains columnHeaders 1..1 MS and summaryOfFindings 1..1 MS
* section[columnHeaders].code.coding 1..1
* section[columnHeaders].code.coding = https://fevir.net/resources/CodeSystem/179423#column-headers "Column Headers"
* section[columnHeaders]
  * section 2..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains outcomeDefinition 1..1 MS and sampleSize 0..1 and resultWithoutTreatment 0..1 and resultWithTreatmentObserved 0..1 and resultWithTreatmentDerived 0..1 and effectEstimate 0..1 and certaintyOfEvidence 0..1 and assertion 0..1
  * section[outcomeDefinition].code.coding 1..1
  * section[outcomeDefinition].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-measure "Outcome Measure"
  * section[sampleSize].code.coding 1..1
  * section[sampleSize].code.coding = https://fevir.net/resources/CodeSystem/179423#sample-size "Sample Size"
  * section[resultWithoutTreatment].code.coding 1..1
  * section[resultWithoutTreatment].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-comparator-alone "Result with comparator alone"
  * section[resultWithTreatmentObserved].code.coding 1..1
  * section[resultWithTreatmentObserved].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone "Result with intervention alone"
  * section[resultWithTreatmentDerived].code.coding 1..1
  * section[resultWithTreatmentDerived].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone-calculated "Result with intervention alone (calculated)"
  * section[effectEstimate].code.coding 1..1
  * section[effectEstimate].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-vs-comparator "Result with intervention vs. comparator"
  * section[certaintyOfEvidence].code.coding 1..1
  * section[certaintyOfEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#certainty-of-evidence "Certainty of Evidence"
  * section[assertion].code.coding 1..1
  * section[assertion].code.coding = https://fevir.net/resources/CodeSystem/179423#assertion "Assertion"
* section[summaryOfFindings].code.coding 1..1
* section[summaryOfFindings].code.coding = https://fevir.net/resources/CodeSystem/179423#summary-of-findings "Summary of Findings"
* section[summaryOfFindings]
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #closed
  * section contains outcomeEntry 1..* MS
  * section[outcomeEntry].code.coding 1..1
  * section[outcomeEntry].code.coding = https://fevir.net/resources/CodeSystem/179423#summary-of-findings-entry-for-a-single-outcome "Summary of findings entry for a single outcome"
  * section[outcomeEntry]
    * focus only Reference(VariableDefinition)
    * section 1..*
    * section ^slicing.discriminator.type = #value
    * section ^slicing.discriminator.path = "code.coding"
    * section ^slicing.rules = #open
    * section contains outcomeDefinition 0..1 and sampleSize 0..1 and resultWithoutTreatment 0..1 and resultWithTreatmentObserved 0..1 and resultWithTreatmentDerived 0..1 and effectEstimate 0..1 and certaintyOfEvidence 0..1 and assertion 0..1
    * section[outcomeDefinition].code.coding 1..1
    * section[outcomeDefinition].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-measure "Outcome Measure"
    * section[outcomeDefinition]
      * entry 0..1 
      * entry only Reference(VariableDefinition)
    * section[sampleSize].code.coding 1..1
    * section[sampleSize].code.coding = https://fevir.net/resources/CodeSystem/179423#sample-size "Sample Size"
    * section[resultWithoutTreatment].code.coding 1..1
    * section[resultWithoutTreatment].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-comparator-alone "Result with comparator alone"
    * section[resultWithoutTreatment]
      * entry 0..1 
      * entry only Reference(ComparatorOnlyEvidence)
    * section[resultWithTreatmentObserved].code.coding 1..1
    * section[resultWithTreatmentObserved].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone "Result with intervention alone"
    * section[resultWithTreatmentObserved]
      * entry 0..1 
      * entry only Reference(InterventionOnlyEvidence)
    * section[resultWithTreatmentDerived].code.coding 1..1
    * section[resultWithTreatmentDerived].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone-calculated "Result with intervention alone (calculated)"
    * section[resultWithTreatmentDerived]
      * entry 0..2 
      * entry only Reference(ComparatorOnlyEvidence or ComparativeEvidence)
    * section[effectEstimate].code.coding 1..1
    * section[effectEstimate].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-vs-comparator "Result with intervention vs. comparator"
    * section[effectEstimate]
      * entry 0..1 
      * entry only Reference(ComparativeEvidence)
    * section[certaintyOfEvidence].code.coding 1..1
    * section[certaintyOfEvidence].code.coding = https://fevir.net/resources/CodeSystem/179423#certainty-of-evidence "Certainty of Evidence"
    * section[certaintyOfEvidence]
      * entry only Reference(ComparativeEvidence or CertaintyOfEvidence)
    * section[assertion].code.coding 1..1
    * section[assertion].code.coding = https://fevir.net/resources/CodeSystem/179423#assertion "Assertion"
    * section[assertion]
      * entry 0..1
      * entry only Reference(ComparativeEvidence)

  

---

// File: input/fsh/composition/p-summary-of-net-effect.fsh

Profile: SummaryOfNetEffect
Parent: EvidenceReportPackage
Id: summary-of-net-effect
Description: "Profile of Composition for Evidence Based Medicine IG. The SummaryOfNetEffect Profile is used for an evidence report combining ArtifactAssessment and Evidence and EvidenceVariable Resources, organized around VariableDefinition (Profile of EvidenceVariable), to represent the summary of net effect contributions of comparative evidence, adjusted for the relative importance of outcomes."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type.coding 1..1
* type.coding = https://fevir.net/resources/CodeSystem/179423#SummaryOfNetEffect "SummaryOfNetEffect"
* type.text = "Summary of Net Effect Contributions"
* section 2..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open
* section contains columnHeaders 1..1 MS and outcomeEntry 1..* MS and netEffectEstimate 0..1
* section[columnHeaders].code.coding 1..1
* section[columnHeaders].code.coding = https://fevir.net/resources/CodeSystem/179423#column-headers "Column Headers"
* section[columnHeaders]
  * section 2..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains outcomeDefinition 1..1 MS and outcomeDesirability 0..1 and relativeImportance 0..1 and resultWithoutTreatment 0..1 and resultWithTreatmentObserved 0..1 and resultWithTreatmentDerived 0..1 and effectEstimate 0..1 and netEffectContribution 1..1 MS
  * section[outcomeDefinition].code.coding 1..1
  * section[outcomeDefinition].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-measure "Outcome Measure"
  * section[outcomeDesirability].code.coding 1..1
  * section[outcomeDesirability].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-desirability "Outcome Desirability"
  * section[relativeImportance].code.coding 1..1
  * section[relativeImportance].code.coding = https://fevir.net/resources/CodeSystem/179423#relative-importance "Relative Importance"
  * section[resultWithoutTreatment].code.coding 1..1
  * section[resultWithoutTreatment].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-comparator-alone "Result with comparator alone"
  * section[resultWithTreatmentObserved].code.coding 1..1
  * section[resultWithTreatmentObserved].code.coding = http://hl7.org/fhir/evidence-report-section#Intervention-group-alone-Evidence "Evidence Results for the intervention exposure only"
  * section[resultWithTreatmentDerived].code.coding 1..1
  * section[resultWithTreatmentDerived].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone-calculated "Result with intervention alone (calculated)"
  * section[effectEstimate].code.coding 1..1
  * section[effectEstimate].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-vs-comparator "Result with intervention vs. comparator"
  * section[netEffectContribution].code.coding 1..1
  * section[netEffectContribution].code.coding = https://fevir.net/resources/CodeSystem/179423#net-effect-contribution "Net Effect Contribution"
* section[outcomeEntry].code.coding 1..1
* section[outcomeEntry].code.coding = https://fevir.net/resources/CodeSystem/179423#summary-of-net-effect-contributions-entry-for-a-single-outcome "Summary of net effect contributions entry for a single outcome"
* section[outcomeEntry]
  * focus only Reference(VariableDefinition)
  * section 1..*
  * section ^slicing.discriminator.type = #value
  * section ^slicing.discriminator.path = "code.coding"
  * section ^slicing.rules = #open
  * section contains outcomeDefinition 0..1 and outcomeDesirability 0..1 and relativeImportance 0..1 and resultWithoutTreatment 0..1 and resultWithTreatmentObserved 0..1 and resultWithTreatmentDerived 0..1 and effectEstimate 0..1 and netEffectContribution 1..1 MS
  * section[outcomeDefinition].code.coding 1..1
  * section[outcomeDefinition].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-measure "Outcome Measure"
  * section[outcomeDefinition]
    * entry 0..1 
    * entry only Reference(VariableDefinition)
  * section[outcomeDesirability].code.coding 1..1
  * section[outcomeDesirability].code.coding = https://fevir.net/resources/CodeSystem/179423#outcome-desirability "Outcome Desirability"
  * section[outcomeDesirability]
    * entry 0..1 
    * entry only Reference(OutcomeImportance)
  * section[relativeImportance].code.coding 1..1
  * section[relativeImportance].code.coding = https://fevir.net/resources/CodeSystem/179423#relative-importance "Relative Importance"
  * section[relativeImportance]
    * entry 0..1 
    * entry only Reference(OutcomeImportance)
  * section[resultWithoutTreatment].code.coding 1..1
  * section[resultWithoutTreatment].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-comparator-alone "Result with comparator alone"
  * section[resultWithoutTreatment]
    * entry 0..1 
    * entry only Reference(ComparatorOnlyEvidence)
  * section[resultWithTreatmentObserved].code.coding 1..1
  * section[resultWithTreatmentObserved].code.coding = http://hl7.org/fhir/evidence-report-section#Intervention-group-alone-Evidence "Evidence Results for the intervention exposure only"
  * section[resultWithTreatmentObserved]
    * entry 0..1 
    * entry only Reference(InterventionOnlyEvidence)
  * section[resultWithTreatmentDerived].code.coding 1..1
  * section[resultWithTreatmentDerived].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-alone-calculated "Result with intervention alone (calculated)"
  * section[resultWithTreatmentDerived]
    * entry 0..2 
    * entry only Reference(ComparatorOnlyEvidence or ComparativeEvidence)
  * section[effectEstimate].code.coding 1..1
  * section[effectEstimate].code.coding = https://fevir.net/resources/CodeSystem/179423#result-with-intervention-vs-comparator "Result with intervention vs. comparator"
  * section[effectEstimate]
    * entry 0..1 
    * entry only Reference(ComparativeEvidence)
  * section[netEffectContribution].code.coding 1..1
  * section[netEffectContribution].code.coding = https://fevir.net/resources/CodeSystem/179423#net-effect-contribution "Net Effect Contribution"
  * section[netEffectContribution]
    * entry 0..1 
    * entry only Reference(NetEffectContribution)
* section[netEffectEstimate].code.coding 1..1
* section[netEffectEstimate].code.coding = https://fevir.net/resources/CodeSystem/179423#net-effect-estimate "Net Effect Estimate"
* section[netEffectEstimate]
  * entry 0..1 
  * entry only Reference(NetEffectEstimate)
 

---

// File: input/fsh/composition/vs-evidence-report-contributor-role.fsh

ValueSet: EvidenceReportContributorRole
Id: evidence-report-contributor-role
Title: "Evidence Report Contributor Role Value Set"
Description: "The role in influencing the content of the Resource."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^experimental = false
* include codes from system http://hl7.org/fhir/contributor-role
* include https://fevir.net/resources/CodeSystem/179423#recorder "Recorder"

---

// File: input/fsh/evidence-variable/ext-evidence-variable-classifier.fsh

Extension: EvidenceVariableClassifier
Id: evidence-variable-classifier
Description: "Classification of the EvidenceVariable."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] only CodeableConcept
* . ^short = "Classification"
* . ^definition = "Classification of the variable."


---

// File: input/fsh/evidence-variable/ext-evidence-variable-conditional.fsh

Extension: EvidenceVariableConditional
Id: evidence-variable-conditional
Description: "The context in which the EvidenceVariable is assessed."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] only Expression
* . ^short = "When the variable is observed"
* . ^definition = "The context, situation, or parameters within which the variable is observed."


---

// File: input/fsh/evidence-variable/ext-evidence-variable-constraint.fsh

Extension: EvidenceVariableConstraint
Id: evidence-variable-constraint
Description: "Limit on acceptability of data used to express values of the variable."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] 0..0
* . ^short = "Limit on acceptability of data value"
* . ^definition = "Limit on acceptability of data used to express values of the variable."
* extension contains conditional 0..1 and minimumQuantity 0..1 and maximumQuantity 0..1 and earliestDateTime 0..1 and latestDateTime 0..1 and minimumStringLength 0..1 and maximumStringLength 0..1 and code 0..1 and expression 0..1 and expectedValueSet 0..1 and expectedUnitsValueSet 0..1 and anyValueAllowed 0..1
* extension[conditional].value[x] only CodeableConcept
  * ^short = "When this constraint applies"
  * ^definition = "When this constraint applies."
* extension[minimumQuantity].value[x] only Quantity
  * ^short = "The lowest permissible value of the variable"
  * ^definition = "The lowest permissible value of the variable, used with variables that have a number-based datatype (with or without units)."
* extension[maximumQuantity].value[x] only Quantity
  * ^short = "The highest permissible value of the variable"
  * ^definition = "The highest permissible value of the variable, used with variables that have a number-based datatype (with or without units)."
* extension[earliestDateTime].value[x] only dateTime
  * ^short = "The earliest permissible value of the variable"
  * ^definition = "The earliest permissible value of the variable, used with variables that have a date/time-based datatype."
* extension[latestDateTime].value[x] only dateTime
  * ^short = "The latest permissible value of the variable"
  * ^definition = "The latest permissible value of the variable, used with variables that have a date/time-based datatype."
* extension[minimumStringLength].value[x] only integer
  * ^short = "The lowest number of characters allowed for a value of the variable"
  * ^definition = "The lowest number of characters allowed for a value of the variable, used with variables that have a string-based datatype."
* extension[maximumStringLength].value[x] only positiveInt
  * ^short = "The highest number of characters allowed for a value of the variable"
  * ^definition = "The highest number of characters allowed for a value of the variable, used with variables that have a string-based datatype."
* extension[code].value[x] only CodeableConcept
  * ^short = "Rule for acceptable data values"
  * ^definition = "A rule, such as a format or other expectation, for the data values."
* extension[expression].value[x] only Expression
  * ^short = "Rule for acceptable data values, as an Expression"
  * ^definition = "A rule, such as a format or other expectation, for the data values, expressed as an Expression."
* extension[expectedValueSet].value[x] only Reference(ValueSet)
  * ^short = "List of anticipated values used to express value of the variable"
  * ^definition = "List of anticipated values used to express value of the variable, used with variables that have a codeable concept-based datatype."
* extension[expectedUnitsValueSet].value[x] only Reference(ValueSet)
  * ^short = "List of anticipated values used to express units for the value of the variable"
  * ^definition = "List of anticipated values used to express units for the value of the variable, used with variables that have a Quantity-based datatype."
* extension[anyValueAllowed].value[x] only boolean
  * ^short = "Permissibility of unanticipated value used to express value of the variable"
  * ^definition = "Whether the value expressed for a variable is allowed to not be restricted to the expected value set."



---

// File: input/fsh/evidence-variable/ext-evidence-variable-data-cleaning.fsh

Extension: EvidenceVariableDataCleaning
Id: evidence-variable-data-cleaning
Description: "A method or transformation applied for data that does not match required patterns."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] only CodeableConcept
* . ^short = "How erroneous data is processed"
* . ^definition = "A method or transformation applied for data that does not match required patterns."

---

// File: input/fsh/evidence-variable/ext-evidence-variable-data-storage.fsh

Extension: EvidenceVariableDataStorage
Id: evidence-variable-data-storage
Description: "How the data element is organized and where the data element (expressing the value of the variable) is found in the dataset."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] 0..0
* . ^short = "How and where the data element (value of the variable) is found"
* . ^definition = "How the data element is organized and where the data element (expressing the value of the variable) is found in the dataset."
* extension contains datatype 0..1 and path 0..1
* extension[datatype].value[x] only CodeableConcept
  * ^short = "Type of data used to express value of the variable"
  * ^definition = "The type of data used to express values of the variable."
* extension[path].value[x] only string
  * ^short = "How to find the data element in the dataset"
  * ^definition = "The mapping (order of elements) to reach the element containing the  data element in the dataset."


---

// File: input/fsh/evidence-variable/ext-evidence-variable-missing-data.fsh

Extension: EvidenceVariableMissingData
Id: evidence-variable-missing-data
Description: "A method or transformation applied for missing data."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] only CodeableConcept
* . ^short = "How missing data is interpreted"
* . ^definition = "A method or transformation applied for missing data."

---

// File: input/fsh/evidence-variable/ext-evidence-variable-period.fsh

Extension: EvidenceVariablePeriod
Id: evidence-variable-period
Description: "Date(s) and time(s) when the variable is observed."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "EvidenceVariable"
* value[x] only Period
* . ^short = "Date(s) and time(s) when the variable is observed"
* . ^definition = "When the variable is observed in relation to calendar dates and times."


---

// File: input/fsh/evidence-variable/p-dichotomous-patient-important-outcome.fsh

Profile: DichotomousPatientImportantOutcome
Parent: VariableDefinition
Id: dichotomous-patient-important-outcome 
Description: "Profile of EvidenceVariable for Evidence Based Medicine IG. The DichotomousPatientImportantOutcome Profile is used to provide a common variable definition for the 'intended' variable in the role of 'outcome' in Evidence Resources, to allow mapping evidence with different observaed variables that relate to the same intended outcome."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* definition.concept 1..1
* definition.reference 0..0
* actual = false
* handling = #dichotomous



---

// File: input/fsh/evidence-variable/p-group-assignment.fsh

Profile: GroupAssignment
Parent: VariableDefinition
Id: group-assignment
Description: "Profile of EvidenceVariable for Evidence Based Medicine IG. The GroupAssignment Profile is used to classify an EvidenceVariable as an exposure managed as a categorical variable. The variable definitions are found in the category element instead of the definition element."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* definition.concept.coding 1..1
* definition.concept.coding = https://fevir.net/resources/CodeSystem/179423#defined-in-handling-and-category "Defined in handling and category elements"
* category 2..*
  * name 1..1

---

// File: input/fsh/evidence-variable/p-participant-flow-evidence-variable.fsh

Profile: ParticipantFlowEvidenceVariable
Parent: VariableDefinition
Id: participant-flow-evidence-variable
Description: "Profile of EvidenceVariable for Evidence Based Medicine IG. The ParticipantFlowEvidenceVariable Profile is used to describe outcome measures for completion and reasons for non-completion of participation in a research study."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* handling = #dichotomous


---

// File: input/fsh/evidence-variable/p-variable-definition.fsh

Profile: VariableDefinition
Parent: EvidenceVariable
Id: variable-definition
Description: "Profile of EvidenceVariable for Evidence Based Medicine IG. The VariableDefinition Profile uses a CodeableReference Datatype to provide a concept (e.g. coding in a code system) and/or a reference to a Group Resource for structured data to define the variable." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains EvidenceVariableClassifier named classifier 0..*
* extension contains EvidenceVariableConditional named conditional 0..1
* extension contains EvidenceVariableDataStorage named dataStorage 0..*
* extension contains CharacteristicTiming named timing 0..1
* extension contains EvidenceVariablePeriod named period 0..1
* extension contains EvidenceVariableConstraint named constraint 0..*
* extension contains EvidenceVariableMissingData named missingDataMeaning 0..1
* extension contains EvidenceVariableDataCleaning named unacceptableDataHandling 0..*
* handling 1..1

---

// File: input/fsh/evidence/ext-statistic-model-expression.fsh

Extension: StatisticModelExpression
Id: statistic-model-expression
Description: "An expression that defines the statistical analysis."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "Evidence.statistic"
* value[x] only Expression
* . ^short = "The formula for analysis"
* . ^definition = "The formula for analysis."


---

// File: input/fsh/evidence/ext-statistic-model-include-if.fsh

Extension: StatisticModelIncludeIf
Id: statistic-model-include-if
Description: "The condition under which the variable (or modelCharacteristic) will be included."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context[0].type = #element
* ^context[0].expression = "Evidence.statistic.modelCharacteristic"
* ^context[1].type = #element
* ^context[1].expression = "Evidence.statistic.modelCharacteristic.variable"
* value[x] 0..0
* . ^short = "Condition upon which to include the variable or model characteristic in the analysis"
* . ^definition = "The condition upon which to include the variable or model characteristic in the analysis."
* extension contains attribute 1..1 and value 1..1
* extension[attribute].value[x] only CodeableConcept
  * ^short = "Type of condition"
  * ^definition = "Type of condition."
* extension[value].value[x] only CodeableConcept or Quantity or Range or Expression or boolean
  * ^short = "Value of condition"
  * ^definition = "Value of condition."

---

// File: input/fsh/evidence/p-baseline-measure-evidence.fsh

Profile: BaselineMeasureEvidence
Parent: NonComparativeEvidence
Id: baseline-measure-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The BaselineMeasureEvidence Profile is used for evidence with a measured variable (with the role of outcome for this Evidence) that is considered an independent variable with respect to the outcome of an exposure or intervention in a study." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition
  * ^comment = "The Baseline Measure (or independent variable) has variableRole of outcome."



---

// File: input/fsh/evidence/p-comparative-baseline-measure-evidence.fsh

Profile: ComparativeBaselineMeasureEvidence
Parent: ComparativeEvidence
Id: comparative-baseline-measure-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The ComparativeBaselineMeasureEvidence Profile is used for comparative evidence with a measured variable (with the role of outcome for this Evidence) that is considered an independent variable with respect to the outcome of an exposure or intervention in a study." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition
  * ^comment = "The Baseline Measure (or independent variable) has variableRole of outcome."



---

// File: input/fsh/evidence/p-comparative-evidence.fsh

Profile: ComparativeEvidence
Parent: Evidence
Id: comparative-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The ComparativeEvidence Profile is used for evidence with a measured variable that is considered the outcome of an exposure or intervention, and an exposure variable with two or more categories that are being compared." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition 3..*
  * ^comment = "To report comparative evidence for a research question defined by Population, Intervention, Comparator, and Outcome (PICO), one would use three variableDefinition instances: the Population has variableRole of population, the Intervention and Comparator will be expressed as category values for a GroupAssignment EvidenceVariable with the variableRole of exposure, and the Outcome has variableRole of outcome. In some types of Comparative Evidence, where the groups being compared are not from the same Population (and thus not a PICO-style research question), the GroupAssignment EvidenceVariable may have the variableRole of exposure and express the populations being compared as categories, and a combination of these categories can be described in the variableDefinition with variableRole of population. This approach may be used for example to compare cats and dogs."
* variableDefinition ^slicing.discriminator.type = #value
* variableDefinition ^slicing.discriminator.path = "variableRole"
* variableDefinition ^slicing.rules = #open
* variableDefinition contains population 1..* and exposure 1..1 and outcome 1..* MS
* variableDefinition[population]
  * variableRole = #population
  * observed only Reference(StudyGroup or ExposureGroup or ComparatorGroup or MetaanalysisStudyGroup)
  * intended only Reference(Group)
* variableDefinition[exposure]
  * variableRole = #exposure
  * comparatorCategory 1..1
  * observed only Reference(GroupAssignment)
  * intended only Reference(VariableDefinition)
* variableDefinition[outcome]
  * variableRole = #outcome
  * comparatorCategory 0..0
  * observed only Reference(VariableDefinition)
  * intended only Reference(EvidenceVariable)

---

// File: input/fsh/evidence/p-comparative-participant-flow-evidence.fsh

Profile: ComparativeParticipantFlowEvidence
Parent: ComparativeEvidence
Id: comparative-participant-flow-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The ComparativeParticipantFlowEvidence Profile is used for comparisons of counts of completion and reasons for non-completion of participation in a research study." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition
  * ^comment = "The ParticipantFlowEvidenceVariable has variableRole of outcome."
  * intended 0..0
  * directnessMatch 0..0
* variableDefinition[outcome]
  * observed only Reference(ParticipantFlowEvidenceVariable)



---

// File: input/fsh/evidence/p-comparator-only-evidence.fsh

Profile: ComparatorOnlyEvidence
Parent: NonComparativeEvidence
Id: comparator-only-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The ComparatorOnlyEvidence Profile is used for evidence with a measured variable that is considered the outcome of an exposure or intervention, and a population that has an exposure with a categorical value that is the reference category for the exposure in a ComparativeEvidence Profile. The ComparatorOnlyEvidence describes the evidence for the comparator group." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition
  * ^comment = "To report comparator-only evidence for a research question defined by Population, Intervention, Comparator, and Outcome (PICO), one would use two variableDefinition instances. A group defined by a combination of Population and Comparator has the variableRole of population, the Intervention is not included in the ComparatorOnlyEvidence, and the Outcome has variableRole of outcome."
* variableDefinition[population]
  * observed only Reference(ExposureGroup or ComparatorGroup or MetaanalysisStudyGroup)


---

// File: input/fsh/evidence/p-endpoint-analysis-plan.fsh

Profile: EndpointAnalysisPlan
Parent: StatisticModel
Id: endpoint-analysis-plan
Description: "Profile of Evidence for Evidence Based Medicine IG. The EndpointAnalysisPlan Profile is used for specification of the statistical model for analysis of a single endpoint." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* statistic.modelCharacteristic 1..*
  * intended = true


---

// File: input/fsh/evidence/p-evidence-synthesis-evidence.fsh

Profile: EvidenceSynthesisEvidence
Parent: Evidence
Id: evidence-synthesis-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The EvidenceSynthesisEvidence Profile is used for evidence that is combined from two or more studies, explicitly expressing the method by which evidence was synthesized." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* synthesisType 1..1

---

// File: input/fsh/evidence/p-intervention-only-evidence.fsh

Profile: InterventionOnlyEvidence
Parent: NonComparativeEvidence
Id: intervention-only-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The InterventionOnlyEvidence Profile is used for evidence with a measured variable that is considered the outcome of an exposure or intervention. The InterventionOnlyEvidence describes the evidence for the intervention group." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition
  * ^comment = "To report intervention-only evidence for a research question defined by Population, Intervention, Comparator, and Outcome (PICO), one would use two variableDefinition instances. A group defined by a combination of Population and Intervention has the variableRole of population, the Comparator is not included in the InterventionOnlyEvidence, and the Outcome has variableRole of outcome."
* variableDefinition[population]
  * observed only Reference(ExposureGroup or MetaanalysisStudyGroup)

---

// File: input/fsh/evidence/p-net-effect-contribution.fsh

Profile: NetEffectContribution
Parent: ComparativeEvidence
Id: net-effect-contribution
Description: "Profile of Evidence for Evidence Based Medicine IG. The NetEffectContribution Profile is used for evidence in which the effect estimates, expressed as risk differences, is multiplied by a relative importance rating of the outcomes."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* relatedArtifact 1..*
* relatedArtifact ^slicing.discriminator.type = #value
* relatedArtifact ^slicing.discriminator.path = "type"
* relatedArtifact ^slicing.rules = #open
* relatedArtifact contains amendedWith 1..* MS and citeAs 0..1
* relatedArtifact[amendedWith].type = #amended-with
* relatedArtifact[amendedWith]
  * resourceReference only Reference(OutcomeImportance)
* relatedArtifact[citeAs].type = #cite-as
* variableDefinition ^slicing.discriminator.type = #value
* variableDefinition ^slicing.discriminator.path = "variableRole"
* variableDefinition ^slicing.rules = #open
* variableDefinition contains covariate 1..*
* variableDefinition[covariate]
  * variableRole = #covariate
  * roleSubtype.text = "Relative Value Multiplier"
  * observed.display = "Relative Importance Multiplier"
  * intended 0..0
* statistic 1..*
* statistic ^slicing.discriminator.type = #value
* statistic ^slicing.discriminator.path = "statisticType.coding"
* statistic ^slicing.rules = #open
* statistic contains netEffect 1..1 MS
* statistic[netEffect].statisticType.coding 1..1
* statistic[netEffect].statisticType.coding = https://fevir.net/resources/CodeSystem/181513#STATO:0000424 "Risk Difference"
* statistic[netEffect]
  * attributeEstimate ^slicing.discriminator.type = #value
  * attributeEstimate ^slicing.discriminator.path = "type.coding"
  * attributeEstimate ^slicing.rules = #open
  * attributeEstimate contains confidenceInterval 1..1 MS
  * attributeEstimate[confidenceInterval].type.coding 1..1
  * attributeEstimate[confidenceInterval].type.coding = https://fevir.net/resources/CodeSystem/181513#STATO:0000196 "confidence interval"
  * modelCharacteristic 1..*
  * modelCharacteristic ^slicing.discriminator.type = #value
  * modelCharacteristic ^slicing.discriminator.path = "code.coding"
  * modelCharacteristic ^slicing.rules = #open
  * modelCharacteristic contains netEffectContributionAnalysis 1..1 MS
  * modelCharacteristic[netEffectContributionAnalysis].code.coding 1..1
  * modelCharacteristic[netEffectContributionAnalysis].code.coding = https://fevir.net/resources/CodeSystem/181513#TBD:net-effect-contribution-analysis "Net effect contribution analysis"
  

---

// File: input/fsh/evidence/p-net-effect-estimate.fsh

Profile: NetEffectEstimate
Parent: Evidence
Id: net-effect-estimate
Description: "Profile of Evidence for Evidence Based Medicine IG. The NetEffectEstimate Profile is used for evidence in which the observed data is net effect contributions (effect estimates expressed as risk differences, multiplied by relative importance ratings of outcomes)."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition 2..*
* variableDefinition ^slicing.discriminator.type = #value
* variableDefinition ^slicing.discriminator.path = "variableRole"
* variableDefinition ^slicing.rules = #open
* variableDefinition contains population 1..1 and exposure 1..1
* variableDefinition[population]
  * variableRole = #population
  * observed only Reference(NetEffectContributions)
  * intended 0..0
* variableDefinition[exposure]
  * variableRole = #exposure
  * comparatorCategory 1..1
  * observed only Reference(GroupAssignment)
  * intended 0..0
* statistic 1..*
* statistic ^slicing.discriminator.type = #value
* statistic ^slicing.discriminator.path = "statisticType.coding"
* statistic ^slicing.rules = #open
* statistic contains netEffect 1..1 MS
* statistic[netEffect].statisticType.coding 1..1
* statistic[netEffect].statisticType.coding = https://fevir.net/resources/CodeSystem/181513#STATO:0000424 "Risk Difference"
* statistic[netEffect]
  * attributeEstimate ^slicing.discriminator.type = #value
  * attributeEstimate ^slicing.discriminator.path = "type.coding"
  * attributeEstimate ^slicing.rules = #open
  * attributeEstimate contains confidenceInterval 1..1 MS
  * attributeEstimate[confidenceInterval].type.coding 1..1
  * attributeEstimate[confidenceInterval].type.coding = https://fevir.net/resources/CodeSystem/181513#STATO:0000196 "confidence interval"
  * modelCharacteristic 1..*
  * modelCharacteristic ^slicing.discriminator.type = #value
  * modelCharacteristic ^slicing.discriminator.path = "code.coding"
  * modelCharacteristic ^slicing.rules = #open
  * modelCharacteristic contains netEffectAnalysis 1..1 MS
  * modelCharacteristic[netEffectAnalysis].code.coding 1..1
  * modelCharacteristic[netEffectAnalysis].code.coding = https://fevir.net/resources/CodeSystem/181513#TBD:net-effect-analysis "Net effect analysis"
  

---

// File: input/fsh/evidence/p-non-comparative-evidence.fsh

Profile: NonComparativeEvidence
Parent: Evidence
Id: non-comparative-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The NonComparativeEvidence Profile is used for evidence about a single group with no comparisons between groups." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition 2..*
* variableDefinition ^slicing.discriminator.type = #value
* variableDefinition ^slicing.discriminator.path = "variableRole"
* variableDefinition ^slicing.rules = #open
* variableDefinition contains population 1..* MS and outcome 1..* MS
* variableDefinition[population]
  * variableRole = #population
  * observed only Reference(StudyGroup or ExposureGroup or ComparatorGroup or MetaanalysisStudyGroup)
  * intended only Reference(Group)
* variableDefinition[outcome]
  * variableRole = #outcome
  * observed only Reference(VariableDefinition)
  * intended only Reference(EvidenceVariable)


---

// File: input/fsh/evidence/p-participant-flow-evidence.fsh

Profile: ParticipantFlowEvidence
Parent: NonComparativeEvidence
Id: participant-flow-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The ParticipantFlowEvidence Profile is used for counts of completion and reasons for non-completion of participation in a research study." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* variableDefinition 2..*
  * ^comment = "The ParticipantFlowEvidenceVariable has variableRole of outcome."
  * intended 0..0
  * directnessMatch 0..0
* variableDefinition[outcome]
  * observed only Reference(ParticipantFlowEvidenceVariable)
* statistic.numberAffected 0..0
* statistic.modelCharacteristic 0..0


---

// File: input/fsh/evidence/p-single-study-evidence.fsh

Profile: SingleStudyEvidence
Parent: Evidence
Id: single-study-evidence
Description: "Profile of Evidence for Evidence Based Medicine IG. The SingleStudyEvidence Profile is used for evidence from single studies, explicitly expressing that no studies were synthesized." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* synthesisType 1..1
* synthesisType = $cs-synthesis-type#NotApplicable "not applicable"

---

// File: input/fsh/evidence/p-statistic-model.fsh

Profile: StatisticModel
Parent: Evidence
Id: statistic-model
Description: "Profile of Evidence for Evidence Based Medicine IG. The StatisticModel Profile is used to add extensions to Evidence for complex expressions for the statistical model or endpoint analysis plan." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* statistic
  * extension contains StatisticModelExpression named modelExpression 0..1
* statistic.modelCharacteristic
  * extension contains StatisticModelIncludeIf named includeIf 0..1
* statistic.modelCharacteristic.variable
  * extension contains StatisticModelIncludeIf named includeIf 0..1



---

// File: input/fsh/evidence/vs-evidence-variable-role-subtype.fsh

ValueSet: EvidenceVariableRoleSubtype
Id: evidence-variable-role-subtype
Title: "Evidence Variable Role Subtype Value Set"
Description: "The sub-role that the variable plays."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^experimental = false
* include codes from system http://terminology.hl7.org/CodeSystem/variable-role

---

// File: input/fsh/group/ext-characteristic-timing.fsh

Extension: CharacteristicTiming
Id: characteristic-timing
Description: "Timing in which the characteristic is determined or action is taken."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context[0].type = #element
* ^context[0].expression = "PlanDefinition.action"
* ^context[1].type = #element
* ^context[1].expression = "ActivityDefinition"
* ^context[2].type = #element
* ^context[2].expression = "EvidenceVariable"
* value[x] 0..0
* . ^short = "Timing in which the characteristic is determined or action is taken"
* . ^definition = "Timing in which the characteristic is determined or action is taken."
* extension contains contextReference 0..1 and contextDefinition 0..1 and contextPath 0..1 and contextCode 0..1 and offset 0..1 and text 0..1
* extension[contextReference].value[x] only Reference
  * ^short = "The specific event occurrence or resource context used as a base point (reference point) in time"
  * ^definition = "The specific event occurrence or resource context used as a base point (reference point) in time. This establishes the context in which the path is evaluated."
* extension[contextDefinition].value[x] only canonical
  * ^short = "The type of event used as a base point"
  * ^definition = "The type of event used as a base point. Instances of this definition will establish the context for evaluating the path to determine the base time for the offset."
* extension[contextPath].value[x] only string
  * ^short = "Path to the element defining the point in time"
  * ^definition = "Path to the element defining the point in time. Any valid FHIRPath expression."
* extension[contextCode].value[x] only CodeableConcept
  * ^short = "Coded representation of the event used as a base point (reference point) in time"
  * ^definition = "Coded representation of the event used as a base point (reference point) in time."
* extension[offset].value[x] only Duration or Range
  * ^short = "An offset or offset range before (negative values) or after (positive values) the event"
  * ^definition = "An offset or offset range before (negative values) or after (positive values) the event. Range is limited to time-valued quantities (Durations)."
* extension[text].value[x] only string
  * ^short = "Free-text description"
  * ^definition = "Free-text (human-readable) description." 

---

// File: input/fsh/group/p-cohort-definition.fsh

Profile: CohortDefinition
Parent: GroupR6
Id: cohort-definition
Description: "Profile of Group for Evidence Based Medicine IG. The CohortDefinition Profile is used to provide a definitional representation of a Group. The type element is required. (Alternatively, the ConceptualCohortDefinition Profile uses membership = conceptual and allows avoiding the required use of type.)"
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* membership = #definitional
* quantity 0..0
* member 0..0 


---

// File: input/fsh/group/p-comparative-evidence-report-subject.fsh

Profile: ComparativeEvidenceReportSubject
Parent: EvidenceReportSubject
Id: comparative-evidence-report-subject
Description: "Profile of Group for Evidence Based Medicine IG. The EvidenceReportSubject Profile is used to define the subject of an EvidenceReport."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* characteristic[population] 1..1
* characteristic[population].code.text = "Population"
* characteristic[population].valueReference only Reference(StudyGroup)
* characteristic[population].exclude = false
* characteristic[intervention] 1..1
* characteristic[intervention].code.text = "Intervention or Exposure"
* characteristic[intervention].valueReference only Reference(VariableDefinition or ExposureDefinition)
* characteristic[intervention].exclude = false
* characteristic[comparator] 1..1
* characteristic[comparator].code.text = "Comparator"
* characteristic[comparator].valueReference only Reference(VariableDefinition or ExposureDefinition or ComparatorDefinition)
* characteristic[comparator].exclude = false
* characteristic[outcomes] 1..1
* characteristic[outcomes].code.text = "Outcomes"
* characteristic[outcomes].valueReference only Reference(OutcomeList)
* characteristic[outcomes].exclude = false

---

// File: input/fsh/group/p-comparator-definition.fsh

Profile: ComparatorDefinition
Parent: ConceptualCohortDefinition
Id: comparator-definition
Description: "Profile of Group for Evidence Based Medicine IG. The ComparatorDefinition Profile is used to express the criteria defining a reference group for comparison."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-comparator-group.fsh

Profile: ComparatorGroup
Parent: GroupR6
Id: comparator-group
Description: "Profile of Group for Evidence Based Medicine IG. The ComparatorGroup Profile is used to represent a group (definitional or enumerated) used as a comparator in a ComparativeEvidence."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-conceptual-cohort-definition.fsh

Profile: ConceptualCohortDefinition
Parent: GroupR6
Id: conceptual-cohort-definition
Description: "Profile of Group for Evidence Based Medicine IG. The ConceptualCohortDefinition Profile is used to provide a conceptual representation of a Group. The membership = conceptual allows avoiding the required use of type."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* membership = #conceptual
* quantity 0..0
* member 0..0 


---

// File: input/fsh/group/p-evidence-report-subject.fsh

Profile: EvidenceReportSubject
Parent: ConceptualCohortDefinition
Id: evidence-report-subject
Description: "Profile of Group for Evidence Based Medicine IG. The EvidenceReportSubject Profile is used to define the subject of an EvidenceReport."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* combinationMethod = #all-of
* characteristic ^slicing.discriminator.type = #value
* characteristic ^slicing.discriminator.path = "code.text"
* characteristic ^slicing.rules = #open
* characteristic contains population 0..1 MS and intervention 0..1 MS and comparator 0..1 MS and outcomes 0..1 MS
* characteristic[population].code.text = "Population"
* characteristic[population].valueReference only Reference(Group)
* characteristic[population].exclude = false
* characteristic[intervention].code.text = "Intervention or Exposure"
* characteristic[intervention].valueReference only Reference(EvidenceVariable or Group)
* characteristic[intervention].exclude = false
* characteristic[comparator].code.text = "Comparator"
* characteristic[comparator].valueReference only Reference(EvidenceVariable or Group)
* characteristic[comparator].exclude = false
* characteristic[outcomes].code.text = "Outcomes"
* characteristic[outcomes].valueReference only Reference(OutcomeList)
* characteristic[outcomes].exclude = false

---

// File: input/fsh/group/p-exposure-definition.fsh

Profile: ExposureDefinition
Parent: ConceptualCohortDefinition
Id: exposure-definition
Description: "Profile of Group for Evidence Based Medicine IG. The ExposureDefinition Profile is used to express the criteria defining an evidence variable (or categorical value for a variable) in the role of exposure."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-exposure-group.fsh

Profile: ExposureGroup
Parent: GroupR6
Id: exposure-group
Description: "Profile of Group for Evidence Based Medicine IG. The ExposureGroup Profile is used to represent a group (definitional or enumerated) used in a ComparativeEvidence."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-group-r6.fsh

Profile: GroupR6
Parent: Group
Id: group-r6
Description: "Profile of Group for Evidence Based Medicine IG. The GroupR6 Profile is used to add extensions to Group." 
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-author named author 0..*
* extension contains $ext-relatedArtifact named relatedArtifact 0..*
* extension contains $ext-characteristic-expression named characteristicExpression 0..1

  
  

---

// File: input/fsh/group/p-metaanalysis-eligibility-criteria.fsh

Profile: MetaanalysisEligibilityCriteria
Parent: ConceptualCohortDefinition
Id: metaanalysis-eligibility-criteria
Description: "Profile of Group for Evidence Based Medicine IG. The MetaanalysisEligibilityCriteria Profile is used to describe inclusion and exclusion criteria for a meta-analysis."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-metaanalysis-outcome-definition.fsh

Profile: MetaanalysisOutcomeDefinition
Parent: ConceptualCohortDefinition
Id: metaanalysis-outcome-definition
Description: "Profile of Group for Evidence Based Medicine IG. The MetaanalysisOutcomeDefinition Profile is used to express the criteria defining an evidence variable in the role of outcome where the population (dataset) is a set of Evidence Resources. Characteristics define the characteristics of the Evidence Resource to be eligible to be used for this outcome."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-metaanalysis-study-group.fsh

Profile: MetaanalysisStudyGroup
Parent: GroupR6
Id: metaanalysis-study-group
Description: "Profile of Group for Evidence Based Medicine IG. The MetaanalysisStudyGroup Profile is used to represent an enumerated group of participants in a meta-analysis where the participants are Evidence Resources."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* code.text = "Evidence"
* characteristic 1..1
  * code.text = "Member of"
  * valueReference only Reference(EvidenceList)


---

// File: input/fsh/group/p-net-effect-contributions.fsh

Profile: NetEffectContributions
Parent: GroupR6
Id: net-effect-contributions
Description: "Profile of Group for Evidence Based Medicine IG. The NetEffectContributions Profile is used to represent an enumerated group of participants in a net effect analysis where the participants are Evidence Resources (NetEffectContribution Profile)."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* code.text = "Net Effect Contribution"
* characteristic 1..1
  * code.text = "Member of"
  * valueReference only Reference(NetEffectContributionList)


---

// File: input/fsh/group/p-outcome-definition.fsh

Profile: OutcomeDefinition
Parent: ConceptualCohortDefinition
Id: outcome-definition
Description: "Profile of Group for Evidence Based Medicine IG. The OutcomeDefinition Profile is used to express the criteria defining an evidence variable (or categorical value for a variable) in the role of outcome."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-recommendation-eligibility-criteria.fsh

Profile: RecommendationEligibilityCriteria
Parent: CohortDefinition
Id: recommendation-eligibility-criteria
Description: "Profile of Group for Evidence Based Medicine IG. The RecommendationEligibilityCriteria Profile is used to express the criteria defining a group for whom a recommendation applies."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-search-strategy.fsh

Profile: SearchStrategy
Parent: ConceptualCohortDefinition
Id: search-strategy
Description: "Profile of Group for Evidence Based Medicine IG. The SearchStrategy Profile is used to express the criteria defining a search strategy, such as for a systematic review."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* characteristic.code from $ebm-search-strategy-characteristic-code (extensible)


---

// File: input/fsh/group/p-study-eligibility-criteria.fsh

Profile: StudyEligibilityCriteria
Parent: CohortDefinition
Id: study-eligibility-criteria
Description: "Profile of Group for Evidence Based Medicine IG. The StudyEligibilityCriteria Profile is used to describe inclusion and exclusion criteria for a clinical trial or other research study."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/group/p-study-group.fsh

Profile: StudyGroup
Parent: GroupR6
Id: study-group
Description: "Profile of Group for Evidence Based Medicine IG. The StudyGroup Profile is used to represent an enumerated group of participants in a research study."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* membership = #enumerated

---

// File: input/fsh/group/p-systematic-review-eligibility-criteria.fsh

Profile: SystematicReviewEligibilityCriteria
Parent: ConceptualCohortDefinition
Id: systematic-review-eligibility-criteria
Description: "Profile of Group for Evidence Based Medicine IG. The SystematicReviewEligibilityCriteria Profile is used to describe inclusion and exclusion criteria for a systematic review."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft


---

// File: input/fsh/library/p-search-results.fsh

Profile: SearchResults
Parent: Library
Id: search-results
Description: "Profile of Library for Evidence Based Medicine IG. The SearchResults Profile is used to represent search results, such as for a systematic review."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type = http://terminology.hl7.org/CodeSystem/library-type#asset-collection "Asset Collection"
* subjectReference only Reference(SearchStrategy)
* topic 0..0

---

// File: input/fsh/library/p-systematic-review-excluded-studies.fsh

Profile: SystematicReviewExcludedStudies
Parent: Library
Id: systematic-review-excluded-studies
Description: "Profile of Library for Evidence Based Medicine IG. The SystematicReviewExcludedStudies Profile is used to represent the subset of search results of a systematic review which did not meet the inclusion criteria."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type = http://terminology.hl7.org/CodeSystem/library-type#asset-collection "Asset Collection"
* subjectReference only Reference(SystematicReviewEligibilityCriteria)
* topic 0..0

---

// File: input/fsh/library/p-systematic-review-included-studies.fsh

Profile: SystematicReviewIncludedStudies
Parent: Library
Id: systematic-review-included-studies
Description: "Profile of Library for Evidence Based Medicine IG. The SystematicReviewIncludedStudies Profile is used to represent the subset of search results of a systematic review which meet the inclusion criteria."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* type = http://terminology.hl7.org/CodeSystem/library-type#asset-collection "Asset Collection"
* subjectReference only Reference(SystematicReviewEligibilityCriteria)
* topic 0..0

---

// File: input/fsh/list/p-evidence-list.fsh

Profile: EvidenceList
Parent: List
Id: evidence-list
Description: "Profile of List for Evidence Based Medicine IG. The EvidenceList Profile is used to provide a list of Evidence Resources. The EvidenceList Profile is used to represent a Group of Evidence for the population for an EvidenceSynthesisEvidence using a summary data meta-analysis approach and is referenced from a MetaanalysisStudyGroup."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* code.coding 1..1
* code.coding = https://fevir.net/resources/CodeSystem/179423#EvidenceList "EvidenceList"
* code.text = "Evidence List"
* encounter 0..0
* entry
  * item only Reference(Evidence)


---

// File: input/fsh/list/p-net-effect-contribution-list.fsh

Profile: NetEffectContributionList
Parent: List
Id: net-effect-contribution-list
Description: "Profile of List for Evidence Based Medicine IG. The NetEffectContributionList Profile is used to provide a list of Evidence Resources (NetEffectContribution Profile). The NetEffectContributionList Profile is used to represent a Group of Evidence for the population for a NetEffectEstimate (Profile of Evidence) using a net effect analysis approach and is referenced from a NetEffectContributions (Profile of Group)."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* code.coding 1..1
* code.coding = https://fevir.net/resources/CodeSystem/179423#NetEffectContributionList "NetEffectContributionList"
* code.text = "Net Effect Contributions List"
* encounter 0..0
* entry
  * item only Reference(NetEffectContribution)


---

// File: input/fsh/list/p-outcome-list.fsh

Profile: OutcomeList
Parent: List
Id: outcome-list
Description: "Profile of List for Evidence Based Medicine IG. The OutcomeList Profile is used to provide a list of outcomes. The OutcomeList Profile is referenced in the EvidenceReportSubject Profile as a way to define the set of outcomes that an EvidenceReport is about."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* code.coding 1..1
* code.coding = https://fevir.net/resources/CodeSystem/179423#OutcomeList "OutcomeList"
* code.text = "Outcome List"
* encounter 0..0
* entry
  * item only Reference(OutcomeDefinition or VariableDefinition)


---

// File: input/fsh/plan-definition/p-m11-soa-plandefinition.fsh

Profile: SoaPlanDefinition
Parent: PlanDefinition
Id: soa-plandefinition
Description: "Profile of PlanDefinition for temporary testing to coordination with M11 use."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* topic 0..0
* action
  * extension contains CharacteristicTiming named timingRelativeTime 0..1


---

// File: input/fsh/plan-definition/p-recommendation-plan.fsh

Profile: RecommendationPlan
Parent: PlanDefinition
Id: recommendation-plan
Description: "Profile of PlanDefinition for Evidence Based Medicine IG. The RecommendationPlan Profile is used for the implementable representation of a recommendation (such as that from a clinical practice guideline)."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* url 1..1 MS
* version 1..1 MS
* versionAlgorithm[x] MS
* name MS
* title 1..1 MS
* experimental MS
* publisher MS
* description 1..1 MS
* type 1..1 MS
* type only CodeableConcept
* type = http://terminology.hl7.org/CodeSystem/plan-definition-type#eca-rule
* subject[x] MS
* topic 0..0
* library 0..1 MS
* action 1..* MS
* action
  * extension contains CharacteristicTiming named timingRelativeTime 0..1
* action.prefix MS
* action.title MS
* action.description MS
* action.code MS
* action.reason MS
* action.documentation MS
* action.trigger MS
* action.condition MS
* action.timing[x] MS
* action.participant MS
* action.participant.role MS
* action.type MS
* action.input ^short = "Pertinent positives and negatives relevant to determining applicability"
* action.input ^definition = "For recommendation definitions, the input information for an action identifies pertinent positive and negative information relevant to determining the applicability of the recommendation."
* action.input ^comment = "Note that it may be possible to infer this information directly from the logic involved."
* action.input ^mustSupport = false
* action.output ^short = "Pertinent or relevant information that should be included with the recommendation"
* action.output ^definition = "For recommendation definitions, the output element is used to specify what information should be included as patient-specific supporting evidence for the recommendation."
* action.output ^comment = "If output elements are specified, implementations SHOULD support attaching content matching the output data requirements to the recommendation instances as appropriate for the recommendation resource type, typically a supportingInformation element."
* action.output ^mustSupport = false
* action.definition[x] MS
* action.definition[x] only canonical
* action.definition[x] ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/ActivityDefinition"
* action.dynamicValue MS
* action.dynamicValue.path MS
* action.dynamicValue.expression MS
* action.action MS


---

// File: input/fsh/research-study/ext-research-study-estimand.fsh

Extension: ResearchStudyEstimand
Id: research-study-estimand
Description: "An outcome measure described with the estimand framework."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy.objective"
* value[x] 0..0
* . ^short = "An outcome measure described with the estimand framework"
* . ^definition = "An outcome measure described with the estimand framework."
* extension contains label 0..1 and type 0..1 and endpoint 1..1 and population 0..1 and interventionGroup 0..1 and comparatorGroup 0..1 and summaryMeasure 0..1 and eventHandling 0..*
* extension[label].value[x] only string
  * ^short = "Short name or identifier"
  * ^definition = "Name or identiifer for internal referencing."
* extension[type].value[x] only CodeableConcept
  * ^short = "Primary, secondary, or exploratory"
  * ^definition = "Classification of the estimand/outcome measure as a primary focus or not."
* extension[type].valueCodeableConcept from $research-study-objective-type (preferred)
* extension[endpoint].value[x] only Reference(EvidenceVariable or ObservationDefinition or PlanDefinition)
  * ^short = "Outcome measure/Endpoint"
  * ^definition = "Outcome for each participant that is used in the treatment effect definition."
* extension[population].value[x] only Reference(Group)
  * ^short = "Population"
  * ^definition = "Patients for whom researchers want to estimate the treatment effect."
  * ^comment = "List of key characteristics, such as demographic characteristics (e.g., age, sex) and clinical characteristics (e.g., prior therapies, symptoms, severity, biomarker status)"
* extension[interventionGroup].value[x] only id
  * ^short = "Intervention"
  * ^definition = "One of the intervention strategies being compared in the treatment effect definition."
  * ^comment = "The valueId value should match a ResearchStudy.comparisonGroup.linkId value. List of key aspects of treatment regimens in each study group, including at least investigational agents, dosage, and administration route"
* extension[comparatorGroup].value[x] only id
  * ^short = "Comparator"
  * ^definition = "One of the intervention strategies being compared in the treatment effect definition, in the role of comparator."
  * ^comment = "The valueId value should match a ResearchStudy.comparisonGroup.linkId value. List of key aspects of treatment regimens in each study group, including at least investigational agents, dosage, and administration route"
* extension[summaryMeasure].value[x] only CodeableConcept
  * ^short = "Statistical measure for treatment effect estimate"
  * ^definition = "Method used to summarise and compare the endpoint between treatment conditions (eg, risk ratio, odds ratio)."
  * ^comment = "Description of the population-level summary (e.g., mean difference, relative risk)"
* extension[summaryMeasure].valueCodeableConcept from $ebm-evidence-statistic-type (extensible)
* extension[eventHandling]
  * value[x] 0..0
  * ^short = "Handling of intercurrent event"
  * ^definition = "Strategies used to handle each intercurrent event in the treatment effect definition; different strategies could be used for different types of intercurrent events."
  * extension contains event 0..1 and group 0..1 and handling 0..1 and description 0..1
  * extension[event].value[x] only CodeableConcept
    * ^short = "the event"
    * ^definition = "The situation that leads to a change in interpretation of the data."
    * ^comment = "For each intercurrent event, provide a Description of Intercurrent Event (e.g., permanent discontinuation of trial intervention)."
  * extension[group].value[x] only CodeableConcept
    * ^short = "the group that is affected by this event handling"
    * ^definition = "The group (intervention group, comparator group, both groups, a subgroup) that receives a change in interpretation of the data."
  * extension[handling].value[x] only CodeableConcept
    * ^short = "how the data is handled"
    * ^definition = "The method used for interpretation of the data."
    * ^comment = "For each intercurrent event, provide a Description of the strategy to address the intercurrent event (e.g., a treatment policy strategy)."
  * extension[description].value[x] only markdown
    * ^short = "text summary of event handling"
    * ^definition = "The human-readable summary of the handling of an intercurrent event."



---

// File: input/fsh/research-study/ext-research-study-excluded-study.fsh

Extension: ResearchStudyExcludedStudy
Id: research-study-excluded-study
Description: "Link to a research study excluded from the systematic review."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only Reference(Citation or Composition or ResearchStudy)
* . ^short = "Link to a research study excluded from the systematic review."
* . ^definition = "Link to a research study excluded from the systematic review."


---

// File: input/fsh/research-study/ext-research-study-included-study.fsh

Extension: ResearchStudyIncludedStudy
Id: research-study-included-study
Description: "Link to a research study included in the systematic review."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only Reference(Citation or Composition or ResearchStudy)
* . ^short = "Link to a research study included in the systematic review."
* . ^definition = "Link to a research study included in the systematic review."


---

// File: input/fsh/research-study/ext-research-study-number-of-studies-identified.fsh

Extension: ResearchStudyNumberOfStudiesIdentified
Id: research-study-number-of-studies-identified
Description: "Number of studies found on search to be evaluated for inclusion."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only unsignedInt
* . ^short = "Number of studies found on search."
* . ^definition = "Number of studies found on search to be evaluated for inclusion."


---

// File: input/fsh/research-study/ext-research-study-number-of-studies-included.fsh

Extension: ResearchStudyNumberOfStudiesIncluded
Id: research-study-number-of-studies-included
Description: "Number of studies selected for inclusion."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only unsignedInt
* . ^short = "Number of studies selected for inclusion."
* . ^definition = "Number of studies selected for inclusion."


---

// File: input/fsh/research-study/ext-research-study-result-as-composition.fsh

Extension: ResearchStudyResultAsComposition
Id: research-study-result-as-composition
Description: "Link to results generated by the study, using a Composition Resource."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only Reference(Composition)
* . ^short = "Link to results generated by the study."
* . ^definition = "Link to results generated by the study, using a Composition Resource."


---

// File: input/fsh/research-study/ext-research-study-sae-reporting-method.fsh

Extension: ResearchStudySaeReportingMethod
Id: research-study-sae-reporting-method
Description: "Method for reporting Serious Adverse Events."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only string
* . ^short = "Method for reporting Serious Adverse Events."
* . ^definition = "Method for reporting Serious Adverse Events."
* . ^comment = "Report Serious Adverse Events to the sponsor. Enter SAE reporting method(s). Refer to Section 9.4 for detailed reporting instructions."


---

// File: input/fsh/research-study/ext-research-study-search-strategy.fsh

Extension: ResearchStudySearchStrategy
Id: research-study-search-strategy
Description: "Link to search terms and sources for finding studies for inclusion."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only Reference(SearchStrategy)
* . ^short = "Link to search terms and sources."
* . ^definition = "Link to search terms and sources, using a Group Resource (SearchStrategy Profile)."


---

// File: input/fsh/research-study/ext-research-study-sponsor-confidentiality-statement.fsh

Extension: ResearchStudySponsorConfidentialityStatement
Id: research-study-sponsor-confidentiality-statement
Description: "Sponsor Confidentiality Statement."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only string
* . ^short = "Sponsor Confidentiality Statement, if applicable."
* . ^definition = "Sponsor Confidentiality Statement, if applicable."


---

// File: input/fsh/research-study/ext-research-study-study-amendment.fsh

Extension: ResearchStudyStudyAmendment
Id: research-study-study-amendment
Description: "An amendment to a study protocol."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] 0..0
* . ^short = "An amendment to a study protocol"
* . ^definition = "An amendment to a study protocol."
* extension contains details 0..1 and scope 0..1 and description 0..1 and rationale 0..1 and substantialImpactSafety 0..1 and substantialImpactSafetyComment 0..1 and substantialImpactReliability 0..1 and substantialImpactReliabilityComment 0..1 and primaryReason 0..1
* extension[details].value[x] only string
  * ^short = "Statement regarding prior amendments"
  * ^definition = "Statement regarding prior amendments."
  * ^comment = "State {Not applicable. This protocol has not been amended.} or state {This protocol has been amended previously. Details of prior amendments are presented in Prior Protocol Amendment(s).} or include Current Amendment details as appropriate (See instructions)."
* extension[scope].value[x] only string
  * ^short = "Global, Coutnry, Region, or Site"
  * ^definition = "Global, Coutnry, Region, or Site."
  * ^comment = "If an amendment applies to all sites in the trial, enter “global” and delete the Country, Region and Site Identifier fields. If amending a single-country study, enter “global”. If the amendment does not apply to all sites in the trial, select “Not Global” and utilize one of the identifiers based on amendment scope. Use the ISO-3166 region or country identifier (for example, DE or EU)."
* extension[description].value[x] only string
  * ^short = "Description"
  * ^definition = "Description."
* extension[rationale].value[x] only string
  * ^short = "Rationale"
  * ^definition = "Rationale."
* extension[substantialImpactSafety].value[x] only boolean
  * ^short = "Substantial impact on safety"
  * ^definition = "Substantial impact on safety."
* extension[substantialImpactSafetyComment].value[x] only string
  * ^short = "Comment on substantial impact on safety"
  * ^definition = "Comment on substantial impact on safety."
* extension[substantialImpactReliability].value[x] only boolean
  * ^short = "Substantial impact on reliability"
  * ^definition = "Substantial impact on reliability."
* extension[substantialImpactReliabilityComment].value[x] only string
  * ^short = "Comment on substantial impact on reliability"
  * ^definition = "Comment on substantial impact on reliability."
* extension[primaryReason].value[x] only CodeableConcept
  * ^short = "Reason for amendment, e.g. Safety"
  * ^definition = "Reason for amendment, e.g. Safety."

---

// File: input/fsh/research-study/ext-research-systematic-review-eligibility-criteria.fsh

Extension: ResearchStudySystematicReviewEligibilityCriteria
Id: research-study-systematic-review-eligibility-criteria
Description: "Link to criteria for inclusion of studies in the systematic review."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* ^context.type = #element
* ^context.expression = "ResearchStudy"
* value[x] only Reference(SystematicReviewEligibilityCriteria)
* . ^short = "Link to inclusion and exclusion criteria for studies."
* . ^definition = "Link to criteria for inclusion of studies in the systematic review, using a Group Resource (StudyEligibilityCriteria Profile)."


---

// File: input/fsh/research-study/p-m11-research-study.fsh

Profile: M11ResearchStudy
Parent: ResearchStudy
Id: m11-research-study
Description: "Profile of ResearchStudy for Evidence Based Medicine IG. The M11ResearchStudy Profile is used to add extensions for use with an M11 Report."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-author named author 0..*
* extension contains ResearchStudySponsorConfidentialityStatement named confidentialityStatement 0..1
* extension contains ResearchStudySaeReportingMethod named saeReportingMethod 0..1
* extension contains ResearchStudyStudyAmendment named studyAmendment 0..1
* title ^comment = "The protocol should have a descriptive title that identifies the scientific aspects of the trial sufficiently to ensure it is immediately evident what the trial is investigating and on whom, and to allow retrieval from literature or internet searches."
* objective
  * extension contains ResearchStudyEstimand named estimand 0..*

---

// File: input/fsh/research-study/p-systematic-review.fsh

Profile: SystematicReview
Parent: ResearchStudy
Id: systematic-review
Description: "Profile of ResearchStudy for Evidence Based Medicine IG. The SystematicReview Profile is used for a scientific study based on a protocol that includes search and selection of eligible studies, study quality assessment, data extraction, and synthesis."
* ^extension[$ext-fmm].valueInteger = 1
* ^extension[$ext-wg].valueCode = #cds
* ^extension[$ext-standards-status].valueCode = #draft
* extension contains $ext-author named author 0..*
* extension contains ResearchStudySearchStrategy named searchStrategy 0..*
* extension contains ResearchStudySystematicReviewEligibilityCriteria named systematicReviewEligibilityCriteria 0..1
* extension contains ResearchStudyNumberOfStudiesIdentified named numberOfStudiesIdentified 0..1
* extension contains ResearchStudyNumberOfStudiesIncluded named numberOfStudiesIncluded 0..1
* extension contains ResearchStudyIncludedStudy named includedStudy 0..*
* extension contains ResearchStudyExcludedStudy named excludedStudy 0..*
* extension contains ResearchStudyResultAsComposition named resultAsComposition 0..*
* extension contains $ext-researchStudy-studyRegistration named studyRegistration 0..*
* phase 0..0
* recruitment 0..0

---

