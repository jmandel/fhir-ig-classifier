// File: input/pagecontent/downloads.md

The following downlaods are available:

* [Full HTML Implementation Guide](full-ig.zip)
* Definitions [xml](definitions.xml.zip) | [json](definitions.json.zip)
* [Package](package.tgz) (for dependencies)

---

// File: input/pagecontent/extensions.md

---
# jekyll header
title: Clinical Document Architecture (CDA) 2.0 - Extensions
---

---

// File: input/pagecontent/guidance.md

---
# jekyll header
title: Clinical Document Architecture (CDA) 2.0 - Guidance
---

---

// File: input/pagecontent/implementation.md

---
# jekyll header
title: Clinical Document Architecture (CDA) 2.0 - Implementation Notes
---

### Creating CDA Documents

**Introduction**

There are an ever-increasing variety of tools and techniques for creating CDA documents:

1.  Transcription: most clinical documents are created through a voice interface. CDA is available as an output from transcription vendors large and small today. Some are integrating natural language processing to provide coded structures within dictated CDAs.
2.  EMR/EHR: many electronic medical record vendors have CDA output capability, although they provide it on-demand, not as a standard feature. For EMRs, CDA is relatively simple type of report.
3.  XML forms: a new generation of XML tools for forms generation can create CDA on output.
4.  Knowledge base: at least one major US provider has built a CDA editor on top of a knowledge base for guided, structured entry.
5.  Dynamic query: dynamic assembly of CDA documents is used in some distributed applications to prepopulate documents from existing data stores, such as lab result databases. This method can be used in conjunction with any of the others.

This appendix considers not the specific tools and technologies, but is intended as a general guide to use of CDA in document creation.

**Before you start: RIM compliance**

*   structures, vocabulary, datatypes

Creating a CDA-compliant instance, by definition, means that the information contained within is defined by the HL7 RIM. Regardless of your starting point or method of document generation, when you are done, the computable semantics of the document will derive their meaning from the relationship between RIM classes, controlled vocabulary and the V3 RIM datatypes. Any CDA-generation implementation must start with an examination of how document requirements relate to the RIM, the datatypes and vocabulary.

The RIM, however, is a highly abstract model and recognizes many extensive vocabulary domains. While RIM-mapping is a necessary condition for CDA generation, it is not sufficient to determine the method of generation or to drive a user interface for document creation.

**An exchange specification, not an authoring specification**

*   CDA is not deterministic for document creation

CDA is a specification for the exchange form of a clinical document. A CDA schema can validate many of the conformance requirements, but will be too general for most authoring applications. In general, standards for interoperability and broadbased exchange will not directly drive an authoring GUI. Given the extent of the CDA domain – clinical care – the requirements for generalized exchange overlap with, but don’t match, the requirements for driving an authoring interface.

For example, the CDA requirement for human readability demands that a single stylesheet render the authenticated clinical content of any CDA document. If CDA elements were defined in the generic schema that corresponds to the sections of a document, `<historyOfPresentIllness>` or `<Subjective>`, for example, a stylesheet would need to recognize each of these tags as section-level tags and render them accordingly. The CDA approach, defining `<section>` and asserting the type of section through coded vocabulary means that not only is the CDA extensible through the externally-maintained vocabulary domains, but that document designers have the flexibility to create hierarchies of sections and to name and tag them according to local requirements, while maintaining compatibility for the exchange context. Thus, while specific tagging that makes it easier to drive a GUI is fine locally, where practice can be more tightly constrained, CDA needs to take a more general approach.

Both sets of requirements, for authoring and for exchange, should be recognized. Within a defined community of interest, such as a single business enterprise, a professional society or in some cases, local and regional health authorities, there can be tight agreement on the form of a document so that the authoring definitions and the exchange definitions coincide. Unless and until there is universal agreement, there can be no universal exchange unless the diversity of local requirements is acknowledged. This is a long-winded way of saying that CDA will remain a general exchange standard, and other approaches must be available to define data entry and document creation validation requirements.

General approaches: constrain or transform

*   constrain: emit valid CDA directly from the authoring system using a schema that isn’t CDA
*   transform: example - emit local XML, map to CDA

Given that CDA is not an authoring schema, there are two logical alternatives to creating valid CDA instances.

The first is to add constraints to the CDA schema so that the resulting specification defines a particular document type (see the following exhibit "Creating a CDA through a local schema"). There are several technologies available for adding constraints. One approach is to modify the CDA schema itself to a local variant (local.cda.xsd below). Modifications could include limiting the levels of nesting; constraining vocabulary and sequence, for example requiring that a section with a LOINC code for "Subjective" initiate the document body and be followed by a section coded "Objective". These modifications could be expressed in W3C Schema or as Xpath statements within the local schema. Instances that validate against this constrained, local version of CDA are, by definition, also valid CDA instances.

<a href="L-cda_figure3.gif"><img src="L-cda_figure3.gif" alt="Validate with CDA Schema" style="max-width:100%" /></a>

