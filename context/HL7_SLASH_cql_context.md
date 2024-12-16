File: repos/HL7_SLASH_cql/input/pages/00-executivesummary.md


In support of the United States’ national objectives for healthcare reform, the Office of the National Coordinator for Health Information Technology (ONC) Standards and Interoperability (S&I) Framework has sponsored the development of harmonized interoperability specifications. These specifications are designed to support national health initiatives and healthcare priorities, including Meaningful Use, the Nationwide Health Information Network, and the ongoing mission to improve population health.

The nation is reaching a critical mass of electronic health record systems (EHRs) that comply with data and vocabulary standards. Providers seeking to meaningfully use EHRs face a variety of challenging tasks. Those tasks include assessing needs, selecting and negotiating with a system vendor or reseller, implementing project management, and instituting workflow changes to improve clinical performance, control costs, and ultimately, improve outcomes. Additionally, many providers face the challenge of integration and interoperation with disparate systems. Many institutions use their own proprietary vocabularies and data models. Though this may offer some internal flexibility, it comes with a high, often hidden, long term maintenance cost.

In support of this wide deployment of EHRs, there is an opportunity to implement a learning health system that includes clinical quality measurement and improvement aspects and provides a broad range of benefits that can contribute towards improved health of individuals and the population as a whole (refer to “Digital Infrastructure for the Learning Health System: The Foundation for Continuous Improvement in Health and Health Care: Workshop Series Summary”).

The S&I Framework Clinical Quality Framework Initiative (CQF) is developing a foundational specification, reusing much of the work currently done in health quality standardization, to enable the structuring and encoding of quality content for use as “knowledge artifacts.” These artifacts can be used in support of many areas of the healthcare system, including quality and utilization measurement, disease outbreak detection, comparative effectiveness analysis, evaluation of drug treatment efficacy, monitoring health trends, and other public health, research, and information sharing across the continuum of care. Although the scope of this project focuses on quality knowledge and decision support, potential uses for CQL are not limited to these areas. For example, the CQL grammar can be used to express formal information extraction and transformation rules for converting and deriving data as it is moved from one representation or use to another.

One key benefit of this proposed approach is the definition of a “lingua franca” for the exchange of quality knowledge and artifacts. Rather than having an unscalable network of point-to-point communication channels, each with its own set of transformations, different organizations will only need to transform their content to a CQF-compatible format to communicate effectively with any other point in the network of providers that comprises today’s healthcare system. If the models and vocabularies are rich enough, some quality vendors may opt to use CQF as an internal specification in the future.

This specification is developed in support of the CQF Artifact Sharing Use Case and is intended to assist implementers in the development of clinical quality knowledge artifacts for both the decision support and quality measurement domains. The approach adopted in this specification is designed to be flexible and reusable, and to provide a baseline for health quality vendors and implementers of systems that create and use knowledge artifacts to improve the health of individuals and the population as a whole.



---

File: repos/HL7_SLASH_cql/input/pages/01-introduction.md


The Clinical Quality Language Specification[^1] defines a representation for the expression of clinical knowledge that can be used within both the Clinical Decision Support (CDS) and Clinical Quality Measurement (CQM) domains. Although several standards exist for the expression of clinical quality logic, these standards are not widely adopted and present various barriers to point-to-point sharing of clinical knowledge artifacts such as lack of tooling, complexity of implementation, or insufficient expressivity.[^2]

Rather than attempt to address these shortcomings in one of the existing standards, this specification provides a solution to enable shared understanding of clinical knowledge by defining a syntax-independent, canonical representation of logic that can be used to express the knowledge in any given artifact, and point-to-point sharing by defining a serialization for that representation.

The canonical representation, the Expression Logical Model (ELM)[^3], is informed conceptually by the requirements of the clinical quality domains of measurement and improvement, and technically by compiler design best practices. The resulting canonical representation provides a basis for sharing logic in a way that is at once verifiable, computable, and can serve as the input to language processing applications such as translation, tooling, or even execution engines.

In addition, this specification introduces a high-level, domain-specific language, Clinical Quality Language (CQL), focused on clinical quality and targeted at measure and decision support artifact authors. This high-level syntax can then be rendered in the canonical representation provided by ELM.

[^1]: Note that CQL is unrelated to the Cassandra Query Language (see: [http://cassandra.apache.org/doc/latest/cql/](http://cassandra.apache.org/doc/latest/cql/)).

[^2]: As of the time of this publication, Clinical Quality Language has been adopted by the Centers for Medicare and Medicaid Services (CMS) for use in distributing electronic Clinical Quality Measure (eCQM) specifications, and is being investigated by multiple organizations for use in the representation and sharing of decision support. In addition, the language has been implemented in multiple commercial products and open source projects. See the [Reference Implementations](10-c-referenceimplementations.html) topic for more information on the adoption of Clinical Quality Language.

[^3]: Note that ELM is unrelated to the similarly named _elm_ programming language (see [http://elm-lang.org](http://elm-lang.org)).

### Background

Clinical Decision Support and Clinical Quality Measurement are closely related, share many common requirements, and both support improving healthcare quality. However, the standards used for the electronic representation of CDS and CQM artifacts have not been developed in consideration of each other, and the domains use different approaches to the representation of patient data and computable expression logic. The first step in enabling a harmonization of these approaches is clearly identifying the various components involved in the specification of quality artifacts, and then establishing as a principle the notion that they should be treated independently. Broadly, the components of an artifact involve specifying:

* Metadata – Information about the artifact such as its identifier and version, what health topics it covers, supporting evidence, related artifacts, etc.
* Clinical Information – The structure and content of the clinical data involved in the artifact
* Expression Logic – The actual knowledge and reasoning being communicated by the artifact

Considering each of these components separately, the next step involves identifying the relationship of the current specifications to each component, as shown in the following table:

<!-- NOTE: This table is expressed in HTML because it uses a rowspan which is not supported in markdown tables -->
<a name="table-1-a"></a>

<table class="grid table table-striped">
  <thead>
    <tr>
      <th> </th>
      <th>Model Type</th>
      <th>Quality Information</th>
      <th>Computable Expression Logic</th>
      <th>Metadata</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>Clinical Decision Support (CDS)</em></td>
      <td><a href="#approach">Physical and Logical</a></td>
      <td><a href="https://www.hl7.org/implement/standards/product_brief.cfm?product_id=338">Virtual Medical Record (vMR)</a></td>
      <td><a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=337">CDS Knowledge Artifact Specification</a></td>
      <td><a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=337">CDS Knowledge Artifact Specification</a> / <a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=12">Decision Support Service</a></td>
    </tr>
    <tr>
      <td rowspan="2"><em>Electronic Clinical Quality Measurement (eCQM)</em></td>
      <td><a href="#approach">Physical</a></td>
      <td><a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=35">Quality Reporting Document Architecture (QRDA)</a></td>
      <td><a href="#health-quality-measure-format-hqmf">Health Quality Measure Format (HQMF)</a></td>
      <td><a href="#health-quality-measure-format-hqmf">Health Quality Measure Format (HQMF)</a></td>
    </tr>
    <tr>
      <td><a href="#approach">Logical</a></td>
      <td><a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=346">Quality Data Model (QDM)</a></td>
      <td><a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=346">Quality Data Model (QDM)</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

Table 1‑A - Relationship of the current specifications to each component

The discrepancy shown here between standards used in the different domains introduces burdens on both vendors and providers in electronic healthcare quality domains, including:

* Inability to share logic between CDS and CQM artifacts, even though large portions of the logic involved represent the same conceptual knowledge
* Duplicated effort in the interpretation, integration, and execution of CDS and CQM artifacts
* Duplicated effort in the mapping of clinical information from vendor and provider systems to the different CDS and CQM artifacts

Using the framework of metadata, data model, and expression logic, the following diagram depicts the overall target specification areas involved in clinical quality artifact representation:

<a name="figure-1-a"></a>
<div>
<img src="assets/images/image2.jpeg" alt="CQF Value Statement Pic 20140410.jpg" width=720 height=400/>
</div>

Figure 1‑A - The overall target specification areas involved in clinical quality artifact representation

Following this overall structure, this specification focuses on the common representation of expression logic that CQM and CDS-specific artifact standards can then reference. Separate specifications address metadata and data model. A harmonized data model specification is being developed for use with quality improvement applications called Quality Improvement Core (QI-Core), an HL7 FHIR implementation guide. The QI-Core profiles include a mapping from QDM to QI-Core for the use of FHIR-based data models for quality improvement use cases. The mappings are available at [QI-Core Implementation Guide - QDM -> QI-Core Mapping](http://hl7.org/fhir/us/qicore/qdm-to-qicore.html).

In addition, this specification is designed to be data model independent, meaning that CQL and ELM have no explicit dependencies on any aspect of any particular data model. Rather, the specification allows for any data model to be used, so long as a suitable description of that data model is supplied. Chapter 7 of this specification discusses how that description is supplied, and what facilities an implementation must support in order to enable complete data model independence of CQL and ELM.

### Clinical Quality Framework Initiative

The Clinical Quality Framework (CQF) was initially a collaborative community of participants from the public and private sectors, convened in 2013 by the Centers for Medicare & Medicaid Services (CMS) and the U.S. Office of the National Coordinator (ONC), focused on identifying, defining, and harmonizing standards and specifications that promote integration and reuse between Clinical Decision Support (CDS) and Clinical Quality Measurement (CQM). The [Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical+Quality+Framework) effort transitioned to HL7's Clinical Quality Information (CQI) and Clinical Decision Support (CDS) Work Groups in 2016. The HL7 CDS Work Group maintains this specification, co-sponsored by the CQI Work Group.

### Approach

As discussed in [Section 1](#background), one key principle underlying the current harmonization efforts is the separation of responsibilities within an artifact into _metadata_, _clinical information_, and _expression logic_. Focusing on the expression logic component and identifying the requirements common to both quality measurement and decision support, the Clinical Decision Support HL7 Work Group produced a harmonized conceptual requirements document: _HL7 Domain Analysis Model: Harmonization of Health Quality Artifact Reasoning and Expression Logic._ To view this document, refer to the [References](11-d-references.html) section. These requirements form the basis for the reasoning capabilities that this specification provides.

Building on those conceptual requirements, this specification defines the logical and physical layers necessary to achieve the goal of a unified specification for expression logic for use by both the clinical quality and decision support domains.

Broadly, this specification can be viewed from three perspectives:

* Author – The author perspective is concerned with clearly and correctly communicating and interpreting the semantics defined at the conceptual level, from a human perspective.
* Logical – The logical perspective is concerned with representing the semantics of expressions in the simplest complete way.
* Physical – The physical perspective is concerned with clearly and correctly communicating or interpreting the semantics defined at the logical level, from a machine perspective.

In other words, the logical level of the specification can be thought of as a complete bi-directional mapping between the author and physical levels. The various components involved in the specification are then concerned with ensuring that semantics can be clearly communicated through each of these levels.

#### Author Perspective

At the highest level, the author perspective is concerned with the human-readable description of clinical quality logic. This level is represented within this specification as a high-level syntax called Clinical Quality Language (CQL). CQL is a domain-specific language for clinical quality and is intended to be usable by clinical domain experts to both author and read clinical knowledge.

The author perspective is informed conceptually by the Quality Data Model (QDM), the current conceptual representation of electronic clinical quality measures, and so the language being used is informed by the QDM-based logic. This heritage is intended to provide familiarity and continuity for authors coming from the quality domain.

#### Logical Perspective

The logical perspective of the specification is concerned with complete and accurate representation of the semantics involved in the expression of quality logic, independent of the syntax in which that logic is rendered.

This perspective defines a Unified Modeling Language (UML) model called the Expression Logical Model (ELM) that defines a canonical representation of expression logic. This approach is intended to simplify implementation and machine processing by focusing on the content of an expression, rather than the syntax used to render it. The approach is based on and motivated by the concept of an Abstract Syntax Tree from traditional compiler implementation. The following diagram depicts the steps performed by a traditional compiler:

<a name="figure-1-b"></a>
<div>
<img src="assets/images/image3-1.png" alt="assets/images/image3-1" width="626" height="430"/>
</div>

Figure 1‑B - The steps performed by a traditional compiler

As shown here, the process begins with lexical analysis, turning the raw CQL text into a stream of tokens according to the lexical rules of the language. In this case, the stream of tokens `x`, `+`, `y`, `*`, `z`. The next step is parsing, which operates on the stream of tokens to produce an Abstract Syntax Tree or AST, that is a representation of the statement according to the grammar rules of the language. The next step, depicted by the next tree, is semantic analysis, or the process of verifying the "meaning" of the statement. In this case, semantic analysis resolves the `+` to an addition operation with integer-valued inputs, and the `x`, `y`, and `z` to symbol references (i.e. references to expression definitions).

The ELM representation is defined as an Abstract Syntax Tree, eliminating the need for lexical analysis and parsing steps, and allowing implementations to concentrate on the core representation of the logic by making use of existing serialization formats (XML and JSON) to allow direct communication of the semantically verified logic.

In addition, this approach encapsulates the application of operator precedence, type inference and implicit conversion, operator resolution and overloading, and generic type instantiation as part of the translation process.

The result is a dramatic reduction in the complexity of processing quality artifacts, whether that processing involves translation to another format, evaluation of the logic, or building a user-interface for authoring or visual representation of the artifact.

The logical perspective is informed conceptually by the HL7 Version 3 Standard: Clinical Decision Support Knowledge Artifact Specification, Release 1.2 (CDS KAS), a prior version of a standard for the representation of clinical decision support artifacts. This heritage is intended to provide familiarity and continuity for authors and consumers in the decision support space. The current version of that standard, Release 1.3, has been updated to use the ELM as defined in this specification.

#### Physical Perspective

The physical perspective is concerned with the implementation and communication aspects of the logical model—specifically, with how the canonical representation of expression logic is shared between producers and consumers. This specification defines an XML schema representation of the ELM for this purpose, describes the intended semantics of CQL, and discusses various implementation approaches.

### Audience

The audience for this specification includes stakeholders and interested parties from a broad range of health quality applications, including health IT vendors, quality agencies, quality artifact authors and consumers, and any party interested in producing or consuming health quality artifacts.

The specification is written with the following major roles in mind:

<a name="table-1-b"></a>

|Role |Description
|---|---
|**Author** |A clinical domain expert or clinical artifact author intending to use the Clinical Quality Language specification to author or understand quality artifacts
|**Developer** |A developer interested in building more complex clinical quality artifacts as well as shared libraries for use by authors
|**Integrator**  |A health IT professional interested in integrating quality artifacts based on the Clinical Quality Language specification into a health quality system
|**Implementer** |A systems analyst, architect, or developer interested in building language processing applications for artifacts based on the Clinical Quality Language specification, such as translators, interpreters, tooling, etc.
{: .grid .table .table-striped}
Table 1‑B - Major roles that this specification was written for

Note that although the [Author's Guide (Chapter 2)](02-authorsguide.html) is intended for a non-technical audience, the material is still somewhat technical in nature, and that readers will benefit from some familiarity with and/or training in basic computer language and database language topics.

In general, each of these roles will benefit from focusing on different aspects of the specification. In particular, the Author role will be primarily interested in [Author's Guide (Chapter 2)](02-authorsguide.html), the Language Guide for the high-level CQL syntax; the Developer role will be primarily interested in Chapter [Author's Guide (Chapter 2)](02-authorsguide.html) & [Developer's Guide (Chapter 3)](03-developersguide.html); the Integrator role will be primarily interested in [Logical Specification (Chapter 4)](04-logicalspecification.html), the formal description of the logical model; and the Implementer role will be primarily interested in Chapters [Language Semantics (Chapter 5)](05-languagesemantics.html), [Translation Semantics (Chapter 6)](06-translationsemantics.html), and [Physical Representation (Chapter 7)](07-physicalrepresentation.html), which discuss the intended execution semantics, translation semantics, and physical representation, respectively, along with additional reference materials in Appendix A-L.

### Scope of the Specification

The Clinical Quality Language specification includes the following components:

* CQL Grammar – An ANTLR4 (ANother Tool for Language Recognition) grammar file formally defining the syntax for the high-level authoring language described by this specification
* Expression Logical Model – A UML model that specifies a canonical representation for expression logic
* ELM XML Schemas – XML schemata defining a physical representation for the serialization and sharing of expression logic specified in the ELM

Note that syntax highlighting is used throughout the specification to make the examples easier to read. However, the highlighting is for example use only and is not a normative aspect of the specification.

### Alignment to CQF Artifact Sharing Use Case

The specific requirements implemented within this specification focus on the structure, semantics, and encoding of expression logic representation within quality artifacts. These requirements are directly tied to the Clinical Quality Framework Artifact Sharing Use Case. Full material on this Use Case can be found here:

[https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/CQF+Use+Cases+-+Discovery](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/CQF+Use+Cases+-+Discovery)

In particular, this specification enables the sharing use case by defining a high-level syntax suitable for authors, a logical-level representation suitable for language processing applications, and a mechanism for translation between them. The following diagram depicts how these specifications will be used in the sharing use case:

<a name="figure-1-c"></a>
<div>
<img src="assets/images/image4.png" alt="assets/images/image4" width="626" height="382"/>
</div>

Figure 1‑C - How the CQL and ELM specifications will be used in the sharing use case

#### Use Case Assumptions and Conditions

It is important for implementers to clearly understand the underlying environmental assumptions, defined in [Section 5 of the CQF Use Case document](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/CQF+Use+Cases+-+Discovery) referenced in the previous section, to ensure that these assumptions align to the implementation environment in which content will be exchanged using a knowledge artifact. Failure to meet any of these assumptions could impact implementation of the knowledge artifact.

### Relationship to Other HL7 Specifications

The Clinical Quality Language specification is designed as a domain-specific language suitable for querying as well as a general purpose query language suitable for describing clinical knowledge in a broad range of applications. As such, it has relationships to, and can be used by, several other HL7 specifications, as explained in the sections that follow. For more information about other HL7 specifications, refer to the the [References](11-d-references.html) section.

#### Health Quality Measure Format (HQMF)

Health Quality Measure Format is an HL7 V3 Standard for the representation of electronic Clinical Quality Measures (eCQMs). HQMF uses a conceptual model of clinical information called Quality Data Model (QDM) to represent patient information in population criteria for the measure. QDM originally (and through version 4.3) also included an expression language for use in eCQMs. Clinical Quality Language is capable of providing more precise and flexible semantics and HQMF-based eCQMs have transitioned to using Clinical Quality Language.

#### Clinical Decision Support Knowledge Artifact Specification (KAS)

The Knowledge Artifact Specification is an HL7 Standard for the representation of clinical decision support artifacts such as order sets, documentation templates, and event-condition-action rules. The original version (and through release 1.2) of that specification included an XML-based syntax for encoding the logic involved in the knowledge artifacts. The Expression Logical Model defined by this specification is a derivative of that XML-based syntax, and in release 1.3 of KAS, the syntax was updated to reference this specification.

#### Fast Healthcare Interoperability Resources (FHIR)

FHIR is an HL7 standard for enabling healthcare interoperability by defining a framework for reliable data exchange. The Clinical Reasoning Module of FHIR describes how Clinical Quality Language can be used within FHIR to represent the logic involved in knowledge artifacts.

#### FHIRPath

FHIRPath is an HL7 specification for a path-based navigation and extraction language, somewhat like XPath. CQL is a superset of FHIRPath, meaning that any valid FHIRPath expression is also a valid CQL expression. This allows CQL to easily express path navigation in hierarchical data models. For more information, see the Using FHIRPath topic in the Developer’s Guide.

### Organization of this Specification

The organization of this specification follows the outline of the perspectives discussed in the Approach section—conceptual, logical, and physical. Below is a listing of the chapters with a short summary of the content of each.

[Chapter 1](01-introduction.html) – Introduction provides introductory and background material for the specification.

[Chapter 2](02-authorsguide.html) – Author’s Guide provides a high-level discussion of the Clinical Quality Language syntax. This discussion is a self-contained introduction to the language targeted at clinical quality authors.

[Chapter 3](03-developersguide.html) – Developer’s Guide provides a more in-depth look at the Clinical Quality Language targeted at developers familiar with typical development languages such as Java, C#, and SQL.

[Chapter 4](04-logicalspecification.html) – Logical Specification provides a complete description of the elements that can be used to represent quality logic. Note that Chapters 2 and 3 describe the same functional capabilities of the language, and that anything that can be expressed in one mechanism can be equivalently expressed in the other.

[Chapter 5](05-languagesemantics.html) – Language Semantics describes the intended semantics of the language, covering topics such as data layer integration and expected run-time behavior.

[Chapter 6](06-translationsemantics.html) – Translation Semantics describes the mapping between CQL and ELM, as well as outlines for how to perform translation from CQL to ELM, and vice versa.

[Chapter 7](07-physicalrepresentation.html) – Physical Representation is reference documentation for the XML schema used to persist ELM.

[Appendix A – CQL Syntax Formal Specification](08-a-cqlsyntax.html) discusses the ANTLR4 grammar for the Clinical Quality Language.

[Appendix B](09-b-cqlreference.html) – CQL Reference provides a complete reference for the types and operators available in CQL, and is intended to be used by authors and developers alike.

[Appendix C](10-c-referenceimplementations.html) – Reference Implementations provides information about where to find reference implementations for a CQL-ELM translator, a CQL Execution Framework for JavaScript, and other related tooling.

[Appendix D](11-d-references.html) – References

[Appendix E](12-e-acronyms.html) – Acronyms

[Appendix F](13-f-glossary.html) – Glossary

[Appendix G](14-g-formattingconventions.html) – Conventions

[Appendix H](15-h-timeintervalcalculations.html) – Timing Interval Calculation Examples

[Appendix I](16-i-fhirpathtranslation.html) – FHIRPath Function Translation

[Appendix J](17-j-listoftables.html) - List of Tables

[Appendix K](18-k-listoffigures.html) - List of Figures

[Appendix L](19-l-cqlsyntaxdiagrams.html) - CQL Syntax Diagrams


---

File: repos/HL7_SLASH_cql/input/pages/02-authorsguide.md


This chapter introduces the high-level syntax for the Clinical Quality Language focused on measure and decision support authors. This syntax provides a human-readable, yet precise mechanism for expressing logic in both the measurement and improvement domains of clinical quality.

The syntax, or structure, of CQL is built from several basic elements that are all classified as _tokens_. There are four different types of tokens present in CQL: _symbols_, such as <span class="sym">+</span> and <span class="sym">*</span>, _keywords_, such as <span class="kw">define</span> and <span class="kw">from</span>, _literals_, such as <span class="lit">5</span> and <span class="lit">'active'</span>, and _identifiers_, such as <span class="id">Person</span> and <span class="id">"Inpatient Encounters"</span>.

Statements of CQL are built up by combining these basic elements, separated by _whitespace_ (spaces, tabs, and returns), to produce language elements. The most basic of these language elements is an _expression_, which is any statement of CQL that returns a value.

Expressions are made up of _terms_ (literals or identifiers) combined using _operators_. Operators can be symbolic, such as <span class="sym">+</span> and <span class="sym">-</span>, phrases such as <span class="kw">and</span> and <span class="kw">exists</span>, or named operators called _functions_, such as <span class="id">First()</span> and <span class="id">AgeInYears()</span>.

At the highest level, CQL is organized around the concept of a _library_, which can be thought of as a container for artifact logic. Libraries contain _declarations_ which specify the items the library contains. The most important of these declarations is the _named expression_, which is the basic unit of logic definition in CQL.

In the sections that follow, the various constructs introduced above will be discussed in more detail, beginning with the kinds of declarations that can be made in a CQL library, and then moving through the various ways that clinical information is referenced and queried within CQL, followed by an overview of the operators available in CQL, and ending with a detailed walkthrough of authoring specific quality artifacts using a running example.

It is important to keep in mind throughout the discussion that follows that CQL is a _query language_, which means that the statements of the language are really _questions_, formulated in terms of a _data model_ that describes the available data. Depending on the use case, these questions will be evaluated in different ways to produce a response. For example, for decision  support, the questions will likely be evaluated in the context of a specific patient and at some specific point in a workflow. For quality measurement, the questions will likely be evaluated for each of a set of patients in an overall population. However the evaluation occurs, the discussions in this chapter refer generally to the notion of an _evaluation request_ that represents a request by some consumer to evaluate a CQL expression. This evaluation request generally includes the _context_ of the evaluation (i.e. the inputs to the evaluation such as the patient and any parameter values), as well as a _timestamp_ associated with when the evaluation request occurs.

Throughout the discussion, readers may find it helpful to refer to [Appendix B – CQL Reference](09-b-cqlreference.html) for more detailed discussion of particular concepts.

And as a final introductory note, CQL is designed to support two levels of usage. The first level focuses on the simplest possible expression of the most common use cases encountered in quality measurement and decision support, while the second level focuses on more advanced capabilities such as multi-source queries and user-defined functions. The first level is covered in this chapter, the Author's Guide, while the second level is covered in the next chapter, the Developer's Guide.

### Declarations

Constructs expressed within CQL are packaged in containers called _libraries_. Libraries provide a convenient unit for the definition, versioning, and distribution of logic. For simplicity, libraries in CQL correspond directly with a single file.

Libraries in CQL provide the overall packaging for CQL definitions. Each library allows a set of declarations to provide information about the library as well as to define constructs that will be available within the library.

Libraries can contain any or all of the following constructs:

<a name="table-2-a"></a>

|Construct |Description
|----|----
|**library** |Header information for the library, including the name and version, if any.
|**using** |Data model information, specifying that the library may access types from the referenced data model.
|**include** |Referenced library information, specifying that the library may access constructs defined in the referenced library.
|**codesystem** |Codesystem information, specifying that logic within the library may reference the specified codesystem by the given name.
|**valueset** |Valueset information, specifying that logic within the library may reference the specified valueset by the given name.
|**code** |Code information, specifying that logic within the library may reference the specified code by the given name.
|**concept** |Concept information, specifying that logic within the library may reference the specified concept by the given name.
|**parameter** |Parameter information, specifying that the library expects parameters to be supplied by the evaluating environment.
|**context** |Specifies the overall context, such as Patient or Practitioner, to be used in the statements that are declared in the library. Note that a library may have multiple context declarations, and that each context declaration establishes the context for the statements that follow, until the next context declaration is encountered. However, best practice is that each library should only contain a single context declaration as the first statement in the library.
|**define** |The basic unit of logic within a library, a define statement introduces a named expression that can be referenced within the library, or by other libraries.
|**function** |Libraries may also contain function definitions. A function in CQL is a named expression that is allowed to take any number of arguments, each of which has a name and a declared type. These are most often used as part of shared libraries.
{: .grid .table .table-striped}

Table 2‑A - Constructs that CQL libraries can contain

A syntax diagram of a library containing all of the constructs can be seen [here](19-l-cqlsyntaxdiagrams.html#library).

The following sections discuss these constructs in more detail.

#### Library

The <span class="kw">library</span> declaration specifies both the name of the library and an optional version for the library. The library name is used as an identifier to reference the library from other CQL libraries, as well as eCQM and CDS artifacts. A library can have at most one library declaration.

The following example illustrates the library declaration:

```cql
library CMS153_CQM version '2'
```

The above declaration names the library with the identifier <span class="id">CMS153_CQM</span> and specifies the version <span class="lit">'2'</span>.

A syntax diagram of the <span class="kw">library</span> declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#libraryDefinition).

#### Data Models

A CQL library can reference zero or more data models with <span class="kw">using</span> declarations. These data models define the structures that can be used within retrieve expressions in the library.

For more information on how these data models are used, see the [Retrieve](#retrieve) section.

The following example illustrates the using declaration:

```cql
using QUICK
```

The above declaration specifies that the <span class="id">QUICK</span> model will be used as the data model within the library. The [QUICK data model](http://hl7.org/fhir/us/qicore/quick/QUICK-index.html) will be used for the examples in this section unless specified otherwise.

If necessary, a version specifier can be provided to indicate which version of the data model should be used as shown below:

```cql
using QUICK version '0.3.0'
```

A syntax diagram of the <span class="kw">using</span> declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#usingDefinition).

#### Libraries

A CQL library can reference zero or more other CQL libraries with <span class="kw">include</span> declarations. Components defined within these included libraries can then be referenced within the library by name.

```cql
include CMS153_Common
```

Components defined in the CMS153_Common library can now be referenced using the library name. For example:

```cql
define "SexuallyActive":
  exists (CMS153_Common."ConditionsIndicatingSexualActivity")
    or exists (CMS153_Common."LaboratoryTestsIndicatingSexualActivity")
```

This expression references <span class="id">ConditionsIndicatingSexualActivity</span> and <span class="id">LaboratoryTestsIndicatingSexualActivity</span> defined in the <span class="id">CMS153_Common</span> library.

The syntax used to reference these expressions is a _qualified identifier_ consisting of two parts. The qualifier, <span class="id">CMS153_Common</span>, and the identifier, <span class="id">ConditionsIndicatingSexualActivity</span>, separated by a dot (<span class="sym">.</span>).

For more information on libraries, refer to the [Using Libraries to Share Logic](#using-libraries-to-share-logic) section.

The <span class="kw">include</span> declaration may optionally specify a version, meaning that a specific version of the library must be used:

```cql
include CMS153_Common version '2'
```

A more in-depth discussion of library versioning is provided in the [Libraries](03-developersguide.html#libraries-1) section of the Developers guide.

In addition, the <span class="kw">include</span> declaration may optionally specify an assigned name using the <span class="kw">called</span> clause:

```cql
include CMS153_Common version '2' called Common
```

Components defined in the <span class="id">CMS153_Common</span> library, version 2, can now be referenced using the assigned name of <span class="id">Common</span>. For example:

```cql
define "SexuallyActive":
  exists (Common."ConditionsIndicatingSexualActivity")
    or exists (Common."LaboratoryTestsIndicatingSexualActivity")
```

A syntax diagram of the <span class="kw">include</span> declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#includeDefinition).

#### Terminology

A CQL library may contain zero or more named terminology declarations, including codesystems, valuesets, codes, and concepts, using the <span class="kw">codesystem</span>, <span class="kw">valueset</span>, <span class="kw">code</span>, and <span class="kw">concept</span> declarations.

These declarations specify a local name that represents a codesystem, valueset, code, or concept and can be used anywhere within the library where the terminology is expected.

The syntax diagrams of the [codesystem definition](19-l-cqlsyntaxdiagrams.html#codesystemDefinition),[valueset definition](19-l-cqlsyntaxdiagrams.html#valuesetDefinition), [code definition](19-l-cqlsyntaxdiagrams.html#codeDefinition) and [concept definition](19-l-cqlsyntaxdiagrams.html#conceptDefinition).

Consider the following valueset declaration:

```cql
valueset "Female Administrative Sex": 'urn:oid:2.16.840.1.113883.3.560.100.2'
```

This definition establishes the local name <span class="id">"Female Administrative Sex"</span> as a reference to the external identifier for the valueset, more specifically, an Object Identifier (OID) in this particular case: <span class="lit">'urn:oid:2.16.840.1.113883.3.560.100.2'</span>. The external identifier need not be an OID; instead, it may be a uniform resource identifier (URI), or any other identification system. CQL does not interpret the external id, it only specifies that the external identifier be a string that can be used to uniquely identify the valueset within the implementation environment.

This valueset definition can then be used within the library wherever a valueset can be used:

```cql
define "PatientIsFemale": Patient.gender in "Female Administrative Sex"
```

The above example defines the <span class="id">PatientIsFemale</span> expression as <span class="kw">true</span> for patients whose gender is a code in the valueset identified by <span class="id">"Female Administrative Sex"</span>.

Note that the name of the valueset uses double quotes, unlike the string representation of the OID for the valueset, which uses single quotes. Single quotes are used to build arbitrary strings in CQL; double quotes are used to represent names of constructs such as valuesets and expression definitions.

Note also that the local name for a valueset is user-defined and not required to match the actual name of the valueset identified within the external valueset repository. However, when using external terminologies, authors should use the name of the terminology as defined externally to avoid introducing any potential confusion of meaning.

The following example illustrates a _code system_ and a _code_ declaration:

```cql
codesystem "SNOMED": 'http://snomed.info/sct'
code "Screening for Chlamydia trachomatis (procedure)":
  '442487003' from "SNOMED" display 'Screening for Chlamydia trachomatis (procedure)'
```

This codesystem declaration in this example establishes the local name "SNOMED" as a reference to the external identifier for the codesystem, the URI "http://snomed.info/sct". The code declaration in this example establishes the local name "Screening for Chlamydia trachomatis (procedure)" as a reference to the code '442487003' from the "SNOMED" code system already defined.

For more information about terminologies as values within CQL, refer to the [Clinical Values](#clinical-values) section.

#### Parameters

A CQL library can define zero or more parameters. Each parameter is defined with the elements listed in the following table:

<a name="table-2-b"></a>

|Element |Description
|----|----
|**Name** |A unique identifier for the parameter within the library
|**Type** |The type of the parameter – Note that the type is only required if no default value is provided. Otherwise, the type of the parameter is determined based on the default value.
|**Default Value** |An optional default value for the parameter
{: .grid .table .table-striped}

Table 2‑B - Elements that define a parameter

A syntax diagram of the <span class="kw">parameter</span> can be seen [here](19-l-cqlsyntaxdiagrams.html#parameterDefinition).

The parameters defined in a library may be referenced by name in any expression within the library. When expressions in a CQL library are evaluated, the values for parameters are provided by the environment. For example, a library that defines criteria for a quality measure may define a parameter to represent the measurement period:

```cql
parameter MeasurementPeriod default Interval[@2013-01-01, @2014-01-01)
```

Note the syntax for the default here is called an _interval selector_ and will be discussed in more detail in the section on [Interval Values](#interval-values).

This parameter definition can now be referenced anywhere within the CQL library:

```cql
define "Patient16To23":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
```

The above example defines the <span class="id">Patient16To23</span> expression as patients whose age at the start of the MeasurementPeriod was at least 16 and less than 24.

The default value for a parameter is optional, but if no default is provided, the parameter must include a type specifier:

```cql
parameter MeasurementPeriod Interval<DateTime>
```

If a parameter definition does not indicate a default value, a parameter value may be supplied by the evaluation environment, typically as part of the evaluation request. If the evaluation environment does not supply a parameter value, the parameter will be <span class="kw">null</span>.

In addition, because parameter defaults are part of the declaration, the expressions used to define them have the following restrictions applied:

. Parameter defaults cannot reference run-time data (i.e. they cannot contain Retrieve expressions)
. Parameter defaults cannot reference expressions or functions defined in the current library
. Parameter defaults cannot reference included libraries
. Parameter defaults cannot perform terminology operations. For more information on terminology operations, see the [Terminology Operators](#terminology-operators) section.
. Parameter defaults cannot reference other parameters

In other words, the value for the default of a parameter must be able to be calculated at compile-time.

#### Context

The context declaration defines the scope of data available to statements within the language. Models define the available contexts, including at least one context named <span class="id">Unfiltered</span> that indicates that statements are not restricted to a particular context. Consider the following simplified information model:

<a name="figure-2-a"></a>
<div><img src="assets/images/patient-practitioner-model.png" alt="assets/images/patient-practitioner-model"/></div>

Figure 2-A - Simplified patient/practitioner information model

A patient and practitioner may both have any number of encounters. From the perspective of a patient (i.e. _in patient context_), only encounters for that particular patient are accessible. Likewise, from the perspective of a practitioner (i.e. _in practitioner context_), only encounters for that particular practitioner are accessible.

The following table lists some typical contexts:

<a name="table-2-c"></a>

|Context |Description
|----|----
|**Patient** |The Patient context specifies that expressions should be interpreted with reference to a single patient.
|**Practitioner** |The Practitioner context specifies that expressions should be interpreted with reference to a single practitioner.
|**Unfiltered** |The Unfiltered context indicates that expressions are not interpreted with reference to a particular context.
{: .grid .table .table-striped}

Table 2‑C - Typical contexts for CQL

A syntax diagram of the <span class="kw">context</span> declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#contextDefinition).

Depending on different needs, models may define any context appropriate to their use case, but should identify a default context that is used when authors do not declare a specific context.

When no context is specified in the library, and the model has not declared a default context, the default context is <span class="id">Unfiltered</span>.

```cql
context Patient

define "Patient16To23AndFemale":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in "Female Administrative Sex"
```

Because the context has been established as Patient, the expression has access to patient-specific concepts such as the <span class="id">AgeInYearsAt()</span> operator and the <span class="id">Patient.gender</span> attribute. Note that the attributes available in the Patient context are defined by the data model in use.

A library may contain zero or more context statements, with each context statement establishing the context for subsequent statements in the library.

Effectively, the statement <span class="kw">context</span> <span class="id">Patient</span> defines an expression named <span class="id">Patient</span> that returns the patient data for the current patient, as well as restricts the information that will be returned from a retrieve to a single patient, as opposed to all patients.

As another example, consider a <span class="id">Practitioner</span> context:

```cql
context Practitioner

define "Encounters":
  ["Encounter": "Inpatient Encounter"]
```

The above definition results in all the encounters for a particular practitioner. For more information on context, refer to the [Retrieve Context](#retrieve-context) discussion below.

#### Statements

A CQL Library can contain zero or more <span class="kw">define</span> statements describing named expressions that can be referenced either from other expressions within the same library or by containing quality and decision support artifacts.

The following example illustrates a simple define statement:

```cql
define "InpatientEncounters":
  [Encounter: "Inpatient"] E
    where E.length <= 120 days
      and E.period ends during MeasurementPeriod
```

This example defines the <span class="id">InpatientEncounters</span> expression as <span class="id">Encounter</span> events whose code is in the <span class="id">"Inpatient"</span> valueset, whose length is less than or equal to 120 days, and whose period ended (i.e. patient was discharged) during MeasurementPeriod.

Note that the use of terms like <span class="id">Encounter</span>, <span class="id">length</span>, and <span class="id">period</span>, as well as which code attribute is used to compare with the valueset, are defined by the data model being used within the library; they are not defined by CQL.

For more information on the use of define statements, refer to the [Using Define Statements](#using-define-statements) section.

### Retrieve

The _retrieve_ expression is the central construct for accessing clinical information within CQL. The result of a retrieve is always a list of some type of clinical data, based on the type described by the retrieve and the context (such as <span class="id">Patient</span>, <span class="id">Practitioner</span>, or <span class="id">Unfiltered</span>) in which the retrieve is evaluated.

The retrieve in CQL has two main parts: first, the _type_ part, which identifies the type of data that is to be retrieved; and second, the _filter_ part, which optionally provides filtering information based on specific types of filters common to most clinical data.

A syntax diagram of the <span class="kw">retrieve</span> expression can be seen [here](19-l-cqlsyntaxdiagrams.html#retrieve).

Note that the retrieve only introduces data into an expression; operations for further filtering, shaping, computation, and sorting will be discussed in later sections.

#### Clinical Statement Structure

The retrieve expression is a reflection of the idea that clinical data in general can be viewed as clinical statements of some type as defined by the model. The type of the clinical statement determines the structure of the data that is returned by the retrieve, as well as the semantics of the data involved.

The type may be a general category, such as a Condition, Procedure, or Encounter, or a more specific instance such as an ImagingProcedure or a LaboratoryTest. The data model defines the available types that may be referenced by a retrieve.

In the simplest case, a retrieve specifies only the type of data to be retrieved. For example:

```cql
[Encounter]
```

Assuming the default context of <span class="id">Patient</span>, this example retrieves all <span class="id">Encounter</span> statements for a patient.

#### Filtering with Terminology

In addition to describing the type of clinical statements, the retrieve expression allows the results to be filtered using terminology, including valuesets, code systems, or by specifying a single code. The use of codes within clinical data is ubiquitous, and most clinical statements have at least one code-valued attribute. In addition, there is typically a “primary” code-valued attribute for each type of clinical statement. This primary code is used to drive the terminology filter. For example:

```cql
[Condition: "Acute Pharyngitis"]
```

This example requests only those <span class="id">Conditions</span> whose primary code attribute is a code from the valueset identified by <span class="id">"Acute Pharyngitis"</span>. The attribute used as the primary code attribute is defined by the data model being used.

In addition, the retrieve expression allows the filtering attribute name to be specified:

```cql
[Condition: severity in "Acute Severity"]
```

This requests clinical statements that assert the presence of a condition with a severity in the <span class="id">"Acute Severity"</span> valueset.

Note that the terminology reference <span class="id">"Acute Severity"</span> in the above examples is a valueset, but it could also be a code system, a concept, or a specific code:

```cql
codesystem "SNOMED": 'http://snomed.info/sct'
code "Acute Pharyngitis Code":
  '363746003' from "SNOMED" display 'Acute pharyngitis (disorder)'

define "Get Condition from Code Declaration":
  [Condition: "Acute Pharyngitis Code"]

define "Get Condition from CodeSystem Declaration":
  [Condition: "SNOMED"]
```

The <span class="id">"Get Condition from Code Declaration"</span> expression returns conditions for the patient where the code is equivalent to the <span class="id">"Acute Pharyngitis Code"</span> code. The <span class="id">"Get Condition from CodeSystem Declaration"</span> expression returns conditions for the patient where the code is some code in the <span class="id">"SNOMED"</span> code system.

When the primary code attribute is used (i.e. no filtering attribute name is specified in the retrieve), the retrieve uses the _membership_ operator (<span class="kw">in</span>) if the terminology target is a valueset or code system, and the _equivalent_ operator (<span class="sym">~</span>) otherwise. For more information about using the equivalent operator with terminology, refer to the [Code](#code) section. For more information about using the membership operator with terminology, refer to the [Terminology Operators](#terminology-operators) section.

When the code path is specified, the code comparison operation can be specified as well:

```cql
codesystem "SNOMED": 'http://snomed.info/sct'
code "Acute Pharyngitis Code":
  '363746003' from "SNOMED" display 'Acute pharyngitis (disorder)'

define "Get Condition from Code Declaration":
  [Condition: code ~ "Acute Pharyngitis Code"]

define "Get Condition from CodeSystem Declaration":
  [Condition: code in "SNOMED"]

define "Get Condition from Exact Match To Code":
  [Condition: code = "Acute Pharyngitis Code"]
```

Note the last example here is using the _equality_ operator (<span class="sym">=</span>) to indicate the terminology match should be exact (meaning that it will consider code system version and display as well as the code and system). Equality, equivalence, and membership are the only allowed terminology comparison operators within a retrieve.

#### Retrieve Context

Within the <span class="id">Patient</span> context, the results of any given retrieve will always be scoped to a single patient, as determined by the environment. For example, in a quality measure evaluation environment, the <span class="id">Patient</span> context may be the current patient being considered. In a clinical decision support environment, the <span class="id">Patient</span> context would be the patient for which guidance is being sought.

By contrast, if the <span class="id">Unfiltered</span> context is used, the results of any given retrieve will not be limited to a particular context. For example:

```cql
[Condition: "Acute Pharyngitis"] C where C.onsetDateTime during MeasurementPeriod
```

When evaluated within the <span class="id">Patient</span> context, the above example returns <span class="id">"Acute Pharyngitis"</span> conditions that onset during <span class="id">MeasurementPeriod</span> for the current patient only. In the <span class="id">Unfiltered</span> context, this example returns all <span class="id">"Acute Pharyngitis"</span> conditions that onset during <span class="id">MeasurementPeriod</span>, regardless of patient.

As another example, consider the set of encounters:

```cql
[Encounter: "Inpatient"]
```

Depending on the context the retrieve above will return:

* <span class="id">Unfiltered</span> - all the encounters in the underlying system.
* <span class="id">Patient</span> - only encounters for the _current_ patient (e.g. PAT-100)

Consider the figure below:

<a name="figure-2-b"></a>
<div><img src="assets/images/context-diagram.png" alt="assets/images/context-diagram"/></div>

Figure 2‑B - Unfiltered vs Patient context

Because context is associated with each declaration, it is possible for expressions defined in a particular context to reference expressions defined in the <span class="id">Unfiltered</span> context and vice versa. Best practice is for each library to have expressions in only one context, and for that context declaration to be the first declaration in the library.

Note that it is not legal for an expression in one specified context to reference an expression in another specified context. This is because there must be a way to relate cross-context queries, which is only possible in the <span class="id">Unfiltered</span> context, or through the use of a cross-context retrieve.

In an <span class="id">Unfiltered</span> context, a reference to a specified context expression (such as <span class="id">Patient</span>) results in the execution of that expression for each patient in the unfiltered context, and the implementation environment combines the results.

If the result type of an expression in a specific context is not a list, the result of accessing it from an <span class="id">Unfiltered</span> context will be a list with elements of the type of the  expression. For example:

```cql
context Patient

define "InInitialPopulation":
  AgeInYearsAt(@2013-01-01) >= 16 and AgeInYearsAt(@2013-01-01) < 24

context Unfiltered

define "InitialPopulationCount":
  Count(InInitialPopulation IP where IP is true)
```

In the above example, the <span class="id">InitialPopulationCount</span> expression returns the number of patients for which the <span class="id">InInitialPopulation</span> expression evaluated to <span class="kw">true</span>.

If the result type of the <span class="id">Patient</span> context expression is a list, the result will be a list of the same type, but with the results of the evaluation for each patient in the unfiltered context flattened into a single list.

In a specific context (such as <span class="id">Patient</span>), a reference to an <span class="id">Unfiltered</span> context expression results in the evaluation of the <span class="id">Unfiltered</span> context expression, and the result type is unaffected.

> In some cases, measures or decision support artifacts may need to access data for a related person, such as the mother’s record from an infant’s context. For information on how to do this in CQL, refer to [Related Context Retrieves](03-developersguide.html#related-context-retrieves).
{: .note-info}

### Queries

Beyond the retrieve expression, CQL provides a _query_ construct that allows the results of retrieves to be further filtered, shaped, and extended to enable the expression of arbitrary clinical logic that can be used in quality and decision support artifacts.

Although similar to a retrieve in that a query will typically result in a list of patient information, a query is a more general construct than a retrieve. Retrieves are by design restricted to a particular set of criteria that are commonly used when referencing clinical information, and specifically constructed to allow implementations to easily build data access layers suitable for use with CQL. For more information on the design of the retrieve construct, refer to [Clinical Data Retrieval in Quality Artifacts](05-languagesemantics.html#clinical-data-retrieval-in-quality-artifacts).

The query construct has a _primary source_ and four main _clauses_ that each allow for different types of operations to be performed:

<a name="table-2-d"></a>

|Clause |Operation
|----|----
|**Relationship (with/without)** |Allows relationships between the primary source and other clinical information to be used to filter the result.
|**Where** |The where clause allows conditions to be expressed that filter the result to only the information that meets the condition.
|**Return** |The return clause allows the result set to be shaped as needed, removing elements, or including new calculated values.
|**Sort** |The sort clause allows the result set to be ordered according to any criteria as needed.
{: .grid .table .table-striped}

Table 2‑D - Four main clauses for a query construct

Each of these clauses will be discussed in more detail in the following sections.

A query construct begins by introducing an _alias_ for the primary source:

```cql
[Encounter: "Inpatient"] E
```

The primary source for this query is the retrieve expression +++[+++<span class="id">Encounter</span>: <span class="id">"Inpatient"</span>], and the alias is <span class="id">E</span>. Subsequent clauses in the query must reference elements of this source by using this alias.

Although the alias in this example is a single-letter abbreviation, <span class="id">E</span>, it could also be a longer abbreviation:

```cql
[Encounter: "Inpatient"] Enc
```

Note that alias names, as with all language constructs, may be the subject of language conventions. The [Formatting Conventions](14-g-formattingconventions.html) section defines a very general set of formatting conventions for use with Clinical Quality Languages. Within specific domains, institutions or stakeholders may create additional conventions and style guides appropriate to their domains.

#### Filtering

The <span class="kw">where</span> clause allows the results of the query to be filtered by a condition that is evaluated for each element of the query being filtered. If the condition evaluates to <span class="kw">true</span> for the element being tested, that element is included in the result. Otherwise, the element is excluded from the resulting list.

A syntax diagram of a <span class="kw">where</span> clause can be seen [here](19-l-cqlsyntaxdiagrams.html#whereClause).

For example:

```cql
[Encounter: "Inpatient"] E
  where duration in days of E.period >= 120
```

The alias <span class="id">E</span> is used to access the period attribute of each encounter in the primary source. The filter condition tests whether the duration of that range is at least 120 days.

The condition of a <span class="kw">where</span> clause is allowed to contain any arbitrary combination of operations of CQL, so long as the overall result of the condition is boolean-valued. For example, the following where clause includes multiple conditions on different attributes of the source:

```cql
[CommunicationRequest] C
  where C.mode = 'ordered'
    and C.sender.role = 'nurse'
    and C.recipient.role = 'doctor'
    and C.indication in "Fever"
```

Note that because CQL uses three-valued logic, the result of evaluating any given boolean-valued condition may be _unknown_ (<span class="kw">null</span>). For example, if the list of inpatient encounters from the first example contains some elements whose <span class="id">period</span> attribute is <span class="kw">null</span>, the result of the condition for that element will not be <span class="kw">false</span>, but <span class="kw">null</span>, indicating that it is not known whether or not the duration of the encounter was at least 120 days. For the purposes of evaluating a filter, only elements where the condition evaluates to <span class="kw">true</span> are included in the result, effectively ignoring the entries for which the logical expression evaluates to <span class="kw">null</span>.  For more discussion on three-valued logic, see the section on [Missing Information](#missing-information) in the Author's Guide, as well as the section on [Nullological Operators](03-developersguide.html#nullological-operators) in the Developer's guide.

#### Shaping

The <span class="kw">return</span> clause of a CQL query allows the results of the query to be shaped. In most cases, the results of a query will be of the same type as the primary source of the query. However, some scenarios require only specific elements be extracted, or computations on the data involved in each element be performed. The <span class="kw">return</span> clause enables this type of query.

A syntax diagram of a <span class="kw">return</span> clause can be seen [here](19-l-cqlsyntaxdiagrams.html#returnClause).

For example:

```cql
[Encounter: "Inpatient"] E
  return Tuple { id: E.identifier, lengthOfStay: duration in days of E.period }
```

This example returns a list of tuples (structured values), one for each inpatient encounter performed, where each tuple consists of the <span class="id">id</span> of the encounter as well as a <span class="id">lengthOfStay</span> element, whose value is calculated by taking the duration of the period for the encounter. Tuples are discussed in detail in later sections. For more information on Tuples, see [Structured Values (Tuples)](#structured-values-tuples).

By default, a query returns a list of distinct results, suppressing duplicates. To include duplicates, use the <span class="kw">all</span> keyword in the <span class="kw">return</span> clause. For example, the following will return a list of the lengths of stay for each Encounter:

```cql
[Encounter: "Inpatient"] E
  return E.lengthOfStay
```

If two encounters have the same value for <span class="id">lengthOfStay</span>, that value will only appear once in the result unless the <span class="kw">all</span> keyword is used:

```cql
[Encounter: "Inpatient"] E
  return all E.lengthOfStay
```

#### Sorting

CQL queries can sort results in any order using the <span class="kw">sort by</span> clause.

A syntax diagram of a <span class="kw">sort</span> clause can be seen [here](19-l-cqlsyntaxdiagrams.html#sortClause).

For example:

```cql
[Encounter: "Inpatient"] E sort by start of period
```

This example returns inpatient encounters, sorted by the start of the encounter period.

Results can be sorted ascending or descending using the <span class="kw">asc</span> (ascending) or <span class="kw">desc</span> (descending) keywords:

```cql
[Encounter: "Inpatient"] E sort by start of period desc
```

If no ascending or descending specifier is provided, the order is ascending.

Calculated values can also be used to determine the sort:

```cql
[Encounter: "Inpatient"] E
  return Tuple { id: E.identifier, lengthOfStay: duration in days of E.period }
    sort by lengthOfStay
```

Note that the properties that can be specified within the <span class="kw">sort</span> clause are determined by the result type of the query. In the above example, [id]#lengthOfStay# can be referenced because it is introduced in the <span class="kw">return</span> clause. Because the sort applies after the query results have been determined, alias references are neither required nor allowed in the sort.

If no <span class="kw">sort</span> clause is provided, the order of the result is unprescribed and is implementation specific.

The <span class="kw">sort</span> clause may include multiple attributes, each with their own sort order:

```cql
[Encounter: "Inpatient"] E sort by start of period desc, identifier asc
```

Sorting is performed in the order in which the attributes are defined in the <span class="kw">sort</span> clause, so this example sorts by period descending, then by <span class="id">identifier</span> ascending.

When the sort elements do not provide a unique ordering (i.e. there is a possibility of duplicate sort values in the result), the order of duplicates is unspecified.

A query may only contain a single <span class="kw">sort</span> clause, and it must always appear last in the query.

When the data being sorted includes <span class="kw">nulls</span>, they are considered lower than any non-null value, meaning they will appear at the beginning of the list when the data is sorted ascending, and at the end of the list when the data is sorted descending.

Within the expressions of a sort clause, the iteration accessor <span class="kw">$this</span> may be used to access the current iteration element, and <span class="kw">$index</span> may be used to access the 0-based index of the current iteration.

#### Relationships

In addition to filtering by conditions, some scenarios need to be able to filter based on relationships to other sources. The CQL <span class="kw">with</span> and <span class="kw">without</span> clauses provide this capability. For the examples in this section, consider the following simple information model:

<a name="figure-2-c"></a>
<div><img src="assets/images/patient-model.png" alt="assets/images/patient-model"/></div>

Figure 2‑C - Simple patient information model

```cql
[Encounter: "Ambulatory/ED Visit"] E
  with [Condition: "Acute Pharyngitis"] P
    such that P.onsetDateTime during E.period
      and P.abatementDate after end of E.period
```

This query returns <span class="id">"Ambulatory/ED Visit"</span> encounters performed where the patient also has a condition of <span class="id">"Acute Pharyngitis"</span> that overlaps after the period of the encounter.

The <span class="kw">without</span> clause returns only those elements from the primary source that do not have a specific relationship to another source. For example:

```cql
[Encounter: "Ambulatory/ED Visit"] E
  without [Condition: "Acute Pharyngitis"] P
    such that P.onsetDateTime during E.period
      and P.abatementDate after end of E.period
```

This query is the same as the previous example, except that only encounters that _do not_ have overlapping conditions of <span class="id">"Acute Pharyngitis"</span> are returned. In other words, if the _such that_ condition evaluates to <span class="kw">true</span> (if the Encounter has an overlapping Condition of <span class="id">Acute Pharyngitis</span> in this case), then that Encounter is not included in the result.

A syntax diagram of a [with](19-l-cqlsyntaxdiagrams.html#withClause) clause and [without](19-l-cqlsyntaxdiagrams.html#withoutClause) clause.

A given query may include any number of <span class="kw">with</span> and <span class="kw">without</span> clauses in any order, but they must all come before any <span class="kw">where</span>, <span class="kw">return</span>, or <span class="kw">sort</span> clauses.

The <span class="kw">such that</span> conditions in the examples above used [Timing Relationships](#timing-relationships) (e.g. during, after end of), but any expression may be used, so long as the overall result is boolean-valued. For example:

```cql
[MedicationDispense: "Warfarin"] D
  with [MedicationPrescription: "Warfarin"] P
    such that P.status = 'active'
      and P.identifier = D.authorizingPrescription.identifier
```
This example retrieves all dispense records for active prescriptions of <span class="id">Warfarin</span>.

When multiple <span class="kw">with</span> or <span class="kw">without</span> clauses appear in a single query, the result will only include elements that meet the <span class="kw">such that</span> conditions for all the relationship clauses. For example:

```cql
MeasurementPeriodEncounters E
  with Pharyngitis P
    such that Interval[P.onsetDateTime, P.abatementDateTime] includes E.period
      or P.onsetDateTime.value in E.period
  with Antibiotics A such that A.dateWritten 3 days or less after start of E.period
```

This example retrieves all the elements returned by the expression <span class="id">MeasurementPeriodEncounters</span> that have both a related <span class="id">Pharyngitis</span> and <span class="id">Antibiotics</span> result.

#### Full Query

The clauses described in the previous section must appear in the correct order in order to specify a valid CQL query. The general order of clauses is:

```cql
<primary-source> <alias>
  <with-or-without-clauses>
  <where-clause>
  <return-clause>
  <sort-clause>
```

A query must contain an aliased primary source, but this is the only required clause.

A query may contain zero or more <span class="kw">with</span> or <span class="kw">without</span> clauses, but they must all appear before any <span class="kw">where</span>, <span class="kw">return</span>, or <span class="kw">sort</span> clauses.

A query may contain at most one <span class="kw">where</span> clause, and it must appear after any <span class="kw">with</span> or <span class="kw">without</span> clauses, and before any <span class="kw">return</span> or <span class="kw">sort</span> clauses.

A query may contain at most one <span class="kw">return</span> clause, and it must appear after any <span class="kw">with</span> or <span class="kw">without</span> or <span class="kw">where</span> clauses, and before any <span class="kw">sort</span> clause.

A query may contain at most one <span class="kw">sort</span> clause, and it must be the last clause in the query.

For example:

```cql
[Encounter: "Inpatient"] E
  with [Condition: "Acute Pharyngitis"] P
    such that P.onsetDateTime during E.period
      and P.abatementDate after end of E.period
  where duration in days of E.period >= 120
  return Tuple { id: E.id, lengthOfStay: duration in days of E.period }
  sort by lengthOfStay desc
```

This query returns all <span class="id">"Inpatient"</span> encounter events that have an overlapping condition of <span class="id">"Acute Pharyngitis"</span> and a duration of at least 120 days. For each such event, the result will include the <span class="id">id</span> of the event and the duration in days, and the results will be ordered by that duration descending.

As another example, consider a query with multiple <span class="kw">without</span> clauses:

```cql
SingleLiveBirthEncounter E
  without [Condition: "Galactosemia"] G
    such that G.onsetDatetime during E.period
  without [Procedure: "Parenteral Nutrition"] P
    such that P.performed starts during E.period
  where not exists ( E.diagnosis ED
    where ED.code in "Galactosemia"
  )
```

Even though this example has multiple <span class="kw">without</span> clauses, there is still only a single <span class="kw">where</span> clause for the query.

Note that the query construct in CQL supports other clauses that are not discussed here. For more information on these, refer to [Introducing Scoped Definitions In Queries](03-developersguide.html#introducing-context-in-queries) and [Multi-Source Queries](03-developersguide.html#multi-source-queries).

### Values

CQL supports several categories of values:

* Simple values, such as strings, numbers, and dates
* Clinical values, such as quantities, ratios, and valuesets
* Structured values (called tuples), such as Medications, Encounters, and Patients
* Lists, which can contain any number of elements of the same type
* Intervals, which define ranges of ordered values, such as numbers or dates

The result of evaluating any expression in CQL is a value of some type. For example, the expression <span class="lit">5</span> results in the value <span class="lit">5</span> of type <span class="id">Integer</span>. CQL is a _strongly-typed_ language, meaning that every value is of some type, and that every operation expects arguments of a particular type.

As a result, any given expression of CQL can be verified as meaningful or be determined meaningless, at least in terms of the operations performed. For example, consider the following expression:

```cql
6 + 6
```

The expression involves the addition of values of type <span class="id">Integer</span>, and so is a meaningful expression of CQL. By contrast:

```cql
6 + 'active'
```

This expression involves the addition of a value of type <span class="id">Integer</span>, <span class="lit">6</span>, to a value of type <span class="id">String</span>, <span class="lit">'active'</span>. This expression is meaningless since CQL does not define addition for values of type <span class="id">Integer</span> and <span class="id">String</span>.

However, there are cases where an expression is meaningful, even if the types do not match exactly. For example, consider the following addition:

```cql
6 + 6.0
```

This expression involves the addition of a value of type <span class="id">Integer</span>, and a value of type <span class="id">Decimal</span>. This is meaningful, but in order to infer the correct result type, the <span class="id">Integer</span> value will be implicitly converted to a value of type <span class="id">Decimal</span>, and the <span class="id">Decimal</span> addition operator will be used, resulting in a value of type <span class="id">Decimal</span>.

To ensure there can never be a loss of information, this implicit conversion will only happen from <span class="id">Integer</span> to <span class="id">Decimal</span>, never from <span class="id">Decimal</span> to <span class="id">Integer</span>.

In the sections that follow, the various categories of values that can be represented in CQL will be considered in more detail.

#### Simple Values

CQL supports several types of simple values:

<a name="table-2-e"></a>

|Value |Examples
|----|----
|**Boolean** |<span class="kw">true</span>, <span class="kw">false</span>, <span class="kw">null</span>
|**Integer** |<span class="lit">16</span>, <span class="lit">-28</span>
|**Decimal** |<span class="lit">100.015</span>
|**String** |<span class="lit">'pending'</span>, <span class="lit">'active'</span>, <span class="lit">'complete'</span>
|**Date** |<span class="lit">@2014-01-25</span>
|**DateTime** |<span class="lit">@2014-01-25T14:30:14.559</span><br/><span class="lit">@2014-01T</span>
|**Time** |<span class="lit">@T12:00</span><br/><span class="lit">@T14:30:14.559</span>
{: .grid .table .table-striped}

Table 2‑E - Types of simple values that CQL supports

##### Boolean

The <span class="id">Boolean</span> type in CQL supports the logical values <span class="kw">true</span>, <span class="kw">false</span>, and <span class="kw">null</span> (meaning unknown). These values are most often encountered as the result of [Comparison Operators](#comparison-operators), and can be combined with other boolean-valued expressions using [Logical Operators](#logical-operators). Note that CQL supports three-valued logic, see the section on [Missing Information](#missing-information) in the Author's Guide, as well as the section on [Nullological Operators](03-developersguide.html#nullological-operators) in the Developer's guide for more information.

##### Integer

The <span class="id">Integer</span> type in CQL supports the representation of whole numbers, positive and negative. CQL supports a full set of [Arithmetic Operators](#arithmetic-operators) for performing computations involving whole numbers.

In addition, any operation involving <span class="id">Decimal</span> values can be used with values of type <span class="id">Integer</span> because <span class="id">Integer</span> values can always be implicitly converted to <span class="id">Decimal</span> values.

##### Decimal

The <span class="id">Decimal</span> type in CQL supports the representation of real numbers, positive and negative. As with <span class="id">Integer</span> values, CQL supports a full set of [Arithmetic Operators](#arithmetic-operators) for performing computations involving real numbers.

##### String

<span class="id">String</span> values within CQL are represented using single-quotes:

```cql
'active'
```

Note that if the value you are attempting to represent contains a single-quote, use a backslash to include it within the string in CQL:

```cql
'patient\'s condition is normal'
```

Comparison of <span class="id">String</span> values in CQL is case-sensitive, meaning that the strings 'patient' and 'Patient' are not equal:

```cql
'Patient' = 'Patient'
'Patient' != 'patient'
'Patient' ~ 'patient'
```

For case- and locale-insensitive comparison, locale-insensitive meaning that an operator will behave identically for all users, regardless of their system locale settings, use the equivalent (<span class="sym">~</span>) operator. Note that string equivalence will also "normalize whitespace", meaning that all whitespace characters are treated as equivalent.

{: #date-datetime-and-time}
##### Date, DateTime, and Time

CQL supports the representation of <span class="id">Date</span>, <span class="id">DateTime</span>, and <span class="id">Time</span> values.

A syntax diagram of a <span class="id">Date, DateTime and Time</span> format can be seen [here](19-l-cqlsyntaxdiagrams.html#DATETIME).

<span class="id">DateTime</span> values are used to represent an instant along the timeline, known to at least the year precision, and potentially to the millisecond precision. <span class="id">DateTime</span> values are specified using an at-symbol (<span class="sym">@</span>) followed by an ISO-8601 textual representation of the <span class="id">DateTime</span> value:

```cql
@2014-01-25T14:30
@2014-01-25T14:30:14.559
```

<span class="id">Date</span> values are used to represent only dates on a calendar, irrespective of the time of day. <span class="id">Date</span> values are specified using an at-symbol (<span class="sym">@</span>) followed by an ISO-8601 textual representation of the <span class="id">Date</span> value:

```cql
@2014-01-25
```

Note that the <span class="id">Date</span> value literal format is identical to the date value portion of the <span class="id">DateTime</span> literal format.

<span class="id">Time</span> values are used to represent a time of day, independent of the date. <span class="id">Time</span> value must be known to at least the hour precision, and potentially to the millisecond precision. <span class="id">Time</span> values are specified using an at-symbol with a capital T (<span class="sym">@T</span>) followed by an ISO-8601 textual representation of the <span class="id">Time</span> value:

```cql
@T12:00
@T14:30:14.559
```

Note that the <span class="id">Time</span> value literal format is identical to the time value portion of the <span class="id">DateTime</span> literal format.

Only <span class="id">DateTime</span> values may specify a timezone offset, either as UTC (<span class="sym">Z</span>), or as a timezone offset. If no timezone offset is specified, the timezone offset of the evaluation request timestamp is used.

For both <span class="id">DateTime</span> and <span class="id">Time</span> values, although the milliseconds are specified with a separate component, seconds and milliseconds are combined and represented as a <span class="id">Decimal</span> for the purposes of comparison, duration, and difference calculation. In other words, when performing comparisons or calculations for precisions of seconds and above, if milliseconds are not specified, the calculation should be performed as though milliseconds had been specified as <span class="lit">0</span>.

For more information on the use of date and time values within CQL, refer to the [Date and Time Operators](#date-and-time-operators) section.

Specifically, because <span class="id">Date</span>, <span class="id">DateTime</span>, and <span class="id">Time</span> values may be specified to varying levels of precisions, operations such as comparison and duration calculation may result in <span class="kw">null</span>, rather than the <span class="kw">true</span> or <span class="kw">false</span> that would result from the same operation involving fully specified values. For a discussion of the effect of imprecision on date and time operations, refer to the [Comparing Dates and Times](#comparing-dates-and-times) section.

#### Clinical Values

In addition to simple values, CQL supports some types of values that are specific to the clinical quality domain. For example, CQL supports _codes_, _concepts_, _quantities_, _ratios_, and _valuesets_.

##### Quantities

A quantity is a number with an associated unit. For example:

```cql
6 'gm/cm3'
80 'mm[Hg]'
3 months
```

The number portion of a quantity can be an <span class="id">Integer</span> or <span class="id">Decimal</span>, and the unit portion is a (single-quoted) <span class="id">String</span> representing a valid [Unified Code for Units of Measure (UCUM)](http://unitsofmeasure.org/ucum.html) unit or calendar duration keyword, singular or plural. To avoid the possibility of ambiguity, UCUM codes shall be specified using the case-sensitive (c/s) form.

For time-valued quantities, in addition to the definite duration UCUM units, CQL defines calendar duration keywords for calendar duration units:

|Calendar Duration |Unit Representation |Relationship to Definite Duration UCUM Unit
|----|----|----
|`year`/`years` |`'year'` |`~ 1 'a'`
|`month`/`months` |`'month'` |`~ 1 'mo'`
|`week`/`weeks` |`'week'` |`= 1 'wk'`
|`day`/`days` |`'day'` |`= 1 'd'`
|`hour`/`hours` |`'hour'` |`= 1 'h'`
|`minute`/`minutes` |`'minute'` |`= 1 'min'`
|`second`/`seconds` |`'second'` |`= 1 's'`
|`millisecond`/`milliseconds` |`'millisecond'` |`= 1 'ms'`
{: .grid .table .table-striped}

Durations above days (and weeks) are calendar durations that are not comparable with definite quantity UCUM duration units.

For example, the following quantities are _calendar duration_ quantities:

```cql
1 year
4 days
```

Whereas the following quantities are _definite duration_ quantities:

```cql
1 'a'
4 'd'
```

The table above defines the equality/equivalence relationship between calendar and definite duration quantities. For example, `1 year` is not _equal_ (`=`) to `1 'a'` (defined in UCUM as 365.25 'd'), but it is _equivalent_ (`~`) to `1 'a'`.

> For all but years and months, calendar durations are both equal and equivalent to the corresponding UCUM definite-time duration unit. Note that due to the possibility of leap seconds, this is not totally accurate, however, for practical reasons, implementations typically ignore leap seconds when performing date/time arithmetic.
{: .note-info}

For a discussion of the operations available for quantities, see the [Quantity Operators](#quantity-operators) section.

##### Ratios

A ratio is a relationship between two quantities, expressed in CQL using standard mathematical notation:

```cql
1:128
5 'mg' : 10 'mL'
```

For a discussion of the operations available for ratios, see the [Ratio Operators](#ratio-operators) section.

##### Code

The use of codes to specify meaning within clinical data is ubiquitous. CQL therefore supports a top-level construct for dealing with codes using a structure called <span class="id">Code</span> that is consistent with the way terminologies are typically represented.

The <span class="id">Code</span> type has the following elements:

<a name="table-2-f"></a>

|Name |Type |Description
|----|----|----
|**code** |<span class="id">String</span> |The actual code within the code system.
|**display** |<span class="id">String</span> |A description of the code.
|**system** |<span class="id">String</span> |The identifier of the code system.
|**version** |<span class="id">String</span> |The version of the code system.
{: .grid .table .table-striped}

Table 2‑F - Elements that make up a <span class="kw">code</span> type

A syntax diagram of a <span class="id">Code</span> declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#codeDefinition).

The following examples illustrate the code declaration:

```cql
codesystem "LOINC": 'http://loinc.org'

code "Blood pressure": '55284-4' from "LOINC" display 'Blood pressure'
code "Systolic blood pressure": '8480-6' from "LOINC" display 'Systolic blood pressure'
code "Diastolic blood pressure": '8462-4' from "LOINC" display 'Diastolic blood pressure'
```

The above declarations can be referenced directly or within a [retrieve expression](#filtering-with-terminology).

A syntax diagram of a <span class="id">Code</span> referencing an existing code can be seen [here](19-l-cqlsyntaxdiagrams.html#codeSelector).

In addition, CQL provides a <span class="id">Code</span> literal that can be used to reference an existing code from a specific code system.

For example

```cql
Code '66071002' from "SNOMED-CT" display 'Type B viral hepatitis'
```

The example specifies the code <span class="lit">'66071002'</span> from a previously defined <span class="id">"SNOMED-CT:2014"</span> codesystem, which specifies both the <span class="id">system</span> and <span class="id">version</span> of the resulting code. Note that the <span class="kw">display</span> clause is optional. Note that code literals are allowed in CQL for completeness. In general, authors should use code declarations rather than code literals when using codes directly.

This use of code declarations to reference a single code in a CQL expression is referred to as a _direct reference code_:

```cql
code "Discharge to home for hospice care (procedure)": '428361000124107' from "SNOMEDCT"

define "Encounters Discharged to Hospice":
  "Encounters" E where E.dischargeDisposition ~ "Discharge to home for hospice care (procedure)"
```

Note the use of the _equivalent_ operator (`~`) rather than _equality_ (`=`). For codes, equivalence tests only that the code system and code are the same, but does not check the code system version.

Although CQL supports both version-specific and version-independent specification of and comparison to direct reference codes, artifact authors should use version-independent direct reference codes and comparisons unless there is a specific reason not to (such as the code is retired in the current version). Even when using version-specific direct reference codes, authors should use equivalence for the comparison (again, unless there is a specific reason to use version-specific comparison with equality).

When using direct reference codes, authors should use the name of the code as defined externally to avoid introducing any potential confusion of meaning.

> Using direct-reference codes can be more difficult for implementations to map to local settings, because modification of the codes for local usage may require modification of the CQL, as opposed to the use of a value set which many systems already have support for mapping to local codes.
{: .note-warning}

##### Concept

Within clinical information, multiple terminologies can often be used to code for the same concept. As such, CQL defines a top-level construct called <span class="id">Concept</span> that allows for multiple codes to be specified.

The <span class="id">Concept</span> type has the following elements:

<a name="table-2-g"></a>

|Name |Type |Description
|----|----|----
|**codes** |<span class="id">List\<Code></span> |The list of semantically equivalent codes representing the concept.
|**display** |<span class="id">String</span> |A description of the concept.
{: .grid .table .table-striped}

Table 2‑G - Elements that make up a <span class="kw">Concept</span> type

> Note that the semantics of <span class="id">Concept</span> are such that the codes within a given concept should be semantically _about_ the same concept (e.g. the same concept represented in different code systems, or the same concept from the same code system represented at different levels of detail), but CQL itself will make no attempt to ensure that is the case. Concepts should never be used as a surrogate for proper valueset definition.
{: .note-warning}

The following example illustrates the concept declaration:

```cql
codesystem "SNOMED-CT": 'urn:oid:2.16.840.1.113883.6.96'
codesystem "ICD-10-CM": 'urn:oid:2.16.840.1.113883.6.90'

code "Hepatitis Type B (SNOMED)": '66071002' from "SNOMED-CT" display 'Viral hepatitis type B (disorder)'
code "Hepatitis Type B (ICD-10)": 'B18.1' from "ICD-10-CM" display 'Chronic viral hepatitis B without delta-agent'

concept "Type B Hepatitis": { "Hepatitis Type B (SNOMED)", "Hepatitis Type B (ICD-10)" } display 'Type B Hepatitis'
```

The above declaration can be referenced directly or within a [retrieve expression](#filtering-with-terminology).

A syntax diagram of a <span class="id">Concept</span> declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#conceptDefinition).

As with codes, local names for concept declarations should be consistent with external declarations to avoid introducing any confusion of meaning.

The following example illustrates the use of a <span class="id">Concept</span> literal:

```cql
Concept {
  Code '66071002' from "SNOMED-CT",
  Code 'B18.1' from "ICD-10-CM"
} display 'Type B viral hepatitis'
```

This example constructs a <span class="id">Concept</span> with display <span class="lit">'Type B viral hepatitis'</span> and code of <span class="lit">'66071002'</span>.

A syntax diagram of a <span class="id">Concept</span> literal can be seen [here](19-l-cqlsyntaxdiagrams.html#conceptSelector).

##### Valuesets

As a value, a valueset is simply a list of <span class="id">Code</span> values. However, CQL allows valuesets to be used without reference to the codes involved by declaring valuesets as a special type of value within the language.

A syntax diagram of a valueset declaration can be seen [here](19-l-cqlsyntaxdiagrams.html#valuesetDefinition).

The following example illustrates some typical valueset declarations:

```cql
valueset "Acute Pharyngitis": 'urn:oid:2.16.840.1.113883.3.464.1003.102.12.1011'
valueset "Acute Tonsillitis": 'urn:oid:2.16.840.1.113883.3.464.1003.102.12.1012'
valueset "Ambulatory/ED Visit": 'urn:oid:2.16.840.1.113883.3.464.1003.101.12.1061'
```

Each valueset declaration defines a local identifier that can be used to reference the valueset within the library, as well as the global identifier for the valueset, typically an object identifier (OID) or uniform resource identifier (URI).

These valueset identifiers can then be used throughout the library. For example:

```cql
define "Pharyngitis": [Condition: "Acute Pharyngitis"]
```

This example defines <span class="id">Pharyngitis</span> as any Condition where the code is in the <span class="id">"Acute Pharyngitis"</span> valueset.

Whenever a valueset reference is actually evaluated, the resulting _expansion set_, or list of codes, depends on the _binding_ specified by the valueset declaration. By default, all valueset bindings are _dynamic_, meaning that the expansion set should be constructed using the most current published version of the valueset.

However, CQL also allows for _static_ bindings which allow two components to be set:

1.  Version – The version of the valueset to be referenced, specified as a string.
2.  Code Systems – A list of code systems referenced by the valueset definition.

If the binding specifies a valueset version, then the expansion set must be derived from that specific version. This does not restrict the code system versions available for use, therefore more than one expansion set is possible.

If any code systems are specified, they indicate which version of the particular code system should be used when constructing the expansion set. As with valuesets, if no code system version is specified, the expansion set should be constructed using the most current published version of the codesystem. Note that if the external valueset definition explicitly states that a particular version of a code system should be used, then it is an error if the code system version specified in the CQL static binding does not match the code system version specified in the external valueset definition. To create a reliable static binding where only one value set expansion set is possible, both the value set version and the code system versions should be specified.

The following example illustrates the use of static binding based only on the version of the valueset:

```cql
valueset "Diabetes": 'urn:oid:2.16.840.1.113883.3.464.1003.103.12.1001' version '20140501'
```

The next example illustrates a static binding based on both the version of the valueset, as well as the versions of the code systems within the valueset:

```cql
codesystem "SNOMED-CT:2013-09": 'urn:oid:2.16.840.1.113883.6.96' version '2031-09'
codesystem "ICD-9-CM:2014": 'urn:oid:2.16.840.1.113883.6.103' version '2014'
codesystem "ICD-10-CM:2014": 'urn:oid:2.16.840.1.113883.6.90' version '2014'

valueset "Diabetes": 'urn:oid:2.16.840.1.113883.3.464.1003.103.12.1001' version '20140501'
  codesystems { "SNOMED-CT:2013-09", "ICD-9-CM:2014", "ICD-10-CM:2014" }
```

When using value set declarations, authors should use the name of the value set as defined externally to avoid introducing any potential confusion of meaning. One exception to this is when different value sets are defined with the same name in an external repository, in which case some additional aspect is required to ensure uniqueness of the names within the CQL library.
See the [Terminology Operators](#terminology-operators) section for more information on the use of valuesets within CQL.

##### Codesystems

In addition to their use as part of valueset definitions, codesystem definitions can be referenced directly within an expression, just like valueset definitions. See the [Valuesets](#valuesets) section for an example of a codesystem declaration.

For example:

```cql
codesystem "LOINC": 'http://loinc.org'

define "LOINC Observations": [Observation: "LOINC"]
```

The above example retrieves all observations coded using LOINC codes.

See the [Terminology Operators](#terminology-operators) section for more information on the use of codesystems within CQL.

{: #structured-values-tuples}
#### Structured Values (Tuples)

Structured values, or _tuples_, are values that contain named elements, each having a value of some type. Clinical information such as a Medication, a Condition, or an Encounter is represented using tuples.

For example, the following expression retrieves the first Condition with a code in the <span class="id">"Acute Pharyngitis"</span> valueset for a patient:

```cql
define "FirstPharyngitis":
  First([Condition: "Acute Pharyngitis"] C sort by onsetDateTime desc)
```

The values of the elements of a tuple can be accessed using a dot qualifier (<span class="sym">.</span>) followed by the name of the element:

```cql
define "PharyngitisOnSetDateTime": FirstPharyngitis.onsetDateTime
```

Tuples can also be constructed directly using a tuple selector.

A syntax diagram of a _tuple_ selector can be seen [here](19-l-cqlsyntaxdiagrams.html#tupleSelector).

For example:

```cql
define "Info": Tuple { Name: 'Patrick', DOB: @2014-01-01 }
```

If the tuple is of a specific type, the name of the type can be used instead of the Tuple keyword:

```cql
define "PatientExpression": Patient { Name: 'Patrick', DOB: @2014-01-01 }
```

If the name of the type is specified, the tuple selector may only contain elements that are defined on the type, and the expressions for each element must evaluate to a value of the defined type for the element. Any elements defined in the class but not present in the selector will be <span class="kw">null</span>.

Note that tuples can contain other tuples, as well as lists:

```cql
define "Info":
  Tuple {
    Name: 'Patrick',
    DOB: @2014-01-01,
    Address: Tuple { Line1: '41 Spinning Ave', City: 'Dayton', State: 'OH' },
    Phones: { Tuple { Number: '202-413-1234', Use: 'Home' } }
  }
```

Accordingly, element access can nest as deeply as necessary:

```cql
Info.Address.City
```

This accesses the <span class="id">City</span> element of the <span class="id">Address</span> element of <span class="id">Info</span>. Lists can be traversed within element accessors using the list indexer (<span class="sym">[]</span>):

```cql
Info.Phones[0].Number
```

This accesses the <span class="id">Number</span> element of the first element of the <span class="id">Phones</span> list within <span class="id">Info</span>.

In addition, to simplify path traversal for models that make extensive use of list-valued attributes, the indexer can be omitted:

```cql
Info.Phones.Number
```

The result of this invocation is a list containing the <span class="id">Number</span> elements of all the <span class="id">Phones</span> within <span class="id">Info</span>.

##### Missing Information

Because clinical information is often incomplete, CQL provides a special construct, <span class="kw">null</span>, to represent an _unknown_ or missing value or result. For example, the admission date of an encounter may not be known. In that case, the result of accessing the <span class="id">admissionDate</span> element of the Encounter tuple is <span class="kw">null</span>.

In order to provide consistent behavior in the presence of missing information, CQL defines <span class="kw">null</span> behavior for all operations. For example, consider the following expression:

```cql
define "PharyngitisOnSetDateTime": FirstPharyngitis.onsetDateTime
```

If the onsetDateTime is not present, the result of this expression is <span class="kw">null</span>. Furthermore, nulls will in general _propagate_, meaning that if the result of <span class="id">FirstPharyngitis</span> is <span class="kw">null</span>, the result of accessing the <span class="id">onsetDateTime</span> element is also <span class="kw">null</span>.

For more information on missing information, see the [Nullological Operators](03-developersguide.html#nullological-operators) section.

#### List Values

CQL supports the representation of lists of any type of value (including other lists).  Although some operations may result in lists containing mixed types, in normal use cases, lists contain items that are all of the same type.

Lists can be constructed directly, as in:

```cql
{ 1, 2, 3, 4, 5 }
```

But more commonly, lists of tuples are the result of retrieve expressions. For example:

```cql
[Condition: code in "Acute Pharyngitis"]
```

This expression results in a list of tuples, where each tuple’s elements are determined by the data model in use.

Lists in CQL use zero-based indexes, meaning that the first element in a list has index 0. For example, given the list of integers:

```cql
{ 6, 7, 8, 9, 10 }
```

The first element is 6 and has index 0, the second element is 7 and has index 1, and so on.

Note that in general, clinical data may be expected to contain various types of collections such as sets, bags, lists, and arrays. For simplicity, CQL deals with all collections using the same collection type, the _list_, and provides operations to enable dealing with different collection types. For example, a set is a list where each element is unique, and any given list can be converted to a set using the <span class="kw">distinct</span> operator.

For a description of the distinct operator, as well as other operations that can be performed with lists, refer to the [List Operators](#list-operators) section.

#### Interval Values

CQL supports the representation of intervals, or ranges, of values of various types. In particular, intervals of date and time values, and ranges of integers and reals.

Intervals in CQL are represented by specifying the low and high points of the <span class="id">Interval</span> and whether the boundary is inclusive (meaning the boundary point is part of the interval) or exclusive (meaning the boundary point is excluded from the interval). Following standard mathematics notation, inclusive (closed) boundaries are indicated with square brackets, and exclusive (open) boundaries are indicated with parentheses.

A syntax diagram of an <span class="id">Interval</span> construct can be seen [here](19-l-cqlsyntaxdiagrams.html#intervalSelector).

For example:

```cql
Interval[3, 5)
```

This expression results in an <span class="id">Interval</span> that contains the integers 3 and 4, but not 5.

```cql
Interval[3.0, 5.0)
```

This expression results in an <span class="id">Interval</span> that contains all the real numbers <span class="sym">>=</span> 3.0 and <span class="sym">&lt;</span> 5.0.

Intervals can be constructed based on any type that supports unique and ordered comparison. For example:

```cql
Interval[@2014-01-01T00:00:00.0, @2015-01-01T00:00:00.0)
```

This expression results in an <span class="id">Interval</span> that begins at midnight on January 1, 2014, ends just before midnight on December 31, 2014 and is equivalent to the following interval:

```cql
Interval[@2014-01-01T00:00:00.0, @2014-12-31T23:59:59.999]
```

Furthermore, take the following example:

```cql
Interval[@2014-01-01, @2015-01-01)
```

This expression results in an <span class="id">Interval</span> that begins on January 1, 2014 at an undefined time, ends at an undefined time on December 31, 2014 and is equivalent to the following interval:

```cql
Interval[@2014-01-01, @2014-12-31]
```

Note that the ending boundary must be greater than or equal to the starting boundary to construct a valid interval. Attempting to specify an invalid <span class="id">Interval</span> will result in a run-time error. For example:

```cql
Interval[1, -1] // Invalid interval, this will result in an error
```

It is valid to construct an <span class="id">Interval</span> with the same start and end boundary, so long as the boundaries are inclusive:

```cql
Interval[1, 1] // Unit interval containing only the point 1
Interval[1, 1) // Invalid interval, conflicting to say it both includes and excludes 1
```

Such an <span class="id">Interval</span> contains only a single point and can be called a _unit interval_. For unit intervals, the <span class="kw">point from</span> operator can be used to extract the single point from the interval. Attempting to use <span class="kw">point from</span> on a non-unit-interval will result in a run-time error.

```cql
point from Interval[1, 1] // Results in 1
point from Interval[1, 5] // Invalid extractor, this will result in an error
```

### Operations

In addition to retrieving clinical information about a patient or set of patients, the expression of clinical knowledge artifacts often involves the use of various operations such as comparison, logical operations such as <span class="kw">and</span> and <span class="kw">or</span>, computation, and so on. To ensure that the language can effectively express a broad range of knowledge artifacts, CQL includes a comprehensive set of operations. In general, these operations are all _expressions_ in that they can be evaluated to return a value of some type, and the type of that return value can be determined by examining the types of values and operations involved in the expression.

This means that for each operation, CQL defines the number and type of each input (_argument_) to the operation and the type of the result, given the types of each argument.

The following sections define the operations that can be used within CQL, divided into semantically related categories.

#### Comparison Operators

For all the comparison operators, the result type of the operation is <span class="id">Boolean</span>, meaning they may result in <span class="kw">true</span>, <span class="kw">false</span>, or <span class="kw">null</span> (meaning _unknown_). In general, if either or both of the values being compared is <span class="kw">null</span>, the result of the comparison is <span class="kw">null</span>.

The most basic operation in CQL involves comparison of two values. This is accomplished with the built-in comparison operators:

<a name="table-2-h"></a>

|Operator |Name |Description
|----|----|----
|**=** |Equality |Returns <span class="kw">true</span> if the arguments are the same value. Returns <span class="kw">false</span> if arguments are not the same value. Returns <span class="kw">null</span> if either or both arguments are <span class="kw">null</span>
|**!=** |Inequality |Returns <span class="kw">true</span> if the arguments are not the same value. Returns <span class="kw">false</span> if the arguments are the same value. Returns <span class="kw">null</span> if either or both arguments are <span class="kw">null</span>
|**>** |Greater than |Returns <span class="kw">true</span> if the left argument is greater than the right argument. Returns <span class="kw">false</span> if the left argument is less than the right argument, or if the arguments are the same value. Returns <span class="kw">null</span> if either or both arguments are <span class="kw">null</span>
|**<** |Less than |Returns <span class="kw">true</span> if the left argument is less than the right argument. Returns <span class="kw">false</span> if the left argument is greater than the right argument, or if the arguments are the same value. Returns <span class="kw">null</span> if either or both arguments are <span class="kw">null</span>
|**>=** |Greater than or equal |Returns <span class="kw">true</span> if the left argument is greater than or equal to the right argument. Returns <span class="kw">false</span> if the left argument is less than the right argument. Returns <span class="kw">null</span> if either or both arguments are <span class="kw">null</span>
|**\<=** |Less than or equal |Returns <span class="kw">true</span> if the left argument is less than or equal to the right argument. Returns <span class="kw">false</span> if the left argument is greater than the right argument. Returns <span class="kw">null</span> if either or both arguments are <span class="kw">null</span>
|**between** | |Returns <span class="kw">true</span> if the first argument is greater than or equal to the second argument, and less than or equal to the third argument. Returns <span class="kw">false</span> if the first argument is less than the second argument or greater than the third argument. Returns <span class="kw">null</span> if any or all arguments are <span class="kw">null</span>.
|**~** |Equivalent |Returns <span class="kw">true</span> if the arguments are equivalent in value, or are both <span class="kw">null</span>; otherwise <span class="kw">false</span>
|**!~** |Inequivalent |Returns <span class="kw">true</span> if the arguments are not equivalent and <span class="kw">false</span> otherwise.
{: .grid .table .table-striped}

Table 2‑H - The built-in comparison operators that CQL provides

In general, the equality and inequality operators can be used on any type of value within CQL, but both arguments must be the same type. For example, the following equality comparison is legal, and returns <span class="kw">true</span>:

```cql
5 = 5
```

However, the following equality comparison is invalid because numbers and strings cannot be meaningfully compared:

```cql
5 = 'completed'
```

Attempting to compare numbers and strings as in this example will result in an error message indicating that there is no equality (<span class="sym">=</span>) operator available to compare numbers and strings.

For <span class="id">Decimal</span> values, equality is defined to ignore trailing zeroes.

For <span class="id">Date</span> and <span class="id">Time</span> values, equality is defined to account for the possibility that the <span class="id">Date</span> and <span class="id">Time</span> values involved are specified to varying levels of precision. For a complete discussion of this behavior, refer to [Comparing Dates and Times](#comparing-dates-and-times).

For structured values, equality returns <span class="kw">true</span> if the values being compared are the same type (meaning they have the same types of elements) and the values for all elements that have values are the same value. For example, the following comparison returns <span class="kw">true</span>:

```cql
Tuple { id: 'ABC-001', name: 'John Smith' } = Tuple { id: 'ABC-001', name: 'John Smith' }
```

As another example, if one tuple has a value for an element that is not present in the other tuple, the result is <span class="kw">null<span>:

```cql
Tuple { x: 1, y: 1 } = Tuple { x: 1, y: null }
```

As well, tuple equality is defined as a conjunction of equality comparisons of the elements, allowing for known unequal values to be determined. For example, the following comparison returns <span class="kw">false</span> because the y elements are known unequal:

```cql
Tuple { x: 1, y: 1 } = Tuple { x: null, y: 2 }
```

For lists, equality returns <span class="kw">true</span> if the lists contain the same elements in the same order. For example, the following lists are equal:

```cql
{ 1, 2, 3, 4, 5 } = { 1, 2, 3, 4, 5 }
```

And the following lists are not equal:

```cql
{ 1, 2, 3, 4, 5 } != { 5, 4, 3, 2, 1 }
```

Note that in the above example, if the second list was sorted ascending prior to the comparison, the result would be <span class="kw">true</span>.

For intervals, equality returns <span class="kw">true</span> if the intervals use the same point type and cover the same range. For example:

```cql
Interval[1,5] = Interval[1,6)
```

This returns <span class="kw">true</span> because the intervals cover the same set of points, 1 through 5.

The relative comparison operators (<span class="sym">></span>, <span class="sym">>=</span>, <span class="sym">&lt;</span>, <span class="sym">\<=</span>) can be used on types of values that have a natural ordering such as numbers, strings, and dates.

The <span class="kw">between</span> operator is shorthand for comparison of an expression against an upper and lower bound. For example:

```cql
4 between 2 and 8
```

This expression is equivalent to:

```cql
4 >= 2 and 4 <= 8
```

For all the comparison operators, the result type of the operation is <span class="id">Boolean</span>. Note that because CQL uses three-valued logic, if either or both of the arguments is <span class="kw">null</span>, the result of the comparison is <span class="kw">null</span> (meaning _unknown_). This is true for all the comparison operators except equivalent (<span class="sym">~</span>) and not equivalent (<span class="sym">!~</span>). The equivalent operator is generally the same as equality, except that it returns <span class="kw">true</span> if both of the arguments are <span class="kw">null</span>, and <span class="kw">false</span> if one argument is <span class="kw">null</span> and the other is not:

```cql
define "NullEqualityTest": 1 = null
define "NullEquivalenceTest": 1 ~ null
```

The expression <span class="id">NullEqualityTest</span> results in <span class="kw">null</span>, whereas the expression <span class="id">NullEquivalenceTest</span> results in <span class="kw">false</span>.

In addition, equivalence is defined more loosely than equality for some types:

* For <span class="id">String</span> values, equivalence ignores case, locale, and whitespace.
* For <span class="id">Decimal</span> values, equivalence means the values are the same to the precision of the least precise value being compared.
* For <span class="id">Quantity</span> values, equivalence means the values are the same, allowing for unit conversion.
* For <span class="id">Ratio</span> values, equivalence means the values represent the same ratio.
* For <span class="id">DateTime</span>, <span class="id">Date</span>, and <span class="id">Time</span> values, equivalence is the same as equality except it will return <span class="kw">false</span> instead of <span class="kw">null</span> if the values being compared have differing precisions.
* For <span class="id">Code</span> values, equivalence means the values have the same system and code.
* For <span class="id">Concept</span> values, equivalence means the values have at least one equivalent code.

For more detail, see the definitions of [Equal](09-b-cqlreference.html#equal) and [Equivalent](09-b-cqlreference.html#equivalent) in the CQL reference.

#### Logical Operators

Combining the results of comparisons and other boolean-valued expressions is essential and is performed in CQL using the following logical operations:

<a name="table-2-i"></a>

|Operator |Description
|----|----
|**and** |Logical conjunction
|**or** |Logical disjunction
|**xor** |Exclusive logical disjunction
|**not** |Logical negation
{: .grid .table .table-striped}

Table 2‑I - Logical operations that CQL provides

The following examples illustrate some common uses of logical operators:

```cql
AgeInYears() >= 18 and AgeInYears() < 24
INRResult > 5 or DischargedOnOverlapTherapy
```

Note that all these operators are defined using three-valued logic, which is defined specifically to ensure that certain well-established relationships that hold in standard <span class="id">Boolean</span> (two-valued) logic also hold. The complete semantics for each operator are described in the [Logical Operators](09-b-cqlreference.html#logical-operators-3) section of [Appendix B – CQL Reference](09-b-cqlreference.html).

> To ensure that CQL expressions can be freely rewritten by underlying implementations, there is no expectation that an implementation respect short-circuit evaluation, short circuit evaluation meaning that an expression stops being evaluated once the outcome is determined. With regard to performance, implementations may use short-circuit evaluation to reduce computation, but authors should not rely on such behavior, and implementations must not change semantics with short-circuit evaluation. If a condition is needed to ensure correct evaluation of a subsequent expression, the <span class="kw">if</span> or <span class="kw">case</span> expressions should be used to guarantee that the condition determines whether evaluation of an expression will occur at run-time.
{: .note-info}

#### Arithmetic Operators

The expression of clinical logic often involves numeric computation, and CQL provides a complete set of arithmetic operations for expressing computational logic. In general, these operators have the standard semantics for arithmetic operators, with the general caveat that unless otherwise stated in the documentation for a specific operation, if any argument to an operation is <span class="kw">null</span>, the result is <span class="kw">null</span>. In addition, calculations that cause arithmetic overflow or underflow, or otherwise cannot be performed (such as division by 0) will result in <span class="kw">null</span>, rather than a run-time error.

The following table lists the arithmetic operations available in CQL:

<a name="table-2-j"></a>

|Operator |Name |Description
|----|----|----
|**+** |addition |Performs numeric addition of its arguments
|**-** |subtraction |Performs numeric subtraction of its arguments
|**\*** |multiply |Performs numeric multiplication of its arguments
|**/** |divide |Performs numeric division of its arguments
|**div** |truncated divide |Performs integer division of its arguments
|**mod** |modulo |Computes the remainder of the integer division of its arguments
|**Ceiling** | |Returns the first integer greater than or equal to its argument
|**Floor** | |Returns the first integer less than or equal to its argument
|**Truncate** | |Returns the integer component of its argument
|**Abs** | |Returns the absolute value of its argument
|**-** |negate |Returns the negative value of its argument
|**Round** | |Returns the nearest numeric value to its argument, optionally specified to a number of decimal places for rounding
|**Ln** |natural logarithm |Computes the natural logarithm of its argument
|**Log** |logarithm |Computes the logarithm of its first argument, using the second argument as the base
|**Exp** |exponent |Raises e to the power given by its argument
|**^** |exponentiation |Raises the first argument to the power given by the second argument
{: .grid .table .table-striped}

Table 2‑J - Arithmetic operations that CQL provides


#### <a name="datetime-operators"></a>Date and Time Operators

Operations on date and time data are an essential component of expressing clinical knowledge, and CQL provides a complete set of date and time operators. These operators broadly fall into five categories:

* Construction – Building or selecting specific <span class="id">Date</span> and <span class="id">Time</span> values
* Comparison – Comparing <span class="id">Date</span> and <span class="id">Time</span> values
* Extraction – Extracting specific components from <span class="id">Date</span> and <span class="id">Time</span> values
* Arithmetic – Performing <span class="id">Date</span> and <span class="id">Time</span> arithmetic
* Duration – Computing durations between <span class="id">Date</span> and <span class="id">Time</span> values
* Difference - Computing the difference between <span class="id">Date</span> and <span class="id">Time</span> values

{: #constructing-datetime-values}
##### Constructing Date and Time Values

In addition to the literals described in the Date, DateTime, and Time section, the <span class="id">Date</span>, <span class="id">DateTime</span>, and <span class="id">Time</span> operators allow for the construction of specific <span class="id">Date</span> and <span class="id">Time</span> values based on the values for their components. For example:

```cql
Date(2014, 7, 5)
DateTime(2014, 7, 5, 4, 0, 0, 0, -7)
```

The first example constructs the <span class="id">Date</span> July 5, 2014. The second example constructs a <span class="id">DateTime</span> of July 5, 2014, 04:00:00.0 UTC-07:00 (Mountain Standard Time).

The <span class="id">DateTime</span> operator takes the following arguments:

<a name="table-2-k"></a>

|Name |Type |Description
|----|----|----
|**Year** |<span class="id">Integer</span> |The year component of the <span class="id">DateTime</span>
|**Month** |<span class="id">Integer</span> |The month component of the <span class="id">DateTime</span>
|**Day** |<span class="id">Integer</span> |The day component of the <span class="id">DateTime</span>
|**Hour** |<span class="id">Integer</span> |The hour component of the <span class="id">DateTime</span>
|**Minute** |<span class="id">Integer</span> |The minute component of the <span class="id">DateTime</span>
|**Second** |<span class="id">Integer</span> |The second component of the <span class="id">DateTime</span>
|**Millisecond** |<span class="id">Integer</span> |The millisecond component of the <span class="id">DateTime</span>
|**Timezone Offset** |<span class="id">Decimal</span> |The timezone offset component of the <span class="id">DateTime</span> (in hours)
{: .grid .table .table-striped}

Table 2‑K - The arguments that the <span class="kw">DateTime</span> operator takes

The <span class="id">Date</span> operator takes only the first three arguments: Year, Month, and Day.

At least one component other than timezone offset must be provided, and for any particular component that is provided, all the components of broader precision must be provided. For example:

```cql
Date(2014)
Date(2014, 7)
Date(2014, 7, 11)
Date(null, null, 11) // invalid
```

The first three expressions above are valid, constructing dates with a specified precision of years, months, and days, respectively. However, the fourth expression is invalid, because it attempts to create a date with a day but no year or month component.

The only component that is ever defaulted is the timezone offset component. If no timezone offset component is supplied, the timezone offset component is defaulted to the timezone offset of the timestamp associated with the evaluation request.

The <span class="id">Time</span> operator takes the following arguments:

<a name="table-2-l"></a>

|Name |Type |Description
|----|----|----
|**Hour** |<span class="id">Integer</span> |The hour component of the <span class="id">DateTime</span>
|**Minute** |<span class="id">Integer</span> |The minute component of the <span class="id">DateTime</span>
|**Second** |<span class="id">Integer</span> |The second component of the <span class="id">DateTime</span>
|**Millisecond** |<span class="id">Integer</span> |The millisecond component of the <span class="id">DateTime</span>
{: .grid .table .table-striped}

Table 2‑L - The arguments that the <span class="kw">Time</span> operator takes

As with the <span class="id">Date</span> and <span class="id">DateTime</span> operators, at least the first component must be supplied, and for any particular component that is provided, all components of broader precision must be provided. For <span class="id">DateTime</span>, if timezone offset is not supplied, it will be defaulted to the timezone offset of the timestamp associated with the evaluation request.

In addition to the ability to construct specific dates and times using components, CQL supports three operators for retrieving the current date and time:

<a name="table-2-m"></a>

|Operator |Description
|----|----
|**Now** |Returns the date and time of the start timestamp associated with the evaluation request
|**Today** |Returns the date (with no time components) of the start timestamp associated with the evaluation request
|**TimeOfDay** |Returns the time-of-day of the start timestamp associated with the evaluation request
{: .grid .table .table-striped}

Table 2‑M - The operators that CQL supports for retrieving the current date and time

The current date and time operators are defined based on the timestamp of the evaluation request for two reasons:

1.  The operations will always return the same value during any given evaluation request, ensuring that the result of an expression containing Now(), Today(), or TimeOfDay() will always return the same result within the same evaluation (determinism).
2.  The operations are based on the timestamp associated with the evaluation request, allowing the evaluation to be performed with the same timezone information as the data delivered with the evaluation request.

By defining the <span class="id">DateTime</span> construction operators in this way, most clinical logic can ignore timezone offset information, and the logic will be evaluated with the expected semantics. However, if timezone offset information is relevant to a particular calculation, it can still be accessed as a component of each <span class="id">DateTime</span> value.

In addition, all operations on <span class="id">DateTime</span> values are defined to take timezone offset information into account, ensuring that <span class="id">DateTime</span> operations perform correctly and consistently.

As discussed in the [Quantities](#quantities) section above, CQL supports the construction of time durations using the name of the precision as the unit for a quantity. For example:

```cql
3 months
1 year
5 minutes
```

Valid time duration units are:

```cql
year
years
month
months
week
weeks
day
days
hour
hours
minute
minutes
second
seconds
millisecond
milliseconds
```

Note that CQL supports both plural and singular duration units to allow for the most natural expression, but that no attempt is made to enforce singular or plural usage.

As noted in the [Quantities](#quantities) section, UCUM time-period units can be used to express definite-duration quantities. However, definite-duration time-period units above days (and weeks) cannot appear in date and time arithmetic calculations. See the [Date and Time Arithmetic](#datetime-arithmetic) section for more detailed discussion.

For a detailed discussion of calendar calculation semantics, refer to [Appendix H – Time Interval Calculation Examples](15-h-timeintervalcalculations.html).

For comparisons involving time durations (where no anchor to a calendar is available), the duration of a year is considered to be 365 days, and the duration of a month is considered to be 30 days. Duration calculations involving weeks consider a week as equivalent to 7 days.

##### Comparing Dates and Times

CQL supports comparison of <span class="id">Date</span> and <span class="id">Time</span> values using the expected comparison operators. Note however, that when <span class="id">Date</span> and <span class="id">Time</span> values are not specified completely, the result may be <span class="kw">null</span>, depending on whether there is enough information to make an accurate determination. In general, CQL treats <span class="id">Date</span> and <span class="id">Time</span> values that are only known to some specific precision as an uncertainty over the range at the first unspecified precision. For example:

```cql
Date(2014)
```

This value can be read as “some date within the year 2014”, because only the year component is known. Applying these semantics yields the intuitively correct result when comparing <span class="id">Date</span> and <span class="id">Time</span> values with varying levels of precision.

```cql
Date(2012) < Date(2014, 2, 15)
```

This example returns <span class="kw">true</span> because even though the month and day of the first date are unknown, the year, 2012, is known to be less than the year of the second date, 2014. By contrast:

```cql
Date(2015) < Date(2014, 2, 15)
```

The result in this example is <span class="kw">false</span> because the year, 2015, is not less than the year of the second date. And finally:

```cql
Date(2014) < Date(2014, 2, 15)
```

The result in this example is <span class="kw">null</span> because the first date could be any date within the year 2014, so it could be less than the second date, but it could be greater.

Note that due to variability in the way week numbers are calculated, weeks are not valid for <span class="id">Date</span> or <span class="id">DateTime</span> comparisons and will result in an error.

When comparing <span class="id">DateTime</span> values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

Date and time comparisons are performed by comparing the values at each precision, beginning with years, and proceeding to the finest precision specified in either input, with seconds and milliseconds treated as a single precision using a <span class="id">Decimal</span>. This means that if one date or time is specified to a different level of precision than the other, the result of the comparison may be <span class="kw">null</span>, or _unknown_. However, it is often the case that comparisons should only be carried to a specific level of precision. To enable this, CQL provides precision-based versions of the comparison operators:

<a name="table-2-n"></a>

|Operator |Precision-based Operator
|----|----
|**=** |<span class="kw">same as</span>
|**<** |<span class="kw">before</span>
|**>** |<span class="kw">after</span>
|**\<=** |<span class="kw">same or before</span>
|**>=** |<span class="kw">same or after</span>
{: .grid .table .table-striped}

Table 2‑N - The precision-based comparison operators for <span class="kw">Date</span> and <span class="kw">Time</span> comparisons

If no precision is specified, these operators are synonyms for the symbolic conversion operators, and the comparisons are performed in the same way (from years, or hours for <span class="id">Time</span> values, down to the finest precision specified in either input, with seconds and milliseconds treated as a single precision using a decimal). If a precision is specified, the comparison is performed beginning with years and proceeding to the specified level of precision. For example:

```cql
Date(2014) same year as Date(2014, 7, 11)
Date(2014, 7) same month as Date(2014, 7, 11)
DateTime(2014, 7, 11) same day as DateTime(2014, 7, 11, 14, 0, 0)
```

Each of these expressions returns <span class="kw">true</span> because the <span class="id">Date</span> and <span class="id">Time</span> values are equal at the specified level of precision and above. For example, <span class="kw">same month as</span> means the same year _and_ the same month.

Note that when explicitly comparing or calculating at the millisecond precision, the values are considered separated (i.e. one value having milliseconds and the other not would result in a null or uncertainty).

Note: To compare a specific component of two dates, use the extraction operators covered in the next section.

For relative comparisons involving equality, the <span class="kw">same as</span> operator is suffixed with <span class="kw">before</span> or <span class="kw">after</span>:

```cql
Date(2015) same year or after Date(2014, 7, 11)
Date(2014, 4) same month or before Date(2014, 7, 11)
DateTime(2014, 7, 15) same day or after DateTime(2014, 7, 11, 14, 0, 0)
```

Each of these expressions also returns <span class="kw">true</span>. And finally, for the relative inequalities (<span class="sym">&lt;</span> and <span class="sym">></span>):

```cql
Date(2015) after year of Date(2014, 7, 11)
Date(2014, 4) before month of Date(2014, 7, 11)
DateTime(2014, 7, 15) after day of DateTime(2014, 7, 11, 14, 0, 0)
```

Each of these expressions also returns <span class="kw">true</span>.

Note that these operators may still return <span class="kw">null</span> if the <span class="id">Date</span> and <span class="id">Time</span> values involved have unspecified components at or above the specified comparison precision. For example:

```cql
Date(2014, 7, 15) after hour of DateTime(2014, 7, 11, 14, 0, 0)
```

The result in this example is <span class="kw">null</span> because the first date has no _hour_ component.

##### Extracting Date and Time Components

Given a <span class="id">Date</span> and <span class="id">Time</span> value, CQL supports extraction of any of the components. For example:

```cql
date from X
year from X
minute from X
```

These examples extract the date from X, the year from X, and the minute from X. The following table lists the valid extraction components and their resulting types:

<a name="table-2-o"></a>

|Component |Description |Result Type
|----|----|----
|**date from X** |Extracts the date of its argument (with no time components) |<span class="id">Date</span>
|**time from X** |Extracts the time of its argument |<span class="id">Time</span>
|**year from X** |Extracts the year component its argument |<span class="id">Integer</span>
|**month from X** |Extracts the month component of its argument |<span class="id">Integer</span>
|**day from X** |Extracts the day component of its argument |<span class="id">Integer</span>
|**hour from X** |Extracts the hour component of its argument |<span class="id">Integer</span>
|**minute from X** |Extracts the minute component of its argument |<span class="id">Integer</span>
|**second from X** |Extracts the second component of its argument |<span class="id">Integer</span>
|**millisecond from X** |Extracts the millisecond component of its argument |<span class="id">Integer</span>
|**timezoneoffset from X** |Extracts the timezone offset component of its argument |<span class="id">Decimal</span>
{: .grid .table .table-striped}

Table 2‑O - The valid extraction components for extracting <span class="kw">Date</span> and <span class="kw">Time</span> components

Note specifically that `week from X` is not valid; due to variability in the way week numbers are determined, the calculation of week number is not prescribed.

Note that if X is <span class="kw">null</span>, the result is <span class="kw">null</span>. If a date and time value does not have a particular component specified, extracting that component will result in <span class="kw">null</span>. Note also that if the timezone offset component for a particular date and time value was not provided as part of the constructor, because the value is defaulted to the timezone offset of the evaluation request, the result of extracting the timezone offset component will be the timezone offset of the evaluation request, not <span class="kw">null</span>.

When extracting the <span class="id">Time</span> from a <span class="id">DateTime</span> value, implementations should normalize to the timezone offset of the evaluation request timestamp.

{: #datetime-arithmetic}
##### Date and Time Arithmetic

By using quantities of time durations, CQL supports the ability to perform calendar arithmetic with the expected semantics for durations with variable numbers of days such as months and years. The arithmetic addition and subtraction symbols (<span class="sym">+</span> and <span class="sym">-</span>) are used for this purpose. For example:

```cql
Today() - 1 year
```

The above expression computes the date one year before today, taking into account variable length years and months. Any valid time duration can be added to or subtracted from any <span class="id">Date</span> and <span class="id">Time</span> value.

Note that as with the numeric arithmetic operators, if either or both arguments are <span class="kw">null</span>, the result of the operation is <span class="kw">null</span>.

For partial date/time values where the time-valued quantity is more precise than the partial date/time, the operation is performed by converting the time-based quantity to the most precise value specified in the first argument (truncating any resulting decimal portion) and then adding it to (or subtracting it from) the first argument. For example, consider the following addition:

```cql
DateTime(2014) + 24 months
```

This example results in the value <span class="id">DateTime(2016)</span> even though the <span class="id">DateTime</span> value is not specified to the level of precision of the time-valued quantity.

Note also that this means that if decimals appear in the time-valued quantities, the fractional component will be ignored. For example:

```cql
@2016-01-01 – 1.1 years
```

Will result in the value <span class="lit">@2015-01-01</span>, the decimal component is truncated. When this decimal truncation occurs, run-time implementations should issue a warning. When it’s possible to determine at compile-time that this truncation will occur, a warning should be issued by the translator.

To avoid the potential confusion of calendar-based date/time arithmetic with definite duration date/time arithmetic, CQL defines definite-duration date/time arithmetic for seconds and below, and calendar-based date/time arithmetic for seconds and above. At the second, calendar-based and definite-duration-based date/time arithmetic are identical. Using a definite-quantity duration above days (and weeks) in a date/time arithmetic calculation will result in a run-time error.

Within CQL, calculations involving date/times and calendar durations shall use calendar semantics as specified in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html). Specifically:

<a name="table-2-p"></a>

|Date/Time Precision |Calendar Semantic Description
|----|----
|year |The year, positive or negative, is added to the year component of the date or time value. If the resulting year is out of range, an error is thrown. If the month and day of the date or time value is not a valid date in the resulting year, the last day of the calendar month is used.
|month |The month, positive or negative is divided by 12, and the integer portion of the result is added to the year component. The remaining portion of months is added to the month component. If the resulting date is not a valid date in the resulting year, the last day of the resulting calendar month is used.
|week |The week, positive or negative, is multiplied by 7, and the resulting value is added to the day component, respecting calendar month and calendar year lengths.
|day |The day, positive or negative, is added to the day component, respecting calendar month and calendar year lengths.
|hour |The hours, positive or negative, are added to the hour component, with each 24 hour block counting as a calendar day, and respecting calendar month and calendar year lengths.
|minute |The minutes, positive or negative, are added to the minute component, with each 60 minute block counting as an hour, and respecting calendar month and calendar year lengths.
|second |The seconds, positive or negative, are added to the second component, with each 60 second block counting as a minute, and respecting calendar month and calendar year lengths.
|millisecond |The milliseconds, positive or negative, are added to the millisecond component, with each 1000 millisecond block counting as a second, and respecting calendar month and calendar year lengths.
{: .grid .table .table-striped}

Table 2‑P - The ISO8601 calendar semantics that should be used for calculations involving <span class="kw">Date</span> and <span class="kw">Time</span>

> Although the CQL specification does not support arithmetic with definite quantity durations above days (and weeks), data models that use UCUM for all quantities may support implicit conversion from UCUM definite durations to calendar durations. See [Use of FHIR Quantity](http://hl7.org/fhir/fhirpath.html#quantity) for an example.
{: .note-warning}

##### Computing Durations and Differences

In addition to constructing durations, CQL supports the ability to compute duration and difference between two <span class="id">DateTimes</span>. For duration, the calculation is performed based on the calendar duration for the precision. For difference, the calculation is performed by counting the number of boundaries of the specific precision crossed between the two dates.

```cql
months between X and Y
```

This example calculates the number of months between its arguments. For variable length precisions (months and years), the operation uses the calendar length of the precision to determine the number of periods.

For example, the following expression returns 2:

```cql
months between @2014-01-01 and @2014-03-01
```

This is because there are two whole calendar months between the two dates. Fractional months are not included in the result. This means that the following expression also returns 2:

```cql
months between @2014-01-01 and @2014-03-15
```

For difference, the calculation is concerned with the number of boundaries crossed:

```cql
difference in months between X and Y
```

The above example calculates the number of month boundaries crossed between X and Y.

To illustrate the difference between the two calculations, consider the following examples:

```cql
duration in months between @2014-01-31 and @2014-02-01
difference in months between @2014-01-31 and @2014-02-01
```

The first example returns 0 because there is less than one calendar month between the two dates. The second example, however, returns 1, because a month boundary was crossed between the two dates.

The following duration units are valid for the duration and difference operators:

```cql
years
months
weeks
days
hours
minutes
seconds
milliseconds
```

If the first argument is after the second, the result will be negative.

For calculations involving weeks, Sunday is considered the first of the week for the purposes of determining boundaries, and the duration of a week is always considered to be seven (7) days.

In addition, if either date or time value involved is not specified to the level of precision for the duration or difference being calculated, the result will be an _uncertainty_ covering the range of possible values for the duration. Subsequent comparisons using this uncertainty may result in <span class="kw">null</span> rather than <span class="kw">true</span> or <span class="kw">false</span>. For a detailed discussion of the behavior of uncertainties, refer to the [Uncertainty](05-languagesemantics.html#uncertainty) section.

When computing duration or difference between <span class="id">DateTime</span> values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either or both arguments are <span class="kw">null</span>, the result is <span class="kw">null</span>.

For a detailed set of examples of calculating time intervals, please refer to [Appendix H - Time Interval Calculation Examples](15-h-timeintervalcalculations.html).

#### Timing and Interval Operators

Clinical information often contains not only date and time information as timestamps (points in time), but intervals of time, such as the effective time for an encounter or condition. Moreover, clinical logic involving this information often requires the ability to relate this temporal information. For example, a clinical quality measure might look for “patients with an inpatient encounter during which a condition started”. CQL provides an exhaustive set of operators for describing these types of temporal relationships between clinical information.

These interval operations can be broadly categorized as follows:

* General – Construction, extraction, and membership operators
* Comparison – Comparison of two intervals
* Timing – Describing the relationship between two intervals using boundaries
* Computation – Using existing intervals to compute new ones

##### Operating on Intervals

General interval operators in CQL provide basic operations for dealing with interval values, including construction, extraction, and membership.

Interval values can be constructed using the _interval selector_, as discussed in [Interval Values](#interval-values) above.

Membership testing for intervals can be done using the <span class="kw">in</span> and <span class="kw">contains</span> operators. For example:

```cql
Interval[3, 5) contains 4
4 in Interval[3, 5)
```

These two expressions are equivalent (inverse of each other) and both return <span class="kw">true</span>.

The starting and ending points for an interval can be determined using the <span class="kw">start of</span> and <span class="kw">end of</span> operators:

```cql
start of Interval[3, 5)
end of Interval[3, 5)
```

The first expression above returns 3, while the second expression returns 4.

Property expressions can also be used to access the boundary points and closed indicators for interval types using the property names low, high, lowClosed, and highClosed:

```cql
Interval[3, 5).high
Interval[3, 5).highClosed
```

The first expression above returns 5, and the second expression returns false.

To extract a point from an interval, the <span class="kw">point from</span> operator is used:

```cql
point from Interval[3, 3]
point from Interval[3, 4)
```

The two expressions are equivalent and both return 3.

Note that the <span class="kw">point from</span> operator may only be used on a _unit interval_, or an interval containing a single point. Attempting to extract a point from an interval with a size greater than one will result in a run-time error.

The starting and ending point of an interval may be <span class="kw">null</span>, the meaning of which depends on whether the interval is closed (inclusive) or open (exclusive). If a boundary point is <span class="kw">null</span> and the boundary is exclusive, the boundary is considered unknown, and represents an uncertainty between the boundary and the minimum or maximum value for the point type of the interval. In this case, operations involving that point may return <span class="kw">null</span>. For example:

```cql
Interval[3, null) contains 5
```

This expression results in <span class="kw">null</span>. However, if the point is <span class="kw">null</span> and the interval boundary is inclusive, the boundary is interpreted as the beginning or ending of the range of the point type. For example:

```cql
Interval[3, null] contains 5
```

This expression returns <span class="kw">true</span> because the <span class="kw">null</span> ending boundary is inclusive and is therefore interpreted as extending to the end of the range of possible values for the point type of the interval.

For numeric intervals, CQL defines a <span class="kw">width</span> operator, which returns the ending boundary minus the starting boundary:

```cql
width of Interval[3, 5)
width of Interval[3, 5]
```

The first expression returns 1 (ending boundary of 4, minus the starting boundary of 3), while the second expression returns 2 (ending boundary of 5, minus the starting boundary of 3).

For date and time intervals, CQL defines a <span class="kw">duration of</span> operator as well as a <span class="kw">difference of</span> operator, both of which are defined in the same way as the date and time duration and difference operators, respectively. For example:

```cql
duration in days of X
difference in days of X
```

These expressions are equivalent to:

```cql
duration in days between start of X and end of X
difference in days between start of X and end of X
```

The first expression returns the number of whole days between the starting and ending dates of the interval X, while the second expression returns the number of day boundaries crossed between the starting and ending dates of the interval X.

##### Comparing Intervals

CQL supports comparison of two interval values using a complete set of operations. The following table describes these operators with a diagram showing the relationship between two intervals that is characterized by each operation:

<a name="table-2-q"></a>
<div><img src="assets/images/image5.png" alt="assets/images/image5" width="626" height="394"/></div>

Table 2‑Q - Comparison of two interval values using a complete set of operations

Each of these operators returns <span class="kw">true</span> if the intervals X and Y are in the given relationship to each other. If either or both arguments are <span class="kw">null</span>, the result is <span class="kw">null</span>. Otherwise, the result is <span class="kw">false</span>.

In addition, CQL allows the <span class="kw">meets</span> operator to be invoked without the <span class="kw">before</span> or <span class="kw">after</span> suffix, indicating that either relationship should return <span class="kw">true</span>. In other words, X <span class="kw">meets</span> Y is equivalent to X <span class="kw">meets before</span> Y or X <span class="kw">meets after</span> Y.

The <span class="kw">overlaps</span> operator can also be invoked without the <span class="kw">before</span> or <span class="kw">after</span> suffix, indicating that any overlap should return <span class="kw">true</span>.

Note that to use these operators, the intervals must be of the same point type. For example, it is invalid to compare an interval of dates or times with an interval of numbers.

##### Timing Relationships

In addition to the interval comparison operators described above, CQL allows various timing relationships to be expressed by directly accessing the start and end boundaries of the intervals involved. For example:

```cql
X starts before start Y
```

This expression returns <span class="kw">true</span> if the start of X is before the start of Y.

In addition, timing phrases allow the use of time durations to offset the relationship. For example:

```cql
X starts 3 days before start Y
```

This returns <span class="kw">true</span> if the start of X is equal to three days before the start of Y. Timing phrases can also include <span class="kw">less than</span>, <span class="kw">more than</span>, <span class="kw">or less</span> and <span class="kw">or more</span> to determine how the time duration is interpreted. For example:

```cql
X starts 3 days or less before start Y
X starts less than 3 days before start Y
X starts 3 days or more before start Y
X starts more than 3 days before start Y
```

The first expression returns <span class="kw">true</span> if the start of X is within the interval beginning three days before the start of Y and ending just before the start of Y. The second expression returns <span class="kw">true</span> if the start of X is within the interval beginning just after three days before the start of Y and ending just before the start of Y. The third expression returns <span class="kw">true</span> if the start of X is three days or more before the start of Y. And the fourth expression returns <span class="kw">true</span> if the start of X is more than three days before the start of Y.

Timing phrases can also support inclusive comparisons using <span class="kw">on or</span> and <span class="kw">or on</span> syntax. For example:

```cql
X starts 3 days or less before or on start Y
X starts less than 3 days on or after end Y
```

The first expression returns <span class="kw">true</span> if the start of X is within the interval beginning three days before the start of Y and ending exactly on the start of Y. The second expression returns <span class="kw">true</span> if the start of X is within the interval beginning exactly on the end of Y and ending less than 3 days after the end of Y.

Note that <span class="kw">on or</span> and <span class="kw">or on</span> can be used with both <span class="kw">before</span> and <span class="kw">after</span>. This flexibility is to allow for natural phrasing.

Timing phrases also allow the use of <span class="kw">within</span> to establish a range for comparison:

```cql
X starts within 3 days of start Y
```

This expression returns <span class="kw">true</span> if the start of X is in the interval beginning three days before the start of Y and ending 3 days after the start of Y.

In addition, if either comparand is a <span class="id">Date</span> or <span class="id">Time</span> value, rather than an interval, it can be used in any of the timing phrases without the boundary access modifiers:

```cql
dateTimeX within 3 days of dateTimeY
```

In other words, the timing phrases in general compare two quantities, either of which may be an date- or time-valued interval or date or time point value, and the boundary access modifiers can be added to a given timing phrase to access the boundary of an interval.

The following table describes the operators that can be used to construct timing phrases:

<a name="table-2-r"></a>

|Operator |Beginning Boundary (starts/ends) |Ending Boundary (start/end) |Duration Offset |Or Less/<br/>Or More |Or Before/ Or After |Less Than/ More Than |Or On/ On Or
|----|----|----|----|----|----|----|----
|**same as** |yes |yes |no |no |yes |no |no
|**before** |yes |yes |yes |yes |no |yes |yes
|**after** |yes |yes |yes |yes |no |yes |yes
|**within...of** |yes |yes |required |no |no |no |no
|**during** |yes |no |no |no |no |no |no
|**includes** |no |yes |no |no |no |no |no
{: .grid .table .table-striped}

Table 2‑R - The operators that can be used to construct timing phrases

A yes in the Beginning Boundary column indicates that the operator can be preceded by <span class="kw">starts</span> or <span class="kw">ends</span> if the left comparand is an interval.

A yes in the Ending Boundary column indicates that the timing phrase can be succeeded by a <span class="kw">start</span> or <span class="kw">end</span> if the right comparand is an interval.

A yes in the duration offset column indicates that the timing phrase may include a duration offset.

A yes in the Or Less/OrMore column indicates that the timing phrase may include an <span class="kw">or less/or more</span> modifier.

A yes in the Or Before/Or After column indicates that the timing phrase may include an <span class="kw">or before/or after</span> modifier.

A yes in the Less Than/More Than column indicates that the timing phrase may include a <span class="kw">less than/more than</span> modifier.

And finally, a yes in the Or On/On Or column indicates that the timing phrase may include a <span class="kw">on or/or on</span> modifier.

In addition, to support more natural-language phrasing of timing operations, the keyword <span class="kw">occurs</span> may appear anywhere that <span class="kw">starts</span> or <span class="kw">ends</span> can appear in the timing phrase. For example:

```cql
X occurs within 3 days of start Y
```

The <span class="kw">occurs</span> keyword is both optional and ignored by CQL. It is only provided to enable more natural phrasing.

##### Computing Intervals

CQL provides several operators that can be used to combine existing intervals into new intervals. For example:

```cql
Interval[1, 3] union Interval[3, 6]
```

This expression returns the interval <span class="lit">[1, 6]</span>. Note that interval <span class="kw">union</span> is only defined if the arguments overlap or meet.

Interval <span class="kw">intersect</span> results in the overlapping portion of two intervals:

```cql
Interval[1, 4] intersect Interval[3, 6]
```

This expression results in the interval <span class="lit">[3, 4]</span>.

Interval <span class="kw">except</span> computes the difference between two intervals. In other words, the result is points in the left operand that are not in the right operand. For example:

```cql
Interval[1, 4] except Interval[3, 6]
```

This expression results in the interval <span class="lit">[1, 2]</span>. Note that <span class="kw">except</span> is only defined for cases that result in a well-formed interval. For example, if either argument properly includes the other and does not start or end it, the result of subtracting one interval from the other would be two intervals, and the result is thus not defined and results in <span class="kw">null</span>.

The following diagrams depict the <span class="kw">union</span>, <span class="kw">intersect</span>, and <span class="kw">except</span> operators for intervals:

<a name="figure-2-d"></a>
<div><img src="assets/images/image6.png" alt="assets/images/image6" width="626" height="128"/></div>

Figure 2‑D - The union, intersect, and except operators for intervals

<a name="datetime-intervals"></a>
##### Date and Time Intervals

Because CQL supports date and time values with varying levels of precision, intervals of dates and times can potentially involve imprecise date and time values. To ensure well-defined intervals and consistent semantics, date and time intervals are always considered to contain the full set of values contained by the boundaries of the interval. For example, the following interval expression contains all the instants of time, to the millisecond precision, beginning at midnight on January 1<sup>st</sup>, 2014, and ending at midnight on January 1<sup>st</sup>, 2015:

```cql
Interval[DateTime(2014, 1, 1, 0, 0, 0, 0), DateTime(2015, 1, 1, 0, 0, 0, 0)]
```

However, if the boundaries of the interval are specified to a lower precision, the interval is interpreted as beginning at some time within the most specified precision, and ending at some time within the most specified precision. For example, the following interval expression contains all the instants of time, to the millisecond precision, beginning sometime in the year 2014, and ending sometime in the year 2015:

```cql
Interval[Date(2014), Date(2015)]
```

When calculating the duration of the interval, this imprecision will in general result in an _uncertainty_, just as it does when calculating the duration between two imprecise date or time values.

In addition, the boundaries may even be specified to different levels of precision. For example, the following interval expression contains all the instants of time, to the millisecond precision, beginning sometime in the year 2014, and ending sometime on January 1<sup>st</sup>, 2015:

```cql
Interval[Date(2014), Date(2015, 1, 1)]
```

Note that when calculating duration, just like date and time comparison calculations, seconds and milliseconds are considered a single precision with decimal semantics.

#### List Operators

Clinical information is almost always stored, collected, and presented in terms of lists of information. As a result, the expression of clinical knowledge almost always involves dealing with lists of information in some way. The query construct already discussed provides a powerful mechanism for dealing with lists, but CQL also provides a comprehensive set of operations for dealing with lists in other ways. These operations can be broadly categorized into three groups:

* General List Operations – Operations for dealing with lists in general, such as constructing lists, accessing elements, and determining the number of elements
* Comparisons – Operations for comparing one list to another
* Computation – Operations for constructing new lists based on existing ones

##### Operating on Lists

Although the most common source of lists in CQL is the retrieve expression, lists can also be constructed directly using the _list selector_ discussed in List Values.

The elements of a list can be accessed using the _indexer_ (<span class="sym">[]</span>) operator. For example:

```cql
X[0]
```

This expression accesses the first element of the list X.

If a list contains a single element, <span class="kw">the singleton</span> from operator can be used to extract it:

```cql
singleton from { 1 }
singleton from { 1, 2, 3 }
```

Using <span class="kw">singleton from</span> on a list with multiple elements will result in a run-time error.

The index of an element e in a list X can be obtained using the <span class="id">IndexOf</span> operator. For example:

```cql
IndexOf({'a', 'b', 'c' }, 'b') // returns 1
```

If the element is not found in the list, <span class="id">IndexOf</span> returns -1.

In addition, the number of elements in a list can be determined using the <span class="id">Count</span> operator. For example:

```cql
Count({ 1, 2, 3, 4, 5 })
```

This expression returns the value <span class="lit">5</span>.

Membership in lists can be determined using the <span class="kw">in</span> operator and its inverse, <span class="kw">contains</span>:

```cql
{ 1, 2, 3, 4, 5 } contains 4
4 in { 1, 2, 3, 4, 5 }
```

The <span class="kw">exists</span> operator can be used to test whether a list contains any elements:

```cql
exists ( { 1, 2, 3, 4, 5 } )
exists ( { } )
```

The first expression returns <span class="kw">true</span>, while the second expression returns <span class="kw">false</span>. This is most often used in queries to determine whether a query returns any results.

The <span class="id">First</span> and <span class="id">Last</span> operators can be used to retrieve the first and last elements of a list. For example:

```cql
First({ 1, 2, 3, 4, 5 })
Last({ 1, 2, 3, 4, 5 })
First({})
Last({})
```

In the above examples, the first expression returns <span class="lit">1</span>, and the second expression returns <span class="lit">5</span>. The last two expressions both return <span class="kw">null</span> since there is no first or last element of an empty list. Note that the <span class="id">First</span> and <span class="id">Last</span> operators refer to the position of an element in the list, not the temporal relationship between elements. In order to extract the _earliest_ or _latest_ elements of a list, the list would first need to be sorted appropriately.

In addition, to provide consistent and intuitive semantics when dealing with lists, whenever an operation needs to determine whether or not a given list contains an element (including list operations discussed later such as <span class="kw">intersect</span>, <span class="kw">except</span>, and <span class="kw">distinct</span>), CQL uses equality semantics.

##### Comparing Lists

In addition to list equality, already discussed in [Comparison Operators](#comparison-operators), lists can be compared using the following operators:

<a name="table-2-s"></a>

|Operator |Description
|----|----
|**X <span class="kw">includes</span> Y** |Returns <span class="kw">true</span> if every element in list Y is also in list X, using equality semantics
|**X <span class="kw">properly includes</span> Y** |Returns <span class="kw">true</span> if every element in list Y is also in list X and list X has more elements than list Y
|**X <span class="kw">included in</span> Y** |Returns <span class="kw">true</span> if every element in list X is also in list Y, using equality semantics
|**X <span class="kw">properly included in</span> Y** |Returns <span class="kw">true</span> if every element in list X is also in list Y, and list Y has more elements than list X
{: .grid .table .table-striped}

Table 2‑S - The operators that can be used for list comparisons

```cql
{ 1, 2, 3, 4, 5 } includes { 5, 2, 3 }
{ 5, 2, 3 } included in { 1, 2, 3, 4, 5 }
{ 1, 2, 3, 4, 5 } includes { 4, 5, 6 }
{ 4, 5, 6 } included in { 1, 2, 3, 4, 5 }
```

In the above examples, the first two expressions are <span class="kw">true</span>, but the last two expressions are <span class="kw">false</span>.

The properly modifier ensures that the lists are not the same list. For example:

```cql
{ 1, 2, 3 } includes { 1, 2, 3 }
{ 1, 2, 3 } included in { 1, 2, 3 }
{ 1, 2, 3 } properly includes { 1, 2, 3 }
{ 1, 2, 3 } properly included in { 1, 2, 3 }
{ 1, 2, 3, 4, 5 } properly includes { 2, 3, 4 }
{ 2, 3, 4 } properly included in { 1, 2, 3, 4, 5 }
```

In the above examples, the first two expressions are <span class="kw">true</span>, but the next two expressions are <span class="kw">false</span>, because although each element is in the other list, the properly requires that one list be strictly larger than the other, as in the last two expressions.

Note that <span class="kw">during</span> is a synonym for <span class="kw">included in</span> and can be used anywhere included in is allowed. The syntax allows for both keywords to enable more natural phrasing of time-based relationships depending on context.

##### Computing Lists

CQL provides several operators for computing new lists from existing ones.

To eliminate duplicates from a list, use the <span class="kw">distinct</span> operator:

```cql
distinct { 1, 1, 2, 2, 3, 4, 5 }
```

This example returns:

```cql
{ 1, 2, 3, 4, 5 }
```

Note that the distinct operator uses equality semantics (<span class="sym">~</span>) to detect duplicates. Because equality is defined for all types, this means that <span class="kw">distinct</span> can be used on lists with elements of any type. In particular, duplicates can be eliminated from lists of tuples, and the operation will use tuple equality (i.e. tuples are equal if they have the same type and value (or no value) for each element of the same name).

To combine all the elements from multiple lists, use the <span class="kw">union</span> operator:

```cql
{ 1, 2, 3 } union { 3, 4, 5 }
```

This example returns:

```cql
{ 1, 2, 3, 4, 5 }
```

Note that duplicates are eliminated in the result of a <span class="kw">union</span>.

To compute only the common elements from multiple lists, use the <span class="kw">intersect</span> operator:

```cql
{ 1, 2, 3 } intersect { 3, 4, 5 }
```

This example returns:

```cql
{ 3 }
```

To remove the elements in one list from another list, use the <span class="kw">except</span> operator:

```cql
{ 1, 2, 3 } except { 3, 4, 5 }
```

This example returns:

```cql
{ 1, 2 }
```

The following diagrams depict the <span class="kw">union</span>, <span class="kw">intersect</span>, and <span class="kw">except</span> operators:

<a name="figure-2-e"></a>
<div><img src="assets/images/image7.png" alt="assets/images/image7" width="626" height="176"/></div>

Figure 2‑E - The union, intersect, and except operators for lists

As with the <span class="kw">distinct</span> operator, the <span class="kw">intersect</span>, and <span class="kw">except</span> operators use the equality operator to determine when two elements are the same. In particular, this means that nulls in the input to a <span class="kw">distinct</span> will be preserved in the output.

Because lists may contain lists, CQL provides a <span class="kw">flatten</span> operation that can flatten lists of lists:

```cql
flatten { { 1, 2, 3 }, { 3, 4, 5 } }
```

This example returns:

```cql
{ 1, 2, 3, 3, 4, 5 }
```

Note that unlike the <span class="kw">union</span> operator, duplicate elements are retained in the result.

Note also that flatten only flattens one level, it is not recursive.

Although the examples in this section primarily use lists of integers, these operators work on lists with elements of any type.

##### Lists of Intervals

Most list operators in CQL operate on lists of any type, but for lists of intervals, CQL supports a <span class="kw">collapse</span> operator that determines the list of _unique_ intervals from a given list of intervals. Consider the following intervals:

<a name="figure-2-f"></a>
<div><img src="assets/images/image8.png" alt="assets/images/image8" width="353" height="75"/></div>

Figure 2‑F - Example input intervals to illustrate the behavior of the the <span class="kw">collapse</span> operator

If we want to determine the total duration _covered_ by these intervals, we cannot simply use the <span class="kw">distinct</span> operator, because each of these intervals is different. Yet two of them overlap, so they cover part of the same range. We also can’t simply perform an aggregate <span class="kw">union</span> of the intervals because some of them don’t overlap, so there isn’t a single interval that covers the entire range.

The solution is the <span class="kw">collapse</span> operator which returns the set of intervals that _completely cover_ the ranges covered by the inputs:

<a name="figure-2-g"></a>
<div><img src="assets/images/image9.png" alt="assets/images/image9" width="348" height="56"/></div>

Figure 2‑G - Example output intervals to illustrate the behavior of the <span class="kw">collapse</span> operator

Now, when we take the Sum of the durations of the intervals, we are guaranteed not to overcount any particular point in the ranges that may have been included in multiple intervals in the original set.

In addition, CQL supports an <span class="kw">expand</span> operator that determines the list of intervals of size _per_ from a given list of intervals. This operator is important for calculations involving sets of intervals, in particular for performing calculations such as average daily dose in a given timeframe. Part of this calculation involves determining the dosage on each day. For example, assuming a definition <span class="id">EffectivePeriods</span> contains the list of intervals corresponding to prescription periods:

```cql
expand EffectivePeriods per day
```

This expression would result in the list of _day_ intervals, one for each day in the intervals in the input.

#### Aggregate Operators

Summaries and statistical calculations are a critical aspect of being able to represent clinical knowledge, especially in the quality measurement domain. Thus, CQL includes a comprehensive set of aggregate operators.

Aggregate operators are defined to work on lists of values. For example, the Count operator works on any list:

```cql
Count([Encounter])
```

This expression returns the number of <span class="id">Encounter</span> events.

The <span class="id">Sum</span> operator, however, works only on lists of numbers or lists of quantities:

```cql
Sum({ 1, 2, 3, 4, 5 })
```

This example results in the sum <span class="lit">15</span>. To sum the results of a list of <span class="id">Observation</span> values, for example, a query is used to extract the values to be summed:

```cql
Sum([Observation] R return R.result)
```

In general, <span class="kw">nulls</span> encountered during aggregation are ignored, and with the exception of <span class="id">Count</span>, <span class="id">AllTrue</span>, and <span class="id">AnyTrue</span>, the result of the invocation of an aggregate on an empty list is <span class="kw">null</span>. <span class="id">Count</span> is defined to return <span class="lit">0</span> for an empty list. <span class="id">AllTrue</span> is defined to return <span class="kw">true</span> for an empty list, and <span class="id">AnyTrue</span> is defined to return <span class="kw">false</span> for an empty list. In addition, operations that cause arithmetic overflow or underflow, or otherwise cannot be performed (such as division by 0) will result in <span class="kw">null</span>, rather than a run-time error.

The following table lists the aggregate operators available in CQL:

<a name="table-2-t"></a>

|Operator |Description
|----|----
|**Count** |Returns the number of elements in its argument
|**Sum** |Returns the numeric sum of the elements in the list
|**Min** |Returns the minimum value of any element in the list
|**Max** |Returns the maximum value of any element in the list
|**Avg** |Returns the numeric average (mean) of all elements in the list
|**Median** |Returns the statistical median of all elements in the list
|**Mode** |Returns the most frequently occurring value in the list
|**StdDev** |Returns the sample standard deviation (square root of the sample variance) of the elements in the list
|**PopStdDev** |Returns the population standard deviation (square root of the population variance) of the elements in the list
|**Variance** |Returns the sample variance (average distance of the data elements from the sample mean, corrected for bias by using N-1 as the denominator in the mean calculation, rather than N) of the elements in the list
|**PopVariance** |Returns the population variance (average distance of the data elements from the population mean) of the elements in the list
|**AllTrue** |Returns <span class="kw">true</span> if all the elements in the list are <span class="kw">true</span>, <span class="kw">false</span> otherwise
|**AnyTrue** |Returns <span class="kw">true</span> if any of the elements in the list are <span class="kw">true</span>, <span class="kw">false</span> otherwise
|**GeometricMean**| Return the geometric mean of the non-null elements in the list
|**Product**| Returns the geometric product of the elements in the list
{: .grid .table .table-striped}

Table 2‑T - The aggregate operators available in CQL

#### Clinical Operators

CQL supports several operators for use with the various clinical types in the language.

##### Quantity Operators

All quantities in CQL have _unit_ and _value_ components, which can be accessed in the same way as properties. For example:

```cql
define "IsTall": height.units = 'm' and height.value > 2
```

However, because CQL supports operations on quantities directly, this expression could be simplified to:

```cql
define "IsTall": height > 2 'm'
```

This formulation also has the advantage of allowing for the case that the actual value of <span class="id">height</span> is expressed in inches.

CQL supports the standard comparison operators (<span class="sym">=</span> <span class="sym">!=</span> <span class="sym">~</span> <span class="sym">!~</span> <span class="sym">&lt;</span> <span class="sym">\<=</span> <span class="sym">></span> <span class="sym">>=</span>) and the standard arithmetic operators (<span class="sym">+</span> <span class="sym">-</span> <span class="sym">*</span> <span class="sym">/</span>) for quantities. In addition, aggregate operators that utilize these basic comparisons and computations are also supported, such as <span class="id">Min</span>, <span class="id">Max</span>, <span class="id">Sum</span>, etc.

> Note that complete support for unit conversion for all valid UCUM units would be ideal, but practical CQL implementations will likely provide support for a subset of units for commonly used clinical dimensions. At a minimum, however, a CQL implementation must respect units and return <span class="kw">null</span> if it is not capable of normalizing the quantities involved in a given expression to a common unit. Implementations should issue a run-time warning in these cases as well.
{: .note-warning}

##### Ratio Operators

All ratios in CQL have _numerator_ and _denominator_ components, which can be accessed in the same way as properties. For example:

```cql
define "TitreRatio": 1:128
define "TitreNumerator": TitreRatio.numerator // 1
```

CQL supports the equality operators (<span class="sym">=</span> <span class="sym">!=</span> <span class="sym">~</span> <span class="sym">!~</span>) for ratios, as well as conversion from strings to ratios using the ToString and ToRatio functions. Other operations on ratios must be specified by accessing the numerator or denominator components. For equality, ratios are considered equal if they have the same value for the numerator and denominator, using quantity equality semantics. Two ratios are considered equivalent if they represent the same ratio:

```cql
define "RatioEqualTrue": 1:100 = 1:100
define "RatioEqualFalse": 1:100 = 10:1000
define "RatioEquivalentTrue": 1:100 ~ 10:1000
```

> Note that the relative comparison operators (<span class="sym">></span>, <span class="sym">>=</span>, <span class="sym">&lt;</span>, <span class="sym">\<=</span>) are specifically not supported for ratios because in healthcare settings, it is often not possible to correctly interpret the meaning of a ratio without the relevant context, resulting in the risk of expressions involving ratio comparisons meaning the exact opposite of what the author intended. Relative comparisons may still be performed explicitly, either by accessing the <span class="id">numerator</span> and <span class="id">denominator</span> components of the ratio directly, or by using the <span class="id">ToQuantity</span> operator to convert the ratio to a decimal quantity.
{: .note-warning}

##### Terminology Operators

In addition to providing first-class _valueset_ and _codesystem_ constructs, CQL provides operators for retrieving and testing membership in valuesets and codesystems:

```cql
valueset "Acute Pharyngitis": 'urn:oid:2.16.840.1.113883.3.464.1003.102.12.1011'
define "InPharyngitis": SomeCodeValue in "Acute Pharyngitis"
```

These statements define the <span class="id">InPharyngitis</span> expression as <span class="kw">true</span> if the Code-valued expression <span class="id">SomeCodeValue</span> is in the <span class="id">"Acute Pharyngitis"</span> valueset.

> Note that valueset membership is based strictly on the definition of equivalence (i.e. two codes are the same if they have the same value for the code and system elements, ignoring display and version). CQL explicitly forbids the notion of _terminological_ _equivalence_ among codes being used in this context.
{: .note-info}

Note that this operator can be invoked with a code argument of type <span class="id">String</span>, <span class="id">Code</span>, and <span class="id">Concept</span>. When invoked with a Concept, the result is <span class="kw">true</span> if any Code in the Concept is a member of the given valueset.

A common terminological operation involves determining whether a given concept is _implied_, or _subsumed_ by another. This operation is generally referred to as _subsumption_ and although useful, is deliberately omitted from this specification. The reason for this omission different terminology systems generally provide different mechanisms for defining and interpreting subsumption relationships. As a result, specifying how that occurs is beyond the scope of CQL at this time. This is not to say that a specific library of subsumption operators could not be provided and broadly adopted and used, only that the CQL specification does not prescribe the semantics of that operation.

##### Patient Operators

To support determination of patient age consistently throughout quality logic, CQL defines several age-related operators:

<a name="table-2-u"></a>

|Operator |Description
|----|----
|**AgeInYearsAt(X)** |Determines the age of the patient in years as of the date or datetime X
|**AgeInYears()** |Determines the age of the patient in years as of today. Equivalent to AgeInYearsAt(Today())
|**AgeInMonthsAt(X)** |Determines the age of the patient in months as of the date or datetime X
|**AgeInMonths()** |Determines the age of the patient in months as of today. Equivalent to AgeInMonthsAt(Today())
|**AgeInWeeksAt(X)** |Determines the age of the patient in weeks as of the date or datetime X
|**AgeInWeeks()** |Determines the age of the patient in weeks as of now. Equivalent to AgeInWeeksAt(Now())
|**AgeInDaysAt(X)** |Determines the age of the patient in days as of the date or datetime X
|**AgeInDays()** |Determines the age of the patient in days as of now. Equivalent to AgeInDaysAt(Now())
|**AgeInHoursAt(X)** |Determines the age of the patient in hours as of the datetime X
|**AgeInHours()** |Determines the age of the patient in hours as of now. Equivalent to AgeInHoursAt(Now())
|**CalculateAgeInYearsAt(D, X)** |Determines the age of a person with birth date or datetime D in years as of the date or datetime X
|**CalculateAgeInYears(D)** |Determines the age of a person with birth date or datetime D in years as of today/now. Equivalent to CalculateAgeInYearsAt(D, Today()) or CalculateAgeInYearsAt(D, Now())
|**CalculateAgeInMonthsAt(D, X)** |Determines the age of a person with birth date or datetime D in months as of the date or datetime X
|**CalculateAgeInMonths(D)** |Determines the age of a person with birth date or datetime D in months as of today/now. Equivalent to CalculateAgeInMonthsAt(D, Today()) or CalculateAgeInMonthsAt(D, Now())
|**CalculateAgeInWeeksAt(D, X)** |Determines the age of a person with birth date or datetime D in weeks as of the date or datetime X
|**CalculateAgeInWeeks(D)** |Determines the age of a person with birth date or datetime D in weeks as of today. Equivalent to CalculateAgeInWeeksAt(D, Today()) or CalculateAgeInWeeksAt(D, Now())
|**CalculateAgeInDaysAt(D, X)** |Determines the age of a person with birth date or datetime D in days as of the date or datetime X
|**CalculateAgeInDays(D)** |Determines the age of a person with birth date or datetime D in days as of now. Equivalent to CalculateAgeInDaysAt(D, Today()) or CalculateAgeInDaysAt(D, Now())
|**CalculateAgeInHoursAt(D, X)** |Determines the age of a person with birth datetime D in hours as of the datetime X
|**CalculateAgeInHours(D)** |Determines the age of a person with birth datetime D in hours as of now. Equivalent to CalculateAgeInHoursAt(D, Now())
{: .grid .table .table-striped}

Table 2‑U - The age related operators available in CQL

These operators calculate age using calendar duration.

Note that when Age operators are invoked in an unspecified context, the result is a list of patient ages, not a single age for the current patient.

### Authoring Artifact Logic

This section provides a walkthrough of the process of developing shareable artifact logic using CQL. The walkthrough is based on the development of the logic for a simplified Chlamydia Screening quality measure and its associated decision support rule.

Although the examples in this guide focus on populations of patients, CQL can also be used to express non-patient-based artifacts such as episode-of-care measures, or organizational measures such as number of staff in a facility. For examples of these types of measures, see the [Examples](examples.html) included with this specification.

#### Running Example

The running example for this walkthrough is a simplification of CMS153, version 2, Chlamydia Screening for Women. The original QDM for this measure was simplified by including only references to the following QDM data elements:

* Patient characteristics of Birthdate and Sex
* Diagnosis
* Laboratory Test, Order

* Laboratory Test, Result

This results in the following QDM:

* *Initial Population =*
    * AND: "Patient Characteristic Birthdate: birth date" >= 16 year(s) starts before start of "Measurement Period"
    * AND: "Patient Characteristic Birthdate: birth date" < 24 year(s) starts before start of "Measurement Period"
    * AND: "Patient Characteristic Sex: Female"
    * AND:
        * OR: "Diagnosis: Other Female Reproductive Conditions" overlaps with "Measurement Period"
        * OR: "Diagnosis: Genital Herpes" overlaps with "Measurement Period"
        * OR: "Diagnosis: Gonococcal Infections and Venereal Diseases" overlaps with "Measurement Period"
        * OR: "Diagnosis: Inflammatory Diseases of Female Reproductive Organs" overlaps with "Measurement Period"
        * OR: " Diagnosis: Chlamydia" overlaps with "Measurement Period"
        * OR: "Diagnosis: HIV" overlaps with "Measurement Period"
        * OR: "Diagnosis: Syphilis" overlaps with "Measurement Period"
        * OR: "Diagnosis: Complications of Pregnancy, Childbirth and the Puerperium" overlaps with "Measurement Period"
        * OR:
            * OR: "Laboratory Test, Order: Pregnancy Test"
            * OR: "Laboratory Test, Order: Pap Test"
            * OR: "Laboratory Test, Order: Lab Tests During Pregnancy"
            * OR: "Laboratory Test, Order: Lab Tests for Sexually Transmitted Infections"
            * during "Measurement Period"
* *Denominator =*
    * AND: "Initial Population"
* *Denominator Exclusions =*
    * None
* *Numerator =*
    * AND: "Laboratory Test, Result: Chlamydia Screening (result)" during "Measurement Period"
* *Denominator Exceptions =*
    * None

Note that these simplifications result in a measure that is not clinically relevant, and the result of this walkthrough is in no way intended to be used in a production scenario. The walkthrough is intended only to demonstrate how CQL can be used to construct shareable clinical logic.

As an aside, one of the simplifications made to the QDM presented above is the removal of the notion of _occurrencing_. Readers familiar with that concept as defined in QDM should be aware that CQL by design does not include this notion. CQL queries are expressive enough that the correlation accomplished by occurrencing in QDM is not required in CQL.

The following table lists the QDM data elements involved and their mappings to the QUICK data structures:

<a name="table-2-v"></a>

|QDM Data Element |QUICK Equivalent
|----|----
|**Patient Characteristic Birthdate** |Patient.birthDate
|**Patient Characteristic Sex** |Patient.gender
|**Diagnosis** |Condition
|**Laboratory Test, Order** |DiagnosticOrder
|**Laboratory Test, Result** |DiagnosticReport
{: .grid .table .table-striped}

Table 2‑V - QDM Data elements and their mapping to QUICK data structures

Note that the specific mapping to the QUICK data structures is beyond the scope of this walkthrough; it is only provided here to demonstrate the link back to the original QDM.

Note also that the use of the QDM as a starting point was deliberately chosen to provide familiarity and is not a general requirement for building CQL. Artifact development could also begin directly from clinical guidelines expressed in other formats or directly from relevant clinical domain expertise. Using the QDM provides a familiar way to establish the starting requirements.

#### Clinical Quality Measure Logic

For clinical quality measures, the CQL library simply provides a repository for definitions of the populations involved. CQL is intended to support both CQM and CDS applications, so it does not contain quality measure specific constructs. Rather, the containing artifact definition, such as an HQMF document, would reference the appropriate criteria expression by name within the CQL document.

With that in mind, a CQL library intended to represent the logic for a CQM must expose at least the population definitions needed for the measure. In this case, we have criteria definitions for:

* Initial Population
* Denominator

* Numerator

Looking at the Initial Population, we have the demographic criteria:

* Patient is at least 16 years old and less than 24 years old at the start of the measurement period.
* Patient is female.

For the age criteria, CQL defines an AgeInYearsAt operator that returns the age of the patient as of a given date or datetime. Using this operator, and assuming a measurement period of the year 2013, we can express the patient age criteria as:

```cql
AgeInYearsAt(@2013-01-01) >= 16 and AgeInYearsAt(@2013-01-01) < 24
```

In order to use the <span class="id">AgeInYearsAt</span> operator, we must be in the <span class="id">Patient</span> context:

```cql
context Patient
```

In addition, to allow this criteria to be referenced both within the CQL library by other expressions, as well as potentially externally, we need to assign an identifier:

```cql
define "InInitialPopulation":
  AgeInYearsAt(@2013-01-01) >= 16 and AgeInYearsAt(@2013-01-01) < 24
```

Because the quality measure is defined over a measurement period, and many, if not all, of the criteria we build will have some relationship to this measurement period, it is useful to define the measurement period directly:

```cql
define "MeasurementPeriod": Interval[
  @2013-01-01T00:00:00.0,
  @2014-01-01T00:00:00.0
)
```

This establishes <span class="id">MeasurementPeriod</span> as the interval beginning precisely at midnight on January 1<sup>st</sup>, 2013, and ending immediately before midnight on January 1<sup>st</sup>, 2014. We can now use this in the age criteria:

```cql
define "InInitialPopulation":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
```

Even more useful would be to define <span class="id">MeasurementPeriod</span> as a _parameter_ that can be provided when the quality measure is evaluated. This allows us to use the same logic to evaluate the quality measure for different years. So instead of using a <span class="kw">define</span> statement, we have:

```cql
parameter MeasurementPeriod default Interval[
  @2013-01-01T00:00:00.0,
  @2014-01-01T00:00:00.0
)
```

The <span class="id">InInitialPopulation</span> expression remains the same, but it now accesses the value of the parameter instead of the define statement.

Since we are in the <span class="id">Patient</span> context and have access to the attributes of the Patient (as defined by the data model in use), the gender criteria can be expressed as follows:

```cql
Patient.gender in "Female Administrative Sex"
```

This criteria requires that the gender attribute of a Patient be a code that is in the valueset identified by <span class="id">"Female Administrative Sex"</span>. Of course, this requires the valueset definition:

```cql
valueset "Female Administrative Sex": 'urn:oid:2.16.840.1.113883.3.560.100.2'
```

Putting it all together, we now have:

```cql
library CMS153_CQM version '2'

using QUICK

parameter MeasurementPeriod default Interval[
  @2013-01-01T00:00:00.0,
  @2014-01-01T00:00:00.0
)

valueset "Female Administrative Sex": 'urn:oid:2.16.840.1.113883.3.560.100.2'

context Patient

define "InInitialPopulation":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in "Female Administrative Sex"
```

The next step is to capture the rest of the initial population criteria, beginning with this QDM statement:

```cql
"Diagnosis: Other Female Reproductive Conditions" overlaps with "Measurement Period"
```

This criteria has three main components:

* The type of clinical statement involved
* The valueset involved

* The relationship to the measurement period

Using the mapping to QUICK, the equivalent retrieve in CQL is:

```cql
[Condition: "Other Female Reproductive Conditions"] C
  where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod
```

This query retrieves all <span class="id">Condition</span> events for the patient with a code in the <span class="id">"Other Female Reproductive Conditions"</span> valueset that overlap the measurement period. Note that in order to use the <span class="kw">overlaps</span> operator, we had to construct an interval from the <span class="id">onsetDateTime</span> and <span class="id">abatementDate</span> elements. If the model had an interval-valued “effective time” element, we could have used that directly, rather than having to construct an interval.

The result of the query is a list of conditions. However, this isn’t quite what the QDM statement is actually saying. In QDM, the statement can be read loosely as “include patients in the initial population that have at least one active diagnosis from the Other Female Reproductive Conditions valueset.” To express this in CQL, what we really need to ask is whether the equivalent retrieve above returns any results, which is accomplished with the <span class="kw">exists</span> operator:

```cql
exists ([Condition: "Other Female Reproductive Conditions"] C
  where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
```

Incorporating the next QDM statement:

OR: "Diagnosis: Genital Herpes" overlaps with "Measurement Period"

We have:

```cql
exists ([Condition: "Other Female Reproductive Conditions"] C
  where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod
)
  or exists ([Condition: "Genital Herpes"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod
  )
```

Which we can repeat for each Diagnosis, Active statement. Note here that even though we are using the same alias, C, for each query, they do not clash because they are only declared within their respective queries (or _scopes_).

Next, we get to the Laboratory Test statements:

* OR: "Laboratory Test, Order: Pregnancy Test"
* OR: "Laboratory Test, Order: Pap Test"
* OR: "Laboratory Test, Order: Lab Tests During Pregnancy"
* OR: "Laboratory Test, Order: Lab Tests for Sexually Transmitted Infections"
* during "Measurement Period"

We use the same approach. The equivalent retrieve for the first criteria is:

```cql
exists ([DiagnosticOrder: "Pregnancy Test"] O
  where Last(O.event E where E.status = 'completed' sort by date).date
    during MeasurementPeriod)
```

This query is retrieving pregnancy tests that were completed within the measurement period. Because diagnostic orders do not have a top-level completion date, the date must be retrieved with a nested query on the events associated with the diagnostic orders. The nested query returns the set of completed events ordered by their completion date, the <span class="id">Last</span> invocation returns the most recent of those events, and the <span class="id">.date</span> accessor retrieves the value of the <span class="id">date</span> element of that event.

And finally, translating the rest of the statements allows us to express the entire initial population as:

```cql
define "InInitialPopulation":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in "Female Administrative Sex"
    and
    (
      exists ([Condition: "Other Female Reproductive Conditions"] C
        where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
      or exists ([Condition: "Genital Herpes"] C
        where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
      or exists ([Condition: "Genococcal Infections and Venereal Diseases"] C
        where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
      ...
      or exists ([DiagnosticOrder: "Pregnancy Test"] O
        where Last(O.event E where E.status = 'completed' sort by date).date
          during MeasurementPeriod)
      ...
    )
```

#### Using Define Statements

Because CQL allows any number of <span class="kw">define</span> statements with any identifiers, we can structure the logic of the measure to communicate more meaning to readers of the logic. For example, if we look at the description of the quality measure:

__________________________________________________________________________________________________________________________________________________________
_Percentage of women 16-24 years of age who were identified as sexually active and who had at least one test for chlamydia during the measurement period._
__________________________________________________________________________________________________________________________________________________________

it becomes clear that the intent of the Diagnosis, Active and Laboratory Test, Order QDM criteria is to attempt to determine whether or not the patient is sexually active. Of course, we’re dealing with a simplified measure and so much of the nuance of the original measure is lost; the intent here is not to determine whether this is in fact a good way in practice to determine whether or not a patient is sexually active, but rather to show how CQL can be used to help communicate aspects of the meaning of quality logic that would otherwise be lost or obscured.

With this in mind, rather than expressing the entire initial population as a single <span class="kw">define</span>, we can break it up into several more understandable and more meaningful expressions:

```cql
define "Patient16To23AndFemale":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in "Female Administrative Sex"

define "SexuallyActive":
  exists ([Condition: "Other Female Reproductive Conditions"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  or exists ([Condition: "Genital Herpes"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  or exists ([Condition: "Genococcal Infections and Venereal Diseases"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  ...
  or exists ([DiagnosticOrder: "Pregnancy Test"] O
    where Last(O.event E where E.status = 'completed' sort by date).date
      during MeasurementPeriod)
  ...

define "InInitialPopulation":
  Patient16To23AndFemale and SexuallyActive
```

Restructuring the logic in this way not only simplifies the expressions involved and makes them more understandable, but it clearly communicates the intent of each group of criteria.

Note that the <span class="id">InInitialPopulation</span> expression is returning a boolean value indicating whether or not the patient should be included in the initial population.

The next population to define is the denominator, which in our simplified expression of the measure is the same as the initial population. Because the intent of the CQL library for a quality measure is only to define the logic involved in defining the populations, it is assumed that the larger context (such as an HQMF artifact definition) is providing the overall structure, including the meaning of the various populations involved. As such, each population definition with the CQL library should include only those aspects that are unique to that population.

For example, the actual criteria for the denominator is that the patient is in the initial population. But because that notion is already implied by the definition of a population measure (that the denominator is a subset of the initial population), the CQL for the denominator should simply be:

```cql
define "InDenominator": true
```

This approach to defining the criteria is more flexible from the perspective of actually evaluating a quality measure, but it may be somewhat confusing when looking at the CQL in isolation.

Note that the approach to defining population criteria is established by quality measure-specific guidance outside the scope of this specification. We follow this approach here just for simplicity.

Following this approach then, we express the numerator as:

```cql
define "InNumerator":
  exists ([DiagnosticReport: "Chlamydia Screening"] R
  where R.issued during MeasurementPeriod and R.result is not null)
```

Note that the <span class="id">R.result</span> <span class="kw">is not null</span> condition is required because the original QDM statement involves a test for the presence of an attribute:

```cql
"Laboratory Test, Result: Chlamydia Screening (result)" during "Measurement Period"
```

The <span class="id">(result)</span> syntax indicates that the item should only be included if there is some value present for the result attribute. The equivalent expression in CQL is the <span class="kw">null</span> test.

Finally, putting it all together, we have a complete, albeit simplified, definition of the logic involved in defining the population criteria for a measure:

```cql
library CMS153_CQM version '2'

using QUICK

valueset "Female Administrative Sex": 'urn:oid:2.16.840.1.113883.3.560.100.2'
...
parameter MeasurementPeriod default Interval[
  @2013-01-01T00:00:00.0,
  @2014-01-01T00:00:00.0
)

context Patient

define "Patient16To23AndFemale":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in "Female Administrative Sex"

define "SexuallyActive":
  exists ([Condition: "Other Female Reproductive Conditions"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  or exists ([Condition: "Genital Herpes"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  or exists ([Condition: "Genococcal Infections and Venereal Diseases"] C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  ...
  or exists ([DiagnosticOrder: "Pregnancy Test"] O
    where Last(O.event E where E.status = 'completed').date
      during MeasurementPeriod)
  ...

define "InInitialPopulation":
  Patient16To23AndFemale and SexuallyActive

define "InDenominator": true

define "InNumerator":
  exists ([DiagnosticReport: "Chlamydia Screening"] R
    where R.issued during MeasurementPeriod and R.result is not null)
```

#### Clinical Decision Support Logic

Using the same simplified measure expression as a basis, we will now build a complementary clinical decision support rule that can provide guidance at the point-of-care. In general, when choosing what decision support artifacts will be most complementary to a given quality measure, several factors must be considered including EHR and practitioner workflows, data availability, the potential impacts of the guidance, and many others.

Though these are all important considerations and should not be ignored, they are beyond the scope of this document, and for the purposes of this walkthrough, we will assume that a point-of-care decision support intervention has been selected as the most appropriate artifact.

When building a point-of-care intervention based on a quality measure, several specific factors must be considered.

First, quality measures typically contain logic designed to identify a specific setting in which a particular aspect of health quality is to be measured. This usually involves identifying various types of encounters. By contrast, a point-of-care decision support artifact is typically written to be evaluated in a specific context, so the criteria around establishing the setting can typically be ignored. For the simplified measure we are dealing with, the encounter setting criteria were removed as part of the simplification.

Second, quality measures are designed to measure quality within a specific timeframe, whereas point-of-care measures don’t necessarily have those same restrictions. For example, the diagnoses in the current example are restricted to the measurement period. There may be some clinically relevant limit on the amount of time that should be used to search for diagnoses, but it does not necessarily align with the measurement period. For the purposes of this walkthrough, we will make the simplifying assumption that any past history of the relevant diagnoses is a potential indicator of sexual activity.

Third, quality measures are written retrospectively, that is, they are always dealing with events that occurred in the past. By contrast, decision support artifacts usually involve prospective, as well as retrospective data. As such, different types of clinical events may be involved, such as planned or proposed events.

Fourth, quality measures, especially proportion measures, typically express the numerator criteria as a positive result, whereas the complementary logic for a decision support rule would be looking for the absence of the criteria. For example, the criteria for membership in the numerator of the measure we are using is that the patient has had a Chlamydia screening within the measurement period. For the point-of-care intervention, that logic becomes a test for patients that have _not_ had a Chlamydia screening.

And finally, although present in some quality measures, many do not include criteria to determine whether or not there is some practitioner- or patient-provided reason for not taking some course of action. This is often due to the lack of a standardized mechanism for describing this criteria and is usually handled on a measure-by-measure basis as part of actually evaluating measures. Regardless of the reason, because a point-of-care intervention has the potential to interrupt a practitioner workflow, the ability to determine whether or not a course of action being proposed has already been considered and rejected is critical.

With these factors in mind, and using the CQL for the measure we have already built, deriving a point-of-care intervention is fairly straightforward.

To begin with, we are using the same data model, QUICK, the same valueset declarations, and the same context:

```cql
library CMS153_CDS version '2'

using QUICK

codesystem "SNOMED": 'http://snomed.info/sct'

valueset "Female Administrative Sex": 'urn:oid:2.16.840.1.113883.3.560.100.2'
...

context Patient
```

Note that we are not using the <span class="id">MeasurementPeriod</span> parameter. There are other potential uses for parameters within the point-of-care intervention (for example, to specify a threshold for how far back to look for a Chlamydia screening), but we are ignoring those aspects for the purposes of this walkthrough.

For the <span class="id">Patient16To23AndFemale</span> criteria, we are then simply concerned with female patients between the ages of 16 and 24, so we change the criteria to use the <span class="id">AgeInYears</span>, rather than the <span class="id">AgeInYearsAt</span> operator, to determine the patient’s age as of today:

```cql
define "Patient16To23AndFemale":
  AgeInYears() >= 16 and AgeInYears() < 24
    and Patient.gender in "Female Administrative Sex"
```

Similarly for the <span class="id">SexuallyActive</span> criteria, we remove the relationship to the measurement period:

```cql
define "SexuallyActive":
  exists ([Condition: "Other Female Reproductive Conditions"])
    or exists ([Condition: "Genital Herpes"])
    or exists ([Condition: "Genococcal Infections and Venereal Diseases"])
    ...
    or exists ([DiagnosticOrder: "Pregnancy Test"])
    ...
```

For the numerator, we need to invert the logic, so that we are looking for patients that have not had a Chlamydia screening, and rather than the measurement period, we are looking for the test within the last year:

```cql
not exists ([DiagnosticReport: "Chlamydia Screening"] R
  where R.issued during Interval[Today() - 1 years, Today()]
    and R.result is not null)
```

In addition, we need a test to ensure that the patient does not have a planned Chlamydia screening:

```cql
not exists ([ProcedureRequest: "Chlamydia Screening"] R
  where R.orderedOn same day or after Today())
```

And to ensure that there is not a reason for not performing a Chlamydia screening:

```cql
not exists ([Observation: "Reason for not performing Chlamydia Screening"])
```

We combine those into a <span class="id">NoScreening</span> criteria:

```cql
define "NoScreening":
  not exists ([DiagnosticReport: "Chlamydia Screening"] R
    where R.issued during Interval[Today() - 1 years, Today()]
      and R.result is not null)
  and not exists ([ProcedureRequest: "Chlamydia Screening"] R
    where R.orderedOn same day or after Today())
  and not exists ([Observation: "Reason for not performing Chlamydia Screening"])
```

And finally, we provide an overall condition that indicates whether or not this intervention should be triggered:

```cql
define "NeedScreening": Patient16To23AndFemale and SexuallyActive and NoScreening
```

Now, this library can be referenced by a CDS knowledge artifact, and the condition can reference the <span class="id">NeedScreening</span> expression, which loosely reads: the patient needs screening if they are in the appropriate demographic, have indicators of sexual activity, and do not have screening.

In addition, this library should include the proposal aspect of the intervention. In general, the overall artifact definition (such as a CDS KAS artifact) would define what actions should be performed when the condition is satisfied. Portions of that action definition may reference other expressions within a CQL library, just as the HQMF for a quality measure may reference multiple expressions within CQL to identify the various populations in the measure. In this case, the intervention may construct a proposal for a Chlamydia Screening:

```cql
define "ChlamydiaScreeningRequest": ProcedureRequest {
  type: Code '442487003' from "SNOMED-CT"
  display 'Screening for Chlamydia trachomatis (procedure)',
  status: 'proposed'
  // values for other elements of the request...
}
```

The containing artifact would then use this expression as the target of an action, evaluating the expression if the condition of the decision support rule is met, and returning the result as the proposal to the calling environment.

#### Using Libraries to Share Logic

The previous examples of building a quality measure and a decision support artifact have so far demonstrated the ability to describe the logic involved using the same underlying data model, as well as the same expression language. Now we can take that one step further and look at the use of CQL libraries to actually express the artifacts using the same logic, rather than just the same data model and language.

We start by identifying the aspects that are identical between the two:

1.  SexuallyActive criteria, without the timing relationship
2.  ChlamydiaScreening test, without the timing relationship

With these in mind, we can create a new library, <span class="id">CMS153_Common</span>, that will contain the common elements:

```cql
library CMS153_Common version '2'

using QUICK

valueset "Female Administrative Sex": 'urn:oid:2.16.840.1.113883.3.560.100.2'
...

context Patient

define "ConditionsIndicatingSexualActivity":
  [Condition: "Other Female Reproductive Conditions"]
    union [Condition: "Genital Herpes"]
    union ...

define "LaboratoryTestsIndicatingSexualActivity":
  [DiagnosticOrder: "Pregnancy Test"]
    union [DiagnosticOrder: "Pap"]
    union ...

define "ResultsPresentForChlamydiaScreening":
  [DiagnosticReport: "Chlamydia Screening"] R where R.result is not null
```

Using this library, we can then rewrite the CQM to reference the common elements from the library:

```cql
library CMS153_CQM version '2'

using QUICK

include CMS153_Common version '2' called Common

parameter MeasurementPeriod default Interval[
  @2013-01-01T00:00:00.0,
  @2014-01-01T00:00:00.0
)

context Patient

define "Patient16To23AndFemale":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in Common."Female Administrative Sex"

define "SexuallyActive":
  exists (Common"ConditionsIndicatingSexualActivity" C
    where Interval[C.onsetDateTime, C.abatementDate] overlaps MeasurementPeriod)
  or exists (Common"LaboratoryTestsIndicatingSexualActivity" R
    where R.issued during MeasurementPeriod)

define "InInitialPopulation":
  Patient16To23AndFemale and SexuallyActive

define "InDenominator":
  true

define "InNumerator":
  exists (Common"ResultsPresentForChlamydiaScreening" S
    where S.issued during MeasurementPeriod)
```

Note: The keyword <span class="kw">called</span> was chosen to avoid confusion with the keyword <span class="kw">as</span>, which is used for type-casting. We also don't use <span class="kw">as</span> for aliasing like many SQL dialects do, for the same reason. We mean <span class="kw">called</span> here in the sense that the library is "called a name" within this context, not that we intend to "call it by this name".

And similarly for the CDS artifact:

```cql
library CMS153_CDS version '2'

using QUICK

include CMS153_Common version '2' called Common

valueset "Reason for not performing Chlamydia Screening": 'TBD'

context Patient

define "Patient16To23AndFemale":
  AgeInYears() >= 16 and AgeInYears() < 24
    and Patient.gender in Common."Female Administrative Sex"

define "SexuallyActive":
  exists (Common"ConditionsIndicatingSexualActivity")
  or exists (Common"LaboratoryTestsIndicatingSexualActivity")

define "NoScreening":
  not exists (Common"ResultsPresentForChlamydiaScreening" S
    where S.issued during Interval[Today() - 1 years, Today()])
  and not exists ([ProcedureRequest: Common"Chlamydia Screening"] R
    where R.orderedOn same day or after Today()

define "NeedScreening": Patient16To23AndFemale and SexuallyActive and NoScreening
```

In addition to sharing between quality measures and clinical decision support artifacts, the use of common libraries will allow the same logic to be shared by multiple quality measures or decision support artifacts. For example, a set of artifacts for measurement and improvement of the treatment of diabetes could all use a common library that provides base definitions for determining when a patient is part of the population of interest.


---

File: repos/HL7_SLASH_cql/input/pages/03-developersguide.md


This chapter complements the Author’s Guide by providing more in-depth discussion of language elements, semantics, more complex query scenarios, and more advanced topics such as typing and function definition. Readers are expected to be familiar with the content of the [Author’s Guide](02-authorsguide.html) in the discussions that follow.

### Lexical Elements

CQL is intended to be an authoring language. As such, the syntax is designed to be intuitive and clear, both when writing and reading the language. Care has been taken to ensure that the language contains a simple and clear core set of language elements, and that they all interact in a consistent and predictable manner.

As with any traditional computer language, CQL uses typical lexical elements such as whitespace, keywords, symbols, comments, and so on.

CQL defines the following basic lexical elements:

<a name="table-3-a"></a>

|Element |Description
|----|----
|**Whitespace** |Whitespace defines the separation between all tokens in the language
|**Comment** |Comments are ignored by the language, allowing for descriptive text
|**Literal** |Literals allow basic values to be represented within the language
|**Symbol** |Symbols such as <span class="sym">+</span>, <span class="sym">-</span>, <span class="sym">*</span>, and <span class="sym">/</span>
|**Keyword** |Grammar-recognized keywords such as define and where
|**Identifier** |User-defined identifiers
{: .grid .table .table-striped}

Table 3‑A - The basic lexical elements defined in CQL

Every valid CQL document can be broken down into a set of tokens, each of which is one of these basic lexical elements. The following sections describe each of these elements in more detail.

#### Whitespace

CQL defines _tab_, _space_, and _return_ as _whitespace_, meaning they are only used to separate other tokens within the language. Any number of whitespace characters can appear, and the language does not use whitespace for anything other than delimiting tokens.

#### Comments

CQL defines two styles of comments, _single-line_, and _multi-line_. A single-line comment consists of two forward slashes, followed by any text up to the end of the line:

```cql
define "Foo": 1 + 1 // This is a single-line comment
```

To begin a multi-line comment, the typical forward slash-asterisk token is used. The comment is closed with an asterisk-forward slash, and everything enclosed is ignored:

```cql
/*
This is a multi-line comment
Any text enclosed within is ignored
*/
```

Note that nested multi-line comments are not supported.

##### Tags

> Comment tags are a new feature of CQL 1.5, and are trial-use
{: .note-info}

Within multi-line comments, CQL supports the ability to define _tags_ that will be associated with the declaration on which they appear. Tags are defined in comments immediately preceding the declaration to which they apply using the `@` symbol, followed by a valid, unquoted identifier, followed by a colon (`:`). For example:

```cql
/*
@author: Frederic Chopin
@description: Defines whether the patient is included in the initial population
*/
define "InInitialPopulation":
  AgeInYearsAt(start of MeasurementPeriod) >= 16
    and AgeInYearsAt(start of MeasurementPeriod) < 24
    and Patient.gender in "Female Administrative Sex"
```

The contents of the resulting tag will be whatever comes after the tag definition until the next tag or the end of the comment-block, whatever comes first.

```cql
/*
@author: Ludwig van Beethoven
@description: Determines the cumulative duration of a list of intervals
@comment: This function collapses the input intervals prior to determining the cumulative duration
to ensure overlapping intervals do not contribute multiple times to the result
 */
define function "CumulativeDuration"(Intervals List<Interval<DateTime>>):
  Sum((collapse Intervals) X return all duration in days of X)
```

#### Literals

Literals provide for the representation of basic values within CQL. The following types of literals are supported:

<a name="table-3-b"></a>

|Literal |Description
|----|----
|**Null** |The null literal (<span class="kw">null</span>)
|**Boolean** |The boolean literals (<span class="kw">true</span> and <span class="kw">false</span>)
|**Integer** |Sequences of digits in the range 0..2<sup>31</sup>-1
|**Long** |Sequences of digits in the range 0..2<sup>63</sup>-1
|**Decimal** |Sequences of digits with a decimal point, in the range 0.0.. (10<sup>28</sup>-1)/10<sup>8</sup>
|**String** |Strings of any character enclosed within single-ticks (<span class="lit">'</span>)
|**Date** |The at-symbol (<span class="sym">@</span>) followed by an ISO-8601 compliant representation of a date
|**DateTime** |The at-symbol (<span class="sym">@</span>) followed by an ISO-8601 compliant representation of a datetime
|**Time** |The at-symbol (<span class="sym">@</span>) followed by an ISO-8601 compliant representation of a time
|**Quantity** |An integer or decimal literal followed by a datetime precision specifier, or a UCUM unit specifier
|**Ratio** |A ratio of two quantities, separated by a colon (<span class="sym">:</span>)
{: .grid .table .table-striped}

Table 3‑B - The types of literals supported in CQL

A syntax diagram of the types of literals supported can be seen [here](19-l-cqlsyntaxdiagrams.html#literal).

CQL uses standard escape sequences for string literals:

<a name="table-3-c"></a>

|Escape |Character
|----|----
|\\' |Single-quote
|\\" |Double-quote
|\\` |Backtick
|\r |Carriage Return
|\n |Line Feed
|\t |Tab
|\f |Form Feed
|\\\\ |Backslash
|\uXXXX |Unicode character, where XXXX is the hexadecimal representation of the character
{: .grid .table .table-striped}

Table 3‑C - The escape sequences for string literals in CQL

A syntax diagram of the standard escape sequences for string literals supported can be seen [here](19-l-cqlsyntaxdiagrams.html#ESC).

#### Symbols

Symbols provide structure to the grammar and allow symbolic invocation of common operators such as addition. CQL defines the following symbols:

<a name="table-3-d"></a>

|Symbol |Description
|----|----
|**:** |Definition operator, typically read as “defined as”. Also used to separate the numerator from denominator in Ratio literals
|**()** |Parentheses for delimiting groups, as well as specifying and passing function parameters
|**[]** |Brackets for indexing into lists and strings, as well as delimiting the retrieve expression
|**{}** |Braces for delimiting lists and tuples
|**<>** |Angle-brackets for delimiting generic types within type specifiers
|**.** |Period for qualifiers and accessors
|**,** |Comma for delimiting items in a syntactic list
|**= != \<= < > >= ~ !~** |Comparison operators for comparing values
|**+ - * / ^** |Arithmetic operators for performing calculations
{: .grid .table .table-striped}

Table 3‑D - The symbols supported by CQL to provide structure to the grammar and allow symbolic invocation of common operators such as addition

#### Keywords

Keywords are words that are recognized by the parser and used to build the various language constructs. CQL defines the following keywords:

```cql
after
aggregate
all
and
as
asc
ascending
before
between
by
called
case
cast
code
Code
codesystem
codesystems
collapse
concept
Concept
contains
context
convert
date
day
days
default
define
desc
descending
difference
display
distinct
div
duration
during
else
end
ends
except
exists
expand
false
flatten
fluent
from
function
hour
hours
if
implies
in
include
includes
included in
intersect
Interval
is
let
library
List
maximum
meets
millisecond
milliseconds
minimum
minute
minutes
mod
month
months
not
null
occurs
of
on
or
or after
or before
or less
or more
or on
overlaps
parameter
per
point
predecessor
private
properly
public
return
same
singleton
second
seconds
start
starting
starts
sort
successor
such that
then
time
timezoneoffset
to
true
Tuple
union
using
valueset
version
week
weeks
where
when
width
with
within
without
xor
year
years
```

A syntax diagram of the keywords supported can be seen [here](19-l-cqlsyntaxdiagrams.html#keyword).

#### Reserved Words

When there is no possibility for ambiguity, keywords may also be used as identifiers. However, many keywords are considered _reserved_ words, meaning that it is illegal to use them as identifiers. If necessary, identifiers that clash with a reserved word can be double-quoted or surrounded by backticks (`` ` ``).

The following keywords are defined as reserved words:

```cql
aggregate
all
and
as
after
before
between
case
cast
Code
collapse
Concept
convert
day
days
difference
distinct
duration
during
else
exists
expand
false
flatten
from
if
in
included in
is
hour
hours
Interval
let
List
maximum
millisecond
milliseconds
minimum
minute
minutes
month
months
not
null
occurs
of
on or
or
or on
per
properly
return
same
second
seconds
singleton
sort
such that
then
to
true
Tuple
week
weeks
when
with
within
without
year
years
```

Note that most reserved words may still be used as identifiers if the usage is unambiguous. For example, <span class="kw">exists</span> is a reserved word, but because the use of parentheses is required for function invocation, it can still be distinguished as a function identifier.

In addition, even though many keywords are allowed to appear as identifiers, this feature of the language is about avoiding naming clashes with data models used in CQL, and several places in the grammar do not allow keywords or reserved words to be used as identifiers. For example, named expressions, terminology declarations, aliases, and let clauses cannot use keywords or reserved words as identifiers.

A syntax diagram of the _reserved_ words supported can be seen [here](19-l-cqlsyntaxdiagrams.html#reservedWord).

#### Identifiers

Identifiers are used to name various elements within the language. There are three types of identifiers in CQL, simple, delimited, and quoted.

A syntax diagram of the types of _identifiers_ in CQL can be seen [here](19-l-cqlsyntaxdiagrams.html#identifier).

A simple identifier is any alphabetical character or an underscore, followed by any number of alpha-numeric characters or underscores. For example, the following are all valid simple identifiers:

```cql
Foo
Foo1
_Foo
foo
FOO
```

Note also that these are all unique identifiers. By convention, simple identifiers in CQL should not begin with underscores, and should be Pascal-cased (meaning the first letter of every word within the identifier is capitalized), rather than using underscores.

In particular, the use of identifiers that differ only in case should be avoided.

A delimited identifier is any sequence of characters enclosed in backticks (<span class="sym">`</span>):

```cql
`Encounter, Performed`
`Diagnosis`
```

A quoted identifier is any sequence of characters enclosed in double-quotes (<span class="sym">"</span>):

```cql
"Encounter, Performed"
"Diagnosis"
```

The use of double-quotes and backticks allows identifiers to contain spaces, commas, and other characters that would not be allowed within simple identifiers. This allows identifiers within CQL to be much more descriptive and readable.

A syntax diagram of quoted identifier can be seen [here](19-l-cqlsyntaxdiagrams.html#QUOTEDIDENTIFIER).

To specify a quoted or delimited identifier that includes a double-quote (<span class="sym">"</span>) or backtick (<span class="sym">`</span>), use a backslash to escape the delimiter:

```cql
"Encounter \"Inpatient\""
```

Note that double-quoted and delimited identifiers are still case-sensitive, and as with simple identifiers, the use of identifiers that differ only in case should be avoided. The enclosing delimiter marks are not included in the defined identifier.

CQL escape sequences for strings also work for identifiers:

<a name="table-3-e"></a>

|Escape |Character
|----|----
|**\\'** |Single-quote
|**\\"** |Double-quote
|**\\`** |Backtick
|**\r** |Carriage Return
|**\n** |Line Feed
|**\t** |Tab
|**\f** |Form Feed
|**\\\\** |Backslash
|**\uXXXX** |Unicode character, where XXXX is the hexadecimal representation of the character
{: .grid .table .table-striped}

Table 3‑E - The escape sequences for identifiers in CQL

##### Qualified Identifiers

Identifiers can be combined using the _qualifier_ operator (<span class="sym">.</span>), resulting in a _qualified identifier_. For example <span class="id">Common.ConditionsIndicatingSexualActivity</span>. An identifier with no qualifiers is an _unqualified identifier_.

A syntax diagram of a _qualified identifier_ can be seen [here](19-l-cqlsyntaxdiagrams.html#qualifiedIdentifier).

#### Operator Precedence

CQL uses standard in-fix operator notation for expressing computational logic. As a result, CQL also adopts the expected operator precedence to ensure consistent and predictable behavior of expressions written using CQL. The following table lists the order of operator precedence in CQL from highest to lowest:

<a name="table-3-f"></a>

|Category |Operators
|----|----
|**Primary** |<span class="sym">.</span> <span class="sym">[]</span> <span class="sym">()</span>
|**Conversion Phrase** |<span class="kw">convert</span>..<span class="kw">to</span>
|**Unary Arithmetic** |unary <span class="sym">+/-</span>
|**Extractor** |<span class="kw">start</span> <span class="kw">end</span> <span class="kw">difference</span> <span class="kw">duration</span> <span class="kw">width</span> <span class="kw">successor</span> <span class="kw">predecessor of</span><br/>_component_ <span class="kw">singleton from</span>
|**Exponentiation** |<span class="sym">^</span>
|**Multiplicative** |<span class="sym">*</span> <span class="sym">/</span> <span class="kw">div mod</span>
|**Additive** |<span class="sym">+</span> <span class="sym">-</span> <span class="sym">&</span>
|**Conditional** |<span class="kw">if</span>..<span class="kw">then</span>..<span class="kw">else</span><br/><span class="kw">case</span>..<span class="kw">else</span>..<span class="kw">end</span>
|**Unary List** |<span class="kw">distinct</span> <span class="kw">collapse</span> <span class="kw">flatten</span> <span class="kw">expand</span>
|**Unary Test** |<span class="kw">is null</span> <span class="kw">true</span> <span class="kw">false</span>
|**Type Operators** |<span class="kw">is as cast</span>..<span class="kw">as</span>
|**Unary Logical** |<span class="kw">not exists</span>
|**Between** |<span class="kw">between</span><br/>_precision_ <span class="kw">between</span><br/><span class="kw">duration in</span> _precision_ <span class="kw">between</span><br/><span class="kw">difference in</span> _precision_ <span class="kw">between</span>
|**Binary List** |<span class="kw">union intersect except</span>
|**Comparison** |<span class="sym">\<=</span> <span class="sym">&lt;</span> <span class="sym">></span> <span class="sym">>=</span>
|**Timing Phrase** |<span class="kw">same as</span><br/><span class="kw">includes</span><br/><span class="kw">during</span><br/><span class="kw">before/after</span><br/><span class="kw">within</span>
|**Interval Operators** |<span class="kw">meets overlaps starts ends</span>
|**Equality** |<span class="sym">=</span> <span class="sym">!=</span> <span class="sym">~</span> <span class="sym">!~</span>
|**Membership** |<span class="kw">in contains</span>
|**Conjunction** |<span class="kw">and</span>
|**Disjunction** |<span class="kw">or xor</span>
|**Implication** |<span class="kw">implies</span>
{: .grid .table .table-striped}

Table 3‑F - The order of operator precedence in CQL

As with most expression languages, parentheses can always be used to force order-of-operations if the defined operator precedence does not produce the intended evaluation of a given expression.

When multiple operators appear in a single category, precedence is determined by the order of appearance in the expression, left to right.

#### Case-Sensitivity

To encourage consistency and reduce potential confusion, CQL is a case-sensitive language. This means that case is considered when matching keywords and identifiers in the language. For example, the following CQL is invalid:

```cql
Define "Foo": 1 + 1
```

The declaration is illegal because the parser will not recognize <span class="kw">Define</span> as a keyword.

{: #libraries-1}
### Libraries

Libraries provide the basic unit of code organization for CQL. Each CQL file contains a single library, and may include any number of libraries by reference, subject to the following constraints:

* The local [identifier](#identifiers) for a referenced library must be [unqualified](#qualified-identifiers) and unique within the artifact.
* Circular library references are not allowed.
* Library references are not transitive.

A syntax diagram of a library construct can be seen [here](19-l-cqlsyntaxdiagrams.html#library).

Library identifiers may be qualified to any degree to allow libraries to be organized and shared. In addition, the ELM for a [library](04-logicalspecification.html#library) contains an identifier element with a namespace which provides a globally unique, stable identifier scope for the library. All the library identifiers within a given namespace must be unique, and the namespace is used by the implementation environment to resolve library identifiers to their actual library source. See the [Mother Infant Measure](examples.html#mother-infant-measure) for an example of how namespaces are specified in ELM.

When including a library, use the fully qualified identifier for the library. If the <span class="kw">called</span> clause is omitted from the include declaration, the unqualified library identifier will be used as the local identifier for the library.

Because the library identifier and its qualifiers are CQL identifiers, they may be either a simple identifier, or a delimited-identifier, which may actually be a uniform resource identifier (URI), an object identifier (OID), or any other identifier system. It is up to the implementation and environment what interpretation, if any, is given to the identifier of a library. For example, assume a library identified as <span class="id">Global.Common</span>:

```cql
library Global.Common

define function "Foo"(A Integer, B Integer):
  A + B
```

When including this library, the <span class="kw">called</span> clause may be omitted:

```cql
library UsingCommon

include Global.Common

define function "Bar"(A Integer, B Integer):
  Common.Foo(A, B)
```

Libraries may also be declared with a specific version. When referencing a library, the reference may include a version specifier. If the reference includes a version specifier, the library with that version specifier must be used. If the reference does not include a version specifier, it is up to the implementation environment to provide the most appropriate version of the referenced library.

It is an error to reference a specific version of a library if the library does not have a version specifier, or if there is no library with the referenced version.

Note that the library declaration is optional in a CQL document, but if it is omitted, it is not possible to reference the library from any other CQL library.

Libraries may reference other libraries to any degree of nesting, so long as no circular library references are introduced, and all references to the same library use the same version. For example, given:

```cql
library A version '1'
library A version '2'

library B includes library A version '1'
library C includes library A version '2'
```

A library D may not reference both B and C, because it would result in two different versions of library A being referenced.

In addition, library references are not transitive, meaning that in order to reference the components declared within a particular library, the library must be explicitly included. In other words, referencing a library does not automatically include libraries referenced by that library.

#### Access Modifiers

Each component of a library may have an access modifier applied, either <span class="kw">public</span> or <span class="kw">private</span>. If no access modifier is applied, the component is considered public. Only public components of a library may be accessed by referencing libraries. Private components can only be accessed within the library itself.

A syntax diagram of the access modifiers can be seen [here](19-l-cqlsyntaxdiagrams.html#accessModifier).

#### Identifier Resolution

Identifier resolution is the process of matching an identifier to a declared symbol in the context in which the identifier appears. 

When resolving identifiers, if a library name is not provided (i.e. the identifier is not qualified), the identifier must refer to a locally or system defined component. If a library name is provided, it must be the local identifier for the library, and that library must contain the identifier being referenced.

For named expressions, CQL supports forward declarations, so long as the resolution does not result in a circular definition.

CQL supports identifier hiding in certain contexts such as query clauses and function bodies where new identifiers may be introduced. In general, identifier hiding follows the principle that newly introduced identifiers hide existing identifiers.

Specifically, query aliases, operand names, and let aliases are allowed to be defined with the same name as an existing identifier, effectively hiding the existing identifier.

For example:

```cql
library IdentifierHiding

define E: 'A top-level expression named E'

define Query: [Encounter] E where E.period is not null

define function A(E Encounter):
  duration in days of E.period
```

The above example defines a top-level expression identified <span class="id">E</span>. In the <span class="id">Query</span> expression, an alias <span class="id">E</span> is introduced, hiding the top-level expression from the scope of the query. Similarly, the function <span class="id">A</span> defines an operand identified <span class="id">E</span>, so within the body of the function, the identifier <span class="id">E</span> refers to the function operand, hiding the top-level expression from the body of the function.

#### Function Resolution

For functions, if a library name is not provided, the invocation must refer to a locally defined function, or a CQL system function. Function resolution proceeds by attempting to match the _signature_ of the invocation, i.e. the number and type of each argument, to a defined signature for the function. Because the CQL type system supports subtyping, generics, and implicit conversion and casting, it is possible for an invocation signature to match multiple defined signatures. In these cases, the _least converting_ signature is chosen, meaning the signature with the fewest required conversions. If multiple signatures have the same number of required conversions, an ambiguous resolution error is thrown, and the author must provide an explicit cast or conversion to resolve the ambiguity.

If a library name is provided, only that library will be searched for a resolution.

As with expressions, CQL supports forward declarations for functions, so long as the reference does not result in a cycle.

{: #data-models-1}
### Data Models

CQL allows any number of data models to be included in a given library, subject to the following constraints:

* The data model identifier must be unique, both among data models, as well as libraries.
* Data model references are not included from referenced libraries. To reference the data types in a data model, an appropriate local using declaration must be specified.

As with library references, data model references may include a version specifier. If a version is specified, then the environment must ensure that the version specifier matches the version of the data model supplied. If no data model matching the requested version is present, an error is thrown.

#### Alternate Data Models

Although the examples in this specification generally use the QUICK model (part of the Clinical Quality Framework), CQL itself does not require or depend on a specific data model. For example, the following sample is taken from the CMS146v2_using_QDM.cql file in the Examples section of the specification:

```cql
["Encounter, Performed": "Ambulatory/ED Visit"] E
  with ["Diagnosis": "Acute Pharyngitis"] P such that
    interval[P."start datetime", P."stop datetime")
      overlaps after interval[E."start datetime", E."stop datetime")
```

In this example, QDM is used as the data model. Note the use of quoted attribute identifiers to allow for the spaces in the names of QDM attributes.

#### Multiple Data Models

Because CQL allows multiple <span class="kw">using</span> declarations, the possibility exists for clashes within retrieve expressions. For example, a library that used both QUICK and vMR may clash on the name <span class="id">Encounter</span>. In general, the resolution process for class names within CQL proceeds as follows:

* If the class name has no qualifier, then each model used in the current library is searched for an exact match.
    * If an exact match is found in more than one model, the reference is considered ambiguous and an error is thrown that the class reference is ambiguous among the matches found.
    * If an exact match is found in only one model, that model and type is used.
    * If no match is found in any model, an error is thrown that the referenced name cannot be resolved.
* If the class name has a qualifier, then the qualifier specifies the model to be searched, and only that model is used to attempt a resolution.
    * If the qualifier specifies the name of a model that cannot be found in the current library, an error is thrown that the referenced model cannot be found.
    * If an exact match is found in the referenced model, that class is used.
    * If no exact match is found, an error is thrown that the qualified class name cannot be resolved.

Note that when the <span class="id">System</span> model declaration is implicit, it is not considered as part of determining ambiguity. In other words, in the following library:

```cql
library Test

using FHIR version '4.0.1'

define function g(q Quantity): q
```

The identifier <span class="id">Quantity</span> in this function declaration resolves to <span class="id">FHIR.Quantity</span> unambiguously because only the <span class="id">FHIR</span> model is explicitly declared.

### Types

CQL is a statically typed language, meaning that it is possible to infer the type of any given expression, and for any given operator invocation, the type of the arguments must match the types of the operands. To provide complete support for the type system, CQL supports several constructs for dealing with types including _type specifiers_, as well as _conversion_, _casting_, and _type-testing_ operators.

CQL uses a single-inheritance type system, meaning that each type is derived from at most one type. Given a type T and a type T' derived from type T, the following statements are true:

* The type T is a _supertype_ of type T'.
* The type T' is a _subtype_ of type T.
* A value of type T' may appear anywhere a value of type T is expected.

#### System-Defined Types

CQL defines several base types that provide the elements for constructing other types, as well as for defining the operations available within the language.

The maximal supertype is System.Any. All other types derive from System.Any, meaning that any value is of some type, and also ultimately of type System.Any.

All the system-defined types derive directly from System.Any. The primitive types and their ranges are summarized here:

<a name="table-3-g"></a>

|Type |Range |Step Size
|----|----|----
|**Boolean** |false..true |N/A
|**Integer** |-2<sup>31</sup>..2<sup>31</sup>–1 |1
|**Long** |-2<sup>63</sup>..2<sup>63</sup>-1 |1
|**Date** |@0001-01-01..@9999-12-31 |1 day
|**DateTime** |@0001-01-01T00:00:00.0..@9999-12-31T23:59:59.999 |1 millisecond
|**Decimal** |(-10<sup>28</sup>+1)/10<sup>8</sup>..(10<sup>28</sup>-1)/10<sup>8</sup> |10<sup>-8</sup>
|**String** |All strings of length 2<sup>31</sup>-1 or less. |N/A
|**Time** |@T00:00:00.0..@T23:59:59.999 |1 millisecond
{: .grid .table .table-striped}

Table 3‑G - The primitive types and their ranges supported in CQL

Note that CQL supports three-valued logic, see the section on [Missing Information](02-authorsguide.html#missing-information) in the Author's Guide, as well as the section on [Missing Information](#missing-information) in the Developer's guide for more.

In addition, CQL defines several structured types to facilitate representation and manipulation of clinical information:

<a name="table-3-h"></a>

|Type |Description
|----|----
|**Code** |Represents a clinical terminology code, including the code identifier, system, version, and display.
|**Concept** |Represents a single concept as a list of equivalent Codes.
|**Quantity** |Represents a quantity with a dimension, specified in UCUM units.
|**Ratio** |Represents a ratio between two quantities
{: .grid .table .table-striped}

Table 3‑H - The structured types to facilitate representation and manipulation of clinical information

For more information about these types, refer to the [CQL Reference](09-b-cqlreference.html) section on [Types](09-b-cqlreference.html#types-2).

#### Specifying Types

In various constructs, the type of a value must be specified. For example, when defining the type of a parameter, or when testing a value to determine whether it is of a specific type. CQL provides the _type specifier_ for this purpose. There are five categories of type-specifiers, corresponding to the four categories of values supported by CQL, plus a choice type category that allows for more flexible models and expressions:

* Named Types
* Tuple Types
* Interval Types
* List Types
* Choice Types

A syntax diagram of the _type specifiers_ in CQL can be seen [here](19-l-cqlsyntaxdiagrams.html#typeSpecifier).

The _named type specifier_ is simply the name of the type. For example:

```cql
parameter Threshold Integer
```

This example declares a parameter named <span class="id">Threshold</span> of type <span class="id">Integer</span>.

A syntax diagram of a _named type specifier_ construct can be seen [here](19-l-cqlsyntaxdiagrams.html#namedTypeSpecifier).

The _tuple type specifier_ allows the names and types of the elements of the type to be specified. For example:

```cql
parameter Demographics Tuple { address String, city String, zip String }
```

A syntax diagram of a _tuple type specifier_ construct can be seen [here](19-l-cqlsyntaxdiagrams.html#tupleTypeSpecifier).

The _interval type specifier_ allows the point-type of the interval to be specified:

```cql
parameter Range Interval<Integer>
```

A syntax diagram of a _interval type specifier_ construct can be seen [here](19-l-cqlsyntaxdiagrams.html#intervalTypeSpecifier).

The _list type specifier_ allows the element-type of a list to be specified:

```cql
parameter Points List<Integer>
```

A syntax diagram of a _list type specifier_ construct can be seen [here](19-l-cqlsyntaxdiagrams.html#listTypeSpecifier).

And finally, the _choice type specifier_ allows a choice type to be specified:

```cql
parameter ChoiceValue Choice<Integer, String>
```

A syntax diagram of a _choice type specifier_ construct can be seen [here](19-l-cqlsyntaxdiagrams.html#choiceTypeSpecifier).

#### Type Testing

CQL supports the ability to test whether or not a value is of a given type. For example:

```cql
5 is Integer
```

returns <span class="kw">true</span> because <span class="lit">5</span> is an <span class="id">Integer</span>.

In general, the _is_ relationship determines whether or not a given type is derived from another type. Given a type T and a type T' derived from type T, the following definitions hold:

* Identity – T is T
* Subtype – T' is T

Note that because of the _identity_ relationship above, the term _subtype_ applies to all derived types, as well as the type itself. In the discussions that follow, if a definition must explicitly refer to only derived types, the term _proper subtype_ will be used.

For interval types, given a point type P, and a point type P' derived from type P, interval type Interval<P'> is a subtype of interval type Interval<P>.

For list types, given an element type E, and an element type E' derived from type E, list type List<E'> is a subtype of list type List\<E>.

For tuple types, given a tuple type T with elements E<sub>1</sub>, E<sub>2</sub>, ...E<sub>n</sub>, names N<sub>1</sub>, N<sub>2</sub>, ...N<sub>n</sub>­, and types T<sub>1</sub>, T<sub>2</sub>, ...T<sub>n</sub>, respectively, a tuple type T' with elements E'<sub>1</sub>, E'<sub>2</sub>, ...E'<sub>n</sub>, names N'<sub>1</sub>, N'<sub>2</sub>, ...N'<sub>n</sub>, and types T'<sub>1</sub>, T'<sub>2</sub>, ...T'<sub>n</sub>, type T' is a subtype of type T if and only if:

* The number of elements in each type is the same: \|E\| = \|E'\|
* For each element in T, there is one element in T' with the same name, and the type of the matching element in T' is a subtype of the type of the element in T.

For structured types, the supertype is specified as part of the definition of the type. Subtypes inherit all the elements of the supertype and may define additional elements that are only present on the derived type.

#### Choice Types

CQL also supports the notion of a _choice type_, a type that is defined by a list of component types. For example, an element of a tuple type may be a choice of <span class="id">Integer</span> or <span class="id">String</span>, meaning that the element may contain a value that is either an <span class="id">Integer</span>, or a <span class="id">String</span>.

In addition, choice types can be used to indicate the type of a list of mixed elements, such as the result of a <span class="kw">union</span>:

```cql
[Procedure] union [Encounter]
```

This example results in a list that contains both Procedures and Encounters, and the resulting type is <span class="id">Choice\<Procedure, Encounter></span>.

An expression of a choice type can be used anywhere that a value of any of its component types is expected, and an implicit cast will be used to restrict the choice type to the correct component type.

For example, given an <span class="id">Observation</span> type with an element <span class="id">value</span> of type <span class="id">Choice\<String, Code, Integer, Decimal, Quantity></span>, the following expressions are all valid:

```cql
Observation.value + 12
Observation.value & ' (observed)'
Observation.value in "Valid Values"
Observation.value < 5 'mg'
```

These expressions will result in an implicit cast being applied as follows:

```cql
(Observation.value as Integer) + 12
(Observation.value as String) & ' (observed)'
(Observation.value as Code) in "Valid Values"
(Observation.value as Quantity) < 5 'mg'
```

The semantics for casting will result in a <span class="kw">null</span> if the run-time value of the element is not of the appropriate type.

When accessing an element of a choice type with structured types as components, any element can be accessed. Note, however, that if the element being accessed is present in multiple components, the resulting expression may be a choice type if the elements have different types.

In addition, the choice type enables the set operations, <span class="kw">union</span>, <span class="kw">intersect</span>, and <span class="kw">except</span> to be generalized to work on lists of different types.

For <span class="kw">union</span>, this means that the inputs can be lists of different types of elements, and the type of the result is now a choice type with components of each of the input types. If the input types are the same, the result is a choice with a single component which degenerates to the component type.

For <span class="kw">intersect</span>, this means the inputs can be lists of different types of elements, and the type of the result is a choice with only the types that are common between the input types. Again, if this results in a choice with a single component, it degenerates to the component type.

For <span class="kw">except</span>, this means that the inputs can contain lists of different types of elements, but because the except may not exclude all the values of a given type, the result will be the same type as the left input.

#### Type Inference

Type inference is the process of determining the type of an expression based on the types of the values and operations involved in the expression. CQL is a strongly typed language, meaning that it is always possible to infer the type of an expression at compile-time (i.e. by static analysis).

The type inference rules for the various categories of language constructs are given in the following sections.

##### Literals and Selectors

The type of a literal is trivial for the primitive types and selectors: <span class="id">Boolean</span>, <span class="id">String</span>, <span class="id">Integer</span>, <span class="id">Long</span>, <span class="id">Decimal</span>, <span class="id">Date</span>, <span class="id">DateTime</span>, <span class="id">Time</span>, <span class="id">Quantity</span>, and <span class="id">Ratio</span>.

The type of the null selector is Any.

For a list selector, the type may be specified as part of the selector:

```cql
List<System.Integer> { 1, 2, 3 }
```

Or it may be inferred based on the types of the elements:

```cql
{ 1, 2, 3 }
```

For an empty list, with no specifier, the type is List\<Any>.

If the type of a list is specified, the elements in the list are required to be of the declared element type of the list.

If the type of the list is inferred, the type of the first element is used initially, and subsequent elements in the list are required to be of the inferred type of the first element, with the exception that if a subsequent element is a supertype of the initial element, or if the initial element is convertible to the type of a subsequent element, the type of the subsequent element will become the new inferred element type for the list.

For a tuple selector, the type is constructed from the elements in the tuple selector.

For an instance selector, the type is determined by the name of the type of the instance being constructed.

##### Operators and Functions

In general, the result type of an operator or function is determined by the declared return type of the function. For example, the (Integer, Integer) overload of the Add operator returns an Integer value, so the type of an Add invocation is Integer:

```cql
3 + 4
```

The CQL Reference appendix gives the signatures and declared return types for all system operators.

In addition to special cases for operators such as conditionals and Coalesce, CQL defines implicit conversion, casting, and promotion and demotion to provide more flexible type checking rules. These special cases are described in subsequent sections.

{: #queries-1}
##### Queries

For queries, the type inference rules are based on the clauses used, beginning with single-source queries:

1. For a single-source query, the initial type of the query is the type of expression defining the single source. If the expression is singular (i.e. non-list-valued) the query ranges over only that element. If the expression is plural, the query ranges over all the elements in the list.
2. For a multi-source query, the initial type of the query is defined by a tuple where each tuple has an element for each source in the query, named the alias name of the source, and of the type of the expression defining the source. If all sources are singular the initial type of the query is the singular tuple type. If any source is plural, the initial type of the query is a list of the tuple type.
3. Let clauses only introduce content that can be referenced within the scope of the query, they do not impact the type of the result unless referenced within a return clause.
4. With and without clauses only limit the set of results returned by a query, they do not impact the type of the result.
5. A where clause only limits the set of results returned by the query, it does not impact the type of the result.
6. The return clause determines the overall shape of the query result. If there is no return clause, the result type of the query is the same as the initial type of the query as determined based on the sources. If a return clause is used, the result type of the query is inferred based on the return expression. If the query is singular, the result type is the type of the return clause expression. If the query is plural, the result type is a list whose element types are the type of the return expression.
7. Similar to the return clause, an aggregate clause, if present, determines the overall result of the query. If an aggregate clause is used, the result type of the query is the result type of the aggregate expression, regardless of whether the query is singular or plural.

#### Conversion

Conversion is the operation of turning a value from one type into another. For example, converting a number to a string, or vice-versa. CQL supports explicit conversion operators, as well as implicit conversion for some specific types.

##### Explicit Conversion

The explicit <span class="kw">convert</span> can be used to convert a value from one type to another. For example, to convert the string representation of a datetime to a <span class="id">DateTime</span> value:

```cql
convert '2014-01-01T12:00:00.0-06:00' to DateTime
```

If the conversion cannot be performed, the result is <span class="kw">null</span>. For example:

```cql
convert 'Foo' to Integer
```

will result in <span class="kw">null</span>. The convert syntax is equivalent to invoking one of the defined conversion operators:

<a name="table-3-i"></a>

|Operator |Description
|----|----
|**ToBoolean(Decimal)** |Converts the decimal representation of a boolean value (`0.0` or `1.0`) to a Boolean value
|**ToBoolean(Integer)** |Converts the integer representation of a boolean value (`0` or `1`) to a Boolean value
|**ToBoolean(Long)** |Converts the long representation of a boolean value (`0L` or `1L`) to a Boolean value
|**ToBoolean(String)** |Converts the string representation of a boolean value to a Boolean value
|**ToInteger(Boolean)** |Converts a boolean to an integer value, true results in `1`, false results in `0`
|**ToInteger(Long)** |Converts a Long value to an equivalent Integer value
|**ToInteger(String)** |Converts the string representation of an integer value to an Integer value using the format (<span class="sym">+\|-</span>)d*
|**ToLong(Boolean)** |Converts a boolean value to an equivalent Long value, true results in `1L`, false results in `0L`
|**ToLong(Integer)** |Converts an Integer value to an equivalent Long value
|**ToLong(String)** |Converts the string representation of a long value to a Long value using the format (<span class="sym">+\|-</span>)d*
|**ToDecimal(Boolean)** |Converts a Boolean value to an equivalent Decimal value, true results in `1.0`, false results in `0.0`
|**ToDecimal(Integer)** |Converts an Integer value to an equivalent Decimal value
|**ToDecimal(Long)** |Converts a Long value to an equivalent Decimal value
|**ToDecimal(String)** |Converts the string representation of a decimal value to a Decimal value using the format (<span class="sym">+\|-</span>)d\*.d\*
|**ToQuantity(Decimal)** |Converts a Decimal value to a Quantity with a default unit ('1')
|**ToQuantity(Integer)** |Converts an Integer value to a Quantity with a default unit ('1')
|**ToQuantity(Long)** |Converts a Long value to a Quantity with a default unit ('1')
|**ToQuantity(String)** |Converts the string representation of a quantity value to a Quantity value using the format (<span class="sym">+\|-</span>)d\*.d\*'units'
|**ToRatio(String)** |Converts the string representation of a ratio value to a Ratio value using the format \<quantity>:\<quantity>
|**ToDate(String)** |Converts the string representation of a date value to a Date value using ISO-8601 format: YYYY-MM-DD
|**ToDate(DateTime)** |Converts a DateTime to a Date. This is equivalent to invoking <span class="kw">date from</span> on the DateTime value
|**ToDateTime(Date)** |Converts a Date value to a DateTime with all time components unspecified and the timezone offset of the request
|**ToDateTime(String)** |Converts the string representation of a datetime value to a DateTime value using ISO-8601 format: YYYY-MM-DDThh:mm:ss.fff(+\|-)hh:mm
|**ToTime(String)** |Converts the string representation of a time value to a Time value using ISO-8601 format: hh:mm:ss.fff
|**ToString(Boolean)** |Converts a Boolean value to its string representation (true\|false)
|**ToString(Integer)** |Converts an Integer value to its string representation
|**ToString(Long)** |Converts a Long value to its string representation
|**ToString(Decimal)** |Converts a Decimal value to its string representation
|**ToString(Quantity)** |Converts a Quantity value to its string representation
|**ToString(Ratio)** |Converts a Ratio value to its string representation
|**ToString(Date)** |Converts a Date value to its string representation
|**ToString(DateTime)** |Converts a DateTime value to its string representation
|**ToString(Time)** |Converts a Time value to its string representation
|**ToConcept(Code)** |Converts a Code value to a Concept with the given Code as its primary and only Code. If the Code has a display value, the Concept will have the same display value.
|**ToConcept(List\<Code>)** |Converts a list of Code values to a Concept with the first Code in the list as the primary Code. If the primary Code has a display value, the Concept will have the same display value.
{: .grid .table .table-striped}

Table 3‑I - The defined type conversion operators in CQL

For a complete description of these conversion operators, refer to the [Type Operators](09-b-cqlreference.html#type-operators-1) section in the [CQL Reference](09-b-cqlreference.html).

##### Quantity Conversions

In addition to type conversions, CQL supports _quantity conversion_, converting a quantity from one unit to another unit using the same <span class="kw">convert</span> keyword:

```cql
convert 5000 'g' to 'kg'
convert 28 days to weeks
```

If the unit conversion is valid, the expression results in a quantity with the target units. If the unit conversion is invalid, the result is <span class="kw">null</span>.

> Note that implementations are not required to support quantity conversion. Implementations that do support unit conversion shall do so according to the conversion specified by UCUM. Implementations that do not support unit conversion shall throw an error if an unsupported unit conversion is requested with this operation.
{: .note-warning}

##### Implicit Conversions

In addition to the explicit conversion operators discussed above, CQL supports implicit conversions for specific types to enable expressions to be built more easily. The following table lists the explicit and implicit conversions supported in CQL:

<a name="table-3-j"></a>

|From\To   |Boolean |Integer |Long |Decimal |Quantity |Ratio |String |Date |DateTime |Time |Code |Concept |List\<Code> |ValueSet
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----
|**Boolean** |N/A |Explicit |Explicit |Explicit |- |- |Explicit |- |- |- |- |- |- |-
|**Integer** |Explicit |N/A |Implicit |Implicit |Implicit |- |Explicit |- |- |- |- |- |- |-
|**Long** |Explicit |Explicit |N/A |Implicit |Implicit |- |Explicit |- |- |- |- |- |- |-
|**Decimal** |Explicit |- |- |N/A |Implicit |- |Explicit |- |- |- |- |- |- |-
|**Quantity** |- |- |- |- |N/A |- |Explicit |- |- |- |- |- |- |-
|**Ratio** |- |- |- |- |- |N/A |Explicit |- |- |- |- |- |- |-
|**String** |Explicit |Explicit |Explicit |Explicit |Explicit |Explicit |N/A |Explicit |Explicit |Explicit |- |- |- |-
|**Date** |- |- |- |- |- |- |Explicit |N/A |Implicit |- |- |- |- |-
|**DateTime** |- |- |- |- |- |- |Explicit |Explicit |N/A |- |- |- |- |-
|**Time** |- |- |- |- |- |- |Explicit |- |- |N/A |- |- |- |-
|**Code** |- |- |- |- |- |- |- |- |- |- |N/A |Implicit |- |-
|**Concept** |- |- |- |- |- |- |- |- |- |- |- |N/A |Explicit |-
|**List\<Code>** |- |- |- |- |- |- |- |- |- |- |- |Explicit |N/A |-
|**ValueSet** |- |- |- |- |- |- |- |- |- |- |- |- |Implicit |N/A
{: .grid .table .table-striped}

Table 3‑J - The explicit and implicit conversions supported in CQL

In addition to these conversions, note that specific data models may introduce conversions, including implicit conversions.

Although implicit conversions can be performed using the explicit convert, the language will also automatically apply implicit conversions when appropriate to produce a correctly typed expression. For example, consider the following multiplication:

```cql
define "MixedMultiply": 1 * 1.0
```

The type of the literal <span class="lit">1</span> is <span class="id">Integer</span>, and the type of the literal <span class="lit">1.0</span> is <span class="id">Decimal</span>. To infer the type of the expression correctly, the language will implicitly convert the type of the <span class="lit">1</span> to <span class="id">Decimal</span> by inserting a <span class="id">ToDecimal</span> invocation. The multiplication is then performed on two <span class="id">Decimals</span>, and the result type is <span class="id">Decimal</span>.

In addition, CQL defines implicit conversion of a named structured type to its equivalent tuple type. For example, given the type <span class="id">Person</span> with elements <span class="id">Name</span> of type <span class="id">String</span> and <span class="id">DOB</span> of type <span class="id">DateTime</span>, the following comparison is valid:

```cql
define "TupleComparison": Person { Name: 'Joe', DOB: @1970-01-01 } = Tuple { Name: 'Joe', DOB: @1970-01-01 }
```

In this case, the structured value will be implicitly converted to the equivalent tuple type, and the comparison will evaluate to true.

Note that the opposite implicit conversion, from a tuple to a named structured type, does not occur because a named structured type has additional information (namely the type hierarchy) that cannot be inferred from the definition of a tuple type. In such cases, an explicit conversion can be used:

```cql
define "TupleExpression": Tuple { Name: 'Joe', DOB: @1970-01-01 }
define "TupleConvert": convert TupleExpression to Person
```

The conversion from a tuple to a structured type requires that the set of elements in the tuple type be the same set or a subset of the elements in the structured type.

#### Casting

Casting is the operation of treating a value of some base type as a more specific type at run-time. The <span class="kw">as</span> operator provides this functionality. For example, given a model that defines an <span class="id">ImagingProcedure</span> as a specialization of a <span class="id">Procedure</span>, in the following example:

```cql
define "AllProcedures": [Procedure]
define "ImagingProcedures":
  AllProcedures P
    where P is ImagingProcedure
    return P as ImagingProcedure
```

the <span class="id">ImagingProcedures</span> expression returns all procedures that are instances of <span class="id">ImagingProcedure</span> as instances of <span class="id">ImagingProcedure</span>. This means that attributes that are specific to <span class="id">ImagingProcedure</span> can be accessed.

If the run-time type of the value is not of the type specified in the <span class="kw">as</span> operator, the result is <span class="kw">null</span>.

In addition, CQL supports a _strict_ cast, which has the same semantics as casting, except that if the run-time type of the value is not of the type specified, a run-time error is thrown. The keyword <span class="kw">cast</span> is used to indicate a strict cast:

```cql
define "StrictCast": cast First(Procedures) as ImagingProcedure
```

##### Implicit Casting

CQL also supports the notion of _implicit casting_ to prevent the need to cast a <span class="kw">null</span> literal to a specific type. For example, consider the following expression:

```cql
define "ImplicitCast": 5 * null
```

The type of the first argument to the multiplication is <span class="id">Integer</span>, and the type of the second argument is <span class="id">Any</span>, an untyped <span class="kw">null</span> literal. But multipication of <span class="id">Integer</span> and <span class="id">Any</span> is not defined and <span class="id">Any</span> is a supertype of <span class="id">Integer</span>, not a subtype. This means that with strict typing, this expression would not compile without the addition of an explicit cast:

```cql
define "ImplicitCast": 5 * (null as Integer)
```

To avoid the need for this explicit cast, CQL implicitly casts the <span class="id">Any</span> to <span class="id">Integer</span>.

#### Promotion and Demotion

To simplify the expression of logic involving lists and intervals, CQL defines _promotion_ and _demotion_, which are a special class of implicit conversions.

Promotion is used to implicitly convert a value to a list of values of that type. Whenever an operation that expects a list-valued argument is passed a single value, the single value may be promoted to a list of the same type containing the single value as its only element.

Demotion is the opposite, used to implicitly extract a single value from a list of values. Whenever an operation that expects a singleton is passed a list, the list may be demoted to a singleton using <span class="kw">singleton from</span>.

For intervals, promotion is performed by creating an interval with the single value as the start and end of the interval, and demotion is performed using <span class="kw">point from</span>.

Note that the use of demotion has the potential to result in a run-time error if <span class="kw">singleton from</span> is invoked on a list with multiple elements, or if <span class="kw">point from</span> is invoked on an interval wider than a single point. In addition, promotion and demotion can sometimes result in unexpected behavior. As such, environments may choose whether or not to support these features of the language.

Whether or not promotion and demotion should be used depends on the type-safety expectations for each use case. As such, promotion and demotion should only be used in environments where the consequences are well understood. By default, list promotion and demotion are appropriate to support the use of FHIRPath, interval promotion is used only to enable mixed-type signatures for the <span class="kw">same or after</span> and <span class="kw">same or before</span> operators, and interval demotion is not used.

#### Conversion Precedence

Because of the possibility that a given invocation signature may be resolved to multiple overloads of an operator through the application of different conversions, CQL specifies a conversion precedence for resolving the ambiguity. When matching the invocation type of an argument to the declared type of the corresponding argument of an operator, the following precedence is applied:

1.  Exact match – If the invocation type is an exact match to the declared type of the argument
2.  Subtype – If the invocation type is a subtype of the declared type of the argument
3.  Compatible – If the invocation type is compatible with the declared type of the argument (e.g., the invocation type is Any)
4.  Cast - If the invocation type can be cast to the declare type (e.g., the invocation type is a choice that includes the declared type)
5.  Implicit Conversion To Simple Type – An implicit conversion is defined from the invocation type of the argument to the declared type of the argument, and the declared type is a simple type
6.  Implicit Conversion To Class Type - An implicit conversion is defined from the invocation type of the argument to the declared type of the argument, and the declared type is a class type
7.  Interval Promotion - The declared type is an interval and the invocation type can be promoted to an interval of that type
8.  List Demotion – The invocation type of the argument is a list and can be demoted to the declared type
9.  Interval Demotion - The invocation type of the argument is an interval and can be demoted to the declared type
10.  List Promotion – The declared type is a list and the invocation type can be promoted to a list of that type

These conversion precedences can be viewed as ordered from _least converting_ to _most converting_. When determining a conversion path from an invocation signature to a declared signature, the _least converting_ overall conversion path is used.

Class and tuple types are compatible if the elements of one type are a subset of the elements of the other, by name. Choice types are compatible if the choices of one type are a subset of the choices of the other.

This ordering of conversion precedence also implies a type precedence to resolve ambiguity when overloads differ by type category:

1. Simple Types
2. Tuples
3. Classes
4. Intervals
5. Lists
6. Choices

For example, the expression

```cql
Interval[1, null] properly includes null
```

Because the <span class="kw">null</span> can be interpreted as either a point or an interval, type precedence is used to distinguish the overloads, and the point overload is chosen.

### Conditional Expressions

To simplify the expression of complex logic, CQL provides two flavors of conditional expressions, the <span class="kw">if</span> expression, and the <span class="kw">case</span> expression.

The if expression allows a single condition to select between two expressions:

```cql
if Count(X) > 0 then X[1] else 0
```

This expression checks the count of X and returns the first element if it is greater than <span class="lit">0</span>; otherwise, the expression returns <span class="lit">0</span>. Note that if the condition evaluates to <span class="kw">null</span>, it is interpreted as <span class="kw">false</span>.

The <span class="kw">case</span> expression allows multiple conditions to be tested, and comes in two flavors: standard case, and selected case.

A standard case allows any number of conditions, each with a corresponding expression that will be the result of the <span class="kw">case</span> if the associated condition evaluates to <span class="kw">true</span>. Note that as with the if expression, if the condition evaluates to <span class="kw">null</span>, it is interpreted as <span class="kw">false</span>. If none of the conditions evaluate to <span class="kw">true</span>, the <span class="kw">else</span> expression is the result:

```cql
case
  when X > Y then X
  when Y > X then Y
  else 0
end
```

A selected case specifies a comparand, and each case item specifies a possible value for the comparand. If the comparand is equal to a case item, the corresponding expression is the result of the selected case. If the comparand does not equal any of the case items, the else expression is the result:

```cql
case X
  when 1 then 12
  when 2 then 14
  else 15
end
```

Note that if the source expression in a selected case is <span class="kw">null</span>, no condition will compare equal and the result will be the else expression. If any case item is <span class="kw">null</span>, it will not compare equal to the comparand.

Both of these conditional expression constructs require run-time conditional evaluation. This is sometimes referred to as short-circuit evaluation for conditional expressions. For implementations, this means delaying evaluation of the arguments. Revisiting the first example in this section:

```cql
if Count(X) > 0 then X[1] else 0
```

Short-circuit evaluation means the expression `X[1]` will only be evaluated if `Count(X) > 0` evaluates to <span class="kw">true</span>. This is in contrast to the logical operators <span class="kw">and</span> and <span class="kw">or</span>, where short-circuit evaluation is not required.

### Nullological Operators

To provide complete support for missing information, CQL supports several operators for testing for and dealing with null results.

To provide a null result, use the <span class="kw">null</span> keyword:

```cql
null
```

To test whether an expression is <span class="kw">null</span>, use the _null test_:

```cql
X is null
X is not null
```

To replace a null with the result of an expression, use a simple <span class="kw">if</span> expression:

```cql
if X is null then Y else X
```

To return the first non-null expression among two or more expressions, use the <span class="id">Coalesce</span> operator:

```cql
Coalesce(X, Y, Z)
```

which is equivalent to:

```cql
case
  when X is not null then X
  when Y is not null then Y
  else Z
end
```

In addition, CQL supports the boolean-test operators <span class="kw">is [not] true</span> and <span class="kw">is [not] false</span>. These operators, like the null-test operator, only return <span class="kw">true</span> and <span class="kw">false</span>, they will not propagate a <span class="kw">null</span> result.

```cql
X is true
X is not false
```

The first example will return <span class="kw">true</span> if X evaluates to <span class="kw">true</span>, <span class="kw">false</span> if X evaluates to <span class="kw">false</span> or <span class="kw">null</span>. The second example will return <span class="kw">true</span> if X evaluates to <span class="kw">true</span> or <span class="kw">null</span>, <span class="kw">false</span> if X evaluates to <span class="kw">false</span>. Note in particular that these operators are _not_ equivalent to comparison of <span class="id">Boolean</span> results using equality or inequality.

### String Operators

Although less common in typical clinical logic, some use cases require string manipulation. As such, CQL supports a core set of string operators.

Like lists, strings are 0-based in CQL. To index into a string, use the _indexer_ operator:

```cql
X[0]
```

To determine the length of string, use the <span class="id">Length</span> operator:

```cql
Length(X)
```

To determine the position of a given pattern within a string, use the <span class="id">PositionOf</span> operator:

```cql
PositionOf('cde', 'abcdefg')
```

The <span class="id">PositionOf()</span> operator returns the index of the starting character of the first argument in the second argument, if the first argument can be located in the second argument. Otherwise, <span class="id">PositionOf()</span> returns <span class="lit">-1</span> to indicate the pattern was not found in the string. To find the last appearance of a given pattern, use <span class="id">LastPositionOf()</span>, and to find patterns at the beginning and end of a string, use <span class="id">StartsWith()</span> and <span class="id">EndsWith()</span>. Regular expression matching can be performed with the <span class="id">Matches()</span> and <span class="id">ReplaceMatches()</span> operators.

To return a substring from a given string, use the <span class="id">Substring</span> operator:

```cql
Substring('abcdefg', 0, 3)
```

This example returns the string <span class="lit">'abc'</span>. The second argument is the starting index of the substring to be returned, and the third argument is the length of the substring to be returned. If the length is greater than the number of characters present in the string from the starting index on, the result includes only the remaining characters. If the starting index is less than 0, or greater than the length of the string, the result is <span class="kw">null</span>. The third argument is optional; if it is not provided, the substring is taken from the starting index to the end of the string.

To concatenate strings, use the <span class="sym">+</span> operator:

```cql
'abc' + 'defg'
```

Note that when using <span class="sym">+</span> with string values, if either argument is <span class="kw">null</span>, the result will be <span class="kw">null</span>. To treat <span class="kw">null</span> as the empty string (<span class="sym">''</span>), use the <span class="sym">&</span> operator:

```cql
'abc' & 'defg'
```

To combine a list of strings, use the <span class="id">Combine</span> operator:

```cql
Combine({ 'ab', 'cd', 'ef' })
```

The result of this expression is:

```cql
'abcdef'
```

To combine a list with a separator, provide the separator argument to the <span class="id">Combine</span> operator:

```cql
Combine({ 'completed', 'refused', 'pending' }, ';')
```

The result of this expression is:

```cql
'completed;refused;pending'
```

To split a string into a list of strings based on a specific separator, use the <span class="id">Split</span> operator:

```cql
Split('completed;refused;pending', ';')
```

The result of this expression is:

```cql
{ 'completed', 'refused', 'pending' }
```

Use the <span class="id">Upper</span> and <span class="id">Lower</span> operators to return strings with upper or lowercase letters for all characters in the argument.

{: #introducing-context-in-queries}
### Introducing Scoped Definitions in Queries

The CQL query construct provides for the ability to introduce named expressions that only exist within the scope of a single query. The _let clause_ of queries allows any number of definitions to be provided. Each definition has access to all the available components of the query scope. This feature is extremely useful for simplifying query logic by allowing complex expressions to be defined and then reused within the scope of a single query. For example:

```cql
"Medications" M
  let ingredients: GetIngredients(M.rxNormCode)
  return
    ingredients I
      let
        adjustedDoseQuantity: EnsureMicrogramQuantity(M.doseQuantity),
        dailyDose:
          GetDailyDose(
            I.ingredientCode,
            I.strength,
            I.doseFormCode,
            adjustedDoseQuantity,
            M.dosesPerDay
          ),
        factor: GetConversionFactor(I.ingredientCode, dailyDose, I.doseFormCode)
      return {
        rxNormCode: M.rxNormCode,
        doseFormCode: I.doseFormCode,
        doseQuantity: adjustedDoseQuantity,
        dosesPerDay: M.dosesPerDay,
        ingredientCode: I.ingredientCode,
        ingredientName: I.ingredientName,
        strength: I.strength,
        dailyDose: dailyDose,
        mme: Quantity { value: dailyDose.value * factor, unit: dailyDose.unit + '/d' }
      }
```

In this query, the same logic defined by the <span class="id">dailyDose</span> expression can be reused multiple times in the where clause, avoiding the need to repeat the calculation and making the intended meaning of the logic much more clear.

Note also the ability to reference a previously defined let in the same scope, as in the use of <span class="id">adjustedDoseQuantity</span> in the definition of <span class="id">dailyDose</span>.

### Multi-Source Queries

In addition to the single-source queries discussed in the Author’s Guide, CQL provides multi-source queries to allow for the simple expression of complex relationships between sets of data. Consider the following excerpt from the numerator of a measure for appropriate warfarin and parenteral anticoagulation overlap therapy:

* *Numerator =*
    * Patients who received warfarin and parenteral anticoagulation:
        * Five or more days, with an INR greater than or equal to 2 prior to discontinuation of parenteral therapy
        * OR: Five or more days, with an INR less than 2 and discharged on overlap therapy
        * OR: Less than five days and discharged on overlap therapy

We begin by breaking this down into the source components, Encounters, Warfarin Therapy, and Parenteral Therapy:

```cql
define "Encounters": [Encounter: "Inpatient"] E
  where E.period during "Measurement Period"
define "Warfarin Therapy": [MedicationAdministration: "Warfarin"]
define "Parenteral Therapy": [MedicationAdministration: "Parenteral Anticoagulation"]
```

First, we establish that the encounter had both warfarin and parenteral anticoagulation therapies. This is easy enough to accomplish using <span class="kw">with</span> clauses:

```cql
define "Encounters with Warfarin and Parenteral Therapies":
  "Encounters" E
    with "Warfarin Therapy" W such that W.effectiveTime starts during E.period
    with "Parenteral Therapy" P such that P.effectiveTime starts during E.period
```

However, the next step involves calculating the duration of overlap between the warfarin and parenteral therapies, and a with clause only filters by a relationship, it does not introduce any data from the related source. To allow queries like this to be easily expressed, CQL allows a <span class="kw">from</span> clause to be used to start a query:

```cql
define "Encounters with Warfarin and Parenteral Therapies":
  from "Encounters" E,
    "Warfarin Therapy" W,
    "Parenteral Therapy" P
  where W.effectiveTime starts during E.period
    and P.effectiveTime starts during E.period
```

We now have both the encounter and the warfarin and parenteral therapies in scope and can perform calculations involving all three:

```cql
define "Encounters with overlapping Warfarin and Parenteral Therapies":
  from "Encounters" E,
    "Warfarin Therapy" W,
    "Parenteral Therapy" P
  where W.effectiveTime starts during E.period
    and P.effectiveTime starts during E.period
    and duration in days of (W.effectiveTime intersect P.effectiveTime) >= 5
    and Last([Observation: "INR Value"] I
      where I.applies during P.effectiveTime sort by applies).value >= 2
```

This gives us the first condition, namely that a patient was on overlapping warfarin and parenteral therapies for at least 5 days, and the ending INR result associated with the parenteral therapy is greater than or equal to 2.

Next, we need to build criteria for the other cases, but these cases involve the same calculations, just compared against different values, or in different ways. Rather than having to restate the calculations multiple times, CQL allows a <span class="kw">let</span> clause to be used to introduce an intermediate computational result within a query:

```cql
define "Encounters with overlapping Warfarin and Parenteral Therapies":
  from "Encounters" E,
    "Warfarin Therapy" W,
    "Parenteral Therapy" P
  let
    overlapDuration: duration in days of (W.effectiveTime intersect P.effectiveTime),
    endingINR:
      Last([Observation: "INR Value"] I
        where I.applies during P.effectiveTime sort by applies
      ).value
  where W.effectiveTime starts during E.period
    and P.effectiveTime starts during E.period
    and (
      (overlapDuration >= 5 and endingINR >= 2)
      or (overlapDuration >= 5 and endingINR < 2
        and P.effectiveTime overlaps after E.period)
      or (overlapDuration < 5
        and P.effectiveTime overlaps after E.period)
    )
return E
```

Because the return clause in a query is optional, the type of the result of multi-source queries with no return clause is defined as a list of tuples with an element for each source named the alias for the source within the query and of the type of the elements of the source. For example:

```cql
from [Encounter] E, [MedicationStatement] M
```

The result type of this query is:

```cql
List<Tuple { E Encounter, M MedicationStatement }>
```

The result will be a list of tuples containing the cartesian product of all Encounters and Medication Statements.

In addition, the default for return clauses is <span class="kw">distinct</span>, as opposed to <span class="kw">all</span>, so if no return clause is specified, duplicates will be eliminated from the result.

#### Query Syntax Options

Note that the grammar for CQL queries allows for the <span class="kw">from</span> keyword to be used for single- and multi-source queries. For example, the following is valid CQL:

```cql
from [Encounter] E
  where E.effectiveTime starts after Today() - 1 year
```

Moreover, parsing the grammar can be simplified by requiring that all queries start with the <span class="kw">from</span> keyword. To support a change to the language to enable this simplification, environments may require that all queries begin with the <span class="kw">from</span> keyword.

### Non-Retrieve Queries

In addition to the query examples already discussed, it is possible to use any arbitrary expression as the source for a query. For example:

```cql
({ 1, 2, 3, 4, 5 }) L return L * 2
```

This query results in <span class="sym">{</span> <span class="lit">2</span>, <span class="lit">4</span>, <span class="lit">6</span>, <span class="lit">8</span>, <span class="lit">10</span> <span class="sym">}</span>. Note that the parentheses are required for arbitrary expressions. A query source is either a retrieve, a qualified identifier, or a parenthesized expression.

The above example also illustrates that queries need not be based on lists of tuples. In fact, they need not be based on lists at all. The following example illustrates the use of a query to redefine a single tuple:

```cql
define "FirstInpatientEncounter":
  First([Encounter] E where E.class = 'inpatient' sort by period.start desc)

define "RedefinedEncounter":
  FirstInpatientEncounter E
    return Tuple {
      type: E.type,
      admissionDate: E.period.start,
      dischargeDate: E.period.end
    }
```

In addition, even if a given query is based on a list of tuples, the results are not required to be tuples. For example, if only the length of stay is required, the following example could be used to return a list of integers representing the length of stay in days for each encounter:

```cql
[Encounter: "Inpatient"] E
  return duration in days of E.period
```

Note that if any query source in a multi-source query is list-valued, the result is a list, even if other sources are singleton.

If all the sources of a query evaluate to <span class="kw">null</span>, the result is <span class="kw">null</span>

For example, this query over a <span class="kw">null</span> list will return <span class="kw">null</span>:

```cql
define NullListQuery:
  (null as List<FHIR.CodeableConcept>) X
    return Concept {
      codes: X.coding C return FHIRHelpers.ToCode(C)
    }
```

Similarly, this query over a <span class="kw">null</span> object will return <span class="kw">null</span>:

```cql
define NullObjectQuery:
  (null as FHIR.CodeableConcept) X
    return Concept {
      codes: X.coding C return FHIRHelpers.ToCode(C)
    }
```

### Related Context Retrieves

> Support for specifying search paths, include and reverseInclude elements in the Retrieve is a new feature of CQL 1.5, and is trial-use.
{: .note-info}

To allow queries to cross contexts, CQL supports the notion of a _related context retrieve_. For example, consider a neonatal measure where the infant is the subject of the measure. In order to calculate gestational age, the measure may need to retrieve information from the mother's record. Without the ability to cross contexts, this would not be possible. The following example illustrates this usage:

```cql
context Patient

define "Mother": singleton from ([RelatedPerson: "Mother Relationship"])

define "Estimated Due Date":
  Last(
    ["Mother" -> "Observation": "Estimated Due Date Exam"] Exam
      sort by effective
  )

define "Gestational Age in Days at Birth":
  (280 - (duration in days between "Estimated Due Date" and "Birth Date")) div 7
```

Note the use of the <span class="id">"Mother"</span> expression within the retrieve: <span class="id">["Mother" \-> "Observation": "Estimated Due Date Exam"]</span>. This syntax (<span class="sym">\-></span>) indicates that the retrieve should be performed in the context returned by the <span class="id">"Mother"</span> expression. The <span class="id">"Mother"</span> expression in this case will be evaluated in the <span class="id">"Patient"</span> context, and result in a <span class="id">RelatedPerson</span> from the infant's record with the relationship type of <span class="id">"Mother Relationship"</span>. The <span class="id">RelatedPerson</span> will then be used as the context for the retrieve.

If the expression being defined (such as "Mother" in the previous example) is <span class="kw">null</span>, the related context retrieve would be evaluated with <span class="id">id</span> <span class="sym">= null</span>, which would result in unknown and an empty list would be the result. If the expression returns a class instance (as in this case, an instance of a <span class="id">RelatedPerson</span>), the model information is used to determine the attribute of the class that contains the value for the context id (<span class="id">linkedPatientId</span> in this case). And finally, the expression is not allowed to return a list, it must evaluate to a single class or primitive value.

> As with all healthcare-related data, there are privacy and security concerns associated with this feature. Implementations must ensure that use of this functionality does not violate any access, authorization, or use protocols in the systems being accessed with this feature.
>
> See the [Mother Infant Measure](examples.html#mother-infant-measure) example for a detailed illustration of this functionality.
{: .note-danger}

### Aggregate Queries

> The aggregate clause is a new feature of CQL 1.5, and is trial-use.
{: .note-info}

CQL provides support for a limited class of recursive problems using the _aggregate clause_ of the query construct. This clause is similar in function to the JavaScript `.reduce()` function, in that it allows an expression to be repeatedly evaluated for each element of a list, and that expression can access the _current_ value of the aggregation. For example, the following query illustrates a simple usage of this construct to calculate the factorial of 5:

```cql
define FactorialOfFive:
  ({ 1, 2, 3, 4, 5 }) Num
    aggregate Result starting 1: Result * Num
```

In this example, the list of integers from `1` to `5` is introduced as the primary source in a query with the alias `Num`, and then the `aggregate` clause is used to calculate the factorial. The result is named `Result` and given the starting value of `1`. This result is then repeatedly multiplied by each integer in the list to produce the final result.

More formally, the `aggregate` clause has the following syntax:

```ebnf
<aggregate clause> ::=
  aggregate [(all | distinct)] <result alias> [<starting clause>] : <expression>

<starting clause> ::=
  starting (<simple literal> | <quantity | "("<expression>")")
```

The `aggregate` clause may be used in any query instead of a `return` clause, and causes the query to return the result of the last iteration of the aggregate expression. The `all` and `distinct` keywords can be used and apply to the elements prior to the iteration. The `result alias` is an identifier that can be used within the aggregation expression to refer to the current result value, enabling a limited form of recursion. The `starting clause` can be used to provide an initial value for the aggregation. If no starting clause is specified, the aggregation result is initially `null`.

As in the simple example above, the result of the query can be a single value, rather than a list of values, but note that since the aggregate expression may return a list, the result of an `aggregate` query may still be a list:

```cql
define "RolledOutIntervals":
  MedicationRequestIntervals M
    aggregate R starting (null as List<Interval<DateTime>>): R union ({
      M X
        let S: Max({ end of Last(R) + 1 day, start of X }),
          E: S + duration in days of X
        return Interval[S, E]
    })
```

In this example, the `aggregate` expression is returning the union of the current result with an interval constructed from the greater of the day after the end of the last interval and the start of the current interval, to the duration in days of the current interval later. The result is a list of non-overlapping intervals where any overlaps in the input list have pushed out subsequent intervals.

A syntax diagram of an `aggregate` clause construct can be seen [here](19-l-cqlsyntaxdiagrams.html#aggregateClause).

Note that in general, since the type of the aggregate expression is not known until the expression can be semantically analyzed, it may be necessary to provide a typed starting expression as illustrated in this example. The starting clause can be omitted if the type of the result can be inferred from the aggregate expression:

```cql
define FactorialOfFive:
  ({ 1, 2, 3, 4, 5 }) Num
    aggregate Result: Coalesce(Result, 1) * Num
```

In this example, since the starting clause is omitted, Result is initially <span class="kw">null</span>, and Coalesce must be used to provide the default value of 1, and the type of Integer will be inferred through the Coalesce. Note that although this example only computes the factorial of five, the expand operator could be used to generate a sequence of integers and used to construct a general factorial function.

### Defining Functions

CQL provides for the definition of functions. A function in CQL is a named expression that is allowed to take any number of arguments, each of which has a name and a declared type.

A syntax diagram of a function defintion can be seen [here](19-l-cqlsyntaxdiagrams.html#functionDefinition).

For example:

```cql
define function "CumulativeDuration"(Intervals List<Interval<DateTime>>):
  Sum((collapse Intervals) X return all duration in days of X)
```

This statement defines a function named <span class="id">CumulativeDuration</span> that takes a single argument named <span class="id">Intervals</span> of type <span class="kw">List\<Interval\<DateTime>></span>. The function returns the sum of duration in days of the collapsed intervals given. This function can then be used just as any other system-defined function:

```cql
define "Encounters": [Encounter: "Inpatient Visit"]
define "CD": CumulativeDuration(Encounters E return E.period)
```

These statements establish an expression named CD that computes the cumulative duration of inpatient encounters for a patient.

Within the library in which it is defined, a function can be invoked directly by name. When a function is defined in a referenced library, the local library alias must be used to invoke the function. For example, assuming a library with the above function definition and referenced with the local alias <span class="id">Core</span>:

```cql
define "Encounters": [Encounter: "Inpatient Visit"]
define "CD": Core.CumulativeDuration(Encounters E return E.period)
```

In this example, the <span class="id">CumulativeDuration</span> function must be invoked using the local library alias <span class="id">Core</span>.

A syntax diagram of defining a function can be seen [here](19-l-cqlsyntaxdiagrams.html#function).

Functions can be defined that reference other functions anywhere within any library and to any degree of nesting, so long as the reference does not result in a circular reference.

#### Operator Functions

Operator functions are system functions defined to support the behavior of operators defined in the language. For example, the addition operator (<span class="sym">+</span>) is implemented by the <span class="id">Add</span> function. Each operator defined in the language has a corresponding system-defined function that surfaces directly in the ELM. For a complete listing of these operators and their ELM function names, refer to the [Functions](06-translationsemantics.html#functions) topic in the Translation Semantics chapter.

A consequence of having these system function definitions is that operators can also be invoked directly as functions. For example:

```cql
exists X
X = Y
```

The above expressions could also be written as:

```cql
Exists(X)
Equal(X, Y)
```

#### Fluent Functions

> Fluent functions are a new feature of CQL 1.5, and are trial-use.
{: .note-info}
Functions can be defined as _fluent_ by including the <span class="kw">fluent</span> keyword as part of the function definition:

```cql
define fluent function "confirmed"(Conditions List<Condition>):
  Conditions C where C.verificationStatus ~ "Condition Confirmed"

define fluent function "active"(Conditions List<Condition>):
  Conditions C where C.clinicalStatus ~ "Condition Active"
    and C.abatement is null

define fluent function "activeOrRecurring"(Conditions List<Condition>):
  Conditions C
    where C.clinicalStatus ~ "Condition Active"
      or C.clinicalStatus ~ "Condition Recurrence"
      or C.clinicalStatus ~ "Condition Relapse"
```

A _fluent_ function means that it can be invoked using dot-notation (`.`), and the first argument to the function will be provided by the value of the left-side of the dot-invocation at that point. For example:

```cql
define "Diabetes Conditions":
  [Condition: "Diabetes Mellitus"]

define "Confirmed and Active or Recurring Diabetes Conditions":
  Conditions.confirmed().activeOrRecurring()
```

The result of this example is the same as if the functions had been invoked normally:

```cql
define "Confirmed and Active or Recurring Diabetes Conditions":
  activeOrRecurring(confirmed(Conditions))
```

In other words, all the Condition elements returned from the <span class="id">Diabetes Conditions</span> expression, where those conditions have a <span class="id">verificationStatus</span> of <span class="id">Condition Confirmed</span>, and a <span class="id">clinicalStatus</span> of <span class="id">Condition Active</span>, <span class="id">Condition Recurrence</span>, or <span class="id">Condition Relpase</span>.

A _fluent_ function may also take multiple arguments where the first argument to the function will be provided by the value of the left-side of the dot-invocation at that point and the second argument can still be passed in. For example:

```cql
define fluent function byClinicalStatus(Conditions List<Condition>, Concept status):
  Conditions C where C.clinicalStatus ~ status

// usage
define "Active Diabetes Conditions":
  "Diabetes Conditions".byClinicalStatus("Condition Active")
```

Again, the result of this example is the same as if the function had been invoked normally:

```cql
define "Active Diabetes Conditions":
  byClinicalStatus("Diabetes Conditions", "Condition Active")
```

In other words, all the Condition elements returned from the <span class="id">Diabetes Conditions</span> expression, where those conditions have a <span class="id">clinicalStatus</span> of <span class="id">Condition Active</span>.

> Note that the examples in this section are adapted from the [CDS Connect FHIR Commons](https://github.com/AHRQ-CDS/AHRQ-CDS-Connect-PAIN-MANAGEMENT-SUMMARY/blob/v0.3.2/src/cql/r4/CDS_Connect_Commons_for_FHIRv400.cql#L178) library.
{: .note-info}

#### External Functions

Functions can also be defined as _external_ to support the ability to import functionality defined in external libraries. If a function is defined external, the return type must be provided:

```cql
define function "IsSubsumedBy"(code Code, subsumingCode Code) returns Boolean : external
```

CQL does not prescribe the details for how external functions are resolved or implemented, only that an implementation must accept the arguments as specified by the signature, and is expected to return a value of the declared return type.

Take heed that although there may be use cases for which external functions are the best option, they are not without drawbacks. Chief among the drawbacks that arise when using external functions are the challenges associated with interoperability. Since external functions are implementation specific, CQL libraries that are authored relying on external functions are also implementation specific. Therefore, the use of external functions is discouraged because they hinder one of the foundational benefits of CQL, which is data exchange.

### Using FHIRPath

FHIRPath is a general-purpose graph traversal language designed as a simple way to define paths on a hierarchical data model such as FHIR. The language is used within the FHIR specification to provide precise semantics for various items in the specification such as invariants and search parameter paths. Because of the general-purpose nature of FHIRPath, CQL uses the basic expression definition capabilities defined by FHIRPath for its core expression terms. In fact, the ANTLR grammar for CQL imports the FHIRPath grammar and relies on the semantics defined there to define the base expression functionality of CQL, in much the same way that XQuery utilizes XPath to define its expression capabilities. In other words, CQL is a superset of FHIRPath, meaning that any valid FHIRPath expression is also a valid CQL expression.

However, FHIRPath has various implicit conversions defined to simplify expression of common path traversal scenarios. Because CQL is a type-safe language, some of this functionality can optionally be restricted within CQL through the use of several language options, as described in the following sections.

#### Path Traversal

Paths in FHIRPath are constructed by concatenating labels using a dot qualifier:

Patient.name.given

In this case, the path begins at the <span class="id">Patient</span> expression and accesses the <span class="id">name</span> property, followed by the <span class="id">given</span> property of each <span class="id">name</span>. Because the <span class="id">given</span> path invocation is targeting the list of names, the property access is invoked for each name in the list, resulting in a list of all the given elements for every name in the Patient.

However, because property access on a list may actually be the result of mistakenly expecting the property to be singular, this behavior can be disabled with the _disable-list-traversal_ option.

#### List Promotion and Demotion

In FHIRPath, all operations are defined to return collections, and operations that expect singleton values are defined to throw an error when they are invoked with collections containing multiple elements. In CQL, this behavior is implemented using list promotion and demotion.

Wherever an operator is defined to take a non-list-valued type as a parameter, list demotion allows the arguments to be list-valued and are implicitly converted to a singleton value using the <span class="kw">singleton from</span> operator:

```cql
Patient.name.given + ' ' + Patient.name.family
```

The _disable-demotion_ option controls whether or not this expression is valid. With the option enabled, the expression can be compiled, and will evaluate, so long as the run-time values of <span class="id">given</span> and <span class="id">family</span> contain only a single element. With the option disabled, this expression will no longer compile, and the list-valued arguments must be converted to a single value:

```cql
Patient.name.given.single() + ' ' + Patient.name.family.single()
```

This allows the compiler to help the author determine whether a singular value is expected and appropriate, or if the author mistakenly assumed the attribute was singular, when in fact the data model allows multiple values.

See the [Promotion and Demotion](#promotion-and-demotion) topic for more discussion on how CQL supports list promotion and demotion.

#### Missing Information

FHIRPath traversal operations are defined such that only values that are present are returned. In other words, it does not define a _null_ indicator to represent missing information. Instead, it uses the empty collection (<span class="sym">\{ }</span>) and propagates empty collections in expressions. In general, if the input to an operator or function is an empty collection, the result is an empty collection. This corresponds to the null propogation semantics of CQL, particularly with respect to the three-valued logic semantics of the logical operators.

#### Type Resolution

The FHIRPath specification does not require strongly-typed interpretation. In particular, the resolution of property names can be deferred completely to run-time, allowing for flexible use of expressions such as <span class="id">.children()</span> and <span class="id">.descendants()</span>. However, because CQL is a strongly-typed language, these types of expressions are required to be resolved at compile-time.

For example, consider the following FHIRPath:

```cql
Patient.children().name
```

This expression returns a list of the name elements of all the children of the Patient instance. To accomplish this in CQL, the result of <span class="id">.children()</span> is a list of elements of choice types, where the types in the choice are the distinct set of types of child elements.

This approach enables the flexibility of FHIRPath expressions but still maintains compile-time type resolution.

#### Method Invocation

The FHIRPath syntax is designed as a fluent API, meaning that operations are invoked using a dot-invocation syntax. This functionality is supported in CQL using a syntactic method construct, similar to a lambda function, that allows the invocation to be rewritten as an equivalent function call. The method definition is allowed to declare special variables such as <span class="id">$this</span> that can be addressed in the body of the method.

This mechanism is then used to implement the FHIRPath operators, which are rewritten via the lambda replacement as direct invocations of CQL. The detailed equivalents for all FHIRPath operations are defined in the [FHIRPath Function Translation Appendix](16-i-fhirpathtranslation.html).

The _disable-method-invocation_ option controls whether or not method-style invocation is allowed in the translator.

---

File: repos/HL7_SLASH_cql/input/pages/04-logicalspecification.md


This chapter describes the Expression Logical Model (ELM) and how it is used to represent clinical knowledge within a quality artifact.

The ELM defines a mechanism for representing artifact logic independent of syntax and special-purpose constructs introduced at the syntactic level. ELM is equivalent to CQL syntax in terms of expressive power: every possible expression in CQL has an equivalent canonical-form expression in ELM. Higher-level constructs such as timing phrases and implicit conversions are represented in terms of the more primitive operators in ELM. This takes the burden of interpretation of higher-level constructs off of implementers, allowing them to focus on the implementation of a more primitive set of functionality.

Expressions within ELM are represented as Abstract Syntax Trees. ELM defines the base _Expression_ class, and all language elements and operators are then defined as descendants of the base _Expression_. For example, the _Add_ class descends from _BinaryExpression_, which introduces two operands, each of type _Expression_. The _Literal_ class descends from _Expression_ and allows primitive-typed values such as strings and integers to be represented directly. Using these classes, the expression 2 <span class="sym">+</span> 2 can be represented as instances of the appropriate classes:

<a name="figure-4-a"></a>
<div><img src="assets/images/image10.png" alt="assets/images/image10" width="107" height="99"/></div>

Figure 4‑A - A diagram to explain how ELM represents addition of 2 literal values

By combining instances of the appropriate classes of ELM, the logic for any expression can be represented. Note that the type of the expression can be inferred from the representation, Integer in this example.

The ELM consists of the following components:

* Expression – This component defines the core structures for representing expressions, as well as the operations available within those expressions.
* Clinical Expression – This component extends the Expression component to introduce expressions specific to the clinical quality domain.
* Library – This component defines the structure of a library, the container, and the basic unit of sharing.

Each of these components is defined fully within the ELM UML model. This model is defined formally as an XMI, and the model definition is also presented as an Enterprise Architect Project file (.eap) for viewing.

* [Raw XMI Model Definition](elm/model/elm.xmi)
* [Raw EAP Model Definition](elm/model/ELM.eap)

The documentation provided here serves only as a high-level structural reference for the ELM. The actual content of the specification is defined by the XMI file, and that provides the “source-of-truth” for the ELM specification.

Note that the semantics for the operations described here are defined both in the UML model as comments on the node for each operator, as well as the equivalent CQL operation as defined in [Appendix B – CQL Reference](09-b-cqlreference.html).

### Simple Values

Support for simple values is provided by the _Literal_ class. This class defines properties to represent the type of the value, as well as the value itself.

#### Literal

```
Literal : Expression
  ¦
  1..1 --> valueType
  ¦
  0..1 --> value
```

The Literal type defines a single scalar value. For example, the literal 5, the boolean value true or the string "antithrombotic".

### Structured Values

Structured values in ELM are values with sets of named elements (tuples), each of which may have a value of any type. Structured values are most commonly used to represent clinical information such as encounters, problems, and procedures.

The _Tuple_ class represents construction of a new structured value, with the values for each element supplied by _TupleElement_ instances.

To access elements of a structured value, use the _Property_ expression. A property expression has a _path_ attribute, an optional _source_ element, and a _value_ element. The source element returns the structured value to be accessed. In some usages, such as within a _Filter_ expression, the source is implicit. If used outside such a usage, a source must be provided.

The path attribute specifies a property path relative to the source structured value. The property expression returns the value of the property specified by the property path. Property paths are allowed to include qualifiers (<span class="sym">.</span>) as well as indexers (<span class="sym">[x]</span>) to indicate that subelements should be traversed. Indexers specified in paths must be literal integer values.

#### Tuple

```
Tuple : Expression
  ¦
  0..* --> element : TupleElement
```

The Tuple expression allows tuples of any type to be built up as an expression. The tupleType attribute specifies the type of the tuple being built, if any, and the list of tuple elements specify the values for the elements of the tuple. Note that the value of an element may be any expression, including another Tuple.

The following example illustrates the construction of a tuple using the _Tuple_ class:

<a name="figure-4-h"></a>
<div><img src="assets/images/image17.png" alt="assets/images/image17" width="190" height="157"/></div>

Figure 4‑H - A diagram to explain how ELM represents the construction of a <span class="kw">Tuple</span>

#### Instance

```
Instance : Expression
  ¦
  0..* --> element : InstanceElement
  ¦
  1..1 --> classType
```

The Instance expression allows class instances of any type to be built up as an expression. The classType attribute specifies the type of the class instance being built, and the list of instance elements specify the values for the elements of the class instance. Note that the value of an element may be any expression, including another Instance.

The following example illustrates the construction of a structured value using the _Instance_ class:

<a name="figure-4-i"></a>
<div><img src="assets/images/image18.png" alt="assets/images/image18" width="184" height="152"/></div>

Figure 4‑I - A diagram to explain how ELM represents the construction of a structured value using the <span class="kw">Instance</span> class

#### Property

```
Property : Expression
  ¦
  0..1 --> source : Expression
  ¦
  1..1 --> path
  ¦
  0..1 --> scope
```

The Property operator returns the value of the property on the source (or named scope) specified by the path attribute.

If the result of evaluating source (or the named scope) is null, the result is null.

The path attribute may include qualifiers (.) and indexers ([x]). Indexers must be literal integer values.

If the path attribute contains qualifiers or indexers, each qualifier or indexer is traversed to obtain the actual value. If the object of the property access at any point in traversing the path is null, the result is null.

If a scope is specified, the name is used to resolve the scope in which the path will be resolved. Scopes can be named by the scoping operators (Filter, ForEach, Repeat, and Sort) as well as introduced within a Query by AliasedQuerySource, LetClause, AggregateClause, and SortClause.

Property expressions can also be used to access the individual points and closed indicators for interval types using the property names low, high, lowClosed, and highClosed.

### Clinical Values

The following represents clinical information in ELM.

#### Code

```
Code : Expression
  ¦
  1..1 --> system : CodeSystemRef
  ¦
  1..1 --> code
  ¦
  0..1 --> display
```

The Code type represents a literal code selector.

#### CodeDef

```
CodeDef : Element
  ¦
  0..1 --> codeSystem : CodeSystemRef (1)
  ¦
  1..1 --> name
  ¦
  1..1 --> id
  ¦
  0..1 --> display
  ¦
  0..1 --> accessLevel
```

1. The code system that contains the code being referenced.

The CodeDef type defines a code identifier that can then be used to reference single codes anywhere within an expression.

#### CodeRef

```
CodeRef : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> libraryName
```

The CodeRef expression allows a previously defined code to be referenced within an expression.

#### CodeSystemDef

```
CodeSystemDef : Element
  ¦
  1..1 --> name
  ¦
  1..1 --> id
  ¦
  0..1 --> version
  ¦
  0..1 --> accessLevel
```

The CodeSystemDef type defines a code system identifier that can then be used to identify code systems involved in value set definitions.

#### CodeSystemRef

```
CodeSystemRef : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> libraryName
```

The CodeSystemRef expression allows a previously defined named code system to be referenced within an expression. Conceptually, referencing a code system returns the set of codes in the code system. Note that this operation should almost never be performed in practice. Code system references are allowed in order to allow for testing of code membership in a particular code system.

#### Concept

```
Concept : Expression
  ¦
  1..* --> code : Code
  ¦
  0..1 --> display
```

The Concept type represents a literal concept selector.

#### ConceptDef

```
ConceptDef : Element
  ¦
  1..* --> code : CodeRef (1)
  ¦
  1..1 --> name
  ¦
  0..1 --> display
  ¦
  0..1 --> accessLevel
```

1. A code that makes up the concept. All codes within a given concept must be synonyms.

The ConceptDef type defines a concept identifier that can then be used to reference single concepts anywhere within an expression.

#### ConceptRef

```
ConceptRef : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> libraryName
```

The ConceptRef expression allows a previously defined concept to be referenced within an expression.

#### Quantity

```
Quantity : Expression
  ¦
  0..1 --> value
  ¦
  0..1 --> unit
```

The Quantity type defines a clinical quantity. For example, the quantity 10 days or 30 mmHg. The value is a decimal, while the unit is expected to be a valid UCUM unit or calendar duration keyword, singular or plural.

#### Ratio

```
Ratio : Expression
  ¦
  1..1 --> numerator : Quantity
  ¦
  1..1 --> denominator : Quantity
```

The Ratio type defines a ratio between two quantities. For example, the titre 1:128, or the concentration ratio 5 mg/10 mL. The numerator and denominator are both quantities.

#### ValueSetDef

```
ValueSetDef : Element
  ¦
  0..* --> codeSystem : CodeSystemRef (1)
  ¦
  0..1 --> name
  ¦
  1..1 --> id
  ¦
  0..1 --> version
  ¦
  0..1 --> accessLevel
```

1. The code system that should be used to construct the expansion set. Note that the recommended approach to statically binding to an expansion set is to use a value set definition that specifies the version of each code system used. The codeSystem elements are provided only to ensure static binding can be achieved when the value set definition does not specify code system versions as part of the definition header.

The ValueSetDef type defines a value set identifier that can be referenced by name anywhere within an expression.

The id specifies the globally unique identifier for the value set. This may be an HL7 OID, a FHIR URL, or a CTS2 value set URL.

If version is specified, it will be used to resolve the version of the value set definition to be used. Otherwise, the most current published version of the value set is assumed.

If codeSystems are specified, they will be used to resolve the code systems used within the value set definition to construct the expansion set.
Note that the recommended approach to statically binding to an expansion set is to use a value set definition that specifies the version of each code system used. The codeSystemVersions attribute is provided only to ensure static binding can be achieved when the value set definition does not specify code system versions as part of the definition header.

#### ValueSetRef

```
ValueSetRef : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> libraryName
  |
  0..1 --> preserve
```

The ValueSetRef expression allows a previously defined named value set to be referenced within an expression. Conceptually, referencing a value set returns the expansion set for the value set as a list of codes.

The preserve attribute is trial-use in CQL 1.5.2 and was introduced to allow engines to determine whether or not to expand a ValueSetRef (the 1.4 behavior), ensuring that 1.5 engines can run 1.4 ELM.

### Type Specifiers

ELM provides the following elements for type specifiers.

#### TypeSpecifier

```
TypeSpecifier : Element
```

TypeSpecifier is the abstract base type for all type specifiers.


#### NamedTypeSpecifier

```
NamedTypeSpecifier : TypeSpecifier
  ¦
  1..1 --> name
```

NamedTypeSpecifier defines a type identified by a name, such as Integer, String, Patient, or Encounter.


#### IntervalTypeSpecifier

```
IntervalTypeSpecifier : TypeSpecifier
  ¦
  1..1 --> pointType : TypeSpecifier
```

IntervalTypeSpecifier defines an interval type by specifying the point type. Any type can serve as the point type for an interval, so long as it supports comparison operators, minimum and maximum value determination, as well as predecessor and successor functions.

#### ListTypeSpecifier

```
ListTypeSpecifier : TypeSpecifier
  ¦
  1..1 --> elementType : TypeSpecifier
```

ListTypeSpecifier defines a list type by specifying the type of elements the list may contain.

#### TupleTypeSpecifier

```
TupleTypeSpecifier : TypeSpecifier
  ¦
  0..* --> element : TupleElementDefinition
```

TupleTypeSpecifier defines the possible elements of a tuple.

#### ChoiceTypeSpecifier

```
ChoiceTypeSpecifier : TypeSpecifier
  ¦
  0..* --> type : TypeSpecifier (1)
  ¦
  0..* --> choice : TypeSpecifier
```

1. This element is deprecated. New implementations should use the new choice element.

ChoiceTypeSpecifier defines the possible types of a choice type.

{: #libraries-2}
### Libraries

ELM defines the notion of a library as the basic container for logic constructs. Libraries consist of sets of declarations including data model references, library references, valueset definitions, parameters, functions, and named expressions. The _Library_ class defines this unit and defines properties for each of these types of declarations.

Once defined, libraries can then be referenced by other libraries with the _IncludeDef_ class, which defines properties for the name and version of the library being referenced, as well as a local name that is used to access components of the library.

#### Library

```
Library : Element
  ¦
  1..1 --> identifier : VersionedIdentifier (1)
  ¦
  1..1 --> schemaIdentifier : VersionedIdentifier (2)
  ¦
  0..1 --> usings (3)
  ¦        ¦
  ¦        1..* --> def : UsingDef (4)
  ¦
  0..1 --> includes (5)
  ¦        ¦
  ¦        1..* --> def : IncludeDef (6)
  ¦
  0..1 --> parameters (7)
  ¦        ¦
  ¦        0..* --> def : ParameterDef
  ¦
  0..1 --> codeSystems (8)
  ¦        ¦
  ¦        0..* --> def : CodeSystemDef
  ¦
  0..1 --> valueSets (9)
  ¦        ¦
  ¦        0..* --> def : ValueSetDef
  ¦
  0..1 --> codes (10)
  ¦        ¦
  ¦        0..* --> def : CodeDef
  ¦
  0..1 --> concepts (11)
  ¦        ¦
  ¦        0..* --> def : ConceptDef
  ¦
  0..1 --> contexts (12)
  ¦        ¦
  ¦        0..* --> def : ContextDef
  ¦
  0..1 --> statements (13)
           ¦
           0..* --> def : ExpressionDef
```

1. The identifier element defines a unique identifier for this library, and optionally, a system (or namespace) and version.
2. This is the identifier of the XML schema (and its version) which governs the structure of this Library.
3. Set of data models referenced in the Expression objects in this knowledge artifact.
4. A reference to a data model that is used in the artifact, e.g., the Virtual Medical Record.
5. Set of libraries referenced by this artifact. Components of referenced libraries may be used within this artifact.
6. A reference to a library whose components can be used within the artifact.
7. The parameters defined within this library.
8. The code systems defined within this library.
9. The value sets defined within this library.
10. The codes defined within this library.
11. The concepts defined within this library.
12. The contexts used within this library.
13. The statements section contains the expression and function definitions for the library.

A Library is an instance of a CQL-ELM library.

#### IncludeDef

```
IncludeDef : Element
  ¦
  1..1 --> localIdentifier
  ¦
  0..1 --> mediaType
  ¦
  1..1 --> path
  ¦
  0..1 --> version
```

Includes a library for use within the artifact.

#### VersionedIdentifier

```
VersionedIdentifier
  ¦
  0..1 --> id
  ¦
  0..1 --> system
  ¦
  0..1 --> version
```

VersionedIdentifier is composed of three parts: (1) an optional system, or
  namespace, which provides a globally unique, stable scope for the identifier,
  (2) an identifier which identifies the set of all versions of a given resource, and
  (3) the actual version of the instance of interest in this set. The VersionedIdentifier
  therefore points to an individual 'versioned' instance of a resource such as the third
  version of a library.

#### ContextDef

```
ContextDef : Element
  ¦
  1..1 --> name (1)
```

1. The name of the context

The ContextDef type defines a context used within the library.

### Data Model

ELM does not reference any specific data model, and so can be used to represent logic expressed against any data model. These data models are specified using the _UsingDef_ class. This class provides attributes for specifying the name and version of the data model. An ELM library can reference any number of models.

The name of the model is an implementation-specific identifier that provides the environment with a mechanism for finding the model description. The details of how that model description is provided are part of the physical representation.

#### UsingDef

```
UsingDef : Element
  ¦
  1..1 --> localIdentifier
  ¦
  1..1 --> uri
  ¦
  0..1 --> version
```

Defines a data model that is available within the artifact.

### Parameters

In addition to external data, ELM provides a mechanism for defining parameters to an artifact. A library can define any number of parameters, each of which has a name, and a defined type, as well as an optional default value.

Parameter values, if any, are expected to be provided as part of the evaluation request, and can be accessed with a _ParameterRef_ expression in any expression throughout the library.

#### ParameterDef

```
ParameterDef : Element
  ¦
  0..1 --> default : Expression
  ¦
  0..1 --> parameterTypeSpecifier : TypeSpecifier
  ¦
  0..1 --> name
  ¦
  0..1 --> parameterType
  ¦
  0..1 --> accessLevel
```

The ParameterDef type defines a parameter that can be referenced by name anywhere within an expression.

Parameters are defined at the artifact level, and may be provided as part of the payload for an evaluation request.

If no parameter value is provided, the default element is used to provide the value for the parameter.

If no parameter or default is provided, the parameter is defined to be null.

Note that the expression specified in the default element must be able to be evaluated at compile-time (i.e. without reference to any run-time capabilities such as data, terminology, and library references, both local and included).

#### ParameterRef

```
ParameterRef : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> libraryName
```

The ParameterRef expression allows the value of a parameter to be referenced as part of an expression.

### Expressions

The ELM Expression component defines a mechanism for representing the structure of logic.

Every expression in ELM is represented as a descendant of the abstract base element _Expression_. In addition, several abstract descendants are introduced to support the representation of unary, binary, ternary, and n-ary operators. Note that an expression need not descend from one of these descendants, it may descend from _Expression_ directly.

#### Expression

```
Expression : Element
```

The Expression type defines the abstract base type for all expressions used in the ELM expression language.

#### OperatorExpression

```
OperatorExpression : Expression
  ¦
  0..* --> signature : TypeSpecifier (1)
```

1. Specifies the declared signature of the operator or function being called. If no signature is specified, the run-time types of the operands should be used to resolve any overload.

The Operator type defines the abstract base type for all built-in operators used in the ELM expression language. This explicitly excludes FunctionRef, which is the concrete type for all function invocations.

#### UnaryExpression

```
UnaryExpression : OperatorExpression
  ¦
  1..1 --> operand : Expression
```

The UnaryExpression type defines the abstract base type for expressions that take a single argument.

#### BinaryExpression

```
BinaryExpression : OperatorExpression
  ¦
  2..2 --> operand : Expression
```

The BinaryExpression type defines the abstract base type for expressions that take two arguments.

#### TernaryExpression

```
TernaryExpression : OperatorExpression
  ¦
  3..3 --> operand : Expression
```

The TernaryExpression type defines the abstract base type for expressions that take three arguments.

#### NaryExpression

```
NaryExpression : OperatorExpression
  ¦
  0..* --> operand : Expression
```

The NaryExpression type defines an abstract base class for an expression that takes any number of arguments, including zero.

#### AggregateExpression

```
AggregateExpression : Expression
  ¦
  0..* --> signature : TypeSpecifier (1)
  ¦
  1..1 --> source : Expression
  ¦
  0..1 --> path
```

1. Specifies the declared signature of the operator or function being called. If no signature is specified, the run-time types of the operands should be used to resolve any overload.

Aggregate expressions perform operations on lists of data, either directly on a list of scalars, or indirectly on a list of objects, with a reference to a property present on each object in the list.

Aggregate expressions deal with missing information by excluding missing values from consideration before performing the aggregated operation. For example, in a Sum over Dose, any instance of Medication with no value for Dose would be ignored.

An aggregate operation performed over an empty list is defined to return null, except as noted in the documentation for each operator (Count, AllTrue, and AnyTrue are the exceptions).

### Reusing Logic

ELM provides a mechanism for reusing expressions by declaring a named expression. This construct is similar to a function call with no parameters in a traditional imperative language, with the exception that since ELM is a pure-functional system, the result of the evaluation could be cached by an implementation to avoid performing the same computation multiple times.

In addition, ELM provides a more traditional function call with named parameters that can then be accessed by the expression in the function body, and passed as part of the call from the invoking environment.

The _ExpressionDef_ class is used to define a named expression that can then be referenced by other expressions. The _FunctionDef_ class is used to define a function and its parameters.

Note that circular expression references are not allowed, but that named expressions can be defined in any order, so long as the actual references do not result in a cycle.

The _ExpressionDef_ class introduces the notion of _context_ which specifies the name of a context defined by the model, such as Patient, Practitioner, or Unfiltered. This context defines how the contained expression is evaluated, either with respect to a single subject, defined by the evaluation environment, or with respect to the entire system. For more information about patient context, please refer to the [External Data](#external-data) section.

#### ExpressionDef

```
ExpressionDef : Element
  ¦
  0..1 --> expression : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> context
  ¦
  0..1 --> accessLevel
```

The ExpressionDef type defines an expression and an associated name that can be referenced by any expression in the artifact. The name must be unique within the artifact.

The context attribute specifies the context of the execution and is used by the environment to determine whether or not to filter the data returned from retrieves based on the current context.

#### ExpressionRef

```
ExpressionRef : Expression
  ¦
  0..1 --> name
  ¦
  0..1 --> libraryName
```

The ExpressionRef type defines an expression that references a previously defined NamedExpression. The result of evaluating an ExpressionReference is the result of evaluating the referenced NamedExpression.

#### FunctionDef

```
FunctionDef : ExpressionDef
  ¦
  0..* --> operand : OperandDef
  ¦
  0..1 --> external
  ¦
  0..1 --> fluent
```

The FunctionDef type defines a named function that can be invoked by any expression in the artifact. Function names must be unique within the artifact. Functions may take any number of operands.

#### FunctionRef

```
FunctionRef : ExpressionRef
  ¦
  0..* --> signature : TypeSpecifier (1)
  ¦
  0..* --> operand : Expression
```

1. Specifies the declared signature of the function being called. If no signature is specified, the run-time types of the operands should be used to resolve any overload.

The FunctionRef type defines an expression that invokes a previously defined function. The result of evaluating each operand is passed to the function.

#### OperandRef

```
OperandRef : Expression
  ¦
  0..1 --> name
```

The OperandRef expression allows the value of an operand to be referenced as part of an expression within the body of a function definition.

### Queries

ELM provides a mechanism for expressing the structure of a query.

For more information on query semantics, refer to the [Queries](02-authorsguide.html#queries) section of the [Author’s Guide](02-authorsguide.html), as well as the [Multi-Source Queries](03-developersguide.html#multi-source-queries) and [Non-Retrieve Queries](03-developersguide.html#non-retrieve-queries) sections of the [Developer’s Guide](03-developersguide.html).

#### Query

```
Query : Expression
  ¦
  1..* --> source : AliasedQuerySource
  ¦
  0..* --> let : LetClause
  ¦
  0..* --> relationship : RelationshipClause
  ¦
  0..1 --> where : Expression
  ¦
  0..1 --> return : ReturnClause
  ¦
  0..1 --> aggregate : AggregateClause
  ¦
  0..1 --> sort : SortClause
```

The Query operator represents a clause-based query. The result of the query is determined by the type of sources included, as well as the clauses used in the query.

#### AliasedQuerySource

```
AliasedQuerySource : Element
  ¦
  1..1 --> expression : Expression
  ¦
  1..1 --> alias
```

The AliasedQuerySource element defines a single source for inclusion in a query scope. The type of the source is determined by the expression element, and the source can be accessed within the query scope by the given alias.

#### AliasRef

```
AliasRef : Expression
  ¦
  0..1 --> name
```

The AliasRef expression allows for the reference of a specific source within the scope of a query.

#### ByColumn

```
ByColumn : SortByItem
  ¦
  0..1 --> path
```

The ByColumn element specifies that the sort should be performed using the given column and direction. This approach is used to specify the sort order for a query when the result is a list of tuples.

#### ByDirection

```
ByDirection : SortByItem
```

The ByDirection element specifies that the sort should be performed using the given direction. This approach is used when the result of the query is a list of non-tuple elements and only the sort direction needs to be specified.

#### ByExpression

```
ByExpression : SortByItem
  ¦
  1..1 --> expression : Expression
```

The ByExpression element specifies that the sort should be performed using the given expression and direction. This approach is used to specify the sort order as a calculated expression.

Within the expression, the iteration accessor $this can be used to access the current iteration value, and $index can be used to access the 0-based index of the current iteration.

#### IdentifierRef

```
IdentifierRef : Expression
  ¦
  1..1 --> name
  ¦
  0..1 --> libraryName
```

The IdentifierRef type defines an expression that references an identifier that is either unresolved, or has been resolved to an attribute in an unambiguous iteration scope such as Sort. Implementations should attempt to resolve the identifier, only throwing an error at compile-time (or run-time for an interpretive system) if the identifier reference cannot be resolved.

#### LetClause

```
LetClause : Element
  ¦
  1..1 --> expression : Expression
  ¦
  1..1 --> identifier
```

The LetClause element allows any number of expression definitions to be introduced within a query scope. Defined expressions can be referenced by name within the query scope.

#### QueryLetRef

```
QueryLetRef : Expression
  ¦
  0..1 --> name
```

The QueryLetRef expression allows for the reference of a specific let definition within the scope of a query.

#### RelationshipClause

```
RelationshipClause : AliasedQuerySource
  ¦
  1..1 --> suchThat : Expression
```

The RelationshipClause element allows related sources to be used to restrict the elements included from another source in a query scope. Note that the elements referenced by the relationship clause can only be accessed within the suchThat condition, and that elements of the related source are not included in the query scope.

#### ReturnClause

```
ReturnClause : Element
  ¦
  1..1 --> expression : Expression
  ¦
  0..1 --> distinct
```

The ReturnClause element defines the shape of the result set of the query.

#### AggregateClause

```
AggregateClause : Element
  ¦
  1..1 --> expression : Expression
  ¦
  0..1 --> starting : Expression
  ¦
  1..1 --> identifier
  ¦
  0..1 --> distinct
```

The AggregateClause element defines the result of the query in terms of an aggregation expression performed for each item in the query.

#### SortClause

```
SortClause : Element
  ¦
  1..* --> by : SortByItem
```

The SortClause element defines the sort order for the query.

#### With

```
With : RelationshipClause
```

The With clause restricts the elements of a given source to only those elements that have elements in the related source that satisfy the suchThat condition. This operation is known as a semi-join in database languages.

#### Without

```
Without : RelationshipClause
```

The Without clause restricts the elements of a given source to only those elements that do not have elements in the related source that satisfy the suchThat condition. This operation is known as a semi-difference in database languages.

### External Data

All access to external data within ELM is represented by _Retrieve_ expressions.

The _Retrieve_ class defines the data type of the request, which determines the type of elements to be returned. The result will always be a list of values of the type specified in the request.

The type of the elements to be returned is specified with the _dataType_ attribute of the _Retrieve_, and must refer to the name of a type within a known data model specified in the _dataModels_ element of the library definition.

In addition, the _Retrieve_ introduces the ability to specify optional criteria for the request. The available criteria are intentionally restricted to the set of codes involved, and the date range involved. If these criteria are omitted, the request is interpreted to mean all data of that type.

Note that because every expression is being evaluated within a context (such as Patient, Practitioner, or Unfiltered) as defined by the containing _ExpressionDef_, the data returned by a retrieve depends on the context. For example, for the Patient context, the data is returned for a single patient only, as defined by the evaluation environment. Whereas for the Unfiltered context, the data is returned for the entire source.

#### Retrieve

```
Retrieve : Expression
  ¦
  0..1 --> id : Expression
  ¦
  0..1 --> codes : Expression
  ¦
  0..1 --> dateRange : Expression
  ¦
  0..1 --> context : Expression
  ¦
  0..* --> include : IncludeElement
  ¦
  1..1 --> dataType
  ¦
  0..1 --> templateId
  ¦
  0..1 --> idProperty
  ¦
  0..1 --> idSearch
  ¦
  0..1 --> contextProperty
  ¦
  0..1 --> contextSearch
  ¦
  0..1 --> codeProperty
  ¦
  0..1 --> codeSearch
  ¦
  0..1 --> codeComparator
  ¦
  0..1 --> valueSetProperty
  ¦
  0..1 --> dateProperty
  ¦
  0..1 --> dateLowProperty
  ¦
  0..1 --> dateHighProperty
  ¦
  0..1 --> dateSearch
```

The retrieve expression defines clinical data that will be used by the artifact. This expression allows clinically relevant filtering criteria to be provided in a well-defined and computable way. This operation defines the integration boundary for artifacts. The result of a retrieve is defined to return the same data for subsequent invocations within the same evaluation request. This means in particular that patient data updates made during the evaluation request are not visible to the artifact. In effect, the patient data is a snapshot of the data as of the start of the evaluation. This ensures strict deterministic and functional behavior of the artifact, and allows the implementation engine freedom to cache intermediate results in order to improve performance.

##### id
The id element optionally specifies an expression that results in a value that can be used to filter the retrieve to a specific id.

##### codes
The codes element optionally specifies an expression that results in a List\<Code> to match against. Only those clinical statements that match at least one of the specified codes will be returned.

##### dateRange
The dateRange element optionally specifies an expression that results in an Interval\<DateTime> to match against. Only those clinical statements whose date falls within the specified date range will be returned.

##### context
If specified, the context element references an expression that, when evaluated, provides the context for the retrieve. The expression evaluates to the instance id that will be used as the context for the retrieve.

##### include
Specifies a related data type to be included in the result as part of the retrieve.

##### dataType
The dataType attribute specifies the type of data being requested.

##### templateId
For data models that support templates (also called profiles), The templateId attribute specifies an optional template to be used. If specified, the retrieve is defined to return only objects that conform to the template.

##### idProperty
The idProperty attribute specifies which property of the model contains the Id for the clinical statement.

This property may be specified as a path, including qualifiers and constant indexers. The \<simplePath> production rule in the CQL grammar provides the formal semantics for this path.

##### idSearch
The idSearch attribute specifies the name of the search path to use for searching for the values in the id element.

##### contextProperty
The contextProperty attribute optionally specifies which property of the model contains the context value.

Note that implementers could also specify this information elsewhere as part of an implementation catalog, rather than on each Retrieve expression, but allowing it to be specified in the retrieve expression gives the most flexibility. Note also that even in the case of an implementation catalog, implementations would still need to respect contextProperty values in the ELM due to the possibility of the retrieve specifying alternate context paths. From the persepctive of ELM, the specification ensures that ELM can be processed without reference to the model information.

This property may be specified as a path, including qualifiers and constant indexers. The &lt;simplePath&gt; production rule in the CQL grammar provides the formal semantics for this path.

##### contextSearch
The contextSearch attribute specifies the name of the search path to use for searching for the context values.

##### codeProperty
The codeProperty attribute optionally specifies which property of the model contains the Code or Codes for the clinical statement.

Note that implementers could also specify this information elsewhere as part of an implementation catalog, rather than on each Retrieve expression, but allowing it to be specified in the retrieve expression gives the most flexibility. Note also that even in the case of an implementation catalog, implementations would still need to respect codeProperty values in the ELM due to the possibility of the retrieve specifying alternate code filters. From the perspective of ELM, the specification ensures that ELM can be processed without reference to the model information.

This property may be specified as a path, including qualifiers and constant indexers. The \<simplePath> production rule in the CQL grammar provides the formal semantics for this path.

##### codeSearch
The codeSearch attribute specifies the name of the search path to use for searching for the values in the code element.

##### codeComparator
The codeComparator attribute specifies how elements of the code property should be matched to the terminology. One of 'in', '=', or '~'. Note that 'in' will resolve to the appropriate terminology matching operator, resulting in equivalence semantics for value set and code system membership testing.

##### valueSetProperty
The valueSetProperty attribute optionally specifies which property of the model contains a value set identifier that can be used as an alternative mechanism for matching the value set of the retrieve, in the case when no code is specified in the source data.

This attribute is intended to address the case where systems representing negation rationale for an activity not performed do so by indicating a valueset identifier rather than a code. For example, when indicating that a medication was not administered, the value set identifier for the expected medication is used, rather than indicating a specific medication that was not administered. In this case, the valueSetProperty attribute allows the retrieve to specify where to look for the value set identifier without needing to change the conceptual data model or the CQL logic describing the negated activity.

Note that implementers could also specify this information elsewhere as part of an implementation catalog, rather than on each Retrieve expression, but allowing it to be specified in the retrieve expression gives the most flexibility. From the perspective of ELM, the specification ensures that ELM can be processed without reference to the model information.

This property may be specified as a path, including qualifiers and constant indexers. The \<simplePath> production rule in the CQL grammar provides the formal semantics for this path.

##### dateProperty
The dateProperty attribute optionally specifies which property of the model contains the clinically relevant date for the clinical statement.

This property is expected to reference a property that is either a Date or DateTime, or an interval of Date or DateTime. In either case, the result set will only include instances where the value of the dateProperty is during the date range. For Date or DateTime values, this means the date is both the same or after the beginning of the range, and the same or before the end of the range. For Date- or DateTime-based interval values, this means that the entire interval is included in the date range.

Instances with no value for the dateProperty will not be included in the result set if a date range is specified.

Note that if the dateProperty is specified, the dateLowProperty and dateHighProperty attributes must not be present. And conversely, if the dateLowProperty and dateHighProperty attributes are specified, the dateProperty must not be present. If specified, the dateLowProperty and dateHighProperty values will be used to construct an interval with inclusive boundaries for the date range.

This property may be specified as a path, including qualifiers and constant indexers. The \<simplePath> production rule in the CQL grammar provides the formal semantics for this path.

##### dateLowProperty
The dateLowProperty attribute optionally specifies which property of the model contains the low component of the clinically relevant date for the clinical statement.

Note that if the dateProperty is specified, the dateLowProperty and dateHighProperty attributes must not be present. And conversely, if the dateLowProperty and dateHighProperty attributes are specified, the dateProperty must not be present.

This property may be specified as a path, including qualifiers and constant indexers. The \<simplePath> production rule in the CQL grammar provides the formal semantics for this path.

##### dateHighProperty
The dateHighProperty attribute optionally specifies which property of the model contains the high component of the clinically relevant date for the clinical statement.

Note that if the dateProperty is specified, the dateLowProperty and dateHighProperty attributes must not be present. And conversely, if the dateLowProperty and dateHighProperty attributes are specified, the dateProperty must not be present.

This property may be specified as a path, including qualifiers and constant indexers. The \<simplePath> production rule in the CQL grammar provides the formal semantics for this path.

##### dateSearch
The dateSearch attribute specifies the name of the search path to use for searching for values in the date range specified by the dateRange element.

#### IncludeElement

The IncludeElement type specifies include information for an include within a retrieve.

```
IncludeElement : Element
  ¦
  0..1 --> relatedDataType
  ¦
  0..1 --> relatedProperty
  ¦
  0..1 --> relatedSearch
  ¦
  0..1 --> isReverse
```

##### relatedDataType

The relatedDataType attribute specifies the type of the related data being requested.

##### relatedProperty

The relatedProperty attribute specifies which property of the relatedDataType contains the relatedId for the clinical statement.

This property may be specified as a path, including qualifiers and constant indexers. The &lt;simplePath&gt; production rule in the CQL grammar provides the formal semantics for this path.

##### relatedSearch

The relatedSearch attribute specifies the name of the search path to use for searching for data of the relatedDataType.

##### isReverse

The isReverse attribute indicates that the include is reverse, i.e. that the relatedDataType is referencing the data being retrieved, rather than the retrieved data referencing the relatedDataType.

{: #comparison-operators-1}
### Comparison Operators

ELM defines a standard set of comparison operators for use with simple values. Each comparison operator takes two arguments of the same type, and returns a boolean indicating the result of the comparison. Note that for comparison operators, if either or both operands evaluate to null, the result of the comparison is _null_, not false.

For more information on the semantics of the various comparison operators, see the [Comparison Operators](09-b-cqlreference.html#comparison-operators-4) section of the [CQL Reference](09-b-cqlreference.html).

#### Equal

```
Equal : BinaryExpression
```

The Equal operator returns true if the arguments are equal; false if the arguments are known unequal, and null otherwise. Equality semantics are defined to be value-based.

For simple types, this means that equality returns true if and only if the result of each argument evaluates to the same value.

For string values, equality is strictly lexical based on the Unicode values for the individual characters in the strings.

For decimal values, trailing zeroes are ignored.

For quantities, this means that the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in null. When a quantity has no units specified, it is treated as a quantity with the default unit ('1').

For time-valued quantities, UCUM definite-time duration quantities above days (and weeks) are not comparable to calendar duration quantities above days (and weeks). Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to the calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in null.

For ratios, this means that the numerator and denominator must be the same, using quantity equality semantics.

For tuple types, this means that equality returns true if and only if the tuples are of the same type, and the values for all elements that have values, by name, are equal, defined as a conjunction of equality comparisons.

For list types, this means that equality returns true if and only if the lists contain elements of the same type, have the same number of elements, and for each element in the lists, in order, the elements are equal using equality semantics, with the exception that null elements are considered equal.

For interval types, equality returns true if and only if the intervals are over the same point type, and they have the same value for the starting and ending points of the interval as determined by the Start and End operators.

For Date, DateTime, and Time values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the values are different, the comparison stops and the result is false. If one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is true. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal equality semantics.

If either argument is null, the result is null.

The following example illustrates a simple _Equal_ comparison:

<a name="figure-4-b"></a>
<div><img src="assets/images/image11.png" alt="assets/images/image11" width="109" height="102"/></div>

Figure 4‑B - A diagram to explain how ELM represents an equal comparison

#### Equivalent

```
Equivalent : BinaryExpression
```

The Equivalent operator returns true if the arguments are the same value, or if they are both null; and false otherwise.

With the exception of null behavior and the semantics for specific types defined below, equivalence is the same as equality.

For string values, equivalence returns true if the strings are the same value while ignoring case and locale, and normalizing whitespace. Normalizing whitespace means that all whitespace characters are treated as equivalent, with whitespace characters as defined in the whitespace lexical category. Note that null is not equivalent to the empty string ('').

For decimals, equivalent means the values are the same with the comparison done on values rounded to the precision of the least precise operand; trailing zeroes after the decimal are ignored in determining precision for equivalent comparison.

For quantities, equivalent means the values are the same quantity when considering unit conversion (e.g. 100 'cm' ~ 1 'm') and using decimal equivalent semantics for the value. Note that implementations are not required to support unit conversion and so are allowed to return false for equivalence of quantities with different units.

For time-valued quantities, UCUM definite-time duration quantities above days (and weeks) are considered equivalent to their calendar duration counterparts. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to the calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) uses the approximations of 365 days in a year, and 30 days in a month.

For ratios, equivalent means that the numerator and denominator represent the same ratio (e.g. 1:100 ~ 10:1000).

For tuple types, this means that two tuple values are equivalent if and only if the tuples are of the same type, and the values for all elements by name are equivalent.

For list types, this means that two lists are equivalent if and only if the lists contain elements of the same type, have the same number of elements, and for each element in the lists, in order, the elements are equivalent.

For interval types, this means that two intervals are equivalent if and only if the intervals are over the same point type, and the starting and ending points of the intervals as determined by the Start and End operators are equivalent.

For Date, DateTime, and Time values, the comparison is performed in the same way as it is for equality, except that if one input has a value for a given precision and the other does not, the comparison stops and the result is false, rather than null. As with equality, the second and millisecond precisions are combined and combined as a single precision using a decimal, with decimal equivalence semantics.

For Code values, equivalence is defined based on the code and system elements only. The display and version elements are ignored for the purposes of determining Code equivalence.

For Concept values, equivalence is defined as a non-empty intersection of the codes in each Concept, using Code equivalence to determine the intersection. Note that an empty Concept is not equivalent to a null Concept.

Note that this operator will always return true or false, even if either or both of its arguments are null or contain null components.

#### Greater

```
Greater : BinaryExpression
```

The Greater operator returns true if the first argument is greater than the second argument.

For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a <span class="kw">null</span>. When a quantity has no units specified, it is treated as a quantity with the default unit (<span class="lit">'1'</span>).

For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in <span class="kw">null</span>.

For Date, DateTime, and Time values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is false. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.

If either argument is null, the result is null.

The Greater operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.

> Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in [Ratio Operators](02-authorsguide.html#ratio-operators) for more information.
{: .note-info}

#### GreaterOrEqual

```
GreaterOrEqual : BinaryExpression
```

The GreaterOrEqual operator returns true if the first argument is greater than or equal to the second argument.

For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a <span class="kw">null</span>. When a quantity has no units specified, it is treated as a quantity with the default unit (<span class="lit">'1'</span>).

For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in <span class="kw">null</span>.

For Date, DateTime, and Time values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is true. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.

If either argument is null, the result is null.

The GreaterOrEqual operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.

> Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in [Ratio Operators](02-authorsguide.html#ratio-operators) for more information.
{: .note-info}

#### Less

```
Less : BinaryExpression
```

The Less operator returns true if the first argument is less than the second argument.

For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a <span class="kw">null</span>. When a quantity has no units specified, it is treated as a quantity with the default unit (<span class="lit">'1'</span>).

For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in <span class="kw">null</span>.

For Date, DateTime, and Time values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is false. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.

If either argument is null, the result is null.

The Less operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.

> Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in [Ratio Operators](02-authorsguide.html#ratio-operators) for more information.
{: .note-info}

#### LessOrEqual

```
LessOrEqual : BinaryExpression
```

The LessOrEqual operator returns true if the first argument is less than or equal to the second argument.

For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a <span class="kw">null</span>. When a quantity has no units specified, it is treated as a quantity with the default unit (<span class="lit">'1'</span>).

For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in <span class="kw">null</span>.

For Date, DateTime, and Time values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is true. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.

If either argument is null, the result is null.

The LessOrEqual operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.

> Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in [Ratio Operators](02-authorsguide.html#ratio-operators) for more information.
{: .note-info}

{: #not-equal}
#### NotEqual

```
NotEqual : BinaryExpression
```

The NotEqual operator returns true if its arguments are not the same value.

The NotEqual operator is a shorthand for invocation of logical negation of the Equal operator.

{: #logical-operators-1}
### Logical Operators

ELM defines logical operators that can be used to combine the results of logical expressions. _And_ and _Or_ can be used to combine any number of results, and _Not_ can be used to invert the result of any expression.

Note that these operators are defined with 3-valued logic semantics, allowing the operators to deal consistently with missing information.

For more information on the semantics of these operators, refer to the [Logical Operators](09-b-cqlreference.html#logical-operators-3) section in the [CQL Reference](09-b-cqlreference.html).

#### And

```
And : BinaryExpression
```

The And operator returns the logical conjunction of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that if either argument is false, the result is false; if both arguments are true, the result is true; otherwise, the result is null. Note also that ELM does not prescribe short-circuit evaluation.

The following example illustrates a simple _And_ expression:

<a name="figure-4-c"></a>
<div><img src="assets/images/image12.png" alt="assets/images/image12" width="138" height="217"/></div>

Figure 4‑C - A diagram to explain how ELM represents a simple <span class="kw">And</span> expression

#### Implies

```
Implies : BinaryExpression
```

The Implies operator returns the logical implication of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that if the left operand evaluates to true, this operator returns the boolean evaluation of the right operand. If the left operand evaluates to false, this operator returns true. Otherwise, this operator returns true if the right operand evaluates to true, and null otherwise.

Note that implies may use short-circuit evaluation in the case that the first operand evaluates to false.

#### Not

```
Not : UnaryExpression
```

The Not operator returns the logical negation of its argument. If the argument is true, the result is false; if the argument is false, the result is true; otherwise, the result is null.

#### Or

```
Or : BinaryExpression
```

The Or operator returns the logical disjunction of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that if either argument is true, the result is true; if both arguments are false, the result is false; otherwise, the result is null. Note also that ELM does not prescribe short-circuit evaluation.

#### Xor

```
Xor : BinaryExpression
```

The Xor operator returns the exclusive or of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that the result is true if and only if one argument is true and the other is false, and that the result is false if and only if both arguments are true or both arguments are false. If either or both arguments are null, the result is null.

### Nullological Operators

ELM defines several nullological operators that are useful for dealing with potentially missing information. These are _Null, IsNull_, _IsTrue_, _IsFalse_, and _Coalesce_.

For more information on the semantics of these operators, refer to the [Nullological Operators](09-b-cqlreference.html#nullological-operators-3) section in the [CQL Reference](09-b-cqlreference.html).

#### Null

```
Null : Expression
  ¦
  0..1 --> valueType
```

The Null operator returns a null, or missing information marker. To avoid the need to cast this result, the operator is allowed to return a typed null.

#### Coalesce

```
Coalesce : NaryExpression
```

The Coalesce operator returns the first non-null result in a list of arguments. If all arguments evaluate to null, the result is null. The static type of the first argument determines the type of the result, and all subsequent arguments must be of that same type.

#### IsFalse

```
IsFalse : UnaryExpression
```

The IsFalse operator determines whether or not its argument evaluates to false. If the argument evaluates to false, the result is true; if the argument evaluates to true or null, the result is false.

#### IsNull

```
IsNull : UnaryExpression
```

The IsNull operator determines whether or not its argument evaluates to null. If the argument evaluates to null, the result is true; otherwise, the result is false.

#### IsTrue

```
IsTrue : UnaryExpression
```

The IsTrue operator determines whether or not its argument evaluates to true. If the argument evaluates to true, the result is true; if the argument evaluates to false or null, the result is false.

### Conditional Operators

ELM defines several conditional expressions that can be used to return different values based on a condition, or set of conditions. These are the _If_ (conditional) expression, and the _Case_ expression.

The conditional expression allows a simple condition to be used to decide between one expression or another.

The case expression has two varieties, one that is equivalent to repeated conditionals, and one that allows a specific comparand to be identified and compared with each item to determine a result.

#### Case

```
Case : Expression
  ¦
  0..1 --> comparand : Expression
  ¦
  1..* --> caseItem : CaseItem
  ¦
  1..1 --> else : Expression
```

The Case operator allows for multiple conditional expressions to be chained together in a single expression, rather than having to nest multiple If operators. In addition, the comparand operand provides a variant on the case that allows a single value to be compared in each conditional.

If a comparand is not provided, the type of each when element of the caseItems within the Case is expected to be boolean. If a comparand is provided, the type of each when element of the caseItems within the Case is expected to be of the same type as the comparand. An else element must always be provided.

The static type of the then argument within the first caseItem determines the type of the result, and the then argument of each subsequent caseItem and the else argument must be of that same type.

The following example illustrates a more complex multi-conditional _Case_ expression:

<a name="figure-4-e"></a>
<div><img src="assets/images/image14.png" alt="assets/images/image14" width="230" height="397"/></div>

Figure 4‑E - A diagram to explain how ELM represents a complex multi-conditional <span class="kw">Case</span> expression

And finally, an equivalent comparand-based _Case_ expression:

<a name="figure-4-f"></a>
<div><img src="assets/images/image15.png" alt="assets/images/image15" width="184" height="286"/></div>

Figure 4‑F - A diagram to explain how ELM represents a comparand-base <span class="kw">Case</span> expression

#### If

```
If : Expression
  ¦
  1..1 --> condition : Expression
  ¦
  1..1 --> then : Expression
  ¦
  1..1 --> else : Expression
```

The If operator evaluates a condition, and returns the then argument if the condition evaluates to true; if the condition evaluates to false or null, the result of the else argument is returned. The static type of the then argument determines the result type of the conditional, and the else argument must be of that same type.

The following examples illustrates a simple _If_ expression (i.e. if / then / else):

<a name="figure-4-d"></a>
<div><img src="assets/images/image13.png" alt="assets/images/image13" width="143" height="193"/></div>

Figure 4‑D - A diagram to explain how ELM represents a simple <span class="kw">If</span> expression

### Arithmetic Operators

ELM provides a complete set of arithmetic operators to allow for manipulation of integer and real values within artifacts. In general, these operators have the expected semantics for arithmetic operators.

Note that if an operand evaluates to null, the result of the operation is defined to be null. This provides consistent semantics when dealing with missing information.

In general, operations that cause arithmetic overflow or underflow, or otherwise cannot be performed (such as division by 0) will result in null, rather than a run-time error.

For more information on the semantics of these operators, refer to the [Arithmetic Operators](09-b-cqlreference.html#arithmetic-operators-4) section in the [CQL Reference](09-b-cqlreference.html).

#### Abs

```
Abs : UnaryExpression
```

The Abs operator returns the absolute value of its argument.

When taking the absolute value of a quantity, the unit is unchanged.

If the argument is null, the result is null.

If the result of taking the absolute value of the input cannot be represented (e.g. Abs(minimum Integer)), the result is null.

The Abs operator is defined for the Integer, Long, Decimal, and Quantity types.

#### Add

```
Add : BinaryExpression
```

The Add operator performs numeric addition of its arguments.

When adding quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' can be added, but units of 'cm2' and 'cm' cannot. The unit of the result will be the most granular unit of either input. Attempting to operate on quantities with invalid units will result in a run-time error.

The Add operator is defined for the Integer, Long Decimal, and Quantity types. In addition, a time-valued Quantity can be added to a Date, DateTime or Time using this operator.

For Date, DateTime, and Time values, the operator returns the value of the first argument, incremented by the time-valued quantity, respecting variable length periods for calendar years and months.

For Date values, the quantity unit must be one of years, months, weeks, or days.

For DateTime values, the quantity unit must be one of years, months, weeks, days, hours, minutes, seconds, or milliseconds.

For Time values, the quantity unit must be one of hours, minutes, seconds, or milliseconds.

Note that as with any date and time operations, temporal units may be specified with either singular, plural, or UCUM units. However, to avoid the potential confusion of calendar-based date and time arithmetic with definite-duration date and time arithmetic, it is an error to attempt to add a definite-duration time-valued unit above days (and weeks), a calendar duration must be used.

For precisions above seconds, any decimal portion of the time-valued quantity is ignored, since date/time arithmetic above seconds is performed with calendar duration semantics.

For partial date/time values where the time-valued quantity is more precise than the partial date/time, the operation is performed by converting the time-based quantity to the highest specified granularity in the first argument (truncating any resulting decimal portion) and then adding it to the first argument.

If either argument is null, the result is null.

If the result of the addition cannot be represented (i.e. arithmetic overflow), the result is null.

The following example illustrates a simple _Add_ expression:

<a name="figure-4-g"></a>
<div><img src="assets/images/image16.png" alt="assets/images/image16" width="102" height="94"/></div>

Figure 4‑G - A diagram to explain how ELM represents a simple <span class="kw">Add</span> expression

#### Ceiling

```
Ceiling : UnaryExpression
```

The Ceiling operator returns the first integer greater than or equal to the argument.

If the argument is null, the result is null.

#### Divide

```
Divide : BinaryExpression
```

The Divide operator performs numeric division of its arguments. Note that the result type of Divide is Decimal, even if its arguments are of type Integer or Long. For integer division, use the truncated divide operator.

For division operations involving quantities, the resulting quantity will have the appropriate unit.

If either argument is null, the result is null.

If the result of the division cannot be represented, or the right argument is 0, the result is null.

The Divide operator is defined for the Decimal and Quantity types.

#### Exp

```
Exp : UnaryExpression
```

The Exp operator returns e raised to the given power.

If the argument is null, the result is null.

If the result of the operation cannot be represented, the result is null.

#### Floor

```
Floor : UnaryExpression
```

The Floor operator returns the first integer less than or equal to the argument.

If the argument is null, the result is null.

#### HighBoundary

```
HighBoundary : BinaryExpression
```

The HighBoundary operator returns the greatest possible value of the input to the specified precision.

If no precision is specified, the greatest precision of the type of the input value is used (i.e. at least 8 for Decimal, 4 for Date, at least 17 for DateTime, and at least 9 for Time).

If the precision is greater than the maximum possible precision of the implementation, the result is null.

The operator can be used with Decimal, Date, DateTime, and Time values.

```cql
HighBoundary(1.587, 8) // 1.58799999
HighBoundary(@2014, 6) // @2014-12
HighBoundary(@2014-01-01T08, 17) // @2014-01-01T08:59:59.999
HighBoundary(@T10:30, 9) // @T10:30:59.999
```

If the input value is null, the result is null.

#### Log

```
Log : BinaryExpression
```

The Log operator computes the logarithm of its first argument, using the second argument as the base.

If either argument is null, the result is null.

If the result of the operation cannot be represented, the result is null.

#### LowBoundary

```
LowBoundary : BinaryExpression
```

The LowBoundary operator returns the least possible value of the input to the specified precision.

If no precision is specified, the greatest precision of the type of the input value is used (i.e. at least 8 for Decimal, 4 for Date, at least 17 for DateTime, and at least 9 for Time).

If the precision is greater than the maximum possible precision of the implementation, the result is null.

The operator can be used with Decimal, Date, DateTime, and Time values.

```cql
LowBoundary(1.587, 8) // 1.58700000
LowBoundary(@2014, 6) // @2014-01
LowBoundary(@2014-01-01T08, 17) // @2014-01-01T08:00:00.000
LowBoundary(@T10:30, 9) // @T10:30:00.000
```

If the input value is null, the result is null.

#### Ln

```
Ln : UnaryExpression
```

The Ln operator computes the natural logarithm of its argument.

If the argument is null, the result is null.

If the result of the operation cannot be represented, the result is null.

#### MaxValue

```
MaxValue : Expression
  ¦
  1..1 --> valueType
```

The MaxValue operator returns the maximum representable value for the given type.

The MaxValue operator is defined for the Integer, Long, Decimal, Quantity, Date, DateTime, and Time types.

For Integer, MaxValue returns the maximum signed 32-bit integer, 2<sup>31</sup> - 1.

For Long, MaxValue returns the maximum signed 64-bit integer, 2<sup>63</sup> - 1.

For Decimal, MaxValue returns the maximum representable Decimal value, (10<sup>28</sup> - 1) / 10<sup>8</sup> (99999999999999999999.99999999).

For Quantity, MaxValue returns the maximum representable quantity, i.e. the maximum representable decimal value with a default unit (1).

For Date, MaxValue returns the maximum representable Date value, Date(9999, 12, 31).

For DateTime, MaxValue returns the maximum representable DateTime value, DateTime(9999, 12, 31, 23, 59, 59, 999).

Note that implementations may choose to represent the maximum DateTime value using a constant offset such as UTC.

For Time, MaxValue returns the maximum representable Time value, Time(23, 59, 59, 999).

For any other type, attempting to invoke MaxValue results in an error.


#### MinValue

```
MinValue : Expression
  ¦
  1..1 --> valueType
```

The MinValue operator returns the minimum representable value for the given type.

The MinValue operator is defined for the Integer, Long, Decimal, Quantity, Date, DateTime, and Time types.

For Integer, MinValue returns the minimum signed 32-bit integer, -(2<sup>31</sup>).

For Long, MinValue returns the minimum signed 64-bit integer, -(2<sup>63</sup>).

For Decimal, MinValue returns the minimum representable Decimal value, (-10<sup>28</sup> + 1) / 10<sup>8</sup> (-99999999999999999999.99999999).

For Quantity, MinValue returns the minimum representable quantity, i.e. the minimum representable decimal value with a default unit (1).

For Date, MinValue returns the minimum representable Date value, Date(1, 1, 1).

For DateTime, MinValue returns the minimum representable DateTime value, DateTime(1, 1, 1, 0, 0, 0, 0).

Note that implementations may choose to represent the minimum DateTime value using a constant offset such as UTC.

For Time, MinValue returns the minimum representable Time value, Time(0, 0, 0, 0).

For any other type, attempting to invoke MinValue results in an error.

#### Modulo

```
Modulo : BinaryExpression
```

The Modulo operator computes the remainder of the division of its arguments.

If either argument is null, the result is null.

If the result of the modulo cannot be represented, or the right argument is 0, the result is null.

The Modulo operator is defined for the Integer, Long, Decimal, and Quantity types.

For Modulo operations involving quantities, the resulting quantity will have the appropriate unit.

#### Multiply

```
Multiply : BinaryExpression
```

The Multiply operator performs numeric multiplication of its arguments.

For multiplication operations involving quantities, the resulting quantity will have the appropriate unit.

If either argument is null, the result is null.

If the result of the operation cannot be represented, the result is null.

The Multiply operator is defined for the Integer, Long, Decimal and Quantity types.

#### Negate

```
Negate : UnaryExpression
```

The Negate operator returns the negative of its argument.

When negating quantities, the unit is unchanged.

If the argument is null, the result is null.

If the result of negating the argument cannot be represented (e.g. -(minimum Integer)), the result is null.

The Negate operator is defined for the Integer, Long, Decimal, and Quantity types.

#### Power

```
Power : BinaryExpression
```

The Power operator raises the first argument to the power given by the second argument.

If either argument is null, the result is null.

If the result of the operation cannot be represented, the result is null.

#### Precision

```
Precision : UnaryExpression
```

The Precision operator returns the number of digits of precision in the input value.

The operator can be used with Decimal, Date, DateTime, and Time values.

For Decimal values, the operator returns the number of digits of precision after the decimal place in the input value.

```cql
Precision(1.58700) // 5
```

For Date and DateTime values, the operator returns the number of digits of precision in the input value.

```cql
Precision(@2014) // 4
Precision(@2014-01-05T10:30:00.000) // 17
Precision(@T10:30) // 4
Precision(@T10:30:00.000) // 9
```

If the argument is null, the result is null.

#### Predecessor

```
Predecessor : UnaryExpression
```

The Predecessor operator returns the predecessor of the argument. For example, the predecessor of 2 is 1. If the argument is already the minimum value for the type, a <span class="kw">null</span> is returned.

The Predecessor operator is defined for the Integer, Long, Decimal, Quantity, Date, DateTime, and Time types.

For Integer, Predecessor is equivalent to subtracting 1.

For Long, Predecessor is equivalent to subtracting 1L.

For Decimal, Predecessor is equivalent to subtracting the minimum precision value for the Decimal type, or 10^-08.

For Date, DateTime, and Time values, Predecessor is equivalent to subtracting a time-unit quantity for the lowest specified precision of the value. For example, if the DateTime is fully specified, Predecessor is equivalent to subtracting 1 millisecond; if the DateTime is specified to the second, Predecessor is equivalent to subtracting one second, etc.

For Quantity values, the Predecessor is equivalent to subtracting 1 if the quantity is an integer, and the minimum precision value for Decimal if the quantity is a decimal. The units are unchanged.

If the argument is null, the result is null.

If the result of the operation cannot be represented (i.e. would result in underflow), the result is <span class="kw">null</span>.

> Note that implementations that support more precise values than the minimum required precision and scale for Decimal, DateTime, and Time values, the predecessor will reflect the minimum representable step size for the implementation.
{: .note-warning}

#### Round

```
Round : OperatorExpression
  ¦
  1..1 --> operand : Expression
  ¦
  0..1 --> precision : Expression
```

The Round operator returns the nearest integer to its argument. The semantics of round are defined as a traditional round, meaning that a decimal value of 0.5 or higher will round to 1.

If the argument is null, the result is null.

Precision determines the decimal place at which the rounding will occur. If precision is not specified or null, 0 is assumed.

#### Subtract

```
Subtract : BinaryExpression
```

The Subtract operator performs numeric subtraction of its arguments.

When subtracting quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' can be subtracted, but units of 'cm2' and 'cm' cannot. The unit of the result will be the most granular unit of either input. Attempting to operate on quantities with invalid units will result in a run-time error.

The Subtract operator is defined for the Integer, Long, Decimal, and Quantity types. In addition, a time-valued Quantity can be subtracted from a Date, DateTime, or Time using this operator.

For Date, DateTime, Time values, the operator returns the value of the first argument, decremented by the time-valued quantity, respecting variable length periods for calendar years and months.

For Date values, the quantity unit must be one of years, months, weeks, or days.

For DateTime values, the quantity unit must be one of years, months, weeks, days, hours, minutes, seconds, or milliseconds.

For Time values, the quantity unit must be one of hours, minutes, seconds, or milliseconds.

Note that as with any Date, Time, or DateTime operations, temporal units may be specified with either singular, plural, or UCUM units. However, to avoid the potential confusion of calendar-based date and time arithmetic with definite-duration date and time arithmetic, it is an error to attempt to subtract a definite-duration time-valued unit above days (and weeks), a calendar duration must be used.

For precisions above seconds, any decimal portion of the time-valued quantity is ignored, since date/time arithmetic above seconds is performed with calendar duration semantics.

For partial date/time values where the time-valued quantity is more precise than the partial date/time, the operation is performed by converting the time-based quantity to the highest specified granularity in the first argument (truncating any resulting decimal portion) and then subtracting it from the first argument.

If either argument is null, the result is null.

If the result of the operation cannot be represented, the result is null.

#### Successor

```
Successor : UnaryExpression
```

The <span class="id">Successor</span> operator returns the successor of the argument. For example, the successor of 1 is 2. If the argument is already the maximum value for the type, <span class="kw">null</span> is returned

The <span class="id">Successor</span> operator is defined for the Integer, Long, Decimal, Quantity, Date, DateTime, and Time types.

For <span class="id">Integer</span>, <span class="id">Successor</span> is equivalent to adding 1.

For <span class="id">Long</span>, <span class="id">Successor</span> is equivalent to adding 1L.

For <span class="id">Decimal</span>, <span class="id">Successor</span> is equivalent to adding the minimum precision value for the <span class="id">Decimal</span> type, or 10^-08.

For <span class="id">Date</span>, <span class="id">DateTime</span>, and <span class="id">Time</span> values, <span class="id">Successor</span> is equivalent to adding a time-unit quantity for the lowest specified precision of the value. For example, if the <span class="id">DateTime</span> is fully specified, <span class="id">Successor</span> is equivalent to adding 1 millisecond; if the <span class="id">DateTime</span> is specified to the second, <span class="id">Successor</span> is equivalent to adding one second, etc.

For <span class="id">Quantity</span> values, <span class="id">Successor</span> is equivalent to adding 1 if the quantity is an integer, and the minimum precision value for the <span class="id">Decimal</span> type if the quantity is a decimal. The units are unchanged.

If the argument is <span class="kw">null</span>, the result is <span class="kw">null</span>.

If the result of the operation cannot be represented (i.e. would result in overflow), the result is <span class="kw">null</span>.

> Note that implementations that support more precise values than the minimum required precision and scale for Decimal, DateTime, and Time values, the successor will reflect the minimum representable step size for the implementation.
{: .note-warning}

#### Truncate

```
Truncate : UnaryExpression
```

The Truncate operator returns the integer component of its argument.

If the argument is null, the result is null.

#### TruncatedDivide

```
TruncatedDivide : BinaryExpression
```

The TruncatedDivide operator performs integer division of its arguments.

If either argument is null, the result is null.

If the result of the operation cannot be represented, or the right argument is 0, the result is null.

The TruncatedDivide operator is defined for the Integer, Long, Decimal, and Quantity types.

For TruncatedDivide operations involving quantities, the resulting quantity will have the appropriate unit.

### String Operators

ELM defines a set of string operators to allow for manipulation of string values within artifact definitions.

Indexes within strings are defined to be 0-based.

Note that except as noted within the documentation for each operator, if any argument evaluates to null, the result of the operation is also defined to be null.

For more information on the semantics of these operators, refer to the [String Operators](09-b-cqlreference.html#string-operators-3) section in the [CQL Reference](09-b-cqlreference.html).

#### Combine

```
Combine : OperatorExpression
  ¦
  1..1 --> source : Expression
  ¦
  0..1 --> separator : Expression
```

The Combine operator combines a list of strings, optionally separating each string with the given separator.

If the source argument is null, or the source list is empty, the result is null.

If the separator argument is null, it is ignored.

For consistency with aggregate operator behavior, null elements in the input list are ignored.

#### Concatenate

```
Concatenate : NaryExpression
```

The Concatenate operator performs string concatenation of its arguments.

If any argument is null, the result is null.

#### EndsWith

```
EndsWith : BinaryExpression
```

The EndsWith operator returns true if the given string ends with the given suffix.

If the suffix is the empty string, the result is true.

If either argument is null, the result is null.

#### Equal

Refer to the [Equal section](#equal) in the Comparison Operators.

#### Equivalent

Refer to the [Equivalent section](#equivalent) in the Comparison Operators.

#### Indexer

```
Indexer : BinaryExpression
```

The Indexer operator returns the index<sup>th</sup> element in a string or list.

Indexes in strings and lists are defined to be 0-based.

If the index is less than 0 or greater than the length of the string or list being indexed, the result is null.

If either argument is null, the result is null.

#### LastPositionOf

```
LastPositionOf : OperatorExpression
  ¦
  1..1 --> pattern : Expression
  ¦
  1..1 --> string : Expression
```

The LastPositionOf operator returns the 0-based index of the beginning of the last appearance of the given pattern in the given string.

If the pattern is not found, the result is -1.

If either argument is null, the result is null.

#### Length

```
Length : UnaryExpression
```

The Length operator returns the length of its argument.

For strings, the length is the number of characters in the string.

For lists, the length is the number of elements in the list.

If the argument is null, the result is 0.

#### Lower

```
Lower : UnaryExpression
```

The Lower operator returns the given string with all characters converted to their lowercase equivalents.

Note that the definition of lowercase for a given character is a locale-dependent determination, and is not specified by CQL. Implementations are expected to provide appropriate and consistent handling of locale for their environment.

If the argument is null, the result is null.

#### Matches

```
Matches : BinaryExpression
```

The Matches operator returns true if the given string matches the given regular expression pattern. Regular expressions should function consistently, regardless of any culture- and locale-specific settings in the environment, should be case-sensitive, use partial matching, use single line mode, and allow Unicode characters.  The start and end of line markers ^, $ can be used to match the entire string.

If either argument is null, the result is null.

Platforms will typically use native regular expression implementations. These are typically fairly similar, but there will always be small differences. As such, CQL does not prescribe a particular dialect, but recommends the use of the [PCRE](http://www.pcre.org) dialect.

#### Not Equal

Refer to the [Not Equal section](#not-equal) in the Comparison Operators.

#### PositionOf

```
PositionOf : OperatorExpression
  ¦
  1..1 --> pattern : Expression
  ¦
  1..1 --> string : Expression
```

The PositionOf operator returns the 0-based index of the beginning given pattern in the given string.

If the pattern is not found, the result is -1.

If either argument is null, the result is null.

#### ReplaceMatches

```
ReplaceMatches : TernaryExpression
```

The ReplaceMatches operator matches the given string using the regular expression pattern, replacing each match with the given substitution. The substitution string may refer to identified match groups in the regular expression. Regular expressions should function consistently, regardless of any culture- and locale-specific settings in the environment, should be case-sensitive, use partial matching, use single line mode and allow Unicode characters. The start and end of line markers ^, $ can be used to match the entire string.

If any argument is null, the result is null.

Platforms will typically use native regular expression implementations. These are typically fairly similar, but there will always be small differences. As such, CQL does not prescribe a particular dialect, but recommends the use of the [PCRE](http://www.pcre.org) dialect.

#### Split

```
Split : OperatorExpression
  ¦
  1..1 --> stringToSplit : Expression
  ¦
  0..1 --> separator : Expression
```

The Split operator splits a string into a list of strings using a separator.

If the stringToSplit argument is null, the result is null.

If the stringToSplit argument does not contain any appearances of the separator, the result is a list of strings containing one element that is the value of the stringToSplit argument.

#### SplitOnMatches

```
SplitOnMatches : OperatorExpression
  ¦
  1..1 --> stringToSplit : Expression
  ¦
  1..1 --> separatorPattern : Expression
```

The SplitOnMatches operator splits a string into a list of strings using matches of a regex pattern.

The separatorPattern argument is a regex pattern, following the same semantics as the Matches operator.

If the stringToSplit argument is null, the result is null.

If the stringToSplit argument does not contain any appearances of the separator pattern, the result is a list of strings containing one element that is the input value of the stringToSplit argument.

#### StartsWith

```
StartsWith : BinaryExpression
```

The StartsWith operator returns true if the given string starts with the given prefix.

If the prefix is the empty string, the result is true.

If either argument is null, the result is null.

#### Substring

```
Substring : OperatorExpression
  ¦
  1..1 --> stringToSub : Expression
  ¦
  1..1 --> startIndex : Expression
  ¦
  0..1 --> length : Expression
```

The Substring operator returns the string within stringToSub, starting at the 0-based index startIndex, and consisting of length characters.

If length is omitted, the substring returned starts at startIndex and continues to the end of stringToSub.

If stringToSub or startIndex is null, or startIndex is out of range, the result is null.

#### Upper

```
Upper : UnaryExpression
```

The Upper operator returns the given string with all characters converted to their upper case equivalents.

Note that the definition of uppercase for a given character is a locale-dependent determination, and is not specified by CQL. Implementations are expected to provide appropriate and consistent handling of locale for their environment.

If the argument is null, the result is null.

### Date and Time Operators

ELM defines several operators for representing the manipulation of date and time values. These operators are defined using a common precision type that allows the various precisions (e.g. day, month, week, hour, minute, second) of time to be manipulated.

Except as noted within the documentation for each operator, if any argument evaluates to null, the result of the operation is also defined to be null.

For more information on the semantics of these operators, refer to the [Date, DateTime, and Time Operators](09-b-cqlreference.html#datetime-operators-2) section in the [CQL Reference](09-b-cqlreference.html).

#### Add

Refer to the [Add section](#add) in the Arithmetic Operators.

#### After

Refer to the [After section](#after-1) in the Interval Operators.

#### Before

Refer to the [Before section](#before-1) in the Interval Operators.

#### Equal

Refer to the [Equal section](#equal) in the Comparison Operators.

#### Equivalent

Refer to the [Equivalent section](#equivalent) in the Comparison Operators.

#### Date

```
Date : OperatorExpression
  ¦
  1..1 --> year : Expression
  ¦
  0..1 --> month : Expression
  ¦
  0..1 --> day : Expression
```

The Date operator constructs a date value from the given components.

At least one component must be specified, and no component may be specified at a precision below an unspecified precision. For example, month may be null, but if it is, day must be null as well.

#### DateFrom

```
DateFrom : UnaryExpression
```

The DateFrom operator returns the date (with no time components specified) of the argument.

If the argument is null, the result is null.

#### DateTime

```
DateTime : OperatorExpression
  ¦
  1..1 --> year : Expression
  ¦
  0..1 --> month : Expression
  ¦
  0..1 --> day : Expression
  ¦
  0..1 --> hour : Expression
  ¦
  0..1 --> minute : Expression
  ¦
  0..1 --> second : Expression
  ¦
  0..1 --> millisecond : Expression
  ¦
  0..1 --> timezoneOffset : Expression
```

The DateTime operator constructs a DateTime value from the given components.

At least one component other than timezoneOffset must be specified, and no component may be specified at a precision below an unspecified precision. For example, hour may be null, but if it is, minute, second, and millisecond must all be null as well.

If all the arguments are <span class="kw">null</span>, the result is <span class="kw">null</span>, as opposed to a <span class="id">DateTime</span> with no components specified.

Although the milliseconds are specified with a separate component, seconds and milliseconds are combined and represented as a <span class="id">Decimal</span> for the purposes of comparison.

If timezoneOffset is not specified, it is defaulted to the timezone offset of the evaluation request.

#### DateTimeComponentFrom

```
DateTimeComponentFrom : UnaryExpression
  ¦
  0..1 --> precision
```

The DateTimeComponentFrom operator returns the specified component of the argument.

If the argument is null, the result is null.

The precision must be one of Year, Month, Day, Hour, Minute, Second, or Millisecond. Note specifically that since there is variability how weeks are counted, Week precision is not supported, and will result in an error.

#### DifferenceBetween

```
DifferenceBetween : BinaryExpression
  ¦
  0..1 --> precision
```

The DifferenceBetween operator returns the number of boundaries crossed for the specified precision between the first and second arguments. If the first argument is after the second argument, the result is negative. Because this operation is only counting boundaries crossed, the result is always an integer.

For Date values, precision must be one of Year, Month, Week, or Day.

For Time values, precision must be one of Hour, Minute, Second, or Millisecond.

For calculations involving weeks, Sunday is considered to be the first day of the week for the purposes of determining boundaries.

When calculating the difference between DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

Note that when calculating difference, just like date and time comparison calculations, seconds and milliseconds are considered a single precision with decimal semantics.

Note that this operator can be implemented using Uncertainty as described in the CQL specification, Chapter 5, Precision-Based Timing.

#### DurationBetween

```
DurationBetween : BinaryExpression
  ¦
  0..1 --> precision
```

The DurationBetween operator returns the number of whole calendar periods for the specified precision between the first and second arguments. If the first argument is after the second argument, the result is negative. The result of this operation is always an integer; any fractional periods are dropped.

For Date values, precision must be one of Year, Month, Week, or Day.

For Time values, precision must be one of Hour, Minute, Second, or Millisecond.

For calculations involving weeks, the duration of a week is equivalent to 7 days.

When calculating duration between DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

Note that when calculating duration, just like date and time comparison calculations, seconds and milliseconds are considered a single precision with decimal semantics.

Note that this operator can be implemented using Uncertainty as described in the CQL specification, Chapter 5, Precision-Based Timing.

#### Not Equal

Refer to the [Not Equal section](#not-equal) in the Comparison Operators.

#### Now

```
Now : OperatorExpression
```

The Now operator returns the date and time of the start timestamp associated with the evaluation request. Now is defined in this way for two reasons:
1) The operation will always return the same value within any given evaluation, ensuring that the result of an expression containing Now will always return the same result.

2) The operation will return the timestamp associated with the evaluation request, allowing the evaluation to be performed with the same timezone offset information as the data delivered with the evaluation request.

#### SameAs

```
SameAs : BinaryExpression
  ¦
  0..1 --> precision
```

The SameAs operator is defined for Date, DateTime, and Time values, as well as intervals.

For the Interval overloads, the SameAs operator returns true if the intervals start and end at the same value, using the semantics described in the Start and End operator to determine interval boundaries.

The SameAs operator compares two Date, DateTime, or Time values to the specified precision for equality. Individual component values are compared starting from the year component down to the specified precision. If all values are specified and have the same value for each component, then the result is true. If a compared component is specified in both dates, but the values are not the same, then the result is false. Otherwise the result is null, as there is not enough information to make a determination.

If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.

For Date values, precision must be one of year, month, or day.

For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.

For Time values, precision must be one of hour, minute, second, or millisecond.

Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.

When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

#### SameOrBefore

```
SameOrBefore : BinaryExpression
  ¦
  0..1 --> precision
```

The SameOrBefore operator is defined for Date, DateTime, and Time values, as well as intervals.

For the Interval overload, the SameOrBefore operator returns true if the first interval ends on or before the second one starts. In other words, if the ending point of the first interval is less than or equal to the starting point of the second interval, using the semantics described in the Start and End operators to determine interval boundaries.

The SameOrBefore operator compares two Date, DateTime, or Time values to the specified precision to determine whether the first argument is the same or before the second argument. The comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is true.

If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.

For Date values, precision must be one of year, month, or day.

For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.

For Time values, precision must be one of hour, minute, second, or millisecond.

Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.

When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

#### SameOrAfter

```
SameOrAfter : BinaryExpression
  ¦
  0..1 --> precision
```

The SameOrAfter operator is defined for Date, DateTime, and Time values, as well as intervals.

For the Interval overload, the SameOrAfter operator returns true if the first interval starts on or after the second one ends. In other words, if the starting point of the first interval is greater than or equal to the ending point of the second interval, using the semantics described in the Start and End operators to determine interval boundaries.

For the Date, DateTime, and Time overloads, this operator compares two Date, DateTime, or Time values to the specified precision to determine whether the first argument is the same or after the second argument. The comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is true.

If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.

For Date values, precision must be one of year, month, or day.

For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.

For Time values, precision must be one of hour, minute, second, or millisecond.

Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.

When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

#### Subtract

Refer to the [Subtract section](#subtract) in the Arithmetic Operators.

#### Time

```
Time : OperatorExpression
  ¦
  1..1 --> hour : Expression
  ¦
  0..1 --> minute : Expression
  ¦
  0..1 --> second : Expression
  ¦
  0..1 --> millisecond : Expression
```

The Time operator constructs a time value from the given components.

At least one component other than timezoneOffset must be specified, and no component may be specified at a precision below an unspecified precision. For example, minute may be null, but if it is, second, and millisecond must all be null as well.

Although the milliseconds are specified with a separate component, seconds and milliseconds are combined and represented as a <span class="id">Decimal</span> for the purposes of comparison.

#### TimeFrom

```
TimeFrom : UnaryExpression
```

The TimeFrom operator returns the Time of the argument.

When extracting the Time from a DateTime value, implementations should normalize to the timezone offset of the evaluation request timestamp.

If the argument is null, the result is null.

#### TimezoneOffsetFrom

```
TimezoneOffsetFrom : UnaryExpression
```

The TimezoneOffsetFrom operator returns the timezone offset of the argument.

If the argument is null, the result is null.

#### TimeOfDay

```
TimeOfDay : OperatorExpression
```

The TimeOfDay operator returns the time-of-day of the start timestamp associated with the evaluation request. See the Now operator for more information on the rationale for defining the TimeOfDay operator in this way.

#### Today

```
Today : OperatorExpression
```

The Today operator returns the date (with no time component) of the start timestamp associated with the evaluation request. See the Now operator for more information on the rationale for defining the Today operator in this way.

### Interval Operators

ELM defines a complete set of operators for use in defining and manipulating interval values.

Constructing an interval is performed with the _Interval_ expression, which allows the beginning and ending of the interval to be specified, as well as whether the interval beginning and ending is exclusive (open), or inclusive (closed).

ELM defines support for basic operations on intervals including determining length, accessing interval properties, and determining interval boundaries.

ELM also supports complete operations involving comparisons of intervals, including equality, membership testing, and inclusion testing.

In addition, the language supports operators for combining and manipulating intervals.

Note that ELM does not include a definition for During because it is synonymous with IncludedIn.

For more information on the semantics of these operators, refer to the [Interval Operators](09-b-cqlreference.html#interval-operators-3) section in the [CQL Reference](09-b-cqlreference.html).

#### Interval

```
Interval : Expression
  ¦
  0..1 --> low : Expression
  ¦
  0..1 --> lowClosedExpression : Expression
  ¦
  0..1 --> high : Expression
  ¦
  0..1 --> highClosedExpression : Expression
  ¦
  0..1 --> lowClosed
  ¦
  0..1 --> highClosed
```

The Interval selector defines an interval value. An interval must be defined using a point type that supports comparison, as well as Successor and Predecessor operations, and Minimum and Maximum Value operations.

The low and high bounds of the interval may each be defined as open or closed. Following standard terminology usage in interval mathematics, an open interval is defined to exclude the specified point, whereas a closed interval includes the point. The default is closed, indicating an inclusive interval.

The low and high elements are both optional. If the low element is not specified, the low bound of the resulting interval is null. If the high element is not specified, the high bound of the resulting interval is null.

The static type of the low bound determines the type of the interval, and the high bound must be of the same type.

If the low bound of the interval is null and open, the low bound of the interval is interpreted as unknown and represented as an uncertainty from the minimum value for the point type to the high boundary (inclusive); computations involving the low boundary may result in null.

If the low bound of the interval is null and closed, the interval is interpreted to start at the minimum value of the point type, and computations involving the low boundary will be performed with that value.

If the high bound of the interval is null and open, the high bound of the interval is unknown and represented as an uncertainty from the low boundary (inclusive) to the maximum value for the point type; computations involving the high boundary may result in null.

If the high bound of the interval is null and closed, the interval is interpreted to end at the maximum value of the point type, and computations involving the high boundary will be performed with that interpretation.

{: #after-1}
#### After

```
After : BinaryExpression
  ¦
  0..1 --> precision
```

The After operator is defined for Intervals, as well as Date, DateTime, and Time values.

For the Interval overload, the After operator returns true if the first interval starts after the second one ends. In other words, if the starting point of the first interval is greater than the ending point of the second interval using the semantics described in the Start and End operators to determine interval boundaries.

For the Date, DateTime, and Time overloads, the After operator returns true if the first datetime is after the second datetime at the specified level of precision. The comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is false.

If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.

For Date values, precision must be one of year, month, or day.

For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.

For Time values, precision must be one of hour, minute, second, or millisecond.

Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.

When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

{: #before-1}
#### Before

```
Before : BinaryExpression
  ¦
  0..1 --> precision
```

The Before operator is defined for Intervals, as well as Date, DateTime, and Time values.

For the Interval overload, the Before operator returns true if the first interval ends before the second one starts. In other words, if the ending point of the first interval is less than the starting point of the second interval, using the semantics described in the Start and End operators to determine interval boundaries.

For the Date, DateTime, and Time overloads, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is false.

If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.

For Date values, precision must be one of year, month, or day.

For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.

For Time values, precision must be one of hour, minute, second, or millisecond.

Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.

When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.

If either argument is null, the result is null.

#### Collapse

```
Collapse : BinaryExpression
```

The Collapse operator returns the unique set of intervals that completely covers the ranges present in the given list of intervals. In other words, adjacent intervals within a sorted list are merged if they either overlap or meet.

The operation is performed by combining successive intervals in the input that either overlap or meet, using the semantics defined for the Overlaps and Meets operators. Note that because those operators are themselves defined in terms of interval successor and predecessor operators, sets of Date-, DateTime-, and Time-based intervals that are only defined to a particular precision will calculate meets and overlaps at that precision. For example, a list of DateTime-based intervals where the boundaries are all specified to the hour will collapse at the hour precision, unless the collapse precision is overridden with the per argument.

The per argument determines the precision at which the collapse is computed and must be a quantity-valued expression compatible with the interval point type. For numeric intervals, this means a quantity with the default unit '1' (not to be confused with the quantity value, which may be any valid positive decimal). For Date-, DateTime-, and Time-valued intervals, this means a quantity with a temporal unit (e.g., 'year', 'month', etc).

Conceptually, the per argument to the collapse operator partitions the value-space for the operation into units of size 'per', and the intervals will be collapsed aligning with those partitions. Note that the 'per' partitions start from the starting boundary of the first input interval, ordered.

If the per argument is null, a per value will be constructed based on the coarsest precision of the boundaries of the intervals in the input set. For example, a list of DateTime-based intervals where the boundaries are a mixture of hours and minutes will collapse at the hour precision.

If the list of intervals is empty, the result is empty. If the list of intervals contains a single interval, the result is a list with that interval. If the list of intervals contains nulls, they will be excluded from the resulting list.

If the source argument is null, the result is null.

#### Contains

```
Contains : BinaryExpression
  ¦
  0..1 --> precision
```

The Contains operator returns true if the first operand contains the second.

There are two overloads of this operator:
1. List, T : The type of T must be the same as the element type of the list.
2. Interval, T : The type of T must be the same as the point type of the interval.

For the List, T overload, this operator returns true if the given element is in the list, using equality semantics, with the exception that null elements are considered equal. If the first argument is null, the result is false. If the second argument is null, the result is true if the list contains any null elements, and false otherwise.

For the Interval, T overload, this operator returns true if the given point is equal to the starting or ending point of the interval, or greater than the starting point and less than the ending point. For open interval boundaries, exclusive comparison operators are used. For closed interval boundaries, if the interval boundary is null, the result of the boundary comparison is considered true. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision. If the first argument is null, the result is false. If the second argument is null, the result is null.

#### End

```
End : UnaryExpression
```

The End operator returns the ending point of an interval.

If the high boundary of the interval is open, this operator returns the Predecessor of the high value of the interval. Note that if the high value of the interval is null, the result is null.

If the high boundary of the interval is closed and the high value of the interval is not null, this operator returns the high value of the interval. Otherwise, the result is the maximum value of the point type of the interval.

If the argument is null, the result is null.

#### Ends

```
Ends : BinaryExpression
  ¦
  0..1 --> precision
```

The Ends operator returns true if the first interval ends the second. In other words, if the starting point of the first interval is greater than or equal to the starting point of the second, and the ending point of the first interval is equal to the ending point of the second.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### Equal

Refer to the [Equal section](#equal) in the Comparison Operators.

#### Equivalent

Refer to the [Equivalent section](#equivalent) in the Comparison Operators.

#### Except

```
Except : NaryExpression
```

The Except operator returns the set difference of the two arguments.

This operator has two overloads:
1. List, List
2. Interval, Interval

For the list overload, this operator returns a list with the elements that appear in the first operand, that do not appear in the second operand, using equality semantics, with the exception that null elements are considered equal for the purposes of determining the result. The operator is defined with set semantics, meaning that each element will appear in the result at most once, and that there is no expectation that the order of the inputs will be preserved in the results.

For the interval overload, this operator returns the portion of the first interval that does not overlap with the second. If the second argument is properly contained within the first and does not start or end it, this operator returns null.

If the first argument is null, the result is null. If the second argument is null, the operation is performed as though the second argument was an empty list.

#### Expand

```
Expand : BinaryExpression
```

The Expand operator returns the set of intervals of size per for all the ranges present in the given list of intervals, or the list of points covering the range of the given interval, if invoked on a single interval.

The per argument determines the size of the resulting intervals and must be a quantity-valued expression compatible with the interval point type. For numeric intervals, this means a quantity with the default unit '1' (not to be confused with the quantity value, which may be any valid positive decimal).  For Date-, DateTime-, and Time-valued intervals, this means a quantity with a temporal unit (e.g., 'year', 'month', etc).

Conceptually, the per argument to the expand operator partitions the value-space for the operation into units of size 'per', and the intervals will be expanded aligning with those partitions. Note that the 'per' partitions start from the starting boundary of the first input interval, ordered.

If the per argument is null, a per value will be constructed based on the coarsest precision of the boundaries of the intervals in the input set. For example, a list of DateTime-based intervals where the boundaries are a mixture of hours and minutes will expand at the hour precision.

Note that if the values in the intervals are more precise than the per quantity, the more precise values will be truncated to the precision specified by the per quantity.

If the input argument is an interval, rather than a list of intervals, the result is a list of points, rather than a list of intervals. In this case, the calculation is performed the same way, but the starting point of each resulting interval is returned, rather than the interval.

If the list of intervals is empty, the result is empty. If the list of intervals contains nulls, they will be excluded from the resulting list.

If the source argument is null, the result is null.

#### In

```
In : BinaryExpression
  ¦
  0..1 --> precision
```

The In operator tests for membership in an interval or list.

There are two overloads of this operator:
1. T, List : The type of T must be the same as the element type of the list.
2. T, Interval : The type of T must be the same as the point type of the interval.

For the T, List overload, this operator returns true if the given element is in the given list, using equality semantics, with the exception that <span class="kw">null</span> elements are considered equal. If the first argument is null, the result is true if the list contains any null elements, and false otherwise. If the second argument is null, the result is false.

For the T, Interval overload, this operator returns true if the given point is equal to the starting or ending point of the interval, or greater than the starting point and less than the ending point. For open interval boundaries, exclusive comparison operators are used. For closed interval boundaries, if the interval boundary is null, the result of the boundary comparison is considered true. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision. If the first argument is null, the result is null. If the second argument is null, the result is false.

#### Includes

```
Includes : BinaryExpression
  ¦
  0..1 --> precision
```

The Includes operator returns true if the first operand completely includes the second.

There are two overloads of this operator:
1. List, List : The element type of both lists must be the same.
2. Interval, Interval : The point type of both intervals must be the same.

For the List, List overload, this operator returns true if the first operand includes every element of the second operand, using equality semantics, with the exception that null elements are considered equal.

For the Interval, Interval overload, this operator returns true if starting point of the first interval is less than or equal to the starting point of the second interval, and the ending point of the first interval is greater than or equal to the ending point of the second interval. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If either argument is null, the result is null.

{: #included-in}
#### IncludedIn

```
IncludedIn : BinaryExpression
  ¦
  0..1 --> precision
```

The IncludedIn operator returns true if the first operand is completely included in the second.

There are two overloads of this operator:
1. List, List : The element type of both lists must be the same.
2. Interval, Interval : The point type of both intervals must be the same.

For the List, List overload, this operator returns true if every element in the first list is included in the second list, using equality semantics, with the exception that null elements are considered equal.

For the Interval, Interval overload, this operator returns true if the starting point of the first interval is greater than or equal to the starting point of the second interval, and the ending point of the first interval is less than or equal to the ending point of the second interval. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If either argument is null, the result is null.

#### Intersect

```
Intersect : NaryExpression
```

The Intersect operator returns the intersection of its arguments.

This operator has two overloads:
	List
	Interval

For the list overload, this operator returns a list with the elements that appear in both lists, using equality semantics, with the exception that null elements are considered equal for the purposes of the intersection. The operator is defined with set semantics, meaning that each element will appear in the result at most once, and that there is no expectation that the order of the inputs will be preserved in the results.

For the interval overload, this operator returns the interval that defines the overlapping portion of both arguments. If the arguments do not overlap, this operator returns null.

If either argument is null, the result is null.

#### Meets

```
Meets : BinaryExpression
  ¦
  0..1 --> precision
```

The Meets operator returns true if the first interval ends immediately before the second interval starts, or if the first interval starts immediately after the second interval ends. In other words, if the ending point of the first interval is equal to the predecessor of the starting point of the second, or if the starting point of the first interval is equal to the successor of the ending point of the second.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### MeetsBefore

```
MeetsBefore : BinaryExpression
  ¦
  0..1 --> precision
```

The MeetsBefore operator returns true if the first interval ends immediately before the second interval starts. In other words, if the ending point of the first interval is equal to the predecessor of the starting point of the second.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### MeetsAfter

```
MeetsAfter : BinaryExpression
  ¦
  0..1 --> precision
```

The MeetsAfter operator returns true if the first interval starts immediately after the second interval ends. In other words, if the starting point of the first interval is equal to the successor of the ending point of the second.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### Not Equal

Refer to the [Not Equal section](#not-equal) in the Comparison Operators.

#### Overlaps

```
Overlaps : BinaryExpression
  ¦
  0..1 --> precision
```

The Overlaps operator returns true if the first interval overlaps the second. In other words, if the starting or ending point of either interval is in the other, or if the ending point of the first interval is greater than or equal to the starting point of the second interval, and the starting point of the first interval is less than or equal to the ending point of the second interval.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### OverlapsBefore

```
OverlapsBefore : BinaryExpression
  ¦
  0..1 --> precision
```

The OverlapsBefore operator returns true if the first interval starts before and overlaps the second. In other words, if the first interval starts before and ends on or after the start of the second interval.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### OverlapsAfter

```
OverlapsAfter : BinaryExpression
  ¦
  0..1 --> precision
```

The OverlapsAfter operator returns true if the first interval overlaps and ends after the second. In other words, if the first interval ends after and starts on or before the end of the second interval.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### PointFrom

```
PointFrom : UnaryExpression
```

The PointFrom expression extracts the single point from the source interval. The source interval must be a unit interval (meaning an interval with the same starting and ending boundary), otherwise, a run-time error is thrown. If the source interval is null, the result is null.

{: #proper-contains}
#### ProperContains

```
ProperContains : BinaryExpression
  ¦
  0..1 --> precision
```

The ProperContains operator returns true if the first operand properly contains the second.

There are two overloads of this operator:
	List, T: The type of T must be the same as the element type of the list.
	Interval, T : The type of T must be the same as the point type of the interval.

For the List, T overload, this operator returns <span class="kw">true</span> if the given element is in the list, and it is not the only element in the list, using equality semantics, with the exception that <span class="kw">null</span> elements are considered equal. If the first argument is <span class="kw">null</span>, the result is <span class="kw">false</span>. If the second argument is <span class="kw">null</span>, the result is <span class="kw">true</span> if the list contains any <span class="kw">null</span> elements and at least one other element, and <span class="kw">false</span> otherwise.

For the Interval, T overload, this operator returns <span class="kw">true</span> if the given point is greater than the starting point of the interval, and less than the ending point of the interval, as determined by the <span class="id">Start</span> and <span class="id">End</span> operators.  If precision is specified and the point type is a <span class="id">Date</span>, <span class="id">DateTime</span>, or <span class="id">Time</span> type, comparisons used in the operation are performed at the specified precision. If the first argument is <span class="kw">null</span>, the result is <span class="kw">false</span>. If the second argument is <span class="kw">null</span>, the result is <span class="kw">null</span>.

{: #proper-in}
#### ProperIn

```
ProperIn : BinaryExpression
  ¦
  0..1 --> precision
```

The ProperIn operator tests for proper membership in an interval or list.

There are two overloads of this operator:
	T, List : The type of T must be the same as the element type of the list.
	T, Interval : The type of T must be the same as the point type of the interval.

For the T, List overload, this operator returns if the given element is in the given list, and it is not the only element in the list, using equality semantics, with the exception that null elements are considered equal. If the first argument is null, the result is true if the list contains any null elements and at least one other element, and false otherwise. If the second argument is null, the result is false.

For the T, Interval overload, this operator returns true if the given point is greater than the starting point, and less than the ending point of the interval, as determined by the Start and End operators. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision. If the first argument is null, the result is null. If the second argument is null the result is false.

{: #proper-includes}
#### ProperIncludes

```
ProperIncludes : BinaryExpression
  ¦
  0..1 --> precision
```

The ProperIncludes operator returns true if the first operand includes the second, and is strictly larger.

There are two overloads of this operator:
	List, List : The element type of both lists must be the same.
	Interval, Interval : The point type of both intervals must be the same.

For the List, List overload, this operator returns true if the first list is strictly larger, and the first list includes every element of the second list, using equality semantics, with the exception that null elements are considered equal.

For the Interval, Interval overload, this operator returns true if the first interval includes the second interval, and the intervals are not equal. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If either argument is null, the result is null.

{: #proper-included-in}
#### ProperIncludedIn

```
ProperIncludedIn : BinaryExpression
  ¦
  0..1 --> precision
```

The ProperIncludedIn operator returns true if the first operand is included in the second, and is strictly smaller.

There are two overloads of this operator:
	List, List : The element type of both lists must be the same.
	Interval, Interval : The point type of both intervals must be the same.

For the List, List overload, this operator returns true if the first list is strictly smaller, and every element of the first list is included in the second list, using equality semantics, with the exception that null elements are considered equal.

For the Interval, Interval overload, this operator returns true if the first interval is included in the second interval, and the intervals are not equal. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If either argument is null, the result is null.

#### Size

```
Size : UnaryExpression
```

The Size operator returns the size of an interval.

The result of this operator is equivalent to invoking: End(i) - Start(i) + point-size, where the point-size for the point type of the interval is determined by: Successor(Minimum_T) - Minimum_T.

Note that this operator is not defined for intervals of type Date, DateTime, and Time.

If the argument is null, the result is null.

#### Start

```
Start : UnaryExpression
```

The Start operator returns the starting point of an interval.

If the low boundary of the interval is open, this operator returns the Successor of the low value of the interval. Note that if the low value of the interval is null, the result is null.

If the low boundary of the interval is closed and the low value of the interval is not null, this operator returns the low value of the interval. Otherwise, the result is the minimum value of the point type of the interval.

If the argument is null, the result is null.

#### Starts

```
Starts : BinaryExpression
  ¦
  0..1 --> precision
```

The Starts operator returns true if the first interval starts the second. In other words, if the starting point of the first is equal to the starting point of the second interval and the ending point of the first interval is less than or equal to the ending point of the second interval.

This operator uses the semantics described in the Start and End operators to determine interval boundaries.

If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.

If either argument is null, the result is null.

#### Union

```
Union : NaryExpression
```

The Union operator returns the union of its arguments.

This operator has two overloads:
	List
	Interval

For the list overload, this operator returns a list with all unique elements from both arguments, using equality semantics, with the exception that null elements are considered equal.

For the interval overload, this operator returns the interval that starts at the earliest starting point in either argument, and ends at the latest starting point in either argument. If the arguments do not overlap or meet, this operator returns null.

If either argument is null, the operation is performed as though the argument was an empty list.

#### Width

```
Width : UnaryExpression
```

The Width operator returns the width of an interval. The result of this operator is equivalent to invoking: End(i) - Start(i).

Note that this operator is not defined for intervals of type Date, DateTime, and Time.

If the argument is null, the result is null.

### List Operators

ELM allows for the expression and manipulation of lists of values of any type. The most basic list operation is the _List_ class, which represents a simple list selector.

Basic list operations include testing for membership, indexing, and content. ELM also supports comparison of lists, including equality and inclusion determination (subset/superset). Supported operations on single lists include filtering, sorting, and computation. For multiple lists, ELM supports combining through union and intersection, as well as computing the difference.

The use of the scope attribute allows for more complex expressions such as correlated subqueries.

ELM also supports a flattening operator, _Flatten_ to construct a single list from a list of lists.

For more information on the semantics of these operators, refer to the [List Operators](09-b-cqlreference.html#list-operators-2) section in the [CQL Reference](09-b-cqlreference.html).

#### List

```
List : Expression
  ¦
  0..1 --> typeSpecifier : TypeSpecifier
  ¦
  0..* --> element : Expression
```

The List selector returns a value of type List, whose elements are the result of evaluating the arguments to the List selector, in order.

If a typeSpecifier element is provided, the list is of that type. Otherwise, the static type of the first argument determines the type of the resulting list, and each subsequent argument must be of that same type.

If any argument is null, the resulting list will have null for that element.

#### Contains

Refer to the [Contains section](#contains) in the Interval Operators.

#### Current

```
Current : Expression
  ¦
  0..1 --> scope
```

The Current expression returns the value of the object currently in scope. For example, within a ForEach expression, this returns the current element being considered in the iteration.

Scopes are introduced by the named scoping operators (Filter, ForEach, and Repeat), the implicit scoping operators (Aggregate and Sort), as well as introduced within Queries by the AliasedQuerySource, LetClause, AggregateClause, and SortClause elements.

It is an error to invoke the Current operator outside the context of a scoped operation.

#### Distinct

```
Distinct : UnaryExpression
```

The Distinct operator takes a list of elements and returns a list containing only the unique elements within the input. For example, given the list of integers { 1, 1, 1, 2, 2, 3, 4, 4 }, the result of Distinct would be { 1, 2, 3, 4 }.

The operator uses equality comparison semantics as defined in the Equal operator, with the exception that nulls are considered equal for the purposes of distinct determination. This means that multiple nulls in the input will result in a single null in the output.

If the source argument is null, the result is null.

#### Equal

Refer to the [Equal section](#equal) in the Comparison Operators.

#### Equivalent

Refer to the [Equivalent section](#equivalent) in the Comparison Operators.

#### Except

Refer to the [Except section](#except) in the Interval Operators.

#### Exists

```
Exists : UnaryExpression
```

The Exists operator returns true if the list contains any non-null elements.

If the argument is null, the result is false.

#### Filter

```
Filter : Expression
  ¦
  1..1 --> source : Expression
  ¦
  1..1 --> condition : Expression
  ¦
  0..1 --> scope
```

The Filter operator returns a list with only those elements in the source list for which the condition element evaluates to true.

If the source argument is null, the result is null.

#### First

```
First : OperatorExpression
  ¦
  1..1 --> source : Expression
  ¦
  0..1 --> orderBy
```

The First operator returns the first element in a list. If the order by attribute is specified, the list is sorted by that ordering prior to returning the first element.

If the argument is null, the result is null.

#### Flatten

```
Flatten : UnaryExpression
```

The Flatten operator flattens a list of lists into a single list.

If the argument is null, the result is null.

#### ForEach

```
ForEach : Expression
  ¦
  1..1 --> source : Expression
  ¦
  1..1 --> element : Expression
  ¦
  0..1 --> scope
```

The ForEach expression iterates over the list of elements in the source element, and returns a list with the same number of elements, where each element in the new list is the result of evaluating the element expression for each element in the source list.

If the source argument is null, the result is null.

If the element argument evaluates to null for some item in the source list, the resulting list will contain a null for that element.

#### In

Refer to the [In section](#in) in the Interval Operators.

#### Includes

Refer to the [Includes section](#includes) in the Interval Operators.

#### IncludedIn

Refer to the [IncludedIn section](#included-in) in the Interval Operators.

#### IndexOf

```
IndexOf : OperatorExpression
  ¦
  1..1 --> source : Expression
  ¦
  1..1 --> element : Expression
```

The IndexOf operator returns the 0-based index of the given element in the given source list.

The operator uses equality semantics as defined in the Equal operator to determine the index, with the exception that nulls are considered equal. The search is linear, and returns the index of the first element for which the equality comparison returns true.

If the list is empty, or no element is found, the result is -1.

If either argument is null, the result is null.

#### Intersect

Refer to the [Intersect section](#intersect) in the Interval Operators.

#### Iteration

```
Iteration : Expression
  ¦
  1..1 --> scope : String
```

The Iteration expression returns the current iteration number of a scoped operation. For example, within a ForEach expression, this returns the 0-based index of the current iteration.
			
Scopes are introduced by the named scoping operators (Filter, ForEach, and Repeat), the implicit scoping operators (Sort and Aggregate) as well as introduced within Queries by the AliasedQuerySource, LetClause, AggregateClause, and SortClause elements.

It is an error to invoke the Iteration operator outside of a scoped operation.

#### Total

```
Total : Expression
  ¦
  1..1 --> scope : String
```

The Total expression returns the current value of the total aggregation accumulator in an aggregate operation.
			
It is an error to invoke the Total operator outside of an aggregate operation (Aggregate or within the AggregateClause of a query).

#### Last

```
Last : OperatorExpression
  ¦
  1..1 --> source : Expression
  ¦
  0..1 --> orderBy
```

The Last operator returns the last element in a list. If the order by attribute is specified, the list is sorted by that ordering prior to returning the last element.

If the argument is null, the result is null.

#### Not Equal

Refer to the [Not Equal section](#not-equal) in the Comparison Operators.

#### ProperContains

Refer to the [ProperContains section](#proper-contains) in the Interval Operators.

#### ProperIn

Refer to the [ProperIn section](#proper-in) in the Interval Operators.

#### ProperIncludes

Refer to the [ProperIncludes section](#proper-includes) in the Interval Operators.

#### ProperIncludedIn

Refer to the [ProperIncludedIn section](#proper-included-in) in the Interval Operators.

#### Repeat

```
Repeat : Expression
  ¦
  1..1 --> source : Expression
  ¦
  1..1 --> element : Expression
  ¦
  0..1 --> scope
```

The Repeat expression performs successive ForEach until no new elements are returned.

The operator uses equality comparison semantics as defined in the Equal operator.

If the source argument is null, the result is null.

If the element argument evaluates to null for some item in the source list, the resulting list will contain a null for that element.

#### SingletonFrom

```
SingletonFrom : UnaryExpression
```

The SingletonFrom expression extracts a single element from the source list. If the source list is empty, the result is null. If the source list contains one element, that element is returned. If the list contains more than one element, a run-time error is thrown. If the source list is null, the result is null.

#### Slice

```
Slice : OperatorExpression
  ¦
  1..1 --> source : Expression
  ¦
  1..1 --> startIndex : Expression
  ¦
  1..1 --> endIndex : Expression
```

The Slice operator returns a portion of the elements in a list, beginning at the start index and ending just before the ending index.

If the source list is null, the result is null.

If the startIndex is null, the slice begins at the first element of the list.

If the endIndex is null, the slice continues to the last element of the list.

If the startIndex or endIndex is less than 0, or if the endIndex is less than the startIndex, the result is an empty list.

#### Sort

```
Sort : Expression
  ¦
  1..1 --> source : Expression
  ¦
  1..* --> by : SortByItem
```

The Sort operator returns a list with all the elements in source, sorted as described by the by element.

When the sort elements do not provide a unique ordering (i.e. there is a possibility of duplicate sort values in the result), the order of duplicates is unspecified.

If the argument is null, the result is null.

#### Times

```
Times : BinaryExpression
```

The Times operator performs the cartesian product of two lists of tuples. The return type of a Times operator is a tuple with all the components from the tuple types of both arguments. The result will contain a tuple for each possible combination of tuples from both arguments with the values for each component derived from the pairing of the source tuples.

If either argument is null, the result is null.

#### Union

Refer to the [Union section](#union) in the Interval Operators.

### Aggregate Operators

For computing aggregate quantities, ELM defines several aggregate operators. These operators perform computations on lists of values, either on the elements of the list directly, or on a specific property of each element in the list.

Unless noted in the documentation for each operator, aggregate operators deal with missing information by excluding elements which have no value before performing the aggregation. In addition, an aggregate operation performed over an empty list is defined to return null, except as noted in the documentation for each operator (e.g. Count).

In general, operations that cause arithmetic overflow or underflow, or otherwise cannot be performed (such as division by 0) will result in null, rather than a run-time error.

For more information on the semantics of these operators, refer to the [Aggregate Functions](09-b-cqlreference.html#aggregate-functions) section in the [CQL Reference](09-b-cqlreference.html).

#### AllTrue

```
AllTrue : AggregateExpression
```

The AllTrue operator returns true if all the non-null elements in source are true.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, true is returned.

If the source is null, the result is true.

#### AnyTrue

```
AnyTrue : AggregateExpression
```

The AnyTrue operator returns true if any non-null element in source is true.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, false is returned.

If the source is null, the result is false.

#### Avg

```
Avg : AggregateExpression
```

The Avg operator returns the average of the non-null elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### Count

```
Count : AggregateExpression
```

The Count operator returns the number of non-null elements in the source.

If a path is specified, the count returns the number of elements that have a value for the property specified by the path.

If the list is empty, the result is 0.

If the list is null, the result is 0.

#### GeometricMean

```
GeometricMean : AggregateExpression
```

The GeometricMean operator returns the geometric mean of the non-null elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### Product

```
Product : AggregateExpression
```

The Product operator returns the geometric product of non-null elements in the source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the list is null, the result is null.

#### Max

```
Max : AggregateExpression
```

The Max operator returns the maximum element in the source. Comparison semantics are defined by the comparison operators for the type of the values being aggregated.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### Median

```
Median : AggregateExpression
```

The Median operator returns the median of the elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### Min

```
Min : AggregateExpression
```

The Min operator returns the minimum element in the source. Comparison semantics are defined by the comparison operators for the type of the values being aggregated.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### Mode

```
Mode : AggregateExpression
```

The Mode operator returns the statistical mode of the elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### PopulationVariance

```
PopulationVariance : AggregateExpression
```

The PopulationVariance operator returns the statistical population variance of the elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### PopulationStdDev

```
PopulationStdDev : AggregateExpression
```

The PopulationStdDev operator returns the statistical standard deviation of the elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

#### Sum

```
Sum : AggregateExpression
```

The Sum operator returns the sum of non-null elements in the source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the list is null, the result is null.

#### StdDev

```
StdDev : AggregateExpression
```

The StdDev operator returns the statistical standard deviation of the elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the list is null, the result is null.

#### Variance

```
Variance : AggregateExpression
```

The Variance operator returns the statistical variance of the elements in source.

If a path is specified, elements with no value for the property specified by the path are ignored.

If the source contains no non-null elements, null is returned.

If the source is null, the result is null.

### Type Operators

For more information on the semantics of these operators, refer to the [Type Operators](09-b-cqlreference.html#type-operators-1) section in the [CQL Reference](09-b-cqlreference.html).

#### As

```
As : UnaryExpression
  ¦
  0..1 --> asTypeSpecifier : TypeSpecifier
  ¦
  0..1 --> asType
  ¦
  0..1 --> strict
```

The As operator allows the result of an expression to be cast as a given target type. This allows expressions to be written that are statically typed against the expected run-time type of the argument. If the argument is not of the specified type, and the strict attribute is false (the default), the result is null. If the argument is not of the specified type and the strict attribute is true, an exception is thrown.

#### CanConvert

```
CanConvert : UnaryExpression
  ¦
  0..1 --> toTypeSpecifier : TypeSpecifier
  ¦
  0..1 --> toType
```

The CanConvert operator returns true if the given value can be converted to a specific type, and false otherwise.

This operator returns true for conversion:

Between String and each of Boolean, Integer, Long, Decimal, Quantity, Ratio, Date, DateTime, and Time,

as well as:

From Integer to Long, Decimal, or Quantity <br/>
From Decimal to Quantity <br/>
Between Date and DateTime <br/>
From Code to Concept <br/>
Between Concept and List\<Code>

Conversion between String and Date/DateTime/Time is checked using the ISO-8601 standard format: **YYYY-MM-DDThh:mm:ss(+\|-)hh:mm**.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

#### CanConvertQuantity

```
CanConvertQuantity : BinaryExpression
```

The CanConvertQuantity operator returns true if the Quantity can be converted to an equivalent Quantity with the given Unit. Otherwise, the result is false.

Note that implementations are not required to support quantity conversion, and so may return false, even if the conversion is valid. Implementations that do support unit conversion shall do so according to the conversion specified by UCUM.

If either argument is null, the result is null.

#### Children

```
Children : OperatorExpression
  ¦
  1..1 --> source : Expression
```

For structured types, the Children operator returns a list of all the values of the elements of the type. List-valued elements are expanded and added to the result individually, rather than as a single list.

For list types, the result is the same as invoking Children on each element in the list and flattening the resulting lists into a single result.

If the source is null, the result is null.

#### Convert

```
Convert : UnaryExpression
  ¦
  0..1 --> toTypeSpecifier : TypeSpecifier
  ¦
  0..1 --> toType
```

The Convert operator converts a value to a specific type. The result of the operator is the value of the argument converted to the target type, if possible.

If no valid conversion exists from the actual value to the target type, the result is null.

This operator supports conversion:

Between String and each of Boolean, Integer, Long, Decimal, Quantity, Ratio, Date, DateTime, and Time

as well as:

From Integer to Long, Decimal, or Quantity <br/>
From Decimal to Quantity <br/>
Between Date and DateTime <br/>
From Code to Concept <br/>
Between Concept and List\<Code>

Conversion between String and Date/DateTime/Time is performed using the ISO-8601 standard format: **YYYY-MM-DDThh:mm:ss(+\|-)hh:mm**.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

#### ConvertQuantity

```
ConvertQuantity : BinaryExpression
```

The ConvertQuantity operator converts a Quantity to an equivalent Quantity with the given unit. If the unit of the input quantity can be converted to the target unit, the result is an equivalent Quantity with the target unit. Otherwise, the result is null.

Note that implementations are not required to support quantity conversion. Implementations that do support unit conversion shall do so according to the conversion specified by UCUM. Implementations that do not support unit conversion shall throw an error if an unsupported unit conversion is requested with this operation.

If either argument is null, the result is null.

#### ConvertsToBoolean

```
ConvertsToBoolean : UnaryExpression
```

The ConvertsToBoolean operator returns true if the value of its argument is or can be converted to a Boolean value.

The operator accepts 'true', 't', 'yes', 'y', and '1' as string representations of true, and 'false', 'f', 'no', 'n', and '0' as string representations of false, ignoring case.

If the input cannot be interpreted as a valid Boolean value, the result is false.

If the input is an Integer or Long, the result is true if the integer is 1 or 0.

If the input is a Decimal, the result is true if the decimal is 1.0 or 0.0.

If the argument is null the result is null.

#### ConvertsToDate

```
ConvertsToDate : UnaryExpression
```

The ConvertsToDate operator returns true if the value of its argument is or can be converted to a Date value.

For String values, The operator expects the string to be formatted using the ISO-8601 date representation:

**YYYY-MM-DD**

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

In addition, the string must be interpretable as a valid date value.

Note that the operator can take time formatted strings and will ignore the time portions.

If the input string is not formatted correctly, or does not represent a valid date value, the result is false.

As with date literals, date values may be specified to any precision.

If the argument is null, the result is null.

#### ConvertsToDateTime

```
ConvertsToDateTime : UnaryExpression
```

The ConvertsToDateTime operator returns true if the value of its argument is or can be converted to a DateTime value.

For String values, the operator expects the string to be formatted using the ISO-8601 datetime representation:

**YYYY-MM-DDThh:mm:ss.fff(Z\|((+\|-)hh:mm))**

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

In addition, the string must be interpretable as a valid DateTime value.

If the input string is not formatted correctly, or does not represent a valid DateTime value, the result is false.

As with Date and Time literals, DateTime values may be specified to any precision. If no timezone offset is supplied, the timezone offset of the evaluation request timestamp is assumed.

If the argument is null, the result is null.

#### ConvertsToDecimal

```
ConvertsToDecimal : UnaryExpression
```

The ConvertsToDecimal operator returns true if the value of its argument is or can be converted to a Decimal value. The operator accepts strings using the following format:

**(+\|-)?\#0(.0#)?**

Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit, followed optionally by a decimal point, at least one digit, and any number of additional digits (including none).

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that for this operator to return true, the input value must be limited in precision and scale to the maximum precision and scale representable for Decimal values within CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Decimal value, the result is false.

If the input is a Boolean, the result is true.

If the argument is null, the result is null.

#### ConvertsToLong

```
ConvertsToLong : UnaryExpression
```

The ConvertsToLong operator returns true if the value of its argument is or can be converted to a Long value. The operator accepts strings using the following format:

**(+\|-)?#0**

Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that for this operator to return true, the input must be a valid value in the range representable for Long values in CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Long value, the result is false.

If the input is a Boolean, the result is true.

If the argument is null, the result is null.

#### ConvertsToInteger

```
ConvertsToInteger : UnaryExpression
```

The ConvertsToInteger operator returns true if the value of its argument is or can be converted to an Integer value. The operator accepts strings using the following format:

**(+\|-)?#0**

Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that for this operator to return true, the input must be a valid value in the range representable for Integer values in CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Integer value, the result is false.

If the input is a Boolean, the result is true

If the argument is null, the result is null.

#### ConvertsToQuantity

```
ConvertsToQuantity : UnaryExpression
```

The ConvertsToQuantity operator returns true if the value of its argument is or can be converted to a Quantity value. The operator may be used with Integer, Long, Decimal, Ratio, or String values.

For String values, the operator accepts strings using the following format:

**(+\|-)?\#0(.0#)?('\<unit>')?**

Meaning an optional polarity indicator, followed by any number of digits (including none) followed by at least one digit, optionally followed by a decimal point, at least one digit, and any number of additional digits, all optionally followed by a unit designator as a string literal specifying a valid UCUM unit of measure or calendar duration keyword, singular or plural. Spaces are allowed between the quantity value and the unit designator.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that the decimal value of the quantity returned by this operator must be a valid value in the range representable for Decimal values in CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Quantity value, the result is false.

For Integer, Long, Decimal, and Ratio values, the operator simply returns true.

If the argument is null, the result is null.

#### ConvertsToRatio

```
ConvertsToRatio : UnaryExpression
```

The ConvertsToRatio operator returns true if the value of its argument is or can be converted to a Ratio value. The operator accepts strings using the following format:

**\<quantity>:\<quantity>**

Meaning a quantity, followed by a colon (:), followed by another quantity. The operator accepts quantity strings using the same format as the ToQuantity operator.

If the input string is not formatted correctly, or cannot be interpreted as a valid Ratio value, the result is false.

If the argument is null, the result is null.

#### ConvertsToString

```
ConvertsToString : UnaryExpression
```

The ConvertsToString operator returns true if the value of its argument is or can be converted to a String value.

The operator returns true if the argument is any of the following types:

Boolean <br/>
Integer <br/>
Long <br/>
Decimal <br/>
DateTime <br/>
Date <br/>
Time <br/>
Quantity <br/>
Ratio <br/>
String

If the argument is null, the result is null.

#### ConvertsToTime

```
ConvertsToTime : UnaryExpression
```

The ConvertsToTime operator returns true if the value of its argument is or can be converted to a Time value.

For String values, the operator expects the string to be formatted using ISO-8601 time representation:

**hh:mm:ss.fff**

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

In addition, the string must be interpretable as a valid time-of-day value.

If the input string is not formatted correctly, or does not represent a valid time-of-day value, the result is false.

As with time-of-day literals, time-of-day values may be specified to any precision. If no timezone offset is supplied, the timezone offset of the evaluation request timestamp is assumed.

If the argument is null, the result is null.

#### Descendants

```
Descendants : OperatorExpression
  ¦
  1..1 --> source : Expression
```

For structured types, the Descendants operator returns a list of all the values of the elements of the type, recursively. List-valued elements are expanded and added to the result individually, rather than as a single list.

For list types, the result is the same as invoking Descendants on each element in the list and flattening the resulting lists into a single result.

If the source is null, the result is null.

#### Is

```
Is : UnaryExpression
  ¦
  0..1 --> isTypeSpecifier : TypeSpecifier
  ¦
  0..1 --> isType
```

The Is operator allows the type of a result to be tested. The language must support the ability to test against any type. If the run-time type of the argument is of the type being tested, the result of the operator is true; otherwise, the result is false.

#### ToBoolean

```
ToBoolean : UnaryExpression
```

The ToBoolean operator converts the value of its argument to a Boolean value.

The operator accepts 'true', 't', 'yes', 'y', and '1' as string representations of true, and 'false', 'f', 'no', 'n', and '0' as string representations of false, ignoring case.

If the input is an Integer or Long, the result is true if the integer is 1, false if the integer is 0.

If the input is a Decimal, the result is true if the decimal is 1.0, false if the decimal is 0.0.

If the input cannot be interpreted as a valid Boolean value, the result is null.

If the argument is null the result is null.

#### ToChars

```
ToChars : UnaryExpression
```

The ToChars operator takes a string and returns a list with one string for each character in the input, in the order in which they appear in the string.

If the argument is null, the result is null.

#### ToConcept

```
ToConcept : UnaryExpression
```

The ToConcept operator converts a value of type Code to a Concept value with the given Code as its primary and only Code. If the Code has a display value, the resulting Concept will have the same display value.

If the input is a list of Codes, the resulting Concept will have all the input Codes, and will not have a display value.

If the argument is null, the result is null.

#### ToDate

```
ToDate : UnaryExpression
```

The ToDate operator converts the value of its argument to a Date value.

For String values, the operator expects the string to be formatted using the ISO-8601 date representation:

**YYYY-MM-DD**

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

In addition, the string must be interpretable as a valid date value.

Note that the operator can take datetime formatted strings and will ignore the time portions.

If the input string is not formatted correctly, or does not represent a valid date value, the result is null.

As with date literals, date values may be specified to any precision.

For DateTime values, the result is equivalent to extracting the Date component of the DateTime value.

If the argument is null, the result is null.

#### ToDateTime

```
ToDateTime : UnaryExpression
```

The ToDateTime operator converts the value of its argument to a DateTime value.

For String values, the operator expects the string to be formatted using the ISO-8601 datetime representation:

**YYYY-MM-DDThh:mm:ss.fff(Z\|((+\|-)hh:mm))**

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

In addition, the string must be interpretable as a valid DateTime value.

If the input string is not formatted correctly, or does not represent a valid DateTime value, the result is null.

As with Date and Time literals, DateTime values may be specified to any precision. If no timezone offset is supplied, the timezone offset of the evaluation request timestamp is assumed.

For Date values, the result is a DateTime with the time components unspecified, except the timezone offset, which is set to the timezone offset of the evaluation request timestamp.

If the argument is null, the result is null.

#### ToDecimal

```
ToDecimal : UnaryExpression
```

The <span class="id">ToDecimal</span> operator converts the value of its argument to a <span class="id">Decimal</span> value. The operator accepts strings using the following format:

**(+\|-)?\#0(.0#)?**

Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit, followed optionally by a decimal point, at least one digit, and any number of additional digits (including none).

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that the <span class="id">Decimal</span> value returned by this operator will be limited in precision and scale to the maximum precision and scale representable by the implementation (at least 28 digits of precision, and 8 digits of scale).

If the input string is not formatted correctly, or cannot be interpreted as a valid <span class="id">Decimal</span> value, the result is <span class="kw">null</span>.

If the input is Boolean, true will result in 1.0, false will result in 0.0.

If the argument is <span class="kw">null</span>, the result is <span class="kw">null</span>.

#### ToInteger

```
ToInteger : UnaryExpression
```

The ToInteger operator converts the value of its argument to an Integer value. The operator accepts strings using the following format:

**(+\|-)?#0**

Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that the integer value returned by this operator must be a valid value in the range representable for Integer values in CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Integer value, the result is null.

If the input is Boolean, true will result in 1, false will result in 0.

If the argument is null, the result is null.

#### ToList

```
ToList : UnaryExpression
```

The ToList operator returns its argument as a List value. The operator accepts a singleton value of any type and returns a list with the value as the single element.

If the argument is null, the operator returns an empty list.

The operator is effectively shorthand for "if operand is null then { } else { operand }".

The operator is used to implement list promotion efficiently.

#### ToLong

```
ToLong : UnaryExpression
```

The ToLong operator converts the value of its argument to a Long value. The operator accepts strings using the following format:

**(+\|-)?#0**

Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

Note that the long value returned by this operator must be a valid value in the range representable for Long values in CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Long value, the result is null.

If the input is Boolean, true will result in 1, false will result in 0.

If the argument is null, the result is null.

#### ToQuantity

```
ToQuantity : UnaryExpression
```

The ToQuantity operator converts the value of its argument to a Quantity value. The operator may be used with Integer, Long, Decimal, Ratio, or String values. The operation does not perform any unit conversion, that capability is supported by the [ConvertQuantity](#convertquantity) operator.

For String values, the operator accepts strings using the following format:

**(+\|-)?\#0(.0#)?('\<unit>')?**

Meaning an optional polarity indicator, followed by any number of digits (including none) followed by at least one digit, optionally followed by a decimal point, at least one digit, and any number of additional digits, all optionally followed by a unit designator as a string literal specifying a valid UCUM unit of measure or calendar duration keyword, singular or plural. Spaces are allowed between the quantity value and the unit designator.

Note that the decimal value of the quantity returned by this operator must be a valid value in the range representable for Decimal values in CQL.

If the input string is not formatted correctly, or cannot be interpreted as a valid Quantity value, the result is null.

For Integer, Long, and Decimal values, the result is a Quantity with the value of the integer or decimal input, and the default unit ('1').

For Ratio values, the operation is equivalent to the result of dividing the numerator of the ratio by the denominator.

If the argument is null, the result is null.

#### ToRatio

```
ToRatio : UnaryExpression
```

The ToRatio operator converts the value of its argument to a Ratio value. The operator accepts strings using the following format:

**\<quantity>:\<quantity>**

Meaning a quantity, followed by a colon (:), followed by another quantity. The operator accepts quantity strings using the same format as the ToQuantity operator.

If the input string is not formatted correctly, or cannot be interpreted as a valid Ratio value, the result is null.

If the argument is null, the result is null.

#### ToString

```
ToString : UnaryExpression
```

The ToString operator converts the value of its argument to a String value. The operator uses the following string representations for each type

| Datatype | String Representation
|-|-
|Boolean |true\|false
|Integer |**(-)?#0**
|Long |**(-)?#0**
|Decimal |**(-)?\#0.0#**
|Quantity |**(-)?\#0.0# '\<unit>'**
|Date |**YYYY-MM-DD**
|DateTime |**YYYY-MM-DDThh:mm:ss.fff(+\|-)hh:mm**
|Time	|**hh:mm:ss.fff**
|Ratio |**\<quantity>:\<quantity>**
{: .grid .table .table-striped}

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

If the argument is null, the result is null.

#### ToTime

```
ToTime : UnaryExpression
```

The ToTime operator converts the value of its argument to a Time value.

For String values, the operator expects the string to be formatted using ISO-8601 time representation:

**hh:mm:ss.fff**

See [Formatting Strings](09-b-cqlreference.html#formatting-strings) for a description of the formatting strings used in this specification.

In addition, the string must be interpretable as a valid time-of-day value.

If the input string is not formatted correctly, or does not represent a valid time-of-day value, the result is null.

As with time-of-day literals, time-of-day values may be specified to any precision.

For DateTime values, the result is the same as extracting the Time component from the DateTime value.

If the argument is null, the result is null.

### Clinical Operators

For working with clinical data, ELM defines operators for terminology sets, quantities, and calculating age.

#### AnyInCodeSystem

```
AnyInCodeSystem : OperatorExpression
  ¦
  1..1 --> codes : Expression
  ¦
  0..1 --> codesystem : CodeSystemRef
  |
  0..1 --> codesystemExpression : Expression
```

The AnyInCodeSystem operator returns true if any of the given codes are in the given code system.

The first argument is expected to be a list of String, Code, or Concept.

The second argument is a CodeSystemRef. This allows for static analysis of code system references within an artifact and preserves backwards compatibility with the 1.4 ELM.

The third argument is expected to be of type CodeSystem, allowing references to code systems to be preserved as references.

#### AnyInValueSet

```
AnyInValueSet : OperatorExpression
  ¦
  1..1 --> codes : Expression
  ¦
  0..1 --> valueset : ValueSetRef
  |
  0..1 --> valuesetExpression : Expression
```

The AnyInValueSet operator returns true if any of the given codes are in the given value set.

The first argument is expected to be a list of String, Code, or Concept.

The second argument is statically a ValueSetRef. This allows for both static analysis of the value set references within an artifact, as well as the implementation of valueset membership by the target environment as a service call to a terminology server, if desired.

The third argument is expected to be of type ValueSet, allowing references to value sets to be preserved as references.

#### CalculateAge

```
CalculateAge : UnaryExpression
  ¦
  0..1 --> precision
```

Calculates the age in the specified precision of a person born on the given date.

The CalculateAge operator is defined for Date and DateTime.

For the Date overload, the calculation is performed using Today(), the precision must be one of year, month, week, or day, and the result is the number of whole calendar periods that have elapsed between the given date and today.

For the DateTime overload, the calculation is performed using Now(), and the result is the number of whole calendar periods that have elapsed between the given datetime and now.

#### CalculateAgeAt

```
CalculateAgeAt : BinaryExpression
  ¦
  0..1 --> precision
```

Calculates the age in the specified precision of a person born on a given date, as of another given date.

The CalculateAgeAt operator has two signatures:
  (Date, Date)
  (DateTime, DateTime)

For the Date overload, precision must be one of year, month, week, or day, and the result is the number of whole calendar periods that have elapsed between the first date and the second date.

For the DateTime overload, the result is the number of whole calendar periods that have elapsed between the first datetime and the second datetime.

#### Equal

Refer to the [Equal section](#equal) in the Comparison Operators.

#### Equivalent

Refer to the [Equivalent section](#equivalent) in the Comparison Operators.

#### InCodeSystem

```
InCodeSystem : OperatorExpression
  ¦
  1..1 --> code : Expression
  ¦
  0..1 --> codesystem : CodeSystemRef
  |
  0..1 --> codesystemExpression : Expression
```

The InCodeSystem operator returns true if the given code is in the given code system.

The first argument is expected to be a String, Code, or Concept.

The second argument is statically a CodeSystemRef. This This allows for both static analysis of the code system references within an artifact, as well as the implementation of code system membership by the target environment as a service call to a terminology server, if desired.

The third argument is expected to be a CodeSystem, allowing references to code systems to be preserved as references.

#### InValueSet

```
InValueSet : OperatorExpression
  ¦
  1..1 --> code : Expression
  ¦
  0..1 --> valueset : ValueSetRef
  |
  0..1 --> valuesetExpression : Expression
```

The InValueSet operator returns true if the given code is in the given value set.

The first argument is expected to be a String, Code, or Concept.

The second argument is statically a ValueSetRef. This allows for both static analysis of the value set references within an artifact, as well as the implementation of valueset membership by the target environment as a service call to a terminology server, if desired.

The third argument is expected to be a ValueSet, allowing references to value sets to be preserved as references.

#### ExpandValueSet

```
ExpandValueSet : UnaryExpression
```

The ExpandValueSet operator returns the current expansion for the given value set.

The operation expects a single argument of type ValueSet. This may be a static reference to a value set (i.e. a ValueSetRef), or a ValueSet value to support dynamic value set usage. The operation is used as the implicit conversion from a ValueSet reference to a list of codes.

If the argument is null, the result is null.

#### Not Equal

Refer to the [Not Equal section](#not-equal) in the Comparison Operators.

#### SubsumedBy

```
SubsumedBy : BinaryExpression
```

The SubsumedBy operator returns true if the given codes are equivalent, or if the first code is subsumed by the second code (i.e. the first code is a descendant of the second code in a subsumption hierarchy), and false otherwise.

For the Concept overload, this operator returns true if any code in the first concept is subsumed by any code in the second.

If either or both arguments are null, the result is null.

#### Subsumes

```
Subsumes : BinaryExpression
```

The Subsumes operator returns true if the given codes are equivalent, or if the first code subsumes the second (i.e. the first code is an ancestor of the second in a subsumption hierarchy), and false otherwise.

For the Concept overload, this operator returns true if any code in the first concept subsumes any code in the second.

If either or both arguments are null, the result is null.

### Errors and Messages

ELM defines a utility operation that is useful for generating run-time messages, warnings, traces, and errors. The operator is a single, general-purpose function intended to provide a single implementation point for messaging and run-time error functionality when those messages are generated from ELM logic.

#### Message

```
Message : OperatorExpression
  ¦
  1..1 --> source : Expression
  ¦
  0..1 --> condition : Expression
  ¦
  0..1 --> code : Expression
  ¦
  0..1 --> severity : Expression
  ¦
  0..1 --> message : Expression
```

The Message operator is used to support errors, warnings, messages, and tracing in an ELM evaluation environment.

The operator is defined to return the input source.

If the severity is Error, the operator is expected to raise a run-time error and return the message to the calling environment. This is the only severity that stops processing. All other severities continue evaluation of the expression.

If the severity is Trace, the operator is expected to make the message available to a tracing mechanism such as a debug log in the calling environment.

If the severity is Warning, the operator is expected to provide the message as a warning to the calling environment.

If the severity is Message, the operator is expected to provide the message as information to the calling environment.


---

