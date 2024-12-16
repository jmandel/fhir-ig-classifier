File: repos/cqframework_SLASH_opioid-mme-r4/input/pagecontent/conversion-factors.md

The Morphine Milligram Equivalent (MME) calculator provides for configurable
conversion factors, allowing the same calculator logic to be used in different
settings and for different purposes. These conversion factors are configurable
using a CodeSystem supplement. This implementation guide contains one conversion
factor table:

* [CDCMMEClinicalConversionFactors](CodeSystem-CDCMMEClinicalConversionFactors.html)

The Clinical Conversion Factors table uses values from CDC guidance here:
https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf

The CodeSystem supplements are configured with 3 types of properties:

* `conversion-factor`: Defines the conversion factor for a specific ingredient,
when the conversion factor is the same for all dose forms and dose amounts for
the ingredient. The value of this property will be the decimal representation of
the conversion factor.
* `dose-form-conversion-factor`: Defines the conversion factor for an ingredient when the conversion factor varies by the dose form of the medication. The value of this property will be a string of the form `<dose-form-code>:<conversion-factor>[@<doses-per-day>]`, e.g. 970789:130, where '970789' is the RxNorm dose form code, and '130' is the decimal representation of the conversion factor. An example of a per-day conversion factor is fentanyl, 316987:7200@0.33333333, where 316987 is RxNorm dose form code, 7200 is the conversion factor, and 0.33333333 is the dosesPerDay, expressed as a decimal with a maximum of 8 digits after the decimal.
* `dose-range-conversion-factor`: Defines the conversion factor for an ingredient
when the conversion factor varies by the overall dose of the medication. The
value of this property will be a string of the form `<low-value>-<high-value>:<conversion-factor>`,
e.g. 1-20:4. Note that the low-value or high-value may be a wildcard '*' to
indicate the range continues (e.g. '61-*:12' indicates the range is 61 or greater).

For a given ingredient, only one of 'dose-form' or 'dose-range' will be present,
with or without an ingredient-specific conversion factor. The properties together
will enable a unique conversion factor to be determined if the input is within
the expected range. If the input is outside the expected range, and there is no
ingredient-specific conversion-factor specified, implementations should indicate
a conversion factor could not be determined from the supplied information.

All conversion factors supplied in these supplements are in 'mg/d'. When the
published references use other units, appropriate conversions have been applied
to provide the conversion factor in consistent units to the calculator.

### Usage

The MME calculator looks up conversion factor configuration by:

