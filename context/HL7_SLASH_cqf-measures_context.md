File: repos/HL7_SLASH_cqf-measures/input/pages/acknowledgements.md

This Implementation Guide was made possible by the thoughtful contributions of the following people and organizations:

* Rose Almont, MITRE - Contributor
* Lisa Anderson, The Joint Commission - Contributor
* Paul Denning, MITRE - Contributor
* Claudia Hall, Mathematica Policy Research - Contributor
* Ben Hamlin, NCQA - Contributor
* Yan Heras, ESAC - Contributor
* Yanyan Hu, The Joint Commission - Contributor
* Michael O'Keefe, MITRE - Contributor
* Bryn Rhodes, Dynamic Content Group - Editor
* Rob Samples, ESAC - Contributor
* Sam Sayer, MITRE - Contributor
* Anne Marie Smith, NCQA - Contributor
* Chris Schuler, Dynamic Content Group - Contributor
* Raman Srinivasan, IBM - Contributor
* Matthew Tiller, ESAC - Contributor
* Michael Holck, ICF - Contributor
* Abdullah Rafiqi, ICF - Contributor


---

File: repos/HL7_SLASH_cqf-measures/input/pages/capabilities.md

{: #capabilities}

### Capability Statements

This implementation guide defines capability statements, use cases, and conformance requirements for:

* [**Measure Repository**](measure-repository-service.html) - Measure specification use cases in this IG are supported by the Measure Repository Service capability statements, which are measure-specific specializations of the artifact repository services defined in CRMI.
* **Terminology Service** - Terminology service use cases in this IG are supported by the [Artifact Terminology Service Capabilities as defined in CRMI]({{site.data.fhir.ver.crmi}}/artifact-terminology-service.html). In particular, see the [Manifest](measure-conformance.html#manifest) discussion in the Measure Conformance topic regarding the use of the [CRMI Manifest Library]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-manifestlibrary.html).
* [**Example Measure Calculation Service**](CapabilityStatement-measure-calculation-service-example.html) - This example capability statement illustrates the use of the [cqf-supportedCqlVersion]({{site.data.fhir.ver.ext}}/StructureDefinition-cqf-supportedCqlVersion.html) extension to support advertising the version of CQL supported by the service.
* See the capability statements defined in the [Data Exchange for Quality Measures](https://hl7.org/fhir/us/davinci-deqm/) implementation guide for the Submitting and Receiving System roles.

### Measure Specification Workflow Summary

The following sequence diagram depicts overall processing for quality improvement data use scenarios. The roles depicted are:

* Data Repository - The clinical data repository for the submitting system. This is typically a FHIR server endpoint for the submitting system's electronic health record (EHR) or system of record, but could also be an HIE or other aggregated data source, depending on the particular submission and reporting requirements.
* Submitting System - This would be either a hospital, physician practice, or any organization that wants to submit the relevant QM data to a receiving system
* Knowledge Repository - This would be a FHIR server that has the QMs loaded and is the source of truth for those QMs and can provide the required data elements for each measure
* Terminology Service - This can be any valid FHIR terminology service that has the appropriate valuesets used in the QMs and can provide the expansion of those valuesets
* Receiving System - This would be the system that will receive all of the relevant clinical data for a given QM and be able to perform the evaluation of that measure

There are 5 workflows depicted using the swimlanes.

1. Setup - The setup workflow is used by the submitting system to identify what data elements are required for a given measure by calling to the Knowledge Repository to get the data requirements and then getting the appropriate valuesets for the measure from the Terminology Service
2. Attribution/Selection - This workflow determines the attribution for the measure and determines the patients that would be in the initial population that will need to be submitted to the Receiving System
3. Submission - This workflow submits the required data elements per patient for the given measure to the Receiving System. Note that this could also potentially be done using a bulk data operation rather than individual submission calls for each element
4. Evaluation (individual/group) - This workflow represents the actual evaluation of the measure by the Receiving System after it has all the required data elements for the patients and generates the measure report back to the Submitting System
5. Care Gaps - This workflow is the generation of the gaps in care document from the Receiving System back to the Submitting System based on the results of the measure evaluation

The Quality Measure IG is focused on the Setup workflow for quality measurement, while the Data Exchange for Quality Measures IG is focused on the Attribution/Selection, Submission, Evaluation, and Care Gaps workflows for quality measurement, reporting, and management.

Note that although the processing depicted here is focused on quality measurement, the steps and processes involved apply generally to any data analytics use case including decision support, case and registry reporting, and population health management.

{% include img.html img="Data_Element_Submission_Scenario.png" %}

---

File: repos/HL7_SLASH_cqf-measures/input/pages/changes.md


{: toc}

{: #changes}


### STU5 Publication for FHIR R4 (v5.0.0)

* **Applied**: Rename the QMIG CQFM publishable manifest profile to CQFM Content Release ([FHIR-45309](https://jira.hl7.org/browse/FHIR-45309))([Applied here](profiles.html#additional-profiles)), ([here](measure-conformance.html#manifest)), and ([here](capabilities.html))
* **Applied**: Update text in Measure.improvementNotation cmp-4	([FHIR-45311](https://jira.hl7.org/browse/FHIR-45311))([Applied here](StructureDefinition-computable-measure-cqfm.html#profile))
* **Applied**: Allow support for stratification in ratio measures	([FHIR-45321](https://jira.hl7.org/browse/FHIR-45321))([Applied here](StructureDefinition-computable-measure-cqfm.html)), ([here](StructureDefinition-cqfm-appliesTo.html)), and ([here](measure-conformance.html))
* **Applied**: Deprecate the Rationale element ([FHIR-45361](https://jira.hl7.org/browse/FHIR-45361))([Applied here](StructureDefinition-publishable-measure-cqfm.html)), ([here](Measure-EXM124-FHIR.html)), ([here](Measure-EXM125-FHIR.html)), ([here](Measure-EXM130-FHIR.html)), ([here](Measure-EXM146-FHIR.html)), ([here](Measure-EXMLogic-FHIR.html)), ([here](Measure-measure-pi-exm.html)), and ([here](Bundle-sde-example-artifact-bundle.html))
* **Applied**: Measure.library cardinality([FHIR-45386](https://jira.hl7.org/browse/FHIR-45386)) Applied across numerous profiles. ([profiles page](profiles.html))- ([Especially here](StructureDefinition-computable-measure-cqfm.html)), ([here](StructureDefinition-cql-measure-cqfm.html)), and ([here](StructureDefinition-elm-measure-cqfm.html))
* **Applied**: Put example files in the examples folder of package.tgz ([FHIR-45387](https://jira.hl7.org/browse/FHIR-45387))
* **Applied**: Adding a link on USING CQL page for data model information([FHIR-45389](https://jira.hl7.org/browse/FHIR-45389))([Applied here](using-cql.html))
* **Applied**: Conformance requirement-3-14 text change	([FHIR-45423](https://jira.hl7.org/browse/FHIR-45423))([Applied here](measure-conformance.html#conformance-requirement-3-14))
* **Applied**: Editorial corrections to opening sentence([FHIR-45435](https://jira.hl7.org/browse/FHIR-45435))([Applied here](using-cql.html))
* **Applied**: Remove conformance requirement 6.5([FHIR-45438](https://jira.hl7.org/browse/FHIR-45438))([Applied here](packaging.html))
* **Applied**: Fix link to Adapting Guidelines for the Digital Age([FHIR-45463](https://jira.hl7.org/browse/FHIR-45463))([Applied here](packaging.html)), ([here](index.html)), and ([here](index.html#quality-improvement-ecosystem))
* **Applied**: Fix link to Adapting Guidelines for the Digital Age - another location([FHIR-45464](https://jira.hl7.org/browse/FHIR-45464))([Applied here](packaging.html)), ([here](index.html)), and ([here](index.html#quality-improvement-ecosystem))
* **Applied**: Remove reference to the Measure Authoring Tool (MAT)([FHIR-45465](https://jira.hl7.org/browse/FHIR-45465))([Applied here](introduction.html))
* **Applied**: Align description of words - episode of care vs. non-patient based vs. encounter-based measure throughout IG([FHIR-45466](https://jira.hl7.org/browse/FHIR-45466))([Applied here](measure-conformance.html))
* **Applied**: Better align graphic with text. Step 2 is clinical practice guidelines([FHIR-45558](https://jira.hl7.org/browse/FHIR-45558))([Applied here](index.html#quality-improvement-ecosystem))
* **Applied**: There is reference to a ghost Figure 2-1 in this section.([FHIR-45560](https://jira.hl7.org/browse/FHIR-45560))([Applied here](measure-conformance.html))
* **Applied**: Missing the word "to"([FHIR-45562](https://jira.hl7.org/browse/FHIR-45562))([Applied here](using-cql.html))
* **Applied**: Formatting includes extra white space and spacing issues([FHIR-45563](https://jira.hl7.org/browse/FHIR-45563))([Applied here](StructureDefinition-cqfm-populationBasis.html))
* **Applied**: Does this need clarification for users who are not experts in quality measures? Link to resource or definition([FHIR-45565](https://jira.hl7.org/browse/FHIR-45565))([Applied here](introduction.html))
* **Applied**: can this link out to the eCQM RC([FHIR-45567](https://jira.hl7.org/browse/FHIR-45567))([Applied here](introduction.html))
* **Applied**: Awareness is confusing.([FHIR-45568](https://jira.hl7.org/browse/FHIR-45568))([Applied here](index.html#quality-measurement-standards-landscape))
* **Applied**: Can links be created([FHIR-45570](https://jira.hl7.org/browse/FHIR-45570))([Applied here](measure-conformance.html))
* **Applied**: Cannot find header data elements([FHIR-45571](https://jira.hl7.org/browse/FHIR-45571))([Applied here](measure-conformance.html))
* **Applied**: Documentation Flow([FHIR-45572](https://jira.hl7.org/browse/FHIR-45572))([Applied here](measure-conformance.html))
* **Applied**: Correction is Steps in section 1.3.1([FHIR-45573](https://jira.hl7.org/browse/FHIR-45573))([Applied here](index.html#data-model-standards-landscape))
* **Applied**: Suggestion to link to the CQFMCohortMeasure profile([FHIR-45574](https://jira.hl7.org/browse/FHIR-45574))([Applied here](measure-conformance.html))
* **Applied**: Update text in Quality Measurement Standards Landscape([FHIR-45575](https://jira.hl7.org/browse/FHIR-45575))([Applied here](index.html#data-model-standards-landscape))
* **Applied**: Note to Ballot Reviewers Regarding When, Where and How to report([FHIR-45636](https://jira.hl7.org/browse/FHIR-45636))([Applied here](index.html#data-model-standards-landscape))
* **Applied**: Misspells, Typos, Duplicates, Broken Links, Incomplete Sentences, Inconsistent Punctuation, Etcetera([FHIR-45643](https://jira.hl7.org/browse/FHIR-45643))([Applied here](index.html)), ([here](measure-conformance.html)), ([here](using-cql.html))
* **Applied**: Technical Correction([FHIR-45692](https://jira.hl7.org/browse/FHIR-45692))Applied throughout ([pages](toc.html))
* **Applied**: Remove the reference to Codesystem-artifact-comment-type ([FHIR-45838](https://jira.hl7.org/browse/FHIR-45838))
* **Applied**: Update link text for code system ([FHIR-45839](https://jira.hl7.org/browse/FHIR-45839))([Applied here](terminology.html))
* **Applied**: Update link text for value set ([FHIR-45840](https://jira.hl7.org/browse/FHIR-45840))([Applied here](terminology.html))
* **Applied**: Remove the reference to ValueSet-artifact-comment-type ([FHIR-45841](https://jira.hl7.org/browse/FHIR-45841))
* **Applied**: Remove the reference to ValueSet-value-filter-comparator.html ([FHIR-45842](https://jira.hl7.org/browse/FHIR-45842))
* **Applied**: Run-on sentence in Conformance Requirement 3.1 ([FHIR-45873](https://jira.hl7.org/browse/FHIR-45873))([Applied here](measure-conformance.html#related-documents))
* **Applied**: Use links for referenced profiles in Conformance Requirement 3.1 ([FHIR-45875](https://jira.hl7.org/browse/FHIR-45875))([Applied here](measure-conformance.html#related-documents))
* **Applied**: Remove the requirement that URL tail match the name element([FHIR-45881](https://jira.hl7.org/browse/FHIR-45881))([Applied here](measure-conformance.html))
* **Applied**: Remove the dependency on QICore ([FHIR-45882](https://jira.hl7.org/browse/FHIR-45882)) removed dependency
* **Applied**: Correct links to Using CQL With FHIR IG([FHIR-45885](https://jira.hl7.org/browse/FHIR-45885))([Applied here](using-cql.html))
* **Applied**: Conformance statements text change ([FHIR-45886](https://jira.hl7.org/browse/FHIR-45886))([Applied here](using-cql.html#libraries))
* **Applied**: Update terminology guidance ([FHIR-45887](https://jira.hl7.org/browse/FHIR-45887))([Applied here](measure-conformance.html))
* **Applied**: Consider updating the CQFCommon dependency ([FHIR-45888](https://jira.hl7.org/browse/FHIR-45888)) removed dependency
* **Applied**: Consider alternative approach to presenting CQL guidance here  ([FHIR-45889](https://jira.hl7.org/browse/FHIR-45889))([Applied here](using-cql.html))
* **Applied**: Consider revising packaging discussion ([FHIR-45891](https://jira.hl7.org/browse/FHIR-45891)) Applied ([here](StructureDefinition-computable-measure-cqfm.html)), ([here](Measure-BCSComponent.html)), ([here](Measure-CCSComponent.html)), and ([here](Measure-EXM55-FHIR.html))
* **Applied**: edits/comments to Introduction, QMs, and Using CQL pages ([FHIR-45905](https://jira.hl7.org/browse/FHIR-45905))([Applied here](measure-conformance.html))
* **Applied**: Correct description of capability profiles ([FHIR-45914](https://jira.hl7.org/browse/FHIR-45914))([Applied here](profiles.html#capability-profiles))
* **Applied**: Consider referencing the conformance requirements ([FHIR-45915](https://jira.hl7.org/browse/FHIR-45915)) Applied ([here](StructureDefinition-computable-measure-cqfm.html)), ([here](Measure-BCSComponent.html)), ([here](Measure-CCSComponent.html)), and ([here](Measure-EXM55-FHIR.html))
* **Applied**: Sync up short description and measure profile type ([FHIR-45916](https://jira.hl7.org/browse/FHIR-45916))([Applied here](StructureDefinition-cohort-measure-cqfm.html)), ([here](StructureDefinition-composite-measure-cqfm.html)), ([here](StructureDefinition-cv-measure-cqfm.html)), ([here](StructureDefinition-proportion-measure-cqfm.html)), and ([here](StructureDefinition-ratio-measure-cqfm.html))
* **Applied**: Software system device should be using CRMI ([FHIR-45917](https://jira.hl7.org/browse/FHIR-45917)) Applied ([here](StructureDefinition-device-softwaresystem-cqfm.html)), and ([here](profiles.html))
* **Applied**: Clarify the meaning of "not restricted to use terminology profiles" ([FHIR-45918](https://jira.hl7.org/browse/FHIR-45918))([Applied here](profiles.html#terminology-profile-usage))
* **Applied**: Provided content for the operations page	([FHIR-45919](https://jira.hl7.org/browse/FHIR-45919)) ([Applied here](operations.html))
* **Applied**: Measure Profiles "SEP" combination ([FHIR-45920](https://jira.hl7.org/browse/FHIR-45920)) Applied ([here](StructureDefinition-computable-measure-cqfm.html)), ([here](Measure-BCSComponent.html)), ([here](Measure-CCSComponent.html)), and ([here](Measure-EXM55-FHIR.html))
* **Applied**: ShareableMeasureRepository text and links updates ([FHIR-45921](https://jira.hl7.org/browse/FHIR-45921))([Applied here](measure-repository-service.html#shareable-measure-repository))
* **Applied**: Examples throughout seem to be rendered incorrectly? ([FHIR-45922](https://jira.hl7.org/browse/FHIR-45922)) Applied ([here](StructureDefinition-computable-measure-cqfm.html)), ([here](Measure-BCSComponent.html)), ([here](Measure-CCSComponent.html)), and ([here](Measure-EXM55-FHIR.html))
* **Applied**: CQFMComputableMeasure library - which Library profile to use ([FHIR-45923](https://jira.hl7.org/browse/FHIR-45923))([Applied here](StructureDefinition-computable-measure-cqfm.html))
* **Applied**: library profile usage ([FHIR-45924](https://jira.hl7.org/browse/FHIR-45924))Applied to numerous measure files and ([here](packaging.html)), and ([here](profiles.html))
* **Applied**: edits/comments to the Profiles page ([FHIR-45930](https://jira.hl7.org/browse/FHIR-45930)) Applied ([here](StructureDefinition-computable-measure-cqfm.html)), ([here](Measure-BCSComponent.html)), ([here](Measure-CCSComponent.html)), and ([here](Measure-EXM55-FHIR.html))
* **Applied**: Glossary page - minor edit to acronym ([FHIR-45932](https://jira.hl7.org/browse/FHIR-45932))([Applied here](glossary.html))
* **Applied**: PublishableMeasureRepository capability statement expresses additional functionality ([FHIR-45996](https://jira.hl7.org/browse/FHIR-45996))([Applied here](measure-repository-service.html#publishable-measure-repository))
* **Applied**: Clarify $package for CQFM Test Case MeasureReport	([FHIR-46024](https://jira.hl7.org/browse/FHIR-46024))Applied ([here](CapabilityStatement-authoring-measure-repository.html)), ([here](CapabilityStatement-publishable-measure-repository.html)), ([here](CapabilityStatement-shareable-measure-repository.html)), and ([here](OperationDefinition-cqfm-package.html))
* **Applied**: Added sybject-type valueset derived from FHIR value set and FHIR resource types. ([FHIR-46063](https://jira.hl7.org/browse/FHIR-46063)) ([Applied here](ValueSet-subject-type.html)) ([here](StructureDefinition-computable-measure-cqfm.html)) and ([here](terminology.html#valueset-resources))
* **Applied**: Changed scoring expression (cmp-2) from or to xor in computable measure cqfm	([FHIR-46206](https://jira.hl7.org/browse/FHIR-46206)) ([Applied here](StructureDefinition-computable-measure-cqfm.html))
* **Applied**: Add an attestation measure profile ([FHIR-46231](https://jira.hl7.org/browse/FHIR-46231)) ([Applied here](profiles.html)) ([here](StructureDefinition-attestation-measure-cqfm.html)), and ([here](measure-conformance.html))
* **Applied**: Update Sentence Regarding All Codes and Valuesets in Terminology section ([FHIR-46290](https://jira.hl7.org/browse/FHIR-46290))([Applied here](measure-conformance.html#terminology))
* **Applied**: clarify short description for appliesTo extension ([FHIR-46387](https://jira.hl7.org/browse/FHIR-46387))([Applied here](StructureDefinition-cqfm-appliesTo.html))
* **Applied**: Guidance on when to use multi-rate measures ([FHIR-46421](https://jira.hl7.org/browse/FHIR-46421))([Applied here](measure-conformance.html#measures-with-multiple-populations)) 
* **Applied**: Recover includeInReportType extension ([FHIR-46462](https://jira.hl7.org/browse/FHIR-46462))([Applied here](StructureDefinition-publishable-measure-cqfm.html))
* **Applied**: Clarify the use of code-based stratifiers (including components) ([FHIR-47396](https://jira.hl7.org/browse/FHIR-47396))([Applied here](measure-conformance.html#stratification))
* **Applied**: CQMF Publishable Measure Profile Measure.status Fixed to Active ([FHIR-47767](https://jira.hl7.org/browse/FHIR-47767))([Applied here](StructureDefinition-publishable-measure-cqfm.html))
* **Applied**: Support specifying intended venue for publishable measures ([FHIR-48533](https://jira.hl7.org/browse/FHIR-48533))([Applied here](capabilities.html)), ([here](measure-conformance.html)), ([here](StructureDefinition-publishable-measure-cqfm.html)), and numerous example files



### STU5 Ballot2 for FHIR R4 (v5.0.0-ballot2)

* **Applied**: Remove code "ep-ec" from Quality Programs value set	([FHIR-43323](https://jira.hl7.org/browse/FHIR-43323)) Applied ([here](https://hl7.org/fhir/us/cqfmeasures/2024May/CodeSystem-quality-programs-example.html))
* **Applied**: Minor technical items or suggestions for QM IG	([FHIR-43428](https://jira.hl7.org/browse/FHIR-43428))Applied ([here](index.html)), and [here](introduction.html)
* **Applied**: Created an improvementNotationGuidance extension in the FHIR extensions pack and added to Publishable Measure at root and group level. ([FHIR-43463](https://jira.hl7.org/browse/FHIR-43463))([Applied here](https://hl7.org/fhir/us/cqfmeasures/StructureDefinition-publishable-measure-cqfm.html))
* **Applied**: Removed reference to QUICK  ([FHIR-43594](https://jira.hl7.org/browse/FHIR-43594))([Applied here](introduction.html#hqmf))
* **Applied**: Corrected broken links ([FHIR-43620](https://jira.hl7.org/browse/FHIR-43620))([Applied here](index.html)), and ([here](using-cql.html))
* **Applied**: Misspells, Typos and Duplicates	([FHIR-43621](https://jira.hl7.org/browse/FHIR-43621)) Applied ([here](measure-conformance.html))
* **Applied**: Three possible changes	([FHIR-43622](https://jira.hl7.org/browse/FHIR-43622))([Applied here](index.html))
* **Applied**: Updated the description of the Capabilities page on home page ([FHIR-43628](https://jira.hl7.org/browse/FHIR-43628))([Applied here](https://hl7.org/fhir/us/cqfmeasures/2024Jan/#how-to-read-this-guide))
* **Applied**: Removed operations section from the capabilities page ([FHIR-43629](https://jira.hl7.org/browse/FHIR-43629))([Applied here](https://hl7.org/fhir/us/cqfmeasures/2024Jan/capabilities.html))
* **Applied**: broken and outdated links and typos on home page	([FHIR-43632](https://jira.hl7.org/browse/FHIR-43632))([Applied here](index.html))
* **Applied**: Updated CQL version references from 1.4 to 1.5.2 introduction, measure-conformance and using-cql pages  ([FHIR-43635](https://jira.hl7.org/browse/FHIR-43635))([Applied here](https://hl7.org/fhir/us/cqfmeasures/introduction.html)), ([here](measure-conformance.html)), and ([here](using-cql.html))
* **Applied**: Updated paragraph in Scope section regarding Member Attribution (ATR) Lists  ([FHIR-43636](https://jira.hl7.org/browse/FHIR-43636))([Applied here](introduction.html))
* **Applied**: Updated CQL-base HQMF IF R1 version reference from STU4 to STU4.1 ([FHIR-43637](https://jira.hl7.org/browse/FHIR-43637))([Applied here](introduction.html))
* **Applied**: Incorrect library name in Snippet 3-1	([FHIR-43638](https://jira.hl7.org/browse/FHIR-43638))([Applied here](https://hl7.org/fhir/us/cqfmeasures/2024May/measure-conformance.html#specifying-qms))
* **Applied**: Table 3.1 rendering is off	([FHIR-43640](https://jira.hl7.org/browse/FHIR-43640))([Applied here](https://hl7.org/fhir/us/cqfmeasures/2024May/measure-conformance.html#specifying-qms))
* **Applied**: Issues with risk adjustment Snippet 3-28	([FHIR-43642](https://jira.hl7.org/browse/FHIR-43642))([Applied Here](measure-conformance.html#hqmf-mapping))
* **Applied**: update wording in Conformance Requirement 3.17	([FHIR-43643](https://jira.hl7.org/browse/FHIR-43643))([Applied Here](measure-conformance.html#supplemental-data-elements))
* **Applied**: Context shown as unfiltered	([FHIR-43644](https://jira.hl7.org/browse/FHIR-43644))([Applied Here](measure-conformance.html#non-patient-based-calculation))
* **Applied**: Denominator Exception	([FHIR-43645](https://jira.hl7.org/browse/FHIR-43645))([Applied Here](measure-conformance.html#proportion-measure-scoring))
* **Applied**: Updated Sequence diagram on capabilities to add new actors and updated flow ([FHIR-43681](https://jira.hl7.org/browse/FHIR-43681))([Applied Here](capabilities.html))
* **Applied**: Remove QRDA/QDM to an appendix	([FHIR-43682](https://jira.hl7.org/browse/FHIR-43682))([Applied Here](introduction.html#background))
* **Applied**: Composite measure score calculation	([FHIR-43693](https://jira.hl7.org/browse/FHIR-43693))
* **Applied**: Remove rate and ratio measure language from Population Criteria Definitions for Proportion Measures	([FHIR-43702](https://jira.hl7.org/browse/FHIR-43702))
* **Applied**: Refactor Using CQL to reference the Using CQL IG	([FHIR-43710](https://jira.hl7.org/browse/FHIR-43710))
* **Applied**: State composite scoring in the composite measure profile	([FHIR-43711](https://jira.hl7.org/browse/FHIR-43711))
* **Applied**: Canonical tail of Measure should be the name	([FHIR-43713](https://jira.hl7.org/browse/FHIR-43713))
* **Applied**: Updated tables in composite measure page for clarity ([FHIR-43714](https://jira.hl7.org/browse/FHIR-43714))([Applied here](composite-measures.html#all-or-nothing-scoring) and subsequent sections))
* **Applied**: Added table to composite measure page for describing linear scoring vs. opportunity scoring ([FHIR-43715](https://jira.hl7.org/browse/FHIR-43715)) ([Applied here](composite-measures.html#subject-level-linear-combination-scoring))
* **Applied**: Removed section 1.3.3.1 FHIR Version Support and updated summary to reflect the current state of the IG ([FHIR-43767](https://jira.hl7.org/browse/FHIR-43767))([Applied here](index.html))
* **Applied**: Data Model snippet out of sync with source file	([FHIR-43768](https://jira.hl7.org/browse/FHIR-43768))
* **Applied**: Updated QI-core version reference from STU5 to STU6 ([FHIR-43771](https://jira.hl7.org/browse/FHIR-43771))([Applied here](introduction.html))
* **Applied**: Table 3-1 did not render	([FHIR-43772](https://jira.hl7.org/browse/FHIR-43772))
* **Applied**: population basis examples have json formatting errors	([FHIR-43775](https://jira.hl7.org/browse/FHIR-43775))
* **Applied**: Formatting differences between similar tables 3-3, 3-4, 3-5, adn 3-6	([FHIR-43776](https://jira.hl7.org/browse/FHIR-43776))
* **Applied**: Corrected references of Library Bundles to Measure Bundles in Packaging Measures section ([FHIR-43778](https://jira.hl7.org/browse/FHIR-43778))([Applied here](packaging.html))
* **Applied**: clarify the meaning of "de-duplicated" in effectiveDataRequirements extension	([FHIR-43779](https://jira.hl7.org/browse/FHIR-43779))
* **Applied**: Clarify ELM -> DataRequirements expectations	([FHIR-43781](https://jira.hl7.org/browse/FHIR-43781))
* **Applied**: PopulationBasis extension description should refer to Measure.subject[x]	([FHIR-43782](https://jira.hl7.org/browse/FHIR-43782))
* **Applied**: Element subject[x] should be must support in ComputableMeasure	([FHIR-43784](https://jira.hl7.org/browse/FHIR-43784))
* **Applied**: Clarify the use of the valueFilter extension ([FHIR-43790](https://jira.hl7.org/browse/FHIR-43790))([Applied here](Measure-EXMLogic-FHIR.json.html))
* **Applied**: Add row for Composite scoring in Table 3-1	([FHIR-43962](https://jira.hl7.org/browse/FHIR-43962))
* **Applied**: Removed serveral CQFM extension definitions in favor of referencing equivalent CQF extensions in FHIR extension registry ([FHIR-43969](https://jira.hl7.org/browse/FHIR-43969)) (Applied throughout)
* **Applied**: Updated the Quality Improvement Ecosystem paragraph to increase readability ([FHIR-44070](https://jira.hl7.org/browse/FHIR-44070))([Applied here](https://hl7.org/fhir/us/cqfmeasures/2024Jan/#quality-improvement-ecosystem))
* **Applied**: Correct the Opportunity Scoring CQL example	([FHIR-44074](https://jira.hl7.org/browse/FHIR-44074))
* **Applied**: Correct example and conformance wording ([FHIR-44078](https://jira.hl7.org/browse/FHIR-44078))([Applied here](composite-measures.html)) and ([Applied here](using-cql.html))
* **Applied**: Minor edits to list items in 'How to read this guide' ([FHIR-44118](https://jira.hl7.org/browse/FHIR-44118))([Applied here](index.html))
* **Applied**: Misspelling of Practitioner	([FHIR-44119](https://jira.hl7.org/browse/FHIR-44119))
* **Applied**: Capitalize Proper Names	([FHIR-44120](https://jira.hl7.org/browse/FHIR-44120))
* **Applied**: Comments Related to Note To Balloters	([FHIR-44125](https://jira.hl7.org/browse/FHIR-44125))
* **Applied**: Definition for Ratio Numerator	([FHIR-44136](https://jira.hl7.org/browse/FHIR-44136))
* **Applied**: Use the existing code system.	([FHIR-44389](https://jira.hl7.org/browse/FHIR-44389))
* **Applied**: Code Systems and Valuesets should be anchored in THO (terminology.hl7.org). 3	([FHIR-44392](https://jira.hl7.org/browse/FHIR-44392))
* **Applied**: Code Systems and Valuesets should be anchored in THO (terminology.hl7.org). 5	([FHIR-44394](https://jira.hl7.org/browse/FHIR-44394))
* **Applied**: Use the existing value set.	([FHIR-44397](https://jira.hl7.org/browse/FHIR-44397))
* **Applied**: Code Systems and Valuesets should be anchored in THO (terminology.hl7.org). 8	([FHIR-44399](https://jira.hl7.org/browse/FHIR-44399))
* **Applied**: Code Systems and Valuesets should be anchored in THO (terminology.hl7.org). 9	([FHIR-44400](https://jira.hl7.org/browse/FHIR-44400))
* **Applied**: Code Systems and Valuesets should be anchored in THO (terminology.hl7.org). 10	([FHIR-44401](https://jira.hl7.org/browse/FHIR-44401))
* **Applied**: change to lower case I in "Initial-population"	([FHIR-44523](https://jira.hl7.org/browse/FHIR-44523))
* **Applied**: Updated the text and image in data model standard landscape section to remove DEQM and HEDIS and replaced with Measure Content IG ([FHIR-44530](https://jira.hl7.org/browse/FHIR-44530))([Applied here](https://hl7.org/fhir/us/cqfmeasures/2024Jan/#data-model-standards-landscape))
* **Applied**: incorrect link for Clinical Reasoning Module	([FHIR-44533](https://jira.hl7.org/browse/FHIR-44533))
* **Applied**: Issues with conformance requirement 3.1 and measure profiles	([FHIR-44537](https://jira.hl7.org/browse/FHIR-44537))
* **Applied**: Large number of technical corrections	([FHIR-44547](https://jira.hl7.org/browse/FHIR-44547))
* **Applied**: Remove requirement to have ELM in a Library resource	([FHIR-44598](https://jira.hl7.org/browse/FHIR-44598))
* **Applied**: Refactor Shareable and Publishable profiles and repositories to use CRMI	([FHIR-44642](https://jira.hl7.org/browse/FHIR-44642))
* **Applied**: Addition Change for ImprovementNotation	([FHIR-44711](https://jira.hl7.org/browse/FHIR-44711))
* **Applied**: Correct the url for CQL specification	([FHIR-44991](https://jira.hl7.org/browse/FHIR-44991))



### STU5 Ballot for FHIR R4 (v5.0.0-ballot)

* **Applied**: Reference to composites should address content as entity and not limit to patient ([FHIR-35922](https://jira.hl7.org/browse/FHIR-35922))([Applied here](composite-measures.html#conformance-requirement-component-based)), ([here](composite-measures.html#subject-level-linear-combination-scoring)), ([here](composite-measures.html#conformance-requirement-5-5)), and ([here](index.html))
* **Applied**: Make R4 CQFM Publishable CodeSystem profile compatible with R5 ([FHIR-37371](https://jira.hl7.org/browse/FHIR-37371))
* **Applied**: Notes to balloters improvement request ([FHIR-39893](https://jira.hl7.org/browse/FHIR-39893))([Applied here](index.html))
* **Applied**: Update Dependency to US Core 6.0.0 ([FHIR-39894](https://jira.hl7.org/browse/FHIR-39894))([Applied here](index.html#dependencies))
* **Applied**: Hard to tell what is new content ([FHIR-39895](https://jira.hl7.org/browse/FHIR-39895))([Applied here](index.html))
* **Applied**: ImprovementNotation Allowed Values ([FHIR-42116](https://jira.hl7.org/browse/FHIR-42116))([Applied here](index.html)), and ([here](StructureDefinition-cqfm-improvementNotation.html))
* **Applied**: Please add 'Operations' as a an options on the FHIR artifacts menu ([FHIR-42715](https://jira.hl7.org/browse/FHIR-42715))([Applied here](index.html#how-to-read-this-guide)), and ([here](operations.html))
* **Applied**: Clarify ratio measure Numerator definition ([FHIR-42826](https://jira.hl7.org/browse/FHIR-42826))([Applied here](measure-conformance.html#proportion-measure-table)), and ([here](measure-conformance.html#ratio-measure-table))
* **Applied**: Clarify or Correct Conformance Requirement 3.4 ([FHIR-42894](https://jira.hl7.org/browse/FHIR-42894))([Applied here](measure-conformance.html#conformance-requirement-3-13))
* **Applied**: Enable QMIG to Handle Population-based Measures ([FHIR-42898](https://jira.hl7.org/browse/FHIR-42898))([Applied here](measure-conformance.html#conformance-requirement-3-8)), and ([here](measure-conformance.html#proportion-measures))
* **Applied**: Allow for use of multiple expressions in a population ([FHIR-42907](https://jira.hl7.org/browse/FHIR-42907)) 
* **Applied**: Level of Precision/Rounding and Unit of Measure ([FHIR-42908](https://jira.hl7.org/browse/FHIR-42908))([Applied here](StructureDefinition-computable-measure-cqfm.html)), and ([here](StructureDefinition-cqfm-scoringPrecision.html))
* **Applied**: Add support for measure manifests in the quality program profile ([FHIR-42920](https://jira.hl7.org/browse/FHIR-42920))
* **Applied**: Consider requiring the use of a SignatureLevel higher than none ([FHIR-42922](https://jira.hl7.org/browse/FHIR-42922))([Applied here](using-cql.html#translation-to-elm)), ([here](https://hl7.org/fhir/us/cqfmeasures/2024May/using-cql.html#specifying-options)), and ([here](https://hl7.org/fhir/us/cqfmeasures/2024May/using-cql.html#elm-suitability))
* **Applied**: Does improvementNotation field need to allow for additional guidance? ([FHIR-42976](https://jira.hl7.org/browse/FHIR-42976))([Applied here](index.html)), and ([here](StructureDefinition-cqfm-improvementNotation.html))
* **Applied**: Draft 2018 should be Active 2023 ([FHIR-43039](https://jira.hl7.org/browse/FHIR-43039)) Applied to numerous json files throughout IG in profiles and vocabulary
* **Applied**: Correct invalid json in StructureDefinition-cqfm-fhirQueryPattern.json ([FHIR-43086](https://jira.hl7.org/browse/FHIR-43086))
* **Applied**: Allow multiple quality programs and bind value set as example ([FHIR-43320](https://jira.hl7.org/browse/FHIR-43320))([Applied here](StructureDefinition-publishable-measure-cqfm.html))
* **Applied**: Correct short description about appliesTo extension ([FHIR-43358](https://jira.hl7.org/browse/FHIR-43358))([Applied here](StructureDefinition-computable-measure-cqfm.html))

### STU4 Publication for FHIR R4 (v4.0.0)

* **Applied**: Provide an example of PI measure ([FHIR-27930](https://jira.hl7.org/browse/FHIR-27930))
* **Applied**: Correct context element to not limit to Library resources ([FHIR-36064](https://jira.hl7.org/browse/FHIR-36064))
* **Applied**: Clarify Ratio Measures using Measure Observations ([FHIR-39376](https://jira.hl7.org/browse/FHIR-39376))
* **Applied**: Use dQM in addition to eCQM ([FHIR-39457](https://jira.hl7.org/browse/FHIR-39457))
* **Applied**: Fix text/cql.identifier and link to CQL spec ([FHIR-39609](https://jira.hl7.org/browse/FHIR-39609))
* **Applied**: Update examples to use eCQM content repo templates for measure examples ([FHIR-39621](https://jira.hl7.org/browse/FHIR-39621))
* **Applied**: incorrect links ([FHIR-39726](https://jira.hl7.org/browse/FHIR-39726))
* **Applied**: Define profiles on Parameters to add constraints for OperationDefinition ([FHIR-39729](https://jira.hl7.org/browse/FHIR-39729))
* **Applied**: Correction to Conformance Requirement 3.1, #12 ([FHIR-39820](https://jira.hl7.org/browse/FHIR-39820))
* **Applied**: Question on Conformance Requirement 4.9( [FHIR-39821](https://jira.hl7.org/browse/FHIR-39821))
* **Applied**: Minor redundancy in wording ([FHIR-39908](https://jira.hl7.org/browse/FHIR-39908))
* **Applied**: Typo - Date Producers -> Data Producers ([FHIR-39936](https://jira.hl7.org/browse/FHIR-39936))
* **Applied**: Typo - prescritive -> prescriptive ([FHIR-39937](https://jira.hl7.org/browse/FHIR-39937))
* **Applied**: Update to purpose section ([FHIR-40024](https://jira.hl7.org/browse/FHIR-40024))
* **Applied**: Update audience language ([FHIR-40025](https://jira.hl7.org/browse/FHIR-40025))
* **Applied**: Update approach section ([FHIR-40026](https://jira.hl7.org/browse/FHIR-40026))
* **Applied**: Update to background section ([FHIR-40027](https://jira.hl7.org/browse/FHIR-40027))
* **Applied**: Update to CQL based HQMF Section ([FHIR-40028](https://jira.hl7.org/browse/FHIR-40028))
* **Applied**: Update to ratio measure calculation to mirror HQMF ([FHIR-40030](https://jira.hl7.org/browse/FHIR-40030))
* **Applied**: Remove QUICK from the acronyms list ([FHIR-40101](https://jira.hl7.org/browse/FHIR-40101))
* **Applied**: double quotes rendering issues in CQL libraries ([FHIR-40105](https://jira.hl7.org/browse/FHIR-40105))
* **Applied**: Remove text related to "Remove requirement related to code system order" issue ([FHIR-40106](https://jira.hl7.org/browse/FFHIR-40106))
* **Applied**: Description of appliesTo is not accurate ([FHIR-40107](https://jira.hl7.org/browse/FHIR-40107))
* **Applied**: broken hyperlinks ([FHIR-40188](https://jira.hl7.org/browse/FHIR-40188))
* **Applied**: No hyperlink for the reference to the HEDIS IG ([FHIR-40189](https://jira.hl7.org/browse/FHIR-40189))
* **Applied**: Dependency on VSAC NPM package ([FHIR-40207](https://jira.hl7.org/browse/FHIR-40207))
* **Applied**: Need more explanation about value set expansion profiles ([FHIR-40210](https://jira.hl7.org/browse/FHIR-40210))
* **Applied**: Distinguish terminology dependencies in the $package operator ([FHIR-40219](https://jira.hl7.org/browse/FHIR-40219))
* **Applied**: Return parameter of Measure/Library data-requirements should be a Library ([FHIR-40226](https://jira.hl7.org/browse/FHIR-40226))
* **Applied**: include-dependencies wording should clearly indicate intent ([FHIR-40231](https://jira.hl7.org/browse/FHIR-40231))
* **Applied**: Improve measure narrative ([FHIR-40237](https://jira.hl7.org/browse/FHIR-40237))
* **Applied**: provide guidance about measure guidance v. usage ([FHIR-40241](https://jira.hl7.org/browse/FHIR-40241))
* **Applied**: Mark the keyword element of PublishableValueSet as mustSupport ([FHIR-40358](https://jira.hl7.org/browse/FHIR-40358))
* **Applied**: Resolve binding for supplementalData.code ([FHIR-40385](https://jira.hl7.org/browse/FHIR-40385))
* **Applied**: Support specifying population level for supplemental data elements ([FHIR-40420](https://jira.hl7.org/browse/FHIR-40420))
* **Applied**: Correct bindings for supplementalData and aggregateMethod ([FHIR-40457](https://jira.hl7.org/browse/FHIR-40457))
* **Applied**: Surface translator version used in Libraries ([FHIR-40487](https://jira.hl7.org/browse/FHIR-40487))
* **Applied**: Add a date to artifactComment ([FHIR-40520](https://jira.hl7.org/browse/FHIR-40520))
* **Applied**: Quality Programs Code System and Value Set Need Updated ([FHIR-40562](https://jira.hl7.org/browse/FHIR-40562))
* **Applied**: Clarification Needed Regarding Allocation Extension ([FHIR-40590](https://jira.hl7.org/browse/FHIR-40590))
* **Applied**: Add evaluatedResource in a test case example ([FHIR-40681](https://jira.hl7.org/browse/FHIR-40681))
* **Applied**: Clarify $package when count=0 ([FHIR-40682](https://jira.hl7.org/browse/FHIR-40682))
* **Applied**: Consider relaxing statement about QI Core ([FHIR-40684](https://jira.hl7.org/browse/FHIR-40684))
* **Applied**: Discrepancy between Measure.type and Group.extension['cqfm-type'] ([FHIR-40697](https://jira.hl7.org/browse/FHIR-40697))
* **Applied**: Updates to measure narrative ([FHIR-40738](https://jira.hl7.org/browse/FHIR-40738))
* **Applied**: Support liquid template for measure narrative ([FHIR-40743](https://jira.hl7.org/browse/FHIR-40743))
* **Applied**: Add support for measure level guidance related to SDE and risk variables ([FHIR-40768](https://jira.hl7.org/browse/FHIR-40768))
* **Applied**: Update Example for Effective Data Requirements Library and Provide Narrative for Module Definition Libraries ([FHIR-40895](https://jira.hl7.org/browse/FHIR-40895))
* **Applied**: Measure Repository Approve operation should not call for update of endorser ([FHIR-41201](https://jira.hl7.org/browse/FHIR-41201))
* **Applied**: Add SearchParameter for ValueSet keyword ([FHIR-41449](https://jira.hl7.org/browse/FHIR-41449))
* **Applied**: Relax lastReviewDate and approvalDate cardinalities in publishable profiles ([FHIR-41507](https://jira.hl7.org/browse/FHIR-41507))

### STU4 Ballot for FHIR R4 (v4.0.0-ballot)

* **Applied**: Add a pertinence extension([FHIR-37826](https://jira.hl7.org/browse/FHIR-37826))
* **Applied**: Allow the fhirQueryPattern extension to be a superset of the data requirement([FHIR-39399](https://jira.hl7.org/browse/FHIR-39399))
* **Applied**: Characterize text search capabilities for a terminology service and repository service([FHIR-37528](https://jira.hl7.org/browse/FHIR-37528))
* **Applied**: Clarify guidance on SDE expression results([FHIR-38051](https://jira.hl7.org/browse/FHIR-38051))
* **Applied**: Use new template-based publishing mechanism([FHIR-25694](https://jira.hl7.org/browse/FHIR-25694))
* **Applied**: Update Cardinality for Composite Measure Profile's Stratification Applies To Extension([FHIR-39353](https://jira.hl7.org/browse/FHIR-39353))
* **Applied**: Clarify conformance related to patient-based CV measures([FHIR-39169](https://jira.hl7.org/browse/FHIR-39169))
* **Applied**: Support batch searches([FHIR-37537](https://jira.hl7.org/browse/FHIR-37537))
* **Applied**: Remove requirement related to code system order([FHIR-37681](https://jira.hl7.org/browse/FHIR-37681))
* **Applied**: Support missing information for hosted content([FHIR-38827](https://jira.hl7.org/browse/FHIR-38827))
* **Applied**: Provide guidance for hosted vs managed content([FHIR-38829](https://jira.hl7.org/browse/FHIR-38829))
* **Applied**: Measure terminology service must mark profile tags([FHIR-38830](https://jira.hl7.org/browse/FHIR-38830))
* **Applied**: PopulationBasis extension can be used on a population([FHIR-39311](https://jira.hl7.org/browse/FHIR-39311))
* **Applied**: QUICK Reference([FHIR-37542](https://jira.hl7.org/browse/FHIR-37542))
* **Applied**: Support keyword search for value sets([FHIR-37530](https://jira.hl7.org/browse/FHIR-37530))
* **Applied**: Add requirements to support maintenance of a quality program([FHIR-37506](https://jira.hl7.org/browse/FHIR-37506))
* **Applied**: Fix incorrect reference to text/cql.identifier([FHIR-38787](https://jira.hl7.org/browse/FHIR-38787))
* **Applied**: Snippet and link mismatch related to Supplemental Data Elements([FHIR-37548](https://jira.hl7.org/browse/FHIR-37548))
* **Applied**: Relaxed cardinality in Computable measure cqfm extension for 'cqfm-type' to 0..* from 0..1.  ([FHIR-40697](https://jira.hl7.org/browse/FHIR-40697))
* **Applied**: Relaxed introduction statement about QI Core  ([FHIR-40684](https://jira.hl7.org/browse/FHIR-40684))
* **Applied**: Fixed link for Colorectal Cancer Screening example  ([FHIR-39726](https://jira.hl7.org/browse/FHIR-39726))
* **Applied**: Clarified definition wording for usage element of Publishable Measure CQFM  ([FHIR-40241](https://jira.hl7.org/browse/FHIR-40241))
* **Applied**: Updated Quality Programs code system, value set and Structured Definition, cardinality of program slice to 0..1, binding to 'example', updated guidance.  ([FHIR-40562](https://jira.hl7.org/browse/FHIR-40562))
* **Applied**: Removed measure allocation extension and all references to it throughout  ([FHIR-40590](https://jira.hl7.org/browse/FHIR-40590))
* **Applied**: Added PI Measure example (no library) [FHIR-27930](https://jira.hl7.org/browse/FHIR-27930)


### STU3 Release for FHIR R4 (v3.0.0)

This release includes changes due to ballot reconciliation and connectathon testing. The following sections summarize the changes from the balloted version (v2.*0), followed by a detailed changes list of all changes applied.

#### Terminology Services Change Summary

##### Changes to the CQFMExecutableValueSet profile:

* Changed the warning extension from cqfm-usageWarning to valueset-warning (base extension)
* Changed the fixed value of the warning extension to discuss conformance only (moved guidance to the IG)
* Changed expansion contains elements to require a version unless the parameters element has a system-version for the system

##### Changes to the CQFMQualityProgram profile:

* Removed cqfm-activeOnly and cqfm-expansionUri extensions in favor of the more general cqfm-expansionParameters extension

##### Changes to the ValueSet/$expand operation:

* Clarified semantics of the manifest parameter
* Clarified semantics of the expansion parameter
* Changed includePreview parameter to includeDraft

##### Changes to the Measure Terminology Service:

* Added Expansion Rules to describe expected expansion behavior in the presence of a manifest
* Recommended support for useContext search parameters
* Recommended support for reference search parameters

###### Changes to align with FHIR publishing

* Added support for the `terminology` model of a server's capability statement
* Added support for batch operations for $validate-code
* Required support for `activeOnly` and `displayLanguage` in $validate-code
* Required support for `activeOnly`, `displayLanguage`, `limitedExpansion`, and `default-to-latest-version` parameters in $expand
* Recommended support for `includeDesignation`, `designation`, and `paging` parameters in $expand

##### Outstanding Questions

* Search by URL should return all versions with that URL, otherwise there is no way to get the list of versions for a given value set URL
* If searches return a SUBSETTED resource by default, should the server should allow the _summary=false parameter to request full resources?
* Given the `id` of a ValueSet is the OID, how can I retrieve specific versions of a ValueSet?
* How can I retrieve a list of available expansions for a given ValueSet URL?
* Can I use a GET to invoke $expand with both the url and valueSetVersion parameters? (Connectathon testing resulted in an error)

#### Measure Representation Change Summary

##### Changes to the CQFMMeasure profile:

* Required CQFMMeasure Library reference to be a CQFMLibrary
* Relaxed scoring, type, and improvementNotation cardinality

##### Changes to the CQFMComputableMeasure profile:

* Changed cardinality of group to 0..*
* Changed the representation of effective data requirements on a measure to use a contained module definition library, rather than extensions in the measure
* Added fhirQueryPattern extension to communicate FHIR queries
* Added isSelective extension to dataRequirement
* Added valueFilter extension to support additional filtering in dataRequirement
* Added constraints to enforce scoring, populationBasis, and improvementNotation be specified at the root or all groups, but not both
* Added constraints to enforce population criteria in groups based on the group scoring extension
* Required Library to be a CQFMComputableLibrary and all expressions to be text/cql-expression or -identifier

##### Added CQFMExecutableMeasure

* Required Library to be a CQFMExecutableLibrary and all expressions to be text/cql-identifier

##### Changes to measure repository service:

* Removed the bundle-based packaging profiles in favor of artifact-based profiles to ensure artifact packaging can use paging when artifact packages contain a large number of components
* Added support for advertising CQL version support

##### Changes to measure authoring:

* Allowed any number of models to be referenced, rather than requiring one and only one reference to QICore
* Recommended not disabling method invocation to allow fluent functions to be used
* Added support for mixed-basis ratio measure
* Added ability to associated stratifiers with specific populations
* Added the ability to specify scoringUnit for a measure
* Added composite scoring code

#### Detailed Change Lists by Impact

##### Non-Compatible Changes

* [**FHIR-36156**](https://jira.hl7.org/browse/FHIR-36156): Required scoring, populationBasis, and improvementNotation to be specified at the root or on all groups, but not both
* [**FHIR-33975**](https://jira.hl7.org/browse/FHIR-33975): Changed executable value set to use the warning extension from the base specification
* [**FHIR-33971**](https://jira.hl7.org/browse/FHIR-33971): Restricted the use of the content element in a quality program
* [**FHIR-33178**](https://jira.hl7.org/browse/FHIR-33178): Required CQFMMeasure library reference to be a CQFMLibrary
* [**FHIR-32748**](https://jira.hl7.org/browse/FHIR-32748): Changed cardinality of group to 0..*
* [**FHIR-32594**](https://jira.hl7.org/browse/FHIR-32594): Changed the representation of expansion parameters to use a contained parameters resource rather than specific extensions per parameter
* [**FHIR-32593**](https://jira.hl7.org/browse/FHIR-32593): Changed the representation of effective data requirements on a measure to use a contained module definition library, rather than extensions in the measure
* [**FHIR-30079**](https://jira.hl7.org/browse/FHIR-30079): Removed the bundle-based packaging profiles in favor of artifact-based profiles to ensure that artifact packaging can use paging when artifact packages contain a large number of components

##### Compatible, Substantive Changes

* [**FHIR-36304**](https://jira.hl7.org/browse/FHIR-36304): Added CQFMExecutableMeasure profile to separate computable/executable concerns of a measure
* [**FHIR-34290**](https://jira.hl7.org/browse/FHIR-34290): Added capabilities to the measure terminology service to align with publishing terminology service capabilities
* [**FHIR-33970**](https://jira.hl7.org/browse/FHIR-33970): Added searching by useContext
* [**FHIR-33968**](https://jira.hl7.org/browse/FHIR-33968): Added searching for valuesets by artifacts that reference the value set
* [**FHIR-33458**](https://jira.hl7.org/browse/FHIR-33458): Added the fhirQueryPattern extension to support representing the FHIR query for a given data requirement
* [**FHIR-33045**](https://jira.hl7.org/browse/FHIR-33045): Added the ability to represent a mixed-basis population ratio measure (i.e. a ratio between encounters and procedures)
* [**FHIR-32970**](https://jira.hl7.org/browse/FHIR-32970): Relaxed conformance requirements on the use of QI Core from SHALL to SHOULD, to allow any FHIR IG(s) to be used for measure development
* [**FHIR-32969**](https://jira.hl7.org/browse/FHIR-32969): Added derivedFrom slice to support identifying previous versions of a measure
* [**FHIR-32808**](https://jira.hl7.org/browse/FHIR-32808): Added an invariant to ensure system-version is unambiguously communicated for all the codes in an expansion
* [**FHIR-32686**](https://jira.hl7.org/browse/FHIR-32686): Added an isSelective extension to support identifying "selective" data requirements (i.e. criteria that are positively indicative and likely to be selective of initial population membership)
* [**FHIR-32675**](https://jira.hl7.org/browse/FHIR-32675): Added the ability for a FHIR server to advertise the versions of CQL it supports
* [**FHIR-32671**](https://jira.hl7.org/browse/FHIR-32671): Added the ability to specify CQLOptions using a parameters resource
* [**FHIR-32668**](https://jira.hl7.org/browse/FHIR-32668): Added conformance expectations and guidance for specifying the version of CQL/ELM content in a library
* [**FHIR-32372**](https://jira.hl7.org/browse/FHIR-32372): Added a valueFilter extension to support representing additional filtering criteria in a data requirement
* [**FHIR-32334**](https://jira.hl7.org/browse/FHIR-32334): Added defaultValue extension to support representing default values for parameters
* [**FHIR-32231**](https://jira.hl7.org/browse/FHIR-32231): Updated measure narrative generation to display logic items in alphabetical order
* [**FHIR-31921**](https://jira.hl7.org/browse/FHIR-31921): Changed "preview" parameter in valueSet$expand operation to "includeDraft"
* [**FHIR-31680**](https://jira.hl7.org/browse/FHIR-31680): Added the ability to associated stratifiers with specific populations
* [**FHIR-31624**](https://jira.hl7.org/browse/FHIR-31624): Corrected all-or-none composite measure calculation formulas
* [**FHIR-31409**](https://jira.hl7.org/browse/FHIR-31409): Added quality domain and meaningful measure area to be specified for measures in a quality program
* [**FHIR-30875**](https://jira.hl7.org/browse/FHIR-30875): Added measure repository service capability statement and description
* [**FHIR-30874**](https://jira.hl7.org/browse/FHIR-30874): Added measure terminology service capability statement and description
* [**FHIR-30873**](https://jira.hl7.org/browse/FHIR-30873): Added support for composite measures both within and across FHIR Measure resources
* [**FHIR-30770**](https://jira.hl7.org/browse/FHIR-30770): Added a ModelDefinition profile to support the use of FHIR Library resources containing CQL ModelInfo content
* [**FHIR-30763**](https://jira.hl7.org/browse/FHIR-30763): Added composite code to the scoring code system
* [**FHIR-30569**](https://jira.hl7.org/browse/FHIR-30569): Added conformance requirements for the use of FHIR Library resources containing CQL content
* [**FHIR-30506**](https://jira.hl7.org/browse/FHIR-30506): Added the ability to specify the scoringUnit of a measure
* [**FHIR-30395**](https://jira.hl7.org/browse/FHIR-30395): Added slices for version-independent, version-specific, short-name, publisher, and endorser identifiers for measures
* [**FHIR-30394**](https://jira.hl7.org/browse/FHIR-30394): Added a ComputableMeasure profile to represent the formal computation aspects common to all quality measures, regardless of the scoring method
* [**FHIR-28338**](https://jira.hl7.org/browse/FHIR-28338): Added criteriaReference extension to the Ratio measure profile to support dual initial populations
* [**FHIR-27878**](https://jira.hl7.org/browse/FHIR-27878): Relaxed conformance requirements on stratifier criteria to allow the use of codes and paths to elements
* [**FHIR-27795**](https://jira.hl7.org/browse/FHIR-27795): Added inputParameters extension to support identifying the input parameters for a test case
* [**FHIR-21107**](https://jira.hl7.org/browse/FHIR-21107): Added conformance requirement to support composite measure representation

##### Non-substantive Changes

* [**FHIR-34882**](https://jira.hl7.org/browse/FHIR-34882): Added a data repository role to the quality reporting sequence diagram to make clear the separation between reporting capabilities and data repository capabilities
* [**FHIR-34197**](https://jira.hl7.org/browse/FHIR-34197): Changed guidance on the use of DisableMethodInvocation to ensure fluent functions can be used in quality measures going forward
* [**FHIR-33992**](https://jira.hl7.org/browse/FHIR-33992): Corrected broken hyperlink
* [**FHIR-33967**](https://jira.hl7.org/browse/FHIR-33967): Clarified behavior of expansions when expansion parameters are specified in both the expand operation and the manifest used
* [**FHIR-33966**](https://jira.hl7.org/browse/FHIR-33966): Clarified conformance requirements versus usage guidance in the executable value set profile
* [**FHIR-33016**](https://jira.hl7.org/browse/FHIR-33016): Added guidance on avoiding the use of direct reference codes for UCUM units
* [**FHIR-32884**](https://jira.hl7.org/browse/FHIR-32884): Corrected headings throughout
* [**FHIR-32747**](https://jira.hl7.org/browse/FHIR-32747): Corrected typographical error
* [**FHIR-32746**](https://jira.hl7.org/browse/FHIR-32746): Corrected typographical error
* [**FHIR-32745**](https://jira.hl7.org/browse/FHIR-32745): Corrected typographical error
* [**FHIR-32744**](https://jira.hl7.org/browse/FHIR-32744): Validated examples conform to expected profiles
* [**FHIR-32742**](https://jira.hl7.org/browse/FHIR-32742): Clarified documentation of the use of value sets during the authoring phase of the content management lifecycle
* [**FHIR-32741**](https://jira.hl7.org/browse/FHIR-32741): Corrected typographical error
* [**FHIR-32740**](https://jira.hl7.org/browse/FHIR-32740): Clarified that the measure repository services are represented with a focus on measures, but conceptually are broadly applicable to other types of knowledge artifacts
* [**FHIR-32739**](https://jira.hl7.org/browse/FHIR-32739): Clarified that the measure terminology service is represented with a focus on measures, but conceptually is broadly applicable to other types of knowledge artifacts
* [**FHIR-32738**](https://jira.hl7.org/browse/FHIR-32738): Added an introductory description for the quality reporting sequence diagram
* [**FHIR-32737**](https://jira.hl7.org/browse/FHIR-32737): Clarified quality program examples
* [**FHIR-32736**](https://jira.hl7.org/browse/FHIR-32736): Clarified quality program documentation
* [**FHIR-32735**](https://jira.hl7.org/browse/FHIR-32735): Clarified measure implementation as the focus of capabilities supported by this IG
* [**FHIR-32734**](https://jira.hl7.org/browse/FHIR-32734): Fixed typographical error
* [**FHIR-32733**](https://jira.hl7.org/browse/FHIR-32733): Clarified definition of a quality measure in the IG introduction
* [**FHIR-32732**](https://jira.hl7.org/browse/FHIR-32732): Clarified the metric development step in the quality improvement ecosystem discussion
* [**FHIR-32731**](https://jira.hl7.org/browse/FHIR-32731): Added registries as a stakeholder in the quality improvement ecosystem
* [**FHIR-32730**](https://jira.hl7.org/browse/FHIR-32730): Added internal quality improvement initiatives as a use case in the quality improvement ecosystem discussion
* [**FHIR-32729**](https://jira.hl7.org/browse/FHIR-32729): Clarified that payers are not primary developers of clinical guidelines
* [**FHIR-32728**](https://jira.hl7.org/browse/FHIR-32728): Clarified that improvement of clinical care is the focus of the quality improvement ecosystem
* [**FHIR-32727**](https://jira.hl7.org/browse/FHIR-32727): Clarified cyclic nature of the quality improvement ecosystem
* [**FHIR-32726**](https://jira.hl7.org/browse/FHIR-32726): Added internal quality improvement initiatives as a potential use case in the quality improvement ecosystem discussion
* [**FHIR-32725**](https://jira.hl7.org/browse/FHIR-32725): Highlighted the role of clinician judgement in the quality improvement ecosystem discussion
* [**FHIR-32722**](https://jira.hl7.org/browse/FHIR-32722): Added additional examples of stakeholders to the quality improvement ecosystem discussion
* [**FHIR-32688**](https://jira.hl7.org/browse/FHIR-32688): Noted that multiple versions of the same code system may be used in a single $expand
* [**FHIR-32687**](https://jira.hl7.org/browse/FHIR-32687): Clarified that expansion identifiers are server-specific
* [**FHIR-32651**](https://jira.hl7.org/browse/FHIR-32651): Added examples of expansions given the use of a manifest parameter
* [**FHIR-32596**](https://jira.hl7.org/browse/FHIR-32596): Added Must Support documentation
* [**FHIR-32199**](https://jira.hl7.org/browse/FHIR-32199): Corrected layout issue
* [**FHIR-32079**](https://jira.hl7.org/browse/FHIR-32079): Added discussion about referencing any FHIR type, as opposed to only FHIR types profiled by QI Core
* [**FHIR-31942**](https://jira.hl7.org/browse/FHIR-31942): Fixed a typographical error
* [**FHIR-31941**](https://jira.hl7.org/browse/FHIR-31941): Clarified description of Conformance Requirement 3.15
* [**FHIR-31940**](https://jira.hl7.org/browse/FHIR-31940): Fixed a typographical error
* [**FHIR-31592**](https://jira.hl7.org/browse/FHIR-31592): Clarified description of population criteria in the population scoring algorithm diagrams
* [**FHIR-30764**](https://jira.hl7.org/browse/FHIR-30764): Added trial-use note seeking feedback on the usefulness of a "Measure Source" metadata attribute
* [**FHIR-30401**](https://jira.hl7.org/browse/FHIR-30401): Added discussion of the use of Group resource to characterize attribution models, such as DaVinci Attribution (ATR)
* [**FHIR-29649**](https://jira.hl7.org/browse/FHIR-29649): Duplicate of 28239
* [**FHIR-28303**](https://jira.hl7.org/browse/FHIR-28303): Added mapping from V3 Aggregate Method to FHIR Aggregate Method
* [**FHIR-28302**](https://jira.hl7.org/browse/FHIR-28302): Added mapping from V3 Composite Measure Scoring to FHIR Composite Measure Scoring
* [**FHIR-28301**](https://jira.hl7.org/browse/FHIR-28301): Added mapping from V3 Measure Scoring to FHIR Measure Scoring
* [**FHIR-28300**](https://jira.hl7.org/browse/FHIR-28300): Added mapping from V3 Measure Types to FHIR Measure Types
* [**FHIR-28290**](https://jira.hl7.org/browse/FHIR-28290): Clarified the definition of population basis
* [**FHIR-28288**](https://jira.hl7.org/browse/FHIR-28288): Updated examples to use "citation" related artifact code, rather than "documentation" when they were citations of references
* [**FHIR-28239**](https://jira.hl7.org/browse/FHIR-28239): Corrected cardinality of CQFMMeasure.profile meta constraint
* [**FHIR-28238**](https://jira.hl7.org/browse/FHIR-28238): Corrected cardinality of CQFMLibrary.profile meta constraint
* [**FHIR-28210**](https://jira.hl7.org/browse/FHIR-28210): Corrected description of EXM146 as an encounter-based measure
* [**FHIR-28206**](https://jira.hl7.org/browse/FHIR-28206): Updated glossary terms
* [**FHIR-26331**](https://jira.hl7.org/browse/FHIR-26331): Corrected breadcrumbs display throughout the IG
* [**FHIR-26329**](https://jira.hl7.org/browse/FHIR-26329): Updated the IG to use the standard HL7 FHIR IG template

### STU3 Ballot for FHIR R4 (v2.*0)

This ballot release introduces support for composite measures, and adds descriptions of a Measure Terminology Service and a Measure Repository in support of authoring, distributing, and evaluating quality measures.

* **Applied**:conformance requirement 1 does not mention composite measures. Should it? ([FHIR-21107](https://jira.hl7.org/browse/FHIR-21107))
* **Applied**:Need to clarify how measure evaluation parameters are specified in a test case ([FHIR-27795](https://jira.hl7.org/browse/FHIR-27795))
* **Applied**:Permit stratifier expression to have any type (Conformance requirement 15) ([FHIR-27878](https://jira.hl7.org/browse/FHIR-27878))
* **Applied**:Glossary population criteria entries are inconsistent with population code system ([FHIR-28206](https://jira.hl7.org/browse/FHIR-28206))
* **Applied**:Example measure 146 is incorrectly described as "patient-based" ([FHIR-28210](https://jira.hl7.org/browse/FHIR-28210))
* **Applied**:CQFM Library has incorrect cardinality for profile constraint ([FHIR-28238](https://jira.hl7.org/browse/FHIR-28238))
* **Applied**:CQFMMeasure profile has incorrect cardinality for profile constraint ([FHIR-28239](https://jira.hl7.org/browse/FHIR-28239))
* **Applied**:Possible issue with related artifact example ([FHIR-28288](https://jira.hl7.org/browse/FHIR-28288))
* **Applied**:PopulationBasis definition ([FHIR-28290](https://jira.hl7.org/browse/FHIR-28290))
* **Applied**:Measure Type valueset needs a concept map to the V3 codes ([FHIR-28300](https://jira.hl7.org/browse/FHIR-28300))
* **Applied**:Measure scoring value set needs a concept map from V3 ([FHIR-28301](https://jira.hl7.org/browse/FHIR-28301))
* **Applied**:Composite Measure Scoring needs a mapping to V3 concepts ([FHIR-28302](https://jira.hl7.org/browse/FHIR-28302))
* **Applied**:Aggregate method needs a mapping to HL7 V3 concepts ([FHIR-28303](https://jira.hl7.org/browse/FHIR-28303))
* **Applied**:Ratio measure profile ([FHIR-28338](https://jira.hl7.org/browse/FHIR-28338))
* **Applied**:Cardinality of Measure.meta.profile ([FHIR-29649](https://jira.hl7.org/browse/FHIR-29649))
* **Applied**:Issues with Packaging and Bundle profiles ([FHIR-30079](https://jira.hl7.org/browse/FHIR-30079))
* **Applied**:Define a computable measure profile ([FHIR-30394](https://jira.hl7.org/browse/FHIR-30394))
* **Applied**:Add identifier slices for shortname, publisher, and endorser ([FHIR-30395](https://jira.hl7.org/browse/FHIR-30395))
* **Applied**:Add attribution model identifier to quality program ([FHIR-30401](https://jira.hl7.org/browse/FHIR-30401))
* **Applied**:Support specification of scoringUnit ([FHIR-30506](https://jira.hl7.org/browse/FHIR-30506))
* **Applied**:Conformance requirements for CQL Library resource usage ([FHIR-30569](https://jira.hl7.org/browse/FHIR-30569))
* **Resolved - No Change Required**:Support authoring concerns for inactive value set codes ([FHIR-30573](https://jira.hl7.org/browse/FHIR-30573))
* **Resolved - Change Required**:Move the "composite" code from Measure Type to Measure Scoring ([FHIR-30763](https://jira.hl7.org/browse/FHIR-30763))
* **Resolved - Change Required**:Allow the specification of "intended data source" ([FHIR-30764](https://jira.hl7.org/browse/FHIR-30764))
* **Applied**:Add a profile for FHIR Model Info Library ([FHIR-30770](https://jira.hl7.org/browse/FHIR-30770))
* **Applied**:Add composite measure support and profiles ([FHIR-30873](https://jira.hl7.org/browse/FHIR-30873))
* **Applied**:Support measure terminology service ([FHIR-30874](https://jira.hl7.org/browse/FHIR-30874))
* **Applied**:Create measure repository service ([FHIR-30875](https://jira.hl7.org/browse/FHIR-30875))
* **Applied**:Support specifying quality domain and meaningful measure area in quality programs ([FHIR-31409](https://jira.hl7.org/browse/FHIR-31409))
* **Applied**:Modify diagram text to "Population Relationships" Figures 3.2, 3.3, 3.4, 3.5 ([FHIR-31592](https://jira.hl7.org/browse/FHIR-31592))
* **Applied**:All-or-nothing scoring should use "implies" ([FHIR-31624](https://jira.hl7.org/browse/FHIR-31624))

### STU2 Release for FHIR R4 (v2.0.0)

This release includes changes applied as a result of ballot feedback as well as connectathon testing.

#### Non-compatible

* [FHIR-26534](https://jira.hl7.org/browse/FHIR-26534) - Use of `text/cql.identifier` media type for CQL expression references
* [FHIR-21994](https://jira.hl7.org/browse/FHIR-21994) - Use of namespaces with CQL libraries
* [FHIR-25285](https://jira.hl7.org/browse/FHIR-25285) - Changed definition term extension to preserve association of term and definition
* [FHIR-21998](https://jira.hl7.org/browse/FHIR-21998) - Disallowed stratification of ratio measures
* [FHIR-21996](https://jira.hl7.org/browse/FHIR-21996) - Required use of `called` clause for included libraries

#### Compatible, Substantive
* Corrections to proportion, ratio, and continuous-variable measure profiles
* Added profile layering for shareable, computable, publishable, and executable capabilities
* Added profiles and guidance for packaging, distribution, and testing
* Clarified risk adjustment conformance requirements
* Added support for identifying packaging, testing, and authoring tooling
* Library and measure resources require narrative and profile declarations
* Added publicationStatus and publicationDate extensions for relatedArtifact
* Clarified calculation flow diagrams for all measure types
* Clarified relationship of FHIR terminology to V3 measure terminology
* Added support for defining and referencing measure programs

#### Non-substantive
* Numerous clarifications and corrections throughout

### STU2 Ballot for FHIR R4 (v**0)

This ballot is a minimal update to the STU1 ballot to address the following items:
* Updated to use FHIR R4
* Added artifact packaging guidance and conformance requirements

### STU1 Release for FHIR STU3 (v*0.0)

* Clarifications and fixes throughout

#### Compatible, substantive
* 21181	*.1 relationships
* 21684	Risk adjustment naming conventions? - QM #15
* 21156	Clarify where the risk adjustment variables are stored in the fhir document.
* 21155	Inconsistent conformance requirements (16 and 17).
* 21986	Denominator exceptions in differential table? - QM #136
* 21988	Supporting measurement period without specifying year? - QM #137
* 21145	conformance requirement 13 states that a continuous variable measure SHALL have a criteriaReference extension but the profile has this extension as 0..1 rather than *.* Should the profile have *.1?
* 21187	consider for all slices that are not "measure observation" to make cqfm-criteriaReference and cqfm-aggregateMethod 0..0
* 21183	initial population slice for proportion measure is *.2. Should be *.* (*.2 is for ratio measure).
* 21192	EXM55 library references
* 21178	Does it make sense for the profile itself to specify usage for criteriaReference and aggregateMethod (measure observations)
* 21191	consider slicing content and including the required contentType (text/cql) and optional ones (application/elm+xml, application/elm+json)
* 21984	Require use of specific model? - QM #135
* 21158	Should this be a conformance requirement?
* 21188	consider making cqfm-criteriaReference and cqfm-aggregateMethod *.1 for "measure observation" slice.
* 21186	measure population exclusion slice should be 0..* population.code for this slice should still be required (*.1)
* 21182	should population.identifier, supplementalData.identifier and stratification.identifier be required?
* 21185	missing denominator exception slice
* 21173	This statement uses SHOULD NOT language but the conformance requirement is SHALL NOT. Recommend rewording for clarity.
* 21146	should conformance requirement 13 require an aggregateMethod extension on the measure observation criteria? It
 currently does not.

#### Non-compatible
* 21998	Restrict stratification of ratio measure - QM #142
* 21994	Library namespace guidance - QM #140
* 21056	Disallow the use of strings for membership testing in value sets and code systems
* 21996	Library alias guidance - QM #141

### STU1 Ballot for FHIR STU3 (v0.*0)

STU1 Ballot for FHIR STU3 Version


---

File: repos/HL7_SLASH_cqf-measures/input/pages/composite-measures.md


{:toc}

{: #composite-measures}

Composite measures make use of multiple component measures to produce a combined score. In the most general case, a composite measure is akin to a continuous variable measure, where the measure observation for each population member is some combination of the individual's component measure scores. However, the calculation logic involved is detailed, and a higher-level representation of the most common composite measure calculation approaches enables a much simpler representation to work with and understand. Note that composite measures must be constructed from existing component measures or groups. Composites do not introduce any new measure logic beyond the composite score calculation. If a composite needs to introduce new logic, a new component measure or group must be developed that can then be included in the composite.

**Conformance Requirement 5.1 (Composite Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-1)
{: #conformance-requirement-5-1}
    1. Composite Measures SHALL conform to the CQFMCompositeMeasure profile
    2. Composite Measures SHALL specify a composite measure scoring method

The example illustrates the use of these elements of a measure to specify a composite measure:

```xml
<scoring>
   <coding>
      <system value="http://terminology.hl7.org/CodeSystem/measure-scoring"/>
      <code value="composite"/>
      <display value="Composite"/>
   </coding>
</scoring>
<compositeScoring>
   <coding>
      <system value="http://terminology.hl7.org/CodeSystem/composite-measure-scoring"/>
      <code value="all-or-nothing"/>
      <display value="All-or-nothing"/>
   </coding>
</compositeScoring>
 ```

Snippet 22: Sample Risk Adjustment Variable from TestRiskAdj eCQM.xml

Broadly speaking, composite measure scoring methods fall into two categories:
{: #conformance-requirement-component-based}
1.	Individual-Based: Scoring methods that operate at the individual level by combining members of component populations and then calculating the measure score using standard measure scoring techniques on the combined populations. Examples include all-or-nothing and opportunity scoring.
    1.	A note regarding improvement notation – when mixing increase and decrease improvement notations for individual based composite scoring mechanisms, those component measures that do not match the improvement notation of the composite measure will need to make an adjustment in polarity.  For example, in an individual based composite with an improvement notation of increase, components with a decrease improvement notation will have their population criteria reversed (i.e. the absence of a patient in the component numerator would represent fulfillment).  
2.	Component-Based: Scoring methods that operate at the population level by combining the summary scores of component measures. Examples include subject level linear and weighted scoring.
    1.	A note regarding improvement notation – when mixing increase and decrease notations for component base scoring mechanisms, those component measures that do not match the improvement notation of the composite measure will need to make an adjustment in polarity.  For example, in a component-based composite with an improvement notation of increase, those with a decrease notation will have their calculations converted by applying a 1 – equation approach.  This will be demonstrated in [Section 5.5](#improvement-notation) below.


Architecturally, environments that are already capable of calculating measures using the measure scoring methods already described in this implementation guide can readily consume composite measure specifications that use the first approach (individual-based) but would require additional support in order to calculate component-based measures. Specifically, completely generic support for component-based calculation methods would require that an environment be able to evaluate CQL logic in the Population context. However, by restricting composite calculation support to those methods specified by this implementation guide, environments can calculate composites by operating on the results of individual-level scores. It is important to note that each scoring method should work for any subject for which the measure is developed - e.g., patient or encounter.

To illustrate the different composite scoring methods, an example Annual Wellness assessment measure for Eligible Clinicians (EC) is used. Note that although the scoring methods are described in terms applicable to ECs, the concepts apply in general to composites that could be built for any setting.

### All-or-nothing Scoring
{: #all-or-nothing-scoring}

**Conformance Requirement 5.2 (All-or-nothing Scoring):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-2)
{: #conformance-requirement-5-2}
    1. Calculation logic for all-or-nothing composite measures SHALL be functionally equivalent to the calculation formulas defined in this section.
    2. Calculation logic for all-or-nothing composite measures SHOULD be written in the same way as the calculation formulas defined in this section.
    3. Narrative descriptions of population criteria for all-or-nothing composite measures SHOULD include the narrative descriptions of the corresponding population criteria for each component measure.

All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator.


<details open>
<summary>
<b>Figure 5-1. All-or-none method</b>

</summary>

<i>Interpretation:</i> For each Eligible Clinician (EC), the percentage of patients who received all preventive services for which they were eligible within the specified time interval. Gives EC numerator credit only if a patient meets the criteria for all of the components of the measure for which the patient is eligible. <br>
<i>Example:</i> X% of an EC’s patients received all preventive services for which they were eligible.


{% include img.html img="composite-measure-all-or-nothing-scoring.png" %}

</details>

An example of an “All-or-nothing” scored composite measure has been included in [Preventive Care and Wellness (All-or-nothing)](Measure-PreventiveCareandWellnessAllOrNothingComposite.html). This measure specifies the composite, and references the component measures using `relatedArtifact` elements with a type of `composed-of` as shown in Snippet 23:

```xml
<relatedArtifact>
   <type value="composed-of"/>
   <display value="Breast Cancer Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/BCSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <type value="composed-of"/>
   <display value="High Blood Pressure Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/HBPComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <type value="composed-of"/>
   <display value="Colorectal Cancer Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/CCSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <type value="composed-of"/>
   <display value="Pneumococcal Vaccination Status"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/PVSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-groupId">
      <valueString value="group-1"/>
   </extension>
   <type value="composed-of"/>
   <display value="Tobacco Use Screening and Cessation, Group 1"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/TSCComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-groupId">
      <valueString value="group-2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Tobacco Use Screening and Cessation, Group 2"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/TSCComponent|0.0.001"/>
</relatedArtifact>
 ```

Snippet 23: Components of an example All-or-nothing scored composite measure from Preventive Care and Wellness (All-or-nothing).

Computationally, this method amounts to expressing each population criteria for the composite measure as the union (logical ‘or’ for patient-based measures) of the respective population criteria for each component measure, except for the numerator, which is expressed as the intersection (logical ‘and’ for patient-based measures) of the numerators of the component measures. Note that in this requires that an individual is considered for the numerator only if they meet the denominator, which is accomplished using an `implies` operator in the component measure numerator membership criteria.

Formally, this means the population criteria for the composite measure are expressed in terms of the population criteria for each component measure, as in:

```cql
define "Initial Population":
  ComponentMeasure1."Initial Population"
    or ComponentMeasure2."Initial Population"
    or ComponentMeasure3"."Initial Population"

define "Denominator":
  ComponentMeasure1."Denominator"
    or ComponentMeasure2."Denominator"
    or ComponentMeasure3."Denominator"

define "Denominator Exclusion":
  ComponentMeasure1."Denominator Exclusion"
    or ComponentMeasure2."Denominator Exclusion"
    or ComponentMeasure3."Denominator Exclusion"

define "Denominator Exception":
  ComponentMeasure1."Denominator Exception"
    or ComponentMeasure2."Denominator Exception"
    or ComponentMeasure3."Denominator Exception"

define "ComponentMeasure1 Numerator Membership": // Repeat for each component
  ComponentMeasure1."Denominator Membership"
   implies ComponentMeasure1."Numerator Membership"

define "Numerator":
  "ComponentMeasure1 Numerator Membership"
    and not "ComponentMeasure2 Numerator Membership"
    and "ComponentMeasure3 Numerator Membership"

define "Numerator Exclusion":
  ComponentMeasure1."Numerator Exclusion"
    or ComponentMeasure2."Numerator Exclusion"
    or ComponentMeasure3."Numerator Exclusion"
```

Snippet 24: Formal criteria for a patient-based All-or-nothing composite measure

Consider this example of a composite that includes a breast cancer screening measure and a colorectal cancer screening measure. For an individual that is male, they are only eligible for the colorectal cancer screening measure, so the fact that they do not appear in the denominator or numerator of the breast cancer screening measure should not remove them from the numerator of the composite measure. Note that this approach is using component measures where the improvement notation for the component is that an increase in the score represents an improvement. If the improvement notation is decreasing for a component, its population criteria would be reversed (i.e. the absence of a patient in the component numerator would represent fulfillment). This will be shown in [Section 5.5](#improvement-notation) below.

*Note that `implies` is a logical operator within CQL. "X implies Y" roughly translates to narrative text as "if X is true, then Y must be as well"

Refer to the definition of ["implies" in CQL](https://cql.hl7.org/09-b-cqlreference.html#implies) for more information.

### Opportunity Scoring
{: opportunity-scoring}

**Conformance Requirement 5.3 (Opportunity Scoring):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-3)
{: #conformance-requirement-5-3}
    1. Calculation logic for opportunity composite measures SHALL be functionally equivalent to the calculation formulas defined in this section.
    2. Calculation logic for opportunity composite measures SHOULD be written in the same way as the calculation formulas defined in this section.
    3. Narrative descriptions of population criteria for opportunity composite measures SHOULD include the narrative descriptions of the corresponding population criteria for each component measure.

Opportunity scoring considers the appearance of a patient in a denominator of a component measure as an opportunity to provide a service, and the appearance of that patient in the numerator of each component as the fulfillment of that opportunity. This means that each component measure is considered a “case” in the composite population. The denominator is then the set of cases in which patients appeared in the denominator for the component measures, and so on for each population criteria. This allows the composite to then be calculated as a standard proportion measure where the basis for the population criteria is membership in the population for each component.

<details open>
<summary>
<b>Figure 5-2. Opportunity scoring method</b>

</summary>

<em>Interpretation:</em> For each Eligible Clinician (EC), the percentage of opportunities to provide preventive services that were completed.<br>

<em>Example:</em> X% of preventive service opportunities for the EC were completed.

{% include img.html img="composite-measure-opportunity-scoring.png" %}

</details>

Formally, this is done by describing a "service" for each component measure as illustrated in the following general logic:

```cql
define "Initial Population":
    ("Patient Record" P
        where ComponentMeasure1."Initial Population"
            return { service: 'Service 1' }
    )
        union ("Patient Record" P
            where ComponentMeasure2."Initial Population"
                return { service: 'Service 2' }
        )
        union ("Patient Record" P
            where ComponentMeasure3."Initial Population"
                return { service: 'Service 3' }
       )

define "Denominator":
    ("Patient Record" P
        where ComponentMeasure1."Denominator"
            return { service: 'Service 1' }
    )
        union ("Patient Record" P
            where ComponentMeasure2."Denominator"
                return { service: 'Service 2' }
        )
        union ("Patient Record" P
            where ComponentMeasure3."Denominator"
                return { service: 'Service 3' }
        )

define "Numerator":
    ("Patient Record" P
        where ComponentMeasure1."Numerator"
            return { service: 'Service 1' }
    )
        union ("Patient Record" P
            where ComponentMeasure2."Numerator"
                return { service: 'Service 2' }
        )
        union ("Patient Record" P
            where ComponentMeasure3."Numerator"
            return { service: 'Service 3' }
        )
```

Snippet 25: Formal criteria for a service-based opportunity composite measure

The populations in an opportunity composite are then lists of “services” the patient was eligible for (in the initial population and denominator) and received (in the numerator). The approach for populations not depicted here (denominator exclusion, denominator exception, and numerator exclusion) is analogous.

Note that this approach is using component measures where the improvement notation for the component is that an increase in the score represents an improvement. If the improvement notation is decreasing for a component, its population criteria would be reversed (i.e. the absence of a patient in the component numerator would represent fulfillment). This will be shown in [Section 5.5](#improvement-notation) below.

### Subject-level Linear Combination Scoring
{: subject-level-linear-combination-scoring}

**Conformance Requirement 5.4 (Subject-level Linear Combination Scoring):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-4)
{: #conformance-requirement-5-4}
    1. Calculation logic for subject-level linear combination composite measures SHALL be functionally equivalent to the calculation formulas defined in this section.
    2. Calculation logic for subject-level linear combination composite measures SHOULD be written in the same way as the calculation formulas defined in this section.
    3. Narrative descriptions of population criteria for subject-level linear combination composite measures SHOULD include the narrative descriptions of the corresponding population criteria for each component measure.

Subject-level linear combination scoring is modeled as a continuous variable measure that gives numerator credit for the proportion of patients in the numerators of composite measures.

<details open>
<summary>

<b>Figure 5-3. Subject-level linear combination method</b>

</summary>

<em>Interpretation:</em> For each Eligible Clinician (EC), the percentage of completed preventive services, which gives EC partial numerator credit for meeting the criteria for some but not all components of the measure.<br>

<em>Example:</em> On average, each patient was provided X% of services for which the patient was eligible.

{% include img.html img="composite-measure-patient-level-linear-combination-scoring.png" %}

</details>

Computationally, this method is a continuous variable measure using average, where the measure observation for an individual is the number of numerators of component measures in which that member appears, over the number of denominators of component measures in which that member appears. To express this in a continuous variable measure, use the average aggregate method in HQMF.

Formally, this is done by considering the membership test for each component measure as a 0 (if the patient is not in the population) or a 1 (if the patient is in the population) and adding the values for each component:

```cql
define "Is In Component 1 Denominator":
    ComponentMeasure1."Initial Population"
        and ComponentMeasure1."Denominator"
        and not ComponentMeasure1."Denominator Exclusion"
        and not (ComponentMeasure1."Denominator Exception"
          and not ComponentMeasure1."Numerator")

define "Is In Component 1 Numerator":
    ComponentMeasure1."Initial Population"
        and ComponentMeasure1."Denominator"
        and not ComponentMeasure1."Denominator Exclusion"
        and not ComponentMeasure1."Numerator Exclusion"

define "Is In Component 2 Denominator":
    ComponentMeasure2."Initial Population"
        and ComponentMeasure2."Denominator"
        and not ComponentMeasure2."Denominator Exclusion"
        and not (ComponentMeasure2."Denominator Exception"
          and not ComponentMeasure2."Numerator")

define "Is In Component 2 Numerator":
    ComponentMeasure2."Initial Population"
        and ComponentMeasure2."Denominator"
        and not ComponentMeasure2."Denominator Exclusion"
        and not ComponentMeasure2."Numerator Exclusion"
```

Snippet 26: Formal criteria for a service-based opportunity composite measure

With these definitions, we can then express the measure observation for each patient as a calculation of the proportion of measures in which they were in the numerator:

```cql
define "Denominator Score":
    ToScore("Is In Component 1 Denominator")
    + ToScore("Is In Component 2 Denominator")

define "Numerator Score":
    ToScore("Is In Component 1 Numerator")
    + ToScore("Is In Component 2 Numerator")

define function "Measure Observation"(patient "Patient Characteristic Birthdate"):
    "Numerator Score" / "Denominator Score"

define function "ToScore"(value Boolean):
    if value then 1 else 0
```

Snippet 27: Formal criteria for a service-based opportunity composite measure

And finally, the population criteria for the initial population is defined to return the patient record if the patient is in the initial population of any component measure; the measure population if the patient is in any component denominator; and the measure population exclusion if the patient is in all the denominator exclusions of the component measures:

```cql
define "Initial Population":
    "Patient Record" P
        where ComponentMeasure1."Initial Population"
            or ComponentMeasure2."Initial Population"

define "Measure Population":
    ComponentMeasure1."Denominator"
        or ComponentMeasure2."Denominator"

define "Measure Population Exclusion":
    ComponentMeasure1."Denominator Exclusion"
        and ComponentMeasure2."Denominator Exclusion"
```

Snippet 28: Formal criteria for a patient-based linear combination composite measure

Note that this approach is using component measures where the improvement notation for the component is that an increase in the score represents an improvement. If the improvement notation is decreasing for a component, its population criteria would be negated (i.e. the absence of a patient in the component numerator would represent fulfillment). This will be shown in [Section 5.5](#improvement-notation) below.

<div class="new-content">
Linear Combination scoring vs. Opportunity scoring
</div>

To better understand the difference between linear combination and opportunity scoring, consider the following table representing a population of 10 patients (A-J) scored against 10 measures.
For each patient in each measure, if the patient falls in the initial population or denominator, indicate whether the patient is in the numerator population or not (T/F). However, if  the patient did not fall in the initial population or denominator, indciate 'n/a'.

<style>
table, th, td {
  border: 1px solid;
}
th { background-color: #f5f2f0; }

</style>
| Value | Meaning                                                    |
| ----- | ---------------------------------------------------------- |
| T     | Patient is in numerator                                    |
| F     | Patient is not in numerator                                |
| n/a   | Patient is excluded from initial population or denominator |

|                                | A     | B      | C     | D     | E     | F     | G      | H     | I     | J     |
| ------------------------------ | ----- | ------ | ----- | ----- | ----- | ----- | ------ | ----- | ----- | ----- |
| Measure 1                      | T     | T      | T     | T     | F     | T     | T      | F     | T     | T     |
| Measure 2                      | T     | T      | T     | n/a   | F     | T     | n/a    | T     | F     | T     |
| Measure 3                      | T     | T      | T     | n/a   | T     | T     | n/a    | F     | T     | T     |
| Measure 4                      | F     | T      | T     | n/a   | T     | T     | n/a    | T     | n/a   | T     |
| Measure 5                      | F     | T      | T     | n/a   | T     | n/a   | n/a    | F     | n/a   | F     |
| Measure 6                      | T     | T      | F     | n/a   | T     | n/a   | n/a    | T     | n/a   | F     |
| Measure 7                      | n/a   | n/a    | n/a   | T     | T     | n/a   | T      | F     | n/a   | T     |
| Measure 8                      | F     | T      | T     | T     | T     | F     | T      | T     | n/a   | T     |
| Measure 9                      | F     | T      | F     | F     | F     | F     | T      | T     | T     | T     |
| Measure 10                     | T     | T      | T     | T     | F     | T     | T      | T     | T     | T     |
|                                |       |        |       |       |       |       |        |       |       |       |
| Patient % Score                | 55.6% | 100.0% | 77.8% | 80.0% | 60.0% | 71.4% | 100.0% | 60.0% | 80.0% | 80.0% |
|                                |       |        |       |       |       |       |        |       |       |       |
| <b>Overall - Subject Level Linear</b> | <b>76.5%</b> |        |       |       |       |       |        |       |       |       |
| <b>Overall - Opportunity </b>         | <b>74.7%</b> |        |       |       |       |       |        |       |       |

For each patient (i.e. each column A-J), calculate the <b>Patient % score</b> by dividing the total number of occurrences in a measure numerator by the total number of occurrences in the denominator (i.e. not 'n/a') across all measures. <br/>
To calculate the <b>overall subject level linear</b> score, simply calculate the average patient % score across the number of  patients (in this case, 764.8 / 10) <br/>
To calculate the <b>overall opportunity</b> score, divide the total number of patients in the numerator (i.e. 'T' values) across all measures by the total number of instances where the patient was not excluded from the initial population or denominator (i.e not 'n/a').
(In this case,  59 / 79)



### Weighted Scoring
{: weighted-scoring}

Weighted scoring combines component measure scores using a weighting factor for each component. In the special case that the weighting factor for each component measure is 1, this is also called component-level linear combination scoring.

Note that as discussed in the section on composite scoring methods, this method is a component-based composite measure scoring method, meaning that the calculation of the composite is performed on the population-level result of the component measures.

<details open>
<b>Figure 5-4. Component-level linear combination method</b>

<summary>

<em>Interpretation:</em> For each Eligible Clinician (EC), percentage of patients who received preventive services, which gives EC partial numerator credit for meeting the criteria for some but not all components of the measure. <br>

<em>Example:</em> On average, each preventive service was provided to X% of patients.
</summary>

{% include img.html img="composite-measure-component-level-linear-combination-scoring.png" %}

</details>

Computationally, this method is simply the weighted average of the component measure scores. In the simplest case where the weights are all 1, this method is simply the average score of the component measures. Note that these definitions are based on component measures whose improvement notation is an increase in the measure score. If any component measure has an improvement notation of decrease in score, the scoring for that measure needs to be adjusted using a 1- equation approach to ensure all improvement notations have the same polarity. This will be shown in [Section 5.5](#improvement-notation) below.

A "weighted" score composite measure specifies the weights of each component using the [weight](StructureDefinition-cqfm-weight.html) extension on each component measure, as in the example below:

```xml
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Breast Cancer Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/BCSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="High Blood Pressure Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/HBPComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Colorectal Cancer Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/CCSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Pneumococcal Vaccination Status"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/PVSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-groupId">
      <valueString value="group-1"/>
   </extension>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.1"/>
   </extension>
   <type value="composed-of"/>
   <display value="Tobacco Use Screening and Cessation, Group 1"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/TSCComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-groupId">
      <valueString value="group-2"/>
   </extension>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.1"/>
   </extension>
   <type value="composed-of"/>
   <display value="Tobacco Use Screening and Cessation, Group 2"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/TSCComponent|0.0.001"/>
</relatedArtifact>
 ```

Snippet 29: Weighted composite measure relatedArtifact elements

### Improvement Notation
{: #improvement-notation}

The examples below demonstrate calculations for composite measures containing components
with mixed improvement notations.

For component based scoring methods, consider the following example:

| Composite Components | Improvement Notation | Numerator Count | Denominator Count | Component Performance | Component Performance for Composite Calculation |
| -------------------- | -------------------- | --------------- | ----------------- | --------------------- | ------------------------------------------------ |
| | | | | Component Numerator Count/Component Denominator Count | Component Performance unless improvement notation is decrease, then 1-component performance |
|   Component A        |     Increase         |      80         |       100         |         0.8           |           0.8                          |
|   Component B        |     Increase         |      80         |       100         |         0.8           |           0.8                          |
|   Component C        |     Decrease         |      20         |       100         |         0.2           |           0.8                          |

((Comp A Numerator/Comp A Denominator)+(Comp B Numerator/Comp B Denominator)+(1-(Comp C Numerator/Comp C Denominator)))/3=Average Performance of components
((80/100)+(80/100)+(1-(20/100))/3= 0.8 (80%)

For individual level scoring methods, consider the following example:

| Composite Components | Improvement Notation | Numerator Count | Denominator Count | Population for Calculation |
| -------------------- | -------------------- | --------------- | ----------------- | -------------------------- |
|   Component A        |     Increase         |      80         |       100         |         80                 |
|   Component B        |     Increase         |      80         |       100         |         80                 |
|   Component C        |     Decrease         |      20         |       100         |         80*                |

 \* For component measures with an improvement notation of decrease, the absence of the patient in the numerator is considered

(Comp A Numerator+ Comp B Numerator+(Comp C Denominator-Comp C Numerator))/3=Average Performance of components
(80+80+(100-20))/3= 0.8 (80%)

### Measure Types
{: #measure-types}

**Conformance Requirement 5.5 (Composite Measure Scoring):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-5)
{: #conformance-requirement-5-5}
    1. For composite measures using Opportunity scoring
        a. The measure scoring method SHALL be Composite
        b. All component measures SHALL use Proportion or Ratio scoring
    2. For composite measures using All-or-nothing scoring
        a. The measure scoring method SHALL be Composite
        b. All component measures SHALL use Proportion or Ratio scoring
    3. For composite measures using Subject-level linear scoring
        a. The measure scoring method SHALL be Composite
        b. All component measures SHALL use Proportion, Ratio, or Continuous Variable Scoring
    4. For composite measures using Component-level scoring
        a. The measure scoring method SHALL be Composite
        b. All component measures SHALL use Proportion, Ratio, or Continuous Variable Scoring

For composite measures, the composite score calculation method specifies the measure scoring. The component measures in a composite can also be proportion, ratio, or continuous variable measures.

The following table summarizes the allowable measure scoring for each of the composite scoring methods:

|               Composite Scoring Method                | Scoring Method | Component Measure Scoring |
|:-----------------------------------------------------:|:----:|:----:|
|                      Opportunity                      | Composite | Proportion/Ratio |
|                    All-or-nothing                     | Composite | Proportion/Ratio |
|                Subject-level Linear                   | Composite | Proportion/Ratio/Continuous Variable |
|                    Component-level                    | Composite | Proportion/Ratio/Continuous Variable |

Note that these requirements are about ensuring that the population criteria expressions among the components use similar sets of population criteria. This means that all the components of a given composite measure don’t necessarily have to use the same scoring type, just that they have to have similar population criteria. For example, a Proportion composite may use a Proportion component and a Ratio component.

### Measure Basis
{: #measure-basis}

**Conformance Requirement 5.6 (Composite Measure Basis):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-6)
{: #conformance-requirement-5-6}
    1. All component measures used within a composite measure SHALL have the same measure subject type
    2. All component measures used within an individual-level composite measure SHALL use the same measure basis, except that
        a. Patient-based composite measures MAY reference non-patient-based components, but the scoring method
           will determine how non-patient-based components are included, typically by converting the component
           criteria to a boolean using an exists operation.
    3. Component measures of component-level composite measures MAY have the same measure basis

As with single measures, composite measures may be patient-based, or use some other element as the measure basis such as encounters or procedures. However, individual membership in each component measure of an individual-level composite must be able to be determined on the same basis. This means that when an individual-level composite includes non-individual-based components, criteria for those components must be converted to an individual membership test using an exists operation. Consider the example composites included in this implementation guide. When considering membership of an individual in the criteria of the encounter-based Tobacco Screening and Cessation component measure, the existence of encounters in each population criteria determine the membership of the individual in that criteria. In other words, the encounter-based component is "demoted" to a patient-based measure for inclusion in the composite.

### Stratification
{: #stratification}

**Conformance Requirement 5.7 (Composite Measure Stratification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-7)
{: #conformance-requirement-5-7}
    1. Stratifiers of components in a composite measure SHALL NOT be used to stratify the composite measure

Because composite measure scoring for individual-based composites effectively ignores component scores, stratifiers defined on component measures are not applicable to the composite measure score. As such, stratifiers are supported in composite measures, just as they are with non-composites, but stratifiers of the component measures are ignored.

### Multiple Populations
{: #multiple-populations}

**Conformance Requirement 5.8 (Composite Measure Population Groups):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-8)
{: #conformance-requirement-5-8}
    1. Component measures used in a composite SHOULD contain a single population group
    2. For component measures that contain multiple population groups, the composite measure SHALL specify the specific group to be used in the composite using the [groupId](StructureDefinition-cqfm-groupId) extension

To simplify expression and implementation of composite measures, all component measures used within a composite SHOULD have a single population group. In addition, the composite measure itself SHOULD only contain a single composite specification (using the _relatedArtifact_ elements of the Measure directly). Note that for ratio measures with two initial populations, the initial population would have to be constructed using the appropriate initial population from the component measures.

### Supplemental Data Elements and Risk Adjustment Variables
{: #supplemental-data-elements-and-risk-adjustment-variables}

**Conformance Requirement 5.9 (Composite Measure Supplemental Data Elements and Risk Adjustment Variables):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-9)
{: #conformance-requirement-5-9}
    1. Composite measure results SHALL include supplemental data elements and risk adjustment variables from all component measures, as well as those defined in the composite directly.
    2. Supplemental data elements and risk adjustment variables that appear in the multiple components or a component and the composite by name SHALL be of the same type

For individual-based composite scoring methods, additional data elements are collected from all component measures, but could also be defined at the composite level. The name of the supplemental data element or risk adjustment element is used to determine uniqueness across components and the composite. If a supplemental data element or risk adjustment element appears in more than one component, it must be of the same type.

### Component Quality Measures
{: #component-quality-measures}

**Conformance Requirement 5.10 (Component Quality Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-5-10)
{: #conformance-requirement-5-10}
    1. Component quality measures SHALL be referenced using a relatedArtifact element with a type of _composed-of_
    2. Component quality measures SHALL be referenced using the canonical URL of the Measure resource
        a. A composite measure MAY point to a group in the same Measure resource
        b. If the component measure contains multiple groups, the [groupId] extension SHALL be used to reference a specific group
        c. Multiple groups within the same measure may be referenced as different components of the same composite
    3. A composite QM SHALL have at least two components

Regardless of the scoring method, a composite QM will include any number of component measures to be included in the composite calculations. Each component results in the appearance of a relatedArtifact element referencing a Measure by _url_, possibly including the _version_ and, if necessary, specifying the particular _group_ that should be used as the component, and the _weight_ of that component's contribution to the composite score (for weighted composite scoring methods). The following example illustrates a simple composite:

```xml
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Breast Cancer Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/BCSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="High Blood Pressure Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/HBPComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Colorectal Cancer Screening"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/CCSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.2"/>
   </extension>
   <type value="composed-of"/>
   <display value="Pneumococcal Vaccination Status"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/PVSComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-groupId">
      <valueString value="group-1"/>
   </extension>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.1"/>
   </extension>
   <type value="composed-of"/>
   <display value="Tobacco Use Screening and Cessation, Group 1"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/TSCComponent|0.0.001"/>
</relatedArtifact>
<relatedArtifact>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-groupId">
      <valueString value="group-2"/>
   </extension>
   <extension url="http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-weight">
      <valueDecimal value="0.1"/>
   </extension>
   <type value="composed-of"/>
   <display value="Tobacco Use Screening and Cessation, Group 2"/>
   <resource value="http://hl7.org/fhir/uv/cqfmeasures/Measure/TSCComponent|0.0.001"/>
</relatedArtifact>
 ```

Snippet 30: Composite measure relatedArtifacts


---

File: repos/HL7_SLASH_cqf-measures/input/pages/data-model-standards-landscape.md

#### Data Model Standards Landscape
{: #data-model-standards-landscape}

The quality improvement ecosystem covers every aspect of the healthcare
delivery system, and needs to be able to represent information across that
entire spectrum. FHIR provides a foundation for representation of this
information in a universally applicable way. In particular cases, more
specificity is required to capture the intended meaning of healthcare
information. As FHIR is more and more broadly adopted, consensus among
participating stakeholders on the use of particular profiles and patterns
enables semantic interoperability for more use cases.

Within the US Realm, US Core profiles comprise this base consensus, and
although it enables a variety of interoperability use cases, the profiles do not
represent all of the requirements for quality improvement. The QI-Core profiles
are derived from US Core and provide this additional functionality.

There are occasional instances where additional specificity or functionality is
required explicitly for quality measurement, or a particular component within a
quality measure. In these cases, creation of measure content IG can be considered
to facilitate measure development.

The following diagram depicts this data model standards landscape:

<details open>
<summary>

<b>Figure 3: The Data Model Standards Landscape Diagram</b>

</summary>

{% include img.html img="data-model-standards-landscape.png" %}

</details>


As illustrated, FHIR provides the foundation, and sets of profiles are built
on top of FHIR that provide more and more focused use cases by constraining
profiles and extending functionality to cover gaps. While the additional layers
are necessary to represent specific operations and provide space for agreement
among relevant stakeholders, the consensus-based standards development process
is used to suggest changes to the layers below, resulting in an ever-broadening
umbrella of interoperability.

This layering of profiles balances the relative adoption and implementation
maturity of FHIR and the data representation requirements of the use cases
involved, guided by the following principles:

1.  **Avoid proliferation of profiles.** To the extent possible, make
use of existing profiles at the lowest level of the stack, only defining a new
profile if absolutely necessary to express a requirement for a particular use
case that cannot be represented by an existing one.
2.  **Share profiles across measures.** There should not be profiles specific to any particular
measure. Instead, QI Core provides a layer for the expression of quality
improvement requirements across measures and decision support artifacts.
3.  **No terminology-narrowing-only profiles.** Profiles should not be used
to specify only terminology narrowing constraints. The FHIR Clinical Reasoning
module and CQL enable the representation of data requirements for quality
measures and decision support artifacts.
4.  **Promote data-related profiles.** When it becomes necessary to define a data-related profile at the
measurement-specific level (in Measure Content IG for example), steps should be taken
to promote that profile to the broadest consensus group possible.




---

File: repos/HL7_SLASH_cqf-measures/input/pages/downloads.md

{:toc}

{: #downloads }

### Full Implementation Guide
{: #full-ig}

The following file contains the complete, downloadable implementation guide:

-  [Full IG](full-ig.zip)

### IG Package
{: #package}

The following file is the FHIR IG Package [NPM Subset](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification)

- [package.tgz](package.tgz)

### Definitions
{: #definitions}

In addition to the above, we have provided format-specific _definitions_:

-  [XML](definitions.xml.zip)
-  [JSON](definitions.json.zip)
-  [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the
rules about what makes these US Core profiles valid. Implementers will still need to be familiar with the content of the
specification and profiles that apply in order to make a conformant implementation. See the overview on
[validating FHIR profiles and resources](http://hl7.org/fhir/validation.html) for more information about validating
profiles and how to use these artifacts.

### Examples
{: #examples}

All examples used in this Implementation Guide:

-  [XML](examples.xml.zip)
-  [JSON](examples.json.zip)
-  [TTL](examples.ttl.zip)


---

File: repos/HL7_SLASH_cqf-measures/input/pages/examples.md



### Examples

* [**Simple Example**](Measure-EXMLogic-FHIR.html) Usage example illustrating all the common data elements of the CQF Measure profile - [Library](Library-EXMLogic-FHIR.html)
* [**EXM146**](Measure-EXM146-FHIR.html) Encounter-based proportion measure example - [Library](Library-EXM146-FHIR.html)
* [**EXM55**](Measure-EXM55-FHIR.html) Continuous-variable measure example - [Library](Library-EXM55-FHIR.html)
* [**RatioMeasure**](Measure-EXMRatio-FHIR.html) Ratio measure example - [Library](Library-EXMRatio-FHIR.html)
* [**Terminology**](Measure-Terminology-FHIR.html) Example illustrating terminology usage - [Library](Library-Terminology-FHIR.html)
* [**RiskAdjustment**](Measure-measure-risk-adjustment-FHIR2.html) Example illustrating risk adjustment usage - [Library](Library-risk-adjustment-FHIR2.html)
* [**PromotingInteroperabilityMeasure**](Measure-measure-pi-exm.html) Promoting Interoperability measure example <!---  [Library](Library-EXMRatio.html) -->
* [**Common Library**](Library-Common.html) Usage example illustrating a library to share logic between measures
* [**SupplementalDataElements**](Library-SupplementalDataElements.html) Library illustrating common supplemental data elements

### Screening Measures

These examples illustrate patient-based screening measures

* [**EXM124**](Measure-EXM124-FHIR.html) Cervical Cancer Screening - [Library](Library-EXM124-FHIR.html)
* [**EXM125**](Measure-EXM125-FHIR.html) Breast Cancer Screening - [Library](Library-EXM125-FHIR.html)
* [**EXM130**](Measure-EXM130-FHIR.html) Colorectal Cancer Screening - [Library](Library-EXM130-FHIR.html)

### Hospital Measures

* [**EXM108**](Measure-EXM108-FHIR.html) Venous Thromboembolism Prophylaxis - [Library](Library-EXM108-FHIR.html)

### Additional Supplemental Data Elements Measures

* [**NHSN Glycemic Control: Hyperglycemic Initial Population**](Bundle-sde-example-artifact-bundle.html) Example illustrating the use of supplemental data to gather additional information about a cohort. See the Data Exchange for Quality Measures IG for an example of the MeasureReport that results from this measure.

### Multiple-Rate Measures

* [**Multirate Example**](Measure-MultiRateExample-FHIR.html) Example measure illustrating multiple rates in a single Measure resource - [Library](Library-MultiRateExample-FHIR.html)

### Composite Measures

This section provides examples of all four composite measure scoring methods described by this implementation guide. Each composite is constructed using the same five component measures:

* [Breast Cancer Screening (BCS)](Measure-BCSComponent.html) - Patient-based proportion measure
* [Colorectal Cancer Screening (CCS)](Measure-EXM130-FHIR.html) - Patient-based proportion measure
* [High Blood Pressure Screening (HBP)](Measure-HBPComponent.html) - Encounter-based proportion measure
* [Pneumococcal Vaccination (PVS)](Measure-PVSComponent.html) - Patient-based proportion measure
* [Tobacco Screening (TSC)](Measure-TSCComponent.html) - Patient-based proportion measure

For each of these measures, the population criteria are summarized as:

|Population | BCS | CCS | HBP | PVS | TSC |
|-----------|-----|-----|-----|-----|-----|
|Initial Population |female, 51-74, with Qualifying Encounters |50-75, with Qualifying Encounters |>= 18, Encounters in Encounter to Screen for Blood Pressure |>= 65, with Qualifying Encounters or Nursing/Long-term Facility encounters |>= 18 with Qualifying Encounters or Other/Counseling encounters or 2 or more Office visits |
|Denominator |Initial Population |Initial Population |Initial Population |Initial Population |Initial Population |
|Denominator Exclusions |Hospice or Mastectomy or AIFLTC |Hospice or Cancer or Colectomy or AIFLTC |Hypertension Diagnosis |Hospice |None
|Denominator Exceptions |None |None |Medical or Patient Reason |None |Medical Reason or Limited Life Expectancy |
|Numerator |Mammography |Colonoscopy or FOBT or Flex Sig or FIT DNA or CT Colonography |Normal BP or High BP with followup |Pneumococcal Vaccine |Screened for Tobacco Use |

#### All-or-nothing scoring

Interpretation: For each Eligible Clinician, the percentage of patients who received
all preventive services for which they were eligible

[Preventive Care and Wellness (All-or-nothing)](Measure-PreventiveCareandWellnessAllOrNothingComposite.html)

#### Opportunity scoring

Interpretation: For each Eligible Clinician (EC), the percentage of opportunities to provide preventive services that were completed.

[Preventive Care and Wellness (Opportunity)](Measure-PreventiveCareandWellnessOpportunityComposite.html)

#### Patient-level linear

Interpretation: For each Eligible Clinician (EC), the percentage of completed preventive services, which gives EC partial numerator credit for meeting the criteria for some but not all components of the measure.

[Preventive Care and Wellness (Patient-level linear)](Measure-PreventiveCareandWellnessPatientLevelLinearComposite.html)

#### Component-level weighted

Interpretation: For each Eligible Clinician (EC), percentage of patients who received preventive services, which gives EC partial numerator credit for meeting the criteria for some but not all components of the measure.

[Preventive Care and Wellness (Component-level weighted)](Measure-PreventiveCareandWellnessWeightedComposite.html)

### Manifest Examples

Manifests are used to communicate sets of measures together with all the information about their use. See the [Manifest](measure-conformance.html#manifest) topic for more information on these examples:

* [Manifest - Initial Draft](Library-Manifest-Initial-Draft.html)
* [Manifest - Final Draft](Library-Manifest-Final-Draft.html)
* [Manifest - Release](Library-Manifest-Release.html)

### Test Case examples

The sections provide examples of test cases

* [Simple Test Case](MeasureReport-testcase-example.html) - Example test case illustrating expected input parameters and expected output results given those input parameters.
* [Bundled Test Case](Bundle-bundle-example.html) - Example test case in a bundle illustrating expected input parameters and expected output results given those input parameters along with evaluatedResources.



---

File: repos/HL7_SLASH_cqf-measures/input/pages/extensions.md


- [Aggregate Method](StructureDefinition-cqfm-aggregateMethod.html)
- [Applies To](StructureDefinition-cqfm-appliesTo.html)
- [Component](StructureDefinition-cqfm-component.html)
- [Composite Scoring](StructureDefinition-cqfm-compositeScoring.html)
- [Criteria Reference](StructureDefinition-cqfm-criteriaReference.html)
- [Effective Period Anchor](StructureDefinition-cqfm-effectivePeriodAnchor.html)
- [Effective Period Duration](StructureDefinition-cqfm-effectivePeriodDuration.html)
- [Group Id](StructureDefinition-cqfm-groupId.html)
- [Improvement Notation](StructureDefinition-cqfm-improvementNotation.html)
- [Include In Report Type](StructureDefinition-cqfm-includeInReportType.html)
- [Is Test Case](StructureDefinition-cqfm-isTestCase.html)
- [Operation](StructureDefinition-cqfm-operation.html)
- [Population Basis](StructureDefinition-cqfm-populationBasis.html)
- [Rate Aggregation](StructureDefinition-cqfm-rateAggregation.html)
- [Risk Adjustment](StructureDefinition-cqfm-riskAdjustment.html)
- [Scoring](StructureDefinition-cqfm-scoring.html)
- [Scoring Precision](StructureDefinition-cqfm-scoringPrecision.html)
- [Scoring Unit](StructureDefinition-cqfm-scoringUnit.html)
- [Test Case Description](StructureDefinition-cqfm-testCaseDescription.html)
- [Type](StructureDefinition-cqfm-type.html)
- [Weight](StructureDefinition-cqfm-weight.html)


---

File: repos/HL7_SLASH_cqf-measures/input/pages/glossary.md

{:toc}

### Glossary
See the [eCQI Resource Center](https://ecqi.healthit.gov/glossary) for additional definitions

#### Clinical Quality Framework (CQF)

The Clinical Quality Framework is a joint effort by the Clinical Decision Support and Clinical Quality Information Work Groups to identify, develop, and harmonize standards that promote integration and reuse between Clinical Decision Support (CDS) and Clinical Quality Measurement (CQM). [Source](https://confluence.hl7.org/display/CQIWC/Clinical+Quality+Framework)

#### Cohort

A measure score in which a population is identified from the population of all items being counted. For example, one can identify all the patients who have had H1N1 symptoms. This population is very similar to the Initial Population but is called a Cohort Population for public health purposes.

#### Continuous Variable

A measure score in which each individual value for the measure can fall anywhere along a continuous scale and can be aggregated using a variety of methods such as the calculation of a mean or median (for example, mean number of minutes between presentation of chest pain to the time of administration of thrombolytics). [Source](https://ecqi.healthit.gov/glossary)

#### Denominator

Denominator criteria define the patients, subjects, or events that should be included in the lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure.

For measures that include multiple populations, different populations may have different denominators, grouping the denominators along specific criteria (e.g. patient's age, diagnosis, surgical procedures, prior myocardial infarction, etc.).

Different measures within a measure set (see A.18, Quality Measure Set) may have different Denominators (e.g., measure #1 Denominator = Initial Population AND Smoker; measure #2 Denominator = Initial Population AND Atrial Fibrillation). A Denominator can have inclusion and exclusion criteria.

#### Denominator Exception

Denominator exceptions are conditions that should remove a patient, subject, or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures.

#### Denominator Exclusion

Denominator exclusion criteria define patients, subjects, or events that should be excluded from the denominator. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams.

#### Direct Reference Code

A direct reference code (DRC) is a specific code that is referenced directly in the QM logic to describe a data element or one of its attributes. Direct reference code metadata include the description of the code, the code system from which the code is derived, and the version of that code system.

#### Digital Quality Measure (dQM)

A clinical quality measure that is expressed and formatted to use data from electronic health records (EHR) and/or health information technology systems to measure healthcare quality, specifically data captured in structured form during the process of patient care. Synonymous with eCQM

#### Electronic Clinical Quality Measure (eCQM)

A clinical quality measure that is expressed and formatted to use data from electronic health records (EHR) and/or health information technology systems to measure healthcare quality, specifically data captured in structured form during the process of patient care. So they can be reported from an EHR, the FHIR Measure Resource is used to format the eCQM content using QI Core to define the data elements and Clinical Quality Language (CQL) to express the logic needed to evaluate a provider or organization's performance. [Source](https://ecqi.healthit.gov/glossary)

#### Health Quality Measures Format (HQMF)

An HL7 Version 3 normative standard for the representation of quality measures. This specification provided the base requirements for the FHIR Measure resource.

#### Initial Population

The initial population criteria refers to all patients, subjects, or events to be evaluated by a quality measure involving patients or subjects who share a common set of specified characteristics. All patients, subjects, or events counted (for example, as numerator, as denominator) are drawn from the initial population.

#### Measure Population

Continuous variable measures do not have a Denominator, but instead define a Measure Population. To be in the Measure Population, a patient must be in the Initial Population. Proportion and Ratio measures do not have a Measure Population, but instead define a Denominator.

#### Measure Population Exclusion

Measure Population Exclusions are used in Continuous Variable Measures to define instances that should not be included in the Measure Population.

#### Numerator

Numerator criteria define the patients, subjects, or events that should be included in the upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome.
{: .new-content}

Numerator criteria are the processes or outcomes expected for each patient, subject, or event defined in the denominator (for rate and proportion measures) or initial population (for ratio measures). A numerator statement describes the clinical action that satisfies the conditions of the measure.
{: .new-content}

#### Numerator Exclusion

Numerator exclusion criteria define patients, subjects, or events to be excluded from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures).

#### Outcome Measure

A measure that assesses the results of healthcare that are experienced by patients: clinical events, recovery and health status, experiences in the health system, and efficiency/cost. [Source](https://ecqi.healthit.gov/glossary)

#### Process Measure

A measure that focuses on a sequence of actions or steps that should be followed to provide high quality evidence-based care. There should be a scientific basis for believing that the process, when executed well, will increase the probability of achieving a desired outcome. [Source](https://ecqi.healthit.gov/glossary)

#### Proportion

A score derived by dividing the number of cases that meet a criterion for quality (the numerator) by the number of eligible cases within a given time frame (the denominator) where the numerator cases are a subset of the denominator cases (for example, percentage of eligible women with a mammogram performed in the last year). [Source](https://ecqi.healthit.gov/glossary)

#### Quality Measure Set

A unique grouping of measures carefully selected to provide, when viewed together, a robust picture of the care provided in a given domain (e.g., cardiovascular care, pregnancy).

#### Quality Measure (or Performance Measure)

A numeric quantification of healthcare quality for a designated accountable healthcare entity, such as hospital, health plan, nursing home, clinician, etc. A healthcare performance measure is a way to calculate whether and how often the healthcare system does what it should. Measures are based on scientific evidence about processes, outcomes, perceptions, or systems that relate to high-quality care. [Source](https://ecqi.healthit.gov/glossary)

#### Rate Aggregation

An organization or clinician uses rate aggregation to determine measure rate and based upon the entities’ aggregate data and summarizes the performance of the entity over a given time period (e.g., monthly, quarterly, yearly). The aggregated data are derived from the results of a specific measure algorithm and, if appropriate, the application of specific risk adjustment models.

#### Ratio

A ratio is a score that is derived by dividing a count of one type of data by a count of another type of data. For example, the number of patients with central lines who develop infection divided by the number of central line days. [Source](https://ecqi.healthit.gov/glossary)

#### Stratification

Criteria used to classify populations into one or more characteristics, variables, or other categories. These subsets of the overall population, or stratifications, are a form of risk adjustment, and are used in analysis and interpretation. Examples of stratification include age, discharge status for an inpatient stay, facility location within a hospital (e.g., ICU, Emergency Department), surgical procedures, and specific conditions.

#### Supplemental Data Elements

Additional variables required for risk adjustment or other purposes of data aggregation. Comparison of results across strata can be used to show where disparities exist or where there is a need to expose differences in results. Examples of supplemental data elements include payer, ethnicity, race and gender.


### Acronyms

| Acronym |  |  Definition        |
| :--- | :---: | :--- |
| API | --- |	Application Program Interface |
| CDS |	--- | Clinical Decision Support |
| CMS |	--- | Centers for Medicare and Medicaid Services |
| CQFM | --- |	Clinical Quality Framework Measures |
| CQL |	--- | Clinical Quality Language |
| CQM |	--- | Clinical Quality Measures |
| CRMI | --- | Canonical Resource Management Infrastructure |
| dQM | --- | Digital Quality Measure |
| eCQM | --- | 	electronic Clinical Quality Measures |
| DEQM | --- |	Data Exchange for Quality Measures |
| EHR |	--- | Electronic Health Record |
| ELM |	--- | Expression Logical Model |
| FHIR | --- |	Fast Healthcare Interoperability Resources |
| HEDIS |	--- | Healthcare Effectiveness Data and Information Set |
| HL7 | --- | Health Level Seven |
| HQMF |	--- | Health Quality Measure Format |
| ICU |	--- | Intensive Care Unit |
| IG |	--- | Implementation Guide |
| JSON |	--- | JavaScript Object Notation |
| LOINC |	--- | Logical Observation Identifiers Names and Codes |
| QDM |	--- |Quality Data Model |
| QI Core |	--- | Quality Improvement Core |
| QRDA |	--- | Quality Reporting Document Architecture |
| R4 |	--- | FHIR Release 4 |
| REST | --- |	Representational State Transfer |
| SDE |	--- | Supplemental Data Element |
| SNOMED-CT |	--- | Systematized Nomenclature of Medicine -- Clinical Terms |
| STU | --- |	FHIR Release (STU) |
| URI | --- |	Uniform Resource Identifier |
| URL | --- |	Uniform Resource Locater |
| XML | --- |	eXtensible Markup Language |


---

File: repos/HL7_SLASH_cqf-measures/input/pages/index.md



{:toc}


## Quality Measure Implementation Guide
{: #quality-measure-implementation-guide}

### Summary
{: #summary}

The Fast Healthcare Interoperability Resource (FHIR) Quality Measure Implementation Guide (QM IG), describes an approach to representing Quality Measures (QMs) using the FHIR Clinical Reasoning Module and Clinical Quality Language (CQL) in the US Realm. However, this Implementation Guide can be usable for multiple use cases across domains, and much of the content is likely to be relevant outside the US Realm.

This IG is built upon on [FHIR Version R4](http://hl7.org/fhir/R4/index.html) and accounts for content in previous generations of QM standards, the HL7 V3-based Health Quality Measure Format (HQMF) and accompanying implementation guides using FHIR. As an HL7 FHIR Implementation Guide, changes to this specification are managed by the sponsoring Clinical Quality Information Work Group and are incorporated as part of the standard balloting process.

#### Examples
{: #examples}

Refer to the [QI-Core implementation guide](http://hl7.org/fhir/us/qicore) for examples of how to represent data involved in calculation of quality measures.

### How to read this Guide
{: #how-to-read-this-guide}

This Guide is divided into several pages which are listed at the top of each
page in the menu bar:

-  **[Home](index.html)**: The home page provides the summary and background information for the FHIR Quality Measure Implementation Guide.
-  **[Introduction](introduction.html)**: The introduction provides a more detailed overview of quality measurement and the background for this guide.
-  **[QMs](measure-conformance.html)**: This page describes measure representation and conformance requirements for QMs.
-  **[Using CQL](using-cql.html)**: This page covers using Clinical Quality Language to author QMs.
-  **[Composites](composite-measures.html)**: This page covers composite measure representation and conformance requirements.
-  **[Packaging](packaging.html)**: This page describes measure packaging and distribution requirements for QMs.
- **FHIR Artifacts**
  - **[Profiles](profiles.html)**: This page lists the set of profiles defined for use by QMs.
  - **[Extensions](extensions.html)**: This page lists the set of extensions defined for use by QMs.
  - **[Terminology](terminology.html)**: This page lists value sets and code systems defined in this IG.
  - **[Capabilities](capabilities.html)**: This page defines the workflows and roles for QMs and contains the capability statements.
  - **[Operations](operations.html)**: This page defines services and operations in support of authoring, publishing, and distributing QMs.
  - **[Artifacts Summary](artifacts.html)**: This page defines the workflows and roles for QMs and contains the capability statements.
-  **[Examples](examples.html)**: This page provides examples used in the other pages, as well as by the Data Exchange for Quality.
-  **[Glossary](glossary.html)** This page defines terms related to quality measurement.
-  **[Downloads](downloads.html)**: This page provides links to downloadable artifacts for implementations.
-  **[Changes](changes.html)**: This page details changes made in each version of the Quality Measure IG.

### Background
{: #background}

<!-- Quality Improvement Ecosystem -->
{% include quality-improvement-ecosystem.md %}

<!-- Quality Measurement Standards Landscape -->
{% include quality-measurement-standards-landscape.md %}

<!-- Data Model Standards Landscape -->
{% include data-model-standards-landscape.md %}

### References
{: #references}

Centers for Medicare &amp; Medicaid. Clinical Quality Measures Basics. [Online]. Available from: [https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/ClinicalQualityMeasures.html](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/ClinicalQualityMeasures.html) [Accessed 11 October 2019].

Michaels, M. (2023). Adapting Clinical Guidelines for the Digital Age: Summary of a Holistic and Multidisciplinary approach. American Journal of Medical Quality, 38(5S), S3–S11. https://doi.org/10.1097/jmq.0000000000000138

Health level seven. Clinical Quality Framework - HL7 Clinical Quality Information Work Group Confluence Page. [Online]. Available from: [https://confluence.hl7.org/display/CQIWC/Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical%20Quality%20Framework) [Accessed 11 October 2019].

### Dependencies
The dependency on QI-Core is included for the purposes of example validation only.  In addition, the dependency on VSAC packages is indirect via the QI Core and US Core.  The conformance profiles in this IG do not make use of the value sets in VSAC.

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}


---

File: repos/HL7_SLASH_cqf-measures/input/pages/introduction.md

{:toc}

{: #introduction}

### Purpose
{: #purpose}

[The National Academy of Medicine, formerly called the Institute of Medicine (IOM),](https://www.nationalacademies.org/) defines quality as: “The degree to which health services for individuals and populations increase the likelihood of desired health outcomes and are consistent with current professional knowledge.” For care quality to be evaluated, standard quality metrics need to be developed and communicated to the appropriate organizations. To that end, the FHIR Quality Measure Implementation Guide (this IG) has been written to provide guidance for authoring electronic clinical quality measures ([eCQMs](https://ecqi.healthit.gov/glossary/ecqms)) which are clinical quality measures specified in a standard electronic format and designed to use structured, encoded data present in the electronic health record. This implementation guide references the following standards for creating QMs:

* [Fast Healthcare Interoperability Resources (FHIR) R4](https://www.hl7.org/fhir/R4/)
* [Clinical Quality Language (CQL) R1.5.2](http://cql.hl7.org/N1/)
* [QI-Core Implementation Guide (QI-Core) STU6](http://hl7.org/fhir/us/qicore/)

To avoid variation in the use of FHIR Resources and metadata across QMs and clinical decision support (CDS), a quality-related implementation guide based on a logical data model is essential. In the US Realm, QMs should use [FHIR Quality Improvement Core (QICore)](http://hl7.org/fhir/us/qicore) profiles as the data model to maintain consistency. Other FHIR based data models are also acceptable for use.

Although the specification is based on the 1.5.2 version of CQL, backwards-compatible future versions of CQL can be used as well. In addition, if necessary, the 1.2, 1.3, and 1.4 versions of CQL can be used without loss of functionality for this Implementation Guide.

Except where noted, material from the base FHIR specification, and in particular the [Clinical Reasoning](http://hl7.org/fhir/clinicalreasoning-module.html) module, is not repeated here.

As features and functionality are identified by this implementation guide that apply more broadly, those features may be promoted to the base FHIR specification.

There is a new term of digital Quality Measure or [dQM](glossary.html#digital-quality-measure-dqm) that is currently being defined across many interested parties. For the purposes of this IG, eCQM, Quality Measure (QM), and dQM are synonymous. The focus of this IG is on computable representation of quality measures using HL7 FHIR and CQL.

### Audience
{: #audience}

The audience for this IG includes software developers of measure authoring tools such as the US Centers for Medicare & Medicaid Services (CMS) [Measure Authoring Development Integrated Environment (MADiE)](<https://www.emeasuretool.cms.gov/madie-mvp/>); measure developers who will specify clinical quality measures using FHIR and CQL; software developers and implementers who will implement the quality measures specified in FHIR and CQL in their institutions or in their vendor products; institutions and organizations who wish to use FHIR and CQL to express and implement quality measures within their health systems; and local, regional, and national quality reporting agencies who wish to receive and process quality reporting documents that are based on measures specified in FHIR and CQL.

### Approach
{: #approach}

The approach taken here is consistent with balloted IGs for FHIR. These publications view the ultimate implementation specification as a set of formal artifacts, including profiles, extensions, and terminologies. The base FHIR specification provides for the representation of quality measures using the Measure resource, as well as guidance on quality reporting within the Clinical Reasoning module. IGs such as this add constraints to the base resources and guidance through profiles and conformance requirements that further define and restrict the sequence and cardinality of elements in the FHIR resources and the vocabulary sets for coded elements.

### Scope
{: #scope}

This IG is a conformance profile, as described in the [“Conformance” section of the HL7 FHIR specification](http://hl7.org/fhir/R4/conformance-module.html). The base resource for this IG is the HL7 FHIR Measure and Library resources and associated guidance within the Clinical Reasoning module. This IG does not describe every aspect of quality reporting in FHIR. Rather, it defines profiles and constraints on the base Measure and Library resources used in a FHIR Quality Measure. Additional optional Measure and Library elements, not included here, can be included and the result will be compliant with the specifications in this guide. The FHIR Clinical Reasoning module provides resources and universally applicable guidance for reporting quality measurement results, and the [Data Exchange for Quality Measures Implementation Guide](http://hl7.org/fhir/us/davinci-deqm/) provides additional guidance and use cases related to quality reporting.

Member attribution forms the framework for measuring performance of healthcare providers, reporting data and reimbursing for patient care using alternative payment models (APMs) that focus on value based management. 
The process of establishing and exchanging Member Attribution (ATR) Lists for risk based contracts are complex and time consuming. How to apply attribution in a measure, or how to apply attribution when implementing a measure (attribution at different levels - population, 
organization, practitioner, etc.) is out of scope for this IG. One method, referenced in the capabilities section of this IG (https://build.fhir.org/ig/HL7/cqf-measures/capabilities.html#capabilities-1), is the 
Da Vinci - Member Attribution (ATR) List (http://hl7.org/fhir/us/davinci-atr/STU2/) that is published to specify standards for exchanging Member Attribution (ATR) Lists between providers and payers.

### Conventions
{: #conventions}

The keywords SHALL, SHALL NOT, SHOULD, SHOULD NOT, MAY, and NEED NOT in this document are to be interpreted as defined in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt). Unlike RFC 2119, however, this specification allows that different applications may not be able to interoperate because of how they use optional features. In particular

* SHALL: an absolute requirement for all implementations
* SHALL NOT: an absolute prohibition against inclusion for all implementations
* SHOULD/SHOULD NOT: a best practice or recommendation to be considered by implementers within the context of their particular implementation; there may be valid reasons to ignore an item, but the full implications must be understood and carefully weighed before choosing a different course
* MAY/NEED NOT: truly optional; can be included or omitted as the implementer decides with no implications

### Previous Non-FHIR quality measurement standards [Example: HL7 v3 Based Standards]
{: #background}
This Implementation Guide (IG) defines an approach to using CQL with the FHIR Measure and Library resources for specifying quality measures. <span class="bg-success">The guidance here is drawn from the [FHIR Clinical Reasoning Module](http://www.hl7.org/fhir/clinicalreasoning-module.html), </span>as well as the [CQL-Based HQMF IG R1 STU4.1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=405).
This Implementation Guide (Figure 2-1(b)) is the successor of the CQL-based HQMF IG R1 STU4.1 (Figure 2-1(a)).

<details open>

<summary>

<b>Figure 2-1: Relationship between CQL based HQMF and FHIR Quality Measure IG’s Diagram.</b>

</summary>

{% include img.html img="RelationshipToCQLBasedHQMFIG.png" %}

</details>

#### Clinical Quality Language R1.5.2
{: #clinical-quality-language-r1.5.2}

[Clinical Quality Language R1.5.2 (CQL)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400) is an HL7 standard for trial use (STU). It is part of the effort to harmonize standards between quality measures (QMs) and clinical decision support (CDS). CQL provides the ability to express logic that is human readable yet structured enough for processing a query electronically.

#### CQL-based HQMF IG R1 STU4.1
{: #cql-based-hqmf-ig-r1-stu4.1}

The first version of the CQL-based HQMF IG was released in September 2015 and was intended to be used in conjunction with the pre-existing QDM based HQMF R1 IG. Since 2015, the community and the standards have evolved; beginning from version 5.4, QDM no longer contains expression logic representation, ceding this functionality to CQL. The CQL-based HQMF IG is the sole guide describing how to use QDM, CQL, and HQMF in combination (Figure 2-1a).

A result of replacing QDM-based logic with CQL is that all QDM logic elements previously encoded in HQMF were replaced with CQL. This means that QDM data criteria specify only the data of interest (e.g. value sets, effective time, properties) for the QM, and the previous use of QDM expressions that captured interrelationships between data criteria (such as “starts after end of”) or identified subsets of data (such as min, max, last, and first) are now represented with CQL expressions. The Quality Measures Implementation Guide (this IG) documents the full approach in detail starting in [QMs](measure-conformance.html), covering the use of FHIR, CQL, and QI-Core to represent quality measures.

#### HQMF
{: #hqmf}

HQMF is a structured document markup standard “…for representing a health quality measure as an electronic document. A quality measure is a quantitative tool to assess the performance of an individual or organization’s performance in relation to a specified process or outcome via the measurement of an action, process, or outcome of clinical care. Quality measures are often derived from clinical guidelines and are designed to determine whether the appropriate care has been provided given a set of clinical criteria and an evidence base.” See [HL7, Representation of the Health Quality Measures Format (HQMF)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=97) for more information.

Note that HQMF is not an HL7 V3 Clinical Document Architecture (CDA) standard, but is similar to CDA in being a structured document markup standard.

HQMF is now a normative HL7 V3 based standard that defines a header for classification and management of the quality measure as well as important metadata. HQMF also defines a document body that carries the content of the quality measure. It standardizes a measure’s structure, metadata, definitions, and logic, the HQMF ensures measure consistency and unambiguous interpretation.

The FHIR Clinical Reasoning module replaces HQMF by defining the Measure resource.

#### Quality Reporting Document Architecture (QRDA)
{: #quality-reporting-document-architecture-(qrda)}

[Quality Reporting Document Architecture (QRDA) Category I](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=35) is an HL7 standard that supports quality reporting at the individual patient level (referred to as QRDA Category I) and [Quality Reporting Document Architecture (QRDA) Category III](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=286) is an HL7 standard that supports quality reporting at the summary level (referred to as QRDA Category III). The aspects of QRDA related to reporting results are captured in the MeasureReport resource, while the aspects of QRDA representing patient data are captured by QI-Core. The FHIR Clinical Reasoning module replaces QRDA by defining the MeasureReport structure, and the [Data Exchange for Quality Measures Implementation Guide](http://hl7.org/fhir/us/davinci-deqm/) provides implementation guidance for measure reporting.


---

File: repos/HL7_SLASH_cqf-measures/input/pages/measure-components.md

---
layout: default
title: Measure Components
---

## 2 General HQMF Concepts

This chapter serves as a high-level introduction to the concepts used within an eMeasure document, all of which are described in greater detail in later chapters. For the purposes of public health reporting, the case reporting requirements will be expressed as Cohort measures.

HQMF concepts of measurement period, Data and Population Criteria, stratifiers, and other measure attributes are bundled together in a structure shown in the diagram below.

Figure 3: Typical HQMF document structure

![Typical HQMF document structure](assets/images/HQMF-structure.png)

An eMeasure document is wrapped by the <QualityMeasureDocument> element, and contains a header and a body (see QualityMeasureDocument). The header identifies and classifies the document and provides important metadata about the measure.

The body contains sections (<populationCriteriaSection> <dataCriteriaSection>, etc.), each wrapped by the <component> element. Each section can contain a single HQMF narrative block (see the Section Narrative Block), and any number of HQMF entries. An eMeasure conformant to the specification may contain pre-defined components, such as the Population Criteria Section (see Document constraints). Each pre-defined component may suggest or require various entries (see Section Constraints), and HQMF entries within these components are constrained to better ensure consistency across eMeasures (see Entry Constraints). Additional components and entries, above and beyond those required for HQMF conformance, can be included as needed.

The HQMF narrative block must contain the human readable content to be rendered. Within a component, the narrative block represents content to be rendered whereas HQMF entries represent structured content provided for further computer processing.

A minimally conformant eMeasure will contain elements from the document header, but need not include computable Data Criteria. In this case, the full narrative of the eMeasure, in any electronic format, is placed into or referenced by QualityMeasureDocument.text. From there, one can represent the full narrative of a quality measure within the narrative blocks of HQMF defined components. Full encoding further enhances the narrative of the quality measure with the addition of entries.

The following truncated XML snippet shows the high level XML structure of an HQMF Document.

```xml
<!-- Start of an HQMF R2 eMeasure. An eMeasure is surrounded by the QualityMeasureDocument element. -->
<QualityMeasureDocument>
   <!-- Header attributes including Title, Narrative, Author, Custodian etc.  -->
   <templateId />
   <title />
   <text />
   <author />
   <custodian />
   <verifier />

   <!-- defining the time period that this eMeasure applies to -->
   <controlVariable>
      <measurePeriod />
   </controlVariable>

   <!-- Miscellaneous metadata for an eMeasure -->
   <subjectOf>
      <measureAttribute />
   </subjectOf>

   <!-- Sections -->
   <!-- Measure Description Section -->
   <component>
      <measureDescriptionSection />      
   </component>

   <!-- Data Criteria Section, containing actCriteria, etc. -->
   <component>
      <dataCriteriaSection />
   </component>

   <!-- Population Criteria Section containing an Initial Population,
   numeratorCriteria, denominatorCriteria exclusions, exceptions,
   stratifier Criteria etc. -->
   <component>
      <populationCriteriaSection />
   </component>

   <!-- Measure Observation Section containing expression language expressions
      for evaluation using Data Criteria-->
   <component>
      <measureObservationsSection />
   </component>

</QualityMeasureDocument>
<!-- end of eMeasure -->
```

### 2.1 Measurement Period

Every quality measure has a Measurement Period. The Measurement Period designates the reference time frame for which data are identified, filtered and analyzed. Measurement Period can be expressed as both fixed times (start and end date) and relative times (start date and a period of reporting frequency). The exact usage of Measurement Period depends on the measure and its purpose. Data that are collected before or after the Measurement Period can also be identified with a time relationship, explained in the next part of this document.

### 2.2 Data Criteria

A "criterion" is something that can be evaluated to be TRUE or FALSE for a given item. It lays out a pattern to be matched by an object in an EHR.

The Data Criteria of a measure identify the various conditions that determine if a data item is included in the measure population or not (based upon clinical or public health interests).

For example:

    "Patient is between the ages of 20 - 30 years"
    "Patient had a hbA1C test as part of last visit"
    "Patient's last LDL cholesterol is < 100"
    "Patient has Diabetes type II"

Data Criteria can be defined against the following types of clinical data elements (this list is not exhaustive):

    Patient Demographics
    Encounters
    Medications
    Laboratory Results
    Vital Signs
    Problems
    Procedures
    Allergies
    Immunizations

Note that the actual contents of a Data Criteria element are determined by the type of data being referenced in the criteria. For example, an Encounter data criteria is represented with a Act of type Encounter, so the elements available will be determined by the structure of that type.

#### 2.2.1 Filters and Data Criteria



HQMF assumes that Data Criteria are evaluated in stages. For example a Data Criterion element (encounter) might include a constraint that a patient had an encounter within the measurement period. When this Data Criterion element is evaluated, first a list of all encounters is retrieved. Then, those encounters not within the measurement period are removed. If the resulting list of encounters is empty, then the criterion is not satisfied. If the list contains at least one encounter, then the criterion is satisfied. This document refers to that refinement process as "filtering" and the refinements applied to a data criterion during evaluation as "filters". The filters that can be applied to a Data Criterion element include temporally related information, outbound relationship, and excerpt.

For example:

    Patient has an HbA1C value > 9% in the "LAST" laboratory test.
    The patient was diagnosed with Diabetes Type II, and the "FIRST" encounter where the patient was diagnosed was within the measurement period.
    Patient's "LAST" vaccination was within 3 months of the "FIRST" vaccination.

In the above examples, "LAST" and "FIRST" are examples of filters (using excerpt) that can be applied to initial Data Criteria to refine and extract the population of interest.

Data Criteria can be related to other Data Criteria or Measurement Period via time relationships. The following examples show how an encounter can have a temporal relationship with other Data Criteria or a Measurement Period.

    Patient had a laboratory test that occurred one year before the most recent encounter.
    Patient has encounters during the Measurement Period where a particular medication was requested.
    Patient had a diagnosis of disease X within N years of immunization for disease X.

#### 2.2.2 Value Sets and Data Criteria



Quality measures often need to select patients based on enumerated features of demographics, encounters, medications or other criteria that span a range of coded values. These ranges of coded values are represented as value sets and are used to filter populations.

A value set represents a uniquely identifiable set of valid concept identifiers, where any concept identifier in a coded element can be tested to determine whether it is a member of the value set at a specific point in time. A concept identifier in a value set may be a single concept code or a post-coordinated expression of a combination of codes. A value set has a unique identifier that is assigned by the owner of the value set. These identifiers are referenced within the Data Criteria and included within the eMeasure. The exact representation will be described later in this document.

An example of a value set is a list of codes for Diabetes Type II. The list could have a name that conveys what is in the list of codes (e.g., Diabetes Type II). The value set is identified by an OID (e.g., 2.16.840.1.113883.3.464.1.37) and belong to a particular entity which maintains oversight of the value set and makes any updates to it as needed.

A value set from public health, for example, is Immunization Service Funding Eligibility, identified by 2.16.840.1.114222.4.5.301. It includes national classifications Immunization Service Funding Eligibility assigned to the patient for the purpose of identifying sources of reimbursement. As with many public health domain value sets, this is maintained by the PHIN-VADS Value Set Repository (https://phinvads.cdc.gov/). This value set may be further constrained or extended by state or regional jurisdictions (assigned a separate identifier) where additional classifications may also be supported.

Note that according to Quality Data Model (QDM), a value set is constrained to a single code system. The exception to this rule is grouping value sets. Through grouping value sets, multiple value sets of the same or different code systems can be combined into one value set.

#### 2.2.3 Processing Order and Data Criteria

Data Criteria can include a set of filters on the events identified. The order in which those filters are processed determines the end result for any specific criterion. All Data Criteria processing is performed in document order, meaning the order in which the criteria elements appear in the document, and the processing is not complete until all of the Data Criteria children are processed. The concepts are explained below using a few examples.

Consider the XML example below which specifies an ObservationCritiera which, when processed, will extract the last hbA1C greater than 9% among all the observations where hbA1C was measured.

The processing of Data Criteria when executed in document order is as follows:

    Identify and extract the result observations where hbA1C are measured. This is performed using the value set of the code element. Let us call this the set of "hbA1C observations".
    Identify and extract from the set of "hbA1C observations" the ones where the value is greater than 9%. This is done when the value element is processed. Let us call this the set of "hbA1C observations greater than 9%".
    Identify and extract the last observation from the set of "hbA1C observations greater than 9%". This is done when the excerpt element is processed which identifies the observation to be extracted.

```xml
<entry typeCode="DRIV">
   <localVariableName value="LastHbA1Cgt9"/>
   <observationCriteria classCode="OBS" moodCode="EVN">
      <id root="2.16.840.1.113883.19" extension="LastHbA1Cgt9"/>
      <code valueSet="2.16.840.1.113883.3.464.1.72"/>
      <value xsi:type="IVL_PQ" lowClosed="false">
         <low value="9" unit="%"/>
         <high nullFlavor="PINF"/>
      </value>
      <excerpt>
         <subsetCode code="LAST"/>
            <observationCriteria classCode="OBS" moodCode="EVN">
                <id root="2.16.840.1.113883.19" extension="LastHbA1Cgt9"/>
            <observationCriteria/>
      </excerpt>
   </observationCriteria>
</entry>
```

The next example shows how to check if the "last hbA1c measured was greater than 9%". This is different than the previous example, which extracted the last one from the set of "hbA1c results greater than 9%".

There are 3 different criteria elements required to perform this operation.

    The first criterion identifies and extracts the last hbA1c observation regardless of the value of the observation.
    The second criterion checks if an observation value is greater than 9%, regardless of whether the observation is the first one or last one or one in between.
    The third criterion is a grouper criterion which is used to intersect the first and the second criteria, the intersect operation will only extract the observation if it is the last one and it is greater than 9%.

```xml
<!-- Get last A1C (Criteria A) -->
<entry typeCode="DRIV">
   <localVariableName value="LastHbA1C"/>
   <observationCriteria classCode="OBS" moodCode="EVN">
      <id root="2.16.840.1.113883.19" extension="LastHbA1C"/>
      <code valueSet="2.16.840.1.113883.3.464.1.72"/>
      <definition>
         <criteriaReference classCode="OBS" moodCode="EVN">
            <id root="2.16.840.1.113883.19" extension="Results"/>
         </criteriaReference>
      </definition>
      <excerpt>
         <subsetCode code="LAST"/>
            <observationCriteria classCode="OBS" moodCode="EVN">
                <id root="2.16.840.1.113883.19" extension="LastHbA1C"/>
            <observationCriteria/>
      </excerpt>
   </observationCriteria>
</entry>

<!-- Criteria to check for a1c greater than 9% (Criteria B) -->
<entry typeCode="DRIV">
   <localVariableName value="HbA1Cgt9"/>
   <observationCriteria moodCode="EVN">
      <id root="2.16.840.1.113883.19" extension="HbA1Cgt9"/>
      <value xsi:type="IVL_PQ">
         <low value="9" unit="%"/>
      </value>
      <definition>
         <criteriaReference classCode="OBS" moodCode="EVN">
            <id root="2.16.840.1.113883.19" extension="Results"/>
         </criteriaReference>
      </definition>
   </observationCriteria>
</entry>

<!-- Create another Grouper criteria which is an intersect of A and B, meaning that we are intersecting  -->
<entry typeCode="DRIV">
   <grouperCriteria classCode="GROUPER" moodCode="EVN">
      <id root="2.16.840.1.113883.19" extension="IsLastA1Cgt9"/>
      <outboundRelationship typeCode="COMP">
        <conjunctionCode code="AND"/>
        <criteriaReference classCode="OBS" moodCode="EVN">
            <id root="2.16.840.1.113883.19" extension="LastHbA1C"/>
        </criteriaReference>
      </outboundRelationship>
      <outboundRelationship typeCode="COMP">
        <conjunctionCode code="AND"/>
        <criteriaReference classCode="OBS" moodCode="EVN">
            <id root="2.16.840.1.113883.19" extension="HbA1Cgt9"/>
        </criteriaReference>
      </outboundRelationship>
   </grouperCriteria>
</entry>
```

#### 2.2.4 Result Evaluation and Caching

The HQMF standard allows Data Criteria to be referenced using the Data Criteria ID. This allows measure developers to create a Data Criteria definition once and reuse it multiple times throughout the measure document using the ID. Results compiled from evaluation of the original Data Criteria can be cached. The cached results can be reused, without reevaluation, whenever the Data Criteria ID is referenced. However, HQMF R2 does not mandate result caching (i.e., Data Criteria referenced via an ID can be reevaluated each time) and leaves this detail up to specific implementations of the standard.

#### 2.2.5 Risk Adjustment Variables

In developing outcome measures, one challenge that measure developers often have is accounting for factors outside of provider or hospital control. These are features such as patient characteristics (age, health, etc.) or other risk factors. Because of variations in these risk factors, patients may experience variations in outcomes of care. Such variations in outcomes might not reflect the actual quality of care provided by the healthcare organization. Adjusting an outcome measure for these factors, a process called Risk Adjustment which produces a risk adjusted outcome measure, allows accurate comparison of outcomes across organizations.

Risk adjusted outcome measures identify risk factors as risk variables. Risk variables are plugged into a risk model to calculate the risk adjustment. In HQMF, risk variables are expressed in data criteria that extract the information needed for the risk model.

For example, a measure that calculates the risk-standardized mortality rate will identify risk variables such as patient age, first measurement of systolic blood pressure, first troponin level, and first creatinine level. Data criteria for the troponin and patient age risk variables are shown below:

```xml
<entry typeCode="DRIV">
  <localVariableName value="Troponin"/>
  <observationCriteria moodCode="EVN" classCode="OBS">
    <id root="2.16.840.1.113883.3.100.1" extension="LaboratoryTestResultFirstTroponinLevelGroup"/>
    <code xsi:type="CD" valueSet="2.16.840.1.113883.3.666.5.2361">
      <displayName value="First Troponin Level Group"/>
    </code>
    <text value="Laboratory Test, Result: First Troponin Level Group"/>
    <excerpt typeCode="XCRPT">
      <subsetCode code="FIRST"/>
      <observationCriteria classCode="OBS" moodCode="EVN">
        <id root="2.16.840.1.113883.3.100.1" extension="LaboratoryTestResultFirstTroponinLevelGroup"/>
      </observationCriteria>
    </excerpt>
  </observationCriteria>
</entry>
<entry typeCode="DRIV">
  <localVariableName value="PatientAge"/>
  <observationCriteria moodCode="EVN" classCode="OBS">
    <id root="2.16.840.1.113883.3.100.1" extension="PatientCharacteristicPatientAge"/>
    <code xsi:type="CD" valueSet="2.16.840.1.113883.3.190.5.47">
      <displayName value="Patient Age"/>
    </code>
    <text value="Patient Characteristic: Patient Age"/>
  </observationCriteria>
</entry>
```

### 2.3 Population Criteria Section

The Population Criteria Section identifies a population using one or more Data Criteria elements. Populations can be of multiple types and are used in different ways by a variety of measure types. Each measure has a measure score that determines what population types may be used. Each population type has a normative definition stated within this HQMF standard (see Definitions).

Table 1: Allowed Population Criteria for Measure Scores

| Measure Score | Initial Population | Denominator | Denominator Exclusion | Denominator Exception | Numerator | Numerator Exclusion | Measure Population | Measure Population Exclusion |
|:----|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
| Proportion | R |R | O | O | R | O | NP | NP |
| Ratio | R | R | O | NP | R | O | NP | NP |
| Continuous Variable | R | NP | NP | NP | NP | NP | R | O |
| Cohort | R | NP | NP | NP | NP | NP | NP | NP |

#### 2.3.1 Population Criteria and Measure Scores

The following sections describe the expected result type for population criteria for each type of measure, as well as explicitly defining the measure score calculation formula.

The context of a measure is indicated using the subject element of the FHIR resource. The subject element will be a reference to a FHIR resource type, specifically including Patient, Location, Organization, Practitioner, and Device as currently specified in the extensible SubjectType binding. It is important to note that other resource types may be used, but it must be a FHIR resource type. We should also note that although the discussion is focused on Patient as the subject, the discussion applies to other subject types as well.

In addition to the measure type, measures generally fall into two categories, patient-based, and non-patient-based, such as episode-of-care-based. In general, patient-based measures count the number of patients in each population, while non-patient-based measures count the number of items (such as encounters) in each population. Although the calculation formulas are conceptually the same for both categories, for ease of expression, population criteria for patient-based measures return true or false, while non-patient-based measures return the item to be counted such as an encounter or procedure.

The measure calculation examples use Clinical Quality Language (CQL) to express the formulas, however this is only done to make the syntax and calculations clear. HQMF does not require the use of CQL.

##### 2.3.1.1 Proportion Measure Score

The population types for a Proportion measure are "Initial Population", "Denominator", "Denominator Exclusion", "Numerator", "Numerator Exclusion" and "Denominator Exception". The following diagram shows the relationships between the populations for proportion measures and the table below provides their definitions.

Figure 4: Population criteria for Proportion measures illustration

![Proportion Venn Diagram](assets/images/ProportionVenn.jpg)

Table 2: Population Criteria Definitions for Proportion Measures

| Population | Definition |
|:----|:----:|
| Initial Population (IPOP) | All entities to be evaluated by an eMeasure which may but are not required to share a common set of specified characteristics within a named measurement set to which the eMeasure belongs. |
| Denominator (DENOM) | The same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the eMeasure. |
| Denominator Exclusion (DENEX) | Entities to be removed from the Initial Population and Denominator before determining if Numerator criteria are met. Denominator Exclusions are used in Proportion and Ratio measures to help narrow the Denominator. |
| Numerator (NUMER) | The processes or outcomes for each entity defined in the Denominator of a Proportion or Ratio measure. |
| Numerator Exclusion (NUMEX) | Entities that should be removed from the eMeasure's Numerator. Numerator exclusions are used in Proportion and Ratio measures to help narrow the Numerator (for inverted measures). |
| Denominator Exception (DENEXCEP) | Those conditions that should remove a patient, procedure, or unit of measurement from the Denominator only if the Numerator criteria are not met. Denominator exceptions allow for adjustment of the calculated score for those providers with higher risk populations. |

Here is an example of using population types to select data on diabetes patients for a Proportion measure:

* Initial Population (IPOP): Patient is between the age of 16 and 74
* Denominator (DENOM): Patient has Diabetes Type II
* Numerator (NUMER): Patient is between the age of 16 and 74, has Diabetes Type II, and the most recent laboratory result has hbA1C value > 9%
* Denominator Exception (DENEXCEP): Patient meets the DENOM criteria and does NOT meet the NUMER criteria, and is designated as having "Steroid Induced Diabetes" or "Gestational Diabetes"

Figure 5: Calcuation Flow for Proportion Measures

![Calculation Flow Diagram-Proportion](assets/images/CalculationFlowDiagrams-Proportion.jpg)

* Initial population (IPOP): Identify those cases that meet the IPOP criteria.
* Denominator (DENOM): Identify that subset of the IPOP that meet the DENOM criteria.
* Denominator exclusion (DENEX): Identify that subset of the DENOM that meet the DENEX criteria. There are cases that should be removed from the denominator as exclusion. Once these cases are removed, the subset remaining would reflect the denominator per criteria.
* Numerator (NUMER): Identify those cases in the DENOM and NOT in the DENEX that meet the NUMER criteria. In proportion measures, the numerator criteria are the processes or outcomes expected for each patient, procedure, or other unit of measurement defined in the denominator.
* Numerator exclusion (NUMEX): Identify that subset of the NUMER that meet the NUMEX criteria. Numerator Exclusion is used only in ratio eMeasures to define instances that should not be included in the numerator data.
* Denominator exception (DENEXCEP): Identify those in the DENOM and NOT in the DENEX and NOT in the NUMER that meet the DENEXCEP criteria.

The “performance rate” is a ratio of patients meeting NUMER criteria, divided by patients in the DENOM (accounting for exclusion and exception). Performance rate can be calculated using this formula:

Performance rate = (NUMER - NUMEX) / (DENOM – DENEX – DENEXCEP)

###### 2.3.1.1.1 Patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a patient-based proportion measure:

```cql
context Patient

define "Denominator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"
    and not ("Denominator Exception" and not "Numerator")

define "Numerator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"
    and "Numerator"
    and not "Numerator Exclusion"

context Population

define "Measure Score":
  Count("Numerator Membership" IsMember where IsMember is true)
    / Count("Denominator Membership" IsMember where IsMember is true)
```

###### 2.3.1.1.2 Non-patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a non-patient-based proportion measure:

```cql
define "Numerator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    intersect "Numerator"
    except "Numerator Exclusion"

define "Denominator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    except ("Denominator Exception" except "Numerator")

context Population

define "Measure Score":
  Count("Numerator Membership") /
    Count("Denominator Membership")
```

##### 2.3.1.2 Continuous Variable Measure Score

The population types for a Continuous Variable measure are "Initial Population", "Measure Population", and "Measure Population Exclusion". In addition to these populations, a Measure Observation is defined which contains one or more Continuous Variable statements that are used to score one or more particular aspects of performance. The following diagram shows the relationships between the populations for Continuous Variable measures and the table below provides their definitions.

Figure 6: Population criteria for Continuous Variable measures illustration

![Continuous Variable Venn Diagram](assets/images/CVVenn.jpg)

Table 3: Population Criteria Definitions for Continuous Variable Measures

| Population | Definition |
|:----|:----:|
| Initial Population (IPOP) | All entities to be evaluated by an eMeasure which may but are not required to share a common set of specified characteristics within a named measurement set to which the eMeasure belongs. |
| Measure Population (MSRPOPL) | Continuous Variable measures do not have a Denominator, but instead define a Measure Population, as shown in the figure above. Rather than reporting a Numerator and Denominator, a Continuous Variable measure defines variables that are computed across the Measure Population (e.g., average wait time in the emergency department). A Measure Population may be the same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the eMeasure. |
| Measure Population Exclusions (MSRPOPLEX) | Patients who should be removed from the eMeasure's Initial Population and Measure Population before determining the outcome of one or more continuous variables defined within a Measure Observation. Measure Population Exclusions are used in Continuous Variable measures to help narrow the Measure Population. |

Here is an example of using the population types to select data on emergency department patients for a Continuous Variable measure:

* Initial Population (IPOP): Patient had an emergency department (ED) encounter
* Measure Population (MSRPOPL): Same as Initial Population
* Measure Population Exclusion (MSRPOPLEX): Patient had an inpatient encounter that was within 6 hours of the ED encounter or expired in the ED

Figure 7: Calcuation Flow for Continuous Variable Measure Score

![Calculation Flow Diagram-ContinuousVariable](assets/images/CalculationFlowDiagrams-ContinuousVariable.jpg)

* Initial population (IPOP): Identify those cases that meet the IPOP criteria.
* Measure population (MSRPOPL): Identify that subset of the IPOP that meet the MSRPOPL criteria.
* Measure population exclusion (MSRPOPLEX): Identify that subset of the MSRPOPL that meet the MSRPOPLEX criteria.

###### 2.3.1.2.1 Individual Observations

Individual Observations are calculated for each case in the MSRPOPL and not in the MSRPOPLEX.

###### 2.3.1.2.2 Measure Aggregates

Using individual observations for all cases in the MSRPOPL and not in the MSRPOPLEX, calculate the aggregate MSRPOPL.

Score = aggregate MSRPOPL

###### 2.3.1.2.3 Calculation

The following snippet provides precise semantics for the measure score calculation for a continuous variable measure:

```cql
define "Measure Population Membership":
  "Initial Population"
    intersect "Measure Population"
    except "Measure Population Exclusion"

context Population

define "Measure Score":
  Avg("Measure Population Membership" PopulationMember
      return "Median ED Time"(PopulationMember)
  )
```

##### 2.3.1.3 Ratio Measure Score

The population types for a Ratio measure are "Initial Population", "Denominator", "Denominator Exclusion", "Numerator" and "Numerator Exclusion". The following diagrams show the relationships between the populations for Ratio measures and the table below provides their definitions.

Figure 8: Population criteria for Ratio measures illustration

![Ratio Venn Diagram](assets/images/RatioVenn.jpg)

Figure 9: Population criteria for Ratio measures illustration

![Ratio 2 Venn Diagram](assets/images/Ratio2Venn.png)

Figure 10: Population criteria for Ratio measures illustration

![Ratio 3 Venn Diagram](assets/images/Ratio3Venn.png)

Table 4: Population Criteria Definitions for Ratio Measures

| Population | Definition |
|:----|:----:|
| Initial Population (IPOP) | All entities to be evaluated by an eMeasure which may but are not required to share a common set of specified characteristics within a named measurement set to which the eMeasure belongs. Ratio measures are allowed to have two Initial Populations, one for Numerator and one for Denominator. In most cases, there is only 1 Initial Population |
| Denominator (DENOM) | The same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the eMeasure. |
| Denominator Exclusion (DENEX) | Entities that should be removed from the Initial Population and Denominator before determining if Numerator criteria are met. Denominator exclusions are used in Proportion and Ratio measures to help narrow the Denominator. |
| Numerator (NUMER) | The outcomes expected for each entity defined in the Denominator of a Proportion or Ratio measure. |
| Numerator Exclusion (NUMEX) | Entities that should be removed from the eMeasure's Numerator before determining if Numerator criteria are met. Numerator exclusions are used in Proportion and Ratio measures to help narrow the Numerator. |

Here is an example of using the population types to select data on patients with central line catheters for a ratio measure:

* Initial Population (IPOP): Patient is aged 65 years or older and admitted to hospital
* Denominator (DENOM): Patient has a central line
* Denominator Exclusion (DENEX): Patient is immunosuppressed
* Numerator (NUMER): Patient has a central line blood stream infection
* Numerator Exclusion (NUMEX): Patient's central line blood stream infection is deemed to be a contaminant

Figure 11: Calcuation Flow for Ratio Measure Score

![Calculation Flow Diagram-Ratio](assets/images/CalculationFlowDiagrams-Ratio.jpg)

* Initial population (IPOP): Identify those cases that meet the IPOP criteria. (Some ratio measures will require multiple initial populations, one for the numerator, and one for the denominator.)
* Denominator (DENOM): Identify that subset of the IPOP that meet the DENOM criteria.
* Denominator exclusion (DENEX): Identify that subset of the DENOM that meet the DENEX criteria.
* Numerator (NUMER): Identify that subset of the IPOP that meet the NUMER criteria.
* Numerator exclusion (NUMEX): Identify that subset of the NUMER that meet the NUMEX criteria.

###### 2.3.1.3.1 Individual Observations

For each case in the DENOM and not in the DENEX, determine the individual DENOM observations.

For each case in the NUMER and not in the NUMEX, determine the individual NUMER observations.

###### 2.3.1.3.2 Measure Aggregates

Using individual observations for all cases in the DENOM and not in the DENEX, calculate the aggregate DENOM.

Using individual observations for all cases in the NUMER and not in the NUMEX, calculate the aggregate NUMER.

Ratio = aggregate NUMER / aggregate DENOM

###### 2.3.1.3.3 Patient-based Calcuation

The following snippet provides precise semantics for the measure score calculation for a patient-based ratio measure:

```cql
context Patient

define "Denominator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"

define "Numerator Membership":
  "Initial Population"
    and "Numerator"
    and not "Numerator Exclusion"

context Population

define "Measure Ratio Numerator":
  Count("Numerator Membership" IsMember where IsMember is true)

define "Measure Ratio Denominator":
  Count("Denominator Membership" IsMember where IsMember is true)
```

###### 2.3.1.3.4 Non-patient-based Calculation

The following snippet provides precise semantics for the measure score calculation for a non-patient-based ratio measure:

```cql
define "Numerator Membership":
  "Initial Population"
    intersect "Numerator"
    except "Numerator Exclusion"

define "Denominator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"

context Population

define "Measure Score Numerator":
  Count("Numerator Membership")

define "Measure Score Denominator":
  Count("Denominator Membership")
```

##### 2.3.1.4 Cohort Measure Score

In a cohort measure, a population is identified from the population of all items being counted. For example, one might identify all the patients who have had H1N1 symptoms. The identified population is very similar to the Initial Population but is called a Cohort Population for public health purposes. In the Constrained Information Model (CIM), the population will be expressed using the InitialPopulationCriteria act. The Cohort Population result is used by public health agencies to trigger specific public health activities. The following diagram depicts the population for a Cohort measure and the table below provides its definition.

Figure 12: Population criteria for Cohort measures illustration

![Cohort Venn Diagram](assets/images/CohortVenn.jpg)

Table 5: Population Criteria Definitions for Cohort Measures

| Population | Definition |
|:----|:----:|
| Initial Population (IPOP) | All entities to be evaluated by an eMeasure which may but are not required to share a common set of specified characteristics within a named measurement set to which the eMeasure belongs. (Also known as a Cohort Population) |

Here is an example of using the population types to select data on patients who have received immunizations for a Cohort measure:

* Initial Population (IPOP): All patients who had an immunization

Figure 13: Calcuation Flow for Cohort

Calculation Flow Diagram-Cohort

* Initial population (IPOP): Identify those cases that meet the IPOP criteria.

#### 2.3.2 Population Criteria and Data Criteria

Population Criteria are constructed using Data Criteria to appropriately identify the right population. In order to use multiple Data Criteria to filter out populations, the Data Criteria are combined logically using "AND/OR/XOR" operators. These operators appear in the form of:

* "AllTrue" and "AllFalse", representing AND and NOR operators respectively
* "AtLeastOneTrue" and "AtLeastOneFalse" representing OR and NAND operators respectively
* "OnlyOneTrue" and "OnlyOneFalse" representing XOR operator

For example, to identify an Initial Population consisting of male patients between the ages of 16-74, we would construct two Data Criteria elements and combine them as follows:

* Data Criteria Element 1: "Patient is between the ages of 16-74"
* Data Criteria Element 2: "Patient is male"
* Combine the above two criteria using the "AllTrue" operator (which is a logical AND) to extract the Initial Population desired.

#### 2.3.3 Population Criteria and Items Counted

Most eMeasures need the ability to designate what a population is counting. For example, a single measure may need to look at how many patients met a particular criterion, the number of beds available for those patients, and the number of staff treating those patients. To express this, Items Counted (ITMCNT) is provided as a Measure Attribute so that a population can make explicit what is being counted.

Items Counted can be specified at the document level or at the specific population level using the measureAttribute act class.

### 2.4. Stratifiers

Stratifiers are constructed using Data Criteria and used to specify how the results need to be grouped.

For example:

    Identify all patients between the ages of 16 and 74 and stratify the counts by gender.

In the above example, the stratification criteria refer to gender and age Data Criteria elements to group the counts of patients between 16 and 74.

When a measure definition includes stratification, each population in the measure definition should be reported both without stratification, and stratified by each stratification criteria. Specific programs may require reporting of performance rates. The performance rate is defined as

Performance rate = (NUMER - NUMEX) / (DENOM – DENEX – DENEXCEP)

For measures with multiple numerators and/or strata, each patient/episode must be scored for inclusion/exclusion to every population. For example if a measure has 3 numerators, and the patient is included in the first numerator, the patient should be scored for inclusion/exclusion from the populations related to the other numerators as well.

#### 2.6 Human Readability and Rendering HQMF Documents

HQMF requires that a receiver of an eMeasure be able to deterministically display the document in a standard Web browser such that a human reader would extract the same quality data as would a computer that is basing the extraction on formally encoded eMeasure entries. Material within a section to be rendered is placed into the section.text field. The content model of this field is the same as that used for other Structured Document specifications (e.g., Clinical Document Architecture, Structured Product Labeling).

The following conformance constraints relate to the rendered content of an HQMF document:

* A recipient of an eMeasure SHALL be able to parse and interpret the document sufficiently to render it, using the rendering rules in the Section Narrative Block.
* HQMF header fields, which SHALL be rendered if present, include the following attributes, participants, and relationships:
  * QualityMeasureDocument.title
  * QualityMeasureDocument.text
  * QualityMeasureDocument.statusCode
  * QualityMeasureDocument.effectiveTime
  * QualityMeasureDocument.versionNumber
  * QualityMeasureDocument.author
  * QualityMeasureDocument.custodian
  * QualityMeasureDocument.verifier
    * QualityMeasureDocument.verifier.time
* QualityMeasureDocument.componentOf. QualityMeasureSet. title
* QualityMeasureDocument.subjectOf. MeasureAttribute code value pairs
* HQMF section fields which if present must be rendered include:
  * Section.title
  * Section.text (must be rendered per the rules defined in Section Narrative Block).
A creator of an eMeasure SHALL properly populate section.text and Section Narrative Blocks such that a recipient, adhering to the recipient requirements above, will render the document such that a human reader would extract the same quality data as would a computer that is basing the extraction on formally encoded eMeasure entries.

To avoid confusion among readers, narrative block and rendered content must be differentiated. Rendered Content refers to all the elements that a recipient must be able to render for the document as a whole. This includes QualityMeasureDocument.title and QualityMeasureDocument.text elements where a narrative description of the eMeasure is stored, and to the Section.text and Section.title elements where narrative text to be rendered is stored. "Narrative Block" specifically refers to section.text elements in every section.

The textual elements at the document level and the section level can contain all the required information for a measure in a narrative form, however it cannot be verified or automated to provide consistent processing.

#### 2.7 Encoding eMeasure Quality Statements

##### 2.7.1 General Approach

Quality measures exist in a variety of formats today. The HQMF specification, while providing formalism for query measure statements, also provides an incremental approach where one can:

* Create a minimally conformant eMeasure that simply wraps an existing quality measure in any electronic format within the HQMF header.
* Represent the full narrative of a quality measure within the narrative blocks of HQMF defined sections.
* Enhance the full narrative within the HQMF XML with a formalized representation of quality statements. This formalism is based on the following approach, which serves to modularize the process and make it understandable, reusable, and implementable via an eMeasure authoring tool:
  1. Data criteria are defined: A criterion ("age is greater than 18", "antibiotic was prescribed", "diminished renal capacity", "length of stay less than 120 days") is an assertion that can be found to be true or false, when comparing against raw data (either QRDA documents or EHR data).Formally, Data Criteria return sets of matching data nodes which pass the assertions stated in the Data Criteria. Hence, an empty data set resolves to "false" , while a non-empty set resolves to "true". Filters can then be applied to a returned non-empty data set. Data Criteria in HQMF are used primarily to determine whether or not the item being counted (e.g., patients, encounters, procedures, etc.) is included in a measure's Population, Numerator, Denominator, etc. For instance, a measure might say that "to be included in the Denominator, a patient must have age greater than 18 and antibiotic therapy prescribed". HQMF formalizes Data Criteria by expressing them as RIM patterns coupled with vocabularies. Where a patient or the item being counted has an object in EHR that is subsumed by Data Criteria, those criteria can be deemed true for that patient or item being counted. Most measures focus on counting the number of patients that meet certain Data Criteria. However, this may not always be the case. An example of a non-patient centric measure is NQF #0435, which counts encounters where Ischemic stroke patients were prescribed antithrombotic therapy at hospital discharge (the item being counted here would be encounters and not actual patients).
  2. Population Criteria are defined: Criteria for Numerator, Denominator, and other measurement populations are defined based on the underlying Data Criteria. For instance, the criteria for a patient to be part of a measure's Denominator might be that the patient meets the criteria for "diminished renal capacity" and does not meet the criteria that "antibiotic was prescribed". Population Criteria, like Data Criteria, are assertions that can be found to be true or false, thereby providing a means for HQMF to formalize a measure's population parameters.
  3. Measure observations are defined: While some quality measures only define Data Criteria and Population Criteria, other quality measures also define variables or calculations that are used to score a particular aspect of performance. For instance, a measure intends to assess the use of restraints. Population criteria for the measure include "patient is in a psychiatric inpatient setting" and "patient has been restrained". For this population, the measure defines a measure observation of "restraint time" as the total amount of time the patient has been restrained. Measure observations are not criteria, but rather, are definitions of observations, used to score a measure. Examples in Public Health Reporting Requirements include:
      * Next shot due date and administration of the same vaccine > 1 month
      * Significant increase in BMI- increase of BMI>10% in a 6 month period

These steps are described in greater detail in the chapters that follow. HQMF entries corresponding to these steps are segregated into different sections in an eMeasure.

##### 2.7.2 Patient Criteria vs. Aggregate Scores

Terms like "numerator" and "denominator" can be ambiguous, in that they can refer to [1] the criteria for determining if an individual patient is included in a particular population (e.g., "numerator criteria are inpatient AND diagnosis of pneumonia AND treated with antibiotic"); [2] the total count of patients meeting the criteria (e.g., "27 patients meet the numerator criteria"); [3] the top or bottom of a fraction (e.g., "the numerator is total restraint time, the denominator is total psychiatric inpatient days"). HQMF differentiates these interpretations in a number of ways:

* Data criteria and population criteria are expressed as individual patient criteria. In other words, criteria are constructed such that one can determine whether or not a particular patient meets the criteria.
* HL7 has distinct codes to distinguish between the interpretations. For example, the code "included in denominator" is an assertion (represented in HQMF as an observation value) that a patient has met the denominator criteria; whereas the code "denominator count" is an observation (represented as an observation code) that carries a value.
* Measure Observations are not implicitly tied to any particular population and can explicitly reference the population over which they apply. For example, a measure defines a Measure Observation "average systolic blood pressure" as the sum of systolic blood pressures divided by the number of blood pressure readings. While the "sum of systolic blood pressures" is the numerator of an equation, it bears no relationship to the measure's numerator population. In fact, a quality organization may require that "average systolic blood pressure" be reported on any of the measure populations. Examples in Public Health Reporting Requirements include:
  * Exposure duration
    * Time from screening to consultation
    * Exposure to lead for more than 30 days
    * Exposure to treatment
  * Foreign travel in excess of 1 week

##### 2.7.3 Measure Definition vs. Reporting Requirements

Organizations with a variety of quality reporting goals can collect data based on the same eMeasure, but stipulate different reporting requirements. For example, several organizations might be interested in the use of antibiotics in patients with bronchitis. An eMeasure could then define the nenominator criteria as "encounter with diagnosis of bronchitis", and the numerator criteria as "antibiotic prescription is written". One quality organization wishes to receive a quarterly summary where all qualifying encounters are reported, stratified by age; whereas another quality organization requests semi-annual reports, where, in order to minimize the human burden of chart review, only 20% of encounters with a diagnosis of bronchitis need to be sampled.

A "measure definition" includes those components of a quality measure that are fixed and universally applicable, whereas "reporting requirements" are not part of a measure's definition, and can vary across organizations. While the dividing line is not absolute, common reporting requirements that are not typically defined as part of an eMeasure include reporting frequency, sampling, etc.

#### 2.8 Data Collection, Missing Data and Corrupt or Invalid Data

HQMF eMeasure's Data and Population Criteria specify what measure population group the item being counted belongs to (e.g., Initial Population, Denominator, Denominator Exclusion, Numerator). For each Data or Population Criteria element defined in a HQMF measure, an item's EHR data can have three possible results:

1. The data for the item being counted meet the criterion.
2. The data for the item being counted do not meet the criterion.
3. Unknown item data or missing data.

For result #1 or #2, it is straightforward to evaluate what population group the item should belong to, based upon criterion satisfaction.

For result #3, since HQMF measures normally do not provide guidance on how to deal with the unknown result, there are often questions. Does or does not the item being counted meet the criterion? How can one determine a measure population group based on unknown result? Should a query continue to retrieve other data for the item being counted for the rest of the measure criteria?

To eliminate confusion and inconsistency in interpreting unknown data or missing data, the following constraint will apply: if data are unknown or missing, they SHALL fail the criteria unless otherwise specified in the measure.

To specify criteria around missing data, a measure can include missing data constructs using null flavors as part of the measure definition itself. For more information on this topic, refer to PopulationCriteriaSection.

While developing eMeasures, another aspect measure authors might need to account for is corrupt or invalid data. For example, assuming that one measure has a criterion of systolic blood pressure greater than 130, invalid and obviously misreported values such as systolic BP of 2000 might be reported as part of the criteria results.

For corrupt or invalid data, measure authors may need to take additional steps to construct HQMF eMeasures in a way that either reduces the chance of invalid values contaminating the result pool or reports invalid/corrupt data values separately using stratifiers. Although reporting invalid data is not explicitly defined in HQMF as a separate section, there are several strategies to deal with the situation.

One methodology is to define Data Criteria with caps at values deemed appropriate for the measure, using the appropriate Boolean logic (see the chapter on Logical Groupers) to check for false criteria before including a result into the result set.

A second approach is to use stratifiers (see the chapter on StratifierCriteria) to group the outlier/corrupt data values separately so measure authors have an idea if and when their Data Criteria are returning values that might skew the results. This would require a measure developer to create the Data Criteria needed to pick out only the outlier values and then use the stratifier criteria entry to group these values together. An important point to note is that this approach does not remove these values from the overall result set as in the previous approach. It only makes it easier for developers to identify that such values exist in the data set.


---

File: repos/HL7_SLASH_cqf-measures/input/pages/measure-conformance.md

{:toc}

In FHIR, a Quality Measure (QM) is represented as a [Measure](http://hl7.org/fhir/R4/measure.html) resource containing metadata ([Section 3.1](#metadata)) and terminology ([Section 3.2](#terminology)), a population criteria section ([Section 3.4](#population-criteria)), a data criteria section ([Section 3.3](#data-criteria)) and a FHIR Library resource containing the logic used to define the criteria used in the measure. The population criteria section typically contains initial population criteria, denominator criteria, and numerator criteria sub-components, among others. Snippet 3-1 shows the structure of a FHIR Measure.

```xml
<Measure>
  <!-- metadata for the measure - snipped for brevity -->
  <effectivePeriod>
    <start value="2018-01-01"/>
    <end value="2018-12-31"/>
  </effectivePeriod>
  <library value="http://hl7.org/fhir/uv/cqfmeasures/Library/EXMLogic-FHIR"/>
  <group>
    <population>
      <code>
        <coding>
          <system value="http://terminology.hl7.org/CodeSystem/measure-population"/>
          <code value="initial-population"/>
        </coding>
      </code>
      <criteria>
        <language value="text/cql-identifier"/>
        <expression value="Initial Population"/>
      </criteria>
    </population>
    <population>
      <code>
        <coding>
          <system value="http://terminology.hl7.org/CodeSystem/measure-population"/>
          <code value="denominator"/>
        </coding>
      </code>
      <criteria>
        <language value="text/cql-identifier"/>
        <expression value="Denominator"/>
      </criteria>
    </population>
    <population>
      <code>
        <coding>
          <system value="http://terminology.hl7.org/CodeSystem/measure-population"/>
          <code value="numerator"/>
        </coding>
      </code>
      <criteria>
        <language value="text/cql-identifier"/>
        <expression value="Numerator"/>
      </criteria>
    </population>
  </group>
</Measure>
```
{: #content-pre}

Snippet 3-1: FHIR Measure structure - abridged for clarity (from sample [Measure-EXMLogic.xml](Measure-EXMLogic-FHIR.html))

**Conformance Requirement 3.1 (Measure Specifications):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-1)
{: #conformance-requirement-3-1}

1. FHIR-based Quality Measures SHALL consist of a FHIR Measure resource conforming to at least the [CRMIShareableMeasure profile]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablemeasure.html).
2. In addition, measures with a status of active SHALL conform to the [CRMIPublishableMeasure profile]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablemeasure.html) in particular. 
3. FHIR-based measures SHALL contain a narrative containing a human-readable representation of the measure content.
    a. Narrative should be consistent with the narratives in this IG. Liquid templates are provided as informative resources to facilitate consistency across measures. [Measure.liquid](https://github.com/cqframework/sample-content-ig/blob/master/templates/liquid/Measure.liquid)

### Metadata
{: #metadata}

The header of a QM identifies and classifies the measure and provides important metadata about the measure. 

The rest of this section describes some of the more important components to the header, such as “Related Documents” ([Section 3.1.1](#related-documents)), “Measurement Period” ([Section 3.1.2](#measurement-period)), and “Data Criteria” ([Section 3.3](#data-criteria)).

#### Related Documents
{: #related-documents}

[Clinical Quality Language R1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400) can be used in conjunction with the FHIR Measure resource to construct CQL-based quality measures. CQL is a domain specific language used in the Clinical Quality Measurement and Clinical Decision Support domains. Measures written in CQL leverage the expressivity and computability of CQL to define the population criteria used in the QM. This implementation guide supports the use of CQL version 1.5 (currently published as Errata 1, version 1.5.2), however any future backward-compatible version of the specification may be used.

For measures that make use of CQL, any included CQL library must contain a library declaration line as its first line as in Snippet 3-2.

```cql
library EXM146 version '4.0.0'
```

Snippet 3-2: Library declaration line from [EXM146.cql](Library-EXM146-FHIR.html#cql-content)

When using multiple CQL libraries to define a measure, refer to the [Nested Libraries]({{site.data.fhir.ver.cql}}/using-cql.html#nested-libraries) section of the [Using CQL](using-cql.html) topic of this guide.

Inclusion of CQL in a FHIR QM is accomplished through the use of a FHIR Library resource as shown in Snippet 3-4. These libraries are then incorporated into the FHIR QM using the `library` element of the Measure (Snippet 3). CQL library content is encoded as `base64` and included as the `content` element of the Library resource.

```xml
<library value="http://hl7.org/fhir/uv/cqfmeasures/Library/EXMLogic-FHIR"/>
```
Snippet 3-3: `library` element from Snippet 3-1

**Conformance Requirement 3.2 (Referencing CQL Documents):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-2)
{: #conformance-requirement-3-2}

1. FHIR-based measures that make use of CQL SHALL use the [CQLLibrary](http://hl7.org/fhir/uv/cql/StructureDefinition/cql-library) profile.
4. FHIR-based measures that use CQL MAY reference other CQL libraries, but only the primary measure library is specified in the library element of the measure.

Snippet 3-4 illustrates a FHIR Library resource containing a CQL library with a stable, globally unique, version-independent identifier for the library, the `url`. If the library has a version specified, the `version` element is used as well.

```json
{
  "resourceType": "Library",
  "id": "exm-146",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/cql/StructureDefinition/cql-library"
    ]
  },
  "url": "http://hl7.org/fhir/uv/cqfmeasures/Library/exm-146",
  "identifier": [
    {
      "use": "official",
      "system": "http://example.org/fhir/cqi/ecqm/Library/Identifier",
      "value": "EXM146"
    }
  ],
  "version": "4.0.0",
  "name": "EXM146",
  "title": "EXM146 - Example Proportion Measure Library",
  "status": "active",
  "experimental": true,
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/library-type",
        "code": "logic-library"
      }
    ]
  },
  "date": "2019-09-03",
  "publisher": "Health Level 7 International - Clinical Quality Information Work Group",
  "contact": [
    {
      "telecom": [
        {
          "system": "url",
          "value": "http://www.hl7.org/Special/committees/cqi/index.cfm"
        }
      ]
    }
  ],
  "description": "This library is used as an example in the FHIR Quality Measure Implementation Guide",
  "useContext": [
    {
      "code": {
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "code": "program"
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://hl7.org/fhir/uv/cqfmeasures/CodeSystem/quality-programs",
            "code": "ep-ec",
            "display": "EP/EC"
          }
        ]
      }
    }
  ],
  "jurisdiction": [
    {
      "coding": [
        {
          "system": "urn:iso:std:iso:3166",
          "code": "US"
        }
      ]
    }
  ],
  "approvalDate": "2019-08-03",
  "lastReviewDate": "2019-08-03",
  "relatedArtifact": [
    {
      "type": "depends-on",
      "resource": "http://hl7.org/fhir/Library/FHIR-ModelInfo|4.0.1"
    },
    {
      "type": "depends-on",
      "resource": "http://hl7.org/fhir/Library/FHIRHelpers|4.0.1"
    },
    {
      "type": "depends-on",
      "resource": "http://hl7.org/fhir/Library/Common|2.0.0"
    },
    {
      "type": "depends-on",
      "resource": "http://somewhere.org/fhir/uv/mycontentig/Library/MATGlobalCommonFunctions|5.0.000"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1012"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1061"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.196.12.1001"
    },
    {
      "type": "depends-on",
      "resource": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1012"
    }
  ],
  "parameter": [
    {
      "name": "Measurement Period",
      "use": "in",
      "min": 0,
      "max": "1",
      "type": "Period"
    },
    {
      "name": "Patient",
      "use": "out",
      "min": 0,
      "max": "1",
      "type": "Patient"
    },
    {
      "name": "Is Between 2 and 17 Years of Age at Start of Measurement Period",
      "use": "out",
      "min": 0,
      "max": "1",
      "type": "boolean"
    },
    {
      "name": "Antibiotics",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "MedicationRequest"
    },
    {
      "name": "Pharyngitis",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Condition"
    },
    {
      "name": "Measurement Period Encounters",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Pharyngitis Encounters With Antibiotics",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Initial Population",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Pharyngitis With Prior Antibiotics",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Condition"
    },
    {
      "name": "Excluded Encounters",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Denominator Exclusions",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Strep Test Encounters",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    },
    {
      "name": "Numerator",
      "use": "out",
      "min": 0,
      "max": "*",
      "type": "Encounter"
    }
  ],
  "dataRequirement": [
    {
      "type": "MedicationRequest",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest"
      ],
      "codeFilter": [
        {
          "path": "medication",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.196.12.1001"
        }
      ]
    },
    {
      "type": "Condition",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Condition"
      ],
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011"
        }
      ]
    },
    {
      "type": "Condition",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Condition"
      ],
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1012"
        }
      ]
    },
    {
      "type": "Encounter",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Encounter"
      ],
      "codeFilter": [
        {
          "path": "type",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1061"
        }
      ]
    },
    {
      "type": "Observation",
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/Observation"
      ],
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1012"
        }
      ]
    }
  ],
  "content": [
    {
      "contentType": "text/cql",
      "data": "bGli...Cg=="
    },
    {
      "contentType": "application/elm+xml",
      "data": "PD94...Cg=="
    },
    {
      "contentType": "application/elm+json",
      "data": "ew0K...DQp9"
    }
  ]
}
```

Snippet 3-4: Example CQL Library (from [library-EXM146.json](Library-EXM146-FHIR.html#cql-content))

Inclusion of CQL libraries within the FHIR-based QM framework must conform to [Conformance Requirement 3.2](#conformance-requirement-3-2).

##### Including ELM
{: #including-elm}

CQL defines both a human-readable text representation and a machine-oriented representation called the Expression Logical Model (ELM), which can be represented using XML or JSON. The human-readable text representation is optimized for authoring while the ELM representation offers a canonical, simplified representation that is easier to implement in software. Any CQL expression can be directly translated to its ELM equivalent. Measure authors do not work with ELM directly; rather authoring tools convert CQL to the ELM representation for distribution.

Both CQL and ELM representations may be included in the Library resource depending on the expected capabilities of the consuming environment. See the [Packaging](packaging.html) topic for more information on how measures can be packaged for different use cases, including supporting human readability (in this case, the high-level CQL syntax) and a canonical representation for machine processing (in this case, CQL’s Expression Logical Model (ELM)). This approach facilitates human review of measure logic via CQL and implementation of that logic in tools via ELM. For implementations unable to compile CQL, ELM representations should be included.

**Conformance Requirement 3.3 (Referencing ELM Documents):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-3)
{: #conformance-requirement-3-3}

1. To support implementations that cannot compile CQL, an ELM translation SHOULD be provided, in either XML or JSON format.
2. FHIR-based measures that make use of ELM SHALL use the [ELMLibrary](http://hl7.org/fhir/uv/cql/StructureDefinition/elm-xml-library) or [ELMJSONLibrary](http://hl7.org/fhir/uv/cql/StructureDefinition/elm-json-library) profile.
3. When ELM translations are provided, they SHALL be semantically equivalent to the corresponding CQL library

The content elements in Snippet 3-4 provide an example of how a Library resource would contain both the CQL and the ELM as base-64-encoded strings (conforming to the CQLLibrary, ELMXMLLibrary, and ELMJSONLibrary profiles). More information on using ELM can be found in the [Using ELM]({{site.data.fhir.ver.cql}}/using-elm.html) topic in the Using CQL With FHIR implementation guide. 

For examples of ELM using the XML and JSON representations please see the included examples, [EXM146.xml](Measure-EXM146-FHIR.xml.html) and [EXM146.json](Measure-EXM146-FHIR.json.html).

#### Measurement Period
{: #measurement-period}

The Measure resource uses the `effectivePeriod` element to define the "Measurement Period", a control variable as metadata that influences the computation of measures. Snippet 3-5 demonstrates how to provide the "Measurement Period" in the Measure (line: 3 of Snippet 3-1).

'Measurement Period' is anchored by the `effectivePeriod` element but not necessarily directly represented.

```xml
<effectivePeriod>
  <start value="2018-01-01"/>
  <end value="2018-12-31"/>
</effectivePeriod>
```

Snippet 3-5: Measure representation of the "Measurement Period" control variable from [(measure-exmlogic.xml)](Measure-EXMLogic-FHIR.xml.html)

For measures that use CQL, the value of the "Measurement Period" control variable is accessible to CQL libraries as a parameter called "Measurement Period". Snippet 3-6 shows an example of a CQL library declaring this parameter.

```cql
parameter "Measurement Period" Interval<DateTime>
```

Snippet 3-6: CQL declaration of the measurement period parameter (from [EXM146.cql](Library-EXM146-FHIR.html#cql-content))

Rather than specifying a static effective period, implementations may specify the effective period using a start date and a reporting period duration.

This implementation guide defines two extensions, [`cqfm-effectivePeriodAnchor`](StructureDefinition-cqfm-effectivePeriodAnchor.html) and [`cqfm-effectivePeriodDuration`](StructureDefinition-cqfm-effectivePeriodDuration.html) to support this alternative.

As shown below in Snippet 3-7, a measure anchored to January 1, 2019 with a calendar duration of 1 year, would have valid Measurement Periods of 1/1/2019-12/31/2019, 1/1/2020-12/31/2020, etc. Note that although UCUM definite-duration units are required within FHIR, the semantics in this case use calendar duration semantics.

```xml
<effectivePeriod>
	<extension url="http://hl7.org/fhir/uv/cqfmeasures/cqfm-effectivePeriodAnchor">
		<valueDateTime value="2019-01-01"/>
	</extension>
	<extension url="http://hl7.org/fhir/uv/cqfmeasures/cqfm-effectivePeriodDuration">
		<valueDuration>
			<value value="1"/>
			<code value="a"/>
		</valueDuration>
	</extension>
</effectivePeriod>
```
Snippet 3-7: Example of [effectivePeriodAnchor extension](StructureDefinition-cqfm-effectivePeriodAnchor.html) (used to define the starting date and range) and [effectivePeriodDuration extension](StructureDefinition-cqfm-effectivePeriodDuration.html) (used to specify the reporting period).

**Conformance Requirement 3.4 (Measurement Period):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-4)
{: #conformance-requirement-3-4}

1. FHIR-based QMs SHALL provide either an `effectivePeriod` element, or an `cqfm-effectivePeriodAnchor` and `cqfm-effectivePeriodDuration` extension
2. Measurement Period SHALL be either the `effectivePeriod` as specified, or an appropriate interval of length duration, starting at the specified anchor


### Terminology
{: #terminology}

This section describes how to use codes and valuesets from codesystems like LOINC, SNOMED-CT, and others within FHIR-based QMs.

When terminology artifacts are defined and distributed as part of quality measure content, guidance provided as part of the [Canonical Resource Management Infrastructure IG]({{site.data.fhir.ver.crmi}}/packaging.html#artifact-terminology) should be followed.

When using CQL to represent measure criteria, valuesets and direct-reference codes used by the expressions are declared in the header section of the CQL using the CQL valueset and code constructs. Examples of code system, valueset, and code declarations can be seen in the accompanying [CommonTerminologies.cql](Library-CommonTerminologies.html#cql-content) and [Terminology.cql](Library-Terminology-FHIR.html#cql-content).


```cql
codesystem 'SNOMEDCT:2017-09': 'http://snomed.info/sct'
  version 'http://snomed.info/sct/731000124108/version/201709'
```

Snippet 3-8: CQL declaration of a codesystem (from [CommonTerminologies.cql](Library-CommonTerminologies.html))

```cql
valueset "Encounter Inpatient SNOMEDCT Value Set":
   'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929'

code "Venous foot pump, device (physical object)": '442023007' from "SNOMED-CT:2017-09"
```

Further discussion of codesystem, valueset, and code can be found in the [Using CQL Chapter](using-cql.html) of this IG, sections [4.3](using-cql.html#code-systems), [4.4](using-cql.html#value-sets), and [4.5](using-cql.html#codes).

For measures that use CQL, valuesets and direct-reference codes that are associated with data access expressions can be found in the `dataRequirement` elements in the Library resource referenced by the Measure resource.

```json
"dataRequirement": [
  {
    "type": "CodeableConcept",
    "codeFilter": [
      {
        "valueCoding": {
          "system": "http://snomed.info/sct",
          "version": "http://snomed.info/sct/731000124108/version/201709",
          "code": "442023007",
          "display": "Venous foot pump, device (physical object)"
        }
      }
    ]
  },
  {
    "type": "Encounter",
    "codeFilter": [
      {
        "path": "type",
        "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929"
      }
    ]
  }
]
```

Snippet 3-9: Example Library terminology definitions (from [library-Terminology.json](Library-Terminology-FHIR.json.html))

Regardless of whether a measure uses CQL, all valuesets and direct-reference codes referenced by the measure are surfaced in the [_effective data requirements_](StructureDefinition-computable-measure-cqfm-definitions.html#diff_Measure.extension:effectiveDataRequirements) library for a computable measure. 

**Conformance Requirement 3.5 (Terminology Inclusion):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-5)
{: #conformance-requirement-3-5}

Measures using valueset and/or direct-reference codes SHALL conform to the requirements of Conformance Requirement 3.5.

1. All valuesets referenced by the measure SHALL be included in the _effective data requirements_ Library using relatedArtifact elements:
  a. The code element of the relatedArtifact SHALL be depends-on
  b. The resource element of the relatedArtifact SHALL be the canonical URL of the referenced value set.
  c. If the library valueset declaration includes a version, the canonical URL SHALL include the version specified in the declaration using canonical URL version syntax (i.e. `|version`)
  d. The display element of the relatedArtifact SHALL include either
    1. The identifier of the valueset declaration in the CQL, if the measure is using CQL
    2. The `name` of the valueset
2. All direct-reference codes referenced by the measure SHALL be included in the _effective data requirements_ Library using the cqf-directReferenceCode extension:
  a. The code and system elements of the Coding SHALL be set to the code and system of the declaration, if the measure is using CQL
  b. If the code declaration includes a display, it SHALL be used as the display of the Coding, otherwise, the identifier of the code declaration SHALL be used as the display

For example, in the following CQL, the reference to the code `"Venous foot pump, device (physical object)"` occurs in the `"DeviceUseStatement"` retrieve, while the reference to the code `"Right foot"` occurs outside the context of the retrieve:

```cql
define "Venous Foot Pumps Applied":
  ["DeviceUseStatement": code in "Venous foot pump, device (physical object)"] D
    where D.status = 'completed'
      and D.bodySite ~ ToConcept("Right foot")
```

Snippet 3-10: Example expression using direct-reference codes in both a retrieve expression and a where clause

This expression results in the following in the _effective data requirements_ Library for the measure:

1. A cqf-directReferenceCode element for the "Venous foot pump, device (physical object)" code
2. A cqf-directReferenceCode element for the "Right foot" code
3. A dataRequirement element for the `DeviceUseStatement` with a reference to the "Venous foot pump, device (physical object)" code

### Data Criteria
{: #data-criteria}

The data criteria section defines the patient data of interest for the measure as a set of `dataRequirement` entries. Each entry identifies specific types of data along with constraints that the data must meet. Snippet 3-11 shows an example of a data criteria entry indicating an "Encounter".

```json
"dataRequirement": [
  {
    "type": "Encounter",
    "codeFilter": [
      {
        "path": "type",
        "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929"
      }
    ]
  }
]
```

Snippet 3-11: Example data criteria (from [library-Terminology.json](Library-Terminology-FHIR.json.html))

**Conformance Requirement 3.6 (Data Criteria Inclusion):**[<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-6)
{: #conformance-requirement-3-6}

1. `dataRequirement` entries SHALL be included in the _effective data requirements_ Library for each data element referenced by the measure

For measures that use CQL, these data requirements may be inferred by analysis of the retrieve expressions used by the measure criteria. As discussed in the Using CQL With FHIR implementation guide, Library resources used to contain CQL libraries should surface the dependencies, terminologies, and data requirements of the CQL. Whether using CQL or some other expression representation, the dependencies, terminologies, and data requirements used by expressions referenced by the measure are surfaced in the _effective data requirements_ Library for the measure to promote structured review of the data criteria for a Library (and by examining Libraries referenced by a Measure, for a Measure or set of Measures) for the following use cases:

* Determining the set of data used by a particular QM.
* Limited “scoop-and-filter” for creation of quality reports. Implementations desiring or required to comply with privacy policies that mandate or recommend fine-grained filtering should examine the expression logic (CQL, ELM, or otherwise) to determine additional data constraints necessary for adherence to those policies.

Section 3.3.1 describes a means for deriving data requirements from CQL data references as found in the Retrieve elements of the compiled ELM.

#### Use of ELM
{: #use-of-elm}

For measures that use CQL, the canonical representation of ELM makes it straightforward to derive data requirements for CQL data references to comply with Conformance Requirement 3.6:

**Conformance Requirement 3.7** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-7) 
{: #conformance-requirement-3-7}

1. Systems SHOULD populate dataRequirements for each ELM Retrieve element. Each dataRequirement:
  - SHALL have a `type` element representing the type of the retrieve
  - SHALL have a profile element with the value of the templateId attribute of the retrieve, if present
  - If the Retrieve element has a `codes` element referencing a ValueSet, the dataRequirement SHALL have a codeFilter.valueSet element
  - If the Retrieve element has a `codes` element with a direct reference code, the dataRequirement SHALL have a codeFilter.code element

Systems that can optimize terminology restrictions may include filters that can be inferred from the CQL in the data requirements to provide more selective data requirements.

Note that if the data model does not specify profile identifiers, the ELM retrieves will not have a `templateId` specified. In this case, the name of the type in the data model is used.

To illustrate the mapping, Snippet 3-12 shows an ELM data reference and corresponding dataRequirement in both XML and JSON

XML:
```xml
<def name="Acute Pharyngitis" id="http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011" accessLevel="Public" />
```
```xml
<operand dataType="fhir:Condition" xsi:type="Retrieve">
    <codes name="Acute Pharyngitis" xsi:type="ValueSetRef" />
</operand>
```

JSON:
```json
"def": [
  {
    "name": "Acute Pharyngitis",
    "id": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011",
    "accessLevel": "Public"
  }
]
```
```json
"operand": [
  {
    "dataType": "{http://hl7.org/fhir}Condition",
    "codeProperty": "code",
    "type": "Retrieve",
    "codes": {
       "name": "Acute Pharyngitis",
       "type": "ValueSetRef"
    }
  }
]
```

Snippet 3-12: ELM data reference for Condition: Acute Pharyngitis (from [EXM146_FHIR-4.0.0.xml](Measure-EXM146-FHIR.xml.html) and [EXM146_FHIR-4.0.0.json](Measure-EXM146-FHIR.json.html))

```json
{
  "type": "Condition",
  "codeFilter": [
    {
      "path": "code",
      "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011"
    }
  ]
}
```

Snippet 3-13: dataRequirement for Condition: Acute Pharyngitis (from [library-EXM146.json](Library-EXM146-FHIR.xml.html))

### Population Criteria
{: #population-criteria}

The Population Criteria (Snippet 3-14) includes definitions of criteria used to specify populations. For computable measures, these criteria SHALL be represented using a formal expression language. Measures SHOULD use CQL for this purpose, and this implementation guide describes conformance expectations for measures that use CQL. Other expression languages MAY be used, but the conformance expectations for other expression languages would need to be defined in a related implementation guide.

```xml
<group>
  <population>
    <code><coding><code value="initial-population"/></coding></code>
    <criteria>
      <language value="text/cql-identifier"/>
      <expression value="Initial Population"/>
    </criteria>
  </population>
  <population>
    <code><coding><code value="denominator"/></coding></code>
    <criteria>
      <language value="text/cql-identifier"/>
      <expression value="Denominator"/>
    </criteria>
  </population>
  <population>
    <code><coding><code value="numerator"/></coding></code>
    <criteria>
      <language value="text/cql-identifier"/>
      <expression value="Numerator"/>
    </criteria>
  </population>
</group>
```

Snippet 3-14: Population Criteria from Snippet 3-1 (FHIR Measure structure - abridged for clarity (from sample [Measure-EXMLogic.xml](Measure-EXMLogic-FHIR.xml.html)))

CQL provides the logical expression language that is used to define population criteria. CQL-based constraints are then referenced from the group elements of the FHIR Measure resource. Once included in the FHIR Measure, expressions defined in the CQL can be used to further refine the data criteria and to define population criteria.  [Figure 2-1](https://hl7.org/fhir/uv/cqfmeasures/introduction.html#background) illustrates the general concept.  Figure 3-1 illustrates the relationship between the FHIR Measure resource and CQL documents: The FHIR Measure resource references a CQL expression script (#1), the FHIR library resource references a particular expression from the referenced CQL file (#2), the referenced expression in-turn may include or call another expression (#3) in the same (or a different) CQL expression script. Snippet 3-14 and Snippet 3-15 demonstrate the use of the FHIR Measure resource and CQL in the definition of the "initial-population".

**Figure 3-1: Relationship between FHIR Measure and CQL Expression Script**

<div>
<img src="FHIRMeasureWithLinkedExpression.png">
</div>


```json
"population": [
  {
    "identifier": {
      "value": "initial-population-identifier"
    },
    "code": {
      "coding": [
        {
          "code": "initial-population"
        }
      ]
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "\"Initial Population\""
  }
  }
]
```

Snippet 3-15: Defining a population via reference to a CQL expression (from [measure-exm146-FHIR.json](Measure-EXM146-FHIR.json.html))

Snippet 3-16 shows several examples of a CQL expression calling another, e.g. the "Initial Population" expression references another CQL expression: "Pharyngitis Encounters With Antibiotics". In this example the referenced expressions are all contained within the same CQL file (EXM146.cql) and some are included above. The "Is Between 2 and 17 Years of Age at Start of Measurement Period" expression uses the built-in CQL function AgeInYearsAt(). The definition of "Pharyngitis Encounters With Antibiotics" uses the function "Includes Or Starts During", defined in another CQL library (Common as described in Common.cql), further explanation of nested libraries is given in the “Nested Libraries” section of the Using CQL topic of this IG.

```cql
library EXM146_FHIR version '4.0.0'

using FHIR version '3.0.0'

include FHIRHelpers version '3.0.0' called FHIRHelpers
include Common_FHIR version '2.0.0' called Common

define "Is Between 2 and 17 Years of Age at Start of Measurement Period":
   AgeInYearsAt(start of "Measurement Period") >= 2
      and AgeInYearsAt(start of "Measurement Period") <= 17

define "Measurement Period Encounters":
   [Encounter: "Ambulatory/ED Visit"] Encounter
      where Encounter.period during "Measurement Period"
        and Encounter.status = 'finished'
        and "Is Between 2 and 17 Years of Age at Start of Measurement Period"

define "Pharyngitis Encounters With Antibiotics":
   "Measurement Period Encounters" Encounters
      with "Pharyngitis" Pharyngitis such that
         Common."Includes Or Starts During"(Pharyngitis, Encounters)
      with "Antibiotics" Antibiotics such that Antibiotics.authoredOn
         3 days or less after FHIRHelpers.ToInterval(Encounters.period)

define "Initial Population":
   "Pharyngitis Encounters With Antibiotics"
```

Snippet 3-16: CQL definition of the "Initial Population" criteria (from [EXM146.cql](Library-EXM146-FHIR.html#cql-content))

**Conformance Requirement 3.8 (Referential Integrity):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-8)
{: #conformance-requirement-3-8}
1. All Measure population criteria components
    a. SHALL reference exactly one expression.
    b. SHALL reference the same library.
2. For measures that use CQL, references to expressions SHALL use the `text/cql-identifier` media type defined in the [CQL specification](https://cql.hl7.org/07-physicalrepresentation.html#media-types-and-namespaces).

#### Criteria Names
{: #criteria-names}

To encourage consistency among measures, the following guidelines for specifying population criteria within a measure are proposed. The measure population criteria names used here are defined by the [MeasurePopulationType]({{site.data.fhir.path}}codesystem-measure-population.html) code system in the base FHIR specification.

The codes within the [MeasurePopulationType]({{site.data.fhir.path}}codesystem-measure-population.html) code system in the base FHIR specification are explicitly spelled out, whereas the measure population code [based on HQMF](http://terminology.hl7.org/ValueSet/v3-ActCode) are abbreviated. In order to make the development of QMs straightforward and clear, [this concept map](ConceptMap-measure-populations.html) provides mapping from HQMF codes to FHIR codes for each of the measure component code.

**Conformance Requirement 3.9 (Criteria Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-9)
{: #conformance-requirement-3-9}
The name of an expression specifying a population criteria within a measure SHOULD always be the name of the criteria type††:
* "Initial Population"
* "Denominator"
* "Denominator Exclusion"
* "Denominator Exception"
* "Numerator"
* "Numerator Exclusion"
* "Measure Population"
* "Measure Population Exclusion"
* "Measure Observation"
* "Stratification"

†† When using multiple populations and/or multiple population groups, see Section 3.4.8

Note that the Measure Observation criteria is the name of a function used in the Continuous Variable Measure. See the [Continuous Variable Measure](measure-conformance.html#continuous-variable-measure) section for more.

For each scoring type, the set of applicable criteria are specified in the [Quality Reporting](http://www.hl7.org/fhir/clinicalreasoning-quality-reporting.html) topic of the FHIR Clinical Reasoning module. The table is reproduced here for reference:

**Table 3-1: Measure populations based on types of measure scoring.**

| Scoring              | Initial Population | Denominator | Denominator Exclusion | Denominator Exception | Numerator | Numerator Exclusion | Measure Population | Measure Population Exclusion |
|----------------------|:------------------:|:-----------:|:---------------------:|:----------------------:|:---------:|:---------------------:|:-------------------:|:----------------------------:|
| Proportion           |         R          |      R      |           O           |            O           |     R     |           O           |         NP          |              NP              |
| Ratio                |        R‡‡         |      R      |           O           |           NP           |     R     |           O           |         NP          |              NP              |
| Continuous Variable  |         R          |     NP      |          NP           |           NP           |    NP     |          NP           |          R          |              O               |
| Cohort               |         R          |     NP      |          NP           |           NP           |    NP     |          NP           |         NP          |              NP              |
{: .grid}


NOTE: Composite measures are not represented in this table as they are made up of component measures.  The component measures in the composite will be expected to conform to the information in this table.


R=Required. O=Optional. NP=Not Permitted.

‡‡ Some ratio measures will require multiple Initial Populations, one for the numerator and one for the denominator.

In addition, the formula for calculating the measure score is implied by the scoring of the measure. The following sections describe the expected result type for population criteria for each type of measure, as well as explicitly defining the measure score calculation formula.

The context of a measure is indicated using the subject element of the FHIR resource.  The subject element will be a reference to a FHIR resource type, specifically including Patient, Location, Organization, Practitioner, and Device as currently specified in the extensible SubjectType binding.  It is important to note that other resource types may be used, but it must be a FHIR resource type. We should also note that although the discussion is focused on Patient as the subject, the discussion applies to other subject types as well.

In addition to the measure scoring, measures generally fall into two categories, patient-based, and non-patient-based. In general, patient-based measures count the number of patients in each population, while non-patient-based measures count the number of items (such as encounters) in each population. Although the calculation formulas are conceptually the same for both categories, for ease of expression, population criteria for patient-based measures indicates whether a patient matches the population criteria (true) or not (false). Non-patient-based measures return the item to be counted such as an encounter or procedure.


**Conformance Requirement 3.10 (Population Basis):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-10)
{: #conformance-requirement-3-10}

1. The [`cqfm-populationBasis`](StructureDefinition-cqfm-populationBasis.html) extension SHALL be used to identify the result type of population criteria used in the measure
2. Expressions used in population criteria SHALL return a value of the type specified by the populationBasis for the measure.

Snippet 3-16 illustrates the use of the populationBasis extension for a patient-based measure:

```json
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-populationBasis",
      "valueCode": "boolean"
    }
  ]
```

Snippet 3-16: Population basis for a patient-based measure

Snippet 3-17 illustrates the use of the populationBasis extension for an non-patient-based measure:

```json
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-populationBasis",
      "valueCode": "Encounter"
    }
  ]
```

Snippet 3-17: Population basis for an non-patient-based measure

Note that this extension is specifically bound to the FHIRAllTypes ValueSet (i.e. the set of all types in FHIR, including data types and resource types, both abstract and concrete). The FHIRAllTypes value set is appropriate for the specification since it's possible to have population criteria that result in "abstract" types. Authoring environments may wish to limit the selection of population basis based on the content implementation guides used in authoring the measure, but that would be a content-driven validation, not a restriction enforced by the specification.

#### Measure Population Semantics

The base FHIR Measure resource defines a set of measure population components that are used to construct measures. Measure populations have implicit relationships to each other depending on the measure scoring type. For example, for proportion measures, denominator criteria have an implicit dependency on initial population criteria, i.e. the criteria for inclusion in the denominator of a measure implicitly include the criteria for inclusion in the initial population.  Similarly, numerator criteria have an implicit dependency on denominator criteria, i.e. the criteria for inclusion in the numerator of a measure implicitly include the criteria for inclusion in the denominator. Expressions referenced by Measure population criteria are evaluated within the context of these implicit dependencies.

**Conformance Requirement 3.11 (Measure Population Semantics):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-11)
{: #conformance-requirement-3-11}

1. Expressions used as measure population criteria SHALL be evaluated taking relevant dependencies into account, as specified by the membership determination formulas defined for each scoring type.
2. Expressions MAY include explicit dependencies that duplicate the implicit FHIR-based QM population dependencies.
3. Expressions SHALL use a FHIR resource type (e.g. Patient) as the context, and SHALL be expressed within the context of a single subject record of that type.

For example, Snippet 3-18 defines the "Initial Population" and "Denominator" for a measure.

```cql
define "Initial Population":
  "In Demographic" and "Has Target Encounter"

define "Denominator": "Initial Population"
```

Snippet 3-18: Explicit definition of the initial population and denominator.

In this snippet, the relationship between the "Denominator" and the "Initial Population" is made explicit even though the FHIR Measure specification defines the "Denominator" to be a subset of the "Initial Population". With respect to the measure population definitions, the following CQL code has identical meaning:

```cql
define "Denominator": true
```

In this variant, the "Denominator" is utilizing the measure dependencies but this dependency is not explicitly expressed in the CQL; this is referred to as an implicit dependency.

If population criteria evaluate to null for a patient-based measure it is interpreted as false. If population criteria evaluate to null for a non-patient-based measure it is interpreted as an empty list.

#### Proportion Measures
{: #proportion-measures}

A FHIR Measure resource representing a proportion measure will include one or more population criteria sections as described in Table 3-2.

The semantics of these components are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification; the only difference is that each component references a single criterion encoded as a formal expression.

The referenced expressions return either an indication that a patient meets the population criteria (patient-based measures) or the events that a particular patient contributes to the population (non-patient-based measures). For example, consider two measures:

**Table 3-2: Patient-based and non-patient-based Measure Examples**

| Measure | Denominator | Numerator |
|:--------|:------------:|:----------:|
| Patient-based | All patients with condition A that had one or more encounters during the measurement period. | All patients with condition A that underwent procedure B during the measurement period. |
| Non-patient-based | All diagnostic studies (CT scans) during the measurement period. | Diagnostic studies (CT scans) exceeding radiation dosage thresholds during the measurement period. |
| Non-patient-based | All encounters where patients have condition A during the measurement period. | All encounters where patients have condition A during the measurement period and procedure B was performed during the encounter. |
{: .grid}

In Table 3-2, the first measure is an example of a patient-based measure. Each patient may contribute at most one count to the denominator and numerator, regardless of how many encounters they had. The second measure is a non-patient-based measure where each patient may contribute zero or more CT scans to the denominator and numerator counts. The third measure is another non-patient-based measure where each patient may contribute zero or more encounters to the denominator and numerator counts.

For complete examples of patient based proportion measures, see the Screening Measure [Examples](examples.html). For a complete example of an non-patient-based proportion measure, see the [EXM108](Measure-EXM108-FHIR.html) measure included in this implementation guide.

**Conformance Requirement 3.12 (Proportion Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-12)
{: #conformance-requirement-3-12}

1. Proportion measures SHALL conform to the [CQFM Proportion Measure](StructureDefinition-proportion-measure-cqfm.html) profile.
2. Population criteria SHALL each reference a single expression as defined by [Conformance Requirement 3.8](#conformance-requirement-3-8).
3. Expressions for patient-based measures SHALL return a Boolean to indicate whether a patient matches the population criteria (true) or not (false).
4. Expressions for non-patient-based measures SHALL return a List of events of the same type, such as an Encounter or Procedure.

##### Proportion measure scoring
{: #proportion-measure-scoring}

The population types for a Proportion measure are "Initial Population", "Denominator", "Denominator Exclusion", "Numerator", "Numerator Exclusion" and "Denominator Exception". The following diagram shows the relationships between the populations for proportion measures and the table below provides their definitions.

**Figure 3-2: Population criteria relationships for Proportion measures illustration**

<div>
<img src="OutcomeFlow__Proportion_version.png">
</div>
<br>

**Table 3-3: Population Criteria Definitions for Proportion Measures**
{: #proportion-measure-table}

| Population | Definition |
|:----|:----|
| Initial Population | The initial population criteria refers to all patients, subjects, or events to be evaluated by a quality measure involving patients or subjects who share a common set of specified characteristics. All patients, subjects, or events counted (for example, as numerator, as denominator) are drawn from the initial population.                                                       |
| Denominator | Denominator criteria define the patients, subjects, or events that should be included in the lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure.                                              |
| Denominator Exclusion | Denominator exclusion criteria define patients, subjects, or events that should be excluded from the denominator. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams.                              |
|  Numerator | Numerator criteria define the patients, subjects, or events that should be included in the upper portion of a fraction used to calculate a proportion measure. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, subject, or event defined in the denominator (for proportion measures) or initial population (for ratio measures). A numerator statement describes the clinical action that satisfies the conditions of the measure. |
| Numerator Exclusion | Numerator exclusion criteria define patients, subjects, or events to be excluded from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures).                 |
| Denominator Exception                       | Denominator exceptions are conditions that should remove a patient, subject, or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures.                                                                                                                                                                                                                                    |
{: .grid}

* Initial population: Identify those cases that meets the Initial Population criteria.
* Denominator: Identify that subset of the Initial Population that meets the Denominator criteria.
* Denominator Exclusion: Identify that subset of the Denominator that meets the Denominator Exclusion criteria. There are cases that should be removed from the Denominator as exclusion. Once these cases are removed, the subset remaining would reflect the Denominator per criteria.
* Numerator: Identify those cases in the Denominator and NOT in the Denominator Exclusion that meets the Numerator criteria. In proportion measures, the Numerator criteria are the processes or outcomes expected for each patient, procedure, or other unit of measurement defined in the Denominator.
* Numerator Exclusion: Identify that subset of the Numerator that meets the Numerator Exclusion criteria. Numerator Exclusion is used only in ratio measures to define instances that should not be included in the Numerator data.
* Denominator Exception: Identify those meeting Denominator and Denominator Exception criteria and fail to meet both the Denominator Exclusion and the Numerator criteria.

The "performance rate" is a ratio of patients meeting Numerator criteria, divided by patients in the Denominator (accounting for exclusion and exception). Performance rate can be calculated using this formula:

```
Performance rate = (Numerator - Numerator Exclusion) / (Denominator – Denominator Exclusion – Denominator Exception)
```

Here is an example of using population types to select data on diabetes patients for a Proportion measure:

* Initial Population: Patient is between the age of 16 and 74
* Denominator: Patient has Diabetes Type II
* Denominator Exclusion: Patient is in Hospice Care
* Numerator: Patient is between the age of 16 and 74, has Diabetes Type II, and the most recent laboratory result has hbA1C value > 9%
* Denominator Exception: Patient meets the Denominator criteria and does NOT meet the Numerator criteria, and is designated as having "Steroid Induced Diabetes" or "Gestational Diabetes"

##### Patient-based Calculation

Snippet 3-18 provides precise semantics for the measure score calculation for a patient-based proportion measure:

```cql
context Patient

define "Denominator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"
    and not ("Denominator Exception" and not "Numerator")

define "Numerator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"
    and "Numerator"
    and not "Numerator Exclusion"

context Unfiltered

define "Measure Score":
  Count("Numerator Membership" IsMember where IsMember is true)
    / Count("Denominator Membership" IsMember where IsMember is true)
```

Snippet 3-18: Patient-based proportion measure calculation semantics

##### Non-patient-based Calculation

Snippet 3-19 provides precise semantics for the measure score calculation for a non-patient-based proportion measure:

```cql
define "Numerator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    intersect "Numerator"
    except "Numerator Exclusion"

define "Denominator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"
    except ("Denominator Exception" except "Numerator")

define "Measure Score":
  Count("Numerator Membership") /
    Count("Denominator Membership")
```

Snippet 3-19: Non-patient-based proportion measure calculation semantics

#### Ratio Measures
{: #ratio-measures}

A Measure document representing a ratio measure will include one or more population criteria sections as described in Table 3-1.

In addition, it may also include one or more measure-observation elements. The semantics of these components are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification; the only difference is that each measure population component and each measure observation definition references a single criterion encoded as a CQL expression.

**Conformance Requirement 3.13 (Ratio Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-13)
{: #conformance-requirement-3-13}

1. Ratio measures SHALL conform to the [CQFM Ratio Measure](StructureDefinition-ratio-measure-cqfm.html) profile.
1. Population criteria SHALL each reference a single expression as defined by [Conformance Requirement 3.8](#conformance-requirement-3-8).
2. measure-observation criteria SHALL reference expressions as defined by [Conformance Requirement 3.14](#conformance-requirement-3-14), with the exception that instead of a measure-population, the criteriaReference element SHALL reference a numerator or denominator criteria.
3. Expressions for patient-based measures SHALL return a Boolean to indicate whether a patient matches the population criteria (true) or not (false).
4. Expressions for non-patient-based measures SHALL return a List of events of the same type, such as an Encounter or Procedure.

For ratio measures that include a Measure Observation, the measure observation is defined as a function that takes a single parameter of the type of elements returned by the population criteria. This is also how it is specified for continuous variable measures. In particular, for non-patient based ratio measures the Measure Observation is defined as a function that takes a single argument of the same type as the elements returned by all the population criteria, and the aggregation method is specified in the Measure resource. For patient based ratio measures the Measure Observation is defined as a function that takes no parameters.

##### Ratio measure scoring
{: #ratio-measure-scoring}

The population types for a Ratio measure are "Initial Population", "Denominator", "Denominator Exclusion", "Numerator" and "Numerator Exclusion". The following diagrams✧ show the relationships between the populations for Ratio measures and the table below provides their definitions


**Figure 3-3: Population criteria for Ratio measures illustration - Numerator**

<div>
<img src="OutcomeFlow__Ratio_Numerator.png">
</div>

**Figure 3-4: Population criteria for Ratio measures illustration - Denominator**

<div>
<img src="OutcomeFlow__Ratio_Denominator.png">
</div>

✧ The ratio diagrams depict a ratio measure. Ratio measures may also include continuous variable calculations for the numerator and denominator (continuous variable ratio measures) but the diagrams do not depict the continuous variable ratio measures.

**Table 3-4: Population Criteria Definitions for Ratio Measures**
{: #ratio-measure-table}

| Population | Definition |
|:----|:----|
| Initial Population | All entities to be evaluated by a measure which may but are not required to share a common set of specified characteristics within a named measurement set to which the measure belongs. Ratio measures are allowed to have two Initial Populations, one for Numerator and one for Denominator. In most cases, there is only 1 Initial Population |
| Denominator | The same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the measure.                                                                                                                                                                                                      |
| Denominator Exclusion | Entities that should be removed from the Denominator before determining if Numerator criteria are met. Denominator exclusions are used in Proportion and Ratio measures to help narrow the Denominator.           |
| Numerator |  The outcomes expected for each entity defined in the respective Initial Population of a Ratio measure.       |
| Numerator Exclusion | Entities that should be removed from the QM's Numerator before determining if Numerator criteria are met. Numerator Exclusions are used in Proportion and Ratio measures to help narrow the Numerator.              |
{: .grid}

* Initial population: Identify those cases that meet the Initial Population criteria. (Some ratio measures will require multiple initial populations, one for the numerator, and one for the denominator.)
* Denominator: Identify that subset of the Initial Population that meets the Denominator criteria.
* Denominator Exclusion: Identify that subset of the Denominator that meets the Denominator Exclusion criteria.
* Numerator: Identify that subset of the Initial Population that meets the Numerator criteria.
* Numerator Exclusion: Identify that subset of the Numerator that meets the Numerator Exclusion criteria.

Here is an example of using the population types to select data on patients with central line catheters for a ratio measure:

* Initial Population: Patient is aged 65 years or older and admitted to hospital
* Denominator: Patient has a central line
* Denominator Exclusion: Patient is immunosuppressed
* Numerator: Patient has a central line blood stream infection
* Numerator Exclusion: Patient's central line blood stream infection is deemed to be a contaminant


##### Individual Observations

For each case in the Denominator and not in the Denominator Exclusion, determine the individual Denominator observations.

For each case in the Numerator and not in the Numerator Exclusion, determine the individual Numerator observations.

##### Measure Aggregates

Using individual observations for all cases in the Denominator and not in the Denominator Exclusion, calculate the aggregate Denominator.

Using individual observations for all cases in the Numerator and not in the Numerator Exclusion, calculate the aggregate Numerator.

```
Ratio = aggregate Numerator / aggregate Denominator
```

##### Patient-based Calculation

Snippet 20 provides precise semantics for the measure score calculation for a patient-based ratio measure:

```cql
context Patient

define "Denominator Membership":
  "Initial Population"
    and "Denominator"
    and not "Denominator Exclusion"

define "Numerator Membership":
  "Initial Population"
    and "Numerator"
    and not "Numerator Exclusion"

context Population

define "Measure Ratio Numerator":
  Count("Numerator Membership" IsMember where IsMember is true)

define "Measure Ratio Denominator":
  Count("Denominator Membership" IsMember where IsMember is true)
```

Snippet 20: Patient-based ratio measure calculation semantics

##### Non-patient-based Calculation

Snippet 21 provides precise semantics for the measure score calculation for a non-patient-based ratio measure:

```cql
define "Numerator Membership":
  "Initial Population"
    intersect "Numerator"
    except "Numerator Exclusion"

define "Denominator Membership":
  "Initial Population"
    intersect "Denominator"
    except "Denominator Exclusion"

context Population

define "Measure Score Numerator":
  Count("Numerator Membership")

define "Measure Score Denominator":
  Count("Denominator Membership")
```

Snippet 21: Non-patient-based ratio measure calculation semantics

#### Continuous Variable Measure
{: #continuous-variable-measure}

A Measure document representing a continuous variable measure will include one or more population criteria sections as described in Table 3-1.

In addition, it will also include at least one measure-observation criterion. The semantics of these components are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification. For measure-observation criteria, two extensions are used to ensure implementability:

1. aggregateMethod: This extension defines the method used to aggregate the measure observations defined by the criteria
2. criteriaReference: This extension is used to indicate which population should be used as the source for the measure observations. This extension is used in cases where there may be multiple initial populations in a single group (such as a Ratio measure).

Note that the implicit population semantics described in Section 3.4.2 apply equally to continuous variable measures: measure observations are only computed for patients matching the appropriate set of population criteria (i.e. accounting for exclusions).

An example measure-observation criteria is shown in Snippet 3-22.

The criteria referenced from the measure-observation component refers to an expression that returns a list of events for each patient that contributes to the measure population as shown in Snippet 3-18.

```json
{
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-criteriaReference",
      "valueString": "measure-population-identifier"
    },
    {
      "url": "http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-aggregateMethod",
      "valueCode": "median"
    }
  ],
  "identifier": {
    "value": "measure-observation-identifier"
  },
  "code": {
    "coding": [
      {
        "code": "measure-observation"
      }
    ]
  },
  "criteria": "\"Measure Observation\""
}
```

Snippet 3-22: Sample measure observation section from [measure-exm55-FHIR.json](Measure-EXM55-FHIR.json.html)

```cql
define "Measure Population":
  "Initial Population"

define "Inpatient Encounter":
  ["Encounter"] Encounter
    where LengthInDays(Encounter.period) <= 120
      and Encounter.period ends during "Measurement Period"

//Measure Observation
define function "Related ED Visit" (encounter Encounter):
  Last(["Encounter": "Emergency Department Visit"] ED
    where ED.status = 'finished'
      and ED.period ends 1 hour or less before start of encounter.period
    sort by start of period )

define function "Measure Observation" (encounter Encounter):
  duration in minutes of "Related ED Visit"(encounter).period
```

Snippet 3-23: Sample CQL (from [EXM55.cql](Library-EXM55-FHIR.html#cql-content)) for a continuous-variable measure

In the example shown in Snippet 3-22 and Snippet 3-23: the measure reports the aggregate type (Snippet 3-24) of the result of executing the "Measure Observation" function (Snippet 3-25, Snippet 3-26) on each of the events in the measure population, as determined by the “Measure Population” expression (Snippet 3-27, and Snippet 3-28).


```json
{
  "url": "http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-aggregateMethod",
  "valueCode": "median"
}
```
 Snippet 3-24: Aggregate type from Snippet 3-22 (Sample measure observation section from [measure-exm55-FHIR.json](Measure-EXM55-FHIR.json.html))

```json
"criteria": "\"Measure Observation\""
```
Snippet 3-25: "Measure Observation" function in Snippet 3-22 (Sample measure observation section from [measure-exm55-FHIR.json](Measure-EXM55-FHIR.json.html))

```cql
define function "Measure Observation" (encounter Encounter):
```
Snippet 3-26: "Measure Observation" function in Snippet 3-23 (Sample CQL (from [EXM55.cql](Library-EXM55-FHIR.html#cql-content)) for a continuous-variable measure)

```json
{
  "url": "http://hl7.org/fhir/uv/cqfmeasures/StructureDefinition/cqfm-criteriaReference",
  "valueString": "measure-population-identifier"
}
```
Snippet 3-27: Identifier referenced in Snippet 3-22 (Sample measure observation section from [measure-exm55-FHIR.json](Measure-EXM55-FHIR.json.html))

```cql
define "Measure Population":
```
Snippet 3-28: Definition from Snippet 3-23 (Sample CQL (from [EXM55.cql](Library-EXM55-FHIR.html#cql-content)) for a continuous-variable measure)

**Conformance Requirement 3.14 (Continuous Variable Measures):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-14)
{: #conformance-requirement-3-14}

1. Continuous variable measures SHALL conform to the [CQFM Continuous Variable Measure](StructureDefinition-cv-measure-cqfm.html) profile.
2. Population criteria SHALL each reference a single expression as defined by [Conformance Requirement 3.8](#conformance-requirement-3-8).
3. The aggregateMethod extension SHALL be used on the measureObservation criteria to indicate the aggregate method for the observations. Expressions referenced from measure-observation criteria elements SHALL be consistent with the context used for the population criteria of the measure.
4. The population element of a measure-observation criteria SHALL contain a criteriaReference extension that refers to the population criteria within the same population group that is the target population criteria for the measure-observation
5. Functions referenced from a measure-observation criteria SHALL:
      a. be in the same library as the expression in the measure-population criteria referenced from the criteriaReference extension of the measure-observation criteria
      b. accept a single argument whose type matches the elements of the list returned by the expression referenced from the criteriaReference extension of the measure-observation criteria
      c. return either an Integer, a Decimal, or a Quantity

For non-patient-based continuous variable measures, the measure observation is defined as a function that takes a single parameter of the type of elements returned by the population criteria. The Initial Population, Measure Population, and Measure Population Exclusion criteria expressions must all return a list of elements of the same type.

For patient-based continuous variable measures, the measure observation is defined as a function that takes no parameters.

Note that the criteria reference in the measure observation definition is present to resolve which measure population should be used in the case of multiple populations, but the actual input to the measure observation definition needs to account for population membership (i.e. account for exclusions). In the case of a continuous variable measure with multiple populations, the identifier of the population criteria in the Measure resource is used to ensure that the measure observation definition refers to a unique population criteria.

##### Continuous Variable Measure Scoring
{: #continuous-variable-measure-scoring}

The population types for a Continuous Variable measure are "Initial Population", "Measure Population", and "Measure Population Exclusion". In addition to these populations, a Measure Observation is defined which contains one or more Continuous Variable statements that are used to score one or more particular aspects of performance. The following diagram shows the relationships between the populations for Continuous Variable measures and the table below provides their definitions.

**Figure 3-5: Population criteria for Continuous Variable measures illustration**

<div>
<img src="OutcomeFlow_CV_Version.png">
</div>

**Table 3-5: Population Criteria Definitions for Continuous Variable Measures**

| Population | Definition |
|:----|:----|
| Initial Population | All entities to be evaluated by a QM which may but are not required to share a common set of specified characteristics within a named measurement set to which the QM belongs. |
| Measure Population | Continuous Variable measures do not have a Denominator, but instead define a Measure Population, as shown in the figure above. Rather than reporting a Numerator and Denominator, a Continuous Variable measure defines variables that are computed across the Measure Population (e.g., average wait time in the emergency department). A Measure Population may be the same as the Initial Population or a subset of the Initial Population to further constrain the population for the purpose of the QM. |
| Measure Population Exclusion | Patients who should be removed from the QM's Initial Population and Measure Population before determining the outcome of one or more continuous variables defined within a Measure Observation. Measure Population Exclusions are used in Continuous Variable measures to help narrow the Measure Population. |
{: .grid}

* Initial Population: Identify those cases that meet the Initial Population criteria.
* Measure Population: Identify that subset of the Initial Population that meets the Measure Population criteria.
* Measure Population Exclusion: Identify that subset of the Measure Population that meets the Measure Population Exclusion criteria.

Here is an example of using the population types to select data on emergency department patients for a Continuous Variable measure:

* Initial Population: Patient had an emergency department (ED) encounter
* Measure Population: Same as Initial Population
* Measure Population Exclusion: Patient had an inpatient encounter that was within 6 hours of the ED encounter or expired in the ED

##### Individual Observations

Individual Observations are calculated for each case in the Measure Population and not in the Measure Population Exclusion.

##### Measure Aggregates

Using individual observations for all cases in the Measure Population and not in the Measure Population Exclusion, calculate the aggregate Measure Population.

```
Score = aggregate Measure Population
```

##### Calculation

Snippet 3-28 provides precise semantics for the measure score calculation for a continuous variable measure:

```cql
define "Measure Population Membership":
  "Initial Population"
    intersect "Measure Population"
    except "Measure Population Exclusion"

define "Measure Score":
  Avg("Measure Population Membership" PopulationMember
      return "Median ED Time"(PopulationMember)
  )
```

Snippet 3-28: Continuous variable measure scoring semantics

#### Cohort Definitions
{: #cohort-definitions}

For cohort definitions, only the Initial Population criteria type is used. For patient-based cohort definitions, the criteria should return a true or false (or null). For other types of cohort definitions, the criteria may return any type.

In a cohort measure, a population is identified from the population of all items being counted. For example, one might identify all the patients who have had H1N1 symptoms. The identified population is very similar to the Initial Population but is called a Cohort Population for public health purposes. In the Constrained Information Model (CIM), the population will be expressed using the InitialPopulationCriteria act. The Cohort Population result is used by public health agencies to trigger specific public health activities. The following diagram depicts the population for a Cohort measure and the table below provides its definition.

**Conformance Requirement 3.15 (Cohort Definitions):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-15)
{: #conformance-requirement-3-15}

1. Cohort Measures SHALL conform to the [CQFMCohortMeasure](StructureDefinition-cohort-measure-cqfm.html) profile

**Figure 3-6: Population criteria for Cohort measures illustration**

<div>
<img src="Cohort1.png">
</div>

**Table 3-6: Population Criteria Definitions for Cohort Measures**

| Population | Definition |
|:----|:----|
| Initial Population | All entities to be evaluated by a QM which may but are not required to share a common set of specified characteristics within a named measurement set to which the QM belongs. (Also known as a Cohort Population) |
{: .grid}

* Initial population: Identify those cases that meet the Initial Population criteria.

Here is an example of using the population types to select data on patients who have received immunizations for a Cohort measure:

* Initial Population: All patients who had an immunization

#### Attestation Measures
{: #Attestation Measures}

The measure is an attestation, derived from the base [Measure]({{site.data.fhir.path}}measure.html), meaning that the reporter of the measure is attesting the measure score. This is typically used for true/false attestations, but can be used for other types of measure scores as well. The key distinction is that the measure is not computably represented (i.e. as a calculation or aggregation performed on some data in the reporting system), but rather is a simple assertion made by the measure reporter. 

[CQFMAttestationMeasure](StructureDefinition-attestation-measure-cqfm.html) 

#### Measures with Multiple Populations
{: #measures-with-multiple-populations}

The section discusses how to represent multiple rate measures where each rate is represented as a different `group` in the measure.  Given a set of rates related to a particular topic, multiple rate measures can be used in cases where the rates are tightly related such that they all change (and therefore version) together.  Examples include CMS 136 Follow-Up Care for Children Prescribed ADHD Medication (ADD) which looks for two rates depending on how long the patient remains on medication and the number of follow up visits performed. 

For those cases where the rate specifications change independently, using an individual measure for each rate is the recommended approach.

When a measure has multiple population groups (multiple group elements), the criteria names will follow the convention above, adding the number of the population group to each criterion, e.g. "Initial Population 1", "Denominator 1", etc. Note that when multiple population groups are present, the number of the group is added to all population groups, not just the groups other than the first.

For multiple population ratio measures that specify 2 initial populations, the populations would be named with an additional "\_X" to distinguish the initial populations, e.g. "Initial Population 1_1", "Initial Population 1_2", "Initial Population 2_1", "Initial Population 2_2".

**Conformance Requirement 3.16 (Multiple Population Indexing):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-16)
{: #conformance-requirement-3-16}
1. When specifying multiple populations and/or multiple population groups the following naming scheme SHALL be used

```
(Criteria Name) (population group number)( population number)
```

Note when a measure has a single population group but multiple populations (such as a ratio measure), the underscore ("\_") is dropped. For example, "Initial Population 1", "Initial Population 2" refers to the populations NOT population groups.

Note also that when a measure has multiple population groups, the expectation is that the measure would have multiple scores, one for each population group. The formulas for calculation of the groups do not change; they are the same as for single group measures, just calculated using the criteria for each group.

#### Stratification
{: #stratification}

**Conformance Requirement 3.17 (Stratification Criteria):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-17)
{: #conformance-requirement-3-17}

1. Stratifier criteria expression SHALL result in either
    1. the same type as other population criteria expressions in the measure (i.e. the population basis), or
    2. the stratum value
2. If component stratifiers are used, all the component expressions SHALL return the same type within a stratifier (i.e. within a stratifier, all the component expression must use the same stratification approach)

Stratification is represented using the `stratifier` element. The semantics of this element are unchanged from the base [Measure]({{site.data.fhir.path}}measure.html) specification.

Snippet 3-29 shows an example stratifier that stratifies results for two sub-populations. Snippet 3-30 shows the CQL representation of the stratifier.

```json
"stratifier": [
  {
    "identifier": {
      "value": "stratifier-1-identifier"
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "Stratification 1"
    }
  }
]
```

Snippet 3-29: Example Stratifier from [measure-exm55-FHIR.json](Measure-EXM55-FHIR.json.html)

```cql
define "Stratification 1":
  "Inpatient Encounter" Encounter
    where not (PrincipalDiagnosis(Encounter).code in "Psychiatric/Mental Health Patient")
```

Snippet 3-30: Example Stratifier from [EXM55.cql](Library-EXM55-FHIR.html#cql-content)

Alternatively, the stratifier expression may return the actual stratum value:

```cql
define "Gender Stratification":
  Patient.gender
```

Snippet 3-31: Example of stratification by gender

If component stratifiers are used and the component expressions return the same type as other population criteria expressions in the measure, population semantics are applied to determine the stratifier population (i.e. true/false for patient-based measures, intersection of events for non-patient-based measures). If component stratifiers are used and the component expressions return the stratum value, the combination of the component values are considered the stratum value.

For example, given the following two component stratifier expressions in a patient-based measure:

```cql
define "Gender Stratification":
  Patient.gender

define "Payer Stratification":
  Coverage.type
```

Snippet 3-32: Stratification by gender and payer type

The stratum value for a given Patient would be the combination of gender and payer type.

#### Supplemental Data Elements
{: #supplemental-data-elements}

**Conformance Requirement 3.18 (Supplemental Data Elements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-18)
{: #conformance-requirement-3-18}

1. Supplemental Data Elements SHALL be included within the supplementalData element using a usage element of supplemental-data.
2. Supplemental Data Elements SHOULD reference a single expression definition, with a name beginning with SDE.
3. Supplemental data element criteria expressions MAY be of any type, including lists

Part of the definition of a quality measure involves the ability to specify additional information to be returned for each member of a population. Within a FHIR-based QM, these supplemental data elements are specified using expressions, typically involving patient characteristics (such as Race, Ethnicity, Payer, and Administrative Sex) and then marking them with an SDE code within the FHIR Measure resource. Snippet 3-33 demonstrates an example supplemental data definition using the `supplementalData` element.

```json
"supplementalData": [
  {
    "identifier": {
      "value": "supplemental-data-id-1"
    },
    "usage": {
      "coding": [
        {
          "code": "supplemental-data"
        }
      ],
      "text": "Supplemental Data"
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "SDE Ethnicity"
    }
  }
]
```

Snippet 3-33: Sample Supplemental Data Elements from [measure-EXM146-FHIR.json](Measure-EXM146-FHIR.json.html)

```cql
define "SDE Ethnicity":
  (flatten (
      Patient.extension Extension
        where Extension.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
          return Extension.extension
    )) E
      where E.url = 'ombCategory'
        or E.url = 'detailed'
      return E.value as Coding
```

Snippet 3-34: Example Supplemental Data Element from [Library-SupplementalDataElements](Library-SupplementalDataElements.html)

With CQL, supplemental data elements are specified using the same mechanism as any other population criteria, by defining an expression that returns the appropriate data element, and then identifying that expression within the Measure resource. Examples of the Measure resource and CQL are given in Snippet 3-33 and Snippet 3-34, respectively.

By convention, the name of each supplemental data element expression should start with "SDE". The supplemental data element expressions are normally expected to return a single value when evaluated in the context of a member of the population. For example, patient-based measures would return the value of a supplemental data element for a given patient. However, there are cases where returning multiple elements for supplemental data is useful. For example, collecting observations related to a particular condition. The intent of this conformance requirement is to simplify implementation of supplemental data collection, so care should be taken when using supplemental data elements that return multiple elements.

#### Risk Adjustment
{: #risk-adjustment}

**Conformance Requirement 3.19 (Risk Adjustment Criteria):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-19)
{: #conformance-requirement-3-19}

1. Risk Adjustment Data SHALL be included within the supplementalData element using a usage element of risk-adjustment-factor
2. Risk Adjustment Data SHOULD reference a single CQL expression definition, with a name beginning with RAF


Measures may define variables used to adjust scores based on a measure of “risk” observed in the population. Such variables are referred to as risk adjustment data. Risk adjustment data are included in the supplementalData section and may be defined using CQL; such inclusions must adhere to Conformance Requirement 3.19.

```json
"supplementalData": [
  {
    "identifier": {
      "value": "supplemental-data-id-1"
    },
    "usage": {
      "coding": [
        {
          "code": "risk-adjustment-factor"
        }
      ],
      "text": "Risk Adjustment Data"
    },
    "criteria": {
      "language": "text/cql-identifier",
      "expression": "Hepatic Failure"
    }
  }
]
```

Snippet 3-35: Sample Risk Adjustment Data from [EXMRiskAdjustment_FHIR.xml](Measure-measure-risk-adjustment-FHIR2.xml.html)

```cql
define "Hepatic Failure":
  exists ("Cirrhosis Dx")
    and exists ("Bilirubin Test")
    and exists ("Serum Albumin Test")
```

Snippet 3-36: Sample Risk Adjustment data from [EXMRiskAdjustment_FHIR2.cql](Library-risk-adjustment-FHIR2.html#cql-content)                                                

An example of risk adjustment can be found in the included [examples](Measure-measure-risk-adjustment-FHIR2.html); the relevant sections of the FHIR Measure (Snippet 3-35) and CQL (Snippet 3-36) have been included.

### Manifest
{: #manifest}

Measure specifications are often developed, tested, published, and consumed as a set of measures, rather than as single measure specifications. This implementation guide makes use of the _artifact manifest_ capabilities provided by the Canonical Resource Management Infrastructure implementation guide to support the use case of developing and publishing a set of measures. For background, see the [Artifact Manifest]({{site.data.fhir.ver.crmi}}/version-manifest.html) topic.

At a high level, the contents of the Library resource used to describe the set of measures consists of:

* Identity - Elements that identify the measure collection (e.g. `url`, `version`, `name`, `title`, `identifier`)
* Component Measures - The identified measures (specified using `relatedArtifact` elements with `type` = `composed-of`)
* Expansion Parameters - Input information about what versions of code systems and value sets should be used and how expansions should be performed (using the cqf-expansionParameters extension)
* Dependencies - Output information about all the dependencies that are used by the set of measures (specified using `relatedArtifact` elements with `type` = `depends-on`)

This information about the set of measures is supported by the [CRMIManifestLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-manifestlibrary.html) profile and can be generally thought of as a _content release_.

#### Content Release

Ultimately, the content release use case is supported by a manifest in _active_ status, with all dependency information present. However, this final state is typically reached through an authoring process that allows for consistent resolution of dependencies by a team of measure developers. For example, a typical process might include the following steps:

* Setup
* Development
* Testing
* Release
* Implementation

> NOTE: The examples referenced in this section have URLs based on their IDs. This is due to a publisher requirement; the examples are intended to illustrate the same Library at different points in the lifecycle, so the URLs should all be the same.

##### Setup

The setup phase establishes the initial code system versions for use with the measures being developed. At this stage, manifest is in _draft_ status, and typically only a handful of code system versions have been selected. In addition, authoring-specific behavior such as _includeDraft_ and _activeOnly_ would be expected to be set. See the [Manifest - Initial Draft](Library-Manifest-Initial-Draft.html) for an example of an initial draft of a manifest. Note also that at this stage, the specific measures being developed are not necessarily known, so the example in this case does not refer to any measures.

##### Development

Throughout the development phase, as additional code system versions are identified, these may be added to the expansion parameters in the manifest. The manifest remains in _draft_ status through the development, and may change as often as is necessary. The key benefit is allowing code system versions to be established among a team (or teams) of measure developers, and only updated when agreed by the participants.

##### Testing

The testing phase allows for a "final draft" of the manifest. At this point, all code system versions have been identified, all component measures are known, and authoring features such as _includeDraft_ and _activeOnly_ are typically disabled, allowing testing to be performed with the final expected value set expansions. The manifest is still in _draft_ status, but the content at this point is expected to be stable and only subject to minor updates based on feedback from testing. See the [Manifest - Final Draft](Library-Manifest-Final-Draft.html) for an example of a final draft of a manifest.

##### Release

The release process supports transitioning a manifest from _draft_ to _active_ status, and establishes the versions of all dependencies referenced by the measures in the manifest, according to the following process:

* For each component measure of the manifest, identify all dependencies:
    * If the dependency reference is versioned, record that version of the dependency in the manifest
    * Otherwise, if the version of the dependency is specified via an expansion parameter, use that version and record it as a dependency in the manifest
    * Otherwise, identify the most recent available version of the dependency in the authoring environment and record that version in the manifest
* For each reported dependency, identify all dependencies:
    * If the dependency is a measure, use the effective data requirements
    * If the dependency is a value set, report any value sets or code systems referenced by the value set as dependencies
    * Record each dependency in the manifest using the same process for determining a version and recording the dependency in the manifest

See the [Manifest - Release](Library-Manifest-Release.html) for an example of a final content release. Note that the dependencies in this example are incomplete for brevity. A complete content release will include all dependencies for all measures, recursively, with versions identified for each dependency.

##### Implementation

During implementation, the Manifest is used to understand what versions of dependencies should be used when unversioned references are encountered. For example, when evaluating a Measure, the ValueSet expansions used are obtained by referring to the Manifest to determine the correct version of the ValueSet to be used, as well as the expansion parameters to be used.

#### Content Release Manifest Use Cases

A content release can be used to meet many different use cases for packaging a collection of related artifacts. Example use cases include:

* The eCQM Annual Update, specifying a set of measure specifications together with the code system and value set version information that is to be used to calculate the measures.
* Identifying sets of measures for a particular use, such as the Quality Payment Program (QPP) measures.
* Publishing a release of a set of value sets such as the C-CDA value sets, or the electronic Case Reporting (eCR) Public Health Trigger Codes.

In all these cases, a Library conforming to the CRMIManifestLibrary profile can be used to communicate the details of the content release.

### HQMF Mapping

HQMF is a normative HL7 V3 based standard that defines a header for classification and management of the quality measure, a document body that carries the content of the quality measure as well as important metadata. It standardizes a measure’s structure, metadata, definitions, and logic, the HQMF ensures measure consistency and unambiguous interpretation. The approach of representing Quality Measures (QMs) using FHIR and specifically the FHIR Clinical Reasoning Module have generated code systems and value sets based on the FHIR R4 specification.

Refer to the [ConceptMap Resources section](terminology.html#conceptmap-resources) under "Terminology" for the concept mapping of code systems and value sets between HL7 V3 to FHIR R4.

### Attribution

Member Attribution (ATR) lists are often used between Payers and Providers for implementing risk-based contracts, value-based contracts, care gap closures and quality reporting. Creation of a Member Attribution List typically starts with a need to identify the patients for a specific purpose such as Quality Reporting. Refer to the [Member Attribution Lists Workflows and Definitions](http://hl7.org/fhir/us/davinci-atr/usecases.html#member-attribution-list-workflows-and-definitions) within the Da Vinci - Member Attribution (ATR) List IG for more information on representing groups of patients for attribution within quality reporting.  

### Must Support
{: #must-support}

Certain elements in the profiles defined in this implementation guide are marked as _Must Support_. This flag is used to indicate that the element plays a critical role in defining and sharing quality measures, and implementations SHALL understand and process the element.

In addition, because measure specifications typically make use of data implementation guides (e.g. US Core, QI-Core), the implications of the Must Support flag for profiles used from those implementation guides must be considered.

For more information, see the definition of [Must Support]({{site.data.fhir.path}}conformance-rules.html#mustSupport) in the base FHIR specification.

**Conformance Requirement 3.20 (Must Support Elements):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-3-20)
{: #conformance-requirement-3-20}
For resource instances claiming to conform to Quality Measure IG profiles, Must Support on any profile data element SHALL be interpreted as follows:

* Authoring systems and knowledge repositories SHALL be capable of populating all Must Support data elements.
* Evaluating systems SHALL be capable of processing resource instances containing Must Support data elements without generating an error or causing the evaluation to fail.
* In situations where information on a particular data element is not present and the reason for absence is unknown, authoring and repository systems SHALL NOT include the data elements in the resource instance.
  * For example, for systems using '9999' to indicate unknown data values, do not include '9999' in the resource instance.
* When consuming resource instances, evaluating systems SHALL interpret missing data elements within resource instances as data not present for the artifact.
* Submitting and receiving systems using Quality Measure artifacts to perform data exchange or artifact evaluation operations SHALL respect the must support requirements of the profiles used by the artifact to describe the data involved in the operation.



---

File: repos/HL7_SLASH_cqf-measures/input/pages/measure-repository-service.md

{:toc}

## Overview
This page documents the use cases and conformance expectations of a measure repository service to support authoring, publishing, and distribution of FHIR-based quality measure specifications as described in this implementation guide.

The measure repository service described here is a specific case of the more general knowledge repository service and is built upon operations and capabilities defined in the [Canonical Resource Management Infrastructure Implementation Guide (CRMI IG)](http://hl7.org/fhir/uv/crmi).  

This implementation guide is not prescriptive about authentication or authorization, but strongly recommends that these capabilities be addressed through standard mechanisms, as described in [FHIR standard security mechanisms](https://www.hl7.org/fhir/security.html).

### Measure and Library Management

Quality measures (QMs) and libraries are specific types of knowledge artifacts, and share common attributes with other knowledge artifact typesand are expected to conform to general artifact management principles defined in [CRMI Knowledge Artifact Management](). This section describes how general artifact management is applied to quality measures and libraries.  

#### Lifecycle

Quality Measure and libraries following a general, high-level workflow for content development: draft, active, and retired as defined in [CRMI Artifact Lifecycle]()

#### Identity

Measure and library identity directly follows [CRMI Artifact Identity guidance]()

#### Versioning

As a best practice, measure and library versions SHOULD follow semantic versioning. This approach is summarized in [CRMI Artifact Versioning.]()

#### Metadata
In addition to identity, lifecycle, and versioning, measure and libraries typically have additional metadata such as descriptive content, documentation, justification, and source. This is especially true of _published_ measures and libraries, which make this type of information available to enable consumers to find, understand, and ultimately implement the content. In FHIR, measures and libraries generally follow the [Metadata Resource](https://hl7.org/fhir/clinicalreasoning-knowledge-artifact-representation.html#metadata) pattern. 

### Shareable Measure Repository

The ShareableMeasureRepository capability statement defines the minimum expectations for a measure repository that provides basic access to shareable measure content. It describes the minimum required functionality for sharing FHIR-based measure content. 

A ShareableMeasureRepository: 

1. SHALL Represent basic Library information, as specified by the [CRMIShareableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablelibrary.html) profile, which includes url, identifier, version, name, title, type, status, experimental, date, publisher, contact, description, useContext, and jurisdiction. 
2. For computable libraries, SHALL represent computable Library information, as specified by the [CRMIComputableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-computablelibrary.html) profile. 
3. For executable libraries, SHALL represent executable Library information, as specified by the [ELMLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-json-library.html) profile. 
4. For published libraries, SHALL represent publishable Library information, as specified by the [CRMIPublishableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablelibrary.html) profile. 
5. SHALL Represent basic Measure information, as specified by the [CRMIShareableMeasure]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablemeasure.html) profile, which includes url, identifier, version, name, title, type, status, experimental, date, publisher, contact, description, useContext, and jurisdiction. 
6. For computable measures, SHALL represent computable Measure information, as specified by the [CQFMComputableMeasure](StructureDefinition-computable-measure-cqfm.html) profile. 
7. For published measures, SHALL represent publishable Measure information, as specified by the [CQFMPublishableMeasure](StructureDefinition-publishable-measure-cqfm.html) profile.

The CQFMShareableMeasureRepository capability statement captures these requirements formally.

### Publishable Measure Repository 

The PublishableMeasureRepository capability statement expresses additional functionality that is provided in support of providing published FHIR quality measures including additional searching and packaging capabilities. 

A PublishableMeasureRepository:  

1. SHALL support library packaging: Library/$package operation 
2. SHALL support library requirements analysis: Library/$data-requirements operation 
3. SHALL support measure packaging: Measure/$package operation 
4. SHALL support measure requirements analysis: Measure/$data-requirements operation
5. SHOULD support measure search using additional publishable metadata
6. SHOULD support library search using additional publishable metadata
7. SHOULD support minimum measure write capability (Publish, Retire, Archive)
8. SHOULD support minimum library write capability (Publish, Retire, Archive) 

The CQFMPublishableMeasureRepository capability statement captures these requirements formally. 

##### MeasureReports 

A PublishableMeasureRepository: 

1. MAY support representation of test cases using the [CQFMTestCase](StructureDefinition-test-case-cqfm.html) profile. 
2. MAY support retrieval of test cases by server-specific id through the MeasureReport/read interaction 
3. MAY support searching of test cases by the measure search parameter 
4. MAY support including test cases in measure packages. 
5. MAY support test case packaging: [MeasureReport/$cqfm.package](OperationDefinition-cqfm-package.html) operation 

### Authoring Measure Repository 

The AuthoringMeasureRepository capability statement defines additional capabilities that are required to support content authoring workflows in a shared environment. For systems that do not exchange in progress content, or support external review/approval processes, these capabilities are not required to be exposed. 

For libraries and measures, an AuthoringMeasureRepository: 

1. SHALL support **Submit**: Post a new library in draft status 
2. SHALL support **Revise**: Update an existing library in draft status 
3. SHALL support **Draft**: Draft a new version of an existing library in active status 
4. SHALL support **Release**: Update an existing draft library to active 
5. SHOULD support **Clone**: Clone a new library based on the contents of an existing library(regardless of status) 
6. SHOULD support **Withdraw**: Delete a draft library 
7. SHOULD support **Review**: Review and provide comments on an existing library (regardless of status) 
8. SHOULD support **Approve**: Approve and provide comments on an existing library (regardless of status) 


The [CRMIAuthoringArtifactReposiotry]({{site.data.fhir.ver.crmi}}/CapabilityStatement-crmi-authoring-artifact-repository.html) capability statement captures these requirements formally, while the following sections provide a narrative description of them. 



---

File: repos/HL7_SLASH_cqf-measures/input/pages/operations.md

{:toc}

{: #operations}

This implementation guide defines operations related to packaging.

### Operations

#### Packaging

These operations are defined to support artifact packaging and dependency tracing, including data requirements determination. See the [Packaging](packaging.html) discussion for more information.

| **Operation** | **Description** |
|----|----|
| [CQFM Package](OperationDefinition-cqfm-package.html) | Packages a specified canonical resource for use in a target environment, optionally including related content such as dependencies, components, and testing cases and data. |
{: .grid }

---

File: repos/HL7_SLASH_cqf-measures/input/pages/overview.md

---
layout: default
title: Introduction
---
# 1 HQMF Overview

## 1.1 What is the HQMF, and what is an eMeasure?

The Health Quality Measures Format (HQMF) is a standard for representing a health quality measure as an electronic document. A quality measure is a quantitative tool to assess the performance of an individual or organization's performance in relation to a specified process or outcome via the measurement of an action, process, or outcome of clinical care. Quality measures are often derived from clinical guidelines and are designed to determine whether the appropriate care has been provided given a set of clinical criteria and an evidence base. Quality measures are also often referred to as performance measures or quality indicators. Public health programs engage in quality measurement in the context of monitoring and improving the health of the jurisdiction population. Specific measures and other analytics are performed within surveillance programs and are subject to correlation with dynamic environmental factors, social conditions, and other epidemiologic criteria that are not suited to static measure definition. In support of these quality measurement activities, cohort measures specify a population of interest to a given surveillance program. Such cohort measures are intended to assess and report records of interest to the surveillance program.

Through standardization of a measure's structure, metadata, definitions, and logic, the HQMF provides measure consistency and unambiguous interpretation. A health measure encoded in the HQMF is referred to as an "eMeasure".

Standardization of document structure (e.g., sections), metadata (e.g., author, verifier), and definitions (e.g., numerator, initial population) enables a wide range of measures, currently existing in a variety of formats, to achieve at least a minimal level of consistency and readability, even if not fully machine processable.

Formal representation of the clinical, financial, and administrative concepts and logic within an eMeasure supports unambiguous interpretation and consistent reporting. Examples of statements that can be formally represented by the HQMF are:

    To be included in a measure's Denominator, a patient will have had at least two face-to-face visits; AND will have a confirmed diagnosis of coronary artery disease (based on diagnostic or procedure criteria).

    To be included in a measure's Initial Population, a patient will have had a principal inpatient discharge diagnosis of stroke; AND a hospital length of stay less than or equal to 120 days.

    To be included in a public health reportable population, a patient will have a confirmed diagnosis of Tuberculosis within a given reporting period; AND residence within a jurisdiction that requires reporting of Tuberculosis.

HQMF, like the HL7 Clinical Document Architecture (CDA) standard, is derived from an overarching structured document architecture. HQMF is not a CDA standard, but rather, has a peer-to-peer relationship with CDA. In order to report the results of an HQMF computation, systems typically will use the HL7 CDA R2 Quality Reporting Document Architecture (QRDA) standard.

## 1.2 Guidance for Measure Developers

Creating eMeasures in HQMF requires measure developers to adopt a programmer's mind-set. Constructing or creating eMeasures in HQMF is similar to constructing an SQL query. HQMF is a declarative programming language. As with any such language, it is possible to create code that is syntactically correct but logically incorrect. The result is unanticipated bugs or side effects. Therefore, while creating eMeasures, measure developers must consider that each eMeasure will be processed by an HQMF Release 2 (R2) processing engine. A processing engine is a program that parses an HQMF file, executes the logic against a data store, and computes results (i.e., 7 patients in the Denominator, 3 in the Numerator). As HQMF processing engines become more available, measure developers will need to adopt many of the practices common to software development such as integrating testing with the development process. Measure developers can refer to HQMF processing engines that currently exist (e.g., US ONC Query Health Initiative, MITRE Cypress project) to better understand HQMF processing complexities. 

## 1.3 HQMF for Quality and Public Health

### 1.3.1 HQMF and Quality Improvement

Figure 1: Quality measure framework

![Quality measure framework](assets/images/eMeasureQualityLifeCycle.jpg)

Measure developers, drawing on available evidence, devise measureable parameters to gauge the quality of care in a subject area. These parameters are assembled into quality measures, which are then expressed as eMeasures in HQMF. A set of eMeasures may be used to guide care decisions as well as data collection for Electronic Health Record (EHR) and other systems. The data are then assembled into quality reports (e.g., QRDA documents) and submitted to quality reporting or other organizations. 

### 1.3.2 HQMF and Public Health Cohort Measure Definitions for Reporting

HQMF is part of a larger public health reporting framework, as shown in the following figure. 

Figure 2: Public health eMeasure framework

![Public health eMeasure framework](assets/images/PublicHealtheMeasureFramework.jpg)

Public health epidemiologists, often drawing upon available evidence, devise requirements for reporting from providers and laboratories to monitor community health. These reporting requirements are mapped to standard vocabularies and structures available to EHR systems, laboratory systems, and information exchanges, which are then expressible as a Cohort measure definition in HQMF (called an eMeasure). This eMeasure may be understood by providers to guide reportable actions for care, and to guide collection of Electronic Health Record (EHR), laboratory, and other source reporting data. These data are assembled into public health reports (e.g., Healthcare Associated Infection (HAI) CDA Report, HL7 CDA for public health reports) and submitted to public health authorities.

Unambiguous expression of concepts and logic within an eMeasure is a necessary step towards the larger objective of enabling a direct query against an EHR or other operational data store. While HQMF is not an EHR query language, through the provision of unambiguous and formal definitions, it is an EHR query enabler. Additionally, an unambiguous representation of the clinical concepts in an eMeasure allows EHR vendors and healthcare providers to be proactive in capturing such information at the point of care. If, for example, a quality measure reports on the provision of educational material to stroke patients, the corresponding eMeasure will make it clear exactly what type of educational material would be considered appropriate care. If the eMeasure calls for the collection of a certain data element not normally captured by the EHR, the EHR might now prompt the user to collect this information, thereby enhancing both the quality of data reporting and the quality of care. These data might similarly be captured through invoking a public health reporting form that is pre-populated from the EHR data allowing for the user to enter the remaining data attributes. 



---

File: repos/HL7_SLASH_cqf-measures/input/pages/packaging.md

{:toc}

{: #measure-packaging}

To facilitate publishing and distribution of quality measures, this Implementation Guide provides guidance on how to package quality measures, either independently, or as part of a collection of related measures.

Measure packages are a special case of the more general [Artifact Packaging]({{site.data.fhir.ver.crmi}}/packaging.html) capability described in the Canonical Resource Management Infrastructure (CRMI) implementation guide. Measures may be packaged using that approach, with additional considerations as discussed in the following topics.

### Packaging Libraries
{: #packaging-libraries}

To support usage of a logic library, the library package contains the following general components:

* Structured representation of the library and associated metadata (the Library resource)
* Human readable description of the library contents (the Narrative of the Library resource)
* Machine readable description of the population criteria (in the Library resource as additional attachments containing the Expression Logical Model (ELM) content for the CQL)
* Optionally, all the required libraries referenced by the library, recursively (included as Library resources)
* Optionally, all the required terminologies referenced by the library, or any required libraries (included as CodeSystem and/or ValueSet resources)

The following are conformance requirements when packaging a Library:

**Conformance Requirement 6.1 (Library Packaging):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-6-1)
{: #conformance-requirement-6-1}

  1. The first entry in a Library bundle SHALL be a Library resource conforming
  2. Library bundles MAY include any libraries referenced by the primary library
  3. Library bundles MAY include any code systems and value sets referenced by the primary library or any required libraries.
  4. For CQL Library resources
      1. If the target environment supports the use of CQL directly, Library resources SHOULD conform to the [CQLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-cql-library.html) profile.
      2. If the target environment supports the use of ELM directly, Library resources SHOULD conform to one (or both) of the [ELMXMLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-xml-library.html) or [ELMJSONLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-json-library.html) profiles.

### Packaging Measures
{: #packaging-measures}

To support usage of a quality measure, the quality measure package contains the following
general components:

* Structured representation of the quality measure and associated metadata (the Measure resource)
* Human readable description of the quality measure and population criteria (the Narrative of the Measure resource)
* The primary logic library for the quality measure (the Library resource containing at least the Clinical Quality Language (CQL) source)
* Machine readable description of the population criteria (in the Library resource as additional attachment elements containing the Expression Logical Model (ELM) content for the CQL)
* Optionally, all the required libraries referenced by the primary library of the quality measure, recursively (included as Library resources)
* Optionally, all the required terminologies referenced by the primary library or any required libraries (included as CodeSystem and/or ValueSet resources)
* Optionally, any test cases defined for the quality measure

The following are conformance requirements when packaging a Measure:

**Conformance Requirement 6.2 (Measure Packaging):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-6-2)
{: #conformance-requirement-6-2}

  1. The first entry in a Measure bundle SHALL be a Measure resource
  2. The second entry in a Measure bundle SHALL be the primary Library resource for the measure
  3. Measure bundles MAY include any libraries referenced by the primary library
  4. Measure bundles MAY include any code systems and value sets referenced by the primary library or any required libraries.
  5. Measure bundles MAY include any test case bundles defined for the measure
  6. If the capabilities parameter of the package request includes `computable`:
      a. The Measure resource SHALL conform to the [CQFMComputableMeasure](StructureDefinition-computable-measure-cqfm.html) profile.
      b. The Library resource(s) SHALL conform to the [CRMIComputableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-computablelibrary.html) profile.
      b. For Measures using CQL:
          i. The Measure resource SHALL conform to the [CQLMeasure](StructureDefinition-cql-measure-cqfm.html) profile.
          ii. The Library resource(s) SHALL conform to the [CQLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-cql-library.html)
  7. If the capabilities parameter of the package request includes `executable`: 
      a. The Measure resource SHALL conform to the [CQFMExecutableMeasure](StructureDefinition-executable-measure-cqfm.html) profile.
      b. The Library resource(s) SHALL conform to the [CRMIExecutableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-executablelibrary.html) profile.
      a. For Measures using CQL
          i. The Measure resource SHALL conform to the [ELMMeasure](StructureDefinition-elm-measure-cqfm.html) profile.
          ii. The Library resource(s) SHALL conform to one (or both) of the [ELMXMLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-xml-library.html) or [ELMJSONLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-json-library.html) profiles.

### Packaging Terminology
{: #packaging-terminology}

* What terminology components need to be included in a measure package is dependent on the expected terminology capabilities of the target environment. The "terminologyCapabilities" parameter of the $package operation provides the expected capabilities, and the resulting measure package will include terminology resources consistent with those capabilities.

### Packaging Test Cases
{: #packaging-test-cases}

Basic testing of measure logic should involve at least one positive and negative test of each of the population criteria. A test case is represented as a set of test resources, together with a MeasureReport that conforms to the [CQFMTestCase](StructureDefinition-test-case-cqfm.html) profile to define the expected results. The test case bundle can then be used to package and distribute the test case.

**Conformance Requirement 6.3 (Test Case Packaging):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-6-3)
{: #conformance-requirement-6-3}

  1. The first entry in a TestCase bundle SHALL be a MeasureReport resource representing the expected outcome of evaluating the measure, given the test data provided as part of the test case
  2. TestCase bundles SHALL include any resource data required to evaluate the test case


---

File: repos/HL7_SLASH_cqf-measures/input/pages/profiles.md

{: #profiles}

## Capability Profiles
{: #capability-profiles}

To define the exchange expectations for measure and library artifacts at different points along the content lifecycle, this implementation guide uses four general categories of profiles, aligned with those established by the Canonical Resource Management Infrastructure (CRMI) implementation guide:

* Shareable - Define the minimum expectations for systems that exchange measure and library artifacts
* Computable - Define elements that are important for the computable representation of a measure (i.e. design-time characteristics and authoring-level concerns)
* Publishable - Define elements that are relevant for publishing and distribution concerns
* Executable - Define elements that are important for the run-time and implementation-level concerns

### Measure Profiles
{: #measure-profiles}

Measure profiles supported in this IG are defined to allow for use independently or in combination with each other to support a wide range of use cases. The diagram depicts these capability profiles and their relationships to the profiles defined in CRMI and the Using CQL With FHIR IGs:

<b>Figure 7-1: Measure Profiles Relationship Diagram</b>

{% include img.html img="profile-diagram.png" %}

| **Capability** | **Profile** | **Description** |
|----|----|----|
| Shareable | [CRMIShareableMeasure]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablemeasure.html)  |  The shareable measure profile defines minimal expectations for exchanging a measure.  | 
| Computable | [CQFMComputableMeasure](StructureDefinition-computable-measure-cqfm.html)  |  The computable measure profile defines the elements and constraints that are required to represent the calculation of a measure score, regardless of the specific language used to communicate the criteria expressions   |
| Publishable | [CQFMPublishableMeasure](StructureDefinition-publishable-measure-cqfm.html)  |  The publishable measure profile defines the expectations and constraints for metadata associated with formal publication of a measure specification.   | 
| Executable | [CQFMExecutableMeasure](StructureDefinition-executable-measure-cqfm.html)  | The executable measure profile defines the elements that are required to support execution of a measure in an implementation environment.    | 
{: .grid }

In addition to conforming to profiles to support appropriate function or representation, measures are required to conform to the appropriate measure profile based on their scoring type:

<table class="grid">
  <tr><th>Scoring Type</th><th>Profile</th></tr>
  <tr><td>Cohort</td><td><a href="StructureDefinition-cohort-measure-cqfm.html">CQFMCohortMeasure</a></td></tr>
  <tr><td>Proportion</td><td><a href="StructureDefinition-proportion-measure-cqfm.html">CQFMProportionMeasure</a></td></tr>
  <tr><td>Ratio</td><td><a href="StructureDefinition-ratio-measure-cqfm.html">CQFMRatioMeasure</a></td></tr>
  <tr><td>Continuous Variable</td><td><a href="StructureDefinition-cv-measure-cqfm.html">CQFMContinuousVariableMeasure</a></td></tr>
  <tr><td>Composite</td><td><a href="StructureDefinition-composite-measure-cqfm.html">CQFMCompositeMeasure</a></td></tr>
  <tr><td>Attestation</td><td><a href="StructureDefinition-attestation-measure-cqfm.html">CQFMAttestationMeasure</a></td></tr>
</table>

As well, the profiles are designed to separate communication of the computable aspects from the specific expression language used to communicate criteria. This implementation guide supports specification of expression criteria using Clinical Quality Language (CQL) and Expression Logical Model (ELM) (i.e. compiled CQL), but other expression languages could be used with this IG if desired:

<table class="grid">
  <tr><th>Language</th><th>Profile</th></tr>
  <tr><td>CQL</td><td><a href="StructureDefinition-cql-measure-cqfm.html">CQLMeasure</a></td></tr>
  <tr><td>ELM</td><td><a href="StructureDefinition-elm-measure-cqfm.html">ELMMeasure</a></td></tr>
</table>

### Library Profile Usage
{: #library-profile-usage}

This implementation guide makes use of Library resources in two ways:

1. As the container for computable and/or executable representations of expression logic used as criteria in quality measure specifications.
2. As a [_manifest_]({{site.data.fhir.ver.crmi}}/version-manifest.html) for communicating the information required to make use of a set of measure specifications, including dependency and version information.

#### Logic Library Profile Usage
{: #logic-library-profile-usage}

This implementation guide does not introduce any new logic library profiles, but makes use of library profiles defined in the Canonical Resource Management Infrastructure and Using CQL With FHIR implementation guides:

| **Shareable** | **Computable** | **Publishable** | **Executable** |
|----|----|----|----|
| [CRMIShareableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablelibrary.html) | [CRMIComputableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-computablelibrary.html) | [CRMIPublishableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablelibrary.html) | [CRMIExecutableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-executablelibrary.html)  |
{: .grid }

For measures that use Clinical Quality Language to represent expression logic, the following profiles are used:
 
| **Shareable** | **Computable** | **Publishable** | **Executable** |
|----|----|----|----|
| N/A | [CQLLibrary]({{site.data.fhir.ver.cql}}/StructureDefinition-cql-library.html) | N/A | [ELM JSON Library]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-json-library.html) <br/> [ELM XML Library]({{site.data.fhir.ver.cql}}/StructureDefinition-elm-xml-library.html)  |
{: .grid }

#### Manifest Library Profile Usage
{: #manifest-library-profile-usage}

| **Shareable** | **Publishable** |
|----|----|
| [CRMIShareableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablelibrary.html) | [CRMIPublishableLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablelibrary.html) <br/>[CRMIManifestLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-manifestlibrary.html) |
{: .grid }

### Terminology Profile Usage
{: #terminology-profile-usage}

This implementation guide does not introduce any new terminology profiles, but makes use of terminology profiles defined in the Canonical Resource Management Infrastructure implementation guide:

| **Artifact** | **Shareable** | **Computable** | **Publishable** | **Executable** |
|----|----|----|----|----|
| CodeSystem | [CRMIShareableCodeSystem]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablecodesystem.html) | N/A (no requirements) | [CRMIPublishableCodeSytems]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablecodesystem.html) | N/A (no requirements) |
| ValueSet | [CRMIShareableValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-shareablevalueset.html) | [CRMIComputableValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-computablevalueset.html) | [CRMIPublishableValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-publishablevalueset.html) | [CRMIExpandedValueSet]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-expandedvalueset.html) |
{: .grid }

* Note that due to the varying terminology capabilities of target environments, terminology profiles do not necessarily correspond to the capabilities of the measure and library resources. For example, a Computable measure package may include both Computable and Expanded value set resources, depending on the expected capabilities of the target environment with respect to each code system involved. 

### Additional Profiles
{: #additional-profiles}

To support packaging, testing, and distribution of measure and library artifacts, this implementation guide defines the following additional profiles: 

| **Profile** | **Description** | 
|----|----|
| [CRMISoftwareSystemDevice]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-softwaresystemdevice.html) | A software device used in the creation, validation, evaluation, packaging, and/or testing of a library or measure artifact.  |
| [CRMIManifestLibrary]({{site.data.fhir.ver.crmi}}/StructureDefinition-crmi-manifestlibrary.html) |  Used to establish a set of measures together with the version information for code system and value sets referenced by those measures. See the [Manifest](measure-conformance.html#manifest) topic for more information.  |
| [CQFMTestCase](StructureDefinition-test-case-cqfm.html) | A measure report profile that allows definition and exchange of test cases for a measure.  |
{: .grid }

## Alphabetical Listing

See the [Artifact Index - Structures: Resource Profiles](artifacts.html#structures-resource-profiles) for an alphabetical index of profiles defined in this implementation guide.


---

File: repos/HL7_SLASH_cqf-measures/input/pages/quality-improvement-ecosystem.md

#### Quality Improvement Ecosystem
{: #quality-improvement-ecosystem}

The diagram below shows the quality improvement ecosystem.  Each step is discussed in order:<br>
<br>
Step 1: Researcher and public health surveillance – this step begins with information, preferably evidence-based from research, public health surveillance, and data mining and other analyses performed by third parties such as academic institutions or payers. Such information indicates existing status and knowledge about a given clinical topic.<br>
<br>
Step 2: Clinical practice guidelines – in this step stakeholders, such as professional societies, public health agencies, and governmental bodies, publish such information to provide current recommendations to consumers, healthcare practitioners, and healthcare organizations about what is known and suggested methods for managing the clinical topic. Ideally, suggested management efforts are captured and documented in guidelines based on collaboration among clinical subject matter experts, terminologists, informaticists, clinicians and consumers.<br>
<br>
Step 3: Clinical decision support - in this step, the clinical guidelines developed in step 2 are translated into clinical decision support (CDS) artifacts to incorporate relevant, evidence based, and patient-specific clinical recommendations and actions directly within clinical workflow.<br>
<br>
Step 4: Clinical Care - To adequately impact clinical care for clinicians and patients requires local implementation activities as shown in CDS is not intended to replace clinician judgment, but rather to provide information to assist care team members in managing the complex and expanding volume of biomedical and person-specific data needed to make timely, informed, and higher quality decisions based on current clinical science. Ideally, the clinical guidelines and CDS include methods for evaluating what successful implementation means, (i.e., whether the clinical care ultimately provided included processes that addressed the intent of the guideline and if it achieved the desired outcomes). Further information on CDS and its optimization of care delivery can be found [here](https://www.healthit.gov/sites/default/files/page/2018-04/Optimizing_Strategies_508.pdf).<br>
<br>
Step 5: Measurement and Analytics – this step closes the loop and enables continuous improvement; the results of such measurement analytics must be reported for aggregate review.<br>
<br>
Step 6: Reporting – this step serves the purpose of evaluating clinical performance and outcomes, whether it be internally for healthcare organizations, or for third parties such as public health or for payers. Ultimately, this information may then serve as part of the evidence base shown in step 1.<br>

<details open>
<summary>

<b>Figure 1-1: The Quality Improvement Ecosystem Diagram</b>

</summary>

{% include img.html img="Export_new.png" %}

</details>

>Practitioner organizations along with stakeholders such as public health
have ongoing needs for quality improvement at the point of care. Every effort should be made to
establish a capable distributed rule processing environment in FHIR. For
additional information about idealized processes for moving evidence and
information from guidelines to CDS and measurement, refer to an effort by the
Centers for Disease Control and Prevention (CDC) called
[Adapting Clinical Guidelines for the Digital Age](https://journals.lww.com/ajmqonline/fulltext/2023/09002/adapting_clinical_guidelines_for_the_digital_age_.2.aspx).


---

File: repos/HL7_SLASH_cqf-measures/input/pages/quality-measurement-standards-landscape.md

#### Quality Measurement Standards Landscape
{: #quality-measurement-standards-landscape}

This implementation guide is part of a larger FHIR-based quality improvement
and quality measurement standards landscape, depicted in the following
diagram:

<details open>
<summary>

<b>Figure 1-2: The Quality Measurement Standards Landscape Diagram</b>

</summary>

{% include img.html img="quality-measurement-standards-landscape.png" %}

</details>

The left side of the quality measurement standards landscape diagram depicts 
the activities and standards associated with measure specification, while the 
right side depicts measure reporting. Stakeholders and the roles they play are 
represented by the three rounded rectangles in the foreground labeled Producer, 
Consumer and Specifier. Note that the lists are representative of typical stakeholders, 
but that a single stakeholder may play any or all of the roles in this diagram. 
For example, an institution specifying its own measures for internal use would be 
the Producer, Consumer, and Specifier.

**Quality measure (or performance measure)** is a numeric quantification of healthcare quality
for a designated accountable healthcare entity, such as hospital, health plan,
nursing home, clinician, etc. A healthcare performance measure is a way to calculate
whether and how often the healthcare system does what it should. Measures are based
on scientific evidence about processes, outcomes, perceptions, or systems that relate to high-quality care. [Source](https://ecqi.healthit.gov/glossary/)

**Measure specification** involves the end product of the measure
development process, a precisely specified, valid, reliable, and clinically
significant measure specification to support accurate data representation and
capture of quality measures. Clinical Quality Measures (CQMs) are tools that
help measure and track the quality of healthcare services provided in care
delivery environments, including eligible clinicians (ECs), eligible hospitals
(EHs), and critical access hospitals (CAHs). Measuring and reporting CQMs helps
to ensure that our healthcare system is delivering effective, safe, efficient,
patient-centered, equitable, and timely care. CQMs measure many aspects of
patient care, including patient and family engagement, patient safety, care
coordination, public health, population health management, efficient use of
healthcare resources, and clinical process and effectiveness. For more
information on the basics of Clinical Quality Measures, see
[Clinical Quality Measures Basics](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/ClinicalQualityMeasures.html).
Before Electronic Health Record (EHR) systems, chart-abstracted CQMs were
predominant. Modern EHR systems enable electronic CQMs, or eCQMs.

**Measure reporting** involves the data collection and aggregation,
calculation and analytics, and ultimately reporting of quality measures. Measure
reporting may be accomplished in different ways at various levels of the
healthcare delivery system, from individual providers attesting to specific
quality measures as part of federally-regulated healthcare quality initiatives,
to provider organizations reporting to healthcare plans as part of payer quality
improvement activities, to institutions reporting on the quality of their own
healthcare delivery.

Stakeholders in the quality space, represented by the three rounded
rectangles in the foreground of the above diagram, fall into three broad
categories:

1.  **Data Producers** in the diagram represent the various stakeholders
involved in the de novo creation of healthcare data. Data Producers can include
providers and provider systems; patients, care teams, caregivers, and patient
engagement systems; and other related clinical systems such as laboratory,
clinic, and hospital information systems that are primary producers of patient
healthcare information.

2.  **Data Consumers** in the diagram represent the various stakeholders
involved in the consumption and use of healthcare data. Data Consumers can
include data routers and aggregators, payers, health information exchanges and
health integrated networks, as well as public health, registries, and other healthcare-related agencies.

3.  **Specifiers** in the diagram represents the various stakeholders involved
in the specification of quality measures for use in healthcare quality
measurement and reporting. Specifiers can include quality agencies, public
health, and other healthcare-related agencies, industry consortiums concerned
with improving care quality, and clinical professional societies. Specifiers may
also be institutions and clinics using the quality measurement standards to
specify quality measures for use in their own environments and quality
improvement initiatives.

The shaded areas underlying the stakeholders depict the various standards
involved (see [Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical+Quality+Framework)
for more information).

##### Fast Healthcare Interoperability Resources (FHIR)
{: #fast-healthcare-interoperability-resources-(fhir)}

[Fast Healthcare Interoperability Resources](http://hl7.org/fhir),
or FHIR, is a Health Level 7 (HL7) platform specification for healthcare that
supports exchange of healthcare information between systems. FHIR is universally
applicable, meaning that it can be used in a broad variety of implementation
environments. The platform provides layers of implementation that support
foundational protocols; base implementation functionality such as conformance
and terminology; administrative functionality to represent patients, care teams,
locations, and organizations; healthcare processes including clinical and
diagnostic information, as well as medication, workflow, and financial; and
finally, a clinical reasoning layer that provides support for the representation
of knowledge and reasoning about healthcare.

The quality measurement standards landscape makes use of all these layers of
FHIR: the foundational and implementation layers to define interactions and
profiles; the administrative and process layers to represent the data of
interest for quality measurement; and the clinical reasoning layer to specify
and support evaluation and reporting of quality measures.

##### Clinical Quality Language (CQL)
{: #clinical-quality-language-(cql)}

[Clinical Quality Language](https://cql.hl7.org), or CQL, is an HL7 cross-paradigm specification
that defines a high-level, domain-specific language focused on clinical quality
and targeted for use by measure and decision support artifact authors. In
addition, the specification describes a machine-readable canonical
representation called Expression Logical Model (ELM) targeted at implementations
and designed to facilitate sharing and evaluation of clinical knowledge.

This ability to render clinical knowledge in a high-level human-readable form
as well as an intermediate-level, platform-independent machine-readable form
makes CQL an ideal mechanism for specifying the criteria involved in quality
measures.

##### FHIR Quality Measure Implementation Guide
{: #fhir-quality-measure-implementation-guide}

The FHIR Quality Measure Implementation Guide (this IG) defines conformance
profiles and guidance focused on the specification of quality measures using the
FHIR Measure and Library resources. The IG does not standardize the content of
any particular measure, rather it defines the standard approach to the
representation of that content so that quality measure specifiers can define and
share standardized FHIR-based electronic Clinical Quality Measures (eCQMs).

##### Quality Improvement Core Implementation Guide (QI-Core)
{: #quality-improvement-core-implementation-guide-(qi-core)}

The Quality Improvement Core Implementation Guide, or QI-Core, defines a set
of FHIR profiles with extensions and bindings needed to create interoperable,
quality-focused applications. Importantly, the scope of QI-Core includes both
quality measurement and decision support to ensure that knowledge expressed can
be shared across both domains. QI-Core is derived from US Core, meaning that
where possible, QI-Core profiles are based on US Core to ensure alignment with
and support for quality improvement data within healthcare systems in the US
Realm.

##### Data Exchange for Quality Measures (DEQM)
{: #data-exchange-for-quality-measures-(deqm)}

The Data Exchange for Quality Measures Implementation Guide, or DEQM,
provides a framework that defines conformance profiles and guidance to enable
the exchange of quality information and quality measure reporting (e.g. for
transferring quality information from a healthcare provider to a payer). The
DEQM expects to use quality measures specified in accordance with the Quality
Measure IG and QI-Core.


---

File: repos/HL7_SLASH_cqf-measures/input/pages/references.md

---
layout: default
title: References
---


---

File: repos/HL7_SLASH_cqf-measures/input/pages/terminology.md

{:toc}

{: #terminology}

### CodeSystem Resources
{: #codesystem-resources}

-  [Intended Venue](CodeSystem-intended-venue-codes.html)

### ValueSet Resources
{: #valueset-resources}

-  [Intended Venue](ValueSet-intended-venue.html)
-  [Subject Type](ValueSet-subject-type.html)

### ConceptMap Resources
{: #conceptmap-resources}

-  [Aggregate Method](ConceptMap-aggregate-method.html)
-  [Composite Measure Scoring](ConceptMap-composite-measure-scoring.html)
-  [Data Usages](ConceptMap-data-usages.html)
-  [Improvement Notations](ConceptMap-improvement-notations.html)
-  [Measure Populations](ConceptMap-measure-populations.html)
-  [Measure Scoring](ConceptMap-measure-scoring.html)
-  [Measure Types](ConceptMap-measure-types.html)


---

File: repos/HL7_SLASH_cqf-measures/input/pages/using-cql.md

{:toc}

This topic discusses the use of Clinical Quality Language (CQL) to provide computable and/or executable representation of the various criteria of a measure through the expression-valued elements of the Measure resource. The [CQLMeasure](StructureDefinition-cql-measure-cqfm.html) and [ELMMeasure](StructureDefinition-elm-measure-cqfm.html) profiles define the expectations for measures that make use of CQL and/or ELM. Support for the use of other expression languages is possible, but is out of scope for this implementation guide.

Measures that use CQL do so with libaries to contain the logic used to define the various criteria of the measure. CQL libraries are used in accordance with the [Using CQL With FHIR]({{site.data.fhir.ver.cql}}) (UCWF) implementation guide, as well as additional conformance requirements specific to the use of measures, as detailed in the following sections.

> For ease of reference, conformance requirements from the Using CQL With FHIR IG are referred to with the following notation: UCWF:2.1, which refers to Conformance Requirement 2.1 in the Using CQL With FHIR implementation guide.

### Libraries
{: #libraries}

Consistent with the UCWF IG, Measures that make use of CQL use [Libraries]({{site.data.fhir.ver.cql}}/using-cql.html#libraries).

**Conformance Requirement 4.1 (Library Usage):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-1)
{: #conformance-requirement-4-1}
  1. CQL used by a Measure SHALL be contained in a CQL library
  2. CQL libraries used by Measures SHALL conform to [UCWF:2.1 (Library Declaration)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-1)

For example:

```cql
library EXM146 version '4.0.0'
```

Snippet 4-1: Library line from [EXM146.cql](Library-EXM146-FHIR.html#cql-content)

#### Library Versioning
{: #library-versioning}

Consistent with the UCWF IG, this IG recommends an approach to [Library Versioning]({{site.data.fhir.ver.cql}}/using-cql.html#library-versioning) used within Measures to help track and manage dependencies.
The approach recommended here is based on the [Semantic Versioning Scheme](https://semver.org/).

**Conformance Requirement 4.2 (Library Versioning):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-2)
{: #conformance-requirement-4-2}
  1. CQL libraries used by Measures SHALL include a version as part of the library declaration
  1. CQL libraries used by Measures SHALL conform to [UCWF:2.2 (Library Versioning)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-2)
  2. In addition, CQL libraries used by Measures SHALL follow the convention :
    < major >.< minor >.< patch >
  3. For measures in _draft_ status, a version label MAY be included
    1. If a version label is included, it SHALL follow the convention:
      < major >.< minor >.< patch >-< label >

For example:

```cql
library EXM146 version '3.0.0'
```

This would indicate the first major version of the EXM146 library. A minor change could be released by incrementing the
minor version:

```cql
library EXM146 version '3.1.0'
```

And a major change could be released by incrementing the major version, and resetting the minor version: Minor changes
are expected to retain backwards-compatibility, but may introduce new features and functionality, while patch changes
are expected to retain forward and backwards-compatibility, and may only be used to fix issues.

```cql
library EXM146 version '4.0.0'
```

Snippet 4-2: Library line from [EXM146.cql](Library-EXM146-FHIR.html#cql-content), the fourth major version.

#### Nested Libraries
{: #nested-libraries}

Consistent with the UCWF IG, this IG allows measures to use [Nested Libraries]({{site.data.fhir.ver.cql}}/using-cql.html#nested-libraries). However, this IG requires that all expressions referenced from a Measure be included in a single library to ensure that expression identifiers used in the Measure need not be qualified identifiers.

**Conformance Requirement 4.3 (Nested Libraries):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-3)
{: #conformance-requirement-4-3}
  1. CQL libraries used by measures SHALL conform to [UCWF:2.3 (Nested Libraries)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-3)
  2. In addition, CQL libraries used by measures SHALL be structured such that all CQL expressions referenced by the Measure are contained within a single library.

For example:

```cql
include Common version '2.0.0' called Common
```

Snippet 4-3: Nested library within [EXM146.cql](Library-EXM146-FHIR.html#cql-content)

#### Library Namespaces
{: #library-namespaces}

Consistent with the UCWF IG, this IG recommends the use of [Library Namespaces]({{site.data.fhir.ver.cql}}/using-cql.html#library-namespaces).

**Conformance Requirement 4.4 (Library Namespaces):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-4)
{: #conformance-requirement-4-4}
  1. CQL libraries used by Measures SHALL conform to [UCWF:2.4 (Library Namespaces)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-4)

For example, the following library declaration illustrates the use of a namespace:

```cql
library CMS.Common version '2.0.0'
```

Snippet 4-4: Library namespace

### Data Model
{: #data-model}

CQL can be used with any [Data Model]({{site.data.fhir.ver.cql}}/using-cql.html#data-model). In the context of a Measure, any referenced CQL library must identify the same data model.

**Conformance Requirement 4.5 (CQL Data Model):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-5)
{: #conformance-requirement-4-5}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.5 (Data Models)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-5)
1. All libraries and CQL expressions used directly or indirectly within a measure SHALL use FHIR based data models. For example, one could use QI Core and SDOH IGs.
2. Data Model declarations SHALL include a version declaration.

For example:

```cql
using FHIR version '4.0.1'
```

Snippet 4-5: Data Model line from [EXM146.cql](Library-EXM146-FHIR.html#cql-content)

### Code Systems
{: #code-systems}

Consistent with the UCWF IG, [Code Systems]({{site.data.fhir.ver.cql}}/using-cql.html#code-systems) referenced within CQL expressions make use of the `codesystem` declaration in CQL.

**Conformance Requirement 4.6 (Code System Specification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-6)
{: #conformance-requirement-4-6}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.6 (Code System Specification)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-6)

For example:

```cql
codesystem "SNOMED CT:2017-09": 'http://snomed.info/sct'
  version 'http://snomed.info/sct/731000124108/version/201709'
```

Snippet 4-6: codesystem definition line from [Terminology.cql](Library-Terminology-FHIR.html#cql-content).

#### Representation in a Library
{: #representation-in-a-library}

The representation of codesystem declarations in a Library is discussed in the [Terminology](measure-conformance.html#terminology) topic of this IG.

### Value Sets
{: #value-sets}

Consistent with the UCWF IG, [Value Sets]({{site.data.fhir.ver.cql}}/using-cql.html#value-sets) referenced within CQL expressions make use of the `valueset` declaration in CQL.

**Conformance Requirement 4.7 (Value Set Specification):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-7)
{: #conformance-requirement-4-7}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.7 (Value Set Specification)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-7)

For example:

```cql
valueset "Acute Pharyngitis": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011'
```

Snippet 4-7: Valueset reference from [EXM146.cql](Library-EXM146-FHIR.html#cql-content)

The canonical URL for a value set is typically defined by the value set author, though it may be provided by the
publisher as well. For example, value sets defined in the Value Set Authority Center and exposed via the VSAC FHIR
interface have a base URL of `http://cts.nlm.nih.gov/fhir/`. This base is then used to construct the canonical URL for
the value set (in the same way as any FHIR URL) using the resource type (`ValueSet` in this case) and the id (the value
set OID in this case). Note that the _canonical URL_ is a globally unique, stable, version-independent identifier for the
value set. See [Canonical URLs](http://hl7.org/fhir/references.html#canonical) in the base FHIR specification for more information.

The local identifier for the value set within CQL should be the same as the name of the value set in the
[Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/). However, because the name of the value set is not
guaranteed to be unique, it is possible to reference multiple value sets with the same name, but different identifiers.
When this happens in a CQL library, the local identifier should be the name of the value set with a qualifying suffix to
preserve the value set name as a human-readable artifact, but still allow unique reference within the CQL library.

For example:

```cql
valueset "Acute Pharyngitis (1)": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011.1'
valueset "Acute Pharyngitis (2)": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011.2'
```

Snippet 4-8: Valueset declarations for different value sets with the same name

Note carefully that although this URL may be resolveable for some terminology implementations, this is not necessarily the
case. This use of a canonical URL can be resolved as a search by the `url` element:

```
GET fhir/ValueSet?url=http%3A%2F%2Fcts.nlm.nih.gov%2Ffhir%2FValueSet%2F2.16.840.1.113883.3.464.1003.102.12.1011.1
```

Snippet 4-9: FHIR API query to retrieve a value set by it's canonical identifier using the url search parameter

#### Value Set Version
{: #value-set-version}

Consistent with the UCWF IG, [Value Set Version]({{site.data.fhir.ver.cql}}/using-cql.html#value-set-version) information is not required to be included. As a best-practice, terminology versioning information is specified externally using a version manifest. However, if versioning information is included, it must be done in accordnace with terminology usage specified by FHIR.

**Conformance Requirement 4.8 (Value Set Specification By Version):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-8)
{: #conformance-requirement-4-8}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.8 (Value Set Specification Including Version)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-8)

For example:

```cql
valueset "Encounter Inpatient SNOMEDCT Value Set":
   'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929'
```

Snippet 4-10: valueset definition from [Terminology.cql](Library-Terminology-FHIR.html#cql-content).

This is a _version specific value set reference_, and can be resolved as a search by the `url` and `version` elements:

```
GET fhir/ValueSet?url=http%3A%2F%2Fcts.nlm.nih.gov%2Ffhir%2FValueSet%2F2.16.840.1.113883.3.666.7.307&version=20160929
```

Snippet 4-11: FHIR API query to retrieve a value set by it's url and version

#### Value Set Expansion

Measures that make use of CQL must do so in accordance with [Value Set Expansion]({{site.data.fhir.ver.cql}}/using-cql.html#value-set-expansion) as described in the UCWF IG.

**Conformance Requirement 4.9 (Value Set Expansion):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-9)
{: #conformance-requirement-4-9}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.9 (Value Set Expansion)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-9)

#### Representation in a Library
{: #representation-in-a-library}

The representation of `valueset` declarations in a Library is discussed in the [Terminology](measure-conformance.html#terminology) topic of this IG, consistent with the [Representation in Narrative]({{site.data.fhir.ver.cql}}/using-cql.html#valueset-representation-in-narrative) topic in the UCWF IG.

#### String-based Membership Testing
{: #string-based-membership-testing}

Consistent with the UCWF IG, this implementation guide recommends against the use of [_string-based membership testing_]({{site.data.fhir.ver.cql}}/using-cql.html#string-based-membership-testing).

**Conformance Requirement 4.10 (String-based Membership Testing):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-10)
{: #conformance-requirement-4-10}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.10 (String-based Membership Testing)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-10)

### Codes
{: #codes}

Consistent with the UCWF IG, CQL used with Measures can make use of [_direct-reference codes_]({{site.data.fhir.ver.cql}}/using-cql.html#codes).

**Conformance Requirement 4.11 (Direct-reference Codes):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-11)
{: #conformance-requirement-4-11}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.11 (Direct-reference Codes)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-11)

For example:

```cql
code "Venous foot pump, device (physical object)": '442023007' from "SNOMED CT"
```

Snippet 4-12: code definition from [Terminology.cql](Library-Terminology-FHIR.html#cql-content).

#### Representation in a Library
{: #representation-in-a-library}

The representation of code declarations in a Library is discussed in [Terminology](measure-conformance.html#terminology) of this IG, consistent with the [Representation in Narrative]({{site.data.fhir.ver.cql}}/using-cql.html#code-representation-in-narrative) topic in the UCWF IG.

### UCUM Best Practices
{: #ucum-best-practices}

This implementation guide recommends the [UCUM Best Practices]({{site.data.fhir.ver.cql}}/using-cql.html#ucum-best-practices) found in the UCWF IG.

### Concepts
{: #concepts}

Consistent with the UCWF IG, CQL used with Measures may make use of the CQL [_concept_]({{site.data.fhir.ver.cql}}/using-cql.html#concepts) declaration, but care must be taken to ensure that it is not used as a surrogate for proper value set definition.

**Conformance Requirement 4.12 (Concepts):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-12)
{: #conformance-requirement-4-12}

1. CQL libraries used by Measures SHALL conform to [UCWF:2.12 (Concepts)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-12)

### Library-level Identifiers
{: #library-level-identifiers}

Consistent with the UCWF IG, CQL used by Measures should use descriptive and meaningful library-level identifiers, as discussed in the [Library-level Identifiers](using-cql.html#library-level-identifiers) topic

**Conformance Requirement 4.13 (Library-level Identifiers):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-13)
{: #conformance-requirement-4-13}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.13 (Library-level Identifiers)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-13)

### Data Type Names
{: #data-type-names}

Consistent with the UCWF IG, CQL used by Measures must refer to [Data Type Names]({{site.data.fhir.ver.cql}}/using-cql.html#data-type-names) as dictated by the CQL specification, as well as the Data Models in use. For FHIR-based Quality Measures using QI-Core profiles, these will be the author-friendly identifiers for the QI-Core profiles.

**Conformance Requirement 4.14 (Data Type Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-14)
{: #conformance-requirement-4-14}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.14 (Data Type Names)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-14)

For example:

```cql
define "Flexible Sigmoidoscopy Performed":
  [Procedure: "Flexible Sigmoidoscopy"] FlexibleSigmoidoscopy
    where FlexibleSigmoidoscopy.status = 'completed'
      and FlexibleSigmoidoscopy.performed ends 5 years or less on or before end of "Measurement Period"
```

Snippet 4-13: Expression definition from [EXM130.cql](Library-EXM130-FHIR.html#cql-content)

`Procedure` is the name of the model data type (FHIR resource type) in this example.

### Element Names
{: #element-names}

Consistent with the UCWF IG, CQL used by Measures must refer to [Element Names]({{site.data.fhir.ver.cql}}/using-cql.html#element-names) as dictated by the CQL specification, as well as the Data Models in use.

Note that when FHIR and FHIR IGs are used as the data model, the term "element" is synonymous with "attribute". Some data models, such as QDM, use the "attribute".

**Conformance Requirement 4-15 (Element Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-15)
{: #conformance-requirement-4-15}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.15 (Element Names)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-15)

Examples of elements (i.e. attributes) conforming to Conformance Requirement 4.15 are given below. For a full list of valid names of attributes for a data model, refer to an appropriate data model specification such as QI-Core.

```cql
period
authoredOn
result
```

Snippet 4-14: Example element names

### Aliases and Argument Names
{: #aliases-and-argument-names}

Consistent with the UCWF IG, CQL used by Measures must follow conventions for naming of [Aliases and Arguments]({{site.data.fhir.ver.cql}}/using-cql.html#aliases-and-argument-names).

**Conformance Requirement 4.16 (Aliases and Argument Names):** [<img src="conformance.png" width="20" class="self-link" height="20"/>](#conformance-requirement-4-16)
{: #conformance-requirement-4-16}
1. CQL libraries used by Measures SHALL conform to [UCWF:2.16 (Aliases and Argument Names)]({{site.data.fhir.ver.cql}}/using-cql.html#conformance-requirement-2-16)

For example:

```cql
define "Encounters During Measurement Period":
    "Valid Encounters" QualifyingEncounter
        where QualifyingEncounter.period during "Measurement Period"

define function "ED Stay Time"(Encounter "Encounter"):
    duration in minutes of Encounter.period
```

Snippet 4-15: Example alias and argument names

`QualifyingEncounter` is the _alias_ in this example, while `Encounter` is the _argument name_.

### Library Resources
{: #library-resources}

Inclusion of CQL content used within quality measures is accomplished through the use of [Library Resources]({{site.data.fhir.ver.cql}}/conformance.html) as described by the Using CQL With FHIR implementation guide. These libraries are then referenced from Measure resources using the `library` element. The content of the CQL library is included using the `content` element of the Library. Conformance requirements for Library resources included with Measure content are discussed in the [Related Documents](measure-conformance.html#related-documents) topic of this IG.

### Patterns
{: #patterns}

Additional guidance and best-practices for the use of CQL in measures can be found in the [Patterns]({{site.data.fhir.ver.cql}}/patterns.html) topic of the Using CQL With FHIR implementation guide, including guidance on:

* [Profile-informed authoring]({{site.data.fhir.ver.cql}}/patterns.html#profile-informed-authoring)
* [Use of terminologies]({{site.data.fhir.ver.cql}}/patterns.html#use-of-terminologies)
* [Time-valued quantities]({{site.data.fhir.ver.cql}}/patterns.html#time-valued-quantities)
* [Missing information]({{site.data.fhir.ver.cql}}/patterns.html#missing-information)
* [Negation in FHIR]({{site.data.fhir.ver.cql}}/patterns.html#negation-in-fhir)

### Translation to ELM
{: #translation-to-elm}

The use of Expression Logical Model (ELM) as a basis for sharing logic is discussed in the [Using ELM]({{site.data.fhir.ver.cql}}/using-elm.html) topic of the Using CQL With FHIR implementation guide, including guidance on:

* [Inclusion of ELM content in measure packages]({{site.data.fhir.ver.cql}}/using-elm.html#conformance-requirement-5-1)
* [Recommended translator options]({{site.data.fhir.ver.cql}}/using-elm.html#conformance-requirement-5-2)
* [Specifying and exchanging translator options]({{site.data.fhir.ver.cql}}/using-elm.html#specifying-translator-options)
* [Determining ELM suitability based on context]({{site.data.fhir.ver.cql}}/using-elm.html#elm-suitability)



---

File: repos/HL7_SLASH_cqf-measures/input/resources/README.md

This folder contains project specific conformance resource in xml or json.

These are used by the ig-publisher to create fragments to include in the IG.


---

File: repos/HL7_SLASH_cqf-measures/input/vocabulary/README.md

This folder contains page the valuesets and codesystems referenced within the IG


---

