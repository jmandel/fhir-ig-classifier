File: repos/HL7_SLASH_davinci-vbpr/input/fsh/aliases.fsh

//US Core
Alias: $us-core-practitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $us-core-practitionerrole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $us-core-organization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization

//Base Resource
Alias: $Bundle = http://hl7.org/fhir/StructureDefinition/Bundle
Alias: $MeasureReport = http://hl7.org/fhir/StructureDefinition/MeasureReport
Alias: $Measure = http://hl7.org/fhir/StructureDefinition/Measure
Alias: $Group = http://hl7.org/fhir/StructureDefinition/Group

Alias: $ClaimTypeValueSet = http://hl7.org/fhir/ValueSet/claim-type

//VBPR aliases
Alias: $vbp-quality-measurereport = http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport
Alias: $vbp-measure-population = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population
Alias: $contractual-status = http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status

//DEQM
Alias: $DEQMSummaryMeasureReport = http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/summary-measurereport-deqm
//Alias: $CriteriaReference = http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-criteriaReference

//QM IG
Alias: $cqfmWeightExtension = http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight
Alias: $CQFMCompositeMeasure = http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/composite-measure-cqfm

//Code System and Value Set
Alias: $SOP = https://nahdo.org/sopt
//Alias: $mesure-population-cs = http://terminology.hl7.org/CodeSystem/measure-population
Alias: $coverage-type-cs = http://terminology.hl7.org/CodeSystem/v3-ActCode
//Alias: $measure-population-vs = http://hl7.org/fhir/ValueSet/measure-population

//Alias: $payerVS = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.3591

Alias: $measurereport-category = http://hl7.org/fhir/StructureDefinition/measurereport-category
Alias: $measurereport-category-CS = http://hl7.org/fhir/CodeSystem/measurereport-category

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/CS-CodeSystems.fsh

CodeSystem: VbpPerformanceMetricsCS
Title: "Performance Metric Codes"
Id: vbp-performance-metric
Description: "Type of value-based performance metrics."
* ^experimental = false
* #avg-risk-score "Average risk score" "Average risk score is a numeric score where a higher score indicates a riskier population on average. Example scores: 0.70, 1.00, 1.30."
* #avg-risk-score-market "Market average risk score" "The market average risk score."
* #capitation "Capitation" "Total capitation amount."
* #capitation-pmpm "Capitation per member per month" "Capitation per member per month (PMPM). Capitation is a fixed amount of money per patient per month paid in advance to the physician [or health care provider] for the delivery of health care services."
* #dental-capitation "Dental capitation" "Total dental capitation."
* #dental-capitation-pmpm "Dental capitation PMPM" "Total dental capitation per member per month (PMPM)."
* #reinsurance-capitation "Reinsurance capitation" "Total reinsurance capitation."
* #reinsurance-capitation-pmpm "Reinsurance capitation PMPM" "Reinsurance captitation per member per month (PMPM)."
* #ccf "Care coordination fee" "Care coordination fee (CCF) is per member per payments based on the number of patients that are assigned to primary care physicians."
* #goal-hcc-raf "Goal HCC RAF" "Goal or target hierarchical condition category (HCC) Risk Adjustment Factor (RAF)."
* #actual-hcc-raf "Actual HCC RAF" "Acutal hierarchical condition category (HCC) Risk Adjustment Factor (RAF)."
* #earnings-ccf "Earnings CCF" "Earnings from care coordination fees."
* #performance-ccf "Performance CCF" "Performance for care coordination fees."
* #potential-upside-ccf "Potential upside CCF" "Potential upside earnings for care coordination fees."
* #potential-downside-ccf "Potential downside CCF" "Potential downside earnings for care coordination fees."
* #earned-incentive "Earned incentive" "Earned incentive payment."
* #earnings-qip "Earnings QIP" "Earnings from quality incentive payments."
* #performance-qip "Performance QIP" "Performance for quality incentive payments."
* #potential-upside-qip "Potential upside QIP" "Potential upside earnings for quality incentive payments."
* #potential-downside-qip "Potential downside QIP" "Potential downside earnings for quality incentive payments."
* #earnings-ssl "Earnings SSL" "Earnings from shared savings surplus/loss."
* #performance-ssl "performance SSL" "Performance for shared savings surplus/loss."
* #potential-upside-ssl "Potential upside SSL" "Potential upside earnings for shared savings surplus/loss."
* #potential-downside-ssl "potential downside SSL" "Potential downside earnings for shared savings surplus/loss."
* #earnings-cap "Earnings capitated" "Earnings from capitated payments."
* #performance-cap "Performance capitated" "Performance for capitated payments."
* #potential-upside-cap "Potential upside capitated" "Potential upside earnings from capitated payments."
* #potential-downside-cap "Potential downside capitated" "Potential downside earnings for capitated payments."
* #quality-gate-percentage "Quality gate percentage" "% of payment tied to quality."
* #quality-gate-performance-percentage "Quality gate performance percentage" "% of shared savings can earn based on quality metric performance."
* #interim-pmt-rate "Interim payment rate" "Interim payment rate."
* #ibnr-pmpm "IBNR PMPM" "Incurred but not yet reported (IBNR) per member per month (PMPM)."
* #med-ibnr "Medical IBNR" "Estimated medical expenses incurred but not yet reported (IBNR)."
* #rx-ibnr "Pharmacy IBNR" "Estimated pharmacy expenses incurred but not yet reported (IBNR)."
* #med-rx-ibnr "Medical pharmacy IBNR" "Estimated medical and pharmacy expenses incurred but not yet reported (IBNR)."
* #revenue "Revenue" "Total revenues earned, which includes premiums and other resources that a payer receives."
* #revenue-pmpm "Revenue PMPM" "Revenue earned per member per month (PMPM)."
* #avg-revenue-pmpm-market "Market average revenue PMPM" "Average revenue per member per month (PMPM) for a market."
* #cost-target "Cost target" "Cost target."
* #admin-cost "Administrative cost" "A general term that refers to Medicare and Medicaid administrative costs, as well as CMS administrative costs. Medicare administrative costs are comprised of the Medicare related outlays and non-CMS administrative outlays. Medicaid administrative costs refer to the Federal share of the States' expenditures for administration of the Medicaid program. CMS administrative costs are the costs of operating CMS (e.g., salaries and expenses, facilities, equipment, rent and utilities, etc.). These costs are reflected in the Program Management account."
* #rx-cost "Pharmacy cost" "Total amount of the pharmacy cost."
* #rx-cost-target "Pharmacy cost target" "The goal or target pharmacy spend level as specified by a value-based contract below which savings are generated, often represented as a percent of total revenue."
* #rx-cost-pmpm "Pharmacy cost PMPM" "Pharmacy cost per member per month (PMPM)."
* #rx-cost-pmpm-target "Pharmacy cost PMPM target" "The goal or target pharmacy spend level per member per month (PMPM) as specified by a value-based contract below which savings are generated, often represented as a percent of total revenue."
* #med-cost "Medical cost" "Total amount of the medical cost."
* #med-cost-target "Medical cost target" "The goal or target medical spend level as specified by a value-based contract below which savings are generated, often represented as a percent of total revenue."
* #med-cost-pmpm "Medical cost PMPM" "Medical cost per member per month (PMPM)."
* #med-cost-pmpm-target "Medical cost PMPM target" "The goal or target medical cost per member per month (PMPM)."
* #med-cost-fund "Medical cost fund" "Total dollars available for medical spend calculated using the medical cost target relative to estimated revenue."
* #avg-med-cost-fund-market "Market average medical cost fund" "The market average medical cost per member per month (PMPM) over revenue PMPM."
* #med-rx-cost "Medical pharmacy cost" "Total spend on medical and pharmacy cost for a specified population."
* #med-rx-cost-target "Medical pharmacy cost target" "Target spend on medical and pharmacy cost for a specified population."
* #med-rx-cost-pmpm "Medical pharmacy cost PMPM" "Total spend on pharmacy cost for a specified population represented on a per member per month (PMPM) basis."
* #avg-med-rx-cost-pmpm-market "Market average medical pharmacy cost PMPM" "The market average medical pharmacy cost per member per month (PMPM)."
* #variance-cost "Variance cost" "How much actual costs vary from projected (target) costs."
* #med-loss-ratio "Medical loss ratio" "The Medical Loss Ratio (MLR) is the proportion of premium revenues spent on clinical services and quality improvement."
* #med-loss-ratio-target "Medical loss ratio target" "The goal or target medical spend level relative to revenue as specified in a value-based care contract, often represented as a percent of revenue."
* #med-expense-ratio "Medical expense ratio" "Medical expense ratio."
* #med-expense-ratio-pmpm "Medical expense ratio PMPM" "Medical expense ratio per member per month (PMPM)."
* #member-months "Member months" "Total member months in a given period."
* #med-member-months "Medical member months" "Total medical member months in a given period."
* #rx-member-months "Pharmacy member months" "Total pharmacy member months in a given period."
* #adjusted-paid-claim "Adjusted paid claim" "Adjusted paid claim, excludes catastrophic claims."
* #annual-care-visit-bonus "Annual care visit bonus" "Bonus to qualified annual care visit (ACV). A type of quality incentive payment."
* #avg-star-rating-bonus "Average star rating bonus" "Bonus earned when achieve a certain Average Star Rating. A type of quality incentive payment."
* #avg-star-rating-improvement-bonus "Average star rating improvement bonus" "Bonus earned when achieve improvement performance year over year based on average star rating. A type of quality incentive payment"
* #quality-metric-performance-incentive "Quality metric performance incentive" "Quality metric performance incentive payment is a type of quality incentive payment."
* #quality-pmt-chronic "Quality payment chronic disease management" "Quality payment chronic disease management."
* #quality-pmt-office-visit "Quality payment annual office visit" "Quality payment annual office visit."
* #shared-saving-deficit "Shared saving deficit" "The amount of shared saving deficit."
* #weighted-avg-star "Weighted average star" "The average quality score across a specified set of measures, weighted by importance of the individual measures for a specific population. Often used in relation to CMS Medicare Star rating reports, e.g., where medication adherence measures are 3x weighted relative to other quality measures in the set."
* #condition-count "Condition count" "The number of conditions."
* #1-gap-closed "1 gap closed" "Number of members with 1 closed gap."
* #2-gap-closed "2 gaps closed" "Number of members with 2 closed gaps."
* #paid-claim "Paid claim" "Total paid claim amount."
* #paid-claim-pmpm "Paid claim PMPM" "Paid claim per member per month (PMPM)."
* #drg-expense "DRG expense" "Total diagnosis related group (DRG) expense."
* #drg-expense-pmpm "DRG expense PMPM" "Diagnosis related group (DRG) expense per member per month (PMPM)."
* #provider-quality-expense-pmpm "Provider quality expense PMPM" "Provider quality expense per member per month (PMPM)."
* #subrogation-pmpm "Subrogation PMPM" "Subrogation per member per month (PMPM)."
* #avg-member-office-visit "Average members with office visit" "Average number of members with office visit."
* #ed-visit "ED visit" "Total number of Emergency Department (ED) visits."
* #eligible-member "Eligible members" "Total number of eligible members."
* #inpatient-acute "Inpatient acute" "Total number of inpatient acute stays."
* #inpatient-admission "Inpatient admission" "Total number of inpatient admissions."
* #nurse-hotline "Nurse hotline" "Total number calls of the nurse hotline."
* #nurse-hotline-pmpm "Nurse hotline PMPM" "Total nurse hotline per member per month (PMPM)."
* #snf-avg-los "Skilled Nursing Facility average length of stay" "The number of skilled nursing facility average length of stay."
* #readmission "Readmission" "Total number of readmissions"
* #snf-admission "Skilled Nursing Facility admission" "Total number of skilled nursing facility admissions."
* #provider-quality-expense "Provider quality expense" "Total provider quality expense."
* #subrogation "Subrogation" "Total subrogation amount."
* #avg-membership "Average membership" "Average membership."
* ^caseSensitive = true

CodeSystem: PaymentStreamCS
Title: "Payment Stream Codes"
Id: payment-stream
Description: "Payment stream defined in a value-based contract. A value-based contract may contain multiple payment streams."
* ^experimental = false
* ^hierarchyMeaning = #is-a
* ^caseSensitive = true
* #ccf "Care coordination fee" "A payment model that providers are paid a per member per month (PMPM) incentive payments on a specific schedule."
* #ccf-with-risk "Care coordination fee with risk adjustment" "A payment model that providers are paid a per variable member per month (PMPM) incentive payments on a specific schedule based on risk."
* #eoc "Episode of care" "Episodes-of-care refers to an all-inclusive health-and-payment model in which a single, bundled payment includes all services associated with the treatment for an illness, condition or medical event rather than a separate fee-for-service model."
* #pcpcp "Primary Care Physician (PCP) capitation payment" "Capitation is a payment arrangement for health care services in which an entity (e.g., a physician or group of physicians) receives a risk adjusted amount of money for each person attributed to them, per period of time, regardless of the volume of services that person seeks."
* #ssq "Shared savings gated on quality" "Shared saving is a value-based model designed to reward health care providers who improve patient care while contributing to an overall reduction in cost. Shared savings gated on quality includes a set of quality measures that serve as a quality gate in which participants must exceed an established minimum target in order to participate in savings."
* #ssl "Shared savings loss percent" "A two-sided shared saving value-based model that provides two-sided payment and risk to a provider. To be liable for shared losses, providers must meet or exceed a prescribed minmum loss rate (MLR). Once this MLR is met or exceeded, the providers will share in losses at a rate determined by its quality performance up to a loss recoupment limit (also referred to as a loss-sharing limit)."
* #ssp "Shared savings percent" "A one-sided shared saving value-based model with no risk to a provider. Providers must meet or exceed a prescribed minimum savings rate (MSR), fulfill the minimum quality performance standards, to qualify for the shared savings."
* #tcoc "Total cost of care" "The payer determines the benchmark expected costs for a population attributed to a provider over a time period, the provider offers care to the population, and the payer shares some proportion of the savings in the actual costs incurred (the Total Cost of Care or TCOC) relative to the benchmark – adjusted by whether the provider met quality goals."
* #qip "Quality incentive payment" "Quality Incentive Payment (QIP) is designed to improve patient outcomes, service provider performance, and service quality. QIP is any incentive payment based on quality. Stars Incentive Payment (SIP), Star Score Threshold (SST), Pay for Reporting (P4R), Pay for Performance (P4P), Chronic Disease Management (CDM), Annual Health Assessment (AHA), Ulitization Incentive Payment (UBIP) are examples of QIP."
  * #aha "Annual health assessment" "This payment model pays either a per variable member per month (PMPM) for each attributed based on the percentage or pays each member who has a recorded Annual Health Assesment."
  * #cdm "Chronic Disease Management" "A payment model tha pays extra for members with chronic conditions. Chronic disease management programs are structured treatment plans that aim to help people better manage their chronic disease (e.g., diabetes, asthma, hypertension), and to maintain and improve quality of life. It is an effort to improve care quality, promote self-management, and reduce costs for patients with one or more chronic conditions." 
  * #p4r "Pay for reporting" "A payment model that is based on pay for reporting quality measure data. There is no min performance criteria requirement."
  * #p4p "Pay for performance" "A payment model where providers are given financial incentives for meeting certain quality performance criteria."
  * #sip "Stars incentive payment" "A payment model that is based on meeting certain individual star performance criteria."
  * #sst "Star score threshold" "A payment model that is based on meeting certain provider star performance criteria."
  * #ubip "Utilization incentive payment" "A payment model that compares current utilization to a benchmark utilization and pays a variable per variable member per month (PMPM) for different rate of change in utilization."
//* #cxp "Custom x participation" "Custom x participation"
//* #cxra "Custom x regional adjustment" "custom x regional adjustment"
//* #mlrt "MLR target" "Medical loss ratio"

CodeSystem: HCPLANFrameworkCS
Title: "HCPLAN Framework Categories Codes"
Id: hcplan-framework
Description: "HCPLAN Framework represents payments from public and private payers to provider organizations (including payments between the payment and delivery arms of highly integrated health systems). It is designed to accommodate payments in multiple categories that are made by a single payer, as well as single provider organizations that receive payments in different categories—potentially from the same payer. Although payments will be classified in discrete categories, the Framework captures a continuum of clinical and financial risk for provider organizations."
* ^url = "http://terminology.hl7.org/CodeSystem/hcp-lan-apm-framework"
* ^experimental = false
* #2A "Category 2A" "Foundational Payments for Infrastructure and Operations, e.g., care coordination fees and payments for HIT investments."
* #2B "Category 2B" "Pay for Reporting, e.g., bonuses for reporting data or penalies for not reporting data."
* #2C "Category 2C" "Pay-for-Performance, e.g., bonuses for quality performance."
* #3A "Category 3A" "APMs with Shared Savings, e.g., shared savings with upside risk only."
* #3B "Category 3B" "APMs with Shared Savings and Downside Risk, e.g., episode-based payments for procedures and comprehensive payments with upside and downside risk."
* #3N "Category 3N" "Risk Based Payments not linked to quality."
* #4A "Category 4A" "Condition-Specific Population-Based Payment, e.g., per member per month payments, payments for speciality services, such as oncology or mental health." 
* #4B "Category 4B" "Comprehensive Population-Based Payment, e.g., global budgets or full/percent of premium payments."
* #4C "Category 4C" "Integrated Finance and Delivery System, e.g., global budgets or full/percent of premium payments in integrated systems."
* #4N "Category 4N" "Capitated Payments not linked to quality."
* ^caseSensitive = true

