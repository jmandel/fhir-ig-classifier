File: repos/HL7_SLASH_emedicinal-product-info/sushi-config.yaml

# ╭──────────────────────────────ImplementationGuide-gh.json───────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.emedicinal-product-info
canonical: http://hl7.org/fhir/uv/emedicinal-product-info 
name: EpiIG
title: Electronic Medicinal Product Information (ePI) FHIR Implementation Guide
description: FHIR Implementation Guide representing how to create Electronic Medicinal Product Information.
status: active
version: 1.0.0
fhirVersion: 5.0.0
copyrightYear: 2022+
releaseLabel: trial-use
license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World" # https://www.hl7.org/fhir/valueset-jurisdiction.html
publisher:
  name: HL7 International - Biomedical Research & Regulation Work Group
  url: http://hl7.org/Special/committees/rcrim

pages:
  index.md:
      title: Home
  use-case.md:
      title: Use Case
  steps-to-create-epi1.md:
      title: Steps to create ePI Type 1
  steps-to-create-epi2.md:
      title: Steps to create ePI Type 2
  steps-to-create-epi3.md:
      title: Steps to create ePI Type 3
  best-practice.md:
      title: Best Practice
  downloads.md:
      title: Downloads
  credits.md:
      title: Credits

menu:
  Home: index.html
  Use Case: use-case.html
  ePI Creation: 
    ePI Type 1: steps-to-create-epi1.html
    ePI Type 2: steps-to-create-epi2.html
    ePI Type 3: steps-to-create-epi3.html
  Best Practice: best-practice.html
  Artifacts: artifacts.html
  Downloads: downloads.html
  Credits: credits.html

parameters:
  jira-code: uv-emedicinal-product-info

#parameters:
  #show-inherited-invariants: false

  #autoload-resources: true
  produce-jekyll-data: true

#  special-url: 
#    - https://spor.ema.europa.eu/rmswi
#    - https://spor.ema.europa.eu/v1/lists/200000000014
#    - https://spor.ema.europa.eu/v1/lists/100000155531
#    - https://spor.ema.europa.eu/v1/lists/100000072050
#    - https://spor.ema.europa.eu/v1/lists/100000072050
#    - https://spor.ema.europa.eu/v1/lists/200000003199
#    - https://spor.ema.europa.eu/v1/lists/220000000000
#    - https://spor.ema.europa.eu/v1/lists/220000000031
#    - https://spor.ema.europa.eu/v1/lists/100000073346
#    - https://spor.ema.europa.eu/v1/lists/100000155526
#    - https://spor.ema.europa.eu/v1/lists/100000073345
#    - https://spor.ema.europa.eu/v1/lists/100000072055
#    - https://spor.ema.europa.eu/v1/lists/200000029659

instanceOptions:
  manualSliceOrdering: true


---

// File: input/pagecontent/artifacts.md




---

// File: input/pagecontent/best-practice.md

### Display names 
All display names should be language specific and should match the language of the document. E.g., French display name for French documents and English display names for English documents. 

### Images  
Images are converted into Base64 encoding and incorporated into the Binary resource. 

Images are rendered by the style sheet as provided, with no resizing or adjustments to resolution made by the style sheet. Only include images that are clear and easy to read. 

Colours should meet the WCAG AA accessibility level for contrast. 

To facilitate accessibility, images should include a meaningful description in the text element to allow screen reader software to describe the image to visually impaired audiences. It makes it possible for people using assistive technologies to access the information conveyed by an image. It also helps search engines better understand the purpose of the image. 

Recommendations for image descriptions: 
- describe the image as if describing it to someone over the phone.
- use as few words as possible.
- limit the text to around 140 characters (including spaces).
- use the text that is embedded in the image only if it provides enough context; otherwise, write different text that includes more information.
- don't use "image of..." or "graphic of..." to describe the image; screen readers do this already.  

### Section headings 
All ePI section and sub-section headings are managed as controlled vocabularies. They shall have a code and display name. 

NOTE:  
- Section and sub-section headings are region specific. Refer to local health authority guidance for ePI template and section heading requirements. 

### Accessibility 
Web Content Accessibility Guidelines (WCAG) is an international standard developed by the World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI). WCAG covers web sites, applications, and other digital content.

It explains how to make web content more accessible to people with disabilities. Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. Although these guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, and combinations of disability. These guidelines also make Web content more usable by older individuals with changing abilities due to aging and often improve usability for users in general. 

There are three levels of conformance: 
- Level A is the minimum level.
- Level AA includes all Level A and AA requirements. Many organizations strive to meet Level AA.
- Level AAA includes all Level A, AA, and AAA requirements.

FHIR ePIs are encouraged to fulfill the success criteria for the WCAG 2.1, Level AA standard. 

### Semi-structured Text 
As per the FHIR specification, narrative text in FHIR is encoded with xhtml. The narrative SHALL contain only the basic html formatting elements and attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes. 

For convenience, this section outlines HTML elements commonly used by ePIs. However, refer to the HTML v4.0 standard for details on compliant formatting. 

NOTE:  
- Rendering systems can ignore or override any of the ePI’s internal or external styles. 
- The XHTML content SHALL NOT contain a head, a bodyelement, external stylesheet references, deprecated elements, scripts, forms, base/link/xlink, frames, iframes, objects or event related attributes (e.g. onClick).   This is to ensure that the content of the narrative is contained within the resource and that there is no active content. Such content would introduce security issues. 

#### Additional Monitoring Indicators
The black triangle is used to denote a medicine subject to additional monitoring. The black down pointing triangle should be represented using the decimal HTML entity `&#9660;` which will be rendered as &#9660;.  

#### Paragraphs 
The P element is used to define paragraphs. 

The BR element is used to define line breaks.  

NOTE:  
- All text is within a P element with the exception of tables and lists. 
- Authors are advised to use style sheets to control text flow. Particularly around images and other objects. 

#### Bold, Italics, Underline 
The B element is used to define bold text. 

The I element is used to define italicized text. 

The U element is used to define underlined text.  

#### Lists 
The UL element is used to create an unordered list. 

The OL element is sued to create an ordered list 

#### Symbols and special characters 
For XML, the following characters must be escaped to prevent validation errors. 

Special characters that need to be escaped in XML:

| Special Characters | Escape String |
|--|--|
| " | &quot; |
| ' | &apos; |
| < | &lt; |
| > | &gt; |
| & | &amp; |
 
#### Superscript and subscript 
Enclose text the sup element for superscript and enclose text within the sub element for subscript. 

#### Table formatting 
The TABLE element is used to create a table.  

The THEAD element is used to designate an entire row or rows as the table header. 

The TFOOT element is used to define the table footer. 

The TR element is used to define table rows. 

The TH element is used to define header cells. 

The TD element is used to define non-header cells. 

The COLSPAN elements are used to merge columns. 

The ROWSPAN elements are used to merge rows. 
The @frame attribute specifies which of the table’s outside borders are visible:  
- void: No sides. This is the default value.
- above: The top side only.
- below: The bottom side only.
- hsides: The top and bottom sides only.
- vsides: The right and left sides only.
- lhs: The left-hand side only.
- rhs: The right-hand side only.
- box: All four sides.
- border: All four sides.

The @rules attribute specifies which of the table’s internal borders are visible:  
- none: No rules. This is the default value.
- groups: Rules will appear between row groups (see THEAD, TFOOT, and TBODY) and column groups (see COLGROUP and COL) only.
- rows: Rules will appear between rows only.
- cols: Rules will appear between columns only.
- all: Rules will appear between all rows and columns.

The table/@ID attribute is used to give the table a unique identifier. For example, <tbody ID="t1">. Use the linkHtml/@href attribute to create cross-reference links to this table. 

NOTE: 
- Authors are encouraged to create a table header [update this text to say table needs table header so screen reader knows how to read the table properly]
- Best practice recommendation is not to use tables for formatting
- Authors are encouraged to use the CAPTION element to provide a short description of the table. A longer description may also be provided via the SUMMARY attribute for people using speech or Braille-based applications.
- Authors should use style sheets to control content layout rather than tables.
- Authors should use style sheets to control the following: borders; width; colours and shading; emphasis and alignment of table header text; emphasis and alignment of table titles.  

### Hypertext links and cross-referencing 
To create hypertext links from text to text within the ePI’s Composition resource: 

Add an id to a block of text or table: 
```
<div id="a1"> 
<p>sample text</p> 
</div> 
```  
And then add a link to the sample text: 
```
<p><a href="#a1">refer to sample text</a></p> 
```  

To create hypertext links from text to content outside of the ePI document use the following format: 
```
<A href="http://www.w3.org/">W3C Web site</A>
```  

### Stylesheets 
The ePI’s XHTML SHALL not reference any external stylesheets. This is to ensure there is no active content that could introduce security issues. 


---

// File: input/pagecontent/credits.md

### Credits 
This Implementation Guide was developed under the auspices of the HL7 Vulcan Accelerator's Electronic Product Information project team and the Innovative Medicines Initiative's (IMI) Gravitate-Health project. Contributing individuals and organisations are as follows  (in no particular order):  

Current ePI project Co-Chairs:  

* **Craig Anderson** - Pfizer
* **Catherine Chronaki** - HL7 Europe  


Project Team Members:  

* **Jens Kristian Villadsen** - Trifork
* **Giorgio Cangioli** - HL7 Europe
* **Amy Cramer** - J&J
* **Evinn Drusys** - AEMPS
* **Adam Kover** - Felleskatalogen
* **Bente Jansen** - Felleskatalogen
* **Arif Govani** - DataPharm
* **Philippe Michiels** - DataPharm
* **Michael Loewe** - Rote Liste
* **Carina Bachman** - Rote Liste
* **Josephine Bergman** - Rote Liste
* **Petter Hurlen** - Akershus University Hospital
* **Martin Ingvar** - Karolinska Institute
* **Adam Stiling** - Roche
* **Niklas Jänich** - Boehringer Ingelheim
* **Joseph Mundi** - Pfizer
* **Beverly Buckta** - Pfizer

Vulcan Program Management  

* **Hugh Glover** - Bluewave Informatics/HL7 BR&R/Vulcan
* **Michael Van Campen** - Vulcan
* **Shani Sampson** - Vulcan
* **Bret Heale** - Vulcan
* **Jean Duteau** - Vulcan  

With contributions from other members who have from time to time, or quietly, participated in meetings, attended conference calls, and supported the core team during the development process.  

If you are interested in participating in the Vulcan ePI project, further information can be found on HL7 Vulcan's Confluence pages [here](https://confluence.hl7.org/pages/viewpage.action?pageId=79515543).  

### Gravitate Health 
The Gravitate Health project is a public – private partnership with 39 members from Europe and the US, co-led by University of Oslo (coordinator) and Pfizer (industry lead), funded by the Innovative Medicines Initiative (IMI) – a joint undertaking of the European Commission, the European Federation of Pharmaceutical Industries and Associations (EFPIA), IMI2 Associated Partners. 

### HL7 Vulcan Accelerator 
HL7 FHIR® accelerators are a successful catalyst for standards development and adoption. 

The vision for an Accelerator dedicated to connecting clinical research and healthcare was solidified in September 2019 by a group of invested representatives from government agencies, academia, technology companies, standards development organizations, patients, and industry consortiums.  The Vulcan Accelerator serves the needs of the clinical and translational research communities through the implementation of HL7 FHIR standardized data exchange. 

Vulcan’s goal is to create an ecosystem where research stakeholders collaborate on common use cases with the purpose of simplifying the research communities exchange of data using common standards with health records. Vulcan consists of organizations who represent the entire research stakeholder community including vendors, sponsors, CROs, consulting companies, sites, patient organizations, government agencies and growing. 

### HL7 Biomedical Research and Regulation (BR&R) 
BR&R creates and promotes standards to facilitate biomedical research and any subsequent regulatory evaluation of the safety, efficacy and quality of medical products that may arise from research. 

The BR&R workgroup areas of interest encompass clinical and translational research, both regulated and non-regulated, and the subsequent regulatory submissions and information exchanges to bring new products to market and to ensure safe use throughout the product lifecycle.  

This Work Group facilitates the development of common standards and the maintenance and enhancement of the research-focused domain analysis model for clinical research information management across a variety of organizations, including national and international government agencies and regulatory bodies, private researchers and research organizations, sponsored research, CROs and other interested entities. 


---

// File: input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

**Cross Version Analysis**

{% include cross-version-analysis.xhtml %}

**Dependency Table**

{% include dependency-table.xhtml %}

**Globals Table**

{% include globals-table.xhtml %}

**IP Statements**

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/index.md

### Purpose
To provide guidance on the technical and business conformance rules needed to create and exchange electronic Product Information (ePI) using HL7 FHIR and standard terminologies; and, as well as to create a common global approach for structuring medicinal product information and medicinal product labelling that is based on HL7 International standards. 

### Goals
The immediate goal of this specification is to expose ePI consumers and the vendor community to a set of profiles that identify the data elements, code systems and value sets commonly used in ePIs regardless of the jurisdiction. 

The strategic goal is to offer a better route for patients to access trustworthy, up-to-date medicinal product information that better meets their individual needs. 

### Objectives
Define a common and interoperable standard for exchanging medicinal product information across international healthcare jurisdictions. 

### Scope
#### In Scope
* ePI (information for healthcare practitioner, information for the patient, package label). 
Human pharmaceutical, radiopharmaceutical and biologic medicinal products (prescription and physician-administered). 
* Over the counter (non-prescription) drugs 
* Investigational and authorized medicinal products 
* Medical devices co-packed with a biopharmaceutical product (e.g., pre-filled syringe). 
* HL7 FHIR resources: 
  * List 
  * Bundle 
  * Composition 
  * Organization 
  * Regulated Authorization 
  * Medicinal Product Definition 
  * Administrable Product Definition 
  * Manufactured Item Definition 
  * Ingredient 
  * Substance Definition 
  * Packaged Product Definition 
  * Clinical Use Definition 
  * Binary 

#### Out of Scope
Self-care products, natural health products, medical devices, food and veterinary drugs. 

### ePI Background
A medicine’s product information is a pivotal source of regulated and scientifically validated information that assists healthcare professionals in prescribing and dispensing the medicine and informs consumers about its safe and effective use. 

ePI is presented in three forms:  
1. Information for healthcare professionals
1. Information for patients
1. Information on the package label  

ePI goes by different names depending on the region of the world. For example,
* USA - Prescription Drug Label or Package Insert (USPI)
* Europe - Summary of Product Characteristics (SmPC) or Package Leaflet
* Japan - Package Insert (JPI)  

Since these documents are often represented as a PDF, they are unstructured electronic paper. As a result, they are difficult to search, and the content does not meet patient needs (e.g., larger fonts, accessibility support, multimedia, multiple languages). 

It is known that current procedures based on content represented as a PDF are not adequate to support electronic initiatives. To support new programs, the international community is adopting a new technology for exchanging medicinal product information between computer systems based on HL7 FHIR.  

HL7 FHIR is a next generation standards framework created by HL7. HL7 FHIR combines the best features of HL7's previous product lines while leveraging the latest web standards and applying a tight focus on implementation. 

Adoption of HL7 FHIR by regulators and industry is anticipated to stimulate the delivery of healthcare applications from innovative 3rd parties. A common standard for ePI exchange will allow the creation of aggregated cross-industry content which is a foundational element for creation of more personalized ePI directing patients to the most relevant content and facilitating integration with other datasets such as Electronic Health Records (EHR) and data from wearable devices and diagnostics which will ultimately lead to a step-change in patient centric solutions. 

### How to use this guide
The Base ePI Implementation Guide is a common baseline from which other HL7 FHIR ePI implementation guides can be derived. It is not expected to be implemented as is. It is meant to be a common starting point to build region specific profiles that support local requirements and local use cases. 

For example, the content of this implementation guide can be used to develop HL7 FHIR ePI profiles for the USA, European Union, and Japan that are interoperable and can be supported by the same vendor marketplace. 

Establishing a consistent set of rules across jurisdictions promotes interoperability; allows flexibility for standard evolution; and creates a uniform landscape for vendors to create solutions and services. 

#### Base ePI Profile 
The Base ePI Profile defines the minimum set of rules to create a compliant HL7 FHIR ePI. National ePI profiles are expected to comply with the Base ePI Profile. 

#### National ePI Profiles 
National profiles define the minimum mandatory elements, extensions and terminology requirements to create a compliant HL7 FHIR ePI for a given jurisdiction.  

Conformance to a national ePI profile is tied to the regulatory mandates of the health authority for that jurisdiction.  


---

// File: input/pagecontent/steps-to-create-epi1.md

### How to build an ePI document
The following is an example of how to build a Summary of Product Characteristics (SmPC) as a Type 1, Type 2, and Type 3 ePI document. This example is meant as a demonstration to encourage a harmonized approach. Refer to national or regional health authority guidance for official rules about how to build an ePI document.  

<img src="Type1ePI.drawio.png" usemap="#image-map" style="float:none; margin: 0px 0px 0px 0px;" width="350px">  

### Steps to create Type 1 ePI Dcoument  

#### Create Binary resource 
Convert each image used in the ePI to Base64 (e.g., images used as figures; the chemical structure of the active ingredient). 

Using the FHIR ePI Profile as a template, complete one Binary resource for each image in the ePI. Add the Base64 version of the image to the Binary resource. 

The Binary can also be used to create a cross-reference linking to an outside object like a video. 

