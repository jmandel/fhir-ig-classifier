File: repos/HL7_SLASH_FHIR-us-pq-cmc-fda/sushi-config.yaml

id: hl7.fhir.us.pq-cmc-fda
canonical: http://hl7.org/fhir/us/pq-cmc-fda 
name: FHIR_pqcmc_fda
title: "Pharmaceutical Quality - Chemistry, Manufacturing and Controls (PQ-CMC) Submissions to FDA"
description: "The FDA PQ-CMC FHIR IG is for submission of structured and standardized information regarding drug product quality, chemistry, manufacturing and processes controls.  This data is intended for submission to the US FDA by biopharmaceutical companies for the purpose of drug application review."

status: active
license: CC0-1.0 #https://www.hl7.org/fhir/valueset-spdx-license.html
version: 2.0.0-ballot
fhirVersion: 5.0.0
copyrightYear: 2021+
releaseLabel:  STU2

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  
    valueCode: brr
publisher:
  name: HL7 International / Biomedical Research and Regulation 
  url:  'http://www.hl7.org/Special/committees/rcrim' 
  email: brr@lists.HL7.org
jurisdiction: urn:iso:std:iso:3166#US "United States of America"

dependencies:
  hl7.terminology.r5: 6.1.0
  
menu:
  Table of Contents: toc.html
  Home: index.html
  General Instructions: instruction.html
  eCTD Profiles Stage 1:
    General Information (3.2.S.1): eCTD32S10.html 
    Control of Materials (3.2.S.2.3): eCTD32S23.html  
    Specification (3.2.S.4.1, 3.2.P.4 & 3.2.P.5.1): eCTDSP4151.html 
    Description and Composition of the Drug Product (3.2.P.1): eCTD32P10.html      
  eCTD Profiles Stage 2:
    Substance Characterisation (3.2.S.3): eCTD32S3.html   
    Product Batch Formula (3.2.P.3.2): eCTD32P32.html 
    Product Characterisation of Impurities (3.2.P.5.5): eCTD32P55.html

#  DRAFT eCTD Profiles:
#    Product Container Closure System (3.2.P.7.0): eCTD32P70.html 
#    Substance Container Closure System (3.2.S.6.0): eCTD32S60.html
#    Batch Analyses (3.2.S.4.4 & 3.2.P.5.4): eCTDSP4454.html 
#    Stability Summary (3.2.S.7.1 & 3.2.P.8.1): eCTDSP7181.html
#    Stability Data (3.2.S.7.3 & 3.2.P.8.3): eCTDSP7383.html
  Artifacts: artifacts.html
  Downloads: downloads.html
  Change Notes: change_notes.html

pages:
  index.html:
    title: "Home"
    generation: markdown
  instruction.html:
    title: "General Instructions"
    generation: markdown
  eCTD32S10.html:
    title: "General Information (3.2.S.1)"
    generation: markdown
  eCTD32S23.html:
    title: "Substance Control of Materials (3.2.S.2.3)"
    generation: markdown
  eCTD32S3.md: 
    title: "Substance Characterisation (3.2.S.3)"
    generation: markdown
  eCTDSP4151.html:
    title: "Specification (3.2.S.4.1, 3.2.P.4 and 3.2.P.5.1)"
    generation: markdown
  eCTD32P10.html:
    title: "Description and Composition of the Drug Product (3.2.P.1)"
    generation: markdown
  eCTD32P32.md:
    title: "Product Batch Formula (3.2.P.3.2)"
    generation: markdown
  eCTD32P55.md:
    title: "Product Characterisation of Impurities (3.2.P.5.5)"
    generation: markdown
  artifacts.html:
    title: "Artifact List"
  downloads.html:
    title: "Downloads"
    generation: markdown
  change_notes.html:
    title: "Change Notes"
    generation: markdown

parameters:
 releaselabel: true
 excludettl: true
 excludemap: true
 apply-wg: true
 jira-code: pq-cmc
 # {joint-iso-itu-t(2) country(16) us(840) organization(1) hl7(113883)}
 auto-oid-root: 2.16.840.1.113883.4.642.40.36
 special-url: http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl
    - https://www.uniprot.org
    - urn:oid:1.3.6.1.4.1.5193
    - http://unitsofmeasure.org
    - urn:oid:1.3.6.1.4.1.519.1
    - urn:oid:2.16.840.1.113883.4.82
    - https://www.fda.gov/drugs/drug-approvals-and-databases/drug-establishments-current-registration-site
    - urn:ietf:rfc:3986
#   validation: [allow-any-extensions, no-broken-links]






---

// File: input/pagecontent/change_notes.md

### Version = 1.0.0
Publication Date: 2024-10-TBD
url: http://hl7.org/fhir/us/pq-cmc-fda/STU1
Based on FHIR version : 5.0.0
Changes:
The first official published version of this IG publishedas FHIR STU1.

---

// File: input/pagecontent/downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

<ul>
<li><a href="full-ig.zip">Full Specification (zip)</a><p>Contains the entire Implementation Guide.</p></li>
<li><a href="definitions.json.zip">JSON Definitions (zip)</a><p>All profiles and value sets that are used in this Implementation Guide in JSON file format.</p></li>
<li><a href="definitions.xml.zip">XML Definitions (zip)</a><p>All profiles and value sets that are used in this Implementation Guide in XML format.</p></li>
<li><a href="examples.xml.zip">XML Examples (zip)</a><p>All the examples that are used in this Implementation Guide.</p></li>
<li><a href="validator-hl7.fhir.us.pq-cmc-fda.pack">Validator (PACK File)</a><p>A package that contains all the files necessary to validate a resource when used in conjunction with the FHIR Validator. Refer to Validating Resources on the FHIR website.</p></li>
<li><a href="NarrativeTransform.zip">NarrativeTransform (zip)</a><p>S\Scripts to insert narratives in XML bundle files.</p></li>
</ul>

</div>


---

// File: input/pagecontent/eCTD32P10.md

### Domain Overview

The Description and Composition of the Drug Product bundle profile provides a mechanism for the industry to submit Module 3 of CTD 3.2.P.1 folder content to the FDA. The contents of this section include a description of the drug product, its container closure, and its components and constituents. At this time, the profile is scoped to support only products that have a solid oral dose form; other dose forms will be supported in future iterations of the profile.

The Food and Drug Administration (FDA) requires registered drug establishments to provide a current list of all drugs manufactured, prepared, propagated, compounded, or processed by it for commercial distribution. Drug products are identified and reported using a unique, three-segment number, called the National Drug Code (NDC), which is a universal product identifier for human drugs. It identifies the labeler, product, and trade package size. The second segment of the NDC, the product code, identifies a specific strength, dosage form, and formulation for a particular firm. The decision was made to align the definition of a PQ/CMC drug product with the product code (or second segment) of the NDC. Therefore, each 32P10 bundle is for a specific strength and dose form. For those drug products that are available in multiple strengths and/or dose forms, a separate 32P10 bundle must be submitted for each distinct combination.

For the purposes of the PQ/CMC IG, the Example 1 below of a two-layer Tablet provides description of the terms used to explain the 2-layer tablet.

<table ><tr><td><img src="image1.png" /></td></tr></table>

<p style="font-weight: bold"> Example 1: A 2 layer tablet with 1 purple layer and 1 white layer </p>

- A <span style="text-decoration:underline;">Drug Product</span> is the dose unit, i.e., the whole tablet.
- <span style="text-decoration:underline;">Components</span> are the “parts” of the Drug Product, i.e., each of the two layers in the tablet is considered a Component. If the tablet was coated, the coating would be another (third) Component.
    - A Drug Product must have at least one Component.
    - NOTE:  In the FDA Federal Register Notice (FRN), a Component is referred to as the Product Part.  The PQ/CMC FHIR IG uses the HL7 resource term and hence the word Component.    

- <span style="text-decoration:underline;">Constituents</span> are the active and inactive ingredients used in the manufacture of the Drug Product
    - Constituent information is included with respect to the Drug Product and with respect to each relevant Component. Each Constituent may be included in one or more Components of the Drug Product.

    - NOTE:  In the FDA Federal Register Notice (FRN), a Constituent is referred to as the Ingredient.  The PQ/CMC FHIR IG uses the HL7 resource term and hence the word Constituent.
    
The additional example illustrations below of drug products are included as an aid to understanding the terms or semantics in the context of the PQ/CMC IG.

<table style="margin: 0px auto;"><tr><td><img src="image2.png" /></td></tr></table>

<p style="text-align: center; font-weight: bold">Example 2: Capsule with 3 components: capsule shell, one type of beads, and a minitablet</p>

<table style="margin: 0px auto;"><tr><td><img src="image3.png" /></td></tr></table>

<p style="text-align: center; font-weight: bold"> Example 3: Tablet with two coatings </p>

Drug Product content includes information such as: the dosage form, routes of administration, a narrative description of the product, a schematic, the type of container and container closure used for the dosage form, quality standard and release profile of the dose unit, and the amount of each constituent (both active and inactive ingredients) contained in the drug product.

Component content includes information such as: a component identifier, component type, and release profile of the component and the amount of each constituent (both active and inactive ingredients) contained in the component as well as the function of the constituent in the component.

### Implementer Instructions
- Each 32P1 XML bundle is for a single Drug Product and specific dosage form.
- Multiple dosage forms of a drug product must be submitted via distinct separate 32P1 bundles.
- For drug products that are co-packaged with additional items, e.g., a reconstitution diluent, the additional items must be provided in a separate 32P1 bundle.

### Representation in FHIR

The domain concepts of Description and Composition of the Drug Product are represented in FHIR in this IG section. Below is a high-level FHIR resource mapping to guide the understanding of how the domain concepts are represented using profiles on FHIR resources. Detail study of the profiles and each of the resources will be needed to develop a deeper understanding of this Description and Composition of the Drug Product FHIR bundle profile. Concepts that are key to this domain include the following:

* Drug Product
    * [Drug Product Description](StructureDefinition-pqcmc-drug-product-description.html) (DrugProductDescription) profile on the [MedicinalProductDefinition](https://hl7.org/fhir/medicinalproductdefinition.html) Resource
* Container Closure
    * [Drug Product Container Closure](StructureDefinition-ContainerClosure.html) (ContainerClosure) profile on the [PackagedProductDefinition](https://hl7.org/fhir/packagedproductdefinition.html) Resource
* Product Composition
    * [Manufactured Drug Product](StructureDefinition-pqcmc-product-part.html) (FinishedProduct) profile on the [ManufacturedItemDefinition](https://hl7.org/fhir/R5/manufactureditemdefinition.html) Resource
    * [Drug Product Component](StructureDefinition-pqcmc-component.html) (DrugProductComponent) profile on the [Ingredient](https://hl7.org/fhir/R5/ingredient.html) Resource
    * [Component Substance](StructureDefinition-pqcmc-component-substance.html) (ComponentSubstance) profile on the [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) Resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the<span style="text-decoration:underline;"> [Organization](http://hl7.org/fhir/R5/organization.html) Resource</span>
   
Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### eCTD 3.2.P.1 Profile Map

<div>{%include ProdDesComp.svg%}</div>

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This image demonstrates a multilayer tablet displayed with narrative inserted in the composition text element.  It has two parts. The XML can be found on the Artifacts page and does not contain the narrative in the image, rather it contains the narrative generated for all examples by the IG publisher program. It is on the artifacts page and in the Bundle profile. [bd0f0a7a-27ea-4884-801d-bd0546e80888](Bundle-bd0f0a7a-27ea-4884-801d-bd0546e80888.html)

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="32P102layers.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/eCTD32P32.md

### Domain Overview

The Product Batch Formula bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.P.3.2 folder content to the FDA. The contents of this section include the amount of material in a specific type of batch, in total and broken down by the components and constituents that constitute the drug product. 

### Implementer Instructions

* Each 32P32 bundle is for a single drug product.
* All batch formulas for a drug product are contained in a single bundle.

### Representation in FHIR

* Drug Product
    * [Batch Formula Drug Product Identification](StructureDefinition-pqcmc-batch-formula-product.html) (BatchFormulaMedicinalProduct) profile on [MedicinalProductDefinition](https://hl7.org/fhir/R5/medicinalproductdefinition.html) resource
* Batch Formula
    * [Drug Product Batch Formula](StructureDefinition-pqcmc-product-batch-formula.html) (BatchFormula) profile on [ManufacturedItemDefinition](https://hl7.org/fhir/R5/manufactureditemdefinition.html) resource
* Batch Formula Constituent
    * [Drug Product Batch Formula Ingredient](StructureDefinition-pqcmc-dp-ingredient.html) (DrugProductIngredient) profile on [Ingredient](https://hl7.org/fhir/R5/ingredient.html) resource
    * [Drug Substance Handle](StructureDefinition-pqcmc-routine-drug-substance.html) (SubstanceDefinitionHandle) profile on [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) resource
    * [Excipient Drug Substance](StructureDefinition-pqcmc-excipient.html) (ExcipientRaw) profile on [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the [Organization](http://hl7.org/fhir/R5/organization.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### CTD 3.2.P.3.2 Profile Map

<div>{%include BatchForm.svg%}</div>

### Usage Patterns
#### Single vs. Multiple component in a Batch Formula
The batch formula structure varies at ManufacturedItemDefinition.component. Two XML snippets shown here represent different types of drug products with distinct structures for their ingredients.  The first snippet represents a drug product that is a **solution** with a set of **ingredients** specified as **constituents**.  The second snippet represents a **layered pill** drug product with multiple **layers** and **constituents** within each layer.

* **Single Set of Ingredients**: The component element describes a solution, where the main ingredient is provided as a total amount (53.2 kilograms). Each constituent element inside this component lists individual ingredients that contribute to the overall composition, with both **absolute amounts** (in grams, kilograms) and **percentages** for each.
* **No Layering Information**: There is no reference to layers in this product. Instead, it simply lists the amounts of ingredients and their percentages, like:
    * Ingredient 1: 25.42g (0.0477%).
    * Ingredient 2: 20.5g (0.0385%).
    * And so on.
* **Ingredient References**: Each constituent includes a hasIngredient element with a reference to an external identifier (UUID), indicating the ingredient’s identity.

**First XML Snippet: Solution**

   	      <component>
          <type>
            <coding>
              <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
              <code value="C42986"/>
              <display value="Solution"/>
            </coding>
          </type>
          <amount>
            <value value="53.2"/>
            <unit value="kilogram"/>
            <system value="http://unitsofmeasure.org"/>
            <code value="kg"/>
          </amount>
          <amount>
            <value value="100"/>
            <unit value="percent"/>
            <system value="http://unitsofmeasure.org"/>
            <code value="%"/>
          </amount>
          <constituent>
            <amount>
              <value value="25.42"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="0.0477"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:1c1a2a23-1fd7-4487-9682-49877f9f9f77"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="20.5"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="0.0385"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:12cce82f-8595-4860-b7ca-06c9ec0327f2"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="5"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="0.0094"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:45eb4f05-83d9-4819-bb60-96c7c5ce2b76"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
           ...
          </constituent>
          <property>
            <type>
              <text value="Product Part Identifier"/>
            </type>
            <valueCodeableConcept>
              <text value="solution"/>
            </valueCodeableConcept>
          </property>
        </component>


* **Multiple Layers**: The component elements describe two layers: the "Purple Layer" and "LayerB". Each layer is represented as a distinct component and includes details about its total amount (in grams and percentage). Each layer also has a set of constituent ingredients, much like the first XML, but with additional complexity:
    * **Layer-Specific Ingredients**: Each constituent within the layer has an associated location element that specifies whether the ingredient is part of the **Active Core**, **Intragranular**, or **Extragranular** part of the layer. This shows the structure of ingredients within each layer.
    * **Product Part Identifier**: The property element indicates the layer's name or identity, such as "Purple Layer" or "Example1Drug_LayerB."
    * **Layer Percentages**: The percentages of each ingredient are still listed, but they are specific to each layer, with ingredients clearly marked for their respective layers.

**Second XML Snippet: Layered Pill Drug Product**

        <component>                        <!--FIRST COMPONENT  -->
          <type>
            <coding>
              <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
              <code value="C66831"/>
              <display value="Layer"/>
            </coding>
          </type>
          <amount>
            <value value="925.97"/>
            <unit value="gram"/>
            <system value="http://unitsofmeasure.org"/>
            <code value="g"/>
          </amount>
          <amount>
            <value value="38.55"/>
            <unit value="percent"/>
            <system value="http://unitsofmeasure.org"/>
            <code value="%"/>
          </amount>
          <constituent>
            <amount>
              <value value="400"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="43.1"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203881"/>
                <display value="Active core/granulate"/>
              </coding>
              <text value="Purple Layer"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:d4713a90-38d1-49e5-a977-78c63e518562"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="524.01"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="56.59"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203883"/>
                <display value="Intragranular"/>
              </coding>
              <text value="Purple Layer"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:9973ba9a-b257-425a-8fb9-6dcfe379ca08"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="203.71"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="22"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203882"/>
                <display value="Extragranular"/>
              </coding>
              <text value="Purple Layer"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:4e394a0c-4b25-492e-aac7-0faf121ffc4f"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="305.57"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="33"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203882"/>
                <display value="Extragranular"/>
              </coding>
              <text value="Purple Layer"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:95648837-ec81-42d9-970c-eac390f2f604"/>
              </reference>
            </hasIngredient>
          </constituent>
          <property>
            <type>
              <text value="Product Part Identifier"/>
            </type>
            <valueCodeableConcept>
              <text value="Purple Layer"/>
            </valueCodeableConcept>
          </property>
        </component>
        <component>                         <!--SECOND COMPONENT  -->
          <type>
            <coding>
              <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
              <code value="C66831"/>
              <display value="Layer"/>
            </coding>
          </type>
          <amount>
            <value value="1476.03"/>
            <unit value="gram"/>
            <system value="http://unitsofmeasure.org"/>
            <code value="g"/>
          </amount>
          <amount>
            <value value="61.45"/>
            <unit value="percent"/>
            <system value="http://unitsofmeasure.org"/>
            <code value="%"/>
          </amount>
          <constituent>
            <amount>
              <value value="600.01"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="40.65"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203881"/>
                <display value="Active core/granulate"/>
              </coding>
              <text value="Example1Drug_LayerB"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:fbd464cc-2511-4a3a-b058-3cec4fffd14f"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="876.02"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="59.35"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203883"/>
                <display value="Intragranular"/>
              </coding>
              <text value="Example1Drug_LayerB"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:9973ba9a-b257-425a-8fb9-6dcfe379ca08"/>
              </reference>
            </hasIngredient>
          </constituent>
          <constituent>
            <amount>
              <value value="369.01"/>
              <unit value="gram"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="g"/>
            </amount>
            <amount>
              <value value="25"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203882"/>
                <display value="Extragranular"/>
              </coding>
              <text value="Example1Drug_LayerB"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:95648837-ec81-42d9-970c-eac390f2f604"/>
              </reference>
            </hasIngredient>
          </constituent>
          <property>
            <type>
              <text value="Product Part Identifier"/>
            </type>
            <valueCodeableConcept>
              <text value="Example1Drug_LayerB"/>
            </valueCodeableConcept>
          </property>
        </component>

**Key Differences in Structure:**

1. **Layered Composition**: The second snippet uses multiple component elements to represent **distinct layers** of a pill, with ingredients organized within those layers. In contrast, the first snippet represents a **single ingredient set** without such layering.
2. **Location Information**: The second snippet includes location elements within each constituent to specify the part of the layer the ingredient is associated with (Active Core, Intragranular, Extragranular), while the first snippet does not have this level of detail.
3. **Additional Layer Metadata**: The second snippet contains more specific metadata about each layer (e.g., "Purple Layer," "LayerB") through the property element and location fields. The first snippet focuses only on ingredients and their quantities without referencing any layers.
4. **Ingredient Breakdown**: Both snippets list ingredients with their respective amounts and percentages. However, the second snippet organizes ingredients into a layered structure, while the first treats all ingredients as part of a singular mixture.

In summary, the second XML snippet represents a more complex, layered pill structure with additional metadata about the location and identity of each layer and its constituents. The first snippet is a simpler structure, representing a solution with ingredients described at a higher level of abstraction.

#### The Product Batch Ingredient Extension

This extension is used to capture the overage amount  and reason. Overage refers to an intentional extra quantity of an active ingredient or excipient added to a drug product batch, beyond the amount required to achieve the labeled dosage. The overage compensates for potential losses during manufacturing, such as ingredient degradation, evaporation, or losses in processing. It is essentially a "buffer" to ensure that the final product meets the required strength or concentration.

**Reasons for Overages**

There are several reasons why overages are used in drug manufacturing, including:

1. **Ingredient Losses During Manufacturing**: Some active pharmaceutical ingredients (APIs) may be lost during processing due to volatility, instability, or other factors like powder dusting, filtration losses, etc.
2. **Ingredient Degradation**: Certain APIs may degrade over time (e.g., due to temperature or light), so a small overage is added to ensure the potency of the drug remains within the required specification at the time of use.
3. **Manufacturing Variability**: Due to variations in equipment, environment, or human error, there could be losses during mixing, filling, or packaging. The overage ensures that the final batch has the correct concentration.
4. **Stability**: Some drug products may lose potency during storage, especially if exposed to environmental factors (like humidity or temperature). Adding overage accounts for any potential loss in activity over time.
5. **Regulatory Requirements**: Regulatory agencies may require overages for certain types of drugs, particularly where precise dosing is critical (e.g., injectables, oral solids). It is often included in the batch formula based on regulatory guidance or historical data.

**Example of Overages in a Drug Product Batch Record**

As an example of a tablet manufacturing batch record for a drug product where the active ingredient (e.g., "Acetaminophen") is required to be 500 mg per tablet. To account for potential losses and ensure potency, an overage of 2% is added.

**Batch Formula Overage Example:**

* **Target Dose per Tablet**: 500 mg
* **Overage**: 2% of 500 mg = 10 mg

Thus, the batch formula for the **Acetaminophen** tablet would include **510 mg** of the active ingredient per tablet to ensure that after manufacturing losses, each tablet contains the correct 500 mg of the active ingredient.

Here’s how this would be reflected in the ManufacturedItemDefinition.component.constituent:

             <constituent>
            <extension url="http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/pq-product-batch-ingredient-extension">
              <extension url="overagePercent">
                <valueDecimal value="0.02"/>
              </extension>
              <extension url="overageJustification">
                <valueMarkdown value="Manufacturing losses, degradation over time"/>
              </extension>
            </extension>
            <amount>
              <value value="510"/>
              <unit value="milligram"/>  
              <system value="http://unitsofmeasure.org"/>
              <code value="mg"/>
            </amount>
            <amount>
              <value value="35"/>
              <unit value="percent"/>
              <system value="http://unitsofmeasure.org"/>
              <code value="%"/>
            </amount>
            <location>
              <coding>
                <system value="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"/>
                <code value="C203882"/>
                <display value="Extragranular"/>
              </coding>
              <text value="ER Layer"/>
            </location>
            <hasIngredient>
              <reference>
                <reference value="urn:uuid:85642235-ec81-42d9-970c-eac390f2f604"/>   <!--REFERENCE TO ACETAMINOPHEN  -->
              </reference>
            </hasIngredient>
          </constituent>

In this example:

* The **active ingredient** is **Acetaminophen**.
* The **dosage strength** is 500 mg, but **510 mg** is added to account for the **2% overage**.
* The reason for the overage is listed as **"Manufacturing losses, degradation over time"**.

### Examples

This example demonstrates the batch formula for a commercial batch of a drug product. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [49d3b79e-b436-a242-93ba-b706b4364ab2](Bundle-49d3b79e-b436-a242-93ba-b706b4364ab2.html)

Another batch formula example is  [a242b79e-b706-49d3-93ba-b4364ab2baa3](Bundle-a242b79e-b706-49d3-93ba-b4364ab2baa3.html)


{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="BatchFormula.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/eCTD32P55.md

### Domain Overview

The Product Characterisation of Impurities bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.P.5.5 folder content to the FDA. For each impurity found within the drug substance, in addition to identifying the impurity by name, and UNII if known, the content includes pictorial representations of the impurities produced as the result of elucidating the structure or characterization of the impurity through various techniques, including, but not limited to, NMR and mass spectrometry. 

### Implementer Instructions

* Each 32P55 bundle is for a single drug product.
* All impurities within the drug product are contained in a single bundle.
* The composition supports creation of a 32P55 bundle for a drug product that contains no impurities.
* The preferred formats for both the Impurity Structure Graphic and Analysis Graphic are .png and .svg.
* Guidance in how to prepare SD Files for ANDAs, NDAs, and BLAs is available here: _[Quick Guide to Creating a Structure-Data File (SD File) for Electronic Common Technical Document (eCTD) Submission](https://www.fda.gov/industry/fda-data-standards-advisory-board/fdas-global-substance-registration-system)_. Guidance in how to prepare SD Files for DMFs is available here: [Quick Guide to Creating a Structure-Data File (SD File) for DMF Submissions](https://www.fda.gov/drugs/gdufa-ii-drug-master-files-dmfs/drug-master-file-dmf-submission-resources) 
    * The SD Files should be included in the 32P55 XML bundle as documented in the IG.

### Representation in FHIR

* Drug Substance
    * [Drug Product Impurities](StructureDefinition-pqcmc-drug-product-with-impurities.html) (DrugProductwithImpurities) profile on [MedicinalProductDefinition](https://hl7.org/fhir/R5/medicinalproductdefinition.html) resource
* Impurity Substance
    * [Drug Substance Impurity](StructureDefinition-pqcmc-drug-product-substance-impurity.html) (ImpuritySubstance) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the [Organization](http://hl7.org/fhir/R5/organization.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### CTD 3.2.P.5.5 Profile Map

<div>{%include CharacImprity.svg%}</div>

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This example demonstrates the impurities contained within a drug product that is a coated tablet that contains one bead type that has two coatings. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [Bundle-9e8f2d16-66b1-47ec-878d-f50ae021985b](Bundle-9e8f2d16-66b1-47ec-878d-f50ae021985b.html)

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="ProdImpurities.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/eCTD32S10.md

### Domain Overview

The General Information bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.S.1 folder content to the FDA. This is a higher level CTD folder.  At present this folder’s scope is the drug substance 3.2.S.1.1 – Nomenclature and 3.2.S.1.2 – Structure.  Some of the content of these sections are described below –
- 3.2.S.1.1 - Nomenclature (e.g., GSRS Preferred Name, INN, USAN, etc.)
- 3.2.S.1.2 - Structure
    - In the case of a New Chemical Entity (NCE), the structural formula, including relative and absolute stereochemistry, the molecular formula, and the relative molecular mass should be provided.
    -  For Biotech products, the schematic amino acid sequence indicating glycosylation sites or other post-translational modifications and relative molecular mass should be provided, as appropriate.
- Note: 3.2.S.1.3 is NOT in scope of this bundle profile at this time.

### Implementer Instructions

- For a drug product containing more than one active drug substance, the _CMC eCTD 32S10 Document_ should be provided in its entirety for each drug substance.
    -  _CMC eCTD 32S10 Document_ – profile on[ Bundle](http://hl7.org/fhir/R5/bundle.html) Resource (representing the FHIR XML content as a collection of content in a single “document” and which should be repeated for each active substance). There will be one document profile for each S section in module 3.   

### Representation in FHIR

The domain concepts of Substance Nomenclature and Structure are represented in FHIR in this IG section. Below is a high-level FHIR resource mapping to guide understanding of how the domain concepts are represented using profiles on FHIR resources. Detail study of the profiles and each of the resources will be needed to develop a deeper understanding of this Substance General Information FHIR Profile. Concepts that are key to this domain include the following:

* Drug Substance Nomenclature
    * [Substance General Information](StructureDefinition-pqcmc-drug-substance-nomenclature-structure.html) (DrugSubstanceNomenclatureStructure) profile on the [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) resource
    * [Polymorphic Form](StructureDefinition-pqcmc-polymorphic-form.html) (PolymorphicForm) profile on the [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) resource

* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the<span style="text-decoration:underline;"> [Organization](http://hl7.org/fhir/R5/organization.html) Resource</span>

Note: profile computable names (in parenthesis above) map to names in the Profile Map below. 

### CTD 3.2.S.1 Profile Map

<div>{%include SubstanceGeneral.svg%}</div>

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This image demonstrates a Drug Substance with a polymorph displayed with narrative inserted in the composition text element.  The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [30536c0e-456c-4f90-9f02-da7be1d289e9](Bundle-30536c0e-456c-4f90-9f02-da7be1d289e9.html)

The file includes a SDF file as an attachment.  After processing with the narrative tranform available on the [Downloads page](downloads.html), clink on the file link at the bottom.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="32S10Lev.png" />

</figure>

{::options parse_block_html="true" /}



---

// File: input/pagecontent/eCTD32S23.md

### Domain Overview

The _Substance Control of Materials_ bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.S.2.3 folder content to the FDA. This section provides evidence supporting the identity, composition, and origin of the raw materials used in the manufacture of the active substance.

In addition to identifying the raw material by name (e.g., GSRS Preferred, Generic, Common) and UNII, the content includes information such as: quality standard, identification of the source organism for biologically sourced materials, manufacturer, supplier, and as appropriate, evidence demonstrating that the materials meet the standards appropriate for their intended use.

### Implementer Instructions

- Each 32S23 bundle is for a single active substance.
-  All raw materials for one active substance are contained in a single bundle.
- Refer to[ Quality Specification Profile](https://build.fhir.org/ig/HL7/FHIR-us-pq-cmc-fdaeCTDSP4151.html)

### Representation in FHIR

The domain concepts of Substance Control of Materials are represented in FHIR in this IG. Below is a high-level FHIR resource mapping to guide the understanding of how the domain concepts are represented using profiles on FHIR Resources. Detail study of the profiles and each of the resources will be needed for developing a deeper understanding of this Substance Control of Materials FHIR Bundle Profile. Concepts that are key to this domain include the following:

* Raw Material
    * [Excipient Drug Substance](StructureDefinition-pqcmc-excipient.html) (ExcipientRaw) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Quality Specification
    * [Quality Specification](StructureDefinition-pqcmc-quality-specification.html) (QualitySpecification) profile on [PlanDefinition](http://hl7.org/fhir/R5/plandefinition.html) resource
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the<span style="text-decoration:underline;"> [Organization](http://hl7.org/fhir/R5/organization.html) Resource</span>
* Substance
    * [Substance Definition Handle](StructureDefinition-pqcmc-routine-drug-substance.html) (SubstanceDefinitionHandle) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### eCTD 3.2.S.2.3 Profile Map

<div>{%include SubstanceControlMat.svg%}</div>

### Usage Patterns

See Usage Patterns on[ Quality Specification Profile](eCTDSP4151.html)

### Examples

This example demonstrates a substance with three raw materials. One raw material has a source information backbone element instance. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [7ce2088d-d281-4e2f-9a25-120a1f9805d1](Bundle-7ce2088d-d281-4e2f-9a25-120a1f9805d1.html)

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="materials.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/eCTD32S3.md

### Domain Overview

The Substance Characterisation bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.S.3 folder content to the FDA. This is a higher level CTD folder. At present this folder’s scope is the drug substance 3.2.S.3.1 – Elucidation of Structure and Other Characteristics and 3.2.S.3.2 – Impurities. Some of the content of these sections are described below –

* 3.2.S.3.1 - Elucidation of Structure and Other Characteristics
    * Pictorial representations of the drug substance produced as the result of elucidating the structure or characterization of the drug substance through various techniques, including, but not limited to, NMR and mass spectrometry.
* 3.2.S.3.2 – Impurities
    * For each impurity found within the drug substance, in addition to identifying the impurity by name, and UNII if known, the content includes pictorial representations of the impurities produced as the result of elucidating the structure or characterization of the impurity through various techniques, including, but not limited to, NMR and mass spectrometry.

### Implementer Instructions

* For a drug product containing more than one active drug substance, the CMC eCTD 32S3 Document should be provided in its entirety for each drug substance.
    * CMC eCTD 32S3 Document – profile on Bundle Resource (representing the FHIR XML content as a collection of content in a single “document” and which should be repeated for each active substance). There will be one document profile for each S section in module 3.
* The preferred formats for both the Impurity Structure Graphic and Analysis Graphic are .png and .svg.
* Guidance in how to prepare SD Files for ANDAs, NDAs, and BLAs is available here: _[Quick Guide to Creating a Structure-Data File (SD File) for Electronic Common Technical Document (eCTD) Submission](https://www.fda.gov/industry/fda-data-standards-advisory-board/fdas-global-substance-registration-system)_. Guidance in how to prepare SD Files for DMFs is available here: [Quick Guide to Creating a Structure-Data File (SD File) for DMF Submissions](https://www.fda.gov/drugs/gdufa-ii-drug-master-files-dmfs/drug-master-file-dmf-submission-resources) 
    * The SD Files should be included in the 32S3 XML bundle as documented in the IG.

### Representation in FHIR

* Drug Substance
    * [Drug Substance](StructureDefinition-pqcmc-drug-substance-characterisation.html) (DrugSubstanceCharacterisation) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Impurity Substance
    * [Drug Substance Impurity](StructureDefinition-pqcmc-drug-product-substance-impurity.html) (ImpuritySubstance) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the [Organization](http://hl7.org/fhir/R5/organization.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### CTD 3.2.S.3 Profile Map

{%include SubstanceImpurity.svg%}

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This example demonstrates the characterization and impurities of ethylacetate. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [32532fe8-1bfb-4a0a-998d-9294742a9519](Bundle-32532fe8-1bfb-4a0a-998d-9294742a9519.html)

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="substanceCharacter.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/eCTDSP4151.md

### Domain Overview

Specification means the quality standard (i.e., tests, analytical procedures, and acceptance criteria) provided in an approved application to confirm the quality of drug substances, drug products, intermediates, raw materials, reagents, components, in-process materials, container closure systems, and other materials used in the production of a drug substance or drug product. For the purpose of this definition, the term “acceptance criteria” means numerical limits, ranges, or other criteria for the tests described [21 CFR 314.3].

The Quality Specification bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.S.4.1, 3.2.P.4, and 3.2.P.5.1 folder content to the FDA. These sections provide evidence demonstrating that the material meets the standards appropriate for their intended use, where the material is an API (3.2.S.4.1), Excipient (3.2.P.4), or Drug Product (3.2.P.5.1).

### Implementer Instructions

* A Quality Specification has one or more Tests.
* Tests should be entered in the file in the order in which they should be displayed.
* Each Test has one or more Stages.
* Each Stage has one or more Acceptance Criteria.
* A Quality Specification is declared for either a Drug Product or an Ingredient (API) or an Excipient/Raw Material. The same subject refence is used for both excipients and raw material.
    * The Quality Specifications for all the raw materials for a Drug Substance are packaged together in a single bundle. in Refer to [Substance Control of Materials](eCTD32S23.html) for Quality Specification for a Raw Material. 

### Representation in FHIR

The domain concepts of Quality Specification are represented in FHIR in this IG. Below is a high-level FHIR resource mapping to guide the understanding of how the domain concepts are represented using profiles on FHIR Resources. Detail study of the profiles and each of the resources will be needed for developing a deeper understanding of this Quality Specification FHIR Bundle Profile. Concepts that are key to this domain include the following:

* Specification, Test, Acceptance Criteria
    * [Quality Specification](StructureDefinition-pqcmc-quality-specification.html) (QualitySpecification) profile on [PlanDefinition](http://hl7.org/fhir/R5/plandefinition.html) resource
* Drug Product
    * [Routine Drug Product](StructureDefinition-pqcmc-drug-product-handle.html) (DrugProductHandle) profile on [MedicinalProductDefinition](http://hl7.org/fhir/R5/medicinalproductdefinition.html) resource
* API 
    * [Substance Definition Handle](StructureDefinition-pqcmc-routine-drug-substance.html) (SubstanceDefinitionHandle) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Excipient/Raw Material 
    * [Excipient Drug Substance](StructureDefinition-pqcmc-excipient.html) (ExcipientRaw) profile [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource 
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the<span style="text-decoration:underline;"> [Organization](http://hl7.org/fhir/R5/organization.html) Resource</span>

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### eCTD Heading 3.2.S.4.1, 3.2.P.4 and 3.2.P.5.1 Profile Map
<div>{%include Specification.svg%}</div>

### Usage Patterns

#### Acceptance Criteria as Goals

Both the acceptable qualitative or text value and the acceptable quantitative or numeric value for the result of the tests are expressed with goal as a target. The numeric values have multiple structures to capture the detail of the acceptance criteria Original Text. A single specification may not use all the possible acceptance criteria types so a realistic example would fail in the objective of elucidating all the permutations. The following XML snippets illustrate how to implement the various acceptance criteria types.

##### Representing Acceptance Criteria (Numeric EQ)
   
A numeric EQ acceptance criteria may or may not use an = sign in the text. Often it is stated as a single value. An examples original text: ```0.05 %```. The absence of a comparator in a Quantity datatype indicates equality.

```xml
<target>
  <detailQuantity>
    <value value="0.05"/>
    <unit value="percent"/>
    <system value="http://unitsofmeasure.org"/>
    <code value="%"/>
  </detailQuantity>
</target>
```

##### Representing Acceptance Criteria (Numeric LT)
A numeric LT acceptance criteria may use LT in the text or the ```&lt;``` the escaped form of the character '<'. An example original text: ```&lt; 0.05 %```. 

```xml
<target>
  <detailQuantity>
    <value value="0.05"/>
    <comparator value="&lt;"/>
    <unit value="percent"/>
    <system value="http://unitsofmeasure.org"/>
    <code value="%"/>
  </detailQuantity>
</target>
```
            
##### Representing Acceptance Criteria (Numeric MT)
A numeric MT acceptance criteria may use MT in the text or the ```&gt;``` the escaped form of the character '>'. An example original text: ```&gt; 0.27 percent```.

```xml
<target>
  <detailQuantity>
    <value value="0.27"/>
    <comparator value="&gt;"/>
    <unit value="percent"/>
    <system value="http://unitsofmeasure.org"/>
    <code value="%"/>
  </detailQuantity>
</target>
```

##### Representing Acceptance Criteria (Numeric NLT)
The Not Less Than (NLT) is used when the maximum limit includes the limit value as acceptable. In this example, each unit is NLT Q + 5% the value must be calculated to be structured. According to the method, Q = 85. The structured acceptance criterion must be transformed into a single value (85 + 4.25 = 89.25). The maximum acceptable value is 89.25%. NLT is represented by the ```>=``` (greater than or equal to) comparator, which is encoded as ```&gt;=```.

```xml
<target>
  <detailQuantity>
    <value value="89.25"/>
    <comparator value="&gt;="/>
    <unit value="percent"/>
    <system value="http://unitsofmeasure.org"/>
    <code value="%"/>
  </detailQuantity>
</target>
```  

##### Representing Acceptance Criteria (Numeric NMT)
    
The Not More Than (NMT) is used when the minimum limit includes the limit value as acceptable. In this example, NMT 450 ppm at time of release, the phrase , “at time of release” is not included in the target. That information is captured in the Acceptance Criteria Usage as the coded value “Release”. NMT is represented by the ```<=``` (less than or equal to) comparator, which is encoded as ```&lt;=```.

```xml
<target>
  <detailQuantity>
    <value value="450"/>
    <comparator value="&lt;="/>
    <unit value="part per million"/>
    <system value="http://unitsofmeasure.org"/> 
    <code value="[ppm]"/>
  </detailQuantity>
</target>
```

##### Representing Acceptance Criteria (Numeric Range)

The Numeric Range is used when the method specifies an upper and lower limit. Numeric Range is represented by a modifier extension that contains a 'low' and 'high' Quantity. The limits can be inclusive or exclusive limit values. To structure this Acceptance Criteria, carefully read the original text. Words such as “to” and “between” usually mean exclusive of the limit values. Original text with the interpretation codes is not ambiguous. Consult the method text when in doubt. Examples of original text: “85.0% to 115.0% Label Claim” - use ```&gt;``` and ```&lt;```; “between 85.0% and 115.0% Label Claim” - use ```&gt;``` and ```&lt;``` and “NLT 85.0% and NMT 115.0% Label Claim” - use ```&gt;=``` and ```&lt;=```.  

```xml
<target>
  <modifierExtension url="http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/pq-target-range">
    <extension url="low">
      <valueQuantity>
        <value value="85.0"/>
        <comparator value="&gt;="/>
        <unit value="percent"/>
        <system value="http://unitsofmeasure.org"/>
        <code value="%"/>
      </valueQuantity>
    </extension>
    <extension url="high">
      <valueQuantity>
        <value value="115.0"/>
        <comparator value="&lt;="/>
        <unit value="percent"/>
        <system value="http://unitsofmeasure.org"/>
        <code value="%"/>
      </valueQuantity>
    </extension>
  </modifierExtension>
</target>
```
    
##### Representing Acceptance Criteria (Text)
Acceptance Criteria (Text) is strictly for qualitative constraints. These will typically have a descriptive phrase. An example original text is, “Clear, colorless solution free of visible particulates”. Because it is not numeric, the relative interpretation codes do not apply.

```xml       
<target>
  <detailString value="Clear, colorless solution free of visible particulates"/>
</target>
```
##### Representing Replicate Number (Integer)
When the number of replicates is specified in the test, enter it as an integer.  The integer has no unit and is simply a count.   

An example original text: n=10
```xml
<target>
  <detailInteger value="10"/>
</target>
```
#### Report only Acceptance Criteria
If the analytic procedure only requires that the results be reported, use a text result

```xml
<goal id="b843d27a-3f07-4ea2-a670-05d16db3320a">
  <description>
    <text value="Record result"/>
  </description>
  <addresses>
    <coding>
      <system value="http://unitsofmeasure.org"/>
      <code value="C134030"/>
      <display value="Stability"/>
    </coding>
  </addresses>
  <target>
    <detailString value="As Reported"/>
  </target>
</goal>
```

#### Complex Acceptance Criteria
Acceptace Criteria are written in spoken languages and can be a combination of independent clauses with subordinate clauses.  When this occurs, the modeling in the goal backbone element requries multiple targets.  Break the Acceptance Criteria phrase into its parts.  Each part becomes a target. In the example below, "Average of 24 units (S1 + S2 + S3) is equal to or greater than Q, not more than 2 units are less than Q – 15%, no unit is less than Q – 25%" becomes three targets: Average of 24 units, units less than Q – 15%, and units less than Q – 25%.  Each has a detailQuantity to express the acceptable amount. 

```xml
<goal id="1f5530b9-5d21-46ef-80f3-1ae6121c88f9">
  <description>
    <text value="Average of 24 units (S1 + S2 + S3) is equal to or greater than Q, not more than 2 units are less than Q – 15%, no unit is less than Q – 25%"/>
  </description>
  <addresses>
    <coding>
      <system value="http://hl7.org/fhir/us/pq-cmc-fda/CodeSystem/cmc-ncit-dummy"/>
      <code value="C134029"/>
      <display value="Release"/>
    </coding>
  </addresses>
  <target>
    <measure>
      <text value="Average of 24 units">
    </measure>
    <detailQuantity>
      <value value="80"/>
      <comparator value="&gt;="/>
      <unit value="percent"/>
      <system value="http://unitsofmeasure.org"/>
      <code value="%"/>
    </detailQuantity>
  </target>
  <target>
    <measure>
      <text value="NMT 2 units less than Q – 15%"/>
    </measure>
    <detailQuantity>
      <value value="2"/>
      <comparator value="&lt;="/>
      <unit value="Amb a 1 units"/>
      <system value="http://unitsofmeasure.org"/>    
      <code value="[Amb'a'1'U]"/>
    </detailQuantity>
  </target>
  <target>
    <measure>
      <text value="no units less than Q – 25%"/>
    </measure>
    <detailQuantity>
      <value value="0"/>
      <unit value="Amb a 1 units"/>
      <system value="http://unitsofmeasure.org"/>
      <code value="[Amb'a'1'U]"/>
    </detailQuantity>
  </target>
</goal>
```

 
#### Special Cases for Method Representation

##### Representing Alternate Test Methods
Some specifications accept equivalent tests as in this example the Identity test can be performed with either Spectrophotometry or HPLC. The alternate relationship is expressed as a relatedAction.  Alternate tests can be in groups of more than two. The alternate test must have a linkId. Other tests within the same Alternate test group will point to each other's linkIDs through the relatedAction element relatedAction.targetId. This will be helpful when modifying a specification to add an alternate test without having to renumber subsequent tests.

Note: "..." is used to compress the XML so that the relevant sections can be seen more clearly.


    <action>

       <linkId value="2047a6b6-e3fc-4071-8989-526297579091"/>
       <prefix value="Single Stage"/>
       <title value="Spectrophotometry Identification"/>
       <code>
      ...
         <text value="Spectrophotometry"/>
       </code>
       <reason>
      ...
       </reason>
       <documentation>
      ...
       </documentation>
       <goalId value="32649771-1290-4386-9cf7-7a72274f22b4"/>
       <relatedAction>
         <targetId value="84d64dd8-b799-418a-a713-a854c4d3c2b9"/>
         <relationship value="concurrent"/>
       </relatedAction>
     </action>
     <action>
       <linkId value="84d64dd8-b799-418a-a713-a854c4d3c2b9"/>
       <prefix value="Single Stage"/>
       <title value="Identity - Ferric Chloride"/>
       <code>
      ...
         <text value="HPLC"/>
       </code>
       <reason>
      ...
       </reason>
       <documentation>
      ...
       </documentation>
       <goalId value="59a4ca76-858e-4d58-8e5f-88e75f51ec33"/>
       <relatedAction>
         <targetId value="2047a6b6-e3fc-4071-8989-526297579091"/>
         <relationship value="concurrent"/>
       </relatedAction>
     </action>
 
##### Representing Staged Tests
Staged tests are a sequence of steps.  Use the Action.Action element and identify the stages with the prefix element.  Feedback on the necessity of adding the relatedAction backbone element at Action.Action is requested. If the conditional nature of the stages must be expressed, then it will be added.

Note: "..." is used to compress the XML so that the relevant sections can be seen more clearly.


           <action>
             <linkId value="1fc4361a-52d9-46f1-acff-7969b10e8dfd"/>
             <title value="Dissolution - 30 minute"/>
      ...
             <reason>
               <extension url="http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/pq-hierarchical-level-extension">
                 <valueInteger value="1"/>
               </extension>
               <coding>
                 <system value="http://hl7.org/fhir/us/pq-cmc-fda/CodeSystem/pqcmc-test-category-codes"/>
                 <code value="TC9"/>
                 <display value="Dissolution"/>
               </coding>
             </reason>
      ...
             <action>
               <linkId value="1fc4361a-52d9-46f1-acff-7969b10e8dfd"/>
               <prefix value="Stage 1"/>
               <goalId value="489bb798-477b-4d68-8189-ed58b388f25e"/>
               <goalId value="0f191b79-ea6c-4480-9bb2-2c5501fa461e"/>
             </action>
             <action>
               <linkId value="1fc4361a-52d9-46f1-acff-7969b10e8dfd"/>
               <prefix value="Stage 2"/>
               <goalId value="cbe267a3-bcbe-4ffc-bf2e-843760f50249"/>
               <goalId value="3b385840-ad9c-478f-8d94-e6610f2458f9"/>
             </action>
             <action>

##### Representing Acceptance Criteria of Averaged Replicate Tests
There are two scenarios for averages. The acceptance criteria of the average is the same as the individual test, in which case the same test can be encoded in the top level Action backbone element. Its title is “Single Stage” and there are one or many goalIDs. Or the acceptance criteria of the average is different than the individual test, in which case either use the Action for the average and Action.Action for the individual acceptance criteria or move down a level to Action.Action and Action.Action.Action. The profile was designed this way to provide flexibility to implementers. The acceptance criteria should indicate the number of replicates in the referenced analytic procedure.



##### Representing Methods with Many Test Measures
The Action backbone is profiled to three levels.  The first level represents the method (analytic procedure) concepts and a simple tests. The second level represents test groups and stages. In the simplest case is _Single Stage_ and two tests. A _Single Stage_ , one test is accomplished at the highest Action level. The third level represents sub-tests. The middle Action level can have Acceptance Criteria.  These are typically calculations on the values obtained from the sub-tests.  Methods using Cascade Impactors typically have Acceptance Criteria for the plates and group the plates and assign Acceptance Criteria to the groups.  The example below shows three Groups and their associated plates.  Both the Groups and their sub-test each have their own goalIDs that link to their respective Acceptance Criteria.  The word "Stage" for the sub-tests has no association with _Stage_ as mapped to the PlanDefinition resource.  In this case it referring to the stage of the cascade impactor modelling inhalation.

Note: "..." is used to compress the XML so that the relevant sections can be seen more clearly.

         <action>
             <prefix value="Single Stage"/>
             <title value="Cascade Impactor"/>
             <code>
               <coding>		...
             </code>
             <reason>
               <extension url="http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/pq-hierarchical-level-extension">
                 <valueInteger value="1"/>
               </extension>
               <coding>
                 <system value="http://hl7.org/fhir/us/pq-cmc-fda/CodeSystem/pqcmc-test-category-codes"/>
                 <code value="TC15"/>
                 <display value="Particle Size Distribution"/>
               </coding>
             </reason>
             <documentation>
		...
             </documentation>
             <action>
               <title value="Group 1"/>
               <goalId value="d7afe834-a9a7-45ae-9213-52c8fd8505bd"/>
               <action>
                 <title value="Stem"/>
                 <goalId value="fc10d71c-86e9-4c52-a3df-9a5cde26f031"/>
               </action>
               <action>
                 <title value="Actuator"/>
                 <goalId value="ce759246-bbd4-4713-8836-6dbb10e5fefe"/>
               </action>
               <action>
                 <title value="Throat"/>
                 <goalId value="abf5db8b-8d7e-471e-8047-98afe93f07d4"/>
               </action>
             </action>
             <action>
               <title value="Group 2"/>
               <goalId value="a515beb5-dc2b-4c36-bf0a-f6b70582c354"/>
               <action>
                 <title value="Stage 0"/>
                 <goalId value="fbd96100-3881-493c-adaf-808fe08331a1"/>
               </action>
		...
               <action>
                 <title value="Stage 3"/>
                 <goalId value="569399c3-e5af-4449-a636-6ebe34174056"/>
               </action>
             </action>
             <action>
               <title value="Group 3"/>
               <goalId value="552eef1e-2918-4fa9-8603-3df2284454b9"/>
               <action>
                 <title value="Stage 4"/>
                 <goalId value="4adb336d-21cd-4792-98dd-e265532c533f"/>
               </action>
		...
               <action>
                 <title value="Filter"/>
                 <goalId value="6559f4e2-5134-4637-a587-421b4095a961"/>
               </action>
             </action>
           </action>


##### Representing Unidentified RRT Tests

The Action.Action.Action.prefix element is reserved for RRT specifications.  Enter "RRT" in the value for Action.Action.Action.prefix. The Action.Action.Action.title stores the actual RRT value. The goalID references the acceptance criteria.

Note: "..." is used to compress the XML so that the relevant sections can be seen more clearly.

    <action>
	<prefix value="Single Stage"/>
	<title value="Impurities"/>
    ...
        <action>
            <title value="Unidentified Impurities"/>
            <action>
                <prefix value="RRT"/>
                <title value="2.2"/>
                <goalId value="f832168b-d0a4-4637-91cd-183629494d59"/>
            </action>
            <action>
                <prefix value="RRT"/>
                <title value="2.4"/>
                <goalId value="cc06912d-0aca-4083-a7ce-bb57b4dfc4a6"/>
            </action>
            <action>
                <prefix value="RRT"/>
                <title value="3.41"/>
                <goalId value="5ff35fae-2843-4180-b509-b3c6254871f4"/>
            </action>
        </action>
    </action>

### Example 3.2.S.4.1, 3.2.P.4 and 3.2.P.5.1 Bundle

This example demonstrates a quality specification for a Drug Product. The first image displays the XML for 3.2.P.5.1 as it appears in a browser with the narrative inserted in the composition text element. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [4a7e17c1-a611-4cc7-9a71-8005a8b427ab](Bundle-4a7e17c1-a611-4cc7-9a71-8005a8b427ab.html)  

Additionally, there is an example specification to show the reference to a Drug Substance [6004e36e-7df9-469d-9b29-8e9f9bd7e95f](Bundle-6004e36e-7df9-469d-9b29-8e9f9bd7e95f.html). Its [narrative layout](#drug-substance-specification-example) is show below the Drug Product specification.

For examples of specifications referencing excipients see: 
- [Control of Materials Example](Bundle-7ce2088d-d281-4e2f-9a25-120a1f9805d1.html)

#### Drug Product Specification Example

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="ProdSpec.png" />

</figure>

{::options parse_block_html="true" /}

#### Drug Substance Specification Example
  This is an example showing a drug substance as the subject of the specification.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="APIspec.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/index.md

**Overview**

The US Food and Drug Administration (FDA) intends to identify and standardize data elements and terminologies for information commonly used and submitted in support of the Agency’s review of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls (PQ/CMC) section of drug product applications. These data elements are being defined and mapped to FHIR resources in stages then published in this Implementation Guide for use by industry and vendors who support this process. For more information on the PQ/CMC Project and related activities outside of HL7, please visit the FDA PQ/CMC data standards page [here](https://www.fda.gov/industry/fda-data-standards-advisory-board/pharmaceutical-quality-chemistry-manufacturing-controls-pqcmc).  

**NOTE:** When formally announced by FDA, the version(s) of this Implementation Guide specified by FDA will define the instructions for preparation of FHIR-based Pharmaceutical Quality, Chemistry, Manufacturing & Controls data for submission to FDA.

### Background

Drug product application content, including PQ/CMC, is harmonized internationally by the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use ([ICH](https://www.ich.org)). The content standard for drug product applications is the ICH Common Technical Document (CTD) guideline which also has an ICH Topic ID of M4 (Multidisciplinary Guideline 4). The PQ/CMC content within the M4 Topic is identified as the Quality content and the section of the M4 guideline specific to PQ-CMC content is M4Q. When revision numbers are included, the resulting identifier is M4Q(R1), M4Q(R2), etc. The M4 guideline associates a “module” framework with numbers so that Module 2.3 is the Quality Overall Summary (one of several summaries in Module 2) and Module 3 is the Quality Data section (see the [ICH CTD page](https://ich.org/page/ctd#2)). The M4Q CTD guideline describes the content of both CTD Modules 2.3 and 3. Note that ICH terms typically use a British English spelling.

ICH created an associated guideline to harmonize the electronic exchange of CTD content (e.g., sections or subsections in pdf, xml, etc.) which is called the electronic Common Technical Document ([eCTD](https://www.ich.org/page/multidisciplinary-guidelines#8-2)) and is identified as the ICH M8 Topic (Multidisciplinary Guideline 8). Within the ICH eCTD (M8) guideline, the format and technology for exchange is defined. The eCTD guideline provides the regulatory application exchange framework in which FHIR-based CTD content “document bundles” will be exchanged between industry and the FDA. **NOTE**: Details about how to configure an eCTD submission to use FHIR-based PQ/CMC document bundles are outside of the scope of this IG. The eCTD is designed to reflect CTD concepts and the two acronyms are often used interchangeably.

Figure 1 below shows the high-level data flow of ICH CTD Quality data (PQ/CMC) from a pharmaceutical company to the US FDA. 

<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1100px" src="figure1.png" alt="FHIR Resources leveraged in PQ/CMC Phase 1 Scope"/>
  <figcaption style="text-align: center">Figure 1: High-level data flow for submission of CTD Module 3 and 2.3 Quality data in FHIR to the US FDA</figcaption>
</figure>

### Project Scope

The scope of FDA’s PQ/CMC project is to develop structured data standards for content of ICH CTD Modules 2.3 and 3 when the content is amenable to structuring. The data standards development process is a phased approach, and the subdomains of CMC are grouped into phases. Each subdomain roughly aligns with a particular CTD section. Figure 2 below shows the phases of FDA’s standards development effort. As the data standards are developed, FDA publishes the draft standards to the industry through the Federal Register Notice (FRN) process to solicit industry feedback and enhance the data standards.


<figure>
  <center><img style="padding-top:0;padding-bottom:30px;width: 60%; margin: auto;"  src="figure2.png" alt="FHIR Resources leveraged in PQ/CMC Phase 1 Scope"/></center>
  <figcaption style="text-align: center">Figure 2: Data Standards Development Phases</figcaption>
</figure>

#### IG Scope

This PQ/CMC FHIR IG is eventually intended to represent all the US FDA’s PQ/CMC data developed across all phases.

- This FHIR IG is planned to follow an iterative approach, meaning that as new subdomains of the phases and sections of CTD M3 are structured and represented in FHIR, new FHIR profiles will be added to this IG to represent the content of those specific CTD M3 sections.

-  In support of an iterative PQ/CMC IG approach, the phases have been further grouped into implementable smaller groups called “Stages”. For each iteration of this IG, FDA plans to ballot and publish in stages. Each new stage will cover a particular set of subdomains/CTD sections of the larger PQ/CMC domain. For example, the first ballot, May 2024 ballot cycle, is referred to as Stage 1. This Stage 1 covers the following CTD sections:

    - Description and Composition of the Drug Product (eCTD 3.2.P.1)
    - General Substance Information (eCTD 3.2.S.1)
    - Control of Materials (eCTD 3.2.S.2.3)
    - Specification (eCTD 3.2.S.4.1; 3.2.P.4.1; 3.2.P.5.1)

- In the future, FDA will add Stage 2 subdomains to this IG and will take Stage 2 subdomains to HL7 ballot, and so on. Ballot dates for future stages have not yet been finalized.
- Please note that new versions of this IG may include changes to previous published stages.
- The FHIR profiles defined in this IG are aligned for use within eCTD v 4.0 or later and may not fit with eCTD v3 headings.
- The Stage 1 CTD sections and FHIR profiles are currently limited to the Solid Oral Dosage Form (SODF).
- All co-packaged products that include diluents are out of scope at this time.

#### Pharmaceutical Quality Projects in BR&R WG

At HL7, this project is referred to as Pharmaceutical Quality – Chemistry, Manufacturing and Controls (PQ-CMC) Submissions to FDA. BR&R WG maintains a Confluence page for this project [here](https://confluence.hl7.org/display/BRR/Pharmaceutical+Quality+-+Chemistry%2C+Manufacturing+and+Controls+%28PQ-CMC%29+Submissions+to+FDA) 

There is another project in HL7 BR&R that covers the domain of Pharmaceutical Quality. That project’s focus is on CMC data exchange between biopharmaceutical companies and their partners. It is often referred to as Pharmaceutical Quality (Industry). BR&R WG maintains a Confluence page for this Industry project [here](https://confluence.hl7.org/display/BRR/Pharmaceutical+Quality+%28PQ%29+-+Industry+Use+Case) 

### IG Overview

#### FHIR Resources and Profiles

The first version of the PQ/CMC IG is bound to FHIR R5. It consists of four FHIR bundle profiles that are scoped to the FDA PQ/CMC Phase 1, Stage 1 requirements and are aligned with sections of Module 3 of ICH CTD as indicated by the profile title.

The FHIR resources leveraged in all of Phase 1 are listed below and represented in Figure 3 below. The four Stage 1 FHIR bundle profiles are composed from eight FHIR Resources. These eight FHIR resources are identified in the list below with an "*" asterisk after the resource name.

Note: The first 2 FHIR resources – Bundle and Composition are organizational profiles used to package the content/domain resources.

1.       Bundle *
2.       Composition *
3.       DiagnosticReport
4.       Ingredient *
5.       Medication
6.       MedicinalProductDefinition *
7.       Observation
8.       Organization *
9.       PlanDefinition *
10.   ResearchStudy
11.   Substance
12.   SubstanceDefinition *
13.   ManufacturedItemDefinition *
14.   PackagedProductDefinition *

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="figure3.png" alt="FHIR Resources leveraged in PQ/CMC Phase 1 Scope"/>
  <figcaption style="text-align: center">Figure 3: PQ/CMC Phase 1 Scope FHIR Resources</figcaption>
</figure>

{::options parse_block_html="true" /}

#### PQ/CMC FHIR Profiles

As mentioned above, the PQ/CMC project Phase 1 structured data requirements are eventually planned to be represented in the PQ/CMC FHIR IG.

The profiles are designed for use as defined in Module 3 of eCTD v 4.0. The table below contains a mapping of the FHIR Profiles to the Phase 1 requirements. The PQ/CMC FHIR profiles can be accessed through the "eCTD Profiles" menu in the main bar at the top of this page or via hyperlinks in the table below. Additional menu items and links will be added as new profiles are built out and balloted.


<table>
  <tr>
   <td><strong>No.</strong>
   </td>
   <td><strong>PQ/CMC FHIR Profile Name</strong>
   </td>
   <td><strong>eCTD Module 3 Section</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>[Description and Composition of the Drug Product](https://hl7.org/fhir/us/pq-cmc-fda/2024May/eCTD32P10.html)
   </td>
   <td>3.2.P.1.0
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Product Batch Formula
   </td>
   <td>3.2.P.3.2
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Product Characterisation of Impurities
   </td>
   <td>3.2.P.5.5
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>Product Container Closure
   </td>
   <td>3.2.P.7.0
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>[General Information] (https://hl7.org/fhir/us/pq-cmc-fda/2024May/eCTD32S10.html)
   </td>
   <td>3.2.S.1.0
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>[Control of Materials] (https://hl7.org/fhir/us/pq-cmc-fda/2024May/eCTD32S23.html)
   </td>
   <td>3.2.S.2.3
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>Substance Characterisation
   </td>
   <td>3.2.S.3
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>Substance Container Closure System
   </td>
   <td>3.2.S.6.0
   </td>
  </tr>
  <tr>
   <td>9
   </td>
   <td>[Specification] (https://hl7.org/fhir/us/pq-cmc-fda/2024May/eCTDSP4151.html)
   </td>
   <td>3.2.S.4.1; 3.2.P.4.1; 3.2.P.5.1
   </td>
  </tr>
  <tr>
   <td>10
   </td>
   <td>Batch Analyses
   </td>
   <td>3.2.S.4.4; 3.2.P.5.4
   </td>
  </tr>
  <tr>
   <td>11
   </td>
   <td>Stability Summary
   </td>
   <td>3.2.S.7.1; 3.2.P.8.1
   </td>
  </tr>
  <tr>
   <td>12
   </td>
   <td>Stability Data
   </td>
   <td>3.2.S.7.3; 3.2.P.8.3
   </td>
  </tr>
</table>


#### Credits

The development of this Implementation Guide is an initiative funded by the US FDA.

- Primary IG authors: 
    - Catherine Hosage Norman (mailto: chn@module3solutions.com)
    - Smita Hastak (mailto: shastak@samvit-solutions.com)
    - Lisa-Marie Schick (mailto: lschick@samvit-solutions.com)
    - Bill Friggle (mailto: wfriggle@samvit-solutions.com)
    - Christopher Norman (mailto: chris@module3solutions.com)

- Program Management:
	- Scott Gordon (mailto: [pq-cmc@fda.hhs.gov](mailto:pq-cmc@fda.hhs.gov))
  - Josiah Tindor (IBM PM)
  
At HL7, The the PQ/CMC Projects is Sponsored sponsored by the HL7 Biomedical Research & Regulation (BR&R) work Work groupGroup.

The PQ/CMC team would like to acknowledge the contribution of the BR&R WG members who have participated in the Medication-related FHIR resource discussions and helped refine the resources.

#### IP Statements
{% include ip-statements.xhtml %} 

#### Dependencies
{% include dependency-table.xhtml %}

#### Globals
{% include globals-table.xhtml %}


---

// File: input/pagecontent/instruction.md

### Understanding FHIR

This implementation guide is based on the HL7 [FHIR](http://hl7.org/fhir/R5/index.html)<span style="text-decoration:underline;"> </span>
It uses terminology, notations and design principles that are specific to FHIR. Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

  - [FHIR overview](http://hl7.org/fhir/R5/overview.html)

  - [Developer's introduction](http://hl7.org/fhir/R5/overview-dev.html)<span style="text-decoration:underline;"> </span>

  - [FHIR data types](http://hl7.org/fhir/R5/datatypes.html)<span style="text-decoration:underline;"> </span>

  - [Using codes](http://hl7.org/fhir/R5/terminologies.html)<span style="text-decoration:underline;"> </span>

  - [References between resources](http://hl7.org/fhir/R5/references.html)<span style="text-decoration:underline;"> </span>

  - [How to read resource & profile definitions](http://hl7.org/fhir/R5/formats.html)<span style="text-decoration:underline;"> </span>

  - [Base resource](http://hl7.org/fhir/R5/resource.html)<span style="text-decoration:underline;"> </span>

  This IG only contains bundles of the document type because the bundle instances will be delivered with a eCTD filing.  Any implementation adapting these for use in a FHIR server should read [RESTful operations](http://hl7.org/fhir/R5/http.html)

#### Conformance and Must Support
FHIR defines the notion of [Must Support](http://hl7.org/fhir/R5/conformance-rules.html#mustSupport).  To help establish conformance expectations for systems. For the purposes of _this_ implementation guide, "must support" shall be interpreted as follows:
- Conformant systems SHALL be capable of sending and receiving the data element.
- When a system persists a resource instance, all "must support" elements SHALL be persisted and retrieved with other elements.

<p>
    This implementation guide defines profiles on several resources.  Implementations are expected to be conformant with these profiles to be conformant with this implementation guide.
</p>
<p>
- Developers implementing the Invariants will need to be familiar with the [FHIRPath Specification](http://hl7.org/fhirpath)
</p>

### Acronyms

Acronyms contained in this IG:

- ANDA - Abbreviated New Drug Application
- BLA - Biologics License Application
- BR&R WG - Biomedical Research & Regulation Work Group
- CTD - Common Technical Document
- DMF - Drug Master File
- eCTD - electronic Common Technical Document
- FDA - Food and Drug Administration
- FHIR - Fast Healthcare Interoperability Resources
- FRN - Federal Register Notice
- HL7 - Health Level 7
- ICH - International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use
- IG - Implementation Guide
- NCE - New Chemical Entity
- NDA - New Drug Application
- NDC - National Drug Code
- PQ/CMC - Pharmaceutical Quality/Chemistry Manufacturing and Controls
- SODF - Solid Oral Dosage Form

### Diagrams and General Notes on Bundles

FHIR bundles are used to group a collection of resources into a single package. This can include various resources like lab records, research studies, and more. Each Bundle profile defines a specific use case or standard for how resources should be bundled together. Profiles ensure that the bundles meet certain requirements and follow consistent formatting rules. The Composition profiles are categorized under various document types to better organize and define their use cases. Each profile in a bundle corresponds to a specific type of document or record. For FHIR in general, a Composition profile might be used for documents such as a discharge summary or a lab report. In this Implementation Guide (IG), the Composition profiles are used to itemize the elements required in a particular eCTD section. The diagram shown below functions as a legend for the symbols and notations used in the Composition profile diagrams. This is crucial for interpreting the relationships and details correctly.

<div>{%include legend.svg%}</div>

For more detailed information about the profiles illustrated in the diagrams, users can refer to the Artifacts page and the profile pages linked in the diagrams. This page provides specifics about the requirements for each profile, helping users understand how to implement or use the profiles effectively. By examining the diagrams and referencing the profiles on the [Artifacts page](artifacts.html) and individual profile pages, users can gain a thorough understanding of how FHIR bundles in this IG are structured and how to apply the profiles in practice.

**Note**:  The example bundles provided in the eCTD bundle pages are not linked to any real products or substances. They are illustrative, sometimes using real chemical compounds for context, but their primary purpose is to demonstrate the profile features rather than actual scientific content. Values within these examples may be augmented or altered to fit the requirements of the standard or to illustrate specific features.

### Referencing Bundled Resources

All entries in the bundle must have an identifier to support the ability for them to be referenced within the document. Unless there is a unique identifier and system available, provide a Uniform Resource Identifier (URI): Generic Syntax as the identifier. More information is available at: [https://datatracker.ietf.org/doc/html/rfc3986/](https://datatracker.ietf.org/doc/html/rfc3986/). The system should be entered as “urn:ietf:rfc:3986”.

Although FHIR allows for multiple ways to reference other resources, they are not all appropriate for the PQ/CMC use case because the receiving endpoint is not a FHIR server. Resources cannot be referenced using a URL to a server. They must be added in a bundle together with the other resources required by the composition to have everything available in one XML file.

### Narrative Generation

**Overview of Requirements for PQ/CMC Bundles**

1. **Human Readable Representation**:
    * **Purpose**: PQ/CMC (Pharmaceutical Quality/Clinical Manufacturing Chemistry) bundles often contain complex data that needs to be presented in a human-readable format. This is crucial for ensuring that the information is comprehensible and accessible.
2. **Role of the Composition Resource**:
    * **Location**: The human-readable content should be included in the narrative element of the Composition resource. This is part of the domainResource of the Composition, which acts as the primary context for all other resources in the bundle.
    * **Significance**: By placing the content in the Narrative of the Composition, it ensures that the entire document, including all related resources, is represented comprehensively. PQ/CMC data is complex and using the Narrative text from individual profiles hinders a meaningful layout.
3. **Handling Other Resources**:
    * **Status**: All other resources within the bundle should have their status set to "empty". This indicates that they are not intended to carry human-readable content themselves but are referenced by the Composition.
4. **XHTML Formatting**:
    * **Limitations**: The div element within the narrative is restricted to XHTML content, a simplified subset of HTML. This ensures consistent formatting but limits the types of styling and content that can be included.
    * **Transform Tool**: A narrative transform tool has been developed to assist in converting valid XML files into XHTML for each Bundle profile. This tool formats the XML and previews the resulting XHTML content.
5. **Usage of the Narrative Transform**:
    * **Availability**: The narrative transform can be downloaded from the Downloads page.
    * **Functionality**: It provides an interface where users can view and save the XHTML content. The transform also ensures that all content is displayed correctly according to the bundle's profile requirements.
    * **Saving**: The saved files are stored in the user's download directory.
6. **Viewing Saved Files**:
    * **Browsers**: Saved XML files can be opened in any browser, though Firefox and Chrome are recommended for best results.

**Steps for Implementation:**

1. **Prepare the Human Readable Content**:
    * Create the narrative content for the Composition resource, ensuring that it accurately represents the data from all resources within the bundle.
2. **Use the Narrative Transform Tool**:
    * Download and use the narrative transform tool to format your XML files into XHTML. This tool will help ensure that the content adheres to the formatting constraints and is presented clearly.
3. **Review and Save**:
    * Review the XHTML output generated by the transform tool to ensure it meets your requirements. Save the file to your download directory.
4. **Open and Verify**:
    * Open the saved XHTML file in a web browser (preferably Firefox or Chrome) to verify that the content displays correctly.

By following these guidelines, you can ensure that the PQ/CMC bundle’s complex data is presented in a clear and standardized human-readable format, facilitating easier access and understanding.  Transform use is not required.  However alternate narrative generation must support a similar layout.  If data is presented in table format by the Transform Tool, then it is expected that an alternate generation method also presents the data in a table.

### Markdown Supported by Narrative Transform

There are many elements defined by the markdown datatype. The sytlesheets are restricted to GitHub flavor of Markdown. Line feeds must be double spaces. Not all markdown features are supported.
#### Supported
* Headers <h1>, <h2> and <h3>
* Emphasis
* Unordered Lists with asterisk only
* Ordered Lists
* Links
* Blockqoutes
* Backslash Escapses: restricted to asterisk, underscore, curly braces, Parenthesis, plus sign and minus sign

#### Not Supported
* Emoji
* Fenced Code Blocks
* Images -  Images should be entered according to the profile Base64DocumentReference. The text associated with the image can refer to it.
* Issue References
* Task Lists
* Tables - These have not been tested. Use at your own risk and test with the narrative transform
* Username Mentions

#### Narrative Transform Steps

* Download NarrativeTransform.zip from the [Downloads page](downloads.html).  Respond “Keep” if the files system objects to saving the download. Unblock the zipfile.
* UnZip the file. 
* Open Styler.html in a browser. The page displays as shown below.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="emptyxmlStyler_Transform.png" />

</figure>

{::options parse_block_html="true" /}

<p style="text-align: center; font-weight: bold"> Narrative Transform HTML Page </p>

* Click on “Choose file” then select a bundle file. The Narrative Transform detects the bundle type. All bundles in this IG are supported.
* The Narrative Transform does not validate the bundle. If the XML is not displayed, an error message appears. If this happens, check the XML file.
* The transformed XML bundle will show in the text area. Verify that this is the bundle and save the updated file by clicking the “Save XML Bundle file” at the bottom of the page. You may have to scroll down the page to see the button.
* Enter a new file name for the new XML bundle file.
* Confirm by clicking “OK”. Note: Due to Cross-Origin Resource Sharing (CORS), the phrase “This page says” cannot be changed. 
* To process another bundle, simply click on “Choose file” and select the bundle file.


{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="fill_Transform.png" />

</figure>

{::options parse_block_html="true" /}

<p style="text-align: center; font-weight: bold">  Narrative Transform Text Area and Save Button  </p>

* To process another file, simply open another file.

### Versioning of Bundles
Any versioning of bundles is for the application sponsor's usage.  The status of all bundles is "active". The eCTD software will replace all prior bundles versions and the latest bundle will be the current version.

### Examples

Bundle examples contain one instance of a profile when the cardinality for that profile is one, and two instances of a profile when the cardinality is one to many. There are many bundles that will contain ten or more entries of the same type of profile, such as product composition, batch formula, quality specifications and stability reports.

eCTD submission to the FDA will be in XML format. JSON format is supported by this IG because there are several use cases in the CMC domain where JSON representation may be helpful to the larger community. For example, there are commercial FHIR servers that only support JSON, the Industry PQ project supports both XML and JSON representations and since the submission to FDA is a downstream activity in the overall CMC data flow, it makes sense to provide flexibility for implementers and CMC vendors. Additionally, entities integrating the FHIR content in internal systems often prefer and may leverage the JSON representations.




---

// File: input/pagecontent/laterStages/eCTD32P32.md

### Domain Overview

The Product Batch Formula bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.P.3.2 folder content to the FDA. The contents of this section include the amount of material in a specific type of batch, in total and broken down by the components and constituents that constitute the drug product. 

### Implementer Instructions

* Each 32P32 bundle is for a single drug product.
* All batch formulas for a drug product are contained in a single bundle.

### Representation in FHIR

* Drug Product
    * [Batch Formula Drug Product Identification](StructureDefinition-pqcmc-batch-formula-product.html) (BatchFormulaMedicinalProduct) profile on [MedicinalProductDefinition](https://hl7.org/fhir/R5/medicinalproductdefinition.html) resource
* Batch Formula
    * [Drug Product Batch Formula](StructureDefinition-pqcmc-product-batch-formula.html) (BatchFormula) profile on [ManufacturedItemDefinition](https://hl7.org/fhir/R5/manufactureditemdefinition.html) resource
* Batch Formula Constituent
    * [Drug Product Batch Formula Ingredient](StructureDefinition-pqcmc-dp-ingredient.html) (DrugProductIngredient) profile on [Ingredient](https://hl7.org/fhir/R5/ingredient.html) resource
    * [Drug Substance Handle](StructureDefinition-pqcmc-routine-drug-substance.html) (SubstanceDefinitionHandle) profile on [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) resource
    * [Excipient Drug Substance](StructureDefinition-pqcmc-excipient.html) (ExcipientRaw) profile on [SubstanceDefinition](https://hl7.org/fhir/R5/substancedefinition.html) resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the [Organization](http://hl7.org/fhir/R5/organization.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### CTD 3.2.P.3.2 Profile Map

<div>{%include BatchForm.svg%}</div>

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This example demonstrates the batch formula for a commercial batch of a drug product. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [49d3b79e-b436-a242-93ba-b706b4364ab2](Bundle-49d3b79e-b436-a242-93ba-b706b4364ab2.html)

Another batch formula example is  [a242b79e-b706-49d3-93ba-b4364ab2baa3](Bundle-a242b79e-b706-49d3-93ba-b4364ab2baa3.html)


{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="BatchFormula.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/laterStages/eCTD32P55.md

### Domain Overview

The Product Characterisation of Impurities bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.P.5.5 folder content to the FDA. For each impurity found within the drug substance, in addition to identifying the impurity by name, and UNII if known, the content includes pictorial representations of the impurities produced as the result of elucidating the structure or characterization of the impurity through various techniques, including, but not limited to, NMR and mass spectrometry. 

### Implementer Instructions

* Each 32P55 bundle is for a single drug product.
* All impurities within the drug product are contained in a single bundle.
* The composition supports creation of a 32P55 bundle for a drug product that contains no impurities.
* The preferred formats for both the Impurity Structure Graphic and Analysis Graphic are .png and .svg.
* Guidance in how to prepare SD Files for ANDAs, NDAs, and BLAs is available here: _[Quick Guide to Creating a Structure-Data File (SD File) for Electronic Common Technical Document (eCTD) Submission](https://www.fda.gov/industry/fda-data-standards-advisory-board/fdas-global-substance-registration-system)_. Guidance in how to prepare SD Files for DMFs is available here: [Quick Guide to Creating a Structure-Data File (SD File) for DMF Submissions](https://www.fda.gov/drugs/gdufa-ii-drug-master-files-dmfs/drug-master-file-dmf-submission-resources) 
    * The SD Files should be included in the 32P55 XML bundle as documented in the IG.

### Representation in FHIR

* Drug Substance
    * [Drug Product Impurities](StructureDefinition-pqcmc-drug-product-with-impurities.html) (DrugProductwithImpurities) profile on [MedicinalProductDefinition](https://hl7.org/fhir/R5/medicinalproductdefinition.html) resource
* Impurity Substance
    * [Drug Substance Impurity](StructureDefinition-pqcmc-drug-product-substance-impurity.html) (ImpuritySubstance) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the [Organization](http://hl7.org/fhir/R5/organization.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### CTD 3.2.P.5.5 Profile Map

<div>{%include CharacImprity.svg%}</div>

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This example demonstrates the impurities contained within a drug product that is a coated tablet that contains one bead type that has two coatings. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [Bundle-9e8f2d16-66b1-47ec-878d-f50ae021985b](Bundle-9e8f2d16-66b1-47ec-878d-f50ae021985b.html)

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="ProdImpurities.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/laterStages/eCTD32P70.md

### Bundle Overview
A description of the container closure systems should be provided, including the identity of 
materials of construction of each primary packaging component and its specification. The 
specifications should include description and identification (and critical dimensions, with 
drawings where appropriate). Noncompendial methods (with validation) should be included 
where appropriate. 

For nonfunctional secondary packaging components (e.g., those that neither provide additional 
protection nor serve to deliver the product), only a brief description should be provided. For 
functional secondary packaging components, additional information should be provided. 
Suitability information should be located in 3.2.P.2.
### eCTD Heading 3.2.P.7.0 Profile Map
<div>{%include ContainerClosure.svg%}</div>

### Example 3.2.P.7.0 Bundle

---

// File: input/pagecontent/laterStages/eCTD32S3.md

### Domain Overview

The Substance Characterisation bundle profile provides a mechanism for the industry to submit Module 3 CTD 3.2.S.3 folder content to the FDA. This is a higher level CTD folder. At present this folder’s scope is the drug substance 3.2.S.3.1 – Elucidation of Structure and Other Characteristics and 3.2.S.3.2 – Impurities. Some of the content of these sections are described below –

* 3.2.S.3.1 - Elucidation of Structure and Other Characteristics
    * Pictorial representations of the drug substance produced as the result of elucidating the structure or characterization of the drug substance through various techniques, including, but not limited to, NMR and mass spectrometry.
* 3.2.S.3.2 – Impurities
    * For each impurity found within the drug substance, in addition to identifying the impurity by name, and UNII if known, the content includes pictorial representations of the impurities produced as the result of elucidating the structure or characterization of the impurity through various techniques, including, but not limited to, NMR and mass spectrometry.

### Implementer Instructions

* For a drug product containing more than one active drug substance, the CMC eCTD 32S3 Document should be provided in its entirety for each drug substance.
    * CMC eCTD 32S3 Document – profile on Bundle Resource (representing the FHIR XML content as a collection of content in a single “document” and which should be repeated for each active substance). There will be one document profile for each S section in module 3.
* The preferred formats for both the Impurity Structure Graphic and Analysis Graphic are .png and .svg.
* Guidance in how to prepare SD Files for ANDAs, NDAs, and BLAs is available here: _[Quick Guide to Creating a Structure-Data File (SD File) for Electronic Common Technical Document (eCTD) Submission](https://www.fda.gov/industry/fda-data-standards-advisory-board/fdas-global-substance-registration-system)_. Guidance in how to prepare SD Files for DMFs is available here: [Quick Guide to Creating a Structure-Data File (SD File) for DMF Submissions](https://www.fda.gov/drugs/gdufa-ii-drug-master-files-dmfs/drug-master-file-dmf-submission-resources) 
    * The SD Files should be included in the 32S3 XML bundle as documented in the IG.

### Representation in FHIR

* Drug Substance
    * [Drug Substance](StructureDefinition-pqcmc-drug-substance-characterisation.html) (DrugSubstanceCharacterisation) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Impurity Substance
    * [Drug Substance Impurity](StructureDefinition-pqcmc-drug-product-substance-impurity.html) (ImpuritySubstance) profile on [SubstanceDefinition](http://hl7.org/fhir/R5/substancedefinition.html) resource
* Related Organizations
    * [Basic Organization](StructureDefinition-cmc-organization.html) (CodedOrganization) profile on the [Organization](http://hl7.org/fhir/R5/organization.html) resource

Note: profile computable names (in parenthesis above) map to names in the Profile Map below.

### CTD 3.2.S.3 Profile Map

{%include SubstanceImpurity.svg%}

### Usage Patterns

Not presently defined. Content will be added in the future when FDA PQ/CMC FHIR IG starts supporting other scenarios, for example new dosage forms such as liquids, etc.

### Examples

This example demonstrates the characterization and impurities of ethylacetate. This image displays the narrative as inserted in the composition text element generated by the narrative transform. The XML can be found on the Artifacts page. The XML file with the publisher narrative is on the artifacts page and in the Bundle profile. [32532fe8-1bfb-4a0a-998d-9294742a9519](Bundle-32532fe8-1bfb-4a0a-998d-9294742a9519.html)

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="1200px" src="substanceCharacter.png" />

</figure>

{::options parse_block_html="true" /}

---

// File: input/pagecontent/laterStages/eCTD32S60.md

### Bundle Overview
 A description of the container closure systems should be provided, including the identity of materials of construction of each primary packaging component, and their specifications. The specifications should include description and identification (and critical dimensions with drawings, where appropriate). Noncompendial methods (with validation) should be included, 
where appropriate. For nonfunctional secondary packaging components (e.g., those that do not provide additional protection), only a brief description should be provided. For functional secondary packaging components, additional information should be provided. The suitability should be discussed with respect to, for example, choice of materials, protection from moisture and light, compatibility of the materials of construction with the drug substance, including sorption to container and leaching, and/or safety of materials of construction.

 
### eCTD  Heading 3.2.S.6.0 Profile Map
<div>{%include SubstanceContainer.svg%}</div>

### Example 3.2.S.6.0 Bundle

---

// File: input/pagecontent/laterStages/eCTDSP4454.md

### Bundle Overview
A description of batches and results of batch analyses should be provided.  
Reference ICH guidances Q3A, Q3C, Q6A, and Q6B for drug substance batch analysis and  Q3B, Q3C, Q6A, and Q6B for drug product batch analysis.

### eCTD Heading 3.2.S.4.4 and 3.2.P.5.4 Profile Map
<div>{%include BatchAnalysis.svg%}</div>

### Example 3.2.S.4.4 and 3.2.P.5.4 Bundle

---

// File: input/pagecontent/laterStages/eCTDSP7181.md

### Bundle Overview
3.2.S.7.1: The types of studies conducted, protocols used, and the results of the studies should be 
summarized. The summary should include results, for example, from forced degradation studies 
and stress conditions, as well as conclusions regarding storage conditions and retest date or shelf 
life, as appropriate. 
Reference ICH guidances Q1A, Q1B, and Q5C 

3.2.P.8.1: The types of studies conducted, protocols used, and the results of the studies should be 
summarized. The summary should include, for example, conclusions regarding storage 
conditions and shelf life, and, if applicable, in-use storage conditions and shelf life. 
Reference ICH guidances Q1A, Q1B, Q3B, Q5C, and Q6A.


### eCTD Heading 3.2.S.7.1 and 3.2.P.8.1 Profile Map


<div>{%include StabilitySummary.svg%}</div>

### Example 3.2.S.7.1 and 3.2.P.8.1  Bundle

---

// File: input/pagecontent/laterStages/eCTDSP7383.md

### Bundle Overview
Results of the stability studies (e.g., forced degradation studies and stress conditions) should be 
presented in an appropriate format such as tabular, graphic, or narrative. Information on the 
analytical procedures used to generate the data and validation of these procedures should be 
included. 
Reference ICH guidances Q1A, Q1B, Q2A, Q2B, and Q5C.

### eCTD Heading 3.2.S.7.3 and 3.2.P.8.3 Profile Map


<div>{%include Stability.svg%}</div>

### Example 3.2.S.7.3 and 3.2.P.8.3  Bundle

---

// File: input/fsh/aliases.fsh

Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $NCIT = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl 
Alias: $UNII = http://fdasis.nlm.nih.gov ///urn:oid:2.16.840.1.113883.4.9
Alias: $UNIPROT = https://www.uniprot.org
Alias: $CAS = urn:oid:1.3.6.1.4.1.5193
Alias: $UCUM = http://unitsofmeasure.org  
Alias: $DUNS = urn:oid:1.3.6.1.4.1.519.1
Alias: $FEINumber = urn:oid:2.16.840.1.113883.4.82
Alias: $ART = http://hl7.org/fhir/action-relationship-type
Alias: $QTCompare = http://hl7.org/fhir/ValueSet/quantity-comparator 
Alias: $TEMPH = http://hl7.org/fhir/us/pq-cmc-fda/CodeSystem/temporary
Alias: $FEI = https://www.fda.gov/drugs/drug-approvals-and-databases/drug-establishments-current-registration-site
Alias: $Country = urn:iso:std:iso:3166
Alias: $IDsys = urn:ietf:rfc:3986
Alias: $SubstanceRelationshipType = http://hl7.org/fhir/substance-relationship-type
Alias: $IDENTIFIER-TYPE = http://hl7.org/fhir/ValueSet/identifier-type
Alias: $NamePartType = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2
Alias: $SectionTypes = http://terminology.hl7.org/temporary-uri/codeSystem/ICH-context-of-use
Alias: $DOCREF = http://hl7.org/fhir/document-reference-status 
Alias: $ActRelationType = http://hl7.org/fhir/action-relationship-type
Alias: $ActSelection = http://hl7.org/fhir/action-selection-behavior
Alias: $PubStatus = http://hl7.org/fhir/publication-status#draft 

---

// File: input/fsh/CommonOrganization.fsh

RuleSet: DUNSandFEINumber
* identifier 1..* MS
* identifier.type 0..1 MS
* identifier.system 1..1 MS
* identifier.value 1..1 MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Require specific types of identifiers."
* identifier contains DUNSNumber 0..1 MS
* identifier[DUNSNumber].system = $DUNS
* identifier[DUNSNumber] obeys org-length9
* identifier contains FEINumber 0..1 MS
* identifier[FEINumber].system = $FEINumber
* identifier[FEINumber] obeys org-length7

Profile: CodedOrganization
Parent: Organization
Id: cmc-organization
Title: "Basic Organization"
Description: "A profile for the data elements required to identify the sponsor of the drug products or substances, Suppliers."
* insert DUNSandFEINumber
* name 1..1 MS
* contact 1..* MS
* contact.address 1..1 MS
* contact.address only PqAddress

Invariant: org-length9
Description: "Identifier number is 9 digits"
Expression: "system = 'urn:oid:1.3.6.1.4.1.519.1'  implies value.length() = 9"
Severity: #error

Invariant: org-length7
Description: "Identifier number is 7 or 10 digits"
Expression: "system = 'urn:oid:2.16.840.1.113883.4.82' implies value.length() = 7 or value.length() = 10"
Severity: #error

//Profile: MfgSiteOrganization
//Parent: Organization
//Id: mfg-test-site-organization 
//Title: "Manufacturing and/or Test Site Organization"
//Description: "A profile for the data elements required to identify an organization that manufactures, processes or tests drug products or substances."
//* ^abstract = true
//* meta.profile MS
//* insert DUNSandFEINumber
//* identifier ^short = "Manufacturing Site Unique Identifier | Testing Site Unique Identifier"
//* identifier ^definition = """Manufacturing Site Unique Identifier: A unique identifier assigned to the establishment (facility) which manufactures, prepares, propagates, compounds or processes drugs. [Source: Adapted from FDA Drug Establishment Current Registration Site]

//Testing Site Unique Identifier: A unique identifier assigned to the establishment (facility) which performs the testing. [Source: SME Defined]
//"""
//* identifier.type ^short = "Manufacturing Site Unique Identifier Type | Testing Site Unique Identifier Type"
//* identifier.type ^definition = """A value that identifies the source of the unique identifier. [Source: SME Defined]
//Examples: Data Universal Number System (DUNS), Facility Establishment Identifiers (FEI), etc.
//"""
//* type 1..* MS
//* type ^short = "Manufacturing Site Function"
//* type ^definition = """v 1.5
//"""
//* type from pqcmc(required)
//* name 1..1 MS
//* name ^short = "Manufacturing Site Name | Testing Site Name"
//* name ^definition = """Manufacturing Site Name: The name of the establishment (facilities) which manufacture, prepare, propagate, compound, process or package drugs that are commercially distributed in the U.S. or offered for import to the U.S[Source: Adapted from FDA Drug Establishment Current Registration Site]

//Testing Site Name: The name of the establishment (facility) which tests the raw materials, intermediates, drug substance, drug product, packaging components. [Source: SME Defined]
//"""
//* contact 1..1
//* contact.address 1..1 MS
//* contact.address ^short = "Manufacturing Site Physical Address | Testing Site Address"
//* contact.address ^definition = """Manufacturing Site Physical Address: The complete address for the supplier [Source: SME Defined]

//Testing Site Address: The complete address for the testing site. [Source: SME defined]
//"""
//* contact.address only PqAddress


Profile: PqAddress
Parent: Address
Id: pq-cmc-address
Description: "pq-specific Constraints on the Address datatype dealing with US addresses."
* obeys addr-state
* obeys addr-zip
* type 1..1 MS
* line 1..2
* city 1..1 MS
* state 0..1 MS
* postalCode 1..1 MS
* country 1..1 MS
* country ^short = "Country must be a 3-letter country code."
  * obeys cmc-only-ISO-3166-1-alpha-3

Invariant: addr-state
Description: "If the country is USA, then the state and postal code exist"
Expression: "country = 'USA' implies (state.exists() and state.length() = 2 and postalCode.exists())"
Severity: #error

Invariant: addr-zip
Description: "If the country is USA, then the postal code is 5 digits with an optional dash and 4 numbers"
Expression: "country = 'USA' implies postalCode.matches('^[0-9]{5}(-[0-9]{4})?$')"
Severity: #error




---

// File: input/fsh/DrugProductResources.fsh

// take out until substance stability
//Extension: ContainerClosureExtension
//Id: pq-container-closure-extension
//Title: "Container Closure"
//Description: "The packaging information including a brief description of the components, the assembled packaging system and any precautions needed to ensure the protection and preservation of the drug substance or drug product during their use in the clinical trials."
//* . ^short = "Container Closure System Information"
//* ^context[+].type = #element
//* ^context[=].expression = "MedicinalProductDefinition"
//* ^context[+].type = #element
//* ^context[=].expression = "SubstanceDefinition"
//* extension contains
//    containerType 1..1 MS and
//   closureType 1..1 MS and  
//   description 1..1 MS and
//   depiction 0..//* MS 
//* extension[containerType].value[x] 1..1
//* extension[containerType].value[x] only CodeableConcept
//* extension[containerType].value[x] from PqcmcContainerTypeTerminology (required)
//* extension[containerType].value[x] ^short = "Container Type"
//* extension[containerType].value[x] ^definition = "The kind of container that drug substances and finished dosage forms are contained in, which could include both the immediate (or primary) and secondary containers [Source: Adapted from NCI Thesaurus C4164]"
//* extension[closureType].value[x] 1..1
//* extension[closureType].value[x] only CodeableConcept
//* extension[closureType].value[x] from PqcmcClosureTypeTerminology (required)
//* extension[closureType].value[x] ^short = "Closure Type"
//* extension[closureType].value[x] ^definition = "The kind of closures used for the container in which the drug substances and finished dosage forms are stored. [Source: SME Defined]"
//* extension[description].value[x] 1..1
//* extension[description].value[x] only markdown
//* extension[description].value[x] ^short = "Container Closure System Description"
//* extension[description].value[x] ^definition = """Any textual comments that describe the sum of container closure system (CCS) components that together contain and protect the dosage form or drug substance. [Source: Adapted from Q1A(R2)-ICH Glossary]
//Example: White opaque, round 50 mL HDPE bottle with a fitted 33 mm child resistant black polypropylene threaded cap closure, aluminum sealed, and containing molecular sieve canister 2 gm (CAN TRISORB 2G) as desiccant.
//Note: This includes primary packaging components and secondary packaging components, if the latter are intended to provide additional protection to the drug substance or the drug product. A packaging system is equivalent to a container closure system. [Source: Adapted from Q1A(R2)-ICH Glossary]
//"""
//* extension[depiction].value[x] 1..1
//* extension[depiction].value[x] only Reference(GraphicReference)


Profile: ContainerClosure
Parent: PackagedProductDefinition
Description: "Container Closure for drug product referred to in Drug Product Description."
* packageFor 1..1 MS
* insert PQReference(packageFor)
* packageFor only Reference(DrugProductDescription)
* description 1..1 MS
* description ^short = "Container Closure System Description"
* description ^definition = """Any textual comments that describe the sum of container closure system (CCS) components that together contain and protect the dosage form or drug substance. [Source: Adapted from Q1A(R2)-ICH Glossary]
Example: White opaque, round 50 mL HDPE bottle with a fitted 33 mm child resistant black polypropylene threaded cap closure, aluminum sealed, and containing molecular sieve canister 2 gm (CAN TRISORB 2G) as desiccant.
Note: This includes primary packaging components and secondary packaging components, if the latter are intended to provide additional protection to the drug substance or the drug product. A packaging system is equivalent to a container closure system. [Source: Adapted from Q1A(R2)-ICH Glossary]
"""
* attachedDocument 0..* MS
* attachedDocument ^short = "Container Closure System Depiction"
* attachedDocument ^definition = "Diagram of cContainer Closure System or any of its parts noted in the Container Closure System Description"
* insert PQReference(attachedDocument)
* attachedDocument only Reference(GraphicReference)
* packaging 1..1 MS
  // packaging only allows for one 'type' backbone element, so slicing on
  // the coding in a codeableConcept is okay here. The other option would
  // be to make closure type a property which is 0..*
  * type 1..1 MS
    * coding 1..2 MS
    * coding ^slicing.discriminator.type = #value
    * coding ^slicing.discriminator.path = "$this"
    * coding ^slicing.rules = #closed
    * coding contains 
      ContainerType 1..1 MS and
      ClosureType 1..1 MS
    * coding[ContainerType] from PqcmcContainerTypeTerminology (required)
      * ^short =  "Container Type"
      * ^definition = "The kind of container that drug substances and finished dosage forms are contained in, which could include both the immediate (or primary) and secondary containers [Source: Adapted from NCI Thesaurus C4164]"
    * coding[ClosureType] from PqcmcClosureTypeTerminology (required)
      * ^short = "Closure Type"
      * ^definition = "The kind of closures used for the container in which the drug substances and finished dosage forms are stored. [Source: SME Defined]"
* packaging.quantity 0..1 MS
* packaging.packaging 0..* MS

Extension: AmountRatio
Id: pq-amount-ratio
Title: "Amount Ratio"
Description: "represent an amount as a ratio in ManufacturedItemDefinition"
* ^context[+].type = #element
* ^context[=].expression = "ManufacturedItemDefinition.component"
* ^context[+].type = #element
* ^context[=].expression = "ManufacturedItemDefinition.component.constituent"
* . ?!
* . ^isModifierReason = "the PQCMC use Case requires ingredient and part amounts be accepted as either quantities or ratios. When present, an amount representing anything but the percentage cannot be present"
* value[x] 1..1 MS
* value[x] only Ratio
* valueRatio
  * numerator 1..1 MS
    * ^short = "Amount Numeric Numerator"
      * value 1..1 MS
  * denominator 1..1 MS
  * denominator from PqcmcNonPercentageUnits (required)
    * ^short = "Amount Numeric Denominator"
      * value 1..1 MS
      * unit 1..1 MS
      * code 1..1 MS 

Profile: FinishedProduct
Parent: ManufacturedItemDefinition
Id: pqcmc-product-part
Title: "Manufactured Drug Product"
Description: "The manufactured drug product defined by all its parts or layers. If the drug product composition is homogeneous it will have a single part or component."
* obeys cmc-capsule-count-required
* obeys cmc-arbitrary-unit-text-required
* obeys cmc-coating-indication-required
* obeys cmc-tablet-layer-count-required
* obeys cmc-tablet-bead-count-required
* obeys cmc-capsule-classification-required
* obeys cmc-component-id-ref
* identifier 0..1 MS
* status 1..1 MS
* name MS
* name ^short = "Product Proprietary Name | Product Non-proprietary Name"
* name ^definition = """Product Proprietary Name: The exclusive name of a drug product owned by a company under trademark law regardless of registration status with the Patent and Trademark Office (PTO). [Source: SME Defined] Note: Excludes dosage form, route of administration and strength. 
Example: Tylenol

Product Non-proprietary Name: A name unprotected by trademark rights that is entirely in the public domain. It may be used without restriction by the public at large, both lay and professional. [Source: SME Defined]"""
* manufacturedDoseForm from PqcmcManufacturedDoseFormTerminology (required)
* property 1..* MS
* property.type 1..1 MS
* property.type.text 1..1 MS
* property ^slicing.discriminator.type = #value
* property ^slicing.discriminator.path = "type.text"
* property ^slicing.rules = #closed
* property ^slicing.description = "Slice based on value"
* property contains
      OvrRelsProf 1..1 MS and
      OvrRelsMech 0..1 MS and
      CoatInd 0..1 MS and
      LayCnt 0..1 MS and
      BeaTypCnt 0..1 MS and
      CapClass 0..1 MS and
      CapConCnt 0..1 MS and
      Schematic 1..* MS and
      WgtTyp 1..1 MS and
      TotWgtNum 1..1 MS and
      TotWgtDen 0..1 MS and
      TotWgtTxt 0..1 MS and
      QualStd 1..* MS and
      Sterile 1..1 MS

* property[OvrRelsProf]
  * ^short = "Product Overall Release Profile"
  * ^definition = """
    The overall release profile is the drug release profile (e.g., IR, DR, or ER-USP nomenclature) that is achieved by the drug delivery system used in the dosage form design as evident from the pharmacokinetic plasma drug concentration versus time curve (this is currently focused on solids).
    For example, a capsule filled with IR and DR beads will exhibit an ER release profile as evident from the pharmacokinetic curve. In this example, the "product overall release profile" is "ER". [Source: SME Defined]
  """
  * type MS
  * type.text = "Product Overall Release Profile"
  * value[x] 1..1 MS
  * value[x] only CodeableConcept
  * value[x] from PqcmcReleaseProfile (required)

* property[OvrRelsMech]
  * ^short = "Product Overall Release Mechanism"
  * ^definition = """
    The dosage form design used to achieve an ER release profile.  Examples of overall release mechanisms include osmotic pump, reservoir, and matrix. [Source: SME Defined]
  """
  * type MS
  * type.text =  "Product Overall Release Mechanism"
  * value[x] 1..1 MS
  * value[x] only CodeableConcept
  * value[x] from PqcmcReleaseMechanism (required)

* property[CoatInd]
  * ^short = "Product Coating Indicator"
  * ^definition = """
    A property that identifies whether the drug product contains any coatings. [Source: SME Defined]
  """
  * type MS
  * type.text = "Coating Indicator"
  * value[x] 1..1 MS
  * value[x] only boolean

* property[LayCnt]
  * ^short = "Product Tablet Layer Count"
  * ^definition = """
    The total number of layers in the tablet. [Source: SME Defined]
    Note: Non-layered tablets will be considered as one layer tablets.
  """
  * type MS
  * type.text = "Tablet Layer Count"
  * value[x] 1..1 MS
  * value[x] only Quantity
  * value[x] = $UCUM#1
    * value 1..1 MS

* property[BeaTypCnt]
  * ^short = "Tablet Bead Type Count"
  * ^definition = """
    The total number of type of beads present in a tablet [Source: SME Defined]
    Example: For the case of a 1- layer tablet containing 2 types of beads, Tablet Bead Type Count = 2.
  """
  * type MS
  * type.text = "Tablet Bead Type Count"
  * value[x] 1..1 MS
  * value[x] only Quantity
  * value[x] = $UCUM#1
    * value 1..1 MS

* property[CapClass]
  * ^short = "Capsule Shell Part Classification Category"
  * ^definition = """
    Categorization of the capsule shell based on factors such as the shell’s barrier to water and oxygen, reactivity, and the material it is made of. [Source: SME Defined]
  """
  * type MS
  * type.text = "Capsule Classification Category"
  * value[x] 1..1 MS
  * value[x] only CodeableConcept
  * value[x] from PqcmcCapsuleClassificationCategory (required)

* property[CapConCnt]
  * ^short = "Product Capsule Constituent Count"
  * ^definition = """
    The number of distinct constituents contained in the capsule shell of the drug product. [Source: SME Defined]
    Example: For the case of a capsule shell filled with one type of bead and a minitablet, Constituent Type Count = 2.
  """
  * type MS
  * type.text = "Capsule Constituent Count"
  * value[x] 1..1 MS
  * value[x] only Quantity
  * value[x] = $UCUM#1
    * value 1..1 MS

* property[Schematic]
  * ^short = "Product Schematic"
  * ^definition = """
    The pictorial representation of the drug product. [Source: SME Defined]
  """
  * type MS
  * type.text = "Product Schematic"
  * value[x] 1..1 MS
  * value[x] only Attachment
  * value[x] only GraphicAttachment or PDFAttachment

* property[WgtTyp]
  * ^short = "Product Weight Type"
  * ^definition = """
    A physical (content) or activity measurement of the weight of the drug product unit. [Source: SME Defined]
    Example: Mass, Activity
  """
  * type MS
  * type.text = "Product Weight Type"
  * value[x] 1..1 MS
  * value[x] only CodeableConcept
  * value[x] from PqcmcStrengthTypeTerminology (required)

* property[TotWgtNum]
  * ^short = "Product Total Weight Numeric Numerator"
  * ^definition = """
    Specifies the total quantity of all ingredients in a single unit of the drug product. [Source: SME Defined]
    Note: a single unit of a solid oral dose form could be a tablet or a capsule
  """
  * type MS
  * type.text = "Product Total Weight Numeric Numerator"
  * value[x] 1..1 MS
  * value[x] only Quantity
  * value[x] from PqcmcUnitsMeasure (extensible)
    * comparator MS
      * ^short = "Product Total Weight Operator"
      * ^definition = """
        A mathematical symbol that denotes equality or inequality between two values. [Source: SME Defined]
        Note: This is typically applicable to biologics.
      """

* property[TotWgtDen]
  * ^short = "Product Total Weight Numeric Denominator"
  * ^definition = """
    Specifies the quantity of the ingredient (s) consistent with a single unit dose or as expressed on the label. [Source: SME Defined]
    Note: For solid oral dose forms, by definition this is 1
  """
  * type MS
  * type.text = "Product Total Weight Numeric Denominator"
  * value[x] 1..1 MS
  * value[x] only SimpleQuantity
  * value[x] from PqcmcUnitsMeasure (extensible)
    * value 1..1 MS

* property[TotWgtTxt]
  * ^short = "Product Total Weight Textual"
  * ^definition = """
    A written description of the weight of the drug product. [Source: SME Defined]
    Note: This is typically applicable to biologics
    Example: International Units for Enzymes
  """
  * type MS
  * type.text = "Total Weight Textual"
  * value[x] 1..1 MS
  * value[x] only markdown

* property[QualStd]
  * ^short = "Product Quality Standard"
  * ^definition = """
    The established benchmark to which the component complies. [Source: SME Defined]
    Examples: USP/NF, EP, Company Standard
  """
  * type MS
  * type.text = "Quality Standard"
  * value[x] 1..1 MS
  * value[x] only CodeableConcept
  * value[x] from PqcmcQualityBenchmarkTerminology (required)

* property[Sterile]
  * ^short = "Sterile Product Indicator"
  * type 1..1 MS
  * type.text = "Sterile Product Indicator"
  * value[x] 1..1 MS
  * value[x] only boolean

// Product parts
* component 1..* MS
// * component obeys cmc-ppidref-required
* component.modifierExtension contains pq-amount-ratio named amountRatio 0..1 MS
* component obeys cmc-amount-ratio-or-quantity
* component.type 1..1 MS
* component.type ^short = "Product Part Type"
* component.type ^definition = """Identifies the kind of element, based on the design the applicant develops to achieve the desired drug product and overall release profile. [Source: SME Defined]
Example: Layer, Bead, Minitablet, Capsule Shell, Coating
"""
* component.type.coding from PqcmcProductPartType
* component.function MS
* component.function only CodeableConceptTextOnly
  * ^short = "Product Part Function Description"
  * ^definition = """
    The main purpose for the part in the dosage form. [Source: SME Defined]
    Example: In a two layer tablet with two APIs: Product Part Function Description for Layer 1 = Deliver API 1 and Product Part Function Description for Layer 2 = Deliver API 2
  """
* component
  * amount 0..2 MS
    * ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "code"
    * ^slicing.rules = #open
    * ^slicing.ordered = false
  * amount contains 
    weight 0..1 MS and
    percent 0..1 MS
  * amount[weight]
    * value 1..1 MS
      * ^short = "Product Part Total Weight Numeric"
      * ^definition = """
        Specifies the total quantity of all ingredients in a single part of the drug product. [Source: SME Defined]
        Note: a single unit of a solid oral dose form could be a layer of a tablet or a minitablet in a capsule
      """
    * unit 1..1 MS 
      * ^short = "Product Part Total Weight Numeric UOM"
    * code from PqcmcNonPercentageUnits
  * amount[percent]
    * value 1..1 MS
      * ^short = "Product Part Content Percent"
      * ^definition = """
        The percentage of the drug product as a whole, that is represented by this part. [Source: SME Defined]
        Example: total tablet weight = 400 mg, total weight of layer = 250 mg, then Content Percent for the layer = 62.5
      """
    * unit 1..1 MS
      * ^short = "Product Part Content Percent UOM"
      * ^definition = """
        The labeled unit of measure for the content of the drug product, expressed quantitatively per dosage unit. [Source: Adapted for NCI E C117055]
        Example: mg
      """
    * code from PqcmcPercentageUnits

// ingredient
* component.constituent 1..* MS
* component.constituent obeys cmc-ingredient-functions
* component.constituent
  * modifierExtension contains pq-amount-ratio named amountRatio 0..1 MS
  * extension contains http://hl7.org/fhir/StructureDefinition/originalText named textualStrength 0..1 MS
  * extension[textualStrength].value[x] only string
    * ^short = "Textual Strength"
  * extension[textualStrength]
    * ^comment = "For whatever reason, the comments for the Original Text extension has a link that doesn't resolve! Overwriting it with this text resolves the IG error"
* component.constituent obeys cmc-amount-ratio-or-quantity
* component.constituent
  * amount 1..2 MS
    * ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "code"
    * ^slicing.rules = #open
    * ^slicing.ordered = false
  * amount contains 
    weight 1..1 MS and
    percent 0..1 MS
  * amount[weight]
    * value 1..1 MS
      * ^short = "Product Part Ingredient Amount Numeric"
      * ^definition = """
        Specifies the quantity of an ingredient in a single part of the drug product. [Source: SME Defined]
        Note: a single part of a solid oral dose form could be a layer of a tablet or a minitablet in a capsule
        Note: Amount can also be referred to as potency in biologics and other products.
      """
    * unit 1..1 MS
      * ^short = "Product Part Ingredient Amount Numeric UOM"
      * ^definition = """
        The labeled unit of measure for the content of an ingredient, expressed quantitatively per product part. [Source: Adapted for NCI EVS C117055]
      """

    * code 1..1 MS
    * code from PqcmcNonPercentageUnits
  * amount[percent]
    * value 1..1 MS
      * ^short = "Product Part Ingredient Content Percent"
    * code from PqcmcPercentageUnits
    * unit 1..1 MS
      * ^short = "Product Part Ingredient Content Percent UOM"
* component.constituent.location 0..* MS
* component.constituent.location ^short = "Product Part Ingredient Physical Location"
* component.constituent.location ^definition = """Identifies where the ingredient physically resides within the product part. [Source: SME Defined]
Examples: Intragranular, Extra granular, Blend
"""
* component.constituent.location.coding 1..1 MS
* component.constituent.location.coding from PqcmcProductPartIngredientPhysicalLocation
* component.constituent.location.text 0..1 MS
* component.constituent.function 1..2 MS
* component.constituent.function ^slicing.discriminator.type = #value // or #value
* component.constituent.function ^slicing.discriminator.path = "$this"
* component.constituent.function ^slicing.rules = #closed
* component.constituent.function ^slicing.description = "Slice on the function coding"
* component.constituent.function contains
    Category 1..1 MS and
    Function 0..1 MS
* component.constituent
  * function[Category] 
  * function[Category] from PqcmcDrugProductComponentFunctionCategoryTerminology (required)
  * ^short = "Product Part Ingredient Component Function Category"
  * ^definition = """
    A classification that identifies the higher level purpose of that material. [Source: SME Defined]
    Example: Active Ingredient, Inactive Ingredient, Adjuvant.
  """
  * function[Function]
  * function[Function] from PqcmcExcipientFunctionTerminology (required)
    * ^short = "Product Part Ingredient Function"
    * ^definition = """
      A sub-classification of part ingredients identifying its purpose/role in the drug product part (e.g., in the layer, bead, minitablet). [Source: SME Defined]
      Examples: Filler, Surfactant
    """
* component.constituent.hasIngredient 1..1 MS
* insert PQCodeableReference(component.constituent.hasIngredient)
* component.constituent.hasIngredient only CodeableReference(DrugProductComponent)
// Product part properties
* component.property 1..* MS
* component.property.type 1..1 MS
* component.property.type.text 1..1 MS
* component.property ^slicing.discriminator.type = #value
* component.property ^slicing.discriminator.path = "type.text"
* component.property ^slicing.rules = #closed
* component.property ^slicing.description = "Slice based on value"
* component.property contains
    PPiD 1..1 MS and
    PPiDref 0..1 MS and
    RelsProf 1..1 MS and
    RelsMech 0..1 MS and
    CoatPurpose 0..* MS and
    Color 0..1 MS and
    AddInfo 0..1 MS 
* component.property[PPiD] insert ProductPartIdentifierProperty
* component.property[PPiDref] insert ProductPartIdentifierReferenceProperty

* component
  * property[RelsProf]
    * ^short = "Product Part Release Profile"
    * ^definition = """
      The behavior in which drug substance migrates from the drug product part to the surrounding environment (e.g., biological fluids, dissolution media, etc.) [Source: SME Defined]
    """
    * type 1..1 MS
      * text 1..1 MS
      * text = "Product Part Release Profile"
    // * type = $NCIT#RelsProf "Product Part Release Profile"
    * value[x] 1..1 MS
    * value[x] only CodeableConcept
    * value[x] from PqcmcReleaseProfile (required)

  * property[RelsMech]
    * ^short = "Product Part Release Mechanism"
    * ^definition = """
      The method employed to realize the specified part release profile. [Source: SME Defined] 
      Example: matrix or reservoir
    """
    * type 1..1 MS
      * text 1..1 MS
      * text = "Product Part Release Mechanism"
    // * type = $NCIT#RelsMech "Product Part Release Mechanism"
    * value[x] 1..1 MS
    * value[x] only CodeableConcept
    * value[x] from PqcmcReleaseMechanism (required)

  * property[CoatPurpose]
    * ^short = "Coating Product Part Purpose"
    * ^definition = """
      The reason the coating or covering was added. [Source: SME Defined]
      Examples: rate-controlling, color, release type, protective, taste masking.
    """
    * type 1..1 MS
      * text 1..1 MS
      * text = "Coating Product Part Purpose"
    // * type = $NCIT#CoatPurpose "Coating Product Part Purpose"
    * value[x] 1..1 MS
    * value[x] only CodeableConcept
    * value[x] from PqcmcCoatingPurpose (required)

  * property[Color]
    * ^short = "Product Part Color Description"
    * ^definition = """
      The hue or the tint of the drug product part. [Source: SME Defined]
      Examples: yellow, pink, blue, pale yellow.
    """
    * type 1..1  MS
      * text 1..1 MS
      * text = "Product Part Color Description"
    // * type = $NCIT#Color "Product Part Color Description"
    * value[x] 1..1 MS
    * value[x] only CodeableConceptTextOnly


* component.property[AddInfo] insert AdditionalInformationProperty(Product Part Additional Information)

* component.component 0..* MS

RuleSet: AdditionalInformationProperty(short)
* ^short = "{short}"
* ^definition = """
  A placeholder for providing any comments that are relevant to the drug product component. [Source: SME Defined] Examples: removed during process, adjusted for loss on drying.
  Implementation note: This is represented in  markdown.  For multiple comments utilize markdwon formating for separation of notes.
"""
* type 1..1 MS
  * text 1..1 MS
  * text = "Product Part Additional Information"
// * type = $NCIT#AddInfo "Product Part Additional Information"
* value[x] 1..1 MS
* value[x] only markdown

RuleSet: ProductPartIdentifierProperty
* ^short = "Product Part Identifier"
* ^definition = """
  A submitter designated identifier that uniquely identifies the part within the drug product. [Source: SME Defined]
  Examples: 1, A1, Red bead, Blue minitablet
"""
* type 1..1 MS
  * text 1..1 MS
  * text = "Product Part Identifier"
// * type = $NCIT#PPiD "Product Part Identifier"
* value[x] 1..1 MS
* value[x] only CodeableConceptTextOnly
// * valueCodeableConcept.coding from CmcRelationshipTypesVS	
// * valueCodeableConcept.coding  ^short = "Product Part Role"
// * valueCodeableConcept.coding ^definition = """If the Product does not have parts the Product Part Role is 'Primary'.
// If the Product does have parts and the Product Part does not have a Product Part Identifier Reference then the component is a 'Parent'.  
// If the Product does have parts and there is a Product Part Identifier Reference the component  is a 'Child'.
// """
RuleSet: ProductPartIdentifierReferenceProperty
* ^short = "Product Part Identifier Reference"
* ^definition = """
  Identifies the parent or outer-level product part. [Source: SME Defined]
  Example: A bead (Product Part Identifier = “B1”) has a seal coating (Product Part Identifier = “SCoat”) and is contained in a Hard HPMC capsule shell (Product Part Identifier “Cap Shell”). For the seal coating, Product Part Identifier Reference = “B1”, because the seal coat is applied to the bead.
"""
* type 1..1 MS
  * text 1..1 MS
  * text = "Product Part Identifier Reference"
// * type = $NCIT#PPiDref "Product Part Identifier Reference"
* value[x] 1..1 MS
* value[x] only CodeableConceptTextOnly

Profile: DrugProductHandle
Parent: MedicinalProductDefinition
Id: pqcmc-drug-product-handle 
Title: "Drug Product Handle"
Description: "Includes the essential identifying information of the drug product required to link to other profiles about the product in the eCTD structure."

* identifier 0..1 MS
* identifier ^short = "Optional user designated identifier"
* description 0..0 MS
* insert DosageForm
* insert RouteOfAdministration
* insert ProprietaryAndNonProprietaryNames
* name.usage.jurisdiction 0..0
* crossReference 0..0 MS

Profile: DrugProductDescription
Parent: MedicinalProductDefinition
Id: pqcmc-drug-product-description
Title: "Drug Product Description"
Description: "Includes the properties of the drug product and components. Profile of Drug Product profile."

* identifier 0..1 
* identifier ^short = "optional user designated identifier"	
* description 1..1 MS
* description ^short = "Drug Product Description"
* description ^definition = """A textual narrative describing the drug product or products. [Source: SME Defined]
Examples: dosage form, container closure system, purpose."""
* combinedPharmaceuticalDoseForm 1..1 MS
* combinedPharmaceuticalDoseForm from SplPharmaceuticalDosageFormTerminology (required)
  * ^short = "Product Dosage Form"
  * ^definition = """
    The form in which active and/or inert ingredient(s) are physically presented as indicated on the packaging according to the USP. [Source: NCI EVS - C42636]
    Examples: tablet, capsule, solution, cream, etc. that contains a drug substance generally, but not necessarily, in association with excipients. [Source: ICH Q1A(R2)] See also 21 CFR 314.3.
    Note: If there is a new dosage form that does not exist in the controlled terminology, then propose this new dosage form during sponsor meetings with FDA.

    SME comment -- this is the marketed dosage form
  """
* insert RouteOfAdministration
* insert ProprietaryAndNonProprietaryNames
* name.usage.jurisdiction 0..0
* crossReference 0..* MS
* crossReference.product MS
* crossReference.product ^short = "Co-Packaged Product"
* insert PQCodeableReference(crossReference.product)
* crossReference.product only CodeableReference(DrugProductHandle)


RuleSet: DosageForm
* combinedPharmaceuticalDoseForm 1..1 MS
* combinedPharmaceuticalDoseForm ^short = "Product Dosage Form"
* combinedPharmaceuticalDoseForm ^definition = """The form in which active and/or inert ingredient(s) are physically presented as indicated on the packaging according to the USP. [Source: NCI EVS - C42636]
Examples: tablet, capsule, solution, cream, etc. that contains a drug substance generally, but not necessarily, in association with excipients. [Source: ICH Q1A(R2)] See also 21 CFR 314.3.
Note: If there is a new dosage form that does not exist in the controlled terminology, then propose this new dosage form during sponsor meetings with FDA.

SME comment -- this is the marketed dosage form
"""
* combinedPharmaceuticalDoseForm from SplPharmaceuticalDosageFormTerminology (required)

RuleSet: RouteOfAdministration
* route 1..* MS
  * ^short = "Route of Administration"
  * ^definition = "Designation of the part of the body through which or into which, or the way in which, the medicinal product is intended to be introduced. In some cases a medicinal product can be intended for more than one route and/or method of administration. [Source: NCI E C38114]"
* route from SplDrugRouteofAdministrationTerminology (required)

RuleSet: ProprietaryAndNonProprietaryNames
* name 1..2 MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #closed
  * ^slicing.description = "Require nonproprietary name. Parts required if present in the nonproprietary name"
  * productName 1..1 MS
  * type 1..1 MS
  * type from cmc-product-name-types-vs (required)
* name contains Proprietary 0..1 and NonProprietary 1..1
* name[Proprietary]
  * type = $NCIT#C71898 "Proprietary Name"
  * part 0..* MS
    * ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "type"
    * ^slicing.rules = #closed
    * ^slicing.description = "Optional name parts"
    * part 1..1 MS
    * type 1..1 MS
    * type from PqcmcNamePartTerminology (required)
* name[NonProprietary]
  * obeys cmc-strength-name-must-reference-scientific
  * type = $NCIT#C96971 "Nonproprietary Name"
  * part 1..* MS
    * ^definition = """Name Parts are a means of specifying a range of acceptable forms of the name of a product.
Note: The minimum is the scientific name.
"""
    * ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "type"
    * ^slicing.rules = #closed
    * ^slicing.description = "The scientific name part is required and all name parts if present"
    * part 1..1 MS
    * type 1..1 MS
    * type from PqcmcNamePartTerminology (required)
  * part contains 
  Scientific 1..* and
  Invented 0..* and 
  Formulation 0..* and 
  Strength 1..* and 
  Container 0..* and
  Form 0..* and 
  Device 0..*
  * part[Scientific].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#SCI
  * part[Invented].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#INV
  * part[Formulation].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#FORMUL
  * part[Strength].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#STR
  * part[Strength].type.text  1..1 MS
  * part[Container].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#CON
  * part[Form].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#FRM
  * part[Device].type = http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2#DEV

// Stage 2

Extension: ProductBatchIngredientExtension
Id: pq-product-batch-ingredient-extension
Title: "Product Batch Ingredient Extension"
Description: "Extension for measurement properties for ingredients in the batch formla."
* ^context[+].type = #element
* ^context[=].expression = "ManufacturedItemDefinition.component.constituent"
* extension contains
  overagePercent 1..1 MS and
  overageJustification 1..1 MS 
* extension[overagePercent].value[x] only decimal
* extension[overagePercent].value[x] ^short = "Overage Percent"
* extension[overagePercent].value[x] ^definition = """Overage is the percent of a drug substance in excess of the label claim to compensate for the loss, such as manufacturing or other.
Note: This is not for stability loss, and generally not permitted.
Example: 3% overage of drug that has a label claim of 10mg of active (API) - the formulation would have 10.3 mg. A batch formula for 100 kg would contain 103 kg of API.
"""
* extension[overageJustification].value[x] only markdown
* extension[overageJustification].value[x] ^short = "Overage Justification"
* extension[overageJustification].value[x] ^definition = "The rationale for use of excess drug substance during manufacturing of the drug product [Source: SME Defined]"

Extension: ProductBatchStrengthTextualExtension
Id: pq-product-batch-strength-textual-extension
Title: "Product Batch Strength Textual Extension"
Description: "Extension for strenght as a string for ingredients in the batch formla."
* ^context[+].type = #element
* ^context[=].expression = "ManufacturedItemDefinition.component.constituent"

* value[x] only string
* value[x] 1..1 MS
* value[x] ^short = "Strength Textual"
* value[x] ^definition = """A written description of the strength of the ingredient.[Source: SME Defined]
Note: This is typically applicable to biologics
Example: International Units for Enzymes
"""

Profile: BatchFormula
Parent: ManufacturedItemDefinition
Id: pqcmc-product-batch-formula
Title: "Drug Product Batch Formula"
Description: "Listing of all components of the dosage form to be used in the manufacture, their amounts on a per batch basis, including overages, and reference to their quality standards."

* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"
* status 1..1 MS
* name 1..1 MS
* name ^short = "Product Non-proprietary Name"
* name ^definition = """A name unprotected by trademark rights that is entirely in the public domain. It may be used without restriction by the public at large, both lay and professional. [Source: SME Defined]
"""
* manufacturedDoseForm from PqcmcManufacturedDoseFormTerminology
* manufacturer MS
* insert PQReference(manufacturer)
* manufacturer only Reference(CodedOrganization) 
* property 1..* MS
  * type 1..1 MS
    * text 1..1 MS
* property ^slicing.discriminator.type = #value
* property ^slicing.discriminator.path = "type.text"
* property ^slicing.rules = #closed
* property ^slicing.description = "Slice based on value"
* property contains
      BatchSize 1..1 MS and
      BatchUtil 1..* MS and
      AddInfo 0..1 MS

* property[BatchSize]
  * ^short = "Batch Quantity"
  * ^definition = """
    The amount of material in a specific batch size [Source: SME Defined]
    Example: 1000 kg
  """
  * type.text = "Batch Quantity"
  * value[x] 1..1 MS
  * value[x] only Quantity
  * value[x] from PqcmcUnitsMeasure (required)
    * value 1..1 MS
    * code
      * ^short = "Quantity UOM"
      * ^definition = """
        A named quantity in terms of which other quantities are measured or specified, used as a standard measurement of like kinds. [Source: NCI EVS - C25709]
      """
* property[BatchUtil]
  * ^short = "Batch Utilization"
  * ^definition = """
    A categorization of the batch that identifies its usage. [Source: SME Defined]
    Examples: commercial, development.
  """
  * type.text = "Batch Utilization"
  * value[x] 1..1 MS
  * value[x] only CodeableConcept
  * value[x] from PqcmcBatchUtilizationTerminology (required)

* property[AddInfo] insert AdditionalInformationProperty(Batch Formula Additional Information)

// Product parts
* component 1..* MS
  * amount 2..2
  * amount ^slicing.discriminator.type = #value
  * amount ^slicing.discriminator.path = "code"
  * amount ^slicing.rules = #closed
  * amount ^slicing.description = "Slice based on value of unit"
  * amount contains
    perBatch 1..1 MS and
    percent 1..1 MS
  * amount[perBatch]
    * ^short = "Component Quantity Per Batch"
    * ^definition = """Specifies the amount of the component per batch size of the drug product. [Source: SME Defined]"""
    * value 1..1 MS
    * unit 1..1 MS
    * code 1..1 MS
    * code from PqcmcNonPercentageUnits (required)
  * amount[percent]
    * value 1..1 MS
    * unit 1..1 MS
    * code 1..1 MS
    * code from PqcmcPercentageUnits (required)
* component.type 1..1 MS
* component.type ^short = "Product Part Type"
* component.type ^definition = """Identifies the kind of element, based on the design the applicant develops to achieve the desired drug product and overall release profile. [Source: SME Defined]
Example: Layer, Bead, Minitablet, Capsule Shell, Coating
"""
* component.type from PqcmcProductPartType
// ingredient
* component.constituent 1..* MS
* component.constituent.extension contains pq-additional-info-extension named additional-info 0..1 MS
* component.constituent.extension[additional-info] ^short = "Drug Product Constituent Additional Information"
* component.constituent.extension[additional-info] ^definition = """A placeholder for providing any comments relevant to the constituent [Source: SME Defined]
Examples: Water for wet granulation - removed during process; adjusted for loss on drying, etc.* property[
"""
* component.constituent.extension contains pq-product-batch-ingredient-extension named formulaIngredient 0..1 MS
* component.constituent
* component.constituent.extension contains pq-product-batch-strength-textual-extension named StrengthTextual 0..1 MS
* component.constituent

  * amount 2..2 MS
  * amount ^slicing.discriminator.type = #value
  * amount ^slicing.discriminator.path = "code"
  * amount ^slicing.rules = #closed
  * amount ^slicing.description = "Slice based on value of unit"
  * amount contains
      perBatch 1..1 MS and
      percent 1..1 MS
  * amount[perBatch]
    * ^short = "Component Quantity Per Batch"
    * ^definition = """
      Specifies the amount of the component per batch size of the drug product. [Source: SME Defined]
    """
    * value 1..1 MS
    * unit 1..1 MS
    * code 1..1 MS
    * code from PqcmcNonPercentageUnits (required)
  * amount[percent]
    * ^short = "Quantity Percent"
    * ^definition = """
      Quantity expressed as Volume To Volume: The percentage of the component in the batch [Source: SME Defined]
      Quantity UOM: A named quantity in terms of which other quantities are measured or specified, used as a standard measurement of like kinds. [Source: NCI E - C25709]
    """
    * value 1..1 MS
    * unit 1..1 MS
    * code 1..1 MS
    * code from PqcmcPercentageUnits (required)


* component.constituent.location 0..* MS
* component.constituent.location ^short = "Product Part Ingredient Physical Location"
* component.constituent.location ^definition = """Identifies where the ingredient physically resides within the product part. [Source: SME Defined]
Examples: Intragranular, Extra granular, Blend
"""
* component.constituent.location from PqcmcProductPartIngredientPhysicalLocation
* component.constituent.hasIngredient 1..1 MS
* insert PQCodeableReference(component.constituent.hasIngredient)
* component.constituent.hasIngredient only CodeableReference(DrugProductIngredient)
// Product part
* component.property 1..* MS
* component.property.type 1..1 MS
* component.property.type.text 1..1 MS
* component.property ^slicing.discriminator.type = #value
* component.property ^slicing.discriminator.path = "type.text"
* component.property ^slicing.rules = #closed
* component.property ^slicing.description = "Slice based on value"
* component.property contains
    PPiD 1..1 MS and
    PPiDref 0..1 MS and
    AddInfo 0..1 MS 
* component.property[PPiD] insert ProductPartIdentifierProperty
* component.property[PPiDref] insert ProductPartIdentifierReferenceProperty
* component.property[AddInfo] insert AdditionalInformationProperty(Product Part Additional Information)

* component.component 0..* MS

Profile: BatchFormulaMedicinalProduct
Parent: MedicinalProductDefinition
Id: pqcmc-batch-formula-product
Title: "Batch Formula Drug Product Identification"
Description: "The Drug Product produced by the batch formula."

* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"	
* comprisedOf 1..* MS
* insert PQReference(comprisedOf)
* comprisedOf only Reference(BatchFormula)
* insert ProprietaryAndNonProprietaryNames
* insert RouteOfAdministration
* combinedPharmaceuticalDoseForm 1..1 MS
  * ^short = "Product Dosage Form"
  * ^definition = """The form in which active and/or inert ingredient(s) are physically presented as indicated on the packaging according to the USP. [Source: NCI EVS - C42636]
Examples: tablet, capsule, solution, cream, etc. that contains a drug substance generally, but not necessarily, in association with excipients. [Source: ICH Q1A(R2)] See also 21 CFR 314.3.
Note: If there is a new dosage form that does not exist in the controlled terminology, then propose this new dosage form during sponsor meetings with FDA.

SME comment -- this is the marketed dosage form"""
* combinedPharmaceuticalDoseForm from SplPharmaceuticalDosageFormTerminology (required)

Profile: DrugProductwithImpurities
Parent: MedicinalProductDefinition
Id: pqcmc-drug-product-with-impurities
Title: "Drug Product Impurities"
Description: "List of drug product impurities. Profile of Drug Product profile."

* identifier 0..1 
* identifier ^short = "optional user designated identifier"	
* insert DosageForm
* impurity 0..* MS	
* impurity ^short = "Product Impurity"
* insert PQCodeableReference(impurity)
* impurity only CodeableReference(ImpuritySubstance)	
* insert ProprietaryAndNonProprietaryNames
* insert RouteOfAdministration


---

// File: input/fsh/DrugSubstanceResources.fsh

Extension: StrengthExtension
Id:  strength-extension
Title: "Strength Extension"
Description: "Strength Type (for API)"
* ^context[+].type = #element
* ^context[=].expression = "Ingredient.substance.strength"
* value[x] 1..1 MS
  * ^short = "Strength Type (for API)"
  * ^definition = """
    A physical (content) or activity measurement of the strength of the ingredient. [Source: SME Defined]
    Example: Mass, Activity
  """
* value[x] only CodeableConcept
* value[x] from PqcmcStrengthTypeTerminology (required)

Profile: PolymorphicForm
Parent: SubstanceDefinition
Id: pqcmc-polymorphic-form
Title: "Polymorphic Form"
Description: "Alternate structure present in the drug substance"

* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"
* structure 0..1 MS
* structure.molecularFormula 0..1 MS
* structure.molecularFormula ^short = "Molecular Formula"
* structure.molecularFormula ^definition = "An expression which states the number and type of atoms present in a molecule of a substance or sequence for biotechnology products. [Source: SME Defined]"
* structure.technique 0..1 MS
* structure.technique ^short = "Substance Characterisation Technique"
* structure.technique ^definition = """The technique used to elucidate the structure or characterisation of the drug substance. [Source: SME Defined] Examples: x-ray, HPLC, NMR, peptide mapping, ligand binding assay.
"""
* structure.technique only CodeableConceptTextOnly
* insert GraphicAndStructureRepresentations(0..1,0..*,0..*)
* structure obeys cmc-structure-representation-required
* code 0..1 MS
* code.code.coding.system = $UNII
* code.code.coding ^short = "UNII"
* code.code.coding ^definition = """The UNII is a non-proprietary, free, unique, unambiguous, non-semantic, alphanumeric identifier based on a substance’s molecular structure and/or descriptive information. [Source: http://www.fda.gov/ForIndustry/DataStandards/SubstanceRegistrationSystem-UniqueIngredientIdentifierUNII/]
Example: 362O9ITL9D
Note: If a UNII does not exist, please go to http://www.fda.gov/ForIndustry/DataStandards/SubstanceRegistrationSystem-UniqueIngredientIdentifierUNII/
"""
* insert ShortSetSubstanceNames

Profile: ComponentSubstance
Parent: SubstanceDefinition
Id: pqcmc-component-substance
Title: "Component Substance"
Description: "Any raw material intended for use in the manufacture of a drug substance, or any ingredient intended for use in the manufacture of a drug product including those that may not appear in such drug product."
* . obeys cmc-when-unii-required
* . obeys cmc-name-isbt
* . obeys cmc-source-material
* identifier 0..1
* identifier ^short = "optional user designated identifier"
* classification 1..1 MS
* classification from SubstanceClassification
* classification ^short = "Substance Type"
* classification ^definition = """A controlled vocabulary as provided by the prEN ISO 11238 - Health informatics identification of medicinal products - Structures and controlled vocabularies for drug substances to group drug substances at a relatively high level acording to the Substance and the Substance Preparation Model.
[Source: Adapted from 'Logical model of the classification and identification of pharmaceutical and medicinal Products', HL7]
"""
* grade 1..*
* grade ^short = "Quality Standard"
* grade ^definition = """The established benchmark to which the component complies. [Source: SME Defined]
Examples: USP/NF, EP, Company Standard
"""
* grade from PqcmcQualityBenchmarkTerminology (required)
* manufacturer 0..1 MS
* insert PQReference(manufacturer)
* manufacturer only Reference(CodedOrganization)
* supplier 0..1 MS
* insert PQReference(supplier)
* supplier only Reference(CodedOrganization)
* insert GraphicAndStructureRepresentations(0..1,0..*,0..*)
* structure obeys cmc-structure-representation-required
* insert UniiAndUniProtCodes(1)
* insert ShortSetSubstanceNames

* sourceMaterial 0..1 MS
  * type 0..1 MS
  * type from PqcmcSourceTypeTerminology (required)
    * ^short = "Source Type"
    * ^definition = """
      A classification that provides the origin of the raw material. [Source: SME Defined]
    """
  * genus 0..1 MS
  * genus only CodeableConceptTextOnly
    * ^short = "Source Organism Genus"
    * ^definition = """
      The name, genus or genus and species of the organism from which the material is derived. [Source: SME Defined]
      Examples: human or Homo Sapiens, chicken, dog or canine, cow or bovine, rat or rattus.
    """
  * species 0..1 MS
  * species only CodeableConceptTextOnly
    * ^short = "Source Organism Species"
    * ^definition = """
      The name, genus or genus and species of the organism from which the material is derived. [Source: SME Defined]
      Examples: Examples: human or Homo Sapiens, chicken, dog or canine, cow or bovine, rat or rattus.
    """
  * part 0..1 MS
  * part only CodeableConceptTextOnly
    * ^short = "Source Organism Part"
    * ^definition = """
      A fragment of the source organism. [Source: SME Defined]
      Examples: secretions, material from a specific organ, tissue or portion of the organism such as liver, pancreas, blood or from bark or seed of a plant.
      IDMP 11238 definition & examples: Entity of anatomical origin of source material within an organism.
      Cartilage, Root and Stolon, whole plant is considered as a part, Aerial part of the plant, Leaf, Tuberous Root, whole animal
    """
* insert CountryOfOrigin

Profile: DrugProductComponent
Parent: Ingredient
Id: pqcmc-component
Title: "Drug Product Component"
Description: "The amount details about the drug product components to define the product composition in a product unit. Use composition."

* status.code
* for ^short = "Reference to MedicinalProductDefinition"
* role from  PqcmcDrugProductComponentFunctionCategoryTerminology (required)
* comment 0..1 MS
* comment ^short = "Drug Product Component Additional Information"
* comment ^definition = """A placeholder for providing any comments that are relevant to the component. [Source: SME Defined]
Examples: removed during process, adjusted for loss on drying, etc.
"""
* substance obeys cmc-strength-type-cases2
* substance.code MS
* substance.code ^short = "Ingredient Substance"
* insert PQCodeableReference(substance.code)
* substance.code only CodeableReference(ComponentSubstance)

* substance.strength 2..2 MS
  * ^slicing.discriminator[+].type = #exists
  * ^slicing.discriminator[=].path = "textConcentration"
  // * ^slicing.discriminator[+].type = #type
  // * ^slicing.discriminator[=].path = "concentration"
  // * ^slicing.discriminator[+].type = #value
  // * ^slicing.discriminator[=].path = "concentration.code"
  * ^slicing.rules = #closed
  * ^slicing.description = ""
  * ^slicing.ordered = false
* substance.strength contains
  amount 1..1 MS and
  percent 1..1 MS
* substance.strength[amount]
  * extension contains strength-extension named strengthFactors 1..1 MS
  * concentration[x] 1..1 MS
  * concentration[x] only Ratio or Quantity
  * concentrationQuantity 0..1 MS
  * concentrationQuantity from PqcmcNonPercentageUnits (required)
  * concentrationQuantity.value 1..1 MS
  * concentrationQuantity.value ^short = "Ingredient Total Amount Numeric"
  * concentrationQuantity.value ^definition = """
    Specifies the quantity of an ingredient in a single dose unit (e.g., one tablet, capsule) of the drug product. [Source: SME Defined]
    Example: if the tablet contains 325 mg of the ingredient in each unit dose, then Ingredient Total Amount Numeric = 325
  """
  * concentrationQuantity.comparator 0..1 MS // you CANNOT make comparator mandatory! it's absence implies equality
  * concentrationQuantity.comparator ^short = "Ingredient Total Amount Operator"
  * concentrationQuantity.comparator ^definition = """
    A mathematical symbol that denotes equality or inequality between two values. [Source: SME Defined] Examples: LT, EQ, NMT.
    Note: This is typically applicable to biologics.
  """
  * concentrationQuantity.unit 1..1
  * textConcentration 1..1 MS
  * textConcentration ^short = "Strength Textual"
  * textConcentration ^definition = "A written description of the strength of the ingredient. [Source: SME Defined]"
  * concentrationRatio 0..1 MS
  * concentrationRatio
    * numerator 1..1 MS
    * numerator from PqcmcNonPercentageUnits (required)
      * value ^short = "Product Ingredient Amount Numeric Numerator"
      * ^definition = """
        Specifies the quantity of an ingredient in a single dose unit of the drug product. [Source: SME Defined]
      """
    * denominator MS
    * denominator from PqcmcNonPercentageUnits (required)
    * numerator
      * value 1..1 MS
        * ^short = "Ingredient Total Amount Numeric Numerator"
  * concentrationRatio.numerator.unit ^short = "Ingredient Total Amount Numeric Numerator UOM"
  * concentrationRatio.numerator.unit ^definition = """
    The labeled unit of measure for the content of the drug product, expressed quantitatively per dosage unit. [Source: Adapted for NCI EVS C117055]
    Example: mg
  """
  * concentrationRatio.numerator.code 1..1 MS
  * concentrationRatio.denominator 1..1 MS
  * concentrationRatio.denominator.value  ^short = "Ingredient Total Amount Numeric Denominator"
  * concentrationRatio.denominator.value  ^definition = """
    Specifies the quantity of the ingredients within a single dose unit (e.g., vial, syringe) of drug product. [Source: SME Defined]
    Example: 10mg/syringe, 1mg/ml
  """
  * concentrationRatio.denominator.value 1..1 MS
  * concentrationRatio.denominator.unit 1..1 MS
    * ^short = "Ingredient Total Amount Numeric Denominator UOM"
  * concentrationRatio.denominator.code 1..1 MS
* substance.strength[percent]
  * concentration[x] 1..1 MS
  * concentration[x] only Quantity
  * textConcentration 0..0 MS
  * concentrationQuantity from PqcmcPercentageUnits (required)
    * value 1..1 MS
      * ^short = "Ingredient Total Amount Content Percent"
      * ^definition = """
        The percentage of the component in the drug product. [Source: SME Defined]
        Example: Product Total Weight = 1200 mg and Product Ingredient Amount = 325 mg, so Product Ingredient Content Percent = 27.08
      """
    * code 1..1 MS
      * ^short = "Ingredient Total Amount Content Percent UOM"
    

Profile: ExcipientRaw
Parent: SubstanceDefinition
Id: pqcmc-excipient
Title: "Excipient Drug Substance"
Description: "Provides sufficient information to identify an inactive substance and raw materials and its source when stability data is required in the submission."

* . obeys cmc-when-unii-required
* . obeys cmc-name-isbt
* . obeys cmc-source-material
* identifier 0..1
* identifier ^short = "optional user designated identifier"
* classification 1..1 MS
* classification from SubstanceClassification
* classification ^short = "Substance Type"
* classification ^definition = """A controlled vocabulary as provided by the prEN ISO 11238 - Health informatics identification of medicinal products - Structures and controlled vocabularies for drug substances to group drug substances at a relatively high level acording to the Substance and the Substance Preparation Model.
[Source: Adapted from 'Logical model of the classification and identification of pharmaceutical and medicinal Products', HL7]
"""
* grade 1..*
* grade ^short = "Quality Standard"
* grade ^definition = """The established benchmark to which the component complies. [Source: SME Defined]
Examples: USP/NF, EP, Company Standard
"""
* grade from PqcmcQualityBenchmarkTerminology (required)
* manufacturer 0..* MS
* insert PQReference(manufacturer)
* manufacturer only Reference(CodedOrganization)
* supplier 0..1 MS
* insert  PQReference(supplier)
* supplier only Reference(CodedOrganization)
* insert UniiAndUniProtCodes(1)
* insert ShortSetSubstanceNames

* sourceMaterial 1..1 MS
* sourceMaterial.type 1..1
* sourceMaterial.type ^short = "Source Type"
* sourceMaterial.type ^definition = """A classification that provides the origin of the raw material. [Source: SME Defined]
Example: cat hair would be an Animal source type """
* sourceMaterial.type from PqcmcSourceTypeTerminology (required)
* sourceMaterial
  * genus 0..1 MS
  * genus only CodeableConceptTextOnly
    * ^short = "Source Organism Genus"
    * ^definition = """
      The name, genus or genus and species of the organism from which the material is derived. [Source: SME Defined]
      Examples: human or Homo Sapiens, chicken, dog or canine, cow or bovine, rat or rattus.
    """
  * species 0..1 MS
  * species only CodeableConceptTextOnly
    * ^short = "Source Organism Species"
    * ^definition = """
      The name, genus or genus and species of the organism from which the material is derived. [Source: SME Defined]
      Examples: Examples: human or Homo Sapiens, chicken, dog or canine, cow or bovine, rat or rattus.
    """
  * part 0..1 MS
  * part only CodeableConceptTextOnly
    * ^short = "Source Organism Part"
    * ^definition = """
      A fragment of the source organism. [Source: SME Defined]
      Examples: secretions, material from a specific organ, tissue or portion of the organism such as liver, pancreas, blood or from bark or seed of a plant.
      IDMP 11238 definition & examples: Entity of anatomical origin of source material within an organism.
      Cartilage, Root and Stolon, whole plant is considered as a part, Aerial part of the plant, Leaf, Tuberous Root, whole animal
    """
* insert CountryOfOrigin

Profile: SubstanceDefinitionHandle
Parent: SubstanceDefinition
Id: pqcmc-routine-drug-substance
Title: "Drug Substance Handle"
Description: "Provides sufficient information to identify a drug substance. Profile on SubstanceDefinition."
* . obeys cmc-when-unii-required
* . obeys cmc-name-isbt
* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"
* classification 1..1 MS
* classification from SubstanceClassification
* classification ^short = "Substance Type"
* classification ^definition = """A controlled vocabulary as provided by the prEN ISO 11238 - Health informatics identification of medicinal products - Structures and controlled vocabularies for drug substances to group drug substances at a relatively high level acording to the Substance and the Substance Preparation Model.
"""
* grade 1..*
* grade ^short = "Quality Standard"
* grade ^definition = """The established benchmark to which the component complies. [Source: SME Defined]
Examples: USP/NF, EP, Company Standard
"""
* grade from PqcmcQualityBenchmarkTerminology (required)
* manufacturer 1..1 MS
* insert PQReference(manufacturer)
* manufacturer only Reference(CodedOrganization)
* supplier 0..1 MS
* insert PQReference(supplier)
* supplier only Reference(CodedOrganization)
* insert UniiAndUniProtCodes(1)
* insert ShortSetSubstanceNames
* sourceMaterial 0..0 MS

Profile: DrugSubstanceNomenclatureStructure
Parent: SubstanceDefinition
Id: pqcmc-drug-substance-nomenclature-structure
Title: "Substance General Information"
Description: "Substance General Information containing Drug Substance (Active Ingredient) nomenclature (3.2.S.1.1) and Substance Structure (3.2.S.1.2) profile."
* . obeys cmc-when-unii-required
* . obeys cmc-name-isbt
* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"
* classification 1..1 MS
* classification from SubstanceClassification
* classification ^short = "Substance Type"
* classification ^definition = """A controlled vocabulary as provided by the prEN ISO 11238 - Health informatics identification of medicinal products - Structures and controlled vocabularies for drug substances to group drug substances at a relatively high level acording to the Substance and the Substance Preparation Model.
[Source: Adapted from 'Logical model of the classification and identification of pharmaceutical and medicinal Products', HL7]
"""
* manufacturer 1..1 MS
* insert PQReference(manufacturer)
* manufacturer only Reference(CodedOrganization)
* supplier 0..1 MS
* insert PQReference(supplier)
* supplier only Reference(CodedOrganization)
* molecularWeight 0..1 MS
* molecularWeight ^short = "Molecular Weight"
* molecularWeight ^definition = "The average mass of a molecule of a compound compared to ¹/₁₂ the mass of carbon 12 and calculated as the sum of the atomic weights of the constituent atoms. [Source: Merriam Webster]"
* molecularWeight.amount 1..1 MS
* molecularWeight.amount.unit ^short = "Molecular Weight UOM"
* molecularWeight.amount.unit ^definition = """The labeled unit of measure for the molecular weight. [Source: Adapted for NCI EVS C117055]
 """
* molecularWeight.amount.code 1..1 MS
* molecularWeight.amount from PqcmcUnitsMeasure (extensible)
* . obeys cmc-structure-required
* . obeys cmc-substance-structure-graphic-required
* structure 1..1 MS
//* structure obeys cmc-representation-or-document
* structure.molecularFormula 0..1 MS
* structure.molecularFormula ^short = "Molecular Formula | Biopolymer Sequence"
* structure.molecularFormula ^definition = """Molecular Formula: An expression which states the number and type of atoms present in a molecule of a substance or sequence for biotechnology products. [Source: SME Defined]
Biopolymer Sequence: TBD
"""
* structure.technique 1..1 MS
* structure.technique ^short = "Substance Characterisation Technique"
* structure.technique ^definition = """The technique used to elucidate the structure or characterisation of the drug substance. [Source: SME Defined] Examples: x-ray, HPLC, NMR, peptide mapping, ligand binding assay.
"""
* structure.technique only CodeableConceptTextOnly
* structure.representation 1..* MS
* insert GraphicAndStructureRepresentations(0..1,0..*,0..*)
* structure obeys cmc-structure-representation-required
* insert UniiAndUniProtCodes(1)
* insert SubstanceNames

* relationship 0..* MS
* relationship.substanceDefinition[x] ^short = "The substance definition of a polyphorm of the Drug Substance"
* insert PQReference(relationship.substanceDefinition[x])
* relationship.substanceDefinition[x] only Reference( PolymorphicForm )
* relationship.type only CodeableConceptTextOnly
* relationship.type.text = "Polymorph"
* relationship.type ^short = "Polymorph"



RuleSet: SubstanceNames
* name 1..* MS
* name ^short = "Subtance Name"
* name ^definition = """Substance Name is identified by its Substance Type. Substance Type: Identifies the source that assigned the product ingredient name. [Source: SME Defined]
Examples: GSRS Preferred Term, Systematic Name, INN, USP/NF
"""
* name obeys cmc-name-preferred
* name.type from PqcmcSubstanceNameType // don't use example binding
* name ^slicing.discriminator.type = #value
* name ^slicing.discriminator.path = "type" //element(*,SubstanceDefinition)/name/type/coding/code
* name ^slicing.rules = #closed
* name ^slicing.description = "Slice based on value pattern"
* name contains
  sys 0..1 MS and
  sub 0..1 MS and
  brand 0..1 MS and
  // comn 0..1 MS and
  gsrs 0..1 MS and
  usp 0..1 MS and
  cas 0..1 MS and
  inn 0..1 MS and
  usan 0..1 MS and
  iupac 0..1 MS and
  isbt 0..1 MS

* name[sys].name 1..1 MS
* name[sys].name ^short = "Systematic"
* name[sys].name ^definition = """A name derived directly from the chemical structure. [Source: SME Defined]
"""
* name[sys].type 1..1 MS
* name[sys].type = $NCIT#C203357	"Systematic Name"

* name[sub].name 1..1 MS
* name[sub].name ^short = "Generic"
* name[sub].name ^definition = """A non-branded nor registered name that meant for common use."""
* name[sub].type 1..1 MS

* name[sub].type = $NCIT#C97054 "Generic Name"

* name[brand].name 1..1 MS
* name[brand].name ^short = "Brand"
* name[brand].name ^definition = """The part of the name or logo associated with a specific product or service identifying and distinguishing it from varieties of the same product or service marketed by competing companies.
"""
* name[brand].type 1..1 MS
* name[brand].type = $NCIT#C71898	"Brand"

// * name[comn].name 1..1 MS
// * name[comn].name ^short = "Common"
// * name[comn].name ^definition = """The generally used, literal identifier of the entity."""
// * name[comn].type 1..1 MS
// * name[comn].type.coding 1..1 MS
// * name[comn].type.coding = $NCIT#139 "Common"

* name[gsrs].name 1..1 MS
* name[gsrs].name ^short = "GSRS Preferred Term"
* name[gsrs].name ^definition = """Default display name identified within FDA Global Substance Registration System (GSRS)."""
* name[gsrs].type 1..1 MS
* name[gsrs].type = $NCIT#C203355 "GSRS Preferred Term"

* name[usp].name 1..1 MS
* name[usp].name ^short = "USP-NF Established Name"
* name[usp].name ^definition = """A unique nonproprietary name assigned to drugs and biologics and assigned by the United States Pharmacopeia (USP) and excipients by the National Formulary (NF). [Source: SME Defined]
"""
* name[usp].type 1..1 MS
* name[usp].type = $NCIT#C203358	"USP-NF Established Name"

* insert CompanyName

* name[cas].name 1..1 MS
* name[cas].name ^short = "CAS Number"
* name[cas].name ^definition = """Chemical Abstract Service (CAS) Registry Numbers (often referred to as CAS RNs or CAS Numbers) are used to provide identifiers for chemical substances. A CAS Registry Number itself has no inherent chemical significance but provides a way to identify a chemical substance or molecular structure when there are many possible systematic, generic, proprietary or trivial names. [Source: Adapted from CAS.org]
Example: CAS [103-90-2]
"""
* name[cas].type 1..1 MS
* name[cas].type = $NCIT#C54682	"CAS Number"

* name[inn].name 1..1 MS
* name[inn].name ^short = "INN" 
* name[inn].name ^definition = """International Nonproprietary Names (INN) is a unique name that is globally recognized and is public property. A nonproprietary name is also known as a generic name. Note: International Nonproprietary Names (INN) facilitate the identification of pharmaceutical substances or active pharmaceutical ingredients [Source: http://www.who.int/medicines/services/inn/en/] Example: Paracetamol
"""
* name[inn].type 1..1 MS
* name[inn].type = $NCIT#C142585	"INN"

* name[usan].name 1..1 MS
* name[usan].name ^short = "USAN"
* name[usan].name ^definition = """A unique nonproprietary name assigned to drugs and biologics and assigned by the United States Adopted Names Council [Source: SME Defined] Example: acetaminophen
"""
* name[usan].type 1..1 MS
* name[usan].type = $NCIT#C96973	"USAN"

* name[iupac].name 1..1 MS
* name[iupac].name ^short = "IUPAC Name" 
* name[iupac].name ^definition = """A name assigned to a chemical substance according to the systematic nomenclature rules defined by the International Union of Pure and Applied Chemistry (IUPAC) [Source: SME Defined] 
Example: N- (4-hydroxyphenyl)acetamide
"""
* name[iupac].type 1..1 MS
* name[iupac].type = $NCIT#C203356	"IUPAC Name"

* name[isbt].name 1..1 MS
* name[isbt].name ^short = "ISBT-128 DIN"
* name[isbt].name ^definition = """It is the global standard for the terminology, identification, coding and labeling of medical products of human origin (including blood, cell, tissue, milk, and organ products). [Source: https://www.iccbba.org/]
"""
* name[isbt].type 1..1 MS
* name[isbt].type = $NCIT#C95517	"ISBT-128 DIN"

* name.preferred 0..1 MS
* name.preferred ^short = "True when the name type is Substance Name"

RuleSet: ShortSetSubstanceNames
* name 1..* MS
* name ^short = "Substance Name"
* name ^definition = """Substance Name is identified by its Substance Type.
Substance Type | Product Part Ingredient Name Type: Identifies the source that assigned the product ingredient name. [Source: SME Defined]
Examples: GSRS Preferred Term, Systematic Name, INN, USP/NF
"""
* name obeys cmc-name-preferred
* name ^slicing.discriminator.type = #value
* name ^slicing.discriminator.path = "type" //element(*,SubstanceDefinition)/name/type/coding/code
* name ^slicing.rules = #closed
* name ^slicing.description = "Slice based on value pattern"
* name.type from PqcmcSubstanceNameType // don't use example binding
* name contains
  sub 0..1 MS and
  // comn 0..1 MS and
  gsrs 0..1 MS and
  isbt 0..1 MS
* name[sub].name 1..1 MS
* name[sub].name ^short = "Generic Name"
* name[sub].name ^definition = """A non-branded nor registered name that meant for common use."""
* name[sub].type 1..1 MS
* name[sub].type = $NCIT#C97054	"Generic Name"

// * name[comn].name 1..1 MS
// * name[comn].name ^short = "Common"
// * name[comn].name ^definition = """TThe generally used, literal identifier of the entity."""
// * name[comn].type 1..1 MS
// * name[comn].type.coding 1..1 MS
// * name[comn].type.coding = $NCIT#139 "Common"

* name[gsrs].name 1..1 MS
* name[gsrs].name ^short = "GSRS Preferred Term"
* name[gsrs].name ^definition = """Default display name identified within FDA Global Substance Registration System (GSRS).
"""
* name[gsrs].type 1..1 MS
* name[gsrs].type = $NCIT#C203355 "GSRS Preferred Term"

* name[isbt].name 1..1 MS
* name[isbt].name ^short = "ISBT-128 DIN" 
* name[isbt].name ^definition = """It is the global standard for the terminology, identification, coding and labeling of medical products of human origin (including blood, cell, tissue, milk, and organ products). [Source: https://www.iccbba.org/]
"""
* name[isbt].type 1..1 MS
* name[isbt].type = $NCIT#C95517	"ISBT-128 DIN"
* name.preferred 0..1 MS
* name.preferred ^short = "True when the name type is Substance Name"

RuleSet: CompanyName
* name contains comp 0..1 MS
* name[comp].name 1..1 MS
* name[comp].name ^short = "Company ID/Code"
* name[comp].name ^definition = """An internal identifier assigned by the sponsor to this drug substance. [Source: SME Defined]
"""
* name[comp].type 1..1 MS
* name[comp].type = $NCIT#C203354	"Company ID/Code"

RuleSet: UniiAndUniProtCodes(cardinality)
// lots of things derived from substanceDefinition use code
// for unii and uniprot codes 
* code {cardinality}..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code.coding.system"
  * ^slicing.rules = #open
* code contains 
  unii 0..1 and
  uniProt 0..1
* code[unii]
  * ^short = "UNII"
  * ^definition = """
    The UNII is a non-proprietary, free, unique, unambiguous, non-semantic, alphanumeric identifier based on a substance’s molecular structure and/or descriptive information. [Source: http://www.fda.gov/ForIndustry/DataStandards/SubstanceRegistrationSystem-UniqueIngredientIdentifierUNII/]
    Example: 362O9ITL9D
    Note: If a UNII does not exist, please go to http://www.fda.gov/ForIndustry/DataStandards/SubstanceRegistrationSystem-UniqueIngredientIdentifierUNII/
  """
  * code 1..1 MS
    * coding 1..1 MS
      * system 1..1 MS
      * system = $UNII
* code[uniProt]
  * ^short = "UniProt ID"
  * ^definition = """
    The  UniProt ID is an index to the UniProt knowledgebase,  a large resource of protein sequences and associated detailed annotation.
    It is accessible at https://www.uniprot.org/
  """
  * code 1..1 MS
    * coding 1..1 MS
      * system 1..1 MS
      * system = $UNIPROT

RuleSet: CountryOfOrigin
* sourceMaterial.countryOfOrigin 0..1 MS 
* sourceMaterial.countryOfOrigin from PqcmcGENCAndISOIntersect (required)
  * ^short = "Source Organism Country of Origin"
  * ^definition = "The name of the country where the organism was reared. [Source: SME Defined]"

//*Stage 2 --------------------------------------------------------------------------------------------------------------*/

Profile: DrugSubstanceCharacterisation
Parent: SubstanceDefinition
Id: pqcmc-drug-substance-characterisation
Title: "Drug Substance"
Description: "Drug Substance (Active Ingredient) nomenclature and characterisation."
* . obeys cmc-when-unii-required
* . obeys cmc-name-isbt
* obeys cmc-substance-characterisation-content-required
* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"
* classification 1..1 MS
* classification from SubstanceClassification
* classification ^short = "Substance Type"
* classification ^definition = """A controlled vocabulary as provided by the prEN ISO 11238 - Health informatics identification of medicinal products - Structures and controlled vocabularies for drug substances to group drug substances at a relatively high level acording to the Substance and the Substance Preparation Model.
[Source: Adapted from 'Logical model of the classification and identification of pharmaceutical and medicinal Products', HL7]
"""
* manufacturer 0..1 MS
* insert PQReference(manufacturer)
* manufacturer only Reference(CodedOrganization)
* supplier 0..1 MS
* insert PQReference(supplier)
* supplier only Reference(CodedOrganization)
* insert SubstanceCharacterization
* insert UniiAndUniProtCodes(1)
* insert ShortSetSubstanceNames

* relationship 0..* MS
  * ^short = "Reference to Drug Substance Impurity"
//* relationship obeys cmc-substance-relationship  not needed  since this resource is for illustraion.
  * substanceDefinition[x] 1..1 MS
  * insert PQReference(substanceDefinition[x])
  * substanceDefinition[x] only Reference(ImpuritySubstance)

Profile: ImpuritySubstance
Parent: SubstanceDefinition
Id: pqcmc-drug-product-substance-impurity
Title: "Drug Substance Impurity"
Description: "Any component of the drug substance that is not the chemical entity for procduct composition."
* obeys cmc-impurity-unii-required
* identifier 0..1 MS
* identifier ^short = "optional user designated identifier"
* classification 1..* MS
* classification from PqcmcImpurityClassificationTerminology (required)
* classification ^short = "Impurity Classification"
* classification ^definition = """A categorization of impurities based on its origin. [Source: SME Defined]
Examples: Degradation Product, Inorganic, Process Related/Process, Product Related, Leachables.
"""
* insert SubstanceCharacterization
* structure 0..1 MS
//* structure obeys cmc-representation-or-document
* structure.technique MS
* structure.technique ^short = "Impurity Substance Characterisation Technique"
* structure.technique ^definition = """The technique used to elucidate the structure or characterisation of the drug substance. [Source: SME Defined] Examples: x-ray, HPLC, NMR, peptide mapping, ligand binding assay.
"""
* structure.technique only CodeableConceptTextOnly
* structure
  * representation MS
    * ^short = "Impurity Structure Graphic | Impurity Structure Data File"
    * ^slicing.discriminator.type = #value
    * ^slicing.rules = #closed
    * ^slicing.discriminator.path = "type"
    * ^slicing.ordered = false
    * type 1..1 MS
    * type from PqcmcRepresentationTypes (required)
  * representation contains
    graphic 0..1 and
    structureFile 0..* and
    structureString 0..*
  * representation[graphic]
    * ^short = "A graphical, displayable depiction of the structure (e.g. an SVG, PNG)"
    * type 1..1 MS
      * ^short = "Graphic"
    * type = $NCIT#C54273
    * document 1..1
      * ^short = "Impurity Structure Graphic"
      * ^definition = """
        A pictorial representation of the structure of the impurity substance. 
        [Source: SME Defined] Note: Refer to the 'Acceptable File Formats for 
        use in eCTD' Example: This is the representation of the molecule CH3OH, 
        or the sequence SHLVEALALVAGERG.
      """
    * insert PQReference(document)
    * document only Reference(GraphicReference)
  * representation[structureFile]
    * ^short = "machine-readable representation -- attached file"
    * type 1..1 MS
      * ^short = "Structure File"
    * type = $NCIT#C103240
    * document 1..1 MS
      * ^short = "Impurity Chemical Structure Data (files, e.g. .SDF, .CIF)"
    * insert PQReference(document)
    * document only Reference(StructureReference)
  * representation[structureString]
    * ^short = "machine-readable representation -- plain text"
    * type 1..1 MS
      * ^short = "Structure Textual"
    * type = $NCIT#C45253
    * format 1..1 MS
      * ^short = "Drug Substance Impurity Method Type"
    * format from PqcmcChemicalStructureDataFileTypeTerminology (required)
    * representation 1..1 MS
      * ^short = "Impurity Chemical Structure Data (short, plain text representations, e.g. SMILES)"
      * ^definition = """
        A machine-readable representation of the structure of the chemical. [Source: SME Defined]
        Examples: SMILES, INCHI
      """
//   * representation[structureData]
//     * ^short = "machine-readable representation -- may be plain text (e.g. SMILES) or an attached file (e.g. SDF)"
//     * format 0..1 MS
//     * format ^short = "Drug Substance Impurity Method Type"
//     * format.text 0..1 MS
//     * type 1..1 MS
//       * text 1..1 MS
//       * text = "Structure"
//     * representation 0..1 MS
//     * representation ^short = "Impurity Chemical Structure Data (short, plain text representations, e.g. SMILES)"
//     * representation ^definition = """A machine-readable representation of the structure of the chemical. [Source: SME Defined]
// Examples: Structured Data File (SDF), MOLFILE, InChI file (small molecule), PDB, mmCIF (large molecules), HELM.
// """
//     * document 0..1 MS
//     * document ^short = "Impurity Chemical Structure Data (large files, e.g. SDF, CIF)"
//     * document only Reference(StructureReference)

// impurities might be unknown and not have Unii's
* insert UniiAndUniProtCodes(0)
* insert ShortSetSubstanceNames
* insert CompanyName

//Rulesets---------------------------------------------------------------------------------------------------------------*/
RuleSet: SubstanceCharacterization
* characterization MS
  * technique MS
  * technique only CodeableConceptTextOnly
    * ^definition = """The technique used to elucidate the structure ore characterization of the drug substance. [Source: SME Defined]
Examples: x-ray, HPLC, NMR, peptide mapping, ligand binding assay, etc.
"""
    * ^short = "Substance Characterisation Technique"
  * description 0..1 MS
    * ^short = "Analysis Narrative Text and Table"
    * ^definition = ""
  * file 0..* MS
    * ^short = "Impurity Analysis Graphic | Impurity Analytical Instrument Data File"
    * ^slicing.discriminator.type = #profile
    * ^slicing.rules = #open
    * ^slicing.discriminator.path = "$this"
    * ^slicing.ordered = false
  * file contains 
    AnalysisGraphic 0..* and
    AnalyticalInstrumentData 0..*
  * file[AnalysisGraphic] only GraphicAttachment
    * ^short = "Analysis Graphic"
    * ^definition = """Analysis Graphic: The pictorial representation of the data. [Source: SME Defined] Examples: spectrum, chromatogram.
Note: Refer to the 'Acceptable File Formats for use in eCTD'
Example: This is the representation of the instrumental output for the molecule -- CH3OHA pictorial representation of the structure of the drug substance. Required for Small Molecules. [Source: SME Defined]"""
  * file[AnalyticalInstrumentData] only AnalyticalInstrumentData
    * ^short = "Analytical Instrument Data File"
    * ^definition = """Impurity Analytical Instrument Data File: The transport format for data exchange. [Source: SME Defined]
Example: JCAMP, ADX, ADF."""

Profile: DrugProductIngredient
Parent: Ingredient
Id: pqcmc-dp-ingredient
Title: "Drug Product Batch Formula Ingredient"
Description: "The amount details about the drug product ingredients in the batch. Use for Batch Formula."

* identifier 0..1 MS
* substance.code 1..1 MS
* substance.code ^short = "Ingredient Substance"
* insert PQCodeableReference(substance.code)
* substance.code only CodeableReference(pqcmc-routine-drug-substance or pqcmc-excipient)
* substance
  * strength 2..2 MS
    * ^slicing.discriminator.type = #value
    * ^slicing.rules = #closed
    * ^slicing.discriminator.path = "concentration.code"
    * ^slicing.ordered = false
  * strength contains 
    perBatch 1..1 MS and
    percent 1..1 MS
  * strength[perBatch]
    * ^short = "Ingredient Total per Batch"
    * ^definition = "the total amount of thi ingredient present in the batch"
    * concentration[x] 1..1 MS
    * concentration[x] only Quantity
    * concentrationQuantity.code 1..1 MS
    * concentrationQuantity.code from PqcmcNonPercentageUnits (required)
  * strength[percent]
    * ^short = "Ingredient percent of Total Batch"
    * concentration[x] 1..1 MS
    * concentration[x] only Quantity
    * concentrationQuantity.code 1..1 MS
    * concentrationQuantity.code from PqcmcPercentageUnits (required)


RuleSet: GraphicAndStructureRepresentations(graphicsCardinality, structureFileCardinality,structureStringCardinality)
* structure
  * representation MS
    * ^short = "Impurity Structure Graphic | Impurity Structure Data File"
    * ^slicing.discriminator.type = #value
    * ^slicing.rules = #closed
    * ^slicing.discriminator.path = "type"
    * ^slicing.ordered = false
    * type 1..1 MS
    * type from PqcmcRepresentationTypes (required)
  * representation contains
    graphic {graphicsCardinality} and
    structureFile {structureFileCardinality} and
    structureString {structureStringCardinality}
  * representation[graphic]
    * ^short = "A graphical, displayable depiction of the structure (e.g. an SVG, PNG)"
    * type 1..1 MS
      * ^short = "Graphic"
    * type = $NCIT#C54273
    * document 1..1
      * ^short = "Impurity Structure Graphic"
      * ^definition = """
        A pictorial representation of the structure of the impurity substance. 
        [Source: SME Defined] Note: Refer to the 'Acceptable File Formats for 
        use in eCTD' Example: This is the representation of the molecule CH3OH, 
        or the sequence SHLVEALALVAGERG.
      """
    * insert PQReference(document)
    * document only Reference(GraphicReference)
  * representation[structureFile]
    * ^short = "machine-readable representation -- attached file"
    * type 1..1 MS
      * ^short = "Structure File"
    * type = $NCIT#C103240
    * document 1..1 MS
      * ^short = "Impurity Chemical Structure Data (files, e.g. .SDF, .CIF)"
    * insert PQReference(document)
    * document only Reference(StructureReference)
  * representation[structureString]
    * ^short = "machine-readable representation -- plain text"
    * type 1..1 MS
      * ^short = "Structure Textual"
    * type = $NCIT#C45253
    * format 1..1 MS
      * ^short = "Drug Substance Impurity Method Type"
    * format from PqcmcChemicalStructureDataFileTypeTerminology (required)
    * representation 1..1 MS
      * ^short = "Impurity Chemical Structure Data (short, plain text representations, e.g. SMILES)"
      * ^definition = """
        A machine-readable representation of the structure of the chemical. [Source: SME Defined]
        Examples: SMILES, INCHI
      """

---

// File: input/fsh/eCTDComposition.fsh

Profile: CMCeCTDDocument32P10
Parent: Bundle
Id: cmc-ectd-document-32p10
Title: "CMC eCTD 32P10 Document"
Description: "Definition for a document bundle with the CMC eCTD 32P1 profiles."

* . ^short = "CMC eCTD 32P1 Bundle"
* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS //each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "The specific bundle entries that are needed for a Substance Characterisation document."
* entry contains
    Composition 1..1 and
    FinishedProduct 1..1 and
    DrugProduct 1..* and
    ContainerClosure 1..* and
    Organization 0..* and
    DrugProductComponent 0..* and
    ComponentSubstance 0..* and
    GraphicsFile 0..* and
    StructureFile 0..* 
* entry[Composition].resource only EctdComposition32P10
* entry[FinishedProduct].resource only FinishedProduct
* entry[DrugProduct].resource only DrugProductDescription or DrugProductHandle
* entry[ContainerClosure].resource only ContainerClosure
* entry[Organization].resource only CodedOrganization
* entry[DrugProductComponent].resource only DrugProductComponent
* entry[ComponentSubstance].resource only ComponentSubstance
* entry[GraphicsFile].resource only GraphicReference
* entry[StructureFile].resource only StructureReference

// If you want to avoid warnings, you can list the other types of allowed resources too.
// No need to indicate that composition is the first, as that's already enforced by a base invariant on Bundles of type 'document'

Profile: CMCeCTDDocument32S10
Parent: Bundle
Id: cmc-ectd-document-32s10
Title: "CMC eCTD 32S10 Document"
Description: "Definition for a document bundle with the CMC eCTD 32S1 profiles."
* . ^short = "CMC eCTD 32S1 Bundle"
* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS //each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resource"
  * ^slicing.rules = #closed
  * ^slicing.description = ""
  * ^slicing.ordered = false
* entry contains
  Composition 1..1 and
  Organization 0..* and
  StructureDefinition 1..* and
  GraphicsFiles 0..* and
  StructureFiles 0..*
* entry[Composition].resource only EctdComposition32S10
* entry[Organization].resource only CodedOrganization
// The intersection of all possible DrugSubstanceNomenclatureStructures and
// all possible PolymorphicForms is not an empty set -- you could contrive a 
// Resource that satisfies both simultaneously so they can't go in separate
// slices
* entry[StructureDefinition].resource only DrugSubstanceNomenclatureStructure or PolymorphicForm
* entry[GraphicsFiles].resource only GraphicReference
* entry[StructureFiles].resource only StructureReference

Profile: CMCeCTDDocument32S23
Parent: Bundle
Id: cmc-ectd-document-32s23
Title: "CMC eCTD 32S23 Document"
Description: "Definition for a document bundle with the CMC eCTD 32S23 profiles."
* . ^short = "CMC eCTD 32S23 Bundle"
* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS //each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "The specific bundle entries that are needed for a Substance Characterisation document."
* entry contains
    Composition 1..1 and
    RoutineSubstance 1..* and // there must be at least one subject
    Organization 1..* and
    Excipient 0..* and
    RoutineProduct 0..* and
    Specification 1..*
* entry[Composition].resource only EctdComposition32S23
* entry[Organization].resource only CodedOrganization
// The intersection of all possible routine substances
// and raw excipients is an empty set so they can go
// in different slices
* entry[RoutineSubstance].resource only SubstanceDefinitionHandle
* entry[Excipient].resource only ExcipientRaw
* entry[RoutineProduct].resource only DrugProductHandle
* entry[Specification].resource only QualitySpecification

Profile: CMCeCTDDocumentSP4151
Parent: Bundle
Id: cmc-ectd-document-sp4151
Title: "CMC eCTD SP4151 Document"
Description: "Definition for a document bundle with the CMC eCTD SP4151 profiles."
* . ^short = "CMC eCTD SP4151 Bundle"

* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS //each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "The specific bundle entries that are needed for a Substance Characterisation document."
* entry contains
  Composition 1..1 and
  Organization 1..* and
  Specification 1..1 and
  RoutineSubstance 0..1 and
  RoutineProduct 0..1 and
  ExcipientRaw 0..1
* entry[Composition].resource only EctdCompositionSP4151
* entry[Organization].resource only CodedOrganization
* entry[Specification].resource only QualitySpecification
* entry[RoutineSubstance].resource only SubstanceDefinitionHandle
* entry[RoutineProduct].resource only DrugProductHandle
* entry[ExcipientRaw].resource only ExcipientRaw




/*Bundles Stage 2-------------------------------------------------------------------------------------------*/

Profile: CMCeCTDDocument32S3
Parent: Bundle
Id: cmc-ectd-document-32s3
Title: "CMC eCTD 32S3 Document"
Description: "Definition for a document bundle with the CMC eCTD 32S3 profiles."
* . ^short = "CMC eCTD 32S3 Bundle"
* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS // each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "The specific bundle entries that are needed for a Substance Characterisation document."
* entry contains
    Composition 1..1 and
    Characterisation 1..1 and
    Organization 1..* and
    Impurity 0..* and
    GraphicsFile 0..* and
    StructureFile 0..*
* entry[Composition].resource only EctdComposition32S3
* entry[Characterisation].resource only DrugSubstanceCharacterisation
* entry[Organization].resource only CodedOrganization
* entry[Impurity].resource only ImpuritySubstance
* entry[GraphicsFile].resource only GraphicReference
* entry[StructureFile].resource only StructureReference


Profile: CMCeCTDDocument32P32
Parent: Bundle
Id: cmc-ectd-document-32p32
Title: "CMC eCTD 32P32 Document"
Description: "Definition for a document bundle with the CMC eCTD 32P32 profiles (Product Batch Formula)."

* . ^short = "CMC eCTD 32P32 Bundle"
* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS //each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Composition 1..1 and
    Organization 1..* and
    BatchFormulaMedicinalProduct 1..1 and
    BatchFormula 1..* and
    Ingredient 0..* and
    RoutineSubstance 0..* and
    ExcipientRaw 0..*
* entry[Composition].resource only EctdComposition32P32
* entry[Organization].resource only CodedOrganization
* entry[BatchFormulaMedicinalProduct].resource only BatchFormulaMedicinalProduct
* entry[BatchFormula].resource only BatchFormula
* entry[Ingredient].resource only DrugProductIngredient
* entry[RoutineSubstance].resource only SubstanceDefinitionHandle
* entry[ExcipientRaw].resource only ExcipientRaw

Profile: CMCeCTDDocument32P55
Parent: Bundle
Id: cmc-ectd-document-32p55
Title: "CMC eCTD 32P55 Document"
Description: "Definition for a document bundle with the CMC eCTD 32P55 profile (Product Characterisation of Impurities)."
* . ^short = "CMC eCTD 32P55 Bundle"
* identifier MS
* identifier ^definition = "Designation by the author."
* type MS
* type = #document
* type ^short = "document"
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS //each entry must have a fullUrl
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Composition 1..1 and
    Organization 1..1 and
    DrugProduct 1..1 and
    Impurity 0..* and
    GraphicsFile 0..* and
    StructureFile 0..*
* entry[Composition].resource only EctdComposition32P55
* entry[Organization].resource only CodedOrganization
* entry[DrugProduct].resource only DrugProductwithImpurities
* entry[Impurity].resource only ImpuritySubstance
* entry[GraphicsFile].resource only GraphicReference
* entry[StructureFile].resource only StructureReference

/*Compositions Stage 1--------------------------------------------------------------------------------------*/

Profile: EctdCompositionSP4151
Parent: Composition
Id: ectd-composition-sp4151
Title: "eCTD Specification Composition"
Description: "The fields needed to represent Quality Specifications for APIs, Drug Substances, Excipients and Raw Materials."

* status = #final
* identifier 0..1 MS
* type 1..1 MS 
// !!!generates errors while ich codes are not in any codesystem
// on a terminology server. once it is, uncomment this line.
// you could maybe get the same effect by slicing
//* type from PqcmcQualitySpecificationSectionTypes (required)
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
* title 1..1 MS
* section 1..1 MS
* section.title 1..1 MS
* section.entry MS
* insert PQReference(section.entry)
* section.entry only Reference(QualitySpecification)


Profile: EctdComposition32P10
Parent: Composition
Id: ectd-composition-32p10
Title: "eCTD Product Description and Composition"
Description: "The fields needed to represent the Product Description, Container Closure and Composition of the Drug Product to be included under the 3.2.P.1 heading of the eCTD. References Sponsor Organization, Drug Product Description, and Product Container Closure System."

* status = #final
* identifier 0..1 MS
* type = $SectionTypes#ich_3.2.p.1 "Description and Composition of the Drug Product"
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
* title 1..1 MS
* section 3..3 MS
* section.code 1..1 MS
// * section.code from CmcCompSectionTypesVS (required)
* section.title 1..1 MS
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.text"
* section ^slicing.rules = #closed
* section ^slicing.description = "Slice based on the ectd document sections."
// the contains line determines the order, not the section profiling
* section contains ProductDescription 1..1 MS and ProductComposition 1..1 MS and ContainerClosure 1..1 MS
* section[ProductDescription] ^definition = "Drug product description to be included under the 3.2.P.1 eCTD heading."
* section[ProductDescription].code.text = "Product Description"
* section[ProductDescription].entry 1..1 MS
* insert PQReference(section[ProductDescription].entry)
* section[ProductDescription].entry only Reference(DrugProductDescription)
* section[ProductComposition] ^definition = "Drug product components to be included under the 3.2.P.1 eCTD heading."
* section[ProductComposition].code.text = "Product Composition"
* section[ProductComposition].entry 1..1 MS
* insert PQReference(section[ProductComposition].entry)
* section[ProductComposition].entry only Reference(FinishedProduct)
* section[ContainerClosure] ^definition = "Product Container Closure Description to be included under the 3.2.P.1 eCTD heading."
* section[ContainerClosure].code.text =  "Product Container Closure Description"
* section[ContainerClosure].entry 1..* MS
* insert PQReference(section[ContainerClosure].entry)
* section[ContainerClosure].entry only Reference(ContainerClosure)

Profile: EctdComposition32S10
Parent: Composition
Id: ectd-composition-32s10
Title: "eCTD Substance General Information"
Description: "The fields needed to represent the Substance Nomenclature and Structure to be included under the 3.2.S.1 heading of the eCTD. References Sponsor Organization."

* status = #final
* identifier 0..1 MS
* type = $SectionTypes#ich_3.2.s.1 "General Information"
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
* title 1..1 MS
/*
    SECTION SLICES
*/
* section 1..1 MS
* section.entry 1..1 MS
* section ^definition = "Substance General Information the 3.2.S.1 eCTD heading."
* section.title 1..1 MS
* insert PQReference(section.entry)
* section.entry only Reference(DrugSubstanceNomenclatureStructure)

Profile: EctdComposition32S23
Parent: Composition
Id: ectd-composition-32s23
Title: "eCTD Substance Control of Materials Composition"
Description: "The fields needed to represent the Substance Control of Materials to be included under the eCTD 3.2.S.2.3 heading. References Sponsor Organization and Drug Substance Materials."

* status = #final
* identifier 0..1 MS
* type = $SectionTypes#ich_3.2.s.2.3 "Control of Materials"
* subject 1..1 MS
* insert PQReference(subject)
* subject only Reference(SubstanceDefinitionHandle)
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
* title 1..1 MS
/*
    SECTION SLICES - not requried - only one option
*/
* section 1..* MS
* section.entry MS
* section ^definition = "Substance Control of Materials to be included under the 3.2.S.2.3 eCTD heading."
* section.entry 1..* MS
* insert PQReference(section.entry)
* section.entry only Reference(QualitySpecification)

// Stage 2  Compositions -------------------------------------------------------------------------------------------------*/
Profile: EctdComposition32P32
Parent: Composition
Id: ectd-composition-32p32
Title: "eCTD Batch Formula"
Description: "The fields needed to represent the Product Batch Formula to be included under the eCTD. References Sponsor Organization and Batch Formula"

* status = #final
* identifier 0..1 MS
* type = $SectionTypes#32P32 "Product Batch Formula"
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
/*
 SECTION SLICES - not requried - only one option
*/
* section 1..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^slicing.description = "Slice on ICH code. only one slice is defined but slicing is left open for interoperability"
  * ^slicing.ordered = false
  * code 1..1 MS
* section contains BatchFormulaMedicinalProduct 1..1 MS
* section[BatchFormulaMedicinalProduct]
  * ^definition = """
    Product Batch Formula to be included under the 3.2.P.3.2 eCTD heading.
  """
  * code = $SectionTypes#ich_3.2.p.3.2 "Batch Formula"
  * title 1..1 MS
  * entry 1..1 MS
  * insert PQReference(entry)
  * entry only Reference(BatchFormulaMedicinalProduct)


Profile: EctdComposition32P55
Parent: Composition
Id: ectd-composition-32p55
Title: "eCTD Product Characterisation of Impurities Composition"
Description: "The fields needed to represent the Product Characterisation of Impurities in a to be included under the eCTD. References Sponsor Organization and Product Characterisation of Impurities"

* status = #final
* identifier 0..1 MS
* type = $SectionTypes#32P55 "Product Characterisation of Impurities"
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
/*
 SECTION SLICES - not requried - only one option
*/
* section 1..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^slicing.description = "Slice on the ICH Section code. only one slice is defined but is left open for other sections that won't be parsed"
  * ^slicing.ordered = false
  * code 1..1 MS
* section contains Characterisation 1..1 MS
* section[Characterisation]
  * ^definition = """
    Product Characterisation of Impurities to be included under the 3.2.P.5.5 eCTD heading.
  """
  * code = $SectionTypes#ich_3.2.p.5.5 "Characterisation of Impurities"
  * title 1..1 MS
  * entry 1..1 MS
  * insert PQReference(entry)
  * entry only Reference(DrugProductwithImpurities)

Profile: EctdComposition32S3
Parent: Composition
Id: ectd-composition-32s3
Title: "eCTD Substance Characterisation"
Description: "The fields needed to represent the Substance Structure and Impurities to be included under the 3.2.S.3 heading of the eCTD. References Sponsor Organization, Drug Substance Structure, and Drug Substance Impurities"

* status = #final
* identifier 0..1 MS
* type = $SectionTypes#ich_3.2.s.3 "Characterisation"
* author 1..1 MS
* insert PQReference(author)
* author only Reference(CodedOrganization)
* title 1..1 MS

/*
 SECTION SLICES
*/
* section 1..* MS
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.description = "Slice based on the different sections that are needed in an ectd document."
* section contains Structure 1..1 MS
* section[Structure] ^definition = "Substance Characterisation to be included under the 3.2.S.3 eCTD heading."
* section[Structure].code 1..1 MS
* section[Structure].code = $SectionTypes#ich_3.2.s.3.1 "Elucidation of Structure and other Characteristics"
* section[Structure].title 1..1 MS
* section[Structure].entry 1..1 MS
* insert PQReference(section[Structure].entry)
* section[Structure].entry only Reference(DrugSubstanceCharacterisation)

---

// File: input/fsh/HierarchySupplement.fsh

RuleSet: child(parent,child)
* {parent}
  * ^property[+].code = #child
  * ^property[=].valueCode = {child}

CodeSystem: NCItHierarchySupplement
Id: cmc-hierarchy-supplement
Title: "PQ-CMC-FDA NCIt Hieararchy Supplement"
Description: """Provides hierarchical relationships for value sets as a CodeSystem supplement to the NCI Thesaurus (NCIt) """
* ^experimental = false
* ^status = #draft
* ^publisher = "NCI Thesaurus (NCIt)"
* ^copyright = "PQ-CMC-FDA Temporary Codes are either in the NCI Thesaurus (NCIt) or are in the process of being included in NCIt. When all codes are in NCIt, they will migrate to the HL7 Terminology (THO). License Note Unless otherwise indicated, all text within NCI products is free of copyright and may be reused without our permission. Credit the National Cancer Institute as the source. For more licensing information see: [https://www.cancer.gov/policies/copyright-reuse](https://www.cancer.gov/policies/copyright-reuse)"
* ^supplements = Canonical(http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)
* ^content = #supplement
* ^property[+].code = #child
* ^hierarchyMeaning = #is-a
// uri MUST be in quotes or it won't work
* ^property[=].uri = "http://hl7.org/fhir/concept-properties#child"
* ^property[=].description = "Defines which codes are children"
* ^property[=].type = #code
// * #C60819
* insert child(#C60819,#C204845)
* insert child(#C60819,#C205001)
* insert child(#C60819,#C81183)
* insert child(#C60819,#C205003)
* insert child(#C60819,#C205007)
* insert child(#C60819,#C205015)
* insert child(#C60819,#C205018)
* insert child(#C60819,#C205020)
* insert child(#C60819,#C205028)
* insert child(#C60819,#C62352)
* insert child(#C60819,#C171277)
* insert child(#C60819,#C205038)
* insert child(#C60819,#C64858)
* insert child(#C60819,#C205006)
//* #C134249
// * #C134250
* insert child(#C134250,#C205004)
* insert child(#C134250,#C205019)
* insert child(#C134250,#C134115)
* insert child(#C134250,#C205050)
// * #C133961
// * #C205026
* insert child(#C205026,#C138990)
* insert child(#C205026,#C139027)
* insert child(#C205026,#C134262)
* insert child(#C205026,#C134261)
// * #C138993
// * #C134252
// * #C134253
// * #C205012
// * #C193381
* insert child(#C193381,#C205024) 
// * #C134255
// * #C134256
// * #C205027
// * #C134257
// * #C134260
// * #C134263
// * #C133974
// * #C133975
// * #C134264
// * #C63394
// * #C103201
// * #C205029
// * #C60821
// * #C64832
// * #C25483
* insert child(#C25483,#C205022)
* insert child(#C25483,#C205017)
* insert child(#C25483,#C205209)
* insert child(#C25483,#C205053)
* insert child(#C25483,#C205021)
* insert child(#C25483,#C205016)
* insert child(#C25483,#C205206)
* insert child(#C25483,#C205045)
* insert child(#C25483,#C205036)
* insert child(#C25483,#C205011)
* insert child(#C25483,#C205010)
* insert child(#C25483,#C205009)
* insert child(#C25483,#C205037)
* insert child(#C25483,#C205025)
* insert child(#C25483,#C205034)
* insert child(#C25483,#C205033)
* insert child(#C25483,#C205035)
* insert child(#C25483,#C205005)
* insert child(#C25483,#C205044)
* insert child(#C25483,#C205043)
* insert child(#C25483,#C205042)
// * #C134266
// * #C205049
// * #C133979
// * #C134267
// * #C134269
// * #C205030
// * #C134270
// * #C133983
// * #C134272
// * #C133985
// * #C205032
// * #C134276
// * #C134277
// * #C134278
// * #C134113
// * #C134114
// * #C200004
// * #C205023
// * #C205041
// * #C18951
* insert child(#C18951,#C16643)
* insert child(#C18951,#C205054)
* insert child(#C18951,#C205031)
* insert child(#C18951,#C205002)
* insert child(#C18951,#C205008)
// * #C205000
// * #C205013
// * #C74723
// * #C204971
* insert child(#C204971,#C205039)
* insert child(#C204971,#C205040)
* insert child(#C204971,#C205052)
* insert child(#C204971,#C205047)
* insert child(#C204971,#C205048)
* insert child(#C204971,#C205051)
* insert child(#C204971,#C205014)
* insert child(#C204971,#C204890)
* insert child(#C204971,#C134254)
* insert child(#C204971,#C134002)

// Different value set that still requires hierarchies
// Should this be its own supplement? 

// * #C45299 "Gas"
// * #C45298 "Liquid"
* insert child(#C45298,#C154598) // "Liquid" -> "Solution"
// * #C149895 "Semi-solid"
// * #C45300 "Solid"
* insert child(#C45300,#C154433) // "Solid" -> "Capsule"
* insert child(#C45300,#C154605) // "Solid" -> "Tablet"




---

// File: input/fsh/Invariants.fsh

// Invariants and Rulesstrength.ofType

Invariant: cmc-name-preferred
Description: "Name.preferred: at most one = true"
Expression: "select(preferred = true).count() < 2"
Severity: #error

Invariant: cmc-when-unii-required
Description: "A UNII is required in code for any of these categories: 'Chemical', 'Mixture', 'Nucleic Acids','Polymer'. A UniProt code is required for any of these categories: 'Protein'"
Expression: "(classification.coding.where(system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl' and (code in ('C48807' | 'C45305' | 'C706' | 'C48803'))).exists()
implies code.where(
  code.coding.exists(system = 'http://fdasis.nlm.nih.gov')
).exists())
 and (classification.coding.where(
  system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl' and
  code = 'C17021'
).exists() implies code.where(
  code.coding.exists(system = 'https://www.uniprot.org')
).exists())"
Severity: #error

Invariant: cmc-name-isbt
Description: "Name.type ISBT 128 required for blood products."
Expression: "classification.where(coding.where(code = '8' and system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').exists()).exists() implies name.type.coding.exists(code = '226' and system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl')"
Severity: #error
// Note: 8 is the code for for "Structurally Diverse Subtsance - Blood derived"
// and 226 is the code for "ISBT 128" in substance name type. $NCIT is currently 
// examples.com so that's the system it checks for
Invariant: cmc-ingredient-functions
Description: "If Drug Product Component constituent Function Category is Active Ingredient or Adjuvant THEN Drug Product Component constituent Function is not applicable.
If Drug Product Component Function Category constituent is Inactive Ingredient (excipient) THEN Drug Product Component Function must be from the value list."
Expression: "function.coding.where(code = 'C42637' and system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').exists() implies function.coding.code.count() = 2"
Severity: #error

Invariant: cmc-substance-structure-graphic-required
Description: "A Substance Structure Graphic is required Required for Small Molecules. Equivalent to classification  code equals 'Chemical'."
Expression: "(classification.where(coding.where(code = '1' and system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').exists()).exists()) implies structure.representation.exists()"
Severity: #error

Invariant: cmc-structure-required
Description: "A structure is required in code for any of these categories: 'Chemical', 'Mixture', 'Nucleic Acids','Polymer','Protein'."
Expression: "classification.coding.where(system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl' and code in ('C48807' | 'C45305' | 'C706' | 'C48803' |'C17021') ).exists() implies structure.exists()"
Severity: #error

Invariant: cmc-source-material
Description: "IF raw material source type equals Microbial, Animal, Plant, Insect or Human THEN the 4 source related attributes are required and the manufacturer and supplier information is highly desirable."
Expression: "sourceMaterial.type.coding.where(system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl' and code in ('C14182' | 'C14225' | 'C14227' | 'C14329' | 'C14258')).exists()
implies (sourceMaterial.genus.exists() and  sourceMaterial.species.exists() and sourceMaterial.part.exists() and sourceMaterial.countryOfOrigin.exists())"
Severity: #error


Invariant: cmc-strength-type-cases2
Description: "IF Strength Type = Activity THEN Strength Textual, Strength UOM ([arb'U]) and Strength Operator are applicable data elements.
Strength Textual and Strength UOM will be Mandatory and Operator will be Optional. Codes 75765 [arb'U]; C45420 Activity."
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
strength
.extension('http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/strength-extension')
.extension.where(
    value.coding.where(
        code = 'C45420' and 
        system = %system
    ).exists()
).exists()
implies (
    strength.presentation.ofType(Ratio).exists() and
    strength.presentation.numerator.where(
        code = '[arb\u005c\u0027U]' and
        system = 'http://unitsofmeasure.org'
    )
) or (
    strength.presentation.ofType(Quantity).exists() and
    strength.presentation.where(
        code = '[arb\u005c\u0027U]' and
        system = 'http://unitsofmeasure.org'
    )
))"
Severity: #error

Invariant: cmc-component-id-ref
Description: "If a PPiD ref is present, it must reference the PPiD of another component. It cannot reference itself"
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
  component.select(
    property.where(
      type.text = 'Product Part Identifier Reference'
    ).select(value)
  ).all(
    text in %context.component.select(
      property.where(
        type.text = 'Product Part Identifier'
      ).select(value.text)
    )
  ) and component.where(
    property.where(
      type.text = 'Product Part Identifier Reference'
    ).select(value.text) =
    property.where(
      type.text = 'Product Part Identifier'
    ).select(value.text)
  ).exists().not()
)"
Severity: #error
// Logic: get all the Ppidrefs. Each of them must exist in the set of all Ids.
// afterwards check to make sure there are no components that refer to themselves

/// old with codings
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
//   component.select(
//     property.where(
//       type.coding.exists(
//         system = %system and
//         code = 'PPiDref'
//       )
//     ).select(value)
//   ).all(
//     text in %context.component.select(
//       property.where(
//         type.coding.exists(
//           system = %system and
//           code = 'PPiD'
//         )
//       ).select(value.text)
//     )
//   ) and component.where(
//     property.where(
//       type.coding.exists(
//         system = %system and
//         code = 'PPiDref'
//       )
//     ).select(value.text) =
//     property.where(
//       type.coding.exists(
//         system = %system and
//         code = 'PPiD'
//       )
//     ).select(value.text)
//   ).exists().not()
// )"

//Invariant: cmc-identifer
//Description: "A document must have an identifier with a system and a value"
//Expression: "type = 'document' implies (identifier.exists(system.exists() and value.exists()))"
//Severity: #error

Invariant: cmc-percent-quantity
Description: "The component.constituent('Weight').amount.code from PqcmcUnitsMeasure cannot be  VolumeToVolume, WeightToVolume or WeightToWeight"
Expression: "defineVariable('system','http://unitsofmeasure.org').select(
  amount
  .where(system = %system and (('%{WeightToWeight}' | '%{WeightToVolume}' | '%{VolumeToVolume}') contains code).not())
  .count() = 1
)"
Severity: #error

Invariant: cmc-percent-quantity-ingredient
Description: "There must be a concentration whose unit is not VolumeToVolume, WeightToVolume or WeightToWeight"
// Logic:
// select the concentrationQuantity's (all concentrations)
// find the concentrations where the system is NCIT and the code is not a percent
// make sure there is exactly one
Expression: "defineVariable('system','http://unitsofmeasure.org').select(
  strength.concentration
    .ofType(Quantity)
    .where(system = %system and  (('%{WeightToWeight}' | '%{WeightToVolume}' | '%{VolumeToVolume}') contains code).not())
    .count() = 1
)"
Severity: #error

Invariant: cmc-link-required
Description: "Action linkId is required for alternate tests"
Expression: "(action.relatedAction.count() > 0) implies action.linkId.exists()" 
Severity: #error

Invariant: cmc-decimal-format
Description: "Content percent must be in the format of leading zero, decimal point, any number of digits up to 17 places."
Expression: "value.toString().matches('^(1([.]0{1,17})?|0([.][0-9]{1,17})?)$') = true"
Severity: #error

//Invariant: cmc-at-least-one
//Description: "Stages must have a least one acceptance critia"
//Expression: "(action.action.goalId.count() > 0) or (action.action.action.goalId.count() > 0 ) = true" 
//Severity: #error


Invariant: cmc-subtest-rrt 
Description: "a subtest's prefix represents relative retention time, should it exist"
Expression: "prefix.exists() implies prefix.single() = 'RRT'"
Severity: #error
// ---- Composition Invariants ----
// checks if there is a composition which has a type
// code for its respective section type.

Invariant: cmc-single-or-multistage
Description: "if a test is multi-stage, the test can't have a prefix and its stages must have a name and can't be named 'Single Stage' and must be unique. If it's single stage its prefix is 'Single Stage' and its groups can't have prefixes"
Expression: "((
    prefix.exists() implies 
        action.prefix.empty() and prefix = 'Single Stage'    
) and (
    prefix.empty() implies (
        (action.where(
            prefix.exists() and 
            prefix != 'Single Stage'
        ).count() = action.count()) and 
        action.prefix.isDistinct()
    )
)) = true"
Severity: #error
// Note: cmc-single-or-multistage gets evaluated on Plandefinition.action,
// so action.prefix is a collection of all the nodes under a single test at 
// that path. The number of actions where its prefix exists and isn't 
// 'single stage' needs to be the total number of actions; otherwise one of 
// them was 'single stage' or wasn't defined.



Invariant: cmc-arbitrary-unit-text-required
Description: "BR – Product Total Weight Textual - If the UOM is UCUM Arbitrary Unit [arb'U], units must be described in Weight Textual"
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
    property.where(
    type.coding.exists(
        system = %system and (
            code = 'TotWgtNum' or 
            code = 'TotWgtDen'
        )
    ) and
    value.exists(system = %system and code = 'C75765')
).exists() implies property.where(
    type = 'Total Weight Textual'
).exists())"
/// old with coding
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
//     property.where(
//     type.coding.exists(
//         system = %system and (
//             code = 'TotWgtNum' or 
//             code = 'TotWgtDen'
//         )
//     ) and
//     value.exists(system = %system and code = 'C75765')
// ).exists() implies property.where(
//     type.coding.exists(
//         code = 'TotWgtTxt' and
//         system = %system
//     )
// ).exists())"
Severity: #error
// Note: checks if a property for the numerator or denominator exists. if it
// does and it has an arbitrary unit, then there needs to be a slice for 
// weight textual

Invariant: cmc-format-required
Severity: #error
Description: "Format is required when a representation is provided"
Expression: "representation.exists() implies format.exists()"

Invariant: cmc-capsule-count-required
Severity: #error
Description: "Capsule constituent count is required when the dosage form is 'Capsule'"
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
    manufacturedDoseForm.coding.exists(system = %system and code = 'C154433')
implies property.where(type.text = 'Capsule Constituent Count').exists())"
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
//     manufacturedDoseForm.coding.exists(system = %system and code = 'C154433')
// implies property.where(type.coding.exists(system = %system and code = 'CapConCnt')).exists())"

Invariant: cmc-only-ISO-3166-1-alpha-3
Severity: #error
Description: "Country must be a 3 letter country code"
Expression: "$this.length() = 3"

Invariant: cmc-coating-indication-required
Severity: #error
Description: "Coating indication is required when the dosage form is a tablet, lozenge or capsule"
/// new, just looking for 'coating indicator' text
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
    manufacturedDoseForm.coding.exists(system = %system and (
    code = 'C154605' or
    code = 'C154433' or
    code = 'C154554'
))
implies property.where(type.text = 'Coating Indicator').exists())"
/// old, pre-ncit-dummy removal. looking for a type codeable concept with a 'CoatInd' code
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
//     manufacturedDoseForm.coding.exists(system = %system and (
//     code = 'C154605' or
//     code = 'C154433' or
//     code = 'C154554'
// ))
// implies property.where(type.coding.exists(system = %system and code = 'CoatInd')).exists())"
// Note: Currently checks if manufacturedDoseForm is any of the solid oral
// dose forms (lozenge, capsule, tablet). Can capsules and lozenges have
// coatings?

Invariant: cmc-tablet-layer-count-required
Severity: #error
Description: "Tablet layer count is required when the dosage form is a tablet"
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
    manufacturedDoseForm.coding.exists(
    system = %system and
    code = 'C154605'
) implies property.where(
    type.text = 'Tablet Layer Count'
).exists())"
/// old with coding check
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(
//     manufacturedDoseForm.coding.exists(
//     system = %system and
//     code = 'C154605'
// ) implies property.where(
//     type.coding.exists(
//         system = %system and
//         code = 'TabLayCnt'
//     )
// ).exists())"

Invariant: cmc-tablet-bead-count-required
Severity: #error
Description: "Tablet bead count is required when the dosage form is a tablet"
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(manufacturedDoseForm.coding.exists(
    system = %system and
    code = 'C154605'
) implies property.where(
    type.text = 'Tablet Bead Type Count'
).exists())"
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(manufacturedDoseForm.coding.exists(
//     system = %system and
//     code = 'C154605'
// ) implies property.where(
//     type.coding.exists(
//         system = %system and
//         code = 'BeaTypCnt'
//     )
// ).exists())"
Invariant: cmc-capsule-classification-required
Severity: #error
Description: "when the the dosage form is 'capsule' and a 'capsule shell' part
exists, a capsule shell part classification is mandatory"
Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(manufacturedDoseForm.coding.exists(
    system = %system and
    code = 'C154433'
) and component.type.coding.exists(
    system = %system and
    code = 'C203897'
) implies property.where(
    type.text = 'Capsule Classification Category'
).exists())"

/// old with coding
// Expression: "defineVariable('system','http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl').select(manufacturedDoseForm.coding.exists(
//     system = %system and
//     code = 'C154433'
// ) and component.type.coding.exists(
//     system = %system and
//     code = 'C203897'
// ) implies property.where(
//     type.coding.exists(
//         system = %system and
//         code = 'CapClass'
//     )
// ).exists())"


Invariant: cmc-substance-characterisation-content-required
Severity: #error
Description: "Drug Substance Characterisation must contain at least one characterisation or at least one relationship"
Expression: "characterization.exists() or relationship.exists()"

Invariant: cmc-strength-name-must-reference-scientific
Description: "strength parts must modify a scientific part, scientific parts must be modified by a strength part. The same scientific part cannot appear more than once"
Expression: "defineVariable('system','http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2').select(
defineVariable('strengthReferences',part.type.where(coding.exists(code = 'STR' and system = %system)).text).select(
defineVariable('scientificNames',part.where(type.coding.exists(code = 'SCI' and system = %system)).part).select(
    %strengthReferences = %scientificNames and 
    %scientificNames.distinct() = %scientificNames
)))"
Severity: #error

Invariant: cmc-amount-ratio-or-quantity
Severity: #error
Description: "The amount ratio extension and an amount with a non-percentage unit are mutually exclusive"
Expression: "defineVariable('system','http://unitsofmeasure.org').select(
  modifierExtension.where(url = 'http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/pq-amount-ratio')
  .union(
    amount.where(
        system = %system and 
        code.memberOf('http://hl7.org/fhir/us/pq-cmc-fda/ValueSet/pqcmc-non-percentage-units')
    )
  ).count() = 1
)"
// Logically: Either the amount ratio extension or an amount that isn't a percent must be present, and they
// can never be present at the same time, so their combined count is always 1

Invariant: cmc-impurity-unii-required
Severity: #error
Description: "If Product Impurity Chemical Structure Data File is not present, then a unii is required"
Expression: "structure.representation.type.coding.where(
  system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl' and
  code = 'C103240'
).exists().not() implies (
  code.where(
    code.coding.exists(system = 'http://fdasis.nlm.nih.gov')
  ).exists()
)"

Invariant: cmc-structure-representation-required
Description: "Either a file or string structure representation is required"
Expression: "representation.type.coding.where(
  system = 'http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl'
  and (code in ('C45253' | 'C103240'))
).exists()"
Severity: #error


---

// File: input/fsh/qualitySpecification.fsh

Extension: SpecificationStatusExtension
Id: pq-specification-status-extension
Title: "Specification Status"
Description: "A classification of the regulatory status of the specification."
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition"
* value[x] 1..1 MS
  * ^short = "Specification Stutus"
  * ^definition = """The current FDA regulatory status of the specification. [Source: SME Defined]
Examples: Approved, Not Approved, Reported in a CBE or AR. 
"""
* value[x] only CodeableConcept
* value[x] from PqcmcSpecificationStatusTerminology (required)

Extension: HierarchicalLevelExtension
Id: pq-hierarchical-level-extension
Title: "Hierarchical Level"
Description: "Numeric level in the hierarchical value-set. As an example, this extension is used to distinguished between Test Category | Test Subcategory in Quality Specifications. Test Category is level 1 and Test Subcategory is level two. A constraint enforces values greater than zero. "
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition.action.reason"

* value[x] 1..1 MS
  * ^short = "TestCategory  Level"
  * ^definition = """Level within the hierarchical value-set. E.g: first level equals 1, second level equals 2."""
* value[x] only positiveInt

Extension: TargetRange
Id: pq-target-range
Title: "Target Range"
Description: "The FHIR Range datatype uses Simple Quantities to represent the high and low bounds, which do not allow a comparator to be set. This extension allows the high and low bounds to have a comparator"
Context: PlanDefinition.goal.target
* . ?!
* . ^isModifierReason = "When present, the target cannot have a detail; instead this extension acts as its detail"
* extension 
  * ^short = "ValueNumeric (range)"
  * ^definition = """The acceptable quantitative or numeric value for the result of the test. [Source: SME Defined]"""
* extension contains 
  low 1..1 MS and
  high 1..1 MS
* extension[low]
  * value[x] 1..1 MS
  * value[x] only Quantity
    * value 1..1 MS
    * unit 1..1 MS
* extension[high]
  * value[x] 1..1 MS
  * value[x] only Quantity
    * value 1..1 MS
    * unit 1..1 MS

Invariant: cmc-target-range
Description: "When the Range extension is present, detail cannot be present."
Expression: "modifierExtension.where(url = 'http://hl7.org/fhir/us/pq-cmc-fda/StructureDefinition/pq-target-range').exists() implies detail.exists().not()"
Severity: #error

Profile: QualitySpecification
Parent: PlanDefinition
Id: pqcmc-quality-specification
Title: "Quality Specification"
Description: "A quality specification is for a drug product or drug substance (excipient, API or raw material)."

* extension contains 
    pq-specification-status-extension named ApprovalStatus 1..1 MS and
    pq-additional-info-extension named spec-additional-info 0..1  
* extension[spec-additional-info] ^short = "Specification Additional Information"
* extension[spec-additional-info] ^definition = """Placeholder for providing any comments that are relevant to the specification. [Source: SME Defined]
Examples: replaces method ABC, using the XYZ facility.
"""
* identifier 0..* MS
* version 1..1 MS
* version ^short = "Specification Version"
* version ^definition = """The alphanumeric text assigned by the sponsor to a particular edition of a specification. [Source: SME Defined] Examples: 2.1, 13.2, ST1, 00001, 00002, companyname-001.
Note: This value should be unique across all specifications for a given material, not just those with the same name"""
* title 1..1 MS
* title ^short = "Specification Title"
* title ^definition = """The textual identification for the specification. [Source: SME Defined]
Example: &lt;drug name> 75 mg chewable tablets
Note: This may include the name of the drug substance, product or the raw material/excipients"""
* subtitle 0..1 MS
* subtitle ^short = "Specification Subtitle"
* subtitle ^definition = "An additional textual identification for the specification [Source: SME Defined]."
* type 1..1 MS
  * coding 2..2 MS
  * coding ^slicing.discriminator.type = #value
  * coding ^slicing.discriminator.path = "$this"
  * coding ^slicing.rules = #closed
  * coding ^slicing.description = "Slice on the coding itself"
  * coding ^slicing.ordered = false
  * coding contains 
    DefinitionType 1..1 MS and
    SpecType 1..1 MS
  * coding[DefinitionType] = http://terminology.hl7.org/CodeSystem/plan-definition-type#workflow-definition "Workflow Definition"
  * coding[SpecType] from PqcmcSpecificationTypeTerminology (required)
  * coding[SpecType]  ^short = "Specification Type"
  * coding[SpecType] ^definition = "A classification of specification related to the kind of the entity it is referencing."
  * ^short = "Specification Type"
  * ^definition = """A classification of specification related to the kind of entity it is referencing. [Source: SME Defined]
Examples: Drug product, Drug substance. 
"""
* status MS
* subject[x] 1..1 MS
* insert PQReference(subject[x])
* subject[x] only Reference(DrugProductHandle or SubstanceDefinitionHandle or ExcipientRaw)
* date 1..1 MS
* date ^short = "Specification Version Date"
* date ^definition = """The date when the sponsor assigned a date to a specific version. [Source: SME Defined]
Note: This is the date a particular version of the specification was internally accepted by the submitter.
"""
* approvalDate  MS
* approvalDate ^short = "Specification Status Date"
* approvalDate ^definition = """The date on which the FDA approval status for a specification became effective. [Source: SME Defined]
Note: If the application is not yet approved, then this is the date of the current submission OR the date of the complete response (CR).
Note: This is not the application approval status date."""
* goal MS
* goal ^short = "Acceptance Criteria"
* goal.extension contains 
    pq-additional-info-extension named ac-additional-info 0..1  
* goal.extension[ac-additional-info] ^short = "Acceptance Criteria Additional Information"
* goal.extension[ac-additional-info] ^definition = """A coded value specifying when a particular analytical procedure or measurement is being performed on a substance or a product. [Source: SME Defined]  Examples: Release, Stability.
Note: The concept of  'In-Process' is  subsumed by the Release code.
Example: value changed from 4% to 5% on 01/01/2010) """
* goal.description 1..1 MS
* goal.description ^short = "Original Text"
* goal.description ^definition = """The text of the acceptance criteria as provided in the specification. [Source: SME Defined]
Examples: White to off-white cake; 22.5 - 27.5 mg/ml Note: This is the text as it appears in the Specification."""
* goal.addresses 1..* MS
* goal.addresses from PqcmcTestUsageTerminology (required)
  * ^short = "Acceptance Criteria Usage"
  * ^definition = """
    A coded value specifying when a particular analytical procedure or measurement is being performed on a substance or a product. [Source: SME Defined]  Examples: Release, Stability.
    Note: The concept of  'In-Process' is  subsumed by the Release code.
  """
* goal.target 1..* MS
* goal.target obeys cmc-target-range
* goal.target ^short = "Acceptance Criteron"
  * modifierExtension contains pq-target-range named targetRange 0..1 MS
* goal.target.measure 0..1 MS
* goal.target.measure only CodeableConceptTextOnly
  * ^short = "Detailed parameter being measured if more granular than Sub-Test"
* goal.target.detail[x] MS
* goal.target.detail[x] only Quantity or string or integer
* goal.target.detailQuantity  0..1 MS
* goal.target.detailQuantity ^short = "ValueNumeric"
* goal.target.detailQuantity ^definition = """The acceptable quantitative or numeric value for the result of the test. [Source: SME Defined]"""
* goal.target.detailQuantity from  PqcmcUnitsMeasure (required)  
* goal.target.detailQuantity.value 1..1 MS
* goal.target.detailQuantity.comparator 0..1 MS
* goal.target.detailQuantity.unit 1..1 MS
* goal.target.detailQuantity.code 1..1 MS

* goal.target.detailString 0..1 MS
  * ^short = "Value"
  * ^definition = """A textual description and/or a number that identifies a level within a sequential test. [Source: SME Defined] Examples – Single Stage, Stage 1, Stage 2 (sometimes referred to as L1, L2 L3 or A1, A2 as in USP &lt;711>)
Note: A Stage may or may not provide a conditional sequence with associated acceptance criteria. [Source: SME Defined] (e.g., dissolution test, pyrogen test - USP &lt;151>; 21 CFR 610.13 (b) Test for pyrogenic substances)
"""
* goal.target.detailInteger  0..1 MS
* goal.target.detailInteger ^short = "Number of Replicates"
* goal.target.detailInteger ^definition = """An identification number for a member of the set of results for a test, usually the sequence order in which the test was executed. Individual tests are executed on multiple samples to give greater validity to the findings. [Source SME Defined] 
Examples: Prepare six aliquots from the sample. Test 8 samples. If any fall above 110%, test an additional 7 samples. Record all replicate values as stated in the method.
"""	
* goal.target.due 0..0
* action obeys cmc-link-required and cmc-single-or-multistage
* action 1..* MS
* action ^short = "Method"
* action.linkId MS
* action.linkId ^short = "only required for alternate tests"
* action.prefix 0..1 MS
* action.prefix ^short = "Stage Name"
* action.prefix ^definition = """A textual description and/or a number that identifies a level within a sequential test. [Source: SME Defined] Examples – Single Stage, Stage 1, Stage 2 (sometimes referred to as L1, L2 L3 or A1, A2 as in USP  &lt;711&gt;)
Note: A Stage may or may not provide a conditional sequence with associated acceptance criteria. [Source: SME Defined] (e.g., dissolution test, pyrogen test - &lt;151&gt;; 21 CFR 610.13 (b) Test for pyrogenic substances)

Implememtation Note:  Value at this level is 'Single Stage'
"""
* action.title 1..1 MS
* action.title ^short = "Test Name"
* action.title ^definition = """The textual description of a procedure or analytical method. [Source: SME Defined]
Examples: Assay by HPLC, moisture by Karl Fischer, analysis for impurities.
Note: as defined by the sponsor
"""
* action.description 0..1 MS
* action.description ^short = "Test Additional Information"
* action.description ^definition = """Test Additional Information: Placeholder for providing any comments that are relevant to the Test. [Source: SME Defined].
If there is more than one comment, include in this element.  Markdown allows formating for clarity.
"""
* action.code 1..1 MS
* action.code ^short = "Test Method Origin"
* action.code ^definition = "A coded value specifying the source of the method. [Source: SME Defined] Example: Compendial"
// code is a codeableConcept but both the coding and text portions are being used
// so the binding is down at the coding level
* action.code.coding 1..1 MS
* action.code.coding from PqcmcTestMethodOriginTerminology (required)
* action.code.text 1..1 MS
* action.code.text ^short = "Analytical Procedure"
* action.code.text ^definition = """The name of the technique used to determine the nature of a characteristic. [Source: SME Defined].
"""
* action.reason 1..2 MS
* action.reason ^short = "Test Category | Test Subcategory"
* action.reason ^definition = "A high level grouping of quality attributes for products, substances, raw materials, excipients, intermediates and reagents.  [Source: SME Defined]  Examples: Assay, Biological Properties."
// This is an extension from before the hierarchical relationship was included
// in the codesystem. This should probably be removed -- there shouldn't be an
// extension on a datatype (CodeableConcept) and the codesystem would reveal
// the hiearchy if only the child were provided. If both are the parent and 
// child code are truly needed a better way to do this would be with two value
// sets (one with parent codes (required), one with child codes(optional))
* action.reason.extension contains pq-hierarchical-level-extension named categoryLevel 1..1 MS
* action.reason from PqcmcTestCategoryTerminology (required)
* action.documentation 0..1 MS
* action.documentation.type = http://hl7.org/fhir/related-artifact-type#documentation
* action.documentation.label 1..1 MS
* action.documentation.label ^short = "Reference to Procedure"
* action.documentation.label ^definition = """A sponsor/applicant provided alphanumeric code that identifies the procedure. [Source: SME Defined]. Example: HP1234-2008
Note: This could also be a transferred lab method.
"""
* action.relatedAction 0..* MS
* action.relatedAction ^short = "Alternate Test"
* action.relatedAction ^definition = "Alternate Tests are one or more test that are equivalent often using differnt method or equipment. The tests are used interchangeably and only one is used to satisfy the drug product specificaion."
* action.relatedAction.targetId MS
* action.relatedAction.relationship MS
* action.relatedAction.relationship ^short = "Code is concurrent"
* action.relatedAction.relationship = $ActRelationType#concurrent "Concurrent"
* action.goalId 0..* MS
* action.goalId ^short = "Reference to Acceptance Criteria"

//* action.action obeys cmc-at-least-one
* action.action 0..* MS
* action.action ^short = "Groups or Stages"
* action.action.prefix 0..1 MS
* action.action.prefix ^short = "Stage Name"
* action.action.prefix ^definition = """A textual description and/or a number that identifies a level within a sequential test. [Source: SME Defined] Examples – Single Stage, Stage 1, Stage 2 (sometimes referred to as L1, L2 L3 or A1, A2 as in USP  &lt;711&gt;)
Note: A Stage may or may not provide a conditional sequence with associated acceptance criteria. [Source: SME Defined] (e.g., dissolution test, pyrogen test - &lt;151&gt;; 21 CFR 610.13 (b) Test for pyrogenic substances)

Implememtation Note: not requried if action.prefix is 'Single Stage'
"""
* action.action.title 0..1 MS 
* action.action.title ^short = "Test Name (only reqired if different than above)"
* action.action.title ^definition = """Test Name: The textual description of a procedure or analytical method. [Source: SME Defined]
Examples: Assay by HPLC, moisture by Karl Fischer, analysis for impurities.
Note: as defined by the sponsor
Note: The test name of the action.action can be different than the action.  Example,  the action test is Microbial Limits and the action.action test is Staphylococcus aureus.
"""
* action.action.description 0..1 MS
* action.action.description ^short = "Test Additional Information | Stage Additional Information"
* action.action.description ^definition = """Placeholder for providing any comments that are relevant to the Test. [Source: SME Defined].

Implementation Note: If there is more than one comment, include in this element.  Markdown allows formating for clarity.
"""
* action.action.documentation 0..* MS
* action.action.documentation.type = http://hl7.org/fhir/related-artifact-type#documentation
* action.action.documentation.document  1..1 MS
* action.action.documentation.document ^short = "Test or Stage Additional Information Visual Attachments"
* action.action.documentation.document ^definition = """Any visual data described andor referenced in additional informatation"""
* action.action.documentation.document.contentType 1..1 MS
* action.action.documentation.document.data 1..1 MS
* action.action.documentation.document.title 1..1 MS 
* action.action.documentation.document.title ^short = "Document file name including the file extension"
* action.action.documentation.document.title ^definition = """A format or abbreviation name that identifies a file structure. [Source: SME Defined]
Used for the following: Analytical Instrument Data File Type, Impurity Analysis Graphic, Impurity Analytical Instrument Data File, Impurity Chemical Structure Data File, and Substance Structure Graphic.
"""
* action.action.goalId 0..* MS
* action.action.goalId ^short = "Reference to Acceptance Criteria"

* action.action.action 0..* MS
* action.action.action obeys cmc-subtest-rrt
* action.action.action ^short = "Sub-Test"
* action.action.action.prefix 0..1 MS
* action.action.action.prefix ^short = "RRT"
* action.action.action.prefix ^definition = """RRT: The ratio of the retention time of a component relative to that of another used as a reference obtained under identical conditions as an alias for the name of the unidentified impurities. [Source: Adapted from USP] 
Example: 1:23 (a ratio)
Note:  This is the title or name of the impurity (sometimes expressed as a ratio) and not the value.

Implementation Note:  This value can only be 'RRT'. It is used to desinate that RRT value(s) expressed in action.action.action.title are relative retention times."""
* action.action.action.title 1..1 MS
* action.action.action.title ^short = "Test Name | RRT (complex testing)"
* action.action.action.title ^definition = """Test Name: The textual description of a procedure or analytical method. [Source: SME Defined]
Examples: Assay by HPLC, moisture by Karl Fischer, analysis for impurities.
Note: as defined by the sponsor
Note: The test name of the action.action can be different than the action.  Example,  the action test is Microbial Limits and the action.action test is Staphylococcus aureus.

RRT: The ratio of the retention time of a component relative to that of another used as a reference obtained under identical conditions as an alias for the name of the unidentified impurities. [Source: Adapted from USP] 
Example: 1:23 (a ratio)
Note:  This is the title or name of the impurity (sometimes expressed as a ratio) and not the value. 

Implementation Note: For RRT, if there is a range associated with the unidentified peak then the range can be entered instead of indivual values.  E.g.:  0.4 – 0.8.
"""
* action.action.action.description 0..1 MS
* action.action.action.description ^short = "Test Additional Information | Stage Additional Information"
* action.action.action.description ^definition = """Test Additional Information: Placeholder for providing any comments that are relevant to the Test. [Source: SME Defined].
Stage Additional Information: Placeholder for providing any comments that are relevant to the Test. [Source: SME Defined]
If there is more than one comment, include in this element.  Markdown allows formating for clarity.  If both types are present, indicate type.
"""
* action.action.action.goalId 1..* MS
* action.action.action.goalId ^short = "Reference to Acceptance Criteria"

---

// File: input/fsh/Terminologies.fsh

ValueSet: PqcmcImpurityClassificationTerminology	
Id: pqcmc-impurity-classification-terminology	
Title: "Impurity Classification Terminology"	
Description: "Terminology used to qualify the information pertaining to impurity classifications in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."	
* ^experimental = false
* ^status = #active
* $NCIT#C176816 "Degradation Product"	
* $NCIT#C185190 "Elemental Impurities"	
* $NCIT#C176815 "Residual Solvent"	
* $NCIT#C134001 "Inorganic"	
* $NCIT#C176812 "Process Related/Process"	
* $NCIT#C185192 "Leachables"	
* $NCIT#C176813 "Product Related"	
* $NCIT#C92081 "Microbiological"

ValueSet: PqcmcBatchUtilizationTerminology	
Id: pqcmc-batch-utilization-terminology	
Title: "Batch utilization Terminology"	
Description: "Terminology used to qualify the information pertaining to batch utilization in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."	
	
* ^experimental = false
* ^status = #active
* $NCIT#C133994 "Bioequivalence"	
* $NCIT#C133992 "Clinical"	
* $NCIT#C133990 "Commercial"	
* $NCIT#C133991 "Development"	
* $NCIT#C133993 "Validation"	
* $NCIT#C185328 "Stability Study"

//	CodeSystem: CmcRelationshipTypes
//	Id: cmc-relationship-types
//	Title: "Relationship Types Codes"
//	Description: "Local value set of all codes in the Relationship Types code system.Codes temporarily defined as part of the PQ-CMC-FDA implementation guide.  These will eventually migrate into an officially maintained terminology (likely either NCIt or HL7's UTG code systems)"
//	* ^caseSensitive = true
//	* ^experimental = false
//	* ^status = #active
//	* #parent "Parent"
//	* #child "Child"
//	* #primary "Primary"
//	
//	ValueSet: CmcRelationshipTypesVS
//	Id: cmc-relationship-types-vs
//	Title: "Relationship Types Terminology"
//	Description: "Local value set of all codes in Relationship Types codes"
//	
//	* ^experimental = false
//	* ^status = #active
//	* include codes from system CmcRelationshipTypes

ValueSet: CmcProductNameTypesVS
Id: cmc-product-name-types-vs
Title: "Product Name Types Terminology"
Description: "The type of the product name. Often the proprietary name is unknow at the time of submission."

* ^experimental = false
* ^status = #active

* $NCIT#C71898 "Proprietary Name"
* $NCIT#C96971 "Nonproprietary Name"


ValueSet: PqcmcTestCategoryTerminology
Id: pqcmc-test-category-terminology
Title: "Test Category Terminology"
Description: "Terminology used to qualify the information pertaining to test categories in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/valueset-supplement].valueCanonical = Canonical(NCItHierarchySupplement)
* ^status = #active
* $NCIT#C60819 "Assay"
* $NCIT#C204845 "Active Ingredient Content"
* $NCIT#C205001 "Adventitious Agents (Safety)"
* $NCIT#C81183 "Amino Acid Content"
* $NCIT#C205003 "Bioburden"
* $NCIT#C205007 "Counterion Content"
* $NCIT#C205015 "Excipient"
* $NCIT#C205018 "Host Cell DNA"
* $NCIT#C205020 "In Vitro or In Vivo Test for Viral Contaminants"
* $NCIT#C205028 "Percent Conjugate"
* $NCIT#C62352 "Purity"
* $NCIT#C171277 "Nucleic Acid Content"
* $NCIT#C205038 "Solvate Content"
* $NCIT#C64858 "Total Protein"
* $NCIT#C205006 "Cell and Gene Therapy Product Characterization Assay"
* $NCIT#C134249 "Container Closure Integrity"
* $NCIT#C134250 "Uniformity"
* $NCIT#C205004 "Blend Uniformity"
* $NCIT#C205019 "IPC Content Uniformity"
* $NCIT#C134115 "Uniformity of Dosage Unit"
* $NCIT#C205050 "Uniformity in Containers"
* $NCIT#C133961 "Deliverable Volume/Fill Volume"
* $NCIT#C205026 "Organoleptic"
* $NCIT#C138990 "Description/Appearance"
* $NCIT#C139027 "Odor"
* $NCIT#C134262 "Color of Solution"
* $NCIT#C134261 "Clarity of Solution"
* $NCIT#C138993 "Identification"
* $NCIT#C134252 "Disintegration"
* $NCIT#C134253 "Dissolution"
* $NCIT#C205012 "Droplet Size"
* $NCIT#C193381 "Foreign and Particulate Matter"
* $NCIT#C205024  "Metal Detection"
* $NCIT#C134255 "Loss on Drying"
* $NCIT#C134256 "Microbial Limits"
* $NCIT#C205027 "Osmolality/Osmolarity"
* $NCIT#C134257 "Particle Size Distribution"
* $NCIT#C134260 "Bulk Density"
* $NCIT#C134263 "Conductivity"
* $NCIT#C133974 "Crystallinity"
* $NCIT#C133975 "Friability"
* $NCIT#C134264 "Hardness"
* $NCIT#C63394 "Melting Point"
* $NCIT#C103201 "Optical Rotation"
* $NCIT#C205029 "pH"
* $NCIT#C60821 "Solubility"
* $NCIT#C64832 "Specific Gravity"
* $NCIT#C25483 "Material Properties/Measurements"
* $NCIT#C205022 "Individual Weight"
* $NCIT#C205017 "Group Weight"
* $NCIT#C205209 "Average Weight"
* $NCIT#C205053 "Weight Variation"
* $NCIT#C205021 "Individual Fill Weight"
* $NCIT#C205016 "Group Fill Weight"
* $NCIT#C205206 "Average Fill Weight"
* $NCIT#C205045 "Target Group Weight Gain %"
* $NCIT#C205036 "Shell Weight"
* $NCIT#C205011 "Orifice Location"
* $NCIT#C205010 "Orifice Diameter"
* $NCIT#C205009 "Orifice Depth"
* $NCIT#C205037 "Drilled Side (Single or Double)"
* $NCIT#C205025 "Number of Orifices"
* $NCIT#C205034 "Ribbon Thickness"
* $NCIT#C205033 "Ribbon Density"
* $NCIT#C205035 "Seam Thickness"
* $NCIT#C205005 "Lock Length"
* $NCIT#C205044 "Tablet/Capsule Length"
* $NCIT#C205043 "Tablet/Capsule Diameter"
* $NCIT#C205042 "Tablet Thickness"
* $NCIT#C134266 "Tap Density"
* $NCIT#C205049 "Transdermal Properties"
* $NCIT#C133979 "Viscosity/Rheological Properties"
* $NCIT#C134267 "Plume Geometry"
* $NCIT#C134269 "Polymorphism"
* $NCIT#C205030 "Porosity"
* $NCIT#C134270 "Potency"
* $NCIT#C133983 "Pyrogenicity/Endotoxin"
* $NCIT#C134272 "Reconstitution Time"
* $NCIT#C133985 "Redispersibility"
* $NCIT#C205032 "Refractive Index"
* $NCIT#C134276 "Residue on Ignition"
* $NCIT#C134277 "Spray Pattern"
* $NCIT#C134278 "Sterility"
* $NCIT#C134113 "Syringe Functionality"
* $NCIT#C134114 "Total Organic Carbon"
* $NCIT#C200004 "Cytotoxicity"
* $NCIT#C205023 "Mechanical Integrity"
* $NCIT#C205041 "Surface Area"
* $NCIT#C18951 "Post-translational Modifications"
* $NCIT#C16643 "Glycosylation"
* $NCIT#C205054 "Thrombin Peptide Map"
* $NCIT#C205031 "Sialylation"
* $NCIT#C205002 "Amidation"
* $NCIT#C205008 "Deamidation"
* $NCIT#C205000 "Functional Assays"
* $NCIT#C205013 "Elemental Analysis"
* $NCIT#C74723 "Turbidity"
* $NCIT#C204971 "Impurity"
* $NCIT#C205039 "Specified Identified Impurity"
* $NCIT#C205040 "Specified Unidentified Impurity"
* $NCIT#C205052 "Unspecified Impurity"
* $NCIT#C205047 "Total Impurities"
* $NCIT#C205048 "Total Unknown Impurities"
* $NCIT#C205051 "Identified Impurity under IT, Monitored as Unspecified"
* $NCIT#C205014 "Elemental Impurity"
* $NCIT#C204890 "Impurity Chemical"
* $NCIT#C134254 "Impurities/Degradation Products/Related Substances"
* $NCIT#C134002 "Residual Solvent"

ValueSet: PqcmcNamePartTerminology
Id: pqcmc-name-part-terminology
Title: "PQCMC Name Part Terminology"
Description: "Terminology used to qualify the information pertaining to Name Part data in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NamePartType#CON "container name"
* $NamePartType#DEV "device name"
* $NamePartType#FLAV "FlavorName"
* $NamePartType#FORMUL "FormulationPartName"
* $NamePartType#FRM "form name"
* $NamePartType#INV "invented name"
* $NamePartType#POPUL "TargetPopulationName"
* $NamePartType#SCI "scientific name"
* $NamePartType#STR "strength name"
* $NamePartType#TIME "TimeOrPeriodName"
* $NamePartType#TMK "trademark name"
* $NamePartType#USE "intended use name"

ValueSet: PqcmcProductPartType
Id: pqcmc-product-part-type
Title: "Product Part Type Terminology"
Description: "A category of terminology used to qualify the information pertaining to the product part type in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C203896 "Blend"
* $NCIT#C42890 "Bead"
* $NCIT#C203897 "Capsule Shell"
* $NCIT#C25450 "Coating"
* $NCIT#C202489 "Dispersion"
* $NCIT#C42938 "Granules"
* $NCIT#C66831 "Layer"
* $NCIT#C203898 "Minitablets"
* $NCIT#C42986 "Solution"
* $NCIT#C42998 "Tablet"

ValueSet: PqcmcProductPartIngredientPhysicalLocation
Id: pqcmc-product-part-ingredient-physical-location
Title: "Ingredient Location Terminology"
Description: "A category of terminology used to qualify the information pertaining to the location of an ingredient within a product in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C203881 "Active core/granulate"
* $NCIT#C203882 "Extragranular"
* $NCIT#C203883 "Intragranular"

ValueSet: PqcmcReleaseProfile
Id: pqcmc-release-profile
Title: "Release Profile Terminology"
Description: "A category of terminology used to qualify the information pertaining to release profile in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C42730 "Delayed-Release Profile"
* $NCIT#C42713 "Extended-Release Profile"
* $NCIT#C42669 "Immediate Release Profile"
* $NCIT#C48660 "Not Applicable"

ValueSet: PqcmcReleaseMechanism
Id: pqcmc-release-mechanism
Title: "Release Mechanism Terminology"
Description: "A category of terminology used to qualify the information pertaining to release mechanism in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C203359 "Matrix"
* $NCIT#C203360 "Osmotic Pump"
* $NCIT#C203361 "Reservoir"

ValueSet: PqcmcCoatingPurpose
Id: pqcmc-coating-purpose
Title: "Coating Purpose Terminology"
Description: "A category of terminology used to qualify the information pertaining to the coating purpose in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C203884 "Appearance/Identification"
* $NCIT#C203885 "Consumption Enhancement"
* $NCIT#C203887 "Delayed Release"
* $NCIT#C203888 "Drug Layering"
* $NCIT#C203889 "Extended Release"
* $NCIT#C203890 "Irritant Suppression"
* $NCIT#C203886 "Content Isolation"
* $NCIT#C203891 "Odor Masking"
* $NCIT#C203892 "Protective"
* $NCIT#C203893 "Seal"
* $NCIT#C203894 "Site of Action"
* $NCIT#C203895 "Taste Masking"

ValueSet: PqcmcCapsuleClassificationCategory
Id: capsule-classification-category
Title: "Capsule Shell Classification  Terminology"
Description: "A category of terminology used to qualify the information pertaining to the classification of a capsule in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C203348 "Hard Gelatin Capsule Shell"
* $NCIT#C203349 "Hard HPMC Capsule Shell"
* $NCIT#C203350 "Hard Pullulan Capsule Shell"
* $NCIT#C203351 "Hard PVA Capsule Shell"
* $NCIT#C203352 "Hard Starch Capsule Shell"
* $NCIT#C203353 "Soft Gelatin Capsule Shell"

ValueSet: PqcmcSubstanceNameType
Id: pqcmc-substance-name-type
Title: "Substance Name Type"
Description: "A category of terminology used to quality the information pertaining to the type of substance name in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C71898 "Brand"
* $NCIT#C97054 "Generic Name"
* $NCIT#C203355 "GSRS Preferred Term"
* $NCIT#C203357 "Systematic Name"
* $NCIT#C203358 "USP-NF Established Name"
* $NCIT#C54682 "CAS Number"
* $NCIT#C142585 "INN"
* $NCIT#C96973 "USAN"
* $NCIT#C203356 "IUPAC Name"
* $NCIT#C95517 "ISBT-128 DIN"
* $NCIT#C203354 "Company ID/Code"

ValueSet: SubstanceClassification
Id: substance-classification
Title: "Substance Classification"
Description: "Substance classes"

* ^experimental = false
* ^status = #active
* $NCIT#C48807 "Chemical"
* $NCIT#C45305 "Mixture"
* $NCIT#C706 "Nucleic Acids"
* $NCIT#C48803 "Polymer"
* $NCIT#C17021 "Protein"
// * $NCIT#4 "Protein - Other"
// * $NCIT#5 "Protein - Vaccine"
*  $NCIT#C103206 "Structurally Diverse Substance"
// * $NCIT#7 "Structurally Diverse Substance - Immunoglobulin"
// * $NCIT#6 "Structurally Diverse Substance - Vaccine"
// * $NCIT#10 "Structurally Diverse Substance - Allergen"
// * $NCIT#11 "Structurally Diverse Substance - Cell therapy"
// * $NCIT#9 "Structurally Diverse Substance - Herbal"
// * $NCIT#12 "Structurally Diverse Substance - Other"
// * $NCIT#8 "Structurally Diverse Substance - Blood derived"

//ValueSet: PqcmcProductCharacteristic
//Id: pqcmc-product-characteristic
//Title: "PQCMC Product Characteristic"
//Description: "Product Characteristic for the characteristic element in ManufacturedItemDefinition for product composition."

* ^experimental = false
* ^status = #active

//* ^experimental = false
//* ^status = #active

//* $NCIT#OvrRelsProf "Product Overall Release Profile"
//* $NCIT#OvrRelsMech "Product Overall Release Mechanism"
//* $NCIT#CoatInd "Coating Indicator"
//* $NCIT#TabLayCnt "Tablet Layer Count"
//* $NCIT#BeaTypCnt "Tablet Bead Type Count"
//* $NCIT#CapConCnt "Capsule Constituent Count"
//* $NCIT#CapClass "Capsule Classification Category"
//* $NCIT#Schematic "Product Schematic"
//* $NCIT#WgtTyp "Product Weight Type"
//* $NCIT#TotWgtNum "Product Total Weight Numeric Numerator"
//* $NCIT#TotWgtDen "Product Total Weight Numeric Denominator"
//* $NCIT#TotWgtTxt "Total Weight Textual"
//* $NCIT#TotWgtOper "Total Weight Operator"
//* $NCIT#PPiD "Product Part Identifier"
//* $NCIT#PPiDref "Product Part Identifier Reference"
//* $NCIT#RelsProf "Product Part Release Profile"
//* $NCIT#RelsMech "Product Part Release Mechanism"
//* $NCIT#CoatPurpose "Coating Product Part Purpose"
//* $NCIT#Color "Product Part Color Description"
//* $NCIT#ContPercent "Product Part Content Percent"
//* $NCIT#AddInfo "Product Part Additional Information"
//* $NCIT#StrnType "Strength Type (for API)"
//* $NCIT#AmtOper "Product Part Ingredient Amount Operator"
//* $NCIT#AmtText "Product Part Ingredient Amount Textual"
//* $NCIT#QualStd "Quality Standard"
//* $NCIT#Sterile "Sterile Product Indicator"


ValueSet: CmcCompSectionTypesVS
Id: cmc-comp-section-types-vs
Title: "eCTD sections Terminology"
Description: "Value set of all codes in Code system PQCMC Comp Section Types."
* ^experimental = false
* ^status = #active

* $SectionTypes#ich_3.2.s "Drug Substance"
* $SectionTypes#ich_3.2.s.1 "General Information"
* $SectionTypes#ich_3.2.s.2 "Manufacture"
* $SectionTypes#ich_3.2.s.2.1 "Manufacturers"
* $SectionTypes#ich_3.2.s.2.2 "Description of Manufacturing Process and Process Controls"
* $SectionTypes#ich_3.2.s.2.3 "Control of Materials"
* $SectionTypes#ich_3.2.s.2.4 "Controls of Critical Steps and Intermediates"
* $SectionTypes#ich_3.2.s.2.5 "Process Validation and/or Evaluation"
* $SectionTypes#ich_3.2.s.2.6 "Manufacturing Process Development"
* $SectionTypes#ich_3.2.s.3 "Characterisation"
* $SectionTypes#ich_3.2.s.3.1 "Elucidation of Structure and other Characteristics"
* $SectionTypes#ich_3.2.s.3.2 "Impurities"
* $SectionTypes#ich_3.2.s.4 "Control of Drug Substance"
* $SectionTypes#ich_3.2.s.4.1 "Specification"
* $SectionTypes#ich_3.2.s.4.2 "Analytical Procedures"
* $SectionTypes#ich_3.2.s.4.3 "Validation of Analytical Procedures"
* $SectionTypes#ich_3.2.s.4.4 "Batch Analyses"
* $SectionTypes#ich_3.2.s.4.5 "Justification of Specification"
* $SectionTypes#ich_3.2.s.5 "Reference Standards or Materials"
* $SectionTypes#ich_3.2.s.6 "Container Closure System"
* $SectionTypes#ich_3.2.s.7 "Stability"
* $SectionTypes#ich_3.2.s.7.1 "Stability Summary and Conclusions"
* $SectionTypes#ich_3.2.s.7.2 "Postapproval Stability Protocol and Stability Commitment"
* $SectionTypes#ich_3.2.s.7.3 "Stability Data"
* $SectionTypes#ich_3.2.p "Drug Product"
* $SectionTypes#ich_3.2.p.1 "Description and Composition of the Drug Product"
* $SectionTypes#ich_3.2.p.2 "Pharmaceutical Development"
* $SectionTypes#ich_3.2.p.2.1 "Components of the Drug Product"
* $SectionTypes#ich_3.2.p.2.2 "Drug Product"
* $SectionTypes#ich_3.2.p.2.3 "Manufacturing Process Development"
* $SectionTypes#ich_3.2.p.2.4 "Container Closure System"
* $SectionTypes#ich_3.2.p.2.5 "Microbiological Attributes"
* $SectionTypes#ich_3.2.p.2.6 "Compatibility"
* $SectionTypes#ich_3.2.p.3 "Manufacture"
* $SectionTypes#ich_3.2.p.3.1 "Manufacturer(s)"
* $SectionTypes#ich_3.2.p.3.2 "Batch Formula"
* $SectionTypes#ich_3.2.p.3.3 "Description of Manufacturing Process and Process Controls"
* $SectionTypes#ich_3.2.p.3.4 "Controls of Critical Steps and Intermediates"
* $SectionTypes#ich_3.2.p.3.5 "Process Validation and/or Evaluation"
* $SectionTypes#ich_3.2.p.4 "Control of Excipients"
* $SectionTypes#ich_3.2.p.4.1 "Specification"
* $SectionTypes#ich_3.2.p.4.2 "Analytical Procedures"
* $SectionTypes#ich_3.2.p.4.3 "Validation of Analytical Procedures"
* $SectionTypes#ich_3.2.p.4.4 "Justification of Specifications"
* $SectionTypes#ich_3.2.p.4.5 "Excipients of Human or Animal Origin"
* $SectionTypes#ich_3.2.p.4.6 "Novel Excipients"
* $SectionTypes#ich_3.2.p.5 "Control of Drug Product"
* $SectionTypes#ich_3.2.p.5.1 "Specification(s)"
* $SectionTypes#ich_3.2.p.5.2 "Analytical Procedures"
* $SectionTypes#ich_3.2.p.5.3 "Validation of Analytical Procedures"
* $SectionTypes#ich_3.2.p.5.4 "Batch Analyses"
* $SectionTypes#ich_3.2.p.5.5 "Characterisation of Impurities"
* $SectionTypes#ich_3.2.p.5.6 "Justification of Specifications"
* $SectionTypes#ich_3.2.p.6 "Reference Standards or Materials"
* $SectionTypes#ich_3.2.p.7 "Container Closure System"
* $SectionTypes#ich_3.2.p.8 "Stability"
* $SectionTypes#ich_3.2.p.8.1 "Stability Summary and Conclusion"
* $SectionTypes#ich_3.2.p.8.2 "Postapproval Stability Protocol and Stability Commitment"
* $SectionTypes#ich_3.2.p.8.3 "Stability Data"
* $SectionTypes#ich_3.2.a "Appendices"
* $SectionTypes#ich_3.2.a.1 "Facilities And Equipment"
* $SectionTypes#ich_3.2.a.2 "Adventitious Agents Safety Evaluation"
* $SectionTypes#ich_3.2.a.3 "Excipients"
* $SectionTypes#ich_3.2.r "Regional Information"
* $SectionTypes#ich_3.3 "Literature References" 

//ValueSet: PqcmcChemicalStructureDataFileOriginTerminology
//Id: pqcmc-chemical-structure-datafile-origin-terminology
//Title: "Chemical Structure Datafile Origin Terminology"
//Description: "Terminology used to qualify the information pertaining to chemical structure data file origins in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."
//* $NCIT#C16275 "Calculated"
//* $NCIT#C133995 "Experimental"

ValueSet: PqcmcQualitySpecificationSectionTypes
Id: cmc-specification-types-vs
Title: "Specification Section Type Terminology"
Description: "Local value set of all codes in Specification Type codes"
* ^experimental = false
* ^status = #active
* $SectionTypes#ich_3.2.p.5.1 "Specification(s)"
* $SectionTypes#ich_3.2.s.4.1 "Specification"
* $SectionTypes#ich_3.2.p.4 "Control of Excipients"

ValueSet: PqcmcChemicalStructureDataFileTypeTerminology
Id: pqcmc-chemical-structure-datafile-type-terminology
Title: "Chemical Structure Data File Type Terminology"
Description: "Terminology used to qualify the information pertaining to chemical structure data file types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C54683 "InChI File (small molecule)"
* $NCIT#C133997 "mmCIF (large molecules)"
* $NCIT#C133910 "MOLFILE"
* $NCIT#C49039 "PDB"
* $NCIT#C133996 "SDF"
* $NCIT#C54684 "SMILES"
* $NCIT#C85435 "SVG"

ValueSet: PqcmcClosureTypeTerminology
Id: pqcmc-closure-type-terminology
Title: "Closure Type Terminology"
Description: "Terminology used to qualify the information pertaining to closure types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active

* $NCIT#C96113 "Child-resistant, Metal"
* $NCIT#C96114 "Child-resistant, Plastic"
* $NCIT#C96115 "Continuous Thread, Metal"
* $NCIT#C96116 "Continuous Thread, Plastic"
* $NCIT#C96117 "Tamper-evident, Metal"
* $NCIT#C96118 "Tamper-evident, Plastic"
* $NCIT#C96119 "Vacuum, Metal"
* $NCIT#C96120 "Tamper-evident, Composite"
* $NCIT#C96121 "Vacuum, Plastic"
* $NCIT#C96122 "Vacuum, Composite"
* $NCIT#C96123 "Press-on/twist-off, Metal"
* $NCIT#C96124 "Press-on, Composite"
* $NCIT#C96125 "Crown, Metal"
* $NCIT#C96126 "Lug, Metal"
* $NCIT#C96127 "Roll-on, Metal"
* $NCIT#C96128 "Flip-Top (Dispensing), Plastic"
* $NCIT#C96129 "Hinged (Dispensing), Plastic"
* $NCIT#C96130 "Linerless, Plastic"
* $NCIT#C96131 "Pump (Dispensing), Plastic"
* $NCIT#C96132 "Push-pull (Dispensing), Plastic"
* $NCIT#C96133 "Snap-on Cap, Plastic"
* $NCIT#C96134 "Snip-tip (Dispensing), Plastic"
* $NCIT#C96135 "Toggle-swing (Dispensing), Plastic"
* $NCIT#C96136 "Trigger Sprayer (Dispensing), Plastic"
* $NCIT#C96137 "Twist Open/Close (Dispensing), Plastic"
* $NCIT#C96138 "Valved (Dispensing), Plastic"
* $NCIT#C96139 "Stopper"
* $NCIT#C96140 "Tie"

//	ValueSet: PqcmcConformanceCriteriaTerminology
//	Id: pqcmc-conformance-to-criteria-terminology
//	Title: "Conformance to Criteria Terminology"
//	Description: "Terminology used to qualify the information pertaining to conformance to criteria in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."
//	* ^experimental = false
//	* ^status = #active
//	* $NCIT#C80262 "Conforms"
//	* $NCIT#C133998 "Does not conform"

ValueSet: PqcmcContainerTypeTerminology
Id: pqcmc-container-type-terminology
Title: "Container Type Terminology"
Description: "Terminology used to qualify the information pertaining to container types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active

* $NCIT#C43165 "AMPULE"
* $NCIT#C43166 "APPLICATOR"
* $NCIT#C43167 "BAG"
* $NCIT#C43168 "BLISTER PACK"
* $NCIT#C43169 "BOTTLE"
* $NCIT#C43170 "BOTTLE, DISPENSING"
* $NCIT#C43171 "BOTTLE, DROPPER"
* $NCIT#C43172 "BOTTLE, GLASS"
* $NCIT#C43173 "BOTTLE, PLASTIC"
* $NCIT#C43174 "BOTTLE, PUMP"
* $NCIT#C43175 "BOTTLE, SPRAY"
* $NCIT#C43176 "BOTTLE, UNIT-DOSE"
* $NCIT#C43177 "BOTTLE, WITH APPLICATOR"
* $NCIT#C43178 "BOX"
* $NCIT#C43179 "BOX, UNIT-DOSE"
* $NCIT#C43180 "CAN"
* $NCIT#C43181 "CANISTER"
* $NCIT#C96143 "Canisters, lined"
* $NCIT#C92708 "CAPSULE"
* $NCIT#C43182 "CARTON"
* $NCIT#C43183 "CARTRIDGE"
* $NCIT#C43184 "CASE"
* $NCIT#C43185 "CELLO PACK"
* $NCIT#C43186 "CONTAINER"
* $NCIT#C43187 "CUP"
* $NCIT#C43188 "CUP, UNIT-DOSE"
* $NCIT#C43189 "CYLINDER"
* $NCIT#C43190 "DEWAR"
* $NCIT#C43191 "DIALPACK"
* $NCIT#C96141 "Dish, Petri"
* $NCIT#C43192 "DOSE PACK"
* $NCIT#C43193 "DRUM"
* $NCIT#C96144 "Flask"
* $NCIT#C79135 "FLEXIBLE INTERMEDIATE BULK CONTAINER"
* $NCIT#C16738 "INHALER"
* $NCIT#C43194 "INHALER, REFILL"
* $NCIT#C43195 "JAR"
* $NCIT#C43196 "JUG"
* $NCIT#C43197 "KIT"
* $NCIT#C48626 "NOT STATED"
* $NCIT#C43233 "PACKAGE"
* $NCIT#C43198 "PACKAGE, COMBINATION"
* $NCIT#C43199 "PACKET"
* $NCIT#C79136 "PAIL"
* $NCIT#C82332 "PATCH"
* $NCIT#C96142 "Plate, Microwell"
* $NCIT#C43200 "POUCH"
* $NCIT#C43201 "SUPERSACK"
* $NCIT#C43202 "SYRINGE"
* $NCIT#C43203 "SYRINGE, GLASS"
* $NCIT#C43204 "SYRINGE, PLASTIC"
* $NCIT#C43205 "TABMINDER"
* $NCIT#C43206 "TANK"
* $NCIT#C53438 "TRAY"
* $NCIT#C42794 "TUBE"
* $NCIT#C43207 "TUBE, WITH APPLICATOR"
* $NCIT#C43226 "VIAL"
* $NCIT#C43208 "VIAL, DISPENSING"
* $NCIT#C43209 "VIAL, GLASS"
* $NCIT#C43210 "VIAL, MULTI-DOSE"
* $NCIT#C43211 "VIAL, PATENT DELIVERY SYSTEM"
* $NCIT#C43212 "VIAL, PHARMACY BULK PACKAGE"
* $NCIT#C43213 "VIAL, PIGGYBACK"
* $NCIT#C43214 "VIAL, PLASTIC"
* $NCIT#C43215 "VIAL, SINGLE-DOSE"
* $NCIT#C43216 "VIAL, SINGLE-USE"

//ValueSet:alueSet: PqcmcCoPackagedIndicatorTerminology
//Id: pqcmc-copackaged-indicator-terminology
//Title: "Co-packaged Indicator Terminology"
//Description: "Terminology used to qualify the information pertaining to copackaged indicators in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."
//* $NCIT#C49487 "No"
//* $NCIT#C49488 "Yes"

ValueSet: PqcmcDrugProductComponentFunctionCategoryTerminology
Id: pqcmc-drug-product-component-function-category-terminology
Title: "Drug Product Component Function Category Terminology"
Description: "Terminology used to qualify the information pertaining to drug product component function categories in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active

* $NCIT#C82533 "Active Ingredient"
* $NCIT#C2140 "Adjuvant"
* $NCIT#C42637 "Inactive Ingredient"

//ValueSet: PqcmcDrugSubstanceProductIndicatorTerminology
//Id: pqcmc-drug-substance-product-indicator-terminology
//Title: "Drug substance Product Indicator Terminology"
//Description: "Terminology used to qualify the information pertaining to drug substance product indicators in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."
//* $NCIT#C1909 "Product"
//* $NCIT#C45306 "SUBSTANCE"

ValueSet: PqcmcExcipientFunctionTerminology
Id: pqcmc-excipient-function-terminology
Title: "Excipient Function Terminology"
Description: "Terminology used to qualify the information pertaining to excipient functions in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active

* $NCIT#C176637 "Absorption modifier"
* $NCIT#C89528 "Adhesive"
* $NCIT#C176642 "Adsorbent"
* $NCIT#C176643 "Air displacement"
* $NCIT#C275 "Antioxidant"
* $NCIT#C42647 "Binder"
* $NCIT#C70815 "Buffering agent"
* $NCIT#C176644 "Bulking agent"
* $NCIT#C176645 "Carrier"
* $NCIT#C360 "Chelating agent"
* $NCIT#C42656 "Coloring agent"
* $NCIT#C176646 "Complexing agent"
* $NCIT#C53306 "Cryoprotectant"
* $NCIT#C176647 "Denaturant"
* $NCIT#C42648 "Disintegrant"
* $NCIT#C42662 "Dispersing agent"
* $NCIT#C927 "Vehicle"
* $NCIT#C176638 "Effervescent agent"
* $NCIT#C176632 "Emollient"
* $NCIT#C73477 "Emulsifying Excipient"
* $NCIT#C176633 "Emulsion stabilizing agent"
* $NCIT#C42650 "Filler"
* $NCIT#C176648 "Film coating agent"
* $NCIT#C176634 "Foam stabilizing agent"
* $NCIT#C176649 "Free radical scavenger"
* $NCIT#C176650 "Gelling agent"
* $NCIT#C42654 "Anticaking agent"
* $NCIT#C176651 "Humectant"
* $NCIT#C42653 "Lubricant"
* $NCIT#C176652 "Lyophilization aid"
* $NCIT#C176653 "Matrix-forming agent"
* $NCIT#C176654 "Microencapsulating agent"
* $NCIT#C176655 "Ointment base"
* $NCIT#C176656 "Opacifier"
* $NCIT#C176660 "Polymers for ophthalmic use"
* $NCIT#C176635 "Organoleptic agent"
* $NCIT#C176657 "Osmotic agent"
* $NCIT#C55826 "Plasticizer"
* $NCIT#C176659 "Polishing agent"
* $NCIT#C42659 "Preservative"
* $NCIT#C42657 "Ink"
* $NCIT#C176661 "Propellant"
* $NCIT#C176639 "Reducing agent"
* $NCIT#C176662 "Release modifying agent"
* $NCIT#C176640 "Solubilizing agent"
* $NCIT#C45790 "Solvent"
* $NCIT#C176636 "Stabilizer"
* $NCIT#C176663 "Suppository base"
* $NCIT#C42739 "Surfactant"
* $NCIT#C42660 "Suspending agent"
* $NCIT#C176641 "Tonicity agent"
* $NCIT#C176664 "Transdermal delivery component"
* $NCIT#C176665 "Transfer ligand"
* $NCIT#C176666 "Viscosity modifier"
* $NCIT#C176667 "Water-repelling agent"
* $NCIT#C176668 "Wetting agent"
* $NCIT#C176658 "pH modifier"

ValueSet: PqcmcQualityBenchmarkTerminology
Id: pqcmc-quality-benchmark-terminology
Title: "Quality Benchmark Terminology"
Description: "Terminology used to qualify the information pertaining to quality benchmarks in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C176793 "BP"
* $NCIT#C134009 "Company Standard"
* $NCIT#C134007 "EP"
* $NCIT#C134008 "JP"
* $NCIT#C134006 "USP-NF"

ValueSet: PqcmcSourceTypeTerminology
Id: pqcmc-source-type-terminology
Title: "Source Type Terminology"
Description: "Terminology used to qualify the information pertaining to source types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C14182 "Animal"
* $NCIT#C18634 "Animal-derived indirectly"
* $NCIT#C48807 "Chemical"
* $NCIT#C14225 "Human"
* $NCIT#C14227 "Insect"
* $NCIT#C14329 "Microbial"
* $NCIT#C14258 "Plant"

ValueSet: PqcmcSpecificationStatusTerminology
Id: pqcmc-specification-status-terminology
Title: "Specification Status Terminology"
Description: "Terminology used to qualify the information pertaining to specification statuses in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C25425 "Approved"
* $NCIT#C48660 "Not Applicable"
* $NCIT#C134011 "Not Approved"
* $NCIT#C134012 "Reported in a CBE or AR"
* $NCIT#C134010 "Tentatively Approved"

ValueSet: PqcmcSpecificationTypeTerminology
Id: pqcmc-specification-type-terminology
Title: "Specification Type Terminology"
Description: "Terminology used to qualify the information pertaining to specification types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C134021 "Drug Product"
* $NCIT#C134022 "Drug Substance"
* $NCIT#C133931 "Raw Materials/Excipients/Intermediates/Reagents"

ValueSet: PqcmcOrgIdentifierTypeTerminology
Id: pqcmc-org-identifier-type-terminology
Title: "Organization-Site Identifier Terminology"
Description: "Terminology used to qualify the information pertaining to the sponsor or testing site unique identifier types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C134005 "CFN"
* $NCIT#C134003 "DUNS"
* $NCIT#C134004 "FEI"
* $NCIT#C17998 "Unknown"

ValueSet: PqcmcStrengthTypeTerminology
Id: pqcmc-strength-type-terminology
Title: "Strength Type Terminology"
Description: "Terminology used to qualify the information pertaining to strength types in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C45420 "Activity"
* $NCIT#C168628 "Mass"

ValueSet: PqcmcTestMethodOriginTerminology
Id: pqcmc-test-method-origin-terminology
Title: "Test Method Origin Terminology"
Description: "Terminology used to qualify the information pertaining to test method origins in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C96164 "CFR"
* $NCIT#C96102 "Compendial"
* $NCIT#C96103 "Proprietary"

ValueSet: PqcmcTestUsageTerminology
Id: pqcmc-test-usage-terminology
Title: "Test Usage Terminology"
Description: "Terminology used to qualify the information pertaining to test usage in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents."

* ^experimental = false
* ^status = #active
* $NCIT#C134029 "Release"
* $NCIT#C134030 "Stability"

ValueSet: SplPharmaceuticalDosageFormTerminology
Id: spl-pharmaceutical-dosage-form-terminology
Title: "Pharmaceutical Dosage Form Terminology"
Description: "Terminology used for representation of the information on pharmaceutical product dosage form in the framework of the SPL documents."

* ^experimental = false
* ^status = #active

* $NCIT#C100103 "CELLULAR SHEET"
* $NCIT#C113106 "INJECTABLE FOAM"
* $NCIT#C124794 "TABLET, CHEWABLE, EXTENDED RELEASE"
* $NCIT#C134876 "Chewable Gel"
* $NCIT#C147579 "Tablet with Sensor"
* $NCIT#C17423 "DRUG DELIVERY SYSTEM"
* $NCIT#C25158 "CAPSULE"
* $NCIT#C25394 "PILL"
* $NCIT#C28944 "CREAM"
* $NCIT#C29167 "LOTION"
* $NCIT#C29269 "MOUTHWASH"
* $NCIT#C42679 "DOUCHE"
* $NCIT#C42763 "DRESSING"
* $NCIT#C42887 "AEROSOL"
* $NCIT#C42888 "AEROSOL, FOAM"
* $NCIT#C42889 "AEROSOL, SPRAY"
* $NCIT#C42890 "BEAD"
* $NCIT#C42892 "BAR, CHEWABLE"
* $NCIT#C42893 "TABLET, CHEWABLE"
* $NCIT#C42894 "GUM, CHEWING"
* $NCIT#C42895 "CAPSULE, COATED"
* $NCIT#C42896 "CAPSULE, COATED PELLETS"
* $NCIT#C42897 "TABLET, COATED"
* $NCIT#C42898 "SOLUTION, CONCENTRATE"
* $NCIT#C42899 "INJECTION, SOLUTION, CONCENTRATE"
* $NCIT#C42901 "CRYSTAL"
* $NCIT#C42902 "CAPSULE, DELAYED RELEASE"
* $NCIT#C42903 "GRANULE, DELAYED RELEASE"
* $NCIT#C42904 "CAPSULE, DELAYED RELEASE PELLETS"
* $NCIT#C42905 "TABLET, DELAYED RELEASE"
* $NCIT#C42906 "GEL, DENTIFRICE"
* $NCIT#C42907 "PASTE, DENTIFRICE"
* $NCIT#C42908 "POWDER, DENTIFRICE"
* $NCIT#C42909 "GRANULE, EFFERVESCENT"
* $NCIT#C42910 "TABLET, EFFERVESCENT"
* $NCIT#C42911 "PATCH, EXTENDED RELEASE, ELECTRICALLY CONTROLLED"
* $NCIT#C42912 "ELIXIR"
* $NCIT#C42913 "EMULSION"
* $NCIT#C42914 "INJECTION, EMULSION"
* $NCIT#C42915 "ENEMA"
* $NCIT#C42916 "CAPSULE, EXTENDED RELEASE"
* $NCIT#C42917 "CAPSULE, COATED, EXTENDED RELEASE"
* $NCIT#C42918 "PELLETS, COATED, EXTENDED RELEASE"
* $NCIT#C42920 "FILM, EXTENDED RELEASE"
* $NCIT#C42921 "GRANULE, FOR SUSPENSION, EXTENDED RELEASE"
* $NCIT#C42922 "INSERT, EXTENDED RELEASE"
* $NCIT#C42923 "PATCH, EXTENDED RELEASE"
* $NCIT#C42924 "SUPPOSITORY, EXTENDED RELEASE"
* $NCIT#C42925 "SUSPENSION, EXTENDED RELEASE"
* $NCIT#C42926 "INJECTION, SUSPENSION, EXTENDED RELEASE"
* $NCIT#C42927 "TABLET, EXTENDED RELEASE"
* $NCIT#C42928 "CAPSULE, FILM COATED, EXTENDED RELEASE"
* $NCIT#C42929 "EXTRACT"
* $NCIT#C42930 "TABLET, FILM COATED, EXTENDED RELEASE"
* $NCIT#C42931 "TABLET, FILM COATED"
* $NCIT#C42932 "FILM"
* $NCIT#C42933 "GAS"
* $NCIT#C42934 "GEL"
* $NCIT#C42935 "SOLUTION, GEL FORMING, EXTENDED RELEASE"
* $NCIT#C42936 "CAPSULE, GELATIN COATED"
* $NCIT#C42937 "GLOBULE"
* $NCIT#C42938 "GRANULE"
* $NCIT#C42939 "GRANULE, FOR SOLUTION"
* $NCIT#C42940 "GRANULE, FOR SUSPENSION"
* $NCIT#C42942 "IMPLANT"
* $NCIT#C42943 "PELLET, IMPLANTABLE"
* $NCIT#C42944 "INHALANT"
* $NCIT#C42945 "INJECTION, SOLUTION"
* $NCIT#C42946 "INJECTION"
* $NCIT#C42947 "IRRIGANT"
* $NCIT#C42948 "JELLY"
* $NCIT#C42949 "LINIMENT"
* $NCIT#C42950 "INJECTION, LIPID COMPLEX"
* $NCIT#C42951 "INJECTION, SUSPENSION, LIPOSOMAL"
* $NCIT#C42952 "LIPSTICK"
* $NCIT#C42953 "LIQUID"
* $NCIT#C42954 "CAPSULE, LIQUID FILLED"
* $NCIT#C42955 "LOZENGE"
* $NCIT#C42956 "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION, EXTENDED RELEASE"
* $NCIT#C42957 "INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION"
* $NCIT#C42958 "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION"
* $NCIT#C42959 "INJECTION, POWDER, LYOPHILIZED, FOR LIPOSOMAL SUSPENSION"
* $NCIT#C42960 "AEROSOL, METERED"
* $NCIT#C42961 "POWDER, METERED"
* $NCIT#C42962 "SPRAY, METERED"
* $NCIT#C42963 "TABLET, MULTILAYER, EXTENDED RELEASE"
* $NCIT#C42964 "TABLET, MULTILAYER"
* $NCIT#C42965 "OIL"
* $NCIT#C42966 "OINTMENT"
* $NCIT#C42967 "PASTE"
* $NCIT#C42968 "PATCH"
* $NCIT#C42969 "PELLET"
* $NCIT#C42970 "PLASTER"
* $NCIT#C42971 "AEROSOL, POWDER"
* $NCIT#C42972 "POWDER"
* $NCIT#C42973 "POWDER, FOR SOLUTION"
* $NCIT#C42974 "INJECTION, POWDER, FOR SOLUTION"
* $NCIT#C42975 "POWDER, FOR SUSPENSION"
* $NCIT#C42976 "INJECTION, POWDER, FOR SUSPENSION"
* $NCIT#C42977 "INJECTION, POWDER, FOR SUSPENSION, EXTENDED RELEASE"
* $NCIT#C42979 "RINSE"
* $NCIT#C42980 "SALVE"
* $NCIT#C42981 "SHAMPOO"
* $NCIT#C42982 "SHAMPOO, SUSPENSION"
* $NCIT#C42983 "SOAP"
* $NCIT#C42984 "FILM, SOLUBLE"
* $NCIT#C42985 "TABLET, SOLUBLE"
* $NCIT#C42986 "SOLUTION"
* $NCIT#C42987 "SOLUTION, FOR SLUSH"
* $NCIT#C42988 "INJECTION, SUSPENSION, SONICATED"
* $NCIT#C42989 "SPRAY"
* $NCIT#C42990 "SPRAY, SUSPENSION"
* $NCIT#C42991 "STICK"
* $NCIT#C42992 "TABLET, SUGAR COATED"
* $NCIT#C42993 "SUPPOSITORY"
* $NCIT#C42994 "SUSPENSION"
* $NCIT#C42995 "INJECTION, SUSPENSION"
* $NCIT#C42996 "SYRUP"
* $NCIT#C42997 "TABLET, DELAYED RELEASE PARTICLES"
* $NCIT#C42998 "TABLET"
* $NCIT#C42999 "TABLET, ORALLY DISINTEGRATING"
* $NCIT#C43000 "TINCTURE"
* $NCIT#C43001 "TROCHE"
* $NCIT#C43003 "WAFER"
* $NCIT#C43525 "DISC"
* $NCIT#C47892 "TAMPON"
* $NCIT#C47897 "TAPE"
* $NCIT#C47898 "SWAB"
* $NCIT#C47912 "SPONGE"
* $NCIT#C47913 "POULTICE"
* $NCIT#C47914 "STRIP"
* $NCIT#C47915 "INTRAUTERINE DEVICE"
* $NCIT#C47916 "KIT"
* $NCIT#C48624 "NOT APPLICABLE"
* $NCIT#C60884 "CLOTH"
* $NCIT#C60891 "CONCENTRATE"
* $NCIT#C60897 "CREAM, AUGMENTED"
* $NCIT#C60926 "FIBER, EXTENDED RELEASE"
* $NCIT#C60927 "FOR SOLUTION"
* $NCIT#C60928 "FOR SUSPENSION"
* $NCIT#C60929 "FOR SUSPENSION, EXTENDED RELEASE"
* $NCIT#C60930 "GEL, METERED"
* $NCIT#C60931 "INJECTABLE, LIPOSOMAL"
* $NCIT#C60933 "INSERT"
* $NCIT#C60934 "LIQUID, EXTENDED RELEASE"
* $NCIT#C60957 "LOTION, AUGMENTED"
* $NCIT#C60958 "LOTION/SHAMPOO"
* $NCIT#C60984 "OINTMENT, AUGMENTED"
* $NCIT#C60985 "PASTILLE"
* $NCIT#C60988 "RING"
* $NCIT#C60992 "SOLUTION/DROPS"
* $NCIT#C60994 "SOLUTION, GEL FORMING/DROPS"
* $NCIT#C60995 "SUSPENSION/DROPS"
* $NCIT#C60997 "TABLET, COATED PARTICLES"
* $NCIT#C61004 "TABLET, FOR SOLUTION"
* $NCIT#C61005 "TABLET, FOR SUSPENSION"
* $NCIT#C61006 "TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE"
* $NCIT#C64884 "POWDER, EFFERVESCENT"
* $NCIT#C64984 "INTRACAMERAL"
* $NCIT#C69067 "GRANULE, EXTENDED RELEASE"
* $NCIT#C87536 "SMOKE STICK"
* $NCIT#C87537 "SMOKE PAPER"
* $NCIT#C87538 "INTRARUMINAL DEVICE, EXTENDED RELEASE"
* $NCIT#C87539 "TAG"
* $NCIT#C87540 "GRANULE FOR SUSPENSION, DELAYED RELEASE"
* $NCIT#C87541 "POWDER, LYOPHILIZED"
* $NCIT#C87542 "PENDANT"

ValueSet: PqcmcUnitsMeasure
Id: pqcmc-units-of-measure
Title: "Units Of Measure"
Description: "Terminology used to qualify the information pertaining to units of measure in the framework of the Pharmaceutical Quality/Chemistry, Manufacturing and Controls documents.
Note: Includes SPL Unit of Presentation Terminology"

* ^experimental = false
* ^status = #active

* $UCUM#{actuation} "actuation"
* $UCUM#[Amb'a'1'U] "Amb a 1 units"
* $UCUM#[arb'U] "arbitrary unit"
* $UCUM#[Btu] "British thermal unit"
* $UCUM#{Can} "Can"
* $UCUM#cm "centimeter"
* $UCUM#cP "centiPoise"
* $UCUM#[CFU] "colony forming unit"
* $UCUM#m3 "cubic meter"
* $UCUM#d "day"
* $UCUM#Cel "degree Celsius"
* $UCUM#[degF] "degree Fahrenheit"
* $UCUM#deg "degree"
* $UCUM#[EU] "Ehrlich unit"
* $UCUM#U "enzyme Unit"
* $UCUM#[gal_us] "Queen Anne's wine gallon"
* $UCUM#g "gram"
* $UCUM#h "hour"
* $UCUM#[in_i] "inch (international)"
* $UCUM#[iU] "international unit"
* $UCUM#K "Kelvin"
* $UCUM#{kDa} "kiloDalton"
* $UCUM#kg "kilogram"
* $UCUM#kgf "kilogram-force"
* $UCUM#[lbf_av] "pound force"
* $UCUM#L "liter"
* $UCUM#m "meter"
* $UCUM#ug "microgram"
* $UCUM#ug/{actuation} "micrograms per actuation"
* $UCUM#uL "microliter"
* $UCUM#umol "micromole"
* $UCUM#um "micrometer"
* $UCUM#umho "micromho"
* $UCUM#mg "milligram"
* $UCUM#mL "milliliter"
* $UCUM#mm "millimeter"
* $UCUM#mmol "millimole"
* $UCUM#mosm "milliosmole"
* $UCUM#mS "milliSiemens"
* $UCUM#min "minute"
* $UCUM#mol "mole"
* $UCUM#mo "month"
* $UCUM#ng "nanogram"
* $UCUM#nm "nanometer"
* $UCUM#nmol "nanomole"
* $UCUM#N "Newton"
* $UCUM#1 "1*"
* $UCUM#[oz_av] "ounce (US and British)"
* $UCUM#[ppb] "part per billion"
* $UCUM#[ppm] "part per million"
* $UCUM#[pptr] "part per trillion"
* $UCUM#[ppth] "parts per thousand"
* $UCUM#{tot} "particles total count"
* $UCUM#pg "picogram"
* $UCUM#pmol "picomole"
* $UCUM#[pt_us] "pint"
* $UCUM#[lb_av] "pound (US and British)"
* $UCUM#[psi] "pound per square inch"
* $UCUM#[qt_us] "quart"
* $UCUM#rad "radian"
* $UCUM#s "second"
* $UCUM#m2 "square meter"
* $UCUM#{tbl} "tablets"
* $UCUM#u "unified atomic mass unit"
* $UCUM#(m2.d) "meter squared in 24 hours"
* $UCUM#{Vial} "Vial"
* $UCUM#wk "week"
* $UCUM#a "year"
* $UCUM#[pH] "[pH]"
* $UCUM#[dqt_us] "dry quart"
* $UCUM#[dpt_us] "dry pint"
* $UCUM#mho "mho"
* $UCUM#ms "millisecond"
* $UCUM#S "Siemens"
* $UCUM#[NTU] "Nephelometric Turbidity Unit"
* $UCUM#[FNU] "Formazin Nephelometric Unit"
* $UCUM#{JTU} "Jackson Turbidity Unit"
* $UCUM#mg% "milligram per deciliter"
* $UCUM#%{WeightToWeight} "percent WeightToWeight"  
* $UCUM#%{WeightToVolume} "percent WeightToVolume"
* $UCUM#% "percent"
* $UCUM#%{VolumeToVolume} "percent VolumeToVolume"

ValueSet: SplDrugRouteofAdministrationTerminology
Id: spl-drug-route-of-administration-terminology
Title: "Drug Route Of Administration Terminology"
Description: "Terminology used for representation of the information on pharmaceutical product route of administration in the framework of the Structured Product Labeling documents."

* ^experimental = false
* ^status = #active
* $NCIT#C132737 "Intracanalicular"
* $NCIT#C28161 "INTRAMUSCULAR"
* $NCIT#C38192 "AURICULAR (OTIC)"
* $NCIT#C38193 "BUCCAL"
* $NCIT#C38194 "CONJUNCTIVAL"
* $NCIT#C38197 "DENTAL"
* $NCIT#C38198 "SOFT TISSUE"
* $NCIT#C38200 "HEMODIALYSIS"
* $NCIT#C38203 "IONTOPHORESIS"
* $NCIT#C38205 "ENDOCERVICAL"
* $NCIT#C38206 "ENDOSINUSIAL"
* $NCIT#C38207 "INTRATHORACIC"
* $NCIT#C38208 "ENDOTRACHEAL"
* $NCIT#C38209 "ENTERAL"
* $NCIT#C38210 "EPIDURAL"
* $NCIT#C38211 "EXTRA-AMNIOTIC"
* $NCIT#C38212 "EXTRACORPOREAL"
* $NCIT#C38215 "INFILTRATION"
* $NCIT#C38216 "RESPIRATORY (INHALATION)"
* $NCIT#C38217 "INTRACORONAL, DENTAL"
* $NCIT#C38218 "INTRACORONARY"
* $NCIT#C38219 "INTERSTITIAL"
* $NCIT#C38220 "INTRA-ABDOMINAL"
* $NCIT#C38221 "INTRA-AMNIOTIC"
* $NCIT#C38222 "INTRA-ARTERIAL"
* $NCIT#C38223 "INTRA-ARTICULAR"
* $NCIT#C38224 "INTRABILIARY"
* $NCIT#C38225 "INTRABRONCHIAL"
* $NCIT#C38226 "INTRABURSAL"
* $NCIT#C38227 "INTRACARDIAC"
* $NCIT#C38228 "INTRACARTILAGINOUS"
* $NCIT#C38229 "INTRACAUDAL"
* $NCIT#C38230 "INTRACAVERNOUS"
* $NCIT#C38231 "INTRACAVITARY"
* $NCIT#C38232 "INTRACEREBRAL"
* $NCIT#C38233 "INTRACISTERNAL"
* $NCIT#C38234 "INTRACORNEAL"
* $NCIT#C38235 "INTRACORPORUS CAVERNOSUM"
* $NCIT#C38236 "INTRACRANIAL"
* $NCIT#C38238 "INTRADERMAL"
* $NCIT#C38239 "INTRADISCAL"
* $NCIT#C38240 "INTRADUCTAL"
* $NCIT#C38241 "INTRADUODENAL"
* $NCIT#C38242 "INTRADURAL"
* $NCIT#C38243 "INTRAEPIDERMAL"
* $NCIT#C38245 "INTRAESOPHAGEAL"
* $NCIT#C38246 "INTRAGASTRIC"
* $NCIT#C38247 "INTRAGINGIVAL"
* $NCIT#C38248 "INTRAHEPATIC"
* $NCIT#C38249 "INTRAILEAL"
* $NCIT#C38250 "INTRALESIONAL"
* $NCIT#C38251 "INTRALUMINAL"
* $NCIT#C38252 "INTRALYMPHATIC"
* $NCIT#C38253 "INTRAMEDULLARY"
* $NCIT#C38254 "INTRAMENINGEAL"
* $NCIT#C38255 "INTRAOCULAR"
* $NCIT#C38256 "INTRAOVARIAN"
* $NCIT#C38257 "INTRAPERICARDIAL"
* $NCIT#C38258 "INTRAPERITONEAL"
* $NCIT#C38259 "INTRAPLEURAL"
* $NCIT#C38260 "INTRAPROSTATIC"
* $NCIT#C38261 "INTRAPULMONARY"
* $NCIT#C38262 "INTRASINAL"
* $NCIT#C38263 "INTRASPINAL"
* $NCIT#C38264 "INTRASYNOVIAL"
* $NCIT#C38265 "INTRATENDINOUS"
* $NCIT#C38266 "INTRATESTICULAR"
* $NCIT#C38267 "INTRATHECAL"
* $NCIT#C38268 "INTRATUBULAR"
* $NCIT#C38269 "INTRATUMOR"
* $NCIT#C38270 "INTRATYMPANIC"
* $NCIT#C38271 "URETHRAL"
* $NCIT#C38272 "INTRAUTERINE"
* $NCIT#C38273 "INTRAVASCULAR"
* $NCIT#C38274 "INTRAVENOUS BOLUS"
* $NCIT#C38276 "INTRAVENOUS"
* $NCIT#C38277 "INTRAVENTRICULAR"
* $NCIT#C38278 "INTRAVESICAL"
* $NCIT#C38279 "INTRAVENOUS DRIP"
* $NCIT#C38280 "INTRAVITREAL"
* $NCIT#C38281 "IRRIGATION"
* $NCIT#C38282 "LARYNGEAL"
* $NCIT#C38283 "TRANSMUCOSAL"
* $NCIT#C38284 "NASAL"
* $NCIT#C38285 "NASOGASTRIC"
* $NCIT#C38286 "OCCLUSIVE DRESSING TECHNIQUE"
* $NCIT#C38287 "OPHTHALMIC"
* $NCIT#C38288 "ORAL"
* $NCIT#C38289 "OROPHARYNGEAL"
* $NCIT#C38290 "OTHER"
* $NCIT#C38291 "PARENTERAL"
* $NCIT#C38292 "PERIARTICULAR"
* $NCIT#C38293 "PERINEURAL"
* $NCIT#C38294 "PERIODONTAL"
* $NCIT#C38295 "RECTAL"
* $NCIT#C38296 "RETROBULBAR"
* $NCIT#C38297 "SUBARACHNOID"
* $NCIT#C38298 "SUBCONJUNCTIVAL"
* $NCIT#C38299 "SUBCUTANEOUS"
* $NCIT#C38300 "SUBLINGUAL"
* $NCIT#C38301 "SUBMUCOSAL"
* $NCIT#C38304 "TOPICAL"
* $NCIT#C38305 "TRANSDERMAL"
* $NCIT#C38307 "TRANSPLACENTAL"
* $NCIT#C38308 "TRANSTRACHEAL"
* $NCIT#C38309 "TRANSTYMPANIC"
* $NCIT#C38310 "UNASSIGNED"
* $NCIT#C38311 "UNKNOWN"
* $NCIT#C38312 "URETERAL"
* $NCIT#C38313 "VAGINAL"
* $NCIT#C38633 "ELECTRO-OSMOSIS"
* $NCIT#C38675 "CUTANEOUS"
* $NCIT#C38676 "PERCUTANEOUS"
* $NCIT#C38677 "PERIDURAL"
* $NCIT#C48623 "NOT APPLICABLE"
* $NCIT#C65103 "SUBGINGIVAL"
* $NCIT#C79137 "INTRAMAMMARY"
* $NCIT#C79138 "INTRALINGUAL"
* $NCIT#C79139 "INTRARUMINAL"
* $NCIT#C79141 "INTRANODAL"
* $NCIT#C79142 "INTRAOMENTUM"
* $NCIT#C79143 "SUBRETINAL"
* $NCIT#C79144 "INTRAEPICARDIAL"
* $NCIT#C79145 "TRANSENDOCARDIAL"

ValueSet: PqcmcManufacturedDoseFormTerminology
Id: pqcmc-manufactured-dose-form-terminology
Title: "Manufactured Dose Form Terminology"
Description: "Terminology used to qualify the information pertaining to the manufactured dose form."
* ^experimental = false
* ^status = #active
* ^extension[http://hl7.org/fhir/StructureDefinition/valueset-supplement].valueCanonical = Canonical(NCItHierarchySupplement)
* $NCIT#C45299 "Gas"
* $NCIT#C45298 "Liquid"
* $NCIT#C154598 "Solution" 
* $NCIT#C149895 "Semi-solid"
* $NCIT#C45300 "Solid"
* $NCIT#C154433 "Capsule" 
* $NCIT#C154605 "Tablet" 

ValueSet: PqcmcGraphicalFileTypes
Id: pqcmc-graphical-file-types
Title: "Graphical File Types"
Description: "The acceptable file types that can be used in graphical files"
* ^experimental = false
* ^status = #active
* urn:ietf:bcp:13#image/jpeg
* urn:ietf:bcp:13#image/png
* urn:ietf:bcp:13#image/svg+xml
* urn:ietf:bcp:13#image/gif
* urn:ietf:bcp:13#image/tiff

ValueSet: PqcmcAnalyticalInstrumentDataTypes
Id: pqcmc-analytical-instrument-data-types
Title: "Analytical Instrument Data File Types"
Description: "The acceptable file types that can be used in Analytical Instrument Data Files"
* ^experimental = false
* ^status = #active
* urn:ietf:bcp:13#application/x-jcamp-dx "JCAMP Spectroscopic Data (.jdx, .dx)"

ValueSet: PqcmcStructureDataTypes
Id: pqcmc-structure-data-types
Title: "Structure Data Types"
Description: "The acceptable file types that can be used in Structure Data Files (MOL,SDF,INCHI,etc)"
* ^experimental = false
* ^status = #active
* urn:ietf:bcp:13#application/x-mdl-sdfile "Structure-Data File (.sdf)"
* urn:ietf:bcp:13#application/x-mdl-molfile "Molfile (.mol)"
* urn:ietf:bcp:13#application/x-cif "Crystallographic Information File (.cif)"
* urn:ietf:bcp:13#application/x-inchi "IUPAC International Chemical Identifier (.inchi)"

ValueSet: PqcmcPercentageUnits
Id: pqcmc-percentage-units
Title: "Percentage Units"
Description: "Units of Measure terminologies that represent the concept of a percentage"
* ^experimental = false
* ^status = #active

* $UCUM#%{WeightToWeight} "percent WeightToWeight"
* $UCUM#%{WeightToVolume} "percent WeightToVolume"
* $UCUM#% "percent"
* $UCUM#%{VolumeToVolume} "percent VolumeToVolume"

ValueSet: PqcmcNonPercentageUnits
Id: pqcmc-non-percentage-units
Title: "Non-Percentage Units"
Description: "Units of Measure terminologies that do not represent percentages"
* ^experimental = false
* ^status = #active
* include codes from valueset PqcmcUnitsMeasure
* exclude codes from valueset PqcmcPercentageUnits

ValueSet: PqcmcRepresentationTypes
Id: pqcmc-representation-types
Title: "Representation Types"
Description: "The different types of representations (graphical, structure/file and structure/text)"
* ^experimental = false
* ^status = #active
* $NCIT#C54273 "Picture"
* $NCIT#C45253 "String"
* $NCIT#C103240 "Chemical Structure"

ValueSet: PqcmcGENCAndISOIntersect
Id: pqcmc-genc-and-iso-intersect
Title: "GENC and ISO 3166 Intersection"
Description: "The 3 letter country codes used in GENC and ISO have significant overlap: only the country codes in ISO 3166 that have an equivalent code in GENC may be used"
* ^experimental = false
* ^status = #active
* include codes from valueset http://hl7.org/fhir/ValueSet/iso3166-1-3
* exclude urn:iso:std:iso:3166#ALA
* exclude urn:iso:std:iso:3166#PSE
* exclude urn:iso:std:iso:3166#SJM
* exclude urn:iso:std:iso:3166#UMI

---

// File: input/fsh/UtilityProfiles.fsh

Profile: PqcmcAttachment
Parent: Attachment
Id: pqcmc-attachment
Title: "PQCMC Attachment"
Description: "Any attached file in a submission is required to have a type, data, and a title"
* ^abstract = true
* contentType 1..1 MS
* data 1..1 MS
* title 1..1 MS 
* title ^short = "Document file name including the file extension"
* title ^definition = """A format or abbreviation name that identifies a file structure. [Source: SME Defined]
Used for the following: Analytical Instrument Data File Type, Impurity Analysis Graphic, Impurity Analytical Instrument Data File, Impurity Chemical Structure Data File, and Substance Structure Graphic.
"""

Profile: GraphicAttachment
Parent: PqcmcAttachment
Id: pqcmc-graphic-attachment
Title: "Analysis Graphic"
Description: "Any attached file that contains a graphical representation"
* ^abstract = true
* contentType from PqcmcGraphicalFileTypes (required)

Profile: PDFAttachment
Parent: PqcmcAttachment
Id: pqcmc-pdf-attachment
Title: "Attached Document (PDF)"
Description: "An attached PDF file"
* ^abstract = true
* contentType = #application/pdf

Profile: AnalyticalInstrumentData
Parent: PqcmcAttachment
Id: pqcmc-analytical-intstrument-data
Title: "Analytical Instrument Data"
Description: "Any attached file that contains analytical instrument data"
* ^abstract = true
* contentType from PqcmcAnalyticalInstrumentDataTypes (required)

Profile: StructureDataAttachment
Parent: PqcmcAttachment
Id: pqcmc-structure-data
Title: "Structure Data"
Description: "Any attached file that contains structure data (e.g. SDFiles, MolFiles, INCHI)"
* ^abstract = true
* contentType from PqcmcStructureDataTypes (required)

Profile: GraphicReference
Parent: Base64DocumentReference
Id: pqcmc-graphic-reference
Title: "Graphic Reference"
Description: "A Document Reference to any attachment tha contains a graphical representation"
* ^abstract = true
* content.attachment only GraphicAttachment

Profile: StructureReference
Parent: Base64DocumentReference
Id: pqcmc-structure-reference
Title: "Structure Data Reference"
Description: "A Document Reference to any attachment that contains structure data"
* ^abstract = true
* content.attachment only StructureDataAttachment

Profile: Base64DocumentReference
Parent: DocumentReference
Id: cmc-document-reference
Title: "Document Reference Attachment"
Description: "A profile that represents the document or diagram in base64."
* ^abstract = true
* status = #current
* content MS
* content.attachment MS
* content.attachment only PqcmcAttachment

 
Extension: AditionalInformationExtension
Id: pq-additional-info-extension
Title: "Additional Information"
Description: "Any additional information that that the submitter wishes to provide to the FDA that is not structured in the IG. The content of the information submitted via Additional Information may be analyzed at some point in the future, to identify candidate elements for structuring in future iterations of the IG."
* ^context[+].type = #element
* ^context[=].expression = "ManufacturedItemDefinition.component.constituent"
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition"
* ^context[+].type = #element
* ^context[=].expression =  "PlanDefinition.goal"
//* ^context[=].expression = "ResearchStudy"
//* ^context[+].type = #element
//* ^context[=].expression = "DiagnosticReport"
* value[x] only markdown


Profile: LiteralCodeableReference
Parent: CodeableReference
Id: literal-codeable-reference
Title: "Literal Coded Reference"
Description: "abstract profile to ensure the reference portion of a codeable reference is used, and that the reference is a literal reference to some resource in a bundle"
* ^abstract = true
* reference 1..1 MS
* insert PQReference(reference)

RuleSet: PQReference(path)
* {path} only LiteralReference
  * ^type.aggregation = #bundled

RuleSet: PQCodeableReference(path)
* {path} only LiteralCodeableReference
  * ^type.aggregation = #bundled

Profile: LiteralReference
Parent: Reference
Id: literal-reference
Title: "Literal Reference"
Description: "abstract profile to ensure the reference is always a literal reference. Used in conjuction with a rule set to ensure every reference is also bundled"
* ^abstract = true
* reference 1..1 MS

Profile: CodeableConceptTextOnly
Parent: CodeableConcept
Id: codeable-concept-text-only
Title: "Text Only Codeable Concept"
Description: "abstract profile for the common scenario where only the text field is used and is required. Doesn't stop the coding portion from being used but it will not be parsed"
* ^abstract = true
* text 1..1 MS

---

// File: input/images-source/allSubstance.plantuml

@startuml allSubstance
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "eCTD Drug Substance Bundle" as NODES {

    node "CodedOrganization" as NSO {

        object "**Parent:** Organization" as objAu {
            **Reference:**
            [[StructureDefinition-cmc-organization.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
        }
    }

    node "ExcipientRaw" as N2all1 {

        object "**Parent:** SubstanceDefinition" as objall22 {
            **Reference:**
            [[StructureDefinition-pqcmc-excipient.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-source-type-terminology.html Source Type Terminology]]
            [[ValueSet-substance-classification.html Substance Classification]]
            [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
        }
    }
    node "QualitySpecification" as N2all {

        object "**Parent:** PlanDefinition" as objall2 {
            **Reference:**
            [[StructureDefinition-pqcmc-quality-specification.html]]
            **ValueSets**
            [[ValueSet-pqcmc-specification-status-terminology.html Specification Status Terminology]]
            [[ValueSet-pqcmc-test-category-terminology.html Test Category Terminology]]
            [[ValueSet-pqcmc-test-method-origin-terminology.html Test Method Origin Terminology]]
            [[ValueSet-pqcmc-test-usage-terminology.html Test Usage Terminology]]
            [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
        }
        object "**Extensions**" as objallQSEx {
            Approval Status
            Additional Information
            TargetRange
        }
        objall2 <|-- objallQSEx
    }

    node "DrugSubstanceNomenclatureMolecularStructure-DrugSubstanceCharacterisation" as NN {

        object "**Parent Profile:** SubstanceDefinition" as obj33 {
            **Reference:**
            [[StructureDefinition-pqcmc-drug-substance-nomenclature-structure.html]]
            **ValueSets:**
            [[ValueSet-substance-classification.html Substance Classification]]
            [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
            Chemical Structure Data File Type Terminology
            Substance Name Type
        }
    }

    node "ImpuritySubstance" as N6 {

        object "**Parent:** SubstanceDefinition" as obj2 {
            **Reference:**
            [[StructureDefinition-pqcmc-drug-product-substance-impurity.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-impurity-classification-terminology.html Impurity Classification Terminology]]
        }
    }
    node "GraphicReference" as NB64 {

        object "**Parent:** Base64DocumentReference"  as obj64 {
            **Reference:**
            [[StructureDefinition-pqcmc-graphic-reference.html]]
        }
    }

    node "PolymorphicForm" as N2 {

        object "**Parent:** SubstanceDefinition" as obj2poly {
            **Reference:**
            [[StructureDefinition-pqcmc-polymorphic-form.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
            Chemical Structure Data File Type Terminology
        }
    }

    node "StructureReference" as NBstruc {

        object "**Parent:** Base64DocumentReference"  as objb64 {
            **Reference:**
            [[StructureDefinition-pqcmc-structure-reference.html]]
        }
    }


    NN -[#darkred]-> N2
    NN -[#darkred]-> NB64
    NN -[#darkred]-> NBstruc
    NN -[#darkred]-> N6
    N2 -[#darkred]-> NB64
    N2 -[#darkred]-> NBstruc
    NN -[#darkred]-> NSO
    N2all1 -[#darkred]-> NSO
    N2all -[#darkred]-> N2all1
    N6 -[#darkred]-> NB64
    N6 -[#darkred]-> NBstruc
}


@enduml


---

// File: input/images-source/BatchAnalysis.plantuml

@startuml BatchAnalysis
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle true
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-sp4454.html eCTD Heading 3.2.P.5.4 and 3.2.S.4.4 Batch Analysis Bundle]]" as NODES {




  node "DrugProductBatch" as NN {

    object "**Parent:** Medication" as obj3 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-instance.html]]
      **ValueSets:**
      [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
      Expiration Date Classification Terminology
      [[ValueSet-pqcmc-batch-utilization-terminology.html Batch utilization Terminology]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
      [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
      [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]

    }

    object "**Extensions**" as objExsBatch  {
      Manufacturing Date
      Manufacturing Date Description
      Assigned Manufacturer
      Expiration Date Classification
      Batch Utilization
      Batch Size
      Additional Information
      Container Closure System Description
      Container Type
      Container Lot Number
      Container Fill per Container Size
      Container
    }
    objExsBatch *-- obj3
  }
  node "BatchAnalysis" as N2 {


    object "**Parent:** DiagnosticReport" as obj2 {
      **Reference:**
      [[StructureDefinition-pqcmc-batch-analysis.html]]
    }
    object "**Extensions**" as objQSEx {
      Quality Specification Reference

    }
    obj2 *-- objQSEx
  }


  node "DrugSubstanceBatch" as NNS {

    object "**Parent:** Substance" as obj4 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-substance-batch.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-batch-utilization-terminology.html Batch utilization Terminology]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
      [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
      [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]
    }
    object "**Extensions**" as objExs2 {
      Manufacturing Date
      Manufacturing Date Description
      Assigned Manufacturer
      Batch Utilization
      Batch Size
      Additional Information
      Retest Date Classification
      Container Closure System Description
      Container Type
      Container Lot Number
      Container Fill per Container Size
      Container
    }

    objExs2 *-- obj4
  }

  node "ResultObservation" as NNOBS {

    object "**Parent:** Observation" as observ3 {
      **Reference:**
      [[StructureDefinition-pq-result-observation.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-conformance-to-criteria-terminology.html Conformance Criteria Terminology]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
      [[ValueSet-pqcmc-test-category-terminology.html Test Category Terminology]]
    }
    object "**Extensions**" as objExsObserv  {
      actualpulldate
      interpretationCode
      replicate
    }
    objExsObserv *-- observ3
  }

  node "MultipleReplicatesResultObservation" as NNstage {

    object "**Parent:** Observation" as observS {
      **Reference:**
      [[StructureDefinition-pq-additional-stage-result-observation.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-conformance-to-criteria-terminology.html Conformance Criteria Terminology]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
    }
    object "**Extensions**" as objExsStageObs  {
      actualpulldate
      interpretationCode
      replicate
    }

    objExsStageObs *-- observS
  }

  node "EctdCompositionSP4151" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-sp4454.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }
  }
  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }
  diamond CH

  N1 -[#darkred]-> CH
  N1 -[#darkred]-> N2
  N1 -[#darkred]-> NSO
  CH -[#green]-> NNS
  CH -[#green]-> NN
  NNS -[#darkred]-> NSO
  NN -[#darkred]-> NMFG
  N2 -[#darkred]-> CH
  N2 -[#darkred]-> NSO
  N2 -[#darkred]-> NNOBS
  NNOBS -[#darkred]-> NSO
  NNOBS -[#darkred]-> NNstage
  NNstage -[#darkred]-> NSO
}
@enduml


---

// File: input/images-source/BatchForm.plantuml

@startuml BatchForm
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32p32.html eCTD Heading 3.2.P.3.2 Batch Formula Bundle]]" as NODES {


  node "EctdComposition32P32" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-32p32.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }

  }
  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }

  node "DrugProductIngredient" as NNgred {

    object "**Parent:** Ingredient" as obj10 {
      **Reference:**
      [[StructureDefinition-pqcmc-dp-ingredient.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Percentage Units]]
    }
  }

  node "SubstanceDefinitionHandle" as NNS {

    object "**Parent:** SubstanceDefinition" as obj4 {
      **Reference:**
      [[StructureDefinition-pqcmc-routine-drug-substance.html]]
      **ValueSets:**
      [[ValueSet-substance-classification.html Substance Classification]]
      [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
    }

  }

  node "ExcipientRaw" as NNSEx {

    object "**Parent:** SubstanceDefinition" as obj42 {
      **Reference:**
      [[StructureDefinition-pqcmc-excipient.html]]
      **ValueSets:**
      [[ValueSet-substance-classification.html Substance Classification]]
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Sponsor Identifier Type Terminology]]
      [[ValueSet-pqcmc-source-type-terminology.html Source Type Terminology]]
    }

  }

  node "BatchFormulaMedicinalProduct" as NN2 {

    object "**Parent:** MedicinalProductDefinition" as obj32 {
      **Reference:**
      [[StructureDefinition-pqcmc-batch-formula-product.html]]
      **ValueSets:**
      [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
      [[ValueSet-spl-drug-route-of-administration-terminology.html Drug Route Of Administration Terminology]]
      [[ValueSet-pqcmc-name-part-terminology.html Name Part Terminology]]
    }
  }

  node "BatchFormula" as NN {

    object "**Parent:** ManufacturedItemDefinition" as obj3 {
      **Reference:**
      [[StructureDefinition-pqcmc-product-batch-formula.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-manufactured-dose-form-terminology.html Manufactured Dose Form Terminology]]
      [[ValueSet-pqcmc-product-part-type.html Product Part Type Terminology]]
      [[ValueSet-pqcmc-batch-utilization-terminology.html Batch utilization Terminology]]
      [[ValueSet-pqcmc-non-percentage-units.html Non-Percentage Units]]
      [[ValueSet-pqcmc-percentage-units.html Percentage Units]]
      [[ValueSet-pqcmc-product-part-ingredient-physical-location.html Ingredient Location Terminology]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]

    }

    object "**Extensions**" as objExs2 {
      [[StructureDefinition-pq-product-batch-ingredient-extension.html Product Batch Ingredient Extension]]
      [[StructureDefinition-pq-product-batch-strength-textual-extension.html Product Batch Strength Textual Extension]]
      [[StructureDefinition-pq-additional-info-extension.html Additional Information]]
    }

    obj3 *-- objExs2
  }
  N1 -[#darkred]--> NSO
  N1 -[#darkred]-> NN2
  NNS -[#darkred]-> NSO
  NN -[#darkred]-> NSO
  NN -[#darkred]-> NNgred
  NN2 -[#darkred]-> NN
  NNgred -[#darkred]-> NNS
  NNgred -[#darkred]->NNSEx
  NNSEx -[#darkred]-> NSO
}
@enduml

---

// File: input/images-source/CharacImprity.plantuml

@startuml CharacImprity
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32p55.html eCTD Heading 3.2.P.5.5 Characterisation of Impurities Bundle]]" as NODES {


  node "EctdComposition32P55" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-32p55.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }
  }
  node "GraphicReference" as NB64 {

    object "**Parent Profile:** Base64DocumentReference"  as obj64 {
      **Reference:**
      [[StructureDefinition-pqcmc-graphic-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-graphical-file-types.html Graphical File Types]]
    }
  }
  node "StructureReference" as NBstruc {

    object "**Parent Profile:** Base64DocumentReference"  as objb64 {
      **Reference:**
      [[StructureDefinition-pqcmc-structure-reference.html]]
       **ValueSets:**
      [[ValueSet-pqcmc-structure-data-types.html Structure Data Types]] 
    }
  }

  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }

  node "DrugProductwithImpurities" as NN {

    object "**Parent:** MedicinalProductDefinition" as obj3 {

      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-with-impurities.html]]
      **ValueSets:**
      [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
      [[ValueSet-spl-drug-route-of-administration-terminology.html Drug Route Of Administration Terminology]]
      [[ValueSet-pqcmc-name-part-terminology.html Name Part Terminology]]
    }
  }

  node "ImpuritySubstance" as N6 {

    object "**Parent:** SubstanceDefinition" as obj2 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-substance-impurity.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-impurity-classification-terminology.html Impurity Classification Terminology]]
      [[ValueSet-pqcmc-analytical-instrument-data-types.html Analytical Instrument Data File Types]]
    }
  }
  N1 -[#darkred]-> NSO
  NN -[#darkred]-> N6
  N1 -[#darkred]-> NN
  N6 -[#darkred]-> NB64
  N6 -[#darkred]-> NBstruc

}
@enduml


---

// File: input/images-source/ContainerClosure.plantuml

@startuml ContainerClosure
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32p70.html eCTD Heading 3.2.P.7 Container Closure System Bundle]]" as NODES {

    node "EctdComposition32P7" as N1 {

        object "**Parent:** Composition" as obj1 {
            **Reference:**
            [[StructureDefinition-ectd-composition-32p70.html]]
            **ValueSets:**
            [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
        }

    }
    node "DrugProductContainerClosure" as N21 {

        object "**Parent:** MedicinalProductDefinition" as obj22 {
            **Reference:**
            [[StructureDefinition-pqcmc-drugproduct-container-closure.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
            [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]
            [[ValueSet-pqcmc-name-part-terminology.html PQCMC Name Part Terminology]]
        }
        object "**Extensions**" as objEx {
            containerClosure
        }
        obj22 *-- objEx
    }
    node "Base64DocumentReference" as NB64 {

        object "**Parent Profile:** DocumentReference" as obj64 {

            **Reference:**
            [[StructureDefinition-cmc-document-reference.html]]
        }

    }
    node "CodedOrganization" as NSO {

        object "**Parent:** Organization" as objAu {
            **Reference:**
            [[StructureDefinition-cmc-organization.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
        }
    }
}

N1 -[#darkred]-> N21
N1 -[#darkred]-> NSO
objEx -[#darkred]-> NB64
@enduml

---

// File: input/images-source/legend.plantuml

@startuml legend
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "Bundle" as NODES {
  node "A Profile on a resource" as Nameprofile {
    object "**Parent:** Name of Resource or 'Profile' name if parent is a profile" as objcs {
      **ValueSets:**
      Terminology 1
      Terminology 2
      Terminology 3
    }
  }

  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }

  diamond CH

  node "Example Profile" as NN {

    object "**Parent:** a Resource" as obj3 {
      **ValueSets:**
      Terminology 1
      Terminology 2
      Terminology 3
      ...
    }
    object "**Extensions**" as objExs {
      extension 1
      extension 2
      ...
    }
    obj3 *-- objExs : Resource supported with extensions

  }

  node "Profile on a resource.  All eCTD bundles have a composition profile" as N1 {

    object "**Parent:** Composition" as obj1 {
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }

  }

  node "Another Profile on a resource" as NN3 {

    object "**Parent:** a Resource" as obj33 {
      **ValueSets:**
      Terminology 1
      Terminology 2
      ...
    }
  }

  N1 -[#darkred]-> NSO
  NN -[#darkred]-> CH : A profile can have a choice of reference profiles
  CH -[#green]-> Nameprofile
  CH -[#green]-> NN3
  N1 -[#darkred]-> NN :  Relationship between profiles.  There can be many profiles and relationships between them.
}
@enduml

---

// File: input/images-source/ProdDesComp.plantuml

@startuml ProdDesComp
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32p10.html eCTD Heading 3.2.P.1 Bundle]]" as NODES {
  node "ContainerClosure" as N21 {

    object "**Parent:** PackagedProductDefinition" as obj22 {
      **Reference:**
      [[StructureDefinition-ContainerClosure.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
      [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]
    }
  }

  node "DrugProductDescription" as N2 {

    object "**Parent:** MedicinalProductDefinition" as obj2 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-description.html]]
      **ValueSets:**
      [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
      [[ValueSet-spl-drug-route-of-administration-terminology.html Drug Route Of Administration Terminology]]
      [[ValueSet-pqcmc-name-part-terminology.html PQCMC Name Part Terminology]]
    }
  }

  node "DrugProductHandle" as N2handle {

    object "**Parent:** MedicinalProductDefinition" as objcross {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-handle.html]]
      **ValueSets:**
      [[ValueSet-spl-drug-route-of-administration-terminology.html Drug Route Of Administration Terminology]]
      [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
      [[ValueSet-pqcmc-name-part-terminology.html PQCMC Name Part Terminology]]
    }
  }

  node "FinishedProduct"as MID {
    object "**Parent:** ManufacturedItemDefinition" as objMID {

      **Reference:**
      [[StructureDefinition-pqcmc-product-part.html]]
      **ValueSets:**
      [[ValueSet-capsule-classification-category.html Capsule Classification Category]]
      [[ValueSet-pqcmc-coating-purpose.html Coating Purpose]]
      [[ValueSet-pqcmc-drug-product-component-function-category-terminology.html Drug Product Component Function Category Terminology]]
      [[ValueSet-pqcmc-excipient-function-terminology.html Excipient Function Terminology]]
      [[ValueSet-pqcmc-manufactured-dose-form-terminology.html Manufactured Dose Form Terminology]]
      [[ValueSet-pqcmc-non-percentage-units.html Non Percentage Units]]
      [[ValueSet-pqcmc-percentage-units.html Percentage Units]]
      [[ValueSet-pqcmc-product-part-ingredient-physical-location.html Product Part Ingredient Physical Location]]
      [[ValueSet-pqcmc-product-part-type.html Product Part Type]]
      [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
      [[ValueSet-pqcmc-release-mechanism.html Release Mechanism]]
      [[ValueSet-pqcmc-release-profile.html Release Profile]]
      [[ValueSet-pqcmc-strength-type-terminology.html Strength Type Terminology]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
    }
    object "**Extensions**" as objMIDExs {
      [[StructureDefinition-pq-amount-ratio.html Amount Ratio]]
    }
    objMID *-- objMIDExs
  }
  node "DrugProductComponent" as NN {

    object "**Parent:** Ingredient" as obj3 {
      **Reference:**
      [[StructureDefinition-pqcmc-component.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-drug-product-component-function-category-terminology.html Drug Product Component Function Category Terminology]]
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Non-Percentage Units]]
      [[ValueSet-pqcmc-percentage-units.html Percentage Units]]
    }
    object "**Extensions**" as objExs {
      [[StructureDefinition-strength-extension.html Strength Extension]]
    }
    obj3 *-- objExs
  }

  node "ComponentSubstance" as NCS {

    object "**Parent:** SubstanceDefinition" as objSubDef {
      **Reference:**
      [[StructureDefinition-pqcmc-component-substance.html]]
      **ValueSets:**
      [[ValueSet-substance-classification.html Substance Classification]]
      [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
      [[ValueSet-pqcmc-source-type-terminology.html Source Type Terminology]]
      [[ValueSet-pqcmc-genc-and-iso-intersect.html GENC and ISO 3166 Intersection]]
      [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
    }
  }

    node "GraphicReference" as NB64 {

    object "**Parent Profile:** Base64DocumentReference"  as obj64 {
      **Reference:**
      [[StructureDefinition-pqcmc-graphic-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-graphical-file-types.html Graphical File Types]]
    }
  }

  node "StructureReference" as NBstruc {

    object "**Parent Profile:** Base64DocumentReference"  as objb64 {
      **Reference:**
      [[StructureDefinition-pqcmc-structure-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-structure-data-types.html Structure Data Types]]
    }
  }
  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }

  node "EctdComposition32P10" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-32p10.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }

  }

  N1 -[#darkred]--> N2
  N1 -[#darkred]--> MID
  N1 -[#darkred]--> NSO
  N1 -[#darkred]--> N21
  N2 -[#darkred]--> N2handle : Only when there is a Co-Packaged Product
  N21 -[#darkred]--> NB64
  N21 -[#darkred]--> N2
  MID -[#darkred]--> NN
  NCS -[#darkred]--> NSO
  NN -[#darkred]--> NCS
  NCS -[#darkred]--> NB64
  NCS -[#darkred]--> NBstruc
}
@enduml

---

// File: input/images-source/Specification.plantuml

@startuml Specification
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-sp4151.html eCTD Heading 3.2.S.4.1 and 3.2.P.4 and 5.1 Specification Bundles]]" as NODES {

  node "CodedOrganization" as NMSpon {

    object "**Parent:** Organization" as objDP {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }
  node "DrugProductHandle" as NN {

    object "**Parent:** MedicinalProductDefinition" as obj3 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-handle.html]]
      **ValueSets:**
      [[ValueSet-spl-drug-route-of-administration-terminology.html Drug Route Of Administration Terminology]]
      [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
      [[ValueSet-pqcmc-name-part-terminology.html PQCMC Name Part Terminology]]
    }
  }
  node "ExcipientRaw" as N21 {

    object "**Parent:** SubstanceDefinition" as obj22 {
      **Reference:**
      [[StructureDefinition-pqcmc-excipient.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
      [[ValueSet-pqcmc-source-type-terminology.html Source Type Terminology]]
      [[ValueSet-substance-classification.html Substance Classification]]
      [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
      [[ValueSet-pqcmc-genc-and-iso-intersect.html GENC and ISO 3166 Intersection]]
    }
  }
    node "EctdCompositionSP4151" as N1 {

      object "**Parent:** Composition" as obj1 {
        **Reference:**
        [[StructureDefinition-ectd-composition-sp4151.html]]
        **ValueSets:**
        [[ValueSet-cmc-specification-types-vs.html "Specification Section Type Terminology"]]
      }
    }

    node "SubstanceDefinitionHandle for API" as NNS {

      object "**Parent:** SubstanceDefinition" as obj4 {
        **Reference:**
        [[StructureDefinition-pqcmc-routine-drug-substance.html]]
        **ValueSets:**
        [[ValueSet-substance-classification.html Substance Classification]]
        [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
        [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]

      }
    }

    diamond CH

    node "QualitySpecification" as N2 {

      object "**Parent:** PlanDefinition" as obj2 {
        **Reference:**
        [[StructureDefinition-pqcmc-quality-specification.html]]
        **ValueSets**
        [[ValueSet-pqcmc-specification-status-terminology.html Specification Status Terminology]]
        [[ValueSet-pqcmc-test-category-terminology.html Test Category Terminology]]
        [[ValueSet-pqcmc-test-method-origin-terminology.html Test Method Origin Terminology]]
        [[ValueSet-pqcmc-test-usage-terminology.html Test Usage Terminology]]
        [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]

      }
      object "**Extensions**" as objQSEx {
        [[StructureDefinition-pq-additional-info-extension.html Additional Information]]
        [[StructureDefinition-pq-hierarchical-level-extension.html Hierarchical Level]]
        [[StructureDefinition-pq-specification-status-extension.html Specification Status]]
        [[StructureDefinition-pq-target-range.html Target Range]]
      }
      obj2 *-- objQSEx
    }

    node "CodedOrganization (manufacturer or supplier)" as NMSpon2 {

      object "**Parent:** Organization" as objDP2 {
        **Reference:**
        [[StructureDefinition-cmc-organization.html]]
        **ValueSets:**
        [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
      }
    }
    N1 -[#darkred]-> N2
    N1 -[#darkred]-> NMSpon

    N2 -[#darkred]--> CH
    CH -[#green]-> N21
    CH -[#green]-> NNS
    CH -[#green]-> NN
    NNS -[#darkred]--> NMSpon2
    N21 -[#darkred]--> NMSpon2
  }
  @enduml

---

// File: input/images-source/Stability.plantuml

@startuml Stability
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle true
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-sp7383.html eCTD Heading 3.2.P.8.3, 3.2.S.7.3 and 3.2.P.4.5 Stability Study Bundle]]" as NODES {


       node "DrugProductBatch" as NN {

              object "**Parent:** Medication" as obj3 {
                     **Reference:**
                     [[StructureDefinition-pqcmc-drug-product-instance.html]]
                     **ValueSets:**
                     [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
                     Expiration Date Classification Terminology
                     Batch utilization Terminology
                     [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
                     [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
                     [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]
              }

              object "**Extensions**" as objExsBatch  {
                     Manufacturing Date
                     Manufacturing Date Description
                     Assigned Manufacturer
                     Expiration Date Classification
                     Batch Utilization
                     Batch Size
                     Additional Information
                     Container Closure System Description
                     Container Type
                     Container Lot Number
                     Container Fill per Container Size
                     Container
              }
              objExsBatch *-- obj3
       }
       diamond CH

       diamond CH3

       node "DrugSubstanceBatch" as NNS {

              object "**Parent:** Substance" as obj4 {
                     **Reference:**
                     [[StructureDefinition-pqcmc-drug-substance-batch.html]]
                     **ValueSets:**
                     Batch utilization Terminology
                     [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
                     [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
                     [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]
              }
              object "**Extensions**" as objExs2 {
                     Manufacturing Date
                     Manufacturing Date Description
                     Assigned Manufacturer
                     Batch Utilization
                     Batch Size
                     Additional Information
                     Retest Date Classification
                     Container Closure System Description
                     Container Type
                     Container Lot Number
                     Container Fill per Container Size
                     Container
              }

              objExs2 *-- obj4
       }
       node "StabilityStudyIntervalReport" as Ninterval {

              object "**Parent:** DiagnosticReport" as objinterval {
                     **Reference:**
                     [[StructureDefinition-pqcmc-stability-study-interval-report.html]]
              }
              object "**Extensions**" as objIntEx {
                     studyInterval
                     Quality Specification Reference
                     Additional Information
              }
              objinterval *-- objIntEx
       }

       node "BatchAnalysis" as N2 {

              object "**Parent:** DiagnosticReport" as obj2 {
                     **Reference:**
                     [[StructureDefinition-pqcmc-batch-analysis.html]]
              }
              object "**Extensions**" as objQSEx {
                     Quality Specification Reference
              }
              obj2 *-- objQSEx
       }

       node "MfgTestSiteOrganization" as NMFG {

              object "**Parent:** Organization" as objDP {
                     **Reference:**
                     [[StructureDefinition-cmc-organization.html]]
                     **ValueSets:**
                     Testing Site and Organization Identifier Type Terminology
              }
       }

       node "StabilitySubStudy" as NSub {

              object "**Parent:** ResearchStudy" as objSub {
                     **Reference:**
                     [[StructureDefinition-pq-stability-sub-study.html]]
                     **ValueSets:**
                     Study Type Terminology
                     Storage Conditions Terminology
                     Storage Condition Category Terminology
                     Container Orientation Terminology
              }

              object "**Extensions**" as objExsSub  {
                     Additional Information
              }
              objExsSub *-- objSub
       }


       node "StabilityStudy" as NMain {

              object "**Parent:** ResearchStudy" as objMain {
                     **Reference:**
                     [[StructureDefinition-pq-stability-study.html]]
                     **ValueSets:**
                     Stability Study Reason Terminology
              }

              object "**Extensions**" as objExsMain  {
                     Study Protocol
                     Additional Information
              }
              objExsMain *-- objMain
       }

       node "StabilitySubStudy" as NSub2 {

              object "Another StabilitySubStudy" as objSub2 {
                     **Reference:**
                     [[StructureDefinition-pq-stability-sub-study.html]]

              }
       }

       node "ResultObservation" as NNOBS {

              object "**Parent:** Observation" as observ3 {
                     **Reference:**
                     [[StructureDefinition-pq-result-observation.html]]
                     **ValueSets:**
                     [[ValueSet-pqcmc-conformance-to-criteria-terminology.html Conformance Criteria Terminology]]
                     [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
                     [[ValueSet-pqcmc-test-category-terminology.html Test Category Terminology]]
                     Test Sub-Category Terminology
                     Interpretation Code Terminology
              }
              object "**Extensions**" as objExsObserv  {
                     actualpulldate
                     interpretationCode
                     replicate
              }
              objExsObserv *-- observ3
       }

       node "MultipleReplicatesResultObservation" as NNstage {

              object "**Parent:** Observation" as observS {
                     **Reference:**
                     [[StructureDefinition-pq-result-observation.html]]
                     **ValueSets:**
                     [[ValueSet-pqcmc-conformance-to-criteria-terminology.html Conformance Criteria Terminology]]
                     [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
                     Interpretation Code Terminology
              }
              object "**Extensions**" as objExsStageObs  {
                     actualpulldate
                     interpretationCode
                     replicate
              }

              objExsStageObs *-- observS
       }

       node "EctdCompositionSP7383" as N1 {

              object "**Parent:** Composition" as obj1 {
                     **Reference:**
                     [[StructureDefinition-ectd-composition-sp7383.html]]
                     **ValueSets:**
                     Code system PQCMC Comp Section Types
              }
       }
       node "CodedOrganization" as NSO {

              object "**Parent:** Organization" as objAu {
                     **Reference:**
                     [[StructureDefinition-cmc-organization.html]]
                     **ValueSets:**
                     Testing Site and Organization Identifier Type Terminology
              }
       }

       CH -[#green]-> NN
       CH -[#green]-> NNS
       CH3 -[#green]-> NN
       CH3 -[#green]-> NNS
       N1 -[#darkred]-> CH
       N1 -[#darkred]-> N2
       N1 -[#darkred]-> NSO
       N2 -[#darkred]-> CH
       N2 -[#darkred]-> NMFG
       N2 -[#darkred]-> NNOBS
       Ninterval -[#darkred]-> CH3
       Ninterval -[#darkred]-> NMFG
       Ninterval -[#darkred]-> NNOBS
       NN -[#darkred]-> NMFG
       NNOBS -[#darkred]-> NMFG
       NNOBS -[#darkred]-> NNstage
       NNS -[#darkred]-> NMFG
       NNstage -[#darkred]-> NMFG
       NSub -[#darkred]-> Ninterval
       N1 -[#darkred]-> NMain
       NSub -[#darkred]-> NSub2
       NSub -[#darkred]-> NMain
}
@enduml

---

// File: input/images-source/StabilitySummary.plantuml

@startuml StabilitySummary
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-sp7181.html eCTD Heading 3.2.S.7.1 and 3.2.P.8.1 Stability Summary Bundle]]" as NODES {

      node "DrugProductHandle" as NN {

            object "**Parent:** MedicinalProductDefinition" as obj3 {
                  **Reference:**
                  [[StructureDefinition-pqcmc-drug-product-handle.html]]
                  **ValueSets:**
                  [[ValueSet-spl-drug-route-of-administration-terminology.html Drug Route Of Administration Terminology]]
                  [[ValueSet-spl-pharmaceutical-dosage-form-terminology.html Pharmaceutical Dosage Form Terminology]]
                  [[ValueSet-pqcmc-name-part-terminology.html PQCMC Name Part Terminology]]
            }
      }
      diamond CH

      node "SubstanceDefinitionHandle for API" as NNS {

            object "**Parent Profile:** DrugSubstance" as obj4 {
                  **Reference:**
                  [[StructureDefinition-pqcmc-routine-drug-substance.html]]
                  **ValueSets:**
                  [[ValueSet-substance-classification.html Substance Classification]]
                  [[ValueSet-pqcmc-org-identifier-type-terminology.html Sponsor Identifier Type Terminology]]
            }
      }

      node "MfgTestSiteOrganization" as NMFG {

            object "**Parent:** Organization" as objDP {
                  **Reference:**
                  [[StructureDefinition-cmc-organization.html]]
                  **ValueSets:**
                  Testing Site and Organization Identifier Type Terminology
            }
      }

      node "StabilitySummary" as NMain {

            object "**Parent:** PlanDefinition" as objMain {
                  **Reference:**
                  [[StructureDefinition-pqcmc-stability-summary.html]]
                  **ValueSets:**
                  [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
                  Storage Conditions Terminology
            }

            object "**Extensions**" as objExs2 {
                  Additional Information
            }

            objMain *-- objExs2
      }

      node "EctdCompositionSP7181" as N1 {

            object "**Parent:** Composition" as obj1 {
                  **Reference:**
                  [[StructureDefinition-ectd-composition-sp7181.html]]
                  **ValueSets:**
                  [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
            }
      }
      node "CodedOrganization" as NSO {

            object "**Parent:** Organization" as objAu {
                  **Reference:**
                  [[StructureDefinition-cmc-organization.html]]
                  **ValueSets:**
                  Testing Site and Organization Identifier Type Terminology
            }
      }

      CH -[#green]-> NN
      CH -[#green]-> NNS
      N1 -[#darkred]-> CH
      N1 -[#darkred]-> NSO
      NN -[#darkred]-> NMFG
      NNS -[#darkred]-> NMFG
      N1 -[#darkred]-> NMain


}
@enduml

---

// File: input/images-source/SubstanceContainer.plantuml

@startuml SubstanceContainer
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32s60.html eCTD Heading 3.2.S.6.0 Container Closure System Bundle]]" as NODES {



  node "EctdComposition32S60" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-32s60.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }

  }
  node "SubstanceContainerClosure" as N21 {

    object "**Parent:** DrugSubstance Profile" as obj22 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-substance-container-closure.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-container-type-terminology.html Container Type Terminology]]
      [[ValueSet-pqcmc-closure-type-terminology.html Closure Type Terminology]]
    }
    object "**Extensions**" as objEx {
      containerClosure
    }
    obj22 <|-- objEx
  }
  node "Base64DocumentReference" as NB64 {

    object "**Parent:** DocumentReference"  as obj64 {

      **Reference:**
      [[StructureDefinition-cmc-document-reference.html]]
    }

  }
  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }
}

N1 -[#darkred]-> N21
N1 -[#darkred]-> NSO
objEx -[#darkred]-> NB64
@enduml

---

// File: input/images-source/SubstanceControlMat.plantuml

@startuml SubstanceControlMat
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32s23.html eCTD Heading 3.2.S.2.3 Control of Materials Bundle]]" as NODES {

    node "QualitySpecification" as N2 {

        object "**Parent:** PlanDefinition" as obj2 {
            **Reference:**
            [[StructureDefinition-pqcmc-quality-specification.html]]
            **ValueSets**
            [[ValueSet-pqcmc-specification-status-terminology.html Specification Status Terminology]]
            [[ValueSet-pqcmc-test-category-terminology.html Test Category Terminology]]
            [[ValueSet-pqcmc-test-method-origin-terminology.html Test Method Origin Terminology]]
            [[ValueSet-pqcmc-test-usage-terminology.html Test Usage Terminology]]
            [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
        }
        object "**Extensions**" as objQSEx {
            [[StructureDefinition-pq-additional-info-extension.html Additional Information]]
            [[StructureDefinition-pq-hierarchical-level-extension.html Hierarchical Level]]
            [[StructureDefinition-pq-specification-status-extension.html Specification Status]]
            [[StructureDefinition-pq-target-range.html Target Range]]
        }
        obj2 <|-- objQSEx
    }
    node "EctdComposition32S23" as N1 {

        object "**Parent:** Composition" as obj1 {
            **Reference:**
            [[StructureDefinition-ectd-composition-32s23.html]]
            **ValueSets:**
            [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
        }
    }

    node "ExcipientRaw" as N21 {

        object "**Parent:** SubstanceDefinition" as obj22 {
            **Reference:**
            [[StructureDefinition-pqcmc-excipient.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
            [[ValueSet-pqcmc-source-type-terminology.html Source Type Terminology]]
            [[ValueSet-substance-classification.html Substance Classification]]
            [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
            [[ValueSet-pqcmc-genc-and-iso-intersect.html GENC and ISO 3166 Intersection]]
        }
    }
    node "CodedOrganization" as NSO {

        object "**Parent:** Organization" as objAu {
            **Reference:**
            [[StructureDefinition-cmc-organization.html]]
            **ValueSets:**
            [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
        }
    }

    node "SubstanceDefinitionHandle" as NN {

        object "**Parent:** SubstanceDefinition" as obj3 {
            **Reference:**
            [[StructureDefinition-pqcmc-routine-drug-substance.html]]
            **ValueSets:**
            [[ValueSet-substance-classification.html Substance Classification]]
            [[ValueSet-pqcmc-quality-benchmark-terminology.html Quality Benchmark Terminology]]
            [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
        }
    }

    N1 -[#darkred]--> N2
    N2 -[#darkred]-> N21
    N1 -[#darkred]--> NSO
    N1 -[#darkred]--> NN
    N21 -[#darkred]-> NSO
}
@enduml

---

// File: input/images-source/SubstanceGeneral.plantuml

@startuml SubstanceGeneral
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32s10.html eCTD Heading 3.2.S.1 Bundle]]" as NODES {

  node "DrugSubstanceNomenclatureMolecularStructure" as NN {

    object "**Parent:** SubstanceDefinition" as obj3 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-substance-nomenclature-structure.html]]
      **ValueSets:**
      [[ValueSet-substance-classification.html Substance Classification]]
      [[ValueSet-pqcmc-units-of-measure.html Units Of Measure]]
      [[ValueSet-pqcmc-chemical-structure-datafile-type-terminology.html Chemical Structure Data File Type Terminology]]
      [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
      [[ValueSet-pqcmc-representation-types.html Representation Types]]
    }
  }

  node "EctdComposition32S10" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-32s10.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }

  }
  node "PolymorphicForm" as N2 {

    object "**Parent:** SubstanceDefinition" as obj2 {
      **Reference:**
      [[StructureDefinition-pqcmc-polymorphic-form.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-chemical-structure-datafile-type-terminology.html Chemical Structure Data File Type Terminology]]
      [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
      [[ValueSet-pqcmc-representation-types.html Representation Types]]
    }
  }
  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }

  node "GraphicReference" as NB64 {

    object "**Parent Profile:** Base64DocumentReference"  as obj64 {
      **Reference:**
      [[StructureDefinition-pqcmc-graphic-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-graphical-file-types.html Graphical File Types]]
    }
  }

  node "StructureReference" as NBstruc {

    object "**Parent Profile:** Base64DocumentReference"  as objb64 {
      **Reference:**
      [[StructureDefinition-pqcmc-structure-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-structure-data-types.html Structure Data Types]]
    }
  }
}

N1 -[#darkred]-> NN
NN -[#darkred]-> N2
NN -[#darkred]-> NB64
NN -[#darkred]-> NBstruc
N2 -[#darkred]-> NB64
N2 -[#darkred]-> NBstruc
N1 -[#darkred]-> NSO
NN -[#darkred]-> NSO
}
@enduml

---

// File: input/images-source/SubstanceImpurity.plantuml

@startuml SubstanceImpurity
allowmixing
'Mixed model of use case and object
skinparam svgDimensionStyle false
skinparam ObjectBackgroundColor LightYellow
skinparam ObjectBorderColor #A80036
skinparam activityDiamondBorderColor #A80036
skinparam activityDiamondBackgroundColor lawnGreen
skinparam ClassBorderThickness 4

package "[[StructureDefinition-cmc-ectd-document-32s3.html 3.2.S.3 eCTD Heading Characterisation Bundle]]" as NODES {

  node "EctdComposition32S3" as N1 {

    object "**Parent:** Composition" as obj1 {
      **Reference:**
      [[StructureDefinition-ectd-composition-32s3.html]]
      **ValueSets:**
      [[ValueSet-cmc-comp-section-types-vs.html Code system PQCMC Comp Section Types]]
    }
  }
  node "CodedOrganization" as NSO {

    object "**Parent:** Organization" as objAu {
      **Reference:**
      [[StructureDefinition-cmc-organization.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-org-identifier-type-terminology.html Organization-Site Identifier Terminology]]
    }
  }

  node "DrugSubstanceCharacterisation" as NN {

    object "**Parent:** SubstanceDefintion" as obj3 {

      **Reference:**
      [[StructureDefinition-pqcmc-drug-substance-characterisation.html]]
      **ValueSets:**
      [[ValueSet-substance-classification.html Substance Classification]]
      [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
    }
  }

  node "ImpuritySubstance" as N6 {

    object "**Parent:** SubstanceDefinition" as obj2 {
      **Reference:**
      [[StructureDefinition-pqcmc-drug-product-substance-impurity.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-substance-name-type.html Substance Name Type]]
      [[ValueSet-pqcmc-representation-types.html Representation Types]]
      [[ValueSet-pqcmc-impurity-classification-terminology.html Impurity Classification Terminology]]
      [[ValueSet-pqcmc-chemical-structure-datafile-type-terminology.html Chemical Structure Data File Type Terminology]]
    }
  }
  node "GraphicReference" as NB64 {

    object "**Parent Profile:** Base64DocumentReference"  as obj64 {
      **Reference:**
      [[StructureDefinition-pqcmc-graphic-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-graphical-file-types.html Graphical File Types]]
    }
  }

  node "StructureReference" as NBstruc {

    object "**Parent Profile:** Base64DocumentReference"  as objb64 {
      **Reference:**
      [[StructureDefinition-pqcmc-structure-reference.html]]
      **ValueSets:**
      [[ValueSet-pqcmc-structure-data-types.html Structure Data Types]]
    }
  }

  N1 -[#darkred]-> NSO
  NN -[#darkred]-> N6
  N1 -[#darkred]-> NN
  N6 -[#darkred]-> NB64
  N6 -[#darkred]-> NBstruc
}
@enduml

---