CodeSystem: VbpIncentiveCS
Title: "Incentive Payment Codes"
Id: vbp-incentive
Description: "What type of incentive for a payment stream such as quality incentive payment."
* ^experimental = false
* #chronic-care-mgmt "Chronic care management" "Chronic Care Management incentive payment. Applicable to the payment streams such as Quality Incentive Payment (QIP) and Pay for Performance (P4P)."
* #annual-visit "Annual office visit" "Annual Office Visit incentive payment."
* ^caseSensitive = true

CodeSystem: VbpCohortCS
Title: "Cohort Codes"
Id: vbp-cohort
Description: "The type of cohort, which represents a group of members with a shared characteristic."
* ^experimental = false
* #hmo "HMO cohort" "A cohort that consists of members who are with health maintenance organization (HMO) plan."
* #ppo "PPO cohort" "A cohort that consists of members who are with preferred provider organization (PPO) plan."
* ^caseSensitive = true

CodeSystem: VbpMeasurePopulationTypeCS
Title: "Value-Based Performance Measure Population Type Codes"
Id: vbp-measure-population
Description: "Measure population type that includes calculated-denominator and calculated-numerator."
* ^experimental = false
* #calculated-denominator "Calculated Denominator" "Calculated denominator. For example, for a proportion measure, the calculated denominator = (denominator – denominator exclusion – denominator exception)."
* #calculated-numerator "Calculated Numerator" "Calculated numerator. For example, for a proportion measure, the calculated numerator = (numerator - numerator exclusion)."
* ^caseSensitive = true

CodeSystem: ThresholdTypeCS
Title: "Threshold Type Codes"
Id: threshold-type
Description: "The threshold type."
* ^experimental = false
* #star-1 "Star 1" "Threshold for star 1 in a star rating."
* #star-2 "Star 2" "Threshold for star 2 in a star rating."
* #star-3 "Star 3" "Threshold for star 3 in a star rating."
* #star-4 "Star 4" "Threshold for star 4 in a star rating."
* #star-5 "Star 5" "Threshold for star 5 in a star rating."
* #hedis-50-percentile "HEDIS 50 Percentile" "Threshold for HEDIS 50 percentile."
* #hedis-75-percentile "HEDIS 75 Percentile" "Threshold for HEDIS 75 percentile."
* #hedis-90-percentile "HEDIS 90 Percentile" "Threshold for HEDIS 90 percentile."
* ^caseSensitive = true

CodeSystem: MeasureStratifierExampleCS
Title: "Measure Stratifier Example Codes"
Id: measure-stratifier-example
Description: "Example stratifiers that could be used to stratify measure or performance metrics."
* ^experimental = false
* #facility "Facility" "Stratify based on healthcare facilities, such as regions and hospitals."
* #taxid "TIN" "Stratify based on Tax Identifier (TIN)."
* #group "Group" "Stratify based on group such as a group of tax ids."
* #geography "Geography" "Stratify based on geographical data, such as zip code and city."
* #cohort "Cohort" "Stratify based on a group of members with a shared characteristic, such as members that are with PPO plan or members with HMO plan."
* ^caseSensitive = true

CodeSystem: MeasureContratualStatusCS
Title: "Measure Contractual Status Codes"
Id: measure-contractual-status
Description: "Contractual status whether a measure is tied to payment as specified in a value-based contract."
* ^experimental = false
* #contractual "Contractual" "Measure is tied to payment contractually."
* #contractual-alternate "Contractual Alternate" "Measure is identified as an alternate measure and is tied to payment contractually."
* #reporting-only "Reporting Only" "Measure is for reporting only, it is not tied to payment."
* ^caseSensitive = true

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/ET-VbpExtensions.fsh

Extension: AlternateMeasureScore
Id: alternate-measurescore
Title: "Alternate Measure Score"
Description: "The Alternate Measure Score Extension allows other data type choices to be used for the measureScore element in addition to Quantity. The alternate data type for measure score is determined by the performance metric type."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.group.measureScore"
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.group.stratifier.stratum.measureScore"
* value[x] 0..1 
* value[x] only decimal or integer or Money or CodeableConcept or boolean

Extension: Baseline
Id: baseline
Title: "Baseline"
Description: "The Baseline Extension is a complex extension. It is used to state the baseline that the performance metric is used for comparisons."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.group"
* value[x] 0..0
* extension contains        
    baseline 1..1 MS and 
    period 0..1 MS
* extension[baseline] ^short = "The baseline value"
* extension[baseline].value[x] 1..1
* extension[baseline].value[x] only decimal or integer or Quantity or Money or CodeableConcept
* extension[period] ^short = "The time period the baseline was measured"
* extension[period].value[x] only Period 

Extension: LOB
Id: lob
Title: "Line of Business"
Description: "The Line of Business (LOB) Extension is used to indicate whether the value-based contract is for Medicare, Medicaid, or commercial (private insurance)."
* ^context[+].type = #element
* ^context[=].expression = "Measure"
* value[x] 1..1 
* valueCodeableConcept from lob (extensible)

Extension: PaidThroughDate
Id: paid-through-date
Title: "Paid Through Date"
Description: "Paid through date is the ending date of the pay cycle."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.group"
* value[x] 1..1 
* value[x] only date

Extension: PaymentStream
Id: payment-stream
Title: "Payment Stream"
Description: "The Payment Stream Extension is a complex extension that defines the type of payment stream. A value-based contract may contain different types of payment streams, such as quality incentive payment and care coordination fee."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.group"
* ^context[+].type = #element
* ^context[=].expression = "Measure"
* extension contains 
    type 1..1 MS and 
    incentive 0..1 MS
* extension[type] ^short = "The type of payment stream"
* extension[type] ^definition = "The type of payment stream, such as quality incentive payment and care coordination fee."
* extension[type].value[x] 1..1
* extension[type].value[x] only CodeableConcept
* extension[type].value[x] from vbp-payment-stream (extensible)
* extension[incentive] ^short = "For quality incentive payment, what type of incentive"
* extension[incentive] ^definition = "For quality incentive payment, what type of incentive"
* extension[incentive].value[x] only CodeableConcept 
* extension[incentive].value[x] from vbp-incentive (extensible)

Extension: ProgramModel
Id: program-model
Title: "Program Model"
Description: "The Program Model Extension is a complex extension, which defines the The Health Care Payment Learning & Action Network (HCPLAN) Alternative Payment Model (APM) framework specified APM categories and which cohort this program model applies to."
* ^context[+].type = #element
* ^context[=].expression = "Measure"
//* value[x] 1..1 
//* valueCodeableConcept from hcplan-framework (extensible)
* extension contains 
    hcplan 1..1 MS and 
    cohort 0..1 MS
* extension[hcplan] ^short = "HCPLAN APM framework APM category"
* extension[hcplan] ^definition = "HCPLAN APM framework APM category"
* extension[hcplan].value[x] 1..1
* extension[hcplan].value[x] only CodeableConcept
* extension[hcplan].value[x] from hcplan-framework (extensible)
* extension[cohort] ^short = "Which cohort this program model applies to"
* extension[cohort] ^definition = "Which cohort this program model applies to"
* extension[cohort].value[x] only CodeableConcept 
* extension[cohort].value[x] from vbp-cohort (extensible)

Extension: OrganizationSubject
Id: organization-subject
Title: "Organization Subject"
Description: "The Organization Subject Extension allows using Organization as an alternative resource type for the Subject reference."
* ^context.type = #element
* ^context.expression = "MeasureReport.subject"
* value[x] 0..1 
* value[x] only Reference($us-core-organization)

Extension: ServicePeriod
Id: service-period
Title: "Service Period"
Description: "The Service period for a payment stream."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.group"
* value[x] 1..1 
* value[x] only Period

Extension: Score
Id: score
Title: "Score"
Description: "The Score Extension is used to specify the score of a measure, such as star score."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* value[x] 1..1 
* value[x] only decimal

Extension: Threshold
Id: threshold
Title: "Threshold"
Description: "The Threshold Extension is a complex extension that defines a threshold needed to be met when measuring performance."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport"
* value[x] 0..0
* extension contains 
    threshold 1..1 MS and 
    type 1..1 MS and
    gapToThreshold 0..1 MS 
* extension[threshold] only Extension    
* extension[threshold] ^short = "The threshold percentile"
* extension[threshold] ^definition = "The threshold percentile"
* extension[threshold].value[x] 1..1
* extension[threshold].value[x] only decimal or Quantity or Range
* extension[type] only Extension
* extension[type] ^short = "The type or the name of the threshold"
* extension[type] ^definition = "The type or the name of the threshold, such as star-2 threshold in star rating"
* extension[type].value[x] only CodeableConcept
* extension[type].value[x] 1..1
* extension[type].value[x] from threshold-type (extensible)
* extension[gapToThreshold] only Extension
* extension[gapToThreshold] ^short = "Gap to achieve the threshold"
* extension[gapToThreshold] ^definition = "Gap to achieve the threshold"
* extension[gapToThreshold].value[x] 1..1 
* extension[gapToThreshold].value[x] only decimal or Quantity


//Extension: Weight
//Id: weight
//Title: "Weight"
//Description: "What is the weight of the contribution of this measure to the overall score."
//* ^context[+].type = #element
//* ^context[=].expression = "MeasureReport"
//* value[x] 1..1 
//* value[x] only decimal

Extension: GroupReference
Id: group-reference
Title: "Group Reference"
Description: "Reference to a group within the MeasureReport."
* ^context[+].type = #element
* ^context[=].expression = "MeasureReport.evaluatedResource"
* value[x] 1..1 
* value[x] only string


Extension: ContractualStatus
Id: contractual-status
Title: "Contractual Status"
Description: "Contractual status of a measure whether it is tied to payment as specified in a value-based contract." 
* ^context[+].type = #element
* ^context[=].expression = "Measure.relatedArtifact"
* value[x] 1..1 
* valueCodeableConcept from measure-contractual-status (extensible)


---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-Measure-vbp-measure01.fsh

Instance: vbp-measure01
InstanceOf: Measure
Usage: #example
Description: "This is an example measure for the *VBP Measure* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-measure"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "Payer"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example measure for the *VBP Measure* profile."

* url = "https://build.fhir.org/ig/HL7/davinci-vbpr/Measure-vbp-measure01"
* identifier.use = #temp
* identifier.system = "http://example.org/fhir/server"
* identifier.value = "ex-vbp-measure01"
* version = "1"
* name = "VbprMeasureExample01"
* title = "Example Value-Based Contract - ABC Payer and GoodHealth"
* status = #active
* experimental = true
* publisher = "ABC Payer"
* description = "Example Value-Based Contract between ABC Payer and GoodHealth"
* effectivePeriod.start = "2022-01-01"
* effectivePeriod.end = "2024-12-31"

* relatedArtifact[0].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 1
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Breast Cancer Screening"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm125-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Colorectal Cancer Screening"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm130-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Diabetes Care - Blood Sugar Controlled"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-diabetes-care-blood-sugar-controlled-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Diabetes Care - Eye Exam"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-diabetes-care-eye-exam-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#reporting-only "Reporting Only"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Medication Adherence for Cholesterol (Statins)"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-med-adherence-cholesterol-statins-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Medication Adherence for Hypertension (RAS antagonists)"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-med-adherence-hypertension-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Medication Adherence for Diabetes Medications"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-med-adherence-diabetes-meds-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 1
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Statin Therapy for Patients with Cardiovascular Disease"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-statin-therapy-cardiovascular-disease-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 1
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Statin Use in Persons with Diabetes (SUPD)"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-statin-use-diabetes-supd-FHIR"

* extension[0].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/lob"
* extension[=].valueCodeableConcept = https://nahdo.org/sopt#1 "MEDICARE"
* extension[=].valueCodeableConcept.text = "MEDICARE"

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/program-model"
* extension[=].extension[0].url = "hcplan"
* extension[=].extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/hcp-lan-apm-framework#3A "Category 3A"
* extension[=].extension[+].url = "cohort"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo "HMO cohort"
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/program-model"
* extension[=].extension[+].url = "hcplan"
* extension[=].extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/hcp-lan-apm-framework#3B "Category 3B"
* extension[=].extension[+].url = "cohort"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo "PPO cohort"

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* extension[=].extension[0].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ccf
* extension[=].extension[=].valueCodeableConcept.text = "Care coordination fee"

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
//* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
//* extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
//* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ccf
//* extension[=].valueCodeableConcept.text = "Care coordination fee"
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
//* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
//* extension[=].valueCodeableConcept.text = "Quality incentive payment"
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
//* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#p4p
//* extension[=].valueCodeableConcept.text = "Pay for performance"

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-Measure-vbp-measure02.fsh

Instance: vbp-measure02
InstanceOf: Measure
Usage: #example
Description: "This is an example measure for the *VBP Measure* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-measure"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "Payer"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example measure for the *VBP Measure* profile."

* url = "https://build.fhir.org/ig/HL7/davinci-vbpr/Measure-vbp-measure02"
* identifier.use = #temp
* identifier.system = "http://example.org/fhir/server"
* identifier.value = "ex-vbp-measure02"
* version = "1"
* name = "VbprMeasureExample02"
* title = "Example Value-Based Contract - ABC Payer and EveryHospital"
* status = #active
* description = "Example Value-Based Contract between ABC Payer and EveryHospital"
* experimental = true
* publisher = "ABC Payer"

* effectivePeriod.start = "2022-10-01"
* effectivePeriod.end = "2023-09-30"
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
//* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
//* extension[=].valueCodeableConcept.text = "Utilization incentive payment"
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
//* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#p4p
//* extension[=].valueCodeableConcept.text = "Pay for performance"

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* extension[=].extension[0].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip "Utilization incentive payment"
//* extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#p4p "Pay for performance"
//* extension[=].extension[=].valueCodeableConcept.text = "Pay for performance"

* relatedArtifact[0].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 1
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual "Contractual"
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Breast Cancer Screening"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm125-FHIR"

* relatedArtifact[+].extension.url = "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-weight"
* relatedArtifact[=].extension.valueDecimal = 3
* relatedArtifact[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Colorectal Cancer Screening"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm130-FHIR"

* relatedArtifact[+].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual-alternate
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Diabetic Retinopathy: Communication with the Physician Managing Ongoing Diabetes Care"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-diabetes-retinopathy-FHIR"

* relatedArtifact[+].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#contractual-alternate
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-diabetes-A1c-FHIR"

* relatedArtifact[+].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/contractual-status"
* relatedArtifact[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-contractual-status#reporting-only
* relatedArtifact[=].type = #composed-of
* relatedArtifact[=].display = "Diabetes: Medical Attention for Nephropathy"
* relatedArtifact[=].resource = "http://example.org/Measure/measure-diabetes-nephropathy-FHIR"




---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport01.fsh

Instance: quality-measurereport01
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 1

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 88 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 91 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 95 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm125-FHIR"
//* measure = "http://example.org/Measure/measure-breast-cancer-screening-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

//* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.population[=].id = "pop1"
//* group.population[=].count = 200
//* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.population[=].id = "pop2"
//* group.population[=].count = 580
* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop1"
* group.population[=].count = 580
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop2"
* group.population[=].count = 580
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop3"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop4"
* group.population[=].count = 200
* group.measureScore.value = 0.345

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 200
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 200
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].measureScore.value = 0.25

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].measureScore.value = 0.56

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop9"
* group.stratifier.stratum[=].population[=].count = 200
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop10"
* group.stratifier.stratum[=].population[=].count = 200
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop11"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop12"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].measureScore.value = 0.25

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop13"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop14"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop15"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop16"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].measureScore.value = 0.56



---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport02.fsh

Instance: quality-measurereport02
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 5

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 40 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 50 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 60 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 70 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm130-FHIR"
//* measure = "http://example.org/Measure/measure-colorectal-cancer-screening-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

//* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.population[=].id = "pop1"
//* group.population[=].count = 180
//* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.population[=].id = "pop2"
//* group.population[=].count = 520
* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop1"
* group.population[=].count = 520
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop2"
* group.population[=].count = 520
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop3"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop4"
* group.population[=].count = 180
* group.measureScore.value = 0.356

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 70
* group.stratifier.stratum[=].measureScore.value = 0.7

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 160
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 160
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 20
* group.stratifier.stratum[=].measureScore.value = 0.13

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop9"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop10"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop11"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop12"
* group.stratifier.stratum[=].population[=].count = 70
* group.stratifier.stratum[=].measureScore.value = 0.7

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.stratifier.stratum[=].population[=].id = "strat-pop13"
* group.stratifier.stratum[=].population[=].count = 160
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop14"
* group.stratifier.stratum[=].population[=].count = 160
* group.stratifier.stratum[=].population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.stratifier.stratum[=].population[=].id = "strat-pop15"
* group.stratifier.stratum[=].population[=].count = 0
* group.stratifier.stratum[=].population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop16"
* group.stratifier.stratum[=].population[=].count = 20
* group.stratifier.stratum[=].measureScore.value = 0.13

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport03.fsh

Instance: quality-measurereport03
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetes Care - Blood Sugar Controlled MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetes Care - Blood Sugar Controlled MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 88 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 91 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 95 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-care-blood-sugar-controlled-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 260
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 1080
* group.measureScore.value = 0.241

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 400
* group.stratifier.stratum[=].measureScore.value = 0.25

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 30
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 140
* group.stratifier.stratum[=].measureScore.value = 0.21

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 400
* group.stratifier.stratum[=].measureScore.value = 0.25

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 30
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 140
* group.stratifier.stratum[=].measureScore.value = 0.21

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport04.fsh