Templates are one type of constraint. HL7 is in the process of defining a formal template mechanism (see [The "A" in "CDA"](overview.html#the-a-in-cda)).

The second approach is to create a local schema and then transform the local XML instance to CDA

<a href="L-cda_figure4.gif"><img src="L-cda_figure4.gif" alt="Transform from local instance" style="max-width:100%" /></a>


### CDA and Semantic Interoperability

A long term objective of CDA and other specifications in the V3 family is to achieve increasingly greater and greater "semantic interoperability", which might be defined as the ability of two applications to share data, with no prior negotiations, such that decision support within each application continues to function reliably when processed against the received data.

CDA seeks to achieve the highest level of constraint that can exist in an international standard. Where international consensus is lacking, and where uses cases in different realms currently preclude consensus, CDA will need to be necessarily inclusive. In such areas, ongoing harmonization and consensus building will further enable semantic interoperability, which will be reflected in future iterations of CDA.

While the framework provided by the RIM and by CDA and by the shared HL7 Clinical Statement Model are a critical component of semantic interoperability, they are not currently sufficient, particularly given the lack of global terminology solution, and the fact that each terminology overlaps with the RIM in different ways. Such terminology solutions are outside the scope of CDA, and will need to be addressed in various national and international forums.

---

// File: input/pagecontent/index.md

### CDA Definition

This Implementation Guide is a representation of the [Clinical Document Architecture (CDA) R2.0 specification](https://hl7.org/cda/stds/online-navigation/index.html) using FHIR Logical Models expressed as FHIR StructureDefinition instances.  The main purpose of the guide is to support the Consolidated CDA specification which defines its templates using these logical structures.  Other CDA-based guides can also use this guide and these structures to create specifications like Consolidated CDA.

This guide does not replace the CDA specification.  It includes the Overview, Implementation Notes, and Narrative Block information from the specification to provide context and guidance.  To understand CDA, readers should consult the actual CDA specification.  If there are any differences found between the specification and this guide, the specification takes precedence and is assumed to be correct.

<table class="cda-table">
	<tbody>
	<tr>
		<td>
			<h3>CDA Classes</h3>
			<ul style="columns:2; column-gap:5em">
				<li><a href="StructureDefinition-ClinicalDocument.html"><strong>ClinicalDocument</strong></a></li>
				<li><a href="StructureDefinition-Act.html">Act</a></li>
				<li><a href="StructureDefinition-AlternateIdentification.html">AlternateIdentification</a></li>
				<li><a href="StructureDefinition-AssignedAuthor.html">AssignedAuthor</a></li>
				<li><a href="StructureDefinition-AssignedCustodian.html">AssignedCustodian</a></li>
				<li><a href="StructureDefinition-AssignedEntity.html">AssignedEntity</a></li>
				<li><a href="StructureDefinition-AssociatedEntity.html">AssociatedEntity</a></li>
				<li><a href="StructureDefinition-Authenticator.html">Authenticator</a></li>
				<li><a href="StructureDefinition-Author.html">Author</a></li>
				<li><a href="StructureDefinition-AuthoringDevice.html">AuthoringDevice</a></li>
				<li><a href="StructureDefinition-Authorization.html">Authorization</a></li>
				<li><a href="StructureDefinition-Birthplace.html">Birthplace</a></li>
				<li><a href="StructureDefinition-Component.html">Component</a></li>
				<li><a href="StructureDefinition-ComponentOf.html">ComponentOf</a></li>
				<li><a href="StructureDefinition-Consent.html">Consent</a></li>
				<li><a href="StructureDefinition-Criterion.html">Criterion</a></li>
				<li><a href="StructureDefinition-Custodian.html">Custodian</a></li>
				<li><a href="StructureDefinition-CustodianOrganization.html">CustodianOrganization</a></li>
				<li><a href="StructureDefinition-DataEnterer.html">DataEnterer</a></li>
				<li><a href="StructureDefinition-Device.html">Device</a></li>
				<li><a href="StructureDefinition-DocumentationOf.html">DocumentationOf</a></li>
				<li><a href="StructureDefinition-EncompassingEncounter.html">EncompassingEncounter</a></li>
				<li><a href="StructureDefinition-Encounter.html">Encounter</a></li>
				<li><a href="StructureDefinition-EncounterParticipant.html">EncounterParticipant</a></li>
				<li><a href="StructureDefinition-Entity.html">Entity</a></li>
				<li><a href="StructureDefinition-Entry.html">Entry</a></li>
				<li><a href="StructureDefinition-EntryRelationship.html">EntryRelationship</a></li>
				<li><a href="StructureDefinition-ExternalAct.html">ExternalAct</a></li>
				<li><a href="StructureDefinition-ExternalDocument.html">ExternalDocument</a></li>
				<li><a href="StructureDefinition-ExternalObservation.html">ExternalObservation</a></li>
				<li><a href="StructureDefinition-ExternalProcedure.html">ExternalProcedure</a></li>
				<li><a href="StructureDefinition-Guardian.html">Guardian</a></li>
				<li><a href="StructureDefinition-HealthCareFacility.html">HealthCareFacility</a></li>
				<li><a href="StructureDefinition-IdentifiedBy.html">IdentifiedBy</a></li>
				<li><a href="StructureDefinition-InFulfillmentOf.html">InFulfillmentOf</a></li>
				<li><a href="StructureDefinition-InFulfillmentOf1.html">InFulfillmentOf1</a></li>
				<li><a href="StructureDefinition-Informant.html">Informant</a></li>
				<li><a href="StructureDefinition-InformationRecipient.html">InformationRecipient</a></li>
				<li><a href="StructureDefinition-InfrastructureRoot.html">InfrastructureRoot</a></li>
				<li><a href="StructureDefinition-IntendedRecipient.html">IntendedRecipient</a></li>
				<li><a href="StructureDefinition-LabeledDrug.html">LabeledDrug</a></li>
				<li><a href="StructureDefinition-LanguageCommunication.html">LanguageCommunication</a></li>
				<li><a href="StructureDefinition-LegalAuthenticator.html">LegalAuthenticator</a></li>
				<li><a href="StructureDefinition-MaintainedEntity.html">MaintainedEntity</a></li>
				<li><a href="StructureDefinition-ManufacturedProduct.html">ManufacturedProduct</a></li>
				<li><a href="StructureDefinition-Material.html">Material</a></li>
				<li><a href="StructureDefinition-NonXMLBody.html">NonXMLBody</a></li>
				<li><a href="StructureDefinition-Observation.html">Observation</a></li>
				<li><a href="StructureDefinition-ObservationMedia.html">ObservationMedia</a></li>
				<li><a href="StructureDefinition-ObservationRange.html">ObservationRange</a></li>
				<li><a href="StructureDefinition-Order.html">Order</a></li>
				<li><a href="StructureDefinition-Organization.html">Organization</a></li>
				<li><a href="StructureDefinition-OrganizationPartOf.html">OrganizationPartOf</a></li>
				<li><a href="StructureDefinition-Organizer.html">Organizer</a></li>
				<li><a href="StructureDefinition-OrganizerComponent.html">OrganizerComponent</a></li>
				<li><a href="StructureDefinition-ParentDocument.html">ParentDocument</a></li>
				<li><a href="StructureDefinition-Participant1.html">Participant1</a></li>
				<li><a href="StructureDefinition-Participant2.html">Participant2</a></li>
				<li><a href="StructureDefinition-ParticipantRole.html">ParticipantRole</a></li>
				<li><a href="StructureDefinition-Patient.html">Patient</a></li>
				<li><a href="StructureDefinition-PatientRole.html">PatientRole</a></li>
				<li><a href="StructureDefinition-Performer1.html">Performer1</a></li>
				<li><a href="StructureDefinition-Performer2.html">Performer2</a></li>
				<li><a href="StructureDefinition-Person.html">Person</a></li>
				<li><a href="StructureDefinition-Place.html">Place</a></li>
				<li><a href="StructureDefinition-PlayingEntity.html">PlayingEntity</a></li>
				<li><a href="StructureDefinition-Precondition.html">Precondition</a></li>
				<li><a href="StructureDefinition-Precondition2.html">Precondition2</a></li>
				<li><a href="StructureDefinition-Procedure.html">Procedure</a></li>
				<li><a href="StructureDefinition-RecordTarget.html">RecordTarget</a></li>
				<li><a href="StructureDefinition-Reference.html">Reference</a></li>
				<li><a href="StructureDefinition-RegionOfInterest.html">RegionOfInterest</a></li>
				<li><a href="StructureDefinition-RelatedDocument.html">RelatedDocument</a></li>
				<li><a href="StructureDefinition-RelatedEntity.html">RelatedEntity</a></li>
				<li><a href="StructureDefinition-RelatedSubject.html">RelatedSubject</a></li>
				<li><a href="StructureDefinition-Section.html">Section</a></li>
				<li><a href="StructureDefinition-ServiceEvent.html">ServiceEvent</a></li>
				<li><a href="StructureDefinition-Specimen.html">Specimen</a></li>
				<li><a href="StructureDefinition-SpecimenRole.html">SpecimenRole</a></li>
				<li><a href="StructureDefinition-StructuredBody.html">StructuredBody</a></li>
				<li><a href="StructureDefinition-Subject.html">Subject</a></li>
				<li><a href="StructureDefinition-SubjectPerson.html">SubjectPerson</a></li>
				<li><a href="StructureDefinition-SubstanceAdministration.html">SubstanceAdministration</a></li>
				<li><a href="StructureDefinition-Supply.html">Supply</a></li>
			</ul>
		</td>
		<td>
			<h3>V3 Complex Data Types</h3>
			<ul>
				<li><a href="StructureDefinition-AD.html">AD: PostalAddress</a></li>
				<li><a href="StructureDefinition-ADXP.html">ADXP: CharacterString</a></li>
				<li><a href="StructureDefinition-ANY.html">ANY: DataValue</a></li>
				<li><a href="StructureDefinition-BL.html">BL: Boolean</a></li>
				<li><a href="StructureDefinition-CD.html">CD: ConceptDescriptor</a></li>
				<li><a href="StructureDefinition-CE.html">CE: CodedWithEquivalents</a></li>
				<li><a href="StructureDefinition-CO.html">CO: CodedOrdinal</a></li>
				<li><a href="StructureDefinition-CR.html">CR: ConceptRole</a></li>
				<li><a href="StructureDefinition-CS.html">CS: CodedSimpleValue</a></li>
				<li><a href="StructureDefinition-CV.html">CV: CodedValue</a></li>
				<li><a href="StructureDefinition-ED.html">ED: EncapsulatedData</a></li>
				<li><a href="StructureDefinition-EIVL-TS.html">EIVL_TS: EventRelatedPeriodicInterval</a></li>
				<li><a href="StructureDefinition-EN.html">EN: EntityName</a></li>
				<li><a href="StructureDefinition-ENXP.html">ENXP: Entity Name Part</a></li>
				<li><a href="StructureDefinition-II.html">II: InstanceIdentifier</a></li>
				<li><a href="StructureDefinition-INT-POS.html">INT_POS: Positive integer numbers</a></li>
				<li><a href="StructureDefinition-INT.html">INT: IntegerNumber</a></li>
				<li><a href="StructureDefinition-IVL-INT.html">IVL_INT: Interval</a></li>
				<li><a href="StructureDefinition-IVL-PQ.html">IVL_PQ: Interval</a></li>
				<li><a href="StructureDefinition-IVL-TS.html">IVL_TS: Interval</a></li>
				<li><a href="StructureDefinition-IVXB-INT.html">IVXB_INT: Interval Boundary IntegerNumber</a></li>
				<li><a href="StructureDefinition-IVXB-PQ.html">IVXB_PQ: Interval Boundary PhysicalQuantity</a></li>
				<li><a href="StructureDefinition-IVXB-TS.html">IVXB_TS: Interval Boundary PointInTime</a></li>
				<li><a href="StructureDefinition-MO.html">MO: MonetaryAmount</a></li>
				<li><a href="StructureDefinition-ON.html">ON: OrganizationName</a></li>
				<li><a href="StructureDefinition-PIVL-TS.html">PIVL_TS: PeriodicIntervalOfTime</a></li>
				<li><a href="StructureDefinition-PN.html">PN: PersonName</a></li>
				<li><a href="StructureDefinition-PQ.html">PQ: PhysicalQuantity</a></li>
				<li><a href="StructureDefinition-PQR.html">PQR: PhysicalQuantityRepresentation</a></li>
				<li><a href="StructureDefinition-QTY.html">QTY: Quantity</a></li>
				<li><a href="StructureDefinition-REAL.html">REAL: RealNumber</a></li>
				<li><a href="StructureDefinition-RTO-PQ-PQ.html">RTO_PQ_PQ: Ratio</a></li>
				<li><a href="StructureDefinition-SC.html">SC: CharacterStringWithCode</a></li>
				<li><a href="StructureDefinition-ST.html">ST: CharacterString</a></li>
				<li><a href="StructureDefinition-SXCM-TS.html">SXCM_TS: GeneralTimingSpecification</a></li>
				<li><a href="StructureDefinition-SXPR-TS.html">SXPR_TS: Component part of GTS</a></li>
				<li><a href="StructureDefinition-TEL.html">TEL: TelecommunicationAddress</a></li>
				<li><a href="StructureDefinition-TN.html">TN: TrivialName</a></li>
				<li><a href="StructureDefinition-TS.html">TS: PointInTime</a></li>
			</ul>
		</td>
		<td>
			<h3>V3 Simple Data Types</h3>
			<ul>
				<li><a href="StructureDefinition-bin.html">bin: Binary Data</a></li>
				<li><a href="StructureDefinition-bl-simple.html">bl: Boolean</a></li>
				<li><a href="StructureDefinition-bn.html">bn: BooleanNonNull</a></li>
				<li><a href="StructureDefinition-cs-simple.html">cs: Coded Simple Value</a></li>
				<li><a href="StructureDefinition-int-simple.html">int: Integer Number</a></li>
				<li><a href="StructureDefinition-oid.html">oid: ISO Object Identifier</a></li>
				<li><a href="StructureDefinition-probability.html">probability: Probability</a></li>
				<li><a href="StructureDefinition-real-simple.html">real: Real Number</a></li>
				<li><a href="StructureDefinition-ruid.html">ruid: HL7 Reserved Identifier Scheme</a></li>
				<li><a href="StructureDefinition-st-simple.html">st: Character String</a></li>
				<li><a href="StructureDefinition-ts-simple.html">ts: Point in Time</a></li>
				<li><a href="StructureDefinition-uid.html">uid: Unique Identifier String</a></li>
				<li><a href="StructureDefinition-url.html">url: Universal Resource Locator</a></li>
				<li><a href="StructureDefinition-uuid.html">uuid: DCE Universal Unique Identifier</a></li>
			</ul>
		</td>
	</tr>
	</tbody>
</table>

### CDA Extensions

This guide also incorporates the [approved SDTC extensions](https://confluence.hl7.org/display/SD/CDA+Extensions).  Elements from the extensions will be found with 'sdtc' before their name.  They also are defined to be in the `urn:hl7-org:sdtc` namespace and that is visible in the structure pages.  [Custodian Organization](StructureDefinition-CustodianOrganization.html) has an example of an extension element (sdtcTelecom).  Note that while extensions are prefixed with 'sdtc', their actual XML name does not include this. Their XML name is displayed in the structure pages as `XML`. For example, the CustodianOrganization's sdtcTelecom would appear in an instance as either `<telecom xmlns="urn:hl7-org:sdtc" value="...." />` or in a document with a defined prefix for sdtc:

```xml
<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:sdtc="urn:hl7-org:v3/voc">
	<custodian>
		<assignedCustodian>
			<representedCustodianOrganization>
				<sdtc:telecom value="..." />
	...
```

### CDA Example

An [example of a CDA document](Binary-clinicaldocument-example.html) has been provided along with a [transformed version of the example](transformed-example.html) using the [informative CDA stylesheet](https://github.com/HL7/cda-core-xsl).

### CDA Validation

With the representation of the CDA structures using FHIR StructureDefinitions, there is now an option on how to validate CDA documents.  The CDA schemas are still valid and can be [found here](https://github.com/HL7/CDA-core-2.0).  Additionally, by pointing the FHIR validator at this guide, CDA instances can be validated using FHIR validators.

#### FHIRPath Supplements

The FHIRPath language defines a set of contexts that get passed into expressions and also allows the definition of additional contexts and functions. CDA provides the following supplemental guidance for evaluating FHIRPath:

* The `%resource` variable when it appears in expressions on CDA profiles will be evaluated as the root `ClinicalDocument`.

* A new function: `hasTemplateIdOf([ProfileUrl])` evaluates to true or false based on whether the XML contains a `<templateId />` element corresponding to the identifier of a particular profile.

For example, if a profile like `http://hl7.org/cda/us/custom/StructureDefinition/ExampleSection` contains an identifier property like `urn:hl7ii:2.16.840.1.113883.10.20.22.99.999:2024-05-01`, then the following XPath:

`%resource.component.structuredBody.component.where(section.hasTemplateIdOf('http://hl7.org/cda/us/custom/StructureDefinition/ExampleSection'))` 

will return true if the document contains a section with the templateId of Example Section. 

It is equivalent to the following, but allows an IG author to easily update the templateId extensions without finding-and-replacing constraint expressions:

`%resource.component.structuredBody.component.where(section.templateId.where(root = '2.16.840.1.113883.10.20.22.99.999' and extension = '2024-05-01'))`

#### Implementation Guide Parameters

Parameters from the [IG Parameters CDA Validation Code System](CodeSystem-IGParametersCDAValidation.html) may be included to control the behavior of Schematron generation in CDA implementation guides written in FHIR StructureDefinition format.

### Authors

The current specification lists the following people as editors/authors:

* Robert H. Dolin, MD
* Liora Alschuler
* Sandy Boyer, BSP
* Calvin Beebe
* Fred M. Behlen, PhD
* Paul V. Biron
* Amnon Shabo (Shvo), PhD

This guide has the following authors:

* Jean Duteau
* Rosemary Hofstede
* Benjamin Flessner
* Susan Rand

The CDA community also benefits from the following people who have contributed to the guide:

* Austin Kreisler
* John D'Amore
* Lisa Nelson
* Brett Marquard
* Gay Dolin
* Matt Szczepankiewicz


### Other Information

{% include ip-statements.xhtml %}

<hr/>

{% include dependency-table.xhtml %}

<hr/>

{% include globals-table.xhtml %}


---

// File: input/pagecontent/narrative.md

---
# jekyll header
title: Clinical Document Architecture (CDA) 2.0 - Narrative Block
---

The Section.text field is used to store narrative to be rendered, as described above in [CDA Conformance](overview.html#cda-conformance), and is therefore referred to as the CDA Narrative Block.

[The CDA Narrative Block schema can be found here.](NarrativeBlock.xsd)

The content model of the CDA Narrative Block schema is specially hand crafted to meet the requirements outlined above (see [Human Readability and Rendering CDA Documents](overview.html#human-readability-and-rendering-cda-documents)). The schema is registered as a MIME type (text/x-hl7-text+xml), which is the fixed media type for Section.text. Components of the schema are described in the sections that follow.

### &lt;content&gt;

The CDA `<content>` element is used to wrap a string of text so that it can be explicitly referenced, or so that it can suggest rendering characteristics. The `<content>` element can nest recursively, which enables wrapping a string of plain text down to as small a chunk as desired.

The `<content>` element contains an optional identifier, that can serve as the target of a reference. All values of attributes of type XML ID must be unique within the document (per the [W3C XML specification](http://www.w3.org/TR/2004/REC-xml-20040204/#id)). The originalText component of a RIM attribute present in any CDA entry can make explicit reference to the identifier, thereby indicating the original text associated with the attribute in the CDA entry.

Example 5
```xml
<section>
   <code code="10153-2" 
    codeSystem="2.16.840.1.113883.6.1" 
    codeSystemName="LOINC"/>
   <title>Past Medical History</title>
   <text>
    There is a history of <content ID="a1">Asthma</content>
   </text>
   <entry>
      <observation classCode="OBS" moodCode="EVN">
         <code code="195967001" 
          codeSystem="2.16.840.1.113883.6.96" 
          codeSystemName="SNOMED CT" 
          displayName="Asthma">
            <originalText>
               <reference value="#a1"/>
            </originalText>
         </code>
         <statusCode code="completed"/>
      </observation>
   </entry>
</section>
```

There is no requirement that CDA entries must reference into the CDA Narrative Block. The referencing mechanism can be used where it is important to represent the original text component of a coded CDA entry.

The `<content>` element contains an optional "revised" attribute that can be valued with "insert" or "delete", which can be used to indicate narrative changes from the last version of a CDA document. The attribute is limited to a single generation, in that it only reflects the changes from the preceding version of a document. If applied, it needs to be used in conjunction with standard CDA revision tracking. Changes to a CDA document that has been released for patient care still require a formal versioning and revision, and the revised document can optionally carry the "revised" attribute to show the delta in the narrative. Receivers are required to interpret the "revised" attribute when rendering by visually distinguishing or suppressing deleted narrative.

### &lt;linkHtml&gt;

The CDA `<linkHtml>` is a generic referencing mechanism, similar, but not identical, to the HTML anchor tag. It can be used to reference identifiers that are either internal or external to the document.

Multimedia that is integral to a document, and part of the attestable content of the document requires the use of the [ObservationMedia](StructureDefinition-ObservationMedia.html) CDA entry, which is referenced by the `<renderMultiMedia>` element (see [&lt;renderMultiMedia&gt;](#rendermultimedia)). Multimedia that is simply referenced by the document and not an integral part of the document can use `<linkHtml>`.

The source of a link uses the linkHtml.href attribute. The target of an internal reference is an identifier of type XML ID, which can exist on other elements in the same or a different narrative block, or XML ID attributes that have been added to the [&lt;section&gt;](StructureDefinition-Section.html), [&lt;observationMedia&gt;](StructureDefinition-ObservationMedia.html), or [&lt;renderMultiMedia&gt;](#rendermultimedia) elements of the CDA Schema. The linkHtml.name attribute is deprecated, because attributes of type XML ID provide an alternative and more consistent target for referencing. Following the conventions of HTML, an internal link is prefaced with the pound sign, as shown in the following example.

Example 6
```xml
<section ID="SECT001">
   <code code="10164-2" codeSystem="2.16.840.1.113883.6.1" 
    codeSystemName="LOINC"/>
   <title>History of Present Illness</title>
   <text>Mr. Smith is a 57 year old male presenting with 
    chest pain. He sustained a myocardial infarction 3 years 
    ago, ...
   </text>
</section>

 ...

<section ID="SECT003">
   <code code="10153-2" codeSystem="2.16.840.1.113883.6.1" 
    codeSystemName="LOINC"/>
   <title>Past Medical History</title>
   <text>History of coronary artery disease, as noted
    <linkHtml href="#SECT001">above</linkHtml>.</text>
</section>
```

CDA links do not convey shareable meaning. Shareable semantics are only achieved by the inclusion of CDA entries and their associated formalized relationships. There is no requirement that a receiver render an internal or external link, or the target of an external link.

### &lt;sub&gt; and &lt;sup&gt;

The CDA `<sub>` and `<sup>` elements are used to indicate subscripts and superscripts, respectively.

Receivers are required to interpret these elements when rendering by visually distinguishing subscripted and superscripted characters.

### &lt;br&gt;

The CDA `<br/>` element is used to indicate a hard line break. It differs from the CDA `<paragraph>` element in that the <br/> element has no content. Receivers are required to interpret this element when rendering so as to represent a line break.

### &lt;footnote&gt; and &lt;footnoteRef&gt;

The CDA `<footnote>` element is used to indicate a footnote. The element contains the footnote, inline with the flow of text to which it is applied.

The `<footnoteRef>` element can reference an existing footnote in the same or different CDA Narrative Block of the same document. It can be used when the same footnote is being used multiple times. The value of the footnoteRef.IDREF must be an footnote.ID value in the same document.

Receivers are required to interpret these elements when rendering by visually distinguishing footnoted text. The exact rendition is at the discretion of the recipient, and might include a mark at the location of the footnote with a hyperlink to the footnoted text, a simple demarcation (such as "This is the text \[this is the footnote\] that is being footnoted"), etc.

### &lt;renderMultiMedia&gt;

The CDA `<renderMultiMedia>` element references external multimedia that is integral to a document, and part of the attestable content of the document, and serves to show where the referenced multimedia is to be rendered.

The `<renderMultiMedia>` element has an optional `<caption>`, and contains a required referencedObject attribute (of type XML IDREFS), the values of which must equal the XML ID value(s) of [ObservationMedia](StructureDefinition-ObservationMedia.html) or [RegionOfInterest](StructureDefinition-RegionOfInterest.html) CDA entries within the same document.

Example 7
```xml
<section>
   <code code="8709-8" codeSystem="2.16.840.1.113883.6.1" 
    codeSystemName="LOINC"/>
   <title>Skin exam</title>
   <text>Erythematous rash, palmar surface, left index 
    finger.<renderMultiMedia referencedObject="MM1"/>
   </text>
   <entry>
      <observationMedia classCode="OBS" moodCode="EVN" ID="MM1">
         <id root="2.16.840.1.113883.19.2.1"/>
         <value xsi:type="ED" mediaType="image/jpeg">
            <reference value="left\-hand\-image.jpeg"/>
         </value>
      </observationMedia>
   </entry>
</section>
```

Multimedia that is simply referenced by the document and not an integral part of the document must use `<linkHtml>`.

The expected behavior is that the referenced multimedia should be rendered or referenced at the point of reference. Where a caption is present, it must also be rendered. `<renderMultiMedia>` can either reference a single [ObservationMedia](StructureDefinition-ObservationMedia.html), or one or more [RegionOfInterest](StructureDefinition-RegionOfInterest.html). If `<renderMultiMedia>` references a single ObservationMedia, that ObservationMedia should be rendered or referenced at the point of reference. If `<renderMultiMedia>` references one or more RegionOfInterest, all RegionOfInterests should be rendered or referenced at the point of reference, atop the multimedia they are regions of. If `<renderMultiMedia>` references more than one RegionOfInterest, each RegionOfInterest must be a region on the same multimedia.

### &lt;paragraph&gt;

A CDA `<paragraph>` is similar to the HTML paragraph, which allows blocks of narrative to be broken up into logically consistent structures. A CDA `<paragraph>` element contains an optional caption, which if present must come first before any other character data.

### &lt;list&gt;

A CDA `<list>` is similar to the HTML list. A CDA `<list>` has an optional caption, and contains one or more `<item>` elements. A CDA `<item>` element contains an optional caption, which if present must come first before any other character data. The required listType attribute specifies whether the `<list>` is ordered or unordered (with unordered being the default). Unordered lists are typically rendered with bullets, whereas ordered lists are typically rendered with numbers, although this is not a requirement.

### &lt;table&gt;

The CDA `<table>` is similar to the HTML table. The table markup is for presentation purposes only and, unlike a database table, does not possess meaningful field names.

CDA modifies the strict XHTML table model by removing formatting tags and by setting the content model of cells to be similar to the contents of other elements in the CDA Narrative Block.

The table.border, table.cellspacing, and table.cellpadding attributes are deprecated, because the styleCode attribute (see [styleCode attribute](#stylecode-attribute) provides a more consistent way for senders to suggest rendering characteristics.

### &lt;caption&gt;

The CDA `<caption>` is a label for a paragraph, list, list item, table, or table cell. It can also be used within the `<renderMultiMedia>` element to indicate a label for referenced ObservationMedia and RegionOfInterest entries. A `<caption>` contains plain text and may contain links and footnotes.

### styleCode attribute

The styleCode attribute is used within the CDA Narrative Block to give the instance author the ability to suggest rendering characteristics of the nested character data. Receivers are not required to render documents using the style hints provided and can present stylized text in accordance with their local style conventions.

The value set is drawn from the HL7 styleType vocabulary domain, and has a CWE coding strength.

Table 89: Value set for styleCode (CWE)

<table><tr><th>Code</th><th>Definition</th></tr>
<tr><th colspan="2">Font style (Defines font rendering characteristics.)</th></tr>
<tr><td>Bold</td><td>Render with a bold font.</td></tr>
<tr><td>Underline</td><td>Render with an underlines font.</td></tr>
<tr><td>Italics</td><td>Render italicized.</td></tr>
<tr><td>Emphasis</td><td>Render with some type of emphasis.</td></tr>
<tr><th colspan="2">Table rule style (Defines table cell rendering characteristics.)</th></tr>
<tr><td>Lrule</td><td>Render cell with left-sided rule.</td></tr>
<tr><td>Rrule</td><td>Render cell with right-sided rule.</td></tr>
<tr><td>Toprule</td><td>Render cell with rule on top.</td></tr>
<tr><td>Botrule</td><td>Render cell with rule on bottom.</td></tr>
<tr><th colspan="2">Ordered list style (Defines rendering characteristics for ordered lists.)</th></tr>
<tr><td>Arabic</td><td>List is ordered using Arabic numerals: 1, 2, 3.</td></tr>
<tr><td>LittleRoman</td><td>List is ordered using little Roman numerals: i, ii, iii.</td></tr>
<tr><td>BigRoman</td><td>List is ordered using big Roman numerals: I, II, III.</td></tr>
<tr><td>LittleAlpha</td><td>List is ordered using little alpha characters: a, b, c.</td></tr>
<tr><td>BigAlpha</td><td>List is ordered using big alpha characters: A, B, C.</td></tr>
<tr><th colspan="2">Unordered list style (Defines rendering characteristics for unordered lists.)</th></tr>
<tr><td>Disc</td><td>List bullets are simple solid discs.</td></tr>
<tr><td>Circle</td><td>List bullets are hollow discs.</td></tr>
<tr><td>Square</td><td>List bullets are solid squares.</td></tr>
</table>

Local extensions to the styleType vocabulary domain must follow the following convention: `\[x\]\[A-Za-z\]\[A-Za-z0-9\]\*` (first character is "x", second character is an upper or lower case A-Z, remaining characters are any combination of upper and lower case letters or numbers).

The styleCode attribute can contain multiple values, separated by white space. Where an element containing a styleCode attribute is nested within another element containing a styleCode attribute, the style effects are additive, as in the following example:

Example 8

```xml
<section>
   <text><content styleCode="Bold">This is rendered bold, 
    <content styleCode="Italics">this is rendered bold and 
    italicized,</content> this is rendered bold. </content>
    <content styleCode="Bold Italics">This is also rendered 
    bold and italicized.</content>
   </text>
</section>
```
### Referencing in and out of the narrative block

To summarize the mechanisms for referencing in and out of the CDA Narrative Block:

*   CDA entries can point in to the `<content>` element of the CDA Narrative Block (see [&lt;content&gt;](#content)).
*   The `<linkHtml>` element of the CDA Narrative Block can reference targets that are either internal or external to the document (see [&lt;linkHtml&gt;](#linkhtml)).
*   The `<footnoteRef>` element of the CDA Narrative Block can reference a `<footnote>` element in the same or different CDA Narrative Block of the same document (see [&lt;footnote&gt; and &lt;footnoteRef&gt;](#footnote-and-footnoteref)).
*   The `<renderMultiMedia>` element of the CDA Narrative Block can point out to CDA ObservationMedia and RegionOfInterest entries of the same document (see [&lt;renderMultiMedia&gt;](#rendermultimedia)).

---

// File: input/pagecontent/overview.md

---
# jekyll header
title: Clinical Document Architecture (CDA) 2.0 - Overview
---

### What is the CDA

The HL7 Clinical Document Architecture (CDA) is a document markup standard that specifies the structure and semantics of "clinical documents" for the purpose of exchange. A clinical document is a documentation of clinical observations and services, with the following characteristics:

*   Persistence – A clinical document continues to exist in an unaltered state, for a time period defined by local and regulatory requirements (**NOTE:** There is a distinct scope of persistence for a clinical document, independent of the persistence of any XML-encoded CDA document instance).
*   Stewardship – A clinical document is maintained by an organization entrusted with its care.
*   Potential for authentication - A clinical document is an assemblage of information that is intended to be legally authenticated.
*   Context - A clinical document establishes the default context for its contents.
*   Wholeness - Authentication of a clinical document applies to the whole and does not apply to portions of the document without the full context of the document.
*   Human readability – A clinical document is human readable.

A CDA document is a defined and complete information object that can include text, images, sounds, and other multimedia content.

#### Key aspects of the CDA

Key aspects of the CDA include:

*   CDA documents are encoded in Extensible Markup Language (XML). (**NOTE:** When alternate implementations are feasible, suitable conformance requirements will be issued so that in future the syntax may not be limited to XML.)
*   CDA documents derive their machine processable meaning from the HL7 Reference Information Model (RIM) and use the HL7 Version 3 Data Types.
*   The CDA specification is richly expressive and flexible. Document-level, section-level and entry-level templates can be used to constrain the generic CDA specification (see [The "A" in "CDA"](#the-a-in-cda)).

#### Scope of the CDA

The scope of the CDA is the standardization of clinical documents for exchange.

The data format of clinical documents outside of the exchange context (e.g., the data format used to store clinical documents) is not addressed in this specification.

CDA documents can be transmitted in HL7 messages designed to transfer clinical documents. While the detailed specification for such messages is outside of the scope of the CDA, this specification does impose requirements upon the packaging of CDA documents in HL7 messages.

The CDA does not specify the creation or management of documents, only their exchange markup. While it may be possible to directly use the CDA Schema in a document authoring environment, such use is not the primary purpose of the CDA specification.

Document management is critically interdependent with the CDA specifications, but the specification of document management messages is outside the scope of the CDA. (For more on this, see [Relationship of the CDA to HL7 Messaging Standards](#relationship-of-the-cda-to-hl7-messaging-standards)).

> **NOTE:** Several committees are developing structured document specifications that overlap in part with the CDA specification. The Structured Documents Technical Committee, in collaboration with Publishing and these other committees, is developing a Structured Documents Infrastructure chapter to clarify these relationships which should be available in upcoming editions.

#### Goals and Design Principles

The goals of the CDA are:

*   Give priority to delivery of patient care.
*   Allow cost effective implementation across as wide a spectrum of systems as possible.
*   Support exchange of human-readable documents between users, including those with different levels of technical sophistication.
*   Promote longevity of all information encoded according to this architecture.
*   Enable a wide range of post-exchange processing applications.
*   Be compatible with a wide range of document creation applications.
*   Promote exchange that is independent of the underlying transfer or storage mechanism.
*   Prepare the design reasonably quickly.
*   Enable policy-makers to control their own information requirements without extension to this specification.

A number of design principles follow from consideration of the above goals:

*   This architecture must be compatible with XML and the HL7 RIM.
*   This architecture must be compatible with representations of clinical information arising from other HL7 committees.
*   Technical barriers to use of the architecture should be minimized.
*   The architecture specifies the representation of instances required for exchange.
*   The architecture should impose minimal constraints or requirements on document structure and content required for exchange.
*   The architecture must be scalable to accommodate fine-grained markup such as highly structured text and coded data.
*   Document specifications based on this architecture should accommodate such constraints and requirements as supplied by appropriate professional, commercial, and regulatory agencies.
*   Document specifications for document creation and processing, if intended for exchange, should map to this exchange architecture.
*   CDA documents must be human readable using widely-available and commonly-deployed XML-aware browsers and print drivers and a generic CDA style sheet written in a standard style sheet language.
*   Use open standards.

### General CDA Concepts

#### Major Components of a CDA Document

This section serves as a high-level introduction to the major components of a CDA document, all of which are described again and in greater detail later on. The intent here is to familiarize the reader with the high-level concepts to facilitate an understanding of the sections that follow.

Major components of a prototypic CDA document are shown in the following skeletal example. (Note that many required components are missing to simplify the example. See [Examples](artifacts.html#example-example-instances) for a detailed conformant example).

A CDA document is wrapped by the `<ClinicalDocument>` element, and contains a header and a body. The header lies between the `<ClinicalDocument>` and the `<structuredBody>` elements, and identifies and classifies the document and provides information on authentication, the encounter, the patient, and the involved providers.

The body contains the clinical report, and can be either an unstructured blob, or can be comprised of structured markup. The example shows a structured body, which is wrapped by the `<structuredBody>` element, and which is divided up into recursively nestable document sections.

A CDA document section is wrapped by the `<section>` element. Each section can contain a single narrative block (see [Section Narrative Block](narrative.html)), and any number of CDA entries and external references.

The CDA narrative block is wrapped by the `<text>` element within the `<section>` element, and must contain the human readable content to be rendered. See also [Human Readability and Rendering CDA Documents](#human-readability-and-rendering-cda-documents) and [CDA Conformance](#cda-conformance) for principles governing the representation of the narrative block, and conformance requirements on the part of originators when populating the block, and recipients when rendering it.

Within a document section, the narrative block represents content to be rendered, whereas CDA entries represent structured content provided for further computer processing (e.g. decision support applications). CDA entries typically encode content present in the narrative block of the same section. The example shows two `<observation>` CDA entries, and a `<substanceAdministration>` entry containing a nested `<supply>` entry, although several other CDA entries are defined.

CDA entries can nest and they can reference external objects. CDA external references always occur within the context of a CDA entry. External references refer to content that exists outside this CDA document - such as some other image, some other procedure, or some other observation (which is wrapped by the `<externalObservation>` element). Externally referenced material is not covered by the authentication of the document referencing it.

Example 1
```xml
<ClinicalDocument>
  ... CDA Header ...
  <structuredBody>
    <section>
      <text>...</text>
      <observation>...</observation>
      <substanceAdministration>
        <supply>...</supply>
      </substanceAdministration>
      <observation>
        <externalObservation>...
        </externalObservation>
      </observation>
    </section>
    <section>
        <section>...</section>
    </section>
  </structuredBody>
</ClinicalDocument>
```

#### The "A" in "CDA"

The notion of CDA "levels" in CDA, Release One anticipated a hierarchical set of XML DTDs or XML Schemas to achieve the goals enumerated above (see [Goals and Design Principles](#goals-and-design-principles)). This hierarchy formed an "architecture", hence the "A" in "CDA".

While the notion of levels in CDA, Release Two remains constant, the approach to representing the hierarchies has changed. The current specification consists of a single CDA XML Schema, and the architecture arises from the ability to apply one or more of a hierarchical set of HL7 Templates, which serve to constrain the richness and flexibility of CDA.

> **NOTE:** The CDA can be constrained by mechanisms defined in HL7 V3 Refinement and Localization. HL7 technical formalisms (e.g. HL7 Template specifications, HL7 Model Interchange Format) to constrain CDA are still in development at the time of writing this standard.  
>   
> The RIM's InfrastructureRoot class contains an attribute, templateId, which is available for use in CDA. Thus, while HL7 Templates are in flux at this time, CDA provides a mechanism to reference a template or implementation guide that has been assigned a unique identifier. Until there is a formal HL7 Template specification, there is no standardized process to test conformance against referenced templates.  
>   
> There is no requirement that CDA must be constrained. Implementations that use structured data elements to drive automated processes will typically require that they be either: (1) constrained by an appropriately refined model or other HL7 approved constraint language; or (2) comply with a detailed implementation guide that details the manner in which structured elements are to be represented and their intended interpretation to a level sufficient to ensure a degree of clinical safety that is appropriate to the use case that it is designed to address.

There are many kinds of HL7 Templates that might be created. Among them, two are particularly relevant for clinical documents: (1) those that constrain the document sections based on the type of document (section-level templates); (2) those that constrain the entries within document sections (entry-level templates). In fact, a comparison can be made between the prior notion of CDA levels and the current notion of CDA with these two kinds of HL7 Templates:

Table 1: Evolution of CDA "levels" from CDA, Release One to CDA, Release Two

|CDA, Release One|CDA, Release Two|
|---|------|
|CDA Level One|The unconstrained CDA specification.|
|CDA Level Two|The CDA specification with section-level templates applied.|
|CDA Level Three|The CDA specification with entry-level (and optionally section-level) templates applied.|
{:.grid}

An illustration of one possible hierarchy of CDA plus HL7 Templates is shown here:

Example 2
*   CDA Schema
    *   CDA Schema :: Progress Note section-level template applied.
        *   CDA Schema :: Progress Note section-level and Vital Signs entry-level template applied.
            *   CDA Schema :: Endocrinology Progress Note section-level and Vital Signs entry-level template applied.
            *   CDA Schema :: Progress Note section-level and ICU Vital Signs entry-level template applied.
    *   CDA Schema :: Cardiology Progress Note section-level template applied
        *   CDA Schema :: Cardiology Progress Note section-level and Cardiac Exam entry-level template applied.
    *   CDA Schema :: Endocrinology Progress Note section-level template applied.
        *   CDA Schema :: Endocrinology Progress Note section-level and Vital Signs entry-level template applied.


#### Human Readability and Rendering CDA Documents

The CDA requirement for human readability guarantees that a receiver of a CDA document can algorithmically display the clinical content of the note on a standard Web browser. CDA, Release Two, with its blend of narrative and CDA entries, presents new challenges to this requirement.

Among the requirements affecting the design of CDA Release 2 are the following:

*   There must be a deterministic way for a recipient of an arbitrary CDA document to render the attested content.
*   Human readability shall not require a sender to transmit a special style sheet along with a CDA document. It must be possible to render all CDA documents with a single style sheet and general-market display tools.
*   Human readability applies to the authenticated content. There may be additional information conveyed in the document that is there primarily for machine processing that is not authenticated and need not be rendered.
*   When structured content is derived from narrative, there must be a mechanism to describe the process (e.g. by author, by human coder, by natural language processing algorithm, by specific software) by which machine-processable portions were derived from a block of narrative.
*   When narrative is derived from structured content, there must be a mechanism to identify the process by which narrative was generated from structured data.

These principles and requirements have led to the current approach, where the material to be rendered is placed into the Section.text field (see [Section Narrative Block](narrative.html)). The content model of this field is specially hand crafted to meet the above requirements, and corresponds closely to the content model of sections in CDA, Release One. Structured observations can reference narrative content in the Section.text field. Multimedia observations are encoded outside the Section.text field, and the `<renderMultiMedia>` tag within the Section.text field provides an outgoing pointer that indicates where the referenced multimedia should be rendered.

#### XML Markup of CDA Documents

XML markup of CDA documents is prescribed in this specification. CDA instances are valid against the CDA Schema and may be subject to additional validation (see [CDA Conformance](#cda-conformance)). There is no prohibition against multiple schema languages (e.g., W3C, DTD, RELAXNG), as long as conforming instances are compatible.

Design Principles of the CDA Schema include:

*   **General Requirements:** The design of the CDA Schema follows the more general requirements for CDA (see [Goals and Design Principles](#goals-and-design-principles)).
*   **CDA Schema and V3 Implementation Technology Specification (ITS) :** The CDA Schema will follow the general V3 XML ITS.
*   **RIM Mapping:** The CDA Schema describes the style of XML markup of CDA instances for the purpose of exchange. It cannot be understood outside the context of this defining specification. At the same time, the CDA Schema is useful on its own for implementation purposes even though it is not intended to replicate or take the place of the R-MIM and HD. The CDA Schema, then, is not, in and of itself, an adequate map between conforming instance and the HL7 RIM. Semantic interoperability of CDA instances requires use and knowledge of the CDA Schema, R-MIM and HD as well as the corresponding RIM.
*   **Document Analysis:** The CDA Schema and conformant instances should adhere to the requirements of document analysis in derivation of the content model.
    
    **NOTE:** Document analysis is a process that might be thought of as the document equivalent of a use case. Document analysis looks at a single instance or class of documents and analyzes their structure and content, often representing this as a tree structure "elm" notation. Document analysis also looks at the business rules for the lifecycle of that document or document class. Traditionally, document analysis determines the content model and overall structure and style of XML.  
      
    Document analysis is an iterative step in content model derivation -- the "bottom up" approach to complement the "top down" derivation from the RIM. This will ensure that schemas and instances are not only RIM-derived, but represent recognizable artifacts in a simple manner.
    
*   **Forward and Backward Compatibility:** The CDA Schema should adhere to the requirements for forward and backward compatibility. (See [Backwards and Forwards Compatibility](#backwards-and-forwards-compatibility))
*   **Naming:** While XML markup, by definition, is for machine processing, it should be optimized for human review, debug, and design. The CDA Schema is not "self-documenting", but meaning should be clear from tag name and documentation (e.g., mapping to RIM). The human-language sense of a tag name should not be counterintuitive.
*   **Vocabulary:** Vocabulary can be enumerated within the CDA Schema or in an external, referenced source. It is preferable to enumerate it when the vocabulary terms are both limited (not too large in number) and stable (not subject to change between ballot cycles). Where vocabulary is either too large or is subject to change, it is preferable to maintain it external to the CDA Schema and incorporate it by reference. In these cases, XML schema validation will not suffice for conformance.

#### Security, Confidentiality, and Data Integrity

Application systems sending and receiving CDA documents are responsible for meeting all legal requirements for document authentication, confidentiality, and retention. For communications over public media, cryptographic techniques for source/recipient authentication and secure transport of encapsulated documents may be required, and should be addressed with commercially available tools outside the scope of this standard.

The CDA does provide confidentiality status information to aid application systems in managing access to sensitive data. Confidentiality status may apply to the entire document or to specified segments of the document.

#### Relationship of the CDA to HL7 Messaging Standards

A CDA document is a defined and complete information object that can exist outside of a messaging context and/or can be a payload within an HL7 message. Thus, the CDA complements HL7 messaging specifications.

Clinical documents can be revised, and they can be appended to existing documents. Ideally, an updated document would declare itself as obsolete, and would contain an explicit pointer to a more recent version. This would lessen the chances of a healthcare provider basing treatment decisions on erroneous or incomplete data.

In practice, however, it is impossible to guarantee an explicit forward pointer from an outdated version to the newer version. Without a process that tracks the chain of custody of clinical documents and all of their copies, there can be no way to guarantee that a clinical document being viewed has not been subsequently revised.

To minimize the risk of viewing superseded information, there is a critical interdependence between clinical documents and document management systems. If CDA documents are viewed outside the context of a document management system, it cannot be known with certainty whether or not the viewed document has been revised. HL7 messages that carry CDA documents (such as the MDM messages in HL7 V2.x and the HL7 V3 Medical Records messages) convey critical contextual information that ensures accurate viewing of clinical data.

### CDA Conformance

> **NOTE:** See HL7 V3 Refinement and Localization for a complete discussion of V3 conformance.

A conformant CDA document is one that at a minimum validates against the CDA Schema, and that restricts its use of coded vocabulary to values allowable within the specified vocabulary domains. However a computer cannot validate every aspect of conformance. The focus of this section is to highlight these aspects of CDA that cannot be machine validated - particularly those aspects related to the CDA human readability requirements.

A document originator is an application role that creates a CDA document. CDA documents can be created via transformation from some other format, as a direct output of an authoring application, etc. The document originator often is responsible for communicating with a persistent storage location, often using HL7 V2 MDM or HL7 V3 Medical Records messages. The document originator is responsible for ensuring that generated CDA documents are fully conformant to this specification.

A document recipient is an application role that receives status updates and documents from a document originator or document management system. The document recipient is responsible for ensuring that received CDA documents are rendered in accordance to this specification.

Because CDA is an exchange standard and may not represent the original form of a document, there are no persistent storage requirements for CDA documents defined in this standard. However, as noted above (see [Relationship of the CDA to HL7 Messaging Standards](#relationship-of-the-cda-to-hl7-messaging-standards)), document management is critically interdependent with the CDA specification. The custodian identified in the CDA header is the participant charged with maintaining the original document, which may be in some form other than CDA.

#### Recipient Responsibilities

*   **Assume default values where they are defined in this specification, and where the instance does not contain a value** : Where CDA defines default values, the recipient must assume these values in the event that no value is contained in a CDA instance. (**NOTE:** Default values are indicated in this implementation guide by a fixed value on an element or attribute with a minimum cardinality of 0.)
*   **Parse and interpret the complete CDA header** : A recipient of a CDA document must be able to parse and interpret the complete CDA header. Because applications may choose to display demographic and other CDA header data drawn from a central master directory, the rendering of the CDA document header is at the discretion of the recipient. In addition, rendering of the CDA document header can be dependent on local business practice and context of use (e.g. electronic health record, de-identified scenario). Where a document originator wants to suggest a rendering, they can include one or more XML style sheets with an exchanged CDA document. Use of these style sheets is at the discretion of the recipient.
*   **Parse and interpret the CDA body sufficiently to be able to render it** : A recipient of a CDA document must be able to parse and interpret the body of a CDA document sufficiently to be able to render it, using the following rendering rules:
    *   If the CDA Body is non-XML, it will need to be rendered with a software tool that recognizes its particular MIME media type.
    *   If the CDA Body is structured, the label of a section, as conveyed in the Section.title component, must be rendered. The absence of the Section.title component signifies an unlabeled section.
    *   If the CDA Body is structured, the contents of the Section.text field must rendered per the rules defined in [Section Narrative Block](narrative.html).
*   A recipient of a CDA document is not required to parse and interpret the complete set of CDA entries contained within the CDA body. Within a local implementation, trading partners may ascribe additional recipient responsibilities to parse and interpret various entries.
*   A recipient of a CDA document is not required to validate a CDA document against referenced templates. Within a local implementation, trading partners may ascribe additional recipient responsibilities for template validation.

#### Originator Responsibilities

*   **Properly construct CDA Narrative Blocks** : An originator of a CDA document must ensure that the attested portion of the document body is structured such that a recipient, adhering to the recipient responsibilities above, will correctly render the document. This includes:
    *   If the CDA Body is structured, the label of a section must be conveyed in the Section.title component. The absence of the Section.title component signifies an unlabeled section.
    *   If the CDA Body is structured, the attested narrative contents of a section must be placed in the Section.text field, regardless of whether information is also conveyed in CDA entries. Attested multimedia referenced in the narrative must be added as ObservationMedia and/or RegionOfInterest CDA entries.
    *   If the CDA Body is structured, the contents of the Section.text field must be created per the rules defined in [Section Narrative Block](narrative.html)
*   An originator of a CDA document is not required to fully encode all narrative into CDA entries within the CDA body. Within a local implementation, trading partners may ascribe additional originator responsibilities to create various entries.

### CDA Extensibility

Locally-defined markup may be used when local semantics have no corresponding representation in the CDA specification. CDA seeks to standardize the highest level of shared meaning while providing a clean and standard mechanism for tagging meaning that is not shared. In order to support local extensibility requirements, it is permitted to include additional XML elements and attributes that are not included in the CDA schema. These extensions should not change the meaning of any of the standard data items, and receivers must be able to safely ignore these elements. Document recipients must be able to faithfully render the CDA document while ignoring extensions.

Extensions may be included in the instance in a namespace other than the HL7v3 namespace, but must not be included within an element of type ED (e.g., `<text>` within `<procedure>`) since the contents of an ED datatype within the conformant document may be in a different namespace. Since all conformant content (outside of elements of type ED) is in the HL7 namespace, the sender can put any extension content into a foreign namespace (any namespace other than the HL7 namespace). Receiving systems must not report an error if such extensions are present.

When these extension mechanisms mark up content of general relevance, HL7 encourages users to get their requirements formalized in a subsequent version of the standard so as to maximize the use of shared semantics.

### Backwards and Forwards Compatibility

The basic model of CDA, Release Two is essentially unchanged. A CDA document has a header and a body. The body contains nested sections. These sections can be coded using standard vocabularies, and can contain CDA entries. The main evolutionary steps in CDA, Release Two are that both header and body are fully RIM-derived, and there is a much richer assortment of entries to use within CDA sections. CDA, Release Two enables clinical content to be formally expressed to the extent that it is modeled in the RIM.

This section describes the types of changes that can be introduced to a new release of CDA and CDA principles of forward and backward compatibility. In general, changes can include the addition of new components; a renaming of components (including XML element and attribute names in the CDA Schema); a deprecation of components defined in a prior release; a change in cardinality of a component (either to tighten or to loosen); or a change in a vocabulary domain of a component (to add or change values, to change between CWE and CNE). The following set of guiding principles defines how CDA can continue to evolve, while protecting the investment implementers have made through their adoption of earlier releases.

*   **Documentation** : A new release of CDA will enumerate all substantive changes from the previous release.
*   **Attested content**: Attested, human readable content must be completely loss-less across CDA releases. Backwards and forwards compatibility on the attested content will be supported such that it will be possible for an automated transformation script to translate the human readable content in both directions.
*   **New components** : A new release of CDA can introduce new components. To preserve roundtrip translation capability, a translation from the new release to a prior release must represent the new components as extensions (e.g. local markup or local namespace).
*   **Renaming** : A new release of CDA can rename components (including XML element and attribute names). Where this occurs, a mapping table will list all changes. Renaming will adhere to the naming convention articulated above (see [XML Markup of CDA Documents](#xml-markup-of-cda-documents)).
*   **Deprecated components** : A new release of CDA can deprecate components defined in a prior release. Deprecated components will be removed from the subsequent release of the standard, and therefore their use is not recommended.
*   **Cardinality** : A new release of CDA can change the cardinality of a component. Where an optional component becomes required, a translation between releases requires a dummy value or a null value.
*   **Changes to vocabulary domain** : A new release of CDA can change the vocabulary domain of a component. Where this occurs, a mapping table will list changes.
*   **Change within CNE** : Where a value in a CNE domain in a prior release is no longer present or has been renamed, a mapping table will indicate what the current value should be.
*   **Change within CWE** : When a CWE domain is expanded, users should begin using the new codes in addition to any equivalent local codes they may already be using.
*   **Change from CWE to CNE** : To preserve roundtrip translation capability, a translation between releases must represent unrecognized components as extensions (e.g. local markup or local namespace). Ideally these situations will surface during a ballot cycle, allowing the CNE domain to be sufficiently inclusive.

These guiding principles have lead to the current approach, defined in this Release Two of the CDA standard. The goal is to ensure that the documents created using Release One can be transformed into minimally compliant Release Two instances and that Release Two documents received can be down-translated to Release One instances using automated means (transformations) with no loss of attested, human-readable content and known limitation on loss of universal processing semantics.

### CDA Context

CDA context is set in the CDA header and applies to the entire document. Context can be overridden at the level of the body, section, and/or CDA entry.

#### Overview of CDA Context

A document, in a sense, is a contextual wrapper for its contents. Assertions in the document header are typically applicable to statements made in the body of the document, unless overridden. For instance, the patient identified in the header is assumed to be the subject of observations described in the body of the document, unless a different subject is explicitly stated, or the author identified in the header is assumed to be the author of the entire document, unless a different author is explicitly identified on a section. The objective of the CDA context rules are to make these practices explicit with relationship to the RIM, such that a computer will understand the context of a portion of a document the same way that a human interprets it.

At the same time, there is no guarantee that machine processing will identify a mistaken application of contextual rules. If a physician records an "outside diagnosis" in narrative but does not nullify the "informant" context, machine processing will not identify the switch in attribution. This is a special case illustrating the limits of automated validation of electronic records and would apply regardless of the context inheritance mechanism. In other words, from some errors of encoding, there is no recovery other than human review.

CDA's approach to context, and the propagation of that context to nested document components, follows these design principles:

*   CDA uses the RIM context mechanism (contextControlCode for Participations; contextConductionInd for ActRelationships), and assigns fixed values to these attributes to accomplish the design objectives below, thus constraining the RIM context model. CDA extends the context propagation property to designated attributes of the CDA Header, which also propagate through any ActRelationship for which contextConductionInd="true".
*   The CDA Header sets context for the entire document. A propagating value specified in the document header holds true throughout the document, unless explicitly overridden. This principal applies to both Participations and to designated attributes of the CDA Header. Contextual header components (i.e., those that have propagating values) include:
    *   Author
    *   Confidentiality
    *   Data enterer
    *   Human language
    *   Informant
    *   Legal authenticator
    *   Participant
    *   Record target
*   Context components that can be overridden at the level of the document body include:
    *   Confidentiality
    *   Human language
*   Context components that can be overridden at the level of a document section include:
    *   Author
    *   Confidentiality
    *   Human language
    *   Informant
    *   Subject
*   Context components that can be overridden at the level of a CDA entry include:
    *   Author
    *   Human language
    *   Informant
    *   Participant
    *   Subject
*   Context propagates from outer tags to nested tags. Context that is specified on an outer tag holds true for all nested tags, unless overridden on a nested tag. Context specified on a tag within the CDA body always overrides context propagated from an outer tag. For instance, the specification of authorship at a document section level overrides all authorship propagated from outer tags.
*   Context is sometimes known precisely, and is sometimes unknown, such as in the case where a document is comprised of a large unparsed narrative block that potentially includes statements that contradict outer context. Because CDA context always propagates unless overridden, the representation of unknown context is achieved by overriding with a null value.

#### Technical Aspects of CDA Context

The RIM defines the "context" of an act as those participants of the act that can be propagated to nested acts. In the RIM, whether or not contextual participants do propagate to nested acts depends on whether or not the intervening act relationship between parent and child act allows for conduction of context. The explicit representation of context, and whether or not the context on an act can propagate to nested acts, is expressed via the RIM attributes Participation.contextControlCode and ActRelationship.contextConductionInd. CDA constrains the general RIM context mechanism such that context always overrides and propagates, as shown in the following table.

| RIM attribute           | Cardinality         | Conformance           | Fixed Value         |
|-------------------------|---------------------|-----------------------|---------------------|
| Participation.contextControlCode    | 1..1    | Mandatory (NULL values not permitted)   | "OP" (overriding, propagating)   |
| ActRelationship.contextConductionInd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 1..1    | Mandatory (NULL values not permitted) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| "true"*       |
	
\* The one exception to this is entryRelationship.contextConductionInd, which is defaulted to "true", but can be changed to "false"

Where the context of a nested component is unknown, the propagated context must be overridden with a null-valued component, as shown in the following table.

| Context | Null value representation  | |
|---|---|--|
| Author| AssignedAuthor.id = NULL |No playing entity; No scoping entity. 
| Confidentiality &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| confidentialityCode = NULL
| Human language &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| languageCode = NULL
| Informant | AssignedEntity.id = NULL |No playing entity;  No scoping entity. 
| Participant | ParticipantRole.id = NULL |No playing entity;No scoping entity. 

The following exhibit illustrates the CDA context model. ClinicalDocument has an author participant, a confidentialityCode, and a languageCode, all of which will propagate to nested acts. The component act relationship going from ClinicalDocument to bodyChoice has contextConductionInd fixed as "true", thus allowing for the propagation of context. The bodyChoice classes, NonXMLBody and StructuredBody, contain a confidentialityCode and languageCode which can be used to override the value specified in the header. The component act relationship going from StructuredBody to Section has contextConductionInd fixed at "true", thus the context on StructuredBody will propagate through to Section. Section can override confidentialityCode, languageCode, and author. A null value for the Section's author participant indicates that the author for that particular section is unknown.

<a href="L-ContextExample.gif"><img src="L-ContextExample.gif" alt="Context Conduction Example" style="max-width:100%" /></a>

Because context is always overriding and propagating, one can compute the context of a given node by looking for the most proximate assertion. The following example is a sample XPath expression that can be used to identify the `<author>` context of a section or entry:

> `(ancestor-or-self::*/author)[position()=last()]`



---

// File: input/pagecontent/profiles.md

---
# jekyll header
title: Clinical Document Architecture (CDA) 2.0 - Profiles
---

---

// File: input/pagecontent/terminology.md


This page lists all the ValueSets and CodeSystems used by CDA

### Value Sets

These value sets are used in this implementation guide:

{% include valueset-ref-all-table-generator.html %}

### Code Systems

These code systems are used in this implementation guide:

{% include codesystem-ref-all-table-generator.html %}

---

// File: input/data/source.yml

##############################################################################
# mapping of valueset source name to the base_URL and link to a user friendly view.
# this is used by the `input/includes/valueset-ref-all-table-generator.html`
# to generate the valueset reference table.
##############################################################################
'http://hl7.org/fhir/':
  - FHIR
  - '{{site.data.fhir.path}}valueset-{{stem_URL}}.html'
'http://terminology.hl7.org/':
  - THO
  - 'http://terminology.hl7.org/ValueSet/{{stem_URL}}'
'http://hl7.org/cda/stds/core/':
  - CDA
  - 'ValueSet-{{stem_URL}}.html'

---

