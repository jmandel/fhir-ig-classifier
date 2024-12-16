File: repos/HL7_SLASH_fhir-gender-harmony/input/fsh/NameToUse.fsh

Alias: NameToUse = http://hl7.org/fhir/name-use 

// Profile:  NameToUse
// Parent:   Observation
// Id:       nametouse
// Title:    "Name To Use"
// Description:   "Text attribute that provides the name that should be used when addressing or referencing the patient."
// * status and code and subject and effectivePeriod and value[x] MS
// * value[x] only CodeableConcept // Name
// * value[x] from gender-identity-vs
// * code =  SOLOR#86188-0 "History of Occupation industry" // TBD
// * effective[x] only Period
// * effectivePeriod.start 0..1 
// * effectivePeriod.end 0..1
// * note 0..1 // "Text to further explain use of the Name. This may be related to social and/or cultural context."


// Profile:  NameToUse
// Parent:   HumanName
// Id:       NameToUse
// * use =  http://hl7.org/fhir/name-use#usual "Usual"



---

File: repos/HL7_SLASH_fhir-gender-harmony/input/fsh/ValueSets.fsh



// ValueSet: GenderIdentityVS
// Id: gender-identity-vs
// Title: "Gender Identity Value Set"
// Description: "GenderIdentity value set to be used as a minimum value set, that is extensible to allow specific implementations the option to add more choices via an expanded value set that incorporates this minimum set."
// * SOLOR#Female "Female"
// * SOLOR#Male "Male"
// * SOLOR#Nonbinary "Nonbinary"
// * SOLOR#Unknown "Unknown"

// ValueSet: SexForClinicalUseCategoryVS
// Id: sex-for-clinical-use-category-vs
// Title: "Sex For Clinical Use Category Value Set"
// Description: "Sex For Clinical Use Category Value Set."
// * SOLOR#Female "Female"
// * SOLOR#Male "Male"
// * SOLOR#Specified "Specified"
// * SOLOR#Unknown "Unknown"

// ValueSet: PronounVS
// Id: pronoun-vs
// Title: "Pronoun Value Set"
// Description: "This proposed set is a minimum set for interoperability where the use of the English personal pronoun is required."
// * SOLOR#He "He, Him, His, Himself"
// * SOLOR#She "She, Her, Hers, Herself"
// * SOLOR#They "They, Them, Their, Theirs, Themself"
// * SOLOR#Other "Uses Other Pronouns"
// * SOLOR#Unknown "Unknown Pronouns"


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/images-source/2023genderharmony.plantuml

@startuml


scale 320 width
scale 320 height

!theme toy

skinparam headerFontSize 20
header "Figure 1"

Person o-- "0..n" "Gender Identity"
Person o-- "0..n" "Sex Parameter for Clinical Use"
Person o-- "0..n" "Name to Use"
Person o-- "0..n" "Pronouns"
Person o-- "0..n" "Recorded Sex or Gender"

class Person {
   }

note right of "Person" : Some standards have person or patient classes to be extended\nOthers have segments or attributes to be extended.\n\nThe following model elements can change over time.

class "Gender Identity" {
..Definition..
An individual's personal sense of being a man, woman,\nboy, girl, nonbinary, or something else.
_Elements_
   code or constrained text: Gender 1..1
   duration: Validity Period 0..1
   string: Comment 0..1
   }

note bottom of "Gender Identity" : Used to inform interpersonal\ncommunications

note bottom of "Sex Parameter for Clinical Use" : Used during clinical activities like orders,\nprescriptions, reports, and observations.

class "Recorded Sex or Gender" {
..Definition..
Documentation of a specific instance of sex and/or gender information.
_Elements_
   code or constrained text: Recorded Sex or Gender 1..1
   code or constrained text: Type 0..1
   string: Record Description 0..1
   datetime: Acquisition Date 0..1
   duration: Validity Period 0..1
   string: Issuer 0..1
   string: Source Field Name 0..1
   string: Source Field Description 0..1
   }

note bottom of "Recorded Sex or Gender" : This captures a recorded value that\nmay be labeled as sex or gender:\n - Birth Records \n - Insurance Records \n - Official document


class "Sex Parameter for Clinical Use" {
..Definition..
A context-specific categorization of sex,\nderived from observable information,\nfor use in diagnostics, analytics, and treatments.
_Elements_
   code or constrained text: SPCU Category 1..1
   duration: Validity Period 0..1
   string: Comment 0..1
   string: Linked Clinical Observation 0..n
   }

class "Name to Use" {
..Definition..
Name to be used with interactions.
_Elements_
   string: Name 1..1
   duration: Validity Period 0..1
   string: Comment 0..1
   }

note bottom of "Name to Use" : Name usage applies to more than sex and gender uses.\nThe use of the appropriate name is important\n  in many social situations.

class "Pronouns" {
..Definition..
Pronouns to be used with interactions.
_Elements_
   code or constrained text: Pronoun 1..1
   duration: Validity Period 0..1
   string: Comment 0..1
   }

note bottom of "Pronouns" : Pronoun usage is defined just for English language usage.  \nSimilar issues in other languages are a future effort.

hide "Gender Identity" circle
hide "Name to Use" circle
hide "Recorded Sex or Gender" circle 
hide "Sex Parameter for Clinical Use" circle
hide "Person" circle
hide "Pronouns" circle
@enduml

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/includes/markdown-link-references.md

<!-- Temporary changes to fix formatting for changelog -->
<style>
  ul.new-content {
    padding-left: 25px !important;
  }
</style>
 

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/artifacts2.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-08-2023	OTHER-2591			Carol Macumber				Removed canonical/structure definition text, validated artifact hyperlinks
2023-09-05          none            Updated value sets and code systems to use THO

-->


Artifacts referenced in this Guide:

### Extensions
#### [Gender Identity](http://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html)
#### [Sex Parameter For Clinical Use](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html)
#### [Recorded Sex Or Gender](http://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) 
#### [Pronouns](http://hl7.org/fhir/extensions/StructureDefinition-individual-pronouns.html)

### Value Sets
#### [Gender Identity](http://terminology.hl7.org/ValueSet/gender-identity)

#### [Sex Parameter For Clinical Use](http://terminology.hl7.org/ValueSet/sex-parameter-for-clinical-use)

#### [Personal Pronouns](http://terminology.hl7.org/ValueSet/pronouns)

#### [Recorded Sex Or Gender Type](http://terminology.hl7.org/ValueSet/recorded-sex-or-gender-type)

### Code Systems defined by Gender Harmony project

#### [Sex Parameter For Clinical Use](http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use)



---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/background.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2533         Joanie Harper                Remove extra periods per the Jira ticket https://jira.hl7.org/browse/OTHER-2533
2023-06-16       OTHER-2566         Joanie Harper                Removed extra space per the Jira ticket https://jira.hl7.org/browse/OTHER-2566
2023-07-26		 OTHER-2570			Carol Macumber				 Standardized the use of "Gender Harmony initial informative specification"  when referring to initial specification
2023-08-14       OTHER-2568         Joanie Harper                Removed phrase "(per NCPDP page 11)"
2023-8-16        OTHER-2579/spellchkMaryKay McDaniel             Sex for Clinical Use (SFCU) changed to Sex Parameter for Clinical Use (SPCU) in 42 & 46
2023-08-23       OTHER-2537         Rob McClure                 Minor changes for JIRA and spell check
2023-08-29		NONE				Carol Macumber				Final read through of page, updated reference to informative GH Model to use formal name, therefore reducing any possibility that it is confused with this IG whose name is "HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1"
-->

### Impact of Sex and Gender on Clinical Care
In the [HL7 Informative Document: Gender Harmony - Modeling Sex and Gender Representation, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564), excerpted below, we noted the following (The original references are replicated here in our [Bibliography](bibliography.html).)

> In 2016, The Report of the 2015 U.S. Transgender Survey which asked 27,715 self-identified transgender persons about their experiences in health care, noted that 33% had at least one negative experience with a health care provider related to being transgender, that 23% did not seek the health care they needed due to fear of mistreatment, and 33% did not go to a health care provider when they really needed to because they could not afford it (26,75).

As National LGBTQ Task Force Director Rea Carey noted:

> It is outrageous that basic health care is being denied to transgender and gender non-conforming people and that so much additional trauma is being caused by doctors instead of being resolved by doctors. The medical profession must take these data seriously and ensure that everyone in the medical care system knows how to provide transgender-sensitive medical care.

This pattern is not exclusive to the United States. Medical mistreatment and/or malpractice, as well as violence against transgender and gender-diverse persons is well documented in many countries.
The situation for intersex individuals is not much better. Despite worldwide condemnation of intersex genital mutilation, the practice is still widespread and even hurts non-intersex (dyadic) persons, such as in the case of David Reimer. Reimer, known in medical circles as the patient involved in the “John/Joan” case, committed suicide in 2004 following years of abuse at the hands of medical professionals. Clinicians routinely lie to patients about their status as intersex, obfuscate clinical records, and promote practices which have been shown to have negative effects on patient mental health (46,47,50).

Despite the “depathologization” of homosexuality in the Diagnostic and Statistical Manual of Mental Disorders (DSM) in 1973, the movement to depathologize transgender persons has been slow, and receives pushback even today. Medical providers continue to add being transgender to problem lists and as diagnoses in multiple jurisdictions, under labels such as “gender identity disorder” (GID). GID was removed from the World Health Organization’s ICD listing in 2019. The LGBT rights director at Human Rights Watch, Graeme Reid noted that, “the WHO’s removal of ‘gender identity disorder’ from its diagnostic manual will have a liberating effect on transgender people worldwide.   Governments should swiftly reform national medical systems and laws that require that now officially outdated diagnosis.”

However, despite these calls to action, in the last ten years, transgender and intersex persons continue to report harassment and mistreatment in all areas of medical care: oncology, cardiology, geriatrics, pediatrics, psychiatry, primary care, emergency care, radiology, internal medicine,neurology, obstetrics, gynecology, pathology, surgery, and urology, to name a few (72,74). Transness still appears in problem lists, coded using antiquated terminology from ICD-9 and ICD-10 (and sometimes terminology which is even more antiquated). In some cases, this is performed because providers feel that there is nowhere else in the health record to codify that a patient is transgender, but other cases persevere even when patients specifically ask for it to be removed. This can seriously affect a transgender person’s life, as many jobs require that health records be released to employers or even publicly available for anyone to access. Many of these issues have led to significant morbidity and even patient death.

In 2016, the United Nations Programme on HIV/AIDS, alongside the World Health Organization (WHO) Global Health Workforce Alliance, launched the Agenda for Zero Discrimination in Health Care, highlighting the importance of respectful care which takes into account the values and concerns of marginalized groups, including those of transgender people (43). The agenda prioritized creation of health care frameworks for adequate monitoring and evaluation of health care systems to ensure accountability and monitor progress of health disparities in vulnerable populations, including transgender, gender-diverse, and intersex persons (47). US organizations like Fenway Health in Boston (84), Callen-Lorde in New York (85) and UCSF Trans Care in California (86) have developed programs and services for LGBTQIA+ communities, as Trans Care BC (87) and Rainbow Health in Ontario (88) have similarly in Canada.

Achievement of these goals in affected populations is not possible without an underlying, consistent structure for data collection. Such data are essential to addressing health disparities and have catalyzed initiatives to improve SOGI (sexual orientation and gender identity) data collection at the Institute of Medicine, the American Medical Association, the U.S. Centers for Disease Control and Prevention (CDC) (4), the Council of Europe (56), the United Nations Human Rights Office of the High Commissioner (57), ILGA-Europe (58), Stonewall (59), and numerous other organizations worldwide. Third gender categories have even been added in national censuses in India and Nepal (both starting in 2011), despite their removal from the 2020 U.S. Census.

Given that gender and sex-related data greatly impact individual care, it is critical that the health care community create data models that enhance understanding and collection of critical data such as organ inventories; culturally-specific health factors; surgical histories; hormonal histories; chromosomal makeup; interlocking demographic factors; individual experiences of discrimination (such as deadnaming or misgendering), sexual assault, and physical violence; differences in sexually transmitted diseases, cancers, cardiovascular diseases, and mental health conditions, all of which directly impact the health outcomes of transgender, intersex, and gender-diverse populations. Mixing up these data can result in situations of life or death. Studies indicate that around 40% of transgender persons in the U.S. attempt suicide in their lifetime (26,103). 
 As former president of the World Professional Association for Transgender Health (WPATH), Jamison Green said: “By not actually addressing what kinds of variabilities exist in people’s sexual behaviors, we blind ourselves to potential solutions to these problems” (62). 
### Sex and Gender in Quality Measurement
Clinical quality measures traditionally evaluate performance using manually abstracted clinical and administrative data. Electronic clinical quality measures (eCQMs) evaluate performance using data extracted from electronic health records and/or digital health information technology (HIT) systems. Patient demographic information is often used simply to specify eCQM inclusion and/or exclusion criteria. As described in the Current State section, Gender and Sex are often represented in a single data element utilizing various coding standards and that inconsistency in data capture and implementation leads to downstream issues for quality measurement instruments and outcomes.

For example, the National Committee for Quality Assurance (NCQA) produces the Healthcare Effectiveness Data and Information Set (HEDIS). Approximately 191 million people are enrolled in plans that report HEDIS results, making it one of health care’s most widely used performance improvement tools. HEDIS covers six (6) domains of care utilization measures, including Child and Adolescent Well-Care Visits, Frequency of Selected Procedures, Identification of Alcohol and Other Drug Services, Mental Health Utilization, Antibiotic Utilization and Healthcare-Associated Infection (HAI) Standard Ratio. For all these measures, individuals with nonbinary gender are excluded from HEDIS utilization measures that currently require a specific gender (male or female). NCQA recognizes this as an issue and has stated that it “continues to track industry standards for nonbinary gender”. In other words, the guidance provided in this specification can help improve representation of nonbinary gender and therefore measurement.

### Sex and Gender Reporting in Payment for Care
Some EHR systems have developed features that may suggest tests or workflows based on sex or gender identity data which is often inaccurate and/or inadequate to address the needs of transgender, gender-diverse, and intersex persons. For instance, a patient may need to switch their insurance “sex” for a procedure to avoid denial of coverage or to even be offered a procedure or test in the first place. Pharmacies may also have to administratively change “sex” for approvals for particular medications and then switch the “sex” back to avoid denial of coverage. In addition, providers may have to address dozens of automatically flagged lab results which are irrelevant to the patient but are nonetheless required due to compliance regulations (63).

Switching “sex” fields back and forth may trigger hundreds of new results or diagnostic warnings or messages, adding to the already significant issue of alert fatigue among medical providers. Further, clinicians may miss proper risk assessments based on whether the “correct” sex field is provided. For instance, a transgender woman who is marked as “male” may miss crucial breast cancer screenings, but a transgender woman who is marked as “female” may miss prostate cancer screenings. Only by including contextual data about gender identity, sex assigned at birth, organ inventories, hormone levels, and chromosomal makeup can these issues be sufficiently avoided.

Our recommendation is that clinical decision support should be based on specific relevant information about the patient and not sex characterizations. There are existing decision support rules that do rely on sex categorization. Where this occurs, the decision support rules should provide guidance on how to determine the proper sex characterization. In these cases a Sex Parameter for Clinical Use (SPCU) based on that guidance would be appropriate.

### Sex and Gender Uses in Data Analysis
Storing and exchanging data in structured formats ensures that EHR and HIT systems are better equipped to notify health care teams of appropriate and preventive services, but this is not an end itself. It is critical to have standardized high-quality data in order to conduct data analysis to address health inequities. While there have been some scientific advancements, there continues to be a dearth of data and literature on health outcomes and experiences for transgender and gender diverse people. Many transgender and gender diverse people remain largely invisible to their care providers, face stigma, barriers to accessing care and related health disparities. Standardized data will facilitate information-sharing for clinical care, research, and public health interventions that can further reduce health care disparities in this underserved population.

There are striking disparities in accessing health services that correlate with gender identity, as well as race/ethnicity and other factors. It is important to consider the intersecting identities and experiences of transgender and gender diverse people, to understand the cumulative discrimination and health inequities this community faces. Intersectionality is a framework for describing the disparities and culminating impact a person or group of people are affected by. Sex Parameter for Clinical Use (SPCU) and gender identity with other demographic data can be used to evaluate service utilization and health outcomes for subpopulations.

Currently, data resides in disparate systems with varying degrees of accuracy, preventing information from being used to support meaningful analysis, data visualization and insight generation. The goal is to not only answer questions but advance insights that drive action. Combining self-reported data from patients with clinical observations around the notions of gender and sex allows for rapid and efficient evaluations of emerging trends with more detail than might otherwise be possible. Creating opportunities for increased data analysis can contribute to new approaches to managing care, informing policy and future interventions.


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/bibliography.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-07-26		 OTHER-2570			Carol Macumber				 Standardized the use of "Gender Harmony initial informative specification"  when referring to initial specification


-->

This is the original bibliography provided in the [Gender Harmony initial informative specification](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564). 