Instance: quality-measurereport04
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetes Care - Eye Exam MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetes Care - Eye Exam MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 60 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 90 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 93 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-care-eye-exam-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"
* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 200
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 420
* group.measureScore.value = 0.476

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 80
* group.stratifier.stratum[=].measureScore.value = 0.63

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 80
* group.stratifier.stratum[=].measureScore.value = 0.38

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 80
* group.stratifier.stratum[=].measureScore.value = 0.63

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 130
* group.stratifier.stratum[=].measureScore.value = 0.38

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport05.fsh

Instance: quality-measurereport05
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Medication Adherence for Cholesterol (Statins) MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Medication Adherence for Cholesterol (Statins) MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 80 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 90 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 93 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-med-adherence-cholesterol-statins-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 120
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 500
* group.measureScore.value = 0.24

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 20
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 150
* group.stratifier.stratum[=].measureScore.value = 0.13

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 40
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].measureScore.value = 0.4

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 20
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 150
* group.stratifier.stratum[=].measureScore.value = 0.13

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 40
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].measureScore.value = 0.4

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport06.fsh

Instance: quality-measurereport06
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Medication Adherence for Hypertension (RAS antagonists) MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Medication Adherence for Hypertension (RAS antagonists) MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 80 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 90 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 93 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-med-adherence-hypertension-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 100
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 380
* group.measureScore.value = 0.263

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 30
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].measureScore.value = 0.6

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 20
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 140
* group.stratifier.stratum[=].measureScore.value = 0.14

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 30
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 50
* group.stratifier.stratum[=].measureScore.value = 0.6

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 20
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 140
* group.stratifier.stratum[=].measureScore.value = 0.14

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport07.fsh

Instance: quality-measurereport07
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Medication Adherence for Diabetes Medications MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Medication Adherence for Diabetes Medications MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 88 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 91 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 95 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-med-adherence-diabetes-meds-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 240
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 380
* group.measureScore.value = 0.632

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].measureScore.value = 0.9

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 30
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].measureScore.value = 0.33

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].measureScore.value = 0.9

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 30
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 90
* group.stratifier.stratum[=].measureScore.value = 0.33

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport08.fsh

Instance: quality-measurereport08
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Statin Therapy for Patients with Cardiovascular Disease MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Statin Therapy for Patients with Cardiovascular Disease MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 1

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 80 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 90 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 93 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-statin-therapy-cardiovascular-disease-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 260
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 640
* group.measureScore.value = 0.406

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[0].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 60
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 150
* group.stratifier.stratum[=].measureScore.value = 0.4

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 70
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 170
* group.stratifier.stratum[=].measureScore.value = 0.41

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 60
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 150
* group.stratifier.stratum[=].measureScore.value = 0.4

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 70
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 170
* group.stratifier.stratum[=].measureScore.value = 0.41

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport09.fsh

Instance: quality-measurereport09
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Statin Use in Persons with Diabetes (SUPD) MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Statin Use in Persons with Diabetes (SUPD) MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 1

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 40 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-2
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 50 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 60 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 70 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-statin-use-diabetes-supd-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 220
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 386
* group.measureScore.value = 0.57

* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop1"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop2"
* group.stratifier.stratum[=].population[=].count = 180
* group.stratifier.stratum[=].measureScore.value = 0.56

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop3"
* group.stratifier.stratum[=].population[=].count = 10
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop4"
* group.stratifier.stratum[=].population[=].count = 13
* group.stratifier.stratum[=].measureScore.value = 0.08

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 1"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop5"
* group.stratifier.stratum[=].population[=].count = 100
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop6"
* group.stratifier.stratum[=].population[=].count = 1880
* group.stratifier.stratum[=].measureScore.value = 0.56

* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#PPO
* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
* group.stratifier.stratum[=].component[=].value.text = "Region 2"
* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.stratifier.stratum[=].population[=].id = "strat-pop7"
* group.stratifier.stratum[=].population[=].count = 10
* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.stratifier.stratum[=].population[=].id = "strat-pop8"
* group.stratifier.stratum[=].population[=].count = 13
* group.stratifier.stratum[=].measureScore.value = 0.08

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport11.fsh

Instance: quality-measurereport11
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
//* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 66 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm125-FHIR"
//* measure = "http://example.org/Measure/measure-breast-cancer-screening-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 400
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 400
* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop3"
* group.population[=].count = 400
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop4"
* group.population[=].count = 400
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop5"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop6"
* group.population[=].count = 400
* group.measureScore.value = 1.0

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport12.fsh

Instance: quality-measurereport12
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
//* extension[=].valueDecimal = 5

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 62 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm130-FHIR"
//* measure = "http://example.org/Measure/measure-colorectal-cancer-screening-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 750
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 800
* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop3"
* group.population[=].count = 800
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop4"
* group.population[=].count = 800
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop5"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop6"
* group.population[=].count = 750
* group.measureScore.value = 0.94



---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport13.fsh

Instance: quality-measurereport13
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetic Retinopathy: Communication with the Physician Managing Ongoing Diabetes Care MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetic Retinopathy: Communication with the Physician Managing Ongoing Diabetes Care MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
//* extension[=].valueDecimal = 5

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 69 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-retinopathy-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 620
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 800
* group.measureScore.value = 0.78



---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport14.fsh

Instance: quality-measurereport14
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%) MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%) MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
//* extension[=].valueDecimal = 5

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 61 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
// Note that the number of patients to goal = 55 is not represented in the report, this value can be derived from using threadhold. 500*0.61 - 250 = 55


* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-A1c-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 250
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 500
* group.measureScore.value = 0.5



---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport15.fsh

Instance: quality-measurereport15
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetes: Medical Attention for Nephropathy MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetes: Medical Attention for Nephropathy MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp
//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
//* extension[=].valueDecimal = 5

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 80 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-3
// Note that the number of patients to goal = 30 is not represented in the report, this value can be derived from using threadhold. 600*0.8 - 450 = 30

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-nephropathy-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 450
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 600
* group.measureScore.value = 0.75



---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport20.fsh

Instance: quality-measurereport20
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 2

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 71.7 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-50-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 74.3 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-75-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 77.3 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-90-percentile

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm125-FHIR"
//* measure = "http://example.org/Measure/measure-breast-cancer-screening-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

//* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.population[=].id = "pop1"
//* group.population[=].count = 30
//* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.population[=].id = "pop2"
//* group.population[=].count = 40
* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop3"
* group.population[=].count = 40
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop4"
* group.population[=].count = 40
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop5"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop6"
* group.population[=].count = 30

* group.measureScore.value = 0.75

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport21.fsh

Instance: quality-measurereport21
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"

* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 62.1 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-50-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 67 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-75-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 71.4 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-90-percentile

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm130-FHIR"
//* measure = "http://example.org/Measure/measure-colorectal-cancer-screening-FHIR"
* date = "2022-12-31"
* period.start = "2022-10-01"
* period.end = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.population[=].id = "pop1-num"
//* group.population[=].count = 56
//* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.population[=].id = "pop2-denom"
//* group.population[=].count = 109

* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop3"
* group.population[=].count = 109
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop4"
* group.population[=].count = 109
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop5"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop6"
* group.population[=].count = 56

* group.measureScore.value = 0.514

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport22.fsh

Instance: quality-measurereport22
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Control (<8.0%) MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Control (<8.0%) MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 2

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 71.7 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-50-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 74.3 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-75-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 77.3 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-90-percentile


* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-HbA1c"
* date = "2021-04-02"
* period.start = "2020-01-01"
* period.end = "2021-03-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1-num"
* group.population[=].count = 11
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2-denom"
* group.population[=].count = 24
* group.measureScore.value = 0.458

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport23.fsh

Instance: quality-measurereport23
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Controlling High Blood Pressure MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Controlling High Blood Pressure MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 1

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 55 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-50-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 62 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-75-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 72 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-90-percentile

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-HbA1c"
* date = "2021-04-02"
* period.start = "2020-01-01"
* period.end = "2021-03-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1-num"
* group.population[=].count = 27
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2-denom"
* group.population[=].count = 49
* group.measureScore.value = 0.551

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport24.fsh

Instance: quality-measurereport24
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Plan All-Cause Readmissions MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Plan All-Cause Readmissions MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 2

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 7 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-50-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 5 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-75-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 3 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-90-percentile

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-HbA1c"
* date = "2021-04-02"
* period.start = "2020-01-01"
* period.end = "2021-03-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1-num"
* group.population[=].count = 1
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2-denom"
* group.population[=].count = 6
* group.measureScore.value = 0.167

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport25.fsh

Instance: quality-measurereport25
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Member Satisfaction Survey MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Member Satisfaction Survey MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 80 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-50-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 85 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-75-percentile

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 90 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#hedis-90-percentile

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-HbA1c"
* date = "2021-04-02"
* period.start = "2020-01-01"
* period.end = "2021-03-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1-num"
* group.population[=].count = 18
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2-denom"
* group.population[=].count = 20
* group.measureScore.value = 0.9

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport30.fsh

Instance: quality-measurereport30
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Breast Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

// Measure Star Rating
* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 3

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 1

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 78 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[=].extension[+].url = "gapToThreshold"
* extension[=].extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 84 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5
* extension[=].extension[+].url = "gapToThreshold"
* extension[=].extension[=].valueDecimal = 5


* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm125-FHIR"
//* measure = "http://example.org/Measure/measure-breast-cancer-screening-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

//* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.population[=].id = "pop1"
//* group.population[=].count = 22
//* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.population[=].id = "pop2"
//* group.population[=].count = 32
* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop3"
* group.population[=].count = 32
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop4"
* group.population[=].count = 32
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop5"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop6"
* group.population[=].count = 22
* group.measureScore.value = 0.69

//* group.stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#location
//* group.stratifier.stratum[0].value.text = "123456"
//* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.stratifier.stratum[=].population[=].id = "strat-pop1"
//* group.stratifier.stratum[=].population[=].count = 22
//* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.stratifier.stratum[=].population[=].id = "strat-pop2"
//* group.stratifier.stratum[=].population[=].count = 32
//* group.stratifier.stratum[=].measureScore.value = 0.69

//* group.stratifier.stratum[+].component[0].code = http://loinc.org#87520-3
//* group.stratifier.stratum[=].component[=].value = http://terminology.hl7.org/CodeSystem/v3-ActCode#HMO
//* group.stratifier.stratum[=].component[+].code = http://terminology.hl7.org/CodeSystem/v3-ActCode#LOC
//* group.stratifier.stratum[=].component[=].value.text = "Region 2"
//* group.stratifier.stratum[=].population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.stratifier.stratum[=].population[=].id = "strat-pop3"
//* group.stratifier.stratum[=].population[=].count = 50
//* group.stratifier.stratum[=].population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.stratifier.stratum[=].population[=].id = "strat-pop4"
//* group.stratifier.stratum[=].population[=].count = 90
//* group.stratifier.stratum[=].measureScore.value = 0.56

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport31.fsh

Instance: quality-measurereport31
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Colorectal Cancer Screening MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 5

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 76 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[=].extension[+].url = "gapToThreshold"
* extension[=].extension[=].valueDecimal = 0

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 82 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5
* extension[=].extension[+].url = "gapToThreshold"
* extension[=].extension[=].valueDecimal = 5

* status = #complete
* type = #summary
* measure = "http://hl7.org/fhir/us/cqfmeasures/Measure/measure-exm130-FHIR"
//* measure = "http://example.org/Measure/measure-colorectal-cancer-screening-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

//* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
//* group.population[=].id = "pop1"
//* group.population[=].count = 62
//* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
//* group.population[=].id = "pop2"
//* group.population[=].count = 82

* group.population[0].code = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
* group.population[=].id = "pop3"
* group.population[=].count = 82
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator
* group.population[=].id = "pop4"
* group.population[=].count = 82
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#denominator-exclusion
* group.population[=].id = "pop5"
* group.population[=].count = 0
* group.population[+].code = http://terminology.hl7.org/CodeSystem/measure-population#numerator
* group.population[=].id = "pop6"
* group.population[=].count = 62

* group.measureScore.value = 0.76





---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport32.fsh

Instance: quality-measurereport32
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetes Care - Blood Sugar Controlled MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetes Care - Blood Sugar Controlled MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 83 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4
* extension[=].extension[+].url = "gapToThreshold"
* extension[=].extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 92 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5
* extension[=].extension[+].url = "gapToThreshold"
* extension[=].extension[=].valueDecimal = 4

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-care-blood-sugar-controlled-FHIR"
* date = "2023-05-30"
* period.start = "2022-01-01"
* period.end = "2022-08-31"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"

* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 7
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 12
* group.measureScore.value = 0.58

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-quality-measurereport33.fsh

Instance: quality-measurereport33
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Diabetes Care - Eye Exam MeasureReport for the *VBP Quality MeasureReport* profile."
* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* meta.source = "http://example.org/fhir/server"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP Quality MeasureReport Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Diabetes Care - Eye Exam MeasureReport for the *VBP Quality MeasureReport* profile."

* extension[0].url = "http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/extension-measureScoring"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-scoring#proportion

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/score"
* extension[=].valueDecimal = 0

//* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/weight"
//* extension[=].valueDecimal = 3

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 90 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-4

* extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/threshold"
* extension[=].extension[0].url = "threshold"
* extension[=].extension[=].valueQuantity = 93 '%'
* extension[=].extension[+].url = "type"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/threshold-type#star-5

* status = #complete
* type = #summary
* measure = "http://example.org/Measure/measure-diabetes-care-eye-exam-FHIR"
* date = "2023-01-15"
* period.start = "2022-01-01"
* period.end = "2022-11-30"
* reporter = Reference(Organization/vbp-payer01)
* improvementNotation = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase "Increased score indicates improvement"
* group.population[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-numerator
* group.population[=].id = "pop1"
* group.population[=].count = 7
* group.population[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-measure-population#calculated-denominator
* group.population[=].id = "pop2"
* group.population[=].count = 12
* group.measureScore.value = 0.58


---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-vbp-measurereport101.fsh

Instance: vbp-measurereport101
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile., which includes examples for payment streams shared savings - gated on quality, care coordination fee, quality incentive payment for the chronic care management incentive program, and quality incentive payment for the annual office visits."

* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-performance-measurereport"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP MeasureReport Example 101"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile., which includes examples for payment streams shared savings - gated on quality, care coordination fee, quality incentive payment for the chronic care management incentive program, quality incentive payment for the annual office visits, and quality measure performance."

//* extension[0].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[0].url = $measurereport-category
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* status = #complete
* type = #summary
* measure = "https://build.fhir.org/ig/HL7/davinci-vbpr/Measure-vbp-measure01"
* subject.display = "Good Health Clinic"
* subject.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject"
* subject.extension.valueReference = Reference(Organization/vbp-provider01)
* date = "2023-01-15"
* reporter = Reference(Organization/vbp-payer01)
* period.start = "2022-01-01"
* period.end = "2022-12-31"

* group[0].id = "ccf-group-01"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ccf
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Care coordination fee"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#ccf
* group[=].code.text = "Care coordination fee"
//* group[=].measureScore.value = 5
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 5
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[=].stratifier.stratum[0].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
//* group[=].stratifier.stratum[=].measureScore.value = 1000
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 1000
* group[=].measureScore.extension.valueMoney.currency = #USD
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
//* group[=].stratifier.stratum[=].measureScore.value = 500
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 500
* group[=].measureScore.extension.valueMoney.currency = #USD
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
//* group[=].stratifier.stratum[=].measureScore.value = 1000
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 1000
* group[=].measureScore.extension.valueMoney.currency = #USD
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
//* group[=].stratifier.stratum[=].measureScore.value = 500
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 500
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "ssq-group-starscore"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#weighted-avg-star
* group[=].code.text = "Weighted average star"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].measureScore.value = 3.8
* group[+].id = "ssq-group-01"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#member-months
* group[=].code.text = "Member months"
* group[=].measureScore.value = 300
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 100
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 200
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 150
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[+].id = "ssq-group-02"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#avg-risk-score
* group[=].code.text = "Average risk score"
* group[=].measureScore.value = 0.7
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 0.8
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 0.9
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 1
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 1.1
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 1.2
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 1.3

* group[+].id = "ssq-group-03"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#revenue
* group[=].code.text = "Total revenue"
* group[=].measureScore.value = 10000
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 6000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 3000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 3000
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 4000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 2000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 2000

* group[+].id = "ssq-group-04"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#revenue-pmpm
* group[=].code.text = "Revenue PMPM"
* group[=].measureScore.value = 33
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 60
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 60
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 60
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 20
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 13
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 40

* group[+].id = "ssq-group-05"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#med-rx-cost
* group[=].code.text = "Medical pharmacy cost"
* group[=].measureScore.value = 9000
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 5000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 3000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 2000
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 4000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 2000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 3000

* group[+].id = "ssq-group-06"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#med-rx-cost-pmpm
* group[=].code.text = "Medical pharmacy cost PMPM"
* group[=].measureScore.value = 30
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 60
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 40
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 20
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 13
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 60

* group[+].id = "ssq-group-07"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#med-cost-fund
* group[=].code.text = "Medical cost fund"
* group[=].measureScore = 90 '%'
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore = 83.3 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore = 100 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore = 66.7 '%'
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore = 100 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore = 100 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore = 150 '%'

* group[+].id = "ssq-group-08"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#med-cost-target
* group[=].code.text = "Medical cost target"
* group[=].measureScore = 85 '%'
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore = 85 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore = 85 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore = 85 '%'
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore = 85 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore = 85 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore = 85 '%'

* group[+].id = "ssq-group-09"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#med-rx-cost-target
* group[=].code.text = "Medical pharmacy cost target"
* group[=].measureScore.value = 8500
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 5100
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 2550
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 2550
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 3400
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 1700
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 1700

* group[+].id = "ssq-group-10"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#variance-cost
* group[=].code.text = "Variance cost"
* group[=].measureScore.value = -500
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 100
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 450
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 550
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = -600
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = -300
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = -1300

* group[+].id = "ssq-group-11"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#avg-risk-score-market
* group[=].code.text = "Average risk score market"
* group[=].measureScore.value = 0.7
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 0.71
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 0.72
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 0.72
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 0.71
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 0.7
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 0.69

* group[+].id = "ssq-group-12"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#avg-revenue-pmpm-market
* group[=].measureScore.value = 35
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 40
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 32
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 36
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 29
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 30

* group[+].id = "ssq-group-13"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#avg-med-rx-cost-pmpm-market
* group[=].measureScore = 94.3 '%'
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore = 102.5 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore = 109.4 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore = 83.3 '%'
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore = 70 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore = 103.4 '%'
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore = 110 '%'

* group[+].id = "ssq-group-14"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#ccf
* group[=].code.text = "Care coordination fee"
* group[=].measureScore.value = 1500
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 500
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 250
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 250
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 1000
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 750
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 250

* group[+].id = "ssq-group-15"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#quality-pmt-chronic
* group[=].code.text = "Qulaity payment chronic"
* group[=].measureScore.value = 11900
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 3966.67
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 1983.33
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 1983.33
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 7933.33
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 5950
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 1983.33

* group[+].id = "ssq-group-16"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#quality-pmt-office-visit
* group[=].code.text = "Qulaity payment office visit"
* group[=].measureScore.value = 300
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 100
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = 200
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = 150
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 50

* group[+].id = "ssq-group-17"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#shared-saving-deficit
* group[=].code.text = "Shared saving deficit"
* group[=].measureScore.value = -400
* group[=].stratifier.stratum[0].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = -360
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#hmo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = 275
* group[=].stratifier.stratum[+].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].measureScore.value = -480
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 1"
* group[=].stratifier.stratum[=].measureScore.value = -240
* group[=].stratifier.stratum[+].component[0].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#cohort
* group[=].stratifier.stratum[=].component[=].value = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-cohort#ppo
* group[=].stratifier.stratum[=].component[+].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/measure-stratifier-example#facility
* group[=].stratifier.stratum[=].component[=].value.text = "Region 2"
* group[=].stratifier.stratum[=].measureScore.value = -1040

