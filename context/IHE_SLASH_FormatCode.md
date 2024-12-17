// File: input/pagecontent/background.md


The code specifying the detailed technical format of the document. Along with the mimeType, it should provide sufficient information to allow potential consumer to know if it will be able to process the document. 

The mimeType indicates the base format; the formatCode indicates the detailed-level technical structure and profiled constraints. Together with the mimeType, the formatCode used shall be sufficiently specific to ensure processing/display by identifying a document encoding, structure and template (e.g., for a CDA Document, the fact that it complies with a CDA schema, possibly a template and the choice of a content-specific style sheet).

The formatCode is often an indicator of the IHE Document Content Profile to which the document conforms.

The mimeTypeSufficient formatCode of EV("urn:ihe:iti:xds:2017:mimeTypeSufficient", "1.3.6.1.4.1.19376.1.2.3") may be used when the mimeType is sufficient to identify the technical format of the document, or where there are no constaints imposed on the content by a profile.
Format codes may be specified by multiple organizations. Format codes for Document Content Profiles defined by the ITI domain shall be in URN format and have names with the prefix
`urn:ihe:iti:`

Format codes defined by other IHE domains shall have names with the prefix

`urn:ihe:{domain initials}:`

IHE and HL7 have worked together to transition the HL7 defined codes for C-CDA into the HL7 codesystem management. Thus these codes are now indicated as deprecated in the IHE CodeSystem, as they now exist in 
[HL7 CodeSystem](https://terminology.hl7.org/CodeSystem-v3-HL7DocumentFormatCodes.html) 
`http://terminology.hl7.org/CodeSystem/v3-HL7DocumentFormatCodes`. 
Note that prior versions of the HL7 CodeSystem were known as `http://terminology.hl7.org/CodeSystem/v3-HL7DocumentFormatCodes`. 

Prior versions of IHE codes were published on the IHE Wiki, and the CodeSystem were known as <code>http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem</code>. This canonical URI was changed due to the fact that it improperly included `ValueSet` in the canonical URI path when it was actually a `CodeSystem`.

IHE co-chairs must follow the instructions for submitting change to the IHE FormatCode vocabulary as documented on the [IHE GitHub repository](https://github.com/IHE/FormatCode) for this FormatCode implementation guide.


---

// File: input/pagecontent/index.md


This Implementation Guide publishes the IHE vocabulary for FormatCode and the IHE managed ValueSet for FormatCode. Given that the FormatCode is contributed to by many IHE domains, this IG is dedicated to the publication and management of the FormatCode vocabulary.

### Technical Overview

FormatCode is a metadata element for identifying the technical format that a document follows. This is related to mimeType, but is more specific to the content requirements than the encoding requirement. Therefore a document following a FormatCode may have many mimeType encodings. The FormatCode is also related to the document type (e.g. LOINC document type), but is more specific to the requirements (constraints) of the content.

The main sections of this IG are:
- [Background](background.html) - provides more detail on what a FormatCode is and how they are maintained
- [The IHE defined Codes](CodeSystem-formatcode.html) - the definition of the codes defined by IHE for use in FormatCode
- [The IHE defined ValueSet](ValueSet-formatcode.html) - the valueset of codes for FormatCode use.

### Download

- [this entire guide](full-ig.zip) 
- the FormatCode CodeSystem and ValueSet in [json](definitions.json.zip), or [xml](definitions.xml.zip)
- The source code for this Implementation Guide can be found on [IHE GitHub repository for FormatCode](https://github.com/IHE/FormatCode)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

#### Globals

{% include globals-table.xhtml %}


---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/FormatCode/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/FormatCode/issues

---