1. [If They Don't Count Us, We Don't Count: Trump Administration Rolls Back Sexual Orientation and Gender Identity Data Collection](https://doi.org/10.1089/lgbt.2017.0073)
1. [Evolving Sex and Gender in Electronic Health Records](https://www.ncbi.nlm.nih.gov/pubmed/31258320)
1. [A rapid review of gender, sex, and sexual orientation documentation in electronic health records](https://doi.org/10.1093/jamia/ocaa158)
1. [Collecting Sexual Orientation and Gender Identity Information -- Importance of the Collection and Use of These Data -- CDC](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html)
1. [LGBT questions in electronic health records - UC Davis Medical Center](https://health.ucdavis.edu/medicalcenter/features/2013-2014/07/20130704_LGBT-EMR.html)
1. [Using sexual orientation and gender identity data in electronic health records to assess for disparities in preventive health screening services](https://doi.org/10.1016/j.ijmedinf.2020.104245)
1. [Patient Perspectives on Gender Identity Data Collection in Electronic Health Records: An Analysis of Disclosure, Privacy, and Access to Care](https://doi.org/10.1089/trgh.2016.0007)
1. [Collecting Sexual Orientation and Gender Identity Data in Electronic Health Records: Workshop Summary](https://nhchc.org/wp-content/uploads/2019/08/IOM_2013_Collecting-sexual-orientation-and-gender-identity-information.pdf)
1. [IHS supports the inclusion of sexual orientation and gender identity in electronic health records](https://www.ihs.gov/newsroom/ihs-blog/june2020/ihs-supports-the-inclusion-of-sexual-orientation-and-gender-identity-in-electronic-health-records/)
1. [Planning and implementing sexual orientation and gender identity data collection in electronic health records](https://doi.org/10.1093/jamia/ocy137)
1. [Respectful Collection of Demographic Data](https://medium.com/managing-on-the-margins/respectful-collection-of-demographic-data-56de9fcb80e2)
1. [Chosen Name Use Is Linked to Reduced Depressive Symptoms, Suicidal Ideation, and Suicidal Behavior Among Transgender Youth](https://doi.org/10.1016/j.jadohealth.2018.02.003)
1. [Misgendering and experiences of stigma within health care settings for transgender individuals](https://doi.org/10.5694/mja2.50497)
1. [Bad Gender Measures & How to Avoid Them: A guide by a nonbinary psychologist](https://devonprice.medium.com/bad-gender-measures-how-to-avoid-them-23b8f3a503a6)
1. [Designing forms for gender diversity and inclusion](https://uxdesign.cc/designing-forms-for-gender-diversity-and-inclusion-d8194cf1f51)
1. [Beyond the Binary: 5 steps to designing gender inclusive fields in your product](https://uxdesign.cc/beyond-the-binary-5-steps-to-designing-gender-inclusive-fields-in-your-product-ff9230337b4f)
1. [HOW TO DO BETTER WITH GENDER ON SURVEYS: A GUIDE FOR HCI RESEARCHERS](https://interactions.acm.org/archive/view/july-august-2019/how-to-do-better-with-gender-on-surveys)
1. [Predictors and Mental Health Benefits of Chosen Name Use Among Transgender Youth](https://doi.org/10.1177/0044118X19855898)
1. [Perspectives from Transgender and Gender Diverse People on How to Ask About Gender](https://doi.org/10.1089/lgbt.2019.0295)
1. [Trans Care Begins at‚Ä¶ the Software?](https://hankoehle.com/2020/08/06/trans-care-begins-at-the-software/)
1. [AMA Pushes Forward on Fully Inclusive EHRs for Transgender Patients](https://www.hcinnovationgroup.com/clinical-it/electronic-health-record-electronic-medical-record-ehr-emr/news/21115399/ama-pushes-forward-on-fully-inclusive-ehrs-for-transgender-patients#:~:text=To%20create%20EHRs%20that%20are,documentation%2C%20according%20to%20the%20association.)
1. [Electronic Health Records and Transgender Patients‚ÄîPractical Recommendations for the Collection of Gender Identity Data](https://dx.doi.org/10.1007%2Fs11606-014-3148-7)
1. [Electronic medical records and the transgender patient: recommendations from the World Professional Association for Transgender Health EMR Working Group](https://doi.org/10.1136/amiajnl-2012-001472)
1. [Care of the Transgender Patient](https://doi.org/10.7326/AITC201907020)
1. [Sexual Orientation and Gender Identity Measures for Global Survey Research: A Primer for Improving Data Quality](https://www.measureevaluation.org/resources/publications/ms-19-177)
1. [The Report of the 2015 U.S. Transgender Survey](https://www.transequality.org/sites/default/files/docs/usts/USTS%20Full%20Report%20-%20FINAL%201.6.17.pdf)
1. [Bangladesh: Gender Recognition Process Spurs Abuse](https://www.hrw.org/news/2016/12/23/bangladesh-gender-recognition-process-spurs-abuse#)
1. [Empowering communities and strengthening systems to improve transgender health: outcomes from the Pehchan programme in India](https://doi.org/10.7448/ias.19.3.20809)
1. [Indian transgender healthcare challenges](https://www.aljazeera.com/features/2014/06/18/indian-transgender-healthcare-challenges/?gb=true)
1. [Living on the extreme margin: social exclusion of the transgender population (hijra) in Bangladesh](https://doi.org/10.3329/jhpn.v27i4.3388)
1. [Transgender health in India and Pakistan](https://doi.org/10.1016/S0140-6736(16)32222-X)
1. [Transgender patients face health-care discrimination, inadequate treatment](https://www.cbc.ca/news/health/transgender-health-lancet-study-medical-care-1.3641030)
1. [Barriers to accessing health care among transgender individuals](https://www.ohtn.on.ca/rapid-response-barriers-to-accessing-health-care-among-transgender-individuals/)
1. [Address transphobia in Canada‚Äôs health system](https://healthydebate.ca/opinions/canadas-health-care-system-is-transphobic)
1. [Rights in Transition: Making Legal Recognition for Transgender People a Global Priority](https://www.hrw.org/world-report/2016/country-chapters/africa-americas-asia-europe/central-asia-middle-east/north-0)
1. [Barriers and Facilitators to Transgender Healthcare Access in South Asia with Lessons for Nepal: A Qualitative Literature Review](http://library.lshtm.ac.uk/MSc_PH/2014-15/108406.pdf)
1. [Who was Lou Sullivan?](https://web.archive.org/web/20080906123232/http://www.sgn.org/sgnnews36_08/page30.cfm)
1. [Why are trans men invisible in HIV prevention & care?](https://www.sfaf.org/collections/beta/why-are-trans-men-invisible-in-hiv-prevention-care/)
1. [A Death Robbed of Dignity Mobilizes a Community](https://www.washingtonpost.com/archive/local/1995/12/10/a-death-robbed-of-dignity-mobilizes-a-community/2ca40566-9d67-47a2-80f2-e5756b2753a6/)
1. [EMS Denied Transgender Patient Care Causing Her Death, Alleges Sheepshead Bay Lawyer](https://bklyner.com/ems-denied-transgender-patient-care-causing-her-death-alleges-sheepshead-bay-lawyer-sheepshead-bay/)
1. [Trans woman left to die with coronavirus symptoms by paramedics who ‚Äòrefused to treat her‚Äô because she had HIV](https://www.pinknews.co.uk/2020/06/01/alejandra-monocuco-trans-woman-dead-coronavirus-hiv-positive-bogota/)
1. [Transgender Americans Just Lost Health Protections. Now What?](https://www.commonwealthfund.org/publications/podcast/2020/jul/transgender-americans-just-lost-health-protections-now-what)
1. [Ensuring an inclusive global health agenda for transgender people](http://dx.doi.org/10.2471/BLT.16.183913)
1. [Catalyzing a Nursing Response to Healthcare Discrimination Against Transgender and Nonbinary Individuals](https://doi.org/10.1111/jnu.12597)
1. [Transgender Population Size in the United States: a Meta-Regression of Population-Based Probability Samples](https://doi.org/10.2105/AJPH.2016.303578)
1. [How Many Adults Identify as Transgender in the United States?](https://williamsinstitute.law.ucla.edu/publications/trans-adults-united-states/)
1. [Agenda for zero discrimination in health care. Geneva: The Joint United Nations Programme on HIV/AIDS](http://www.unaids.org/sites/default/files/media_asset/Agenda-zero-discrimination-healthcare_en.pdf)
1. [Re: V√∂lling](http://icj.wpengine.netdna-cdn.com/wp-content/uploads/2008/02/In-re-Volling-Regional-Court-Cologne-Germany-English.pdf)
1. [In re V√∂lling, Regional Court Cologne, Germany (6 February 2008)](http://www.icj.org/sogicasebook/in-re-volling-regional-court-cologne-germany-6-february-2008/)
1. [Groundbreaking SLPC Lawsuit Accuses South Carolina Doctors and Hospitals of Unnecessary Surgery on Infant](http://www.splcenter.org/get-informed/news/groundbreaking-splc-lawsuit-accuses-south-carolina-doctors-and-hospitals-of-unnece)
1. [Transgender Sterilisation Requirements in Europe](https://doi.org/10.1093/medlaw/fwx028)
1. [Japan: Compelled Sterilization of Transgender People](https://www.hrw.org/news/2019/03/19/japan-compelled-sterilization-transgender-people)
1. [Forced and Coerced Sterilization: The Nightmare of Transgender and Intersex Individuals](https://impakter.com/forced-and-coerced-sterilization-an-unnecessary-intervention-in-transgender-and-intersex-individuals/)
1. [Unfit for Parenthood? Compulsory Sterilization and Transgender Reproductive Justice in Finland](https://core.ac.uk/download/pdf/215437609.pdf)
1. [NEW REPORT REVEALS RAMPANT DISCRIMINATION AGAINST TRANSGENDER PEOPLE BY HEALTH PROVIDERS, HIGH HIV RATES AND WIDESPREAD LACK OF ACCESS TO NECESSARY CARE](https://www.thetaskforce.org/new-report-reveals-rampant-discrimination-against-transgender-people-by-health-providers-high-hiv-rates-and-widespread-lack-of-access-to-necessary-care-2/)
1. [Compendium of legislation and policies](https://www.coe.int/en/web/sogi/legislation-and-policies)
1. [Data collection in relation to LGBTI People](https://ec.europa.eu/newsroom/just/document.cfm?action=display&doc_id=45605)
1. [Report on data collection and management](https://www.ohchr.org/EN/Issues/SexualOrientationGender/Pages/ReportOnData.aspx)
1. [Annual Review of the Human Rights Situation of Lesbian, Gay, Bisexual, Trans and Intersex People](https://www.ilga-europe.org/sites/default/files/2019/full_annual_review.pdf)
1. [Do Ask, Do Tell: Capturing data on sexual orientation and gender identity globally](https://www.stonewall.org.uk/sites/default/files/do_ask_do_tell_guide_2016.pdf)
1. [Health Care System Fails Many Transgender Americans](https://www.npr.org/sections/health-shots/2017/11/21/564817975/health-care-system-fails-many-transgender-americans)
1. [Health Records Adapting to Meet Transgender Needs](https://news.bloomberglaw.com/health-law-and-business/health-records-adapting-to-meet-transgender-needs)
1. [When Gender Goes Awry in Electronic Health Records](https://labmedicineblog.com/2019/08/14/when-gender-goes-awry-in-electronic-health-records/)
1. [The Power and Limits of Classification ‚Äî A 32-Year-Old Man with Abdominal Pain](https://www.nejm.org/doi/full/10.1056/NEJMp1811491)
1. [The problems with LGBTQ health care](https://news.harvard.edu/gazette/story/2018/03/health-care-providers-need-better-understanding-of-lgbtq-patients-harvard-forum-says/)
1. [Why transgender people are ignored by modern medicine](https://www.bbc.com/future/article/20200814-why-our-medical-systems-are-ignoring-transgender-people)
1. [Transgender-inclusive measures of sex/gender for population surveys: Mixed-methods evaluation and recommendations](https://dx.doi.org/10.1371%2Fjournal.pone.0178043)
1. [In-Depth Review of Measuring Gender Identity](https://www.unece.org/fileadmin/DAM/stats/documents/ece/ces/ge.30/2019/mtg1/03_In-depth_review_of_Measuring_Gender_Identity.pdf)
1. [Jay Kallio, Model Activist to the End, Dead at 61](https://www.gaycitynews.com/jay-kallio-model-activist-to-the-end-dead-at-61/)
1. [Global Attitudes Toward Transgender People](https://www.ipsos.com/en-us/news-polls/global-attitudes-toward-transgender-people)
1. [Human Rights Watch Country Profiles: Sexual Orientation and Gender Identity](https://www.hrw.org/news/2017/06/23/human-rights-watch-country-profiles-sexual-orientation-and-gender-identity)
1. [Global health burden and needs of transgender populations: a review](https://doi.org/10.1016/S0140-6736(16)00684-X)
1. [The missing trans women of science, medicine, and global health](https://doi.org/10.1016/S0140-6736(18)32423-1)
1. [Health Care for Transgender Individuals](https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2011/12/health-care-for-transgender-individuals)
1. [Healthcare avoidance due to anticipated discrimination among transgender people: A call to create trans-affirmative environments](https://doi.org/10.1016/j.ssmph.2020.100608)
1. [Sex and gender influences on pharmacological response: an overview](https://pubmed.ncbi.nlm.nih.gov/24857340/)
1. [Sex And Gender Equity in Research (SAGER): reporting guidelines as a framework of innovation for an equitable approach to gender medicine. Commentary](https://pubmed.ncbi.nlm.nih.gov/27364388/)
1. [Legato M.J. Principles of Gender-Specific Medicine. Gender in the Genomic Era. 3rd ed. Elsevier Academic Press; Amsterdam, The Netherlands: Boston, MA, USA: 2017. 792p](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html)
1. [CDC - Collecting Sexual Orientation and Gender Identity Information](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html)
1. [Affirming Transgender Youths‚Äô Names and Pronouns in the Electronic Medical Record](https://jamanetwork.com/journals/jamapediatrics/article-abstract/2761803)
1. [Suggested Tables for Gender Harmony Project](https://docs.google.com/document/d/1oN4nmfylAUKB1okDildiIkW6bs1JAGyR8oAX2t1NKUw/edit?usp=sharing)
1. [Transgender data collection in the electronic health record: Current concepts and issues](https://doi.org/10.1093/jamia/ocab136)
1. [Australian Government Guidelines on the Recognition of Sex and Gender](https://www.ag.gov.au/rights-and-protections/publications/australian-government-guidelines-recognition-sex-and-gender) 
1. [Fenway Health: Health Care Is A Right, Not A Privilege.](https://fenwayhealth.org/)
1. [Callen-Lorde. 2021. A letter from our Executive Director, Wendy Stark - Callen-Lorde. ](https://callen-lorde.org/eoy/)
86.	[UCSF Transcare. 2021. UCSF Transgender Care, Home Page. ](https://transcare.ucsf.edu/)
87.	[Trans Care BC. 2021. Improving gender-affirming care across BC. ](http://www.phsa.ca/our-services/programs-services/trans-care-bc)
88.	[Rainbow Health Ontario. 2021. Rainbow Health Ontario, Home Page.](https://www.rainbowhealthontario.ca/)
89.	[Doc 9303: Machine Readable Travel Documents (2015). 7th Ed. Part 7: Machine Readable Visas](https://www.icao.int/publications/Documents/9303_p7_cons_en.pdf)
90.	[Emergency Care for Transgender and Gender-Diverse Children and Adolescents (Ethics CME).](https://www.ebmedicine.net/topics/ethics/transgender-gender-diverse-children)
91.	Tate CC, Youssef CP, Bettergarcia JN. Integrating the Study of Transgender Spectrum and Cisgender Experiences of Self-Categorization from a Personality Perspective. Rev Gen Psychol. 2014 Dec;18(4):302–12.
92.	[PFLAG National Glossary of Terms. 2020](https://pflag.org/glossary)
93.	[Mitchell G. Some Terms Are Better Than Others. Medium; 2017.](https://transsubstantiation.com/some-terms-are-better-than-others-603827adb9b7)
94.	[Mere A. 64 Terms That Describe Gender Identity and Expression. Healthline Media; 2019](https://www.healthline.com/health/different-genders)
95.	[Bailar S. Terminology. 2015.](https://pinkmantaray.com/terminology)
96.	[Fonseca S. Designing forms for gender diversity and inclusion.](https://uxdesign.cc/designing-forms-for-gender-diversity-and-inclusion-d8194cf1f51)
97.	Bauer GR, Braimoh J, Scheim AI, Dharma C. Transgender-inclusive measures of sex/gender for population surveys: Mixed-methods evaluation and recommendations. Dalby AR, editor. PLOS ONE. 2017 May 25;12(5):e0178043.
98.	[Holzberg J, Ellis R, Virgile M, Nelson D, Edgar J, Phipps P, et al. Assessing the Feasibility of Asking About Gender Identity in the Current Population Survey: Results from Focus Groups with Members of the Transgender Population. U.S. Census Bureau; 2017.](https://www.bls.gov/osmr/research-papers/2017/pdf/st170200.pdf)
99.	Puckett JA, Brown NC, Dunn T, Mustanski B, Newcomb ME. Perspectives from Transgender and Gender Diverse People on How to Ask About Gender. LGBT Health. 2020 Sep 1;7(6):305–11.
100.	[Ke M. How to make an LGBTQ+ inclusive survey [Internet]. Medium; 2020.](https://uxdesign.cc/how-to-make-an-lgbtq-inclusive-survey-bfd1d801cc21)
101.	[Stock K. Changing the concept of “woman” will cause unintended harms [Internet]. The Economist Newspaper Limited; 2018 [cited 2021 Jan 8].](https://www.economist.com/open-future/2018/07/06/changing-the-concept-of-woman-will-cause-unintended-harms)
102.	Jenkins K. Amelioration and Inclusion: Gender Identity and the Concept of Woman*. Ethics. 2016 Jan;126(2).
103.	[Holston-Zannell LB. Black Trans Women Are Being Murdered in the Streets. Now the Trump Administration Wants to Turn Us Away From Shelters and Health Care [Internet]. American Civil Liberties Union; 2019.](https://www.aclu.org/blog/lgbt-rights/transgender-rights/black-trans-women-are-being-murdered-streets-now-trump)
104.	[Taylor L Boyer, Ada O Youk, Ann P Haas, George R Brown, Jillian C Shipherd, Michael R Kauth, Guneet K Jasuj, John R Blosnich, Suicide, Homicide, and All-Cause Mortality Among Transgender and Cisgender Patients in the Veterans Health Administration.](http://doi.org/10.1089/lgbt.2020.0235)
105.	[Transgender data collection in the electronic health record: Current concepts and issues](https://doi.org/10.1093/jamia/ocab136)
106.	[Sun, Simón(e) D. “Stop Using Phony Science to Justify Transphobia” (13 June 2019). Scientific American.](https://blogs.scientificamerican.com/voices/stop-using-phony-science-to-justify-transphobia/)

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/cdadicom_use_case.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2488         Joanie Harper                Fixed spelling of narrative per the Jira ticket https://jira.hl7.org/browse/OTHER-2488
2023-8-16		 Spell Check	    MaryKay McDaniel             "Recieve" changed to Receive, identifes to identifies
2023-8-18        OTHER-2706         Sean Muir                    Replaced SFCU with SPCU
2023-8-18        OTHER-2497         Sean Muir                    Updated CL Example    
2023-8-18        OTHER-2471         Sean Muir                    Update example per issue
2023-8-18        OTHER-2436         Sean Muir                    Updated CL Example  

-->

### CDA DICOM

This example was constructed to illustrate the DICOM use case.

The patient is a transgender male, undergoing hormonal treatment. Based on physician instructions, affirmed gender	creatinine reference ranges were confirmed to be within normal values prior to the administration of non-ionic iodinated contrast agent. CT images for attenuation correction and anatomic localization followed by PET images were obtained.

The Social History Section includes instance examples of the Gender Identity, Pronouns, and Recorded Sex or Gender templates.

Examples of the use of the Sex Parameter for Clinical Use template can be found in the Imaging Procedure History Section.



```
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="CDA.xsl"?>
<!-- Title: Sex Parameter for Clinical Use CDA Template Example file Version: 1.0 Revision History: 31-Jan-2011 source document created 10-Aug-2022 example drafted [Jay Lyle, JP Systems for the 
    VHA; Rob Horn, Fairhaven Technology; Steven Nichols, GE] -->
<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:mif="urn:hl7-org:v3/mif" xmlns:voc="urn:hl7-org:v3/voc"
    xsi:schemaLocation="urn:hl7-org:v3 CDA.xsd"
>
    <!-- ******************************************************** CDA Header ******************************************************** -->
    <realmCode code="US" />
    <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040" />
    <!-- US General Header Template -->
    <templateId root="2.16.840.1.113883.10.20.22.1.1" />
    <!-- Diagnostic Imaging Report Template -->
    <templateId root="2.16.840.1.113883.10.20.22.1.5" />
    <id root="2.16.840.1.113883.19.4.27" extension="20060828170821659" />
    <code code="18748-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnostic Imaging Report" />
    <title>PET/CT Heart W contrast IV</title>
    <effectiveTime value="20050329171504+0500" />
    <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25" />
    <languageCode code="en-US" />
    <setId extension="111199021" root="2.16.840.1.113883.19" />
    <versionNumber value="1" />
    <recordTarget>
        <!--NEW CONF per base CDA - patientRole SHALL be present of [1..*] -->
        <patientRole>
            <id extension="12345" root="2.16.840.1.113883.19.5" />
            <addr use="HP">
                <streetAddressLine>3300 Washtenaw Ave # 227</streetAddressLine>
                <city>Ann Arbor</city>
                <state>MI</state>
                <postalCode>48104</postalCode>
                <country>USA</country>
            </addr>
            <telecom value="tel:(734)555-1212" use="HP" />
            <patient>
                <name use="L">
                    <given>Smith</given>
                    <family>John</family>
                </name>
                <name use="P">
                <!-- Use the CL Callme from EntityPersonNamePartQualifier, 2.16.840.1.113883.11.20.9.26 to identify Name to use -->
                    <given qualifier="CL">Johanna</given>
                    <family>Jones</family>
                </name>                
                <administrativeGenderCode code="F" codeSystem="2.16.840.1.113883.5.1" />
                <birthTime value="19541125" />
                <maritalStatusCode code="S" displayName="Single" codeSystem="2.16.840.1.113883.5.2" codeSystemName="MaritalStatusCode" />
                <religiousAffiliationCode code="1013" displayName="Christian" codeSystemName="HL7 Religious Affiliation "
                    codeSystem="2.16.840.1.113883.5.1076" />
                <raceCode code="2106-3" displayName="White" codeSystem="2.16.840.1.113883.6.238" codeSystemName="Race &amp; Ethnicity - CDC" />
                <ethnicGroupCode code="2186-5" displayName="Not Hispanic or Latino" codeSystem="2.16.840.1.113883.6.238" codeSystemName="Race &amp; Ethnicity - CDC" />
                <guardian>
                    <code code="GRFTH" displayName="Grandfather" codeSystem="2.16.840.1.113883.5.111" codeSystemName="HL7 Role code" />
                    <addr use="HP">
                        <streetAddressLine>3300 Washtenaw Ave # 227</streetAddressLine>
                        <city>Ann Arbor</city>
                        <state>MI</state>
                        <postalCode>48104</postalCode>
                        <country>USA</country>
                    </addr>
                    <telecom value="tel:(734)555-1212" use="HP" />
                    <guardianPerson>
                        <name>
                            <given>Ralph</given>
                            <family>Relative</family>
                        </name>
                    </guardianPerson>
                </guardian>
                <birthplace>
                    <place>
                        <addr>
                            <state>MI</state>
                            <postalCode>48104</postalCode>
                            <country>USA</country>
                        </addr>
                    </place>
                </birthplace>
                <languageCommunication>
                    <languageCode code="fr-CN" />
                    <modeCode code="RWR" displayName="Receive Written" codeSystem="2.16.840.1.113883.5.60" codeSystemName="LanguageAbilityMode" />
                    <preferenceInd value="true" />
                </languageCommunication>
            </patient>
            <providerOrganization>
                <id root="2.16.840.1.113883.19.5" />
                <name>Good Imaging Clinic</name>
                <telecom value="tel:(734)555-1212" />
                <addr>
                    <streetAddressLine>21 North Ave</streetAddressLine>
                    <city>Ann Arbor</city>
                    <state>MI</state>
                    <postalCode>48104</postalCode>
                    <country>USA</country>
                </addr>
            </providerOrganization>
        </patientRole>
    </recordTarget>
    <author>
        <time value="20050329224411+0500" />
        <assignedAuthor>
            <id extension="KP00017" root="2.16.840.1.113883.19.5" />
            <addr>
                <streetAddressLine>21 North Ave.</streetAddressLine>
                <city>Ann Arbor</city>
                <state>MI</state>
                <postalCode>48104</postalCode>
                <country>USA</country>
            </addr>
            <telecom value="tel:(555)555-1003" />
            <assignedPerson>
                <name>
                    <given>Bill</given>
                    <family>Roentgen</family>
                </name>
            </assignedPerson>
        </assignedAuthor>
    </author>
    <dataEnterer>
        <assignedEntity>
            <id root="2.16.840.1.113883.19.5" extension="43252" />
            <addr>
                <streetAddressLine>21 North Ave.</streetAddressLine>
                <city>Ann Arbor</city>
                <state>MI</state>
                <postalCode>48104</postalCode>
                <country>USA</country>
            </addr>
            <telecom value="tel:(555)555-1003" />
            <assignedPerson>
                <name>
                    <given>Bill</given>
                    <family>Roentgen</family>
                </name>
            </assignedPerson>
        </assignedEntity>
    </dataEnterer>
    <custodian>
        <assignedCustodian>
            <representedCustodianOrganization>
                <id root="2.16.840.1.113883.19.5" />
                <name>Good Imaging Clinic</name>
                <telecom value="tel:(555)555-1212" use="WP" />
                <addr use="HP">
                    <streetAddressLine>3300 Washtenaw Ave # 227</streetAddressLine>
                    <city>Ann Arbor</city>
                    <state>MI</state>
                    <postalCode>48104</postalCode>
                    <country>USA</country>
                </addr>
            </representedCustodianOrganization>
        </assignedCustodian>
    </custodian>
    <informationRecipient>
        <intendedRecipient>
            <informationRecipient>
                <name>
                    <given>Bill</given>
                    <family>Roentgen</family>
                </name>
            </informationRecipient>
            <receivedOrganization>
                <name>Good Imaging Clinic</name>
            </receivedOrganization>
        </intendedRecipient>
    </informationRecipient>
    <legalAuthenticator>
        <time value="20050329224411+0500" />
        <signatureCode code="S" />
        <assignedEntity>
            <id extension="KP00017" root="2.16.840.1.113883.19.5" />
            <addr>
                <streetAddressLine>21 North Ave.</streetAddressLine>
                <city>Ann Arbor</city>
                <state>MI</state>
                <postalCode>48104</postalCode>
                <country>USA</country>
            </addr>
            <telecom value="tel:(555)555-1003" />
            <assignedPerson>
                <name>
                    <given>Bill</given>
                    <family>Roentgen</family>
                </name>
            </assignedPerson>
        </assignedEntity>
    </legalAuthenticator>
    <authenticator>
        <time value="20050329224411+0500" />
        <signatureCode code="S" />
        <assignedEntity>
            <id extension="KP00017" root="2.16.840.1.113883.19.5" />
            <addr>
                <streetAddressLine>21 North Ave.</streetAddressLine>
                <city>Ann Arbor</city>
                <state>MI</state>
                <postalCode>48104</postalCode>
                <country>USA</country>
            </addr>
            <telecom value="tel:(555)555-1003" />
            <assignedPerson>
                <name>
                    <given>Bill</given>
                    <family>Roentgen</family>
                </name>
            </assignedPerson>
        </assignedEntity>
    </authenticator>
    <inFulfillmentOf>
        <order>
            <id extension="10523475" root="1.2.840.113619.2.62.994044785528.27" />
            <code code="121022" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Accession Number" />
        </order>
    </inFulfillmentOf>
    <documentationOf>
        <serviceEvent classCode="ACT">
            <id root="1.2.840.113619.2.62.994044785528.114289542805" />
            <!-- study instance UID -->
            <code code="78814" displayName="Positron emission tomography (PET) with concurrently acquired computed tomography (CT)" codeSystem="2.16.840.1.113883.6.12"
                codeSystemName="CPT4" />
            <effectiveTime value="20060823222400" />
            <performer typeCode="PRF">
                <templateId root="2.16.840.1.113883.10.20.6.2.1" />
                <assignedEntity>
                    <id extension="121008" root="2.16.840.1.113883.19.5" />
                    <code code="2085R0202X" codeSystem="2.16.840.1.113883.11.19465" codeSystemName="NUCC" displayName="Diagnostic Radiology" />
                    <addr nullFlavor="NI" />
                    <telecom nullFlavor="NI" />
                    <assignedPerson>
                        <name>
                            <given>Matt</given>
                            <family>Cure</family>
                            <suffix>MD</suffix>
                        </name>
                    </assignedPerson>
                </assignedEntity>
            </performer>
        </serviceEvent>
    </documentationOf>
    <relatedDocument typeCode="XFRM">
        <parentDocument>
            <id root="1.2.840.113619.2.62.994044785528.20060823.200608232232322.9" />
            <!-- SOP Instance UID (0008,0018) -->
        </parentDocument>
    </relatedDocument>
    <componentOf>
        <encompassingEncounter>
            <id extension="9937012" root="1.3.6.4.1.4.1.2835.12" />
            <effectiveTime value="20060828170821" />
            <encounterParticipant typeCode="ATND">
                <templateId root="2.16.840.1.113883.10.20.6.2.2" />
                <assignedEntity>
                    <id extension="4" root="2.16.840.1.113883.19" />
                    <code code="208D00000X" codeSystem="2.16.840.1.113883.11.19465" codeSystemName="NUCC" displayName="General Practice" />
                    <addr nullFlavor="NI" />
                    <telecom nullFlavor="NI" />
                    <assignedPerson>
                        <name>
                            <prefix>Dr.</prefix>
                            <given>Fay</given>
                            <family>Family</family>
                        </name>
                    </assignedPerson>
                </assignedEntity>
            </encounterParticipant>
        </encompassingEncounter>
    </componentOf>
    <component>
        <structuredBody>
            <component>
                <!-- ********************************************************************** DICOM Object Catalog Section ********************************************************************** -->
                <section classCode="DOCSECT" moodCode="EVN">
                    <templateId root="2.16.840.1.113883.10.20.6.1.1" />
                    <code code="121181" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="DICOM Object Catalog" />
                    <entry>
                        <!-- ********************************************************************** Study ********************************************************************** -->
                        <act classCode="ACT" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.20.6.2.6" />
                            <id root="1.2.840.113619.2.62.994044785528.114289542805" />
                            <code code="113014" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Study" />
                            <!-- ***************************************************************** Series and SopInstance UID removed for brevity ***************************************************************** -->
                        </act>
                    </entry>
                </section>
                <!-- ********************************************************************** End of DICOM Object Catalog Section ********************************************************************** -->
            </component>
            <component>
                <!-- ********************************************************************** Social History Section ********************************************************************** -->
                <section>
                    <templateId root="2.16.840.1.113883.10.20.22.2.17" extension="2015-08-01" />
                    <templateId root="2.16.840.1.113883.10.20.22.2.17" />
                    <code code="29762-2" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" />
                    <title>Social History</title>
                    <text>
                        The patient was born female, identifies as male and is currently undergoing gender affirming hormone therapy.
                        <table border="1" width="100%" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Obs</th>
                                    <th>Value</th>
                                    <th>Kind</th>
                                    <th>Jurisdiction</th>
                                    <th>Date Acquired</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gender Identity</td>
                                    <td>Identifies as male gender</td>
                                    <td />
                                    <td />
                                    <td />
                                </tr>
                                <tr>
                                    <td>Pronouns</td>
                                    <td>He, Him, His, Himself</td>
                                    <td />
                                    <td />
                                    <td />
                                </tr>
                                <tr>
                                    <td>Recorded Sex or Gender</td>
                                    <td>Female</td>
                                    <td>Sex Assigned at Birth</td>
                                    <td>California</td>
                                    <td>201201011450+0600</td>
                                </tr>
                            </tbody>
                        </table>
                    </text>
                    <entry>
                        <!-- Examples - Identifies as male gender since DOB -->
                        <observation classCode="OBS" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.15.1" extension="2022-09-01" />
                            <code code="76691-5" codeSystem="2.16.840.1.113883.6.1" displayName="Gender Identity" />
                            <statusCode code="completed" />
                            <effectiveTime>
                                <low value="20140103" />
                            </effectiveTime>
                            <value xsi:type="CD" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" code="446151000124109" displayName="Identifies as male gender">
                            </value>
                        </observation>
                    </entry>
                    <entry>
                        <!-- Pronouns -->
                        <observation classCode="OBS" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.15.2" extension="2022-09-01" />
                            <code code="90778-2" codeSystem="2.16.840.1.113883.6.1" displayName="Personal pronouns" />
                            <statusCode code="completed" />
                            <value xsi:type="CD" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" code="LA29518-0" displayName="He, Him, His, Himself" />
                        </observation>
                    </entry>
                    <entry>
                        <observation classCode="OBS" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.15.4" extension="2022-09-01" />
                            <!-- http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/type -->
                            <code code="76689-9" codeSystem="2.16.840.1.113883.6.1" displayName="Sex assigned at birthr" />
                            <statusCode code="completed" />
                            <!-- http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/effectivePeriod -->
                            <effectiveTime>
                                <low value="202103" />
                            </effectiveTime>
                            <!-- http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/value -->
                            <value xsi:type="CD" code="F" codeSystem="2.16.840.1.113883.5.1" displayName="Female" codeSystemName="AdministrativeGender" />
                            <author>
                                <!-- http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/acquisitionDate -->
                                <time value="20230115" />
                            </author>
                            <entryRelationship typeCode="QUALF">
                                <!-- Jurisdiction -->
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="22.16.840.1.113883.10.15.4.1" extension="2022-09-01" />
                                    <code code="77969-4" codeSystem="2.16.840.1.113883.6.1" displayName="Jurisdiction code" />
                                    <statusCode code="completed" />
                                    <value xsi:type="CD" nullFlavor="OTH" codeSystem="NP">
                                        <!-- This may be coded but does not have to be -->
                                        <originalText>California</originalText>
                                    </value>
                                </observation>
                            </entryRelationship>
                            <entryRelationship typeCode="REFR">
                                <!-- Source Record Field Type -->
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.15.4.74" extension="2022-09-01" />
                                    <code code="48766-0" codeSystem="2.16.840.1.113883.6.1" displayName="Information Source" />
                                    <statusCode code="completed" />
                                    <value xsi:type="ED">BIRTH SEX</value>
                                </observation>
                            </entryRelationship>
                            <reference typeCode="REFR">
                                <!-- http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/sourceDocument -->
                                <externalDocument classCode="DOCCLIN" moodCode="EVN">
                                    <code codeSystem="" codeSystemName="" code="" displayName="" />
                                    <text>California Drivers License</text>
                                </externalDocument>
                            </reference>
                        </observation>
                    </entry>
                </section>
                <!-- ********************************************************************** End of Social History Section ********************************************************************** -->
            </component>
            <component>
                <!-- ********************************************************************** Reason for study Section ********************************************************************** -->
                <section>
                    <code code="121109" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Indications for Procedure" />
                    <title>Indications for Procedure</title>
                    <text>Discordant clinical, ECG, and myocardial perfusion SPECT results</text>
                </section>
                <!-- ********************************************************************** End of Reason for study Section ********************************************************************** -->
            </component>
            <component>
                <!-- ********************************************************************** History Section ********************************************************************** -->
                <section>
                    <code code="11329-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History" />
                    <title>History</title>
                    <text>
                        <paragraph>
                            <caption>History</caption>
                            <content ID="Fndng1">History goes here...</content>
                        </paragraph>
                    </text>
                    <entry>
                        <!-- History report element (TEXT) -->
                        <observation classCode="OBS" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.20.6.2.12" />
                            <code code="121060" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="History" />
                            <value xsi:type="ED"> History text</value>
                        </observation>
                    </entry>
                    <!-- *************************************************************************** Supporting information for Sex for Clinical Use This is not likely to appear in 
                        a PET/CT report but is provided to illustrate the use of the supporting reference. ***************************************************************************** -->
                    <entry>
                        <substanceAdministration classCode="SBADM" moodCode="EVN">
                            <!-- ** Medication Activity (V2) ** -->
                            <templateId root="2.16.840.1.113883.10.20.22.4.16" extension="2014-06-09" />
                            <id root="6C844C75-AA34-411C-B7BD-5E4A9F206E29" />
                            <statusCode code="active" />
                            <effectiveTime xsi:type="IVL_TS">
                                <low value="20120318" />
                            </effectiveTime>
                            <doseQuantity value="1" />
                            <consumable>
                                <manufacturedProduct classCode="MANU">
                                    <!-- ** Medication information ** -->
                                    <templateId root="2.16.840.1.113883.10.20.22.4.23" extension="2014-06-09" />
                                    <id root="2a620155-9d11-439e-92b3-5d9815ff4ee8" />
                                    <manufacturedMaterial>
                                        <code code="403922" displayName="168 HR estradiol 0.00156 MG/HR Transdermal System" codeSystem="2.16.840.1.113883.6.88"
                                            codeSystemName="RxNorm" />
                                    </manufacturedMaterial>
                                </manufacturedProduct>
                            </consumable>
                        </substanceAdministration>
                    </entry>
                </section>
            </component>
            <!-- ********************************************************************** End of History Section ********************************************************************** -->
            <!-- ********************************************************************** Imaging Procedure Description Section ********************************************************************** -->
            <component>
                <section classCode="DOCSECT" moodCode="EVN">
                    <templateId root="1.2.840.10008.9.3" />
                    <id root="1.2.840.10213.2.62.9940434234785528.11428954534542805" />
                    <code code="55111-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Current Imaging Procedure Description" />
                    <title>Imaging Procedure Description</title>
                    <text>
                        <table border="1" width="100%" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td>Sex For Clinical Use</td>
                                    <td>Female</td>
                                </tr>
                                <tr>
                                    <td>Imaging Technique</td>
                                    <td>The patient is a transgender male, undergoing hormonal treatment. Based on physician instructions, affirmed gender creatinine reference
                                        ranges were confirmed to be within normal values prior to the administration of non-ionic iodinated contrast agent.. CT images for
                                        attenuation correction and anatomic localization followed by PET images were obtained..
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </text>
                    <entry>
                        <procedure moodCode="EVN" classCode="PROC">
                            <id root="1.2.840.10213.2.62.7044785528.999999999" />
                            <code code="78814"
                                displayName="Positron emission tomography (PET) with concurrently acquired 
                                computed tomography (CT)"
                                codeSystem="2.16.840.1.113883.6.12" codeSystemName="CPT4" />
                            <entryRelationship typeCode="COMP">
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.15.3" extension="2022-09-01" />
                                    <code code="99501-9" codeSystem="2.16.840.1.113883.6.1" displayName="Sex for clinical use" />
                                    <statusCode code="completed" />
                                    <value xsi:type="CD" codeSystem="2.16.840.1.113883.4.642.1.983" codeSystemName="Sex For Clinical Use" code="female"
                                        displayName="Female sex for clinical use"
                                    >
                                    </value>
                                    <!-- ********************************************************************* Supporting Reference for Sex for Clinical Use - This is not likely to 
                                        appear in a PET/CT report but is provided to illustrate the use of the supporting reference. ********************************************************************* -->
                                    <entryRelationship typeCode="SPRT">
                                        <act classCode="ACT" moodCode="EVN">
                                            <templateId root="2.16.840.1.113883.10.20.22.4.122" />
                                            <id root="6C844C75-AA34-411C-B7BD-5E4A9F206E29" />
                                            <code nullFlavor="OTH" codeSystem="NP" />
                                            <statusCode code="completed" />
                                        </act>
                                    </entryRelationship>
                                </observation>
                            </entryRelationship>
                        </procedure>
                    </entry>
                </section>
            </component>
            <!-- ********************************************************************** End of Imaging Procedure Description Section ********************************************************************** -->
            <component>
                <!-- ********************************************************************** Findings Section ********************************************************************** -->
                <!-- ********************************************************************** SUV value - Radiologist determines relevant sex at time of measurement and adds as DICOM 
                    acquisition context ********************************************************************** -->
                <section>
                    <templateId root="2.16.840.1.113883.10.20.6.1.2" />
                    <code code="121070" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Findings" />
                    <title>Findings</title>
                    <text>
                        <paragraph>
                            <caption>Finding</caption>
                            <content ID="Fndng2">Findings narrative goes here...</content>
                        </paragraph>
                        <paragraph>
                            <caption>Standardized uptake value</caption>
                            <content ID="Suv2">12g/ml{SUVlbm}</content>
                        </paragraph>
                        <paragraph>
                            <caption>Source of Measurement</caption>
                            <content ID="SrceOfMeas2">
                                <linkHtml
                                    href="http://www.example.org/radiology1.2.840.113619.2.62.994044785528.114289542805/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/1.2.250.1.59.40211.2678810.87991027.899772.2;contentType=application/dicom"
                                >Coronal</linkHtml>
                            </content>
                        </paragraph>
                    </text>
                    <entry>
                        <observation classCode="OBS" moodCode="EVN">
                            <!-- Text Observation -->
                            <templateId root="2.16.840.1.113883.10.20.6.2.12" />
                            <code code="121071" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Finding" />
                            <value xsi:type="ED">
                                <reference value="#Fndng2" />
                            </value>
                            <!-- inferred from measurement -->
                            <entryRelationship typeCode="SPRT">
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.20.6.2.14" />
                                    <code code="52988006" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED" displayName="Lesion">
                                        <originalText>
                                            <reference value="#Suv2" />
                                        </originalText>
                                    </code>
                                    <!-- no DICOM attribute -->
                                    <statusCode code="completed" />
                                    <effectiveTime value="20060823223912" />
                                    <value xsi:type="PQ" value="12" unit="g/ml{SUVlbm}">
                                        <translation code="g/ml{SUVlbm}" codeSystem="2.16.840.1.113883.6.8" codeSystemName="UCUM" codeSystemVersion="1.5" />
                                    </value>
                                    <!-- *********************************************************************************** Second SPCU observation to support SUV interpretation ************************************************************************************** -->
                                    <entryRelationship typeCode="COMP">
                                        <observation classCode="OBS" moodCode="EVN">
                                            <templateId root="2.16.840.1.113883.10.15.3" extension="2022-09-01" />
                                            <code code="99501-9" codeSystem="2.16.840.1.113883.6.1" displayName="Sex for clinical use" />
                                            <statusCode code="completed" />
                                            <value xsi:type="CD" codeSystem="2.16.840.1.113883.4.642.1.983" codeSystemName="Sex For Clinical Use" code="male"
                                                displayName="Male sex for clinical use"
                                            >
                                            </value>
                                        </observation>
                                    </entryRelationship>
                                    <!-- inferred from image -->
                                    <entryRelationship typeCode="SUBJ">
                                        <observation classCode="DGIMG" moodCode="EVN">
                                            <templateId root="2.16.840.1.113883.10.20.6.2.8" />
                                            <!-- (0008,1155) Referenced SOP Instance UID -->
                                            <id root="1.2.840.113619.2.62.994044785528.20060823.200608232232322.3" />
                                            <!-- (0008,1150) Referenced SOP Class UID -->
                                            <code code="1.2.840.10008.5.1.4.1.1.128" codeSystem="1.2.840.10008.2.6.1" codeSystemName="DCMUID"
                                                displayName="Positron Emission Tomography Image Storage"
                                            >
                                            </code>
                                            <text mediaType="application/dicom">
                                                <!-- reference to PET DICOM image -->
                                                <reference
                                                    value="http://www.example.org/radiology1.2.840.113619.2.62.994044785528.114289542805/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/1.2.250.1.59.40211.2678810.87991027.899772.2;contentType=application/dicom" />
                                            </text>
                                            <effectiveTime value="20060823223232" />
                                            <!-- Referenced Frames -->
                                            <entryRelationship typeCode="COMP">
                                                <observation classCode="ROIBND" moodCode="EVN">
                                                    <templateId root="2.16.840.1.113883.10.20.6.2.10" />
                                                    <code code="121190" codeSystem="1.2.840.10008.2.16.4" displayName="Referenced Frames" />
                                                    <entryRelationship typeCode="COMP">
                                                        <!-- Boundary Observation -->
                                                        <observation classCode="OBS" moodCode="EVN">
                                                            <templateId root="2.16.840.1.113883.10.20.6.2.11" />
                                                            <code code="113036" codeSystem="1.2.840.10008.2.16.4" displayName="Group of Frames for Display" />
                                                            <value xsi:type="INT" value="1" />
                                                        </observation>
                                                    </entryRelationship>
                                                </observation>
                                            </entryRelationship>
                                            <!-- Purpose of Reference -->
                                            <entryRelationship typeCode="RSON">
                                                <observation classCode="OBS" moodCode="EVN">
                                                    <templateId root="2.16.840.1.113883.10.20.6.2.9" />
                                                    <code code="ASSERTION" codeSystem="2.16.840.1.113883.5.4" />
                                                    <value xsi:type="CD" code="121112" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM"
                                                        displayName="Source of Measurement"
                                                    >
                                                        <originalText>
                                                            <reference value="#SrceOfMeas2" />
                                                        </originalText>
                                                    </value>
                                                </observation>
                                            </entryRelationship>
                                        </observation>
                                    </entryRelationship>
                                </observation>
                            </entryRelationship>
                        </observation>
                    </entry>
                </section>
                <!-- ********************************************************************** End of Findings Section ********************************************************************** -->
            </component>
            <component>
                <!-- ********************************************************************** Impressions Section ********************************************************************** -->
                <section>
                    <code code="121072" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Impressions" />
                    <title>Impressions</title>
                    <text>
                        <paragraph>
                            <caption>Impression</caption>
                            <content ID="Fndng3">Impression goes here...</content>
                        </paragraph>
                    </text>
                    <entry>
                        <!-- Impression report element (TEXT) -->
                        <observation classCode="OBS" moodCode="EVN">
                            <!-- Text Observation -->
                            <templateId root="2.16.840.1.113883.10.20.6.2.12" />
                            <code code="121073" codeSystem="1.2.840.10008.2.16.4" codeSystemName="DCM" displayName="Impression" />
                            <value xsi:type="ED">
                                <reference value="#Fndng3" />
                            </value>
                        </observation>
                    </entry>
                    <entry>
                        <act moodCode="EVN" classCode="ACT">
                            <templateId root="2.16.840.1.113883.10.20.6.2.5" />
                            <!-- Procedure Context template -->
                            <code code="78814" displayName="Positron emission tomography (PET) with concurrently acquired computed tomography (CT)"
                                codeSystem="2.16.840.1.113883.6.12" codeSystemName="CPT4" />
                            <!-- Note: This code is slightly different than the code used in the header documentationOf and overrides it, which is what this entry is for. -->
                            <effectiveTime value="20060823222400" />
                        </act>
                    </entry>
                </section>
                <!-- ********************************************************************** End of Impressions Section ********************************************************************** -->
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>
```


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/cdaexamples.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-8-18        OTHER-2706         Sean Muir                    Replaced SFCU with SPCU
2023-8-18        OTHER-2497         Sean Muir                    Updated CL Example    
2023-8-18        OTHER-2471         Sean Muir                    Update example per issue
2023-8-18        OTHER-2436         Sean Muir                    Updated CL Example  
2023-8-18        OTHER-2464         Sean Muir                    Update example per issue
2023-8-18        OTHER-2466         Sean Muir                    Update example per issue
2023-8-18        OTHER-2487         Sean Muir                    Update example per issue
-->

### CDA DICOM Use Case Example
[CDA DICOM USE CASE](cdadicom_use_case.html)

### Representing Sex & Gender Implementation Guide Examples.
#### Gender Identity Observation Example
```
<!-- Examples - Identifies as male gender since DOB to 15; then as non binary starting in 2014 -->
<observation classCode="OBS" moodCode="EVN">
    <templateId root="2.16.840.1.113883.10.15.1" extension="2022-09-01" />
    <code code="76691-5" codeSystem="2.16.840.1.113883.6.1" displayName="Gender Identity" />
    <statusCode code="completed" />
    <effectiveTime>
        <low value="19990103" />
        <high value="2014" />
    </effectiveTime>
    <value xsi:type="CD" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" code="446151000124109" displayName="Identifies as male gender"></value>
</observation>
...
  
<observation classCode="OBS" moodCode="EVN">
    <templateId root="2.16.840.1.113883.10.15.1" extension="2022-09-01" />
    <code code="76691-5" codeSystem="2.16.840.1.113883.6.1" displayName="Gender Identity" />
    <statusCode code="completed" />
    <effectiveTime>
        <low value="2014" />
    </effectiveTime>
    <value xsi:type="CD" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" code="33791000087" displayName="Identifies as nonbinary gender"></value>
</observation>

...
 
```
#### Pronouns Observation Example
```
 <observation classCode="OBS" moodCode="EVN">
     <templateId root="2.16.840.1.113883.10.15.2" extension="2022-09-01"/>
     <code code="90778-2" codeSystem="2.16.840.1.113883.6.1"
          displayName="Personal pronouns"/>
          <statusCode code="completed"/>
     <value xsi:type="CD" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC" code="LA29518-0"
          displayName="He, Him, His, Himself"/>
</observation>

```
#### Recorded Sex or Gender
```
<observation classCode="OBS" moodCode="EVN">
    <templateId root="2.16.840.1.113883.10.15.4" extension="2022-09-01" />
    
    <!--  http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/type  -->
    <code code="76689-9" codeSystem="2.16.840.1.113883.6.1" displayName="Sex assigned at birth" />
    <statusCode code="completed" />
    <!--  http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/effectivePeriod -->
    <effectiveTime>
        <low value="202103" />
    </effectiveTime>
    <!--  http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/value -->
    <value xsi:type="CD" code="M" codeSystem="2.16.840.1.113883.5.1" displayName="Male" codeSystemName="AdministrativeGender" />
    <author>
        <!--  http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/acquisitionDate -->
        <time value="20230115" />
    </author>
    <entryRelationship typeCode="QUALF">
        <!-- Jurisdiction -->
        <observation classCode="OBS" moodCode="EVN">
            <templateId root="22.16.840.1.113883.10.15.4.1" extension="2022-09-01" />
            <code code="77969-4" codeSystem="2.16.840.1.113883.6.1" displayName="Jurisdiction code" />
            <statusCode code="completed" />
            <value xsi:type="CD" nullFlavor="OTH" codeSystem="NP">
                <!-- This may be coded but does not have to be -->
                <originalText>California</originalText>
            </value>
        </observation>
    </entryRelationship>
    <entryRelationship typeCode="REFR">
        <!-- Source Record Field Type -->
        <observation classCode="OBS" moodCode="EVN">
            <templateId root="2.16.840.1.113883.10.15.4.74" extension="2022-09-01" />
            <code code="48766-0" codeSystem="2.16.840.1.113883.6.1" displayName="Information Source" />
            <statusCode code="completed" />
            <value xsi:type="ED">BIRTH SEX</value>
        </observation>
    </entryRelationship>
    <reference typeCode="REFR">
        <!--  http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender/sourceDocument -->
        <externalDocument classCode="DOCCLIN" moodCode="EVN">
            <code codeSystem="" codeSystemName="" code="" displayName="" />
            <text>California Drivers License</text>
        </externalDocument>
    </reference>
</observation>
```
#### Sex Parameter for Clinical Use
```
<observation classCode="OBS" moodCode="EVN">
    <templateId root="2.16.840.1.113883.10.15.3"
        extension="2022-09-01"/>
    <code code="99501-9" codeSystem="2.16.840.1.113883.6.1"
        displayName="Sex for clinical use"/>
    <statusCode code="completed"/>
    <value xsi:type="CD"
        codeSystem="2.16.840.1.113883.4.642.1.983"
        codeSystemName="Sex For Clinical Use" code="female"
        displayName="Female sex for clinical use">
    </value>
    <!-- Supporting Reference for Sex for Clinical Use -->
    <entryRelationship typeCode="SPRT">
        <act classCode="ACT" moodCode="EVN">
            <templateId root="2.16.840.1.113883.10.20.22.4.122"/>
            <id root="6C844C75-AA34-411C-B7BD-5E4A9F206E29"/>
            <code nullFlavor="OTH" />
            <statusCode code="completed"/>
        </act>
    </entryRelationship>
</observation>

```





---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/cdagenderharmony.md

<!-- Updates based on Jira tickets 
Date             Jira ticket              Updated by               Comment
2023-8-16        spell/grammar check      MaryKay McDaniel         timeframes to time frames, 
2023-8-16        OTHER-2602               MaryKay McDaniel         commented out the Note to balloter, incase it was needed for something in other tickets
2023-08-27        OTHER-2574        Rob McClure                   ValueSet to value set, data type to datatype
2023-09-05        none            Rob McClure           Fixed ballot references and content noting included CDA pdf
-->


When compared to the original ballot, this cross-paradigm publication **no longer contains an embedded CDA template IG.** The gender harmony publication process removed the CDA template IG from this FHIR publication and created a separate Standard for Trial Use (STU) CDA R2 implementation guide that is considered a companion guide to this cross-paradigm guide. The CDA gender harmony template implementation guide is discussed here but the details are only available within the published CDA template guide:
-  [HL7 CDA® R2 Implementation Guide: Gender Harmony - Sex and Gender Representation](http://www.hl7.org/permalink/?GenderHarmonyCDAIG)

From this point forward the CDA gender harmony template IG will be updated and improved based upon implementer feedback separately from this cross-paradigm guide.

### Outline of gender harmony artifacts in CDA

The CDA gender harmony template IG provides entry templates to support the representation of sex and gender as proposed in the Gender Harmony logical model in forms that can be unambiguously translated among HL7 V2, CDA, and FHIR representations. 

The Gender Harmony logical model identifies five classes: “gender identity,” “pronouns,” “name to use,” “recorded sex or gender,” and “Sex Parameter for Clinical Use.” Because the CDA person name supports name use time frames, this guide does not specify a template for “name to use.” It includes templates for each of the remaining four classes. It also includes one inherited template used by “Sex Parameter for Clinical Use.”

### Guidance on use of gender harmony artifacts in systems

The CDA gender harmony template IG does not define any document or section templates, and it does not specify what documents or document sections should contain these templates. The guide defines entry templates that can be adopted by any organization that finds them useful, in any way it finds useful. It is expected that entries based on three templates (Gender Identity, Pronouns, and Recorded Sex or Gender) will be contained in a Social History section, but this is not a constraint. The Sex Parameter for Clinical Use template has its own rules for where it should be used.

As most guides specify “open” templates, inclusion of these entries where appropriate should be feasible. Open templates allow HL7 implementers to develop additional structured content not defined within any specific guide. In open templates, all of the features of the CDA R2 base specification are allowed except as constrained by the templates. By contrast, a closed template specifies everything that is allowed and nothing further may be included.

### Backwards compatibility of gender harmony templates with prior artifacts

-  **Name to use** is not templated, as it is supported by Person Name datatype.

-  **Pronouns** is represented as a new template.

-  **Sex Parameter for Clinical Use** is a new template.

-  The **Gender Identity** template is very similar to an existing template in the C-CDA companion guide, which many may have already implemented. The new template was designed to be compatible with the prior one, and all of its constraints are looser, so it is feasible to use both template IDs in a template instance. The most significant difference, and one we hope implementers will find useful, is a value set that addresses gender only, without pre-coordinated history. 

-  **Recorded Sex or Gender** represents values that may be captured in existing templates, such as Birth Sex Observation, and possibly in the Patient.administrativeGenderCode, but it does so in a more generic manner. A Birth Sex Observation can be represented as a Recorded Sex or Gender by putting the Birth Sex Observation.code into the element type subentry of Recorded Sex or Gender. 

### Design considerations

To support the content defined in the Gender Harmony logical model in CDA, two primary design approaches were considered: the “core model change” option, where the CDA model would be extended by defining new types and relations in the SDTC extension schema, and the “name-value” option, where templates could be defined to specify data elements as Observations with codes and values.

Both the FHIR and V2 efforts chose to build this information into the core model – as FHIR extensions in FHIR and as a new segment in V2 – because the information processing requirements that those standards support benefit from this proximity. In FHIR, for instance, an extension on Patient is included in the Patient resource instance and is available to any client with access to the Patient, whereas using an Observation would require clients to traverse the Observation reference, and possibly to modify the scope of authorization needed to do so.

CDA does not have this constraint. While the xpath of an Observation entry is longer than the xpath of a Patient property, all of the content of a document is integrally and holistically included in the document. The primary criterion, then, was ease of use and access to the artifacts. Since implementers are familiar with the process of processing clinical statements, their technologies handle additions to these clinical statement templates frequently, and the means of publishing these templates presents the complete design to stakeholders (without requiring inspection of xsd hierarchy), the clinical statement template was judged the most feasible approach.

One concern was translation: would adopting the “name-value” option in CDA create difficulties translating from and to specifications that adopted the “core model change” option? The answer is that the use of the name-value pattern does not add significantly to the complexity of mapping across the specification formats. The [Design Considerations](design.html) page includes a cross-walk table to identify how the logical elements are represented across CDA, FHIR, and HL7 V2.

Implementers should institutional norms when considering acceptable scoping (IE: where to include the templates) for three of the templates – gender identity, pronouns, and recorded sex or gender. Each of these traditionally are scoped to a patient, therefore their inclusion in a Social History section seems appropriate for anticipated use cases.

The scope of Sex Parameter for Clinical Use (SPCU) is different from the other templates. It is designed to contextualize clinical operations. It may constrain the execution of a specific intervention, or it may affect the interpretation of a specific result. The target activity scopes the validity of the observation. The requirement unique to SPCU is to associate the SPCU observation with the appropriate target or targets.

Given that CDA supports multiple approaches for asserting relationships among entries, putting the SPCU observation in a section with the entries it constrains would not imply the required information. Document section boundaries do not carry or imply semantics.

One approach would be to use the Entry Reference template to associate an SPCU with those entries to which it applies. This is a quite flexible approach, but it may rely on a level of sophistication that not all implementers can support, and it makes visual rendering difficult.

The SPCU template defined here describes an approach using entryRelationship to establish context specific to an entry, to an encounter, or to the patient generally. This approach leverages context conduction appropriately, and it is a tactic with which many implementers are familiar. It also requires the use of the Entry Reference template where the SPCU applies to multiple entries.





---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/changelog.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-08-20        None              MaryKay McDaniel             Initial creation

2023-09-4
QUESTION to all...
1) DID NOT include OTHER-2517, did not seem relevant to the changes made? 
2) This change log does NOT include and of the FHIR changes made for Gender Harmony - do I need to go back and add them???
MK
-->

This log contains changes that are a result of the HL7 International ballot process for *for all cross-paradigm gender harmony publications*. The resolution of the community comments have been agreed and voted on by members of the following management and work groups:  CDA Management Group, Financial Management, Orders and Observations, Patient Administration, Patient Care, Structured Documents, Terminology Infrastructure, Terminology Services Management Group, and V2 Management Group.

### Changes applied to FHIR R5 Standard 
**Applied:** Wording, formatting, and grammar corrections per 
[FHIR-38861](https://jira.hl7.org/browse/FHIR-38861), 
[FHIR-39197](https://jira.hl7.org/browse/FHIR-39197), 
[FHIR-39201](https://jira.hl7.org/browse/FHIR-39201), 
[FHIR-39202](https://jira.hl7.org/browse/FHIR-39202), 
[FHIR-39204](https://jira.hl7.org/browse/FHIR-39204), and
[FHIR-39210](https://jira.hl7.org/browse/FHIR-39210)<br> 
**Applied:** Removed the element "InternationalEquivalentRecordedSexOrGender" [FHIR-38892](https://jira.hl7.org/browse/FHIR-38892), 
[FHIR-39193](https://jira.hl7.org/browse/FHIR-39193), and 
[FHIR-39527](https://jira.hl7.org/browse/FHIR-39527)<br> 
**Applied:** Modified Definition of Specified and Null [FHIR-38893](https://jira.hl7.org/browse/FHIR-38893)<br>
**Applied:** Added PractitionerRole as an allowed context for the GI extension [FHIR-39195](https://jira.hl7.org/browse/FHIR-39195)<br>
**Applied:** Added general language referring implementers to GHP IG for specific guidance on how and when to use  [FHIR-39196](https://jira.hl7.org/browse/FHIR-39196)<br>
**Applied:**  Updated gender-identity value set to use the codes from the source code system (SNOMED) directly instead of importing the NLM value set. [FHIR-39198](https://jira.hl7.org/browse/FHIR-39198)<br>
**Applied:** Updated GI text [FHIR-39202](https://jira.hl7.org/browse/FHIR-39202)<br>
**Applied:** Added "asked-declined" to GI value set [FHIR-39238](https://jira.hl7.org/browse/FHIR-39238)<br>
**Applied:** Update the definition narrative for individual-genderidentity extension [FHIR-39246](https://jira.hl7.org/browse/FHIR-39246)<br>
**Applied:** Modified display names in the value set to remove the "(finding)" parenthetical [FHIR-39459](https://jira.hl7.org/browse/FHIR-39459)<br>
**Applied:** Changes to the guidance and wording in the Sex and Gender section, moving recommendations out of the FHIR base spec and into the GHP IG [FHIR-39203](https://jira.hl7.org/browse/FHIR-39203)<br>
**Applied:** Modified RSG value set [FHIR-39205](https://jira.hl7.org/browse/FHIR-39205) and [FHIR-39237](https://jira.hl7.org/browse/FHIR-39237)<br>
**Applied:** Added clarification for RSG [FHIR-39232](https://jira.hl7.org/browse/FHIR-39232), see also [OTHER-2463](https://jira.hl7.org/browse/OTHER-2463)<br>
**Applied:** Change SFCU to SPCU [FHIR-39219](https://jira.hl7.org/browse/FHIR-39219)<br>
**Applied:** Update the unknown code in the SFCU value set to be "unknown" from https://terminology.hl7.org/CodeSystem-data-absent-reason.html [FHIR-39231](https://jira.hl7.org/browse/FHIR-39231)<br>
**Applied:** Clarified definition and display for "Specified" in SFCU values [FHIR-39241](https://jira.hl7.org/browse/FHIR-39241)<br>
**Applied:** Update pronoun value set display text to the same as the LOINC code it represents [FHIR-39676](https://jira.hl7.org/browse/FHIR-39676)<br>


### Changes applied to the **HL7 CDA® R2 Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1** Implementation Guide

<!-- Validate the actual name of this IG
     These are marked at applied, so added to the list. These I did not confirm/validate.
      OTHER:  2475, 2476, 2478, 2481, 2482, 2483, 2485, 2486, 2489, 2711
-->
**Completed:** Removed the final HL7 CDA® R2 Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1 PDF from this guide, the final document is published separately <br>
**Applied:** Update CONF:4536-61 conformance verb from SHOULD to SHALL [OTHER-2435](https://jira.hl7.org/browse/OTHER-2435)<br>
**Applied:** In the Gender Identity section added sentence to provide clarity around provenance [OTHER-2465](https://jira.hl7.org/browse/OTHER-2465)<br>
**Applied:** In the Individual Pronouns section added sentence to provide clarity around provenance [OTHER-2467](https://jira.hl7.org/browse/OTHER-2467)<br>
**Applied:** Removed the International Equivalent Recorded Sex or Gender data element [OTHER-2469](https://jira.hl7.org/browse/OTHER-2469)<br>
**Applied:** Updated individual pronouns constraint CONF:4536-61, SHALL contain...code SHOULD be...[OTHER-2475](https://jira.hl7.org/browse/OTHER-2475)<br>
**Applied:** Updated individual pronouns constraint CONF:4436-60 a [OTHER-2476](https://jira.hl7.org/browse/OTHER-2476)<br>
**Applied:** Updated inconsistent conformance verb/cardinality: MAY contain 1..1 effective time [OTHER-2477](https://jira.hl7.org/browse/OTHER-2477)<br>
**Applied:** Updated USG value set binding [OTHER-2478](https://jira.hl7.org/browse/OTHER-2478)<br>
**Applied:** Improved sub-organization modularity for recorded sex and gender [OTHER-2480](https://jira.hl7.org/browse/OTHER-2480)<br>
**Applied:** Added RSG Jurisdiction and Document Type observations value set bindings [OTHER-2481](https://jira.hl7.org/browse/OTHER-2481)<br>
**Applied:** RSG Document Type sub-observation verb/cardinality mismatch corrected [OTHER-2482](https://jira.hl7.org/browse/OTHER-2482)<br>
**Applied:** Updated typo in statusCode "complete" to "completed" [OTHER-2483](https://jira.hl7.org/browse/OTHER-2483)<br>
**Applied:** Corrected RSG constraint CONF:4536-136 urn:oid [OTHER-2485](https://jira.hl7.org/browse/OTHER-2485)<br>
**Applied:** Corrected RSG Xpath for reference narrative guidance [OTHER-2486](https://jira.hl7.org/browse/OTHER-2486)<br>
**Applied:** Updated display name for LA29520-6 [OTHER-2489](https://jira.hl7.org/browse/OTHER-2489)<br>
**Applied:** Fix broken links Gender Identity Core Concepts, Asked but Unknown and Other and harmonize the value set with THO ValueSet Gender Identity [OTHER-2498](https://jira.hl7.org/browse/OTHER-2498) and [OTHER-2499](https://jira.hl7.org/browse/OTHER-2499)<br>
**Applied:** Fix broken Pronoun links [OTHER-2500](https://jira.hl7.org/browse/OTHER-2500)<br>
**Applied:** Clarified recorded sex and gender representation Observation: identifier urn:oid:2.16.840.1.113883.10.15.4 [OTHER-2501](https://jira.hl7.org/browse/OTHER-2501)<br>
**Applied:** For consistency, removed RSG CONF:4536-141. It was Not included FHIR R5 or V2.9.1 [OTHER-2504](https://jira.hl7.org/browse/OTHER-2504)<br>
**Applied:** Correction, added missing Act Relationship Types for RSG [OTHER-2505](https://jira.hl7.org/browse/OTHER-2505)<br>
**Applied:** CDA Recorded Sex or Gender Patient Record Type, use Act reference/ExternalAct instead [OTHER-2506](https://jira.hl7.org/browse/OTHER-2506) and [OTHER-2508](https://jira.hl7.org/browse/OTHER-2508)<br>
**Applied:** Remove DateTime Template, use effectiveTime [OTHER-2507](https://jira.hl7.org/browse/OTHER-2507)<br>
**Applied:** CDA Recorded Sex or Gender - Sex for Clinical Use SPRT actRelationshipType is "Has Support" [OTHER-2510](https://jira.hl7.org/browse/OTHER-2510)<br>
**Applied:** In CDA, Change SFCU to SPCU based upon resolution of ballot comments [OTHER-2470](https://jira.hl7.org/browse/OTHER-2470) and [OTHER-2671](https://jira.hl7.org/browse/OTHER-2671)<br>
**Applied:** CDA Sex for Clinical Use - Unclear Sentence [OTHER-2511](https://jira.hl7.org/browse/OTHER-2511)<br>
**Applied:** Update the conformance statement for observation.value.code at 2.3.13.a.v [OTHER-2640](https://jira.hl7.org/browse/OTHER-2640)<br>
**Applied:** Updated gender null flavor instructions [OTHER-2711](https://jira.hl7.org/browse/OTHER-2711)<br>

### Changes applied to the V2.9.1 Standard

**Applied:** Wording, typos,broken links, and grammar corrections per 
[V2-25385](https://jira.hl7.org/browse/V2-25385), 
[V2-25386](https://jira.hl7.org/browse/V2-25386), 
[V2-25387](https://jira.hl7.org/browse/V2-25387), 
[V2-25420](https://jira.hl7.org/browse/V2-25420), 
[V2-25423](https://jira.hl7.org/browse/V2-25423), 
[V2-25424](https://jira.hl7.org/browse/V2-25424), 
[V2-25442](https://jira.hl7.org/browse/V2-25442), 
[V2-25446](https://jira.hl7.org/browse/V2-25446), 
[V2-25452](https://jira.hl7.org/browse/V2-25452), 
[V2-25458](https://jira.hl7.org/browse/V2-25458), 
[V2-25487](https://jira.hl7.org/browse/V2-25487), and 
[V2-25507](https://jira.hl7.org/browse/V2-25507), <br>

**Applied:** Modified both OBX and 3 new segments, updated guidance [V2-25412](https://jira.hl7.org/browse/V2-25412)<br>
**Applied:** Updated the descriptions of PID-8, GT1-9, and IN1-43 [V2-25414](https://jira.hl7.org/browse/V2-25414) and [V2-25506](https://jira.hl7.org/browse/V2-25506) <br>
**Applied:** Added guidance for name to use in section 3.4.2.5 [V2-25415](https://jira.hl7.org/browse/V2-25415)<br>
**Applied:** Added guidance in Chapter 1 clarifying updates to the underlying base are not expected to automatically be adopted by existing integrations [V2-25418](https://jira.hl7.org/browse/V2-25418)<br>

**Applied:** Modified Table 0821 per 
[V2-25425](https://jira.hl7.org/browse/V2-25425), 
[V2-25434](https://jira.hl7.org/browse/V2-25434), 
[FHIR-39459](https://jira.hl7.org/browse/FHIR-39459), 
[V2-25447](https://jira.hl7.org/browse/V2-25447), and
[V2-25460](https://jira.hl7.org/browse/V2-25460)<br>

**Applied:** SFCU changed to SPCU, links provided to the Gender Harmony Implementation Guide [V2-25427](https://jira.hl7.org/browse/V2-25427)<br>
**Applied:** Modified to table to include the final value set description in the FHIR value set [V2-25436](https://jira.hl7.org/browse/V2-25436)<br>
**Applied:** Updated Table 824 in Chapter 2c to align with the FHIR RSG value set http://hl7.org/fhir/extensions/ValueSet-recorded-sex-or-gender-type.html [V2-25438](https://jira.hl7.org/browse/V2-25438)<br>
**Applied:** Modified Table 0826 to align with https://build.fhir.org/valueset-doc-typecodes.html and changed the name of GSR-7 to SourceDocumentTypeForRecordedSexOrGender [V2-25439](https://jira.hl7.org/browse/V2-25439) and [V2-25454](https://jira.hl7.org/browse/V2-25454)<br>

**Applied:** Updated Table 0820 per 
[V2-25441](https://jira.hl7.org/browse/V2-25441), 
[V2-25459](https://jira.hl7.org/browse/V2-25459), and
[V2-25462](https://jira.hl7.org/browse/V2-25462)<br>

**Applied:** Updated chapter 2A - Control and Data Types Reference Range Administrative Sex Component for Gender Harmony per [V2-25443](https://jira.hl7.org/browse/V2-25443) and [V2-25518](https://jira.hl7.org/browse/V2-25518)<br>

**Applied:** Clarified that V2 will maintain the value set for Sexual Orientation directly, as that is not part of the Gender Harmony project. V2 will also maintain a value set of relevant gender-related LOINC codes for use in OBX-3. [V2-25444](https://jira.hl7.org/browse/V2-25444)<br>
**Applied:** Removed element "InternationalEquivalent" [V2-25453](https://jira.hl7.org/browse/V2-25453)<br>

**Applied:** Updated Table 0823 per 
[V2-25463](https://jira.hl7.org/browse/V2-25463), 
[V2-25465](https://jira.hl7.org/browse/V2-25465), and
[V2-25468](https://jira.hl7.org/browse/V2-25468)<br>

**Applied:** Corrected NK1 (removed SFCU) and added GSP and GSR [V2-25471](https://jira.hl7.org/browse/V2-25471) and [V2-25478](https://jira.hl7.org/browse/V2-25478)<br>

**Applied:** Moved the Gender Harmony segments to before PRT and after PD1, to align with the ordering defined in Chapter 3 [V2-25473](https://jira.hl7.org/browse/V2-25473)<br>


### Changes to this Cross-paradigm Implementation Guide
#### Changes applied across the Implementation Guide
**Applied:** Add links of a model acronym to the model heading for the element, to organizations, named specifications [OTHER-2521](https://jira.hl7.org/browse/OTHER-2521)<br>
**Applied:** Added additional depth to the TOC [OTHER-2526](https://jira.hl7.org/browse/OTHER-2526)<br>
**Applied:** Standardized the use of "Gender Harmony initial informative specification" when referring to initial specification [OTHER-2570](https://jira.hl7.org/browse/OTHER-2570)<br>
**Applied:** Links to ValueSet and CodeSystems, binding strength definitions, and standardized ValueSet and datatype name capitalization [OTHER-2574](https://jira.hl7.org/browse/OTHER-2574)<br>
**Applied:** Remove notes to balloters [OTHER-2571](https://jira.hl7.org/browse/OTHER-2571), [OTHER-2602](https://jira.hl7.org/browse/OTHER-2602), and [OTHER-2604](https://jira.hl7.org/browse/OTHER-2604)<br>
**Applied:** Update SFCU to SPCU throughout the Gender Harmony IG and capitalized consistently
[OTHER-2414](https://jira.hl7.org/browse/OTHER-2414), 
[OTHER-2671](https://jira.hl7.org/browse/OTHER-2671), and 
[OTHER-2706](https://jira.hl7.org/browse/OTHER-2706), <br>
**Applied:** Consistent capitalization of Gender Harmony [OTHER-2580](https://jira.hl7.org/browse/OTHER-2580)<br>
**Applied:** Corrected footer published by [OTHER-2523](https://jira.hl7.org/browse/OTHER-2523)<br>
**Applied:** The tab "History" was modified to Change Log [OTHER-2592](https://jira.hl7.org/browse/OTHER-2592)<br>
**Applied:** Wording, typos, and grammar corrections per [OTHER-2491](https://jira.hl7.org/browse/OTHER-2491)<br>
**Applied:** Added (shownav parameter) that inserts forward/backward navigation at top and bottom [OTHER-2516](https://jira.hl7.org/browse/OTHER-2516)<br>


#### Changes applied to [Home Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/index.html#home)
**Applied:** Wording, typos, and grammar corrections per [OTHER-2531](https://jira.hl7.org/browse/OTHER-2531), [OTHER-2561](https://jira.hl7.org/browse/OTHER-2561), [OTHER-2563](https://jira.hl7.org/browse/OTHER-2563), and [OTHER-2565](https://jira.hl7.org/browse/OTHER-2565)<br>
**Applied:** Further explanation of 'harmony' in gender harmony [OTHER-2594](https://jira.hl7.org/browse/OTHER-2594)<br>
**Applied:** Improved the readability and formatting of the In-scope section [OTHER-2562](https://jira.hl7.org/browse/OTHER-2562) and [OTHER-2528](https://jira.hl7.org/browse/OTHER-2528), Added links to the model page for GI, SPCU, RSG, Pronouns, NtU [OTHER-2532](https://jira.hl7.org/browse/OTHER-2532)<br>
**Applied:** Updated the name of section 1.4.3 from Vendors to HIT System solution providers [OTHER-2515](https://jira.hl7.org/browse/OTHER-2515)<br>
**Applied:** Updated to use the word 'harmony' to 'harmonize' [OTHER-2594](https://jira.hl7.org/browse/OTHER-2594)<br>
**Applied:** Added links to DICOM and X12 [OTHER-2564](https://jira.hl7.org/browse/OTHER-2564)<br> 
**Applied:** Modified first sentence of the HIT System solution providers [OTHER-2421](https://jira.hl7.org/browse/OTHER-2421)<br>
**Applied:** Improved the footnote notation using MD based footnote syntax [OTHER-2560](https://jira.hl7.org/browse/OTHER-2560)<br> 


#### Changes applied to [Background Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/background.html#background)
**Applied:** Minor wording, typos, and grammar corrections per [OTHER-2533](https://jira.hl7.org/browse/OTHER-2533), [OTHER-2535](https://jira.hl7.org/browse/OTHER-2535), [OTHER-2536](https://jira.hl7.org/browse/OTHER-2536),[OTHER-2566](https://jira.hl7.org/browse/OTHER-2566), [OTHER-2568](https://jira.hl7.org/browse/OTHER-22568), [OTHER-2537](https://jira.hl7.org/browse/OTHER-2537), and [OTHER-2567](https://jira.hl7.org/browse/OTHER-2567)<br>  


#### Changes applied to [Model Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/model.html#model)
**Applied:** Wording, typos, improved model display, and grammar corrections per 
[OTHER-2411](https://jira.hl7.org/browse/OTHER-2411), 
[OTHER-2420](https://jira.hl7.org/browse/OTHER-2420), 
[OTHER-2480](https://jira.hl7.org/browse/OTHER-2480), 
[OTHER-2492](https://jira.hl7.org/browse/OTHER-2492), 
[OTHER-2494](https://jira.hl7.org/browse/OTHER-2494), 
[OTHER-2519](https://jira.hl7.org/browse/OTHER-2519), 
[OTHER-2572](https://jira.hl7.org/browse/OTHER-2572), 
[OTHER-2573](https://jira.hl7.org/browse/OTHER-2573), 
[OTHER-2575](https://jira.hl7.org/browse/OTHER-2575), 
[OTHER-2576](https://jira.hl7.org/browse/OTHER-2576), 
[OTHER-2577](https://jira.hl7.org/browse/OTHER-2577), 
[OTHER-2578](https://jira.hl7.org/browse/OTHER-2578), 
[OTHER-2581](https://jira.hl7.org/browse/OTHER-2581), 
[OTHER-2582](https://jira.hl7.org/browse/OTHER-2582), 
[OTHER-2585](https://jira.hl7.org/browse/OTHER-2585), 
[OTHER-2597](https://jira.hl7.org/browse/OTHER-2597), 
[OTHER-2625](https://jira.hl7.org/browse/OTHER-2625), and 
[OTHER-2709](https://jira.hl7.org/browse/OTHER-2709)<br>
**Applied:** Changed field name from Jurisdiction to Issuer, added Definition, and put Cardinality on its own line [OTHER-2586](https://jira.hl7.org/browse/OTHER-2586)<br>
**Applied:** Updated Source Field Name and Source Field Description [OTHER-2587](https://jira.hl7.org/browse/OTHER-2587)<br>
**Applied:** Updated RSG model definition and other narrative [OTHER-2463](https://jira.hl7.org/browse/OTHER-2463)<br>
**Applied:** Clarified terminology expectations for RSG [OTHER-2557](https://jira.hl7.org/browse/OTHER-2557)<br>
**Applied:** Removed international equivalent references [V2-25452](https://jira.hl7.org/browse/V2-25452)<br>
**Applied:** Confirmed removal of ICAO element and added explanation of change [OTHER-2512](https://jira.hl7.org/browse/OTHER-2512)<br>
**Applied:** Updated GI usage note per [OTHER-2539](https://jira.hl7.org/browse/OTHER-2539) and [OTHER-2708](https://jira.hl7.org/browse/OTHER-2708)<br>
**Applied:** Updated UML Model with ballot changes [OTHER-2707](https://jira.hl7.org/browse/OTHER-2707)<br>
**Applied:** Added links for minValueSets for SPCU, Pronouns, and Gender identity [OTHER-2540](https://jira.hl7.org/browse/OTHER-2540)<br>
**Applied:** Clarified use of "sex or gender" [OTHER-2532](https://jira.hl7.org/browse/OTHER-2532)<br>
**Applied:** Added section noting changes in the model when compared to original, conformed changes in bindings and provided links to binding strength definitions [OTHER-2589](https://jira.hl7.org/browse/OTHER-2589)<br>
**Applied:** Added links to separate specifications [OTHER-2569](https://jira.hl7.org/browse/OTHER-2569)<br>


#### Changes applied to [Guidance, Design Considerations Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/design.html#design-considerations)
**Applied:** Added new ribbon drop-down: Guidance, Place the Design Considerations page under ribbon entry, add new page "Implementer Considerations" [OTHER-2472](https://jira.hl7.org/browse/OTHER-2472) and [OTHER-2678](https://jira.hl7.org/browse/OTHER-2678)<br>
**Applied:** Added links, updated wording, typos, and made grammar corrections per 
[OTHER-2541](https://jira.hl7.org/browse/OTHER-2541), 
[OTHER-2542](https://jira.hl7.org/browse/OTHER-2542), 
[OTHER-2543](https://jira.hl7.org/browse/OTHER-2543), 
[OTHER-2546](https://jira.hl7.org/browse/OTHER-2546),  
[OTHER-2593](https://jira.hl7.org/browse/OTHER-2593), 
[OTHER-2595](https://jira.hl7.org/browse/OTHER-2595), 
[OTHER-2596](https://jira.hl7.org/browse/OTHER-2596), 
[OTHER-2598](https://jira.hl7.org/browse/OTHER-2598), and 
[OTHER-2599](https://jira.hl7.org/browse/OTHER-2599)<br>
**Applied:** Modified designated value sets in tables so they are represented consistently [OTHER-2598](https://jira.hl7.org/browse/OTHER-2509)<br>
**Applied:** Removed TBD in RSG section [OTHER-2600](https://jira.hl7.org/browse/OTHER-2600) and corrected the "Designated value set"<br>
**Applied:** Updated RSG section to align with change in source document to be a concept domain (table 0826). Updated GSR field ids in RSG table for V2 after removal of International equivalent field  [OTHER-2479](https://jira.hl7.org/browse/OTHER-2479) and [OTHER-2496](https://jira.hl7.org/browse/OTHER-2496)<br>
**Applied:** Modified text in the "Support zero to many instances" rows for GI and Pronouns [OTHER-2422](https://jira.hl7.org/browse/OTHER-2422)<br>
**Applied:** Modified Name to Use table [OTHER-2544](https://jira.hl7.org/browse/OTHER-2544) and [OTHER-2674](https://jira.hl7.org/browse/OTHER-2674)<br>
**Applied:** Updated Gender Identity table to support notion of unknown [OTHER-2556](https://jira.hl7.org/browse/OTHER-2556)<br>
**Applied:** Updated the CDA column of "Support notion of value = unknown" in SPCU table [OTHER-2545](https://jira.hl7.org/browse/OTHER-2545)<br>
**Applied:** Updated the CDA column of 'Support GH attribute = validity period, type = duration' in the GI table [OTHER-2577](https://jira.hl7.org/browse/OTHER-2677)<br>
**Applied:** Updated the V2 column of "Specific allowed set of values only" in teh SPCU table [OTHER-2627](https://jira.hl7.org/browse/OTHER-2627)<br>
**Applied:** Modify table entries from "responsibility of template container" to the following row Define where element is available/appropriate for use. All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained. [OTHER-2676](https://jira.hl7.org/browse/OTHER-2676)<br>
**Applied:** Modified Pronouns section "Supports additional values (example) row [OTHER-2589](https://jira.hl7.org/browse/OTHER-2589)<br>
**Applied:** Modified GI V2 binding section, added "Note: V2 requires a looser binding due to use of a structure that is used across other observations." [OTHER-2522](https://jira.hl7.org/browse/OTHER-2522)<br>


#### Changes applied to [Guidance, Implementer Considerations Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/implementer.html#implementer-considerations)
**Applied:** Added SPCU considerations [OTHER-2558](https://jira.hl7.org/browse/OTHER-2558)<br>
**Applied:** Added new section Sex assigned at birth-focused Sex Parameter for Clinical Use [OTHER-2452](https://jira.hl7.org/browse/OTHER-2452)<br>


#### Changes applied to [Use Cases, DICOM PET Scan Use Case](https://build.fhir.org/ig/HL7/fhir-gender-harmony/dicom_use_case.html#dicom-pet-scan-use-case)
**Applied:** Updated use case with changes from 
[OTHER-2411](https://jira.hl7.org/browse/OTHER-2411), 
[OTHER-2423](https://jira.hl7.org/browse/OTHER-2423), 
[OTHER-2424](https://jira.hl7.org/browse/OTHER-2424), 
[OTHER-2426](https://jira.hl7.org/browse/OTHER-2426), 
[OTHER-2451](https://jira.hl7.org/browse/OTHER-2451), 
[OTHER-2488](https://jira.hl7.org/browse/OTHER-2488), 
[OTHER-2548](https://jira.hl7.org/browse/OTHER-2548), 
[OTHER-2549](https://jira.hl7.org/browse/OTHER-2549),  
[OTHER-2601](https://jira.hl7.org/browse/OTHER-2601), 
[OTHER-2603](https://jira.hl7.org/browse/OTHER-2503), and 
[OTHER-2607](https://jira.hl7.org/browse/OTHER-2607), 
<br>


#### Changes applied to [Use Cases, Health Maintenance Lab Use Case Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/health_maintanence_use_case.html#health-maintanence-lab-use-case)
**Applied:** Updated SPCU code values and fixed heading hierarchy [OTHER-2425](https://jira.hl7.org/browse/OTHER-2425)<br>


#### Changes applied to [V2, V2 Gender Harmony Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/hl7v2genderharmony.html#v2-gender-harmony)
**Applied:** Updated wording, typos, and made grammar corrections per 
[OTHER-2429](https://jira.hl7.org/browse/OTHER-2429), 
[OTHER-2431](https://jira.hl7.org/browse/OTHER-2431), 
[OTHER-2432](https://jira.hl7.org/browse/OTHER-2432),
[OTHER-2433](https://jira.hl7.org/browse/OTHER-2433), 
[OTHER-2530](https://jira.hl7.org/browse/OTHER-2530), 
[OTHER-2550](https://jira.hl7.org/browse/OTHER-2550), and 
[OTHER-2551](https://jira.hl7.org/browse/OTHER-2551), <br>
**Applied:** DICOM use case group has met with GH community and all open DICOM items were transitioned to DICOM supplement 233 [OTHER-2454](https://jira.hl7.org/browse/OTHER-2454)<br>


#### Changes applied to [CDA, CDA Gender Harmony Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/cdagenderharmony.html#cda-gender-harmony)
**Applied:** Remove notes to balloters [OTHER-2571](https://jira.hl7.org/browse/OTHER-2571), [OTHER-2602](https://jira.hl7.org/browse/OTHER-2602), and [OTHER-2604](https://jira.hl7.org/browse/OTHER-2604)<br>
**Applied:** Update SFCU to SPCU throughout the Gender Harmony IG and capitalized consistently
[OTHER-2414](https://jira.hl7.org/browse/OTHER-2414), 
[OTHER-2671](https://jira.hl7.org/browse/OTHER-2671), and 
[OTHER-2706](https://jira.hl7.org/browse/OTHER-2706), <br>

#### Changes applied to [CDA, CDA Examples Page](https://build.fhir.org/ig/HL7/fhir-gender-harmony/cdaexamples.html#cda-examples)
**Applied:** Updated the NtU example per [OTHER-2497](https://jira.hl7.org/browse/OTHER-2497) and [OTHER-2436](https://jira.hl7.org/browse/OTHER-2436)<br>
**Applied:** Updated SPCU example to be more complete [OTHER-2471](https://jira.hl7.org/browse/OTHER-2471)<br>
**Applied:** Updated the Gender Identity example to illustrate the correct usage of the templates [OTHER-2464](https://jira.hl7.org/browse/OTHER-2464)<br>
**Applied:** Updated the Gender Identity example to include ASKU and OTH [OTHER-2466](https://jira.hl7.org/browse/OTHER-2466)<br>
**Applied:** Removed the codeSystem="NP" from the example [OTHER-2487](https://jira.hl7.org/browse/OTHER-2487)<br>


#### Changes applied to [FHIR, FHIR Guidance](https://build.fhir.org/ig/HL7/fhir-gender-harmony/fhirgenderharmony.html#fhir-guidance)
**Applied:** Split design background into a new page, updated FHIR guidance with much more detail [OTHER-2558](https://jira.hl7.org/browse/OTHER-2558)<br>
**Applied:** Added links, updated wording, typos, and made grammar corrections per 
[OTHER-2411](https://jira.hl7.org/browse/OTHER-2411), 
[OTHER-2428](https://jira.hl7.org/browse/OTHER-2428), 
[OTHER-2616](https://jira.hl7.org/browse/OTHER-2616), 
[OTHER-2617](https://jira.hl7.org/browse/OTHER-2617),  
[OTHER-2619](https://jira.hl7.org/browse/OTHER-2619), and 
[OTHER-2629](https://jira.hl7.org/browse/OTHER-2629)<br>
**Applied:** Added guidance on the R4 backport extension for SPCU [OTHER-2618](https://jira.hl7.org/browse/OTHER-2618) and [OTHER-2620](https://jira.hl7.org/browse/OTHER-2620)<br>


#### Changes applied to [FHIR, FHIR Design Background](https://build.fhir.org/ig/HL7/fhir-gender-harmony/fhirdesignbackground.html#fhir-design-background)
**Applied:** Split design background into a new page, updated FHIR guidance with much more detail [OTHER-2558](https://jira.hl7.org/browse/OTHER-2558)<br>
**Applied:** Updated wording, typos, and made grammar corrections per 
[OTHER-2610](https://jira.hl7.org/browse/OTHER-2610), 
[OTHER-2611](https://jira.hl7.org/browse/OTHER-2611), 
[OTHER-2613](https://jira.hl7.org/browse/OTHER-2613), 
[OTHER-2579](https://jira.hl7.org/browse/OTHER-2579),  
[OTHER-2525](https://jira.hl7.org/browse/OTHER-2525), and 
[OTHER-2633](https://jira.hl7.org/browse/OTHER-2633) <br>
**Applied:** Moved 'Avoids problems with changing normative content." to the Advantages column in last two rows of table [OTHER-2612](https://jira.hl7.org/browse/OTHER-2612)<br>
**Applied:** Added ServiceRequest and Procedure to SPCU context, clinical resource types [OTHER-2615](https://jira.hl7.org/browse/OTHER-2615)<br>
**Applied:** Updated Backwards Compatibility for FHIR versions section [OTHER-2618](https://jira.hl7.org/browse/OTHER-2618)<br>


#### Changes applied to [Terminology](https://build.fhir.org/ig/HL7/fhir-gender-harmony/terminology.html#terminology)
**Applied:** Added links, updated wording, typos, and made grammar corrections per 
[OTHER-2409](https://jira.hl7.org/browse/OTHER-2409), 
[OTHER-2457](https://jira.hl7.org/browse/OTHER-2457), 
[OTHER-2458](https://jira.hl7.org/browse/OTHER-2458), 
[OTHER-2459](https://jira.hl7.org/browse/OTHER-2459), 
[OTHER-2553](https://jira.hl7.org/browse/OTHER-2553), 
[OTHER-2557](https://jira.hl7.org/browse/OTHER-2557),  
[OTHER-2606](https://jira.hl7.org/browse/OTHER-2606), 
[OTHER-2630](https://jira.hl7.org/browse/OTHER-2630), and 
[OTHER-2641](https://jira.hl7.org/browse/OTHER-2641)<br>
**Applied:** Modified GI values to include FHIR DAR and V3 Null [OTHER-2427](https://jira.hl7.org/browse/OTHER-2427)<br>
**Applied:** Modified Gender Identity section discussion around minimum value set for clarity [OTHER-2636](https://jira.hl7.org/browse/OTHER-2636)<br>
**Applied:** Added additional guidance for RecordedSexOrGender [OTHER-2637](https://jira.hl7.org/browse/OTHER-2637)<br>
**Applied:** Updated SPCU value references [OTHER-2552](https://jira.hl7.org/browse/OTHER-2552)<br>


#### Changes applied to [External Standards](https://build.fhir.org/ig/HL7/fhir-gender-harmony/externalstandards.html#external-standards)
**Applied:** Updated wording, typos, add links, and made grammar corrections per [OTHER-2590](https://jira.hl7.org/browse/OTHER-2590) and [OTHER-2609](https://jira.hl7.org/browse/OTHER-2609)<br>
**Applied:** Updated DICOM section to align with use of SPCU and final SPCU values [OTHER-2608](https://jira.hl7.org/browse/OTHER-2608)<br>
**Applied:** Added LOINC section, arranged sections in alpha order [OTHER-2710](https://jira.hl7.org/browse/OTHER-2710)<br>


#### Changes applied to [Artifacts](https://build.fhir.org/ig/HL7/fhir-gender-harmony/artifacts2.html#artifacts)
**Applied:** Modified to list all IG artifacts as a 'linked' Title not separating the title from the url [OTHER-2591](https://jira.hl7.org/browse/OTHER-2591)<br>
**Applied:** Modified reference to VSAC for UV value sets [OTHER-2622](https://jira.hl7.org/browse/OTHER-2622)<br>


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/design.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2596         Joanie Harper                Fixed typo per the Jira ticket https://jira.hl7.org/browse/OTHER-2596
2023-06-16       OTHER-2593         Joanie Harper                Remove line per the Jira ticket https://jira.hl7.org/browse/OTHER-2593
2023-07-17       OTHER-2598         Joanie Harper                Updated links for Pronouns, GenderIdentity, and RSG per https://jira.hl7.org/browse/OTHER-2598
                                                                 Did not update links for SFCU.  Needs to be changed to SPCU.
                                                                 replaced text for International equivalent in RSG table.
2023-07-17       OTHER-2595         Joanie Harper                updated paragraph 1 based on https://jira.hl7.org/browse/OTHER-2595
2023-07-24       OTHER-2598         Joanie Harper                Updated links for extensions Pronouns, GI, SPCU and RSG per https://jira.hl7.org/browse/OTHER-2598
                                                                 Updated instances of SFCU or Sex For Clinical Use to SPCU or Sex Parameter for Clinical Use Use.
2023-07-24       OTHER-2599         Joanie Harper                Updated capitalization for datatype. Capitalized for Header or beginning of sentence only. https://jira.hl7.org/browse/OTHER-2599
2023-07-24       OTHER-2600         Joanie Harper                Removed TBD in RSG section per https://jira.hl7.org/browse/OTHER-2600    
2023-07-24       OTHER-2422         Joanie Harper                Updated the text in the "Support zero to many instances" rows for GI and Pronouns per https://jira.hl7.org/browse/OTHER-2422
2023-07-24       OTHER-2496         Joanie Harper                Source type value set and designated value set table values were updated per https://jira.hl7.org/browse/OTHER-2496 and links to the value sets were added.
2023-07-24       OTHER-2541         Joanie Harper                Updated paragraph 1 based on https://jira.hl7.org/browse/OTHER-2541
2023-07-24       OTHER-2544         Joanie Harper                Updated Name to Use table per the resolution at https://jira.hl7.org/browse/OTHER-2544
2023-07-24       OTHER-2556         Joanie Harper                Updated Gender Identity table, Support notion of unknown row per the resolution at https://jira.hl7.org/browse/OTHER-2556
2023-07-26		   OTHER-2570	       	Carol Macumber				       Standardized the use of "Gender Harmony initial informative specification"  when referring to initial specification
2023-07-31       OTHER-2598         Joanie Harper                Updated designated valuesets in tables so they are represented consistently https://jira.hl7.org/browse/OTHER-2598
2023-07-31       OTHER-2545         Joanie Harper                Updated the CDA column of 'Support notion of value = unknown' in the SPCU table per https://jira.hl7.org/browse/OTHER-2545
2023-07-31       OTHER-2627         Joanie Harper                Updated the v2 column of 'Specific allowed set of values only' in the SPCU table per https://jira.hl7.org/browse/OTHER-2627
2023-07-31       OTHER-2676         Joanie Harper                Updated the CDA column wherever the phrase 'responsibility of template container' exist per https://jira.hl7.org/browse/OTHER-2627
                                                                 --- note that each instance has a placeholder for the template name.
2023-07-31       OTHER-2677         Joanie Harper                Updated the CDA column of 'Support GH attribute = validity period, type = duration' in the GI table per https://jira.hl7.org/browse/OTHER-2677
2023-08-15    OTHER-2589          Rob McClure                   Changed Pronouns model "Supports additional values to example
2023-08-18    No JIRA              Rob McClure                  RSG "Designated value set" is listing incorrect value set - this is the Admin gender value set. This is switched with Source field value set
2023-08-18    OTHER-2479, OTHER-2496   Rob McClure               Updated RSG section to aling with change in source document to be a concept domain (table 0826). Also updated GSR field ids in RSG table for V2 after removal of International equivalent field
2023-07-24       OTHER-2544         Joanie Harper                Fixed some link formatting in the Name to Use table.
2023-08-22      none                Rob McClure                   Fixed spelling of Practitioner
2023-08-25      OTHER-2602                Carol Macumber                Removing "Note to balloters"
2023-08-27        OTHER-2574        Rob McClure                   ValueSet to value set, data type to datatype
2023-08-27      OTHER-2522        Rob McClure                   added "Note: V2 requires a looser binding due to use of a structure that is used across other observations." to GI V2 binding section
-->

The discussion around gender harmony has been on-going for several years. This implementation guide is based on the logical [Gender Harmony initial informative specification ](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564) published in 2021 and the evolution of the Gender Harmony Project (GHP) team’s understanding of how sex and gender information is implemented currently and how it could be more effectively implemented in electronic healthcare systems. Based upon input from the community, the Gender Harmony project has defined (and prefers) implementing a model using extensions so that the added information is “close to user,” but it is clear that as an alternative users may choose to implement the information as observations in a manner similar to that found in the Gravity Project, for example [Observation Recorded Sex Gender](http://hl7.org/fhir/us/sdoh-clinicalcare/STU2/StructureDefinition-SDOHCC-ObservationRecordedSexGender.html).

The table below lists design requirements considered by GHP for each Gender Harmony Model element and its implementation across the HL7 product families. Both the FHIR and V2 efforts chose to build sex and gender harmony model information into the core model – as FHIR extensions in FHIR and as a new segment in V2 – because the information processing requirements that those standards support benefit from this proximity. CDA does not have this constraint and prioritized ease of use and access to the artifacts, ultimately opting for the use of a clinical statement template as the most feasible approach.

Detailed design considerations for each HL7 product family are included in the appropriate sections in this IG. 

**Gender Identity** 
<style>
table, th, td {
  border: 1px solid black;
}
</style>
|[**Logical Model Requirement**](https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/model.html)|**V2**|**FHIR**|**CDA**|
| :- | :- | :- | :- |
|Distinct attribute available in specific places|GSP segment|[Extension:](https://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html) https://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html|Gender Identity Entry Template|
|Define where element is available/appropriate for use|As appropriate in the message structure|Patient, Person, RelatedPerson, Practitioner|All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained.|
|Support zero to many instances|It is expected, but not required, that there be only one gender identity value for any time period even though the genderIdentity extension/segment can be repeated.|It is expected, but not required, that there be only one gender identity value for any time period even though the genderIdentity extension/segment can be repeated.|It is expected, but not required, that there be only one gender identity value for any time period even though the genderIdentity extension/segment can be repeated.|
|Value is coded and allows text|SOGI Concept Value (GSP-5), when SOGI Concept (GSP-4) = 76691-5^Gender Identity^LN with datatype Coded with Exceptions (CWE)|[Datatype: CodableConcept](http://build.fhir.org/datatypes.html#CodeableConcept) (http://build.fhir.org/datatypes.html#CodeableConcept)|CD (CONF:4536-48)|
|Designated value set|[GenderIdentity](http://terminology.hl7.org/ValueSet/gender-identity) (http://terminology.hl7.org/ValueSet/gender-identity)|[GenderIdentity](http://terminology.hl7.org/ValueSet/gender-identity) (http://terminology.hl7.org/ValueSet/gender-identity)|[GenderIdentity](http://terminology.hl7.org/ValueSet/gender-identity) (http://terminology.hl7.org/ValueSet/gender-identity)<br>(CONF:4536-48)|
|Support notion of value =  "unknown" |UNK and asked-declined are in the Gender Identity value set|UNK and asked-declined are in the Gender Identity value set|UNK and asked-declined are in the Gender Identity value set|
|Supports additional values (extensible)|Example Binding<br>Note: V2 requires a looser binding due to use of a structure that is used across other observations.|Preferred Binding|SHOULD (CONF:4536-48)|
|Support GH attribute = validity period, type = duration|Validity Range (GSP-6) with datatype Date Range (DR)|Datatype: Period (http://build.fhir.org/datatypes.html#Period)|effectiveTime/low and effectiveTime/high (CONF:4536-50)|
|Support GH attribute = comment, type = string|Comment (GSP-7) with datatype Text (TX)|Comment, datatype: string|text (CONF:4536-140)|

**Pronouns**

|[**Logical Model Requirement**](https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/model.html)|**V2**|**FHIR**|**CDA**|
| :- | :- | :- | :- |
|Distinct attribute available in specific places|GSP segment|[Extension:](https://hl7.org/fhir/extensions/StructureDefinition-individual-pronouns.html) https://hl7.org/fhir/extensions/StructureDefinition-individual-pronouns.html|Pronoun Entry Template|
|Define where element is available/appropriate for use|As appropriate in the message structure|Patient, Person, RelatedPerson, Practitioner|All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained.|
|Support zero to many instances|It is expected, but not required, that there be only one pronoun value for any time period even though the pronoun extension/segment can be repeated.|It is expected, but not required, that there be only one pronoun value for any time period even though the pronoun extension/segment can be repeated.|It is expected, but not required, that there be only one pronoun value for any time period even though the pronoun extension/segment can be repeated.|
|Value is coded and allows text|SOGI Concept Value (GSP-5), when SOGI Concept (GSP-4) = 90778-2^Personal pronouns - Reported^LN with datatype Coded with Exceptions (CWE)|Datatype: CodableConcept (http://build.fhir.org/datatypes.html#CodeableConcept)|CD (CONF:4536-61)|
|Designated value set|[Pronouns](http://terminology.hl7.org/ValueSet/pronouns) (http://terminology.hl7.org/ValueSet/pronouns)|[Pronouns](http://terminology.hl7.org/ValueSet/pronouns) (http://terminology.hl7.org/ValueSet/pronouns)|[Pronouns](http://terminology.hl7.org/ValueSet/pronouns) (http://terminology.hl7.org/ValueSet/pronouns)<br>(CONF:4536-61)|
|Support notion of value =  "unknown" |Can be extended, since example binding|If unknown, no value would be sent|Asked but Unknown and Other  (CONF:4536-67)|
|Supports additional values (example)|Example Binding|Example Binding|MAY (CONF:4536-61)|
|Support GH attribute = validity period, type = duration|Validity Range (GSP-6) with datatype Date Range(DR)|[Datatype: Period](http://build.fhir.org/datatypes.html#Period) (http://build.fhir.org/datatypes.html#Period)|effectiveTime (CONF:4536-69)|
|Support GH attribute = comment, type = string|Comment (GSP-7) with datatype Text (TX)|Comment, datatype: string|Text (CONF:4536-72)|

**Name to Use**

|[**Logical Model Requirement**](https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/model.html)|**V2**|**FHIR**|**CDA**|
| :- | :- | :- | :- |
|Support recording a Name to Use|Patient Name PID-5<br>applicable to ANY name, where datatype: Extended Person Name (XPN) is used and name type code (XPN.7) is valued 'N'<br>Applicable to ANY name, where datatype: Extended (XCN) is used and name type code (XCN.10) is valued 'N'|Resource.name using HumanName datatype, HumanName.use element |Record Target name|
|Support structured type = Name |Datatype: Extended Person Name (XPN)|Datatype: [HumanName](http://hl7.org/fhir/2022Sep/datatypes.html#HumanName) <br>Element: HumanName.use set to value "usual"|[Patient.name](http://patient.name/)|
|Associate with person|XPN: Patient Name (PID-5), Next of Kin Name (NK1-2), Staff Name (STF-3), Guarantor Name (GT1-3), Payee Person Name (PYE-5), etc.<br>XCN: Ordering Provider (ORC-12/OBR-16), Participating Person (PRT-5), Attending Doctor (PV1-7), Referring Doctor (PV1-8), etc.|Include in following Resources: Patient, Person, RelatedPerson, Practitioner|[Patient.name](http://patient.name/)|
|Support zero to many instances|[0..\*]|[0..\*]|[0..\*]|
|Support GH attribute = validity period, type = duration|XPN.12 for start date with datatype Time Stamp (TS)<br>XPN.13 for Expiration date with datatype Time Stamp (TS)|Datatype: [Period](http://build.fhir.org/datatypes.html#Period)|PersonName.validTime|

**Sex Parameter for Clinical Use**

|[**Logical Model Requirement**](https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/model.html)|**V2**|**FHIR**|**CDA**|
| :- | :- | :- | :- |
|Distinct attribute available anywhere needed|GSC segment|[Extension:](https://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html) https://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html|Sex Parameter for clinical use Template|
|Define where element is available/appropriate for use|As appropriate in the message structure|All resources, though it is expected to be used primarily on clinical resources and enclosing contextual resources like Patient and Encounter.|All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained.|
|Support zero to many instances|added as optionally repeating|With this cardinality the expectation is there will be a single instance of the extension, but there can be multiple instances of the extension for a single resource type (IE, multiple orders of the same resource type representing different tests that have different SPCU needs).|All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained.|
|Value is coded|Sex Parameter for Clinical Use (GSC-4) with datatype Coded with Exceptions (CWE)|[Datatype: CodeableConcept](http://build.fhir.org/datatypes.html#CodeableConcept) (http://build.fhir.org/datatypes.html#CodeableConcept)|value with @xsi:type="CD" (CONF:4536-83)|
|Designated value set|[Sex Parameter for Clinical Use](https://terminology.hl7.org/5.2.0/ValueSet-sex-parameter-for-clinical-use.html) (https://terminology.hl7.org/5.2.0/ValueSet-sex-parameter-for-clinical-use.html)|[Sex Parameter for Clinical Use](https://terminology.hl7.org/5.2.0/ValueSet-sex-parameter-for-clinical-use.html) (https://terminology.hl7.org/5.2.0/ValueSet-sex-parameter-for-clinical-use.html)|[Sex Parameter for Clinical Use](https://terminology.hl7.org/5.2.0/ValueSet-sex-parameter-for-clinical-use.html) (https://terminology.hl7.org/5.2.0/ValueSet-sex-parameter-for-clinical-use.html)<br>(CONF:4536-83)|
|Support notion of value =  "unknown" |Included in value set|Included in value set|Represented as a NULL value, not in the value set.|
|Specific allowed set of values only|Required binding|Required binding|SHALL binding|
|Support GH attribute = validity period, type = duration|Validity Period (GSC-5) with datatype Date Range (DR)|[Datatype: Period](http://build.fhir.org/datatypes.html#Period)|effectiveTime (CONF:4536-82)|
|Support GH attribute = comment, type = string|Comment (GSC-8) with datatype Text (TX)|Comment, datatype: string|text (CONF:4536-80)|
|Support assertion of linked clinical obs evidence for assignment|Evidence (GSC-7) with datatype Message Location (ERL)|SupportingInfo, [datatype: CodeableReference](http://build.fhir.org/references.html) (http://build.fhir.org/references.html)|entryRelationship (CONF:4536-101)|
|Support assertion of context for use: specific context (not modeled)|Context (GSC-6) with datatype Message Location (ERL)|The resource in which the extension is used|Guidance on nesting template under target or (for multiple targets) using Entry Reference|
|Support assertion of context for use: patient|Patient segment in the same message where the segment is used|The patient that is linked to the resource in which the extension is used|Guidance on including independent of entryRelationship|

**Recorded Sex or Gender**

|[**Logical Model Requirement**](https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/model.html)|**V2**|**FHIR**|**CDA**|
| :- | :- | :- | :- |
|Distinct attribute available in specific places|GSR segment|[Extension:](https://hl7.org/fhir/extensions/ValueSet-recorded-sex-or-gender-type.html) https://hl7.org/fhir/extensions/ValueSet-recorded-sex-or-gender-type.html|Recorded sex or gender entry Template|
|Define where element is available/appropriate for use|As appropriate in the message structure|Patient, Person, RelatedPerson, Practitioner|All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained.|
|Support zero to many instances|added as optionally repeating|0..\* in each instance|All Open CDA Templates allow for using any other defined CDA Templates; The context and use of the <<inserttemplatename>> is driven by the template in which the template is contained.|
|Value is coded and allows text|Recorded Gender or Sex (GSR-4) with datatype Coded with Exceptions (CWE) |Datatype: CodableConcept|CE datatype|
|Designated value set to be used|[AdministrativeGender](https://terminology.hl7.org/5.2.0/ValueSet-v3-AdministrativeGender.html) (https://terminology.hl7.org/5.2.0/ValueSet-v3-AdministrativeGender.html)<br>example binding|[AdministrativeGender](https://terminology.hl7.org/5.2.0/ValueSet-v3-AdministrativeGender.html) (https://terminology.hl7.org/5.2.0/ValueSet-v3-AdministrativeGender.html) <br> example binding|` `MAY be selected from ValueSet [AdministrativeGender](https://terminology.hl7.org/5.2.0/ValueSet-v3-AdministrativeGender.html) (https://terminology.hl7.org/5.2.0/ValueSet-v3-AdministrativeGender.html) (HL7 V3) urn:oid:2.16.840.1.113883.1.11.1 (CONF:4536-89)|
|Additional representation of value using international equivalent|International Equivalent Sex Value (GSR-5) with datatype Coded with Exceptions (CWE)|Optional InternationalEquivalent element|translation (CONF:4536-95)|
|International equivalent value set|International equivalent element has been removed from the final publication |International equivalent element has been removed from the final publication|International equivalent element has been removed from the final publication|
|Support GH attribute = Source Field Name, Type = String|Source Document Field Type and or Label (GSR-5) with datatype Coded With Exception (CWE) using Original text (CWE.9)|sourceField, DataType: String|If a coded value is available (e.g., "76689-9 sex assigned at birth") then record that in Observation.code, otherwise put provided description of the field in Observation.code.orginalText.|
|Support source field "type", indicating the type or category of sex or gender that is recorded|Source Document Field Type and or Label (GSR-5) with datatype Coded With Exception (CWE)|Type, dataType: CodeableConcept|entryRelationship: Patient record type value with @xsi:type="CD" (CONF:4536-136)|
|Source Type value set|SourceDocumentTypeForRecordedSexOrGender <br> (Table 0826 User specified) Concept Domain|[Recorded Sex or Gender Type](http://terminology.hl7.org/ValueSet/recorded-sex-or-gender-type) (http://terminology.hl7.org/ValueSet/recorded-sex-or-gender-type)<br>Preferred binding|[Recorded Sex or Gender Type](http://terminology.hl7.org/ValueSet/recorded-sex-or-gender-type) (http://terminology.hl7.org/ValueSet/recorded-sex-or-gender-type)<br> urn:oid:2.16.840.1.113883.11.19757<br> (CONF:4536-136).|
|Support GH attribute = Document Record Description, Type = string|Document Type (GRS-6) with datatype Coded With Exception (CWE) with value set documentType; for string use using Original text (CWE.9)|Reference to document as sourceDocument(DocumentReference). Coding of class of document in codeableReference.|code="92183-3" Document type  (CONF:4536-119)<br>value with @xsi:type="CD" (CONF:4536-121)<br>originalText (CONF:4536-122)|
|Support GH attribute = acquisition date, type = date|Acquisition Date (GSR-8) with datatype Date Time (DTM)|extension: acquisitionDate (dateTime)|code="50786-3" Date of entry (CONF:4536-125)<br>value with @xsi:type="TS" (CONF:4536-128)|
|Support GH attribute = jurisdiction, type = string|Jurisdiction (GSR-7) with datatype Coded With Exception (CWE)|extension: jurisdiction (CodeableConcept), [Jurisdiction ValueSet](http://hl7.org/fhir/ValueSet/jurisdiction) Extensible binding|code "77969-4" Jurisdiction code  (CONF:4536-109)<br>value with @xsi:type="CD" (CONF:4536-113)<br>originalText (CONF:4536-114)|
|Support GH attribute = validity period, type = duration|Acquisition Date (GSR-9) with datatype Date Range (DR)|[Datatype: Period](http://build.fhir.org/datatypes.html#Period) (http://build.fhir.org/datatypes.html#Period)|value with @xsi:type="TS" (CONF:4536-128)|
|Support GH attribute = comment, type = string|Comment (GSR-10) with datatype Text (TX)|Comment, datatype: string|MAY contain zero or one [0..1] text (CONF:4536-91)|



---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/dicom_use_case.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2411         Joanie Harper                Corrected Example 01: Imaging Order per the Jira ticket https://jira.hl7.org/browse/OTHER-2411
2023-06-16       OTHER-2488         Joanie Harper                Fixed spelling of narrative per the Jira ticket https://jira.hl7.org/browse/OTHER-2488
2023-08-02		All Usecase updates	Rob M				         Updated the entire document using DICOm file from Steven N. Issues above are included.
2023-08-14                          Joanie Harper                Updated some numbering and spacing.
2023-08-28       OTHER-2548         Joanie Harper                Updated Intro and Use Case description
2023-09-08       OTHER-2605         Carol Macumber                Fixed Applied consistency in use of "IHE Actor Name" and other editorial updates
2023-09-11      OTHER-2542
2023-09-11      OTHER-2524          Rob McClure                 applied first part of issue
-->
### Introduction & Use Case Description

This use case illustrates DICOM Sex and Gender encoding, including: admission, patient prep, examination, post processing and reporting for a PET/CT examination order. A patient with EHR Sex Parameter for Clinical Use (SPCU) of “Female-typical” and an EHR Gender Identity of “Identifies a male gender” checks-in for a PET/CT examination. The examination is performed, the patient’s demographics are updated, and the report is delivered.

In this case, there are three examples of Sex Parameter for Clinical Use (SPCU):

   1. The ordering physician provides instructions for interpreting lab values within a Sex Parameter for Clinical Use comment. 
   2. A second SPCU is determined by a post-processing AI (Artificial  Intelligence) application that utilizes the different item in the **Sex Parameter for Clinical Use Sequence** for reference values. 
   3. The radiologist determines the appropriate SPCU for a Standard Uptake Value (SUV) calculation based on the patient's body composition.

The DICOM (Digital Imaging and Communications in Medicine) Standard attributes in this use case are not, at time of publication of this Implementation Guide, normative, and details in DICOM are still being defined in Supplement 233. Readers interested in participating in development of DICOM Sex and Gender encoding, please contact the [DICOM Secretariat](mailto:dicom@dicomstandard.org).

### Actors

#### People

1.  Patient (John Smith) - whose previous records are for studies performed when his EHR Gender Identity was “Identifies as female gender”.

2.  Referring Physician

3.  Facility Clerk - admits patient, utilizes the Radiology Information System (RIS)

4.  PET/CT Technologist

5.  Radiologist

#### Systems using IHE Actor Names

1.  ADT, Order Placer (Hospital EHR)

2.  Order Filler (RIS)

3.  Modality (PET/CT System)

4.  Image Manager/Archive (PACS: Picture Archive and Communications System)

5.  Dose Information Reporter

6.  Task Performer (Artificial Intelligence) 

### Scope Statement

Use case covers admission, patient prep, examination, post processing and reporting for a PET/CT study.

### Precondition(s)

1.  John Smith is registered in the hospital record system under the name “Janet Smith”.

2.  Physician places the order in the EHR for "Janet Smith"

3.  John Smith arrives at an outpatient facility with an appointment.

4.  Patient history, social history, medical history has already been captured and are available in the EHR under "Janet Smith".

5.  Prior exams for comparison are retrieved based on rules established by the radiology department, using the name "Janet Smith" (e.g., body region, patient ID, type of exam).

6.  Technical scan and contrast administration parameters (protocol) are pre-determined based on departmental protocols for a female patient.

[**Example 01**](#example-01-imaging-order) depicts an HL7 Imaging Order for this patient with mapping to DICOM Modality Worklist attributes.

### Postcondition(s)

1.  PET/CT study is complete.

2.  Patient name change in the EHR has occurred.

3.  Report is generated in the RIS and available in the EHR.


### Workflow/Storyboard

Note: IHE transactions are noted in brackets


<img style="vertical-align: top;" src="gh-dicom-2.svg" width="100%" /> 

Figure 1 Workflow Storyboard

#### Arrival and Check-in

In this scenario, the patient initiates the discussion with the clerk.

1.  When the patient arrives at the waiting room for a PET/CT examination he announces himself as “John”.

2.  The clerk asks “John Williams?”, seeing a John Williams in the schedule.

3.  Patient: “No, Smith”.

4.  Clerk: “Date of birth”?

5.  Smith: “month, day, year”

6.  The clerk performs a date-of-birth based lookup and finds a schedule entry for Janet Smith, with Patient’s Sex “F” and Patient’s Gender “M”, and with a Patient Names to Use “John Smith”. Sex Comment contains “Hormonal treatment, use affirmed gender Creatinine reference ranges\[1\]”.

7.  The clerk confirms that the birth dates match, in accordance with local policies, and checks in the patient.

8.  After check-in, the Scheduled Procedure Step is visible in the MWL.

9.  The clerk asks whether John wants to go through the name change update at the clinic to reflect his preferred name. Name change is initiated.

10. The clerk notifies the technologist that the patient has arrived.

[**Example 02**](#example-02-patient-name-update) depicts an HL7 Demographics Update message for this patient with mapping to DICOM Modality Worklist attributes.

#### Patient Preparation

1.  The technologist checks their schedule for John, and finds the order for “Janet Smith”, Patient’s Sex “F” and Patient’s Gender “M”, and with a Patient Names to Use “John Smith”. Sex Comment contains “Hormonal treatment, use affirmed gender Creatinine reference ranges”.

2.  The technologist greets the patient as “John” and reconfirms birthdate.

3.  The technologist directs the patient to a changing area and instructs the patient to remove jewelry and change into a gown.

4.  When the patient is ready, the technologist asks the necessary related preparation questions, e.g., pregnancy status, most recent menstruation, allergies, history, preferred arm for IV contrast administration, etc.

5.  The technologist explains the procedure to the patient and answers any questions the patient may have. 

6.  Since the protocol calls for a contrast-enhanced CT, the technologist reviews the most recent eGFR, BUN and Creatinine.

7.  The technologist confers with the radiologist to discuss acceptable lab values for safe contrast administration, given the Sex Comment, as well as the patient’s GFR, BUN and Creatinine.

8.  The radiologist notes that the provided SPCU of Female, is not consistent with the SPCU Comment and calls the ordering physician to confirm.

9.  After discussing patient history with the ordering physician, the radiologist provides protocol alterations based on the  patient’s transgender status.

Note: The pre-identified protocol was based on a female patient (see item [8 in Precondition(s)](#preconditions)).

#### Examination

1.  The technologist knows to select the MWL entry for “Janet Smith” and expects a Patient’s Sex of “F”; this does not trigger a wrong patient concern.

2.  Patient demographics are loaded into the scanner demographics interface.

3.  The technologist applies alterations prescribed by the radiologist to scanner and contrast protocol. The radiotracer dose is not changed, as the department standardizes doses regardless of Patient Sex.

4.  The technologist starts an IV, administers radiotracer, and connects the contrast injector for the contrast-enhanced CT portion of the procedure.

5.  The study is performed.

6.  The images and Radiation Dose Structured Report (RDSR) are transferred to the PACS, Dose Information Reporter and AI Task
    Performer systems.

#### Analysis 

1.  The radiologist creates an SUV ROI on the PACS. The PACS identifies multiple items with different values in the **Sex Parameter for Clinical Use Sequence** (0010,xxx2), and prompts the radiologist to enter a value “M” or “F”.

2.  The Dose Information Reporter collects the RDSR, without exception.

3.  The AI task performer parses the **Sex Parameter for Clinical Use Sequence** (0010,xxx2) and identifies an Item with a Start DateTime (0010,xxx6) that matches the Patient's Birth Date (0010,0030), having a SPCU Code Sequence (0010,xxx9) of (Sup233-01, DCM, Female typical parameter). The algorithm processes the images, applying female reference values, and transfers evidence documents to the PACS.

Note: Sex at birth is required to determine reference values for AI and non-AI machine algorithms in various domains, such as cardiology and neurology.

#### Reporting

1.  The radiologist dictates findings pertaining to the procedure, noting scanner and contrast protocol modifications in the “Request” section of the report.

2.  The report format has been configured to include Patient’s Sex (0010,0040), Patient’s Gender Code (0010,xxx4).(0008,0104), Patient Name (0010,xxx3).(0010,xx12) and SPCU Comment (0010,xxx1) in the report.

3.  The initial report reads:
> Patient’s Name = “Janet Smith”  
> Patient’s Sex = “F”  
> Patient’s Gender Identity = “M”  
> Name to Use = “John Smith"  

4.  After the patient’s name change has been processed, the report is addended. The addended report reads:
> Patient’s Name = “John Smith”  
> Patient’s Sex = “F”  
> Patient’s Gender Identity = “M”  
> Name to Use = “John Smith" 

The final report may be represented in [FHIR](#example-03-fhir-mapping), [HL7 v2](#example-04-imaging-report), or a [CDA](#example-05-cda-release-2-imaging-report).

### Examples

#### Example 01: Imaging Order

See these [examples](v2dicom_use_case.html#order-for-imaging) of HL7 v2.9.1 and v2.5 OMI Imaging Orders from [precondition(s)](#preconditions).

These map to DICOM Modality Worklist as follows:

| v2                                   | Attribute Name                | Tag         | VR | Value                                                             |
| ------------------------------------ | ----------------------------- | ----------- | -- | ----------------------------------------------------------------- |
| PID-5 Name Type Code = Birth Name    | Patient's Name                | (0010,0010) | PN | Smith\^Janet^^^                                                   |
| PID-7                                | Patient's Birth Date          | (0010,0030) | DA | 19780328                                                          |
| PID-8                                | Patient's Sex                 | (0010,0040) | CS | F                                                                 |
|                                      | Patient’s Gender              | (0010,xxxx) | CS | M                                                                 |
|                                      | **Gender Identity Sequence**      | (0010,xxxx) | SQ |                                                                   |
|                                      | \>Gender Identity Code Sequence | (0010,xxx4) | SQ |                                                                 |
| GSP-5-1                              | \>\>Code Value                | (0008,0100) | SH | 446151000124109                                                   |
| GSP-5-3                              | \>\>Coding Scheme Designator  | (0008,0102) | SH | UMLS                                                              |
| GSP-5-2                              | \>\>Code Meaning              | (0008,0104) | LO | Identifies as male gender                                         |
|                                      | **Sex Parameter for Clinical Use Sequence**| (0010,xxx2) | SQ | --ITEM 1--                                               |
|                                      |                               |             |    | --ITEM 1--                                                        |
|                                      | \>SPCU Code Sequence          | (0010,xxx9) | SQ |                                                                   |
| GSC-4-1                              | \>\>Code Value                | (0008,0100) | SH | Sup233-02                                                         |
| GSC-4-3                              | \>\>Coding Scheme Designator  | (0008,0102) | SH | DCM                                                               |
| GSC-4-2                              | \>\>Code Meaning              | (0008,0104) | LO | Male typical parameter                                            |
| GSC-8                                | \>SPCU Comment                | (0010,xxx1) | LT | Hormonal treatment, use affirmed gender Creatinine reference ranges |
|                                      | \>Validity Period sequence    | (0010,xxx5) | SQ |                                                                   |
| GSC-5-1                              | \>\>Start DateTime            | (0010,xxx6) | DT | 20220715090000                                                    |
|                                      |                               |             |    | --ITEM 2--                                                        |
|                                      | \>SPCU Code Sequence          | (0010,xxx9) | SQ |                                                                   |
| GSC-4-1                              | \>\>Code Value                | (0008,0100) | SH | Sup233-01                                                         |
| GSC-4-3                              | \>\>Coding Scheme Designator  | (0008,0102) | SH | DCM                                                               |
| GSC-4-2                              | \>\>Code Meaning              | (0008,0104) | LO | Female typical parameter                                          |
| GSC-8                                | \>SPCU Comment                | (0010,xxx1) | LT | Sex at birth                                                      |
|                                      | \>Validity Period sequence    | (0010,xxx5) | SQ |                                                                   |
| GSC-5-1                              | \>\>Start DateTime            | (0010,xxx6) | DT | 19780328000000                                                    |
| GSC-5-2                              | \>\>Stop DateTime             | (0010,xxx7) | DT | 20220715090000                                                    |
|                                      | **Person Names to Use Sequence**  | (0010,xxx3) | SQ |                                                                   |
| PID-5 Name Type Code = Nickname      | \>Name to Use                 | (0010,xx12) | LT | Smith, John                                                       |
|                                      | \>Validity Period Sequence    | (0010,xxx5) | SQ |                                                                   |
|                                      | \>Start DateTime              | (0010,xxx6) | DT | 20220715090000                                                    |


#### Example 02: Patient Name Update

See these [examples](v2dicom_use_case.html#registration-of-name-change)of HL7 v2.9.1 and v2.5 ADT Demographics Updates from [arrival and check-in](#arrival-and-check-in).
Note: in previous v2 versions, the first occurrence indicated the legal name. In this case, Name to Use name is listed first for legacy compatibility.

These map to DICOM Modality Worklist as follows:

| v2                                   | Attribute Name                | Tag         | VR | Value                                                             |
| ------------------------------------ | ----------------------------- | ----------- | -- | ----------------------------------------------------------------- |
| PID-5 Name Type Code = Nickname      | Patient's Name                | (0010,0010) | PN | Smith\^John^^^                                                    |
| PID-7                                | Patient's Birth Date          | (0010,0030) | DA | 19780328000000                                                    |
| PID-8                                | Patient's Sex                 | (0010,0040) | CS | F                                                                 |
|                                      | **Gender Identity Sequence**      | (0010,xxxx) | SQ |                                                                   |
|                                      | \>Gender Identity Code Sequence        | (0010,xxx4) | SQ |                                                          |
| GSP-5-1                              | \>\>Code Value                | (0008,0100) | SH | 446151000124109                                                   |
| GSP-5-3                              | \>\>Coding Scheme Designator  | (0008,0102) | SH | UMLS                                                              |
| GSP-5-2                              | \>\>Code Meaning              | (0008,0104) | LO | Identifies as male gender                                         |
| GSP-6-1                              | \>Start DateTime              | (0010,xxx6) | DT | 20220715010000                                                    |
|                                      | **Sex Parameter for Clinical Use Sequence**| (0010,xxx2) | SQ |                                                          |
|                                      |                               |             |    | --ITEM 1--                                                        |
|                                      | \>SPCU Code Sequence          | (0010,xxx9) | SQ |                                                                   |
| GSC-4-1                              | \>\>Code Value                | (0008,0100) | SH | Sup233-02                                                         |
| GSC-4-3                              | \>\>Coding Scheme Designator  | (0008,0102) | SH | DCM                                                               |
| GSC-4-2                              | \>\>Code Meaning              | (0008,0104) | LO | Male typical parameter                                            |
| GSC-8                                | \>SPCU Comment                | (0010,xxx1) | LT | Hormonal treatment, use affirmed gender Creatinine reference ranges |
| GSC-5-1                              | \>\>Start DateTime            | (0010,xxx6) | DT | 20220715090000                                                    |
|                                      | **Sex Parameter for Clinical Use Sequence**| (0010,xxx2) | SQ |                                                          |
|                                      |                               |             |    | --ITEM 2--                                                        |
|                                      | \>SPCU Code Sequence          | (0010,xxx9) | SQ |                                                                   |
| GSC-4-1                              | \>\>Code Value                | (0008,0100) | SH | Sup233-01                                                         |
| GSC-4-3                              | \>\>Coding Scheme Designator  | (0008,0102) | SH | DCM                                                               |
| GSC-4-2                              | \>\>Code Meaning              | (0008,0104) | LO | Female typical parameter                                          |
| GSC-8                                | \>SPCU Comment                | (0010,xxx1) | LT | Sex at birth                                                      |
|                                      | \>Validity Period sequence    | (0010,xxx5) | SQ |                                                                   |
| GSC-5-1                              | \>\>Start DateTime            | (0010,xxx6) | DT | 19780328000000                                                    |
| GSC-5-2                              | \>\>Stop DateTime             | (0010,xxx7) | DT | 20220715090000                                                    |


#### Example 03: FHIR Mapping

The patient is referenced as the subject of [DiagnosticReport](#reporting), DocumentReference, ImagingStudy or ImagingSelection. Mapping to DICOM is as follows:

| FHIR attribute                                | Attribute Name                | TAG         | VR | Value                                                             |
| ----------------------------------------------| ----------------------------- | ----------- | -- | ----------------------------------------------------------------- |
| Patient.name [use=official]                      | Patient's Name                | (0010,0010) | PN | Smith\^John^^^                                                    |
| Patient.gender                                | Patient's Sex                 | (0010,0040) | CS | F                                                                 |
| Patient.extension [PGenderIdentity]           | **Gender Identity Sequence**      | (0010,xxxx) | SQ |                                                                   |
|                                               | \>Gender Identity Code Sequence        | (0010,xxx4) | SQ |                                                          |
| Patient.extension [value code]                | \>\>Code Value                | (0008,0100) | SH | 446151000124109                                                   |
| Patient.extension [value system]              | \>\>Coding Scheme Designator  | (0008,0102) | SH | UMLS                                                              |
| Patient.extension [value display]             | \>\>Code Meaning              | (0008,0104) | LO | Identifies as male gender                                         |
| Patient.extension [period start]              | \>Start DateTime              | (0010,xxx6) | DT | 20220715010000                                                    |
| serviceRequest.extension [PatSexParameterForClinicalUse] | **Sex Parameter for Clinical Use Sequence** | (0010,xxx2) | SQ |                                              |
|                                               |                               |             |    | --ITEM 1--                                                        |
|                                               | \>SPCU Code Sequence          | (0010,xxx9) | SQ |                                                                   |
| serviceRequest.extension [value code]         | \>\>Code Value                | (0008,0100) | SH | Sup233-02                                                         |
| serviceRequest.extension [value system]       | \>\>Coding Scheme Designator  | (0008,0102) | SH | DCM                                                               |
| serviceRequest.extension [value display]      | \>\>Code Meaning              | (0008,0104) | LO | Male typical parameter                                            |
| serviceRequest.extension [comment]            | \>SPCU Comment                | (0010,xxx1) | LT | Hormonal treatment, use affirmed gender Creatinine reference ranges |
|                                               | \>Validity Period sequence    | (0010,xxx5) | SQ |                                                                   |
| serviceRequest.extension [period start]       | \>\>Start DateTime            | (0010,xxx6) | DT | 20220715090000                                                    |
| serviceRequest.extension [supportingInfo reference] | \>SPCU Reference        | (0010,xx10) | UR | https://doi.org/10.1210/jendso/bvab048.1607                       | 
|                                               |                               |             |    | --ITEM 2--                                                        |
|                                               | \>SPCU Code Sequence          | (0010,xxx9) | SQ |                                                                   |
| serviceRequest.extension [value code]         | \>\>Code Value                | (0008,0100) | SH | Sup233-01                                                         |
| serviceRequest.extension [value system]       | \>\>Coding Scheme Designator  | (0008,0102) | SH | DCM                                                               |
| serviceRequest.extension [value display]      | \>\>Code Meaning              | (0008,0104) | LO | Female typical parameter                                          |
| serviceRequest.extension [comment]            | \>SPCU Comment                | (0010,xxx1) | LT | Sex at birth                                                      |
|                                               | \>Validity Period sequence    | (0010,xxx5) | SQ |                                                                   |
| serviceRequest.extension [period start]       | \>\>Start DateTime            | (0010,xxx6) | DT | 19780328000000                                                    |
| serviceRequest.extension [period end]         | \>\>Stop DateTime             | (0010,xxx7) | DT | 20220715090000                                                    |
|                                               | **Person Names to Use Sequence**  | (0010,xxx3) | SQ |                                                                   |
| Patient.name[use=usual]                       | \>Name to Use                 | (0010,xx12) | LT | John Smith                                                        |


#### Example 04: Imaging Report

See these [examples](v2dicom_use_case.html#result-for-imaging) of HL7 v2.9.1 and v2.5 Unsolicited Observation Results containing the narrative from the final [Imaging Report](#reporting).

*OBX Segments containing Imaging Report Narrative omitted for brevity*

#### Example 05: CDA Release 2 Imaging Report

See this [example](cdadicom_use_case.html#cda-dicom) of a CDA [Imaging Report](#reporting).


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/downloads.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment



-->

### Download Links

-   [Full Specification (zip)](full-ig.zip)

-   [Package (tgz)](package.tgz)

-   [JSON Definitions (zip)](definitions.json.zip)

-   [JSON Examples (zip)](examples.json.zip)

-   [XML Definitions (zip)](definitions.xml.zip)

-   [XML Examples (zip)](examples.ttl.zip)

-   [Turtle Definitions](definitions.ttl.zip)


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/externalstandards.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-14       OTHER-2609         Joanie Harper                Added hyphen per Jira ticket https://jira.hl7.org/browse/OTHER-2609
2023-08-22      OTHER-2710          Rob McClure                 Added LOINC section, arranged sections in alpha order
2023-08-27      OTHER-2608          Rob McClure                 Updated DICOM section to align with current SPCU
-->

### DICOM

The existing [DICOM](https://www.dicomstandard.org) (Digital Imaging and 
Communications in Medicine) model dates back to 1985 and earlier work. It 
was frozen and has remained unchanged since 1995. Imaging medical records
from 1995 onward all use this model. The DICOM model was originally
specified to include a single mandatory field to capture Patient's Sex
(0010,0008) with allowed values of Male, Female, Other and
Unknown. Initially, the usage was not explicitly specified. It can be
used in various places within DICOM, and by DICOM compliant equipment,
to specify values for sex-linked characteristics. For example, it is
used as input for Standard Update Value (SUV) computations in nuclear
medicine and used as a parameter into patient dose sensitivity models
for radiation dose reporting. These computations and models are based
on statistical analysis of many patients and reflect the sex-linked
characteristics of the studied populations.

Operationally, this field is initially populated either by hand or
based on an order. The order is frequently conveyed by HL7 V2.x
message. The inconsistency and confusion caused by having one field
for multiple concepts (administrative sex, gender identity and sex parameter for clinical use) leads to occasional inconsistency in the image results
and reports created by DICOM equipment. It also leads to operators
occasionally making changes to reflect the patient’s sex parameter for clinical
use that then cause downstream inconsistencies with other systems that
were using administrative sex or gender identity.

#### DICOM Change Process

At time of publication of this Implementation Guide, DICOM has a supplement, 
"Supplement 233, Patient Model Gender Enhancements" in process
to incorporate some of the changes from the HL7 Gender Harmony
Project. The present expectation is to revise DICOM to:

- Clarify that the current Patient Sex attribute corresponds to the
originator's administrative choices.  This preserves compatibility
with existing medical records archives and equipment. It also explains
that SPCU should be used for clinical analysis when available.

- Add an optional SPCU attribute to convey SPCU as defined in the
logical model. As gender harmonized applications are installed
upstream that support SPCU, this should reduce ambiguities resulting
from the use of local administrative choices.

- Add an optional Patient Gender Identity attribute with the same
required and optional value set as described here. 

- Add an optional Name to Use attribute.

- Add an optional Pronouns attribute.

- Add an optional Recorded Sex and Gender attribute.

- Clarify existing DICOM patient and order comment fields to indicate
that when Sex Parameter for Clinical Use is "Specified", these comment fields
should provide information explaining relevant information for
operators and clinicians. They are presently used for operator
instructions, so this usage is a continuation of current usage.

These meet the strategic constraints on DICOM that the existing
medical archives must remain valid without modification, that existing
medical devices must remain minimally compliant, and that systems can
be upgraded to fully support these changes without introducing
dependency on upgrading other equipment.

DICOM is coordinating the development and approval of this change
proposal with the activity of the Gender Harmony project. 

### LOINC
[Logical Observation Identifiers Names and Codes (LOINC)](https://loinc.org/) is "the international standard for identifying health measurements, observations, and documents." LOINC is released twice a year (February and August) under Creative Commons Attribution 4.0 International Public License. Gender harmony project uses LOINC clinical identifiers to represent the following observations:

- Gender identity (GI): [76691-5](https://loinc.org/76691-5/)
- Sex parameter for clinical use (SPCU): [99501-9](https://loinc.org/99501-9/)
- Recorded sex or gender (RSG): [99502-7](https://loinc.org/99502-7/)
  - The LOINC set of [example answer values](https://loinc.org/LL6134-2) is provided as just an example set by LOINC and while useful, is not intended to be a required implementation.
- Personal pronouns - Reported: [90778-2](https://loinc.org/90778-2/)
- LOINC does not have an observable that specifically represents a person's chosen name to use.

All of the above observations align directly with the gender harmony content. 

In addition to the above, LOINC also includes the useful observation Sexual orientation ([76690-7](https://loinc.org/76690-7/)).

### NCPDP
The [National Council for Prescription Drug Programs (NCPDP)](https://www.ncpdp.org) is an ANSI-accredited SDO representing the pharmacy services industry. The NCPDP SCRIPT ERx standard is used in EHR systems. The current values under the standard, labeled Gender, are F (Female), M (Male), and U (Unknown).

However, NCPDP is moving to include both Administrative Gender and Sex at Birth elements in its future state. NCPDP has identified a business need to identify when someone’s gender is different then their Sex Assigned at Birth (SAAB) to obtain medication without delay, in situations where gender mismatch edits may occur.

Currently, NCPDP has approved the field Sex Assigned at Birth that will be used as an optional field in the event the Sex Assigned at Birth (if present) differs from the current XML element Gender. For example, the Sex Assigned at Birth could be “Male” with the Gender field “Female”.

Note: The NCPDP Gender Transition Task Group determined the Conditional Gender Code (C08- 4T), and Purchaser Gender Code (595-YY) were not applicable to patient matching. There was also an added element of “Reproductive Potential”.

### SNOMED International
[SNOMED International](https://www.snomed.org) produces and maintains SNOMED CT, a globally recognized and used terminology standard for electronic health data. In 2021, a group of subject matter experts were gathered to participate in a Sex and Gender Clinical Project Group to provide advice on sex and gender terminology requirements for health record data. The group was closed in May 2021, pending the results of the ISO TC215 (Health Informatics) WG3. 

As a consensus standard that strives to align with international standards groups working in the same domain, SNOMED International will participate with ISO TC215 WG3 in their efforts in this domain to ensure international alignment. 

SNOMED International recognizes that there may be omissions, outdated or erroneous content in the disorders and procedure hierarchies related to sex and gender in SNOMED CT and encourages submissions of content requests for change through the appropriate National Release Centers (NRCs). 

### X12
[X12](https://x12.org) is an ANSI-accredited Standards Developer (ASD) that develops and maintains business-to-business
data exchange standards, including electronic data interchange (EDI) standards and schemas, which drive
business processes globally. With more than 320 transaction standards available for use, X12 standards
are used to conduct nearly every facet of business-to-business operations.

X12 is actively participating in HL7’s Gender Harmony Project and intends to present recommendations
based on the group's findings to X12's members. Currently, X12 transactions include gender codes from
an X12 maintained list identified as data element 1068 - Gender Code. Data element (DE) 1068 is a set of
codes indicating the sex of an individual. The X12 EDI Standard version 008030 supports the following
codes for use in DE 1068.

* A – Not Provided
* B – Not Applicable
* F – Female
* I – Nonbinary
* M – Male
* N – Non-sexed <br />*Gender is not known because observation or examination for such was not recorded or requested by the protocol*
* T – Self-reported as Transgender
* U – Unknown
* X – Unsexable <br />*Gender could not be determined because of ambiguity in external or internal genitalia*

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/fhirdesignbackground.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-29       OTHER-2558         Cooper Thompson              Split design background into a separate page, independent of the guidance page.
2023-07-13       OTHER-2618         Cooper Thompson              Added a link to the R4 SPCU backport extension.
2023-08-14       OTHER-2633         Joanie Harper                Move phrase from Disadvantages column to advantages column per the Jira ticket
2023-08-14       OTHER-2610         Joanie Harper                Updated text per the Jira ticket
2023-08-16       OTHER-2579         MaryKay McDaniel             Added (SPCU) in line 36 for consistency across pages, i.e., 1st time include 
2023-08-23      OTHER-2618 and related  Rob McClure             Changed Final section on backwards compatibility
2023-08-23      OTHER 2525          Rob McClure                 Change already made to RSG definition so no update for this
2023-08-25      OTHER-2602                Carol Macumber                Removing "Note to balloters"
2023-08-27		OTHER-2613			Carol Macumber	Added clarification that additional authorization being required for SPCU Profile on Observation may be considered advantagous in some scenarios per OTHER 2613 
-->

# Background and Rationale for FHIR design approach
There were several options considered when representing these sex and gender concepts in FHIR:
* Add new properties in the relevant resources
* Create extensions in the relevant resources
* Create a profile on Observation

<style>
table, th, td {
  border: 1px solid black;
}
</style>
|Option|Advantages|Disadvantages|
|---|---|---|
|Property on resources|1. Easily discoverable in the specification<br />2. Establishes the properties as first-class data elements.|1. Requires an alternative approach for pre-adoption in prior versions of FHIR.<br />2. For the Patient resource, which is Normative, a change such as this requires additional implementer and standards community acceptance/review processes.|
|Extension on resources|1. The extension may be directly pre-adopted in prior versions of FHIR.<br />2. The extension can be defined in one location and applied to many resources, rather than having to copy and maintain an identical structure on many related resources.<br />3. We may consider changing the extension to a property in future versions of FHIR.<br />4. Avoids problems with changing normative content.| 1. Extensions are somewhat hidden, so are moderately difficult for implementers to discover.|
|Profile of Observation| 1. Enables collecting a broad set of metadata about the property. However, it is not expected that the metadata Observation enables is necessary or useful for most use cases.<br />2. Aligns with sexual orientation profile.<br />3. Avoids problems with changing normative content.|1. Observation profiles are somewhat hidden, so are moderately difficult for implementers to discover.<br />2. Clients would require additional authorization scopes to access demographic data. For servers that provide only resource-level scopes, patients may not wish to share an Observation just to grant access to Gender Identity, when it would also grant access to labs, vitals, etc. Note: it may not always be viewed as a disadvantage for systems to require additional authorization. Rather, it may be desired in some scenarios|

When creating the FHIR extensions, there were several proposed changes to the logical model that were identified. We chose to apply those changes to FHIR structures so that we can solicit feedback via the ballot. As a result of the FHIR R5 and this Gender Harmony Cross Paradigm IG ballot, any resulting required changes to the logical model have been made.

#### Explicit Decisions:
**Gender Identity: extension**

*Context:* This extension is available on all "person" type resources, which includes Patient, RelatedPerson, Person, and Practitioner. It is not included on PractitionerRole, as PractitionerRole refers to Practitioner for demographics.

**Sex Parameter for Clinical Use: extension**

*Note*: The Sex Parameter for Clinical Use (SPCU) concept was formerly known as Sex for Clinical Use (SFCU).

*Context:* The Sex Parameter for Clinical Use extension is available on all FHIR resource types; however, it is intended for use on clinical resource types (e.g., DiagnosticReport, Observation), and enclosing contextual resources (e.g., Encounter, EpisodeOfCare, Patient). We considered limiting the extension only to the resources we expect it to be used on, however there will likely be resources we incorrectly excluded, and new resources created to which it could apply, so we opted to allow it to all resources, understanding that it would not be applicable for many resource types.

Structure: We considered two structural options for this extension:

1) An extension applied to a contextual resource with the Sex for Clinical Use value in-line.
2) An extension applied to a contextual resource with a reference to an Observation documenting the Sex Parameter for Clinical Use value.

We opted to include the Sex Parameter for Clinical Use value in-line rather than as a reference to Observation after discussion on tradeoffs between two options.  We felt that the in-line option was simpler while being sufficiently expressive.  An extension with a reference to Observation allows for the expression of complex metadata associated with the value, however we expect the need for that complex metadata would be sufficiently rare to not outweigh the benefits of the simpler in-line extension option.  Note that the [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html) extension does include a supportingInfo property which may reference supporting clinical observations.

**Recorded Sex and Gender: extension**

The [Patient Gender and Sex section](https://hl7.org/fhir/R5/patient.html#gender) describes considerations for exchanging Recorded Sex and Gender concepts. The Recorded Sex and Gender extension is provided as option only when a use-case specific property or extension is not practical.

*Context:* This extension is available on all "person" type resources, which includes Patient, RelatedPerson, Person, and Practitioner. It is not included on PractitionerRole, as PractitionerRole refers to Practitioner for demographics.

**Pronouns: extension**

*Context:* This extension is available on all "person" type resources, which includes Patient, RelatedPerson, Person, and Practitioner. It is not included on PractitionerRole, as PractitionerRole refers to Practitioner for demographics.

**Name to Use: Guidance on HumanName datatype**

The Gender Harmony project has agreed that to represent the Name To Use when addressing an individual, the datatype HumanName.use = "usual" should be used.

### Backwards Compatibility for FHIR versions:

One of the benefits to using extensions in [FHIR R5](https://hl7.org/fhir/R5/) is that they can be easily backported to prior versions. Implementers may use any of the new standard extensions in R5 in prior versions of FHIR. This is further discussed in the [Version Management Policy](https://hl7.org/fhir/r5/versions.html#extensions) of the R5 documentation.

However, the [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html), and the [individual-recordedSexOrGender](http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender) extensions make use of the CodeableReference datatype, which was added in R5. Further analysis of the implications for backporting this datatype resulted in improvements to the FHIR publisher and validator so extensions such as these that contain new data types may be pre-adopted in versions of FHIR prior to R5.  

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/fhirgenderharmony.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-14       OTHER-2629         Joanie Harper                Corrected typo in section 11.3 (3rd row, 2nd column) per Jira ticket https://jira.hl7.org/browse/OTHER-2629
2023-06-14       OTHER-2411         Joanie Harper                Corrected "An new" to "A new" per Jira ticket  https://jira.hl7.org/browse/OTHER-2411
2023-06-14       OTHER-2616         Joanie Harper                Updated second option to 2) per Jira ticket https://jira.hl7.org/browse/OTHER-2616
2023-06-29       OTHER-2558         Cooper Thompson              Split design background into a new document.  Updated FHIR guidance with much more detail.
2023-07-13       OTHER-2618         Cooper Thompson              Added guidance on the R4 backport extension for SPCU
2023-08-16       spell/grammar chk  MaryKay McDaniel             157, changed presense or absense to presence or absence
                                                                 171, anatmoical to anatomical, disrete to discrete, unconsious to unconscious, invenvory to inventory
2023-08-27       OTHER-2574         Rob McClure                   ValueSet to value set, data type to datatype
2023-09-07       OTHER-2618         Cooper Thompson              Removed backport extension comments
-->


### Summary of FHIR artifacts
The [Patient Gender and Sex](https://hl7.org/fhir/R5/patient.html#gender) narrative provides a high-level overview of the different sex and gender concepts that may be relevant for exchange.  Additionally, the [Transgender Person Example](https://hl7.org/fhir/R5/patient-example-sex-and-gender.html) provides an example of how sex and gender concepts may be exchanged for a transgender patient.
There are [several extensions](http://hl7.org/fhir/extensions/extensions-Patient.html) that may be used to exchange the sex and gender concepts defined by the Gender Harmony implementation guide.  These are available as standard extensions in the FHIR extensions implementation guide, however, relevant guidance and recommendations on when and how to use these extensions is included in this Gender Harmony Implementation Guide.


<style>
table, th, td {
  border: 1px solid black;
}
</style>
| **Concept** | **FHIR Artifact** | **Contexts of Use** |
| -------- | -------- | -------- |
| Gender Identity     | [individual-genderIdentity](http://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html)     | Patient, RelatedPerson, Person, Practitioner, and PractitionerRole     |
| Sex Parameter for Clinical Use    | [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html)     | All Resource types     |
| Pronouns     | [individual-pronouns](http://hl7.org/fhir/extensions/StructureDefinition-individual-pronouns.html)     | Patient, RelatedPerson, Person, and Practitioner     |
| Gender      | [individual-recordedSexOrGender](http://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html)     | Patient, RelatedPerson, Person, and Practitioner     |

The [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html) extension makes use of the CodeableReference datatype, which was added in R5. To allow this extension to be used in prior versions of FHIR, the FHIR extension IG provides a version of that extension that is compatible with prior versions of FHIR. 


### General Guidance Sex and Gender
We recognize that there are many systems that rely on a single patient-level Administrative Gender (a.k.a. Administrative Sex) concept communicated in Patient.gender. Today, this semantically vague Patient.gender property is used to address a wide range of use cases, from identifying appropriate reference ranges for lab tests to performing patient matching when submitting claims to insurance companies.

Systems are encouraged to use the new standard extensions to communicate semantically precise sex and gender concepts. Patient.gender is retained for backwards compatibility.

For systems that cannot immediately transition to the new semantically precise concepts and must use Patient.gender for specific use cases like identifying reference ranges for lab tests, it is important to coordinate with your exchange partners to ensure that they understand how you are using the property. This coordination prevents issues where (for example) a sender is populating Patient.gender for administrative or social purposes, but a recipient is using it for clinical purposes.

### Exchanging Gender Identity
There are several options for exchanging gender identity in FHIR. Which option is appropriate may vary by use case, jurisdiction, or other business requirements.  The two primary options are extensions or Observations.

#### Using Extensions for Gender Identity
Using an extension on Patient, or the other "person" resources like Practitioner or RelatedPerson, for communicating gender identity has several considerations:

* Gender Identity is often used and managed in the same ways as other demographics such as name and address, which are communicated in the relevant resources (Patient, Practitioner, RelatedPerson).
* When using SMART App Launch, users would grant access to the Patient, Practitioner, or RelatedPerson [SMART scopes](http://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html#scopes-for-requesting-fhir-resources), enabling access to gender identity as well as other demographics.
* Systems that do not support element-level authorizations (i.e., they only support resource-level authorization) will be unable to protect gender identity or any other sensitive demographics such as preferred names, pronouns, addresses, and phone numbers.
* If the method or actor documenting the gender identity is relevant, a Provenance resource using the targetElement extension may be used to document Provenance only for the genderIdentity value.
* The standard extension supports multiple gender identities, with relevant periods to account for a patient’s gender identity changing over time.

There are several extensions that exist for gender identity:

| **Extension** | **Comments** |
| -------- | -------- |
| [patient-genderIdentity](https://www.hl7.org/fhir/R4/extension-patient-genderidentity.html) | This extension is available in versions of FHIR prior to R5. In R5, it was replaced by individual-genderIdentity to enable the exchange of gender identity for  non-patient persons such as practitioners. | 
| [individual-genderIdentity](http://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html)     | This extension replaced the R4 patient-genderIdentity, and is available starting in R5. In addition to expanding the scope to individuals other than the patient, it also added support for metadata such as a period of applicability and a comment.     |
| [us-core-genderIdentity](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-genderIdentity.html) | This extension was created by US Core to meet US-specific value set requirements which were not satisfied by the R4 patient-genderIdentity extension. |


For FHIR R4 implementations in the US that require conformance to US Core, the recommendation is to use the [us-core-genderIdentity](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-genderIdentity.html) extension to maintain consistency within the US implementer community. The [patient-genderIdentity](https://www.hl7.org/fhir/R4/extension-patient-genderidentity.html), [individual-genderIdentity](http://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html), and [us-core-genderIdentity](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-genderIdentity.html) extensions may be supported simultaneously, so servers may consider supporting all three extensions and the associated value sets to ensure clients have access to their preferred extension.

For FHIR R5 implementations, our recommendation is to use the [individual-genderIdentity](http://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html) extension.


#### Using Observation for Gender Identity
Using an Observation resource for communicating gender identity has several considerations:
* When using SMART App Launch, users must authorize an additional scope (e.g., user/Observation.read).
  * SMART authorization servers may need to consider supporting granular scopes so that users may authorize access to Gender Identity Observation resources, but not other Observation resources such as Labs or Vitals.
  * SMART authorization servers may need to consider how authorized scopes are granted for Observations describing different individuals (e.g. Patient vs. Practitioner) in the same integration, and how the scope of those authorizations are displayed to the end user performing the authorization.  For example, is the user granting access to all Gender Identity Observations that the user has access to (including Practitioner and RelatedPerson), or only those for the Patient?
  * Systems that only support resource-level authorization can protect gender identity information when necessary.
* If the method or actor documenting the gender identity is relevant, those may be recorded directly in the Observation resource, or in a Provenance resource associated with the Observation.
* Multiple Observation resources with appropriate effective periods may be used to communicate a patient’s changing gender identity over time.
* When using Observation to record the gender identity of a PractitionerRole or RelatedPerson, Observation.focus may be used.
* When using Observation to record the gender identity of a Patient or Practitioner, either Observation.subject or Observation.focus may be used.  For systems that also have a need to communicate gender identity for PractitionerRole or RelatedPerson, Observation.focus is recommended for consistency.  Systems that only have a need to exchange gender identity for Patient or Practitioner may use either Observation.subject or Observation.focus.


The Gravity Project has created a draft SDOHCC Observation Gender Identity profile.

**Both Gender Harmony and Gravity continue to solicit feedback on the approaches of using extensions vs. Observations for exchanging gender identity.**

#### Handling Gender Identity in FHIR and CDA
FHIR supports two primary options for exchanging gender identity, as discussed above:
1. Extensions on patient
2. Observations about the patient

CDA has two options for exchanging gender identity:
1. Extensions on recordTarget
2. Observation templates

CDA and FHIR are aligned with regard to the *concept* of gender identity.  However, when determining which *structure* should be used, it is up to the implementer as to which may be used.  If an exchange involves mapping between FHIR and CDA, the implementer may determine which FHIR option would map to which CDA option. 

### Exchanging Pronouns
The [individual-pronouns](http://hl7.org/fhir/extensions/StructureDefinition-individual-pronouns.html) extension was added in FHIR R5 to support exchanging pronouns to use for Patients, Practitioners, RelatedPersons, and Persons.  Implementers who need to exchange pronouns in prior versions of FHIR are encouraged to pre-adopt the R5 extension.

### Exchanging Name to Use
The Name to Use for a person should be exchanged using the HumanName datatype in the relevant resource, with a HumanName.use = "usual".

### Exchanging Recorded Sex and Gender
When evaluating when and how to exchange sex or gender concepts, consider whether Gender Identity or Sex Parameters for Clinical Use may be better for the relevant use case.  If those concepts are not appropriate or available, then the following approach for exchanging Recorded Sex or Gender may be used:
1. Determine which sex or gender concept is relevant for the jurisdiction and use case.
2. Determine the best way to exchange this information between systems. 

See the [guidance on Recorded Sex and Gender](#guidance-on-recorded-sex-and-gender) for additional considerations.

### Exchanging Sex Assigned at Birth
*Note: In the Gender Harmony logical model, Sex Assigned at Birth is considered a type of Recorded Sex or Gender.*

In the US, Sex Assigned at Birth is part of the USCDIv1.  US Core has established extensions to meet US-specific requirements.  For R4 implementations in the US that require conformance to US Core, our recommendation is to use the the US Core extensions to maintain consistency within the US implementer community for exchanging the Sex assigned at Birth concept.


Outside the US, if your jurisdiction has a "Core" implementation guide, and that guide includes an extension for Sex Assigned at Birth, our recommendation is to use that extension to align with your jurisdiction's implementer community.

Otherwise, our recommendation is to work with your jurisdiction-specific or use-case specific implementation guide authors to define jurisdiction or use-case specific methods to exchange concepts that can be categorized as a recorded sex and gender, including sex assigned at birth. Refer to the [guidance on Recorded Sex and Gender](#guidance-on-recorded-sex-and-gender) for considerations.

### Exchanging Administrative Sex or Gender
*Note: In the Gender Harmony logical model, Administrative Sex and Administrative Gender are considered types of Recorded Sex or Gender.* 

Administrative Sex and Administrative Gender have sometimes been used interchangeably.  Generally, Patient.gender may be used to exchange either Administrative Sex or Administrative Gender.  However, if a system differentiates between the two, Patient.gender may be used for Administrative Gender, and an extension or Observation may be used for Administrative Sex.  The considerations for using an extension vs. an Observation for Administrative Sex are similar to [those for Gender Identity](#exchanging-gender-identity).

### Exchanging Legal Sex or Gender
*Note: In the Gender Harmony logical model, Legal Sex and Legal Gender are considered types of Recorded Sex or Gender.*

Legal Sex and Legal Gender have sometimes been used interchangeably.  Generally, Patient.gender may be used to exchange either Legal Sex or Legal Gender.  

However, if a system differentiates between Legal Sex/Gender and Administrative Gender, an extension or Observation may be used for exchanging Legal Sex.  

### Exchanging Billing Sex
*Note: In the Gender Harmony logical model, Billing Sex is considered a type of Recorded Sex or Gender.*   

In some jurisdictions, including the US, payers may have an administrative sex on file they use to identify members or subscribers for insurance plans.  This may be distinct from the "Administrative Sex" historically used in medical systems for activities such as room or bed assignment.  To differentiate the two types of administrative sex, we use the term "Billing Sex" to refer to the sex used by payers for their administrative purposes.   Medical systems may interact with this billing sex in several ways:
* When collecting the member’s insurance information during registration,
* When performing eligibility checks to verify the patient is insured.
* When submitting claims to the payer.
* When performing patient matching during the exchange of member attribution lists.
* Etc.


In the FHIR Coverage resource, both Coverage.beneficiary and Coverage.subscriber refer to the Patient resource as the container for demographics about the beneficiary and subscriber respectively.   Similarly with Claim.patient. This implies that Patient.gender is an appropriate spot to document the Billing Sex.  However, in cases where the Billing Sex is different from the Administrative Sex used by the medical system for non-billing purposes, there may need to be multiple FHIR Patient resources used to represent a single individual.  For example:
* One Patient resource would have Patient.gender representing the Administrative Sex used by the medical system for patient identity matching, room and bed assignment, etc.  This Patient would be referenced by the various clinical resources.
* Another Patient resource would exist representing the same individual, but with Patient.gender representing the billing sex that is on file for a given insurance company.  This Patient would be referenced by Coverage.beneficiary, Coverage.subscriber, and Claim.patient.  If a patient has multiple coverages, and the different payers have different billing sex value son file for the patient, there may be more than one Patient resource for billing demographics.
* These patient resources may be linked using Patient.link with a link type of ‘seealso’.


### Exchanging Sex Parameters for Clinical Use

#### Patient Level Sex Parameter for Clinical Use
Sex Parameters for Clinical Use (SPCU) may be used in specific clinical contexts, for example, when placing an order or when interpreting a result.  However, there are cases where having a context-free categorization of a patient can be useful, for example, when doing outreach for cervical cancer screening to patients for which you don't have access to any specific clinical information.  Or when you don't have access to the specific clinical information **yet**.
    
When using SPCU at a patient level, consider if any information is available suggesting that the patient is NOT male-typical or female-typical *across all clinical contexts*, then using **specified** as the patient-level SPCU is most appropriate, as that indicates that individuals or systems providing care should either use default behavior that is safe for both male and female populations, individually review treatment options with the patient, or carefully inspect comments and relevant observations before proceeding with treatment.   Additionally, consider if there are any risks related to patient care or equitable treatment when using a patient-level SPCU.  For example, when bifurcating a cohort based on a patient-context SPCU for research, carefully consider which groups may be inappropriately categorized.

#### Contextual Sex Parameter for Clinical Use
A Sex Parameter for Clinical Use (SPCU) may be used in specific clinical contexts, for example, when placing an order or when interpreting a result.  In these contexts, consider whether using a categorization such as Sex Parameter for Clinical Use is sufficient, or if using a more specific clinical observation such as an Observation about the presence or absence of an organ is most appropriate.  If a categorization is sufficient, then the [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html) extension may be added to the resource that best represents the context.  For example, if the context is a referral order or lab order, then the extension could be added to the ServiceRequest.
    
#### Sex Parameter for Clinical Use vs. Ask at Order Entry Questions
In some clinical scenarios, such as ordering workflows, "Ask at Order Entry" (AOE) questions are commonly used for capturing a broad range of clinical context.  Examples may be unrelated to sex or gender concepts, such as "Has the patient fasted for 24 hours?", but some may overlap or be adjacent to sex or gender concepts, such as "Is the patient pregnant?" or "Does the patient have a prostate?".  

Clinical experts should consider whether an SPCU-level categorization is sufficient for the care being provided, or asking more specific questions is more appropriate.  If an SPCU-level categorization is sufficient, then the SPCU may be treated as a specific type of AOE. Systems may also consider using a patient-level SPCU to pre-populate the answer to an AOE, allowing clinicians to change the setting where appropriate.
    
In this case, you may choose to exchange the recorded answer along with the other relevant AOEs, for example, in OBX segments in HL7v2 or Observations in FHIR.  Or you may choose to communicate the recorded answer in the dedicated SPCU structures, for example, in GSP segments in HL7v2, or in the patient-SexParameterForClinicalUse extension in FHIR. 

Using the SPCU-specific structures does let you communicate additional supporting information if that is relevant, but it also requires that receiving systems support and inspect two different structures (e.g., OBX and GSP) to gather all the relevant information AOE information.  This is a tradeoff that should be considered when authoring a use-case specific IG, or when coordinating an approach with your trading partners.  
       
#### Sex Parameter for Clinical Use vs. Anatomical Characteristics (Organ Inventory)
For many clinical contexts, the "ideal" information for clinical decision making would be the specific details about the patient's anatomical characteristics, such as whether the patient has a prostate.  However, even if clinical systems support discrete organ inventories, that information may be missing for a variety of reasons.  A patient might decline to provide detailed organ information for privacy reasons, or they may be incapable of providing the information, either because they are unconscious or have other communication issues.  A clinical end user may not collect the information from the patient, either because they are busy, or they forgot.  A clinical system may electronically receive a copy of a patient's records from some other system that doesn't support the collection of discrete organ inventory.

For all of these reasons, and others, clinical systems will need to provide care to patients for which an organ inventory is incomplete or unavailable.  In those cases, using a Sex Parameter for Clinical Use as an alternative to an organ inventory can be beneficial.  However, individuals or systems providing care should either use default behavior that is safe for both male and female populations, individually review treatment options with the patient, or carefully inspect comments and relevant observations before proceeding with treatment.

       
	   
	   

### Guidance on Recorded Sex and Gender
The Gender Harmony Project defines a methodology for how to send Recorded Sex or Gender information.  This methodology involves two steps:
1. Determine which sex or gender concept is relevant for the jurisdiction and use case.
2. Determine the best way to exchange this information between systems.

When applying this methodology in FHIR, there are some considerations:
1. Determine which sex or gender concept is relevant for the jurisdiction and use case.  For example, you might identify concepts such as:
   * Sex Assigned at Birth
      * For clinical purposes, consider whether Sex Parameters for Clinical Use may more accurately represent the patient’s relevant clinical status.   
      * Sex Assigned at Birth may not reflect current clinical attributes of adults.
      * Understand that the Sex Assigned at Birth value in medical systems may not be the value recorded on the birth certificate at the time of birth due to operational and training issues around its collection.
   * Administrative Sex/Gender
      * For communication with a patient, consider whether Gender Identity may be more appropriate.
   * Legal Sex/Gender
   * Billing Sex/Gender
   * Etc.
2. Determine the best way to exchange this information between systems.  This could involve:
   * Using existing fields, such as Patient.gender
   * Creating jurisdiction or use case specific structures that are directly tied to the specific concept being exchanged, such as [us-core-birthsex](http://hl7.org/fhir/us/core/StructureDefinition-us-core-birthsex.html), ukcore-birthsex, or new jurisdictional or use case specific extensions
   * Using a generic structure such as the individual-recordedSexOrGender FHIR extension if available for the context in question or a FHIR Observation resource


#### General Guidance

For R4 or R5 implementations, our recommendation is to work with your jurisdiction-specific or use-case specific implementation guide authors to define jurisdiction or use-case specific extensions for any concept that can be categorized as a recorded sex and gender, including sex assigned at birth. Replacing a use-case specific extension or property (which is already in use) with the individual-recordedSexOrGender extension is not recommended.
 

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/fhirhealth_maintenance_use_case.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment



-->

#### FHIR Patient Example
The Health Maintenance Lab use case narrative was constructed to demonstrate the workflow of a transgender female patient who presents to her clinic needing an update of her demographic name, gender, and pronouns. The following is a FHIR example for the updating of the patient’s name, gender identity, and pronouns:

```
{
   "Patient": {
      "id": {
         "_value": "example"
      },
      "extension": [
         {
            "extension": [
               {
                  "valueCodeableConcept": {
                     "coding": {
                        "system": {
                           "_value": "http://snomed.info/sct"
                        },
                        "code": {
                           "_value": "446141000124107"
                        },
                        "display": {
                           "_value": "Identifies as female gender (finding)"
                        }
                     }
                  },
                  "_url": "value"
               },
               {
                  "valuePeriod": {
                     "start": {
                        "_value": "2022-08-01"
                     }
                  },
                  "_url": "period"
               },
               {
                  "valueCodeableConcept": {
                     "coding": {
                        "system": {
                           "_value": "http://snomed.info/sct"
                        },
                        "code": {
                           "_value": "446151000124109"
                        },
                        "display": {
                           "_value": "Identifies as male gender (finding)"
                        }
                     }
                  },
                  "_url": "value"
               },
               {
                  "valuePeriod": {
                     "end": {
                        "_value": "2022-07-31"
                     }
                  },
                  "_url": "period"
               }
            ],
            "_url": "http://hl7.org/fhir/StructureDefinition/individual-genderIdentity"
         },
         {
            "extension": [
               {
                  "valueCodeableConcept": {
                     "coding": {
                        "system": {
                           "_value": "http://loinc.org"
                        },
                        "code": {
                           "_value": "LA29518-0"
                        },
                        "display": {
                           "_value": "he/him/his/his/himself"
                        }
                     }
                  },
                  "_url": "value"
               },
               {
                  "valuePeriod": {
                     "end": {
                        "_value": "2022-07-31"
                     }
                  },
                  "_url": "period"
               },
               {
                  "valueCodeableConcept": {
                     "coding": {
                        "system": {
                           "_value": "http://loinc.org"
                        },
                        "code": {
                           "_value": "LA29519-8"
                        },
                        "display": {
                           "_value": "she/her/her/hers/herself"
                        }
                     }
                  },
                  "_url": "value"
               },
               {
                  "valuePeriod": {
                     "start": {
                        "_value": "2022-08-01"
                     }
                  },
                  "_url": "period"
               }
            ],
            "_url": "http://hl7.org/fhir/StructureDefinition/individual-pronouns"
         }
      ],
      "identifier": {
         "use": {
            "_value": "usual"
         },
         "type": {
            "coding": {
               "system": {
                  "_value": "http://terminology.hl7.org/CodeSystem/v2-0203"
               },
               "code": {
                  "_value": "MR"
               }
            }
         },
         "system": {
            "_value": "urn:oid:1.2.36.146.595.217.0.1"
         },
         "value": {
            "_value": "patientID1"
         },
         "period": {
            "start": {
               "_value": "2001-05-06"
            }
         }
      },
      "active": {
         "_value": "true"
      },
      "name": [
         {
            "use": {
               "_value": "usual"
            },
            "family": {
               "_value": "Smith"
            },
            "given": {
               "_value": "Jack"
            },
            "period": {
               "end": {
                  "_value": "2022-07-31"
               }
            }
         },
         {
            "use": {
               "_value": "usual"
            },
            "family": {
               "_value": "Smith"
            },
            "given": {
               "_value": "Julie"
            },
            "period": {
               "start": {
                  "_value": "2022-08-01"
               }
            }
         },
         {
            "use": {
               "_value": "nickname"
            },
            "given": {
               "_value": "Jack"
            },
            "period": {
               "end": {
                  "_value": "2022-07-31"
               }
            }
         },
         {
            "use": {
               "_value": "nickname"
            },
            "given": {
               "_value": "Julie"
            },
            "period": {
               "start": {
                  "_value": "2022-08-01"
               }
            }
         }
      ],
      "_xmlns": "http://hl7.org/fhir"
   }
}
```
#### FHIR ServiceRequest Example
Following the update of information, the patient is notified of the need for a health screening appointment. During the meeting with her physician, the examination of the patient’s prostate noted the presence of nodules. Due to this finding, a PSA is ordered for the patient using the Sex for Clinical Use as male with a note that the patient has a prostate. The following is a FHIR example for the service request for a PSA:

```
{
   "ServiceRequest": {
      "id": {
         "_value": "PSA"
      },
      "extension": [
         {
            "extension": [
               {
                  "valueCodeableConcept": {
                     "coding": {
                        "system": {
                           "_value": "http://terminology.hl7.org/CodeSystem/sex-for-clinical-use"
                        },
                        "code": {
                           "_value": "Male"
                        },
                        "display": {
                           "_value": "Specified sex for clinical use"
                        }
                     }
                  },
                  "_url": "value"
               },
               {
                  "valueString": {
                     "_value": "Patient has a prostate."
                  },
                  "_url": "comment"
               }
            ],
            "_url": "http://hl7.org/fhir/StructureDefinition/patient-sexForClinicalUse"
         }
      ],
      "identifier": {
         "type": {
            "coding": {
               "system": {
                  "_value": "http://terminology.hl7.org/CodeSystem/v2-0203"
               },
               "code": {
                  "_value": "PLAC"
               }
            },
            "text": {
               "_value": "Placer"
            }
         },
         "system": {
            "_value": "urn:oid:1.3.4.5.6.7"
         },
         "value": {
            "_value": "2345234234234"
         }
      },
      "status": {
         "_value": "active"
      },
      "intent": {
         "_value": "original-order"
      },
      "code": {
         "coding": {
            "system": {
               "_value": "http://loinc.org"
            },
            "code": {
               "_value": "2857-1"
            },
            "display": {
               "_value": "Prostate specific Ag [Mass/volume] in Serum or Plasma"
            }
         },
         "text": {
            "_value": "Prostate specific Ag [Mass/Vol]"
         }
      },
      "subject": {
         "reference": {
            "_value": "Patient/patientID1"
         },
         "display": {
            "_value": "Julie Smith"
         }
      },
      "encounter": {
         "reference": {
            "_value": "Encounter/example"
         }
      },
      "occurrenceDateTime": {
         "_value": "2022-08-15T18:01:00+01:00"
      },
      "requester": {
         "reference": {
            "_value": "Practitioner/example"
         }
      },
      "performer": {
         "reference": {
            "_value": "Practitioner/f005"
         }
      },
      "reasonCode": {
         "coding": {
            "system": {
               "_value": "http://hl7.org/fhir/sid/icd-10-cm"
            },
            "code": {
               "_value": "N40.2"
            },
            "display": {
               "_value": "Nodular prostate without lower urinary tract symptoms"
            }
         }
      },
      "_xmlns": "http://hl7.org/fhir"
   }
}
```

#### FHIR Observation Example
The PSA is performed and resulted. The following is a FHIR example for the observation of the PSA result:
```
{
   "Observation": {
      "id": {
         "_value": "f001"
      },
      "identifier": {
         "use": {
            "_value": "official"
         },
         "system": {
            "_value": "http://www.bmc.nl/zorgportal/identifiers/observations"
         },
         "value": {
            "_value": "6323"
         }
      },
      "status": {
         "_value": "final"
      },
      "code": {
         "coding": {
            "system": {
               "_value": "http://loinc.org"
            },
            "code": {
               "_value": "2857-1"
            },
            "display": {
               "_value": "Prostate specific Ag [Mass/volume] in Serum or Plasma"
            }
         }
      },
      "subject": {
         "reference": {
            "_value": "Patient/patientID1"
         },
         "display": {
            "_value": "Julie Smith"
         }
      },
      "issued": {
         "_value": "2022-08-15T17:45:00+01:00"
      },
      "performer": {
         "reference": {
            "_value": "Practitioner/f005"
         },
         "display": {
            "_value": "D. Jones"
         }
      },
      "valueQuantity": {
         "value": {
            "_value": "3.0"
         },
         "unit": {
            "_value": "ng/ml"
         },
         "system": {
            "_value": "http://unitsofmeasure.org"
         },
         "code": {
            "_value": "ng/ml"
         }
      },
      "interpretation": {
         "coding": {
            "system": {
               "_value": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation"
            },
            "code": {
               "_value": "N"
            },
            "display": {
               "_value": "Normal"
            }
         }
      },
      "note": {
         "text": {
            "_value": "Patients on testosterone suppressing medications, the upper limit of normal for the PSA should be reduced to 1.0 ng/ml."
         }
      },
      "referenceRange": {
         "low": {
            "value": {
               "_value": "0"
            },
            "unit": {
               "_value": "ng/ml"
            },
            "system": {
               "_value": "http://unitsofmeasure.org"
            },
            "code": {
               "_value": "ng/ml"
            }
         },
         "high": {
            "value": {
               "_value": "4.0"
            },
            "unit": {
               "_value": "ng/ml"
            },
            "system": {
               "_value": "http://unitsofmeasure.org"
            },
            "code": {
               "_value": "ng/ml"
            }
         }
      },
      "_xmlns": "http://hl7.org/fhir"
   }
}
```

---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/health_maintenance_use_case.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-08-28       OTHER-2425         Rob McClure                 Updated SFCU to SPCU and updated code value.
2023-08-28          None            TRob McClure                Fixed heading hierarchy to place much of this under the Workflow/Storyboard section
-->

### Use Case Description:

In this use case, a patient calls a primary care health clinic to update her name, gender identity, and personal pronouns. Based on this information and age, the automated health-maintenance notification system requests that the patient schedule an in-person visit. The patient then attends the clinic for that scheduled visit and there is a lab test ordered as a result of an anatomy-specific finding.

### Actors:
#### People
1.	Patient (Julie Smith)
2.	Administrative representative for the health system
3.	Clinic Clerk 
4.	Physician (Dr. Jones)

#### Systems
1.	Clinic registration system
2.	Clinic EHR
3.	Order entry system
4.	Lab information system

### Scope Statement:

Use case covers change of name, gender identity, and pronouns in the patient registration system and EHR, clinic check-in/registration, clinic visit, order entry, and results.

### Precondition(s):

1.	Patient ID has not changed
2.	Patient medical history is available in the facility's EHR

### Workflow/Storyboard:
#### Administrative update and record change

1.	A patient, Julie Smith, calls her primary care health clinic and speaks with an administrative representative. 
2.	The patient informs the clinic’s administrative representative that she is a transgender female and would like to update her name, gender identity, and pronouns in the clinic’s EHR system.
3.	The clerk will then provide system-specific choices to the patient, usually being to (1) keep both the previous information and the newer information while demarking the previous information by providing a date for both the previous name, gender identity, and pronouns, or (2) entering the patient as a new patient with only the newer information available and not linking the profile to the previous profile in any way. With any choice, the clerk will inform the patient of the consequences of each choice pursuant to clinic- and system-specific guidelines.
4.	Julie decides to keep her prior information and update the account with her new name, gender identity, and pronouns.
5.	The administrative representative asks Julie for the name that is currently in the system.
6.	Julie gives the name “Jack Smith.”
7.	The administrative representative asks Julie for her date of birth as a second patient identifier.
8.	Julie provides the birthdate, which matches the birthdate on the patient record for “Jack Smith.”
9.	The administrative clerk will inform the patient of if and how previously recorded information (name, pronouns, gender identity, etc.) is retained in the system, and who might be able to access that information.
10.	The administrative representative asks if Julie would like to update Name to Use in her record and explains that the staff who calls for her by name in the waiting room will use Name to Use to call for her and asks if she would like to be called back as Julie Smith.
11.	Julie agrees.
12.	The administrative representative notes that the patient profile currently labeled as “Jack Smith” has a gender identity of “Male” in the system and confirms with Julie that she would like to go through the process of changing the system profile to reflect her gender identity and personal pronoun as well. 
13.	Julie agrees and the administrative representative asks if she would like to fill out the information herself (via a patient portal) or if she would like to dictate to the administrative representative the individual changes, with the administrative representative explaining some of the potential consequences of those changes.
14.	Julie agrees to dictate changes to the administrative representative who enters edit mode in the patient registration system to record that the patient name “Jack Smith” is no longer active as of the current date and second-specific time. 
15.	The administrative representative adds the new Name to Use of Julie Smith, along with any other relevant name-related variables, starting as of the current date and second-specific time.
16.	The administrative representative follows the same approach to update the pronouns to she/her/hers. 
17.	The administrative representative asks what gender identity Julie wishes to be recorded and Julie answers “Female.” The administrative representative records the prior gender identity in the system as inactive as of the current date and second-specific time and enters the gender identity of Female starting as of the current date and second-specific time. 
18.	The administrative representative saves the patient demographic record that ends the call.
19. The updated record sends a message to clinics in the health system to notify their systems of the change.


##### Administrative update and record change workflow
<img style="vertical-align: top;" src="WF Record Change.svg" width="100%" /> 
 


#### Health screening automated process
1.	The health maintenance system runs on a weekly basis and has a rule that when a patient changes their gender identity, it generates an e-mail to schedule an annual health screening appointment and requests the patient complete an anatomic inventory in their health profile.
2.	Julie responds to the email by scheduling an appointment and completing the anatomic inventory.

##### Health screening automated process workflow
<img style="vertical-align: top;" src="WF Health Screening.svg" width="100%" /> 
 
#### Clinic appointment arrival and check-in
1.	Julie Smith, age 52, arrives at an outpatient clinic for her health screening appointment and is greeted at the registration desk. 
2.	The clerk asks for the patient's name and date of birth. 
3.	The patient provides the name, Julie Smith with her date of birth. 
4.	The clerk can find a patient in the appointment system with the name Julie Smith with a matching birthdate that has an appointment for today. 
5.	The clerk checks Julie in for her appointment. 

##### Clinic appointment arrival and check-in workflow
<img style="vertical-align: top;" src="WF CheckIn.svg" width="100%" /> 


#### Patient encounter and examination
1.	Julie proceeds with her annual appointment with her physician, Dr. Jones. 
2.	Upon starting the visit with Julie, Dr. Jones reviews the anatomic inventory questions with Julie, and it is noted that the patient has a prostate.
3.	Based upon this updated information, the system notes Julie’s age is over 50 and she has an anatomic inventory with prostate present and no prostate exam or PSA value in the past 10 years. The EHR alerts Dr. Jones that a prostate exam and/or a PSA should be considered for the patient.
4.	Dr. Jones reviews this recommendation with Julie and they agree a prostate exam should be performed as part of the examination.
5.	Before the examination, Dr. Jones asks Julie about the medications she is taking regularly and on an as-needed basis. 
6.	Julie informs Dr. Jones that she is utilizing an estrogenic therapy regimen. 
7.	During the examination of her prostate, Dr. Jones notes a nodule on the prostate.
8.	After a discussion with the patient, Dr. Jones enters a lab order for a PSA quantitative test and includes an SPCU code of male-typical	with display "Apply male-typical setting or reference range", noting in the comment field that the patient has a prostate. 
9.	The order is transmitted to the lab system. 
10.	Julie proceeds to the lab department where she is checked in by her name and the lab technicians use her appropriate pronouns of she/her/hers as indicated in the record. Her blood specimen is collected, and the PSA test is performed by the lab.

##### Patient encounter and examination workflow
<img style="vertical-align: top;" src="WF Examination.svg" width="100%" />
 
#### Review of lab results 
1.	The next day, Dr. Jones reviews the results of Julie Smith’s PSA. 
2.	A PSA of 3.0 ng/ml is resulted with a reference range of normal as 0-4.0 ng/ml for Julie’s age. 
3.	However, upon opening the result Dr. Jones is notified of a comment on the result: “Patients on testosterone suppressing medications, the upper limit of normal for the PSA should be reduced to 1.0 ng/ml.” 
4.	Dr. Jones reviews Julie Smith’s previous testosterone levels, discusses the results with Julie, and together they decide to schedule her for additional testing based upon the specific situation noted for this PSA result.

##### Review of lab results workflow
 ![Review of lab results workflow](WF Results SVG.svg)

## References
1.	Wesp, L. “Prostate and testicular cancer considerations in transgender women.” UCSF Trangender Care, https://transcare.ucsf.edu/guidelines/prostate-testicular-cancer. Accessed July 15, 2022.
2.	Bertoncelli Tanaka, M., Sahota, K., Burn, J., Falconer, A., Winkler, M., Ahmed, H.U., Rashid, T.G. (2022), Prostate cancer in transgender women: what does a urologist need to know?. BJU Int, 129: 113-122. https://doi.org/10.1111/bju.15521 (full article location: https://bjui-journals.onlinelibrary.wiley.com/doi/epdf/10.1111/bju.15521)




---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/hl7v2examples.md


<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment



-->

### V2 Examples

#### [DICOM PET scan in patient with change in gender](v2dicom_use_case.html)

#### [Health Screening with lab test in patient with change in gender](v2health_maintenance_use_case.html)



---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/hl7v2genderharmony.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2432         Joanie Harper                Fixed 3 typos per the Jira ticket https://jira.hl7.org/browse/OTHER-2432
2023-06-16       OTHER-2433         Joanie Harper                Fixed typo per the Jira ticket https://jira.hl7.org/browse/OTHER-2433
2023-06-16       OTHER-2431         Joanie Harper                Fixed typo per the Jira ticket https://jira.hl7.org/browse/OTHER-2431
2023-06-16       OTHER-2550         Joanie Harper                Changed patient specific to person specific per the Jira ticket https://jira.hl7.org/browse/OTHER-2550
2023-07-31       multiple           Rob McClure                  Updated to align with changes made by Riki. Removed ballot comments
2023-08-15       OTHER-2530         MaryKay McDaniel             Updated to align with changes made by Riki - file V2 md 2023 07 25 for Riki Changes
2023-08-16       spell/grammar chk  MaryKay McDaniel             row 27 FHIR, CDA. to FHIR and CDA, 136 added (SPCU) for consistency across pages in IG
-->

### Introduction to V2

HL7’s Version 2.x (V2) messaging standard is the workhorse of electronic data exchange in the clinical domain and arguably the most widely implemented standard for healthcare in the world. This messaging standard allows the exchange of clinical data between systems. It is designed to support a central patient care system as well as a more distributed environment where data resides in departmental systems. While the breadth of scenarios covered by the V2 standard means that not all messages will require support for Gender Harmony concepts (e.g. master file management, workflows and result automation) it can be expected that many of the V2 data exchange scenarios will need to convey Gender Harmony data. Existing integrations (either with or without clearly documented implementation profiles) are not automatically impacted by updates to the underlying base standard. That is, new concepts or approaches documented in later standards are not expected to automatically be adopted by existing integrations. 

### Design considerations for V2
Just like FHIR, V2 supports two approaches to conveying gender harmony concepts and either one can be pre-adopted into existing interface specifications based upon an earlier V2 version through the use of profile components (an equivalent to FHIR extensions). They are introduced here in the order in which they were developed:

#### [SOGI Observation-Based Data Exchange Profile](https://www.hl7.org/permalink/?SOGIGuidance)

During the COVID-19 pandemic some jurisdictions required the inclusion of Sexual Orientation (which is not in the current scope of this IG) and Gender Identity, collectively often referred to as SOGI, in result messages sent to Public Health known as Electronic Lab Reporting (ELR). While this solution was confined to the mechanisms available in the base standard at the time (V2.9) and created for use in ELR, we want to make clear that use of ELR for SOGI data during the pandemic should not be construed as an endorsement of requiring labs and other ELR submitters to collect and transmit this data, but rather recognition of the fact that it may be necessary in the immediate short-term to make this data available to Public Health, given that SOGI data is typically not collected by laboratories nor is it critical to performing and interpreting lab tests. In the longer term this data should come from the Electronic Health Record system (EHR-s) -- using the electronic case reporting standards that already include a profile (FHIR) and template (CDA) for Gender Identity which should be expanded to support other SOGI-related concepts, such as Sexual Orientation, and then used to convey this data to Public Health.

Because laboratories often don't have direct interaction with the patient, the specimen is often collected off-site and transported to the lab, collection of information discussed in this Gender Harmony IG may need to be performed by providers and transmitted to the lab via the ordering process. Where electronic order exchange (e.g. LOI) is used, this will require updates to the order message to include this content. Implementers will need to consider the necessary data collection workflows and work with providers and other patient-facing groups to collect and share this data with the labs. In order to support the laboratory use case requirement for gender information, the [SOGI Observation-Based Data Exchange Profile](https://www.hl7.org/permalink/?SOGIGuidance) describes the use of a PATIENT_OBSERVATION_GROUP consisting of an Observation (OBX) segment, a Participation (PRT) segment (if part of the used version of the standard) and a Comment (NTE) segment inserted in the respective message structures and covers rules for exchange of Sexual Orientation, Gender Harmony and Pronouns.

#### [Full Gender Harmony Concept Support](http://hl7.org/documentcenter/private/standards/V291_R1_202xmmm.zip)

The updates in the underlying V2 base standard in V2.9.1 match the gender harmony approach as represented in FHIR. This has been accomplished by defining person specific constructs in three (3) new segments that can be added to any message structure, where appropriate, which allows support to convey the person specific characteristics of gender identity, pronouns and sexual orientation (like the SOGI Observation-Based Profile). In addition this supports Recorded Sex or Gender not just for the patient but for other persons like the next of kin or personnel and the concept of Sex Parameter for Clinical Use for the patient.

Regardless of the method ultimately selected, the exchange of the person-specific gender harmony concepts (e.g. pronouns, gender identity) uses the same vocabulary (LOINC) in either GSP-4 or in OBX-3 and similarly, the value sets used for the answers in the segment GSP-5 or in OBX-5 shall be the same as in FHIR and CDA.

Additional attributes to support gender harmony related data exchange use the same vocabulary across product families.

### Outline of gender harmony artifacts in V2

The elements described in this profile match the FHIR extension paradigm as first published in the [HL7 Standard: Version 2.9.1 - An application Protocol for Electronic Data Exchange in Healthcare Environments ballot](http://hl7.org/documentcenter/private/standards/V291_R1_202xmmm.zip) (zip download) specifically in these sections:

- Name to Use: Chapter 3, PID – Patient Identification Segment (3.4.2)
- Gender Identity: Chapter 3, GSP – Person Gender and Sex Segment (3.4.19)
- Pronouns: Chapter 3, GSP – Person Gender and Sex Segment (3.4.19)
- Recorded Sex: Chapter 3, GSR – Recorded Gender and Sex Segment (3.4.20)
- Sex for Clinical Use: Chapter 3, GSC – Sex For Clinical Use Segment (3.4.21)
- Not part of Gender Harmony IG, but supported in V2: Sexual Orientation: Chapter 3, GSP – Person Gender and Sex Segment (3.4.19)

### Using the gender harmony artifacts for specific use cases
In V2 the context of segments is often derived from the placement in the message structure -- the following chapters in the [HL7 Standard: Version 2.9.1 - An application Protocol for Electronic Data Exchange in Healthcare Environments](http://hl7.org/documentcenter/private/standards/V291_R1_202xmmm.zip) address:

- Summary of update in V2.9.1 in Chapter 1
- Detailed description of the Gender Harmony related segments in Chapter 3:
  - For self-describing Gender Identity, Pronouns and Sexual Orientation: GSP – Person Gender and Sex Segment (3.4.19)
  - For Recorded Sex or Gender: GSR – Recorded Gender and Sex Segment (3.4.20)
  - For Sex for Clinical Use: GSC – Sex For Clinical Use Segment (3.4.21)
The above-described gender harmony artifacts should be added into the message structures in V2.9.1 based on the use cases:
- Use in Admission Transfer Discharge Use case in Chapter 3: 
  - Trigger Events and Message Definitions (3.3)
- Use in order messages in Chapter 4: 
  - OMG – general clinical order message (event O19) (4.4.4)TBD
  - OML – laboratory order message (event O21) (4.4.6)
  - OML – Laboratory order for multiple orders related to a single specimen (event O33) (4.4.8)
  - OML – Laboratory order for multiple orders related to a single container of a specimen (event O35) (4.4.10)
  - OML – Specimen shipment centric laboratory order (event O39) (4.4.12)
  - OMI – Imaging Order Message (Event O23) (4.4.14)
  - OPL – Population/Location-Based Laboratory Order Message (Event O37) (4.4.16)
  - OMQ – General Order Message with Document Payload (Event O57) (4.4.20)
  - OML – Laboratory Result Interpretation Request Message (Event O59) (4.4.22)
  - OMD - Dietary Order (Event O03) (4.7.1)
  - OMB – Blood Product Order Message (Event O27) (4.13.2)
  - BPS – Blood Product Dispense Status Message (Event O29) (4.13.4)
  - BTS – Blood Product Transfusion/Disposition Message (Event O31) (4.13.6)
  - Use in order messages in Chapter 4A: 
    - OMP - Pharmacy/Treatment Order Message (Event O09) (4A.3.3)
    - RDE - Pharmacy/Treatment Encoded Order Message (Event O11) (4A.3.6)
    - RDS - Pharmacy/Treatment Dispense Message (Event O13) (4A.3.8)
    - RGV - Pharmacy/Treatment Give Message (Event O15) (4A.3.11)
    - RAS - Pharmacy/Treatment Administration Message (Event O17)xe "RAS"xe "Message: RAS"xe "pharmacy/treatment"xe "pharmacy/treatment:administration message" (4A.3.14)
    - RDE - Pharmacy/Treatment Refill Authorization Request Message (Event O25) (4A.3.16)
    - RSP^K31^RSP\_K31 message in Pharmacy Query/Response Message Pair (4A.3.23)
  - VXU - Unsolicited Vaccination Record Update (Event V04) (4A.7.6)
- Use in result messages in Chapter 7: 
  - ORU – Unsolicited Observation Message (Event R01) (7.3.1)TBD
  - ORU – Unsolicited Point-Of-Care Observation Message without Existing Order – Place an Order (Event R30) (7.3.4)
  - ORU – Unsolicited New Point-Of-Care Observation Message – Search for an Order (Event R31) (7.3.5)
  - ORU – Unsolicited Pre-Ordered Point-Of-Care Observation (Event R32) (7.3.6)
  - OUL – Unsolicited Specimen Oriented Observation Message (Event R22 ) (7.3.8)
  - OUL – Unsolicited Specimen Container Oriented Observation Message (Event R23) (7.3.9)
  - OUL – Unsolicited Order Oriented Observation Message (Event R24) (7.3.10)
  - OPU – Unsolicited Population/Location-Based Laboratory Observation Message (Event R25) (7.3.11)
  - ORU – Unsolicited Alert Observation Message (Event R40) (7.3.12)
  - ORU – Unsolicited Device Event Observation Message (Event R42) (7.3.14)
  - ORU – Unsolicited Patient-Device Association Observation Message (Event R43) (7.3.15)
  - CRM - Clinical Study Registration Message (Events C01-C08) (7.7.1)
  - CSU - Unsolicited Study Data Message (Events C09-C12) (7.7.2)
  - PEX - Product Experience Message (Events P07, P08) (7.11.1)
- Use in Financial Management Messages in Chapter 6:
  - BAR/ACK – Add Patient Account (EVENT P01) (6.4.1)
  - DFT/ACK – Post Detail Financial Transactions (EVENT P03) (6.4.3)
  - BAR/ACK – Update Account (EVENT P05) (6.4.5)
  - DFT/ACK – Post Detail Financial Transactions - Expanded (EVENT P11)
- Use in Master files in Chapter 8:
  - Staff/Practitioner Master Files (8.7)
- Use in Medical Records in Chapter 9:
  - MDM/ACK - Original Document Notification (Event T01) (9.6.1)
  - MDM/ACK - Original Document Notification and Content (Event T02) (9.6.2)
  - MDM/ACK - Document Status Change Notification (Event T03) (9.6.3)
  - MDM/ACK - Document Status Change Notification and Content (Event T04) (9.6.4)
  - MDM/ACK - Document Addendum Notification (Event T05) (9.6.5)
  - MDM/ACK - Document Addendum Notification and Content (Event T06) (9.6.6)
  - MDM/ACK - Document Edit Notification (Event T07) (9.6.7)
  - MDM/ACK - Document Edit Notification and Content (Event T08) (9.6.8)
  - MDM/ACK - Document Replacement Notification (Event T09) (9.6.9)
  - MDM/ACK - Document Replacement Notification and Content (Event T10) (9.6.10)
  - MDM/ACK - Document Cancel Notification (Event T11) (9.6.11)
- Use in Scheduling in Chapter 10:
  - Schedule Requests: Placer Application Requests and Trigger Events (10.3)
  - Schedule Notifications: Filler Application Messages and Trigger Events Unsolicited (10.4)
- Use in Patient Referral in Chapter 11:
  - Patient Information Request Messages and Trigger Events (11.3)
  - Patient Treatment Authorization Requests (11.4)
  - Patient Referral Messages and Trigger Events (11.5)
  - Collaborative Care Messages and Trigger Events (11.6)
- Use in Patient Care in Chapter 12:
  - Patient Goal Message (Events PC6, PC7, PC8) (12.3.1)
  - Patient Problem Message (Events PC1, PC2, PC3) (12.3.2)
  - Patient Pathway Message (Problem-Oriented) (Events PCB, PCC, PCD) (12.3.)
  - Patient Pathway Message (Goal-Oriented) (Events PCG, PCH, PCJ) ()
- Use in Personnel Management in Chapter 15:
  - Add Personnel Record (Event B01) (15.3.1)
  - Update Personnel Record (Event B02) (15.3.2)
  - Query Information (Event Q25/K25) (15.3.7)
  - Example for Add Personnel Record - Event B01 (15.5.1)
- Use in eClaims in chapter 16:
  - EHC^E01 – Submit HealthCare Services Invoice (event E01) (16.3.1)

### Backwards compatibility of Gender Harmony artifacts

In order to use these new segments in earlier versions of HL7 (before V2.9.1) the data exchange partners have to agree to support this functionality by pre-adopting this profile component as part of their data exchange agreement and specifications.

#### GenderHarmony\_Component – ID: 2.16.840.1.113883.9.282

This profile component can be used in ANY message structure in ANY version, when data about gender identity, pronouns, a recorded Sex or a recorded gender, or sexual orientation and similar concepts need to be exchanged. It also supports the exchange of any necessary Sex Parameter for Clinical Use (SPCU) for the patient.

#### Details for implementation

##### Indicating use of this profile

Populate one occurrence of MSH-21 as follows: 'GenderHarmony^^2.16.840.1.113883.9.282^ISO'

###### Use of the Gender Harmony Specific Segments

Follow the segment definition, including the applicable vocabulary bindings, as described in V2.9.1. 

###### Rules for Inserting the Gender Harmony Segments into Existing Message Structures

In V2 the event context determines the message structure, and the location in the order of segments in the message provides context. So how / where these new segments are used depends on the context. This section is focused only on those events where Gender Harmony concepts are of importance, for patient related events, but also when important for next of kin or staff master files. 

The 3 Gender Harmony segments are related and will be inserted in patient specific messages as needed at the end of the patient identification (after the PD1 segment if it exists, otherwise after the PID segment), indicating that these concepts belong to the patient. All 3 segments must be optional and repeating. When placed in other message groups, for example following the Next of Kin (NK1) segment, the concepts are understood to relate to the person being described in the Next of Kin segment, though only the GSP and GSR segments are applicable in this context and should be added as optional and repeating.

### Guidance on use of Gender Harmony artifacts in systems

Additional Considerations when exchanging Gender Harmony concepts

SOGI data is sensitive personal information with significant privacy and security considerations. Before exchanging SOGI data, trading partners should understand all the local regulatory and policy considerations surrounding patient consent and sharing SOGI data. Guidance in the area of when to exchange SOGI data and the necessary privacy, security and consent requirements around exchanging SOGI data is beyond the scope of this group and is left to the implementers who understand the local requirements. 

Since V2 has been used for a long time, the field Administrative Sex (PID-8) V2 is different from the concepts described in the Gender Harmony IG. Definitions and how this element is used may vary by project, as the definitional text from V2.9 is somewhat at odds with the location in the administrative patient information segment:

Definition: This field contains the patient’s sex. Refer to User-defined Table 0001 - Administrative Sex in Chapter 2C, Code Tables, for suggested values. = <https://terminology.hl7.org/CodeSystem-v2-0001.html>

Due to the longstanding existence of this field, we have not changed the definition of this field, but rather ensure users understand that it should be used with care, while defining additional constructs to convey the more precisely defined attributes. 

When conveying additional SOGI concepts in a message, implementers must consider how the business requirements of the receiving system will be satisfied when consuming SOGI data elements. Depending on the use case, a hierarchy of data elements may need to be constructed in order to ensure that business requirements are met appropriately. For example, in a billing use case, if both PID-8 and Gender Identity are populated in a message, the receiving system may choose to prioritize PID-8 over Gender Identity based on the needs of the use case.


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/implementer.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-07-10       OTHER-2558         Cooper                       Added SPCU considerations
2023-08-27			NONE			Carol Macumber		Added note at top of page instructing implementers to use product specific jira projects to propose changes to FHIR, CDA or V2.
2023-08-27       OTHER-2452         Rob McClure                 Added new section Sex assigned at birth versus birth-focused Sex Parameter for Clinical Use
-->

Gender Harmony Implementer Considerations for HL7 Product Families

Note: Implementers should utilize product specific JIRA projects to propose HL7 product family specific changes. For convienence, they are linked here: [FHIR](http://jira.hl7.org/projects/FHIR), [V2](http://jira.hl7.org/projects/V2) and [CDA](http://jira.hl7.org/projects/CDA). Proposed changes to this Cross Paradigm Gender Harmony IG should be submitted [here](http://jira.hl7.org/projects/OTHER).

### Exchanging a Sex Parameter for Clinical Use
#### Patient Level Sex Parameter for Clinical Use
A Sex Parameter for Clinical Use (SPCU) may be used in specific clinical contexts, for example, when placing an order or when interpreting a result.  However, there are cases where having a context-free categorization of a patient can be useful, for example, when doing outreach for cervical cancer screening to patients for which you don't have access to any specific clinical information.  Or when you don't have access to the specific clinical information **yet**.
    
      
When using SPCU at a patient level, consider if any information is available suggesting that the patient is NOT male-typical or female-typical *across all clinical contexts*, then using **specified** as the patient-level SPCU is most appropriate, as that indicates that individuals or systems providing care should either use default behavior that is safe for both male and female populations, individually review treatment options with the patient, or carefully inspect comments and relevant observations before proceeding with treatment.   Additionally, consider if there are any risks related to patient care or equitable treatment when using a patient-level SPCU.  For example, when bifurcating a cohort based on a patient-context SPCU for research, carefully consider which groups may be inappropriately categorized.

#### Sex Assigned at Birth versus birth-focused Sex Parameter for Clinical Use
Describing the patient's anatomical sex at birth can be done using a Sex Parameter for Clinical Use, with a period indicating it was captured at (or around) the birth of the child.  That same determination may also be communicated as the specific observation "Sex Assigned at Birth". While Sex Assigned at Birth is often associated with the birth certificate, in certain jurisdictions this datum can be changed, and it may have legal connotations that differ from the clinical observations. The preferred international approach is to use SPCU associated with a relevant delivery episode. If that is not possible, some implementations may associate this directly to the patient. If Sex Assigned at Birth is in an implementation guide relevant to your use case and jurisdiction (e.g. US Core uses an extension on Patient), use of that profile or extension may be preferred.

#### Contextual Sex Parameter for Clinical Use
A Sex Parameter for Clinical Use (SPCU) may be used in specific clinical contexts, for example, when placing an order or when interpreting a result.  In these contexts, consider whether using a categorization such as Sex Parameter for Clinical Use is sufficient, or if using a more specific clinical observation such as an Observation about the presence or absence of an organ is most appropriate.  If a categorization is sufficient, then the [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html) extension may be added to the resource that best represents the context.  For example, if the context is a referral order or lab order, then the extension could be added to the ServiceRequest.
     

#### Sex Parameter for Clinical Use vs. Ask at Order Entry Questions
In some clinical scenarios, such as ordering workflows, "Ask at Order Entry" (AOE) questions are commonly used for capturing a broad range of clinical context.  Examples may be unrelated to sex or gender concepts, such as "Has the patient fasted for 24 hours?", but some may overlap or be adjacent to sex or gender concepts, such as "Is the patient pregnant?" or "Does the patient have a prostate?".  

Clinical experts should consider whether a contextual SPCU-level categorization is sufficient for the care being provided, or asking more specific questions is more appropriate.  If a contextual SPCU-level categorization is sufficient, then the SPCU may be treated as a specific type of AOE. Systems may also consider using a patient-level SPCU to pre-populate the answer to an AOE, allowing clinicians to change the setting where appropriate.
    
In this case, you may choose to exchange the recorded answer along with the other relevant AOEs, for example, in OBX segments in HL7v2 or Observations in FHIR.  Or you may choose to communicate the recorded answer in the dedicated SPCU structures, for example, in GSP segments in HL7v2, or in the patient-SexParameterForClinicalUse extension in FHIR. 

Using the SPCU-specific structures does let you communicate additional supporting information if that is relevant, but it also requires that receiving systems support and inspect two different structures (e.g., OBX and GSP) to gather all the relevant information AOE information.  This is a tradeoff that should be considered when authoring a use-case specific IG, or when coordinating an approach with your trading partners.  
       
#### Sex Parameter for Clinical Use vs. Anatomical Characteristics (Organ Inventory)
For many clinical contexts, the "ideal" information for clinical decision making would be the specific details about the patient's anatomical characteristics, such as whether the patient has a prostate.  However, even if clinical systems support discrete organ inventories, that information may be missing for a variety of reasons.  A patient might decline to provide detailed organ information for privacy reasons, or they may be incapable of providing the information, either because they are unconscious or have other communication issues.  An clinical end user may forget to collect the information from the patient, either because they are busy, or because they forgot.  A clinical system may electronically receive a copy of a patient's records from some other system that doesn't support the collection of discrete organ inventory.

For all of these reasons, and others, clinical systems will need to provide care to patients for which an organ inventory is incomplete or unavailable.  In those cases, using a Sex Parameter for Clinical Use as an alternative to an organ inventory will be necessary.  However, individuals or systems providing care should either use default behavior that is safe for both male and female populations, individually review treatment options with the patient, or carefully inspect comments and relevant observations before proceeding with treatment.


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/index.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2561         Joanie Harper                Fixed three instances of guide/ per the Jira ticket https://jira.hl7.org/browse/OTHER-2561
2023-06-19       OTHER-2562         RCM                          Improved formatting of In-scope section. fixed wording on CDA section https://jira.hl7.org/browse/OTHER-2562
2023-06-20       OTHER-2562         Rob M                        Added to out of scope   https://jira.hl7.org/browse/OTHER-2528
2023-07-26		 OTHER-2570			Carol Macumber				 Standardized the use of "Gender Harmony initial informative specification"  when referring to initial specification
2023-07-31       OTHER-2594         Joanie Harper                Update the "Our Goal" section per the Jira ticket https://jira.hl7.org/browse/OTHER-2594
2023-07-31       OTHER-2564         Joanie Harper                Added links for DICOM and X12 to "Vendors" section per the Jira ticket https://jira.hl7.org/browse/OTHER-2564
2023-07-31       OTHER-2421         Joanie Harper                Update the first sentence of the "Vendors" section per the Jira ticket https://jira.hl7.org/browse/OTHER-2421
2023-07-31       OTHER-2515         Joanie Harper                Update the name of the "Vendors" section to "HIT System solution providers" per the Jira ticket https://jira.hl7.org/browse/OTHER-2515
2023-08-20       OTHER-2602         Rob McClure                  Remove Notes to balloters
2023-08-21       OTHER-2532         Joanie Harper                Added links to the model page for the items that are In Scope
2023-08-29		NONE				Carol Macumber				Final read through of page, updated reference to informative GH Model to use formal name, therefore reducing any possibility that it is confused with this IG whose name is "HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1"
2023-08-25       OTHER-2560         Sean Muir                    Improve footnote notation - used MD based footnote syntax
2023-08-29			none			Rob McClure					Clarified that this guide supersedes the original model
2023-09-04			none			Rob McClure				Changed the "Author" section to say "Implementation Guide Contributors" and then make a separate Author section noting TI, PA, SD, V2MG as true authors. Similar to other guides
2023-11-06							Rob McClure					Corrected spelling of "Russel" to Russell"
-->



 
<img style="vertical-align: top;" src="rainbowhands.png" width="100%" /> 

### Introduction
This universal-realm implementation guide describes the changes incorporated in HL7 product family specifications that are aligned with the [HL7 Informative Document: Gender Harmony - Modeling Sex and Gender Representation, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564) published in 2021. Based upon ballot comments and participant feedback, this publication and the associated V2, CDA, and FHIR specifications include minor improvements when compared to the logical model described in the 2021 specification. These changes are described in the [Model](model.html) section of this specification.

<br>
<br>
<br>
This implementation guide contains *Informative* content discussing the overall Gender Harmony Project (GHP) approach intended to provide definitive guidance on how to exchange clinical sex and gender affirming information using HL7 models. We also provide examples that align with that guidance. The content of this guide must be viewed as accompanying the gender harmony content within the product family-specific specifications found elsewhere. Each of these is described in more detail in other pages of this guide:
- [FHIR Core specification](fhirdesignbackground.html) - gender harmony defined extensions and value sets used by ***all*** specifications.
- [CDA](cdagenderharmony.html) - A companion pdf CDA template specification containing gender harmony-specific templates is published separately. When this guide was in ballot the CDA template pdf specification was embedded within this guide. It is now a distinct, separate specification.
- [V2](hl7v2genderharmony.html) - The V2.9.1 specification contains new segments used to convey gender harmony content. While not the preferred solution, the specification also describes how this information can be exchanged using existing V2x structures.

To accomplish our cross-paradigm goal, the guide provides:
- Introductory and background information, much drawn from previously published material.
- An overview on some of the design decisions that led to specific choices in modeling approach.
- Separate discussions for each of FHIR, V2x, and CDA product family enhancements that are intended to provide a consistent alignment with the Gender Harmony (GH) logical model, noting that the model described herein has had some minor improvements when compared to the initial 2021 model as a result of work done after the initial publication.
- The guide describes value sets and code systems needed for the GH model artifacts but does not define any of these artifacts. ALl value sets were initially specified as part of the FHIR work but all terminology artifacts are now published by HL7 at [**THO**](https://terminology.hl7.org/) (Terminology-HL7-Org).
- Examples that illustrate how to use the product family-specific enhancements in consistent ways to meet a use case.

Readers of this implementation guide are encouraged to review the entire guide even if their particular focus is on one product family implementation. They are also encouraged to review the background material abstracted from the original [HL7 Informative Document: Gender Harmony - Modeling Sex and Gender Representation, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564) provided in the [sex-gender background](background.html) section of this implmentation guide.

### Our Goal

As described in the original Gender Harmony logical model specification:

> Health care is increasingly turning to technology to help improve systems and processes to benefit patients and their health. Ongoing efforts supported by governing agencies and standards committees are responding to the demonstrated need through standards that allow for seamless integration of patient information between systems.

> It is imperative that both sex and gender vocabulary be formally integrated into clinical care because they are not interchangeable. Both influence health outcomes. Gender-marginalized individuals[^1] face significant barriers to adequate and culturally responsive healthcare, leading to numerous health disparities. By adopting structured data sets, agnostic systems will be better equipped to transmit (share) and accept data elements that will improve the accuracy of patient information. Furthermore, standardizing data enables information to be combined with other data sources used to evaluate clinical outcomes. While data collection and documentation are critical factors in clinical decision-making, these new data will also promote important dialogue between clinicians and patients. Ultimately, this will assist with improved quality of care, reduced clinician burden and less fragmentation of a person&#39;s clinical record.

Currently, it is common that a single data element is used to capture both sex and gender information, often assuming these two items are one unified idea. The goal of this specification is to firmly and irrevocably clarify that clinical sex characterization, where useful, is distinct from gender identity and when sharing of other sex or gender datums is important for interoperability, they be identified as a particular recorded sex or recorded gender. In addition, name to use and pronouns are critical information for affirming interactions. Central to the goal of this guide is to "harmonize" Hl7 standards and through that work we hope for consistency in clinical system representation of the specific data elements to be used for independent consideration of sex and gender.  The assessment of their differences promotes the health of women, men, and people of diverse gender identities of all ages. Implementing these changes can improve data accuracy for sex and gender information in health care systems.

### Scope

#### In-Scope

The consultative process that has produced this HL7 guide continues the work of the initial Gender Harmony project and reflects clinical end user needs on balance with contributors from 2SLGBTQIA+[^2]  organizations such as Fenway Health and active participants with lived experience from the United States and Canada. Vendors were included from Japan, Germany, India, and the United States.

The in-scope core list of specific gender and sex use-data elements described by the specification, are as follows:
The in-scope core list of specific gender and sex use-data elements described by the specification, are as follows:
1. [Gender Identity (GI)](model.html#gender-identity-gi)
2. [Sex Parameter for Clinical Use (SPCU)](model.html#sex-parameter-for-clinical-use-spcu)
3. [Recorded Sex and Gender (RSG)](model.html#recorded-sex-or-gender-rsg)
4. [Pronouns](model.html#pronouns) 
5. [Name to Use](model.html#name-to-use-ntu)

This guide builds upon the [HL7 Informative Document: Gender Harmony - Modeling Sex and Gender Representation, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564) by providing HL7 product family specific additions that define how to send the information noted above in:

##### FHIR
The FHIR core additions needed to support the GH model **are not** defined in this guide, instead they are found in FHIR R5 as extensions. See [FHIR Design Background](fhirdesignbackground.html)

This gender harmony guide contains:
1. Informative description of the FHIR additions.
2. A discussion of design decisions that led to the chosen approach.
3. A discussion of how to "pre-adopt" the R5 extensions into implementations of prior versions of FHIR.
4. Detailed FHIR examples based upon a common set of uses cases.

##### V2
The new V2 segments needed to support the GH model **are not** defined in this guide, instead they are found in the V2.9.1 specification.

This gender harmony guide contains:
1. Informative description of the V2 segment additions.
2. A discussion of design decisions that led to the chosen approach.
3. A discussion of how to "pre-adopt" the new v2.9.1 segments into implementations using prior version of V2.
4. Detailed V2 examples based upon a common set of uses cases.

##### CDA
The new CDA entry templates needed to support the GH model **are not** defined within this guide. Instead they are defined in the Describing Sex and Gender in CDA specification.

This gender harmony guide contains:
1. A general discuss of entry templates and how they may be used.
2. A discussion of design decisions that led to the chosen approach.
3. A discussion of how to include the new entry templates into current CDA-based implementations, including C-CDA.
4. Detailed CDA examples based upon a common set of uses cases.

##### Terminology Artifacts
No terminology artifacts are defined in this guide. 

1. Value sets and code systems needed for these artifacts **are not** defined in this guide, they are published at [**THO**](https://terminology.hl7.org/) and are used consistently across all product families.
2. Traditionally CDA artifacts *do not include* null-flavor codes within the "clinical content" value sets. The CDA community is questioning the usefulness of separating clinical information of "unknown" or "asked but chose to not disclose" from the clinical content value sets and placing this into "null-flavor" segments. This guide has elected to follow this emerging approach and use the same value sets in the Gender Harmony CDA templates as those used in the other product families. This harmonization of approach is an exciting alignment but does mean that our CDA templates contain values typically considered "null flavor" concepts.

##### Use Cases
The guide contains illustrative use cases and linked examples that exchange the same use-case patient information, but each using the proper new product-family-specific artifacts. 

#### Out-of-Scope

The Gender Harmony Project considered other data elements or attributes for the specification but has deferred those for consideration in other projects. These elements include:
1. Defining or modeling the representation of patient **sexual orientation**. Note the the V2.9.1 specification **does** include sexual orientation content. This guide considers the approach and value sets used in the V2.9.1 specification an excellent approach.
1. Titles, Honorifics and/or Salutations.
1. Representations of the provenance and qualifications needed for the collection of sex and gender identity information.
2. Privacy and Sensitivity of gender harmony related concepts. This topic is of vital importance for standards and implementations and while not addressed in this guide, we note that there is significant coverage of the negative outcomes when an individual's gender attributes are exposed (or used) incorrectly. We also note that there are sensitivity vocabulary in HL7 IGs that can be used to tag data that is "GENDER" sensitive. Additional work will be necessary to fully characterize how to best address this topic.

### Intended Audience

#### Government / Regulatory

Regulatory, legal and research organizations have a vested interest in a consistent approach to documenting sex, gender and related information not only for patient care purposes (primary/acute/tertiary care, lab/diagnostics, allied health, ADT/administration, insured/payor, etc.) but also for a wide range of research, social service integration, public health, population health, epidemiology, cancer staging and registry, and national/international medical record exchange purposes.

#### Standards Development Organizations (SDO)

Messaging and interchange standards developers and standardized terminology organizations play a role in implementing guidance around distinguishing, capturing, and sharing gender and sex information. Having all of these organizations subscribe to the guidance in this specification will assist to bridge the gap between technology and implementation requirements. 

#### HIT System Solution Providers

All the sex and gender information described in this document requires engaged review and implementation support from all HIT-system vendors (EHR, LIS, IS, governmental, etc.) to have a meaningful impact on patient care and clinical interactions. By including guidance for [V2](hl7v2genderharmony.html), [FHIR](fhirdesignbackground.html), [CDA](cdagenderharmony.html), and working closely with [DICOM](https://www.dicomstandard.org/), [X12](https://x12.org/), and others, we hope to enable adoption of the Gender Harmony approach across the vendor spectrum. Vendors are encouraged to incorporate the intent of the specification into the end-user workflow.

#### Researchers

Demographic information that identifies male/men or female/women participants is a core segmentation in study design. It is clear that the historical binary approach to sex and gender data capture has affected gender and sex analysis and reporting. Some research studies refer to this cohort variable as sex, some refer to it as gender. Though the notion of sex is recognized implicitly as an important factor in clinical research, more work is needed to standardize the way sex and gender are reported and elucidate the way these characteristics function independently and together to influence health and health care. Incorporating clear distinctions between sex and gender using the approach noted in this guide will help ensure more accurate and precise data analysis.

### Current State

For an analysis of the current state of sex and gender representation we encourage the reader to review the material included in the [HL7 Informative Document: Gender Harmony - Modeling Sex and Gender Representation, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564) published in 2021. 

Of particular note in HL7 models is the use of "Administrative Gender/Sex" as a core data element for sex or gender exchange. Given the lack of clarity and consistency in the use of this "administrative" element, and the lack of a well established clinical value of use for all populations, there has been inconsistency in understanding and significant concern regard proper patient care. This guide exists to improve upon that. 

### Implementation Guide Authorship

The material in this implementation guide is is crafted through the hard work and persistent determination of the [Gender Harmony project](http://hl7.me/GHP).

We are indebted to all members of the project, listed [here](https://confluence.hl7.org/display/VOC/Project+participants) who supported the creation of this implementation guide. In particular, the following organizations provided mission-critical administrative, technical and subject matter expertise for ballot resolution and publication: US Department of Veterans Affairs and Canada Health Infoway. 

#### Implementation Guide Contributors
- **Overall Authors and Editors**
    - Robert C. McClure (MD Partners, Inc), Carol Macumber (Clinical Architecture, LLC), Robert Horn (Fairhaven Technology), Lorraine Constable, Clair Kronk, and Joanie Harper (Canada Health Infoway)
- **V2 material**
    - Riki Merrick (Assoc. of Public Laboratories) and Craig Newman (Altarum)
- **CDA**
    - Jay Lyle (JP Systems, Inc.), Russell Ott (Deloitte Consulting LLP), Gay Dolin (Namaste Informatics), and Benjamin Flessner
- **FHIR**
    - Cooper Thompson (Epic)
- **Use Cases**
    - Robert Horn, Steven Nichols (GE), Riki Merrick, Cara Schlegel (ICF), and Joseph Bormel (Cognitive Medical Systems)
- **Supporting Resources Provided by the Department of Veterans Affairs**
	- Dr. Jonathan Nebeker, National CMIO and Executive Director of Clinical Informatics and Data Management Office (CIDMO)
	- Steven Brown, MD, Director, CIDMO Knowledge-Based Systems (KBS)
	- Christopher Shawn, Director KBS Standards & Interoperability(S&I)
	- Javon Hyland, Deputy Program Manager, KBS S&I
	- Ioana Singureanu MsCS, FHL7, Technical Lead KBS S&I
	- Rhonna Clark, Associate Technical Lead KBS S&I
	- Matt Greene, Policy Lead KBS S&I
	- Mary Kay McDaniel, Project Facilitator, Cognitive Medical
	- Sean Muir, Project Facilitator, Cognitive Medical

#### Authors

<style>
table, th, td {
  border: 1px solid black;
}
</style>
|Name|Role|Contact|
| :- | :- | :- |
|HL7 Terminology Infrastructure|Primary Sponsor|[TI Main Page](http://www.hl7.org/Special/committees/Vocab/index.cfm)|
|HL7 Patient Administration|Co-sponsor|[PA Main Page](http://www.hl7.org/Special/committees/pafm/index.cfm)|
|HL7 Structured Documents|Co-sponsor|[SD Main Page](http://www.hl7.org/Special/committees/structure/index.cfm)|
|HL7 V2 Management Group|Co-sponsor|[V2MG Main Page](http://www.hl7.org/Special/committees/v2management/index.cfm)|
|HL7 Financial Management|Co-sponsor|[FM Main Page](http://www.hl7.org/Special/committees/fm/index.cfm)|
|HL7 Orders & Observations|Co-sponsor|[OO Main Page](http://www.hl7.org/Special/committees/orders/index.cfm)|
|HL7 Patient Care|Co-sponsor|[PC Main Page](http://www.hl7.org/Special/committees/patientcare/index.cfm)|


#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}
### FootNote(s)

[^1]:A grouping term describing individuals who experience gender marginalization, meaning those individuals who belong to gender-related groups who are, or have been, systematically oppressed. Another term which is used to the same effect is people of marginalized genders.

[^2]:Typically, this initialism is taken as meaning Two-Spirit, lesbian, gay, bisexual, trans, questioning/queer, intersex, and asexual/aromantic/agender, and other umbrella sexual- and gender-marginalized groups (“+”), dependent on socio-cultural factors. This initialism (or any number of different initialisms) may be used differently by other individuals or groups at different times. Additionally, the term “queer” may be considered offensive by some individuals. The 2SLGBTQIA+ community needs to be seen as a diverse non-monolithic culture.




---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/labratory_use_case.md


<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment



-->

#### Use Case Description:
The Use Case below describes the process of a Care Manager identifying a patient in need of an annual visit including a scan for relevant Health Maintenance screenings, as well as the process of this patient’s clinic appointment for a transgender woman with lab testing as a result of a male organ-specific finding.
#### Actors:
People
- Care Manager
- Patient (Julie Smith)
- Clerk 
- Physician (Dr. Jones)
Systems, (using IHE Actor names)
- Care Management application (integrated with EHR)
- Clinic scheduling system
- Clinic registration system
- Clinic EHR
- Order entry system
- Lab information system
#### Scope Statement:
Use case covers health maintenance recommendations, clinic check-in/registration, clinic visit, order entry, and results.
#### Precondition(s):
- Patient ID has not changed
- Julie Smith arrives at an outpatient facility with an appointment under her previous name of “Jack Smith”
- Patient history, social history, medical history has already been captured upstream and are available in the facility's EHR
#### Workflow/Storyboard:
##### Care Manager task list review of a patient who is a transgender woman:
In this scenario, the Care Manager reviews a list of patients that have upcoming health maintenance screenings that need to be scheduled.
- The Care Manager is reviewing a list of patients in a time period appropriate for considering an annual health maintenance visit. 
- After completing the prior patient on the list, the Care Manager arrives at Julie Smith (the transgender woman used in this series of use cases). 
- The Care Manager has an application that is functionally integrated into the EHR which reviews the patients’ clinical features, including reviewing and validating an organ inventory. The organ inventory was updated following gender-affirming surgery, specifically vaginoplasty, and this information (presence of prostate) was sufficient to create a task (Resource Task) indicating that Julie Smith will require (or be offered and may refuse) a prostate screening by her PCP. 
- The task, Prostate Screening Exam is created with an SPCU = M, with supplementary information indicating that the presence of prostate warranted this SPCU value.
- The Care Manager’s work for Julie Smith includes and is completed by initiating the scheduling of a clinic appointment at which time the active tasks (including the prostate screening exam) will be performed. Note that a value of ‘M’ will at no point be attached to the patient record itself and no patient level SPCU will be set. [In some practice environments, a Prostate-specific Antigen PSA lab test may be deployed instead of the prostate exam. The service request for that lab will include an SPCU = M, also linked to the organ inventory value.]
##### Clinic appointment arrival and check-in
The Use Case below describes the process of a clinic appointment for a transgender woman with lab testing as a result of an organ-specific finding.
- Julie Smith arrives at an outpatient clinic for her health screening appointment and is greeted at the registration desk. 
- The clerk asks for the patient's name. 
- The patient provides the name, Julie Smith. 
- The clerk searches the clinic’s patient schedule by that name and does not find any current appointments. 
- The clerk then searches the patient database for Julie Smith and several patient names are returned by the system. 
- The clerk asks for the patient's date of birth and is unable to confirm the patient as there is not a Julie Smith with that date of birth. 
- The clerk asks Julie if she is a new patient with an appointment. 
- Julie replies that she may be under the name “Jack Smith”. 
- The clerk can find a patient in the appointment system with the name Jack Smith with a matching birthdate that has an appointment for today. 
- The clerk verifies Julie's address to confirm the patient and checks Julie in for her appointment. 
##### Updating patient name, gender, and pronouns
- After checking Julie in for her appointment, the clerk asks if Julie would like to update Name to Use in her record, if she would like to have “Jack Smith” removed from the record, and will explain how the name may be linked to healthcare coverage or other relevant documentation, which could result in an unanticipated outing of Julie’s status as a transgender woman. 
- The clerk will also explain that the provider who calls for her name in the waiting room will use Name to Use to call for her and asks if she would like to be called back as Julie Smith.
- Next, the clerk notes that the profile currently labeled as “Jack Smith” has a Gender Identity of “Male” in the system and asks Julie if she would like to go through the process of changing the system profile to reflect her Gender Identity and Third-Person Pronoun as well.  If Julie answers yes, the clerk asks if she would like to fill out the information herself (via a patient portal or some other device) or if she would like to dictate to the clerk the individual changes, with the clerk explaining some of the potential consequences of those changes.
- If Julie agrees to dictate changes to the clerk, the clerk enters edit mode in the patient registration system to record that the patient name Jack Smith is no longer active as of the current date minus one day or back-dated to a requested date (if Julie opts for it to not be removed from the system), or removes it entirely if Julie requests that change. 
- In either case, the clerk adds the new Name to Use of Julie Smith, along with any other relevant name-related variables, starting as of the current date or back-dating, depending on the above scenario.
- The clerk follows the same approach to update the pronouns to she/her/hers. The clerk asks what gender identity Julie wishes to be recorded and Julie answers “Female.” The clerk asks if “Male” should persist in the system. If Julie responds “yes”, the clerk records the prior gender in the system is inactive as of the day prior and enters the gender identity of Female starting as of the current date. If the answer is “no”, then the clerk removes the “Male” value entirely. The clerk also enters that the patient has an administrative gender of Female by the same mechanism.

##### Patient encounter and examination
- Julie proceeds with her annual appointment with her physician, Dr. Jones. 
- Before the examination, Dr. Jones asks Julie about the medications she is taking regularly and on an as needed basis. 
- Julie notes that she is transgender and is utilizing estrogenic therapy regimen. During the examination of her prostate, Dr. Jones notes a nodule on the prostate.
- After a discussion with the patient, Dr. Jones enters a lab order for a PSA quantitative test and includes an SPCU value of “Male”, noting in the comment field that the patient has a prostate. 
- The order is transmitted to the lab system. 
- Julie proceeds to the lab department where she is checked in by her name and the lab technicians use her appropriate pronouns of she/her/hers as indicated in the record. Her blood specimen is collected, and the PSA test is performed by the lab
##### Review of lab results 
- The next day, Dr. Jones reviews the results of Julie Smith’s PSA. 
- A PSA of 3.0 ng/ml is resulted with a reference range of normal as 0-4.0 ng/ml for Julie’s age. 
- However, upon opening the result, a clinical decision support message appeared for Dr. Smith that contained the message “Patients on testosterone suppressing medications, the upper limit of normal for the PSA should be reduced to 1.0 ng/ml.” 
- Dr. Jones reviews Julie Smith’s previous testosterone levels, discusses the results with Julie, and together they decide to schedule her for additional testing as a result of the high-level PSA result.

#### References
- Wesp, L. [Prostate and testicular cancer considerations in transgender women.](https://transcare.ucsf.edu/guidelines/prostate-testicular-cancer) UCSF Trangender Care Accessed July 15, 2022.
- Bertoncelli Tanaka, M., Sahota, K., Burn, J., Falconer, A., Winkler, M., Ahmed, H.U., Rashid, T.G. (2022), Prostate cancer in transgender women: what does a urologist need to know?. [BJU Int, 129: 113-122.](https://doi.org/10.1111/bju.15521) or [Full Article](https://bjui-journals.onlinelibrary.wiley.com/doi/epdf/10.1111/bju.15521)





---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/model.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2411         Joanie Harper                Added closing parentheses per the Jira ticket https://jira.hl7.org/browse/OTHER-2411
2023-06-16       OTHER-2586         Joanie Harper                Change field name from Jurisdiction to Issuer, added **Definition**, and put Cardinality on its own
                                                                   line per https://jira.hl7.org/browse/OTHER-2586
2023-06-16       OTHER-2587         Joanie Harper                update Source Field Name and Source Field Desription per Jira ticket https://jira.hl7.org/browse/OTHER-2587
2023-06-16       OTHER-2575         Joanie Harper                Added hyphens per Jira ticket https://jira.hl7.org/browse/OTHER-2575
2023-06-16       OTHER-2578         Joanie Harper                Updated SPCU section per Jira ticket https://jira.hl7.org/browse/OTHER-2578
2023-06-23       OTHER-2671         Rob McClure                  Changed all to SPCU or Sex Parameter for Clinical Use
2023-07-13       OTHER-2463         Cooper Thompson              Updated RSG model definition and other narrative
2023-07-13       V2-25452           Cooper Thompson              Removed international equivalent references
2023-07-17       OTHER-2557         Cooper Thompson              Clarified terminology expectations for RSG
2023-07-25		  OTHER-2708	    	Carol Macumber		 	     	  GI Usage Note change per OTHER-2708
2023-07-25       OTHER-2539	    	Carol Macumber		 		     GI Usage Note change per OTHER-2539
2023-07-26		  OTHER-2570			Carol Macumber				     Standardized the use of "Gender Harmony initial informative specification"  when referring to initial 
                                                                  specification
2023-08-08       OTHER-2577         Joanie Harper                update text per Jira ticket 
2023-08-08       OTHER-2585         Joanie Harper                update text per Jira ticket 
2023-08-08       OTHER-2420         Joanie Harper                update text per Jira ticket 
2023-08-08       OTHER-2625         Joanie Harper                removed sentence per Jira ticket 
2023-08-08       OTHER-2582         Joanie Harper                update text per Jira ticket 
2023-08-08       OTHER-2581         Joanie Harper                update text per Jira ticket 
2023-08-08       OTHER-2494         Joanie Harper                update text per Jira ticket 
2023-08-08       OTHER-2540         Joanie Harper                add links for minValueSets per Jira ticket 
2023-08-08       OTHER-2576         Joanie Harper                update text per Jira ticket 
2023-08-14       OTHER-2709         Joanie Harper                update text per Jira ticket 
2023-08-22       OTHER-2532         Rob McClure                  Clarify use of "sex or gender"
2023-08-22        various           Rob McClure                  Updated RSG description and Usage Notes to clarify that SAAB (and Administrative Gender) can be directly exchanged without "wrapping" in RSG template and as such they should be considered a conformant exchange of USCDI v4 "Sex"
2023-08-22        OTHER-2512        Rob McClure                  Confirmed removal of ICAO element and added explanation of change.
2023-08-22        OTHER-2589        Rob McClure                  Added section noting changes in the model when compared to original. Confirmed changes in bindings. provided links to binding strength definitions.
2023-08-28       OTHER-2569         Joanie Harper                update per Jira ticket -- still need links to V2 spec and CDA spec
2023-08-28       OTHER-2580         Joanie Harper                update Gender Harmony capitalization

-->

### Modeling Sex and Gender Representation

The World Health Organization (WHO) defines Sex as the "different
biological and physiological characteristics of males and females, such
as reproductive organs, chromosomes, hormones, etcetera" and Gender as
the "socially constructed characteristics of women and men, such as
norms, roles, and relationships of and between groups of women and men"
(WHO, 2020.) In clinical practice however, there can be a multiplicity
of contextual variants over a single time horizon, across multiple
applications and/or institutions where clinicians, vendors and interface
developers have been grappling to create their own electronic 'work
around' specification(s) to meet local and/or internal needs.

The gender-marginalized community has health care requirements that
demand improvements that will benefit all patients. This implementation
guide provides structural and semantic guidance to vendors and interface
developers to address these requirements.

The [HL7 Informative Document: Gender Harmony - Modeling Sex and Gender Representation, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564)  provides necessary constructs to more
accurately capture sex and gender identity along with associated context of use.
While the framework provides the necessary infrastructure, the specific
changes in individual standards to concretely specify actual implementable 
structures are detailed in separate specifications ([FHIR R5](http://hl7.org/fhir/extensions/extensions-Patient.html), [V2.9.1](https://hl7.org/documentcenter/private/standards/V291_R1_202xmmm.zip), [Representing Sex and Gender in CDA](http://www.hl7.org/permalink/?GenderHarmonyCDAIG), this implementation 
guide provides specific additional guidance and cross-paradigm use cases. 

In this document, and elsewhere, the phrase “sex or gender” is used to characterize data in which the contextual meaning of the the datum is unclear and its use is an acknowledgement that human discourse regarding this information is often equally unclear. Use of this phrase is not intended to mean a unification of information that is more clearly either Sex Parameter for Clinical Use (SPCU) or gender identity.

### Model Overview

The conceptual model outlines the data elements, element attributes,
terminology bindings and relationships that clarify the meaning and
context of the information presented to guide and inform changes within
operational standards. The Model has five (5) major elements independent
of other components that may also be part of the information model for a
Person: Gender Identity (GI), Sex Parameter for Clinical Use (SPCU), Recorded Sex
or Gender (RSG), Name to Use (NtU), and Pronouns.

With the exception of one addition (Recorded Sex or Gender attribute =
type with datatype = code or constrained text) and one deletion (International Equivalent Recorded Sex or Gender), the model included in
this implementation guide is exactly as it is in the published Gender Harmony
informative specification. The addition was made to clarify and cover
the original intent of Record Sex or Gender, including the ability to
specify the type or category of sex or gender that is recorded (e.g.,
Sex Assigned At Birth). The deletion was made in response to ballot feedback that the RSG value element is a CodeableConcept which supports "translation" of local code values to other (international) code systems. 

Each of the following sections is structured to align with the UML Model
in Figure 1 and provides a definition, description, usage notes (if
applicable), cardinality, and attributes (with recommended terminology
if applicable) for each model element.


<figure>
{%include 2023genderharmony.svg%}
<figcaption><b>Figure 1: Logical Model for Gender Identity and Sex</b></figcaption>
</figure>
<br clear="all" />


The gender harmony model sub-elements described below are sex or
gender information that may be context-dependent; in essence a sex
and/or gender context type. Some of these types are multi-valued based
in part on the need for independent, occasionally co-occurring, values
that are specific to particular contexts of use within that type. The
sensitivity of these situations heightens the importance of representing
this data in a way that supports masking and access restrictions. The
Sex Parameter for Clinical Use (SPCU) can also be affected by independent
co-occurring contexts of use. Depending upon the procedure ordered, drug
prescribed, or nature of a clinical report different SPCUs might be
chosen. This can be reflected in the mapping chosen for a patient for
specific clinical reasons. The medical record in an EHR system might
have one set SPCU, and different specific selected SPCUs chosen for
mapping to NCPDP for a drug prescription, to FHIR for an order, to HL7
v2.x for another order, and to DICOM for an imaging request. This will
be especially common during the transition period when some systems have
been upgraded and others have not.

The rules for these context dependent mappings are not defined in this
abstract information model. They depend upon the concrete capabilities
of the target system, and upon the specific clinical context at the
time. It will be normal to find that when there are many objects related
to a single patient (orders, reports, observations, etc.) that there are
different SPCU due to differences in the context of use. Information
about the context and reason for selection may be incorporated into the
link to observations or reports that are part of the SPCU, or in the
comment associated with Gender Identity.

### Updates to the model compared to original specification
With the exception of the following noted changes, the model included in this implementation guide matches the model in the published Gender Harmony informative specification.
#### Recorded Sex or Gender
- Addition of Recorded Sex or Gender attribute = type with datatype = code or constrained text
   -  This addition was made to align with the original context of the data exchanged as an RSG so that users may specify the type or category of sex or gender that is recorded (e.g., "Sex").
-  Removed the InternationalEquivalentRecordedSexOrGender element
   -  Reviewers agreed that explicit inclusion of the translation of the value to a code from International Civil Aviation Organization (ICAO) code system was not useful. Implementers that want to send this may do so as a translation of the primary value.


#### Pronouns
- Update of Pronoun binding strength to Example.
   -  The binding strength to the Pronoun value set was originally extensible. Reviewers agreed that this needed to be loosened to example across products to allow for greater flexibility in establishing a base set of jurisdiction appropriate pronouns. 

### Person

**Definition:** This is an abstract representing a person.

**Usage Note:** This class may be mapped onto a concrete class when 
implemented using a model with concrete classes representing a person 
where additional attributes can be added or existing attributes can be 
enhanced. In FHIR currently this would be the following resources: Person, 
Patient, Practitioner, and RelatedPerson

### Gender Identity (GI)

Gender Identity describes the identity of the person. This
is important in many social and cultural contexts. It might be missing,
as for an infant, or multi-valued in some cultures and specific
situations. The meaning, criteria, and implications of specific gender
identities is defined by the local culture and society. The terms used
to capture GI are expected to reflect the variations found in different
cultures and locations, so only a minimum value set is defined in the
logical model. Local terminology is expected to extend this value set.

**Source:** Person, self-reported only

**Definition:** An individual's personal sense of being a man, woman,
boy, girl, nonbinary, or something else. This datum represents an
individual's identity, ascertained by asking them what that identity is.

**Usage Note:** If the Person (such as a fetus, infant, or uncommunicative new patient) is unable to express a personal sense of being a man, woman, boy, girl or any point on the gender spectrum, gender identity may be recorded as Unknown. Unknown can be used in cases where parents do not want to specify a value but one must be recorded. Gender identity can be congruent or incongruent with one’s SPCU or RSG. Persons may identify using different terms at different times for various reasons, or use multiple identities simultaneously, depending on culture.

Given that the gender identity element supports representing multiple gender identities (cardinality is 0..n), individuals who identify as having both Male and Female gender identities (or any other combination) at the same time, each gender identity can be modeled with the same validity period. Alternatively, if implementers and/or systems prefer to use a single code, the gender identity value set is expected to be used as a minimum value set that can be extended to meet jurisdictional requirements. One possible concept that could be considered is bigender.

**Cardinality:** 0..n

#### Attributes: 

##### Gender Identity

-   Definition:  An individual's personal sense of being a man, woman,
boy, girl, nonbinary, or something else. This datum represents an
individual's identity, ascertained by asking them what that identity is.

-   Cardinality 1..1

-   Type: Code or constrained short text

-   Proposed Terminology:

    -   [minValueSet](http://hl7.org/fhir/StructureDefinition/elementdefinition-minValueSet): [Gender Identity](http://terminology.hl7.org/ValueSet/gender-identity) valueSet

    -   [binding Strength](http://hl7.org/fhir/R5/terminologies.html#strength): [extensible](http://hl7.org/fhir/R5/terminologies.html#extensible)

##### Validity Period 

-   Definition: The time frame during which this Gender Identity applies
to the person. May be just an initial dateTime.

-   Usage note: Validity period may be overlapping in the case of
multiple gender identities (such as for bigender persons, some
gender-fluid persons, and binary Two-Spirit persons who also identify as
both male and female).

-   Cardinality: 0..1

-   Type: duration or datetime

##### Comment 

-   Definition: Text to further explain the use of the specified gender
identity or identities.

-   Usage note: Content included may be related to social and/or
cultural context to be considered when using the Gender Identity,
particularly with overlapping active values.

-   Cardinality: 0..1

-   Type: long text

### Sex Parameter for Clinical Use (SPCU)

Sex Parameter for Clinical Use is provided for use in orders, observations, 
and other clinical uses. SPCU can be highly contextual and allows specific
considerations to be provided for potential automated uses and records.
Examples include:

-   A person with polycystic ovary syndrome can be identified in a blood
    work order so that their unexpected hormone levels can be properly
    reported and not rejected as invalid results.

-   A female to male transgender patient early in transition undergoing imaging 
wherein the device requires selection of either M or F to complete the set up 
would benefit from an imaging context-specific SPCU noting the patient needs to 
have the setup for “Female-typical”

There are many other situations involving tumors, resections, congenital
conditions (i.e., ovotestes), and transgender patients where SPCU can be
used to provide information that is needed to perform a procedure
properly. Many procedures need at least a "male" or "female"
specification (e.g., for radiation shielding). 

SPCU provides a general extendable structure. During the transition from 
old systems to new systems, and as medical technology and science evolve, 
the rules for SPCU selection and referenced clinical observations will 
change. As technology changes these business rules may change, and the 
ordering systems are expected to accommodate changes to the order filling 
systems. The gender harmony model enables adaptation of old systems and 
new technologies.

The SPCU, when used for a specific observation, describes a context that 
clarifies the settings or reference ranges for the observation. For example, 
the computation of glomerular filtration rate (GFR) based on blood chemistry 
may use formulas that are different for “male” and “female”. The SPCU for 
the GFR report can indicate which formula should be used in the computation 
of that result. In cases where there is a patient level SPCU, the patient 
level value can be used as a default (any specific use) value unless a 
specific SPCU for that observation has been specified, in which case, the 
specified SPCU should apply. The gender harmony model does not cover the 
description of the use of SPCU in type of observation, but the approach for 
each is the same.

**Definition**: A Sex Parameter for Clinical Use is a parameter that 
provides guidance on how a recipient should apply settings or reference 
ranges that are derived from observable information such as an organ 
inventory, recent hormone lab tests, genetic testing, menstrual status, 
obstetric history, etc. This property is intended for use in clinical 
decision making, and indicates that treatment or diagnostic tests should 
consider best practices associated with the relevant reference population.

**Usage Note(s)**: A sex category that supports context specificity,
derived from observable information, preferably directly linked to the
information this element summarizes (such as a comment or a linked data
observation) in order to clarify the context and resulting value. This
element is intended to characterize observations that align with or vary
from female or male when the observation(s) are intended for use in a
clinical activity. In some systems the SPCU value may be automatically
determined based on the medical record so that they match the recipient
system's needs.

There may be restrictions on specific protocols or for specific targets.
The value multiplicity for a specific protocol or target may be 1..1 or
0..1. The GH model does not specify how such restrictions should be
implemented. They should reflect the purpose of the communication and
the capabilities of the systems involved. This may require individual
site specific business rules to map a multi-valued SPCU into a single
value that is appropriate for this context.

The model supports multiple instances of SPCU to allow, when necessary, 
more than one concurrent SPCU for a patient. For example, there could be 
multiple procedure results, each identifying a context specific SPCU 
determination used to set the normal range used. For example an SPCU value 
and linked comment or specific observation could be summarized as “male, 
based on hormonal measurement.”

**Cardinality**: 0..n, Multiple instances of an SPCU can exist and each 
instance will have the attributes listed below.

#### Attributes: 

##### SPCU Category 

-   Definition: A parameter that provides guidance on how a recipient 
should apply settings or reference ranges that are derived from observable 
information such as an organ inventory, recent hormone lab tests, genetic 
testing, menstrual status, obstetric history, etc.

-   Cardinality: 1..1

-   Type: Code or constrained short text

-   Proposed Terminology:

    -   ValueSet: [SexForClinicalUseCategory](http://terminology.hl7.org/ValueSet/sex-parameter-for-clinical-use) valueSet

    -   [binding Strength](http://hl7.org/fhir/R5/terminologies.html#strength): [required](http://hl7.org/fhir/R5/terminologies.html#required)

##### Validity Period

-   Definition: Time frame during which this summary value applies to
the patient. May be just an initial dateTime.

-   Usage Note: Validity period may overlap among different SPCU values
based on procedure or process used to determine the value

-   Cardinality: 0..1

-   Type: duration

##### Comment

-   Definition: Text to further explain the context for this specific
SPCU categorization. 
-   Usage note: Content included may be related to
social and/or cultural context to be considered or additional
information related to the linked observations, particularly with
overlapping active values

-   Cardinality: 0..1

-   Type: long text

##### Linked Clinical Observation

-   Definition: Link to, or identifier of, the observation(s) or report(s) that
are used to determine the sex category value.

-   Usage Note: The specific implementation of these links will vary
based on the standard used. This GH model does not specify the encoding
mechanism for a link. It could be a DOI, a URL, a DICOM SCOORD-3D, etc.
The specific standards and implementations will specify this. The linked
information should clearly align with the chosen SPCU. For example, a
patient with an initial diagnosis of an intersex condition could have
supporting clinical observations specific to the diagnosis. Additional
information may be provided in the Comment attribute.

-   Cardinality: 0..n

-   Type: string

### Recorded Sex or Gender (RSG)

Recorded Sex or Gender information may originate from a physical or electronic document that was provided to a medical provider. This information may also originate from fields in medical systems that were initially populated using those documents, or via patient attestations.  The rules for collection of these documents and fields have varied significantly over time and place therefore  the relationship to current Gender Identity or Sex Parameters for Clinical Use may be unclear. 

The RSG model includes source information so that the definition of “X” in a driver’s license can be found if necessary and the jurisdiction can be recorded.


**Definition:**  Recorded Sex or Gender (RSG) information includes the various sex and gender concepts that are often used in existing systems but are known to NOT represent a Gender Identity, Sex Parameter for Clinical Use, or attributes related to sexuality, such as sexual orientation, sexual activity, or sexual attraction.

**Usage Note:** If a medical system needs to exchange a single internal field labeled “sex” which, over time, has been used to capture both sex and gender, Recorded Sex or Gender may be an appropriate way to exchange such data. 

It is understood that administrative gender, administrative sex, and sex assigned at birth are exchanged today, and when exchanged in this way the data should not be considered a representation of Gender Identity (GI) or Sex Parameter for Clinical Use (SPCU). It is expected that these concepts may continue to be exchanged using existing established methods without using RSG. But, when SAAB *is exchanged as an RSG entry* the "type” should be specified as “sex assigned at birth” or another regionally specific short text string. As a result of feedback from the Gender Harmony Project and in-line with the gender harmony model, the US Office of the National Coordinator (ONC) recognized in its Standards Bulletin (SB22-2), regarding the development and finalization of United States Core Data for Interoperability (USCDI) Version 3, that “the data element Sex (Assigned at Birth) is used to represent different concepts not necessarily associated with what is assigned at the time of birth, such as clinically relevant sex for labs or diagnostic imaging, as well as administrative sex as recorded on birth certificates and health forms.” As a result, ONC changed the name of the data element to “Sex” acknowledging the previous limitation to birth information documentation.

**Cardinality:** 0..n

**Guidance:**
When evaluating when and how to exchange sex or gender concepts, consider whether Gender Identity or Sex Parameters for Clinical Use may be better for the relevant use case.  If those concepts are not appropriate or available, then the following approach for exchanging Recorded Sex or Gender may be used:

1. Determine which sex or gender concept is relevant for the jurisdiction and use case.  For example, you might identify concepts such as:
   * Sex Assigned at Birth
      * For clinical purposes, consider whether Sex Parameters for Clinical Use may more accurately represent the patient’s relevant clinical status.
      * Sex Assigned at Birth may not reflect current clinical attributes of adults.
      * Understand that the Sex Assigned at Birth value in medical systems may not be the value recorded on the birth certificate at the time of birth due to operational and training issues around its collection.

   * Administrative Sex/Gender
      * For the purpose of communicating with a patient, consider whether Gender Identity may be more appropriate.
   * Legal Sex/Gender
   * Billing Sex/Gender
   * Etc.
2. Determine the best way to exchange this information between systems.  This could involve:
   * Using existing fields (and their associated terminology) such as:
      * Patient.gender in FHIR
      * PID-8, GT1-9, NK1-15 in HL7v2
      * Birth Sex Observation template or Patient.administrativeGenderCode in CDA
   * Creating jurisdiction or use case specific structures that are directly tied to the specific concept being exchanged, such as:
      * New jurisdictional or use case specific extensions for FHIR
      * [us-core-birthsex](http://hl7.org/fhir/us/core/StructureDefinition-us-core-birthsex.html)
	   * [us-core-sex](http://hl7.org/fhir/us/core/StructureDefinition-us-core-sex.html)
      * [ukcore-birthsex](https://simplifier.net/hl7fhirukcorer4/extension-ukcore-birthsex)
      * New template for CDA
   * Using a generic structure
      * The individual-recordedSexOrGender FHIR extension if available for the context in question
      * A FHIR Observation resource
      * OBX or GSR segments in HL7v2
      * Observation template in CDA


The value sets used to exchange Recorded Sex or Gender values are expected to be defined by the owner of the specific concept being exchanged.  For example, if you are exchanging the sex on the driver's license in a specific region, that region's driver registration authority would define the value set, and those values would be used in the exchange.  As such, creating new value sets to represent Recorded Sex or Gender values is not necessary and should be avoided.

#### Attributes: 

##### Source Recorded Sex or Gender 

-   Definition: The actual value found on the document. This may be in
any character set. For example, a Russian identity card might have the
value 'ж' for sex.

-   Cardinality: 1..1

-   Type: Code or constrained short text

Note that based upon ballot feedback, the proposed InternationalEquivalentRecordedSexOrGender element with values based upon the International Civil Aviation Organization (ICAO) code system is no longer included. Implementers may provide an ICAO translation to the value provided.


##### Type

-   Definition: The type or category of sex or gender identity that is recorded.

-   Cardinality: 0..1

-   Type: code or constrained text

##### Record Description

-   Definition: A short phrase that describes the document or record
that includes the sex or gender identity value. E.g., national ID card, birth
certificate, passport.

-   Cardinality: 0..1

-   Type: string

##### Acquisition Date

-   Definition: The date that the document was scanned, processed, etc.
to extract the sex or gender identity information.

-   Cardinality: 0..1

-   Type: datetime

##### Validity Period

-   Definition: The time frame during which the document is valid. May be just an
initial dateTime.

-   Cardinality: 0..1

-   Type: duration

##### Issuer

-   Definition: Jurisdiction or organization that issued the document.

-   Cardinality: 0..1

-   Type: string

##### Source Field Name

-   Definition: Name of the source field in the document for this Recorded 
Sex or Gender instance.

-   Usage Note: This may be in any character set. For example, on a Russian
identity card it could be 'Пол'.

-   Cardinality: 0..1

-   Type: string

##### Source Field Description

-   Definition: A description of the source field in the document for this 
Recorded Sex or Gender instance.

-   Usage Note: Further description of the source field to clarify
intent of meaning. This may be a link or an external reference. For
example, there is an international standard for the fields on an
international travel passport.

-   Cardinality: 0..1

-   Type: string

### Name to Use (NtU)

The Name to Use enables care providers to use the name that is chosen by
the person. This element may match but is distinct from a person's legal
name and is the appropriate name to be used in person-centered
healthcare conversations. Some cultures have very long names, and expect
that for all but mandatory legal situations, the person will use a more
manageable name. Jurisdictions have different rules and processes for
name changes, so there is often a mismatch that can be prolonged in
difficult situations.

**Definition:** Text attribute that provides the name that should be
used when addressing or referencing the patient.

**Usage Note:** This information is usually provided by the patient.
Depending on the standard applicable to an implementation, this might be
encoded within a Person/Patient Name field with an appropriate name type
qualifier but is independent of any other name type or name component.
This may be a nickname or formal name. Multiple cardinalities are
required to support changes in desired name over time, such as when a
patient desires a change in name to align with expressed gender identity. This
means a validity period and a comment attribute to allow text that can
be used to capture context for use of the name.

**Cardinality:** 0..n

#### Attributes: 

##### Name 

-   Definition: Name to Use when addressing or referencing the patient.

-   Cardinality: 1..1

-   Type: string

##### Validity Period

- Definition: The timeframe during which the Name is to be used. May
just include a start date.

-   Cardinality: 0..1

-   Type: duration

##### Comment

--  Definition: Text to further explain use of the Name. This may be
related to social and/or cultural context.

-   Cardinality: 0..1

-   Type: long text

### Pronouns

**Definition:** Pronoun(s) specified by the patient to use when
referring to the patient in speech, in clinical notes, and in written
instructions to caregivers.

**Usage Note:** Personal pronouns are words used instead of a noun or a
noun phrase used to refer to people. Understanding which pronoun(s) to
use when referring to someone is important for providing affirming
health care. Avoiding incorrect pronoun use and patient misgendering is
crucial in transgender and gender-diverse care. It is important to
reliably exchange personal pronouns that the individual has specifically
reported they want used. The information could be considered a primary
(first class) element associated with the demographic information for
the patient. However, it may require representation as an observation
about the patient. Local policy will determine how pronouns are chosen
for infants and other similar situations. Policy and local custom will
determine what to use when this attribute is not present, or when
multiple are present.

Different pronouns may be used in one care setting than another care
setting. The pronouns used in the work environment may be different than
those in the care setting. 

**Cardinality:** 0..n

#### Attributes: 

##### Pronoun 

-   Definition: The noun or a noun phrase used for the patient.

-   Cardinality: 1..1

-   Type: Code or constrained short text

-   Proposed Terminology:

    -   ValueSet: [Pronouns](http://terminology.hl7.org/ValueSet/pronouns) valueSet

    -   [binding Strength](http://hl7.org/fhir/R5/terminologies.html#strength): [example](http://hl7.org/fhir/R5/terminologies.html#example)

##### Validity Period

-   Definition: The timeframe during which the pronoun is to be used.
May just include a start date.

-   Cardinality: 0..1

-   Type: duration

##### Comment

-   Definition: Text to further explain use of the pronoun.

-   Usage Note: Multiple pronoun entries may exist and overlap as some
persons utilize multiple pronouns simultaneously or switch usage based
on context, familiarity, comfortability, and/or Gender Identity (for
instance, in the case of bigender or gender-fluid persons).

-   Cardinality: 0..1

-   Type: long text


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/standards-history.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
-->


### History of Sex and Gender in HL7 Standards
#### HL7v2 History

1. In HL7v2 2.3.1:
   * The PID-8 field was labeled as “Sex” 
   * The field definition was “This field contains the patient’s sex”.
   * Table 0001 was introduced with values for F, M, O, and U.  This table did not have a formal Value Set definition, or include definitions for the codes.
2. In HL7 v2.4:
   * The name of the PID-8 field was updated to be “Administrative Sex”.  
   * The field definition remained “This field contains the patient’s sex”.
   * Table 0001 was updated to include A-Ambiguous and N-Not applicable, but the table still had no formal Value Set definition.
3. In HL7 v2.7:
   * Chapter 2C was introduced for Code Tables, but no substantive changes were made to the sex codes or their definitions.
4. In HL7 v2.9:
   * The 0001 table was updated to identify a Concept Domain, Code System, and Value Set.
   * The Value Set was given a definition of “Concepts specifying a patient's sex for administrative purposes.”
   * A new code was added for X-Non-Binary.  This code included a usage note indicating that it was for jurisdictional use, and was driven by reporting requirements of some states in the US.  This was intentionally a stop-gap measure.  The HL7 meeting which added X-Non-Binary to table 0001 was the same meeting that initiated the Gender Harmony Project!

#### HL7v3 History
1. HL7v3 adopted Administrative Gender as a concept.

#### FHIR History
1. In FHIR DSTU1
   * A [Patient.gender property](https://hl7.org/fhir/DSTU1/patient-definitions.html#Patient.gender) was included with a definition, requirements, and comments.
   * Patient.gender was mapped to PID-8 in the [Mappings for HL7v2](https://hl7.org/fhir/DSTU1/patient-mappings.html#http://hl7.org/v2).
2. In FHIR DSTU2:
   * Additional [Patient.gender comments](http://hl7.org/fhir/DSTU2/patient-definitions.html#Patient.gender) were added suggesting the use of Observations (when available) rather than Patient.gender for clinical decision support.
3. In FHIR STU3:
   * The [Patient Gender section](http://hl7.org/fhir/STU3/patient.html#gender) was added with some guidance on representing patient gender.
4. In FHIR R4:
   * The [Patient Gender section](https://hl7.org/fhir/R4/patient.html#gender) was updated and renamed to include more guidance based on an increased volume of feedback from the community.
   * The [patient-genderIdentity](https://hl7.org/fhir/R4/extension-patient-genderidentity.html) extension was added to the core FHIR spec.
5. In FHIR R5:
   * The [Patient Sex and Gender section](https://hl7.org/fhir/patient.html#gender) was updated to align with the Gender Harmony project. 
   * The patient-genderIdentity extension was retired in favor of the [individual-genderIdentity](http://hl7.org/fhir/extensions/StructureDefinition-individual-genderIdentity.html) extension to account for Practitioner and other individuals.
   * The [patient-sexParameterForClinicalUse](http://hl7.org/fhir/extensions/StructureDefinition-patient-sexParameterForClinicalUse.html) extension was added.
   * The [individual-pronouns](http://hl7.org/fhir/extensions/StructureDefinition-individual-pronouns.html) extension was added.
   * The [individual-recordedSexOrGender](http://hl7.org/fhir/extensions/StructureDefinition-individual-recordedSexOrGender.html) extension was added.


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/terminology.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-06-16       OTHER-2553         Joanie Harper                Remove extra periods per the Jira ticket https://jira.hl7.org/browse/OTHER-2553
2023-07-10       OTHER-2641         Joanie Harper                Update first paragraph of Gender Identity description per https://jira.hl7.org/browse/OTHER-2641
2023-07-10       OTHER-2552         Joanie Harper                Update values in the Sex For Clinical Use section, to Male-typical and Female-typical 
                                                                   per https://jira.hl7.org/browse/OTHER-2552
2023-07-10       OTHER-2637         Joanie Harper                Add paragraph to the RSG section per https://jira.hl7.org/browse/OTHER-2637
2023-07-17       OTHER-2636         Joanie Harper                Updated Gender Identity section per https://jira.hl7.org/browse/OTHER-2636
2023-07-17       OTHER-2606         Joanie Harper                Updated the line about 'table 396' entries per https://jira.hl7.org/browse/OTHER-2606
2023-07-17       OTHER-2630         Joanie Harper                Updated note to balloters regarding v2.9.1 artifacts per https://jira.hl7.org/browse/OTHER-2630
2023-07-17       OTHER-2557         Joanie Harper                Removed references to ICAO in RSG section.  Added THO link to value set per https://jira.hl7.org/browse/OTHER-2557
2023-07-17       OTHER-2557         Joanie Harper                Updated text in general section as per https://jira.hl7.org/browse/OTHER-2409.  This removes references to rolling up
2023-08-24       OTHER-2602         MaryKay McDaniel             Commented out Notes to Balloters (just in case we want to leave it in...)
2023-08-29       none               Rob McClure                 Note that Carol M made many changes on 2023-08-28. today Fixed bolding. 
-->

> Words are singularly the most powerful force available to humanity. We can choose to use this force constructively with words of encouragement, or destructively using words of despair. Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate and to humble.
> 
> -Yehuda Berg

### General
Medical terminology and standards, as core parts of medical systems, are necessarily omnipresent in today’s biomedical landscape. They form an important cornerstone of almost all digital health technology utilized today around the world. However, despite their increasing importance to health care, medical terminology and standards rarely consider the ethical implications surrounding their existence. Many communities have been adversely affected by this lack of consideration, which this guide hopes to address in part by careful consideration to the terminology used when representing  sex and gender in clinical systems. The initial [Gender Harmony logical model publication](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=564) provides an in-depth discussion on issues regarding clinical sex and gender terminology, as does the [JAMIA publication](https://academic.oup.com/jamia/advance-article/doi/10.1093/jamia/ocab196/6382238?guestAccessKey=016faba4-edcc-4cbd-b5bc-27d3452d2ce1) "Gender harmony: improved standards to support affirmative care of gender-marginalized people through inclusive gender and sex representation" and we refer the interested reader to those documents for useful background.

A primary objective of this project is to create and collect terminology that will be used for the same purpose, within aligned models across all HL7 product families, and through that example, within non-HL7 standards as well. To meet that goal we have created value sets using well-known existing available code system standards that are freely available for use. Where this is not possible this guide includes new code systems that will be maintained by HL7. All value sets and code systems defined by the Gender Harmony project will be published at the primary HL7-wide terminology publication found at [terminology.hl7.org (known as THO.)](http://terminology.hl7.org) 

As an international standard, the Gender Harmony terminology is mostly focused on defining ***minimum required value sets.*** This means that implementers need to pay attention to the binding strength used when binding the value set noted. In most cases the value set will be bound *Extensible* (which in CDA would be *SHOULD*) which means that the values provided are to be used when sending information that is *scoped* or means the same as the values provided. It is very important to understand that only when the binding is *Required* (*SHALL* in CDA) are the values provided in the bound value set the only set to be used where one of the provided set **MUST** be sent (additional values can also be sent, but one from the value set needs to be included.) This means that for any binding other than Required, the concepts, codes, and even text that are not included in the defined value set **may be sent instead.** This guide assumes that jurisdictions will build upon the minimum set included in the defined value sets to produce operational value sets to be noted in jurisdictional guides or regulations. It is also noted that only text or codes from other code systems may be sent in conformant exchange when the value set is not bound Required. 

For all value sets bound EXTENSIBLE or PREFERRED, implementers are discouraged from mapping to one of the included concepts other codes that do not exactly match in meaning. By this we mean that if a patient uses some other word, or concept, to represent the exchanged information, such as gender identity of "non-conforming", the instance would consider this an additional concept that could be considered acceptable. In this case the instance would include the additional text or concept as the CodableConcept value and not also "roll-up" to a code provided in the minimum set. **Meanings in these domains can overlap and yet should always be considered distinct.**

### Gender Identity terminology (GI)
There are two different terminologies that are relevant for gender identity. The LOINC code [76691-5](https://loinc.org/76691-5/) identities the Gender Identity concept itself, while a value set using SNOMED codes can be used to represent the gender identities.

The [gender identity value set](http://terminology.hl7.org/ValueSet/gender-identity) in this guide is intended to be a minimum value set of commonly used values and it is expected and encouraged that specific jurisdictions or communities will use additional gender identity concepts that are relevant within their community. For example, in the United States, two-spirit may be included in the value set, while in South Asia, hijra may be included. The gender identity minimum value set is built using concepts from the [SNOMED CT International edition](https://terminology.hl7.org/NamingSystem-v3-snomed-CT.html) code system. [SNOMED International](https://www.snomed.org) has put significant effort into improving the representation of gender concepts and while that work is not complete, the concepts included in the gender identity value set represent affirming and useful representations of gender concepts. In addition the value set includes the HL7 null flavor UNK to be used if the gender is not known. We encourage comments on the use of the null flavor code system in this situation versus the Data Absent Reason (DAR) code system used in FHIR. Of particular interest is the difficulty for implementers moving from prior use of null flavor value sets to DAR.

Please note that CDA requires the use of value sets that do not include null flavor concepts, therefore the CDA entry templates bind to a separate "core" value set of SNOMED CT concepts, and that value set is used to build the overall gender identity minimum value set.

### Sex Parameter For Clinial Use (SPCU)
As noted in our JAMIA publication
> SPCU (previously SFCU) is a summary sex classification element based on one or more clinical observations such as an organ survey, hormone levels, and chromosomal analysis. SPCU can provide a “patient-level” summary clinical sex characterization value to be specified for any clinical order, result, or assessment. SPCU also allows users to specify different values for the same patient for specific clinical uses.

SPCU is intended as a replacement for the idea of "clinical sex" which most importantly brings a context-specific focus to the use of the SPCU value exchanged. The value provided **is not a general, use anywhere** value. Provision of "a clinical sex in all uses" has been found to be dangerously over-simplified. The SPCU exchange element exists to help align *current* system expectations for sex-classification reference ranges or system set-up settings to fill the gap between defined sex-characteristic aligned clinical observations that influence those settings, and the operational need to put in a binary sex value. In cases that need a sex-category to do a procedure or report a result, SPCU provides a method to exchange the needed summary sex classification value, along with the specific clinical observation used to determine the SPCU value. In addition to Male-typical or Female-typical, SPCU also provides an important additional value of **Specified** which is an indication that additional information should be available, or obtained from the patient/record to clarify any specific clinical information needed to make the clinical sex-related decision.

Because the three included values scope all possible values (plus a SPCU-specific unknown), the value set is bound REQUIRED/SHALL and only the values included are allowed. 

The code system used for this value set is the internal HL7 code system [Sex For Clinical Use](http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use).

The [Sex For Clinical Use](http://terminology.hl7.org/ValueSet/sex-parameter-for-clinical-use) value set is defined as part of the R5 FHIR Specification.

The LOINC code for the "observable encoding" of the Sex For Clinical Use is [99501-9](https://loinc.org/99501-9/)

### Pronouns
Pronouns are an important aspect of identity reference in many languages, and when used are often aligned with gender differences. The Gender Harmony project includes a minimal set of English language third-person personal pronouns as used by a person to enable affirming interactions during patient care. The provided minimal pronoun set is defined as a set of personal pronouns (subject and object pronouns) and their respective possessive pronoun(s), reflexive pronoun(s), and possessive determiner(s) (colloquially referred to as “possessive adjectives”). These values are specified by the patient for use in healthcare interactions, clinical notes, and in written instructions to caregivers. As is true of the other minimal value sets, those provided are to enable common exchange covering most of the need but are **not** a complete set and many patients will desire pronouns that are not included in this value set. Jurisdictions and regulators are strongly encouraged to add additional values to this minimal set. As is true for Gender Identity, overlapping sets are common but always distinct. 

The set chosen for this value set are derived from [LOINC](https://terminology.hl7.org/CodeSystem-v3-loinc.html) code system and are based upon the [Answer List](https://loinc.org/LL5144-2/) for the LOINC code [90778-2](https://loinc.org/90778-2/) "Personal pronouns - Reported"

The [Pronouns](http://terminology.hl7.org/ValueSet/pronouns) value set is defined in THO.

The LOINC code for the "observable encoding" of the Personal pronouns - Reported is [90778-2](https://loinc.org/90778-2/)

### Recorded Sex or Gender (RSG)
The RSG element is intended to support the exchange of any sex or gender recorded data that is not specifically known to be the gender identity or a needed SPCU. The element allows any code or text that is in the record to be sent as the "recorded value" so no value set or code system is defined for that element. We do provide a value set and use an external code system for sending an international equivalent value in addition to the actual recorded value.

When exchanging a Recorded Sex or Gender concept, it is expected that there are existing value sets that can be used.  For example, when using Recorded Sex or Gender to exchange Sex Assigned at Birth, a jurisdiction may have an existing value set for Sex Assigned at Birth, which would be used to exchange the value for the Sex Assigned at Birth as a Recorded Sex or Gender.

The [Recorded Sex or Gender](http://terminology.hl7.org/ValueSet/recorded-sex-or-gender-type) value set is defined in THO.

The LOINC code for the "observable encoding" of the Recorded Sex or Gender is [99502-7](https://loinc.org/99502-7/)

### Name to Use (NtU)
The name that should be used when addressing a person does not require any new terminology. Each HL7 product family already has a defined approach that can support this in exchanges. The Gender Harmony model only specifies how to do this in each family. For example in the FHIR specification, the [HumanName](https://build.fhir.org/branches/FHIR-29673-gender-harmony-updates/datatypes.html#HumanName) datatype would represent this with humanName.use = "usual".



---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/v2dicom_use_case.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-08-01      OTHER-2454          Rob M                        Used this ticket to update per changes in RM updates to SCT and SPCU value sets
2023-08-02      none                Rob M                        Fixed incorrect SPCU code system name

-->

### Registration of Name Change 
#### Using v2.9.1  
```
MSH|^~\&|||||20220715151029||ADT^A08|TwxxneTRWE9JGX4U2p3hCLJH|P|2.9.1
EVN||20220715151118||01^Patient Request^HL70062
PID|||patientID^^^^MR||Smith^John^^^^^NOUSE~Smith^Janet^^^^^N|||F|
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT|20220715
PV1||O
```
#### Using the pre-adoption profile in V2.5
```
MSH|^~\&|||||20220715151029||ADT^A08|TwxxneTRWE9JGX4U2p3hCLJH|P|2.5|||||||||GenderHarmony^^2.16.840.1.113883.9.282^ISO
EVN||20220715151118||01^Patient Request^HL70062
PID|||patientID^^^^MR||Smith^John^^^^^NOUSE~Smith^Janet^^^^^N|||F|
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT|20220715
PV1||O
```
### Order for imaging
#### Using v2.9.1
```
MSH|^~\&|||||20220715142240||OMI^O23|WSA5mY0UBuCGrytRTAFR8UWJ|P|2.9.1
PID|||patientID^^^^MR||Smith^John^^^^^N|||F|
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT
GSC|1|S||female-typical^Apply female-typical setting or reference range^SPCU||OBR^4||Hormonal treatment, use affirmed gender Cr reference ranges
ORC|NW
OBR||||241439007^PET heart study^SCT|||||||||||||||||||||||||||||||||||||||||82800-4^PET+CT Heart W contrast IV^LN
IPC|accessionNum|procedureID|studyInstanceUID|schProcedureStepId|PT^Positron emission tomography^DCM|122793^PET Myocardial Perfusion, Rest and Stress^DCM
```
#### Using the pre-adoption profile in V2.5
```
MSH|^~\&|||||20220715142240||OMI^O23|WSA5mY0UBuCGrytRTAFR8UWJ|P|2.5|||||||||GenderHarmony^^2.16.840.1.113883.9.282^ISO
PID|||patientID^^^^MR||Smith^John^^^^^N|||F|
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT
GSC|1|S||female-typical^Apply female-typical setting or reference range^SPCU||OBR^4||Hormonal treatment, use affirmed gender Cr reference ranges
ORC|NW
OBR||||241439007^PET heart study^SCT|||||||||||||||||||||||||||||||||||||||||82800-4^PET+CT Heart W contrast IV^LN
IPC|accessionNum|procedureID|studyInstanceUID|schProcedureStepId|PT^Positron emission tomography^DCM|122793^PET Myocardial Perfusion, Rest and Stress^DCM
```
### Result for imaging 
#### Using v2.9.1
```
MSH|^~\&|||||20220715142240||ORU^R01^ORU_R01|WSA5mY0UBuCGrytRTAFR8UWJ|P|2.9.1|
PID|||patientID^^^^MR||Smith^John^^^^^N|||F|
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT
GSC|1|S||female-typical^Apply female-typical setting or reference range^SPCU||OBR^4||Hormonal treatment, use affirmed gender Cr reference ranges
OBR|1|accessionNum||82800-4^PET+CT Heart W contrast IV^LN|||20220715142240||||
OBX|1|ST|55115-0^Request^LN||Imaging technique (protocol, contrast, radiotracer) described here||||||F|
OBX|2|FT|19005-8^Impression^LN||Report narrative goes here||||||F|
OBX|3|TX|55110-1^Conclusion^LN||Conclusion goes here||||||F|
```
#### Using the pre-adoption profile in V2.5
```
MSH|^~\&|||||20220715142240||ORU^R01^ORU_R01|WSA5mY0UBuCGrytRTAFR8UWJ|P|2.5|||||||||GenderHarmony^^2.16.840.1.113883.9.282^ISO
PID|||patientID^^^^MR||Smith^John^^^^^N|||F|
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT
GSC|1|S||female-typical^Apply female-typical setting or reference range^SPCU||OBR^4||Hormonal treatment, use affirmed gender Cr reference ranges
OBR|1|accessionNum||82800-4^PET+CT Heart W contrast IV^LN|||20220715142240||||
OBX|1|ST|55115-0^Request^LN||Imaging technique (protocol, contrast, radiotracer) described here||||||F|
OBX|2|FT|19005-8^Impression^LN||Report narrative goes here||||||F|
OBX|3|TX|55110-1^Conclusion^LN||Conclusion goes here||||||F|
```
 
	



---

File: repos/HL7_SLASH_fhir-gender-harmony/input/pagecontent/v2health_maintenance_use_case.md

<!-- Updates based on Jira tickets 
Date             Jira ticket        Updated by                   Comment
2023-08-01      none logged         Rob M                   Changes to align with V2 updates


-->

### Registration of Name Change
#### Using v2.9.1
```
MSH|^~\&|||||20220815151129||ADT^A01|Tw1244563214559JGX4U2p3hCLJH|P|2.9.1
EVN||20220815151118||01^Patient Event^HL70062
PID|1||patientID1^^^^MR||Smith^Jack^^^^^NOUSE~Smith^Julie^^^^^N||19700103
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT|19700103^20220801
GSP|2|S||76691-5^Gender identity^LN|446141000124107^Identifies as female gender^SCT|20220801
GSP|3|S||90778-2^Personal pronouns - Reported^LN|LA29518-0^He, Him, His, Himself^LN||20030201^20220801
GSP|4|S||90778-2^Personal pronouns - Reported^LN|LA29519-8^She, Her, Hers, Herself^LN|20220801
PV1||O
```
#### Using the pre-adoption profile in V2.5.1
```
MSH|^~\&|||||20220815151129||ADT^A01|Tw1244563214559JGX4U2p3hCLJH|P|2.5.1|||||||||GenderHarmony^^2.16.840.1.113883.9.282^ISO
EVN||20220815151118||01^Patient Event^HL70062
PID|1||patientID1^^^^MR||Smith^Jack^^^^^NOUSE~Smith^Julie^^^^^N||19700103
GSP|1|S||76691-5^Gender identity^LN|446151000124109^Identifies as male gender^SCT|19700103^20220801
GSP|2|S||76691-5^Gender identity^LN|446141000124107^Identifies as female gender^SCT|20220801
GSP|3|S||90778-2^Personal pronouns - Reported^LN|LA29518-0^He, Him, His, Himself^LN||20030201^20220801
GSP|4|S||90778-2^Personal pronouns - Reported^LN|LA29519-8^She, Her, Hers, Herself^LN|20220801
PV1||O
```
### Order of the PSA Laboratory Test
#### Using v2.9.1  
```
MSH|^~\&|||||20220815153129||OML^O21^OML_O21|Tw1244563asdderfd9JGX4U2p3hCLJH|P|2.9.1
PID|1||patientID1^^^^MR||Smith^Julie^^^^^N||19700103|
GSP|1|S||76691-5^Gender identity^LN|446141000124107^Identifies as female gender^SCT|20220801
GSP|2|S||90778-2^Personal pronouns - Reported^LN|LA29519-8^She, Her, Hers, Herself^LN|20220801
GSC|1|S||male-typical^Apply male-typical setting or reference range^SexParameterForClinicalUseCS||OBR^1||The patient has a prostate and is utilizing an estrogenic therapy regimen to suppress testosterone.
PV1||O
ORC|NW|911^ClinicOrderSystem|||||||20220815153120|||
PRT|by87765446t21h^ClinicOrderSystem|SP||OP^Ordering Provider^HL70912|^Jones^^^^^MD
OBR|1|911^ClinicOrderSystem||2857-1^Prostate specific Ag [Mass/volume] in Serum or Plasma^LN^^^^2.73
```
#### Using the pre-adoption profile in V2.5.1
```
MSH|^~\&|||||20220815153129||OML^O21^OML_O21|Tw1244563asdderfd9JGX4U2p3hCLJH|P|2.5.1|||||||||GenderHarmony^^2.16.840.1.113883.9.282^ISO
PID|1||patientID1^^^^MR||Smith^Julie^^^^^N||19700103|
GSP|1|S||76691-5^Gender identity^LN|446141000124107^Identifies as female gender^SCT|20220801
GSP|2|S||90778-2^Personal pronouns - Reported^LN|LA29519-8^She, Her, Hers, Herself^LN|20220801
GSC|1|S||male-typical^Apply male-typical setting or reference range^SexParameterForClinicalUseCS||OBR^1||The patient has a prostate and is utilizing an estrogenic therapy regimen to suppress testosterone.
PV1||O
ORC|NW|911^ClinicOrderSystem|||||||20220815153120|||^Jones^^^^^MD
OBR|1|911^ClinicOrderSystem||2857-1^Prostate specific Ag [Mass/volume] in Serum or Plasma^LN^^^^2.73
```
### Result of the PSA Laboratory Test
#### Using v2.9.1
```
MSH|^~\&|||||20220816103129||ORU^Ro1^ORU_R01|Tw1244563asdderfd2mnhdyhshCLJH|P|2.9.1
PID|1||patientID1^^^^MR||Smith^Julie^^^^^N||19700103|
GSP|1|S||76691-5^Gender identity^LN|446141000124107^Identifies as female gender^SCT|20220801
GSP|2|S||90778-2^Personal pronouns - Reported^LN|LA29519-8^She, Her, Hers, Herself^LN|20220801
GSC|1|S||male-typical^Apply male-typical setting or reference range^SexParameterForClinicalUseCS||OBR^1||The patient has a prostate and is utilizing an estrogenic therapy regimen to suppress testosterone.
PV1||O
ORC|NW|911^ClinicOrderSystem|000051^LabInfoSystem||||||20220815153120|||
PRT|by87765446t21h^ClinicOrderSystem|SP||OP^Ordering Provider^HL70912|^Jones^^^^^MD
OBR|1|911^ClinicOrderSystem|000051^LabInfoSystem|2857-1^Prostate specific Ag [Mass/volume] in Serum or Plasma^LN^^^^2.73|||202208151601|||||||||||||||202208151745|||F
OBX|1|NM|2857-1^Prostate specific Ag [Mass/volume] in Serum or Plasma^LN^^^^2.73||3.0|ng/ml^NanoGramsPerMilliLiter^UCUM|0-4.0 ng/ml|N^Normal^HL70078|||F||||||||202208151741
PRT|123487689^LabInfoSystem|SP||PO^Performing Organization^HL70912||||Clinic Lab One
PRT|123487690^LabInfoSystem|SP||POMD^Performing Organization Medical DirectorHL70912|^Goodfellow^^^^^MD|||||||||123 Example Street^^Example City^CA^94133
NTE|1||For patients on testosterone suppressing medications, the upper limit of normal for the PSA should be reduced to 1.0 ng/ml
SPM|1|^14MP000051&LabInfoSystem||119364003^Serum specimen^SCT|||||||||||||202208151601|202208151601
```

#### Using the pre-adoption profile in V2.5.1

```
MSH|^~\&|||||20220816103129||ORU^Ro1^ORU_R01|Tw1244563asdderfd2mnhdyhshCLJH|P|2.5.1|||||||||GenderHarmony^^2.16.840.1.113883.9.282^ISO
PID|1||patientID1^^^^MR||Smith^Julie^^^^^N||19700103|
GSP|1|S||76691-5^Gender identity^LN|446141000124107^Identifies as female gender^SCT|20220801
GSP|2|S||90778-2^Personal pronouns - Reported^LN|LA29519-8^She, Her, Hers, Herself^LN|20220801
GSC|1|S||male-typical^Apply male-typical setting or reference range^SexParameterForClinicalUseCS||OBR^1||The patient has a prostate and is utilizing an estrogenic therapy regimen to suppress testosterone.
PV1||O
ORC|NW|911^ClinicOrderSystem|000051^LabInfoSystem||||||20220815153120|||^Jones^^^^^MD
OBR|1|911^ClinicOrderSystem|000051^LabInfoSystem|2857-1^Prostate specific Ag [Mass/volume] in Serum or Plasma^LN^^^^2.73|||202208151601|||||||||||||||202208151745|||F
OBX|1|NM|2857-1^Prostate specific Ag [Mass/volume] in Serum or Plasma^LN^^^^2.73||3.0|ng/ml^NanoGramsPerMilliLiter^UCUM|0-4.0 ng/ml|N^Normal^HL70078|||F||||||||202208151741||||Clinic Lab One|123 Example Street^^Example City^CA^94133
NTE|1||For patients on testosterone suppressing medications, the upper limit of normal for the PSA should be reduced to 1.0 ng/ml
SPM|1|^14MP000051&LabInfoSystem||119364003^Serum specimen^SCT|||||||||||||202208151601|202208151601
```


---

File: repos/HL7_SLASH_fhir-gender-harmony/input/uml/gh-dicom-2.plantuml

@startuml

scale 320 width
scale 320 height

actor "John Smith" as patient
actor "Referring Physician" as referring
actor "Facility Clerk" as clerk
actor "Technologist" as tech
actor Radiologist as radiologist
participant "PET/CT Modality" as pet
participant "EHR" as EHR
participant "Image Manager/Archive \n DSS/Order Filler (RIS/PACS)" as PACS
participant "Dose Info Reporter" as dose
participant "AI Task Performer" as ai

group Precondition(s)
referring -> EHR : place order
rnote right #motivation: Example 01
clerk <-> patient : pre-register
clerk -> EHR : obtain insurance authorization
PACS -> PACS : retrieve relevant priors
radiologist -> EHR : assign protocol based on order
end

group Arrival and check-in
patient -> clerk : announce name
activate patient #whitesmoke
activate clerk #whitesmoke
clerk <-> EHR : find appointment(s)
clerk -> patient : confirm identity information
patient -> clerk : provide identity details
clerk <-> EHR : find patient appointment
clerk <-> patient : choose name change process
clerk -> EHR : update patient name
activate EHR #whitesmoke
EHR -> EHR : patient update
rnote right #motivation
*Local procedure deferrs updates for in-process studies.
*Study proceeds using personal communication with staff about pending updates.
*Updates will be applied when study is complete.
end note
clerk -> tech : notify of patient arrival and new information
activate tech #whitesmoke
deactivate clerk
end

group Patient Preparation
tech -> EHR : review order
tech -> EHR : check creatine results
tech -> patient : greet patient
tech <-> patient : patient interview
EHR -> PACS : patient update [RAD-12]
deactivate EHR
activate PACS #whitesmoke
rnote right #motivation: Example 02
tech -> tech : prep patient
tech <-> radiologist : confer on protocol modifications
activate radiologist #whitesmoke
deactivate radiologist
end

group Examination
pet -> PACS : query modality worklist [RAD-5]
activate pet #whitesmoke
PACS --> pet : modality worklist response
deactivate PACS
tech -> pet : adjust protocol
pet -> pet : acquire images
pet -> PACS : modality image stored [RAD-8]
activate PACS #whitesmoke
pet -> ai : modality image stored [RAD-8]
activate ai #whitesmoke
pet -> dose : store dose information [RAD-62]
deactivate PACS
activate dose #whitesmoke
dose -> dose : dose summary
tech -> pet : end exam
deactivate dose
deactivate pet
tech -> patient : release patient
deactivate tech
deactivate patient
end

group Analysis
ai -> ai : process images
ai -> PACS : evidence documents stored [RAD-43]
deactivate ai
activate PACS #whitesmoke
radiologist -> PACS : create ROI
end

group Report
radiologist -> PACS : dictate report narrative
radiologist -> PACS : sign report
deactivate radiologist
PACS -> PACS : apply deferred demographics update\nto images and report
PACS -> EHR : report 
deactivate PACS
referring -> EHR : view report
rnote right #motivation: Examples 03 (FHIR), 04 (v2), and 05 (CDA)
end

@enduml


---