* group[+].id = "qip-group-01"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"
* group[=].extension[=].extension[+].url = "incentive"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-incentive#annual-visit
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Annual office visit"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-11-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-12-31"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#avg-member-office-visit
* group[=].code.text = "Average members with office visit"
* group[=].measureScore = 87 '%'

* group[+].id = "qip-group-02"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"
* group[=].extension[=].extension[+].url = "incentive"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-incentive#chronic-care-mgmt
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Chronic care management incentive program"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-09-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-09-30"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#eligible-member
* group[=].code.text = "Eligible member"
* group[=].measureScore.value = 500
* group[=].stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#condition-count
* group[=].stratifier.stratum[0].value = http://loinc.org#LA6112-2
* group[=].stratifier.stratum[=].value.text = "1"
* group[=].stratifier.stratum[=].measureScore.value = 100
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6113-0
* group[=].stratifier.stratum[=].value.text = "2"
* group[=].stratifier.stratum[=].measureScore.value = 200
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6114-8
* group[=].stratifier.stratum[=].value.text = "3"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6115-5
* group[=].stratifier.stratum[=].value.text = "4"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].value = http://loinc.org#LA10137-0
* group[=].stratifier.stratum[=].value.text = "5+"
* group[=].stratifier.stratum[=].measureScore.value = 100

* group[+].id = "qip-group-03"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"
* group[=].extension[=].extension[+].url = "incentive"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-incentive#chronic-care-mgmt
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Chronic care management incentive program"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-09-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-09-30"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#1-gap-closed
* group[=].code.text = "1 gap closed"
* group[=].measureScore.value = 100
* group[=].stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#condition-count
* group[=].stratifier.stratum[0].value = http://loinc.org#LA6112-2
* group[=].stratifier.stratum[=].value.text = "1"
* group[=].stratifier.stratum[=].measureScore.value = 20
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6113-0
* group[=].stratifier.stratum[=].value.text = "2"
* group[=].stratifier.stratum[=].measureScore.value = 30
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6114-8
* group[=].stratifier.stratum[=].value.text = "3"
* group[=].stratifier.stratum[=].measureScore.value = 20
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6115-5
* group[=].stratifier.stratum[=].value.text = "4"
* group[=].stratifier.stratum[=].measureScore.value = 10
* group[=].stratifier.stratum[+].value = http://loinc.org#LA10137-0
* group[=].stratifier.stratum[=].value.text = "5+"
* group[=].stratifier.stratum[=].measureScore.value = 20

* group[+].id = "qip-group-04"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"
* group[=].extension[=].extension[+].url = "incentive"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-incentive#chronic-care-mgmt
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Chronic care management incentive program"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-09-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-09-30"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#2-gap-closed
* group[=].code.text = "2 gap closed"
* group[=].measureScore.value = 0
* group[=].stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#condition-count
* group[=].stratifier.stratum[0].value = http://loinc.org#LA6112-2
* group[=].stratifier.stratum[=].value.text = "1"
* group[=].stratifier.stratum[=].measureScore.value = 0
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6113-0
* group[=].stratifier.stratum[=].value.text = "2"
* group[=].stratifier.stratum[=].measureScore.value = 0
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6114-8
* group[=].stratifier.stratum[=].value.text = "3"
* group[=].stratifier.stratum[=].measureScore.value = 0
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6115-5
* group[=].stratifier.stratum[=].value.text = "4"
* group[=].stratifier.stratum[=].measureScore.value = 0
* group[=].stratifier.stratum[+].value = http://loinc.org#LA10137-0
* group[=].stratifier.stratum[=].value.text = "5+"
* group[=].stratifier.stratum[=].measureScore.value = 0

* group[+].id = "qip-group-05"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"
* group[=].extension[=].extension[+].url = "incentive"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-incentive#chronic-care-mgmt
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Chronic care management incentive program"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-09-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-09-30"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#interim-pmt-rate
* group[=].code.text = "Interim payment rate"
* group[=].stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#condition-count
* group[=].stratifier.stratum[0].value = http://loinc.org#LA6112-2
* group[=].stratifier.stratum[=].value.text = "1"
* group[=].stratifier.stratum[=].measureScore.value = 20
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6113-0
* group[=].stratifier.stratum[=].value.text = "2"
* group[=].stratifier.stratum[=].measureScore.value = 50
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6114-8
* group[=].stratifier.stratum[=].value.text = "3"
* group[=].stratifier.stratum[=].measureScore.value = 100
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6115-5
* group[=].stratifier.stratum[=].value.text = "4"
* group[=].stratifier.stratum[=].measureScore.value = 200
* group[=].stratifier.stratum[+].value = http://loinc.org#LA10137-0
* group[=].stratifier.stratum[=].value.text = "5+"
* group[=].stratifier.stratum[=].measureScore.value = 300

* group[+].id = "qip-group-06"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#qip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Quality incentive payment"
* group[=].extension[=].extension[+].url = "incentive"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-incentive#chronic-care-mgmt
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Chronic care management incentive program"

* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/service-period"
* group[=].extension[=].valuePeriod.start = "2022-01-01"
* group[=].extension[=].valuePeriod.end = "2022-09-30"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
* group[=].extension[=].valueDate = "2022-09-30"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#earned-incentive
* group[=].code.text = "Earned incentive"
* group[=].measureScore.value = 11900
* group[=].stratifier.code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#condition-count
* group[=].stratifier.stratum[0].value = http://loinc.org#LA6112-2
* group[=].stratifier.stratum[=].value.text = "1"
* group[=].stratifier.stratum[=].measureScore.value = 400
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6113-0
* group[=].stratifier.stratum[=].value.text = "2"
* group[=].stratifier.stratum[=].measureScore.value = 1500
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6114-8
* group[=].stratifier.stratum[=].value.text = "3"
* group[=].stratifier.stratum[=].measureScore.value = 2000
* group[=].stratifier.stratum[+].value = http://loinc.org#LA6115-5
* group[=].stratifier.stratum[=].value.text = "4"
* group[=].stratifier.stratum[=].measureScore.value = 2000
* group[=].stratifier.stratum[+].value = http://loinc.org#LA10137-0
* group[=].stratifier.stratum[=].value.text = "5+"
* group[=].stratifier.stratum[=].measureScore.value = 6000
* evaluatedResource[0] = Reference(MeasureReport/quality-measurereport01)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport02)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport03)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport04)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport05)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport06)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport07)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport08)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport09)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-vbp-measurereport102.fsh

Instance: vbp-measurereport102
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile., which includes utilizations and quality."

* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-performance-measurereport"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP MeasureReport Example 102"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile., which includes utilization and quality."
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* status = #complete
* type = #summary
* measure = "https://build.fhir.org/ig/HL7/davinci-vbpr/Measure-vbp-measure02"
* subject.display = "Every Hospital"
* subject.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject"
* subject.extension.valueReference = Reference(Organization/vbp-provider02)
* date = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* period.start = "2022-10-01"
* period.end = "2022-12-31"

// ====inpatient admission ====
* group[0].id = "ubip-group-01"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#inpatient-admission
* group[=].code.text = "In patient admission"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueQuantity = 250 '/10*3'
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore = 400 '/10*3'

// ====inpatient acute ====
* group[+].id = "ubip-group-02"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#inpatient-acute
* group[=].code.text = "In patient acute"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueQuantity = 180 '/10*3'
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore = 350 '/10*3'

// ====readmission====
* group[+].id = "ubip-group-03"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#readmission
* group[=].code.text = "Readmission"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueQuantity = 51 '/10*3'
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore = 120 '/10*3'

// ====ED visit====
* group[+].id = "ubip-group-04"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#ed-visit
* group[=].code.text = "ED visit"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueQuantity = 350 '/100' "per 100"
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore = 300 '/100'

// ====SNF Admission====
* group[+].id = "ubip-group-05"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#snf-admission
* group[=].code.text = "Skilled Nursing Facility admission"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueQuantity = 51 '/10*3'
//* group[=].extension[=].extension[=].valueQuantity.value = 51
//* group[=].extension[=].extension[=].valueQuantity.unit = '/10*3'
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore = 50 '/10*3'

// ====SNF Average Length of Stay====
* group[+].id = "ubip-group-06"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#snf-avg-los
* group[=].code.text = "Skilled Nursing Facility average length of stay"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueQuantity = 22 'd'
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore = 15 'd'

// ====Weighted Average Star====
* group[+].id = "ssq-group-starscore"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#weighted-avg-star
* group[=].code.text = "Weighted average star"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ssq
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Shared savings gated on quality"
* group[=].measureScore.value = 2.5

// ====Medical Cost PMPM====
* group[+].id = "financial-group-01"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#med-cost-pmpm
* group[=].code.text = "Total medical expense PMPM"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueMoney.value = 800 
* group[=].extension[=].extension[=].valueMoney.currency = #USD
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 800
* group[=].measureScore.extension.valueMoney.currency = #USD

// ====IBNR PMPM====
* group[+].id = "financial-group-02"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#ibnr-pmpm
* group[=].code.text = "Total medical expense PMPM"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/payment-stream"
* group[=].extension[=].extension[0].url = "type"
* group[=].extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/payment-stream#ubip
* group[=].extension[=].extension[=].valueCodeableConcept.text = "Utilization incentive payment"
* group[=].extension[+].url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/baseline"
* group[=].extension[=].extension[0].url = "baseline"
* group[=].extension[=].extension[=].valueMoney.value = 800 
* group[=].extension[=].extension[=].valueMoney.currency = #USD
* group[=].extension[=].extension[+].url = "period"
* group[=].extension[=].extension[=].valuePeriod.start = "2021-01-01"
* group[=].extension[=].extension[=].valuePeriod.end = "2021-12-31"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 800
* group[=].measureScore.extension.valueMoney.currency = #USD

* evaluatedResource[0] = Reference(MeasureReport/quality-measurereport11)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport12)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport13)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport14)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport15)
* evaluatedResource[=].extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/group-reference"
* evaluatedResource[=].extension.valueString = "ssq-group-starscore"


---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-vbp-measurereport103.fsh

Instance: vbp-measurereport103
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile., 
which includes quality measures and alternative measures."

* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-performance-measurereport"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP MeasureReport Example 103"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile., which includes quality measures and alternative measures."

//* extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
//* extension.valueDate = "2022-12-31"

* extension[0].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* status = #complete
* type = #summary
* measure = "https://build.fhir.org/ig/HL7/davinci-vbpr/Measure-vbp-measure02"
* subject.display = "Every Hospital"
* subject.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject"
* subject.extension.valueReference = Reference(Organization/vbp-provider02)
* date = "2022-12-31"
* reporter = Reference(Organization/vbp-payer01)
* period.start = "2020-01-01"
* period.end = "2021-03-31"

* evaluatedResource[0] = Reference(MeasureReport/quality-measurereport20)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport21)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport22)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport23)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport24)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport25)

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-MeasureReport-vbp-measurereport104.fsh

Instance: vbp-measurereport104
InstanceOf: MeasureReport
Usage: #example
Description: "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile."

* meta.profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-performance-measurereport"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "VBP MeasureReport Example 104"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example Value-Based Performance MeasureReport for the *VBP MeasureReport* profile."

//* extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/paid-through-date"
//* extension.valueDate = "2022-12-31"

* extension[0].url = "http://hl7.org/fhir/StructureDefinition/measurereport-category"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/CodeSystem/measurereport-category#vbp

* status = #complete
* type = #summary
* measure = "https://build.fhir.org/ig/HL7/davinci-vbpr/Measure-vbp-measure02"
* subject.display = "Every Hospital"
* subject.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject"
* subject.extension.valueReference = Reference(Organization/vbp-provider02)
* date = "2023-05-31"
* reporter = Reference(Organization/vbp-payer01)
* period.start = "2022-01-01"
* period.end = "2022-08-31"

* group[0].id = "group-01"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#eligible-member
* group[=].code.text = "Eligible member"
* group[=].measureScore.value = 2914

* group[+].id = "group-02"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#hcc
* group[=].code.text = "Hierarchical Condition Category"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 500
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-03"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#quality-pmt-office-visit "Quality payment annual office visit"
* group[=].code.text = "Preventive Care Visits"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 180
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-04"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#star-performance
* group[=].code.text = "Star Performance"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 132884
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-05"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#advance-care-planning
* group[=].code.text = "Advance Care Planning"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 100
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-06"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#encounter-palliative-care
* group[=].code.text = "Encounter Palliative Care"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 1200
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-07"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#supplemental-data
* group[=].code.text = "Supplemental Data"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 0
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-08"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#closed-gaps
* group[=].code.text = "Estimated YTD Grand Total"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 134864
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-09"
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#total-gaps
* group[=].code.text = "Total gaps"
* group[=].measureScore.value = 2

* group[+].id = "group-10"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#closed-gaps
* group[=].code.text = "Closed gaps"
* group[=].measureScore.value = 2

* group[+].id = "group-11"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#min-base-incentive-target
* group[=].code.text = "Minimum Base Incentive Target Percentage"
* group[=].measureScore = 80 '%'

* group[+].id = "group-12"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#base-incentive-pm
* group[=].code.text = "Base Incentive Per Member"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 125
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-13"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#early-performance-bonus-met
* group[=].code.text = "Early Performance Bonus Met"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueBoolean = false

* group[+].id = "group-14"
//* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric
* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#estimated-bonus-incentive-pm
* group[=].code.text = "Estimated Bonus Incentive Per Member"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 0
* group[=].measureScore.extension.valueMoney.currency = #USD

* group[+].id = "group-15"
* group[=].code = http://hl7.org/fhir/us/davinci-vbpr/CodeSystem/vbp-performance-metric#earned-incentive "Earned incentive"
//* group[=].code = http://my-local-organization/CodeSystem/vbp-performance-metric#estimated-incentive
* group[=].code.text = "Estimate Incentive"
* group[=].measureScore.extension.url = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/alternate-measurescore"
* group[=].measureScore.extension.valueMoney.value = 500
* group[=].measureScore.extension.valueMoney.currency = #USD

* evaluatedResource[0] = Reference(MeasureReport/quality-measurereport30)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport31)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport32)
* evaluatedResource[+] = Reference(MeasureReport/quality-measurereport33)


---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-Organization-vbp-payer01.fsh

Instance: vbp-payer01
InstanceOf: Organization
Usage: #example
Description: "This is an example payer"
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "Payer"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is an example payer."

* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay "payer"
* name = "ABC Payer"
* telecom[0].system = #phone
* telecom[=].value = "(+1) 800-123-4567"
* telecom[+].system = #email
* telecom[=].value = "contact@ABCPayer.com"
* address.line = "100 ABC Payer Lane"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"
* address.country = "USA"

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-Organization-vbp-provider01.fsh

Instance: vbp-provider01
InstanceOf: Organization
Usage: #example
Description: "This is an example of Provider organization the Value-Based Performance Report is for."

* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "Provider"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "Provider organization the Value-Based Performance Report is for."
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov "Healthcare Provider"
* name = "Good Health Clinic"
* telecom[0].system = #phone
* telecom[=].value = "(+1) 123-456-7890"
* telecom[+].system = #email
* telecom[=].value = "contact@goodhealth.com"
* address.line = "100 Good Health Lane"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"
* address.country = "USA"

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/Example-Organization-vbp-provider02.fsh

Instance: vbp-provider02
InstanceOf: Organization
Usage: #example
Description: "This is an example of Provider organization the Value-Based Performance Report is for."

* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "Provider"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "Provider organization the Value-Based Performance Report is for."
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov "Healthcare Provider"
* name = "Every Hospital"
* telecom[0].system = #phone
* telecom[=].value = "(+1) 456-123-7890"
* telecom[+].system = #email
* telecom[=].value = "contact@everyhospital.com"
* address.line = "100 Every Hospital Lane"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"
* address.country = "USA"

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/SD-VbpMeasure.fsh

Profile: VbpMeasure
Parent: $CQFMCompositeMeasure
Id: vbp-measure
Title: "Value-Based Performance Measure"
Description: "The measure definition that describes value-based contract level information for a value-based performance report."
//* ^publisher = "HL7 International"

* extension contains LOB named lineOfBusiness 0..1 MS
* extension contains ProgramModel named programModel 0..* MS
* extension contains PaymentStream named paymentStream 0..* MS 

* url 1..1 MS
* url ^short = "Canonical identifier for this measure, represented as a URI (globally unique)"
* identifier MS
* identifier ^short = "Business identifier of this measure, e.g., value-based contract identifier"
//* name 1..1 MS
//* status 1..1 MS
//* status only code
//* status = #active (exactly)
* description MS
* effectivePeriod ^short = "Value-based contract term period"
* effectivePeriod MS

* relatedArtifact[component].extension contains ContractualStatus named contractualStatus 1..1 MS
* relatedArtifact[component].extension[contractualStatus] ^short = "contractual | contractual-alternate | reporting-only"

* group.code from vbp-performance-metric (extensible)
* group.code ^short = "Performance metric"
* group.code MS
* improvementNotation 0..0



---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/SP-MeasureReport-category.fsh

Instance: measurereport-category
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-vbpr/SearchParameter/measurereport-category"
* version = "1.0.0"
* name = "MeasureReportCategory"
* status = #active
* code = #category
* base = #MeasureReport
* type = #string
* description = "Search based on the measurereport-category extension"
* expression = "MeasureReport.extension('http://hl7.org/fhir/StructureDefinition/measurereport-category').value"
* xpath = "f:MeasureReport/f:extension[@url='http://hl7.org/fhir/StructureDefinition/measurereport-category'].value"
* xpathUsage = #normal
//* processingMode = #normal


---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/SP-MeasureReport-subject-organization.fsh

Instance: measurereport-subject-organization
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-vbpr/SearchParameter/measurereport-subject-organization"
* version = "1.0.0"
* name = "MeasureReportSubjectOrganization"
* status = #active
* code = #subject-organization
* base = #MeasureReport
* type = #reference
* description = "Search based on subject of type Organization"
//* expression = "MeasureReport.subject.extension('http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject').value as Reference"
* expression = "MeasureReport.subject.extension('http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject').value"
* xpath = "f:MeasureReport/f:subject.extension[@url='http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/organization-subject'].valueReference"
* xpathUsage = #normal
//* processingMode = #normal
* target = #Organization

---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/VBPClient-CapabilityStatement.fsh


Instance: capabilityVbpReportingClient
InstanceOf: CapabilityStatement
Usage: #definition
Title: "VBP Reporting Client Capability Statement"
* description = "This profile defines the expected capabilities of the Value-Based Performance (VBP) Reporting Client actor, when request and consume value-based performance MeasureReports from a Value-Based Performance Reporting Server. The complete list of FHIR profiles 
that a VBP Reporting Server could support are defined. VBP Reporting Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* id = "vbp-reporting-client"
* url = "http://hl7.org/fhir/us/davinci-vbpr/CapabilityStatement/vbp-reporting-client"
* name = "VBPReportingClientCapabilityStatement"
* status = #active
* date = "2024-04-25"
* experimental = false
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"></div>"
* text.status = #generated
* kind = #requirements
* format[0] = #xml
* format[+] = #json
* fhirVersion = #4.0.1
* patchFormat = #application/json-patch+json
//* insert CapabilityCommon
* implementationGuide[0] = "http://hl7.org/fhir/us/davinci-deqm/ImplementationGuide/hl7.fhir.us.davinci-deqm"
* implementationGuide[+] = "http://hl7.org/fhir/us/cqfmeasures/ImplementationGuide/hl7.fhir.us.cqfmeasures"

//* rest[+]
//  * mode = #server
//  * documentation = "Da Vinci Value-Based Performance Reporting Server **SHALL** support the profiles specified in this implementation guide."
* rest.mode = #client
* rest.security.description = "For general security consideration refer to the [Security and Privacy Considerations](http://hl7.org/fhir/R4/secpriv-module.html)."
* rest.documentation = "Da Vinci Value-Based Performance Reporting Server **SHALL** support the profiles specified in this implementation guide."
* rest.interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #SHOULD
* rest.interaction[=].code = #batch
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #SHOULD
* rest.interaction[=].code = #transaction
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #search-system
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #history-system
* rest.resource[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY

* rest.resource[=].type = #Measure
* rest.resource[=].profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-measure"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read
* rest.resource[=].interaction[=].documentation = "Read allows maintainers of the Measures to get the logical definitions of the Measure"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Search allows maintainers of the Measures to find the logical definition of a Measure"

* rest.resource[+].type = #MeasureReport
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-performance-measurereport"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Read allows maintainers of the MeasureReports to get the logical definitions of the MeasureReports"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Search allows maintainers of the MeasureReports to find the logical definition of a MeasureReport"
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].referencePolicy[0] = #literal
* rest.resource[=].referencePolicy[+] = #logical
* rest.resource[=].searchInclude = "MeasureReport.evaluatedResources"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[+].name = "evaluatedResource"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-evaluated-resource"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].name = "measure"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-measure"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[+].name = "reporter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-reporter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "measurereport-category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-vbpr/SearchParameter/measurereport-category"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "measurereport-subject-organization"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-vbpr/SearchParameter/measurereport-subject-organization"
* rest.resource[=].searchParam[=].type = #reference




---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/VBPServer-CapabilityStatement.fsh


Instance: capabilityVbpReportingServer
InstanceOf: CapabilityStatement
Usage: #definition
Title: "VBP Reporting Server Capability Statement"
* description = "This profile defines the expected capabilities of the Value-Based Performance (VBP) Reporting Server actor which is responsible for producing value-based performance MeasureReports to be consumed by a Value-Based Performance Reporting Client. The complete list of FHIR profiles 
and search parameters that a VBP Reporting Server could support are defined. VBP Reporting Servers have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* id = "vbp-reporting-server"
* url = "http://hl7.org/fhir/us/davinci-vbpr/CapabilityStatement/vbp-reporting-server"
* name = "VBPReportingServerCapabilityStatement"
* status = #active
* date = "2024-04-25"
* experimental = false
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"></div>"
* text.status = #generated
* kind = #requirements
* format[0] = #xml
* format[+] = #json
* fhirVersion = #4.0.1
* patchFormat = #application/json-patch+json
//* insert CapabilityCommon
* implementationGuide[0] = "http://hl7.org/fhir/us/davinci-deqm/ImplementationGuide/hl7.fhir.us.davinci-deqm"
* implementationGuide[+] = "http://hl7.org/fhir/us/cqfmeasures/ImplementationGuide/hl7.fhir.us.cqfmeasures"