1. Looking for a CodeSystem that is a supplement to RxNorm and has a name matching the `ConversionFactorSupplementName` parameter defined in the `ConversionFactors` CQL library.
2. Looking for a CodeSystem that is a supplement to RxNorm and has a [`task` usage context](http://hl7.org/fhir/codesystem-usage-context-type.html) of `mme-calculation`, as defined in the CDC MME Usage Context Codes code system published in this implementation guide.
3. Using the hard-coded conversion factors returned by the `GetConversionFactor` function, which are the same as the clinical conversion factors, including conversion factors for methadone (on a sliding scale by dose quantity) and transdermal fentanyl (given as a daily factor, specified with a standard patch duration of 3 days).

Systems that only need to support one set of conversion factors can be configured with only the appropriate code system supplement, and don't need to provide the `ConversionFactorSupplementName` parameter as part of execution. However, systems that support run-time selection of conversion factors (i.e. a service) need all available code system supplements and can use the `ConversionFactorSupplementName` parameter to distinguish which conversion factor set to use.

### Cautions

> **Caution**: All doses are in mg/day except for fentanyl, which is mcg/hr. 

> **Caution**: Equianalgesic dose conversions are only estimates and cannot account for individual variability in genetics and pharmacokinetics. 

> **Caution**: Buprenorphine products approved for the treatment of pain are not included in the table because of their partial µ-receptor agonist activity and resultant ceiling effects compared with full µ-receptor agonists. 

> **Caution**: These conversion factors should not be applied to dosage decisions related to the management of opioid use disorder.

#### MME Doses for Commonly Prescribed Opioids for Pain Management Table

| Opioid                           | Conversion Factor |
|----------------------------------|:-----------------:|
| Codeine                          | 0.15 |
| Fentanyl transdermal (in mcg/hr) | 2.4 |
| Hydrocodone                      | 1.0 |
| Hydromorphone                    | 5.0 |
| Methadone                        | 4.7 |
| Morphine                         | 1.0 |
| Oxycodone                        | 1.5 |
| Oxymorphone                      | 3.0 |
| Tapentadol [^1]                  | 0.4 |
| Tramadol [^2]                    | 0.2 |
{: .grid }

[^1]: Tapentadol is a µ-receptor agonist and norepinephrine reuptake inhibitor. MMEs are based on degree of µ-receptor agonist activity; however, it is unknown whether tapentadol is associated with overdose in the same dose-dependent manner as observed with medications that are solely µ-receptor agonists.

[^2]: Tramadol is a µ-receptor agonist and norepinephrine and serotonin reuptake inhibitor. MMEs are based on degree of µ-receptor agonist activity; however, it is unknown whether tramadol is associated with overdose in the same dose-dependent manner as observed with medications that are solely µ-receptor agonists.


---

File: repos/cqframework_SLASH_opioid-mme-r4/input/pagecontent/downloads.md

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

### Full Implementation Guide
{: #full-ig}

The following file contains the complete, downloadable implementation guide:

-  [Full IG](full-ig.zip)

### Definitions
{: #definitions}

In addition to the above, we have provided format-specific _definitions_:

-  [XML](definitions.xml.zip)
-  [JSON](definitions.json.zip)

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


---

File: repos/cqframework_SLASH_opioid-mme-r4/input/pagecontent/license.md

```txt
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Health-Related Additional Disclaimer of Warranty and Limitation of Liability
   ============================================================================
    
   In the United States, or any other jurisdictions where they may apply, the following
   additional disclaimer of warranty and limitation of liability are hereby incorporated
   into the terms and conditions of Apache License 2.0:
    
     a. No warranties of any kind whatsoever are made as to the results that You will
        obtain from relying upon the covered code (or any information or content obtained
        by way of the covered code), including but not limited to compliance with privacy
        laws or regulations or clinical care industry standards and protocols. Use of the
        covered code is not a substitute for a health care provider's standard practice or
        professional judgment.  Any decision with regard to the appropriateness of treatment,
        or the validity or reliability of information or content made available by the
        covered code, is the sole responsibility of the health care provider. Consequently,
        it is incumbent upon each health care provider to verify all medical history and
        treatment plans with each patient.
    
     b. Under no circumstances and under no legal theory, whether tort (including negligence),
        contract, or otherwise, shall any Contributor, or anyone who distributes Covered
        Software as permitted by the license, be liable to You for any indirect, special,
        incidental, consequential damages of any character including, without limitation,
        damages for  loss of goodwill, work stoppage, computer failure or malfunction, or
        any and all other damages or losses, of any nature whatsoever (direct or otherwise)
        on account of or associated with the use or inability to use the covered content
        (including, without limitation, the use of  information or content made available
        by the covered code, all  documentation associated therewith, and the failure of
        the covered code to comply with privacy laws and regulations or clinical care
        industry standards and protocols), even if such party shall have been informed of
        the possibility of such damages.
```


---

File: repos/cqframework_SLASH_opioid-mme-r4/input/pagecontent/mme-calculator.md


This implementation guide provides a shareable implementation of a Morphine Milligram Equivalent (MME) calculator
for medications, and logic for applying that base calculator to FHIR MedicationRequest resources. The calculation
makes certain assumptions about the data elements that will be present in those MedicationRequest resources, and
these expectations are expressed by the [MMEMedicationRequest](StructureDefinition-mmemedicationrequest.html) profile.

The base MME calculator only requires the following information for each medication the patient is currently on:

* RxNorm Code
* Dose Quantity (as a UCUM unit, for a single dose of the medication)
* Doses Per Day (as a decimal)

The base MME calculator uses ingredient data to determine the daily dose from these inputs, using the following approach:

1. If the dose form is a patch, the daily dose is Doses Per Day * Dose Quantity (e.g. number of patches) * Ingredient Strength, with the Ingredient Strength Unit
2. If the dose unit is in mass units (e.g. mg or mcg), the daily dose = Doses Per Day * Dose Quantity, with the Dose Quantity Unit
3. If the dose quantity is in volume units (e.g. mL), the daily dose = Doses Per Day * Dose Quantity * Strength, with the Numerator Strength Unit (e.g. remove /mL)
4. Otherwise, the dose quantity is in terms of tablets or sprays, the daily dose = Doses Per Day * DoseQuantity * Strength the Numerator Strength Unit (e.g. remove /{actuat})

This results in a set of ingredients with {MME}/d values for each opioid-related component ingredient of the drug, and these values are multiplied by the appropriate conversion factor, as described by the [Conversion Factor](https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf) information provided as part of the CDC Opioid Prescribing Guideline. These values are then added together to determine the {MME}/d for the specific drug.

Determining MME at a point in time then requires consideration of all active opioid medications at that point. For each medication, a dose quantity, and a doses per day is determined. For FHIR R4, this done with the Prescriptions function to normalize from FHIR MedicationRequest resources, making use of the following elements:
* medication (as a CodeableConcept)
* dosageInstruction[0] (first and only element)
* dosageInstruction[0].timing.repeat (uses frequency, frequencyMax, period, and periodUnit, and timeOfDay)
* dosageInstruction[0].doseAndRate[0] (first and only element)
* dosageInstruction[0].asNeeded (to determine PRN)
* status (to determine whether it is a draft order)

This results in input suitable for use by the base MME calculator, the MME value is determined for each input medication, and the result is summarized.

### Cautions

> **Caution**: Do not use the calculated dose in MMEs to determine the doses to use when converting one opioid to another; when converting opioids, the new opioid is typically dosed at a substantially lower dose than the calculated MME dose to avoid overdose because of incomplete cross-tolerance and individual variability in opioid pharmacokinetics. Consult the FDA approved product labeling for specific guidance on medications.

> **Caution**: These conversion factors should not be applied to dosage decisions related to the management of opioid use disorder.

> **Caution**: Tapentadol is a µ-receptor agonist and norepinephrine reuptake inhibitor. MMEs are based on degree of µ-receptor agonist activity; however, it is unknown whether tapentadol is associated with overdose in the same dose-dependent manner as observed with medications that are solely µ-receptor agonists.

> **Caution**: Tramadol is a µ-receptor agonist and norepinephrine and serotonin reuptake inhibitor. MMEs are based on degree of µ-receptor agonist activity; however, it is unknown whether tramadol is associated with overdose in the same dose-dependent manner as observed with medications that are solely µ-receptor agonists.

> **Extra Caution**:
> * Use particular caution with transdermal fentanyl because it is dosed in mcg/hr instead of mg/day, and its absorption is affected by heat and other factors. 
> * Use particular caution with methadone dose conversions because methadone has a long and variable half-life, and peak respiratory depressant effect occurs later and lasts longer than peak analgesic effect.


---

File: repos/cqframework_SLASH_opioid-mme-r4/input/pagecontent/omtkdata-processing.md

This document describes the process for creating the OMTKData library.

### Access DB refresh

Use the process and tools described in the Opioid CDS Implementation Guide to construct
the Access DB: http://build.fhir.org/ig/cqframework/opioid-cds/service-documentation.html#solution2

### Convert the AccessDB to Sqlite:

https://www.rebasedata.com/convert-access-to-sqlite-online

This will result in a Sqlite database, but with all text fields, so change the field
type for all RXCUI fields to INTEGER

Use Sqlitebrowser (or similar ad-hoc query tool for sqlite)
http://sqlitebrowser.org

### Generate CQL:

Use the following Sqlite query to generate the CQL list selector for the OMTK Data:

```
select '{ ' || char(10) || group_concat(
    '  { drugCode: ' || T.DRUG_RXCUI || ', '
    || 'drugName: ''' || T.DRUG_NAME || ''', '
    || 'doseFormCode: ' || T.DOSE_FORM_RXCUI || ', '
    || 'doseFormName: ''' || T.DOSE_FORM_NAME || ''', '
    || 'ingredientCode: ' || T.INGREDIENT_RXCUI || ', '
    || 'ingredientName: ''' || T.INGREDIENT_NAME || ''', '
    || 'strength: ''' || T.STRENGTH || ''', '
    || 'strengthValue: ' || CAST(T.STRENGTH_VALUE as REAL) || ', '
    || 'strengthUnit: ''' || T.STRENGTH_UNIT || ''' '
    || '}', ', ' || char(10)) || char(10) || '}' as TUPLES
  from (
	select
      D.DRUG_RXCUI, D.DRUG_NAME, D.DOSE_FORM_RXCUI,
      DF.DOSE_FORM_NAME,
      I.INGREDIENT_RXCUI, I.INGREDIENT_NAME,
      SCDC.STRENGTH, SCDC.STRENGTH_VALUE, SCDC.STRENGTH_UNIT
	  from MED_DRUG D
  		join MED_DRUG_VALUE_SET MDVS
        on D.DRUG_RXCUI = MDVS.DRUG_RXCUI and MDVS.VALUE_SET_ID = 1 -- Opioids
		  join MED_SCDC_FOR_DRUG SCDCD on D.DRUG_RXCUI = SCDCD.DRUG_RXCUI
		  join MED_SCDC SCDC on SCDCD.SCDC_RXCUI = SCDC.SCDC_RXCUI
		  join MED_INGREDIENT I on SCDC.INGREDIENT_RXCUI = I.INGREDIENT_RXCUI
		  join MED_INGREDIENT_TYPE IT
        on I.INGREDIENT_RXCUI = IT.INGREDIENT_RXCUI
          and IT.INGREDIENT_TYPE = 'Opioid_NonSurgical'
  		left join MED_DOSE_FORM DF on DF.DOSE_FORM_RXCUI = D.DOSE_FORM_RXCUI
	  order by D.DRUG_RXCUI, I.INGREDIENT_RXCUI
  ) T
```

Note that during the OMTK202003 update, which was coordinated between the Opioid IG
project and measure developers building pre-rule-making Opioid-related quality measures,
several RxNorm codes were identified as inactive, non-human, or non-prescribable. These
were excluded with the following additional where clause:

```
where not exists (
  select * from RxNormCodesToRemove R where D.DRUG_RXCUI = R.Code
) -- RxNorm codes that are inactive, non prescribable, or non-human
```


---

File: repos/cqframework_SLASH_opioid-mme-r4/input/vocabulary/codesystem/README.md

# Required directory to support testing


---

File: repos/cqframework_SLASH_opioid-mme-r4/input/vocabulary/valueset/README.md

# Required directory to support testing


---

