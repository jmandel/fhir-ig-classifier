File: repos/HL7_SLASH_fhir-shc-vaccination-ig/sushi-config.yaml

---
id: hl7.fhir.uv.shc-vaccination
canonical: http://hl7.org/fhir/uv/shc-vaccination
name: SMARTHealthCardsVaccinationAndTestingIG
title: 'SMART Health Cards: Vaccination &amp; Testing Implementation Guide'
description: Defines the clinical and patient information contained within a SMART
  Health Card (SHC) related to vaccination and lab results related to an infectious
  disease like COVID-19.
status: draft
publisher:
  name: HL7 International / Public Health
  url: http://www.hl7.org/Special/committees/pher
  email: vci-ig@mitre.org
version: 1.0.0
fhirVersion: 4.0.1
dependencies:
  cards.smarthealth.terminology:
    uri: https://terminology.smarthealth.cards/ImplementationGuide/cards.smarthealth.terminology
    version: current
    hl7.fhir.uv.extensions: current
extension:
- url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
  valueCode: pher
copyrightYear: 2021+
license: Apache-2.0
releaseLabel: STU1 Release
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001
parameters:
  path-liquid: liquid
  active-tables: true
  excludettl: true
  excludexml: true
  special-url:
  - https://smarthealth.cards/ial
  no-narrative:
  - Bundle/example-bundle-immunization-covid
  - Bundle/example-bundle-immunization-covid-2
  - Immunization/example-immunization-covid-1a
  - Immunization/example-immunization-covid-2a
  - Immunization/example-immunization-covid-3a
  - Immunization/example-immunization-covid-1b
  - Immunization/example-immunization-covid-2b
  - Immunization/example-immunization-covid-3b
  - Patient/example-patient-covid-1a
  - Patient/example-patient-covid-1b
  - Patient/example-patient-covid-1c
  - Patient/example-patient-covid-1d
  - Bundle/example-bundle-immunization-mpox
  - Bundle/example-bundle-immunization-mpox-2
  - Immunization/example-immunization-mpox-1a
  - Immunization/example-immunization-mpox-2a
  - Immunization/example-immunization-mpox-1b
  - Immunization/example-immunization-mpox-2b
  - Bundle/example-bundle-lab-test-results-covid
  - Bundle/example-bundle-lab-test-results-covid-2
  - Bundle/example-bundle-lab-test-results-covid-3
  - Bundle/example-bundle-lab-test-results-covid-4
  - Observation/example-observation-covid-1a
  - Observation/example-observation-covid-1b
  - Observation/example-observation-covid-1c
  - Observation/example-observation-covid-1d
  suppressed-ids: example-bundle-immunization-covid,example-bundle-immunization-covid-2,example-immunization-covid-1a,example-immunization-covid-2a,example-immunization-covid-3a,example-immunization-covid-1b,example-immunization-covid-2b,example-immunization-covid-3b,example-patient-covid-1a,example-patient-covid-1b,example-patient-covid-1c,example-patient-covid-1d,example-bundle-immunization-mpox,example-bundle-immunization-mpox-2,example-immunization-mpox-1a,example-immunization-mpox-2a,example-immunization-mpox-1b,example-immunization-mpox-2b,example-bundle-lab-test-results-covid,example-bundle-lab-test-results-covid-2,example-bundle-lab-test-results-covid-3,example-bundle-lab-test-results-covid-4,example-observation-covid-1a,example-observation-covid-1b,example-observation-covid-1c,example-observation-covid-1d
pages:
  index.md:
    title: Home
  profiles.md:
    title: Profiles
  patient.md:
    title: 'Profile Group: Patients'
  vaccination.md:
    title: 'Profile Group: Vaccination'
  laboratory-results-observation.md:
    title: 'Profile Group: Laboratory Results Observation'
  bundles.md:
    title: 'Profile Group: Bundles'
  conformance.md:
    title: Conformance
  downloads.md:
    title: Downloads
  artifacts.html:
    title: Artifacts Summary
groups:
  Patient:
    name: Patient Profiles
    resources:
    - StructureDefinition/shc-patient-general-dm
    - StructureDefinition/shc-patient-general-ad
    - StructureDefinition/shc-patient-us-dm
    - StructureDefinition/shc-patient-us-ad
  Vaccination:
    name: Vaccination Profiles
    resources:
    - StructureDefinition/shc-vaccination-dm
    - StructureDefinition/shc-vaccination-ad
  LabResults:
    name: Laboratory Results Profiles
    resources:
    - StructureDefinition/shc-covid19-laboratory-result-observation-dm
    - StructureDefinition/shc-covid19-laboratory-result-observation-ad
    - StructureDefinition/shc-infectious-disease-laboratory-result-observation-dm
    - StructureDefinition/shc-infectious-disease-laboratory-result-observation-ad
  Bundles:
    name: Bundle Profiles
    resources:
    - StructureDefinition/shc-vaccination-bundle-dm
    - StructureDefinition/shc-vaccination-bundle-ad
    - StructureDefinition/shc-covid19-laboratory-bundle-dm
    - StructureDefinition/shc-covid19-laboratory-bundle-ad
    - StructureDefinition/shc-infectious-disease-laboratory-bundle-dm
    - StructureDefinition/shc-infectious-disease-laboratory-bundle-ad
resources:
  Bundle/example-bundle-immunization-covid:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-bundle-dm
    description: Generated example for shc-vaccination-bundle-dm
  Bundle/example-bundle-immunization-covid-2:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-bundle-ad
    description: Generated example for shc-vaccination-bundle-ad
  Immunization/example-immunization-covid-1a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-dm
    description: Generated example for shc-vaccination-dm
  Immunization/example-immunization-covid-2a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-dm
    description: Generated example for shc-vaccination-dm
  Immunization/example-immunization-covid-3a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-dm
    description: Generated example for shc-vaccination-dm
  Immunization/example-immunization-covid-1b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-ad
    description: Generated example for shc-vaccination-ad
  Immunization/example-immunization-covid-2b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-ad
    description: Generated example for shc-vaccination-ad
  Immunization/example-immunization-covid-3b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-ad
    description: Generated example for shc-vaccination-ad
  Patient/example-patient-covid-1a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-patient-general-dm
    description: Generated example for shc-patient-general-dm
  Patient/example-patient-covid-1b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-patient-general-ad
    description: Generated example for shc-patient-general-ad
  Patient/example-patient-covid-1c:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-patient-us-dm
    description: Generated example for shc-patient-us-dm
  Patient/example-patient-covid-1d:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-patient-us-ad
    description: Generated example for shc-patient-us-ad
  Bundle/example-bundle-immunization-mpox:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-bundle-dm
    description: Generated example for shc-vaccination-bundle-dm
  Bundle/example-bundle-immunization-mpox-2:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-bundle-ad
    description: Generated example for shc-vaccination-bundle-ad
  Immunization/example-immunization-mpox-1a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-dm
    description: Generated example for shc-vaccination-dm
  Immunization/example-immunization-mpox-2a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-dm
    description: Generated example for shc-vaccination-dm
  Immunization/example-immunization-mpox-1b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-ad
    description: Generated example for shc-vaccination-ad
  Immunization/example-immunization-mpox-2b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-ad
    description: Generated example for shc-vaccination-ad
  Bundle/example-bundle-lab-test-results-covid:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-infectious-disease-laboratory-bundle-dm
    description: Generated example for shc-infectious-disease-laboratory-bundle-dm
  Bundle/example-bundle-lab-test-results-covid-2:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-infectious-disease-laboratory-bundle-ad
    description: Generated example for shc-infectious-disease-laboratory-bundle-ad
  Observation/example-observation-covid-1a:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-infectious-disease-laboratory-result-observation-dm
    description: Generated example for shc-infectious-disease-laboratory-result-observation-dm
  Observation/example-observation-covid-1b:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-infectious-disease-laboratory-result-observation-ad
    description: Generated example for shc-infectious-disease-laboratory-result-observation-ad
  Bundle/example-bundle-lab-test-results-covid-3:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-covid19-laboratory-bundle-dm
    description: Generated example for shc-covid19-laboratory-bundle-dm
  Bundle/example-bundle-lab-test-results-covid-4:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-covid19-laboratory-bundle-ad
    description: Generated example for shc-covid19-laboratory-bundle-ad
  Observation/example-observation-covid-1c:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-covid19-laboratory-result-observation-ad
    description: Generated example for shc-covid19-laboratory-result-observation-ad
  Observation/example-observation-covid-1d:
    exampleCanonical: http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-covid19-laboratory-result-observation-dm
    description: Generated example for shc-covid19-laboratory-result-observation-dm


---

// File: input/pagecontent/Bundle-example-bundle-immunization-covid-2-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>


