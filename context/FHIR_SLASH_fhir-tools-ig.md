// File: input/pagecontent/format-extensions.md


The way that a content model is represented in JSON or XML is fixed for FHIR resources 
and data types. But when logical models are defined that represent existing JSON 
and XML formats, the FHIR rules do not apply. The extensions documented on this page 
define alternative rules that apply to logical models. They are never used in FHIR
resources.

### Type related Extensions

These extensions control how the type is chosen when there's an choice of types.

For FHIR resources, the type of a choice element is indicated by fixing the name of the 
type to the element name. So e.g. if the element name is ```value[x]``, then the name 
of the element with be ```valueString``` if it has the type of string. 

There are two other ways to do this: by xsi:type and by a type specifier.

xsi:type is specified by the ElementDefinition.representation value of ```typeAttr```.
If this is set, the type will be determined by xsi:type. If there's a default type
then this can be specified by the 
```http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name```
extension.

Alternatively, in some JSON files, there's no property that defines the type; instead,
the type is determined by the property of some other value. The extension 
```http://hl7.org/fhir/tools/StructureDefinition/type-specifier``` exists for this purpose.
it has two sub-extensions, an expression and a type.

The expression is a FHIRPath expression that determines what the type is, that is 
evaluated from the root of the JSON object being parsed. This is tricky, since the 
resource is stil being parsed at this point, so the FHIRPath expression must be 
confined to the parts of the resource already parsed (by the logical model definition).

The type is a canonical URL reference to a logical model. If there is more than one 
type specifier, they are evaluated in order and the first match is used.

### Extension related Extensions

The extensions control how and when elements can be extended. The base FHIR extension 
model is that the type Element defines an extension that has a pair of properties, a 
url which references a definition, and a value. Then this url/value pair is constrained
to define particular extensions in applicable profiles, or an application just provides 
the url/value pair directly. Logical Models that inherit from the Element type inherit
this extension mechanism.

The Element type inherits from Base. Logical Models that inherit from Base do not have 
any inherent extensions. Note that the type Base is implicitly defined in FHIR R4 and 
is made explicit in R5. 

The FHIR Extension ```http://hl7.org/fhir/tools/StructureDefinition/elementdefinition-extension-style```
defines how extensions are managed. In the absence of the extension, there are no extensions.
If the extension is present, it may have one of the following values:

* **none**: No extensions
* **fhir-extensions**: fhir-extensions
* **named-elements**: The type can be extended by having additional named elements, where the name is from the ```elementdefinition-xml-name``` or ```elementdefinition-json-name``` for xml and json respectively"

### JSON Extensions

These elements control the JSON format. They're mainly used for describing CDSHooks format using StructureDefinitions.

```http://hl7.org/fhir/tools/StructureDefinition/elementdefinition-json-name```

The name of the json property in the instance. This has two uses: if the actual json name is not 
a legal ElementDefinition path name, or if there is a need to define a name for the type itself,
for use with ```named-elements``` - see above.

```http://hl7.org/fhir/tools/StructureDefinition/json-property-key```:

if a property key is specified on a repeating JSON element, then the element 
is represented as a JSON object rather than a JSON array, and there will be 
a JSON property for each entry in the array with a name which is the value of 
the key property extension. 

The property-key approach can only be used when there is an element that repeats,
which has two properties, a key and a value (though they don't have to be called that).
The key must be a primitive type (typically a ```code```) that can't have extensions.
The value sub-element can have any type.

```http://hl7.org/fhir/tools/StructureDefinition/json-empty-behavior```

if an array property is empty, then it most normally be omitted. This extension
can modify this rule to specify that the array may or must be present and empty instead of omitted.

```http://hl7.org/fhir/tools/StructureDefinition/json-nullable```

if an object property is null, then it most normally be omitted. This extension
can modify this rule to specify that the object may or must be present a null instead of omitted.

### XML Extensions

These elements control the XML format. They're mainly used to define the CDA format using StructureDefinitions

```http://hl7.org/fhir/StructureDefinition/structuredefinition-xml-type```

The schema type associated with the FHIR primitive type

```http://hl7.org/fhir/StructureDefinition/elementdefinition-xml-name```

The name of the sml element in the instance. This has two uses: if the actual xml name is not 
a legal ElementDefinition path name (e.g. includes '.'), or if there is a need to define a name for the type itself,
for use with ```named-elements``` - see above.

```http://hl7.org/fhir/StructureDefinition/elementdefinition-namespace```

The XML namespace for the element 

```http://hl7.org/fhir/StructureDefinition/structuredefinition-xml-no-order```

Elements must appear in the XML in the order they are defined in a logical model.  
This extension can modify this rule to specify that elements can appear in any 
order.

### Date/time Formats

```http://hl7.org/fhir/tools/StructureDefinition/elementdefinition-date-format```

The default date/time format in all formats (XML, JSON, RDF) is the XML schema 
date/time type. Logical models can use this extension to specify an alternative 
date foramt. The following values are legal:

* YYYYMMDDHHMMSS.UUUU[+|-ZZzz] (v2/v3 date format)


---

// File: input/pagecontent/other.md


{% include dependency-table.xhtml %}

{% include globals-table.xhtml %}

{% include cross-version-analysis.xhtml %}

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/page-factories.md

The IG publisher can be configured to produce a page for each item in a list. 
There can be multiple page factories. Each page factory is registered as a 
parameter using the ```page-factory``` parameter.

Each page factory is a reference to a page factory control file which is a json file 
with the following format:

```json
{
  "item-factory" : "{code}",
  "source-file" : "{path}",
  "variables" : [{
    "name" : "{code}",
    "transform" : "{code}"
  }],  
  "generated-file-name": "{filename}",
  "stated-file-name": "{filename}",
  "parent-page" : "{filename}",
  "generation" : "{code}",
  "page-title" : "{string}"
}
```

For each item in the factory list, an output file will be produced.

## Documentation:

* **item-factory**: The kind of item being iterated. See below for possible factory values
* **source-file**: the name of the file (relative path in the repository) for the source to produce
* **variables**: (optional) a list of variables to replace in the source file. See below.
the value of a string to replace in the content of the source file. Any occurrences of this string value with be replaced with the item value. If this is not present, no search/replace will take place
* **generated-file-name**: the name of the file to produce in the page directory. The filename will include %item%, and this will be replaced with the item value
* **stated-file-name**: the name of the file to put in the IG (not necessarily the same as the generated file name - e.g. may have a different extension). The filename will include %item%, and this will be replaced with the item value
* **parent-page**: the name of the page to which the generated pages will be added as child pages in the ToC
* **generation**: THe value to put in the generation entry for the page
* **page-title**:  the title for the page file in the ToC. The filename may include %item%, and this will be replaced with the item value

## Possible Factory types:

* **types**: a list of all types defined in FHIR
* **resources**: a list of all resources defined in FHIR
* **datatypes**: a list of all datatypes defined in FHIR
* **canonicals**: a list of all canonical resources defined in FHIR
* **versions**: A list of all the official release versions
* **manual**: A list of strings as provided in the json property **items** (an array of strings)

## Variables

A list of variables to replace in the source file. Each variable
has a name and a transform. The page factory performs the transform
on the item being iterated, and than replaces all occurences of 
the text string given in the name with the trassformed value.

Known transforms:

* **n/a**: No transform - use the value as is
* **lowercase**: Convert the item to all lower case 
* **uppercase**: Convert the item to all upper case 
* **version-title**: For versions, convert to R2 / R3 / R4 etc 
* **tla**: For resource names, look up the known tla for the version



---