//* rest[+]
//  * mode = #server
//  * documentation = "Da Vinci Value-Based Performance Reporting Server **SHALL** support the profiles specified in this implementation guide."
* rest.mode = #server
* rest.security.description = "For general security consideration refer to the [Security and Privacy Considerations](http://hl7.org/fhir/R4/secpriv-module.html)."
* rest.documentation = "Da Vinci Value-Based Performance Reporting Server **SHALL** support the profiles specified in this implementation guide."
* rest.interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #SHOULD
* rest.interaction[=].code = #batch
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #SHALL
* rest.interaction[=].code = #transaction
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #search-system
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #history-system
* rest.resource[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY

* rest.resource[=].type = #Measure
* rest.resource[=].profile = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-measure"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read
* rest.resource[=].interaction[=].documentation = "Read allows maintainers of the Measures to get the logical definitions of the Measure"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[=].documentation = "Create allows maintainers of the Measures to create the logical definition of a Measure"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[=].documentation = "Update allows maintainers of the Measures to update the logical definitions of a Measure by its id or create a new one if it is new"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[=].documentation = "Patch allows maintainers of the Measures to update the logical definition of a Measure by posting a set of changes to it"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[=].documentation = "Delete allows maintainers of the Measures to delete the logical definition of a Measure"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Search allows maintainers of the Measures to find the logical definition of a Measure"

* rest.resource[+].type = #MeasureReport
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-performance-measurereport"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-vbpr/StructureDefinition/vbp-quality-measurereport"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Read allows maintainers of the MeasureReports to get the logical definitions of the MeasureReports"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[=].documentation = "Create allows maintainers of the MeasureReports to create the logical definition of a MeasureReport"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[=].documentation = "Update allows maintainers of the MeasureReports to update the logical definitions of a MeasureReport by its id or create a new one if it is new"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[=].documentation = "Patch allows maintainers of the MeasureReports to update the logical definition of a MeasureReport by posting a set of changes to it"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[=].documentation = "Delete allows maintainers of the MeasureReports to delete the logical definition of a MeasureReport"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Search allows maintainers of the MeasureReports to find the logical definition of a MeasureReport"
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[=].conditionalDelete = #multiple
* rest.resource[=].referencePolicy[0] = #literal
* rest.resource[=].referencePolicy[+] = #logical
* rest.resource[=].searchInclude = "MeasureReport.evaluatedResources"
* rest.resource[=].searchParam[0].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[+].name = "evaluatedResource"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-evaluated-resource"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].name = "measure"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-measure"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[+].name = "reporter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-reporter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].name = "subject"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MeasureReport-subject"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[+].name = "measurereport-category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-vbpr/SearchParameter/measurereport-category"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "measurereport-subject-organization"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-vbpr/SearchParameter/measurereport-subject-organization"
* rest.resource[=].searchParam[=].type = #reference




---

File: repos/HL7_SLASH_davinci-vbpr/input/fsh/VS-ValueSets.fsh

ValueSet: VbpPerformanceMetricsVS
Title: "Performance Metric"
Id: vbp-performance-metric
Description: "Type of value-based performance reporting performance metric."
* ^experimental = false
* codes from system vbp-performance-metric

ValueSet: LineOfBusinessVS
Title: "Line of Business Value Set"
Id: lob
Description: "Type of line of business."
* ^experimental = false
* $SOP#1  "MEDICARE"
* $SOP#2  "MEDICAID"
* $SOP#5 "PRIVATE HEALTH INSURANCE"

ValueSet: PaymentStreamVS
Title: "Payment Stream Value Set"
Id: vbp-payment-stream
Description: "Type of payment stream."
* ^experimental = false
* codes from system payment-stream

ValueSet: HCPLANFrameworkVS
Title: "HCPLAN Framework Categories"
Id: hcplan-framework
Description: "HCPLAN framework categories for value-based performance. HCPLAN framework represents payments from public and private payers to provider organizations."
* ^experimental = false
* codes from system hcplan-framework

ValueSet: VBPIncentiveVS
Title: "Incentive"
Id: vbp-incentive
Description: "What type of incentive."
* ^experimental = false
* codes from system vbp-incentive

ValueSet: VBPCohortVS
Title: "Cohort"
Id: vbp-cohort
Description: "Cohort types."
* ^experimental = false
* codes from system vbp-cohort

ValueSet: VBPRMeasurePopulationVS
Title: "VBP Measure Population Type"
Id: vbp-measure-population
Description: "Measure population type that includes calculated-denominator and calculated-numerator."
* ^experimental = false
* include codes from system http://terminology.hl7.org/CodeSystem/measure-population
* include $vbp-measure-population#calculated-denominator "calculated-donominator"
* include $vbp-measure-population#calculated-numerator "calculated-numerator"

ValueSet: ThresholdTypeVS
Title: "Threshold Type"
Id: threshold-type
Description: "The threshold type."
* ^experimental = false
* codes from system threshold-type

ValueSet: MeasureStratifierExampleVS
Title: "Measure Stratifier Example"
Id: measure-stratifier-example
Description: "Example stratifiers that could be used to stratify measure or performance metrics."
* ^experimental = true
* codes from system measure-stratifier-example

ValueSet: MeasureContratualStatusVS
Title: "Measure Contractual Status"
Id: measure-contractual-status
Description: "Contractual status of a measure as specified in a value-based contract."
* ^experimental = true
* codes from system measure-contractual-status

---

File: repos/HL7_SLASH_davinci-vbpr/input/images/archive/SD-VbpMeasureReport.fsh

Profile: VbpMeasureReport
Parent: MeasureReport
Id: vbp-performance-measurereport
Title: "Value-Based Performance MeasureReport"
Description: "Value-Based Performance MeasureReport is a payer-generated performance report against the specific details (metrics) of a value-based contract (VBC) or a value-based purchasing (VBP) which may include financial, quality, utilization, etc. over a time period."
* ^status = #active
* ^version = "1.0.0"
* . ^short = "A value-based performance report"

//* extension contains $measurereport-category named measurereport-category 1..1 MS
//* extension[measurereport-category].extension ..0
//* extension[measurereport-category] ^short = "report category: value-based performance report"
//* extension[measurereport-category].value[x].coding 1..1
//* extension[measurereport-category].value[x].coding.code 1..
//* extension[measurereport-category].value[x].coding.code = #vbp (exactly)
//* extension[measurereport-category].value[x].coding.display = "Value-Based Performance"

* extension contains $measurereport-category named measurereport-category 1..1 MS
* extension[measurereport-category].extension ..0
* extension[measurereport-category] ^short = "report category: value-based performance report"
* extension[measurereport-category].value[x].coding 1..1
* extension[measurereport-category].value[x].coding.code 1..
* extension[measurereport-category].value[x].coding.code = #vbp (exactly)
//* extension[measurereport-category].value[x].coding.display = "Value-Based Performance"

* status MS
* type = #summary (exactly)
* type MS
* measure MS
* measure only Canonical(vbp-measure)
* measure ^short = "A Measure definition with contract level data for a value-based contract the report is for"
* subject 1.. MS
* subject only Reference($us-core-practitioner or $us-core-practitionerrole or $Group)
* subject.extension contains OrganizationSubject named orgSubject 1..1 MS 
* subject.extension[orgSubject] ^short = "What organization the report is for"
* date 1..1 MS
* reporter 1..1 MS
* reporter only Reference($us-core-organization)
* period 1..1 MS
* period ^short = "What performance period the report covers"
* period ^definition = "What performance period the report covers. If the report contains multiple payment streams and each with different service periods, the report period covers the entire time span of these payment streams service periods. "
* improvementNotation 0..0
* group 0..* MS
* group ^short = "Performance metrics in the report. Each group contains data for a performance metric."
* group.id MS 
* group.code 1..1 MS
* group.code from vbp-performance-metric (extensible)
* group.code ^short = "Performance metric"
//* group.measureScore 1..1 MS 
* group.measureScore ^short = "The performance metric value"
* group.measureScore.extension contains AlternateMeasureScore named altMeasureScore 0..1 MS
* group.measureScore.extension[AlternateMeasureScore] ^short = "Additional data type choices for the value of the performance metric"
* group.extension contains PaymentStream named paymentStream 0..* MS 
* group.extension[PaymentStream] ^short = "The payment stream the performance metric is part of"
//* group.extension[PaymentStream] contains QualityProgram named qualityProgram 0..1 MS 
//* group.extension[QualityProgram] ^short = "The quality program the performance metric is part of"
//* group.extension contains QualityProgram named qualityProgram 0..1 MS 
* group.extension contains ServicePeriod named servicePeriod 0..1 MS 
* group.extension[ServicePeriod] ^short = "The service period for the performance metric"
* group.extension[ServicePeriod] ^definition = "The service period may be the same as or a subset of the performance period the report covers."
* group.extension contains PaidThroughDate named paidThroughDate 0..1 MS
* group.extension[paidThroughDate] ^short = "Ending date of the pay cycle"
* group.extension contains Baseline named baseline 0..1 MS
* group.extension[Baseline] ^short = "The baseline for the performance metric"
* group.stratifier MS
* group.stratifier.stratum MS
* group.stratifier.stratum.measureScore MS
* group.stratifier.stratum.measureScore ^short = "Stratified performance metric value"
* group.stratifier.stratum.measureScore.extension contains AlternateMeasureScore named altMeasureScore 0..1 MS
* group.stratifier.stratum.measureScore.extension[AlternateMeasureScore] ^short = "Additional data type choices for the stratified performance metric value"

* group.stratifier.code MS
* group.stratifier.code from measure-stratifier-example (example)
* group.stratifier.stratum.value MS
* group.stratifier.stratum.component.code MS
* group.stratifier.stratum.component.code from measure-stratifier-example (example)
* group.stratifier.stratum.component.value MS

* evaluatedResource MS
* evaluatedResource ^short = "What data was used to calculate the performance metric(s)"
* evaluatedResource ^definition = "Evaluated resources are used to capture what data was involved in the calculation of performance metrics."
* evaluatedResource ^slicing.discriminator.type = #type
* evaluatedResource ^slicing.discriminator.path = "reference"

* evaluatedResource ^slicing.ordered = false
* evaluatedResource ^slicing.rules = #open
* evaluatedResource ^slicing.description = "quality measure MeasureReport(s) for quality measure performance"
* evaluatedResource contains qualityReport 0..*
* evaluatedResource[qualityReport] only Reference($vbp-quality-measurereport)
* evaluatedResource[qualityReport] ^short = "quality measure MeasureReport"
* evaluatedResource[qualityReport].extension contains GroupReference named groupRef 0..* MS
* evaluatedResource[qualityReport].extension[GroupReference] ^short = "Reference a performance metric (MeasureReport.group.id) on this value-based performance report"

---

File: repos/HL7_SLASH_davinci-vbpr/input/images/archive/SD-VbpQualityMeasureReport.fsh

Profile: VbpQualityMeasureReport
Parent: $DEQMSummaryMeasureReport
Id: vbp-quality-measurereport
Title: "VBP Quality MeasureReport"
Description: "VBP quality measure report at the summary level for a population. This profile is derived from the Data Exchange for Quality Measure IG's DEQM Summary MeasureReport."
* ^status = #active
* ^version = "1.0.0"

* extension contains $measurereport-category named measurereport-category 1..1 MS
//* extension[measurereport-category].extension ..0
* extension[measurereport-category] ^short = "report category: value-based performance report"
* extension[measurereport-category].value[x].coding 1..1
* extension[measurereport-category].value[x].coding.code 1..
* extension[measurereport-category].value[x].coding.code = #vbp (exactly)
//* extension[measurereport-category].value[x].coding.display = "Value-Based Performance"

* extension contains Score named score 0..1 MS
* extension[score] ^short = "Score of a measure, such as star rating score"
* extension contains Threshold named threshold 0..* MS 
* extension[threshold] ^short = "Threshold needed to be met when measuring performance"

* group.population.code from vbp-measure-population (extensible)
* group.stratifier.stratum.population.code from vbp-measure-population (extensible)

* group.stratifier.code from measure-stratifier-example (example)
* group.stratifier.stratum.component.code MS
* group.stratifier.stratum.component.code from measure-stratifier-example (example)
* group.stratifier.stratum.component.value MS

* group.stratifier.stratum.extension contains Score named score 0..1 MS
* group.stratifier.stratum.extension[score] ^short = "What score such as star rating score this stratum achieved"

---

File: repos/HL7_SLASH_davinci-vbpr/input/includes/example-list-generator.md


{% for p in site.data.ig.definition.resource %}
  {% if p.exampleBoolean %}
      {% if types %}
        {% assign types =  types | append: "," | append: p.reference.reference | split: '/' | first %}
      {% else %}
       {% assign types = p.reference.reference | split: '/' | first %}
      {% endif %}
  {% endif %}
{% endfor %}

{% assign my_array = types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

{% for i in my_array %}
### {{ i }}
  {%- for p in site.data.ig.definition.resource -%}
      {%- if p.exampleBoolean -%}
        {%- assign type =  p.reference.reference | split: '/' | first -%}
            {%- if type == i %}
- [{{p.name}}]({{p.reference.reference | replace: '/','-'}}.html)
            {%- endif -%}
       {%- endif -%}
   {%- endfor %}
{% comment %} keep this line here for proper rendering {% endcomment %}
{% endfor %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/includes/link-list.md

[Home]: index.html "Home Page"

[Profiles and Extensions]: artifacts.html#structures-resource-profiles
[Downloads]: downloads.html
[Examples]: examples.html
[Glossary]: glossary.html
[Guidance]: guidance.html
[Terminology]: artifacts.html#terminology-value-sets
[Capability Statements]: artifacts.html#behavior-capability-statements

[Clinical Quality Information (CQI) Work Group]: http://www.hl7.org/Special/committees/cqi/overview.cfm
[Da Vinci Project]: https://www.hl7.org/about/davinci/

[HL7 Da Vinci Guiding Principles]: https://confluence.hl7.org/display/DVP/Da+Vinci+Clinical+Advisory+Council+Members?preview=/66940155/66942916/Guiding%20Principles%20for%20Da%20Vinci%20Implementation%20Guides.pdf

<!-- Profiles -->
[VBP MeasureReport]: StructureDefinition-vbp-performance-measurereport.html
[VBP Quality MeasureReport]: StructureDefinition-vbp-quality-measurereport.html
[VBP Measure]: StructureDefinition-vbp-measure.html
[VBP Bundle]: StructureDefinition-vbp-bundle.html

<!-- Extensions -->
[Alternate MeasureScore]: StructureDefinition-alternate-measurescore.html
[Baseline]: StructureDefinition-baseline.html
[Group Reference]: StructureDefinition-group-reference.html
[Line of Business]: StructureDefinition-lob.html
[Organization Subject]: StructureDefinition-organization-subject.html
[Paid Through Date]: StructureDefinition-paid-through-date.html
[Payment Stream]: StructureDefinition-payment-stream.html
[Program Model]: StructureDefinition-program-model.html
[Quality Program]: StructureDefinition-quality-program.html
[Service Period]: StructureDefinition-service-period.html
[Star Score]: StructureDefinition-star-score.html
[Threshold]: StructureDefinition-threshold.html

<!-- Search Parameters -->
[Organization Subject Search Parameter]: SearchParameter-measurereport-subject-organization.html
[MeasureReport Category Search Parameter]: SearchParameter-measurereport-category.html

<!-- Value Set -->
[Performance Metric]: ValueSet-vbp-performance-metric.html
[VBP Measure Population Type]: ValueSet-vbp-measure-population.html

<!-- references -->
[CQFM Composite Measure]: http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/composite-measure-cqfm
[Data Exchange for Quality Measure (DEQM) Summary MeasureReport]: http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/summary-measurereport-deqm

---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/change-log.md


The Value-Based Performance Reporting Implementation Guide was developed under the  [Da Vinci Project].

### version 1.0.0

- **Applied**: Need to Validate HCPLAN Framework Codes with HTA ([FHIR-42385](https://jira.hl7.org/browse/FHIR-42385))
- **Applied**: Word "the" missing in 2.3 ([FHIR-41697](https://jira.hl7.org/browse/FHIR-41697))
- **Applied**: Version spelled incorrectly in 2.4 ([FHIR-41699](https://jira.hl7.org/browse/FHIR-41699))
- **Applied**: measureScore not capitalized in 2.5.1, bullet point 2 ([FHIR-41700](https://jira.hl7.org/browse/FHIR-41700))
- **Applied**: May be misspelled in 2.5.1 ([FHIR-41702](https://jira.hl7.org/browse/FHIR-41702))
- **Applied**: Cancer misspelled in 2.5.2 ([FHIR-41703](https://jira.hl7.org/browse/FHIR-41703))
- **Applied**: Medication misspelled in 3.1? ([FHIR-41704](https://jira.hl7.org/browse/FHIR-41704))
- **Applied**: "Administrative" misspelled in term "Administrative Cost" ([FHIR-41705](https://jira.hl7.org/browse/FHIR-41705))
- **Applied**: Change "more riskier" to "riskier" in the definition for "Average Risk Score" ([FHIR-41706](https://jira.hl7.org/browse/FHIR-41706))
- **Applied**: Edits to definition of "brand" ([FHIR-41707](https://jira.hl7.org/browse/FHIR-41707))
- **Applied**: Change definition of Line of Business (LOB) ([FHIR-41708](https://jira.hl7.org/browse/FHIR-41708))
- **Applied**: LAN's supposed to be HCP-LAN's? ([FHIR-41712](https://jira.hl7.org/browse/FHIR-41712))
- **Applied**: "cut off" to "cutoff" ([FHIR-41713](https://jira.hl7.org/browse/FHIR-41713))
- **Applied**: Change "urls" to "URLs" ([FHIR-41714](https://jira.hl7.org/browse/FHIR-41714))
- **Applied**: Insert "to" ([FHIR-41717](https://jira.hl7.org/browse/FHIR-41717))
- **Applied**: Change "cacluated-numerator" to "calculated-numerator" ([FHIR-41718](https://jira.hl7.org/browse/FHIR-41718))
- **Applied**: Change "The threashold type." to "The threshold type." ([FHIR-41719](https://jira.hl7.org/browse/FHIR-41719))
- **Applied**: change "offer" to "offers" in 1.3 ([FHIR-41720](https://jira.hl7.org/browse/FHIR-41720))
- **Applied**: Change "coming" to "come" in 1.3 ([FHIR-41721](https://jira.hl7.org/browse/FHIR-41721))
- **Applied**: Change "has" to "have" in 2.2 ([FHIR-41722](https://jira.hl7.org/browse/FHIR-41722))
- **Applied**: Change "provides" to "provide" in 2.5 ([FHIR-41723](https://jira.hl7.org/browse/FHIR-41723))
- **Applied**: Change "build" to "built" in 1.3.2 ([FHIR-41776](https://jira.hl7.org/browse/FHIR-41776))
- **Applied**: Typo in Guidance section 2.4 Resources http://hl7.org/fhir/us/davinci-vbpr/2023Sep/guidance.html The word "version" is mispelled: There are three profiles specified in this vresion of the implementation guide: ([FHIR-41888](https://jira.hl7.org/browse/FHIR-41888))
- **Applied**: Typo in Glossary: Typo in the definition of the Term = Brand http://hl7.org/fhir/us/davinci-vbpr/2023Sep/glossary.html Brand( for example Blue vs. non-blue) ([FHIR-41890](https://jira.hl7.org/browse/FHIR-41890))
- **Applied**: Example Typo ([FHIR-41895](https://jira.hl7.org/browse/FHIR-41895))
- **Applied**: remove "that" ([FHIR-42380](https://jira.hl7.org/browse/FHIR-42380))
- **Applied**: Add list to glossary ([FHIR-41384](https://jira.hl7.org/browse/FHIR-41384))
- **Applied**: Add "s" to "report" ([FHIR-41387](https://jira.hl7.org/browse/FHIR-41387))
- **Applied**: Do "TINs", "PMO" and "HMO" need to be spelled out in 2.5.1? ([FHIR-41388](https://jira.hl7.org/browse/FHIR-41388))
- **Applied**: change "stratify" to "stratifying" ([FHIR-41389](https://jira.hl7.org/browse/FHIR-41389))
- **Applied**: Change tense of stratify (intentional separate ticket)" ([FHIR-41391](https://jira.hl7.org/browse/FHIR-41391))
- **Applied**: "Administrative Costs" appears twice in the glossary ([FHIR-41394](https://jira.hl7.org/browse/FHIR-41394))
- **Applied**: Term "BP" in "Bonus Amount" definition ([FHIR-41395](https://jira.hl7.org/browse/FHIR-41395))
- **Applied**: Definition of "Measure Scoring" ([FHIR-41399](https://jira.hl7.org/browse/FHIR-41399))
- **Applied**: Define "PBP" in "Total Cost of Care" definition ([FHIR-42400](https://jira.hl7.org/browse/FHIR-42400))
- **Applied**: Change "Rx" to "Prescription" in the definition of "Total Cost PMPM"? ([FHIR-42401](https://jira.hl7.org/browse/FHIR-42401))
- **Applied**: Change "Total MA Support Revenue" to "Total Medicare Advantage (MA) Support Revenue" ([FHIR-42402](https://jira.hl7.org/browse/FHIR-42402))
- **Applied**: Define "NPM" in 5.1 ([FHIR-42404](https://jira.hl7.org/browse/FHIR-42404))
- **Applied**: Grammatical Error ([FHIR-42443](https://jira.hl7.org/browse/FHIR-42443))
- **Applied**: Incomplete/unclear sentence Guidance section 2.5.1 The Value-Based Performance MeasureReport ([FHIR-41889](https://jira.hl7.org/browse/FHIR-41889))
- **Applied**: Main page discusses APMs but does not spell out the acronym ([FHIR-41894](https://jira.hl7.org/browse/FHIR-41894))
- **Applied**: Need a way to identify if a measure is tied to payment, reporting only, or an alternate measure. ([FHIR-42876](https://jira.hl7.org/browse/FHIR-42876))
- **Applied**: Definition of "Revenue" ([FHIR-42398](https://jira.hl7.org/browse/FHIR-42398))
- **Applied**: Category 4 ballet point definition ([FHIR-42381](https://jira.hl7.org/browse/FHIR-42381))
- **Applied**: Add to challenges list ([FHIR-42382](https://jira.hl7.org/browse/FHIR-42382))
- **Applied**: Please clarify: "a future version will address from provider back to payer" ([FHIR-42383](https://jira.hl7.org/browse/FHIR-42383))
- **Applied**: Regarding "Administrative Cost" definition ([FHIR-42393](https://jira.hl7.org/browse/FHIR-42393))
- **Applied**: Define "PBP" in "Financial Benchmark" definition ([FHIR-42396](https://jira.hl7.org/browse/FHIR-42396))
- **Applied**: Regarding "Performance Benchmarks..." ([FHIR-42378](https://jira.hl7.org/browse/FHIR-42378))
- **Applied**: Regarding "Value-based contracting is important to the US healthcare system for several reasons:" ([FHIR-42376](https://jira.hl7.org/browse/FHIR-42376))
- **Applied**: Definition of "Quality Incentive payment" ([FHIR-42397](https://jira.hl7.org/browse/FHIR-42397))
- **Applied**: Regarding Figure 1-1 ([FHIR-42379](https://jira.hl7.org/browse/FHIR-42379))
- **Applied**: "payment stream" is spelled various ways in 2.5.1 ([FHIR-41701](https://jira.hl7.org/browse/FHIR-41701))
- **Applied**: HCP-LAN spelled differently throughout IG ([FHIR-41696](https://jira.hl7.org/browse/FHIR-41696))
- **Applied**: In the first bullet point of 5.4.4, change "it's" to "its". ([FHIR-41715](https://jira.hl7.org/browse/FHIR-41715))
- **Applied**: In the first bullet point of 5.4.4, change "futher" to "further". ([FHIR-41716](https://jira.hl7.org/browse/FHIR-41716))
- **Applied**: "Metric" and "measure" are defined as two different things. ([FHIR-42386](https://jira.hl7.org/browse/FHIR-42386))
- **Applied**: Need to use the measurereport-category extension ([FHIR-45203](https://jira.hl7.org/browse/FHIR-45203))


### Version 1.0.0-ballot
Initial content for the STU1 ballot.

{% include link-list.md %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/downloads.md


### Package File

The following package file includes a Node Package Manager ([NPM](https://hl7.org/fhir/packages.html)) package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs, etc., that are defined as part of this version of the implementation guide (IG). This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the [Validating Resources]({{site.data.fhir.path}}validation.html) documentation in FHIR.

- [Package](package.tgz){::download="true"}

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)

### Examples

All the examples that are used in this IG are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Schematrons

Schematrons are available for download:

- [Schematrons](schematrons.zip)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/examples.md


<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

<!-- {% include example-list-generator.md %} -->

The following examples are published with this guide, and all are available as a downloadable zip file [here](downloads.html#examples). 

<!-- ================================================ -->
### Example Value-Based Performance Report - vbp-measurereport101
This example value-based performance MeasureReport ([vbp-measurereport101](MeasureReport-vbp-measurereport101.html)) includes example payment streams: 
- shared savings - gated on quality,
- care coordination fee,
- quality incentive payment chronic care management incentive program, and
- quality incentive payment annual office visits

The example "shared savings - gated on quality" payment stream's weighted average star score is based on 9 quality measures.  

|[vbp-measurereport101](MeasureReport-vbp-measurereport101.html)|Example Value-Based Performance MeasureReport for a value-based contract between ABC Payer and GoodHealthClinic|
|[quality-measurereport01](MeasureReport-quality-measurereport01.html)|Example Quality Performance MeasureReport for Breast Cancer Screening|
|[quality-measurereport02](MeasureReport-quality-measurereport02.html)|Example Quality Performance MeasureReport for Colorectal Cancer Screening|
|[quality-measurereport03](MeasureReport-quality-measurereport03.html)|Example Quality Performance MeasureReport Diabetes Care - Blood Sugar Controlled|
|[quality-measurereport04](MeasureReport-quality-measurereport04.html)|Example Quality Performance MeasureReport Diabetes Care - Eye Exam Controlled|
|[quality-measurereport05](MeasureReport-quality-measurereport05.html)|Example Quality Performance MeasureReport Medication Adherence for Cholesterol (Statins)|
|[quality-measurereport06](MeasureReport-quality-measurereport06.html)|Example Quality Performance MeasureReport Medication Adherence for Hypertension (RAS antagonists)|
|[quality-measurereport07](MeasureReport-quality-measurereport07.html)|Example Quality Performance MeasureReport Medication Adherence for Diabetes Medications|
|[quality-measurereport08](MeasureReport-quality-measurereport08.html)|Example Quality Performance MeasureReport Statin Therapy for Patients with Cardiovascular Disease|
|[quality-measurereport09](MeasureReport-quality-measurereport09.html)|Example Quality Performance MeasureReport Statin Use in Persons with Diabetes (SUPD)|
|[vbp-measure01](Measure-vbp-measure01.html)|Example VBP Measure|
|[vbp-payer01](Organization-vbp-payer01.html)|Example Organization: ABC Payer|
|[vbp-provider01](Organization-vbp-provider01.html)|Example Organization: Good Health Clinic|
{: .grid}

### Example Value-Based Performance Report - vbp-measurereport102

This example value-based performance MeasureReport ([vbp-measurereport102](MeasureReport-vbp-measurereport102.html)) includes example payment streams: 
- utilization incentive payment
- shared savings - gated on quality

The example "shared savings - gated on quality" is based on 5 quality measures. 

|[vbp-measurereport102](MeasureReport-vbp-measurereport102.html)|Example Value-Based Performance MeasureReport for a value-based contract between ABC Payer and EveryHospital|
|[quality-measurereport11](MeasureReport-quality-measurereport11.html)|Example Quality Performance MeasureReport for Breast Cancer Screening|
|[quality-measurereport12](MeasureReport-quality-measurereport12.html)|Example Quality Performance MeasureReport for Colorectal Cancer Screening|
|[quality-measurereport13](MeasureReport-quality-measurereport13.html)|Example Quality Performance MeasureReport Diabetic Retinopathy: Communication with the Physician Managing Ongoing Diabetes Care|
|[quality-measurereport14](MeasureReport-quality-measurereport14.html)|Example Quality Performance MeasureReport Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)|
|[quality-measurereport15](MeasureReport-quality-measurereport15.html)|Example Quality Performance MeasureReport Diabetes: Medical Attention for Nephropathy|
|[vbp-measure02](Measure-vbp-measure02.html)|Example VBP Measure|
|[vbp-payer01](Organization-vbp-payer01.html)|Example Organization: ABC Payer|
|[vbp-provider02](Organization-vbp-provider01.html)|Example Organization: Every Hospital|
{: .grid}

### Example Value-Based Performance Report - vbp-measurereport103
The example shows an example report with 6 quality measures and 2 alternative measures.

|[vbp-measurereport103](MeasureReport-vbp-measurereport103.html)|Example Value-Based Performance MeasureReport for a value-based contract between ABC Payer and EveryHospital|
|[quality-measurereport20](MeasureReport-quality-measurereport20.html)|Example Quality Performance MeasureReport for Breast Cancer Screening|
|[quality-measurereport21](MeasureReport-quality-measurereport21.html)|Example Quality Performance MeasureReport for Colorectal Cancer Screening|
|[quality-measurereport22](MeasureReport-quality-measurereport22.html)|Example Quality Performance MeasureReport Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Control (<8.0%)|
|[quality-measurereport23](MeasureReport-quality-measurereport23.html)|Example Quality Performance MeasureReport Controlling High Blood Pressure|
|[quality-measurereport24](MeasureReport-quality-measurereport24.html)|Example Quality Performance MeasureReport Plan All-Cause Readmissions|
|[quality-measurereport25](MeasureReport-quality-measurereport25.html)|Example Quality Performance MeasureReport Member Satisfaction Survey|
|[vbp-measure02](Measure-vbp-measure02.html)|Example VBP Measure|
|[vbp-payer01](Organization-vbp-payer01.html)|Example Organization: ABC Payer|
|[vbp-provider02](Organization-vbp-provider01.html)|Example Organization: Every Hospital|
{: .grid}

### Example Value-Based Performance Report - vbp-measurereport104

|[vbp-measurereport104](MeasureReport-vbp-measurereport104.html)|Example Value-Based Performance MeasureReport for a value-based contract between ABC Payer and EveryHospital|
|[quality-measurereport30](MeasureReport-quality-measurereport30.html)|Example Quality Performance MeasureReport for Breast Cancer Screening|
|[quality-measurereport31](MeasureReport-quality-measurereport31.html)|Example Quality Performance MeasureReport for Colorectal Cancer Screening|
|[quality-measurereport32](MeasureReport-quality-measurereport32.html)|Example Quality Performance MeasureReport Diabetes Care - Blood Sugar Controlled|
|[quality-measurereport33](MeasureReport-quality-measurereport33.html)|Example Quality Performance MeasureReport Diabetes Care - Eye Exam|
|[vbp-measure02](Measure-vbp-measure02.html)|Example VBP Measure|
|[vbp-payer01](Organization-vbp-payer01.html)|Example Organization: ABC Payer|
|[vbp-provider02](Organization-vbp-provider01.html)|Example Organization: Every Hospital|
{: .grid}

{% include link-list.md %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/glossary.md


|Term|Definition|
|---|---|
|Administrative Cost|Administrative costs are the expenses associated with operating a health plan and exclude the cost of claims. They are largely driven by staffing, technology, and operational processes.|
|Adjustments|An adjustment is a request to reprocess the claim after taking into consideration some new or changed information. The information provided on the original claim is either corrected or supplemented.|
|Alternative Payment Models (APMs)|Alternative payment models deviate from traditional fee-for-service (FFS) payment, insofar as they adjust FFS payments to account for performance on cost and quality metrics, or insofar as they use population-based payments that are linked to quality performance. [source](http://hcp-lan.org/workproducts/ds-whitepaper-final.pdf)|
|Average Risk Score|Average risk score for the population, which is a numeric score where a higher score indicates a riskier population on average. Note that within that population, each patient also has risk score, which helps to know which patient is riskier.|
|Bonus Amount|VBP models may reward quality and cost savings separately, or they may link them. When treated separately, there is a discrete quality bonus, irrespective of the provider’s performance relative to their financial benchmark.|
|Brand|Brand (for example Blue vs. non-blue)|
|Capitation|A fixed amount of money per patient per unit of time paid in advance to the physician (or health care provider) for the delivery of health care services. The actual amount of money paid is determined by the ranges of services that are provided, the number of patients involved, and the period of time during which the services are provided.[source](https://www.acponline.org/about-acp/about-internal-medicine/career-paths/residency-career-counseling/resident-career-counseling-guidance-and-tips/understanding-capitation)|
|Care Coordination Fee (CCF)|Care coordination fees are the Per Member Per Month (PMPM) payments based on the number of patients that are assigned to primary care physicians|
|Incurred but not reported (IBNR)|A type of reserve account used in the insurance industry as the provision for claims and/or events that have transpired, but have not yet been reported to an insurance company|
|Fee-for-Service (FFS)|Traditional health care payment models, in which providers are paid separately for each service they deliver.|
|Financial Benchmark|A set, risk-adjusted dollar amount typically determined by historical fee-for-service spend, market-based trends, or other methods that is used to measure financial performance in VBP Models. Programs using a financial benchmark most closely align with the HCPLAN Categories 3 and 4. (source: [CAQH CORE Framework for Semantic Interoperability in Value-based Payments](https://www.caqh.org/hubfs/CORE/CORE_Framework_for_Semantic_Interoperability_in_Value_Based_Payments_vSI.1.0.pdf))|
|Gating|Meet a performance threshold for other terms to apply. Establish a performance target or “gate” that must be cleared before an accountable provider organization can receive rewards.|
|Inpatient Claims|Bills submitted for program level (facility-based) services |
|Line of Business (LOB)|Commercial, Medicaid, Medicare, etc.|
|Measure sets|A collection of measures that are mutually reinforcing to produce positive outcomes for a defined patient population.|
|Measure Targets|The performance rates that accountable provider organizations need to achieve to receive different levels of rewards and penalties|
|Medical Cost Target|Projected medical cost|
|Medical Loss Ratio (MLR)|The share of total health care premiums spent on medical claims.|
|Medical Loss Ratio Target (MLRT)|Actuarial estimate of MLR|
|Population-Based Payment Model|A payment model in which a provider organization is given a population-based global budget or payment and accepts accountability for managing the total cost of care, quality, and outcomes for a defined patient population across the full continuum of care. They are payment models in Categories 3 and 4 of the HCPLAN's APM Framework.|
|Product|A product is a discrete package of health insurance coverage benefits that are offered using a particular product network type (such as health maintenance organization, preferred provider organization, exclusive provider organization, point of service, or indemnity) within a service area.|
|Quality Incentive payment|A type of payment that is tied to the achievement of performance or reporting on a set of established quality measures.|
|Revenue Per Member Per Month (PMPM)|Revenue per member per month|
|Revenue|Total revenues earned, which includes premiums and other resources that a payer receives.|
|Runout|Runout is an administrative period of time following the end of the plan year that allows a participant extra time to submit eligible claims incurred during the plan year.|
|Measure Scoring|The scoring type of the measure, such as proportion, ratio, continuous-variable, cohort, and composite.|
|Service through Date|Absolute cutoff date for data included in performance period|
|Shared Savings/Loss|Projected expenses vs. actual claims received|
|Total Cost of Care (TCOC)|A broad indicator of spending for a given population (i.e., payments from payer to provider organizations). In the context of population-based payment (PBP) models, in which provider accountability spans the full continuum of care, TCOC includes all spending associated with caring for a defined population, including provider and facility fees, inpatient and ambulatory care, pharmacy, behavioral health, laboratory, imaging, and other ancillary services.|
|Total Cost PMPM|Total of Medical and Prescription Cost/Member Months|
|Total Medicare Advantage (MA) Support Revenue|Premiums collected from Medicare Advantage|
|Total Revenue|Premiums the payer is collecting|
|Variance Cost|Actual costs/Projected costs|
|Withhold|An amount of payment that is withheld and may have additional measurement thresholds to receive this payment|
|Value-based Purchasing (VBP)|Linking provider payments to improved performance by health care providers. This form of payment holds health care providers accountable for both the cost and quality of care they provide. It attempts to reduce inappropriate care and to identify and reward the best-performing providers. [source](https://www.healthcare.gov/glossary/value-based-purchasing-vbp/). VBP may also be referred to as value-based contracting, value-based payments, and alternative payment models|
{: .grid}


---

{% include link-list.md %}

---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/guidance.md


### Introduction

Originally, value-based payment models were designed to reward healthcare providers with incentive payments for the quality of care they give to people with Medicare. The programs were designed to link provider performance of quality measures to provider payment and work with other CMS quality efforts to ensure that quality is being achieved. Value-based purchasing refers to a broad set of performance-based payment strategies that link financial incentives to providers' performance on a set of defined metrics and measures. Value-based purchasing programs are private or public programs that link financial reimbursement to performance on measures of quality (i.e., structure, process, outcomes, access, and patient experience) and cost or resource use.<sup>[1](https://www.rand.org/pubs/periodicals/health-quarterly/issues/v4/n3/09.html)</sup> 

Economic challenges and higher healthcare costs have expanded these value-based payment models to larger populations of patients and members. The industry has adopted several names for the original value-based payment models, including value-based purchasing, value-based contracting, value-based payments, and, most recently, alternative payment models. 

For the purpose of this implementation guide, any report that meets the definition of a value-based payment model, meaning a contract that links financial incentives to providers’ financial, quality, and risk performance on defined metrics and measures, will be considered a **value-based performance report**. Reporting performance against the specific details of a contract may include financial, quality, utilization, etc. over defined time periods.

In this implementation guide, we use the term metrics to refer to financial measures in the report, and the term quality measures or measures to refer to the quality measures such as the colorectal cancer screening measure. 

### Preconditions and Assumptions

This following is a list of pre-requisites for using this implementation guide:
- Payer and Provider have value-based contract agreement in place
    - *Data agreed in a contract includes information such as program details, data aggregation period, reporting period, and attribution methods.*
- Payer and Provider have an established process for creating and reconciling member attribution list
    - *Creation and reconciliation of attributed member list is outside the scope of this implementation guide*
- Payer assembles administrative, clinical, quality, and claims data for attributed members
- Payer calculates population performance
    -  *Calculating population performance is outside the scope of this implementation guide*
- Payer calculates incentive
    - *Calculating financial incentive is outside the scope of this implementation guide*
- Payer calculates performance based on contract terms
    - *Calculating performance is outside the scope of this implementation guide*
    - *Performance helps determine incentives*
- Payer generates population level reports for providers
    - *Member-level performance is outside the scope of this implementation guide*
- Provider submits attributed member quality and risk adjustment data to Payer  
- Payer and Provider has established security and privacy practices in place

### Actors

The actors involved in exchanging value-based performance reports are Clients and Servers.
* **Clients** are the actors requesting value-based performance reports. 
* **Servers** are the actors receiving the request for retrieving the value-based performance reports. 
In the scenario where the Payer sends the value-based performance reports to the Provider, the Payer acts as the Server and the Provider acts as the Client. 

### Resources

There are three profiles specified in this version of the implementation guide:  
* The [Value-Based Performance MeasureReport](StructureDefinition-vbp-performance-measurereport.html) is the main resource that represents a value-based performance report, which could include data on financial and utilization metrics and quality measures, etc.  
* The Value-Based Performance MeasureReport `evaluatedResource` references the [VBP Quality MeasureReport](StructureDefinition-vbp-quality-measurereport.html) profile. This profile derives from the Da Vinci Data Exchange for Quality Measure IG's DEQM Summary MeasureReport profile and provides additional capability to support the need for exchanging quality measure data relevant for value-based performance reporting. 
* Relevant value-based contract level information is represented using the [Value-Based Performance Measure](StructureDefinition-vbp-measure.html). 

{% include img-portrait.html img="resources.png" caption = "Figure 2-1 Resources Overview" %}

### Workflow

Figure 2-2 describes value-based performance reporting workflow between a Payer and a Provider. Payer creates Value-Based Performance Measure for a value-based contract and generates VBP MeasureReport for a performance period, Provider then periodically gets the reports from the Payer. 

{% include img-portrait.html img="api-workflow.png" caption = "Figure 2-2 Value-based performance reporting workflow" %}


### Value-Based Reporting Framework

Value-based payment models are expected to grow across all lines of business. The adoption of value-based care has accelerated in recent years, and this trend could continue in the coming years as payers, employers, and the government embrace these value-based care models. Value-based contracts encompass a broad variety of models, such as capitation, pay-for-performance, pay-for-quality, and shared savings to name a few. The performance metrics and measures that these value-based contracts need to measure and to track are also very broad, which spans over financial, quality, utilization and more. 
Because of the challenges with ever-expanding value-based payment models and performance metrics associated with those models, it would be near impossible and unsustainable to specify a comprehensive list of named representations for these different value-based care models and metrics. This implementation guide has taken the approach of defining a framework for value-based performance reporting. The profiles specified in this implementation guide provide standard structural representation that is intended to support reporting on various value-based payment models. Commonly used payment models and performance metrics are defined in value sets with extensible binding, which provides Payer and Provider the flexibility for reporting value-based payment models and metrics that are not yet defined in this implementation guide or those that are applicable only to their own organizations.

#### Value-Based Performance MeasureReport

The Value-Based Performance MeasureReport ([VBP MeasureReport]) is a profile on the MeasureReport resource. Each `MeasureReport.group` corresponds to a performance metric. 
-	The `MeasureReport.group.code` has an extensible binding to the [Performance Metric] value set. This value set contains a list of commonly used performance metrics for various value-based payment models. Several extensions are added to the `group` element to provide additional information about a performance metric. 
-	`measureScore` is the value of a performance metric. An extension [Alternate MeasureScore] is added to allow additional data types including decimal, integer, CodeableConcept, boolean, and Money to be used in addition to Quantity.
-	`paymentStream` is a complex extension. The `type` is required, which has an extensible binding to the Payment Stream value set. The Payment Stream value set defines commonly used value-based payment models such as care coordination fee, shared savings percent, shared savings gated on quality, and etcetera. The `incentive` is an optional field and is intended to provide more granular incentive program information for the Quality Incentive Payment payment stream, such as chronic care management and annual office visit. The `paymentStream` has cardinality of 0..*. It is possible for a performance metric to be associated with different payment streams. 
-	`baseline` is a complex extension. The baseline value of the performance metric and the time period the baseline was measured could be provided. 
-	`servicePeriod` is the service period for a performance metric. Each performance metric may have a different service period. 
-	`paidThroughDate` is the ending date of the pay cycle.

Value-based performance reports often include data on performance on overall population and stratified results on those performance metrics based on variety of stratifiers. This IG has defined a list of stratifier codes, which include facility, taxid, group, geography, and cohort.
-	The `MeasureReport.group.stratifer` provides the capabilities of stratifying based on a single stratifier or combination of a number of stratifiers. 
-	For example, to stratify by regions within an organization only, it will use facility as the stratifier code, then the `stratifier.stratum.value` would be selecting from a list of codes that represent the regions. The exact codes may be specific to a payer or provider organization. 
- If stratifying by a compound stratifier, such as both facility and cohort (either HMO or PPO), this would be represented using the `stratifier.stratum.component`. 

Many value-based payment models involve quality. The implementation guide reuses the [Data Exchange for Quality Measure (DEQM) Summary MeasureReport] for reports on quality measures. The [VBP MeasureReport] profile created a slice on the `MeasureReport.evaluatedResource` to reference the [VBP Quality MeasureReport] profile, which is derived from the DEQM Summary MeasureReport. The `groupReference` extension allows a VBP MeasureReport to be linked to a specific performance metric by using the `group.id` if needed.

For a value-based performance report, the subject of the report is always an organization. Because Organization is not an allowable choice for the MeasureReport `subject` in FHIR R4 (note that in FHIR R5, MeasureReport.subject has been updated to support Organization), an [Organization Subject] extension is added to the `MeasureReport.subject` to allow an organization as the subject. 
A customized [Organization Subject Search Parameter] on the Value-Based Performance MeasureReport is also defined to support a search by organization as the subject.  


Figure 2-2 provides a structural overview of the VBP MeasureReport. (Note: elements that are added as extensions are indicated with purple background.)
{% include img-portrait.html img="vbp-measurereport.png" caption = "Figure 2-3 VBP MeasureReport overview" %}

#### Value-Based Performance (VBP) Quality MeasureReport

[VBP Quality MeasureReport] is based on the DEQM Summary MeasureReport with a few extensions. 
-	`MeasureReport.threshold`: value-based performance reports often include threshold information for a measure, for example, the threshold for this measure for a 4 star in a star rating is 85%. The `type` indicates what kind of threshold. The `threshold` is the value of the threshold, such as 85%. The gap that needs to meet the threshold can be represented using the optional `gapToThreshold`.  
-	`MeasureReport.score`: this score is used to represent scores such as a star rating score.

This profile has defined a [VBP Measure Population Type] value set. This value set added two new codes calculated-denominator and calculated-numerator to the Measure Population Type value set from the base Measure resource. The calculated-denominator is the resulting denominator when calculating performance rate, for a proportion measure, this would be the result of denominator – denominator exclusion – denominator exception. Same applies to the calculated-numerator. 

Figure 2-3 and Figure 2-4 used the colorectal cancer screening and the breast cancer screening measures as examples to illustrate the use of the VBP Quality MeasureReport. 

{% include img-portrait.html img="vbp-quality-measurereport-colorectalcancer.png" caption = "Figure 2-4 VBP Quality MeasureReport overview - colorectal cancer screening measure example" %}

{% include img-portrait.html img="vbp-quality-measurereport-breastcancer.png" caption = "Figure 2-5 VBP Quality MeasureReport overview - breast cancer screening measure example" %}

#### Value-Based Performance (VBP) Measure

The [VBP Measure] is used to represent value-based contract information that are needed for value-based performance reporting. The [VBP Measure] profile is derived from the [CQFM Composite Measure] profile. This is to reuse the composite measure structure to represent the list of quality measures that are specified in a value-based contract. 

This profile added a few extensions to represent the following:
-	lineOfBusiness: line of business whether it is Medicare, Medicaid, or commercial. 
-	programModel: HCPLAN APM framework categories. A value-based contract may have a different HCPLAN APM framework category applicable for a different cohort. 
-	paymentStream: value-based payment models such as care coordination fee, shared savings percent, shared savings gated on quality.

{% include img-portrait.html img="vbp-measure.png" caption = "Figure 2-6 VBP Measure overview" %}


### Must Support
Certain elements in the profiles defined in this implementation guide are marked as Must Support. This flag is used to indicate that the element plays a critical role in defining and sharing value-based performance reports, and implementations SHALL understand and process the element.

This IG uses US Core profiles where appropriate, therefore, the implications of the Must Support flag for US Core profiles must also be considered.

For more information, see the definition of [Must Support](http://hl7.org/fhir/R4/conformance-rules.html#mustSupport) in the base FHIR specification.

### Dependencies

This implementation guide relies on the following specifications:
- [FHIR R4](http://hl7.org/fhir/R4/)
- [US Core STU3.1.1](http://hl7.org/fhir/us/core/STU3.1.1)

{% include link-list.md %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/index.md


###  Summary

The Da Vinci Fast Healthcare Interoperability Resource (FHIR) Value-Based Performance Reporting (VBPR) Implementation Guide supports exchanging financial and quality performance data based on contractual performance measurements agreed to by payers and providers. 

Value-based contracting offers the following benefits to the US healthcare system:
- Encourages providers to focus on quality outcomes and efficiency
- Helps to reduce wasteful healthcare spending and improve the affordability of healthcare for individuals, employers, and the government
- Promotes cost containment by incentivizing providers to improve the quality of care, rather than just providing more services
- Has shown to lead to better health outcomes for patients and improved patient satisfaction
- Promotes innovation in healthcare delivery and payment models, which can help drive improvements in healthcare quality, efficiency, and affordability

Reporting performance against the specific details of a contract may include financial, quality, utilization, etc. over defined time periods. This timely performance reporting provides the needed transparency required at the point of care and is essential to the success of value-based contracts for both payers and providers.

The first Standard for Trial Use (STU) version of this implementation guide focuses on the standard exchange format of value-based financial and quality performance reports for payers to providers. It may also benefit both providers and payers by reducing the administrative burden to providers by standardizing the reporting they receive across all payers.

This implementation guide is supported by the Da Vinci initiative which is a private effort to accelerate the adoption of Health Level Seven International Fast Healthcare Interoperability Resources (HL7® FHIR®) as the standard to support and integrate value-based care data exchange across communities. Like all Da Vinci Implementation Guides, it follows the [HL7 Da Vinci Guiding Principles] for exchange of patient health information. As an HL7 FHIR Implementation Guide, changes to this specification are managed by the sponsoring [Clinical Quality Information (CQI) Work Group] and are incorporated as part of the standard balloting process.

### How to read this implementation guide

This implementation guide is divided into several pages which are listed at the top of each page in the menu bar:

- [Home]\: The home page provides the summary, background information, scope, and actors for this implementation guide.
- FHIR Artifacts: These pages lists FHIR artifacts specified in this implementation guide. 
    - [Profiles and Extensions]\: This page lists the set of Profiles and Extensions that are defined in this implementation guide.
    - [Terminology]\: This page lists code systems and value sets defined in this implementation guide.
    - [Capability Statements]\: This page describes the expected FHIR capabilities of this implementation guide.
- [Examples]\: This page lists all the examples used in this implementation guide.
- [Glossary]\: This page lists glossary and acronyms for this implementation guide.
- [Downloads]\: This page provides links to downloadable artifacts.

### Background
{: #background}
Value-Based Performance Reporting (VBPR) offers insights into the performance of healthcare providers and organizations by evaluating their financial, quality, cost, and efficiency aspects. These reports play a crucial role in assessing and comparing providers within value-based contracts. The objective of such contracts is to encourage superior care, enhance patient outcomes, and lower costs by compensating providers according to their performance, as opposed to the quantity of services provided.

Payer-generated performance reports are crucial because payers are generally the arbiters in determining financial performance on risk contracts with health systems. Many times, payers have the best source of information on Per Member Per Month (PMPM) spend, contractual terms, regional or historical trends, and other financial information that health systems need to track and manage performance on those contracts. Claims data is important but insufficient on its own because state and federal requirements mask certain types of data that make accurate financial calculations difficult.  

#### Key Components of VBPR Reports

- **Performance Categories**: Distinct areas of provider performance, such as clinical quality, cost, utilization, and patient experience, which are evaluated and weighted to calculate an overall performance score.
- **Quality Measures**: Quantitative metrics that assess the performance of healthcare providers and organizations in terms of clinical outcomes, patient safety, patient experience, and adherence to clinical guidelines and best practices.
- **Performance Benchmarks**: Comparative metrics used to evaluate provider performance against established industry standards or the historic performance of peer organizations or clinician/organization's own performance over time.
- **Incentive Payments**: Financial rewards or penalties applied to providers based on their performance to encourage improvements in care quality and efficiency.
- **Risk Adjustment**: A methodology applied to account for differences in patient populations, such as demographic factors, clinical conditions, and social determinants of health, to ensure fair comparisons of provider performance.

Healthcare providers and participating organizations submit performance data, including quality measures, cost, and utilization metrics, to payers or other regulatory bodies for evaluation and analysis. There have been numerous value-based performance initiatives launched by both public and private payers, including accountable care organizations (ACOs), bundled payments, and pay-for-performance programs to name a few. These initiatives have continued to evolve and expand, with a growing emphasis on patient-centered care, population health management, and the use of data analytics to drive quality improvement and cost containment. 
 
Value-based performance reports are generated by payers to summarize provider performance across different categories, including lines of business, contracts, populations, quality measures, and financial metrics and reporting periods on a scheduled and ad-hoc basis. 
 
Based on the calculated performance scores, incentive payments are calculated and distributed to providers as rewards or penalties, encouraging continuous improvement in care quality and efficiency.

#### HCPLAN APM Framework 
The Health Care Payment Learning & Action Network (HCPLAN) <sup>[1](https://hcp-lan.org/)</sup> is a public-private partnership established in 2015 by the US Department of Health and Human Services (HHS) to accelerate the transition to value-based payment models in the US healthcare system. HCPLAN has defined several categories that help to categorize the alternative payment models (APMs). (See the [Alternative Payment Model APM Framework](https://hcp-lan.org/workproducts/apm-refresh-whitepaper-final.pdf) and the [APM Framework](https://hcp-lan.org/workproducts/apm-figure-1-final.pdf)). These categories are intended to provide a framework for evaluating the complexity and risk associated with different APMs, and to help stakeholders understand the trade-offs between different payment models. 

{% include img-portrait.html img="hcplan-apm-framework.png" caption = "Figure 1-1 HCPLAN APM Framework" %}

- **Category 1**: Fee-for-Service with No Link to Quality and Value: This level includes traditional fee-for-service payment models that do not provide incentives for quality improvement or cost containment. (Note that Category 1 is not addressed in this implementation guide).
 
- **Category 2**: Fee-for-Service with Links to Quality and Value: foundational payments for infrastructure and operations, pay for reporting, or pay-for-performance. 

- **Category 3**: APMs built on fee-for-service architecture: This level includes payment models that focus on upside risk only or episode-based payment for procedures and comprehensive payments with upside and downside risk. This category also included risk-based payments NOT linked to quality.  

- **Category 4**: Population-based Payment: Category 4 payment models involve prospective, population-based payments, structured in a manner that encourages providers to deliver well-coordinated, high-quality, person-centered care within either a defined scope of practice (4A), a comprehensive collection of care (4B), or a highly integrated finance and delivery system (4C). Category 4 APMs require accountability for measures of appropriate care to provide additional safeguards against incentives to limit necessary care. Absent this accountability, APMs that use prospective, population-based payments will be classified in Category 4N.

This level includes payment models where providers receive a fixed payment for a specific population, such as a patient panel, and are responsible for delivering all necessary care within that population. This category also includes global budgets or full/percent of premium payment and integrated finance and delivery system. This category also includes capitated payments not linked to quality. 

While a framework is in place to identify the types of value-based agreements payers and providers can participate in, there is a challenge in collecting, analyzing and reconciling the numerous reports providers receive from payers. Some of these challenges include:
- Lack of standardizations for value-based performance reporting format 
- Data is in unstructured formats
- Lack of common definitions, for example, Total Care Capitation (TCC) could have many different calculations
- Data retrieval is time intensive because of reports come from various portals and is not scalable
- Data is error-prone based on human error when entering into reporting systems
- Misalignment on time periods when data is shared, and care is delivered. 
- Various reporting, payment, and reconciliation periods can make tracking performance across contractual measures difficult for providers to understand how well they are performing prior to various settlement dates.
- Variation in metrics used across payers and also variation in methodology – e.g., attribution.


### Scope

The goals of implementation guide are:
- Standardize the format of payer-generated value-based performance report and 
- Exchange standardized payer-generated value-based performance report from payer to provider. 

The initial phase of this implementation guide focuses on:
- Defining standardized data structure and data elements on value-based performance reports
- Identifying and defining common data elements in a value-based performance report 
- Supporting both Medicare value-based contracts (Medicare Advantage) and commercial value-based contracts, and other types of value-based contracts such as Medicaid.

{% include img-portrait.html img="stu1_scope.png" caption="Figure 1-2 Scope"%}


---

### Credits

This implementation guide was made possible by the thoughtful contributions of the following people and organizations:

- *The [Da Vinci Project](http://www.hl7.org/about/davinci/index.cfm?ref=common) member organizations.*


- *Vincent Powell, Providence*
- *Semira Singh, Providence*
- *Michael Pattwell, Edifecs*
- *Tom Dean, Edifecs*
- *David Degandi, Cambia Health Solutions*
- *Omar Amezquita, Cambia Health Solutions*
- *Katie Roan, Optum*
- *Rao Yogesh, Optum*
- *Bryn Rhodes, Smile Digital Health*
- *Rob Reynolds, Smile Digital Health*
- *Teresa Younkin, Point-of-Care Partners*
- *Yan Heras, Optimum eHealth*
- *Viet Nguyen, Stratametrics*

---

{% include link-list.md %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/StructureDefinition-vbp-measure-intro.md

{% assign id = {{include.id}} %}

The Value-Based Performance Measure is designed to derive from the [CQFM Composite Measure](http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/composite-measure-cqfm) profile because value-based contracts may include performance based on quality measures. Basing on the CQMF Composite Measure profile would allow the Value-Based Performance Measure profile to reuse the standardized representation of a composite measure as defined in the [Quality Measure Implementation Guide](http://hl7.org/fhir/us/cqfmeasures/) to represent the list of quality measures and the weight of each measure in a value-based contract that tie to a payment stream using `Measure.relatedArtifact`.  

The [Formal Views](StructureDefinition-vbp-measure.html#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Value-Based Performance Measure has the following mandatory elements:**
1. A `url` - a canonical identifier for this measure (value-based contract)
1. A `version` - version of the measure (value-based contract)
1. A `name` - a computer friendly name for this measure (value-based contract)
1. A `status` - status of this measure
1. An `experimental` element - set to `true` if for testing
1. A `publisher` - name of the publisher for this measure (value-based contract)
1. A `description` - description of the measure (value-based contract)

**Each Value-Based Performance Measure should have the following elements:**
1. Zero to many `identifier` - business identifier of the measure (value-based contract)
1. Zero to one `title` - a human friendly title for this measure (value-based contract)
1. Zero to one `effectivePeriod` - effective period of the measure, which is the contract term period for a value-based contract
1. Zero to one `lineOfBusiness` - line of business for the measure (value-based contract)
1. Zero to many `paymentStream` - list of payment streams covered in the measure (value-based contract)
1. Zeor to one `programModel` - program model for the measure (value-based contract) based on the HPCLAN Framework
1. Zero to many `group.code` - list of performance metrics that could be reported on the measure (value-based contract)
1. zero to many `relatedArtifact` - list of quality measures specified in the value-based contract that ties to the payment stream based on quality measures
1. zero to one `relatedArtifact.weight` for each relatedArtifact - the weight of a quality measure that contributes to the scoring


{% include link-list.md %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/StructureDefinition-vbp-performance-measurereport-intro.md

{% assign id = {{include.id}} %}

The [Formal Views](StructureDefinition-vbp-performance-measurereport.html#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Value-Based Performance MeasureReport has the following mandatory elements**
1. A `measurereport-category` - with a fixed code `vbp`
1. A `status` - status of this report
1. A `type` - with a fixed value `summary`
1. A `measure` - that references the Value-Based Performance Measure
1. An `orgSubject` extention on `subject` - that references the organization the report is for
1. A `date` 
1. A `reporter` - references the organization who is reporting the data
1. A `period` - the performance period the report covers

**Each Value-Based Performance MeasureReport should have the following elements**
1. Zero to many `group` - each group corresponds to a performance metric
    * If `group` is present, each group must have a `group.code` that represents the performance metric   
1. Zero to many `evaluatedResource` - references the VBP Quality MeasureReport profile


{% include link-list.md %}


---

File: repos/HL7_SLASH_davinci-vbpr/input/pagecontent/StructureDefinition-vbp-quality-measurereport-intro.md

{% assign id = {{include.id}} %}

The Value-Based Performance (VBP) Quality MeasureReport derives from the [DEQM Susmmary MeasureReport](http://hl7.org/fhir/us/davinci-deqm/StructureDefinition/summary-measurereport-deqm).  

The [Formal Views](StructureDefinition-vbp-quality-measurereport.html#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Value-Based Performance Measure has the following mandatory elements:**
1. A `measurereport-category` - with a fixed code `vbp`
1. A `url` - a canonical identifier for this measure (value-based contract)
1. A `version` - version of the measure (value-based contract)
1. A `name` - a computer friendly name for this measure (value-based contract)
1. A `status` - status of this measure, which would often be `active`
1. An `experimental` element - set to `true` if for testing
1. A `publisher` - name of the publisher for this measure (value-based contract)
1. A `description` - description of the measure (value-based contract)

**Each Value-Based Performance Measure should have the following elements:**
1. Zero to many `identifier` - business identifier of the measure (value-based contract)
1. Zero to one `title` - a human friendly title for this measure (value-based contract)
1. Zero to one `effectivePeriod` - effective period of the measure, which is the contract term period for a value-based contract
1. Zero to one `lineOfBusiness` - line of business for the measure (value-based contract)
1. Zero to many `paymentStream` - list of payment streams covered in the measure (value-based contract)
1. Zeor to one `programModel` - program model for the measure (value-based contract) based on the HPCLAN Framework
1. Zero to many `group.code` - list of performance metrics that could be reported on the measure (value-based contract)
1. zero to many `relatedArtifact` - list of quality measures specified in the value-based contract that ties to the payment stream based on quality measures
1. zeor to one `relatedArtifact.weight` for each relatedArtifact - the weight of a quality measure that contributes to the scoring


{% include link-list.md %}


---