<div class="alert alert-success" markdown="1">This example is a copy of [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-covid-2.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-covid-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-covid.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-mpox-2-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>


<div class="alert alert-success" markdown="1">This example is a copy of [`example-bundle-immunization-mpox`](Bundle-example-bundle-immunization-mpox.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-mpox-2.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-mpox-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-immunization-mpox.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-2-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>


<div class="alert alert-success" markdown="1">This example is a copy of [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-2.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-3-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>


<div class="alert alert-success" markdown="1">This example is a copy of [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-3.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-4-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>


<div class="alert alert-success" markdown="1">This example is a copy of [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-4.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/Bundle-example-bundle-lab-test-results-covid.json-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/bundles.md

{% include profile-set-nav.md resourceName="bundles" %}

### Usage

Issuers SHALL ensure the contents of `.vc.credentialSubject.fhirBundle` in a [SMART Health Card](https://spec.smarthealth.cards/#data-model) (or equivalent payload in another health card standard) conforms to one of the Bundle profiles listed on this page.

Holders and Verifiers SHOULD provide a user-facing notification if the FHIR payload does not conform to one of the Bundle profiles on this page. They MAY choose to not further process non-conforming payloads.


---

// File: input/pagecontent/conformance.md

Conformance information moved to the [Profiles page](profiles.html).

---

// File: input/pagecontent/downloads.md

* [Full Specification (zip)](full-ig.zip)
* [Package (tgz)](package.tgz)
* [JSON Definitions (zip)](definitions.json.zip)
* [JSON Examples (zip)](examples.json.zip)
* [XML Definitions (zip)](definitions.xml.zip)
* [XML Examples (zip)](examples.xml.zip)

Note that a list of all artifacts in this IG can be found on the [Artifacts page](artifacts.html), and there is also a [table of contents](toc.html).

---

// File: input/pagecontent/Immunization-example-immunization-covid-1a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL1.2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "207"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2021-01-01",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000001"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-covid-1b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL1.2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "207"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2021-01-01",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000001"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-covid-2a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL1.2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "207"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2021-01-29",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000007"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-covid-2b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL1.2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "207"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2021-01-29",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000007"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-covid-3a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL1.2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "229"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2022-09-05",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000001"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-covid-3b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL1.2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "229"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2022-09-05",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000001"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-mpox-1a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-mpox`](Bundle-example-bundle-immunization-mpox.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "206"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2022-08-01",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000002"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-mpox-1b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-mpox`](Bundle-example-bundle-immunization-mpox.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "206"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2022-08-01",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000002"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-mpox-2a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-mpox`](Bundle-example-bundle-immunization-mpox.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "206"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2022-08-29",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000003"
}
```

---

// File: input/pagecontent/Immunization-example-immunization-mpox-2b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-mpox`](Bundle-example-bundle-immunization-mpox.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Immunization",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "206"
      }
    ]
  },
  "patient": {
    "reference": "resource:0"
  },
  "occurrenceDateTime": "2022-08-29",
  "performer": [
    {
      "actor": {
        "display": "ABC General Hospital"
      }
    }
  ],
  "lotNumber": "0000003"
}
```

---

// File: input/pagecontent/index.md

### Scope

This [FHIR Implementation Guide](https://www.hl7.org/fhir/implementationguide.html) (IG) **describes the FHIR contents of a [SMART Health Card] (SHC) for infectious disease vaccination records and laboratory testing status.** This includes a minimal set of patient information (name and contact information) that needed for this use case.

The [Data Model section of the SMART Health Cards specification](https://spec.smarthealth.cards/#data-model) provides the canonical description of the scope of this IG with respect to SHCs. Note that the content of this IG may be suitable for use in other health cards besides SHCs with similar scope and constraints.

Note that this IG is not directly related to the [SMART App Launch Framework](http://www.hl7.org/fhir/smart-app-launch/). The name comes from [SMART Health IT](https://smarthealthit.org/), who also developed the [SMART Health Card] framework that this IG supports. ("SMART" is an [acronym](https://smarthealthit.org/an-app-platform-for-healthcare/about/) for Substitutable Medical Apps, Reusable Technology.) SMART App Launch and SMART Health Cards are designed to work well together (the former being one of multiple methods for issuing the latter), but they don't have a hard dependency with each other.

This IG does not describe API operations for issuing health cards. Note that [the SHC specification does describe a FHIR API operation for issuing SHCs](https://spec.smarthealth.cards/#via-fhir-health-cards-issue-operation) (`[base]/Patient/:id/$health-cards-issue`).

This IG is not applicable to general-purpose FHIR endpoints like `[base]/Patient/:id/Immunization`, nor is it meant to describe the canonical representation of clinical data in electronic health record systems; these are governed by other IGs like [US Core](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html).

### Actors

The primary actors are:

1. **Issuers** who produce the FHIR resources described in this IG. These may be the entities responsible for giving vaccinations or reporting laboratory results, including health systems, pharmacies, clinical labs, and doctors offices.
1. **Holders** who receive a [SMART Health Card] from an Issuer (which contains the FHIR resources described in this IG), and may display it to a Verifier.
1. **Verifiers** who read and analyze the FHIR resources described in this IG.

Issuers and Verifiers are considered "implementers" of this IG. Additionally, "wallet applications" used by Holders to store digital versions of their SHC are also considered implementers.

#### Privacy by design

Special attention is payed in this IG to protecting the privacy of Holders.

The design of the SMART Health Card specification results in the following characteristics of issued SMART Health Cards:

1. The contents cannot be changed (without re-issuing the entire SMART Health Card).
2. The entirety of the data within the SMART Health Card is transmitted from the Holder to the Verifier whenever a SMART Health Card is presented.

**Therefore, information that is not strictly necessary for a legitimate Verifier use case SHALL NOT be included in SMART Health Cards.**

For more information, please see [the data minimization and privacy section on the Profiles page](profiles.html#data-minimization-and-privacy).

This diagram shows the typical SHC workflow among these actors:

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;">{%include workflow.svg%}</div>

### Use cases

Our primary focus is on the use case of representing the minimal set of clinical data necessary to represent vaccination status and infectious disease-related laboratory testing in a SMART Health Card for outbreak/pandemic response. This IG may also be used to support use cases involving routine vaccination or infectious disease-related laboratory testing. To meet these use cases, we provide profiles of a [FHIR Bundle](https://www.hl7.org/fhir/bundle.html) that describes the contents of [the `fhirBundle` element in a SMART Health Card](https://spec.smarthealth.cards/#data-model). We also provide profiles of the resources contained within this Bundle.

The SMART Health Cards Framework constrains the size of the FHIR payload embedded within a SMART Health Card to allow the entirety of the SMART Health Card to fit within [a single Version 22 QR code](https://spec.smarthealth.cards/#chunking). This IG is designed to support creating resources that fit within these size constraints. (While it is possible to generate a [denser QR code](https://www.qrcode.com/en/about/version.html), the [SMART Health Cards Framework](https://spec.smarthealth.cards/#every-health-card-can-be-embedded-in-a-qr-code) developers found that denser QR codes could be difficult to scan.) SMART Health Card payloads are compressed, with the amount of compression varying based on the content of the payload (in general, the more repeated content in the bundle, the higher the compression ratio). This means that it's not possible to calculate the precise number of _uncompressed_ bytes available for the embedded FHIR Bundle.

To support implementers' efforts to minimize payload size, this IG provides two different sets of profiles:

1. **Primary Profiles** focused on data minimization (DM). These profiles use cardinality constraints to prohibit elements beyond the minimal set needed to meet our use cases.
2. **Fallback Profiles**, with relaxed constraints that include all allowable data (AD).

More information can be found on the [Profiles page](profiles.html#data-minimization-and-privacy).

In practice, we have found that bundles of resources conforming to the Primary Profiles in this IG do fit within the payload constraints.

{% include privacy.md %}

#### Use case 1: immunization records

**Scenario 1:** A patient receives two doses of the Moderna COVID-19 vaccine, and a third dose of the 2022 bivalent booster. The first dose was administered on January 1, 2021, the second dose on January 29, 2021, and the booster on September 5, 2022. Here is [an example of a FHIR Bundle representing this scenario](Bundle-example-bundle-immunization-covid.json.html), which contains the following resources:

1. An instance of a Patient resource conforming to [SHCPatientUnitedStatesDM](StructureDefinition-shc-patient-us-dm.html)[^patientprofile]
1. An instance of an Immunization resource conforming to [SHCVaccinationDM] to represent the first dose
1. An instance of an Immunization resource conforming to [SHCVaccinationDM] to represent the second dose
1. An instance of an Immunization resource conforming to [SHCVaccinationDM] to represent the booster (third dose)

**Scenario 2:** A patient receives two doses of the Jynneos (modified vaccinia Ankara vaccine) vaccine for mpox/smallpox. The first dose was administered on August 1, 2022, and the second dose on August 29, 2022. Here is [an example of a FHIR Bundle representing this scenario](Bundle-example-bundle-immunization-mpox.json.html), which contains the following resources:

1. An instance of a Patient resource conforming to [SHCPatientUnitedStatesDM](StructureDefinition-shc-patient-us-dm.html)[^patientprofile]
1. An instance of an Immunization resource conforming to [SHCVaccinationDM] to represent the first dose
1. An instance of an Immunization resource conforming to [SHCVaccinationDM] to represent the second dose

The example Bundle resources for both scenarios above conform to [SHCVaccinationBundleDM].

#### Use case 2: laboratory test results

**Scenario 3:** A patient is tested for SARS-CoV-2 (COVID19) antigen via rapid immunoassay on February 17, 2021 with result detectable. Here is [an example of a FHIR Bundle representing this scenario](Bundle-example-bundle-lab-test-results-covid.html), which contains the following resources:

1. An instance of a Patient resource conforming to [SHCPatientUnitedStatesDM](StructureDefinition-shc-patient-us-dm.html)[^patientprofile]
1. An instance of an Observation resource conforming to [SHCCovid19LaboratoryResultObservationDM] to represent lab test results

The example Bundle resources for this scenario conforms to [SHCInfectiousDiseaseLaboratoryBundleDM].

[^patientprofile]: Note that this profile is based on [SHCPatientGeneralDM], so this example conforms to both.

### Profiles

For the list of profiles defined in this IG please see [the Profiles page](profiles.html).

### Approach to constraints

The IG is currently focused on coordinating implementers' representations of relevant clinical data, rather than evaluating risk or applying decision rules based on these clinical data. For example, this IG does not include information about which vaccine products are considered effective, or which dosing protocols are appropriate for a given product. The rationale for focusing on "conveying a clinical history" rather than "evaluating risk or making decisions" is:

1. Risk evaluation algorithms are likely to evolve faster than IG constraints can be updated.

   For example, constraining the [SHCVaccinationDM] profile to require specific `vaccineCode` values (e.g., only `CVX#207` and `CVX#208` for the original Moderna and Pfizer-BioNTech vaccines) could pose a problem if a new vaccine receives emergency authorization: recipients of the new vaccination would have non-conforming Immunization resources due to the constraints on `vaccineCode` until the IG could be updated and published.

1. Risk evaluation algorithms may be actor- or context-dependent.

   For example, some parties may only consider United States Food and Drug Administration (FDA)-approved or Emergency Use Authorization (EUA) vaccines to be acceptable, while others may accept vaccines approved in other countries.

   Embedding stringent validation criteria in our FHIR profiles may make it impossible for implementers with less stringent criteria to use this IG.

1. More constrained profiles for risk evaluation can be created based on the profiles in this IG, but it's not possible to remove constraints in a child profile.

1. Cardinality constraints are applied to specific data elements in [Allowable Data profiles](profiles.html#data-minimization-and-privacy) when their inclusion (1) does not support our use case and could harm patients; or (2) is contrary to our [key design principles](https://vci.org/about#key-principles). For example, `Patient.identifier` is not allowed in resources conforming to [SHCPatientUnitedStatesAD] as this may include a Medical Record Number (MRN) or Social Security Number (SSN) in the United States, which would introduce a significant privacy risk for patients.

### Approach to terminology bindings

Value set bindings for [`MustSupport` elements](profiles.html#mustsupport-interpretation) are `required`, meaning that resources MUST use a code specified in the bound value set. This is to ensure implementers know which code systems can be expected to appear in a given element.

In general, the value sets used in these `required` bindings are as broad as possible. For example, all codes from the [CVX code system](https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx) are allowed for identifying vaccines (as opposed to defining a value set with just COVID-related CVX codes, for example).

In cases where disease-specific value sets exist, this IG may provide profiles with bindings to these restricted value sets (e.g., [SHCCovid19LaboratoryResultObservationDM]) to help implementers identify the preferred subset of codes for that disease. However, in these cases, this IG will also provide generic equivalents to these profiles with broad value sets (e.g., [SHCInfectiousDiseaseLaboratoryResultObservationDM]). Implementers MAY fall back to the generic version of such profiles if the code they need is not part of the disease-specific value sets.

Note that when a value set is specified as "Include all codes defined in ...", the definition does **not** constrain the value set content to a specific version of the code system. As the code system content is updated in new code system versions, the updated content will be available in the value set expansion (and via $validate-code). Also note that value set expansions in the published version of this IG may be out of date; please check with the canonical source of the code system for the most up-to-date set of codes that belong to a value set.

### Identity assurance

The [SHCVaccinationDM] and [SHCCovid19LaboratoryResultObservationDM]/[SHCCovid19LaboratoryResultObservationDM] profiles include a mechanism for indicating level of identity assurance of the patient. This uses the [IdentityAssuranceLevel] value set in this format:

```json
"meta": {
  "security": [{"system": "https://smarthealth.cards/ial", "code": "IAL1.2"}]
}
```

Issuers SHALL populate these elements if identity assurance information is available.

### Author contact information

This FHIR Implementation Guide was initially developed by [VCI](https://vci.org), and is currently [an HL7 project](https://confluence.hl7.org/display/PHWG/SMART+Health+Cards+-+Vaccination+and+Testing+IG+Project+Page) sponsored by the [Public Health Work Group](https://confluence.hl7.org/display/PHWG/Public+Health+Work+Group).

If you have questions or comments about this IG, please reach out to us via one of these channels:

1. The [smart/health-cards](https://chat.fhir.org/#narrow/stream/284830-smart.2Fhealth-cards) stream on [chat.fhir.org](https://chat.fhir.org/#narrow/stream/284830-smart.2Fhealth-cards) (requires free account)
2. The [`vaccination` HL7 listserv](http://lists.hl7.org/read/?forum=vaccination) ([sign up here](https://www.hl7.org/Special/committees/pher/listserv.cfm))
3. Email <vci-ig@mitre.org>

#### Credits

- Reece Adamson (The MITRE Corporation[^PRS])
- Cary Anderson (Apple Inc.)
- Shaumik Ashraf (The MITRE Corporation[^PRS])
- Ricky Bloomfield (Apple Inc.)
- Paul Denning (The MITRE Corporation[^PRS])
- Neelima Karipineni (The MITRE Corporation[^PRS])
- Josh Mandel (SMART Health IT and Microsoft)
- Max Masnick (The MITRE Corporation[^PRS])
- Pascal Pfiffner (Apple Inc.)
- JP Pollak (The Commons Project and Cornell)
- Isaac Vetter (Epic)

To be included in the credits, please open a pull request on [GitHub](https://github.com/HL7/fhir-shc-vaccination-ig) adding yourself to [this file](https://github.com/HL7/fhir-shc-vaccination-ig/blob/master/input/pagecontent/index.md). Anyone on the [GitHub contributors list](https://github.com/HL7/fhir-shc-vaccination-ig/graphs/contributors) or who has otherwise contributed to this IG may be included.

[^PRS]: MITRE: Approved for Public Release. Distribution Unlimited. Case Number 21-0225.

<br><br>


---

<br><br>

{% include ip-statements.xhtml %}

{% include markdown-link-references.md %}

---

---

// File: input/pagecontent/laboratory-results-observation.md

{% include profile-set-nav.md resourceName="laboratory-results-observation" %}

### Usage

Note that `Observation.effective[x]` is the clinically relevant time/time-period, which is typically when the specimen assessed in the laboratory test was collected (as opposed to when the lab assay was performed).

Note that the `performer` element indicates the laboratory performing the test, rather than the collector of the specimen used in the test.

#### Specimen collection supervision status

The [specimen collection supervision status ValueSet][SpecimenCollectionSupervisionStatus] provides a method for identifying whether a specimen was collected by the patient with supervision, without supervision, etc. This is stored in `Observation.component`, identified by setting `Observation.component.code` to the SNOMED CT concept `1208522006` ("Type of supervision for specimen collection (observable entity)"). `Observation.component.valueCodeableConcept` is one of the codes in the [aforementioned ValueSet][SpecimenCollectionSupervisionStatus].


---

// File: input/pagecontent/Observation-example-observation-covid-1a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Observation",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "94558-4"
      }
    ]
  },
  "subject": {
    "reference": "resource:0"
  },
  "effectiveDateTime": "2021-02-17",
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "260373001"
      }
    ]
  },
  "performer": [
    {
      "display": "ABC General Hospital"
    }
  ]
}
```

---

// File: input/pagecontent/Observation-example-observation-covid-1b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Observation",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "94558-4"
      }
    ]
  },
  "subject": {
    "reference": "resource:0"
  },
  "effectiveDateTime": "2021-02-17",
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "260373001"
      }
    ]
  },
  "performer": [
    {
      "display": "ABC General Hospital"
    }
  ]
}
```

---

// File: input/pagecontent/Observation-example-observation-covid-1c-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Observation",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "94558-4"
      }
    ]
  },
  "subject": {
    "reference": "resource:0"
  },
  "effectiveDateTime": "2021-02-17",
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "260373001"
      }
    ]
  },
  "performer": [
    {
      "display": "ABC General Hospital"
    }
  ]
}
```

---

// File: input/pagecontent/Observation-example-observation-covid-1d-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-lab-test-results-covid`](Bundle-example-bundle-lab-test-results-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Observation",
  "meta": {
    "security": [
      {
        "system": "https://smarthealth.cards/ial",
        "code": "IAL2"
      }
    ]
  },
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "94558-4"
      }
    ]
  },
  "subject": {
    "reference": "resource:0"
  },
  "effectiveDateTime": "2021-02-17",
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "260373001"
      }
    ]
  },
  "performer": [
    {
      "display": "ABC General Hospital"
    }
  ]
}
```

---

// File: input/pagecontent/Patient-example-patient-covid-1a-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Anyperson",
      "given": [
        "John",
        "B."
      ]
    }
  ],
  "birthDate": "1951-01-20"
}
```

---

// File: input/pagecontent/Patient-example-patient-covid-1b-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Anyperson",
      "given": [
        "John",
        "B."
      ]
    }
  ],
  "birthDate": "1951-01-20"
}
```

---

// File: input/pagecontent/Patient-example-patient-covid-1c-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Anyperson",
      "given": [
        "John",
        "B."
      ]
    }
  ],
  "birthDate": "1951-01-20"
}
```

---

// File: input/pagecontent/Patient-example-patient-covid-1d-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-success" markdown="1">**Note:** This example is extracted from [`example-bundle-immunization-covid`](Bundle-example-bundle-immunization-covid.html). See [here](https://github.com/HL7/fhir-shc-vaccination-ig/tree/master/input/examples) for more information.
</div>

```
{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Anyperson",
      "given": [
        "John",
        "B."
      ]
    }
  ],
  "birthDate": "1951-01-20"
}
```

---

// File: input/pagecontent/patient.md

{% include profile-set-nav.md resourceName="patient" %}

### Usage

SMART Health Cards issued in the United States SHALL NOT have `Patient.identifier` set as this could include sensitive information such as a Social Security Number or MRN. This is reflected by the `0..0` cardinality of this element in the US profiles of Patient. Issuers of SMART Health Cards in the United States SHALL conform to [SHCPatientUnitedStatesAD] and SHOULD conform to [SHCPatientUnitedStatesDM].

For SMART Health Cards issued in other locations, `Patient.identifier` MAY be populated IF the contents do not present a privacy risk to the patient if shared outside a clinical setting (e.g., with a Verifier such as an airline or event venue). Issuers SHALL NOT include information in `Patient.identifier` that poses a privacy risk in such contexts. Issuers of SMART Health Cards outside the United States SHALL conform to [SHCPatientGeneralAD] and SHOULD conform to [SHCPatientGeneralDM].


---

// File: input/pagecontent/profiles.md

This Implementation Guide (IG) includes Primary Profiles to ensure data minimization (DM), and Fallback Profiles with relaxed constraints that include all allowable data (AD). More detail about the difference between DM and AD profiles is available below.

### Profile groups

<ul>
{% for resource in site.data.profiles %}
    {% assign key = resource[0] %}
    {% assign r = resource[1] %}
    <li>
        <strong id="profile-group-{{ key }}">
            {% if r.instructions %}<a href="{{ r.instructions }}">{% endif %}
            {{ r.name }}
            {% if r.instructions %}</a>{% endif %}
        </strong>
        <br>
        {{ r.description | markdownify }}
    </li>
{% endfor %}
</ul>

<hr style="margin-top: 3em; margin-bottom: 3em;">

### How to use profiles for implementation

<span class="label">Note</span> This specification uses the conformance verbs SHALL, SHOULD, and MAY as defined in [RFC 2119].

The recommended workflow for reading profiles of a given resource in this IG is as follows:

1. Begin by reading the [IG's home page](index.html) and this page in their entirety.
1. Review this page in its entirety.
1. Use the "Profile Groups" navigation menu, or the list of profile groups above to review the implementation instructions for each profile group in the IG.
    1. If multiple pairs of primary/fallback profiles are available within this Profile Group, note that implementers SHALL choose the pair with the **narrowest** applicable scope. For example, if there is a set of profiles for your country, you would use those rather than the generic set.
    1. Review the "Snapshot" tab on the primary profile you plan to use within each profile group. The elements listed here SHOULD/SHALL be included based on  `MustSupport` (<span style="padding-left: 3px; padding-right: 3px; color: white; background-color: red;" >S</span> in the "Flags" column) and [cardinality](https://www.hl7.org/fhir/conformance-rules.html#cardinality) (in the "Card.") column. Elements **not** listed here SHOULD NOT or SHALL NOT be included. Details on interpreting cardinality and `MustSupport` for this IG are available [below](#mustsupport-interpretation).
        - For more information about the data type for a given element, click the data type link in the "Type" column. This will bring you to the relevant portion of the FHIR specification for that data type.
        - The "Description & Constraints" column has a short description of each element. Some elements may also have a "Binding" listed here, which indicates values SHALL come from the specified list. (This IG uses `required` for most value set bindings, but other IGs may use [more flexible binding strengths](https://www.hl7.org/fhir/terminologies.html#strength).)
1. For each element included in a given resource, review the detailed definition for the element in this IG. To find this, click the element's name in the "Snapshot" table of the relevant profile. The detailed definition may have more implementation and conformance information including applicable [invariants](https://www.hl7.org/fhir/conformance-rules.html#constraints).
1. If you wish to [validate](#validation) your resource, start by validating against the primary (DM) profile for a given FHIR resource, and attempt to resolve any errors.

    If an Issuer has a good faith belief that resolving a validation error against a primary (DM) profile would reduce utility for Holders or Verifiers, they MAY instead validate against the less constrained fallback (AD) profile instead.

    Issuers should be aware that adding in extraneous information to FHIR resources may not make it possible for the SMART Health Card to fit in a legible QR code. Issuers should refer to [SMART Health Cards Framework] for details.

<hr style="margin-top: 3em; margin-bottom: 3em;">

### Conformance to profiles

All resources meant to conform with this IG SHOULD conform to the relevant primary (DM) profiles, and SHALL conform to the relevant fallback (AD) profiles.

In some cases, multiple pairs of primary/fallback profiles of the same resource are provided (e.g., "Universal Patient" vs. "US-Only Patient"). Implementers SHALL use the _most specific_ set of profiles for their given use case. For example, a US-based implementer SHALL use the "US-Only Patient" profiles. Likewise, an implementer producing resources representing COVID-19 lab results SHALL use the COVID-19-specific lab results profiles.

Note that in FHIR, a profile is derived from either the base FHIR resource (like [Patient](https://www.hl7.org/fhir/patient.html)) or another profile. In this IG, a Fallback Profile is typically derived from the base FHIR resource, and the corresponding Primary Profile is derived from the Fallback Profile. The Primary Profile can therefore be considered a child of the Fallback Profile. A child profile cannot remove or relax a constraint defined in the parent profile. Instead, child profiles typically impose stricter constraints than the parent profile.

The diagram below shows the relationship of the Primary and Fallback Profiles, namely that the Primary Profile is a subset of the Fallback Profile:

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;"><img src="primary_vs_fallback.svg"></div>

### MustSupport interpretation

[Elements in FHIR can be labeled as `MustSupport`](https://www.hl7.org/fhir/conformance-rules.html#mustSupport), denoted in profiles by this symbol: <span style="padding-left: 3px; padding-right: 3px; color: white; background-color: red;" >S</span>.

**`MustSupport` does not mean an element is required.** Required elements are those with a minimum cardinality of 1 or greater.

Instead, `MustSupport` indicates implementers ["SHALL provide 'support' for the element in some meaningful way"](https://www.hl7.org/fhir/conformance-rules.html#mustSupport).

In this Implementation Guide, "support in some meaningful way" is defined as follows:

- **Issuers:**

    1. Issuers SHALL populate any elements marked as `MustSupport` **if and only if the necessary data are available in their system for a given record**. See [Missing data](#missing-data) below for details.

    1. Issuers SHOULD NOT populate any elements that are not marked as `MustSupport` unless they believe the element contains valuable information for Holders and/or Verifiers. This is due to the payload size constraints of SMART Health Cards; see the [Data minimization](#data-minimization-and-privacy) section below for more details on how to reduce payload size when implementing. To avoid contradicting cardinality, all required elements (minimum cardinality > 0) are therefore also labeled as `MustSupport`.

- **Verifiers:**

    1. Verifiers SHALL read and meaningfully process elements marked BOTH as `MustSupport` and `Is-Modifier`. Note that `Is-Modifier` elements [by definition](https://www.hl7.org/fhir/conformance-rules.html#isModifier) **cannot be safely ignored** as they may change the meaning of the resource.

    1. For other elements flagged with `MustSupport`, Verifiers MAY process at their own discretion.

### Required elements

Elements with a minimum [cardinality](https://www.hl7.org/fhir/conformance-rules.html#cardinality) of 1 or greater are considered required.

### Missing data

- If an Issuer does not have data for a `MustSupport` data element, the data element SHALL be omitted from the resource instance. Implementers SHALL NOT produce placeholder data when data are not available; instead, omit the element.
- If an Issuer does not have data for a required data element (minimum cardinality > 0), the Issuer SHALL NOT produce the resource instance.

### Data minimization and privacy

{% include privacy.md %}

Additionally, FHIR payload within a SMART Health Card SHALL be [small enough](https://spec.smarthealth.cards/#health-cards-are-small) to allow the entirety of the SMART Health Card to fit within [a single Version 22 QR code](https://spec.smarthealth.cards/#chunking). This limits the amount of data that SHOULD be included in FHIR resources that appear in SMART Health Card payloads.

To ensure only the minimal amount of data are being included, Issuers SHOULD validate their FHIR resource instances against the primary (DM) profiles listed above. See the [Validation section](#validation) for information on how to validate a resource against a profile.

Additionally:

- Implementers SHOULD NOT populate `Resource.id` or `Resource.text` elements. `Resource.meta` SHOULD NOT be populated, except for `Resource.meta.security` in the vaccination and laboratory test results profiles.

- Implementers SHALL use `resource:0` syntax for IDs and references.
    - Implementers SHALL populate `Bundle.entry.fullUrl` elements with short resource-scheme URIs (e.g., `{"fullUrl": "resource:0"}`).
    - Implementers SHALL populate `Reference.reference` elements with short resource-scheme URIs (e.g., `{"patient": {"reference": "resource:0"}}`) which SHALL resolve within the bundle.

- Implementers SHOULD NOT populate `CodeableConcept.text` or `Coding.display` when using any value from a value set with a `required` binding, or using specified values from a value set with an `extensible` binding.

- Likewise, implementers SHOULD NOT populate `CodeableConcept.text` or `Coding.display` when specifying codes that are fixed in profiles.

- String length should be limited; invariants are used within the IG to produce warnings when strings exceed the expected length for a `MustSupport` element (except for patient name).

- Implementers SHOULD use `YYYY-MM-DD` precision for all `dateTime` fields EXCEPT for laboratory results (described below). Greater precision will result in a warning when validating a resource.
    - Implementers SHALL use `YYYY-MM-DDThh:mm:ss+zz:zz` format for `effective[x]` dateTime elements in [SHCCovid19LaboratoryResultObservationDM] and [SHCInfectiousDiseaseLaboratoryResultObservationDM] (and their AD counterparts). Additionally, implementers SHALL follow this conformance requirement from [FHIR R4's documentation for the dateTime type](http://hl7.org/fhir/R4/datatypes.html#dateTime):

        > If hours and minutes are specified, **a time zone SHALL be populated**. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored at receiver discretion. \[Emphasis added.\]

### Bundles

Bundles meant to populate the `fhirBundle` element of a SMART Health Card AND fall into the scope of this IG described at <https://spec.smarthealth.cards/#data-model> SHALL conform to one of the profiles of Bundle in this IG.

The profiles of Bundle in this IG MAY be used with other types of SMART Health Cards.

### Validation

Resources may be assessed for conformance using one of [the tools listed under "Conformance testing" on this page](https://confluence.hl7.org/pages/viewpage.action?pageId=111122184#SMARTHealthCardsImplementationTools-Conformancetesting), or manually with the FHIR Validator (described below).

Note that these tools **do not** check for `MustSupport` conformance as this depends on the particulars of the data available to the actor producing the resource. Implementers MUST manually check `MustSupport` conformance based on the criteria described above.

To validate a specific resource against a profile, the [FHIR Validator](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar) can be used, where [package.tgz is downloaded from the IG](package.tgz):

```sh
# Run to get latest validator_cli.jar (~80MB)
curl -L -O https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar

# Run to get latest package from this IG to validate against
curl -L -O https://vci.org/ig/vaccination-and-testing/package.tgz

# Run to validate; note you will need to update the paths to (1) validator_cli.jar; (2) package.tgz;
# (3) the resource you wish to validate.
#
# You will also need to specify the URI of the profile you wish to validate against. This can be found
# under "Defining URL" on any of the profile pages in this IG.
java -jar path/to/validator_cli.jar -version 4.0.1 \
-ig path/to/package.tgz \
-profile http://hl7.org/fhir/uv/shc-vaccination/StructureDefinition/shc-vaccination-dm \
path/to/immunization.json
```

The command above would validate `path/to/immunization.json` against the [SHCVaccinationDM] profile. To validate against a different profile, change `shc-vaccination-dm` to the [identifier](http://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.identifier) of the profile you want to validate against. This can be found at the end of the canonical URL listed at the top of each profile's page in the IG.

Additional [testing and validation tools may be found here](https://confluence.hl7.org/display/PHWG/SMART+Health+Cards+Implementation+Tools).

#### Terminology validation

The SMART Health Cards community maintains [terminology.smarthealth.cards](https://terminology.smarthealth.cards), which provides ValueSets of codes relevant to this IG that can be updated rapidly as public health needs dictate. Data elements in this IG are bound to ValueSets hosted on [terminology.smarthealth.cards](https://terminology.smarthealth.cards) to support validation of terminology using FHIR tooling. However, the [terminology.smarthealth.cards](https://terminology.smarthealth.cards) ValueSets are not guaranteed to be complete or correct. Therefore, implementers SHALL independently verify the terminology they use in SMART Health Cards with the canonical version of the relevant code system (e.g., verify CVX codes using the [official CDC-published list](https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx)).

Implementers are also encouraged to participate in the community maintaining [terminology.smarthealth.cards](https://terminology.smarthealth.cards) on [Zulip](https://chat.fhir.org/#narrow/stream/284830-smart.2Fhealth-cards) (free account required). Please notify the community of any inconsistencies between [terminology.smarthealth.cards](https://terminology.smarthealth.cards) ValueSets and canonical version of the relevant code code systems.

Other questions related to terminology should also be directed to the [smart/health-cards Zulip stream at chat.fhir.org](https://chat.fhir.org/#narrow/stream/284830-smart.2Fhealth-cards).

---

### Internationalization

The [SMART Health Cards] specification and this IG are suitable for international use.

Additionally, this IG includes specific profiles for the following jurisdictions:

- United States

Other jurisdictions are welcome to define their own profiles that reflect their local concerns -- please contact the local HL7 affiliate or [the authors of this specification](index.html#author-contact-information) for assistance.

Jurisdictional profiles will typically add constraints to those defined in the "fallback" profiles [defined above](#profile-groups). For example, jurisdictional profiles might add constraints limiting the patient identifier to a specific type of national patient/consumer id, or define a specific value set using codes from a local SNOMED CT extension for vaccines.

Typically jurisdictional profiles will include both "primary" and "fallback" profiles; both SHALL inherit from the generic "fallback" profile or the generic "primary" profile.

---

### Dependencies

{% include dependency-table.xhtml %}

---

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-bundle-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-bundle-ad-intro.md

{% include profile-set-nav.md resourceName="bundles" %}

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-bundle-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-bundle-dm-intro.md

{% include profile-set-nav.md resourceName="bundles" %}

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-result-observation-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-result-observation-ad-intro.md

{% include profile-set-nav.md resourceName="laboratory-results-observation" %}

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-result-observation-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-covid19-laboratory-result-observation-dm-intro.md

{% include profile-set-nav.md resourceName="laboratory-results-observation" %}

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-bundle-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-bundle-ad-intro.md

{% include profile-set-nav.md resourceName="bundles" %}

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-bundle-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-bundle-dm-intro.md

{% include profile-set-nav.md resourceName="bundles" %}

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-result-observation-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-result-observation-ad-intro.md

{% include profile-set-nav.md resourceName="laboratory-results-observation" %}

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-result-observation-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-infectious-disease-laboratory-result-observation-dm-intro.md

{% include profile-set-nav.md resourceName="laboratory-results-observation" %}

---

// File: input/pagecontent/StructureDefinition-shc-patient-general-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-patient-general-ad-intro.md

{% include profile-set-nav.md resourceName="patient" %}

---

// File: input/pagecontent/StructureDefinition-shc-patient-general-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-patient-general-dm-intro.md

{% include profile-set-nav.md resourceName="patient" %}

---

// File: input/pagecontent/StructureDefinition-shc-patient-us-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-patient-us-ad-intro.md

{% include profile-set-nav.md resourceName="patient" %}

---

// File: input/pagecontent/StructureDefinition-shc-patient-us-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-patient-us-dm-intro.md

{% include profile-set-nav.md resourceName="patient" %}

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-ad-intro.md

{% include profile-set-nav.md resourceName="vaccination" %}

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-bundle-ad-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-bundle-ad-intro.md

{% include profile-set-nav.md resourceName="bundles" %}

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-bundle-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-bundle-dm-intro.md

{% include profile-set-nav.md resourceName="bundles" %}

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-dm-examples-intro.md

<!-- This file is automatically generated by script/update-examples-->

<div class="alert alert-info"><strong>Note:</strong> Examples in this FHIR IG show just the FHIR resources used in a SMART Health Card. To view complete SMART Health Cards that include these FHIR resources, <a href="https://github.com/HL7/fhir-shc-vaccination-ig/tree/master-examples">see here</a>.</div>

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-dm-intro.md

{% include profile-set-nav.md resourceName="vaccination" %}

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-reaction-observation-ad-intro.md

{% include profile-set-nav.md resourceName="experimental" %}

---

// File: input/pagecontent/StructureDefinition-shc-vaccination-reaction-observation-dm-intro.md

{% include profile-set-nav.md resourceName="experimental" %}

---

// File: input/pagecontent/vaccination.md

{% include profile-set-nav.md resourceName="vaccination" %}

### Usage

#### Scope and terminology

An Immunization resource conforming to this profile SHALL be used to describe a single vaccine given to a patient.

For vaccinations that require multiple doses of a vaccine (e.g., the mRNA-based COVID-19 vaccines that have a two-dose series), a separate instance of the Immunization resource SHALL be provided for each vaccine given in the series.

Note that:

> While the terms "immunization" and "vaccination" are not clinically identical, for the purposes of the FHIR resources, the terms are used synonymously. ([source](https://www.hl7.org/fhir/immunization.html))

#### Identifying vaccines

Implementers SHALL use a code from at least one of the following three [code systems](https://www.hl7.org/fhir/codesystem.html) to identify vaccines:

1. [CVX]
2. [ICD-11 for Mortality and Morbidity Statistics](https://icd.who.int/browse11/l-m/en) (ICD-11 MMS)
3. [SNOMED CT](https://www.snomed.org)

Code systems like these define a set of codes that are mapped onto specific meanings. Using a code system helps to ensure implementers represent a given concept in a consistent way that other implementers can understand.

Codes from at least one of these code systems SHALL be used to populate the `Immunization.vaccineCode` element to identify the vaccine given to the patient.

* **Issuers** of SMART Health Cards SHALL populate this data element with a code from the subset of these code systems that identify vaccines described in the "Applicable Subset of Codes" column below.
* **Verifiers** of SMART Health Cards SHALL be able to meaningfully process and interpret ANY code from the code systems listed in the table below that appear in the respective "Applicable Subset of Codes".

{:.table-striped.table.table-bordered}
| Code System | Identifying URI | Applicable Subset of Codes | ValueSet | Example |
| -- | -- | -- | -- | -- |
| **CVX** | `http://hl7.org/fhir/sid/cvx` | Any [CVX code][CVX] | [ValueSet][cvx-vs] | `230` ("Moderna COVID-19 Bivalent, Original + BA.4/BA.5") |
| **ICD-11 MMS** | `http://id.who.int/icd/release/11/mms` | Descendants of [Foundation entity `164949870`]† | [ValueSet][icd-vs] | `XM3DT5` ("COVID-19 Vaccine Moderna") |
| **SNOMED CT** | `http://snomed.info/sct` | Descendants of [`787859002`][SNOMED-vaccine-concept]‡ | [ValueSet][snomed-vs] | `28571000087109` ("COVID-19 SPIKEVAX 0.20 mg/mL mRNA Mod") |

[CVX]: https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=CVX
[Foundation entity `164949870`]: https://icd.who.int/browse11/l-m/en#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F164949870
[SNOMED-vaccine-concept]: https://browser.ihtsdotools.org/?perspective=full&conceptId1=787859002
[cvx-vs]: https://terminology.smarthealth.cards/ValueSet-immunization-all-cvx.html
[icd-vs]: https://terminology.smarthealth.cards/ValueSet-immunization-all-icd11.html
[snomed-vs]: https://terminology.smarthealth.cards/ValueSet-immunization-all-snomed.html

##### † Applicable subset of ICD-11 MMS codes

ICD-11 MMS is a linearization of the WHO-FIC Foundation; please see [the WHO-FIC Content Model Reference Guide](https://icd.who.int/icdapi/docs/ContentModelGuide.pdf) (PDF) for more information.

Each ICD-11 MMS code is linked to a WHO-FIC Foundation entity. For example, the ICD-11 MMS code `XM3DT5` ("COVID-19 Vaccine Moderna") is linked to `http://id.who.int/icd/entity/1211296175`. The ICD-11 MMS code (e.g., `XM3DT5`) is used in `Immunization.vaccineCode`, _not_ the linked Foundation entity.

Not all Foundation entities have corresponding ICD-11 MMS codes. In fact, the Foundation entity for "Vaccines" (`http://id.who.int/icd/entity/164949870`) that is used to define the applicable subset of ICD-11 MMS codes does not have a ICD-11 MMS code.

Implementers SHALL ensure that newly issued SMART Health Cards that identify vaccines with ICD-11 MMS use a code descending from `http://id.who.int/icd/entity/164949870` based on the [ICD API](https://icd.who.int/icdapi). As of publishing, FHIR terminology servers do not support expansion of an [intensional value set](http://hl7.org/fhir/valueset.html#int-ext) of ICD-11 MMS codes defined as descendants of a WHO-FIC Foundation entity. An [extensional ValueSet created using the ICD API][icd-vs] is provided for convenience.

##### ‡ Applicable subset of SNOMED CT codes

The SNOMED CT code system consists of multiple [extensions](https://confluence.ihtsdotools.org/display/DOCGLOSS/SNOMED+CT+extension) that add to the [SNOMED CT International Edition](https://confluence.ihtsdotools.org/display/DOCGLOSS/SNOMED+CT+International+Edition). All SNOMED CT codes are identified by the same canonical URI (`http://snomed.info/sct`) regardless of whether they are in the International Edition or an extension.

Any descendants of [`787859002`][SNOMED-vaccine-concept], including concepts from SNOMED CT extensions MAY be used to populate `Immunization.vaccineCode`.

#### Multiple values for `vaccineCode`

Issuers SHOULD NOT include multiple codes within `vaccineCode`. Including multiple codes increases the payload size (which can reduce the legibility of the QR code that contains the SMART Health Card), and could introduce conflicting data. SMART Health Cards with multiple values for `vaccineCode` should only be issued if the Issuer has a good faith belief that including multiple values for `vaccineCode` is necessary for workflows of downstream actors, or has a jurisdictional requirement to use a code from a code system other than CVX, ICD-11 MMS, or SNOMED CT.

If multiple values are provided for `vaccineCode`:

1. One of them SHALL be from CVX, ICD-11 MMS, or SNOMED CT.

2. The codes in `vaccineCode` SHALL NOT contradict each other; more information on conformance expectations for multiple codes in a CodeableConcept is [available here](https://www.hl7.org/fhir/datatypes.html#CodeableConcept), and excerpted below:

   > More than one code may be used in CodeableConcept. The concept may be coded multiple times in different code systems.... Each coding (also referred to as a 'translation') is a representation of the concept as described above and may have slightly different granularity due to the differences in the definitions of the underlying codes. There is no meaning associated with the ordering of coding within a CodeableConcept.

There is no expectation that Verifiers will be able to process `vaccineCode` values from code systems other than CVX, ICD-11 MMS, or SNOMED CT.

#### Vaccine identification specificity requirements

In some cases, identifying the specific formulation of a vaccine may be necessary for Verifiers to determine if the presented immunization(s) meet their criteria. For example, the timing of the initial two dose series of mRNA COVID-19 vaccines differed by manufacturer; in this case, it was necessary to identify the vaccine with greater specificity than just "mRNA COVID-19 vaccine" to determine if the vaccine schedule was followed.

`vaccineCode` SHALL include a code identifying the vaccine with sufficient specificity to support verification of compliance with the vaccine schedule of the Issuer's jurisdiction. For example, SHCs issued in the United States SHALL identify vaccines with sufficient specificity to determine if the [the CDC vaccine schedule](https://www.cdc.gov/vaccines/schedules/index.html) was followed.

If a relevant disease-specific ValueSet is available on [terminology.smarthealth.cards](https://terminology.smarthealth.cards) (see below), Issuers SHALL use a code from the highest-specificity applicable ValueSet.

#### terminology.smarthealth.cards

The SMART Health Cards community maintains [terminology.smarthealth.cards](https://terminology.smarthealth.cards), which provides ValueSets of codes for identifying vaccines, localization of display text, maps between different code systems, and a mechanism for rapidly updating these resources if necessary for a public health response.

Please direct questions related to vaccine terminology -- including adding additional codes to disease-specific ValueSets or creating a new disease-specific ValueSet -- to the [smart/health-cards Zulip stream at chat.fhir.org](https://chat.fhir.org/#narrow/stream/284830-smart.2Fhealth-cards) (free account required).

#### Identifying vaccine manufacturer

Issuers SHOULD NOT include vaccine manufacturer separately from `vaccineCode` in SMART Health Cards unless they (1) their is a jurisdictional requirement to do so; or (2) there is a downstream workflow that requires manufacturer information beyond what can be represented in `vaccineCode` using CVX, ICD-11 MMS, or SNOMED CT.

If an Issuer does need to include a vaccine's manufacturer separately from `vaccineCode`, it should be done using `Immunization.manufactuer.identifier`:

```
...
"manufacturer": {
  "identifier": {
    "system": "http://hl7.org/fhir/sid/mvx",
    "value": "MOD"
  }
}
...
```

If `manufactuer.identifier` is populated, it SHALL NOT conflict with any value in `vaccineCode`.

Verifiers MAY choose to ignore `manufactuer.identifer`, and there is no expectation that Verifiers will process or interpret this data element.

Note manufacturer and lot number may be recorded together in other vaccine records. For SMART Health Cards, manufacturer SHALL NOT appear in the `lotNumber` element; instead, Issuers SHALL apply the above conformance criteria to determine if and how manufacturer should be included in the SMART Health Card.

#### Conformance for `status` and `statusReason`

The `status` element indicates if a given Immunization resource represents a completed vaccination, or if the vaccination was not completed for some reason.

Issuers SHALL only produce resources conforming to this profile IF the immunization event was performed AND warrants the `status` being valued `completed`. This requirement is reflected in the profile by fixing the value of `status` to `completed`. Note that `status` is required rather than being omitted entirely due to inheriting `1..1` cardinality from the [Immunization](http://hl7.org/fhir/R4/immunization.html) resource, along with an `Is-Modifier` flag. The profiles of Immunization in this IG add the `MustSupport` flag indicating Verifiers SHALL meaningfully process this element as described on the [Conformance](conformance.html) page, which is important in case a non-conforming resource is provided that has `status` set to a value other than `completed`.

The `statusReason` element is disallowed (`0..0` cardinality) because it is not meaningful when `status` is `completed`.

#### Why `protocolApplied` is not allowed

The `protocolApplied` element is set to `0..0` cardinality because it reflects the provider's intent, rather than being an authoritative source of information about the dose number and number of doses in the series. Including this element could lead to confusion with verifiers who do not recognize this distinction.

Instead, verifiers should use the presence and timestamps of multiple doses along with `vaccineCode` to make their own determination about whether or not an Immunization resource represents a valid dose of the vaccine and, if applicable, completion of a series.

[binding]: http://hl7.org/fhir/R4/valueset-binding-strength.html
[Moderna COVID-19 vaccination]: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0651c7a-2fe2-459d-a766-0d59e919f058


---

// File: input/pagecontent/ValueSet-vaccination-credential-vaccine-manufacturer-value-set-intro.md

#### MVX Codes

The CDC provides the [canonical list of valid MVX codes](https://www2.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=mvx). **The expansion provided below may be out of date.** In cases where the expansion below differs from the CDC list linked above, implementers should defer to the CDC list.


---

// File: input/includes/markdown-link-references.md

[RFC 2119]: https://tools.ietf.org/html/rfc2119
[SMART Health Card]: https://smarthealth.cards/
[SMART Health Cards]: https://smarthealth.cards/
[SMART Health Cards Framework]: https://spec.smarthealth.cards/

[Scenario1Bundle]: https://github.com/dvci/vaccine-credential-ig/blob/{{ site.data['git-branch'] }}/examples/Scenario1Bundle.json
[Scenario2Bundle]: https://github.com/dvci/vaccine-credential-ig/blob/{{ site.data['git-branch'] }}/examples/Scenario2Bundle.json
[Scenario3Bundle]: https://github.com/dvci/vaccine-credential-ig/blob/{{ site.data['git-branch'] }}/examples/Scenario3Bundle.json

<!-- Code systems and value sets -->
[CVX]: https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx
[SNOMED-CT]: https://www.snomed.org
[GTIN]: https://www.gs1.org/standards/id-keys/gtin
[MVX]: https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=mvx
[GLN]: https://www.gs1.org/standards/id-keys/gln







<!-- Generated from script/markdown-links ---------------------------------- -->

<!-- StructureDefinition links -->
[SHCCovid19LaboratoryBundleAD]: StructureDefinition-shc-covid19-laboratory-bundle-ad.html
[SHCCovid19LaboratoryBundleDM]: StructureDefinition-shc-covid19-laboratory-bundle-dm.html
[SHCCovid19LaboratoryResultObservationAD]: StructureDefinition-shc-covid19-laboratory-result-observation-ad.html
[SHCCovid19LaboratoryResultObservationDM]: StructureDefinition-shc-covid19-laboratory-result-observation-dm.html
[SHCInfectiousDiseaseLaboratoryBundleAD]: StructureDefinition-shc-infectious-disease-laboratory-bundle-ad.html
[SHCInfectiousDiseaseLaboratoryBundleDM]: StructureDefinition-shc-infectious-disease-laboratory-bundle-dm.html
[SHCInfectiousDiseaseLaboratoryResultObservationAD]: StructureDefinition-shc-infectious-disease-laboratory-result-observation-ad.html
[SHCInfectiousDiseaseLaboratoryResultObservationDM]: StructureDefinition-shc-infectious-disease-laboratory-result-observation-dm.html
[SHCPatientGeneralAD]: StructureDefinition-shc-patient-general-ad.html
[SHCPatientGeneralDM]: StructureDefinition-shc-patient-general-dm.html
[SHCPatientUnitedStatesAD]: StructureDefinition-shc-patient-us-ad.html
[SHCPatientUnitedStatesDM]: StructureDefinition-shc-patient-us-dm.html
[SHCVaccinationAD]: StructureDefinition-shc-vaccination-ad.html
[SHCVaccinationBundleAD]: StructureDefinition-shc-vaccination-bundle-ad.html
[SHCVaccinationBundleDM]: StructureDefinition-shc-vaccination-bundle-dm.html
[SHCVaccinationDM]: StructureDefinition-shc-vaccination-dm.html


<!-- ValueSet links -->
[CompletedObservationStatus]: ValueSet-completed-observation-status.html
[IdentityAssuranceLevel]: ValueSet-identity-assurance-level.html
[LabResultFindingsSNOMED]: ValueSet-lab-result-findings-snomed.html
[LabResultFindings]: ValueSet-lab-result-findings.html
[QualitativeLabResultFindings]: ValueSet-qualitative-lab-result-findings.html
[QualitativeLabResultsLOINC]: ValueSet-qualitative-lab-results-loinc.html
[SpecimenCollectionSupervisionStatus]: ValueSet-specimen-collection-supervision-status.html


<!-- CodeSystem links -->
[IdentityAssuranceLevelCodeSystem]: CodeSystem-identity-assurance-level-code-system.html


---

// File: input/includes/privacy.md

Due to size constraints and to preserve patient privacy, **information that is not _strictly_ necessary for Verifiers in the context of [this IG's use cases](index.html#use-cases) SHALL NOT be included in SMART Health Cards.**

If private or sensitive information are included in a SMART Health Card, it will be exposed to the Verifier every time the SMART Health Card is presented. Additionally, information cannot be removed without invalidating the entire SMART Health Card.[^explanation] It is therefore critical for Issuers to avoid including any information that could represent a safety or privacy risk to a patient in a SMART Health Card.

[^explanation]: SMART Health Cards (SHCs) are designed to be "tamper-evident," meaning that **any** changes to the contents of a SHC after issuing will be apparent to a Verifier. For example, if an Issuer included a patient's phone number in their SHC, and the patient subsequently removed their phone number from the SHC, a Verifier would be able to tell that the contents of the SHC had changed since issuing (i.e., that tampering had occurred) -- but not specifically *what part* of the SHC had changed. Typically, Verifiers will reject any SHC that has evidence of tampering. For technical details on how tampering can be detected, please refer to [the SMART Health Card specification](https://spec.smarthealth.cards/#issuer-generates-results).


---

// File: input/includes/profile-set-nav.md

{% assign r = site.data.profiles[include.resourceName]  %}
{% capture url %}{{r.instructions}}{% endcapture %}
{% if page.path != url %}
<div style="padding-left: 9.3em; margin-bottom:-1.4em;"><span class="highlight"><strong>&darr;</strong> Start here!</span></div>
{% endif %}
<div class="well profile-set-nav" style="background-color: #fff; margin-top: 2em; width: 100%;">
    <div style="font-size: 1.2em; margin-top: -1.7em;">
      <span style="background-color: #fff; padding-left: 0.5em; padding-right: 0.5em;">
        Profile Group:
        {% if page.path == url %}<strong>{% else %}<a style="font-weight: bold; text-decoration: underline;" href="{{ url }}">{% endif %}
          {{ r.name }}
        {% if page.path == url %}</strong>{% else %}</a>{% endif %}
      </span>
    </div>
    <div style="margin-top: 1em;">
      <p><strong>Description:</strong> {{ r.description | markdownify }}</p>
      <table class="table">
          <thead>
              <tr>
                  <th>Primary profile (DM)</th>
                  <th>Fallback profile (AD)</th>
                  <th>Scope of profile pair</th>
              </tr>
          </thead>
          <tbody>
              {% for profileSet in r.profileSets %}
              <tr>
                  {% capture url %}StructureDefinition-{{ profileSet.slug }}-dm.html{% endcapture %}
                  <td class="{% if page.path == url %}active-page{% endif %}">
                    <a href="{{ url }}">{{ profileSet.name }}</a>
                  </td>
                  {% capture url %}StructureDefinition-{{ profileSet.slug }}-ad.html{% endcapture %}
                  <td class="{% if page.path == url %}active-page{% endif %}">
                      <a href="{{ url }}">Fallback</a>
                  </td>
                  <td>{{ profileSet.scope }}</td>
              </tr>
              {% endfor %}
          </tbody>
      </table>

      <div style="font-size: 0.8em;">
        For more information about the types of profiles in this IG, see <a href="profiles.html">the profiles page</a>.
      </div>
    </div>
</div>

<style>
 /* Restyle table at the top of each profile page */
  #segment-content > div > div > div > div > table.grid:first-of-type {
    margin-top: -12px;
    margin-left: 2%;
    width: 96%;
    border: none;
    background-color: #f5f5f5;

    /* Bananas stuff you apparently have to do to get both a border and round corners on a table */
    border-left: 1px solid rgb(220, 220, 220);
    border-right: 1px solid rgb(220, 220, 220);
    border-bottom: 1px solid rgb(220, 220, 220);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px !important;
    overflow: hidden;
    box-shadow: 0px 0px 1px rgb(220,220,220)
  }

  #segment-content > div > div > div > div > table.grid:first-of-type td {
    font-size: 0.8em;
  }

  /* add 10px exterior padding to table */
  #segment-content > div > div > div > div > table.grid:first-of-type tr:first-of-type td { padding-top:10px; }
  #segment-content > div > div > div > div > table.grid:first-of-type tr:last-of-type td { padding-bottom:10px; }

  /* proper width on first column */
    #segment-content > div > div > div > div > table.grid:first-of-type tr td:first-of-type {
      min-width: 10em;
  }

  /* Fix font for defining url in table */
  #segment-content > div > div > div > div > table.grid:first-of-type tr:first-of-type td:last-of-type {
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace !important;
    font-size: 12px;
  }

  #segment-content > div > div > div > div > table.grid:first-of-type td {
    border: none;
    padding: 0;
  }
  #segment-content > div > div > div > div > table.grid:first-of-type td p {
    font-size: 1em;
  }
  #segment-content > div > div > div > div > table.grid:first-of-type tr td:first-of-type {
    font-weight: bold;
    text-align:  right;
    padding-right:  0.5em;
  }
  #segment-content > div > div > div > div > table.grid:first-of-type tr td p:last-of-type {
    padding-bottom:  0;
    margin-bottom:  0;
  }

  .highlight {
      background-color: #fffeca;
  }

  .profile-set-nav .active-page a {
    color: #eb8f00;
    font-weight: bold;
    text-decoration: none !important;
    cursor: not-allowed;
  }
</style>


{% if page.path contains "-ad.html" %}
**Note!** This is a [fallback "allowable data" (AD) profile](profiles.html#data-minimization-and-privacy). Implementers should validate against the [primary "data minimization" (DM) profile if possible]({{ page.path | replace: '-ad.html', '-dm.html' }}).
{: .alert.alert-danger }
{% endif %}

{% include markdown-link-references.md %}


---

// File: input/fsh/aliases.fsh

Alias: ObsCat = http://terminology.hl7.org/CodeSystem/observation-category
Alias: LNC = http://loinc.org
Alias: SCT = http://snomed.info/sct
Alias: ACT = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: IAL = https://smarthealth.cards/ial
Alias: ICD11 = http://id.who.int/icd/release/11/mms
Alias: ICD11Foundation = http://id.who.int/icd/entity
Alias: ObsStatus = http://hl7.org/fhir/observation-status

// LOINCs for COVID lab tests
// https://www.nlm.nih.gov/vsac/support/usingvsac/covid19valuesets.html
// https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1114.9/expansion
Alias: covid-lab-tests-loinc-vsac = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1114.9

// SNOMED codes for COVID lab test results
// https://www.nlm.nih.gov/vsac/support/usingvsac/covid19valuesets.html
// https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1114.10/expansion
Alias: covid-lab-test-results-snomed-vsac = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1114.10


---

// File: input/fsh/invariants.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////
Invariant:  vc-bundle-lab-status-complete
Description: "Bundle SHALL only include results with status final or status that is subsequent to final."
Expression:  "$this.resource.ofType(Observation).status.lower() in ('final'|'amended'|'corrected')"
Severity:   #error

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant: vc-name-invariant
Description: "Require one of the key name elements to be filled. Allows for `text` for names that cannot be cleanly categorized into `family` and `given` (https://www.nature.com/articles/d41586-020-02761-z)."
Expression: "(family.exists() and given.exists()) xor text.exists()"
Severity: #error

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-date-invariant
Description: "All timestamps SHOULD be represented as Dates (YYYY-MM-DD only)."
Expression:  "$this.toString().matches('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')"
Severity:    #warning

Invariant:   vc-polymorphic-date-invariant
Description: "All timestamps SHOULD be represented as Dates (YYYY-MM-DD only)."
Expression:  "($this as dateTime).toString().matches('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-shall-be-true-if-populated-invariant
Description: "Shall be `true` if populated"
Expression:  "$this.exists().not() or $this = true"
Severity:    #error

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-be-under-50-chars
Description: "Length SHOULD be <50 for data minimization."
Expression:  "$this.length() < 50"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-be-under-40-chars
Description: "Length SHOULD be <40 for data minimization."
Expression:  "$this.length() < 40"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-be-under-30-chars
Description: "Length SHOULD be <30 for data minimization."
Expression:  "$this.length() < 30"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-be-under-20-chars
Description: "Length SHOULD be <20 for data minimization."
Expression:  "$this.length() < 20"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-be-omitted
Description: "SHOULD be omitted for data minimization."
Expression:  "$this.length() = 0"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-be-omitted-privacy
Description: "SHOULD be omitted to protect privacy and for data minimization."
Expression:  "$this.length() = 0"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-shall-be-resource-uri
Description: "IDs SHALL use resource:# format"
Expression:  "$this.matches('^resource:[0-9]+$')"
Severity:    #error

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-should-not-include-string-lot
Description: "lotNumber SHOULD NOT include `Lot #`, `Lot Number`, etc."
Expression:  "$this.lower().contains('lot').not()"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-observation-quantity-should-have-range
Description: "Quantitative lab results SHOULD include reference range"
Expression:  "%resource.referenceRange.exists()"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant: shall-use-known-vaccine-manufacturer-code-system
Description: "SHALL use a known code system for identifying vaccine manufacturers"
Expression: "$this.matches('http://hl7.org/fhir/sid/mvx') or $this.matches('https://www.gs1.org/gln')"
Severity: #error
// Keep list of manufacturer code systems in sync with the intro text for our Immunization profiles

////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   vc-observation-range-only-quantity-or-string
Description: "Reference range SHOULD be included for quantitative lab results, MAY be included for free text (string) results, and SHOULD NOT be included otherwise"
Expression:  "$this.exists() and (%resource.value.ofType(Quantity).exists() or %resource.value.ofType(string).exists())"
Severity:    #warning

////////////////////////////////////////////////////////////////////////////////////////////////////


---

// File: input/fsh/profiles_admin.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:     SHCPatientGeneralAD
Id:          shc-patient-general-ad
Parent:      Patient
Title:       "Patient Profile - General - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a patient in a health card related to infectious disease vaccination and testing issued in jurisdictions where no jurisdiction-specific profile is available.

[See here for implementation details](./patient.html)."

* insert id-should-not-be-populated()

// Inherited short and definition include animals
* . ^short = "Information about an individual receiving an individual receiving a vaccination or infectious disease-related laboratory test"
* . ^definition = "Demographics and other administrative information about an individual receiving a vaccination or infectious disease-related laboratory test."

* name 1..*
* name and name.given and name.family MS
* name obeys vc-name-invariant
* name ^short = "Official name (i.e., legal name) of patient"
* name ^definition = "Official name (i.e., legal name) of the patient, corresponding to `official` in [this value set](https://www.hl7.org/fhir/valueset-name-use.html). Issuers SHALL provide a single `name` element UNLESS they believe providing multiple `name` elements is critical for verification of the credential. If providing only a single `name` element, Issuers SHALL NOT populate `name.use`, and Verifiers SHALL assume that the provided name is `official`."
* name ^comment = "Cardinality for this element is set to `1..*` rather than `1..1` as in rare cases there may be a valid rational for including multiple `name` elements (e.g., for a recent name change that is not yet reflected on a photo ID but will be soon). The Data Minimization version of this profile reflects the rarity of this by setting `name` to `1..1`.

Name parts are typically split between `name.family` and `name.given`. For example Marie Salomea Skłodowska Curie would be represented as `name.family=“Curie”`, and `name.given=[“Marie”, “Salomea”, “Skłodowska”]`.

If it is not clear how to split the parts of a person's name into `name.family` and `name.given`, or if a person has a single word for their name, implementers MAY use `name.text` instead (e.g., `name.text=“Marie Salomea Skłodowska Curie”`).

Issuers SHOULD make every effort to have the contents of `name` match what appears on the patient's government-issued photo ID.

Other implementers SHALL support display/processing of `name.family`/`name.given` AND `name.text`."
* name.text ^short = "Use instead of `family` and `given` if the patient's name cannot be easily split into these elements"
* name.given ^short = "Parts of patient's name other than their family name that appear on photo ID; e.g., first and middle names"
* name.given ^comment = "This element is used to represent all parts of a patient's name that are not their family name. For example, Marie Salomea Skłodowska Curie would have three values for `name.given`: `[\"Marie\", \"Salomea\", \"Skłodowska\"]`.

Implementers SHOULD include all given name parts that appear on the patient's government-issued photo ID."

// FHIR-34447 - Allow name.suffix in primary Patient profiles (https://jira.hl7.org/browse/FHIR-34447)
* name.prefix MS
* name.prefix ^comment = "SHOULD be included if it appears on a government-issued ID."
* name.suffix MS
* name.suffix ^comment = "SHOULD be included if it appears on a government-issued ID."

* birthDate MS
* birthDate ^comment = "If exact date of birth is partially or completely unknown, Issuers SHALL populate this element with the date of birth information listed on the patient's government-issued identification. This MAY include a partial date of birth like `1999` or `1999-01`, or \"filler\" for unknown portions. (E.g., if a patient was born in 1950 but does not know the month or day, their government-issued identification may fill the month and day with `-01-01`. In this case, it is acceptable to populate this element with `1950-01-01` even if it is known the patient was not actually born on January 1.) If date of birth is completely unknown and no government-issued identification is available, Issuers MAY omit this element."

* gender 0..1
* gender ^short = "Administrative gender"
* gender obeys use-only-if-required-by-law
* gender ^definition = "Administrative gender.

Issuers SHALL NOT include `gender` unless required by law in the jurisdiction where the SMART Health Card is issued.

Verifiers SHALL NOT use `gender` in their workflows unless required by law in both the jurisdiction where the SMART Health Card was issued and the jurisdiction governing the Verifier."
* gender ^comment = "SMART Health Cards cannot be used as a form of identification. From the [SMART Health Card specification](https://spec.smarthealth.cards/#can-a-smart-health-card-be-used-as-a-form-of-identification):

_\"SMART Health Cards are designed for use alongside existing forms of identification (e.g., a driver's license in person, or an online ID verification service). A SMART Health Card is a non-forgeable digital artifact analogous to a paper record on official letterhead. Concretely, the problem SMART Health Cards solve is one of provenance: a digitally signed SMART Health Card is a credential that guarantees that a specific issuer generated the record. The duty of verifying that the person presenting a Health Card is the subject of the data within the Health Card (or is authorized to act on behalf of this data subject) falls to the person or system receiving and validating a Health Card.\"_

To facilitate verifying that the person presenting a Health Card is the subject of the data within the Health Card (or is authorized to act on behalf of this data subject), the patient's name and date of birth are included the SMART Health Card. **Gender is typically not included** because name and date of birth are sufficient for verification workflows, and there may be legitimate reasons why gender in a SMART Health Card does not match that in an existing form of identification (e.g., a change in administrative gender, or differences in how gender is represented). Note that it may not be possible to get a re-issued SMART Health Card if a patient's administrative gender changes.

Additionally, patients may not wish to share their administrative gender with Verifiers. Since this information is typically not necessary for the Verifiers' use case, it should be omitted as is consistent with the [privacy by design](index.html#privacy-by-design) approach used throughout this IG."

* photo 0..0
* photo ^comment = "Attachments are not allowed due to data size constraints."

* contact 0..0

* address.text 0..0
* address.text ^short = "SHALL not be included"
* address.text ^definition = "Full physical address SHALL not be included because of patient privacy concerns."
* address.text ^comment = "There are scenarios where a Holder of a credential may wish to present their credential without revealing their full physical address."
* address.line 0..0
* address.line ^short = "SHALL not be included"
* address.line ^definition = "Full physical address SHALL not be included because of patient privacy concerns."
* address.line ^comment = "There are scenarios where a Holder of a credential may wish to present their credential without revealing their full physical address."

* insert contact-information-should-not-be-populated(telecom.value)
* insert contact-information-should-not-be-populated(address.city)
* insert contact-information-should-not-be-populated(address.district)
* insert contact-information-should-not-be-populated(address.state)
* insert contact-information-should-not-be-populated(address.postalCode)

RuleSet: contact-information-should-not-be-populated(path)
* {path} obeys vc-should-be-omitted-privacy
* {path} ^comment = "For patient privacy reasons, this element SHALL NOT be populated unless the Issuer believes the credential cannot be verified in its absence."


////////////////////////////////////////////////////////////////////////////////////////////////////

Invariant:   use-only-if-required-by-law
Description: "SHALL be omitted UNLESS required by law in jurisdiction where SHC is issued"
Expression:  "$this.length() = 0"
Severity:    #warning


////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:     SHCPatientGeneralDM
Id:          shc-patient-general-dm
Parent:      shc-patient-general-ad
Title:       "Patient Profile - General - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a patient in a health card related to infectious disease vaccination and testing issued in jurisdictions where no jurisdiction-specific profile is available.

[See here for implementation details](./patient.html)."

* id 0..0
* meta 0..0
* implicitRules 0..0
* language 0..0
* text 0..0
* contained 0..0
* extension 0..0
* modifierExtension 0..0
* active 0..0
* name 1..1
* name.id 0..0
* name.extension 0..0
* name.use 0..0
* telecom 0..0
* deceased[x] 0..0
* address 0..0
* maritalStatus 0..0
* multipleBirth[x] 0..0
* photo 0..0
* communication 0..0
* generalPractitioner 0..0
* managingOrganization 0..0
* link 0..0

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:     SHCPatientUnitedStatesAD
Id:          shc-patient-us-ad
Parent:      shc-patient-general-ad
Title:       "Patient Profile - United States - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a patient in a health card related to infectious disease vaccination and testing issued in the United States.

[See here for implementation details](./patient.html)."
* identifier 0..0
* identifier ^definition = "Identifer is not allowed in this IG due to risk of accidental, unnecessary exposure of sensitive identifiers to verifiers. For use in the United States."

* gender 0..0

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:     SHCPatientUnitedStatesDM
Id:          shc-patient-us-dm
Parent:      shc-patient-general-dm
Title:       "Patient Profile - United States - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a patient in a health card related to infectious disease vaccination and testing issued in the United States.

[See here for implementation details](./patient.html)."

* identifier 0..0
* identifier ^definition = "Identifer is not allowed in this IG due to risk of accidental, unnecessary exposure of sensitive identifiers to verifiers."


---

// File: input/fsh/profiles_bundle.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////

RuleSet: common-bundle-rules

* id ^short = "Should be omitted"
* id ^definition = "It is not necessary to provide an `id` for Bundles profiled in this IG. This element SHOULD be omitted for data minimization reasons."
* id ^comment = "n/a"
* id obeys vc-should-be-omitted

* type  = #collection (exactly)
* type MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS

* insert id-should-not-be-populated(entry.)

RuleSet: common-bundle-dm-rules

* id 0..0
* identifier 0..0
* meta 0..0
* timestamp 0..0
* implicitRules 0..0
* language 0..0
* total 0..0
* link 0..0
* signature 0..0

RuleSet: bundleSliceDM(sliceName)
* entry[{sliceName}].id 0..0
* entry[{sliceName}].extension 0..0
* entry[{sliceName}].modifierExtension 0..0
* entry[{sliceName}].link 0..0
* entry[{sliceName}].search 0..0
* entry[{sliceName}].request 0..0
* entry[{sliceName}].response 0..0

* entry[{sliceName}].fullUrl 1..1
* entry[{sliceName}].fullUrl MS
* entry[{sliceName}].fullUrl ^short = "Locally unique identifier like resource:0"
* entry[{sliceName}].fullUrl ^definition = "Identifier for the contained resource that is locally unique within this Bundle. The identifier SHALL use `resource:#` format, where `#` is an integer incremented from 0 to _n_ within the Bundle."
* entry[{sliceName}].fullUrl ^comment = "n/a"
* entry[{sliceName}].fullUrl obeys vc-shall-be-resource-uri

RuleSet: bundleDM
// These have to come afterwards or the slice-specific constraints aren't applied
* entry.id 0..0
* entry.extension 0..0
* entry.modifierExtension 0..0
* entry.link 0..0
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0

* entry.fullUrl 1..1
* entry.fullUrl MS
* entry.fullUrl ^short = "Locally unique identifier like resource:0"
* entry.fullUrl ^definition = "Identifier for the contained resource that is locally unique within this Bundle. The identifier SHALL use `resource:#` format, where `#` is an integer incremented from 0 to _n_ within the Bundle."
* entry.fullUrl ^comment = "n/a"


RuleSet: bundleSliceAD(sliceName)
* entry[{sliceName}].fullUrl 1..1
* entry[{sliceName}].fullUrl MS
* entry[{sliceName}].fullUrl ^short = "Locally unique identifier like resource:0"
* entry[{sliceName}].fullUrl ^definition = "Identifier for the contained resource that is locally unique within this Bundle. The identifier SHALL use `resource:#` format, where `#` is an integer incremented from 0 to _n_ within the Bundle."
* entry[{sliceName}].fullUrl ^comment = "n/a"
* entry[{sliceName}].fullUrl obeys vc-shall-be-resource-uri

RuleSet: bundleAD
// These have to come afterwards or the slice-specific constraints aren't applied
* entry.fullUrl 1..1
* entry.fullUrl MS
* entry.fullUrl ^short = "Locally unique identifier like resource:0"
* entry.fullUrl ^definition = "Identifier for the contained resource that is locally unique within this Bundle. The identifier SHALL use `resource:#` format, where `#` is an integer incremented from 0 to _n_ within the Bundle."
* entry.fullUrl ^comment = "n/a"

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile: SHCVaccinationBundleAD
Parent: Bundle
Id: shc-vaccination-bundle-ad
Title: "Vaccination Bundle - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a bundle of patient and vaccination data for health cards.

[See here for implementation details](./bundles.html)."

* insert common-bundle-rules

* entry contains
    // These resources are required per Conformance > Supported Profiles.
    patient 1..1 MS and
    immunization 1..* MS // and
    // vaccineReaction 0..*

* entry[patient] ^short = "Patient"
* entry[patient] ^definition = "The patient who is the subject of the Bundle"
* entry[patient].resource only shc-patient-general-ad
* entry[patient].resource 1..1
* insert bundleSliceAD(patient)


* entry[immunization] ^short = "Immunization"
* entry[immunization] ^definition = "Immunization"
* entry[immunization].resource only SHCVaccinationAD
* entry[immunization].resource 1..1
* insert bundleSliceAD(immunization)


// * entry[vaccineReaction] ^short = "Vaccination reaction"
// * entry[vaccineReaction] ^definition = "Vaccination reaction"
// * entry[vaccineReaction].resource only SHCVaccinationReactionObservationAD

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile: SHCVaccinationBundleDM
Parent: Bundle
Id: shc-vaccination-bundle-dm
Title: "Vaccination Bundle - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a bundle of patient and vaccination data for health cards.

[See here for implementation details](./bundles.html)."

* insert common-bundle-rules
* insert common-bundle-dm-rules

* entry contains
    // These resources are required per Conformance > Supported Profiles.
    patient 1..1 MS and
    immunization 1..* MS // and
    // vaccineReaction 0..*

* entry[patient] ^short = "Patient"
* entry[patient] ^definition = "The patient who is the subject of the Bundle"
* entry[patient].resource only shc-patient-general-dm
* entry[patient].resource 1..1
* insert bundleSliceDM(patient)


* entry[immunization] ^short = "Immunization"
* entry[immunization] ^definition = "Immunization"
* entry[immunization].resource only SHCVaccinationDM
* entry[immunization].resource 1..1
* insert bundleSliceDM(immunization)

* insert bundleDM


// * entry[vaccineReaction] ^short = "Vaccination reaction"
// * entry[vaccineReaction] ^definition = "Vaccination reaction"
// * entry[vaccineReaction].resource only SHCVaccinationReactionObservationDM

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile: SHCCovid19LaboratoryBundleAD
Parent: Bundle
Id: shc-covid19-laboratory-bundle-ad
Title: "COVID-19-specific Laboratory Test Results Bundle - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a bundle of patient and COVID-19 laboratory testing data for health cards.

[See here for implementation details](./bundles.html)."

* insert common-bundle-rules

* entry contains
    // These resources are required per Conformance > Supported Profiles.
    patient 1..1 MS and
    labResult 1..* MS

* entry[patient] ^short = "Patient"
* entry[patient] ^definition = "The patient who is the subject of the Bundle"
* entry[patient].resource only shc-patient-general-ad
* entry[patient].resource 1..1
* insert bundleSliceAD(patient)

* entry[labResult] ^short = "Laboratory result"
* entry[labResult] ^definition = "Laboratory result"
* entry[labResult].resource only SHCCovid19LaboratoryResultObservationAD
* entry[labResult] obeys vc-bundle-lab-status-complete
* entry[labResult].resource 1..1
* insert bundleSliceAD(labResult)

* insert bundleAD

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile: SHCInfectiousDiseaseLaboratoryBundleAD
Parent: Bundle
Id: shc-infectious-disease-laboratory-bundle-ad
Title: "Infectious Disease (Generic) Laboratory Test Results Bundle - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a bundle of patient and generic infectious disease laboratory testing data for health cards.

[See here for implementation details](./bundles.html)."

* insert common-bundle-rules

* entry contains
    // These resources are required per Conformance > Supported Profiles.
    patient 1..1 MS and
    labResult 1..* MS

* entry[patient] ^short = "Patient"
* entry[patient] ^definition = "The patient who is the subject of the Bundle"
* entry[patient].resource only shc-patient-general-ad
* entry[patient].resource 1..1
* insert bundleSliceAD(patient)


* entry[labResult] ^short = "Laboratory result"
* entry[labResult] ^definition = "Laboratory result"
* entry[labResult].resource only SHCInfectiousDiseaseLaboratoryResultObservationAD
* entry[labResult] obeys vc-bundle-lab-status-complete
* entry[labResult].resource 1..1
* insert bundleSliceAD(labResult)

* insert bundleAD


////////////////////////////////////////////////////////////////////////////////////////////////////

Profile: SHCInfectiousDiseaseLaboratoryBundleDM
Parent: Bundle
Id: shc-infectious-disease-laboratory-bundle-dm
Title: "Infectious Disease (Generic) Laboratory Test Results Bundle - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a bundle of patient and generic infectious disease laboratory testing data for health cards.

[See here for implementation details](./bundles.html)."

* insert common-bundle-rules
* insert common-bundle-dm-rules

* entry contains
    // These resources are required per Conformance > Supported Profiles.
    patient 1..1 MS and
    labResult 1..* MS

* entry[patient] ^short = "Patient"
* entry[patient] ^definition = "The patient who is the subject of the Bundle"
* entry[patient].resource only shc-patient-general-dm
* entry[patient].resource 1..1
* insert bundleSliceDM(patient)


* entry[labResult] ^short = "Laboratory result"
* entry[labResult] ^definition = "Laboratory result"
* entry[labResult].resource only SHCInfectiousDiseaseLaboratoryResultObservationDM
* entry[labResult] obeys vc-bundle-lab-status-complete
* entry[labResult].resource 1..1
* insert bundleSliceDM(labResult)

* insert bundleDM


////////////////////////////////////////////////////////////////////////////////////////////////////

Profile: SHCCovid19LaboratoryBundleDM
Parent: Bundle
Id: shc-covid19-laboratory-bundle-dm
Title: "COVID-19-specific Laboratory Test Results Bundle - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a bundle of patient and COVID-19 laboratory testing data for health cards.

[See here for implementation details](./bundles.html)."

* insert common-bundle-rules
* insert common-bundle-dm-rules

* entry contains
    // These resources are required per Conformance > Supported Profiles.
    patient 1..1 MS and
    labResult 1..* MS

* entry[patient] ^short = "Patient"
* entry[patient] ^definition = "The patient who is the subject of the Bundle"
* entry[patient].resource only shc-patient-general-dm
* entry[patient].resource 1..1
* insert bundleSliceDM(patient)

* entry[labResult] ^short = "Laboratory result"
* entry[labResult] ^definition = "Laboratory result"
* entry[labResult].resource only SHCCovid19LaboratoryResultObservationDM
* entry[labResult] obeys vc-bundle-lab-status-complete
* entry[labResult].resource 1..1
* insert bundleSliceDM(labResult)

* insert bundleDM

////////////////////////////////////////////////////////////////////////////////////////////////////

---

// File: input/fsh/profiles_lab.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////

// Defines a common set of rules to use for Observation profiles in this IG based on
// https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab.html.
//
// This approach is preferable to a hierarchy of profiles or the use of abstract profiles because
// it allows the "differential" view in the built IG to show all differences from the base
// resource, rather than differences from the parent profile. Usually implementers will want to see
// the former rather than the latter.
RuleSet: LaboratoryResultObservation

* status MS
* status from completed-observation-status (required)

* code MS

* subject only Reference(shc-patient-general-ad)
* subject 1..1 MS
* subject ^short = "Patient to whom lab result applies"
* subject ^definition = "Reference to a VaccinationCredentialPatient-conforming resource who is subject of lab result."

* effective[x] MS
* effective[x] only dateTime or Period
* effective[x] 1..1

* value[x] 1..1
* value[x] MS
* value[x] only CodeableConcept or Quantity or string
* value[x] ^comment = "Issuers SHALL provide a computable representation of laboratory results if at all possible. If the Issuer is unable to accurately translate laboratory results into a computable form, it is unlikely a Verifier will be able to interpret the results. Issuers SHALL make every possible effort to resolve non-computable results prior to issuing credentials. In rare cases when this is not possible, Issuers MAY populate `valueString` with a free text result."
* valueCodeableConcept 0..1 // work-around to ensure alphabetic order of elements in diff of structure definition - see https://github.com/hapifhir/org.hl7.fhir.core/issues/562
* valueQuantity obeys vc-observation-quantity-should-have-range
* valueString ^short = "String representation of results; used ONLY when a computable representation is not possible"
* valueString obeys vc-should-be-under-20-chars

* referenceRange MS
* referenceRange ^short = "Provides guide for interpretation. SHOULD include if using valueQuantity."
* referenceRange ^comment = "Issuers SHOULD provide a reference range for quantitative lab results to allow recipients to correctly interpret the results. Issuers MAY provide a reference range for free text (string) results."
* referenceRange obeys vc-observation-range-only-quantity-or-string

* performer only Reference(Organization)
* performer MS
* performer 0..1
* performer ^short = "Organization which was responsible for laboratory record; typically the organization collecting the sample or performing the test."
* performer ^definition = "Organization which was responsible for laboratory record. Typically this is the organization that collected the sample (e.g., a pharmacy or outpatient facility) or performed the test (e.g., a clinical laboratory). Issuers SHOULD provide display name only. This is provided to Verifiers in case of invalid data in the credential, to support manual validation. This is not expected to be a computable Organization identifier."

// VCI-specific (not from US Core)
* insert id-should-not-be-populated()

* meta MS
* meta.security 0..1
* meta.security from identity-assurance-level (required)
* meta.security ^short = "Limited security label to convey identity level of assurance for patient referenced by this resource."
* meta.security ^definition = "Limited security metadata which conveys an attestation that the lab testing provider performed a certain level of identity verification at the time of service. If known, Issuers SHALL attest to the highest level that applies."
* meta.security MS

* performer MS
* performer 0..1
* performer only Reference(Organization)
* performer MS
* performer ^short = "Organization which was responsible for the laboratory test result."
* performer ^definition = "Only `Observation.performer.display` SHOULD be populated. See the definition of that element for details."
* performer.display ^short = "Short, human-readable text representation of the organization."
* performer.display MS
* performer.display 1..1
* performer.display ^definition = "Organization which was responsible for the laboratory test result. Issuers SHOULD provide display name only. This is provided to Verifiers in case of invalid data in the credential, to support manual validation. This is not expected to be a computable Organization identifier."
* performer.display obeys vc-should-be-under-30-chars


* insert reference-to-absolute-uri(subject)

* insert SpecimenSupervisionStatusAD

////////////////////////////////////////////////////////////////////////////////////////////////////


RuleSet: SpecimenSupervisionStatusDM

* component ^slicing.rules = #closed

* component 0..1
* component[specimen-supervision-status].code.id 0..0
* component[specimen-supervision-status].code.extension 0..0
* component[specimen-supervision-status].code.coding.id 0..0
* component[specimen-supervision-status].code.coding.extension 0..0
* component[specimen-supervision-status].code.coding.display 0..0
* component[specimen-supervision-status].code.coding.version 0..0
* component[specimen-supervision-status].code.coding.userSelected 0..0
* component[specimen-supervision-status].code.text 0..0

* component[specimen-supervision-status].valueCodeableConcept.id 0..0
* component[specimen-supervision-status].valueCodeableConcept.extension 0..0
* component[specimen-supervision-status].valueCodeableConcept.coding.id 0..0
* component[specimen-supervision-status].valueCodeableConcept.coding.extension 0..0
* component[specimen-supervision-status].valueCodeableConcept.coding.display 0..0
* component[specimen-supervision-status].valueCodeableConcept.coding.version 0..0
* component[specimen-supervision-status].valueCodeableConcept.coding.userSelected 0..0
* component[specimen-supervision-status].valueCodeableConcept.text 0..0

// Has to be at the bottom, or these elements show up in the snapshot for the slice
* component.id 0..0
* component.extension 0..0
* component.modifierExtension 0..0
* component.dataAbsentReason 0..0
* component.interpretation 0..0
* component.referenceRange 0..0


////////////////////////////////////////////////////////////////////////////////////////////////////

RuleSet: SpecimenSupervisionStatusAD

* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.description = "Slicing based on the code"
* component ^slicing.rules = #open
* component contains specimen-supervision-status 0..1 MS

* component[specimen-supervision-status].code.coding 1..1
* component[specimen-supervision-status].code.coding.system = SCT (exactly)
* component[specimen-supervision-status].code.coding.system 1..1
* component[specimen-supervision-status].code.coding.code 1..1
* component[specimen-supervision-status].code.coding.code = #1208522006 (exactly)
* component[specimen-supervision-status].code.coding.code ^short = "SNOMED CT concept 'Type of supervision for specimen collection (observable entity)'"

* component[specimen-supervision-status].valueCodeableConcept from SpecimenCollectionSupervisionStatus (required)
* component[specimen-supervision-status].valueCodeableConcept 1..1
* component[specimen-supervision-status].valueCodeableConcept.extension 0..0
* component[specimen-supervision-status].valueCodeableConcept.coding 1..1
* component[specimen-supervision-status].valueCodeableConcept.coding.system 1..1
* component[specimen-supervision-status].valueCodeableConcept.coding.code 1..1


////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:        SHCCovid19LaboratoryResultObservationAD
Parent:         Observation
Id:             shc-covid19-laboratory-result-observation-ad
Title:          "COVID-19 Laboratory Result Observation Profile - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a laboratory testing result for COVID-19 in a health card.

[See here for implementation details](./laboratory-results-observation.html)."

* insert LaboratoryResultObservation

// This binding can be required because implementers can fall back to SHCInfectiousDiseaseLaboratoryResultObservation
* code from https://terminology.smarthealth.cards/ValueSet/lab-qualitative-test-covid (required)
* code ^definition = "If an appropriate code is not found in the bound value set, use the SHCInfectiousDiseaseLaboratoryResultObservation profile instead, which allows any LOINC."

* valueCodeableConcept from https://terminology.smarthealth.cards/ValueSet/lab-qualitative-result (required)
* code ^definition = "If an appropriate code is not found in the bound value set, use the SHCInfectiousDiseaseLaboratoryResultObservation profile instead, which allows for any SNOMED CT descendant of `441742003` \"Evaluation finding (finding)\" or `362981000` \"Qualifier value (qualifier value)\"."

////////////////////////////////////////////////////////////////////////////////////////////////////

RuleSet: LaboratoryResultObservationDM

* code.id 0..0
* code.extension 0..0
// Since code.coding is expanded in the snapshot, add a rule to require the
// necessary elements to conform to the required binding. This is redundant, but
// not having the cardinality rules will be more confusing than omitting them.
* code.coding 1..1
* code.coding.id 0..0
* code.coding.extension 0..0
* code.coding.system 1..1 // needed for required binding -- see above
* code.coding.version 0..0
* code.coding.code 1..1 // needed for required binding -- see above
* code.coding.display 0..0
* code.coding.userSelected 0..0
* code.text 0..0
* id 0..0
* identifier 0..0
* meta.versionId 0..0
* meta.lastUpdated 0..0
* meta.source 0..0
* meta.profile 0..0
* meta.tag 0..0
* meta.id 0..0
* meta.extension 0..0
* implicitRules 0..0
* language 0..0
* text 0..0
* contained 0..0
* extension 0..0
* modifierExtension 0..0
* basedOn 0..0
* partOf 0..0
* category 0..0
* subject.id 0..0
* subject.extension 0..0
* encounter 0..0
* focus 0..0
* issued 0..0
* dataAbsentReason 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0
* performer.id 0..0
* performer.extension 0..0
* performer.reference 0..0
* performer.type 0..0
* performer.identifier 0..0
* valueCodeableConcept.id 0..0
* valueCodeableConcept.extension 0..0
// Since valueCodeableConcept.coding is expanded in the snapshot, add a rule to require the
// necessary elements to conform to the required binding. This is redundant, but
// not having the cardinality rules will be more confusing than omitting them.
* valueCodeableConcept.coding 1..1
* valueCodeableConcept.coding.id 0..0
* valueCodeableConcept.coding.extension 0..0
* valueCodeableConcept.coding.system 1..1 // needed for required binding -- see above
* valueCodeableConcept.coding.version 0..0
* valueCodeableConcept.coding.code 1..1 // needed for required binding -- see above
* valueCodeableConcept.coding.display 0..0
* valueCodeableConcept.coding.userSelected 0..0
* valueCodeableConcept.text 0..0
* valueCodeableConcept.text 0..0
* referenceRange.id 0..0
* referenceRange.extension 0..0
* referenceRange.modifierExtension 0..0
* referenceRange.appliesTo 0..0
* referenceRange.age 0..0
* referenceRange.type.id 0..0
* referenceRange.type.extension 0..0
* referenceRange.type.text 0..0
* valueQuantity.id 0..0 // Needed to fix test failure - this makes no sense but it works. See https://github.com/dvci/vaccine-credential-ig/pull/145
* valueString.id 0..0 // Needed to fix test failure - this makes no sense but it works. See https://github.com/dvci/vaccine-credential-ig/pull/145

* insert SpecimenSupervisionStatusDM

////////////////////////////////////////////////////////////////////////////////////////////////////


Profile:        SHCCovid19LaboratoryResultObservationDM
Parent:         SHCCovid19LaboratoryResultObservationAD
Id:             shc-covid19-laboratory-result-observation-dm
Title:          "COVID-19 Laboratory Result Observation Profile - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a laboratory testing result for COVID-19 in a health card.

[See here for implementation details](./laboratory-results-observation.html)."

* insert LaboratoryResultObservationDM

* insert reference-to-ad-profile-comment(subject)

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:        SHCInfectiousDiseaseLaboratoryResultObservationAD
Parent:         Observation
Id:             shc-infectious-disease-laboratory-result-observation-ad
Title:          "Generic Laboratory Result Observation Profile - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing an infectious disease laboratory testing result in a health card.

[See here for implementation details](./laboratory-results-observation.html)."

* insert LaboratoryResultObservation

// Show an error if the code is part of a value set used in a disease-specific profile. If that's
// the case, there's no reason to use this generic profile -- the disease-specific profile should
// be used instead.
* code from http://hl7.org/fhir/ValueSet/observation-codes (required) // All LOINCs - https://www.hl7.org/fhir/valueset-observation-codes.html
* code ^short = "LOINC identifying the lab test"

* valueCodeableConcept from lab-result-findings (required)

////////////////////////////////////////////////////////////////////////////////////////////////////


Profile:        SHCInfectiousDiseaseLaboratoryResultObservationDM
Parent:         SHCInfectiousDiseaseLaboratoryResultObservationAD
Id:             shc-infectious-disease-laboratory-result-observation-dm
Title:          "Generic Laboratory Result Observation Profile - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing an infectious disease laboratory testing result in a health card.

[See here for implementation details](./laboratory-results-observation.html)."

* insert LaboratoryResultObservationDM

* insert reference-to-ad-profile-comment(subject)


---

// File: input/fsh/profiles_vaccination.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:     SHCVaccinationAD
Id:          shc-vaccination-ad
Parent:      Immunization
Title:       "Vaccination Profile - Allowable Data"
Description: "Defines a [fallback (AD) profile](./profiles.html#conformance-to-profiles) representing a vaccination in a health card.

[See here for implementation details](./vaccination.html)."
* . ^definition = "Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. If the immunization is part of a multi-dose series, a separate Immunization resource SHALL be used to represent each dose."

* insert id-should-not-be-populated()

* patient only Reference(shc-patient-general-ad)
* patient MS
* insert reference-to-absolute-uri(patient)

* meta MS
* meta.security 0..1
* meta.security from identity-assurance-level (required)
* meta.security ^short = "Limited security label to convey identity level of assurance for patient referenced by this resource."
* meta.security ^definition = "Limited security metadata which conveys an attestation that the immunization provider performed a certain level of identity verification at the time of service. If known, Issuers SHALL attest to the highest level that applies."
* meta.security MS

// occurrence[x] is already 1..1 in the base resource
* occurrence[x] only dateTime
* occurrence[x] MS
* occurrence[x] ^definition = "Date vaccine administered (`YYYY-MM-DD` format)."
* occurrence[x] ^comment = "For data minimization reasons, only year, month, and date SHOULD be reported for this element. Exact time (hour, minute, second) are not relevant for our use cases."
* occurrence[x] obeys vc-polymorphic-date-invariant

// Parent profile short description is not as clear as it could be
* primarySource ^short = "Information in this record from person who administered vaccine?"



// Vaccine code
* vaccineCode 1..1
* vaccineCode MS
* vaccineCode ^short = "Codes identifying the vaccine product administered"

// Override default example binding with something that makes more sense in the context of our IG
// https://chat.fhir.org/#narrow/stream/179166-implementers/topic/IG/near/234918476
* vaccineCode from https://terminology.smarthealth.cards/ValueSet/immunization-all-cvx (example)

* vaccineCode.coding 1..*
* vaccineCode.coding MS
* vaccineCode.coding ^slicing.discriminator.type = #value
* vaccineCode.coding ^slicing.discriminator.path = "system"
* vaccineCode.coding ^slicing.rules = #closed
* vaccineCode.coding ^slicing.description = "Slicing based on the code system"

// Keep in sync with use of `VaccineCodeCodingDM` below for the DM profile
* vaccineCode.coding contains
    cvx 0..1 and
    snomed 0..1 and
    icd11 0..1

// It's necessary to fix `system` **in addition** to the value set binding for the slicing to work
* vaccineCode.coding[cvx] ^short = "CVX code identifying the administered vaccine product"
* vaccineCode.coding[cvx] from https://terminology.smarthealth.cards/ValueSet/immunization-all-cvx (required)
* vaccineCode.coding[cvx].system = "http://hl7.org/fhir/sid/cvx" (exactly)

* vaccineCode.coding[snomed] ^short = "SNOMED CT code identifying the administered vaccine product"
* vaccineCode.coding[snomed] from https://terminology.smarthealth.cards/ValueSet/immunization-all-snomed (required)
* vaccineCode.coding[snomed].system = "http://snomed.info/sct" (exactly)

* vaccineCode.coding[icd11] ^short = "ICD-11 MMS code identifying the administered vaccine product"
* vaccineCode.coding[icd11] from https://terminology.smarthealth.cards/ValueSet/immunization-all-icd11 (required)
* vaccineCode.coding[icd11].system = "http://id.who.int/icd/release/11/mms" (exactly)

// Manufacturer
// Why we are doing this rather than an extension or in vaccineCode
// https://chat.fhir.org/#narrow/stream/179202-terminology/topic/Using.20multiple.20codes.20with.20CodeableConcept.20Datatype/near/236750401
// Note that the FHIR validator will not currently validate that a given `value` is in the `system`
// inside `manufacturer.identifier`.
* manufacturer.identifier ^short = "Only populate when vaccine type is not provided in vaccineCode"
* manufacturer.identifier.system 1..1
* manufacturer.identifier.system obeys shall-use-known-vaccine-manufacturer-code-system
* manufacturer.identifier.system ^short = "Code system used to identify vaccine manufacturer"
* manufacturer.identifier.value 1..1
* manufacturer.identifier.system ^short = "Code identifying vaccine manufacturer"


* lotNumber MS
* lotNumber obeys vc-should-be-under-20-chars
* lotNumber obeys vc-should-not-include-string-lot
* lotNumber ^short = "String representing lot number like `0123L45A`"
* lotNumber ^definition = "Lot number of the vaccine product. Implementers SHOULD NOT include text synonymous with \"lot number\" in this element as this is redundant. For example, use `0123L45A` rather than `Lot # 0123L45A`."

* protocolApplied 0..0 // See explanation in pagecontent/StructureDefinition-vaccination-credential-immunization-intro.md

* performer MS
* performer 0..1
* performer.actor only Reference(Organization)
* performer.actor MS
* performer.actor ^short = "Organization which was responsible for vaccine administration."
* performer.actor ^definition = "Only `Immunization.performer.actor.display` SHOULD be populated. See the definition of that element for details."
* performer.actor.display ^short = "Short, human-readable text representation of the organization."
* performer.actor.display MS
* performer.actor.display 1..1
* performer.actor.display ^definition = "Organization which was responsible for vaccine administration. Issuers SHOULD provide display name only. This is provided to Verifiers in case of invalid data in the credential, to support manual validation. This is not expected to be a computable Organization identifier."
* performer.actor.display obeys vc-should-be-under-30-chars

* status ^short = "Whether or not the vaccination was completed"
* status MS
* status = #completed (exactly)

// If `status` is fixed to `completed`, `statusReason` is meaningless since it's only used for
// incomplete vaccinations.
* statusReason 0..0
// This is the value set we would use if we were including `statusReason`
// * statusReason from VaccinationCredentialStatusReasonValueSet (extensible)

// Support for IIS value set for RXA-9 - this is part of CDC NIP001
// * reportOrigin from http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.7450 (extensible)

// Support for IIS value set for RXR-2
// * site from http://terminology.hl7.org/ValueSet/v2-0163 (extensible)

// Support for IIS value set for RXR-1
// * route from https://terminology.hl7.org/2.1.0/ValueSet-v2-0162.html (extensible)

// Support for IIS value set for OBX-5 (extensible)
// * fundingSource from http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.3287 (extensible)

// * reaction.detail only Reference(shc-vaccination-reaction-observation-ad)

* isSubpotent MS
* isSubpotent ^short = "Set to `true` if dose is subpotent; omit otherwise"
* isSubpotent ^definition = "Indication if a dose is considered to be subpotent.

Issuers SHALL populate `isSubpotent` with `true` if the dose is known to be subpotent. Alternatively, Issuers MAY choose to not produce an Immunization resource at all if the dose is known to be subpotent as this resource would be unlikely to provide value to the other actors.

Issuers SHALL NOT populate `isSubpotent` for potent doses.

Verifiers SHALL assume that if an Immunization resource is provided and `isSubpotent` is empty, then the dose was fully potent."
* isSubpotent ^comment = "It is critical that Verifiers process this element if it exists and is set to `true`. Therefore, `isSubpotent` is marked as `MustSupport` because it is also flagged with `Is-Modifier`, and per the [conformance requirements](conformance.html), Verifiers SHALL \"meaningfully process\" elements that are `MustSupport` and `Is-Modifier`.

This element is therefore an exception to the guidance that Issuers must populate `MustSupport` elements if the data are available. An invariant is used to provide a computable representation of this exception: it will produce an error if `isSubpotent = false`, which is the expected value of this element for the vast majority of resources. Because full potency is implicit per this element's definition, we do not want to populate `isSubpotent` with `false` because it increases payload size without adding information.

If `isSubpotent` was not allowed at all (`0..0` cardinality), the concern is that resources where `isSubpotent = true` would inadvertently be generated without any indication they were not potent."
* isSubpotent obeys vc-shall-be-true-if-populated-invariant

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:     SHCVaccinationDM
Id:          shc-vaccination-dm
Parent:      shc-vaccination-ad
Title:       "Vaccination Profile - Data Minimization"
Description: "Defines a [primary (DM) profile](./profiles.html#conformance-to-profiles) representing a vaccination in a health card.

[See here for implementation details](./vaccination.html)."
* id 0..0
* meta.versionId 0..0
* meta.lastUpdated 0..0
* meta.source 0..0
* meta.profile 0..0
* meta.tag 0..0
* meta.id 0..0
* meta.extension 0..0
* identifier 0..0
* implicitRules 0..0
* language 0..0
* text 0..0
* contained 0..0
* extension 0..0
* modifierExtension 0..0
* statusReason 0..0
* encounter 0..0
* recorded 0..0
* primarySource 0..0
* reportOrigin 0..0
* location 0..0
* manufacturer 0..0
* expirationDate 0..0
* site 0..0
* route 0..0
* doseQuantity 0..0
* performer.function 0..0
* performer.id 0..0
* performer.extension 0..0
* performer.modifierExtension 0..0
* performer.actor.id 0..0
* performer.actor.extension 0..0
* performer.actor.reference 0..0
* performer.actor.type 0..0
* performer.actor.identifier 0..0
* note 0..0
* reasonCode 0..0
* reasonReference 0..0
* subpotentReason 0..0
* education 0..0
* fundingSource 0..0
* reaction 0..0
* programEligibility 0..0

* vaccineCode.id 0..0
* vaccineCode.extension 0..0
* vaccineCode.text 0..0

* insert vaccineCodeCodingDM(cvx)
* insert vaccineCodeCodingDM(snomed)
* insert vaccineCodeCodingDM(icd11)

* insert reference-to-ad-profile-comment(patient)


RuleSet: vaccineCodeCodingDM (sliceName)
* vaccineCode.coding[{sliceName}].id 0..0
* vaccineCode.coding[{sliceName}].extension 0..0
* vaccineCode.coding[{sliceName}].version 0..0
* vaccineCode.coding[{sliceName}].display 0..0
* vaccineCode.coding[{sliceName}].userSelected 0..0

/*
////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:        SHCVaccinationReactionObservationAD
Parent:         Observation
Id:             shc-vaccination-reaction-observation-ad
Title:          "Adverse Reaction to Vaccination Observation Profile - Allowable Data"
Description:    "Profile for reporting a reaction to a vaccine.

This profile may not be necessary depending on the use cases for this IG, but it's included for now because
we wanted to have value sets corresponding to all the value sets in the IIS core data elements."
* ^status = #draft

* id obeys vc-should-be-under-20-chars

* code = SCT#293104008 "Adverse reaction to immunization"

* subject only Reference(shc-patient-general-ad)
* subject 1..1 MS
* subject ^short = "Patient with reaction to vaccine"
* subject ^definition = "Reference to a SMART Health Card patient-conforming resource who had a reaction to the vaccine."

// Not sure if this is the best element to use to refer to the immunization(s) attributed to the reaction
* focus only Reference(shc-vaccination-ad)
* focus 1..* MS
* focus ^short = "Immunization causing the reaction"
* focus ^definition = "Reference to the VaccinationCredentialImmunization-conforming resource representing the vaccination(s) causing the reaction."

* value[x] only CodeableConcept
* valueCodeableConcept 1..1 MS
* valueCodeableConcept from http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.3288 (extensible)

////////////////////////////////////////////////////////////////////////////////////////////////////

Profile:        SHCVaccinationReactionObservationDM
Parent:         shc-vaccination-reaction-observation-ad
Id:             shc-vaccination-reaction-observation-dm
Title:          "Adverse Reaction to Vaccination Observation Profile - Data Minimization"
Description:    "Profile for reporting a reaction to a vaccine. Only elements necessary for Verifiers can be populated."

* id 0..0
* meta 0..0
* implicitRules 0..0
* language 0..0
* text 0..0
* contained 0..0
* extension 0..0
* modifierExtension 0..0
* basedOn 0..0
* partOf 0..0
* category.id 0..0
* category.extension 0..0
* category.text 0..0
* issued 0..0
* performer 0..0
* dataAbsentReason 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* referenceRange 0..0
* hasMember 0..0
* derivedFrom 0..0
* component 0..0
*/

---

// File: input/fsh/rulesets.fsh

RuleSet: id-should-not-be-populated(path)
* {path}id ^short = "Should not be populated"
* {path}id ^definition = "For [data minimization reasons](profiles.html#data-minimization-and-privacy), this element SHOULD NOT be populated when generating a resource conforming to this profile for inclusion in one of the Bundles profiled in this IG."
* {path}id ^comment = "Not including `id` may result in FHIR validation errors of resources. These errors can be ignored for the purposes of assessing conformance to this IG."

RuleSet: reference-to-absolute-uri(path)
* {path}.reference ^short = "This SHOULD use an absolute URI like `resource:0` that will resolve within the containing Bundle."
* {path}.reference 1..1
* {path}.type 0..0
* {path}.identifier 0..0
* {path}.display 0..0

RuleSet: reference-to-ad-profile-comment(element)
* {element} ^comment = "Note that this is a reference to the Fallback Profile (`SHCPatientGeneralAD`) rather than the Primary Profile.

This is because in some cases, implementers may be able to use the Primary Profile for this resource, but need the Fallback Profile for the Patient resource.

Resource instances that conform to the Primary Profile of Patient will **also** conform to the Fallback Profile of Patient. Implementers SHALL use the Primary Profile of Patient whenever possible. For more information see the [Profiles](profiles.html) page."

---

// File: input/fsh/value_sets.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////

ValueSet:    LabResultFindings
Id:          lab-result-findings
Title:       "Lab result findings (SNOMED CT)"
Description: "This value set includes SNOMED CT codes for identifying laboratory test results."

* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement

The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)

The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](http://www.snomed.org/snomed-ct/get-snomed-ct) or directly contact SNOMED International: info@snomed.org"
* ^experimental = false

* include codes from system SCT where concept descendent-of #441742003 // Evaluation finding (finding)
* include codes from system SCT where concept descendent-of #362981000 // Qualifier value (qualifier value)

////////////////////////////////////////////////////////////////////////////////////////////////////

ValueSet:    CompletedObservationStatus
Id:          completed-observation-status
Title:       "Completed observation status"
Description: "Contains a subset of <http://hl7.org/fhir/ValueSet/observation-status> for completed/amended observations."

* ^experimental = false


* ObsStatus#final
* ObsStatus#amended
* ObsStatus#corrected

////////////////////////////////////////////////////////////////////////////////////////////////////

CodeSystem: IdentityAssuranceLevelCodeSystem
Id: identity-assurance-level-code-system
Title: "Identity Assurance Level Code System"
Description: "Code representing identity assurance level, based on NIST 800-63-3"
* ^url =  "https://smarthealth.cards/ial"
* ^copyright = "Copyright Computational Health Informatics Program, Boston Children's Hospital, Boston, MA as part of the [SMART Health Cards Framework](https://smarthealth.cards/ial). Licensed under CC-BY 4.0 (<https://creativecommons.org/licenses/by/4.0/>)."

* ^experimental = false
* ^caseSensitive = false

* #IAL1 "Name and birth date were self-asserted."
* #IAL1.2 "An unspecified ID was used to verify name and birth date."
* #IAL1.4 "A US state-issued photo ID or nationally-issued photo ID was used to verify name and birth date."
* #IAL2 "Either remote or in-person identity proofing is required. IAL2 requires identifying attributes to have been verified in person or remotely using, at a minimum, the procedures given in NIST Special Publication 800-63A."
* #IAL3 "In-person identity proofing is required. Identifying attributes must be verified by an authorized CSP representative through examination of physical documentation as described in NIST Special Publication 800-63A."


ValueSet:    IdentityAssuranceLevel
Id:          identity-assurance-level
Title:       "Identity Assurance Level"
Description: "Relevant identity assurance level codes, based on NIST 800-63-3. See <https://smarthealth.cards/ial> for details."
* ^experimental = false
* include codes from system IAL
* exclude IAL#IAL1


////////////////////////////////////////////////////////////////////////////////////////////////////


ValueSet:    SpecimenCollectionSupervisionStatus
Id:          specimen-collection-supervision-status
Title:       "Specimen Collection Supervision Status"
Description: "Relevant codes representing specimen collection supervision status"
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement

The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)

The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](http://www.snomed.org/snomed-ct/get-snomed-ct) or directly contact SNOMED International: info@snomed.org"
* ^experimental = false
* SCT#1208526009 "Specimen collection by subject unsupervised by healthcare professional (finding)"
* SCT#1208525008 "Virtual supervision by healthcare professional of specimen collection by subject (finding)"
* SCT#1208524007 "In-person supervision by healthcare professional of specimen collection by subject (finding)"
* SCT#1208523001 "Specimen collection by healthcare professional (finding)"

---

// File: input/images-source/workflow.plantuml

@startuml
!define ICONURL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v2.4.0
!includeurl ICONURL/common.puml

!includeurl ICONURL/font-awesome-5/hospital.puml
!includeurl ICONURL/font-awesome-5/qrcode.puml
!includeurl ICONURL/font-awesome-5/wallet.puml
!includeurl ICONURL/font-awesome-5/school.puml
!includeurl ICONURL/font-awesome-5/user_tie.puml
!includeurl ICONURL/font-awesome-5/ticket_alt.puml
!includeurl ICONURL/govicons/airplane.puml
!includeurl ICONURL/material/local_pharmacy.puml
!includeurl ICONURL/material/smartphone.puml
!includeurl ICONURL/material/account_balance.puml
!includeurl ICONURL/govicons/microscope.puml

' left to right direction
skinparam defaultTextAlignment center

package Issuers {

  FA5_HOSPITAL(hospital,Providers &\nHealth systems)
  MATERIAL_LOCAL_PHARMACY(pharmacy,Retail pharmacies)
  MATERIAL_ACCOUNT_BALANCE(gov,Governments &\nState registries)
  GOV_MICROSCOPE(lab,Labs)

}

FA5_QRCODE(shc1,SMART Health Card\n(Printed or digital)) #White

actor Holder as holder

package Verifiers {
  GOV_AIRPLANE(airplane,Travel industry)
  FA5_SCHOOL(school,Schools & employers)
  FA5_USER_TIE(border,Border control)
  FA5_TICKET_ALT(ticket,Events & entertainment)

}

rectangle Wallet {
  FA5_WALLET(wallet,Hold printed SHC)
  MATERIAL_SMARTPHONE(smartphone,Smartphone app)
}

Issuers --> shc1

shc1 -> holder

holder <----> Wallet

holder -> Verifiers
@enduml


---

// File: input/examples/README.md

# Examples

Example resources in this IG are manually constructed in JSON (rather than using [FSH](https://fshschool.org/)) so as to precisely control the content of the example to meet the data minimization rules in the IG.

Rather than writing _both_ Bundle examples and separate examples of the included resources (e.g., Patient), we only write the Bundle examples and then use `script/update-examples` to extract the included resources from the Bundle examples to use as examples for other profiles. For example, the Patient resource from `bundle-immunization-covid.json` is extracted and used as the example for the `shc-patient-general-dm` Profile.

These auto-generated examples are also stored in this folder, but their filenames are prefixed with `zzz-autogenerated`.

The `/examples.yaml` file in the root folder controls which examples are generated from which Bundle examples.

## Duplicate examples

Due to a limitation in FHIR R4, each example resource can only be associated with one Profile without including `meta.profile` in the example (which is prohibited by our primary data minimization profiles). Therefore, `script/update-examples` also produces a duplicate example so the same source of truth can be used for both primary and fallback profiles. Duplicate examples are suffixed with `b`, `c`, `d`, etc.

## Updating `sushi-config.yaml`

Additionally, each example requires three additions to `sushi-config.yaml`:

1. `resources.$ResourceType/$example-resource-id.exampleCanonical` must be set to the canonical URI of the profile that the example is associated with. This is how the IG Publisher knows to add a given example to the correct `...examples.html` page.
2. An entry needs to be added to the `parameters.no-narrative` array. This suppresses the `text` element that is usually auto-generated by the IG Publisher for each example.
3. An entry needs to be added to the comma-delimited `parameters.suppressed-ids` string, which suppresses the `id` element that usually appears in examples. (Note that our raw JSON examples do need to have `id` set to avoid an IG Publisher error, but both the raw JSON and HTML views generated by the IG Publisher will suppress `id` based on this parameter.)


---