Refer to [Binary Resource](http://hl7.org/fhir/binary.html) for detail. 

#### Create Composition resource 
The composition captures all section headings, sub-section headings and narrative text/narrative content (e.g., paragraphs, tables, bulleted lists) in the ePI.

Using the FHIR ePI Profile as a template, complete one Composition resource for each ePI document.

Reference the Composition resource to each Binary. The reference to the Binary is made from the narrative text of the Composition resource’s @text element. 

Reference the Composition resource to each Regulated Authorization from the @subject element. 

The section/@Title is the display text of the section heading and sub-section heading prescribed by the relevant national health authority. For example, ‘2. Qualitative and quantitative composition’ or ‘4.1 Therapeutic indications’ from the EMA’s Quality Review of Document (QRD) template for the SmPC. 

The section/@code is the code for the corresponding section heading or sub-section heading prescribed by the relevant national health authority. 

NOTE:  
ePI documents are meant to be separate and shall not be combined into one large composition. E.g., 
- one Composition for the healthcare practitioner document and a separate Composition  for the Patient Insert document;
- one Composition for each translation (e.g., one Composition for the French version of the ePI document and a separate Composition for the Spanish version of the ePI document).

Refer to [Composition Profile](https://build.fhir.org/ig/HL7/emedicinal-product-info/StructureDefinition-Composition-uv-epi.html) for detail.  

#### Create Bundle 
The bundle is used to gather together the resources needed to create a unique ePI document. E.g., one bundle for the health care practitioner ePI; a second bundle for the patient insert ePI; a third bundle for the pack label ePI document.

Using the Base ePI Profile as a template, complete one Bundle resource for each ePI document.  

Complete the Bundle resource by referencing it to only one Composition plus all other resources completed in Step 1. E.g., reference the Bundle to the patient insert composition and all other resources associated with that patient insert (e.g., the binaries, regulated authorizations, clinical uses, medicinal products,  packaged products, administrable products, manufactured items, organizations, ingredients, substances).

NOTE: 
- There is one bundle for each ePI document. E.g., one Bundle resource for each healthcare practitioner document, patient information document and their respective translations.
- As per the FHIR Document specification, there shall not be any loose resources; i.e., all resources contained in the Bundle must be referenced.

Refer to [Bundle Profile](https://build.fhir.org/ig/HL7/emedicinal-product-info/StructureDefinition-Bundle-uv-epi.html) for detail.  

#### Create List
The List of ePIs is used to keep track of all ePIs for a given medicinal product. E.g., the list will track the SmPC and all its versions; the Package Leaflet and all its versions.  

Complete the [List resource](http://hl7.org/fhir/list.html) by adding a reference to the ePI document Bundle for the ePI document created above.





---

// File: input/pagecontent/steps-to-create-epi2.md

### How to build an ePI document
The following is an example of how to build a Summary of Product Characteristics (SmPC) as a Type 1, Type 2, and Type 3 ePI document. This example is meant as a demonstration to encourage a harmonized approach. Refer to national or regional health authority guidance for official rules about how to build an ePI document.  

<img src="Type2ePI.drawio.png" usemap="#image-map" style="float:none; margin: 0px 0px 0px 0px;" width="650px">  

### Steps to create Type 2 ePI Dcoument  

#### Create Organization resource(s) 
Using the Base ePI Profile as a template, complete one Organization resource for each organization associated with the authorized product(s) in this ePI. The following are examples of the type of organization typically associated with ePIs: Market Authorization Holder; health authority responsible for regulating the ePI content; manufacture, test, analysis, packaging).  

Refer to the [Organization profile](StructureDefinition-Organization-uv-epi.html) for detail. 

#### Create Substance Definition resource(s) 
Using the Base ePI Profile as a template, complete one SubstanceDefinition resource for each active ingredient associated with the authorized product(s) in this ePI.

Create a reference from the SubstanceDefinition to the Organization resource for the manufacturer or marketing authorization holder that was created in the Step 5.1.1 Create Organization resource(s)]. 

Refer to the [SubstanceDefinition Profile](StructureDefinition-SubstanceDefinition-uv-epi.html) for detail. 

#### Create Manufactured Item Definition resource(s) 
The manufactured item describes the medicinal product as the dosage form contained in its primary package. For example, a powder in a vial and a diluent in another vial are packaged together in a kit. The powder is one manufactured item and the diluent is a second manufactured item.  
 
Using the FHIR ePI Profile as a template, complete one ManufacturedItemDefinition resource for each manufactured item associated with the authorized product(s) in this ePI.  
 
Create a reference from each ManufacturedItemDefinition resource to the corresponding Organization resource (e.g., reference to the manufacturer; reference to the marketing authorization holder). 

Refer to [ManufacturedItemDefinition Profile](StructureDefinition-ManufacturedItemDefinition-uv-epi.html) for detail. 

(add two examples, one for a product with no transformation (tablet) and one with transformation). 

#### Create Ingredient resource(s) 
Using the Base ePI Profile as a template, complete one Ingredient resource for each active ingredient and each excipient that make up each manufactured item associated with the authorized product(s) in this ePI. 

Create a reference from the relevant Ingredient resources to the corresponding ManufacturedItemDefinition resource (e.g., reference the ingredients that make up the powder to the powder's manufactured item, and reference the ingredients that make up the diluent to the diluent's manufactured item). 

Create a reference from the relevant Ingredient resources to the corresponding Organization resource (e.g., reference to the Organization that manufactures that ingredient). 

Create a reference from the relevant Ingredient resources to the corresponding Substance Definition resource (e.g., reference the active ingredient to the corresponding substance so there is a link to capture molecular structure, molecular formula, and molecular weight.). 

Refer to [Ingredient](StructureDefinition-Ingredient-uv-epi.html) for detail. 

#### Create Medicinal Product Definition resource(s) 
Using the FHIR ePI Profile as a template, complete one MedicinalProductDefinition resource for each presentation of the medicinal product(s) associated with the authorized product(s) in this ePI. 
 
There are no references from the medicinal product to other resources. Instead, other resources will refer to the medicinal product.  

Refer to [MedicinalProductDefinition Profile](StructureDefinition-MedicinalProductDefinition-uv-epi.html) for detail.  

#### Create Administrable Product Definition resource(s) 
The administrable product describes the medicinal product in the dosage form ready for administration to the patient (after any mixing of multiple components or transformations has been performed). This is different from the manufactured item which described the medicinal product as the dosage form in the primary packaging and before any mixing or transformation. For example, a powder in a vial and a diluent in a vial are packaged together. The combined solution, made by mixing the powder and diluent, is the administrable product since that is the dosage form ready for administration to the patient.  
 
Using the Base ePI Profile as a template, complete one PharmaceuticalProductDefinition resource for each pharmaceutical product associated with the authorized product(s) in this ePI.  
 
Create a reference from each PharmaceuticalProductDefinition resource to the corresponding MedicinalProductDefinition resource. 

Create a reference from each PharmaceuticalProductDefinition resource to the corresponding ManufacturedItemDefinition resource. 

Refer to [AdministrableProductDefinition Profile](StructureDefinition-AdministrableProductDefinition-uv-epi.html) for detail. 

(add two examples, one for a product with no transformation (tablet) and one with transformation). 

#### Create Packaged Product Definition resource(s) 

Using the Base ePI Profile as a template, complete one PackagedProductDefinition resource for each presentation associated with the authorized product(s) in this ePI. 

Create a reference from each PackagedProductDefinition resource to the corresponding MedicinalProductDefinition resource for this package. 

Create a reference from each PackagedProductDefinition resource to the corresponding Organization resource for the manufacturer or marketing authorization holder. 

Refer to [PackagedProductDefinition Profile](StructureDefinition-PackagedProductDefinition-uv-epi.html) for detail. 

#### Create Regulated Authorization resource 
Using the Base ePI Profile as a template, complete one RegulatedAuthorization resource for each medicinal product associated with this ePI. For example, if there are four medicinal products then there will be four RegulatedAuthorization resources. 

Create a reference from each RegulatedAuthorization resource to its corresponding MedicinalProductDefinition.

Create a reference from each RegulatedAuthorization resource to to the corresponding Organization resource for the marketing authorization holder and the health authority.

Refer to [RegulatedAuthorization Profile](StructureDefinition-RegulatedAuthorization-uv-epi.html) for detail.
 
NOTE:  
- Depending on the jurisdiction there will either be (1) one authorization per medicinal product (i.e., resulting in many RegulatedAuthorization resources); or (2) one authorization for all medicinal products (i.e., resulting in one RegulatedAuthorization resource). Refer to the regional profile for confirmation on which approach is required. 

#### Create Binary resource 
Convert each image used in the ePI to Base64 (e.g., images used as figures; the chemical structure of the active ingredient). 

Using the FHIR ePI Profile as a template, complete one Binary resource for each image in the ePI. Add the Base64 version of the image to the Binary resource. 

The Binary can also be used to create a cross-reference linking to an outside object like a video. 

Refer to [Binary Resource](http://build.fhir.org/binary.html) for detail. 

#### Create Composition resource 
The composition captures all section headings, sub-section headings and narrative text/narrative content (e.g., paragraphs, tables, bulleted lists) in the ePI.

Using the FHIR ePI Profile as a template, complete one Composition resource for each ePI document.

Reference the Composition resource to each Binary. The reference to the Binary is made from the narrative text of the Composition resource’s @text element. 

Reference the Composition resource to each Regulated Authorization from the @subject element. 

The section/@Title is the display text of the section heading and sub-section heading prescribed by the relevant national health authority. For example, ‘2. Qualitative and quantitative composition’ or ‘4.1 Therapeutic indications’ from the EMA’s Quality Review of Document (QRD) template for the SmPC. 

The section/@code is the code for the corresponding section heading or sub-section heading prescribed by the relevant national health authority. 

NOTE:  
ePI documents are meant to be separate and shall not be combined into one large composition. E.g., 
- one Composition for the healthcare practitioner document and a separate Composition  for the Patient Insert document;
- one Composition for each translation (e.g., one Composition for the French version of the ePI document and a separate Composition for the Spanish version of the ePI document).

Refer to [Composition Profile](StructureDefinition-Composition-uv-epi.html) for detail.  

#### Create Bundle 
The bundle is used to gather together the resources needed to create a unique ePI document. E.g., one bundle for the health care practitioner ePI; a second bundle for the patient insert ePI; a third bundle for the pack label ePI document.

Using the Base ePI Profile as a template, complete one Bundle resource for each ePI document.  

Complete the Bundle resource by referencing it to only one Composition plus all other resources completed in Step 1. E.g., reference the Bundle to the patient insert composition and all other resources associated with that patient insert (e.g., the binaries, regulated authorizations, clinical uses, medicinal products,  packaged products, administrable products, manufactured items, organizations, ingredients, substances).

NOTE: 
- There is one bundle for each ePI document. E.g., one Bundle resource for each healthcare practitioner document, patient information document and their respective translations.
- As per the FHIR Document specification, there shall not be any loose resources; i.e., all resources contained in the Bundle must be referenced.

Refer to [Bundle Profile](StructureDefinition-Bundle-uv-epi.html) for detail.  

#### Create List (of ePIs)

The List of ePIs is used to keep track of all ePIs for a given medicinal product. E.g., the list will track the SmPC and all its versions; the Package Leaflet and all its versions.  

Complete the [List resource](http://hl7.org/fhir/list.html) by adding a reference to the ePI document Bundle for the ePI document created above.



---

// File: input/pagecontent/steps-to-create-epi3.md

### How to build an ePI document
The following is an example of how to build a Summary of Product Characteristics (SmPC) as a Type 1, Type 2, and Type 3 ePI document. This example is meant as a demonstration to encourage a harmonized approach. Refer to national or regional health authority guidance for official rules about how to build an ePI document.  

### Steps to create Type 3 ePI Dcoument  

<img src="Type3ePI.drawio.png" usemap="#image-map" style="float:none; margin: 0px 0px 0px 0px;" width="650px">  

#### Create Organization resource(s) 
Using the Base ePI Profile as a template, complete one Organization resource for each organization associated with the authorized product(s) in this ePI. The following are examples of the type of organization typically associated with ePIs: Market Authorization Holder; health authority responsible for regulating the ePI content; manufacture, test, analysis, packaging).  

Refer to the [Organization profile](StructureDefinition-Organization-uv-epi.html) for detail. 

#### Create Substance Definition resource(s) 
Using the Base ePI Profile as a template, complete one SubstanceDefinition resource for each active ingredient associated with the authorized product(s) in this ePI.

Create a reference from the SubstanceDefinition to the Organization resource for the manufacturer or marketing authorization holder that was created in the Step 5.1.1 Create Organization resource(s)]. 

Refer to the [SubstanceDefinition Profile](StructureDefinition-SubstanceDefinition-uv-epi.html) for detail. 

#### Create Manufactured Item Definition resource(s) 
The manufactured item describes the medicinal product as the dosage form contained in its primary package. For example, a powder in a vial and a diluent in another vial are packaged together in a kit. The powder is one manufactured item and the diluent is a second manufactured item.  
 
Using the FHIR ePI Profile as a template, complete one ManufacturedItemDefinition resource for each manufactured item associated with the authorized product(s) in this ePI.  
 
Create a reference from each ManufacturedItemDefinition resource to the corresponding Organization resource (e.g., reference to the manufacturer; reference to the marketing authorization holder). 

Refer to [ManufacturedItemDefinition Profile](StructureDefinition-ManufacturedItemDefinition-uv-epi.html) for detail. 

(add two examples, one for a product with no transformation (tablet) and one with transformation). 

#### Create Ingredient resource(s) 
Using the Base ePI Profile as a template, complete one Ingredient resource for each active ingredient and each excipient that make up each manufactured item associated with the authorized product(s) in this ePI. 

Create a reference from the relevant Ingredient resources to the corresponding ManufacturedItemDefinition resource (e.g., reference the ingredients that make up the powder to the powder's manufactured item, and reference the ingredients that make up the diluent to the diluent's manufactured item). 

Create a reference from the relevant Ingredient resources to the corresponding Organization resource (e.g., reference to the Organization that manufactures that ingredient). 

Create a reference from the relevant Ingredient resources to the corresponding Substance Definition resource (e.g., reference the active ingredient to the corresponding substance so there is a link to capture molecular structure, molecular formula, and molecular weight.). 

Refer to [Ingredient](StructureDefinition-Ingredient-uv-epi.html) for detail. 

#### Create Medicinal Product Definition resource(s) 
Using the FHIR ePI Profile as a template, complete one MedicinalProductDefinition resource for each presentation of the medicinal product(s) associated with the authorized product(s) in this ePI. 
 
There are no references from the medicinal product to other resources. Instead, other resources will refer to the medicinal product.  

Refer to [MedicinalProductDefinition Profile](StructureDefinition-MedicinalProductDefinition-uv-epi.html) for detail.  

#### Create Administrable Product Definition resource(s) 
The administrable product describes the medicinal product in the dosage form ready for administration to the patient (after any mixing of multiple components or transformations has been performed). This is different from the manufactured item which described the medicinal product as the dosage form in the primary packaging and before any mixing or transformation. For example, a powder in a vial and a diluent in a vial are packaged together. The combined solution, made by mixing the powder and diluent, is the administrable product since that is the dosage form ready for administration to the patient.  
 
Using the Base ePI Profile as a template, complete one PharmaceuticalProductDefinition resource for each pharmaceutical product associated with the authorized product(s) in this ePI.  
 
Create a reference from each PharmaceuticalProductDefinition resource to the corresponding MedicinalProductDefinition resource. 

Create a reference from each PharmaceuticalProductDefinition resource to the corresponding ManufacturedItemDefinition resource. 

Refer to [AdministrableProductDefinition Profile](StructureDefinition-AdministrableProductDefinition-uv-epi.html) for detail. 

(add two examples, one for a product with no transformation (tablet) and one with transformation). 

#### Create Packaged Product Definition resource(s) 

Using the Base ePI Profile as a template, complete one PackagedProductDefinition resource for each presentation associated with the authorized product(s) in this ePI. 

Create a reference from each PackagedProductDefinition resource to the corresponding MedicinalProductDefinition resource for this package. 

Create a reference from each PackagedProductDefinition resource to the corresponding Organization resource for the manufacturer or marketing authorization holder. 

Refer to [PackagedProductDefinition Profile](StructureDefinition-PackagedProductDefinition-uv-epi.html) for detail. 

#### Create Clinical Use Definition resource(s) – Contraindication 
Using the Base ePI Profile as a template, complete one ClinicalUseDefinition resource for each contraindication.  

Create a reference from the ClinicalUseDefinition (contraindication) to the corresponding MedicinalProduct. 

Refer to [ClinicalUseDefinition Profile](StructureDefinition-ClinicalUseDefinition-contraindication-uv-epi.html) for detail. 

#### Create Clinical Use Definition resource(s) - Indication 
Using the Base ePI Profile as a template, complete one ClinicalUseDefinition resource for each Indication. 

Create a reference from each ClinicalUseDefinition (Indication) to the corresponding MedicinalProduct. 

Refer to [ClinicalUseDefinition Profile](StructureDefinition-ClinicalUseDefinition-contraindication-uv-epi.html) for detail.  

#### Create Clinical Use Definition resource - Interaction 
Using the Base ePI Profile as a template, complete one ClinicalUseDefinition resource for each Interaction. 

Create a reference each ClinicalUseDefinition (Interaction) to the corresponding MedicinalProduct. 

Refer to [ClinicalUseDefinition Profile](StructureDefinition-ClinicalUseDefinition-contraindication-uv-epi.html) for detail.  

#### Create Clinical Use Definition resource - Undesirable Effect 
Using the Base ePI Profile as a template, complete one ClinicalUseDefinition resource for each Undesirable Effect. 

Create a reference from each ClinicalUseDefinition (Undesirable Effect) to the corresponding MedicinalProduct. 

Refer to [ClinicalUseDefinition Profile](StructureDefinition-ClinicalUseDefinition-contraindication-uv-epi.html) for detail.  

#### Create Clinical Use Definition resource - Warning 
Using the Base ePI Profile as a template, complete one ClinicalUseDefinition resource for each Warning. 

Create a reference from each ClinicalUseDefinition (Warning) to the corresponding MedicinalProduct. 

INSERT reference to the Profile page. 

#### Create Regulated Authorization resource 
Using the Base ePI Profile as a template, complete one RegulatedAuthorization resource for each medicinal product associated with this ePI. For example, if there are four medicinal products then there will be four RegulatedAuthorization resources. 

Create a reference from each RegulatedAuthorization resource to its corresponding MedicinalProductDefinition.

Create a reference from each RegulatedAuthorization resource to to the corresponding Organization resource for the marketing authorization holder and the health authority.

Refer to [RegulatedAuthorization Profile](StructureDefinition-RegulatedAuthorization-uv-epi.html) for detail.
 
NOTE:  
- Depending on the jurisdiction there will either be (1) one authorization per medicinal product (i.e., resulting in many RegulatedAuthorization resources); or (2) one authorization for all medicinal products (i.e., resulting in one RegulatedAuthorization resource). Refer to the regional profile for confirmation on which approach is required. 

#### Create Binary resource 
Convert each image used in the ePI to Base64 (e.g., images used as figures; the chemical structure of the active ingredient). 

Using the FHIR ePI Profile as a template, complete one Binary resource for each image in the ePI. Add the Base64 version of the image to the Binary resource. 

The Binary can also be used to create a cross-reference linking to an outside object like a video. 

Refer to [Binary Resource](http://build.fhir.org/binary.html) for detail. 

#### Create Composition resource 
The composition captures all section headings, sub-section headings and narrative text/narrative content (e.g., paragraphs, tables, bulleted lists) in the ePI.

Using the FHIR ePI Profile as a template, complete one Composition resource for each ePI document.

Reference the Composition resource to each Binary. The reference to the Binary is made from the narrative text of the Composition resource’s @text element. 

Reference the Composition resource to each Regulated Authorization from the @subject element. 

The section/@Title is the display text of the section heading and sub-section heading prescribed by the relevant national health authority. For example, ‘2. Qualitative and quantitative composition’ or ‘4.1 Therapeutic indications’ from the EMA’s Quality Review of Document (QRD) template for the SmPC. 

The section/@code is the code for the corresponding section heading or sub-section heading prescribed by the relevant national health authority. 

NOTE:  
ePI documents are meant to be separate and shall not be combined into one large composition. E.g., 
- one Composition for the healthcare practitioner document and a separate Composition  for the Patient Insert document;
- one Composition for each translation (e.g., one Composition for the French version of the ePI document and a separate Composition for the Spanish version of the ePI document).

Refer to [Composition Profile](StructureDefinition-Composition-uv-epi.html) for detail.  

#### Create Bundle 
The bundle is used to gather together the resources needed to create a unique ePI document. E.g., one bundle for the health care practitioner ePI; a second bundle for the patient insert ePI; a third bundle for the pack label ePI document.

Using the Base ePI Profile as a template, complete one Bundle resource for each ePI document.  

Complete the Bundle resource by referencing it to only one Composition plus all other resources completed in Step 1. E.g., reference the Bundle to the patient insert composition and all other resources associated with that patient insert (e.g., the binaries, regulated authorizations, clinical uses, medicinal products,  packaged products, administrable products, manufactured items, organizations, ingredients, substances).

NOTE: 
- There is one bundle for each ePI document. E.g., one Bundle resource for each healthcare practitioner document, patient information document and their respective translations.
- As per the FHIR Document specification, there shall not be any loose resources; i.e., all resources contained in the Bundle must be referenced.

Refer to [Bundle Profile](StructureDefinition-Bundle-uv-epi.html) for detail.  

#### Create List (of ePIs)

The List of ePIs is used to keep track of all ePIs for a given medicinal product. E.g., the list will track the SmPC and all its versions; the Package Leaflet and all its versions.  

Complete the [List resource](http://hl7.org/fhir/list.html) by adding a reference to the ePI document Bundle for the ePI document created above.



---

// File: input/pagecontent/use-case.md

### FHIR ePI Documents 
As noted in the background, ePIs take three forms:
1. Information for healthcare professionals
2. Information for patients
3. Information on the package label  

ePI documents are made up of the following five components: 
- Narrative - Section headings, paragraphs, bulleted lists, tables
- Document data - Date of approval, date of last update, unique identifiers
- Medicinal Product data - dosage form, strength, route of adminisation, ingredients, packaging
- Organization data - Name, address, unique identifiers, and contact information
- Clinical use data - Contraindication, indications, warnings and precautions  

### Overview of the FHIR Resources that make up the common ePI Profile 
This Implementation Guide recommends the use of the following thirteen resources to support the creation and exchange of ePIs:
- List
- Bundle
- Composition
- Binary
- Organization
- Regulated Authorization
- Medicinal Product Definition
- Administrable Product Definition
- Manufactured Item Definition
- Ingredient
- Substance Definition
- Packaged Product Definition
- Clinical Use Definition  

It is not mandatory for any implementers to use all thirteen resources for all ePIs. Dependent on the region, or dependent on the use case, implementers may choose to use all or some of the thirteen resources. For example, health authorities are encouraged to use combinations of these resources to recreate their national ePI templates with these resources. Thus, allowing them to reap the benefits of FHIR while still maintaining compliance with local regulations and local ePI templates with regulated section and sub-section headings. Although optional, this IG recommends adopting one of the following three general approaches to encourage consistency.  

- **Type 1 ePI documents** support creating the narrative content (e.g., document type, document identifier, section headings, paragraphs, and tables) and only a basic list of medicinal products.
- **Type 2 ePI documents** support creating the narrative content and now includes product information. However, it does not include structured clinical use information. 
- **Type 3 ePI documents** support creating the narrative, product information, and structured clinical use information.  
  
  
**Table 1 Overview of resources, ePI use cases for each resource, and ePI document types**  

|**FHIR Resource**|**ePI use cases for each resource**|**ePI Type 1**|**ePI Type 2**|**ePI Type 3**|
|---|---|---|---|---|
List|List of related ePI documents; e.g., list of Summary of Product Characteristics (SmPC), Package Leaflet, package artwork/mockups, and Annexes for a given medicinal product.|x|x|x
Bundle|Container for a collection of resources and forms a FHIR document.|x|x|x
Composition|Basic structure and narrative content for a document (e.g., section headings, paragraphs, tablets, bulleted lists).|x|x|x
Binary|Encoded images.|x|x|x
Organization|Name, address, contact information, and idenifiers for referenced companies.|x|x|x
Regulated Authorization|Regulatory license for each medicinal product.| |x|x
Medicinal Product Definition|Details for each regulated medicinal product| |x|x
Administrable Product Definition|Final form of the medicinal product ready for administration to a patient| |x|x
Manufactured Item Definition|Dose form of the medicinal product in its primary packaging| |x|x
Ingredient|Ingredients (active, inactive, adjuvants) in which the manufactured item is composed of.| |x|x
Substance Definition|Substances assocated with the ingredients.| |x|x
Packaged Product Definition|Describes the unit for sale or supply (e.g., container closure system; primary and secondary packaging; items in the pack)| |x|x
Clinical Use Definition|Structured information about indication, contraindication, interactions (drug:drug, drug:food; drug:lab); undesireable effect; warning| | |x|  
{: .grid }

---

// File: input/fsh/aliases.fsh

//============== ALIAS ===============

// =========== Systems =======
// HL7 systems
Alias: $administrable-dose-form = http://hl7.org/fhir/administrable-dose-form
Alias: $manufactured-dose-form = http://hl7.org/fhir/manufactured-dose-form
Alias: $unit-of-presentation = http://hl7.org/fhir/unit-of-presentation
Alias: $ingredient-role = http://hl7.org/fhir/ingredient-role
Alias: $combined-dose-form = http://hl7.org/fhir/combined-dose-form
Alias: $medicinal-product-type = http://hl7.org/fhir/medicinal-product-type
Alias: $medicinal-product-domain = http://hl7.org/fhir/medicinal-product-domain
Alias: $legal-status-of-supply = http://hl7.org/fhir/legal-status-of-supply
Alias: $medicinal-product-package-type = http://hl7.org/fhir/medicinal-product-package-type
Alias: $package-material = http://hl7.org/fhir/package-material
Alias: $medicinal-product-name-part-type = http://hl7.org/fhir/medicinal-product-name-part-type
Alias: $medicationknowledge-characteristic = 
http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic
Alias: $roleclass = http://terminology.hl7.org/CodeSystem/v3-RoleClass
Alias: $publication-status = http://hl7.org/fhir/publication-status

// External systems
Alias: $meddra = http://terminology.hl7.org/CodeSystem/mdr
Alias: $iso3166 = urn:iso:std:iso:3166
Alias: $ncithesaurus =  http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl // see https://terminology.hl7.org/CodeSystem-v3-nciThesaurus.html
Alias: $uri = urn:ietf:rfc:3986
Alias: $oid = urn:ietf:rfc:1155
Alias: $loinc = http://loinc.org
Alias: $edqm = http://standardterms.edqm.eu
Alias: $sct = http://snomed.info/sct
Alias: $atc = http://www.whocc.no/atc
Alias: $ginas = http://fdasis.nlm.nih.gov
Alias: $ucum = http://unitsofmeasure.org
Alias: $phpid = https://www.who-umc.org/phpid


// Example systems
Alias: $example-cs = http://example.org // used only for missing concepts in examples
Alias: $example-man = http://example.org/marketingAuthorizationNumber 
Alias: $example-org = http://example.org/sid/org
Alias: $example-prod = http://example.org/sid/product

// ============= VALUE SETS  ============

Alias: $VS-medicinal-product-domain =
	http://hl7.org/fhir/ValueSet/medicinal-product-domain

// SPOR Code systems (lists)
	
//Alias: $spor-precautionsForStorage-cs  = https://spor.ema.europa.eu/lists/100000073344
//Alias: $spor-medicinalProducttype-cs  = https://spor.ema.europa.eu/lists/200000025915
//Alias: $example-organisationRoleType-cs = https://spor.ema.europa.eu/lists/220000000031
//Alias: $spor-combinedPharmaceuticalDoseForm-cs = https://spor.ema.europa.eu/lists/200000000006 
// Alias: $spor-route-cs = https://spor.ema.europa.eu/lists/100000073345 // Routes and Methods of Administration
//Alias: $spor-legalStatusForSupply-cs = https://spor.ema.europa.eu/lists/100000072051	// Legal Status for the Supply
//Alias: $spor-additionalMonitoringIndicator-cs = http://example.org // TO BE FIXED
//Alias: $spor-marketingStatus-cs = https://spor.ema.europa.eu/lists/100000072052
//Alias: $example-productNamePartType-cs = https://spor.ema.europa.eu/lists/220000000000 // Medicinal Product Name Part Type
//Alias: $spor-regulatoryEntitlementType-cs = https://spor.ema.europa.eu/lists/220000000060
// Alias: $spor-regulatoryEntitlementStatus-cs = https://spor.ema.europa.eu/lists/100000072049

---

// File: input/fsh/instances/capabilitystatements.fsh

Instance: simple-vulcan-epi-server
InstanceOf: CapabilityStatement
Title: "Simple Vulcan ePI Server Capability Statement"
Usage: #definition
* name = "RestServer"
* status = #active
* date = "2024-04-07T09:39:51.216+00:00"
* publisher = "Gravitate Health"
* kind = #instance
* fhirVersion = #5.0.0
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* format[+] = #html/json
* format[+] = #html/xml
* rest.mode = #server
* rest.resource[0].type = #Bundle
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/batch-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/batch-response-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/document-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/history-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/search-set-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-response-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/emedicinal-product-info/StructureDefinition/Bundle-uv-epi"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Bundle:composition"
* rest.resource[=].searchInclude[+] = "Bundle:example-constraint"
* rest.resource[=].searchInclude[+] = "Bundle:message"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Persistent identifier for the bundle"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "composition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-composition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"document\" - this is a composition, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "example-constraint"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-example-constraint"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search Composition Bundle"
* rest.resource[=].searchParam[+].name = "timestamp"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-timestamp"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When the bundle was assembled"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #List
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/List"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchInclude[+] = "List:item"
* rest.resource[=].searchInclude[+] = "List:source"
* rest.resource[=].searchInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): Account number\r\n* [AdverseEvent](adverseevent.html): Business identifier for the event\r\n* [AllergyIntolerance](allergyintolerance.html): External ids for this item\r\n* [Appointment](appointment.html): An Identifier of the Appointment\r\n* [AppointmentResponse](appointmentresponse.html): An Identifier in this appointment response\r\n* [Basic](basic.html): Business identifier\r\n* [BodyStructure](bodystructure.html): Bodystructure identifier\r\n* [CarePlan](careplan.html): External Ids for this plan\r\n* [CareTeam](careteam.html): External Ids for this team\r\n* [ChargeItem](chargeitem.html): Business Identifier for item\r\n* [Claim](claim.html): The primary identifier of the financial resource\r\n* [ClaimResponse](claimresponse.html): The identity of the ClaimResponse\r\n* [ClinicalImpression](clinicalimpression.html): Business identifier\r\n* [Communication](communication.html): Unique identifier\r\n* [CommunicationRequest](communicationrequest.html): Unique identifier\r\n* [Composition](composition.html): Version-independent identifier for the Composition\r\n* [Condition](condition.html): A unique identifier of the condition record\r\n* [Consent](consent.html): Identifier for this record (external references)\r\n* [Contract](contract.html): The identity of the contract\r\n* [Coverage](coverage.html): The primary identifier of the insured and the coverage\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The business identifier of the Eligibility\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The business identifier\r\n* [DetectedIssue](detectedissue.html): Unique id for the detected issue\r\n* [DeviceRequest](devicerequest.html): Business identifier for request/order\r\n* [DeviceUsage](deviceusage.html): Search by identifier\r\n* [DiagnosticReport](diagnosticreport.html): An identifier for the report\r\n* [DocumentReference](documentreference.html): Identifier of the attachment binary\r\n* [Encounter](encounter.html): Identifier(s) by which this encounter is known\r\n* [EnrollmentRequest](enrollmentrequest.html): The business identifier of the Enrollment\r\n* [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The business identifier of the Explanation of Benefit\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier\r\n* [Flag](flag.html): Business identifier\r\n* [Goal](goal.html): External Ids for this goal\r\n* [GuidanceResponse](guidanceresponse.html): The identifier of the guidance response\r\n* [ImagingSelection](imagingselection.html): Identifiers for the imaging selection\r\n* [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID\r\n* [Immunization](immunization.html): Business identifier\r\n* [ImmunizationEvaluation](immunizationevaluation.html): ID of the evaluation\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Business identifier\r\n* [Invoice](invoice.html): Business Identifier for item\r\n* [List](list.html): Business identifier\r\n* [MeasureReport](measurereport.html): External identifier of the measure report to be returned\r\n* [Medication](medication.html): Returns medications with this external identifier\r\n* [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier\r\n* [MedicationStatement](medicationstatement.html): Return statements with this external identifier\r\n* [MolecularSequence](molecularsequence.html): The unique identity for a particular sequence\r\n* [NutritionIntake](nutritionintake.html): Return statements with this external identifier\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier\r\n* [Observation](observation.html): The unique id for a particular observation\r\n* [Person](person.html): A person Identifier\r\n* [Procedure](procedure.html): A unique identifier for a procedure\r\n* [QuestionnaireResponse](questionnaireresponse.html): The unique identifier for the questionnaire response\r\n* [RelatedPerson](relatedperson.html): An Identifier of the RelatedPerson\r\n* [RequestOrchestration](requestorchestration.html): External identifiers for the request orchestration\r\n* [ResearchSubject](researchsubject.html): Business Identifier for research subject in a study\r\n* [RiskAssessment](riskassessment.html): Unique identifier for the assessment\r\n* [ServiceRequest](servicerequest.html): Identifiers assigned to this order\r\n* [Specimen](specimen.html): The unique identifier associated with the specimen\r\n* [SupplyDelivery](supplydelivery.html): External identifier\r\n* [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest\r\n* [Task](task.html): Search for a task instance by its business identifier\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier\r\n"
* rest.resource[=].searchParam[+].name = "item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Actual entry"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): Event or incident that occurred or was averted\r\n* [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance\r\n* [AuditEvent](auditevent.html): More specific code for the event\r\n* [Basic](basic.html): Kind of Resource\r\n* [ChargeItem](chargeitem.html): A code that identifies the charge, like a billing code\r\n* [Condition](condition.html): Code for the condition\r\n* [DetectedIssue](detectedissue.html): Issue Type, e.g. drug-drug, duplicate therapy, etc.\r\n* [DeviceRequest](devicerequest.html): Code for what is being requested/ordered\r\n* [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a condition code\r\n* [ImagingSelection](imagingselection.html): The imaging selection status\r\n* [List](list.html): What the purpose of this list is\r\n* [Medication](medication.html): Returns medications for a specific code\r\n* [MedicationAdministration](medicationadministration.html): Return administrations of this medication code\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code\r\n* [MedicationStatement](medicationstatement.html): Return statements of this medication code\r\n* [NutritionIntake](nutritionintake.html): Returns statements of this code of NutritionIntake\r\n* [Observation](observation.html): The code of the observation type\r\n* [Procedure](procedure.html): A code to identify a  procedure\r\n* [RequestOrchestration](requestorchestration.html): The code of the request orchestration\r\n* [Task](task.html): Search by task code\r\n"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "source"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-source"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what defined the list contents (aka Author)"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Descriptive name for the list"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "current | retired | entered-in-error"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.interaction[0].code = #transaction
* rest.interaction[+].code = #history-system

Instance: advanced-vulcan-epi-server
InstanceOf: CapabilityStatement
Title: "Advanced Vulcan ePI Server Capability Statement"
Usage: #definition
* name = "RestServer"
* status = #active
* date = "2024-03-07T10:51:50Z"
* publisher = "Gravitate Health"
* kind = #instance
* fhirVersion = #5.0.0
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* format[+] = #html/json
* format[+] = #html/xml
* patchFormat[0] = #application/fhir+json
* patchFormat[+] = #application/fhir+xml
* patchFormat[+] = #application/json-patch+json
* patchFormat[+] = #application/xml-patch+xml
* rest.mode = #server
* rest.resource[0].type = #AdministrableProductDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "AdministrableProductDefinition:device"
* rest.resource[=].searchInclude[+] = "AdministrableProductDefinition:form-of"
* rest.resource[=].searchInclude[+] = "AdministrableProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:for"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An identifier for the administrable product"
* rest.resource[=].searchParam[+].name = "ingredient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-ingredient"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ingredients of this administrable medicinal product"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "manufactured-item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-manufactured-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The manufactured item(s) that this administrable product is produced from. Either a single item, or several that are mixed before administration (e.g. a power item and a solution item). Note that these are not raw ingredients"
* rest.resource[=].searchParam[+].name = "route"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-route"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Coded expression for the route"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "dose-form"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-dose-form"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The administrable dose form, i.e. the dose form of the final product after necessary reconstitution or processing"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "device"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-device"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A device that is integral to the medicinal product, in effect being considered as an \"ingredient\" of the medicinal product. This is not intended for devices that are just co-packaged"
* rest.resource[=].searchParam[+].name = "form-of"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-form-of"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The medicinal product that this is an administrable form of. This is not a reference to the item(s) that make up this administrable form - it is the whole product"
* rest.resource[=].searchParam[+].name = "target-species"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-target-species"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Coded expression for the species"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AdministrableProductDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of this administrable product. Enables tracking the life-cycle of the content."
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #Binary
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Binary"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Binary-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #Bundle
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/batch-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/batch-response-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/document-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/history-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/search-set-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/subscription-notification-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-bundle"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/transaction-response-bundle"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Bundle:composition"
* rest.resource[=].searchInclude[+] = "Bundle:example-constraint"
* rest.resource[=].searchInclude[+] = "Bundle:message"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Persistent identifier for the bundle"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "message"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-message"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"message\" - this is a message header, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "composition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-composition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"document\" - this is a composition, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "example-constraint"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-example-constraint"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search Composition Bundle"
* rest.resource[=].searchParam[+].name = "timestamp"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Bundle-timestamp"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When the bundle was assembled"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #ClinicalUseDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:contraindication-reference"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:effect-reference"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:indication-reference"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:product"
* rest.resource[=].searchInclude[+] = "ClinicalUseDefinition:subject"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "contraindication-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-contraindication-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as contraindicating against this item, as a reference"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Business identifier for this issue"
* rest.resource[=].searchParam[+].name = "indication-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-indication-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as an indicaton for this item, as a reference"
* rest.resource[=].searchParam[+].name = "product"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-product"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The medicinal product for which this is a clinical usage issue"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The resource for which this is a clinical usage issue"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "indication | contraindication | interaction | undesirable-effect | warning"
* rest.resource[=].searchParam[+].name = "effect-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-effect-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The situation in which the undesirable effect may manifest, as a reference"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "effect"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-effect"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The situation in which the undesirable effect may manifest, as a code"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "interaction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-interaction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "indication"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-indication"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as an indicaton for this item, as a code"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "contraindication"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-contraindication"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The situation that is being documented as contraindicating against this item, as a code"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Whether this is a current issue or one that has been retired etc."
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #CodeSystem
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/publishablecodesystem"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchInclude[+] = "CodeSystem:supplements"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:supplements"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A code defined in the code system"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "derived-from"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-derived-from"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): A resource that the CodeSystem is derived from\r\n* [ConceptMap](conceptmap.html): A resource that the ConceptMap is derived from\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): A resource that the NamingSystem is derived from\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): A resource that the ValueSet is derived from\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "language"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A language in which a designation is provided"
* rest.resource[=].searchParam[+].name = "predecessor"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-predecessor"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): The predecessor of the CodeSystem\r\n* [ConceptMap](conceptmap.html): The predecessor of the ConceptMap\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): The predecessor of the NamingSystem\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): The predecessor of the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "effective"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-effective"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The time during which the activity definition is intended to be in use\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The time during which the charge item definition is intended to be in use\r\n* [Citation](citation.html): The time during which the citation is intended to be in use\r\n* [CodeSystem](codesystem.html): The time during which the CodeSystem is intended to be in use\r\n* [ConceptMap](conceptmap.html): The time during which the ConceptMap is intended to be in use\r\n* [EventDefinition](eventdefinition.html): The time during which the event definition is intended to be in use\r\n* [Library](library.html): The time during which the library is intended to be in use\r\n* [Measure](measure.html): The time during which the measure is intended to be in use\r\n* [NamingSystem](namingsystem.html): The time during which the NamingSystem is intended to be in use\r\n* [PlanDefinition](plandefinition.html): The time during which the plan definition is intended to be in use\r\n* [Questionnaire](questionnaire.html): The time during which the questionnaire is intended to be in use\r\n* [ValueSet](valueset.html): The time during which the ValueSet is intended to be in use\r\n"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "content-mode"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-content-mode"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "not-present | example | fragment | complete | supplement"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "supplements"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-supplements"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Find code system supplements for the referenced code system"
* rest.resource[=].searchParam[+].name = "system"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-system"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "The system for any codes defined by this code system (same as 'url')"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "topic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-topic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Topics associated with the module\r\n* [CodeSystem](codesystem.html): Topics associated with the CodeSystem\r\n* [ConceptMap](conceptmap.html): Topics associated with the ConceptMap\r\n* [EventDefinition](eventdefinition.html): Topics associated with the module\r\n* [EvidenceVariable](evidencevariable.html): Topics associated with the EvidenceVariable\r\n* [Library](library.html): Topics associated with the module\r\n* [Measure](measure.html): Topics associated with the measure\r\n* [NamingSystem](namingsystem.html): Topics associated with the NamingSystem\r\n* [PlanDefinition](plandefinition.html): Topics associated with the module\r\n* [ValueSet](valueset.html): Topics associated with the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/CodeSystem-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "upload-external-code-system"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/CodeSystem-t-upload-external-code-system"
* rest.resource[=].operation[+].name = "apply-codesystem-delta-remove"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/CodeSystem-t-apply-codesystem-delta-remove"
* rest.resource[=].operation[+].name = "apply-codesystem-delta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/CodeSystem-t-apply-codesystem-delta-add"
* rest.resource[+].type = #Composition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Composition"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/catalog"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/clinicaldocument"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/example-composition"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/example-section-library"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Composition:attester"
* rest.resource[=].searchInclude[+] = "Composition:author"
* rest.resource[=].searchInclude[+] = "Composition:encounter"
* rest.resource[=].searchInclude[+] = "Composition:entry"
* rest.resource[=].searchInclude[+] = "Composition:event-reference"
* rest.resource[=].searchInclude[+] = "Composition:patient"
* rest.resource[=].searchInclude[+] = "Composition:related"
* rest.resource[=].searchInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[0] = "Bundle:composition"
* rest.resource[=].searchRevInclude[+] = "Bundle:example-constraint"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): When the event occurred\r\n* [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded\r\n* [Appointment](appointment.html): Appointment date/time.\r\n* [AuditEvent](auditevent.html): Time when the event was recorded\r\n* [CarePlan](careplan.html): Time period plan covers\r\n* [CareTeam](careteam.html): A date within the coverage time period.\r\n* [ClinicalImpression](clinicalimpression.html): When the assessment was documented\r\n* [Composition](composition.html): Composition editing time\r\n* [Consent](consent.html): When consent was agreed to\r\n* [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report\r\n* [DocumentReference](documentreference.html): When this document reference was created\r\n* [Encounter](encounter.html): A date within the actualPeriod the Encounter lasted\r\n* [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period\r\n* [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated\r\n* [Flag](flag.html): Time period when flag is active\r\n* [Immunization](immunization.html): Vaccination  (non)-Administration Date\r\n* [ImmunizationEvaluation](immunizationevaluation.html): Date the evaluation was generated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Date recommendation(s) created\r\n* [Invoice](invoice.html): Invoice date / posting date\r\n* [List](list.html): When the list was prepared\r\n* [MeasureReport](measurereport.html): The date of the measure report\r\n* [NutritionIntake](nutritionintake.html): Date when patient was taking (or not taking) the medication\r\n* [Observation](observation.html): Clinically relevant time/time-period for observation\r\n* [Procedure](procedure.html): When the procedure occurred or is occurring\r\n* [ResearchSubject](researchsubject.html): Start and end of participation\r\n* [RiskAssessment](riskassessment.html): When was assessment made?\r\n* [SupplyRequest](supplyrequest.html): When the request was made\r\n"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what the composition is about"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "section"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-section"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Classification of section (recommended)"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Human Readable name/title"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): E.g. patient, expense, depreciation\r\n* [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)\r\n* [Composition](composition.html): Kind of composition (LOINC if possible)\r\n* [Coverage](coverage.html): The kind of coverage (health plan, auto, Workers Compensation)\r\n* [DocumentReference](documentreference.html): Kind of document (LOINC if possible)\r\n* [Encounter](encounter.html): Specific type of encounter\r\n* [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management\r\n* [Invoice](invoice.html): Type of Invoice\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses of a specific type\r\n* [MolecularSequence](molecularsequence.html): Amino Acid Sequence/ DNA Sequence / RNA Sequence\r\n* [Specimen](specimen.html): The specimen type\r\n"
* rest.resource[=].searchParam[+].name = "section-text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-section-text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the section narrative of the resource"
* rest.resource[=].searchParam[+].name = "related"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-related"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Target of the relationship"
* rest.resource[=].searchParam[+].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): The entity that caused the expenses\r\n* [AdverseEvent](adverseevent.html): Subject impacted by event\r\n* [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for\r\n* [Appointment](appointment.html): One of the individuals of the appointment is this patient\r\n* [AppointmentResponse](appointmentresponse.html): This Response is for this Patient\r\n* [AuditEvent](auditevent.html): Where the activity involved patient data\r\n* [Basic](basic.html): Identifies the focus of this resource\r\n* [BodyStructure](bodystructure.html): Who this is about\r\n* [CarePlan](careplan.html): Who the care plan is for\r\n* [CareTeam](careteam.html): Who care team is for\r\n* [ChargeItem](chargeitem.html): Individual service was done for/to\r\n* [Claim](claim.html): Patient receiving the products or services\r\n* [ClaimResponse](claimresponse.html): The subject of care\r\n* [ClinicalImpression](clinicalimpression.html): Patient assessed\r\n* [Communication](communication.html): Focus of message\r\n* [CommunicationRequest](communicationrequest.html): Focus of message\r\n* [Composition](composition.html): Who and/or what the composition is about\r\n* [Condition](condition.html): Who has the condition?\r\n* [Consent](consent.html): Who the consent applies to\r\n* [Contract](contract.html): The identity of the subject of the contract (if a patient)\r\n* [Coverage](coverage.html): Retrieve coverages for a patient\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The reference to the patient\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The reference to the patient\r\n* [DetectedIssue](detectedissue.html): Associated patient\r\n* [DeviceRequest](devicerequest.html): Individual the service is ordered for\r\n* [DeviceUsage](deviceusage.html): Search by patient who used / uses the device\r\n* [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient\r\n* [DocumentReference](documentreference.html): Who/what is the subject of the document\r\n* [Encounter](encounter.html): The patient present at the encounter\r\n* [EnrollmentRequest](enrollmentrequest.html): The party to be enrolled\r\n* [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The reference to the patient\r\n* [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for\r\n* [Flag](flag.html): The identity of a subject to list flags for\r\n* [Goal](goal.html): Who this goal is intended for\r\n* [GuidanceResponse](guidanceresponse.html): The identity of a patient to search for guidance response results\r\n* [ImagingSelection](imagingselection.html): Who the study is about\r\n* [ImagingStudy](imagingstudy.html): Who the study is about\r\n* [Immunization](immunization.html): The patient for the vaccination record\r\n* [ImmunizationEvaluation](immunizationevaluation.html): The patient being evaluated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Who this profile is for\r\n* [Invoice](invoice.html): Recipient(s) of goods and services\r\n* [List](list.html): If all resources have the same subject\r\n* [MeasureReport](measurereport.html): The identity of a patient to search for individual measure report results for\r\n* [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for\r\n* [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for\r\n* [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.\r\n* [MolecularSequence](molecularsequence.html): The subject that the sequence is about\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific patient.\r\n* [NutritionOrder](nutritionorder.html): The identity of the individual or set of individuals who requires the diet, formula or nutritional supplement\r\n* [Observation](observation.html): The subject that the observation is about (if patient)\r\n* [Person](person.html): The Person links to this Patient\r\n* [Procedure](procedure.html): Search by subject - a patient\r\n* [Provenance](provenance.html): Where the activity involved patient data\r\n* [QuestionnaireResponse](questionnaireresponse.html): The patient that is the subject of the questionnaire response\r\n* [RelatedPerson](relatedperson.html): The patient this related person is related to\r\n* [RequestOrchestration](requestorchestration.html): The identity of a patient to search for request orchestrations\r\n* [ResearchSubject](researchsubject.html): Who or what is part of study\r\n* [RiskAssessment](riskassessment.html): Who/what does assessment apply to?\r\n* [ServiceRequest](servicerequest.html): Search by subject - a patient\r\n* [Specimen](specimen.html): The patient the specimen comes from\r\n* [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied\r\n* [SupplyRequest](supplyrequest.html): The patient or subject for whom the supply is destined\r\n* [Task](task.html): Search by patient\r\n* [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for\r\n"
* rest.resource[=].searchParam[+].name = "section-code-text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-section-code-text"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Search on the section narrative of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): Account number\r\n* [AdverseEvent](adverseevent.html): Business identifier for the event\r\n* [AllergyIntolerance](allergyintolerance.html): External ids for this item\r\n* [Appointment](appointment.html): An Identifier of the Appointment\r\n* [AppointmentResponse](appointmentresponse.html): An Identifier in this appointment response\r\n* [Basic](basic.html): Business identifier\r\n* [BodyStructure](bodystructure.html): Bodystructure identifier\r\n* [CarePlan](careplan.html): External Ids for this plan\r\n* [CareTeam](careteam.html): External Ids for this team\r\n* [ChargeItem](chargeitem.html): Business Identifier for item\r\n* [Claim](claim.html): The primary identifier of the financial resource\r\n* [ClaimResponse](claimresponse.html): The identity of the ClaimResponse\r\n* [ClinicalImpression](clinicalimpression.html): Business identifier\r\n* [Communication](communication.html): Unique identifier\r\n* [CommunicationRequest](communicationrequest.html): Unique identifier\r\n* [Composition](composition.html): Version-independent identifier for the Composition\r\n* [Condition](condition.html): A unique identifier of the condition record\r\n* [Consent](consent.html): Identifier for this record (external references)\r\n* [Contract](contract.html): The identity of the contract\r\n* [Coverage](coverage.html): The primary identifier of the insured and the coverage\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The business identifier of the Eligibility\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The business identifier\r\n* [DetectedIssue](detectedissue.html): Unique id for the detected issue\r\n* [DeviceRequest](devicerequest.html): Business identifier for request/order\r\n* [DeviceUsage](deviceusage.html): Search by identifier\r\n* [DiagnosticReport](diagnosticreport.html): An identifier for the report\r\n* [DocumentReference](documentreference.html): Identifier of the attachment binary\r\n* [Encounter](encounter.html): Identifier(s) by which this encounter is known\r\n* [EnrollmentRequest](enrollmentrequest.html): The business identifier of the Enrollment\r\n* [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The business identifier of the Explanation of Benefit\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier\r\n* [Flag](flag.html): Business identifier\r\n* [Goal](goal.html): External Ids for this goal\r\n* [GuidanceResponse](guidanceresponse.html): The identifier of the guidance response\r\n* [ImagingSelection](imagingselection.html): Identifiers for the imaging selection\r\n* [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID\r\n* [Immunization](immunization.html): Business identifier\r\n* [ImmunizationEvaluation](immunizationevaluation.html): ID of the evaluation\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Business identifier\r\n* [Invoice](invoice.html): Business Identifier for item\r\n* [List](list.html): Business identifier\r\n* [MeasureReport](measurereport.html): External identifier of the measure report to be returned\r\n* [Medication](medication.html): Returns medications with this external identifier\r\n* [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier\r\n* [MedicationStatement](medicationstatement.html): Return statements with this external identifier\r\n* [MolecularSequence](molecularsequence.html): The unique identity for a particular sequence\r\n* [NutritionIntake](nutritionintake.html): Return statements with this external identifier\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier\r\n* [Observation](observation.html): The unique id for a particular observation\r\n* [Person](person.html): A person Identifier\r\n* [Procedure](procedure.html): A unique identifier for a procedure\r\n* [QuestionnaireResponse](questionnaireresponse.html): The unique identifier for the questionnaire response\r\n* [RelatedPerson](relatedperson.html): An Identifier of the RelatedPerson\r\n* [RequestOrchestration](requestorchestration.html): External identifiers for the request orchestration\r\n* [ResearchSubject](researchsubject.html): Business Identifier for research subject in a study\r\n* [RiskAssessment](riskassessment.html): Unique identifier for the assessment\r\n* [ServiceRequest](servicerequest.html): Identifiers assigned to this order\r\n* [Specimen](specimen.html): The unique identifier associated with the specimen\r\n* [SupplyDelivery](supplydelivery.html): External identifier\r\n* [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest\r\n* [Task](task.html): Search for a task instance by its business identifier\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier\r\n"
* rest.resource[=].searchParam[+].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "The period covered by the documentation"
* rest.resource[=].searchParam[+].name = "event-code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-event-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Main clinical acts documented as codes"
* rest.resource[=].searchParam[+].name = "author"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-author"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what authored the composition"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "encounter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-encounter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AuditEvent](auditevent.html): Encounter related to the activity recorded in the AuditEvent\r\n* [CarePlan](careplan.html): The Encounter during which this CarePlan was created\r\n* [ChargeItem](chargeitem.html): Encounter associated with event\r\n* [Claim](claim.html): Encounters associated with a billed line item\r\n* [ClinicalImpression](clinicalimpression.html): The Encounter during which this ClinicalImpression was created\r\n* [Communication](communication.html): The Encounter during which this Communication was created\r\n* [CommunicationRequest](communicationrequest.html): The Encounter during which this CommunicationRequest was created\r\n* [Composition](composition.html): Context of the Composition\r\n* [Condition](condition.html): The Encounter during which this Condition was created\r\n* [DeviceRequest](devicerequest.html): Encounter during which request was created\r\n* [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made\r\n* [EncounterHistory](encounterhistory.html): The Encounter associated with this set of history values\r\n* [ExplanationOfBenefit](explanationofbenefit.html): Encounters associated with a billed line item\r\n* [Flag](flag.html): Alert relevant during encounter\r\n* [ImagingStudy](imagingstudy.html): The context of the study\r\n* [List](list.html): Context in which list created\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with a specific encounter\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific encounter\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific encounter\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier\r\n* [Observation](observation.html): Encounter related to the observation\r\n* [Procedure](procedure.html): The Encounter during which this Procedure was created\r\n* [Provenance](provenance.html): Encounter related to the Provenance\r\n* [QuestionnaireResponse](questionnaireresponse.html): Encounter associated with the questionnaire response\r\n* [RequestOrchestration](requestorchestration.html): The encounter the request orchestration applies to\r\n* [RiskAssessment](riskassessment.html): Where was assessment performed?\r\n* [ServiceRequest](servicerequest.html): An encounter in which this request is made\r\n* [Task](task.html): Search by encounter\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier\r\n"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The business version of the activity definition"
* rest.resource[=].searchParam[+].name = "attester"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-attester"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who attested the composition"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "The uri that identifies the activity definition"
* rest.resource[=].searchParam[+].name = "event-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-event-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Main clinical acts documented as references"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "entry"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-entry"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A reference to data that supports this section"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Categorization of Composition"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Composition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "preliminary | final | amended | entered-in-error"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[=].operation[+].name = "document"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Composition-i-document"
* rest.resource[+].type = #ImplementationGuide
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ImplementationGuide"
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "ImplementationGuide:depends-on"
* rest.resource[=].searchInclude[+] = "ImplementationGuide:global"
* rest.resource[=].searchInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:depends-on"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "resource"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Location of the resource"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "experimental"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "For testing purposes, not real usage"
* rest.resource[=].searchParam[+].name = "global"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-global"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Profile that all resources must conform to"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "depends-on"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-depends-on"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Identity of the IG that this depends on"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ImplementationGuide-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "uninstall"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ImplementationGuide-t-uninstall"
* rest.resource[=].operation[+].name = "install"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ImplementationGuide-t-install"
* rest.resource[+].type = #Ingredient
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Ingredient"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Ingredient:for"
* rest.resource[=].searchInclude[+] = "Ingredient:manufacturer"
* rest.resource[=].searchInclude[+] = "Ingredient:substance"
* rest.resource[=].searchInclude[+] = "Ingredient:substance-definition"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An identifier or code by which the ingredient can be referenced"
* rest.resource[=].searchParam[+].name = "role"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-role"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A classification of the ingredient identifying its purpose within the product, e.g. active, inactive"
* rest.resource[=].searchParam[+].name = "substance"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-substance"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Reference to a resource (by instance)"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "for"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-for"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The product which this ingredient is a constituent part of"
* rest.resource[=].searchParam[+].name = "substance-code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-substance-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Reference to a concept (by class)"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "strength-concentration-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-strength-concentration-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Ingredient concentration strength as quantity"
* rest.resource[=].searchParam[+].name = "manufacturer"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-manufacturer"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The organization that manufactures this ingredient"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "substance-definition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-substance-definition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Reference to a resource (by instance)"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "function"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-function"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: Antioxidant, Alkalizing Agent"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "strength-presentation-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-strength-presentation-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Ingredient presentation strength as quantity"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Ingredient-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of this ingredient. Enables tracking the life-cycle of the content"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #List
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/List"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "List:encounter"
* rest.resource[=].searchInclude[+] = "List:item"
* rest.resource[=].searchInclude[+] = "List:patient"
* rest.resource[=].searchInclude[+] = "List:source"
* rest.resource[=].searchInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): When the event occurred\r\n* [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded\r\n* [Appointment](appointment.html): Appointment date/time.\r\n* [AuditEvent](auditevent.html): Time when the event was recorded\r\n* [CarePlan](careplan.html): Time period plan covers\r\n* [CareTeam](careteam.html): A date within the coverage time period.\r\n* [ClinicalImpression](clinicalimpression.html): When the assessment was documented\r\n* [Composition](composition.html): Composition editing time\r\n* [Consent](consent.html): When consent was agreed to\r\n* [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report\r\n* [DocumentReference](documentreference.html): When this document reference was created\r\n* [Encounter](encounter.html): A date within the actualPeriod the Encounter lasted\r\n* [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period\r\n* [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated\r\n* [Flag](flag.html): Time period when flag is active\r\n* [Immunization](immunization.html): Vaccination  (non)-Administration Date\r\n* [ImmunizationEvaluation](immunizationevaluation.html): Date the evaluation was generated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Date recommendation(s) created\r\n* [Invoice](invoice.html): Invoice date / posting date\r\n* [List](list.html): When the list was prepared\r\n* [MeasureReport](measurereport.html): The date of the measure report\r\n* [NutritionIntake](nutritionintake.html): Date when patient was taking (or not taking) the medication\r\n* [Observation](observation.html): Clinically relevant time/time-period for observation\r\n* [Procedure](procedure.html): When the procedure occurred or is occurring\r\n* [ResearchSubject](researchsubject.html): Start and end of participation\r\n* [RiskAssessment](riskassessment.html): When was assessment made?\r\n* [SupplyRequest](supplyrequest.html): When the request was made\r\n"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): Account number\r\n* [AdverseEvent](adverseevent.html): Business identifier for the event\r\n* [AllergyIntolerance](allergyintolerance.html): External ids for this item\r\n* [Appointment](appointment.html): An Identifier of the Appointment\r\n* [AppointmentResponse](appointmentresponse.html): An Identifier in this appointment response\r\n* [Basic](basic.html): Business identifier\r\n* [BodyStructure](bodystructure.html): Bodystructure identifier\r\n* [CarePlan](careplan.html): External Ids for this plan\r\n* [CareTeam](careteam.html): External Ids for this team\r\n* [ChargeItem](chargeitem.html): Business Identifier for item\r\n* [Claim](claim.html): The primary identifier of the financial resource\r\n* [ClaimResponse](claimresponse.html): The identity of the ClaimResponse\r\n* [ClinicalImpression](clinicalimpression.html): Business identifier\r\n* [Communication](communication.html): Unique identifier\r\n* [CommunicationRequest](communicationrequest.html): Unique identifier\r\n* [Composition](composition.html): Version-independent identifier for the Composition\r\n* [Condition](condition.html): A unique identifier of the condition record\r\n* [Consent](consent.html): Identifier for this record (external references)\r\n* [Contract](contract.html): The identity of the contract\r\n* [Coverage](coverage.html): The primary identifier of the insured and the coverage\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The business identifier of the Eligibility\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The business identifier\r\n* [DetectedIssue](detectedissue.html): Unique id for the detected issue\r\n* [DeviceRequest](devicerequest.html): Business identifier for request/order\r\n* [DeviceUsage](deviceusage.html): Search by identifier\r\n* [DiagnosticReport](diagnosticreport.html): An identifier for the report\r\n* [DocumentReference](documentreference.html): Identifier of the attachment binary\r\n* [Encounter](encounter.html): Identifier(s) by which this encounter is known\r\n* [EnrollmentRequest](enrollmentrequest.html): The business identifier of the Enrollment\r\n* [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The business identifier of the Explanation of Benefit\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier\r\n* [Flag](flag.html): Business identifier\r\n* [Goal](goal.html): External Ids for this goal\r\n* [GuidanceResponse](guidanceresponse.html): The identifier of the guidance response\r\n* [ImagingSelection](imagingselection.html): Identifiers for the imaging selection\r\n* [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID\r\n* [Immunization](immunization.html): Business identifier\r\n* [ImmunizationEvaluation](immunizationevaluation.html): ID of the evaluation\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Business identifier\r\n* [Invoice](invoice.html): Business Identifier for item\r\n* [List](list.html): Business identifier\r\n* [MeasureReport](measurereport.html): External identifier of the measure report to be returned\r\n* [Medication](medication.html): Returns medications with this external identifier\r\n* [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier\r\n* [MedicationStatement](medicationstatement.html): Return statements with this external identifier\r\n* [MolecularSequence](molecularsequence.html): The unique identity for a particular sequence\r\n* [NutritionIntake](nutritionintake.html): Return statements with this external identifier\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier\r\n* [Observation](observation.html): The unique id for a particular observation\r\n* [Person](person.html): A person Identifier\r\n* [Procedure](procedure.html): A unique identifier for a procedure\r\n* [QuestionnaireResponse](questionnaireresponse.html): The unique identifier for the questionnaire response\r\n* [RelatedPerson](relatedperson.html): An Identifier of the RelatedPerson\r\n* [RequestOrchestration](requestorchestration.html): External identifiers for the request orchestration\r\n* [ResearchSubject](researchsubject.html): Business Identifier for research subject in a study\r\n* [RiskAssessment](riskassessment.html): Unique identifier for the assessment\r\n* [ServiceRequest](servicerequest.html): Identifiers assigned to this order\r\n* [Specimen](specimen.html): The unique identifier associated with the specimen\r\n* [SupplyDelivery](supplydelivery.html): External identifier\r\n* [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest\r\n* [Task](task.html): Search for a task instance by its business identifier\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier\r\n"
* rest.resource[=].searchParam[+].name = "empty-reason"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-empty-reason"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Why list is empty"
* rest.resource[=].searchParam[+].name = "item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Actual entry"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AdverseEvent](adverseevent.html): Event or incident that occurred or was averted\r\n* [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance\r\n* [AuditEvent](auditevent.html): More specific code for the event\r\n* [Basic](basic.html): Kind of Resource\r\n* [ChargeItem](chargeitem.html): A code that identifies the charge, like a billing code\r\n* [Condition](condition.html): Code for the condition\r\n* [DetectedIssue](detectedissue.html): Issue Type, e.g. drug-drug, duplicate therapy, etc.\r\n* [DeviceRequest](devicerequest.html): Code for what is being requested/ordered\r\n* [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result\r\n* [FamilyMemberHistory](familymemberhistory.html): A search by a condition code\r\n* [ImagingSelection](imagingselection.html): The imaging selection status\r\n* [List](list.html): What the purpose of this list is\r\n* [Medication](medication.html): Returns medications for a specific code\r\n* [MedicationAdministration](medicationadministration.html): Return administrations of this medication code\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code\r\n* [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code\r\n* [MedicationStatement](medicationstatement.html): Return statements of this medication code\r\n* [NutritionIntake](nutritionintake.html): Returns statements of this code of NutritionIntake\r\n* [Observation](observation.html): The code of the observation type\r\n* [Procedure](procedure.html): A code to identify a  procedure\r\n* [RequestOrchestration](requestorchestration.html): The code of the request orchestration\r\n* [Task](task.html): Search by task code\r\n"
* rest.resource[=].searchParam[+].name = "notes"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-notes"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The annotation  - text content (as markdown)"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "If all resources have the same subject"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "encounter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-encounter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [AuditEvent](auditevent.html): Encounter related to the activity recorded in the AuditEvent\r\n* [CarePlan](careplan.html): The Encounter during which this CarePlan was created\r\n* [ChargeItem](chargeitem.html): Encounter associated with event\r\n* [Claim](claim.html): Encounters associated with a billed line item\r\n* [ClinicalImpression](clinicalimpression.html): The Encounter during which this ClinicalImpression was created\r\n* [Communication](communication.html): The Encounter during which this Communication was created\r\n* [CommunicationRequest](communicationrequest.html): The Encounter during which this CommunicationRequest was created\r\n* [Composition](composition.html): Context of the Composition\r\n* [Condition](condition.html): The Encounter during which this Condition was created\r\n* [DeviceRequest](devicerequest.html): Encounter during which request was created\r\n* [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made\r\n* [EncounterHistory](encounterhistory.html): The Encounter associated with this set of history values\r\n* [ExplanationOfBenefit](explanationofbenefit.html): Encounters associated with a billed line item\r\n* [Flag](flag.html): Alert relevant during encounter\r\n* [ImagingStudy](imagingstudy.html): The context of the study\r\n* [List](list.html): Context in which list created\r\n* [MedicationDispense](medicationdispense.html): Returns dispenses with a specific encounter\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific encounter\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific encounter\r\n* [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier\r\n* [Observation](observation.html): Encounter related to the observation\r\n* [Procedure](procedure.html): The Encounter during which this Procedure was created\r\n* [Provenance](provenance.html): Encounter related to the Provenance\r\n* [QuestionnaireResponse](questionnaireresponse.html): Encounter associated with the questionnaire response\r\n* [RequestOrchestration](requestorchestration.html): The encounter the request orchestration applies to\r\n* [RiskAssessment](riskassessment.html): Where was assessment performed?\r\n* [ServiceRequest](servicerequest.html): An encounter in which this request is made\r\n* [Task](task.html): Search by encounter\r\n* [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier\r\n"
* rest.resource[=].searchParam[+].name = "source"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-source"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Who and/or what defined the list contents (aka Author)"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Descriptive name for the list"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [Account](account.html): The entity that caused the expenses\r\n* [AdverseEvent](adverseevent.html): Subject impacted by event\r\n* [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for\r\n* [Appointment](appointment.html): One of the individuals of the appointment is this patient\r\n* [AppointmentResponse](appointmentresponse.html): This Response is for this Patient\r\n* [AuditEvent](auditevent.html): Where the activity involved patient data\r\n* [Basic](basic.html): Identifies the focus of this resource\r\n* [BodyStructure](bodystructure.html): Who this is about\r\n* [CarePlan](careplan.html): Who the care plan is for\r\n* [CareTeam](careteam.html): Who care team is for\r\n* [ChargeItem](chargeitem.html): Individual service was done for/to\r\n* [Claim](claim.html): Patient receiving the products or services\r\n* [ClaimResponse](claimresponse.html): The subject of care\r\n* [ClinicalImpression](clinicalimpression.html): Patient assessed\r\n* [Communication](communication.html): Focus of message\r\n* [CommunicationRequest](communicationrequest.html): Focus of message\r\n* [Composition](composition.html): Who and/or what the composition is about\r\n* [Condition](condition.html): Who has the condition?\r\n* [Consent](consent.html): Who the consent applies to\r\n* [Contract](contract.html): The identity of the subject of the contract (if a patient)\r\n* [Coverage](coverage.html): Retrieve coverages for a patient\r\n* [CoverageEligibilityRequest](coverageeligibilityrequest.html): The reference to the patient\r\n* [CoverageEligibilityResponse](coverageeligibilityresponse.html): The reference to the patient\r\n* [DetectedIssue](detectedissue.html): Associated patient\r\n* [DeviceRequest](devicerequest.html): Individual the service is ordered for\r\n* [DeviceUsage](deviceusage.html): Search by patient who used / uses the device\r\n* [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient\r\n* [DocumentReference](documentreference.html): Who/what is the subject of the document\r\n* [Encounter](encounter.html): The patient present at the encounter\r\n* [EnrollmentRequest](enrollmentrequest.html): The party to be enrolled\r\n* [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care\r\n* [ExplanationOfBenefit](explanationofbenefit.html): The reference to the patient\r\n* [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for\r\n* [Flag](flag.html): The identity of a subject to list flags for\r\n* [Goal](goal.html): Who this goal is intended for\r\n* [GuidanceResponse](guidanceresponse.html): The identity of a patient to search for guidance response results\r\n* [ImagingSelection](imagingselection.html): Who the study is about\r\n* [ImagingStudy](imagingstudy.html): Who the study is about\r\n* [Immunization](immunization.html): The patient for the vaccination record\r\n* [ImmunizationEvaluation](immunizationevaluation.html): The patient being evaluated\r\n* [ImmunizationRecommendation](immunizationrecommendation.html): Who this profile is for\r\n* [Invoice](invoice.html): Recipient(s) of goods and services\r\n* [List](list.html): If all resources have the same subject\r\n* [MeasureReport](measurereport.html): The identity of a patient to search for individual measure report results for\r\n* [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for\r\n* [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for\r\n* [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient\r\n* [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.\r\n* [MolecularSequence](molecularsequence.html): The subject that the sequence is about\r\n* [NutritionIntake](nutritionintake.html): Returns statements for a specific patient.\r\n* [NutritionOrder](nutritionorder.html): The identity of the individual or set of individuals who requires the diet, formula or nutritional supplement\r\n* [Observation](observation.html): The subject that the observation is about (if patient)\r\n* [Person](person.html): The Person links to this Patient\r\n* [Procedure](procedure.html): Search by subject - a patient\r\n* [Provenance](provenance.html): Where the activity involved patient data\r\n* [QuestionnaireResponse](questionnaireresponse.html): The patient that is the subject of the questionnaire response\r\n* [RelatedPerson](relatedperson.html): The patient this related person is related to\r\n* [RequestOrchestration](requestorchestration.html): The identity of a patient to search for request orchestrations\r\n* [ResearchSubject](researchsubject.html): Who or what is part of study\r\n* [RiskAssessment](riskassessment.html): Who/what does assessment apply to?\r\n* [ServiceRequest](servicerequest.html): Search by subject - a patient\r\n* [Specimen](specimen.html): The patient the specimen comes from\r\n* [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied\r\n* [SupplyRequest](supplyrequest.html): The patient or subject for whom the supply is destined\r\n* [Task](task.html): Search by patient\r\n* [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for\r\n"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/List-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "current | retired | entered-in-error"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #ManufacturedItemDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "AdministrableProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:for"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:biological"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:contained-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:device"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:medication"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:nutrition"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:package"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Unique identifier"
* rest.resource[=].searchParam[+].name = "ingredient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-ingredient"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An ingredient of this item"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-name"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A descriptive name applied to this item"
* rest.resource[=].searchParam[+].name = "dose-form"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-dose-form"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Dose form as manufactured and before any transformation into the pharmaceutical product"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of this item. Enables tracking the life-cycle of the content."
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #MedicinalProductDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "MedicinalProductDefinition:contact"
* rest.resource[=].searchInclude[+] = "MedicinalProductDefinition:master-file"
* rest.resource[=].searchRevInclude[0] = "AdministrableProductDefinition:form-of"
* rest.resource[=].searchRevInclude[+] = "ClinicalUseDefinition:product"
* rest.resource[=].searchRevInclude[+] = "ClinicalUseDefinition:subject"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:for"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:package-for"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Business identifier for this product. Could be an MPID"
* rest.resource[=].searchParam[+].name = "ingredient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-ingredient"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "An ingredient of this product"
* rest.resource[=].searchParam[+].name = "master-file"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-master-file"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A master file for to the medicinal product (e.g. Pharmacovigilance System Master File)"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "name-language"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-name-language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Language code for this name"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Regulatory type, e.g. Investigational or Authorized"
* rest.resource[=].searchParam[+].name = "characteristic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-characteristic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows the key product features to be recorded, such as \"sugar free\", \"modified release\", \"parallel import\""
* rest.resource[=].searchParam[+].name = "characteristic-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-characteristic-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A category for the characteristic"
* rest.resource[=].searchParam[+].name = "product-classification"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-product-classification"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows the product to be classified by various systems"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "contact"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-contact"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A product specific contact, person (in a role), or an organization"
* rest.resource[=].searchParam[+].name = "domain"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-domain"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "If this medicine applies to human or veterinary uses"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The full product name"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicinalProductDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #OperationDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/OperationDefinition"
* rest.resource[=].interaction.code = #read
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "OperationDefinition:base"
* rest.resource[=].searchInclude[+] = "OperationDefinition:input-profile"
* rest.resource[=].searchInclude[+] = "OperationDefinition:output-profile"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "OperationDefinition:base"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Name used to invoke the operation"
* rest.resource[=].searchParam[+].name = "instance"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-instance"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Invoke on an instance?"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Invoke at the type level?"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "output-profile"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-output-profile"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Validation information for out parameters"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "kind"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-kind"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "operation | query"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "input-profile"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-input-profile"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Validation information for in parameters"
* rest.resource[=].searchParam[+].name = "system"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-system"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Invoke at the system level?"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "base"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-base"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Marks this as a profile of the base"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/OperationDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[+].type = #Organization
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Organization"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Organization:endpoint"
* rest.resource[=].searchInclude[+] = "Organization:partof"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:attester"
* rest.resource[=].searchRevInclude[+] = "Composition:author"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:manufacturer"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:source"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "MedicinalProductDefinition:contact"
* rest.resource[=].searchRevInclude[+] = "Organization:partof"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:holder"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "Subscription:owner"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Any identifier for the organization (not the accreditation issuer's identifier)"
* rest.resource[=].searchParam[+].name = "partof"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-partof"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "An organization of which this organization forms a part"
* rest.resource[=].searchParam[+].name = "address"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
* rest.resource[=].searchParam[+].name = "address-state"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-state"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A state specified in an address"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "active"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-active"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Is the Organization record active"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A code for the type of organization"
* rest.resource[=].searchParam[+].name = "address-postalcode"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-postalcode"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A postal code specified in an address"
* rest.resource[=].searchParam[+].name = "address-country"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-country"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A country specified in an address"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "endpoint"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-endpoint"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Technical endpoints providing access to services operated for the organization"
* rest.resource[=].searchParam[+].name = "phonetic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-phonetic"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A portion of the organization's name using some kind of phonetic matching algorithm"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "address-use"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-use"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A use code specified in an address"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A portion of the organization's name or alias"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "address-city"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address-city"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A city specified in an address"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #PackagedProductDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:biological"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:contained-item"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:device"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:manufactured-item"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:medication"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:nutrition"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:package"
* rest.resource[=].searchInclude[+] = "PackagedProductDefinition:package-for"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:biological"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:contained-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:device"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:manufactured-item"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:medication"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:nutrition"
* rest.resource[=].searchRevInclude[+] = "PackagedProductDefinition:package"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Unique identifier"
* rest.resource[=].searchParam[+].name = "package"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-package"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A complete packaged product within this packaged product"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "medication"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-medication"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A manufactured item of medication within this packaged product"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "manufactured-item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-manufactured-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A manufactured item of medication within this packaged product"
* rest.resource[=].searchParam[+].name = "nutrition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-nutrition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A nutrition product within this packaged product"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-name"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc."
* rest.resource[=].searchParam[+].name = "biological"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-biological"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A biologically derived product within this packaged product"
* rest.resource[=].searchParam[+].name = "package-for"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-package-for"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The product that this is a pack for"
* rest.resource[=].searchParam[+].name = "contained-item"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-contained-item"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Any of the contained items within this packaged product"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "device"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-device"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "A device within this packaged product"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PackagedProductDefinition-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #RegulatedAuthorization
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "RegulatedAuthorization:holder"
* rest.resource[=].searchInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Business identifier for the authorization, typically assigned by the authorizing body"
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The type of regulated product, treatment, facility or activity that is being authorized"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "case-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-case-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The defining type of case"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "holder"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-holder"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The organization that holds the granted authorization"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "region"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-region"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "case"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-case"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The case or procedure number"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/RegulatedAuthorization-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #SearchParameter
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/SearchParameter"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "SearchParameter:component"
* rest.resource[=].searchInclude[+] = "SearchParameter:derived-from"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "SearchParameter:component"
* rest.resource[=].searchRevInclude[+] = "SearchParameter:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Code used in URL"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "derived-from"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-derived-from"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Original definition for the search parameter"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "number | date | string | token | reference | composite | quantity | uri | special"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "target"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-target"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Types of resource (if a resource reference)"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "component"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-component"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Defines how the part works"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "base"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-base"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The resource type(s) this search parameter applies to"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SearchParameter-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #SubstanceDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "Ingredient:substance"
* rest.resource[=].searchRevInclude[+] = "Ingredient:substance-definition"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "RegulatedAuthorization:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "_language"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Identifier by which this substance is known"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The specific code"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "classification"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-classification"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "High or low level categorization, e.g. polymer vs. nucleic acid or linear vs. branch chain"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "domain"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-domain"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "If the substance applies to only human or veterinary use"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The actual name"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/SubstanceDefinition-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].operation[0].name = "validate"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-it-validate"
* rest.resource[=].operation[+].name = "meta-delete"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-delete"
* rest.resource[=].operation[=].documentation = "Delete tags, profiles, and/or security labels from a resource"
* rest.resource[=].operation[+].name = "meta-add"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-i-meta-add"
* rest.resource[=].operation[=].documentation = "Add tags, profiles, and/or security labels to a resource"
* rest.resource[=].operation[+].name = "meta"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-meta"
* rest.resource[=].operation[=].documentation = "Request a list of tags, profiles, and security labels for a specfic resource instance"
* rest.resource[=].operation[+].name = "expunge"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/Multi-its-expunge"
* rest.resource[+].type = #ValueSet
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ValueSet"
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/computablevalueset"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/executablevalueset"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/publishablevalueset"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalDelete = #single
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchRevInclude[0] = "CodeSystem:derived-from"
* rest.resource[=].searchRevInclude[+] = "CodeSystem:predecessor"
* rest.resource[=].searchRevInclude[+] = "Composition:entry"
* rest.resource[=].searchRevInclude[+] = "Composition:event-reference"
* rest.resource[=].searchRevInclude[+] = "Composition:related"
* rest.resource[=].searchRevInclude[+] = "Composition:subject"
* rest.resource[=].searchRevInclude[+] = "ImplementationGuide:resource"
* rest.resource[=].searchRevInclude[+] = "List:item"
* rest.resource[=].searchRevInclude[+] = "List:subject"
* rest.resource[=].searchRevInclude[+] = "ValueSet:derived-from"
* rest.resource[=].searchRevInclude[+] = "ValueSet:predecessor"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The activity definition publication date\r\n* [ActorDefinition](actordefinition.html): The Actor Definition publication date\r\n* [CapabilityStatement](capabilitystatement.html): The capability statement publication date\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The charge item definition publication date\r\n* [Citation](citation.html): The citation publication date\r\n* [CodeSystem](codesystem.html): The code system publication date\r\n* [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date\r\n* [ConceptMap](conceptmap.html): The concept map publication date\r\n* [ConditionDefinition](conditiondefinition.html): The condition definition publication date\r\n* [EventDefinition](eventdefinition.html): The event definition publication date\r\n* [Evidence](evidence.html): The evidence publication date\r\n* [EvidenceVariable](evidencevariable.html): The evidence variable publication date\r\n* [ExampleScenario](examplescenario.html): The example scenario publication date\r\n* [GraphDefinition](graphdefinition.html): The graph definition publication date\r\n* [ImplementationGuide](implementationguide.html): The implementation guide publication date\r\n* [Library](library.html): The library publication date\r\n* [Measure](measure.html): The measure publication date\r\n* [MessageDefinition](messagedefinition.html): The message definition publication date\r\n* [NamingSystem](namingsystem.html): The naming system publication date\r\n* [OperationDefinition](operationdefinition.html): The operation definition publication date\r\n* [PlanDefinition](plandefinition.html): The plan definition publication date\r\n* [Questionnaire](questionnaire.html): The questionnaire publication date\r\n* [Requirements](requirements.html): The requirements publication date\r\n* [SearchParameter](searchparameter.html): The search parameter publication date\r\n* [StructureDefinition](structuredefinition.html): The structure definition publication date\r\n* [StructureMap](structuremap.html): The structure map publication date\r\n* [SubscriptionTopic](subscriptiontopic.html): Date status first applied\r\n* [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date\r\n* [TestScript](testscript.html): The test script publication date\r\n* [ValueSet](valueset.html): The value set publication date\r\n"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "This special parameter searches for codes in the value set. See additional notes on the ValueSet resource"
* rest.resource[=].searchParam[+].name = "context-type-value"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-type-value"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide\r\n* [Library](library.html): A use context type and value assigned to the library\r\n* [Measure](measure.html): A use context type and value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Intended jurisdiction for the activity definition\r\n* [ActorDefinition](actordefinition.html): Intended jurisdiction for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Intended jurisdiction for the charge item definition\r\n* [Citation](citation.html): Intended jurisdiction for the citation\r\n* [CodeSystem](codesystem.html): Intended jurisdiction for the code system\r\n* [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Intended jurisdiction for the condition definition\r\n* [EventDefinition](eventdefinition.html): Intended jurisdiction for the event definition\r\n* [ExampleScenario](examplescenario.html): Intended jurisdiction for the example scenario\r\n* [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition\r\n* [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide\r\n* [Library](library.html): Intended jurisdiction for the library\r\n* [Measure](measure.html): Intended jurisdiction for the measure\r\n* [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition\r\n* [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system\r\n* [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition\r\n* [PlanDefinition](plandefinition.html): Intended jurisdiction for the plan definition\r\n* [Questionnaire](questionnaire.html): Intended jurisdiction for the questionnaire\r\n* [Requirements](requirements.html): Intended jurisdiction for the requirements\r\n* [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter\r\n* [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition\r\n* [StructureMap](structuremap.html): Intended jurisdiction for the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities\r\n* [TestScript](testscript.html): Intended jurisdiction for the test script\r\n* [ValueSet](valueset.html): Intended jurisdiction for the value set\r\n"
* rest.resource[=].searchParam[+].name = "derived-from"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-derived-from"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): A resource that the CodeSystem is derived from\r\n* [ConceptMap](conceptmap.html): A resource that the ConceptMap is derived from\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): A resource that the NamingSystem is derived from\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): A resource that the ValueSet is derived from\r\n"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The description of the activity definition\r\n* [ActorDefinition](actordefinition.html): The description of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The description of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The description of the charge item definition\r\n* [Citation](citation.html): The description of the citation\r\n* [CodeSystem](codesystem.html): The description of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition\r\n* [ConceptMap](conceptmap.html): The description of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The description of the condition definition\r\n* [EventDefinition](eventdefinition.html): The description of the event definition\r\n* [Evidence](evidence.html): The description of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The description of the evidence variable\r\n* [GraphDefinition](graphdefinition.html): The description of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The description of the implementation guide\r\n* [Library](library.html): The description of the library\r\n* [Measure](measure.html): The description of the measure\r\n* [MessageDefinition](messagedefinition.html): The description of the message definition\r\n* [NamingSystem](namingsystem.html): The description of the naming system\r\n* [OperationDefinition](operationdefinition.html): The description of the operation definition\r\n* [PlanDefinition](plandefinition.html): The description of the plan definition\r\n* [Questionnaire](questionnaire.html): The description of the questionnaire\r\n* [Requirements](requirements.html): The description of the requirements\r\n* [SearchParameter](searchparameter.html): The description of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The description of the structure definition\r\n* [StructureMap](structuremap.html): The description of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities\r\n* [TestScript](testscript.html): The description of the test script\r\n* [ValueSet](valueset.html): The description of the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A type of use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A type of use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A type of use context assigned to the charge item definition\r\n* [Citation](citation.html): A type of use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A type of use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A type of use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A type of use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A type of use context assigned to the event definition\r\n* [Evidence](evidence.html): A type of use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A type of use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A type of use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A type of use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide\r\n* [Library](library.html): A type of use context assigned to the library\r\n* [Measure](measure.html): A type of use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A type of use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A type of use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A type of use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A type of use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A type of use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A type of use context assigned to the test script\r\n* [ValueSet](valueset.html): A type of use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "predecessor"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-predecessor"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): What resource is being referenced\r\n* [CodeSystem](codesystem.html): The predecessor of the CodeSystem\r\n* [ConceptMap](conceptmap.html): The predecessor of the ConceptMap\r\n* [EventDefinition](eventdefinition.html): What resource is being referenced\r\n* [EvidenceVariable](evidencevariable.html): What resource is being referenced\r\n* [Library](library.html): What resource is being referenced\r\n* [Measure](measure.html): What resource is being referenced\r\n* [NamingSystem](namingsystem.html): The predecessor of the NamingSystem\r\n* [PlanDefinition](plandefinition.html): What resource is being referenced\r\n* [ValueSet](valueset.html): The predecessor of the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The human-friendly name of the activity definition\r\n* [ActorDefinition](actordefinition.html): The human-friendly name of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The human-friendly name of the charge item definition\r\n* [Citation](citation.html): The human-friendly name of the citation\r\n* [CodeSystem](codesystem.html): The human-friendly name of the code system\r\n* [ConceptMap](conceptmap.html): The human-friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The human-friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): The human-friendly name of the event definition\r\n* [Evidence](evidence.html): The human-friendly name of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The human-friendly name of the evidence variable\r\n* [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide\r\n* [Library](library.html): The human-friendly name of the library\r\n* [Measure](measure.html): The human-friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition\r\n* [ObservationDefinition](observationdefinition.html): Human-friendly name of the ObservationDefinition\r\n* [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): The human-friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): The human-friendly name of the questionnaire\r\n* [Requirements](requirements.html): The human-friendly name of the requirements\r\n* [SpecimenDefinition](specimendefinition.html): Human-friendly name of the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition\r\n* [StructureMap](structuremap.html): The human-friendly name of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Name for this SubscriptionTopic (Human friendly)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): The human-friendly name of the test script\r\n* [ValueSet](valueset.html): The human-friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-reference"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "A code system included or excluded in the value set or an imported value set"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A quantity- or range-valued use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A quantity- or range-valued use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A quantity- or range-valued use context assigned to the charge item definition\r\n* [Citation](citation.html): A quantity- or range-valued use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A quantity- or range-valued use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A quantity- or range-valued use context assigned to the event definition\r\n* [Evidence](evidence.html): A quantity- or range-valued use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A quantity- or range-valued use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A quantity- or range-valued use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A quantity- or range-valued use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide\r\n* [Library](library.html): A quantity- or range-valued use context assigned to the library\r\n* [Measure](measure.html): A quantity- or range-valued use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A quantity- or range-valued use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A quantity- or range-valued use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A quantity- or range-valued use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A quantity- or range-valued use context assigned to the test script\r\n* [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "effective"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-effective"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The time during which the activity definition is intended to be in use\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The time during which the charge item definition is intended to be in use\r\n* [Citation](citation.html): The time during which the citation is intended to be in use\r\n* [CodeSystem](codesystem.html): The time during which the CodeSystem is intended to be in use\r\n* [ConceptMap](conceptmap.html): The time during which the ConceptMap is intended to be in use\r\n* [EventDefinition](eventdefinition.html): The time during which the event definition is intended to be in use\r\n* [Library](library.html): The time during which the library is intended to be in use\r\n* [Measure](measure.html): The time during which the measure is intended to be in use\r\n* [NamingSystem](namingsystem.html): The time during which the NamingSystem is intended to be in use\r\n* [PlanDefinition](plandefinition.html): The time during which the plan definition is intended to be in use\r\n* [Questionnaire](questionnaire.html): The time during which the questionnaire is intended to be in use\r\n* [ValueSet](valueset.html): The time during which the ValueSet is intended to be in use\r\n"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context assigned to the charge item definition\r\n* [Citation](citation.html): A use context assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context assigned to the event definition\r\n* [Evidence](evidence.html): A use context assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide\r\n* [Library](library.html): A use context assigned to the library\r\n* [Measure](measure.html): A use context assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context assigned to the test script\r\n* [ValueSet](valueset.html): A use context assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "context-type-quantity"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-context-type-quantity"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): A use context type and quantity- or range-based value assigned to the activity definition\r\n* [ActorDefinition](actordefinition.html): A use context type and quantity- or range-based value assigned to the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): A use context type and quantity- or range-based value assigned to the charge item definition\r\n* [Citation](citation.html): A use context type and quantity- or range-based value assigned to the citation\r\n* [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition\r\n* [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map\r\n* [ConditionDefinition](conditiondefinition.html): A use context type and quantity- or range-based value assigned to the condition definition\r\n* [EventDefinition](eventdefinition.html): A use context type and quantity- or range-based value assigned to the event definition\r\n* [Evidence](evidence.html): A use context type and quantity- or range-based value assigned to the evidence\r\n* [EvidenceReport](evidencereport.html): A use context type and quantity- or range-based value assigned to the evidence report\r\n* [EvidenceVariable](evidencevariable.html): A use context type and quantity- or range-based value assigned to the evidence variable\r\n* [ExampleScenario](examplescenario.html): A use context type and quantity- or range-based value assigned to the example scenario\r\n* [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition\r\n* [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide\r\n* [Library](library.html): A use context type and quantity- or range-based value assigned to the library\r\n* [Measure](measure.html): A use context type and quantity- or range-based value assigned to the measure\r\n* [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition\r\n* [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system\r\n* [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition\r\n* [PlanDefinition](plandefinition.html): A use context type and quantity- or range-based value assigned to the plan definition\r\n* [Questionnaire](questionnaire.html): A use context type and quantity- or range-based value assigned to the questionnaire\r\n* [Requirements](requirements.html): A use context type and quantity- or range-based value assigned to the requirements\r\n* [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter\r\n* [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition\r\n* [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities\r\n* [TestScript](testscript.html): A use context type and quantity- or range-based value assigned to the test script\r\n* [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set\r\n"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): External identifier for the activity definition\r\n* [ActorDefinition](actordefinition.html): External identifier for the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): External identifier for the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): External identifier for the charge item definition\r\n* [Citation](citation.html): External identifier for the citation\r\n* [CodeSystem](codesystem.html): External identifier for the code system\r\n* [ConceptMap](conceptmap.html): External identifier for the concept map\r\n* [ConditionDefinition](conditiondefinition.html): External identifier for the condition definition\r\n* [EventDefinition](eventdefinition.html): External identifier for the event definition\r\n* [Evidence](evidence.html): External identifier for the evidence\r\n* [EvidenceReport](evidencereport.html): External identifier for the evidence report\r\n* [EvidenceVariable](evidencevariable.html): External identifier for the evidence variable\r\n* [ExampleScenario](examplescenario.html): External identifier for the example scenario\r\n* [GraphDefinition](graphdefinition.html): External identifier for the graph definition\r\n* [ImplementationGuide](implementationguide.html): External identifier for the implementation guide\r\n* [Library](library.html): External identifier for the library\r\n* [Measure](measure.html): External identifier for the measure\r\n* [MedicationKnowledge](medicationknowledge.html): Business identifier for this medication\r\n* [MessageDefinition](messagedefinition.html): External identifier for the message definition\r\n* [NamingSystem](namingsystem.html): External identifier for the naming system\r\n* [ObservationDefinition](observationdefinition.html): The unique identifier associated with the specimen definition\r\n* [OperationDefinition](operationdefinition.html): External identifier for the search parameter\r\n* [PlanDefinition](plandefinition.html): External identifier for the plan definition\r\n* [Questionnaire](questionnaire.html): External identifier for the questionnaire\r\n* [Requirements](requirements.html): External identifier for the requirements\r\n* [SearchParameter](searchparameter.html): External identifier for the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The unique identifier associated with the SpecimenDefinition\r\n* [StructureDefinition](structuredefinition.html): External identifier for the structure definition\r\n* [StructureMap](structuremap.html): External identifier for the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business Identifier for SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): External identifier for the terminology capabilities\r\n* [TestPlan](testplan.html): An identifier for the test plan\r\n* [TestScript](testscript.html): External identifier for the test script\r\n* [ValueSet](valueset.html): External identifier for the value set\r\n"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The business version of the activity definition\r\n* [ActorDefinition](actordefinition.html): The business version of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The business version of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The business version of the charge item definition\r\n* [Citation](citation.html): The business version of the citation\r\n* [CodeSystem](codesystem.html): The business version of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition\r\n* [ConceptMap](conceptmap.html): The business version of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The business version of the condition definition\r\n* [EventDefinition](eventdefinition.html): The business version of the event definition\r\n* [Evidence](evidence.html): The business version of the evidence\r\n* [EvidenceVariable](evidencevariable.html): The business version of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The business version of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The business version of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The business version of the implementation guide\r\n* [Library](library.html): The business version of the library\r\n* [Measure](measure.html): The business version of the measure\r\n* [MessageDefinition](messagedefinition.html): The business version of the message definition\r\n* [NamingSystem](namingsystem.html): The business version of the naming system\r\n* [OperationDefinition](operationdefinition.html): The business version of the operation definition\r\n* [PlanDefinition](plandefinition.html): The business version of the plan definition\r\n* [Questionnaire](questionnaire.html): The business version of the questionnaire\r\n* [Requirements](requirements.html): The business version of the requirements\r\n* [SearchParameter](searchparameter.html): The business version of the search parameter\r\n* [StructureDefinition](structuredefinition.html): The business version of the structure definition\r\n* [StructureMap](structuremap.html): The business version of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Business version of the SubscriptionTopic\r\n* [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities\r\n* [TestScript](testscript.html): The business version of the test script\r\n* [ValueSet](valueset.html): The business version of the value set\r\n"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The uri that identifies the activity definition\r\n* [ActorDefinition](actordefinition.html): The uri that identifies the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The uri that identifies the charge item definition\r\n* [Citation](citation.html): The uri that identifies the citation\r\n* [CodeSystem](codesystem.html): The uri that identifies the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition\r\n* [ConceptMap](conceptmap.html): The URI that identifies the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The uri that identifies the condition definition\r\n* [EventDefinition](eventdefinition.html): The uri that identifies the event definition\r\n* [Evidence](evidence.html): The uri that identifies the evidence\r\n* [EvidenceReport](evidencereport.html): The uri that identifies the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The uri that identifies the evidence variable\r\n* [ExampleScenario](examplescenario.html): The uri that identifies the example scenario\r\n* [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition\r\n* [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide\r\n* [Library](library.html): The uri that identifies the library\r\n* [Measure](measure.html): The uri that identifies the measure\r\n* [MessageDefinition](messagedefinition.html): The uri that identifies the message definition\r\n* [NamingSystem](namingsystem.html): The uri that identifies the naming system\r\n* [ObservationDefinition](observationdefinition.html): The uri that identifies the observation definition\r\n* [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition\r\n* [PlanDefinition](plandefinition.html): The uri that identifies the plan definition\r\n* [Questionnaire](questionnaire.html): The uri that identifies the questionnaire\r\n* [Requirements](requirements.html): The uri that identifies the requirements\r\n* [SearchParameter](searchparameter.html): The uri that identifies the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): The uri that identifies the specimen definition\r\n* [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition\r\n* [StructureMap](structuremap.html): The uri that identifies the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): Logical canonical URL to reference this SubscriptionTopic (globally unique)\r\n* [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities\r\n* [TestPlan](testplan.html): The uri that identifies the test plan\r\n* [TestScript](testscript.html): The uri that identifies the test script\r\n* [ValueSet](valueset.html): The uri that identifies the value set\r\n"
* rest.resource[=].searchParam[+].name = "expansion"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-expansion"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Identifies the value set expansion (business identifier)"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Computationally friendly name of the activity definition\r\n* [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement\r\n* [Citation](citation.html): Computationally friendly name of the citation\r\n* [CodeSystem](codesystem.html): Computationally friendly name of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition\r\n* [ConceptMap](conceptmap.html): Computationally friendly name of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Computationally friendly name of the condition definition\r\n* [EventDefinition](eventdefinition.html): Computationally friendly name of the event definition\r\n* [EvidenceVariable](evidencevariable.html): Computationally friendly name of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Computationally friendly name of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide\r\n* [Library](library.html): Computationally friendly name of the library\r\n* [Measure](measure.html): Computationally friendly name of the measure\r\n* [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition\r\n* [NamingSystem](namingsystem.html): Computationally friendly name of the naming system\r\n* [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition\r\n* [PlanDefinition](plandefinition.html): Computationally friendly name of the plan definition\r\n* [Questionnaire](questionnaire.html): Computationally friendly name of the questionnaire\r\n* [Requirements](requirements.html): Computationally friendly name of the requirements\r\n* [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition\r\n* [StructureMap](structuremap.html): Computationally friendly name of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities\r\n* [TestScript](testscript.html): Computationally friendly name of the test script\r\n* [ValueSet](valueset.html): Computationally friendly name of the value set\r\n"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Name of the publisher of the activity definition\r\n* [ActorDefinition](actordefinition.html): Name of the publisher of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): Name of the publisher of the charge item definition\r\n* [Citation](citation.html): Name of the publisher of the citation\r\n* [CodeSystem](codesystem.html): Name of the publisher of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition\r\n* [ConceptMap](conceptmap.html): Name of the publisher of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): Name of the publisher of the condition definition\r\n* [EventDefinition](eventdefinition.html): Name of the publisher of the event definition\r\n* [Evidence](evidence.html): Name of the publisher of the evidence\r\n* [EvidenceReport](evidencereport.html): Name of the publisher of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): Name of the publisher of the evidence variable\r\n* [ExampleScenario](examplescenario.html): Name of the publisher of the example scenario\r\n* [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition\r\n* [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide\r\n* [Library](library.html): Name of the publisher of the library\r\n* [Measure](measure.html): Name of the publisher of the measure\r\n* [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition\r\n* [NamingSystem](namingsystem.html): Name of the publisher of the naming system\r\n* [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition\r\n* [PlanDefinition](plandefinition.html): Name of the publisher of the plan definition\r\n* [Questionnaire](questionnaire.html): Name of the publisher of the questionnaire\r\n* [Requirements](requirements.html): Name of the publisher of the requirements\r\n* [SearchParameter](searchparameter.html): Name of the publisher of the search parameter\r\n* [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition\r\n* [StructureMap](structuremap.html): Name of the publisher of the structure map\r\n* [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities\r\n* [TestScript](testscript.html): Name of the publisher of the test script\r\n* [ValueSet](valueset.html): Name of the publisher of the value set\r\n"
* rest.resource[=].searchParam[+].name = "topic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-topic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): Topics associated with the module\r\n* [CodeSystem](codesystem.html): Topics associated with the CodeSystem\r\n* [ConceptMap](conceptmap.html): Topics associated with the ConceptMap\r\n* [EventDefinition](eventdefinition.html): Topics associated with the module\r\n* [EvidenceVariable](evidencevariable.html): Topics associated with the EvidenceVariable\r\n* [Library](library.html): Topics associated with the module\r\n* [Measure](measure.html): Topics associated with the measure\r\n* [NamingSystem](namingsystem.html): Topics associated with the NamingSystem\r\n* [PlanDefinition](plandefinition.html): Topics associated with the module\r\n* [ValueSet](valueset.html): Topics associated with the ValueSet\r\n"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-_text"
* rest.resource[=].searchParam[=].type = #special
* rest.resource[=].searchParam[=].documentation = "Search on the narrative of the resource"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ValueSet-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Multiple Resources: \r\n\r\n* [ActivityDefinition](activitydefinition.html): The current status of the activity definition\r\n* [ActorDefinition](actordefinition.html): The current status of the Actor Definition\r\n* [CapabilityStatement](capabilitystatement.html): The current status of the capability statement\r\n* [ChargeItemDefinition](chargeitemdefinition.html): The current status of the charge item definition\r\n* [Citation](citation.html): The current status of the citation\r\n* [CodeSystem](codesystem.html): The current status of the code system\r\n* [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition\r\n* [ConceptMap](conceptmap.html): The current status of the concept map\r\n* [ConditionDefinition](conditiondefinition.html): The current status of the condition definition\r\n* [EventDefinition](eventdefinition.html): The current status of the event definition\r\n* [Evidence](evidence.html): The current status of the evidence\r\n* [EvidenceReport](evidencereport.html): The current status of the evidence report\r\n* [EvidenceVariable](evidencevariable.html): The current status of the evidence variable\r\n* [ExampleScenario](examplescenario.html): The current status of the example scenario\r\n* [GraphDefinition](graphdefinition.html): The current status of the graph definition\r\n* [ImplementationGuide](implementationguide.html): The current status of the implementation guide\r\n* [Library](library.html): The current status of the library\r\n* [Measure](measure.html): The current status of the measure\r\n* [MedicationKnowledge](medicationknowledge.html): active | inactive | entered-in-error\r\n* [MessageDefinition](messagedefinition.html): The current status of the message definition\r\n* [NamingSystem](namingsystem.html): The current status of the naming system\r\n* [ObservationDefinition](observationdefinition.html): Publication status of the ObservationDefinition: draft, active, retired, unknown\r\n* [OperationDefinition](operationdefinition.html): The current status of the operation definition\r\n* [PlanDefinition](plandefinition.html): The current status of the plan definition\r\n* [Questionnaire](questionnaire.html): The current status of the questionnaire\r\n* [Requirements](requirements.html): The current status of the requirements\r\n* [SearchParameter](searchparameter.html): The current status of the search parameter\r\n* [SpecimenDefinition](specimendefinition.html): Publication status of the SpecimenDefinition: draft, active, retired, unknown\r\n* [StructureDefinition](structuredefinition.html): The current status of the structure definition\r\n* [StructureMap](structuremap.html): The current status of the structure map\r\n* [SubscriptionTopic](subscriptiontopic.html): draft | active | retired | unknown\r\n* [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities\r\n* [TestPlan](testplan.html): The current status of the test plan\r\n* [TestScript](testscript.html): The current status of the test script\r\n* [ValueSet](valueset.html): The current status of the value set\r\n"
* rest.resource[=].operation[0].name = "validate-code"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ValueSet-it-validate-code"
* rest.resource[=].operation[+].name = "invalidate-expansion"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ValueSet-i-invalidate-expansion"
* rest.resource[=].operation[+].name = "expand"
* rest.resource[=].operation[=].definition = "http://localhost:8090/fhir/OperationDefinition/ValueSet-it-expand"
* rest.interaction[0].code = #transaction
* rest.interaction[+].code = #history-system

---

// File: input/fsh/invariants/bdl-ips-1.fsh

Invariant: bdl-epi-1
Description: "An ePI document must have no additional Composition (including Composition subclass) resources besides the first."
Severity: #error
Expression: "entry.tail().where(resource is Composition).empty()"

---

// File: input/fsh/profiles/AdministrableProductDefinitionUvEpi.fsh

Profile: AdministrableProductDefinitionUvEpi
Parent: AdministrableProductDefinition
Id: AdministrableProductDefinition-uv-epi
Title: "AdministrableProductDefinition (ePI)"
Description: "AdministrableProductDefinition (ePI)"

* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..*
  * system 1..1
  * value 1..1

* status ^short = "draft | active | retired |unknown"

* formOf only Reference(MedicinalProductDefinitionUvEpi)

* administrableDoseForm from VsAdministrableDoseForm (example)

* unitOfPresentation from VsUnitofPresentation (example)

* producedFrom only Reference(ManufacturedItemDefinitionUvEpi)

* routeOfAdministration 
  * code from VsRouteOfAdministration (example)

* insert PropertyRulesSet

---

// File: input/fsh/profiles/BundleUvEpi.fsh

Profile: BundleUvEpi
Parent: Bundle
Id: Bundle-uv-epi
Title: "Bundle - ePI"
Description: "Medicinal product information is a pivotal source of regulated and scientifically validated information that assists healthcare professionals in prescribing and dispensing the medicine and informs consumers about its safe and effective use. This profile represents the constraints applied to the Bundle resource used in the Electronic Product Information (ePI) FHIR Implementation Guide."
* ^purpose = "This profile represents the constraints applied to the Bundle resource used to create an Electronic Product Information (ePI) document."
 
* insert SetFmmandStatusRule ( 2, trial-use )
* obeys bdl-epi-1
* . ^short = "Electronic Product Information Bundle Document"
* . ^definition = "Electronic Product Information Bundle Document. A container for the collection of resources that make up the ePI document."

* identifier 1.. 
  * ^short = "Persistent identifier for the bundle"
  * ^definition = "Persistent identifier that remains the same for all versions of this ePI. The identifier remains the same regardless of any changes to the Bundle and regardless of any changes made to the Resources within the Bundle. This purpose of this identifier is to ensure all versions of an ePI can be collected as a set under a common parent identifier."

* type = #document (exactly)

* timestamp 1.. 
  * ^short = "Persistent original date of approval"
  * ^definition = "Original date in which this ePI document received its first authorization. As with the identifier, this date persists across versions. "

* meta
  * versionId 0..1
  * lastUpdated 0..1

* entry 1.. // 
* entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[=].path = "$this.resource"
/* * entry ^slicing.discriminator[+].type = #profile
* entry ^slicing.discriminator[=].path = "$this.resource" */

* entry ^slicing.rules = #open
* entry ^short = "Entry resource in the ePI bundle"
* entry ^definition = "An entry resource included in the ePI document bundle resource."
* entry ^comment = "Must contain the ePI Composition as the first entry (only a single Composition resource instance may be included).  Additional constraints are specified in the ePI Composition profile."
* entry
  * resource 1..
  * search ..0
  * response ..0
  * request ..0
  * fullUrl 1..

* insert BundleEntry (composition, 1..1, CompositionUvEpi, ePI Composition, ePI Composition )
* insert BundleEntry (organization, 0.., OrganizationUvEpi, Organization, Organization)
* insert BundleEntry (authorization, 0.., RegulatedAuthorizationUvEpi, Regulated Authorization, Regulated Authorization )
* insert BundleEntry (medicinalProduct, 0.., MedicinalProductDefinitionUvEpi, Medicinal Product, Medicinal Product Definition )
* insert BundleEntry (packagedProduct, 0.., PackagedProductDefinitionUvEpi, Packaged Product, Packaged Product Definition )
* insert BundleEntry (administrableProduct, 0.., AdministrableProductDefinitionUvEpi, Administrable Product, Administrable Product Definition )
* insert BundleEntry (manufacturedItem, 0.., ManufacturedItemDefinitionUvEpi, Manufactured Item, Manufactured Item Definition )
* insert BundleEntry (ingredient, 0.., IngredientUvEpi, Ingredient, Ingredient )
* insert BundleEntry (clinicalUse, 0.., ClinicalUseDefinition, Interactions\, Warnings\, Indications\,Contraindications, ePI ClinicalUseDefinition used for Interactions\, Warnings\,Indication\, Contraindication)
* insert BundleEntry (substanceDefinition, 0.., SubstanceDefinitionUvEpi, Substance Definition, Substance Definition )
* insert BundleEntry (binary, 0.., Binary, Binary, Binary )


* signature 
  * ^short = "Digital Signature."
  * ^definition = "Market authorization holder can digitally sign the ePI document."






---

// File: input/fsh/profiles/ClinicalUseDefinitionCommonRules.fsh


RuleSet: ClinicalUseDefinitionCommonRules

* identifier ^short = "Business identifier for this clinical use."
* status ^short = "Defines whether this clinical use is draft, active or retired"
* subject 1..* 
* subject only Reference(MedicinalProductDefinitionUvEpi)


---

// File: input/fsh/profiles/ClinicalUseDefinitionContraindicationUvEpi.fsh

Profile: ClinicalUseDefinitionContraindicationUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-contraindication-uv-epi
Title: "ClinicalUseDefinition Contraindication (ePI)"
Description: "ClinicalUseDefinition Contraindication (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #contraindication

// * contraindication 0..0
* indication 0..0
* interaction 0..0
* warning 0..0
* undesirableEffect 0..0
*  contraindication 1..
  * diseaseSymptomProcedure from VsMeddra (preferred)



---

// File: input/fsh/profiles/ClinicalUseDefinitionIndicationUvEpi.fsh

Profile: ClinicalUseDefinitionIndicationUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-indication-uv-epi
Title: "ClinicalUseDefinition Indication (ePI)"
Description: "ClinicalUseDefinition Indication (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #indication

* contraindication 0..0
// * indication 0..0
* interaction 0..0
* warning 0..0
* undesirableEffect 0..0
*  indication 1..
  * diseaseSymptomProcedure from VsMeddra (preferred)



---

// File: input/fsh/profiles/ClinicalUseDefinitionInteractionUvEpi.fsh

Profile: ClinicalUseDefinitionInteractionUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-interaction-uv-epi
Title: "ClinicalUseDefinition Interaction (ePI)"
Description: "ClinicalUseDefinition Interaction (ePI)"

* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #interaction

* contraindication 0..0
* indication 0..0
// * interaction 0..0
* warning 0..0
* undesirableEffect 0..0
* interaction.interactant.itemCodeableConcept
* interaction.interactant.itemCodeableConcept from http://hl7.org/fhir/ValueSet/interactant (example)
//in the value set extensible is the code defined for "Conformance Binding"
  * insert AdditionalBinding (#extensible "Conformance Binding", VsSubstance, The specific substance that interacts., The specific substance that interacts.)

* interaction.type ^short = "The type of the interaction e.g. drug-drug, drug-food, drug-lab."

---

// File: input/fsh/profiles/ClinicalUseDefinitionUndesirableEffectUvEpi.fsh

Profile: ClinicalUseDefinitionUndesirableEffectUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-undesirableEffect-uv-epi
Title: "ClinicalUseDefinition Undesirable Effect (ePI)"
Description: "ClinicalUseDefinition Undesirable Effect (ePI)"

* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #undesirable-effect

* contraindication 0..0
* indication 0..0
* interaction 0..0
* warning 0..0
// * undesirableEffect 0..0
*  undesirableEffect 1..
  * symptomConditionEffect ^short = "The situation in which the undesirable effect may manifest."
  * classification  ^short = "High level classification of the effect."
  * frequencyOfOccurrence ^short = "How often the effect is seen."
 
 


---

// File: input/fsh/profiles/ClinicalUseDefinitionWarningUvEpi.fsh

Profile: ClinicalUseDefinitionWarningUvEpi
Parent: ClinicalUseDefinition
Id: ClinicalUseDefinition-warning-uv-epi
Title: "ClinicalUseDefinition Warning (ePI)"
Description: "ClinicalUseDefinition Warning (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ClinicalUseDefinitionCommonRules
* type = #warning

* contraindication 0..0
* indication 0..0
* interaction 0..0
// * warning 0..0
* undesirableEffect 0..0
*  warning 1..1
  * description	^short = "A textual definition of this warning, with formatting."

---

// File: input/fsh/profiles/CompositionUvEpi.fsh

Profile: CompositionUvEpi
Parent: Composition
Id: Composition-uv-epi
Title: "Composition (ePI)"
Description: "The Composition captures the section headings, sub-section headings, and narrative text (For example, paragraphs, bulleted lists, tables) in an ePI."
* ^status = #active
* ^purpose = "This profile represents the constraints applied to the Composition resource used in an Electronic Product Information (ePI) document."
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..
  * ^short = "Unique identifier only for this version of the Composition"
  * ^definition = "Unlike the Bundle identifier which persists, the Composition identifier does not persist across versions. Each new version of the Composition receives a new identifier."

* version ^short = "An explicitly assigned identifer of a variation of the content in the ePI"

* status ^short = "preliminary|final|amended|entered-in-error|deprecated"

* type // from VsEpiType (preferred)
* type ^short = "Type of ePI document template"
* type ^definition = "Specifies the type of ePI template. For example, Package Insert, Patient Information, Summary of Product Characteristics, Human Prescription, Drug Label."

* category ^short = "Categorization of ePI"

* language 1..1
* language ^short = "The language of the ePI's narrative text"

* subject 0..*
* subject only Reference (MedicinalProductDefinitionUvEpi)
* subject ^short = "The authorized medicinal product(s) that this ePI's composition is about"

* date 1..
* date ^short = "Date of last revision for this version of the authorized ePI."

* author ^short = "The Organization responsible for the ePI"
* author ^definition = "Link to the Organization resource that describes the organization responsible for the ePI (For example, Markting Authorization Holder)."
* author only Reference(OrganizationUvEpi)

* title 1..
* title ^short = "Title of the ePI Document"
* title ^definition = "A brief summary name describing the ePI. The title should include: Proprietary Name(s) (Non-proprietary Name(s)) Dose Form, Route of Administration."

* relatesTo ^short = "Cross-reference to anotherother ePI compositions or ePI document()s)"
* relatesTo ^definition = "A crossreference from this ePI's composition to another related Composition or ePI document."

* section 1..
  * ^short = "Level 1 section heading for the whole ePI"
  * ^definition = "This is the root or level 1 section heading in the ePI. All other section headings are sub-sections, or children, of this section heading"
  * title
    * ^short = "Section heading defined by the market authorization holder"
    * ^definition = "This section heading is the counterpart to the coded section heading from the health authority's ePI template. For example, the health authority ePI template may have '1. What X is and what it is used for' as the coded section heading. The market authorization holder modifies this such that 'X' is replaced with the brand name of the drug."
  * code 0..1 
  * code from VsSectionCode (example)
    * ^short = "Section heading defined by the health authority. Cannot be changed by the market authorization holder"
  * text ^short = "Narrative text for this section (e.g., paragraphs, bulleted lists, tables)."
  * emptyReason ^short = "Reason the section is empty."
  * section 
    *  ^short = "Nested sub-section headings for level 2, 3, 4 or 5."
    *  ^definition = "Nested Sections sub-section headings for level 2, 3, 4 or 5."
    * title ^short = "Section heading defined by the market authorization holder"
    * code 0..1 
    * code from VsSectionCode (example)
      * ^short = "Coded section heading defined by the health authority."
    * text ^short = "Narrative text for this section."
    * emptyReason ^short = "Reason the section is empty."


---

// File: input/fsh/profiles/IngredientUvEpi.fsh

Profile: IngredientUvEpi
Parent: Ingredient
Id: Ingredient-uv-epi
Title: "Ingredient (ePI)"
Description: "Ingredient (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier ^short = "An identifier or code by which the ingredient can be referenced."

* status ^short =	"draft|active|retired|unknown"

* for only Reference( MedicinalProductDefinitionUvEpi or AdministrableProductDefinitionUvEpi or ManufacturedItemDefinitionUvEpi)

* role from VsIngredientRole (example)

* allergenicIndicator ^short = "If the ingredient is a known or suspected allergen." // = false

* manufacturer.manufacturer only Reference(OrganizationUvEpi)

* substance
  * code from VsSubstance (example)
  * strength 
    * ^short = "The quantity of substance, per presentation, or per volume or mass, and type of quantity."
  * strength.textPresentation ^short = "Text of either the whole presentation strength or a part of it"
  * strength.textConcentration ^short = "Text of either the whole concentration strength or a part of it"
  * strength.basis ^short = "A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt)"
  * strength.referenceStrength ^short = "Strength expressed in terms of a reference substance"
    * substance ^short = "Relevant reference substance."
    * strength[x] ^short = "Strength of the reference substance."


---

// File: input/fsh/profiles/ManufacturedItemDefinitionUvEpi.fsh

Profile: ManufacturedItemDefinitionUvEpi
Parent: ManufacturedItemDefinition
Id: ManufacturedItemDefinition-uv-epi
Title: "ManufacturedItemDefinition (ePI)"
Description: "ManufacturedItemDefinition (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 0..

* status ^short = "draft|active|retired|unknown"

* manufacturedDoseForm from VsManufacturedDoseForm (example)

* unitOfPresentation from VsUnitofPresentation (example)

* manufacturer only Reference(OrganizationUvEpi)
* insert PropertyRulesSet


---

// File: input/fsh/profiles/MedicinalProductDefinitionUvEpi.fsh

Profile: MedicinalProductDefinitionUvEpi
Parent: MedicinalProductDefinition
Id: MedicinalProductDefinition-uv-epi
Title: "MedicinalProductDefinition (ePI)"
Description: "Description of the packaged authorized medicinal product(s) associated to this ePI document."
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..

* type ^short = "Regulatory type, e.g. Investigational or Authorized."

* domain ^short = "If this medicine applies to human or veterinary uses."
* domain from $VS-medicinal-product-domain (example)

* version ^short = "A business identifier relating to a specific version of the product."

* status ^short = "The status within the lifecycle of this product record."
* statusDate ^short = "The date at which this status became applicable." 

* description ^short = "General description of the medicinal product referred by the ePI"

* combinedPharmaceuticalDoseForm from VsDoseForm (example)

* route from VsRouteOfAdministration (example)

* indication ^short = "Narrative text of the authorized indication(s) for this product."

* legalStatusOfSupply ^short = "The legal status of supply of the medicinal product as classified by the regulator."

* additionalMonitoringIndicator ^short = "Whether the Medicinal Product is subject to additional monitoring for regulatory reasons."

* specialMeasures ^short = "Whether the Medicinal Product is subject to special measures for regulatory reasons."

* pediatricUseIndicator ^short = "If authorised for pediatric use"

* classification from VsAtcClassification (example)
  * ^short = "Allows the product to be classified by various systems (e.g. ATC)"

* marketingStatus 0..
  * country  from VsCountry (preferred)
  * dateRange ^short = "The date when the Medicinal Product is placed on the market by the Marketing Authorization Holder"
  * status ^short = "Status of the marketing of the medicinal product."

* packagedMedicinalProduct ^short = "Package type for the product." 

* contact 0..*
  * type ^short = "Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information."
  * contact ^short = "A specific contact, person (in a role), or an organization for this product"

* name 1..*
  * productName ^short = "The full product name expressed as Proprietary Name (Non-Proprietary Name) strength dose form"
  * type ^short = "Type of product name, such as rINN, Proprietary, Non-Proprietary"
  * part 0..*
    * part ^short = "A fragment of a product name."
    * type ^short = "Type for this part of the name (e.g. strength part)"
  * usage 0..* 
    * country ^short = "Country where this name applies"
    * jurisdiction ^short = "Jurisdiction where this name applies"
    * language ^short = "Language for this name"


---

// File: input/fsh/profiles/OrganizationUvEpi.fsh

Profile: OrganizationUvEpi
Parent: Organization
Id: Organization-uv-epi
Title: "Organization (ePI)"
Description: "Organization (ePI)"
* insert SetFmmandStatusRule ( 2, trial-use )
* identifier 1..
  * system 1..
  * value 1..

* active ^short = "Whether this organization's record is in active use"

* type
  * ^short = "Type of organization"
  * ^definition = "Organization type clarifies what purpose or busines operation this organization performs in relation to the ePI and the associated authorized medicinal products mentioned."

* name ^short = "Organization's legal name"
* alias ^short = "A list of alternate names for this organization"

* description ^short = "Additional details about the Organization"

* contact
  * telecom ^slicing.discriminator[0].type = #value
  * telecom ^slicing.discriminator[=].path = "system"
  * telecom ^slicing.rules = #open
  * telecom contains
        phone 0.. and
	     email 0.. and
	     url 0..
  * telecom[phone] 0..
    * ^short = "Phone"
    * ^definition = "Corporate phone contact information for the local representative of the marketing authorization holder. International dialling code followed by the area code and telephone number."
    * system = #phone

  * telecom[email] 0..
    * ^short = "email"
    * ^definition = "Corporate email contact information for the local representative of the marketing authorization holder."
    * system = #email

  * telecom[url] 0..
    * ^short = "Web Site"
    * ^definition = "Website of the local health authority and market authorization holder website "
    * system = #url

  * address 0..
    * use ^short = "home | work | temp | old | billing" // = #work
    * use = #work
    * text ^short = "Text representation of the address."
    * type ^short = "postal|physical|both"
    * line 1..
    * postalCode ^short = "Postal code for area"
    * city 1..
    * country  from VsCountry (preferred)
    * country 1..


---

